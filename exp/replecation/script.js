// Define study
const study = lab.util.fromObject({
  "messageHandlers": {},
  "title": "root",
  "type": "lab.flow.Sequence",
  "plugins": [
    {
      "type": "lab.plugins.Metadata",
      "path": undefined
    },
    {
      "type": "lab.plugins.Download",
      "filePrefix": "math-task",
      "path": undefined
    }
  ],
  "metadata": {
    "title": "Math task",
    "description": "An implementation of the classic paradigm introduced by Stroop (1935).",
    "repository": "https:\u002F\u002Fgithub.com\u002FFelixHenninger\u002Flab.js\u002Ftree\u002Fmaster\u002Ftasks",
    "contributors": "Felix Henninger \u003Cmailbox@felixhenninger.com\u003E (http:\u002F\u002Ffelixhenninger.com)"
  },
  "parameters": {},
  "files": {},
  "responses": {},
  "content": [
    {
      "type": "lab.html.Form",
      "content": "\u003Cmain class=\"content-horizontal-center content-vertical-center\"\u003E\n  \u003Cdiv class=\"w-l text-left\" style=\"display: block\"\u003E\n    \n    \u003Ch2 class=\"text-center\"\u003EПожалуйста расскажите немного о себе\u003C\u002Fh2\u003E\n    \n    \u003Cform id=\"demography\"\u003E\n      \u003Ctable\u003E\n        \u003C!-- name --\u003E\n        \u003Ctr class=\"font-weight-bold\"\u003E\n          \u003Ctd\u003E\n            Как к вам обращаться?\n          \u003C\u002Ftd\u003E\n          \u003Ctd\u003E\n            \u003Cinput name=\"name\" autofocus required class=\"w-100\" placeholder=\"например, Костя А\" value=\"test\"\u003E\n          \u003C\u002Ftd\u003E\n        \u003C\u002Ftr\u003E\n        \u003C!-- Age --\u003E\n        \u003Ctr style=\"height: 50px\"\u003E\n          \u003Ctd class=\"font-weight-bold\"\u003E\n            Сколько вам лет?\n          \u003C\u002Ftd\u003E \n          \u003Ctd\u003E\n            \u003Cinput name=\"age\" type=\"number\" value=\"1\" required class=\"w-100\"\u003E\n          \u003C\u002Ftd\u003E\n        \u003C\u002Ftr\u003E\n        \n        \u003C!-- Gender identity, following Tate et al. (2013) --\u003E\n        \u003Ctr style=\"height: 100px\"\u003E\n          \u003Ctd class=\"font-weight-bold\"\u003E\n            Какого вы пола?\n          \u003C\u002Ftd\u003E\n          \u003Ctd\u003E\n            \u003Cselect name=\"gender\" required class=\"w-100\"\u003E\n              \u003Coption value=\"\"\u003E\n                -- Нажмите чтобы выбрать --\n              \u003C\u002Foption\u003E\n              \u003Coption value=\"male\" selected\u003EМужского\u003C\u002Foption\u003E\n              \u003Coption value=\"female\"\u003EЖенского\u003C\u002Foption\u003E\n            \u003C\u002Fselect\u003E\n          \u003C\u002Ftd\u003E\n        \u003C\u002Ftr\u003E\n        \n        \u003C!-- Sequence --\u003E\n        \u003Ctr style=\"height: 100px\"\u003E\n          \u003Ctd class=\"font-weight-bold\"\u003E\n            Какое исследование будете проходить (вам скажет исследователь)?\n          \u003C\u002Ftd\u003E\n          \u003Ctd\u003E\n            \u003Cselect name=\"sequence\" required class=\"w-100\"\u003E\n              \u003Coption value=\"\"\u003E\n                -- Нажмите чтобы выбрать --\n              \u003C\u002Foption\u003E\n              \u003Coption value=\"1\" selected\u003EИсследование 1\u003C\u002Foption\u003E\n              \u003Coption value=\"2\"\u003EИсследование 2\u003C\u002Foption\u003E\n            \u003C\u002Fselect\u003E\n          \u003C\u002Ftd\u003E\n        \u003C\u002Ftr\u003E\n         \u003Ctr style=\"height: 100px\"\u003E\n          \u003Ctd class=\"font-weight-bold\"\u003E\n            Какой вы по счёту участник в исследовании? (вам скажет исследователь)\n          \u003C\u002Ftd\u003E\n          \u003Ctd\u003E\n            \u003Cinput name=\"subject_number\" value=\"1\" type=\"number\" required class=\"w-100\"\u003E\n          \u003C\u002Ftd\u003E\n        \u003C\u002Ftr\u003E\n\n        \u003C!-- Education --\u003E\n        \u003Ctr style=\"height: 100px\"\u003E\n          \u003Ctd\u003E\n            На какой степени образования вы сейчас?\n          \u003C\u002Ftd\u003E\n          \u003Ctd\u003E\n            \u003Cselect name=\"education\" class=\"w-100\"\u003E\n              \u003Coption value=\"\" selected\u003E\n                -- Нажмите чтобы выбрать --\n              \u003C\u002Foption\u003E\n              \u003Coption value=\"no\"\u003EНет образования\u003C\u002Foption\u003E\n              \u003Coption value=\"highschool\"\u003EСреднее\u003C\u002Foption\u003E\n              \u003Coption value=\"middlespecial\"\u003EСреднее-специальное\u003C\u002Foption\u003E\n              \u003Coption value=\"bachelor\"\u003EБакалавриат\u003C\u002Foption\u003E\n              \u003Coption value=\"specialist\"\u003EСпециалитет\u003C\u002Foption\u003E\n              \u003Coption value=\"master\"\u003EМагистратура\u003C\u002Foption\u003E\n              \u003Coption value=\"phd\"\u003EАспирантура\u003C\u002Foption\u003E\n            \u003C\u002Fselect\u003E\n          \u003C\u002Ftd\u003E\n        \u003C\u002Ftr\u003E\n\n        \u003C!-- Occupation --\u003E\n        \u003Ctr style=\"height: 100px\"\u003E\n          \u003Ctd\u003E\n            Какая у вас профессия?\n          \u003C\u002Ftd\u003E\n          \u003Ctd\u003E\n            \u003Cinput name=\"occupation\" class=\"w-100\" placeholder=\"например, клинический психолог\"\u003E\n          \u003C\u002Ftd\u003E\n        \u003C\u002Ftr\u003E\n\n        \u003C!-- Column balance --\u003E\n        \u003Ccolgroup\u003E\n          \u003Ccol style=\"width: 45%\"\u003E\n          \u003Ccol style=\"width: 65%\"\u003E\n        \u003C\u002Fcolgroup\u003E\n      \u003C\u002Ftable\u003E\n    \u003C\u002Fform\u003E\n  \u003C\u002Fdiv\u003E\n\u003C\u002Fmain\u003E\n\n\u003Cfooter class=\"content-vertical-center content-horizontal-right\"\u003E\n  \u003Cbutton type=\"submit\" form=\"demography\"\u003EДальше &rarr;\u003C\u002Fbutton\u003E\n\u003C\u002Ffooter\u003E",
      "parameters": {},
      "responses": {
        "": ""
      },
      "messageHandlers": {
        "after:end": function anonymous(
) {
load_biography(Object.assign({}, this.data));
}
      },
      "title": "demography_form_develop",
      "files": {},
      "skip": true,
      "plugins": []
    },
    {
      "type": "lab.html.Form",
      "content": "\u003Cmain class=\"content-horizontal-center content-vertical-center\"\u003E\n  \u003Cdiv class=\"w-l text-left\" style=\"display: block\"\u003E\n    \n    \u003Ch2 class=\"text-center\"\u003EПожалуйста расскажите немного о себе\u003C\u002Fh2\u003E\n    \n    \u003Cform id=\"demography\"\u003E\n      \u003Ctable\u003E\n        \u003C!-- name --\u003E\n        \u003Ctr class=\"font-weight-bold\"\u003E\n          \u003Ctd\u003E\n            Как к вам обращаться?\n          \u003C\u002Ftd\u003E\n          \u003Ctd\u003E\n            \u003Cinput name=\"name\" autofocus required class=\"w-100\" placeholder=\"например, Костя А\"\u003E\n          \u003C\u002Ftd\u003E\n        \u003C\u002Ftr\u003E\n        \u003C!-- Age --\u003E\n        \u003Ctr style=\"height: 50px\"\u003E\n          \u003Ctd class=\"font-weight-bold\"\u003E\n            Сколько вам лет?\n          \u003C\u002Ftd\u003E\n          \u003Ctd\u003E\n            \u003Cinput name=\"age\" type=\"number\" required class=\"w-100\"\u003E\n          \u003C\u002Ftd\u003E\n        \u003C\u002Ftr\u003E\n        \n        \u003C!-- Gender identity, following Tate et al. (2013) --\u003E\n        \u003Ctr style=\"height: 100px\"\u003E\n          \u003Ctd class=\"font-weight-bold\"\u003E\n            Какого вы пола?\n          \u003C\u002Ftd\u003E\n          \u003Ctd\u003E\n            \u003Cselect name=\"gender\" required class=\"w-100\"\u003E\n              \u003Coption value=\"\" selected\u003E\n                -- Нажмите чтобы выбрать --\n              \u003C\u002Foption\u003E\n              \u003Coption value=\"male\"\u003EМужского\u003C\u002Foption\u003E\n              \u003Coption value=\"female\"\u003EЖенского\u003C\u002Foption\u003E\n            \u003C\u002Fselect\u003E\n          \u003C\u002Ftd\u003E\n        \u003C\u002Ftr\u003E\n        \n        \u003C!-- Sequence --\u003E\n        \u003Ctr style=\"height: 100px\"\u003E\n          \u003Ctd class=\"font-weight-bold\"\u003E\n            Какое исследование будете проходить (вам скажет исследователь)?\n          \u003C\u002Ftd\u003E\n          \u003Ctd\u003E\n            \u003Cselect name=\"sequence\" required class=\"w-100\"\u003E\n              \u003Coption value=\"\" selected\u003E\n                -- Нажмите чтобы выбрать --\n              \u003C\u002Foption\u003E\n              \u003Coption value=\"1\"\u003EИсследование 1\u003C\u002Foption\u003E\n              \u003Coption value=\"2\"\u003EИсследование 2\u003C\u002Foption\u003E\n            \u003C\u002Fselect\u003E\n          \u003C\u002Ftd\u003E\n        \u003C\u002Ftr\u003E\n         \u003Ctr style=\"height: 100px\"\u003E\n          \u003Ctd class=\"font-weight-bold\"\u003E\n            Какой вы по счёту участник в исследовании? (вам скажет исследователь)\n          \u003C\u002Ftd\u003E\n          \u003Ctd\u003E\n            \u003Cinput name=\"subject_number\" type=\"number\" required class=\"w-100\"\u003E\n          \u003C\u002Ftd\u003E\n        \u003C\u002Ftr\u003E\n\n        \u003C!-- Education --\u003E\n        \u003Ctr style=\"height: 100px\"\u003E\n          \u003Ctd\u003E\n            На какой степени образования вы сейчас?\n          \u003C\u002Ftd\u003E\n          \u003Ctd\u003E\n            \u003Cselect name=\"education\" class=\"w-100\"\u003E\n              \u003Coption value=\"\" selected\u003E\n                -- Нажмите чтобы выбрать --\n              \u003C\u002Foption\u003E\n              \u003Coption value=\"no\"\u003EНет образования\u003C\u002Foption\u003E\n              \u003Coption value=\"highschool\"\u003EСреднее\u003C\u002Foption\u003E\n              \u003Coption value=\"middlespecial\"\u003EСреднее-специальное\u003C\u002Foption\u003E\n              \u003Coption value=\"bachelor\"\u003EБакалавриат\u003C\u002Foption\u003E\n              \u003Coption value=\"specialist\"\u003EСпециалитет\u003C\u002Foption\u003E\n              \u003Coption value=\"master\"\u003EМагистратура\u003C\u002Foption\u003E\n              \u003Coption value=\"phd\"\u003EАспирантура\u003C\u002Foption\u003E\n            \u003C\u002Fselect\u003E\n          \u003C\u002Ftd\u003E\n        \u003C\u002Ftr\u003E\n\n        \u003C!-- Occupation --\u003E\n        \u003Ctr style=\"height: 100px\"\u003E\n          \u003Ctd\u003E\n            Какая у вас профессия?\n          \u003C\u002Ftd\u003E\n          \u003Ctd\u003E\n            \u003Cinput name=\"occupation\" class=\"w-100\" placeholder=\"например, клинический психолог\"\u003E\n          \u003C\u002Ftd\u003E\n        \u003C\u002Ftr\u003E\n\n        \u003C!-- Column balance --\u003E\n        \u003Ccolgroup\u003E\n          \u003Ccol style=\"width: 45%\"\u003E\n          \u003Ccol style=\"width: 65%\"\u003E\n        \u003C\u002Fcolgroup\u003E\n      \u003C\u002Ftable\u003E\n    \u003C\u002Fform\u003E\n  \u003C\u002Fdiv\u003E\n\u003C\u002Fmain\u003E\n\n\u003Cfooter class=\"content-vertical-center content-horizontal-right\"\u003E\n  \u003Cbutton type=\"submit\" form=\"demography\"\u003EДальше &rarr;\u003C\u002Fbutton\u003E\n\u003C\u002Ffooter\u003E",
      "parameters": {},
      "responses": {
        "": ""
      },
      "messageHandlers": {
        "after:end": function anonymous(
) {
load_biography(Object.assign({}, this.data));
}
      },
      "title": "demography_form",
      "files": {},
      "plugins": []
    },
    {
      "type": "lab.canvas.Screen",
      "content": [
        {
          "type": "i-text",
          "left": 0,
          "top": 0,
          "angle": 0,
          "width": 749.2,
          "height": 226.72,
          "stroke": "",
          "strokeWidth": 1,
          "fill": "#000000",
          "text": "Сейчас Вам будут предъявляться арифметические примеры \nна сложение двухзначных чисел. \n\nПри предъявлении примера нужно будет \nввести ответ и нажать клавишу       \n\nВремя ответа ограничено – старайтесь действовать как можно быстрее! \nВначале будет небольшая разминка.",
          "fontStyle": "normal",
          "fontWeight": "normal",
          "fontSize": "22",
          "fontFamily": "sans-serif",
          "lineHeight": 1.16,
          "textAlign": "center"
        },
        {
          "type": "rect",
          "left": 175,
          "top": 13,
          "angle": 0,
          "width": 64.88,
          "height": 27.43,
          "stroke": null,
          "strokeWidth": 1,
          "fill": "black"
        },
        {
          "type": "i-text",
          "left": 175,
          "top": 15,
          "angle": 0,
          "width": 52.58,
          "height": 24.86,
          "stroke": null,
          "strokeWidth": 1,
          "fill": "#ffffff",
          "text": "Enter",
          "fontStyle": "normal",
          "fontWeight": "normal",
          "fontSize": "22",
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
        "keypress(Enter)": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "instruction"
    },
    {
      "type": "lab.flow.Loop",
      "templateParameters": [
        {
          "task_key": "task",
          "": ""
        }
      ],
      "sample": {
        "mode": "sequential",
        "n": "${ window.test.target.length }"
      },
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {
        "before:prepare": function anonymous(
) {
load_test();
}
      },
      "title": "test_part (script)",
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
        "title": "trial",
        "content": [
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "i-text",
                "left": 0,
                "top": "0",
                "angle": 0,
                "width": 30.37,
                "height": 58.76,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "black",
                "text": "+",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "52",
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
            "title": "cross",
            "timeout": "100"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [],
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
            "title": "empty",
            "timeout": "100"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 77.86,
                "height": 31.64,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "black",
                "text": "#####",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "32",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "i-text",
                "left": "-2",
                "top": "-5",
                "angle": 0,
                "width": 88.98,
                "height": 36.16,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "black",
                "text": "#####",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "32",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "i-text",
                "left": "3",
                "top": "7",
                "angle": 0,
                "width": 88.98,
                "height": 36.16,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "black",
                "text": "#####",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "32",
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
            "title": "mask",
            "timeout": "500"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [],
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
            "title": "empty",
            "timeout": "100"
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
                "fill": "black",
                "text": "${ window.test.target[parameters.counter] }",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "${ window.font_size }",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 532.3,
                "height": 31.64,
                "stroke": "",
                "strokeWidth": 1,
                "fill": "black",
                "text": "${ window.test.target[parameters.counter] }",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "28",
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
            "title": "target",
            "timeout": "1000"
          },
          {
            "type": "lab.html.Page",
            "items": [
              {
                "required": true,
                "type": "html",
                "content": "\u003Ccenter\u003E\r\n  \u003Cdiv style=\"font-size: ${ window.get_font_size() }em; margin-top: -3px;\"\u003E${ window.test.target[parameters.counter] }\u003C\u002Fdiv\u003E\r\n  \u003Cinput style=\"position:absolute; margin-left: -100px\" type=\"number\" autofocus required placeholder=\"введите ответ\"\u003E\r\n\u003C\u002Fcenter\u003E\r\n\r\n  ",
                "name": ""
              }
            ],
            "scrollTop": true,
            "submitButtonText": "Дальше →",
            "submitButtonPosition": "hidden",
            "files": {},
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {
              "after:end": function anonymous(
) {
//alert('done')
console.log(window.test.answer_duration) //достать время формы
window.test.answer_duration.push(this.data.duration)
window.test.last_time = window.test.answer_duration[window.test.answer_duration.length - 1] + 50
}
            },
            "title": "answer",
            "timeout": "${ window.test.answer_time }",
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
                "width": 216.55,
                "height": 36.16,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "black",
                "text": "Время вышло!",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": 32,
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": 275,
                "angle": 0,
                "width": 338.3,
                "height": 22.6,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "black",
                "text": "Чтобы продолжить нажмите Enter",
                "fontStyle": "italic",
                "fontWeight": "normal",
                "fontSize": "20",
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
              "keypress(Enter)": "lost_time"
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "time_done",
            "tardy": true,
            "skip": "${ window.test.last_time \u003C window.test.answer_time }"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 348.34,
                "height": 111.37,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "black",
                "text": "Вы ознакомились с процедурой. \n\nРешите ещё несколько примеров \nдля того, чтобы освоиться. ",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "22",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "rect",
                "left": 150,
                "top": 262.96,
                "angle": 0,
                "width": 69.68,
                "height": 32.58,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "black"
              },
              {
                "type": "i-text",
                "left": 150,
                "top": 262,
                "angle": 0,
                "width": 52.58,
                "height": 24.86,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "Enter",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "22",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "i-text",
                "left": -36,
                "top": 262,
                "angle": 0,
                "width": 307.37,
                "height": 24.86,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "black",
                "text": "Чтобы продолжить - нажмите ",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "22",
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
              "keypress(Enter)": "start_test"
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "instruction_after_3_trials",
            "skip": "${ parameters.counter != 2 }"
          }
        ]
      }
    },
    {
      "type": "lab.canvas.Screen",
      "content": [
        {
          "type": "i-text",
          "left": 0,
          "top": 0,
          "angle": 0,
          "width": 566.77,
          "height": 53.7,
          "stroke": null,
          "strokeWidth": 1,
          "fill": "black",
          "text": "Если у вас не осталось вопросов по процедуре, \nто Вы можете перейти к основной части исследования.",
          "fontStyle": "normal",
          "fontWeight": "normal",
          "fontSize": "22",
          "fontFamily": "sans-serif",
          "lineHeight": 1.16,
          "textAlign": "center"
        },
        {
          "type": "rect",
          "left": 150,
          "top": 262.96,
          "angle": 0,
          "width": 69.68,
          "height": 32.58,
          "stroke": null,
          "strokeWidth": 1,
          "fill": "black"
        },
        {
          "type": "i-text",
          "left": 150,
          "top": 262,
          "angle": 0,
          "width": 52.58,
          "height": 24.86,
          "stroke": null,
          "strokeWidth": 1,
          "fill": "#ffffff",
          "text": "Enter",
          "fontStyle": "normal",
          "fontWeight": "normal",
          "fontSize": "22",
          "fontFamily": "sans-serif",
          "lineHeight": 1.16,
          "textAlign": "center"
        },
        {
          "type": "i-text",
          "left": -36,
          "top": 262,
          "angle": 0,
          "width": 307.37,
          "height": 24.86,
          "stroke": null,
          "strokeWidth": 1,
          "fill": "black",
          "text": "Чтобы продолжить - нажмите ",
          "fontStyle": "normal",
          "fontWeight": "normal",
          "fontSize": "22",
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
        "keypress(Enter)": "start_main"
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "instruction",
      "tardy": true
    },
    {
      "type": "lab.flow.Loop",
      "templateParameters": [
        {
          "task_key": "task",
          "": ""
        }
      ],
      "sample": {
        "mode": "sequential",
        "n": "78"
      },
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {
        "before:prepare": function anonymous(
) {
load_main();
console.log(window.main)
}
      },
      "title": "main_part (script)",
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
        "title": "trial",
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
                "stroke": null,
                "strokeWidth": 1,
                "fill": "black",
                "text": "+",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "52",
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
            "title": "cross",
            "timeout": "100"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [],
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
            "title": "empty",
            "timeout": "100"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 689.48,
                "height": 31.64,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "black",
                "text": "${ window.main.get_from_type_2(parameters.counter) }",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "28",
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
            "title": "priming",
            "timeout": "20"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 77.86,
                "height": 31.64,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "black",
                "text": "#####",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "32",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "i-text",
                "left": "-2",
                "top": "-5",
                "angle": 0,
                "width": 88.98,
                "height": 36.16,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "black",
                "text": "#####",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "32",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "i-text",
                "left": "3",
                "top": "7",
                "angle": 0,
                "width": 88.98,
                "height": 36.16,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "black",
                "text": "#####",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "32",
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
            "title": "mask",
            "timeout": "500"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [],
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
            "title": "empty",
            "timeout": "100"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 579.78,
                "height": 31.64,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "black",
                "text": "${ window.main.target[parameters.counter+1] }",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "28",
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
            "title": "target",
            "timeout": "400"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [],
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
            "title": "empty",
            "timeout": "${ window.test.get_duration() }"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 658.34,
                "height": 31.64,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "black",
                "text": "${ window.main.get_from_type(parameters.counter) }",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "28",
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
            "title": "priming",
            "timeout": "20"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 124.58,
                "height": 36.16,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "black",
                "text": "#######",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "32",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "i-text",
                "left": "2",
                "top": "9",
                "angle": 0,
                "width": 124.58,
                "height": 36.16,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "black",
                "text": "#######",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "32",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "i-text",
                "left": "-5",
                "top": "-6",
                "angle": 0,
                "width": 124.58,
                "height": 36.16,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "black",
                "text": "#######",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "32",
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
            "title": "mask",
            "timeout": "60"
          },
          {
            "type": "lab.html.Page",
            "items": [
              {
                "required": true,
                "type": "html",
                "content": "\u003Ccenter\u003E\r\n  \u003Cdiv style=\"font-size: ${ window.get_font_size() }em; margin-top: -3px;\"\u003E${ window.main.target[parameters.counter + 1] }\u003C\u002Fdiv\u003E\r\n  \u003Cinput style=\"position:absolute; margin-left: -100px\" name=\"answer\" type=\"number\" autofocus required placeholder=\"введите ответ\"\u003E\r\n\u003C\u002Fcenter\u003E\r\n\r\n  ",
                "name": ""
              }
            ],
            "scrollTop": true,
            "submitButtonText": "Дальше →",
            "submitButtonPosition": "hidden",
            "files": {},
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {
              "after:end": function anonymous(
) {
//alert('done')
console.log('answer');
console.log(this.parameters.counter+1)
window.main.set_answer(
  window.main.target[this.parameters.counter+1], 
  this.data.answer
)

window.main.answer_duration.push(this.data.duration)
window.main.last_time = window.main.answer_duration[window.main.answer_duration.length - 1] + 50
}
            },
            "title": "answer",
            "timeout": "7000"
          },
          {
            "messageHandlers": {},
            "type": "lab.html.Screen",
            "responses": {
              "keypress(Enter)": "continue"
            },
            "title": "time_end",
            "content": "\u003Cheader class=\"content-vertical-center content-horizontal-center\"\u003E\n  \n\u003C\u002Fheader\u003E\n\u003Cmain\u003E\n  \u003Ccenter\u003E\u003Ch3\u003EВремя вышло!\u003C\u002Fh3\u003E\u003C\u002Fcenter\u003E\n\u003C\u002Fmain\u003E\n\u003Cfooter class=\"content-vertical-center content-horizontal-center\"\u003E\n  Пожалуйста нажмите Enter, чтобы перейти к следующему примеру.\n\u003C\u002Ffooter\u003E\n",
            "parameters": {},
            "files": {},
            "skip": "${ window.main.is_skip() }",
            "tardy": true
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
          "content": "\u003Cdiv class=\"feedback_form\"\u003E\r\n  ${ window.main.get_feedback_form() }\r\n  \u003C\u002Fdiv\u003E",
          "name": ""
        }
      ],
      "scrollTop": true,
      "submitButtonText": "Дальше →",
      "submitButtonPosition": "right",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "feedback_form",
      "tardy": true
    },
    {
      "type": "lab.canvas.Screen",
      "content": [
        {
          "type": "i-text",
          "left": 0,
          "top": -25,
          "angle": 0,
          "width": 538.52,
          "height": 435.37,
          "stroke": null,
          "strokeWidth": 1,
          "fill": "black",
          "text": "В начале каждой пробы перед ###### \nвыводились примеры (например, 8 + 2)\n\n\nСейчас вводите ответ не примера с\nдвухзнанчыми цифрами \n(например, 23 + 34), а примера с\nоднозначными (например, 8 + 2)\n\n\nЕсли вы ничего не увидели - введите 0 в \nполе для ответа",
          "fontStyle": "normal",
          "fontWeight": "normal",
          "fontSize": "28",
          "fontFamily": "sans-serif",
          "lineHeight": 1.16,
          "textAlign": "center"
        },
        {
          "type": "i-text",
          "left": 0,
          "top": 275,
          "angle": 0,
          "width": 511.92,
          "height": 36.16,
          "stroke": null,
          "strokeWidth": 1,
          "fill": "black",
          "text": "Нажмите Enter, чтобы продолжить",
          "fontStyle": "normal",
          "fontWeight": "normal",
          "fontSize": "28",
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
        "keypress(Enter)": "start_check"
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "Instruction"
    },
    {
      "type": "lab.flow.Loop",
      "templateParameters": [
        {
          "task_key": "task",
          "": ""
        }
      ],
      "sample": {
        "mode": "sequential",
        "n": "15"
      },
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {
        "before:prepare": function anonymous(
) {
load_main();
console.log(window.main)
}
      },
      "title": "check_part (script)",
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
        "title": "trial",
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
                "stroke": null,
                "strokeWidth": 1,
                "fill": "black",
                "text": "+",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "52",
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
            "title": "cross",
            "timeout": "100"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [],
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
            "title": "empty",
            "timeout": "100"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 689.48,
                "height": 31.64,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "black",
                "text": "${ window.main.get_from_type_2(parameters.counter) }",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "28",
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
            "title": "priming",
            "timeout": "20"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 77.86,
                "height": 31.64,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "black",
                "text": "#####",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "32",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "i-text",
                "left": "-2",
                "top": "-5",
                "angle": 0,
                "width": 88.98,
                "height": 36.16,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "black",
                "text": "#####",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "32",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "i-text",
                "left": "3",
                "top": "7",
                "angle": 0,
                "width": 88.98,
                "height": 36.16,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "black",
                "text": "#####",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "32",
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
            "title": "mask",
            "timeout": "500"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [],
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
            "title": "empty",
            "timeout": "100"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 579.78,
                "height": 31.64,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "black",
                "text": "${ window.main.target[parameters.counter+1] }",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "28",
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
            "title": "target",
            "timeout": "400"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [],
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
            "title": "empty",
            "timeout": "${ window.test.get_duration() }"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 658.34,
                "height": 31.64,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "black",
                "text": "${ window.main.get_from_type(parameters.counter) }",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "28",
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
            "title": "priming",
            "timeout": "20"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 124.58,
                "height": 36.16,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "black",
                "text": "#######",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "32",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "i-text",
                "left": "2",
                "top": "9",
                "angle": 0,
                "width": 124.58,
                "height": 36.16,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "black",
                "text": "#######",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "32",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "i-text",
                "left": "-5",
                "top": "-6",
                "angle": 0,
                "width": 124.58,
                "height": 36.16,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "black",
                "text": "#######",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "32",
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
            "title": "mask",
            "timeout": "60"
          },
          {
            "type": "lab.html.Page",
            "items": [
              {
                "required": true,
                "type": "html",
                "content": "\u003Ccenter\u003E\r\n  \u003Cinput style=\"position:absolute; margin-left: -100px\" name=\"check_answer\" type=\"number\" autofocus required placeholder=\"введите ответ\"\u003E\r\n\u003C\u002Fcenter\u003E\r\n\r\n  ",
                "name": ""
              }
            ],
            "scrollTop": true,
            "submitButtonText": "Дальше →",
            "submitButtonPosition": "hidden",
            "files": {},
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {
              "after:end": function anonymous(
) {
//alert('done')
console.log('answer');
console.log(this.parameters.counter+1)
window.main.set_answer(
  window.main.target[this.parameters.counter+1], 
  this.data.answer
)

window.main.answer_duration.push(this.data.duration)
window.main.last_time = window.main.answer_duration[window.main.answer_duration.length - 1] + 50
}
            },
            "title": "answer"
          }
        ]
      }
    },
    {
      "type": "lab.html.Form",
      "content": "\u003Cmain class=\"content-horizontal-center content-vertical-center\"\u003E\n  \u003Cdiv class=\"w-l text-left\" style=\"display: block\"\u003E\n    \n    \u003Ch2 class=\"text-center\"\u003EПожалуйста расскажите ещё немного о себе\u003C\u002Fh2\u003E\n    \n    \u003Cform id=\"demography\"\u003E\n      \u003Ctable\u003E\n        \u003C!-- ошибки --\u003E\n        \u003Ctr class=\"font-weight-bold\"\u003E\n          \u003Ctd\u003E\n            Боитесь ли вы допускать ошибки в математических задачах?\n          \u003C\u002Ftd\u003E\n          \u003Ctd\u003E\n            \u003Cinput name=\"fear\" autofocus required class=\"w-100\"\u003E\n          \u003C\u002Ftd\u003E\n        \u003C\u002Ftr\u003E\n        \u003C!-- прилагательные --\u003E\n        \u003Ctr class=\"font-weight-bold\"\u003E\n          \u003Ctd\u003E\n            Опишите математику в трёх прилагательных. \n          \u003C\u002Ftd\u003E\n          \u003Ctd\u003E\n            \u003Cinput name=\"adjectival\" autofocus required class=\"w-100\"\u003E\n          \u003C\u002Ftd\u003E\n        \u003C\u002Ftr\u003E\n        \u003C!-- проверка --\u003E\n        \u003Ctr class=\"font-weight-bold\"\u003E\n          \u003Ctd\u003E\n            Насколько часто вы перепроверяете на ошибки вещи, которые уже сделали? Это проявлялось в текущем исследовании?\n          \u003C\u002Ftd\u003E\n          \u003Ctd\u003E\n            \u003Cinput name=\"checking\" autofocus required class=\"w-100\"\u003E\n          \u003C\u002Ftd\u003E\n        \u003C\u002Ftr\u003E\n        \u003C!-- Column balance --\u003E\n        \u003Ccolgroup\u003E\n          \u003Ccol style=\"width: 45%\"\u003E\n          \u003Ccol style=\"width: 65%\"\u003E\n        \u003C\u002Fcolgroup\u003E\n      \u003C\u002Ftable\u003E\n    \u003C\u002Fform\u003E\n  \u003C\u002Fdiv\u003E\n\u003C\u002Fmain\u003E\n\n\u003Cfooter class=\"content-vertical-center content-horizontal-right\"\u003E\n  \u003Cbutton type=\"submit\" form=\"demography\"\u003EДальше &rarr;\u003C\u002Fbutton\u003E\n\u003C\u002Ffooter\u003E",
      "parameters": {},
      "responses": {
        "": ""
      },
      "messageHandlers": {},
      "title": "biography",
      "files": {},
      "plugins": []
    },
    {
      "type": "lab.canvas.Screen",
      "content": [
        {
          "type": "i-text",
          "left": 0,
          "top": 61,
          "angle": 0,
          "width": 707.09,
          "height": 24.86,
          "stroke": "",
          "strokeWidth": 1,
          "fill": "#000000",
          "text": "Большое спасибо за участие в эксперименте и проделанную работу!",
          "fontStyle": "normal",
          "fontWeight": "normal",
          "fontSize": "22",
          "fontFamily": "sans-serif",
          "lineHeight": 1.16,
          "textAlign": "center"
        },
        {
          "type": "i-text",
          "left": 0,
          "top": 0,
          "angle": 0,
          "width": 228.53,
          "height": 36.16,
          "stroke": null,
          "strokeWidth": 1,
          "fill": "black",
          "text": "НА ЭТОМ ВСЁ!",
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
        "keypress(Enter)": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "thx",
      "timeout": "60"
    }
  ]
})

// Let's go!
study.run()