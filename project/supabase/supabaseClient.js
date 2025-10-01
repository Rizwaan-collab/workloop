// filepath: supabaseClient.js
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://czofpzosdcldmaukrosj.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN6b2Zwem9zZGNsZG1hdWtyb3NqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTg0NjIxMzYsImV4cCI6MjA3NDAzODEzNn0.7eOuD0kUyESgzbB6h6VJRHY7OlAVZ7MOmiZDRY8oziE';

export const supabase = createClient(supabaseUrl, supabaseKey);