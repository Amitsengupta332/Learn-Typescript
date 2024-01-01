{// Learning Function
    //Normal Function
    // Arrow Function


    function add(num1: number, num2: number = 10): number {
        return num1 + num2
    }

    add(2, 2)

    //Arrow function
    const addArrow = (num1: number, num2: number): number => num1 + num2

    //object --> function --> method

    const poorUser = {
        name: 'Amit',
        balance: 0,
        addBalance(balance: number): String {
            return `My New Balance Is: ${this.balance + balance}`
        }
    }

    const arr: number[] = [1, 4, 10]

    const newArray: number[] = arr.map((elem: number): number => elem * elem)
}