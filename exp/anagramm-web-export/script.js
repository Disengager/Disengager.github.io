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
          "content": "\u003Ccenter style=\"width: 1000px; font-size: ${ sizes.get_font_size() * 0.6 }px\"\u003E\r\nЗдравствуйте!\u003Cbr\u003E Cпасибо, что согласились принять участие во втором этапе исследования.\r\n\u003Cbr\u003E\u003Cbr\u003E\r\n\u003Cbutton type=\"submit\" class=\"custom-btn btn-3\"\u003E\u003Cspan\u003EДалее\u003C\u002Fspan\u003E\u003C\u002Fbutton\u003E\r\n\u003C\u002Fcenter\u003E",
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
      "title": "Приветствтие",
      "tardy": true
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "required": true,
          "type": "html",
          "content": "\u003Ccenter style=\"font-size: ${ sizes.get_font_size() * 0.5 }px\"\u003E\r\n\u003Cdiv class=\"detect_card\" style=\"text-align: left; width: ${ sizes.card_width }px; height: auto;\" \u003E\r\n\u003Clabel for=\"id\"\u003EВведите id:\u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\u003Cinput type=\"number\" id=\"id\" name=\"id\" required autofocus\u003E\u003Cbr\u003E\r\n\u003Clabel for=\"sex\"\u003EПожалуйста, укажите свой пол:\u003C\u002Flabel\u003E\u003Cbr\u003E\r\n  \u003Cselect class=\"custom-btn custom_select\" name=\"sex\"\u003E\r\n  \u003Coption value=\"m\" selected\u003Eмужской\u003C\u002Foption\u003E\r\n  \u003Coption value=\"f\"\u003Eженский\u003C\u002Foption\u003E\r\n\u003C\u002Fselect\u003E\u003Cbr\u003E\r\n\u003Clabel for=\"age\"\u003EВведите возраст:\u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\u003Cinput type=\"number\" id=\"age\" name=\"age\"\r\n       min=\"10\" max=\"90\" required\u003E\u003Cbr\u003E\r\n\u003Ccenter\u003E\u003Cbutton type=\"submit\" class=\"custom-btn btn-3\"\u003E\u003Cspan\u003EОтправить\u003C\u002Fspan\u003E\u003C\u002Fbutton\u003E\r\n\u003C\u002Fcenter\u003E\r\n\u003C\u002Fdiv\u003E\r\n\u003C\u002Fcenter\u003E",
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
        "end": function anonymous(
) {
this.state['группа'] = seq_n
}
      },
      "title": "Анкета",
      "tardy": true
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "required": true,
          "type": "html",
          "content": "\u003Ccenter\u003E\r\n\u003Cdiv\u003E  \r\n\u003Cdiv style=\"font-size: ${ sizes.get_font_size() * 0.6 }px\"\u003E  \r\nВ целях обеспечения корректного отображения элементов на экране необходима небольшая калибровка.\r\n\u003C\u002Fdiv\u003E\r\n\u003Ccanvas id=\"size_canv\" width=\"556\" height=\"40\"\u003E\u003C\u002Fcanvas\u003E\r\n\u003Cdiv class=\"size_card\"\u003E\r\n  \u003Cimg src=\"${ this.files['card3-img.png'] }\" style=\"opacity: 90%;\"\u003E\r\n\u003C\u002Fdiv\u003E\r\n\u003Ccenter\u003E\u003Cbutton type=\"submit\" class=\"custom-btn btn-3\" focus\u003E\u003Cspan\u003EДалее\u003C\u002Fspan\u003E\u003C\u002Fbutton\u003E\u003C\u002Fcenter\u003E\r\n\u003C\u002Fcenter\u003E\r\n",
          "name": ""
        }
      ],
      "scrollTop": true,
      "submitButtonText": "Continue →",
      "submitButtonPosition": "hidden",
      "files": {
        "card3-img.png": "embedded\u002Fd8beb294039271d46c8fbb4a61fa2f05cd035b9e5167cb0a1455ce6e08b690df.png"
      },
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {
        "run": function anonymous(
) {
window.size  = new Size(40, "size_canv")
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
          "required": true,
          "type": "html",
          "content": "\u003Ccenter style=\"width: 1000px; font-size: ${ sizes.get_font_size() * 0.4 }px; text-align: left\"\u003E\r\n\u003Cp\u003EПожалуйста, ознакомьтесь с инструкцией. \r\nНа данном этапе Вам будет предложено решать анаграммы. Анаграммы представляют собой наборы букв, расположенных по кругу, из которых нужно составить слово.  \u003C\u002Fp\u003E\r\n\r\n\u003Cp\u003EВсего будет 78 анаграмм, Вам необходимо решать их как можно быстрее, максимум на решение каждой отводится 20 секунд. Чтобы дать ответ, нажмите «ПРОБЕЛ» и назовите ответ вслух. Время на ответ - 5 секунд. \u003C\u002Fp\u003E\r\n\r\n\r\n\u003Cbr\u003E\r\nНажмите «ПРОБЕЛ», чтобы перейти дальше. \r\n\r\n\u003C\u002Fcenter\u003E\r\n",
          "name": ""
        }
      ],
      "scrollTop": true,
      "submitButtonPosition": "hidden",
      "files": {},
      "responses": {
        "keydown(Space)": "Space"
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "Инструкция_1",
      "tardy": true
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "required": true,
          "type": "html",
          "content": "\u003Ccenter style=\"width: 1000px; font-size: ${ sizes.get_font_size() * 0.4 }px; text-align: left\"\u003E\r\n  \u003Cp\u003EПосле этого появится вопрос о других версиях ответа. Другие версии – это те слова, которые всплывали у Вас по ходу решения анаграммы, и которые Вы отвергли. Пожалуйста, называйте вслух все версии, которые возникали, а если их не было, скажите слово «нет». \u003C\u002Fp\u003E\r\n\u003Cp\u003EУ вас будет возможность потренироваться, перед началом основного задания.  \r\n\u003Cbr\u003E\u003Cbr\u003EНажмите «ПРОБЕЛ», чтобы перейти к тренировочной части. \r\n \u003C\u002Fp\u003E\r\n\r\n\u003Cbr\u003E\u003Cbr\u003E\r\n\u003C\u002Fcenter\u003E\r\n",
          "name": ""
        }
      ],
      "scrollTop": true,
      "submitButtonPosition": "hidden",
      "files": {},
      "responses": {
        "keydown(Space)": "Space"
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "Инструкция_2",
      "tardy": true
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
            "type": "lab.html.Page",
            "items": [
              {
                "required": true,
                "type": "html",
                "content": "\u003Ccenter style=\"font-size: ${ sizes.get_font_size()}px\"\u003E+\u003C\u002Fcenter\u003E",
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
document.body.style.cursor = 'none';
}
            },
            "title": "Фиксационный крест",
            "timeout": "3000",
            "tardy": true
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
              "n": "${ block[parameters.i].stimules.targets.length }"
            },
            "files": {},
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {
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
              "tardy": true,
              "content": [
                {
                  "type": "lab.html.Page",
                  "items": [
                    {
                      "required": true,
                      "type": "html",
                      "content": "\u003Ccenter\u003E\u003Cimg src=\"${ this.files[block[parameters.i].stimules.get_an_img(parameters.counter)] }\" width=\"720px\" height=\"720px\"\u003E\u003C\u002Fcenter\u003E",
                      "name": ""
                    }
                  ],
                  "scrollTop": true,
                  "submitButtonText": "Continue →",
                  "submitButtonPosition": "hidden",
                  "files": {
                    "САКВЛА.jpg": "embedded\u002Faba823c2cdf950c787d0e72291fc54a0e60060a8a68fabb275b7c0fa77a712c9.jpg",
                    "АДАКРБ.jpg": "embedded\u002Fe2ffc0a5de557293ac9a21abce5e75806db00e483e389080aa492a9685cfef47.jpg",
                    "ИСЕНПЯ.jpg": "embedded\u002Fc7925967c5d710803acc9e21559e55239f117afb399186b456e02802445ac9f2.jpg",
                    "ТАЛОСД.jpg": "embedded\u002F04265e360f6f255481b610c59db9eb17a845c99a83845ac1851a2de61c1e9592.jpg",
                    "КПОАЛТ.jpg": "embedded\u002F784ab1a52fcb8df45a06cbad752818e0933779b9d9eba3cffa4f9ef410ec7b14.jpg",
                    "АОПОДР.jpg": "embedded\u002Fc3763ec1767922fc420a1422dacec54ce0993deb0e89b8ec20c021a3c4a2a4cf.jpg",
                    "ЛЬАТВС.jpg": "embedded\u002F2d94ce9981090dca4709c68dd967fc290541d9fff3578aa382e9e5b302e0bd0a.jpg",
                    "ДЗЕАЗВ.jpg": "embedded\u002Ff1398b57b83cd71fa968c99671e5b3cfb2cfad4ea960b7a29df93d1b29fbcad7.jpg",
                    "АВОАРП.jpg": "embedded\u002Fd3893fcf5cc929ba6153fd827cc07dfe3e293eafa936304bb8bfaeba03a3dadc.jpg",
                    "АРПОБК.jpg": "embedded\u002F29534eca5dac823828aac685048c5f178062a54dfa3ae29da785af6fff0a0f7d.jpg",
                    "РЯКПТА.jpg": "embedded\u002Fe0cb5724f236a0f5c01d7fa6780166e7c7c69b3639bf4aa0331ae9af2b24a181.jpg",
                    "РОКВОА.jpg": "embedded\u002F369831eb9ee6ed54b7c8c83caeca5e6e17c2e0271e074ac4c85707e97c2806c0.jpg",
                    "КРОАМШ.jpg": "embedded\u002F2636a44253daa017caf0fdfb48f5ec413cbeafcd59f5e267848397580b9374bf.jpg",
                    "ТЕКСРЕ.jpg": "embedded\u002Ffd43501e054cb55896dbf4a7c5e357a9e6440c6fa3e983c099fdbd7417370c43.jpg",
                    "КСАТНА.jpg": "embedded\u002Fbd2954c08abf8c5ff88a27e79f4afbe2cc34d0a0a6dc70d9e3e83ab2c1c4ad72.jpg",
                    "ЧЛАПЕЬ.jpg": "embedded\u002F15e271b8f5c27f7d846f82e8dc2fe5c92530ef25d8c31190c869d961b8e54afb.jpg",
                    "ЦРЕТПЕ.jpg": "embedded\u002Faf427903d02404c78c7975b6512c5bc1b7e660eb10ff0f6f56fa9371d7611bef.jpg",
                    "ИСАРХА.jpg": "embedded\u002F041612b3224c717d4be07ca3c0fd57101babbc5d39a250d9b7ea4ddca4d5574e.jpg",
                    "ВРПАДА.jpg": "embedded\u002F0fef7bb2877ad7b29c78c5848baabf56c81a2aa35cb80bd24c2f7dc7a8187c7c.jpg",
                    "ОБОАРД.jpg": "embedded\u002F2c6b16d1ebf0a003791bc3a390c5d1c4ef7b6b3b971d69a7f6f3ea9ae991d694.jpg",
                    "ЕТСАСР.jpg": "embedded\u002F4b81fec089c25bea2ca6c1ae5d87a7e3f5add2e73c2d906ffd81045b3f88a171.jpg",
                    "САТИВЛ.jpg": "embedded\u002Fa0a3e8d79916884283e3e830365f05085160500083eb7ce2957e89028149c000.jpg",
                    "НИГАСЛ.jpg": "embedded\u002Fa0443bdc2c2cd9b739c9f4bfbf3af1a32abea3b9097d01046031772a3e22a5b9.jpg",
                    "ДАООЛК.jpg": "embedded\u002Fbea5a843db55471b835b70da36472f394dbf00ea5d09daee43a99cb089258a5c.jpg",
                    "ОТОМРЗ.jpg": "embedded\u002Fda791c2663724bcb1a81f7fe1154e163d0aec9a3d26d4a5b35858f1062c54b7d.jpg",
                    "ЯРИАТП.jpg": "embedded\u002F611aef9e14aecf675a3bbe5c002a6cfcddd46b629dd42a5c3622c3a6bfd260d6.jpg",
                    "АНУИТМ.jpg": "embedded\u002F0828ce71933137863d62b0299ea92fc06b0aa99bd11e2627f436023e7ada9d42.jpg",
                    "ОМСОЛА.jpg": "embedded\u002F3db3791f20da659a6466796a92906d8269f459e049bf681e39172d223e0bd2d7.jpg",
                    "ХГООТР.jpg": "embedded\u002F51b66ce4aaba631d3450b1b167e10cbe2dd43493a04a335027d3c15bbd4a1b93.jpg",
                    "ЛКБОАО.jpg": "embedded\u002F06c20b2f6e40bda27e0d06b52cdcacd4bf73217025ff93cf6a2327a02d081b29.jpg",
                    "ПАГПРУ.jpg": "embedded\u002Fed88b0010e8d577e38e39f2eb4c1793610b63d0dde0ed5aa97ba46449dc32925.jpg",
                    "ЕСОЛКО.jpg": "embedded\u002F309ec2d9e77b5c88432b0719d4c2aa307bdf6d33960915ce905755b01a9a359a.jpg",
                    "ШНАМАИ .jpg": "embedded\u002Fd7c29f21180770d4446acd4e30fb1f6dafc3f0783a9ce96dead929fb91696c12.jpg",
                    "АНККПО.jpg": "embedded\u002F8926db93249675c97df9f408c3c93a16c5869433393ab3c58226ce9d522591ca.jpg",
                    "КЛУНВА.jpg": "embedded\u002Ff8098ed1edca0622e98c0b3850a2ece57bad07c94aab361abb9fb1f2de211d66.jpg",
                    "НКМАРА.jpg": "embedded\u002Fe8e21903714eb4460bba936897126e12bec38a140393e5df5aec51b3121a1c5f.jpg",
                    "ТООГЬН.jpg": "embedded\u002F19818f80d0e9c20946adbe9c09a30116c2e76da60152e79a34ded87db83fa98a.jpg",
                    "НОАДИР.jpg": "embedded\u002Fa230f099ab129cf4ed1f70a400a8847f5fb91735d6ccce031347f63f9cf4c36b.jpg",
                    "ЦВОЕДР.jpg": "embedded\u002F41552fc193077c7e833f80ed3df5c4fb02446106b14da18da3a43ab0b8baeb1f.jpg",
                    "АБКАИН.jpg": "embedded\u002F596f62b8f93c090d0e267883aa61abe64c56cce310f2504ae1349acc10bba3aa.jpg",
                    "УАТКРК.jpg": "embedded\u002F4a6eb7897dfb1c481c3917bd1853df7909b2c7234e4de2763b1e97bc954ebdfd.jpg",
                    "БЛГУЬО.jpg": "embedded\u002F3ee43ac6443d6874c8c957431ffb1168750c57a9d3539b3b7460b9de5b73f014.jpg",
                    "ЛУЖНРА.jpg": "embedded\u002F5a47c7be48cb9ad21b7e7a2c12d10e397fd216ed2e72bd7416a3f72f57a8e102.jpg",
                    "УШКИВН.jpg": "embedded\u002F230ccf7c3462cabf8d841116eef3cd611cbe9550064ba365c079698c8c55dbb1.jpg",
                    "ВДОЗЬГ.jpg": "embedded\u002F3eb1083b91658106fa8462de9991aa9b7a7d6bfd7c4d09b32a7e8a55a9148d79.jpg",
                    "АОБЛТ.jpg": "embedded\u002F19850453bc1f5b897dd654d36bd4f12dc0a80b845c2be8c3bf8e4ade0fc5959a.jpg",
                    "ВСОТЛ.jpg": "embedded\u002Febd62b821a22edc2113f698baa367904722301179fce6d405b3e7760fbdf2265.jpg",
                    "ШМРАИ.jpg": "embedded\u002F3cfc6252dc032cc9a7b9ea3bfbdd06f83851776d290294cff0dcb7691d42c423.jpg",
                    "ЛООГД.jpg": "embedded\u002Fbdf7acd1fad8bb196300362b90d4ed97558d9b67e712ac106ba2b84d51cfe393.jpg",
                    "ПТАСО.jpg": "embedded\u002Ffbc02148fa5b24fa7af4875c60501759f9f0cae1cf032031d41600ea6928baa0.jpg",
                    "ТАЛПИ.jpg": "embedded\u002F6c558334876f134e0f062dd6f9f468217095e3f388bd65241a3c3b87fe728d08.jpg",
                    "АУМСК.jpg": "embedded\u002F6f6e6a22a712924fab09eecb157796f37581767854e6bad8d01561d0fb688f3d.jpg",
                    "ДССОУ.jpg": "embedded\u002Fe06bd55bd5a86b698a66a25396ce8178b6827d981ca97afce0b2bf930e78e536.jpg",
                    "ЗОГАЛ.jpg": "embedded\u002F99698309651e49a3e3af719f33c961d8bc2a265f5a88ca310f4006ddf37a1fe9.jpg",
                    "САИВТ.jpg": "embedded\u002F6247498804fcdb515173c69b5908a2ea28dd8afdccfb874e5fe0e4447926a22a.jpg",
                    "ОЕПЧЛ.jpg": "embedded\u002Fd8ec305efe2fc6972689a1f7787526c71cea16469ef8d96006f244355cf56dad.jpg",
                    "УТНБО.jpg": "embedded\u002F2edebbd31f7e8d20818ee3b8de87ba3eb6902006114e97525e75ef022d3fc4b0.jpg",
                    "АЕСМХ.jpg": "embedded\u002Fbd3b9c229a8c1d33da40808edf81bd0411b4aa6948d83c46d29aeb32e845f0de.jpg",
                    "АВОВД.jpg": "embedded\u002F403cfda224e7736acb8a22881fc01a0aac620cb1788f6f4c50d80c3fc93a5ae8.jpg",
                    "УРЕСБ.jpg": "embedded\u002Fffd8a3a33daebc22b2fc32a5ff37505b942b96cdb14ab6a4d11b00073d9b4cd1.jpg",
                    "СОУМР.jpg": "embedded\u002F7577f1154d3ab839d1e6a44e14709a64e901e8bce88692ed5068a14900450135.jpg",
                    "РИГАВ.jpg": "embedded\u002F2cd4ef3015fdc497a11b3e74ad22452fa2354f56094e332ba2dc3e3a5d8b80fe.jpg",
                    "МРОНЕ.jpg": "embedded\u002F8144c0595e3ac8b6c58678a61ba22816b05602f5f31dd0380d898ed1538d2ff8.jpg",
                    "КВОИС.jpg": "embedded\u002Fefc02f496ea24d16a03adc95204a15fdf77b82f7a321b6fa935462c1b8704d92.jpg",
                    "ОАДКС.jpg": "embedded\u002F3121d386e08bc430aa1edfc511d73413bbeb88533cf9ad36a08a644d22a96bf4.jpg",
                    "КУОРГ.jpg": "embedded\u002F9f367291d23fb883ad1451ddb182361115a442efc57489349f01c0c67ad48e23.jpg",
                    "РПИАК.jpg": "embedded\u002Fd25c30829ee5c9f00ae16149990252baae8c74ad6a1a5262572bc6df24b23920.jpg",
                    "ЕАНПЛ.jpg": "embedded\u002F08c5ced92f64dbbe6ee66d34735438ce2262ae39402e6c817ed0ae463fc06b9e.jpg",
                    "ТНКПУ.jpg": "embedded\u002Fd82282df379f1008665dbd29e978795c9f54048ba0a063927828951e93afc6a4.jpg",
                    "РКПУА.jpg": "embedded\u002F6e74e7b7017220ff54c4fdaba4eff827c98da99e7b5cdef26f1f32005028000e.jpg",
                    "ПКОУЛ.jpg": "embedded\u002F5a7e6d798536622690dee9fd319b738374fdf27fcf6de01650cf9ef752042081.jpg",
                    "ДЛСОЕ.jpg": "embedded\u002F1b5c723fd572e42b6a279c8ad1010c98b74cc3b1cde8a1c79cd53fbabbc5a5da.jpg",
                    "УЬГРД.jpg": "embedded\u002F1755ed8051c2fcbc729ec0aad56ff37b5bdcdb9cde76a9edadc37eb5ba0aa812.jpg",
                    "ЗПАТО.jpg": "embedded\u002Fb825dca62549a3ddff95e49318dc978583d49ae00e854c26c55562cf81b2a506.jpg",
                    "ЖАВОК.jpg": "embedded\u002F2958c42671778d420056cf4e33ade12b23d01b5ead14d177706b48b7ff9ee887.jpg",
                    "НВИАД.jpg": "embedded\u002Fbf4b4dc38b57044245bbdda08542e67112aafcc7e039b4cffe82fa31caa14f21.jpg",
                    "ЕНЛЬО.jpg": "embedded\u002Fc53d612d959af279e5f78d4b8f687a5712c9a92c9c56ab9d2e0e93580da406dc.jpg",
                    "ЖКРАА.jpg": "embedded\u002Fe98a12274231ced5ab05817021ef3463516c8cb2d4e352a5130cc7465d18ea2c.jpg",
                    "АПУРД.jpg": "embedded\u002F5b0f9e6774114d6d2c4b8decc4426f07ed0d44d0401d5f3b1d3973b8e7ad0eee.jpg",
                    "ТФРЛИ.jpg": "embedded\u002F2976a2bb5b8131286a41084ce19c3beca512e852dfe9dd51c6504e7b37cac109.jpg",
                    "ЛЕЗЯМ.jpg": "embedded\u002Fa70c4c361bdaa886e6ed8ed2471d2e88dbe667c5c27f33dc1a2995f96c29211c.jpg"
                  },
                  "responses": {
                    "keydown(Space)": "ответ"
                  },
                  "parameters": {},
                  "messageHandlers": {},
                  "title": "Анаграмма *код",
                  "tardy": true,
                  "timeout": "${ block[parameters.i].stimules.get_anagramm_dur(parameters.counter) }"
                },
                {
                  "type": "lab.html.Page",
                  "items": [
                    {
                      "required": true,
                      "type": "html",
                      "content": "\u003Ccenter style=\"font-size: ${ sizes.get_font_size()}px\"\u003EСкажите ответ\u003C\u002Fcenter\u003E \r\n  \u003Cdiv type=\"button\" class=\"resp-btn custom-btn btn-3\" onclick=\"end_button_1()\"\u003E\u003Cspan\u003EДалее\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E",
                      "name": ""
                    }
                  ],
                  "scrollTop": true,
                  "submitButtonText": "Continue →",
                  "submitButtonPosition": "hidden",
                  "files": {},
                  "responses": {},
                  "parameters": {},
                  "messageHandlers": {
                    "before:prepare": async function anonymous(
) {
let stream_1 = await navigator.mediaDevices.getUserMedia({ audio: true });

window.recorder_1 = await setupRecorder(stream_1, "endbutton");
this.waitFor('run').then(() => recorder_1.start())

recorder_1.c = this;

window.end_button_1 = function(c) {
  if (recorder_1.state == 'recording') recorder_1.stop();
}
},
                    "run": function anonymous(
) {
block[this.parameters.i].stimules.fill_custom_column(
  this, 
  ["анаграмма",	"наводка",	"кол-во букв",	"с_наводкой", "без_навод", "повторное",	"решаемость",	"ВО_сред",	"наводка_дл",	"анаграмма_дл",	"Condition",	"RUN", "MEMORY_REPEAT"],
  {}
)
this.state['seq'] = seq_n
this.state['block_seq'] = block_seq

document.body.style.cursor = 'default';
}
                  },
                  "title": "Ответ *код",
                  "tardy": true
                },
                {
                  "type": "lab.html.Page",
                  "items": [
                    {
                      "required": true,
                      "type": "html",
                      "content": "\u003Ccenter style=\"font-size: ${ sizes.get_font_size()}px\"\u003E\r\n  Назовите все версии\r\n  \u003Cbr\u003E\r\n  \u003Cdiv type=\"button\" class=\"resp-btn custom-btn btn-3\" onclick=\"end_button_2()\"\u003E\u003Cspan\u003EДалее\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\r\n\r\n\u003C\u002Fcenter\u003E",
                      "name": ""
                    }
                  ],
                  "scrollTop": true,
                  "submitButtonText": "Continue →",
                  "submitButtonPosition": "hidden",
                  "files": {},
                  "responses": {},
                  "parameters": {},
                  "messageHandlers": {
                    "before:prepare": async function anonymous(
) {
let stream_2 = await navigator.mediaDevices.getUserMedia({ audio: true });

window.recorder_2 = await setupRecorder(stream_2, "endbutton");
this.waitFor('run').then(() => recorder_2.start())

recorder_2.c = this;

window.end_button_2 = function(c) {
  if (recorder_2.state == 'recording') recorder_2.stop();
}

},
                    "end": function anonymous(
) {
document.body.style.cursor = 'none';
}
                  },
                  "title": "Версии *код",
                  "tardy": true
                },
                {
                  "type": "lab.html.Page",
                  "items": [
                    {
                      "required": true,
                      "type": "html",
                      "content": "\u003Ccenter style=\"font-size: ${ sizes.get_font_size()}px\"\u003E+\u003C\u002Fcenter\u003E",
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
                  "title": "Фиксационный крест",
                  "tardy": true,
                  "timeout": "${ block[parameters.i].stimules.get_fixation_time(parameters.counter) }"
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
                "content": "\u003Ccenter style=\"font-size: ${ sizes.get_font_size() * 0.6 }px\"\u003E \r\n${ block[parameters.i].info } \u003Cbr\u003E\u003Cbr\u003E\r\n\u003C\u002Fcenter\u003E\r\n\r\n",
                "name": ""
              }
            ],
            "scrollTop": true,
            "submitButtonText": "Continue →",
            "submitButtonPosition": "hidden",
            "files": {},
            "responses": {
              "keydown(Space)": "Space"
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
          "content": "\u003Ccenter style=\"font-size: ${ sizes.get_font_size() * 0.6 }px; color: white;\"\u003E\r\n\u003Cdiv style=\"text-align: left;\"\u003E\r\n  Благодарим за участие в эксперименте!\r\n\u003C\u002Fdiv\u003E\r\n\u003C\u002Fcenter\u003E",
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
document.body.style.cursor = 'default';
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