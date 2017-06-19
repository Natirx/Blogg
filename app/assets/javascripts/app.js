$(document).on('ready page:load', function(){
let getVal = document.querySelectorAll('#keys span');
let operators = ['+', '-', 'x', '÷'];
let decimal;
// добаваляємо онклік для кнопок і операцій
for(var i = 0; i<getVal.length; i++){
    getVal[i].onclick = function(){
        // Берем значення 
        let inputNumb = document.querySelector('.show') 
        let input = inputNumb.innerHTML;
        let buttonVal = this.innerHTML; 
        // Якщо натискаєм кнопку "С" видаляємо все
        if (buttonVal == 'C'){
            inputNumb.innerHTML = '';
            decimal = false;
        }
        // Якщо нажата кнопка = вираховуєм і виводим результат
        else if (buttonVal == '='){
            let number = input;
            let lastChar = number[number.length-1];
            // Заміняєм х і ÷ на * і /
            number = number.replace(/x/g, '*').replace(/÷/g, '/');
            // Якщо останній символ - або оператор видаляєм його
            if (operators.indexOf(lastChar) >-1 || lastChar=='.')
            number = number.replace(/.$/,'');
            if (number)
            inputNumb.innerHTML = eval(number);
            decimal = false;
        }
        
		else if (operators.indexOf(buttonVal) > -1){
            // Отримуєм останній символ з рівняння
            let lastChar = input[input.length - 1];
            // додаємо оператор тільки якщо інпут не пустий або немає оператора вкінці
            if (buttonVal == '-' && input =='')
            inputNumb.innerHTML += buttonVal;
            // якщо строка пуста можемо поставити мінус
            else if (operators.indexOf(lastChar) == -1 && input != '')
            inputNumb.innerHTML += buttonVal;
            if(input.length>1 && operators.indexOf(lastChar)>-1){
                inputNumb.innerHTML=input.replace(/.$/, buttonVal);
            }
            decimal = false;
        }
        else if (buttonVal == '.'){
            if(!decimal){
                inputNumb.innerHTML += buttonVal;
                decimal = true;
            }
            
        }
		else {
			inputNumb.innerHTML += buttonVal;
		}
		
		// prevent page jumps
	
	} 
}
});
