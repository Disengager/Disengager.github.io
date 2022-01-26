(function() {
  window.add_class_events = function(element) {
    element.add_class = function(classname) {
      return this.classList.add(classname);
    };
    element.remove_class = function(classname) {
      return this.classList.remove(classname);
    };
    element.clear = function() {
      return this.innerHTML = '';
    };
    return element;
  };

  window.$ = function(selector) {
    if (typeof selector === "string") {
      return add_class_events(document.querySelectorAll(selector));
    } else {
      return add_class_events(selector);
    }
  };

  window.$id = function(id) {
    return add_class_events(document.getElementById(id));
  };

  window.$id_cls = function(id, classname) {
    return add_class_events($id(id).getElementsByClassName(classname)[0]);
  };

  window.ide = {
    tabs: {},
    swith_tab: function(id) {
      var tab, tab_obj;
      for (tab in this.tabs) {
        tab_obj = this.tabs[tab];
        if (tab_obj.visible) {
          $id(tab_obj.id).add_class('hide');
          $id_cls(tab_obj.id, 'block__title').remove_class('select');
          tab_obj.visible_off();
        }
      }
      $id(id).remove_class('hide');
      $id_cls(id, 'block__title').add_class('select');
      return this.tabs[id].visible_on();
    },
    spoiler: function(element) {
      var classname, i, is_hide, len, ref;
      is_hide = false;
      ref = element.classList;
      for (i = 0, len = ref.length; i < len; i++) {
        classname = ref[i];
        if (classname === 'hide') {
          is_hide = true;
        }
      }
      if (is_hide) {
        return $(element).remove_class('hide');
      } else {
        return $(element).add_class('hide');
      }
    },
    auto_scroll: function(element) {
      return this.line_counter.scroll(0, element.scrollTop);
    },
    init_tabs: function() {
      var block, blocks, i, len, tab;
      blocks = $('.block');
      for (i = 0, len = blocks.length; i < len; i++) {
        block = blocks[i];
        tab = {
          visible: !block.className.includes('hide'),
          id: block.id,
          visible_on: function() {
            return this.visible = true;
          },
          visible_off: function() {
            return this.visible = false;
          }
        };
        this.tabs[block.id] = tab;
        $('#' + block.id + ' .block__title')[0].onclick = function() {
          return ide.swith_tab(this.parentNode.id);
        };
      }
      return true;
    },
    init_spoiler: function() {
      var i, len, results, spoiler, spoilers;
      spoilers = $('.module__spoiler');
      results = [];
      for (i = 0, len = spoilers.length; i < len; i++) {
        spoiler = spoilers[i];
        results.push(spoiler.getElementsByTagName('span')[0].onclick = function() {
          return ide.spoiler(this.parentNode);
        });
      }
      return results;
    },
    init_line_counter: function() {
      var i, num;
      this.line_counter = add_class_events($('.line_counter')[0]);
      this.line_counter.clear();
      for (num = i = 1; i <= 300; num = ++i) {
        this.line_counter.innerHTML += num + '<br>';
      }
      return true;
    },
    init: function() {
      if (!this.init_tabs()) {
        false;
      }
      if (!this.init_spoiler()) {
        false;
      }
      if (!this.init_line_counter()) {
        false;
      }
      $id('ide').onscroll = function() {
        return ide.auto_scroll(this);
      };
      return true;
    }
  };

  window.onload = function() {
    return ide.init();
  };

}).call(this);
