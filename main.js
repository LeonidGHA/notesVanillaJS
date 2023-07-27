import "./style.css";
import { renderAllNotesList } from "./src/page-components/AllNotesList/AllNotesList";
import { summaryNotesList } from "./src/page-components/summaryNotesList/summaryNotesList";

import "./src/js/modal";
import "./src/js/addedNoteForm";
import "./src/js/logicNote";

import userNotesClass from "./src/utils/notesClass";
import { userNotes } from "./src/data/UserNotes";

const ActiveNotesSelector = document.querySelector("#AllNotes");
const summaryNotesSelector = document.querySelector("#summaryNotes");

export const notesData = new userNotesClass(userNotes);

export const renderAppPartials = () => {
  renderAllNotesList(ActiveNotesSelector, notesData.activeAllNotes());
  summaryNotesList(summaryNotesSelector, notesData.summaryNotes());
};

renderAppPartials();
