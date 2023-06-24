import { defineStore } from 'pinia';
import { type AlphabetMap, alphabetMap } from '@/constants/alphabetMap';
import { createCyrillicMapping } from '@/constants/createCyrillicMapping';

interface GeorgizatorState {
  inputText: string;
  transformedText: string;
  transformationMode: TransformationMode;
  transliterationPercent: number;
  cyrillicMapping: AlphabetMap;
  symbolsToTransform: string[];
}

export enum TransformationMode {
  RANDOM = 'random',
  CUSTOM = 'custom',
}

export const useGeorgizator = defineStore({
  id: 'GeorgizatorStore',
  state: (): GeorgizatorState => ({
    inputText: 'Начните вводить текст',
    transliterationPercent: 30,
    transformationMode: TransformationMode.RANDOM,
    transformedText: 'Это трансформированный текст',
    cyrillicMapping: {},
    symbolsToTransform: [],
  }),
  actions: {
    processText(newInputText?: string) {
      this.inputText = newInputText || this.inputText;

      if (this.transformationMode === TransformationMode.RANDOM) {
        this.setRandomSymbolsToTransform(this.inputText.toLowerCase());
      }

      let newText = this.inputText.toLowerCase();

      this.symbolsToTransform.forEach((symbol) => {
        newText = newText.replaceAll(symbol, this.cyrillicMapping[symbol]?.georgian.letter);
      });

      this.transformedText = newText;
    },
    initMapping() {
      this.cyrillicMapping = createCyrillicMapping(alphabetMap);
    },
    setRandomSymbolsToTransform(inputText: string) {
      if (!inputText) {
        return;
      }

      const activeCyrillicSymbolsInText: string[] = [];

      const cyrillicSymbols = Object.keys(this.cyrillicMapping);
      const complexCyrillicSymbols = cyrillicSymbols.filter((symbol) => this.cyrillicMapping[symbol]?.isComplex);
      const simpleCyrillicSymbols = cyrillicSymbols.filter((symbol) => !this.cyrillicMapping[symbol]?.isComplex);
      const sortedCyrillicSymbols = [...complexCyrillicSymbols, ...simpleCyrillicSymbols];

      sortedCyrillicSymbols.forEach((symbol) => {
        if (!inputText.includes(symbol)) {
          return;
        }

        activeCyrillicSymbolsInText.push(symbol);
      });

      const inputTextSet = new Set(activeCyrillicSymbolsInText);
      const symbolsToTransform = Array.from(inputTextSet).filter((char) => {
        if (!char.match(/\p{Letter}/gu)) {
          return false;
        }

        return (Math.random() * 100) < this.transliterationPercent;
      });

      this.symbolsToTransform = symbolsToTransform.map((char) => char.toLowerCase());
    },
    updateSelectedSymbols(char: string) {
      const inputChar = char.toLowerCase();

      this.setTransformationMode(TransformationMode.CUSTOM);
      if (this.symbolsToTransform.includes(inputChar)) {
        this.symbolsToTransform = this.symbolsToTransform.filter((symbol) => symbol !== inputChar);
        this.processText();
        return;
      }

      this.symbolsToTransform.push(inputChar);
      this.processText();
    },
    setTransformationMode(mode: TransformationMode) {
      this.transformationMode = mode;
    },
  },
});
