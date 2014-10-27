/**
 * Main app & config for require.js
 *
 * $author       Richard Bultitude
 * $email        richard.bultitude@gmail.com
 * $url          http://www.frondmusic.com/
 * $copyright    Copyright (c) 2013, frondmusic.com. All rights reserved.
 * $version      1.0
 *
 * $notes        Notes
 */


/* -------------------------------------------------------------------------- */
/* ---------- Configure relative paths -------------------------------------- */
/* -------------------------------------------------------------------------- */

require.config({
    paths: {
        //If IE8 support is required switch to jquery 1.11.0
        jquery: 'libs/jquery',
        waypoints: 'libs/waypoints',

        // modules
        imagesLoadedMod: 'plugins/imagesloaded.pkgd',

        // Plugins
        imageSeq: 'plugins/jquery.imageseq.plugin'
    }

});

/* -------------------------------------------------------------------------- */
/* ---------- Initialize app ------------------------------------------------ */
/* -------------------------------------------------------------------------- */

require([
        'jquery',
        'base',
        'imagesLoadedMod',
        'imageSeq',
        'waypoints'
    ],
    function(
        $,
        base,
        imagesLoaded
    ) {
        'use strict';

        /* ---------- Global modules -------------------------------------------- */
        base.init();

        /* ---------- Plugins --------------------------------------------------- */
        imagesLoaded('.image-seq', function() {
            console.log('images are loaded');
            $('.image-seq').JQueryImgSeqPlugin();
        });

        $('.footer').waypoint(function() {
            $('.link-cta').toggleClass('active');
        }, {
            offset: 'bottom-in-view'
        });
    });