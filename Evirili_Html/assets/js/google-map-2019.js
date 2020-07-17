function initMap() {

    var location = { lat: 23.810331, lng: 90.412521 };
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 4,
        center: location
    });
    
    var marker = new google.maps.Marker({
        position: location,
        map: map
    })

}
initMap();