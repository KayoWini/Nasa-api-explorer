# 🚀 Explorador de Asteroides da NASA

**Alunos:** Kayo Winicius e Luiz Otávio  
**Disciplina:** Programação Frontend - UNIVAS  
**Professor:** Flávio Belizário da Silva Mota

---

## 📖 Descrição

Uma Single Page Application (SPA) desenvolvida em **React** que consome a API pública da **NASA (NeoWs - Near Earth Object Web Service)** para explorar dados de asteroides próximos à Terra. A aplicação permite visualizar uma lista atualizada de asteroides, filtrar por nome e acessar informações detalhadas de cada objeto celeste.

---

## ✨ Funcionalidades Implementadas

### 🏠 Página Inicial - Catálogo de Asteroides
- Lista de asteroides próximos à Terra (últimos 7 dias)
- Exibição em grid responsivo com cards informativos
- **Campo de busca/filtro** que filtra asteroides por nome em tempo real, **sem nova requisição à API**
- Indicador visual de periculosidade (⚠️ Perigoso / ✅ Seguro)
- Informações exibidas:
  - Nome do asteroide
  - Data de aproximação
  - Diâmetro estimado (mín. e máx. em km)
  - Velocidade relativa (km/h)
  - Distância de aproximação (km)

### 🔍 Página de Detalhes - Informações Completas
- Rota dinâmica `/asteroide/:id` com parâmetros
- Dados orbitais avançados:
  - Magnitude absoluta (luminosidade)
  - Primeira e última observação registrada
  - Classe da órbita (Apollo, Aten, etc.)
  - Descrição detalhada da órbita
- Link direto para o banco de dados oficial do JPL (NASA)

### 📱 Página Sobre
- Informações sobre a aplicação
- Descrição da arquitetura e tecnologias utilizadas
- Explicação do propósito científico

### 🧭 Navegação
- Menu de navegação com **NavLink** destacando a rota ativa
- Página 404 para rotas inexistentes
- Navegação fluida sem recarregamento de página (SPA)

### 🎨 Design e UX
- Interface com tema **space/cosmos** (gradientes azuis e efeito glassmorphism)
- Componentes responsivos e otimizados para mobile
- Loading states amigáveis com mensagens customizadas
- Tratamento robusto de erros com mensagens explicativas

---

## 🛠️ Tecnologias Utilizadas

- **React 19.2** - Framework principal
- **React Router DOM 7.17** - Roteamento dinâmico
- **Vite 8** - Build tool e dev server
- **CSS3** - Estilização com glassmorphism
- **NASA NeoWs API** - API de asteroides

---

## 📥 Instalação

### Pré-requisitos
- Node.js (v18+)
- npm ou yarn

### Passo a Passo

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/seu-usuario/Nasa-api-explorer.git
   cd Nasa-api-explorer
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   ```

3. **Configure a chave da API:**
   - Crie um arquivo `.env` na raiz do projeto
   - Obtenha sua chave gratuita em: https://api.nasa.gov/
   - Adicione ao `.env`:
     ```
     VITE_NASA_API_KEY=sua_chave_aqui
     ```

4. **Inicie o servidor de desenvolvimento:**
   ```bash
   npm run dev
   ```

5. **Abra no navegador:**
   ```
   http://localhost:5173
   ```

---

## 📦 Build para Produção

```bash
npm run build
npm run preview
```

---

## 📚 Documentação da API

- **NASA NeoWs API:** https://api.nasa.gov/
- **Documentação completa:** https://api.nasa.gov/#NeoWS
- **Endpoints utilizados:**
  - `GET /neo/rest/v1/feed` - Lista de asteroides por intervalo de datas
  - `GET /neo/rest/v1/neo/{id}` - Detalhes de um asteroide específico

---

## 🌐 Deploy

### Publicado em:
- **(Adicionar link quando publicado em Vercel, Netlify ou GitHub Pages)**

Exemplo de como publicar:
- [Vercel](https://vercel.com) - Integração com GitHub (recomendado)
- [Netlify](https://netlify.com) - Deploy automático
- [GitHub Pages](https://pages.github.com) - Hospedagem gratuita

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


Projeto desenvolvido como trabalho final da disciplina de Programação Frontend.