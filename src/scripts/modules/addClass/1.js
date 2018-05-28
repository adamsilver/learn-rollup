import { isHostMethod } from '../isHostMethod.js';
import { isHostObjectProperty } from '../isHostObjectProperty.js';
import { html } from '../html.js';

var addClass;

if (isHostObjectProperty(html, 'classList') && isHostMethod(html.classList, 'add') ) {
  addClass = function(el, className) {
    el.classList.add(className);
  };
}

export { addClass };
