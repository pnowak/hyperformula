import {Config} from '../src'
import {enGB} from '../src/i18n'
import {AlwaysSparse, AlwaysPlusTree} from '../src/DependencyGraph/ChooseAddressMappingPolicy'

Config.defaultConfig = Object.assign({}, Config.defaultConfig, {
  chooseAddressMappingPolicy: new AlwaysPlusTree(),
  dateFormat: 'MM/DD/YYYY',
  functionArgSeparator: ',',
  language: enGB,
  functionPlugins: [],
  gpuMode: 'cpu',
  matrixDetection: false,
})
