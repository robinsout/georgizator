import { defineComponent } from 'vue';
import { useAlphabet } from '@/stores/alphabet.store';
import { storeToRefs } from 'pinia';
import { useGeorgizator } from '@/stores/georgizator.store';

export default defineComponent({
  name: 'Alphabet',
  setup() {
    const alphabetStore = useAlphabet();
    const georgizatorStore = useGeorgizator();
    const { symbolsToTransform } = storeToRefs(georgizatorStore);
    const { updateSelectedSymbols } = georgizatorStore;

    return {
      alphabetMap: alphabetStore.alphabetMap,
      symbolsToTransform,
      updateSelectedSymbols,
    };
  },
});
