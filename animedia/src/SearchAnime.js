import React, { useState } from 'react';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

function SearchAnime() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState(null);
  const [error, setError] = useState('');
  const [saveMsg, setSaveMsg] = useState('');

  const handleSearch = async () => {
    setError('');
    setResults(null);
    setSaveMsg('');
    try {
      const response = await fetch(`${BACKEND_URL}/search?q=${encodeURIComponent(query)}`);
      if (!response.ok) {
        throw new Error('Anime not found or server error');
      }
      const data = await response.json();
      setResults(data.data || []);
    } catch (err) {
      setError(err.message);
    }
  };

  const handleSave = async (anime) => {
    setSaveMsg('');
    try {
      const response = await fetch(`${BACKEND_URL}/save`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(anime)
      });
      const data = await response.json();
      setSaveMsg(data.message || 'Saved!');
    } catch (err) {
      setSaveMsg('Error saving anime.');
    }
  };

  return (
    <div>
      <input
        type="text"
        value={query}
        placeholder="Search for anime..."
        onChange={e => setQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      {error && <div style={{ color: 'red' }}>{error}</div>}
      {saveMsg && <div style={{ color: 'green' }}>{saveMsg}</div>}
      {results && results.length > 0 && (
        <div>
          <h3>Results:</h3>
          {results.map(anime => (
            <div key={anime.mal_id} style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}>
              <strong>{anime.title}</strong>
              <div>
                <button onClick={() => handleSave(anime)}>Save</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default SearchAnime;