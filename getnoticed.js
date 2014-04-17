(function($) {
    $.getnoticed = {
        'element':'li', 'title':'Info', 'type':'info',
        'addDuration':500, 'removeDelay':2000, 'removeDuration':600
    }

    $.getnoticed.add = function(params) {
        if(!params.text) {
            throw 'You need to provide the "text" param'
        }
        // override the defaults with supplied params
        $.extend($.getnoticed, params)
        var response = ''
        response += '<'+$.getnoticed.element
        response += ' class="'+$.getnoticed.type+' notification">'
        response += '<strong>'+$.getnoticed.title+'</strong> '
        response += '<span class="getnoticedText">'+$.getnoticed.text+'</span>'
        response += ' <a class="getnoticedClose" href="#">x</a></'+$.getnoticed.element+'>'
        $(response)
            .hide()
            .appendTo('#notifications')
            .fadeIn($.getnoticed.addDuration)
            .delay($.getnoticed.removeDelay)
            .fadeOut($.getnoticed.removeDuration, function() {
                $(this).remove()
            })
    };

    $.getnoticed.error = function(error) {
        // set new defaults based on the error context
        $.getnoticed.type = 'error';
        $.getnoticed.title = 'Oops!';

        if (typeof error == 'string') {
            return $.getnoticed.add({text:error})
        };

        return $.getnoticed.add(error)
    };

    $("body").on('click', '.notification', function(event) {
        event.preventDefault()
        $(this).stop().hide("slide", {direction: "up"}, $.getnoticed.removeDuration, function() {
            $(this).remove()
        })
    })
})( jQuery );
