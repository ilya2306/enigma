import { Enigma, Rotor } from './Enigma';
import './style.css';

const app = document.querySelector<HTMLDivElement>('#app')!;
const input = app.querySelector<HTMLInputElement>('#input');
const output = app.querySelector<HTMLInputElement>('#output');

new Enigma({
  root: app,
  input,
  output,
  rotors: [
    new Rotor({
      '1': 0,
      '2': 9,
      '3': 8,
      '4': 7,
      '5': 6,
      '6': 5,
      '7': 4,
      '8': 3,
      '9': 2,
      '0': 1,
    }),
  ],
});
