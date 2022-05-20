// Define study
message_screen = function(text) {
  return {
      "type": "lab.html.Page",
      "items": [
        {
          "required": true,
          "type": "html",
          "content": "\u003Ccenter\u003E\r" + text + "\u003Cbr\u003E \u003Cbr\u003EНажимите \u003Cspan class=\"key-button\"\u003Eпробел\u003C\u002Fspan\u003E чтобы продоложить. \r\n  \u003C\u002Fh2\u003E\r\n\u003C\u002Fcenter\u003E",
          "name": ""
        }
      ],
      "scrollTop": true,
      "submitButtonText": "Continue →",
      "submitButtonPosition": "hidden",
      "files": {},
      "responses": {
        "keypress(Space)": "next"
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "manual"
  }
}

bind_two_length_keys = function() {
  document.querySelector('input[type=text]').addEventListener('keypress', (event) => {
    const keyName = event.key;
    console.log(event);
    let input = document.querySelector('input[type=text]');
    if(input.value.length > 0) {
      document.querySelector('input[type=submit]').click();    
      window.timeout_message_show = true;
    }
  });
}
bind_enter_keys = function() {
  document.querySelector('input[type=text]').addEventListener('keypress', (event) => {
    const keyName = event.key;
    if(keyName == 'Enter') {
      window.skip = true;
      document.querySelector('input[type=submit]').click();
      window.timeout_message_show = true;
    }
  });
}
bind_off = function() {
  document.querySelector('input[type=text]').addEventListener('keypress', (event) => {
    console.log(1);
  });
}

loop_content = function(time, additonal_attr) {
  return [
          {
            "type": "lab.html.Page",
            "items": [
              {
                "required": true,
                "type": "html",
                "content": "\u003Ccenter\u003E\r\n  \u003Ch2\u003E&&&&&&&&&&\u003C\u002Fh2\u003E\r\n  \u003Ch2 class=\"h2_and top\"\u003E&&&&&&&&&&\u003C\u002Fh2\u003E\r\n  \u003Ch2 class=\"h2_and bottom\"\u003E&&&&&&&&&&\u003C\u002Fh2\u003E\r\n\u003C\u002Fcenter\u003E",
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
            "title": "start_mask",
            "timeout": "200"
          },
          {
            "type": "lab.html.Page",
            "items": [
              {
                "required": true,
                "type": "html",
                "content": "\u003Ccenter\u003E\r\n  \u003Ch2\u003E \r\n    ${ window.counterbalancing_list[parameters.name] != 3 ? parameters.prime_task : \"xxxxxx\" }\r\n  \u003Ch2\u003E\r\n\u003C\u002Fcenter\u003E",
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
            "title": "prime_task",
            "timeout": "17"
          },
          {
            "type": "lab.html.Page",
            "items": [
              {
                "required": true,
                "type": "html",
                "content": "\u003Ccenter\u003E\r\n  \u003Ch2\u003EXXXXXXXXXX\u003C\u002Fh2\u003E\r\n  \u003Ch2 class=\"h2_x top\"\u003EXXXXXXXXXX\u003C\u002Fh2\u003E\r\n  \u003Ch2 class=\"h2_x bottom\"\u003EXXXXXXXXXX\u003C\u002Fh2\u003E\r\n\u003C\u002Fcenter\u003E ",
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
            "title": "middle_mask",
            "timeout": "500"
          },
          {
            "type": "lab.html.Page",
            "items": [
              {
                "required": true,
                "type": "html",
                "content": "\u003Ccenter\u003E\r\n  \u003Ch2\u003E${ parameters.target_task }\u003C\u002Fh2\u003E\r\n\u003C\u002Fcenter\u003E",
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
            "title": "target_task",
            "timeout": "400"
          },
          {
            "type": "lab.html.Page",
            "items": [
              {
                "required": true,
                "type": "html",
                "content": "\u003Ccenter\u003E\r\n  \u003Ch2\u003E\r\n    ${ window.counterbalancing_list[parameters.name] != 3 ? (\r\n      window.counterbalancing_list[parameters.name] == 1 ? (parameters.prime_task + ' = ' + parameters.prime_task_answer) : (parameters.prime_task + ' = ' + parameters.prime_task_wronganser)\r\n      ) : \"xxxxxx\" } \r\n  \u003C\u002Fh2\u003E\r\n\u003C\u002Fcenter\u003E",
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
              "run": function anonymous() { console.log(window.iterator) }
            },
            "title": "prime_task_answer",
            "timeout": "17"
          },
          {
            "type": "lab.html.Page",
            "items": [
              {
                "required": true,
                "type": "html",
                "content": "\u003Ccenter\u003E\r\n  \u003Ch2\u003EXXXXXXXXXX\u003C\u002Fh2\u003E\r\n  \u003Ch2 class=\"h2_x top\"\u003EXXXXXXXXXX\u003C\u002Fh2\u003E\r\n  \u003Ch2 class=\"h2_x bottom\"\u003EXXXXXXXXXX\u003C\u002Fh2\u003E\r\n\u003C\u002Fcenter\u003E ",
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
            "title": "end_mask",
            "timeout": "50"
          },
          {
            "type": "lab.html.Page",
            "items": [
              {
                "required": true,
                "type": "html",
                "content": "\u003Ccenter\u003E\r\n  \u003Ch2\u003E${ parameters.target_task }\u003C\u002Fh2\u003E\r\n  \u003Cinput type=\"submit\" style=\"display: none;\" id=\"hide-button\"\u003E \u003Cinput name=\"target_task_answer\" type=\"text\" placeholder=\"значение\" id=\"input_${ parameters.name }\" autofocus" + additonal_attr + "\u003E\r\n\u003C\u002Fcenter\u003E",
                "name": ""
              }
            ],
            "scrollTop": true,
            "submitButtonText": "Продолжить",
            "submitButtonPosition": "hidden",
            "files": {},
            "responses": {
              "": "done"
            },
            "parameters": {},
            "messageHandlers": {
              "run": function anonymous() {
                window.skip = false;
                if (this.parameters['r_' + window.params['seq']] == null)
                  return true;
                switch (this.parameters['r_' + window.params['seq']]) {
                  case 1:
                    bind_off();
                    break;
                  case 2:
                    bind_two_length_keys();
                    break;
                  default:
                    bind_enter_keys();
                }
                  
              },
              "end": function anonymous() { 
                if(!window.skip)
                  window.timeout_message_show = this.data.ended_on == 'timeout' 
              }
            },
            "title": "target_task_answer",
            "timeout": time,
            "timeline": []
          },
          {
            "type": "lab.html.Page",
            "items": [
              {
                "required": true,
                "type": "html",
                "content": "\u003Ccenter\u003E\r\n  \u003Ch2\u003EОтвечайте быстрее!\u003C\u002Fh2\u003E\r\n\u003C\u002Fcenter\u003E",
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
              "after:prepare": function anonymous() { 
                if (window.timeout_message_show) 
                  this.options.skip = false 
                else 
                  this.options.skip = true 
              }
            },
            "title": "timeout_message",
            "tardy": true,
            "timeout": "500"
          }
        ]
}











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
      "filePrefix": "replikaciya-dashi-kostinoj",
      "path": undefined
    }
  ],
  "metadata": {
    "title": "Репликация Даши Костиной",
    "description": "",
    "repository": "",
    "contributors": ""
  },
  "files": {},
  "responses": {},
  "content": [
    message_screen("Сейчас будет самая главная часть исследования. Старайтесь отвечать как можно быстрее. Примеры будут такие же как были до этого."),
    {
      "type": "lab.flow.Loop",
      "templateParameters": [
        { "prime_task": "8 + 4", "target_task": "12 + 25", "prime_task_answer": 12, "prime_task_wronganser": 15, "counterbalancing": 3, "name": "prime1", 
          "r_1": 1,
          "r_2": 1,
          "r_3": 1
        },
        { "prime_task": "6 + 2", "target_task": "17 + 12", "prime_task_answer": 9, "prime_task_wronganser": 7, "counterbalancing": 2, "name": "prime2",  
          "r_1": 1,
          "r_2": 1,
          "r_3": 1
        },
        { "prime_task": "7 + 3", "target_task": "19 + 27", "prime_task_answer": 10, "prime_task_wronganser": 13, "counterbalancing": 1, "name": "prime3",  
          "r_1": 2,
          "r_2": 3,
          "r_3": 1
        },
        { "prime_task": "3 + 2", "target_task": "15 + 16", "prime_task_answer": 5, "prime_task_wronganser": 7, "counterbalancing": 1, "name": "prime4",  
          "r_1": 1,
          "r_2": 1,
          "r_3": 3
        },
        { "prime_task": "9 + 2", "target_task": "30 + 22", "prime_task_answer": 11, "prime_task_wronganser": 19, "counterbalancing": 3, "name": "prime5",  
          "r_1": 1,
          "r_2": 1,
          "r_3": 1
        },
        { "prime_task": "5 + 4", "target_task": "22 + 51", "prime_task_answer": 9, "prime_task_wronganser": 1, "counterbalancing": 2, "name": "prime6",  
          "r_1": 3,
          "r_2": 3,
          "r_3": 3
        },
        { "prime_task": "7 + 4", "target_task": "20 + 48", "prime_task_answer": 11, "prime_task_wronganser": 13, "counterbalancing": 2, "name": "prime7",  
          "r_1": 1,
          "r_2": 1,
          "r_3": 3
        },
        { "prime_task": "5 + 2", "target_task": "39 + 23", "prime_task_answer": 7, "prime_task_wronganser": 5, "counterbalancing": 1, "name": "prime8",  
          "r_1": 2,
          "r_2": 2,
          "r_3": 2
        },
        { "prime_task": "9 + 6", "target_task": "32 + 50", "prime_task_answer": 15, "prime_task_wronganser": 18, "counterbalancing": 3, "name": "prime9",  
          "r_1": 1,
          "r_2": 2,
          "r_3": 3
        },
        { "prime_task": "8 + 9", "target_task": "59 + 34", "prime_task_answer": 17, "prime_task_wronganser": 11, "counterbalancing": 1, "name": "prime10",  
          "r_1": 2,
          "r_2": 3,
          "r_3": 3
        },
        { "prime_task": "9 + 5", "target_task": "16 + 50", "prime_task_answer": 14, "prime_task_wronganser": 15, "counterbalancing": 3, "name": "prime11",  
          "r_1": 1,
          "r_2": 1,
          "r_3": 2
        },
        { "prime_task": "9 + 2", "target_task": "39 + 48", "prime_task_answer": 11, "prime_task_wronganser": 12, "counterbalancing": 2, "name": "prime12",  
          "r_1": 2,
          "r_2": 2,
          "r_3": 2
        },
        { "prime_task": "8 + 7", "target_task": "29 + 40", "prime_task_answer": 15, "prime_task_wronganser": 13, "counterbalancing": 2, "name": "prime13",  
          "r_1": 2,
          "r_2": 3,
          "r_3": 1
        },
        { "prime_task": "4 + 5", "target_task": "36 + 58", "prime_task_answer": 9, "prime_task_wronganser": 8, "counterbalancing": 1, "name": "prime14",  
          "r_1": 2,
          "r_2": 2,
          "r_3": 2
        },
        { "prime_task": "4 + 1", "target_task": "54 + 38", "prime_task_answer": 5, "prime_task_wronganser": 6, "counterbalancing": 3, "name": "prime15",  
          "r_1": 1,
          "r_2": 3,
          "r_3": 1
        },
        { "prime_task": "2 + 6", "target_task": "22 + 76", "prime_task_answer": 8, "prime_task_wronganser": 9, "counterbalancing": 3, "name": "prime16",  
          "r_1": 3,
          "r_2": 3,
          "r_3": 3
        },
        { "prime_task": "8 + 9", "target_task": "51 + 43", "prime_task_answer": 17, "prime_task_wronganser": 15, "counterbalancing": 1, "name": "prime17",  
          "r_1": 1,
          "r_2": 3,
          "r_3": 1
        },
        { "prime_task": "4 + 2", "target_task": "53 + 19", "prime_task_answer": 6, "prime_task_wronganser": 8, "counterbalancing": 2, "name": "prime18",  
          "r_1": 2,
          "r_2": 2,
          "r_3": 2
        },
        { "prime_task": "3 + 4", "target_task": "28 + 22", "prime_task_answer": 7, "prime_task_wronganser": 5, "counterbalancing": 3, "name": "prime19",  
          "r_1": 3,
          "r_2": 2,
          "r_3": 1
        },
        { "prime_task": "2 + 4", "target_task": "15 + 58", "prime_task_answer": 6, "prime_task_wronganser": 9, "counterbalancing": 2, "name": "prime20",  
          "r_1": 1,
          "r_2": 2,
          "r_3": 3
        },
        { "prime_task": "1 + 3", "target_task": "25 + 53", "prime_task_answer": 4, "prime_task_wronganser": 8, "counterbalancing": 1, "name": "prime21",  
          "r_1": 2,
          "r_2": 3,
          "r_3": 1
        },
        { "prime_task": "5 + 3", "target_task": "44 + 38", "prime_task_answer": 8, "prime_task_wronganser": 5, "counterbalancing": 2, "name": "prime22",  
          "r_1": 1,
          "r_2": 2,
          "r_3": 3
        },
        { "prime_task": "8 + 5", "target_task": "11 + 27", "prime_task_answer": 13, "prime_task_wronganser": 15, "counterbalancing": 3, "name": "prime23",  
          "r_1": 3,
          "r_2": 2,
          "r_3": 1
        },
        { "prime_task": "6 + 6", "target_task": "50 + 29", "prime_task_answer": 12, "prime_task_wronganser": 13, "counterbalancing": 1, "name": "prime24",  
          "r_1": 1,
          "r_2": 2,
          "r_3": 3
        },
        { "prime_task": "2 + 3", "target_task": "22 + 16", "prime_task_answer": 5, "prime_task_wronganser": 2, "counterbalancing": 1, "name": "prime25",  
          "r_1": 2,
          "r_2": 3,
          "r_3": 1
        },
        { "prime_task": "7 + 6", "target_task": "56 + 29", "prime_task_answer": 13, "prime_task_wronganser": 18, "counterbalancing": 2, "name": "prime26",  
          "r_1": 3,
          "r_2": 1,
          "r_3": 2
        },
        { "prime_task": "6 + 3", "target_task": "26 + 72", "prime_task_answer": 9, "prime_task_wronganser": 7, "counterbalancing": 3, "name": "prime27",  
          "r_1": 2,
          "r_2": 2,
          "r_3": 2
        },
        { "prime_task": "8 + 2", "target_task": "67 + 19", "prime_task_answer": 10, "prime_task_wronganser": 11, "counterbalancing": 1, "name": "prime28",  
          "r_1": 2,
          "r_2": 2,
          "r_3": 2
        },
        { "prime_task": "7 + 4", "target_task": "27 + 35", "prime_task_answer": 11, "prime_task_wronganser": 10, "counterbalancing": 3, "name": "prime29",  
          "r_1": 3,
          "r_2": 3,
          "r_3": 3
        },
        { "prime_task": "7 + 8", "target_task": "48 + 25", "prime_task_answer": 15, "prime_task_wronganser": 19, "counterbalancing": 2, "name": "prime30",  
          "r_1": 2,
          "r_2": 2,
          "r_3": 2
        },
      ],
      "sample": {
        "mode": "sequential"
      },
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {
        "before:prepare": function anonymous(
        ) {
        window.params = window
            .location
            .search
            .replace('?','')
            .split('&')
            .reduce(
                function(p,e){
                    var a = e.split('=');
                    p[ decodeURIComponent(a[0])] = decodeURIComponent(a[1]);
                    return p;
                },
                {}
            );

        window.counterbalancing_list = {}
        console.log(window.params['key'])
        let params = this.internals.parsedOptions.templateParameters
        if (Object.keys(window.counterbalancing_list).length === 0) {
          for (var i in params) {
            let index = parseInt(i) + parseInt(1)
            console.log('prime' + index)
            window.counterbalancing_list['prime' + index] = params[i].counterbalancing
          }
        }


        console.log(window.counterbalancing_list)


        }
      },
      "title": "arithmetic_loop",
      "shuffleGroups": [],
      "template": {
        "type": "lab.flow.Sequence",
        "files": {},
        "responses": {
          "": ""
        },
        "parameters": {},
        "messageHandlers": {},
        "title": "comp",
        "content": loop_content("2500", "")
      }
    },
    message_screen('Большое спасибо за участие в эксперименте!')
  ]
})

// Let's go!
study.run()