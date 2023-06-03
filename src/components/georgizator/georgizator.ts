import { defineComponent, ref, watch } from 'vue';
import { useGeorgizator } from '@/stores/georgizator.store';
import { storeToRefs } from 'pinia';

export default defineComponent({
  name: 'Georgizator',
  setup() {
    const georgizatorStore = useGeorgizator();
    const { processText } = georgizatorStore;
    const { inputText, transliterationPercent, transformedText } = storeToRefs(georgizatorStore);

    const inputContent = ref(inputText.value);

    watch(transliterationPercent, () => {
      processText(inputText.value);
    });

    const updateInputText = (event) => {
      processText(event.target?.innerText as string);
    };

    const transformPercents = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

    return {
      inputText,
      transliterationPercent,
      transformedText,
      updateInputText,
      transformPercents,
      inputContent,
    };
  },
});
