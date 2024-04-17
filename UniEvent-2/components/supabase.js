import 'react-native-url-polyfill/auto'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://lzlpuukoywqeyuegdvgk.supabase.co"
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx6bHB1dWtveXdxZXl1ZWdkdmdrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTA5NjA3NzYsImV4cCI6MjAyNjUzNjc3Nn0.hQQjzNtlk9YX6L0-6dOTNRjHjxCWHjkjwvNPxRLWbys"

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
})