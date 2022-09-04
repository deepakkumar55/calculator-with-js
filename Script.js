let screen = document.querySelector('#screen');
btn = document.querySelectorAll('button');
d = document.querySelector(".ri-delete-back-2-fill")
let clutter = '';
for (item of btn) {
    item.addEventListener('click', function (targetvalue) {
        buttonText = targetvalue.target.innerText;
        console.log('Button text is ', buttonText);
        if (buttonText == 'X') {
            buttonText = '*';
            clutter += buttonText;
            screen.value = clutter;
        }
        else if (buttonText == 'AC') {
            clutter = "";
            screen.value = clutter;
        }
        else if (buttonText == '=') {
            screen.value = eval(clutter);
        }
        else {
            clutter += buttonText;
            screen.value = clutter;
        }

    })
}
