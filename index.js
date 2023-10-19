const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let passwordOne = document.querySelector("#password-one")
let passwordTwo = document.querySelector("#password-two")

function randomPasswordOne() {
    passwordOne.textContent = ""
    randomPasswordTwo()
    for (let i = 0; i < characters.length; i++) {
        let password1 = Math.floor(Math.random() * characters.length)
        passwordOne.textContent += characters[password1]
        if (passwordOne.textContent.length === 15) {
            break;
        }
        
    }
}

function randomPasswordTwo() {
        passwordTwo.textContent = ""
        for (let i = 0; i < characters.length; i++) {
            let password2 = Math.floor(Math.random() * characters.length)
            passwordTwo.textContent += characters[password2]
            if (passwordTwo.textContent.length === 15) {
                break;
            }
            
        }
}


