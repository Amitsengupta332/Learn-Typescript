{//
    class Cat {
        // name: string;
        // species: string;

        // constructor(
        //     name: string,
        //     species: string
        // ) {
        //     this.name = name;
        //     this.species = species;
        // }
    }

    const isCat = (animal: Cat): animal is Cat => {
        return animal instanceof Cat;
    };

    const getAnimal = (animal: Cat) => {
        if (isCat(animal)) {
            return "yes, it's a cat."
        }
        else {
            return "no, it's not a cat."
        }
    }

    const cat = new Cat();

    const dog = {
       
    }



    console.log(getAnimal(dog));


}