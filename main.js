import "./src/js/modal";
import "./src/js/Form";
import "./src/js/logicNote";

import { renderAllNotesList } from "./src/page-components/AllNotesList/AllNotesList";
import { summaryNotesList } from "./src/page-components/summaryNotesList/summaryNotesList";

import userNotesClass from "./src/utils/notesClass";
import { userNotes } from "./src/data/UserNotes";

const activeNotesEl = document.querySelector("#allNotes");
const summaryNotesEl = document.querySelector("#summaryNotes");
const listNameEl = document.querySelector("#listName");
const activeNameEl = document.querySelector("#activeName");
const archiveNameEl = document.querySelector("#archiveName");

export const notesClassData = new userNotesClass(userNotes);

let renderList = "active";

export const renderAppPartials = () => {
  renderAllNotesList(
    activeNotesEl,
    renderList === "active"
      ? notesClassData.activeAllNotes()
      : notesClassData.arhiveAllNotes()
  );
  summaryNotesList(summaryNotesEl, notesClassData.summaryNotes());
};

renderAppPartials();

const onClickTakeListName = (event) => {
  if (event.target.dataset.list === "active") {
    const listName = event.target.dataset.list;
    renderList = listName;
    activeNameEl.className =
      "underline underline-offset-2 font-bold duration-150";
    archiveNameEl.removeAttribute("class");
    renderAppPartials();
    return;
  }
  if (event.target.dataset.list === "archive") {
    const listName = event.target.dataset.list;
    renderList = listName;
    archiveNameEl.className =
      "underline underline-offset-2 font-bold duration-150";
    activeNameEl.removeAttribute("class");
    renderAppPartials();
    return;
  }
};

listNameEl.addEventListener("click", onClickTakeListName);
