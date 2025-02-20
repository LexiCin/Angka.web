// script.js
let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

const submitBtn = document.getElementById('submit-btn');
const userInput = document.getElementById('user-input');
const result = document.getElementById('result');
const attemptsText = document.getElementById('attempts');

submitBtn.addEventListener('click', () => {
  const userGuess = parseInt(userInput.value);
    
      if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
          result.textContent = "Please enter a number between 1 and 100.";
              result.style.color = "red";
                  return;
                    }

                      attempts++;
                        
                          if (userGuess < randomNumber) {
                              result.textContent = "Too low! Try again.";
                                  result.style.color = "orange";
                                    } else if (userGuess > randomNumber) {
                                        result.textContent = "Too high! Try again.";
                                            result.style.color = "orange";
                                              } else {
                                                  result.textContent = `Congratulations! You guessed it in ${attempts} attempts.`;
                                                      result.style.color = "green";
                                                        }

                                                          attemptsText.textContent = `Attempts: ${attempts}`;
                                                          });