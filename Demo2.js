// JavaScript source code
window.addEventListener('load', () => {
	const params = (new URL(document.location)).searchParams;
	const name = params.get('Name');
    const number = params.get('Telephone');

  
  
    var details = []
    var details = name.split(' ');
    var StudentFirstName=details[0];

    document.getElementById('result-name').innerHTML = StudentFirstName;
    document.getElementById('result-tel').innerHTML = number;
	
})

