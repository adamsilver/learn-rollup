import { isHostMethod } from '../isHostMethod.js';
import { isHostObjectProperty } from '../isHostObjectProperty.js';
import { html } from '../html.js';

var removeClass;

if (html && isHostObjectProperty(html, 'classList') && isHostMethod(html.classList, 'remove') ) {
  removeClass = function(el, className) {
    el.classList.remove(className);
  };
}

export { removeClass };