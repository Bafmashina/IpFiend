// - 5)
import L from 'leaflet'

// добовление карты
export function addTileLayer (map) {
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: `&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a> Coded by <a href="https://github.com/Bafmashina">Aleksandr Kuzmin</a>`,
}).addTo(map);
}