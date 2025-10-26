# vertigo

a generative art piece created during the colabnownow residency in mozambique, where it was exhibited during the colabnownow group show.

**live demo:** [https://vertigo-silk.vercel.app/](https://vertigo-silk.vercel.app/)

## overview

vertigo is an immersive web-based art installation that combines poetry, visual imagery, and sound to create a disorienting yet meditative experience. the piece explores themes of displacement, memory, and the fragmented nature of digital existence through layered visual elements and ambient audio.

## concept

the work presents four poetic fragments that appear simultaneously on screen, each positioned in different quadrants of the canvas. these poems speak to themes of:

- **displacement and longing** ("drenched in echoes of salty voices")
- **silence and voice** ("something anchored in your throat")
- **resilience and erosion** ("i became the waves")
- **memory and decay** ("streaks of colour // snatched from their home")

the visual elements consist of 20 photographic images that cycle through different arrangements, creating a constantly shifting visual landscape that mirrors the fragmented nature of the text.

## technical implementation

### technologies used

- **p5.js** - creative coding framework for visual and audio programming
- **html5** - web structure and presentation
- **css3** - styling with courier new monospace font
- **vercel** - web hosting and deployment

### key features

#### visual elements

- **dynamic image loading**: 20 photographic images (a-min.jpg through t-min.jpg) that load and display in randomized positions
- **layered composition**: images are overlaid with varying opacity and tinting effects
- **cycling patterns**: three different image arrangement patterns that cycle based on time intervals
- **grayscale effects**: periodic grayscale transformations that create visual disruption

#### audio integration

- **ambient sound**: background audio loop (`vertigo.mp3`) that plays continuously
- **interactive control**: click to pause/play audio with visual feedback (red background for pause, green for play)

#### typography

- **monospace design**: all text rendered in courier new font for a typewriter aesthetic
- **poetic layout**: four poem fragments positioned in different screen quadrants
- **real-time timestamps**: millisecond counter for temporal awareness

### code structure

```javascript
// core variables for image management and timing
var a, b, c, d, e, f, g, h, i, j, k, l, m, n, p, q, r, s, t, song;
var change = 0; // controls which image pattern is active
var shift = false; // triggers visual effects

// three distinct image arrangement patterns
switch (change) {
  case 0: // smaller images in 300x300 area
  case 1: // medium images in 300x300 area
  case 2: // larger images in 700x700 area
}
```

## installation & setup

### prerequisites

- a modern web browser with javascript enabled
- local web server (for development)

### local development

1. clone or download the repository
2. start a local web server:
   ```bash
   python3 -m http.server 8000
   ```
3. open `http://localhost:8000` in your browser

### deployment

the project is configured for easy deployment on vercel:

1. push code to github repository
2. connect repository to vercel
3. deploy automatically

## file structure

```
vertigo/
├── index.html          # main html file with p5.js integration
├── sketch.js           # core p5.js application logic
├── vertigo.mp3         # background audio file
├── a-min.jpg           # image assets (a-min.jpg through t-min.jpg)
├── b-min.jpg
├── ...
├── t-min.jpg
└── readme.md           # this documentation
```

## artistic statement

created during the colabnownow residency in mozambique, vertigo emerged from a period of intense cultural exchange and creative collaboration. the work reflects on the experience of displacement and the ways in which digital media can both connect and alienate us from our surroundings.

the piece's title, "vertigo," refers not only to the visual disorientation created by the constantly shifting imagery but also to the emotional state of being caught between places, languages, and cultural contexts. the four poetic fragments serve as anchors in this sea of visual noise, offering moments of clarity and reflection.

## exhibition history

- **colabnownow group show** - mozambique (2018)
- **online exhibition** - [https://vertigo-silk.vercel.app/](https://vertigo-silk.vercel.app/)

## technical notes

### performance considerations

- images are loaded asynchronously to prevent blocking
- canvas operations are optimized for smooth 60fps rendering
- audio loading is handled separately from visual elements

### browser compatibility

- tested on chrome, firefox, safari, and edge
- requires web audio api support for sound functionality
- responsive design adapts to different screen sizes

## credits

- **created during:** colabnownow residency, mozambique
- **framework:** p5.js
- **hosting:** vercel
- **font:** courier new

## license

this project is part of the colabnownow residency program. please respect the artistic and intellectual property rights of the creator.

---

_for questions about this project or the colabnownow residency, please contact me directly._
