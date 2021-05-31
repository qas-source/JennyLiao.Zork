//variables to make the player enter things in a certain order. FOr example, they must first go to the people and then they can talk to them
takeFood = 1;
inventory = 1;
atTree = 1;
brickWall = 1;
observeWall = 1;
firstBrick = 1;
function enterResponse() {

    const enterCommand = document.getElementById("enterCommand")
    let response = enterCommand.value;

    
   //Desciption of the area around you
   if('look' == response || 'look around' == response) {

    const output = document.getElementById("blank"); 
    output.innerHTML += `<p>Look around <br>From the door you entered, there is a big number 2 on it. If you go north, there is a big glowing tree with a hole in front of it. To the east, there is a table with food and drinks.</p>`;
}
//Shows the positions of the three other characters that you can talk to
else if('go north' == response || 'n' == response) {
    const output = document.getElementById("blank"); 
    output.innerHTML += `<p>Go north <br>The glowing tree looks beautiful. It has very green leaves. A sign beside it says to give it its favorite food.</p>`;
    atTree = 2;
}

else if('go east' == response || 'e' == response){
    const output = document.getElementById("blank"); 
    output.innerHTML += `<p>Go east <br>A table with a lot of food on it (The tree's food). But some of the food may be fake, you cannot eat them. If you observe the table, maybe you will be able to identify which is real.</p>`;
}
else if('go west' == response || 'w' == response){
 const output = document.getElementById("blank"); 
 output.innerHTML += `<p>Go west <br>This is a wall full of trees. From pictures and paintings to diagrams. </p>`;
}
else if('go south' == response || 's' == response){
     const output = document.getElementById("blank"); 
     output.innerHTML += `<p>Go south <br>There is nothing here. Just a brick wall</p>`;
 }
 //bad ending, they die
 else if('enter hole' == response && atTree == 2){
    alert('You enter the hole')
    window.location.href = "secret4.html";
}

//the table and food is just a distraction from the real ending
else if('observe table' == response) {
    const output = document.getElementById("blank");
    output.innerHTML += `<p>Observe table <br>There is a bunch of food here. Which ones are real and which are fake?</p>`;
    takeFood = takeFood + 1;
}
else if('take food' == response && takeFood > 1) {
    const output = document.getElementById("blank");
    output.innerHTML += `<p>Take food <br>You have taken all the real food</p>`;
    inventory = 2;
}
else if('inventory' == response && inventory == 2) {
    const output = document.getElementById("blank");
    output.innerHTML += `<p>Inventory <br></p>clean water, dusty water, musty water, crusty water.<p>What? I am pretty sure you but food in here, but they all turned into water...?</p>`;
}
else if('inventory' == response && inventory == 1) {
    const output = document.getElementById("blank");
    output.innerHTML += `<p>Inventory <br>You have nothing in here.</p>`;
}

//giving tree things
    else if('give clean water' == response && atTree == 2 && inventory > 1 || 'give dusty water' == response && atTree == 2 && inventory > 1 || 'give musty water' == response && atTree == 2 && inventory > 1 || 'give crusty water' == response && atTree == 2 && inventory > 1) {
    const output = document.getElementById("blank");
    output.innerHTML += `<br>` + enterCommand.value + `<br>` + `You pour it down the hole in front of the tree. The tree does not react in any way.`;
}
//the real way to solve this is by thinking. The movie man did mention that pressing against a brick wall would open a secret labratory in movies. In this case, it alows you to obtain something
else if('observe brick wall' == response) {
    const output = document.getElementById("blank");
    output.innerHTML += `<p>Brick Wall <br>I think someone mentionned something about this before. It looks like a normal brick wall.</p>`;
    observeWall = 2;
}
else if('press brick' == response && observeWall == 2) {
    const output = document.getElementById("blank");
    output.innerHTML += `<p>Brick <br>Nothing happens.</p>`;
    firstBrick = firstBrick + 1;
}

else if('press next brick' == response && firstBrick > 1 && brickWall < 10) {
    const output = document.getElementById("blank");
    output.innerHTML += `<p>Brick <br>Nothing happens.</p>`;
    brickWall = brickWall + 1;
}
//after pressing a lot of bricks later...
else if('press next brick' == response && firstBrick > 1 && brickWall == 10) {
    const output = document.getElementById("blank");
    output.innerHTML += `<p>Brick <br>The brick goes inward and then to the side. It reveals a small storing place with a bottle in it. It is labeled 'pure water'</p>`;
}
//after it has been pressed a certain number of times, you can take the pure water
else if('take pure water' == response && firstBrick > 1 && brickWall == 10) {
    const output = document.getElementById("blank");
    output.innerHTML += `<p>Pure water <br>You now have pure water</p>`;
    inventory = 3;
}
//pure water goes in your inventory
else if('inventory' == response && inventory == 3) {
    const output = document.getElementById("blank");
    output.innerHTML += `<p>inventory <br>clean water, dusty water, musty water, crusty water, pure water</p><p>What? I am pretty sure you but food in here, but they all turned into water...?</p>`;
}

//the good ending
else if('give pure water' == response && firstBrick > 1 && brickWall >= 10 && atTree == 2 && inventory > 2) {
    alert('The tree accepts the water')
    window.location.href = "end.html";
}
else if('hint' == response || 'give hint' == response){
    const output = document.getElementById("blank"); 
    output.innerHTML += `<p>Hint <br>What did the movie man say about strange brick walls... I don't remember.</p>`;
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