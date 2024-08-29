const newTasks = document.getElementById('add-input');
const addBtn = document.getElementById('add-btn');
const taskList = document.getElementById('todo-list');

// adding tasks
addBtn.addEventListener('click', () => {
    const task = newTasks.value.trim();
    if (task !== ''){
        const li = document.createElement('li')
        li.className = 'todo-container';
        li.innerHTML = `${task} <button id='edit-btn'>✏️</button> <button id='delete-btn'>❌</button>`
        taskList.appendChild(li);
        newTasks.value = ''
    }
})
