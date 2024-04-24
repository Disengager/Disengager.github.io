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
      "filePrefix": "anagramm-web",
      "path": undefined
    }
  ],
  "metadata": {
    "title": "anagramm-web",
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
          "content": "\u003Ccenter\u003E\r\n\u003Cdiv class=\"detect_card\" style=\"text-align: left; width: ${ sizes.card_width }px; height: 585px;\"\u003E  \r\nИсследование направлено на решение анаграмм. \r\n\u003Cp\u003E\r\n  Ограничение на ответ - 22 секунды. \r\n\u003Ccenter\u003E\u003Cbutton type=\"submit\" class=\"custom-btn btn-3\"\u003E\u003Cspan\u003EДалее\u003C\u002Fspan\u003E\u003C\u002Fbutton\u003E\u003C\u002Fcenter\u003E\r\n\u003C\u002Fdiv\u003E\r\n\u003C\u002Fcenter\u003E",
          "name": ""
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
      "title": "Фиксационный крест",
      "timeout": "3000"
    },
    {
      "type": "lab.flow.Loop",
      "templateParameters": [
        {
          "temp": 1
        }
      ],
      "sample": {
        "mode": "draw-shuffle",
        "n": "${ Object.keys(block).length }"
      },
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "Блоки",
      "indexParameter": "i",
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
        "title": "Последовательность",
        "tardy": true,
        "content": [
          {
            "type": "lab.flow.Loop",
            "templateParameters": [
              {
                "temp": "1"
              }
            ],
            "sample": {
              "mode": "draw-shuffle",
              "n": "${ block[parameters.i].stimules.targets.length }"
            },
            "files": {},
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {
              "run": function anonymous(
) {
document.body.style.cursor = 'none';
},
              "end": function anonymous(
) {
document.body.style.cursor = 'default';
}
            },
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
              "plugins": [],
              "content": [
                {
                  "type": "lab.canvas.Screen",
                  "content": [
                    {
                      "type": "image",
                      "left": 0,
                      "top": 0,
                      "angle": 0,
                      "width": 720,
                      "height": 720,
                      "stroke": null,
                      "strokeWidth": 0,
                      "fill": "black",
                      "src": "${ this.files[block[parameters.i].stimules.get_an_img(parameters.counter)] }",
                      "autoScale": false
                    }
                  ],
                  "viewport": [
                    800,
                    600
                  ],
                  "files": {
                    "АБКАИН.jpg": "embedded\u002Fef38ddd06d111106012dc9e32c46b654c2f148e49503b9ff01269b451ab06940.jpg",
                    "АВОВД.jpg": "embedded\u002F1a391ea65b95b41c1a5a863c3737fb48ce451c4e024d5dc73406ff62ecaf359c.jpg",
                    "АДАКРБ.jpg": "embedded\u002F4114ebb7bc6a09b02838d17a8ffa58d8874ee1700984af079dd2938c50387542.jpg",
                    "АЕСМХ.jpg": "embedded\u002F8ee33d3dcc9d44435e079752066ff0aba580be0d71a6724265b8729efc03c720.jpg",
                    "АНККПО.jpg": "embedded\u002F50b451c67018d24784beab0cee081779aa32f6aa5baac687b3002c891355c44c.jpg",
                    "АНУИТМ.jpg": "embedded\u002F1865aec9959ccb449272f823ec0e5e134b21e2b97c90da8563ecb70c774edbd7.jpg",
                    "АОБЛТ.jpg": "embedded\u002F229ca1bd2b7c3461713aee9f3c9f8adcb391bed90837427efcc11d67b14206d9.jpg",
                    "АОПОДР.jpg": "embedded\u002F641c33a047059e184e039413f106ac43e59a24a087e771495376972b2aa3412b.jpg",
                    "АПУРД.jpg": "embedded\u002F2d64495f8f61bac5469a7437621e0601502aa251df49ea4fa84bc868b4ed806e.jpg",
                    "АРПОБК.jpg": "embedded\u002Fe92a5ba6532748af7b16fe63d7041f66764737d224a51a6a67e86844ddb65073.jpg",
                    "АУМСК.jpg": "embedded\u002F3d53994fa31b6a96e7c1d70304e337ad9f85ff58b66669df96f44d4829771801.jpg",
                    "БЛГУЬО.jpg": "embedded\u002F4d93e9b1486db571d19233cc982b00f92943960646fccae7e9f8228980391507.jpg",
                    "ВАПАДР.jpg": "embedded\u002F48ec3cb920f188255dfc8e8be2f051ebb6a5e2f318db26f58df07d78a1674a47.jpg",
                    "ВАПОАР.jpg": "embedded\u002F5f45fe515fa75e593c2b761a199d5e42ce44852f80f711b5ed4e1b2042032bfe.jpg",
                    "ВДОЗЬГ.jpg": "embedded\u002F60fdfa14c193fd1677029b973d406beb96971888073de153666ecb2fb71d18aa.jpg",
                    "ВСОТЛ.jpg": "embedded\u002Fd0d366f99e09d8c7d576174b1855ea5b9502986bf32c6391f511d1c2bc3b7b6b.jpg",
                    "ДАООЛК.jpg": "embedded\u002F28c33f650da0426c3d09d2d3a0caff391a329ff513960b12a6718a8c1a7a6289.jpg",
                    "ДЗЕАЗВ.jpg": "embedded\u002F1f10ac815c1dbd8a075f93beb38906a676a2f343056959e5e3776dec9d992b25.jpg",
                    "ДЛСОЕ.jpg": "embedded\u002F7a0fa843f78020d1ad2e42fd6fdeea371a132634ecdb794a8138482d2670c30d.jpg",
                    "ДССОУ.jpg": "embedded\u002Ff42d9f3be37d8a605d739d11b453de768eef0bcc2a62299a5093d88053f465a3.jpg",
                    "ЕАНПЛ.jpg": "embedded\u002Fead6adfba1e67db25a6ac7e03969b76d82c4a59aa72e4a7ae0b603c3bf4c6a7a.jpg",
                    "ЕНЛЬО.jpg": "embedded\u002F942c9a1c3bcb70fc4df1f107e416eb9369e8ca80350a871a3fbe212566b1b86d.jpg",
                    "ЕПЛЧО.jpg": "embedded\u002F9053af51d98e9de439ecac7964be59eae401c7264131c40696c5cb19ea4760e9.jpg",
                    "ЕСОЛКО.jpg": "embedded\u002F5fddaa7a64d51d6f608a10ecd3bc60de2facca3dda66a6a67362c87218cc52d2.jpg",
                    "ЕТСАСР.jpg": "embedded\u002F5d37f51e6a511bb542b0448e55b090bf15b8027df6115e6f00a7bb895a0db5ee.jpg",
                    "ЖАВОК.jpg": "embedded\u002F6a08bd6b72bcefb206fab266e53e508b9237938363869682d99f3632fdecdd58.jpg",
                    "ЗОГАЛ.jpg": "embedded\u002F51ef0af973a9d40d7b48588427b773ca4d7f96e89a94b790847c77e2821523e7.jpg",
                    "ЗПАТО.jpg": "embedded\u002Fca8fb1b0ccdd838445f1f1c645faba138f9094c95ba3a7b31b1660ca639e6cd0.jpg",
                    "ИСАРХА.jpg": "embedded\u002F4fa8c8e8e5629a60b6dea4831518b26b145ff511f52ff8d846bf9c1a0cdb8112.jpg",
                    "ИСЕНПЯ.jpg": "embedded\u002F56ece929b0fba7b7e890e6b3d3eb6029884abeff744ef2e30e807289201445f8.jpg",
                    "КВОИС.jpg": "embedded\u002Fd5d3bf7c652f65b67aaaf4a6ddcfc8f3e29b2a80ef7a5f3db8365deb0d5b2969.jpg",
                    "КЛУНВА.jpg": "embedded\u002Fedb7c942d4648311c6f1b664c1c700109fb3383744256a16c29d0adc00596821.jpg",
                    "КПОАЛТ.jpg": "embedded\u002Ff1fbe5b3c673070d0fb2a1a4ed0e1a2930af6baaa7d74ca1527c08ef1008b6b3.jpg",
                    "КСАТНА.jpg": "embedded\u002F0f6024436dd0201b12661a6079bd6427e3a0169fbf12cbcdab097b18c0816383.jpg",
                    "КУОРГ.jpg": "embedded\u002F00d6ff3d98f7ce3b39135b31e2a679fb798071ccf1a5bed5ddc29b7e3c3b91df.jpg",
                    "ЛЕЗЯМ.jpg": "embedded\u002F691582f81825fb76473d5744bc45c6136f6c0b367c928914aa1b7df6580b38b5.jpg",
                    "ЛКБОАО.jpg": "embedded\u002F152616399ffc920e4ff84096e64813a1f74fbe36be71e766412c0a96bbdb0e36.jpg",
                    "ЛООГД.jpg": "embedded\u002Fce145828d8d825eb81fb991714f91c941b0fa914e4e989afa9ea310782cf6832.jpg",
                    "ЛУЖНРА.jpg": "embedded\u002F7fd652362e30a62cd401d687798b925693d0f690e34d224bfa6e06512aefc13e.jpg",
                    "ЛЬАТВС.jpg": "embedded\u002Fdcc5472c57ae9f50135dc1ca8f5d5928c4211e4406a5e3d0ad24ae79c7b832b3.jpg",
                    "МРОНЕ.jpg": "embedded\u002F6fefbe8482e51bdc58412d94762edceb3eb89e7613d774866fe28461a251c223.jpg",
                    "НВИАД.jpg": "embedded\u002F05bee7d58d29b877a56754906b1abe9e222de14c0a61e1a8cc2ae7a538bdc60d.jpg",
                    "НИГАСЛ.jpg": "embedded\u002F119a423353e5ac2fe7356d111e775ccba17fd443c48aa146b2ba2968030a8077.jpg",
                    "НКМАРА.jpg": "embedded\u002Fdab773ee12c4d95c1245ad2222c0b936aa1588ae36ba2c366c1b284e16c957b1.jpg",
                    "НОАДИР.jpg": "embedded\u002F624f85f7ad10a219acf80b06b04be0ff18a67cba290c946af75208ecd9a1cab3.jpg",
                    "ОАДКС.jpg": "embedded\u002Fd97baab880f1fd812d75587a5f964d386dc091b5f07ba036d8b45016e9758d52.jpg",
                    "ОБОАРД.jpg": "embedded\u002Ffed5c9350be725442b6cb20e34df18f5f643ad210c0f1264b7a57a57f4ccfc5d.jpg",
                    "ОМСОЛА.jpg": "embedded\u002F219d8226dd2510882fbf86fec7f4eafb06c5fb2e09da7ed80a579a0af67b6b60.jpg",
                    "ОТОМРЗ.jpg": "embedded\u002Fbf8d0701b1113f9d8fd8c02eaa111d1d0f826f9014abffa95b2d21aa73ea293f.jpg",
                    "ПАГПРУ.jpg": "embedded\u002F44f0cf85b3445f9b0b5e344939e827b84fd26208e688eb7a5c4d1707bc2fcd70.jpg",
                    "ПКОУЛ.jpg": "embedded\u002F3c92fa076f374860ed8ef0628614e8891fd3f5689460468cb6022ff4f58e50aa.jpg",
                    "ПТАСО.jpg": "embedded\u002F78d8f5fce6b0c3f0394443158eb83644362880456c69618cb5f541525de0f004.jpg",
                    "РААЖК.jpg": "embedded\u002Ffebe5873ea70e288c839346d2d5da489ba70ece5be00d7ab9e3fee8e446e2133.jpg",
                    "РИГАВ.jpg": "embedded\u002F270bec7f998a8176259f62e9b9113253f79306640c3fc4f7a7df5f20b6285e82.jpg",
                    "РКПУА.jpg": "embedded\u002Fadf0d4318642ffef03584c315b777ffa9f2243dc500a8c7d656c1087c761401b.jpg",
                    "РОКВОА.jpg": "embedded\u002Ff9fdb280a53a7612e3f218208ced0fe31ef85099d9f407a104dcbdc4104a2fdc.jpg",
                    "РПИАК.jpg": "embedded\u002F19b04eeb1492d9214b2bafbba3859187cecc4dda85981edba686bd1c6e0c092c.jpg",
                    "РЯКПТА.jpg": "embedded\u002F9498c76fbdefabcc14f6a60b30cc4b8ed692073ee38c3bec8ace1373adca496b.jpg",
                    "САИВТ.jpg": "embedded\u002Ffe7d4ecf9f8aa949a4ccb54ce5d2ea77dad01693ac93c483036e010f1a4c0f42.jpg",
                    "САКВЛА.jpg": "embedded\u002Fec1c2f8fa650338155cc5b8767ff14529be39b986ff95c8df8b953aaa63b6f6d.jpg",
                    "САТИВЛ.jpg": "embedded\u002F7fa52a43f643c80995ef159d2d5b0df41141973223c742ad331dca839a0c7fa4.jpg",
                    "СОУМР.jpg": "embedded\u002Fd007e7eb8c6994f548eddf632ed168827feae05f2ea4046ca4afb07e15b357a6.jpg",
                    "ТАЛОСД.jpg": "embedded\u002Fc78dbe4fcc074bbe1718b56de8f1b53024544af4515914626144af806f7965f1.jpg",
                    "ТАЛПИ.jpg": "embedded\u002Fcfa8cf0e370f8337f52e422f2943b81644c81060614e84364d8ebd72b6e28e0b.jpg",
                    "ТЕКСРЕ.jpg": "embedded\u002F2c5c93a7b909815d4a0cd8782ee14f8c139fe90b0971906be043ea5351ea60e6.jpg",
                    "ТНКПУ.jpg": "embedded\u002F92c0a5a17d84d1203ac9c87a38c6fb1cb9230a0ab728553cead485179d67fb8c.jpg",
                    "ТООГЬН.jpg": "embedded\u002F72f47f6adc26809440094c1424a7dbc8bbf0bed43888674b9df55b46cb79745d.jpg",
                    "ТФРЛИ.jpg": "embedded\u002Fbae1f791e2b97b660d97ff4e3c43e4ad67a0d310ab5b9fb2e1be11a6f41da207.jpg",
                    "УАТКРК.jpg": "embedded\u002F8486f4466af84a3c45c32b89876a07b09465176438f7d19f3c1c05652548f34c.jpg",
                    "УГДЬР.jpg": "embedded\u002F87e32a426d6a2562a53ba6edcc0848e0fa9d2e89fe65df0411fe391f8e42a33b.jpg",
                    "УРЕСБ.jpg": "embedded\u002Fa7eb046aa70ae8b03d868345f8e55bef3433dddfa29113453c756cb9d1a35692.jpg",
                    "УТНБО.jpg": "embedded\u002F2be808b0293b0df4fb0d552df649ef3235ad002e4dd479930cbd6bd88fe73a99.jpg",
                    "УШКИВН.jpg": "embedded\u002Ff42c2af8244ab7f69399bff3e8623e967e2c4501e659333ca4a3afb8ede73614.jpg",
                    "ХГООТР.jpg": "embedded\u002F01f4479d7a00f5e3823cdc620c03a73e953c97b15d33ce24e1e4292a571d55a2.jpg",
                    "ЦВОЕДР.jpg": "embedded\u002F5a2fe8b93def34efe5e460607aed1689796a0c34acf2ca763f66ddfee99494f8.jpg",
                    "ЦРЕТПЕ.jpg": "embedded\u002F310ada225d128d8bd32d6e91ac35b943e7bd2986f98913a6e312a88d2b508b95.jpg",
                    "ЧЛАПЕЬ.jpg": "embedded\u002Fe8116f5f5284f42562f59974c3db6028611902aac9a3c47a4a2f0125da640bf2.jpg",
                    "ШМРАИ.jpg": "embedded\u002F9f29d3dd225260c906c4ad2981f6cb93c7b2c2bc767a549405c8b56fdcdb4211.jpg",
                    "ШНАМАИ .jpg": "embedded\u002F0bb67d1b5ead723232f0737c930ec3e86cc646582682085e9f0a083ba4807800.jpg",
                    "ЮСЛАРТ.jpg": "embedded\u002Fa1ba08018293fdb0709838794f2b849306be1fbe36d3932714158de5943c71df.jpg",
                    "ЯРИАТП.jpg": "embedded\u002F0e1a277b081526908f85472e473459d1bf16d651731369fd68e42bb14c6102ee.jpg"
                  },
                  "responses": {
                    "keydown(Space)": "ответ"
                  },
                  "parameters": {},
                  "messageHandlers": {
                    "end": function anonymous(
) {
stimules.fill_custom_column(
  this, 
  ["анаграмма",	"наводка",	"кол-во букв",	"с_наводкой", "без_навод", "повторное",	"решаемость",	"ВО_сред",	"наводка_дл",	"анаграмма_дл",	"Condition",	"RUN", "MEMORY_REPEAT"],
  {}
)
}
                  },
                  "title": "Анаграмма *код",
                  "timeout": "${ block[parameters.i].stimules.get_anagramm_dur(parameters.counter) }",
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
                      "width": 563.41,
                      "height": 78.11,
                      "stroke": null,
                      "strokeWidth": 1,
                      "fill": "black",
                      "text": "Назовите версии, которые у вас были\nпо ходу решения",
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
                    "keydown(Space)": "ответ"
                  },
                  "parameters": {},
                  "messageHandlers": {},
                  "title": "Ответ"
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
                  "title": "Фиксационный крест",
                  "timeout": "${ block[parameters.i].stimules.get_fixation_time(parameters.counter) }",
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
                "content": "\u003Ccenter div class=\"detect_card\" style=\"width: 600px; height: 250px\"\u003E \r\n\u003Ch3\u003E\r\n  ${ block[parameters.i].info }\r\n\u003C\u002Fh3\u003E\r\n\r\n\u003Cbutton type=\"submit\" class=\"custom-btn btn-3\"\u003E\u003Cspan\u003EПродолжить\u003C\u002Fspan\u003E\u003C\u002Fbutton\u003E \u003C\u002Fcenter\u003E\r\n",
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
            "messageHandlers": {
              "run": function anonymous(
) {
document.body.style.cursor = 'default';
},
              "end": function anonymous(
) {
document.body.style.cursor = 'none';
}
            },
            "title": "Отдых",
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
          "content": "\u003Ccenter\u003E\r\n\u003Cdiv class=\"detect_card\" style=\"text-align: left; width: ${ sizes.card_width }px; height:  350px\"\u003E\r\n\u003Clabel for=\"sex\"\u003EПожалуйста, укажите свой пол:\u003C\u002Flabel\u003E\u003Cbr\u003E\r\n  \u003Cselect class=\"custom-btn custom_select\" name=\"sex\"\u003E\r\n  \u003Coption value=\"m\" selected\u003Eмужской\u003C\u002Foption\u003E\r\n  \u003Coption value=\"f\"\u003Eженский\u003C\u002Foption\u003E\r\n\u003C\u002Fselect\u003E\u003Cbr\u003E\r\n\u003Clabel for=\"age\"\u003EВведите возраст:\u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\u003Cinput type=\"number\" id=\"age\" name=\"age\"\r\n       min=\"10\" max=\"90\" required\u003E\u003Cbr\u003E\r\n\u003Ccenter\u003E\u003Cbutton type=\"submit\" class=\"custom-btn btn-3\"\u003E\u003Cspan\u003EОтправить\u003C\u002Fspan\u003E\u003C\u002Fbutton\u003E\r\n\u003C\u002Fcenter\u003E\r\n\u003C\u002Fdiv\u003E\r\n\u003C\u002Fcenter\u003E",
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
          "required": true,
          "type": "html",
          "content": "\u003Ccenter\u003E\r\n\u003Cdiv class=\"detect_card\" style=\"text-align: left; width: ${ sizes.card_width }px; height:  200px\"\u003E\r\n\u003Ch3\u003EБлагодарим за участие в эксперименте!\u003C\u002Fh3\u003E\r\n\u003C\u002Fdiv\u003E\r\n\u003C\u002Fcenter\u003E",
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
        "before:prepare": function anonymous(
) {
stimules.send_form(
  this, 
  ["Стимулы *код", "Проверка_на_бессознательность", "Анкета"], 
  [
    ['group', seq_n],
  ]
)
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