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
      "filePrefix": "colb-task",
      "path": undefined
    }
  ],
  "metadata": {
    "title": "Colb task",
    "description": "An implementation of the classic paradigm introduced by Stroop (1935).",
    "repository": "https:\u002F\u002Fgithub.com\u002FFelixHenninger\u002Flab.js\u002Ftree\u002Fmaster\u002Ftasks",
    "contributors": "Felix Henninger \u003Cmailbox@felixhenninger.com\u003E (http:\u002F\u002Ffelixhenninger.com)"
  },
  "parameters": {},
  "files": {},
  "responses": {},
  "content": [
    {
      "type": "lab.canvas.Screen",
      "content": [
        {
          "type": "i-text",
          "left": 0,
          "top": -25,
          "angle": 0,
          "width": 615.95,
          "height": 284.4,
          "stroke": null,
          "strokeWidth": 1,
          "fill": "black",
          "text": "Здравствуйте.\n\nСпасибо, что согласились принять участие в исследовании!\n\n\nЯ изучаю особенности зрительного восприятия объема.\n\n\nПеред началом исследования необходимо \nзаполнить небольшую форму.",
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
          "left": 152,
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
          "width": 313.48,
          "height": 24.86,
          "stroke": null,
          "strokeWidth": 1,
          "fill": "black",
          "text": "Чтобы продолжить, - нажмите ",
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
      "title": "instruction"
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
      "skip": true,
      "plugins": []
    },
    {
      "type": "lab.html.Form",
      "content": "\u003Cmain class=\"content-horizontal-center content-vertical-center\"\u003E\n  \u003Cdiv class=\"w-l text-left\" style=\"display: block\"\u003E\n    \n    \u003Ch2 class=\"text-center\"\u003EПожалуйста расскажите немного о себе\u003C\u002Fh2\u003E\n    \n    \u003Cform id=\"demography\"\u003E\n      \u003Ctable\u003E\n        \u003C!-- name --\u003E\n        \u003Ctr class=\"font-weight-bold\"\u003E\n          \u003Ctd\u003E\n            Как к вам обращаться?\n          \u003C\u002Ftd\u003E\n          \u003Ctd\u003E\n            \u003Cinput name=\"name\" autofocus required class=\"w-100\" placeholder=\"например, Костя А\" value=\"test\"\u003E\n          \u003C\u002Ftd\u003E\n        \u003C\u002Ftr\u003E\n        \u003C!-- Age --\u003E\n        \u003Ctr style=\"height: 50px\"\u003E\n          \u003Ctd class=\"font-weight-bold\"\u003E\n            Сколько вам лет?\n          \u003C\u002Ftd\u003E \n          \u003Ctd\u003E\n            \u003Cinput name=\"age\" type=\"number\" value=\"1\" required class=\"w-100\"\u003E\n          \u003C\u002Ftd\u003E\n        \u003C\u002Ftr\u003E\n        \n        \u003C!-- Gender identity, following Tate et al. (2013) --\u003E\n        \u003Ctr style=\"height: 100px\"\u003E\n          \u003Ctd class=\"font-weight-bold\"\u003E\n            Какого вы пола?\n          \u003C\u002Ftd\u003E\n          \u003Ctd\u003E\n            \u003Cselect name=\"gender\" required class=\"w-100\"\u003E\n              \u003Coption value=\"\"\u003E\n                -- Нажмите чтобы выбрать --\n              \u003C\u002Foption\u003E\n              \u003Coption value=\"male\" selected\u003EМужского\u003C\u002Foption\u003E\n              \u003Coption value=\"female\"\u003EЖенского\u003C\u002Foption\u003E\n            \u003C\u002Fselect\u003E\n          \u003C\u002Ftd\u003E\n        \u003C\u002Ftr\u003E\n        \n        \u003C!-- Sequence --\u003E\n        \u003Ctr style=\"height: 100px; display: none;\" \u003E\n          \u003Ctd class=\"font-weight-bold\"\u003E\n            Какое исследование будете проходить (вам скажет исследователь)?\n          \u003C\u002Ftd\u003E\n          \u003Ctd\u003E\n            \u003Cselect name=\"sequence\" required class=\"w-100\"\u003E\n              \u003Coption value=\"\"\u003E\n                -- Нажмите чтобы выбрать --\n              \u003C\u002Foption\u003E\n              \u003Coption value=\"1\" selected\u003EИсследование 1\u003C\u002Foption\u003E\n              \u003Coption value=\"2\"\u003EИсследование 2\u003C\u002Foption\u003E\n            \u003C\u002Fselect\u003E\n          \u003C\u002Ftd\u003E\n        \u003C\u002Ftr\u003E\n         \u003Ctr style=\"height: 100px\"\u003E\n          \u003Ctd class=\"font-weight-bold\"\u003E\n            Напишите любое число от 1 до 50. \n          \u003C\u002Ftd\u003E\n          \u003Ctd\u003E\n            \u003Cinput name=\"subject_number\" value=\"1\" type=\"number\" required class=\"w-100\"\u003E\n          \u003C\u002Ftd\u003E\n        \u003C\u002Ftr\u003E\n\n        \u003C!-- Education --\u003E\n        \u003Ctr style=\"height: 100px\"\u003E\n          \u003Ctd\u003E\n            На какой степени образования вы сейчас?\n          \u003C\u002Ftd\u003E\n          \u003Ctd\u003E\n            \u003Cselect name=\"education\" class=\"w-100\"\u003E\n              \u003Coption value=\"\" selected\u003E\n                -- Нажмите чтобы выбрать --\n              \u003C\u002Foption\u003E\n              \u003Coption value=\"no\"\u003EНет образования\u003C\u002Foption\u003E\n              \u003Coption value=\"highschool\"\u003EСреднее\u003C\u002Foption\u003E\n              \u003Coption value=\"middlespecial\"\u003EСреднее-специальное\u003C\u002Foption\u003E\n              \u003Coption value=\"bachelor\"\u003EБакалавриат\u003C\u002Foption\u003E\n              \u003Coption value=\"specialist\"\u003EСпециалитет\u003C\u002Foption\u003E\n              \u003Coption value=\"master\"\u003EМагистратура\u003C\u002Foption\u003E\n              \u003Coption value=\"phd\"\u003EАспирантура\u003C\u002Foption\u003E\n            \u003C\u002Fselect\u003E\n          \u003C\u002Ftd\u003E\n        \u003C\u002Ftr\u003E\n\n        \u003C!-- Occupation --\u003E\n        \u003Ctr style=\"height: 100px\"\u003E\n          \u003Ctd\u003E\n            Какая у вас профессия?\n          \u003C\u002Ftd\u003E\n          \u003Ctd\u003E\n            \u003Cinput name=\"occupation\" class=\"w-100\" placeholder=\"например, клинический психолог\"\u003E\n          \u003C\u002Ftd\u003E\n        \u003C\u002Ftr\u003E\n\n        \u003C!-- Column balance --\u003E\n        \u003Ccolgroup\u003E\n          \u003Ccol style=\"width: 45%\"\u003E\n          \u003Ccol style=\"width: 65%\"\u003E\n        \u003C\u002Fcolgroup\u003E\n      \u003C\u002Ftable\u003E\n    \u003C\u002Fform\u003E\n  \u003C\u002Fdiv\u003E\n\u003C\u002Fmain\u003E\n\n\u003Cfooter class=\"content-vertical-center content-horizontal-right\"\u003E\n  \u003Cbutton type=\"submit\" form=\"demography\"\u003EДальше &rarr;\u003C\u002Fbutton\u003E\n\u003C\u002Ffooter\u003E",
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
          "width": 778.95,
          "height": 313.24,
          "stroke": null,
          "strokeWidth": 1,
          "fill": "black",
          "text": "Сейчас перед вами будет серия заданий, в которых\nвам будут предъявлены 2 колбы.\nВам нужно определить, в какой колбе больше воды.\n\n\nЕсли вам кажется, что в левой колбе больше воды, нажмите стрелку влево,\nесли в правой, - то стрелку вправо.\n\n\nМожет показаться, что в колбах одинаковое количество воды,\nоднако это не так, и в одной колбе всегда больше воды.",
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
          "left": 152,
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
          "width": 313.48,
          "height": 24.86,
          "stroke": null,
          "strokeWidth": 1,
          "fill": "black",
          "text": "Чтобы продолжить, - нажмите ",
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
      "title": "instruction"
    },
    {
      "type": "lab.canvas.Screen",
      "content": [
        {
          "type": "i-text",
          "left": 0,
          "top": 0,
          "angle": 0,
          "width": 519.1,
          "height": 226.72,
          "stroke": null,
          "strokeWidth": 1,
          "fill": "black",
          "text": "На ответ дано 2 секунды. Если не успеваете, \nпринимайте интуитивное решение.\n\n\nВсего процедура будет длиться примерно 5 минут.\n\n\nВ начале будет тестовая часть.",
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
          "left": 152,
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
          "width": 313.48,
          "height": 24.86,
          "stroke": null,
          "strokeWidth": 1,
          "fill": "black",
          "text": "Чтобы продолжить, - нажмите ",
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
        "n": "60"
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
            "timeout": "68"
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
            "type": "lab.html.Page",
            "items": [
              {
                "required": true,
                "type": "html",
                "content": "\u003Ccenter\u003E\r\n\t\u003Cdiv class=\"scr\"\u003E\r\n\t\t\u003Cdiv class=\"flask _1\"\u003E\r\n\t\t\t\u003Cdiv class=\"light\"\u003E\u003C\u002Fdiv\u003E\r\n\t\t\t\u003Cdiv class=\"liquid\" style=\"height: ${window.main.get_left(parameters.counter)}px\"\u003E\u003C\u002Fdiv\u003E\r\n\t\t\u003C\u002Fdiv\u003E\r\n\t\t\u003Cdiv class=\"flask _2\"\u003E\r\n\t\t\t\u003Cdiv class=\"light\"\u003E\u003C\u002Fdiv\u003E\r\n\t\t\t\u003Cdiv class=\"liquid\" style=\"height: ${window.main.get_right(parameters.counter)}px\"\u003E\u003C\u002Fdiv\u003E\r\n\t\t\u003C\u002Fdiv\u003E\r\n\t\u003C\u002Fdiv\u003E\r\n\u003C\u002Fcenter\u003E\r\n\r\n  ",
                "name": ""
              }
            ],
            "scrollTop": true,
            "submitButtonText": "Дальше →",
            "submitButtonPosition": "hidden",
            "files": {},
            "responses": {
              "keydown(ArrowLeft)": "l",
              "keydown(ArrowRight)": "r"
            },
            "parameters": {},
            "messageHandlers": {
              "after:end": function anonymous(
) {
//alert('done')
console.log('answer');


let t = this.data.ended_on == "timeout" ? -1 : this.data.duration;
let k = this.data.response;


window.main.set_answer(
  this.parameters.counter, 
  t, //reaction time
  k, //keypressed
)

},
              "end": function anonymous(
) {
window.timeout_message_show = this.data.ended_on == 'timeout'
}
            },
            "title": "answer",
            "timeout": "1500"
          },
          {
            "messageHandlers": {},
            "type": "lab.html.Screen",
            "responses": {
              "keydown(ArrowLeft)": "continue",
              "keydown(ArrowRight)": "continue"
            },
            "title": "time_end",
            "content": "\u003Cheader class=\"content-vertical-center content-horizontal-center\"\u003E\n  \n\u003C\u002Fheader\u003E\n\u003Cmain\u003E\n  \u003Ccenter\u003E\u003Ch3\u003EВремя вышло!\u003C\u002Fh3\u003E\n  Пожалуйста нажмите стрелку влево (\u003C-) или стрелвку в право (-\u003E) на клавиатуре, чтобы перейти к следующему примеру.\n  \u003C\u002Fcenter\u003E\n\u003C\u002Fmain\u003E\n\u003Cfooter class=\"content-vertical-center content-horizontal-center\"\u003E\n  Пожалуйста нажмите стрелку влево (\u003C-) или стрелвку в право (-\u003E) на клавиатуре, чтобы перейти к следующему примеру.\n\u003C\u002Ffooter\u003E\n",
            "parameters": {},
            "files": {},
            "skip": "${ !window.timeout_message_show }",
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
                "width": 517.16,
                "height": 36.16,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "black",
                "text": "В левой колбе воды было больше.",
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
            "title": "1_feedback",
            "timeout": "2000",
            "skip": "${ parameters.counter != 0 }"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 533.61,
                "height": 36.16,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "black",
                "text": "В правой колбе воды было больше.",
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
            "title": "2_feedback",
            "timeout": "2000",
            "skip": "${ parameters.counter != 1 }"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 555.6,
                "height": 245.89,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "black",
                "text": "Тренировка окончена.\n\nДальше правильные ответы не будут\nвыводиться на экран.\n\nЧтобы продолжить, - нажмите Enter",
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
              "keydown(Enter)": "next"
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "end_test",
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
          "content": "Видели ли вы что-то помимо колб во время выполнения задания?\u003Cbr\u003E\r\n\u003Cselect requared name=\"primes_visible\"\u003E\r\n  \u003Coption\u003Eнет\u003C\u002Foption\u003E\r\n  \u003Coption\u003Eда\u003C\u002Foption\u003E\r\n\u003C\u002Fselect\u003E\r\n\u003Cbr\u003E\r\nЕсли вы видели какие-либо слова, - перечислите их:\r\n\u003Cinput type=\"text\" name=\"primes_example\"\u003E \r\n\u003Cbr\u003E\r\nВы видели слова с орфографическими ошибками? \r\n\u003Cbr\u003E\r\n\u003Cselect requared name=\"be_mistake\"\u003E\r\n  \u003Coption\u003Eнет\u003C\u002Foption\u003E\r\n  \u003Coption\u003Eда\u003C\u002Foption\u003E\r\n\u003C\u002Fselect\u003E",
          "name": ""
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
      "title": "check"
    },
    {
      "type": "lab.canvas.Screen",
      "content": [
        {
          "type": "i-text",
          "left": 0,
          "top": -50,
          "angle": 0,
          "width": 743.37,
          "height": 370.91,
          "stroke": null,
          "strokeWidth": 1,
          "fill": "black",
          "text": "На самом деле исследование было посвящено тому, могут ли\nлюди бессознательно видеть ошибки в словах, а также тому,\nотразятся ли эти ошибки на решении задачи, которая \nникак с этими ошибками не связана.\n\n\nВам на очень короткое время предъявлялись в половине случаев \nслова с ошибками, а в половине - слова без ошибок.\n\n\nАвтор эксперимента расшифрует вам ваши результаты,\nдля этого сбросьте ему скриншот графика (будет на следующем экране)\nи файл с вашими результатами в телеграм (@Disengager).",
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
          "left": 152,
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
          "width": 313.48,
          "height": 24.86,
          "stroke": null,
          "strokeWidth": 1,
          "fill": "black",
          "text": "Чтобы продолжить, - нажмите ",
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
      "title": "instruction"
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "required": true,
          "type": "html",
          "content": "\u003Ch3\u003EБольшое спасибо за участие!\u003C\u002Fh3\u003E\u003Cbr\u003E\r\nНиже находится график, который необходимо заскринить. \u003Cbr\u003E\r\nНе забудьте нажать \"Download data\" сверху и скинуть скаченные данные и скриншот в телеграм @Disengager\r\n\u003Cdiv id=\"plot\"\u003E\u003C\u002Fdiv\u003E",
          "name": ""
        }
      ],
      "scrollTop": true,
      "submitButtonText": "Продолжить →",
      "submitButtonPosition": "hidden",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {
        "run": function anonymous(
) {
window.main.plot("plot")
}
      },
      "title": "plot",
      "timeout": "60"
    }
  ]
})

// Let's go!
study.run()