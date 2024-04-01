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
          "title": "Ввод данных",
          "content": "\u003Cp3\u003EСпасибо, что согласились принять участие в исследовании! Пожалуйста, введите свои данные -\u003E \u003C\u002Fp3\u003E"
        },
        {
          "required": true,
          "type": "input",
          "label": "Код участника",
          "name": "respID"
        },
        {
          "required": true,
          "type": "radio",
          "label": "Ваш пол",
          "options": [
            {
              "label": "Женский",
              "coding": "F"
            },
            {
              "label": "Мужской",
              "coding": "M"
            }
          ],
          "name": "Sex"
        },
        {
          "required": true,
          "type": "input",
          "label": "Ваш возраст",
          "name": "Age"
        },
        {
          "required": true,
          "type": "radio",
          "label": "Даю добровольное согласие на участие в исследовании",
          "options": [
            {
              "label": "Да"
            }
          ],
          "name": "dayu-dobrovolnoe-soglasie-na-uchastie-v-issledovanii"
        }
      ],
      "scrollTop": true,
      "submitButtonText": "ПРОДОЛЖИТЬ →",
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
          "content": " \u003Cmain class=\"content-horizontal-center\r\n               content-vertical-center\"\u003E\r\n    \u003Cdiv\u003E\r\n\u003Cbr\u003E\u003Cp5 style=\"text-align: center;\"\u003E Данное исследование состотоит из двух этапов. На обоих этапах Вам будут предъявляться по три слова, \r\n  \u003Cbr\u003E для которых существует общее прилагательное, образующее устойчивое словосочетание с каждым из них. \u003C\u002Fp5\u003E\r\n\u003Cbr\u003E \u003Cp4 style=\"text-align: center;\"\u003E&nbsp;\u003C\u002Fp4\u003E\r\n\u003Cbr\u003E\u003Cbr\u003E\u003Cbr\u003E \u003Cp5 style=\"text-align: center;\"\u003EШАПОЧКА\u003C\u002Fp5\u003E\r\n\u003Cbr\u003E \u003Cp5 style=\"text-align: center;\"\u003EКРЕСТ\u003C\u002Fp5\u003E\r\n\u003Cbr\u003E \u003Cp5 style=\"text-align: center;\"\u003EПЛОЩАДЬ\u003C\u002Fp5\u003E\r\n\u003Cbr\u003E \u003Cp5 style=\"text-align: center;\"\u003E&nbsp;\u003C\u002Fp5\u003E\r\n\u003Cbr\u003E\u003Cbr\u003E\u003Cbr\u003E \u003Cp5 style=\"text-align: center;\"\u003EОсновная задача состоит в том, чтобы найти это прилагательное.\u003C\u002Fp5\u003E \u003Cbr\u003E\u003Cbr\u003E\u003Cbr\u003E \u003Cp5 style=\"text-align: center;\"\u003EВ данной задаче слово-ответ будет &laquo;КРАСНЫЙ&raquo;:\u003C\u002Fp5\u003E\r\n\u003Cbr\u003E \u003Cp5 style=\"text-align: center;\"\u003E(красная шапочка, красный крест, Красная площадь)\u003C\u002Fp5\u003E\r\n\r\n\u003Cbr\u003E\u003Cbr\u003E\u003Cbr\u003E\u003Cbr\u003E \u003Cp5 style=\"text-align: center;\"\u003EНажмите \"Enter\", чтобы перейти к следующей инструкции.\u003C\u002Fp5\u003E\r\n    \u003C\u002Fdiv\u003E\r\n \u003C\u002Fmain\u003E"
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
          "content": "\u003Cmain class=\"content-horizontal-center\r\n               content-vertical-center\"\u003E\r\n    \u003Cdiv\u003E\r\n\u003Cp5 style=\"text-align: center;\"\u003E На первом этапе Вам будут показываться тройки слов на короткое время. Всего их 60 штук.\r\n  \r\n  \u003Cbr\u003EВам необходимо оценить трудность каждой задачи по шкале от 0 до 100.  \r\n \u003Cbr\u003E Где 0 - очень легкая задача, 100 - очень трудная задача.  \r\n\u003C\u002Fp5\u003E\r\n\r\n\u003Cbr\u003E\u003Cp5\u003EЧтобы выбрать число, передвигайте ползунок с помощью мышки. Если необходимо увеличить или уменьшить выбранное значение на один, используйте клавиши \"СТРЕЛКА ВПРАВО\" и \"СТРЕЛКА ВЛЕВО\". \u003Cbr\u003EКогда Вы установите нужное значение, ОБЯЗАТЕЛЬНО нажмите клавишу \"Enter\", чтобы Ваш ответ сохранился.\u003C\u002Fp5\u003E\r\n\u003Cbr\u003E\u003Cp5\u003E Постарайтесь давать ответ как можно быстрее\u003C\u002Fp5\u003E\r\n\r\n\u003Cbr\u003E\u003Cbr\u003E\u003Cimg src=\"static\u002F2024-03-18_15-54-50.png\"\u003E\r\n\r\n\u003Cbr\u003E\u003Cbr\u003E\u003Cp5\u003E\r\n  На первом этапе Вам нужно только ИНТУИТИВНО оценивать трудность задачи, поэтому НЕ старайтесь придумать решение. \u003Cbr\u003EОднако, если решение быстро всплывет в голове, запишите его в поле \"Появились идеи?\". \u003Cbr\u003EЕсли решение не появится, внесите в поле слово \"нет\". Чтобы дать ответ нажмите клавишу \"Enter\". \r\n\u003C\u002Fp5\u003E\r\n\u003Cbr\u003E\u003Cbr\u003E\u003Cbr\u003E\u003Cbr\u003E\u003Cbr\u003E\u003Cp5\u003EНажмите \"Enter\", чтобы приступить к тренировке.\u003C\u002Fp5\u003E"
        }
      ]
    },
    {
      "type": "lab.flow.Loop",
      "templateParameters": [
        {
          "task1": "брови",
          "task2": "дым",
          "task3": "бас",
          "corr.answer": "густой",
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
          "task1": "бритва",
          "task2": "боль",
          "task3": "соус",
          "corr.answer": "острый",
          "type": "2"
        }
      ],
      "sample": {
        "mode": "draw-shuffle"
      },
      "files": {},
      "responses": {},
      "parameters": {},
      "messageHandlers": {},
      "title": "Training1",
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
        "title": "training1",
        "content": [
          {
            "type": "lab.html.Page",
            "items": [
              {
                "type": "text",
                "content": ""
              },
              {
                "required": true,
                "type": "html",
                "content": "\u003C!doctype html\u003E\r\n\u003Chtml\u003E\r\n\u003Chead\u003E\r\n  \u003Cmeta charset=\"utf-8\"\u003E\r\n  \u003Ctitle\u003ET+C\u003C\u002Ftitle\u003E\r\n  \u003Clink rel=\"stylesheet\" href=\"lib\u002Flab.css\"\u003E\r\n\u003C\u002Fhead\u003E\r\n\r\n\u003Cbody class=\"container\"\u003E\r\n    \u003Cmain class= \"content-horizontal-center content-vertical-space-around\"\u003E\r\n      \r\n      \u003Cdiv id =\"cross\" class=\"w-100 content-horizontal-center\"\u003E \u003Cp1\u003E+\u003C\u002Fp1\u003E \u003C\u002Fdiv\u003E\r\n\r\n\u003Cbr\u003E\u003Cbr\u003E\u003Cbr\u003E\u003Cbr\u003E\u003Cbr\u003E\u003Cbr\u003E\u003Cbr\u003E\u003Cbr\u003E\r\n  \r\n    \u003C\u002Fmain\u003E\r\n\r\n\r\n\u003C\u002Fbody\u003E\r\n\u003C\u002Fhtml\u003E",
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
            "title": "fixcross_t",
            "timeout": "2000"
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
                "content": "    \u003Cmain class= \"content-horizontal-center content-vertical-space-around\"\u003E\r\n      \r\n      \u003Cdiv id=\"how1\" class=\"w-100 content-horizontal-center\"\u003E\r\n        \u003Cp6\u003EОцените трудность задачи\u003C\u002Fp6\u003E\r\n      \u003C\u002Fdiv\u003E\r\n      \r\n      \u003Cdiv id =\"triad\" class=\"w-100 content-horizontal-center\"\u003E \u003Cp2\u003E${ parameters.task1}\u003Cbr\u003E${ parameters.task2}\u003Cbr\u003E${ parameters.task3}\u003C\u002Fp2\u003E \u003C\u002Fdiv\u003E\r\n\u003Cbr\u003E\u003Cbr\u003E\u003Cbr\u003E\u003Cbr\u003E\u003Cbr\u003E\u003Cbr\u003E\u003Cbr\u003E\u003Cbr\u003E\r\n\u003Cdiv class=\" content-horizontal-center\"\u003E\r\n\u003Cdiv id=\"box1\"\u003E\r\n      \u003Cdiv id=\"complexity\" class=\"w-100 content-horizontal-center\"\u003E\r\n        \u003Cdiv class=\"slider\"\u003E\r\n\t\t        \u003Coutput for=\"fader\" id=\"volume\"\u003E50\u003C\u002Foutput\u003E\r\n\t\t        \u003Cinput type=\"range\" id=\"fader\" min=\"0\" max=\"100\" value=\"50\" step=\"1\" name = \"hard\" oninput=\"test(value)\" autofocus \u003E\r\n            \u003Cinput type=\"submit\" style=\"display: none;\"\u003E\r\n      \u003C\u002Fdiv\u003E\r\n      \u003C\u002Fdiv\u003E\r\n\u003C\u002Fdiv\u003E\r\n\u003C\u002Fdiv\u003E\r\n   \r\n    \u003C\u002Fmain\u003E\r\n\r\n",
                "name": ""
              }
            ],
            "scrollTop": true,
            "submitButtonText": "ДАТЬ ОТВЕТ→",
            "submitButtonPosition": "hidden",
            "files": {},
            "responses": {},
            "parameters": {},
            "messageHandlers": {
              "run": function anonymous(
) {
window.test=function(vol) {
      let output = document.querySelector('#volume');
			output.value = vol;
		output.style.left = vol*8 + 'px';
		}

setTimeout(function(){
	document.getElementById('triad').style.display = 'none';
}, 3000);

},
              "end": function anonymous(
) {
console.log(this.data)
window.time_out = this.data.ended_on == 'timeout'
}
            },
            "title": "t+c_t",
            "width": "m",
            "timeout": "6000"
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
                "content": "\u003Cp10 style= \"text-align: center;\"  class= \"content-horizontal-center content-vertical-space-around\"\u003EНе успели дать ответ!\u003C\u002Fp10\u003E\r\n\u003Cp11 style= \"text-align: center;\"  class= \"content-horizontal-center content-vertical-space-around\"\u003E Пострайтесь действовать быстрее! \u003C\u002Fp11\u003E\r\n\u003Cbr\u003E\u003Cbr\u003E\u003Cbr\u003E\u003Cbr\u003E\u003Cbr\u003E\u003Cbr\u003E",
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
            "title": "feedback_",
            "tardy": true,
            "timeout": "2000",
            "skip": "${ !window.time_out }"
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
                "content": "\u003Ch2 style= \"text-align: center;\"  class= \"content-horizontal-center content-vertical-space-around\"\u003EПоявились идеи?\u003C\u002Fh2\u003E\r\n\u003Ccenter\u003E \r\n\u003Cinput type=\"text\" class=\"text_input\" name=\"ideas\" autofocus\u003E\r\n\u003Cbr\u003E\r\n\u003Cbr\u003E\u003Cbr\u003E\u003Cbr\u003E\u003Cbr\u003E\u003Cbr\u003E\u003Cbr\u003E\r\n\u003Cdiv\u003E\r\n   \u003Cinput type=\"submit\" style=\"display: none;\"\u003E\r\n\u003C\u002Fdiv\u003E\r\n\u003C\u002Fcenter\u003E",
                "name": ""
              }
            ],
            "scrollTop": true,
            "submitButtonText": "ПРОДОЛЖИТЬ →",
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
window.time_outa = this.data.ended_on == 'timeout'
}
            },
            "title": "ideas_",
            "timeout": "6000"
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
                "content": "\u003Cp10 style= \"text-align: center;\"  class= \"content-horizontal-center content-vertical-space-around\"\u003EНе успели дать ответ!\u003C\u002Fp10\u003E\r\n\u003Cp11 style= \"text-align: center;\"  class= \"content-horizontal-center content-vertical-space-around\"\u003E Пострайтесь действовать быстрее! \u003C\u002Fp11\u003E\r\n\u003Cbr\u003E\u003Cbr\u003E\u003Cbr\u003E\u003Cbr\u003E\u003Cbr\u003E\u003Cbr\u003E",
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
            "title": "feedback_",
            "tardy": true,
            "timeout": "2000",
            "skip": "${ !window.time_outa }"
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
      "title": "Rest",
      "content": "\u003Cmain class=\"content-horizontal-center\r\n               content-vertical-center\"\u003E\r\n    \u003Cdiv\u003E\r\n\r\n\u003Ch2 style=\"text-align: center;\"\u003EВы завершили первый этап исследования!\u003C\u002Fh2\u003E\r\n\r\n\u003Cbr\u003E\u003Cbr\u003E\u003Cbr\u003E\u003Cbr\u003E\u003Cbr\u003E\u003Cbr\u003E\u003Cbr\u003E\u003Cp5 style=\"text-align: center;\"\u003EУ Вас есть возжможность отдохнуть несколько минут или перейти ко второму этапу, \u003Cbr\u003Eнажав кнопку \"Enter\".\u003C\u002Fp3\u003E\r\n\u003C\u002Fdiv\u003E\r\n \u003C\u002Fmain\u003E",
      "timeout": "300000",
      "correctResponse": "Enter"
    },
    {
      "type": "lab.flow.Sequence",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "Instr2",
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
          "content": "\u003Cmain class=\"content-horizontal-center\r\n               content-vertical-center\"\u003E\r\n    \u003Cdiv\u003E\r\n\r\n\u003Cp5 style=\"text-align: center;\"\u003EНа втором этапе Вам будет необходимо найти общее слово, которое будет образовывать устойчивое словосочетание \u003Cbr\u003Eс каждым из трех существительных. \u003C\u002Fp5\u003E\r\n\r\n\u003Cp5 style=\"text-align: center;\"\u003EНапример, задача: \u003C\u002Fp5\u003E\r\n  \u003Cbr\u003E\u003Cbr\u003E\u003Cp5\u003E\u003Cbr\u003EШАПОЧКА\r\n  \u003Cbr\u003EКРЕСТ\r\n  \u003Cbr\u003EПЛОЩАДЬ\u003C\u002Fp5\u003E\r\n\r\n\u003Cbr\u003E\u003Cbr\u003E \u003Cp5 style=\"text-align: center;\"\u003EВ данной задаче слово-ответ будет &laquo;КРАСНЫЙ&raquo;:\u003C\u002Fp5\u003E\r\n\u003Cbr\u003E \u003Cp5 style=\"text-align: center;\"\u003E(красная шапочка, красный крест, Красная площадь)\u003C\u002Fp5\u003E\r\n  \r\n\u003Cbr\u003E\u003Cbr\u003E\u003Cbr\u003E\u003Cp5\u003EВсего будет 60 задач. На решение каждой дается максимум 30 секунд. \u003Cbr\u003EОтвет можно дать в любой момент: чтобы дать ответ, нажмите \"ПРОБЕЛ\", тогда появится поле для ввода ответа. \u003Cbr\u003EПосле ввода ответа нажмите клавишу \"Enter\". \u003C\u002Fp5\u003E\r\n\u003Cbr\u003E\u003Cbr\u003E\u003Cp5\u003EЗадачи устроены таким образом, что ответ может не возникнуть сразу и необходимо подольше подумать. \u003Cbr\u003EПоэтому старайтесь использовать все доступное для решения время.\u003C\u002Fp5\u003E\r\n\u003Cbr\u003E\u003Cbr\u003E\u003Cbr\u003E\u003Cbr\u003E\u003Cp5 style=\"text-align: center;\"\u003EНажмите \"Enter\", чтобы перейти к следующей инструкции.\u003C\u002Fp5\u003E"
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
          "content": "\u003Cmain class=\"content-horizontal-center\r\n               content-vertical-center\"\u003E\r\n    \u003Cdiv\u003E\r\n      \r\n\u003Cp5 style=\"text-align: center;\"\u003EПосле решения каждой задачи будет появляться вопрос о наличии Ага!-переживания во время решения. \r\n  \u003Cbr\u003E\u003Cbr\u003E\u003Cbr\u003EАга!-переживание или озарение &ndash; это чувство, которое Вы могли испытывать, \u003Cbr\u003Eкогда после некоторого времени неудачных попыток решения какой-то задачи, ответ внезапно приходил вам в голову. \r\n  \u003Cbr\u003EБывает, что Вы не можете объяснить, на чем основана эта догадка, но Вы чувствуете, \u003Cbr\u003Eчто она правильная и испытываете положительные эмоции, иногда очень сильные. \r\n  \u003Cbr\u003EНаиболее ярким примером Ага!-переживания, описанным в литературе, является случай Архимеда, \u003Cbr\u003Eкоторый внезапно понял, как решить поставленную задачу, и с криком &laquo;Эврика!&raquo; выскочил из ванны.\u003C\u002Fp5\u003E\r\n\r\n\u003Cbr\u003E\u003Cbr\u003E\u003Cbr\u003E\u003Cp5 style=\"text-align: center;\"\u003EЕсли в каких-то задачах Вы испытаете нечто похожее на внезапное озарение (&laquo;Ага! Понял!&raquo;), \u003Cbr\u003E выберете ответ &laquo;да&raquo; в вопросе &laquo;Было ли Ага!-переживание?&raquo;.\u003C\u002Fp5\u003E\r\n\r\n\u003Cbr\u003E\u003Cbr\u003E\u003Cbr\u003E\u003Cbr\u003E\u003Cbr\u003E\u003Cp5\u003EТакже после каждой задачи Вам будет предложено еще раз оценить ее трудность, используя ползунок.\u003C\u002Fp5\u003E\r\n\r\n\r\n\u003Cbr\u003E\u003Cbr\u003E\u003Cbr\u003E\u003Cbr\u003E\u003Cp5\u003EНажмите \"Enter\", чтобы перейти к тренировке.\u003C\u002Fp5\u003E"
        }
      ]
    },
    {
      "type": "lab.flow.Loop",
      "templateParameters": [
        {
          "task1": "ноги",
          "task2": "облака",
          "task3": "одеяло",
          "corr.answer": "ватный",
          "type": "2"
        },
        {
          "task1": "смесь",
          "task2": "характер",
          "task3": "волна",
          "corr.answer": "взрывной",
          "type": "2"
        },
        {
          "task1": "подъем",
          "task2": "силы",
          "task3": "здоровье",
          "corr.answer": "душевный",
          "type": "1"
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
      "title": "Training2",
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
        "title": "training2",
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
            "title": "fixcross_t2",
            "timeout": "1000"
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
            "title": "task_t2",
            "timeout": "30000"
          },
          {
            "type": "lab.html.Page",
            "items": [
              {
                "required": true,
                "type": "html",
                "content": "\u003Ch2 style= \"text-align: center;\"  class= \"content-horizontal-center content-vertical-space-around\"\u003EВаш ответ\u003C\u002Fh2\u003E\r\n\u003Ccenter\u003E \r\n\u003Cinput type=\"text\" class=\"text_input\" name=\"sub_answer\" autofocus\u003E\r\n\u003Cbr\u003E\r\n\u003Cbr\u003E\u003Cbr\u003E\u003Cbr\u003E\r\n\u003Cdiv\u003E\r\n   \u003Cinput type=\"submit\" style=\"display: none;\"\u003E\r\n\u003C\u002Fdiv\u003E\r\n\u003C\u002Fcenter\u003E",
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
              "end": function anonymous(
) {
console.log(this.data)
window.time_outt = this.data.ended_on == 'timeout'
}
            },
            "title": "answer_t2",
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
            "messageHandlers": {},
            "title": "feedback_t2",
            "tardy": true,
            "timeout": "2000",
            "skip": "${ !window.time_outt }"
          },
          {
            "type": "lab.html.Screen",
            "files": {},
            "responses": {
              "keypress(1)": "1",
              "keypress(0)": "0"
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "aha_t2",
            "content": "  \u003Cmain class=\"content-horizontal-center\r\n               content-vertical-center\"\u003E\r\n    \u003Cdiv id=\"aha\"\u003E\r\n    \u003Cp7 style=\"text-align: center;\"\u003EБыло ли Ага-переживание?\u003C\u002Fp7\u003E \u003C\u002Fdiv\u003E\r\n\u003Cbr\u003E\u003Cbr\u003E\u003Cbr\u003E\r\n\u003Cdiv id=\"yesno\"\u003E   \r\n\u003Cp style=\"text-align: center;\"\u003E&nbsp;\u003C\u002Fp\u003E\r\n\u003Cp style=\"text-align: center;\"\u003E&nbsp;\u003C\u002Fp\u003E\r\n\u003Cp style=\"text-align: center;\"\u003E&nbsp;\u003C\u002Fp\u003E\r\n\u003Cp7 style=\"text-align: center;\"\u003EДа\u003Cspan style=\"color: #FFFFFF;\"\u003E..............................................\u003C\u002Fspan\u003EНет\u003C\u002Fp7\u003E\r\n\u003Cbr\u003E\u003Cbr\u003E\u003Cp7 style=\"text-align: center;\"\u003E1\u003Cspan style=\"color: #FFFFFF;\"\u003E..............................................\u003C\u002Fspan\u003E0\u003C\u002Fp7\u003E\r\n    \u003C\u002Fdiv\u003E\r\n  \u003C\u002Fmain\u003E"
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
                "content": "\u003C\u002Fdiv\u003E\r\n\u003Cdiv id=\"how2\" class=\"w-100 content-horizontal-center\"\u003E\r\n        \u003Cp8\u003EОценитие трудность задачи\u003C\u002Fp8\u003E\r\n      \u003C\u002Fdiv\u003E\r\n\u003Cdiv class=\" content-horizontal-center\"\u003E\r\n      \u003Cdiv id=\"complexity\" class=\"w-100 content-horizontal-center\"\u003E\r\n        \u003Cdiv class=\"slider\"\u003E\r\n\t\t        \u003Coutput for=\"fader\" id=\"volume\"\u003E50\u003C\u002Foutput\u003E\r\n\t\t        \u003Cinput type=\"range\" id=\"fader\" min=\"0\" max=\"100\" value=\"50\" step=\"1\" name = \"hard\" oninput=\"test(value)\" autofocus \u003E\r\n            \u003Cinput type=\"submit\" style=\"display: none;\"\u003E\r\n      \u003C\u002Fdiv\u003E\r\n\u003C\u002Fdiv\u003E\r\n\u003C\u002Fdiv\u003E",
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
window.test=function(vol) {
      let output = document.querySelector('#volume');
			output.value = vol;
		output.style.left = vol*8 + 'px';
		}
},
              "end": function anonymous(
) {
console.log(this.data)
window.time_outc = this.data.ended_on == 'timeout'
}
            },
            "title": "postcomplexity_t2"
          }
        ]
      }
    },
    {
      "type": "lab.html.Screen",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "Thank you",
      "content": "\u003Cmain class=\"content-horizontal-center\r\n               content-vertical-center\"\u003E\r\n    \u003Cdiv\u003E\r\n\r\n\u003Ch2 style=\"text-align: center;\"\u003EСпасибо за участие! \u003C\u002Fh2\u003E\r\n\r\n    \u003C\u002Fdiv\u003E"
    }
  ]
})

// Let's go!
study.run()