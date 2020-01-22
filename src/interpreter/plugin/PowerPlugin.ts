import {CellError, CellValue, ErrorType, SimpleCellAddress} from '../../Cell'
import {ProcedureAst} from '../../parser'
import {FunctionPlugin} from './FunctionPlugin'

export class PowerPlugin extends FunctionPlugin {
  public static implementedFunctions = {
    power: {
      translationKey: 'POWER',
    },
  }

  public power(ast: ProcedureAst, formulaAddress: SimpleCellAddress): CellValue {
    const validationResult = this.validateTwoNumericArguments(ast, formulaAddress)

    if (validationResult instanceof CellError) {
      return validationResult
    }

    const [coercedBase, coercedExponent] = validationResult

    if (coercedBase === 0 && coercedExponent < 0) {
      return new CellError(ErrorType.NUM)
    }

    const value = Math.pow(coercedBase, coercedExponent)
    if (!Number.isFinite(value)) {
      return new CellError(ErrorType.NUM)
    } else {
      return value
    }
  }
}
