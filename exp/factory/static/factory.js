function random_integer(min, max) {
  // получить случайное число от (min-0.5) до (max+0.5)
  let rand = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(rand);
}

window.factory = {
	workers: 600,
	volume: {
		_volume: 6000,
		get: function() {
			return(this._volume)
		},
		set: function(workers) {
			let r = random_integer(-1, 1)
			this._volume = (2 * workers) - (this._volume / 1000) + r
			this._volume = this._volume * 1000
			factory.update();
			return(this._volume)
		}

	},
	update: function() {
		this.story.set(this.volume.get())
		return(this.story.get())
	},
	story: {
		_story: [],
		get: function() {
			return(this._story)
		},
		set: function(volume) {
			this._story.push(volume)
		}
	},
	plot: function() {
		let trace1 = {
		  y: this.story.get(),
		  mode: 'lines',
		  type: 'scatter'
		}
		let data = [trace1]
		Plotly.newPlot('plot', data);
		return('')

	}
}
factory.update();