
const button2 =document.querySelectorAll(".button2")
const  dNone=document.querySelectorAll(".dNone")

for (let i = 0; i < button2.length; i++) {
    button2[i].onclick =()=> {
        button2.forEach(x => x.style.backgroundColor="#323741")
        button2[i].style.backgroundColor="red";

        dNone.forEach(a => a.style.display="none")
        dNone[i].style.display="flex"
    }
}



