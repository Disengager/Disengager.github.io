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


var the_url = "https://script.google.com/macros/s/AKfycbzpzCi-7SQg0xeUlvV01pb8LRSZz50nwYB1NAYlCXutIuLVeiKpxGnfpcaWFIb8sjKf/exec" //куда отправлять результаты
let seq_n = 1, //номер последовательности по дефолту
	prime_time = 17,
	links = { //ссылки на последовательности
		1: 'static/sequence_1.csv', 
		2: 'static/sequence_2.csv'
	}

class Stim {
	constructor(link) {
		console.log(link)
		this.read_csv(link);
	}
	get_tg(counter) {
		return(this.targets[counter].target)
	}
	get_by_key(counter, key) {
		return(this.targets[counter][key])
	}
	get_prime(counter) {
		console.log(counter)
		return(this.targets[counter].prime)
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
	send_form(th, _anwsers, _check, _custom) {
		let data = th.options.datastore.data,
			result = {};

		for(var ind in data) {
			//   ["ответы"]
			for(var i in _anwsers) 
				// нужный экран
				if(data[ind].sender == _anwsers[i])  {
					// взять все переменные из этой строки
					if(result[data[ind].df_color] == undefined) result[data[ind].df_color] = [];
					result[data[ind].df_target + "." + data[ind].df_targets_category + "." + data[ind].df_color] =
						[(data[ind].df_targets_category == data[ind].response) * 1, data[ind].duration]
				}
					
			// данные в таком виде
			//   [ ["Проверка_на_бессознательность": inversion], ["Проверка_на_бессознательность", words] ]
			for(var i in _check) 
				if(data[ind].sender == _check[i][0]) 
					result[ _check[i][1] ] = data[ind][ _check[i][1] ]		
		}

		let xmlhttp = new XMLHttpRequest(),
	    	slice_formdata = new FormData();
	    
	    for(var i in _custom)
			result[ _custom[i][0] ] = _custom[i][1];

	    slice_formdata.append('data', JSON.stringify(result));

	    for(ind in result)     	
	    	slice_formdata.append(ind, JSON.stringify(result[ind]))
	    
	        console.log(result)
	    
	    /*		
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
		*/
		xmlhttp.open("POST", the_url, false);
		xmlhttp.send(slice_formdata);
	    console.log(slice_formdata)
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

if(params['prime_time'] != undefined)
	prime_time = params['prime_time'] * 1

var stimules = new Stim(links[seq_n])
