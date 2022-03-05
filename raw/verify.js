let _HEAD = decodeURIComponent(atob(""));

let _BODY = decodeURIComponent(atob(""));


let _HTML_CLASSES = "js flexbox canvas canvastext webgl no-touch geolocation postmessage no-websqldatabase indexeddb hashchange history draganddrop websockets rgba hsla multiplebgs backgroundsize borderimage borderradius boxshadow textshadow opacity cssanimations csscolumns cssgradients no-cssreflections csstransforms csstransforms3d csstransitions fontface generatedcontent video audio localstorage sessionstorage webworkers applicationcache svg inlinesvg smil svgclippaths js flexbox canvas canvastext webgl no-touch geolocation postmessage no-websqldatabase indexeddb hashchange history draganddrop websockets rgba hsla multiplebgs backgroundsize borderimage borderradius boxshadow textshadow opacity cssanimations csscolumns cssgradients no-cssreflections csstransforms csstransforms3d csstransitions fontface generatedcontent video audio localstorage sessionstorage webworkers applicationcache svg inlinesvg smil svgclippaths citizens-Firefox citizens-user-none";

let _BODY_CLASS = "responsive-enabled";



let _h_c = _HTML_CLASSES.includes(" ")?_HTML_CLASSES.replaceAll("  ", " ").split(" ") : [_HTML_CLASSES];
let _b_c = _BODY_CLASS.includes(" ")?_BODY_CLASS.replaceAll("  ", " ").split(" ") : [_BODY_CLASS];
document.querySelector("html").classList.add(..._h_c);
document.body.classList.add(..._b_c);
$(document.head).append(_HEAD)
$(document.body).prepend(_BODY);
