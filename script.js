function addToScreen(value) {
    document.getElementById("result").value += value;
  }
  
  function clearScreen() {
    document.getElementById("result").value = "";
  }
  
  function backspace() {
    var result = document.getElementById("result").value;
    document.getElementById("result").value = result.substring(0, result.length - 1);
  }
  
  function calculate() {
    var result = document.getElementById("result").value;
    document.getElementById("result").value = eval(result);
  }
  