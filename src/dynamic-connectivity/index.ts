import { PercolationStats } from "./model/percolation/PercolationStats";

const percolationStats = new PercolationStats(500, 100);
percolationStats.runTrials();
console.log(percolationStats.means());
