// Inicjalizacja mapy
const map = L.map('map').setView([52.2317, 21.0061], 12); // Warszawa

// Podkład (XYZ tiles) — bezpieczny na GitHub Pages
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

// Wczytanie przykładowych punktów z GeoJSON (lokalny plik w repo)
fetch('data/points.geojson')
  .then(r => r.json())
  .then(geojson => {
    const layer = L.geoJSON(geojson, {
      onEachFeature: (feature, layer) => {
        const p = feature.properties || {};
        layer.bindPopup(`<b>${p.nazwa || 'Punkt'}</b><br/>${p.opis || ''}`);
      }
    }).addTo(map);
    try {
      map.fitBounds(layer.getBounds(), {padding: [20,20]});
    } catch(e) {
      // jeżeli tylko jeden punkt — ustaw widok
      if (geojson.features && geojson.features.length === 1) {
        const [x,y] = geojson.features[0].geometry.coordinates;
        map.setView([y,x], 14);
      }
    }
  });
