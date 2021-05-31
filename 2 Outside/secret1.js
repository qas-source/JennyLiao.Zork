continueReading = 1;
function enterResponse() {
    const enterCommand = document.getElementById("enterCommand")
    let response = enterCommand.value;


    if('look' == response || 'look around' == response){
        const output = document.getElementById("blank"); 
        output.innerHTML += `<p>Look around <br>There is a bunch of things that are here. TV screens, piles of paper, robot designs, it doesn't look very normal.</p>`;
    }

    //navigation
    else if('go north' == response || 'n' == response) {   
       const output = document.getElementById("blank"); 
       output.innerHTML += `<p>Go north <br>You are facing the trap door you entered from</p>`;
    }
    else if('go east' == response || 'e' == response){
        const output = document.getElementById("blank"); 
        output.innerHTML += `<p>Go east <br>You see a pile of paper scattered on a desk. The papers have pictures of different people, with red 'x' marks crossed over some of them.</p>`;
    }
    else if('go west' == response || 'w' == response){
        const output = document.getElementById("blank"); 
        output.innerHTML += `<p>Go west <br>You see many human-like robots that seem to be in the making.</p>`;
       }
    else if('go south' == response || 's' == response){
     const output = document.getElementById("blank"); 
     output.innerHTML += `<p>Go south <br>A bunch of TVs are here. It shows every single area of the tower. Were there surveillance cameras all this time?</p>`;
    }

    else if('observe papers' == response || 'observe paper' == response || 'read papers' ==  response | 'read paper' ==  response){ 
        const output = document.getElementById("blank"); 
        output.innerHTML += `<p>Read papers <br>You look through the papers, out of all of them, you see some recognizable faces. You see a picture of princess, with the words, "number 239, test 1: floor 93, test 2: saved. Status: alive." You look for the other people you met at the third floor and find a picture of movie man. It has a red 'x' crossed over his paper, "number 602, test 1: floor 53, test 2: fail. Status: Dead (1903)" The twins' papers also had 'x' on them: "numbers 45 and 46, test 1: floor 99, test 2: fail. Status: Dead (1249)." </p>`;
    }
    //this is here assuming that people wouldn't think of continuing to read, it's like an easter egg
    else if('continue reading' == response && continueReading == 1) {
        const output = document.getElementById("blank"); 
        output.innerHTML += `<p>Continue reading <br>This paper has very messy handwriting on it, it says "<b>Celestia</b>Target: abnormal, tower destroyed, must remove number 903." Another side note says, "Rebuilding tower..."</p>`;
        continueReading = 2;
    }
    //this is also an easter egg, to continue reading
    else if('continue reading' == response && continueReading == 2) {
        const output = document.getElementById("blank"); 
        output.innerHTML += `<p>Continue reading<br>"Number 999, Target: irregular (possibly abnormal), got inside tower, got inside labratory, must remove immediately, labratory will soon self destruct"</p>`;
        continueReading = continueReading + 1;
    }
    
    //Doing this is actually the only thing you need to do to get to the next floor. Everything else is to either stall time, or give hints
    else if('continue reading' == response && continueReading == 3) {
        alert('Self Destruction commence... 3... 2... 1...')
        window.location.href = "/5 Floor 3/badEnding.html";
    }
    else if('watch TV' == response || 'watch TV screens' == response){
        const output = document.getElementById("blank"); 
        output.innerHTML += `<p>TV <br>You see the inside and outside of the tower on the TV screens. Everything was reset to how it originally was. There is also a blueprint of the whole tower.</p>`;
       }

       else if('observe robots' == response || 'look at robots' == response){
        const output = document.getElementById("blank"); 
        output.innerHTML += `<p>Robots <br>It looks like they are trying to make robots that look exactly like normal humans</p>`;
       }
       //brings you back outside
       else if('exit labratory' == response || 'leave labratory' == response){
        alert('Leaving...')
        window.location.href = "MainPage.html";
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