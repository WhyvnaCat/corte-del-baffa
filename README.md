# Corte del Baffa — Website

One-Page-Website für den Verkauf des Rustico „Corte del Baffa" in den Monti di Lego, oberhalb Brione TI (Tessin).

Gebaut mit **Vite + React + TypeScript**, ohne Backend, ohne Tracking, statisch deploybar auf **GitHub Pages**.

---

## 1. Installation

Voraussetzung: [Node.js](https://nodejs.org) 20 oder neuer.

```bash
npm install
```

## 2. Lokal starten

```bash
npm run dev
```

Öffnet die Website unter `http://localhost:5173/corte-del-baffa/` mit Hot-Reload. Änderungen an Texten, Bildern oder Styles werden sofort sichtbar.

## 3. Build

```bash
npm run build
```

Prüft TypeScript-Typen und erzeugt den produktionsreifen Build im Ordner `dist/`. Mit `npm run preview` lässt sich der Build lokal testen.

## 4. Deployment (GitHub Pages)

Das Projekt enthält bereits `.github/workflows/deploy.yml`. Jeder Push auf den Branch `main` baut die Seite automatisch und veröffentlicht sie auf GitHub Pages.

Einmalige Einrichtung im GitHub-Repository:

1. Repository auf GitHub erstellen und Code pushen (`git push -u origin main`).
2. Unter **Settings → Pages** als Quelle **„GitHub Actions"** auswählen.
3. Nach dem ersten erfolgreichen Workflow-Lauf ist die Seite unter `https://<username>.github.io/<repo-name>/` erreichbar.

**Wichtig:** Der Pfad `base` in [vite.config.ts](vite.config.ts) ist auf `/corte-del-baffa/` gesetzt. Heisst das Repository anders, muss dieser Wert entsprechend angepasst werden (oder beim Build die Umgebungsvariable `VITE_BASE_PATH` setzen).

## 5. Bilder austauschen

Die Originalfotos (aus dem Verkaufsprospekt extrahiert) liegen in:

```
scripts/source-images/<kategorie>/<dateiname>.jpg
```

Kategorien: `hero`, `exterior`, `interior`, `view`, `garden`, `details`.

Um ein bestehendes Foto zu ersetzen:

1. Neues Foto (JPG, möglichst hochauflösend, min. 2000 px breit) unter dem **gleichen Dateinamen** in den passenden Ordner unter `scripts/source-images/` legen.
2. Responsive Varianten neu erzeugen:
   ```bash
   npm run images:build
   ```
   Das Skript erstellt automatisch WebP + JPEG in mehreren Grössen (480–2200 px) im Ordner `public/images/<kategorie>/`.

## 6. Neue Bilder hinzufügen

1. Foto in den passenden Ordner unter `scripts/source-images/<kategorie>/` legen, z. B.:
   ```
   scripts/source-images/details/schwedenofen-detail.jpg
   scripts/source-images/garden/blumengarten.jpg
   ```
2. `npm run images:build` ausführen.
3. Das Bild in [src/data/images.ts](src/data/images.ts) eintragen (Breite/Höhe des Originalfotos für `maxWidth`/`aspect` angeben, `galleryTags` bestimmt, unter welchem Filter-Tab in der Galerie das Foto erscheint: `aussen`, `innen`, `aussicht`, `garten`, `details`).
4. Passenden Alt-Text in [src/data/content.de.ts](src/data/content.de.ts) und [src/data/content.it.ts](src/data/content.it.ts) unter `gallery.imageAlt` ergänzen (Schlüssel = Bild-`id`).

Aktuell enthält die Seite 7 Fotos aus dem bestehenden Prospekt. Die Kategorien **Garten** und **Details** sind strukturell vorbereitet, warten aber noch auf weitere Fotos (z. B. Blumengarten, Schopf, Naturstein-Details, Pergola-Nahaufnahme) — bis dahin zeigt die Galerie dort einen dezenten Platzhalter-Hinweis.

## 7. Texte ändern

Alle Inhalte liegen zentral in zwei Dateien, getrennt nach Sprache:

- [src/data/content.de.ts](src/data/content.de.ts) — Deutsch (Standardsprache)
- [src/data/content.it.ts](src/data/content.it.ts) — Italienisch

Beide Dateien haben die exakt gleiche Struktur (definiert in [src/data/content.types.ts](src/data/content.types.ts)). Texte einfach direkt anpassen — TypeScript meldet einen Fehler, falls in einer der beiden Dateien ein Feld fehlt.

## 8. Telefonnummer ändern

Alle Kontaktangaben (WhatsApp-Link, Telefon-Link) leiten sich zentral aus einer Datei ab:

```
src/data/contact.ts
```

Dort `CONTACT_PHONE_DISPLAY` und `CONTACT_PHONE_INTL` anpassen — der WhatsApp- (`wa.me`) und Telefon-Link (`tel:`) werden automatisch aktualisiert.

## 9. Domain verbinden

Um später z. B. `cortedelbaffa.ch` zu verwenden:

1. Datei `public/CNAME` mit Inhalt `cortedelbaffa.ch` anlegen.
2. In [vite.config.ts](vite.config.ts) den `base`-Pfad auf `/` setzen (bzw. `VITE_BASE_PATH=/` beim Build verwenden), da die Seite dann nicht mehr unter einem Unterpfad läuft.
3. Beim Domain-Registrar einen `CNAME`-Eintrag (Subdomain) bzw. `A`-Records (Root-Domain) auf GitHub Pages einrichten — siehe [GitHub-Doku „Managing a custom domain"](https://docs.github.com/pages/configuring-a-custom-domain-for-your-github-pages-site).
4. In den Repository-Einstellungen unter **Settings → Pages** die Domain eintragen.
5. In `index.html` die Platzhalter-URLs (`https://cortedelbaffa.ch/...` bei `canonical`, Open-Graph- und Schema.org-Tags) sowie in `public/robots.txt` und `public/sitemap.xml` mit der tatsächlichen Domain abgleichen.

---

## Projektstruktur

```
src/
  components/     wiederverwendbare UI-Bausteine (Navigation, Lightbox, Button, …)
  sections/       eine Komponente je Seitenabschnitt (Hero, Gallery, Contact, …)
  data/           Inhalte (DE/IT), Bild-Manifest, Kontaktdaten
  context/        Sprachumschaltung (DE/IT)
  styles/         Design-Tokens (Farben, Typografie, Spacing) & globale Styles
  utils/          kleine Hooks (Scroll-Reveal, Zähl-Animation, Parallax)
scripts/
  process-images.mjs   generiert responsive WebP/JPEG aus scripts/source-images/
  source-images/       Original-Fotos (Quelle für den Bild-Build)
public/
  images/          generierte, responsive Bilder (nicht manuell bearbeiten)
```

## Design

- **Typografie:** [Fraunces](https://fonts.google.com/specimen/Fraunces) (Headlines, editorial/warm) + [Manrope](https://fonts.google.com/specimen/Manrope) (Fliesstext), lokal via `@fontsource` eingebunden — keine Google-Fonts-Anfragen zur Laufzeit.
- **Farben:** warmes Creme/Off-White, dunkles Aubergine, Terrakotta und Ocker als Akzente — siehe [src/styles/tokens.css](src/styles/tokens.css).
- **Keine Tracking-Skripte, kein Cookie-Banner nötig.**

## Qualität & Performance

- Responsive Bilder (WebP + JPEG-Fallback, mehrere Breakpoints, `loading="lazy"` ausserhalb des ersten Viewports).
- Feste `width`/`height` auf allen Bildern zur Vermeidung von Layout-Shifts (CLS).
- Scroll-Reveal-Animationen, Zähl-Animation bei den Eckdaten und ein dezenter Parallax-Effekt respektieren `prefers-reduced-motion`.
- Semantisches HTML, sichtbare Fokus-Zustände, Tastatur-Navigation in der Lightbox (Pfeiltasten, Escape).
- `robots.txt`, `sitemap.xml`, Open-Graph-/Twitter-Tags sowie Schema.org `RealEstateListing`-Daten in `index.html`.

## Noch zu erledigen (durch dich)

- [ ] Weitere Fotos ergänzen, insbesondere für die Kategorien **Garten** und **Details** (siehe Abschnitt 6).
- [ ] Finale Domain festlegen und verbinden (siehe Abschnitt 9); bis dahin sind in `index.html`, `robots.txt` und `sitemap.xml` Platzhalter-URLs (`cortedelbaffa.ch`) hinterlegt.
- [ ] Exakten Google-Maps-Pin prüfen/ersetzen: aktuell verlinkt die Seite auf eine Kartensuche nach „Monti di Lego, Brione Verzasca" (kein exakter Grundstücks-Pin, da die genauen Koordinaten nicht vorlagen). Bei Bedarf in [src/data/contact.ts](src/data/contact.ts) (`GOOGLE_MAPS_URL`, `OSM_EMBED_URL`) präzisieren.
