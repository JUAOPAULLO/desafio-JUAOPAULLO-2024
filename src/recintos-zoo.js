//Não estudei j.s ainda por tanto muito dificil o teste no meu caso.
class RecintosZoo {

    analisaRecintos(animal, quantidade) {
       this.animal = animal
       this.quantidade = quantidade
       if (quantidade => 5){
        console.log('Qauntidade invalida');
       }
    }           
}
class animal {
    constructor(nome,bioma) {
        this.nome = nome
        this.bioma = bioma
        if (nome === unicornio) {
            console.log ('Animal invalido');
        }
    }
    adicionarAnimal(animal) {
        let espacoOcupado = this.animal.reduce((total, animal) => total + animal.tamanho, 0);
        if (espacoOcupado + animal.quantidade <= this.bioma) {
            this.animais.push(animal);
            console.log(`${animal.nome}foi adicionado ao recinto de ${this.bioma}.`);
        }else {
            console.log(`Não há espaço suficiente para ${animal.nome} no recinto de ${this.bioma}.`);
        }
    }
}
//Novos animais.
let leao = new animal('Leão',2);
let macaco = new animal('Macaco',2);
let crocodilo = new animal('Crocodilo',1);
let gazela = new animal('Gazela',1);
let leopardo = new animal('Leopardo',1);
//Novos biomas.
let savana = new animal('Savana',10);
let savanaRio = new animal('savana e rio',7);
let rio = new animal('rio',8);
let floresta = new animal('floresta',5);







export { RecintosZoo as RecintosZoo };
