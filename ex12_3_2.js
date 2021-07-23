// Написать функцию, которая принимает в качестве аргументов строку и объект, а затем проверяет есть ли у переданного объекта свойство с данным именем. Функция должна возвращать true или false.
let person = {
    name: "Ivan",
    surname: "Ivanov",
    age: 21,
    city: "Moscow",
    profession: "Developer"
}

let phrase = "name";

function isProp(obj, str) {
    let result = false;
    if (str in obj) {
        result = true;
    }
    console.log(result);
    return result;
}

isProp(person, phrase);

