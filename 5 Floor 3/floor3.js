//variables to make the player enter things in a certain order. FOr example, they must first go to the people and then they can talk to them
approachPrincess = 1;
approachMan = 1;
approachTwins = 1;
whose_story = 1;
hint = 1;
function enterResponse() {

    const enterCommand = document.getElementById("enterCommand")
    let response = enterCommand.value;

    
   //Desciption of the area around you
   if('look' == response || 'look around' == response) {
    const output = document.getElementById("blank"); 
    output.innerHTML += `<p>Look around <br>This room has no other door other than the one you just came through. Although the place where there is usually a door has a big number 8 on it. There are four people already inside the room, a girl with a pretty dress named 'princess'. If you would like to choose her as the person saying the truth, you must type, "I wish for the princess to live happily ever after". The second person is a man with modern day clothes named 'movie guy'. If you would like to choose him as the person telling the truth, you must type "I will take your suggestions and find the secrets to this tower", and two little boys who appear to be twins named 'twins'. If you would like to choose them as the people who are telling the truth, you must type, "May you reunite". Perhaps politely asking them how they are, you can learn their story.</p>`;
    }

    //Shows the positions of the three other characters that you can talk to
    else if('go north' == response || 'n' == response) {
        const output = document.getElementById("blank"); 
        output.innerHTML += `<p>Go north <br>This is where princess stands. She looks like a literal princess, dressed head to toe in expensive looking clothes.</p>`;
        approachPrincess = approachPrincess + 1;
    }

    else if('go east' == response || 'e' == response){
        const output = document.getElementById("blank"); 
        output.innerHTML += `<p>Go east <br>The twins stand here. They look a bit sad, and a bit scared. Afterall, they probably aren't even 9 years of age yet. Although young, they were dressed in a tidy and fancy clothes, as if they were from a noble family.</p>`;
        approachTwins = approachTwins + 1;
    }
        
    else if('go west' == response || 'w' == response){
        const output = document.getElementById("blank"); 
        output.innerHTML += `<p>Go west <br>The movie guy stands here. Out of all the people, he seems the most normal. </p>`;
        approachMan = approachMan + 1;
    }
    else if('go south' == response || 's' == response){
        const output = document.getElementById("blank"); 
        output.innerHTML += `<p>Go south <br>You see the door you just came in from. It is locked though.</p>`;
    }

    //If the player has not already gone to the people, or does not know where a specific person is in the room, the game will not let them talk to the person
    else if('ask "how are you"' == response && approachPrincess == 1){
        const output = document.getElementById("blank"); 
        output.innerHTML += `<p>Asking<br>You must go in the direction of a person and specify who you want to ask.</p>`;
    }

    else if('ask "how are you" to princess' == response && approachPrincess == 1){
        const output = document.getElementById("blank"); 
        output.innerHTML += `<p>Princess<br>You must go to her first</p>`;
    }

    else if('ask "how are you" to movie man' == response && approachMan == 1){
        const output = document.getElementById("blank"); 
        output.innerHTML += `<p>Movie man <br>You must go to the man first</p>`;
    }

    else if('ask "how are you" to twins' == response && approachTwins == 1) {
        const output = document.getElementById("blank");
        output.innerHTML += `<p>Twins <br>You must go to the twins first</p>`;
    }

    //player gets to talk to the people
    else if('ask "how are you" to princess' == response && approachPrincess > 1){
        const output = document.getElementById("blank"); 
        output.innerHTML += `<p>Princess<br>"I'm good. Would you like to hear about me?"</p>`;
    }

    else if('ask "how are you" to movie man' == response && approachMan > 1){
        const output = document.getElementById("blank"); 
        output.innerHTML += `<p>Movie man <br>"I'm good. Would you like to hear about me?"</p>`;
    }

    else if('ask "how are you" to twins' == response && approachTwins > 1) {
        const output = document.getElementById("blank");
        output.innerHTML += `<p>Twins <br>"We're doing good. Would you like to hear about us?"</p>`;
    }

    //they get to hear the story to see if it's true or not. This is based on the books from floor 2
    else if('hear story' == response) {
        const output = document.getElementById("blank");
        output.innerHTML += `<p>Hear story <br>"Whose? Type in their name"</p>`;
        whose_story = whose_story + 1;
    }

    //There are small details that are incorrect in the movie man and twins' stories. The princess is the only one with all accurate information
    else if('princess' == response && whose_story > 1 && approachPrincess > 1 || 'princess story' == response && whose_story > 1 && approachPrincess > 1) {
        const output = document.getElementById("blank");
        output.innerHTML += `<p>Princess's story <br>I woke up in front of a big tower one day! I decided to go inside and check around. Obviously, I ended up getting stuck here, but that wasn't until the 93rd floor. It might've been a puzzle, and the request was very easy, but I couldn't find anything in the room that would match the request... I ended by giving up, here I am , on the 3rd floor again.</p>`;
    }

    else if('movie man' == response && whose_story > 1 && approachMan > 1 || 'movie man story' == response && whose_story > 1 && approachMan > 1) {
        const output = document.getElementById("blank");
        output.innerHTML += `<p>Movie man's story <br>When I first saw the tower, I thought it looked cool! Although, it looked like a pretty normal building. Anyways, I wrote things in a journal to remember the most that I could. If memory serves me right, I had a recent entry that I wrote on September 23rd. I summarized all my experiences in a few sentences.</p>`;
    }

    else if('twins' == response && whose_story > 1 && approachTwins > 1|| 'twins story' == response && whose_story > 1 && approachTwins > 1) {
        const output = document.getElementById("blank");
        output.innerHTML += `<p>Twins story <br>We came into this tower with our father! He brought us all the way to the second last floor, and we were almost certain that we'd make it out. When we got there, there were a lot of pictures on a wall. We looked away for one second. When we looked back, our father was gone!</p>`;
    }

    //the right answer to go onto the next floor, only the princess' words were all accurate
    else if('I wish for the princess to live happily ever after' == response && whose_story > 1 && approachPrincess > 1){
        alert('You have chosen the correct answer')
        window.location.href = "/6 Floor 4/floor4.html";
    }

    //wrong answer
    else if('I will take your suggestions and find the secrets to this tower' == response && whose_story > 1 && approachMan > 1|| 'May you reunite' == response && whose_story > 1 && approachTwins > 1){
        alert('Wrong')
        window.location.href = "badEnding.html";
    }

    else if('hint' == response && hint == 1 || 'give hint' == response && hint == 1){
        const output = document.getElementById("blank"); 
        output.innerHTML += `<p>Hint <br>ask "how are you" to someone after you go in their direction</p>`;
        hint = 2;
    }

    else if('hint' == response && hint > 1 || 'give hint' == response && hint > 1){
        const output = document.getElementById("blank"); 
        output.innerHTML += `<p>Hint <br>Remember the details in the books from the previous floor?</p>`;
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