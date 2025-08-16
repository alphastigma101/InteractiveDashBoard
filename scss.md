# SCSS/Sass Cheat Sheet

## Variables
```scss
$primary-color: #333;
$font-stack: Helvetica, sans-serif;

body {
  color: $primary-color;
  font-family: $font-stack;
}
```

## Nesting
```scss
nav {
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  li { display: inline-block; }

  a {
    display: block;
    padding: 6px 12px;
    text-decoration: none;
  }
}
```

## Partials & Import
```scss
// _reset.scss
* { margin: 0; padding: 0; }

// main.scss
@import 'reset';

body { font-size: 16px; }
```

## Mixins
```scss
@mixin transform($property) {
  -webkit-transform: $property;
  -ms-transform: $property;
  transform: $property;
}

.box { @include transform(rotate(30deg)); }
```

## Extend/Inheritance
```scss
%message-shared {
  border: 1px solid #ccc;
  padding: 10px;
  color: #333;
}

.message {
  @extend %message-shared;
}

.success {
  @extend %message-shared;
  border-color: green;
}
```

## Operators
```scss
.container {
  width: 100% - 30px;
  height: 300px / 600px * 100%;
  padding: 10px * 2;
}
```

## Functions
```scss
@function calculate-width($col-span) {
  @return 100% / $col-span;
}

.span-4 {
  width: calculate-width(4); // 25%
}
```

## Color Functions
```scss
$primary: #036;

.header {
  background-color: lighten($primary, 20%);
  color: darken($primary, 10%);
  border-color: transparentize($primary, 0.5);
}

.button {
  background: mix(blue, red, 50%);
}
```

## Control Directives

### @if
```scss
@mixin text-color($val) {
  @if $val == danger {
    color: red;
  } @else if $val == alert {
    color: yellow;
  } @else {
    color: black;
  }
}
```

### @for
```scss
@for $i from 1 through 4 {
  .col-#{$i} { width: 100% / $i; }
}
```

### @each
```scss
$sizes: 40px, 50px, 80px;

@each $size in $sizes {
  .icon-#{$size} {
    font-size: $size;
    height: $size;
  }
}
```

### @while
```scss
$i: 6;
@while $i > 0 {
  .item-#{$i} { width: 2em * $i; }
  $i: $i - 2;
}
```

## Lists & Maps
```scss
// Lists
$fonts: Helvetica, Arial, sans-serif;

// Maps
$theme-colors: (
  "primary": #0074d9,
  "danger": #ff4136,
  "success": #2ecc40
);

.button {
  background-color: map-get($theme-colors, "primary");
}
```

## Parent Selector (&)
```scss
a {
  color: blue;
  &:hover { color: red; }
  &.active { color: green; }
  body.dark & { color: white; }
}
```

## Placeholder Selectors (%)
```scss
%button-style {
  padding: 10px;
  border-radius: 4px;
}

.submit-button {
  @extend %button-style;
  background: blue;
}
```

## Interpolation (#{})
```scss
$name: "alert";
$attr: "border";

p.#{$name} {
  #{$attr}-color: blue;
}
```

## Built-in Modules

### Math
```scss
round(1.2); // 1
ceil(1.2);  // 2
floor(1.2); // 1
abs(-1.2);  // 1.2
min(1, 2, 3); // 1
max(1, 2, 3); // 3
random(); // 0-1
random(10); // 0-10
```

### String
```scss
quote(Helvetica); // "Helvetica"
str-index("Helvetica", "e"); // 2
str-insert("abcd", "X", 2); // "aXbcd"
str-length("Helvetica"); // 9
str-slice("Helvetica", 2, 5); // "elv"
to-upper-case("Helvetica"); // "HELVETICA"
to-lower-case("Helvetica"); // "helvetica"
```

### Color
```scss
rgb(0, 128, 255); // #0080ff
rgba(0, 128, 255, 0.5); // rgba(0, 128, 255, 0.5)
hsl(210, 100%, 50%); // #0080ff
hsla(210, 100%, 50%, 0.5); // rgba(0, 128, 255, 0.5)
```

### List
```scss
length(10px 20px 30px); // 3
nth(10px 20px 30px, 2); // 20px
index(1px solid red, solid); // 2
join(10px 20px, 30px 40px); // 10px 20px 30px 40px
append(10px 20px, 30px); // 10px 20px 30px
```

## Media Queries
```scss
.container {
  width: 100%;

  @media (min-width: 768px) {
    width: 750px;
  }

  @media (min-width: 992px) {
    width: 970px;
  }
}
```

## Comments
```scss
// This comment won't appear in the CSS output

/* This comment will appear in the CSS output */

/*! This is a "loud" comment that will appear even in compressed output */
```

## Debugging
```scss
@debug 10px + 12px; // Output: 22px
@warn "This is a warning";
@error "This is an error";
```

## Common Use Cases

### Responsive Breakpoints Mixin
```scss
@mixin respond-to($breakpoint) {
  @if $breakpoint == phone {
    @media (max-width: 600px) { @content; }
  } @else if $breakpoint == tablet {
    @media (max-width: 900px) { @content; }
  } @else if $breakpoint == desktop {
    @media (min-width: 901px) { @content; }
  }
}

.header {
  font-size: 16px;
  
  @include respond-to(phone) {
    font-size: 14px;
  }
}
```

### Flexbox Center Mixin
```scss
@mixin flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
}

.element {
  @include flex-center;
}
```

### CSS Triangle
```scss
@mixin triangle($direction, $size, $color) {
  width: 0;
  height: 0;
  
  @if $direction == up {
    border-left: $size solid transparent;
    border-right: $size solid transparent;
    border-bottom: $size solid $color;
  } @else if $direction == down {
    border-left: $size solid transparent;
    border-right: $size solid transparent;
    border-top: $size solid $color;
  }
}

.arrow-up {
  @include triangle(up, 10px, black);
}
```

### REM Fallback
```scss
@function rem($px) {
  @return ($px / 16) * 1rem;
}

h1 {
  font-size: rem(32); // 2rem
}
```

### Z-index Management
```scss
$z-layers: (
  "modal": 1000,
  "dropdown": 100,
  "default": 1,
  "below": -1
);

@function z($layer) {
  @return map-get($z-layers, $layer);
}

.modal {
  z-index: z("modal");
}
```

- The MVC design pattern is a software architecture pattern that separates an application into three main components: Model, View, and Controller

This cheat sheet covers all the essential SCSS/Sass features including:
- Variables and nesting
- Mixins and functions
- Control directives (@if, @for, @each, @while)
- Parent selector and interpolation
- Built-in modules (math, string, color, list)
- Common use case patterns