import { defineComponent, ref, watch } from 'vue';
import { useGeorgizator } from '@/stores/georgizator.store';
import { storeToRefs } from 'pinia';

export default defineComponent({
  name: 'Georgizator',
  setup() {
    const georgizatorStore = useGeorgizator();
    const { inputText, transliterationPercent, transformedText } = storeToRefs(georgizatorStore);

    const inputContent = ref(inputText.value);

    watch(transliterationPercent, () => {
      georgizatorStore.processText(inputText.value);
    });

    const updateInputText = (event) => {
      georgizatorStore.processText(event.target?.innerText as string);
    };

    const transformPercents = [0, 20, 40, 60, 80, 100];

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
