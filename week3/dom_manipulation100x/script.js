let ctr = 0;
function cb(){
    const el = document.querySelectorAll('h4')[1]
    // console.log(el.innerHTML)
    el.innerHTML = `Counter: ${ctr}`
    ctr++;
}

setInterval(cb,1000)