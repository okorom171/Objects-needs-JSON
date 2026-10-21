
const taskList = document.getElementById("taskList");

taskList.addEventListener("click", function(event) {
  // Find the button that was clicked.
  const button = event.target.closest("button[data-action]");

  // Ignore clicks outside the action buttons.
  if (!button || !taskList.contains(button)) {
    return;
  }

  // Find the task that contains the button.
  const taskItem = button.closest("li[data-id]");

  if (!taskItem) {
    return;
  }

  const action = button.dataset.action;

  if (action === "complete") {
    const title = taskItem.querySelector("span");

    title.style.textDecoration =
      title.style.textDecoration === "line-through"
        ? "none"
        : "line-through";
  }

  if (action === "delete") {
    taskItem.remove();
  }
});

