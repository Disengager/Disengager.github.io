var test_creater = {
    
    tag_question_start: '<questions>',
    tag_question_end: '</questions>',
    tag_count_start: '<count>',
    tag_count_end: '</count>',
    tag_separator_start: '<separator>',
    tag_separator_end: '</separator>',
    tag_right_start: '<right_answer>',
    tag_right_end: '</right_answer>',
    question_id: 'question-text',
    count_id: 'question-count',
    separate_id: 'question-separate',
    right_id: 'right-marker',

    create: function(text) {
        this.set_field(this.question_id, this.custom_split(text, this.tag_question_start, this.tag_question_end));
        this.set_field(this.count_id, this.custom_split(text, this.tag_count_start, this.tag_count_end));
        this.set_field(this.separate_id, this.custom_split(text, this.tag_separator_start, this.tag_separator_end));
        this.set_field(this.right_id, this.custom_split(text, this.tag_right_start, this.tag_right_end));
    },
    custom_split: function(text, tag1, tag2) {
        var area = text.split(tag1)
        if(text.length < 2) 
            return ''
        area = area[1].split(tag2)[0]
        return area
    },
    set_field: function(id, text) {
        $('#' + id).val(text);
    }
}

var test = {
    time: 0,
    filter: {
        "show-persent": {
            show: false,
        },
        "show-right-response": {
            show: false,
        },
        "show-countdown": {
            show: false,
        },
        "show-progress": {
            show: false,
            fixed: false
        },
        "show-random" : {
            show: false,
        }
    },
    timer_status: false,
    upload_from_file: function() {
        if (typeof window.FileReader !== 'function') {
            alert("The file API isn't supported on this browser yet.");
            return;
        }
        input = document.getElementById('file-upload');
        if (!input) {
            alert("Um, couldn't find the imgfile element.");
        }
        else if (!input.files) {
            alert("This browser doesn't seem to support the `files` property of file inputs.");
        }
        else if (!input.files[0]) {
            alert("Please select a file before clicking 'Load'");
        }
        else {
            var file = input.files[0],
                fs = new window.FileReader();
            fs.readAsText(file)
            fs.onload = function() {
                // console.log(fs.result);    
                test_creater.create(fs.result);
            }
            
        }
        
    },
    timer_enable: function() {
        this.timer_status = true;
        this.time = 0;
        this.timer();
    }, 
    timer_disable: function() {
        this.timer_status = false;
        return this.time;
    },
    sadness: function() {
        $('#questions').html('<div style="text-align: center;"><img style="display: inline-block;" src="you-gotta-do.jpg" alt="держись"></div>');
        $('#test .module').css("display", "block");
        $('#progress__table .module__content').html('');
        $([document.documentElement, document.body]).animate({
            scrollTop: $("#test").offset().top
        }, 1100);
        addFlexScroll();
        
    },
    start: function() {
      $([document.documentElement, document.body]).animate({
            scrollTop: $("#test").offset().top
        }, 1100);

        var questions = $('#question-text').val(),
            question_separator = $('#question-separate').val(),
            right_marker = $('#right-marker').val();

        questions = new Spliter(questions, question_separator, right_marker).separate();
        this.questions = questions;

        $('#test .module').css("display", "block");

        let max_qestion = $('#question-count').val(),
            random = {},
            max = questions.length-1;

        max_qestion = max_qestion <= questions.length ? max_qestion : questions.length;

        $('#questions').html('');
        $('#progress__table .module__content').html('');
        var printer = new Printer('#stat').init();

        for(i = 0; i < parseInt(max_qestion); i++) {
            
            
            if(this.filter['show-random'].show) {
                var random_number = randomInteger(0, max);
                while(true) {
                    if(random[random_number] != undefined) {
                        random_number = randomInteger(0, max);
                    }
                    else {
                        random[random_number] = true;
                        break;
                    }
                }
            } else {
                var random_number = i;
            }
            
            random[random_number] = true;
            let html_question = '<div class="question__title">' +  questions[random_number].question + "</div>",
                html_right = '',
                html_option = '';

            for(right in questions[random_number].right)
                html_right += '<div class="question__right" id="question' + random_number + (right > 0?'_'+right:'') + '" style="display: none;">' + questions[random_number].right[right] + '</div>';    
            
            for(option in questions[random_number].options) 
                html_option += '<div><input type="' + (questions[random_number].right.length > 1 ?'checkbox' : (questions[random_number].options.length == 1? 'text':'radio')) + '" name="question' + random_number + '" id="question' + random_number + '_radio' + option + '"data-id="' + random_number + '">' +  (questions[random_number].options.length > 1?'<label for=question' + random_number + '_radio' + option +  '>' + questions[random_number].options[option] + '</label>' : '') + '</div>'
            
            let html_options = '<div class="question__options">' + html_option + '</div>';    
            $('#questions').append('<div class="question" id="question_' + random_number + '">' + html_question + html_options + html_right + '</div>');
            $('#progress__table .module__content').append('<a class="module__item" href="#question_' + random_number  + '" id="progress__item_' + random_number + '">' + (parseInt(i)+1) + '</a>');
        }
        checkEventListener();
        addFlexScroll();
        this.timer_enable();
        if(test.filter['show-progress'].show) 
            printer.progress_bar();
        
    },
    clear: function(type) {
        $("#test input:" + type).each(function(id, item) {
            $(item).parent().attr('class', '');
            $('#' + $(item).attr('name')).css("display", "none");
        });
    },
    check: function() {
        var count = $('.question').length,
            right_count = 0;

        this.clear('radio');
        this.clear('checkbox');
        this.clear('text');

        let test = this;

        $("#test input:radio:checked").each(function(id, item){
            let current = $(item).parent().find('label').html(),
                question_id = $(item).data('id'),
                right = test.questions[question_id].right[0];
            
            if(current == right) {
                $(item).parent().attr('class', 'correct-answer');
                $('#progress #progress__item_' + question_id).addClass('correct-question');
                test.questions[question_id].result = 1;
            }
            else {
                $(item).parent().attr('class', 'wrong-answer');
                $('#progress #progress__item_' + question_id).addClass('wrong-question');
                $('#' + $(item).attr('name')).css("display", "block");
            }
        });

        $("#test input:checkbox:checked").each(function(id, item){
            let current = $(item).parent().find('label').html(),
                question_id = $(item).data('id'),
                right_index = test.questions[question_id].right.indexOf( current );

            if(right_index != -1) {
                $(item).parent().attr('class', 'correct-answer');
                $('#progress #progress__item_' + question_id).addClass('correct-question');
                test.questions[question_id].result += 1 / test.questions[question_id].right.length;
            }
            else {
                test.questions[question_id].result = -1;
                $(item).parent().attr('class', 'wrong-answer');
                $('#progress #progress__item_' + question_id).addClass('wrong-question');
                $(item).parent().parent().parent().find('.question__right').css("display", "block");
            }
        });

        $("#test input:text").each(function(id, item){
            let current = $(item).val();
            if( current == "" ) return false;

            let question_id = $(item).data('id');
            if(current.toLowerCase() == test.questions[question_id].right[0].toLowerCase()) {
                $(item).parent().attr('class', 'correct-answer');
                $('#progress #progress__item_' + question_id).addClass('correct-question');
                test.questions[question_id].result = 1
            }
            else {
                $(item).parent().attr('class', 'wrong-answer');
                $('#progress #progress__item_' + question_id).addClass('wrong-question');
                $(item).parent().parent().parent().find('.question__right').css("display", "block");
            }
        });

        for(question in test.questions) 
            right_count += test.questions[question].get_result();

        var printer = new Printer('#stat').init(),
            time = this.time;

        if(this.filter['show-persent'].show) {
            let percent_right = right_count * 100 / count,
                response = '<br><br><div><span class="correct-answer">Правильных ответов: ' + parseInt(percent_right) + '% (' + right_count + ')</span><br><br><br><span class="wrong-answer">Неправельных ответов: ' + parseInt(100-percent_right) + '% (' + (count-right_count) + ')</span></div><br><br><br>'    
            printer.set(response);
        }

        if(this.filter['show-countdown'].show) {
            let hour = parseInt(time / 3600),
                minute = parseInt(time / 60) - (hour * 60),
                second = time - (minute * 60) - (hour * 3600),
                response = '<b>Вы прошли тест за: </b>' + (hour > 0? hour + ' ' + num2str(hour, ['час', 'час', 'часов']) + ' ' : '') + (minute > 0? minute + ' ' + num2str(minute, ['минута', 'минуты', 'минут']) + ' ' : '') + (second > 0? second + ' ' + num2str(second, ['секунда', 'секунды', 'секунд']) + ' ' : '');
            printer.set(response);
        }

    },
    stop: function() {
        this.check();
        this.timer_disable();
        // new Printer('#stat').progress_bar_stop();
    },
    timer: function() {
        if(!this.timer_status) return false;
        this.time++;
        var me = this;
        setTimeout(function () {
            me.timer();
        }, 1000);
    },

}

