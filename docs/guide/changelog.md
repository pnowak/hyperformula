# Changelog

## 0.1.0

**Alpha release date: June 25, 2020 🎉**

* Core functionality of the engine
* Support for data types: String, Error, Number, Date, Time, DateTime,
Duration, Distinct Logical
* Support for logical operators: =, <>, >, <, >=, <=
* Support for arithmetic operators: +, -, *, /, %
* Support for text operator: &
* CRUD operations:
   - modifying the value of a single cell
   - adding/deleting row/column
   - reading the value or formula from the selected cell
   - moving a cell or a block of cells
   - deleting a subset of rows or columns
   - recalculating and refreshing of a worksheet
   - batching CRUD operations
   - support for wildcards and regex inside criterion functions
   like SUMIF, COUNTIF
   - named expressions support
   - support for cut, copy, paste
   - undo/redo support
* The following functions: ABS(), ACOS(), AND(), ASIN(), ATAN(), ATAN2(), AVERAGE(), AVERAGEA(), AVERAGEIF(), BASE(), BIN2DEC(), BIN2HEX()BIN2OCT(), BITAND(), BITLSHIFT(), BITOR(), BITRSHIFT(), BITXOR(), CEILING(), CHAR(), CHOOSE(), CODE(), COLUMNS(), CONCATENATE(), CORREL(),
COS(), COT(), COUNT(), COUNTA(), COUNTBLANK(), COUNTIF(), COUNTIFS(), COUNTUNIQUE(), DATE(), DAY(), DAYS(), DEC2BIN(), DEC2HEX(), DEC2OCT(), DECIMAL(), DEGREES(), DELTA(), E(), EOMONTH(), ERF(), ERFC(), EVEN(), EXP(), FALSE(), IF(), IFERROR(), IFNA(), INDEX(), INT(), ISBLANK(), ISERROR(), ISEVEN(), ISLOGICAL(), ISNONTEXT(), ISNUMBER(), ISODD(), ISTEXT(), LN(), LOG(), LOG10(), MATCH(), MAX(), MAXA(), MAXPOOL(), MEDIAN(), MEDIANPOOL(), MIN(), MINA(), MMULT(), MOD(), MONTH(), NOT(), ODD(), OFFSET(), OR(), PI(), POWER(), RADIANS(), RAND(), ROUND(), ROUNDDOWN(), ROUNDUP(), ROWS(), SIN(), SPLIT(), SQRT(), SUM(), SUMIF(), SUMIFS(), SUMPRODUCT(), SUMSQ(), SWITCH(), TAN(), TEXT(), TRANSPOSE(), TRUE(), TRUNC(), VLOOKUP(), XOR(), YEAR()
* Support for volatile functions
* Cultures supports - can be configured according to the application need
* Custom functions support
* Set [OpenDocument v1.2](http://docs.oasis-open.org/office/v1.2/OpenDocument-v1.2-part2.html)
as a standard to follow
*  Error handling:
   - Division by zero: #DIV/0!
   - Unknown function name: #NAME?
   - Wrong type of argument in a function or wrong type of
   operator: #VALUE!
   - Invalid numeric values: #NUM!
   - No value available: #N/A
   - Cyclic dependency: #CYCLE!
   - Wrong address reference: #REF
* Built-in function translations support for 16 languages: English, Czech,
Danish, Dutch, Finnish, French, German, Hungarian, Italian, Norwegian,
Polish, Portuguese, Russian, Spanish, Swedish, Turkish.
