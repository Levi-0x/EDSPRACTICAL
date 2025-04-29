const display = document.getElementById("display");

function appendToDisplay(input){
   display.value += input

}

function clearDisplay(){
   display.value = null

}

function calculate(){
   try{
       display.value = eval(display.value);
   }
   catch(error){
       display.value = "error"
   }
   


}