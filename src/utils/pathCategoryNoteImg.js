import noteImg from "../images/svg/note.svg";
import ideaImg from "../images/svg/idea.svg";
import commentImg from "../images/svg/comment.svg";

export const pathCategoryNoteImg = (categoryNote) => {
  let pathImg = "";
  switch (categoryNote) {
    case "Task":
      pathImg = noteImg;
      break;
    case "Idea":
      pathImg = ideaImg;
      break;
    case "Random Thought":
      pathImg = commentImg;
      break;
    default:
      console.log("Invalid path to image Note");
  }
  return pathImg;
};
