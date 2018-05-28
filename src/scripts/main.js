import { html } from './modules/html';
import { hasFeatures } from './modules/hasFeatures';
import { isHostMethod } from './modules/isHostMethod';
import { isHostObjectProperty } from './modules/isHostObjectProperty';
import { addClass } from './modules/addClass/2';
import { removeClass } from './modules/removeClass/1';
import { delegateListener } from './modules/delegateListener';
import { getEventTarget } from './modules/getEventTarget/2';

if(html) {
  m.hasFeatures = hasFeatures;
  m.isHostMethod = isHostMethod;
  m.isHostObjectProperty = isHostObjectProperty;
  m.addClass = addClass;
  m.removeClass = removeClass;
  m.delegateListener = delegateListener;
  m.getEventTarget = getEventTarget;
}

// urgh
m.noop = function() {}();