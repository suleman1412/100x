document.getElementById('Btn').addEventListener('click', () => {
    const task = document.getElementById('textField').value;
    const todolane = document.getElementById('todo')
    
    if (!task){
        alert('Enter a task.');
        return;
    };
    const taskCard = document.createElement('div')
    taskCard.setAttribute('class', 'taskCard')
    
    const title = document.createElement('p')
    title.innerText = task

    const radio = document.createElement('input')
    radio.setAttribute('type', 'radio')
    radio.setAttribute('hidden', 'true')
    radio.setAttribute('id', 'updateTodo')
    
    const label = document.createElement('label')
    label.setAttribute('for', 'updateTodo')
    label.innerText = '🛠️'
    label.setAttribute('class', 'labelupdateTodo')

    taskCard.setAttribute('draggable', 'true')

    label.addEventListener('click', (event) => {
        const taskCard = event.target.closest('.taskCard')
        const p = taskCard.querySelector('p')
        
        const input = document.createElement('input')
        input.value = taskCard.innerText;
        taskCard.removeChild(p)
        taskCard.appendChild(input)
    })
    taskCard.addEventListener('dragstart', () => {
        taskCard.classList.add('is-dragging')
    })
    taskCard.addEventListener('dragend', () => {
        taskCard.classList.remove('is-dragging')
    })

    document.getElementById('textField').value = ''
    taskCard.appendChild(radio)
    taskCard.appendChild(label)
    taskCard.appendChild(title)
    todolane.appendChild(taskCard)
})




