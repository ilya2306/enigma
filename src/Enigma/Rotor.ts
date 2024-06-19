type Alphabet = { [key: string]: number };

export class Rotor {
  private alphabet: Alphabet;

  constructor(alphabet: Alphabet) {
    this.alphabet = alphabet;
  }

  protected encode(value: number) {
    const returnValue = this.alphabet[value];
    this.spin(this.alphabet);
    return returnValue;
  }

  private spin(alphabet: Alphabet) {
    let nextAlphabet: Alphabet = {};

    Object.keys(alphabet).forEach((key, index, arr) => {
      const nextIndex = index < arr.length - 1 ? arr[index + 1] : arr[0];
      nextAlphabet[key] = alphabet[nextIndex];
    });

    this.alphabet = nextAlphabet;
  }
}
