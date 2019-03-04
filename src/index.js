/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences) {
  let trianglesCount = 0;
  let a, b, c;

  for (var i = 0; i < preferences.length; i++) {
    a = b = c = -1;

    if (preferences[i] > 0) {
      a = preferences[i];
    }
    if (preferences[a - 1] > 0) {
      b = preferences[a - 1];
    }
    if (preferences[b - 1] > 0) {
      c = preferences[b - 1];
    }

    if (c - 1 == i && (a != b && b != c)) {
      preferences[a - 1] = preferences[b - 1] = preferences[c - 1] = -1;
      trianglesCount++;
    }
  }
  return trianglesCount;
}