var html;

import { isHostObjectProperty } from './isHostObjectProperty.js';

if(isHostObjectProperty(global.document, 'documentElement')) {
  html = document.documentElement;
}

export { html };