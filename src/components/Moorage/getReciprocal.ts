// is swapping numerator with denominator: 2/3 => 3/2
const getReciprocal = (number: number) => (number === 0 ? 0 : number / (number * number));

export default getReciprocal;
