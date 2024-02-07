// Lazy  algorithm to find connectivity problem
// Defect: Trees can get tall. Find is too expensive (could be N array accesses)

class QuickUnion { 
  private parents: number[];

  constructor(nodes: number) {
    this.parents = Array.from({ length: nodes }, (_, i) => i)
  }

  private parent(a: number): number {
    while (a !== this.parents[a]) {
      a = this.parents[a]
    }
    return a
  }

  public union(a: number, b: number): void { 
    const parentA = this.parent(a)
    const parentB = this.parent(b)
    this.parents[parentA] = parentB
    console.log(this.parents)
  }

  public connected(a: number, b: number): boolean { 
    console.log(this.parent(this.parents[a]) === this.parent(this.parents[b]))
    return this.parent(a) === this.parent(b)
  }
}

const qu = new QuickUnion(10)
qu.union(4, 3)
qu.union(3, 8)
qu.union(6, 5) 
qu.union(9, 4)
qu.union(2, 1)
qu.union(8, 9)
qu.connected(5, 4)
qu.union(5, 0)
qu.union(7, 2)
qu.union(6, 1)  
qu.union(7, 3)  


