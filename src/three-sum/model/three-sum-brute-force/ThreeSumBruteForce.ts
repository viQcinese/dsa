// O(n³)

export class ThreeSum {
  static count(n: number[]) {
    let count = 0;
    for (let i = 0; i < n.length; i++) {
      for (let j = i + 1; j < n.length; j++) {
        for (let k = j + 1; k < n.length; k++) {
          if (n[i] + n[j] + n[k] === 0) {
            count++;
          }
        }
      }
    }
    return count;
  }
}
