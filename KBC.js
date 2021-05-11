
var d = require('readline-sync');
function QuestionListFunc(question_list){
    var question_list = [
        "How many continents are there?",             // pehla question
        "What is the capital of India?",            // doosra question
        "NG mei kaun se course padhaya jaata hai?"    // teesra question
    ]
    return question_list
}
var questions = QuestionListFunc()


function OptionsListFunc(options_list) {
    var options_list = [
        ["Four", "Nine", "Seven", "Eight"], // #pehle question ke liye options
        ["Chandigarh", "Bhopal", "Chennai", "Delhi"], // #second question ke liye options
        ["Software Engineering", "Counseling", "Tourism", "Agriculture"], // #third question ke liye options
    ]
    return options_list
}
var options = OptionsListFunc()


function SolutionListFunc(solution_list) {
    var solution_list = [3, 4, 1]
    return solution_list
}
var sol = SolutionListFunc()


function LifeLineFunc(lifeline_list) {
    var lifeline_list = [["seven","Nine"],["Bhopal","Delhi"],["Tourism","Software Engineering"]]
    return lifeline_list
}
var lifeline = LifeLineFunc()

function HintListFunc(hintlist) {
    var hintlist = [1,2,2]
    return hintlist
}
var hint = HintListFunc()


console.log("welcome to KBC game")
var i=0
var Rs = 0
var count = 0
while (i<questions.length){
    Rs = Rs + 1000
    console.log("apka question hai...")
    console.log(questions[i])
    console.log(" ")
    console.log("apka options hai....")
    var j=0
    while(j<options.length){
        console.log(j+1,options[i][j])
        j++
    }
    var answer = d.question("Enter your answer, do you want to use lifeline say yes:");
    if (answer == sol[i][j]){
        console.log("rigth answers well done!!... you win ",Rs)
    }if (answer == "yes"){
        if (count == 0){
            count+=1
            console.log("apke options hai...")
        var k=0
        while(k<lifeline[i].length){
            console.log(k+1,lifeline[i][k])
            k++
        }
        var ans = d.question("Enter your ans:");
        if(ans == hint[i]){
            console.log("great....")
        }else{
            console.log("oops! wrong guess...")
            break
        }
    }else{
        console.log("you used your 5050 lifeline")
        var answer = d.question("Enter your answer:");
        if(answer==sol[i]){
            console.log("rigth answers well done!!... you win",Rs)
        }
        else{
            console.log("wrong answer....")
        }
    }
   
    }else{
        var answer = d.question("Enter your answer:");
        if(answer==sol[i]){
            console.log("rigth answers well done!!... you win",Rs)
        }
        else{
            console.log("wrong answer....")
            break
        }
}
    i++
}


