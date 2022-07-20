// Функция генерации случайного числа
const generateRandomNumber = () => {
    return Math.round(Math.random() * 100);
}

// Принимаем число
const isEven = (number) => {
    return number % 2 === 0;
    // Если остаток от деление на 2 равен 0 - число четное
}

const startRound = () => {
    const randomNumber = generateRandomNumber();
    //Запуск функции случайных чисел
    const answer = prompt(`Is the number ${randomNumber} even? Answer "yes" or "no".`)
        // Вопрос к игроку
    const correctAnswer = isEven(randomNumber) ? "yes" : "no";
    // нужно определитть правильный ответ
    if (answer === correctAnswer) { // сравнение чисел
        alert("The answer is correct!") // Сооьщаем игроку об этом
        return true; // возращаем результат
    } else {
        alert(`The answer is wrong! Right answer:"${correctAnswer}".`); // Сообщаем об этом игроку
        return false; // Возращаем результат 
    }
}

const startGame = () => {
    for (let i = 0; i < 3; i += 1) {
        const isCorrect = startRound();
        if (!isCorrect) {
            alert("The game is over!");
            return;
        }
    }
    alert("Congratulations, you have won")
}