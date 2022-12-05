import { deleteWord, getWords, getSingleWord } from '../api/vocabData';
import addWordForm from '../components/forms/addWordForm';
import { showVocab } from '../pages/vocabSurprise';
import viewVocab from '../pages/vocabView';

const domEvents = (user) => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
    // TODO: CLICK EVENT FOR DELETING A BOOK
    if (e.target.id.includes('delete-word')) {
      // eslint-disable-next-line no-alert
      if (window.confirm('Want to delete?')) {
        // console.warn('CLICKED DELETE BOOK', e.target.id);
        const [, firebaseKey] = e.target.id.split('--');

        deleteWord(firebaseKey).then(() => {
          getWords(user.uid).then(showVocab);
        });
      }
    }

    if (e.target.id.includes('edit-word-btn')) {
      console.warn('EDIT Word', e.target.id);
      // console.warn(e.target.id.split('--'));
      const [, firebaseKey] = e.target.id.split('--');

      getSingleWord(firebaseKey).then((vocabObj) => addWordForm(vocabObj));
    }
    // TODO: CLICK EVENT FOR VIEW BOOK DETAILS
    if (e.target.id.includes('view-word')) {
      console.warn('VIEW BOOK', e.target.id);
      const [, firebaseKey] = e.target.id.split('--');
      getSingleWord(firebaseKey).then(viewVocab);
    }
  });

  document.querySelector('#navigation').addEventListener('click', (e) => {
    if (e.target.id.includes('add-word-btn')) {
      console.warn('ADD Word');
      addWordForm();
    }
  });
};
export default domEvents;
