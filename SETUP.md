# Melvin - Trading Mentor Präsentation

Eine umfassende, interaktive Single-Page-Webanwendung für professionelle Präsentationen.

## Farbschema

- **Hauptfarbe (Mittelblau)**: #246EB9
- **Zweitfarbe (Dunkles Anthrazit)**: #222831
- **Akzentfarbe (Kräftiges Orange)**: #FF8C42
- **Neutral (Off-White)**: #FAFAFA

## Features

- ✅ Dark Mode / Light Mode Toggle
- ✅ Smooth Scrolling Navigation
- ✅ Framer Motion Animationen
- ✅ Vollständig responsive
- ✅ ShadCN UI Komponenten
- ✅ Moderne, subtile 3D-Effekte

## Struktur

Die Anwendung besteht aus folgenden Sektionen:

1. **Hero** - Willkommensbereich mit Einführung
2. **Über mich** - Aktuelle Position und Fokus
3. **Mein Weg** - Hintergrund und Entwicklung (Timeline)
4. **Philosophie** - Trading- und Mentoring-Überzeugungen
5. **Stärken & Schwächen** - Ehrliche Selbstreflexion
6. **Transformationen** - Geschichten von Jan und Michael
7. **Mein Warum** - Motivation und Antrieb
8. **Vision** - Einschätzung und Erwartungen

## Bilder hinzufügen

### Für Jan und Michael (Transformationen):

1. Erstellen Sie einen `public/images` Ordner im Projektverzeichnis
2. Fügen Sie die Bilder hinzu:
   - `public/images/jan-before.jpg` (oder .png)
   - `public/images/jan-after.jpg`
   - `public/images/michael-before.jpg`
   - `public/images/michael-after.jpg`

3. Aktualisieren Sie die Datei `src/components/Transformations.tsx`:

```tsx
// Ersetzen Sie die Platzhalter-Divs mit:
<img
  src="/images/jan-before.jpg"
  alt="Jan - Vorher"
  className="w-full h-64 object-cover rounded-xl"
/>
```

### Für das Hero-Bild (optional):

Fügen Sie ein persönliches Foto als `public/images/melvin.jpg` hinzu und aktualisieren Sie `src/components/Hero.tsx`.

## Anpassungen

### Text ändern:
Alle Texte sind direkt in den entsprechenden Komponenten-Dateien zu finden:
- `src/components/Hero.tsx`
- `src/components/AboutMe.tsx`
- `src/components/Journey.tsx`
- etc.

### Farben anpassen:
Die Hauptfarben sind als Tailwind-Klassen definiert:
- `text-[#246EB9]` - Mittelblau
- `text-[#FF8C42]` - Orange
- `bg-[#222831]` - Anthrazit
- `bg-[#FAFAFA]` - Off-White

### Navigation:
Die Navigation ist in `src/components/Navigation.tsx` und scrollt automatisch zu den Sektionen.

## Entwicklung

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Wichtige Hinweise

- Die Präsentation ist für Meetings optimiert
- Dark Mode ist standardmäßig aktiviert
- Alle Animationen sind subtil und professionell
- Die Struktur folgt dem vorgegebenen Aufbau
