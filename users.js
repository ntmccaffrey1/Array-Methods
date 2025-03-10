const users = [
	{firstName: "Alice", lastName: "Johnson", points: 120},
	{firstName: "Bob", lastName: "Smith", points: 99},
	{firstName: "Charlie", lastName: "Brown", points: 180}
];

const newUsers = users.map(function(user) {
    let fullName = user.firstName + ' ' + user.lastName;
    let membershipStatus = '';
    if (user.points > 100) {
        membershipStatus = 'Premium';
    } else {
        membershipStatus = 'Standard';
    }
    return { fullName, membershipStatus };
});

console.log(newUsers);

// simplified
const newUsers2 = users.map(function(user) {
    return {
        fullName: `${user.firstName} ${user.lastName}`,
        membershipStatus: user.points > 100 ? 'Premium' : 'Standard'
    }
});

console.log(newUsers2);