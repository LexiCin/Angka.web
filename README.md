## Game Angka 
------
## Deskripsi
Game Angka adalah permainan sederhana yang menguji ketepatan dan kecepatan pemain dalam menebak angka yang dihasilkan secara acak oleh sistem. Game ini dirancang untuk mengasah kemampuan berpikir logis dan strategi dalam menentukan angka yang tepat.
# Cara Bermain
1. Pemain akan diminta untuk memasukkan angka dalam rentang tertentu (misalnya 1-100).


2. Sistem akan memberikan petunjuk apakah angka yang dimasukkan terlalu besar, terlalu kecil, atau benar.


3. Pemain harus menebak angka yang benar dalam jumlah percobaan yang terbatas.


4. Jika pemain berhasil menebak angka dengan benar, mereka akan menang dan dapat melihat statistik permainan mereka.

## Implentasi Code 
Berikut adalah contoh kode sederhana untuk membuat Game Angka menggunakan HTML, CSS, dan JavaScript:

 ## Code

### HTML
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Guess The Number Game</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <div class="game-container">
    <h1>Guess The Number</h1>
    <p>Guess the number between 1 and 100.</p>
    <input type="number" id="user-input" placeholder="Enter a number" />
    <button id="submit-btn">Submit Guess</button>
    <p id="result"></p>
    <p id="attempts"></p>
  </div>
  <script src="script.js"></script>
</body>
</html>
```

### CSS
```css
/* styles.css */
body {
  font-family: Arial, sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #f4f4f9;
  margin: 0;
}

.game-container {
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  max-width: 400px;
  width: 100%;
}

input {
  padding: 10px;
  margin: 10px 0;
  width: 60%;
  border: 2px solid #ccc;
  border-radius: 4px;
}

button {
  padding: 10px 15px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #45a049;
}

p {
  font-size: 18px;
}
```

### JavaScript
```js
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
```

## Teknologi Pengembangan
![HTML](https://img.shields.io/badge/HTML5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-%23F7DF1E.svg?style=for-the-badge&logo=javascript&logoColor=black)
![GitHub](https://img.shields.io/badge/GitHub-%23181717.svg?style=for-the-badge&logo=github&logoColor=white)

## Demo
You can try the live demo of the project here: [Live Demo Link](https://lexicin.github.io/Angka.web/)

## Join Discord Kami
[![Join our Discord](https://img.shields.io/badge/Join%20our%20Discord-7289DA?style=for-the-badge&logo=discord&logoColor=white)](https://discord.gg/s3A3trH5v8)

Join: [Discord](https://discord.gg/s3A3trH5v8)
 ## Developer
------
**By : LexiCin**

