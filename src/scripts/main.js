import { isHostMethod } from './modules/isHostMethod';
import { isHostObjectProperty } from './modules/isHostObjectProperty';
import { addClass } from './modules/addClass/1';
import { removeClass } from './modules/removeClass/1';

// expose
m.isHostMethod = isHostMethod;
m.isHostObjectProperty = isHostObjectProperty;
m.addClass = addClass;
m.removeClass = removeClass;

// urgh
m.noop = function() {}();