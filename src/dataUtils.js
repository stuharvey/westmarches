export function parseSheetData(data, options = { skipFirst: 0 }) {
  // take data from the above sheet and parse it to machine readable
  const allRows = data.reduce(
    (currentRows, entry) => {
      try {
        const cell = entry["gs$cell"];
        const row = parseInt(cell?.row, 10) - 1;
        const val = cell.$t;

        if (currentRows.length <= row) {
          currentRows.push([]);
        }
        currentRows[row].push(val);
        return currentRows;
      } catch (e) {
        console.error("Error parsing rows from API");
        throw e;
      }
    },
    [[]]
  );
  const [header, ...rows] = allRows.slice(options.skipFirst || 0);
  return { header, rows };
}

export function zip(listA, listB) {
  if (listA?.length !== listB?.length) {
    throw new Error("zip() requires two equal length arrays");
  }
  const zipped = {};
  listA.forEach((key, i) => (zipped[key] = listB[i]));
  return zipped;
}
