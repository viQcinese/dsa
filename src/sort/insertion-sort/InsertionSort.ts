// Uses ~n²/4 comparisons
// Uses ~n²/4 exchanges
// Expects each entry to move halfway back
// Best case: array is in ascending order, it takes n - 1 compares and 0 exchanes
// Worst case: array is in reverse ascending order (and no duplicates), it takes ~n²/2 compares and ~n²/2 exchanges
// Is linear for partially sorted arrays = arrays with only some exchanges positions

export class InsertionSort {
  private static isLess(a: number, b: number) {
    return a < b;
  }

  private static exchange(a: number[], i: number, j: number) {
    const oldMin = a[i];
    const newMin = a[j];
    a[i] = newMin;
    a[j] = oldMin;
  }

  static sort(n: number[]) {
    for (let i = 0; i < n.length; i++) {
      for (let j = i; j >= 0; j--) {
        if (this.isLess(n[j], n[j - 1])) {
          this.exchange(n, j - 1, j);
        }
      }
    }
  }
}
