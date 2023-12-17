// IdeologyFinder.js
class IdeologyFinder {
  constructor(collection) {
    this.collection = collection;
  }

  findIdeology(x, y) {
    for (const { label, range } of this.collection) {
      const [minX, maxX, minY, maxY] = [
        range.x[0],
        range.x[1],
        range.y[0],
        range.y[1],
      ];
      if (x >= minX && x <= maxX && y >= minY && y <= maxY) {
        return label;
      }
    }
    return null;
  }
}

export async function get(x, y) {
  // Fetch ideology collection from the JSON file
  const response = await fetch('./ideologies.json');
  const ideologyCollection = await response.json();

  return new IdeologyFinder(ideologyCollection).findIdeology(x, y);
}
