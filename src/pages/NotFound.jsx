import { Link } from 'react-router-dom'

export default function NotFound() {
    return (
        <div className="not-found-container">
            <p className="not-found-code">404</p>
            <h1 className="not-found-title">O asteroide passou e não achamos...</h1>
            <p className="not-found-subtitle">
                A página que você procura não existe ou foi abduzida por alienígenas.
            </p>
            <Link to="/" className="not-found-btn">
                🚀 Voltar para a Terra
            </Link>
        </div>
    )
}