// Find: takes time proportional to depth of a and b
// Union: takes constant time, given parents
// Depth of any node X is at most log (base 2) of N (lgN)
// Defect: Trees can get tall. parent operation is too expensive (could be N array accesses)

export class QuickUnion {
  parents: number[];
  weights: number[];

  constructor(n: number) {
    this.parents = Array.from({ length: n }, (_, i) => i);
    this.weights = Array.from({ length: n }, (_, i) => 1);
  }

  private parent(a: number) {
    while (this.parents[a] !== a) {
      a = this.parents[a];
    }
    return a;
  }

  connected(a: number, b: number) {
    return this.parent(a) === this.parent(b);
  }

  connect(a: number, b: number) {
    const parentA = this.parent(a);
    const parentB = this.parent(b);

    if (parentA === parentB) {
      return;
    }

    if (this.weights[parentA] < this.weights[parentB]) {
      this.parents[parentA] = parentB;
      this.weights[parentB] += this.weights[parentA];
    } else {
      this.parents[parentB] = parentA;
      this.weights[parentA] += this.weights[parentB];
    }
  }
}
