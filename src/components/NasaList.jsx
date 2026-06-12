import { useState, useEffect } from 'react'
import { fetchAsteroids } from '../services/nasaService'
import NasaCard from './NasaCard'

function NasaList() {
    const [asteroids, setAsteroids] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [search, setSearch] = useState('')

    useEffect(() => {
        let cancelled = false

        async function loadAsteroids() {
            try {
                setLoading(true)
                const data = await fetchAsteroids()
                if (!cancelled) {
                    setAsteroids(data)
                }
            } catch (err) {
                if (!cancelled) {
                    setError(err.message)
                }
            } finally {
                if (!cancelled) {
                    setLoading(false)
                }
            }
        }

        loadAsteroids()

        return () => {
            cancelled = true
        }
    }, [])

    const filteredAsteroids = asteroids.filter(asteroid =>
        asteroid.name.toLowerCase().includes(search.toLowerCase())
    )

    if (loading) return <p>Carregando asteroides...</p>
    if (error) return <p>Erro: {error}</p>

    return (
        <section>
            <input
                type="text"
                placeholder="Buscar asteroide pelo nome..."
                value={search}
                onChange={e => setSearch(e.target.value)}
            />

            {filteredAsteroids.length === 0 ? (
                <p>Nenhum asteroide encontrado.</p>
            ) : (
                <div className="cards-grid">
                    {filteredAsteroids.map(asteroid => (
                        <NasaCard key={asteroid.id} asteroid={asteroid} />
                    ))}
                </div>
            )}
        </section>
    )
}

export default NasaList