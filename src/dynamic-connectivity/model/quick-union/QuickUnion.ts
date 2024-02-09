// Lazy  algorithm to find connectivity problem
// Defect: Trees can get tall. Find is too expensive (could be N array accesses)

import { UnionFind } from "../../../model/UnionFind";

export class QuickUnion implements UnionFind {
  private parents: number[];

  constructor(nodes: number) {
    this.parents = Array.from({ length: nodes }, (_, i) => i);
  }

  private parent(a: number): number {
    while (a !== this.parents[a]) {
      a = this.parents[a];
    }
    return a;
  }

  public connect(a: number, b: number): void {
    const parentA = this.parent(a);
    const parentB = this.parent(b);
    this.parents[parentA] = parentB;
  }

  public isConnected(a: number, b: number): boolean {
    return this.parent(a) === this.parent(b);
  }
}
