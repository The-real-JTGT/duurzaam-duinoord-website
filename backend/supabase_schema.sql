-- Supabase Schema for Duurzaam Duinoord Drag-and-Drop CMS

-- Create the table to store the pages and their drag-and-drop JSON content
CREATE TABLE pages (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    title TEXT NOT NULL,
    slug TEXT NOT NULL UNIQUE,
    content JSONB DEFAULT '{}'::jsonb NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- RLS (Row Level Security) Policies
-- Allow anyone to READ the pages (so the public Next.js frontend can display them)
ALTER TABLE pages ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public read access" 
ON pages FOR SELECT 
USING (true);

-- Allow authenticated editors to do anything (Insert, Update, Delete)
CREATE POLICY "Allow authenticated full access" 
ON pages FOR ALL 
USING (auth.role() = 'authenticated');

-- Insert the initial homepage skeleton
INSERT INTO pages (title, slug, content) 
VALUES (
  'Homepage', 
  '/', 
  '{"content": [], "root": {"props": {"title": "Duurzaam Duinoord"}}, "zones": {}}'::jsonb
);
