create extension if not exists vector with schema extensions;

create table if not exists public.image_library (
    id bigint generated always as identity primary key,
    filename text not null unique,
    original_url text,
    local_url text,
    page_url text,
    page_path text,
    alt_text text not null default '',
    description text not null default '',
    asset_type text not null default 'photo',
    tags text[] not null default '{}',
    search_text text not null,
    search_text_checksum text not null,
    has_local_asset boolean not null default false,
    embedding extensions.vector(1536),
    embedding_model text,
    embedded_at timestamp with time zone,
    created_at timestamp with time zone default now(),
    updated_at timestamp with time zone default now()
);

create index if not exists image_library_embedding_hnsw
on public.image_library
using hnsw (embedding extensions.vector_cosine_ops);

create index if not exists image_library_filename_idx
on public.image_library (filename);

create index if not exists image_library_asset_type_idx
on public.image_library (asset_type);

create index if not exists image_library_page_path_idx
on public.image_library (page_path);

alter table public.image_library enable row level security;

create or replace function public.match_image_library(
    query_embedding extensions.vector(1536),
    match_count int default 20,
    match_threshold float default 0,
    filter_asset_types text[] default null,
    restrict_to_local boolean default false
)
returns table (
    id bigint,
    filename text,
    original_url text,
    local_url text,
    page_url text,
    page_path text,
    alt_text text,
    description text,
    asset_type text,
    tags text[],
    has_local_asset boolean,
    similarity float
)
language sql
stable
set search_path = public, extensions
as $$
    select
        image_library.id,
        image_library.filename,
        image_library.original_url,
        image_library.local_url,
        image_library.page_url,
        image_library.page_path,
        image_library.alt_text,
        image_library.description,
        image_library.asset_type,
        image_library.tags,
        image_library.has_local_asset,
        1 - (image_library.embedding <=> query_embedding) as similarity
    from public.image_library
    where image_library.embedding is not null
      and (filter_asset_types is null or image_library.asset_type = any(filter_asset_types))
      and (not restrict_to_local or image_library.has_local_asset)
      and (1 - (image_library.embedding <=> query_embedding)) >= match_threshold
    order by image_library.embedding <=> query_embedding
    limit match_count;
$$;
