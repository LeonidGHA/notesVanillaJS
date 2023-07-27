const ActiveNotesSelector = document.querySelector("#AllNotes");
const formEl = document.querySelector("#form");
import { notesData, renderAppPartials } from "../../main";
import { onClickOpenModal } from "./modal";

const deleteNote = (idNode) => {
  notesData.deleteNote(idNode);
  renderAppPartials();
};

const archiveNote = (idNode) => {
  notesData.toggleArchiveNote(idNode);
  renderAppPartials();
};

const editNote = (idNode) => {
  formEl.dataset.id = idNode;
  console.log(formEl.dataset.id);

  onClickOpenModal();

  // renderAppPartials()
};

export const clickNote = (e) => {
  if (e.target.dataset.delete) {
    const idNode = e.target.dataset.delete;
    deleteNote(idNode);
    return;
  }

  if (e.target.dataset.archive) {
    const idNode = e.target.dataset.archive;
    archiveNote(idNode);
    return;
  }

  if (e.target.dataset.edit) {
    const idNode = e.target.dataset.edit;
    editNote(idNode);
  }
};

ActiveNotesSelector.addEventListener("click", clickNote);
