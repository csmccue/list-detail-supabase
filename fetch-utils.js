const SUPABASE_URL = 'https://xnwqsbmekrohmjrqulao.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inhud3FzYm1la3JvaG1qcnF1bGFvIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTk2MzkyNTgsImV4cCI6MTk3NTIxNTI1OH0.A9jwVzQJOXoOYRe3CtCtSj6B30yywT0bXU8EkVXZq4k';
const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

export async function getShips() {
    // from the dogs table, select all items
    const response = await client.from('Warships').select('*');
    // and return the response
    return response.data;
}

export async function getShip(id) {
    // from the dogs table, select a single dog who has the matching id
    const response = await client.from('Warships').select('*').match({ id }).single();
    // and return the response
    return response.data; 
}
