//Math.random()-- random value between 0 and 1
//Math.ceil() - Rounds no. (float or decimal) to a higher *integer*
//Math.floor() - Rounds no. (float or decimal) to a lower *integer*
// Layout of a promise function
const p = new Promise((resolve, reject) => {
    const randomNo = Math.ceil(Math.random() * 10);
    if (randomNo > 5) {
        resolve(randomNo);
    } else {
        reject(randomNo);
    }
});

p.then(() => {
    console.log('No. >5');
}).catch(() => {
    console.log('No. <=5');
})