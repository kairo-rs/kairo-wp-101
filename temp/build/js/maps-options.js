(function(window, google, mapster) {
  
  var styles = [{
    featureType: 'all',
    elementType: 'labels',
    stylers: [
      {visibility:'on'}
      ]
    }, {
      featureType: 'water',
      elementType : 'geometry',
      stylers: [
        {color: '#2980b9'}
        ]
    }
    
    ];
  
  mapster.MAP_OPTIONS = {
    center: {
      lat: 45.811560,
      lng: 9.893480
    },
    zoom: 4,
    disableDefaultUI: true,
    scrollWheel: false,
    draggable: true, 
    minZoom: 2,
    maxZoom: 10,
    styles: styles,
    
  };
  
  
}(window, google, window.Mapster || (window.Mapster = {})));
