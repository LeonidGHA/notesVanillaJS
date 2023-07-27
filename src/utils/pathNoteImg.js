import noteImg from "../images/svg/note.svg";
import ideaImg from "../images/svg/idea.svg";
import commentImg from "../images/svg/comment.svg";
import archiveRemoveImg from "../images/svg/box-remove.svg";
import archiveAddImg from "../images/svg/box-add.svg";
import editImg from "../images/svg/edit.svg";
import deleteImg from "../images/svg/trash.svg";

export const pathNoteImg = (nameImgNote) => {
  let pathImg = "";
  switch (nameImgNote) {
    case "Task":
      pathImg = noteImg;
      break;
    case "Idea":
      pathImg = ideaImg;
      break;
    case "Random Thought":
      pathImg = commentImg;
      break;
    case "ArchiveAdd":
      pathImg = archiveAddImg;
      break;
    case "ArchiveRemove":
      pathImg = archiveRemoveImg;
      break;
    case "Edit":
      pathImg = editImg;
      break;
    case "Delete":
      pathImg = deleteImg;
      break;
    default:
      console.log("Invalid path to image Note");
  }
  return pathImg;
};
