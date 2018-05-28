import { isHostMethod } from '../isHostMethod.js';
import { html } from '../html.js';

var attachListener;

if(isHostMethod(html, 'addEventListener')) {
  attachListener = function(el, eventType, fn) {
    el.addEventListener(eventType, fn, false);
    return fn;
  };
}