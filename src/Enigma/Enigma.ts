import { Rotor } from './Rotor';

type EnigmaOptions = {
  input: HTMLInputElement;
  output: HTMLInputElement;
  rotors: Array<Rotor>;
};

export class Enigma {
  constructor(options: EnigmaOptions) {
    console.log('enigma', options);
    options.input.addEventListener('keyup', (event) => {
      if (event.target.value === '') {
        options.output.value = '';
        return;
      }
      const value = event.target.value.slice(-1) ?? '';
      const encoded = options.rotors.reduce(
        (result, rotor) => rotor.encode(result),
        value
      );
      console.log('input', value, 'output', encoded);
      options.output.value += encoded;
    });
  }
}
