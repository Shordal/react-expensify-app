const promise = new Promise((reslove, reject) => {
    setTimeout(() => {
        reslove({
            name: 'Steven',
            age: 30
        })
        // reject('something went wrong');
    }, 5000);
});

console.log('before');

promise.then((data) => {
    console.log('1', data);
        return  new Promise((reslove, reject) => {
            setTimeout(() => {
                reslove('This is my other promise')
            }, 5000);
        });
}).then((str) => {
    console.log('does this run?', str);
}).catch((error) => {
    console.log('error: ', error);
});

console.log('after');