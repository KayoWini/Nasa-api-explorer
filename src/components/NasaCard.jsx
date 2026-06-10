function NasaCard({ asteroid }) {
    return (
        <div>
            <h2>{asteroid.name}</h2>
            <p>Data de aproximação: {asteroid.closeApproachDate}</p>
            <p>Diâmetro estimado: {asteroid.diameterMin} - {asteroid.diameterMax} km</p>
            <p>Velocidade: {Number(asteroid.velocity).toFixed(2)} km/h</p>
            <p>Distância: {Number(asteroid.missDistance).toFixed(2)} km</p>
            <p>Perigoso: {asteroid.isHazardous ? '⚠️ Sim' : '✅ Não'}</p>
        </div>
    )
}

export default NasaCard