document.getElementById('change-color').addEventListener('click', function() {
    const customColor = document.getElementById('custom-color').value;
    if (customColor) {
        const newButton = document.createElement('button');
        newButton.style.backgroundColor = customColor;
        newButton.innerText = customColor;
        newButton.setAttribute('class', 'colorBtn')
        newButton.addEventListener('click', function() {
            document.body.style.backgroundColor = customColor;
        });
        document.querySelector('.newColors').appendChild(newButton);
    }
});
