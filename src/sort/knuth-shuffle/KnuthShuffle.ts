// Also known as Fischer-Yates Shuffle
// Linear time performance

export class KnuthShuffle {
  private static exchange(a: number[], i: number, j: number) {
    const oldEntry = a[i];
    const newEntry = a[j];
    a[i] = newEntry;
    a[j] = oldEntry;
  }

  static shuffle(n: number[]) {
    for (let i = 0; i < n.length; i++) {
      const targetIndex = Math.floor(Math.random() * (i + 1));
      this.exchange(n, i, targetIndex);
    }
    return n;
  }
}
