import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchAsteroidById } from '../services/nasaService'; 

export default function AsteroideDetails() {
  const { id } = useParams();
  const [asteroide, setAsteroide] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortController = new AbortController();

    const carregarDados = async () => {
      try {
        const dados = await fetchAsteroidById(id);
        if (!abortController.signal.aborted) {
          setAsteroide(dados);
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
  }, [id]);

  if (loading) return <h2 className="status-msg">Buscando dados no espaço... 🚀</h2>;
  if (error) return <h2 className="status-msg error">Erro: {error}</h2>;

  return (
    <main className="details-container">
      <h1 className="details-title">
        {asteroide.name}
      </h1>
      
      <section className="details-content">
        <h3>Dados Orbitais e Classificação</h3>
        
        <p><strong>Referência (ID):</strong> {asteroide.id}</p>
        <p><strong>Potencialmente Perigoso?</strong> <span className={asteroide.isHazardous ? 'hazardous-yes' : 'hazardous-no'}>{asteroide.isHazardous ? 'Sim ⚠️' : 'Não ✅'}</span></p>
        <p><strong>Magnitude Absoluta (Luminosidade):</strong> {asteroide.absoluteMagnitude} H</p>
        <p><strong>Primeira Observação:</strong> {asteroide.firstObservation}</p>
        <p><strong>Última Observação:</strong> {asteroide.lastObservation}</p>
        <p><strong>Classe da Órbita:</strong> {asteroide.orbitClass}</p>
        <p><strong>Descrição da Órbita:</strong> {asteroide.orbitDescription}</p>

        <footer className="details-footer">
          <a href={asteroide.jplUrl} target="_blank" rel="noopener noreferrer" className="details-link">
            Ver no Banco de Dados Oficial do JPL (NASA) ↗
          </a>
        </footer>
      </section>
    </main>
  );
}