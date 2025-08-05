const textArea = document.getElementById("textArea");
const totalCharacter=document.getElementById("total-character");
const remainingCharacter= document.getElementById("remaining-character")

textArea.addEventListener("keyup",()=>{
    console.log("Pressed")
    updateCharacter();
})

function updateCharacter(){
totalCharacter.innerText=textArea.value.length;
remainingCharacter.innerText=textArea.getAttribute("maxlength")-textArea.value.length;
}
updateCharacter();