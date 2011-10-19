#GetNoticed is a lightweight and minimal notification plugin for jQuery

Exmaple usage:

````javascript
    $.getnoticed.add({
        title: 'Info',
        text:  'Here is some information',
        type:  'info'
    });
````

This will output

````html
    <p class="info notification"><em>Info:</em> Here is some information <a href="#">x</a></p>
````

You can also define the element to output

````javascript
    $.getnoticed.add({
        title:   'Info',
        text:    'Here is some information',
        type:    'info',
        element: 'div'
    });
````

This will output

````html
    <div class="info notification"><em>Info:</em> Here is some information <a href="#">x</a></div>
````