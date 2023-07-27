import { notesData, renderAppPartials } from "../../main";
const addFormEl = document.querySelector("#form");

export const onSubmitAddForm = (e) => {
  e.preventDefault();
  const { name, content, category } = e.currentTarget;

  notesData.addNewNote(name.value, content.value, category.value);

  renderAppPartials();
};

addFormEl.addEventListener("submit", onSubmitAddForm);
