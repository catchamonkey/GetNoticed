#GetNoticed is a lightweight and minimal notification plugin for jQuery

Basic Example:

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

You can also define the element to output along with custom delay and fade settings.

````javascript
    $.getnoticed.add({
        title:        'Info',
        text:         'Here is some information',
        type:         'info',
        element:      'div',
        fadeInTime:   1000,
        fadeOutDelay: 5000,
        fadeOutTime:  500
    });
````

This will output

````html
    <div class="info notification"><em>Info:</em> Here is some information <a href="#">x</a></div>
````

The element will fade in over 1 second, stay on screen for 5 seconds, then fade out over half a second.
