'use strict';
// Створити клас Людина.

class Human {
  name;
  sex;
  constructor(name, sex) {
    this.name = name;
    this.sex = sex;
  }
}

// // Створити клас Квартира.

class Apartment {
  inhabitant = [];

  addInhabitant(human) {
    if (human instanceof Human) {
      this.inhabitant.push(human);
    }
  }
}

// // Створити клас Будинок.

class House {
  apartments = [];
  constructor(maxApartments) {
    this.maxApartments = maxApartments;
  }

  addApartment(apartment) {
    if (apartment instanceof Apartment &&
      this.apartments.length < this.maxApartments
    ) {
      this.apartments.push(apartment);
      return;
    }
    console.log("Maximum apartment size");
  }
}

// // Демонстрації

let odin = new Human('Odin', 'male');
console.log(odin);

let freya = new Human('Freya', 'female');
console.log(freya);

let tor = new Human('Tor', 'male');
console.log(tor);

let oneRoom = new Apartment();
oneRoom.addInhabitant(odin);
console.log(oneRoom);

let twoRoom = new Apartment();
twoRoom.addInhabitant(freya);
console.log(twoRoom);

let threeRoom = new Apartment();
threeRoom.addInhabitant(tor);
console.log(threeRoom);

let smallHouse = new House(2);
smallHouse.addApartment(oneRoom);
console.log(smallHouse);

let bigHouse = new House(3);
bigHouse.addApartment(twoRoom);
console.log(bigHouse);
