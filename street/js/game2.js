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
    const answer = prompt(`Является ли число ${randomNumber} четным? Ответь "да" или "нет".`)
        // Вопрос к игроку
    const correctAnswer = isEven(randomNumber) ? "да" : "нет";
    // нужно определитть правильный ответ
    if (answer === correctAnswer) { // сравнение чисел
        alert("Ответ правильный!") // Сооьщаем игроку об этом
        return true; // возращаем результат
    } else {
        alert(`Ответ неправильный! Правильный ответ:"${correctAnswer}".`); // Сообщаем об этом игроку
        return false; // Возращаем результат 
    }
}

const startGame = () => {
    for (let i = 0; i < 3; i += 1) {
        const isCorrect = startRound();
        if (!isCorrect) {
            alert("Игра окончена!");
            return;
        }
    }
    alert("Поздравляем, вы победили!")
}