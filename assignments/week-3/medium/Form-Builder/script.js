// script.js
function addField() {
    const preview = document.getElementById('preview');
    const fieldType = document.getElementById('fieldType').value;
    let field;

    switch (fieldType) {
        case 'text':
            field = document.createElement('input');
            field.type = 'text';
            field.placeholder = 'Text Input';
            break;
        case 'checkbox':
            field = document.createElement('input');
            field.type = 'checkbox';
            break;
        case 'radio':
            field = document.createElement('input');
            field.type = 'radio';
            break;
        default:
            return; // Exit if no valid type is selected
    }

    preview.appendChild(field);
    preview.appendChild(document.createElement('br')); // Add line break for spacing
}