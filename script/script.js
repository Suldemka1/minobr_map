let marker, iconCaption, markers, popupInfo

let spo, school, dou, podved, dop, trosta, scoc, kvant, itcube, masterskaya
let types = ['spo', 'school', 'dou', 'podved', 'dop']

DG.then(function () {
    return DG.plugin('https://unpkg.com/leaflet.markercluster@1.4.1/dist/leaflet.markercluster.js');
}).then(function () {

    markers = DG.markerClusterGroup()
    podved = DG.markerClusterGroup()
    spo = DG.markerClusterGroup()
    school = DG.markerClusterGroup()
    dou = DG.markerClusterGroup()
    dop = DG.markerClusterGroup()

    trosta = DG.markerClusterGroup()
    scoc = DG.markerClusterGroup()
    kvant = DG.markerClusterGroup()
    itcube = DG.markerClusterGroup()
    masterskaya = DG.markerClusterGroup()

    let map = DG.map('map', {                                   // инициализация и настройка карты
        center: DG.latLng(51.742136, 94.01699),
        zoom: 7,
        minZoom: 7,
        maxZoom: 18,
        maxBounds: [[56.42569105147632, 85.74332423905955], [46.77389234789008, 103.13590236405958]],
        maxBoundsViscosity: 0.1,
        zoomControl: false
    });

    DG.geoJson(data,                                            // слой с границами кожуунов
        { color: '#ff0522', fillColor: '#708dff', fillOpacity: 0.2, stroke: 'red', weight: 1, opacity: 0.3 }).addTo(map)

    markerInit('spo', markers, spo)
    markerInit('school', markers, school)
    markerInit('dop', markers, dop)
    markerInit('dou', markers, dou)
    markerInit('podved', markers, podved)

    map.addLayer(markers)                                       //добавление слоя с маркерами на карту

    FilterByType('spo', markers, spo)
    FilterByType('school', markers, school)
    FilterByType('dop', markers, dop)
    FilterByType('dou', markers, dou)
    FilterByType('podved', markers, podved)

    FilterByProperty('trosta', markers, trosta)
    FilterByProperty('scoc', markers, scoc)
    FilterByProperty('kvant', markers, kvant)
    FilterByProperty('itcube', markers, itcube)
    FilterByProperty('masterskaya', markers, masterskaya)

    deleteDouble()
});