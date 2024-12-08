document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById('todo-input');
    const addBtn = document.getElementById('add-btn');
    const todoList = document.getElementById('todo-list');

    // Add a new todo
    addBtn.addEventListener('click', () => {
        if (input.value.trim() === '') return;
        const li = document.createElement('li');
        li.innerHTML = `<input type="checkbox" /> ${input.value} <button class="delete-btn">x</button>`;
        todoList.appendChild(li);
        input.value = '';
    });

    // Delete todo
    todoList.addEventListener('click', (e) => {
        if (e.target.classList.contains('delete-btn')) {
            e.target.parentElement.remove();
        }
    });
});
