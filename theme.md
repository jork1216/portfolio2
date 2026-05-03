# Website Theme

Use this file as the running visual guide for future website changes. Keep new sections and components consistent with this style unless the user says otherwise.

## Overall Style

The website uses a bold, playful, developer-portfolio look:

- White page background
- Strong black outlines
- Rounded boxes
- Offset black shadows
- Bright pink accent buttons
- Heavy uppercase typography for navigation and labels

The style should feel clean, graphic, and slightly retro, similar to a sticker or comic-style UI.

## Colors

Primary colors:

- Background: `white`
- Text: `black`
- Borders: `black`
- Accent: Tailwind `bg-pink-400`
- Shadow: `#000`

Avoid introducing many new colors. Use pink only for important active or branded elements, such as the logo block and active nav item.

## Typography

Use bold, simple sans-serif text.

Current font setup:

- Global body font: `Arial, Helvetica, sans-serif`
- Tailwind font class: `font-sans`
- Important labels: `font-black uppercase`

Navbar text sizing:

- Logo: `text-2xl`
- Navigation links: `text-base`

Keep text uppercase for navbar-style labels.

## Shape

Use rounded corners consistently:

- Main navbar shell: `rounded-2xl`
- Smaller button/logo boxes: `rounded-lg`

Use black borders on key UI elements:

- Main navbar border: `border-4 border-black`
- Smaller boxes: `border-3 border-black`

## Shadows

Use hard offset shadows, not soft blurred shadows.

Current navbar shadow:

```txt
shadow-[8px_8px_0_#000]
```

This creates the chunky black offset look.

## Spacing

Current navbar spacing:

- Outer navbar container: `px-6 py-1`
- Inner navbar shell: `px-8 py-2`
- Logo: `px-4 py-1`
- Home button: `px-8 py-2`
- Nav item gaps: `gap-16`

Use generous horizontal spacing for navbar items.

## Breakpoints

Use these responsive breakpoints for the website:

- Mobile: `0px` to `500px`
- Tablet: `501px` to `1024px`
- Desktop: `1025px` and above

When adding responsive Tailwind classes later, treat `500px` as the mobile width target.

## Navbar Pattern

The navbar has this structure:

- Full-width sticky white container
- Rounded bordered inner navbar box
- Left pink `DEV.` logo
- Right navigation group
- `HOME` shown as the active pink button
- `SERVICES`, `PROJECTS`, `ABOUT`, and `CONTACT` grouped in a separate section

Keep this structure unless the user asks to change it.
