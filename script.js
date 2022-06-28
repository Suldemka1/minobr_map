const markers = [];
let marker
DG.then(function () {
    // module code loading
    return DG.plugin('https://unpkg.com/leaflet.markercluster@1.4.1/dist/leaflet.markercluster.js');
}).then(function () {

    var map = DG.map('map', {
        center: DG.latLng(51.742136, 94.01699),
        zoom: 7,
        minZoom: 7,
        maxZoom: 17,
        maxBounds: [[53.42569105147632, 88.74332423905955], [49.77389234789008, 99.13590236405958]],
        maxBoundsViscosity: 0.1,
        zoomControl: false,
        fullscreenControl: false,
    });

    DG.geoJson(data,
        { color: '#ff0522', fillColor: '#708dff', fillOpacity: 0.2, stroke: 'red', weight: 1, opacity: 0.3 }).addTo(map)

    var markers = DG.markerClusterGroup();

    myIcon = DG.icon({
        iconUrl: 'assets/trosta.png',
        iconSize: [48, 48]
    });

    scocIcon = DG.icon({
        iconUrl: 'assets/scoc.png',
        iconSize: [48, 48]
    })

    itcubeIcon = DG.icon({
        iconUrl: 'assets/it-cube.png',
        iconSize: [48, 48]
    })

    anotherIcon = DG.icon({
        iconUrl: 'assets/icon.png',
        iconSize: [48, 48]
    })

    // processing of coordinates for installation of markers
    for (var i = 0; i < schooldata.length; i++) {
        var iconCaption = schooldata[i].name;

        if (schooldata[i].trosta == "YES"){
            marker = DG.marker([schooldata[i].k1, schooldata[i].k2], { 
                title: iconCaption, 
                icon: myIcon});
                console.log("ТОЧКА РОСТА", iconCaption)
        }
        else if (schooldata[i].scoc == "YES") {
            marker = DG.marker([schooldata[i].k1, schooldata[i].k2], { 
                title: iconCaption, 
                icon: scocIcon});
                console.log("ЦОС", iconCaption)
        }
        else if (schooldata[i].itcube == "YES") {
            marker = DG.marker([schooldata[i].k1, schooldata[i].k2], { 
                title: iconCaption, 
                icon: itcubeIcon});
                console.log("АЙТИКУБ", iconCaption)
        }
        else {
            marker = DG.marker([schooldata[i].k1, schooldata[i].k2], { 
                title: iconCaption});
                console.log("НЕ РАВНО")
        }

        let popupInfo =
            `<div style="font-size: 20px;">
                        ${iconCaption}
                    </div> 
                    <a href='https://${schooldata[i].link}'>Перейти на сайт</a>`
        marker.bindPopup(popupInfo, { minWidth: 560 });
        markers.addLayer(marker);
    }

    map.addLayer(markers);
});