import { pathNoteImg } from "../../utils/pathNoteImg";
import { renderFormatDate } from "../../utils/formatDate";

export const AllNotesItem = (note) => {
  const { id, name, created, category, content, dates, archive } = note;
  return `<li class="grid grid-cols-14 gap-4 px-5 py-2 rounded bg-blue-200">
      <div class="flex justify-center items-center"><img src='${pathNoteImg(
        category
      )}' width='24px' height='24px' class='h-6'></div> 
      <span class="truncate col-start-2 col-span-2">${name}</span>
      <span class="truncate col-span-2">${renderFormatDate(created)}</span>
      <span class="truncate col-span-2">${category}</span>
      <p class="truncate col-span-2">${content}</p>
      <span class="truncate col-span-2">${dates}</span>
      <div class="flex  items-center" aria-label="edit note button" ><img src='${pathNoteImg(
        "Edit"
      )}' width='24px' height='24px' data-edit="${id}" class='h-6 cursor-pointer'></div>
      <div  class="flex  items-center"  aria-label="archive note button" >
      <img src='${pathNoteImg(
        archive ? "ArchiveRemove" : "ArchiveAdd"
      )}' width='24px' height='24px' data-archive="${id}" class='h-6 cursor-pointer'></div>
      <div  class="flex  items-center h-6"  aria-label="delete note button"  ><img src='${pathNoteImg(
        "Delete"
      )}' width='24px' height='24px' data-delete="${id}" class='h-6 cursor-pointer'></div>
    </li>`;
};
