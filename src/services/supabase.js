import { createClient } from '@supabase/supabase-js';

export const supabaseUrl = 'https://xwbyqzpzzzkpgiewswxa.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh3YnlxenB6enprcGdpZXdzd3hhIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTA4OTQ2NDcsImV4cCI6MjAwNjQ3MDY0N30.ybZ9CSPAEO-lqyj9cXO1jGbFS3mIB-FrefhK1mZB_to';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
