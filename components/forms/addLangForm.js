import clearDom from '../../utils/clearDom';
import renderToDOM from '../../utils/renderToDOM';

const addLangForm = (obj = {}) => {
  clearDom();
  const domString = `
      <form id="${obj.firebaseKey ? `update-category--${obj.firebaseKey}` : 'submit-category'}" class="mb-4">
        <div class="form-group">
          <label for="title">Title</label>
          <input type="text" class="form-control" id="title" placeholder="Language/tech" value="${obj.name || ''}" required>
        </div>
        <button type="submit" class="btn btn-primary mt-3">Submit Language</button>
      </form>`;
    renderToDOM('#form-container', domString);
  };

export default addLangForm;
