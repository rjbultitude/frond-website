<?php include("includes/mode.php"); ?>
<!DOCTYPE html>
<!--[if lt IE 7]><html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]><html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]><html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js"> <!--<![endif]-->
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title></title>
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- Place favicon.ico and apple-touch-icon.png in the root directory -->

    <script type="text/javascript" src="/<?php echo $mode; ?>/scripts/modernizr.js"></script>
    <link rel="stylesheet" href="/<?php echo $mode; ?>/styles/css/global.css">

</head>
<body>
<a href="#maincontent" class="skip">Skip to content</a>
    <div role="main" id="maincontent">
        <article class="article-main">
            <div class="wrapper-inner">
                <?php include("includes/header-include.php"); ?>
            </div>
            <figure class="figure-article">
                <div class="wrapper-inner">
                    <div class="wrapper-image-seq">
                        <div class="image-seq">
                            <img src="/images/tape-seq/tape-package-1.jpg" alt="" />
                            <img src="/images/tape-seq/tape-package-2.jpg" alt="" />
                            <img src="/images/tape-seq/tape-package-3.jpg" alt="" />
                            <img src="/images/tape-seq/tape-package-4.jpg" alt="" />
                            <img src="/images/tape-seq/tape-package-5.jpg" alt="" />
                            <img src="/images/tape-seq/tape-package-6.jpg" alt="" />
                        </div>
                    </div>
                    <div class="meta-article">
                        <p>Available on MP3/MC</p>
                        <p>Esc.Rec</p>
                    </div>
                </div>
            </figure>
            <div class="article-copy block-content">
                <div class="wrapper-inner">
                    <h2 class="heading-section">The Record</h2>
                    <div class="block-body">
                        <p>The Second Continent is the debut album from producer and phonographer Frond. It is also marks the begining of Frond's 
                        relationship with prolific Dutch label <a href="http://www.escrec.com/" target="_blank">Esc.Rec.</a></p>
                        <p>Blending gentle acoustics, intense electronics and field recordings, this is a personal journey through a landscape 
                        of forgotten melodies and vivid textures.</p>
                    </div>
                     <img src="/images/pack-detail.jpg" alt="" />
                </div>
            </div>
        </article>
        <aside class="supplementary block-content">
            <div class="wrapper-inner">
                <div class="block-body">
                    <h3 class="heading-section">The Artwork</h3>
                    <p>German artist <a href="http://www.holgerlippmann.de/" target="_blank">Holgar Lippmann</a> began his career with traditional materials 
                    but moved into computational design and generative art in the early 90s. The piece 'perlin scape 24', which features 
                    on the record, was completed in 2012 
                    and comprises of 12 plates of laser engraved wood.</p>
                </div>
                <img src="/images/lippman-illustration.gif" alt="">
            </div>
        </aside>
        <aside class="aside-cta">
            <div class="wrapper-inner">
                <section class="section-cta">
                    <a href="http://www.bandcamp.com/escrec" class="link-cta">
                        <h2 class="heading-cta">Buy</h2>
                        <span class="text-aux">Now</span>
                    </a>
                </section>
                <section class="section-cta">
                    <a href="http://www.bandcamp.com/escrec" class="link-cta">
                        <h2 class="heading-cta">Listen</h2>
                        <span class="text-aux">Now</span>
                    </a>
                </section>
                <section class="section-cta">
                    <a href="http://www.bandcamp.com/escrec" class="link-cta">
                        <h2 class="heading-cta">Read</h2>
                        <span class="text-aux">Now</span>
                    </a>
                </section>
            </div>
        </aside>
    </div>
    <div class="footer">
        <div class="wrapper-inner">
            <div class="copyright">Copyright <a href="http://www.escrec.com/" class="link link-sm" target="_blank">Esc.Rec</a> 2014</div>
            <div class="sm-links">
                <a href="http://twitter.com/pointbmusic" class="link link-sm" target="_blank">@pointbmusic</a>
            </div>
        </div>
    </div>

    <script data-main="/<?php echo $mode; ?>/scripts/config" src="/<?php echo $mode; ?>/scripts/libs/require.js"></script>

</body>
</html>