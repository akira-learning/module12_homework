// Определяем родительскую функцию, иерархию

function elAppliance (name, power){
  this.category = 'Электроприборы',
  this.name = name,
  this.power = power
}

elAppliance.prototype.getPower = function(energy){
  let power = (energy * 220) / 1000;
  console.log(this.name + ': мощность ' + power + ' кВт/ч');
  return power;
}

// Определяем родительскую функцию, которая включают/выключают прибор

elAppliance.prototype.switcher = function(switcher){
  let switchedOn = '';
  if (switcher) { switchedOn = `Прибор ${this.name} включен в сеть` }
  else { switchedOn = `Прибор ${this.name} отключен от сети` }
  console.log(switchedOn);
}

function elApplianceComp(name, weight, color, power){
  this.name = name,
  this.weight = weight,
  this.color = color,
  this.power = power
}

elApplianceComp.prototype = new elAppliance();

const computer = new elApplianceComp('Компьютер',  5.5, 'черный', 85); 
const lamp = new elAppliance('Лампа', 12, true);

computer.switcher(true);

const notebook = Object.create(elApplianceComp);  //новый объект с прототипом elApplianceComp
notebook.name = 'Ноутбук';
notebook.weight = 3.0;
notebook.color = 'белый';
notebook.power = 57;

let sumPower = computer.getPower(computer.power) + lamp.getPower(lamp.power);
console.log('Cумма мощностей = ' + sumPower + ' КВт/ч');

// Object.prototype.switch = function(){
//   if (this.switchedOn == true){
//     this.switchedOn == false;
//     console.log("Прибор выключен");
//   } else {
//     this.switchedOn == true;
//     console.log("Прибор включен");
//   }
// }

// const computer = new Object({
//   name: 'Компьютер',
//   weight: 5.5,
//   color: 'black',
//   power: 85,
//   switchedOn: true,
//   logInfo: function(){
//     console.group(`${this.name} инфо:`);
//     console.log(`Это ${this.name}`);
//     console.log(`Вес ${this.weight} кг`);
//     console.log(`Цвет ${this.color}`);
//     console.log(`Мощность ${this.power} Вт`);
//     console.groupEnd();
//   }
// })

// const notebook = Object.create(computer);
// notebook.name = 'Ноутбук';
// notebook.weight = 3.0;
// notebook.power = 57;

// const lamp = {
//   name: 'Лампа',
//   weight: 1.2,
//   color: 'white',
//   power: 12,
//   switchedOn: true,
//   lightOn: function(){
//     if(this.switchedOn == true){
//       console.log('Свет горит!')
//     } else {
//       console.log('Свет выключен.')
//     }
//   }
// }
