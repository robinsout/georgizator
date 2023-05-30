import { defineStore } from 'pinia';
import { alphabetMap } from '@/constants/alphabetMap';

export const useAlphabet = defineStore({
  id: 'alphabet',
  state: () => ({
    alphabetMap,
  }),
});
