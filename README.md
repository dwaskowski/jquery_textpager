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

##Example
<script src="http://code.jquery.com/jquery-1.10.2.min.js"></script>
<script src="jquery.textpager.js"></script>
<style>
    .example-box { margin: 10px; }
    .wraper { padding: 10px; background: #eee; -webkit-border-radius: 5px; -moz-border-radius: 5px; border-radius: 5px; }
    .custom-pages { list-style: none; }
    .custom-textarea { font-size: 14px; height: 305px; line-height: 18px; margin: 10px 0; }
    .tp-control-arrows { height: 40px; float: left; }
    .tp-control-pages { height: 40px; }
    .tp-control-arrow-left { background: #777777; color: #FFFFFF; cursor: pointer; float: left; margin: 0 5px; padding: 10px; }
    .tp-control-arrow-right { background: #777777; color: #FFFFFF; cursor: pointer; float: left; margin: 0 5px; padding: 10px; }
    .tp-control-arrow-left.unactive { background: #eee; }
    .tp-control-arrow-right.unactive { background: #eee; }
    .tp-page { background: #777777; color: #FFFFFF; cursor: pointer; float: left; margin: 0 5px; padding: 10px; }
    .tp-page.active { background: #ff0000; color: #FFFFFF; }
</style>
<div class="example-box">
    <h1>Lorem impsum</h1>
    <div class="wraper">
        <div class="custom-textarea" id="custom-textarea">
            <h2>Lorem impsum</h2>
            <div>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </div>
        </div>
    </div>
    <div class="custom-control">
        <a class="tp-control-arrow-left unactive"><span><</span></a>
        <a class="tp-control-arrow-right"><span>></span></a>
        <ul class="custom-pages"></ul>
    </div>    
</div>
<script>
    $('#custom-textarea').textpager({
        controlArrows: ".custom-control",
        controlPages: ".custom-control .custom-pages",
        controlPagesContent: "li"
    });
</script>


##License

Plugin is released under the [MIT License](http://en.wikipedia.org/wiki/MIT_License). Feel free to use it in personal and commercial projects.

##Versions

* 1.0.0 - Firest reles



