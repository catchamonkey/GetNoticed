(function($) {
    $.getnoticed = {}
    
    $.getnoticed.add = function(params) {
        if(!params.title || !params.text || !params.type) {
            throw 'You need to fill out the minumum 3 params: "title", "text" and type'; 
        }
        var response = '';
        response += '<p';
        response += ' class="'+params.type+' notification"><em>';
        response += params.title+':</em> ';
        response += params.text;
        response += ' <a href="#">x</a></p>';
        $('#notifications').append(response);
    }

    $("p.notification a").live('click', function(event) {
        $(this).parents("p:eq(0)").fadeOut(300, function() {
            $(this).remove();
        });
        event.preventDefault();
    });
})( jQuery );