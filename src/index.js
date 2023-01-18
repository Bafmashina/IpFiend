// IMPORT - 2)
import 'babel-polyfill' // - 6)
import 'leaflet/dist/leaflet.css' // - 4)
import L from 'leaflet' // - 4)
import {addTileLayer, validateIp, getAddress, addOffset} from './helpers'
import icon from '../images/icon-location.svg' // - 4)

// GLOBALS- 1)
const ipInput = document.querySelector('.search-bar__input') // - 1)
const btn = document.querySelector('button') // - 1)

const ipInfo = document.querySelector('#ip') // - 3)
const locationInfo = document.querySelector('#location') // - 3)
const timezoneInfo = document.querySelector('#timezone') // - 3) 
const ispInfo = document.querySelector('#isp') // - 3) 

// ATACH EVENTS - 1)
btn.addEventListener('click', getDate)
ipInput.addEventListener('keydown', handleKey)

// MAP - 4)
// создание маркера
const markerIcon = L.icon({
    iconUrl: icon,
    iconSize: [30, 40],
})

// область пирближения карты - 4)
const mapArea = document.querySelector('.map')
const map = L.map(mapArea, {
    center: [51.505, -0.09],
    zoom: 13,
    zoomControl: false,
})
addTileLayer(map) // import function - (Функция добовления карты)
L.marker([51.505, -0.09], {icon: markerIcon}).addTo(map) // маркер

// BASE LOGIC - 1)
// проверка данных 
 function getDate () {
    if (validateIp(ipInput.value)) { // - 2)
       getAddress(ipInput.value) // - 6)
            .then(setInfo) // - 3)
    }
 }

// обработка "Enter" - 1)
function handleKey (event) {
    if (event.key === 'Enter') {
        getDate()
    }
}

// EVENT LOGIC - 3)
// Функция для наполнения элементов "Info"
function setInfo (mapData) { // - 3)

    const {lat, lng, country, region, timezone} = mapData.location // - 5)

    ipInfo.innerText = mapData.ip
    locationInfo.innerText = country + ' ' + region
    timezoneInfo.innerText = timezone
    ispInfo.innerText = mapData.isp

    //изминение карты по IP - 5)
    map.setView([lat, lng])
    L.marker([lat, lng], {icon: markerIcon}).addTo(map)

    // проверка для устройства м добовление отступа - 7)
    if(matchMedia("(max-width: 1023px)").matches) {
        addOffset(map)
    }
}

// Отоброржение нашего местоположения при загрузки карты - 7)
document.addEventListener('DOMContentLoaded', () => {
    getAddress('102.22.22.1').then(setInfo)
})
