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

loop_content = function(time) {
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
            "messageHandlers": {
              "run": function anonymous() {}
            },
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
                "content": "\u003Ccenter\u003E\r\n  \u003Ch2\u003E${ parameters.target_task }\u003C\u002Fh2\u003E\r\n  \u003Cinput name=\"target_task_answer\" type=\"text\" placeholder=\"значение\" id=\"input_${ parameters.name }\" autofocus\u003E\r\n\u003C\u002Fcenter\u003E",
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
              "end": function anonymous() { window.timeout_message_show = this.data.ended_on == 'timeout' }
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
        { "prime_task": "7 + 9", "target_task": "24 + 19", "prime_task_answer": 16, "prime_task_wronganser": 10, "counterbalancing": 1, "name": "prime69"},
        { "prime_task": "8 + 4", "target_task": "57 + 19", "prime_task_answer": 12, "prime_task_wronganser": 18, "counterbalancing": 1, "name": "prime83"},
        { "prime_task": "8 + 4", "target_task": "12 + 25", "prime_task_answer": 12, "prime_task_wronganser": 15, "counterbalancing": 3, "name": "prime1"},
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
        var xmlhttp = new XMLHttpRequest(),
            sliceFormData = new FormData(),
            theUrl = "https://experiments-server.herokuapp.com/key/";
        sliceFormData.append("key", JSON.stringify(window.params['key']));
        xmlhttp.onreadystatechange = function() {
            if (xmlhttp.readyState == XMLHttpRequest.DONE) {
              if(xmlhttp.responseText == 'NO USER') {
                window.params['key'] = 'NO USER'
              } else {
                let data = JSON.parse(xmlhttp.responseText)
                window.counterbalancing_list = data
              }
            }
        }
        xmlhttp.open("POST", theUrl, false);
        xmlhttp.send(sliceFormData);

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
        "content": loop_content("1300")
      }
    },
    {
      "type": "lab.flow.Loop",
      "templateParameters": [
        { "prime_task": "3 + 8", "target_task": "31 + 59", "prime_task_answer": 11, "prime_task_wronganser": 17, "counterbalancing": 2, "name": "prime59"},
        { "prime_task": "6 + 1", "target_task": "41 + 49", "prime_task_answer": 7, "prime_task_wronganser": 5, "counterbalancing": 2, "name": "prime74"},
        { "prime_task": "9 + 2", "target_task": "30 + 22", "prime_task_answer": 11, "prime_task_wronganser": 19, "counterbalancing": 3, "name": "prime5"},
        { "prime_task": "1 + 6", "target_task": "46 + 11", "prime_task_answer": 7, "prime_task_wronganser": 6, "counterbalancing": 1, "name": "prime45"},
        { "prime_task": "4 + 1", "target_task": "56 + 38", "prime_task_answer": 5, "prime_task_wronganser": 8, "counterbalancing": 1, "name": "prime32"},
        { "prime_task": "2 + 6", "target_task": "22 + 76", "prime_task_answer": 8, "prime_task_wronganser": 9, "counterbalancing": 3, "name": "prime16"},
        { "prime_task": "5 + 1", "target_task": "11 + 19", "prime_task_answer": 6, "prime_task_wronganser": 3, "counterbalancing": 3, "name": "prime87"},
        { "prime_task": "9 + 3", "target_task": "44 + 18", "prime_task_answer": 12, "prime_task_wronganser": 16, "counterbalancing": 3, "name": "prime73"},
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
        var xmlhttp = new XMLHttpRequest(),
            sliceFormData = new FormData(),
            theUrl = "https://experiments-server.herokuapp.com/key/";
        sliceFormData.append("key", JSON.stringify(window.params['key']));
        xmlhttp.onreadystatechange = function() {
            if (xmlhttp.readyState == XMLHttpRequest.DONE) {
              if(xmlhttp.responseText == 'NO USER') {
                window.params['key'] = 'NO USER'
              } else {
                let data = JSON.parse(xmlhttp.responseText)
                window.counterbalancing_list = data
              }
            }
        }
        xmlhttp.open("POST", theUrl, false);
        xmlhttp.send(sliceFormData);

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
        "content": loop_content("2000")
      }
    },
    {
      "type": "lab.flow.Loop",
      "templateParameters": [
        { "prime_task": "6 + 2", "target_task": "27 + 55", "prime_task_answer": 8, "prime_task_wronganser": 6, "counterbalancing": 2, "name": "prime90"},
        { "prime_task": "1 + 1", "target_task": "25 + 16", "prime_task_answer": 2, "prime_task_wronganser": 8, "counterbalancing": 3, "name": "prime71"},
        { "prime_task": "1 + 8", "target_task": "27 + 27", "prime_task_answer": 9, "prime_task_wronganser": 2, "counterbalancing": 1, "name": "prime75"},
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
        var xmlhttp = new XMLHttpRequest(),
            sliceFormData = new FormData(),
            theUrl = "https://experiments-server.herokuapp.com/key/";
        sliceFormData.append("key", JSON.stringify(window.params['key']));
        xmlhttp.onreadystatechange = function() {
            if (xmlhttp.readyState == XMLHttpRequest.DONE) {
              if(xmlhttp.responseText == 'NO USER') {
                window.params['key'] = 'NO USER'
              } else {
                let data = JSON.parse(xmlhttp.responseText)
                window.counterbalancing_list = data
              }
            }
        }
        xmlhttp.open("POST", theUrl, false);
        xmlhttp.send(sliceFormData);

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
        "content": loop_content("1100")
      }
    },
    message_screen('Большое спасибо за участие в эксперименте!')
  ]
})

// Let's go!
study.run()