export default function Sobre() {
  return (
    <main className="sobre-container">
      <h1 className="sobre-titulo">
        Sobre o Explorador da NASA
      </h1>
      
      <p className="sobre-paragrafo">
        Bem-vindo ao <strong>Explorador de Asteroides</strong>. Este sistema foi desenvolvido como 
        parte dos estudos de Programação Frontend, com o objetivo de construir uma 
        Single Page Application (SPA) robusta consumindo dados externos.
      </p>

      <h2 className="sobre-secao">O que o sistema faz?</h2>
      <p>
        Nossa aplicação se conecta em tempo real com a API oficial da NASA, a 
        <em> NeoWs (Near Earth Object Web Service)</em>. Através dela, conseguimos monitorar 
        corpos celestes próximos à Terra, extraindo dados críticos como:
      </p>

      <ul className="sobre-lista">
        <li>Dimensões estimadas dos asteroides.</li>
        <li>Velocidade relativa e datas de aproximação.</li>
        <li>Classificação de risco (se o asteroide é potencialmente perigoso ou não).</li>
      </ul>

      <h2 className="sobre-secao">Arquitetura</h2>
      <p>
        O projeto foi estruturado utilizando <strong>React.js</strong> para a componentização da 
        interface e <strong>React Router DOM</strong> para o gerenciamento dinâmico das rotas, 
        garantindo uma navegação fluida sem recarregamento da página.
      </p>
    </main>
  );
}