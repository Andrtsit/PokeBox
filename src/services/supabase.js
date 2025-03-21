import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://dquldoqwcjiwerfwguyj.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRxdWxkb3F3Y2ppd2VyZndndXlqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDE1NTQzOTEsImV4cCI6MjA1NzEzMDM5MX0.k3T6M0jmCDupm_GCkWE8r_lvybktwQzJ_C0UK-pIzLs";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
