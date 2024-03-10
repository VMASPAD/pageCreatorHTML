import 'grapesjs/dist/css/grapes.min.css'
import grapesjs from 'grapesjs'
import React, { useEffect } from 'react'
import plugin from 'grapesjs-preset-webpage'
import classUI from './components/cssSearch'
import manager from 'grapesjs-project-manager'
import blocks from 'grapesjs-blocks-basic'
import customCodePlugin from 'grapesjs-custom-code'
import pluginExport from 'grapesjs-plugin-export'

function App() {
  useEffect(() => {
    const editor = grapesjs.init({
      container: '#gjs',
      forceClass: false,
      height: '100vh',
      fromElement: true,
      plugins: [plugin, classUI, manager, blocks, customCodePlugin, pluginExport],
      storageManager: {
        type: 'local', // Storage type. Available: local | remote
        autosave: true, // Store data automatically
        autoload: true, // Autoload stored data on init
        stepsBeforeSave: 1 // If autosave
      },
      // Avoid any default panel
      panels: { defaults: [] },
      pluginsOpts: {
        [pluginExport]: {
          root: {
            css: {
              'style.css': (ed) => ed.getCss(),
              'some-file.js': 'console.log("Test some-file.js")'
            },
            html: {
              'index.html': (ed) => `
              <!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <link rel="pingback" href="../../../../xmlrpc.php" />

    <script type="text/javascript">
      document.documentElement.className = "js";
    </script>

    <title>
      Navigating infidelity in the digital age (part IV) &#8211; Ps. Diego
      Durán
    </title>
    <link rel="preconnect" href="https://fonts.gstatic.com/" crossorigin />
    <script type="text/javascript">
      WebFontConfig = {
        google: {
          families: [
            "Playfair+Display:r:latin,latin-ext",
            "Merriweather+Sans:r,i,b,bi:latin,latin-ext",
          ],
        },
        api_url: "https://fonts-api.wp.com//css",
      };
      (function () {
        var wf = document.createElement("script");
        wf.src =
          "../../../../wp-content/mu-plugins/wpcomsh/vendor/automattic/custom-fonts/js/webfont.js";
        wf.type = "text/javascript";
        wf.async = "true";
        var s = document.getElementsByTagName("script")[0];
        s.parentNode.insertBefore(wf, s);
      })();
    </script>
    <style id="jetpack-custom-fonts-css"></style>
    <style id="et-builder-googlefonts-cached-inline">
      /* Original: https://fonts.googleapis.com/css?family=Open+Sans:300,regular,500,600,700,800,300italic,italic,500italic,600italic,700italic,800italic&#038;subset=cyrillic,cyrillic-ext,greek,greek-ext,hebrew,latin,latin-ext,vietnamese&#038;display=swap */ /* User Agent: Mozilla/5.0 (Unknown; Linux x86_64) AppleWebKit/538.1 (KHTML, like Gecko) Safari/538.1 Daum/4.1 */
      @font-face {
        font-family: "Open Sans";
        font-style: italic;
        font-weight: 300;
        font-stretch: normal;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/opensans/v40/memQYaGs126MiZpBA-UFUIcVXSCEkx2cmqvXlWq8tWZ0Pw86hd0Rk5hkaVc.ttf)
          format("truetype");
      }
      @font-face {
        font-family: "Open Sans";
        font-style: italic;
        font-weight: 400;
        font-stretch: normal;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/opensans/v40/memQYaGs126MiZpBA-UFUIcVXSCEkx2cmqvXlWq8tWZ0Pw86hd0Rk8ZkaVc.ttf)
          format("truetype");
      }
      @font-face {
        font-family: "Open Sans";
        font-style: italic;
        font-weight: 500;
        font-stretch: normal;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/opensans/v40/memQYaGs126MiZpBA-UFUIcVXSCEkx2cmqvXlWq8tWZ0Pw86hd0Rk_RkaVc.ttf)
          format("truetype");
      }
      @font-face {
        font-family: "Open Sans";
        font-style: italic;
        font-weight: 600;
        font-stretch: normal;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/opensans/v40/memQYaGs126MiZpBA-UFUIcVXSCEkx2cmqvXlWq8tWZ0Pw86hd0RkxhjaVc.ttf)
          format("truetype");
      }
      @font-face {
        font-family: "Open Sans";
        font-style: italic;
        font-weight: 700;
        font-stretch: normal;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/opensans/v40/memQYaGs126MiZpBA-UFUIcVXSCEkx2cmqvXlWq8tWZ0Pw86hd0RkyFjaVc.ttf)
          format("truetype");
      }
      @font-face {
        font-family: "Open Sans";
        font-style: italic;
        font-weight: 800;
        font-stretch: normal;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/opensans/v40/memQYaGs126MiZpBA-UFUIcVXSCEkx2cmqvXlWq8tWZ0Pw86hd0Rk0ZjaVc.ttf)
          format("truetype");
      }
      @font-face {
        font-family: "Open Sans";
        font-style: normal;
        font-weight: 300;
        font-stretch: normal;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/opensans/v40/memSYaGs126MiZpBA-UvWbX2vVnXBbObj2OVZyOOSr4dVJWUgsiH0C4n.ttf)
          format("truetype");
      }
      @font-face {
        font-family: "Open Sans";
        font-style: normal;
        font-weight: 400;
        font-stretch: normal;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/opensans/v40/memSYaGs126MiZpBA-UvWbX2vVnXBbObj2OVZyOOSr4dVJWUgsjZ0C4n.ttf)
          format("truetype");
      }
      @font-face {
        font-family: "Open Sans";
        font-style: normal;
        font-weight: 500;
        font-stretch: normal;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/opensans/v40/memSYaGs126MiZpBA-UvWbX2vVnXBbObj2OVZyOOSr4dVJWUgsjr0C4n.ttf)
          format("truetype");
      }
      @font-face {
        font-family: "Open Sans";
        font-style: normal;
        font-weight: 600;
        font-stretch: normal;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/opensans/v40/memSYaGs126MiZpBA-UvWbX2vVnXBbObj2OVZyOOSr4dVJWUgsgH1y4n.ttf)
          format("truetype");
      }
      @font-face {
        font-family: "Open Sans";
        font-style: normal;
        font-weight: 700;
        font-stretch: normal;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/opensans/v40/memSYaGs126MiZpBA-UvWbX2vVnXBbObj2OVZyOOSr4dVJWUgsg-1y4n.ttf)
          format("truetype");
      }
      @font-face {
        font-family: "Open Sans";
        font-style: normal;
        font-weight: 800;
        font-stretch: normal;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/opensans/v40/memSYaGs126MiZpBA-UvWbX2vVnXBbObj2OVZyOOSr4dVJWUgshZ1y4n.ttf)
          format("truetype");
      } /* User Agent: Mozilla/5.0 (Windows NT 6.1; WOW64; rv:27.0) Gecko/20100101 Firefox/27.0 */
      @font-face {
        font-family: "Open Sans";
        font-style: italic;
        font-weight: 300;
        font-stretch: normal;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/opensans/v40/memQYaGs126MiZpBA-UFUIcVXSCEkx2cmqvXlWq8tWZ0Pw86hd0Rk5hkaVQ.woff)
          format("woff");
      }
      @font-face {
        font-family: "Open Sans";
        font-style: italic;
        font-weight: 400;
        font-stretch: normal;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/opensans/v40/memQYaGs126MiZpBA-UFUIcVXSCEkx2cmqvXlWq8tWZ0Pw86hd0Rk8ZkaVQ.woff)
          format("woff");
      }
      @font-face {
        font-family: "Open Sans";
        font-style: italic;
        font-weight: 500;
        font-stretch: normal;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/opensans/v40/memQYaGs126MiZpBA-UFUIcVXSCEkx2cmqvXlWq8tWZ0Pw86hd0Rk_RkaVQ.woff)
          format("woff");
      }
      @font-face {
        font-family: "Open Sans";
        font-style: italic;
        font-weight: 600;
        font-stretch: normal;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/opensans/v40/memQYaGs126MiZpBA-UFUIcVXSCEkx2cmqvXlWq8tWZ0Pw86hd0RkxhjaVQ.woff)
          format("woff");
      }
      @font-face {
        font-family: "Open Sans";
        font-style: italic;
        font-weight: 700;
        font-stretch: normal;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/opensans/v40/memQYaGs126MiZpBA-UFUIcVXSCEkx2cmqvXlWq8tWZ0Pw86hd0RkyFjaVQ.woff)
          format("woff");
      }
      @font-face {
        font-family: "Open Sans";
        font-style: italic;
        font-weight: 800;
        font-stretch: normal;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/opensans/v40/memQYaGs126MiZpBA-UFUIcVXSCEkx2cmqvXlWq8tWZ0Pw86hd0Rk0ZjaVQ.woff)
          format("woff");
      }
      @font-face {
        font-family: "Open Sans";
        font-style: normal;
        font-weight: 300;
        font-stretch: normal;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/opensans/v40/memSYaGs126MiZpBA-UvWbX2vVnXBbObj2OVZyOOSr4dVJWUgsiH0C4k.woff)
          format("woff");
      }
      @font-face {
        font-family: "Open Sans";
        font-style: normal;
        font-weight: 400;
        font-stretch: normal;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/opensans/v40/memSYaGs126MiZpBA-UvWbX2vVnXBbObj2OVZyOOSr4dVJWUgsjZ0C4k.woff)
          format("woff");
      }
      @font-face {
        font-family: "Open Sans";
        font-style: normal;
        font-weight: 500;
        font-stretch: normal;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/opensans/v40/memSYaGs126MiZpBA-UvWbX2vVnXBbObj2OVZyOOSr4dVJWUgsjr0C4k.woff)
          format("woff");
      }
      @font-face {
        font-family: "Open Sans";
        font-style: normal;
        font-weight: 600;
        font-stretch: normal;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/opensans/v40/memSYaGs126MiZpBA-UvWbX2vVnXBbObj2OVZyOOSr4dVJWUgsgH1y4k.woff)
          format("woff");
      }
      @font-face {
        font-family: "Open Sans";
        font-style: normal;
        font-weight: 700;
        font-stretch: normal;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/opensans/v40/memSYaGs126MiZpBA-UvWbX2vVnXBbObj2OVZyOOSr4dVJWUgsg-1y4k.woff)
          format("woff");
      }
      @font-face {
        font-family: "Open Sans";
        font-style: normal;
        font-weight: 800;
        font-stretch: normal;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/opensans/v40/memSYaGs126MiZpBA-UvWbX2vVnXBbObj2OVZyOOSr4dVJWUgshZ1y4k.woff)
          format("woff");
      } /* User Agent: Mozilla/5.0 (Windows NT 6.3; rv:39.0) Gecko/20100101 Firefox/39.0 */
      @font-face {
        font-family: "Open Sans";
        font-style: italic;
        font-weight: 300;
        font-stretch: normal;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/opensans/v40/memQYaGs126MiZpBA-UFUIcVXSCEkx2cmqvXlWq8tWZ0Pw86hd0Rk5hkaVI.woff2)
          format("woff2");
      }
      @font-face {
        font-family: "Open Sans";
        font-style: italic;
        font-weight: 400;
        font-stretch: normal;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/opensans/v40/memQYaGs126MiZpBA-UFUIcVXSCEkx2cmqvXlWq8tWZ0Pw86hd0Rk8ZkaVI.woff2)
          format("woff2");
      }
      @font-face {
        font-family: "Open Sans";
        font-style: italic;
        font-weight: 500;
        font-stretch: normal;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/opensans/v40/memQYaGs126MiZpBA-UFUIcVXSCEkx2cmqvXlWq8tWZ0Pw86hd0Rk_RkaVI.woff2)
          format("woff2");
      }
      @font-face {
        font-family: "Open Sans";
        font-style: italic;
        font-weight: 600;
        font-stretch: normal;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/opensans/v40/memQYaGs126MiZpBA-UFUIcVXSCEkx2cmqvXlWq8tWZ0Pw86hd0RkxhjaVI.woff2)
          format("woff2");
      }
      @font-face {
        font-family: "Open Sans";
        font-style: italic;
        font-weight: 700;
        font-stretch: normal;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/opensans/v40/memQYaGs126MiZpBA-UFUIcVXSCEkx2cmqvXlWq8tWZ0Pw86hd0RkyFjaVI.woff2)
          format("woff2");
      }
      @font-face {
        font-family: "Open Sans";
        font-style: italic;
        font-weight: 800;
        font-stretch: normal;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/opensans/v40/memQYaGs126MiZpBA-UFUIcVXSCEkx2cmqvXlWq8tWZ0Pw86hd0Rk0ZjaVI.woff2)
          format("woff2");
      }
      @font-face {
        font-family: "Open Sans";
        font-style: normal;
        font-weight: 300;
        font-stretch: normal;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/opensans/v40/memSYaGs126MiZpBA-UvWbX2vVnXBbObj2OVZyOOSr4dVJWUgsiH0C4i.woff2)
          format("woff2");
      }
      @font-face {
        font-family: "Open Sans";
        font-style: normal;
        font-weight: 400;
        font-stretch: normal;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/opensans/v40/memSYaGs126MiZpBA-UvWbX2vVnXBbObj2OVZyOOSr4dVJWUgsjZ0C4i.woff2)
          format("woff2");
      }
      @font-face {
        font-family: "Open Sans";
        font-style: normal;
        font-weight: 500;
        font-stretch: normal;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/opensans/v40/memSYaGs126MiZpBA-UvWbX2vVnXBbObj2OVZyOOSr4dVJWUgsjr0C4i.woff2)
          format("woff2");
      }
      @font-face {
        font-family: "Open Sans";
        font-style: normal;
        font-weight: 600;
        font-stretch: normal;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/opensans/v40/memSYaGs126MiZpBA-UvWbX2vVnXBbObj2OVZyOOSr4dVJWUgsgH1y4i.woff2)
          format("woff2");
      }
      @font-face {
        font-family: "Open Sans";
        font-style: normal;
        font-weight: 700;
        font-stretch: normal;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/opensans/v40/memSYaGs126MiZpBA-UvWbX2vVnXBbObj2OVZyOOSr4dVJWUgsg-1y4i.woff2)
          format("woff2");
      }
      @font-face {
        font-family: "Open Sans";
        font-style: normal;
        font-weight: 800;
        font-stretch: normal;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/opensans/v40/memSYaGs126MiZpBA-UvWbX2vVnXBbObj2OVZyOOSr4dVJWUgshZ1y4i.woff2)
          format("woff2");
      }
    </style>
    <meta name="robots" content="max-image-preview:large" />
    <link rel="dns-prefetch" href="http://stats.wp.com/" />
    <link
      rel="alternate"
      type="application/rss+xml"
      title="Ps. Diego Durán &raquo; Feed"
      href="../../../../feed/index.html"
    />
    <link
      rel="alternate"
      type="application/rss+xml"
      title="Ps. Diego Durán &raquo; Feed de los comentarios"
      href="../../../../comments/feed/index.html"
    />
    <link
      rel="alternate"
      type="application/rss+xml"
      title="Ps. Diego Durán &raquo; Comentario Navigating infidelity in the digital age (part IV) del feed"
      href="feed/index.html"
    />
    <meta content="Divi Child v.4.15.1.1648077043" name="generator" />
    <style id="wp-block-library-theme-inline-css" type="text/css">
      .wp-block-audio figcaption {
        color: #555;
        font-size: 13px;
        text-align: center;
      }
      .is-dark-theme .wp-block-audio figcaption {
        color: hsla(0, 0%, 100%, 0.65);
      }
      .wp-block-audio {
        margin: 0 0 1em;
      }
      .wp-block-code {
        border: 1px solid #ccc;
        border-radius: 4px;
        font-family: Menlo, Consolas, monaco, monospace;
        padding: 0.8em 1em;
      }
      .wp-block-embed figcaption {
        color: #555;
        font-size: 13px;
        text-align: center;
      }
      .is-dark-theme .wp-block-embed figcaption {
        color: hsla(0, 0%, 100%, 0.65);
      }
      .wp-block-embed {
        margin: 0 0 1em;
      }
      .blocks-gallery-caption {
        color: #555;
        font-size: 13px;
        text-align: center;
      }
      .is-dark-theme .blocks-gallery-caption {
        color: hsla(0, 0%, 100%, 0.65);
      }
      .wp-block-image figcaption {
        color: #555;
        font-size: 13px;
        text-align: center;
      }
      .is-dark-theme .wp-block-image figcaption {
        color: hsla(0, 0%, 100%, 0.65);
      }
      .wp-block-image {
        margin: 0 0 1em;
      }
      .wp-block-pullquote {
        border-bottom: 4px solid;
        border-top: 4px solid;
        color: currentColor;
        margin-bottom: 1.75em;
      }
      .wp-block-pullquote cite,
      .wp-block-pullquote footer,
      .wp-block-pullquote__citation {
        color: currentColor;
        font-size: 0.8125em;
        font-style: normal;
        text-transform: uppercase;
      }
      .wp-block-quote {
        border-left: 0.25em solid;
        margin: 0 0 1.75em;
        padding-left: 1em;
      }
      .wp-block-quote cite,
      .wp-block-quote footer {
        color: currentColor;
        font-size: 0.8125em;
        font-style: normal;
        position: relative;
      }
      .wp-block-quote.has-text-align-right {
        border-left: none;
        border-right: 0.25em solid;
        padding-left: 0;
        padding-right: 1em;
      }
      .wp-block-quote.has-text-align-center {
        border: none;
        padding-left: 0;
      }
      .wp-block-quote.is-large,
      .wp-block-quote.is-style-large,
      .wp-block-quote.is-style-plain {
        border: none;
      }
      .wp-block-search .wp-block-search__label {
        font-weight: 700;
      }
      .wp-block-search__button {
        border: 1px solid #ccc;
        padding: 0.375em 0.625em;
      }
      :where(.wp-block-group.has-background) {
        padding: 1.25em 2.375em;
      }
      .wp-block-separator.has-css-opacity {
        opacity: 0.4;
      }
      .wp-block-separator {
        border: none;
        border-bottom: 2px solid;
        margin-left: auto;
        margin-right: auto;
      }
      .wp-block-separator.has-alpha-channel-opacity {
        opacity: 1;
      }
      .wp-block-separator:not(.is-style-wide):not(.is-style-dots) {
        width: 100px;
      }
      .wp-block-separator.has-background:not(.is-style-dots) {
        border-bottom: none;
        height: 1px;
      }
      .wp-block-separator.has-background:not(.is-style-wide):not(
          .is-style-dots
        ) {
        height: 2px;
      }
      .wp-block-table {
        margin: 0 0 1em;
      }
      .wp-block-table td,
      .wp-block-table th {
        word-break: normal;
      }
      .wp-block-table figcaption {
        color: #555;
        font-size: 13px;
        text-align: center;
      }
      .is-dark-theme .wp-block-table figcaption {
        color: hsla(0, 0%, 100%, 0.65);
      }
      .wp-block-video figcaption {
        color: #555;
        font-size: 13px;
        text-align: center;
      }
      .is-dark-theme .wp-block-video figcaption {
        color: hsla(0, 0%, 100%, 0.65);
      }
      .wp-block-video {
        margin: 0 0 1em;
      }
      .wp-block-template-part.has-background {
        margin-bottom: 0;
        margin-top: 0;
        padding: 1.25em 2.375em;
      }
    </style>
    <link
      rel="stylesheet"
      id="jetpack-layout-grid-css"
      href="../../../../wp-content/plugins/layout-grid/style23ef.css?ver=1643201242"
      type="text/css"
      media="all"
    />
    <style id="global-styles-inline-css" type="text/css">
      body {
        --wp--preset--color--black: #000000;
        --wp--preset--color--cyan-bluish-gray: #abb8c3;
        --wp--preset--color--white: #ffffff;
        --wp--preset--color--pale-pink: #f78da7;
        --wp--preset--color--vivid-red: #cf2e2e;
        --wp--preset--color--luminous-vivid-orange: #ff6900;
        --wp--preset--color--luminous-vivid-amber: #fcb900;
        --wp--preset--color--light-green-cyan: #7bdcb5;
        --wp--preset--color--vivid-green-cyan: #00d084;
        --wp--preset--color--pale-cyan-blue: #8ed1fc;
        --wp--preset--color--vivid-cyan-blue: #0693e3;
        --wp--preset--color--vivid-purple: #9b51e0;
        --wp--preset--gradient--vivid-cyan-blue-to-vivid-purple: linear-gradient(
          135deg,
          rgba(6, 147, 227, 1) 0%,
          rgb(155, 81, 224) 100%
        );
        --wp--preset--gradient--light-green-cyan-to-vivid-green-cyan: linear-gradient(
          135deg,
          rgb(122, 220, 180) 0%,
          rgb(0, 208, 130) 100%
        );
        --wp--preset--gradient--luminous-vivid-amber-to-luminous-vivid-orange: linear-gradient(
          135deg,
          rgba(252, 185, 0, 1) 0%,
          rgba(255, 105, 0, 1) 100%
        );
        --wp--preset--gradient--luminous-vivid-orange-to-vivid-red: linear-gradient(
          135deg,
          rgba(255, 105, 0, 1) 0%,
          rgb(207, 46, 46) 100%
        );
        --wp--preset--gradient--very-light-gray-to-cyan-bluish-gray: linear-gradient(
          135deg,
          rgb(238, 238, 238) 0%,
          rgb(169, 184, 195) 100%
        );
        --wp--preset--gradient--cool-to-warm-spectrum: linear-gradient(
          135deg,
          rgb(74, 234, 220) 0%,
          rgb(151, 120, 209) 20%,
          rgb(207, 42, 186) 40%,
          rgb(238, 44, 130) 60%,
          rgb(251, 105, 98) 80%,
          rgb(254, 248, 76) 100%
        );
        --wp--preset--gradient--blush-light-purple: linear-gradient(
          135deg,
          rgb(255, 206, 236) 0%,
          rgb(152, 150, 240) 100%
        );
        --wp--preset--gradient--blush-bordeaux: linear-gradient(
          135deg,
          rgb(254, 205, 165) 0%,
          rgb(254, 45, 45) 50%,
          rgb(107, 0, 62) 100%
        );
        --wp--preset--gradient--luminous-dusk: linear-gradient(
          135deg,
          rgb(255, 203, 112) 0%,
          rgb(199, 81, 192) 50%,
          rgb(65, 88, 208) 100%
        );
        --wp--preset--gradient--pale-ocean: linear-gradient(
          135deg,
          rgb(255, 245, 203) 0%,
          rgb(182, 227, 212) 50%,
          rgb(51, 167, 181) 100%
        );
        --wp--preset--gradient--electric-grass: linear-gradient(
          135deg,
          rgb(202, 248, 128) 0%,
          rgb(113, 206, 126) 100%
        );
        --wp--preset--gradient--midnight: linear-gradient(
          135deg,
          rgb(2, 3, 129) 0%,
          rgb(40, 116, 252) 100%
        );
        --wp--preset--font-size--small: 13px;
        --wp--preset--font-size--medium: 20px;
        --wp--preset--font-size--large: 36px;
        --wp--preset--font-size--x-large: 42px;
        --wp--preset--font-family--albert-sans: "Albert Sans", sans-serif;
        --wp--preset--font-family--alegreya: Alegreya, serif;
        --wp--preset--font-family--arvo: Arvo, serif;
        --wp--preset--font-family--bodoni-moda: "Bodoni Moda", serif;
        --wp--preset--font-family--cabin: Cabin, sans-serif;
        --wp--preset--font-family--chivo: Chivo, sans-serif;
        --wp--preset--font-family--commissioner: Commissioner, sans-serif;
        --wp--preset--font-family--cormorant: Cormorant, serif;
        --wp--preset--font-family--courier-prime: "Courier Prime", monospace;
        --wp--preset--font-family--crimson-pro: "Crimson Pro", serif;
        --wp--preset--font-family--dm-mono: "DM Mono", monospace;
        --wp--preset--font-family--dm-sans: "DM Sans", sans-serif;
        --wp--preset--font-family--domine: Domine, serif;
        --wp--preset--font-family--eb-garamond: "EB Garamond", serif;
        --wp--preset--font-family--epilogue: Epilogue, sans-serif;
        --wp--preset--font-family--figtree: Figtree, sans-serif;
        --wp--preset--font-family--fira-sans: "Fira Sans", sans-serif;
        --wp--preset--font-family--fraunces: Fraunces, serif;
        --wp--preset--font-family--ibm-plex-mono: "IBM Plex Mono", monospace;
        --wp--preset--font-family--ibm-plex-sans: "IBM Plex Sans", sans-serif;
        --wp--preset--font-family--inter: Inter, sans-serif;
        --wp--preset--font-family--josefin-sans: "Josefin Sans", sans-serif;
        --wp--preset--font-family--jost: Jost, sans-serif;
        --wp--preset--font-family--libre-baskerville: "Libre Baskerville", serif;
        --wp--preset--font-family--libre-franklin: "Libre Franklin", sans-serif;
        --wp--preset--font-family--literata: Literata, serif;
        --wp--preset--font-family--lora: Lora, serif;
        --wp--preset--font-family--merriweather: Merriweather, serif;
        --wp--preset--font-family--montserrat: Montserrat, sans-serif;
        --wp--preset--font-family--newsreader: Newsreader, serif;
        --wp--preset--font-family--nunito: Nunito, sans-serif;
        --wp--preset--font-family--open-sans: "Open Sans", sans-serif;
        --wp--preset--font-family--overpass: Overpass, sans-serif;
        --wp--preset--font-family--petrona: Petrona, serif;
        --wp--preset--font-family--piazzolla: Piazzolla, serif;
        --wp--preset--font-family--playfair-display: "Playfair Display", serif;
        --wp--preset--font-family--plus-jakarta-sans: "Plus Jakarta Sans",
          sans-serif;
        --wp--preset--font-family--poppins: Poppins, sans-serif;
        --wp--preset--font-family--raleway: Raleway, sans-serif;
        --wp--preset--font-family--roboto: Roboto, sans-serif;
        --wp--preset--font-family--roboto-slab: "Roboto Slab", serif;
        --wp--preset--font-family--rubik: Rubik, sans-serif;
        --wp--preset--font-family--sora: Sora, sans-serif;
        --wp--preset--font-family--source-sans-3: "Source Sans 3", sans-serif;
        --wp--preset--font-family--source-serif-4: "Source Serif 4", serif;
        --wp--preset--font-family--space-mono: "Space Mono", monospace;
        --wp--preset--font-family--texturina: Texturina, serif;
        --wp--preset--font-family--work-sans: "Work Sans", sans-serif;
        --wp--preset--spacing--20: 0.44rem;
        --wp--preset--spacing--30: 0.67rem;
        --wp--preset--spacing--40: 1rem;
        --wp--preset--spacing--50: 1.5rem;
        --wp--preset--spacing--60: 2.25rem;
        --wp--preset--spacing--70: 3.38rem;
        --wp--preset--spacing--80: 5.06rem;
        --wp--preset--shadow--natural: 6px 6px 9px rgba(0, 0, 0, 0.2);
        --wp--preset--shadow--deep: 12px 12px 50px rgba(0, 0, 0, 0.4);
        --wp--preset--shadow--sharp: 6px 6px 0px rgba(0, 0, 0, 0.2);
        --wp--preset--shadow--outlined: 6px 6px 0px -3px rgba(255, 255, 255, 1),
          6px 6px rgba(0, 0, 0, 1);
        --wp--preset--shadow--crisp: 6px 6px 0px rgba(0, 0, 0, 1);
      }
      body {
        margin: 0;
        --wp--style--global--content-size: 823px;
        --wp--style--global--wide-size: 1080px;
      }
      .wp-site-blocks > .alignleft {
        float: left;
        margin-right: 2em;
      }
      .wp-site-blocks > .alignright {
        float: right;
        margin-left: 2em;
      }
      .wp-site-blocks > .aligncenter {
        justify-content: center;
        margin-left: auto;
        margin-right: auto;
      }
      :where(.is-layout-flex) {
        gap: 0.5em;
      }
      :where(.is-layout-grid) {
        gap: 0.5em;
      }
      body .is-layout-flow > .alignleft {
        float: left;
        margin-inline-start: 0;
        margin-inline-end: 2em;
      }
      body .is-layout-flow > .alignright {
        float: right;
        margin-inline-start: 2em;
        margin-inline-end: 0;
      }
      body .is-layout-flow > .aligncenter {
        margin-left: auto !important;
        margin-right: auto !important;
      }
      body .is-layout-constrained > .alignleft {
        float: left;
        margin-inline-start: 0;
        margin-inline-end: 2em;
      }
      body .is-layout-constrained > .alignright {
        float: right;
        margin-inline-start: 2em;
        margin-inline-end: 0;
      }
      body .is-layout-constrained > .aligncenter {
        margin-left: auto !important;
        margin-right: auto !important;
      }
      body
        .is-layout-constrained
        > :where(:not(.alignleft):not(.alignright):not(.alignfull)) {
        max-width: var(--wp--style--global--content-size);
        margin-left: auto !important;
        margin-right: auto !important;
      }
      body .is-layout-constrained > .alignwide {
        max-width: var(--wp--style--global--wide-size);
      }
      body .is-layout-flex {
        display: flex;
      }
      body .is-layout-flex {
        flex-wrap: wrap;
        align-items: center;
      }
      body .is-layout-flex > * {
        margin: 0;
      }
      body .is-layout-grid {
        display: grid;
      }
      body .is-layout-grid > * {
        margin: 0;
      }
      body {
        padding-top: 0px;
        padding-right: 0px;
        padding-bottom: 0px;
        padding-left: 0px;
      }
      a:where(:not(.wp-element-button)) {
        text-decoration: underline;
      }
      .wp-element-button,
      .wp-block-button__link {
        background-color: #32373c;
        border-width: 0;
        color: #fff;
        font-family: inherit;
        font-size: inherit;
        line-height: inherit;
        padding: calc(0.667em + 2px) calc(1.333em + 2px);
        text-decoration: none;
      }
      .has-black-color {
        color: var(--wp--preset--color--black) !important;
      }
      .has-cyan-bluish-gray-color {
        color: var(--wp--preset--color--cyan-bluish-gray) !important;
      }
      .has-white-color {
        color: var(--wp--preset--color--white) !important;
      }
      .has-pale-pink-color {
        color: var(--wp--preset--color--pale-pink) !important;
      }
      .has-vivid-red-color {
        color: var(--wp--preset--color--vivid-red) !important;
      }
      .has-luminous-vivid-orange-color {
        color: var(--wp--preset--color--luminous-vivid-orange) !important;
      }
      .has-luminous-vivid-amber-color {
        color: var(--wp--preset--color--luminous-vivid-amber) !important;
      }
      .has-light-green-cyan-color {
        color: var(--wp--preset--color--light-green-cyan) !important;
      }
      .has-vivid-green-cyan-color {
        color: var(--wp--preset--color--vivid-green-cyan) !important;
      }
      .has-pale-cyan-blue-color {
        color: var(--wp--preset--color--pale-cyan-blue) !important;
      }
      .has-vivid-cyan-blue-color {
        color: var(--wp--preset--color--vivid-cyan-blue) !important;
      }
      .has-vivid-purple-color {
        color: var(--wp--preset--color--vivid-purple) !important;
      }
      .has-black-background-color {
        background-color: var(--wp--preset--color--black) !important;
      }
      .has-cyan-bluish-gray-background-color {
        background-color: var(--wp--preset--color--cyan-bluish-gray) !important;
      }
      .has-white-background-color {
        background-color: var(--wp--preset--color--white) !important;
      }
      .has-pale-pink-background-color {
        background-color: var(--wp--preset--color--pale-pink) !important;
      }
      .has-vivid-red-background-color {
        background-color: var(--wp--preset--color--vivid-red) !important;
      }
      .has-luminous-vivid-orange-background-color {
        background-color: var(
          --wp--preset--color--luminous-vivid-orange
        ) !important;
      }
      .has-luminous-vivid-amber-background-color {
        background-color: var(
          --wp--preset--color--luminous-vivid-amber
        ) !important;
      }
      .has-light-green-cyan-background-color {
        background-color: var(--wp--preset--color--light-green-cyan) !important;
      }
      .has-vivid-green-cyan-background-color {
        background-color: var(--wp--preset--color--vivid-green-cyan) !important;
      }
      .has-pale-cyan-blue-background-color {
        background-color: var(--wp--preset--color--pale-cyan-blue) !important;
      }
      .has-vivid-cyan-blue-background-color {
        background-color: var(--wp--preset--color--vivid-cyan-blue) !important;
      }
      .has-vivid-purple-background-color {
        background-color: var(--wp--preset--color--vivid-purple) !important;
      }
      .has-black-border-color {
        border-color: var(--wp--preset--color--black) !important;
      }
      .has-cyan-bluish-gray-border-color {
        border-color: var(--wp--preset--color--cyan-bluish-gray) !important;
      }
      .has-white-border-color {
        border-color: var(--wp--preset--color--white) !important;
      }
      .has-pale-pink-border-color {
        border-color: var(--wp--preset--color--pale-pink) !important;
      }
      .has-vivid-red-border-color {
        border-color: var(--wp--preset--color--vivid-red) !important;
      }
      .has-luminous-vivid-orange-border-color {
        border-color: var(
          --wp--preset--color--luminous-vivid-orange
        ) !important;
      }
      .has-luminous-vivid-amber-border-color {
        border-color: var(--wp--preset--color--luminous-vivid-amber) !important;
      }
      .has-light-green-cyan-border-color {
        border-color: var(--wp--preset--color--light-green-cyan) !important;
      }
      .has-vivid-green-cyan-border-color {
        border-color: var(--wp--preset--color--vivid-green-cyan) !important;
      }
      .has-pale-cyan-blue-border-color {
        border-color: var(--wp--preset--color--pale-cyan-blue) !important;
      }
      .has-vivid-cyan-blue-border-color {
        border-color: var(--wp--preset--color--vivid-cyan-blue) !important;
      }
      .has-vivid-purple-border-color {
        border-color: var(--wp--preset--color--vivid-purple) !important;
      }
      .has-vivid-cyan-blue-to-vivid-purple-gradient-background {
        background: var(
          --wp--preset--gradient--vivid-cyan-blue-to-vivid-purple
        ) !important;
      }
      .has-light-green-cyan-to-vivid-green-cyan-gradient-background {
        background: var(
          --wp--preset--gradient--light-green-cyan-to-vivid-green-cyan
        ) !important;
      }
      .has-luminous-vivid-amber-to-luminous-vivid-orange-gradient-background {
        background: var(
          --wp--preset--gradient--luminous-vivid-amber-to-luminous-vivid-orange
        ) !important;
      }
      .has-luminous-vivid-orange-to-vivid-red-gradient-background {
        background: var(
          --wp--preset--gradient--luminous-vivid-orange-to-vivid-red
        ) !important;
      }
      .has-very-light-gray-to-cyan-bluish-gray-gradient-background {
        background: var(
          --wp--preset--gradient--very-light-gray-to-cyan-bluish-gray
        ) !important;
      }
      .has-cool-to-warm-spectrum-gradient-background {
        background: var(
          --wp--preset--gradient--cool-to-warm-spectrum
        ) !important;
      }
      .has-blush-light-purple-gradient-background {
        background: var(--wp--preset--gradient--blush-light-purple) !important;
      }
      .has-blush-bordeaux-gradient-background {
        background: var(--wp--preset--gradient--blush-bordeaux) !important;
      }
      .has-luminous-dusk-gradient-background {
        background: var(--wp--preset--gradient--luminous-dusk) !important;
      }
      .has-pale-ocean-gradient-background {
        background: var(--wp--preset--gradient--pale-ocean) !important;
      }
      .has-electric-grass-gradient-background {
        background: var(--wp--preset--gradient--electric-grass) !important;
      }
      .has-midnight-gradient-background {
        background: var(--wp--preset--gradient--midnight) !important;
      }
      .has-small-font-size {
        font-size: var(--wp--preset--font-size--small) !important;
      }
      .has-medium-font-size {
        font-size: var(--wp--preset--font-size--medium) !important;
      }
      .has-large-font-size {
        font-size: var(--wp--preset--font-size--large) !important;
      }
      .has-x-large-font-size {
        font-size: var(--wp--preset--font-size--x-large) !important;
      }
      .has-albert-sans-font-family {
        font-family: var(--wp--preset--font-family--albert-sans) !important;
      }
      .has-alegreya-font-family {
        font-family: var(--wp--preset--font-family--alegreya) !important;
      }
      .has-arvo-font-family {
        font-family: var(--wp--preset--font-family--arvo) !important;
      }
      .has-bodoni-moda-font-family {
        font-family: var(--wp--preset--font-family--bodoni-moda) !important;
      }
      .has-cabin-font-family {
        font-family: var(--wp--preset--font-family--cabin) !important;
      }
      .has-chivo-font-family {
        font-family: var(--wp--preset--font-family--chivo) !important;
      }
      .has-commissioner-font-family {
        font-family: var(--wp--preset--font-family--commissioner) !important;
      }
      .has-cormorant-font-family {
        font-family: var(--wp--preset--font-family--cormorant) !important;
      }
      .has-courier-prime-font-family {
        font-family: var(--wp--preset--font-family--courier-prime) !important;
      }
      .has-crimson-pro-font-family {
        font-family: var(--wp--preset--font-family--crimson-pro) !important;
      }
      .has-dm-mono-font-family {
        font-family: var(--wp--preset--font-family--dm-mono) !important;
      }
      .has-dm-sans-font-family {
        font-family: var(--wp--preset--font-family--dm-sans) !important;
      }
      .has-domine-font-family {
        font-family: var(--wp--preset--font-family--domine) !important;
      }
      .has-eb-garamond-font-family {
        font-family: var(--wp--preset--font-family--eb-garamond) !important;
      }
      .has-epilogue-font-family {
        font-family: var(--wp--preset--font-family--epilogue) !important;
      }
      .has-figtree-font-family {
        font-family: var(--wp--preset--font-family--figtree) !important;
      }
      .has-fira-sans-font-family {
        font-family: var(--wp--preset--font-family--fira-sans) !important;
      }
      .has-fraunces-font-family {
        font-family: var(--wp--preset--font-family--fraunces) !important;
      }
      .has-ibm-plex-mono-font-family {
        font-family: var(--wp--preset--font-family--ibm-plex-mono) !important;
      }
      .has-ibm-plex-sans-font-family {
        font-family: var(--wp--preset--font-family--ibm-plex-sans) !important;
      }
      .has-inter-font-family {
        font-family: var(--wp--preset--font-family--inter) !important;
      }
      .has-josefin-sans-font-family {
        font-family: var(--wp--preset--font-family--josefin-sans) !important;
      }
      .has-jost-font-family {
        font-family: var(--wp--preset--font-family--jost) !important;
      }
      .has-libre-baskerville-font-family {
        font-family: var(
          --wp--preset--font-family--libre-baskerville
        ) !important;
      }
      .has-libre-franklin-font-family {
        font-family: var(--wp--preset--font-family--libre-franklin) !important;
      }
      .has-literata-font-family {
        font-family: var(--wp--preset--font-family--literata) !important;
      }
      .has-lora-font-family {
        font-family: var(--wp--preset--font-family--lora) !important;
      }
      .has-merriweather-font-family {
        font-family: var(--wp--preset--font-family--merriweather) !important;
      }
      .has-montserrat-font-family {
        font-family: var(--wp--preset--font-family--montserrat) !important;
      }
      .has-newsreader-font-family {
        font-family: var(--wp--preset--font-family--newsreader) !important;
      }
      .has-nunito-font-family {
        font-family: var(--wp--preset--font-family--nunito) !important;
      }
      .has-open-sans-font-family {
        font-family: var(--wp--preset--font-family--open-sans) !important;
      }
      .has-overpass-font-family {
        font-family: var(--wp--preset--font-family--overpass) !important;
      }
      .has-petrona-font-family {
        font-family: var(--wp--preset--font-family--petrona) !important;
      }
      .has-piazzolla-font-family {
        font-family: var(--wp--preset--font-family--piazzolla) !important;
      }
      .has-playfair-display-font-family {
        font-family: var(
          --wp--preset--font-family--playfair-display
        ) !important;
      }
      .has-plus-jakarta-sans-font-family {
        font-family: var(
          --wp--preset--font-family--plus-jakarta-sans
        ) !important;
      }
      .has-poppins-font-family {
        font-family: var(--wp--preset--font-family--poppins) !important;
      }
      .has-raleway-font-family {
        font-family: var(--wp--preset--font-family--raleway) !important;
      }
      .has-roboto-font-family {
        font-family: var(--wp--preset--font-family--roboto) !important;
      }
      .has-roboto-slab-font-family {
        font-family: var(--wp--preset--font-family--roboto-slab) !important;
      }
      .has-rubik-font-family {
        font-family: var(--wp--preset--font-family--rubik) !important;
      }
      .has-sora-font-family {
        font-family: var(--wp--preset--font-family--sora) !important;
      }
      .has-source-sans-3-font-family {
        font-family: var(--wp--preset--font-family--source-sans-3) !important;
      }
      .has-source-serif-4-font-family {
        font-family: var(--wp--preset--font-family--source-serif-4) !important;
      }
      .has-space-mono-font-family {
        font-family: var(--wp--preset--font-family--space-mono) !important;
      }
      .has-texturina-font-family {
        font-family: var(--wp--preset--font-family--texturina) !important;
      }
      .has-work-sans-font-family {
        font-family: var(--wp--preset--font-family--work-sans) !important;
      }
      .wp-block-navigation a:where(:not(.wp-element-button)) {
        color: inherit;
      }
      :where(.wp-block-post-template.is-layout-flex) {
        gap: 1.25em;
      }
      :where(.wp-block-post-template.is-layout-grid) {
        gap: 1.25em;
      }
      :where(.wp-block-columns.is-layout-flex) {
        gap: 2em;
      }
      :where(.wp-block-columns.is-layout-grid) {
        gap: 2em;
      }
      .wp-block-pullquote {
        font-size: 1.5em;
        line-height: 1.6;
      }
    </style>
    <style id="divi-style-parent-inline-inline-css" type="text/css">
      /*!
Theme Name: Divi
Theme URI: http://www.elegantthemes.com/gallery/divi/
Version: 4.24.0
Description: Smart. Flexible. Beautiful. Divi is the most powerful theme in our collection.
Author: Elegant Themes
Author URI: http://www.elegantthemes.com
License: GNU General Public License v2
License URI: http://www.gnu.org/licenses/gpl-2.0.html
*/

      a,
      abbr,
      acronym,
      address,
      applet,
      b,
      big,
      blockquote,
      body,
      center,
      cite,
      code,
      dd,
      del,
      dfn,
      div,
      dl,
      dt,
      em,
      fieldset,
      font,
      form,
      h1,
      h2,
      h3,
      h4,
      h5,
      h6,
      html,
      i,
      iframe,
      img,
      ins,
      kbd,
      label,
      legend,
      li,
      object,
      ol,
      p,
      pre,
      q,
      s,
      samp,
      small,
      span,
      strike,
      strong,
      sub,
      sup,
      tt,
      u,
      ul,
      var {
        margin: 0;
        padding: 0;
        border: 0;
        outline: 0;
        font-size: 100%;
        -ms-text-size-adjust: 100%;
        -webkit-text-size-adjust: 100%;
        vertical-align: baseline;
        background: transparent;
      }
      body {
        line-height: 1;
      }
      ol,
      ul {
        list-style: none;
      }
      blockquote,
      q {
        quotes: none;
      }
      blockquote:after,
      blockquote:before,
      q:after,
      q:before {
        content: "";
        content: none;
      }
      blockquote {
        margin: 20px 0 30px;
        border-left: 5px solid;
        padding-left: 20px;
      }
      :focus {
        outline: 0;
      }
      del {
        text-decoration: line-through;
      }
      pre {
        overflow: auto;
        padding: 10px;
      }
      figure {
        margin: 0;
      }
      table {
        border-collapse: collapse;
        border-spacing: 0;
      }
      article,
      aside,
      footer,
      header,
      hgroup,
      nav,
      section {
        display: block;
      }
      body {
        font-family: Open Sans, Arial, sans-serif;
        font-size: 14px;
        color: #666;
        background-color: #fff;
        line-height: 1.7em;
        font-weight: 500;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }
      body.page-template-page-template-blank-php #page-container {
        padding-top: 0 !important;
      }
      body.et_cover_background {
        background-size: cover !important;
        background-position: top !important;
        background-repeat: no-repeat !important;
        background-attachment: fixed;
      }
      a {
        color: #2ea3f2;
      }
      a,
      a:hover {
        text-decoration: none;
      }
      p {
        padding-bottom: 1em;
      }
      p:not(.has-background):last-of-type {
        padding-bottom: 0;
      }
      p.et_normal_padding {
        padding-bottom: 1em;
      }
      strong {
        font-weight: 700;
      }
      cite,
      em,
      i {
        font-style: italic;
      }
      code,
      pre {
        font-family: Courier New, monospace;
        margin-bottom: 10px;
      }
      ins {
        text-decoration: none;
      }
      sub,
      sup {
        height: 0;
        line-height: 1;
        position: relative;
        vertical-align: baseline;
      }
      sup {
        bottom: 0.8em;
      }
      sub {
        top: 0.3em;
      }
      dl {
        margin: 0 0 1.5em;
      }
      dl dt {
        font-weight: 700;
      }
      dd {
        margin-left: 1.5em;
      }
      blockquote p {
        padding-bottom: 0;
      }
      embed,
      iframe,
      object,
      video {
        max-width: 100%;
      }
      h1,
      h2,
      h3,
      h4,
      h5,
      h6 {
        color: #333;
        padding-bottom: 10px;
        line-height: 1em;
        font-weight: 500;
      }
      h1 a,
      h2 a,
      h3 a,
      h4 a,
      h5 a,
      h6 a {
        color: inherit;
      }
      h1 {
        font-size: 30px;
      }
      h2 {
        font-size: 26px;
      }
      h3 {
        font-size: 22px;
      }
      h4 {
        font-size: 18px;
      }
      h5 {
        font-size: 16px;
      }
      h6 {
        font-size: 14px;
      }
      input {
        -webkit-appearance: none;
      }
      input[type="checkbox"] {
        -webkit-appearance: checkbox;
      }
      input[type="radio"] {
        -webkit-appearance: radio;
      }
      input.text,
      input.title,
      input[type="email"],
      input[type="password"],
      input[type="tel"],
      input[type="text"],
      select,
      textarea {
        background-color: #fff;
        border: 1px solid #bbb;
        padding: 2px;
        color: #4e4e4e;
      }
      input.text:focus,
      input.title:focus,
      input[type="text"]:focus,
      select:focus,
      textarea:focus {
        border-color: #2d3940;
        color: #3e3e3e;
      }
      input.text,
      input.title,
      input[type="text"],
      select,
      textarea {
        margin: 0;
      }
      textarea {
        padding: 4px;
      }
      button,
      input,
      select,
      textarea {
        font-family: inherit;
      }
      img {
        max-width: 100%;
        height: auto;
      }
      .clear {
        clear: both;
      }
      br.clear {
        margin: 0;
        padding: 0;
      }
      .pagination {
        clear: both;
      }
      #et_search_icon:hover,
      .et-social-icon a:hover,
      .et_password_protected_form .et_submit_button,
      .form-submit .et_pb_buttontton.alt.disabled,
      .nav-single a,
      .posted_in a {
        color: #2ea3f2;
      }
      .et-search-form,
      blockquote {
        border-color: #2ea3f2;
      }
      #main-content {
        background-color: #fff;
      }
      .container {
        width: 80%;
        max-width: 1080px;
        margin: auto;
        position: relative;
      }
      body:not(.et-tb) #main-content .container,
      body:not(.et-tb-has-header) #main-content .container {
        padding-top: 58px;
      }
      .et_full_width_page #main-content .container:before {
        display: none;
      }
      .main_title {
        margin-bottom: 20px;
      }
      .et_password_protected_form .et_submit_button:hover,
      .form-submit .et_pb_button:hover {
        background: rgba(0, 0, 0, 0.05);
      }
      .et_button_icon_visible .et_pb_button {
        padding-right: 2em;
        padding-left: 0.7em;
      }
      .et_button_icon_visible .et_pb_button:after {
        opacity: 1;
        margin-left: 0;
      }
      .et_button_left .et_pb_button:hover:after {
        left: 0.15em;
      }
      .et_button_left .et_pb_button:after {
        margin-left: 0;
        left: 1em;
      }
      .et_button_icon_visible.et_button_left .et_pb_button,
      .et_button_left .et_pb_button:hover,
      .et_button_left .et_pb_module .et_pb_button:hover {
        padding-left: 2em;
        padding-right: 0.7em;
      }
      .et_button_icon_visible.et_button_left .et_pb_button:after,
      .et_button_left .et_pb_button:hover:after {
        left: 0.15em;
      }
      .et_password_protected_form .et_submit_button:hover,
      .form-submit .et_pb_button:hover {
        padding: 0.3em 1em;
      }
      .et_button_no_icon .et_pb_button:after {
        display: none;
      }
      .et_button_no_icon.et_button_icon_visible.et_button_left .et_pb_button,
      .et_button_no_icon.et_button_left .et_pb_button:hover,
      .et_button_no_icon .et_pb_button,
      .et_button_no_icon .et_pb_button:hover {
        padding: 0.3em 1em !important;
      }
      .et_button_custom_icon .et_pb_button:after {
        line-height: 1.7em;
      }
      .et_button_custom_icon.et_button_icon_visible .et_pb_button:after,
      .et_button_custom_icon .et_pb_button:hover:after {
        margin-left: 0.3em;
      }
      #left-area
        .post_format-post-format-gallery
        .wp-block-gallery:first-of-type {
        padding: 0;
        margin-bottom: -16px;
      }
      .entry-content table:not(.variations) {
        border: 1px solid #eee;
        margin: 0 0 15px;
        text-align: left;
        width: 100%;
      }
      .entry-content thead th,
      .entry-content tr th {
        color: #555;
        font-weight: 700;
        padding: 9px 24px;
      }
      .entry-content tr td {
        border-top: 1px solid #eee;
        padding: 6px 24px;
      }
      #left-area ul,
      .entry-content ul,
      .et-l--body ul,
      .et-l--footer ul,
      .et-l--header ul {
        list-style-type: disc;
        padding: 0 0 23px 1em;
        line-height: 26px;
      }
      #left-area ol,
      .entry-content ol,
      .et-l--body ol,
      .et-l--footer ol,
      .et-l--header ol {
        list-style-type: decimal;
        list-style-position: inside;
        padding: 0 0 23px;
        line-height: 26px;
      }
      #left-area ul li ul,
      .entry-content ul li ol {
        padding: 2px 0 2px 20px;
      }
      #left-area ol li ul,
      .entry-content ol li ol,
      .et-l--body ol li ol,
      .et-l--footer ol li ol,
      .et-l--header ol li ol {
        padding: 2px 0 2px 35px;
      }
      #left-area ul.wp-block-gallery {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -ms-flex-wrap: wrap;
        flex-wrap: wrap;
        list-style-type: none;
        padding: 0;
      }
      #left-area ul.products {
        padding: 0 !important;
        line-height: 1.7 !important;
        list-style: none !important;
      }
      .gallery-item a {
        display: block;
      }
      .gallery-caption,
      .gallery-item a {
        width: 90%;
      }
      #wpadminbar {
        z-index: 100001;
      }
      #left-area .post-meta {
        font-size: 14px;
        padding-bottom: 15px;
      }
      #left-area .post-meta a {
        text-decoration: none;
        color: #666;
      }
      #left-area .et_featured_image {
        padding-bottom: 7px;
      }
      .single .post {
        padding-bottom: 25px;
      }
      body.single .et_audio_content {
        margin-bottom: -6px;
      }
      .nav-single a {
        text-decoration: none;
        color: #2ea3f2;
        font-size: 14px;
        font-weight: 400;
      }
      .nav-previous {
        float: left;
      }
      .nav-next {
        float: right;
      }
      .et_password_protected_form p input {
        background-color: #eee;
        border: none !important;
        width: 100% !important;
        border-radius: 0 !important;
        font-size: 14px;
        color: #999 !important;
        padding: 16px !important;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
      }
      .et_password_protected_form label {
        display: none;
      }
      .et_password_protected_form .et_submit_button {
        font-family: inherit;
        display: block;
        float: right;
        margin: 8px auto 0;
        cursor: pointer;
      }
      .post-password-required p.nocomments.container {
        max-width: 100%;
      }
      .post-password-required p.nocomments.container:before {
        display: none;
      }
      .aligncenter,
      div.post .new-post .aligncenter {
        display: block;
        margin-left: auto;
        margin-right: auto;
      }
      .wp-caption {
        border: 1px solid #ddd;
        text-align: center;
        background-color: #f3f3f3;
        margin-bottom: 10px;
        max-width: 96%;
        padding: 8px;
      }
      .wp-caption.alignleft {
        margin: 0 30px 20px 0;
      }
      .wp-caption.alignright {
        margin: 0 0 20px 30px;
      }
      .wp-caption img {
        margin: 0;
        padding: 0;
        border: 0;
      }
      .wp-caption p.wp-caption-text {
        font-size: 12px;
        padding: 0 4px 5px;
        margin: 0;
      }
      .alignright {
        float: right;
      }
      .alignleft {
        float: left;
      }
      img.alignleft {
        display: inline;
        float: left;
        margin-right: 15px;
      }
      img.alignright {
        display: inline;
        float: right;
        margin-left: 15px;
      }
      .page.et_pb_pagebuilder_layout #main-content {
        background-color: transparent;
      }
      body #main-content .et_builder_inner_content > h1,
      body #main-content .et_builder_inner_content > h2,
      body #main-content .et_builder_inner_content > h3,
      body #main-content .et_builder_inner_content > h4,
      body #main-content .et_builder_inner_content > h5,
      body #main-content .et_builder_inner_content > h6 {
        line-height: 1.4em;
      }
      body #main-content .et_builder_inner_content > p {
        line-height: 1.7em;
      }
      .wp-block-pullquote {
        margin: 20px 0 30px;
      }
      .wp-block-pullquote.has-background blockquote {
        border-left: none;
      }
      .wp-block-group.has-background {
        padding: 1.5em 1.5em 0.5em;
      }
      @media (min-width: 981px) {
        #left-area {
          width: 79.125%;
          padding-bottom: 23px;
        }
        #main-content .container:before {
          content: "";
          position: absolute;
          top: 0;
          height: 100%;
          width: 1px;
          background-color: #e2e2e2;
        }
        .et_full_width_page #left-area,
        .et_no_sidebar #left-area {
          float: none;
          width: 100% !important;
        }
        .et_full_width_page #left-area {
          padding-bottom: 0;
        }
        .et_no_sidebar #main-content .container:before {
          display: none;
        }
      }
      @media (max-width: 980px) {
        #page-container {
          padding-top: 80px;
        }
        .et-tb #page-container,
        .et-tb-has-header #page-container {
          padding-top: 0 !important;
        }
        #left-area,
        #sidebar {
          width: 100% !important;
        }
        #main-content .container:before {
          display: none !important;
        }
        .et_full_width_page .et_gallery_item:nth-child(4n + 1) {
          clear: none;
        }
      }
      @media print {
        #page-container {
          padding-top: 0 !important;
        }
      }
      #wp-admin-bar-et-use-visual-builder a:before {
        font-family: ETmodules !important;
        content: e625";
        font-size: 30px !important;
        width: 28px;
        margin-top: -3px;
        color: #974df3 !important;
      }
      #wp-admin-bar-et-use-visual-builder:hover a:before {
        color: #fff !important;
      }
      #wp-admin-bar-et-use-visual-builder:hover a,
      #wp-admin-bar-et-use-visual-builder a:hover {
        transition: background-color 0.5s ease;
        -webkit-transition: background-color 0.5s ease;
        -moz-transition: background-color 0.5s ease;
        background-color: #7e3bd0 !important;
        color: #fff !important;
      }
      * html .clearfix,
      :first-child + html .clearfix {
        zoom: 1;
      }
      .iphone
        .et_pb_section_video_bg
        video::-webkit-media-controls-start-playback-button {
        display: none !important;
        -webkit-appearance: none;
      }
      .et_mobile_device .et_pb_section_parallax .et_pb_parallax_css {
        background-attachment: scroll;
      }
      .et-social-facebook a.icon:before {
        content: e093";
      }
      .et-social-twitter a.icon:before {
        content: e094";
      }
      .et-social-google-plus a.icon:before {
        content: e096";
      }
      .et-social-instagram a.icon:before {
        content: e09a";
      }
      .et-social-rss a.icon:before {
        content: e09e";
      }
      .ai1ec-single-event:after {
        content: " ";
        display: table;
        clear: both;
      }
      .evcal_event_details
        .evcal_evdata_cell
        .eventon_details_shading_bot.eventon_details_shading_bot {
        z-index: 3;
      }
      .wp-block-divi-layout {
        margin-bottom: 1em;
      }
      * {
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
      }
      #et-info-email:before,
      #et-info-phone:before,
      #et_search_icon:before,
      .comment-reply-link:after,
      .et-cart-info span:before,
      .et-pb-arrow-next:before,
      .et-pb-arrow-prev:before,
      .et-social-icon a:before,
      .et_audio_container .mejs-playpause-button button:before,
      .et_audio_container .mejs-volume-button button:before,
      .et_overlay:before,
      .et_password_protected_form .et_submit_button:after,
      .et_pb_button:after,
      .et_pb_contact_reset:after,
      .et_pb_contact_submit:after,
      .et_pb_font_icon:before,
      .et_pb_newsletter_button:after,
      .et_pb_pricing_table_button:after,
      .et_pb_promo_button:after,
      .et_pb_testimonial:before,
      .et_pb_toggle_title:before,
      .form-submit .et_pb_button:after,
      .mobile_menu_bar:before,
      a.et_pb_more_button:after {
        font-family: ETmodules !important;
        speak: none;
        font-style: normal;
        font-weight: 400;
        -webkit-font-feature-settings: normal;
        font-feature-settings: normal;
        font-variant: normal;
        text-transform: none;
        line-height: 1;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-shadow: 0 0;
        direction: ltr;
      }
      .et-pb-icon,
      .et_pb_custom_button_icon.et_pb_button:after,
      .et_pb_login .et_pb_custom_button_icon.et_pb_button:after,
      .et_pb_woo_custom_button_icon
        .button.et_pb_custom_button_icon.et_pb_button:after,
      .et_pb_woo_custom_button_icon
        .button.et_pb_custom_button_icon.et_pb_button:hover:after {
        content: attr(data-icon);
      }
      .et-pb-icon {
        font-family: ETmodules;
        speak: none;
        font-weight: 400;
        -webkit-font-feature-settings: normal;
        font-feature-settings: normal;
        font-variant: normal;
        text-transform: none;
        line-height: 1;
        -webkit-font-smoothing: antialiased;
        font-size: 96px;
        font-style: normal;
        display: inline-block;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        direction: ltr;
      }
      #et-ajax-saving {
        display: none;
        -webkit-transition: background 0.3s, -webkit-box-shadow 0.3s;
        transition: background 0.3s, -webkit-box-shadow 0.3s;
        transition: background 0.3s, box-shadow 0.3s;
        transition: background 0.3s, box-shadow 0.3s, -webkit-box-shadow 0.3s;
        -webkit-box-shadow: rgba(0, 139, 219, 0.247059) 0 0 60px;
        box-shadow: 0 0 60px rgba(0, 139, 219, 0.247059);
        position: fixed;
        top: 50%;
        left: 50%;
        width: 50px;
        height: 50px;
        background: #fff;
        border-radius: 50px;
        margin: -25px 0 0 -25px;
        z-index: 999999;
        text-align: center;
      }
      #et-ajax-saving img {
        margin: 9px;
      }
      .et-safe-mode-indicator,
      .et-safe-mode-indicator:focus,
      .et-safe-mode-indicator:hover {
        -webkit-box-shadow: 0 5px 10px rgba(41, 196, 169, 0.15);
        box-shadow: 0 5px 10px rgba(41, 196, 169, 0.15);
        background: #29c4a9;
        color: #fff;
        font-size: 14px;
        font-weight: 600;
        padding: 12px;
        line-height: 16px;
        border-radius: 3px;
        position: fixed;
        bottom: 30px;
        right: 30px;
        z-index: 999999;
        text-decoration: none;
        font-family: Open Sans, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }
      .et_pb_button {
        font-size: 20px;
        font-weight: 500;
        padding: 0.3em 1em;
        line-height: 1.7em !important;
        background-color: transparent;
        background-size: cover;
        background-position: 50%;
        background-repeat: no-repeat;
        border: 2px solid;
        border-radius: 3px;
        -webkit-transition-duration: 0.2s;
        transition-duration: 0.2s;
        -webkit-transition-property: all !important;
        transition-property: all !important;
      }
      .et_pb_button,
      .et_pb_button_inner {
        position: relative;
      }
      .et_pb_button:hover,
      .et_pb_module .et_pb_button:hover {
        border: 2px solid transparent;
        padding: 0.3em 2em 0.3em 0.7em;
      }
      .et_pb_button:hover {
        background-color: hsla(0, 0%, 100%, 0.2);
      }
      .et_pb_bg_layout_light.et_pb_button:hover,
      .et_pb_bg_layout_light .et_pb_button:hover {
        background-color: rgba(0, 0, 0, 0.05);
      }
      .et_pb_button:after,
      .et_pb_button:before {
        font-size: 32px;
        line-height: 1em;
        content: 35";
        opacity: 0;
        position: absolute;
        margin-left: -1em;
        -webkit-transition: all 0.2s;
        transition: all 0.2s;
        text-transform: none;
        -webkit-font-feature-settings: "kern" off;
        font-feature-settings: "kern" off;
        font-variant: none;
        font-style: normal;
        font-weight: 400;
        text-shadow: none;
      }
      .et_pb_button.et_hover_enabled:hover:after,
      .et_pb_button.et_pb_hovered:hover:after {
        -webkit-transition: none !important;
        transition: none !important;
      }
      .et_pb_button:before {
        display: none;
      }
      .et_pb_button:hover:after {
        opacity: 1;
        margin-left: 0;
      }
      .et_pb_column_1_3 h1,
      .et_pb_column_1_4 h1,
      .et_pb_column_1_5 h1,
      .et_pb_column_1_6 h1,
      .et_pb_column_2_5 h1 {
        font-size: 26px;
      }
      .et_pb_column_1_3 h2,
      .et_pb_column_1_4 h2,
      .et_pb_column_1_5 h2,
      .et_pb_column_1_6 h2,
      .et_pb_column_2_5 h2 {
        font-size: 23px;
      }
      .et_pb_column_1_3 h3,
      .et_pb_column_1_4 h3,
      .et_pb_column_1_5 h3,
      .et_pb_column_1_6 h3,
      .et_pb_column_2_5 h3 {
        font-size: 20px;
      }
      .et_pb_column_1_3 h4,
      .et_pb_column_1_4 h4,
      .et_pb_column_1_5 h4,
      .et_pb_column_1_6 h4,
      .et_pb_column_2_5 h4 {
        font-size: 18px;
      }
      .et_pb_column_1_3 h5,
      .et_pb_column_1_4 h5,
      .et_pb_column_1_5 h5,
      .et_pb_column_1_6 h5,
      .et_pb_column_2_5 h5 {
        font-size: 16px;
      }
      .et_pb_column_1_3 h6,
      .et_pb_column_1_4 h6,
      .et_pb_column_1_5 h6,
      .et_pb_column_1_6 h6,
      .et_pb_column_2_5 h6 {
        font-size: 15px;
      }
      .et_pb_bg_layout_dark,
      .et_pb_bg_layout_dark h1,
      .et_pb_bg_layout_dark h2,
      .et_pb_bg_layout_dark h3,
      .et_pb_bg_layout_dark h4,
      .et_pb_bg_layout_dark h5,
      .et_pb_bg_layout_dark h6 {
        color: #fff !important;
      }
      .et_pb_module.et_pb_text_align_left {
        text-align: left;
      }
      .et_pb_module.et_pb_text_align_center {
        text-align: center;
      }
      .et_pb_module.et_pb_text_align_right {
        text-align: right;
      }
      .et_pb_module.et_pb_text_align_justified {
        text-align: justify;
      }
      .clearfix:after {
        visibility: hidden;
        display: block;
        font-size: 0;
        content: " ";
        clear: both;
        height: 0;
      }
      .et_pb_bg_layout_light .et_pb_more_button {
        color: #2ea3f2;
      }
      .et_builder_inner_content {
        position: relative;
        z-index: 1;
      }
      header .et_builder_inner_content {
        z-index: 2;
      }
      .et_pb_css_mix_blend_mode_passthrough {
        mix-blend-mode: unset !important;
      }
      .et_pb_image_container {
        margin: -20px -20px 29px;
      }
      .et_pb_module_inner {
        position: relative;
      }
      .et_hover_enabled_preview {
        z-index: 2;
      }
      .et_hover_enabled:hover {
        position: relative;
        z-index: 2;
      }
      .et_pb_all_tabs,
      .et_pb_module,
      .et_pb_posts_nav a,
      .et_pb_tab,
      .et_pb_with_background {
        position: relative;
        background-size: cover;
        background-position: 50%;
        background-repeat: no-repeat;
      }
      .et_pb_background_mask,
      .et_pb_background_pattern {
        bottom: 0;
        left: 0;
        position: absolute;
        right: 0;
        top: 0;
      }
      .et_pb_background_mask {
        background-size: calc(100% + 2px) calc(100% + 2px);
        background-repeat: no-repeat;
        background-position: 50%;
        overflow: hidden;
      }
      .et_pb_background_pattern {
        background-position: 0 0;
        background-repeat: repeat;
      }
      .et_pb_with_border {
        position: relative;
        border: 0 solid #333;
      }
      .post-password-required .et_pb_row {
        padding: 0;
        width: 100%;
      }
      .post-password-required .et_password_protected_form {
        min-height: 0;
      }
      body.et_pb_pagebuilder_layout.et_pb_show_title
        .post-password-required
        .et_password_protected_form
        h1,
      body:not(.et_pb_pagebuilder_layout)
        .post-password-required
        .et_password_protected_form
        h1 {
        display: none;
      }
      .et_pb_no_bg {
        padding: 0 !important;
      }
      .et_overlay.et_pb_inline_icon:before,
      .et_pb_inline_icon:before {
        content: attr(data-icon);
      }
      .et_pb_more_button {
        color: inherit;
        text-shadow: none;
        text-decoration: none;
        display: inline-block;
        margin-top: 20px;
      }
      .et_parallax_bg_wrap {
        overflow: hidden;
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
      }
      .et_parallax_bg {
        background-repeat: no-repeat;
        background-position: top;
        background-size: cover;
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: block;
      }
      .et_parallax_bg.et_parallax_bg__hover,
      .et_parallax_bg.et_parallax_bg_phone,
      .et_parallax_bg.et_parallax_bg_tablet,
      .et_parallax_gradient.et_parallax_gradient__hover,
      .et_parallax_gradient.et_parallax_gradient_phone,
      .et_parallax_gradient.et_parallax_gradient_tablet,
      .et_pb_section_parallax_hover:hover
        .et_parallax_bg:not(.et_parallax_bg__hover),
      .et_pb_section_parallax_hover:hover
        .et_parallax_gradient:not(.et_parallax_gradient__hover) {
        display: none;
      }
      .et_pb_section_parallax_hover:hover .et_parallax_bg.et_parallax_bg__hover,
      .et_pb_section_parallax_hover:hover
        .et_parallax_gradient.et_parallax_gradient__hover {
        display: block;
      }
      .et_parallax_gradient {
        bottom: 0;
        display: block;
        left: 0;
        position: absolute;
        right: 0;
        top: 0;
      }
      .et_pb_module.et_pb_section_parallax,
      .et_pb_posts_nav a.et_pb_section_parallax,
      .et_pb_tab.et_pb_section_parallax {
        position: relative;
      }
      .et_pb_section_parallax .et_pb_parallax_css,
      .et_pb_slides .et_parallax_bg.et_pb_parallax_css {
        background-attachment: fixed;
      }
      body.et-bfb .et_pb_section_parallax .et_pb_parallax_css,
      body.et-bfb .et_pb_slides .et_parallax_bg.et_pb_parallax_css {
        background-attachment: scroll;
        bottom: auto;
      }
      .et_pb_section_parallax.et_pb_column .et_pb_module,
      .et_pb_section_parallax.et_pb_row .et_pb_column,
      .et_pb_section_parallax.et_pb_row .et_pb_module {
        z-index: 9;
        position: relative;
      }
      .et_pb_more_button:hover:after {
        opacity: 1;
        margin-left: 0;
      }
      .et_pb_preload .et_pb_section_video_bg,
      .et_pb_preload > div {
        visibility: hidden;
      }
      .et_pb_preload,
      .et_pb_section.et_pb_section_video.et_pb_preload {
        position: relative;
        background: #464646 !important;
      }
      .et_pb_preload:before {
        content: "";
        position: absolute;
        top: 50%;
        left: 50%;
        background: url(../../../../wp-content/themes/Divi/includes/builder/styles/images/preloader.gif)
          no-repeat;
        border-radius: 32px;
        width: 32px;
        height: 32px;
        margin: -16px 0 0 -16px;
      }
      .box-shadow-overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 10;
        pointer-events: none;
      }
      .et_pb_section > .box-shadow-overlay ~ .et_pb_row {
        z-index: 11;
      }
      body.safari .section_has_divider {
        will-change: transform;
      }
      .et_pb_row > .box-shadow-overlay {
        z-index: 8;
      }
      .has-box-shadow-overlay {
        position: relative;
      }
      .et_clickable {
        cursor: pointer;
      }
      .screen-reader-text {
        border: 0;
        clip: rect(1px, 1px, 1px, 1px);
        -webkit-clip-path: inset(50%);
        clip-path: inset(50%);
        height: 1px;
        margin: -1px;
        overflow: hidden;
        padding: 0;
        position: absolute !important;
        width: 1px;
        word-wrap: normal !important;
      }
      .et_multi_view_hidden,
      .et_multi_view_hidden_image {
        display: none !important;
      }
      @keyframes multi-view-image-fade {
        0% {
          opacity: 0;
        }
        10% {
          opacity: 0.1;
        }
        20% {
          opacity: 0.2;
        }
        30% {
          opacity: 0.3;
        }
        40% {
          opacity: 0.4;
        }
        50% {
          opacity: 0.5;
        }
        60% {
          opacity: 0.6;
        }
        70% {
          opacity: 0.7;
        }
        80% {
          opacity: 0.8;
        }
        90% {
          opacity: 0.9;
        }
        to {
          opacity: 1;
        }
      }
      .et_multi_view_image__loading {
        visibility: hidden;
      }
      .et_multi_view_image__loaded {
        -webkit-animation: multi-view-image-fade 0.5s;
        animation: multi-view-image-fade 0.5s;
      }
      #et-pb-motion-effects-offset-tracker {
        visibility: hidden !important;
        opacity: 0;
        position: absolute;
        top: 0;
        left: 0;
      }
      .et-pb-before-scroll-animation {
        opacity: 0;
      }
      header.et-l.et-l--header:after {
        clear: both;
        display: block;
        content: "";
      }
      .et_pb_module {
        -webkit-animation-timing-function: linear;
        animation-timing-function: linear;
        -webkit-animation-duration: 0.2s;
        animation-duration: 0.2s;
      }
      @-webkit-keyframes fadeBottom {
        0% {
          opacity: 0;
          -webkit-transform: translateY(10%);
          transform: translateY(10%);
        }
        to {
          opacity: 1;
          -webkit-transform: translateY(0);
          transform: translateY(0);
        }
      }
      @keyframes fadeBottom {
        0% {
          opacity: 0;
          -webkit-transform: translateY(10%);
          transform: translateY(10%);
        }
        to {
          opacity: 1;
          -webkit-transform: translateY(0);
          transform: translateY(0);
        }
      }
      @-webkit-keyframes fadeLeft {
        0% {
          opacity: 0;
          -webkit-transform: translateX(-10%);
          transform: translateX(-10%);
        }
        to {
          opacity: 1;
          -webkit-transform: translateX(0);
          transform: translateX(0);
        }
      }
      @keyframes fadeLeft {
        0% {
          opacity: 0;
          -webkit-transform: translateX(-10%);
          transform: translateX(-10%);
        }
        to {
          opacity: 1;
          -webkit-transform: translateX(0);
          transform: translateX(0);
        }
      }
      @-webkit-keyframes fadeRight {
        0% {
          opacity: 0;
          -webkit-transform: translateX(10%);
          transform: translateX(10%);
        }
        to {
          opacity: 1;
          -webkit-transform: translateX(0);
          transform: translateX(0);
        }
      }
      @keyframes fadeRight {
        0% {
          opacity: 0;
          -webkit-transform: translateX(10%);
          transform: translateX(10%);
        }
        to {
          opacity: 1;
          -webkit-transform: translateX(0);
          transform: translateX(0);
        }
      }
      @-webkit-keyframes fadeTop {
        0% {
          opacity: 0;
          -webkit-transform: translateY(-10%);
          transform: translateY(-10%);
        }
        to {
          opacity: 1;
          -webkit-transform: translateX(0);
          transform: translateX(0);
        }
      }
      @keyframes fadeTop {
        0% {
          opacity: 0;
          -webkit-transform: translateY(-10%);
          transform: translateY(-10%);
        }
        to {
          opacity: 1;
          -webkit-transform: translateX(0);
          transform: translateX(0);
        }
      }
      @-webkit-keyframes fadeIn {
        0% {
          opacity: 0;
        }
        to {
          opacity: 1;
        }
      }
      @keyframes fadeIn {
        0% {
          opacity: 0;
        }
        to {
          opacity: 1;
        }
      }
      .et-waypoint:not(.et_pb_counters) {
        opacity: 0;
      }
      @media (min-width: 981px) {
        .et_pb_section.et_section_specialty
          div.et_pb_row
          .et_pb_column
          .et_pb_column
          .et_pb_module.et-last-child,
        .et_pb_section.et_section_specialty
          div.et_pb_row
          .et_pb_column
          .et_pb_column
          .et_pb_module:last-child,
        .et_pb_section.et_section_specialty
          div.et_pb_row
          .et_pb_column
          .et_pb_row_inner
          .et_pb_column
          .et_pb_module.et-last-child,
        .et_pb_section.et_section_specialty
          div.et_pb_row
          .et_pb_column
          .et_pb_row_inner
          .et_pb_column
          .et_pb_module:last-child,
        .et_pb_section div.et_pb_row .et_pb_column .et_pb_module.et-last-child,
        .et_pb_section div.et_pb_row .et_pb_column .et_pb_module:last-child {
          margin-bottom: 0;
        }
      }
      @media (max-width: 980px) {
        .et_overlay.et_pb_inline_icon_tablet:before,
        .et_pb_inline_icon_tablet:before {
          content: attr(data-icon-tablet);
        }
        .et_parallax_bg.et_parallax_bg_tablet_exist,
        .et_parallax_gradient.et_parallax_gradient_tablet_exist {
          display: none;
        }
        .et_parallax_bg.et_parallax_bg_tablet,
        .et_parallax_gradient.et_parallax_gradient_tablet {
          display: block;
        }
        .et_pb_column .et_pb_module {
          margin-bottom: 30px;
        }
        .et_pb_row .et_pb_column .et_pb_module.et-last-child,
        .et_pb_row .et_pb_column .et_pb_module:last-child,
        .et_section_specialty
          .et_pb_row
          .et_pb_column
          .et_pb_module.et-last-child,
        .et_section_specialty
          .et_pb_row
          .et_pb_column
          .et_pb_module:last-child {
          margin-bottom: 0;
        }
        .et_pb_more_button {
          display: inline-block !important;
        }
        .et_pb_bg_layout_light_tablet.et_pb_button,
        .et_pb_bg_layout_light_tablet.et_pb_module.et_pb_button,
        .et_pb_bg_layout_light_tablet .et_pb_more_button {
          color: #2ea3f2;
        }
        .et_pb_bg_layout_light_tablet .et_pb_forgot_password a {
          color: #666;
        }
        .et_pb_bg_layout_light_tablet h1,
        .et_pb_bg_layout_light_tablet h2,
        .et_pb_bg_layout_light_tablet h3,
        .et_pb_bg_layout_light_tablet h4,
        .et_pb_bg_layout_light_tablet h5,
        .et_pb_bg_layout_light_tablet h6 {
          color: #333 !important;
        }
        .et_pb_module .et_pb_bg_layout_light_tablet.et_pb_button {
          color: #2ea3f2 !important;
        }
        .et_pb_bg_layout_light_tablet {
          color: #666 !important;
        }
        .et_pb_bg_layout_dark_tablet,
        .et_pb_bg_layout_dark_tablet h1,
        .et_pb_bg_layout_dark_tablet h2,
        .et_pb_bg_layout_dark_tablet h3,
        .et_pb_bg_layout_dark_tablet h4,
        .et_pb_bg_layout_dark_tablet h5,
        .et_pb_bg_layout_dark_tablet h6 {
          color: #fff !important;
        }
        .et_pb_bg_layout_dark_tablet.et_pb_button,
        .et_pb_bg_layout_dark_tablet.et_pb_module.et_pb_button,
        .et_pb_bg_layout_dark_tablet .et_pb_more_button {
          color: inherit;
        }
        .et_pb_bg_layout_dark_tablet .et_pb_forgot_password a {
          color: #fff;
        }
        .et_pb_module.et_pb_text_align_left-tablet {
          text-align: left;
        }
        .et_pb_module.et_pb_text_align_center-tablet {
          text-align: center;
        }
        .et_pb_module.et_pb_text_align_right-tablet {
          text-align: right;
        }
        .et_pb_module.et_pb_text_align_justified-tablet {
          text-align: justify;
        }
      }
      @media (max-width: 767px) {
        .et_pb_more_button {
          display: inline-block !important;
        }
        .et_overlay.et_pb_inline_icon_phone:before,
        .et_pb_inline_icon_phone:before {
          content: attr(data-icon-phone);
        }
        .et_parallax_bg.et_parallax_bg_phone_exist,
        .et_parallax_gradient.et_parallax_gradient_phone_exist {
          display: none;
        }
        .et_parallax_bg.et_parallax_bg_phone,
        .et_parallax_gradient.et_parallax_gradient_phone {
          display: block;
        }
        .et-hide-mobile {
          display: none !important;
        }
        .et_pb_bg_layout_light_phone.et_pb_button,
        .et_pb_bg_layout_light_phone.et_pb_module.et_pb_button,
        .et_pb_bg_layout_light_phone .et_pb_more_button {
          color: #2ea3f2;
        }
        .et_pb_bg_layout_light_phone .et_pb_forgot_password a {
          color: #666;
        }
        .et_pb_bg_layout_light_phone h1,
        .et_pb_bg_layout_light_phone h2,
        .et_pb_bg_layout_light_phone h3,
        .et_pb_bg_layout_light_phone h4,
        .et_pb_bg_layout_light_phone h5,
        .et_pb_bg_layout_light_phone h6 {
          color: #333 !important;
        }
        .et_pb_module .et_pb_bg_layout_light_phone.et_pb_button {
          color: #2ea3f2 !important;
        }
        .et_pb_bg_layout_light_phone {
          color: #666 !important;
        }
        .et_pb_bg_layout_dark_phone,
        .et_pb_bg_layout_dark_phone h1,
        .et_pb_bg_layout_dark_phone h2,
        .et_pb_bg_layout_dark_phone h3,
        .et_pb_bg_layout_dark_phone h4,
        .et_pb_bg_layout_dark_phone h5,
        .et_pb_bg_layout_dark_phone h6 {
          color: #fff !important;
        }
        .et_pb_bg_layout_dark_phone.et_pb_button,
        .et_pb_bg_layout_dark_phone.et_pb_module.et_pb_button,
        .et_pb_bg_layout_dark_phone .et_pb_more_button {
          color: inherit;
        }
        .et_pb_module .et_pb_bg_layout_dark_phone.et_pb_button {
          color: #fff !important;
        }
        .et_pb_bg_layout_dark_phone .et_pb_forgot_password a {
          color: #fff;
        }
        .et_pb_module.et_pb_text_align_left-phone {
          text-align: left;
        }
        .et_pb_module.et_pb_text_align_center-phone {
          text-align: center;
        }
        .et_pb_module.et_pb_text_align_right-phone {
          text-align: right;
        }
        .et_pb_module.et_pb_text_align_justified-phone {
          text-align: justify;
        }
      }
      @media (max-width: 479px) {
        a.et_pb_more_button {
          display: block;
        }
      }
      @media (min-width: 768px) and (max-width: 980px) {
        [data-et-multi-view-load-tablet-hidden="true"]:not(
            .et_multi_view_swapped
          ) {
          display: none !important;
        }
      }
      @media (max-width: 767px) {
        [data-et-multi-view-load-phone-hidden="true"]:not(
            .et_multi_view_swapped
          ) {
          display: none !important;
        }
      }
      .et_pb_menu.et_pb_menu--style-inline_centered_logo
        .et_pb_menu__menu
        nav
        ul {
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
      }
      @-webkit-keyframes multi-view-image-fade {
        0% {
          -webkit-transform: scale(1);
          transform: scale(1);
          opacity: 1;
        }
        50% {
          -webkit-transform: scale(1.01);
          transform: scale(1.01);
          opacity: 1;
        }
        to {
          -webkit-transform: scale(1);
          transform: scale(1);
          opacity: 1;
        }
      }
    </style>
    <style id="divi-dynamic-critical-inline-css" type="text/css">
      @font-face {
        font-family: ETmodules;
        font-display: block;
        src: url(../../../../wp-content/themes/Divi/core/admin/fonts/modules/all/modules.eot);
        src: url(//diegoduranblog.wpcomstaging.com/wp-content/themes/Divi/core/admin/fonts/modules/all/modules.eot?#iefix)
            format("embedded-opentype"),
          url(//diegoduranblog.wpcomstaging.com/wp-content/themes/Divi/core/admin/fonts/modules/all/modules.woff)
            format("woff"),
          url(//diegoduranblog.wpcomstaging.com/wp-content/themes/Divi/core/admin/fonts/modules/all/modules.ttf)
            format("truetype"),
          url(//diegoduranblog.wpcomstaging.com/wp-content/themes/Divi/core/admin/fonts/modules/all/modules.svg#ETmodules)
            format("svg");
        font-weight: 400;
        font-style: normal;
      }
      .et_pb_post {
        margin-bottom: 60px;
        word-wrap: break-word;
      }
      .et_pb_fullwidth_post_content.et_pb_with_border img,
      .et_pb_post_content.et_pb_with_border img,
      .et_pb_with_border .et_pb_post .et_pb_slides,
      .et_pb_with_border .et_pb_post img:not(.woocommerce-placeholder),
      .et_pb_with_border.et_pb_posts .et_pb_post,
      .et_pb_with_border.et_pb_posts_nav span.nav-next a,
      .et_pb_with_border.et_pb_posts_nav span.nav-previous a {
        border: 0 solid #333;
      }
      .et_pb_post .entry-content {
        padding-top: 30px;
      }
      .et_pb_post .entry-featured-image-url {
        display: block;
        position: relative;
        margin-bottom: 30px;
      }
      .et_pb_post .entry-title a,
      .et_pb_post h2 a {
        text-decoration: none;
      }
      .et_pb_post .post-meta {
        font-size: 14px;
        margin-bottom: 6px;
      }
      .et_pb_post .more,
      .et_pb_post .post-meta a {
        text-decoration: none;
      }
      .et_pb_post .more {
        color: #82c0c7;
      }
      .et_pb_posts a.more-link {
        clear: both;
        display: block;
      }
      .et_pb_posts .et_pb_post {
        position: relative;
      }
      .et_pb_has_overlay.et_pb_post .et_pb_image_container a {
        display: block;
        position: relative;
        overflow: hidden;
      }
      .et_pb_image_container img,
      .et_pb_post a img {
        vertical-align: bottom;
        max-width: 100%;
      }
      @media (min-width: 981px) and (max-width: 1100px) {
        .et_pb_post {
          margin-bottom: 42px;
        }
      }
      @media (max-width: 980px) {
        .et_pb_post {
          margin-bottom: 42px;
        }
        .et_pb_bg_layout_light_tablet .et_pb_post .post-meta,
        .et_pb_bg_layout_light_tablet .et_pb_post .post-meta a,
        .et_pb_bg_layout_light_tablet .et_pb_post p {
          color: #666;
        }
        .et_pb_bg_layout_dark_tablet .et_pb_post .post-meta,
        .et_pb_bg_layout_dark_tablet .et_pb_post .post-meta a,
        .et_pb_bg_layout_dark_tablet .et_pb_post p {
          color: inherit;
        }
        .et_pb_bg_layout_dark_tablet .comment_postinfo a,
        .et_pb_bg_layout_dark_tablet .comment_postinfo span {
          color: #fff;
        }
      }
      @media (max-width: 767px) {
        .et_pb_post {
          margin-bottom: 42px;
        }
        .et_pb_post > h2 {
          font-size: 18px;
        }
        .et_pb_bg_layout_light_phone .et_pb_post .post-meta,
        .et_pb_bg_layout_light_phone .et_pb_post .post-meta a,
        .et_pb_bg_layout_light_phone .et_pb_post p {
          color: #666;
        }
        .et_pb_bg_layout_dark_phone .et_pb_post .post-meta,
        .et_pb_bg_layout_dark_phone .et_pb_post .post-meta a,
        .et_pb_bg_layout_dark_phone .et_pb_post p {
          color: inherit;
        }
        .et_pb_bg_layout_dark_phone .comment_postinfo a,
        .et_pb_bg_layout_dark_phone .comment_postinfo span {
          color: #fff;
        }
      }
      @media (max-width: 479px) {
        .et_pb_post {
          margin-bottom: 42px;
        }
        .et_pb_post h2 {
          font-size: 16px;
          padding-bottom: 0;
        }
        .et_pb_post .post-meta {
          color: #666;
          font-size: 14px;
        }
      }
      @media (min-width: 981px) {
        .et_pb_gutters3 .et_pb_column,
        .et_pb_gutters3.et_pb_row .et_pb_column {
          margin-right: 5.5%;
        }
        .et_pb_gutters3 .et_pb_column_4_4,
        .et_pb_gutters3.et_pb_row .et_pb_column_4_4 {
          width: 100%;
        }
        .et_pb_gutters3 .et_pb_column_4_4 .et_pb_module,
        .et_pb_gutters3.et_pb_row .et_pb_column_4_4 .et_pb_module {
          margin-bottom: 2.75%;
        }
        .et_pb_gutters3 .et_pb_column_3_4,
        .et_pb_gutters3.et_pb_row .et_pb_column_3_4 {
          width: 73.625%;
        }
        .et_pb_gutters3 .et_pb_column_3_4 .et_pb_module,
        .et_pb_gutters3.et_pb_row .et_pb_column_3_4 .et_pb_module {
          margin-bottom: 3.735%;
        }
        .et_pb_gutters3 .et_pb_column_2_3,
        .et_pb_gutters3.et_pb_row .et_pb_column_2_3 {
          width: 64.833%;
        }
        .et_pb_gutters3 .et_pb_column_2_3 .et_pb_module,
        .et_pb_gutters3.et_pb_row .et_pb_column_2_3 .et_pb_module {
          margin-bottom: 4.242%;
        }
        .et_pb_gutters3 .et_pb_column_3_5,
        .et_pb_gutters3.et_pb_row .et_pb_column_3_5 {
          width: 57.8%;
        }
        .et_pb_gutters3 .et_pb_column_3_5 .et_pb_module,
        .et_pb_gutters3.et_pb_row .et_pb_column_3_5 .et_pb_module {
          margin-bottom: 4.758%;
        }
        .et_pb_gutters3 .et_pb_column_1_2,
        .et_pb_gutters3.et_pb_row .et_pb_column_1_2 {
          width: 47.25%;
        }
        .et_pb_gutters3 .et_pb_column_1_2 .et_pb_module,
        .et_pb_gutters3.et_pb_row .et_pb_column_1_2 .et_pb_module {
          margin-bottom: 5.82%;
        }
        .et_pb_gutters3 .et_pb_column_2_5,
        .et_pb_gutters3.et_pb_row .et_pb_column_2_5 {
          width: 36.7%;
        }
        .et_pb_gutters3 .et_pb_column_2_5 .et_pb_module,
        .et_pb_gutters3.et_pb_row .et_pb_column_2_5 .et_pb_module {
          margin-bottom: 7.493%;
        }
        .et_pb_gutters3 .et_pb_column_1_3,
        .et_pb_gutters3.et_pb_row .et_pb_column_1_3 {
          width: 29.6667%;
        }
        .et_pb_gutters3 .et_pb_column_1_3 .et_pb_module,
        .et_pb_gutters3.et_pb_row .et_pb_column_1_3 .et_pb_module {
          margin-bottom: 9.27%;
        }
        .et_pb_gutters3 .et_pb_column_1_4,
        .et_pb_gutters3.et_pb_row .et_pb_column_1_4 {
          width: 20.875%;
        }
        .et_pb_gutters3 .et_pb_column_1_4 .et_pb_module,
        .et_pb_gutters3.et_pb_row .et_pb_column_1_4 .et_pb_module {
          margin-bottom: 13.174%;
        }
        .et_pb_gutters3 .et_pb_column_1_5,
        .et_pb_gutters3.et_pb_row .et_pb_column_1_5 {
          width: 15.6%;
        }
        .et_pb_gutters3 .et_pb_column_1_5 .et_pb_module,
        .et_pb_gutters3.et_pb_row .et_pb_column_1_5 .et_pb_module {
          margin-bottom: 17.628%;
        }
        .et_pb_gutters3 .et_pb_column_1_6,
        .et_pb_gutters3.et_pb_row .et_pb_column_1_6 {
          width: 12.0833%;
        }
        .et_pb_gutters3 .et_pb_column_1_6 .et_pb_module,
        .et_pb_gutters3.et_pb_row .et_pb_column_1_6 .et_pb_module {
          margin-bottom: 22.759%;
        }
        .et_pb_gutters3
          .et_full_width_page.woocommerce-page
          ul.products
          li.product {
          width: 20.875%;
          margin-right: 5.5%;
          margin-bottom: 5.5%;
        }
        .et_pb_gutters3.et_left_sidebar.woocommerce-page
          #main-content
          ul.products
          li.product,
        .et_pb_gutters3.et_right_sidebar.woocommerce-page
          #main-content
          ul.products
          li.product {
          width: 28.353%;
          margin-right: 7.47%;
        }
        .et_pb_gutters3.et_left_sidebar.woocommerce-page
          #main-content
          ul.products.columns-1
          li.product,
        .et_pb_gutters3.et_right_sidebar.woocommerce-page
          #main-content
          ul.products.columns-1
          li.product {
          width: 100%;
          margin-right: 0;
        }
        .et_pb_gutters3.et_left_sidebar.woocommerce-page
          #main-content
          ul.products.columns-2
          li.product,
        .et_pb_gutters3.et_right_sidebar.woocommerce-page
          #main-content
          ul.products.columns-2
          li.product {
          width: 48%;
          margin-right: 4%;
        }
        .et_pb_gutters3.et_left_sidebar.woocommerce-page
          #main-content
          ul.products.columns-2
          li:nth-child(2n + 2),
        .et_pb_gutters3.et_right_sidebar.woocommerce-page
          #main-content
          ul.products.columns-2
          li:nth-child(2n + 2) {
          margin-right: 0;
        }
        .et_pb_gutters3.et_left_sidebar.woocommerce-page
          #main-content
          ul.products.columns-2
          li:nth-child(3n + 1),
        .et_pb_gutters3.et_right_sidebar.woocommerce-page
          #main-content
          ul.products.columns-2
          li:nth-child(3n + 1) {
          clear: none;
        }
      }
      #et-secondary-menu li,
      #top-menu li {
        word-wrap: break-word;
      }
      .nav li ul,
      .et_mobile_menu {
        border-color: #2ea3f2;
      }
      .mobile_menu_bar:before,
      .mobile_menu_bar:after,
      #top-menu li.current-menu-ancestor > a,
      #top-menu li.current-menu-item > a {
        color: #2ea3f2;
      }
      #main-header {
        -webkit-transition: background-color 0.4s, color 0.4s,
          opacity 0.4s ease-in-out, -webkit-transform 0.4s;
        transition: background-color 0.4s, color 0.4s, opacity 0.4s ease-in-out,
          -webkit-transform 0.4s;
        transition: background-color 0.4s, color 0.4s, transform 0.4s,
          opacity 0.4s ease-in-out;
        transition: background-color 0.4s, color 0.4s, transform 0.4s,
          opacity 0.4s ease-in-out, -webkit-transform 0.4s;
      }
      #main-header.et-disabled-animations * {
        -webkit-transition-duration: 0s !important;
        transition-duration: 0s !important;
      }
      .container {
        text-align: left;
        position: relative;
      }
      .et_fixed_nav.et_show_nav #page-container {
        padding-top: 80px;
      }
      .et_fixed_nav.et_show_nav.et-tb #page-container,
      .et_fixed_nav.et_show_nav.et-tb-has-header #page-container {
        padding-top: 0 !important;
      }
      .et_fixed_nav.et_show_nav.et_secondary_nav_enabled #page-container {
        padding-top: 111px;
      }
      .et_fixed_nav.et_show_nav.et_secondary_nav_enabled.et_header_style_centered
        #page-container {
        padding-top: 177px;
      }
      .et_fixed_nav.et_show_nav.et_header_style_centered #page-container {
        padding-top: 147px;
      }
      .et_fixed_nav #main-header {
        position: fixed;
      }
      .et-cloud-item-editor #page-container {
        padding-top: 0 !important;
      }
      .et_header_style_left #et-top-navigation {
        padding-top: 33px;
      }
      .et_header_style_left #et-top-navigation nav > ul > li > a {
        padding-bottom: 33px;
      }
      .et_header_style_left .logo_container {
        position: absolute;
        height: 100%;
        width: 100%;
      }
      .et_header_style_left #et-top-navigation .mobile_menu_bar {
        padding-bottom: 24px;
      }
      .et_hide_search_icon #et_top_search {
        display: none !important;
      }
      #logo {
        width: auto;
        -webkit-transition: all 0.4s ease-in-out;
        transition: all 0.4s ease-in-out;
        margin-bottom: 0;
        max-height: 54%;
        display: inline-block;
        float: none;
        vertical-align: middle;
        -webkit-transform: translate3d(0, 0, 0);
      }
      .et_pb_svg_logo #logo {
        height: 54%;
      }
      .logo_container {
        -webkit-transition: all 0.4s ease-in-out;
        transition: all 0.4s ease-in-out;
      }
      span.logo_helper {
        display: inline-block;
        height: 100%;
        vertical-align: middle;
        width: 0;
      }
      .safari .centered-inline-logo-wrap {
        -webkit-transform: translate3d(0, 0, 0);
        -webkit-transition: all 0.4s ease-in-out;
        transition: all 0.4s ease-in-out;
      }
      #et-define-logo-wrap img {
        width: 100%;
      }
      .gecko #et-define-logo-wrap.svg-logo {
        position: relative !important;
      }
      #top-menu-nav,
      #top-menu {
        line-height: 0;
      }
      #et-top-navigation {
        font-weight: 600;
      }
      .et_fixed_nav #et-top-navigation {
        -webkit-transition: all 0.4s ease-in-out;
        transition: all 0.4s ease-in-out;
      }
      .et-cart-info span:before {
        content: e07a";
        margin-right: 10px;
        position: relative;
      }
      nav#top-menu-nav,
      #top-menu,
      nav.et-menu-nav,
      .et-menu {
        float: left;
      }
      #top-menu li {
        display: inline-block;
        font-size: 14px;
        padding-right: 22px;
      }
      #top-menu > li:last-child {
        padding-right: 0;
      }
      .et_fullwidth_nav.et_non_fixed_nav.et_header_style_left
        #top-menu
        > li:last-child
        > ul.sub-menu {
        right: 0;
      }
      #top-menu a {
        color: rgba(0, 0, 0, 0.6);
        text-decoration: none;
        display: block;
        position: relative;
        -webkit-transition: opacity 0.4s ease-in-out,
          background-color 0.4s ease-in-out;
        transition: opacity 0.4s ease-in-out, background-color 0.4s ease-in-out;
      }
      #top-menu-nav > ul > li > a:hover {
        opacity: 0.7;
        -webkit-transition: all 0.4s ease-in-out;
        transition: all 0.4s ease-in-out;
      }
      #et_search_icon:before {
        content: 55";
        font-size: 17px;
        left: 0;
        position: absolute;
        top: -3px;
      }
      #et_search_icon:hover {
        cursor: pointer;
      }
      #et_top_search {
        float: right;
        margin: 3px 0 0 22px;
        position: relative;
        display: block;
        width: 18px;
      }
      #et_top_search.et_search_opened {
        position: absolute;
        width: 100%;
      }
      .et-search-form {
        top: 0;
        bottom: 0;
        right: 0;
        position: absolute;
        z-index: 1000;
        width: 100%;
      }
      .et-search-form input {
        width: 90%;
        border: none;
        color: #333;
        position: absolute;
        top: 0;
        bottom: 0;
        right: 30px;
        margin: auto;
        background: transparent;
      }
      .et-search-form .et-search-field::-ms-clear {
        width: 0;
        height: 0;
        display: none;
      }
      .et_search_form_container {
        -webkit-animation: none;
        animation: none;
        -o-animation: none;
      }
      .container.et_search_form_container {
        position: relative;
        opacity: 0;
        height: 1px;
      }
      .container.et_search_form_container.et_pb_search_visible {
        z-index: 999;
        -webkit-animation: fadeInTop 1s 1 cubic-bezier(0.77, 0, 0.175, 1);
        animation: fadeInTop 1s 1 cubic-bezier(0.77, 0, 0.175, 1);
      }
      .et_pb_search_visible.et_pb_no_animation {
        opacity: 1;
      }
      .et_pb_search_form_hidden {
        -webkit-animation: fadeOutTop 1s 1 cubic-bezier(0.77, 0, 0.175, 1);
        animation: fadeOutTop 1s 1 cubic-bezier(0.77, 0, 0.175, 1);
      }
      span.et_close_search_field {
        display: block;
        width: 30px;
        height: 30px;
        z-index: 99999;
        position: absolute;
        right: 0;
        cursor: pointer;
        top: 0;
        bottom: 0;
        margin: auto;
      }
      span.et_close_search_field:after {
        font-family: "ETmodules";
        content: 4d";
        speak: none;
        font-weight: normal;
        font-variant: normal;
        text-transform: none;
        line-height: 1;
        -webkit-font-smoothing: antialiased;
        font-size: 32px;
        display: inline-block;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
      }
      .container.et_menu_container {
        z-index: 99;
      }
      .container.et_search_form_container.et_pb_search_form_hidden {
        z-index: 1 !important;
      }
      .et_search_outer {
        width: 100%;
        overflow: hidden;
        position: absolute;
        top: 0;
      }
      .container.et_pb_menu_hidden {
        z-index: -1;
      }
      form.et-search-form {
        background: rgba(0, 0, 0, 0) !important;
      }
      input[type="search"]::-webkit-search-cancel-button {
        -webkit-appearance: none;
      }
      .et-cart-info {
        color: inherit;
      }
      #et-top-navigation .et-cart-info {
        float: left;
        margin: -2px 0 0 22px;
        font-size: 16px;
      }
      #et-top-navigation {
        float: right;
      }
      #top-menu li li {
        padding: 0 20px;
        margin: 0;
      }
      #top-menu li li a {
        padding: 6px 20px;
        width: 200px;
      }
      .nav li.et-touch-hover > ul {
        opacity: 1;
        visibility: visible;
      }
      #top-menu .menu-item-has-children > a:first-child:after,
      #et-secondary-nav .menu-item-has-children > a:first-child:after {
        font-family: "ETmodules";
        content: "3";
        font-size: 16px;
        position: absolute;
        right: 0;
        top: 0;
        font-weight: 800;
      }
      #top-menu .menu-item-has-children > a:first-child,
      #et-secondary-nav .menu-item-has-children > a:first-child {
        padding-right: 20px;
      }
      #top-menu li .menu-item-has-children > a:first-child {
        padding-right: 40px;
      }
      #top-menu li .menu-item-has-children > a:first-child:after {
        right: 20px;
        top: 6px;
      }
      #top-menu li.mega-menu {
        position: inherit;
      }
      #top-menu li.mega-menu > ul {
        padding: 30px 20px;
        position: absolute !important;
        width: 100%;
        left: 0 !important;
      }
      #top-menu li.mega-menu ul li {
        margin: 0;
        float: left !important;
        display: block !important;
        padding: 0 !important;
      }
      #top-menu li.mega-menu > ul > li:nth-of-type(4n) {
        clear: right;
      }
      #top-menu li.mega-menu > ul > li:nth-of-type(4n + 1) {
        clear: left;
      }
      #top-menu li.mega-menu ul li li {
        width: 100%;
      }
      #top-menu li.mega-menu li > ul {
        -webkit-animation: none !important;
        animation: none !important;
        padding: 0px;
        border: none;
        left: auto;
        top: auto;
        width: 90% !important;
        position: relative;
        -webkit-box-shadow: none;
        box-shadow: none;
      }
      #top-menu li.mega-menu li ul {
        visibility: visible;
        opacity: 1;
        display: none;
      }
      #top-menu li.mega-menu.et-hover li ul {
        display: block;
      }
      #top-menu li.mega-menu.et-hover > ul {
        opacity: 1 !important;
        visibility: visible !important;
      }
      #top-menu li.mega-menu > ul > li > a {
        width: 90%;
        padding: 0 20px 10px;
      }
      #top-menu li.mega-menu > ul > li > a:first-child {
        padding-top: 0 !important;
        font-weight: bold;
        border-bottom: 1px solid rgba(0, 0, 0, 0.03);
      }
      #top-menu li.mega-menu > ul > li > a:first-child:hover {
        background-color: transparent !important;
      }
      #top-menu li.mega-menu li > a {
        width: 100%;
      }
      #top-menu li.mega-menu.mega-menu-parent li li,
      #top-menu li.mega-menu.mega-menu-parent li > a {
        width: 100% !important;
      }
      #top-menu li.mega-menu.mega-menu-parent li > .sub-menu {
        float: left;
        width: 100% !important;
      }
      #top-menu li.mega-menu > ul > li {
        width: 25%;
        margin: 0;
      }
      #top-menu li.mega-menu.mega-menu-parent-3 > ul > li {
        width: 33.33%;
      }
      #top-menu li.mega-menu.mega-menu-parent-2 > ul > li {
        width: 50%;
      }
      #top-menu li.mega-menu.mega-menu-parent-1 > ul > li {
        width: 100%;
      }
      #top-menu li.mega-menu .menu-item-has-children > a:first-child:after {
        display: none;
      }
      #top-menu li.mega-menu > ul > li > ul > li {
        width: 100%;
        margin: 0;
      }
      #et_mobile_nav_menu {
        float: right;
        display: none;
      }
      .mobile_menu_bar {
        position: relative;
        display: block;
        line-height: 0;
      }
      .mobile_menu_bar:before,
      .et_toggle_slide_menu:after {
        content: 61";
        font-size: 32px;
        left: 0;
        position: relative;
        top: 0;
        cursor: pointer;
      }
      .mobile_nav .select_page {
        display: none;
      }
      .et_pb_menu_hidden #top-menu,
      .et_pb_menu_hidden #et_search_icon:before,
      .et_pb_menu_hidden .et-cart-info {
        opacity: 0;
        -webkit-animation: fadeOutBottom 1s 1 cubic-bezier(0.77, 0, 0.175, 1);
        animation: fadeOutBottom 1s 1 cubic-bezier(0.77, 0, 0.175, 1);
      }
      .et_pb_menu_visible #top-menu,
      .et_pb_menu_visible #et_search_icon:before,
      .et_pb_menu_visible .et-cart-info {
        z-index: 99;
        opacity: 1;
        -webkit-animation: fadeInBottom 1s 1 cubic-bezier(0.77, 0, 0.175, 1);
        animation: fadeInBottom 1s 1 cubic-bezier(0.77, 0, 0.175, 1);
      }
      .et_pb_menu_hidden #top-menu,
      .et_pb_menu_hidden #et_search_icon:before,
      .et_pb_menu_hidden .mobile_menu_bar {
        opacity: 0;
        -webkit-animation: fadeOutBottom 1s 1 cubic-bezier(0.77, 0, 0.175, 1);
        animation: fadeOutBottom 1s 1 cubic-bezier(0.77, 0, 0.175, 1);
      }
      .et_pb_menu_visible #top-menu,
      .et_pb_menu_visible #et_search_icon:before,
      .et_pb_menu_visible .mobile_menu_bar {
        z-index: 99;
        opacity: 1;
        -webkit-animation: fadeInBottom 1s 1 cubic-bezier(0.77, 0, 0.175, 1);
        animation: fadeInBottom 1s 1 cubic-bezier(0.77, 0, 0.175, 1);
      }
      .et_pb_no_animation #top-menu,
      .et_pb_no_animation #et_search_icon:before,
      .et_pb_no_animation .mobile_menu_bar,
      .et_pb_no_animation.et_search_form_container {
        animation: none !important;
        -o-animation: none !important;
        -webkit-animation: none !important;
        -moz-animation: none !important;
      }
      body.admin-bar.et_fixed_nav #main-header {
        top: 32px;
      }
      body.et-wp-pre-3_8.admin-bar.et_fixed_nav #main-header {
        top: 28px;
      }
      body.et_fixed_nav.et_secondary_nav_enabled #main-header {
        top: 30px;
      }
      body.admin-bar.et_fixed_nav.et_secondary_nav_enabled #main-header {
        top: 63px;
      }
      @media all and (min-width: 981px) {
        .et_hide_primary_logo
          #main-header:not(.et-fixed-header)
          .logo_container,
        .et_hide_fixed_logo #main-header.et-fixed-header .logo_container {
          height: 0;
          opacity: 0;
          -webkit-transition: all 0.4s ease-in-out;
          transition: all 0.4s ease-in-out;
        }
        .et_hide_primary_logo
          #main-header:not(.et-fixed-header)
          .centered-inline-logo-wrap,
        .et_hide_fixed_logo
          #main-header.et-fixed-header
          .centered-inline-logo-wrap {
          height: 0;
          opacity: 0;
          padding: 0;
        }
        .et-animated-content#page-container {
          -webkit-transition: margin-top 0.4s ease-in-out;
          transition: margin-top 0.4s ease-in-out;
        }
        .et_hide_nav #page-container {
          -webkit-transition: none;
          transition: none;
        }
        .et_fullwidth_nav .et-search-form,
        .et_fullwidth_nav .et_close_search_field {
          right: 30px;
        }
        #main-header.et-fixed-header {
          -webkit-box-shadow: 0 0 7px rgba(0, 0, 0, 0.1) !important;
          box-shadow: 0 0 7px rgba(0, 0, 0, 0.1) !important;
        }
        .et_header_style_left .et-fixed-header #et-top-navigation {
          padding-top: 20px;
        }
        .et_header_style_left
          .et-fixed-header
          #et-top-navigation
          nav
          > ul
          > li
          > a {
          padding-bottom: 20px;
        }
        .et_hide_nav.et_fixed_nav #main-header {
          opacity: 0;
        }
        .et_hide_nav.et_fixed_nav .et-fixed-header#main-header {
          -webkit-transform: translateY(0px) !important;
          transform: translateY(0px) !important;
          opacity: 1;
        }
        .et_hide_nav .centered-inline-logo-wrap,
        .et_hide_nav.et_fixed_nav #main-header,
        .et_hide_nav.et_fixed_nav #main-header,
        .et_hide_nav .centered-inline-logo-wrap {
          -webkit-transition-duration: 0.7s;
          transition-duration: 0.7s;
        }
        .et_hide_nav #page-container {
          padding-top: 0 !important;
        }
        .et_primary_nav_dropdown_animation_fade
          #et-top-navigation
          ul
          li:hover
          > ul,
        .et_secondary_nav_dropdown_animation_fade
          #et-secondary-nav
          li:hover
          > ul {
          -webkit-transition: all 0.2s ease-in-out;
          transition: all 0.2s ease-in-out;
        }
        .et_primary_nav_dropdown_animation_slide
          #et-top-navigation
          ul
          li:hover
          > ul,
        .et_secondary_nav_dropdown_animation_slide
          #et-secondary-nav
          li:hover
          > ul {
          -webkit-animation: fadeLeft 0.4s ease-in-out;
          animation: fadeLeft 0.4s ease-in-out;
        }
        .et_primary_nav_dropdown_animation_expand
          #et-top-navigation
          ul
          li:hover
          > ul,
        .et_secondary_nav_dropdown_animation_expand
          #et-secondary-nav
          li:hover
          > ul {
          -webkit-transform-origin: 0 0;
          transform-origin: 0 0;
          -webkit-animation: Grow 0.4s ease-in-out;
          animation: Grow 0.4s ease-in-out;
          -webkit-backface-visibility: visible !important;
          backface-visibility: visible !important;
        }
        .et_primary_nav_dropdown_animation_flip
          #et-top-navigation
          ul
          li
          ul
          li:hover
          > ul,
        .et_secondary_nav_dropdown_animation_flip
          #et-secondary-nav
          ul
          li:hover
          > ul {
          -webkit-animation: flipInX 0.6s ease-in-out;
          animation: flipInX 0.6s ease-in-out;
          -webkit-backface-visibility: visible !important;
          backface-visibility: visible !important;
        }
        .et_primary_nav_dropdown_animation_flip
          #et-top-navigation
          ul
          li:hover
          > ul,
        .et_secondary_nav_dropdown_animation_flip
          #et-secondary-nav
          li:hover
          > ul {
          -webkit-animation: flipInY 0.6s ease-in-out;
          animation: flipInY 0.6s ease-in-out;
          -webkit-backface-visibility: visible !important;
          backface-visibility: visible !important;
        }
        .et_fullwidth_nav #main-header .container {
          width: 100%;
          max-width: 100%;
          padding-right: 32px;
          padding-left: 30px;
        }
        .et_non_fixed_nav.et_fullwidth_nav.et_header_style_left
          #main-header
          .container {
          padding-left: 0;
        }
        .et_non_fixed_nav.et_fullwidth_nav.et_header_style_left
          .logo_container {
          padding-left: 30px;
        }
      }
      @media all and (max-width: 980px) {
        .et_fixed_nav.et_show_nav.et_secondary_nav_enabled #page-container,
        .et_fixed_nav.et_show_nav #page-container {
          padding-top: 80px;
        }
        .et_fixed_nav.et_show_nav.et-tb #page-container,
        .et_fixed_nav.et_show_nav.et-tb-has-header #page-container {
          padding-top: 0 !important;
        }
        .et_non_fixed_nav #page-container {
          padding-top: 0;
        }
        .et_fixed_nav.et_secondary_nav_only_menu.admin-bar #main-header {
          top: 32px !important;
        }
        .et_hide_mobile_logo #main-header .logo_container {
          display: none;
          opacity: 0;
          -webkit-transition: all 0.4s ease-in-out;
          transition: all 0.4s ease-in-out;
        }
        #top-menu {
          display: none;
        }
        .et_hide_nav.et_fixed_nav #main-header {
          -webkit-transform: translateY(0px) !important;
          transform: translateY(0px) !important;
          opacity: 1;
        }
        #et-top-navigation {
          margin-right: 0;
          -webkit-transition: none;
          transition: none;
        }
        .et_fixed_nav #main-header {
          position: absolute;
        }
        .et_header_style_left .et-fixed-header #et-top-navigation,
        .et_header_style_left #et-top-navigation {
          padding-top: 24px;
          display: block;
        }
        .et_fixed_nav #main-header {
          -webkit-transition: none;
          transition: none;
        }
        .et_fixed_nav_temp #main-header {
          top: 0 !important;
        }
        #logo,
        .logo_container,
        #main-header,
        .container {
          -webkit-transition: none;
          transition: none;
        }
        .et_header_style_left #logo {
          max-width: 50%;
        }
        #et_top_search {
          margin: 0 35px 0 0;
          float: left;
        }
        #et_search_icon:before {
          top: 7px;
        }
        .et_header_style_left .et-search-form {
          width: 50% !important;
          max-width: 50% !important;
        }
        #et_mobile_nav_menu {
          display: block;
        }
        #et-top-navigation .et-cart-info {
          margin-top: 5px;
        }
      }
      @media screen and (max-width: 782px) {
        body.admin-bar.et_fixed_nav #main-header {
          top: 46px;
        }
      }
      @media all and (max-width: 767px) {
        #et-top-navigation {
          margin-right: 0;
        }
        body.admin-bar.et_fixed_nav #main-header {
          top: 46px;
        }
      }
      @media all and (max-width: 479px) {
        #et-top-navigation {
          margin-right: 0;
        }
      }
      @media print {
        #top-header,
        #main-header {
          position: relative !important;
          top: auto !important;
          right: auto !important;
          bottom: auto !important;
          left: auto !important;
        }
      }
      @-webkit-keyframes fadeOutTop {
        0% {
          opacity: 1;
          -webkit-transform: translatey(0);
          transform: translatey(0);
        }
        to {
          opacity: 0;
          -webkit-transform: translatey(-60%);
          transform: translatey(-60%);
        }
      }
      @keyframes fadeOutTop {
        0% {
          opacity: 1;
          -webkit-transform: translatey(0);
          transform: translatey(0);
        }
        to {
          opacity: 0;
          -webkit-transform: translatey(-60%);
          transform: translatey(-60%);
        }
      }
      @-webkit-keyframes fadeInTop {
        0% {
          opacity: 0;
          -webkit-transform: translatey(-60%);
          transform: translatey(-60%);
        }
        to {
          opacity: 1;
          -webkit-transform: translatey(0);
          transform: translatey(0);
        }
      }
      @keyframes fadeInTop {
        0% {
          opacity: 0;
          -webkit-transform: translatey(-60%);
          transform: translatey(-60%);
        }
        to {
          opacity: 1;
          -webkit-transform: translatey(0);
          transform: translatey(0);
        }
      }
      @-webkit-keyframes fadeInBottom {
        0% {
          opacity: 0;
          -webkit-transform: translatey(60%);
          transform: translatey(60%);
        }
        to {
          opacity: 1;
          -webkit-transform: translatey(0);
          transform: translatey(0);
        }
      }
      @keyframes fadeInBottom {
        0% {
          opacity: 0;
          -webkit-transform: translatey(60%);
          transform: translatey(60%);
        }
        to {
          opacity: 1;
          -webkit-transform: translatey(0);
          transform: translatey(0);
        }
      }
      @-webkit-keyframes fadeOutBottom {
        0% {
          opacity: 1;
          -webkit-transform: translatey(0);
          transform: translatey(0);
        }
        to {
          opacity: 0;
          -webkit-transform: translatey(60%);
          transform: translatey(60%);
        }
      }
      @keyframes fadeOutBottom {
        0% {
          opacity: 1;
          -webkit-transform: translatey(0);
          transform: translatey(0);
        }
        to {
          opacity: 0;
          -webkit-transform: translatey(60%);
          transform: translatey(60%);
        }
      }
      @-webkit-keyframes Grow {
        0% {
          opacity: 0;
          -webkit-transform: scaleY(0.5);
          transform: scaleY(0.5);
        }
        to {
          opacity: 1;
          -webkit-transform: scale(1);
          transform: scale(1);
        }
      }
      @keyframes Grow {
        0% {
          opacity: 0;
          -webkit-transform: scaleY(0.5);
          transform: scaleY(0.5);
        }
        to {
          opacity: 1;
          -webkit-transform: scale(1);
          transform: scale(1);
        }
      } /*!
	  * Animate.css - http://daneden.me/animate
	  * Licensed under the MIT license - http://opensource.org/licenses/MIT
	  * Copyright (c) 2015 Daniel Eden
	 */
      @-webkit-keyframes flipInX {
        0% {
          -webkit-transform: perspective(400px) rotateX(90deg);
          transform: perspective(400px) rotateX(90deg);
          -webkit-animation-timing-function: ease-in;
          animation-timing-function: ease-in;
          opacity: 0;
        }
        40% {
          -webkit-transform: perspective(400px) rotateX(-20deg);
          transform: perspective(400px) rotateX(-20deg);
          -webkit-animation-timing-function: ease-in;
          animation-timing-function: ease-in;
        }
        60% {
          -webkit-transform: perspective(400px) rotateX(10deg);
          transform: perspective(400px) rotateX(10deg);
          opacity: 1;
        }
        80% {
          -webkit-transform: perspective(400px) rotateX(-5deg);
          transform: perspective(400px) rotateX(-5deg);
        }
        to {
          -webkit-transform: perspective(400px);
          transform: perspective(400px);
        }
      }
      @keyframes flipInX {
        0% {
          -webkit-transform: perspective(400px) rotateX(90deg);
          transform: perspective(400px) rotateX(90deg);
          -webkit-animation-timing-function: ease-in;
          animation-timing-function: ease-in;
          opacity: 0;
        }
        40% {
          -webkit-transform: perspective(400px) rotateX(-20deg);
          transform: perspective(400px) rotateX(-20deg);
          -webkit-animation-timing-function: ease-in;
          animation-timing-function: ease-in;
        }
        60% {
          -webkit-transform: perspective(400px) rotateX(10deg);
          transform: perspective(400px) rotateX(10deg);
          opacity: 1;
        }
        80% {
          -webkit-transform: perspective(400px) rotateX(-5deg);
          transform: perspective(400px) rotateX(-5deg);
        }
        to {
          -webkit-transform: perspective(400px);
          transform: perspective(400px);
        }
      }
      @-webkit-keyframes flipInY {
        0% {
          -webkit-transform: perspective(400px) rotateY(90deg);
          transform: perspective(400px) rotateY(90deg);
          -webkit-animation-timing-function: ease-in;
          animation-timing-function: ease-in;
          opacity: 0;
        }
        40% {
          -webkit-transform: perspective(400px) rotateY(-20deg);
          transform: perspective(400px) rotateY(-20deg);
          -webkit-animation-timing-function: ease-in;
          animation-timing-function: ease-in;
        }
        60% {
          -webkit-transform: perspective(400px) rotateY(10deg);
          transform: perspective(400px) rotateY(10deg);
          opacity: 1;
        }
        80% {
          -webkit-transform: perspective(400px) rotateY(-5deg);
          transform: perspective(400px) rotateY(-5deg);
        }
        to {
          -webkit-transform: perspective(400px);
          transform: perspective(400px);
        }
      }
      @keyframes flipInY {
        0% {
          -webkit-transform: perspective(400px) rotateY(90deg);
          transform: perspective(400px) rotateY(90deg);
          -webkit-animation-timing-function: ease-in;
          animation-timing-function: ease-in;
          opacity: 0;
        }
        40% {
          -webkit-transform: perspective(400px) rotateY(-20deg);
          transform: perspective(400px) rotateY(-20deg);
          -webkit-animation-timing-function: ease-in;
          animation-timing-function: ease-in;
        }
        60% {
          -webkit-transform: perspective(400px) rotateY(10deg);
          transform: perspective(400px) rotateY(10deg);
          opacity: 1;
        }
        80% {
          -webkit-transform: perspective(400px) rotateY(-5deg);
          transform: perspective(400px) rotateY(-5deg);
        }
        to {
          -webkit-transform: perspective(400px);
          transform: perspective(400px);
        }
      }
      #main-header {
        line-height: 23px;
        font-weight: 500;
        top: 0;
        background-color: #fff;
        width: 100%;
        -webkit-box-shadow: 0 1px 0 rgba(0, 0, 0, 0.1);
        box-shadow: 0 1px 0 rgba(0, 0, 0, 0.1);
        position: relative;
        z-index: 99999;
      }
      .nav li li {
        padding: 0 20px;
        margin: 0;
      }
      .et-menu li li a {
        padding: 6px 20px;
        width: 200px;
      }
      .nav li {
        position: relative;
        line-height: 1em;
      }
      .nav li li {
        position: relative;
        line-height: 2em;
      }
      .nav li ul {
        position: absolute;
        padding: 20px 0;
        z-index: 9999;
        width: 240px;
        background: #fff;
        visibility: hidden;
        opacity: 0;
        border-top: 3px solid #2ea3f2;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        -moz-box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        -webkit-box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        -webkit-transform: translateZ(0);
        text-align: left;
      }
      .nav li.et-hover > ul {
        visibility: visible;
      }
      .nav li.et-touch-hover > ul,
      .nav li:hover > ul {
        opacity: 1;
        visibility: visible;
      }
      .nav li li ul {
        z-index: 1000;
        top: -23px;
        left: 240px;
      }
      .nav li.et-reverse-direction-nav li ul {
        left: auto;
        right: 240px;
      }
      .nav li:hover {
        visibility: inherit;
      }
      .et_mobile_menu li a,
      .nav li li a {
        font-size: 14px;
        -webkit-transition: opacity 0.2s ease-in-out,
          background-color 0.2s ease-in-out;
        transition: opacity 0.2s ease-in-out, background-color 0.2s ease-in-out;
      }
      .et_mobile_menu li a:hover,
      .nav ul li a:hover {
        background-color: rgba(0, 0, 0, 0.03);
        opacity: 0.7;
      }
      .et-dropdown-removing > ul {
        display: none;
      }
      .mega-menu .et-dropdown-removing > ul {
        display: block;
      }
      .et-menu .menu-item-has-children > a:first-child:after {
        font-family: ETmodules;
        content: "3";
        font-size: 16px;
        position: absolute;
        right: 0;
        top: 0;
        font-weight: 800;
      }
      .et-menu .menu-item-has-children > a:first-child {
        padding-right: 20px;
      }
      .et-menu li li.menu-item-has-children > a:first-child:after {
        right: 20px;
        top: 6px;
      }
      .et-menu-nav li.mega-menu {
        position: inherit;
      }
      .et-menu-nav li.mega-menu > ul {
        padding: 30px 20px;
        position: absolute !important;
        width: 100%;
        left: 0 !important;
      }
      .et-menu-nav li.mega-menu ul li {
        margin: 0;
        float: left !important;
        display: block !important;
        padding: 0 !important;
      }
      .et-menu-nav li.mega-menu li > ul {
        -webkit-animation: none !important;
        animation: none !important;
        padding: 0;
        border: none;
        left: auto;
        top: auto;
        width: 240px !important;
        position: relative;
        box-shadow: none;
        -webkit-box-shadow: none;
      }
      .et-menu-nav li.mega-menu li ul {
        visibility: visible;
        opacity: 1;
        display: none;
      }
      .et-menu-nav li.mega-menu.et-hover li ul,
      .et-menu-nav li.mega-menu:hover li ul {
        display: block;
      }
      .et-menu-nav li.mega-menu:hover > ul {
        opacity: 1 !important;
        visibility: visible !important;
      }
      .et-menu-nav li.mega-menu > ul > li > a:first-child {
        padding-top: 0 !important;
        font-weight: 700;
        border-bottom: 1px solid rgba(0, 0, 0, 0.03);
      }
      .et-menu-nav li.mega-menu > ul > li > a:first-child:hover {
        background-color: transparent !important;
      }
      .et-menu-nav li.mega-menu li > a {
        width: 200px !important;
      }
      .et-menu-nav li.mega-menu.mega-menu-parent li > a,
      .et-menu-nav li.mega-menu.mega-menu-parent li li {
        width: 100% !important;
      }
      .et-menu-nav li.mega-menu.mega-menu-parent li > .sub-menu {
        float: left;
        width: 100% !important;
      }
      .et-menu-nav li.mega-menu > ul > li {
        width: 25%;
        margin: 0;
      }
      .et-menu-nav li.mega-menu.mega-menu-parent-3 > ul > li {
        width: 33.33%;
      }
      .et-menu-nav li.mega-menu.mega-menu-parent-2 > ul > li {
        width: 50%;
      }
      .et-menu-nav li.mega-menu.mega-menu-parent-1 > ul > li {
        width: 100%;
      }
      .et_pb_fullwidth_menu
        li.mega-menu
        .menu-item-has-children
        > a:first-child:after,
      .et_pb_menu li.mega-menu .menu-item-has-children > a:first-child:after {
        display: none;
      }
      .et_fullwidth_nav #top-menu li.mega-menu > ul {
        width: auto;
        left: 30px !important;
        right: 30px !important;
      }
      .et_mobile_menu {
        position: absolute;
        left: 0;
        padding: 5%;
        background: #fff;
        width: 100%;
        visibility: visible;
        opacity: 1;
        display: none;
        z-index: 9999;
        border-top: 3px solid #2ea3f2;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        -moz-box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        -webkit-box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
      }
      #main-header .et_mobile_menu li ul,
      .et_pb_fullwidth_menu .et_mobile_menu li ul,
      .et_pb_menu .et_mobile_menu li ul {
        visibility: visible !important;
        display: block !important;
        padding-left: 10px;
      }
      .et_mobile_menu li li {
        padding-left: 5%;
      }
      .et_mobile_menu li a {
        border-bottom: 1px solid rgba(0, 0, 0, 0.03);
        color: #666;
        padding: 10px 5%;
        display: block;
      }
      .et_mobile_menu .menu-item-has-children > a {
        font-weight: 700;
        background-color: rgba(0, 0, 0, 0.03);
      }
      .et_mobile_menu li .menu-item-has-children > a {
        background-color: transparent;
      }
      .et_mobile_nav_menu {
        float: right;
        display: none;
      }
      .mobile_menu_bar {
        position: relative;
        display: block;
        line-height: 0;
      }
      .mobile_menu_bar:before {
        content: "a";
        font-size: 32px;
        position: relative;
        left: 0;
        top: 0;
        cursor: pointer;
      }
      .et_pb_module .mobile_menu_bar:before {
        top: 2px;
      }
      .mobile_nav .select_page {
        display: none;
      }
      #et-secondary-menu li {
        word-wrap: break-word;
      }
      #top-header,
      #et-secondary-nav li ul {
        background-color: #2ea3f2;
      }
      #top-header {
        font-size: 12px;
        line-height: 13px;
        z-index: 100000;
        color: #ffffff;
      }
      #top-header a,
      #top-header a {
        color: #ffffff;
      }
      #top-header,
      #et-secondary-nav {
        -webkit-transition: background-color 0.4s, opacity 0.4s ease-in-out,
          -webkit-transform 0.4s;
        transition: background-color 0.4s, opacity 0.4s ease-in-out,
          -webkit-transform 0.4s;
        transition: background-color 0.4s, transform 0.4s,
          opacity 0.4s ease-in-out;
        transition: background-color 0.4s, transform 0.4s,
          opacity 0.4s ease-in-out, -webkit-transform 0.4s;
      }
      #top-header .container {
        padding-top: 0.75em;
        font-weight: 600;
      }
      #top-header,
      #top-header .container,
      #top-header #et-info,
      #top-header .et-social-icon a {
        line-height: 1em;
      }
      .et_fixed_nav #top-header {
        top: 0;
        left: 0;
        right: 0;
        position: fixed;
      }
      #et-info {
        float: left;
      }
      #et-info-phone,
      #et-info-email {
        position: relative;
      }
      #et-info-phone:before {
        content: e090";
        position: relative;
        top: 2px;
        margin-right: 2px;
      }
      #et-info-phone {
        margin-right: 13px;
      }
      #et-info-email:before {
        content: e076";
        margin-right: 4px;
      }
      #top-header .et-social-icons {
        float: none;
        display: inline-block;
      }
      #et-secondary-menu .et-social-icons {
        margin-right: 20px;
      }
      #top-header .et-social-icons li {
        margin-left: 12px;
        margin-top: -2px;
      }
      #top-header .et-social-icon a {
        font-size: 14px;
      }
      #et-secondary-menu {
        float: right;
      }
      #et-info,
      #et-secondary-menu > ul > li a {
        padding-bottom: 0.75em;
        display: block;
      }
      #et-secondary-nav,
      #et-secondary-nav li {
        display: inline-block;
      }
      #et-secondary-nav a {
        -webkit-transition: background-color 0.4s, color 0.4s ease-in-out;
        transition: background-color 0.4s, color 0.4s ease-in-out;
      }
      #et-secondary-nav li {
        margin-right: 15px;
      }
      #et-secondary-nav > li:last-child {
        margin-right: 0;
      }
      #et-secondary-menu > ul > li > a:hover,
      #et-info-email:hover {
        opacity: 0.7;
        -webkit-transition: all 0.4s ease-in-out;
        transition: all 0.4s ease-in-out;
      }
      #et-secondary-nav li {
        position: relative;
        text-align: right;
      }
      #et-secondary-nav li ul {
        position: absolute;
        right: 0;
        padding: 1em 0;
      }
      #et-secondary-nav li ul ul {
        right: 220px;
        top: 0;
        margin-top: -1em;
      }
      #et-secondary-nav li ul li {
        display: block;
      }
      #et-secondary-nav li ul {
        z-index: 999999;
        visibility: hidden;
        opacity: 0;
        -webkit-box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
      }
      #et-secondary-nav li ul {
        -webkit-transform: translate3d(0, 0, 0);
      }
      #et-secondary-nav li.et-hover > ul {
        visibility: visible;
      }
      #et-secondary-nav li > ul {
        width: 220px;
      }
      #et-secondary-nav li:hover > ul,
      #et-secondary-nav li.et-touch-hover > ul {
        opacity: 1;
        visibility: visible;
      }
      #et-secondary-nav li li {
        padding: 0 2em;
        margin: 0;
      }
      #et-secondary-nav li li a {
        padding: 1em;
        width: 100%;
        font-size: 12px;
        line-height: 1em;
        margin-right: 0;
        display: block;
        -webkit-transition: all 0.2s ease-in-out;
        transition: all 0.2s ease-in-out;
      }
      #et-secondary-nav ul li a:hover {
        background-color: rgba(0, 0, 0, 0.03);
      }
      #et-secondary-nav li:hover {
        visibility: inherit;
      }
      #top-header .et-cart-info {
        margin-left: 15px;
      }
      #et-secondary-nav .menu-item-has-children > a:first-child:after {
        top: 0;
      }
      #et-secondary-nav li .menu-item-has-children > a:first-child:after {
        top: 0.67em;
        right: auto;
        left: 2.3em;
      }
      body.admin-bar.et_fixed_nav #top-header {
        top: 32px;
      }
      body.et-wp-pre-3_8.admin-bar.et_fixed_nav #top-header {
        top: 28px;
      }
      @media all and (min-width: 981px) {
        .et_fullwidth_secondary_nav #top-header .container {
          width: 100%;
          max-width: 100%;
          padding-right: 30px;
          padding-left: 30px;
        }
        .et_hide_nav.et_fixed_nav #top-header {
          opacity: 0;
        }
        .et_hide_nav.et_fixed_nav .et-fixed-header#top-header {
          -webkit-transform: translateY(0px) !important;
          transform: translateY(0px) !important;
          opacity: 1;
        }
        .et_hide_nav.et_fixed_nav #top-header,
        .et_hide_nav.et_fixed_nav #top-header {
          -webkit-transition-duration: 0.7s;
          transition-duration: 0.7s;
        }
      }
      @media all and (max-width: 980px) {
        .et_fixed_nav.et_show_nav.et_secondary_nav_enabled.et-tb
          #page-container,
        .et_fixed_nav.et_show_nav.et_secondary_nav_enabled.et-tb-has-header
          #page-container {
          padding-top: 0 !important;
        }
        .et_secondary_nav_only_menu #top-header {
          display: none;
        }
        #top-header {
          -webkit-transition: none;
          transition: none;
        }
        .et_fixed_nav #top-header {
          position: absolute;
        }
        .et_hide_nav.et_fixed_nav #top-header {
          -webkit-transform: translateY(0px) !important;
          transform: translateY(0px) !important;
          opacity: 1;
        }
        #top-header .container {
          padding-top: 0;
        }
        #et-info {
          padding-top: 0.75em;
        }
        #et-secondary-nav,
        #et-secondary-menu {
          display: none !important;
        }
        .et_secondary_nav_only_menu #main-header,
        .et_secondary_nav_only_menu #main-header {
          top: 0 !important;
        }
        #top-header .et-social-icons {
          margin-bottom: 0;
        }
        #top-header .et-cart-info {
          margin-left: 0;
        }
      }
      @media screen and (max-width: 782px) {
        body.admin-bar.et_fixed_nav #top-header {
          top: 46px;
        }
        .et_fixed_nav.et_secondary_nav_only_menu.admin-bar #main-header {
          top: 46px !important;
        }
        body.admin-bar.et_fixed_nav.et_secondary_nav_enabled #main-header {
          top: 80px;
        }
      }
      @media all and (max-width: 767px) {
        #et-info .et-social-icons {
          display: none;
        }
        #et-secondary-menu .et_duplicate_social_icons {
          display: inline-block;
        }
        body.et_fixed_nav.et_secondary_nav_two_panels #main-header {
          top: 58px;
        }
        #et-info,
        #et-secondary-menu {
          text-align: center;
          display: block;
          float: none;
        }
        .et_secondary_nav_two_panels #et-secondary-menu {
          margin-top: 12px;
        }
        body.admin-bar.et_fixed_nav #top-header {
          top: 46px;
        }
        body.admin-bar.et_fixed_nav.et_secondary_nav_two_panels #main-header {
          top: 104px;
        }
      }
      .et-social-icons {
        float: right;
      }
      .et-social-icons li {
        display: inline-block;
        margin-left: 20px;
      }
      .et-social-icon a {
        display: inline-block;
        font-size: 24px;
        position: relative;
        text-align: center;
        -webkit-transition: color 300ms ease 0s;
        transition: color 300ms ease 0s;
        color: #666;
        text-decoration: none;
      }
      .et-social-icons a:hover {
        opacity: 0.7;
        -webkit-transition: all 0.4s ease-in-out;
        transition: all 0.4s ease-in-out;
      }
      .et-social-icon span {
        display: none;
      }
      .et_duplicate_social_icons {
        display: none;
      }
      @media all and (max-width: 980px) {
        .et-social-icons {
          float: none;
          text-align: center;
        }
      }
      @media all and (max-width: 980px) {
        .et-social-icons {
          margin: 0 0 5px;
        }
      }
      .et_pb_pagebuilder_layout.single.et_full_width_page:not(.et-tb-has-body)
        #main-content
        .container {
        width: 100%;
        max-width: 100%;
        padding-top: 0;
      }
      .et_pb_pagebuilder_layout.single.et_full_width_page:not(.et-tb-has-body)
        .et_post_meta_wrapper {
        width: 80%;
        max-width: 1080px;
        margin: auto;
        padding-top: 6%;
      }
      .et_pb_pagebuilder_layout.single.et_full_width_page:not(.et-tb-has-body)
        .et_post_meta_wrapper:last-of-type {
        padding-top: 0;
      }
      .et_pb_pagebuilder_layout.single-post:not(.et-tb-has-body)
        #main-content
        .et_pb_row {
        width: 100%;
      }
      .et_pb_pagebuilder_layout.single-post:not(.et-tb-has-body)
        #main-content
        .et_pb_with_background
        .et_pb_row {
        width: 80%;
      }
      .et_pb_pagebuilder_layout.single.et_full_width_page:not(.et-tb-has-body)
        #main-content
        .et_pb_row {
        width: 80%;
      }
      .et_pb_pagebuilder_layout .entry-content,
      .et_pb_pagebuilder_layout .et_pb_post .entry-content {
        margin-bottom: 0 !important;
        padding-top: 0;
      }
      .single-project.et_pb_pagebuilder_layout .nav-single {
        width: 80%;
        max-width: 1080px;
        margin: 10px auto;
      }
      #sidebar {
        padding-bottom: 28px;
      }
      #sidebar .et_pb_widget {
        margin-bottom: 30px;
        width: 100%;
        float: none;
      }
      .et_right_sidebar
        #main-content
        .et_pb_column_2_3
        .et_pb_countdown_timer
        .section
        p.value,
      .et_right_sidebar
        #main-content
        .et_pb_column_2_3
        .et_pb_countdown_timer
        .section.sep,
      .et_left_sidebar
        #main-content
        .et_pb_column_2_3
        .et_pb_countdown_timer
        .section
        p.value,
      .et_left_sidebar
        #main-content
        .et_pb_column_2_3
        .et_pb_countdown_timer
        .section.sep {
        font-size: 44px;
        line-height: 44px;
      }
      .et_right_sidebar
        #main-content
        .et_pb_column_1_2
        .et_pb_countdown_timer
        .section
        p.value,
      .et_right_sidebar
        #main-content
        .et_pb_column_1_2
        .et_pb_countdown_timer
        .section.sep,
      .et_left_sidebar
        #main-content
        .et_pb_column_1_2
        .et_pb_countdown_timer
        .section
        p.value,
      .et_left_sidebar
        #main-content
        .et_pb_column_1_2
        .et_pb_countdown_timer
        .section.sep {
        font-size: 32px;
        line-height: 32px;
      }
      .et_right_sidebar
        #main-content
        .et_pb_column_3_8
        .et_pb_countdown_timer
        .section
        p.value,
      .et_right_sidebar
        #main-content
        .et_pb_column_3_8
        .et_pb_countdown_timer
        .section.sep,
      .et_left_sidebar
        #main-content
        .et_pb_column_3_8
        .et_pb_countdown_timer
        .section
        p.value,
      .et_left_sidebar
        #main-content
        .et_pb_column_3_8
        .et_pb_countdown_timer
        .section.sep {
        font-size: 24px;
        line-height: 24px;
      }
      .et_right_sidebar
        #main-content
        .et_pb_column_1_3
        .et_pb_countdown_timer
        .section
        p.value,
      .et_right_sidebar
        #main-content
        .et_pb_column_1_3
        .et_pb_countdown_timer
        .section.sep,
      .et_left_sidebar
        #main-content
        .et_pb_column_1_3
        .et_pb_countdown_timer
        .section
        p.value,
      .et_left_sidebar
        #main-content
        .et_pb_column_1_3
        .et_pb_countdown_timer
        .section.sep {
        font-size: 20px;
        line-height: 20px;
      }
      .et_right_sidebar
        #main-content
        .et_pb_column_1_4
        .et_pb_countdown_timer
        .section
        p.value,
      .et_right_sidebar
        #main-content
        .et_pb_column_1_4
        .et_pb_countdown_timer
        .section.sep,
      .et_left_sidebar
        #main-content
        .et_pb_column_1_4
        .et_pb_countdown_timer
        .section
        p.value,
      .et_left_sidebar
        #main-content
        .et_pb_column_1_4
        .et_pb_countdown_timer
        .section.sep {
        font-size: 16px;
        line-height: 16px;
      }
      @media all and (min-width: 981px) and (max-width: 1100px) {
        #sidebar .et_pb_widget {
          margin-left: 0;
        }
        .et_left_sidebar #sidebar .et_pb_widget {
          margin-right: 0;
        }
      }
      @media all and (min-width: 981px) {
        #sidebar {
          float: left;
          width: 20.875%;
        }
        .et_right_sidebar #left-area {
          float: left;
          padding-right: 5.5%;
        }
        .et_right_sidebar #sidebar {
          padding-left: 30px;
        }
        .et_right_sidebar #main-content .container:before {
          right: 20.875% !important;
        }
        .et_left_sidebar #left-area {
          float: right;
          padding-left: 5.5%;
        }
        .et_left_sidebar #sidebar {
          padding-right: 30px;
        }
        .et_left_sidebar #main-content .container:before {
          left: 20.875% !important;
        }
      }
      @media all and (max-width: 980px) {
        .et_right_sidebar #left-area,
        .et_right_sidebar #sidebar,
        .et_left_sidebar #left-area,
        .et_left_sidebar #sidebar {
          width: auto;
          float: none;
          padding-right: 0;
          padding-left: 0;
        }
        .et_right_sidebar #left-area {
          margin-right: 0;
        }
        .et_right_sidebar #sidebar {
          margin-left: 0;
          border-left: none;
        }
        .et_left_sidebar #left-area {
          margin-left: 0;
        }
        .et_left_sidebar #sidebar {
          margin-right: 0;
          border-right: none;
        }
      }
      .et_pb_widget {
        float: left;
        max-width: 100%;
        word-wrap: break-word;
      }
      .et_pb_widget a {
        text-decoration: none;
        color: #666;
      }
      .et_pb_widget li a:hover {
        color: #82c0c7;
      }
      .et_pb_widget ol li,
      .et_pb_widget ul li {
        margin-bottom: 0.5em;
      }
      .et_pb_widget ol li ol li,
      .et_pb_widget ul li ul li {
        margin-left: 15px;
      }
      .et_pb_widget select {
        width: 100%;
        height: 28px;
        padding: 0 5px;
      }
      .et_pb_widget_area .et_pb_widget a {
        color: inherit;
      }
      .et_pb_bg_layout_light .et_pb_widget li a {
        color: #666;
      }
      .et_pb_bg_layout_dark .et_pb_widget li a {
        color: inherit;
      }
      .et_pb_scroll_top.et-pb-icon {
        text-align: center;
        background: rgba(0, 0, 0, 0.4);
        text-decoration: none;
        position: fixed;
        z-index: 99999;
        bottom: 125px;
        right: 0px;
        -webkit-border-top-left-radius: 5px;
        -webkit-border-bottom-left-radius: 5px;
        -moz-border-radius-topleft: 5px;
        -moz-border-radius-bottomleft: 5px;
        border-top-left-radius: 5px;
        border-bottom-left-radius: 5px;
        display: none;
        cursor: pointer;
        font-size: 30px;
        padding: 5px;
        color: #fff;
      }
      .et_pb_scroll_top:before {
        content: "2";
      }
      .et_pb_scroll_top.et-visible {
        opacity: 1;
        -webkit-animation: fadeInRight 1s 1 cubic-bezier(0.77, 0, 0.175, 1);
        animation: fadeInRight 1s 1 cubic-bezier(0.77, 0, 0.175, 1);
      }
      .et_pb_scroll_top.et-hidden {
        opacity: 0;
        -webkit-animation: fadeOutRight 1s 1 cubic-bezier(0.77, 0, 0.175, 1);
        animation: fadeOutRight 1s 1 cubic-bezier(0.77, 0, 0.175, 1);
      }
      @-webkit-keyframes fadeOutRight {
        0% {
          opacity: 1;
          -webkit-transform: translateX(0);
          transform: translateX(0);
        }
        100% {
          opacity: 0;
          -webkit-transform: translateX(100%);
          transform: translateX(100%);
        }
      }
      @keyframes fadeOutRight {
        0% {
          opacity: 1;
          -webkit-transform: translateX(0);
          transform: translateX(0);
        }
        100% {
          opacity: 0;
          -webkit-transform: translateX(100%);
          transform: translateX(100%);
        }
      }
      @-webkit-keyframes fadeInRight {
        0% {
          opacity: 0;
          -webkit-transform: translateX(100%);
          transform: translateX(100%);
        }
        100% {
          opacity: 1;
          -webkit-transform: translateX(0);
          transform: translateX(0);
        }
      }
      @keyframes fadeInRight {
        0% {
          opacity: 0;
          -webkit-transform: translateX(100%);
          transform: translateX(100%);
        }
        100% {
          opacity: 1;
          -webkit-transform: translateX(0);
          transform: translateX(0);
        }
      }
      .et_pb_section {
        position: relative;
        background-color: #fff;
        background-position: 50%;
        background-size: 100%;
        background-size: cover;
      }
      .et_pb_section--absolute,
      .et_pb_section--fixed {
        width: 100%;
      }
      .et_pb_section.et_section_transparent {
        background-color: transparent;
      }
      .et_pb_fullwidth_section {
        padding: 0;
      }
      .et_pb_fullwidth_section
        > .et_pb_module:not(.et_pb_post_content):not(
          .et_pb_fullwidth_post_content
        )
        .et_pb_row {
        padding: 0 !important;
      }
      .et_pb_inner_shadow {
        -webkit-box-shadow: inset 0 0 7px rgba(0, 0, 0, 0.07);
        box-shadow: inset 0 0 7px rgba(0, 0, 0, 0.07);
      }
      .et_pb_bottom_inside_divider,
      .et_pb_top_inside_divider {
        display: block;
        background-repeat-y: no-repeat;
        height: 100%;
        position: absolute;
        pointer-events: none;
        width: 100%;
        left: 0;
        right: 0;
      }
      .et_pb_bottom_inside_divider.et-no-transition,
      .et_pb_top_inside_divider.et-no-transition {
        -webkit-transition: none !important;
        transition: none !important;
      }
      .et-fb
        .section_has_divider.et_fb_element_controls_visible--child
        > .et_pb_bottom_inside_divider,
      .et-fb
        .section_has_divider.et_fb_element_controls_visible--child
        > .et_pb_top_inside_divider {
        z-index: 1;
      }
      .et_pb_section_video:not(.et_pb_section--with-menu) {
        overflow: hidden;
        position: relative;
      }
      .et_pb_column > .et_pb_section_video_bg {
        z-index: -1;
      }
      .et_pb_section_video_bg {
        visibility: visible;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        overflow: hidden;
        display: block;
        pointer-events: none;
        -webkit-transition: display 0.3s;
        transition: display 0.3s;
      }
      .et_pb_section_video_bg.et_pb_section_video_bg_hover,
      .et_pb_section_video_bg.et_pb_section_video_bg_phone,
      .et_pb_section_video_bg.et_pb_section_video_bg_tablet,
      .et_pb_section_video_bg.et_pb_section_video_bg_tablet_only {
        display: none;
      }
      .et_pb_section_video_bg .mejs-controls,
      .et_pb_section_video_bg .mejs-overlay-play {
        display: none !important;
      }
      .et_pb_section_video_bg embed,
      .et_pb_section_video_bg iframe,
      .et_pb_section_video_bg object,
      .et_pb_section_video_bg video {
        max-width: none;
      }
      .et_pb_section_video_bg .mejs-video {
        left: 50%;
        position: absolute;
        max-width: none;
      }
      .et_pb_section_video_bg .mejs-overlay-loading {
        display: none !important;
      }
      .et_pb_social_network_link .et_pb_section_video {
        overflow: visible;
      }
      .et_pb_section_video_on_hover:hover > .et_pb_section_video_bg {
        display: none;
      }
      .et_pb_section_video_on_hover:hover > .et_pb_section_video_bg_hover,
      .et_pb_section_video_on_hover:hover
        > .et_pb_section_video_bg_hover_inherit {
        display: block;
      }
      @media (min-width: 981px) {
        .et_pb_section {
          padding: 4% 0;
        }
        body.et_pb_pagebuilder_layout.et_pb_show_title
          .post-password-required
          .et_pb_section,
        body:not(.et_pb_pagebuilder_layout)
          .post-password-required
          .et_pb_section {
          padding-top: 0;
        }
        .et_pb_fullwidth_section {
          padding: 0;
        }
        .et_pb_section_video_bg.et_pb_section_video_bg_desktop_only {
          display: block;
        }
      }
      @media (max-width: 980px) {
        .et_pb_section {
          padding: 50px 0;
        }
        body.et_pb_pagebuilder_layout.et_pb_show_title
          .post-password-required
          .et_pb_section,
        body:not(.et_pb_pagebuilder_layout)
          .post-password-required
          .et_pb_section {
          padding-top: 0;
        }
        .et_pb_fullwidth_section {
          padding: 0;
        }
        .et_pb_section_video_bg.et_pb_section_video_bg_tablet {
          display: block;
        }
        .et_pb_section_video_bg.et_pb_section_video_bg_desktop_only {
          display: none;
        }
      }
      @media (min-width: 768px) {
        .et_pb_section_video_bg.et_pb_section_video_bg_desktop_tablet {
          display: block;
        }
      }
      @media (min-width: 768px) and (max-width: 980px) {
        .et_pb_section_video_bg.et_pb_section_video_bg_tablet_only {
          display: block;
        }
      }
      @media (max-width: 767px) {
        .et_pb_section_video_bg.et_pb_section_video_bg_phone {
          display: block;
        }
        .et_pb_section_video_bg.et_pb_section_video_bg_desktop_tablet {
          display: none;
        }
      }
      .et_pb_row {
        width: 80%;
        max-width: 1080px;
        margin: auto;
        position: relative;
      }
      body.safari .section_has_divider,
      body.uiwebview .section_has_divider {
        -webkit-perspective: 2000px;
        perspective: 2000px;
      }
      .section_has_divider .et_pb_row {
        z-index: 5;
      }
      .et_pb_row_inner {
        width: 100%;
        position: relative;
      }
      .et_pb_row.et_pb_row_empty,
      .et_pb_row_inner:nth-of-type(n + 2).et_pb_row_empty {
        display: none;
      }
      .et_pb_row:after,
      .et_pb_row_inner:after {
        content: "";
        display: block;
        clear: both;
        visibility: hidden;
        line-height: 0;
        height: 0;
        width: 0;
      }
      .et_pb_row_4col .et-last-child,
      .et_pb_row_4col .et-last-child-2,
      .et_pb_row_6col .et-last-child,
      .et_pb_row_6col .et-last-child-2,
      .et_pb_row_6col .et-last-child-3 {
        margin-bottom: 0;
      }
      .et_pb_column {
        float: left;
        background-size: cover;
        background-position: 50%;
        position: relative;
        z-index: 2;
        min-height: 1px;
      }
      .et_pb_column--with-menu {
        z-index: 3;
      }
      .et_pb_column.et_pb_column_empty {
        min-height: 1px;
      }
      .et_pb_row .et_pb_column.et-last-child,
      .et_pb_row .et_pb_column:last-child,
      .et_pb_row_inner .et_pb_column.et-last-child,
      .et_pb_row_inner .et_pb_column:last-child {
        margin-right: 0 !important;
      }
      .et_pb_column.et_pb_section_parallax {
        position: relative;
      }
      .et_pb_column,
      .et_pb_row,
      .et_pb_row_inner {
        background-size: cover;
        background-position: 50%;
        background-repeat: no-repeat;
      }
      @media (min-width: 981px) {
        .et_pb_row {
          padding: 2% 0;
        }
        body.et_pb_pagebuilder_layout.et_pb_show_title
          .post-password-required
          .et_pb_row,
        body:not(.et_pb_pagebuilder_layout) .post-password-required .et_pb_row {
          padding: 0;
          width: 100%;
        }
        .et_pb_column_3_4 .et_pb_row_inner {
          padding: 3.735% 0;
        }
        .et_pb_column_2_3 .et_pb_row_inner {
          padding: 4.2415% 0;
        }
        .et_pb_column_1_2 .et_pb_row_inner,
        .et_pb_column_3_5 .et_pb_row_inner {
          padding: 5.82% 0;
        }
        .et_section_specialty > .et_pb_row {
          padding: 0;
        }
        .et_pb_row_inner {
          width: 100%;
        }
        .et_pb_column_single {
          padding: 2.855% 0;
        }
        .et_pb_column_single .et_pb_module.et-first-child,
        .et_pb_column_single .et_pb_module:first-child {
          margin-top: 0;
        }
        .et_pb_column_single .et_pb_module.et-last-child,
        .et_pb_column_single .et_pb_module:last-child {
          margin-bottom: 0;
        }
        .et_pb_row .et_pb_column.et-last-child,
        .et_pb_row .et_pb_column:last-child,
        .et_pb_row_inner .et_pb_column.et-last-child,
        .et_pb_row_inner .et_pb_column:last-child {
          margin-right: 0 !important;
        }
        .et_pb_row.et_pb_equal_columns,
        .et_pb_row_inner.et_pb_equal_columns,
        .et_pb_section.et_pb_equal_columns > .et_pb_row {
          display: -webkit-box;
          display: -ms-flexbox;
          display: flex;
        }
        .rtl .et_pb_row.et_pb_equal_columns,
        .rtl .et_pb_row_inner.et_pb_equal_columns,
        .rtl .et_pb_section.et_pb_equal_columns > .et_pb_row {
          -webkit-box-orient: horizontal;
          -webkit-box-direction: reverse;
          -ms-flex-direction: row-reverse;
          flex-direction: row-reverse;
        }
        .et_pb_row.et_pb_equal_columns > .et_pb_column,
        .et_pb_section.et_pb_equal_columns > .et_pb_row > .et_pb_column {
          -webkit-box-ordinal-group: 2;
          -ms-flex-order: 1;
          order: 1;
        }
      }
      @media (max-width: 980px) {
        .et_pb_row {
          max-width: 1080px;
        }
        body.et_pb_pagebuilder_layout.et_pb_show_title
          .post-password-required
          .et_pb_row,
        body:not(.et_pb_pagebuilder_layout) .post-password-required .et_pb_row {
          padding: 0;
          width: 100%;
        }
        .et_pb_column .et_pb_row_inner,
        .et_pb_row {
          padding: 30px 0;
        }
        .et_section_specialty > .et_pb_row {
          padding: 0;
        }
        .et_pb_column {
          width: 100%;
          margin-bottom: 30px;
        }
        .et_pb_bottom_divider
          .et_pb_row:nth-last-child(2)
          .et_pb_column:last-child,
        .et_pb_row .et_pb_column.et-last-child,
        .et_pb_row .et_pb_column:last-child {
          margin-bottom: 0;
        }
        .et_section_specialty .et_pb_row > .et_pb_column {
          padding-bottom: 0;
        }
        .et_pb_column.et_pb_column_empty {
          display: none;
        }
        .et_pb_row_1-2_1-4_1-4,
        .et_pb_row_1-2_1-6_1-6_1-6,
        .et_pb_row_1-4_1-4,
        .et_pb_row_1-4_1-4_1-2,
        .et_pb_row_1-5_1-5_3-5,
        .et_pb_row_1-6_1-6_1-6,
        .et_pb_row_1-6_1-6_1-6_1-2,
        .et_pb_row_1-6_1-6_1-6_1-6,
        .et_pb_row_3-5_1-5_1-5,
        .et_pb_row_4col,
        .et_pb_row_5col,
        .et_pb_row_6col {
          display: -webkit-box;
          display: -ms-flexbox;
          display: flex;
          -ms-flex-wrap: wrap;
          flex-wrap: wrap;
        }
        .et_pb_row_1-4_1-4 > .et_pb_column.et_pb_column_1_4,
        .et_pb_row_1-4_1-4_1-2 > .et_pb_column.et_pb_column_1_4,
        .et_pb_row_4col > .et_pb_column.et_pb_column_1_4 {
          width: 47.25%;
          margin-right: 5.5%;
        }
        .et_pb_row_1-4_1-4 > .et_pb_column.et_pb_column_1_4:nth-child(2n),
        .et_pb_row_1-4_1-4_1-2 > .et_pb_column.et_pb_column_1_4:nth-child(2n),
        .et_pb_row_4col > .et_pb_column.et_pb_column_1_4:nth-child(2n) {
          margin-right: 0;
        }
        .et_pb_row_1-2_1-4_1-4 > .et_pb_column.et_pb_column_1_4 {
          width: 47.25%;
          margin-right: 5.5%;
        }
        .et_pb_row_1-2_1-4_1-4 > .et_pb_column.et_pb_column_1_2,
        .et_pb_row_1-2_1-4_1-4 > .et_pb_column.et_pb_column_1_4:nth-child(odd) {
          margin-right: 0;
        }
        .et_pb_row_1-2_1-4_1-4 .et_pb_column:nth-last-child(-n + 2),
        .et_pb_row_1-4_1-4 .et_pb_column:nth-last-child(-n + 2),
        .et_pb_row_4col .et_pb_column:nth-last-child(-n + 2) {
          margin-bottom: 0;
        }
        .et_pb_row_1-5_1-5_3-5 > .et_pb_column.et_pb_column_1_5,
        .et_pb_row_5col > .et_pb_column.et_pb_column_1_5 {
          width: 47.25%;
          margin-right: 5.5%;
        }
        .et_pb_row_1-5_1-5_3-5 > .et_pb_column.et_pb_column_1_5:nth-child(2n),
        .et_pb_row_5col > .et_pb_column.et_pb_column_1_5:nth-child(2n) {
          margin-right: 0;
        }
        .et_pb_row_3-5_1-5_1-5 > .et_pb_column.et_pb_column_1_5 {
          width: 47.25%;
          margin-right: 5.5%;
        }
        .et_pb_row_3-5_1-5_1-5 > .et_pb_column.et_pb_column_1_5:nth-child(odd),
        .et_pb_row_3-5_1-5_1-5 > .et_pb_column.et_pb_column_3_5 {
          margin-right: 0;
        }
        .et_pb_row_3-5_1-5_1-5 .et_pb_column:nth-last-child(-n + 2),
        .et_pb_row_5col .et_pb_column:last-child {
          margin-bottom: 0;
        }
        .et_pb_row_1-6_1-6_1-6_1-2 > .et_pb_column.et_pb_column_1_6,
        .et_pb_row_6col > .et_pb_column.et_pb_column_1_6 {
          width: 29.666%;
          margin-right: 5.5%;
        }
        .et_pb_row_1-6_1-6_1-6_1-2
          > .et_pb_column.et_pb_column_1_6:nth-child(3n),
        .et_pb_row_6col > .et_pb_column.et_pb_column_1_6:nth-child(3n) {
          margin-right: 0;
        }
        .et_pb_row_1-2_1-6_1-6_1-6 > .et_pb_column.et_pb_column_1_6 {
          width: 29.666%;
          margin-right: 5.5%;
        }
        .et_pb_row_1-2_1-6_1-6_1-6 > .et_pb_column.et_pb_column_1_2,
        .et_pb_row_1-2_1-6_1-6_1-6 > .et_pb_column.et_pb_column_1_6:last-child {
          margin-right: 0;
        }
        .et_pb_row_1-2_1-2 .et_pb_column.et_pb_column_1_2,
        .et_pb_row_1-2_1-6_1-6_1-6 .et_pb_column:nth-last-child(-n + 3),
        .et_pb_row_6col .et_pb_column:nth-last-child(-n + 3) {
          margin-bottom: 0;
        }
        .et_pb_row_1-2_1-2
          .et_pb_column.et_pb_column_1_2
          .et_pb_column.et_pb_column_1_6 {
          width: 29.666%;
          margin-right: 5.5%;
          margin-bottom: 0;
        }
        .et_pb_row_1-2_1-2
          .et_pb_column.et_pb_column_1_2
          .et_pb_column.et_pb_column_1_6:last-child {
          margin-right: 0;
        }
        .et_pb_row_1-6_1-6_1-6_1-6 > .et_pb_column.et_pb_column_1_6 {
          width: 47.25%;
          margin-right: 5.5%;
        }
        .et_pb_row_1-6_1-6_1-6_1-6
          > .et_pb_column.et_pb_column_1_6:nth-child(2n) {
          margin-right: 0;
        }
        .et_pb_row_1-6_1-6_1-6_1-6:nth-last-child(-n + 3) {
          margin-bottom: 0;
        }
      }
      @media (max-width: 479px) {
        .et_pb_row .et_pb_column.et_pb_column_1_4,
        .et_pb_row .et_pb_column.et_pb_column_1_5,
        .et_pb_row .et_pb_column.et_pb_column_1_6 {
          width: 100%;
          margin: 0 0 30px;
        }
        .et_pb_row .et_pb_column.et_pb_column_1_4.et-last-child,
        .et_pb_row .et_pb_column.et_pb_column_1_4:last-child,
        .et_pb_row .et_pb_column.et_pb_column_1_5.et-last-child,
        .et_pb_row .et_pb_column.et_pb_column_1_5:last-child,
        .et_pb_row .et_pb_column.et_pb_column_1_6.et-last-child,
        .et_pb_row .et_pb_column.et_pb_column_1_6:last-child {
          margin-bottom: 0;
        }
        .et_pb_row_1-2_1-2
          .et_pb_column.et_pb_column_1_2
          .et_pb_column.et_pb_column_1_6 {
          width: 100%;
          margin: 0 0 30px;
        }
        .et_pb_row_1-2_1-2
          .et_pb_column.et_pb_column_1_2
          .et_pb_column.et_pb_column_1_6.et-last-child,
        .et_pb_row_1-2_1-2
          .et_pb_column.et_pb_column_1_2
          .et_pb_column.et_pb_column_1_6:last-child {
          margin-bottom: 0;
        }
        .et_pb_column {
          width: 100% !important;
        }
      }
      .et_pb_text {
        word-wrap: break-word;
      }
      .et_pb_text ol,
      .et_pb_text ul {
        padding-bottom: 1em;
      }
      .et_pb_text > :last-child {
        padding-bottom: 0;
      }
      .et_pb_text_inner {
        position: relative;
      }
      .et_pb_with_border .et_pb_image_wrap {
        border: 0 solid #333;
      }
      .et_pb_image {
        margin-left: auto;
        margin-right: auto;
        line-height: 0;
      }
      .et_pb_image.aligncenter {
        text-align: center;
      }
      .et_pb_image.et_pb_has_overlay a.et_pb_lightbox_image {
        display: block;
        position: relative;
      }
      .et_pb_image {
        display: block;
      }
      .et_pb_image .et_pb_image_wrap {
        display: inline-block;
        position: relative;
        max-width: 100%;
      }
      .et_pb_image .et_pb_image_wrap img[src*=".svg"] {
        width: auto;
      }
      .et_pb_image img {
        position: relative;
      }
      .et_pb_image_sticky {
        margin-bottom: 0 !important;
        display: inherit;
      }
      .et_pb_image.et_pb_has_overlay .et_pb_image_wrap:hover .et_overlay {
        z-index: 3;
        opacity: 1;
      }
      @media (min-width: 981px) {
        .et_pb_section_sticky,
        .et_pb_section_sticky.et_pb_bottom_divider .et_pb_row:nth-last-child(2),
        .et_pb_section_sticky .et_pb_column_single,
        .et_pb_section_sticky .et_pb_row.et-last-child,
        .et_pb_section_sticky .et_pb_row:last-child,
        .et_pb_section_sticky
          .et_pb_specialty_column
          .et_pb_row_inner.et-last-child,
        .et_pb_section_sticky
          .et_pb_specialty_column
          .et_pb_row_inner:last-child {
          padding-bottom: 0 !important;
        }
      }
      @media (max-width: 980px) {
        .et_pb_image_sticky_tablet {
          margin-bottom: 0 !important;
          display: inherit;
        }
        .et_pb_section_sticky_mobile,
        .et_pb_section_sticky_mobile.et_pb_bottom_divider
          .et_pb_row:nth-last-child(2),
        .et_pb_section_sticky_mobile .et_pb_column_single,
        .et_pb_section_sticky_mobile .et_pb_row.et-last-child,
        .et_pb_section_sticky_mobile .et_pb_row:last-child,
        .et_pb_section_sticky_mobile
          .et_pb_specialty_column
          .et_pb_row_inner.et-last-child,
        .et_pb_section_sticky_mobile
          .et_pb_specialty_column
          .et_pb_row_inner:last-child {
          padding-bottom: 0 !important;
        }
        .et_pb_section_sticky
          .et_pb_row.et-last-child
          .et_pb_column.et_pb_row_sticky.et-last-child,
        .et_pb_section_sticky
          .et_pb_row:last-child
          .et_pb_column.et_pb_row_sticky:last-child {
          margin-bottom: 0;
        }
        .et_pb_image_bottom_space_tablet {
          margin-bottom: 30px !important;
          display: block;
        }
        .et_always_center_on_mobile {
          text-align: center !important;
          margin-left: auto !important;
          margin-right: auto !important;
        }
      }
      @media (max-width: 767px) {
        .et_pb_image_sticky_phone {
          margin-bottom: 0 !important;
          display: inherit;
        }
        .et_pb_image_bottom_space_phone {
          margin-bottom: 30px !important;
          display: block;
        }
      }
      .et_overlay {
        z-index: -1;
        position: absolute;
        top: 0;
        left: 0;
        display: block;
        width: 100%;
        height: 100%;
        background: hsla(0, 0%, 100%, 0.9);
        opacity: 0;
        pointer-events: none;
        -webkit-transition: all 0.3s;
        transition: all 0.3s;
        border: 1px solid #e5e5e5;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        -webkit-backface-visibility: hidden;
        backface-visibility: hidden;
        -webkit-font-smoothing: antialiased;
      }
      .et_overlay:before {
        color: #2ea3f2;
        content: E050";
        position: absolute;
        top: 50%;
        left: 50%;
        -webkit-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
        font-size: 32px;
        -webkit-transition: all 0.4s;
        transition: all 0.4s;
      }
      .et_portfolio_image,
      .et_shop_image {
        position: relative;
        display: block;
      }
      .et_pb_has_overlay:not(.et_pb_image):hover .et_overlay,
      .et_portfolio_image:hover .et_overlay,
      .et_shop_image:hover .et_overlay {
        z-index: 3;
        opacity: 1;
      }
      #ie7 .et_overlay,
      #ie8 .et_overlay {
        display: none;
      }
      .et_pb_module.et_pb_has_overlay {
        position: relative;
      }
      .et_pb_module.et_pb_has_overlay .et_overlay,
      article.et_pb_has_overlay {
        border: none;
      }
    </style>
    <link
      rel="preload"
      id="divi-dynamic-css"
      href="../../../../wp-content/et-cache/9429/et-divi-dynamic-9429736b.css?ver=1709147651"
      as="style"
      media="all"
      onload="this.onload=null;this.rel='stylesheet'"
    />
    <link
      rel="stylesheet"
      id="divi-enhancer-styles-css"
      href="../../../../wp-content/plugins/miguras-divi-enhancer/styles/style.min8a54.css?ver=1.0.0"
      type="text/css"
      media="all"
    />
    <link
      rel="stylesheet"
      id="divienhancer-slick-css-css"
      href="../../../../wp-content/plugins/miguras-divi-enhancer/functions/styles/slick84fc.css?ver=6.4.3"
      type="text/css"
      media="all"
    />
    <link
      rel="stylesheet"
      id="divienhancer-slick-theme-css"
      href="../../../../wp-content/plugins/miguras-divi-enhancer/functions/styles/slick-theme84fc.css?ver=6.4.3"
      type="text/css"
      media="all"
    />
    <link
      rel="stylesheet"
      id="divienhancer-custom-css"
      href="../../../../wp-content/plugins/miguras-divi-enhancer/functions/styles/custom4e90.css?ver=62"
      type="text/css"
      media="all"
    />
    <link
      rel="stylesheet"
      id="divi-style-css"
      href="../../../../wp-content/themes/Divi-child/stylea48f.css?ver=4.24.0"
      type="text/css"
      media="all"
    />
    <link
      rel="stylesheet"
      id="social-logos-css"
      href="../../../../wp-content/plugins/jetpack/_inc/social-logos/social-logos.mina35c.css?ver=13.2-a.11"
      type="text/css"
      media="all"
    />
    <link
      rel="stylesheet"
      id="jetpack_css-css"
      href="../../../../wp-content/plugins/jetpack/css/jetpacka35c.css?ver=13.2-a.11"
      type="text/css"
      media="all"
    />
    <script
      type="text/javascript"
      src="../../../../wp-includes/js/jquery/jquery.minf43b.js?ver=3.7.1"
      id="jquery-core-js"
    ></script>
    <script
      type="text/javascript"
      src="../../../../wp-includes/js/jquery/jquery-migrate.min5589.js?ver=3.4.1"
      id="jquery-migrate-js"
    ></script>
    <script
      type="text/javascript"
      src="../../../../wp-content/plugins/miguras-divi-enhancer/functions/scripts/slick.min84fc.js?ver=6.4.3"
      id="divienhancer-slick-js-js"
    ></script>
    <script
      type="text/javascript"
      src="../../../../wp-content/plugins/miguras-divi-enhancer/functions/scripts/jquery.event.move84fc.js?ver=6.4.3"
      id="divienhancer-event-move-js"
    ></script>
    <link rel="https://api.w.org/" href="../../../../wp-json/index.html" />
    <link
      rel="alternate"
      type="application/json"
      href="../../../../wp-json/wp/v2/posts/9429.json"
    />
    <link
      rel="EditURI"
      type="application/rsd+xml"
      title="RSD"
      href="../../../../xmlrpc0db0.php?rsd"
    />

    <link rel="canonical" href="index.html" />
    <link rel="shortlink" href="../../../../indexd7b7.html?p=9429" />
    <link
      rel="alternate"
      type="application/json+oembed"
      href="../../../../wp-json/oembed/1.0/embed7ebf.json?url=https%3A%2F%2Fdiegoduranblog.wpcomstaging.com%2F2024%2F01%2F04%2Fnavegar-la-infidelidad-en-la-era-digital-parte-iv%2F"
    />
    <link
      rel="alternate"
      type="text/xml+oembed"
      href="../../../../wp-json/oembed/1.0/embed5386?url=https%3A%2F%2Fdiegoduranblog.wpcomstaging.com%2F2024%2F01%2F04%2Fnavegar-la-infidelidad-en-la-era-digital-parte-iv%2F&amp;format=xml"
    />
    <style>
      img#wpstats {
        display: none;
      }
    </style>
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
    />

    <style type="text/css">

      #main-header .nav li ul a {font-size:px;}


      #main-footer #footer-bottom {display: none; visibility: hidden;}

      @media only screen and (max-width: 980px){
      #logo {max-height: px;>}
      }
    </style>

    <style type="text/css">
      .recentcomments a {
        display: inline !important;
        padding: 0 !important;
        margin: 0 !important;
      }

      table.recentcommentsavatartop img.avatar,
      table.recentcommentsavatarend img.avatar {
        border: 0px;
        margin: 0;
      }

      table.recentcommentsavatartop a,
      table.recentcommentsavatarend a {
        border: 0px !important;
        background-color: transparent !important;
      }

      td.recentcommentsavatarend,
      td.recentcommentsavatartop {
        padding: 0px 0px 1px 0px;
        margin: 0px;
      }

      td.recentcommentstextend {
        border: none !important;
        padding: 0px 0px 2px 10px;
      }

      .rtl td.recentcommentstextend {
        padding: 0px 10px 2px 0px;
      }

      td.recentcommentstexttop {
        border: none;
        padding: 0px 0px 0px 10px;
      }

      .rtl td.recentcommentstexttop {
        padding: 0px 10px 0px 0px;
      }
      @font-face {
        font-family: ETmodules;
        font-display: swap;
        font-weight: 400;
        font-style: normal;
        src: url("https://cdn-fbhgp.nitrocdn.com/KPTOvGLmXtBbsVUglfZsgFcwkLFwvioK/assets/static/source/rev-aecd560/psdiegoduran.com/wp-content/themes/Divi/core/admin/fonts/modules/all/modules.ttf")
          format("truetype");
      }
    </style>

    <!-- Jetpack Open Graph Tags -->
    <meta property="og:type" content="article" />
    <meta
      property="og:title"
      content="Navigating infidelity in the digital age (part IV)"
    />
    <meta
      property="og:url"
      content="https://diegoduranblog.wpcomstaging.com/2024/01/04/navegar-la-infidelidad-en-la-era-digital-parte-iv/"
    />
    <meta
      property="og:description"
      content="Visita la entrada para saber más."
    />
    <meta
      property="article:published_time"
      content="2024-01-04T01:53:30+00:00"
    />
    <meta
      property="article:modified_time"
      content="2024-01-04T14:13:51+00:00"
    />
    <meta property="og:site_name" content="Ps. Diego Durán" />
    <meta
      property="og:image"
      content="https://diegoduranblog.wpcomstaging.com/wp-content/uploads/2024/01/scenes-from-a-marriage-e1704333406504.jpg"
    />
    <meta property="og:image:width" content="1288" />
    <meta property="og:image:height" content="1197" />
    <meta property="og:image:alt" content="" />
    <meta property="og:locale" content="es_ES" />
    <meta
      name="twitter:text:title"
      content="Navigating infidelity in the digital age (part IV)"
    />
    <meta
      name="twitter:image"
      content="https://diegoduranblog.wpcomstaging.com/wp-content/uploads/2024/01/scenes-from-a-marriage-e1704333406504.jpg?w=640"
    />
    <meta name="twitter:card" content="summary_large_image" />
    <meta
      name="twitter:description"
      content="Visita la entrada para saber más."
    />

    <!-- End Jetpack Open Graph Tags -->
    <!-- Google Tag Manager -->
    <script>
      (function (w, d, s, l, i) {
        w[l] = w[l] || [];
        w[l].push({ "gtm.start": new Date().getTime(), event: "gtm.js" });
        var f = d.getElementsByTagName(s)[0],
          j = d.createElement(s),
          dl = l != "dataLayer" ? "&l=" + l : "";
        j.async = true;
        j.src =
          "../../../../../www.googletagmanager.com/gtm5445.html?id=" + i + dl;
        f.parentNode.insertBefore(j, f);
      })(window, document, "script", "dataLayer", "GTM-WXJ8XL7");
    </script>
    <!-- End Google Tag Manager -->
    <link
      rel="icon"
      href="../../../../wp-content/uploads/2021/01/cropped-icono-1-150x150efc8.png?crop=1"
      sizes="32x32"
    />
    <link
      rel="icon"
      href="../../../../wp-content/uploads/2021/01/cropped-icono-1-200x200.png"
      sizes="192x192"
    />
    <link
      rel="apple-touch-icon"
      href="../../../../wp-content/uploads/2021/01/cropped-icono-1-200x200.png"
    />
    <meta
      name="msapplication-TileImage"
      content="https://diegoduranblog.wpcomstaging.com/wp-content/uploads/2021/01/cropped-icono-1-300x300.png"
    />
    <link
      rel="stylesheet"
      id="et-divi-customizer-global-cached-inline-styles"
      href="../../../../wp-content/et-cache/global/et-divi-customizer-global.minae9a.css?ver=1709147628"
    />
    <!-- Jetpack Google Analytics -->
    <script type="text/javascript">
      var _gaq = _gaq || [];
      _gaq.push(["_setAccount", "UA-139643133-1"]);
      _gaq.push(["_trackPageview"]);
      (function () {
        var ga = document.createElement("script");
        ga.type = "text/javascript";
        ga.async = true;
        ga.src =
          ("https:" === document.location.protocol
            ? "https://ssl"
            : "http://www") + ".google-analytics.com/ga.js";
        var s = document.getElementsByTagName("script")[0];
        s.parentNode.insertBefore(ga, s);
      })();
    </script>

    <style>
      .sd-social-icon .sd-content ul li a.sd-button > span {
        margin-left: 0;
      }
    </style>
    <script
      defer
      id="bilmur"
      data-provider="wordpress.com"
      data-service="atomic"
      src="../../../../../s0.wp.com/wp-content/js/bilmur.minb4c1.js?m=202409"
    ></script>

    <!-- GA Google Analytics @ https://m0n.co/ga -->
    <script>
      (function (i, s, o, g, r, a, m) {
        i["GoogleAnalyticsObject"] = r;
        (i[r] =
          i[r] ||
          function () {
            (i[r].q = i[r].q || []).push(arguments);
          }),
          (i[r].l = 1 * new Date());
        (a = s.createElement(o)), (m = s.getElementsByTagName(o)[0]);
        a.async = 1;
        a.src = g;
        m.parentNode.insertBefore(a, m);
      })(
        window,
        document,
        "script",
        "../../../../../www.google-analytics.com/analytics.js",
        "ga"
      );
      ga("create", "G-S1BY0JV3Y7", "auto");
      ga("set", "forceSSL", true);
      ga("send", "pageview");
    </script>

    <script type="text/javascript">
      window.WPCOM_sharing_counts = {
        "https:////diegoduranblog.wpcomstaging.com//2024//01//04//navegar-la-infidelidad-en-la-era-digital-parte-iv//": 9429,
      };
    </script>
    <!-- Google Tag Manager (noscript) -->
    <noscript
      ><iframe
        src="https://www.googletagmanager.com/ns.html?id=GTM-WXJ8XL7"
        height="0"
        width="0"
        style="display: none; visibility: hidden"
      ></iframe
    ></noscript>
    <!-- End Google Tag Manager (noscript) --><link
      rel="stylesheet"
      id="wp-block-library-css"
      href="../../../../wp-includes/css/dist/block-library/style.min84fc.css?ver=6.4.3"
      type="text/css"
      media="none"
      onload="media='all'"
    />
    <style id="wp-block-library-inline-css" type="text/css">
      .has-text-align-justify {
        text-align: justify;
      }
    </style>
    <script
      type="text/javascript"
      src="../../../../wp-includes/js/comment-reply.min84fc.js?ver=6.4.3"
      id="comment-reply-js"
      async="async"
      data-wp-strategy="async"
    ></script>
    <script type="text/javascript" id="divi-custom-script-js-extra">
      /* <![CDATA[ */
      var DIVI = { item_count: "%d Item", items_count: "%d Items" };
      var et_builder_utils_params = {
        condition: { diviTheme: true, extraTheme: false },
        scrollLocations: ["app", "top"],
        builderScrollLocations: { desktop: "app", tablet: "app", phone: "app" },
        onloadScrollLocation: "app",
        builderType: "fe",
      };
      var et_frontend_scripts = {
        builderCssContainerPrefix: "#et-boc",
        builderCssLayoutPrefix: "#et-boc .et-l",
      };
      var et_pb_custom = {
        ajaxurl:
          "https:////diegoduranblog.wpcomstaging.com//wp-admin//admin-ajax.php",
        images_uri:
          "https:////diegoduranblog.wpcomstaging.com//wp-content//themes//Divi//images",
        builder_images_uri:
          "https:////diegoduranblog.wpcomstaging.com//wp-content//themes//Divi//includes//builder//images",
        et_frontend_nonce: "3c9f707126",
        subscription_failed:
          "Por favor, revise los campos a continuaci\u00f3n para asegurarse de que la informaci\u00f3n introducida es correcta.",
        et_ab_log_nonce: "ac12e9a15a",
        fill_message: "Por favor, rellene los siguientes campos:",
        contact_error_message: "Por favor, arregle los siguientes errores:",
        invalid: "De correo electr\u00f3nico no v\u00e1lida",
        captcha: "Captcha",
        prev: "Anterior",
        previous: "Anterior",
        next: "Siguiente",
        wrong_captcha: "Ha introducido un n\u00famero equivocado de captcha.",
        wrong_checkbox: "Caja",
        ignore_waypoints: "no",
        is_divi_theme_used: "1",
        widget_search_selector: ".widget_search",
        ab_tests: [],
        is_ab_testing_active: "",
        page_id: "9429",
        unique_test_id: "",
        ab_bounce_rate: "5",
        is_cache_plugin_active: "yes",
        is_shortcode_tracking: "",
        tinymce_uri:
          "https:////diegoduranblog.wpcomstaging.com//wp-content//themes//Divi//includes//builder//frontend-builder//assets//vendors",
        accent_color: "#73939c",
        waypoints_options: [],
      };
      var et_pb_box_shadow_elements = [];
      /* ]]> */
    </script>
    <script
      type="text/javascript"
      src="../../../../wp-content/themes/Divi/js/scripts.mina48f.js?ver=4.24.0"
      id="divi-custom-script-js"
    ></script>
    <script
      type="text/javascript"
      src="../../../../wp-content/plugins/miguras-divi-enhancer/scripts/frontend-bundle.min8a54.js?ver=1.0.0"
      id="divi-enhancer-frontend-bundle-js"
    ></script>
    <script
      type="text/javascript"
      src="../../../../wp-content/themes/Divi/core/admin/js/commona48f.js?ver=4.24.0"
      id="et-core-common-js"
    ></script>
    <script
      type="text/javascript"
      src="../../../../../stats.wp.com/e-202409.js"
      id="jetpack-stats-js"
      data-wp-strategy="defer"
    ></script>
    <script type="text/javascript" id="jetpack-stats-js-after">
      /* <![CDATA[ */
      _stq = window._stq || [];
      _stq.push([
        "view",
        JSON.parse(
          '{"v":"ext","blog":"117911546","post":"9429","tz":"0","srv":"diegoduranblog.wpcomstaging.com","hp":"atomic","ac":"2","amp":"0","j":"1:13.2-a.11"}'
        ),
      ]);
      _stq.push(["clickTrackerInit", "117911546", "9429"]);
      /* ]]> */
    </script>
    <script
      defer
      type="text/javascript"
      src="../../../../wp-content/plugins/akismet/_inc/akismet-frontendda83.js?ver=1704837122"
      id="akismet-frontend-js"
    ></script>
    <script type="text/javascript" id="sharing-js-js-extra">
      /* <![CDATA[ */
      var sharing_js_options = {
        lang: "es",
        counts: "1",
        is_stats_active: "1",
      };
      /* ]]> */
    </script>
    <script
      type="text/javascript"
      src="../../../../wp-content/plugins/jetpack/_inc/build/sharedaddy/sharing.mina35c.js?ver=13.2-a.11"
      id="sharing-js-js"
    ></script>
    <script type="text/javascript" id="sharing-js-js-after">
      /* <![CDATA[ */
      var windowOpen;
      (function () {
        function matches(el, sel) {
          return !!(
            (el.matches && el.matches(sel)) ||
            (el.msMatchesSelector && el.msMatchesSelector(sel))
          );
        }

        document.body.addEventListener("click", function (event) {
          if (!event.target) {
            return;
          }

          var el;
          if (matches(event.target, "a.share-twitter")) {
            el = event.target;
          } else if (
            event.target.parentNode &&
            matches(event.target.parentNode, "a.share-twitter")
          ) {
            el = event.target.parentNode;
          }

          if (el) {
            event.preventDefault();

            // If there's another sharing window open, close it.
            if (typeof windowOpen !== "undefined") {
              windowOpen.close();
            }
            windowOpen = window.open(
              el.getAttribute("href"),
              "wpcomtwitter",
              "menubar=1,resizable=1,width=600,height=350"
            );
            return false;
          }
        });
      })();
      var windowOpen;
      (function () {
        function matches(el, sel) {
          return !!(
            (el.matches && el.matches(sel)) ||
            (el.msMatchesSelector && el.msMatchesSelector(sel))
          );
        }

        document.body.addEventListener("click", function (event) {
          if (!event.target) {
            return;
          }

          var el;
          if (matches(event.target, "a.share-facebook")) {
            el = event.target;
          } else if (
            event.target.parentNode &&
            matches(event.target.parentNode, "a.share-facebook")
          ) {
            el = event.target.parentNode;
          }

          if (el) {
            event.preventDefault();

            // If there's another sharing window open, close it.
            if (typeof windowOpen !== "undefined") {
              windowOpen.close();
            }
            windowOpen = window.open(
              el.getAttribute("href"),
              "wpcomfacebook",
              "menubar=1,resizable=1,width=600,height=400"
            );
            return false;
          }
        });
      })();
      var windowOpen;
      (function () {
        function matches(el, sel) {
          return !!(
            (el.matches && el.matches(sel)) ||
            (el.msMatchesSelector && el.msMatchesSelector(sel))
          );
        }

        document.body.addEventListener("click", function (event) {
          if (!event.target) {
            return;
          }

          var el;
          if (matches(event.target, "a.share-linkedin")) {
            el = event.target;
          } else if (
            event.target.parentNode &&
            matches(event.target.parentNode, "a.share-linkedin")
          ) {
            el = event.target.parentNode;
          }

          if (el) {
            event.preventDefault();

            // If there's another sharing window open, close it.
            if (typeof windowOpen !== "undefined") {
              windowOpen.close();
            }
            windowOpen = window.open(
              el.getAttribute("href"),
              "wpcomlinkedin",
              "menubar=1,resizable=1,width=580,height=450"
            );
            return false;
          }
        });
      })();
      /* ]]> */
    </script>
    <style id="et-builder-module-design-deferred-9429-cached-inline-styles">
      .et_pb_section_0.et_pb_section {
        padding-bottom: 0px;
      }
      .et_pb_row_1.et_pb_row,
      .et_pb_row_7.et_pb_row,
      .et_pb_row_8.et_pb_row {
        padding-top: 0px !important;
        padding-top: 0px;
      }
      .et_pb_section_1.et_pb_section,
      .et_pb_section_2.et_pb_section,
      .et_pb_section_3.et_pb_section,
      .et_pb_section_4.et_pb_section,
      .et_pb_section_5.et_pb_section {
        padding-top: 0px;
        padding-bottom: 0px;
      }
      .et_pb_row_2.et_pb_row,
      .et_pb_row_6.et_pb_row {
        padding-bottom: 0px !important;
        padding-bottom: 0px;
      }
      .et_pb_image_0 {
        width: 52%;
        max-width: 52%;
        text-align: center;
      }
      .et_pb_row_5 {
        min-height: 166.2px;
      }
      .et_pb_image_1 {
        width: 51%;
        max-width: 52%;
        text-align: center;
      }
      .et_pb_section_6.et_pb_section {
        padding-top: 0px;
      }
      @media only screen and (max-width: 980px) {
        .et_pb_image_0 .et_pb_image_wrap img,
        .et_pb_image_1 .et_pb_image_wrap img {
          width: auto;
        }
      }
      @media only screen and (max-width: 767px) {
        .et_pb_image_0 .et_pb_image_wrap img,
        .et_pb_image_1 .et_pb_image_wrap img {
          width: auto;
        }
      }</style><svg
      style="position: absolute; width: 0; height: 0; overflow: hidden"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
    >
      <defs>
        <symbol id="icon-500px" viewBox="0 0 24 24">
          <path
            d="M6.94026,15.1412c.00437.01213.108.29862.168.44064a6.55008,6.55008,0,1,0,6.03191-9.09557,6.68654,6.68654,0,0,0-2.58357.51467A8.53914,8.53914,0,0,0,8.21268,8.61344L8.209,8.61725V3.22948l9.0504-.00008c.32934-.0036.32934-.46353.32934-.61466s0-.61091-.33035-.61467L7.47248,2a.43.43,0,0,0-.43131.42692v7.58355c0,.24466.30476.42131.58793.4819.553.11812.68074-.05864.81617-.2457l.018-.02481A10.52673,10.52673,0,0,1,9.32258,9.258a5.35268,5.35268,0,1,1,7.58985,7.54976,5.417,5.417,0,0,1-3.80867,1.56365,5.17483,5.17483,0,0,1-2.69822-.74478l.00342-4.61111a2.79372,2.79372,0,0,1,.71372-1.78792,2.61611,2.61611,0,0,1,1.98282-.89477,2.75683,2.75683,0,0,1,1.95525.79477,2.66867,2.66867,0,0,1,.79656,1.909,2.724,2.724,0,0,1-2.75849,2.748,4.94651,4.94651,0,0,1-.86254-.13719c-.31234-.093-.44519.34058-.48892.48349-.16811.54966.08453.65862.13687.67489a3.75751,3.75751,0,0,0,1.25234.18375,3.94634,3.94634,0,1,0-2.82444-6.742,3.67478,3.67478,0,0,0-1.13028,2.584l-.00041.02323c-.0035.11667-.00579,2.881-.00644,3.78811l-.00407-.00451a6.18521,6.18521,0,0,1-1.0851-1.86092c-.10544-.27856-.34358-.22925-.66857-.12917-.14192.04372-.57386.17677-.47833.489Zm4.65165-1.08338a.51346.51346,0,0,0,.19513.31818l.02276.022a.52945.52945,0,0,0,.3517.18416.24242.24242,0,0,0,.16577-.0611c.05473-.05082.67382-.67812.73287-.738l.69041.68819a.28978.28978,0,0,0,.21437.11032.53239.53239,0,0,0,.35708-.19486c.29792-.30419.14885-.46821.07676-.54751l-.69954-.69975.72952-.73469c.16-.17311.01874-.35708-.12218-.498-.20461-.20461-.402-.25742-.52855-.14083l-.7254.72665-.73354-.73375a.20128.20128,0,0,0-.14179-.05695.54135.54135,0,0,0-.34379.19648c-.22561.22555-.274.38149-.15656.5059l.73374.7315-.72942.73072A.26589.26589,0,0,0,11.59191,14.05782Zm1.59866-9.915A8.86081,8.86081,0,0,0,9.854,4.776a.26169.26169,0,0,0-.16938.22759.92978.92978,0,0,0,.08619.42094c.05682.14524.20779.531.50006.41955a8.40969,8.40969,0,0,1,2.91968-.55484,7.87875,7.87875,0,0,1,3.086.62286,8.61817,8.61817,0,0,1,2.30562,1.49315.2781.2781,0,0,0,.18318.07586c.15529,0,.30425-.15253.43167-.29551.21268-.23861.35873-.4369.1492-.63538a8.50425,8.50425,0,0,0-2.62312-1.694A9.0177,9.0177,0,0,0,13.19058,4.14283ZM19.50945,18.6236h0a.93171.93171,0,0,0-.36642-.25406.26589.26589,0,0,0-.27613.06613l-.06943.06929A7.90606,7.90606,0,0,1,7.60639,18.505a7.57284,7.57284,0,0,1-1.696-2.51537,8.58715,8.58715,0,0,1-.5147-1.77754l-.00871-.04864c-.04939-.25873-.28755-.27684-.62981-.22448-.14234.02178-.5755.088-.53426.39969l.001.00712a9.08807,9.08807,0,0,0,15.406,4.99094c.00193-.00192.04753-.04718.0725-.07436C19.79425,19.16234,19.87422,18.98728,19.50945,18.6236Z"
          />
        </symbol>
        <symbol id="icon-amazon" viewBox="0 0 24 24">
          <path
            d="M13.582,8.182C11.934,8.367,9.78,8.49,8.238,9.166c-1.781,0.769-3.03,2.337-3.03,4.644 c0,2.953,1.86,4.429,4.253,4.429c2.02,0,3.125-0.477,4.685-2.065c0.516,0.747,0.685,1.109,1.629,1.894 c0.212,0.114,0.483,0.103,0.672-0.066l0.006,0.006c0.567-0.505,1.599-1.401,2.18-1.888c0.231-0.188,0.19-0.496,0.009-0.754 c-0.52-0.718-1.072-1.303-1.072-2.634V8.305c0-1.876,0.133-3.599-1.249-4.891C15.23,2.369,13.422,2,12.04,2 C9.336,2,6.318,3.01,5.686,6.351C5.618,6.706,5.877,6.893,6.109,6.945l2.754,0.298C9.121,7.23,9.308,6.977,9.357,6.72 c0.236-1.151,1.2-1.706,2.284-1.706c0.584,0,1.249,0.215,1.595,0.738c0.398,0.584,0.346,1.384,0.346,2.061V8.182z M13.049,14.088 c-0.451,0.8-1.169,1.291-1.967,1.291c-1.09,0-1.728-0.83-1.728-2.061c0-2.42,2.171-2.86,4.227-2.86v0.615 C13.582,12.181,13.608,13.104,13.049,14.088z M20.683,19.339C18.329,21.076,14.917,22,11.979,22c-4.118,0-7.826-1.522-10.632-4.057 c-0.22-0.199-0.024-0.471,0.241-0.317c3.027,1.762,6.771,2.823,10.639,2.823c2.608,0,5.476-0.541,8.115-1.66 C20.739,18.62,21.072,19.051,20.683,19.339z M21.336,21.043c-0.194,0.163-0.379,0.076-0.293-0.139 c0.284-0.71,0.92-2.298,0.619-2.684c-0.301-0.386-1.99-0.183-2.749-0.092c-0.23,0.027-0.266-0.173-0.059-0.319 c1.348-0.946,3.555-0.673,3.811-0.356C22.925,17.773,22.599,19.986,21.336,21.043z"
          />
        </symbol>
        <symbol id="icon-apple" viewBox="0 0 24 24">
          <path
            d="M20.07,17.586a10.874,10.874,0,0,1-1.075,1.933,9.822,9.822,0,0,1-1.385,1.674,2.687,2.687,0,0,1-1.78.784,4.462,4.462,0,0,1-1.644-.393,4.718,4.718,0,0,0-1.77-.391,4.878,4.878,0,0,0-1.82.391A4.9,4.9,0,0,1,9.021,22a2.53,2.53,0,0,1-1.82-.8A10.314,10.314,0,0,1,5.752,19.46,11.987,11.987,0,0,1,4.22,16.417a11.143,11.143,0,0,1-.643-3.627,6.623,6.623,0,0,1,.87-3.465A5.1,5.1,0,0,1,6.268,7.483a4.9,4.9,0,0,1,2.463-.695,5.8,5.8,0,0,1,1.9.443,6.123,6.123,0,0,0,1.511.444,9.04,9.04,0,0,0,1.675-.523,5.537,5.537,0,0,1,2.277-.4,4.835,4.835,0,0,1,3.788,1.994,4.213,4.213,0,0,0-2.235,3.827,4.222,4.222,0,0,0,1.386,3.181,4.556,4.556,0,0,0,1.385.909q-.167.483-.353.927ZM16.211,2.4a4.267,4.267,0,0,1-1.094,2.8,3.726,3.726,0,0,1-3.1,1.528A3.114,3.114,0,0,1,12,6.347a4.384,4.384,0,0,1,1.16-2.828,4.467,4.467,0,0,1,1.414-1.061A4.215,4.215,0,0,1,16.19,2a3.633,3.633,0,0,1,.021.4Z"
          />
        </symbol>
        <symbol id="icon-bandcamp" viewBox="0 0 24 24">
          <path d="M15.27 17.289 3 17.289 8.73 6.711 21 6.711 15.27 17.289" />
        </symbol>
        <symbol id="icon-behance" viewBox="0 0 24 24">
          <path
            d="M7.799,5.698c0.589,0,1.12,0.051,1.606,0.156c0.482,0.102,0.894,0.273,1.241,0.507c0.344,0.235,0.612,0.546,0.804,0.938 c0.188,0.387,0.281,0.871,0.281,1.443c0,0.619-0.141,1.137-0.421,1.551c-0.284,0.413-0.7,0.751-1.255,1.014 c0.756,0.218,1.317,0.601,1.689,1.146c0.374,0.549,0.557,1.205,0.557,1.975c0,0.623-0.12,1.161-0.359,1.612 c-0.241,0.457-0.569,0.828-0.973,1.114c-0.408,0.288-0.876,0.5-1.399,0.637C9.052,17.931,8.514,18,7.963,18H2V5.698H7.799 M7.449,10.668c0.481,0,0.878-0.114,1.192-0.345c0.311-0.228,0.463-0.603,0.463-1.119c0-0.286-0.051-0.523-0.152-0.707 C8.848,8.315,8.711,8.171,8.536,8.07C8.362,7.966,8.166,7.894,7.94,7.854c-0.224-0.044-0.457-0.06-0.697-0.06H4.709v2.874H7.449z M7.6,15.905c0.267,0,0.521-0.024,0.759-0.077c0.243-0.053,0.457-0.137,0.637-0.261c0.182-0.12,0.332-0.283,0.441-0.491 C9.547,14.87,9.6,14.602,9.6,14.278c0-0.633-0.18-1.084-0.533-1.357c-0.356-0.27-0.83-0.404-1.413-0.404H4.709v3.388L7.6,15.905z M16.162,15.864c0.367,0.358,0.897,0.538,1.583,0.538c0.493,0,0.92-0.125,1.277-0.374c0.354-0.248,0.571-0.514,0.654-0.79h2.155 c-0.347,1.072-0.872,1.838-1.589,2.299C19.534,18,18.67,18.23,17.662,18.23c-0.701,0-1.332-0.113-1.899-0.337 c-0.567-0.227-1.041-0.544-1.439-0.958c-0.389-0.415-0.689-0.907-0.904-1.484c-0.213-0.574-0.32-1.21-0.32-1.899 c0-0.666,0.11-1.288,0.329-1.863c0.222-0.577,0.529-1.075,0.933-1.492c0.406-0.42,0.885-0.751,1.444-0.994 c0.558-0.241,1.175-0.363,1.857-0.363c0.754,0,1.414,0.145,1.98,0.44c0.563,0.291,1.026,0.686,1.389,1.181 c0.363,0.493,0.622,1.057,0.783,1.69c0.16,0.632,0.217,1.292,0.171,1.983h-6.428C15.557,14.84,15.795,15.506,16.162,15.864 M18.973,11.184c-0.291-0.321-0.783-0.496-1.384-0.496c-0.39,0-0.714,0.066-0.973,0.2c-0.254,0.132-0.461,0.297-0.621,0.491 c-0.157,0.197-0.265,0.405-0.328,0.628c-0.063,0.217-0.101,0.413-0.111,0.587h3.98C19.478,11.969,19.265,11.509,18.973,11.184z M15.057,7.738h4.985V6.524h-4.985L15.057,7.738z"
          />
        </symbol>
        <symbol id="icon-blogger" viewBox="0 0 24 24">
          <path
            d="M14.722,14.019c0,0.361-0.293,0.654-0.654,0.654H9.977c-0.361,0-0.654-0.293-0.654-0.654s0.293-0.654,0.654-0.654h4.091C14.429,13.365,14.722,13.658,14.722,14.019z M9.981,10.698h2.038c0.382,0,0.692-0.31,0.692-0.692c0-0.382-0.31-0.692-0.692-0.692H9.981c-0.382,0-0.692,0.31-0.692,0.692C9.289,10.388,9.599,10.698,9.981,10.698z M21,5v14c0,1.105-0.895,2-2,2H5c-1.105,0-2-0.895-2-2V5c0-1.105,0.895-2,2-2h14C20.105,3,21,3.895,21,5z M17.544,11.39c0-0.398-0.322-0.72-0.72-0.72h-0.607l-0.013,0.001c-0.38,0-0.692-0.295-0.718-0.668l-0.001-0.008c0-1.988-1.611-3.599-3.599-3.599h-1.816c-1.988,0-3.599,1.611-3.599,3.599v3.947c0,1.987,1.611,3.599,3.599,3.599h3.874c1.988,0,3.599-1.611,3.599-3.599L17.544,11.39z"
          />
        </symbol>
        <symbol id="icon-bluesky" viewBox="0 0 24 24">
          <path
            d="M21.2 3.3C20.7 3.1 19.8 2.8 17.6 4.3C15.4 6 12.9 9.2 12 11C11.1 9.2 8.6 6 6.3 4.3C4.1 2.7 3.3 3 2.7 3.3C2.1 3.6 2 4.6 2 5.1C2 5.6 2.3 9.8 2.5 10.5C3.2 12.8 5.6 13.6 7.8 13.3C4.5 13.8 1.6 15 5.4 19.2C9.6 23.5 11.1 18.3 11.9 15.6C12.7 18.3 13.6 23.3 18.3 19.2C21.9 15.6 19.3 13.8 16 13.3C18.2 13.5 20.6 12.8 21.3 10.5C21.7 9.8 22 5.7 22 5.1C22 4.6 21.9 3.6 21.2 3.3Z"
          />
        </symbol>
        <symbol id="icon-chain" viewBox="0 0 24 24">
          <path
            d="M19.647,16.706a1.134,1.134,0,0,0-.343-.833l-2.549-2.549a1.134,1.134,0,0,0-.833-.343,1.168,1.168,0,0,0-.883.392l.233.226q.2.189.264.264a2.922,2.922,0,0,1,.184.233.986.986,0,0,1,.159.312,1.242,1.242,0,0,1,.043.337,1.172,1.172,0,0,1-1.176,1.176,1.237,1.237,0,0,1-.337-.043,1,1,0,0,1-.312-.159,2.76,2.76,0,0,1-.233-.184q-.073-.068-.264-.264l-.226-.233a1.19,1.19,0,0,0-.4.895,1.134,1.134,0,0,0,.343.833L15.837,19.3a1.13,1.13,0,0,0,.833.331,1.18,1.18,0,0,0,.833-.318l1.8-1.789a1.12,1.12,0,0,0,.343-.821Zm-8.615-8.64a1.134,1.134,0,0,0-.343-.833L8.163,4.7a1.134,1.134,0,0,0-.833-.343,1.184,1.184,0,0,0-.833.331L4.7,6.473a1.12,1.12,0,0,0-.343.821,1.134,1.134,0,0,0,.343.833l2.549,2.549a1.13,1.13,0,0,0,.833.331,1.184,1.184,0,0,0,.883-.38L8.728,10.4q-.2-.189-.264-.264A2.922,2.922,0,0,1,8.28,9.9a.986.986,0,0,1-.159-.312,1.242,1.242,0,0,1-.043-.337A1.172,1.172,0,0,1,9.254,8.079a1.237,1.237,0,0,1,.337.043,1,1,0,0,1,.312.159,2.761,2.761,0,0,1,.233.184q.073.068.264.264l.226.233a1.19,1.19,0,0,0,.4-.895ZM22,16.706a3.343,3.343,0,0,1-1.042,2.488l-1.8,1.789a3.536,3.536,0,0,1-4.988-.025l-2.525-2.537a3.384,3.384,0,0,1-1.017-2.488,3.448,3.448,0,0,1,1.078-2.561l-1.078-1.078a3.434,3.434,0,0,1-2.549,1.078,3.4,3.4,0,0,1-2.5-1.029L3.029,9.794A3.4,3.4,0,0,1,2,7.294,3.343,3.343,0,0,1,3.042,4.806l1.8-1.789A3.384,3.384,0,0,1,7.331,2a3.357,3.357,0,0,1,2.5,1.042l2.525,2.537a3.384,3.384,0,0,1,1.017,2.488,3.448,3.448,0,0,1-1.078,2.561l1.078,1.078a3.551,3.551,0,0,1,5.049-.049l2.549,2.549A3.4,3.4,0,0,1,22,16.706Z"
          />
        </symbol>
        <symbol id="icon-codepen" viewBox="0 0 24 24">
          <path
            d="M22.016,8.84c-0.002-0.013-0.005-0.025-0.007-0.037c-0.005-0.025-0.008-0.048-0.015-0.072 c-0.003-0.015-0.01-0.028-0.013-0.042c-0.008-0.02-0.015-0.04-0.023-0.062c-0.007-0.015-0.013-0.028-0.02-0.042 c-0.008-0.02-0.018-0.037-0.03-0.057c-0.007-0.013-0.017-0.027-0.025-0.038c-0.012-0.018-0.023-0.035-0.035-0.052 c-0.01-0.013-0.02-0.025-0.03-0.037c-0.015-0.017-0.028-0.032-0.043-0.045c-0.01-0.012-0.022-0.023-0.035-0.035 c-0.015-0.015-0.032-0.028-0.048-0.04c-0.012-0.01-0.025-0.02-0.037-0.03c-0.005-0.003-0.01-0.008-0.015-0.012l-9.161-6.096 c-0.289-0.192-0.666-0.192-0.955,0L2.359,8.237C2.354,8.24,2.349,8.245,2.344,8.249L2.306,8.277 c-0.017,0.013-0.033,0.027-0.048,0.04C2.246,8.331,2.234,8.342,2.222,8.352c-0.015,0.015-0.028,0.03-0.042,0.047 c-0.012,0.013-0.022,0.023-0.03,0.037C2.139,8.453,2.125,8.471,2.115,8.488C2.107,8.501,2.099,8.514,2.09,8.526 C2.079,8.548,2.069,8.565,2.06,8.585C2.054,8.6,2.047,8.613,2.04,8.626C2.032,8.648,2.025,8.67,2.019,8.69 c-0.005,0.013-0.01,0.027-0.013,0.042C1.999,8.755,1.995,8.778,1.99,8.803C1.989,8.817,1.985,8.828,1.984,8.84 C1.978,8.879,1.975,8.915,1.975,8.954v6.093c0,0.037,0.003,0.075,0.008,0.112c0.002,0.012,0.005,0.025,0.007,0.038 c0.005,0.023,0.008,0.047,0.015,0.072c0.003,0.015,0.008,0.028,0.013,0.04c0.007,0.022,0.013,0.042,0.022,0.063 c0.007,0.015,0.013,0.028,0.02,0.04c0.008,0.02,0.018,0.038,0.03,0.058c0.007,0.013,0.015,0.027,0.025,0.038 c0.012,0.018,0.023,0.035,0.035,0.052c0.01,0.013,0.02,0.025,0.03,0.037c0.013,0.015,0.028,0.032,0.042,0.045 c0.012,0.012,0.023,0.023,0.035,0.035c0.015,0.013,0.032,0.028,0.048,0.04l0.038,0.03c0.005,0.003,0.01,0.007,0.013,0.01 l9.163,6.095C11.668,21.953,11.833,22,12,22c0.167,0,0.332-0.047,0.478-0.144l9.163-6.095l0.015-0.01 c0.013-0.01,0.027-0.02,0.037-0.03c0.018-0.013,0.035-0.028,0.048-0.04c0.013-0.012,0.025-0.023,0.035-0.035 c0.017-0.015,0.03-0.032,0.043-0.045c0.01-0.013,0.02-0.025,0.03-0.037c0.013-0.018,0.025-0.035,0.035-0.052 c0.008-0.013,0.018-0.027,0.025-0.038c0.012-0.02,0.022-0.038,0.03-0.058c0.007-0.013,0.013-0.027,0.02-0.04 c0.008-0.022,0.015-0.042,0.023-0.063c0.003-0.013,0.01-0.027,0.013-0.04c0.007-0.025,0.01-0.048,0.015-0.072 c0.002-0.013,0.005-0.027,0.007-0.037c0.003-0.042,0.007-0.079,0.007-0.117V8.954C22.025,8.915,22.022,8.879,22.016,8.84z M12.862,4.464l6.751,4.49l-3.016,2.013l-3.735-2.492V4.464z M11.138,4.464v4.009l-3.735,2.494L4.389,8.954L11.138,4.464z M3.699,10.562L5.853,12l-2.155,1.438V10.562z M11.138,19.536l-6.749-4.491l3.015-2.011l3.735,2.492V19.536z M12,14.035L8.953,12 L12,9.966L15.047,12L12,14.035z M12.862,19.536v-4.009l3.735-2.492l3.016,2.011L12.862,19.536z M20.303,13.438L18.147,12 l2.156-1.438L20.303,13.438z"
          />
        </symbol>
        <symbol id="icon-deviantart" viewBox="0 0 24 24">
          <path
            d="M 18.19 5.636 18.19 2 18.188 2 14.553 2 14.19 2.366 12.474 5.636 11.935 6 5.81 6 5.81 10.994 9.177 10.994 9.477 11.357 5.81 18.363 5.81 22 5.811 22 9.447 22 9.81 21.634 11.526 18.364 12.065 18 18.19 18 18.19 13.006 14.823 13.006 14.523 12.641 18.19 5.636z"
          />
        </symbol>
        <symbol id="icon-digg" viewBox="0 0 24 24">
          <path
            d="M4.5,5.4h2.2V16H1V8.5h3.5V5.4L4.5,5.4z M4.5,14.2v-4H3.2v4H4.5z M7.6,8.5V16h2.2V8.5C9.8,8.5,7.6,8.5,7.6,8.5z M7.6,5.4 v2.2h2.2V5.4C9.8,5.4,7.6,5.4,7.6,5.4z M10.7,8.5h5.7v10.1h-5.7v-1.8h3.5V16h-3.5C10.7,16,10.7,8.5,10.7,8.5z M14.2,14.2v-4h-1.3v4 H14.2z M17.3,8.5H23v10.1h-5.7v-1.8h3.5V16h-3.5C17.3,16,17.3,8.5,17.3,8.5z M20.8,14.2v-4h-1.3v4H20.8z"
          />
        </symbol>
        <symbol id="icon-discord" viewBox="0 0 24 24">
          <path
            d="M10.227 9.957c-.559 0-1 .48-1 1.063 0 .585.453 1.066 1 1.066.558 0 1-.48 1-1.066.007-.582-.442-1.063-1-1.063zm3.574 0c-.559 0-.996.48-.996 1.063 0 .585.449 1.066.996 1.066.558 0 1-.48 1-1.066 0-.582-.442-1.063-1-1.063zm0 0 M18.563 1.918H5.438c-1.11 0-2.008.879-2.008 1.973v12.957c0 1.093.898 1.972 2.007 1.972h11.11l-.52-1.773 1.254 1.14 1.184 1.075 2.105 1.82V3.891c0-1.094-.898-1.973-2.008-1.973zM14.78 14.434s-.351-.414-.644-.778c1.281-.355 1.773-1.14 1.773-1.14a5.745 5.745 0 0 1-1.129.566c-.488.2-.96.336-1.418.41a7.07 7.07 0 0 1-2.539-.008 8.133 8.133 0 0 1-1.441-.414 6.219 6.219 0 0 1-.715-.324c-.027-.02-.059-.027-.086-.047a.113.113 0 0 1-.039-.031c-.176-.094-.273-.16-.273-.16s.468.765 1.71 1.129c-.293.363-.656.797-.656.797-2.164-.067-2.984-1.457-2.984-1.457 0-3.086 1.41-5.586 1.41-5.586 1.41-1.036 2.75-1.008 2.75-1.008l.098.113c-1.762.5-2.575 1.258-2.575 1.258s.215-.117.579-.277c1.046-.454 1.878-.579 2.222-.606.059-.008.11-.02.168-.02a8.728 8.728 0 0 1 1.977-.019c.933.106 1.93.375 2.949.922 0 0-.773-.719-2.438-1.219l.137-.152s1.34-.028 2.75 1.008c0 0 1.414 2.5 1.414 5.586 0 0-.836 1.39-3 1.457zm0 0"
          />
        </symbol>
        <symbol id="icon-dribbble" viewBox="0 0 24 24">
          <path
            d="M12,22C6.486,22,2,17.514,2,12S6.486,2,12,2c5.514,0,10,4.486,10,10S17.514,22,12,22z M20.434,13.369 c-0.292-0.092-2.644-0.794-5.32-0.365c1.117,3.07,1.572,5.57,1.659,6.09C18.689,17.798,20.053,15.745,20.434,13.369z M15.336,19.876c-0.127-0.749-0.623-3.361-1.822-6.477c-0.019,0.006-0.038,0.013-0.056,0.019c-4.818,1.679-6.547,5.02-6.701,5.334 c1.448,1.129,3.268,1.803,5.243,1.803C13.183,20.555,14.311,20.313,15.336,19.876z M5.654,17.724 c0.193-0.331,2.538-4.213,6.943-5.637c0.111-0.036,0.224-0.07,0.337-0.102c-0.214-0.485-0.448-0.971-0.692-1.45 c-4.266,1.277-8.405,1.223-8.778,1.216c-0.003,0.087-0.004,0.174-0.004,0.261C3.458,14.207,4.29,16.21,5.654,17.724z M3.639,10.264 c0.382,0.005,3.901,0.02,7.897-1.041c-1.415-2.516-2.942-4.631-3.167-4.94C5.979,5.41,4.193,7.613,3.639,10.264z M9.998,3.709 c0.236,0.316,1.787,2.429,3.187,5c3.037-1.138,4.323-2.867,4.477-3.085C16.154,4.286,14.17,3.471,12,3.471 C11.311,3.471,10.641,3.554,9.998,3.709z M18.612,6.612C18.432,6.855,17,8.69,13.842,9.979c0.199,0.407,0.389,0.821,0.567,1.237 c0.063,0.148,0.124,0.295,0.184,0.441c2.842-0.357,5.666,0.215,5.948,0.275C20.522,9.916,19.801,8.065,18.612,6.612z"
          />
        </symbol>
        <symbol id="icon-dropbox" viewBox="0 0 24 24">
          <path
            d="M12,6.134L6.069,9.797L2,6.54l5.883-3.843L12,6.134z M2,13.054l5.883,3.843L12,13.459L6.069,9.797L2,13.054z M12,13.459 l4.116,3.439L22,13.054l-4.069-3.257L12,13.459z M22,6.54l-5.884-3.843L12,6.134l5.931,3.663L22,6.54z M12.011,14.2l-4.129,3.426 l-1.767-1.153v1.291l5.896,3.539l5.897-3.539v-1.291l-1.769,1.153L12.011,14.2z"
          />
        </symbol>
        <symbol id="icon-etsy" viewBox="0 0 24 24">
          <path
            d="M9.16033,4.038c0-.27174.02717-.43478.48913-.43478h6.22283c1.087,0,1.68478.92391,2.11957,2.663l.35326,1.38587h1.05978C19.59511,3.712,19.75815,2,19.75815,2s-2.663.29891-4.23913.29891h-7.962L3.29076,2.163v1.1413L4.731,3.57609c1.00543.19022,1.25.40761,1.33152,1.33152,0,0,.08152,2.71739.08152,7.20109s-.08152,7.17391-.08152,7.17391c0,.81522-.32609,1.11413-1.33152,1.30435l-1.44022.27174V22l4.2663-.13587h7.11957c1.60326,0,5.32609.13587,5.32609.13587.08152-.97826.625-5.40761.70652-5.89674H19.7038L18.644,18.52174c-.84239,1.90217-2.06522,2.038-3.42391,2.038H11.1712c-1.3587,0-2.01087-.54348-2.01087-1.712V12.65217s3.0163,0,3.99457.08152c.76087.05435,1.22283.27174,1.46739,1.33152l.32609,1.413h1.16848l-.08152-3.55978.163-3.587H15.02989l-.38043,1.57609c-.24457,1.03261-.40761,1.22283-1.46739,1.33152-1.38587.13587-4.02174.1087-4.02174.1087Z"
          />
        </symbol>
        <symbol id="icon-eventbrite" viewBox="0 0 24 24">
          <path
            style="fill-rule: evenodd; clip-rule: evenodd"
            d="M18.041,3.931L5.959,3C4.325,3,3,4.325,3,5.959v12.083C3,19.675,4.325,21,5.959,21l12.083-0.931C19.699,19.983,21,18.744,21,17.11V6.89C21,5.256,19.741,4.027,18.041,3.931zM16.933,8.17c-0.082,0.215-0.192,0.432-0.378,0.551c-0.188,0.122-0.489,0.132-0.799,0.132c-1.521,0-3.062-0.048-4.607-0.048c-0.152,0.708-0.304,1.416-0.451,2.128c0.932-0.004,1.873,0.005,2.81,0.005c0.726,0,1.462-0.069,1.586,0.525c0.04,0.189-0.001,0.426-0.052,0.615c-0.105,0.38-0.258,0.676-0.625,0.783c-0.185,0.054-0.408,0.058-0.646,0.058c-1.145,0-2.345,0.017-3.493,0.02c-0.169,0.772-0.328,1.553-0.489,2.333c1.57-0.005,3.067-0.041,4.633-0.058c0.627-0.007,1.085,0.194,1.009,0.85c-0.031,0.262-0.098,0.497-0.211,0.725c-0.102,0.208-0.248,0.376-0.488,0.452c-0.237,0.075-0.541,0.064-0.862,0.078c-0.304,0.014-0.614,0.008-0.924,0.016c-0.309,0.009-0.619,0.022-0.919,0.022c-1.253,0-2.429,0.08-3.683,0.073c-0.603-0.004-1.014-0.249-1.124-0.757c-0.059-0.273-0.018-0.58,0.036-0.841c0.541-2.592,1.083-5.176,1.629-7.763c0.056-0.265,0.114-0.511,0.225-0.714C9.279,7.051,9.534,6.834,9.9,6.735c0.368-0.099,0.883-0.047,1.344-0.047c0.305,0,0.612,0.008,0.914,0.016c0.925,0.026,1.817,0.03,2.747,0.053c0.304,0.007,0.615,0.016,0.915,0.016c0.621,0,1.17,0.073,1.245,0.614C17.104,7.675,17.014,7.954,16.933,8.17z"
          />
        </symbol>
        <symbol id="icon-facebook" viewBox="0 0 24 24">
          <path
            d="M12,2C6.5,2,2,6.5,2,12c0,5,3.7,9.1,8.4,9.9v-7H7.9V12h2.5V9.8c0-2.5,1.5-3.9,3.8-3.9c1.1,0,2.2,0.2,2.2,0.2v2.5h-1.3 c-1.2,0-1.6,0.8-1.6,1.6V12h2.8l-0.4,2.9h-2.3v7C18.3,21.1,22,17,22,12C22,6.5,17.5,2,12,2z"
          />
        </symbol>
        <symbol id="icon-feed" viewBox="0 0 24 24">
          <path
            d="M2,8.667V12c5.515,0,10,4.485,10,10h3.333C15.333,14.637,9.363,8.667,2,8.667z M2,2v3.333 c9.19,0,16.667,7.477,16.667,16.667H22C22,10.955,13.045,2,2,2z M4.5,17C3.118,17,2,18.12,2,19.5S3.118,22,4.5,22S7,20.88,7,19.5 S5.882,17,4.5,17z"
          />
        </symbol>
        <symbol id="icon-fediverse" viewBox="0 0 24 24">
          <path
            d="M5.85081 8.88733C5.63868 9.29358 5.30628 9.62442 4.89905 9.83466L10.1241 15.0801L11.3838 14.4417L5.85081 8.88733ZM12.7428 15.8059L11.4831 16.4443L14.1306 19.1022C14.3428 18.6958 14.6752 18.3649 15.0825 18.1547L12.7428 15.8059ZM18.788 10.9628L15.83 12.4619L16.0481 13.857L19.3951 12.1608C19.0742 11.8335 18.8622 11.4151 18.788 10.9628ZM14.1128 13.3322L7.11871 16.8768C7.43963 17.2041 7.65166 17.6225 7.72582 18.0748L14.3309 14.7273L14.1128 13.3322ZM11.8635 4.60095L8.48868 11.1895L9.48512 12.1898L13.0584 5.21403C12.6065 5.13759 12.1892 4.92348 11.8635 4.60095ZM7.61092 12.9031L5.90146 16.2403C6.35333 16.3168 6.77058 16.5309 7.0962 16.8534L8.60729 13.9033L7.61092 12.9031ZM4.87004 9.8493C4.52582 10.0216 4.14278 10.1017 3.75836 10.0817C3.68642 10.0777 3.61473 10.0702 3.54352 10.0593L4.54173 16.444C4.88595 16.2717 5.26899 16.1916 5.65342 16.2116C5.7253 16.2156 5.79694 16.2231 5.86809 16.2341L4.87004 9.8493ZM7.73111 18.1064C7.75395 18.2547 7.76177 18.4049 7.75437 18.5547C7.73734 18.8604 7.65743 19.1592 7.51964 19.4326L13.9033 20.457C13.8805 20.3087 13.8727 20.1585 13.88 20.0087C13.897 19.703 13.977 19.4042 14.1148 19.1308L7.73111 18.1064ZM19.4175 12.1841L16.471 17.9364C16.923 18.0128 17.3403 18.227 17.666 18.5496L20.6124 12.7973C20.1604 12.7208 19.7431 12.5067 19.4175 12.1841ZM15.3989 4.04834C15.1867 4.45466 14.8542 4.78556 14.4469 4.99581L19.01 9.57651C19.2221 9.17019 19.5546 8.83929 19.9619 8.62904L15.3989 4.04834ZM11.234 3.37973L5.46578 6.30295C5.78666 6.63022 5.99866 7.04859 6.07282 7.50088L11.841 4.57753C11.5202 4.25029 11.3082 3.83197 11.234 3.37973ZM14.4364 5.0011C14.0876 5.17976 13.6978 5.26314 13.3064 5.24282C13.2412 5.23884 13.1762 5.23202 13.1116 5.22237L13.6226 8.49422L15.0168 8.71794L14.4364 5.0011ZM13.9196 10.3964L15.1276 18.132C15.4678 17.9652 15.8448 17.888 16.2231 17.9077C16.3011 17.9121 16.3788 17.9207 16.4559 17.9333L15.3138 10.62L13.9196 10.3964ZM6.07692 7.52543C6.10063 7.67596 6.10884 7.82852 6.10141 7.98072C6.08459 8.28399 6.00588 8.5806 5.87013 8.85231L9.1445 9.37821L9.78804 8.12143L6.07692 7.52543ZM11.6889 8.42664L11.0452 9.68356L18.7819 10.9261C18.7596 10.7795 18.7521 10.631 18.7594 10.483C18.7766 10.1755 18.8575 9.87496 18.9968 9.60035L11.6889 8.42664Z"
          />
          <path
            d="M13.3174 5.04077C14.433 5.10157 15.3867 4.24642 15.4474 3.13079C15.5082 2.01516 14.6531 1.06149 13.5374 1.00073C12.4218 0.93994 11.4682 1.79509 11.4074 2.91072C11.3466 4.02635 12.2018 4.98002 13.3174 5.04077ZM20.8714 12.6241C21.987 12.6848 22.9407 11.8297 23.0015 10.714C23.0623 9.59842 22.2071 8.64478 21.0915 8.58399C19.9759 8.52323 19.0222 9.37838 18.9614 10.494C18.9006 11.6096 19.7558 12.5633 20.8714 12.6241ZM15.992 22.1497C17.1076 22.2105 18.0613 21.3554 18.1221 20.2398C18.1828 19.1241 17.3277 18.1705 16.2121 18.1097C15.0965 18.0489 14.1428 18.9041 14.082 20.0197C14.0212 21.1353 14.8764 22.089 15.992 22.1497ZM5.42232 20.4537C6.53795 20.5144 7.49162 19.6593 7.55238 18.5437C7.61317 17.428 6.75802 16.4744 5.64239 16.4136C4.52677 16.3529 3.5731 17.208 3.51234 18.3236C3.45158 19.4392 4.3067 20.3929 5.42232 20.4537ZM3.76933 9.87973C4.88496 9.94052 5.83863 9.08537 5.89938 7.96974C5.96014 6.85411 5.10503 5.90045 3.98937 5.83969C2.87374 5.77893 1.9201 6.63405 1.85931 7.74967C1.79855 8.8653 2.6537 9.81897 3.76933 9.87973Z"
          />
        </symbol>
        <symbol id="icon-flickr" viewBox="0 0 24 24">
          <path
            d="M6.5,7c-2.75,0-5,2.25-5,5s2.25,5,5,5s5-2.25,5-5S9.25,7,6.5,7z M17.5,7c-2.75,0-5,2.25-5,5s2.25,5,5,5s5-2.25,5-5 S20.25,7,17.5,7z"
          />
        </symbol>
        <symbol id="icon-foursquare" viewBox="0 0 24 24">
          <path
            d="M17.573,2c0,0-9.197,0-10.668,0S5,3.107,5,3.805s0,16.948,0,16.948c0,0.785,0.422,1.077,0.66,1.172 c0.238,0.097,0.892,0.177,1.285-0.275c0,0,5.035-5.843,5.122-5.93c0.132-0.132,0.132-0.132,0.262-0.132h3.26 c1.368,0,1.588-0.977,1.732-1.552c0.078-0.318,0.692-3.428,1.225-6.122l0.675-3.368C19.56,2.893,19.14,2,17.573,2z M16.495,7.22 c-0.053,0.252-0.372,0.518-0.665,0.518c-0.293,0-4.157,0-4.157,0c-0.467,0-0.802,0.318-0.802,0.787v0.508 c0,0.467,0.337,0.798,0.805,0.798c0,0,3.197,0,3.528,0s0.655,0.362,0.583,0.715c-0.072,0.353-0.407,2.102-0.448,2.295 c-0.04,0.193-0.262,0.523-0.655,0.523c-0.33,0-2.88,0-2.88,0c-0.523,0-0.683,0.068-1.033,0.503 c-0.35,0.437-3.505,4.223-3.505,4.223c-0.032,0.035-0.063,0.027-0.063-0.015V4.852c0-0.298,0.26-0.648,0.648-0.648 c0,0,8.228,0,8.562,0c0.315,0,0.61,0.297,0.528,0.683L16.495,7.22z"
          />
        </symbol>
        <symbol id="icon-ghost" viewBox="0 0 24 24">
          <path
            d="M10.203,20.997H3.005v-3.599h7.198V20.997z M20.995,17.398h-7.193v3.599h7.193V17.398z M20.998,10.2H3v3.599h17.998V10.2zM13.803,3.003H3.005v3.599h10.798V3.003z M21,3.003h-3.599v3.599H21V3.003z"
          />
        </symbol>
        <symbol id="icon-goodreads" viewBox="0 0 24 24">
          <path
            d="M17.3,17.5c-0.2,0.8-0.5,1.4-1,1.9c-0.4,0.5-1,0.9-1.7,1.2C13.9,20.9,13.1,21,12,21c-0.6,0-1.3-0.1-1.9-0.2 c-0.6-0.1-1.1-0.4-1.6-0.7c-0.5-0.3-0.9-0.7-1.2-1.2c-0.3-0.5-0.5-1.1-0.5-1.7h1.5c0.1,0.5,0.2,0.9,0.5,1.2 c0.2,0.3,0.5,0.6,0.9,0.8c0.3,0.2,0.7,0.3,1.1,0.4c0.4,0.1,0.8,0.1,1.2,0.1c1.4,0,2.5-0.4,3.1-1.2c0.6-0.8,1-2,1-3.5v-1.7h0 c-0.4,0.8-0.9,1.4-1.6,1.9c-0.7,0.5-1.5,0.7-2.4,0.7c-1,0-1.9-0.2-2.6-0.5C8.7,15,8.1,14.5,7.7,14c-0.5-0.6-0.8-1.3-1-2.1 c-0.2-0.8-0.3-1.6-0.3-2.5c0-0.9,0.1-1.7,0.4-2.5c0.3-0.8,0.6-1.5,1.1-2c0.5-0.6,1.1-1,1.8-1.4C10.3,3.2,11.1,3,12,3 c0.5,0,0.9,0.1,1.3,0.2c0.4,0.1,0.8,0.3,1.1,0.5c0.3,0.2,0.6,0.5,0.9,0.8c0.3,0.3,0.5,0.6,0.6,1h0V3.4h1.5V15 C17.6,15.9,17.5,16.7,17.3,17.5z M13.8,14.1c0.5-0.3,0.9-0.7,1.3-1.1c0.3-0.5,0.6-1,0.8-1.6c0.2-0.6,0.3-1.2,0.3-1.9 c0-0.6-0.1-1.2-0.2-1.9c-0.1-0.6-0.4-1.2-0.7-1.7c-0.3-0.5-0.7-0.9-1.3-1.2c-0.5-0.3-1.1-0.5-1.9-0.5s-1.4,0.2-1.9,0.5 c-0.5,0.3-1,0.7-1.3,1.2C8.5,6.4,8.3,7,8.1,7.6C8,8.2,7.9,8.9,7.9,9.5c0,0.6,0.1,1.3,0.2,1.9C8.3,12,8.6,12.5,8.9,13 c0.3,0.5,0.8,0.8,1.3,1.1c0.5,0.3,1.1,0.4,1.9,0.4C12.7,14.5,13.3,14.4,13.8,14.1z"
          />
        </symbol>
        <symbol id="icon-google" viewBox="0 0 24 24">
          <path
            d="M12.02,10.18v3.72v0.01h5.51c-0.26,1.57-1.67,4.22-5.5,4.22c-3.31,0-6.01-2.75-6.01-6.12s2.7-6.12,6.01-6.12 c1.87,0,3.13,0.8,3.85,1.48l2.84-2.76C16.99,2.99,14.73,2,12.03,2c-5.52,0-10,4.48-10,10s4.48,10,10,10c5.77,0,9.6-4.06,9.6-9.77 c0-0.83-0.11-1.42-0.25-2.05H12.02z"
          />
        </symbol>
        <symbol id="icon-github" viewBox="0 0 24 24">
          <path
            d="M12,2C6.477,2,2,6.477,2,12c0,4.419,2.865,8.166,6.839,9.489c0.5,0.09,0.682-0.218,0.682-0.484 c0-0.236-0.009-0.866-0.014-1.699c-2.782,0.602-3.369-1.34-3.369-1.34c-0.455-1.157-1.11-1.465-1.11-1.465 c-0.909-0.62,0.069-0.608,0.069-0.608c1.004,0.071,1.532,1.03,1.532,1.03c0.891,1.529,2.341,1.089,2.91,0.833
c0.091-0.647,0.349-1.086,0.635-1.337c-2.22-0.251-4.555-1.111-4.555-4.943c0-1.091,0.39-1.984,1.03-2.682 C6.546,8.54,6.202,7.524,6.746,6.148c0,0,0.84-0.269,2.75,1.025C10.295,6.95,11.15,6.84,12,6.836 c0.85,0.004,1.705,0.114,2.504,0.336c1.909-1.294,2.748-1.025,2.748-1.025c0.546,1.376,0.202,2.394,0.1,2.646 c0.64,0.699,1.026,1.591,1.026,2.682c0,3.841-2.337,4.687-4.565,4.935c0.359,0.307,0.679,0.917,0.679,1.852 c0,1.335-0.012,2.415-0.012,2.741c0,0.269,0.18,0.579,0.688,0.481C19.138,20.161,22,16.416,22,12C22,6.477,17.523,2,12,2z"
          />
        </symbol>
        <symbol id="icon-instagram" viewBox="0 0 24 24">
          <path
            d="M12,4.622c2.403,0,2.688,0.009,3.637,0.052c0.877,0.04,1.354,0.187,1.671,0.31c0.42,0.163,0.72,0.358,1.035,0.673 c0.315,0.315,0.51,0.615,0.673,1.035c0.123,0.317,0.27,0.794,0.31,1.671c0.043,0.949,0.052,1.234,0.052,3.637 s-0.009,2.688-0.052,3.637c-0.04,0.877-0.187,1.354-0.31,1.671c-0.163,0.42-0.358,0.72-0.673,1.035 c-0.315,0.315-0.615,0.51-1.035,0.673c-0.317,0.123-0.794,0.27-1.671,0.31c-0.949,0.043-1.233,0.052-3.637,0.052 s-2.688-0.009-3.637-0.052c-0.877-0.04-1.354-0.187-1.671-0.31c-0.42-0.163-0.72-0.358-1.035-0.673 c-0.315-0.315-0.51-0.615-0.673-1.035c-0.123-0.317-0.27-0.794-0.31-1.671C4.631,14.688,4.622,14.403,4.622,12 s0.009-2.688,0.052-3.637c0.04-0.877,0.187-1.354,0.31-1.671c0.163-0.42,0.358-0.72,0.673-1.035 c0.315-0.315,0.615-0.51,1.035-0.673c0.317-0.123,0.794-0.27,1.671-0.31C9.312,4.631,9.597,4.622,12,4.622 M12,3 C9.556,3,9.249,3.01,8.289,3.054C7.331,3.098,6.677,3.25,6.105,3.472C5.513,3.702,5.011,4.01,4.511,4.511 c-0.5,0.5-0.808,1.002-1.038,1.594C3.25,6.677,3.098,7.331,3.054,8.289C3.01,9.249,3,9.556,3,12c0,2.444,0.01,2.751,0.054,3.711 c0.044,0.958,0.196,1.612,0.418,2.185c0.23,0.592,0.538,1.094,1.038,1.594c0.5,0.5,1.002,0.808,1.594,1.038 c0.572,0.222,1.227,0.375,2.185,0.418C9.249,20.99,9.556,21,12,21s2.751-0.01,3.711-0.054c0.958-0.044,1.612-0.196,2.185-0.418 c0.592-0.23,1.094-0.538,1.594-1.038c0.5-0.5,0.808-1.002,1.038-1.594c0.222-0.572,0.375-1.227,0.418-2.185 C20.99,14.751,21,14.444,21,12s-0.01-2.751-0.054-3.711c-0.044-0.958-0.196-1.612-0.418-2.185c-0.23-0.592-0.538-1.094-1.038-1.594 c-0.5-0.5-1.002-0.808-1.594-1.038c-0.572-0.222-1.227-0.375-2.185-0.418C14.751,3.01,14.444,3,12,3L12,3z M12,7.378 c-2.552,0-4.622,2.069-4.622,4.622S9.448,16.622,12,16.622s4.622-2.069,4.622-4.622S14.552,7.378,12,7.378z M12,15 c-1.657,0-3-1.343-3-3s1.343-3,3-3s3,1.343,3,3S13.657,15,12,15z M16.804,6.116c-0.596,0-1.08,0.484-1.08,1.08 s0.484,1.08,1.08,1.08c0.596,0,1.08-0.484,1.08-1.08S17.401,6.116,16.804,6.116z"
          />
        </symbol>
        <symbol id="icon-linkedin" viewBox="0 0 24 24">
          <path
            d="M19.7,3H4.3C3.582,3,3,3.582,3,4.3v15.4C3,20.418,3.582,21,4.3,21h15.4c0.718,0,1.3-0.582,1.3-1.3V4.3 C21,3.582,20.418,3,19.7,3z M8.339,18.338H5.667v-8.59h2.672V18.338z M7.004,8.574c-0.857,0-1.549-0.694-1.549-1.548 c0-0.855,0.691-1.548,1.549-1.548c0.854,0,1.547,0.694,1.547,1.548C8.551,7.881,7.858,8.574,7.004,8.574z M18.339,18.338h-2.669 v-4.177c0-0.996-0.017-2.278-1.387-2.278c-1.389,0-1.601,1.086-1.601,2.206v4.249h-2.667v-8.59h2.559v1.174h0.037 c0.356-0.675,1.227-1.387,2.526-1.387c2.703,0,3.203,1.779,3.203,4.092V18.338z"
          />
        </symbol>
        <symbol id="icon-mail" viewBox="0 0 24 24">
          <path
            d="M20,4H4C2.895,4,2,4.895,2,6v12c0,1.105,0.895,2,2,2h16c1.105,0,2-0.895,2-2V6C22,4.895,21.105,4,20,4z M20,8.236l-8,4.882 L4,8.236V6h16V8.236z"
          />
        </symbol>
        <symbol id="icon-mastodon" viewBox="0 0 24 24">
          <path
            style="fill-rule: evenodd"
            d="M20.617 13.92c-.265 1.36-2.37 2.85-4.788 3.14-1.262.15-2.503.288-3.827.228-2.165-.1-3.873-.517-3.873-.517 0 .212.013.412.04.6.28 2.136 2.118 2.264 3.858 2.324 1.756.06 3.32-.433 3.32-.433l.072 1.59s-1.228.658-3.417.78c-1.207.066-2.705-.03-4.45-.493-3.785-1-4.436-5.036-4.536-9.13-.03-1.215-.01-2.36-.01-3.32 0-4.186 2.74-5.413 2.74-5.413 1.384-.635 3.757-.902 6.225-.923h.06c2.467.022 4.842.29 6.225.924 0 0 2.742 1.227 2.742 5.413 0 0 .034 3.09-.383 5.233zm-2.854-4.91v5.07h-2.008V9.16c0-1.037-.436-1.563-1.31-1.563-.964 0-1.447.624-1.447 1.86v2.692h-1.996V9.455c0-1.235-.484-1.86-1.45-1.86-.872 0-1.308.527-1.308 1.564v4.92H6.236V9.01c0-1.034.263-1.858.793-2.467.546-.61 1.26-.92 2.15-.92 1.027 0 1.805.394 2.32 1.184l.5.84.5-.84c.514-.79 1.292-1.185 2.32-1.185.888 0 1.604.312 2.15.92.53.61.793 1.434.793 2.47z"
          />
        </symbol>
        <symbol id="icon-meetup" viewBox="0 0 24 24">
          <path
            d="M19.24775,14.722a3.57032,3.57032,0,0,1-2.94457,3.52073,3.61886,3.61886,0,0,1-.64652.05634c-.07314-.0008-.10187.02846-.12507.09547A2.38881,2.38881,0,0,1,13.49453,20.094a2.33092,2.33092,0,0,1-1.827-.50716.13635.13635,0,0,0-.19878-.00408,3.191,3.191,0,0,1-2.104.60248,3.26309,3.26309,0,0,1-3.00324-2.71993,2.19076,2.19076,0,0,1-.03512-.30865c-.00156-.08579-.03413-.1189-.11608-.13493a2.86421,2.86421,0,0,1-1.23189-.56111,2.945,2.945,0,0,1-1.166-2.05749,2.97484,2.97484,0,0,1,.87524-2.50774.112.112,0,0,0,.02091-.16107,2.7213,2.7213,0,0,1-.36648-1.48A2.81256,2.81256,0,0,1,6.57673,7.58838a.35764.35764,0,0,0,.28869-.22819,4.2208,4.2208,0,0,1,6.02892-1.90111.25161.25161,0,0,0,.22023.0243,3.65608,3.65608,0,0,1,3.76031.90678A3.57244,3.57244,0,0,1,17.95918,8.626a2.97339,2.97339,0,0,1,.01829.57356.10637.10637,0,0,0,.0853.12792,1.97669,1.97669,0,0,1,1.27939,1.33733,2.00266,2.00266,0,0,1-.57112,2.12652c-.05284.05166-.04168.08328-.01173.13489A3.51189,3.51189,0,0,1,19.24775,14.722Zm-6.35959-.27836a1.6984,1.6984,0,0,0,1.14556,1.61113,3.82039,3.82039,0,0,0,1.036.17935,1.46888,1.46888,0,0,0,.73509-.12255.44082.44082,0,0,0,.26057-.44274.45312.45312,0,0,0-.29211-.43375.97191.97191,0,0,0-.20678-.063c-.21326-.03806-.42754-.0701-.63973-.11215a.54787.54787,0,0,1-.50172-.60926,2.75864,2.75864,0,0,1,.1773-.901c.1763-.535.414-1.045.64183-1.55913A12.686,12.686,0,0,0,15.85,10.47863a1.58461,1.58461,0,0,0,.04861-.87208,1.04531,1.04531,0,0,0-.85432-.83981,1.60658,1.60658,0,0,0-1.23654.16594.27593.27593,0,0,1-.36286-.03413c-.085-.0747-.16594-.15379-.24918-.23055a.98682.98682,0,0,0-1.33577-.04933,6.1468,6.1468,0,0,1-.4989.41615.47762.47762,0,0,1-.51535.03566c-.17448-.09307-.35512-.175-.53531-.25665a1.74949,1.74949,0,0,0-.56476-.2016,1.69943,1.69943,0,0,0-1.61654.91787,8.05815,8.05815,0,0,0-.32952.80126c-.45471,1.2557-.82507,2.53825-1.20838,3.81639a1.24151,1.24151,0,0,0,.51532,1.44389,1.42659,1.42659,0,0,0,1.22008.17166,1.09728,1.09728,0,0,0,.66994-.69764c.44145-1.04111.839-2.09989,1.25981-3.14926.11581-.28876.22792-.57874.35078-.86438a.44548.44548,0,0,1,.69189-.19539.50521.50521,0,0,1,.15044.43836,1.75625,1.75625,0,0,1-.14731.50453c-.27379.69219-.55265,1.38236-.82766,2.074a2.0836,2.0836,0,0,0-.14038.42876.50719.50719,0,0,0,.27082.57722.87236.87236,0,0,0,.66145.02739.99137.99137,0,0,0,.53406-.532q.61571-1.20914,1.228-2.42031.28423-.55863.57585-1.1133a.87189.87189,0,0,1,.29055-.35253.34987.34987,0,0,1,.37634-.01265.30291.30291,0,0,1,.12434.31459.56716.56716,0,0,1-.04655.1915c-.05318.12739-.10286.25669-.16183.38156-.34118.71775-.68754,1.43273-1.02568,2.152A2.00213,2.00213,0,0,0,12.88816,14.44366Zm4.78568,5.28972a.88573.88573,0,0,0-1.77139.00465.8857.8857,0,0,0,1.77139-.00465Zm-14.83838-7.296a.84329.84329,0,1,0,.00827-1.68655.8433.8433,0,0,0-.00827,1.68655Zm10.366-9.43673a.83506.83506,0,1,0-.0091,1.67.83505.83505,0,0,0,.0091-1.67Zm6.85014,5.22a.71651.71651,0,0,0-1.433.0093.71656.71656,0,0,0,1.433-.0093ZM5.37528,6.17908A.63823.63823,0,1,0,6.015,5.54483.62292.62292,0,0,0,5.37528,6.17908Zm6.68214,14.80843a.54949.54949,0,1,0-.55052.541A.54556.54556,0,0,0,12.05742,20.98752Zm8.53235-8.49689a.54777.54777,0,0,0-.54027.54023.53327.53327,0,0,0,.532.52293.51548.51548,0,0,0,.53272-.5237A.53187.53187,0,0,0,20.58977,12.49063ZM7.82846,2.4715a.44927.44927,0,1,0,.44484.44766A.43821.43821,0,0,0,7.82846,2.4715Zm13.775,7.60492a.41186.41186,0,0,0-.40065.39623.40178.40178,0,0,0,.40168.40168A.38994.38994,0,0,0,22,10.48172.39946.39946,0,0,0,21.60349,10.07642ZM5.79193,17.96207a.40469.40469,0,0,0-.397-.39646.399.399,0,0,0-.396.405.39234.39234,0,0,0,.39939.389A.39857.39857,0,0,0,5.79193,17.96207Z"
          />
        </symbol>
        <symbol id="icon-medium" viewBox="0 0 24 24">
          <path
            d="M5.727 8.027a.623.623 0 0 0-.204-.527L4.02 5.687v-.273H8.69l3.614 7.926 3.175-7.926h4.457v.274l-1.285 1.234a.367.367 0 0 0-.144.36v9.066a.374.374 0 0 0 .144.363l1.258 1.234v.27h-6.324v-.27l1.3-1.265c.13-.13.13-.164.13-.36V8.988l-3.621 9.196h-.489L6.691 8.988v6.164c-.035.258.051.52.235.707l1.691 2.055v.27h-4.8v-.27l1.69-2.055a.814.814 0 0 0 .22-.707zm0 0"
          />
        </symbol>
        <symbol id="icon-nextdoor" viewBox="0 0 24 24">
          <path
            d="M11.8615 0.651877C6.11188 0.714092 1.22843 5.12326 0.698031 10.9732C0.132369 17.213 4.73317 22.7304 10.9732 23.2962C17.213 23.8619 22.7304 19.2611 23.2962 13.0211C23.8619 6.78111 19.2611 1.26369 13.0211 0.69803C12.6356 0.663073 12.2486 0.647668 11.8615 0.651877ZM12.5886 7.09625C15.2249 7.09625 17.2615 8.96861 17.2615 11.3538V16.3385C17.2615 16.4649 17.1572 16.5692 17.0308 16.5692H14.9365C14.8755 16.5684 14.8173 16.5438 14.7742 16.5007C14.7311 16.4576 14.7065 16.3994 14.7057 16.3385V11.7C14.7057 10.6698 13.9102 9.49606 12.5884 9.49606C11.2093 9.49606 10.4712 10.6698 10.4712 11.7V16.3385C10.4712 16.4649 10.3669 16.5692 10.2404 16.5692H8.14615C8.02062 16.5692 7.92111 16.464 7.92111 16.3385V11.8442C7.92111 11.7076 7.82345 11.5924 7.69034 11.5615C5.26634 11.0206 4.89988 9.66277 4.85188 7.66154C4.85095 7.60025 4.87809 7.53785 4.92111 7.49428C4.96412 7.45052 5.02135 7.42505 5.08265 7.42505L7.24043 7.43649C7.36228 7.43834 7.45957 7.53415 7.46529 7.65581C7.48929 8.47551 7.54615 9.39231 8.28462 9.39231C8.43785 9.39231 8.55102 9.17464 8.61932 9.07495C9.43348 7.87864 10.8864 7.09625 12.5886 7.09625Z"
          />
        </symbol>
        <symbol id="icon-patreon" viewBox="0 0 24 24">
          <path
            d="M20 7.40755C19.9969 5.10922 18.2543 3.22555 16.2097 2.54588C13.6708 1.70188 10.3222 1.82421 7.89775 2.99921C4.95932 4.42355 4.03626 7.54355 4.00186 10.6552C3.97363 13.2136 4.2222 19.9517 7.92225 19.9997C10.6715 20.0356 11.0809 16.3967 12.3529 14.6442C13.258 13.3974 14.4233 13.0452 15.8578 12.6806C18.3233 12.0537 20.0036 10.0551 20 7.40755Z"
          />
        </symbol>
        <symbol id="icon-pinterest" viewBox="0 0 24 24">
          <path
            d="M12.289,2C6.617,2,3.606,5.648,3.606,9.622c0,1.846,1.025,4.146,2.666,4.878c0.25,0.111,0.381,0.063,0.439-0.169 c0.044-0.175,0.267-1.029,0.365-1.428c0.032-0.128,0.017-0.237-0.091-0.362C6.445,11.911,6.01,10.75,6.01,9.668 c0-2.777,2.194-5.464,5.933-5.464c3.23,0,5.49,2.108,5.49,5.122c0,3.407-1.794,5.768-4.13,5.768c-1.291,0-2.257-1.021-1.948-2.277 c0.372-1.495,1.089-3.112,1.089-4.191c0-0.967-0.542-1.775-1.663-1.775c-1.319,0-2.379,1.309-2.379,3.059 c0,1.115,0.394,1.869,0.394,1.869s-1.302,5.279-1.54,6.261c-0.405,1.666,0.053,4.368,0.094,4.604 c0.021,0.126,0.167,0.169,0.25,0.063c0.129-0.165,1.699-2.419,2.142-4.051c0.158-0.59,0.817-2.995,0.817-2.995 c0.43,0.784,1.681,1.446,3.013,1.446c3.963,0,6.822-3.494,6.822-7.833C20.394,5.112,16.849,2,12.289,2"
          />
        </symbol>
        <symbol id="icon-pocket" viewBox="0 0 24 24">
          <path
            d="M21.927,4.194C21.667,3.48,20.982,3,20.222,3h-0.01h-1.721H3.839C3.092,3,2.411,3.47,2.145,4.17 C2.066,4.378,2.026,4.594,2.026,4.814v6.035l0.069,1.2c0.29,2.73,1.707,5.115,3.899,6.778c0.039,0.03,0.079,0.059,0.119,0.089 l0.025,0.018c1.175,0.859,2.491,1.441,3.91,1.727c0.655,0.132,1.325,0.2,1.991,0.2c0.615,0,1.232-0.057,1.839-0.17 c0.073-0.014,0.145-0.028,0.219-0.044c0.02-0.004,0.042-0.012,0.064-0.023c1.359-0.297,2.621-0.864,3.753-1.691l0.025-0.018 c0.04-0.029,0.08-0.058,0.119-0.089c2.192-1.664,3.609-4.049,3.898-6.778l0.069-1.2V4.814C22.026,4.605,22,4.398,21.927,4.194z M17.692,10.481l-4.704,4.512c-0.266,0.254-0.608,0.382-0.949,0.382c-0.342,0-0.684-0.128-0.949-0.382l-4.705-4.512 C5.838,9.957,5.82,9.089,6.344,8.542c0.524-0.547,1.392-0.565,1.939-0.04l3.756,3.601l3.755-3.601 c0.547-0.524,1.415-0.506,1.939,0.04C18.256,9.089,18.238,9.956,17.692,10.481z"
          />
        </symbol>
        <symbol id="icon-ravelry" viewBox="0 0 23 20">
          <path
            d="M12.098 19.34a.25.25 0 01-.118-.043 13.986 13.986 0 01-.394-.258c-.164-.11-.477-.352-.934-.723-.46-.375-.882-.761-1.27-1.168-.39-.406-.796-.925-1.218-1.562a8.521 8.521 0 01-.976-1.926c-.125-.023-.758-.16-1.907-.414A8.785 8.785 0 007.84 17.29a8.152 8.152 0 004.258 2.05zm-6.98-6.762l1.831.313A13.424 13.424 0 016.5 11.02a16.216 16.216 0 01-.207-1.622l-.043-.593c-.61.61-1.047 1.445-1.316 2.5.035.484.097.91.183 1.273zm1.198-6.797a9.064 9.064 0 00-.84 1.653c.32-.344.59-.598.81-.758zm15.649 4.844a8.8 8.8 0 00-.676-3.426 8.85 8.85 0 00-1.824-2.812 8.614 8.614 0 00-2.727-1.883 8.115 8.115 0 00-3.312-.695 8.131 8.131 0 00-3.059.586A8.412 8.412 0 007.754 4.05c-.219.433-.383 1.027-.488 1.785a5.407 5.407 0 011.554-.93 7.481 7.481 0 011.727-.48 16.642 16.642 0 011.558-.153c.489-.02.883-.015 1.18.012l.438.035c.238.008.43.063.574.172a.66.66 0 01.27.367c.03.141.054.278.07.414a.8.8 0 01-.012.317 12.781 12.781 0 00-2.477-.004 7.093 7.093 0 00-1.992.484 9.6 9.6 0 00-1.554.801A12.46 12.46 0 007.176 7.97c.031.27.07.613.125 1.031.054.422.183 1.082.386 1.988.204.903.43 1.57.676 2.004.895.043 1.793-.012 2.696-.164.902-.152 1.683-.351 2.336-.598a20.681 20.681 0 001.77-.746c.526-.254.925-.472 1.19-.66l.407-.265c.156-.121.3-.196.43-.23a.367.367 0 01.331.058c.094.07.157.199.184.383.102.722-.039 1.171-.426 1.351-1.508.723-3.203 1.219-5.086 1.496-.976.149-2.129.207-3.449.176a7.673 7.673 0 001.195 1.973c.504.597 1 1.07 1.493 1.418.496.343.968.636 1.421.878.454.243.825.407 1.106.489l.426.133c1.039.171 1.992.113 2.863-.168 1.414-.739 2.555-1.813 3.418-3.227.867-1.414 1.297-2.969 1.297-4.664zm.805-.414c-.102 1.004-.247 1.793-.434 2.367-.508 1.547-1.168 2.836-1.977 3.867-.808 1.032-1.964 1.973-3.468 2.828-.348.247-.645.41-.895.493-.52.195-1.113.254-1.773.18-.262.019-.528.03-.797.03-2.055 0-3.883-.64-5.492-1.93-1.61-1.288-2.68-2.929-3.22-4.933-.007 0-.019 0-.042-.004-.024-.004-.04-.007-.055-.007-.043.375-.035.793.028 1.257.062.465.156.891.285 1.282.125.39.254.757.39 1.093.133.34.25.606.344.801l.152.29c.059.09.254.394.586.913a4.327 4.327 0 01-1.355-1.187 5.669 5.669 0 01-.856-1.563 14.087 14.087 0 01-.43-1.531 9.012 9.012 0 01-.19-1.2l-.02-.468c-.035-.016-.16-.059-.367-.137-.207-.078-.383-.148-.528-.203-.144-.054-.336-.133-.578-.226a9.221 9.221 0 01-.625-.282c-.176-.09-.36-.183-.543-.285-.187-.097-.34-.199-.465-.3a1.27 1.27 0 01-.27-.286c.138.075.321.172.548.285.23.118.64.286 1.23.508.594.223 1.121.364 1.586.426l.023-.36c.079-1.109.418-2.187 1.024-3.234A9.226 9.226 0 016.5 4.621c.203-.855.5-1.652.883-2.39.11-.208.226-.376.347-.5.125-.13.305-.247.536-.36 1.148-.55 2.25-.937 3.304-1.16A9.935 9.935 0 0114.86.09c1.136.14 2.25.5 3.34 1.082 1.593.855 2.804 2.105 3.624 3.75.82 1.644 1.137 3.406.946 5.289zm0 0"
          />
        </symbol>
        <symbol id="icon-reddit" viewBox="0 0 24 24">
          <path
            d="M22,11.816c0-1.256-1.021-2.277-2.277-2.277c-0.593,0-1.122,0.24-1.526,0.614c-1.481-0.965-3.455-1.594-5.647-1.69 l1.171-3.702l3.18,0.748c0.008,1.028,0.846,1.862,1.876,1.862c1.035,0,1.877-0.842,1.877-1.878c0-1.035-0.842-1.877-1.877-1.877 c-0.769,0-1.431,0.466-1.72,1.13l-3.508-0.826c-0.203-0.047-0.399,0.067-0.46,0.261l-1.35,4.268 c-2.316,0.038-4.411,0.67-5.97,1.671C5.368,9.765,4.853,9.539,4.277,9.539C3.021,9.539,2,10.56,2,11.816 c0,0.814,0.433,1.523,1.078,1.925c-0.037,0.221-0.061,0.444-0.061,0.672c0,3.292,4.011,5.97,8.941,5.97s8.941-2.678,8.941-5.97 c0-0.214-0.02-0.424-0.053-0.632C21.533,13.39,22,12.661,22,11.816z M18.776,4.394c0.606,0,1.1,0.493,1.1,1.1s-0.493,1.1-1.1,1.1 s-1.1-0.494-1.1-1.1S18.169,4.394,18.776,4.394z M2.777,11.816c0-0.827,0.672-1.5,1.499-1.5c0.313,0,0.598,0.103,0.838,0.269 c-0.851,0.676-1.477,1.479-1.812,2.36C2.983,12.672,2.777,12.27,2.777,11.816z M11.959,19.606c-4.501,0-8.164-2.329-8.164-5.193 S7.457,9.22,11.959,9.22s8.164,2.329,8.164,5.193S16.46,19.606,11.959,19.606z M20.636,13.001c-0.326-0.89-0.948-1.701-1.797-2.384 c0.248-0.186,0.55-0.301,0.883-0.301c0.827,0,1.5,0.673,1.5,1.5C21.223,12.299,20.992,12.727,20.636,13.001z M8.996,14.704 c-0.76,0-1.397-0.616-1.397-1.376c0-0.76,0.637-1.397,1.397-1.397c0.76,0,1.376,0.637,1.376,1.397 C10.372,14.088,9.756,14.704,8.996,14.704z M16.401,13.328c0,0.76-0.616,1.376-1.376,1.376c-0.76,0-1.399-0.616-1.399-1.376 c0-0.76,0.639-1.397,1.399-1.397C15.785,11.931,16.401,12.568,16.401,13.328z M15.229,16.708c0.152,0.152,0.152,0.398,0,0.55 c-0.674,0.674-1.727,1.002-3.219,1.002c-0.004,0-0.007-0.002-0.011-0.002c-0.004,0-0.007,0.002-0.011,0.002 c-1.492,0-2.544-0.328-3.218-1.002c-0.152-0.152-0.152-0.398,0-0.55c0.152-0.152,0.399-0.151,0.55,0 c0.521,0.521,1.394,0.775,2.669,0.775c0.004,0,0.007,0.002,0.011,0.002c0.004,0,0.007-0.002,0.011-0.002 c1.275,0,2.148-0.253,2.669-0.775C14.831,16.556,15.078,16.556,15.229,16.708z"
          />
        </symbol>
        <symbol id="icon-skype" viewBox="0 0 24 24">
          <path
            d="M10.113,2.699c0.033-0.006,0.067-0.013,0.1-0.02c0.033,0.017,0.066,0.033,0.098,0.051L10.113,2.699z M2.72,10.223 c-0.006,0.034-0.011,0.069-0.017,0.103c0.018,0.032,0.033,0.064,0.051,0.095L2.72,10.223z M21.275,13.771 c0.007-0.035,0.011-0.071,0.018-0.106c-0.018-0.031-0.033-0.064-0.052-0.095L21.275,13.771z M13.563,21.199 c0.032,0.019,0.065,0.035,0.096,0.053c0.036-0.006,0.071-0.011,0.105-0.017L13.563,21.199z M22,16.386 c0,1.494-0.581,2.898-1.637,3.953c-1.056,1.057-2.459,1.637-3.953,1.637c-0.967,0-1.914-0.251-2.75-0.725 c0.036-0.006,0.071-0.011,0.105-0.017l-0.202-0.035c0.032,0.019,0.065,0.035,0.096,0.053c-0.543,0.096-1.099,0.147-1.654,0.147 c-1.275,0-2.512-0.25-3.676-0.743c-1.125-0.474-2.135-1.156-3.002-2.023c-0.867-0.867-1.548-1.877-2.023-3.002 c-0.493-1.164-0.743-2.401-0.743-3.676c0-0.546,0.049-1.093,0.142-1.628c0.018,0.032,0.033,0.064,0.051,0.095L2.72,10.223 c-0.006,0.034-0.011,0.069-0.017,0.103C2.244,9.5,2,8.566,2,7.615c0-1.493,0.582-2.898,1.637-3.953 c1.056-1.056,2.46-1.638,3.953-1.638c0.915,0,1.818,0.228,2.622,0.655c-0.033,0.007-0.067,0.013-0.1,0.02l0.199,0.031 c-0.032-0.018-0.066-0.034-0.098-0.051c0.002,0,0.003-0.001,0.004-0.001c0.586-0.112,1.187-0.169,1.788-0.169 c1.275,0,2.512,0.249,3.676,0.742c1.124,0.476,2.135,1.156,3.002,2.024c0.868,0.867,1.548,1.877,2.024,3.002 c0.493,1.164,0.743,2.401,0.743,3.676c0,0.575-0.054,1.15-0.157,1.712c-0.018-0.031-0.033-0.064-0.052-0.095l0.034,0.201 c0.007-0.035,0.011-0.071,0.018-0.106C21.754,14.494,22,15.432,22,16.386z M16.817,14.138c0-1.331-0.613-2.743-3.033-3.282 l-2.209-0.49c-0.84-0.192-1.807-0.444-1.807-1.237c0-0.794,0.679-1.348,1.903-1.348c2.468,0,2.243,1.696,3.468,1.696 c0.645,0,1.209-0.379,1.209-1.031c0-1.521-2.435-2.663-4.5-2.663c-2.242,0-4.63,0.952-4.63,3.488c0,1.221,0.436,2.521,2.839,3.123 l2.984,0.745c0.903,0.223,1.129,0.731,1.129,1.189c0,0.762-0.758,1.507-2.129,1.507c-2.679,0-2.307-2.062-3.743-2.062 c-0.645,0-1.113,0.444-1.113,1.078c0,1.236,1.501,2.886,4.856,2.886C15.236,17.737,16.817,16.199,16.817,14.138z"
          />
        </symbol>
        <symbol id="icon-slideshare" viewBox="0 0 24 24">
          <path
            d="M11.738,10.232a2.142,2.142,0,0,1-.721,1.619,2.556,2.556,0,0,1-3.464,0,2.183,2.183,0,0,1,0-3.243,2.572,2.572,0,0,1,3.464,0A2.136,2.136,0,0,1,11.738,10.232Zm5.7,0a2.15,2.15,0,0,1-.715,1.619,2.563,2.563,0,0,1-3.469,0,2.183,2.183,0,0,1,0-3.243,2.58,2.58,0,0,1,3.469,0A2.144,2.144,0,0,1,17.439,10.232Zm2.555,2.045V4.7a2.128,2.128,0,0,0-.363-1.4,1.614,1.614,0,0,0-1.261-.415H5.742a1.656,1.656,0,0,0-1.278.386A2.246,2.246,0,0,0,4.129,4.7v7.643a8.212,8.212,0,0,0,1,.454q.516.193.92.318a6.847,6.847,0,0,0,.92.21q.516.085.806.125a6.615,6.615,0,0,0,.795.045l.665.006q.16,0,.642-.023t.506-.023a1.438,1.438,0,0,1,1.079.307,1.134,1.134,0,0,0,.114.1,7.215,7.215,0,0,0,.693.579q.079-1.033,1.34-.988.057,0,.415.017l.488.023q.13.006.517.011t.6-.011l.619-.051a5.419,5.419,0,0,0,.693-.1l.7-.153a5.353,5.353,0,0,0,.761-.221q.345-.131.766-.307a8.727,8.727,0,0,0,.818-.392Zm1.851-.057a10.4,10.4,0,0,1-4.225,2.862,6.5,6.5,0,0,1-.261,5.281,3.524,3.524,0,0,1-2.078,1.681,2.452,2.452,0,0,1-2.067-.17,1.915,1.915,0,0,1-.931-1.863l-.011-3.7V16.3l-.279-.068q-.188-.045-.267-.057l-.011,3.839a1.9,1.9,0,0,1-.943,1.863,2.481,2.481,0,0,1-2.078.17,3.519,3.519,0,0,1-2.067-1.7,6.546,6.546,0,0,1-.25-5.258A10.4,10.4,0,0,1,2.152,12.22a.56.56,0,0,1-.045-.715q.238-.3.681.011l.125.079a.767.767,0,0,1,.125.091V3.8a1.987,1.987,0,0,1,.534-1.4,1.7,1.7,0,0,1,1.295-.579H19.141a1.7,1.7,0,0,1,1.295.579,1.985,1.985,0,0,1,.534,1.4v7.882l.238-.17q.443-.307.681-.011a.56.56,0,0,1-.045.715Z"
          />
        </symbol>
        <symbol id="icon-snapchat" viewBox="0 0 24 24">
          <path
            d="M12.065,2a5.526,5.526,0,0,1,3.132.892A5.854,5.854,0,0,1,17.326,5.4a5.821,5.821,0,0,1,.351,2.33q0,.612-.117,2.487a.809.809,0,0,0,.365.091,1.93,1.93,0,0,0,.664-.176,1.93,1.93,0,0,1,.664-.176,1.3,1.3,0,0,1,.729.234.7.7,0,0,1,.351.6.839.839,0,0,1-.41.7,2.732,2.732,0,0,1-.9.41,3.192,3.192,0,0,0-.9.378.728.728,0,0,0-.41.618,1.575,1.575,0,0,0,.156.56,6.9,6.9,0,0,0,1.334,1.953,5.6,5.6,0,0,0,1.881,1.315,5.875,5.875,0,0,0,1.042.3.42.42,0,0,1,.365.456q0,.911-2.852,1.341a1.379,1.379,0,0,0-.143.507,1.8,1.8,0,0,1-.182.605.451.451,0,0,1-.429.241,5.878,5.878,0,0,1-.807-.085,5.917,5.917,0,0,0-.833-.085,4.217,4.217,0,0,0-.807.065,2.42,2.42,0,0,0-.82.293,6.682,6.682,0,0,0-.755.5q-.351.267-.755.527a3.886,3.886,0,0,1-.989.436A4.471,4.471,0,0,1,11.831,22a4.307,4.307,0,0,1-1.256-.176,3.784,3.784,0,0,1-.976-.436q-.4-.26-.749-.527a6.682,6.682,0,0,0-.755-.5,2.422,2.422,0,0,0-.807-.293,4.432,4.432,0,0,0-.82-.065,5.089,5.089,0,0,0-.853.1,5,5,0,0,1-.762.1.474.474,0,0,1-.456-.241,1.819,1.819,0,0,1-.182-.618,1.411,1.411,0,0,0-.143-.521q-2.852-.429-2.852-1.341a.42.42,0,0,1,.365-.456,5.793,5.793,0,0,0,1.042-.3,5.524,5.524,0,0,0,1.881-1.315,6.789,6.789,0,0,0,1.334-1.953A1.575,1.575,0,0,0,6,12.9a.728.728,0,0,0-.41-.618,3.323,3.323,0,0,0-.9-.384,2.912,2.912,0,0,1-.9-.41.814.814,0,0,1-.41-.684.71.71,0,0,1,.338-.593,1.208,1.208,0,0,1,.716-.241,1.976,1.976,0,0,1,.625.169,2.008,2.008,0,0,0,.69.169.919.919,0,0,0,.416-.091q-.117-1.849-.117-2.474A5.861,5.861,0,0,1,6.385,5.4,5.516,5.516,0,0,1,8.625,2.819,7.075,7.075,0,0,1,12.062,2Z"
          />
        </symbol>
        <symbol id="icon-soundcloud" viewBox="0 0 24 24">
          <path
            d="M8.9,16.1L9,14L8.9,9.5c0-0.1,0-0.1-0.1-0.1c0,0-0.1-0.1-0.1-0.1c-0.1,0-0.1,0-0.1,0.1c0,0-0.1,0.1-0.1,0.1L8.3,14l0.1,2.1 c0,0.1,0,0.1,0.1,0.1c0,0,0.1,0.1,0.1,0.1C8.8,16.3,8.9,16.3,8.9,16.1z M11.4,15.9l0.1-1.8L11.4,9c0-0.1,0-0.2-0.1-0.2 c0,0-0.1,0-0.1,0s-0.1,0-0.1,0c-0.1,0-0.1,0.1-0.1,0.2l0,0.1l-0.1,5c0,0,0,0.7,0.1,2v0c0,0.1,0,0.1,0.1,0.1c0.1,0.1,0.1,0.1,0.2,0.1 c0.1,0,0.1,0,0.2-0.1c0.1,0,0.1-0.1,0.1-0.2L11.4,15.9z M2.4,12.9L2.5,14l-0.2,1.1c0,0.1,0,0.1-0.1,0.1c0,0-0.1,0-0.1-0.1L2.1,14 l0.1-1.1C2.2,12.9,2.3,12.9,2.4,12.9C2.3,12.9,2.4,12.9,2.4,12.9z M3.1,12.2L3.3,14l-0.2,1.8c0,0.1,0,0.1-0.1,0.1 c-0.1,0-0.1,0-0.1-0.1L2.8,14L3,12.2C3,12.2,3,12.2,3.1,12.2C3.1,12.2,3.1,12.2,3.1,12.2z M3.9,11.9L4.1,14l-0.2,2.1 c0,0.1,0,0.1-0.1,0.1c-0.1,0-0.1,0-0.1-0.1L3.5,14l0.2-2.1c0-0.1,0-0.1,0.1-0.1C3.9,11.8,3.9,11.8,3.9,11.9z M4.7,11.9L4.9,14 l-0.2,2.1c0,0.1-0.1,0.1-0.1,0.1c-0.1,0-0.1,0-0.1-0.1L4.3,14l0.2-2.2c0-0.1,0-0.1,0.1-0.1C4.7,11.7,4.7,11.8,4.7,11.9z M5.6,12 l0.2,2l-0.2,2.1c0,0.1-0.1,0.1-0.1,0.1c0,0-0.1,0-0.1,0c0,0,0-0.1,0-0.1L5.1,14l0.2-2c0,0,0-0.1,0-0.1s0.1,0,0.1,0 C5.5,11.9,5.5,11.9,5.6,12L5.6,12z M6.4,10.7L6.6,14l-0.2,2.1c0,0,0,0.1,0,0.1c0,0-0.1,0-0.1,0c-0.1,0-0.1-0.1-0.2-0.2L5.9,14 l0.2-3.3c0-0.1,0.1-0.2,0.2-0.2c0,0,0.1,0,0.1,0C6.4,10.7,6.4,10.7,6.4,10.7z M7.2,10l0.2,4.1l-0.2,2.1c0,0,0,0.1,0,0.1 c0,0-0.1,0-0.1,0c-0.1,0-0.2-0.1-0.2-0.2l-0.1-2.1L6.8,10c0-0.1,0.1-0.2,0.2-0.2c0,0,0.1,0,0.1,0S7.2,9.9,7.2,10z M8,9.6L8.2,14 L8,16.1c0,0.1-0.1,0.2-0.2,0.2c-0.1,0-0.2-0.1-0.2-0.2L7.5,14l0.1-4.4c0-0.1,0-0.1,0.1-0.1c0,0,0.1-0.1,0.1-0.1c0.1,0,0.1,0,0.1,0.1 C8,9.6,8,9.6,8,9.6z M11.4,16.1L11.4,16.1L11.4,16.1z M9.7,9.6L9.8,14l-0.1,2.1c0,0.1,0,0.1-0.1,0.2s-0.1,0.1-0.2,0.1 c-0.1,0-0.1,0-0.1-0.1s-0.1-0.1-0.1-0.2L9.2,14l0.1-4.4c0-0.1,0-0.1,0.1-0.2s0.1-0.1,0.2-0.1c0.1,0,0.1,0,0.2,0.1S9.7,9.5,9.7,9.6 L9.7,9.6z M10.6,9.8l0.1,4.3l-0.1,2c0,0.1,0,0.1-0.1,0.2c0,0-0.1,0.1-0.2,0.1c-0.1,0-0.1,0-0.2-0.1c0,0-0.1-0.1-0.1-0.2L10,14 l0.1-4.3c0-0.1,0-0.1,0.1-0.2c0,0,0.1-0.1,0.2-0.1c0.1,0,0.1,0,0.2,0.1S10.6,9.7,10.6,9.8z M12.4,14l-0.1,2c0,0.1,0,0.1-0.1,0.2 c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0-0.1,0-0.2-0.1c-0.1-0.1-0.1-0.1-0.1-0.2l-0.1-1l-0.1-1l0.1-5.5v0c0-0.1,0-0.2,0.1-0.2 c0.1,0,0.1-0.1,0.2-0.1c0,0,0.1,0,0.1,0c0.1,0,0.1,0.1,0.1,0.2L12.4,14z M22.1,13.9c0,0.7-0.2,1.3-0.7,1.7c-0.5,0.5-1.1,0.7-1.7,0.7 h-6.8c-0.1,0-0.1,0-0.2-0.1c-0.1-0.1-0.1-0.1-0.1-0.2V8.2c0-0.1,0.1-0.2,0.2-0.3c0.5-0.2,1-0.3,1.6-0.3c1.1,0,2.1,0.4,2.9,1.1 c0.8,0.8,1.3,1.7,1.4,2.8c0.3-0.1,0.6-0.2,1-0.2c0.7,0,1.3,0.2,1.7,0.7C21.8,12.6,22.1,13.2,22.1,13.9L22.1,13.9z"
          />
        </symbol>
        <symbol id="icon-spotify" viewBox="0 0 24 24">
          <path
            d="M12,2C6.477,2,2,6.477,2,12c0,5.523,4.477,10,10,10c5.523,0,10-4.477,10-10C22,6.477,17.523,2,12,2 M16.586,16.424 c-0.18,0.295-0.563,0.387-0.857,0.207c-2.348-1.435-5.304-1.76-8.785-0.964c-0.335,0.077-0.67-0.133-0.746-0.469 c-0.077-0.335,0.132-0.67,0.469-0.746c3.809-0.871,7.077-0.496,9.713,1.115C16.673,15.746,16.766,16.13,16.586,16.424 M17.81,13.7 c-0.226,0.367-0.706,0.482-1.072,0.257c-2.687-1.652-6.785-2.131-9.965-1.166C6.36,12.917,5.925,12.684,5.8,12.273 C5.675,11.86,5.908,11.425,6.32,11.3c3.632-1.102,8.147-0.568,11.234,1.328C17.92,12.854,18.035,13.335,17.81,13.7 M17.915,10.865 c-3.223-1.914-8.54-2.09-11.618-1.156C5.804,9.859,5.281,9.58,5.131,9.086C4.982,8.591,5.26,8.069,5.755,7.919 c3.532-1.072,9.404-0.865,13.115,1.338c0.445,0.264,0.59,0.838,0.327,1.282C18.933,10.983,18.359,11.129,17.915,10.865"
          />
        </symbol>
        <symbol id="icon-stackoverflow" viewBox="0 0 24 24">
          <path
            d="m 17.817128,20.228605 v -5.337217 h 1.771431 V 22 H 3.6 v -7.108612 h 1.771401 v 5.337217 z"
          />
          <path
            d="m 7.3267845,14.385359 8.6959295,1.817316 0.368168,-1.748385 -8.6959318,-1.817319 z m 1.1503197,-4.140944 8.0517968,3.749872 0.73617,-1.610385 -8.0518344,-3.7728517 z m 2.2315078,-3.9569154 6.832405,5.6822664 1.12738,-1.357316 -6.832576,-5.6822636 z m 4.417,-4.2099019 -1.426448,1.0581864 5.291191,7.1316119 1.426412,-1.0582745 z M 7.1427296,18.434189 h 8.8799844 v -1.7713 H 7.1427296 Z"
          />
          <path
            d="m 17.817128,20.228605 v -5.337217 h 1.771431 V 22 H 3.6 v -7.108612 h 1.771401 v 5.337217 z"
          />
          <path
            d="m 7.3267845,14.385359 8.6959295,1.817316 0.368168,-1.748385 -8.6959318,-1.817319 z m 1.1503197,-4.140944 8.0517968,3.749872 0.73617,-1.610385 -8.0518344,-3.7728517 z m 2.2315078,-3.9569154 6.832405,5.6822664 1.12738,-1.357316 -6.832576,-5.6822636 z m 4.417,-4.2099019 -1.426448,1.0581864 5.291191,7.1316119 1.426412,-1.0582745 z M 7.1427296,18.434189 h 8.8799844 v -1.7713 H 7.1427296 Z"
          />
        </symbol>
        <symbol id="icon-strava" viewBox="0 0 24 24">
          <path
            d="M15.387 17.944l-2.089-4.116h-3.065L15.387 24l5.15-10.172h-3.066m-7.008-5.599l2.836 5.598h4.172L10.463 0l-7 13.828h4.169"
          />
        </symbol>
        <symbol id="icon-stumbleupon" viewBox="0 0 24 24">
          <path
            d="M12,4.294c-2.469,0-4.471,2.002-4.471,4.471v6.353c0,0.585-0.474,1.059-1.059,1.059c-0.585,0-1.059-0.474-1.059-1.059 v-2.824H2v2.941c0,2.469,2.002,4.471,4.471,4.471c2.469,0,4.471-2.002,4.471-4.471V8.765c0-0.585,0.474-1.059,1.059-1.059 s1.059,0.474,1.059,1.059v1.294l1.412,0.647l2-0.647V8.765C16.471,6.296,14.469,4.294,12,4.294z M13.059,12.353v2.882 c0,2.469,2.002,4.471,4.471,4.471S22,17.704,22,15.235v-2.824h-3.412v2.824c0,0.585-0.474,1.059-1.059,1.059 c-0.585,0-1.059-0.474-1.059-1.059v-2.882l-2,0.647L13.059,12.353z"
          />
        </symbol>
        <symbol id="icon-threads" viewBox="0 0 24 24">
          <path
            d="M16.0671 11.1235C15.9632 11.0737 15.8583 11.0261 15.7524 10.9806C15.5671 7.56725 13.702 5.61312 10.5702 5.59312H10.5278C8.6545 5.59312 7.09663 6.39262 6.13775 7.84762L7.86012 9.02913C8.57637 7.94225 9.70062 7.71063 10.5286 7.71063H10.5573C11.5884 7.71725 12.3665 8.01713 12.8701 8.60175C13.2366 9.02738 13.4817 9.61562 13.6031 10.358C12.6889 10.2026 11.7001 10.1547 10.6431 10.2155C7.66562 10.3869 5.75138 12.1235 5.88 14.5365C5.94525 15.7605 6.555 16.8135 7.59688 17.5014C8.47775 18.0829 9.61238 18.3673 10.7915 18.3029C12.3488 18.2175 13.5704 17.6234 14.4226 16.537C15.0699 15.712 15.4792 14.6429 15.66 13.2957C16.4021 13.7436 16.9521 14.333 17.2559 15.0415C17.7724 16.2459 17.8025 18.225 16.1876 19.8385C14.7728 21.252 13.072 21.8635 10.5016 21.8824C7.6505 21.8613 5.49412 20.9469 4.09225 19.1646C2.7795 17.4958 2.101 15.0852 2.07562 12C2.101 8.91475 2.77937 6.50425 4.09225 4.83537C5.49425 3.05312 7.6505 2.13875 10.5016 2.1175C13.3735 2.13875 15.5674 3.0575 17.023 4.84837C17.7368 5.72662 18.2749 6.83087 18.6296 8.11862L20.648 7.58012C20.218 5.99512 19.5414 4.62937 18.6206 3.49662C16.7545 1.20088 14.0252 0.024375 10.5087 0H10.4946C6.98525 0.02425 4.2865 1.20525 2.4735 3.51C0.86025 5.56063 0.0280001 8.41437 0.000125051 11.9915L0 12V12.0084C0.028 15.5855 0.86025 18.4393 2.4735 20.4901C4.2865 22.7948 6.98525 23.9757 10.4946 24H10.5087C13.6287 23.9784 15.828 23.1615 17.6397 21.3514C20.0101 18.9833 19.9387 16.0149 19.1575 14.1926C18.597 12.8859 17.5284 11.8245 16.0671 11.1235ZM10.68 16.1884C9.375 16.2619 8.01925 15.6761 7.9525 14.4215C7.90288 13.4913 8.6145 12.4533 10.7601 12.3296C11.0059 12.3154 11.247 12.3085 11.4839 12.3085C12.2633 12.3085 12.9924 12.3843 13.6552 12.5291C13.408 15.6169 11.9578 16.1183 10.68 16.1884Z"
          />
        </symbol>
        <symbol id="icon-telegram" viewBox="0 0 24 24">
          <path
            d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm3.08 14.757s-.25.625-.936.325l-2.541-1.949-1.63 1.486s-.127.096-.266.036c0 0-.12-.011-.27-.486-.15-.475-.911-2.972-.911-2.972L6 12.349s-.387-.137-.425-.438c-.037-.3.437-.462.437-.462l10.03-3.934s.824-.362.824.238l-1.786 9.004z"
          />
        </symbol>
        <symbol id="icon-tiktok" viewBox="0 0 24 24">
          <path
            d="M12.22 2H15.64C15.64 2 15.4502 6.39351 20.3898 6.70186V10.0981C20.3898 10.0981 17.7537 10.2636 15.64 8.64957L15.6769 15.6615C15.6769 16.9151 15.3052 18.1406 14.6087 19.1829C13.9123 20.2253 12.9224 21.0377 11.7642 21.5175C10.606 21.9972 9.33162 22.1228 8.10209 21.8782C6.87257 21.6337 5.74316 21.0301 4.85669 20.1437C3.97022 19.2573 3.3665 18.1279 3.12186 16.8984C2.87723 15.6689 3.00267 14.3945 3.48233 13.2363C3.96199 12.0781 4.77432 11.0881 5.8166 10.3916C6.85888 9.69502 8.0843 9.32318 9.33791 9.32307H10.2271V12.7231V12.7954C9.64757 12.6147 9.02578 12.6217 8.45043 12.8152C7.87508 13.0088 7.37556 13.3792 7.02314 13.8734C6.67071 14.3677 6.48338 14.9606 6.48786 15.5677C6.49235 16.1747 6.68842 16.7648 7.04811 17.2538C7.40781 17.7428 7.91274 18.1057 8.49089 18.2908C9.06903 18.4758 9.69086 18.4736 10.2676 18.2843C10.8444 18.0951 11.3467 17.7285 11.7029 17.2369C12.059 16.7454 12.2508 16.1538 12.2509 15.5468L12.22 2Z"
          />
        </symbol>
        <symbol id="icon-tumblr" viewBox="0 0 24 24">
          <path
            d="M16.749,17.396c-0.357,0.17-1.041,0.319-1.551,0.332c-1.539,0.041-1.837-1.081-1.85-1.896V9.847h3.861V6.937h-3.847V2.039 c0,0-2.77,0-2.817,0c-0.046,0-0.127,0.041-0.138,0.144c-0.165,1.499-0.867,4.13-3.783,5.181v2.484h1.945v6.282 c0,2.151,1.587,5.206,5.775,5.135c1.413-0.024,2.982-0.616,3.329-1.126L16.749,17.396z"
          />
        </symbol>
        <symbol id="icon-twitch" viewBox="0 0 24 24">
          <path
            d="M16.499,8.089h-1.636v4.91h1.636V8.089z M12,8.089h-1.637v4.91H12V8.089z M4.228,3.178L3,6.451v13.092h4.499V22h2.456 l2.454-2.456h3.681L21,14.636V3.178H4.228z M19.364,13.816l-2.864,2.865H12l-2.453,2.453V16.68H5.863V4.814h13.501V13.816z"
          />
        </symbol>
        <symbol id="icon-twitter" viewBox="0 0 24 24">
          <path
            d="M22.23,5.924c-0.736,0.326-1.527,0.547-2.357,0.646c0.847-0.508,1.498-1.312,1.804-2.27 c-0.793,0.47-1.671,0.812-2.606,0.996C18.324,4.498,17.257,4,16.077,4c-2.266,0-4.103,1.837-4.103,4.103 c0,0.322,0.036,0.635,0.106,0.935C8.67,8.867,5.647,7.234,3.623,4.751C3.27,5.357,3.067,6.062,3.067,6.814 c0,1.424,0.724,2.679,1.825,3.415c-0.673-0.021-1.305-0.206-1.859-0.513c0,0.017,0,0.034,0,0.052c0,1.988,1.414,3.647,3.292,4.023 c-0.344,0.094-0.707,0.144-1.081,0.144c-0.264,0-0.521-0.026-0.772-0.074c0.522,1.63,2.038,2.816,3.833,2.85 c-1.404,1.1-3.174,1.756-5.096,1.756c-0.331,0-0.658-0.019-0.979-0.057c1.816,1.164,3.973,1.843,6.29,1.843 c7.547,0,11.675-6.252,11.675-11.675c0-0.178-0.004-0.355-0.012-0.531C20.985,7.47,21.68,6.747,22.23,5.924z"
          />
        </symbol>
        <symbol id="icon-vimeo" viewBox="0 0 24 24">
          <path
            d="M22.396,7.164c-0.093,2.026-1.507,4.799-4.245,8.32C15.322,19.161,12.928,21,10.97,21c-1.214,0-2.24-1.119-3.079-3.359 c-0.56-2.053-1.119-4.106-1.68-6.159C5.588,9.243,4.921,8.122,4.206,8.122c-0.156,0-0.701,0.328-1.634,0.98L1.594,7.841 c1.027-0.902,2.04-1.805,3.037-2.708C6.001,3.95,7.03,3.327,7.715,3.264c1.619-0.156,2.616,0.951,2.99,3.321 c0.404,2.557,0.685,4.147,0.841,4.769c0.467,2.121,0.981,3.181,1.542,3.181c0.435,0,1.09-0.688,1.963-2.065 c0.871-1.376,1.338-2.422,1.401-3.142c0.125-1.187-0.343-1.782-1.401-1.782c-0.498,0-1.012,0.115-1.541,0.341 c1.023-3.35,2.977-4.977,5.862-4.884C21.511,3.066,22.52,4.453,22.396,7.164z"
          />
        </symbol>
        <symbol id="icon-vk" viewBox="0 0 24 24">
          <path
            d="M22,7.1c0.2,0.4-0.4,1.5-1.6,3.1c-0.2,0.2-0.4,0.5-0.7,0.9c-0.5,0.7-0.9,1.1-0.9,1.4c-0.1,0.3-0.1,0.6,0.1,0.8 c0.1,0.1,0.4,0.4,0.8,0.9h0l0,0c1,0.9,1.6,1.7,2,2.3c0,0,0,0.1,0.1,0.1c0,0.1,0,0.1,0.1,0.3c0,0.1,0,0.2,0,0.4 c0,0.1-0.1,0.2-0.3,0.3c-0.1,0.1-0.4,0.1-0.6,0.1l-2.7,0c-0.2,0-0.4,0-0.6-0.1c-0.2-0.1-0.4-0.1-0.5-0.2l-0.2-0.1 c-0.2-0.1-0.5-0.4-0.7-0.7s-0.5-0.6-0.7-0.8c-0.2-0.2-0.4-0.4-0.6-0.6C14.8,15,14.6,15,14.4,15c0,0,0,0-0.1,0c0,0-0.1,0.1-0.2,0.2 c-0.1,0.1-0.2,0.2-0.2,0.3c-0.1,0.1-0.1,0.3-0.2,0.5c-0.1,0.2-0.1,0.5-0.1,0.8c0,0.1,0,0.2,0,0.3c0,0.1-0.1,0.2-0.1,0.2l0,0.1 c-0.1,0.1-0.3,0.2-0.6,0.2h-1.2c-0.5,0-1,0-1.5-0.2c-0.5-0.1-1-0.3-1.4-0.6s-0.7-0.5-1.1-0.7s-0.6-0.4-0.7-0.6l-0.3-0.3 c-0.1-0.1-0.2-0.2-0.3-0.3s-0.4-0.5-0.7-0.9s-0.7-1-1.1-1.6c-0.4-0.6-0.8-1.3-1.3-2.2C2.9,9.4,2.5,8.5,2.1,7.5C2,7.4,2,7.3,2,7.2 c0-0.1,0-0.1,0-0.2l0-0.1c0.1-0.1,0.3-0.2,0.6-0.2l2.9,0c0.1,0,0.2,0,0.2,0.1S5.9,6.9,5.9,7L6,7c0.1,0.1,0.2,0.2,0.3,0.3 C6.4,7.7,6.5,8,6.7,8.4C6.9,8.8,7,9,7.1,9.2l0.2,0.3c0.2,0.4,0.4,0.8,0.6,1.1c0.2,0.3,0.4,0.5,0.5,0.7s0.3,0.3,0.4,0.4 c0.1,0.1,0.3,0.1,0.4,0.1c0.1,0,0.2,0,0.3-0.1c0,0,0,0,0.1-0.1c0,0,0.1-0.1,0.1-0.2c0.1-0.1,0.1-0.3,0.1-0.5c0-0.2,0.1-0.5,0.1-0.8 c0-0.4,0-0.8,0-1.3c0-0.3,0-0.5-0.1-0.8c0-0.2-0.1-0.4-0.1-0.5L9.6,7.6C9.4,7.3,9.1,7.2,8.7,7.1C8.6,7.1,8.6,7,8.7,6.9 C8.9,6.7,9,6.6,9.1,6.5c0.4-0.2,1.2-0.3,2.5-0.3c0.6,0,1,0.1,1.4,0.1c0.1,0,0.3,0.1,0.3,0.1c0.1,0.1,0.2,0.1,0.2,0.3 c0,0.1,0.1,0.2,0.1,0.3s0,0.3,0,0.5c0,0.2,0,0.4,0,0.6c0,0.2,0,0.4,0,0.7c0,0.3,0,0.6,0,0.9c0,0.1,0,0.2,0,0.4c0,0.2,0,0.4,0,0.5 c0,0.1,0,0.3,0,0.4s0.1,0.3,0.1,0.4c0.1,0.1,0.1,0.2,0.2,0.3c0.1,0,0.1,0,0.2,0c0.1,0,0.2,0,0.3-0.1c0.1-0.1,0.2-0.2,0.4-0.4 s0.3-0.4,0.5-0.7c0.2-0.3,0.5-0.7,0.7-1.1c0.4-0.7,0.8-1.5,1.1-2.3c0-0.1,0.1-0.1,0.1-0.2c0-0.1,0.1-0.1,0.1-0.1l0,0l0.1,0 c0,0,0,0,0.1,0s0.2,0,0.2,0l3,0c0.3,0,0.5,0,0.7,0S21.9,7,21.9,7L22,7.1z"
          />
        </symbol>
        <symbol id="icon-whatsapp" viewBox="0 0 24 24">
          <path
            d="M2.048,22l1.406-5.136c-0.867-1.503-1.324-3.208-1.323-4.955C2.133,6.446,6.579,2,12.042,2c2.651,0.001,5.14,1.033,7.011,2.906c1.871,1.873,2.901,4.363,2.9,7.011c-0.002,5.464-4.448,9.91-9.91,9.91c0,0,0,0,0,0h-0.004c-1.659-0.001-3.288-0.417-4.736-1.206L2.048,22z M7.545,18.828l0.301,0.179c1.265,0.751,2.714,1.148,4.193,1.148h0.003c4.54,0,8.235-3.695,8.237-8.237c0.001-2.201-0.855-4.271-2.41-5.828c-1.555-1.557-3.623-2.415-5.824-2.416c-4.544,0-8.239,3.695-8.241,8.237c-0.001,1.556,0.435,3.072,1.259,4.384l0.196,0.312l-0.832,3.04L7.545,18.828z M17.035,14.274c-0.062-0.103-0.227-0.165-0.475-0.289c-0.248-0.124-1.465-0.723-1.692-0.806c-0.227-0.083-0.392-0.124-0.557,0.124c-0.165,0.248-0.64,0.806-0.784,0.971c-0.144,0.165-0.289,0.186-0.536,0.062c-0.248-0.124-1.046-0.385-1.991-1.229c-0.736-0.657-1.233-1.468-1.378-1.715c-0.144-0.248-0.015-0.382,0.109-0.505c0.111-0.111,0.248-0.289,0.371-0.434c0.124-0.145,0.165-0.248,0.248-0.413c0.083-0.165,0.041-0.31-0.021-0.434c-0.062-0.124-0.557-1.343-0.763-1.839C9.364,7.284,9.159,7.35,9.007,7.342c-0.144-0.007-0.31-0.009-0.475-0.009c-0.165,0-0.433,0.062-0.66,0.31C7.646,7.891,7.006,8.49,7.006,9.709c0,1.219,0.887,2.396,1.011,2.562c0.124,0.165,1.746,2.666,4.23,3.739c0.591,0.255,1.052,0.408,1.412,0.522c0.593,0.189,1.133,0.162,1.56,0.098c0.476-0.071,1.465-0.599,1.671-1.177C17.096,14.873,17.096,14.378,17.035,14.274z"
          />
        </symbol>
        <symbol id="icon-woocommerce" viewBox="0 0 24 24">
          <path
            d="M19,2H5C3.3,2,2,3.3,2,5v11c0,1.7,1.3,3,3,3h4l6,3l-1-3h5c1.7,0,3-1.3,3-3V5C22,3.3,20.7,2,19,2z M17.4,6.5c-0.4,0.8-0.8,2.1-1,3.9c-0.3,1.8-0.4,3.1-0.3,4.1c0,0.3,0,0.5-0.1,0.7s-0.3,0.4-0.6,0.4s-0.6-0.1-0.9-0.4c-1-1-1.8-2.6-2.4-4.6c-0.7,1.4-1.2,2.4-1.6,3.1c-0.6,1.2-1.2,1.8-1.6,1.9c-0.3,0-0.5-0.2-0.8-0.7C7.6,13.5,7,10.7,6.4,6.7c0-0.3,0-0.5,0.2-0.7C6.7,5.8,7,5.7,7.3,5.6c0.5,0,0.9,0.2,0.9,0.8c0.3,2.3,0.7,4.2,1.1,5.7l2.4-4.5C11.9,7.2,12.1,7,12.5,7c0.5,0,0.8,0.3,0.9,0.9c0.3,1.4,0.6,2.6,1,3.7c0.3-2.7,0.8-4.7,1.4-5.9c0.2-0.3,0.4-0.5,0.7-0.5c0.2,0,0.5,0.1,0.7,0.2c0.2,0.2,0.3,0.4,0.3,0.6S17.5,6.4,17.4,6.5z"
          />
        </symbol>
        <symbol id="icon-wordpress" viewBox="0 0 24 24">
          <path
            d="M12.158,12.786L9.46,20.625c0.806,0.237,1.657,0.366,2.54,0.366c1.047,0,2.051-0.181,2.986-0.51 c-0.024-0.038-0.046-0.079-0.065-0.124L12.158,12.786z M3.009,12c0,3.559,2.068,6.634,5.067,8.092L3.788,8.341 C3.289,9.459,3.009,10.696,3.009,12z M18.069,11.546c0-1.112-0.399-1.881-0.741-2.48c-0.456-0.741-0.883-1.368-0.883-2.109 c0-0.826,0.627-1.596,1.51-1.596c0.04,0,0.078,0.005,0.116,0.007C16.472,3.904,14.34,3.009,12,3.009 c-3.141,0-5.904,1.612-7.512,4.052c0.211,0.007,0.41,0.011,0.579,0.011c0.94,0,2.396-0.114,2.396-0.114 C7.947,6.93,8.004,7.642,7.52,7.699c0,0-0.487,0.057-1.029,0.085l3.274,9.739l1.968-5.901l-1.401-3.838 C9.848,7.756,9.389,7.699,9.389,7.699C8.904,7.67,8.961,6.93,9.446,6.958c0,0,1.484,0.114,2.368,0.114 c0.94,0,2.397-0.114,2.397-0.114c0.485-0.028,0.542,0.684,0.057,0.741c0,0-0.488,0.057-1.029,0.085l3.249,9.665l0.897-2.996 C17.841,13.284,18.069,12.316,18.069,11.546z M19.889,7.686c0.039,0.286,0.06,0.593,0.06,0.924c0,0.912-0.171,1.938-0.684,3.22 l-2.746,7.94c2.673-1.558,4.47-4.454,4.47-7.771C20.991,10.436,20.591,8.967,19.889,7.686z M12,22C6.486,22,2,17.514,2,12 C2,6.486,6.486,2,12,2c5.514,0,10,4.486,10,10C22,17.514,17.514,22,12,22z"
          />
        </symbol>
        <symbol id="icon-yelp" viewBox="0 0 24 24">
          <path
            d="M12.271,16.718v1.417q-.011,3.257-.067,3.4a.707.707,0,0,1-.569.446,4.637,4.637,0,0,1-2.024-.424A4.609,4.609,0,0,1,7.8,20.565a.844.844,0,0,1-.19-.4.692.692,0,0,1,.044-.29,3.181,3.181,0,0,1,.379-.524q.335-.412,2.019-2.409.011,0,.669-.781a.757.757,0,0,1,.44-.274.965.965,0,0,1,.552.039.945.945,0,0,1,.418.324.732.732,0,0,1,.139.468Zm-1.662-2.8a.783.783,0,0,1-.58.781l-1.339.435q-3.067.981-3.257.981a.711.711,0,0,1-.6-.4,2.636,2.636,0,0,1-.19-.836,9.134,9.134,0,0,1,.011-1.857,3.559,3.559,0,0,1,.335-1.389.659.659,0,0,1,.625-.357,22.629,22.629,0,0,1,2.253.859q.781.324,1.283.524l.937.379a.771.771,0,0,1,.4.34A.982.982,0,0,1,10.609,13.917Zm9.213,3.313a4.467,4.467,0,0,1-1.021,1.8,4.559,4.559,0,0,1-1.512,1.417.671.671,0,0,1-.7-.078q-.156-.112-2.052-3.2l-.524-.859a.761.761,0,0,1-.128-.513.957.957,0,0,1,.217-.513.774.774,0,0,1,.926-.29q.011.011,1.327.446,2.264.736,2.7.887a2.082,2.082,0,0,1,.524.229.673.673,0,0,1,.245.68Zm-7.5-7.049q.056,1.137-.6,1.361-.647.19-1.272-.792L6.237,4.08a.7.7,0,0,1,.212-.691,5.788,5.788,0,0,1,2.314-1,5.928,5.928,0,0,1,2.5-.352.681.681,0,0,1,.547.5q.034.2.245,3.407T12.327,10.181Zm7.384,1.2a.679.679,0,0,1-.29.658q-.167.112-3.67.959-.747.167-1.015.257l.011-.022a.769.769,0,0,1-.513-.044.914.914,0,0,1-.413-.357.786.786,0,0,1,0-.971q.011-.011.836-1.137,1.394-1.908,1.673-2.275a2.423,2.423,0,0,1,.379-.435A.7.7,0,0,1,17.435,8a4.482,4.482,0,0,1,1.372,1.489,4.81,4.81,0,0,1,.9,1.868v.034Z"
          />
        </symbol>
        <symbol id="icon-x" viewBox="0 0 24 24">
          <path
            d="M14.1173 9.62177L20.4459 2H18.9463L13.4511 8.61788L9.06215 2H4L10.637 12.0074L4 20H5.49977L11.3028 13.0113L15.9379 20H21L14.1169 9.62177H14.1173ZM12.0632 12.0956L11.3907 11.0991L6.04016 3.16971H8.34371L12.6617 9.56895L13.3341 10.5655L18.947 18.8835H16.6434L12.0632 12.096V12.0956Z"
          />
        </symbol>
        <symbol id="icon-xanga" viewBox="0 0 24 24">
          <path
            d="M9,9h6v6H9V9z M3,9h6V3H3V9z M15,9h6V3h-6V9z M15,21h6v-6h-6V21z M3,21h6v-6H3V21z"
          />
        </symbol>
        <symbol id="icon-youtube" viewBox="0 0 24 24">
          <path
            d="M21.8,8.001c0,0-0.195-1.378-0.795-1.985c-0.76-0.797-1.613-0.801-2.004-0.847c-2.799-0.202-6.997-0.202-6.997-0.202 h-0.009c0,0-4.198,0-6.997,0.202C4.608,5.216,3.756,5.22,2.995,6.016C2.395,6.623,2.2,8.001,2.2,8.001S2,9.62,2,11.238v1.517 c0,1.618,0.2,3.237,0.2,3.237s0.195,1.378,0.795,1.985c0.761,0.797,1.76,0.771,2.205,0.855c1.6,0.153,6.8,0.201,6.8,0.201 s4.203-0.006,7.001-0.209c0.391-0.047,1.243-0.051,2.004-0.847c0.6-0.607,0.795-1.985,0.795-1.985s0.2-1.618,0.2-3.237v-1.517 C22,9.62,21.8,8.001,21.8,8.001z M9.935,14.594l-0.001-5.62l5.404,2.82L9.935,14.594z"
          />
        </symbol>
      </defs>
    </svg>
    <!-- End Jetpack Google Analytics -->
  </head>
              <body
              class="post-template-default single single-post postid-9429 single-format-standard wp-custom-logo divienhancer-free et_pb_button_helper_class et_fixed_nav et_hide_nav et_pb_show_title et_secondary_nav_enabled et_primary_nav_dropdown_animation_fade et_secondary_nav_dropdown_animation_fade et_header_style_left et_pb_footer_columns4 et_cover_background et_pb_gutter windows et_pb_gutters3 et_pb_pagebuilder_layout et_right_sidebar et_divi_theme et-db"
            >
              <div id="page-container">
                <div id="top-header">
                  <div class="container clearfix">
                    <div id="et-info">
                      <span id="et-info-phone">+34 658 13 71 65</span>

                      <a href="mailto:ps.diego.duran@gmail.com"
                        ><span id="et-info-email">ps.diego.duran@gmail.com</span></a
                      >
                    </div>

                    <div id="et-secondary-menu"></div>
                  </div>
                </div>

                <header id="main-header" data-height-onload="66">
                  <div class="container clearfix et_menu_container">
                    <div class="logo_container">
                      <span class="logo_helper"></span>
                      <a href="../../../../index.html">
                        <img
                          src="../../../../wp-content/uploads/2022/03/firma-pequena-2.webp"
                          width="145"
                          height="44"
                          alt="Ps. Diego Durán"
                          id="logo"
                          data-height-percentage="54"
                        />
                      </a>
                    </div>
                    <div id="et-top-navigation" data-height="66" data-fixed-height="45">
                      <nav id="top-menu-nav">
                        <ul id="top-menu" class="nav">
                          <li
                            id="menu-item-6142"
                            class="menu-item menu-item-type-post_type menu-item-object-page menu-item-home menu-item-6142"
                          >
                            <a href="../../../../index.html">Online Psychotherapy</a>
                          </li>
                          <li
                            id="menu-item-6784"
                            class="menu-item menu-item-type-post_type menu-item-object-page menu-item-6784"
                          >
                            <a href="../../../../psicoterapia-de-pareja/index.html"
                              >Couples Therapy</a
                            >
                          </li>
                          <li
                            id="menu-item-1212"
                            class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1212"
                          >
                            <a href="../../../../formacion/index.html">Couples Therapy</a>
                          </li>
                          <li
                            id="menu-item-7187"
                            class="menu-item menu-item-type-post_type menu-item-object-page menu-item-7187"
                          >
                            <a href="../../../../preguntas_frecuentes/index.html"
                              >Frequently Asked Questions</a
                            >
                          </li>
                          <li
                            id="menu-item-2002"
                            class="menu-item menu-item-type-post_type menu-item-object-page menu-item-2002"
                          >
                            <a href="../../../../tarifas/index.html">Rates</a>
                          </li>
                          <li
                            id="menu-item-6445"
                            class="menu-item menu-item-type-post_type menu-item-object-page menu-item-6445"
                          >
                            <a href="../../../../blog/index.html">Blog</a>
                          </li>
                          <li
                            id="menu-item-2003"
                            class="menu-item menu-item-type-post_type menu-item-object-page menu-item-2003"
                          >
                            <a href="../../../../contacto/index.html">Contact</a>
                          </li>
                          <li>
                            <select id="opciones" onchange="redirigir()">
                              <option value="https://psdiegoduran.com/es/">ES</option>
                              <option value="https://psdiegoduran.com/en/">EN</option>
                            </select>

                            <script>
                              function redirigir() {
                                var selectedOption =
                                  document.getElementById("opciones").value;
                                window.location.href = selectedOption;
                              }
                            </script>
                          </li>
                        </ul>
                      </nav>

                      <div id="et_mobile_nav_menu">
                        <div class="mobile_nav closed">
                          <span class="select_page">Select page</span>
                          <span class="mobile_menu_bar mobile_menu_bar_toggle"></span>
                        </div>
                      </div>
                    </div>
                    <!-- #et-top-navigation -->
                  </div>
                  <!-- .container -->
                </header>
                <div id="et-main-area">
                <div id="main-content">
                  <div class="container">
                    <div id="content-area" class="clearfix">
                      <div id="left-area">
                        ${ed.getHtml()}
                      </div>

                      <div id="sidebar">
                        <div id="categories-2" class="et_pb_widget widget_categories">
                          <h4 class="widgettitle">Categories</h4>
                          <form
                            action="https://diegoduranblog.wpcomstaging.com/"
                            method="get"
                          >
                            <label class="screen-reader-text" for="cat"
                              >Categories</label
                            ><select name="cat" id="cat" class="postform">
                              <option value="-1">Choose category</option>
                              <option class="level-0" value="1316541">
                                Albert Ellis&nbsp;&nbsp;(1)
                              </option>
                              <option class="level-0" value="705635884">
                                Anáfora&nbsp;&nbsp;(1)
                              </option>
                              <option class="level-0" value="492454">
                                Arthur Schopenhauer&nbsp;&nbsp;(1)
                              </option>
                              <option class="level-1" value="52925">
                                &nbsp;&nbsp;&nbsp;Felicidad&nbsp;&nbsp;(1)
                              </option>
                              <option class="level-0" value="1050963">
                                Audiolibros&nbsp;&nbsp;(5)
                              </option>
                              <option class="level-0" value="705635883">
                                Casa&nbsp;&nbsp;(1)
                              </option>
                              <option class="level-0" value="137995">
                                Depresión&nbsp;&nbsp;(1)
                              </option>
                              <option class="level-0" value="745884">
                                Epicteto&nbsp;&nbsp;(1)
                              </option>
                              <option class="level-0" value="1819879">
                                Estoicismo&nbsp;&nbsp;(7)
                              </option>
                              <option class="level-0" value="414995">
                                Filosofía y Psicología&nbsp;&nbsp;(15)
                              </option>
                              <option class="level-0" value="376">
                                Humor&nbsp;&nbsp;(1)
                              </option>
                              <option class="level-0" value="705636277">
                                Infidelidad&nbsp;&nbsp;(4)
                              </option>
                              <option class="level-0" value="992283">
                                inmigrantes&nbsp;&nbsp;(5)
                              </option>
                              <option class="level-0" value="670676">
                                Inteligencia&nbsp;&nbsp;(1)
                              </option>
                              <option class="level-0" value="705636279">
                                Libros&nbsp;&nbsp;(1)
                              </option>
                              <option class="level-0" value="563606">
                                Marco Aurelio&nbsp;&nbsp;(1)
                              </option>
                              <option class="level-0" value="25372">
                                Melancolía&nbsp;&nbsp;(2)
                              </option>
                              <option class="level-0" value="5130236">
                                Neuroticismo&nbsp;&nbsp;(1)
                              </option>
                              <option class="level-0" value="1482">
                                Películas&nbsp;&nbsp;(1)
                              </option>
                              <option class="level-0" value="705635882">
                                Pertenencia&nbsp;&nbsp;(1)
                              </option>
                              <option class="level-0" value="2954946">
                                Psicología Analítica&nbsp;&nbsp;(4)
                              </option>
                              <option class="level-0" value="10569">
                                Psicoterapia&nbsp;&nbsp;(4)
                              </option>
                              <option class="level-0" value="705636278">
                                PsicoCouples Therapy&nbsp;&nbsp;(4)
                              </option>
                              <option class="level-0" value="4644111">
                                Online Psychotherapy&nbsp;&nbsp;(3)
                              </option>
                              <option class="level-0" value="282211">
                                Ralph Waldo Emerson&nbsp;&nbsp;(1)
                              </option>
                              <option class="level-0" value="705636280">
                                Recomendaciones&nbsp;&nbsp;(1)
                              </option>
                              <option class="level-0" value="23586520">
                                Relaciones tóxicas&nbsp;&nbsp;(3)
                              </option>
                              <option class="level-0" value="258011">
                                Seneca&nbsp;&nbsp;(1)
                              </option>
                              <option class="level-0" value="1771">
                                Sin categoría&nbsp;&nbsp;(5)
                              </option>
                              <option class="level-0" value="5934">
                                Sociedad&nbsp;&nbsp;(7)
                              </option>
                              <option class="level-0" value="705635868">
                                Técnica de Visualización negativa&nbsp;&nbsp;(1)
                              </option>
                              <option class="level-0" value="23801134">
                                Terapia Narrativa&nbsp;&nbsp;(1)
                              </option>
                              <option class="level-0" value="8071617">
                                Tesis Maestría&nbsp;&nbsp;(2)
                              </option>
                              <option class="level-0" value="705635885">
                                Toko-pa Turner&nbsp;&nbsp;(1)
                              </option>
                              <option class="level-0" value="2129785">
                                Trastorno Limite de la Personalidad&nbsp;&nbsp;(1)
                              </option>
                              <option class="level-0" value="34714">
                                Trauma&nbsp;&nbsp;(6)
                              </option>
                            </select>
                          </form>
                          <script type="text/javascript">
                            /* <![CDATA[ */

                            (function () {
                              var dropdown = document.getElementById("cat");
                              function onCatChange() {
                                if (
                                  dropdown.options[dropdown.selectedIndex].value > 0
                                ) {
                                  dropdown.parentNode.submit();
                                }
                              }
                              dropdown.onchange = onCatChange;
                            })();

                            /* ]]> */
                          </script>
                        </div>
                        <div
                          id="recent-comments-2"
                          class="et_pb_widget widget_recent_comments"
                        ></div>
                        <div
                          id="jetpack_widget_social_icons-4"
                          class="et_pb_widget jetpack_widget_social_icons"
                        >
                          <h4 class="widgettitle">Redes Sociales</h4>
                          <ul class="jetpack-social-widget-list size-medium">
                            <li class="jetpack-social-widget-item">
                              <a
                                href="https://www.linkedin.com/in/diego-durán-93340a3a/"
                                target="_blank"
                                rel="noopener noreferrer"
                                ><span class="screen-reader-text">LinkedIn</span
                                ><svg
                                  class="icon icon-linkedin"
                                  aria-hidden="true"
                                  role="presentation"
                                >
                                  <use
                                    href="#icon-linkedin"
                                    xlink:href="#icon-linkedin"
                                  ></use>
                                </svg>
                              </a>
                            </li>

                            <li class="jetpack-social-widget-item">
                              <a
                                href="https://www.facebook.com/Ps-Diego-Durán-536946423377633/"
                                target="_blank"
                                rel="noopener noreferrer"
                                ><span class="screen-reader-text">Facebook</span
                                ><svg
                                  class="icon icon-facebook"
                                  aria-hidden="true"
                                  role="presentation"
                                >
                                  <use
                                    href="#icon-facebook"
                                    xlink:href="#icon-facebook"
                                  ></use>
                                </svg>
                              </a>
                            </li>

                            <li class="jetpack-social-widget-item">
                              <a
                                href="https://join.skype.com/invite/jYauItqe8Xor"
                                target="_blank"
                                rel="noopener noreferrer"
                                ><span class="screen-reader-text">Skype</span
                                ><svg
                                  class="icon icon-skype"
                                  aria-hidden="true"
                                  role="presentation"
                                >
                                  <use
                                    href="#icon-skype"
                                    xlink:href="#icon-skype"
                                  ></use>
                                </svg>
                              </a>
                            </li>

                            <li class="jetpack-social-widget-item">
                              <a
                                href="https://www.messenger.com/t/ps.diego.duran"
                                target="_blank"
                                rel="noopener noreferrer"
                                ><svg
                                  class="icon icon-chain"
                                  aria-hidden="true"
                                  role="presentation"
                                >
                                  <use
                                    href="#icon-chain"
                                    xlink:href="#icon-chain"
                                  ></use>
                                </svg>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <span class="et_pb_scroll_top et-pb-icon"></span>

                <footer id="main-footer">
                  <div class="container">
                    <div id="footer-widgets" class="clearfix">
                      <div class="footer-widget">
                        <div
                          id="media_image-2"
                          class="fwidget et_pb_widget widget_media_image"
                        >
                          <style>
                            .widget.widget_media_image {
                              overflow: hidden;
                            }
                            .widget.widget_media_image img {
                              height: auto;
                              max-width: 100%;
                            }</style><img
                            width="300"
                            height="92"
                            src="../../../../wp-content/uploads/2021/02/Logo-Diego-Duran-blanco-300x92.png"
                            class="image wp-image-6238 attachment-medium size-medium"
                            alt="Ps. Diego Durán"
                            style="max-width: 100%; height: auto"
                            decoding="async"
                            loading="lazy"
                          />
                        </div>
                      </div>
                      <div class="footer-widget">
                        <div
                          id="media_image-6"
                          class="fwidget et_pb_widget widget_media_image"
                        >
                          <style>
                            .widget.widget_media_image {
                              overflow: hidden;
                            }
                            .widget.widget_media_image img {
                              height: auto;
                              max-width: 100%;
                            }</style><img
                            width="501"
                            height="92"
                            src="../../../../wp-content/uploads/2021/02/Logos-pie_01.png"
                            class="image wp-image-6489 attachment-full size-full"
                            alt="APAG, Cámara de Comercio de Bilbao"
                            style="max-width: 100%; height: auto"
                            decoding="async"
                            loading="lazy"
                            srcset="
                              https://diegoduranblog.wpcomstaging.com/wp-content/uploads/2021/02/Logos-pie_01.png        501w,
                              https://diegoduranblog.wpcomstaging.com/wp-content/uploads/2021/02/Logos-pie_01-480x88.png 480w
                            "
                            sizes="(min-width: 0px) and (max-width: 480px) 480px, (min-width: 481px) 501px, 100vw"
                          />
                        </div>
                      </div>
                      <div class="footer-widget">
                        <div
                          id="media_image-7"
                          class="fwidget et_pb_widget widget_media_image"
                        >
                          <style>
                            .widget.widget_media_image {
                              overflow: hidden;
                            }
                            .widget.widget_media_image img {
                              height: auto;
                              max-width: 100%;
                            }</style><img
                            width="499"
                            height="92"
                            src="../../../../wp-content/uploads/2021/02/Logos-pie_02.png"
                            class="image wp-image-6488 attachment-full size-full"
                            alt="Deusto, Omie"
                            style="max-width: 100%; height: auto"
                            decoding="async"
                            loading="lazy"
                            srcset="
                              https://diegoduranblog.wpcomstaging.com/wp-content/uploads/2021/02/Logos-pie_02.png        499w,
                              https://diegoduranblog.wpcomstaging.com/wp-content/uploads/2021/02/Logos-pie_02-480x88.png 480w
                            "
                            sizes="(min-width: 0px) and (max-width: 480px) 480px, (min-width: 481px) 499px, 100vw"
                          />
                        </div>
                      </div>
                      <div class="footer-widget">
                        <div
                          id="media_image-8"
                          class="fwidget et_pb_widget widget_media_image"
                        >
                          <style>
                            .widget.widget_media_image {
                              overflow: hidden;
                            }
                            .widget.widget_media_image img {
                              height: auto;
                              max-width: 100%;
                            }</style><img
                            width="500"
                            height="92"
                            src="../../../../wp-content/uploads/2021/02/Logos-pie_03.png"
                            class="image wp-image-6487 attachment-full size-full"
                            alt="Ucu, Unifa"
                            style="max-width: 100%; height: auto"
                            decoding="async"
                            loading="lazy"
                            srcset="
                              https://diegoduranblog.wpcomstaging.com/wp-content/uploads/2021/02/Logos-pie_03.png        500w,
                              https://diegoduranblog.wpcomstaging.com/wp-content/uploads/2021/02/Logos-pie_03-480x88.png 480w
                            "
                            sizes="(min-width: 0px) and (max-width: 480px) 480px, (min-width: 481px) 500px, 100vw"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div id="footer-bottom">
                    <div class="container clearfix">
                      <p id="footer-info">
                        Diseñado por
                        <a
                          href="https://www.elegantthemes.com/"
                          title="Premium WordPress Themes"
                          >Elegant Themes</a
                        >
                        | Desarrollado por
                      </p>
                    </div>
                  </div>
                </footer>
              </div>
              </div>
</body>
</html>
              `
            }
          }
        }
      }
    })
    // Obtén el panel al que quieres agregar los botones
    let panel = editor.Panels.getPanel('options')

    // Agrega los botones al panel
    panel.get('buttons').add([
      {
        id: 'open-modal-btn',
        active: false,
        className: 'button-class',
        label:
          '<img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1ib29rLXBsdXMiPjxwYXRoIGQ9Ik00IDE5LjV2LTE1QTIuNSAyLjUgMCAwIDEgNi41IDJIMjB2MjBINi41YTIuNSAyLjUgMCAwIDEgMC01SDIwIi8+PHBhdGggZD0iTTkgMTBoNiIvPjxwYXRoIGQ9Ik0xMiA3djYiLz48L3N2Zz4=">',
        command: 'openModalCommandHTML'
      },
      {
        id: 'open-modal-btn2',
        active: false,
        className: 'button-class',
        label:
          '<img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1jaGV2cm9ucy1kb3duIj48cGF0aCBkPSJtNyA2IDUgNSA1LTUiLz48cGF0aCBkPSJtNyAxMyA1IDUgNS01Ii8+PC9zdmc+"><div id="exportHTML" style="display: none;"></div>',
        command: 'exportSimple'
      },
      {
        id: 'open-modal-btn3',
        active: false,
        className: 'button-class',
        label:
          '<img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1maWxlLWNvZGUiPjxwYXRoIGQ9Ik0xNSAySDZhMiAyIDAgMCAwLTIgMnYxNmEyIDIgMCAwIDAgMiAyaDEyYTIgMiAwIDAgMCAyLTJWN1oiLz48cGF0aCBkPSJNMTQgMnY0YTIgMiAwIDAgMCAyIDJoNCIvPjxwYXRoIGQ9Im0xMCAxMy0yIDIgMiAyIi8+PHBhdGggZD0ibTE0IDE3IDItMi0yLTIiLz48L3N2Zz4=">',
        command: 'openModalCommand'
      }
    ])

    editor.Panels.addButton('options', {
      id: 'open-templates',
      className: 'fa fa-folder-o',
      attributes: {
        title: 'Open projects and templates'
      },
      command: 'open-templates' //Open modal
    })
    editor.Panels.addButton('views', {
      id: 'open-pages',
      className: 'fa fa-file-o',
      attributes: {
        title: 'Take Screenshot'
      },
      command: 'open-pages',
      togglable: false
    })

    editor.Commands.add('openModalCommand', {
      run: function (editor, sender) {
        openModalCSS()
      },
      stop: function (editor, sender) {
        // Implement any cleanup logic if needed
      }
    })
    const openModalCSS = () => {
      editor.Modal.open({
        title: '<p class="text-2xl">Sube tu archivo de estilos</p>',
        content: '<input type="file" id="fileInput" multiple>'
      })

      const fileInput = document.getElementById('fileInput')
      fileInput.addEventListener('change', function () {
        const file = this.files[0]

        if (file) {
          const reader = new FileReader()

          reader.onload = function (e) {
            const fileContent = e.target.result
            console.log(fileContent)

            const storedData = localStorage.getItem('gjsProject')

            // Parsea el contenido a formato JSON
            const parsedData = storedData ? JSON.parse(storedData) : {}

            // Si no existe un array de estilos, créalo
            parsedData.styles = parsedData.styles || []

            // Asigna el nuevo estilo directamente al array de estilos
            parsedData.styles = editor.addStyle(fileContent)

            // Convierte el objeto a cadena y guárdalo en el localStorage
            localStorage.setItem('gjsProject', JSON.stringify(parsedData))
          }

          reader.readAsText(file)
        }
      })
    }

    editor.Commands.add('openModalCommandHTML', {
      run: function (editor, sender) {
        openModalHTML()
      },
      stop: function (editor, sender) {
        // Implement any cleanup logic if needed
      }
    })

    const openModalHTML = () => {
      editor.Modal.open({
        title: '<p class="text-2xl">Sube tu archivo de componentes</p>',
        content: '<input type="file" id="fileInputHTML" multiple>'
      })

      const fileInput = document.getElementById('fileInputHTML')
      fileInput.addEventListener('change', function () {
        const file = this.files[0]

        if (file) {
          const reader = new FileReader()

          reader.onload = function (e) {
            const fileContent = e.target.result
            editor.getComponents().add(`${fileContent}`)
          }

          reader.readAsText(file)
        }
      })
    }

    editor.Commands.add('exportSimple', {
      run: (editor) => {
        const exportHTML = editor.getHtml()
        console.log(exportHTML)
        let a = document.createElement('a')
        const parteOne = localStorage.getItem('parte1')
        const parteTwo = localStorage.getItem('parte2')
        // Crear el contenido del archivo HTML
        let htmlContent = `${parteOne}${exportHTML}${parteTwo}`

        // Crear un objeto Blob con el contenido del archivo HTML
        let file = new Blob([htmlContent], { type: 'text/html' })

        // Crear una URL para el archivo Blob
        a.href = URL.createObjectURL(file)

        // Establecer el nombre del archivo descargado
        a.download = 'index.html'

        // Simular un clic en el enlace para descargar el archivo
        a.click()
      }
    })
  }, [])
  return (
    <>
      <div id="gjs"></div>
    </>
  )
}

export default App
