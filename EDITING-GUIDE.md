# Portfolio-Bearbeitungsguide
**Jose L. Treff — jose-treff.de**
_Letztes Update: April 2026_

---

## Wie funktioniert das System?

Deine Portfolio-Seite lädt alle Texte aus drei Dateien:

| Datei | Sprache |
|---|---|
| `content/de.json` | Deutsch |
| `content/en.json` | Englisch |
| `content/es.json` | Spanisch |

Du bearbeitest diese Dateien auf **GitHub**, speicherst — und Vercel deployt die Seite automatisch innerhalb von ~60 Sekunden.

**Bilder und Logos** liegen im Ordner `public/images/logos/`.
**Case-Study-Daten** (mit Bildlinks) liegen in `content/cases-data.ts` und `content/case-studies-deep-dive.ts`.

---

## Wo editiere ich? Schritt für Schritt

### 1. GitHub öffnen
Gehe zu: **github.com/JLT042/portfolio-starter-kit**

Logge dich mit deinem GitHub-Account ein.

---

### 2. Eine Datei öffnen und bearbeiten

1. Klicke auf den Ordner **`content`**
2. Klicke auf z.B. **`de.json`**
3. Klicke oben rechts auf das **Stift-Symbol** (✏️ "Edit this file")
4. Ändere den Text zwischen den Anführungszeichen
5. Scrolle nach unten → Klicke **"Commit changes"**
6. Im Popup: Klicke einfach nochmal **"Commit changes"** (grüner Button)

Fertig. Die Seite wird in ~60 Sekunden aktualisiert.

---

## Was kann ich bearbeiten?

### TEXTE

Alle Texte sind in `content/de.json` (Deutsch), `content/en.json` (Englisch) und `content/es.json` (Spanisch).

Die Datei sieht so aus:
```json
{
  "hero_sub": "Senior Performance Marketer und...",
  "t1_quote": "Jose hat unsere Google-Ads-Performance..."
}
```

Du änderst nur den Text **zwischen den zweiten Anführungszeichen** — nie die linke Seite (den "Key").

**Wichtig:** Lass die Anführungszeichen und Kommata stehen. Nur den Text dazwischen ändern.

---

### HERO — Überschrift & Text

| Key | Was es ist |
|---|---|
| `hero_status` | Der grüne Statusbadge oben |
| `hero_headline` | Die große Überschrift (`<br/>` = Zeilenumbruch, nicht löschen) |
| `hero_sub` | Der Beschreibungstext darunter |
| `hero_cta1` | Primär-Button (Calendly) |
| `hero_cta2` | Sekundär-Button (Anker auf Case Studies) |

---

### HERO — KPI-Zahlen (die 4 Werte im Zahlenstreifen)

| Key | Aktueller Wert | Was es ist |
|---|---|---|
| `hero_ev1_val` | `13×` | Die große Zahl links |
| `hero_ev1` | `ROAS — Statement Clothing GmbH` | Das Label darunter |
| `hero_ev2_val` | `€9` | Zweite Zahl |
| `hero_ev2` | `CPA bei Ø-Warenkorbwert €80` | Label |
| `hero_ev3_val` | `5+` | Dritte Zahl |
| `hero_ev3` | `Jahre Performance Marketing in DACH` | Label |
| `hero_ev4_val` | `€30K` | Vierte Zahl |
| `hero_ev4` | `Ad-Budget monatlich eigenverantwortet` | Label |

Wenn du einen neuen Kunden gewinnst und der ROAS steigt: einfach `hero_ev1_val` in `de.json` ändern — fertig.

---

### LOGO-STREIFEN

Das Eyebrow-Label über den Logos:
```json
"logos_eyebrow": "Täglich genutzte Plattformen & Kanäle"
```

Die Icons selbst sind Bilddateien in `public/images/logos/` — Tausch: kurz schreiben.

---

### FÜR WEN ICH ARBEITE (3 Audience-Karten)

| Key | Was es ist |
|---|---|
| `aud_eyebrow` | Eyebrow-Label der Section |
| `aud_heading` | Überschrift |
| `aud1_title` | Karte 1 — Titel |
| `aud1_desc` | Karte 1 — Beschreibung |
| `aud1_stack` | Karte 1 — Tools/Plattformen (Fußzeile) |
| `aud1_cta` | Karte 1 — Link-Text |
| `aud2_title` / `aud2_desc` / `aud2_model` / `aud2_cta` | Karte 2 — Agenturen |
| `aud3_title` / `aud3_desc` / `aud3_usecases` / `aud3_cta` | Karte 3 — B2B |

---

### LEISTUNGEN (6 Bento-Kacheln)

| Key | Was es ist |
|---|---|
| `svc_eyebrow` | Eyebrow-Label |
| `svc_heading` | Überschrift ("Was ich anbiete") |
| `svc_headline` | Sub-Headline |
| `svc_sub` | Einleitungstext |
| `p1_title` | Kachel 1 — Titel |
| `p1_desc` | Kachel 1 — Beschreibung |
| … | Gleiches Schema bis `p6_title` / `p6_desc` |

---

### TESTIMONIALS / ZITATE

| Key | Was es ist |
|---|---|
| `testi_eyebrow` | Überschrift ("Was Kunden sagen") |
| `testi_sub` | Subtext |
| `t1_quote` | Zitat von Kunde 1 |
| `t1_name` | Name (z.B. "M. Schreiber") |
| `t1_role` | Rolle (z.B. "Inhaber · E-Commerce, DACH") |
| `t2_quote` / `t2_name` / `t2_role` | Kunde 2 |
| `t3_quote` / `t3_name` / `t3_role` | Kunde 3 |

---

### CASE STUDIES (Übersicht)

Texte in `de.json`:

| Key | Was es ist |
|---|---|
| `c1_desc` | Beschreibungstext Projekt 1 |
| `c1_period` | Zeitraum (z.B. "09/2025 – heute") |
| `c1_lever` | Der Hebel-Satz |
| `c2_desc` / `c2_period` / `c2_lever` | Projekt 2 |
| `c3_desc` / `c3_period` / `c3_lever` | Projekt 3 |
| `c4_desc` / `c4_period` / `c4_lever` | Projekt 4 |
| `lever_label` | Beschriftung "Der Hebel" |
| `case_link` | Text des Anfrage-Links |

**Cover-Bilder** der Case-Karten → siehe Abschnitt "Bilder".

---

### GEO-SECTION

| Key | Was es ist |
|---|---|
| `geo_eyebrow` | "Neue Disziplin" |
| `geo_headline` | Große Überschrift |
| `geo_sub` | Einleitungstext |
| `geo_stat` | Die Statistik-Pill ("70 % der...") |
| `geo_p1_title` / `geo_p1_desc` | Pillar 1 |
| `geo_p2_title` / `geo_p2_desc` | Pillar 2 |
| `geo_p3_title` / `geo_p3_desc` | Pillar 3 |
| `geo_proof_label` | Beschriftung über dem Chat-Mockup |
| `geo_audit_q` | Frage über dem Audit-CTA |
| `geo_audit_cta` | Button-Text |

---

### ÜBER MICH

| Key | Was es ist |
|---|---|
| `about_eyebrow` | Kleine Überschrift ("Über mich") |
| `about_text` | Haupttext (Absätze durch `\n\n` trennen) |
| `about_avail` | Grüner Verfügbarkeits-Badge |

---

### WIE ICH ARBEITE (Pricing-Section)

| Key | Was es ist |
|---|---|
| `pricing_eyebrow` | Eyebrow-Label |
| `pricing_heading` | Überschrift |
| `pricing_r1_name` / `pricing_r1_term` / `pricing_r1_desc` | Karte 1 — Retainer |
| `pricing_r2_name` / `pricing_r2_term` / `pricing_r2_desc` | Karte 2 — Sprint |
| `pricing_r3_name` / `pricing_r3_term` / `pricing_r3_desc` | Karte 3 — White-Label |
| `pricing_foot` | Fußnote ("Stundensatz auf Anfrage…") |

---

### KONTAKT

| Key | Was es ist |
|---|---|
| `ct_eyebrow` | "Lass uns reden" |
| `ct_headline` | "Projekt in Planung?" |
| `ct_sub` | Beschreibungstext |
| `ct_m1` | Standort-Badge (z.B. "Hamburg / Remote") |
| `ct_m2` | Markt-Badge (z.B. "DACH-Fokus") |
| `ct_cta_calendly` | Text des grünen Calendly-Buttons |
| `ct_cta_email` | Text des Email-Buttons |

**Die Calendly-URL selbst** ist direkt im Code. Wenn du einen anderen Link nutzt: kurz schreiben.

---

### FOOTER

```json
"footer": "© 2026 Jose L. Treff — JLT Marketing Services"
```

---

## BILDER: Formate und Maße

> Falsche Bildformate werden nicht abgeschnitten, sondern **verzerrt oder schlecht gecroppt**. Hier steht genau, was wo reinpasst.

---

### Floating Icons im Hero (die schwebenden Logos)

**Ordner:** `public/images/logos/`
**Format:** PNG mit **transparentem Hintergrund**, quadratisch
**Empfohlene Größe:** 400 × 400 px

| Dateiname | Plattform |
|---|---|
| `shopify.png` | Shopify |
| `google-ads.png` | Google Ads |
| `meta.png` | Meta |
| `tiktok.png` | TikTok |
| `gtm.png` | Google Tag Manager |

**Tauschen:** Gleichen Dateinamen verwenden beim Hochladen — das Bild wird automatisch ersetzt.

---

### Bento-Kacheln (Leistungen, 6 Kacheln)

Jede Kachel hat ein Bild im oberen Teil — fest **208 px hoch** (`13rem`), Breite füllt die Kachel.

| Eigenschaft | Wert |
|---|---|
| Höhe (fest) | **208 px** (`13rem`) |
| Breite | variabel — füllt die Kachel (min. ~280 px) |
| Seitenverhältnis | **3:1 oder breiter** (z.B. 1200 × 400 px) |
| `object-fit` | `cover` — Bild wird zentriert gecroppt |
| Überlagerung | Dunkler Gradient von unten — untere 40% des Bildes verschwinden |

**Empfehlung:**
- Mindestgröße: **1200 × 400 px**
- Ideal: 1600 × 500 px oder breiter
- **Motiv sollte oben/mittig sein** — der untere Bereich verschwindet unter dem Gradienten
- Abstrakte Hintergründe, Dashboards, UI-Screenshots — keine Portraits oder Nahaufnahmen mit wichtigem Detail unten
- JPG oder WebP, komprimiert (< 200 KB)
- Unsplash-URL: `?q=80&w=1600&auto=format&fit=crop`

**Bilder ändern:** In `content/cases-data.ts` gibt es kein Feld für Bento-Bilder — diese sind direkt im Code unter `app/page.tsx`. Kurz schreiben für Änderungen, oder ich zeige dir die Zeilen.

---

### Case Study Cover-Bilder (/projekte — Karten-Grid)

Auf der `/projekte`-Seite zeigt jede Karte ein Cover-Bild — fest **200 px hoch**, Breite füllt die Karte.

| Eigenschaft | Wert |
|---|---|
| Höhe (fest) | **200 px** |
| Breite | variabel — Karten min. ~280 px, meist ~340 px |
| Seitenverhältnis | **16:9 oder breiter** (z.B. 1600 × 900 px) |
| `object-fit` | `cover` — automatisch zentriert gecroppt |

**Empfehlung:**
- Mindestgröße: **800 × 450 px**
- Ideal: 1600 × 900 px
- Motiv sollte **vertikal mittig** sein — oben und unten wird gleichmäßig gecroppt
- Funktioniert gut: Lifestyle, Workspace, Produkt, UI-Screens, Kameraperspektiven von oben
- Unsplash-URL: `?q=80&w=1600&auto=format&fit=crop`

**Bilder ändern:** In `content/cases-data.ts`, Feld `coverImage`:
```ts
coverImage: 'https://images.unsplash.com/photo-XXXX?q=80&w=1600&auto=format&fit=crop',
```
Einfach die URL ersetzen. Dasselbe Bild wird auch im Detail-Overlay und als Hero-Bild auf der Deep-Dive-Seite verwendet, wenn `heroImage` identisch gesetzt ist.

---

### Case Study Detail-Overlay (/projekte — aufgeklappte Karte)

Im Overlay erscheint dasselbe `coverImage` nochmal — diesmal **280 px hoch**, volle Breite des Panels (max. 860 px).

| Eigenschaft | Wert |
|---|---|
| Höhe (fest) | **280 px** |
| Breite | max. 860 px |
| Seitenverhältnis | **min. 16:9**, breiter ist besser |

Gleiche Empfehlung wie Cover-Bilder oben — ein gutes Cover funktioniert in beiden Kontexten.

---

### Case Study Deep-Dive Hero (/case-studies/[slug])

Das großformatige Hero-Bild oben auf jeder Deep-Dive-Seite — responsive Höhe, volle Viewport-Breite.

| Eigenschaft | Wert |
|---|---|
| Höhe | **240 px (mobil) bis 480 px (desktop)**, responsive |
| Breite | 100 % des Viewports |
| Seitenverhältnis | **16:9 oder breiter** — bei schmalen Bildern entsteht vertikales Cropping |
| `object-fit` | `cover` |
| `object-position` | `center 30%` — Fokus liegt **im oberen Drittel** |

**Empfehlung:**
- Mindestgröße: **1600 × 900 px** (2560 × 1440 px für Retina-Displays)
- Das Bild wird oben zentriert gecroppt — wichtige Motive **im oberen Drittel** platzieren
- Dunklere, ruhige Bilder funktionieren besser als helle — der gradient-overlay oben ist transparent, das Bild muss für sich stehen
- Unsplash-URL: `?q=80&w=2560&auto=format&fit=crop`

**Bilder ändern:** In `content/case-studies-deep-dive.ts`, Feld `heroImage`:
```ts
heroImage: 'https://images.unsplash.com/photo-XXXX?q=80&w=2560&auto=format&fit=crop',
```

---

### Übersicht: Bildgrößen auf einen Blick

| Kontext | Höhe | Breite | Ideal-Maß | Motiv-Position |
|---|---|---|---|---|
| Hero-Logos (floating) | 400 px | 400 px | 400 × 400 px | zentriert, transparent |
| Bento-Kacheln (Leistungen) | 208 px | ~280–600 px | 1600 × 500 px | oben/mittig |
| Case Study Cover (Karte) | 200 px | ~340 px | 1600 × 900 px | vertikal mittig |
| Case Study Overlay (Panel) | 280 px | max. 860 px | 1600 × 900 px | vertikal mittig |
| Deep-Dive Hero (Vollbild) | 240–480 px | 100 vw | 2560 × 1440 px | oberes Drittel |

---

## Bilder selbst hochladen (für Eigene statt Unsplash)

1. Bild auf die gewünschte Größe zuschneiden (z.B. mit [squoosh.app](https://squoosh.app) komprimieren)
2. Auf GitHub gehen → `public/cases/` (Ordner anlegen falls nicht vorhanden: "Add file" → Namen mit `/` am Ende eingeben)
3. Bild hochladen: "Add file" → "Upload files"
4. URL im Code: `/cases/mein-bild.jpg` (relativer Pfad, kein Domain-Präfix nötig)

Beispiel in `cases-data.ts`:
```ts
coverImage: '/cases/statement-clothing-hero.jpg',
```

---

## Was NICHT über JSON änderbar ist

Diese Dinge brauchen kurze Rückmeldung an mich:

- Farben, Layout, Abstände
- Tool-Tags in den Leistungskacheln (Bento)
- Bilder in den Bento-Kacheln (direkt im Code)
- Kunden im Logo-Streifen hinzufügen/entfernen
- Mock-Screenshots in den Case Studies aktualisieren
- Neue Case Studies hinzufügen (neue Einträge in `cases-data.ts` und `case-studies-deep-dive.ts`)
- Calendly-URL ändern
- LinkedIn-URL
- Abschnitte umordnen oder entfernen

---

## Häufige Fehler vermeiden

**Fehler 1: Anführungszeichen fehlen oder falsch**
```json
// FALSCH:
"hero_sub": Senior Performance Marketer...

// RICHTIG:
"hero_sub": "Senior Performance Marketer..."
```

**Fehler 2: Komma am Ende fehlt**
```json
// Alle Zeilen außer der letzten brauchen ein Komma:
"ct_sub": "Ob Google Ads...",
"footer": "© 2026 Jose L. Treff"
```

**Fehler 3: Die `<br/>` in Überschriften löschen**
```json
// RICHTIG — die <br/> stehen lassen:
"hero_headline": "Ads, die skalieren.<br/>Shops, die liefern."
```

**Fehler 4: Falsche Bildgröße in Bento-Kacheln**
Ein quadratisches Bild (1:1) in einer 3:1-Kachel wird stark gecroppt — nur ein schmaler Streifen ist sichtbar. Immer das Seitenverhältnis aus der Tabelle oben prüfen.

**Wenn die Seite nach dem Commit nicht lädt:** Die JSON-Datei hat einen Fehler. Öffne sie auf GitHub, klicke wieder ✏️, schau ob alle Anführungszeichen und Kommata stimmen.

---

## Schnell-Referenz: Wo ist was?

```
Dein Repo auf GitHub
│
├── content/
│   ├── de.json                    ← Alle deutschen Texte
│   ├── en.json                    ← Alle englischen Texte
│   ├── es.json                    ← Alle spanischen Texte
│   ├── cases-data.ts              ← Case Study Karten (coverImage, Metriken, Texte)
│   └── case-studies-deep-dive.ts  ← Deep-Dive Seiten (heroImage, alle Sections)
│
├── public/
│   ├── images/
│   │   └── logos/
│   │       ├── shopify.png
│   │       ├── google-ads.png
│   │       ├── meta.png
│   │       ├── tiktok.png
│   │       └── gtm.png
│   └── cases/                     ← Eigene Bilder für Case Studies (leer, selbst befüllen)
│
└── app/
    ├── page.tsx                   ← Hauptseite (nicht anfassen)
    ├── projekte/page.tsx          ← Projektübersicht (nicht anfassen)
    └── case-studies/[slug]/
        └── page.tsx               ← Deep-Dive Template (nicht anfassen)
```

---

## Als PDF drucken

Öffne diese Datei auf GitHub → Klicke auf die **drei Punkte** → **"View raw"** → `Strg+P` → "Als PDF speichern".

Oder: Sende die Datei an einen Markdown-zu-PDF Converter (z.B. markdowntopdf.com).

---

_Bei Fragen: jose@tubebridge.de_
