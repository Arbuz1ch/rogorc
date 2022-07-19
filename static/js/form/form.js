const element = document.getElementById('labelform');

 window.onload = () => {
	const select = document.getElementById('select');

	select.addEventListener('change', (event) => {
		event.preventDefault();

		let status = select.value;

        if (status == 'Доставка') {
            createRecieveElement();
        } else {
            hideRecieveElement();
        }

	});
 };

 function createRecieveElement() {

    const divElement = document.createElement('div');
    divElement.classList.add('dosDiv');

    let label = document.createElement('label');
    label.textContent = 'Введите адрес доставки';

    const inputText = document.createElement('input');
    inputText.setAttribute('type', 'text');
    inputText.setAttribute('placeholder', 'Введите адрес доставки');
    inputText.setAttribute('name', 'adress');
    inputText.classList.add('inputText');

    divElement.appendChild(label);
    divElement.appendChild(inputText);
    element.appendChild(divElement);
 }

 function hideRecieveElement() {
	let label = document.querySelector('.dosDiv');
    element.removeChild(label);
 }

 document.getElementById('button').addEventListener('click', (event) => {

 	event.preventDefault();

 	const FORM = document.forms['form'];

 	let name = FORM.elements['name'].value;
	let select = FORM.elements['select'].value;
 	let number = FORM.elements['number'].value;
	let adress = FORM?.elements['adress']?.value;

	if (adress == undefined) {
		adress = '---';
	}

 	const data = JSON.stringify({
 		name: name,
		select: select,
 		number: number,
 		adress: adress,
 	});

	let request = new XMLHttpRequest();

    request.open('POST', '/request', true);
    request.setRequestHeader(
        'Content-Type',
        'application/json'
    );

    request.send(data);
	
 });