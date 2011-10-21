(function($) {
    $.getnoticed = {
        'element':'p', 'title':'Info', 'type':'info',
        'addDuration':500, 'removeDelay':6000, 'removeDuration':600
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
        response += '<div class="getnoticedTitle"><span>'+$.getnoticed.title+'</span></div> ';
        response += '<span class="getnoticedText">'+$.getnoticed.text+'</span>';
        response += ' <a class="getnoticedClose" href="#">x</a></'+$.getnoticed.element+'>';
        $(response)
            .hide()
            .appendTo('#notifications')
            .fadeIn($.getnoticed.addDuration)
            .delay($.getnoticed.removeDelay)
            .slideToggle($.getnoticed.removeDuration, function() {
                $(this).remove();
            });
    };
    $("a.getnoticedClose").live('click', function(event) {
        event.preventDefault();
        $(this)
            .parents($.getnoticed.element+":eq(0)")
            .stop();
    });
})( jQuery );