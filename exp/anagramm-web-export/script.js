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
                    "arahis5.jpg": "embedded\u002F0e933f074c43aea5a8fcbfb171d6ac8811f7c2d5396a0a473c9aed975d3da5f8.jpg",
                    "arahis6.jpg": "embedded\u002F48bb68e1b48c938345674ef90f55813b96784bf45572cf55202aa57732a87f80.jpg",
                    "boroda5.jpg": "embedded\u002F9921b080805f05e7a5c7b88316fe4c2dc7c31889d3e0669a61d566a80228fb59.jpg",
                    "boroda6.jpg": "embedded\u002F16f3f571720b8bca025c7a70366fa3042b8aa644fa8158fd0f97ecf106dd66fe.jpg",
                    "buton1.jpg": "embedded\u002F2a69f8a10f3c85f762d56bd39a4c9ac89d1b320b17fc23d5cdc1083ed37755f9.jpg",
                    "buton2.jpg": "embedded\u002F78ed9305718699d171402d9d69b882c36793e73a9e42dac050670f1d67b1c63e.jpg",
                    "divan3.jpg": "embedded\u002Ffd2e12b42f7693b30d0ccee88078d56194d6b8d531c5ccb9c2c580ab99ad6552.jpg",
                    "divan4.jpg": "embedded\u002F6c9466701a237cc98333965996e954ef14ee96b766579a7fbcb33b3132e3c593.jpg",
                    "doska3.jpg": "embedded\u002Fe48d78bcb3bf20fff4d93f842d55e0434a4a764f38d2d8707d7e38d7e62ce0ec.jpg",
                    "doska4.jpg": "embedded\u002F49708ab1108652fc2d1bad8e05c1721ed4b758f2c0d17aa150957f9a5bb9b175.jpg",
                    "dvorec1.jpg": "embedded\u002Fb4cf7edecbfdb1bc9b66ee7a3ec47f257205eb6d42ef36f681ac82e4419f2bc7.jpg",
                    "dvorec2.jpg": "embedded\u002Fe6d02db5348c6b217b58cef9b5eca23aca3514e08e0c030de6006991472a9903.jpg",
                    "flirt1.jpg": "embedded\u002F97826fdc7d69d513cda48aa40f1a738a576af152ae06ff08b913584da6d3c389.jpg",
                    "flirt2.jpg": "embedded\u002F23ed26a626d09d1930e60648488f564ddc09c9249ea5997b4d0b5956be7c39d9.jpg",
                    "golod5.jpg": "embedded\u002F07b82ee0ae407ec9a22ba8159cec7bc11100daabd8dd3d0ac64ccb4d8de8f197.jpg",
                    "golod6.jpg": "embedded\u002F737c70727bd3cd4bcb25602b3154b101e607b9c9c7b435c8cc6bcfc62a95db2d.jpg",
                    "golub1.jpg": "embedded\u002F848a06c4b6d6c28b40b8b870d2c5bf0fd56fcd93016ef0421ce6acec1c2727df.jpg",
                    "golub2.jpg": "embedded\u002F4e770ac65ccf0c2b06305f9fa0a3de8ddf29841f7ba4d4d5c237af28b91a59ca.jpg",
                    "griva3.jpg": "embedded\u002Fe6dabf468b8166980691fd9d25feb3597516c29c941f1d604cb6372cc1743ac8.jpg",
                    "griva4.jpg": "embedded\u002F07e9e5a16115372070b04f242e1d5c400f38eb330387884a9a6a0cf7ec687089.jpg",
                    "grohot1.jpg": "embedded\u002F825560aa5fb0eb246d45ff2e0b7c63fa9902c6731711e8546fdbe864e4eecc75.jpg",
                    "grohot2.jpg": "embedded\u002Ff1a404937d3354dd1aea7c9697829b72141d8920ddbd239d3c1de97568ffeca1.jpg",
                    "grud5.jpg": "embedded\u002Ff03609ca42ef8b920e518ef9ce4f9b21502bbe26bb2f6b999f6dc470ef8a0e91.jpg",
                    "grud6.jpg": "embedded\u002Fbfeac55c432e734e3ac8330b10d50f33fbce4780a577d9d34e7c4dc556dec044.jpg",
                    "gruppa5.jpg": "embedded\u002Fbb44a0351a2659f45ab58f298cb7464947c73221a491e01c57df56254e0db265.jpg",
                    "gruppa6.jpg": "embedded\u002Ff1093ae333f79e5a7b62c3f00fa6b6b58032ff8bfb4de6d9abdd15737fb6b0dc.jpg",
                    "kabina1.jpg": "embedded\u002F884061423b4b11bbd3c56000a86eea726d6459f60911580486a9af244680e992.jpg",
                    "kabina2.jpg": "embedded\u002Fb49ff8f7681ef3e4accbae4ead2b5eca11673332c91488fc96ab782d50087099.jpg",
                    "karman3.jpg": "embedded\u002F52040f592dda6300ae21a366b757b7add9c04e470cbc392681225d6240eeeddf.jpg",
                    "karman4.jpg": "embedded\u002F6916e19107a06b8e39d48af8474b88537fbbe78dfef4575ea74c2d598e2ecb98.jpg",
                    "knopka3.jpg": "embedded\u002F289da7f4e18a54b87ce7393860666b6e26087b0d6b306efa6b349142f7426f97.jpg",
                    "knopka4.jpg": "embedded\u002F3473b9336b174ce7caa90386da2ab2e85ea6b84f20ddf8076708e9fa5d1e2ac1.jpg",
                    "koleso5.jpg": "embedded\u002Fbd36138d5ee99cb20acb1cda950c2e379cebf879bc1067374e298d42ae6297c2.jpg",
                    "koleso6.jpg": "embedded\u002Fbe6cfa400696021d05ae92236ea7b5baf7f0b6c1b065329552280fcc1fa47ad7.jpg",
                    "koloda3.jpg": "embedded\u002F50b7861fc00c7351e52763197e973d23652ed0bd9f896b3b73d4672edbfd1d99.jpg",
                    "koloda4.jpg": "embedded\u002F35611517382903981b45a084cda903276ea1cba91be2f7a050c3a280faf55b26.jpg",
                    "korova3.jpg": "embedded\u002F29e7f590c359cc7dca6296dfd8873fec4626af72805fac55eeb370057069e577.jpg",
                    "korova4.jpg": "embedded\u002Fd29a07c8273149bc6a3b483bc595cc040222ddfebc5263fdea3fe8ee0e64d5ef.jpg",
                    "krazha1.jpg": "embedded\u002Ff7fdbfc1f5104b959f67efc4b43e9c189194b3fa868199b544b42698a962aa40.jpg",
                    "krazha2.jpg": "embedded\u002F73023fbf0358b1f648d9e682544b47aa0da49112542366bee71311a80b7d6491.jpg",
                    "krupa5.jpg": "embedded\u002Fff7f6c7a9310b51c35e682ccd2c0cf8b91535e3df6f2b3d29d69c064da39eafe.jpg",
                    "krupa6.jpg": "embedded\u002F6f4a2c299cf819e88f0d8f4b591b237a40a4b87ac7a855590c5ddd1916b62568.jpg",
                    "kupol5.jpg": "embedded\u002F2b303ff8e87ba328fee5e6e00542c5a8d712e8caa760e3a3322d534e0bb74aa2.jpg",
                    "kupol6.jpg": "embedded\u002Fd621294e3f8ab34cf790016bd54c06e3c597346672217bc0a4fd2d8f05a262c2.jpg",
                    "kurtka1.jpg": "embedded\u002F9e176774ea57d3b12169c565b5a2fc357c0525ba8db11b5e2f3d8444a7867a9a.jpg",
                    "kurtka2.jpg": "embedded\u002Fbbfa74eaae1459d27b2cf46d660c6dbda21a286c9d9f264d6be13d5930f9abf7.jpg",
                    "listva3.jpg": "embedded\u002F85606cceb3a29e16364e23e73ae1ce07d2fb92bc1344800d86b5a2b45b84a2cd.jpg",
                    "listva4.jpg": "embedded\u002F252bd90947ad57bd718d3f55432e56cd7b4e7689b45b193ce57e448ea12c8b38.jpg",
                    "lustra1.jpg": "embedded\u002Fd50984328ae61d544f0930b2e874365c97e3d41d1895245fa719b60d9ddb52c2.jpg",
                    "lustra2.jpg": "embedded\u002F91a4a33a0672d5ab12280bf83192c3ea17920b64007427fa84c5f014a6c5ef97.jpg",
                    "mashina5.jpg": "embedded\u002F6a635173aad52d867a02a586c09d56ed22d21a584ae5add0fc4c0f50bcb2e839.jpg",
                    "mashina6.jpg": "embedded\u002Fecfe14e86832672f0605f5b52ed8c24c0fde882018dd18be1557d4d1bd6253f3.jpg",
                    "minuta1.jpg": "embedded\u002Fb65dfe97460ad49e49228b24684e5a39829e93544790d82e3bf7ca4b7404d43d.jpg",
                    "minuta2.jpg": "embedded\u002F7c07f029e922a0e588b684fda02c8455e0034897e3ae50fe90d909a5aabb8669.jpg",
                    "musor5.jpg": "embedded\u002F12d29969f664b82c73376bb7227139cfc4c890221073d30b6698f4fdab8c0a09.jpg",
                    "musor6.jpg": "embedded\u002Fefe7ca601d487c8632684c189e7fd57ae87b3c166e13db207a9b1dae61ba92a3.jpg",
                    "nogot3.jpg": "embedded\u002Fc3fa8e00e2d23a158d6d74e2ce3ebe21b020b1c18999f035c00535f627cc65f0.jpg",
                    "nogot4.jpg": "embedded\u002Fe8040b74702c2737636df606ab4a114628ed1512a3a007c6a8ab849ccda51e67.jpg",
                    "nomer3.jpg": "embedded\u002Fcda574354a21632f7a7014856dc0551d263c182d74447d2b9afdb55077a66b6e.jpg",
                    "nomer4.jpg": "embedded\u002F906e4343e1ee8e5ca7f45d371778de3cb340e650bd1d8af1f76b5eabd32cc0d9.jpg",
                    "oblako5.jpg": "embedded\u002F1b0d238ff45f65bbe6c1ff5d55a5a7cfa92b6c52f1a6d7f20a8366d122d17344.jpg",
                    "oblako6.jpg": "embedded\u002F8e24123688549ebaafe9303ad370004bc292d9346f7ba01c684313c25b9d67a3.jpg",
                    "okrug1.jpg": "embedded\u002F42951b7474c2e36c2983acb346028c4a24a1f4ed72ed36a591fb080d8c410480.jpg",
                    "okrug2.jpg": "embedded\u002F9cd712ad3885781a7caaef0906b331fe0d1eeb0b1a2bfc3de313842cbab70981.jpg",
                    "olen3.jpg": "embedded\u002F4fa75812e3cb0225addf618b715193d2f6681c45d7816daaf9dc2d7976afc258.jpg",
                    "olen4.jpg": "embedded\u002F3b5fec62c7d1e2eefe6025409fe55b5b68b73defe20f4e5c716a5dbd8b48ee39.jpg",
                    "oprava3.jpg": "embedded\u002F01db86c62751251df6897250933fceea08f5c89c5919830e4659efda9a737ad8.jpg",
                    "oprava4.jpg": "embedded\u002Fd887cc2d8cc7431f6ae7a4faaa6e0e9956c61500074a761dec5e16ae46409731.jpg",
                    "parik1.jpg": "embedded\u002F1552107299d62fe41ede3c6dfc3a3d2ebab32fda1150a41591f32aee52569d27.jpg",
                    "parik2.jpg": "embedded\u002F8b8a0ad6ec2e006776e3fa4089d164a9d8bd45c17b65d4804230a7af6e4401e1.jpg",
                    "partiya1.jpg": "embedded\u002F7d7c9230c40c7f703fe0f90c814c2949cce88c34ab84e9efd1293f80680182e3.jpg",
                    "partiya2.jpg": "embedded\u002F83bdc28868801472a1cf7c450c822a014c02ab74cf39fc6e83fd1da6d02bfb8b.jpg",
                    "pechal1.jpg": "embedded\u002F50eede49ca4abb121e112f023701cd35d4d1b7baa0c7a21bc97d2fd304a268cd.jpg",
                    "pechal2.jpg": "embedded\u002F0a6fd695ccd364349f26439f21743859b981fa5bc474ae670da2b052b01dcc6d.jpg",
                    "penal1.jpg": "embedded\u002F059e0072be4ad04fd414e744fee103555517bc4e37442aebd36b16376f30a0dc.jpg",
                    "penal2.jpg": "embedded\u002F5556fe665d099e1f1b4b904769b50f25dd547caeebbfb8b892b9700089d368cc.jpg",
                    "platok5.jpg": "embedded\u002Fb825b929878fd3b9da7463deca03ecfb985bfc22c920f078c88c63f10528f381.jpg",
                    "platok6.jpg": "embedded\u002Fb222052147af4c1d6454bdbd4341103ccbb3cf9e14bd8d43c70db5eaa5a59ce4.jpg",
                    "plecho1.jpg": "embedded\u002F6e16fa73d190e7b481439c37817a6f1f045d8d579527fc044efdd28b33e635cd.jpg",
                    "plecho2.jpg": "embedded\u002Fe884f443232a952b3491e0befbfaa795f735705d40e7c124fe247ace752fa07c.jpg",
                    "plita3.jpg": "embedded\u002F4aa575560c180dea62385a0a0689a0760bee8e41f3aacd8db285f50b8e39755e.jpg",
                    "plita4.jpg": "embedded\u002Fbb4ccc85d542e57b88e548e5713082b982cba71c9c18590fbf6a21e446cf4251.jpg",
                    "poroda5.jpg": "embedded\u002F2214a93d2aad4eb2d8bfccdf8f945482ee7927a580face29f4be47e67d58308b.jpg",
                    "poroda6.jpg": "embedded\u002Ffb0d88a23924b7fad885a0565d8b721c57d2a8824ee9f71eeb1639495ece7194.jpg",
                    "pravda5.jpg": "embedded\u002F26ac26a93fb3488bf4e6fe04aa6a71528b17c7d8872827facc646defd791f341.jpg",
                    "pravda6.jpg": "embedded\u002F1b462a3c17e61eb907f8d6fd1c46ef436356ed27b86303af227eef2e5be4b683.jpg",
                    "probka3.jpg": "embedded\u002F6441ad4ca2f9807616c705fde89050109350ed17719d68d25d265b41ba619875.jpg",
                    "probka4.jpg": "embedded\u002F13f46f1939d1c7eb59a576825707ad6053164e61ec227eeddb66629e61464d3b.jpg",
                    "pudra1.jpg": "embedded\u002Fccbf45d8169435b55238b62d25849ffb7a9a73bd6857ef5c166e61f455a8c92c.jpg",
                    "pudra2.jpg": "embedded\u002Fa2aeef1936817655b1119f1e3c41dd65fc120bf65758bbe307bf461c4415c231.jpg",
                    "punkt1.jpg": "embedded\u002Ffb0a3b83f543efa922e8973a627974d04bfbbab6177f5c691f334a68448dd646.jpg",
                    "punkt2.jpg": "embedded\u002F6f539a3771942d05a53d4dcc81b189d30a944208db286f22edd85a0d9c0f84bb.jpg",
                    "rebus5.jpg": "embedded\u002F5430a672ac2ca6b9e3b4f91ceff14e91889ef114fc798dd9d010b45e7b40a3aa.jpg",
                    "rebus6.jpg": "embedded\u002Ff4c5094754feca6d65bc5708d31e81dadf921aa63b54353fdd317f5cf64ae435.jpg",
                    "recept5.jpg": "embedded\u002Fadf76ea2b08e2136720f972fd42c2b0465e1d51032902788796881ccf9ea5780.jpg",
                    "recept6.jpg": "embedded\u002F3b9baa00380faea2bdf49e668a79016335ce3a2fdedf9593cefe50f86290b119.jpg",
                    "rodina1.jpg": "embedded\u002F88557fd7f4934983b8b7c95657f002ffc51ed0ecc994131775bdaec8883b3eca.jpg",
                    "rodina2.jpg": "embedded\u002F923a2fd9f215515791665bcaaa532fad2bd365bb1985648974807e9a65e89252.jpg",
                    "secret1.jpg": "embedded\u002F8abb6b8af4730a3aed4fb1aeecabade12485ec333d91cb35b60e5f5872dc2c9b.jpg",
                    "secret2.jpg": "embedded\u002Fee1fa3bd1fcfa8d408358d236afe36b666f1aeb366c0a820ddfa680eea786de2.jpg",
                    "sedlo5.jpg": "embedded\u002F715e3e901739df24c54be3fa988913810a6d709456ec0f674f82301eb8ae68bb.jpg",
                    "sedlo6.jpg": "embedded\u002F3550e26773d1dcfac04056c9dd1b01bf742d3c5fcbb7e9e076e19d009b953c21.jpg",
                    "sestra3.jpg": "embedded\u002F21a95e8e27ceb1db40a80205220cc8e2f83274169916652c14f2610f157475ca.jpg",
                    "sestra4.jpg": "embedded\u002Fd7c57d45669e79a5263ad2c149754010fe762369ad518c20d13e59c2a560c058.jpg",
                    "shema5.jpg": "embedded\u002F1e31dd96baebba0cd8fb0bd525ad77fb379c09bc8e45ce96a65090fc5ce79828.jpg",
                    "shema6.jpg": "embedded\u002F1cf509c9804b463557bbb085b008c2eae6b9a3ca15defaaeb810aa95ab31b23b.jpg",
                    "shirma5.jpg": "embedded\u002Fb0e594347cc18d9123db506263ae14ff8d80bd8b52a6b115e8dba83f6a75ef3a.jpg",
                    "shirma6.jpg": "embedded\u002Fe2779a828bf967e2aa3a46a1cec10a7449634067bda8b5fe1448888df7f71a9c.jpg",
                    "signal3.jpg": "embedded\u002Fee9033a9ce6b6df375938e4587ac3cd51d4ae302fba7ee907698c3000f55b663.jpg",
                    "signal4.jpg": "embedded\u002Faeac0c4ddf37dd91d03335cb6d7836e21df8b71483585718c4fa5c863dc62a25.jpg",
                    "soldat5.jpg": "embedded\u002F711a400cd5ff61f688a2d35a5b3810e1858f2ad3033d3ccb35538815d513072c.jpg",
                    "soldat6.jpg": "embedded\u002Fe1bc893b820800ecd243af4be1313ccd0a3f2fcab93728a0f20ebc1531ef8089.jpg",
                    "soloma1.jpg": "embedded\u002F361b4a03c35f9ad2ca0348c11cebba73d4d4d2740c9653599c51f45044d6558a.jpg",
                    "soloma2.jpg": "embedded\u002F1894ccaa79a4a2a76318308c194cb227674f56abbb3fe0ac95b917e8c127f1da.jpg",
                    "sosud3.jpg": "embedded\u002F48f03af1cf963c840281215b2f0c632e63c4545c382472c902551bfff8cc1d77.jpg",
                    "sosud4.jpg": "embedded\u002F203d494950d88ecd2ef171adb6ba0e54c3c0ebb9862217091c5bd53d27fbc9d9.jpg",
                    "stakan1.jpg": "embedded\u002F640f1094fb5242976d4bba159df1dea3eb744ce2a60b28c7847b2ee126cc3d96.jpg",
                    "stakan2.jpg": "embedded\u002F0cc42bb9dcf52ede3efb5c8ddfb7040bb10b6790365672034582ccf7287f797d.jpg",
                    "stopa3.jpg": "embedded\u002F5c5e1d481dde962baf741c5c8fca9837bab5371a8fd5653465da1e2b1814d31e.jpg",
                    "stopa4.jpg": "embedded\u002F99ba13f0102a2d429eafd10feb646bf8a138f93790cd771d9a0e3bef3a5db86b.jpg",
                    "stvol5.jpg": "embedded\u002F6488389438547157d75ea9b333f11b0f2deaeae3186b65692d33639d54f56f47.jpg",
                    "stvol6.jpg": "embedded\u002F2cefeeb837d61c1d6081b230ef3ab407cf1bde19b75a6d30ce32c3a9efb20330.jpg",
                    "sumka3.jpg": "embedded\u002F83a4609a48c9c3767693c7a6facedf579e61b281791caec802e0d5b10c0512a4.jpg",
                    "sumka4.jpg": "embedded\u002F56af6d7b108b5cca067f8d0bd007edd924150c574962650778a52c693f65694a.jpg",
                    "svita1.jpg": "embedded\u002F12603e4c60099376df2a42019d8d675b4e3c51afcc4120b4bb41dbebd9aa4912.jpg",
                    "svita2.jpg": "embedded\u002F0a4e5251e0b4b435228c90f80a9e35d7b083620b5a1d72463763aaa7985cfb7d.jpg",
                    "tablo5.jpg": "embedded\u002F7d76234daa495028879413b5680c818ca963c0ef3b97e89431d7f3042a000c55.jpg",
                    "tablo6.jpg": "embedded\u002Fcc2e59f70700aeb0712974b924c0eeec9a27ebebe78944689120cc3920d05f3a.jpg",
                    "topaz3.jpg": "embedded\u002Fc52ff55a31359956d140e86b6b99ae2c1fd5e72a503a16ddee22a2fc946f24d1.jpg",
                    "topaz4.jpg": "embedded\u002Fc959887c93437a9e7817938288c084ba58f4f6ac71f0d5fac8746f0e75090257.jpg",
                    "tormoz3.jpg": "embedded\u002F75cf30aadee60e72ae6978e39939548f25d0ff5917fbf2a4e0f83ff14a2548f8.jpg",
                    "tormoz4.jpg": "embedded\u002F5c10bb47c8d25d36d1b55b9dfa5ee66ae729831fb190e9f833786f6646dbe6c3.jpg",
                    "tryapka3.jpg": "embedded\u002Fb0acc454677dfd06ac0bd71f7299407ed69182c183f1151c4bfd0062b5b46ff7.jpg",
                    "tryapka4.jpg": "embedded\u002F41c981762a784a1b82186a1583dd460b4baf900f9166b9098b154b32e802b895.jpg",
                    "vdova5.jpg": "embedded\u002F2d3a1bb91bee918511c3fdf745e5b77764ff99d38e2a56af34b1dec88722b589.jpg",
                    "vdova6.jpg": "embedded\u002F4aab389046d40a051e667862b6317e572a30170062110e88a3ce1e401139b018.jpg",
                    "visok3.jpg": "embedded\u002F86a31ea1eace1b1a50784561928dd7d64be6d0057e98719a03294d82077415c7.jpg",
                    "visok4.jpg": "embedded\u002F2996fa4f192e8eff54ae7bef66042ec1614cb9e67fffed7bb35849e87948847f.jpg",
                    "vlast5.jpg": "embedded\u002Ff955a4f214033f94c3972b2840c2850e7642a3ccd5a5ee67fc937ddf29ff673b.jpg",
                    "vlast6.jpg": "embedded\u002Fc3379d2cf7d9bab3612ffd0f17cdf479c9510f3d55026b084d99c690e2a32646.jpg",
                    "vozhak3.jpg": "embedded\u002F4a3a214052aa5d0bf68507f283cd3d6d3220084b61444419861849b847b56175.jpg",
                    "vozhak4.jpg": "embedded\u002F603e9aee55f07d01ed2da8ef6e2748a2f13a52d7be416e693c5390703cbf05b6.jpg",
                    "vulcan3.jpg": "embedded\u002F7292b9267f57465ad4c6ac7734f9ed06145ff845289aedf9349894f17124de2d.jpg",
                    "vulcan4.jpg": "embedded\u002F40eb1e86f544b6763041951425029c2ec4d9fb25fde8072971232bc01ca9b660.jpg",
                    "zalog1.jpg": "embedded\u002F8d7588fe1153995e724d82baaacb446bf34eeb14e660dd0c5b9c3e18a61b38c1.jpg",
                    "zalog2.jpg": "embedded\u002F1f3e96a0e1c5c2b993841081413b59f3c29a6fc21b11f1a33fbff5ff09f80ab4.jpg",
                    "zemlya1.jpg": "embedded\u002F19c9528720e808e9ddcd44f283a412d055b39f6df95413c88ff9e0f41e680cd6.jpg",
                    "zemlya2.jpg": "embedded\u002F1a46495bbca6d499a878128e4cb149af7c8c69a58fb0faf02c2f1f0009a11b2f.jpg",
                    "zvezda5.jpg": "embedded\u002Ffee292b09a84ce9f53a405fd3cfb601ef404104b550a1fc7b05db9a87e6c3937.jpg",
                    "zvezda6.jpg": "embedded\u002Fc0906c5617d7a34a12a365c9c35c41b8402d8127a535a99e96ff038fff2f3e28.jpg"
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