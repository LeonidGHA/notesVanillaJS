const activeNotesEl = document.querySelector("#allNotes");
const formEl = document.querySelector("#form");
import { notesClassData, renderAppPartials } from "../../main";
import { onClickOpenModal } from "./modal";

const deleteNote = (idNode) => {
  notesClassData.deleteNote(idNode);
  renderAppPartials();
};

const archiveNote = (idNode) => {
  notesClassData.toggleArchiveNote(idNode);
  renderAppPartials();
};

const editNote = (idNode) => {
  formEl.dataset.id = idNode;
  onClickOpenModal();
};

export const clickNote = (event) => {
  if (event.target.dataset.delete) {
    const idNode = event.target.dataset.delete;
    deleteNote(idNode);
    return;
  }

  if (event.target.dataset.archive) {
    const idNode = event.target.dataset.archive;
    archiveNote(idNode);
    return;
  }

  if (event.target.dataset.edit) {
    const idNode = event.target.dataset.edit;
    editNote(idNode);
  }
};

activeNotesEl.addEventListener("click", clickNote);
