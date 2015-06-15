(function () {
    'use strict';
    angular.module('app', [
        // PAGE SPECIFIC
        'domain.controller',

        'domains.controller',
        'domains.factory',
        'domains.directive',

        'categories.factory',

        // GENERAL
        'pdp.config',
        'detector.appDetector',

        // 3RD PARTY
        'angular-loading-bar',
        'toastr'
    ]);
}());
(function () {
    'use strict';
    var app = angular.module('pdp.config', ['angular-loading-bar']);

    // Avoid clashing with Blade templating
    app.config(function ($interpolateProvider) {
        $interpolateProvider.startSymbol('[[');
        $interpolateProvider.endSymbol(']]');
    });

    // Remove spinner from angular-loading-bar
    app.config(['cfpLoadingBarProvider', function (cfpLoadingBarProvider) {
        cfpLoadingBarProvider.includeSpinner = false;
    }]);
}());
(function () {
    'use strict';
    var app = angular.module('categories.factory', []);
    var categoryUrl = '/category';

    app.factory('categoryFactory', function ($http) {
        return {
            getAll: function () {
                return $http.post(categoryUrl, []);
            }
        };
    });
}());
(function () {
    'use strict';
    var app = angular.module('detector.appDetector', []);

    app.factory('appDetector', function () {
        var appInfo = {
            'Tumblr': {
                icon: 'Tumblr.ico',
                url: 'http://tumblr.com',
                priority: 0.9
            },
            'TypePad': {
                icon: 'TypePad.ico',
                url: 'http://typepad.com',
                priority: 0.9
            },
            'Blogger': {
                icon: 'Blogger.ico',
                url: 'http://blogger.com',
                priority: 0.9
            },
            'Webs': {
                icon: 'webs.ico',
                url: 'http://www.webs.com/',
                priority: 0.9
            },
            'Weebly': {
                icon: 'weebly.ico',
                url: 'http://www.weebly.com/',
                priority: 0.9
            },
            'Webnode': {
                icon: 'webnode.ico',
                url: 'http://www.webnode.com/',
                priority: 0.9
            },
            'Jimdo': {
                icon: 'jimdo.ico',
                url: 'http://www.jimdo.com',
                priority: 0.9
            },
            'Jigsy': {
                icon: 'jigsy.ico',
                url: 'http://jigsy.com',
                priority: 0.9
            },
            'Yola': {
                icon: 'yola.ico',
                url: 'http://www.yola.com/',
                priority: 0.9
            },
            'vBulletin': {
                icon: 'vBulletin.ico',
                url: 'http://www.vbulletin.com/',
                priority: 1
            },
            'SMF': {
                title: 'Simple Machines Forum',
                icon: 'SMF.ico',
                url: 'http://www.simplemachines.org/',
                priority: 1
            },
            'phpBB': {
                icon: 'phpBB.ico',
                url: 'http://www.phpbb.com',
                priority: 1
            },
            'IPB': {
                title: 'Invision Power Board',
                icon: 'IPB.ico',
                url: 'http://invisionpower.com/',
                priority: 1
            },
            'miniBB': {
                icon: 'miniBB.ico',
                url: 'http://www.minibb.com/',
                priority: 1
            },
            'MyBB': {
                icon: 'mybb.ico',
                url: 'http://www.mybb.com/',
                priority: 1
            },
            'XenForo': {
                icon: 'xenforo.ico',
                url: 'http://xenforo.com',
                priority: 1
            },

            'Drupal': {
                icon: 'Drupal.ico',
                url: 'http://drupal.org',
                priority: 1
            },
            'Ubercart': {
                icon: 'Ubercart.ico',
                url: 'http://www.ubercart.org/',
                priority: 0.9
            },
            'AlphaCMS': {
                icon: 'alphacms.ico',
                url: 'http://www.mego.com.vn',
                priority: 1
            },
            'TomatoCMS': {
                icon: 'tomatocms.ico',
                url: 'http://www.tomatocms.com/',
                priority: 1
            },
            'WordPress': {
                icon: 'WordPress.ico',
                url: 'http://wordpress.org',
                priority: 1
            },
            'WPML': {
                icon: 'WPML.ico',
                url: 'http://wpml.org/',
                priority: 1.1
            },
            'bbPress': {
                icon: 'bbPress.ico',
                url: 'http://bbpress.org',
                priority: 1
            },
            'Movable Type': {
                icon: 'MovableType.ico',
                url: 'http://www.movabletype.org/',
                priority: 1
            },
            'Serendipity': {
                icon: 'Serendipity.png',
                url: 'http://www.s9y.org/',
                priority: 1
            },
            'concrete5': {
                icon: 'concrete5.gif',
                url: 'http://www.concrete5.org',
                priority: 1
            },
            'MediaWiki': {
                icon: 'MediaWiki.ico',
                url: 'http://www.mediawiki.org/',
                priority: 1
            },
            'DokuWiki': {
                icon: 'DokuWiki.ico',
                url: 'http://www.dokuwiki.org/',
                priority: 1
            },
            'OpenACS': {
                icon: 'openacs.ico',
                url: 'http://openacs.org',
                priority: 1
            },
            'Joomla': {
                icon: 'Joomla.ico',
                url: 'http://joomla.org',
                priority: 1
            },
            'Magento': {
                icon: 'Magento.ico',
                url: 'http://www.magentocommerce.com/',
                priority: 1
            },
            'XOOPS': {
                icon: 'XOOPS.ico',
                url: 'http://xoops.org',
                priority: 1
            },
            'Plone': {
                icon: 'Plone.ico',
                url: 'http://plone.org/',
                priority: 1
            },
            'CMSMadeSimple': {
                title: 'CMS Made Simple',
                icon: 'CMSMadeSimple.ico',
                url: 'http://www.cmsmadesimple.org/',
                priority: 1
            },
            'SilverStripe': {
                icon: 'SilverStripe.png',
                url: 'http://silverstripe.org',
                priority: 1
            },
            'MODx': {
                icon: 'MODx.ico',
                url: 'http://modxcms.com/',
                priority: 1
            },
            'Amiro.CMS': {
                icon: 'Amiro.CMS.ico',
                url: 'http://www.amirocms.com/',
                priority: 1
            },
            'JaliosJCMS': {
                icon: 'JaliosJCMS.ico',
                url: 'http://www.jalios.com',
                priority: 1,
                title: 'Jalios JCMS'
            },
            'Koobi': {
                icon: 'Koobi.ico',
                url: 'http://www.dream4.de/cms/',
                priority: 1
            },
            'Liferay': {
                icon: 'LifeRay.ico',
                url: 'http://www.liferay.com',
                priority: 1
            },
            'TYPO3': {
                icon: 'TYPO3.ico',
                url: 'http://typo3.org/',
                priority: 1
            },
            'Contao': {
                icon: 'contao.ico',
                url: 'http://www.contao.org',
                priority: 1
            },
            'Fatwire': {
                icon: 'Fatwire.ico',
                url: 'http://www.fatwire.com',
                priority: 1
            },
            'PHP-Fusion': {
                icon: 'PHP-Fusion.ico',
                url: 'http://php-fusion.co.uk/',
                priority: 1
            },
            'PHP-Nuke': {
                icon: 'PHP-Nuke.ico',
                url: 'http://phpnuke.org/',
                priority: 1
            },
            'WebGUI': {
                icon: 'WebGUI.ico',
                url: 'http://www.webgui.org/',
                priority: 1
            },
            'ez Publish': {
                icon: 'eZ.ico',
                url: 'http://ez.no/',
                priority: 1
            },
            'BIGACE': {
                icon: 'BIGACE.ico',
                url: 'http://www.bigace.de/',
                priority: 1
            },
            'OpenCMS': {
                icon: 'opencms.ico',
                url: 'http://www.opencms.org/',
                priority: 1
            },
            '1c-bitrix': {
                icon: '1c-bitrix.ico',
                url: 'http://www.1c-bitrix.ru/',
                priority: 1
            },
            'MojoMotor': {
                icon: 'mojomotor.ico',
                url: '	http://mojomotor.com',
                priority: 1
            },
            'GetSimple': {
                icon: 'getsimple.png',
                url: '	http://get-simple.info/',
                priority: 1
            },
            'DataLifeEngine': {
                title: 'DataLife Engine',
                icon: 'datalife.ico',
                url: 'http://dle-news.ru/',
                priority: 1
            },
            'Elgg': {
                icon: 'Elgg.ico',
                url: 'http://www.elgg.org/',
                priority: 1
            },
            'DotNetNuke': {
                icon: 'DotNetNuke.ico',
                url: 'http://www.dotnetnuke.com/',
                priority: 1
            },
            'Sitefinity': {
                icon: 'Sitefinity.ico',
                url: 'http://www.sitefinity.com/',
                priority: 1
            },
            'SharePoint': {
                icon: 'SharePoint.png',
                url: 'http://sharepoint.microsoft.com',
                priority: 1,
                title: 'Microsoft SharePoint'
            },
            'ZenPhoto': {
                icon: 'ZenPhoto.ico',
                url: 'http://www.zenphoto.org',
                priority: 1
            },
            'Gallery2': {
                icon: 'Gallery2.ico',
                url: 'http://gallery.menalto.com/',
                priority: 1
            },
            'Avactis': {
                icon: 'avactis.ico',
                url: 'http://www.avactis.com',
                priority: 1
            },
            'PrestaShop': {
                icon: 'PrestaShop.ico',
                url: 'http://www.prestashop.com/',
                priority: 1
            },
            'Prostores': {
                icon: 'prostores.ico',
                url: 'http://www.prostores.com',
                priority: 1
            },
            'ZenCart': {
                icon: 'zencart.ico',
                url: 'http://www.zen-cart.com',
                priority: 1
            },
            'ErainCart': {
                icon: 'eraincart.ico',
                url: 'http://eraincart.com',
                priority: 1
            },
            'Volusion': {
                icon: 'volusion.ico',
                url: 'http://www.volusion.com',
                priority: 1
            },
            'osCommerce': {
                icon: 'osCommerce.ico',
                url: 'http://www.oscommerce.com',
                priority: 1
            },
            'OpenCart': {
                icon: 'opencart.png',
                url: 'http://www.opencart.com',
                priority: 1
            },
            'Moodle': {
                icon: 'moodle.png',
                url: 'http://moodle.org',
                priority: 1
            },
            'SugarCRM': {
                icon: 'sugarcrm.ico',
                url: 'http://www.sugarcrm.com',
                priority: 1
            },
            'PivotX': {
                icon: 'pivotx.ico',
                url: 'http://pivotx.net',
                priority: 1
            },
            'Shibboleth': {
                icon: 'shibboleth.png',
                url: 'http://shibboleth.internet2.edu/',
                priority: 1
            },
            'Alfresco': {
                icon: 'Alfresco.png',
                url: 'http://www.alfresco.com',
                priority: 1
            },
            'ClanSphere': {
                icon: 'ClanSphere.png',
                url: 'http://csphere.eu',
                priority: 1
            },
            'jQuery': {
                icon: 'jQuery.ico',
                url: 'http://jquery.com',
                priority: 2
            },
            'jQuery UI': {
                icon: 'jQuery_UI.ico',
                url: 'http://jqueryui.com/',
                priority: 1.9
            },
            'ExtJS': {
                icon: 'ExtJS.ico',
                url: 'http://www.extjs.com/',
                priority: 2
            },
            'Prototype': {
                icon: 'Prototype.ico',
                url: 'http://www.prototypejs.org/',
                priority: 2
            },
            'Closure': {
                icon: 'Closure.png',
                url: 'http://code.google.com/closure/',
                priority: 2
            },
            'MooTools': {
                icon: 'MooTools.ico',
                url: 'http://mootools.net/',
                priority: 2
            },
            'Dojo': {
                icon: 'dojo.ico',
                url: 'http://www.dojotoolkit.org/',
                priority: 2
            },
            'script.aculo.us': {
                icon: 'script.aculo.us.ico',
                url: 'http://script.aculo.us/',
                priority: 1.9
            },
            'YUI': {
                icon: 'YUI.ico',
                url: 'http://developer.yahoo.com/yui/',
                priority: 2
            },
            'Cappuccino': {
                icon: 'cappuccino.png',
                url: 'http://cappuccino.org/',
                priority: 2
            },
            'RightJS': {
                icon: 'rightjs.png',
                url: 'http://RightJS.org/',
                priority: 2
            },
            'OpenLayers': {
                icon: 'OpenLayers.ico',
                url: 'http://openlayers.org/',
                priority: 1.9
            },
            'Spine': {
                icon: 'spine.ico',
                url: 'http://spinejs.com',
                priority: 1.9
            },
            'Angular': {
                icon: 'angular.ico',
                url: 'http://angularjs.org/',
                priority: 1.5
            },
            'Zepto': {
                icon: 'zepto.png',
                url: 'http://zeptojs.com/',
                priority: 1.5
            },
            'Raphael': {
                icon: 'raphael.ico',
                url: 'http://raphaeljs.com/',
                priority: 2.9
            },
            'Typekit': {
                icon: 'typekit.ico',
                url: 'http://typekit.com/',
                priority: 2.9
            },
            'Cufon': {
                icon: 'cufon.ico',
                url: 'http://cufon.shoqolate.com/',
                priority: 2.9
            },
            'sIFR': {
                icon: 'sifr.gif',
                url: 'http://www.mikeindustries.com/blog/sifr/',
                priority: 2.9
            },
            'Modernizr': {
                icon: 'modernizr.ico',
                url: 'http://www.modernizr.com/',
                priority: 2.9
            },
            'Facebook': {
                title: 'Facebook Social plugins',
                icon: 'facebook.ico',
                url: 'http://developers.facebook.com/',
                priority: 2.9
            },
            'Twitter': {
                title: 'Twitter plugins',
                icon: 'twitter.ico',
                url: 'http://dev.twitter.com',
                priority: 2.9
            },
            'Buzz': {
                title: 'Google Buzz Button',
                icon: 'buzz.png',
                url: 'http://www.google.com/buzz/stuff',
                priority: 2.9
            },
            'Plus1': {
                title: 'Google Plus 1',
                icon: 'plus1.png',
                url: 'http://www.google.com/+1/button/',
                priority: 2.9
            },
            'AddThis': {
                icon: 'addthis.ico',
                url: 'http://www.addthis.com',
                priority: 2.9
            },
            'Backbone.js': {
                icon: 'Backbone.png',
                url: 'http://documentcloud.github.com/backbone/',
                priority: 1.9
            },
            'Underscore.js': {
                icon: 'Underscore.png',
                url: 'http://documentcloud.github.com/underscore/',
                priority: 2.9
            },
            'Head JS': {
                icon: 'headjs.gif',
                url: 'http://headjs.com',
                priority: 2.9
            },
            'Google Loader': {
                icon: 'google.ico',
                url: 'http://code.google.com/apis/loader',
                priority: 2.9
            },
            'Woopra': {
                icon: 'woopra.ico',
                url: 'http://www.woopra.com',
                priority: 3
            },
            'OpenWebAnalytics': {
                icon: 'owa.ico',
                url: 'http://www.openwebanalytics.com',
                priority: 3
            },
            'Google Analytics': {
                icon: 'Google_Analytics.ico',
                url: 'http://www.google.com/analytics/',
                priority: 3
            },
            'SiteCatalyst': {
                icon: 'SiteCatalyst.ico',
                url: 'http://www.omniture.com',
                priority: 3
            },
            'Coremetrics': {
                icon: 'coremetrics.ico',
                url: 'http://www.coremetrics.com',
                priority: 3
            },
            'Quantcast': {
                icon: 'Quantcast.ico',
                url: 'http://www.quantcast.com/',
                priority: 3
            },
            'Xiti': {
                title: 'Xiti Tracker',
                icon: 'xiti.ico',
                url: 'http://xiti.com/',
                priority: 3
            },
            'Piwik': {
                icon: 'Piwik.ico',
                url: 'http://piwik.org/',
                priority: 3
            },
            'Clicky': {
                icon: 'clicky.ico',
                url: 'http://getclicky.com/',
                priority: 3
            },
            'Disqus': {
                icon: 'Disqus.ico',
                url: 'http://disqus.com/',
                priority: 1
            },
            'GetSatisfaction': {
                icon: 'GetSatisfaction.gif',
                url: 'http://getsatisfaction.com',
                priority: 3
            },
            'Wibiya': {
                icon: 'Wibiya.ico',
                url: 'http://wibiya.com/',
                priority: 3
            },
            'Prettify': {
                title: 'Google Code Prettify',
                icon: 'google.ico',
                url: 'http://code.google.com/p/google-code-prettify/',
                priority: 3
            },
            'reCaptcha': {
                icon: 'reCaptcha.ico',
                url: 'http://recaptcha.net/',
                priority: 4
            },
            'Mollom': {
                icon: 'mollom.ico',
                url: 'http://mollom.com',
                priority: 4
            },
            'GoogleFontApi': {
                title: 'Google Font API',
                icon: 'google-font-api.gif',
                url: 'http://code.google.com/apis/webfonts/',
                priority: 4
            },
            'GoogleMapApi': {
                title: 'Google Map API',
                icon: 'gmap.png',
                url: 'http://code.google.com/apis/maps/',
                priority: 4
            },
            'SWFObject': {
                icon: 'SWFObject.ico',
                url: 'http://code.google.com/p/swfobject/',
                priority: 4
            },
            'OpenX': {
                icon: 'OpenX.ico',
                url: 'http://openx.org',
                priority: 5
            },
            'AdSense': {
                icon: 'AdSense.gif',
                url: 'https://www.google.com/adsense',
                priority: 5
            },
            'Chitika': {
                icon: 'chitika.ico',
                url: 'http://chitika.com/',
                priority: 5
            },
            'BuySellAds': {
                icon: 'buysellads.ico',
                url: 'http://buysellads.com/',
                priority: 5
            },
            'HumansTxt': {
                icon: 'humanstxt.ico',
                url: 'http://humanstxt.org/',
                priority: 5
            },
            'Bootstrap': {
                icon: 'bootstrap.ico',
                url: 'http://twitter.github.com/bootstrap/',
                priority: 5
            },
            'Ning': {
                icon: 'ning.ico',
                url: 'http://www.ning.com/',
                priority: 1
            },
            'ektron': {
                icon: 'ektron.ico',
                url: 'http://www.ektron.com/',
                priority: 1
            },
            'Mura CMS': {
                title: 'Mura CMS',
                icon: 'muracms.ico',
                url: 'http://www.getmura.com/',
                priority: 1
            },
            'Tiki Wiki CMS Groupware': {
                title: 'Tiki Wiki CMS Groupware',
                icon: 'TikiWikiCms.ico',
                url: 'http://info.tiki.org/',
                priority: 1
            },
            'etracker': {
                title: 'etracker',
                icon: 'etracker.ico',
                url: 'http://etracker.com/',
                priority: 1.2
            },
            'OpenTag': {
                icon: 'OpenTag.ico',
                url: 'http://opentag.qubitproducts.com',
                priority: 1.2
            },
            'SPDY': {
                icon: 'spdy.ico',
                url: 'http://www.chromium.org/spdy',
                priority: 5
            },
            'KISSmetrics': {
                icon: 'kissmetrics.ico',
                url: 'http://kissmetrics.com/',
                priority: 1
            },
            'LiveStreet': {
                icon: 'LiveStreetCms.ico',
                url: 'http://livestreetcms.com/',
                priority: 1
            },
            'PHP': {
                icon: 'php.ico',
                url: 'http://php.net/',
                priority: 1.5
            },
            'Apache': {
                icon: 'apache.ico',
                url: 'http://httpd.apache.org/',
                priority: 1.5
            },
            'nginx': {
                icon: 'nginx.ico',
                url: 'http://nginx.org/en/',
                priority: 1.5
            },
            'Varnish': {
                icon: 'varnish.ico',
                url: 'https://www.varnish-cache.org/',
                priority: 1.5
            },
            'IIS': {
                icon: 'iis.ico',
                url: 'http://www.iis.net/',
                priority: 1.5
            },
            'ASP.NET': {
                icon: 'asp.net.ico',
                url: 'http://www.asp.net/',
                priority: 1.5
            },
            'Nette': {
                icon: 'nette.ico',
                url: 'http://nette.org/',
                priority: 1.5
            },
            'Dinkly': {
                icon: 'dinkly.ico',
                url: 'https://github.com/lewsid/dinkly/',
                priority: 1.5
            }
        };

        function getFromMetaTags(body) {
            var regex = new RegExp("<meta.*?\/>", "g");
            var metas = body.match(regex);
            var meta_tests = {
                'generator': {
                    'Joomla': /joomla!?\s*([\d\.]+)?/i,
                    'vBulletin': /vBulletin\s*(.*)/i,
                    'WordPress': /WordPress\s*(.*)/i,
                    'XOOPS': /xoops/i,
                    'Plone': /plone/i,
                    'MediaWiki': /MediaWiki/i,
                    'CMSMadeSimple': /CMS Made Simple/i,
                    'SilverStripe': /SilverStripe/i,
                    'Movable Type': /Movable Type/i,
                    'Amiro.CMS': /Amiro/i,
                    'Koobi': /koobi/i,
                    'bbPress': /bbPress/i,
                    'DokuWiki': /dokuWiki/i,
                    'TYPO3': /TYPO3/i,
                    'PHP-Nuke': /PHP-Nuke/i,
                    'DotNetNuke': /DotNetNuke/i,
                    'Sitefinity': /Sitefinity\s+(.*)/i,
                    'WebGUI': /WebGUI/i,
                    'ez Publish': /eZ\s*Publish/i,
                    'BIGACE': /BIGACE/i,
                    'TypePad': /typepad\.com/i,
                    'Blogger': /blogger/i,
                    'PrestaShop': /PrestaShop/i,
                    'SharePoint': /SharePoint/,
                    'JaliosJCMS': /Jalios JCMS/i,
                    'ZenCart': /zen-cart/i,
                    'WPML': /WPML/i,
                    'PivotX': /PivotX/i,
                    'OpenACS': /OpenACS/i,
                    'AlphaCMS': /alphacms\s+(.*)/i,
                    'concrete5': /concrete5 -\s*(.*)$/,
                    'Webnode': /Webnode/,
                    'GetSimple': /GetSimple/,
                    'DataLifeEngine': /DataLife Engine/,
                    'ClanSphere': /ClanSphere/,
                    'Mura CMS': /Mura CMS\s*(.*)/i,
                    'Tiki Wiki CMS Groupware': /Tiki/i
                },
                'copyright': {
                    'phpBB': /phpBB/i
                },
                'elggrelease': {
                    'Elgg': /.+/
                },
                'powered-by': {
                    'Serendipity': /Serendipity/i
                },
                'author': {
                    'Avactis': /Avactis Team/i
                }
            };

            var appsFound = [];
            var name;
            var result;
            var nameRegex = new RegExp('name="(.*?)"');
            var contentRegex = new RegExp('content="(.*?)"');

            for (var idx in metas) {
                var metaTag = metas[idx];
                var metaName = metaTag.match(nameRegex);

                if (!metaName || !meta_tests[metaName[1]]) {
                    continue;
                }

                name = metaName[1].toLowerCase();

                for (var t in meta_tests[name]) {
                    if (t in appsFound) {
                        continue;
                    }

                    var content = metaTag.match(contentRegex);

                    result = meta_tests[name][t].exec(content[1]);
                    if (result) {
                        appsFound.push({
                            name: t,
                            version: result[1],
                            icon: appInfo[t]['icon'],
                            url: appInfo[t]['url'],
                            priority: appInfo[t]['priority']
                        });
                    }
                }
            }

            return appsFound;
        }

        function sortApps(array) {
            var a = array.concat();
            for (var i = 0; i < a.length; ++i) {
                for (var j = i + 1; j < a.length; ++j) {
                    if (a[i].name === a[j].name) {
                        a.splice(j--, 1);
                    }
                }
            }

            return a;
        }

        function getByScriptsAndLinks(body) {
            var appsFound = [];
            var text_tests = {
                'SMF': /<script .+\s+var smf_/i,
                'Magento': /var BLANK_URL = '[^>]+js\/blank\.html'/i,
                'Tumblr': /<iframe src=("|')http:\/\/\S+\.tumblr\.com/i,
                'WordPress': /<link rel=("|')stylesheet("|') [^>]+wp-content/i,
                'Closure': /<script[^>]*>.*goog\.require/i,
                'Liferay': /<script[^>]*>.*LifeRay\.currentURL/i,
                'vBulletin': /vbmenu_control/i,
                'MODx': /(<a[^>]+>Powered by MODx<\/a>|var el= \$\('modxhost'\);|<script type=("|')text\/javascript("|')>var MODX_MEDIA_PATH = "media";)/i,
                'miniBB': /<a href=("|')[^>]+minibb.+\s*<!--End of copyright link/i,
                'PHP-Fusion': /(href|src)=["']?infusions\//i,
                'OpenX': /(href|src)=["'].*delivery\/(afr|ajs|avw|ck)\.php[^"']*/,
                'GetSatisfaction': /asset_host\s*\+\s*"javascripts\/feedback.*\.js/igm,
                'Fatwire': /\/Satellite\?|\/ContentServer\?/,
                'Contao': /powered by (TYPOlight|Contao)/i,
                'Moodle': /<link[^>]*\/theme\/standard\/styles.php".*>|<link[^>]*\/theme\/styles.php\?theme=.*".*>/,
                '1c-bitrix': /<link[^>]*\/bitrix\/.*?>/i,
                'OpenCMS': /<link[^>]*\.opencms\..*?>/i,
                'HumansTxt': /<link[^>]*rel=['"]?author['"]?/i,
                'GoogleFontApi': /ref=["']?http:\/\/fonts.googleapis.com\//i,
                'Prostores': /-legacycss\/Asset">/,
                'osCommerce': /(product_info\.php\?products_id|_eof \/\/-->)/,
                'OpenCart': /index.php\?route=product\/product/,
                'Shibboleth': /<form action="\/idp\/Authn\/UserPassword" method="post">/,
                'Google Analytics': /google-analytics.com\/(ga|urchin).js/i,
                'Quantcast': /quantserve\.com\/quant\.js/i,
                'Prototype': /prototype\.js/i,
                'Joomla': /\/components\/com_/,
                'Ubercart': /uc_cart/i,
                'MooTools': /mootools/i,
                'Dojo': /dojo(\.xd)?\.js/i,
                'script.aculo.us': /scriptaculous\.js/i,
                'Disqus': /disqus.com/i,
                'Wibiya': /wibiya\.com\/Loaders\//i,
                'reCaptcha': /(google\.com\/recaptcha|api\.recaptcha\.net\/)/i,
                'Mollom': /mollom\/mollom\.js/i, // only work on Drupal now
                'ZenPhoto': /zp-core\/js/i,
                'Gallery2': /main\.php\?.*g2_.*/i,
                'AdSense': /pagead\/show_ads\.js/,
                'XenForo': /js\/xenforo\//i,
                'Cappuccino': /Frameworks\/Objective-J\/Objective-J\.js/,
                'Avactis': /\/avactis-themes\//i,
                'Volusion': /a\/j\/javascripts\.js/,
                'AddThis': /addthis\.com\/js/,
                'BuySellAds': /buysellads.com\/.*bsa\.js/,
                'Weebly': /weebly\.com\/weebly\//,
                'Bootstrap': /bootstrap-.*\.js/,
                'Jigsy': /javascripts\/asterion\.js/, // may change later
                'Yola': /analytics\.yola\.net/, // may change later
                'Alfresco': /(alfresco)+(-min)?(\/scripts\/menu)?\.js/, // both Alfresco Share and Explorer apps
                'Mura CMS': /mura\/js/,
                'Tiki Wiki CMS Groupware': /tiki-js/,
                'OpenTag': /opentag.*\.js/,
                'KISSmetrics': /i.kissmetrics.com\/i.js/
            };

            for (var t in text_tests) {
                if (t in appsFound) {
                    continue;
                }

                if (text_tests[t].test(body)) {
                    appsFound.push({
                        name: t,
                        version: -1,
                        icon: appInfo[t]['icon'],
                        url: appInfo[t]['url'],
                        priority: appInfo[t]['priority']
                    });
                }
            }

            return appsFound;
        }

        return {
            getAppsFromHeaders: function (headers) {
                var appsFound = [];

                var knownHeaders = {
                    'x-powered-by': {
                        'Express.js': /Express/,
                        'PHP': /PHP\/?(.*)/,
                        'Dinkly': /DINKLY\/?(.*)/,
                        'ASP.NET': /ASP\.NET/,
                        'Nette': /Nette Framework/
                    },
                    'server': {
                        'Apache': /Apache\/?(.*)/,
                        'nginx': /nginx\/?(.*)/,
                        'IIS': /Microsoft-IIS\/?(.*)/
                    },
                    'via': {
                        'Varnish': /(.*) varnish/
                    }
                };

                for (var key in headers) {
                    var apps = knownHeaders[key.toLowerCase()];

                    if (!apps) {
                        continue;
                    }

                    var i = 1;
                    for (var app in apps) {
                        var matches = String(headers[key]).match(apps[app]);
                        if (matches) {
                            var version = matches[1] || -1;

                            appsFound.push({
                                name: app,
                                version: version,
                                icon: appInfo[app]['icon'],
                                url: appInfo[app]['url'],
                                priority: appInfo[app]['priority']
                            });
                        }

                        i++;
                    }
                }

                return appsFound;
            },

            getAppsFromBody: function (body) {
                var appsFoundFromBody = getFromMetaTags(body);
                var appsFoundFromScriptsAndLinks = getByScriptsAndLinks(body);

                return sortApps(appsFoundFromBody.concat(appsFoundFromScriptsAndLinks));
            }
        };
    });
}());
(function () {
    'use strict';
    var app = angular.module('domain.controller', []);

    app.controller('SingleDomainController', function (domainFactory, categoryFactory, appDetector, $timeout, $rootScope, $sce, toastr) {
        var vm = this;
        var scope = $rootScope;

        // domainid will be set by ng-init in domain template
        vm.domainId = 0;
        vm.domainInfo = {};
        vm.domainRequest = {};
        vm.categories = [];

        vm.appsFound = [];
        vm.appsFoundServer = [];

        vm.editableNotes = false;
        var oldNotes;

        vm.editableExpiration = false;
        vm.newExpiration = '';

        /**
         * Get category name by id
         * @param id
         * @returns string
         */
        vm.getCategoryName = function (id) {
            for (var i = 0; i < vm.categories.length; i++) {
                if (vm.categories[i].id == id) {
                    return vm.categories[i].name;
                }
            }
        };

        vm.submitNotes = function () {
            // If nothing has changed, notes will be an object (from sce parsing)
            // which means nothing should be done (no need to save anything)
            if (typeof vm.domainInfo.notes != 'string') {
                vm.editableNotes = false;
                return;
            }

            domainFactory.editNotes(vm.domainId, vm.domainInfo.notes)
                .then(function (response) {
                    vm.domainInfo.notes = $sce.trustAsHtml(vm.domainInfo.notes);
                    vm.editableNotes = false;
                    toastr.success(response.data.success);
                });
        };

        vm.submitExpiration = function () {
            if (vm.newExpiration == '' || vm.newExpiration == undefined) {
                toastr.error('Expiration date seems to be empty. No changes has been made.');
                return;
            }

            domainFactory.editExpiration(vm.domainId, vm.newExpiration)
                .then(function (response) {
                    vm.domainInfo.expiration = response.data.expiration;
                    vm.editableExpiration = false;
                    toastr.success(response.data.success);
                });
        };

        vm.cancelEditExpiration = function () {
            vm.editableExpiration = false;
        };

        vm.editNotes = function () {
            oldNotes = angular.copy(vm.domainInfo.notes);
            vm.editableNotes = true;
        };

        vm.cancelEditNotes = function () {
            vm.domainInfo.notes = oldNotes;
            vm.editableNotes = false;
        };

        /**
         * Get apps from header
         */
        function getAppsFromHeader() {
            vm.appsFoundServer = appDetector.getAppsFromHeaders(vm.domainRequest.headers);
        }

        /**
         * Get apps from body (html)
         */
        function getAppsFromBody() {
            vm.appsFound = appDetector.getAppsFromBody(vm.domainRequest.body);
        }

        /**
         * Init function for controller
         */
        function activate() {
            // Get domain info
            $timeout(function () {
                domainFactory.getDomainInfo(vm.domainId)
                    .then(function (response) {
                        vm.domainInfo = response.data.domainInfo;
                        vm.domainInfo.notes = $sce.trustAsHtml(vm.domainInfo.notes);
                        vm.domainRequest = response.data.domainRequest;

                        // If request was fetched and status code was OK,
                        // tell watcher to initiate fetching apps from headers, body etc
                        if (response.data.domainRequest.statuscode == 200) {
                            scope.requestFetched = true;
                        }
                    });
            });

            // Get all categories
            categoryFactory.getAll()
                .then(function (response) {
                    vm.categories = response.data;
                });
        }

        activate();

        /**
         * Add watcher for when domain request is fetched.
         * It can vary because of cache, so a watch is needed.
         */
        scope.$watch('requestFetched', function () {
            if (scope.requestFetched) {
                getAppsFromHeader();
                getAppsFromBody();
            }
        });
    });
}());
(function () {
    'use strict';
    var app = angular.module('domains.controller', []);

    app.controller('DomainController', function (domainFactory, categoryFactory) {
        var vm = this;

        vm.domains = [];
        vm.categories = [];

        /**
         * Get category name by id
         * @param id
         * @returns string
         */
        vm.getCategoryName = function (id) {
            for (var i = 0; i < vm.categories.length; i++) {
                if (vm.categories[i].id == id) {
                    return vm.categories[i].name;
                }
            }
        };

        /**
         * Init function for controller
         */
        function activate() {
            // Get all domains
            domainFactory.getAll()
                .then(function (response) {
                    vm.domains = response.data;
                    return vm.domains;
                })
                // Set status for each domain
                .then(function (domains) {
                    angular.forEach(domains, function (domain) {
                        domainFactory.getDomainStatus(domain.url)
                            .then(function (response) {
                                domain.active = response.data;
                            });
                    });
                });

            // Get all categories
            categoryFactory.getAll()
                .then(function (response) {
                    vm.categories = response.data;
                });
        }

        activate();
    });
}());
(function () {
    'use strict';
    var app = angular.module('domains.directive', []);

    app.directive("contenteditable", function () {
        return {
            restrict: "A",
            require: "ngModel",
            link: function (scope, element, attrs, ngModel) {

                function read() {
                    ngModel.$setViewValue(element.html());
                }

                ngModel.$render = function () {
                    element.html(ngModel.$viewValue || "");
                };

                element.bind("blur keyup change", function () {
                    scope.$apply(read);
                });
            }
        };
    });
}());
(function () {
    'use strict';
    var app = angular.module('domains.factory', []);
    var domainUrl = '/domain';

    app.factory('domainFactory', function ($http) {
        return {
            getAll: function () {
                return $http.post(domainUrl, []);
            },

            getDomainStatus: function (url) {
                return $http.post(domainUrl + '/getStatus', [url]);
            },

            getDomainInfo: function (id) {
                return $http.post(domainUrl + '/getInfo', [id]);
            },

            editNotes: function (id, notes) {
                return $http.post(domainUrl + '/editNotes', [id, notes]);
            },

            editExpiration: function (id, date) {
                return $http.post(domainUrl + '/editExpiration', [id, date]);
            }
        };
    });
}());