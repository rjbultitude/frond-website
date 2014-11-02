/**
 * Jquery Plugin: Image Sequence
 *
 * $author       Richard Bultitude
 * $email        richard.bultitude@gmail.com
 * $url          http://www.frondmusic.com/
 * $copyright    Copyright (c) 2014, frondmusic.com. All rights reserved.
 * $version      1.1
 *
 * $notes        Notes
 */


define(['jquery'], function($){
    'use strict';

    (function ($) {

        $.fn.JQueryImgSeqPlugin = function (options) {

            //Settings
            var settings = $.extend({
                preload : false,
                seqDir  : '',
                fileExt : ''
            }, options);

            return this.each(function () {

                var $wrapper = $(this);
                var numImages = $('img', $wrapper).length;

                function setImages() {
                    $('img', $wrapper).each(function(i) {
                        $(this).addClass('item-' + i);
                    });
                }

                function hideImages() {
                    $('img:first', $wrapper).addClass('active').removeClass('inactive');
                    $('img:not(:first)', $wrapper).each(function(i) {
                        $(this).removeClass('active').addClass('inactive');
                    });

                    simpleFade();
                }

                function hideAll() {
                    $('img', $wrapper).removeClass('active').addClass('inactive');

                    simpleFade();
                }

                function simpleFade() {
                    $('img', $wrapper).each(function(i) {
                        var el = $(this);
                        setTimeout(function() {
                            if (i + 1 === numImages) {
                                el.removeClass('inactive').addClass('active');
                                setTimeout(function() {
                                    hideImages();
                                },3000);
                            } 
                            else {
                                el.removeClass('inactive').addClass('active');
                            }
                        }, i * 3000);
                    });
                }

                //Init functions
                $(document).ready(function() {
                    setImages();
                    hideAll();
                });

            });
            //end each
        };
        //end jquery extend

    })(jQuery);


}); //end define