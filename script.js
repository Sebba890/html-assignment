const $emojis = document.getElementById('emojis');



// for loop 

for(let i = 128513; i <= 128613; i++) 
{
    $emojis.innerHTML += `<div class="emoji">&#${i}<code id="code"> ${i}</code></div> `

}

console.log($emojis.innerHTML)