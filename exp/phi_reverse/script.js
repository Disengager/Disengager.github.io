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
      "filePrefix": "phi_const",
      "path": undefined
    }
  ],
  "metadata": {
    "title": "phi_const",
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
          "content": "\u003Ccenter\u003E\r\n\u003Cdiv class=\"detect_card\" style=\"text-align: left; width: 600px; height: 700px\"\u003E  \r\n\u003Ch3\u003EСпасибо, что согласились \u003Cbr\u003Eпринять участие в нашем исследовании!\u003C\u002Fh3\u003E\r\n\r\n\u003Cp\u003E\r\nДоброволец ознакомлен: \u003Cbr\u003E\r\n1.\tДлительность исследования составляет 20 минут.  \u003Cbr\u003E\r\n2.\tЦель исследование - Исследование посвящено изучению того, как происходит решение восприятие движения. \u003Cbr\u003E\r\n3.\tЗадача добровольца в исследовании дать ответ, воспринималась ли демонстрация стимульного материала, как движение.\u003Cbr\u003E\r\n\u003C\u002Fp\u003E\r\n\u003Cp\u003E\r\nДоброволец предупрежден:\u003Cbr\u003E\r\n1.\tО необходимости соблюдения требований сотрудников института, проводящих исследование;\u003Cbr\u003E\r\n2.\tВ случае приема каких-либо медикаментов доброволец должен сообщить об этом исследователю;\u003Cbr\u003E\r\n\u003C\u002Fp\u003E\r\nЯ даю разрешение на использование результатов исследования в научных целях без ссылки на мое имя.\u003Cbr\u003E\r\nЯ даю согласие на обработку моих персональных данных в соответствии с п.1 ч.1 ст. 6 Федерального закона №152-ФЗ от 27.06.2006 «О персональных данных» в целях проведения данного научного исследования.\r\n\r\n\u003Ccenter\u003E\u003Cbutton type=\"submit\" class=\"custom-btn btn-3\"\u003E\u003Cspan\u003EСогласен\u003C\u002Fspan\u003E\u003C\u002Fbutton\u003E\u003C\u002Fcenter\u003E\r\n\u003C\u002Fdiv\u003E\r\n\u003C\u002Fcenter\u003E",
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
      "title": "Информированное согласие"
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "required": true,
          "type": "html",
          "content": "\u003Ccenter\u003E\r\n\u003Cdiv class=\"detect_card\" style=\"text-align: left; width: 470px; height:  605px\"\u003E\r\n\u003Clabel for=\"ID\"\u003EВведите свой ID:\u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\u003Cinput type=\"number\" id=\"ID\" name=\"ID\"\r\n       min=\"1\"  required\u003E\u003Cbr\u003E\r\n\u003Clabel for=\"age\"\u003EВведите свой возраст:\u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\u003Cinput type=\"number\" id=\"age\" name=\"age\"\r\n       min=\"1\"  required\u003E\u003Cbr\u003E\r\n\u003Clabel for=\"sex\"\u003EВаш пол:\u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\u003Cselect class=\"custom-btn custom_select\" name=\"sex\"\u003E\r\n  \u003Coption value=\"f\" selected\u003Eженский\u003C\u002Foption\u003E\r\n  \u003Coption value=\"m\"\u003Eмужской\u003C\u002Foption\u003E\r\n\u003C\u002Fselect\u003E\u003Cbr\u003E\r\n\u003Clabel for=\"list\"\u003EВыберите лист:\u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\u003Cselect class=\"custom-btn custom_select\" name=\"list\"\u003E\r\n  \u003Coption value=\"1\" selected\u003E1\u003C\u002Foption\u003E\r\n  \u003Coption value=\"2\"\u003E2\u003C\u002Foption\u003E\r\n\u003C\u002Fselect\u003E\u003Cbr\u003E\r\n\u003Clabel for=\"block\"\u003EВыберите блок:\u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\u003Cselect class=\"custom-btn custom_select\" name=\"block\"\u003E\r\n  \u003Coption value=\"1\" selected\u003E1\u003C\u002Foption\u003E\r\n  \u003Coption value=\"2\"\u003E2\u003C\u002Foption\u003E\r\n  \u003Coption value=\"3\"\u003E3\u003C\u002Foption\u003E\r\n\u003C\u002Fselect\u003E\u003Cbr\u003E\r\n\u003Clabel for=\"skip_traning\"\u003EПропустить \u003Cbr\u003Eтренировку?\u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\u003Cselect class=\"custom-btn custom_select\" name=\"skip_traning\"\u003E\r\n  \u003Coption value=\"1\"\u003EДа\u003C\u002Foption\u003E\r\n  \u003Coption value=\"0\" selected\u003EНет\u003C\u002Foption\u003E\r\n\u003C\u002Fselect\u003E\u003Cbr\u003E\r\n\u003Ccenter\u003E\u003Cbutton type=\"submit\" class=\"custom-btn btn-3\"\u003E\u003Cspan\u003EОтправить\u003C\u002Fspan\u003E\u003C\u002Fbutton\u003E\r\n\u003C\u002Fcenter\u003E\r\n\u003C\u002Fdiv\u003E\r\n\u003C\u002Fcenter\u003E",
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
window.ID = parseInt(this.data.ID)
window.list = parseInt(this.data.list)
window.age = parseInt(this.data.age)
window.sex = this.data.sex
window.block = parseInt(this.data.block)
window.skip_traning = parseInt(this.data.skip_traning)

start()
}
      },
      "title": "Анкета"
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "required": true,
          "type": "html",
          "content": "\u003Ccenter\u003E\r\n\u003Cdiv class=\"detect_card\" style=\"text-align: left; width: 600px; height: 430px\"\u003E\r\n  \u003Cp\u003E Всего исследование будет длиться 20-30 минут и состоять из 3 блоков, между которыми будет небольшой перерыв. \u003C\u002Fp\u003E\r\n  \u003Cp\u003E Вам будут предъявляться картинки, и если Вы будете ощущать плавное (непрерывное) движение пятна по кругу, Вам необходимо нажать клавишу «q» на клавиатуре. Если Вы не ощутили движения, а например, вы видите, что элементы появляются одновременно, поочердёно мигают, или двигаются, но прерывисто, а не плавно, Вам необходимо нажать клавишу «w» на клавиатуре. \r\n    \u003Cbr\u003E\u003Cbr\u003E\u003Cu\u003EВремя ответа ограничено 3 секундами.\u003C\u002Fu\u003E\u003Cbr\u003E\r\n\u003Ccenter\u003E\u003Cbutton type=\"submit\" class=\"custom-btn btn-3\"\u003E\u003Cspan\u003EДалее\u003C\u002Fspan\u003E\u003C\u002Fbutton\u003E\u003C\u002Fcenter\u003E\r\n\u003C\u002Fdiv\u003E\r\n\u003C\u002Fcenter\u003E",
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
      "title": "Инструкция"
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "required": true,
          "type": "html",
          "content": "\u003Ccenter\u003E\r\n\u003Cdiv class=\"detect_card\" style=\"text-align: left; width: 600px; height: 420px\"\u003E\r\n Пример, картинки, на которой присутствует движение:\u003C\u002Fp\u003E\r\n \u003Ccenter\u003E \u003Cimg src=\"https:\u002F\u002Fi0.wp.com\u002Fmentalbomb.com\u002Fwp-content\u002Fuploads\u002F2023\u002F01\u002FMagni-phi-phenomonon.gif?fit=330%2C337&amp;ssl=1\" width=\"280px\"\u003E\u003C\u002Fcenter\u003E\r\n\u003Ccenter\u003E\u003Cbutton type=\"submit\" class=\"custom-btn btn-3\"\u003E\u003Cspan\u003EДалее\u003C\u002Fspan\u003E\u003C\u002Fbutton\u003E\u003C\u002Fcenter\u003E\r\n\u003C\u002Fdiv\u003E\r\n\u003C\u002Fcenter\u003E",
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
      "title": "Инструкция"
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "required": true,
          "type": "html",
          "content": "\u003Ccenter\u003E\r\n\u003Cdiv class=\"detect_card\" style=\"text-align: left; width: 600px; height: 450px\"\u003E  \r\n  \u003Cp\u003E\r\nЕсли вы ответили, что увидели движение появится экран, на котором вам надо указать какое направление у движения, которое вы увидели: \u003Cbr\u003E\r\n1. Если движение идет по часовой стрелке, нажмите клавишу «u» на клавиатуре. \u003Cbr\u003E\r\n2. Если движение идет против часовой стрелки, нажмите клавишу «j» на клавиатуре. \u003Cbr\u003E\r\n3. Если вы ощутили, что движение есть, но не можете понять направление этого \r\nдвижения, то нажмите клавишу «m» на клавиатуре. \u003C\u002Fp\u003E\r\n  \u003Cp\u003E Пожалуйста, давайте свой ответ в тот момент, когда на экране появится надпись: &quot;укажите направление движения&quot;. \u003C\u002Fp\u003E\r\n\u003Ccenter\u003E\u003Cbutton type=\"submit\" class=\"custom-btn btn-3\"\u003E\u003Cspan\u003EНачать\u003C\u002Fspan\u003E\u003C\u002Fbutton\u003E\u003C\u002Fcenter\u003E\r\n\u003C\u002Fdiv\u003E\r\n\u003C\u002Fcenter\u003E",
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
      "title": "Инструкция"
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
        "n": "${ stimules.targets.length }"
      },
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {
        "after:prepare": function anonymous(
) {
window.timer_enabled = false;
window.space_counter = 0;
window.timer_start = 0;
window.animation_frameId = null;

document.addEventListener('keydown', (event) => {
    if (event.key !== ' ') return;
    
    // Защита от повторных срабатываний при зажатой клавише
    if (event.repeat) return;
    
    console.log('Space pressed');
    
    if (!window.timer_enabled) {
        window.timer_enabled = true;
        window.space_counter = 0;
        window.timer_start = 0;
        
        // Запускаем анимацию
        window.animation_frameId = requestAnimationFrame(countFrame);
    }
});

document.addEventListener('keyup', (event) => {
    if (event.key !== ' ') return;
    
    console.log('Space released');
    
    if (window.timer_enabled && window.animation_frameId !== null) {
        // Останавливаем анимацию
        cancelAnimationFrame(window.animation_frameId);
        
        // Вычисляем фактическое время
        const actualTime = performance.now() - window.timer_start;
        const estimatedTime = window.space_counter * (1000/60);
        
        console.log(`=== Результаты ===`);
        console.log(`Кадров: ${window.space_counter}`);
        console.log(`Фактическое время: ${actualTime.toFixed(2)} мс`);
        console.log(`Расчетное время (60 FPS): ${estimatedTime.toFixed(2)} мс`);
        console.log(`Фактический FPS: ${((window.space_counter / actualTime) * 1000).toFixed(2)}`);
        
        // Сброс всех переменных
        window.timer_enabled = false;
        window.space_counter = 0;
        window.timer_start = 0;
        window.animation_frameId = null;
    }
});

function countFrame(timestamp) {
    // Выход, если таймер отключен
    if (!window.timer_enabled) return;
    
    // Устанавливаем время начала при первом кадре
    if (window.timer_start === 0) 
        window.timer_start = timestamp || performance.now();
    
    // Увеличиваем счетчик кадров
    window.space_counter++;
    
    // Запрашиваем следующий кадр
    window.animation_frameId = requestAnimationFrame(countFrame);
}

}
      },
      "title": "Последовательность",
      "tardy": true,
      "indexParameter": "prob_i",
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
        "skip": "${ window.skip_traning == 1 && stimules.get_by_key('trial_id', parameters.prob_i) \u003C= 0 }",
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
                "stroke": "#000000",
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "+",
                "fontStyle": "normal",
                "fontWeight": "bold",
                "fontSize": "64",
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
            "timeout": "1000"
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
              "n": "10"
            },
            "files": {},
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {
              "run": function anonymous(
) {
window.pressed_buttons.start()
},
              "end": function anonymous(
) {
window.pressed_buttons_str = window.pressed_buttons.to_string()
window.pressed_buttons.finish();
}
            },
            "title": "Иллюзия",
            "indexParameter": "elem_i",
            "tardy": true,
            "shuffleGroups": [],
            "template": {
              "type": "lab.html.Page",
              "items": [
                {
                  "required": true,
                  "type": "html",
                  "content": "\u003Cdiv class=\"parent\"\u003E\r\n  \u003Cimg src=\"${ state.img }\" class=\"${ 'elem el_0' +  (parameters.elem_i != stimules.get_direction(parameters.prob_i, 0)? \" \" : \" hide\") }\"\u003E\r\n  \u003Cimg src=\"${ state.img }\" class=\"${ 'elem el_1' +  (parameters.elem_i != stimules.get_direction(parameters.prob_i, 1)? \" \" : \" hide\") }\"\u003E\r\n  \u003Cimg src=\"${ state.img }\" class=\"${ 'elem el_2' +  (parameters.elem_i != stimules.get_direction(parameters.prob_i, 2)? \" \" : \" hide\") }\"\u003E\r\n  \u003Cimg src=\"${ state.img }\" class=\"${ 'elem el_3' +  (parameters.elem_i != stimules.get_direction(parameters.prob_i, 3)? \" \" : \" hide\") }\"\u003E\r\n  \u003Cimg src=\"${ state.img }\" class=\"${ 'elem el_4' +  (parameters.elem_i != stimules.get_direction(parameters.prob_i, 4)? \"\" : \" hide\") }\"\u003E\r\n  \u003Cimg src=\"${ state.img }\" class=\"${ 'elem el_5' +  (parameters.elem_i != stimules.get_direction(parameters.prob_i, 5)? \" \" : \" hide\") }\"\u003E\r\n  \u003Cimg src=\"${ state.img }\" class=\"${ 'elem el_6' +  (parameters.elem_i != stimules.get_direction(parameters.prob_i, 6)? \"\" : \" hide\") }\"\u003E\r\n  \u003Cimg src=\"${ state.img }\" class=\"${ 'elem el_7' +  (parameters.elem_i != stimules.get_direction(parameters.prob_i, 7)? \" \" : \" hide\") }\"\u003E\r\n  \u003Cimg src=\"${ state.img }\" class=\"${ 'elem el_8' +  (parameters.elem_i != stimules.get_direction(parameters.prob_i, 8)? \" \" : \" hide\") }\"\u003E\r\n  \u003Cimg src=\"${ state.img }\" class=\"${ 'elem el_9' +  (parameters.elem_i != stimules.get_direction(parameters.prob_i, 9)? \" \" : \" hide\") }\"\u003E\r\n\u003C\u002Fdiv\u003E\r\n",
                  "name": ""
                }
              ],
              "scrollTop": true,
              "submitButtonText": "Continue →",
              "submitButtonPosition": "hidden",
              "files": {
                "arrow_left.png": "embedded\u002Fd6258093c2e3fc0242b899cbdca8c23ab182b349341321f7737fabceb91d1097.png",
                "arrow_right.png": "embedded\u002F2ec660850e24f168e89b2c1286a7e00c9fb6242d93a1cd700517b6c077e99a23.png"
              },
              "responses": {},
              "parameters": {},
              "messageHandlers": {
                "before:prepare": function anonymous(
) {
this.parameters['img'] = stimules.get_img(this.parameters.prob_i, this.files)
let img = this.parameters['img']
console.log(img)
if(stimules.targets[this.parameters.prob_i].reverse == 1 && 
    this.parameters.elem_i > 4) {
  console.log('reverse > 4')
  img = stimules.get_rev_img(this.parameters.prob_i, this.files)
  console.log(img)
}
this.state.img = img
console.log(this.state.img)
}
              },
              "title": "Поэлементный показ",
              "tardy": true,
              "timeout": "${ stimules.get_elem_dur(parameters.prob_i) } "
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
                "width": 407.34,
                "height": 36.16,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "укажите было ли движение",
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
                "top": 250,
                "angle": 0,
                "width": 174.06,
                "height": 78.11,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "q - было\nw - не было",
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
              "keydown(q,й)": "motion",
              "keydown(w,ц)": "no_motion"
            },
            "parameters": {},
            "messageHandlers": {
              "end": function anonymous(
) {
window.motion_resp = this.data.response
window.motion_rt = this.data.duration

}
            },
            "title": "motion_resp (script)",
            "timeout": "3000"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 477.75,
                "height": 36.16,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "укажите направление движения",
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
                "top": 250,
                "angle": 0,
                "width": 267.13,
                "height": 120.05,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "#ffffff",
                "text": "u - по часовой\nj - против часовой\nm - не уверен",
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
              "keydown(u,г)": "по часовой",
              "keydown(j,о)": "против часовой",
              "keydown(m,ь)": "без направления"
            },
            "parameters": {},
            "messageHandlers": {
              "end": function anonymous(
) {
// сохраняются данные ответа с прошлого экрана, время ответа, с этого экрана (ответ и время), с анкеты данные по полу и ID испытуемого, данные из стимульного материала

//сохранение данных о параметрах исследования
this.state.ID = window.ID
this.state.list = window.list 
this.state.block = window.block
this.state.age = window.age
this.state.sex = window.sex
//сохранение данных об экране распознавания движения
this.state.motion_resp = window.motion_resp
this.state.motion_rt = window.motion_rt
this.state.direction_resp = this.data.response
this.state.direction_rt = this.data.duration

this.state.pressed_buttons = window.pressed_buttons_str

// сохранение данных о пробе
this.state.fade_direction = stimules.get_by_key('fade_direction', this.parameters.prob_i)
this.state.arrow_direction = stimules.get_by_key('arrow_direction', this.parameters.prob_i)
this.state.interval = stimules.get_by_key('interval', this.parameters.prob_i)
this.state.trial_type = stimules.get_by_key('trial_type', this.parameters.prob_i)
this.state.trial_id = stimules.get_by_key('trial_id', this.parameters.prob_i)
this.state.relax = stimules.get_by_key('relax', this.parameters.prob_i)
this.state.reverse = stimules.get_by_key('reverse', this.parameters.prob_i)
}
            },
            "title": "direaction_resp (script)",
            "skip": "${ window.motion_resp == \"no_motion\" }",
            "tardy": true,
            "timeout": "3000"
          },
          {
            "type": "lab.html.Page",
            "items": [
              {
                "required": true,
                "type": "html",
                "content": "\u003Ccenter div class=\"detect_card\" style=\"width: 600px; height: 250px\"\u003E \u003Ch2\u003EПоздравляю с окончанием тренировки!\u003C\u002Fh2\u003E\u003Cp\u003E \u003Ch3\u003EТеперь Вы можете перейти к основной части эксперимента. \u003C\u002Fh3\u003E\r\n\r\n\u003Cbutton type=\"submit\" class=\"custom-btn btn-3\"\u003E\u003Cspan\u003EНачать\u003C\u002Fspan\u003E\u003C\u002Fbutton\u003E \u003C\u002Fcenter\u003E\r\n",
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
            "title": "Конец тренировки",
            "skip": "${ stimules.get_by_key('trial_id', parameters.prob_i) != 0  }"
          },
          {
            "type": "lab.html.Page",
            "items": [
              {
                "required": true,
                "type": "html",
                "content": "\u003Ccenter div class=\"detect_card\" style=\"width: 600px; height: 270px\"\u003E \u003Ch2\u003E Блок подошёл к концу, можете немного передохнуть. \u003C\u002Fh2\u003E\u003Ch3\u003EКогда будете готовы нажмити кнопку \"Продолжить\". \u003C\u002Fh3\u003E\r\n\r\n\u003Cbutton type=\"submit\" class=\"custom-btn btn-3\"\u003E\u003Cspan\u003EПродолжить\u003C\u002Fspan\u003E\u003C\u002Fbutton\u003E \u003C\u002Fcenter\u003E\r\n",
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
            "title": "Конец блока",
            "skip": "${ stimules.get_by_key('relax', parameters.prob_i) == \"FALSE\"}"
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
          "content": "\u003Ccenter\u003E\r\n\u003Cdiv class=\"detect_card\" style=\"text-align: left; width: 590px; height:  120px\"\u003E\r\n\u003Ch2\u003EБлагодарим за участие в исследовании!\u003C\u002Fh2\u003E\r\n\u003C\u002Fdiv\u003E\r\n\u003C\u002Fcenter\u003E",
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
      "title": "Финал *код",
      "timeout": "100"
    }
  ]
})

// Let's go!
study.run()