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
      "type": "lab.html.Screen",
      "files": {},
      "responses": {
        "keypress(Enter)": "Enter"
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "Instruction",
      "content": "\r\n\u003Cbr\u003E\u003Ccenter\u003E\u003Ch3\u003EЗдравствуйте!\u003C\u002Fh3\u003E\u003Cbr\u003E\r\nСпасибо, что согласились принять участие в нашем эксперименте!\u003Cbr\u003E\u003Cbr\u003E\r\nВаша задача - поймать как можно больше падающих яиц в корзинку.\u003Cbr\u003E\u003Cbr\u003E\r\nВам нужно будет перемещать корзинку, используя кнопки:\u003Cbr\u003E\r\n1 - корзинка слева,\u003Cbr\u003E\r\n2 - корзинка по центру,\u003Cbr\u003E\r\n3 - корзинка справа.\u003Cbr\u003E\u003Cbr\u003E\r\nПожалуйста, старайтесь не упустить ни одно яичко!\u003Cbr\u003E\u003Cbr\u003E\r\n\r\nЧтобы начать небольшую тренировку, нажмите \"Enter\".\u003Cbr\u003E\u003Cbr\u003E\r\n\u003C\u002Fcenter\u003E\r\n"
    },
    {
      "type": "lab.flow.Loop",
      "templateParameters": [
        {
          "trend": "3",
          "distractor": "n"
        },
        {
          "trend": "1",
          "distractor": "n"
        },
        {
          "trend": "2",
          "distractor": "n"
        },
        {
          "trend": "1",
          "distractor": "n"
        },
        {
          "trend": "2",
          "distractor": "n"
        },
        {
          "trend": "3",
          "distractor": "n"
        },
        {
          "trend": "2",
          "distractor": "d"
        },
        {
          "trend": "2",
          "distractor": "d"
        },
        {
          "trend": "1",
          "distractor": "d"
        },
        {
          "trend": "3",
          "distractor": "d"
        },
        {
          "trend": "3",
          "distractor": "d"
        },
        {
          "trend": "2",
          "distractor": "d"
        },
        {
          "trend": "3",
          "distractor": "n"
        },
        {
          "trend": "1",
          "distractor": "n"
        },
        {
          "trend": "2",
          "distractor": "n"
        },
        {
          "trend": "1",
          "distractor": "n"
        },
        {
          "trend": "2",
          "distractor": "n"
        },
        {
          "trend": "3",
          "distractor": "n"
        },
        {
          "trend": "1",
          "distractor": "d"
        },
        {
          "trend": "1",
          "distractor": "d"
        },
        {
          "trend": "3",
          "distractor": "d"
        },
        {
          "trend": "2",
          "distractor": "d"
        },
        {
          "trend": "2",
          "distractor": "d"
        },
        {
          "trend": "3",
          "distractor": "d"
        },
        {
          "trend": "1",
          "distractor": "n"
        },
        {
          "trend": "3",
          "distractor": "n"
        },
        {
          "trend": "2",
          "distractor": "n"
        },
        {
          "trend": "1",
          "distractor": "n"
        },
        {
          "trend": "2",
          "distractor": "n"
        },
        {
          "trend": "3",
          "distractor": "n"
        },
        {
          "trend": "2",
          "distractor": "d"
        },
        {
          "trend": "3",
          "distractor": "d"
        },
        {
          "trend": "2",
          "distractor": "d"
        },
        {
          "trend": "1",
          "distractor": "d"
        },
        {
          "trend": "2",
          "distractor": "d"
        },
        {
          "trend": "1",
          "distractor": "d"
        }
      ],
      "sample": {
        "mode": "sequential",
        "n": ""
      },
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {
        "run": function anonymous(
) {
document.body.addEventListener('keypress', logKey);

function logKey(e) {
  let type = -1;
  if(e.code == 'Digit1') type = 1;
  if(e.code == 'Digit2') type = 2;
  if(e.code == 'Digit3') type = 3;
  if (type == -1) return true;

  document.querySelector('#page-form #answer').setAttribute('value', type);
  document.querySelector('#page-form #basket').setAttribute('class', "basket_" + type);
  
 
  
}
}
      },
      "title": "Loop",
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
        "title": "Sequence",
        "content": [
          {
            "type": "lab.html.Page",
            "items": [
              {
                "required": true,
                "type": "html",
                "content": "\u003Cform\u003E\r\n\u003Cdiv id=\"main\"\u003E\r\n  \u003Cinput type=\"number\" value=\"-1\" name=\"answer\" class=\"answer\" id=\"answer\"\u003E \r\n  \u003Cdiv id=\"background\"\u003E\u003C\u002Fdiv\u003E \r\n\u003C\u002Fdiv\u003E\r\n\u003C\u002Fform\u003E",
                "name": ""
              }
            ],
            "scrollTop": true,
            "submitButtonText": "=",
            "submitButtonPosition": "hidden",
            "files": {},
            "responses": {},
            "parameters": {},
            "messageHandlers": {},
            "title": "Interval",
            "timeout": "500"
          },
          {
            "type": "lab.html.Page",
            "items": [
              {
                "required": true,
                "type": "html",
                "content": "\u003Cform\u003E\r\n\u003Cdiv id=\"main\"\u003E\r\n  \u003Cinput type=\"number\" value=\"-1\" name=\"answer\" class=\"answer\" id=\"answer\"\u003E \r\n  \u003Cinput type=\"hidden\" value=\"${ parameters.distractor }\"\u003E\r\n  \u003Cdiv id=\"background\"\u003E\u003C\u002Fdiv\u003E\r\n  \u003Cdiv id=\"egg\" class=\"egg_${ parameters.trend }\"\u003E\u003C\u002Fdiv\u003E\r\n  \u003Cdiv id=\"basket\"class=\"basket\"\u003E\u003Csvg xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" viewBox=\"0 0 576 512\"\u003E\u003C!--! Font Awesome Free 6.1.1 by @fontawesome - https:\u002F\u002Ffontawesome.com License - https:\u002F\u002Ffontawesome.com\u002Flicense\u002Ffree (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2022 Fonticons, Inc. --\u003E\u003Cpath d=\"M171.7 191.1H404.3L322.7 35.07C316.6 23.31 321.2 8.821 332.9 2.706C344.7-3.409 359.2 1.167 365.3 12.93L458.4 191.1H544C561.7 191.1 576 206.3 576 223.1C576 241.7 561.7 255.1 544 255.1L492.1 463.5C484.1 492 459.4 512 430 512H145.1C116.6 512 91 492 83.88 463.5L32 255.1C14.33 255.1 0 241.7 0 223.1C0 206.3 14.33 191.1 32 191.1H117.6L210.7 12.93C216.8 1.167 231.3-3.409 243.1 2.706C254.8 8.821 259.4 23.31 253.3 35.07L171.7 191.1zM191.1 303.1C191.1 295.1 184.8 287.1 175.1 287.1C167.2 287.1 159.1 295.1 159.1 303.1V399.1C159.1 408.8 167.2 415.1 175.1 415.1C184.8 415.1 191.1 408.8 191.1 399.1V303.1zM271.1 303.1V399.1C271.1 408.8 279.2 415.1 287.1 415.1C296.8 415.1 304 408.8 304 399.1V303.1C304 295.1 296.8 287.1 287.1 287.1C279.2 287.1 271.1 295.1 271.1 303.1zM416 303.1C416 295.1 408.8 287.1 400 287.1C391.2 287.1 384 295.1 384 303.1V399.1C384 408.8 391.2 415.1 400 415.1C408.8 415.1 416 408.8 416 399.1V303.1z\"\u002F\u003E\u003C\u002Fsvg\u003E\r\n\u003C\u002Fdiv\u003E\r\n\u003C\u002Fdiv\u003E\r\n\u003C\u002Fform\u003E",
                "name": ""
              }
            ],
            "scrollTop": true,
            "submitButtonText": "=",
            "submitButtonPosition": "hidden",
            "files": {},
            "responses": {
              "keyup(1)": "answer",
              "keyup(2)": "answer",
              "keyup(3)": "answer"
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Game",
            "timeout": "2000"
          },
          {
            "type": "lab.html.Screen",
            "files": {},
            "responses": {
              "keypress(Enter)": "Enter"
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "Traning",
            "content": "\u003Cbr\u003E\u003Cbr\u003E\u003Cbr\u003E\r\n\u003Ccenter\u003E\u003Ch4\u003EТренировка пройдена.\u003C\u002Fh4\u003E\r\n\u003Cbr\u003E\r\nЧтобы приступить к начать игру, нажмите \"Enter\"\u003C\u002Fcenter\u003E",
            "skip": "${ parameters.counter != 2  }"
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
      "title": "End",
      "content": "\u003Cbr\u003E\u003Cbr\u003E\r\n\u003Ccenter\u003E\u003Ch1\u003EИгра окончена!\u003C\u002Fh1\u003E\u003C\u002Fcenter\u003E",
      "timeout": "10"
    }
  ]
})

// Let's go!
study.run()