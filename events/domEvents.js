import { deleteWord, getWords, getSingleWord } from '../api/vocabData';
import addWordForm from '../components/forms/addWordForm';
import { showVocab } from '../pages/vocabSurprise';

const domEvents = () => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
    if (e.target.id.includes('create-entry')) {
      console.warn('add vocab');
      addWordForm();
    }
  });
  document.querySelector('#card-container').addEventListener('click', (e) => {
    if (e.target.id.includes('delete-card')) {
      // eslint-disable-next-line no-alert
      if (window.confirm('Want to delete?')) {
        const [, firebaseKey] = e.target.id.split('--');

        deleteWord(firebaseKey).then(() => {
          getWords().then(showVocab);
        });
      }
    }

    if (e.target.id.includes('edit-word')) {
      const [, firebaseKey] = e.target.id.split('--');

      getSingleWord(firebaseKey).then((vocabObj) => addWordForm(vocabObj));
    }
  });
};
export default domEvents;
