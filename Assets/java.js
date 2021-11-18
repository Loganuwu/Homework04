let questionCounter = 0;
const startMinutes = 2;
let time = startMinutes * 60;
let done = false;


const countdown = document.getElementById('timeLeft');



function countdownTimer(){
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;

    time = Math.max(time, 1);
    countdown.innerHTML = `Time left ${minutes}:${seconds}`
    time--



}



startBtn.addEventListener('click', event =>{
    document.getElementById('startBtn').style.display = 'none';
    setInterval(countdownTimer, 1000);
    questionCounter++;

    if (questionCounter == 1){
        document.getElementById('question').innerHTML = `
        <h1>Question: ${questionCounter}</h1>
        <h2>What does CSS stand for?</h2>
    
    `
    
    document.getElementById('answer1').innerText = `Cascading Style Sheets`
    document.getElementById('answer2').innerText = `Chicken Super Sauce`
    document.getElementById('answer3').innerText = `Counting Super Slow`
    document.getElementById('answer4').innerText = `Click Secret Sources`
    
    
    answer1.addEventListener('click', event =>{
        document.getElementById('answer1').style.background = `green`
        questionCounter++;

    })
    answer2.addEventListener('click', event =>{
        time -= 15;
        document.getElementById('response').innerHTML = 
        `<h1">${answer2.innerText} is not the correct answer!</h1>`
        document.getElementById('answer2').style.background = `red`
        
    
    })
    answer3.addEventListener('click', event =>{
        time -= 15;
        document.getElementById('response').innerHTML = 
        `<h1">${answer3.innerText} is not the correct answer!</h1>`
        document.getElementById('answer3').style.background = `red`
    })
    answer4.addEventListener('click', event =>{
        time -= 15;
        document.getElementById('response').innerHTML = 
        `<h1">${answer4.innerText} is not the correct answer!</h1>`
        document.getElementById('answer4').style.background = `red`
    
    })
    
    }
    })






        

        // if (questionCounter == 2){
        //     document.getElementById('question').innerHTML = `
        //     <h1>Question: ${questionCounter}</h1>
        //     <h2>What is your favorite fruit?</h2>
        
        // `
        
        // document.getElementById('answer1').innerText = `Michael`
        // document.getElementById('answer2').innerText = `Pam`
        // document.getElementById('answer3').innerText = `Jim`
        // document.getElementById('answer4').innerText = `Kevin`
        
        
        // answer1.addEventListener('click', event =>{
        //     document.getElementById('answer1').style.background = `green`
        //     questionCounter++;
        // })
        // answer2.addEventListener('click', event =>{
        //     time -= 15;
        //     document.getElementById('response').innerHTML = 
        //     `<h1">${answer2.innerText} is not the correct answer!</h1>`
        //     document.getElementById('answer2').style.background = `red`
            
        
        // })
        // answer3.addEventListener('click', event =>{
        //     time -= 15;
        //     document.getElementById('response').innerHTML = 
        //     `<h1">${answer3.innerText} is not the correct answer!</h1>`
        //     document.getElementById('answer3').style.background = `red`
        // })
        // answer4.addEventListener('click', event =>{
        //     time -= 15;
        //     document.getElementById('response').innerHTML = 
        //     `<h1">${answer4.innerText} is not the correct answer!</h1>`
        //     document.getElementById('answer4').style.background = `red`
        
        // })
        
        // }






    


    // if (questionCounter == 1){
    //     document.getElementById('question').innerHTML = `
    //     <h1>Question: ${questionCounter}</h1>
    //     <h2>In the office who is the boss?</h2>
    
    // `
    
    // document.getElementById('answer1').innerText = `Michael`
    // document.getElementById('answer2').innerText = `Pam`
    // document.getElementById('answer3').innerText = `Jim`
    // document.getElementById('answer4').innerText = `Kevin`
    
    
    // answer1.addEventListener('click', event =>{
    //     document.getElementById('answer1').style.background = `green`
    //     questionCounter++;
    // })
    // answer2.addEventListener('click', event =>{
    //     time -= 15;
    //     document.getElementById('response').innerHTML = 
    //     `<h1">${answer2.innerText} is not the correct answer!</h1>`
    //     document.getElementById('answer2').style.background = `red`
        
    
    // })
    // answer3.addEventListener('click', event =>{
    //     time -= 15;
    //     document.getElementById('response').innerHTML = 
    //     `<h1">${answer3.innerText} is not the correct answer!</h1>`
    //     document.getElementById('answer3').style.background = `red`
    // })
    // answer4.addEventListener('click', event =>{
    //     time -= 15;
    //     document.getElementById('response').innerHTML = 
    //     `<h1">${answer4.innerText} is not the correct answer!</h1>`
    //     document.getElementById('answer4').style.background = `red`
    
    // })
    
    // }











