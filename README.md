# ValPresent Beta

A browser-based lyrics and VJ presentation controller prototype.

## Live preview
The app is available at:
https://aquilaBLTZR.github.io/ValPresent/

## Features
- A single live Output lyric display with a 1920 × 1080 (16:9) reference frame.
- Fresh installations start with an empty playlist; add songs through the New Song dialog.
- Drag dividers to resize the Playlist, Output workspace, Lyrics Settings, and transition/lyric panels. The Output stays 16:9 as it scales. Pane sizes persist locally and enforce minimum sizes.
- Up/Down and lyric list clicks change the live lyric directly; VJ loop keys and tiles change the live loop independently.
- Green border marks the live VJ loop.
- Upload up to 10 MP4 VJ loops, limited to 25 MB each. Thumbnail previews and video files are stored locally in the browser.
- VJ transitions: FADE, CUT, FTB, FTW; choose editable duration presets and switch them with A/S/D.
- Playlist with saved songs and per-song lyric lists. Right-click a playlist song to edit or delete it.
- New Song editor with name, paste area, conservative Auto-separate, Save and Cancel.
- Font previews, bold, italic, drop shadow, color palette, custom color, and six lyric animation presets: Fade, Ascend, Z In/Out, and AZ In/Out. One speed slider controls the timing of every animation preset.
- Z shows lyrics with the selected entrance animation; X hides them. Lyrics stay hidden on startup until shown.
- Remove Markers removes section headings such as Verse, Chorus, Bridge, and Coda from pasted lyrics.
- Lyrics and settings persist in browser local storage.
- Keyboard: Up/Down = previous/next live lyric; 1–9 and 0 = switch loaded VJ loops 1–10; Q/W/E/R = FADE/CUT/FTB/FTW; A/S/D = select duration preset; Z/X = show/hide lyrics.

## GitHub Pages
In the repository, open **Settings → Pages**, choose **GitHub Actions** as the build and deployment source, then save. The included workflow deploys the repository root.

## Current limitations
This is a browser prototype, not a complete hardware video switcher. VJ loop video is local to the browser and is not sent as a hardware output or integrated with OBS, Resolume, or ProPresenter. Automatic lyric separation is heuristic: it preserves explicit breaks and uses punctuation conservatively. It cannot guarantee accurate syllabic or poetic line breaks in every language, so review its output before saving.
