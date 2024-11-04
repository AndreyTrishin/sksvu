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

var easyQuestionList = [
    {id: 1, question: "Назовите дату Швейцарского похода А. В. Суворова", answer: "10 (21) сентября 1799 года", status: false, answered: false, difficulty: 1},
    {id: 2, question: "Какая страна была противником России в этом походе?", answer: "Швейцария", status: false, answered: false, difficulty: 1},
    {id: 3, question: "Как называлась крепость, которую Суворову необходимо было взять, чтобы начать поход?", answer: "Сен-Готард", 
        status: false, answered: false, difficulty: 1},
    {id: 4, question: "Сколько раз армии Суворова пришлось атаковать Сен-Готард и с какова раза удалось прорвать оборону?", 
        answer: "3 раза, с третьего раза, когда подошла подмога с тыла -армия А. Розенберга", status: false, answered: false, difficulty: 1},
    {id: 5, question: "Какое прозвище получил Суворов за свой военный талант?", answer: "Рымникский", status: false, answered: false, difficulty: 1},
    {id: 6, question: "Какую тактику использовал А. В. Суворов в Швейцарском походе?", 
        answer: "Использовал тактику \"быстроты и натиска\". Эта тактика подразумевала стремительное одновременное концентрическое" + 
        " наступление, дезорганизующее  противника", status: false, answered: false, difficulty: 1},
    {id: 7, question: "Как назывался мост, по которому русские войска под командованием Суворова переправлялись в Швейцарию?", 
        answer: "Чертов Мост                                ИЛЛЮСТРАЦИЯ", status: false, answered: false, difficulty: 1},
    {id: 8, question: "За какое сражение или поход Александр Суворов получил звание генералиссимуса?", answer: "Швейцарский поход", 
        status: false, answered: false, difficulty: 1},
    {id: 9, question: "Эта страна помнит русского полководца и его \"чудо-богатырей\".В июне 1999 года в торжественной обстановке был" + 
        " открыт памятник нашему герою, созданный скульптором Д.Н. Тугариновым. Назовите эту страну?", answer: "Швейцарский поход", 
        status: false, answered: false, difficulty: 1},
    {id: 10, question: "Какой русский генерал командовал русско-австрийским корпусом, на соединение с которым Суворов двигался из Северной Италии?", 
        answer: "А. Римский-Корсаков", status: false, answered: false, difficulty: 1},
    {id: 11, question: "Назовите три ключевые сражения Швейцарского похода.", 
            answer: "Штурм перевала Сен-Готард, штурм французких укреплений в районе Чертова Моста," + 
            " разгром крупной группировки французких войск в районе Мутенской долины", status: false, answered: false, difficulty: 2},
    {id: 12, question: "Укажите 3 географических объекта, через которые проходил маршрут Суворова: реки, перевалы, города", answer: "Перевал Сен-Готард и Чёртов мост. Армия Суворова прошла через них в долину Ройса. Перевал Кинциг. Через него русские войска спустились в долину Муотаталь.Перевал Паникс. Совершив переход через него, русские войска дошли до города Кур, после чего покинули территорию Швейцарии и двинулись в сторону России.Перевал Прагель. От него через Клёнтальское озеро русские войска спустились к городу Гларус", status: false, answered: false, difficulty: 2},
    {id: 13, question: "Опишите два препятствия, с которыми столкнулись русские войска во время похода (природные или военные)", answer: "В Швейцарском походе А. В. Суворова. Австрийцы, обещавшие предоставить продовольствие, необходимое обмундирование и снаряжение для ведения боевых действий в горах, фактически не сделали ничего из обещанного. Суворову пришлось на месте спешно доукомплектовывать свои части. Также не оказалось нужных проводников. Французы стали подтягивать силы, стремясь не допустить русских вглубь региона. Особую сложность представляли Чёртов мост и Урзернская дыра.", status: false, answered: false, difficulty: 2},
    {id: 14, question: "Назовите два ключевых союзника Суворова во время похода (страны)", answer: "Англия и Австрия", status: false, answered: false, difficulty: 2},
    {id: 15, question: "Как называлась операция по выводу русских войск из Швейцарии?", answer: "Швейцарский поход", status: false, answered: false, difficulty: 2},
    {id: 16, question: "Работа с картой: Укажите название горной системы, отмеченной на карте арабской цифрой «1». ", answer: "Альпы", status: false, answered: false, difficulty: 2},
    {id: 17, question: "Назовите объект, обозначенный на карте синим прямоугольником.", answer: "Чертов Мост", status: false, answered: false, difficulty: 2},
    {id: 18, question: "Укажите на карте основные сражения и даты Швейцарского похода. ", answer: "", status: false, answered: false, difficulty: 2},
    {id: 19, question: "Выделите границу Швейцарии", answer: "", status: false, answered: false, difficulty: 2},
    {id: 20, question: "Обозначьте на карте маршрут армии А. Суворова в Швейцарском походе. ", answer: "", status: false, answered: false, difficulty: 2},
    {id: 21, question: "Назовите два произведения искусства (картины, скульптуры, литературные произведения), посвященных Швейцарскому походу.", answer: "«Переход Суворова через Альпы» Василия Сурикова, написанная в 1899 году. На картине изображён один из эпизодов Швейцарского похода Суворова, переход через Паникс, когда армия уже спускалась с гор. \n«Переход Суворова через перевал Рингенкопф (Паникс)» Александра Коцебу. На полотне представлен другой момент похода — переход через перевал, когда армия уже спускалась с гор.\nТакже в память о швейцарском походе Александра Суворова в горах был высечен 12-метровый гранитный крест. (картинку вы видели на прошлых вопросах) \nЕщё одно произведение искусства, посвящённое этому событию, — картина Александра Шарлеманя «Торжественная встреча Суворова в Милане в апреле 1799 года»(середина XIX века).", status: false, answered: false, difficulty: 3, anMaterials: 
        [['«Переход Суворова через Альпы» Василия Сурикова', '21_1.jpg'], 
        ['«Переход Суворова через перевал Рингенкопф (Паникс)» Александра Коцебу.', '21_2.jpg'], 
        ['«Торжественная встреча Суворова в Милане в апреле 1799 года»(середина XIX века) Александра Шарлеманя', '21_3.jpg']]
    },
    {id: 22, question: "Какое событие отражает данная картина Е. Лансера? ", answer: "«Суворов на Сен-Готардском перевале» вдохновляет своих солдат.", status: false, answered: false, difficulty: 3},
    {id: 23, question: "Назовите излюбленный Суворовым способ ведения боя, представленный в труде «Наука побеждать». ", answer: "Атака. Стремительное наступление, атака, удар в штыки – это те формы ведения боя, которые главным образом признавал и использовал великий полководец", status: false, answered: false, difficulty: 3},
    {id: 24, question: "У Суворова был особенный способ сражаться: переходы он делал очень большие; когда неприятель думал, что русские ещё далеко, Суворов являлся перед ним, как снег на голову и приказывал нападать, даже иногда не выжидая, пока подойдёт всё его войско. В этих случаях он говорил: «Голова хвоста не ждёт». Весь свой способ сражаться Суворов выражал тремя словами. Какими? ", answer: "«Глазомер, быстрота, натиск»", status: false, answered: false, difficulty: 3},
    {id: 25, question: "Чтобы не дать противнику укрепиться на другом берегу, Суворов приказал генералу Каменскому преследовать отступающие части французов. Французы не успели построить оборонительные сооружения у Чертова моста и спешно разобрали середину мостового пролета. Переход через пропасть стал невозможен. Однако, русские под началом князя Багратиона, проявили невероятную смекалку. После ожесточенного боя французы отступили в южном направлении Что предприняли русские войска?", answer: "Русские под началом князя Багратиона, разобрали находящееся поблизости строение на бревна, связали бревна офицерскими шарфами и, под огнем французов, перекинули через провал", status: false, answered: false, difficulty: 3},
    {id: 26, question: "Очень редко, но в истории бывают случаи, когда героические, и при этом, грандиозные события происходят в одном и том же месте. Это в полной мере относится к переходу армии через Альпы. Какие великие полководцы с разницей около 2000 лет совершили этот подвиг?", answer: "Ганнибал, Наполеон и Суворов. При этом, во Франции и России «переход через Альпы» ассоциируется, прежде всего, соответственно, с именами своих полководцев", status: false, answered: false, difficulty: 3},
    {id: 27, question: "На пути армии Суворова через Сен-Готард дорогу преградила армия Луазона. Однако, войска Суворова, вытеснили французов и вышли к селению Урзерн. Далее войска Суворова подошли к мосту через реку Рейса. Через узкое ущелье, на дне которого протекала река, был построен мост, получивший от местных жителей название …", answer: "Чертов мост", status: false, answered: false, difficulty: 3},
    {id: 28, question: "К переходу Сен-Готард местные жители относятся как к легенде, показывая еле видимую тропу на скалах. Как на швейцарских топографических картах обозначается горная тропа?", answer: "«Путь Суворова в 1799 году»", status: false, answered: false, difficulty: 3},
    {id: 29, question: "Каким образом А. Розенбергу удалось ввести Массену в заблуждение, и тем самым, обеспечить себе трое суток бесприпятственного соединения с армией А. Суворова?", answer: "Приказ насеению Швица о заготовке провианта на 2-е муток, тем самым он отвел внимание армии Массена к Швицу, который принялся организовывать оборону Цюриха", status: false, answered: false, difficulty: 3},
    {id: 30, question: "Расскажите об известной истории «золотого эполета» в руках унтер-офицера ", answer: "В мутенской долине Иван Матохин сорвал воротник с Андрэ Массена, и практически удалось взять его в плен, но помешал французский солдат, который отвлек внимание на себя", status: false, answered: false, difficulty: 3},
    
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



for (let i = 0; i < easyQuestionList.length; i++) {
    let dialog = document.querySelector('#myDialog');
    let dialogPanel = document.querySelector('#dialog-panel');
    dialogPanel.addEventListener('click', (event) => dialog.close());

    let questionPanel = document.createElement('div');
    let closeButton = document.createElement('div');
    let question = document.createElement('p');
    let answer = document.createElement('p');
    let answerMaterialDiv;
    if(easyQuestionList[i].anMaterials) {
        answerMaterialDiv = document.createElement('div');
    }

    questionPanel.className = 'question-panel';
    if(easyQuestionList[i].difficulty == 2) {
        questionPanel.className += ' normal-question-panel';  
    } else if (easyQuestionList[i].difficulty == 3) {
        questionPanel.className += ' hard-question-panel';
    }
    closeButton.className = 'close-panel';
    question.className = 'question';
    answer.className = 'closed-answer';


    question.textContent = easyQuestionList[i].question;
    answer.textContent = easyQuestionList[i].answer;

    questionPanel.addEventListener('click', () => {
        easyQuestionList[i].status = !easyQuestionList[i].status;



        if(easyQuestionList[i].anMaterials) {
            for(let j = 0; j < easyQuestionList[i].anMaterials.length; j++) {
                let answerMaterial = document.createElement('a');
                
                answerMaterial.textContent = easyQuestionList[i].anMaterials[j][0];
                answerMaterial.addEventListener('click', () => {
                    let divv = document.querySelector('#answer-material')
                    let img = document.createElement('img');
                    img.src = easyQuestionList[i].anMaterials[j][1];
                    img.className = 'answer-material';
                    // 
                    divv.appendChild(img);
                    dialog.addEventListener('close', (e) => {
                        divv.removeChild(img);
                    });
                    window.myDialog.showModal();
                });
                answerMaterialDiv.className = 'closed-answer';
                if(easyQuestionList[i].status) {
                    answerMaterialDiv.className = 'answer';
                } else {
                    answerMaterialDiv.className = 'closed-answer';
        
                }
                answerMaterialDiv.appendChild(answerMaterial);
            }
        }

        
        if(easyQuestionList[i].status) {
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
   
    if(answerMaterialDiv)
    questionPanel.appendChild(answerMaterialDiv);

    questionSection.appendChild(questionPanel);
}





    // button.draggable = true;
    // button.addEventListener('dragend', (e) => {
    //     button.style.cssText = 'position: absolute; top: ' + (e.pageY - 20) + 'px; left: ' + (e.pageX - 20) + 'px;';
    // });
        




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