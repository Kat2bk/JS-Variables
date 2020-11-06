const inputs = document.querySelectorAll('.controls input');

function handleUpdate() {
    const dataProperty = this.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${this.name}`, this.value + dataProperty);
}

// remember about dataset attributes, this.dataset

// function showValue(value) {
//    document.getElementsByClassName('textInput').value = value;
// }

inputs.forEach(input => {
     input.addEventListener('change', handleUpdate)
})

inputs.forEach(input => {
    input.addEventListener('mouseover', handleUpdate)
})