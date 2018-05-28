import { isHostMethod } from '../isHostMethod.js';
import { html } from '../html.js';

var getEventTarget;

if(isHostMethod(html, 'addEventListener')) {
  getEventTarget = function(e) {
    var target = e.target;

    // Check if not an element (e.g. a text node)
    if (1 != target.nodeType) {
      // Set reference to parent node (which must be an element)
      target = target.parentNode;
    }
    return target;
  };
} else if(isHostMethod(html, 'attachEvent')) {
  getEventTarget = function(e) {
    return e.srcElement;
  };
}

export { getEventTarget };