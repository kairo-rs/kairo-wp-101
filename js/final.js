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
    content: 'Best Grip Srl'
    });

  var markerArg = map.addMarker({
    lat: -33.470580,
    lng: -60.187981,
    draggable: false,
    content: 'Lucas Pazo<br>Argentina'
    });
    
  var markerJapan = map.addMarker({
    lat: 35.674813,
    lng: 139.704264,
    draggable: false,
    content: 'BESTGRIP JAPAN <br> Japan'
    });
    
    
  var markerBulgaria = map.addMarker({
    lat: 42.184596,
    lng: 24.899099,
    draggable: false,
    content: 'B&amp;B Racing <br>Bulgaria'
    });
    

    
  var markerAustria = map.addMarker({
    lat: 47.434892,
    lng: 9.656960,
    draggable: false,
    content: 'VONBLON<br>Austria'
    });
    
  
    var markerCile = map.addMarker({
    lat:  -33.111378,
    lng: -70.999161,
    draggable: false,
    content: 'Sr/Mr. José Roehrs Fernández<br>Chile'
    });

     var markerDanimarca = map.addMarker({
    lat:  56.762559,
    lng: 9.344881,
    draggable: false,
    content: 'Farmas, Herning <br>Danimarca'
    });
    
    var markerEstonia = map.addMarker({
    lat:  58.728088,
    lng: 25.546713,
    draggable: false,
    content: 'I.K.H/ Jarva TU <br>Estonia'
    });

    var markerFinlandia = map.addMarker({
    lat:  62.168219,
    lng: 26.407379,
    draggable: false,
    content: 'I.K.H<br>Finlandia'
    });

    var markerFrancia = map.addMarker({
    lat:  46.628094,
    lng: 2.664654,
    draggable: false,
    content: 'Raphael Bonifay - 2 R TEAM<br>Francia'
    });

    var markerGermania1 = map.addMarker({
    lat:  51.781746,
    lng: 8.623020,
    draggable: false,
    content: 'BUTZNER<br>Germania'
    });
    var markerGermania2 = map.addMarker({
    lat:  53.578906,
    lng: 7.797831,
    draggable: false,
    content: 'REIFEN IMMLER<br>Germania'
    });
     var markerGermania3 = map.addMarker({
    lat:  48.129530,
    lng: 8.528111,
    draggable: false,
    content: 'TOURATECH<br>Germania'
    });
      var markerGermania4 = map.addMarker({
    lat:  50.050122,
    lng: 10.321845,
    draggable: false,
    content: 'MC REIFENSERVICE<br>Germania'
    });

      var markerGB = map.addMarker({
    lat:  56.150828,
    lng: -3.786706,
    draggable: false,
    content: 'Applied Access Associates<br>Gran Bretagna'
    });

      var markerIslanda = map.addMarker({
    lat:  64.126882,
    lng: -21.819828,
    draggable: false,
    content: 'KLETTUR EHF SALA OG<br>Islanda'
    });
      var markerLettonia1 = map.addMarker({
    lat:  56.961521,
    lng: 24.099226,
    draggable: false,
    content: 'VALINTIA SIA MORESIELA<br>Lettonia'
    });

var markerLettonia2 = map.addMarker({
    lat:  56.948007,
    lng: 24.101920,
    draggable: false,
    content: 'QUANTUM LATVIA SIA RIGA LATVIA<br>Lettonia'
    });

var markerLituania = map.addMarker({
    lat:  55.577610,
    lng: 23.597023,
    draggable: false,
    content: 'UAB DRAKONO RATAI   Algimantas Slabada<br>Lituania'
    });

var markerNorvegia1 = map.addMarker({
    lat:  59.921667,
    lng: 10.750092,
    draggable: false,
    content: 'FELLESKJOPET<br>Norvegia'
    });
var markerNorvegia2 = map.addMarker({
    lat:  60.241400,
    lng: 9.050750,
    draggable: false,
    content: 'C MAXS<br>Norvegia'
    });

var markerOlanda = map.addMarker({
    lat:  52.451826,
    lng: 6.575034,
    draggable: false,
    content: 'VERHEUL LEATHERS<br>Olanda'
    });
var markerPolonia = map.addMarker({
    lat:  54.383362,
    lng: 18.386907,
    draggable: false,
    content: 'GBG POLSKA EUROTIRES<br>Polonia'
    });

var markerRC = map.addMarker({
    lat: 50.782492,
    lng: 14.155855,
    draggable: false,
    content: 'CARRO SPORT<br>Repubblica Ceca'
    });

var markerRomania = map.addMarker({
    lat: 46.081844,
    lng: 23.587691,
    draggable: false,
    content: 'FM RACING ROMANIA<br>Romania'
    });
var markerRus = map.addMarker({
    lat: 55.748511,
    lng: 37.654366,
    draggable: false,
    content: '"KRAMPON", LLC<br>Russia'
    });

var markerSlo = map.addMarker({
    lat: 48.701380,
    lng: 19.518589,
    draggable: false,
    content: 'MILAN KOSEGI/JURAY VICHR<br>Slovacchia'
    });

var markerSpa1 = map.addMarker({
    lat: 42.464859,
    lng: 1.457728,
    draggable: false,
    content: 'RILEI ANDORRA<br>Spagna'
    });

var markerSpa2 = map.addMarker({
    lat: 39.863506,
    lng: -4.026555,
    draggable: false,
    content: 'David Prieto<br>Spagna'
    });


var markerSwe = map.addMarker({
    lat: 59.377503,
    lng: 16.507920,
    draggable: false,
    content: 'BestGrip AB<brSvezia'
    });

var markerSvi = map.addMarker({
    lat: 46.362069,
    lng: 10.071039,
    draggable: false,
    content: 'Officina Visinoni<br>Svizzera'
    });
var markerHun = map.addMarker({
    lat: 47.041919,
    lng: 19.372123,
    draggable: false,
    content: 'VEGH JANOS<br>Ungheria'
    });
var markerUSA = map.addMarker({
    lat: 39.260135,
    lng: -82.354057,
    draggable: false,
    content: 'D.F.C.<br>USA - Canada - Mexico'
    });

  
}(window, window.Mapster || (window.Mapster = {})));

