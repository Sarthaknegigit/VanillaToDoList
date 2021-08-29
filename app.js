const addTodo = document.querySelector('.add');
const todoList = document.querySelector('.todos')

const createTodo = todo => {
    const newTodo =
    `
        <li class="list-group-item d-flex justify-content-between align-items-center">
            <span>${todo}</span>
            <i class="far fa-trash-alt delete"></i>
        </li>
    `;
    todoList.innerHTML += newTodo;
};

addTodo.addEventListener('submit', e => {
    e.preventDefault();

    const todo = addTodo.add.value.trim();
    if(todo.length){
        createTodo(todo);
        addTodo.reset();
    }

});

todoList.addEventListener('click', e => {
    if(e.target.classList.contains('delete')){
        e.target.parentElement.remove();
    }
});