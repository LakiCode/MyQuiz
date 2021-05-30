var timerEl = document.getElementById('timer');
var startBtn = document.getElementById('start');

function count() {
    console.log ("hello")
    var timeLeft = 120;
    //startBtn.onClick -=countdown;
  
    // TODO: Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
    var timeInterval = setInterval(function() {
      // set interval
    if (!timeLeft)
    {
      timerEl.textContent = ""
      displayMessage()
      clearInterval(timeInterval);
      return;
    }
    if (timeLeft > 1)
      timerEl.textContent = timeLeft;
        else
        timerEl.textContent = timeLeft;
      
       timeLeft --;
    } ,1000);
  }
  //startBtn.onclick = count;