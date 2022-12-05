import clearDom from '../../utils/clearDom';
import renderToDom from '../../utils/renderToDOM';

const addWordForm = (obj = {}) => {
  clearDom();
  const domString = `
      <form id="${obj.firebaseKey ? `update-entry--${obj.firebaseKey}` : 'submit-entry'}" class="mb-4">
        <div class="form-group">
          <label for="title">Title</label>
          <input type="text" class="form-control" id="title" aria-describedby="Title" placeholder="Enter Title" value="${obj.title || ''}" required>
        </div>
        <div class="form-group">
          <label for="definition">Definition</label>
          <textarea class="form-control" placeholder="Definition" id="definition" style="height: 100px">${obj.definition || ''}</textarea>
        </div>
        <div class="form-group" id="select-word">
        </div>
        <div class="form-check">
          <input type="checkbox" class="form-check-input" id="sale" ${obj.favorite ? 'checked' : ''}>
          <label class="form-check-label" for="favorite">?</label>
        </div>
        <button type="submit" class="btn btn-primary">Submit Entry
        </button>
      </form>`;
  renderToDom('#form-container', domString);
};
export default addWordForm;
