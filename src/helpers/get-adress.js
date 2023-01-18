// Функция для получения и использование данных
export async function getAddress (ip ='8.8.8.8') {
    const response = await fetch (`https://geo.ipify.org/api/v2/country,city?apiKey=at_7S35nvXrkzZGQFPzia3aARja2bmfy&ipAddress=${ip}`)

    return await response.json()
}