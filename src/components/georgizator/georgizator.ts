import { computed, defineComponent, ref, watch } from 'vue';
import { TransformationMode, useGeorgizator } from '@/stores/georgizator.store';
import { storeToRefs } from 'pinia';

export default defineComponent({
  name: 'Georgizator',
  setup() {
    const georgizatorStore = useGeorgizator();
    const { processText, setTransformationMode, setRandomSymbolsToTransform } = georgizatorStore;
    const { inputText, transliterationPercent, transformedText, transformationMode } = storeToRefs(georgizatorStore);

    const inputContent = ref(inputText.value);

    watch(transliterationPercent, () => {
      setTransformationMode(TransformationMode.RANDOM);
      setRandomSymbolsToTransform(inputText.value);
      processText(inputText.value);
    });

    const updateInputText = (event) => {
      processText(event.target?.innerText as string);
    };

    const transformPercents = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

    const currentGeorgizationModeTitle = computed(() => {
      const modeTitlesMapping = {
        [TransformationMode.RANDOM]: 'Случайная грузификация',
        [TransformationMode.CUSTOM]: 'Ручная грузификация',
      };

      return modeTitlesMapping[transformationMode.value];
    });

    const isCustomMode = computed(() => transformationMode.value === TransformationMode.CUSTOM);

    return {
      inputText,
      transliterationPercent,
      transformedText,
      updateInputText,
      transformPercents,
      inputContent,
      currentGeorgizationModeTitle,
      isCustomMode,
    };
  },
});
