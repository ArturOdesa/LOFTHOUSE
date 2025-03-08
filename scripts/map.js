let LatLng = [50.47558, 30.50279];
        const map = L.map('map').setView(LatLng, 17);
        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);
        let marker = L.marker(LatLng).addTo(map);