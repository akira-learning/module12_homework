// Написать функцию, которая создает пустой объект, но без прототипа.

function createEmptyObj() {
    let emptyObj = Object.create(null);
    //emptyObj.value = "hello";
    console.log(emptyObj);
    return emptyObj;
}

createEmptyObj();

