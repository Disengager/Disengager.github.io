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
          "content": "\u003Ccenter\u003E\r\n\u003Cdiv class=\"detect_card\" style=\"text-align: left; width: 600px; height: 580px\"\u003E  \r\n\u003Ch3\u003EИнформированное согласие\u003C\u002Fh3\u003E\r\nИсследовательская группа факультета психологии\r\nСанкт-Петербургского государственного университета\r\nприглашает Вас принять участие в психологическом исследовании, \r\nцелью которого является изучение работы когнитивного бессознательного при обработке слов русского языка. \u003Cp\u003E\u003Cb\u003EПомните, что:\u003C\u002Fb\u003E\u003Cbr\u003E\r\n•\tВаше участие в исследовании исключительно добровольно.\u003Cbr\u003E\r\n•\tВы можете отказаться от участия на любом этапе.\u003C\u002Fp\u003E\r\n\u003Cp\u003EВсе данные, собранные в ходе исследования, будут обработаны обезличенно. \r\nУчастие в исследовании не предполагает получение респондентом \r\nденежной или материальной компенсации или какой-либо другой \r\nпрямой выгоды. Однако информация, полученная в ходе этого исследования, \r\nможет в будущем принести пользу и Вам, и другим людям.\u003C\u002Fp\u003E\r\n\u003Ccenter\u003E\u003Cbutton type=\"submit\" class=\"custom-btn btn-3\"\u003E\u003Cspan\u003EСогласен\u003C\u002Fspan\u003E\u003C\u002Fbutton\u003E\u003C\u002Fcenter\u003E\r\n\u003C\u002Fdiv\u003E\r\n\u003C\u002Fcenter\u003E",
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
          "content": "\u003Ccenter\u003E\n\u003Cdiv class=\"detect_card\" style=\"text-align: left; width: 640px; height: 400px\"\u003E  \nВам будут поочередно предъявляться 60 слов, которые необходимо отвести в одну из двух категорий: \u003Cp\u003E\n• если слово обозначает объект \u003Ci\u003Eестественной \u003C\u002Fi\u003Eприроды (нерукотворный), нажмите \u003Cb style=\"color: rgba(69, 192, 250, 1)\"\u003E← \u003C\u002Fb\u003Eна Вашей клавиатуре;\u003Cbr\u003E\n• если слово обозначает объект \u003Ci\u003Eискусственной \u003C\u002Fi\u003Eприроды (рукотворный), нажмите \u003Cb style=\"color: rgba(69, 192, 250, 1)\"\u003E→ \u003C\u002Fb\u003Eна Вашей клавиатуре.\u003Cp\u003EНа принятие решения дается 2 секунды. Слова могут повторяться.\u003Cp\u003E\nДабы лучше разобраться в экспериментальной процедуре, предлагаем Вам пройти тренировку.\n\u003Cp\u003E\n\u003Ccenter\u003E\u003Cbutton type=\"submit\" class=\"custom-btn btn-3\"\u003E\u003Cspan\u003EДалее\u003C\u002Fspan\u003E\u003C\u002Fbutton\u003E\u003C\u002Fcenter\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fcenter\u003E\n"
        }
      ],
      "scrollTop": true,
      "submitButtonPosition": "hidden",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "Инструкция"
    },
    {
      "type": "lab.flow.Loop",
      "templateParameters": [
        {
          "temp": "1"
        }
      ],
      "sample": {
        "mode": "draw-shuffle",
        "n": "${ stimules.targets.length }"
      },
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "Последовательность",
      "indexParameter": "counter",
      "shuffleGroups": [],
      "template": {
        "type": "lab.flow.Sequence",
        "files": {},
        "responses": {
          "": ""
        },
        "parameters": {},
        "messageHandlers": {},
        "title": "Секвенция",
        "content": [
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 18.69,
                "height": 36.16,
                "stroke": "#000000",
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "+",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": 32,
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {},
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Фиксационный крест",
            "timeout": "300"
          },
          {
            "type": "lab.html.Page",
            "items": [
              {
                "required": true,
                "type": "html",
                "content": "\u003Ccenter class=\"prime_and_target_font\"\u003E\r\n  ${ stimules.get_prime(parameters.counter) }\r\n\u003C\u002Fcenter\u003E",
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
            "title": "Праймы",
            "timeout": "${ params['prime_time'] }"
          },
          {
            "type": "lab.html.Page",
            "items": [
              {
                "required": true,
                "type": "html",
                "content": "\u003Ccenter class=\"prime_and_target_font\"\u003E\r\n  ${ stimules.get_tg(parameters.counter) }\r\n\u003C\u002Fcenter\u003E\r\n\r\n\r\n\u003Cdiv class=\"bottom_block\"\u003E\r\n\u003Cdiv\u003E← Естественное\u003C\u002Fdiv\u003E\r\n\u003Cdiv\u003EИскуственное →\u003C\u002Fdiv\u003E \r\n\u003C\u002Fdiv\u003E\r\n\r\n",
                "name": ""
              }
            ],
            "scrollTop": true,
            "submitButtonText": "Continue →",
            "submitButtonPosition": "hidden",
            "files": {},
            "responses": {
              "keydown(ArrowLeft)": "ЕС",
              "keydown(ArrowRight)": "ИС"
            },
            "parameters": {},
            "messageHandlers": {
              "end": function anonymous(
) {
stimules.fill_custom_column(
  this, 
  ["prime", "targets_category", "correct", "color", "target"], 
  {}
)
}
            },
            "title": "Стимулы *код",
            "timeout": "2000"
          },
          {
            "type": "lab.html.Page",
            "items": [
              {
                "required": true,
                "type": "html",
                "content": "\u003Ccenter div class=\"detect_card\" style=\"width: 600px; height: 250px\"\u003E \u003Ch2\u003EПоздравляю с окончанием тренировки!\u003C\u002Fh2\u003E\u003Cp\u003E \u003Ch3\u003EТеперь Вы можете перейти к основной части эксперимента. \u003C\u002Fh3\u003E\r\n\r\n\u003Cbutton type=\"submit\" class=\"custom-btn btn-3\"\u003E\u003Cspan\u003EНачать\u003C\u002Fspan\u003E\u003C\u002Fbutton\u003E \u003C\u002Fcenter\u003E\r\n",
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
            "title": "Тренировка",
            "skip": "${ parameters.counter != 5 }"
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
          "content": "\u003Ccenter\u003E\r\n\u003Cdiv class=\"detect_card\" style=\"text-align: left; width: 430px; height: 400px\"\u003E\r\nСкажите, заметили ли Вы какие-нибудь слова или символы помимо основных стимулов?\u003Cbr\u003E\r\n\u003Ccenter\u003E\r\n\u003Cselect class=\"custom-btn custom_select\" name=\"inversion\"\u003E\r\n  \u003Coption value=\"yes\" selected\u003EДа\u003C\u002Foption\u003E\r\n  \u003Coption value=\"no\"\u003EНет\u003C\u002Foption\u003E\r\n\u003C\u002Fselect\u003E\r\n\u003C\u002Fcenter\u003E\r\n\u003Cp\u003EМожете ли написать, какие именно слова или стимулы Вы заметили?\u003Cp\u003E\r\n\u003Ctextarea name=\"words\" cols=\"40\" rows=\"3\"\u003E\u003C\u002Ftextarea\u003E\u003Cp\u003E\r\n\u003Ccenter\u003E\u003Cbutton type=\"submit\" class=\"custom-btn btn-3\"\u003E\u003Cspan\u003EДалее\u003C\u002Fspan\u003E\u003C\u002Fbutton\u003E\u003C\u002Fcenter\u003E\r\n\u003C\u002Fdiv\u003E\r\n\u003C\u002Fcenter\u003E\r\n",
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
          "content": "\u003Ccenter\u003E\r\n\u003Cdiv class=\"detect_card\" style=\"text-align: left; width: 470px; height:  430px\"\u003E\r\n\u003Clabel for=\"sex\"\u003EПожалуйста, укажите свой пол:\u003C\u002Flabel\u003E\u003Cbr\u003E\r\n  \u003Cselect class=\"custom-btn custom_select\" name=\"sex\"\u003E\r\n  \u003Coption value=\"m\" selected\u003Eмужской\u003C\u002Foption\u003E\r\n  \u003Coption value=\"f\"\u003Eженский\u003C\u002Foption\u003E\r\n\u003C\u002Fselect\u003E\u003Cbr\u003E\r\n\u003Clabel for=\"age\"\u003EВведите возраст:\u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\u003Cinput type=\"number\" id=\"age\" name=\"age\"\r\n       min=\"10\" max=\"90\" required\u003E\u003Cbr\u003E\r\n\u003Clabel for=\"email\"\u003EТакже Вы можете указать свою почту в поле ниже, дабы мы могли связаться с Вами и пригасить на следующий эксперимент.\u003C\u002Flabel\u003E\u003Cp\u003E\r\n\u003Cinput type=\"email\" name=\"email\"\u003E\u003Cp\u003E\r\n\u003Ccenter\u003E\u003Cbutton type=\"submit\" class=\"custom-btn btn-3\"\u003E\u003Cspan\u003EОтправить\u003C\u002Fspan\u003E\u003C\u002Fbutton\u003E\r\n\u003C\u002Fcenter\u003E\r\n\u003C\u002Fdiv\u003E\r\n\u003C\u002Fcenter\u003E",
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
          "content": "\u003Ccenter\u003E\n\u003Cdiv class=\"detect_card\" style=\"text-align: left; width: 590px; height:  120px\"\u003E\n\u003Ch2\u003EБлагодарим за участие в эксперименте!\u003C\u002Fh2\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fcenter\u003E"
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
stimules.send_form(
  this, 
  ["Стимулы *код"], 
  [ 
    ["Проверка_на_бессознательность", "inversion"], 
    ["Проверка_на_бессознательность", "words"], 
    ["Анкета", "sex"],
    ["Анкета", "age"],
    ["Анкета", "email"],
  ],
  [
    ['group', seq_n],
    ['prime.time', prime_time]
  ]
)

}
      },
      "title": "Финал *код",
      "timeout": "100"
    }
  ]
})

// Let's go!
study.run()