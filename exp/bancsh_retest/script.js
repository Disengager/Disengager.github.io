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
          "required": true,
          "type": "html",
          "content": "\u003Ccenter\u003E\r\n\u003Cdiv class=\"detect_card\" style=\"text-align: left; width: 600px; height: 580px\"\u003E  \r\n\u003Ch3\u003EИнформированное согласие\u003C\u002Fh3\u003E\r\nИсследовательская группа факультета психологии\r\nСанкт-Петербургского государственного университета\r\nприглашает Вас принять участие в психологическом исследовании, \r\nцелью которого является изучение работы когнитивного бессознательного \r\nна материале буквенных рядов. \u003Cp\u003E\u003Cb\u003EПомните, что:\u003C\u002Fb\u003E\u003Cbr\u003E\r\n•\tВаше участие в исследовании исключительно добровольно.\u003Cbr\u003E\r\n•\tВы можете отказаться от участия на любом этапе.\u003C\u002Fp\u003E\r\n\u003Cp\u003EВсе данные, собранные в ходе исследования, будут обработаны обезличенно. \r\nУчастие в исследовании не предполагает получение респондентом \r\nденежной или материальной компенсации или какой-либо другой \r\nпрямой выгоды. Однако информация, полученная в ходе этого исследования, \r\nможет в будущем принести пользу и Вам, и другим людям.\u003C\u002Fp\u003E\r\n\u003Ccenter\u003E\u003Cbutton type=\"submit\" class=\"custom-btn btn-3\"\u003E\u003Cspan\u003EСогласен\u003C\u002Fspan\u003E\u003C\u002Fbutton\u003E\u003C\u002Fcenter\u003E\r\n\u003C\u002Fdiv\u003E\r\n\u003C\u002Fcenter\u003E",
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
      "title": "Информированное согласие"
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "type": "text",
          "content": "\u003Ccenter\u003E\n\u003Cdiv class=\"detect_card\" style=\"text-align: left; width: 526px; height:  415px\"\u003E\Вам будет предъявлено 48 буквенных рядов.\u003Cp\u003E\nЕсли Вы считаете, что видели ранее в прошлом экперименте этот буквенный ряд, нажмите \u003Cb style=\"color: rgba(69, 192, 250, 1)\"\u003E← \u003C\u002Fb\u003E на своей клавиатуре. \u003Cp\u003EЕсли Вы считаете, что ранее НЕ видели эту комбинацию букв, нажмите \u003Cb style=\"color: rgba(69, 192, 250, 1)\"\u003E→ \u003C\u002Fb\u003E на своей клавиатуре.\n\u003Cp\u003E\u003Cb\u003EНе задумывайтесь над своими ответами, действуйте интуитивно.\n\u003Cp\u003EПостарайтесь сделать это как можно скорее!\u003C\u002Fb\u003E\u003Cp\u003E\n\u003Ccenter\u003E\n\u003Ccenter\u003E\u003Cbutton type=\"submit\" class=\"custom-btn btn-3\"\u003E\u003Cspan\u003EНачать\u003C\u002Fspan\u003E\u003C\u002Fbutton\u003E\u003C\u002Fcenter\u003E\n\u003C\u002Fcenter\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fcenter\u003E\n"
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
      "title": "Инструкция_2"
    },
    {
      "type": "lab.flow.Loop",
      "templateParameters": [
        {
          "tmp": "-",
          "": ""
        }
      ],
      "sample": {
        "mode": "sequential",
        "n": "${ stimules.get_all().length }"
      },
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {
        "before:prepare": function anonymous(
) {
console.log(stimules.length)
}
      },
      "title": "Узнавание",
      "indexParameter": "counter",
      "tardy": true,
      "shuffleGroups": [],
      "template": {
        "type": "lab.flow.Sequence",
        "files": {},
        "responses": {
          "": ""
        },
        "parameters": {},
        "messageHandlers": {},
        "title": "Последовательность",
        "content": [
          {
            "type": "lab.html.Page",
            "items": [
              {
                "required": true,
                "type": "html",
                "content": "\u003Ccenter\u003E\r\n\u003Cdiv class=\"detect_card\" style=\"height: 200px\"\u003E\r\nВидели ли Вы это слово раньше?\r\n\u003Chr\u003E\r\n\u003Ccenter style=\"font-size: 20px;\"\u003E${ stimules.get_all()[parameters.counter] }\u003C\u002Fcenter\u003E\r\n\u003Chr\u003E\r\n\u003Cdiv id=\"progressbarcontainer\"\u003E\r\n    \u003Cdiv id=\"progressbar\" style=\"width: ${ stimules.get_progress(parameters.counter) }%\"\u003E\r\n    \u003C\u002Fdiv\u003E\r\n\u003C\u002Fdiv\u003E\r\n\u003C\u002Fdiv\u003E\r\n\u003Ccenter\u003E\r\n\u003Cdiv class=\"bottom_block\"\u003E\r\n\u003Cdiv\u003E← Видел(а)\u003C\u002Fdiv\u003E\r\n\u003Cdiv\u003EНе видел(а) →\u003C\u002Fdiv\u003E \r\n\u003C\u002Fdiv\u003E",
                "name": ""
              }
            ],
            "scrollTop": true,
            "submitButtonText": "Continue →",
            "submitButtonPosition": "hidden",
            "files": {},
            "responses": {
              "keydown(ArrowLeft)": "${ stimules.get_all()[parameters.counter] }||+",
              "keydown(ArrowRight)": "${ stimules.get_all()[parameters.counter] }||-"
            },
            "parameters": {},
            "messageHandlers": {
              "commit": function anonymous(
) {
console.log(this.data)
}
            },
            "title": "ответы",
            "tardy": true,
            "correctResponse": "${ stimules.is_correct(parameters.counter) == true? (stimules.get_all()[parameters.counter] + \"||+\") : (stimules.get_all()[parameters.counter] + '||-') }"
          }
        ]
      }
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "required": true,
          "type": "html",
          "content": "\u003Ccenter\u003E\r\n\u003Cdiv class=\"detect_card\" style=\"text-align: left; width: 460px; height: 250px\"\u003E\r\nВ настоящем исследовании наряду с бессмысленными буквенными рядами были использованы зашифрованные \u003Cb\u003Eслова-инверсии\u003C\u002Fb\u003E (слова, написанные наоборот)\u003Cp\u003EПример слова-инверсии: \u003Cb style=\"color:rgba(69, 192, 250, 1)\"\u003Eакызум – музыка.\u003C\u002Fb\u003E\u003Cp\u003E\r\n\u003Ccenter\u003E\u003Cbutton type=\"submit\" class=\"custom-btn btn-3\"\u003E\u003Cspan\u003EДалее\u003C\u002Fspan\u003E\u003C\u002Fbutton\u003E\u003C\u002Fcenter\u003E\r\n\u003C\u002Fdiv\u003E\r\n\u003C\u002Fcenter\u003E\r\n",
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
      "title": "Инструкция_3"
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "required": true,
          "type": "html",
          "content": "\u003Ccenter\u003E\r\n\u003Cdiv class=\"detect_card\" style=\"text-align: left; width: 430px; height: 450px\"\u003E\r\nСкажите, заметили ли Вы, что некоторые из предъявленных Вам стимулов в обратном прочтении образуют реальные слова?\u003Cbr\u003E\r\n\u003Cselect class=\"custom-btn custom_select\" name=\"inversion\"\u003E\r\n  \u003Coption value=\"yes\" selected\u003EДа\u003C\u002Foption\u003E\r\n  \u003Coption value=\"no\"\u003EНет\u003C\u002Foption\u003E\r\n\u003C\u002Fselect\u003E\r\n\u003Cp\u003EЕсли да, будьте добры, постарайтесь написать через запятую те зашифрованные слова, которые Вам удалось заметить.\u003Cp\u003E\r\n\u003Ctextarea name=\"words\" cols=\"40\" rows=\"3\"\u003E\u003C\u002Ftextarea\u003E\u003Cp\u003E\r\n\u003Ccenter\u003E\u003Cbutton type=\"submit\" class=\"custom-btn btn-3\"\u003E\u003Cspan\u003EДалее\u003C\u002Fspan\u003E\u003C\u002Fbutton\u003E\u003C\u002Fcenter\u003E\r\n\u003C\u002Fdiv\u003E\r\n\u003C\u002Fcenter\u003E\r\n",
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
      "title": "Проверка_на_бессознательность"
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "required": true,
          "type": "html",
          "content": "\u003Ccenter\u003E\r\n\u003Cdiv class=\"detect_card\" style=\"text-align: left; width: 470px; height:  430px\"\u003E\r\n\u003Clabel for=\"sex\"\u003EПожалуйста, укажите свой пол:\u003C\u002Flabel\u003E\u003Cbr\u003E\r\n  \u003Cselect class=\"custom-btn custom_select\" name=\"sex\"\u003E\r\n  \u003Coption value=\"m\" selected\u003Eмужской\u003C\u002Foption\u003E\r\n  \u003Coption value=\"f\"\u003Eженский\u003C\u002Foption\u003E\r\n\u003C\u002Fselect\u003E\u003Cbr\u003E\r\n\u003Clabel for=\"age\"\u003EВведите возраст:\u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\u003Cinput type=\"number\" id=\"age\" name=\"age\"\r\n       min=\"10\" max=\"90\" required\u003E\u003Cbr\u003E\r\n\u003Clabel for=\"email\"\u003EТакже Вы можете указать свою почту в поле ниже, дабы мы могли связаться с Вами и пригасить на следующий эксперимент.\u003C\u002Flabel\u003E\u003Cp\u003E\r\n\u003Cinput type=\"email\" name=\"email\"\u003E\u003Cp\u003E\r\n\u003Ccenter\u003E\u003Cbutton type=\"submit\" class=\"custom-btn btn-3\"\u003E\u003Cspan\u003EЗакончить\u003C\u002Fspan\u003E\u003C\u002Fbutton\u003E\r\n\u003C\u002Fcenter\u003E\r\n\u003C\u002Fdiv\u003E\r\n\u003C\u002Fcenter\u003E",
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
      "title": "Анкета"
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "type": "text",
          "content": "\u003Ccenter\u003E\n\u003Cdiv class=\"detect_card\" style=\"text-align: left; width: 500px; height:  200px\"\u003E\n\u003Ch3\u003EБлагодарю за уделенное время!\u003C\u002Fh3\u003EВаши ответы действительно важны для нас. \u003Cbr\u003EСегодня Вы внесли свой посильный вклад в науку!\n\u003C\u002Fdiv\u003E\n\u003C\u002Fcenter\u003E"
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
        "run": function anonymous(
) {
//список экранов, которые отсылать (чтобы не пладить мусор)
send_form(this, ["ответы"], ["Проверка_на_бессознательность"], ["Анкета"])
}
      },
      "title": "Финал",
      "timeout": "100"
    }
  ]
})

// Let's go!
study.run()