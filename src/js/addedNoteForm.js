import { notesData, renderAppPartials } from "../../main";
import { onClickCloseModal } from "./modal";

const addFormEl = document.querySelector("#form");

export const onSubmitAddForm = (e) => {
  e.preventDefault();
  const { name, content, category } = e.currentTarget;

  notesData.addNewNote(name.value, content.value, category.value);

  renderAppPartials();
  addFormEl.reset();
  onClickCloseModal();
};

addFormEl.addEventListener("submit", onSubmitAddForm);
