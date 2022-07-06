function FilterByOrgType(type) {
  document.getElementById(type).onchange = function () {
      if (this.checked) {
          switch (type) {
              case 'podved': markers.addLayer(podved); break;
              case 'dop': markers.addLayer(dop); break;
              case 'spo': markers.addLayer(spo); break;
              case 'dou': markers.addLayer(dou); break;
              case 'school': markers.addLayer(school); break;
              default: markers.addLayer(); break
          }
      }
      else {
          switch (type) {
              case 'podved': markers.removeLayer(podved); break;
              case 'dop': markers.removeLayer(dop); break;
              case 'spo': markers.removeLayer(spo); break;
              case 'dou': markers.removeLayer(dou); break;
              case 'school': markers.removeLayer(school); break;
              default: markers.removeLayer(); break
          }
      }
  };
}


switch (type) {
  case 'podved':
      podved.addLayer(marker)
      markers.addLayer(podved)
      break;
  case 'spo':
      spo.addLayer(marker)
      markers.addLayer(spo)
      break;
  case 'school':
      school.addLayer(marker)
      markers.addLayer(school)
      break;
  case 'dou':
      dou.addLayer(marker)
      markers.addLayer(dou)
      break;
  case 'dop':
      dop.addLayer(marker)
      markers.addLayer(dop)
      break;
  default:
      markers.addLayer(marker)
      map.addLayer(markers);
      break;
}