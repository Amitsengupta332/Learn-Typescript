{
    const problem6 = (params: unknown) => {
        if (Array.isArray(params) && params.every((item) => typeof item === 'number')) {
            let sum = 0;
            params.forEach((item) => (sum += item))

            console.log('sum of number', sum);
        } else {
            console.log('parameter is not an array of number');
        }
    }
    // problem6([1, 2, 3, 4])
    problem6(['apple', 'mango'])
}