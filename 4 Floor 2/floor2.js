
    function enterResponse() {

    const enterCommand = document.getElementById("enterCommand")
   let response = enterCommand.value;

        //navigation
        if('look' == response || 'look around' == response) {
       const output = document.getElementById("blank"); 
       output.innerHTML += `<p>Look around <br> There seems to be a couple of books on some shelves, a laptop on a desk, a few pencils.</p>`;
        }

        else if('go north' == response || 'n' == response) {
            const output = document.getElementById("blank"); 
            output.innerHTML += `<p>Go north <br>There is door in front of you with a big number 3 on it. I Wonder what it means?</p>`;
        }

        else if('go south' == response || 's' == response) {
            const output = document.getElementById("blank"); 
            output.innerHTML += `<p>Go south <br>The door you just entered from closes behind you and locks.</p>`;
        }

        else if('go west' == response || 'w' == response) {
            const output = document.getElementById("blank"); 
            output.innerHTML += `<p>Go west <br>There is a book shelf with a few books on it. </p>`;
        }

        else if('go east' == response || 'e' == response) {
            const output = document.getElementById("blank"); 
            output.innerHTML += `<p>Go east <br>You see a laptop on a desk, and there are a few pencils</p>`;
        }

        //The books are to give more hints about the last challenge. The bolded letters are actually the password for the computer, once they enter the bolded letters in order into the computer, it unlocks the next floor. 
        //The small details in these stories are actually very important for the next floor, as they will be talking to the people that the story is about
        else if('read books' == response || 'read book' == response) {
            const output = document.getElementById("blank"); 
            output.innerHTML += `<p>Read <br>You must take the books first</p>`;
        }

        else if('take book' == response || 'take books' == response) {
            const output = document.getElementById("blank"); 
            output.innerHTML += `<p>Take books <br>You have taken the four books. The names of the books are: book1, book2, and book3</p>`;
        }

        //This one hints that the item needed may not actually be in the room
        else if('read book1' == response) {
            const output = document.getElementById("blank"); 
            output.innerHTML += `<p>Read book1 <br><b>The story about an unhappy princess</b><br> Once upon a time, a <b>P</b>rincess got stuck in a tower. She climbed, and climbed up the floors, hoping that, when she reached the top she would <b>F</b>ind a way out. When she got to the 93rd floor, she met a puzzle she couldn't solve. It was an easy request that anyone could provide. But she couldn't find the thing that was needed. She was stuck there and stayed there forever. The end. That wasn't a very pleasant story... I wonder if it has any importance or not. </p>`;
        }

        //But this one hints that there might be a secret compartement either from books or the walls
        else if('read book2' == response) {
            const output = document.getElementById("blank"); 
            output.innerHTML += `<p>Read book2 <br>This one looks like a diary<br><br>September 22<br><br>It seems I have gotten stuck in a <b>W</b>eird tower. It claims that if I can climb to the <b>T</b>op, I could get out of here. At first, I thought it meant from the outside, but I realized soon after that that was simply impossible folly. So I went inside. There are a lot of books in the tower, I find it a bit suspicous. Not to mention that the walls are made out of bricks. In most movies, when you press on one, a whole secret chamber unlocks! I tried a bit, but it got boring. The end. I wonder if this has any meaning to it or not. </p>`;
        }

        //There is a tree on the 5th floor, where you can offer food into a hole in front of it. The truth is, you can actually offer yourself, this hint indicates that that is what the mother did
        else if('read book3' == response) {
            const output = document.getElementById("blank"); 
            output.innerHTML += `<p>Read book3 <br>A story about twins and their mother.<br>Twin brothers, around 5 years old and their mother all woke up here. The m<b>O</b>ther led her children up the tower so they could all leave. Once they got to the second l<b>A</b>st floor, the twins turned away for a second to observe something. The moment they looked back, their mother was gone. They have been stuck here ever since. The end. I wonder what happened to the mother, how could she have disappeared into thin air? </p>`;
        }

        //Entering the password to get to the next floor
        else if('open laptop' == response){
            const output = document.getElementById("blank"); 
            output.innerHTML += `<p>Open laptop <br>The laptop opens, and there is a prompt asking you for a password</p>`;
        }

        else if('enter password' == response){
            const output = document.getElementById("blank"); 
            output.innerHTML += `<p>Enter password <br>where?</p>`;
        }

        //The password is composed in sequencial order of the letter that are bolded.
        else if('in laptop = PFWTOA' == response || 'enter password in laptop = PFWTOA' == response){
            alert('The right password has been entered')
            window.location.href = "/5 Floor 3/floor3.html";
        }

        else if('in laptop' == response || 'enter password in laptop' == response){
            const output = document.getElementById("blank"); 
            output.innerHTML += `<p>Enter password in laptop <br>what is it?</p>`;
        }

        //Enter in the bolded letters in order, two bolded letters per book. Enter the letters in starting with book1, 2, then 3
        else if('PFWTOA' == response){
            alert('The right password has been entered')
            window.location.href = "/5 Floor 3/floor3.html";
        }

        else if('hint' == response || 'give hint' == response){
            const output = document.getElementById("blank"); 
            output.innerHTML += `<p>Hint <br>a laptop and books... why are there some different looking letters?</p>`;
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