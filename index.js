//PSEUDOCODE
//FOR LOOP;
//Set counter to 1
//Break when counter reaches 20
// Increment counter by 1 
// IF number MOD 15 === 0
// print 'FizzBuzz'
// ELSE IF number MOD 3 === 0
// print 'Fizz'
// ELSE IF number MOD 5 === 0
// print 'Buzz'
// ELSE
// print number


for (let i = 1; 1 <= 20; i++) {
    if (i % 15 === 0) {
        console.log('FizzBuzz');
    } else if (i % 3 === 0) {
        console.log('Fizz');
    } else if (i % 5 === 0) {
        console.log('Buzz');
    } else {
        console.log(i);
    }
}