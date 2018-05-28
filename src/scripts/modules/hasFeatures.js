function hasFeatures() {
  var i = arguments.length;
  while (i--) {
    if (!m[arguments[i]]) {
      return false;
    }
  }
  return true;
}

export { hasFeatures };