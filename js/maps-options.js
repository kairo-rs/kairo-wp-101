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
    level: 3,
    disableDefaultUI: true,
    scaleControl: true,
    draggable: true, 
    minZoom: 3,
    maxZoom: 5,
        scrollWheel: false,

    styles: styles

  };
  
  
}(window, google, window.Mapster || (window.Mapster = {})));
