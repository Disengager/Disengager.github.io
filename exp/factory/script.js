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
      "type": "lab.canvas.Screen",
      "content": [
        {
          "type": "i-text",
          "left": 0,
          "top": 0,
          "angle": 0,
          "width": 718.18,
          "height": 245.89,
          "stroke": null,
          "strokeWidth": 1,
          "fill": "black",
          "text": "Вам нужно будет управлять сахарной фабрикой\n\nВам необходимо поддерживать\nоптимальный объём производства - 9 тыс.\n\nНажмите Enter - чтобы продолжить.",
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
      "title": "Инструкция"
    },
    {
      "type": "lab.flow.Loop",
      "templateParameters": [
        {
          "temp": "1",
          "": ""
        }
      ],
      "sample": {
        "mode": "sequential",
        "n": "30"
      },
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "Фабрика",
      "shuffleGroups": [],
      "template": {
        "type": "lab.flow.Sequence",
        "files": {},
        "responses": {
          "": ""
        },
        "parameters": {},
        "messageHandlers": {},
        "title": "Проба",
        "content": [
          {
            "type": "lab.html.Page",
            "items": [
              {
                "required": true,
                "type": "html",
                "content": "\u003Ccenter\u003E\r\n  Текущее количество работников: ${ window.factory.workers }\r\n  \u003Cbr\u003E\r\n  Добавить работников (дополнительные сотни): \u003Cbr\u003E\r\n  \u003Cinput type=\"numeric\" name=\"add_workers\" placeholder=0 min=1 max=12 autofocus\u003E\r\n\u003C\u002Fcenter\u003E",
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
            "messageHandlers": {
              "end": function anonymous(
) {
let workers = this.data.add_workers * 1;
factory.volume.set(workers);
}
            },
            "title": "Ввод количества участникв"
          },
          {
            "type": "lab.html.Page",
            "items": [
              {
                "required": true,
                "type": "html",
                "content": "Объём производства в конкретной пробе: ${ factory.volume.get() }\r\n\r\nГрафик производства:\r\n\r\n\u003Cdiv id=\"plot\"\u003E\u003C\u002Fdiv\u003E",
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
            "messageHandlers": {
              "run": function anonymous(
) {
factory.plot()
}
            },
            "title": "График",
            "tardy": true
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
          "width": 304.17,
          "height": 36.16,
          "stroke": null,
          "strokeWidth": 1,
          "fill": "black",
          "text": "Спасибо за участие.",
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
      "title": "Прощание"
    }
  ]
})

// Let's go!
study.run()