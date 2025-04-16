const { createClient } = require('@supabase/supabase-js');
const dotenv = require('dotenv').config();

const url = process.env.URL;
const api = process.env.API;

const supabase = createClient(url, api);

module.exports = { supabase };