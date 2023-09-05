//все стимулы
//объект
var base_stimules = {
	//два массива
	'1': {
		targets: [
		{
			 "target": "Дом",
			 "targets_category": "ИС",  
			 "correct": -1,
			 "color": -1
			},
			{
			 "target": "Лис",
			 "targets_category": "ЕС", 
			 "correct": -1,
			 "color": -1 
			},
			{
			 "target": "Мяч",
			 "targets_category": "ИС",  
			 "correct": -1,
			 "color": -1
			},
			{
			 "target": "Рот",
			 "targets_category": "ЕС",  
			 "correct": -1,
			 "color": -1
			},
			{
			 "target": "Нож",
			 "targets_category": "ИС", 
			 "correct": -1,
			 "color": -1 
			},
			{
			 "target": "Газ",
			 "targets_category": "ЕС", 
			 "correct": -1,
			 "color": -1 
			},
			{
			 "target": "Вагон",
			 "prime": "Рамка", // 
			 "targets_category": "ИС", 
			 "correct": 1, //1 - категории совпадают, 2 - категории не совпадают, 3 - нейтральный прайм
			 "color": 1 //1 - зелёный, 2 - краснвй, 3 - жёлтый
			}, 
			{
			 "target": "Карта",
			 "prime": "Стена",  
			 "targets_category": "ИС", 
			 "correct": 1,
			 "color": 1
			}, 
			{
			 "target": "Волна",
			 "prime": "Рамка",  
			 "targets_category": "ЕС", 
			 "correct": 2,
			 "color": 2 
			},  
			{
			 "target": "Земля",
			 "prime": "Спина",  
			 "targets_category": "ЕС", 
			 "correct": 1,
			 "color": 1 
			}, 
			{
			 "target": "Налог",
			 "prime": "Запах",  
			 "targets_category": "ИС", 
			 "correct": 2,
			 "color": 2 
			},  
			{
			 "target": "Сапог",
			 "prime": "Ветер",  
			 "targets_category": "ИС", 
			 "correct": 2,
			 "color": 2 
			}, 
			{
			 "target": "Слеза",
			 "prime": "Карта",  
			 "targets_category": "ЕС", 
			 "correct": 2, 
			 "color": 2
			}, 
			{
			 "target": "Рамка",
			 "prime": "Налог",  
			 "targets_category": "ИС", 
			 "correct": 1, 
			 "color": 1
			}, 
			{
			 "target": "Ветер",
			 "prime": "Слеза",  
			 "targets_category": "ЕС", 
			 "correct": 1, 
			}, 
			{
			 "target": "Палец",
			 "prime": "Стена",  
			 "targets_category": "ЕС", 
			 "correct": 2,
			 "color": 2 
			}, 
			{
			 "target": "Глаза",
			 "prime": "ЖЖЖЖЖ",  
			 "targets_category": "ЕС", 
			 "correct": 3,
			 "color": 3 
			},  
			{
			 "target": "Карта",
			 "prime": "Спина",  
			 "targets_category": "ИС", 
			 "correct": 2,
			 "color": 2 
			}, 
			{
			 "target": "Волос",
			 "prime": "Песок",  
			 "targets_category": "ЕС", 
			 "correct": 1,
			 "color": 1 
			},  
			{
			 "target": "Завод",
			 "prime": "ЖЖЖЖЖ",  
			 "targets_category": "ИС", 
			 "correct": 3,
			 "color": 3 
			}, 
			{
			 "target": "Стена",
			 "prime": "Номер",  
			 "targets_category": "ИС", 
			 "correct": 1,
			 "color": 1 
			}, 
			{
			 "target": "Земля",
			 "prime": "ЖЖЖЖЖ",  
			 "targets_category": "ЕС", 
			 "correct": 3,
			 "color": 3 
			}, 
			{
			 "target": "Глаза",
			 "prime": "Вагон",  
			 "targets_category": "ЕС", 
			 "correct": 2,
			 "color": 2 
			}, 
			{
			 "target": "Налог",
			 "prime": "Диван",  
			 "targets_category": "ИС", 
			 "correct": 1,
			 "color": 1 
			}, 
			{
			 "target": "Завод",
			 "prime": "Сцена",  
			 "targets_category": "ИС", 
			 "correct": 1,
			 "color": 1 
			}, 
			{
			 "target": "Рамка",
			 "prime": "ЖЖЖЖЖ",  
			 "targets_category": "ИС", 
			 "correct": 3,
			 "color": 3 
			}, 
			{
			 "target": "Спина",
			 "prime": "Сапог",  
			 "targets_category": "ЕС", 
			 "correct": 2,
			 "color": 2 
			},
			{
			 "target": "Глаза",
			 "prime": "Волна",  
			 "targets_category": "ЕС", 
			 "correct": 1,
			 "color": 1 
			},
			{
			 "target": "Вагон",
			 "prime": "Земля",  
			 "targets_category": "ИС", 
			 "correct": 2,
			 "color": 2 
			},
			{
			 "target": "Запах",
			 "prime": "ЖЖЖЖЖ",  
			 "targets_category": "ЕС", 
			 "correct": 3,
			 "color": 3 
			}, 
			{
			 "target": "Слеза",
			 "prime": "ЖЖЖЖЖ",  
			 "targets_category": "ЕС", 
			 "correct": 3,
			 "color": 3 
			},
			{
			 "target": "Сцена",
			 "prime": "Завод",  
			 "targets_category": "ИС", 
			 "correct": 1,
			 "color": 1 
			},
			{
			 "target": "Вагон",
			 "prime": "ЖЖЖЖЖ",  
			 "targets_category": "ИС", 
			 "correct": 3,
			 "color": 3 
			},
			{
			 "target": "Палец",
			 "prime": "Ветер",  
			 "targets_category": "ЕС", 
			 "correct": 1,
			 "color": 1 
			},
			{
			 "target": "Рамка",
			 "prime": "Волос",  
			 "targets_category": "ИС", 
			 "correct": 2,
			 "color": 2 
			},
			{
			 "target": "Диван",
			 "prime": "ЖЖЖЖЖ",  
			 "targets_category": "ИС", 
			 "correct": 3,
			 "color": 3 
			},
			{
			 "target": "Запах",
			 "prime": "Глаза",  
			 "targets_category": "ЕС", 
			 "correct": 1,
			 "color": 1 
			},
			{
			 "target": "Слеза",
			 "prime": "Земля",  
			 "targets_category": "ЕС", 
			 "correct": 1,
			 "color": 1 
			}, 
			{
			 "target": "Ветер",
			 "prime": "ЖЖЖЖЖ",  
			 "targets_category": "ЕС", 
			 "correct": 3,
			 "color": 3 
			},
			{
			 "target": "Волна",
			 "prime": "Палец",  
			 "targets_category": "ЕС", 
			 "correct": 1,
			 "color": 1 
			},
			{
			 "target": "Стена",
			 "prime": "Песок",  
			 "targets_category": "ИС", 
			 "correct": 2,
			 "color": 2 
			},
			{
			 "target": "Диван",
			 "prime": "Волна",  
			 "targets_category": "ИС", 
			 "correct": 2,
			 "color": 2 
			},
			{
			 "target": "Волна",
			 "prime": "ЖЖЖЖЖ",  
			 "targets_category": "ЕС", 
			 "correct": 3,
			 "color": 3
			},
			{
			 "target": "Запах",
			 "prime": "Номер",  
			 "targets_category": "ЕС", 
			 "correct": 2,
			 "color": 2 
			},
			{
			 "target": "Карта",
			 "prime": "ЖЖЖЖЖ",  
			 "targets_category": "ИС", 
			 "correct": 3,
			 "color": 3 
			},
			{
			 "target": "Спина",
			 "prime": "ЖЖЖЖЖ",  
			 "targets_category": "ЕС", 
			 "correct": 3,
			 "color": 3 
			},
			{
			 "target": "Номер",
			 "prime": "Слеза",  
			 "targets_category": "ИС", 
			 "correct": 2, 
			 "color": 2
			},
			{
			 "target": "Спина",
			 "prime": "Волос",  
			 "targets_category": "ЕС", 
			 "correct": 1,
			 "color": 1 
			},
			{
			 "target": "Песок",
			 "prime": "Сцена",  
			 "targets_category": "ЕС", 
			 "correct": 2,
			 "color": 2 
			},
			{
			 "target": "Сапог",
			 "prime": "Вагон",  
			 "targets_category": "ИС", 
			 "correct": 1,
			 "color": 1 
			},
			{
			 "target": "Стена",
			 "prime": "ЖЖЖЖЖ",  
			 "targets_category": "ИС", 
			 "correct": 3,
			 "color": 3 
			},
			{
			 "target": "Диван",
			 "prime": "Карта",  
			 "targets_category": "ИС", 
			 "correct": 1,
			 "color": 1 
			},
			{
			 "target": "Налог",
			 "prime": "ЖЖЖЖЖ",  
			 "targets_category": "ИС", 
			 "correct": 3,
			 "color": 3
			},
			{
			 "target": "Сцена",
			 "prime": "Палец",  
			 "targets_category": "ИС", 
			 "correct": 2,
			 "color": 2 
			},
			{
			 "target": "Волос",
			 "prime": "ЖЖЖЖЖ",  
			 "targets_category": "ЕС", 
			 "correct": 3,
			 "color": 3 
			},
			{
			 "target": "Песок",
			 "prime": "ЖЖЖЖЖ",  
			 "targets_category": "ЕС", 
			 "correct": 3,
			 "color": 3
			},
			{
			 "target": "Номер",
			 "prime": "Сапог",  
			 "targets_category": "ИС", 
			 "correct": 1,
			 "color": 1
			},
			{
			 "target": "Ветер",
			 "prime": "Завод",  
			 "targets_category": "ЕС", 
			 "correct": 2,
			 "color": 2
			},
			{
			 "target": "Земля",
			 "prime": "Диван",  
			 "targets_category": "ЕС", 
			 "correct": 2,
			 "color": 2
			},
			{
			 "target": "Палец",
			 "prime": "ЖЖЖЖЖ",  
			 "targets_category": "ЕС", 
			 "correct": 3,
			 "color": 3
			},
			{
			 "target": "Сцена",
			 "prime": "ЖЖЖЖЖ",  
			 "targets_category": "ИС", 
			 "correct": 3,
			 "color": 3
			},
			{
			 "target": "Завод",
			 "prime": "Глаза",  
			 "targets_category": "ИС", 
			 "correct": 2,
			 "color": 2
			},
			{
			 "target": "Песок",
			 "prime": "Запах",  
			 "targets_category": "ЕС", 
			 "correct": 1,
			 "color": 1
			},
			{
			 "target": "Номер",
			 "prime": "ЖЖЖЖЖ",  
			 "targets_category": "ИС", 
			 "correct": 3,
			 "color": 3
			},
			{
			 "target": "Волос",
			 "prime": "Налог",  
			 "targets_category": "ЕС", 
			 "correct": 2,
			 "color": 2
			},
			
		],
		//get_progress: function(counter) {
		//	return(counter / this.tar().length * 100)
		//},
		get_tg: function(counter) {
			return(this.targets[counter].target)
		},
		get_prime: function(counter) {
			console.log(counter)
			return(this.targets[counter].prime)
		},


	},
	'2': {
		targets: [
			
		],
		get_tg: function() {
			return(this.targets)
		},
		get_all: function() {
			return(this.check)
		},
	
	}
}
//выбранна последовательность 
var stimules = [],
	params = {};

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
else
	stimules = base_stimules[params['cb']];

