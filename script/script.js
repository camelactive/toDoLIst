let todolistAdd = document.querySelector(".todolist_add");
let todolistContainer = document.querySelector(".todolist_container")

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

    function startTarget(event) {
        if (event.target == acceptBtn) {
            let newItemInputItem = document.createElement("div");
            todolistContainer.insertAdjacentElement("afterbegin", newItemInputItem);
            newItemInputItem.insertAdjacentText("beforeend", newItemInput.value);
            newItemInputItem.classList.add("new_Item_Input_Item")
            newItemInput.remove();
            acceptBtn.remove();
            declineBtn.remove();
            console.log(newItemInputItem);

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

todolistAdd.addEventListener("click", addNewItem);