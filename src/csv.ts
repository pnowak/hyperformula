import stringify from 'csv-stringify/lib/sync'
import parse from 'csv-parse/lib/sync'
import {HandsOnEngine, Config, Sheets} from './'

export interface CsvSheets {
  [sheetName: string]: string
}

export class CsvExporter {
  constructor(
    public readonly csvDelimiter: string = ","
  ) {
  }

  /**
   * Creates CSV string out of sheet content
   */
  public exportSheetByName(engine: HandsOnEngine, sheetName: string): string {
    const sheet = engine.sheetMapping.fetch(sheetName)
    return stringify(engine.getValues(sheet), {
      delimiter: this.csvDelimiter
    })
  }

  public exportAllSheets(engine: HandsOnEngine): CsvSheets {
    const sheets: CsvSheets = {}
    for (const sheetName of engine.sheetMapping.names()) {
      sheets[sheetName] = this.exportSheetByName(engine, sheetName)
    }
    return sheets
  }
}

export class CsvImporter {
  constructor(
    public readonly csvDelimiter: string = ","
  ) {
  }

  /**
   * Builds engine for sheet from CSV string representation
   *
   * @param csv - csv representation of sheet
   */
  public importSheet(csv: string, config: Config = new Config()): HandsOnEngine {
    const sheet = parse(csv, { delimiter: this.csvDelimiter })
    return HandsOnEngine.buildFromArray(sheet, config)
  }

  /**
   * Builds engine for sheet from CSV string representation
   *
   * @param csv - csv representation of sheet
   */
  public importSheets(csvSheets: CsvSheets, config: Config = new Config()): HandsOnEngine {
    return HandsOnEngine.buildFromSheets(this.csvSheetsToSheets(csvSheets), config)
  }

  public csvSheetsToSheets(csvSheets: CsvSheets): Sheets {
    const sheets: Sheets = {}
    for (const key of Object.keys(csvSheets)) {
      sheets[key] = parse(csvSheets[key], { delimiter: this.csvDelimiter })
    }
    return sheets
  }
}