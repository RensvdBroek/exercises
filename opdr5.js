//const users = {
//    alice: { email: 'alice@mail.com', isAdmin: true },
//    bob: { email: 'bob@mail.com', isAdmin: false },
//    rens: { email: `Rensbullshit`, isAdmin: true }
//};
//const sortedusers = Object.keys(users).sort();
//for (let index = 0; index < sortedusers.length; index++) {
//    const usernumber = users[sortedusers[index]]
//
//    console.log(usernumber.email)
//}
const users = {
    alice: { email: 'alice@mail.com', isAdmin: true },
    bob: { email: 'bob@mail.com', isAdmin: false }
};
const sortedusers = Object.keys(users).sort();
for (let index = 0; index < sortedusers.length; index++) {
    const usernumber = users[sortedusers[index]]
    if (usernumber.isAdmin == true) {
        console.log(usernumber.email)
    }
}