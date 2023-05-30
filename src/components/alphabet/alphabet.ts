import { defineComponent } from 'vue';
import { useAlphabet } from '@/stores/alphabet.store';

export default defineComponent({
  name: 'Alphabet',
  setup() {
    const alphabetStore = useAlphabet();

    return {
      alphabetMap: alphabetStore.alphabetMap,
    };
  },
});
