// Uses ~n²/2 comparisons = (n-1) + (n-2) + ... + 1 + 0
// Uses n position exchanges
// Running time insensitive to input => Quadratic time, even if already sorted
// Data movement is minimal => Linear number of exchanges

export class SelectionSort {
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
      let min = i;
      for (let j = i + 1; j < n.length; j++) {
        if (this.isLess(n[j], n[min])) {
          min = j;
        }
      }
      this.exchange(n, i, min);
    }
  }
}
