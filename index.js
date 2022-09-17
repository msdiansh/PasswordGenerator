const characters = ["A","B","C","D","E","F","G","H","I","J","K","L",
"M","N","O", "P","Q","R","S","T","U","V","W","X","Y","Z","a","b",
"c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u",
"v","w","x","y","z",
"0", "1", "2", "3", "4", "5", "6", "7","8", "9",
"~","`","!","@","#","$","%","^","&","*","(",")","_",
 "-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
let pass1EL=document.getElementById("pass1");
let pass2EL=document.getElementById("pass2");
let frmEL=document.getElementById("frm1");
function generate(){
    let n=frmEL.elements[0].value;
    console.log(n);
    for(let times=1;times<=2;times++){
        let string=""
        for(let i=1;i<=n;i++){
            let number=Math.floor(Math.random()*characters.length)
            string+=characters[number]
        }
        if(times===1)
            pass1EL.textContent=string
        else
            pass2EL.textContent=string
    }
}
function copyElementText(id) {
    var text = document.getElementById(id).innerText;
    var elem = document.createElement("textarea");
    document.body.appendChild(elem);
    elem.value = text;
    elem.select();
    document.execCommand("copy");
    document.body.removeChild(elem);
    alert("Password copied to Clipboard");
}

