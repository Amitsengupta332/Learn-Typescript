{
    // Ternary Operator || Optional Chaining || Nullish coalescing operator

    const age: number = 18;

    // if (age >= 18) {
    //     console.log("Adult");
    // } else {
    //     console.log("Not Adult");
    // }

    const isAdult = age >= 18 ? 'adult' : 'not adult'
    // console.log({ isAdult });

    // Nullish coalescing operator
    // null / undefined ---> decision making

    const isAuthenticated = '';

    const result1 = isAuthenticated ?? 'Guest'
    const result2 = isAuthenticated ? isAuthenticated : "Guest";
    console.log({ result1 }, { result2 });

    // optional chaining

    type User = {
        name: string;
        address: {
            city: string;
            road: string;
            presentaddress: string;
            permanentAddress?: string;
        };
    };

    const user: User = {
        name: "Persian",
        address: {
            city: "ctg",
            road: "Awesome Road",
            presentaddress: "ctg town",
        },
    };

    const permanentAddress =
        user?.address?.permanentAddress ?? "No Permanent Address";
    console.log({ permanentAddress });




    //
}