//все стимулы
//объект
var base_stimules = {
	//два массива
	'1': {
		targets: [
			"Текап", 
			"Вирак",  
			"Нозес",
			"Сукет",
			"Гопас",
			"Добан",
			"Сурив",
			"Тевор",
			"Косеп",
			"Сезор",
			"Тевос",
			"Вирод",
			"Робан",
			"Корив",
			"Телоп",
			"Расеп",
			"Намор",
			"Ралоп",
			"Доран",
			"Пазес",
			"Каруд",
			"Совир",
			"Равот",
			"Паког"	
		],
		check: [
			"Голет",
			"Совар",
			"Корив",
			"Сукет",
			"Набод",
			"Дорив",
			"Темор",
			"Равот",
			"Вирод",
			"Робан",
			"Паког",
			"Теруд",
			"Нозет",
			"Каруд",
			"Себан",
			"Расеп",
			"Тезон",
			"Добан", 
			"Текап",
			"Равос",
			"Косеп",
			"Песан",
			"Совир",
			"Доран",
			"Пасод",
			"Торак",
			"Намор",
			"Кавот",
			"Пазес",
			"Тевор",
			"Намец",
			"Сапон",
			"Нозес",
			"Сурив",
			"Допас",
			"Ралоп",
			"Вирок",
			"Пеман", 
			"Гопас",
			"Вирак",
			"Телог",
			"Песар",
			"Совар",
			"Гопуд",
			"Сезор",
			"Тевос",
			"Телоп",
			"Ровет"	
		],
		correct: [
			false,
			false,
			true, 
			true,
			false,
			false,
			false,
			true,
			true,
			true,
			true,
			false,
			false,
			true,
			false,
			true,
			false,
			true,
			true,
			false,
			true,
			false,
			true,
			true,
			false,
			false,
			true,
			false,
			true,
			true,
			false,
			false,
			true,
			true,
			false,
			true,
			false,
			false,
			true,
			true,
			false,
			false,
			false,
			false,
			true,
			true,
			true,
			false
		],
		get_progress: function(counter) {
			return(counter / this.get_all().length * 100)
		},
		get_tg: function() {
			return(this.targets)
		},
		get_all: function() {
			return(this.check)
		},
		is_correct: function(counter) {
			return(this.correct[counter])
		},
	},
	'2': {
		targets: [
			"Корив",
			"Тевос",
			"Вирод",
			"Сурив",
			"Ралоп",
			"Гопас",
			"Сезор",
			"Телоп",
			"Вирак",
			"Намор",
			"Расеп",
			"Доран",
			"Тевор",
			"Косеп",
			"Паког",
			"Нозес",
			"Добан",
			"Равот",
			"Совир",
			"Текап",
			"Сукет",
			"Робан",
			"Пазес",
			"Каруд"	
		],
		check: [
			"Сезор",
			"Нозес",
			"Добан",
			"Песан",
			"Ровет",
			"Намор",
			"Сапон",
			"Косеп",
			"Допас",
			"Корив",
			"Совар",
			"Набод",
			"Вирод",
			"Телог",
			"Доран",
			"Вирак",
			"Каруд",
			"Равос", 
			"Вирок",
			"Гопуд",
			"Сукет",
			"Тезон",
			"Робан",
			"Дорив",
			"Нозет",
			"Ралоп",
			"Совир",
			"Кавот",
			"Гопас",
			"Торак",
			"Пасод",
			"Себан",
			"Текап",
			"Песар",
			"Сурив",
			"Телоп", 
			"Совар",
			"Теруд",
			"Паког",
			"Тевос",
			"Пазес",
			"Пеман",
			"Тевор",
			"Голет",
			"Темор",
			"Равот",
			"Намеп",
			"Расеп"	
		],
		correct: [
			true,
			true,
			true,
			false,
			false,
			true,
			false,
			true,
			false,
			true,
			false,
			false,
			true,
			false,
			true,
			true,
			true,
			false,
			false,
			false,
			true,
			false,
			true,
			false,
			false,
			true,
			true,
			false,
			true,
			false,
			false,
			false,
			true,
			false,
			true,
			true,
			false,
			false,
			true,
			true,
			true,
			false,
			true,
			false,
			false,
			true,
			false,
			true
		],
		get_progress: function(counter) {
			return(counter / this.get_all().length * 100)
		},
		get_tg: function() {
			return(this.targets)
		},
		get_all: function() {
			return(this.check)
		},
		is_correct: function(counter) {
			return(this.correct[counter])
		},
	}
}
//выбранна последовательность 
var stimules = [],
	params = {}, 
	seq = 1;

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

if(params['cb'] == undefined)
	stimules = base_stimules['1']
else {
	stimules = base_stimules[params['cb']];
	seq = params['cb'];
}



function send_form(th, _anwsers, _check, _form) {
	let data = th.options.datastore.data,
		result = {};

	for(ind in data) {
		for(ind2 in _anwsers) 
			if(data[ind].sender == _anwsers[ind2]) {
				let response = data[ind].response.split("||")[0]
				result[response] = [(data[ind].correct * 1), data[ind].duration]
			}

		for(ind2 in _check) 
			if(data[ind].sender == _check[ind2]) {
				result['inversion'] = data[ind].inversion
				result['answer'] = data[ind].words
			}

		for(ind2 in _form) 
			if(data[ind].sender == _form[ind2]) {
				result['sex'] = data[ind].sex;
				result['age'] = data[ind].age;
				result['email'] = data[ind].email;
			}

	}
		
	

	let xmlhttp = new XMLHttpRequest(),
    	slice_formdata = new FormData(),
    	the_url = "https://script.google.com/macros/s/AKfycbylgHsZVlBRJ78TSpSaNeJYnN1iKuiGj1sZ3TgbaLNQQF3IJK46RfPHzzZjHshX0M5Fyw/exec";
    
    slice_formdata.append('group', seq);
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
}