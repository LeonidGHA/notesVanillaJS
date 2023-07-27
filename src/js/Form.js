import { notesData, renderAppPartials } from "../../main";
import { onClickCloseModal } from "./modal";

const formEl = document.querySelector("#form");

export const onSubmitForm = (e) => {
  e.preventDefault();
  const { name, content, category } = e.currentTarget;

  if (formEl.dataset.id) {
    const idNote = formEl.dataset.id;
    notesData.editNote(idNote, name.value, content.value, category.value);
    renderAppPartials();
    formEl.removeAttribute("data-id");
    formEl.reset();
    onClickCloseModal();
    return;
  }

  notesData.addNewNote(name.value, content.value, category.value);
  renderAppPartials();
  formEl.reset();
  onClickCloseModal();
};

formEl.addEventListener("submit", onSubmitForm);
