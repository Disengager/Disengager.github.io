window.add_class_events = (element) -> 
	element.add_class = (classname) -> this.classList.add(classname)
	element.remove_class = (classname) -> this.classList.remove(classname)
	element.clear = () -> this.innerHTML = ''
	element

window.$ = (selector) -> 
	if typeof selector == "string"
		return add_class_events document.querySelectorAll(selector)
	else 
		add_class_events selector

window.$id = (id) -> add_class_events document.getElementById(id)
window.$id_cls = (id, classname) -> add_class_events $id(id).getElementsByClassName(classname)[0]

window.ide = 
	tabs: {}
	swith_tab: (id) -> 
		for tab of this.tabs
			tab_obj = this.tabs[tab]
			if tab_obj.visible
				$id(tab_obj.id).add_class('hide')
				$id_cls(tab_obj.id, 'block__title').remove_class('select')
				tab_obj.visible_off()

		$id(id).remove_class('hide')
		$id_cls(id, 'block__title').add_class('select')
		this.tabs[id].visible_on()

	spoiler: (element) ->
		is_hide = false
		for classname in element.classList
			if classname == 'hide'
				is_hide = true 
				
		if is_hide
			$(element).remove_class('hide')
		else 
			$(element).add_class('hide')

	auto_scroll: (element) ->
		this.line_counter.scroll(0, element.scrollTop);

	init_tabs: () ->
		blocks = $('.block')
		for block in blocks
			tab = 
				visible: !block.className.includes('hide')
				id:  block.id
				visible_on: () -> this.visible = true
				visible_off: () -> this.visible = false 
			this.tabs[block.id] = tab
			$('#' + block.id + ' .block__title')[0].onclick = () -> ide.swith_tab(this.parentNode.id)
		true

	init_spoiler: () -> 
		spoilers = $('.module__spoiler')
		for spoiler in spoilers
			spoiler.getElementsByTagName('span')[0].onclick = () -> ide.spoiler(this.parentNode)

	init_line_counter: () ->
		this.line_counter = add_class_events $('.line_counter')[0]
		this.line_counter.clear()
		for num in [1..300]
			this.line_counter.innerHTML += (num + '<br>' )
		true

	init: () ->
		false if !this.init_tabs()
		false if !this.init_spoiler()
		false if !this.init_line_counter()
		$id('ide').onscroll = () -> ide.auto_scroll(this)
		true

window.onload = () -> ide.init()
