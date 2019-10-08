import {CellValue} from '../'
import {Size} from '../Matrix'
import {DependencyGraph} from '../DependencyGraph/DependencyGraph'
import {AbsoluteCellRange} from '../AbsoluteCellRange'

type ScalarValue = number

export class SimpleRangeValue {
  constructor(
    public readonly size: Size,
    public readonly dependencyGraph: DependencyGraph,
    public data?: ScalarValue[][],
    public readonly range?: AbsoluteCellRange,
  ) {
  }

  public static withData(data: number[][], size: Size, range: AbsoluteCellRange | undefined, dependencyGraph: DependencyGraph): SimpleRangeValue {
    return new SimpleRangeValue(size, dependencyGraph, data, range)
  }

  public static fromRange(range: AbsoluteCellRange, dependencyGraph: DependencyGraph): SimpleRangeValue {
    return new SimpleRangeValue({ width: range.width(), height: range.height() }, dependencyGraph, undefined, range)
  }

  public static fromScalar(scalar: ScalarValue, dependencyGraph: DependencyGraph): SimpleRangeValue {
    return new SimpleRangeValue({ width: 1, height: 1 }, dependencyGraph, [[scalar]], undefined)
  }

  public width(): number {
    return this.size.width;
  }

  public height(): number {
    return this.size.height;
  }

  public raw(): ScalarValue[][] {
    if (this.data === undefined) {
      this.data = this.computeDataFromDependencyGraph()
    }

    return this.data
  }

  private computeDataFromDependencyGraph(): ScalarValue[][] {
    const result = []

    let i = 0
    let row = []
    for (const cellFromRange of this.range!.addresses()) {
      const value = this.dependencyGraph.getCellValue(cellFromRange)
      if (typeof value === 'number') {
        row.push(value)
        ++i
      } else {
        throw "Not supported yet"
        // return new CellError(ErrorType.VALUE)
      }

      if (i % this.range!.width() === 0) {
        i = 0
        result.push([...row])
        row = []
      }
    }

    return result
  }
}

export type InterpreterValue = CellValue | SimpleRangeValue
