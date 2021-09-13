function getSums() {

    const bill = parseFloat(document.getElementById("bill").value.replace(/,/g, '.') , 10);
    const people = parseFloat(document.getElementById("people").value.replace(/,/g, '.') , 10);
    const tipButton = document.querySelector(".active");
    const customTip = parseFloat(document.getElementById("custom").value, 10); 
    let tip; 

    if (isNaN(customTip) == false) {
      tip = customTip;
    } else if (tipButton !== null) {
      tip = parseFloat(tipButton.textContent, 10);
    } else {
      tip = null; 
    }
    
    if (isNaN(people) == false && tip !== null && isNaN(bill) == false) {
        
      const tipAmount = bill * tip / 100
      let tipAmount_pp = tipAmount / people
      tipAmount_pp = tipAmount_pp.toFixed(2)
      let total_pp = (bill + tipAmount) / people
      total_pp = total_pp.toFixed(2)

      document.querySelector('.sum.tip').textContent = '$'.concat(tipAmount_pp);
      document.querySelector('.sum.total').textContent = '$'.concat(total_pp);

    } else if (isNaN(people) == false || tipButton !== null || isNaN(bill) == false || isNaN(customTip) == false) {

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

      let customTip = document.getElementById("custom");
      if (customTip.value.length > 0) {
        customTip.value = "";
        getSums();
      }
    });
  }

  const customTip = document.getElementById("custom");

  customTip.addEventListener("input", function() {
    let tipButton =  document.getElementsByClassName("active")
    if (tipButton.length > 0) {
      tipButton[0].className = tipButton[0].className.replace(" active", "");
    }
  });
