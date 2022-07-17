


//for each
// const items = [1, 2, 3, 4, 5];

// items.forEach((item) =>{
// 	console.log(item);
// }, 1000);




// console.log('start');


function loginUser(email, password, callback) {
	setTimeout(() => {
	console.log('Now we have the data')
	callback ({ userEmail: email})
	
	}, 2000);
}

const user = loginUser('j@gmail.com', 12345, (user) => {
	console.log(user);
});

console.log('finish')

// const second = () => {
//     console.log('Second');
// }

// const first = () => {
//     console.log('Hey there');
//     second();
//     console.log('The end');
// }
// first();



// function addButton() {
// 	setTimeout(() => {
// 		console.log('ahahhaahhaha')
// 	}, 2000);
	
// }

// addButton(); 







