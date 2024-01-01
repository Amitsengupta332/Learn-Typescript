{
    //     // // Problem --> 4 //
    const sumNumbers = (mixedData: (string | number)[]): number => {
        let total = 0;

        mixedData.forEach((item) => {
          if (typeof item === "number") {
            total += item;
          }
        });
        return total;
      };

      const mixedData: (string | number)[] = ["one", "two", 3, "four", -5];
      console.log(sumNumbers(mixedData));


    // const number = (mixedData: (string | number)[]): number => {
    //     let total = 0;
    //     mixedData.forEach((item) => {
    //         if (typeof item === "number") {
    //             total += item;
    //         }
    //     });
    // }
    // const mixedData : (string | number)[] = [1, 'two', 3, 'four', 5]

    // Problem --> 7 //
// const findFirstOccurrence = <T>(arr: T[], value: T): number => {
//     return arr.indexOf(value);
//   };
  
//   const numbers: number[] = [1, 2, 3, 4, 5, 6];
//   const strings: string[] = ["apple", "banana", "cherry", "mango"];
  
//   const targetNumber = 3;
//   const targetString = "mango";
  
//   const indexInNumbers = findFirstOccurrence(numbers, targetNumber);
//   const indexInStrings = findFirstOccurrence(strings, targetString);
  
//   // console.log(indexInNumbers);
//   // console.log(indexInStrings);

}