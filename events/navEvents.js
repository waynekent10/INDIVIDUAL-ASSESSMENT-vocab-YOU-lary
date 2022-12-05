import { getWords } from '../api/vocabData';
import { showVocab } from '../pages/vocabSurprise';
import { signOut } from '../utils/auth';

const navEvents = () => {
  document.querySelector('#all-entries').addEventListener('click', () => {
    console.warn('come on');
    getWords().then(showVocab);
  });
  document.querySelector('#logout-button')
    .addEventListener('click', signOut);
};
export default navEvents;
