# Component Props Schema

A consistent prop system inspired by:
- Material UI
- shadcn/ui
- Radix UI


## Common Props

Shared by most components.

```ts
{
  id: string,

  className: string,

  size:
    "xs" |
    "sm" |
    "md" |
    "lg" |
    "xl",

  variant:
    "solid" |
    "outline" |
    "ghost" |
    "soft" |
    "link",

  radius:
    "none" |
    "sm" |
    "md" |
    "lg" |
    "full",

  disabled: boolean,

  loading: boolean,

  animation:
    "none" |
    "fade" |
    "scale" |
    "slide"
}
```


# Form Components


## Button

```ts
{
  variant:
    "solid" |
    "outline" |
    "ghost" |
    "soft" |
    "link" |
    "destructive",

  size:
    "sm" |
    "md" |
    "lg",

  icon,

  iconPosition:
    "left" |
    "right",

  loading,

  disabled,

  fullWidth,

  type:
    "button" |
    "submit" |
    "reset"
}
```


## Input

```ts
{
  variant:
    "outline" |
    "filled" |
    "ghost",

  size,

  type:
    "text" |
    "email" |
    "password" |
    "number",

  placeholder,

  value,

  defaultValue,

  disabled,

  readOnly,

  required,

  error,

  success,

  prefixIcon,

  suffixIcon
}
```


## Checkbox

```ts
{
  checked,

  defaultChecked,

  disabled,

  indeterminate,

  size:
    "sm" |
    "md" |
    "lg",

  label,

  description
}
```


## Radio Group

```ts
{
  value,

  defaultValue,

  orientation:
    "horizontal" |
    "vertical",

  disabled,

  size
}
```


## Select

```ts
{
  value,

  placeholder,

  multiple,

  searchable,

  disabled,

  loading,

  size,

  variant
}
```


## Slider

```ts
{
  min,

  max,

  step,

  value,

  orientation:
    "horizontal" |
    "vertical",

  range,

  disabled
}
```


## Switch

```ts
{
  checked,

  defaultChecked,

  size,

  disabled,

  label,

  labelPosition:
    "left" |
    "right"
}
```



# Data Display


## Avatar

```ts
{
  src,

  fallback,

  size:
    "xs" |
    "sm" |
    "md" |
    "lg" |
    "xl",

  shape:
    "circle" |
    "square",

  status:
    "online" |
    "offline" |
    "busy"
}
```


## Separator

```ts
{
  orientation:
    "horizontal" |
    "vertical",

  variant:
    "solid" |
    "dashed",

  spacing
}
```


## Tabs

```ts
{
  value,

  defaultValue,

  variant:
    "line" |
    "pill" |
    "boxed",

  orientation:
    "horizontal" |
    "vertical",

  disabled
}
```


## Progress

```ts
{
  value,

  max,

  size,

  variant:
    "solid" |
    "gradient",

  showLabel,

  animated
}
```


## Accordion

```ts
{
  type:
    "single" |
    "multiple",

  collapsible,

  defaultValue,

  variant:
    "default" |
    "bordered" |
    "ghost"
}
```


## Tooltip

```ts
{
  content,

  placement:
    "top" |
    "bottom" |
    "left" |
    "right",

  delay,

  disabled
}
```



# Feedback Components


## Dialog

```ts
{
  open,

  size:
    "sm" |
    "md" |
    "lg" |
    "xl",

  modal,

  title,

  description,

  closeButton,

  loading,

  footer
}
```


## Popover

```ts
{
  open,

  placement,

  trigger:
    "click" |
    "hover",

  width,

  closeOnSelect
}
```



# Component Registry Format


Example:

```json
{
  "name": "Button",

  "category": "form",

  "props": {

    "variant": {
      "type": "select",
      "options": [
        "solid",
        "outline",
        "ghost",
        "soft"
      ]
    },

    "size": {
      "type": "select",
      "options": [
        "sm",
        "md",
        "lg"
      ]
    },

    "loading": {
      "type": "boolean"
    }
  }
}
```


# Rendering Rules


- Preview components use lazy loading
- Do not render every variant at once
- Props generate playground controls
- Metadata drives documentation
- Component source stays in code