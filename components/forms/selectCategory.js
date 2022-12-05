import { getLanguage } from '../../api/languageData';
import renderToDOM from '../../utils/renderToDom';

const selectLanguage = (languageId) => {
  let domString = `<label for="language">Select a language</label>
    <select class="form-control" id="language" required>
    <option value="">Select a language</option>`;

  getLanguage().then((languageArray) => {
    languageArray.forEach((language) => {
      domString += `
          <option 
            value="${language.firebaseKey}" 
            ${languageId === language.firebaseKey ? 'selected' : ''}>
              ${language.name}
          </option>`;
    });

    domString += '</select>';

    renderToDOM('#select-language', domString);
  });
};

export default selectLanguage;
