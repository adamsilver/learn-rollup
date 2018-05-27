function isHostObjectProperty(object, property) {
  var objectProperty = object[property];
  return typeof objectProperty == 'object' || typeof objectProperty == 'function' && null !== objectProperty;
}

export { isHostObjectProperty };