{
    //Class and object

    // class Animal {
    //     name: String;
    //     Species: String;
    //     Sound: String;

    //     constructor(name: String, Species: String, Sound: String) {
    //         this.name = name;
    //         this.Species = Species;
    //         this.Sound = Sound;
    //     }


    //     makeSound() {
    //         console.log(`The ${this.name} says ${this.Sound}`);
    //     }
    // }

    class Animal {
        //Parameter Properties
        constructor(public name: string, public species: string, public sound: string) { }


        makeSound() {
            console.log(`The ${this.name} says ${this.sound}`);
        }
    }

    const dog = new Animal("German Shepard Bhai", "dog", "Ghew Ghew");
    const cat = new Animal("Persian bhai", "cat", "meaw meaw");

    dog.makeSound()
    //
}