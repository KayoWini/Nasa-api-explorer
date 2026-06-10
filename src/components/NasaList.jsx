import { useState, useEffect } from 'react'
import { fetchAsteroids } from '../services/nasaService'
import NasaCard from './NasaCard'

function NasaList() {
    const [asteroids, setAsteroids] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

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

    if (loading) return <p>Carregando asteroides...</p>
    if (error) return <p>Erro: {error}</p>

    return (
        <section>
            {asteroids.map(asteroid => (
                <NasaCard key={asteroid.id} asteroid={asteroid} />
            ))}
        </section>
    )
}

export default NasaList