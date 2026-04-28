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
| `hero_cta1` | Button "Case Studies ansehen" |
| `hero_cta2` | Button "15-Min Gespräch buchen" |

---

### HERO — KPI-Zahlen (die 4 Werte im Zahlenstreifen)

| Key | Aktueller Wert | Was es ist |
|---|---|---|
| `hero_ev1_val` | `13×` | Die große Zahl links |
| `hero_ev1` | `ROAS, Fashion D2C` | Das Label darunter |
| `hero_ev2_val` | `€9` | Zweite Zahl |
| `hero_ev2` | `CPA bei €80 Warenkorbwert` | Label |
| `hero_ev3_val` | `5+` | Dritte Zahl |
| `hero_ev3` | `Jahre, 6 aktive Kunden` | Label |
| `hero_ev4_val` | `€30K` | Vierte Zahl |
| `hero_ev4` | `Max. Budget/Monat` | Label |

Wenn du einen neuen Kunden gewinnst und der ROAS steigt: einfach `hero_ev1_val` in `de.json` ändern — fertig.

---

### LOGO-STREIFEN (Kundenlogos)

Die 4 Kunden-Icons im Logo-Streifen sind **nicht** in den JSON-Dateien — sie sind direkt im Code. Um Kunden hinzuzufügen oder zu ersetzen, schreib mir kurz.

Das Eyebrow-Label (Text über den Logos) änderst du hier:
```json
"logos_eyebrow": "Vertrauen von Brands & Gründern"
```

---

### LEISTUNGEN (6-Phasen-Grid)

| Key | Was es ist |
|---|---|
| `svc_headline` | Überschrift des Abschnitts |
| `svc_sub` | Untertitel |
| `p1_title` | Phase 01 — Titel |
| `p1_desc` | Phase 01 — Beschreibungstext |
| `p2_title` | Phase 02 — Titel |
| `p2_desc` | Phase 02 — Beschreibungstext |
| … | Gleiches Schema bis `p6_title` / `p6_desc` |

Die Tool-Tags in den Kacheln (Shopify, WordPress, GA4 etc.) sind direkt im Code. Änderungen: kurz schreiben.

---

### TESTIMONIALS / ZITATE

Du hast 3 Kundenstimmen. Jede hat Quote, Name und Rolle:

| Key | Was es ist |
|---|---|
| `t1_quote` | Zitat von Kunde 1 |
| `t1_name` | Name (z.B. "M. Schreiber") |
| `t1_role` | Rolle (z.B. "Inhaber · E-Commerce, DACH") |
| `t2_quote` | Zitat von Kunde 2 |
| `t2_name` | Name |
| `t2_role` | Rolle |
| `t3_quote` | Zitat von Kunde 3 |
| `t3_name` | Name |
| `t3_role` | Rolle |

**Tipp:** Echte Zitate mit vollem Namen wirken stärker als Initialen — sobald du die Erlaubnis hast, Namen und Fotos einzubauen, schreib mir.

---

### CASE STUDIES (Projektkarten)

Jede der 4 Projektkarten hat Beschreibung und KPI-Labels:

| Key | Beispiel |
|---|---|
| `c1_desc` | Langer Beschreibungstext für Projekt 1 |
| `c1_tag` | Badge-Text, z.B. "ROAS-Skalierung" |
| `c2_desc` | Beschreibung Projekt 2 |
| `c2_k3v` | Statuswert (z.B. "Aktiv") |
| `c2_k3` | Status-Label (z.B. "seit 09/2025") |

Die **Mock-Screenshots** in den Karten (GA4-Zahlen, Produktbilder etc.) sind direkt im Code. Änderungen: kurz schreiben.

---

### ÜBER MICH

| Key | Was es ist |
|---|---|
| `about_eyebrow` | Kleine Überschrift ("Über mich") |
| `about_text` | Der Haupttext (Absätze durch `\n\n` trennen) |
| `about_avail` | Der grüne Verfügbarkeits-Badge |

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

**Die Calendly-URL selbst** ist direkt im Code (nicht in JSON). Wenn du einen anderen Calendly-Link nutzt: kurz schreiben.

---

### FOOTER

```json
"footer": "© 2026 Jose L. Treff — JLT Marketing Services"
```

Das Jahr einfach manuell updaten.

---

## BILDER & LOGOS tauschen

### Floating Icons im Hero (die 5 schwebenden Logos)

Die 5 Icons sind Bilddateien im Ordner `public/images/logos/`:

| Dateiname | Plattform |
|---|---|
| `shopify.png` | Shopify |
| `google-ads.png` | Google Ads |
| `meta.png` | Meta |
| `tiktok.png` | TikTok |
| `gtm.png` | Google Tag Manager |

**Logo ersetzen:**
1. Gehe auf GitHub zu `public/images/logos/`
2. Klicke auf die Datei, die du ersetzen willst
3. Klicke auf die **drei Punkte** (⋯) oben rechts → "Delete file" — ODER:
4. Gehe zum Ordner `public/images/logos/`
5. Klicke **"Add file" → "Upload files"**
6. Lade dein neues Bild hoch — **wichtig: gleicher Dateiname** wie das alte Bild

**Empfohlene Bildgröße:** 400×400px, PNG mit transparentem Hintergrund.

**Dunkle Logos** (wie TikTok) werden automatisch weiß dargestellt — das ist so eingestellt.

### Profilbild (Über mich)
Das Profilbild im "Über mich"-Bereich ist aktuell ein Emoji (🧑‍💻). Wenn du ein echtes Foto einbauen willst: Foto hochladen nach `public/images/jose.jpg` und mir kurz schreiben.

---

## Was NICHT über JSON änderbar ist

Diese Dinge brauchen kurze Rückmeldung an mich:

- Farben, Layout, Abstände
- Tool-Tags in den Leistungskacheln
- Kunden im Logo-Streifen hinzufügen/entfernen
- Mock-Screenshots in den Case Studies aktualisieren
- Calendly-URL ändern
- Neue Case Studies hinzufügen
- LinkedIn-URL

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
// FALSCH (letzter Eintrag):
"footer": "© 2026 Jose L. Treff"
          ← hier kein Komma nötig

// Alle anderen Zeilen brauchen ein Komma:
"ct_sub": "Ob Google Ads...",
```

**Fehler 3: Die `<br/>` in Überschriften löschen**
```json
// RICHTIG — die <br/> stehen lassen:
"hero_headline": "Performance.<br/>Die<br/><em>konvertiert.</em>"
```

**Wenn die Seite nach dem Commit nicht lädt:** Die JSON-Datei hat einen Fehler. Öffne sie auf GitHub, klicke wieder ✏️, schau ob alle Anführungszeichen und Kommata stimmen.

---

## Schnell-Referenz: Wo ist was?

```
Dein Repo auf GitHub
│
├── content/
│   ├── de.json        ← Alle deutschen Texte
│   ├── en.json        ← Alle englischen Texte
│   └── es.json        ← Alle spanischen Texte
│
├── public/
│   └── images/
│       └── logos/
│           ├── shopify.png
│           ├── google-ads.png
│           ├── meta.png
│           ├── tiktok.png
│           └── gtm.png
│
└── app/
    └── page.tsx       ← Seiten-Code (nicht anfassen)
```

---

## Als PDF drucken

Öffne diese Datei auf GitHub → Klicke auf die **drei Punkte** → **"View raw"** → `Strg+P` → "Als PDF speichern".

Oder: Sende die Datei an einen Markdown-zu-PDF Converter (z.B. markdowntopdf.com).

---

_Bei Fragen: jose@tubebridge.de_
