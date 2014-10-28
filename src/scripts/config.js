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
        handleWaypoints: 'modules/handle-waypoints',

        // Plugins
        imagesLoadedMod: 'plugins/imagesloaded.pkgd',
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
        'handleWaypoints',
        'imageSeq'
    ],
    function(
        $,
        base,
        imagesLoaded,
        handleWaypoints
    ) {
        'use strict';

        /* ---------- Global modules -------------------------------------------- */
        base.init();
        handleWaypoints.init();

        /* ---------- Plugins --------------------------------------------------- */
        imagesLoaded('.image-seq', function() {
            console.log('images are loaded');
            $('.image-seq').JQueryImgSeqPlugin();
        });
    });