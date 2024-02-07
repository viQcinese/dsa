// Eager algorithm to find connectivity problem
// Defect: Union is too expensive. Ex: N commands on N nodes, would take n(2) operations
// Trees are flat, but expensive to keep them flat

class QuickFind { 
  private parents: number[];

  constructor(nodes: number) {
    this.parents = Array.from({ length: nodes }, (_, i) => i)
  }

  public union(a: number, b: number): void { 
    const aParent = this.parents[a]
    const bParent = this.parents[b]
    for (let index in this.parents) {
      if (this.parents[index] === aParent) {
        this.parents[index] = bParent
      }
    }
    console.log(this.parents)
  }

  public connected(a: number, b: number): boolean { 
    console.log(this.parents[a] === this.parents[b])
    return this.parents[a] === this.parents[b]
  }
}

const qf = new QuickFind(10)
qf.union(4, 3)
qf.union(3, 8)
qf.union(6, 5)
qf.union(9, 4)
qf.union(2, 1)
qf.union(8, 9)
qf.connected(5, 0)
qf.union(5, 0)
qf.union(7, 2)
qf.union(6, 1)  


