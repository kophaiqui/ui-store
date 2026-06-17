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
| `iconOnly` | `boolean` | `false` | Show only the icon — hides the text label and forces square sizing. Use children for accessible screen-reader text. |
| `fullWidth` | `boolean` | `false` | Stretches button to fill its container |
| `type` | `"button" \| "submit" \| "reset"` | `"button"` | Native button type attribute |
| `loading` | `boolean` | `false` | Replaces leading content with a spinner; disables interaction |
| `loadingPosition` | `"start" \| "center"` | `"start"` | Where the spinner appears — start prepends it beside the label, center hides the label and centers the spinner |
| `pressed` | `boolean` | `undefined` | Toggle state for aria-pressed buttons — applies a depressed visual and sets aria-pressed on the element |
| `disabled` | `boolean` | `false` | Disables interaction and reduces opacity to 40% |

### Checkbox

An accessible checkbox with emerald checked state and optional label. Built on Base UI's Checkbox primitive.

| Prop | Values | Default | Description |
| --- | --- | --- | --- |
| `label` | `string` | `undefined` | Label rendered beside the checkbox |
| `description` | `string` | `undefined` | Secondary help text rendered below the label |
| `size` | `"sm" \| "md" \| "lg"` | `"md"` | Controls the checkbox and indicator size |
| `indeterminate` | `boolean` | `false` | Shows a dash instead of a checkmark; used for partial selection |
| `checked` | `boolean` | `undefined` | Controlled checked state — use with onCheckedChange for fully controlled behavior |
| `defaultChecked` | `boolean` | `false` | Initial checked state for uncontrolled use |
| `onCheckedChange` | `(checked: boolean) => void` | `undefined` | Callback fired when checked state changes |
| `name` | `string` | `undefined` | Form field name for native form submission |
| `value` | `string` | `undefined` | Form value submitted when the checkbox is checked |
| `required` | `boolean` | `false` | Marks the field as required for form validation |
| `disabled` | `boolean` | `false` | Disables interaction and reduces opacity |

### Input

A dark text input with inset shadow, emerald focus ring, and full disabled/read-only state support.

| Prop | Values | Default | Description |
| --- | --- | --- | --- |
| `variant` | `"outline" \| "filled" \| "ghost"` | `"outline"` | Surface style — outline adds border, filled uses a background, ghost is borderless |
| `size` | `"sm" \| "md" \| "lg"` | `"md"` | Controls input height and font size |
| `type` | `"text" \| "email" \| "password" \| "number" \| "search"` | `"text"` | Native input type — affects keyboard, autofill hints, and browser behaviour |
| `label` | `string` | `undefined` | Label rendered above the input; automatically linked via htmlFor |
| `helperText` | `string` | `undefined` | Subtle help text shown below the input (hidden when error is present) |
| `prefix` | `ReactNode` | `undefined` | Content pinned to the left inside the input — icon, currency symbol, or text |
| `suffix` | `ReactNode` | `undefined` | Content pinned to the right inside the input — icon or unit label |
| `clearable` | `boolean` | `false` | Shows an × button when the input has a value; clicking it clears the field |
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
| `disabledOptions` | `string[]` | `[]` | Array of option values that should be rendered as disabled and non-interactive |
| `defaultValue` | `string` | `undefined` | Initially selected value |
| `name` | `string` | `undefined` | Form field name for native form submission |
| `required` | `boolean` | `false` | Marks the radio group as required |

### Select

A dark dropdown select with glass-effect popup, highlighted states, and a check mark on the selected item.

| Prop | Values | Default | Description |
| --- | --- | --- | --- |
| `options` | `{ label: string; value: string }[]` | `—` | Options rendered inside the popup (passed in by the consumer) |
| `placeholder` | `string` | `"Select an option"` | Shown when no value is selected |
| `multiSelect` | `boolean` | `false` | Allow selecting multiple options; the trigger shows selected labels joined by commas |
| `clearable` | `boolean` | `false` | Shows an × button when a value is selected; clicking it clears the selection |
| `loading` | `boolean` | `false` | Shows a spinner in the trigger; useful while options are being fetched |
| `placement` | `"top" \| "bottom"` | `"bottom"` | Side the popup opens on relative to the trigger |

### Slider

A range slider with emerald fill track and a thumb that grows on active. Built on Base UI's Slider primitive.

| Prop | Values | Default | Description |
| --- | --- | --- | --- |
| `defaultValue` | `number[]` | `[42]` | Initial value of the slider handle |
| `min` | `number` | `0` | Minimum allowed value |
| `max` | `number` | `100` | Maximum allowed value |
| `step` | `number` | `1` | Increment step between values |
| `showValue` | `boolean` | `true` | Show the current value above the track |
| `orientation` | `"horizontal" \| "vertical"` | `"horizontal"` | Horizontal track (default) or vertical track |
| `disabled` | `boolean` | `false` | Disables interaction and reduces opacity |

### Switch

A toggle switch that transitions to emerald when active. Thumb translates smoothly on state change.

| Prop | Values | Default | Description |
| --- | --- | --- | --- |
| `label` | `string` | `undefined` | Optional label rendered beside the switch |
| `size` | `"sm" \| "md" \| "lg"` | `"md"` | Controls track and thumb dimensions |
| `labelPosition` | `"left" \| "right"` | `"right"` | Side the label appears on relative to the switch |
| `loading` | `boolean` | `false` | Shows a spinner inside the thumb and disables interaction — use while saving the toggle state |
| `checked` | `boolean` | `undefined` | Controlled on/off state — use with onCheckedChange for fully controlled behavior |
| `defaultChecked` | `boolean` | `false` | Initial on/off state for uncontrolled use |
| `disabled` | `boolean` | `false` | Disables interaction |

## Data Display

### Avatar

Avatar with image support, text fallback, shape, size, and status dot. Built on Base UI's Avatar primitive.

| Prop | Values | Default | Description |
| --- | --- | --- | --- |
| `src` | `string` | `undefined` | Image URL — shows fallback if missing or broken |
| `alt` | `string` | `"Avatar"` | Alt text for the image |
| `fallback` | `string` | `"AB"` | Initials shown when image is absent (used when fallbackType is "text") |
| `fallbackType` | `"text" \| "icon"` | `"text"` | Fallback content style — text shows initials, icon shows a generic user silhouette |
| `size` | `"xs" \| "sm" \| "md" \| "lg" \| "xl"` | `"md"` | Avatar diameter |
| `shape` | `"circle" \| "square"` | `"circle"` | Rounded circle or square with rounded corners |
| `status` | `"online" \| "offline" \| "busy"` | `undefined` | Status indicator dot — green, grey, or red |
| `bordered` | `boolean` | `false` | Adds an emerald accent ring around the avatar |

### Separator

A thin 1px rule that divides content. Horizontal (default) splits stacked sections; vertical splits inline items such as nav links.

| Prop | Values | Default | Description |
| --- | --- | --- | --- |
| `orientation` | `"horizontal" \| "vertical"` | `"horizontal"` | Direction of the separator line |

### Tabs

Tab bar with a sliding emerald underline indicator. Panels swap on selection.

| Prop | Values | Default | Description |
| --- | --- | --- | --- |
| `tabs` | `{ label: string; value: string; content: ReactNode; icon?: ReactNode }[]` | `[...]` | Tab definitions — each may include an optional icon |
| `defaultValue` | `string` | `"overview"` | Initially active tab value |
| `fullWidth` | `boolean` | `false` | Stretches tabs to fill the full width of the container evenly |
| `iconPosition` | `"left" \| "right"` | `"left"` | Side the tab icon appears on relative to the label |

### Progress

A linear progress bar with optional label and value display. Emerald fill, zinc-800 track.

| Prop | Values | Default | Description |
| --- | --- | --- | --- |
| `value` | `number` | `62` | Progress percentage (0–100) |
| `label` | `string` | `undefined` | Optional label shown above the track |
| `showValue` | `boolean` | `false` | Shows the numeric percentage alongside the label |
| `striped` | `boolean` | `false` | Adds a diagonal stripe pattern to the fill bar |
| `animated` | `boolean` | `false` | Animates the stripes — only visible when striped is true |
| `color` | `string` | `undefined` | Custom CSS color for the fill (e.g. "#6366f1" or "oklch(0.6 0.2 280)"). Falls back to emerald when unset. |

### Accordion

Collapsible panels with a chevron indicator that rotates on open. Divided by zinc-800 rules.

| Prop | Values | Default | Description |
| --- | --- | --- | --- |
| `items` | `{ value: string; title: string; content: string }[]` | `[...]` | Array of accordion panels |
| `bordered` | `boolean` | `false` | Wraps the entire accordion in a rounded border |
| `iconPosition` | `"left" \| "right"` | `"right"` | Side the chevron icon appears on in each row header |
| `collapsible` | `boolean` | `true` | When true, all panels can be closed simultaneously. When false, one panel is always open. |

### Tooltip

A dark glass tooltip anchored to its trigger with configurable side placement.

| Prop | Values | Default | Description |
| --- | --- | --- | --- |
| `content` | `ReactNode` | `"Tooltip text"` | Content rendered inside the tooltip popup |
| `children` | `ReactNode` | `"Hover me"` | Trigger element that shows the tooltip on hover |
| `side` | `"top" \| "bottom" \| "left" \| "right"` | `"top"` | Side of the trigger where the popup appears |
| `delay` | `number` | `100` | Milliseconds to wait before showing the tooltip on hover |
| `delayClose` | `number` | `0` | Milliseconds to wait before hiding the tooltip after the cursor leaves |
| `arrow` | `boolean` | `false` | Renders a small directional arrow pointing from the popup toward the trigger |
| `maxWidth` | `number` | `undefined` | Maximum width of the tooltip popup in pixels |

### Card

A flexible surface container for grouping related content. Supports glass, bordered, and hoverable variants.

| Prop | Values | Default | Description |
| --- | --- | --- | --- |
| `variant` | `"default" \| "glass" \| "bordered"` | `"default"` | Surface style — default uses card bg + border, glass uses frosted-glass effect, bordered is transparent with a thicker border |
| `padding` | `"none" \| "sm" \| "md" \| "lg"` | `"md"` | Internal padding of the card |
| `radius` | `"none" \| "sm" \| "md" \| "lg"` | `"md"` | Corner radius of the card |
| `shadow` | `boolean` | `false` | Adds a subtle drop shadow beneath the card |
| `hoverable` | `boolean` | `false` | Adds a lift + shadow effect on hover |
| `clickable` | `boolean` | `false` | Makes the card interactive — adds cursor-pointer and keyboard focus support |
| `onClick` | `() => void` | `undefined` | Click handler; also enables clickable styles when provided |
| `children` | `ReactNode` | `undefined` | Content rendered inside the card |

### Badge

A compact label for status indicators, counts, or metadata. Supports solid, soft, and outline styles across six colors.

| Prop | Values | Default | Description |
| --- | --- | --- | --- |
| `variant` | `"solid" \| "soft" \| "outline"` | `"soft"` | Fill style of the badge |
| `color` | `"default" \| "emerald" \| "red" \| "amber" \| "blue" \| "violet"` | `"default"` | Color palette applied to the badge |
| `size` | `"sm" \| "md" \| "lg"` | `"md"` | Controls badge height and text size |
| `dot` | `boolean` | `false` | Prepends a small colored dot — useful for status indicators |
| `rounded` | `boolean` | `false` | Uses fully rounded (pill) corners instead of the default rounded-md |
| `icon` | `ReactNode` | `undefined` | Icon rendered before the label (ignored when dot is true) |
| `children` | `ReactNode` | `"Badge"` | Badge label text |

### Chip

An interactive filter or selection token. Supports selected state and a removable dismiss button.

| Prop | Values | Default | Description |
| --- | --- | --- | --- |
| `selected` | `boolean` | `false` | Highlights the chip with the emerald accent to indicate active selection |
| `removable` | `boolean` | `false` | Renders an × button on the right that calls onRemove when clicked |
| `onRemove` | `() => void` | `undefined` | Callback fired when the remove button is clicked |
| `onClick` | `() => void` | `undefined` | Click handler — also enables button role and keyboard support |
| `size` | `"sm" \| "md" \| "lg"` | `"md"` | Controls chip height, padding, and text size |
| `icon` | `ReactNode` | `undefined` | Icon rendered before the label |
| `children` | `ReactNode` | `"Chip"` | Chip label text |

## Feedback

### Dialog

A centered modal dialog with dark glass surface, backdrop blur, and confirm/cancel actions.

| Prop | Values | Default | Description |
| --- | --- | --- | --- |
| `trigger` | `string` | `"Open Dialog"` | Text rendered on the trigger button |
| `title` | `string` | `"Confirm action"` | Dialog heading |
| `description` | `string` | `"..."` | Body text shown below the heading |
| `showCloseButton` | `boolean` | `false` | Renders an × button in the top-right corner of the dialog header |
| `closeOnOutsideClick` | `boolean` | `false` | Closes the dialog when the user clicks outside the popup |
| `footer` | `ReactNode` | `undefined` | Custom footer content — replaces the default Cancel / Confirm button pair when provided |

### Popover

A dark glass popover anchored to its trigger. Includes a close button and description slot.

| Prop | Values | Default | Description |
| --- | --- | --- | --- |
| `trigger` | `string` | `"Open Popover"` | Text rendered on the trigger button |
| `title` | `string` | `"Popover"` | Popover heading |
| `content` | `ReactNode` | `"..."` | Body content inside the popover |
| `arrow` | `boolean` | `false` | Renders a small directional arrow pointing from the popup toward the trigger |
| `width` | `number` | `288` | Width of the popover in pixels |
| `offset` | `number` | `8` | Gap in pixels between the trigger and the popup |
| `placement` | `"top" \| "bottom" \| "left" \| "right"` | `"bottom"` | Side the popup opens on relative to the trigger |

### Alert

An inline status message in four severity levels: info, success, warning, and error. Optionally dismissible.

| Prop | Values | Default | Description |
| --- | --- | --- | --- |
| `variant` | `"info" \| "success" \| "warning" \| "error"` | `"info"` | Determines the color scheme and default icon |
| `title` | `string` | `undefined` | Optional bold heading above the description |
| `description` | `string` | `"Something happened…"` | Main body text of the alert |
| `icon` | `ReactNode` | `undefined` | Custom icon — overrides the default variant icon when provided |
| `closable` | `boolean` | `false` | Shows a dismiss button that hides the alert on click |
| `onClose` | `() => void` | `undefined` | Callback fired when the dismiss button is clicked |

### Toast

Transient notifications that slide in from the corner. Uses Base UI Toast with a global toastManager for triggering outside React.

| Prop | Values | Default | Description |
| --- | --- | --- | --- |
| `timeout` | `number` | `5000` | Default auto-dismiss delay in milliseconds. Pass 0 to disable auto-dismiss. |
| `limit` | `number` | `3` | Maximum number of toasts shown at once |
| `children` | `ReactNode` | `undefined` | App content wrapped by the toast provider |

### Dropdown Menu

A keyboard-navigable dropdown menu with icons, keyboard shortcuts, separators, and a danger style. Built on Base UI Menu primitive.

| Prop | Values | Default | Description |
| --- | --- | --- | --- |
| `triggerLabel` | `string` | `"Open menu"` | Text label on the default trigger button |
| `trigger` | `ReactNode` | `undefined` | Custom trigger element — replaces the default trigger button when provided |
| `items` | `MenuItem[]` | `[...]` | Array of menu items. Each item: { label, icon?, shortcut?, disabled?, danger?, separator? } |
| `align` | `"start" \| "center" \| "end"` | `"start"` | Horizontal alignment of the popup relative to the trigger |
| `side` | `"top" \| "bottom" \| "left" \| "right"` | `"bottom"` | Side the popup opens on relative to the trigger |

