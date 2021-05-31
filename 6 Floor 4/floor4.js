//the variables used to ensure that an they have to enter something else first before something
look = 1;
function enterResponse() {

   const enterCommand = document.getElementById("enterCommand")
   let response = enterCommand.value;

   //Desciption of the area around you
   if('look' == response && look == 1 || 'look around' == response && look == 1) {

       const output = document.getElementById("blank"); 
       output.innerHTML += `<p>Look around <br>All you can see is an empty room, with the number 9 on a wall. Nothing more.</p>`;
        look = look + 1;
   }
   
   else if('look' == response && look == 2 || 'look around' == response && look == 2) {

    const output = document.getElementById("blank"); 
    output.innerHTML += `<p>Look around <br>All you can see is an empty room, with the number 9 on a wall. Nothing more. Didn't I already say that?</p>`;
     look = look + 1;
    }
    else if('look' == response && look == 3 || 'look around' == response && look == 3) {

        const output = document.getElementById("blank"); 
        output.innerHTML += `<p>Look around <br>All you can see is an empty room, with the number 9 on a wall. Nothing more. I ALREADY SAID THAT.</p>`;
        look = look + 1;
    }

    else if('look' == response && look == 4 || 'look around' == response && look == 4) {

        const output = document.getElementById("blank"); 
        output.innerHTML += `<p>Look around <br>All you can see is an empty room, with the number 9 on a wall. Nothing more. NOW STOP, I HAVE CLEARLY STATED WHAT I NEED TO SAY.</p>`;
        look = look + 1;
    }
    //after a certain number of times of looking around, it allows you to look up
    else if('look' == response && look == 5 || 'look around' == response && look == 5) {

        const output = document.getElementById("blank"); 
        output.innerHTML += `<p>Look around <br>Fine. Look up.</p>`;
        look = look + 1;
    }
    //everytime they try to say look after the attic door is discovered, this message will pop up. Except when they reach a certain number of looks, something else will happen
    else if('look' == response && look >= 6 && look < 9 || 'look around' == response && look >= 6 && look < 9) {

        const output = document.getElementById("blank"); 
        output.innerHTML += `<p>Look around <br>You see any empty room with an attic door on the ceiling.</p>`;
        look = look + 1;
    }
    //If you continue even after the solution to the floor is revealed...
    else if('look' == response && look == 9 || 'look around' == response && look == 9) {
        const output = document.getElementById("blank"); 
        output.innerHTML += `<p>Look around <br>GIVE UP ALREADY</p>`;
        look = look + 1;
    }
    //Where the narrator has already revealed the path to the next floor but you continue to persist. Secret ending, narrator quits his job and you are stuck
    else if('look' == response && look == 10 || 'look around' == response && look == 10) {
        alert('I can not do this anymore')
        window.location.href = "secret3.html";
    }
    //This is the only time in the game where they can look up
    else if('look up' == response && look >= 6) {

        const output = document.getElementById("blank"); 
        output.innerHTML += `<p>Look up <br>You see something that looks like an attic door. It looks reachable</p>`;
    }
    //in case they look up before looking around carefully enough
    else if('look up' == response && look <= 6) {

        const output = document.getElementById("blank"); 
        output.innerHTML += `<p>Look up <br>No, you can't do that</p>`;
    }
    //they can only open door if Look Around has been entered a certain number of times
    else if('open door' == response && look >= 6 || 'open attic door' == response && look >= 6) {
        alert('You open the door. A flurry of shadows come down and you are swooped through the doorway.')
        window.location.href = "/7 Floor 5/floor5.html";
    }
    //directions
   else if('go north' == response || 'n' == response) {

       const output = document.getElementById("blank"); 
       output.innerHTML += `<p>Go north <br>You find yourself staring at a wall.</p>`;
   }
   else if('go east' == response || 'e' == response){
       const output = document.getElementById("blank"); 
       output.innerHTML += `<p>Go east <br>You find yourself staring at a wall.</p>`;
   }
   else if('go west' == response || 'w' == response){
    const output = document.getElementById("blank"); 
    output.innerHTML += `<p>Go west <br>You find yourself staring at a wall.</p>`;
}
   else if('go south' == response || 's' == response){
        const output = document.getElementById("blank"); 
        output.innerHTML += `<p>Go south <br>You find yourself staring at a wall.</p>`;
    }

    else if('inventory' == response){
        const output = document.getElementById("blank"); 
        output.innerHTML += `<p>Inventory <br>Yeah, you got nothing here either.</p>`;
    }
    else if('hint' == response || 'give hint' == response){
        const output = document.getElementById("blank"); 
        output.innerHTML += `<p>Hint <br>Maybe try looking around?</p>`;
    }
   //if it is not one of the other commands, the computer will say that it can't do anything
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
