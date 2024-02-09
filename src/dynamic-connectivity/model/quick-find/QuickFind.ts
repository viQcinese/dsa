// Eager algorithm to find connectivity problem
// Defect: Union is too expensive. Ex: N commands on N nodes, would take n(2) operations
// Trees are flat, but expensive to keep them flat

import { UnionFind } from "../../../model/UnionFind";

export class QuickFind implements UnionFind {
  private parents: number[];

  constructor(nodes: number) {
    this.parents = Array.from({ length: nodes }, (_, i) => i);
  }

  public connect(a: number, b: number): void {
    const aParent = this.parents[a];
    const bParent = this.parents[b];
    for (let index in this.parents) {
      if (this.parents[index] === aParent) {
        this.parents[index] = bParent;
      }
    }
    console.log(this.parents);
  }

  public isConnected(a: number, b: number): boolean {
    return this.parents[a] === this.parents[b];
  }
}
