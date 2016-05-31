// google map

// maps options


 (function(window, mapster) {
  
  // map options
  var options = mapster.MAP_OPTIONS,
  element = document.getElementById('map-canvas'),
  // map
  map = mapster.create(element, options);
  

  
  map.zoom(2);
  var marker = map.addMarker({
    lat:45.811560,
    lng: 9.893480,
    draggable: false,
    content: 'Best Grip'
    });
    
  var marker2 = map.addMarker({
    lat: 35.674813,
    lng: 139.704264,
    draggable: false,
    content: 'Japan'
    });
    
    
  var marker3 = map.addMarker({
    lat: 42.184596,
    lng: 24.899099,
    draggable: false,
    content: 'Bulgaria'
    });
    

    
  var marker4 = map.addMarker({
    lat:  46.143082,
    lng: 4.026958,
    draggable: false,
    content: 'Japan'
    });
    
  
    var marker5 = map.addMarker({
    lat:  46.808863,
    lng: 8.069927,
    draggable: false,
    content: 'Japan'
    });
    

   

    
}(window, window.Mapster || (window.Mapster = {})));