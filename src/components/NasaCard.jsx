function NasaCard({ asteroid }) {
    return (
        <div className="card">
            <h2>{asteroid.name}</h2>
            <p>📅 Data de aproximação: <span>{asteroid.closeApproachDate}</span></p>
            <p>📏 Diâmetro estimado: <span>{asteroid.diameterMin} - {asteroid.diameterMax} km</span></p>
            <p>💨 Velocidade: <span>{Number(asteroid.velocity).toFixed(2)} km/h</span></p>
            <p>🌍 Distância: <span>{Number(asteroid.missDistance).toFixed(2)} km</span></p>
            <p>
                ☄️ Perigoso:{' '}
                <span className={asteroid.isHazardous ? 'hazardous-yes' : 'hazardous-no'}>
                    {asteroid.isHazardous ? '⚠️ Sim' : '✅ Não'}
                </span>
            </p>
        </div>
    )
}

export default NasaCard