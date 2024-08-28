interface Hour {
    time: string,
    temp_c: number,
    condition: Condition,
    wind_kph: number,
    uv: number,
    humidity: number,
}

interface ForecastDay {
    date: string,
    day: {
        condition: Condition,
        avgtemp_c: number,
    },
    hour: Hour[]
}
