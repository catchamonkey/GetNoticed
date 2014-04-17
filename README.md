#GetNoticed is a lightweight and minimal notification plugin for jQuery

Add a container to your HTML with the id 'notifications', the rest is handled through the plugins simple interface;

###Basic Example:

````javascript
$.getnoticed.add({
    title: 'Info',
    text:  'Here is some information',
    type:  'info'
});
````

This will output

````html
<li class="info notification"><strong>Info:</strong> <span>Here is some information</span> <a href="#">x</a></li>
````

###Error Notifications

There is a shortcut method for error notifications, which simply presets the type and title, everything except the type can still be defined by passing an object to the method, but if you pass a string, the error defaults will be used.

````javascript
$.getnoticed.error({
    title: 'Oh no!',
    text:  'This is your error text'
});
````

Or

````javascript
$.getnoticed.error('This is your error text');
````

###Advanced

You can also define the element to output along with custom delay and fade settings.

````javascript
$.getnoticed.add({
    title:          'Info',
    text:           'Here is some information',
    type:           'info',
    element:        'div',
    addDuration:    1000,
    removeDelay:    5000,
    removeDuration: 500
});
````

This will output

````html
<div class="info notification"><strong>Info:</strong> Here is some information <a href="#">x</a></div>
````

This element will fade in over 1 second, stay on screen for 5 seconds, then fade out over half a second.
