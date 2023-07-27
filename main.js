import "./style.css";
import { renderAllNotesList } from "./src/page-components/AllNotesList/AllNotesList";
import { summaryNotesList } from "./src/page-components/summaryNotesList/summaryNotesList";

import "./src/js/modal";
import { onSubmitAddForm } from "./src/js/addedNoteForm";

import userNotesClass from "./src/utils/notesClass";
import { userNotes } from "./src/data/UserNotes";

const ActiveNotesSelector = document.querySelector("#AllNotes");
const summaryNotesSelector = document.querySelector("#summaryNotes");

export const notesData = new userNotesClass(userNotes);

export const renderAppPartials = () => {
  renderAllNotesList(ActiveNotesSelector, notesData.allNotes);
  summaryNotesList(summaryNotesSelector, notesData.summaryNotes());
};

export const reRenderSummaryList = () => {
  summaryNotesList(summaryNotesSelector, notesData.summaryNotes());
};
renderAppPartials();
