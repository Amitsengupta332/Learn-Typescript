{//
    interface Car {
        make: string,
        model: string,
        year: number
    }

    interface Driver {
        name: string,
        licenseNumber: number
    }

    const CombinedInterface = (car: Car, driver: Driver) => {
        return {
            ...car,
            ...driver
        };
    }

    const car: Car = {
        make: 'Honda',
        model: 'Civic',
        year: 2019
    }

    const driver: Driver = {
        name: 'John Doe',
        licenseNumber: 456789
    }

    console.log(CombinedInterface(car, driver));
}