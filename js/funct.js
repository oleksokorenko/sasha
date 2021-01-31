const example =() =>{
    const fromInput = document.getElementById("text").value;
    document.getElementById("action"). innerText = fromInput;
}
document.getElementById("button").addEventListener("click",example);