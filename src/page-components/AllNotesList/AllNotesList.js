import { AllNotesItem } from "../AllNotesItem/AllNotesItem";

import { pathNoteImg } from "../../utils/pathNoteImg";

export const renderAllNotesList = (element, userNotes) => {
  const markup = userNotes
    .map((note, index) => {
      return AllNotesItem(note);
    })
    .join("");
  element.innerHTML = ` <li class=" grid grid-cols-14 gap-4 bg-slate-400 p-5 rounded ">
            <span class='col-start-2 col-span-2'>Name</span>
            <span class='col-span-2'>Created</span>
            <span class='col-span-2'>Category</span>
            <span class='col-span-2'>Content</span>
            <span class='col-span-2'>Dates</span>
            <div class='col-start-13 '><img src='${pathNoteImg(
              "ArchiveAdd"
            )}' width='24px' height='24px' class='h-6'></div>
            <div><img src='${pathNoteImg(
              "Delete"
            )}' width='24px' height='24px'  class='h-6'></div>
          </li>`;
  element.innerHTML += markup;
};
