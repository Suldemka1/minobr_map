let marker, iconCaption, markers, popupInfo
let orgProp = []

DG.then(function () {
    return DG.plugin('https://unpkg.com/leaflet.markercluster@1.4.1/dist/leaflet.markercluster.js');
}).then(function () {
    markers = DG.markerClusterGroup();

    var map = DG.map('map', {
        center: DG.latLng(51.742136, 94.01699),
        zoom: 7,
        minZoom: 7,
        maxZoom: 18,
        maxBounds: [[56.42569105147632, 86.74332423905955], [46.77389234789008, 103.13590236405958]],
        maxBoundsViscosity: 0.1,
        zoomControl: false
    });

    

    iconInit()

    DG.geoJson(data,
        { color: '#ff0522', fillColor: '#708dff', fillOpacity: 0.2, stroke: 'red', weight: 1, opacity: 0.3 }).addTo(map)

    for (var i = 0; i < orgdata.length; i++) {

        switch (orgdata[i].type) {
            case "podved":
                marker = DG.marker([orgdata[i].k1, orgdata[i].k2], {
                    title: orgdata[i].name
                });
                break;

            case "dop":
                marker = DG.marker([orgdata[i].k1, orgdata[i].k2], {
                    title: orgdata[i].name
                });
                break;
            case "school":
                marker = DG.marker([orgdata[i].k1, orgdata[i].k2], {
                    title: orgdata[i].name
                });
                break;
            case "dou":
                marker = DG.marker([orgdata[i].k1, orgdata[i].k2], {
                    title: orgdata[i].name
                });
                break;
            case "spo":
                marker = DG.marker([orgdata[i].k1, orgdata[i].k2], {
                    title: orgdata[i].name
                })
                break;
            default:
                marker = DG.marker([orgdata[i].k1, orgdata[i].k2], {
                    title: orgdata[i].name
                });
                console.log('default');
        }

        orgProp = []
        if (orgdata[i].type != "podved" && orgdata[i].type != "min") {
            if (orgdata[i].trosta == "YES") {
                orgProp.push('<div class="orgPropsContainer"><img src="./assets/trosta.png"><div class="orgPropsText">ТОЧКА РОСТА</div></div>')
            }
            if (orgdata[i].scoc == "YES") {
                orgProp.push('<div class="orgPropsContainer"><img src="./assets/cos.png"><div class="orgPropsText">Цифровая образовательная среда</div></div>')
            }
            if (orgdata[i].kvant == "YES") {
                orgProp.push('<div class="orgPropsContainer"><img src="./assets/kvant.png"><div class="orgPropsText">Кванториум</div></div>')
            }
            if (orgdata[i].itcube == "YES") {
                orgProp.push('<div class="orgPropsContainer"><img src="./assets/itcube.png"><div class="orgPropsText">it-Куб</div></div>')
            }

            if (orgdata[i].masterskaya) {
                orgProp.push(`<div class="orgPropsContainer"><div class="orgPropsText">В этом учебном заведении есть мастерская</div>${orgdata[i].masterskaya}</div>`)
            }

            if (orgdata[i].gorpit != null) {
                orgProp.push(`<div class="orgPropsGorpit"><div class=""></div></div>
                <div class="info">
                    <input id="info__body_1" class="info__switch" type="checkbox">
                    <label for="info__body_1" class="info__headline">Информация по организации горячего питания</label>
                    <div class="info__body">
                    ${orgdata[i].gorpit}
                    </div>
                </div>`)
            }
            else {
                orgProp.push(`<div class="orgPropsContainer"><div class="orgPropsText">Информация по организации горячему питанию отсутсвует</div></div>`)
            }
        }
        else {
            orgdata[i].code = "отсуствует"
        }

        popupInfo =
            `<div class="orgPopup">
                <div>${orgdata[i].name}</div>
                <div>Код образовательного учреждения ${orgdata[i].code}</div>
                <div class="orgProps">
                    ${orgProp}
                    ${console.log(orgProp)}
                    <a href='https://${orgdata[i].link}'>Перейти на сайт</a>
                </div>
            </div>`


        marker.bindPopup(popupInfo, {
            color: '#ffffff',
            fillColor: '#ffffff',
            closeButton: true,
            minWidth: 400,
            maxWidth: 600,
            maxHeight: 1200,
            keepInView: true,
            className: 'popup-sula'
        });
        markers.addLayer(marker);
    }
    map.addLayer(markers);
});

function iconInit() {
    trostaIcon = DG.icon({
        iconUrl: 'assets/trosta.png',
        iconSize: [70, 70]
    });

    scocIcon = DG.icon({
        iconUrl: 'assets/scoc.png',
        iconSize: [70, 70]
    })

    itcubeIcon = DG.icon({
        iconUrl: 'assets/it-cube.png',
        iconSize: [70, 70]
    })

    anotherIcon = DG.icon({
        iconUrl: 'assets/icon.png',
        iconSize: [70, 70]
    })
}