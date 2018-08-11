var tipos = ['Production', 'Postproduction','Distribution', 'Exhibition'];

items = "<form id=\"checkboxes\">";

function crearMenu(){
    for (i=0; i < tipos.length; i++){
        items  +=  "<span class=\"checkbox\"> <input type=\"checkbox\" name=\"transporte\" id=\"" + tipos[i] + "\" onchange=\"display(this)\" checked> <label>" + tipos[i]+ "</label></span>";
    }
    items  += "</form>";

    document.getElementById("selectors").innerHTML = items;
}

////////////////////////////////
// Mapas en mapbox

mapboxgl.accessToken = 'pk.eyJ1IjoicHJvcGllZGFkZXMiLCJhIjoiY2l0bjQ2dmxyMDM3YzJubjBnZGtpMWF1NCJ9.F-oLE6-FwArjoKWpTHPKNw';
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/light-v9',
    center: [-99.1488936, 19.4000000],
    zoom: 10.3
});

map.on('load', function () {

// ////////////////////////////////////
    map.addSource("Production", {
        "type": "geojson",
          data: 'https://gist.githubusercontent.com/thewhiterabbit-science/32d20c4c8d7ed6e68551c3a67fa27ea9/raw/01cadba88c29c6ea79c7ba600ea5ece4123af6a2/produccion_peliculas.geojson',

    });

    map.addLayer({
       'id': 'Production',
        "source": 'Production',
        "type": "circle",
        "paint": {
            "circle-radius": 4,
            "circle-color": "#4c275c"
        }

    });

    map.addSource("Postproduction", {
        "type": "geojson",
          data: 'https://gist.githubusercontent.com/thewhiterabbit-science/6b5a724ae35da710eeb14252f9850b45/raw/521060d9d3e610cac4cfe484df0fbf94c352124e/postproduccion_cineCDMX.geojson',

    });

    map.addLayer({
       'id': 'Postproduction',
        "source": 'Postproduction',
        "type": "circle",
        "paint": {
            "circle-radius": 4,
            "circle-color": "#a73266"
        }

    });

    map.addSource("Distribution", {
        "type": "geojson",
          data: 'https://gist.githubusercontent.com/thewhiterabbit-science/c20a7f5df4612c6a7187b358733718d4/raw/3d22ba64feee65a2f4010bf1ab96613f0377ee6c/distribucion_cineCDMX.geojson',

    });

    map.addLayer({
       'id': 'Distribution',
        "source": 'Distribution',
        "type": "circle",
        "paint": {
            "circle-radius": 4,
            "circle-color": "#ec5a4a"
        }

    });

    map.addSource("Exhibition", {
        "type": "geojson",
          data: 'https://gist.githubusercontent.com/thewhiterabbit-science/b5d8c81163f924fc0f8d93626ad11a6f/raw/477664fa68ad9602537c2c621f07baa0548b12bf/exhibicion_cineCDMX.geojson',

    });

    map.addLayer({
       'id': 'Exhibition',
        "source": 'Exhibition',
       "type": "circle",
        "paint": {
            "circle-radius": 4,
            "circle-color": "#ffa600"
        }
    });

});

function display(elem){
 	map.setLayoutProperty(elem.id, 'visibility',
    elem.checked ? 'visible' : 'none');
}

///////////////////////////////////////////////////////////////////////////////
// cursor pointer
map.on('mousemove', function (e) {
    var features = map.queryRenderedFeatures(e.point, { layers: ['Production', 'Postproduction','Distribution', 'Exhibition'] });
    map.getCanvas().style.cursor = features.length ? 'pointer' : '';
});

// popups de nombres

map.on('click', function (e) {
    var features = map.queryRenderedFeatures(e.point, { layers: ['Production', 'Postproduction','Distribution', 'Exhibition'] });
    if (!features.length) {
        return;
    }

    var feature = features[0];
    var nombre = feature.properties.nom_estab;
    var wokers = feature.properties.per_ocu;
    var year = feature.properties.fecha_alta;

    var popup = new mapboxgl.Popup()
        .setLngLat(map.unproject(e.point))
        .setHTML('<p class=\"nombre\" >'+ nombre + '</p>'+
            '<p class=\"wokers\" >'+ wokers + '</p>' +
            '<p class=\"fecha\" >'+ year + '</p>'
            )
        .addTo(map);
        
});

