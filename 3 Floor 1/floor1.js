openDoor = 1;
function enterResponse() {
    const enterCommand = document.getElementById("enterCommand")
    let response = enterCommand.value;


    //the paper introduces introduces you to the tower
    if('take paper' == response){
        const output = document.getElementById("blank"); 
        output.innerHTML += `<p>Take paper <br>You have taken the strange piece of paper</p>`;
    }

    else if('read paper' == response) {
        const output = document.getElementById("blank"); 
        output.innerHTML += `<p>Read paper <br>welcome to the tower! You have now entered the first floor. If you would like to go back home, you must get to the top of the tower. We clear out your inventory every floor to make sure you do not have anything you can use to cheat. Good luck...</p>`;
    }

    //navigation
    else if('go north' == response || 'n' == response) {   
       const output = document.getElementById("blank"); 
       output.innerHTML += `<p>Go north <br>A locked door sits here...</p>`;
    }

    else if('go east' == response || 'e' == response){
        const output = document.getElementById("blank"); 
        output.innerHTML += `<p>Go east <br>There sits a book on a table</p>`;
    }

    else if('go west' == response || 'w' == response){
        const output = document.getElementById("blank"); 
        output.innerHTML += `<p>Go west <br>You see an empty wall</p>`;
    }

       //includes the second number to the password of the trapdoor that is outside the tower
    else if('go south' == response || 's' == response){
     const output = document.getElementById("blank"); 
     output.innerHTML += `<p>Go south <br>You see that the door you have just entered from is locked. A big number 9 situated on the very middle of the door. I wonder what it could mean?</p>`;
    }

    else if('look around' == response || 'look' == response){ 
        const output = document.getElementById("blank"); 
        output.innerHTML += `<p>Look around <br>On the door behind you, you see the number 9 on it, what could that mean? There is a carpet on the ground and a strange book on a table. The room is windowless, with one door many steps ahead of you</p>`;
    }

    //reading the book may give hints about how to clear the challenges of the upper floors, or give hints about secret endings
    else if('take book' == response) {
        const output = document.getElementById("blank"); 
        output.innerHTML += `<p>Take book <br>book has been taken</p>`;
    }

    else if('read book' == response) {
        const output = document.getElementById("blank"); 
        output.innerHTML += `<p>Read book <br>There seems to be a bunch of notes in different handwriting. "Do not choose the wrong path..." "Phew i got back home" "Remember to check everything carefully" These might be messages from people who have cleared the tower!</p>`;
    }

    //hint for the last floor, although I don't think many people would think of writing "continue reading". This could just be an extra easter egg :)
    else if('continue reading' == response) {
        const output = document.getElementById("blank"); 
        output.innerHTML += `<p>Continue Reading <br>"Hmm, typically trees like clean water, but this one is different. I think I heard that special trees drink pure water, although I have no idea where I will get that from in this small room" Sounds interesting?</p>`;
    }

    //Doing this is actually the only thing you need to do to get to the next floor. Everything else is to either stall time, or give hints
    else if('move carpet' == response) {
        const output = document.getElementById("blank"); 
        output.innerHTML += `<p>Move carpet <br>The carpet has been moved. A red key lies on the ground</p>`;
        openDoor = openDoor + 1;
    }

    else if('open door' == response) {
        const output = document.getElementById("blank"); 
        output.innerHTML += `<p>Open door <br>the door is locked</p>`;
    }

    //if the player uses the red key to open the locked door, that's all they have to do to get to the next floor
    else if('open door with red key' == response && openDoor >= 2 || 'unlock door with red key' == response && openDoor >= 2) {
        alert('the door is open...')
        window.location.href = "/4 Floor 2/floor2.html";
    }
    
    else if('hint' == response || 'give hint' == response){
        const output = document.getElementById("blank"); 
        output.innerHTML += `<p>Hint <br>Do the books really have anything to do with a key to unlock a door...</p>`;
    }

    else{
        const output = document.getElementById("blank"); 
        output.innerHTML += `<br>` + enterCommand.value + `<br>` + `Sorry I don't understand` + `<br>`;
    }

   //text area will be cleared whenever the button is clicked
   document.getElementById("enterCommand").value = "";

   //the story prompt at the top will disappear when the button is clicked
   const output = document.getElementById("story"); 
   output.innerText = ``;
}