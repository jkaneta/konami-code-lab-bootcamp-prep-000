const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

const updatedCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'KeyA', 'KeyB'];

function init() {
  // Write your JavaScript code inside the init() function
  let codeCount = 0;
  
  document.body.addEventListener('keydown', function(e) {
    let keyPressed = e.code;
    
    if (keyPressed === updatedCode[codeCount]) {
      codeCount++;
      if (codeCount === updatedCode.length) {
        alert('Congratulations!');
      }
    } else {
      codeCount = 0;
    }
    
  });
}