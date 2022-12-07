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
                "left": "-1",
                "top": "-7",
                "angle": 0,
                "width": 124.58,
                "height": 31.64,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "black",
                "text": "########",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "28",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "i-text",
                "left": "-6",
                "top": 0,
                "angle": 0,
                "width": 124.58,
                "height": 31.64,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "black",
                "text": "########",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "28",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "i-text",
                "left": "2",
                "top": "5",
                "angle": 0,
                "width": 124.58,
                "height": 31.64,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "black",
                "text": "########",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "28",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "i-text",
                "left": -12,
                "top": -10.97,
                "angle": 0,
                "width": 124.58,
                "height": 31.64,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "black",
                "text": "########",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "28",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "i-text",
                "left": -13.01,
                "top": 12.02,
                "angle": 0,
                "width": 124.58,
                "height": 31.64,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "black",
                "text": "########",
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
            "title": "mask",
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
            "timeout": "1000",
            "tardy": true
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
            "tardy": true,
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
        "n": "${  Object.keys(window.main.prime).length }"
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
                "left": "-1",
                "top": "-7",
                "angle": 0,
                "width": 124.58,
                "height": 31.64,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "black",
                "text": "########",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "28",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "i-text",
                "left": "-6",
                "top": 0,
                "angle": 0,
                "width": 124.58,
                "height": 31.64,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "black",
                "text": "########",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "28",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "i-text",
                "left": "2",
                "top": "5",
                "angle": 0,
                "width": 124.58,
                "height": 31.64,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "black",
                "text": "########",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "28",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "i-text",
                "left": -12,
                "top": -10.97,
                "angle": 0,
                "width": 124.58,
                "height": 31.64,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "black",
                "text": "########",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "28",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "i-text",
                "left": -13.01,
                "top": 12.02,
                "angle": 0,
                "width": 124.58,
                "height": 31.64,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "black",
                "text": "########",
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
            "title": "mask",
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
                "width": 578.2,
                "height": 31.64,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "black",
                "text": "${ window.main.prime[parameters.counter+1] }",
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
            "timeout": "33",
            "tardy": true
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "i-text",
                "left": "-1",
                "top": "-7",
                "angle": 0,
                "width": 124.58,
                "height": 31.64,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "black",
                "text": "########",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "28",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "i-text",
                "left": "-6",
                "top": 0,
                "angle": 0,
                "width": 124.58,
                "height": 31.64,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "black",
                "text": "########",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "28",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "i-text",
                "left": "2",
                "top": "5",
                "angle": 0,
                "width": 124.58,
                "height": 31.64,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "black",
                "text": "########",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "28",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "i-text",
                "left": -12,
                "top": -10.97,
                "angle": 0,
                "width": 124.58,
                "height": 31.64,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "black",
                "text": "########",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "28",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "i-text",
                "left": -13.01,
                "top": 12.02,
                "angle": 0,
                "width": 124.58,
                "height": 31.64,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "black",
                "text": "########",
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
            "timeout": "400",
            "tardy": true
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
                "left": "-1",
                "top": "-7",
                "angle": 0,
                "width": 124.58,
                "height": 31.64,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "black",
                "text": "########",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "28",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "i-text",
                "left": "-6",
                "top": 0,
                "angle": 0,
                "width": 124.58,
                "height": 31.64,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "black",
                "text": "########",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "28",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "i-text",
                "left": "2",
                "top": "5",
                "angle": 0,
                "width": 124.58,
                "height": 31.64,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "black",
                "text": "########",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "28",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "i-text",
                "left": -12,
                "top": -10.97,
                "angle": 0,
                "width": 124.58,
                "height": 31.64,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "black",
                "text": "########",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "28",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "i-text",
                "left": -13.01,
                "top": 12.02,
                "angle": 0,
                "width": 124.58,
                "height": 31.64,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "black",
                "text": "########",
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
            "title": "mask",
            "timeout": "50"
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
            "timeout": "33",
            "tardy": true
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "i-text",
                "left": "-1",
                "top": "-7",
                "angle": 0,
                "width": 124.58,
                "height": 31.64,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "black",
                "text": "########",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "28",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "i-text",
                "left": "-6",
                "top": 0,
                "angle": 0,
                "width": 124.58,
                "height": 31.64,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "black",
                "text": "########",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "28",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "i-text",
                "left": "2",
                "top": "5",
                "angle": 0,
                "width": 124.58,
                "height": 31.64,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "black",
                "text": "########",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "28",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "i-text",
                "left": -12,
                "top": -10.97,
                "angle": 0,
                "width": 124.58,
                "height": 31.64,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "black",
                "text": "########",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "28",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              },
              {
                "type": "i-text",
                "left": -13.01,
                "top": 12.02,
                "angle": 0,
                "width": 124.58,
                "height": 31.64,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "black",
                "text": "########",
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
            "title": "mask",
            "timeout": "50"
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
            "timeout": "7000",
            "tardy": true
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
            "skip": "${ window.main.last_time \u003C window.test.answer_time }",
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
          "content": "\u003Cdiv class=\"feedback_form\"\u003E\r\n  \u003Cdiv class=\"item\"\u003E1. 12 + 25  | ${ 12 + 25 } | ${ window.main.get_answer(\"12 + 25\")} | ${ (12 + 25) ==  window.main.get_answer(\"12 + 25\") } | \u003Cinput type=\"text\" name=\"feedback_1\" placeholder=\"комментарий\"\u003E\u003C\u002Fdiv\u003E\r\n  \u003Cdiv class=\"item\"\u003E2. 17 + 12  | ${ 17 + 12 } | ${ window.main.get_answer(\"17 + 12\")} | ${ (17 + 12) ==  window.main.get_answer(\"17 + 12\") } | \u003Cinput type=\"text\" name=\"feedback_2\" placeholder=\"комментарий\"\u003E\u003C\u002Fdiv\u003E\r\n  \u003Cdiv class=\"item\"\u003E3. 19 + 27  | ${ 19 + 27 } | ${ window.main.get_answer(\"19 + 27\")} | ${ (19 + 27) ==  window.main.get_answer(\"19 + 27\") } | \u003Cinput type=\"text\" name=\"feedback_3\" placeholder=\"комментарий\"\u003E\u003C\u002Fdiv\u003E\r\n  \u003Cdiv class=\"item\"\u003E4. 15 + 16  | ${ 15 + 16 } | ${ window.main.get_answer(\"15 + 16\")} | ${ (15 + 16) ==  window.main.get_answer(\"15 + 16\") } | \u003Cinput type=\"text\" name=\"feedback_4\" placeholder=\"комментарий\"\u003E\u003C\u002Fdiv\u003E\r\n  \u003Cdiv class=\"item\"\u003E5. 30 + 22  | ${ 30 + 22 } | ${ window.main.get_answer(\"30 + 22\")} | ${ (30 + 22) ==  window.main.get_answer(\"30 + 22\") } | \u003Cinput type=\"text\" name=\"feedback_5\" placeholder=\"комментарий\"\u003E\u003C\u002Fdiv\u003E\r\n  \u003Cdiv class=\"item\"\u003E6. 22 + 51  | ${ 22 + 51 } | ${ window.main.get_answer(\"22 + 51\")} | ${ (22 + 51) ==  window.main.get_answer(\"22 + 51\") } | \u003Cinput type=\"text\" name=\"feedback_6\" placeholder=\"комментарий\"\u003E\u003C\u002Fdiv\u003E\r\n  \u003Cdiv class=\"item\"\u003E7. 20 + 48  | ${ 20 + 48 } | ${ window.main.get_answer(\"20 + 48\")} | ${ (20 + 48) ==  window.main.get_answer(\"20 + 48\") } | \u003Cinput type=\"text\" name=\"feedback_7\" placeholder=\"комментарий\"\u003E\u003C\u002Fdiv\u003E\r\n  \u003Cdiv class=\"item\"\u003E8. 39 + 23  | ${ 39 + 23 } | ${ window.main.get_answer(\"39 + 23\")} | ${ (39 + 23) ==  window.main.get_answer(\"39 + 23\") } | \u003Cinput type=\"text\" name=\"feedback_8\" placeholder=\"комментарий\"\u003E\u003C\u002Fdiv\u003E\r\n  \u003Cdiv class=\"item\"\u003E9. 32 + 50  | ${ 32 + 50 } | ${ window.main.get_answer(\"32 + 50\")} | ${ (32 + 50) ==  window.main.get_answer(\"32 + 50\") } | \u003Cinput type=\"text\" name=\"feedback_9\" placeholder=\"комментарий\"\u003E\u003C\u002Fdiv\u003E\r\n  \u003Cdiv class=\"item\"\u003E10. 59 + 34 |  ${ 59 + 34 } | ${window.main.get_answer(\"59 + 34\")} | ${ 59 + 34 == window.main.get_answer(\"59 + 34\") } | \u003Cinput type=\"text\" name=\"feedback_10\" placeholder=\"комментарий\"\u003E\u003C\u002Fdiv\u003E\r\n  \u003Cdiv class=\"item\"\u003E11. 16 + 50 |  ${ 16 + 50 } | ${window.main.get_answer(\"16 + 50\")} | ${ 16 + 50 == window.main.get_answer(\"16 + 50\") } | \u003Cinput type=\"text\" name=\"feedback_11\" placeholder=\"комментарий\"\u003E\u003C\u002Fdiv\u003E\r\n  \u003Cdiv class=\"item\"\u003E12. 39 + 48 |  ${ 39 + 48 } | ${window.main.get_answer(\"39 + 48\")} | ${ 39 + 48 == window.main.get_answer(\"39 + 48\") } | \u003Cinput type=\"text\" name=\"feedback_12\" placeholder=\"комментарий\"\u003E\u003C\u002Fdiv\u003E\r\n  \u003Cdiv class=\"item\"\u003E13. 29 + 40 |  ${ 29 + 40 } | ${window.main.get_answer(\"29 + 40\")} | ${ 29 + 40 == window.main.get_answer(\"29 + 40\") } | \u003Cinput type=\"text\" name=\"feedback_13\" placeholder=\"комментарий\"\u003E\u003C\u002Fdiv\u003E\r\n  \u003Cdiv class=\"item\"\u003E14. 36 + 58 |  ${ 36 + 58 } | ${window.main.get_answer(\"36 + 58\")} | ${ 36 + 58 == window.main.get_answer(\"36 + 58\") } | \u003Cinput type=\"text\" name=\"feedback_14\" placeholder=\"комментарий\"\u003E\u003C\u002Fdiv\u003E\r\n  \u003Cdiv class=\"item\"\u003E15. 54 + 38 |  ${ 54 + 38 } | ${window.main.get_answer(\"54 + 38\")} | ${ 54 + 38 == window.main.get_answer(\"54 + 38\") } | \u003Cinput type=\"text\" name=\"feedback_15\" placeholder=\"комментарий\"\u003E\u003C\u002Fdiv\u003E\r\n  \u003Cdiv class=\"item\"\u003E16. 22 + 76 |  ${ 22 + 76 } | ${window.main.get_answer(\"22 + 76\")} | ${ 22 + 76 == window.main.get_answer(\"22 + 76\") } | \u003Cinput type=\"text\" name=\"feedback_16\" placeholder=\"комментарий\"\u003E\u003C\u002Fdiv\u003E\r\n  \u003Cdiv class=\"item\"\u003E17. 51 + 43 |  ${ 51 + 43 } | ${window.main.get_answer(\"51 + 43\")} | ${ 51 + 43 == window.main.get_answer(\"51 + 43\") } | \u003Cinput type=\"text\" name=\"feedback_17\" placeholder=\"комментарий\"\u003E\u003C\u002Fdiv\u003E\r\n  \u003Cdiv class=\"item\"\u003E18. 53 + 19 |  ${ 53 + 19 } | ${window.main.get_answer(\"53 + 19\")} | ${ 53 + 19 == window.main.get_answer(\"53 + 19\") } | \u003Cinput type=\"text\" name=\"feedback_18\" placeholder=\"комментарий\"\u003E\u003C\u002Fdiv\u003E\r\n  \u003Cdiv class=\"item\"\u003E19. 28 + 22 |  ${ 28 + 22 } | ${window.main.get_answer(\"28 + 22\")} | ${ 28 + 22 == window.main.get_answer(\"28 + 22\") } | \u003Cinput type=\"text\" name=\"feedback_19\" placeholder=\"комментарий\"\u003E\u003C\u002Fdiv\u003E\r\n  \u003Cdiv class=\"item\"\u003E20. 15 + 58 |  ${ 15 + 58 } | ${window.main.get_answer(\"15 + 58\")} | ${ 15 + 58 == window.main.get_answer(\"15 + 58\") } | \u003Cinput type=\"text\" name=\"feedback_20\" placeholder=\"комментарий\"\u003E\u003C\u002Fdiv\u003E\r\n  \u003Cdiv class=\"item\"\u003E21. 25 + 53 |  ${ 25 + 53 } | ${window.main.get_answer(\"25 + 53\")} | ${ 25 + 53 == window.main.get_answer(\"25 + 53\") } | \u003Cinput type=\"text\" name=\"feedback_21\" placeholder=\"комментарий\"\u003E\u003C\u002Fdiv\u003E\r\n  \u003Cdiv class=\"item\"\u003E22. 44 + 38 |  ${ 44 + 38 } | ${window.main.get_answer(\"44 + 38\")} | ${ 44 + 38 == window.main.get_answer(\"44 + 38\") } | \u003Cinput type=\"text\" name=\"feedback_22\" placeholder=\"комментарий\"\u003E\u003C\u002Fdiv\u003E\r\n  \u003Cdiv class=\"item\"\u003E23. 11 + 27 |  ${ 11 + 27 } | ${window.main.get_answer(\"11 + 27\")} | ${ 11 + 27 == window.main.get_answer(\"11 + 27\") } | \u003Cinput type=\"text\" name=\"feedback_23\" placeholder=\"комментарий\"\u003E\u003C\u002Fdiv\u003E\r\n  \u003Cdiv class=\"item\"\u003E24. 50 + 29 |  ${ 50 + 29 } | ${window.main.get_answer(\"50 + 29\")} | ${ 50 + 29 == window.main.get_answer(\"50 + 29\") } | \u003Cinput type=\"text\" name=\"feedback_24\" placeholder=\"комментарий\"\u003E\u003C\u002Fdiv\u003E\r\n  \u003Cdiv class=\"item\"\u003E25. 22 + 16 |  ${ 22 + 16 } | ${window.main.get_answer(\"22 + 16\")} | ${ 22 + 16 == window.main.get_answer(\"22 + 16\") } | \u003Cinput type=\"text\" name=\"feedback_25\" placeholder=\"комментарий\"\u003E\u003C\u002Fdiv\u003E\r\n  \u003Cdiv class=\"item\"\u003E26. 56 + 29 |  ${ 56 + 29 } | ${window.main.get_answer(\"56 + 29\")} | ${ 56 + 29 == window.main.get_answer(\"56 + 29\") } | \u003Cinput type=\"text\" name=\"feedback_26\" placeholder=\"комментарий\"\u003E\u003C\u002Fdiv\u003E\r\n  \u003Cdiv class=\"item\"\u003E27. 26 + 72 |  ${ 26 + 72 } | ${window.main.get_answer(\"26 + 72\")} | ${ 26 + 72 == window.main.get_answer(\"26 + 72\") } | \u003Cinput type=\"text\" name=\"feedback_27\" placeholder=\"комментарий\"\u003E\u003C\u002Fdiv\u003E\r\n  \u003Cdiv class=\"item\"\u003E28. 67 + 19 |  ${ 67 + 19 } | ${window.main.get_answer(\"67 + 19\")} | ${ 67 + 19 == window.main.get_answer(\"67 + 19\") } | \u003Cinput type=\"text\" name=\"feedback_28\" placeholder=\"комментарий\"\u003E\u003C\u002Fdiv\u003E\r\n  \u003Cdiv class=\"item\"\u003E29. 27 + 35 |  ${ 27 + 35 } | ${window.main.get_answer(\"27 + 35\")} | ${ 27 + 35 == window.main.get_answer(\"27 + 35\") } | \u003Cinput type=\"text\" name=\"feedback_29\" placeholder=\"комментарий\"\u003E\u003C\u002Fdiv\u003E\r\n  \u003Cdiv class=\"item\"\u003E30. 48 + 25 |  ${ 48 + 25 } | ${window.main.get_answer(\"48 + 25\")} | ${ 48 + 25 == window.main.get_answer(\"48 + 25\") } | \u003Cinput type=\"text\" name=\"feedback_30\" placeholder=\"комментарий\"\u003E\u003C\u002Fdiv\u003E\r\n  \u003Cdiv class=\"item\"\u003E31. 46 + 17 |  ${ 46 + 17 } | ${window.main.get_answer(\"46 + 17\")} | ${ 46 + 17 == window.main.get_answer(\"46 + 17\") } | \u003Cinput type=\"text\" name=\"feedback_31\" placeholder=\"комментарий\"\u003E\u003C\u002Fdiv\u003E\r\n  \u003Cdiv class=\"item\"\u003E32. 56 + 38 |  ${ 56 + 38 } | ${window.main.get_answer(\"56 + 38\")} | ${ 56 + 38 == window.main.get_answer(\"56 + 38\") } | \u003Cinput type=\"text\" name=\"feedback_32\" placeholder=\"комментарий\"\u003E\u003C\u002Fdiv\u003E\r\n  \u003Cdiv class=\"item\"\u003E33. 35 + 33 |  ${ 35 + 33 } | ${window.main.get_answer(\"35 + 33\")} | ${ 35 + 33 == window.main.get_answer(\"35 + 33\") } | \u003Cinput type=\"text\" name=\"feedback_33\" placeholder=\"комментарий\"\u003E\u003C\u002Fdiv\u003E\r\n  \u003Cdiv class=\"item\"\u003E34. 46 + 43 |  ${ 46 + 43 } | ${window.main.get_answer(\"46 + 43\")} | ${ 46 + 43 == window.main.get_answer(\"46 + 43\") } | \u003Cinput type=\"text\" name=\"feedback_34\" placeholder=\"комментарий\"\u003E\u003C\u002Fdiv\u003E\r\n  \u003Cdiv class=\"item\"\u003E35. 39 + 60 |  ${ 39 + 60 } | ${window.main.get_answer(\"39 + 60\")} | ${ 39 + 60 == window.main.get_answer(\"39 + 60\") } | \u003Cinput type=\"text\" name=\"feedback_35\" placeholder=\"комментарий\"\u003E\u003C\u002Fdiv\u003E\r\n  \u003Cdiv class=\"item\"\u003E36. 17 + 30 |  ${ 17 + 30 } | ${window.main.get_answer(\"17 + 30\")} | ${ 17 + 30 == window.main.get_answer(\"17 + 30\") } | \u003Cinput type=\"text\" name=\"feedback_36\" placeholder=\"комментарий\"\u003E\u003C\u002Fdiv\u003E\r\n  \u003Cdiv class=\"item\"\u003E37. 36 + 44 |  ${ 36 + 44 } | ${window.main.get_answer(\"36 + 44\")} | ${ 36 + 44 == window.main.get_answer(\"36 + 44\") } | \u003Cinput type=\"text\" name=\"feedback_37\" placeholder=\"комментарий\"\u003E\u003C\u002Fdiv\u003E\r\n  \u003Cdiv class=\"item\"\u003E38. 13 + 75 |  ${ 13 + 75 } | ${window.main.get_answer(\"13 + 75\")} | ${ 13 + 75 == window.main.get_answer(\"13 + 75\") } | \u003Cinput type=\"text\" name=\"feedback_38\" placeholder=\"комментарий\"\u003E\u003C\u002Fdiv\u003E\r\n  \u003Cdiv class=\"item\"\u003E39. 45 + 47 |  ${ 45 + 47 } | ${window.main.get_answer(\"45 + 47\")} | ${ 45 + 47 == window.main.get_answer(\"45 + 47\") } | \u003Cinput type=\"text\" name=\"feedback_39\" placeholder=\"комментарий\"\u003E\u003C\u002Fdiv\u003E\r\n  \u003Cdiv class=\"item\"\u003E40. 44 + 53 |  ${ 44 + 53 } | ${window.main.get_answer(\"44 + 53\")} | ${ 44 + 53 == window.main.get_answer(\"44 + 53\") } | \u003Cinput type=\"text\" name=\"feedback_40\" placeholder=\"комментарий\"\u003E\u003C\u002Fdiv\u003E\r\n  \u003Cdiv class=\"item\"\u003E41. 20 + 32 |  ${ 20 + 32 } | ${window.main.get_answer(\"20 + 32\")} | ${ 20 + 32 == window.main.get_answer(\"20 + 32\") } | \u003Cinput type=\"text\" name=\"feedback_41\" placeholder=\"комментарий\"\u003E\u003C\u002Fdiv\u003E\r\n  \u003Cdiv class=\"item\"\u003E42. 71 + 14 |  ${ 71 + 14 } | ${window.main.get_answer(\"71 + 14\")} | ${ 71 + 14 == window.main.get_answer(\"71 + 14\") } | \u003Cinput type=\"text\" name=\"feedback_42\" placeholder=\"комментарий\"\u003E\u003C\u002Fdiv\u003E\r\n  \u003Cdiv class=\"item\"\u003E43. 36 + 39 |  ${ 36 + 39 } | ${window.main.get_answer(\"36 + 39\")} | ${ 36 + 39 == window.main.get_answer(\"36 + 39\") } | \u003Cinput type=\"text\" name=\"feedback_43\" placeholder=\"комментарий\"\u003E\u003C\u002Fdiv\u003E\r\n  \u003Cdiv class=\"item\"\u003E44. 46 + 45 |  ${ 46 + 45 } | ${window.main.get_answer(\"46 + 45\")} | ${ 46 + 45 == window.main.get_answer(\"46 + 45\") } | \u003Cinput type=\"text\" name=\"feedback_44\" placeholder=\"комментарий\"\u003E\u003C\u002Fdiv\u003E\r\n  \u003Cdiv class=\"item\"\u003E45. 46 + 11 |  ${ 46 + 11 } | ${window.main.get_answer(\"46 + 11\")} | ${ 46 + 11 == window.main.get_answer(\"46 + 11\") } | \u003Cinput type=\"text\" name=\"feedback_45\" placeholder=\"комментарий\"\u003E\u003C\u002Fdiv\u003E\r\n  \u003Cdiv class=\"item\"\u003E46. 12 + 49 |  ${ 12 + 49 } | ${window.main.get_answer(\"12 + 49\")} | ${ 12 + 49 == window.main.get_answer(\"12 + 49\") } | \u003Cinput type=\"text\" name=\"feedback_46\" placeholder=\"комментарий\"\u003E\u003C\u002Fdiv\u003E\r\n  \u003Cdiv class=\"item\"\u003E47. 59 + 32 |  ${ 59 + 32 } | ${window.main.get_answer(\"59 + 32\")} | ${ 59 + 32 == window.main.get_answer(\"59 + 32\") } | \u003Cinput type=\"text\" name=\"feedback_47\" placeholder=\"комментарий\"\u003E\u003C\u002Fdiv\u003E\r\n  \u003Cdiv class=\"item\"\u003E48. 49 + 33 |  ${ 49 + 33 } | ${window.main.get_answer(\"49 + 33\")} | ${ 49 + 33 == window.main.get_answer(\"49 + 33\") } | \u003Cinput type=\"text\" name=\"feedback_48\" placeholder=\"комментарий\"\u003E\u003C\u002Fdiv\u003E\r\n  \u003Cdiv class=\"item\"\u003E49. 64 + 27 |  ${ 64 + 27 } | ${window.main.get_answer(\"64 + 27\")} | ${ 64 + 27 == window.main.get_answer(\"64 + 27\") } | \u003Cinput type=\"text\" name=\"feedback_49\" placeholder=\"комментарий\"\u003E\u003C\u002Fdiv\u003E\r\n  \u003Cdiv class=\"item\"\u003E50. 56 + 29 |  ${ 56 + 29 } | ${window.main.get_answer(\"56 + 29\")} | ${ 56 + 29 == window.main.get_answer(\"56 + 29\") } | \u003Cinput type=\"text\" name=\"feedback_50\" placeholder=\"комментарий\"\u003E\u003C\u002Fdiv\u003E\r\n  \u003Cdiv class=\"item\"\u003E51. 79 + 12 |  ${ 79 + 12 } | ${window.main.get_answer(\"79 + 12\")} | ${ 79 + 12 == window.main.get_answer(\"79 + 12\") } | \u003Cinput type=\"text\" name=\"feedback_51\" placeholder=\"комментарий\"\u003E\u003C\u002Fdiv\u003E\r\n  \u003Cdiv class=\"item\"\u003E52. 67 + 17 |  ${ 67 + 17 } | ${window.main.get_answer(\"67 + 17\")} | ${ 67 + 17 == window.main.get_answer(\"67 + 17\") } | \u003Cinput type=\"text\" name=\"feedback_52\" placeholder=\"комментарий\"\u003E\u003C\u002Fdiv\u003E\r\n  \u003Cdiv class=\"item\"\u003E53. 11 + 79 |  ${ 11 + 79 } | ${window.main.get_answer(\"11 + 79\")} | ${ 11 + 79 == window.main.get_answer(\"11 + 79\") } | \u003Cinput type=\"text\" name=\"feedback_53\" placeholder=\"комментарий\"\u003E\u003C\u002Fdiv\u003E\r\n  \u003Cdiv class=\"item\"\u003E54. 52 + 19 |  ${ 52 + 19 } | ${window.main.get_answer(\"52 + 19\")} | ${ 52 + 19 == window.main.get_answer(\"52 + 19\") } | \u003Cinput type=\"text\" name=\"feedback_54\" placeholder=\"комментарий\"\u003E\u003C\u002Fdiv\u003E\r\n  \u003Cdiv class=\"item\"\u003E55. 56 + 29 |  ${ 56 + 29 } | ${window.main.get_answer(\"56 + 29\")} | ${ 56 + 29 == window.main.get_answer(\"56 + 29\") } | \u003Cinput type=\"text\" name=\"feedback_55\" placeholder=\"комментарий\"\u003E\u003C\u002Fdiv\u003E\r\n  \u003Cdiv class=\"item\"\u003E56. 44 + 28 |  ${ 44 + 28 } | ${window.main.get_answer(\"44 + 28\")} | ${ 44 + 28 == window.main.get_answer(\"44 + 28\") } | \u003Cinput type=\"text\" name=\"feedback_56\" placeholder=\"комментарий\"\u003E\u003C\u002Fdiv\u003E\r\n  \u003Cdiv class=\"item\"\u003E57. 66 + 28 |  ${ 66 + 28 } | ${window.main.get_answer(\"66 + 28\")} | ${ 66 + 28 == window.main.get_answer(\"66 + 28\") } | \u003Cinput type=\"text\" name=\"feedback_57\" placeholder=\"комментарий\"\u003E\u003C\u002Fdiv\u003E\r\n  \u003Cdiv class=\"item\"\u003E58. 28 + 26 |  ${ 28 + 26 } | ${window.main.get_answer(\"28 + 26\")} | ${ 28 + 26 == window.main.get_answer(\"28 + 26\") } | \u003Cinput type=\"text\" name=\"feedback_58\" placeholder=\"комментарий\"\u003E\u003C\u002Fdiv\u003E\r\n  \u003Cdiv class=\"item\"\u003E59. 31 + 59 |  ${ 31 + 59 } | ${window.main.get_answer(\"31 + 59\")} | ${ 31 + 59 == window.main.get_answer(\"31 + 59\") } | \u003Cinput type=\"text\" name=\"feedback_59\" placeholder=\"комментарий\"\u003E\u003C\u002Fdiv\u003E\r\n  \u003Cdiv class=\"item\"\u003E60. 17 + 35 |  ${ 17 + 35 } | ${window.main.get_answer(\"17 + 35\")} | ${ 17 + 35 == window.main.get_answer(\"17 + 35\") } | \u003Cinput type=\"text\" name=\"feedback_60\" placeholder=\"комментарий\"\u003E\u003C\u002Fdiv\u003E\r\n  \u003Cdiv class=\"item\"\u003E61. 19 + 15 |  ${ 19 + 15 } | ${window.main.get_answer(\"19 + 15\")} | ${ 19 + 15 == window.main.get_answer(\"19 + 15\") } | \u003Cinput type=\"text\" name=\"feedback_61\" placeholder=\"комментарий\"\u003E\u003C\u002Fdiv\u003E\r\n  \u003Cdiv class=\"item\"\u003E62. 27 + 57 |  ${ 27 + 57 } | ${window.main.get_answer(\"27 + 57\")} | ${ 27 + 57 == window.main.get_answer(\"27 + 57\") } | \u003Cinput type=\"text\" name=\"feedback_62\" placeholder=\"комментарий\"\u003E\u003C\u002Fdiv\u003E\r\n  \u003Cdiv class=\"item\"\u003E63. 47 + 46 |  ${ 47 + 46 } | ${window.main.get_answer(\"47 + 46\")} | ${ 47 + 46 == window.main.get_answer(\"47 + 46\") } | \u003Cinput type=\"text\" name=\"feedback_63\" placeholder=\"комментарий\"\u003E\u003C\u002Fdiv\u003E\r\n  \u003Cdiv class=\"item\"\u003E64. 55 + 18 |  ${ 55 + 18 } | ${window.main.get_answer(\"55 + 18\")} | ${ 55 + 18 == window.main.get_answer(\"55 + 18\") } | \u003Cinput type=\"text\" name=\"feedback_64\" placeholder=\"комментарий\"\u003E\u003C\u002Fdiv\u003E\r\n  \u003Cdiv class=\"item\"\u003E65. 36 + 29 |  ${ 36 + 29 } | ${window.main.get_answer(\"36 + 29\")} | ${ 36 + 29 == window.main.get_answer(\"36 + 29\") } | \u003Cinput type=\"text\" name=\"feedback_65\" placeholder=\"комментарий\"\u003E\u003C\u002Fdiv\u003E\r\n  \u003Cdiv class=\"item\"\u003E66. 67 + 16 |  ${ 67 + 16 } | ${window.main.get_answer(\"67 + 16\")} | ${ 67 + 16 == window.main.get_answer(\"67 + 16\") } | \u003Cinput type=\"text\" name=\"feedback_66\" placeholder=\"комментарий\"\u003E\u003C\u002Fdiv\u003E\r\n  \u003Cdiv class=\"item\"\u003E67. 45 + 46 |  ${ 45 + 46 } | ${window.main.get_answer(\"45 + 46\")} | ${ 45 + 46 == window.main.get_answer(\"45 + 46\") } | \u003Cinput type=\"text\" name=\"feedback_67\" placeholder=\"комментарий\"\u003E\u003C\u002Fdiv\u003E\r\n  \u003Cdiv class=\"item\"\u003E68. 54 + 38 |  ${ 54 + 38 } | ${window.main.get_answer(\"54 + 38\")} | ${ 54 + 38 == window.main.get_answer(\"54 + 38\") } | \u003Cinput type=\"text\" name=\"feedback_68\" placeholder=\"комментарий\"\u003E\u003C\u002Fdiv\u003E\r\n  \u003Cdiv class=\"item\"\u003E69. 24 + 19 |  ${ 24 + 19 } | ${window.main.get_answer(\"24 + 19\")} | ${ 24 + 19 == window.main.get_answer(\"24 + 19\") } | \u003Cinput type=\"text\" name=\"feedback_69\" placeholder=\"комментарий\"\u003E\u003C\u002Fdiv\u003E\r\n  \u003Cdiv class=\"item\"\u003E70. 14 + 78 |  ${ 14 + 78 } | ${window.main.get_answer(\"14 + 78\")} | ${ 14 + 78 == window.main.get_answer(\"14 + 78\") } | \u003Cinput type=\"text\" name=\"feedback_70\" placeholder=\"комментарий\"\u003E\u003C\u002Fdiv\u003E\r\n  \u003Cdiv class=\"item\"\u003E71. 25 + 16 |  ${ 25 + 16 } | ${window.main.get_answer(\"25 + 16\")} | ${ 25 + 16 == window.main.get_answer(\"25 + 16\") } | \u003Cinput type=\"text\" name=\"feedback_71\" placeholder=\"комментарий\"\u003E\u003C\u002Fdiv\u003E\r\n  \u003Cdiv class=\"item\"\u003E72. 13 + 38 |  ${ 13 + 38 } | ${window.main.get_answer(\"13 + 38\")} | ${ 13 + 38 == window.main.get_answer(\"13 + 38\") } | \u003Cinput type=\"text\" name=\"feedback_72\" placeholder=\"комментарий\"\u003E\u003C\u002Fdiv\u003E\r\n  \u003Cdiv class=\"item\"\u003E73. 44 + 18 |  ${ 44 + 18 } | ${window.main.get_answer(\"44 + 18\")} | ${ 44 + 18 == window.main.get_answer(\"44 + 18\") } | \u003Cinput type=\"text\" name=\"feedback_73\" placeholder=\"комментарий\"\u003E\u003C\u002Fdiv\u003E\r\n  \u003Cdiv class=\"item\"\u003E74. 41 + 49 |  ${ 41 + 49 } | ${window.main.get_answer(\"41 + 49\")} | ${ 41 + 49 == window.main.get_answer(\"41 + 49\") } | \u003Cinput type=\"text\" name=\"feedback_74\" placeholder=\"комментарий\"\u003E\u003C\u002Fdiv\u003E\r\n  \u003Cdiv class=\"item\"\u003E75. 27 + 27 |  ${ 27 + 27 } | ${window.main.get_answer(\"27 + 27\")} | ${ 27 + 27 == window.main.get_answer(\"27 + 27\") } | \u003Cinput type=\"text\" name=\"feedback_75\" placeholder=\"комментарий\"\u003E\u003C\u002Fdiv\u003E\r\n  \u003Cdiv class=\"item\"\u003E76. 18 + 17 |  ${ 18 + 17 } | ${window.main.get_answer(\"18 + 17\")} | ${ 18 + 17 == window.main.get_answer(\"18 + 17\") } | \u003Cinput type=\"text\" name=\"feedback_76\" placeholder=\"комментарий\"\u003E\u003C\u002Fdiv\u003E\r\n  \u003Cdiv class=\"item\"\u003E77. 39 + 44 |  ${ 39 + 44 } | ${window.main.get_answer(\"39 + 44\")} | ${ 39 + 44 == window.main.get_answer(\"39 + 44\") } | \u003Cinput type=\"text\" name=\"feedback_77\" placeholder=\"комментарий\"\u003E\u003C\u002Fdiv\u003E\r\n  \u003Cdiv class=\"item\"\u003E78. 49 + 47 |  ${ 49 + 47 } | ${window.main.get_answer(\"49 + 47\")} | ${ 49 + 47 == window.main.get_answer(\"49 + 47\") } | \u003Cinput type=\"text\" name=\"feedback_78\" placeholder=\"комментарий\"\u003E\u003C\u002Fdiv\u003E\r\n  \u003Cdiv class=\"item\"\u003E79. 14 + 67 |  ${ 14 + 67 } | ${window.main.get_answer(\"14 + 67\")} | ${ 14 + 67 == window.main.get_answer(\"14 + 67\") } | \u003Cinput type=\"text\" name=\"feedback_79\" placeholder=\"комментарий\"\u003E\u003C\u002Fdiv\u003E\r\n  \u003Cdiv class=\"item\"\u003E80. 37 + 54 |  ${ 37 + 54 } | ${window.main.get_answer(\"37 + 54\")} | ${ 37 + 54 == window.main.get_answer(\"37 + 54\") } | \u003Cinput type=\"text\" name=\"feedback_80\" placeholder=\"комментарий\"\u003E\u003C\u002Fdiv\u003E\r\n  \u003Cdiv class=\"item\"\u003E81. 25 + 29 |  ${ 25 + 29 } | ${window.main.get_answer(\"25 + 29\")} | ${ 25 + 29 == window.main.get_answer(\"25 + 29\") } | \u003Cinput type=\"text\" name=\"feedback_81\" placeholder=\"комментарий\"\u003E\u003C\u002Fdiv\u003E\r\n  \u003Cdiv class=\"item\"\u003E82. 18 + 48 |  ${ 18 + 48 } | ${window.main.get_answer(\"18 + 48\")} | ${ 18 + 48 == window.main.get_answer(\"18 + 48\") } | \u003Cinput type=\"text\" name=\"feedback_82\" placeholder=\"комментарий\"\u003E\u003C\u002Fdiv\u003E\r\n  \u003Cdiv class=\"item\"\u003E83. 57 + 19 |  ${ 57 + 19 } | ${window.main.get_answer(\"57 + 19\")} | ${ 57 + 19 == window.main.get_answer(\"57 + 19\") } | \u003Cinput type=\"text\" name=\"feedback_83\" placeholder=\"комментарий\"\u003E\u003C\u002Fdiv\u003E\r\n  \u003Cdiv class=\"item\"\u003E84. 23 + 69 |  ${ 23 + 69 } | ${window.main.get_answer(\"23 + 69\")} | ${ 23 + 69 == window.main.get_answer(\"23 + 69\") } | \u003Cinput type=\"text\" name=\"feedback_84\" placeholder=\"комментарий\"\u003E\u003C\u002Fdiv\u003E\r\n  \u003Cdiv class=\"item\"\u003E85. 17 + 37 |  ${ 17 + 37 } | ${window.main.get_answer(\"17 + 37\")} | ${ 17 + 37 == window.main.get_answer(\"17 + 37\") } | \u003Cinput type=\"text\" name=\"feedback_85\" placeholder=\"комментарий\"\u003E\u003C\u002Fdiv\u003E\r\n  \u003Cdiv class=\"item\"\u003E86. 37 + 19 |  ${ 37 + 19 } | ${window.main.get_answer(\"37 + 19\")} | ${ 37 + 19 == window.main.get_answer(\"37 + 19\") } | \u003Cinput type=\"text\" name=\"feedback_86\" placeholder=\"комментарий\"\u003E\u003C\u002Fdiv\u003E\r\n  \u003Cdiv class=\"item\"\u003E87. 11 + 19 |  ${ 11 + 19 } | ${window.main.get_answer(\"11 + 19\")} | ${ 11 + 19 == window.main.get_answer(\"11 + 19\") } | \u003Cinput type=\"text\" name=\"feedback_87\" placeholder=\"комментарий\"\u003E\u003C\u002Fdiv\u003E\r\n  \u003Cdiv class=\"item\"\u003E88. 59 + 32 |  ${ 59 + 32 } | ${window.main.get_answer(\"59 + 32\")} | ${ 59 + 32 == window.main.get_answer(\"59 + 32\") } | \u003Cinput type=\"text\" name=\"feedback_88\" placeholder=\"комментарий\"\u003E\u003C\u002Fdiv\u003E\r\n  \u003Cdiv class=\"item\"\u003E89. 11 + 29 |  ${ 11 + 29 } | ${window.main.get_answer(\"11 + 29\")} | ${ 11 + 29 == window.main.get_answer(\"11 + 29\") } | \u003Cinput type=\"text\" name=\"feedback_89\" placeholder=\"комментарий\"\u003E\u003C\u002Fdiv\u003E\r\n  \u003Cdiv class=\"item\"\u003E90. 27 + 55 |  ${ 27 + 55 } | ${window.main.get_answer(\"27 + 55\")} | ${ 27 + 55 == window.main.get_answer(\"27 + 55\") } | \u003Cinput type=\"text\" name=\"feedback_90\" placeholder=\"комментарий\"\u003E\u003C\u002Fdiv\u003E\r\n  \u003C\u002Fdiv\u003E",
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