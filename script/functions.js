function orgInit(type, markerLayer, variable) {
    for (let i = 0; i < orgdata.length; i++) {
        let orgProp = []                                // обнуление параметров маркера

        if (orgdata[i].type == type) {

            marker = DG.marker([orgdata[i].k1, orgdata[i].k2], {
                title: orgdata[i].name          //заголовок маркера
            })

            if (orgdata[i].trosta) {
                orgProp.push('<div class="orgPropsContainer"><img src="./assets/trosta.png"><div class="orgPropsText">ТОЧКА РОСТА</div></div>')
            }
            else {
                orgProp.push('')
            }
            if (orgdata[i].scoc) {
                orgProp.push('<div class="orgPropsContainer"><img src="./assets/cos.png"><div class="orgPropsText">Цифровая образовательная среда</div></div>')
            }
            else {
                orgProp.push('')
            }
            if (orgdata[i].kvant) {
                orgProp.push('<div class="orgPropsContainer"><img src="./assets/kvant.png"><div class="orgPropsText">Кванториум</div></div>')
            }
            else {
                orgProp.push('')
            }
            if (orgdata[i].itcube) {
                orgProp.push('<div class="orgPropsContainer"><img src="./assets/itcube.png"><div class="orgPropsText">it-Куб</div></div>')
            }
            else {
                orgProp.push('')
            }

            if (orgdata[i].masterskaya) {
                orgProp.push(`<div class="orgPropsContainer"><div class="orgPropsText">В этом учебном заведении есть мастерская</div>${orgdata[i].masterskaya}</div>`)
            }
            else {
                orgProp.push('')
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
                orgProp.push(`<div class="orgPropsContainer"><div class="orgPropsText">Информация по организации горячего питания отсутсвует</div></div>`)
            }

            popupInfo =
                `<div class="orgPopup">
                  <div>${orgdata[i].name}</div>
                  <div>Код образовательного учреждения ${orgdata[i].code}</div>
                  <div class="orgProps">
                      ${orgProp[0]}
                      ${orgProp[1]}
                      ${orgProp[2]}
                      ${orgProp[3]}
                      ${orgProp[4]}
                      ${orgProp[5]}

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
            variable.addLayer(marker)
        }
    }
    markerLayer.addLayer(variable)
}

function propInit(propName, markerLayer, variable) {
    for (let i = 0; i < orgdata.length; i++) {
        let orgProp = []                                // обнуление параметров маркера

        if (orgdata[i][propName]) {

            marker = DG.marker([orgdata[i].k1, orgdata[i].k2], {
                title: orgdata[i].name          //заголовок маркера
            })

            if (orgdata[i].trosta) {
                orgProp.push('<div class="orgPropsContainer"><img src="./assets/trosta.png"><div class="orgPropsText">ТОЧКА РОСТА</div></div>')
            }
            else {
                orgProp.push('')
            }
            if (orgdata[i].scoc) {
                orgProp.push('<div class="orgPropsContainer"><img src="./assets/cos.png"><div class="orgPropsText">Цифровая образовательная среда</div></div>')
            }
            else {
                orgProp.push('')
            }
            if (orgdata[i].kvant) {
                orgProp.push('<div class="orgPropsContainer"><img src="./assets/kvant.png"><div class="orgPropsText">Кванториум</div></div>')
            }
            else {
                orgProp.push('')
            }
            if (orgdata[i].itcube) {
                orgProp.push('<div class="orgPropsContainer"><img src="./assets/itcube.png"><div class="orgPropsText">it-Куб</div></div>')
            }
            else {
                orgProp.push('')
            }

            if (orgdata[i].masterskaya) {
                orgProp.push(`<div class="orgPropsContainer"><div class="orgPropsText">В этом учебном заведении есть мастерская</div>${orgdata[i].masterskaya}</div>`)
            }
            else {
                orgProp.push('')
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
                orgProp.push(`<div class="orgPropsContainer"><div class="orgPropsText">Информация по организации горячего питания отсутсвует</div></div>`)
            }

            popupInfo =
                `<div class="orgPopup">
                  <div>${orgdata[i].name}</div>
                  <div>Код образовательного учреждения ${orgdata[i].code}</div>
                  <div class="orgProps">
                      ${orgProp[0]}
                      ${orgProp[1]}
                      ${orgProp[2]}
                      ${orgProp[3]}
                      ${orgProp[4]}
                      ${orgProp[5]}

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
            variable.addLayer(marker)
        }
    }
    markerLayer.addLayer(variable)
}

function removeByTypeOrg(markerLayer, variable) {
    variable.removeFrom(markerLayer)
    variable.clearLayers()
}

function removeByType(orgType, markerLayer) {
    var uncheck = document.getElementsByClassName('byPropName');
    var prop = document.getElementById(orgType)

    for (var i = 0; i < uncheck.length; i++) {
        if (uncheck[i].id != prop.id) {
            if (uncheck[i].type == 'checkbox') {
                uncheck[i].checked = false
            }

            switch (uncheck[i].id) {
                case 'trosta':
                    trosta.removeFrom(markerLayer)
                    trosta.clearLayers()
                    break
                case 'scoc':
                    scoc.removeFrom(markerLayer)
                    scoc.clearLayers()
                    break
                case 'kvant':
                    kvant.removeFrom(markerLayer)
                    kvant.clearLayers()
                    break
                case 'itcube':
                    itcube.removeFrom(markerLayer)
                    itcube.clearLayers()
                    break
                case ' masterskaya':
                    masterskaya.removeFrom(markerLayer)
                    masterskaya.clearLayers()
                    break
            }
        }
    }
}

function removeByPropName(propName, markerLayer) {
    var uncheck = document.getElementsByClassName('byPropName');
    var prop = document.getElementById(propName)

    for (var i = 0; i < uncheck.length; i++) {
        if (uncheck[i].id != prop.id) {
            if (uncheck[i].type == 'checkbox') {
                uncheck[i].checked = false
            }

            switch (uncheck[i].id) {
                case 'trosta':
                    trosta.removeFrom(markerLayer)
                    trosta.clearLayers()
                    break
                case 'scoc':
                    scoc.removeFrom(markerLayer)
                    scoc.clearLayers()
                    break
                case 'kvant':
                    kvant.removeFrom(markerLayer)
                    kvant.clearLayers()
                    break
                case 'itcube':
                    itcube.removeFrom(markerLayer)
                    itcube.clearLayers()
                    break
                case ' masterskaya':
                    masterskaya.removeFrom(markerLayer)
                    masterskaya.clearLayers()
                    break
            }
        }
    }
}

function markerInit(type, markerLayer, variable) {                                  // функция инициализации маркеров
    if (document.getElementById(type).checked == true) {
        orgInit(type, markerLayer, variable)
    }
}

function FilterByType(type, markerLayer, variable) {           // добавление обработчика клика на инпуты

    document.getElementById(type).onchange = function () {

        if (this.checked) {

            uncheckPropFilter()

            removeByType('podved', markers)
            removeByType('spo', markers)
            removeByType('school', markers)
            removeByType('dop', markers)
            removeByType('dou', markers)

            markerInit(type, markerLayer, variable)
            markerLayer.addLayer(variable)
        }

        else {
            variable.removeFrom(markerLayer)
            variable.clearLayers()
        }
    }
}

function FilterByProperty(propName, markerLayer, variable) {

    document.getElementById(propName).onchange = function () {

        if (this.checked) {

            uncheckTypeFilter()

            removeByTypeOrg(markers, podved)
            removeByTypeOrg(markers, spo)
            removeByTypeOrg(markers, school)
            removeByTypeOrg(markers, dou)
            removeByTypeOrg(markers, dop)

            removeByPropName(propName, markerLayer)

            propInit(propName, markerLayer, variable)
            markerLayer.addLayer(variable)
        }

        else {
            variable.removeFrom(markerLayer)
            variable.clearLayers()
        }
    }
}

function uncheckTypeFilter(propName) {                              // переключение checked у всех byOrgType

    var uncheck = document.getElementsByClassName('byOrgType');
    var prop = document.getElementById(propName)

    for (var i = 0; i < uncheck.length; i++) {

        if (uncheck[i].type == 'checkbox' && uncheck != prop) {
            uncheck[i].checked = false
        }
    }
}

function uncheckPropFilter(propName) {                              // переключение checked у всех byPropName

    var uncheck = document.getElementsByClassName('byPropName');
    var prop = document.getElementById(propName)

    for (var i = 0; i < uncheck.length; i++) {

        if (uncheck[i].type == 'checkbox' && uncheck != prop) {
            uncheck[i].checked = false
        }
    }
}

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