var Current_Number = document.getElementById('currentNumber');

var count=0;

function increment() {
	count++;
	Current_Number.innerHTML = count;
}

function decrement() {
	count--;
	Current_Number.innerHTML = count;
}

