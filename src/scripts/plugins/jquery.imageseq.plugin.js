/**
 * Jquery Plugin: Image Sequence 1.00
 *
 * $author       Richard Bultitude
 * $email        richard.bultitude@gmail.com
 * $url          http://www.frondmusic.com/
 * $copyright    Copyright (c) 2013, thisiszone.com. All rights reserved.
 * $version      1.0
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

                function loadImages () {
                    if (settings.preload && settings.seqDir.length > 0 && fileExt.length > 0) {
                        $.ajax({
                            url: settings.seqDir,
                            success: function(data) {
                                //
                            }
                        });
                    }
                }

                function setImages() {
                    $('img', $wrapper).each(function(i) {
                        $(this).addClass('item-' + i);
                    });
                }

                function hideImages() {
                    $('img:first', $wrapper).addClass('active').removeClass('inactive');
                    $('img:not(:first)', $wrapper).each(function(i) {
                        $(this).addClass('inactive');
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
                                console.log(true);
                                hideImages();
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