import { html } from './modules/html';
import { isHostMethod } from './modules/isHostMethod';
import { isHostObjectProperty } from './modules/isHostObjectProperty';
import { addClass } from './modules/addClass/2';
import { removeClass } from './modules/removeClass/1';

if(html) {
  m.isHostMethod = isHostMethod;
  m.isHostObjectProperty = isHostObjectProperty;
  m.addClass = addClass;
  m.removeClass = removeClass;
}

// urgh
m.noop = function() {}();