// ADAPTIV - отступ карты для мобильных устройств - 7)
export function addOffset (map) {
    console.log('Offset was added')
    const offsetY = map.getSize().y * 0.15

    // Метод для передвижения элемента
    map.panBy([0, -offsetY], {animate:false})
}