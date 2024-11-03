// var coordinates = [
//     [903, 515, 1],
//     [856, 431],
//     [748, 340],
//     [678, 220],
//     [563, 171, 1],
//     [541, 230],
//     [453, 242],
//     [381, 202],
//     [288, 262],
//     [311, 357, 1],
//     [230, 371],
//     [148, 365, 1],
//     [81, 445, 1],
//     [106, 560],
//     [103, 648, 1],
//     [103, 732],
//     [145, 850],
//     [136, 923, 1],
//     [181, 973],
//     [287, 1002],
//     [330, 911],
//     [248, 810, 1],
//     [331, 761],
//     [402, 790],
//     [504, 842],
//     [587, 887],
//     [585, 1025],
//     [515, 1145, 1]
// ];

var coordinates = [
    [703, 515, 1],
    [656, 431],
    [548, 340],
    [478, 220]
];




var commands = {
    first: { position: isNaN(parseInt(sessionStorage.getItem('firstPos'))) ? 0 : parseInt(sessionStorage.getItem('firstPos')), color: 'green', isActive: true },
    second: { position: isNaN(parseInt(sessionStorage.getItem('secondPos'))) ? 0 : parseInt(sessionStorage.getItem('secondPos')), color: 'red', isActive: false },
}

var questionList = [
    {id: 1, question: "Назовите дату Швейцарского похода А. В. Суворова", answer: "10 (21) сентября 1799 года", status: false},
    {id: 2, question: "Какая страна была противником России в этом походе?", answer: "Швейцария", status: false},
    {id: 3, question: "Как называлась крепость, которую Суворову необходимо было взять, чтобы начать поход?", answer: "Сен-Готард", status: false},
    {id: 4, question: "Сколько раз армии Суворова пришлось атаковать Сен-Готард и с какова раза удалось прорвать оборону?", answer: "3 раза, с третьего раза, когда подошла подмога с тыла -армия А. Розенберга", status: false},
    {id: 5, question: "Какое прозвище получил Суворов за свой военный талант?", answer: "Рымникский", status: false},
    {id: 6, question: "Какую тактику использовал А. В. Суворов в Швейцарском походе?", answer: "Использовал тактику \"быстроты и натиска\". Эта тактика подразумевала стремительное одновременное концентрическое наступление, дезорганизующее  противника", status: false},
    {id: 7, question: "Как назывался мост, по которому русские войска под командованием Суворова переправлялись в Швейцарию?", answer: "Чертов Мост                                ИЛЛЮСТРАЦИЯ", status: false},
    {id: 8, question: "За какое сражение или поход Александр Суворов получил звание генералиссимуса?", answer: "Швейцарский поход", status: false},
    {id: 9, question: "Эта страна помнит русского полководца и его \"чудо-богатырей\".В июне 1999 года в торжественной обстановке был открыт памятник нашему герою, созданный скульптором Д.Н. Тугариновым. Назовите эту страну?", answer: "Швейцарский поход", status: false},
    {id: 10, question: "Какой русский генерал командовал русско-австрийским корпусом, на соединение с которым Суворов двигался из Северной Италии?", answer: "А. Римский-Корсаков", status: false},
]


// document.onclick = (e) => console.log(`${e.clientX}, ${e.clientY}`);
// document.querySelector('#getXYBtn').addEventListener('click', () => {
//     var list = document.getElementsByTagName('button');
//     for (let i = 0; i < list.length; i++) {
//         console.log(list[i].style.top + " " + list[i].style.left);

//     }
// })

let parent = document.querySelector('#mainField');
let questionSection = document.querySelector('#question-section');
let firstButton = document.querySelector('#first');
let secondButton = document.querySelector('#second');
let statusButton = document.querySelector('#status');

function changePlayer () {
   
    commands.first.isActive = !commands.first.isActive;
    commands.second.isActive = !commands.second.isActive; 
    if(!commands.first.isActive) {
        statusButton.textContent = 'Первый игрок';
        statusButton.cssText = 'bacgroundColor: green;';
    } else {
        statusButton.textContent = 'Второй игрок';
        statusButton.cssText = 'bacgroundColor: red;';
    }
}
changePlayer();

statusButton.addEventListener('click', () => {
    changePlayer();
});


function movePlayer() {

    if (commands.first.position == commands.second.position) {
        firstButton.style.cssText = 'left: ' + (coordinates[commands.first.position][1] + 15) + 'px; top: ' + (coordinates[commands.first.position][0] - 30) + 'px;';
        secondButton.style.cssText = 'left: ' + (coordinates[commands.second.position][1] - 15) + 'px; top: ' + (coordinates[commands.second.position][0] - 30) + 'px;';
    } else {
        firstButton.style.cssText = 'left: ' + coordinates[commands.first.position][1] + 'px; top: ' + (coordinates[commands.first.position][0] - 30) + 'px;';
        secondButton.style.cssText = 'left: ' + (coordinates[commands.second.position][1]) + 'px; top: ' + (coordinates[commands.second.position][0] - 30) + 'px;';
    }
}

movePlayer();
document.querySelector('#clearStorage').addEventListener('click', () => {
    commands.first.position = commands.second.position = 0;
    commands.first.isActive = false;
    commands.second.isActive = true;
   
    statusButton.textContent = 'Первый игрок';
     sessionStorage.clear();
    movePlayer();
})







for (let i = 0; i < coordinates.length; i++) {
    let button = document.createElement('button');
    button.className = coordinates[i][2] == null ? 'easyQuestionIcon' : 'hardQuestionIcon';
    button.style.cssText = 'position: absolute; left: ' + coordinates[i][1] + 'px; top: ' + coordinates[i][0] + 'px;';
    button.textContent = i + 1;
    button.addEventListener('click', () => {
        changePlayer();
        if (commands.first.isActive) {
            commands.first.position = i;
            sessionStorage.setItem("firstPos", i);
            movePlayer();
        } else {
            commands.second.position = i;
            sessionStorage.setItem("secondPos", i);
            movePlayer();
        }

    })
    parent.appendChild(button);
}



for (let i = 0; i < questionList.length; i++) {

    let questionPanel = document.createElement('div');
    let closeButton = document.createElement('div');
    let question = document.createElement('p');
    let answer = document.createElement('p');

    questionPanel.className = 'question-panel';
    closeButton.className = 'close-panel';
    question.className = 'question';
    answer.className = 'closed-answer';


    question.textContent = questionList[i].question;
    answer.textContent = questionList[i].answer;

    questionPanel.addEventListener('click', () => {
        questionList[i].status = !questionList[i].status;
        
        if(questionList[i].status) {
            answer.className = 'answer';
            closeButton.className = 'close-panel-active';
        } else {
            answer.className = 'closed-answer';
            closeButton.className = 'close-panel';

        }
    });

    questionPanel.appendChild(question);
    questionPanel.appendChild(answer);
    questionPanel.appendChild(closeButton);

    questionSection.appendChild(questionPanel);
}


const modalTrigger = document.getElementsByClassName("trigger")[0];

const windowInnerWidth = document.documentElement.clientWidth;
const scrollbarWidth = parseInt(window.innerWidth) - parseInt(document.documentElement.clientWidth);

const bodyElementHTML = document.getElementsByTagName("body")[0];
const modalBackground = document.getElementsByClassName("modalBackground")[0];
const modalClose = document.getElementsByClassName("modalClose")[0];
const modalActive = document.getElementsByClassName("modalActive")[0];

function bodyMargin() {
    bodyElementHTML.style.marginRight = "-" + scrollbarWidth + "px";
}

bodyMargin();

modalClose.addEventListener("click", function () {
    modalBackground.style.display = "none";
    if (windowInnerWidth >= 1366) {
        bodyMargin();
    }
});

modalBackground.addEventListener("click", function (event) {
    if (event.target === modalBackground) {
        modalBackground.style.display = "none";
        if (windowInnerWidth >= 1366) {
            bodyMargin();
        }
    }
});




    // button.draggable = true;
    // button.addEventListener('dragend', (e) => {
    //     button.style.cssText = 'position: absolute; top: ' + (e.pageY - 20) + 'px; left: ' + (e.pageX - 20) + 'px;';
    // });



    
        // modalBackground.style.display = "block";

        // if (windowInnerWidth >= 1366) {
        //     bodyMargin();
        // }


        // modalActive.style.left = "calc(50% - " + (175 - scrollbarWidth / 2) + "px)";
        



        




    // let button = document.createElement('button');
    // button.textContent = questionList[i][0];
    // button.className = 'questionButton';
    // switch (questionList[i][1]) {
    //     case 1:
    //         button.className += ' easyQuestionButton';
    //     case 2:
    //         button.className += ' normalQuestionButton';
    //     case 3:
    //         button.className += ' hardQuestionButton';
    // }
    // button.addEventListener('click', () => {
    //     changePlayer();
    //     if (commands.first.isActive) {
    //         commands.first.position = commands.first.position + questionList[i][1];
    //         sessionStorage.setItem("firstPos", commands.first.position);
    //         movePlayer();
    //     } else {
    //         commands.second.position = commands.second.position + questionList[i][1];
    //         sessionStorage.setItem("secondPos", commands.second.position);
    //         movePlayer();
    //     }
    // })
    // questionListDiv.appendChild(button);