class Animal {
    speak() {
        console.log("Animal makes a sound");
    }
}

class Dog extends Animal {
    speak() {
        console.log("Dog sound like gong gong");
    }
}

class Cat extends Animal {
    speak() {
        console.log("Cat sound like miauw miauw");
    }
}

const dog = new Dog();
dog.speak();