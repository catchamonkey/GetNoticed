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
        $.extend($.getnoticed, params);
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
            .hide("slide", {direction: "up"}, $.getnoticed.removeDuration, function() {
                $(this).before('<div style="height:'+$(this).height()+'px;" class="placeholder">');
                $(this).after('</div>');
                $(this).remove();
                $('.placeholder').slideUp();
            });
    };
    $(".notification").live('click', function(event) {
        event.preventDefault();
        $(this).stop().hide("slide", {direction: "up"}, $.getnoticed.removeDuration, function() {
            $(this).before('<div style="height:'+$(this).height()+'px;" class="placeholder">');
            $(this).after('</div>');
            $(this).remove();
            $('.placeholder').slideUp();
        });
    });
})( jQuery );