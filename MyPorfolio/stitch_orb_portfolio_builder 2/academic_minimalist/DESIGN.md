---
name: Academic Minimalist
colors:
  surface: '#f9f9f9'
  surface-dim: '#dadada'
  surface-bright: '#f9f9f9'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f3f4'
  surface-container: '#eeeeee'
  surface-container-high: '#e8e8e8'
  surface-container-highest: '#e2e2e2'
  on-surface: '#1a1c1c'
  on-surface-variant: '#42474c'
  inverse-surface: '#2f3131'
  inverse-on-surface: '#f0f1f1'
  outline: '#72787c'
  outline-variant: '#c2c7cc'
  surface-tint: '#426275'
  primary: '#426275'
  on-primary: '#ffffff'
  primary-container: '#b8daf0'
  on-primary-container: '#3f6073'
  inverse-primary: '#a9cbe1'
  secondary: '#4b616e'
  on-secondary: '#ffffff'
  secondary-container: '#cee6f5'
  on-secondary-container: '#516774'
  tertiary: '#5e5e5e'
  on-tertiary: '#ffffff'
  tertiary-container: '#d5d5d5'
  on-tertiary-container: '#5c5c5c'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#c5e7fe'
  primary-fixed-dim: '#a9cbe1'
  on-primary-fixed: '#001e2c'
  on-primary-fixed-variant: '#294b5d'
  secondary-fixed: '#cee6f5'
  secondary-fixed-dim: '#b2cad8'
  on-secondary-fixed: '#051e29'
  on-secondary-fixed-variant: '#334a56'
  tertiary-fixed: '#e2e2e2'
  tertiary-fixed-dim: '#c6c6c6'
  on-tertiary-fixed: '#1b1b1b'
  on-tertiary-fixed-variant: '#474747'
  background: '#f9f9f9'
  on-background: '#1a1c1c'
  surface-variant: '#e2e2e2'
typography:
  headline-xl:
    fontFamily: Newsreader
    fontSize: 48px
    fontWeight: '400'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Newsreader
    fontSize: 32px
    fontWeight: '400'
    lineHeight: '1.3'
  headline-md:
    fontFamily: Newsreader
    fontSize: 24px
    fontWeight: '500'
    lineHeight: '1.4'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1'
    letterSpacing: 0.05em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  container-max: 1100px
  section-gap: 5rem
  stack-gap: 1.5rem
  gutter: 2rem
  margin-page: 5vw
---

## Brand & Style

This design system is anchored in the aesthetic of high-end academia and intellectual clarity. It prioritizes information density and readability over decorative flourishes, evoking a sense of authority, trust, and timelessness. 

The style is **Minimalist with an Editorial lean**. By using vast amounts of white space (negative space) and a disciplined typographic scale, the interface recedes to let the content—whether research papers, project descriptions, or educational materials—take center stage. The emotional response is one of calm focus, catering to a target audience of researchers, students, and professionals who value precision and substance.

## Colors

The palette is intentionally restrained to maintain an "ink-on-paper" feel.
- **Primary & Secondary:** These soft blues are reserved for interactive elements like buttons, active navigation states, and subtle backgrounds. They provide a gentle "human" touch to an otherwise austere environment.
- **Backgrounds:** The primary surface is pure white (#FFFFFF), with light gray or very pale blue tints used sparingly to define distinct content blocks or "call-out" sections.
- **Typography:** Deep black (#000000) is used for all text to maximize contrast and ensure accessibility, adhering to the traditional academic publishing standard.

## Typography

The typographic system relies on a high-contrast pairing between a sophisticated serif and a utilitarian sans-serif.

- **Headlines:** Use **Newsreader** for all headings. Its traditional, authoritative character mimics the look of prestigious journals and newspapers. It should be set with generous leading and a slight negative letter-spacing for larger sizes.
- **Body Text:** Use **Inter** for all prose and UI labels. It provides a clean, modern counterpoint to the serif headings, ensuring that long-form text remains highly legible on digital screens.
- **Hierarchy:** Clear distinction is made through scale and weight. Meta-data (like dates or categories) should use the small uppercase label style to differentiate from the narrative flow.

## Layout & Spacing

The layout follows a **Fixed-Width Centered Grid** philosophy. Content is contained within a maximum width of 1100px to prevent line lengths from becoming too long, which preserves readability.

- **Spaciousness:** Significant vertical padding (section-gap) is used between major content blocks to create a "breathing" effect, allowing the user to process one section at a time.
- **Rhythm:** A vertical rhythm based on 8px increments should be followed. Use "stack-gap" for related elements within a section (e.g., a heading and its subsequent paragraph).
- **Margins:** Page margins are fluid (5vw) to ensure the centered container feels anchored across different screen sizes.

## Elevation & Depth

This design system rejects heavy shadows and skeuomorphism in favor of **Tonal Layers and Low-Contrast Outlines**.

- **Flat Hierarchy:** Depth is communicated primarily through color blocking. For example, a "card" might not have a shadow but instead sits on a slightly different background tint or is defined by a very thin (1px) light gray border.
- **Layering:** When depth is required (such as in dropdown menus), use a single, extremely diffused ambient shadow: `0 4px 20px rgba(0,0,0,0.05)`.
- **Focus:** Use the soft blue primary color as a subtle highlight for hovered states rather than increasing the elevation of the element.

## Shapes

The shape language is **Soft and Professional**.

- **Corners:** A subtle corner radius (0.25rem) is applied to buttons, input fields, and card containers. This softens the "industrial" feel of sharp corners while remaining more serious and academic than fully rounded or pill-shaped designs.
- **Visual Continuity:** All interactive elements must share the same corner radius to maintain a cohesive structural language across the system.

## Components

- **Navigation Bar:** Minimalist and transparent or white. Use the `label-sm` typography for links. Navigation items should have a subtle underline or color shift on hover using the primary blue.
- **Buttons:** Primary buttons use a solid light blue (`#B8DAF0`) background with black text. Secondary buttons should be ghost-style with a thin border. Use the "Soft" corner radius.
- **Cards:** For projects or research, cards should have no shadow. Use a 1px border (`#E5E5E5`) and generous internal padding (2rem). Headings inside cards should use `headline-md`.
- **Form Elements:** Inputs should be simple lines or very light boxes. Avoid heavy borders. Focus states should be indicated by a change in border color to the primary blue.
- **Research Lists:** For academic citations or publication lists, use a simple vertical stack with `body-md` text. The year of publication should be styled using `label-sm` and placed to the left or above the title for quick scanning.
- **Links:** Inline links should use the primary blue and a subtle underline that disappears on hover to prioritize text clarity.