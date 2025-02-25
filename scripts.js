function updateTime() {
    let now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes().toString().padStart(2, '0');
    let seconds = now.getSeconds().toString().padStart(2, '0');
    let ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12; 

    let timeString = `${hours}:${minutes}${ampm}`;
    document.getElementById("time").innerText = timeString;
}

updateTime(); 
setInterval(updateTime, 1000); 
// -------------------------------------------------------------------------------------

function openModal() {
    document.getElementById("inputs").style.display = "flex";
}

function closeModal() {
    document.getElementById("inputs").style.display = "none";
}
// ----------------------------------------------------------------------------------------

let tasks = [];

document.getElementById("newTask").addEventListener("click", function(event) {

    event.preventDefault();
    addTask();
});

const addTask = () => {
    const taskInput = document.getElementById("taskInput").value.trim();

    if (taskInput) {
        tasks.push({ text: taskInput, completed: false});
        document.getElementById("taskInput").value = "";
        updateTasksList();
    }

    console.log(tasks);

}

const updateTasksList = () => {
    const tasksList = document.getElementById("tasksList");
    tasksList.innerHTML = "";

    tasks.forEach((task, index) => {
        const taskElement = document.createElement("li");

        const checkboxId = `cbx-${index + 1}`;

        taskElement.innerHTML = `
                <div class="checkbox-wrapper-15">
                    <input class="inp-cbx" id="${checkboxId}" type="checkbox" style="display: none;" ${task.completed ? "checked" : ""} />
                    <label class="cbx" for="${checkboxId}">
                        <span>
                            <svg width="12px" height="9px" viewbox="0 0 12 9">
                                <polyline points="1 5 4 8 11 1"></polyline>
                            </svg>
                        </span>
                        <span>${task.text}</span>
                    </label>
                </div>
                <button>Remove</button>
        `;

        taskElement.className = task.completed ? "completed" : "";
        taskElement.querySelector(".inp-cbx").addEventListener("change", () => {
            tasks[index].completed = !tasks[index].completed;
            updateTasksList();
        });

        taskElement.querySelector("button").addEventListener("click", () => {
            tasks.splice(index, 1);
            updateTasksList();
        });

        tasksList.appendChild(taskElement);
    });
};