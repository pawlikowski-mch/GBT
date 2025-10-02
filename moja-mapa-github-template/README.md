
# Moja mapa — szablon pod GitHub Pages

To repozytorium zawiera minimalny przykład działającej mapy Leaflet do hostowania na GitHub Pages.
Wgraj **całą zawartość tego folderu** do repo (na branch `main`, folder root), a następnie włącz Pages:
**Settings → Pages → Deploy from a branch → main / (root)**.

## Struktura
```
/ (root)
├─ index.html
├─ js/
│  └─ main.js
└─ data/
   └─ points.geojson
```

## Jak dodać swoje dane
- Zamień plik `data/points.geojson` na własny (nazwy i ścieżkę zaktualizuj w `js/main.js`, jeśli zmienisz).
- Możesz dodać wiele warstw i wczytać je kolejnymi `fetch(...)`.
- Podkład OSM można podmienić na inny XYZ (zwróć uwagę na licencje/CORS).
