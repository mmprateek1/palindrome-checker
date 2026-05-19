const input = document.getElementById("input");
function reverseString(str){

    return str.split("").reverse().join("");
}

function check(){
    const value=input.value;
    const reverse=reverseString(value)
    
    if(value==reverse){
        alert("yes it is palindrome")
        }
        else{
            alert("no its not a palindrome")
        }
        input.value="";
    
}
