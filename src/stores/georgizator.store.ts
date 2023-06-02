import { defineStore } from 'pinia';
import { type AlphabetMap, alphabetMap } from '@/constants/alphabetMap';
import { createCyrillicMapping } from '@/constants/createCyrillicMapping';

interface GeorgizatorState {
  inputText: string;
  transformedText: string;
  transliterationPercent: number;
  cyrillicMapping: AlphabetMap;
}

export const useGeorgizator = defineStore({
  id: 'GeorgizatorStore',
  state: (): GeorgizatorState => ({
    inputText: 'Начните вводить текст',
    transliterationPercent: 30,
    transformedText: 'Это трансформированный текст',
    cyrillicMapping: {},
  }),
  actions: {
    processText(newInputText?: string) {
      this.inputText = newInputText || this.inputText;

      const inputTextSet = new Set(this.inputText.split(''));
      const sybmolsToTransform = Array.from(inputTextSet).filter((char) => {
        if (!char.match(/\p{Letter}/gu)) {
          return false;
        }

        return (Math.random() * 100) < this.transliterationPercent
          ? char.toLowerCase()
          : false;
      });

      const transformedText = this.inputText.split('').map((char) => {
        const georgizatorChar = this.cyrillicMapping[char.toLowerCase()]?.georgian.letter;

        const transformedChar = sybmolsToTransform.includes(char.toLowerCase())
          ? (georgizatorChar || char)
          : char;

        return transformedChar;
      }).join('');

      this.transformedText = transformedText;
    },
    initMapping() {
      this.cyrillicMapping = createCyrillicMapping(alphabetMap);
    },
  },
});
