function calculate() {
    
    let input = document.getElementById("box1").value;

    
    let numbers = input.split(",").map(Number);

    
    let max = Math.max(...numbers);
    let min = Math.min(...numbers);
    let sum = numbers.reduce((acc, curr) => acc + curr, 0);
    let average = sum / numbers.length;

    
    document.getElementById("max").innerText = max;
    document.getElementById("min").innerText = min;
    document.getElementById("sum").innerText = sum;
    document.getElementById("avg").innerText = average.toFixed(2);

    
    let reverseOrder = numbers.slice().reverse().join(", ");
    document.getElementById("reverse").innerText = reverseOrder;
}
