import { getWords } from '../api/vocabData';
import domBuilder from '../components/shared/domBuilder';
import domEvents from '../events/domEvents';
import formEvents from '../events/formEvent';
import navBar from '../components/shared/navBar';
import logoutButton from '../components/logoutButton';
import navEvents from '../events/navEvents';
import { showVocab } from '../pages/vocabSurprise';

const startApp = (user) => {
  domBuilder(user); // BUILD THE DOM
  domEvents(user); // ADD THE EVENT LISTENTERS TO THE DOM
  formEvents(user); // ADD FORM EVENT LISTENTERS TO THE DOM
  navBar(); // DYNAMICALLY ADD THE NAV
  logoutButton(); // ADD THE LOGOUT BUTTON COMPONENT
  navEvents(user); // ATTACH THE EVENT LISTENERS TO THE NAVBAR
  getWords().then((vocab) => showVocab(vocab));
};

export default startApp;
