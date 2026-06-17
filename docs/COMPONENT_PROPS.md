# Component Props Reference

> **Auto-generated** from `registry/designs.json` — do not edit by hand.
> Run `npm run props` (or `node scripts/generate-component-props.mjs`) to regenerate.

Every component, its props, the values each accepts, the default, and what it does.
Try them live on each component's page under **Props**.

## Inputs

### Button

6 variants · 3 sizes · 3 shapes · disabled + loading states. Built on Base UI's Button primitive.

| Prop | Values | Default | Description |
| --- | --- | --- | --- |
| `variant` | `"solid" \| "outline" \| "ghost" \| "soft" \| "link" \| "destructive"` | `"solid"` | Visual style of the button |
| `size` | `"sm" \| "md" \| "lg"` | `"md"` | Controls height, padding, and font size |
| `shape` | `"default" \| "pill" \| "square"` | `"default"` | Border radius and aspect ratio |
| `icon` | `ReactNode` | `undefined` | Icon element rendered beside the label |
| `iconPosition` | `"left" \| "right"` | `"left"` | Side the icon appears on |
| `fullWidth` | `boolean` | `false` | Stretches button to fill its container |
| `type` | `"button" \| "submit" \| "reset"` | `"button"` | Native button type attribute |
| `loading` | `boolean` | `false` | Replaces leading content with a spinner; disables interaction |
| `disabled` | `boolean` | `false` | Disables interaction and reduces opacity to 40% |

### Checkbox

An accessible checkbox with emerald checked state and optional label. Built on Base UI's Checkbox primitive.

| Prop | Values | Default | Description |
| --- | --- | --- | --- |
| `label` | `string` | `undefined` | Label rendered beside the checkbox |
| `description` | `string` | `undefined` | Secondary help text rendered below the label |
| `size` | `"sm" \| "md" \| "lg"` | `"md"` | Controls the checkbox and indicator size |
| `indeterminate` | `boolean` | `false` | Shows a dash instead of a checkmark; used for partial selection |
| `defaultChecked` | `boolean` | `false` | Initial checked state |
| `disabled` | `boolean` | `false` | Disables interaction and reduces opacity |

### Input

A dark text input with inset shadow, emerald focus ring, and full disabled/read-only state support.

| Prop | Values | Default | Description |
| --- | --- | --- | --- |
| `variant` | `"outline" \| "filled" \| "ghost"` | `"outline"` | Surface style — outline adds border, filled uses a background, ghost is borderless |
| `size` | `"sm" \| "md" \| "lg"` | `"md"` | Controls input height and font size |
| `error` | `boolean \| string` | `false` | Error state — pass a string to show an error message below |
| `placeholder` | `string` | `undefined` | Placeholder text shown when empty |
| `disabled` | `boolean` | `false` | Disables input and reduces opacity |
| `readOnly` | `boolean` | `false` | Makes the input read-only |

### Radio Group

An accessible radio group using Base UI Radio + RadioGroup primitives. Emerald accent on selection.

| Prop | Values | Default | Description |
| --- | --- | --- | --- |
| `options` | `{ label: string; value: string }[]` | `[...]` | Array of selectable options |
| `orientation` | `"vertical" \| "horizontal"` | `"vertical"` | Stacks options in a column or row |
| `size` | `"sm" \| "md" \| "lg"` | `"md"` | Controls the radio button and dot size |
| `defaultValue` | `string` | `undefined` | Initially selected value |

### Select

A dark dropdown select with glass-effect popup, highlighted states, and a check mark on the selected item.

| Prop | Values | Default | Description |
| --- | --- | --- | --- |
| `options` | `{ label: string; value: string }[]` | `—` | Options rendered inside the popup (passed in by the consumer) |
| `placeholder` | `string` | `"Select an option"` | Shown when no value is selected |
| `multiSelect` | `boolean` | `false` | Allow selecting multiple options; the trigger shows selected labels joined by commas |

### Slider

A range slider with emerald fill track and a thumb that grows on active. Built on Base UI's Slider primitive.

| Prop | Values | Default | Description |
| --- | --- | --- | --- |
| `defaultValue` | `number[]` | `[42]` | Initial value of the slider handle |
| `min` | `number` | `0` | Minimum allowed value |
| `max` | `number` | `100` | Maximum allowed value |
| `step` | `number` | `1` | Increment step between values |
| `showValue` | `boolean` | `true` | Show the current value above the track |

### Switch

A toggle switch that transitions to emerald when active. Thumb translates smoothly on state change.

| Prop | Values | Default | Description |
| --- | --- | --- | --- |
| `label` | `string` | `undefined` | Optional label rendered beside the switch |
| `size` | `"sm" \| "md" \| "lg"` | `"md"` | Controls track and thumb dimensions |
| `labelPosition` | `"left" \| "right"` | `"right"` | Side the label appears on relative to the switch |
| `defaultChecked` | `boolean` | `false` | Initial on/off state |
| `disabled` | `boolean` | `false` | Disables interaction |

## Data Display

### Avatar

Avatar with image support, text fallback, shape, size, and status dot. Built on Base UI's Avatar primitive.

| Prop | Values | Default | Description |
| --- | --- | --- | --- |
| `src` | `string` | `undefined` | Image URL — shows fallback if missing or broken |
| `alt` | `string` | `"Avatar"` | Alt text for the image |
| `fallback` | `string` | `"AB"` | Initials shown when image is absent |
| `size` | `"xs" \| "sm" \| "md" \| "lg" \| "xl"` | `"md"` | Avatar diameter |
| `shape` | `"circle" \| "square"` | `"circle"` | Rounded circle or square with rounded corners |
| `status` | `"online" \| "offline" \| "busy"` | `undefined` | Status indicator dot — green, grey, or red |

### Separator

A thin 1px rule that divides content. Horizontal (default) splits stacked sections; vertical splits inline items such as nav links.

| Prop | Values | Default | Description |
| --- | --- | --- | --- |
| `orientation` | `"horizontal" \| "vertical"` | `"horizontal"` | Direction of the separator line |

### Tabs

Tab bar with a sliding emerald underline indicator. Panels swap on selection.

| Prop | Values | Default | Description |
| --- | --- | --- | --- |
| `tabs` | `{ label: string; value: string; content: ReactNode }[]` | `[...]` | Tab definitions with label, value, and panel content |
| `defaultValue` | `string` | `"overview"` | Initially active tab value |

### Progress

A linear progress bar with optional label and value display. Emerald fill, zinc-800 track.

| Prop | Values | Default | Description |
| --- | --- | --- | --- |
| `value` | `number` | `62` | Progress percentage (0–100) |
| `label` | `string` | `undefined` | Optional label shown above the track |
| `showValue` | `boolean` | `false` | Shows the numeric percentage alongside the label |

### Accordion

Collapsible panels with a chevron indicator that rotates on open. Divided by zinc-800 rules.

| Prop | Values | Default | Description |
| --- | --- | --- | --- |
| `items` | `{ value: string; title: string; content: string }[]` | `[...]` | Array of accordion panels |

### Tooltip

A dark glass tooltip anchored to its trigger with configurable side placement.

| Prop | Values | Default | Description |
| --- | --- | --- | --- |
| `content` | `ReactNode` | `"Tooltip text"` | Content rendered inside the tooltip popup |
| `children` | `ReactNode` | `"Hover me"` | Trigger element that shows the tooltip on hover |
| `side` | `"top" \| "bottom" \| "left" \| "right"` | `"top"` | Side of the trigger where the popup appears |
| `delay` | `number` | `100` | Milliseconds to wait before showing the tooltip on hover |

## Feedback

### Dialog

A centered modal dialog with dark glass surface, backdrop blur, and confirm/cancel actions.

| Prop | Values | Default | Description |
| --- | --- | --- | --- |
| `trigger` | `string` | `"Open Dialog"` | Text rendered on the trigger button |
| `title` | `string` | `"Confirm action"` | Dialog heading |
| `description` | `string` | `"..."` | Body text shown below the heading |

### Popover

A dark glass popover anchored to its trigger. Includes a close button and description slot.

| Prop | Values | Default | Description |
| --- | --- | --- | --- |
| `trigger` | `string` | `"Open Popover"` | Text rendered on the trigger button |
| `title` | `string` | `"Popover"` | Popover heading |
| `content` | `ReactNode` | `"..."` | Body content inside the popover |

