// Define study
const study = lab.util.fromObject({
  "title": "root",
  "type": "lab.flow.Sequence",
  "parameters": {},
  "plugins": [
    {
      "type": "lab.plugins.Metadata",
      "path": undefined
    },
    {
      "type": "lab.plugins.Download",
      "filePrefix": "study",
      "path": undefined
    }
  ],
  "metadata": {
    "title": "",
    "description": "",
    "repository": "",
    "contributors": ""
  },
  "files": {},
  "responses": {},
  "content": [
    {
      "type": "lab.html.Page",
      "items": [
        {
          "type": "text",
          "title": "Спасибо, что согласились принять участие в исследовании!",
          "content": "Пожалуйста, заполните анкету."
        },
        {
          "required": true,
          "type": "input",
          "label": "Введите Ваш код участника",
          "name": "vvedite-vash-kod-uchastnika"
        },
        {
          "required": true,
          "type": "radio",
          "label": "Укажите Ваш пол",
          "options": [
            {
              "label": "Женский",
              "coding": "0"
            },
            {
              "label": "Мужской",
              "coding": "1"
            }
          ],
          "name": "ukazhite-vash-pol"
        },
        {
          "required": true,
          "type": "input",
          "label": "Укажите Ваш возраст?",
          "name": "ukazhite-vash-vozrast"
        }
      ],
      "scrollTop": true,
      "submitButtonText": "Продолжить →",
      "submitButtonPosition": "right",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "Data"
    },
    {
      "type": "lab.flow.Sequence",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "Instr1",
      "content": [
        {
          "type": "lab.html.Screen",
          "files": {},
          "responses": {
            "keypress(Enter)": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "Instruction1",
          "content": "\u003Cmain class=\"content-horizontal-center\r\n               content-vertical-center\" w-100\u003E\r\n    \u003Cdiv\u003E\r\n\u003Cbr\u003E\u003Cp5 style=\"text-align: center;\"\u003E В рамках настоящего исследования \r\n    \u003Cbr\u003E\u003Cbr\u003E Вам будут предъявляться задачи, состоящие из трех существительных, \r\n  \u003Cbr\u003E для которых необходимо найти общее прилагательное,  \u003Cbr\u003Eобразующее устойчивое словосочетание с каждым из существительных.  \u003Cbr\u003E Пример: \u003C\u002Fp5\u003E\r\n\u003Cbr\u003E \u003Cp4 style=\"text-align: center;\"\u003E&nbsp;\u003C\u002Fp4\u003E\r\n\u003Cbr\u003E\u003Cbr\u003E \u003Cp5 style=\"text-align: center;\"\u003EШАПОЧКА\u003C\u002Fp5\u003E\r\n\u003Cbr\u003E \u003Cp5 style=\"text-align: center;\"\u003EКРЕСТ\u003C\u002Fp5\u003E\r\n\u003Cbr\u003E \u003Cp5 style=\"text-align: center;\"\u003EПЛОЩАДЬ\u003C\u002Fp5\u003E\r\n\u003Cbr\u003E \u003Cp5 style=\"text-align: center;\"\u003E&nbsp;\u003C\u002Fp5\u003E\r\n\u003Cbr\u003E\u003Cbr\u003E\u003Cbr\u003E \u003Cp5 style=\"text-align: center;\"\u003EВ данной задаче ответом будет &laquo;КРАСНЫЙ&raquo;:\u003C\u002Fp5\u003E\r\n\u003Cbr\u003E \u003Cp5 style=\"text-align: center;\"\u003E(красная шапочка, красный крест, Красная площадь)\u003C\u002Fp5\u003E\r\n\r\n\r\n\u003Cbr\u003E\u003Cbr\u003E \u003Cp5 style=\"text-align: center;\"\u003EОднако, некоторые из задач будут нерешаемыми. \u003Cbr\u003E Т.е. будут предъявляться тройки существительных, для которых нельзя подобрать общее прилагательное. \u003C\u002Fp5\u003E\r\n\r\n\r\n\r\n\r\n\u003Cbr\u003E\u003Cbr\u003E\u003Cbr\u003E\u003Cbr\u003E \u003Cp5 style=\"text-align: center;\"\u003EНажмите \"Enter\", чтобы перейти к следующей инструкции.\u003C\u002Fp5\u003E\r\n    \u003C\u002Fdiv\u003E\r\n \u003C\u002Fmain\u003E\r\n"
        },
        {
          "type": "lab.html.Screen",
          "files": {},
          "responses": {
            "keypress(Enter)": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "Instruction2",
          "content": "\u003Cmain class=\"content-horizontal-center\r\n               content-vertical-center\"\u003E\r\n    \u003Cdiv\u003E  \r\n\u003Cbr\u003E\u003Cbr\u003E\u003Cbr\u003E\u003Cp5\u003EВсего будет 60 задач. На решение каждой дается максимум 30 секунд.\r\n\u003Cbr\u003E\u003Cbr\u003E Ваша задача правильно решить как можно больше решаемых задач. \r\n \u003Cbr\u003E\u003Cbr\u003EОтвет можно дать в любой момент: чтобы дать ответ, нажмите \"ПРОБЕЛ\", тогда появится поле для ввода ответа. \u003Cbr\u003EПосле ввода ответа нажмите клавишу \"Enter\", чтобы сохранить ответ. \u003C\u002Fp5\u003E\r\n\u003Cbr\u003E\u003Cbr\u003E\u003Cp5\u003EПожалуйста, не сдавайтесь раньше времени. Если ответ не возникает сразу, \u003Cbr\u003EИСПОЛЬЗУЙТЕ ДОСТУПНОЕ ДЛЯ РЕШЕНИЯ ВРЕМЯ.\u003C\u002Fp5\u003E\r\n\u003Cbr\u003E\u003Cbr\u003E\r\nЕсли Вам кажется, что задача нерешаемая, также нажмите на  \"ПРОБЕЛ\" и на экране ввода ответа на кнопку \"НЕРЕШАЕМАЯ\".\r\n\u003Cbr\u003E\u003Cbr\u003EЕсли Вы не нашли ответ на задачу, но все же считаете, что она имеет решение, пожалуйста, введите слово \"Нет\" в поле ввода ответа и также нажмите \"Enter\", чтобы сохранить.\r\n\u003Cbr\u003E\u003Cp5 style=\"text-align: center;\"\u003EНажмите \"Enter\", чтобы перейти к следующей инструкции.\u003C\u002Fp5\u003E\r\n\u003Cmain class=\"content-horizontal-center\r\n               content-vertical-center\"\u003E\r\n    \u003Cdiv\u003E\r\n \u003C\u002Fmain\u003E\r\n"
        },
        {
          "type": "lab.html.Screen",
          "files": {},
          "responses": {
            "keypress(Enter)": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "Instruction3",
          "content": "\u003Cmain class=\"content-horizontal-center\r\n               content-vertical-center\"\u003E\r\n    \u003Cdiv\u003E       \r\n\u003Cp5 style=\"text-align: center;\"\u003EПосле ввода ответа на задачу будет появляться вопрос о наличии Ага!-переживания во время решения. \r\n  \u003Cbr\u003E\u003Cbr\u003E\u003Cbr\u003EАга!-переживание или озарение &ndash; это чувство, которое Вы могли испытывать, \u003Cbr\u003Eкогда после некоторого времени неудачных попыток решения какой-то задачи, ответ ВНЕЗАПНО приходил вам в голову. \r\n  \u003Cbr\u003EБывает, что Вы не можете объяснить, на чем основана эта догадка, но Вы чувствуете, \u003Cbr\u003Eчто она ПРАВИЛЬНАЯ и испытываете ПОЛОЖИТЕЛЬНЫЕ ЭМОЦИИ, иногда очень сильные. \r\n  \u003Cbr\u003EНаиболее ярким примером Ага!-переживания, описанным в литературе, является случай Архимеда, \u003Cbr\u003Eкоторый внезапно понял, как решить поставленную задачу, и с криком &laquo;Эврика!&raquo; выскочил из ванны.\u003C\u002Fp5\u003E\r\n\r\n\r\n\u003Cbr\u003E\u003Cbr\u003E\u003Cbr\u003E\u003Cbr\u003E\u003Cp5 style=\"text-align: center;\"\u003E Мы не ожидаем, что Вы будете испытывать такие же яркие эмоции при обнаружении ответа как в реальной жизни.  \u003Cbr\u003EОднако, если в каких-то задачах Вы испытаете нечто похожее на внезапное озарение (&laquo;Ага! Понял!&raquo;), \u003Cbr\u003E выберете ответ &laquo;Да&raquo; в вопросе &laquo;Было ли Ага!-переживание?&raquo;.\u003C\u002Fp5\u003E\r\n\r\n\r\n\u003Cbr\u003E\u003Cbr\u003E\u003Cbr\u003E\u003Cp5 style=\"text-align: center;\"\u003EНажмите \"Enter\", чтобы перейти к следующей инструкции.\u003C\u002Fp5\u003E\r\n   \u003Cdiv\u003E\r\n \u003C\u002Fmain\u003E\r\n"
        },
        {
          "type": "lab.html.Screen",
          "files": {},
          "responses": {
            "keypress(Enter)": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "Instruction4",
          "content": "\u003Cmain class=\"content-horizontal-center\r\n               content-vertical-center w-100\" id = inst12  \u003E\r\n    \u003Cdiv\u003E\r\n\u003Cp5 style=\"text-align: center;\"\u003E Если Вы сообщите, что испытали Ага-переживание, \u003Cbr\u003EВам будет предложено оценить его интенсивность с помощью визуальной шкалы. \u003Cbr\u003EЛевый ее полюс отражает Ага-переживание слабой интенсивности, \u003Cbr\u003Eправый – очень выраженное Ага-переживание.\u003C\u002Fp5\u003E\r\n\r\n\r\n\u003Cbr\u003E\u003Cbr\u003E\u003Cbr\u003E\u003Cbr\u003E\u003Cbr\u003E\u003Cbr\u003E\u003Cp5\u003EБегунок всегда будет расположен слева. \u003Cbr\u003EВы можете передвигать его для того, чтобы дать оценку интенсивности Ага!. \u003Cbr\u003EЧтобы сохранить выбранное положение бегунка, используйте двойное нажатие. \u003Cbr\u003EПосле него бегунок сменит цвет на зеленый, что будет означать, \u003Cbr\u003Eчто Ваш ответ сохранен.   \r\n\u003C\u002Fp5\u003E\r\n\u003Cbr\u003E\u003Cbr\u003E\u003Cbr\u003E\u003Cp5\u003EНажмите \"Enter\", чтобы приступить к тренировке.\u003C\u002Fp5\u003E\r\n\u003C\u002Fmain\u003E\r\n\r\n\r\n"
        }
      ]
    },
    {
      "type": "lab.flow.Loop",
      "templateParameters": [
        {
          "task1": "язык",
          "task2": "соус",
          "task3": "угол",
          "corr.answer": "острый",
          "type": "2"
        },
        {
          "task1": "озеро",
          "task2": "песня",
          "task3": "шея",
          "corr.answer": "лебединый",
          "type": "2"
        },
        {
          "task1": "брови",
          "task2": "дым",
          "task3": "бас",
          "corr.answer": "густой",
          "type": "2"
        }
      ],
      "sample": {
        "mode": "draw-shuffle"
      },
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "Train_Group2",
      "indexParameter": "mycounter",
      "shuffleGroups": [],
      "template": {
        "type": "lab.flow.Sequence",
        "files": {},
        "responses": {
          "": ""
        },
        "parameters": {},
        "messageHandlers": {},
        "title": "main",
        "content": [
          {
            "type": "lab.html.Page",
            "items": [
              {
                "required": true,
                "type": "html",
                "content": "\u003Cmain class=\"content-horizontal-center\r\n               content-vertical-center\"\u003E\r\n               \r\n      \u003Cp1\u003E+\u003C\u002Fp1\u003E\r\n\r\n  \u003C\u002Fmain\u003E",
                "name": ""
              }
            ],
            "scrollTop": true,
            "submitButtonText": "Continue →",
            "submitButtonPosition": "hidden",
            "files": {},
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "fixcross",
            "timeout": "500"
          },
          {
            "type": "lab.html.Page",
            "items": [
              {
                "required": true,
                "type": "html",
                "content": "  \u003Cmain id=\"triad2\"\u003E           \r\n    \u003Cdiv\u003E\r\n      \u003Cp2\u003E${ parameters.task1}\u003Cbr\u003E${ parameters.task2}\u003Cbr\u003E${ parameters.task3}\u003C\u002Fp2\u003E\r\n    \u003C\u002Fdiv\u003E\r\n  \u003C\u002Fmain\u003E",
                "name": ""
              }
            ],
            "scrollTop": true,
            "submitButtonText": "Continue →",
            "submitButtonPosition": "hidden",
            "files": {},
            "responses": {
              "keypress(Space)": "Перейти к ответу"
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "task",
            "timeout": "30000"
          },
          {
            "type": "lab.html.Page",
            "items": [
              {
                "required": true,
                "type": "html",
                "content": "\u003Ch2 style=\"text-align: center;\" class=\"content-horizontal-center content-vertical-space-around\"\u003EВаш ответ\u003C\u002Fh2\u003E\r\n\u003Ccenter\u003E \r\n    \u003Cinput type=\"text\" class=\"text_input\" name=\"sub_answer\" autofocus\u003E\r\n    \u003Cbr\u003E\u003Cbr\u003E\u003Cbr\u003E\r\n    \r\n    \u003C!-- Длинная тонкая кнопка \"Нерешаемая\" --\u003E\r\n    \u003Cbutton id=\"btn-unsolvable-answer\" class=\"unsolvable-btn\" style=\"\r\n        width: 350px; \u002F* Такая же ширина как у input *\u002F\r\n        height: 40px; \u002F* Тонкая кнопка *\u002F\r\n        margin-top: 20px;\r\n        font-size: 20px;\r\n        background-color: #ccc;\r\n        border: 2px solid #ccc;\r\n        border-radius: 4px;\r\n        cursor: pointer;\r\n        transition: all 0.2s;\r\n        \u002F* Добавляем центрирование текста *\u002F\r\n        display: flex;\r\n        align-items: center;\r\n        justify-content: center;\r\n        text-align: center;\r\n    \"\u003E\r\n        Нерешаемая\r\n    \u003C\u002Fbutton\u003E\r\n    \r\n    \u003Cbr\u003E\u003Cbr\u003E\u003Cbr\u003E\r\n    \u003Cdiv\u003E\r\n        \u003Cinput type=\"submit\" id=\"hidden-submit\" style=\"display: none;\"\u003E\r\n    \u003C\u002Fdiv\u003E\r\n\u003C\u002Fcenter\u003E\r\n\r\n\u003C!-- Скрытые поля для сохранения данных --\u003E\r\n\u003Cinput type=\"hidden\" id=\"answer-type\" name=\"answer_type\" value=\"\"\u003E\r\n\u003Cinput type=\"hidden\" id=\"final-answer\" name=\"final_answer\" value=\"\"\u003E",
                "name": ""
              }
            ],
            "scrollTop": true,
            "submitButtonText": "ДАТЬ ОТВЕТ →",
            "submitButtonPosition": "hidden",
            "files": {},
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {
              "run": function anonymous(
) {
// Глобальная переменная для ответа
window.answer = {
    type: '', // 'text' или 'unsolvable'
    value: '' // текст ответа или 'unsolvable'
};

// Создаем скрытые поля если их нет
function ensureHiddenFields() {
    let answerTypeField = document.getElementById('answer-type');
    let finalAnswerField = document.getElementById('final-answer');
    
    if (!answerTypeField) {
        answerTypeField = document.createElement('input');
        answerTypeField.type = 'hidden';
        answerTypeField.id = 'answer-type';
        answerTypeField.name = 'answer_type';
        document.body.appendChild(answerTypeField);
    }
    
    if (!finalAnswerField) {
        finalAnswerField = document.createElement('input');
        finalAnswerField.type = 'hidden';
        finalAnswerField.id = 'final-answer';
        finalAnswerField.name = 'final_answer';
        document.body.appendChild(finalAnswerField);
    }
}

// Обработчик для кнопки "Нерешаемая"
document.getElementById('btn-unsolvable-answer').addEventListener('click', function() {
    // Убеждаемся что скрытые поля существуют
    ensureHiddenFields();
    
    // Сохраняем в переменную
    window.answer.type = 'unsolvable';
    window.answer.value = 'unsolvable';
    
    // Сохраняем в скрытые поля
    document.getElementById('answer-type').value = 'unsolvable';
    document.getElementById('final-answer').value = 'unsolvable';
    
    
    // Визуальная обратная связь
    this.style.backgroundColor = '#C0C0C0';
    this.style.color = 'white';
    this.style.borderColor = '#C0C0C0';
    this.innerHTML = 'Нерешаемая';
    this.disabled = true;
    
    // Отправляем форму через 0.5 секунды
    setTimeout(() => {
        const submitBtn = document.querySelector('input[type="submit"]');
        if (submitBtn) {
            submitBtn.click();
        }
    }, 1000);
    
    console.log('Ответ сохранен: Нерешаемая', window.answer);
});

// Функция сохранения текстового ответа (если нужно)
function saveTextAnswer() {
    ensureHiddenFields();
    
    const textInput = document.querySelector('.text_input');
    const answerText = textInput.value.trim();
    
    if (answerText === '') {
        alert('Введите ответ или нажмите "Нерешаемая"');
        return;
    }
    
    // Сохраняем в переменную
    window.answer.type = 'text';
    window.answer.value = answerText;
    
    // Сохраняем в скрытые поля
    document.getElementById('answer-type').value = 'text';
    document.getElementById('final-answer').value = answerText;
    
    // Отправляем форму
    setTimeout(() => {
        const submitBtn = document.querySelector('input[type="submit"]');
        if (submitBtn) {
            submitBtn.click();
        }
    }, 0);
    
    console.log('Ответ сохранен:', window.answer);
}

// Обработчик Enter в текстовом поле
document.querySelector('.text_input').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        saveTextAnswer();
    }
});
},
              "end": function anonymous(
) {
console.log(this.data)
window.ans_no = this.data.final_answer == 'нет'
console.log(this.data)
window.ans_uns = this.data.answer_type == 'unsolvable'
console.log(this.data)
window.time_outt = this.data.ended_on == 'timeout'

}
            },
            "title": "answer",
            "timeout": "12000"
          },
          {
            "type": "lab.html.Page",
            "items": [
              {
                "type": "text"
              },
              {
                "required": true,
                "type": "html",
                "content": "\u003Cp10 style= \"text-align: center;\"  class= \"content-horizontal-center content-vertical-space-around\"\u003EНе успели дать ответ!\u003C\u002Fp10\u003E\r\n\u003Cp11 style= \"text-align: center;\"  class= \"content-horizontal-center content-vertical-space-around\"\u003E Пострайтесь действовать быстрее! \u003C\u002Fp11\u003E\r\n\u003Cbr\u003E\u003Cbr\u003E\u003Cbr\u003E",
                "name": ""
              }
            ],
            "scrollTop": true,
            "submitButtonText": "Continue →",
            "submitButtonPosition": "hidden",
            "files": {},
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {
              "end": function anonymous(
) {
console.log(this.data)
window.ans_lose = this.data.ended_on == 'timeout'
}
            },
            "title": "feedback",
            "tardy": true,
            "timeout": "2000",
            "skip": "${!window.time_outt  || window.ans_uns || window.ans_no}"
          },
          {
            "type": "lab.html.Screen",
            "files": {},
            "responses": {
              "keypress(1)": "1",
              "keypress(0)": "0"
            },
            "parameters": {},
            "messageHandlers": {
              "end": function anonymous(
) {
console.log(this.data)
window.no_aha = this.data.response == '0'
}
            },
            "title": "aha",
            "content": "  \u003Cbr\u003E\u003Cbr\u003E\u003Cbr\u003E\r\n  \u003Cmain class=\"content-horizontal-center\r\n               content-vertical-center\"\u003E\r\n    \u003Cdiv id=\"aha\"\u003E\r\n    \u003Cp7 style=\"text-align: center;\"\u003EБыло ли Ага-переживание?\u003C\u002Fp7\u003E \u003C\u002Fdiv\u003E\r\n\u003Cbr\u003E\u003Cbr\u003E\u003Cbr\u003E\r\n\u003Cdiv id=\"yesno\"\u003E   \r\n\u003Cp style=\"text-align: center;\"\u003E&nbsp;\u003C\u002Fp\u003E\r\n\u003Cp style=\"text-align: center;\"\u003E&nbsp;\u003C\u002Fp\u003E\r\n\u003Cp style=\"text-align: center;\"\u003E&nbsp;\u003C\u002Fp\u003E\r\n\u003Cp style=\"text-align: center;\"\u003E&nbsp;\u003C\u002Fp\u003E\r\n\u003Cp7 style=\"text-align: center;\"\u003EДа\u003Cspan style=\"color: #FFFFFF;\"\u003E..............................................\u003C\u002Fspan\u003EНет\u003C\u002Fp7\u003E\r\n\u003Cbr\u003E\u003Cbr\u003E\u003Cp7 style=\"text-align: center;\"\u003E1\u003Cspan style=\"color: #FFFFFF;\"\u003E..............................................\u003C\u002Fspan\u003E0\u003C\u002Fp7\u003E\r\n    \u003C\u002Fdiv\u003E\r\n  \u003C\u002Fmain\u003E",
            "tardy": true,
            "skip": "${window.ans_uns || window.ans_no || window.ans_lose}"
          },
          {
            "type": "lab.html.Page",
            "items": [
              {
                "type": "text"
              },
              {
                "required": true,
                "type": "html",
                "content": "\u003Cmain class= \"content-horizontal-center content-vertical-space-around\"\u003E\r\n\u003Cdiv id=\"how2\" class=\"w-100 content-horizontal-center\"\u003E\r\n        \u003Cp8\u003EОценитие интенсивность Ага!-переживание\u003C\u002Fp8\u003E\r\n      \u003C\u002Fdiv\u003E\r\n\u003Cdiv class=\" content-horizontal-center\"\u003E\r\n\u003Cdiv id = \"strelka\"\u003E\r\n\u003C\u002Fdiv\u003E\r\n\r\n\u003Cdiv id = \"post\" class=\" content-horizontal-center\"\u003E\r\n      \u003Cdiv id=\"complexity\" class=\"w-100 content-horizontal-center\"\u003E\r\n         \u003Cdiv class=\"slider\" id=\"slider1\"\u003E\r\n\t\t        \u003Cinput type=\"range\" id=\"fader\" min=\"1\" max=\"100\" value=\"1\" step=\"1\" name = \"hard\" autofocus \u003E\r\n            \u003Cinput type=\"submit\" id=\"send-form\" style=\"display: none;\"\u003E\r\n      \u003C\u002Fdiv\u003E\r\n\u003C\u002Fdiv\u003E\r\n\u003C\u002Fdiv\u003E\r\n\u003C\u002Fmain\u003E",
                "name": ""
              }
            ],
            "scrollTop": true,
            "submitButtonText": "ДАТЬ ОТВЕТ →",
            "submitButtonPosition": "hidden",
            "files": {},
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {
              "run": function anonymous(
) {
// Упрощаем код - убираем преобразование +1
document.querySelector('#fader').oninput = function() {
    let output = document.querySelector('#volume'),
        vol = this.value; // уже 1-100
    
    output.value = vol;
    // Меняем расчет позиции, т.к. теперь диапазон 1-100 вместо 0-99
    // Стало: vol*8 + 'px', было: (vol-1)*8 + 'px'
    output.style.left = ((vol - 1) * 8) + 'px';
    
    // Сбрасываем подтверждение если двигаем ползунок
    if (isConfirmed) {
        isConfirmed = false;
        this.classList.remove('green-thumb');
    }
}

// Обработка двойного клика
document.querySelector('#slider1').addEventListener('dblclick', (e) => {
    if (e.target.id === 'fader' || e.target.closest('#slider1')) {
        const slider = document.querySelector('#fader');
        const currentValue = parseInt(slider.value); // Уже 1-100, без преобразования
        
        // Сохраняем значение
        confirmedValue = currentValue;
        isConfirmed = true;
        
        // Меняем цвет бегунка на зеленый
        slider.classList.add('green-thumb');
        
        console.log('Значение подтверждено:', confirmedValue);
        
        // Ждем 1 секунду перед отправкой
        setTimeout(() => {
            document.querySelector('#send-form').click();
            console.log('Форма отправлена с значением:', confirmedValue);
        }, 500
        );
    }
});
}
            },
            "title": "intensity_aha",
            "skip": "${window.no_aha || window.ans_uns || window.ans_no || window.ans_lose}",
            "tardy": true
          }
        ]
      }
    },
    {
      "type": "lab.html.Screen",
      "files": {},
      "responses": {
        "keypress(Enter)": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "Finish_train",
      "content": "\u003Cmain class=\"content-horizontal-center\r\n               content-vertical-center\"\u003E\r\n    \u003Cdiv\u003E\r\n\r\n\u003Cp12 style=\"text-align: center;\"\u003E Вы успешно завершили тренировку! \u003Cbr\u003E Чтобы перейти к основному блоку задач, нажмите \"Enter\" \u003C\u002Fp12\u003E\r\n\r\n    \u003C\u002Fdiv\u003E"
    },
    {
      "type": "lab.html.Screen",
      "files": {},
      "responses": {
        "keypress(Enter)": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "Start",
      "content": "\u003Cmain class=\"content-horizontal-center\r\n               content-vertical-center\"\u003E\r\n    \u003Cdiv\u003E\r\n\r\n\u003Cp12 style=\"text-align: center;\"\u003E Чтобы перейти к основному блоку, нажмите \"Enter\" \u003C\u002Fp12\u003E\r\n\r\n    \u003C\u002Fdiv\u003E"
    },
    {
      "type": "lab.flow.Loop",
      "templateParameters": [
        {
          "task1": "вода",
          "task2": "бумага",
          "task3": "столик",
          "corr.answer": "туалетный",
          "block": "1",
          "type": "2"
        },
        {
          "task1": "молоко",
          "task2": "клетка",
          "task3": "ребенок",
          "corr.answer": "грудной",
          "block": "1",
          "type": "2"
        },
        {
          "task1": "холод",
          "task2": "чушь",
          "task3": "вальс",
          "corr.answer": "собачий",
          "block": "1",
          "type": "2"
        },
        {
          "task1": "дорога",
          "task2": "занавес",
          "task3": "логика",
          "corr.answer": "железный",
          "block": "1",
          "type": "2"
        },
        {
          "task1": "капуста",
          "task2": "металл",
          "task3": "фотография",
          "corr.answer": "цветной",
          "block": "1",
          "type": "2"
        },
        {
          "task1": "вино",
          "task2": "климат",
          "task3": "закон",
          "corr.answer": "сухой",
          "block": "1",
          "type": "2"
        },
        {
          "task1": "карандаш",
          "task2": "число",
          "task3": "предложение",
          "corr.answer": "простой",
          "block": "1",
          "type": "2"
        },
        {
          "task1": "юмор",
          "task2": "список",
          "task3": "лестница",
          "corr.answer": "черный",
          "block": "1",
          "type": "2"
        },
        {
          "task1": "закуска",
          "task2": "душ",
          "task3": "война",
          "corr.answer": "холодный",
          "block": "1",
          "type": "2"
        },
        {
          "task1": "нрав",
          "task2": "яйцо",
          "task3": "поворот",
          "corr.answer": "крутой",
          "block": "1",
          "type": "2"
        },
        {
          "task1": "раб",
          "task2": "чтение",
          "task3": "взгляд",
          "corr.answer": "беглый",
          "block": "2",
          "type": "2"
        },
        {
          "task1": "час",
          "task2": "карта",
          "task3": "болезнь",
          "corr.answer": "звездный",
          "block": "2",
          "type": "2"
        },
        {
          "task1": "обложка",
          "task2": "знак",
          "task3": "посадка",
          "corr.answer": "мягкий",
          "block": "2",
          "type": "2"
        },
        {
          "task1": "блондинка",
          "task2": "логарифм",
          "task3": "хозяйство",
          "corr.answer": "натуральный",
          "block": "2",
          "type": "2"
        },
        {
          "task1": "слуга",
          "task2": "догадка",
          "task3": "гибель",
          "corr.answer": "верный",
          "block": "2",
          "type": "2"
        },
        {
          "task1": "дата",
          "task2": "печать",
          "task3": "сирота",
          "corr.answer": "круглый",
          "block": "2",
          "type": "2"
        },
        {
          "task1": "царство",
          "task2": "артерия",
          "task3": "муха",
          "corr.answer": "сонный",
          "block": "2",
          "type": "2"
        },
        {
          "task1": "перец",
          "task2": "жизнь",
          "task3": "парочка",
          "corr.answer": "сладкий",
          "block": "2",
          "type": "2"
        },
        {
          "task1": "клапан",
          "task2": "приступ",
          "task3": "благодарность",
          "corr.answer": "сердечный",
          "block": "2",
          "type": "2"
        },
        {
          "task1": "пьяница",
          "task2": "обида",
          "task3": "шоколад",
          "corr.answer": "горький",
          "block": "2",
          "type": "2"
        },
        {
          "task1": "ощущение",
          "task2": "запах",
          "task3": "иммунитет",
          "corr.answer": "стойкий",
          "block": "1",
          "type": "1"
        },
        {
          "task1": "протест",
          "task2": "безработица",
          "task3": "мероприятие",
          "corr.answer": "массовый",
          "block": "1",
          "type": "1"
        },
        {
          "task1": "чистота",
          "task2": "вариант",
          "task3": "форма",
          "corr.answer": "идеальный",
          "block": "1",
          "type": "1"
        },
        {
          "task1": "туризм",
          "task2": "условие",
          "task3": "ситуация",
          "corr.answer": "экстремальный",
          "block": "1",
          "type": "1"
        },
        {
          "task1": "парус",
          "task2": "губа",
          "task3": "знамя",
          "corr.answer": "алый",
          "block": "1",
          "type": "1"
        },
        {
          "task1": "снег",
          "task2": "нос",
          "task3": "асфальт",
          "corr.answer": "мокрый",
          "block": "1",
          "type": "1"
        },
        {
          "task1": "портрет",
          "task2": "бюджет",
          "task3": "очаг",
          "corr.answer": "семейный",
          "block": "1",
          "type": "1"
        },
        {
          "task1": "платье",
          "task2": "лагерь",
          "task3": "кафе",
          "corr.answer": "летний",
          "block": "1",
          "type": "1"
        },
        {
          "task1": "бутылка",
          "task2": "карман",
          "task3": "улица",
          "corr.answer": "пустой",
          "block": "1",
          "type": "1"
        },
        {
          "task1": "колодец",
          "task2": "рана",
          "task3": "след",
          "corr.answer": "глубокий",
          "block": "1",
          "type": "1"
        },
        {
          "task1": "центр",
          "task2": "план",
          "task3": "нагрузка",
          "corr.answer": "учебный",
          "block": "2",
          "type": "1"
        },
        {
          "task1": "письмо",
          "task2": "реакция",
          "task3": "удар",
          "corr.answer": "ответный",
          "block": "2",
          "type": "1"
        },
        {
          "task1": "замысел",
          "task2": "деятельность",
          "task3": "халатность",
          "corr.answer": "преступный",
          "block": "2",
          "type": "1"
        },
        {
          "task1": "речь",
          "task2": "призыв",
          "task3": "привет",
          "corr.answer": "пламенный",
          "block": "2",
          "type": "1"
        },
        {
          "task1": "стол",
          "task2": "стаж",
          "task3": "кабинет",
          "corr.answer": "рабочий",
          "block": "2",
          "type": "1"
        },
        {
          "task1": "пространство",
          "task2": "спутник",
          "task3": "пыль",
          "corr.answer": "космический",
          "block": "2",
          "type": "1"
        },
        {
          "task1": "страх",
          "task2": "книга",
          "task3": "игра",
          "corr.answer": "детский",
          "block": "2",
          "type": "1"
        },
        {
          "task1": "крем",
          "task2": "свинья",
          "task3": "пища",
          "corr.answer": "жирный",
          "block": "2",
          "type": "1"
        },
        {
          "task1": "госпиталь",
          "task2": "училище",
          "task3": "отряд",
          "corr.answer": "военный",
          "block": "2",
          "type": "1"
        },
        {
          "task1": "шорох",
          "task2": "шепот",
          "task3": "стон",
          "corr.answer": "тихий",
          "block": "2",
          "type": "1"
        },
        {
          "task1": "шаблоны",
          "task2": "философы",
          "task3": "чашки",
          "corr.answer": "",
          "block": "1",
          "type": "0"
        },
        {
          "task1": "венок",
          "task2": "решение",
          "task3": "спектакль",
          "corr.answer": "",
          "block": "1",
          "type": "0"
        },
        {
          "task1": "внешность",
          "task2": "почва",
          "task3": "медведь",
          "corr.answer": "",
          "block": "1",
          "type": "0"
        },
        {
          "task1": "архитектор",
          "task2": "температура",
          "task3": "вдова",
          "corr.answer": "",
          "block": "1",
          "type": "0"
        },
        {
          "task1": "зарплата",
          "task2": "индюк",
          "task3": "линия",
          "corr.answer": "",
          "block": "1",
          "type": "0"
        },
        {
          "task1": "сахар",
          "task2": "деньги",
          "task3": "ядро",
          "corr.answer": "",
          "block": "1",
          "type": "0"
        },
        {
          "task1": "юг",
          "task2": "лодка",
          "task3": "конверт",
          "corr.answer": "",
          "block": "1",
          "type": "0"
        },
        {
          "task1": "полет",
          "task2": "драма",
          "task3": "трубка",
          "corr.answer": "",
          "block": "1",
          "type": "0"
        },
        {
          "task1": "тело",
          "task2": "математика",
          "task3": "фраза",
          "corr.answer": "",
          "block": "1",
          "type": "0"
        },
        {
          "task1": "сторона",
          "task2": "кресло",
          "task3": "слеза",
          "corr.answer": "",
          "block": "1",
          "type": "0"
        },
        {
          "task1": "пульт",
          "task2": "балкон",
          "task3": "характер",
          "corr.answer": "",
          "block": "2",
          "type": "0"
        },
        {
          "task1": "картофель",
          "task2": "мина",
          "task3": "процесс",
          "corr.answer": "",
          "block": "2",
          "type": "0"
        },
        {
          "task1": "параметры",
          "task2": "солома",
          "task3": "противник",
          "corr.answer": "",
          "block": "2",
          "type": "0"
        },
        {
          "task1": "цикл",
          "task2": "гостиница",
          "task3": "ветвь",
          "corr.answer": "",
          "block": "2",
          "type": "0"
        },
        {
          "task1": "обмен",
          "task2": "колесо",
          "task3": "предлог",
          "corr.answer": "",
          "block": "2",
          "type": "0"
        },
        {
          "task1": "лампа",
          "task2": "ботинки",
          "task3": "сочинение",
          "corr.answer": "",
          "block": "2",
          "type": "0"
        },
        {
          "task1": "стаканы",
          "task2": "моменты",
          "task3": "хвосты",
          "corr.answer": "",
          "block": "2",
          "type": "0"
        },
        {
          "task1": "добро",
          "task2": "этап",
          "task3": "озеро",
          "corr.answer": "",
          "block": "2",
          "type": "0"
        },
        {
          "task1": "состояние",
          "task2": "роза",
          "task3": "правда",
          "corr.answer": "",
          "block": "2",
          "type": "0"
        },
        {
          "task1": "машина",
          "task2": "покой",
          "task3": "месяц",
          "corr.answer": "",
          "block": "2",
          "type": "0"
        }
      ],
      "sample": {
        "mode": "draw-shuffle"
      },
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "Main_Group2",
      "indexParameter": "mycounter",
      "shuffleGroups": [],
      "template": {
        "type": "lab.flow.Sequence",
        "files": {},
        "responses": {
          "": ""
        },
        "parameters": {},
        "messageHandlers": {},
        "title": "main",
        "content": [
          {
            "type": "lab.html.Page",
            "items": [
              {
                "required": true,
                "type": "html",
                "content": "\u003Cmain class=\"content-horizontal-center\r\n               content-vertical-center\"\u003E\r\n               \r\n      \u003Cp1\u003E+\u003C\u002Fp1\u003E\r\n\r\n  \u003C\u002Fmain\u003E",
                "name": ""
              }
            ],
            "scrollTop": true,
            "submitButtonText": "Continue →",
            "submitButtonPosition": "hidden",
            "files": {},
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "fixcross",
            "timeout": "500"
          },
          {
            "type": "lab.html.Page",
            "items": [
              {
                "required": true,
                "type": "html",
                "content": "  \u003Cmain id=\"triad2\"\u003E           \r\n    \u003Cdiv\u003E\r\n      \u003Cp2\u003E${ parameters.task1}\u003Cbr\u003E${ parameters.task2}\u003Cbr\u003E${ parameters.task3}\u003C\u002Fp2\u003E\r\n    \u003C\u002Fdiv\u003E\r\n  \u003C\u002Fmain\u003E\r\n\r\n\u003Cdiv id=\"counter\"\u003E\r\n  ${ parameters.mycounter +1 + \"\u002F60\"}\r\n\u003C\u002Fdiv\u003E",
                "name": ""
              }
            ],
            "scrollTop": true,
            "submitButtonText": "Continue →",
            "submitButtonPosition": "hidden",
            "files": {},
            "responses": {
              "keypress(Space)": "Перейти к ответу"
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "task",
            "timeout": "30000"
          },
          {
            "type": "lab.html.Page",
            "items": [
              {
                "required": true,
                "type": "html",
                "content": "\u003Ch2 style=\"text-align: center;\" class=\"content-horizontal-center content-vertical-space-around\"\u003EВаш ответ\u003C\u002Fh2\u003E\r\n\u003Ccenter\u003E \r\n    \u003Cinput type=\"text\" class=\"text_input\" name=\"sub_answer\" autofocus\u003E\r\n    \u003Cbr\u003E\u003Cbr\u003E\u003Cbr\u003E\r\n    \r\n    \u003C!-- Длинная тонкая кнопка \"Нерешаемая\" --\u003E\r\n    \u003Cbutton id=\"btn-unsolvable-answer\" class=\"unsolvable-btn\" style=\"\r\n        width: 350px; \u002F* Такая же ширина как у input *\u002F\r\n        height: 40px; \u002F* Тонкая кнопка *\u002F\r\n        margin-top: 20px;\r\n        font-size: 20px;\r\n        background-color: #ccc;\r\n        border: 2px solid #ccc;\r\n        border-radius: 4px;\r\n        cursor: pointer;\r\n        transition: all 0.2s;\r\n        \u002F* Добавляем центрирование текста *\u002F\r\n        display: flex;\r\n        align-items: center;\r\n        justify-content: center;\r\n        text-align: center;\r\n    \"\u003E\r\n        Нерешаемая\r\n    \u003C\u002Fbutton\u003E\r\n    \r\n    \u003Cbr\u003E\u003Cbr\u003E\u003Cbr\u003E\r\n    \u003Cdiv\u003E\r\n        \u003Cinput type=\"submit\" id=\"hidden-submit\" style=\"display: none;\"\u003E\r\n    \u003C\u002Fdiv\u003E\r\n\u003C\u002Fcenter\u003E\r\n\r\n\u003C!-- Скрытые поля для сохранения данных --\u003E\r\n\u003Cinput type=\"hidden\" id=\"answer-type\" name=\"answer_type\" value=\"\"\u003E\r\n\u003Cinput type=\"hidden\" id=\"final-answer\" name=\"final_answer\" value=\"\"\u003E",
                "name": ""
              }
            ],
            "scrollTop": true,
            "submitButtonText": "ДАТЬ ОТВЕТ →",
            "submitButtonPosition": "hidden",
            "files": {},
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {
              "run": function anonymous(
) {
// Глобальная переменная для ответа
window.answer = {
    type: '', // 'text' или 'unsolvable'
    value: '' // текст ответа или 'unsolvable'
};

// Создаем скрытые поля если их нет
function ensureHiddenFields() {
    let answerTypeField = document.getElementById('answer-type');
    let finalAnswerField = document.getElementById('final-answer');
    
    if (!answerTypeField) {
        answerTypeField = document.createElement('input');
        answerTypeField.type = 'hidden';
        answerTypeField.id = 'answer-type';
        answerTypeField.name = 'answer_type';
        document.body.appendChild(answerTypeField);
    }
    
    if (!finalAnswerField) {
        finalAnswerField = document.createElement('input');
        finalAnswerField.type = 'hidden';
        finalAnswerField.id = 'final-answer';
        finalAnswerField.name = 'final_answer';
        document.body.appendChild(finalAnswerField);
    }
}

// Обработчик для кнопки "Нерешаемая"
document.getElementById('btn-unsolvable-answer').addEventListener('click', function() {
    // Убеждаемся что скрытые поля существуют
    ensureHiddenFields();
    
    // Сохраняем в переменную
    window.answer.type = 'unsolvable';
    window.answer.value = 'unsolvable';
    
    // Сохраняем в скрытые поля
    document.getElementById('answer-type').value = 'unsolvable';
    document.getElementById('final-answer').value = 'unsolvable';
    
    
    // Визуальная обратная связь
    this.style.backgroundColor = '#C0C0C0';
    this.style.color = 'white';
    this.style.borderColor = '#C0C0C0';
    this.innerHTML = 'Нерешаемая';
    this.disabled = true;
    
    // Отправляем форму через 0.5 секунды
    setTimeout(() => {
        const submitBtn = document.querySelector('input[type="submit"]');
        if (submitBtn) {
            submitBtn.click();
        }
    }, 1000);
    
    console.log('Ответ сохранен: Нерешаемая', window.answer);
});

// Функция сохранения текстового ответа (если нужно)
function saveTextAnswer() {
    ensureHiddenFields();
    
    const textInput = document.querySelector('.text_input');
    const answerText = textInput.value.trim();
    
    if (answerText === '') {
        alert('Введите ответ или нажмите "Нерешаемая"');
        return;
    }
    
    // Сохраняем в переменную
    window.answer.type = 'text';
    window.answer.value = answerText;
    
    // Сохраняем в скрытые поля
    document.getElementById('answer-type').value = 'text';
    document.getElementById('final-answer').value = answerText;
    
    // Отправляем форму
    setTimeout(() => {
        const submitBtn = document.querySelector('input[type="submit"]');
        if (submitBtn) {
            submitBtn.click();
        }
    }, 0);
    
    console.log('Ответ сохранен:', window.answer);
}

// Обработчик Enter в текстовом поле
document.querySelector('.text_input').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        saveTextAnswer();
    }
});
},
              "end": function anonymous(
) {
console.log(this.data)
window.ans_no = this.data.final_answer == 'нет'
console.log(this.data)
window.ans_uns = this.data.answer_type == 'unsolvable'
console.log(this.data)
window.time_outt = this.data.ended_on == 'timeout'

}
            },
            "title": "answer",
            "timeout": "12000"
          },
          {
            "type": "lab.html.Page",
            "items": [
              {
                "type": "text"
              },
              {
                "required": true,
                "type": "html",
                "content": "\u003Cp10 style= \"text-align: center;\"  class= \"content-horizontal-center content-vertical-space-around\"\u003EНе успели дать ответ!\u003C\u002Fp10\u003E\r\n\u003Cp11 style= \"text-align: center;\"  class= \"content-horizontal-center content-vertical-space-around\"\u003E Пострайтесь действовать быстрее! \u003C\u002Fp11\u003E\r\n\u003Cbr\u003E\u003Cbr\u003E\u003Cbr\u003E",
                "name": ""
              }
            ],
            "scrollTop": true,
            "submitButtonText": "Continue →",
            "submitButtonPosition": "hidden",
            "files": {},
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {
              "end": function anonymous(
) {
console.log(this.data)
window.ans_lose = this.data.ended_on == 'timeout'
}
            },
            "title": "feedback",
            "tardy": true,
            "timeout": "2000",
            "skip": "${!window.time_outt  || window.ans_uns || window.ans_no}"
          },
          {
            "type": "lab.html.Screen",
            "files": {},
            "responses": {
              "keypress(1)": "1",
              "keypress(0)": "0"
            },
            "parameters": {},
            "messageHandlers": {
              "end": function anonymous(
) {
console.log(this.data)
window.no_aha = this.data.response == '0'
}
            },
            "title": "aha",
            "content": "  \u003Cbr\u003E\u003Cbr\u003E\u003Cbr\u003E\r\n  \u003Cmain class=\"content-horizontal-center\r\n               content-vertical-center\"\u003E\r\n    \u003Cdiv id=\"aha\"\u003E\r\n    \u003Cp7 style=\"text-align: center;\"\u003EБыло ли Ага-переживание?\u003C\u002Fp7\u003E \u003C\u002Fdiv\u003E\r\n\u003Cbr\u003E\u003Cbr\u003E\u003Cbr\u003E\r\n\u003Cdiv id=\"yesno\"\u003E   \r\n\u003Cp style=\"text-align: center;\"\u003E&nbsp;\u003C\u002Fp\u003E\r\n\u003Cp style=\"text-align: center;\"\u003E&nbsp;\u003C\u002Fp\u003E\r\n\u003Cp style=\"text-align: center;\"\u003E&nbsp;\u003C\u002Fp\u003E\r\n\u003Cp style=\"text-align: center;\"\u003E&nbsp;\u003C\u002Fp\u003E\r\n\u003Cp7 style=\"text-align: center;\"\u003EДа\u003Cspan style=\"color: #FFFFFF;\"\u003E..............................................\u003C\u002Fspan\u003EНет\u003C\u002Fp7\u003E\r\n\u003Cbr\u003E\u003Cbr\u003E\u003Cp7 style=\"text-align: center;\"\u003E1\u003Cspan style=\"color: #FFFFFF;\"\u003E..............................................\u003C\u002Fspan\u003E0\u003C\u002Fp7\u003E\r\n    \u003C\u002Fdiv\u003E\r\n  \u003C\u002Fmain\u003E",
            "tardy": true,
            "skip": "${window.ans_uns || window.ans_no || window.ans_lose}"
          },
          {
            "type": "lab.html.Page",
            "items": [
              {
                "type": "text"
              },
              {
                "required": true,
                "type": "html",
                "content": "\u003Cmain class= \"content-horizontal-center content-vertical-space-around\"\u003E\r\n\u003Cdiv id=\"how2\" class=\"w-100 content-horizontal-center\"\u003E\r\n        \u003Cp8\u003EОценитие интенсивность Ага!-переживание\u003C\u002Fp8\u003E\r\n      \u003C\u002Fdiv\u003E\r\n\u003Cdiv class=\" content-horizontal-center\"\u003E\r\n\u003Cdiv id = \"strelka\"\u003E\r\n\u003C\u002Fdiv\u003E\r\n\r\n\u003Cdiv id = \"post\" class=\" content-horizontal-center\"\u003E\r\n      \u003Cdiv id=\"complexity\" class=\"w-100 content-horizontal-center\"\u003E\r\n         \u003Cdiv class=\"slider\" id=\"slider1\"\u003E\r\n\t\t        \u003Cinput type=\"range\" id=\"fader\" min=\"1\" max=\"100\" value=\"1\" step=\"1\" name = \"hard\" autofocus \u003E\r\n            \u003Cinput type=\"submit\" id=\"send-form\" style=\"display: none;\"\u003E\r\n      \u003C\u002Fdiv\u003E\r\n\u003C\u002Fdiv\u003E\r\n\u003C\u002Fdiv\u003E\r\n\u003C\u002Fmain\u003E",
                "name": ""
              }
            ],
            "scrollTop": true,
            "submitButtonText": "ДАТЬ ОТВЕТ →",
            "submitButtonPosition": "hidden",
            "files": {},
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {
              "run": function anonymous(
) {
// Упрощаем код - убираем преобразование +1
document.querySelector('#fader').oninput = function() {
    let output = document.querySelector('#volume'),
        vol = this.value; // уже 1-100
    
    output.value = vol;
    // Меняем расчет позиции, т.к. теперь диапазон 1-100 вместо 0-99
    // Стало: vol*8 + 'px', было: (vol-1)*8 + 'px'
    output.style.left = ((vol - 1) * 8) + 'px';
    
    // Сбрасываем подтверждение если двигаем ползунок
    if (isConfirmed) {
        isConfirmed = false;
        this.classList.remove('green-thumb');
    }
}

// Обработка двойного клика
document.querySelector('#slider1').addEventListener('dblclick', (e) => {
    if (e.target.id === 'fader' || e.target.closest('#slider1')) {
        const slider = document.querySelector('#fader');
        const currentValue = parseInt(slider.value); // Уже 1-100, без преобразования
        
        // Сохраняем значение
        confirmedValue = currentValue;
        isConfirmed = true;
        
        // Меняем цвет бегунка на зеленый
        slider.classList.add('green-thumb');
        
        console.log('Значение подтверждено:', confirmedValue);
        
        // Ждем 1 секунду перед отправкой
        setTimeout(() => {
            document.querySelector('#send-form').click();
            console.log('Форма отправлена с значением:', confirmedValue);
        }, 500
        );
    }
});
}
            },
            "title": "intensity_aha",
            "skip": "${window.no_aha || window.ans_uns || window.ans_no || window.ans_lose}",
            "tardy": true
          }
        ]
      }
    },
    {
      "type": "lab.html.Screen",
      "files": {},
      "responses": {
        "keypress(Enter)": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "Finish",
      "content": "\u003Cmain class=\"content-horizontal-center\r\n               content-vertical-center\"\u003E\r\n    \u003Cdiv\u003E\r\n\r\n\u003Cp12 style=\"text-align: center;\"\u003E Вы завершили решение всех задач! \u003Cbr\u003E Чтобы перейти к завершающим вопросам нажмите \"Enter\" \u003C\u002Fp12\u003E\r\n\r\n    \u003C\u002Fdiv\u003E"
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "required": true,
          "type": "radio",
          "label": "Укажите, пожалуйста, Ваш уровень образования",
          "options": [
            {
              "label": "Среднее общее (школа, 11 классов)",
              "coding": "1"
            },
            {
              "label": "Среднее профессиональное",
              "coding": "2"
            },
            {
              "label": "Высшее",
              "coding": "3"
            },
            {
              "label": "Незаконченное высшее ",
              "coding": "4"
            }
          ],
          "name": "ukazhite-pozhalujsta-vash-uroven-obrazovaniya"
        },
        {
          "required": true,
          "type": "input",
          "label": "Укажите, пожалуйста, направление Вашего образования и\u002Fили актуальной работы",
          "name": "ukazhite-pozhalujsta-napravlenie-vashego-obrazovaniya-iili-aktualnoj-raboty"
        }
      ],
      "scrollTop": true,
      "submitButtonText": "Завершить →",
      "submitButtonPosition": "right",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "Questions"
    },
    {
      "type": "lab.html.Screen",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {
        "run": function anonymous(
) {
data = study.options.datastore.exportCsv();
const csvContent = "data:text/csv;charset=utf-8," + encodeURIComponent(data);
const link = document.createElement('a');
  link.setAttribute('href', csvContent);
  link.setAttribute('download', "data.csv");
  document.body.appendChild(link); // Append to body to make it clickable
  link.click();
  document.body.removeChild(link); // Remove after click

}
      },
      "title": "Thank you",
      "content": "\u003Cmain class=\"content-horizontal-center\r\n               content-vertical-center\"\u003E\r\n    \u003Cdiv\u003E\r\n\r\n\u003Ch1 style=\"text-align: center;\"\u003EСпасибо за участие! \u003C\u002Fh1\u003E\r\n\r\n    \u003C\u002Fdiv\u003E",
      "timeout": "3000"
    }
  ]
})

// Let's go!
study.run()