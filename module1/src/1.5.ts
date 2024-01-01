{// Reference Type --> Object

    //Implicid Type example
    // const user ={
    //     firsName : "Amit",
    //     middleName: "Sen",
    //     lastName: "gupta"
    // }   



    //explacid Type Example
    const user: {
        company: "Programming Hero"; // literal type
        firstName: string;
        middleName?: string; //optional type
        lastName: string;
        isMarried: boolean;
    } = {
        company: "Programming Hero",
        firstName: "Amit",
        lastName: "Sengupta",
        isMarried: true,
    }
}