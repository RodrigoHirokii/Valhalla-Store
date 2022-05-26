const novaRoupaInput = document.querySelector(".nova-roupa-input");
const novaRoupaButton = document.querySelector(".nova-roupa-button");

const roupasAddContainer = document.querySelector(".roupasAdd-container");

const validacaoInput = () => {
  return novaRoupaInput.value.trim().length > 0;
};

const handleAddTask = () => {
  const inputEstaValido = validacaoInput();

  if (!inputEstaValido) {
    return novaRoupaInput.classList.add("error");
  }

  const roupasItemContainer = document.createElement("div");
  roupasItemContainer.classList.add("task-item");

  const roupaConteudo = document.createElement("p");
  roupaConteudo.innerText = novaRoupaInput.value;

  const itemDeletado = document.createElement("i");
  itemDeletado.classList.add("fa-solid");
  itemDeletado.classList.add("fa-trash");

  itemDeletado.addEventListener("click", () =>
    handleDeleteClick(roupasItemContainer, roupaConteudo)
  );

  roupasItemContainer.appendChild(roupaConteudo);
  roupasItemContainer.appendChild(itemDeletado);

  roupasAddContainer.appendChild(roupasItemContainer);
};

const handleDeleteClick = (roupasItemContainer, roupaConteudo) => {
  const tasks = roupasAddContainer.childNodes;

  for (const task of tasks) {
    const currentTaskIsBeingClicked = task.firstChild.isSameNode(roupaConteudo);

    if (currentTaskIsBeingClicked) {
      roupasItemContainer.remove();
    }
  }
};

const handleInputChange = () => {
  const inputEstaValido = validacaoInput();

  if (inputEstaValido) {
    return novaRoupaInput.classList.remove("error");
  }
};
novaRoupaButton.addEventListener("click", () => handleAddTask());
novaRoupaInput.addEventListener("change", () => handleInputChange());
