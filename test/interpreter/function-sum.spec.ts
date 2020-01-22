import {HyperFormula} from '../../src'
import {CellError, ErrorType} from '../../src/Cell'
import '../testConfig'
import {adr} from '../testUtils'

describe('SUM', () => {
  it('SUM without args',  () => {
    const engine =  HyperFormula.buildFromArray([['=SUM()']])

    expect(engine.getCellValue(adr('A1'))).toEqual(0)
  })

  it('SUM with args',  () => {
    const engine =  HyperFormula.buildFromArray([['=SUM(1, B1)', '3.14']])

    expect(engine.getCellValue(adr('A1'))).toBeCloseTo(4.14)
  })

  it('SUM with range args',  () => {
    const engine =  HyperFormula.buildFromArray([['1', '2', '5'],
      ['3', '4', '=SUM(A1:B2)']])
    expect(engine.getCellValue(adr('C2'))).toEqual(10)
  })

  it('SUM with using previously cached value',  () => {
    const engine =  HyperFormula.buildFromArray([
      ['3', '=SUM(A1:A1)'],
      ['4', '=SUM(A1:A2)'],
    ])
    expect(engine.getCellValue(adr('B2'))).toEqual(7)
  })

  it('doesnt do coercions',  () => {
    const engine =  HyperFormula.buildFromArray([
      ['1'],
      ['2'],
      ['foo'],
      ['=TRUE()'],
      ['=CONCATENATE("1","0")'],
      ['=SUM(A1:A5)'],
    ])

    expect(engine.getCellValue(adr('A6'))).toEqual(3)
  })

  it('doesnt take value from range if it does not store cached value for that function',  () => {
    const engine =  HyperFormula.buildFromArray([
      ['1'],
      ['2'],
      ['=MAX(A1:A2)'],
      ['=SUM(A1:A3)'],
    ])
    expect(engine.getCellValue(adr('A4'))).toEqual(5)
  })

  it('range only with empty value', () => {
    const engine = HyperFormula.buildFromArray([['', '=SUM(A1:A1)']])
    expect(engine.getCellValue(adr('B1'))).toEqual(0)
  })

  it('range only with some empty values', () => {
    const engine = HyperFormula.buildFromArray([['42', '', '13', '=SUM(A1:C1)']])
    expect(engine.getCellValue(adr('D1'))).toEqual(55)
  })

  it('over a range value', () => {
    const engine = HyperFormula.buildFromArray([
      ['1', '2'],
      ['3', '4'],
      ['=SUM(MMULT(A1:B2, A1:B2))'],
    ])

    expect(engine.getCellValue(adr('A3'))).toEqual(54)
  })

  it('propagates errors', () => {
    const engine = HyperFormula.buildFromArray([
      ['1', '=4/0'],
      ['=FOOBAR()', '4'],
      ['=SUM(A1:B2)'],
    ])

    expect(engine.getCellValue(adr('A3'))).toEqual(new CellError(ErrorType.DIV_BY_ZERO))
  })
})
