var quiz = {
  // (A) PROPERTIES
  // (A1) QUESTIONS & ANSWERS
  // Q = QUESTION, O = OPTIONS, A = CORRECT ANSWER
  data: [
  {
    q : "A very useful tool used during development and debugging for printing content to the debugger is: ",
    o : [
      "1. Javascript",
      "2. Terminal Bash",
      "3. for loop",
      "4. console log"
    ],
    a : 1 // arrays start with 0, so answer is 70 meters
  },
  {
    q : "Q2: Commonly used data types do not include",
    o : [
      "1. strings",
      "2. booleans",
      "3. alerts",
      "4. numbers"
    ],
    a : 3
  },
  {
    q : "Q3: The condition in an if/else statement is enclosed with __________?",
    o : [
      "1. questions",
      "2. curly brackets",
      "3. parenthesis",
      "4. square brackets"
    ],
    a : 2
  },
  {
    q : "Which is the seventh planet from the sun?",
    o : [
      "Uranus",
      "Earth",
      "Pluto",
      "Mars"
    ],
    a : 0
  },
  {
    q : "Q3: Arrays in Javascript can be used to store?",
    o : [
      "1. number and strings",
      "2. other arrays",
      "3. booleans",
      "4. all of the above"
    ],
    a : 3
  }
  ],
   
  w1: "Coding Quiz Challenge ",
  w2: "Try to answer the following code-related questions within the time limit.Keep in mind that incorrect answers will penalize your score/time by ten seconds!",
  // (A2) HTML ELEMENTS
  discover:0,
  hWrap: null, // HTML quiz container
  hQn: null, // HTML question wrapper
  hAns: null, // HTML answers wrapper
  svp:null,
  fsw:null,
  
  // (A3) GAME FLAGS
  now: 0, // current question
  score: 0, // current score
  ButtonEl: null,
 
  timeleft:60,
  // (B) INIT QUIZ HTML

 beforeInit: function(){

  quiz.hWrap = document.getElementById("quizWrap");
  //first page
      
    //  let lb = document.createElement("label");
    //  lb.textContent="Time remaining: ";
    //  lb.id="lbl1";
    //  quiz.hWrap.appendChild(lb);
     quiz.svp=document.createElement("div");
      quiz.svp.id="firstpage";
      quiz.hWrap.appendChild(quiz.svp);
      quiz.svp.innerHTML=quiz.w1;
      quiz.svj=document.createElement("div");
      quiz.svj.id="secondline";
      quiz.hWrap.appendChild(quiz.svj);
      quiz.svj.innerHTML=quiz.w2;
     
      //create button

        quiz.ButtonEl = document.createElement("button");
        quiz.ButtonEl.id="startbutton";
        quiz.ButtonEl.textContent="Start";
        quiz.hWrap.appendChild(quiz.ButtonEl);
        
        quiz.ButtonEl.addEventListener("click", quiz.init);
       // quiz.ButtonEl.addEventListener("click", quiz.countdown);

 },

  //countdown: 
  
    // let lb2 = document.createElement("label");
    // lb2.textContent="60";
    // lb2.id="lbl1";
    // quiz.hWrap.appendChild(lb2);
    
    
    //  setInterval(() => {
    //   if (quiz.timeLeft > 1) {
     
    //     // Set the `textContent` of `timerEl` to show the remaining seconds
    //     lb2.textContent = timeLeft + ' seconds remaining';
    //     // Decrement `timeLeft` by 1
    //     quiz.timeLeft--;
    //   } else if (quiz.timeLeft === 1) {
    //     // When `timeLeft` is equal to 1, rename to 'second' instead of 'seconds'
    //     lb2.textContent = timeLeft + ' second remaining';
    //     quiz.timeLeft--;
    //   } else {
    //     // Once `timeLeft` gets to 0, set `timerEl` to an empty string
    //     lb2.textContent = '';
    //     // Use `clearInterval()` to stop the timer
    //     //clearInterval(timeInterval);
    //     // Call the `displayMessage()` function
    //     // displayMessage();
    //   }
    // }, 1000),
  

  init: function(){
    // (B1) WRAPPER
    quiz.hWrap = document.getElementById("quizWrap");

    let f=document.getElementById("firstpage");
    f.remove();
    let g=document.getElementById("secondline");
    g.remove();
    let h=document.getElementById("startbutton");
    h.remove();
   
//first page
  //   quiz.svp=document.createElement("div");
  //   quiz.svp.id="firstpage";
  //  quiz.hWrap.appendChild(quiz.svp);
// set time


//quiz.countdown();
    
    // (B2) QUESTIONS SECTION

    quiz.hQn = document.createElement("div");
    quiz.hQn.id = "quizQn";
    quiz.hWrap.appendChild(quiz.hQn);

    // (B3) ANSWERS SECTION
    quiz.hAns = document.createElement("div");
    quiz.hAns.id = "quizAns";
    quiz.hWrap.appendChild(quiz.hAns);

    // (B4) GO!
    quiz.draw();
    quiz.countdown();
  },
countdown: function(){
  var timeLeft = 60;
  let lb = document.createElement("label");
  lb.textContent="Time remaining: ";
  lb.id="lbl1";
  quiz.hWrap.appendChild(lb);
  // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
  var timeInterval = setInterval(function() {
    // As long as the `timeLeft` is greater than 1122
    if (timeLeft > 1) {
     
      // Set the `textContent` of `timerEl` to show the remaining seconds
      lb.textContent = timeLeft + ' seconds remaining';
      // Decrement `timeLeft` by 1
      //alert(timeLeft);
      timeLeft--;
    } else if (timeLeft === 1) {
      // When `timeLeft` is equal to 1, rename to 'second' instead of 'seconds'
      lb.textContent = timeLeft + ' second remaining';
      timeLeft--;
    } else {
      // Once `timeLeft` gets to 0, set `timerEl` to an empty string
      lb.textContent = '';
      // Use `clearInterval()` to stop the timer
      //clearInterval(timeInterval);
      // Call the `displayMessage()` function
      // displayMessage();
    }
  }, 1000);
},
  // (C) DRAW QUESTION
  draw: function(){



    // (C1) QUESTION
    quiz.hQn.innerHTML = quiz.data[quiz.now].q;
    //console.debug(quiz.hQn.innerHTML);
    // (C2) OPTIONS
    quiz.hAns.innerHTML = "";
    for (let i in quiz.data[quiz.now].o) {
      let radio = document.createElement("input");
      radio.type = "radio";
      radio.name = "quiz";
      radio.id = "quizo" + i;
      quiz.hAns.appendChild(radio);
      let label = document.createElement("label");
      label.innerHTML = quiz.data[quiz.now].o[i];
      label.setAttribute("for", "quizo" + i);
      label.dataset.idx = i;
      label.addEventListener("click", quiz.select);
      // if(quiz.discover==0)
      // {
       
      //   quiz.hWrap.appendChild(w);
      //   quiz.discover=null;
      // }
      quiz.hAns.appendChild(label);
    }
  },

  // (D) OPTION SELECTED
  select: function(){
    // (D1) DETACH ALL ONCLICK
    // let all = quiz.hAns.getElementsByTagName("label");
    // for (let label of all) {
    //   label.removeEventListener("click", quiz.select);
    // }

    // (D2) CHECK IF CORRECT
    let correct = this.dataset.idx == quiz.data[quiz.now].a;
    if (correct) {
      quiz.score++;
      this.classList.add("correct");
    } else {
      this.classList.add("wrong");
    }

    // (D3) NEXT QUESTION OR END GAME
    quiz.now++;
    setTimeout(function(){
      if (quiz.now < quiz.data.length) { quiz.draw(); }
      else {
        quiz.hQn.innerHTML = `You have answered ${quiz.score} of ${quiz.data.length} correctly.`;
        quiz.hAns.innerHTML = "";
      }
    }, 1000);
  },

  // (E) RESTART QUIZ
  reset : function () {
    quiz.now = 0;
    quiz.score = 0;
    quiz.draw();
  }
};

window.addEventListener("load", quiz.beforeInit);
//window.addEventListener("load", quiz.init);
