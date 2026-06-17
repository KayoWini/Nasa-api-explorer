import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchAsteroids } from '../services/nasaService';
import NasaCard from './NasaCard';

export default function NasaList() {
  const [asteroides, setAsteroides] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  const [busca, setBusca] = useState('');

  useEffect(() => {
    const carregarDados = async () => {
      try {
        const dados = await fetchAsteroids(); 
        setAsteroides(dados.slice(0, 12)); 
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    carregarDados();
  }, []);

  const asteroidesFiltrados = asteroides.filter((ast) => 
    ast.name.toLowerCase().includes(busca.toLowerCase())
  );

  if (loading) return <h2 style={{ textAlign: 'center', color: '#e0e0e0', marginTop: '50px' }}>Carregando frota de asteroides... 🛸</h2>;
  if (error) return <div style={{ textAlign: 'center', marginTop: '50px', color: '#ff4b4b' }}><h2>Houston, temos um problema! 📡</h2><p>{error}</p></div>;

  return (
    <div style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto', color: '#e0e0e0' }}>
      <h1 style={{ color: '#646cff', textAlign: 'center', marginBottom: '20px' }}>Catálogo de Asteroides</h1>

      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <input 
          type="text" 
          placeholder="Buscar asteroide por nome..." 
          value={busca}
          onChange={(e) => setBusca(e.target.value)}
          style={{
            padding: '12px 20px',
            width: '100%',
            maxWidth: '400px',
            borderRadius: '8px',
            border: '1px solid #646cff',
            backgroundColor: '#1a1a24',
            color: '#fff',
            fontSize: '1rem',
            outline: 'none'
          }}
        />
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
        
        {asteroidesFiltrados.length > 0 ? (
          asteroidesFiltrados.map((ast) => (
            <NasaCard key={ast.id} asteroid={ast} />
          ))
        ) : (
          <p style={{ textAlign: 'center', gridColumn: '1 / -1', marginTop: '20px' }}>Nenhum asteroide encontrado com esse nome.</p>
        )}
      </div>
    </div>
  );
}