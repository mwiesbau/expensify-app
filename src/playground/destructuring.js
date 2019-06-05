// const book = {
//   title: 'Ego is the Enemy',
//   author: "Ryan Holiday",
//   publisher: {
//     name: 'Penguin'
//   }
// }

// const { name: publisherName = "Self-Published" } = book.publisher
// console.log(publisherName)


// ARRAY DESSTTRUCTURING
const address = ['25062 Lind ct', 'Aldie', 'VA', '20105']
const [, city, state = "New York"] = address

console.log(`you are in ${state}.`)