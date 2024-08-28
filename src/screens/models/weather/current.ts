interface Current {
    temp_c: number,
    condition: Condition,
    uv: number,
    humidity: number,
    wind_kph: number,
}

interface Condition {
    text: string,
    icon: string,
    code: number
}