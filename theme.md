# Website Theme

Use this file as the running visual guide for future website changes. Keep new sections and components consistent with this style unless the user says otherwise.

## Overall Style

The website uses a bold, playful developer-portfolio look inspired by sticker, comic, and retro web UI:

- Yellow page background on the homepage, services page, and projects page
- Strong black outlines
- Chunky offset black shadows
- Rounded bordered panels
- Bright accent fills
- Heavy uppercase labels and calls to action
- Large hero typography paired with real personal/brand imagery

The interface should feel clean, graphic, and confident. Avoid soft shadows, glass effects, muted corporate cards, or decorative gradient backgrounds.

## Colors

Core colors:

- Global fallback page background: CSS `--background: #ffffff`
- Home, services, and projects page background: Tailwind `bg-yellow-300` / `#fde047`
- Main panels and menu items: Tailwind `bg-white` / `#ffffff`
- SVG inner fills: `white` / `#ffffff`
- Text: Tailwind `text-black` / `black` / `#000000`
- Borders and SVG strokes: Tailwind `border-black` / `black` / `#000000`
- Hard shadows: `#000`
- Navbar top fade: `#fde047` to `transparent`

Accent colors:

- Primary pink: Tailwind `bg-pink-400` / SVG fill `#f472b6`
- Action yellow: Tailwind `bg-yellow-300` / SVG fill `#fde047`
- Light blue panel/menu/service accent: Tailwind arbitrary `bg-[#bdecfd]` / SVG fill `#bdecfd`
- Friendly green icon accent: Tailwind `green-300` / SVG fill `#86efac`
- Soft pink icon fill: Tailwind `pink-300` / SVG fill `#f9a8d4`

Use accents intentionally:

- Pink is the primary brand/action color.
- Yellow is for page backgrounds and secondary high-priority actions like `BOOK A CALL`.
- Blue works well for image panels, mobile menu backgrounds, and service/tech accents.
- Green should stay occasional, mostly for friendly supporting icons.
- Soft pink should stay limited to secondary icon fills.

Avoid introducing many new colors. If a new color is needed, choose one bright, flat, high-contrast color that still works with black outlines.

## Typography

Use bold, simple sans-serif text.

Current font setup:

- Global body font fallback: `Arial, Helvetica, sans-serif`
- Tailwind `font-sans`: Geist Sans from `next/font/google`
- Tailwind `font-mono`: Geist Mono
- Important labels: `font-black uppercase`

Type style:

- Navbar links and button labels should stay uppercase.
- Hero headlines should be very large, heavy, and uppercase.
- Supporting copy should be bold, readable, and less condensed than labels.
- Keep letter spacing at the default value.

Current sizes:

- Desktop hero headline: `text-7xl`
- Tablet hero headline: `text-6xl`
- Mobile hero headline: `text-5xl`
- Eyebrow label: `text-2xl`, mobile `text-xl`
- Hero body copy: `text-2xl`, tablet `text-xl`, mobile `text-lg`
- Primary buttons: `text-xl`, mobile `text-base`
- Desktop navbar links: `text-base`

## Shape

Use rounded corners consistently:

- Major panels and navbar shell: `rounded-2xl`
- Buttons, labels, and menu items: `rounded-lg`
- Image panels may inherit the panel radius and clip with `overflow-hidden`

Use black borders on key UI elements:

- Major panels and navbar shell: `border-4 border-black`
- Buttons, labels, menu items, and small controls: `border-3 border-black`
- Split hero image panels can use `border-t-4` on tablet/mobile and `border-l-4` on desktop.

## Shadows

Use hard offset shadows, not soft blurred shadows.

Current shadow patterns:

```txt
shadow-[8px_8px_0_#000]  // major panels and navbar
shadow-[6px_6px_0_#000]  // hero buttons
shadow-[4px_4px_0_#000]  // labels, mobile menu items, compact controls
```

Keep shadows visually chunky and directional. Do not use blur radius shadows.

## Layout And Spacing

Use generous spacing with tight, sturdy visual structure.

Current navbar spacing:

- Outer navbar container: `px-6 py-1`
- Tablet navbar container: `max-[1024px]:px-4`
- Mobile navbar container: `max-[500px]:px-3`
- Navbar shell: `px-8 py-2`
- Tablet shell: `max-[1024px]:px-5`
- Mobile shell: `max-[500px]:px-3`
- Desktop nav gap: `gap-16`

Current home hero spacing:

- Section margin: `mx-6 mt-4`
- Tablet margin: `max-[1024px]:mx-4`
- Mobile margin: `max-[500px]:mx-3`
- Text panel padding: `px-10 py-5`
- Tablet text padding: `max-[1024px]:px-8`
- Mobile text padding: `max-[500px]:px-5`
- CTA group: `mt-10 flex gap-8`
- Mobile CTA group: stacked with `gap-4`

Keep desktop layouts roomy. On mobile, preserve the same bold composition but stack controls and reduce horizontal padding so text does not crowd.

## Breakpoints

Use these responsive breakpoints for the website:

- Mobile: `0px` to `500px`
- Tablet: `501px` to `1024px`
- Desktop: `1025px` and above

Use Tailwind arbitrary breakpoints consistently:

- Mobile overrides: `max-[500px]:...`
- Tablet and below overrides: `max-[1024px]:...`
- Desktop-only rules: `min-[1025px]:...`

## Navbar Pattern

The navbar has this structure:

- Sticky full-width container with a white-to-transparent vertical background
- Rounded white shell with black border and `8px` offset shadow
- Left logo image using `/mylogo.png`
- Desktop navigation links aligned on the right
- Tablet and mobile hamburger button
- Full-screen tablet/mobile menu

Desktop links:

- `HOME`
- `SERVICES`
- `PROJECTS`
- `ABOUT`
- `CONTACT`

Tablet/mobile menu:

- Full-screen `#bdecfd` background
- Large pink-and-black close icon
- Stacked white menu items with black outlines and `4px` shadows
- Menu items include icon, label, and arrow
- Primary mobile action: yellow `BOOK A CALL`
- Secondary mobile action: white `VIEW PROJECTS`

Keep navigation labels uppercase. When adding new pages, prefer real route links like `/services` for page navigation and only use hash links for same-page sections.

## Hero Pattern

The homepage hero uses a bordered two-column panel on desktop and a stacked panel on tablet/mobile.

Hero structure:

- Outer panel: white, `rounded-2xl`, `border-4 border-black`, `shadow-[8px_8px_0_#000]`
- Left content panel: eyebrow label, large headline, body copy, action buttons
- Right image panel: blue background with a full-cover image from `/me1.png`

Hero content:

- Eyebrow: pink bordered label, `HI, I'M A`
- Headline: `WEB DEVELOPER`, uppercase, black, very heavy
- Body: concise value statement about reliable web services
- Primary CTA: pink `VIEW PROJECTS`
- Secondary CTA: yellow `BOOK A CALL`

On desktop, keep the image on the right with a left border. On tablet/mobile, move the image below the text with a top border and a stable minimum height.

## Projects Page Pattern

The projects page follows the same bold portfolio system with a white bordered hero panel and a project showcase panel.

Projects hero:

- Page background: yellow `bg-yellow-300`
- Outer hero panel: white, `rounded-2xl`, `border-4 border-black`, `shadow-[8px_8px_0_#000]`
- Desktop layout: two columns, text on the left and browser mockup on the right
- Mobile/tablet layout: stacked with reduced horizontal padding
- Heading: large uppercase `Featured Projects`
- Accent underline: pink `bg-pink-400`
- CTAs: yellow `View All Projects` and pink `Let's Talk`, both with black borders, hard shadows, uppercase labels, and arrow icons

Browser mockups:

- Outer frame: white, `rounded-2xl`, `border-4 border-black`, `overflow-hidden`, hard `8px` shadow
- Top browser bar: `h-12`, blue `#bdecfd`, black bottom border, and three black circular dots
- Media body should fill the remaining height when used in the hero mockup
- Do not add an extra inner placeholder frame around the hero slideshow unless the user asks for one

Project showcase:

- Section panel: white, `rounded-2xl`, `border-4 border-black`, `shadow-[8px_8px_0_#000]`
- Title chip: yellow, uppercase, black border, `4px` shadow
- Cards: white browser-style cards with black borders, hard `7px` shadows, and slight hover lift
- Card top bars use each project's accent color
- Keep non-featured project image placeholders as light neutral blocks: `bg-[#f7f7f2]` with black border

Slideshow behavior:

- Use real screenshots from `public/projects/techhub` for the current Techhub/Ecommerce slideshow set
- Fade between slides every `4000ms`
- Loop back to the first image after the last slide
- Use `next/image` with `fill`
- Use `object-cover object-top` so screenshots crop from the top, not the center
- The hero slideshow and project card slideshows should share the same slideshow component when possible
- Project cards should use a data field such as `imageFolder` to opt into a slideshow instead of matching by title
- Cards without an `imageFolder` keep static placeholders

## CTA Banner Pattern

The services CTA banner is a compact call-to-action strip inspired by the same comic UI language:

- Outer banner: `mx-6`, blue `#bdecfd` panel, `rounded-2xl`, `border-4 border-black`, `shadow-[8px_8px_0_#000]`
- Left portrait block: uses `/me1.png`, clipped inside its own bordered media column
- Main message: `Have a project in mind?` with bold supporting copy
- CTA: white bordered `LET'S TALK` button with a black arrow icon
- Feature row: three compact icon/text items for fast delivery, clean code, and client focus
- On small screens, stack the portrait, message, CTA, and feature items so text stays readable.

## Icon Style

Icons should be simple, chunky, and outlined:

- Use black strokes around flat bright fills.
- Keep icon sizes consistent in navigation and action rows.
- SVG icons should use thick strokes, usually around `3`.
- Use colored fills sparingly to support quick scanning.

Current menu icon fills:

- Home: pink
- Services: blue
- Projects: yellow
- About: green
- Contact/View projects: soft pink

## Implementation Notes

- Keep major UI elements stable with explicit spacing, dimensions, or min-heights.
- Avoid nested card layouts.
- Avoid decorative orbs, bokeh blobs, and soft gradients.
- Use real images or generated bitmap assets for important hero/product/person visuals.
- Make sure text fits inside buttons and panels at `500px` mobile width.
- Keep future pages visually aligned with the navbar and hero: white panels, black outlines, hard shadows, bright accents, and bold uppercase controls.
