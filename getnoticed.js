(function($) {
    $.getnoticed = {
        'element':'p', 'title':'Info', 'type':'info',
        'fadeInTime':500, 'fadeOutDelay':10000, 'fadeOutTime':600
    };
    
    $.getnoticed.add = function(params) {
        if(!params.text) {
            throw 'You need to provide the "text" param';
        }
        // override the defaults with supplied params
        for (var obj in params)
        {
            $.getnoticed[obj] = params[obj];
        }
        var response = '';
        response += '<'+$.getnoticed.element;
        response += ' class="'+$.getnoticed.type+' notification">';
        response += '<em>'+$.getnoticed.title+':</em> ';
        response += $.getnoticed.text;
        response += ' <a class="getnoticedClose" href="#">x</a></'+$.getnoticed.element+'>';
        $(response)
            .hide()
            .appendTo('#notifications')
            .fadeIn($.getnoticed.fadeInTime)
            .delay($.getnoticed.fadeOutDelay)
            .fadeOut($.getnoticed.fadeOutTime, function() {
                $(this).remove();
            });
    };
    $("a.getnoticedClose").live('click', function(event) {
        event.preventDefault();
        $(this)
            .parents($.getnoticed.element+":eq(0)")
            .stop()
            .fadeOut($.getnoticed.fadeOutTime, function() {
                $(this).remove();
            });
    });
})( jQuery );
