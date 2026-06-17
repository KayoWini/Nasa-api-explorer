const API_KEY = import.meta.env.VITE_NASA_API_KEY

export async function fetchAsteroids() {
    const today = new Date().toISOString().split('T')[0]
    const weekAgo = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)
        .toISOString()
        .split('T')[0]

    const response = await fetch(
        `https://api.nasa.gov/neo/rest/v1/feed?start_date=${weekAgo}&end_date=${today}&api_key=${API_KEY}`
    )

    if (!response.ok) {
        throw new Error('Erro ao buscar asteroides')
    }

    const data = await response.json()

    const allAsteroids = Object.values(data.near_earth_objects).flat()
    return allAsteroids.map(mapAsteroid)
}

export async function fetchAsteroidById(id) {
    const response = await fetch(
        `https://api.nasa.gov/neo/rest/v1/neo/${id}?api_key=${API_KEY}`
    )

    if (!response.ok) {
        throw new Error('Erro ao buscar asteroide')
    }

    const data = await response.json()
    return mapAsteroidDetails(data)
}

function mapAsteroid(item) {
    return {
        id: item.id,
        name: item.name,
        isHazardous: item.is_potentially_hazardous_asteroid,
        diameterMin: item.estimated_diameter.kilometers.estimated_diameter_min.toFixed(3),
        diameterMax: item.estimated_diameter.kilometers.estimated_diameter_max.toFixed(3),
        closeApproachDate: item.close_approach_data?.[0]?.close_approach_date ?? 'N/A',
        velocity: item.close_approach_data?.[0]?.relative_velocity.kilometers_per_hour ?? 'N/A',
        missDistance: item.close_approach_data?.[0]?.miss_distance.kilometers ?? 'N/A',
    }
}

function mapAsteroidDetails(item) {
    return {
        id: item.id,
        name: item.name,
        isHazardous: item.is_potentially_hazardous_asteroid,
        absoluteMagnitude: item.absolute_magnitude_h,
        firstObservation: item.orbital_data?.first_observation_date ?? 'N/A',
        lastObservation: item.orbital_data?.last_observation_date ?? 'N/A',
        orbitClass: item.orbital_data?.orbit_class?.orbit_class_type ?? 'N/A',
        orbitDescription: item.orbital_data?.orbit_class?.orbit_class_description ?? 'N/A',
        jplUrl: item.nasa_jpl_url
    }
}