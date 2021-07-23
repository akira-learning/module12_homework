// Написать, функцию, которая принимает в качестве аргумента объект и выводит в консоль все ключи и значения только собственных свойств. Данная функция не должна возвращать значение.

let person = {
    name: "Ivan",
    surname: "Ivanov",
    age: 21
}


function print(obj) {
    for (let prop in obj) {
        if (obj.hasOwnProperty(prop)) {
            console.log(prop + ":", obj[prop])
        }
    }
}

print(person);
