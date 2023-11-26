const todoList = [];

addAndDisplay();

function addAndDisplay(){
    let todoListHTML = '';

    todoList.forEach(function(todoObject, index){
        const {name, dueDate} = todoObject;
        const html =` 
            <div>${name}</div>
            <div>${dueDate}</div> 
            <button onclick="
                todoList.splice(${index}, 1);
                addAndDisplay();
            " class="delete-todo-button">Delete</button>
        `;
        todoListHTML = todoListHTML + html;
    })
    document.querySelector('.js-todo-list').innerHTML = todoListHTML;
}

function addTodo(){
    const inputELement = document.querySelector('.js-name-input');
    const name = inputELement.value;
    const dateInputElement = document.querySelector('.js-due-date-input');
    const dueDate = dateInputElement.value;
    todoList.push({
        //name: name, 
        //dueDate: dueDate
        name,
        dueDate});
    console.log(todoList);

    inputELement.value = '';
    addAndDisplay();
}