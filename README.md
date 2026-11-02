# ValPresent Beta

A browser-based lyrics and VJ presentation controller prototype.

## Preview
After GitHub Pages is enabled, the app will be available at:
https://aquilaBLTZR.github.io/ValPresent/

## Features
- Separate Preview and Output lyric states.
- Queue a lyric or VJ loop in Preview; press Space or click Output to take it live.
- Green border marks the live VJ loop; red border marks the queued loop.
- FADE, CUT, FTB and FTW VJ transition modes.
- Playlist with saved songs and per-song lyric lists.
- New Song editor with name, paste area, conservative Auto-separate, Save and Cancel.
- Font, bold, italic, drop shadow, color palette and custom color.
- Lyrics and settings persist in browser local storage.
- Keyboard: Space = take live; Up/Down = move Preview lyric; 1–9 and 0 = select VJ loops 1–10; Q/W/E/R = FADE/CUT/FTB/FTW.

## GitHub Pages
In the repository, open **Settings → Pages**, choose **GitHub Actions** as the build and deployment source, then save. The included workflow deploys the repository root.

## Current limitations
This is a browser prototype, not a complete hardware video switcher. VJ loop tiles are placeholders and do not yet play uploaded video media or send a signal to OBS, Resolume, ProPresenter, or a physical display. Automatic lyric separation is heuristic: it preserves explicit breaks and uses punctuation conservatively. It cannot guarantee accurate syllabic or poetic line breaks in every language, so review its output before saving.
