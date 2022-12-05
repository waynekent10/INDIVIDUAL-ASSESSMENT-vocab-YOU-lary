import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDOM';

const showLanguage = (array) => {
  clearDom();

  let domString = '';
  array.forEach((item) => {
    domString += `
  <div class="card">
    <div class="card-body">
      <h5 class="card-title">${item.ame}/h5>
      <hr>
      <i class="btn btn-success fas fa-eye" id="view-author-btn--${item.firebaseKey}"></i>
      <i class="fas fa-edit btn btn-info" id="update-author--${item.firebaseKey}"></i>
      <i class="btn btn-danger fas fa-trash-alt" id="delete-author-btn--${item.firebaseKey}"></i>
    </div>
  </div>
  `;
  });
  renderToDOM('#store', domString);
};
export default (showLanguage);
