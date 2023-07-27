const ActiveNotesSelector = document.querySelector("#AllNotes");
import { notesData, renderAppPartials } from "../../main";

const deleteNote = (idNode) => {
  notesData.deleteNote(idNode);
  renderAppPartials();
};

const archiveNote = (idNode) => {
  notesData.toggleArchiveNote(idNode);
  renderAppPartials();
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
  }
};

ActiveNotesSelector.addEventListener("click", clickNote);
