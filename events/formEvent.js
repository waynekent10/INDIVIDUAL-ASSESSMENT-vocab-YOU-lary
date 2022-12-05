import { createWord, getWords, updateWord } from '../api/vocabData';
import { showVocab } from '../pages/vocabSurprise';

const formEvents = () => {
  document.querySelector('#main-container').addEventListener('submit', (e) => {
    e.preventDefault();
    if (e.target.dispatchEvent.includes('add-word-btn')) {
      const payload = {
        title: document.querySelector('#title').value,
        definition: document.querySelector('#definition').value,
        language_tech: document.querySelector('#language_tech').value,
        time: document.querySelector('#time').value
      };
      createWord(payload).then(({ name }) => {
        const patchPayload = { firebaseKey: name };

        updateWord(patchPayload).then(() => {
          getWords().then(showVocab);
        });
      });
    }
    if (e.target.id.includes('update-entry')) {
      const [, firebaseKey] = e.target.id.split('--');
      const payload = {
        title: document.querySelector('#title').value,
        definition: document.querySelector('#definition').value,
        language_tech: document.querySelector('#language_tech').value,
        firebaseKey
      };
      updateWord(payload).then(() => {
        getWords().then(showVocab);
      });
    }
  });
};

export default formEvents;
