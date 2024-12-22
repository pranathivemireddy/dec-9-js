//Question-1
function greet(){
    console.log('Hello!')
}
greet()

//Question-2
function showMessage(){
    console.log('This is a Message!');
}
showMessage()

//Question-3
function logInfo(){
    console.log('Logging Information.....');
}
logInfo()

//Question-4
function startGame(){
    console.log('Start Game')
    endGame();
}
function endGame(){
    console.log('Game Ended')
}
startGame();

//Question-5
function beginTask(){
    console.log('Task started')
    finishTask()
}
function finishTask(){
    console.log('Task Finished')
}
beginTask();