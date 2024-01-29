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
      "filePrefix": "naumenko_rep",
      "path": undefined
    }
  ],
  "metadata": {
    "title": "naumenko_rep",
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
          "content": "\u003Ccenter\u003E\r\n\u003Cdiv class=\"detect_card\" style=\"text-align: left; width: ${ sizes.card_width }px; height: 520px\"\u003E  \r\n\u003Ch3\u003EИнформированное согласие\u003C\u002Fh3\u003E\r\nЗдравствуйте. Приглашаем Вас принять участие в психологическом исследовании.\r\n\u003Cp\u003E\u003Cb\u003EПомните, что:\u003C\u002Fb\u003E\u003Cbr\u003E\r\n•\tВаше участие в исследовании исключительно добровольно.\u003Cbr\u003E\r\n•\tВы можете отказаться от участия на любом этапе.\u003C\u002Fp\u003E\r\n\u003Cp\u003EВсе данные, собранные в ходе исследования, будут обработаны обезличенно. \r\nУчастие в исследовании не предполагает получение респондентом \r\nденежной или материальной компенсации или какой-либо другой \r\nпрямой выгоды. Однако информация, полученная в ходе этого исследования, \r\nможет в будущем принести пользу и Вам, и другим людям.\u003C\u002Fp\u003E\r\n\u003Ccenter\u003E\u003Cbutton type=\"submit\" class=\"custom-btn btn-3\"\u003E\u003Cspan\u003EСогласен\u003C\u002Fspan\u003E\u003C\u002Fbutton\u003E\u003C\u002Fcenter\u003E\r\n\u003C\u002Fdiv\u003E\r\n\u003C\u002Fcenter\u003E",
          "name": ""
        }
      ],
      "scrollTop": true,
      "submitButtonText": "Continue →",
      "submitButtonPosition": "hidden",
      "files": {},
      "responses": {
        "keydown(Enter)": "Enter"
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "Информированное согласие",
      "plugins": []
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "required": true,
          "type": "html",
          "content": "\u003Ccenter\u003E\r\n\u003Cdiv class=\"detect_card\" style=\"text-align: left; width: ${ sizes.card_width }px; height: 680px\"\u003E  \r\n\u003Cp\u003EОчень важно, чтобы условия эксперимента были максимально похожими для всех участников. Например, предъявляемые слова, символы, изображения должны иметь одинаковый размер. Поскольку все экраны различаются, нам важно, чтобы Вы произвели небольшое измерение.\u003C\u002Fp\u003E\r\n\u003Cp\u003EИспользуйте клавишу \"\u003Cb\u003Eстрелка вправо\u003C\u002Fb\u003E\" на клавиатуре, чтобы увеличить длину белой линии, и \"\u003Cb\u003Eстрелку влево\u003C\u002Fb\u003E\", чтобы уменьшить. Приложите пластиковую карту к экрану, как показано на рисунке, и изменяйте размер линии, так, чтобы он соответствовал ширине карты.\u003C\u002Fp\u003E\r\n\u003Ccanvas id=\"size_canv\" width=\"556\" height=\"40\"\u003E\u003C\u002Fcanvas\u003E\r\n\u003Cdiv class=\"size_card\"\u003E\r\n  \u003Cimg src=\"static\u002Fcard3-img.png\" style=\"opacity: 90%;\"\u003E\r\n\u003C\u002Fdiv\u003E\r\n\u003Cbr\u003E\r\n\u003Ccenter\u003E\u003Cbutton type=\"submit\" class=\"custom-btn btn-3\"\u003E\u003Cspan\u003EДалее\u003C\u002Fspan\u003E\u003C\u002Fbutton\u003E\u003C\u002Fcenter\u003E\r\n\u003C\u002Fcenter\u003E\r\n\u003C\u002Fdiv\u003E",
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
        "run": function anonymous(
) {
window.size  = new Size(24, "size_canv")
size.paint()
}
      },
      "title": "Размеры *код",
      "plugins": [],
      "tardy": true
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "type": "text",
          "content": "\u003Ccenter\u003E\n\u003Cdiv class=\"detect_card\" style=\"text-align: left; width: ${ sizes.card_width }px; height: 440px\"\u003E  \n${ window.instruction }\n\u003Cp\u003E\n\u003Ccenter\u003E\u003Cbutton type=\"submit\" class=\"custom-btn btn-3\"\u003E\u003Cspan\u003EДалее\u003C\u002Fspan\u003E\u003C\u002Fbutton\u003E\u003C\u002Fcenter\u003E\n\u003C\u002Fdiv\u003E\n\u003C\u002Fcenter\u003E\n"
        }
      ],
      "scrollTop": true,
      "submitButtonPosition": "hidden",
      "files": {},
      "responses": {
        "keydown(Enter)": "Enter"
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
      "tardy": true,
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
                "width": 2,
                "height": null,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "●",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "${ window.sizes.stimules_size() }",
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
            "timeout": "${ stimules.get_fixation_time(parameters.counter) }",
            "tardy": true
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 2,
                "height": null,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "${ stimules.get_prime(parameters.counter) }",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "${ window.sizes.stimules_size() }",
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
            "title": "Прайм",
            "timeout": "${ parseInt(stimules.get_prime_time(parameters.counter)) }",
            "tardy": true
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 2,
                "height": null,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "${ stimules.get_mask(parameters.counter) }",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "${ window.sizes.stimules_size() }",
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
            "title": "Маска",
            "timeout": "${ stimules.get_mask_time(parameters.counter) }",
            "tardy": true
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 2,
                "height": null,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "${ stimules.get_tg(parameters.counter) }",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "${ window.sizes.stimules_size() }",
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
              "keydown(ArrowLeft)": "неверно",
              "keydown(ArrowRight)": "верно"
            },
            "parameters": {},
            "messageHandlers": {
              "end": function anonymous(
) {
stimules.fill_custom_column(
  this, 
  ["prime_awareness",	"prime_difficulty",	"prime_correctness",	"target_difficulty", "target_correctness",	"fixation_time",	"prime_time",	"prime",	"mask_time",	"mask",	"target"],
  {}
)
}
            },
            "title": "Стимулы *код",
            "tardy": true
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
              "keydown(Enter)": "Enter"
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Тренировка",
            "skip": "${ parameters.counter != 1 }"
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
          "content": "\u003Ccenter\u003E\r\n\u003Cdiv class=\"detect_card\" style=\"text-align: left; width: ${ sizes.card_width }px; height: 440px\"\u003E\r\nЗаметили ли вы, что в начале каждой пробы, после точки на экране очень быстро мелькали (0,02 секунды) примеры вида 8*8=64?\u003Cbr\u003E\r\n\u003Ccenter\u003E\r\n\u003Cselect class=\"custom-btn custom_select\" name=\"prime_visible\"\u003E\r\n  \u003Coption value=\"yes\"\u003EДа\u003C\u002Foption\u003E\r\n  \u003Coption value=\"no\" selected\u003EНет\u003C\u002Foption\u003E\r\n\u003C\u002Fselect\u003E\r\n\u003C\u002Fcenter\u003E\r\n\u003Cp\u003EЕсли видели напишите пожалуйста, какие примеры это были\u003Cp\u003E\r\n\u003Ctextarea name=\"prime_example\" cols=\"64\" rows=\"3\"\u003E\u003C\u002Ftextarea\u003E\u003Cp\u003E\r\n\u003Ccenter\u003E\u003Cbutton type=\"submit\" class=\"custom-btn btn-3\"\u003E\u003Cspan\u003EДалее\u003C\u002Fspan\u003E\u003C\u002Fbutton\u003E\u003C\u002Fcenter\u003E\r\n\u003C\u002Fdiv\u003E\r\n\u003C\u002Fcenter\u003E\r\n",
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
      "title": "Проверка_на_бессознательность",
      "tardy": true
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "required": true,
          "type": "html",
          "content": "\u003Ccenter\u003E\r\n\u003Cdiv class=\"detect_card\" style=\"text-align: left; width: ${ sizes.card_width }px; height:  350px\"\u003E\r\n\u003Clabel for=\"sex\"\u003EПожалуйста, укажите свой пол:\u003C\u002Flabel\u003E\u003Cbr\u003E\r\n  \u003Cselect class=\"custom-btn custom_select\" name=\"sex\"\u003E\r\n  \u003Coption value=\"m\" selected\u003Eмужской\u003C\u002Foption\u003E\r\n  \u003Coption value=\"f\"\u003Eженский\u003C\u002Foption\u003E\r\n\u003C\u002Fselect\u003E\u003Cbr\u003E\r\n\u003Clabel for=\"age\"\u003EВведите возраст:\u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\u003Cinput type=\"number\" id=\"age\" name=\"age\"\r\n       min=\"10\" max=\"90\" required\u003E\u003Cbr\u003E\r\n\r\n\u003Ccenter\u003E\u003Cbutton type=\"submit\" class=\"custom-btn btn-3\"\u003E\u003Cspan\u003EОтправить\u003C\u002Fspan\u003E\u003C\u002Fbutton\u003E\r\n\u003C\u002Fcenter\u003E\r\n\u003C\u002Fdiv\u003E\r\n\u003C\u002Fcenter\u003E",
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
      "title": "Анкета",
      "tardy": true
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "type": "text",
          "content": "\u003Ccenter\u003E\n\u003Cdiv class=\"detect_card\" style=\"text-align: left; width: ${ sizes.card_width }px; height:  200px\"\u003E\n\u003Ch3\u003EБлагодарим за участие в эксперименте!\u003C\u002Fh3\u003E\n\u003Cp\u003EКоличество правильных ответов: ${ right_answers }. Количество неправильных: ${ wrong_answers }.\n\u003C\u002Fdiv\u003E\n\u003C\u002Fcenter\u003E"
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
        "before:prepare": function anonymous(
) {
stimules.send_form(
  this, 
  ["Стимулы *код", "Проверка_на_бессознательность", "Анкета"], 
  [
    ['group', seq_n],
  ]
)
stimules.count_result(["Стимулы *код"])
}
      },
      "title": "Финал *код",
      "timeout": "100",
      "tardy": true
    }
  ]
})

// Let's go!
study.run()