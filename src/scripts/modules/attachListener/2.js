import { isHostMethod } from '../isHostMethod.js';
import { html } from '../html.js';
import { canCall } from '../canCall.js';

var attachListener;

if(isHostMethod(html, 'addEventListener')) {
  attachListener = function(el, eventType, fn) {
    el.addEventListener(eventType, fn, false);
    return fn;
  };
} else if(isHostMethod(html, 'attachEvent') && canCall) {
  // The "theseObjects" variable must be global
  // or a property of a global object (e.g. a "namespace" object).
  // Stores references to objects used for - this - object in listeners
  m.theseObjects = [];

  var theseObjectsIndex = 0;

  attachListener = function(el, eventType, fn) {
    var thisObjectIndex = theseObjectsIndex++;

    // Store reference to object used for - this - in listener
    m.theseObjects[thisObjectIndex] = el;

    var listener = function() {
      var e = window.event;
      fn.call(m.theseObjects[thisObjectIndex], e);
    };

    el.attachEvent('on'+eventType, listener);

		// Discard unneeded references
		// Prevents circular references with host objects (e.g. the element)
		// Prevents IE leaks related to such circular references
		// No unload event cleanup required
    el = null;

    return listener;
  };
}

export { attachListener };