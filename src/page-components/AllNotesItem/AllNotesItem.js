import { pathCategoryNoteImg } from "../../utils/pathCategoryNoteImg";
import { renderFormatDate } from "../../utils/formatDate";

export const AllNotesItem = (note) => {
  const { id, name, created, category, content, dates } = note;
  return `<li class="grid grid-cols-14 gap-4 px-5 py-2 rounded bg-blue-200">
      <div class="flex justify-center items-center"><img src='${pathCategoryNoteImg(
        category
      )}' width='24px' height='24px'></div> 
      <span class="truncate col-start-2 col-span-2">${name}</span>
      <span class="truncate col-span-2">${renderFormatDate(created)}</span>
      <span class="truncate col-span-2">${category}</span>
      <p class="truncate col-span-2">${content}</p>
      <span class="truncate col-span-2">${dates}</span>
      <div data-edit="${id}">rew</div>
      <div data-archive="${id}">arh</div>
      <div data-delete="${id}">del</div>
    </li>`;
};
