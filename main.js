const inputField = document.querySelector("#input_field")
const buttonSubmit = document.querySelector("#button_submit")
const taskList = document.querySelector("#task_list")

const taskValue = []

inputField.addEventListener("keypress", (e) => {
    if (e.key === 'Enter') {
        addTask()
    }
})

buttonSubmit.addEventListener("click", () => {
    addTask()
})

function addTask() {
    let valueInput = inputField.value.trim()
    if (valueInput !== "") {
        taskValue.push(valueInput)
        renderList()
        inputField.value = ""
    } else {
        alert("Tolong Masukan Text!")
    }
}

function renderList() {
    taskList.innerHTML = ""

    taskValue.forEach((task, index) => {
        const li = document.createElement("li")
        const div = document.createElement("div")
        const containerButton = document.createElement("div")
        const containerText = document.createElement("div")
        const p = document.createElement("p")
        const h1 = document.createElement("h1")
        const htmlButtonDelete = document.createElement("button")
        const htmlButtonEdit = document.createElement("button")

        div.classList.add("flex", "flex-row", "p-4", "justify-between", "gap-4", "rounded", "shadow-md")
        li.classList.add("w-[500px]")
        containerButton.classList.add("flex", "gap-4")
        containerText.classList.add("flex", "gap-4", "items-center")
        htmlButtonDelete.classList.add("p-2", "rounded", "bg-red-500", "font-bold", "text-white")
        htmlButtonEdit.classList.add("p-2", "rounded", "bg-yellow-500", "font-bold", "text-white")

        p.textContent = index + 1
        h1.textContent = task

        taskList.appendChild(li)
        li.appendChild(div)
        div.appendChild(containerText)
        div.appendChild(containerButton)
        containerText.appendChild(p)
        containerText.appendChild(h1)

        htmlButtonDelete.textContent = "Hapus Task"
        htmlButtonEdit.textContent = "Edit Task"

        containerButton.appendChild(htmlButtonDelete)
        containerButton.appendChild(htmlButtonEdit)

        htmlButtonDelete.addEventListener("click", () => {
            taskValue.splice(index, 1)
            renderList()
        })

        const popup = document.querySelector("#popup")
        const closePopup = document.querySelector("#closePopup")
        const popupInputField = document.querySelector("#new-task-input")

        htmlButtonEdit.addEventListener("click", () => {
            popup.classList.remove("hidden")
        })

        closePopup.addEventListener("click", () => {
            popup.classList.add("hidden")
        })

        popupInputField.addEventListener("keypress", (e) => {
            if (e.key === 'Enter') {
                updateTask()
                popup.classList.add("hidden")
            }
        })

        function updateTask() {
            let valueInput = popupInputField.value.trim()
            if (valueInput !== "") {
                taskValue[index] = valueInput
                renderList()
                popupInputField.value = ""
            } else {
                alert("Tolong Masukan Text!")
            }
        }
    });

}