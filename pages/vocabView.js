import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDOM';

const viewVocab = (obj) => {
  clearDom();

  const domString = `
  <div class="card">
   <div class="card-header">${obj.title}>
     <div class="card-body">
       <i id="edit-word-btn--${obj.firebaseKey}" class="fas fa-edit btn btn-info"></i>
       <i id="delete-word--${obj.firebaseKey}" class="btn btn-danger fas fa-trash-alt"></i>
     </div>
   </div>`;

  renderToDOM('#view', domString);
};

export default viewVocab;
