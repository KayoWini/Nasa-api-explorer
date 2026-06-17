import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchAsteroidById } from '../services/nasaService'; 

export default function AsteroideDetails() {
  const { id } = useParams();
  const [asteroide, setAsteroide] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const carregarDados = async () => {
      try {
        const dados = await fetchAsteroidById(id);
        setAsteroide(dados);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    carregarDados();
  }, [id]);

  if (loading) return <h2 style={{ textAlign: 'center', color: '#e0e0e0', marginTop: '50px' }}>Buscando dados no espaço... 🚀</h2>;
  if (error) return <h2 style={{ textAlign: 'center', color: '#ff4b4b', marginTop: '50px' }}>Erro: {error}</h2>;

  return (
    <div style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto', color: '#e0e0e0' }}>
      <h1 style={{ color: '#646cff', borderBottom: '1px solid #333', paddingBottom: '10px' }}>
        {asteroide.name}
      </h1>
      
      <div style={{ backgroundColor: '#1a1a24', padding: '2rem', borderRadius: '8px', marginTop: '20px' }}>
        <h3 style={{ color: '#aaa', marginTop: 0 }}>Dados Orbitais e Classificação</h3>
        
        <p><strong>Referência (ID):</strong> {asteroide.id}</p>
        <p><strong>Potencialmente Perigoso?</strong> <span style={{ color: asteroide.isHazardous ? '#ff4b4b' : '#4caf50', fontWeight: 'bold' }}>{asteroide.isHazardous ? 'Sim ⚠️' : 'Não ✅'}</span></p>
        <p><strong>Magnitude Absoluta (Luminosidade):</strong> {asteroide.absoluteMagnitude} H</p>
        <p><strong>Primeira Observação:</strong> {asteroide.firstObservation}</p>
        <p><strong>Última Observação:</strong> {asteroide.lastObservation}</p>
        <p><strong>Classe da Órbita:</strong> {asteroide.orbitClass}</p>
        <p><strong>Descrição da Órbita:</strong> {asteroide.orbitDescription}</p>

        <div style={{ marginTop: '30px', paddingTop: '20px', borderTop: '1px solid #333' }}>
          <a href={asteroide.jplUrl} target="_blank" rel="noopener noreferrer" style={{ color: '#646cff', textDecoration: 'none', fontWeight: 'bold' }}>
            Ver no Banco de Dados Oficial do JPL (NASA) ↗
          </a>
        </div>
      </div>
    </div>
  );
}