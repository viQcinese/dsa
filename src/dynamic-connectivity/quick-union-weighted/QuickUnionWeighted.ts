// Find: takes time proportional to depth of a and b
// Union: takes constant time, given parents
// Depth of any node X is at most log (base 2) of N (lgN)
// Defect: Trees can get tall. parent operation is too expensive (could be N array accesses)

class QuickUnionWeighted { 
  private parents: number[];
  private parentDepths: number[];

  constructor(nodes: number) {
    this.parents = Array.from({ length: nodes }, (_, i) => i)
    this.parents = Array.from({ length: nodes }, (_, i) => 0)
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
    if(this.parentDepths[parentA] <= this.parentDepths[parentB]) {
      this.parents[parentA] = parentB
    } else {
      this.parents[parentB] = parentA
    }
    console.log(this.parents)
  }

  public connected(a: number, b: number): boolean { 
    console.log(this.parent(this.parents[a]) === this.parent(this.parents[b]))
    return this.parent(a) === this.parent(b)
  }
}

const quw = new QuickUnionWeighted(10)
quw.union(4, 3)
quw.union(3, 8)
quw.union(6, 5) 
quw.union(9, 4)
quw.union(2, 1)
quw.union(8, 9)
quw.connected(5, 4)
quw.union(5, 0)
quw.union(7, 2)
quw.union(6, 1)  
quw.union(7, 3)  


