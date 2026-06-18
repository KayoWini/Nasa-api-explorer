# 🚀 Explorador de Asteroides da NASA

**Alunos:** Kayo Winicius e Luiz Otávio  
**API Utilizada:** NASA NeoWs (Near Earth Object Web Service)

---

## 📖 Descrição

Single Page Application (SPA) desenvolvida em React que consome a API da NASA para explorar dados de asteroides próximos à Terra. Permite visualizar uma lista atualizada de asteroides, filtrar por nome e acessar informações detalhadas de cada objeto celeste.



## 📥 Como Instalar e Executar

### 1. Clonar o repositório
```bash
git clone https://github.com/seu-usuario/Nasa-api-explorer.git
cd Nasa-api-explorer
```

### 2. Instalar dependências
```bash
npm install
```

### 3. Configurar a chave da API
- Crie um arquivo `.env` na raiz do projeto
- Obtenha sua chave em: https://api.nasa.gov/
- Adicione: `VITE_NASA_API_KEY=sua_chave_aqui`

### 4. Executar localmente
```bash
npm run dev
```

Acesse: `http://localhost:5173`

---

## 🌐 Projeto Publicado

https://nasa-explorer-luiz-kayo.netlify.app/

---

## 📂 Estrutura do Projeto

```
src/
├── components/
│   ├── Header.jsx           # Cabeçalho com título
│   ├── Navbar.jsx           # Menu de navegação
│   ├── NasaList.jsx         # Listagem com filtro
│   ├── NasaCard.jsx         # Card individual do asteroide
│   └── Footer.jsx           # Rodapé
├── pages/
│   ├── Sobre.jsx            # Página de informações
│   └── AsteroideDetails.jsx # Página de detalhes
├── services/
│   └── nasaService.js       # Funções de requisição e mappers
├── App.jsx                  # Componente raiz com rotas
├── main.jsx                 # Ponto de entrada
└── index.css                # Estilos globais (tema space)
```