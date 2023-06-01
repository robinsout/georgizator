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
    transliterationPercent: 40,
    transformedText: 'Это трансформированный текст',
    cyrillicMapping: {},
  }),
  actions: {
    processText(newInputText?: string) {
      this.inputText = newInputText || this.inputText;

      const transformedText = this.inputText.split('').map((char) => {
        const georgizatorChar = this.cyrillicMapping[char.toLocaleLowerCase()]?.georgian.letter;

        const transformedChar = (Math.random() * 100) < this.transliterationPercent
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
