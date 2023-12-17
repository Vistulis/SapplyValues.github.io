class IdeologyFinder {
  constructor(collection) {
    this.collection = collection;
  }

  findIdeology(x, y) {
    for (const { string, minX, maxX, minY, maxY } of this.collection) {
      if (x >= minX && x <= maxX && y >= minY && y <= maxY) {
        return string;
      }
    }
    return null;
  }
}

function get(x, y) {
  const ideologyCollection = [
    { string: 'Center', minX: -1, maxX: 1, minY: -1, maxY: 1 },
    { string: 'AuthLeft', minX: -10, maxX: -2, minY: -10, maxY: 10 },
    { string: 'LibLeft', minX: -10, maxX: -2, minY: -1, maxY: 1 },
    { string: 'LibRight', minX: 2, maxX: 10, minY: -1, maxY: 1 },
    { string: 'AuthRight', minX: 2, maxX: 10, minY: -10, maxY: 10 },
    { string: 'AuthCenter', minX: -1, maxX: 1, minY: 0, maxY: 1 },
    { string: 'LibCenter', minX: -1, maxX: 1, minY: -1, maxY: 0 },
    { string: 'Center-LibLeft', minX: -1, maxX: -0.2, minY: -0.5, maxY: 1 },
    { string: 'Center-LibRight', minX: 0.2, maxX: 1, minY: -0.5, maxY: 1 },
    { string: 'Center-AuthLeft', minX: -1, maxX: -0.2, minY: -1, maxY: 0.5 },
    { string: 'Center-AuthRight', minX: 0.2, maxX: 1, minY: -1, maxY: 0.5 },
    { string: 'OffCompass-LibLeft', minX: -15, maxX: -11, minY: -0.5, maxY: 0.5 },
    { string: 'OffCompass-LibRight', minX: 11, maxX: 15, minY: -0.5, maxY: 0.5 },
    { string: 'OffCompass-AuthLeft', minX: -15, maxX: -11, minY: -5, maxY: 5 },
    { string: 'OffCompass-AuthRight', minX: 11, maxX: 15, minY: -5, maxY: 5 },
    { string: 'OffCompass-Center', minX: -15, maxX: 15, minY: -5, maxY: 5 },
  ];

  return new IdeologyFinder(ideologyCollection).findIdeology(x, y);
}

