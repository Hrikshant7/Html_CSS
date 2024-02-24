const user = {
    name: "henry",
    age: 4,
    hobbies: ['cycling', 'waling'],
    job: {
        loc: 'noida',
        type :"se",
        salary: {
            amount: 3902,
            increment: 4
        }
    }
};
const newObj = Object.freeze(user);

newObj.user = 'Ashwani';

newObj.job.loc = "modify";

delete newObj.job.type;

console.log('newObj: ', newObj);
console.log('user: ', user);


// Please write the deepFreeze() method to avaoid the modifications in nested objects as well.