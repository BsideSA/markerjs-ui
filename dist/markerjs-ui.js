var z = Object.defineProperty;
var E = (l, i, e) => i in l ? z(l, i, { enumerable: !0, configurable: !0, writable: !0, value: e }) : l[i] = e;
var r = (l, i, e) => E(l, typeof i != "symbol" ? i + "" : i, e);
import { ShapeMarkerBase as O, CustomImageMarker as h, FrameMarker as I, CoverMarker as j, HighlightMarker as F, EllipseFrameMarker as L, EllipseMarker as P, ArrowMarker as V, LineMarker as N, MeasurementMarker as H, CurveMarker as D, TextMarker as R, CalloutMarker as q, CaptionFrameMarker as W, FreehandMarker as Z, HighlighterMarker as $, PolygonMarker as Q, ShapeMarkerEditor as _, CaptionFrameMarkerEditor as C, CalloutMarkerEditor as B, PolygonMarkerEditor as S, ShapeOutlineMarkerEditor as X, LinearMarkerEditor as Y, FreehandMarkerEditor as J, TextMarkerEditor as w, MarkerArea as K, Renderer as ee, MarkerView as te } from "@markerjs/markerjs3";
const U = `/*! tailwindcss v4.1.12 | MIT License | https://tailwindcss.com */@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){*,:before,:after,::backdrop{--tw-rotate-x:initial;--tw-rotate-y:initial;--tw-rotate-z:initial;--tw-skew-x:initial;--tw-skew-y:initial;--tw-space-y-reverse:0;--tw-space-x-reverse:0;--tw-border-style:solid;--tw-shadow:0 0 #0000;--tw-shadow-color:initial;--tw-shadow-alpha:100%;--tw-inset-shadow:0 0 #0000;--tw-inset-shadow-color:initial;--tw-inset-shadow-alpha:100%;--tw-ring-color:initial;--tw-ring-shadow:0 0 #0000;--tw-inset-ring-color:initial;--tw-inset-ring-shadow:0 0 #0000;--tw-ring-inset:initial;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-offset-shadow:0 0 #0000;--tw-blur:initial;--tw-brightness:initial;--tw-contrast:initial;--tw-grayscale:initial;--tw-hue-rotate:initial;--tw-invert:initial;--tw-opacity:initial;--tw-saturate:initial;--tw-sepia:initial;--tw-drop-shadow:initial;--tw-drop-shadow-color:initial;--tw-drop-shadow-alpha:100%;--tw-drop-shadow-size:initial}}}@layer theme{:root,:host{--font-sans:ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";--font-mono:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace;--spacing:.25rem;--radius-md:.375rem;--default-font-family:var(--font-sans);--default-mono-font-family:var(--font-mono)}}@layer base{*,:after,:before,::backdrop{box-sizing:border-box;border:0 solid;margin:0;padding:0}::file-selector-button{box-sizing:border-box;border:0 solid;margin:0;padding:0}html,:host{-webkit-text-size-adjust:100%;-moz-tab-size:4;tab-size:4;line-height:1.5;font-family:var(--default-font-family,ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji");font-feature-settings:var(--default-font-feature-settings,normal);font-variation-settings:var(--default-font-variation-settings,normal);-webkit-tap-highlight-color:transparent}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;-webkit-text-decoration:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:var(--default-mono-font-family,ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace);font-feature-settings:var(--default-mono-font-feature-settings,normal);font-variation-settings:var(--default-mono-font-variation-settings,normal);font-size:1em}small{font-size:80%}sub,sup{vertical-align:baseline;font-size:75%;line-height:0;position:relative}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}:-moz-focusring{outline:auto}progress{vertical-align:baseline}summary{display:list-item}ol,ul,menu{list-style:none}img,svg,video,canvas,audio,iframe,embed,object{vertical-align:middle;display:block}img,video{max-width:100%;height:auto}button,input,select,optgroup,textarea{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}::file-selector-button{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}:where(select:is([multiple],[size])) optgroup{font-weight:bolder}:where(select:is([multiple],[size])) optgroup option{padding-inline-start:20px}::file-selector-button{margin-inline-end:4px}::placeholder{opacity:1}@supports (not ((-webkit-appearance:-apple-pay-button))) or (contain-intrinsic-size:1px){::placeholder{color:currentColor}@supports (color:color-mix(in lab,red,red)){::placeholder{color:color-mix(in oklab,currentcolor 50%,transparent)}}}textarea{resize:vertical}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-date-and-time-value{min-height:1lh;text-align:inherit}::-webkit-datetime-edit{display:inline-flex}::-webkit-datetime-edit-fields-wrapper{padding:0}::-webkit-datetime-edit{padding-block:0}::-webkit-datetime-edit-year-field{padding-block:0}::-webkit-datetime-edit-month-field{padding-block:0}::-webkit-datetime-edit-day-field{padding-block:0}::-webkit-datetime-edit-hour-field{padding-block:0}::-webkit-datetime-edit-minute-field{padding-block:0}::-webkit-datetime-edit-second-field{padding-block:0}::-webkit-datetime-edit-millisecond-field{padding-block:0}::-webkit-datetime-edit-meridiem-field{padding-block:0}::-webkit-calendar-picker-indicator{line-height:1}:-moz-ui-invalid{box-shadow:none}button,input:where([type=button],[type=reset],[type=submit]){-webkit-appearance:button;-moz-appearance:button;appearance:button}::file-selector-button{-webkit-appearance:button;-moz-appearance:button;appearance:button}::-webkit-inner-spin-button{height:auto}::-webkit-outer-spin-button{height:auto}[hidden]:where(:not([hidden=until-found])){display:none!important}:where(#mainContainer),#mainContainer:has(input.theme-controller[value=light]:checked),[data-theme=light]{color-scheme:light;--color-base-100:oklch(100% 0 0);--color-base-200:oklch(98% 0 0);--color-base-300:oklch(95% 0 0);--color-base-content:oklch(21% .006 285.885);--color-primary:oklch(45% .24 277.023);--color-primary-content:oklch(93% .034 272.788);--color-secondary:oklch(65% .241 354.308);--color-secondary-content:oklch(94% .028 342.258);--color-accent:oklch(77% .152 181.912);--color-accent-content:oklch(38% .063 188.416);--color-neutral:oklch(14% .005 285.823);--color-neutral-content:oklch(92% .004 286.32);--color-info:oklch(74% .16 232.661);--color-info-content:oklch(29% .066 243.157);--color-success:oklch(76% .177 163.223);--color-success-content:oklch(37% .077 168.94);--color-warning:oklch(82% .189 84.429);--color-warning-content:oklch(41% .112 45.904);--color-error:oklch(71% .194 13.428);--color-error-content:oklch(27% .105 12.094);--radius-selector:.5rem;--radius-field:.25rem;--radius-box:.5rem;--size-selector:.25rem;--size-field:.25rem;--border:1px;--depth:1;--noise:0}@media (prefers-color-scheme:dark){#mainContainer{color-scheme:dark;--color-base-100:oklch(25.33% .016 252.42);--color-base-200:oklch(23.26% .014 253.1);--color-base-300:oklch(21.15% .012 254.09);--color-base-content:oklch(97.807% .029 256.847);--color-primary:oklch(58% .233 277.117);--color-primary-content:oklch(96% .018 272.314);--color-secondary:oklch(65% .241 354.308);--color-secondary-content:oklch(94% .028 342.258);--color-accent:oklch(77% .152 181.912);--color-accent-content:oklch(38% .063 188.416);--color-neutral:oklch(14% .005 285.823);--color-neutral-content:oklch(92% .004 286.32);--color-info:oklch(74% .16 232.661);--color-info-content:oklch(29% .066 243.157);--color-success:oklch(76% .177 163.223);--color-success-content:oklch(37% .077 168.94);--color-warning:oklch(82% .189 84.429);--color-warning-content:oklch(41% .112 45.904);--color-error:oklch(71% .194 13.428);--color-error-content:oklch(27% .105 12.094);--radius-selector:.5rem;--radius-field:.25rem;--radius-box:.5rem;--size-selector:.25rem;--size-field:.25rem;--border:1px;--depth:1;--noise:0}}#mainContainer:has(input.theme-controller[value=light]:checked),[data-theme=light]{color-scheme:light;--color-base-100:oklch(100% 0 0);--color-base-200:oklch(98% 0 0);--color-base-300:oklch(95% 0 0);--color-base-content:oklch(21% .006 285.885);--color-primary:oklch(45% .24 277.023);--color-primary-content:oklch(93% .034 272.788);--color-secondary:oklch(65% .241 354.308);--color-secondary-content:oklch(94% .028 342.258);--color-accent:oklch(77% .152 181.912);--color-accent-content:oklch(38% .063 188.416);--color-neutral:oklch(14% .005 285.823);--color-neutral-content:oklch(92% .004 286.32);--color-info:oklch(74% .16 232.661);--color-info-content:oklch(29% .066 243.157);--color-success:oklch(76% .177 163.223);--color-success-content:oklch(37% .077 168.94);--color-warning:oklch(82% .189 84.429);--color-warning-content:oklch(41% .112 45.904);--color-error:oklch(71% .194 13.428);--color-error-content:oklch(27% .105 12.094);--radius-selector:.5rem;--radius-field:.25rem;--radius-box:.5rem;--size-selector:.25rem;--size-field:.25rem;--border:1px;--depth:1;--noise:0}#mainContainer:has(input.theme-controller[value=dark]:checked),[data-theme=dark]{color-scheme:dark;--color-base-100:oklch(25.33% .016 252.42);--color-base-200:oklch(23.26% .014 253.1);--color-base-300:oklch(21.15% .012 254.09);--color-base-content:oklch(97.807% .029 256.847);--color-primary:oklch(58% .233 277.117);--color-primary-content:oklch(96% .018 272.314);--color-secondary:oklch(65% .241 354.308);--color-secondary-content:oklch(94% .028 342.258);--color-accent:oklch(77% .152 181.912);--color-accent-content:oklch(38% .063 188.416);--color-neutral:oklch(14% .005 285.823);--color-neutral-content:oklch(92% .004 286.32);--color-info:oklch(74% .16 232.661);--color-info-content:oklch(29% .066 243.157);--color-success:oklch(76% .177 163.223);--color-success-content:oklch(37% .077 168.94);--color-warning:oklch(82% .189 84.429);--color-warning-content:oklch(41% .112 45.904);--color-error:oklch(71% .194 13.428);--color-error-content:oklch(27% .105 12.094);--radius-selector:.5rem;--radius-field:.25rem;--radius-box:.5rem;--size-selector:.25rem;--size-field:.25rem;--border:1px;--depth:1;--noise:0}:root,[data-theme]{background-color:var(--root-bg,var(--color-base-100));color:var(--color-base-content)}:root{--fx-noise:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='a'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1.34' numOctaves='4' stitchTiles='stitch'%3E%3C/feTurbulence%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23a)' opacity='0.2'%3E%3C/rect%3E%3C/svg%3E")}@property --radialprogress{syntax: "<percentage>"; inherits: true; initial-value: 0%;}:where(:root:has(.modal-open,.modal[open],.modal:target,.modal-toggle:checked,.drawer:not(.drawer-open)>.drawer-toggle:checked)){scrollbar-gutter:stable;background-image:linear-gradient(var(--color-base-100),var(--color-base-100));--root-bg:var(--color-base-100)}@supports (color:color-mix(in lab,red,red)){:where(:root:has(.modal-open,.modal[open],.modal:target,.modal-toggle:checked,.drawer:not(.drawer-open)>.drawer-toggle:checked)){--root-bg:color-mix(in srgb,var(--color-base-100),oklch(0% 0 0) 40%)}}:where(.modal[open],.modal-open,.modal-toggle:checked+.modal):not(.modal-start,.modal-end){scrollbar-gutter:stable}:root{scrollbar-color:currentColor #0000}@supports (color:color-mix(in lab,red,red)){:root{scrollbar-color:color-mix(in oklch,currentColor 35%,#0000)#0000}}:root:has(.modal-open,.modal[open],.modal:target,.modal-toggle:checked,.drawer:not([class*=drawer-open])>.drawer-toggle:checked){overflow:hidden}}@layer components;@layer utilities{.\\@container{container-type:inline-size}.dropdown{position-area:var(--anchor-v,bottom)var(--anchor-h,span-right);display:inline-block;position:relative}.dropdown>:not(summary):focus{--tw-outline-style:none;outline-style:none}@media (forced-colors:active){.dropdown>:not(summary):focus{outline-offset:2px;outline:2px solid #0000}}.dropdown .dropdown-content{position:absolute}.dropdown:not(details,.dropdown-open,.dropdown-hover:hover,:focus-within) .dropdown-content{transform-origin:top;opacity:0;display:none;scale:95%}.dropdown[popover],.dropdown .dropdown-content{z-index:999;transition-behavior:allow-discrete;transition-property:opacity,scale,display;transition-duration:.2s;transition-timing-function:cubic-bezier(.4,0,.2,1);animation:.2s dropdown}@starting-style{.dropdown[popover],.dropdown .dropdown-content{opacity:0;scale:95%}}:is(.dropdown.dropdown-open,.dropdown:not(.dropdown-hover):focus,.dropdown:focus-within)>[tabindex]:first-child{pointer-events:none}:is(.dropdown.dropdown-open,.dropdown:not(.dropdown-hover):focus,.dropdown:focus-within) .dropdown-content{opacity:1}.dropdown.dropdown-hover:hover .dropdown-content{opacity:1;scale:100%}.dropdown:is(details) summary::-webkit-details-marker{display:none}:is(.dropdown.dropdown-open,.dropdown:focus,.dropdown:focus-within) .dropdown-content{scale:100%}.dropdown:where([popover]){background:0 0}.dropdown[popover]{color:inherit;position:fixed}@supports not (position-area:bottom){.dropdown[popover]{margin:auto}.dropdown[popover].dropdown-open:not(:popover-open){transform-origin:top;opacity:0;display:none;scale:95%}.dropdown[popover]::backdrop{background-color:oklab(0% none none/.3)}}.dropdown[popover]:not(.dropdown-open,:popover-open){transform-origin:top;opacity:0;display:none;scale:95%}:where(.btn){width:unset}.btn{cursor:pointer;text-align:center;vertical-align:middle;outline-offset:2px;webkit-user-select:none;-webkit-user-select:none;user-select:none;padding-inline:var(--btn-p);color:var(--btn-fg);--tw-prose-links:var(--btn-fg);height:var(--size);font-size:var(--fontsize,.875rem);outline-color:var(--btn-color,var(--color-base-content));background-color:var(--btn-bg);background-size:auto,calc(var(--noise)*100%);background-image:none,var(--btn-noise);border-width:var(--border);border-style:solid;border-color:var(--btn-border);text-shadow:0 .5px oklch(100% 0 0/calc(var(--depth)*.15));touch-action:manipulation;box-shadow:0 .5px 0 .5px oklch(100% 0 0/calc(var(--depth)*6%)) inset,var(--btn-shadow);--size:calc(var(--size-field,.25rem)*10);--btn-bg:var(--btn-color,var(--color-base-200));--btn-fg:var(--color-base-content);--btn-p:1rem;--btn-border:var(--btn-bg);border-start-start-radius:var(--join-ss,var(--radius-field));border-start-end-radius:var(--join-se,var(--radius-field));border-end-end-radius:var(--join-ee,var(--radius-field));border-end-start-radius:var(--join-es,var(--radius-field));flex-wrap:nowrap;flex-shrink:0;justify-content:center;align-items:center;gap:.375rem;font-weight:600;transition-property:color,background-color,border-color,box-shadow;transition-duration:.2s;transition-timing-function:cubic-bezier(0,0,.2,1);display:inline-flex}@supports (color:color-mix(in lab,red,red)){.btn{--btn-border:color-mix(in oklab,var(--btn-bg),#000 calc(var(--depth)*5%))}}.btn{--btn-shadow:0 3px 2px -2px var(--btn-bg),0 4px 3px -2px var(--btn-bg)}@supports (color:color-mix(in lab,red,red)){.btn{--btn-shadow:0 3px 2px -2px color-mix(in oklab,var(--btn-bg)calc(var(--depth)*30%),#0000),0 4px 3px -2px color-mix(in oklab,var(--btn-bg)calc(var(--depth)*30%),#0000)}}.btn{--btn-noise:var(--fx-noise)}.prose .btn{text-decoration-line:none}@media (hover:hover){.btn:hover{--btn-bg:var(--btn-color,var(--color-base-200))}@supports (color:color-mix(in lab,red,red)){.btn:hover{--btn-bg:color-mix(in oklab,var(--btn-color,var(--color-base-200)),#000 7%)}}}.btn:focus-visible{isolation:isolate;outline-width:2px;outline-style:solid}.btn:active:not(.btn-active){--btn-bg:var(--btn-color,var(--color-base-200));translate:0 .5px}@supports (color:color-mix(in lab,red,red)){.btn:active:not(.btn-active){--btn-bg:color-mix(in oklab,var(--btn-color,var(--color-base-200)),#000 5%)}}.btn:active:not(.btn-active){--btn-border:var(--btn-color,var(--color-base-200))}@supports (color:color-mix(in lab,red,red)){.btn:active:not(.btn-active){--btn-border:color-mix(in oklab,var(--btn-color,var(--color-base-200)),#000 7%)}}.btn:active:not(.btn-active){--btn-shadow:0 0 0 0 oklch(0% 0 0/0),0 0 0 0 oklch(0% 0 0/0)}.btn:is(:disabled,[disabled],.btn-disabled):not(.btn-link,.btn-ghost){background-color:var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){.btn:is(:disabled,[disabled],.btn-disabled):not(.btn-link,.btn-ghost){background-color:color-mix(in oklab,var(--color-base-content)10%,transparent)}}.btn:is(:disabled,[disabled],.btn-disabled):not(.btn-link,.btn-ghost){box-shadow:none}.btn:is(:disabled,[disabled],.btn-disabled){pointer-events:none;--btn-border:#0000;--btn-noise:none;--btn-fg:var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){.btn:is(:disabled,[disabled],.btn-disabled){--btn-fg:color-mix(in oklch,var(--color-base-content)20%,#0000)}}@media (hover:hover){.btn:is(:disabled,[disabled],.btn-disabled):hover{pointer-events:none;background-color:var(--color-neutral)}@supports (color:color-mix(in lab,red,red)){.btn:is(:disabled,[disabled],.btn-disabled):hover{background-color:color-mix(in oklab,var(--color-neutral)20%,transparent)}}.btn:is(:disabled,[disabled],.btn-disabled):hover{--btn-border:#0000;--btn-fg:var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){.btn:is(:disabled,[disabled],.btn-disabled):hover{--btn-fg:color-mix(in oklch,var(--color-base-content)20%,#0000)}}}.btn:is(input[type=checkbox],input[type=radio]){-webkit-appearance:none;-moz-appearance:none;appearance:none}.btn:is(input[type=checkbox],input[type=radio]):after{content:attr(aria-label)}.btn:where(input:checked:not(.filter .btn)){--btn-color:var(--color-primary);--btn-fg:var(--color-primary-content);isolation:isolate}.pointer-events-auto{pointer-events:auto}.pointer-events-none{pointer-events:none}.visible{visibility:visible}.toggle{border:var(--border)solid currentColor;color:var(--input-color);cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;vertical-align:middle;webkit-user-select:none;-webkit-user-select:none;user-select:none;--radius-selector-max:calc(var(--radius-selector) + var(--radius-selector) + var(--radius-selector));border-radius:calc(var(--radius-selector) + min(var(--toggle-p),var(--radius-selector-max)) + min(var(--border),var(--radius-selector-max)));padding:var(--toggle-p);flex-shrink:0;grid-template-columns:0fr 1fr 1fr;place-content:center;display:inline-grid;position:relative;box-shadow:inset 0 1px}@supports (color:color-mix(in lab,red,red)){.toggle{box-shadow:0 1px color-mix(in oklab,currentColor calc(var(--depth)*10%),#0000) inset}}.toggle{--input-color:var(--color-base-content);transition:color .3s,grid-template-columns .2s}@supports (color:color-mix(in lab,red,red)){.toggle{--input-color:color-mix(in oklab,var(--color-base-content)50%,#0000)}}.toggle{--toggle-p:calc(var(--size)*.125);--size:calc(var(--size-selector,.25rem)*6);width:calc((var(--size)*2) - (var(--border) + var(--toggle-p))*2);height:var(--size)}.toggle>*{z-index:1;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:#0000;border:none;grid-column:2/span 1;grid-row-start:1;height:100%;padding:.125rem;transition:opacity .2s,rotate .4s}.toggle>:focus{--tw-outline-style:none;outline-style:none}@media (forced-colors:active){.toggle>:focus{outline-offset:2px;outline:2px solid #0000}}.toggle>:nth-child(2){color:var(--color-base-100);rotate:none}.toggle>:nth-child(3){color:var(--color-base-100);opacity:0;rotate:-15deg}.toggle:has(:checked)>:nth-child(2){opacity:0;rotate:15deg}.toggle:has(:checked)>:nth-child(3){opacity:1;rotate:none}.toggle:before{aspect-ratio:1;border-radius:var(--radius-selector);--tw-content:"";content:var(--tw-content);height:100%;box-shadow:0 -1px oklch(0% 0 0/calc(var(--depth)*.1)) inset,0 8px 0 -4px oklch(100% 0 0/calc(var(--depth)*.1)) inset,0 1px currentColor;background-color:currentColor;grid-row-start:1;grid-column-start:2;transition:background-color .1s,translate .2s,inset-inline-start .2s;position:relative;inset-inline-start:0;translate:0}@supports (color:color-mix(in lab,red,red)){.toggle:before{box-shadow:0 -1px oklch(0% 0 0/calc(var(--depth)*.1)) inset,0 8px 0 -4px oklch(100% 0 0/calc(var(--depth)*.1)) inset,0 1px color-mix(in oklab,currentColor calc(var(--depth)*10%),#0000)}}.toggle:before{background-size:auto,calc(var(--noise)*100%);background-image:none,var(--fx-noise)}@media (forced-colors:active){.toggle:before{outline-style:var(--tw-outline-style);outline-offset:-1px;outline-width:1px}}@media print{.toggle:before{outline-offset:-1rem;outline:.25rem solid}}.toggle:focus-visible,.toggle:has(:focus-visible){outline-offset:2px;outline:2px solid}.toggle:checked,.toggle[aria-checked=true],.toggle:has(>input:checked){background-color:var(--color-base-100);--input-color:var(--color-base-content);grid-template-columns:1fr 1fr 0fr}:is(.toggle:checked,.toggle[aria-checked=true],.toggle:has(>input:checked)):before{background-color:currentColor}@starting-style{:is(.toggle:checked,.toggle[aria-checked=true],.toggle:has(>input:checked)):before{opacity:0}}.toggle:indeterminate{grid-template-columns:.5fr 1fr .5fr}.toggle:disabled{cursor:not-allowed;opacity:.3}.toggle:disabled:before{border:var(--border)solid currentColor;background-color:#0000}.input{cursor:text;border:var(--border)solid #0000;-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:var(--color-base-100);vertical-align:middle;white-space:nowrap;width:clamp(3rem,20rem,100%);height:var(--size);touch-action:manipulation;border-color:var(--input-color);box-shadow:0 1px var(--input-color) inset,0 -1px oklch(100% 0 0/calc(var(--depth)*.1)) inset;border-start-start-radius:var(--join-ss,var(--radius-field));border-start-end-radius:var(--join-se,var(--radius-field));border-end-end-radius:var(--join-ee,var(--radius-field));border-end-start-radius:var(--join-es,var(--radius-field));flex-shrink:1;align-items:center;gap:.5rem;padding-inline:.75rem;font-size:.875rem;display:inline-flex;position:relative}@supports (color:color-mix(in lab,red,red)){.input{box-shadow:0 1px color-mix(in oklab,var(--input-color)calc(var(--depth)*10%),#0000) inset,0 -1px oklch(100% 0 0/calc(var(--depth)*.1)) inset}}.input{--size:calc(var(--size-field,.25rem)*10);--input-color:var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){.input{--input-color:color-mix(in oklab,var(--color-base-content)20%,#0000)}}.input:where(input){display:inline-flex}.input :where(input){-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:#0000;border:none;width:100%;height:100%;display:inline-flex}.input :where(input):focus,.input :where(input):focus-within{--tw-outline-style:none;outline-style:none}@media (forced-colors:active){.input :where(input):focus,.input :where(input):focus-within{outline-offset:2px;outline:2px solid #0000}}.input :where(input[type=url]),.input :where(input[type=email]){direction:ltr}.input :where(input[type=date]){display:inline-block}.input:focus,.input:focus-within{--input-color:var(--color-base-content);box-shadow:0 1px var(--input-color)}@supports (color:color-mix(in lab,red,red)){.input:focus,.input:focus-within{box-shadow:0 1px color-mix(in oklab,var(--input-color)calc(var(--depth)*10%),#0000)}}.input:focus,.input:focus-within{outline:2px solid var(--input-color);outline-offset:2px;isolation:isolate;z-index:1}.input:has(>input[disabled]),.input:is(:disabled,[disabled]){cursor:not-allowed;border-color:var(--color-base-200);background-color:var(--color-base-200);color:var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){.input:has(>input[disabled]),.input:is(:disabled,[disabled]){color:color-mix(in oklab,var(--color-base-content)40%,transparent)}}:is(.input:has(>input[disabled]),.input:is(:disabled,[disabled]))::placeholder{color:var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){:is(.input:has(>input[disabled]),.input:is(:disabled,[disabled]))::placeholder{color:color-mix(in oklab,var(--color-base-content)20%,transparent)}}.input:has(>input[disabled]),.input:is(:disabled,[disabled]){box-shadow:none}.input:has(>input[disabled])>input[disabled]{cursor:not-allowed}.input::-webkit-date-and-time-value{text-align:inherit}.input[type=number]::-webkit-inner-spin-button{margin-block:-.75rem;margin-inline-end:-.75rem}.input::-webkit-calendar-picker-indicator{position:absolute;inset-inline-end:.75em}.steps{counter-reset:step;grid-auto-columns:1fr;grid-auto-flow:column;display:inline-grid;overflow:auto hidden}.steps .step{text-align:center;--step-bg:var(--color-base-300);--step-fg:var(--color-base-content);grid-template-rows:40px 1fr;grid-template-columns:auto;place-items:center;min-width:4rem;display:grid}.steps .step:before{width:100%;height:.5rem;color:var(--step-bg);background-color:var(--step-bg);--tw-content:"";content:var(--tw-content);border:1px solid;grid-row-start:1;grid-column-start:1;margin-inline-start:-100%;top:0}.steps .step>.step-icon,.steps .step:not(:has(.step-icon)):after{content:counter(step);counter-increment:step;z-index:1;color:var(--step-fg);background-color:var(--step-bg);border:1px solid var(--step-bg);border-radius:3.40282e38px;grid-row-start:1;grid-column-start:1;place-self:center;place-items:center;width:2rem;height:2rem;display:grid;position:relative}.steps .step:first-child:before{content:none}.steps .step[data-content]:after{content:attr(data-content)}.steps .step-neutral+.step-neutral:before,.steps .step-neutral:after,.steps .step-neutral>.step-icon{--step-bg:var(--color-neutral);--step-fg:var(--color-neutral-content)}.steps .step-primary+.step-primary:before,.steps .step-primary:after,.steps .step-primary>.step-icon{--step-bg:var(--color-primary);--step-fg:var(--color-primary-content)}.steps .step-secondary+.step-secondary:before,.steps .step-secondary:after,.steps .step-secondary>.step-icon{--step-bg:var(--color-secondary);--step-fg:var(--color-secondary-content)}.steps .step-accent+.step-accent:before,.steps .step-accent:after,.steps .step-accent>.step-icon{--step-bg:var(--color-accent);--step-fg:var(--color-accent-content)}.steps .step-info+.step-info:before,.steps .step-info:after,.steps .step-info>.step-icon{--step-bg:var(--color-info);--step-fg:var(--color-info-content)}.steps .step-success+.step-success:before,.steps .step-success:after,.steps .step-success>.step-icon{--step-bg:var(--color-success);--step-fg:var(--color-success-content)}.steps .step-warning+.step-warning:before,.steps .step-warning:after,.steps .step-warning>.step-icon{--step-bg:var(--color-warning);--step-fg:var(--color-warning-content)}.steps .step-error+.step-error:before,.steps .step-error:after,.steps .step-error>.step-icon{--step-bg:var(--color-error);--step-fg:var(--color-error-content)}.range{-webkit-appearance:none;-moz-appearance:none;appearance:none;webkit-appearance:none;--range-thumb:var(--color-base-100);--range-thumb-size:calc(var(--size-selector,.25rem)*6);--range-progress:currentColor;--range-fill:1;--range-p:.25rem;--range-bg:currentColor}@supports (color:color-mix(in lab,red,red)){.range{--range-bg:color-mix(in oklab,currentColor 10%,#0000)}}.range{cursor:pointer;vertical-align:middle;--radius-selector-max:calc(var(--radius-selector) + var(--radius-selector) + var(--radius-selector));border-radius:calc(var(--radius-selector) + min(var(--range-p),var(--radius-selector-max)));width:clamp(3rem,20rem,100%);height:var(--range-thumb-size);background-color:#0000;border:none;overflow:hidden}[dir=rtl] .range{--range-dir:-1}.range:focus{outline:none}.range:focus-visible{outline-offset:2px;outline:2px solid}.range::-webkit-slider-runnable-track{background-color:var(--range-bg);border-radius:var(--radius-selector);width:100%;height:calc(var(--range-thumb-size)*.5)}@media (forced-colors:active){.range::-webkit-slider-runnable-track{border:1px solid}.range::-moz-range-track{border:1px solid}}.range::-webkit-slider-thumb{box-sizing:border-box;border-radius:calc(var(--radius-selector) + min(var(--range-p),var(--radius-selector-max)));height:var(--range-thumb-size);width:var(--range-thumb-size);border:var(--range-p)solid;-webkit-appearance:none;-moz-appearance:none;appearance:none;webkit-appearance:none;color:var(--range-progress);box-shadow:0 -1px oklch(0% 0 0/calc(var(--depth)*.1)) inset,0 8px 0 -4px oklch(100% 0 0/calc(var(--depth)*.1)) inset,0 1px currentColor,0 0 0 2rem var(--range-thumb) inset,calc((var(--range-dir,1)*-100rem) - (var(--range-dir,1)*var(--range-thumb-size)/2)) 0 0 calc(100rem*var(--range-fill));background-color:currentColor;position:relative;top:50%;transform:translateY(-50%)}@supports (color:color-mix(in lab,red,red)){.range::-webkit-slider-thumb{box-shadow:0 -1px oklch(0% 0 0/calc(var(--depth)*.1)) inset,0 8px 0 -4px oklch(100% 0 0/calc(var(--depth)*.1)) inset,0 1px color-mix(in oklab,currentColor calc(var(--depth)*10%),#0000),0 0 0 2rem var(--range-thumb) inset,calc((var(--range-dir,1)*-100rem) - (var(--range-dir,1)*var(--range-thumb-size)/2)) 0 0 calc(100rem*var(--range-fill))}}.range::-moz-range-track{background-color:var(--range-bg);border-radius:var(--radius-selector);width:100%;height:calc(var(--range-thumb-size)*.5)}.range::-moz-range-thumb{box-sizing:border-box;border-radius:calc(var(--radius-selector) + min(var(--range-p),var(--radius-selector-max)));height:var(--range-thumb-size);width:var(--range-thumb-size);border:var(--range-p)solid;color:var(--range-progress);box-shadow:0 -1px oklch(0% 0 0/calc(var(--depth)*.1)) inset,0 8px 0 -4px oklch(100% 0 0/calc(var(--depth)*.1)) inset,0 1px currentColor,0 0 0 2rem var(--range-thumb) inset,calc((var(--range-dir,1)*-100rem) - (var(--range-dir,1)*var(--range-thumb-size)/2)) 0 0 calc(100rem*var(--range-fill));background-color:currentColor;position:relative;top:50%}@supports (color:color-mix(in lab,red,red)){.range::-moz-range-thumb{box-shadow:0 -1px oklch(0% 0 0/calc(var(--depth)*.1)) inset,0 8px 0 -4px oklch(100% 0 0/calc(var(--depth)*.1)) inset,0 1px color-mix(in oklab,currentColor calc(var(--depth)*10%),#0000),0 0 0 2rem var(--range-thumb) inset,calc((var(--range-dir,1)*-100rem) - (var(--range-dir,1)*var(--range-thumb-size)/2)) 0 0 calc(100rem*var(--range-fill))}}.range:disabled{cursor:not-allowed;opacity:.3}.select{border:var(--border)solid #0000;-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:var(--color-base-100);vertical-align:middle;width:clamp(3rem,20rem,100%);height:var(--size);touch-action:manipulation;text-overflow:ellipsis;box-shadow:0 1px var(--input-color) inset,0 -1px oklch(100% 0 0/calc(var(--depth)*.1)) inset;background-image:linear-gradient(45deg,#0000 50%,currentColor 50%),linear-gradient(135deg,currentColor 50%,#0000 50%);background-position:calc(100% - 20px) calc(1px + 50%),calc(100% - 16.1px) calc(1px + 50%);background-repeat:no-repeat;background-size:4px 4px,4px 4px;border-start-start-radius:var(--join-ss,var(--radius-field));border-start-end-radius:var(--join-se,var(--radius-field));border-end-end-radius:var(--join-ee,var(--radius-field));border-end-start-radius:var(--join-es,var(--radius-field));flex-shrink:1;align-items:center;gap:.375rem;padding-inline:1rem 1.75rem;font-size:.875rem;display:inline-flex;position:relative}@supports (color:color-mix(in lab,red,red)){.select{box-shadow:0 1px color-mix(in oklab,var(--input-color)calc(var(--depth)*10%),#0000) inset,0 -1px oklch(100% 0 0/calc(var(--depth)*.1)) inset}}.select{border-color:var(--input-color);--input-color:var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){.select{--input-color:color-mix(in oklab,var(--color-base-content)20%,#0000)}}.select{--size:calc(var(--size-field,.25rem)*10)}[dir=rtl] .select{background-position:12px calc(1px + 50%),16px calc(1px + 50%)}.select select{-webkit-appearance:none;-moz-appearance:none;appearance:none;background:inherit;border-radius:inherit;border-style:none;width:calc(100% + 2.75rem);height:calc(100% - 2px);margin-inline:-1rem -1.75rem;padding-inline:1rem 1.75rem}.select select:focus,.select select:focus-within{--tw-outline-style:none;outline-style:none}@media (forced-colors:active){.select select:focus,.select select:focus-within{outline-offset:2px;outline:2px solid #0000}}.select select:not(:last-child){background-image:none;margin-inline-end:-1.375rem}.select:focus,.select:focus-within{--input-color:var(--color-base-content);box-shadow:0 1px var(--input-color)}@supports (color:color-mix(in lab,red,red)){.select:focus,.select:focus-within{box-shadow:0 1px color-mix(in oklab,var(--input-color)calc(var(--depth)*10%),#0000)}}.select:focus,.select:focus-within{outline:2px solid var(--input-color);outline-offset:2px;isolation:isolate;z-index:1}.select:has(>select[disabled]),.select:is(:disabled,[disabled]){cursor:not-allowed;border-color:var(--color-base-200);background-color:var(--color-base-200);color:var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){.select:has(>select[disabled]),.select:is(:disabled,[disabled]){color:color-mix(in oklab,var(--color-base-content)40%,transparent)}}:is(.select:has(>select[disabled]),.select:is(:disabled,[disabled]))::placeholder{color:var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){:is(.select:has(>select[disabled]),.select:is(:disabled,[disabled]))::placeholder{color:color-mix(in oklab,var(--color-base-content)20%,transparent)}}.select:has(>select[disabled])>select[disabled]{cursor:not-allowed}.absolute{position:absolute}.relative{position:relative}.static{position:static}.dropdown-center{--anchor-h:center}.dropdown-center :where(.dropdown-content){inset-inline-end:50%;translate:50%}[dir=rtl] :is(.dropdown-center :where(.dropdown-content)){translate:-50%}.dropdown-center.dropdown-left{--anchor-h:left;--anchor-v:center}.dropdown-center.dropdown-left .dropdown-content{top:auto;bottom:50%;translate:0 50%}.dropdown-center.dropdown-right{--anchor-h:right;--anchor-v:center}.dropdown-center.dropdown-right .dropdown-content{top:auto;bottom:50%;translate:0 50%}.dropdown-end{--anchor-h:span-left}.dropdown-end :where(.dropdown-content){inset-inline-end:0;translate:0}[dir=rtl] :is(.dropdown-end :where(.dropdown-content)){translate:0}.dropdown-end.dropdown-left{--anchor-h:left;--anchor-v:span-top}.dropdown-end.dropdown-left .dropdown-content{top:auto;bottom:0}.dropdown-end.dropdown-right{--anchor-h:right;--anchor-v:span-top}.dropdown-end.dropdown-right .dropdown-content{top:auto;bottom:0}.dropdown-bottom{--anchor-v:bottom}.dropdown-bottom .dropdown-content{transform-origin:top;top:100%;bottom:auto}.dropdown-top{--anchor-v:top}.dropdown-top .dropdown-content{transform-origin:bottom;top:auto;bottom:100%}.bottom-5{bottom:calc(var(--spacing)*5)}.textarea{border:var(--border)solid #0000;-webkit-appearance:none;-moz-appearance:none;appearance:none;border-radius:var(--radius-field);background-color:var(--color-base-100);vertical-align:middle;touch-action:manipulation;border-color:var(--input-color);width:clamp(3rem,20rem,100%);min-height:5rem;box-shadow:0 1px var(--input-color) inset,0 -1px oklch(100% 0 0/calc(var(--depth)*.1)) inset;flex-shrink:1;padding-block:.5rem;padding-inline:.75rem;font-size:.875rem}@supports (color:color-mix(in lab,red,red)){.textarea{box-shadow:0 1px color-mix(in oklab,var(--input-color)calc(var(--depth)*10%),#0000) inset,0 -1px oklch(100% 0 0/calc(var(--depth)*.1)) inset}}.textarea{--input-color:var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){.textarea{--input-color:color-mix(in oklab,var(--color-base-content)20%,#0000)}}.textarea textarea{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:#0000;border:none}.textarea textarea:focus,.textarea textarea:focus-within{--tw-outline-style:none;outline-style:none}@media (forced-colors:active){.textarea textarea:focus,.textarea textarea:focus-within{outline-offset:2px;outline:2px solid #0000}}.textarea:focus,.textarea:focus-within{--input-color:var(--color-base-content);box-shadow:0 1px var(--input-color)}@supports (color:color-mix(in lab,red,red)){.textarea:focus,.textarea:focus-within{box-shadow:0 1px color-mix(in oklab,var(--input-color)calc(var(--depth)*10%),#0000)}}.textarea:focus,.textarea:focus-within{outline:2px solid var(--input-color);outline-offset:2px;isolation:isolate}.textarea:has(>textarea[disabled]),.textarea:is(:disabled,[disabled]){cursor:not-allowed;border-color:var(--color-base-200);background-color:var(--color-base-200);color:var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){.textarea:has(>textarea[disabled]),.textarea:is(:disabled,[disabled]){color:color-mix(in oklab,var(--color-base-content)40%,transparent)}}:is(.textarea:has(>textarea[disabled]),.textarea:is(:disabled,[disabled]))::placeholder{color:var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){:is(.textarea:has(>textarea[disabled]),.textarea:is(:disabled,[disabled]))::placeholder{color:color-mix(in oklab,var(--color-base-content)20%,transparent)}}.textarea:has(>textarea[disabled]),.textarea:is(:disabled,[disabled]){box-shadow:none}.textarea:has(>textarea[disabled])>textarea[disabled]{cursor:not-allowed}.btn-active{--btn-bg:var(--btn-color,var(--color-base-200))}@supports (color:color-mix(in lab,red,red)){.btn-active{--btn-bg:color-mix(in oklab,var(--btn-color,var(--color-base-200)),#000 7%)}}.btn-active{--btn-shadow:0 0 0 0 oklch(0% 0 0/0),0 0 0 0 oklch(0% 0 0/0);isolation:isolate}.z-1{z-index:1}.z-10{z-index:10}.container{width:100%}@media (min-width:40rem){.container{max-width:40rem}}@media (min-width:48rem){.container{max-width:48rem}}@media (min-width:64rem){.container{max-width:64rem}}@media (min-width:80rem){.container{max-width:80rem}}@media (min-width:96rem){.container{max-width:96rem}}.filter{flex-wrap:wrap;display:flex}.filter input[type=radio]{width:auto}.filter input{opacity:1;transition:margin .1s,opacity .3s,padding .3s,border-width .1s;overflow:hidden;scale:1}.filter input:not(:last-child){margin-inline-end:.25rem}.filter input.filter-reset{aspect-ratio:1}.filter input.filter-reset:after{content:"×"}.filter:not(:has(input:checked:not(.filter-reset))) .filter-reset,.filter:not(:has(input:checked:not(.filter-reset))) input[type=reset],.filter:has(input:checked:not(.filter-reset)) input:not(:checked,.filter-reset,input[type=reset]){opacity:0;border-width:0;width:0;margin-inline:0;padding-inline:0;scale:0}.-mx-5{margin-inline:calc(var(--spacing)*-5)}.label{white-space:nowrap;color:currentColor;align-items:center;gap:.375rem;display:inline-flex}@supports (color:color-mix(in lab,red,red)){.label{color:color-mix(in oklab,currentColor 60%,transparent)}}.label:has(input){cursor:pointer}.label:is(.input>*,.select>*){white-space:nowrap;height:calc(100% - .5rem);font-size:inherit;align-items:center;padding-inline:.75rem;display:flex}.label:is(.input>*,.select>*):first-child{border-inline-end:var(--border)solid currentColor;margin-inline:-.75rem .75rem}@supports (color:color-mix(in lab,red,red)){.label:is(.input>*,.select>*):first-child{border-inline-end:var(--border)solid color-mix(in oklab,currentColor 10%,#0000)}}.label:is(.input>*,.select>*):last-child{border-inline-start:var(--border)solid currentColor;margin-inline:.75rem -.75rem}@supports (color:color-mix(in lab,red,red)){.label:is(.input>*,.select>*):last-child{border-inline-start:var(--border)solid color-mix(in oklab,currentColor 10%,#0000)}}.join-item:where(:not(:first-child,:disabled,[disabled],.btn-disabled)){margin-block-start:0;margin-inline-start:calc(var(--border,1px)*-1)}.join-item:where(:is(:disabled,[disabled],.btn-disabled)){border-width:var(--border,1px)0 var(--border,1px)var(--border,1px)}.mt-2{margin-top:calc(var(--spacing)*2)}.-mr-2{margin-right:calc(var(--spacing)*-2)}.-mr-8{margin-right:calc(var(--spacing)*-8)}.-mr-10{margin-right:calc(var(--spacing)*-10)}.mr-2{margin-right:calc(var(--spacing)*2)}.mr-8{margin-right:calc(var(--spacing)*8)}.fieldset-legend{color:var(--color-base-content);justify-content:space-between;align-items:center;gap:.5rem;margin-bottom:-.25rem;padding-block:.5rem;font-weight:600;display:flex}.fieldset-label{color:var(--color-base-content);align-items:center;gap:.375rem;display:flex}@supports (color:color-mix(in lab,red,red)){.fieldset-label{color:color-mix(in oklab,var(--color-base-content)60%,transparent)}}.fieldset-label:has(input){cursor:pointer}.fieldset{grid-template-columns:1fr;grid-auto-rows:max-content;gap:.375rem;padding-block:.25rem;font-size:.75rem;display:grid}.join{--join-ss:0;--join-se:0;--join-es:0;--join-ee:0;align-items:stretch;display:inline-flex}.join :where(.join-item){border-start-start-radius:var(--join-ss,0);border-start-end-radius:var(--join-se,0);border-end-end-radius:var(--join-ee,0);border-end-start-radius:var(--join-es,0)}.join :where(.join-item) *{--join-ss:var(--radius-field);--join-se:var(--radius-field);--join-es:var(--radius-field);--join-ee:var(--radius-field)}.join>.join-item:where(:first-child),.join :first-child:not(:last-child) :where(.join-item){--join-ss:var(--radius-field);--join-se:0;--join-es:var(--radius-field);--join-ee:0}.join>.join-item:where(:last-child),.join :last-child:not(:first-child) :where(.join-item){--join-ss:0;--join-se:var(--radius-field);--join-es:0;--join-ee:var(--radius-field)}.join>.join-item:where(:only-child),.join :only-child :where(.join-item){--join-ss:var(--radius-field);--join-se:var(--radius-field);--join-es:var(--radius-field);--join-ee:var(--radius-field)}.flex{display:flex}.grid{display:grid}.hidden{display:none}.inline-flex{display:inline-flex}.btn-square{width:var(--size);height:var(--size);padding-inline:0}.h-0{height:calc(var(--spacing)*0)}.h-24{height:calc(var(--spacing)*24)}.h-full{height:100%}.w-0{width:calc(var(--spacing)*0)}.w-26{width:calc(var(--spacing)*26)}.w-48{width:calc(var(--spacing)*48)}.w-54{width:calc(var(--spacing)*54)}.w-64{width:calc(var(--spacing)*64)}.w-66{width:calc(var(--spacing)*66)}.w-full{width:100%}.transform{transform:var(--tw-rotate-x,)var(--tw-rotate-y,)var(--tw-rotate-z,)var(--tw-skew-x,)var(--tw-skew-y,)}.link{cursor:pointer;text-decoration-line:underline}.link:focus{--tw-outline-style:none;outline-style:none}@media (forced-colors:active){.link:focus{outline-offset:2px;outline:2px solid #0000}}.link:focus-visible{outline-offset:2px;outline:2px solid}.grid-rows-\\[auto_1fr_auto\\]{grid-template-rows:auto 1fr auto}.flex-col{flex-direction:column}.flex-row{flex-direction:row}.flex-wrap{flex-wrap:wrap}.items-center{align-items:center}.justify-between{justify-content:space-between}.justify-end{justify-content:flex-end}:where(.space-y-1>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing)*1)*var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing)*1)*calc(1 - var(--tw-space-y-reverse)))}:where(.space-x-1>:not(:last-child)){--tw-space-x-reverse:0;margin-inline-start:calc(calc(var(--spacing)*1)*var(--tw-space-x-reverse));margin-inline-end:calc(calc(var(--spacing)*1)*calc(1 - var(--tw-space-x-reverse)))}:where(.space-x-2>:not(:last-child)){--tw-space-x-reverse:0;margin-inline-start:calc(calc(var(--spacing)*2)*var(--tw-space-x-reverse));margin-inline-end:calc(calc(var(--spacing)*2)*calc(1 - var(--tw-space-x-reverse)))}.overflow-hidden{overflow:hidden}.rounded{border-radius:.25rem}.rounded-box{border-radius:var(--radius-box)}.rounded-md{border-radius:var(--radius-md)}.border-1{border-style:var(--tw-border-style);border-width:1px}.border-2{border-style:var(--tw-border-style);border-width:2px}.border-solid{--tw-border-style:solid;border-style:solid}.border-base-200{border-color:var(--color-base-200)}.border-transparent{border-color:#0000}.bg-base-100,.bg-base-100\\/40{background-color:var(--color-base-100)}@supports (color:color-mix(in lab,red,red)){.bg-base-100\\/40{background-color:color-mix(in oklab,var(--color-base-100)40%,transparent)}}.bg-base-200{background-color:var(--color-base-200)}.bg-transparent{background-color:#0000}.p-0{padding:calc(var(--spacing)*0)}.p-1{padding:calc(var(--spacing)*1)}.p-1\\.5{padding:calc(var(--spacing)*1.5)}.p-2{padding:calc(var(--spacing)*2)}.select-sm{--size:calc(var(--size-field,.25rem)*8);font-size:.75rem}.shadow-2xs{--tw-shadow:0 1px var(--tw-shadow-color,#0000000d);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-lg{--tw-shadow:0 10px 15px -3px var(--tw-shadow-color,#0000001a),0 4px 6px -4px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.btn-ghost:not(.btn-active,:hover,:active:focus,:focus-visible){--btn-shadow:"";--btn-bg:#0000;--btn-border:#0000;--btn-noise:none}.btn-ghost:not(.btn-active,:hover,:active:focus,:focus-visible):not(:disabled,[disabled],.btn-disabled){--btn-fg:currentColor;outline-color:currentColor}@media (hover:none){.btn-ghost:hover:not(.btn-active,:active,:focus-visible,:disabled,[disabled],.btn-disabled){--btn-shadow:"";--btn-bg:#0000;--btn-border:#0000;--btn-noise:none;--btn-fg:currentColor}}.filter{filter:var(--tw-blur,)var(--tw-brightness,)var(--tw-contrast,)var(--tw-grayscale,)var(--tw-hue-rotate,)var(--tw-invert,)var(--tw-saturate,)var(--tw-sepia,)var(--tw-drop-shadow,)}.btn-sm{--fontsize:.75rem;--btn-p:.75rem;--size:calc(var(--size-field,.25rem)*8)}.hover\\:border-base-300:hover{border-color:var(--color-base-300)}.hover\\:bg-base-100\\/90:hover{background-color:var(--color-base-100)}@supports (color:color-mix(in lab,red,red)){.hover\\:bg-base-100\\/90:hover{background-color:color-mix(in oklab,var(--color-base-100)90%,transparent)}}@media (min-width:40rem){.sm\\:mr-0{margin-right:calc(var(--spacing)*0)}}@container (min-width:36rem){.\\@xl\\:flex{display:flex}.\\@xl\\:hidden{display:none}.\\@xl\\:inline-flex{display:inline-flex}}}@keyframes progress{50%{background-position-x:-115%}}@keyframes radio{0%{padding:5px}50%{padding:3px}}@keyframes toast{0%{opacity:0;scale:.9}to{opacity:1;scale:1}}@keyframes dropdown{0%{opacity:0}}@keyframes rating{0%,40%{filter:brightness(1.05)contrast(1.05);scale:1.1}}@keyframes skeleton{0%{background-position:150%}to{background-position:-50%}}@property --tw-rotate-x{syntax:"*";inherits:false}@property --tw-rotate-y{syntax:"*";inherits:false}@property --tw-rotate-z{syntax:"*";inherits:false}@property --tw-skew-x{syntax:"*";inherits:false}@property --tw-skew-y{syntax:"*";inherits:false}@property --tw-space-y-reverse{syntax:"*";inherits:false;initial-value:0}@property --tw-space-x-reverse{syntax:"*";inherits:false;initial-value:0}@property --tw-border-style{syntax:"*";inherits:false;initial-value:solid}@property --tw-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-shadow-color{syntax:"*";inherits:false}@property --tw-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-inset-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-inset-shadow-color{syntax:"*";inherits:false}@property --tw-inset-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-ring-color{syntax:"*";inherits:false}@property --tw-ring-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-inset-ring-color{syntax:"*";inherits:false}@property --tw-inset-ring-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-ring-inset{syntax:"*";inherits:false}@property --tw-ring-offset-width{syntax:"<length>";inherits:false;initial-value:0}@property --tw-ring-offset-color{syntax:"*";inherits:false;initial-value:#fff}@property --tw-ring-offset-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-blur{syntax:"*";inherits:false}@property --tw-brightness{syntax:"*";inherits:false}@property --tw-contrast{syntax:"*";inherits:false}@property --tw-grayscale{syntax:"*";inherits:false}@property --tw-hue-rotate{syntax:"*";inherits:false}@property --tw-invert{syntax:"*";inherits:false}@property --tw-opacity{syntax:"*";inherits:false}@property --tw-saturate{syntax:"*";inherits:false}@property --tw-sepia{syntax:"*";inherits:false}@property --tw-drop-shadow{syntax:"*";inherits:false}@property --tw-drop-shadow-color{syntax:"*";inherits:false}@property --tw-drop-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-drop-shadow-size{syntax:"*";inherits:false}`, re = '<svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-pointer"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M7.904 17.563a1.2 1.2 0 0 0 2.228 .308l2.09 -3.093l4.907 4.907a1.067 1.067 0 0 0 1.509 0l1.047 -1.047a1.067 1.067 0 0 0 0 -1.509l-4.907 -4.907l3.113 -2.09a1.2 1.2 0 0 0 -.309 -2.228l-13.582 -3.904l3.904 13.563z" /></svg>', oe = '<svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-trash"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 7l16 0" /><path d="M10 11l0 6" /><path d="M14 11l0 6" /><path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" /><path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" /></svg>', ie = '<svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-rectangle"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 5m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z" /></svg>', ae = '<svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="currentColor"  class="icon icon-tabler icons-tabler-filled icon-tabler-rectangle"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M19 4h-14a3 3 0 0 0 -3 3v10a3 3 0 0 0 3 3h14a3 3 0 0 0 3 -3v-10a3 3 0 0 0 -3 -3z" /></svg>', ne = '<svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-oval-vertical"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12c0 -3.314 4.03 -6 9 -6s9 2.686 9 6s-4.03 6 -9 6s-9 -2.686 -9 -6z" /></svg>', se = '<svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="currentColor"  class="icon icon-tabler icons-tabler-filled icon-tabler-oval-vertical"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 5c-5.457 0 -10 3.028 -10 7s4.543 7 10 7s10 -3.028 10 -7s-4.543 -7 -10 -7z" /></svg>', le = `<svg xmlns="http://www.w3.org/2000/svg"
     width="24" height="24"
     viewBox="0 0 24 24"
     fill="none"
     stroke="currentColor"
     stroke-width="2"
     stroke-linecap="round"
     stroke-linejoin="round"
     class="icon icon-tabler icons-tabler-outline icon-tabler-triangle">
    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
    <path d="M12 4l8 16h-16z" />
</svg>
`, v = '<svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-highlight"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 19h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4" /><path d="M12.5 5.5l4 4" /><path d="M4.5 13.5l4 4" /><path d="M21 15v4h-8l4 -4z" /></svg>', de = '<svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-arrow-narrow-right"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 12l14 0" /><path d="M15 16l4 -4" /><path d="M15 8l4 4" /></svg>', ce = '<svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-line"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M6 18m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><path d="M18 6m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><path d="M7.5 16.5l9 -9" /></svg>', pe = '<svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-ruler-measure"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M19.875 12c.621 0 1.125 .512 1.125 1.143v5.714c0 .631 -.504 1.143 -1.125 1.143h-15.875a1 1 0 0 1 -1 -1v-5.857c0 -.631 .504 -1.143 1.125 -1.143h15.75z" /><path d="M9 12v2" /><path d="M6 12v3" /><path d="M12 12v3" /><path d="M18 12v3" /><path d="M15 12v2" /><path d="M3 3v4" /><path d="M3 5h18" /><path d="M21 3v4" /></svg>', he = '<svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-vector-spline"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M17 3m0 1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z" /><path d="M3 17m0 1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z" /><path d="M17 5c-6.627 0 -12 5.373 -12 12" /></svg>', fe = '<svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-text-size"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 7v-2h13v2" /><path d="M10 5v14" /><path d="M12 19h-4" /><path d="M15 13v-1h6v1" /><path d="M18 12v7" /><path d="M17 19h2" /></svg>', ue = '<svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-bubble-text"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M7 10h10" /><path d="M9 14h5" /><path d="M12.4 3a5.34 5.34 0 0 1 4.906 3.239a5.333 5.333 0 0 1 -1.195 10.6a4.26 4.26 0 0 1 -5.28 1.863l-3.831 2.298v-3.134a2.668 2.668 0 0 1 -1.795 -3.773a4.8 4.8 0 0 1 2.908 -8.933a5.33 5.33 0 0 1 4.287 -2.16" /></svg>', ge = '<svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-text-resize"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 5m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><path d="M19 5m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><path d="M5 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><path d="M19 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><path d="M5 7v10" /><path d="M7 5h10" /><path d="M7 19h10" /><path d="M19 7v10" /><path d="M10 10h4" /><path d="M12 14v-4" /></svg>', me = '<svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-scribble"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 15c2 3 4 4 7 4s7 -3 7 -7s-3 -7 -6 -7s-5 1.5 -5 4s2 5 6 5s8.408 -2.453 10 -5" /></svg>', be = '<svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-polygon"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 5m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><path d="M19 8m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><path d="M5 11m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><path d="M15 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><path d="M6.5 9.5l3.5 -3" /><path d="M14 5.5l3 1.5" /><path d="M18.5 10l-2.5 7" /><path d="M13.5 17.5l-7 -5" /></svg>';
class m extends O {
  constructor(i) {
    super(i), this.strokeColor = "#ff0000", this.fillColor = "#0000", this.strokeWidth = 3;
  }
  getPath(i = this.width, e = this.height) {
    return `M ${i / 2} 0 L ${i} ${e} L 0 ${e} Z`;
  }
}
r(m, "typeName", "TriangleMarker"), r(m, "title", "Triangle marker");
class x {
  constructor() {
    this.getUI = this.getUI.bind(this), this.createActionButton = this.createActionButton.bind(this);
  }
  getUI() {
  }
  createActionButton(i, e, t, o) {
    const a = document.createElement("button");
    return a.title = i, a.setAttribute("aria-label", i), a.className = "btn btn-square btn-ghost base-content btn-sm p-1.5", a.innerHTML = t, o && a.addEventListener("click", () => {
      o(e);
    }), a;
  }
}
const xe = '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><g fill="none"><path fill="url(#f2332id0)" d="M15.999 29.998c9.334 0 13.999-6.268 13.999-14c0-7.73-4.665-13.998-14-13.998C6.665 2 2 8.268 2 15.999s4.664 13.999 13.999 13.999"/><path fill="url(#f2332id1)" d="M15.999 29.998c9.334 0 13.999-6.268 13.999-14c0-7.73-4.665-13.998-14-13.998C6.665 2 2 8.268 2 15.999s4.664 13.999 13.999 13.999"/><path fill="url(#f2332id2)" d="M15.999 29.998c9.334 0 13.999-6.268 13.999-14c0-7.73-4.665-13.998-14-13.998C6.665 2 2 8.268 2 15.999s4.664 13.999 13.999 13.999"/><path fill="url(#f2332id3)" fill-opacity="0.6" d="M15.999 29.998c9.334 0 13.999-6.268 13.999-14c0-7.73-4.665-13.998-14-13.998C6.665 2 2 8.268 2 15.999s4.664 13.999 13.999 13.999"/><path fill="url(#f2332id4)" d="M15.999 29.998c9.334 0 13.999-6.268 13.999-14c0-7.73-4.665-13.998-14-13.998C6.665 2 2 8.268 2 15.999s4.664 13.999 13.999 13.999"/><path fill="url(#f2332id5)" d="M15.999 29.998c9.334 0 13.999-6.268 13.999-14c0-7.73-4.665-13.998-14-13.998C6.665 2 2 8.268 2 15.999s4.664 13.999 13.999 13.999"/><path fill="url(#f2332id6)" d="M15.999 29.998c9.334 0 13.999-6.268 13.999-14c0-7.73-4.665-13.998-14-13.998C6.665 2 2 8.268 2 15.999s4.664 13.999 13.999 13.999"/><path fill="url(#f2332id7)" d="M15.999 29.998c9.334 0 13.999-6.268 13.999-14c0-7.73-4.665-13.998-14-13.998C6.665 2 2 8.268 2 15.999s4.664 13.999 13.999 13.999"/><circle cx="9.017" cy="13.421" r="4.673" fill="url(#f2332id8)"/><circle cx="19.244" cy="13.943" r="4.244" fill="url(#f2332id9)"/><path fill="#fff" d="M10.42 16.224a4.206 4.206 0 1 0 0-8.411a4.206 4.206 0 0 0 0 8.411m11.148.077a4.244 4.244 0 1 0 0-8.489a4.244 4.244 0 0 0 0 8.49"/><path fill="url(#f2332idb)" d="M11 15a3 3 0 1 0 0-6a3 3 0 0 0 0 6"/><path fill="url(#f2332idc)" d="M21 15a3 3 0 1 0 0-6a3 3 0 0 0 0 6"/><path fill="url(#f2332ida)" fill-rule="evenodd" d="M10.4 18.2a1 1 0 0 1 1.4.2c.31.413 1.712 1.6 4.2 1.6s3.89-1.187 4.2-1.6a1 1 0 1 1 1.6 1.2c-.69.92-2.688 2.4-5.8 2.4s-5.11-1.48-5.8-2.4a1 1 0 0 1 .2-1.4" clip-rule="evenodd"/><defs><radialGradient id="f2332id0" cx="0" cy="0" r="1" gradientTransform="rotate(132.839 10.786 10.065)scale(37.5033)" gradientUnits="userSpaceOnUse"><stop stop-color="#fff478"/><stop offset=".475" stop-color="#ffb02e"/><stop offset="1" stop-color="#f70a8d"/></radialGradient><radialGradient id="f2332id1" cx="0" cy="0" r="1" gradientTransform="rotate(131.878 10.74 10.193)scale(38.9487)" gradientUnits="userSpaceOnUse"><stop stop-color="#fff478"/><stop offset=".475" stop-color="#ffb02e"/><stop offset="1" stop-color="#f70a8d"/></radialGradient><radialGradient id="f2332id2" cx="0" cy="0" r="1" gradientTransform="rotate(101.31 2.876 12.808)scale(17.8466 22.8581)" gradientUnits="userSpaceOnUse"><stop offset=".788" stop-color="#f59639" stop-opacity="0"/><stop offset=".973" stop-color="#ff7dce"/></radialGradient><radialGradient id="f2332id3" cx="0" cy="0" r="1" gradientTransform="matrix(-29 29 -29 -29 18 14)" gradientUnits="userSpaceOnUse"><stop offset=".315" stop-opacity="0"/><stop offset="1"/></radialGradient><radialGradient id="f2332id4" cx="0" cy="0" r="1" gradientTransform="rotate(77.692 -2.555 18.434)scale(28.1469)" gradientUnits="userSpaceOnUse"><stop offset=".508" stop-color="#7d6133" stop-opacity="0"/><stop offset="1" stop-color="#715b32"/></radialGradient><radialGradient id="f2332id5" cx="0" cy="0" r="1" gradientTransform="matrix(7.5 10.99996 -7.97335 5.4364 16.5 16.5)" gradientUnits="userSpaceOnUse"><stop stop-color="#ffb849"/><stop offset="1" stop-color="#ffb847" stop-opacity="0"/></radialGradient><radialGradient id="f2332id6" cx="0" cy="0" r="1" gradientTransform="matrix(11.49998 2 -2 11.49998 20.5 18)" gradientUnits="userSpaceOnUse"><stop stop-color="#ffa64b"/><stop offset=".9" stop-color="#ffae46" stop-opacity="0"/></radialGradient><radialGradient id="f2332id7" cx="0" cy="0" r="1" gradientTransform="rotate(43.971 -9.827 29.173)scale(59.0529)" gradientUnits="userSpaceOnUse"><stop offset=".185" stop-opacity="0"/><stop offset="1" stop-opacity="0.4"/></radialGradient><radialGradient id="f2332id8" cx="0" cy="0" r="1" gradientTransform="rotate(135 4.3 7.513)scale(9.10579 4.71285)" gradientUnits="userSpaceOnUse"><stop stop-color="#392108"/><stop offset="1" stop-color="#c87928" stop-opacity="0"/></radialGradient><radialGradient id="f2332id9" cx="0" cy="0" r="1" gradientTransform="rotate(135 9.069 9.99)scale(7.66968 4.32966)" gradientUnits="userSpaceOnUse"><stop stop-color="#392108"/><stop offset="1" stop-color="#c87928" stop-opacity="0"/></radialGradient><radialGradient id="f2332ida" cx="0" cy="0" r="1" gradientTransform="matrix(0 5.5 -8.41855 0 16 17)" gradientUnits="userSpaceOnUse"><stop offset=".348" stop-color="#241a1a"/><stop offset=".628" stop-color="#57444a"/><stop offset="1" stop-color="#4e2553"/><stop offset="1" stop-color="#502a56"/></radialGradient><linearGradient id="f2332idb" x1="16.5" x2="15.5" y1="8" y2="15" gradientUnits="userSpaceOnUse"><stop stop-color="#553b3e"/><stop offset="1" stop-color="#3d2432"/></linearGradient><linearGradient id="f2332idc" x1="16.5" x2="15.5" y1="8" y2="15" gradientUnits="userSpaceOnUse"><stop stop-color="#553b3e"/><stop offset="1" stop-color="#3d2432"/></linearGradient></defs></g></svg>', ke = '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><g fill="none"><path fill="url(#f388id0)" d="M15.999 29.998c9.334 0 13.999-6.268 13.999-14c0-7.73-4.665-13.998-14-13.998C6.665 2 2 8.268 2 15.999s4.664 13.999 13.999 13.999"/><path fill="url(#f388id1)" d="M15.999 29.998c9.334 0 13.999-6.268 13.999-14c0-7.73-4.665-13.998-14-13.998C6.665 2 2 8.268 2 15.999s4.664 13.999 13.999 13.999"/><path fill="url(#f388id2)" d="M15.999 29.998c9.334 0 13.999-6.268 13.999-14c0-7.73-4.665-13.998-14-13.998C6.665 2 2 8.268 2 15.999s4.664 13.999 13.999 13.999"/><path fill="url(#f388id3)" fill-opacity="0.6" d="M15.999 29.998c9.334 0 13.999-6.268 13.999-14c0-7.73-4.665-13.998-14-13.998C6.665 2 2 8.268 2 15.999s4.664 13.999 13.999 13.999"/><path fill="url(#f388id4)" d="M15.999 29.998c9.334 0 13.999-6.268 13.999-14c0-7.73-4.665-13.998-14-13.998C6.665 2 2 8.268 2 15.999s4.664 13.999 13.999 13.999"/><path fill="url(#f388id5)" d="M15.999 29.998c9.334 0 13.999-6.268 13.999-14c0-7.73-4.665-13.998-14-13.998C6.665 2 2 8.268 2 15.999s4.664 13.999 13.999 13.999"/><path fill="url(#f388id6)" d="M15.999 29.998c9.334 0 13.999-6.268 13.999-14c0-7.73-4.665-13.998-14-13.998C6.665 2 2 8.268 2 15.999s4.664 13.999 13.999 13.999"/><path fill="url(#f388id7)" d="M15.999 29.998c9.334 0 13.999-6.268 13.999-14c0-7.73-4.665-13.998-14-13.998C6.665 2 2 8.268 2 15.999s4.664 13.999 13.999 13.999"/><path stroke="url(#f388id8)" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 17c1.5 1.5 4.93 1.14 6-1"/><path stroke="url(#f388id9)" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M25 17c-1.5 1.5-4.93 1.14-6-1"/><path fill="url(#f388ida)" fill-rule="evenodd" d="M20.246 24.7a6.007 6.007 0 0 0-8.488.026a1 1 0 1 1-1.416-1.412a8.007 8.007 0 0 1 11.313-.034a1 1 0 0 1-1.41 1.42" clip-rule="evenodd"/><defs><radialGradient id="f388id0" cx="0" cy="0" r="1" gradientTransform="rotate(132.839 10.786 10.065)scale(37.5033)" gradientUnits="userSpaceOnUse"><stop stop-color="#fff478"/><stop offset=".475" stop-color="#ffb02e"/><stop offset="1" stop-color="#f70a8d"/></radialGradient><radialGradient id="f388id1" cx="0" cy="0" r="1" gradientTransform="rotate(131.878 10.74 10.193)scale(38.9487)" gradientUnits="userSpaceOnUse"><stop stop-color="#fff478"/><stop offset=".475" stop-color="#ffb02e"/><stop offset="1" stop-color="#f70a8d"/></radialGradient><radialGradient id="f388id2" cx="0" cy="0" r="1" gradientTransform="rotate(101.31 2.876 12.808)scale(17.8466 22.8581)" gradientUnits="userSpaceOnUse"><stop offset=".788" stop-color="#f59639" stop-opacity="0"/><stop offset=".973" stop-color="#ff7dce"/></radialGradient><radialGradient id="f388id3" cx="0" cy="0" r="1" gradientTransform="matrix(-29 29 -29 -29 18 14)" gradientUnits="userSpaceOnUse"><stop offset=".315" stop-opacity="0"/><stop offset="1"/></radialGradient><radialGradient id="f388id4" cx="0" cy="0" r="1" gradientTransform="rotate(77.692 -2.555 18.434)scale(28.1469)" gradientUnits="userSpaceOnUse"><stop offset=".508" stop-color="#7d6133" stop-opacity="0"/><stop offset="1" stop-color="#715b32"/></radialGradient><radialGradient id="f388id5" cx="0" cy="0" r="1" gradientTransform="matrix(7.5 10.99996 -7.97335 5.4364 16.5 16.5)" gradientUnits="userSpaceOnUse"><stop stop-color="#ffb849"/><stop offset="1" stop-color="#ffb847" stop-opacity="0"/></radialGradient><radialGradient id="f388id6" cx="0" cy="0" r="1" gradientTransform="matrix(11.49998 2 -2 11.49998 20.5 18)" gradientUnits="userSpaceOnUse"><stop stop-color="#ffa64b"/><stop offset=".9" stop-color="#ffae46" stop-opacity="0"/></radialGradient><radialGradient id="f388id7" cx="0" cy="0" r="1" gradientTransform="rotate(43.971 -9.827 29.173)scale(59.0529)" gradientUnits="userSpaceOnUse"><stop offset=".185" stop-opacity="0"/><stop offset="1" stop-opacity="0.4"/></radialGradient><linearGradient id="f388id8" x1="11.2" x2="10.965" y1="16.75" y2="18.161" gradientUnits="userSpaceOnUse"><stop stop-color="#52383e"/><stop offset="1" stop-color="#432a35"/></linearGradient><linearGradient id="f388id9" x1="20.8" x2="21.035" y1="16.75" y2="18.161" gradientUnits="userSpaceOnUse"><stop stop-color="#52383e"/><stop offset="1" stop-color="#432a35"/></linearGradient><linearGradient id="f388ida" x1="16" x2="16" y1="20.926" y2="22.989" gradientUnits="userSpaceOnUse"><stop stop-color="#4f3c43"/><stop offset="1" stop-color="#512756"/></linearGradient></defs></g></svg>', we = '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><g fill="none"><g clip-path="url(#f355idh)"><path fill="url(#f355id0)" d="M15.999 29.998c9.334 0 13.999-6.268 13.999-14c0-7.73-4.665-13.998-14-13.998C6.665 2 2 8.268 2 15.999s4.664 13.999 13.999 13.999"/><path fill="url(#f355id1)" d="M15.999 29.998c9.334 0 13.999-6.268 13.999-14c0-7.73-4.665-13.998-14-13.998C6.665 2 2 8.268 2 15.999s4.664 13.999 13.999 13.999"/><path fill="url(#f355id2)" d="M15.999 29.998c9.334 0 13.999-6.268 13.999-14c0-7.73-4.665-13.998-14-13.998C6.665 2 2 8.268 2 15.999s4.664 13.999 13.999 13.999"/><path fill="url(#f355id3)" fill-opacity="0.6" d="M15.999 29.998c9.334 0 13.999-6.268 13.999-14c0-7.73-4.665-13.998-14-13.998C6.665 2 2 8.268 2 15.999s4.664 13.999 13.999 13.999"/><path fill="url(#f355id4)" d="M15.999 29.998c9.334 0 13.999-6.268 13.999-14c0-7.73-4.665-13.998-14-13.998C6.665 2 2 8.268 2 15.999s4.664 13.999 13.999 13.999"/><path fill="url(#f355id5)" d="M15.999 29.998c9.334 0 13.999-6.268 13.999-14c0-7.73-4.665-13.998-14-13.998C6.665 2 2 8.268 2 15.999s4.664 13.999 13.999 13.999"/><path fill="url(#f355id6)" d="M15.999 29.998c9.334 0 13.999-6.268 13.999-14c0-7.73-4.665-13.998-14-13.998C6.665 2 2 8.268 2 15.999s4.664 13.999 13.999 13.999"/><path fill="url(#f355id7)" d="M15.999 29.998c9.334 0 13.999-6.268 13.999-14c0-7.73-4.665-13.998-14-13.998C6.665 2 2 8.268 2 15.999s4.664 13.999 13.999 13.999"/><circle cx="9.017" cy="16.42" r="4.673" fill="url(#f355id8)"/><circle cx="19.244" cy="16.943" r="4.244" fill="url(#f355id9)"/><path fill="#fff" d="M10.42 19.224a4.206 4.206 0 1 0 0-8.411a4.206 4.206 0 0 0 0 8.411m11.148.077a4.244 4.244 0 1 0 0-8.489a4.244 4.244 0 0 0 0 8.49"/><path fill="url(#f355idc)" d="M11 18a3 3 0 1 0 0-6a3 3 0 0 0 0 6"/><path fill="url(#f355idd)" d="M21 18a3 3 0 1 0 0-6a3 3 0 0 0 0 6"/><path stroke="url(#f355ide)" stroke-linecap="round" stroke-linejoin="round" d="M6.5 10.5c.333-1 1.6-3 4-3"/><path stroke="url(#f355idf)" stroke-linecap="round" stroke-linejoin="round" d="M25.5 10.5c-.333-1-1.6-3-4-3"/><path stroke="url(#f355idg)" stroke-linecap="round" stroke-width="2" d="M13 23s1-1 3-1s3 1 3 1"/><rect width="4" height="7" x="5" y="20" fill="url(#f355ida)" rx="2"/><rect width="4" height="7" x="6" y="19" fill="url(#f355idb)" rx="2"/></g><defs><radialGradient id="f355id0" cx="0" cy="0" r="1" gradientTransform="rotate(132.839 10.786 10.065)scale(37.5033)" gradientUnits="userSpaceOnUse"><stop stop-color="#fff478"/><stop offset=".475" stop-color="#ffb02e"/><stop offset="1" stop-color="#f70a8d"/></radialGradient><radialGradient id="f355id1" cx="0" cy="0" r="1" gradientTransform="rotate(131.878 10.74 10.193)scale(38.9487)" gradientUnits="userSpaceOnUse"><stop stop-color="#fff478"/><stop offset=".475" stop-color="#ffb02e"/><stop offset="1" stop-color="#f70a8d"/></radialGradient><radialGradient id="f355id2" cx="0" cy="0" r="1" gradientTransform="rotate(101.31 2.876 12.808)scale(17.8466 22.8581)" gradientUnits="userSpaceOnUse"><stop offset=".788" stop-color="#f59639" stop-opacity="0"/><stop offset=".973" stop-color="#ff7dce"/></radialGradient><radialGradient id="f355id3" cx="0" cy="0" r="1" gradientTransform="matrix(-29 29 -29 -29 18 14)" gradientUnits="userSpaceOnUse"><stop offset=".315" stop-opacity="0"/><stop offset="1"/></radialGradient><radialGradient id="f355id4" cx="0" cy="0" r="1" gradientTransform="rotate(77.692 -2.555 18.434)scale(28.1469)" gradientUnits="userSpaceOnUse"><stop offset=".508" stop-color="#7d6133" stop-opacity="0"/><stop offset="1" stop-color="#715b32"/></radialGradient><radialGradient id="f355id5" cx="0" cy="0" r="1" gradientTransform="matrix(7.5 10.99996 -7.97335 5.4364 16.5 16.5)" gradientUnits="userSpaceOnUse"><stop stop-color="#ffb849"/><stop offset="1" stop-color="#ffb847" stop-opacity="0"/></radialGradient><radialGradient id="f355id6" cx="0" cy="0" r="1" gradientTransform="matrix(11.49998 2 -2 11.49998 20.5 18)" gradientUnits="userSpaceOnUse"><stop stop-color="#ffa64b"/><stop offset=".9" stop-color="#ffae46" stop-opacity="0"/></radialGradient><radialGradient id="f355id7" cx="0" cy="0" r="1" gradientTransform="rotate(43.971 -9.827 29.173)scale(59.0529)" gradientUnits="userSpaceOnUse"><stop offset=".185" stop-opacity="0"/><stop offset="1" stop-opacity="0.4"/></radialGradient><radialGradient id="f355id8" cx="0" cy="0" r="1" gradientTransform="rotate(135 3.678 9.013)scale(9.10579 4.71285)" gradientUnits="userSpaceOnUse"><stop stop-color="#392108"/><stop offset="1" stop-color="#c87928" stop-opacity="0"/></radialGradient><radialGradient id="f355id9" cx="0" cy="0" r="1" gradientTransform="rotate(135 8.447 11.49)scale(7.66968 4.32966)" gradientUnits="userSpaceOnUse"><stop stop-color="#392108"/><stop offset="1" stop-color="#c87928" stop-opacity="0"/></radialGradient><radialGradient id="f355ida" cx="0" cy="0" r="1" gradientTransform="matrix(-1.49999 5.5 -2.42653 -.66177 7.75 21.25)" gradientUnits="userSpaceOnUse"><stop stop-color="#392108"/><stop offset="1" stop-color="#c87928" stop-opacity="0"/></radialGradient><radialGradient id="f355idb" cx="0" cy="0" r="1" gradientTransform="rotate(105.285 -2.707 13.222)scale(7.58655 2.95188)" gradientUnits="userSpaceOnUse"><stop stop-color="#5c98ff"/><stop offset=".806" stop-color="#3d5bf1"/><stop offset=".962" stop-color="#6065ca"/></radialGradient><linearGradient id="f355idc" x1="16.5" x2="15.5" y1="11" y2="18" gradientUnits="userSpaceOnUse"><stop stop-color="#553b3e"/><stop offset="1" stop-color="#3d2432"/></linearGradient><linearGradient id="f355idd" x1="16.5" x2="15.5" y1="11" y2="18" gradientUnits="userSpaceOnUse"><stop stop-color="#553b3e"/><stop offset="1" stop-color="#3d2432"/></linearGradient><linearGradient id="f355ide" x1="6.833" x2="6.833" y1="11.4" y2="9.6" gradientUnits="userSpaceOnUse"><stop offset=".03" stop-color="#524049"/><stop offset="1" stop-color="#4a2c42"/></linearGradient><linearGradient id="f355idf" x1="25.167" x2="25.167" y1="11.4" y2="9.6" gradientUnits="userSpaceOnUse"><stop offset=".03" stop-color="#524049"/><stop offset="1" stop-color="#4a2c42"/></linearGradient><linearGradient id="f355idg" x1="16" x2="16" y1="20" y2="22" gradientUnits="userSpaceOnUse"><stop stop-color="#4f3c43"/><stop offset="1" stop-color="#512756"/></linearGradient><clipPath id="f355idh"><path fill="#fff" d="M0 0h32v32H0z"/></clipPath></defs></g></svg>', ve = '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><g fill="none"><g clip-path="url(#f23idf)"><path fill="url(#f23id0)" d="M15.999 29.998c9.334 0 13.999-6.268 13.999-14c0-7.73-4.665-13.998-14-13.998C6.665 2 2 8.268 2 15.999s4.664 13.999 13.999 13.999"/><path fill="url(#f23id1)" d="M15.999 29.998c9.334 0 13.999-6.268 13.999-14c0-7.73-4.665-13.998-14-13.998C6.665 2 2 8.268 2 15.999s4.664 13.999 13.999 13.999"/><path fill="url(#f23id2)" d="M15.999 29.998c9.334 0 13.999-6.268 13.999-14c0-7.73-4.665-13.998-14-13.998C6.665 2 2 8.268 2 15.999s4.664 13.999 13.999 13.999"/><path fill="url(#f23id3)" fill-opacity="0.6" d="M15.999 29.998c9.334 0 13.999-6.268 13.999-14c0-7.73-4.665-13.998-14-13.998C6.665 2 2 8.268 2 15.999s4.664 13.999 13.999 13.999"/><path fill="url(#f23id4)" d="M15.999 29.998c9.334 0 13.999-6.268 13.999-14c0-7.73-4.665-13.998-14-13.998C6.665 2 2 8.268 2 15.999s4.664 13.999 13.999 13.999"/><path fill="url(#f23id5)" d="M15.999 29.998c9.334 0 13.999-6.268 13.999-14c0-7.73-4.665-13.998-14-13.998C6.665 2 2 8.268 2 15.999s4.664 13.999 13.999 13.999"/><path fill="url(#f23id6)" d="M15.999 29.998c9.334 0 13.999-6.268 13.999-14c0-7.73-4.665-13.998-14-13.998C6.665 2 2 8.268 2 15.999s4.664 13.999 13.999 13.999"/><path fill="url(#f23id7)" d="M15.999 29.998c9.334 0 13.999-6.268 13.999-14c0-7.73-4.665-13.998-14-13.998C6.665 2 2 8.268 2 15.999s4.664 13.999 13.999 13.999"/><circle cx="9" cy="18" r="5" fill="url(#f23id8)"/><circle cx="19.5" cy="18.5" r="4.5" fill="url(#f23id9)"/><path fill="#fff" d="M10.5 21a4.5 4.5 0 1 0 0-9a4.5 4.5 0 0 0 0 9m11 0a4.5 4.5 0 1 0 0-9a4.5 4.5 0 0 0 0 9"/><path fill="url(#f23ida)" d="M12 19a2 2 0 1 0 0-4a2 2 0 0 0 0 4"/><path fill="url(#f23idb)" d="M20 19a2 2 0 1 0 0-4a2 2 0 0 0 0 4"/><path stroke="url(#f23idc)" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10.25 10.25s.75 3 4 3"/><path stroke="url(#f23idd)" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21.75 10.25s-.75 3-4 3"/><path stroke="url(#f23ide)" stroke-linecap="round" stroke-width="2" d="M12 25c.333-.667 1.6-2 4-2s3.667 1.333 4 2"/></g><defs><radialGradient id="f23id0" cx="0" cy="0" r="1" gradientTransform="rotate(132.839 10.786 10.065)scale(37.5033)" gradientUnits="userSpaceOnUse"><stop stop-color="#fff478"/><stop offset=".475" stop-color="#ffb02e"/><stop offset="1" stop-color="#f70a8d"/></radialGradient><radialGradient id="f23id1" cx="0" cy="0" r="1" gradientTransform="rotate(131.878 10.74 10.193)scale(38.9487)" gradientUnits="userSpaceOnUse"><stop stop-color="#fff478"/><stop offset=".475" stop-color="#ffb02e"/><stop offset="1" stop-color="#f70a8d"/></radialGradient><radialGradient id="f23id2" cx="0" cy="0" r="1" gradientTransform="rotate(101.31 2.876 12.808)scale(17.8466 22.8581)" gradientUnits="userSpaceOnUse"><stop offset=".788" stop-color="#f59639" stop-opacity="0"/><stop offset=".973" stop-color="#ff7dce"/></radialGradient><radialGradient id="f23id3" cx="0" cy="0" r="1" gradientTransform="matrix(-29 29 -29 -29 18 14)" gradientUnits="userSpaceOnUse"><stop offset=".315" stop-opacity="0"/><stop offset="1"/></radialGradient><radialGradient id="f23id4" cx="0" cy="0" r="1" gradientTransform="rotate(77.692 -2.555 18.434)scale(28.1469)" gradientUnits="userSpaceOnUse"><stop offset=".508" stop-color="#7d6133" stop-opacity="0"/><stop offset="1" stop-color="#715b32"/></radialGradient><radialGradient id="f23id5" cx="0" cy="0" r="1" gradientTransform="matrix(7.5 10.99996 -7.97335 5.4364 16.5 16.5)" gradientUnits="userSpaceOnUse"><stop stop-color="#ffb849"/><stop offset="1" stop-color="#ffb847" stop-opacity="0"/></radialGradient><radialGradient id="f23id6" cx="0" cy="0" r="1" gradientTransform="matrix(11.49998 2 -2 11.49998 20.5 18)" gradientUnits="userSpaceOnUse"><stop stop-color="#ffa64b"/><stop offset=".9" stop-color="#ffae46" stop-opacity="0"/></radialGradient><radialGradient id="f23id7" cx="0" cy="0" r="1" gradientTransform="rotate(43.971 -9.827 29.173)scale(59.0529)" gradientUnits="userSpaceOnUse"><stop offset=".185" stop-opacity="0"/><stop offset="1" stop-opacity="0.4"/></radialGradient><radialGradient id="f23id8" cx="0" cy="0" r="1" gradientTransform="rotate(135 3.522 9.725)scale(9.74236 5.04232)" gradientUnits="userSpaceOnUse"><stop stop-color="#392108"/><stop offset="1" stop-color="#c87928" stop-opacity="0"/></radialGradient><radialGradient id="f23id9" cx="0" cy="0" r="1" gradientTransform="matrix(-5.75 5.75 -3.24597 -3.24597 23 15)" gradientUnits="userSpaceOnUse"><stop stop-color="#392108"/><stop offset="1" stop-color="#c87928" stop-opacity="0"/></radialGradient><linearGradient id="f23ida" x1="20.615" x2="19.927" y1="15" y2="19.03" gradientUnits="userSpaceOnUse"><stop stop-color="#553b3e"/><stop offset="1" stop-color="#3d2432"/></linearGradient><linearGradient id="f23idb" x1="20.615" x2="19.927" y1="15" y2="19.03" gradientUnits="userSpaceOnUse"><stop stop-color="#553b3e"/><stop offset="1" stop-color="#3d2432"/></linearGradient><linearGradient id="f23idc" x1="11.5" x2="11.5" y1="10" y2="11.5" gradientUnits="userSpaceOnUse"><stop offset=".03" stop-color="#524049"/><stop offset="1" stop-color="#4a2c42"/></linearGradient><linearGradient id="f23idd" x1="20.5" x2="20.5" y1="10" y2="11.5" gradientUnits="userSpaceOnUse"><stop offset=".03" stop-color="#524049"/><stop offset="1" stop-color="#4a2c42"/></linearGradient><linearGradient id="f23ide" x1="16" x2="16" y1="22" y2="24" gradientUnits="userSpaceOnUse"><stop stop-color="#4f3c43"/><stop offset="1" stop-color="#512756"/></linearGradient><clipPath id="f23idf"><path fill="#fff" d="M0 0h32v32H0z"/></clipPath></defs></g></svg>', ye = '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><g fill="none"><circle cx="12.675" cy="27.064" r="2.5" fill="url(#f405id6)"/><circle cx="12.675" cy="27.064" r="2.5" fill="url(#f405id0)"/><circle cx="12.675" cy="27.064" r="2.5" fill="url(#f405id1)"/><circle cx="19.675" cy="27.064" r="2.5" fill="url(#f405id7)"/><circle cx="19.675" cy="27.064" r="2.5" fill="url(#f405id2)"/><circle cx="19.675" cy="27.064" r="2.5" fill="url(#f405id3)"/><g filter="url(#f405idc)"><path fill="url(#f405id8)" d="M10.175 4.123a2.5 2.5 0 0 1 5 0v15.969a2.5 2.5 0 1 1-5 0z"/><path fill="url(#f405id4)" d="M10.175 4.123a2.5 2.5 0 0 1 5 0v15.969a2.5 2.5 0 1 1-5 0z"/></g><g filter="url(#f405idd)"><path fill="url(#f405id9)" d="M17.175 4.123a2.5 2.5 0 0 1 5 0v15.969a2.5 2.5 0 1 1-5 0z"/><path fill="url(#f405id5)" d="M17.175 4.123a2.5 2.5 0 0 1 5 0v15.969a2.5 2.5 0 1 1-5 0z"/></g><g filter="url(#f405ide)"><path stroke="url(#f405ida)" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.347 20.53V5.341"/></g><g filter="url(#f405idf)"><path stroke="url(#f405idb)" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.347 20.53V5.341"/></g><defs><radialGradient id="f405id0" cx="0" cy="0" r="1" gradientTransform="matrix(1.53125 -1.75 1.5386 1.34628 13.643 26.716)" gradientUnits="userSpaceOnUse"><stop offset=".234" stop-color="#ff5878"/><stop offset="1" stop-color="#ff5878" stop-opacity="0"/></radialGradient><radialGradient id="f405id1" cx="0" cy="0" r="1" gradientTransform="matrix(2.5 1.21874 -3.2999 6.7691 10.175 25.154)" gradientUnits="userSpaceOnUse"><stop stop-color="#c8404b"/><stop offset="1" stop-color="#c8404b" stop-opacity="0"/></radialGradient><radialGradient id="f405id2" cx="0" cy="0" r="1" gradientTransform="matrix(1.53125 -1.75 1.5386 1.34628 20.644 26.716)" gradientUnits="userSpaceOnUse"><stop offset=".234" stop-color="#ff5878"/><stop offset="1" stop-color="#ff5878" stop-opacity="0"/></radialGradient><radialGradient id="f405id3" cx="0" cy="0" r="1" gradientTransform="matrix(2.5 1.21874 -3.2999 6.7691 17.175 25.154)" gradientUnits="userSpaceOnUse"><stop stop-color="#c8404b"/><stop offset="1" stop-color="#c8404b" stop-opacity="0"/></radialGradient><radialGradient id="f405id4" cx="0" cy="0" r="1" gradientTransform="rotate(148.241 6.912 3.671)scale(3.08727 2.21529)" gradientUnits="userSpaceOnUse"><stop stop-color="#ff5960"/><stop offset="1" stop-color="#ff5960" stop-opacity="0"/></radialGradient><radialGradient id="f405id5" cx="0" cy="0" r="1" gradientTransform="rotate(148.241 10.412 4.667)scale(3.08727 2.21529)" gradientUnits="userSpaceOnUse"><stop stop-color="#ff5960"/><stop offset="1" stop-color="#ff5960" stop-opacity="0"/></radialGradient><linearGradient id="f405id6" x1="12.675" x2="12.675" y1="25.779" y2="29.564" gradientUnits="userSpaceOnUse"><stop stop-color="#ff0b38"/><stop offset="1" stop-color="#f62093"/></linearGradient><linearGradient id="f405id7" x1="19.675" x2="19.675" y1="25.779" y2="29.564" gradientUnits="userSpaceOnUse"><stop stop-color="#ff0b38"/><stop offset="1" stop-color="#f62093"/></linearGradient><linearGradient id="f405id8" x1="12.675" x2="12.675" y1="2.098" y2="22.592" gradientUnits="userSpaceOnUse"><stop stop-color="#ed1f28"/><stop offset="1" stop-color="#f41585"/></linearGradient><linearGradient id="f405id9" x1="19.675" x2="19.675" y1="2.098" y2="22.592" gradientUnits="userSpaceOnUse"><stop stop-color="#ed1f28"/><stop offset="1" stop-color="#f41585"/></linearGradient><linearGradient id="f405ida" x1="14.041" x2="18.666" y1="22.12" y2="20.92" gradientUnits="userSpaceOnUse"><stop stop-color="#ff4282"/><stop offset="1" stop-color="#ff3e59"/></linearGradient><linearGradient id="f405idb" x1="21.041" x2="25.666" y1="22.12" y2="20.92" gradientUnits="userSpaceOnUse"><stop stop-color="#ff4282"/><stop offset="1" stop-color="#ff3e59"/></linearGradient><filter id="f405idc" width="5.75" height="21.719" x="10.175" y="1.623" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dx=".75" dy=".75"/><feGaussianBlur stdDeviation=".75"/><feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic"/><feColorMatrix values="0 0 0 0 0.74902 0 0 0 0 0.160784 0 0 0 0 0.301961 0 0 0 1 0"/><feBlend in2="shape" result="effect1_innerShadow_18590_1778"/></filter><filter id="f405idd" width="5.75" height="21.719" x="17.175" y="1.623" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dx=".75" dy=".75"/><feGaussianBlur stdDeviation=".75"/><feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic"/><feColorMatrix values="0 0 0 0 0.74902 0 0 0 0 0.160784 0 0 0 0 0.301961 0 0 0 1 0"/><feBlend in2="shape" result="effect1_innerShadow_18590_1778"/></filter><filter id="f405ide" width="5" height="20.188" x="10.847" y="2.842" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_18590_1778" stdDeviation=".75"/></filter><filter id="f405idf" width="5" height="20.188" x="17.847" y="2.842" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_18590_1778" stdDeviation=".75"/></filter></defs></g></svg>', _e = '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><g fill="none"><circle cx="15.688" cy="27.447" r="2.5" fill="url(#f2184id0)"/><circle cx="15.688" cy="27.447" r="2.5" fill="url(#f2184id4)"/><circle cx="15.688" cy="27.447" r="2.5" fill="url(#f2184id5)"/><g filter="url(#f2184id6)"><path fill="url(#f2184id1)" fill-rule="evenodd" d="M15.413 7.126c-.946.225-1.45.655-1.736 1.05c-.32.44-.458.965-.458 1.407a2.5 2.5 0 1 1-5 0c0-2.793 1.716-6.34 6.134-7.344l.098-.02c2.888-.535 5.41.255 7.18 1.984c1.703 1.661 2.51 3.989 2.51 6.255c0 2.253-.647 4.093-2.117 5.654c-1.012 1.074-2.355 1.942-3.852 2.762v1.99a2.5 2.5 0 1 1-5 0v-3.5a2.5 2.5 0 0 1 1.362-2.225c2.088-1.068 3.207-1.773 3.85-2.455c.483-.513.757-1.072.757-2.226c0-1.14-.41-2.1-1.002-2.677c-.516-.504-1.347-.898-2.726-.655" clip-rule="evenodd"/></g><g stroke-linecap="round" stroke-linejoin="round" stroke-width="2" filter="url(#f2184id7)"><path stroke="url(#f2184id2)" d="M11.282 9.364c0-1.828 1.094-4.203 4.187-4.906c4.297-.797 6.735 2.375 6.735 5.781s-1.844 4.797-5.969 6.906v2.704"/><path stroke="url(#f2184id3)" d="M11.282 9.364c0-1.828 1.094-4.203 4.187-4.906c4.297-.797 6.735 2.375 6.735 5.781s-1.844 4.797-5.969 6.906v2.704"/></g><defs><linearGradient id="f2184id0" x1="15.688" x2="15.688" y1="26.161" y2="29.947" gradientUnits="userSpaceOnUse"><stop stop-color="#ff0b38"/><stop offset="1" stop-color="#f62093"/></linearGradient><linearGradient id="f2184id1" x1="16.18" x2="16.18" y1="2.537" y2="23.365" gradientUnits="userSpaceOnUse"><stop stop-color="#ed1f28"/><stop offset="1" stop-color="#f41585"/></linearGradient><linearGradient id="f2184id2" x1="22.547" x2="17.86" y1="7.224" y2="11.099" gradientUnits="userSpaceOnUse"><stop offset=".103" stop-color="#ff5867"/><stop offset="1" stop-color="#ff5867" stop-opacity="0"/></linearGradient><linearGradient id="f2184id3" x1="18.86" x2="22.204" y1="21.474" y2="13.724" gradientUnits="userSpaceOnUse"><stop stop-color="#ff3c80"/><stop offset="1" stop-color="#ff3c80" stop-opacity="0"/></linearGradient><radialGradient id="f2184id4" cx="0" cy="0" r="1" gradientTransform="matrix(1.53125 -1.75 1.5386 1.34627 16.657 27.099)" gradientUnits="userSpaceOnUse"><stop offset=".234" stop-color="#ff5878"/><stop offset="1" stop-color="#ff5878" stop-opacity="0"/></radialGradient><radialGradient id="f2184id5" cx="0" cy="0" r="1" gradientTransform="matrix(2.5 1.21874 -3.2999 6.7691 13.188 25.536)" gradientUnits="userSpaceOnUse"><stop stop-color="#c8404b"/><stop offset="1" stop-color="#c8404b" stop-opacity="0"/></radialGradient><filter id="f2184id6" width="16.672" height="22.061" x="8.219" y="2.053" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dx=".75" dy=".75"/><feGaussianBlur stdDeviation=".75"/><feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic"/><feColorMatrix values="0 0 0 0 0.8 0 0 0 0 0.180392 0 0 0 0 0.258824 0 0 0 1 0"/><feBlend in2="shape" result="effect1_innerShadow_18590_1806"/></filter><filter id="f2184id7" width="15.922" height="20.515" x="8.782" y="1.834" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_18590_1806" stdDeviation=".75"/></filter></defs></g></svg>', Ce = '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><g fill="none"><g filter="url(#f241id0)"><rect width="27.875" height="27.875" x="1.879" y="2.313" fill="url(#f241id5)" rx="3.6"/><rect width="27.875" height="27.875" x="1.879" y="2.313" fill="url(#f241id8)" rx="3.6"/></g><g filter="url(#f241id1)"><path stroke="url(#f241id6)" stroke-linecap="round" stroke-width="1.5" d="M28.067 4.813v22.875"/></g><g filter="url(#f241id2)"><path stroke="url(#f241id7)" stroke-linecap="round" stroke-width="1.5" d="M5.343 4.125h21.782"/></g><g filter="url(#f241id3)"><path fill="#53bb7d" d="M13.476 23.25a1.5 1.5 0 0 1-1.06-.43l-5.744-5.642a1.453 1.453 0 0 1 0-2.08a1.517 1.517 0 0 1 2.118 0l4.686 4.601L23.677 9.681a1.517 1.517 0 0 1 2.118 0a1.45 1.45 0 0 1 0 2.08l-11.26 11.058a1.5 1.5 0 0 1-1.06.431"/></g><g filter="url(#f241id4)"><path fill="#fcf2ff" d="M13.476 23.25a1.5 1.5 0 0 1-1.06-.43l-5.744-5.642a1.453 1.453 0 0 1 0-2.08a1.517 1.517 0 0 1 2.118 0l4.616 4.532a.1.1 0 0 0 .14 0l10.131-9.95a1.517 1.517 0 0 1 2.118 0a1.45 1.45 0 0 1 0 2.08l-11.26 11.06c-.292.287-.676.43-1.06.43"/></g><defs><filter id="f241id0" width="30.375" height="29.375" x="1.379" y="1.313" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dx="2" dy="-1"/><feGaussianBlur stdDeviation="1.5"/><feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic"/><feColorMatrix values="0 0 0 0 0.176471 0 0 0 0 0.521569 0 0 0 0 0.309804 0 0 0 1 0"/><feBlend in2="shape" result="effect1_innerShadow_18590_1991"/><feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dy="-1"/><feGaussianBlur stdDeviation="1.5"/><feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic"/><feColorMatrix values="0 0 0 0 0.25098 0 0 0 0 0.490196 0 0 0 0 0.462745 0 0 0 1 0"/><feBlend in2="effect1_innerShadow_18590_1991" result="effect2_innerShadow_18590_1991"/><feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dx="-.5" dy=".5"/><feGaussianBlur stdDeviation=".5"/><feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic"/><feColorMatrix values="0 0 0 0 0.356863 0 0 0 0 0.905882 0 0 0 0 0.560784 0 0 0 1 0"/><feBlend in2="effect2_innerShadow_18590_1991" result="effect3_innerShadow_18590_1991"/></filter><filter id="f241id1" width="5.5" height="28.375" x="25.317" y="2.063" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_18590_1991" stdDeviation="1"/></filter><filter id="f241id2" width="27.281" height="5.5" x="2.593" y="1.375" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_18590_1991" stdDeviation="1"/></filter><filter id="f241id3" width="22" height="16" x="5.234" y="8.25" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_18590_1991" stdDeviation=".5"/></filter><filter id="f241id4" width="20.8" height="14.8" x="5.834" y="8.85" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dx="-.4" dy=".4"/><feGaussianBlur stdDeviation=".375"/><feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic"/><feColorMatrix values="0 0 0 0 0.913725 0 0 0 0 0.886275 0 0 0 0 0.968627 0 0 0 1 0"/><feBlend in2="shape" result="effect1_innerShadow_18590_1991"/><feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dx=".4" dy="-.4"/><feGaussianBlur stdDeviation=".2"/><feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic"/><feColorMatrix values="0 0 0 0 1 0 0 0 0 0.988235 0 0 0 0 1 0 0 0 1 0"/><feBlend in2="effect1_innerShadow_18590_1991" result="effect2_innerShadow_18590_1991"/></filter><linearGradient id="f241id5" x1="15.817" x2="15.817" y1="5.887" y2="39.14" gradientUnits="userSpaceOnUse"><stop stop-color="#5ad98f"/><stop offset="1" stop-color="#51c685"/></linearGradient><linearGradient id="f241id6" x1="28.567" x2="28.567" y1="4.813" y2="27.688" gradientUnits="userSpaceOnUse"><stop stop-color="#74fca8"/><stop offset="1" stop-color="#61db90"/></linearGradient><linearGradient id="f241id7" x1="28.281" x2="2.749" y1="4.375" y2="4.375" gradientUnits="userSpaceOnUse"><stop stop-color="#66f39d"/><stop offset="1" stop-color="#60e496"/></linearGradient><radialGradient id="f241id8" cx="0" cy="0" r="1" gradientTransform="matrix(-1.56249 1.46876 -1.71548 -1.82495 27.536 4.406)" gradientUnits="userSpaceOnUse"><stop stop-color="#80ffb3"/><stop offset="1" stop-color="#80ffb3" stop-opacity="0"/></radialGradient></defs></g></svg>', Be = '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><g fill="none"><g filter="url(#f342id4)"><path fill="url(#f342id0)" d="M4.435 2.809A1.55 1.55 0 0 0 2.243 5L13.41 16.169a.25.25 0 0 1 0 .354L2.243 27.692a1.55 1.55 0 1 0 2.192 2.192l11.168-11.169a.25.25 0 0 1 .354 0l11.168 11.169a1.55 1.55 0 0 0 2.193-2.192l-11.17-11.17a.25.25 0 0 1 0-.353l11.17-11.168a1.55 1.55 0 0 0-2.192-2.192l-11.17 11.168a.25.25 0 0 1-.353 0z"/><path fill="url(#f342id1)" d="M4.435 2.809A1.55 1.55 0 0 0 2.243 5L13.41 16.169a.25.25 0 0 1 0 .354L2.243 27.692a1.55 1.55 0 1 0 2.192 2.192l11.168-11.169a.25.25 0 0 1 .354 0l11.168 11.169a1.55 1.55 0 0 0 2.193-2.192l-11.17-11.17a.25.25 0 0 1 0-.353l11.17-11.168a1.55 1.55 0 0 0-2.192-2.192l-11.17 11.168a.25.25 0 0 1-.353 0z"/></g><path fill="url(#f342id7)" d="M4.435 2.809A1.55 1.55 0 0 0 2.243 5L13.41 16.169a.25.25 0 0 1 0 .354L2.243 27.692a1.55 1.55 0 1 0 2.192 2.192l11.168-11.169a.25.25 0 0 1 .354 0l11.168 11.169a1.55 1.55 0 0 0 2.193-2.192l-11.17-11.17a.25.25 0 0 1 0-.353l11.17-11.168a1.55 1.55 0 0 0-2.192-2.192l-11.17 11.168a.25.25 0 0 1-.353 0z"/><g filter="url(#f342id5)"><path stroke="url(#f342id2)" stroke-linecap="round" d="M3.685 3.558L15.2 15.074m13.367 13.368L17.68 17.555"/></g><g filter="url(#f342id6)"><path stroke="url(#f342id3)" stroke-linecap="round" d="m27.832 4.289l-10.78 10.785M3.685 28.442L14.57 17.555"/></g><defs><linearGradient id="f342id0" x1="15.78" x2="15.78" y1="2.355" y2="30.338" gradientUnits="userSpaceOnUse"><stop stop-color="#e02c6b"/><stop offset="1" stop-color="#ff354e"/></linearGradient><linearGradient id="f342id1" x1="6.29" x2="14.721" y1="6.699" y2="15.172" gradientUnits="userSpaceOnUse"><stop stop-color="#ee3d81"/><stop offset="1" stop-color="#ee3d81" stop-opacity="0"/></linearGradient><linearGradient id="f342id2" x1="3.314" x2="28.986" y1="3.885" y2="29.499" gradientUnits="userSpaceOnUse"><stop stop-color="#ff679b"/><stop offset="1" stop-color="#ff7171"/></linearGradient><linearGradient id="f342id3" x1="28.939" x2="6.319" y1="3.885" y2="26.505" gradientUnits="userSpaceOnUse"><stop stop-color="#ef4b8b"/><stop offset="1" stop-color="#fe4753"/></linearGradient><filter id="f342id4" width="28.483" height="27.983" x="1.789" y="2.355" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dx=".5"/><feGaussianBlur stdDeviation=".5"/><feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic"/><feColorMatrix values="0 0 0 0 0.776471 0 0 0 0 0.219608 0 0 0 0 0.411765 0 0 0 1 0"/><feBlend in2="shape" result="effect1_innerShadow_18590_2030"/></filter><filter id="f342id5" width="27.383" height="27.383" x="2.435" y="2.308" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_18590_2030" stdDeviation=".375"/></filter><filter id="f342id6" width="26.647" height="26.652" x="2.435" y="3.039" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_18590_2030" stdDeviation=".375"/></filter><radialGradient id="f342id7" cx="0" cy="0" r="1" gradientTransform="rotate(134.145 13.617 7.88)scale(1.36671)" gradientUnits="userSpaceOnUse"><stop stop-color="#ff75a7"/><stop offset="1" stop-color="#ff75a7" stop-opacity="0"/></radialGradient></defs></g></svg>', Se = '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><g fill="none"><g filter="url(#f688id3)"><path fill="url(#f688id0)" d="M21.008 5.317c-2.84.502-5.011 3.856-5.011 3.856s-2.18-3.354-5.012-3.856c-7.012-1.235-9.903 4.93-8.732 9.518c1.73 6.778 10.053 12.852 12.834 14.73c.55.371 1.27.371 1.83 0c2.791-1.878 11.113-7.952 12.834-14.73c1.16-4.588-1.73-10.753-8.743-9.518"/><path fill="url(#f688id6)" d="M21.008 5.317c-2.84.502-5.011 3.856-5.011 3.856s-2.18-3.354-5.012-3.856c-7.012-1.235-9.903 4.93-8.732 9.518c1.73 6.778 10.053 12.852 12.834 14.73c.55.371 1.27.371 1.83 0c2.791-1.878 11.113-7.952 12.834-14.73c1.16-4.588-1.73-10.753-8.743-9.518"/><path fill="url(#f688id7)" d="M21.008 5.317c-2.84.502-5.011 3.856-5.011 3.856s-2.18-3.354-5.012-3.856c-7.012-1.235-9.903 4.93-8.732 9.518c1.73 6.778 10.053 12.852 12.834 14.73c.55.371 1.27.371 1.83 0c2.791-1.878 11.113-7.952 12.834-14.73c1.16-4.588-1.73-10.753-8.743-9.518"/></g><g filter="url(#f688id4)"><path fill="url(#f688id1)" d="M15.957 14.762V9.486c.728-.905 2.857-2.157 3.831-2.67c-2.337 2.136-3.528 6.187-3.831 7.946"/></g><g filter="url(#f688id5)"><path fill="url(#f688id2)" d="M15.957 14.762V9.486c-.729-.905-2.858-2.157-3.832-2.67c2.337 2.136 3.528 6.187 3.832 7.946"/></g><defs><linearGradient id="f688id0" x1="16" x2="16" y1="5.157" y2="29.843" gradientUnits="userSpaceOnUse"><stop stop-color="#ff3f67"/><stop offset="1" stop-color="#f83ba1"/></linearGradient><linearGradient id="f688id1" x1="15.391" x2="18.5" y1="12.595" y2="8.669" gradientUnits="userSpaceOnUse"><stop stop-color="#fe375c"/><stop offset="1" stop-color="#fe375c" stop-opacity="0"/></linearGradient><linearGradient id="f688id2" x1="16.522" x2="13.413" y1="12.595" y2="8.669" gradientUnits="userSpaceOnUse"><stop offset=".161" stop-color="#ff5573"/><stop offset="1" stop-color="#ff5573" stop-opacity="0"/></linearGradient><filter id="f688id3" width="28.6" height="25.886" x="2" y="4.557" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dx=".6" dy="-.6"/><feGaussianBlur stdDeviation=".625"/><feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic"/><feColorMatrix values="0 0 0 0 0.807843 0 0 0 0 0.176471 0 0 0 0 0.415686 0 0 0 1 0"/><feBlend in2="shape" result="effect1_innerShadow_18_4033"/><feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dx=".6" dy=".6"/><feGaussianBlur stdDeviation=".625"/><feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic"/><feColorMatrix values="0 0 0 0 0.796078 0 0 0 0 0.207843 0 0 0 0 0.301961 0 0 0 1 0"/><feBlend in2="effect1_innerShadow_18_4033" result="effect2_innerShadow_18_4033"/></filter><filter id="f688id4" width="4.831" height="8.945" x="15.457" y="6.316" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_18_4033" stdDeviation=".25"/></filter><filter id="f688id5" width="4.831" height="8.945" x="11.625" y="6.316" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_18_4033" stdDeviation=".25"/></filter><radialGradient id="f688id6" cx="0" cy="0" r="1" gradientTransform="rotate(-25.71 45.618 -13.992)scale(20.7042 22.7813)" gradientUnits="userSpaceOnUse"><stop offset=".891" stop-color="#ff657c" stop-opacity="0"/><stop offset="1" stop-color="#ff657c"/></radialGradient><radialGradient id="f688id7" cx="0" cy="0" r="1" gradientTransform="rotate(-126.248 9.625 .57)scale(4.35524 1.65175)" gradientUnits="userSpaceOnUse"><stop stop-color="#ff5772"/><stop offset="1" stop-color="#ff5772" stop-opacity="0"/></radialGradient></defs></g></svg>', Ue = '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><g fill="none"><g filter="url(#f2480idq)"><path fill="url(#f2480idd)" d="M12.268 5.158a3.289 3.289 0 1 1 6.577 0v3.785q.001.483-.073.966q-.029.176-.047.352c-.036.37.008.854.26 1.18l-.602.58a9.34 9.34 0 0 1 5.081 8.326a9.4 9.4 0 0 1-.432 2.825l-.997 6.507h-8.101v-.003c-5.003-.108-9.017-3.37-9.017-9.33c0-3.502 1.677-6.322 4.214-7.912l-.006-.005c.173-.12.377-.243.595-.374h.002c.72-.432 1.6-.96 2.063-1.822c.403-.747.48-1.96.48-2.523h.003z"/></g><path fill="url(#f2480id0)" d="M12.268 5.158a3.289 3.289 0 1 1 6.577 0v3.785q.001.483-.073.966q-.029.176-.047.352c-.036.37.008.854.26 1.18l-.602.58a9.34 9.34 0 0 1 5.081 8.326a9.4 9.4 0 0 1-.432 2.825l-.997 6.507h-8.101v-.003c-5.003-.108-9.017-3.37-9.017-9.33c0-3.502 1.677-6.322 4.214-7.912l-.006-.005c.173-.12.377-.243.595-.374h.002c.72-.432 1.6-.96 2.063-1.822c.403-.747.48-1.96.48-2.523h.003z"/><path fill="url(#f2480id1)" d="M12.268 5.158a3.289 3.289 0 1 1 6.577 0v3.785q.001.483-.073.966q-.029.176-.047.352c-.036.37.008.854.26 1.18l-.602.58a9.34 9.34 0 0 1 5.081 8.326a9.4 9.4 0 0 1-.432 2.825l-.997 6.507h-8.101v-.003c-5.003-.108-9.017-3.37-9.017-9.33c0-3.502 1.677-6.322 4.214-7.912l-.006-.005c.173-.12.377-.243.595-.374h.002c.72-.432 1.6-.96 2.063-1.822c.403-.747.48-1.96.48-2.523h.003z"/><path fill="url(#f2480id2)" d="M12.268 5.158a3.289 3.289 0 1 1 6.577 0v3.785q.001.483-.073.966q-.029.176-.047.352c-.036.37.008.854.26 1.18l-.602.58a9.34 9.34 0 0 1 5.081 8.326a9.4 9.4 0 0 1-.432 2.825l-.997 6.507h-8.101v-.003c-5.003-.108-9.017-3.37-9.017-9.33c0-3.502 1.677-6.322 4.214-7.912l-.006-.005c.173-.12.377-.243.595-.374h.002c.72-.432 1.6-.96 2.063-1.822c.403-.747.48-1.96.48-2.523h.003z"/><path fill="url(#f2480ide)" d="M12.268 5.158a3.289 3.289 0 1 1 6.577 0v3.785q.001.483-.073.966q-.029.176-.047.352c-.036.37.008.854.26 1.18l-.602.58a9.34 9.34 0 0 1 5.081 8.326a9.4 9.4 0 0 1-.432 2.825l-.997 6.507h-8.101v-.003c-5.003-.108-9.017-3.37-9.017-9.33c0-3.502 1.677-6.322 4.214-7.912l-.006-.005c.173-.12.377-.243.595-.374h.002c.72-.432 1.6-.96 2.063-1.822c.403-.747.48-1.96.48-2.523h.003z"/><g filter="url(#f2480idr)"><path fill="url(#f2480idf)" d="M23.679 14.709a2.55 2.55 0 0 0-2.552-2.552h-2.826a2.552 2.552 0 0 0-1.638 4.509a2.557 2.557 0 0 0-.116 3.992a2.55 2.55 0 0 0-.901 1.947v.125c0 .7.28 1.333.736 1.794a2.483 2.483 0 0 0 1.746 4.248h2.804a2.483 2.483 0 0 0 2.15-3.728a2.55 2.55 0 0 0 1.472-2.314v-.125c0-.79-.358-1.496-.922-1.964a2.56 2.56 0 0 0-.587-4.249a2.54 2.54 0 0 0 .634-1.683"/></g><g filter="url(#f2480ids)"><rect width="5.82" height="9.043" x="25.957" y="10.73" fill="url(#f2480idg)" rx="2.91" transform="rotate(90 25.957 10.73)"/><rect width="5.82" height="9.043" x="25.957" y="10.73" fill="url(#f2480id3)" rx="2.91" transform="rotate(90 25.957 10.73)"/></g><g filter="url(#f2480idt)"><rect width="5.664" height="8.861" x="25.657" y="24.015" fill="url(#f2480idh)" rx="2.832" transform="rotate(90 25.657 24.015)"/><rect width="5.664" height="8.861" x="25.657" y="24.015" fill="url(#f2480id4)" rx="2.832" transform="rotate(90 25.657 24.015)"/><rect width="5.664" height="8.861" x="25.657" y="24.015" fill="url(#f2480id5)" rx="2.832" transform="rotate(90 25.657 24.015)"/></g><rect width="5.664" height="8.861" x="25.657" y="24.015" fill="url(#f2480idi)" rx="2.832" transform="rotate(90 25.657 24.015)"/><rect width="5.664" height="8.861" x="25.657" y="24.015" fill="url(#f2480id6)" rx="2.832" transform="rotate(90 25.657 24.015)"/><g filter="url(#f2480idu)"><rect width="5.37" height="1.476" x="19.622" y="25.699" fill="url(#f2480idj)" rx=".738"/></g><rect width="5.964" height="10.159" x="26.955" y="19.735" fill="#c4c4c4" fill-opacity="0.66" rx="2.982" transform="rotate(90 26.955 19.735)"/><g filter="url(#f2480idv)"><rect width="5.964" height="10.159" x="26.955" y="19.735" fill="url(#f2480idk)" rx="2.91" transform="rotate(90 26.955 19.735)"/><rect width="5.964" height="10.159" x="26.955" y="19.735" fill="url(#f2480id7)" rx="2.91" transform="rotate(90 26.955 19.735)"/><rect width="5.964" height="10.159" x="26.955" y="19.735" fill="url(#f2480id8)" rx="2.91" transform="rotate(90 26.955 19.735)"/></g><g filter="url(#f2480idw)"><rect width="6.725" height="1.476" x="19.232" y="21.829" fill="url(#f2480idl)" rx=".738"/></g><g filter="url(#f2480idx)"><rect width="5.833" height="10.114" x="26.909" y="15.285" fill="url(#f2480idm)" rx="2.91" transform="rotate(90 26.91 15.285)"/><rect width="5.833" height="10.114" x="26.909" y="15.285" fill="url(#f2480id9)" rx="2.91" transform="rotate(90 26.91 15.285)"/></g><path fill="url(#f2480ida)" d="M15.556 1.87a3.29 3.29 0 0 0-3.288 3.288v2.553l-.002-.001c0 .562-.078 1.776-.48 2.523c-.465.863-1.344 1.39-2.064 1.821c-.22.132-.424.254-.597.374c.995.797 3.032 2.39 3.082 2.352a363 363 0 0 1 3.484-1.86l-.048-.69a3.29 3.29 0 0 0 3.202-3.287V5.158a3.29 3.29 0 0 0-3.289-3.288"/><path fill="url(#f2480idb)" d="M15.556 1.87a3.29 3.29 0 0 0-3.288 3.288v2.553l-.002-.001c0 .562-.078 1.776-.48 2.523c-.465.863-1.344 1.39-2.064 1.821c-.22.132-.424.254-.597.374c.995.797 3.032 2.39 3.082 2.352a363 363 0 0 1 3.484-1.86l-.048-.69a3.29 3.29 0 0 0 3.202-3.287V5.158a3.29 3.29 0 0 0-3.289-3.288"/><path fill="#ffbf71" d="M13.476 2.611a3.28 3.28 0 0 0-1.208 2.547v.192h1.486a6.4 6.4 0 0 0-.086-1.148l-.017-.091c-.082-.448-.176-.96-.175-1.5"/><path fill="url(#f2480idc)" d="M13.476 2.611a3.28 3.28 0 0 0-1.208 2.547v.192h1.486a6.4 6.4 0 0 0-.086-1.148l-.017-.091c-.082-.448-.176-.96-.175-1.5"/><g filter="url(#f2480idy)"><rect width="6.136" height="2.516" x="18.856" y="11.524" fill="url(#f2480idn)" rx="1.258"/></g><g filter="url(#f2480idz)"><rect width="7.172" height="2.516" x="18.785" y="16" fill="url(#f2480ido)" rx="1.258"/></g><g filter="url(#f2480id10)"><rect width="2.865" height="7.997" x="15.15" y="3.112" fill="url(#f2480idp)" rx="1.433"/></g><defs><radialGradient id="f2480id0" cx="0" cy="0" r="1" gradientTransform="rotate(141.116 9.365 6.03)scale(5.01564 14.8034)" gradientUnits="userSpaceOnUse"><stop stop-color="#ffe34c"/><stop offset="1" stop-color="#ffe34c" stop-opacity="0"/></radialGradient><radialGradient id="f2480id1" cx="0" cy="0" r="1" gradientTransform="rotate(125.191 1.565 10.819)scale(7.43021 5.38256)" gradientUnits="userSpaceOnUse"><stop stop-color="#ffca2e"/><stop offset="1" stop-color="#ffca2e" stop-opacity="0"/></radialGradient><radialGradient id="f2480id2" cx="0" cy="0" r="1" gradientTransform="matrix(-13.53897 8.8789 -15.5384 -23.69368 19.37 18.131)" gradientUnits="userSpaceOnUse"><stop offset=".681" stop-color="#e18e3f" stop-opacity="0"/><stop offset="1" stop-color="#e18e3f"/></radialGradient><radialGradient id="f2480id3" cx="0" cy="0" r="1" gradientTransform="matrix(-1.40872 1.84473 -1.2348 -.94296 31.447 18.303)" gradientUnits="userSpaceOnUse"><stop stop-color="#d98320"/><stop offset="1" stop-color="#d98320" stop-opacity="0"/></radialGradient><radialGradient id="f2480id4" cx="0" cy="0" r="1" gradientTransform="matrix(0 -7.31347 2.78222 0 31.32 31.081)" gradientUnits="userSpaceOnUse"><stop stop-color="#f29545"/><stop offset="1" stop-color="#f29545" stop-opacity="0"/></radialGradient><radialGradient id="f2480id5" cx="0" cy="0" r="1" gradientTransform="matrix(0 -7.4169 1.99096 0 26.65 31.432)" gradientUnits="userSpaceOnUse"><stop stop-color="#da810b"/><stop offset="1" stop-color="#ffb610" stop-opacity="0"/></radialGradient><radialGradient id="f2480id6" cx="0" cy="0" r="1" gradientTransform="matrix(0 -5.60324 8.4227 0 28.488 34.049)" gradientUnits="userSpaceOnUse"><stop stop-color="#e38811"/><stop offset="1" stop-color="#e38811" stop-opacity="0"/></radialGradient><radialGradient id="f2480id7" cx="0" cy="0" r="1" gradientTransform="matrix(0 -8.38517 2.92967 0 32.919 27.836)" gradientUnits="userSpaceOnUse"><stop stop-color="#f29545"/><stop offset="1" stop-color="#f29545" stop-opacity="0"/></radialGradient><radialGradient id="f2480id8" cx="0" cy="0" r="1" gradientTransform="matrix(0 -8.50376 2.09648 0 28.002 28.239)" gradientUnits="userSpaceOnUse"><stop stop-color="#da810b"/><stop offset="1" stop-color="#ffb610" stop-opacity="0"/></radialGradient><radialGradient id="f2480id9" cx="0" cy="0" r="1" gradientTransform="matrix(0 -5.50067 2.44847 0 32.037 23.307)" gradientUnits="userSpaceOnUse"><stop stop-color="#f29545"/><stop offset="1" stop-color="#f29545" stop-opacity="0"/></radialGradient><radialGradient id="f2480ida" cx="0" cy="0" r="1" gradientTransform="matrix(0 6.36013 -2.36143 0 12.537 4.844)" gradientUnits="userSpaceOnUse"><stop stop-color="#f3a52a"/><stop offset="1" stop-color="#f3a52a" stop-opacity="0"/></radialGradient><radialGradient id="f2480idb" cx="0" cy="0" r="1" gradientTransform="matrix(2.32995 2.17252 -3.28739 3.5256 10.68 9.032)" gradientUnits="userSpaceOnUse"><stop stop-color="#cda25e"/><stop offset="1" stop-color="#cda25e" stop-opacity="0"/></radialGradient><radialGradient id="f2480idc" cx="0" cy="0" r="1" gradientTransform="rotate(-168.366 7.22 1.513)scale(1.63946 3.57849)" gradientUnits="userSpaceOnUse"><stop offset=".55" stop-color="#ccb28b" stop-opacity="0"/><stop offset="1" stop-color="#ccb28b"/></radialGradient><linearGradient id="f2480idd" x1="19.254" x2="9.191" y1="6.639" y2="27.827" gradientUnits="userSpaceOnUse"><stop stop-color="#ffca44"/><stop offset="1" stop-color="#f8a528"/></linearGradient><linearGradient id="f2480ide" x1="14.19" x2="14.19" y1="25.562" y2="30.663" gradientUnits="userSpaceOnUse"><stop stop-color="#d8796f" stop-opacity="0"/><stop offset="1" stop-color="#d8796f"/></linearGradient><linearGradient id="f2480idf" x1="20.1" x2="20.1" y1="12.157" y2="25.445" gradientUnits="userSpaceOnUse"><stop stop-color="#d1730b"/><stop offset="1" stop-color="#e27d47"/></linearGradient><linearGradient id="f2480idg" x1="28.867" x2="28.867" y1="10.73" y2="19.774" gradientUnits="userSpaceOnUse"><stop stop-color="#ffdb44"/><stop offset="1" stop-color="#f9a928"/></linearGradient><linearGradient id="f2480idh" x1="28.488" x2="28.488" y1="24.791" y2="32.876" gradientUnits="userSpaceOnUse"><stop stop-color="#ffdb44"/><stop offset="1" stop-color="#f9a928"/></linearGradient><linearGradient id="f2480idi" x1="31.904" x2="30.072" y1="28.446" y2="28.446" gradientUnits="userSpaceOnUse"><stop stop-color="#dc7c6a"/><stop offset="1" stop-color="#dc7c6a" stop-opacity="0"/></linearGradient><linearGradient id="f2480idj" x1="24.713" x2="18.924" y1="26.103" y2="26.103" gradientUnits="userSpaceOnUse"><stop stop-color="#fff166"/><stop offset="1" stop-color="#fff166" stop-opacity="0"/></linearGradient><linearGradient id="f2480idk" x1="29.937" x2="29.937" y1="20.625" y2="29.894" gradientUnits="userSpaceOnUse"><stop stop-color="#ffdb44"/><stop offset="1" stop-color="#f9a928"/></linearGradient><linearGradient id="f2480idl" x1="25.607" x2="18.359" y1="22.233" y2="22.233" gradientUnits="userSpaceOnUse"><stop stop-color="#fff166"/><stop offset="1" stop-color="#fff166" stop-opacity="0"/></linearGradient><linearGradient id="f2480idm" x1="29.826" x2="29.826" y1="15.285" y2="25.398" gradientUnits="userSpaceOnUse"><stop stop-color="#ffdb44"/><stop offset="1" stop-color="#f9a928"/></linearGradient><linearGradient id="f2480idn" x1="24.673" x2="18.059" y1="12.214" y2="12.214" gradientUnits="userSpaceOnUse"><stop stop-color="#fff166"/><stop offset="1" stop-color="#fff166" stop-opacity="0"/></linearGradient><linearGradient id="f2480ido" x1="25.584" x2="17.853" y1="16.69" y2="16.69" gradientUnits="userSpaceOnUse"><stop stop-color="#fff166"/><stop offset="1" stop-color="#fff166" stop-opacity="0"/></linearGradient><linearGradient id="f2480idp" x1="17.867" x2="14.778" y1="5.305" y2="5.305" gradientUnits="userSpaceOnUse"><stop stop-color="#fff166"/><stop offset="1" stop-color="#fff166" stop-opacity="0"/></linearGradient><filter id="f2480idq" width="19.048" height="27.809" x="4.917" y="1.87" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dx=".5"/><feGaussianBlur stdDeviation="1"/><feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic"/><feColorMatrix values="0 0 0 0 0.847059 0 0 0 0 0.458824 0 0 0 0 0.360784 0 0 0 1 0"/><feBlend in2="shape" result="effect1_innerShadow_20020_2909"/></filter><filter id="f2480idr" width="12.909" height="20.615" x="13.646" y="10.157" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_20020_2909" stdDeviation="1"/></filter><filter id="f2480ids" width="9.543" height="5.82" x="16.913" y="10.73" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dx=".5"/><feGaussianBlur stdDeviation=".75"/><feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic"/><feColorMatrix values="0 0 0 0 0.878431 0 0 0 0 0.541176 0 0 0 0 0.0627451 0 0 0 1 0"/><feBlend in2="shape" result="effect1_innerShadow_20020_2909"/></filter><filter id="f2480idt" width="9.361" height="6.164" x="16.796" y="23.515" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dx=".5" dy="-.5"/><feGaussianBlur stdDeviation=".75"/><feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic"/><feColorMatrix values="0 0 0 0 0.941176 0 0 0 0 0.643137 0 0 0 0 0.215686 0 0 0 1 0"/><feBlend in2="shape" result="effect1_innerShadow_20020_2909"/></filter><filter id="f2480idu" width="7.87" height="3.976" x="18.372" y="24.449" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_20020_2909" stdDeviation=".625"/></filter><filter id="f2480idv" width="10.659" height="6.464" x="16.796" y="19.235" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dx=".5" dy="-.5"/><feGaussianBlur stdDeviation=".75"/><feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic"/><feColorMatrix values="0 0 0 0 0.941176 0 0 0 0 0.643137 0 0 0 0 0.215686 0 0 0 1 0"/><feBlend in2="shape" result="effect1_innerShadow_20020_2909"/></filter><filter id="f2480idw" width="9.225" height="3.976" x="17.982" y="20.579" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_20020_2909" stdDeviation=".625"/></filter><filter id="f2480idx" width="10.614" height="6.333" x="16.796" y="14.785" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dx=".5" dy="-.5"/><feGaussianBlur stdDeviation=".75"/><feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic"/><feColorMatrix values="0 0 0 0 0.941176 0 0 0 0 0.643137 0 0 0 0 0.215686 0 0 0 1 0"/><feBlend in2="shape" result="effect1_innerShadow_20020_2909"/></filter><filter id="f2480idy" width="8.636" height="5.016" x="17.606" y="10.274" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_20020_2909" stdDeviation=".625"/></filter><filter id="f2480idz" width="9.672" height="5.016" x="17.535" y="14.75" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_20020_2909" stdDeviation=".625"/></filter><filter id="f2480id10" width="5.365" height="10.497" x="13.9" y="1.862" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_20020_2909" stdDeviation=".625"/></filter></defs></g></svg>', Me = '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><g fill="none"><g filter="url(#f2474idn)"><path fill="url(#f2474idg)" d="M20.307 26.55a3.268 3.268 0 1 1-6.536 0v-3.76q-.001-.482.071-.96q.03-.177.048-.35c.036-.369-.008-.85-.258-1.173l.598-.576a9.28 9.28 0 0 1-5.05-8.275c0-.979.15-1.922.43-2.808l.99-6.466h8.051v.002c4.973.107 8.962 3.35 8.962 9.272c0 3.481-1.667 6.284-4.189 7.864l.006.005c-.172.12-.374.24-.591.371l-.002.001c-.715.429-1.59.953-2.05 1.81c-.4.743-.478 1.949-.478 2.508l-.002-.001z"/></g><path fill="url(#f2474id0)" d="M20.307 26.55a3.268 3.268 0 1 1-6.536 0v-3.76q-.001-.482.071-.96q.03-.177.048-.35c.036-.369-.008-.85-.258-1.173l.598-.576a9.28 9.28 0 0 1-5.05-8.275c0-.979.15-1.922.43-2.808l.99-6.466h8.051v.002c4.973.107 8.962 3.35 8.962 9.272c0 3.481-1.667 6.284-4.189 7.864l.006.005c-.172.12-.374.24-.591.371l-.002.001c-.715.429-1.59.953-2.05 1.81c-.4.743-.478 1.949-.478 2.508l-.002-.001z"/><path fill="url(#f2474id1)" d="M20.307 26.55a3.268 3.268 0 1 1-6.536 0v-3.76q-.001-.482.071-.96q.03-.177.048-.35c.036-.369-.008-.85-.258-1.173l.598-.576a9.28 9.28 0 0 1-5.05-8.275c0-.979.15-1.922.43-2.808l.99-6.466h8.051v.002c4.973.107 8.962 3.35 8.962 9.272c0 3.481-1.667 6.284-4.189 7.864l.006.005c-.172.12-.374.24-.591.371l-.002.001c-.715.429-1.59.953-2.05 1.81c-.4.743-.478 1.949-.478 2.508l-.002-.001z"/><path fill="url(#f2474id2)" d="M20.307 26.55a3.268 3.268 0 1 1-6.536 0v-3.76q-.001-.482.071-.96q.03-.177.048-.35c.036-.369-.008-.85-.258-1.173l.598-.576a9.28 9.28 0 0 1-5.05-8.275c0-.979.15-1.922.43-2.808l.99-6.466h8.051v.002c4.973.107 8.962 3.35 8.962 9.272c0 3.481-1.667 6.284-4.189 7.864l.006.005c-.172.12-.374.24-.591.371l-.002.001c-.715.429-1.59.953-2.05 1.81c-.4.743-.478 1.949-.478 2.508l-.002-.001z"/><g filter="url(#f2474ido)"><path fill="#e69e12" d="M8.432 5.919c0 .468.122.907.336 1.283c-.855.428-1.445 1.34-1.445 2.394c0 .82.357 1.554.917 2.04a2.64 2.64 0 0 0-.878 1.98c0 1.04.585 1.936 1.431 2.35a2.65 2.65 0 0 0-.618 1.71c0 1.431 1.113 2.591 2.486 2.591h2.753c1.373 0 2.486-1.16 2.486-2.59a2.63 2.63 0 0 0-.891-1.988A2.63 2.63 0 0 0 16 13.616c0-.803-.35-1.52-.898-1.996c.55-.487.898-1.213.898-2.024c0-.728-.28-1.387-.736-1.866c.454-.459.736-1.1.736-1.811c0-1.393-1.083-2.521-2.419-2.521h-2.73c-1.336 0-2.42 1.128-2.42 2.52"/></g><g filter="url(#f2474idp)"><path fill="#f8a047" d="M22.791 18.984c-3.643-2.241-7.3-.668-8.247 0l-.84-1.082c5.38-2.562 8.246-.36 9.087 1.081"/></g><rect width="5.784" height="8.988" x="6.703" y="21.013" fill="url(#f2474idh)" rx="2.892" transform="rotate(-90 6.703 21.013)"/><rect width="5.784" height="8.988" x="6.703" y="21.013" fill="url(#f2474idi)" rx="2.892" transform="rotate(-90 6.703 21.013)"/><rect width="5.784" height="8.988" x="6.703" y="21.013" fill="url(#f2474id3)" rx="2.892" transform="rotate(-90 6.703 21.013)"/><rect width="5.784" height="8.988" x="6.703" y="21.013" fill="url(#f2474id4)" rx="2.892" transform="rotate(-90 6.703 21.013)"/><rect width="5.784" height="8.988" x="6.703" y="21.013" fill="url(#f2474id5)" rx="2.892" transform="rotate(-90 6.703 21.013)"/><rect width="5.629" height="8.806" x="7.001" y="7.81" fill="url(#f2474idj)" rx="2.814" transform="rotate(-90 7 7.81)"/><rect width="5.629" height="8.806" x="7.001" y="7.81" fill="url(#f2474id6)" rx="2.814" transform="rotate(-90 7 7.81)"/><rect width="5.629" height="8.806" x="7.001" y="7.81" fill="url(#f2474id7)" rx="2.814" transform="rotate(-90 7 7.81)"/><rect width="5.629" height="8.806" x="7.001" y="7.81" fill="url(#f2474id8)" rx="2.814" transform="rotate(-90 7 7.81)"/><rect width="5.927" height="10.097" x="5.71" y="12.064" fill="url(#f2474idk)" rx="2.91" transform="rotate(-90 5.71 12.064)"/><rect width="5.927" height="10.097" x="5.71" y="12.064" fill="url(#f2474id9)" rx="2.91" transform="rotate(-90 5.71 12.064)"/><rect width="5.927" height="10.097" x="5.71" y="12.064" fill="url(#f2474ida)" rx="2.91" transform="rotate(-90 5.71 12.064)"/><rect width="5.927" height="10.097" x="5.71" y="12.064" fill="url(#f2474idb)" rx="2.91" transform="rotate(-90 5.71 12.064)"/><rect width="5.797" height="10.051" x="5.756" y="16.486" fill="url(#f2474idl)" rx="2.899" transform="rotate(-90 5.756 16.486)"/><rect width="5.797" height="10.051" x="5.756" y="16.486" fill="url(#f2474idc)" rx="2.899" transform="rotate(-90 5.756 16.486)"/><rect width="5.797" height="10.051" x="5.756" y="16.486" fill="url(#f2474idd)" rx="2.899" transform="rotate(-90 5.756 16.486)"/><rect width="5.797" height="10.051" x="5.756" y="16.486" fill="url(#f2474ide)" rx="2.899" transform="rotate(-90 5.756 16.486)"/><path fill="url(#f2474idm)" d="M19.107 29.082c.732-.6 1.2-1.511 1.2-2.532v-.19H18.83c-.005.196.005.7.085 1.14l.017.092c.082.444.176.953.175 1.49"/><path fill="url(#f2474idf)" d="M19.107 29.082c.732-.6 1.2-1.511 1.2-2.532v-.19H18.83c-.005.196.005.7.085 1.14l.017.092c.082.444.176.953.175 1.49"/><defs><radialGradient id="f2474id0" cx="0" cy="0" r="1" gradientTransform="matrix(-6.38547 3.48292 -3.99685 -7.3277 25.507 7.314)" gradientUnits="userSpaceOnUse"><stop stop-color="#fff163"/><stop offset="1" stop-color="#fff163" stop-opacity="0"/></radialGradient><radialGradient id="f2474id1" cx="0" cy="0" r="1" gradientTransform="matrix(4.64396 0 0 9.96517 19.896 26.084)" gradientUnits="userSpaceOnUse"><stop stop-color="#ffe14f"/><stop offset="1" stop-color="#ffe14f" stop-opacity="0"/></radialGradient><radialGradient id="f2474id2" cx="0" cy="0" r="1" gradientTransform="scale(12.9389 20.0228)rotate(90 .413 .923)" gradientUnits="userSpaceOnUse"><stop offset=".902" stop-color="#d87e83" stop-opacity="0"/><stop offset=".993" stop-color="#d87e83"/></radialGradient><radialGradient id="f2474id3" cx="0" cy="0" r="1" gradientTransform="matrix(0 -2.58086 2.00356 0 10.256 28.655)" gradientUnits="userSpaceOnUse"><stop stop-color="#ffe160"/><stop offset="1" stop-color="#ffe160" stop-opacity="0"/></radialGradient><radialGradient id="f2474id4" cx="0" cy="0" r="1" gradientTransform="matrix(-.9313 0 0 -4.89838 11.216 24.948)" gradientUnits="userSpaceOnUse"><stop stop-color="#df7f02"/><stop offset="1" stop-color="#df7f02" stop-opacity="0"/></radialGradient><radialGradient id="f2474id5" cx="0" cy="0" r="1" gradientTransform="matrix(-.17279 -7.31561 8.00204 -.189 9.594 28.328)" gradientUnits="userSpaceOnUse"><stop offset=".808" stop-color="#d8a96f" stop-opacity="0"/><stop offset="1" stop-color="#d8a96f"/></radialGradient><radialGradient id="f2474id6" cx="0" cy="0" r="1" gradientTransform="matrix(1.06838 0 0 4.40184 7.885 12.125)" gradientUnits="userSpaceOnUse"><stop stop-color="#e69510"/><stop offset="1" stop-color="#e69510" stop-opacity="0"/></radialGradient><radialGradient id="f2474id7" cx="0" cy="0" r="1" gradientTransform="matrix(0 -2.78495 2.38236 0 10.787 14.998)" gradientUnits="userSpaceOnUse"><stop stop-color="#ffee65"/><stop offset="1" stop-color="#ffee65" stop-opacity="0"/></radialGradient><radialGradient id="f2474id8" cx="0" cy="0" r="1" gradientTransform="matrix(-.16817 -7.16786 7.78679 -.18269 9.815 14.978)" gradientUnits="userSpaceOnUse"><stop offset=".808" stop-color="#d8a96f" stop-opacity="0"/><stop offset="1" stop-color="#d8a96f"/></radialGradient><radialGradient id="f2474id9" cx="0" cy="0" r="1" gradientTransform="matrix(1.125 0 0 5.04687 6.642 17.011)" gradientUnits="userSpaceOnUse"><stop stop-color="#e69510"/><stop offset="1" stop-color="#e69510" stop-opacity="0"/></radialGradient><radialGradient id="f2474ida" cx="0" cy="0" r="1" gradientTransform="matrix(0 -2.68226 2.10732 0 9.236 20.227)" gradientUnits="userSpaceOnUse"><stop stop-color="#ffee65"/><stop offset="1" stop-color="#ffee65" stop-opacity="0"/></radialGradient><radialGradient id="f2474idb" cx="0" cy="0" r="1" gradientTransform="matrix(-.17705 -8.21822 8.20018 -.17667 8.674 20.282)" gradientUnits="userSpaceOnUse"><stop offset=".808" stop-color="#d8a96f" stop-opacity="0"/><stop offset="1" stop-color="#d8a96f"/></radialGradient><radialGradient id="f2474idc" cx="0" cy="0" r="1" gradientTransform="matrix(2.38035 0 0 7.9345 5.5 20.031)" gradientUnits="userSpaceOnUse"><stop stop-color="#e48747"/><stop offset="1" stop-color="#e48747" stop-opacity="0"/></radialGradient><radialGradient id="f2474idd" cx="0" cy="0" r="1" gradientTransform="matrix(0 -2.6702 2.06121 0 9.205 24.613)" gradientUnits="userSpaceOnUse"><stop stop-color="#ffee65"/><stop offset="1" stop-color="#ffee65" stop-opacity="0"/></radialGradient><radialGradient id="f2474ide" cx="0" cy="0" r="1" gradientTransform="matrix(-.17323 -8.18127 8.02085 -.16983 8.655 24.668)" gradientUnits="userSpaceOnUse"><stop offset=".808" stop-color="#d8a96f" stop-opacity="0"/><stop offset="1" stop-color="#d8a96f"/></radialGradient><radialGradient id="f2474idf" cx="0" cy="0" r="1" gradientTransform="matrix(1.49778 1.02092 -2.22839 3.26927 18.6 27.254)" gradientUnits="userSpaceOnUse"><stop offset=".55" stop-color="#f4bbc8" stop-opacity="0"/><stop offset="1" stop-color="#f4bbc8"/></radialGradient><linearGradient id="f2474idg" x1="26.587" x2="12.093" y1="8.105" y2="29.819" gradientUnits="userSpaceOnUse"><stop stop-color="#ffdb34"/><stop offset="1" stop-color="#e99a30"/></linearGradient><linearGradient id="f2474idh" x1="9.595" x2="9.595" y1="21.013" y2="30" gradientUnits="userSpaceOnUse"><stop stop-color="#ec9b2a"/><stop offset="1" stop-color="#ffc043"/></linearGradient><linearGradient id="f2474idi" x1="6.35" x2="8.227" y1="25.506" y2="25.506" gradientUnits="userSpaceOnUse"><stop stop-color="#d58191"/><stop offset="1" stop-color="#d67f8d" stop-opacity="0"/></linearGradient><linearGradient id="f2474idj" x1="8.345" x2="10.69" y1="8.718" y2="15.823" gradientUnits="userSpaceOnUse"><stop stop-color="#f2a430"/><stop offset="1" stop-color="#ffce27"/></linearGradient><linearGradient id="f2474idk" x1="7.126" x2="10.001" y1="13.105" y2="21.105" gradientUnits="userSpaceOnUse"><stop stop-color="#f2a430"/><stop offset="1" stop-color="#ffce27"/></linearGradient><linearGradient id="f2474idl" x1="8.654" x2="8.654" y1="16.486" y2="25.515" gradientUnits="userSpaceOnUse"><stop stop-color="#f2a430"/><stop offset="1" stop-color="#ffce27"/></linearGradient><linearGradient id="f2474idm" x1="20.307" x2="20.307" y1="26.044" y2="29.547" gradientUnits="userSpaceOnUse"><stop stop-color="#fff598"/><stop offset="1" stop-color="#ffc99f"/></linearGradient><filter id="f2474idn" width="18.933" height="27.637" x="9.18" y="2.182" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dx=".5"/><feGaussianBlur stdDeviation=".5"/><feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic"/><feColorMatrix values="0 0 0 0 0.854902 0 0 0 0 0.584314 0 0 0 0 0.380392 0 0 0 1 0"/><feBlend in2="shape" result="effect1_innerShadow_20020_3042"/></filter><filter id="f2474ido" width="12.677" height="20.87" x="5.323" y="1.398" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_20020_3042" stdDeviation="1"/></filter><filter id="f2474idp" width="12.088" height="5.26" x="12.203" y="15.224" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_20020_3042" stdDeviation=".75"/></filter></defs></g></svg>', Ge = [
  {
    name: "Smiley",
    markerType: h,
    icon: xe
  },
  {
    name: "Disappointed face",
    markerType: h,
    icon: ke
  },
  {
    name: "Crying face",
    markerType: h,
    icon: we
  },
  {
    name: "Angry face",
    markerType: h,
    icon: ve
  },
  {
    name: "Exclamation mark",
    markerType: h,
    icon: ye
  },
  {
    name: "Question mark",
    markerType: h,
    icon: _e
  },
  {
    name: "Check mark",
    markerType: h,
    icon: Ce
  },
  {
    name: "Cross mark",
    markerType: h,
    icon: Be
  },
  {
    name: "Heart",
    markerType: h,
    icon: Se
  },
  {
    name: "Thumbs up",
    markerType: h,
    icon: Ue
  },
  {
    name: "Thumbs down",
    markerType: h,
    icon: Me
  }
], Te = `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none"
  stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
  class="icon icon-tabler icons-tabler-outline icon-tabler-chevron-down">
  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
  <path d="M6 9l6 6l6 -6" />
</svg>`;
class y {
  constructor(i, e = !1) {
    r(this, "_markerTypeGroup");
    r(this, "_currentMarkerType");
    r(this, "_currentTypeButton");
    r(this, "_isWide");
    r(this, "onTypeButtonClick");
    this._markerTypeGroup = i, this._currentMarkerType = i.markerTypes[0], this._isWide = e, this.getUI = this.getUI.bind(this), this.setCurrentType = this.setCurrentType.bind(this);
  }
  getUI() {
    const i = document.createElement("div");
    i.className = "join p-1 border-1 border-solid border-transparent rounded-md hover:border-base-300", i.setAttribute("aria-label", this._markerTypeGroup.name), this._currentTypeButton = document.createElement("div"), this._currentTypeButton.role = "button", this._currentTypeButton.tabIndex = 0, this._currentTypeButton.className = "btn btn-square join-item btn-ghost btn-sm base-content p-1.5", this.setCurrentType(this._markerTypeGroup.markerTypes[0], !0), this._currentTypeButton.addEventListener("click", () => {
      this.onTypeButtonClick && this.onTypeButtonClick(this._currentMarkerType);
    }), i.appendChild(this._currentTypeButton);
    const e = document.createElement("details");
    e.className = "dropdown dropdown-bottom join-item", this._isWide ? e.classList.add("dropdown-center") : e.classList.add("dropdown-end"), i.appendChild(e);
    const t = document.createElement("summary");
    t.className = "btn btn-ghost btn-sm join-item p-0 base-content", t.innerHTML = Te, e.appendChild(t);
    const o = document.createElement("div");
    return o.className = "dropdown-content bg-base-100 rounded-box z-1 p-2 mt-2 border-2 border-solid border-base-200 shadow-lg", this._isWide ? o.classList.add("w-66", "mr-2") : o.classList.add("w-26", "-mr-2"), e.appendChild(o), this._markerTypeGroup.markerTypes.forEach((a) => {
      const n = document.createElement("button");
      n.title = a.name, n.setAttribute("aria-label", a.name), n.className = "btn btn-square btn-ghost base-content", n.innerHTML = a.icon, n.addEventListener("click", () => {
        this.setCurrentType(a), this._currentMarkerType = a, e.removeAttribute("open"), this.onTypeButtonClick && this.onTypeButtonClick(this._currentMarkerType);
      }), o.appendChild(n);
    }), i;
  }
  setCurrentType(i, e = !1) {
    this._currentTypeButton && (i && this._markerTypeGroup.markerTypes.indexOf(i) > -1 ? (this._currentMarkerType = i, this._currentTypeButton.innerHTML = i.icon, this._currentTypeButton.title = i.name, this._currentTypeButton.setAttribute("aria-label", i.name), this._currentTypeButton.setAttribute(
      "data-marker-type",
      i.markerType.typeName
    ), e || this._currentTypeButton.classList.add("btn-active")) : this._currentTypeButton.classList.remove("btn-active"));
  }
}
const M = [
  {
    name: "Basic shapes",
    markerTypes: [
      {
        icon: ie,
        name: "Rectangle",
        markerType: I
      },
      {
        icon: ae,
        name: "Cover (filled rectangle)",
        markerType: j
      },
      {
        icon: v,
        name: "Highlight",
        markerType: F
      },
      {
        icon: ne,
        name: "Ellipse",
        markerType: L
      },
      {
        icon: se,
        name: "Ellipse (filled)",
        markerType: P
      },
      {
        icon: le,
        name: "Triangle",
        markerType: m
      }
    ]
  },
  {
    name: "Lines",
    markerTypes: [
      {
        icon: de,
        name: "Arrow",
        markerType: V
      },
      {
        icon: ce,
        name: "Line",
        markerType: N
      },
      {
        icon: pe,
        name: "Measure",
        markerType: H
      },
      {
        icon: he,
        name: "Curve",
        markerType: D
      }
    ]
  },
  {
    name: "Text",
    markerTypes: [
      {
        icon: fe,
        name: "Text",
        markerType: R
      },
      {
        icon: ue,
        name: "Callout",
        markerType: q
      },
      {
        icon: ge,
        name: "Captioned frame",
        markerType: W
      }
    ]
  },
  {
    name: "Advanced shapes",
    markerTypes: [
      {
        icon: me,
        name: "Freehand",
        markerType: Z
      },
      {
        icon: v,
        name: "Highlighter",
        markerType: $
      },
      {
        icon: be,
        name: "Polygon",
        markerType: Q
      }
    ]
  }
], Ae = [
  {
    name: "All markers",
    markerTypes: M.reduce(
      (l, i) => l.concat(i.markerTypes),
      []
    )
  }
];
class ze extends x {
  constructor(e) {
    super();
    r(this, "_toolbarContainer");
    r(this, "_leftActionContainer");
    r(this, "_rightActionContainer");
    r(this, "_markerTypeContainer");
    r(this, "_markerTypeMiniContainer");
    r(this, "_selectButton");
    r(this, "_deleteButton");
    r(this, "_markerTypeButtons", []);
    r(this, "_mode", "select");
    r(this, "onSaveButtonClick");
    r(this, "onCloseButtonClick");
    r(this, "_markerArea");
    this._markerArea = e, this.getUI = this.getUI.bind(this), this.createActionButton = this.createActionButton.bind(this), this.handleActionButtonClick = this.handleActionButtonClick.bind(this), this.handleMarkerTypeButtonClick = this.handleMarkerTypeButtonClick.bind(this), this.updateToolbarButtons = this.updateToolbarButtons.bind(this), this.updateMarkerTypeButtons = this.updateMarkerTypeButtons.bind(this);
  }
  getUI() {
    var e;
    if (this._toolbarContainer === void 0) {
      this.attachMarkerAreaEvents(), this._toolbarContainer = document.createElement("div"), this._toolbarContainer.className = "flex space-x-1 p-2 justify-between @container";
      const t = document.createElement("div");
      t.className = "absolute w-0 h-0 overflow-hidden", t.innerHTML = Ge.map((a) => a.icon).join(""), this._toolbarContainer.appendChild(t), this._leftActionContainer = document.createElement("div"), this._leftActionContainer.className = "inline-flex space-x-1 p-1 border-1 border-transparent", this._toolbarContainer.appendChild(this._leftActionContainer), this._markerTypeContainer = document.createElement("div"), this._markerTypeContainer.className = "hidden @xl:inline-flex space-x-1 items-center", this._toolbarContainer.appendChild(this._markerTypeContainer), this._markerTypeMiniContainer = document.createElement("div"), this._markerTypeMiniContainer.className = "inline-flex @xl:hidden space-x-1 items-center", this._toolbarContainer.appendChild(this._markerTypeMiniContainer), this._rightActionContainer = document.createElement("div"), this._rightActionContainer.className = "inline-flex space-x-1 p-1 border-1 border-transparent", this._toolbarContainer.appendChild(this._rightActionContainer), this._selectButton = this.createActionButton(
        "Select",
        "select",
        re
      ), this._leftActionContainer.appendChild(this._selectButton), this._deleteButton = this.createActionButton(
        "Delete",
        "delete",
        oe
      ), this._leftActionContainer.appendChild(this._deleteButton), M.forEach((a) => {
        var d;
        const n = new y(a);
        n.onTypeButtonClick = this.handleMarkerTypeButtonClick, this._markerTypeButtons.push(n), (d = this._markerTypeContainer) == null || d.appendChild(n.getUI());
      });
      const o = new y(Ae[0], !0);
      o.onTypeButtonClick = this.handleMarkerTypeButtonClick, this._markerTypeButtons.push(o), (e = this._markerTypeMiniContainer) == null || e.appendChild(o.getUI());
    }
    return this.updateToolbarButtons(), this._toolbarContainer;
  }
  attachMarkerAreaEvents() {
    this._markerArea.addEventListener("markerselect", () => {
      this.updateToolbarButtons();
    }), this._markerArea.addEventListener("markerdeselect", () => {
      this.updateToolbarButtons();
    }), this._markerArea.addEventListener("markercreate", (e) => {
      e.detail.markerEditor.continuousCreation || (this._mode = "select"), this.updateToolbarButtons();
    });
  }
  createActionButton(e, t, o) {
    return super.createActionButton(
      e,
      t,
      o,
      this.handleActionButtonClick
    );
  }
  handleActionButtonClick(e) {
    switch (e) {
      case "select": {
        this._mode = "select", this._markerArea.switchToSelectMode(), this.updateToolbarButtons();
        break;
      }
      case "delete": {
        this._markerArea.deleteSelectedMarkers(), this.updateToolbarButtons();
        break;
      }
      case "save": {
        this.onSaveButtonClick && this.onSaveButtonClick();
        break;
      }
      case "close": {
        this.onCloseButtonClick && this.onCloseButtonClick();
        break;
      }
    }
  }
  handleMarkerTypeButtonClick(e) {
    this._mode = "create", this.updateMarkerTypeButtons(e);
    const t = this._markerArea.createMarker(e.markerType);
    t && t.marker instanceof h && (t.marker.defaultSize = { width: 32, height: 32 }, t.marker.svgString = e.icon);
  }
  updateToolbarButtons() {
    var e, t, o;
    this._mode === "select" && ((e = this._selectButton) == null || e.classList.add("btn-active"), this._markerArea.selectedMarkerEditors.length > 0 ? (t = this._deleteButton) == null || t.classList.remove("btn-disabled") : (o = this._deleteButton) == null || o.classList.add("btn-disabled"), this.updateMarkerTypeButtons());
  }
  updateMarkerTypeButtons(e) {
    var t;
    this._mode === "create" && ((t = this._selectButton) == null || t.classList.remove("btn-active")), this._markerTypeButtons.forEach((o) => {
      o.setCurrentType(e);
    });
  }
}
const Ee = '<svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-arrow-back-up"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 14l-4 -4l4 -4" /><path d="M5 10h11a4 4 0 1 1 0 8h-1" /></svg>', Oe = '<svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-arrow-forward-up"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M15 14l4 -4l-4 -4" /><path d="M19 10h-11a4 4 0 1 0 0 8h1" /></svg>', G = '<svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-plus"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 5l0 14" /><path d="M5 12l14 0" /></svg>', T = '<svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-minus"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 12l14 0" /></svg>', A = '<svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-relation-one-to-one"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 5m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z" /><path d="M8 10h1v4" /><path d="M15 10h1v4" /><path d="M12 10.5l0 .01" /><path d="M12 13.5l0 .01" /></svg>', Ie = '<svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-typography"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 20l3 0" /><path d="M14 20l7 0" /><path d="M6.9 15l6.9 0" /><path d="M10.2 6.3l5.8 13.7" /><path d="M5 20l6 -16l2 0l7 16" /></svg>', je = '<svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-border-style-2"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 18v.01" /><path d="M8 18v.01" /><path d="M12 18v.01" /><path d="M16 18v.01" /><path d="M20 18v.01" /><path d="M18 12h2" /><path d="M11 12h2" /><path d="M4 12h2" /><path d="M4 6h16" /></svg>', Fe = '<svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="currentColor"  class="icon icon-tabler icons-tabler-filled icon-tabler-droplet-half-2"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M13.905 2.923l.098 .135l4.92 7.306a7.566 7.566 0 0 1 1.043 3.167l.024 .326c.007 .047 .01 .094 .01 .143l-.002 .06c.056 2.3 -.944 4.582 -2.87 6.14c-2.969 2.402 -7.286 2.402 -10.255 0c-1.904 -1.54 -2.904 -3.787 -2.865 -6.071a1.052 1.052 0 0 1 .013 -.333a7.66 7.66 0 0 1 .913 -3.176l.172 -.302l4.893 -7.26c.185 -.275 .426 -.509 .709 -.686c1.055 -.66 2.446 -.413 3.197 .55zm-2.06 1.107l-.077 .038l-.041 .03l-.037 .036l-.033 .042l-4.863 7.214a5.607 5.607 0 0 0 -.651 1.61h11.723a5.444 5.444 0 0 0 -.49 -1.313l-.141 -.251l-4.891 -7.261a.428 .428 0 0 0 -.5 -.145z" /></svg>', Le = '<svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-circle-half-2"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" /><path d="M12 3v18" /><path d="M12 14l7 -7" /><path d="M12 19l8.5 -8.5" /><path d="M12 9l4.5 -4.5" /></svg>', Pe = '<svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-notes"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 3m0 2a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2z" /><path d="M9 7l6 0" /><path d="M9 11l6 0" /><path d="M9 15l4 0" /></svg>';
class g {
  constructor(i, e, t) {
    r(this, "_markerArea");
    r(this, "_title");
    r(this, "_icon");
    r(this, "_panel");
    r(this, "panelClasses", ["w-26"]);
    this._markerArea = i, this._title = e, this._icon = t, this.getUI = this.getUI.bind(this), this.getContentUI = this.getContentUI.bind(this), this.updateVisibility = this.updateVisibility.bind(this), this.updateContent = this.updateContent.bind(this), this.applyValues = this.applyValues.bind(this);
  }
  getUI() {
    this._panel = document.createElement("details"), this._panel.className = "dropdown dropdown-top dropdown-center hidden", this._panel.addEventListener("toggle", (t) => {
      t.newState === "closed" && this.applyValues();
    });
    const i = document.createElement("summary");
    i.className = "btn btn-ghost btn-sm base-content p-1.5", i.innerHTML = this._icon, i.title = this._title, i.setAttribute("aria-label", this._title), this._panel.appendChild(i);
    const e = document.createElement("div");
    return e.className = "dropdown-content bg-base-100 rounded-box z-1 p-2 mt-2 border-2 border-solid border-base-200 shadow-lg", e.classList.add(...this.panelClasses), this._panel.appendChild(e), e.appendChild(this.getContentUI()), this._panel;
  }
  getContentUI() {
    const i = document.createElement("div");
    return i.className = "flex flex-col space-y-1 p-2", i.innerText = "Base panel content", i;
  }
  updateVisibility() {
    this._panel && (this._markerArea.currentMarkerEditor ? this._panel.classList.remove("hidden") : this._panel.classList.add("hidden"));
  }
  updateContent() {
  }
  applyValues() {
  }
}
class Ve extends g {
  constructor(e, t, o) {
    super(e, t, o);
    r(this, "_textarea");
    r(this, "_currentEditor");
    this.panelClasses = ["w-64", "mr-8", "sm:mr-0"];
  }
  getContentUI() {
    const e = document.createElement("fieldset");
    e.className = "fieldset";
    const t = document.createElement("legend");
    return t.className = "fieldset-legend", t.innerText = "Notes", e.appendChild(t), this._textarea = document.createElement("textarea"), this._textarea.className = "textarea h-24", this._textarea.placeholder = "Notes", this._textarea.addEventListener("change", () => {
      this.applyValues();
    }), e.appendChild(this._textarea), e;
  }
  updateContent() {
    this._markerArea && this._textarea && this._markerArea.currentMarkerEditor && (this._currentEditor = this._markerArea.currentMarkerEditor, this._textarea.value = this._markerArea.currentMarkerEditor.notes || "");
  }
  applyValues() {
    this._markerArea && this._currentEditor && (this._currentEditor.notes = this._textarea.value);
  }
}
class Ne extends g {
  constructor(e, t, o) {
    super(e, t, o);
    r(this, "_range");
    r(this, "_currentEditor");
    this.panelClasses = ["w-48"];
  }
  getContentUI() {
    const e = document.createElement("fieldset");
    e.className = "fieldset";
    const t = document.createElement("legend");
    return t.className = "fieldset-legend", t.innerText = "Opacity", e.appendChild(t), this._range = document.createElement("input"), this._range.type = "range", this._range.min = "0", this._range.max = "100", this._range.value = "25", this._range.className = "range", this._range.step = "10", this._range.addEventListener("input", () => {
      this.applyValues();
    }), e.appendChild(this._range), e;
  }
  updateContent() {
    this._markerArea && this._range && this._markerArea.currentMarkerEditor && (this._currentEditor = this._markerArea.currentMarkerEditor, this._range.value = (this._markerArea.currentMarkerEditor.opacity * 100).toString());
  }
  applyValues() {
    this._markerArea && this._currentEditor && (this._currentEditor.opacity = this._range.valueAsNumber / 100);
  }
}
const u = [
  "#ff0000",
  "#f97316",
  "#ffff00",
  "#22c55e",
  "#38bdf8",
  "#8b5cf6",
  "#ec4899",
  "#d946ef",
  "#db2777",
  "#000000",
  "#ffffff"
], b = [...u, "transparent"];
class k {
  constructor(i) {
    r(this, "_colors", []);
    r(this, "_colorButtons", []);
    r(this, "_currentColor", "#000000");
    r(this, "onColorChange", () => {
    });
    this._colors = i, this.getUI = this.getUI.bind(this), this.updateButtonStates = this.updateButtonStates.bind(this);
  }
  get currentColor() {
    return this._currentColor;
  }
  set currentColor(i) {
    this._currentColor = i, this.updateButtonStates();
  }
  getUI() {
    const i = document.createElement("div");
    return i.className = "flex flex-wrap", this._colors.forEach((e) => {
      const t = document.createElement("button");
      t.className = "btn btn-square btn-sm btn-ghost base-content p-1.5", t.setAttribute("aria-label", e), t.setAttribute("data-color", e), e !== "transparent" ? t.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path fill="${e}" stroke-width="2" stroke="currentColor" d="M0,0 H24 V24 H0 Z" /></svg>` : t.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path fill="${e}" stroke-width={2} stroke="currentColor" d="M0,0 H24 V24 H0 Z" /><path fill="currentColor" opacity="0.2" stroke-width="0" d="M0,0 H12 V12 H0 Z" /><path fill="currentColor" opacity="0.2" stroke-width="0" d="M12,12 H24 V24 H12 Z" /></svg>`, t.addEventListener("click", (o) => {
        const a = o.currentTarget;
        this._currentColor = a.getAttribute("data-color") || this._colors[0], this.updateButtonStates(), this.onColorChange && this.onColorChange(this._currentColor);
      }), this._colorButtons.push(t), i.appendChild(t);
    }), i;
  }
  updateButtonStates() {
    this._colorButtons.forEach((i) => {
      (i.getAttribute("data-color") || "") === this._currentColor ? i.classList.add("btn-active") : i.classList.remove("btn-active");
    });
  }
}
class He extends g {
  constructor(e, t, o) {
    super(e, t, o);
    r(this, "_currentColor", b[0]);
    r(this, "_currentEditor");
    r(this, "_colorPicker");
    this.panelClasses = ["w-54"];
  }
  getContentUI() {
    const e = document.createElement("fieldset");
    e.className = "fieldset";
    const t = document.createElement("legend");
    return t.className = "fieldset-legend", t.innerText = "Fill Color", e.appendChild(t), this._colorPicker = new k(b), this._colorPicker.onColorChange = (o) => {
      this._currentColor = o, this.applyValues();
    }, e.appendChild(this._colorPicker.getUI()), e;
  }
  updateContent() {
    this._markerArea && this._markerArea.currentMarkerEditor && this._colorPicker && (this._currentEditor = this._markerArea.currentMarkerEditor, this._currentColor = this._markerArea.currentMarkerEditor.fillColor || b[0], this._colorPicker.currentColor = this._currentColor);
  }
  applyValues() {
    this._markerArea && this._currentEditor && (this._currentEditor.fillColor = this._currentColor);
  }
  updateVisibility() {
    const e = this._markerArea.currentMarkerEditor;
    this._panel && (e && (e.is(_) || e.is(C) || e.is(B) || e.is(S)) ? this._panel.classList.remove("hidden") : this._panel.classList.add("hidden"));
  }
}
class De extends g {
  constructor(e, t, o) {
    super(e, t, o);
    r(this, "_currentStrokeColor", u[0]);
    r(this, "_currentStrokeStyle", "0");
    r(this, "_currentEditor");
    r(this, "_strokeWidthInput");
    r(this, "_strokeStylePicker");
    r(this, "_colorPicker");
    this.panelClasses = ["w-54", "-mr-8", "sm:mr-0"], this.getStrokeStyleVisual = this.getStrokeStyleVisual.bind(this), this.handleStrokeStyleClick = this.handleStrokeStyleClick.bind(this), this.updateButtonStates = this.updateButtonStates.bind(this);
  }
  getContentUI() {
    const e = document.createElement("fieldset");
    e.className = "fieldset";
    const t = document.createElement("legend");
    t.className = "fieldset-legend", t.innerText = this._title, e.appendChild(t);
    const o = document.createElement("label");
    o.className = "fieldset-label", o.innerText = "Width", e.appendChild(o), this._strokeWidthInput = document.createElement("input"), this._strokeWidthInput.type = "range", this._strokeWidthInput.min = "0", this._strokeWidthInput.max = "40", this._strokeWidthInput.value = "3", this._strokeWidthInput.step = "1", this._strokeWidthInput.className = "range", this._strokeWidthInput.addEventListener("input", () => {
      this.applyValues();
    }), e.appendChild(this._strokeWidthInput);
    const a = document.createElement("div");
    a.className = "flex flex-row space-x-2 justify-between items-center", e.appendChild(a);
    const n = document.createElement("label");
    n.className = "fieldset-label", n.innerText = "Style", a.appendChild(n), this._strokeStylePicker = document.createElement("div"), this._strokeStylePicker.className = "join", a.appendChild(this._strokeStylePicker);
    const d = document.createElement("button");
    d.className = "join-item btn btn-square btn-sm base-content p-1.5", d.setAttribute("data-style", "0"), d.innerHTML = this.getStrokeStyleVisual("0"), d.ariaLabel = "Solid", d.addEventListener("click", () => {
      this.handleStrokeStyleClick("0");
    }), this._strokeStylePicker.appendChild(d);
    const c = document.createElement("button");
    c.className = "join-item btn btn-square btn-sm base-content p-1.5", c.setAttribute("data-style", "4,4"), c.innerHTML = this.getStrokeStyleVisual("4,4"), c.ariaLabel = "Dashed", c.addEventListener("click", () => {
      this.handleStrokeStyleClick("4,4");
    }), this._strokeStylePicker.appendChild(c);
    const p = document.createElement("button");
    p.className = "join-item btn btn-square btn-sm base-content p-1.5", p.setAttribute("data-style", "2,3"), p.innerHTML = this.getStrokeStyleVisual("2,3"), p.ariaLabel = "Dotted", p.addEventListener("click", () => {
      this.handleStrokeStyleClick("2,3");
    }), this._strokeStylePicker.appendChild(p);
    const s = document.createElement("label");
    return s.className = "fieldset-label", s.innerText = "Stroke Color", e.appendChild(s), this._colorPicker = new k(u), this._colorPicker.onColorChange = (f) => {
      this._currentStrokeColor = f, this.applyValues();
    }, e.appendChild(this._colorPicker.getUI()), e;
  }
  getStrokeStyleVisual(e) {
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="butt" stroke-linejoin="round"><path stroke-dasharray="${e}" d="M2,12 H22" /></svg>`;
  }
  handleStrokeStyleClick(e) {
    this._currentStrokeStyle = e, this.applyValues(), this.updateButtonStates();
  }
  updateContent() {
    this._markerArea && this._markerArea.currentMarkerEditor && this._colorPicker && (this._currentEditor = this._markerArea.currentMarkerEditor, this._strokeWidthInput && (this._strokeWidthInput.value = this._currentEditor.strokeWidth.toString()), this._currentStrokeStyle = this._markerArea.currentMarkerEditor.strokeDasharray || "0", this._currentStrokeColor = this._markerArea.currentMarkerEditor.strokeColor || u[0], this._colorPicker.currentColor = this._currentStrokeColor), this.updateButtonStates();
  }
  applyValues() {
    this._markerArea && this._currentEditor && (this._strokeWidthInput && (this._currentEditor.strokeWidth = this._strokeWidthInput.valueAsNumber), this._currentEditor.strokeDasharray = this._currentStrokeStyle, this._currentEditor.strokeColor = this._currentStrokeColor);
  }
  updateVisibility() {
    const e = this._markerArea.currentMarkerEditor;
    this._panel && (e && (e.is(X) || e.is(Y) || e.is(B) || e.is(J) || e.is(S) || e.is(C)) ? this._panel.classList.remove("hidden") : this._panel.classList.add("hidden"));
  }
  updateButtonStates() {
    var t;
    const e = (t = this._strokeStylePicker) == null ? void 0 : t.querySelectorAll("button");
    e && e.forEach((o) => {
      o.classList.remove("btn-active"), o.getAttribute("data-style") === this._currentStrokeStyle && o.classList.add("btn-active");
    });
  }
}
class Re extends g {
  constructor(e, t, o) {
    super(e, t, o);
    r(this, "_currentFontFamily", "");
    r(this, "_currentFontColor", u[0]);
    r(this, "_currentFontSize", "1");
    r(this, "_currentEditor");
    r(this, "_fontFamilySelect");
    r(this, "_fontSizePicker");
    r(this, "_colorPicker");
    this.panelClasses = ["w-54", "-mr-10", "sm:mr-0"], this.updateButtonStates = this.updateButtonStates.bind(this);
  }
  getContentUI() {
    const e = document.createElement("fieldset");
    e.className = "fieldset space-y-1";
    const t = document.createElement("legend");
    t.className = "fieldset-legend", t.innerText = this._title, e.appendChild(t), this._fontFamilySelect = document.createElement("select"), this._fontFamilySelect.className = "select select-sm", e.appendChild(this._fontFamilySelect), this._fontFamilySelect.addEventListener("change", () => {
      this._currentFontFamily = this._fontFamilySelect.value, this.applyValues();
    });
    const o = document.createElement("option");
    o.disabled = !0, o.innerText = "Font Family", this._fontFamilySelect.appendChild(o), [
      ["Sans-serif", "Helvetica, Arial, sans-serif"],
      ["Serif", "Georgia, 'Times New Roman', Times, serif"],
      ["Monospace", "'Courier New', Courier, monospace"]
    ].forEach(([c, p]) => {
      var f;
      const s = document.createElement("option");
      s.value = p, s.innerText = c, (f = this._fontFamilySelect) == null || f.appendChild(s);
    });
    const a = document.createElement("div");
    a.className = "flex flex-row space-x-2 justify-between items-center", e.appendChild(a);
    const n = document.createElement("label");
    n.className = "fieldset-label", n.innerText = "Size", a.appendChild(n), this._fontSizePicker = document.createElement("div"), this._fontSizePicker.className = "join", a.appendChild(this._fontSizePicker), [
      ["XS", "0.5"],
      ["S", "0.8"],
      ["M", "1"],
      ["L", "1.5"],
      ["XL", "3"]
    ].forEach(([c, p]) => {
      var f;
      const s = document.createElement("button");
      s.className = "join-item btn btn-square btn-sm base-content p-1.5", s.setAttribute("data-size", p), s.innerText = c, s.ariaLabel = c, s.addEventListener("click", () => {
        this._currentFontSize = p, this.applyValues(), this.updateButtonStates();
      }), (f = this._fontSizePicker) == null || f.appendChild(s);
    });
    const d = document.createElement("label");
    return d.className = "fieldset-label", d.innerText = "Color", e.appendChild(d), this._colorPicker = new k(u), this._colorPicker.onColorChange = (c) => {
      this._currentFontColor = c, this.applyValues();
    }, e.appendChild(this._colorPicker.getUI()), e;
  }
  updateContent() {
    this._markerArea && this._markerArea.currentMarkerEditor && this._markerArea.currentMarkerEditor.is(w) && this._colorPicker && (this._currentEditor = this._markerArea.currentMarkerEditor, this._currentFontFamily = this._currentEditor.fontFamily, this._fontFamilySelect && (this._fontFamilySelect.value = this._currentFontFamily), this._currentFontSize = this._currentEditor.fontSize.value.toString() || "1", this._currentFontColor = this._currentEditor.color || u[0], this._colorPicker.currentColor = this._currentFontColor), this.updateButtonStates();
  }
  applyValues() {
    this._markerArea && this._currentEditor && (this._currentEditor.fontSize = {
      value: parseFloat(this._currentFontSize),
      units: this._currentEditor.fontSize.units,
      step: this._currentEditor.fontSize.step
    }, this._currentEditor.color = this._currentFontColor, this._currentEditor.fontFamily = this._currentFontFamily);
  }
  updateVisibility() {
    const e = this._markerArea.currentMarkerEditor;
    this._panel && (e && e.is(w) ? this._panel.classList.remove("hidden") : this._panel.classList.add("hidden"));
  }
  updateButtonStates() {
    var t;
    const e = (t = this._fontSizePicker) == null ? void 0 : t.querySelectorAll("button");
    e && e.forEach((o) => {
      o.classList.remove("btn-active"), o.getAttribute("data-size") === this._currentFontSize && o.classList.add("btn-active");
    });
  }
}
class qe extends x {
  constructor(e) {
    super();
    r(this, "_toolbarContainer");
    r(this, "_leftActionContainer");
    r(this, "_propertyPanelContainer");
    r(this, "_rightActionContainer");
    r(this, "_undoButton");
    r(this, "_redoButton");
    r(this, "_zoomInButton");
    r(this, "_zoomOutButton");
    r(this, "_zoomResetButton");
    r(this, "_propertyPanels", []);
    r(this, "_markerArea");
    this._markerArea = e, this.getUI = this.getUI.bind(this), this.createActionButton = this.createActionButton.bind(this), this.handleActionButtonClick = this.handleActionButtonClick.bind(this), this.updateToolbarButtons = this.updateToolbarButtons.bind(this), this.updatePanelVisibility = this.updatePanelVisibility.bind(this), this.updatePanelContent = this.updatePanelContent.bind(this), this.applyPanelValues = this.applyPanelValues.bind(this);
  }
  getUI() {
    if (this._toolbarContainer === void 0) {
      this.attachMarkerAreaEvents(), this._toolbarContainer = document.createElement("div"), this._toolbarContainer.className = "flex space-x-1 p-2 justify-between @container", this._leftActionContainer = document.createElement("div"), this._leftActionContainer.className = "inline-flex space-x-1 p-1 border-1 border-transparent", this._toolbarContainer.appendChild(this._leftActionContainer), this._propertyPanelContainer = document.createElement("div"), this._propertyPanelContainer.className = "inline-flex space-x-1 items-center", this._toolbarContainer.appendChild(this._propertyPanelContainer), this._rightActionContainer = document.createElement("div"), this._rightActionContainer.className = "inline-flex space-x-1 p-1 border-1 border-transparent", this._toolbarContainer.appendChild(this._rightActionContainer), this._undoButton = this.createActionButton("Undo", "undo", Ee), this._leftActionContainer.appendChild(this._undoButton), this._redoButton = this.createActionButton("Redo", "redo", Oe), this._redoButton.classList.add("hidden", "@xl:flex"), this._leftActionContainer.appendChild(this._redoButton);
      const e = document.createElement("div");
      e.className = "join", this._rightActionContainer.appendChild(e), this._zoomOutButton = this.createActionButton(
        "Zoom Out",
        "zoom-out",
        T
      ), this._zoomOutButton.classList.add("join-item"), e.appendChild(this._zoomOutButton), this._zoomResetButton = this.createActionButton(
        "Zoom Reset",
        "zoom-reset",
        A
      ), this._zoomResetButton.classList.add("join-item", "hidden", "@xl:flex"), e.appendChild(this._zoomResetButton), this._zoomInButton = this.createActionButton(
        "Zoom In",
        "zoom-in",
        G
      ), this._zoomInButton.classList.add("join-item"), e.appendChild(this._zoomInButton);
      const t = new Re(
        this._markerArea,
        "Font",
        Ie
      );
      this._propertyPanels.push(t);
      const o = new De(
        this._markerArea,
        "Stroke",
        je
      );
      this._propertyPanels.push(o);
      const a = new He(
        this._markerArea,
        "Fill",
        Fe
      );
      this._propertyPanels.push(a);
      const n = new Ne(
        this._markerArea,
        "Opacity",
        Le
      );
      this._propertyPanels.push(n);
      const d = new Ve(
        this._markerArea,
        "Notes",
        Pe
      );
      this._propertyPanels.push(d), this._propertyPanels.forEach((c) => {
        var p;
        (p = this._propertyPanelContainer) == null || p.appendChild(c.getUI());
      });
    }
    return this._markerArea.addEventListener("markerselect", () => {
      this.updatePanelVisibility(), this.updatePanelContent();
    }), this._markerArea.addEventListener("markerdeselect", () => {
      this.applyPanelValues(), this.updatePanelVisibility();
    }), this.updateToolbarButtons(), this._toolbarContainer;
  }
  attachMarkerAreaEvents() {
    this._markerArea.addEventListener("areastatechange", () => {
      this.updateToolbarButtons();
    });
  }
  createActionButton(e, t, o) {
    return super.createActionButton(
      e,
      t,
      o,
      this.handleActionButtonClick
    );
  }
  handleActionButtonClick(e) {
    switch (e) {
      case "undo": {
        this._markerArea.isUndoPossible && this._markerArea.undo();
        break;
      }
      case "redo": {
        this._markerArea.isRedoPossible && this._markerArea.redo();
        break;
      }
      case "zoom-in": {
        this._markerArea.zoomLevel += 0.1;
        break;
      }
      case "zoom-out": {
        this._markerArea.zoomLevel > 0.2 && (this._markerArea.zoomLevel -= 0.1);
        break;
      }
      case "zoom-reset": {
        this._markerArea.zoomLevel = 1;
        break;
      }
    }
    this.updateToolbarButtons();
  }
  updateToolbarButtons() {
    var e, t;
    this._markerArea && ((e = this._undoButton) == null || e.classList.toggle(
      "btn-disabled",
      !this._markerArea.isUndoPossible
    ), (t = this._redoButton) == null || t.classList.toggle(
      "btn-disabled",
      !this._markerArea.isRedoPossible
    ));
  }
  updatePanelVisibility() {
    this._propertyPanels.forEach((e) => {
      e.updateVisibility();
    });
  }
  updatePanelContent() {
    this._propertyPanels.forEach((e) => {
      e.updateContent();
    });
  }
  applyPanelValues() {
    this._propertyPanels.forEach((e) => {
      e.applyValues();
    });
  }
}
class We extends HTMLElement {
  constructor() {
    super();
    r(this, "_mainContainer");
    r(this, "_toolbarContainer");
    r(this, "_toolboxContainer");
    r(this, "_markerAreaContainer");
    r(this, "_markerArea");
    r(this, "_toolbar");
    r(this, "_toolbox");
    /**
     * The target image to annotate.
     */
    r(this, "targetImage");
    r(this, "_theme", "light");
    r(this, "_settings", {
      renderOnSave: !0,
      rendererSettings: {
        naturalSize: !1,
        imageType: "image/png",
        imageQuality: 1,
        markersOnly: !1
      }
    });
    this._markerArea = new K(), this.addStyles = this.addStyles.bind(this), this.createLayout = this.createLayout.bind(this), this.addMarkerArea = this.addMarkerArea.bind(this), this.addToolbar = this.addToolbar.bind(this), this.addToolbox = this.addToolbox.bind(this), this.attachEvents = this.attachEvents.bind(this), this.restoreState = this.restoreState.bind(this), this.handleSaveButtonClick = this.handleSaveButtonClick.bind(this), this.handleCloseButtonClick = this.handleCloseButtonClick.bind(this), this.closeOpenDropdowns = this.closeOpenDropdowns.bind(this), this.attachShadow({ mode: "open" });
  }
  /**
   * The underlying `MarkerArea` component.
   * This is the main component that handles the annotation functionality.
   */
  get markerArea() {
    return this._markerArea;
  }
  /**
   * The theme of the editor.
   * Can be either "light" or "dark".
   *
   * The default is "light".
   */
  get theme() {
    return this._theme;
  }
  /**
   * Set the theme of the editor.
   * Can be either "light" or "dark".
   *
   * The default is "light".
   */
  set theme(e) {
    this._theme = e, this._mainContainer && this._mainContainer.setAttribute("data-theme", e);
  }
  /**
   * The settings for the editor.
   * This is used to configure the editor behavior.
   */
  get settings() {
    return this._settings;
  }
  connectedCallback() {
    this.addStyles(), this.createLayout(), this.addMarkerArea(), this.addToolbar(), this.addToolbox(), this.attachEvents();
  }
  disconnectedCallback() {
  }
  addStyles() {
    var t;
    const e = document.createElement("style");
    e.textContent = U, (t = this.shadowRoot) == null || t.appendChild(e);
  }
  createLayout() {
    var e;
    this._mainContainer = document.createElement("div"), this._mainContainer.id = "mainContainer", this._mainContainer.setAttribute("data-theme", this._theme), this._mainContainer.className = "grid grid-rows-[auto_1fr_auto] w-full h-full bg-base-200 overflow-hidden", this._toolbarContainer = document.createElement("div"), this._toolbarContainer.id = "toolbarContainer", this._toolbarContainer.className = "bg-base-100 z-10", this._mainContainer.appendChild(this._toolbarContainer), this._markerAreaContainer = document.createElement("div"), this._markerAreaContainer.id = "markerAreaContainer", this._markerAreaContainer.className = "flex overflow-hidden bg-base-200", this._mainContainer.appendChild(this._markerAreaContainer), this._toolboxContainer = document.createElement("div"), this._toolboxContainer.id = "toolboxContainer", this._toolboxContainer.className = "bg-base-100", this._mainContainer.appendChild(this._toolboxContainer), (e = this.shadowRoot) == null || e.appendChild(this._mainContainer);
  }
  addMarkerArea() {
    this.targetImage && this._markerAreaContainer && this._markerArea && (this._markerArea.targetImage = this.targetImage, this._markerAreaContainer.appendChild(this._markerArea), this.registerMarkerType());
  }
  registerMarkerType() {
    this._markerArea.registerMarkerType(m, _);
  }
  addToolbar() {
    this._toolbar === void 0 && this._toolbarContainer && this._markerArea && (this._toolbar = new ze(this._markerArea), this._toolbar.onSaveButtonClick = this.handleSaveButtonClick, this._toolbar.onCloseButtonClick = this.handleCloseButtonClick, this._toolbarContainer.appendChild(this._toolbar.getUI()));
  }
  async handleSaveButtonClick() {
    var e, t, o, a, n, d;
    if (this._markerArea) {
      const c = this._markerArea.getState();
      let p;
      if (this.settings.renderOnSave) {
        const s = new ee();
        s.targetImage = this.targetImage, s.naturalSize = ((e = this.settings.rendererSettings) == null ? void 0 : e.naturalSize) ?? !1, s.markersOnly = ((t = this.settings.rendererSettings) == null ? void 0 : t.markersOnly) ?? !1, s.width = (o = this.settings.rendererSettings) == null ? void 0 : o.width, s.height = (a = this.settings.rendererSettings) == null ? void 0 : a.height, s.imageType = ((n = this.settings.rendererSettings) == null ? void 0 : n.imageType) ?? "image/png", s.imageQuality = ((d = this.settings.rendererSettings) == null ? void 0 : d.imageQuality) ?? 1, p = await s.rasterize(c);
      }
      this.dispatchEvent(
        new CustomEvent("editorsave", {
          detail: { annotationEditor: this, state: c, dataUrl: p }
        })
      );
    }
  }
  handleCloseButtonClick() {
    this.dispatchEvent(
      new CustomEvent("editorclose", {
        detail: { annotationEditor: this }
      })
    );
  }
  addToolbox() {
    this._toolbox === void 0 && this._toolboxContainer && this._markerArea && (this._toolbox = new qe(this._markerArea), this._toolboxContainer.appendChild(this._toolbox.getUI()));
  }
  attachEvents() {
    var e;
    (e = this._mainContainer) == null || e.addEventListener("click", (t) => {
      var a;
      let o = null;
      t.target instanceof Element && (o = (a = t.target) == null ? void 0 : a.closest(".dropdown")), o instanceof HTMLDetailsElement ? this.closeOpenDropdowns(o) : this.closeOpenDropdowns();
    });
  }
  /**
   * Loads a previously saved annotation into the editor.
   *
   * @param state The state to restore.
   */
  restoreState(e) {
    this._markerArea && this._markerArea.restoreState(e);
  }
  closeOpenDropdowns(e) {
    var o;
    const t = (o = this._mainContainer) == null ? void 0 : o.querySelectorAll(".dropdown[open]");
    t == null || t.forEach((a) => {
      a !== e && a.removeAttribute("open");
    });
  }
  addEventListener(e, t, o) {
    super.addEventListener(e, t, o);
  }
  removeEventListener(e, t, o) {
    super.removeEventListener(e, t, o);
  }
}
window && window.customElements && window.customElements.get("mjsui-annotation-editor") === void 0 && window.customElements.define("mjsui-annotation-editor", We);
class Ze extends x {
  constructor(e) {
    super();
    r(this, "_toolbarContainer");
    r(this, "_rightActionContainer");
    r(this, "_zoomInButton");
    r(this, "_zoomOutButton");
    r(this, "_zoomResetButton");
    r(this, "_markerView");
    this._markerView = e, this.getUI = this.getUI.bind(this), this.createActionButton = this.createActionButton.bind(this), this.handleActionButtonClick = this.handleActionButtonClick.bind(this);
  }
  getUI() {
    if (this._toolbarContainer === void 0) {
      this._toolbarContainer = document.createElement("div"), this._toolbarContainer.className = "inline-flex", this._rightActionContainer = document.createElement("div"), this._rightActionContainer.className = "inline-flex space-x-1", this._toolbarContainer.appendChild(this._rightActionContainer);
      const e = document.createElement("div");
      e.className = "join", this._rightActionContainer.appendChild(e), this._zoomOutButton = this.createActionButton(
        "Zoom Out",
        "zoom-out",
        T
      ), this._zoomOutButton.classList.add("join-item"), e.appendChild(this._zoomOutButton), this._zoomResetButton = this.createActionButton(
        "Zoom Reset",
        "zoom-reset",
        A
      ), this._zoomResetButton.classList.add("join-item"), e.appendChild(this._zoomResetButton), this._zoomInButton = this.createActionButton(
        "Zoom In",
        "zoom-in",
        G
      ), this._zoomInButton.classList.add("join-item"), e.appendChild(this._zoomInButton);
    }
    return this._toolbarContainer;
  }
  createActionButton(e, t, o) {
    return super.createActionButton(
      e,
      t,
      o,
      this.handleActionButtonClick
    );
  }
  handleActionButtonClick(e) {
    switch (e) {
      case "zoom-in": {
        this._markerView.zoomLevel += 0.1;
        break;
      }
      case "zoom-out": {
        this._markerView.zoomLevel > 0.2 && (this._markerView.zoomLevel -= 0.1);
        break;
      }
      case "zoom-reset": {
        this._markerView.zoomLevel = 1;
        break;
      }
    }
  }
}
class $e extends HTMLElement {
  constructor() {
    super();
    r(this, "_mainContainer");
    r(this, "_toolbarContainer");
    r(this, "_markerViewContainer");
    r(this, "_markerView");
    r(this, "_toolbar");
    /**
     * The target image element to be annotated.
     * This is the image that will be displayed in the viewer.
     */
    r(this, "targetImage");
    r(this, "_theme", "light");
    this._markerView = new te(), this.addStyles = this.addStyles.bind(this), this.createLayout = this.createLayout.bind(this), this.addMarkerView = this.addMarkerView.bind(this), this.addToolbar = this.addToolbar.bind(this), this.attachShadow({ mode: "open" });
  }
  /**
   * The underlying marker.js 3 `MarkerView` component.
   * This is the component that actually renders the annotations on top of the image.
   */
  get markerView() {
    return this._markerView;
  }
  /**
   * The theme of the viewer. Can be either "light" or "dark".
   */
  get theme() {
    return this._theme;
  }
  /**
   * Sets the theme of the viewer. Can be either "light" or "dark".
   */
  set theme(e) {
    this._theme = e, this._mainContainer && this._mainContainer.setAttribute("data-theme", e);
  }
  connectedCallback() {
    this.addStyles(), this.createLayout(), this.addMarkerView(), this.addToolbar();
  }
  disconnectedCallback() {
  }
  addStyles() {
    var t;
    const e = document.createElement("style");
    e.textContent = U, (t = this.shadowRoot) == null || t.appendChild(e);
  }
  createLayout() {
    var t;
    this._mainContainer = document.createElement("div"), this._mainContainer.id = "mainContainer", this._mainContainer.setAttribute("data-theme", this._theme), this._mainContainer.className = "flex relative w-full h-full bg-base-200 overflow-hidden", this._markerViewContainer = document.createElement("div"), this._markerViewContainer.id = "markerViewContainer", this._markerViewContainer.className = "flex overflow-hidden w-full h-full bg-base-200", this._mainContainer.appendChild(this._markerViewContainer);
    const e = document.createElement("div");
    e.id = "toolbarContainer", e.className = "absolute bottom-5 flex items-center justify-end -mx-5 w-full bg-transparent pointer-events-none", this._toolbarContainer = document.createElement("div"), this._toolbarContainer.className = "inline-flex pointer-events-auto bg-base-100/40 hover:bg-base-100/90 rounded-md shadow-2xs", e.appendChild(this._toolbarContainer), this._mainContainer.appendChild(e), (t = this.shadowRoot) == null || t.appendChild(this._mainContainer);
  }
  addMarkerView() {
    this.targetImage && this._markerViewContainer && this._markerView && (this._markerView.targetImage = this.targetImage, this._markerViewContainer.appendChild(this._markerView));
  }
  addToolbar() {
    this._toolbar === void 0 && this._toolbarContainer && this._markerView && (this._toolbar = new Ze(this._markerView), this._toolbarContainer.appendChild(this._toolbar.getUI()));
  }
  /**
   * Displays a previously saved annotation in the viewer.
   *
   * @param state The state to be shown in the viewer.
   */
  show(e) {
    this._markerView && this._markerView.show(e);
  }
}
window && window.customElements && window.customElements.get("mjsui-annotation-viewer") === void 0 && window.customElements.define("mjsui-annotation-viewer", $e);
export {
  We as AnnotationEditor,
  $e as AnnotationViewer
};
