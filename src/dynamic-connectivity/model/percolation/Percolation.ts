import { QuickUnion } from "../quick-union-weighted-with-path-compression/QuickUnionWeightedWithPathCompression";

export class Percolation {
  nodes: boolean[];
  quickUnion: QuickUnion;
  size: number;
  startId: number;
  endId: number;

  constructor(n: number) {
    this.nodes = Array.from({ length: n * n }, () => false);
    this.quickUnion = new QuickUnion(n * n + 2);
    this.size = n;
    this.startId = n * n;
    this.endId = n * n + 1;

    for (let i = 0; i < n; i++) {
      this.quickUnion.connect(this.startId, i);
      this.quickUnion.connect(this.endId, n * (n - 1) + i);
    }
  }

  private nodeId(row: number, column: number) {
    if (row < 0 || column < 0 || row >= this.size || column >= this.size) {
      throw new Error("Out of bounds");
    }
    return row * this.size + column;
  }

  private isValid(row: number, column: number) {
    return row >= 0 && row < this.size && column >= 0 && column < this.size;
  }

  open(row: number, column: number) {
    const nodeId = this.nodeId(row, column);
    this.nodes[nodeId] = true;

    if (this.isValid(row - 1, column) && this.isOpen(row - 1, column)) {
      this.quickUnion.connect(nodeId, this.nodeId(row - 1, column));
    }
    if (this.isValid(row + 1, column) && this.isOpen(row + 1, column)) {
      this.quickUnion.connect(nodeId, this.nodeId(row + 1, column));
    }
    if (this.isValid(row, column - 1) && this.isOpen(row, column - 1)) {
      this.quickUnion.connect(nodeId, this.nodeId(row, column - 1));
    }
    if (this.isValid(row, column + 1) && this.isOpen(row, column + 1)) {
      this.quickUnion.connect(nodeId, this.nodeId(row, column + 1));
    }
  }

  isOpen(row: number, column: number) {
    const nodeId = this.nodeId(row, column);
    return this.nodes[nodeId];
  }

  openNodes() {
    return this.nodes.reduce((prev, cur) => prev + +cur, 0);
  }

  percolates() {
    return this.quickUnion.connected(this.startId, this.endId);
  }
}
