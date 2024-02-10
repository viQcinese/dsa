// O(n²lg(n))

export class ThreeSum {
  private static binarySearch(n: number[], target: number): number {
    let high = n.length - 1;
    let low = 0;

    while (low <= high) {
      const mid = Math.floor((high + low) / 2);

      if (n[mid] < target) {
        low = mid + 1;
      }
      if (n[mid] > target) {
        high = mid - 1;
      }
      if (n[mid] === target) {
        return mid;
      }
    }
    return -1;
  }

  static count(n: number[]) {
    let count = 0;
    n.sort((a, b) => a - b);
    for (let i = 0; i < n.length; i++) {
      for (let j = i + 1; j < n.length; j++) {
        const targetNumber = -(n[i] + n[j]);
        if (ThreeSum.binarySearch(n.slice(j + 1), targetNumber) > -1) {
          count++;
        }
      }
    }
    return count;
  }
}
