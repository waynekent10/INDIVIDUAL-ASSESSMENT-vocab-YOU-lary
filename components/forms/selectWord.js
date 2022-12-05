import { getAllEntries } from '../../api/vocabData';
import renderToDom from '../../utils/renderToDom';

const selectWord = () => {
    let domString = `<label for="author">Select an Author</label>
      <select class="form-control" id="author_id" required>
      <option value="">Select an entry</option>`;
  
    getAllEntries().then((wordArray) => {
      wordArray.forEach((word) => {
        domString += `
            <option 
              value="${author.firebaseKey}" 
              ${authorId === author.firebaseKey ? 'selected' : ''}>
                ${author.first_name} ${author.last_name}
            </option>`;
      });
  
      domString += '</select>';
  
      renderToDom('#select-word', domString);
    });
  };
  
  export default selectWord;
  