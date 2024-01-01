{
    interface Product {
        name: string,
        price: number,
        quantity: number
    }

    const CalculateTotalCost = (products: Product[]): number => {
        let totalCost = 0;
        products.map((product) => {
            totalCost += product.price * product.quantity;
        })

        return totalCost;
    }

    const Shopping: Product[] = [
        {
            name: "match",
            price: 10,
            quantity: 5
        },
        {
            name: "apple",
            price: 10,
            quantity: 3
        }
    ]

    console.log(CalculateTotalCost(Shopping));
}