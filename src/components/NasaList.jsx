import { useState, useEffect } from 'react';
import { fetchAsteroids } from '../services/nasaService';
import NasaCard from './NasaCard';

export default function NasaList() {
  const [asteroides, setAsteroides] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  const [busca, setBusca] = useState('');

  useEffect(() => {
    const abortController = new AbortController();

    const carregarDados = async () => {
      try {
        const dados = await fetchAsteroids(); 
        if (!abortController.signal.aborted) {
          setAsteroides(dados.slice(0, 12));
        }
      } catch (err) {
        if (!abortController.signal.aborted) {
          setError(err.message);
        }
      } finally {
        if (!abortController.signal.aborted) {
          setLoading(false);
        }
      }
    };

    carregarDados();

    return () => abortController.abort();
  }, []);

  const asteroidesFiltrados = asteroides.filter((ast) => 
    ast.name.toLowerCase().includes(busca.toLowerCase())
  );

  if (loading) return <h2 className="status-msg">Carregando frota de asteroides... 🛸</h2>;
  if (error) return <div className="status-msg error"><h2>Houston, temos um problema! 📡</h2><p>{error}</p></div>;

  return (
    <main className="list-container">
      <h1 className="list-title">Catálogo de Asteroides</h1>

      <div className="search-container">
        <input 
          type="text" 
          placeholder="Buscar asteroide por nome..." 
          value={busca}
          onChange={(e) => setBusca(e.target.value)}
        />
      </div>

      <div className="cards-grid">
        {asteroidesFiltrados.length > 0 ? (
          asteroidesFiltrados.map((ast) => (
            <NasaCard key={ast.id} asteroid={ast} />
          ))
        ) : (
          <p className="status-msg">Nenhum asteroide encontrado com esse nome.</p>
        )}
      </div>
    </main>
  );
}