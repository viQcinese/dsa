import { UnionFind } from "../../../model/UnionFind";

export class QuickUnion implements UnionFind {
  parents: number[];
  weights: number[];

  constructor(n: number) {
    this.parents = Array.from({ length: n }, (_, i) => i);
    this.weights = Array.from({ length: n }, (_, i) => 1);
  }

  private parent(a: number) {
    while (this.parents[a] !== a) {
      this.parents[a] = this.parents[this.parents[a]];
      a = this.parents[a];
    }
    return a;
  }

  isConnected(a: number, b: number) {
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
