import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

function createNoopSupabase() {
  const query = {
    select() {
      return query
    },
    eq() {
      return query
    },
    maybeSingle() {
      return Promise.resolve({ data: null, error: null })
    },
    upsert() {
      return Promise.resolve({ data: null, error: null })
    },
    insert() {
      return Promise.resolve({ data: null, error: null })
    },
    update() {
      return Promise.resolve({ data: null, error: null })
    },
    delete() {
      return Promise.resolve({ data: null, error: null })
    },
  }

  return {
    from() {
      return query
    },
    auth: {
      getSession: async () => ({ data: { session: null }, error: null }),
    },
  }
}

export const supabase =
  supabaseUrl && supabaseAnonKey
    ? createClient(supabaseUrl, supabaseAnonKey)
    : createNoopSupabase()
