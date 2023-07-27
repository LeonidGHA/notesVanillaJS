const buttonOpenEl = document.querySelector("#toggleModal");
const backdropEl = document.querySelector("#backdrop");
const buttonCloseEl = document.querySelector("#modalClose");

export const onClickOpenModal = () => {
  backdropEl.className =
    "fixed bg-slate-300/50 top-0 left-0 w-screen h-screen flex items-center justify-center";

  window.addEventListener("keydown", onEscBtnPush);
};

export const onClickCloseModal = (id) => {
  backdropEl.className = "hidden";
  window.removeEventListener("keydown", onEscBtnPush);
};

const onEscBtnPush = (event) => {
  if (event.code !== "Escape") {
    return;
  }

  onClickCloseModal();
};

const onBackdropElClick = (event) => {
  if (event.currentTarget !== event.target) {
    return;
  }

  onClickCloseModal();
};

buttonOpenEl.addEventListener("click", onClickOpenModal);
buttonCloseEl.addEventListener("click", onClickCloseModal);
backdropEl.addEventListener("click", onBackdropElClick);
