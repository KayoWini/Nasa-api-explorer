export default function Sobre() {
  return (
    <main style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto', lineHeight: '1.6' }}>
      <h1 style={{ color: '#646cff', borderBottom: '1px solid #333', paddingBottom: '10px' }}>
        Sobre o Explorador da NASA
      </h1>
      
      <p style={{ marginTop: '20px', fontSize: '1.1rem' }}>
        Bem-vindo ao <strong>Explorador de Asteroides</strong>. Este sistema foi desenvolvido como 
        parte dos estudos de Programação Frontend, com o objetivo de construir uma 
        Single Page Application (SPA) robusta consumindo dados externos.
      </p>

      <h2 style={{ color: '#646cff', marginTop: '30px' }}>O que o sistema faz?</h2>
      <p>
        Nossa aplicação se conecta em tempo real com a API oficial da NASA, a 
        <em> NeoWs (Near Earth Object Web Service)</em>. Através dela, conseguimos monitorar 
        corpos celestes próximos à Terra, extraindo dados críticos como:
      </p>

      <ul style={{ backgroundColor: '#1a1a24', padding: '20px 40px', borderRadius: '8px', marginTop: '15px' }}>
        <li style={{ marginBottom: '10px' }}>Dimensões estimadas dos asteroides.</li>
        <li style={{ marginBottom: '10px' }}>Velocidade relativa e datas de aproximação.</li>
        <li>Classificação de risco (se o asteroide é potencialmente perigoso ou não).</li>
      </ul>

      <h2 style={{ color: '#646cff', marginTop: '30px' }}>Arquitetura</h2>
      <p>
        O projeto foi estruturado utilizando <strong>React.js</strong> para a componentização da 
        interface e <strong>React Router DOM</strong> para o gerenciamento dinâmico das rotas, 
        garantindo uma navegação fluida sem recarregamento da página.
      </p>
    </main>
  );
}