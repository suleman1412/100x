document.getElementById('Btn').addEventListener('click', () => {
    const task = document.getElementById('textField').value;
    const todolane = document.getElementById('todo')
    
    
    if (!task) return;
    const taskCard = document.createElement('div')
    taskCard.setAttribute('class', 'taskCard')
    
    const title = document.createElement('p')
    title.innerText = task

    taskCard.setAttribute('draggable', 'true')

    taskCard.addEventListener('dragstart', () => {
        taskCard.classList.add('is-dragging')
    })
    taskCard.addEventListener('dragend', () => {
        taskCard.classList.remove('is-dragging')
    })

    document.getElementById('textField').value = ''
    taskCard.appendChild(title)
    todolane.appendChild(taskCard)
})