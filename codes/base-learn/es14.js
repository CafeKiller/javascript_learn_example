const numbers = [1,2,3,4,5,6,7]

const result = numbers
    |> filter(number => number % 2 === 0)
    |> map(number => number * 2)
    |> reduce((accumulator, number) => accumulator + number, 0);

console.log(result);