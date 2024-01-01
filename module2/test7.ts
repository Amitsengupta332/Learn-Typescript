{
    // Problem --> 7 //
    const findFirstOccurrence = <T>(arr: T[], value: T): number => {
        return arr.indexOf(value);
      };

      const numbers: number[] = [1, 2, 3, 4, 5, 6];
      const strings: string[] = ["apple", "banana", "cherry", "mango"];

      const targetNumber = 3;
      const targetString = "mango";

      const indexInNumbers = findFirstOccurrence(numbers, targetNumber);
      const indexInStrings = findFirstOccurrence(strings, targetString);

    //   console.log(indexInNumbers);
      console.log(indexInStrings);


}