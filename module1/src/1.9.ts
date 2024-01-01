{
    //type alias
    type Student = {
        name: string;
        age: number;
        gender: string;
        contactNo?: string;
        address: string
    }

    const student1: Student = {
        name: 'mezba',
        age: 50,
        gender: 'male',
        contactNo: '017000000',
        address: 'coxs bazar'
    }

    const student2: Student = {
        name: 'amit',
        age: 10,
        gender: 'male',

        address: 'dhk'
    }

    type UserName = string;
    type IsAdmin = boolean;

    const user: UserName = 'Persian'
    const isAdmin: IsAdmin = true;

    type Add = (num1: number, num2: number) => number
    const add: Add = (num1, num2) => num1 + num2;
    //
}