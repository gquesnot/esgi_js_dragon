function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

function getInteger(message, min, max){
    let result =  parseInt(window.prompt(message));

    while ((result < min && result > max) || isNaN(result)){
        let result =  parseInt(window.prompt(message));
    }
    return result;
}
