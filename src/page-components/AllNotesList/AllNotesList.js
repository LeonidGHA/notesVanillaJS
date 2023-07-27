import { AllNotesItem } from "../AllNotesItem/AllNotesItem";

export const renderAllNotesList = (element, userNotes) => {
  const markup = userNotes
    .map((note, index) => {
      if (index < 5) {
        return AllNotesItem(note);
      }
      return "";
    })
    .join("");
  element.innerHTML = ` <li class="grid grid-cols-14 gap-4 bg-slate-400 p-5 rounded ">
            <span class='col-start-2 col-span-2'>Name</span>
            <span class='col-span-2'>Created</span>
            <span class='col-span-2'>Category</span>
            <span class='col-span-2'>Content</span>
            <span class='col-span-2'>Dates</span>
            <div class='col-start-13 '>arh</div>
            <div>del</div>
          </li>`;
  element.innerHTML += markup;
};
