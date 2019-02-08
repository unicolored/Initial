// matching one level down:
// 'test/spec/{,*/}*.js'
// recursively match all subfolders:
// 'test/spec/**/*.js'
module.exports = function( grunt ) {
    'use strict';
    // Module qui affiche le temps d'éxécution de chaque tâche.
    // Utile pour détecter des anomalies et vérifier la performance des tâches.
    require( 'time-grunt' )( grunt );
    // Config
    grunt.initConfig( {
        /*************************************************************************************************************************************************/
        pkg: grunt.file.readJSON( 'package.json' ),
        //////////// Project settings
        gh: {
            /* VARIABLES DU PROJET */
            app: require( './bower.json' ).appPath || '',
            themename: 'Initial',
            themeuri: 'https://www.gilleshoarau.com/apps/Initial/',
            themeauthor: 'Gilles Hoarau',
            themeauthoruri: 'https://www.gilleshoarau.com',
            themetemplate: 'Bootstrap',
            themetextdomain: '',
            /* PATHS */
            distPath: 'dist/',
            distCsspath: 'dist/css/',
            distJspath: 'dist/js/',
            /**/
            devPath: 'dev/',
            devCsspath: 'dev/css/',
            devJspath: 'dev/js/',
            devLesspath: 'dev/less/',
            /**/
            logspath: 'changelogs/',
            libspath: 'bower_components/',
            sslpath: 'ssl/',
            temppath: 'tmp/',
            testpath: 'test/',
            /**/
            /* ASSETS */
            htmlAssets: [ '<%= gh.distPath %>index.html' ],
            fontAssets: [ '<%= gh.temppath %>fonts/font1.css', '<%= gh.temppath %>fonts/font2.css', '<%= gh.temppath %>fonts/font3.css' ],
            jsAssets: [ '<%= gh.devJspath %>totoro.js', '<%= gh.devJspath %>angular/*.js' ],
            jsScripts: [ '<%= gh.devJspath %>scripts/analytics.js' ],
            iconAssets: '<%= gh.libspath %>elusive-iconfont/css/elusive-webfont.css'
        },
        humans_txt: {
            external_file: {
                options: {
                    intro: "Bonjour, ça va ?",
                    commentStyle: 'u',
                    content: grunt.file.readJSON( 'humans.json' ),
                    includeUpdateIn: 'string',
                },
                dest: '<%= gh.distpath %>humans.txt',
            },
        },
        /*
        ########   ## ##       ######  ##     ## ########  ##
        ##         ## ##      ##    ## ##     ## ##     ## ##
        ##       #########    ##       ##     ## ##     ## ##
        ######     ## ##      ##       ##     ## ########  ##
        ##       #########    ##       ##     ## ##   ##   ##
        ##         ## ##      ##    ## ##     ## ##    ##  ##
        ########   ## ##       ######   #######  ##     ## ########
        */
        // DEBUG // BACKGROUND
        curl: {
            fonts1: {
                dest: '<%= gh.devCsspath %>font1.css',
                src: 'https://fonts.googleapis.com/css?family=Share+Tech'
            },
            fonts2: {
                dest: '<%= gh.devCsspath %>font2.css',
                src: 'https://fonts.googleapis.com/css?family=Open+Sans:800italic,400,800,300'
            },
            fonts3: {
                dest: '<%= gh.devCsspath %>font3.css',
                src: 'https://fonts.googleapis.com/css?family=Roboto:400italic,100,700italic,700,100italic,400'
            },
            ga: {
                dest: '<%= gh.distJspath %>analytics.js',
                src: 'https://www.google-analytics.com/analytics.js'
            }
        },
        /*
        ##          ###     ######   ######  ######## ########  ######
        ##         ## ##   ##    ## ##    ## ##          ##    ##    ##
        ##        ##   ##  ##       ##       ##          ##    ##
        ##       ##     ##  ######   ######  ######      ##     ######
        ##       #########       ##       ## ##          ##          ##
        ##       ##     ## ##    ## ##    ## ##          ##    ##    ##
        ######## ##     ##  ######   ######  ########    ##     ######
        */
        /*
        ########   ## ##       ######   ######   ######
        ##         ## ##      ##    ## ##    ## ##    ##
        ##       #########    ##       ##       ##
        ######     ## ##      ##        ######   ######
        ##       #########    ##             ##       ##
        ##         ## ##      ##    ## ##    ## ##    ##
        ########   ## ##       ######   ######   ######
        */
        /*************************************************************************************************************************************************/
        // GENERATION DU CSS
        less: {
            options: {
                compress: false,
                yuicompress: false,
            },
            // COMPILATION des deux fichiers .less principaux : bootstrap et style
            wordpress: {
                files: {
                    "<%= gh.temppath %>style.css": "<%= gh.devLesspath %>style.less"
                }
            }
        },
        // AUTOPREFIXER
        autoprefixer: {
            options: {
                browsers: [ 'last 2 versions', 'ie 8', 'ie 9' ]
            },
            iconAssets: {
                src: '<%= gh.iconAssets %>',
                dest: '<%= gh.temppath %>icons.ap.css'
            },
            theme: {
                src: '<%= gh.temppath %>style.css',
                dest: '<%= gh.temppath %>style.ap.css'
            },
        },
        // MINIFICATION
        cssmin: {
            style: {
                options: {
                    banner: '/*\nTheme Name: <%= gh.themename %>\nTheme URI: <%= gh.themeuri %>\nDescription: <%= pkg.description %>\nAuthor: <%= gh.themeauthor %>\nAuthorURI: <%= gh.themeauthoruri %>\nTemplate: <%= gh.themetemplate %>\nVersion: <%= pkg.version %>\nText Domain: <%= gh.themetextdomain %>\n*/'
                },
                files: {
                    "<%= gh.distPath %>style.min.css": [ "<%= gh.devCsspath %>font1.css", "<%= gh.devCsspath %>font2.css", "<%= gh.devCsspath %>font3.css", "<%= gh.devCsspath %>icons.ap.css", "<%= gh.temppath %>style.ap.css" ]
                }
            }
        },
        /*
        ########   ## ##            ##  ######
        ##         ## ##            ## ##    ##
        ##       #########          ## ##
        ######     ## ##            ##  ######
        ##       #########    ##    ##       ##
        ##         ## ##      ##    ## ##    ##
        ########   ## ##       ######   ######
        */
        /*************************************************************************************************************************************************/
        // NORMALISE le code pour un développement plus aisé
        jsbeautifier: {
            options: {
                js: {
                    spaceInParen: true,
                    wrapLineLength: 0,
                    preserveNewlines: false,
                    keepArrayIndentation: true,
                    keepFunctionIndentation: true,
                }
            },
            default: {
                src: [ "<%= gh.devJspath %>{,*/}*.js" ],
            },
            test: {
                src: [ "test/spec/{,*/}*.js" ],
            },
            grunt: {
                src: [ "Gruntfile.js" ]
            }
        },
        jshint: {
            options: {
                reporter: require( 'jshint-stylish' ),
            },
            //beforeconcat: '<%= gh.jsAssets %>',
            all: [ '<%= gh.devJspath %>{angular/}*.js' ],
            grunt: [ 'Gruntfile.js' ],
        },
        ngAnnotate: {
            options: {
                singleQuotes: true,
            },
            app1: {
                files: {
                    //'<%= gh.devpath %>js/tmp/bower_concat.js': [ '<%= gh.devpath %>js/tmp/bower_concat.js' ],
                    '<%= gh.temppath %>totoro.js': [ '<%= gh.devJspath %>totoro.js' ],
                    '<%= gh.temppath %>angular/console.js': [ '<%= gh.devJspath %>angular/console.js' ],
                }
            }
        },
        uglify: {
            options: {
                preserveComments: 'some'
            },
            my_target: {
                files: {
                    '<%= gh.distJspath %>scripts.min.js': [ '<%= gh.temppath %>scripts.js' ],
                }
            }
        },
        /*
        ########   ## ##       ######   #######  ##    ##  ######     ###    ########
        ##         ## ##      ##    ## ##     ## ###   ## ##    ##   ## ##      ##
        ##       #########    ##       ##     ## ####  ## ##        ##   ##     ##
        ######     ## ##      ##       ##     ## ## ## ## ##       ##     ##    ##
        ##       #########    ##       ##     ## ##  #### ##       #########    ##
        ##         ## ##      ##    ## ##     ## ##   ### ##    ## ##     ##    ##
        ########   ## ##       ######   #######  ##    ##  ######  ##     ##    ##
        */
        /*************************************************************************************************************************************************/
        // STATIC
        // Concaténation devant être appellée par sécurité avant un build
        bower_concat: {
            all: {
                dest: '<%= gh.devJspath %>bower_concat.js',
                // je ne charge pas les css de bower actuellement
                cssDest: '<%= gh.temppath %>bower_concat.css',
                exclude: [ 'json3', 'es5-shim', 'jquery', 'elusive-iconfont' ],
                dependencies: {
                    'jquery': 'angular',
                    'jquery.easing': 'jquery',
                    'bootstrap': 'jquery',
                },
                bowerOptions: {
                    relative: false
                },
                mainFiles: {
                    'angular': [ 'angular.min.js' ],
                    'angular-local-storage': [ 'dist/angular-local-storage.min.js' ]
                }
            },
        },
        // CONCATENATION JS
        concat: {
            options: {
                separator: ' ',
                stripBanners: true,
                banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' + '<%= grunt.template.today("dd-mm-yyyy") %> [FR] */',
                process: function( src, filepath ) {
                    return '\n//####' + filepath + '\n' + src;
                },
                nonull: true,
            },
            dist: {
                files: {
                    '<%= gh.temppath %>scripts.js': [ '<%= gh.devJsath %>bower_concat.js', '<%= gh.devJsath %>totoro.js', '<%= gh.devJsath %>angular/*.js', '<%= gh.jsScripts %>' ]
                }
            }
        },
        /*
        ########   ## ##      ##     ## ######## ##     ## ##
        ##         ## ##      ##     ##    ##    ###   ### ##
        ##       #########    ##     ##    ##    #### #### ##
        ######     ## ##      #########    ##    ## ### ## ##
        ##       #########    ##     ##    ##    ##     ## ##
        ##         ## ##      ##     ##    ##    ##     ## ##
        ########   ## ##      ##     ##    ##    ##     ## ########
        */
        /*************************************************************************************************************************************************/
        prettify: {
            options: {
                indent: 4,
                indent_char: ' ',
                wrap_line_length: 78,
                brace_style: 'expand',
                //unformatted: [ 'a', 'sub', 'sup', 'b', 'i', 'u' ]
                unformatted: [ 'php' ]
            },
            // -------------- Views
            views: {
                expand: true,
                cwd: '<%= gh.distPath %>',
                ext: '.html',
                src: [ '*.html' ],
                dest: '<%= gh.distPath %>'
            }
        },
        htmlhint: {
            options: {
                'tag-pair': true, // Tag must be paired.
                'tagname-lowercase': true, //Tagname must be lowercase.
                'attr-lowercase': true,
                'attr-value-double-quotes': true,
                'attr-value-not-empty': true,
                'attr-no-duplication': true,
                'doctype-first': true,
                'doctype-html5': true,
                'tag-self-close': true,
                'spec-char-escape': true,
                'id-unique': true,
                'src-not-empty': true,
                //Perfomance
                'head-script-disabled': true,
                'img-alt-require': true,
                'id-class-value': true,
                'style-disabled': true,
                'space-tab-mixed-disabled': true,
                'id-class-ad-disabled': true, // Id and class can not use ad keyword, it will blocked by adblock software.
                'href-abs-or-rel': false,
                'attr-unsafe-chars': true,
            },
            html: {
                src: '<%= gh.htmlAssets %>'
            }
        },
        /*
        ########   ## ##      ##     ##    ###    ##       #### ########     ###    ######## ####  #######  ##    ##
        ##         ## ##      ##     ##   ## ##   ##        ##  ##     ##   ## ##      ##     ##  ##     ## ###   ##
        ##       #########    ##     ##  ##   ##  ##        ##  ##     ##  ##   ##     ##     ##  ##     ## ####  ##
        ######     ## ##      ##     ## ##     ## ##        ##  ##     ## ##     ##    ##     ##  ##     ## ## ## ##
        ##       #########     ##   ##  ######### ##        ##  ##     ## #########    ##     ##  ##     ## ##  ####
        ##         ## ##        ## ##   ##     ## ##        ##  ##     ## ##     ##    ##     ##  ##     ## ##   ###
        ########   ## ##         ###    ##     ## ######## #### ########  ##     ##    ##    ####  #######  ##    ##
        */
        /*************************************************************************************************************************************************/
        validation: {
            options: {
                reset: grunt.option( 'reset' ) || false,
                stoponerror: true,
                doctype: 'HTML5',
                charset: 'utf-8',
                //remotePath: 'http://decodize.com/',
                //remoteFiles: [ 'html/moving-from-wordpress-to-octopress/', 'css/site-preloading-methods/' ], //or
                //remoteFiles: 'validation-files.json', // JSON file contains array of page paths.
                //relaxerror: [ 'Bad value X-UA-Compatible for attribute http-equiv on element meta.' ] //ignores these errors
                //serverUrl: 'http://validator.gh.com/'
            },
            files: {
                src: '<%= gh.htmlAssets %>'
            }
        },
        pagespeed: {
            options: {
                nokey: true,
                //key : "AIzaSyBa68iLR7ludZoab6Wf9xYt0cPbKhsUgus",
                url: "<%= gh.themeuri %>"
            },
            gh: {
                options: {
                    //paths: ["/"],
                    //key : "AIzaSyBa68iLR7ludZoab6Wf9xYt0cPbKhsUgus",
                    url: "<%= gh.themeuri %>",
                    locale: "fr_FR",
                    strategy: "desktop",
                    threshold: 80
                }
            }
        },
        /*
        ########   ## ##      ######## ########  ######  ########  ######
        ##         ## ##         ##    ##       ##    ##    ##    ##    ##
        ##       #########       ##    ##       ##          ##    ##
        ######     ## ##         ##    ######    ######     ##     ######
        ##       #########       ##    ##             ##    ##          ##
        ##         ## ##         ##    ##       ##    ##    ##    ##    ##
        ########   ## ##         ##    ########  ######     ##     ######
        */
        /*************************************************************************************************************************************************/
        // Test settings
        karma: {
            unit: {
                configFile: 'test/karma.conf.js',
                singleRun: true
            }
        },
        /*
        ########   ## ##       ######  ##       ########    ###    ##    ##
        ##         ## ##      ##    ## ##       ##         ## ##   ###   ##
        ##       #########    ##       ##       ##        ##   ##  ####  ##
        ######     ## ##      ##       ##       ######   ##     ## ## ## ##
        ##       #########    ##       ##       ##       ######### ##  ####
        ##         ## ##      ##    ## ##       ##       ##     ## ##   ###
        ########   ## ##       ######  ######## ######## ##     ## ##    ##
        */
        /*************************************************************************************************************************************************/
        // Empties folders to start fresh
        clean: {
            serve: {
                src: [ "<%= gh.temppath %>*", "<%= gh.libspath %>**/*.md", "<%= gh.libspath %>**/*LICENSE", "<%= gh.libspath %>**/*.txt", "<%= gh.libspath %>**/*.json", "<%= gh.libspath %>**/*.hbs", "<%= gh.libspath %>**/*.gzip", "<%= gh.libspath %>**/*.map", "<%= gh.libspath %>**/*.coffee", "<%= gh.libspath %>**/CHANGES", "<%= gh.libspath %>**/Makefile", ]
            },
            changelog: {
                src: [ "./CHANGELOG.md" ]
            },
            yesimlocal: {
                src: [ "./dev/yesimlocal.php" ]
            },
            webapp: {
                src: [ "./htdocs/manifest.webapp", "./htdocs/offline.appcache" ]
            }
        },
        /*
        ########   ## ##      ########  ######## ########  ##        #######  ##    ##
        ##         ## ##      ##     ## ##       ##     ## ##       ##     ##  ##  ##
        ##       #########    ##     ## ##       ##     ## ##       ##     ##   ####
        ######     ## ##      ##     ## ######   ########  ##       ##     ##    ##
        ##       #########    ##     ## ##       ##        ##       ##     ##    ##
        ##         ## ##      ##     ## ##       ##        ##       ##     ##    ##
        ########   ## ##      ########  ######## ##        ########  #######     ##
        */
        /*************************************************************************************************************************************************/
        // DIST
        changelog: {
            options: {
                // Task-specific options go here.
            }
        },
        /*************************************************************************************************************************************************/
        /*************************************************************************************************************************************************/
        /*************************************************************************************************************************************************/
        /*
        ########   ## ##      ##      ##    ###    ########  ######  ##     ##
        ##         ## ##      ##  ##  ##   ## ##      ##    ##    ## ##     ##
        ##       #########    ##  ##  ##  ##   ##     ##    ##       ##     ##
        ######     ## ##      ##  ##  ## ##     ##    ##    ##       #########
        ##       #########    ##  ##  ## #########    ##    ##       ##     ##
        ##         ## ##      ##  ##  ## ##     ##    ##    ##    ## ##     ##
        ########   ## ##       ###  ###  ##     ##    ##     ######  ##     ##
        */
        // SURVEILLANCE
        // WATCH : Cette tâche en appelle d'autres dès qu'elle détecte des changements sur les fichiers définis
        // Watches files for changes and runs tasks based on the changed files
        watch: {
            options: {
                nospawn: true,
                livereload: true // activation du reload
            },
            // Gruntfile.js mise à jour, je reload
            mygruntfile: {
                options: {
                    livereload: false // activation du reload
                },
                files: [ 'Gruntfile.js' ],
                tasks: [ 'jshint:grunt', 'jsbeautifier:grunt' ],
            },
            // STYLES
            lessEdited: { // Au changement d'un fichier .less, on appelle la tâche de compilation
                files: [ '<%= gh.devpath %>less/{,*/,*/*/}*.less' ],
                tasks: [ 'less:style', 'cssmin:devtheme' ],
            },
            // SCRIPTS
            scriptsEdited: {
                options: {
                    nospawn: true,
                    livereload: true // activation du reload
                },
                // Au changement d'un fichier .less, on appelle la tâche de compilation
                files: [ '<%= gh.devJspath %>{,angular/}*.js', 'test/spec/{,*/}*.js' ], // which files to watch
                tasks: [ 'reloadJs' ],
            },
            // LIVERELOAD : fichiers modifiés qui n'appellent pas d'autres tâches que le reload
            livereload: {
                files: [ '<%= gh.distPath %>{,*/}*.html', 'htdocs/.htaccess' ]
            }
        },
        /*
        ########   ## ##       ######   #######  ##    ## ##    ## ########  ######  ########
        ##         ## ##      ##    ## ##     ## ###   ## ###   ## ##       ##    ##    ##
        ##       #########    ##       ##     ## ####  ## ####  ## ##       ##          ##
        ######     ## ##      ##       ##     ## ## ## ## ## ## ## ######   ##          ##
        ##       #########    ##       ##     ## ##  #### ##  #### ##       ##          ##
        ##         ## ##      ##    ## ##     ## ##   ### ##   ### ##       ##    ##    ##
        ########   ## ##       ######   #######  ##    ## ##    ## ########  ######     ##
        */
        /*************************************************************************************************************************************************/
        // SERVEUR : configuration de connect
        connect: {
            options: { // Port 8000 par défaut
                protocol: 'http',
                port: 9000,
                hostname: '127.0.0.1',
                livereload: 35729,
                base: '',
                // key: grunt.file.read( 'ssl/monserveur.key' ).toString(),
                // cert: grunt.file.read( 'ssl/certificate-96884.crt' ).toString()
            },
            livereload: {
                options: {
                    open: '<%= gh.themeuri %>',
                    //open:true,
                    //protocol: 'https',
                    base: '<%= gh.dist %>',
                    // key: grunt.file.read( 'ssl/monserveur.key' ),
                    // cert: grunt.file.read( 'ssl/certificate-96884.crt' )
                }
            },
            test: {
                options: {
                    port: 9001,
                    middleware: function( connect ) {
                        return [
                            connect.static( '.tmp' ),
                            connect.static( 'test' ),
                            connect().use( '/bower_components', connect.static( './bower_components' ) ),
                            connect.static( '<%= gh.distPath %>' )
                        ];
                    }
                }
            },
        },
        phantom: {
            options: {
                port: 4444
            },
            your_target: {
                src: '<%= gh.themeuri %>'
            }
        },
        /*************************************************************************************************************************************************/
        /*************************************************************************************************************************************************/
        /*************************************************************************************************************************************************/
        /*
        ########   ## ##       ######   #######  ########  ##    ##
        ##         ## ##      ##    ## ##     ## ##     ##  ##  ##
        ##       #########    ##       ##     ## ##     ##   ####
        ######     ## ##      ##       ##     ## ########     ##
        ##       #########    ##       ##     ## ##           ##
        ##         ## ##      ##    ## ##     ## ##           ##
        ########   ## ##       ######   #######  ##           ##
        */
        // BODYROCK
        copy: {
            libsFonts: {
                /*
                files: [
                    // makes all src relative to cwd
                    {
                        expand: true,
                        cwd: '<%= gh.devpath %>fonts/',
                        src: [ '**' ],
                        dest: '<%= gh.theme %>fonts/'
                    },
                ],*/
                files: [
                // makes all src relative to cwd
                    {
                        src: '<%= gh.devPath %>fonts/icomoon.eot',
                        dest: '<%= gh.distCsspath %>fonts/icomoon.<%= pkg.version %>.eot',
                },
                    {
                        src: '<%= gh.devPath %>fonts/icomoon.woff',
                        dest: '<%= gh.distCsspath %>fonts/icomoon.<%= pkg.version %>.woff',
                },
                    {
                        src: '<%= gh.devPath %>fonts/icomoon.ttf',
                        dest: '<%= gh.distCsspath %>fonts/icomoon.<%= pkg.version %>.ttf',
                },
                    {
                        src: '<%= gh.devPath %>fonts/icomoon.svg',
                        dest: '<%= gh.distCsspath %>fonts/icomoon.<%= pkg.version %>.svg',
                },
                ],
            },
            changelog: {
                files: [
                    // makes all src relative to cwd
                    {
                        src: 'CHANGELOG.md',
                        dest: 'changelogs/CHANGELOG-<%= pkg.version %>.md'
                    },
                ],
            },
            versioning: {
                files: [
              // makes all src relative to cwd
                    {
                        src: '<%= gh.distPath %>style.css',
                        dest: '<%= gh.distPath %>style.<%= pkg.version %>.css',
                      },
                    {
                        src: '<%= gh.distJspath %>scripts.min.js',
                        dest: '<%= gh.distJspath %>scripts.<%= pkg.version %>.min.js',
                      },
              ],
            },
            yesimlocal: {
                files: [
              // makes all src relative to cwd
                    {
                        src: 'yesimlocal.php',
                        dest: '<%= gh.devPath %>yesimlocal.php',
              }
              ],
            },
            webapp: {
                files: [
              // makes all src relative to cwd
                    {
                        src: 'manifest.webapp',
                        dest: '<%= gh.distPath %>manifest.webapp',
              },
                    {
                        src: 'offline.appcache',
                        dest: '<%= gh.distPath %>offline.appcache',
              },
              ],
            },
        },
    } );
    /*************************************************************************************************************************************************/
    /*************************************************************************************************************************************************/
    /*************************************************************************************************************************************************/
    /*************************************************************************************************************************************************/
    /*************************************************************************************************************************************************/
    /*************************************************************************************************************************************************/
    /*
    ########   ## ##      ##     ## ########  ######     ########    ###     ######  ##     ## ########  ######
    ##         ## ##      ###   ### ##       ##    ##       ##      ## ##   ##    ## ##     ## ##       ##    ##
    ##       #########    #### #### ##       ##             ##     ##   ##  ##       ##     ## ##       ##
    ######     ## ##      ## ### ## ######    ######        ##    ##     ## ##       ######### ######    ######
    ##       #########    ##     ## ##             ##       ##    ######### ##       ##     ## ##             ##
    ##         ## ##      ##     ## ##       ##    ##       ##    ##     ## ##    ## ##     ## ##       ##    ##
    ########   ## ##      ##     ## ########  ######        ##    ##     ##  ######  ##     ## ########  ######
    */
    // Import des modules inclus dans package.json
    require( 'load-grunt-tasks' )( grunt );
    // TESTS
    grunt.registerTask( 'test', [ 'connect:test', 'karma' ] );
    // TRANSITION dev/prod
    grunt.registerTask( 'dev', function( target ) {
        switch ( target ) {
            default:
            /*
            Preparation du mode développement
            - copie du fichier yesimlocal.php dans /dev/
            - suppression du manifest.xml et du .appcache dans /htdocs/
            */
                grunt.task.run( [ 'copy:yesimlocal', 'clean:webapp' ] );
            break;
            case 'prod':
                /*
                Préparation du mode production
                - suppression du fichier imlocal.php dans /dev/
                - copie des fichiers manifest.xml et .appcache dans /htdocs/
                */
                    grunt.task.run( [ 'clean:yesimlocal', 'copy:webapp' ] );
                break;
        }
        //grunt.task.run( [ 'curl:fonts1', 'curl:fonts2', 'curl:fonts3', 'copy:libsFonts' ] );
    } );
    // MES TACHES
    grunt.registerTask( 'reloadFonts', function( target ) {
        grunt.task.run( [ 'curl:fonts1', 'curl:fonts2', 'curl:fonts3', 'copy:libsFonts' ] );
    } );
    grunt.registerTask( 'reloadCss', function( target ) {
        grunt.task.run( [ 'less', 'autoprefixer:theme', 'autoprefixer:iconAssets', 'cssmin' ] );
    } );
    grunt.registerTask( 'reloadJs', function( target ) {
        grunt.task.run( [ /*'curl:ga',*/ 'jsbeautifier', 'jshint', 'ngAnnotate', 'concat', 'uglify' ] );
    } );
    grunt.registerTask( 'reloadHtml', function( target ) {
        grunt.task.run( [ 'exec', 'prettify', 'htmlhint', 'validation', 'pagespeed' ] );
    } );
    ///// ETAPE DE RELEASE
    grunt.registerTask( 'release', function( target ) {
        grunt.task.run( [ 'humans_txt', 'reloadFonts', 'reloadCss', 'reloadJs', 'pagespeed', 'copy:changelog', 'clean:changelog', 'changelog', 'copy:versioning', 'dev:prod' ] );
    } );
    grunt.registerTask( 'production', function( target ) {
        grunt.task.run( [ 'release' ] );
    } );
    // CREER UN SERVEUR persistant avec connect et livereload
    grunt.registerTask( 'serve', function( target ) {
        grunt.task.run( [ 'connect:livereload', 'watch' ] );
    } );
    // TACHE PAR DEFAUT
    grunt.registerTask( 'default', [ 'serve' ] );
    // ************************
    // TACHES EN COURS D'INTEGRATION :
    grunt.registerTask( 'mochatest', function( target ) {
        grunt.task.run( [ 'phantom', 'mocha' ] );
    } );
};
