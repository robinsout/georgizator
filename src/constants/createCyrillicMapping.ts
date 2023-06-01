import { type AlphabetMap } from './alphabetMap';

export const createCyrillicMapping = (alphabetMap: AlphabetMap): AlphabetMap => {
  const cyrillicMapping: AlphabetMap = {};

  Object.keys(alphabetMap).forEach((key) => {
    cyrillicMapping[alphabetMap[key].cyrillic.letter] = alphabetMap[key];
  });
  return cyrillicMapping;
};
