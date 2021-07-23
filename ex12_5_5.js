class elAppliance{
    constructor(options){
        this.category = 'Электроприборы',
        this.name = options.name,
        this.power = options.power
    }

    getPower(energy){
        let power = (energy * 220) / 1000;
        console.log(this.name + ': мощность ' + power + ' кВт/ч');
        return power;
    }

    switcher(switcher){
        let switchedOn = '';
        if (switcher) { switchedOn = `Прибор ${this.name} включен в сеть` }
        else { switchedOn = `Прибор ${this.name} отключен от сети` }
        console.log(switchedOn);
    }

}

class elApplianceComp extends elAppliance{
    constructor(options) {
        super(options)
        this.weight = options.weight,
        this.color = options.color
    }
}


const computer = new elApplianceComp({
    name: 'Компьютер',  
    weight: 5.5, 
    color: 'черный', 
    power: 85
}); 

const lamp = new elAppliance({
    name: 'Лампа',  
    power: 12
});

let sumPower = computer.getPower(computer.power) + lamp.getPower(lamp.power);
console.log('Cумма мощностей = ' + sumPower + ' КВт/ч');

computer.switcher(true);
lamp.switcher(false);