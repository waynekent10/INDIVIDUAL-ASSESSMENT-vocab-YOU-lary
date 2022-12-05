import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDOM';

const emptyVocab = () => {
  const domString = '<h1>No Cards</h1>';
  renderToDOM('#card-container', domString);
};

const showVocab = (array) => {
  clearDom();
  if (array.length) {
    let domString = '';
    array.forEach((item) => {
      domString += `
      <div class="card" style="width: 18rem;">
  <div class="card-body">
      <h5 class="card-title">${item.title}</h5>
      <h6 class="card-subtitle mb-2 text-muted">${item.language_tech}</h6>
      <p class="card-text">${item.definition}</p>
      <i class="btn btn-success fas fa-eye" id="view-book-btn--${item.firebaseKey}"></i>
      <i id="edit-book-btn--${item.firebaseKey}" class="fas fa-edit btn btn-info"></i>
      <i id="delete-book-btn--${item.firebaseKey}" class="btn btn-danger fas fa-trash-alt"></i>
  </div>`;
    });
    renderToDOM('#card-container', domString);
  }
};
export { showVocab, emptyVocab };
