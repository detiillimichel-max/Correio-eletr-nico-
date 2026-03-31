import { createClient } from '@supabase/supabase-js'
import type { Database } from '../types/database'

const URL = import.meta.env.VITE_SUPABASE_URL as string
const KEY = import.meta.env.VITE_SUPABASE_KEY as string

export const supabase = createClient<Database>(URL, KEY)
