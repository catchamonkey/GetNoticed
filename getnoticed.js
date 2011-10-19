(function($) {
    $.getnoticed = {'element':'p'}
    
    $.getnoticed.add = function(params) {
        if(!params.title || !params.text || !params.type) {
            throw 'You need to fill out the minumum 3 params: "title", "text" and type'; 
        }
        // override the defaults with supplied params
        for (var obj in params)
        {
            $.getnoticed[obj] = params[obj];
        }
        var response = '';
        response += '<'+$.getnoticed.element;
        response += ' class="'+$.getnoticed.type+' notification"><em>';
        response += $.getnoticed.title+':</em> ';
        response += $.getnoticed.text;
        response += ' <a href="#">x</a></'+$.getnoticed.element+'>';
        $('#notifications').append(response);
    }

    $(".notification a").live('click', function(event) {
        $(this).parents($.getnoticed.element+":eq(0)").fadeOut(300, function() {
            $(this).remove();
        });
        event.preventDefault();
    });
})( jQuery );