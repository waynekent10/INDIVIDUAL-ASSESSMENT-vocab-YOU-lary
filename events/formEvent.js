import { createLanguage, getLanguage, updateLanguage } from '../api/languageData';
import { createWord, getWords, updateWord } from '../api/vocabData';
import showLanguage from '../pages/language';
import { showVocab } from '../pages/vocabSurprise';

const formEvents = (user) => {
  document.querySelector('#main-container').addEventListener('submit', (e) => {
    e.preventDefault();
    if (e.target.id.includes('submit-entry')) {
      console.warn('new word');
      const payload = {
        title: document.querySelector('#title').value,
        category: document.querySelector('#language').value,
        // category_id: document.querySelector('#category_id').value,
        definition: document.querySelector('#definition').value,
        time_submitted: new Date().toLocaleString(),
        uid: user.uid,
      };
      createWord(payload).then(({ name }) => {
        const patchPayload = { firebaseKey: name };
        updateLanguage(patchPayload).then(() => {
          getWords(user.uid).then(showVocab);
        });
      });
    }
    if (e.target.id.includes('update-entry')) {
      const [, firebaseKey] = e.target.id.split('--');
      const payload = {
        title: document.querySelector('#title').value,
        category: document.querySelector('#language').value,
        // category_id: document.querySelector('#category_id').value,
        definition: document.querySelector('#description').value,
        firebaseKey,
      };
      updateWord(payload).then(() => {
        getWords(user.uid).then(showVocab);
      });
    }

    if (e.target.id.includes('submit-language')) {
      console.warn('new cat');
      const payload = {
        name: document.querySelector('#title').value,
        uid: user.uid,
      };
      createLanguage(payload).then(({ name }) => {
        const patchPayload = { firebaseKey: name };
        updateLanguage(patchPayload).then(() => {
          getLanguage(user.uid).then(showLanguage);
        });
      });
    }

    if (e.target.id.includes('update-language')) {
      const [, firebaseKey] = e.target.id.split('--');
      const payload = {
        name: document.querySelector('#title').value,
        firebaseKey,
      };
      updateLanguage(payload).then(() => {
        getLanguage(user.uid).then(showLanguage);
      });
    }
  });
};

export default formEvents;
