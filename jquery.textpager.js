/**
 *  
 *  Text Pager - jQuery plugin for create pages on div
 *  Copyright (c) 2014 Dmitrij Waśkowski
 *  
 *  Licensed under the MIT license:
 *  http://www.opensource.org/licenses/mit-license.php
 *  
 *  Project home:
 *  https://github.com/dwaskowski/jquery_textpager
 *  
 *  Version:  1.0
 *
 */


!function(e, t, o, n) {
    e.fn.textpager = function(options) {
        var parent = $('<div>').insertBefore($(this));
        $(this).css('overflow','hidden').appendTo($(parent));
        var eOptions = {
            controlArrows:          (typeof(options) !== "undefined" && options !== null && typeof(options.controlArrows) !== "undefined" && options.controlArrows !== null) ? options.controlArrows : '',
            controlArrowsEnabel:    (typeof(options) !== "undefined" && options !== null && typeof(options.controlArrowsEnabel) !== "undefined" && options.controlArrowsEnabel !== null) ? options.controlArrowsEnabel : true,
            controlPages:           (typeof(options) !== "undefined" && options !== null && typeof(options.controlPages) !== "undefined" && options.controlPages !== null) ? options.controlPages : '',
            controlPagesEnabel:     (typeof(options) !== "undefined" && options !== null && typeof(options.controlPagesEnabel) !== "undefined" && options.controlPagesEnabel !== null) ? options.controlPagesEnabel : true,
            controlPagesContent:    (typeof(options) !== "undefined" && options !== null && typeof(options.controlPagesContent) !== "undefined" && options.controlPagesContent !== null) ? options.controlPagesContent : 'div'
        };
        
        var fulltextHeight = 0;
        $(this).children().each(function(){
            fulltextHeight += $(this).height();
        });
        
        var textareaHeight = $(this).height();
        var textareaWidth = $(this).width();
        
        if(textareaHeight<fulltextHeight){
            var pageNow = 1;
            var margTop = 0;
            var pages = Math.ceil(fulltextHeight/textareaHeight);
            
            if (eOptions.controlArrows==='') {
                $('<div>').addClass('tp-control-arrows').appendTo($(parent));
                eOptions.controlArrows = $(parent).find('.tp-control-arrows');
                $('<a>').addClass('tp-control-arrow-left').addClass('unactive').html('<span><</span>').appendTo($(eOptions.controlArrows));
                $('<a>').addClass('tp-control-arrow-right').html('<span>></span>').appendTo($(eOptions.controlArrows));
            }
            if (eOptions.controlPages==='') {
                $('<div>').addClass('tp-control-pages').appendTo($(parent));
                eOptions.controlPages = $(parent).find('.tp-control-pages');
            }
            var controlElements = '';
            for (var pageCount=0;pageCount<pages;pageCount++) {
                controlElements += $('<'+eOptions.controlPagesContent+'>')
                        .attr('data-page',''+(pageCount+1))
                        .html('<span>'+(pageCount+1)+'</span>')
                        .addClass('tp-page')
                        .addClass(!pageCount ? 'active' : '')
                        .prop("outerHTML");
            }
            $(eOptions.controlPages).html(controlElements);
            $(this).css('height',textareaHeight+'px').css('padding',0);
            var contentHtml = $(this).html();
            $(this).html('');
            $('<div>').addClass('tp-horizontalbox').css('height',textareaHeight+'px').css('width',textareaWidth+'px').appendTo($(this));
            $('<div>').addClass('tp-vertivalbox').html(contentHtml).css('width',textareaWidth+'px').appendTo($(this).find('.tp-horizontalbox'));
            
            var self = this;
            $(eOptions.controlArrows).find('.tp-control-arrow-left').unbind('click').click(function(){
                var thisPage = pageNow-1;
                if(thisPage<1){
                    return;
                }
                if(thisPage==1){
                    $(this).addClass('unactive');
                }
                $(eOptions.controlArrows).find('.tp-control-arrow-right').removeClass('unactive');
                var nextPage = (thisPage-pageNow)*textareaHeight;
                margTop -= nextPage;
                pageNow = thisPage;
                $(eOptions.controlPages).find(eOptions.controlPagesContent+'.tp-page').removeClass('active');
                $(eOptions.controlPages).find(eOptions.controlPagesContent+'[data-page="'+thisPage+'"]').addClass('active');
                self.animateStep(self, textareaWidth, margTop, false);                
            });
            $(eOptions.controlArrows).find('.tp-control-arrow-right').unbind('click').click(function(){
                var thisPage = pageNow+1;
                if(thisPage>pages){
                    return;
                }
                if(thisPage==pages){
                    $(this).addClass('unactive');
                }
                $(eOptions.controlArrows).find('.tp-control-arrow-left').removeClass('unactive');
                var nextPage = (thisPage-pageNow)*textareaHeight;
                margTop -= nextPage;
                pageNow = thisPage;
                $(eOptions.controlPages).find(eOptions.controlPagesContent+'.tp-page').removeClass('active');
                $(eOptions.controlPages).find(eOptions.controlPagesContent+'[data-page="'+thisPage+'"]').addClass('active');
                self.animateStep(self, textareaWidth, margTop, true);                
            });
            $(eOptions.controlPages).find(eOptions.controlPagesContent+'.tp-page').unbind('click').click(function(){
                var thisPage = $(this).data('page');
                if(thisPage===pageNow) {
                    return;
                }
                var goAhead = true;
                if(thisPage<pageNow) {
                    goAhead = false;
                }
                
                if (thisPage==1) {
                    $(eOptions.controlArrows).find('.tp-control-arrow-left').addClass('unactive');
                    $(eOptions.controlArrows).find('.tp-control-arrow-right').removeClass('unactive');
                } else if(thisPage==pages) {
                    $(eOptions.controlArrows).find('.tp-control-arrow-right').addClass('unactive');
                    $(eOptions.controlArrows).find('.tp-control-arrow-left').removeClass('unactive');
                } else {
                    $(eOptions.controlArrows).find('.tp-control-arrow-right').removeClass('unactive');
                    $(eOptions.controlArrows).find('.tp-control-arrow-left').removeClass('unactive');
                }

                var nextPage = (thisPage-pageNow)*textareaHeight;
                margTop -= nextPage;
                pageNow = thisPage;
                $(eOptions.controlPages).find(eOptions.controlPagesContent+'.tp-page').removeClass('active');
                $(this).addClass('active');
                self.animateStep(self, textareaWidth, margTop, goAhead);
            });
            
            
        }
        
        this.animateStep = function(parent, textareaWidth, margTop, goAhead){
            $(parent).find('.tp-horizontalbox')
                .animate({
                    marginLeft: (goAhead ? "-="+textareaWidth : "+="+textareaWidth)
                }, 400, function(){
                    $(this)
                    .css({
                        marginLeft: (goAhead ? "+="+(textareaWidth*2) : "-="+(textareaWidth*2))
                    })
                    .find('.tp-vertivalbox')
                    .css({
                        marginTop: margTop
                    });
                    $(this)
                    .animate({
                        marginLeft: (goAhead ? "-="+textareaWidth : "+="+textareaWidth)
                    }, 400)
                    .find('.tp-vertivalbox')
                    .animate({
                        opacity: 1
                    }, 400);
                })
                .find('.tp-vertivalbox')
                .animate({
                    opacity: 0
                }, 400);
        }        
    };

}(jQuery, window, document);
