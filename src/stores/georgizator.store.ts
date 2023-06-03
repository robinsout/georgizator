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

      this.setRandomSymbolsToTransform(this.inputText);

      const transformedText = this.inputText.split('').map((char) => {
        const georgizatorChar = this.cyrillicMapping[char.toLowerCase()]?.georgian.letter;

        const transformedChar = this.symbolsToTransform.includes(char.toLowerCase())
          ? (georgizatorChar || char)
          : char;

        return transformedChar;
      }).join('');

      this.transformedText = transformedText;
    },
    initMapping() {
      this.cyrillicMapping = createCyrillicMapping(alphabetMap);
    },
    setRandomSymbolsToTransform(inputText: string) {
      if (!inputText) {
        return;
      }

      const inputTextSet = new Set(inputText.split(''));
      const symbolsToTransform = Array.from(inputTextSet).filter((char) => {
        if (!char.match(/\p{Letter}/gu)) {
          return false;
        }

        return (Math.random() * 100) < this.transliterationPercent
          ? char.toLowerCase()
          : false;
      });

      this.symbolsToTransform = symbolsToTransform;
    },
  },
});
