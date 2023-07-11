import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://vbjyvpanbwfgcijxpsim.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZianl2cGFuYndmZ2Npanhwc2ltIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODkwODQyODksImV4cCI6MjAwNDY2MDI4OX0.nj6IBqYOVHgTzZqYxtGyFQ-jpAgf8RZTUqYBhxXZgII'
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase