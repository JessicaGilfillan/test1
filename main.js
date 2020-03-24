// JavaScript Document

/*You can then start using the objects available in that library */ 

/* creating a variable to store the map info in, then creating 
a new map using the the mapquest.map() method
*/
let L;

window.onload = function() {  
    let map = L.mapquest.map('map', {
    center: [53.480759, -2.242631],
    layers: L.mapquest.tileLayer('map'),
    zoom: 12
  });
} 

//method takes parameters the id of the div you awnt to display the map, options containing the details of the particular map we want to display 

/*Here we are creating a variable to store the map information in, then creating a new map using the mapquest.map() method, which takes as its parameters the ID of a <div> element you want to display the map in ('map'), and an options object containing the details of the particular map we want to display. In this case we specify the coordinates of the center of the map, a map layer of type map to show (created using the mapquest.tileLayer() method), and the default zoom level.*/