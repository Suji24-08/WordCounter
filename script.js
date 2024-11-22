//let inputVal = document.getElementById("inputVal").value;
//let result = document.getElementById("result");
function count(){
    let inputVal = document.getElementById("inputVal").value;
let result = document.getElementById("result");
    let arr = inputVal.trim().split(/\s+/); // (/\s+/) will split the string by whitespaces and trim function trims the extra spaces in the starting and ending of the string
    let wordCount = arr[0] === "" ? 0 : arr.length;// if the a[0] is empty then the output will be 0 or the length of the array
    result.textContent = wordCount;
}
