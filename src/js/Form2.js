import { notesClassData, renderAppPartials } from "../../main";
import { onClickCloseModal } from "./modal";

const formEl = document.querySelector("#form");

export const onSubmitForm = (event) => {
  event.preventDefault();
  const { name, content, category } = event.currentTarget;

  if (formEl.dataset.id) {
    const idNote = formEl.dataset.id;
    notesClassData.editNote(idNote, name.value, content.value, category.value);
    renderAppPartials();
    formEl.removeAttribute("data-id");
    formEl.reset();
    onClickCloseModal();
    return;
  }

  notesClassData.addNewNote(name.value, content.value, category.value);
  renderAppPartials();
  formEl.reset();
  onClickCloseModal();
};

formEl.addEventListener("submit", onSubmitForm);
