export interface UnionFind {
  connect: (a: number, b: number) => void;
  isConnected: (a: number, b: number) => boolean;
}
