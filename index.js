function fareEstimator(ride_time, ride_distance, cost_per_minute, cost_per_mile) {
    const cost = []
    cost_per_minute.map((v, i) => {
        const calculator = (v * ride_time) + (cost_per_mile[i] * ride_distance);
        cost.push(calculator);
    })
    
    return cost;
    
}
