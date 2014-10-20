/**
    * Main app & config for require.js
    *
    * $author       Richard Bultitude
    * $email        richard.bultitude@gmail.com
    * $url          http://www.frondmusic.com/
    * $copyright    Copyright (c) 2013, thisiszone.com. All rights reserved.
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

        // Plugins
        velocity: 'plugins/jquery.imageseq.plugin',
        imageSeq: 'plugins/velocity',
    }

});

/* -------------------------------------------------------------------------- */
/* ---------- Initialize app ------------------------------------------------ */
/* -------------------------------------------------------------------------- */

require(['jquery', 'base', 'velocity', 'imageSeq'], function($, base) {
    'use strict';

    /* ---------- Global modules -------------------------------------------- */
    base.init();

    /* ---------- Plugins --------------------------------------------------- */
    //initialise jQuery plugin
    $('.image-seq').JQueryImgSeqPlugin();
});