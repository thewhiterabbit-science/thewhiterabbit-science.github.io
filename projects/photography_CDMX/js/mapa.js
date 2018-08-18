var tipos = ['Servicios de fotografía y videograbación', 'Venta de equipo y material fotográfico','Fabricación de películas, placas y papel fotosensible', 'Servicios de revelado e impresión'];

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
    map.addSource("Servicios de fotografía y videograbación", {
        "type": "geojson",
          data: 'https://gist.githubusercontent.com/thewhiterabbit-science/b39eea8baa74f22cd3e611d3af280362/raw/8ba19f5598ad797aa72c79fae0a117152d852336/map.geojson',

    });

    map.addLayer({
       'id': 'Servicios de fotografía y videograbación',
        "source": 'Servicios de fotografía y videograbación',
        "type": "circle",
        "paint": {
            "circle-radius": 4,
            "circle-color": "#4c275c"
        }

    });

    map.addSource("Venta de equipo y material fotográfico", {
        "type": "geojson",
          data: 'https://gist.githubusercontent.com/thewhiterabbit-science/00404f98a0fdbfa5151b9e623b592445/raw/b79437f663074ef323f3402ab7e267e54c6aecf3/comercio-al-por-menor-de-equipo-y-material-fotografico.geojson',

    });

    map.addLayer({
       'id': 'Venta de equipo y material fotográfico',
        "source": 'Venta de equipo y material fotográfico',
        "type": "circle",
        "paint": {
            "circle-radius": 4,
            "circle-color": "#a73266"
        }

    });

    map.addSource("Fabricación de películas, placas y papel fotosensible", {
        "type": "geojson",
          data: 'https://gist.githubusercontent.com/thewhiterabbit-science/dd5a3bd80de06f1ad166ce2bae7df947/raw/fffe1f73ac4e1602d0f225f5d54c4520674d1b90/fabricacion-de-peliculas-placas-y-papel-fotografico.geojson',

    });

    map.addLayer({
       'id': 'Fabricación de películas, placas y papel fotosensible',
        "source": 'Fabricación de películas, placas y papel fotosensible',
        "type": "circle",
        "paint": {
            "circle-radius": 4,
            "circle-color": "#ec5a4a"
        }

    });

    map.addSource("Servicios de revelado e impresión", {
        "type": "geojson",
          data: 'https://gist.githubusercontent.com/thewhiterabbit-science/1cadbae758208a73d554a07e5e2d16d9/raw/54e37c65a58e388f2ea743f5bd89b706648e605f/servicios-de-revelado-e-impresion-de-fotografias.geojson',

    });

    map.addLayer({
       'id': 'Servicios de revelado e impresión',
        "source": 'Servicios de revelado e impresión',
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
    var features = map.queryRenderedFeatures(e.point, { layers: ['Servicios de fotografía y videograbación', 'Venta de equipo y material fotográfico','Fabricación de películas, placas y papel fotosensible', 'Servicios de revelado e impresión'] });
    map.getCanvas().style.cursor = features.length ? 'pointer' : '';
});

// popups de nombres

map.on('click', function (e) {
    var features = map.queryRenderedFeatures(e.point, { layers: ['Servicios de fotografía y videograbación', 'Venta de equipo y material fotográfico','Fabricación de películas, placas y papel fotosensible', 'Servicios de revelado e impresión'] });
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

