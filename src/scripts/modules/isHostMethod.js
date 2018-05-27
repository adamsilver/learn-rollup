function isHostMethod(object, method) {
  var objectMethod = object[method];
  var type = typeof objectMethod;
  return	type == 'function' ||
		type == 'object' && null !== objectMethod ||
		type == 'unknown';
}

export { isHostMethod };