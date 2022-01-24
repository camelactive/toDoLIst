let todolistAdd = document.querySelector(".todolist_add");
let todolistContainer = document.querySelector(".todolist_container");
let memory = [];

function addNewItem() {
    let newItemInput = document.createElement("input");
    newItemInput.classList.add("ListItem");
    todolistContainer.insertAdjacentElement("beforeend", newItemInput);

    let btnContainer = document.createElement("div");
    newItemInput.insertAdjacentElement("afterend", btnContainer);
    btnContainer.classList.add("btnContainer");
    btnContainer.addEventListener("click", startTarget);


    let acceptBtn = document.createElement("button");
    btnContainer.insertAdjacentElement("beforeend", acceptBtn);
    acceptBtn.classList.add("todolist_add");
    acceptBtn.textContent = "Утвердить цель"

    let declineBtn = document.createElement("button");
    btnContainer.insertAdjacentElement("beforeend", declineBtn);
    declineBtn.classList.add("todolist_decline");
    declineBtn.textContent = "Отменить цель";
    let newItemInputItem = document.createElement("div");

    function startTarget(event) {
        if (event.target == acceptBtn) {

            todolistContainer.insertAdjacentElement("afterbegin", newItemInputItem);
            newItemInputItem.insertAdjacentText("beforeend", newItemInput.value);
            newItemInputItem.classList.add("new_Item_Input_Item")
            newItemInput.remove();
            acceptBtn.remove();
            declineBtn.remove();
            memory.push(newItemInput.value);
            localStorage.setItem("item", memory)
            console.log(localStorage.getItem("item"));


            let finishBtn = document.createElement("button");
            finishBtn.classList.add("finish_Btn")
            let failBtn = document.createElement("button");
            failBtn.classList.add("fail_Btn")
            newItemInputItem.insertAdjacentElement("afterbegin", finishBtn);
            newItemInputItem.insertAdjacentElement("afterbegin", failBtn);

            finishBtn.addEventListener("click", finish);
            failBtn.addEventListener("click", fail);

            function finish() {
                newItemInputItem.classList.add("finish");
                finishBtn.remove();
                failBtn.remove();

            };

            function fail() {
                newItemInputItem.classList.add("fail");
                finishBtn.remove();
                failBtn.remove();
            }


        } else {
            newItemInput.remove();
            acceptBtn.remove();
            declineBtn.remove();
        }

    }

}
// Секция работы с localStorage
todolistAdd.addEventListener("click", addNewItem);
memory = localStorage.getItem("item").split(",");



function startWindow() {

    for (let i = 0; i < memory.length; i++) {
        let newItemInputItem = document.createElement("div");
        newItemInputItem.insertAdjacentText("beforeend", memory[i]);
        todolistContainer.insertAdjacentElement("afterbegin", newItemInputItem);
        newItemInputItem.classList.add("new_Item_Input_Item")
        console.log(newItemInputItem)
    }
}
startWindow();
let clearList = document.querySelector(".todolist_clear");

function clearListFunc() {
    localStorage.clear();
    document.location.reload()

}
clearList.addEventListener("click", clearListFunc);
console.log(newItemInputItem)