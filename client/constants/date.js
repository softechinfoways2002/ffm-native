const today = new Date();
const options = { day: '2-digit', month: 'short', year: 'numeric' };
export const date = today.toLocaleDateString('en-GB', options);
console.log(date);
