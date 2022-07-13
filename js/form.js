 const TOKEN = '5177947153:AAFSWGOf6Zc_K009UwV28R4t9kJVz-POKZA';
 const CHAT_ID = '-635333222';

 document.getElementById('button').addEventListener('click', (event) => {

 	event.preventDefault();

 	const FORM = document.forms['form'];

 	let name = FORM.elements['name'].value;
 	let number = FORM.elements['number'].value;
 	let adress = FORM.elements['adress'].value;
 	let comment = FORM.elements['comment'].value;

 	const data = JSON.stringify({
 		name: name,
 		number: number,
 		adress: adress,
 		comment: comment
 	});

 	console.log(data);

 	let parsedData = JSON.parse(data);

 	const message = `${parsedData.name}, ${parsedData.number}, ${parsedData.adress}, ${parsedData.comment}`;

 	sendMessage(message);

 	function sendMessage(message) {

 		const URL = `https://api.telegram.org/bot${TOKEN}/sendMessage?chat_id=${CHAT_ID}&parse_mode=html&text=${message}`

 		const request = new XMLHttpRequest();

 		request.open('POST', URL, true);
 		request.setRequestHeader('Content-type', 'application/json; charset=utf-8');

 		request.send(message);
 	};
 });