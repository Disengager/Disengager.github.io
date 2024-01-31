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
          "content": "Да?"
        }
      ],
      "scrollTop": true,
      "submitButtonText": "Да →",
      "submitButtonPosition": "right",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {
        "before:prepare": function anonymous(
) {
 let targtes = ["ТИГР", "УТКА", "ЛИПА", "ВОЛК", "СОВА", "РОЗА", "ПИОН", "КЛЁН"],
     distractors = ["ШКАФ", "СТУЛ", "СИТО", "ИГЛА", "КЛЕЙ", "ЛУПА", "ЗОНТ", "ПЛАЩ"];
let block = []
block[0] = { p:['ТИГР', 'УТКА', 'ЛИПА'] };

block[1] = { p:['СОВА', 'РОЗА', 'ПИОН'] };

block[2] = { p:["ШКАФ", "СТУЛ", "СИТО"] };

shuffle = function (array) {
 let currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex > 0) {

    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
};



window.stimules = [];
window.stimules[0] = [];
window.stimules[1] = [];
window.stimules[2] = [];
for (let i = 0; i < 3; i++) {
  console.log('i live')
  console.log(block[i].p)
for(p in block[i].p)
  for(d in distractors) 
    for(t in targtes) {
        rand_distractor = distractors[Math.floor(Math.random()*distractors.length)];
        if(block[i].p[p] != targtes[t] && distractors[d] != rand_distractor)
          if(block[i].p[p] != distractors[d] && targtes[t] != rand_distractor)
        stimules[i].push({
          "prime_t": block[i].p[p], 
          "prime_d": distractors[d],
          "target_t": targtes[t],
          "target_d": rand_distractor
        })
      }
  stimules[i] = shuffle(stimules[i])  
  console.log(stimules[i])
}
console.log(stimules)
}
      },
      "title": "Инструкция (*код на последовательность)"
    },
    {
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
          "type": "lab.flow.Loop",
          "templateParameters": [
            {
              "block": "0",
              "": ""
            },
            {
              "block": "1",
              "": ""
            },
            {
              "block": "2",
              "": ""
            }
          ],
          "sample": {
            "mode": "sequential"
          },
          "files": {},
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "Блоки",
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
                "type": "lab.flow.Loop",
                "templateParameters": [
                  {
                    "tmp1": "tmp"
                  }
                ],
                "sample": {
                  "mode": "sequential",
                  "n": "${ stimules[parameters.block].length }"
                },
                "files": {},
                "responses": {
                  "": ""
                },
                "parameters": {},
                "messageHandlers": {},
                "title": "Цели (последовательность)",
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
                      "title": "Крест",
                      "timeout": "700"
                    },
                    {
                      "type": "lab.html.Page",
                      "items": [
                        {
                          "required": true,
                          "type": "html",
                          "content": "\u003Ccenter\u003E\r\n\u003Cdiv style=\"font-size: 30px;\"\u003E\r\n\u003Cdiv style=\"letter-spacing: 50px; color: red;\"\u003E${ parameters.block != 1?stimules[parameters.block][parameters.counter].prime_t: stimules[parameters.block][parameters.counter].prime_d}\u003C\u002Fdiv\u003E\r\n\u003Cdiv style=\"margin-top: -25px; margin-left: 70px; letter-spacing: 50px; color: green;\"\u003E${  parameters.block != 1? stimules[parameters.block][parameters.counter].prime_d : stimules[parameters.block][parameters.counter].prime_t }\u003C\u002Fdiv\u003E\r\n\u003C\u002Fdiv\u003E\r\n\u003C\u002Fcenter\u003E",
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
                      "title": "Прайм",
                      "timeout": "2500"
                    },
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
                      "title": "Крест",
                      "timeout": "700"
                    },
                    {
                      "type": "lab.html.Page",
                      "items": [
                        {
                          "required": true,
                          "type": "html",
                          "content": "\u003Ccenter\u003E\r\n\u003Cdiv style=\"font-size: 30px;\"\u003E\r\n\u003Cdiv style=\"letter-spacing: 50px; color: red;\"\u003E${ stimules[parameters.block][parameters.counter].target_t }\u003C\u002Fdiv\u003E\r\n\u003Cdiv style=\"margin-top: -25px; margin-left: 70px; letter-spacing: 50px; color: green;\"\u003E${ stimules[parameters.block][parameters.counter].target_d }\u003C\u002Fdiv\u003E\r\n\u003C\u002Fdiv\u003E\r\n\u003C\u002Fcenter\u003E",
                          "name": ""
                        }
                      ],
                      "scrollTop": true,
                      "submitButtonText": "Continue →",
                      "submitButtonPosition": "hidden",
                      "files": {},
                      "responses": {
                        "keydown(ArrowLeft)": "no",
                        "keydown(ArrowRight)": "yes"
                      },
                      "parameters": {},
                      "messageHandlers": {},
                      "title": "Цель",
                      "timeout": "2500"
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
                      "title": "Пустой экран",
                      "timeout": "2000"
                    }
                  ]
                }
              },
              {
                "type": "lab.html.Page",
                "items": [
                  {
                    "type": "text",
                    "content": "\u003Ccenter\u003E ${ parseInt(parameters.block) +1  } из 3 блоков завершён, можете передохнуть\u003C\u002Fcenter\u003E"
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
                "title": "Перерыв"
              }
            ]
          }
        }
      ]
    }
  ]
})

// Let's go!
study.run()