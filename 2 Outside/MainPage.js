//the variables used to ensure that an they have to enter something else first before something
enterHouse = 1;
findTrapDoor = 1;
enterPassword = 1;
here_dig = 1;
function enterResponse() {
    //get the text box
   const enterCommand = document.getElementById("enterCommand")
   //this is here so that I can use the if statements. If the the value inside the text box matches one of the usuable ones, then a certain response will printout
   let response = enterCommand.value;

   
   //Desciption of the area around you
   if('look' == response || 'look around' == response) {
       const output = document.getElementById("blank"); 
       output.innerHTML += `<p>Look around <br>you see a tower in front of you, and trees surronding both you and the tower</p>`;

   }

   else if('go north' == response || 'n' == response) {
       const output = document.getElementById("blank"); 
       output.innerHTML += `<p>Go north <br>A tower stands here, the door is ajar. A welcome mat sits in front of the door</p>`;
       enterHouse = enterHouse + 1;
   }

   else if('go east' == response || 'e' == response){
       const output = document.getElementById("blank"); 
       output.innerHTML += `<p>Go east <br>You walk over towards the trees, but you hit something solid. Perhaps the trees are just drawings on a wall</p>`;
   }
   
   else if('go west' == response || 'w' == response){
    const output = document.getElementById("blank"); 
    output.innerHTML += `<p>Go west <br>You walk over towards the trees, but you hit something solid. Perhaps the trees are just drawings on a wall</p>`;
    }

   else if('go south' == response || 's' == response){
        const output = document.getElementById("blank"); 
        output.innerHTML += `<p>Go south <br>You walk over towards the trees, but you hit something solid. Perhaps the trees are just drawings on a wall. For some reason, the ground feels a bit different here.</p>`;
        findTrapDoor = findTrapDoor + 1;
    }

   //enters the first floor of the tower
   else if('enter tower' == response && enterHouse > 1){
        window.location.href = "/3 Floor 1/floor1.html";
   }

   //opens inventory to reveal a shovel and matchbox which are used solely for the secret endings
   else if('inventory' == response || 'open inventory' == response){
       const output = document.getElementById("blank"); 
       output.innerHTML += `<p>Open inventory <br>inventory is open. In your inventory is a shovel, and a match box.</p>`;
   }

   
   //responses that help lead to secret endings

   //first secret ending, burning the tower down.
   else if('burn tower' == response) {
       const output = document.getElementById("blank");
       output.innerHTML += `<p>Burn tower <br>With what?</p>`;
   }

   //if they try to burn down the house, the game ends
   else if('burn tower with matches' == response || 'matches' == response || 'with matches' == response) {
       alert('how dare you')
       window.location.href = "secret2.html";
   }

   //This number is the first number to a secret password to unlock a trapdoor outside of the tower. The rest of the numbers are on the doors of the floors
   else if('move mat' == response || 'move doormat' == response){
        const output = document.getElementById("blank"); 
        output.innerHTML += `<p>Move mat <br>Door mat has been moved. There is the number 2 on the ground</p>`;
    }

    //This is how you discover the trapdoor
    else if('dig ground' == response && findTrapDoor > 1){
        const output = document.getElementById("blank"); 
        output.innerHTML += `<p>Dig ground <br>With what?.</p>`;
    }

    //to unlock this command, you must go south first
    else if('dig ground with shovel' == response && findTrapDoor > 1 || 'with shovel' == response && findTrapDoor > 1 || 'shovel' == response && findTrapDoor > 1){
        const output = document.getElementById("blank"); 
        output.innerHTML += `<p>Dig ground with shovel <br>you dig the ground. There is an enormous trap door, but a password is required to enter.</p>`;
 
    }
    else if('dig ground' == response && findTrapDoor <= 1 || 'dig ground with shovel' == response && findTrapDoor <= 1){
        const output = document.getElementById("blank"); 
        output.innerHTML += `<p>Dig ground <br>Where?</p>`;
        here_dig = here_dig + 1;
    }

    else if('dig here' == response && here_dig > 1 || 'here' ==  response && here_dig > 1){
        const output = document.getElementById("blank"); 
        output.innerHTML += `<p>Dig here <br>Sorry, you are unable to do so. The ground here feels too hard.</p>`;
    }

    //enter the password for the trapdoor
   else if('enter password' == response && findTrapDoor > 1){
       const output = document.getElementById("blank"); 
       output.innerHTML += `<p>Enter password <br>yes? What is the password</p>`;
       enterPassword = enterPassword + 1;
   }

   //If it is correct, it brings you into a secret labrotory. The first digit to the password is under the welcome mat. There is one number in each floor, so they have to clear the tower first
   else if('293892' == response && enterPassword > 1){
       alert('trapdoor is now open')
       window.location.href = "secret1.html";
   }

    //here to help
   else if('hint' == response || 'give hint' == response){
    const output = document.getElementById("blank"); 
    output.innerHTML += `<p>Hint <br>Just enter the tower</p>`;
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