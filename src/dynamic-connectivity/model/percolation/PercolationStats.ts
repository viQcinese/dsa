import { Percolation } from "./Percolation";

export class PercolationStats {
  trials: number;
  size: number;
  percolation: Percolation;
  attempts: number[];

  constructor(size: number, trials: number) {
    this.trials = trials;
    this.size = size;
    this.percolation = new Percolation(size);
    this.attempts = [];
  }

  runTrials() {
    for (let i = 0; i < this.trials; i++) {
      let attempt = 0;

      while (!this.percolation.percolates()) {
        const row = Math.floor(Math.random() * this.size);
        const column = Math.floor(Math.random() * this.size);
        if (!this.percolation.isOpen(row, column)) {
          this.percolation.open(row, column);
          attempt++;
        }
      }
      this.attempts[i] = attempt;
    }
  }

  means() {
    const sum = this.attempts.reduce((acc, val) => acc + val, 0);
    return sum / (this.size * this.size);
  }
}
