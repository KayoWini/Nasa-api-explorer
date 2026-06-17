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
    <main>
      <div className="hero">
        <video
          className="hero-video"
          autoPlay
          loop
          muted
          playsInline
          src="/espaco.mp4"
        />
        <div className="hero-overlay">
          <h1 className="hero-title">Explorador de Asteroides</h1>
          <p className="hero-subtitle">Monitorando objetos próximos à Terra em tempo real</p>
        </div>
      </div>

      <div className="list-container">
        <h2 className="list-title">Catálogo de Asteroides</h2>
        <p className="list-subtitle">Dados dos últimos 7 dias via NASA NeoWs API</p>

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
      </div>

      <div className="comet-divider">
        <img
          src="https://images.unsplash.com/photo-1614732414444-096e5f1122d5?w=1920&q=80"
          alt="Cometa no espaço"
          className="comet-img"
        />
        <div className="comet-overlay">
          <p className="comet-text">☄️ Objetos próximos à Terra monitorados 24h pela NASA</p>
        </div>
      </div>

    </main>
  );
}