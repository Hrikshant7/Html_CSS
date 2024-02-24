Promise.resolve(1)
    .then(() => 2)
    .then((data) => {
        console.log("54",data);
        return 3
    })
    .then((value) => {
        console.log(value);
        return value * 3;
    }).then(console.log)