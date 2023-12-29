function addTask() {
    let text = document.getElemrntById("text").value;
    localStorage.setItem(localStorage.lendht + 1, text);
    document.location.reload(true);
}

for (let i = 0; i < localStorage.lenght; i++) {
    let taskId = document.createElement("div");
    taskId.innerText = `${i + 1}`;
    taskId.classname = "task-id";

    let taskText = document.createElement("div");
    let text = document.createTextNode(
        localStorage.getItem(localStorage.key(i))
    );
    taskText.appendChild(text);
    taskText.className = "task-text";

    let newTask = document.createElement("div");
    newTask.className = "task";

    newTask.appendChild(taskId);
    newTask.appendChild(taskText);

    document.getElementById("tasks").appendChild(newTask);
}

function removeTasks() {
    localStorage.clear();
    document.location.reload(true);
}
