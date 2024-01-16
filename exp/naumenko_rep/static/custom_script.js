//все стимулы
//объект

/*
!Для того, чтобы отправлять результаты в гугл таблицу 

Нужно вставить функцию на последний экран в эксперименте в событие end
stimules.send_form(
  this, 
  ["Стимулы *код"], 
  [ 
    ["Проверка_на_бессознательность", "inversion"], 
    ["Проверка_на_бессознательность", "words"], 
    ["Анкета", "sex"],
    ["Анкета", "age"],
    ["Анкета", "email"],
  ],
  [
    ['group', seq_n],
    ['prime_time', params['prime_time']]
  ]
)

параметры - th, _answers, _check
_anwsers - с какого экрана брать ответы (предусматривает только 1 экран на котором будут все ответы по человеку)
_check - экран откуда чекать проверку на бессознательность и доп инфу - в общем доп актимвность не связанная на пряую с гипотезой
_custom - переменные, которые можно закинуть своему (нет в результатах прохождения)
*/



/* 
!Для того, чтобы добавить в таблицу с результатами конкретные переменные, которые не связаны с ответом человека (например переменные, которые задавались в данной пробе)

Вставить на экран, где отвечает испытуемый в событие end

stimules.fill_custom_column(this, ["prime", "targets_category", "correct", "color", "target"], {"arr": 2})
параметры - elem, params, kw_params
params - название столбцов, которые мы хотим отправить (мы их например, берём для конкретной пробы)
kw_params - параметры, которые мы хотим добавить не из файла с последовательностями а от себя (например вермя), если ничего не хотим оставляем пустым {}.
stimules.fill_custom_column(this, ["prime", "targets_category", "correct", "color", "target"], {})
*/


var the_url = "https://script.google.com/macros/s/AKfycbxlgAk52ChBGg5iEdwDmJxshYRpjK_expx4shb_b2-nBbAWZ9-xuCmIXyGu2BI_Da5G/exec" //куда отправлять результаты
let seq_n = 1, //номер последовательности по дефолту
		links = { //ссылки на последовательности
			1: 'static/sequence_1.csv', 
			2: 'static/sequence_2.csv',
			3: 'static/sequence_3.csv',
			4: 'static/sequence_4.csv'
		};

class Stim {
	constructor(link) {
		console.log(link)
		this.read_csv(link);
	}
	result = {}
	get_tg(counter) {
		return(this.targets[counter].target)
	}
	get_by_key(counter, key) {
		return(this.targets[counter][key])
	}
	get_fixation_time(counter) {
		console.log(counter)
		return(this.targets[counter].fixation_time)
	}
	get_prime(counter) {
		console.log(counter)
		return(this.targets[counter].prime)
	}
	get_prime_time(counter) {
		console.log(counter)
		return(this.targets[counter].prime_time)	
	}
	get_mask(counter) {
		console.log(counter)
		return(this.targets[counter].mask)
	}
	get_mask_time(counter) {
		console.log(counter)
		return(this.targets[counter].mask_time)
	}

	fill_custom_column(elem, params, kw_params) {
		let c = elem.parameters.counter;
		for(var i in params) {
			elem.state['df_' + params[i]] = this.get_by_key(c, params[i])
		}
		for(var i in kw_params) {
			elem.state['df_' + i] = kw_params[i]
		}
	}
	read_csv(link) {
		let xhr = new XMLHttpRequest();
		setTimeout(() => {  console.log("Пауза 1"); }, 2000);
		xhr.open("GET", link)
		xhr.send();

		xhr.onload = function() {
			if (xhr.status != 200) return "Error";

			let all_text = xhr.response;
			let lines = all_text.split("\r\n")
			let header = lines[0].split(",")
			let share = [];
			for (var i = 1; i < lines.length; i++) {
				let tmp = {}
				let empty = false
				for (var j = 0; j < header.length; j++) {
					tmp[ header[j] ] = lines[i].split(",")[j]
					if(lines[i].split(",")[j] == undefined) empty = true;
				}
				if(!empty)
					share.push(tmp)
			}

		  	console.log("test read csv")
			console.log(share)
			stimules.targets = share
		};  
	}
	send_form(th, _anwsers, _custom) {
		let data = th.options.datastore.data,
				result = [];

		for(let ind in data) {
			for(let ind2 in _anwsers) 
				if(data[ind].sender == _anwsers[ind2])
					result.push(data[ind])
		}

	
		let xmlhttp = new XMLHttpRequest(),
	    	slice_formdata = new FormData();
	    
	    for(var i in _custom)
				slice_formdata.append(_custom[i][0], _custom[i][1]);

	  	slice_formdata.append('data', JSON.stringify(result));
		this.result = result
	    console.log(result)
	    
		xmlhttp.open("POST", the_url, false);
		xmlhttp.send(slice_formdata);
	    console.log(slice_formdata)
	}
	count_result(th) {
		//подсчёт количества правильных и неправильных ответов
		window.result = {
			"неверно": [],
			"верно": []
		}
		for(var item in this.result) {
			console.log(item)
			console.log(this.result)
			console.log(this.result[item])
			if(th.includes(this.result[item].sender)) {
				if(this.result[item].df_target_correctness == this.result[item].response)
					window.result["верно"].push(this.result[item].duration)
				else
					window.result["неверно"].push(this.result[item].duration)
			}
		}

		window.right_answers = window.result["верно"].length
		window.wrong_answers = window.result["неверно"].length


	}

	/*
	get_all() {
		return(this.check)
	},
	*/
		/*
	get_progress(counter) {
		return(counter / this.get_all().length * 100)
	},
	*/
}

var sizes = {
	card_width: 600,
	font_size: 24,
	size_px: 200,
	line_width: 7,
	canvas_width: 556,
	canvas_hight: 0,
	get_size_px: function() {
		return Math.abs(this.size_px)
	},
	stimules_size: function() {
		return sizes.size_px / 12
	}
}

class Size {
	canvas_id = ""
	line_color = "white"
	keys = ["ArrowLeft", "ArrowRight"]

	constructor(default_size, canvas_id) {
		//инициализация
		this.canvas_id = canvas_id
		sizes.font_size = default_size
		sizes.canvas_hight = sizes.line_width + 20
		this._y = sizes.canvas_hight / 2
        this._x = sizes.canvas_width / 2
        this.canvas = document.querySelector("#" + this.canvas_id)
		this.ctx = this.canvas.getContext("2d")
		this.ctx.strokeStyle = this.line_color
        this.ctx.lineWidth = sizes.line_width
        this.ctx.lineCap = 'butt'
        this.click_event = (e) => {
	        if (this.keys.includes(e.key)) {
	            e.key == "ArrowRight" ? sizes.size_px++ : sizes.size_px--
	            this.paint()
	        }
        };

        document.addEventListener("keydown", this.click_event);
	}
	paint() {
		let half = sizes.size_px / 2
		this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
        this.ctx.beginPath()
        this.ctx.moveTo(this._x - half, this._y)
        this.ctx.lineTo(this._x + half, this._y)
        this.ctx.stroke()
	}
	/*click_event(e) {
		
        if (this.keys.includes(e.key)) {
            e.key == "ArrowRight" ? this.size_px++ : this.size_px--
            console.log(e.key)
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
            this.paint()
        }
	}*/
}


	
//выбранна последовательность 
var params = {};

//при старте страницы	
	params = window
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


if(params['cb'] != undefined)
	seq_n = params['cb'] * 1

var stimules = new Stim(links[seq_n]),
	instruction = ''

switch(seq_n) {
  case 1:  
    instruction = "<p>Данное исследование направлено за изучение простых арифметических способностей.</p><p>Вам будет предъявлено 60 арифметических примеров с ответами. Ответ может быть верным или неверным. Например, в примере 5*5=25 – верный ответ. А вот в примере 5*5=30 – неверный. Если ответ примера кажется Вам правильным, нажмите клавишу «→» («стрелка вправо»), если неверным – клавишу «←» («стрелка влево»).</p>";
    break;
  case 2:  
    instruction = "<p>Данное исследование направлено за изучение простых арифметических способностей.</p><p>Вам будет предъявлено 60 арифметических примеров с ответами. Ответ может быть верным или неверным. Например, в примере 5*5=25 – верный ответ. А вот в примере 5*5=30 – неверный. Если ответ примера кажется Вам правильным, нажмите клавишу «→» («стрелка вправо»), если неверным – клавишу «←» («стрелка влево»).</p><p>Важно! Прямо перед тем, как на экране будут появляться примеры, на очень короткое время Вам будут предъявляться и другие.</p>";
    break;
  case 3:
  	instruction = "<p>Данное исследование направлено за изучение числовой интуиции.</p><p>Вам будет предъявлено 60 арифметических примеров с ответами. Ответ может быть правильным или неправильным. Например, в примере 455*641=291655 – правильный ответ, потому что если умножить 455 на 641, то получится ровно 291655. А вот в примере 455*641=2976557 – неправильный. Ваша задача – как можно быстрее, не производя вычислений, угадать, правильный или неправильный ответ примера Вам предъявлен. Если ответ примера кажется Вам правильным, нажмите клавишу «→» («стрелка вправо»), если неверным – клавишу «←» («стрелка влево»).</p>";
  	break;
  case 4:
  	instruction = "<p>Данное исследование направлено за изучение числовой интуиции.</p><p>Вам будет предъявлено 60 арифметических примеров с ответами. Ответ может быть верным или неверным. Например, в примере 455*641=291655 – верный ответ, потому что если умножить 455 на 641, то получится ровно 291655. А вот в примере 455*641=2976557 – неверный. Ваша задача – как можно быстрее, не производя вычислений, угадать, верный или неверный ответ примера Вам предъявлен. Если ответ примера кажется Вам правильным, нажмите клавишу «→» («стрелка вправо»), если неверным – клавишу «←» («стрелка влево»).</p><p>Важно! Прямо перед тем, как на экране будут появляться примеры, на очень короткое время Вам будут предъявляться и другие примеры, на которые не нужно обращать внимание!</p>";
  	break;
  default:
    console.log("Ошибка последовательности: последовательность не найдена!")
}

instruction += "<p>В начале будет не большая тренирова. </p><p>Спасибо! удачи!</p>"
window.font_size = 24