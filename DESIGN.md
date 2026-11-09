---
name: GameSignal
description: Modular color and monumental type for game-development software.
colors:
  canvas: "#ecedee"
  ink: "#101516"
  muted: "#586064"
  rule: "#bec6cc"
  blue: "#1871da"
  proof: "#31805a"
  forest: "#1c372a"
  green: "#1ec072"
  pink: "#ffb4ed"
  hot-pink: "#f6609f"
  yellow: "#ffbb38"
  white: "#fff"
typography:
  display:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "clamp(80px, 15.7vw, 244px)"
    fontWeight: 750
    lineHeight: 1
    letterSpacing: "-0.025em"
  headline:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "clamp(38px, 4.5vw, 68px)"
    fontWeight: 600
    lineHeight: 1.04
    letterSpacing: "-0.025em"
  hero-support:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "clamp(28px, 2.65vw, 40px)"
    fontWeight: 450
    lineHeight: 1.25
    letterSpacing: "-0.018em"
  title:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "25px"
    fontWeight: 550
    lineHeight: 1.12
    letterSpacing: "-0.018em"
  body:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.6
  action:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "20px"
    fontWeight: 450
    lineHeight: 1.1
  label:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "12px"
    fontWeight: 500
rounded:
  pill: "999px"
  panel: "6px"
  closing: "12px"
  tab: "4px"
  tag: "3px"
spacing:
  compact: "12px"
  control: "16px"
  group: "24px"
  inset: "28px"
  gutter: "32px"
  split: "40px"
  generous: "48px"
  chapter-gap: "80px"
  section: "112px"
components:
  button-primary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.white}"
    typography: "{typography.action}"
    rounded: "{rounded.pill}"
    padding: "16px 28px"
  button-primary-hover:
    backgroundColor: "{colors.forest}"
    textColor: "{colors.pink}"
  nav-action:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.white}"
    rounded: "{rounded.pill}"
    padding: "12px 18px"
  nav-action-hover:
    backgroundColor: "{colors.proof}"
  navigation:
    textColor: "{colors.ink}"
  question-disclosure:
    textColor: "{colors.ink}"
    padding: "24px 0"
  workspace:
    backgroundColor: "{colors.white}"
    rounded: "{rounded.panel}"
  concept-tag:
    backgroundColor: "#f1f3ef"
    textColor: "#526050"
    rounded: "{rounded.tag}"
    padding: "5px 8px"
  workflow-tab:
    backgroundColor: "transparent"
    textColor: "#4e5550"
    rounded: "{rounded.tab}"
    padding: "13px 10px"
  workflow-tab-selected:
    backgroundColor: "#dfece1"
    textColor: "#173b26"
  closing-panel:
    backgroundColor: "{colors.proof}"
    textColor: "{colors.white}"
    rounded: "{rounded.closing}"
    padding: "64px"
---

# GameSignal design system

## Overview

**Creative North Star** “Modular color, monumental type”

Technical yet playful. Cool grey fields and near-black grotesk typography make software feel tactile and approachable. Bright modular blocks, saturated blue chapters and forest-green surfaces give the page a graphic identity. The supplied Composer reference establishes this world, while the implemented Inter typography and component dimensions are authoritative for GameSignal.

Pacing is spacious between chapters and compact inside demonstrations. Product interfaces float like physical objects. Large live lettering anchors the composition while small directional arrows keep actions clear.

**Key Characteristics**

- Monumental live typography over hard-edged modular color.
- Neutral reading fields with concentrated saturated chapters.
- Continuous rules, directional capsules and architectural product artifacts.
- Green panels with staggered pink word blocks and a forest utility ending.

## Colors

The palette combines cool paper, dark ink and discrete bright graphic events. Frontmatter values are normative.

### Primary

- **Chapter blue** carries capability chapters and default keyboard focus.
- **Proof green** carries the closing panel and compact navigation-action hover.
- **Forest** anchors the footer, primary-action hover and dark interface accents.

### Secondary

- **Block green**, **light pink**, **hot pink** and **warm yellow** supply modular art and emphasis. Light pink also backs the staggered closing words. Hot pink remains a declared palette token without a current rendered assignment.
- The opening artwork additionally uses local pink and sky-blue fills to reproduce the supplied composition. These are artwork-specific values.

### Neutral

- **Cool grey canvas** dominates reading fields. **Ink** carries body text, capsules and the announcement strip.
- **Muted grey** supports utility copy. **Cool ruled edge** separates comparable content. **White** defines the interface artifact and inverse text.

**The Concentrated Color Rule.** Keep reading fields neutral and place saturated color in modular art or deliberate chapter-scale surfaces.

## Typography

Inter is self-hosted at `public/assets/InterVariable.woff2`, with normal variable weights (100–900), swap loading and system-ui/sans-serif fallbacks. One family serves both marketing and illustrative product UI.

The hero display role is an intentional exception to ordinary headline sizing. Its desktop maximum is monumental, with a dedicated mobile fit (`15.3vw`). Keep the name as selectable live text. General chapter headings use the separate headline role, reaching a mobile size of (43px). The closing word-block heading has its own responsive range (`clamp(32px, 8.3vw, 56px)` on mobile).

Support text uses the hero-support role in the opening. Capability copy uses body typography, with a mobile size of (17px). Product-demo details and utility labels remain compact (12px). FAQ answers use a more open line height (1.65) and a maximum measure (65ch). Main navigation uses medium text (14px), while the brand uses bold text (22px).

**The Live Name Rule.** Preserve the product name’s dominant scale and fit it deliberately at each width.

## Layout

The main container has a maximum width (1536px) and desktop side insets (32px). Chapter padding uses the section spacing token. Opening grid cells are (240px) square, halving to (120px) on mobile. Hard-edged artwork stays behind essential live text.

Desktop introduction splits use a (1.25fr / 1fr) grid with the chapter-gap token. Capability content forms four contiguous columns and approach content forms three. The product artifact uses a (230px / 1fr) sidebar/content split. The FAQ offsets its answer stack through a (1fr / 1.4fr) split.

At the tablet breakpoint (`max-width: 1100px`), navigation links hide, the artifact sidebar narrows to (190px), and capability content becomes two columns. At the mobile breakpoint (`max-width: 760px`), container insets become (20px), chapter padding becomes (72px), split layouts stack and the artifact tabs become a horizontally scrollable row. Ruled content retains its separator system. The compact brand and project action remain available.

A wide-screen adjustment (`min-width: 1600px`) gives the opening more top space and centers its artwork within a maximum width (1700px).

## Elevation & Depth

Most sections remain flat, separated by fine rules and tonal shifts. The illustrative workspace is the single architectural artifact, with two soft directional shadow layers recorded in the sidecar. Dotted staging adds depth behind it. Avoid applying artifact elevation to every content cell.

## Shapes

Actions use full capsules through the pill radius token. Interface artifacts use the panel radius token, and the green closing panel uses the larger closing radius. Small tabs and tags use their dedicated radii. Modular artwork and capability diagrams use hard-edged rectangles. Fine dividers are generally (1px).

## Components

### Buttons

Directional and confident. Primary capsules pair ink with white, then forest with pink on hover. Arrows move right (5px) on hover. The opening action increases its label size (25px) and minimum width (345px), with mobile overrides that fit the available width. Compact navigation actions use a smaller scale and proof-green hover.

Keyboard focus uses a blue outline (3px) with an offset (6px). Capability and footer links switch the outline to yellow for visibility on saturated surfaces.

### Navigation

A compact brand, text-link group and trailing project capsule share one row. Text links underline on hover. The link group hides at tablet widths while brand and action persist. Footer navigation uses inverse type and pink hover.

### Tags and workflow tabs

The concept tag is a compact, softly rounded status label. Workflow tabs use subdued default text and a pale green selected fill, stronger green text and visible directional arrow. Hover adds a neutral tint. Preserve the implemented tab selection, keyboard interaction and visible selected state.

### Cards and containers

The workspace is a white, gently rounded demonstrative interface with a pale sidebar and fine internal rules. Capability and approach cells remain contiguous and ruled. Their content supplies the visual hierarchy without floating-card framing.

### Closing word blocks

Pink rectangles step and rotate slightly behind forest lettering inside the green closing panel. Three lines retain different horizontal offsets. The panel stacks on mobile and keeps its action within the available width.

### Questions

Native disclosure rows use continuous dividers and a compact plus that becomes a minus when open. Questions remain generous targets, with vertical padding (24px) on desktop and (22px) on mobile.

### Motion

Opening modules settle vertically over (1.1s) with the project easing curve. Compact color transitions run (0.2–0.25s) and arrow movement runs (0.3s). Motion remains concentrated in artwork and interaction feedback. Reduced-motion preference disables animation, transitions and smooth scrolling. Content visibility is independent of animation.

## Do's and Don'ts

### Do

- **Do** keep the monumental product name as live Inter text.
- **Do** preserve neutral reading fields, modular color events and fine continuous rules.
- **Do** use full capsules for actions and compact corners for interface artifacts.
- **Do** retain visible keyboard focus and content visibility with reduced motion.
- **Do** use the implemented tablet and mobile layout transitions.

### Don't

- **Don't** turn the ruled capability cells into oversized rounded floating cards.
- **Don't** replace the cool-grey reading canvas with white throughout.
- **Don't** place decorative blocks over essential supporting text.
- **Don't** distribute saturated fills or artifact shadows across every surface.
