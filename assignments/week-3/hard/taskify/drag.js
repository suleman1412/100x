const draggables = document.querySelectorAll('.taskCard')
const droppables = document.querySelectorAll('.lane')

draggables.forEach(task => {
    task.addEventListener('dragstart', () => {
        task.classList.add('is-dragging');
    })
    task.addEventListener('dragend', () => {
        task.classList.remove('is-dragging')
    })
})

droppables.forEach(lane => {
    lane.addEventListener('dragover', (e) => {
        e.preventDefault()
    })

    lane.addEventListener('drop', () => {
        const currTask = document.querySelector('.is-dragging')
        lane.appendChild(currTask)
        if(lane.id === 'completed'){
            currTask.classList.add('line-through')
        }
        else{
            currTask.classList.remove('line-through')
        }
    })
})
    