Text Pager - jQuery plugin for create pages on div
====================================================

jQuery plugin which divides the text of a div on the page.

##Installing
Include jQuery library and Text Pager plugin:
```html
<script src="jquery.textpager.js"></script>
```

##Usage
DIV with text must be set and adjusted height
```css
height: 305px;
```

also you can set CSS for control elements
```css
.tp-control-arrows { }
.tp-control-pages { }
.tp-control-arrow-left { }
.tp-control-arrow-right { }
.tp-control-arrow-left.unactive { }
.tp-control-arrow-right.unactive { }
.tp-page { }
.tp-page.active { }
```

start plugin
```javascript
$('#custom-textarea').textpager();
```

or start with options
```javascript
$('#custom-textarea').textpager({
    controlArrows: ".custom-control",
    controlPages: ".custom-control .custom-pages",
    controlPagesContent: "li"
});
```

##License

Plugin is released under the [MIT License](http://en.wikipedia.org/wiki/MIT_License). Feel free to use it in personal and commercial projects.

##Versions

* 1.0.0 - Firest reles



