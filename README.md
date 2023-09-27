# module-4-homework
Read me for Module 4 homework assignment

I admit i am pretty lost on this assignment. I tried to do the Javascript and HTML one way but then it occured to me that I was overthinking it. Then I tried it another way using more DOM and now it is totally messed up and my code is useless. I am quite aware of what I need to have and what components. But the actual coding, syntax, and arrangement of the documents has me all sorts of messed up. I am really struggling with this one as you can see. Some of them I get and some of them I do not. This one I clearly do not. Better luck next time I guess?

So what I have here is the original document I had. Then what is commented out is the "right way" to do what I was trying to do. Using the DOM. I realize now that this is the better approach. But for some reason at the time I was trying to use more HTML than I should have been using. I think I was just confused on how to apply that concept at first or where and how exactly to use it. I figured it out too late and now I have a bunch of code that doesn't really do anything. So I'm going to comment out all of the 







<!-- Pseudo Code 
# 04 Web APIs: Code Quiz

- Create file/folder structure
    - Two seperate HTML pages (one for the quiz, one for hiscores)
- Once a start button is clicked
    - Quiz starts, timer starts counting down (Set Interval)

    - When an answer is selected
        - IF an answer is wrong, then decrement our timer (15 seconds)
            - Display that user choice was incorrect, move to the next question
        - IF an answer is correct
            - Display that user choice was correct
            - We want to either display score with remaining time OR increment score(Up to you)
        - For loop to loop thru questions array to the next question

    - When timer hits 0 OR no more questions in our array
        - Then we have to clear Interval
        - Then allow user to input initials (prevent default on our html form)
        - Display the users score and Then link to hiscores page
        - Save data to local storage

    - We will use javascript to dynamically create our HTML 
        - createElement to create 
            - Maybe  for our question, buttons for our choices, maybe an H2 to display wrong/right to user

var questions = [
    {
        question: "What does HTML stand for?",
        choices: ["Hyper text markup language", "Hyper text martian language", "answer 3", "Answer 4"],
        answer: "Hyper text markup language",
    },
    {
        question: "Commonly used data types DO NOT include",
        choices: ["Strings", "booleans", "alerts", "numbers"],
        answer: "alerts",
    },
    {
        question: "The condition in an if / else statement is enclosed within ____.
        choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
        answer: "parentheses",
    }
]
var El = createElement("")
El.textContent = questions[1].question -->