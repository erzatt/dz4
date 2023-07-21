var trafficLight = document.getElementById("trafficLight")
var resultElement = document.getElementById("result")
var MyButton = document.querySelector('#myButton')

// let это ключовой слова для создания переменых который можно изменят
// const это ключовой слова для создания переменых которые нелзя изменят

MyButton.onclick = () => {
    var inputValue = prompt("Введите значение: ")
  
    if (inputValue === 'green') {
        resultElement.innerText = 'go'
        trafficLight.style.background = `${inputValue}`
    }
    else if (inputValue === 'yellow') {
        resultElement.innerText = 'wait'
        trafficLight.style.background = `${inputValue}`
    }
    else if (inputValue === 'red') {
        resultElement.innerText = 'stop'
        trafficLight.style.background = `${inputValue}`
    }
    else {
        alert('Please enter a value for the traffic')
        resultElement.innerText = ``
        trafficLight.style.background = ``
    }
}