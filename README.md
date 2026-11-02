# ValPresent Beta

A browser-based lyrics and VJ presentation controller prototype.

## Live preview
The app is available at:
https://aquilaBLTZR.github.io/ValPresent/

## Features
- A single live Output lyric display with a 1920 × 1080 (16:9) reference frame.
- Fresh installations start with an empty playlist; add songs through the New Song dialog.
- Drag the dividers to resize the Playlist, Output workspace, Lyrics Settings, and transition/lyric panels. Pane widths persist locally and enforce minimum sizes.
- Up/Down and lyric list clicks change the live lyric directly; VJ loop keys and tiles change the live loop independently.
- Green border marks the live VJ loop.
- FADE, CUT, FTB and FTW VJ transition modes.
- Playlist with saved songs and per-song lyric lists.
- New Song editor with name, paste area, conservative Auto-separate, Save and Cancel.
- Font, bold, italic, drop shadow, color palette and custom color.
- Lyrics and settings persist in browser local storage.
- Keyboard: Up/Down = previous/next live lyric; 1–9 and 0 = switch VJ loops 1–10; Q/W/E/R = choose the VJ FADE/CUT/FTB/FTW transition.

## GitHub Pages
In the repository, open **Settings → Pages**, choose **GitHub Actions** as the build and deployment source, then save. The included workflow deploys the repository root.

## Current limitations
This is a browser prototype, not a complete hardware video switcher. VJ loop tiles are placeholders and do not yet play uploaded video media or send a signal to OBS, Resolume, ProPresenter, or a physical display. Automatic lyric separation is heuristic: it preserves explicit breaks and uses punctuation conservatively. It cannot guarantee accurate syllabic or poetic line breaks in every language, so review its output before saving.
