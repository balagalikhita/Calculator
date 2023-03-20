let string = "";
//displaying values in input
let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((button) => {
  button.addEventListener('click', (e) => {
    // for evaluating
    if (e.target.innerHTML == '=') {
      string = eval(string);
      document.querySelector('input').value = string;
    }
    else if (e.target.innerHTML == 'C') {
      string = "";
      document.querySelector('input').value = string;
    }
    else if (e.target.innerHTML == 'M+') {
      e.target.innerHTML = eval(string) + "+";
      string = e.target.innerHTML;
      document.querySelector('input').value = string;
    }
    else if (e.target.innerHTML == 'M-') {
      e.target.innerHTML = eval(string) + "-";
      string = e.target.innerHTML;
      document.querySelector('input').value = string;
    }
    else {
      console.log(e.target);
      string = string + e.target.innerHTML;
      document.querySelector('input').value = string;
    }
  })
})