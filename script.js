function getSums() {

    const bill = parseFloat(document.getElementById("bill").value.replace(/,/g, '.') , 10);
    const people = parseFloat(document.getElementById("people").value.replace(/,/g, '.') , 10);
    const tip_button = document.querySelector(".active");

    if (isNaN(people) == false && tip_button !== null && isNaN(bill) == false) {
        
      const tip = parseFloat(tip_button.textContent, 10);
      const tip_amount = bill * tip / 100
      let tip_amount_pp = tip_amount / people
      tip_amount_pp = tip_amount_pp.toFixed(2)
      let total_pp = (bill + tip_amount) / people
      total_pp = total_pp.toFixed(2)

      document.querySelector('.sum.tip').textContent = '$'.concat(tip_amount_pp);
      document.querySelector('.sum.total').textContent = '$'.concat(total_pp);

    } else if (isNaN(people) == false || tip_button !== null || isNaN(bill) == false) {

      let reset = document.getElementById('reset'); 
      reset.className = "";
      reset.className += "active";

    }
    
}

function clearInputs() {
      
    let inputElements = document.getElementsByTagName("input"); 

    for (let i=0; i<inputElements.length; i++) {
        inputElements[i].value = '';
    }

    let activeButton = document.getElementsByClassName("active");

    if (activeButton.length>0) {
        activeButton[0].className = activeButton[0].className.replace(" active", ""); 
    }

    document.querySelector('.sum.tip').textContent = '$0.00'
    document.querySelector('.sum.total').textContent = '$0.00'

    let reset = document.getElementById('reset'); 
    reset.className = "";

}

const buttons = document.getElementsByClassName("option");

for (let i=0; i<buttons.length; i++) {
    buttons[i].addEventListener("click", function() {
      let current = document.getElementsByClassName("active");
      if (current.length == 0) {
        this.className += " active";
        getSums();
      } else {
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
        getSums();
      }
    });
  }

