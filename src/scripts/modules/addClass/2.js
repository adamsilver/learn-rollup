import { isHostMethod } from '../isHostMethod.js';
import { isHostObjectProperty } from '../isHostObjectProperty.js';
import { html } from '../html.js';

var addClass;

if (isHostObjectProperty(html, 'classList') && isHostMethod(html.classList, 'add') ) {
  addClass = function(el, className) {
    el.classList.add(className);
  };
} else if (html && 'string' === typeof html.className ) {
  addClass = function(el, className) {
    var re;
    if (!el.className) {
      el.className = className;
    } else {
      re = new RegExp('(^|\\s)' + className + '(\\s|$)');
      if (!re.test(el.className)) {
        el.className += ' ' + className;
      }
    }
  };
}

export { addClass };