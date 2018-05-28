import { attachListener } from './attachListener/2.js';
import { getEventTarget } from './getEventTarget/2.js';
import { canCall } from './canCall.js';

var delegateListener;

if(attachListener && getEventTarget && canCall) {
  delegateListener = function(el, eventType, fn, fnDelegate) {
    var listener = function(e) {
      var currentTarget = fnDelegate(el, getEventTarget(e));
      if(currentTarget) {
        // fn(currentTarget, e, currentTarget, el);
        fn(e, currentTarget, el); // new?
      }
    };
    return attachListener(el, eventType, listener);
  };
}

export { delegateListener };