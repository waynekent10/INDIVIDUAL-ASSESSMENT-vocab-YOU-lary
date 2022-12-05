import { getWords } from '../api/vocabData';
import { showVocab } from '../pages/vocabSurprise';

const navEvents = () => {
  document.querySelector('#all-entries').addEventListener('click', () => {
    console.warn('come on');
    getWords().then(showVocab);
  });
};
export default navEvents;
