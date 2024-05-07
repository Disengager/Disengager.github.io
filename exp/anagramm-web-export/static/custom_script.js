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


var the_url = "https://script.google.com/macros/s/AKfycbz4syJfKuzUFXyTmD07wXHddLIx2IEHhoWCqxg4KgjdiHfPaWzGsKoCq2x7jaVmBiPt/exec" //куда отправлять результаты
let seq_n = 1, //номер последовательности по дефолту
		block_seq = [0,1,2,3] //последовательность предъявления блоков
		links = { //ссылки на последовательности
			1: 'static/sequence_1.csv', 
			2: 'static/sequence_2.csv',
		},
		img_folder = "D:/013_Anagrams_2021 fMRI/01_Subgroup/anagrams/";

class Stim {
	constructor(link) {
		console.log(link)
		this.read_csv(link);
	}
	result = {}
	get_an_img(counter) {
		return(this.targets[counter]['MEMORY_REPEAT'] + '.jpg')
	}
	get_anagramm_dur(counter) {
		let duration = parseInt(this.targets[counter]['наводка_дл']) + parseInt(this.targets[counter]['анаграмма_дл'])
		console.log(duration)
		return(duration)
	}
	get_fixation_time(counter) {
		console.log(counter)
		if(this.targets[counter].hasOwnProperty('jitter'))
			return(this.targets[counter]['jitter'])
		return(3000)
	}
	get_by_key(counter, key) {
		return(this.targets[counter][key])
	}
	filter(keys) { //на вход принимается объект { key1: value1, key2: value2} - нету OR, должны выполняться все условия из списка, только AND
		let new_obj = _.cloneDeep(this)

		console.log(new_obj.targets.length)
		for (var i = new_obj.targets.length - 1; i >= 0; i--) {
			for(var key in keys) {
				if(new_obj.targets[i][key] != keys[key])
					new_obj.targets.splice(i,1);
			}
		}	
		console.log('test select')
		console.log(Object.assign({}, new_obj))
		return(new_obj)
	}
	shuffle(arr) {
		return(arr
						.map(value => ({ value, sort: Math.random() }))
						.sort((a, b) => a.sort - b.sort)
						.map(({ value }) => value))
	}
	shuffle_stim() {
		this.targets = this.shuffle(this.targets)
		return(this)
	}	
	add_jitter() { //добавляет случайные задержки
		let jitter_table = [
			[3, 3000],
			[3, 3500],
			[4, 4000],
			[6, 4500],
			[4, 5000],			
			[3, 5500],
			[3, 6000]
		]
		let duration_table = [];

		for (var i = 0; i < jitter_table.length; i++) 
			for(var j = 0; j < jitter_table[i][0]; j++) 
				duration_table.push(jitter_table[i][1]);
			

		duration_table = this.shuffle(duration_table)
		this.targets
		for (var i = 0; i < this.targets.length; i++) 
			this.targets[i].jitter = duration_table[i]
		

		return(this)
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
			onloadstim();

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
const codec = 'audio/ogg; codecs=opus'
var setupRecorder = function(stream, stop_event) {
  console.log("Preparing recorder...");
  
  let mediaRecorder = new MediaRecorder(stream);
  let chunks = []; 
  
  mediaRecorder.onstart = function() {
    console.log("Recording started...");
  }

  mediaRecorder.onstop = async function(e) {
    console.log("Recording stopped...");
    let c = this.c;

    blobToAudio = (blob) => {
      return new Promise((resolve, reject) => {
        let reader = new FileReader();

        reader.onloadend = () => resolve(reader.result);
        reader.onerror = reject;

        reader.readAsDataURL(blob);
      })
    }
    const blob = new Blob(chunks, { 'type' : codec });
    let audio = await blobToAudio(blob);
    console.log(c)
    c.options.datastore.set('audio', audio);
    console.log("data stored...");
    console.log(audio);
    if(stop_event != false) c.end(reason = stop_event);
    console.log('stop')
  }

  mediaRecorder.ondataavailable = function(e) {
    chunks.push(e.data);
  }

  return(mediaRecorder);
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
	get_font_size: function() {
		return this.get_size_px() / 3.85
	},
	get_img_size: function() {
		return this.get_size_px() * 2.33
	},
	stimules_size: function() {
		return sizes.size_px / 11.333333333333334
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

if(params['block_seq'] != undefined) {
	block_seq = params['block_seq'].split('.').map(function(item) {
    return parseInt(item);
	});
}


var stimules = new Stim(links[seq_n]),
		block = {}

function onloadstim() {

	block = {}
	block[0] = {
			stimules: stimules.filter({'RUN': 'Run' + block_seq[0]}).shuffle_stim(),
			info: 'Тренировка окончена, если у вас есть вопросы, можете задать их. Когда будете готовы, нажмите «ПРОБЕЛ», чтобы перейти ко третьему блоку. '
	}
	block[1] = {
		stimules: stimules.filter({'RUN': 'Run' + block_seq[1]}).shuffle_stim().add_jitter(),
		info: 'Вы успешно завершили первый блок! Если возникли какие-либо проблемы обратитесь к экспериментатору. У вас есть несколько минут, чтобы отдохнуть. Когда будете готовы, нажмите «ПРОБЕЛ», чтобы перейти ко второму блоку. '
	}
	block[2] = {	
		stimules: stimules.filter({'RUN': 'Run' + block_seq[2]}).shuffle_stim().add_jitter(), 
		info: 'Вы успешно завершили второй блок! Если возникли какие-либо проблемы обратитесь к экспериментатору. У вас есть несколько минут, чтобы отдохнуть. Когда будете готовы, нажмите «ПРОБЕЛ», чтобы перейти ко третьему блоку. ',
	}
	block[3] = {	
		stimules: stimules.filter({'RUN': 'Run' + block_seq[3]}).shuffle_stim().add_jitter(),
		info: 'На этом основная часть исследования закончена, в завершении необходимо ответить на несколько вопросов. Нажмите «ПРОБЕЛ», чтобы завершить исследование. '
	}
}





window.font_size = 24;

