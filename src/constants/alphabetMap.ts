// create whole block enum mapping latin, georgian and cyrillic letters as objects with latin letteres as keys and objects with latin, georgian and cyrillic letters as values
// used for transliteration
type Letter = {
  order: number;
  letter: string;
}
type LetterMapping = {
  isComplex?: boolean;
  georgian: Letter;
  latin: Letter;
  cyrillic: Letter;
};

export type AlphabetMap = Record<string, LetterMapping>;

export const alphabetMap: AlphabetMap = {
  a: {
    georgian: {
      order: 1,
      letter: 'ა',
    },
    latin: {
      order: 1,
      letter: 'a',
    },
    cyrillic: {
      order: 1,
      letter: 'а',
    },
  },
  b: {
    georgian: {
      order: 2,
      letter: 'ბ',
    },
    latin: {
      order: 2,
      letter: 'b',
    },
    cyrillic: {
      order: 2,
      letter: 'б',
    },
  },
  g: {
    georgian: {
      order: 3,
      letter: 'გ',
    },
    latin: {
      order: 7,
      letter: 'g',
    },
    cyrillic: {
      order: 4,
      letter: 'г',
    },
  },
  d: {
    georgian: {
      order: 4,
      letter: 'დ',
    },
    latin: {
      order: 4,
      letter: 'd',
    },
    cyrillic: {
      order: 5,
      letter: 'д',
    },
  },
  e: {
    georgian: {
      order: 5,
      letter: 'ე',
    },
    latin: {
      order: 5,
      letter: 'e',
    },
    cyrillic: {
      order: 6,
      letter: 'е',
    },
  },
  v: {
    georgian: {
      order: 6,
      letter: 'ვ',
    },
    latin: {
      order: 22,
      letter: 'v',
    },
    cyrillic: {
      order: 3,
      letter: 'в',
    },
  },
  z: {
    georgian: {
      order: 7,
      letter: 'ზ',
    },
    latin: {
      order: 26,
      letter: 'z',
    },
    cyrillic: {
      order: 9,
      letter: 'з',
    },
  },
  te: {
    isComplex: true,
    georgian: {
      order: 8,
      letter: 'თ',
    },
    latin: {
      order: 20,
      letter: 'te',
    },
    cyrillic: {
      order: 20,
      letter: 'тэ',
    },
  },
  i: {
    georgian: {
      order: 9,
      letter: 'ი',
    },
    latin: {
      order: 9,
      letter: 'i',
    },
    cyrillic: {
      order: 10,
      letter: 'и',
    },
  },
  k: {
    isComplex: true,
    georgian: {
      order: 10,
      letter: 'კ',
    },
    latin: {
      order: 11,
      letter: 'k',
    },
    cyrillic: {
      order: 12,
      letter: 'кэ',
    },
  },
  l: {
    georgian: {
      order: 11,
      letter: 'ლ',
    },
    latin: {
      order: 12,
      letter: 'l',
    },
    cyrillic: {
      order: 13,
      letter: 'л',
    },
  },
  m: {
    georgian: {
      order: 12,
      letter: 'მ',
    },
    latin: {
      order: 13,
      letter: 'm',
    },
    cyrillic: {
      order: 14,
      letter: 'м',
    },
  },
  n: {
    georgian: {
      order: 13,
      letter: 'ნ',
    },
    latin: {
      order: 14,
      letter: 'n',
    },
    cyrillic: {
      order: 15,
      letter: 'н',
    },
  },
  o: {
    georgian: {
      order: 14,
      letter: 'ო',
    },
    latin: {
      order: 15,
      letter: 'o',
    },
    cyrillic: {
      order: 16,
      letter: 'о',
    },
  },
  p: {
    georgian: {
      order: 15,
      letter: 'პ',
    },
    latin: {
      order: 16,
      letter: 'p',
    },
    cyrillic: {
      order: 17,
      letter: 'п',
    },
  },
  j: {
    georgian: {
      order: 16,
      letter: 'ჟ',
    },
    latin: {
      order: 10,
      letter: 'j',
    },
    cyrillic: {
      order: 8,
      letter: 'ж',
    },
  },
  r: {
    georgian: {
      order: 17,
      letter: 'რ',
    },
    latin: {
      order: 18,
      letter: 'r',
    },
    cyrillic: {
      order: 18,
      letter: 'р',
    },
  },
  s: {
    georgian: {
      order: 18,
      letter: 'ს',
    },
    latin: {
      order: 19,
      letter: 's',
    },
    cyrillic: {
      order: 19,
      letter: 'с',
    },
  },
  t: {
    georgian: {
      order: 19,
      letter: 'ტ',
    },
    latin: {
      order: 20,
      letter: 't',
    },
    cyrillic: {
      order: 20,
      letter: 'т',
    },
  },
  u: {
    georgian: {
      order: 20,
      letter: 'უ',
    },
    latin: {
      order: 21,
      letter: 'u',
    },
    cyrillic: {
      order: 21,
      letter: 'у',
    },
  },
  pe: {
    isComplex: true,
    georgian: {
      order: 21,
      letter: 'ფ',
    },
    latin: {
      order: 16,
      letter: 'pe',
    },
    cyrillic: {
      order: 17,
      letter: 'пэ',
    },
  },
  q: {
    isComplex: true,
    georgian: {
      order: 22,
      letter: 'ქ',
    },
    latin: {
      order: 17,
      letter: 'q',
    },
    cyrillic: {
      order: 11,
      letter: 'к',
    },
  },
  gh: {
    isComplex: true,
    georgian: {
      order: 23,
      letter: 'ღ',
    },
    latin: {
      order: 7,
      letter: 'gh',
    },
    cyrillic: {
      order: 7,
      letter: 'гэ',
    },
  },
  'k\'': {
    georgian: {
      order: 24,
      letter: 'ყ',
    },
    latin: {
      order: 23,
      letter: 'k\'',
    },
    cyrillic: {
      order: 23,
      letter: 'к\'',
    },
  },
  sh: {
    georgian: {
      order: 25,
      letter: 'შ',
    },
    latin: {
      order: 19,
      letter: 'sh',
    },
    cyrillic: {
      order: 24,
      letter: 'ш',
    },
  },
  ch: {
    isComplex: true,
    georgian: {
      order: 26,
      letter: 'ჩ',
    },
    latin: {
      order: 3,
      letter: 'ch',
    },
    cyrillic: {
      order: 25,
      letter: 'ч',
    },
  },
  ts: {
    isComplex: true,
    georgian: {
      order: 27,
      letter: 'ც',
    },
    latin: {
      order: 20,
      letter: 'ts',
    },
    cyrillic: {
      order: 20,
      letter: 'тс',
    },
  },
  dz: {
    isComplex: true,
    georgian: {
      order: 28,
      letter: 'ძ',
    },
    latin: {
      order: 4,
      letter: 'dz',
    },
    cyrillic: {
      order: 5,
      letter: 'дз',
    },
  },
  'ts\'': {
    georgian: {
      order: 29,
      letter: 'წ',
    },
    latin: {
      order: 20,
      letter: 'ts\'',
    },
    cyrillic: {
      order: 24,
      letter: 'ц',
    },
  },
  chh: {
    georgian: {
      order: 30,
      letter: 'ჭ',
    },
    latin: {
      order: 3,
      letter: 'chh',
    },
    cyrillic: {
      order: 25,
      letter: 'ч\'',
    },
  },
  kh: {
    georgian: {
      order: 31,
      letter: 'ხ',
    },
    latin: {
      order: 11,
      letter: 'kh',
    },
    cyrillic: {
      order: 23,
      letter: 'х',
    },
  },
  jh: {
    isComplex: true,
    georgian: {
      order: 32,
      letter: 'ჯ',
    },
    latin: {
      order: 10,
      letter: 'jh',
    },
    cyrillic: {
      order: 8,
      letter: 'дж',
    },
  },
  h: {
    isComplex: true,
    georgian: {
      order: 33,
      letter: 'ჰ',
    },
    latin: {
      order: 22,
      letter: 'h',
    },
    cyrillic: {
      order: 22,
      letter: 'х\'',
    },
  },

};
