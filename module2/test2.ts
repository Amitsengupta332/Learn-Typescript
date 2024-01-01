{
    // Create an interface called Person with optional properties address and phone. The address property itself will be another object containing city and street properties. Implement a function named getAddressCity that takes an argument of type Person and returns the city from the address property of the Person object. Use optional chaining to prevent any type errors.

    // interface = Person, optional properties = {address,phone} address= {city, street} , function getAddressCity argument Person returns city and address. 

    interface Person {
        phone?: string;
        address?: {
            city: string;
            street: string;
        }
    }

    const getAddressCity = (person: Person): string | undefined => {
        return person.address?.city
    }

    const person1: Person = {
        address: {
            city: "Dhaka",
            street: "motijeel"
        },
        phone: "123 - 456 - 7890"
    };

    const person2: Person = {
        address: {
            city: "Cox's Bazar",
            street: "Dolphin Moor"
        },
        phone: "987-654-3210"
    };

    console.log(getAddressCity(person1));
    console.log(getAddressCity(person2));
}