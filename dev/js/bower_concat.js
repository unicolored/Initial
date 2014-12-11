/*
 AngularJS v1.2.6
 (c) 2010-2014 Google, Inc. http://angularjs.org
 License: MIT
*/
( function( Y, O, r ) {
    'use strict';

    function s( b ) {
        return function() {
            var a = arguments[ 0 ],
                c, a = "[" + ( b ? b + ":" : "" ) + a + "] http://errors.angularjs.org/1.2.6/" + ( b ? b + "/" : "" ) + a;
            for ( c = 1; c < arguments.length; c++ ) a = a + ( 1 == c ? "?" : "&" ) + "p" + ( c - 1 ) + "=" + encodeURIComponent( "function" == typeof arguments[ c ] ? arguments[ c ].toString().replace( / \{[\s\S]*$/, "" ) : "undefined" == typeof arguments[ c ] ? "undefined" : "string" != typeof arguments[ c ] ? JSON.stringify( arguments[ c ] ) : arguments[ c ] );
            return Error( a )
        }
    }

    function ob( b ) {
        if ( null == b || ya( b ) ) return !1;
        var a = b.length;
        return 1 === b.nodeType && a ? !0 : E( b ) || I( b ) || 0 === a || "number" === typeof a && 0 < a && a - 1 in b
    }

    function q( b, a, c ) {
        var d;
        if ( b )
            if ( J( b ) )
                for ( d in b ) "prototype" == d || ( "length" == d || "name" == d || b.hasOwnProperty && !b.hasOwnProperty( d ) ) || a.call( c, b[ d ], d );
            else if ( b.forEach && b.forEach !== q ) b.forEach( a, c );
        else if ( ob( b ) )
            for ( d = 0; d < b.length; d++ ) a.call( c, b[ d ], d );
        else
            for ( d in b ) b.hasOwnProperty( d ) && a.call( c, b[ d ], d );
        return b
    }

    function Nb( b ) {
        var a = [],
            c;
        for ( c in b ) b.hasOwnProperty( c ) && a.push( c );
        return a.sort()
    }

    function Nc( b, a, c ) {
        for ( var d = Nb( b ), e = 0; e < d.length; e++ ) a.call( c, b[ d[ e ] ], d[ e ] );
        return d
    }

    function Ob( b ) {
        return function( a, c ) {
            b( c, a )
        }
    }

    function Xa() {
        for ( var b = ia.length, a; b; ) {
            b--;
            a = ia[ b ].charCodeAt( 0 );
            if ( 57 == a ) return ia[ b ] = "A", ia.join( "" );
            if ( 90 == a ) ia[ b ] = "0";
            else return ia[ b ] = String.fromCharCode( a + 1 ), ia.join( "" )
        }
        ia.unshift( "0" );
        return ia.join( "" )
    }

    function Pb( b, a ) {
        a ? b.$$hashKey = a : delete b.$$hashKey
    }

    function x( b ) {
        var a = b.$$hashKey;
        q( arguments, function( a ) {
            a !== b && q( a, function( a, c ) {
                b[ c ] = a
            } )
        } );
        Pb( b, a );
        return b
    }

    function P( b ) {
        return parseInt( b, 10 )
    }

    function Qb( b, a ) {
        return x( new( x( function() {}, {
            prototype: b
        } ) ), a )
    }

    function y() {}

    function za( b ) {
        return b
    }

    function Z( b ) {
        return function() {
            return b
        }
    }

    function D( b ) {
        return "undefined" === typeof b
    }

    function v( b ) {
        return "undefined" !== typeof b
    }

    function V( b ) {
        return null != b && "object" === typeof b
    }

    function E( b ) {
        return "string" === typeof b
    }

    function pb( b ) {
        return "number" === typeof b
    }

    function Ja( b ) {
        return "[object Date]" === Ya.call( b )
    }

    function I( b ) {
        return "[object Array]" === Ya.call( b )
    }

    function J( b ) {
        return "function" === typeof b
    }

    function Za( b ) {
        return "[object RegExp]" === Ya.call( b )
    }

    function ya( b ) {
        return b && b.document && b.location && b.alert && b.setInterval
    }

    function Oc( b ) {
        return !( !b || !( b.nodeName || b.on && b.find ) )
    }

    function Pc( b, a, c ) {
        var d = [];
        q( b, function( b, g, f ) {
            d.push( a.call( c, b, g, f ) )
        } );
        return d
    }

    function $a( b, a ) {
        if ( b.indexOf ) return b.indexOf( a );
        for ( var c = 0; c < b.length; c++ )
            if ( a === b[ c ] ) return c;
        return -1
    }

    function Ka( b, a ) {
        var c = $a( b, a );
        0 <= c && b.splice( c, 1 );
        return a
    }

    function ea( b, a ) {
        if ( ya( b ) || b && b.$evalAsync && b.$watch ) throw La( "cpws" );
        if ( a ) {
            if ( b === a ) throw La( "cpi" );
            if ( I( b ) )
                for ( var c = a.length = 0; c < b.length; c++ ) a.push( ea( b[ c ] ) );
            else {
                c = a.$$hashKey;
                q( a, function( b, c ) {
                    delete a[ c ]
                } );
                for ( var d in b ) a[ d ] = ea( b[ d ] );
                Pb( a, c )
            }
        } else( a = b ) && ( I( b ) ? a = ea( b, [] ) : Ja( b ) ? a = new Date( b.getTime() ) : Za( b ) ? a = RegExp( b.source ) : V( b ) && ( a = ea( b, {} ) ) );
        return a
    }

    function Rb( b, a ) {
        a = a || {};
        for ( var c in b ) b.hasOwnProperty( c ) && ( "$" !== c.charAt( 0 ) && "$" !== c.charAt( 1 ) ) && ( a[ c ] = b[ c ] );
        return a
    }

    function ta( b, a ) {
        if ( b === a ) return !0;
        if ( null === b || null === a ) return !1;
        if ( b !== b && a !== a ) return !0;
        var c = typeof b,
            d;
        if ( c == typeof a && "object" == c )
            if ( I( b ) ) {
                if ( !I( a ) ) return !1;
                if ( ( c = b.length ) == a.length ) {
                    for ( d = 0; d < c; d++ )
                        if ( !ta( b[ d ], a[ d ] ) ) return !1;
                    return !0
                }
            } else {
                if ( Ja( b ) ) return Ja( a ) && b.getTime() == a.getTime();
                if ( Za( b ) && Za( a ) ) return b.toString() == a.toString();
                if ( b && b.$evalAsync && b.$watch || a && a.$evalAsync && a.$watch || ya( b ) || ya( a ) || I( a ) ) return !1;
                c = {};
                for ( d in b )
                    if ( "$" !== d.charAt( 0 ) && !J( b[ d ] ) ) {
                        if ( !ta( b[ d ], a[ d ] ) ) return !1;
                        c[ d ] = !0
                    }
                for ( d in a )
                    if ( !c.hasOwnProperty( d ) && "$" !== d.charAt( 0 ) && a[ d ] !== r && !J( a[ d ] ) ) return !1;
                return !0
            }
        return !1
    }

    function Sb() {
        return O.securityPolicy && O.securityPolicy.isActive || O.querySelector && !( !O.querySelector( "[ng-csp]" ) && !O.querySelector( "[data-ng-csp]" ) )
    }

    function qb( b, a ) {
        var c = 2 < arguments.length ? ua.call( arguments, 2 ) : [];
        return !J( a ) || a instanceof RegExp ? a : c.length ? function() {
            return arguments.length ? a.apply( b, c.concat( ua.call( arguments, 0 ) ) ) : a.apply( b, c )
        } : function() {
            return arguments.length ? a.apply( b, arguments ) : a.call( b )
        }
    }

    function Qc( b, a ) {
        var c = a;
        "string" === typeof b && "$" === b.charAt( 0 ) ? c = r : ya( a ) ? c = "$WINDOW" : a && O === a ? c = "$DOCUMENT" : a && ( a.$evalAsync && a.$watch ) && ( c = "$SCOPE" );
        return c
    }

    function oa( b, a ) {
        return "undefined" === typeof b ? r : JSON.stringify( b, Qc, a ? "  " : null )
    }

    function Tb( b ) {
        return E( b ) ? JSON.parse( b ) : b
    }

    function Ma( b ) {
        b && 0 !== b.length ? ( b = C( "" + b ), b = !( "f" == b || "0" == b || "false" == b || "no" == b || "n" == b || "[]" == b ) ) : b = !1;
        return b
    }

    function fa( b ) {
        b = u( b ).clone();
        try {
            b.empty()
        } catch ( a ) {}
        var c = u( "<div>" ).append( b ).html();
        try {
            return 3 === b[ 0 ].nodeType ? C( c ) : c.match( /^(<[^>]+>)/ )[ 1 ].replace( /^<([\w\-]+)/, function( a, b ) {
                return "<" + C( b )
            } )
        } catch ( d ) {
            return C( c )
        }
    }

    function Ub( b ) {
        try {
            return decodeURIComponent( b )
        } catch ( a ) {}
    }

    function Vb( b ) {
        var a = {},
            c, d;
        q( ( b || "" ).split( "&" ), function( b ) {
            b && ( c = b.split( "=" ), d = Ub( c[ 0 ] ), v( d ) && ( b = v( c[ 1 ] ) ? Ub( c[ 1 ] ) : !0, a[ d ] ? I( a[ d ] ) ? a[ d ].push( b ) : a[ d ] = [ a[ d ], b ] : a[ d ] = b ) )
        } );
        return a
    }

    function Wb( b ) {
        var a = [];
        q( b, function( b, d ) {
            I( b ) ? q( b, function( b ) {
                a.push( va( d, !0 ) + ( !0 === b ? "" : "=" + va( b, !0 ) ) )
            } ) : a.push( va( d, !0 ) + ( !0 === b ? "" : "=" + va( b, !0 ) ) )
        } );
        return a.length ? a.join( "&" ) : ""
    }

    function rb( b ) {
        return va( b, !0 ).replace( /%26/gi, "&" ).replace( /%3D/gi, "=" ).replace( /%2B/gi, "+" )
    }

    function va( b, a ) {
        return encodeURIComponent( b ).replace( /%40/gi, "@" ).replace( /%3A/gi, ":" ).replace( /%24/g, "$" ).replace( /%2C/gi, "," ).replace( /%20/g, a ? "%20" : "+" )
    }

    function Rc( b, a ) {
        function c( a ) {
            a && d.push( a )
        }
        var d = [ b ],
            e, g, f = [ "ng:app", "ng-app", "x-ng-app", "data-ng-app" ],
            h = /\sng[:\-]app(:\s*([\w\d_]+);?)?\s/;
        q( f, function( a ) {
            f[ a ] = !0;
            c( O.getElementById( a ) );
            a = a.replace( ":", "\\:" );
            b.querySelectorAll && ( q( b.querySelectorAll( "." + a ), c ), q( b.querySelectorAll( "." + a + "\\:" ), c ), q( b.querySelectorAll( "[" + a + "]" ), c ) )
        } );
        q( d, function( a ) {
            if ( !e ) {
                var b = h.exec( " " + a.className + " " );
                b ? ( e = a, g = ( b[ 2 ] || "" ).replace( /\s+/g, "," ) ) : q( a.attributes, function( b ) {
                    !e && f[ b.name ] && ( e = a, g = b.value )
                } )
            }
        } );
        e && a( e, g ? [ g ] : [] )
    }

    function Xb( b, a ) {
        var c = function() {
                b = u( b );
                if ( b.injector() ) {
                    var c = b[ 0 ] === O ? "document" : fa( b );
                    throw La( "btstrpd", c );
                }
                a = a || [];
                a.unshift( [ "$provide", function( a ) {
                    a.value( "$rootElement", b )
                } ] );
                a.unshift( "ng" );
                c = Yb( a );
                c.invoke( [ "$rootScope", "$rootElement", "$compile", "$injector", "$animate", function( a, b, c, d, e ) {
                    a.$apply( function() {
                        b.data( "$injector", d );
                        c( b )( a )
                    } )
                } ] );
                return c
            },
            d = /^NG_DEFER_BOOTSTRAP!/;
        if ( Y && !d.test( Y.name ) ) return c();
        Y.name = Y.name.replace( d, "" );
        Na.resumeBootstrap = function( b ) {
            q( b, function( b ) {
                a.push( b )
            } );
            c()
        }
    }

    function ab( b, a ) {
        a = a || "_";
        return b.replace( Sc, function( b, d ) {
            return ( d ? a : "" ) + b.toLowerCase()
        } )
    }

    function sb( b, a, c ) {
        if ( !b ) throw La( "areq", a || "?", c || "required" );
        return b
    }

    function Oa( b, a, c ) {
        c && I( b ) && ( b = b[ b.length - 1 ] );
        sb( J( b ), a, "not a function, got " + ( b && "object" == typeof b ? b.constructor.name || "Object" : typeof b ) );
        return b
    }

    function wa( b, a ) {
        if ( "hasOwnProperty" === b ) throw La( "badname", a );
    }

    function tb( b, a, c ) {
        if ( !a ) return b;
        a = a.split( "." );
        for ( var d, e = b, g = a.length, f = 0; f < g; f++ ) d = a[ f ], b && ( b = ( e = b )[ d ] );
        return !c && J( b ) ? qb( e, b ) : b
    }

    function ub( b ) {
        var a = b[ 0 ];
        b = b[ b.length - 1 ];
        if ( a === b ) return u( a );
        var c = [ a ];
        do {
            a = a.nextSibling;
            if ( !a ) break;
            c.push( a )
        } while ( a !== b );
        return u( c )
    }

    function Tc( b ) {
        var a = s( "$injector" ),
            c = s( "ng" );
        b = b.angular || ( b.angular = {} );
        b.$$minErr = b.$$minErr || s;
        return b.module || ( b.module = function() {
            var b = {};
            return function( e, g, f ) {
                if ( "hasOwnProperty" === e ) throw c( "badname", "module" );
                g && b.hasOwnProperty( e ) && ( b[ e ] = null );
                return b[ e ] || ( b[ e ] = function() {
                    function b( a, d, e ) {
                        return function() {
                            c[ e || "push" ]( [ a, d, arguments ] );
                            return n
                        }
                    }
                    if ( !g ) throw a( "nomod", e );
                    var c = [],
                        d = [],
                        m = b( "$injector", "invoke" ),
                        n = {
                            _invokeQueue: c,
                            _runBlocks: d,
                            requires: g,
                            name: e,
                            provider: b( "$provide", "provider" ),
                            factory: b( "$provide", "factory" ),
                            service: b( "$provide", "service" ),
                            value: b( "$provide", "value" ),
                            constant: b( "$provide", "constant", "unshift" ),
                            animation: b( "$animateProvider", "register" ),
                            filter: b( "$filterProvider", "register" ),
                            controller: b( "$controllerProvider", "register" ),
                            directive: b( "$compileProvider", "directive" ),
                            config: m,
                            run: function( a ) {
                                d.push( a );
                                return this
                            }
                        };
                    f && m( f );
                    return n
                }() )
            }
        }() )
    }

    function Pa( b ) {
        return b.replace( Uc, function( a, b, d, e ) {
            return e ? d.toUpperCase() : d
        } ).replace( Vc, "Moz$1" )
    }

    function vb( b, a, c, d ) {
        function e( b ) {
            var e = c && b ? [ this.filter( b ) ] : [ this ],
                l = a,
                k, m, n, p, t, w;
            if ( !d || null != b )
                for ( ; e.length; )
                    for ( k = e.shift(), m = 0, n = k.length; m < n; m++ )
                        for ( p = u( k[ m ] ), l ? p.triggerHandler( "$destroy" ) : l = !l, t = 0, p = ( w = p.children() ).length; t < p; t++ ) e.push( Aa( w[ t ] ) );
            return g.apply( this, arguments )
        }
        var g = Aa.fn[ b ],
            g = g.$original || g;
        e.$original = g;
        Aa.fn[ b ] = e
    }

    function N( b ) {
        if ( b instanceof N ) return b;
        if ( !( this instanceof N ) ) {
            if ( E( b ) && "<" != b.charAt( 0 ) ) throw wb( "nosel" );
            return new N( b )
        }
        if ( E( b ) ) {
            var a = O.createElement( "div" );
            a.innerHTML = "<div>&#160;</div>" + b;
            a.removeChild( a.firstChild );
            xb( this, a.childNodes );
            u( O.createDocumentFragment() ).append( this )
        } else xb( this, b )
    }

    function yb( b ) {
        return b.cloneNode( !0 )
    }

    function Ba( b ) {
        Zb( b );
        var a = 0;
        for ( b = b.childNodes || []; a < b.length; a++ ) Ba( b[ a ] )
    }

    function $b( b, a, c, d ) {
        if ( v( d ) ) throw wb( "offargs" );
        var e = ja( b, "events" );
        ja( b, "handle" ) && ( D( a ) ? q( e, function( a, c ) {
            zb( b, c, a );
            delete e[ c ]
        } ) : q( a.split( " " ), function( a ) {
            D( c ) ? ( zb( b, a, e[ a ] ), delete e[ a ] ) : Ka( e[ a ] || [], c )
        } ) )
    }

    function Zb( b, a ) {
        var c = b[ bb ],
            d = Qa[ c ];
        d && ( a ? delete Qa[ c ].data[ a ] : ( d.handle && ( d.events.$destroy && d.handle( {}, "$destroy" ), $b( b ) ), delete Qa[ c ], b[ bb ] = r ) )
    }

    function ja( b, a, c ) {
        var d = b[ bb ],
            d = Qa[ d || -1 ];
        if ( v( c ) ) d || ( b[ bb ] = d = ++Wc, d = Qa[ d ] = {} ), d[ a ] = c;
        else return d && d[ a ]
    }

    function ac( b, a, c ) {
        var d = ja( b, "data" ),
            e = v( c ),
            g = !e && v( a ),
            f = g && !V( a );
        d || f || ja( b, "data", d = {} );
        if ( e ) d[ a ] = c;
        else if ( g ) {
            if ( f ) return d && d[ a ];
            x( d, a )
        } else return d
    }

    function Ab( b, a ) {
        return b.getAttribute ? -1 < ( " " + ( b.getAttribute( "class" ) || "" ) + " " ).replace( /[\n\t]/g, " " ).indexOf( " " + a + " " ) : !1
    }

    function Bb( b, a ) {
        a && b.setAttribute && q( a.split( " " ), function( a ) {
            b.setAttribute( "class", aa( ( " " + ( b.getAttribute( "class" ) || "" ) + " " ).replace( /[\n\t]/g, " " ).replace( " " + aa( a ) + " ", " " ) ) )
        } )
    }

    function Cb( b, a ) {
        if ( a && b.setAttribute ) {
            var c = ( " " + ( b.getAttribute( "class" ) || "" ) + " " ).replace( /[\n\t]/g, " " );
            q( a.split( " " ), function( a ) {
                a = aa( a ); - 1 === c.indexOf( " " + a + " " ) && ( c += a + " " )
            } );
            b.setAttribute( "class", aa( c ) )
        }
    }

    function xb( b, a ) {
        if ( a ) {
            a = a.nodeName || !v( a.length ) || ya( a ) ? [ a ] : a;
            for ( var c = 0; c < a.length; c++ ) b.push( a[ c ] )
        }
    }

    function bc( b, a ) {
        return cb( b, "$" + ( a || "ngController" ) + "Controller" )
    }

    function cb( b, a, c ) {
        b = u( b );
        9 == b[ 0 ].nodeType && ( b = b.find( "html" ) );
        for ( a = I( a ) ? a : [ a ]; b.length; ) {
            for ( var d = 0, e = a.length; d < e; d++ )
                if ( ( c = b.data( a[ d ] ) ) !== r ) return c;
            b = b.parent()
        }
    }

    function cc( b ) {
        for ( var a = 0, c = b.childNodes; a < c.length; a++ ) Ba( c[ a ] );
        for ( ; b.firstChild; ) b.removeChild( b.firstChild )
    }

    function dc( b, a ) {
        var c = db[ a.toLowerCase() ];
        return c && ec[ b.nodeName ] && c
    }

    function Xc( b, a ) {
        var c = function( c, e ) {
            c.preventDefault || ( c.preventDefault = function() {
                c.returnValue = !1
            } );
            c.stopPropagation || ( c.stopPropagation = function() {
                c.cancelBubble = !0
            } );
            c.target || ( c.target = c.srcElement || O );
            if ( D( c.defaultPrevented ) ) {
                var g = c.preventDefault;
                c.preventDefault = function() {
                    c.defaultPrevented = !0;
                    g.call( c )
                };
                c.defaultPrevented = !1
            }
            c.isDefaultPrevented = function() {
                return c.defaultPrevented || !1 === c.returnValue
            };
            var f = Rb( a[ e || c.type ] || [] );
            q( f, function( a ) {
                a.call( b, c )
            } );
            8 >= L ? ( c.preventDefault = null, c.stopPropagation = null, c.isDefaultPrevented = null ) : ( delete c.preventDefault, delete c.stopPropagation, delete c.isDefaultPrevented )
        };
        c.elem = b;
        return c
    }

    function Ca( b ) {
        var a = typeof b,
            c;
        "object" == a && null !== b ? "function" == typeof( c = b.$$hashKey ) ? c = b.$$hashKey() : c === r && ( c = b.$$hashKey = Xa() ) : c = b;
        return a + ":" + c
    }

    function Ra( b ) {
        q( b, this.put, this )
    }

    function fc( b ) {
        var a, c;
        "function" == typeof b ? ( a = b.$inject ) || ( a = [], b.length && ( c = b.toString().replace( Yc, "" ), c = c.match( Zc ), q( c[ 1 ].split( $c ), function( b ) {
            b.replace( ad, function( b, c, d ) {
                a.push( d )
            } )
        } ) ), b.$inject = a ) : I( b ) ? ( c = b.length - 1, Oa( b[ c ], "fn" ), a = b.slice( 0, c ) ) : Oa( b, "fn", !0 );
        return a
    }

    function Yb( b ) {
        function a( a ) {
            return function( b, c ) {
                if ( V( b ) ) q( b, Ob( a ) );
                else return a( b, c )
            }
        }

        function c( a, b ) {
            wa( a, "service" );
            if ( J( b ) || I( b ) ) b = n.instantiate( b );
            if ( !b.$get ) throw Sa( "pget", a );
            return m[ a + h ] = b
        }

        function d( a, b ) {
            return c( a, {
                $get: b
            } )
        }

        function e( a ) {
            var b = [],
                c, d, g, h;
            q( a, function( a ) {
                if ( !k.get( a ) ) {
                    k.put( a, !0 );
                    try {
                        if ( E( a ) )
                            for ( c = Ta( a ), b = b.concat( e( c.requires ) ).concat( c._runBlocks ), d = c._invokeQueue, g = 0, h = d.length; g < h; g++ ) {
                                var f = d[ g ],
                                    l = n.get( f[ 0 ] );
                                l[ f[ 1 ] ].apply( l, f[ 2 ] )
                            } else J( a ) ? b.push( n.invoke( a ) ) : I( a ) ? b.push( n.invoke( a ) ) : Oa( a, "module" )
                    } catch ( m ) {
                        throw I( a ) && ( a = a[ a.length - 1 ] ), m.message && ( m.stack && -1 == m.stack.indexOf( m.message ) ) && ( m = m.message + "\n" + m.stack ), Sa( "modulerr", a, m.stack || m.message || m );
                    }
                }
            } );
            return b
        }

        function g( a, b ) {
            function c( d ) {
                if ( a.hasOwnProperty( d ) ) {
                    if ( a[ d ] === f ) throw Sa( "cdep", l.join( " <- " ) );
                    return a[ d ]
                }
                try {
                    return l.unshift( d ), a[ d ] = f, a[ d ] = b( d )
                } finally {
                    l.shift()
                }
            }

            function d( a, b, e ) {
                var g = [],
                    h = fc( a ),
                    f, k, l;
                k = 0;
                for ( f = h.length; k < f; k++ ) {
                    l = h[ k ];
                    if ( "string" !== typeof l ) throw Sa( "itkn", l );
                    g.push( e && e.hasOwnProperty( l ) ? e[ l ] : c( l ) )
                }
                a.$inject || ( a = a[ f ] );
                return a.apply( b, g )
            }
            return {
                invoke: d,
                instantiate: function( a, b ) {
                    var c = function() {},
                        e;
                    c.prototype = ( I( a ) ? a[ a.length - 1 ] : a ).prototype;
                    c = new c;
                    e = d( a, c, b );
                    return V( e ) || J( e ) ? e : c
                },
                get: c,
                annotate: fc,
                has: function( b ) {
                    return m.hasOwnProperty( b + h ) || a.hasOwnProperty( b )
                }
            }
        }
        var f = {},
            h = "Provider",
            l = [],
            k = new Ra,
            m = {
                $provide: {
                    provider: a( c ),
                    factory: a( d ),
                    service: a( function( a, b ) {
                        return d( a, [ "$injector", function( a ) {
                            return a.instantiate( b )
                        } ] )
                    } ),
                    value: a( function( a, b ) {
                        return d( a, Z( b ) )
                    } ),
                    constant: a( function( a, b ) {
                        wa( a, "constant" );
                        m[ a ] = b;
                        p[ a ] = b
                    } ),
                    decorator: function( a, b ) {
                        var c = n.get( a + h ),
                            d = c.$get;
                        c.$get = function() {
                            var a = t.invoke( d, c );
                            return t.invoke( b, null, {
                                $delegate: a
                            } )
                        }
                    }
                }
            },
            n = m.$injector = g( m, function() {
                throw Sa( "unpr", l.join( " <- " ) );
            } ),
            p = {},
            t = p.$injector = g( p, function( a ) {
                a = n.get( a + h );
                return t.invoke( a.$get, a )
            } );
        q( e( b ), function( a ) {
            t.invoke( a || y )
        } );
        return t
    }

    function bd() {
        var b = !0;
        this.disableAutoScrolling = function() {
            b = !1
        };
        this.$get = [ "$window", "$location", "$rootScope", function( a, c, d ) {
            function e( a ) {
                var b = null;
                q( a, function( a ) {
                    b || "a" !== C( a.nodeName ) || ( b = a )
                } );
                return b
            }

            function g() {
                var b = c.hash(),
                    d;
                b ? ( d = f.getElementById( b ) ) ? d.scrollIntoView() : ( d = e( f.getElementsByName( b ) ) ) ? d.scrollIntoView() : "top" === b && a.scrollTo( 0, 0 ) : a.scrollTo( 0, 0 )
            }
            var f = a.document;
            b && d.$watch( function() {
                return c.hash()
            }, function() {
                d.$evalAsync( g )
            } );
            return g
        } ]
    }

    function cd( b, a, c, d ) {
        function e( a ) {
            try {
                a.apply( null, ua.call( arguments, 1 ) )
            } finally {
                if ( w--, 0 === w )
                    for ( ; A.length; ) try {
                        A.pop()()
                    } catch ( b ) {
                        c.error( b )
                    }
            }
        }

        function g( a, b ) {
            ( function T() {
                q( F, function( a ) {
                    a()
                } );
                H = b( T, a )
            } )()
        }

        function f() {
            B = null;
            S != h.url() && ( S = h.url(), q( $, function( a ) {
                a( h.url() )
            } ) )
        }
        var h = this,
            l = a[ 0 ],
            k = b.location,
            m = b.history,
            n = b.setTimeout,
            p = b.clearTimeout,
            t = {};
        h.isMock = !1;
        var w = 0,
            A = [];
        h.$$completeOutstandingRequest = e;
        h.$$incOutstandingRequestCount = function() {
            w++
        };
        h.notifyWhenNoOutstandingRequests = function( a ) {
            q( F, function( a ) {
                a()
            } );
            0 === w ? a() : A.push( a )
        };
        var F = [],
            H;
        h.addPollFn = function( a ) {
            D( H ) && g( 100, n );
            F.push( a );
            return a
        };
        var S = k.href,
            z = a.find( "base" ),
            B = null;
        h.url = function( a, c ) {
            k !== b.location && ( k = b.location );
            if ( a ) {
                if ( S != a ) return S = a, d.history ? c ? m.replaceState( null, "", a ) : ( m.pushState( null, "", a ), z.attr( "href", z.attr( "href" ) ) ) : ( B = a, c ? k.replace( a ) : k.href = a ),
                    h
            } else return B || k.href.replace( /%27/g, "'" )
        };
        var $ = [],
            M = !1;
        h.onUrlChange = function( a ) {
            if ( !M ) {
                if ( d.history ) u( b ).on( "popstate", f );
                if ( d.hashchange ) u( b ).on( "hashchange", f );
                else h.addPollFn( f );
                M = !0
            }
            $.push( a );
            return a
        };
        h.baseHref = function() {
            var a = z.attr( "href" );
            return a ? a.replace( /^https?\:\/\/[^\/]*/, "" ) : ""
        };
        var W = {},
            ka = "",
            Q = h.baseHref();
        h.cookies = function( a, b ) {
            var d, e, g, h;
            if ( a ) b === r ? l.cookie = escape( a ) + "=;path=" + Q + ";expires=Thu, 01 Jan 1970 00:00:00 GMT" : E( b ) && ( d = ( l.cookie = escape( a ) + "=" + escape( b ) + ";path=" + Q ).length + 1, 4096 < d && c.warn( "Cookie '" + a + "' possibly not set or overflowed because it was too large (" + d + " > 4096 bytes)!" ) );
            else {
                if ( l.cookie !== ka )
                    for ( ka = l.cookie, d = ka.split( "; " ), W = {}, g = 0; g < d.length; g++ ) e = d[ g ], h = e.indexOf( "=" ), 0 < h && ( a = unescape( e.substring( 0, h ) ), W[ a ] === r && ( W[ a ] = unescape( e.substring( h + 1 ) ) ) );
                return W
            }
        };
        h.defer = function( a, b ) {
            var c;
            w++;
            c = n( function() {
                delete t[ c ];
                e( a )
            }, b || 0 );
            t[ c ] = !0;
            return c
        };
        h.defer.cancel = function( a ) {
            return t[ a ] ? ( delete t[ a ], p( a ), e( y ), !0 ) : !1
        }
    }

    function dd() {
        this.$get = [ "$window", "$log", "$sniffer", "$document", function( b, a, c, d ) {
            return new cd( b, d, a, c )
        } ]
    }

    function ed() {
        this.$get = function() {
            function b( b, d ) {
                function e( a ) {
                    a != n && ( p ? p == a && ( p = a.n ) : p = a, g( a.n, a.p ), g( a, n ), n = a, n.n = null )
                }

                function g( a, b ) {
                    a != b && ( a && ( a.p = b ), b && ( b.n = a ) )
                }
                if ( b in a ) throw s( "$cacheFactory" )( "iid", b );
                var f = 0,
                    h = x( {}, d, {
                        id: b
                    } ),
                    l = {},
                    k = d && d.capacity || Number.MAX_VALUE,
                    m = {},
                    n = null,
                    p = null;
                return a[ b ] = {
                    put: function( a, b ) {
                        var c = m[ a ] || ( m[ a ] = {
                            key: a
                        } );
                        e( c );
                        if ( !D( b ) ) return a in l || f++, l[ a ] = b, f > k && this.remove( p.key ),
                            b
                    },
                    get: function( a ) {
                        var b = m[ a ];
                        if ( b ) return e( b ), l[ a ]
                    },
                    remove: function( a ) {
                        var b = m[ a ];
                        b && ( b == n && ( n = b.p ), b == p && ( p = b.n ), g( b.n, b.p ), delete m[ a ], delete l[ a ], f-- )
                    },
                    removeAll: function() {
                        l = {};
                        f = 0;
                        m = {};
                        n = p = null
                    },
                    destroy: function() {
                        m = h = l = null;
                        delete a[ b ]
                    },
                    info: function() {
                        return x( {}, h, {
                            size: f
                        } )
                    }
                }
            }
            var a = {};
            b.info = function() {
                var b = {};
                q( a, function( a, e ) {
                    b[ e ] = a.info()
                } );
                return b
            };
            b.get = function( b ) {
                return a[ b ]
            };
            return b
        }
    }

    function fd() {
        this.$get = [ "$cacheFactory", function( b ) {
            return b( "templates" )
        } ]
    }

    function hc( b, a ) {
        var c = {},
            d = "Directive",
            e = /^\s*directive\:\s*([\d\w\-_]+)\s+(.*)$/,
            g = /(([\d\w\-_]+)(?:\:([^;]+))?;?)/,
            f = /^(on[a-z]+|formaction)$/;
        this.directive = function l( a, e ) {
            wa( a, "directive" );
            E( a ) ? ( sb( e, "directiveFactory" ), c.hasOwnProperty( a ) || ( c[ a ] = [], b.factory( a + d, [ "$injector", "$exceptionHandler", function( b, d ) {
                var e = [];
                q( c[ a ], function( c, g ) {
                    try {
                        var f = b.invoke( c );
                        J( f ) ? f = {
                            compile: Z( f )
                        } : !f.compile && f.link && ( f.compile = Z( f.link ) );
                        f.priority = f.priority || 0;
                        f.index = g;
                        f.name = f.name || a;
                        f.require = f.require || f.controller && f.name;
                        f.restrict = f.restrict || "A";
                        e.push( f )
                    } catch ( l ) {
                        d( l )
                    }
                } );
                return e
            } ] ) ), c[ a ].push( e ) ) : q( a, Ob( l ) );
            return this
        };
        this.aHrefSanitizationWhitelist = function( b ) {
            return v( b ) ? ( a.aHrefSanitizationWhitelist( b ), this ) : a.aHrefSanitizationWhitelist()
        };
        this.imgSrcSanitizationWhitelist = function( b ) {
            return v( b ) ? ( a.imgSrcSanitizationWhitelist( b ), this ) : a.imgSrcSanitizationWhitelist()
        };
        this.$get = [ "$injector", "$interpolate", "$exceptionHandler", "$http", "$templateCache", "$parse", "$controller", "$rootScope", "$document", "$sce", "$animate",
"$$sanitizeUri",
            function( a, b, m, n, p, t, w, A, F, H, S, z ) {
                function B( a, b, c, d, e ) {
                    a instanceof u || ( a = u( a ) );
                    q( a, function( b, c ) {
                        3 == b.nodeType && b.nodeValue.match( /\S+/ ) && ( a[ c ] = u( b ).wrap( "<span></span>" ).parent()[ 0 ] )
                    } );
                    var g = M( a, b, a, c, d, e );
                    $( a, "ng-scope" );
                    return function( b, c, d ) {
                        sb( b, "scope" );
                        var e = c ? Da.clone.call( a ) : a;
                        q( d, function( a, b ) {
                            e.data( "$" + b + "Controller", a )
                        } );
                        d = 0;
                        for ( var f = e.length; d < f; d++ ) {
                            var k = e[ d ].nodeType;
                            1 !== k && 9 !== k || e.eq( d ).data( "$scope", b )
                        }
                        c && c( e, b );
                        g && g( b, e, e );
                        return e
                    }
                }

                function $( a, b ) {
                    try {
                        a.addClass( b )
                    } catch ( c ) {}
                }

                function M( a, b, c, d, e, g ) {
                    function f( a, c, d, e ) {
                        var g, l, m, p, n, t, w;
                        g = c.length;
                        var K = Array( g );
                        for ( n = 0; n < g; n++ ) K[ n ] = c[ n ];
                        w = n = 0;
                        for ( t = k.length; n < t; w++ ) l = K[ w ], c = k[ n++ ], g = k[ n++ ], m = u( l ), c ? ( c.scope ? ( p = a.$new(), m.data( "$scope", p ) ) : p = a, ( m = c.transclude ) || !e && b ? c( g, p, l, d, W( a, m || b ) ) : c( g, p, l, d, e ) ) : g && g( a, l.childNodes, r, e )
                    }
                    for ( var k = [], l, m, p, n, t = 0; t < a.length; t++ ) l = new Db, m = ka( a[ t ], [], l, 0 === t ? d : r, e ), ( g = m.length ? ga( m, a[ t ], l, b, c, null, [], [], g ) : null ) && g.scope && $( u( a[ t ] ), "ng-scope" ), l = g && g.terminal || !( p = a[ t ].childNodes ) || !p.length ? null : M( p, g ? g.transclude : b ), k.push( g, l ), n = n || g || l, g = null;
                    return n ? f : null
                }

                function W( a, b ) {
                    return function( c, d, e ) {
                        var g = !1;
                        c || ( c = a.$new(), g = c.$$transcluded = !0 );
                        d = b( c, d, e );
                        if ( g ) d.on( "$destroy", qb( c, c.$destroy ) );
                        return d
                    }
                }

                function ka( a, b, c, d, f ) {
                    var k = c.$attr,
                        l;
                    switch ( a.nodeType ) {
                        case 1:
                            T( b, la( Ea( a ).toLowerCase() ), "E", d, f );
                            var m, p, n;
                            l = a.attributes;
                            for ( var t = 0, w = l && l.length; t < w; t++ ) {
                                var A = !1,
                                    B = !1;
                                m = l[ t ];
                                if ( !L || 8 <= L || m.specified ) {
                                    p = m.name;
                                    n = la( p );
                                    U.test( n ) && ( p = ab( n.substr( 6 ), "-" ) );
                                    var S = n.replace( /(Start|End)$/, "" );
                                    n === S + "Start" && ( A = p, B = p.substr( 0, p.length - 5 ) + "end", p = p.substr( 0, p.length - 6 ) );
                                    n = la( p.toLowerCase() );
                                    k[ n ] = p;
                                    c[ n ] = m = aa( m.value );
                                    dc( a, n ) && ( c[ n ] = !0 );
                                    P( a, b, m, n );
                                    T( b, n, "A", d, f, A, B )
                                }
                            }
                            a = a.className;
                            if ( E( a ) && "" !== a )
                                for ( ; l = g.exec( a ); ) n = la( l[ 2 ] ), T( b, n, "C", d, f ) && ( c[ n ] = aa( l[ 3 ] ) ), a = a.substr( l.index + l[ 0 ].length );
                            break;
                        case 3:
                            s( b, a.nodeValue );
                            break;
                        case 8:
                            try {
                                if ( l = e.exec( a.nodeValue ) ) n = la( l[ 1 ] ), T( b, n, "M", d, f ) && ( c[ n ] = aa( l[ 2 ] ) )
                            } catch ( W ) {}
                    }
                    b.sort( D );
                    return b
                }

                function Q( a, b, c ) {
                    var d = [],
                        e = 0;
                    if ( b && a.hasAttribute && a.hasAttribute( b ) ) {
                        do {
                            if ( !a ) throw ha( "uterdir", b, c );
                            1 == a.nodeType && ( a.hasAttribute( b ) && e++, a.hasAttribute( c ) && e-- );
                            d.push( a );
                            a = a.nextSibling
                        } while ( 0 < e )
                    } else d.push( a );
                    return u( d )
                }

                function R( a, b, c ) {
                    return function( d, e, g, f, l ) {
                        e = Q( e[ 0 ], b, c );
                        return a( d, e, g, f, l )
                    }
                }

                function ga( a, c, d, e, g, f, l, p, n ) {
                    function A( a, b, c, d ) {
                        if ( a ) {
                            c && ( a = R( a, c, d ) );
                            a.require = G.require;
                            if ( z === G || G.$$isolateScope ) a = ic( a, {
                                isolateScope: !0
                            } );
                            l.push( a )
                        }
                        if ( b ) {
                            c && ( b = R( b, c, d ) );
                            b.require = G.require;
                            if ( z === G || G.$$isolateScope ) b = ic( b, {
                                isolateScope: !0
                            } );
                            p.push( b )
                        }
                    }

                    function S( a, b, c ) {
                        var d, e = "data",
                            g = !1;
                        if ( E( a ) ) {
                            for ( ;
                                "^" == ( d = a.charAt( 0 ) ) || "?" == d; ) a = a.substr( 1 ), "^" == d && ( e = "inheritedData" ), g = g || "?" == d;
                            d = null;
                            c && "data" === e && ( d = c[ a ] );
                            d = d || b[ e ]( "$" + a + "Controller" );
                            if ( !d && !g ) throw ha( "ctreq", a, ba );
                        } else I( a ) && ( d = [], q( a, function( a ) {
                            d.push( S( a, b, c ) )
                        } ) );
                        return d
                    }

                    function W( a, e, g, f, n ) {
                        function A( a, b ) {
                            var c;
                            2 > arguments.length && ( b = a, a = r );
                            D && ( c = eb );
                            return n( a, b, c )
                        }
                        var K, B, F, M, R, Q, eb = {},
                            s;
                        K = c === g ? d : Rb( d, new Db( u( g ), d.$attr ) );
                        B = K.$$element;
                        if ( z ) {
                            var ka = /^\s*([@=&])(\??)\s*(\w*)\s*$/;
                            f = u( g );
                            Q = e.$new( !0 );
                            ga && ga === z.$$originalDirective ? f.data( "$isolateScope", Q ) : f.data( "$isolateScopeNoTemplate", Q );
                            $( f, "ng-isolate-scope" );
                            q( z.scope, function( a, c ) {
                                var d = a.match( ka ) || [],
                                    g = d[ 3 ] || c,
                                    f = "?" == d[ 2 ],
                                    d = d[ 1 ],
                                    l, m, n, p;
                                Q.$$isolateBindings[ c ] = d + g;
                                switch ( d ) {
                                    case "@":
                                        K.$observe( g, function( a ) {
                                            Q[ c ] = a
                                        } );
                                        K.$$observers[ g ].$$scope = e;
                                        K[ g ] && ( Q[ c ] = b( K[ g ] )( e ) );
                                        break;
                                    case "=":
                                        if ( f && !K[ g ] ) break;
                                        m = t( K[ g ] );
                                        p = m.literal ? ta : function( a, b ) {
                                            return a === b
                                        };
                                        n = m.assign || function() {
                                            l = Q[ c ] = m( e );
                                            throw ha( "nonassign", K[ g ], z.name );
                                        };
                                        l = Q[ c ] = m( e );
                                        Q.$watch( function() {
                                            var a = m( e );
                                            p( a, Q[ c ] ) || ( p( a, l ) ? n( e, a = Q[ c ] ) : Q[ c ] = a );
                                            return l = a
                                        }, null, m.literal );
                                        break;
                                    case "&":
                                        m = t( K[ g ] );
                                        Q[ c ] = function( a ) {
                                            return m( e, a )
                                        };
                                        break;
                                    default:
                                        throw ha( "iscp", z.name, c, a );
                                }
                            } )
                        }
                        s = n && A;
                        H && q( H, function( a ) {
                            var b = {
                                    $scope: a === z || a.$$isolateScope ? Q : e,
                                    $element: B,
                                    $attrs: K,
                                    $transclude: s
                                },
                                c;
                            R = a.controller;
                            "@" == R && ( R = K[ a.name ] );
                            c = w( R, b );
                            eb[ a.name ] = c;
                            D || B.data( "$" + a.name + "Controller", c );
                            a.controllerAs && ( b.$scope[ a.controllerAs ] = c )
                        } );
                        f = 0;
                        for ( F = l.length; f < F; f++ ) try {
                            M = l[ f ], M( M.isolateScope ? Q : e, B, K, M.require && S( M.require, B, eb ), s )
                        } catch ( T ) {
                            m( T, fa( B ) )
                        }
                        f = e;
                        z && ( z.template || null === z.templateUrl ) && ( f = Q );
                        a && a( f, g.childNodes, r, n );
                        for ( f = p.length - 1; 0 <= f; f-- ) try {
                            M = p[ f ], M( M.isolateScope ? Q : e, B, K, M.require && S( M.require, B, eb ), s )
                        } catch ( G ) {
                            m( G, fa( B ) )
                        }
                    }
                    n = n || {};
                    var F = -Number.MAX_VALUE,
                        M, H = n.controllerDirectives,
                        z = n.newIsolateScopeDirective,
                        ga = n.templateDirective;
                    n = n.nonTlbTranscludeDirective;
                    for ( var T = !1, D = !1, x = d.$$element = u( c ), G, ba, s, N = e, ma, L = 0, Fa = a.length; L < Fa; L++ ) {
                        G = a[ L ];
                        var P = G.$$start,
                            U = G.$$end;
                        P && ( x = Q( c, P, U ) );
                        s = r;
                        if ( F > G.priority ) break;
                        if ( s = G.scope ) M = M || G, G.templateUrl || ( C( "new/isolated scope", z, G, x ), V( s ) && ( z = G ) );
                        ba = G.name;
                        !G.templateUrl && G.controller && ( s = G.controller, H = H || {}, C( "'" + ba + "' controller", H[ ba ], G, x ), H[ ba ] = G );
                        if ( s = G.transclude ) T = !0, G.$$tlb || ( C( "transclusion", n, G, x ), n = G ), "element" == s ? ( D = !0, F = G.priority, s = Q( c, P, U ), x = d.$$element = u( O.createComment( " " + ba + ": " + d[ ba ] + " " ) ), c = x[ 0 ], fb( g, u( ua.call( s, 0 ) ), c ), N = B( s, e, F, f && f.name, {
                            nonTlbTranscludeDirective: n
                        } ) ) : ( s = u( yb( c ) ).contents(), x.empty(), N = B( s, e ) );
                        if ( G.template )
                            if ( C( "template", ga, G, x ), ga = G, s = J( G.template ) ? G.template( x, d ) : G.template, s = X( s ), G.replace ) {
                                f = G;
                                s = u( "<div>" + aa( s ) + "</div>" ).contents();
                                c = s[ 0 ];
                                if ( 1 != s.length || 1 !== c.nodeType ) throw ha( "tplrt", ba, "" );
                                fb( g, x, c );
                                Fa = {
                                    $attr: {}
                                };
                                s = ka( c, [], Fa );
                                var Y = a.splice( L + 1, a.length - ( L + 1 ) );
                                z && gc( s );
                                a = a.concat( s ).concat( Y );
                                v( d, Fa );
                                Fa = a.length
                            } else x.html( s );
                        if ( G.templateUrl ) C( "template", ga, G, x ), ga = G, G.replace && ( f = G ), W = y( a.splice( L, a.length - L ), x, d, g, N, l, p, {
                                controllerDirectives: H,
                                newIsolateScopeDirective: z,
                                templateDirective: ga,
                                nonTlbTranscludeDirective: n
                            } ),
                            Fa = a.length;
                        else if ( G.compile ) try {
                            ma = G.compile( x, d, N ), J( ma ) ? A( null, ma, P, U ) : ma && A( ma.pre, ma.post, P, U )
                        } catch ( Z ) {
                            m( Z, fa( x ) )
                        }
                        G.terminal && ( W.terminal = !0, F = Math.max( F, G.priority ) )
                    }
                    W.scope = M && !0 === M.scope;
                    W.transclude = T && N;
                    return W
                }

                function gc( a ) {
                    for ( var b = 0, c = a.length; b < c; b++ ) a[ b ] = Qb( a[ b ], {
                        $$isolateScope: !0
                    } )
                }

                function T( b, e, g, f, k, p, n ) {
                    if ( e === k ) return null;
                    k = null;
                    if ( c.hasOwnProperty( e ) ) {
                        var t;
                        e = a.get( e + d );
                        for ( var w = 0, A = e.length; w < A; w++ ) try {
                            t = e[ w ], ( f === r || f > t.priority ) && -1 != t.restrict.indexOf( g ) && ( p && ( t = Qb( t, {
                                $$start: p,
                                $$end: n
                            } ) ), b.push( t ), k = t )
                        } catch ( B ) {
                            m( B )
                        }
                    }
                    return k
                }

                function v( a, b ) {
                    var c = b.$attr,
                        d = a.$attr,
                        e = a.$$element;
                    q( a, function( d, e ) {
                        "$" != e.charAt( 0 ) && ( b[ e ] && ( d += ( "style" === e ? ";" : " " ) + b[ e ] ), a.$set( e, d, !0, c[ e ] ) )
                    } );
                    q( b, function( b, g ) {
                        "class" == g ? ( $( e, b ), a[ "class" ] = ( a[ "class" ] ? a[ "class" ] + " " : "" ) + b ) : "style" == g ? ( e.attr( "style", e.attr( "style" ) + ";" + b ), a.style = ( a.style ? a.style + ";" : "" ) + b ) : "$" == g.charAt( 0 ) || a.hasOwnProperty( g ) || ( a[ g ] = b, d[ g ] = c[ g ] )
                    } )
                }

                function y( a, b, c, d, e, g, f, l ) {
                    var k = [],
                        m, t, w = b[ 0 ],
                        A = a.shift(),
                        B = x( {}, A, {
                            templateUrl: null,
                            transclude: null,
                            replace: null,
                            $$originalDirective: A
                        } ),
                        S = J( A.templateUrl ) ? A.templateUrl( b, c ) : A.templateUrl;
                    b.empty();
                    n.get( H.getTrustedResourceUrl( S ), {
                        cache: p
                    } ).success( function( p ) {
                        var n, F;
                        p = X( p );
                        if ( A.replace ) {
                            p = u( "<div>" + aa( p ) + "</div>" ).contents();
                            n = p[ 0 ];
                            if ( 1 != p.length || 1 !== n.nodeType ) throw ha( "tplrt", A.name, S );
                            p = {
                                $attr: {}
                            };
                            fb( d, b, n );
                            var $ = ka( n, [], p );
                            V( A.scope ) && gc( $ );
                            a = $.concat( a );
                            v( c, p )
                        } else n = w, b.html( p );
                        a.unshift( B );
                        m = ga( a, n, c, e, b, A, g, f, l );
                        q( d, function( a, c ) {
                            a == n && ( d[ c ] = b[ 0 ] )
                        } );
                        for ( t = M( b[ 0 ].childNodes, e ); k.length; ) {
                            p = k.shift();
                            F = k.shift();
                            var z = k.shift(),
                                H = k.shift(),
                                $ = b[ 0 ];
                            F !== w && ( $ = yb( n ), fb( z, u( F ), $ ) );
                            F = m.transclude ? W( p, m.transclude ) : H;
                            m( t, p, $, d, F )
                        }
                        k = null
                    } ).error( function( a, b, c, d ) {
                        throw ha( "tpload", d.url );
                    } );
                    return function( a, b, c, d, e ) {
                        k ? ( k.push( b ), k.push( c ), k.push( d ), k.push( e ) ) : m( t, b, c, d, e )
                    }
                }

                function D( a, b ) {
                    var c = b.priority - a.priority;
                    return 0 !== c ? c : a.name !== b.name ? a.name < b.name ? -1 : 1 : a.index - b.index
                }

                function C( a, b, c, d ) {
                    if ( b ) throw ha( "multidir", b.name, c.name, a, fa( d ) );
                }

                function s( a, c ) {
                    var d = b( c, !0 );
                    d && a.push( {
                        priority: 0,
                        compile: Z( function( a, b ) {
                            var c = b.parent(),
                                e = c.data( "$binding" ) || [];
                            e.push( d );
                            $( c.data( "$binding", e ), "ng-binding" );
                            a.$watch( d, function( a ) {
                                b[ 0 ].nodeValue = a
                            } )
                        } )
                    } )
                }

                function N( a, b ) {
                    if ( "srcdoc" == b ) return H.HTML;
                    var c = Ea( a );
                    if ( "xlinkHref" == b || "FORM" == c && "action" == b || "IMG" != c && ( "src" == b || "ngSrc" == b ) ) return H.RESOURCE_URL
                }

                function P( a, c, d, e ) {
                    var g = b( d, !0 );
                    if ( g ) {
                        if ( "multiple" === e && "SELECT" === Ea( a ) ) throw ha( "selmulti", fa( a ) );
                        c.push( {
                            priority: 100,
                            compile: function() {
                                return {
                                    pre: function( c, d, l ) {
                                        d = l.$$observers || ( l.$$observers = {} );
                                        if ( f.test( e ) ) throw ha( "nodomevents" );
                                        if ( g = b( l[ e ], !0, N( a, e ) ) ) l[ e ] = g( c ), ( d[ e ] || ( d[ e ] = [] ) ).$$inter = !0, ( l.$$observers && l.$$observers[ e ].$$scope || c ).$watch( g, function( a, b ) {
                                            "class" === e && a != b ? l.$updateClass( a, b ) : l.$set( e, a )
                                        } )
                                    }
                                }
                            }
                        } )
                    }
                }

                function fb( a, b, c ) {
                    var d = b[ 0 ],
                        e = b.length,
                        g = d.parentNode,
                        f, l;
                    if ( a )
                        for ( f = 0, l = a.length; f < l; f++ )
                            if ( a[ f ] == d ) {
                                a[ f++ ] = c;
                                l = f + e - 1;
                                for ( var k = a.length; f < k; f++, l++ ) l < k ? a[ f ] = a[ l ] : delete a[ f ];
                                a.length -= e - 1;
                                break
                            }
                    g && g.replaceChild( c, d );
                    a = O.createDocumentFragment();
                    a.appendChild( d );
                    c[ u.expando ] = d[ u.expando ];
                    d = 1;
                    for ( e = b.length; d < e; d++ ) g = b[ d ], u( g ).remove(), a.appendChild( g ), delete b[ d ];
                    b[ 0 ] = c;
                    b.length = 1
                }

                function ic( a, b ) {
                    return x( function() {
                        return a.apply( null, arguments )
                    }, a, b )
                }
                var Db = function( a, b ) {
                    this.$$element = a;
                    this.$attr = b || {}
                };
                Db.prototype = {
                    $normalize: la,
                    $addClass: function( a ) {
                        a && 0 < a.length && S.addClass( this.$$element, a )
                    },
                    $removeClass: function( a ) {
                        a && 0 < a.length && S.removeClass( this.$$element, a )
                    },
                    $updateClass: function( a, b ) {
                        this.$removeClass( jc( b, a ) );
                        this.$addClass( jc( a, b ) )
                    },
                    $set: function( a, b, c, d ) {
                        var e = dc( this.$$element[ 0 ], a );
                        e && ( this.$$element.prop( a, b ), d = e );
                        this[ a ] = b;
                        d ? this.$attr[ a ] = d : ( d = this.$attr[ a ] ) || ( this.$attr[ a ] = d = ab( a, "-" ) );
                        e = Ea( this.$$element );
                        if ( "A" === e && "href" === a || "IMG" === e && "src" === a ) this[ a ] = b = z( b, "src" === a );
                        !1 !== c && ( null === b || b === r ? this.$$element.removeAttr( d ) : this.$$element.attr( d, b ) );
                        ( c = this.$$observers ) && q( c[ a ], function( a ) {
                            try {
                                a( b )
                            } catch ( c ) {
                                m( c )
                            }
                        } )
                    },
                    $observe: function( a, b ) {
                        var c = this,
                            d = c.$$observers || ( c.$$observers = {} ),
                            e = d[ a ] || ( d[ a ] = [] );
                        e.push( b );
                        A.$evalAsync( function() {
                            e.$$inter || b( c[ a ] )
                        } );
                        return b
                    }
                };
                var ba = b.startSymbol(),
                    ma = b.endSymbol(),
                    X = "{{" == ba || "}}" == ma ? za : function( a ) {
                        return a.replace( /\{\{/g, ba ).replace( /}}/g, ma )
                    },
                    U = /^ngAttr[A-Z]/;
                return B
            } ]
    }

    function la( b ) {
        return Pa( b.replace( gd, "" ) )
    }

    function jc( b, a ) {
        var c = "",
            d = b.split( /\s+/ ),
            e = a.split( /\s+/ ),
            g = 0;
        a: for ( ; g < d.length; g++ ) {
            for ( var f = d[ g ], h = 0; h < e.length; h++ )
                if ( f == e[ h ] ) continue a;
            c += ( 0 < c.length ? " " : "" ) + f
        }
        return c
    }

    function hd() {
        var b = {},
            a = /^(\S+)(\s+as\s+(\w+))?$/;
        this.register = function( a, d ) {
            wa( a, "controller" );
            V( a ) ? x( b, a ) : b[ a ] = d
        };
        this.$get = [ "$injector", "$window", function( c, d ) {
            return function( e, g ) {
                var f, h, l;
                E( e ) && ( f = e.match( a ), h = f[ 1 ], l = f[ 3 ], e = b.hasOwnProperty( h ) ? b[ h ] : tb( g.$scope, h, !0 ) || tb( d, h, !0 ), Oa( e, h, !0 ) );
                f = c.instantiate( e, g );
                if ( l ) {
                    if ( !g || "object" != typeof g.$scope ) throw s( "$controller" )( "noscp", h || e.name, l );
                    g.$scope[ l ] = f
                }
                return f
            }
        } ]
    }

    function id() {
        this.$get = [ "$window", function( b ) {
            return u( b.document )
        } ]
    }

    function jd() {
        this.$get = [ "$log", function( b ) {
            return function( a, c ) {
                b.error.apply( b, arguments )
            }
        } ]
    }

    function kc( b ) {
        var a = {},
            c, d, e;
        if ( !b ) return a;
        q( b.split( "\n" ), function( b ) {
            e = b.indexOf( ":" );
            c = C( aa( b.substr( 0, e ) ) );
            d = aa( b.substr( e + 1 ) );
            c && ( a[ c ] = a[ c ] ? a[ c ] + ( ", " + d ) : d )
        } );
        return a
    }

    function lc( b ) {
        var a = V( b ) ? b : r;
        return function( c ) {
            a || ( a = kc( b ) );
            return c ? a[ C( c ) ] || null : a
        }
    }

    function mc( b, a, c ) {
        if ( J( c ) ) return c( b, a );
        q( c, function( c ) {
            b = c( b, a )
        } );
        return b
    }

    function kd() {
        var b = /^\s*(\[|\{[^\{])/,
            a = /[\}\]]\s*$/,
            c = /^\)\]\}',?\n/,
            d = {
                "Content-Type": "application/json;charset=utf-8"
            },
            e = this.defaults = {
                transformResponse: [ function( d ) {
                    E( d ) && ( d = d.replace( c, "" ), b.test( d ) && a.test( d ) && ( d = Tb( d ) ) );
                    return d
                } ],
                transformRequest: [ function( a ) {
                    return V( a ) && "[object File]" !== Ya.call( a ) ? oa( a ) : a
                } ],
                headers: {
                    common: {
                        Accept: "application/json, text/plain, */*"
                    },
                    post: d,
                    put: d,
                    patch: d
                },
                xsrfCookieName: "XSRF-TOKEN",
                xsrfHeaderName: "X-XSRF-TOKEN"
            },
            g = this.interceptors = [],
            f = this.responseInterceptors = [];
        this.$get = [ "$httpBackend", "$browser", "$cacheFactory", "$rootScope", "$q", "$injector", function( a, b, c, d, n, p ) {
            function t( a ) {
                function c( a ) {
                    var b = x( {}, a, {
                        data: mc( a.data, a.headers, d.transformResponse )
                    } );
                    return 200 <= a.status && 300 > a.status ? b : n.reject( b )
                }
                var d = {
                        transformRequest: e.transformRequest,
                        transformResponse: e.transformResponse
                    },
                    g = function( a ) {
                        function b( a ) {
                            var c;
                            q( a, function( b, d ) {
                                J( b ) && ( c = b(), null != c ? a[ d ] = c : delete a[ d ] )
                            } )
                        }
                        var c = e.headers,
                            d = x( {}, a.headers ),
                            g, f, c = x( {}, c.common, c[ C( a.method ) ] );
                        b( c );
                        b( d );
                        a: for ( g in c ) {
                            a = C( g );
                            for ( f in d )
                                if ( C( f ) === a ) continue a;
                            d[ g ] = c[ g ]
                        }
                        return d
                    }( a );
                x( d, a );
                d.headers = g;
                d.method = Ga( d.method );
                ( a = Eb( d.url ) ? b.cookies()[ d.xsrfCookieName || e.xsrfCookieName ] : r ) && ( g[ d.xsrfHeaderName || e.xsrfHeaderName ] = a );
                var f = [ function( a ) {
                        g = a.headers;
                        var b = mc( a.data, lc( g ), a.transformRequest );
                        D( a.data ) && q( g, function( a, b ) {
                            "content-type" === C( b ) && delete g[ b ]
                        } );
                        D( a.withCredentials ) && !D( e.withCredentials ) && ( a.withCredentials = e.withCredentials );
                        return w( a, b, g ).then( c, c )
                    }, r ],
                    h = n.when( d );
                for ( q( H, function( a ) {
                        ( a.request || a.requestError ) && f.unshift( a.request, a.requestError );
                        ( a.response || a.responseError ) && f.push( a.response, a.responseError )
                    } ); f.length; ) {
                    a = f.shift();
                    var k = f.shift(),
                        h = h.then( a, k )
                }
                h.success = function( a ) {
                    h.then( function( b ) {
                        a( b.data, b.status, b.headers, d )
                    } );
                    return h
                };
                h.error = function( a ) {
                    h.then( null, function( b ) {
                        a( b.data, b.status, b.headers, d )
                    } );
                    return h
                };
                return h
            }

            function w( b, c, g ) {
                function f( a, b, c ) {
                    q && ( 200 <= a && 300 > a ? q.put( r, [ a, b, kc( c ) ] ) : q.remove( r ) );
                    l( b, a, c );
                    d.$$phase || d.$apply()
                }

                function l( a, c, d ) {
                    c = Math.max( c, 0 );
                    ( 200 <= c && 300 > c ? p.resolve : p.reject )( {
                        data: a,
                        status: c,
                        headers: lc( d ),
                        config: b
                    } )
                }

                function k() {
                    var a = $a( t.pendingRequests, b ); - 1 !== a && t.pendingRequests.splice( a, 1 )
                }
                var p = n.defer(),
                    w = p.promise,
                    q, H, r = A( b.url, b.params );
                t.pendingRequests.push( b );
                w.then( k, k );
                ( b.cache || e.cache ) && ( !1 !== b.cache && "GET" == b.method ) && ( q = V( b.cache ) ? b.cache : V( e.cache ) ? e.cache : F );
                if ( q )
                    if ( H = q.get( r ), v( H ) ) {
                        if ( H.then ) return H.then( k, k ), H;
                        I( H ) ? l( H[ 1 ], H[ 0 ], ea( H[ 2 ] ) ) : l( H, 200, {} )
                    } else q.put( r, w );
                D( H ) && a( b.method, r, c, f, g, b.timeout, b.withCredentials, b.responseType );
                return w
            }

            function A( a, b ) {
                if ( !b ) return a;
                var c = [];
                Nc( b, function( a, b ) {
                    null === a || D( a ) || ( I( a ) || ( a = [ a ] ), q( a, function( a ) {
                        V( a ) && ( a = oa( a ) );
                        c.push( va( b ) + "=" + va( a ) )
                    } ) )
                } );
                return a + ( -1 == a.indexOf( "?" ) ? "?" : "&" ) + c.join( "&" )
            }
            var F = c( "$http" ),
                H = [];
            q( g, function( a ) {
                H.unshift( E( a ) ? p.get( a ) : p.invoke( a ) )
            } );
            q( f, function( a, b ) {
                var c = E( a ) ? p.get( a ) : p.invoke( a );
                H.splice( b, 0, {
                    response: function( a ) {
                        return c( n.when( a ) )
                    },
                    responseError: function( a ) {
                        return c( n.reject( a ) )
                    }
                } )
            } );
            t.pendingRequests = [];
            ( function( a ) {
                q( arguments, function( a ) {
                    t[ a ] = function( b, c ) {
                        return t( x( c || {}, {
                            method: a,
                            url: b
                        } ) )
                    }
                } )
            } )( "get", "delete", "head", "jsonp" );
            ( function( a ) {
                q( arguments, function( a ) {
                    t[ a ] = function( b, c, d ) {
                        return t( x( d || {}, {
                            method: a,
                            url: b,
                            data: c
                        } ) )
                    }
                } )
            } )( "post", "put" );
            t.defaults = e;
            return t
        } ]
    }

    function ld() {
        this.$get = [ "$browser", "$window", "$document", function( b, a, c ) {
            return md( b, nd, b.defer, a.angular.callbacks, c[ 0 ] )
        } ]
    }

    function md( b, a, c, d, e ) {
        function g( a, b ) {
            var c = e.createElement( "script" ),
                d = function() {
                    c.onreadystatechange = c.onload = c.onerror = null;
                    e.body.removeChild( c );
                    b && b()
                };
            c.type = "text/javascript";
            c.src = a;
            L && 8 >= L ? c.onreadystatechange = function() {
                /loaded|complete/.test( c.readyState ) && d()
            } : c.onload = c.onerror = function() {
                d()
            };
            e.body.appendChild( c );
            return d
        }
        var f = -1;
        return function( e, l, k, m, n, p, t, w ) {
            function A() {
                H = f;
                z && z();
                B && B.abort()
            }

            function F( a, d, e, g ) {
                var f = pa( l ).protocol;
                r && c.cancel( r );
                z = B = null;
                d = "file" == f && 0 === d ? e ? 200 : 404 : d;
                a( 1223 == d ? 204 : d, e, g );
                b.$$completeOutstandingRequest( y )
            }
            var H;
            b.$$incOutstandingRequestCount();
            l = l || b.url();
            if ( "jsonp" == C( e ) ) {
                var S = "_" + ( d.counter++ ).toString( 36 );
                d[ S ] = function( a ) {
                    d[ S ].data = a
                };
                var z = g( l.replace( "JSON_CALLBACK", "angular.callbacks." + S ), function() {
                    d[ S ].data ? F( m, 200, d[ S ].data ) : F( m, H || -2 );
                    delete d[ S ]
                } )
            } else {
                var B = new a;
                B.open( e, l, !0 );
                q( n, function( a, b ) {
                    v( a ) && B.setRequestHeader( b, a )
                } );
                B.onreadystatechange = function() {
                    if ( 4 == B.readyState ) {
                        var a = null,
                            b = null;
                        H !== f && ( a = B.getAllResponseHeaders(), b = B.responseType ? B.response : B.responseText );
                        F( m, H || B.status, b, a )
                    }
                };
                t && ( B.withCredentials = !0 );
                w && ( B.responseType = w );
                B.send( k || null )
            }
            if ( 0 < p ) var r = c( A, p );
            else p && p.then && p.then( A )
        }
    }

    function od() {
        var b = "{{",
            a = "}}";
        this.startSymbol = function( a ) {
            return a ? ( b = a, this ) : b
        };
        this.endSymbol = function( b ) {
            return b ? ( a = b, this ) : a
        };
        this.$get = [ "$parse", "$exceptionHandler", "$sce", function( c, d, e ) {
            function g( g, k, m ) {
                for ( var n, p, t = 0, w = [], A = g.length, F = !1, q = []; t < A; ) - 1 != ( n = g.indexOf( b, t ) ) && -1 != ( p = g.indexOf( a, n + f ) ) ? ( t != n && w.push( g.substring( t, n ) ), w.push( t = c( F = g.substring( n + f, p ) ) ), t.exp = F, t = p + h, F = !0 ) : ( t != A && w.push( g.substring( t ) ), t = A );
                ( A = w.length ) || ( w.push( "" ), A = 1 );
                if ( m && 1 < w.length ) throw nc( "noconcat", g );
                if ( !k || F ) return q.length = A, t = function( a ) {
                    try {
                        for ( var b = 0, c = A, f; b < c; b++ ) "function" == typeof( f = w[ b ] ) && ( f = f( a ), f = m ? e.getTrusted( m, f ) : e.valueOf( f ), null === f || D( f ) ? f = "" : "string" != typeof f && ( f = oa( f ) ) ), q[ b ] = f;
                        return q.join( "" )
                    } catch ( h ) {
                        a = nc( "interr", g, h.toString() ), d( a )
                    }
                }, t.exp = g, t.parts = w, t
            }
            var f = b.length,
                h = a.length;
            g.startSymbol = function() {
                return b
            };
            g.endSymbol = function() {
                return a
            };
            return g
        } ]
    }

    function pd() {
        this.$get = [ "$rootScope", "$window", "$q", function( b, a, c ) {
            function d( d, f, h, l ) {
                var k = a.setInterval,
                    m = a.clearInterval,
                    n = c.defer(),
                    p = n.promise,
                    t = 0,
                    w = v( l ) && !l;
                h = v( h ) ? h : 0;
                p.then( null, null, d );
                p.$$intervalId = k( function() {
                    n.notify( t++ );
                    0 < h && t >= h && ( n.resolve( t ), m( p.$$intervalId ), delete e[ p.$$intervalId ] );
                    w || b.$apply()
                }, f );
                e[ p.$$intervalId ] = n;
                return p
            }
            var e = {};
            d.cancel = function( a ) {
                return a && a.$$intervalId in e ? ( e[ a.$$intervalId ].reject( "canceled" ), clearInterval( a.$$intervalId ), delete e[ a.$$intervalId ], !0 ) : !1
            };
            return d
        } ]
    }

    function qd() {
        this.$get = function() {
            return {
                id: "en-us",
                NUMBER_FORMATS: {
                    DECIMAL_SEP: ".",
                    GROUP_SEP: ",",
                    PATTERNS: [ {
                        minInt: 1,
                        minFrac: 0,
                        maxFrac: 3,
                        posPre: "",
                        posSuf: "",
                        negPre: "-",
                        negSuf: "",
                        gSize: 3,
                        lgSize: 3
                    }, {
                        minInt: 1,
                        minFrac: 2,
                        maxFrac: 2,
                        posPre: "\u00a4",
                        posSuf: "",
                        negPre: "(\u00a4",
                        negSuf: ")",
                        gSize: 3,
                        lgSize: 3
                    } ],
                    CURRENCY_SYM: "$"
                },
                DATETIME_FORMATS: {
                    MONTH: "January February March April May June July August September October November December".split( " " ),
                    SHORTMONTH: "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split( " " ),
                    DAY: "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split( " " ),
                    SHORTDAY: "Sun Mon Tue Wed Thu Fri Sat".split( " " ),
                    AMPMS: [ "AM", "PM" ],
                    medium: "MMM d, y h:mm:ss a",
                    "short": "M/d/yy h:mm a",
                    fullDate: "EEEE, MMMM d, y",
                    longDate: "MMMM d, y",
                    mediumDate: "MMM d, y",
                    shortDate: "M/d/yy",
                    mediumTime: "h:mm:ss a",
                    shortTime: "h:mm a"
                },
                pluralCat: function( b ) {
                    return 1 === b ? "one" : "other"
                }
            }
        }
    }

    function oc( b ) {
        b = b.split( "/" );
        for ( var a = b.length; a--; ) b[ a ] = rb( b[ a ] );
        return b.join( "/" )
    }

    function pc( b, a, c ) {
        b = pa( b, c );
        a.$$protocol = b.protocol;
        a.$$host = b.hostname;
        a.$$port = P( b.port ) || rd[ b.protocol ] || null
    }

    function qc( b, a, c ) {
        var d = "/" !== b.charAt( 0 );
        d && ( b = "/" + b );
        b = pa( b, c );
        a.$$path = decodeURIComponent( d && "/" === b.pathname.charAt( 0 ) ? b.pathname.substring( 1 ) : b.pathname );
        a.$$search = Vb( b.search );
        a.$$hash = decodeURIComponent( b.hash );
        a.$$path && "/" != a.$$path.charAt( 0 ) && ( a.$$path = "/" + a.$$path )
    }

    function na( b, a ) {
        if ( 0 === a.indexOf( b ) ) return a.substr( b.length )
    }

    function Ua( b ) {
        var a = b.indexOf( "#" );
        return -1 == a ? b : b.substr( 0, a )
    }

    function Fb( b ) {
        return b.substr( 0, Ua( b ).lastIndexOf( "/" ) + 1 )
    }

    function rc( b, a ) {
        this.$$html5 = !0;
        a = a || "";
        var c = Fb( b );
        pc( b, this, b );
        this.$$parse = function( a ) {
            var e = na( c, a );
            if ( !E( e ) ) throw Gb( "ipthprfx", a, c );
            qc( e, this, b );
            this.$$path || ( this.$$path = "/" );
            this.$$compose()
        };
        this.$$compose = function() {
            var a = Wb( this.$$search ),
                b = this.$$hash ? "#" + rb( this.$$hash ) : "";
            this.$$url = oc( this.$$path ) + ( a ? "?" + a : "" ) + b;
            this.$$absUrl = c + this.$$url.substr( 1 )
        };
        this.$$rewrite = function( d ) {
            var e;
            if ( ( e = na( b, d ) ) !== r ) return d = e, ( e = na( a, e ) ) !== r ? c + ( na( "/", e ) || e ) : b + d;
            if ( ( e = na( c, d ) ) !== r ) return c + e;
            if ( c == d + "/" ) return c
        }
    }

    function Hb( b, a ) {
        var c = Fb( b );
        pc( b, this, b );
        this.$$parse = function( d ) {
            var e = na( b, d ) || na( c, d ),
                e = "#" == e.charAt( 0 ) ? na( a, e ) : this.$$html5 ? e : "";
            if ( !E( e ) ) throw Gb( "ihshprfx", d, a );
            qc( e, this, b );
            d = this.$$path;
            var g = /^\/?.*?:(\/.*)/;
            0 === e.indexOf( b ) && ( e = e.replace( b, "" ) );
            g.exec( e ) || ( d = ( e = g.exec( d ) ) ? e[ 1 ] : d );
            this.$$path = d;
            this.$$compose()
        };
        this.$$compose = function() {
            var c = Wb( this.$$search ),
                e = this.$$hash ? "#" + rb( this.$$hash ) : "";
            this.$$url = oc( this.$$path ) + ( c ? "?" + c : "" ) + e;
            this.$$absUrl = b + ( this.$$url ? a + this.$$url : "" )
        };
        this.$$rewrite = function( a ) {
            if ( Ua( b ) == Ua( a ) ) return a
        }
    }

    function sc( b, a ) {
        this.$$html5 = !0;
        Hb.apply( this, arguments );
        var c = Fb( b );
        this.$$rewrite = function( d ) {
            var e;
            if ( b == Ua( d ) ) return d;
            if ( e = na( c, d ) ) return b + a + e;
            if ( c === d + "/" ) return c
        }
    }

    function gb( b ) {
        return function() {
            return this[ b ]
        }
    }

    function tc( b, a ) {
        return function( c ) {
            if ( D( c ) ) return this[ b ];
            this[ b ] = a( c );
            this.$$compose();
            return this
        }
    }

    function sd() {
        var b = "",
            a = !1;
        this.hashPrefix = function( a ) {
            return v( a ) ? ( b = a, this ) : b
        };
        this.html5Mode = function( b ) {
            return v( b ) ? ( a = b, this ) : a
        };
        this.$get = [ "$rootScope", "$browser", "$sniffer", "$rootElement", function( c, d, e, g ) {
            function f( a ) {
                c.$broadcast( "$locationChangeSuccess", h.absUrl(), a )
            }
            var h, l = d.baseHref(),
                k = d.url();
            a ? ( l = k.substring( 0, k.indexOf( "/", k.indexOf( "//" ) + 2 ) ) + ( l || "/" ), e = e.history ? rc : sc ) : ( l = Ua( k ), e = Hb );
            h = new e( l, "#" + b );
            h.$$parse( h.$$rewrite( k ) );
            g.on( "click", function( a ) {
                if ( !a.ctrlKey && !a.metaKey && 2 != a.which ) {
                    for ( var b = u( a.target );
                        "a" !== C( b[ 0 ].nodeName ); )
                        if ( b[ 0 ] === g[ 0 ] || !( b = b.parent() )[ 0 ] ) return;
                    var e = b.prop( "href" );
                    V( e ) && "[object SVGAnimatedString]" === e.toString() && ( e = pa( e.animVal ).href );
                    var f = h.$$rewrite( e );
                    e && ( !b.attr( "target" ) && f && !a.isDefaultPrevented() ) && ( a.preventDefault(), f != d.url() && ( h.$$parse( f ), c.$apply(), Y.angular[ "ff-684208-preventDefault" ] = !0 ) )
                }
            } );
            h.absUrl() != k && d.url( h.absUrl(), !0 );
            d.onUrlChange( function( a ) {
                h.absUrl() != a && ( c.$broadcast( "$locationChangeStart", a, h.absUrl() ).defaultPrevented ? d.url( h.absUrl() ) : ( c.$evalAsync( function() {
                    var b = h.absUrl();
                    h.$$parse( a );
                    f( b )
                } ), c.$$phase || c.$digest() ) )
            } );
            var m = 0;
            c.$watch( function() {
                var a = d.url(),
                    b = h.$$replace;
                m && a == h.absUrl() || ( m++, c.$evalAsync( function() {
                    c.$broadcast( "$locationChangeStart", h.absUrl(), a ).defaultPrevented ? h.$$parse( a ) : ( d.url( h.absUrl(), b ), f( a ) )
                } ) );
                h.$$replace = !1;
                return m
            } );
            return h
        } ]
    }

    function td() {
        var b = !0,
            a = this;
        this.debugEnabled = function( a ) {
            return v( a ) ? ( b = a, this ) : b
        };
        this.$get = [ "$window", function( c ) {
            function d( a ) {
                a instanceof Error && ( a.stack ? a = a.message && -1 === a.stack.indexOf( a.message ) ? "Error: " + a.message + "\n" + a.stack : a.stack : a.sourceURL && ( a = a.message + "\n" + a.sourceURL + ":" + a.line ) );
                return a
            }

            function e( a ) {
                var b = c.console || {},
                    e = b[ a ] || b.log || y;
                a = !1;
                try {
                    a = !!e.apply
                } catch ( l ) {}
                return a ? function() {
                    var a = [];
                    q( arguments, function( b ) {
                        a.push( d( b ) )
                    } );
                    return e.apply( b, a )
                } : function( a, b ) {
                    e( a, null == b ? "" : b )
                }
            }
            return {
                log: e( "log" ),
                info: e( "info" ),
                warn: e( "warn" ),
                error: e( "error" ),
                debug: function() {
                    var c = e( "debug" );
                    return function() {
                        b && c.apply( a, arguments )
                    }
                }()
            }
        } ]
    }

    function ca( b, a ) {
        if ( "constructor" === b ) throw xa( "isecfld", a );
        return b
    }

    function Va( b, a ) {
        if ( b ) {
            if ( b.constructor === b ) throw xa( "isecfn", a );
            if ( b.document && b.location && b.alert && b.setInterval ) throw xa( "isecwindow", a );
            if ( b.children && ( b.nodeName || b.on && b.find ) ) throw xa( "isecdom", a );
        }
        return b
    }

    function hb( b, a, c, d, e ) {
        e = e || {};
        a = a.split( "." );
        for ( var g, f = 0; 1 < a.length; f++ ) {
            g = ca( a.shift(), d );
            var h = b[ g ];
            h || ( h = {}, b[ g ] = h );
            b = h;
            b.then && e.unwrapPromises && ( qa( d ), "$$v" in b || function( a ) {
                a.then( function( b ) {
                    a.$$v = b
                } )
            }( b ), b.$$v === r && ( b.$$v = {} ), b = b.$$v )
        }
        g = ca( a.shift(), d );
        return b[ g ] = c
    }

    function uc( b, a, c, d, e, g, f ) {
        ca( b, g );
        ca( a, g );
        ca( c, g );
        ca( d, g );
        ca( e, g );
        return f.unwrapPromises ? function( f, l ) {
            var k = l && l.hasOwnProperty( b ) ? l : f,
                m;
            if ( null == k ) return k;
            ( k = k[ b ] ) && k.then && ( qa( g ), "$$v" in k || ( m = k, m.$$v = r, m.then( function( a ) {
                m.$$v = a
            } ) ), k = k.$$v );
            if ( null == k ) return a ? r : k;
            ( k = k[ a ] ) && k.then && ( qa( g ), "$$v" in k || ( m = k, m.$$v = r, m.then( function( a ) {
                m.$$v = a
            } ) ), k = k.$$v );
            if ( null == k ) return c ? r : k;
            ( k = k[ c ] ) && k.then && ( qa( g ), "$$v" in k || ( m = k, m.$$v = r, m.then( function( a ) {
                m.$$v = a
            } ) ), k = k.$$v );
            if ( null == k ) return d ? r : k;
            ( k = k[ d ] ) && k.then && ( qa( g ), "$$v" in k || ( m = k, m.$$v = r, m.then( function( a ) {
                m.$$v = a
            } ) ), k = k.$$v );
            if ( null == k ) return e ? r : k;
            ( k = k[ e ] ) && k.then && ( qa( g ), "$$v" in k || ( m = k, m.$$v = r, m.then( function( a ) {
                m.$$v = a
            } ) ), k = k.$$v );
            return k
        } : function( g, f ) {
            var k = f && f.hasOwnProperty( b ) ? f : g;
            if ( null == k ) return k;
            k = k[ b ];
            if ( null == k ) return a ? r : k;
            k = k[ a ];
            if ( null == k ) return c ? r : k;
            k = k[ c ];
            if ( null == k ) return d ? r : k;
            k = k[ d ];
            return null == k ? e ? r : k : k = k[ e ]
        }
    }

    function ud( b, a ) {
        ca( b, a );
        return function( a, d ) {
            return null == a ? r : ( d && d.hasOwnProperty( b ) ? d : a )[ b ]
        }
    }

    function vd( b, a, c ) {
        ca( b, c );
        ca( a, c );
        return function( c, e ) {
            if ( null == c ) return r;
            c = ( e && e.hasOwnProperty( b ) ? e : c )[ b ];
            return null == c ? r : c[ a ]
        }
    }

    function vc( b, a, c ) {
        if ( Ib.hasOwnProperty( b ) ) return Ib[ b ];
        var d = b.split( "." ),
            e = d.length,
            g;
        if ( a.unwrapPromises || 1 !== e )
            if ( a.unwrapPromises || 2 !== e )
                if ( a.csp ) g = 6 > e ? uc( d[ 0 ], d[ 1 ], d[ 2 ], d[ 3 ], d[ 4 ], c, a ) : function( b, g ) {
                    var f = 0,
                        h;
                    do h = uc( d[ f++ ], d[ f++ ], d[ f++ ], d[ f++ ], d[ f++ ], c, a )( b, g ), g = r, b = h; while ( f < e );
                    return h
                };
                else {
                    var f = "var p;\n";
                    q( d, function( b, d ) {
                        ca( b, c );
                        f += "if(s == null) return undefined;\ns=" + ( d ? "s" : '((k&&k.hasOwnProperty("' + b + '"))?k:s)' ) + '["' + b + '"];\n' + ( a.unwrapPromises ? 'if (s && s.then) {\n pw("' + c.replace( /(["\r\n])/g, "\\$1" ) + '");\n if (!("$$v" in s)) {\n p=s;\n p.$$v = undefined;\n p.then(function(v) {p.$$v=v;});\n}\n s=s.$$v\n}\n' : "" )
                    } );
                    var f = f + "return s;",
                        h = new Function( "s", "k", "pw", f );
                    h.toString = Z( f );
                    g = a.unwrapPromises ? function( a, b ) {
                        return h( a, b, qa )
                    } : h
                } else g = vd( d[ 0 ], d[ 1 ], c );
        else g = ud( d[ 0 ], c );
        "hasOwnProperty" !== b && ( Ib[ b ] = g );
        return g
    }

    function wd() {
        var b = {},
            a = {
                csp: !1,
                unwrapPromises: !1,
                logPromiseWarnings: !0
            };
        this.unwrapPromises = function( b ) {
            return v( b ) ? ( a.unwrapPromises = !!b, this ) : a.unwrapPromises
        };
        this.logPromiseWarnings = function( b ) {
            return v( b ) ? ( a.logPromiseWarnings = b, this ) : a.logPromiseWarnings
        };
        this.$get = [ "$filter", "$sniffer", "$log",
function( c, d, e ) {
                a.csp = d.csp;
                qa = function( b ) {
                    a.logPromiseWarnings && !wc.hasOwnProperty( b ) && ( wc[ b ] = !0, e.warn( "[$parse] Promise found in the expression `" + b + "`. Automatic unwrapping of promises in Angular expressions is deprecated." ) )
                };
                return function( d ) {
                    var e;
                    switch ( typeof d ) {
                        case "string":
                            if ( b.hasOwnProperty( d ) ) return b[ d ];
                            e = new Jb( a );
                            e = ( new Wa( e, c, a ) ).parse( d, !1 );
                            "hasOwnProperty" !== d && ( b[ d ] = e );
                            return e;
                        case "function":
                            return d;
                        default:
                            return y
                    }
                }
            } ]
    }

    function xd() {
        this.$get = [ "$rootScope", "$exceptionHandler",
function( b, a ) {
                return yd( function( a ) {
                    b.$evalAsync( a )
                }, a )
            } ]
    }

    function yd( b, a ) {
        function c( a ) {
            return a
        }

        function d( a ) {
            return f( a )
        }
        var e = function() {
                var h = [],
                    l, k;
                return k = {
                    resolve: function( a ) {
                        if ( h ) {
                            var c = h;
                            h = r;
                            l = g( a );
                            c.length && b( function() {
                                for ( var a, b = 0, d = c.length; b < d; b++ ) a = c[ b ], l.then( a[ 0 ], a[ 1 ], a[ 2 ] )
                            } )
                        }
                    },
                    reject: function( a ) {
                        k.resolve( f( a ) )
                    },
                    notify: function( a ) {
                        if ( h ) {
                            var c = h;
                            h.length && b( function() {
                                for ( var b, d = 0, e = c.length; d < e; d++ ) b = c[ d ], b[ 2 ]( a )
                            } )
                        }
                    },
                    promise: {
                        then: function( b, g, f ) {
                            var k = e(),
                                w = function( d ) {
                                    try {
                                        k.resolve( ( J( b ) ? b : c )( d ) )
                                    } catch ( e ) {
                                        k.reject( e ), a( e )
                                    }
                                },
                                A = function( b ) {
                                    try {
                                        k.resolve( ( J( g ) ? g : d )( b ) )
                                    } catch ( c ) {
                                        k.reject( c ), a( c )
                                    }
                                },
                                F = function( b ) {
                                    try {
                                        k.notify( ( J( f ) ? f : c )( b ) )
                                    } catch ( d ) {
                                        a( d )
                                    }
                                };
                            h ? h.push( [ w, A, F ] ) : l.then( w, A, F );
                            return k.promise
                        },
                        "catch": function( a ) {
                            return this.then( null, a )
                        },
                        "finally": function( a ) {
                            function b( a, c ) {
                                var d = e();
                                c ? d.resolve( a ) : d.reject( a );
                                return d.promise
                            }

                            function d( e, g ) {
                                var f = null;
                                try {
                                    f = ( a || c )()
                                } catch ( h ) {
                                    return b( h, !1 )
                                }
                                return f && J( f.then ) ? f.then( function() {
                                    return b( e, g )
                                }, function( a ) {
                                    return b( a, !1 )
                                } ) : b( e, g )
                            }
                            return this.then( function( a ) {
                                return d( a, !0 )
                            }, function( a ) {
                                return d( a, !1 )
                            } )
                        }
                    }
                }
            },
            g = function( a ) {
                return a && J( a.then ) ? a : {
                    then: function( c ) {
                        var d = e();
                        b( function() {
                            d.resolve( c( a ) )
                        } );
                        return d.promise
                    }
                }
            },
            f = function( c ) {
                return {
                    then: function( g, f ) {
                        var m = e();
                        b( function() {
                            try {
                                m.resolve( ( J( f ) ? f : d )( c ) )
                            } catch ( b ) {
                                m.reject( b ), a( b )
                            }
                        } );
                        return m.promise
                    }
                }
            };
        return {
            defer: e,
            reject: f,
            when: function( h, l, k, m ) {
                var n = e(),
                    p, t = function( b ) {
                        try {
                            return ( J( l ) ? l : c )( b )
                        } catch ( d ) {
                            return a( d ), f( d )
                        }
                    },
                    w = function( b ) {
                        try {
                            return ( J( k ) ? k : d )( b )
                        } catch ( c ) {
                            return a( c ),
                                f( c )
                        }
                    },
                    A = function( b ) {
                        try {
                            return ( J( m ) ? m : c )( b )
                        } catch ( d ) {
                            a( d )
                        }
                    };
                b( function() {
                    g( h ).then( function( a ) {
                        p || ( p = !0, n.resolve( g( a ).then( t, w, A ) ) )
                    }, function( a ) {
                        p || ( p = !0, n.resolve( w( a ) ) )
                    }, function( a ) {
                        p || n.notify( A( a ) )
                    } )
                } );
                return n.promise
            },
            all: function( a ) {
                var b = e(),
                    c = 0,
                    d = I( a ) ? [] : {};
                q( a, function( a, e ) {
                    c++;
                    g( a ).then( function( a ) {
                        d.hasOwnProperty( e ) || ( d[ e ] = a, --c || b.resolve( d ) )
                    }, function( a ) {
                        d.hasOwnProperty( e ) || b.reject( a )
                    } )
                } );
                0 === c && b.resolve( d );
                return b.promise
            }
        }
    }

    function zd() {
        var b = 10,
            a = s( "$rootScope" ),
            c = null;
        this.digestTtl = function( a ) {
            arguments.length && ( b = a );
            return b
        };
        this.$get = [ "$injector", "$exceptionHandler", "$parse", "$browser", function( d, e, g, f ) {
            function h() {
                this.$id = Xa();
                this.$$phase = this.$parent = this.$$watchers = this.$$nextSibling = this.$$prevSibling = this.$$childHead = this.$$childTail = null;
                this[ "this" ] = this.$root = this;
                this.$$destroyed = !1;
                this.$$asyncQueue = [];
                this.$$postDigestQueue = [];
                this.$$listeners = {};
                this.$$isolateBindings = {}
            }

            function l( b ) {
                if ( n.$$phase ) throw a( "inprog", n.$$phase );
                n.$$phase = b
            }

            function k( a, b ) {
                var c = g( a );
                Oa( c, b );
                return c
            }

            function m() {}
            h.prototype = {
                constructor: h,
                $new: function( a ) {
                    a ? ( a = new h, a.$root = this.$root, a.$$asyncQueue = this.$$asyncQueue, a.$$postDigestQueue = this.$$postDigestQueue ) : ( a = function() {}, a.prototype = this, a = new a, a.$id = Xa() );
                    a[ "this" ] = a;
                    a.$$listeners = {};
                    a.$parent = this;
                    a.$$watchers = a.$$nextSibling = a.$$childHead = a.$$childTail = null;
                    a.$$prevSibling = this.$$childTail;
                    this.$$childHead ? this.$$childTail = this.$$childTail.$$nextSibling = a : this.$$childHead = this.$$childTail = a;
                    return a
                },
                $watch: function( a, b, d ) {
                    var e = k( a, "watch" ),
                        g = this.$$watchers,
                        f = {
                            fn: b,
                            last: m,
                            get: e,
                            exp: a,
                            eq: !!d
                        };
                    c = null;
                    if ( !J( b ) ) {
                        var h = k( b || y, "listener" );
                        f.fn = function( a, b, c ) {
                            h( c )
                        }
                    }
                    if ( "string" == typeof a && e.constant ) {
                        var l = f.fn;
                        f.fn = function( a, b, c ) {
                            l.call( this, a, b, c );
                            Ka( g, f )
                        }
                    }
                    g || ( g = this.$$watchers = [] );
                    g.unshift( f );
                    return function() {
                        Ka( g, f )
                    }
                },
                $watchCollection: function( a, b ) {
                    var c = this,
                        d, e, f = 0,
                        h = g( a ),
                        l = [],
                        k = {},
                        m = 0;
                    return this.$watch( function() {
                        e = h( c );
                        var a, b;
                        if ( V( e ) )
                            if ( ob( e ) )
                                for ( d !== l && ( d = l, m = d.length = 0, f++ ), a = e.length, m !== a && ( f++, d.length = m = a ), b = 0; b < a; b++ ) d[ b ] !== e[ b ] && ( f++, d[ b ] = e[ b ] );
                            else {
                                d !== k && ( d = k = {}, m = 0, f++ );
                                a = 0;
                                for ( b in e ) e.hasOwnProperty( b ) && ( a++, d.hasOwnProperty( b ) ? d[ b ] !== e[ b ] && ( f++, d[ b ] = e[ b ] ) : ( m++, d[ b ] = e[ b ], f++ ) );
                                if ( m > a )
                                    for ( b in f++, d ) d.hasOwnProperty( b ) && !e.hasOwnProperty( b ) && ( m--, delete d[ b ] )
                            } else d !== e && ( d = e, f++ );
                        return f
                    }, function() {
                        b( e, d, c )
                    } )
                },
                $digest: function() {
                    var d, f, g, h, k = this.$$asyncQueue,
                        q = this.$$postDigestQueue,
                        r, z, B = b,
                        s, M = [],
                        W, u, v;
                    l( "$digest" );
                    c = null;
                    do {
                        z = !1;
                        for ( s = this; k.length; ) {
                            try {
                                v = k.shift(), v.scope.$eval( v.expression )
                            } catch ( R ) {
                                n.$$phase = null, e( R )
                            }
                            c = null
                        }
                        a: do {
                            if ( h = s.$$watchers )
                                for ( r = h.length; r--; ) try {
                                    if ( d = h[ r ] )
                                        if ( ( f = d.get( s ) ) !== ( g = d.last ) && !( d.eq ? ta( f, g ) : "number" == typeof f && "number" == typeof g && isNaN( f ) && isNaN( g ) ) ) z = !0, c = d, d.last = d.eq ? ea( f ) : f, d.fn( f, g === m ? f : g, s ), 5 > B && ( W = 4 - B, M[ W ] || ( M[ W ] = [] ), u = J( d.exp ) ? "fn: " + ( d.exp.name || d.exp.toString() ) : d.exp, u += "; newVal: " + oa( f ) + "; oldVal: " + oa( g ), M[ W ].push( u ) );
                                        else if ( d === c ) {
                                        z = !1;
                                        break a
                                    }
                                } catch ( x ) {
                                    n.$$phase = null, e( x )
                                }
                            if ( !( h = s.$$childHead || s !== this && s.$$nextSibling ) )
                                for ( ; s !== this && !( h = s.$$nextSibling ); ) s = s.$parent
                        } while ( s = h );
                        if ( z && !B-- ) throw n.$$phase = null, a( "infdig", b, oa( M ) );
                    } while ( z || k.length );
                    for ( n.$$phase = null; q.length; ) try {
                        q.shift()()
                    } catch ( D ) {
                        e( D )
                    }
                },
                $destroy: function() {
                    if ( !this.$$destroyed ) {
                        var a = this.$parent;
                        this.$broadcast( "$destroy" );
                        this.$$destroyed = !0;
                        this !== n && ( a.$$childHead == this && ( a.$$childHead = this.$$nextSibling ), a.$$childTail == this && ( a.$$childTail = this.$$prevSibling ), this.$$prevSibling && ( this.$$prevSibling.$$nextSibling = this.$$nextSibling ), this.$$nextSibling && ( this.$$nextSibling.$$prevSibling = this.$$prevSibling ), this.$parent = this.$$nextSibling = this.$$prevSibling = this.$$childHead = this.$$childTail = null )
                    }
                },
                $eval: function( a, b ) {
                    return g( a )( this, b )
                },
                $evalAsync: function( a ) {
                    n.$$phase || n.$$asyncQueue.length || f.defer( function() {
                        n.$$asyncQueue.length && n.$digest()
                    } );
                    this.$$asyncQueue.push( {
                        scope: this,
                        expression: a
                    } )
                },
                $$postDigest: function( a ) {
                    this.$$postDigestQueue.push( a )
                },
                $apply: function( a ) {
                    try {
                        return l( "$apply" ), this.$eval( a )
                    } catch ( b ) {
                        e( b )
                    } finally {
                        n.$$phase = null;
                        try {
                            n.$digest()
                        } catch ( c ) {
                            throw e( c ),
                                c;
                        }
                    }
                },
                $on: function( a, b ) {
                    var c = this.$$listeners[ a ];
                    c || ( this.$$listeners[ a ] = c = [] );
                    c.push( b );
                    return function() {
                        c[ $a( c, b ) ] = null
                    }
                },
                $emit: function( a, b ) {
                    var c = [],
                        d, f = this,
                        g = !1,
                        h = {
                            name: a,
                            targetScope: f,
                            stopPropagation: function() {
                                g = !0
                            },
                            preventDefault: function() {
                                h.defaultPrevented = !0
                            },
                            defaultPrevented: !1
                        },
                        l = [ h ].concat( ua.call( arguments, 1 ) ),
                        k, m;
                    do {
                        d = f.$$listeners[ a ] || c;
                        h.currentScope = f;
                        k = 0;
                        for ( m = d.length; k < m; k++ )
                            if ( d[ k ] ) try {
                                d[ k ].apply( null, l )
                            } catch ( n ) {
                                e( n )
                            } else d.splice( k, 1 ), k--, m--;
                        if ( g ) break;
                        f = f.$parent
                    } while ( f );
                    return h
                },
                $broadcast: function( a, b ) {
                    var c = this,
                        d = this,
                        f = {
                            name: a,
                            targetScope: this,
                            preventDefault: function() {
                                f.defaultPrevented = !0
                            },
                            defaultPrevented: !1
                        },
                        g = [ f ].concat( ua.call( arguments, 1 ) ),
                        h, k;
                    do {
                        c = d;
                        f.currentScope = c;
                        d = c.$$listeners[ a ] || [];
                        h = 0;
                        for ( k = d.length; h < k; h++ )
                            if ( d[ h ] ) try {
                                d[ h ].apply( null, g )
                            } catch ( l ) {
                                e( l )
                            } else d.splice( h, 1 ), h--, k--;
                        if ( !( d = c.$$childHead || c !== this && c.$$nextSibling ) )
                            for ( ; c !== this && !( d = c.$$nextSibling ); ) c = c.$parent
                    } while ( c = d );
                    return f
                }
            };
            var n = new h;
            return n
        } ]
    }

    function Ad() {
        var b = /^\s*(https?|ftp|mailto|tel|file):/,
            a = /^\s*(https?|ftp|file):|data:image\//;
        this.aHrefSanitizationWhitelist = function( a ) {
            return v( a ) ? ( b = a, this ) : b
        };
        this.imgSrcSanitizationWhitelist = function( b ) {
            return v( b ) ? ( a = b, this ) : a
        };
        this.$get = function() {
            return function( c, d ) {
                var e = d ? a : b,
                    g;
                if ( !L || 8 <= L )
                    if ( g = pa( c ).href, "" !== g && !g.match( e ) ) return "unsafe:" + g;
                return c
            }
        }
    }

    function Bd( b ) {
        if ( "self" === b ) return b;
        if ( E( b ) ) {
            if ( -1 < b.indexOf( "***" ) ) throw ra( "iwcard", b );
            b = b.replace( /([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1" ).replace( /\x08/g, "\\x08" ).replace( "\\*\\*", ".*" ).replace( "\\*", "[^:/.?&;]*" );
            return RegExp( "^" + b + "$" )
        }
        if ( Za( b ) ) return RegExp( "^" + b.source + "$" );
        throw ra( "imatcher" );
    }

    function xc( b ) {
        var a = [];
        v( b ) && q( b, function( b ) {
            a.push( Bd( b ) )
        } );
        return a
    }

    function Cd() {
        this.SCE_CONTEXTS = da;
        var b = [ "self" ],
            a = [];
        this.resourceUrlWhitelist = function( a ) {
            arguments.length && ( b = xc( a ) );
            return b
        };
        this.resourceUrlBlacklist = function( b ) {
            arguments.length && ( a = xc( b ) );
            return a
        };
        this.$get = [ "$injector", function( c ) {
            function d( a ) {
                var b = function( a ) {
                    this.$$unwrapTrustedValue = function() {
                        return a
                    }
                };
                a && ( b.prototype = new a );
                b.prototype.valueOf = function() {
                    return this.$$unwrapTrustedValue()
                };
                b.prototype.toString = function() {
                    return this.$$unwrapTrustedValue().toString()
                };
                return b
            }
            var e = function( a ) {
                throw ra( "unsafe" );
            };
            c.has( "$sanitize" ) && ( e = c.get( "$sanitize" ) );
            var g = d(),
                f = {};
            f[ da.HTML ] = d( g );
            f[ da.CSS ] = d( g );
            f[ da.URL ] = d( g );
            f[ da.JS ] = d( g );
            f[ da.RESOURCE_URL ] = d( f[ da.URL ] );
            return {
                trustAs: function( a, b ) {
                    var c = f.hasOwnProperty( a ) ? f[ a ] : null;
                    if ( !c ) throw ra( "icontext", a, b );
                    if ( null === b || b === r || "" === b ) return b;
                    if ( "string" !== typeof b ) throw ra( "itype", a );
                    return new c( b )
                },
                getTrusted: function( c, d ) {
                    if ( null === d || d === r || "" === d ) return d;
                    var g = f.hasOwnProperty( c ) ? f[ c ] : null;
                    if ( g && d instanceof g ) return d.$$unwrapTrustedValue();
                    if ( c === da.RESOURCE_URL ) {
                        var g = pa( d.toString() ),
                            m, n, p = !1;
                        m = 0;
                        for ( n = b.length; m < n; m++ )
                            if ( "self" === b[ m ] ? Eb( g ) : b[ m ].exec( g.href ) ) {
                                p = !0;
                                break
                            }
                        if ( p )
                            for ( m = 0, n = a.length; m < n; m++ )
                                if ( "self" === a[ m ] ? Eb( g ) : a[ m ].exec( g.href ) ) {
                                    p = !1;
                                    break
                                }
                        if ( p ) return d;
                        throw ra( "insecurl", d.toString() );
                    }
                    if ( c === da.HTML ) return e( d );
                    throw ra( "unsafe" );
                },
                valueOf: function( a ) {
                    return a instanceof
                    g ? a.$$unwrapTrustedValue() : a
                }
            }
        } ]
    }

    function Dd() {
        var b = !0;
        this.enabled = function( a ) {
            arguments.length && ( b = !!a );
            return b
        };
        this.$get = [ "$parse", "$sniffer", "$sceDelegate", function( a, c, d ) {
            if ( b && c.msie && 8 > c.msieDocumentMode ) throw ra( "iequirks" );
            var e = ea( da );
            e.isEnabled = function() {
                return b
            };
            e.trustAs = d.trustAs;
            e.getTrusted = d.getTrusted;
            e.valueOf = d.valueOf;
            b || ( e.trustAs = e.getTrusted = function( a, b ) {
                return b
            }, e.valueOf = za );
            e.parseAs = function( b, c ) {
                var d = a( c );
                return d.literal && d.constant ? d : function( a, c ) {
                    return e.getTrusted( b, d( a, c ) )
                }
            };
            var g = e.parseAs,
                f = e.getTrusted,
                h = e.trustAs;
            q( da, function( a, b ) {
                var c = C( b );
                e[ Pa( "parse_as_" + c ) ] = function( b ) {
                    return g( a, b )
                };
                e[ Pa( "get_trusted_" + c ) ] = function( b ) {
                    return f( a, b )
                };
                e[ Pa( "trust_as_" + c ) ] = function( b ) {
                    return h( a, b )
                }
            } );
            return e
        } ]
    }

    function Ed() {
        this.$get = [ "$window", "$document", function( b, a ) {
            var c = {},
                d = P( ( /android (\d+)/.exec( C( ( b.navigator || {} ).userAgent ) ) || [] )[ 1 ] ),
                e = /Boxee/i.test( ( b.navigator || {} ).userAgent ),
                g = a[ 0 ] || {},
                f = g.documentMode,
                h, l = /^(Moz|webkit|O|ms)(?=[A-Z])/,
                k = g.body && g.body.style,
                m = !1,
                n = !1;
            if ( k ) {
                for ( var p in k )
                    if ( m = l.exec( p ) ) {
                        h = m[ 0 ];
                        h = h.substr( 0, 1 ).toUpperCase() + h.substr( 1 );
                        break
                    }
                h || ( h = "WebkitOpacity" in k && "webkit" );
                m = !!( "transition" in k || h + "Transition" in k );
                n = !!( "animation" in k || h + "Animation" in k );
                !d || m && n || ( m = E( g.body.style.webkitTransition ), n = E( g.body.style.webkitAnimation ) )
            }
            return {
                history: !( !b.history || !b.history.pushState || 4 > d || e ),
                hashchange: "onhashchange" in b && ( !f || 7 < f ),
                hasEvent: function( a ) {
                    if ( "input" == a && 9 == L ) return !1;
                    if ( D( c[ a ] ) ) {
                        var b = g.createElement( "div" );
                        c[ a ] = "on" + a in b
                    }
                    return c[ a ]
                },
                csp: Sb(),
                vendorPrefix: h,
                transitions: m,
                animations: n,
                android: d,
                msie: L,
                msieDocumentMode: f
            }
        } ]
    }

    function Fd() {
        this.$get = [ "$rootScope", "$browser", "$q", "$exceptionHandler", function( b, a, c, d ) {
            function e( e, h, l ) {
                var k = c.defer(),
                    m = k.promise,
                    n = v( l ) && !l;
                h = a.defer( function() {
                    try {
                        k.resolve( e() )
                    } catch ( a ) {
                        k.reject( a ), d( a )
                    } finally {
                        delete g[ m.$$timeoutId ]
                    }
                    n || b.$apply()
                }, h );
                m.$$timeoutId = h;
                g[ h ] = k;
                return m
            }
            var g = {};
            e.cancel = function( b ) {
                return b && b.$$timeoutId in g ? ( g[ b.$$timeoutId ].reject( "canceled" ), delete g[ b.$$timeoutId ], a.defer.cancel( b.$$timeoutId ) ) : !1
            };
            return e
        } ]
    }

    function pa( b, a ) {
        var c = b;
        L && ( X.setAttribute( "href", c ), c = X.href );
        X.setAttribute( "href", c );
        return {
            href: X.href,
            protocol: X.protocol ? X.protocol.replace( /:$/, "" ) : "",
            host: X.host,
            search: X.search ? X.search.replace( /^\?/, "" ) : "",
            hash: X.hash ? X.hash.replace( /^#/, "" ) : "",
            hostname: X.hostname,
            port: X.port,
            pathname: "/" === X.pathname.charAt( 0 ) ? X.pathname : "/" + X.pathname
        }
    }

    function Eb( b ) {
        b = E( b ) ? pa( b ) : b;
        return b.protocol === yc.protocol && b.host === yc.host
    }

    function Gd() {
        this.$get = Z( Y )
    }

    function zc( b ) {
        function a( d, e ) {
            if ( V( d ) ) {
                var g = {};
                q( d, function( b, c ) {
                    g[ c ] = a( c, b )
                } );
                return g
            }
            return b.factory( d + c, e )
        }
        var c = "Filter";
        this.register = a;
        this.$get = [ "$injector", function( a ) {
            return function( b ) {
                return a.get( b + c )
            }
        } ];
        a( "currency", Ac );
        a( "date", Bc );
        a( "filter", Hd );
        a( "json", Id );
        a( "limitTo", Jd );
        a( "lowercase", Kd );
        a( "number", Cc );
        a( "orderBy", Dc );
        a( "uppercase", Ld )
    }

    function Hd() {
        return function( b, a, c ) {
            if ( !I( b ) ) return b;
            var d = typeof c,
                e = [];
            e.check = function( a ) {
                for ( var b = 0; b < e.length; b++ )
                    if ( !e[ b ]( a ) ) return !1;
                return !0
            };
            "function" !== d && ( c = "boolean" === d && c ? function( a, b ) {
                return Na.equals( a, b )
            } : function( a, b ) {
                b = ( "" + b ).toLowerCase();
                return -1 < ( "" + a ).toLowerCase().indexOf( b )
            } );
            var g = function( a, b ) {
                if ( "string" == typeof b && "!" === b.charAt( 0 ) ) return !g( a, b.substr( 1 ) );
                switch ( typeof a ) {
                    case "boolean":
                    case "number":
                    case "string":
                        return c( a, b );
                    case "object":
                        switch ( typeof b ) {
                            case "object":
                                return c( a, b );
                            default:
                                for ( var d in a )
                                    if ( "$" !== d.charAt( 0 ) && g( a[ d ], b ) ) return !0
                        }
                        return !1;
                    case "array":
                        for ( d = 0; d < a.length; d++ )
                            if ( g( a[ d ], b ) ) return !0;
                        return !1;
                    default:
                        return !1
                }
            };
            switch ( typeof a ) {
                case "boolean":
                case "number":
                case "string":
                    a = {
                        $: a
                    };
                case "object":
                    for ( var f in a ) "$" == f ? function() {
                        if ( a[ f ] ) {
                            var b = f;
                            e.push( function( c ) {
                                return g( c, a[ b ] )
                            } )
                        }
                    }() : function() {
                        if ( "undefined" != typeof a[ f ] ) {
                            var b = f;
                            e.push( function( c ) {
                                return g( tb( c, b ), a[ b ] )
                            } )
                        }
                    }();
                    break;
                case "function":
                    e.push( a );
                    break;
                default:
                    return b
            }
            for ( var d = [], h = 0; h < b.length; h++ ) {
                var l = b[ h ];
                e.check( l ) && d.push( l )
            }
            return d
        }
    }

    function Ac( b ) {
        var a = b.NUMBER_FORMATS;
        return function( b, d ) {
            D( d ) && ( d = a.CURRENCY_SYM );
            return Ec( b, a.PATTERNS[ 1 ], a.GROUP_SEP, a.DECIMAL_SEP, 2 ).replace( /\u00A4/g, d )
        }
    }

    function Cc( b ) {
        var a = b.NUMBER_FORMATS;
        return function( b, d ) {
            return Ec( b, a.PATTERNS[ 0 ], a.GROUP_SEP, a.DECIMAL_SEP, d )
        }
    }

    function Ec( b, a, c, d, e ) {
        if ( isNaN( b ) || !isFinite( b ) ) return "";
        var g = 0 > b;
        b = Math.abs( b );
        var f = b + "",
            h = "",
            l = [],
            k = !1;
        if ( -1 !== f.indexOf( "e" ) ) {
            var m = f.match( /([\d\.]+)e(-?)(\d+)/ );
            m && "-" == m[ 2 ] && m[ 3 ] > e + 1 ? f = "0" : ( h = f, k = !0 )
        }
        if ( k ) 0 < e && ( -1 < b && 1 > b ) && ( h = b.toFixed( e ) );
        else {
            f = ( f.split( Fc )[ 1 ] || "" ).length;
            D( e ) && ( e = Math.min( Math.max( a.minFrac, f ), a.maxFrac ) );
            f = Math.pow( 10, e );
            b = Math.round( b * f ) / f;
            b = ( "" + b ).split( Fc );
            f = b[ 0 ];
            b = b[ 1 ] || "";
            var m = 0,
                n = a.lgSize,
                p = a.gSize;
            if ( f.length >= n + p )
                for ( m = f.length - n, k = 0; k < m; k++ ) 0 === ( m - k ) % p && 0 !== k && ( h += c ), h += f.charAt( k );
            for ( k = m; k < f.length; k++ ) 0 === ( f.length - k ) % n && 0 !== k && ( h += c ), h += f.charAt( k );
            for ( ; b.length < e; ) b += "0";
            e && "0" !== e && ( h += d + b.substr( 0, e ) )
        }
        l.push( g ? a.negPre : a.posPre );
        l.push( h );
        l.push( g ? a.negSuf : a.posSuf );
        return l.join( "" )
    }

    function Kb( b, a, c ) {
        var d = "";
        0 > b && ( d = "-", b = -b );
        for ( b = "" + b; b.length < a; ) b = "0" + b;
        c && ( b = b.substr( b.length - a ) );
        return d + b
    }

    function U( b, a, c, d ) {
        c = c || 0;
        return function( e ) {
            e = e[ "get" + b ]();
            if ( 0 < c || e > -c ) e += c;
            0 === e && -12 == c && ( e = 12 );
            return Kb( e, a, d )
        }
    }

    function ib( b, a ) {
        return function( c, d ) {
            var e = c[ "get" + b ](),
                g = Ga( a ? "SHORT" + b : b );
            return d[ g ][ e ]
        }
    }

    function Bc( b ) {
        function a( a ) {
            var b;
            if ( b = a.match( c ) ) {
                a = new Date( 0 );
                var g = 0,
                    f = 0,
                    h = b[ 8 ] ? a.setUTCFullYear : a.setFullYear,
                    l = b[ 8 ] ? a.setUTCHours : a.setHours;
                b[ 9 ] && ( g = P( b[ 9 ] + b[ 10 ] ), f = P( b[ 9 ] + b[ 11 ] ) );
                h.call( a, P( b[ 1 ] ), P( b[ 2 ] ) - 1, P( b[ 3 ] ) );
                g = P( b[ 4 ] || 0 ) - g;
                f = P( b[ 5 ] || 0 ) - f;
                h = P( b[ 6 ] || 0 );
                b = Math.round( 1E3 * parseFloat( "0." + ( b[ 7 ] || 0 ) ) );
                l.call( a, g, f, h, b )
            }
            return a
        }
        var c = /^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;
        return function( c, e ) {
            var g = "",
                f = [],
                h, l;
            e = e || "mediumDate";
            e = b.DATETIME_FORMATS[ e ] || e;
            E( c ) && ( c = Md.test( c ) ? P( c ) : a( c ) );
            pb( c ) && ( c = new Date( c ) );
            if ( !Ja( c ) ) return c;
            for ( ; e; )( l = Nd.exec( e ) ) ? ( f = f.concat( ua.call( l, 1 ) ), e = f.pop() ) : ( f.push( e ), e = null );
            q( f, function( a ) {
                h = Od[ a ];
                g += h ? h( c, b.DATETIME_FORMATS ) : a.replace( /(^'|'$)/g, "" ).replace( /''/g, "'" )
            } );
            return g
        }
    }

    function Id() {
        return function( b ) {
            return oa( b, !0 )
        }
    }

    function Jd() {
        return function( b, a ) {
            if ( !I( b ) && !E( b ) ) return b;
            a = P( a );
            if ( E( b ) ) return a ? 0 <= a ? b.slice( 0, a ) : b.slice( a, b.length ) : "";
            var c = [],
                d, e;
            a > b.length ? a = b.length : a < -b.length && ( a = -b.length );
            0 < a ? ( d = 0, e = a ) : ( d = b.length + a, e = b.length );
            for ( ; d < e; d++ ) c.push( b[ d ] );
            return c
        }
    }

    function Dc( b ) {
        return function( a, c, d ) {
            function e( a, b ) {
                return Ma( b ) ? function( b, c ) {
                    return a( c, b )
                } : a
            }
            if ( !I( a ) || !c ) return a;
            c = I( c ) ? c : [ c ];
            c = Pc( c, function( a ) {
                var c = !1,
                    d = a || za;
                if ( E( a ) ) {
                    if ( "+" == a.charAt( 0 ) || "-" == a.charAt( 0 ) ) c = "-" == a.charAt( 0 ), a = a.substring( 1 );
                    d = b( a )
                }
                return e( function( a, b ) {
                    var c;
                    c = d( a );
                    var e = d( b ),
                        g = typeof c,
                        f = typeof e;
                    g == f ? ( "string" == g && ( c = c.toLowerCase(), e = e.toLowerCase() ), c = c === e ? 0 : c < e ? -1 : 1 ) : c = g < f ? -1 : 1;
                    return c
                }, c )
            } );
            for ( var g = [], f = 0; f < a.length; f++ ) g.push( a[ f ] );
            return g.sort( e( function( a, b ) {
                for ( var d = 0; d < c.length; d++ ) {
                    var e = c[ d ]( a, b );
                    if ( 0 !== e ) return e
                }
                return 0
            }, d ) )
        }
    }

    function sa( b ) {
        J( b ) && ( b = {
            link: b
        } );
        b.restrict = b.restrict || "AC";
        return Z( b )
    }

    function Gc( b, a ) {
        function c( a, c ) {
            c = c ? "-" + ab( c, "-" ) : "";
            b.removeClass( ( a ? jb : kb ) + c ).addClass( ( a ? kb : jb ) + c )
        }
        var d = this,
            e = b.parent().controller( "form" ) || lb,
            g = 0,
            f = d.$error = {},
            h = [];
        d.$name = a.name || a.ngForm;
        d.$dirty = !1;
        d.$pristine = !0;
        d.$valid = !0;
        d.$invalid = !1;
        e.$addControl( d );
        b.addClass( Ha );
        c( !0 );
        d.$addControl = function( a ) {
            wa( a.$name, "input" );
            h.push( a );
            a.$name && ( d[ a.$name ] = a )
        };
        d.$removeControl = function( a ) {
            a.$name && d[ a.$name ] === a && delete d[ a.$name ];
            q( f, function( b, c ) {
                d.$setValidity( c, !0, a )
            } );
            Ka( h, a )
        };
        d.$setValidity = function( a, b, h ) {
            var n = f[ a ];
            if ( b ) n && ( Ka( n, h ), n.length || ( g--, g || ( c( b ), d.$valid = !0, d.$invalid = !1 ), f[ a ] = !1, c( !0, a ), e.$setValidity( a, !0, d ) ) );
            else {
                g || c( b );
                if ( n ) {
                    if ( -1 != $a( n, h ) ) return
                } else f[ a ] = n = [], g++, c( !1, a ), e.$setValidity( a, !1, d );
                n.push( h );
                d.$valid = !1;
                d.$invalid = !0
            }
        };
        d.$setDirty = function() {
            b.removeClass( Ha ).addClass( mb );
            d.$dirty = !0;
            d.$pristine = !1;
            e.$setDirty()
        };
        d.$setPristine = function() {
            b.removeClass( mb ).addClass( Ha );
            d.$dirty = !1;
            d.$pristine = !0;
            q( h, function( a ) {
                a.$setPristine()
            } )
        }
    }

    function nb( b, a, c, d, e, g ) {
        if ( !e.android ) {
            var f = !1;
            a.on( "compositionstart", function( a ) {
                f = !0
            } );
            a.on( "compositionend", function() {
                f = !1
            } )
        }
        var h = function() {
            if ( !f ) {
                var e = a.val();
                Ma( c.ngTrim || "T" ) && ( e = aa( e ) );
                d.$viewValue !== e && b.$apply( function() {
                    d.$setViewValue( e )
                } )
            }
        };
        if ( e.hasEvent( "input" ) ) a.on( "input", h );
        else {
            var l, k = function() {
                l || ( l = g.defer( function() {
                    h();
                    l = null
                } ) )
            };
            a.on( "keydown", function( a ) {
                a = a.keyCode;
                91 === a || ( 15 < a && 19 > a || 37 <= a && 40 >= a ) || k()
            } );
            if ( e.hasEvent( "paste" ) ) a.on( "paste cut", k )
        }
        a.on( "change", h );
        d.$render = function() {
            a.val( d.$isEmpty( d.$viewValue ) ? "" : d.$viewValue )
        };
        var m = c.ngPattern,
            n = function( a, b ) {
                if ( d.$isEmpty( b ) || a.test( b ) ) return d.$setValidity( "pattern", !0 ), b;
                d.$setValidity( "pattern", !1 );
                return r
            };
        m && ( ( e = m.match( /^\/(.*)\/([gim]*)$/ ) ) ? ( m = RegExp( e[ 1 ], e[ 2 ] ), e = function( a ) {
            return n( m, a )
        } ) : e = function( c ) {
            var d = b.$eval( m );
            if ( !d || !d.test ) throw s( "ngPattern" )( "noregexp", m, d, fa( a ) );
            return n( d, c )
        }, d.$formatters.push( e ), d.$parsers.push( e ) );
        if ( c.ngMinlength ) {
            var p = P( c.ngMinlength );
            e = function( a ) {
                if ( !d.$isEmpty( a ) && a.length < p ) return d.$setValidity( "minlength", !1 ), r;
                d.$setValidity( "minlength", !0 );
                return a
            };
            d.$parsers.push( e );
            d.$formatters.push( e )
        }
        if ( c.ngMaxlength ) {
            var t = P( c.ngMaxlength );
            e = function( a ) {
                if ( !d.$isEmpty( a ) && a.length > t ) return d.$setValidity( "maxlength", !1 ), r;
                d.$setValidity( "maxlength", !0 );
                return a
            };
            d.$parsers.push( e );
            d.$formatters.push( e )
        }
    }

    function Lb( b, a ) {
        b = "ngClass" + b;
        return function() {
            return {
                restrict: "AC",
                link: function( c, d, e ) {
                    function g( b ) {
                        if ( !0 === a || c.$index % 2 === a ) {
                            var d = f( b || "" );
                            h ? ta( b, h ) || e.$updateClass( d, f( h ) ) : e.$addClass( d )
                        }
                        h = ea( b )
                    }

                    function f( a ) {
                        if ( I( a ) ) return a.join( " " );
                        if ( V( a ) ) {
                            var b = [];
                            q( a, function( a, c ) {
                                a && b.push( c )
                            } );
                            return b.join( " " )
                        }
                        return a
                    }
                    var h;
                    c.$watch( e[ b ], g, !0 );
                    e.$observe( "class", function( a ) {
                        g( c.$eval( e[ b ] ) )
                    } );
                    "ngClass" !== b && c.$watch( "$index", function( d, g ) {
                        var h = d & 1;
                        if ( h !== g & 1 ) {
                            var n = f( c.$eval( e[ b ] ) );
                            h === a ? e.$addClass( n ) : e.$removeClass( n )
                        }
                    } )
                }
            }
        }
    }
    var C = function( b ) {
            return E( b ) ? b.toLowerCase() : b
        },
        Ga = function( b ) {
            return E( b ) ? b.toUpperCase() : b
        },
        L, u, Aa, ua = [].slice,
        Pd = [].push,
        Ya = Object.prototype.toString,
        La = s( "ng" ),
        Na = Y.angular || ( Y.angular = {} ),
        Ta, Ea, ia = [ "0", "0",
"0" ];
    L = P( ( /msie (\d+)/.exec( C( navigator.userAgent ) ) || [] )[ 1 ] );
    isNaN( L ) && ( L = P( ( /trident\/.*; rv:(\d+)/.exec( C( navigator.userAgent ) ) || [] )[ 1 ] ) );
    y.$inject = [];
    za.$inject = [];
    var aa = function() {
        return String.prototype.trim ? function( b ) {
            return E( b ) ? b.trim() : b
        } : function( b ) {
            return E( b ) ? b.replace( /^\s\s*/, "" ).replace( /\s\s*$/, "" ) : b
        }
    }();
    Ea = 9 > L ? function( b ) {
        b = b.nodeName ? b : b[ 0 ];
        return b.scopeName && "HTML" != b.scopeName ? Ga( b.scopeName + ":" + b.nodeName ) : b.nodeName
    } : function( b ) {
        return b.nodeName ? b.nodeName : b[ 0 ].nodeName
    };
    var Sc = /[A-Z]/g,
        Qd = {
            full: "1.2.6",
            major: 1,
            minor: 2,
            dot: 6,
            codeName: "taco-salsafication"
        },
        Qa = N.cache = {},
        bb = N.expando = "ng-" + ( new Date ).getTime(),
        Wc = 1,
        Hc = Y.document.addEventListener ? function( b, a, c ) {
            b.addEventListener( a, c, !1 )
        } : function( b, a, c ) {
            b.attachEvent( "on" + a, c )
        },
        zb = Y.document.removeEventListener ? function( b, a, c ) {
            b.removeEventListener( a, c, !1 )
        } : function( b, a, c ) {
            b.detachEvent( "on" + a, c )
        },
        Uc = /([\:\-\_]+(.))/g,
        Vc = /^moz([A-Z])/,
        wb = s( "jqLite" ),
        Da = N.prototype = {
            ready: function( b ) {
                function a() {
                    c || ( c = !0, b() )
                }
                var c = !1;
                "complete" === O.readyState ? setTimeout( a ) : ( this.on( "DOMContentLoaded", a ), N( Y ).on( "load", a ) )
            },
            toString: function() {
                var b = [];
                q( this, function( a ) {
                    b.push( "" + a )
                } );
                return "[" + b.join( ", " ) + "]"
            },
            eq: function( b ) {
                return 0 <= b ? u( this[ b ] ) : u( this[ this.length + b ] )
            },
            length: 0,
            push: Pd,
            sort: [].sort,
            splice: [].splice
        },
        db = {};
    q( "multiple selected checked disabled readOnly required open".split( " " ), function( b ) {
        db[ C( b ) ] = b
    } );
    var ec = {};
    q( "input select option textarea button form details".split( " " ), function( b ) {
        ec[ Ga( b ) ] = !0
    } );
    q( {
        data: ac,
        inheritedData: cb,
        scope: function( b ) {
            return u( b ).data( "$scope" ) || cb( b.parentNode || b, [ "$isolateScope", "$scope" ] )
        },
        isolateScope: function( b ) {
            return u( b ).data( "$isolateScope" ) || u( b ).data( "$isolateScopeNoTemplate" )
        },
        controller: bc,
        injector: function( b ) {
            return cb( b, "$injector" )
        },
        removeAttr: function( b, a ) {
            b.removeAttribute( a )
        },
        hasClass: Ab,
        css: function( b, a, c ) {
            a = Pa( a );
            if ( v( c ) ) b.style[ a ] = c;
            else {
                var d;
                8 >= L && ( d = b.currentStyle && b.currentStyle[ a ], "" === d && ( d = "auto" ) );
                d = d || b.style[ a ];
                8 >= L && ( d = "" === d ? r : d );
                return d
            }
        },
        attr: function( b, a, c ) {
            var d = C( a );
            if ( db[ d ] )
                if ( v( c ) ) c ? ( b[ a ] = !0, b.setAttribute( a, d ) ) : ( b[ a ] = !1, b.removeAttribute( d ) );
                else return b[ a ] || ( b.attributes.getNamedItem( a ) || y ).specified ? d : r;
            else if ( v( c ) ) b.setAttribute( a, c );
            else if ( b.getAttribute ) return b = b.getAttribute( a, 2 ), null === b ? r : b
        },
        prop: function( b, a, c ) {
            if ( v( c ) ) b[ a ] = c;
            else return b[ a ]
        },
        text: function() {
            function b( b, d ) {
                var e = a[ b.nodeType ];
                if ( D( d ) ) return e ? b[ e ] : "";
                b[ e ] = d
            }
            var a = [];
            9 > L ? ( a[ 1 ] = "innerText", a[ 3 ] = "nodeValue" ) : a[ 1 ] = a[ 3 ] = "textContent";
            b.$dv = "";
            return b
        }(),
        val: function( b, a ) {
            if ( D( a ) ) {
                if ( "SELECT" === Ea( b ) && b.multiple ) {
                    var c = [];
                    q( b.options, function( a ) {
                        a.selected && c.push( a.value || a.text )
                    } );
                    return 0 === c.length ? null : c
                }
                return b.value
            }
            b.value = a
        },
        html: function( b, a ) {
            if ( D( a ) ) return b.innerHTML;
            for ( var c = 0, d = b.childNodes; c < d.length; c++ ) Ba( d[ c ] );
            b.innerHTML = a
        },
        empty: cc
    }, function( b, a ) {
        N.prototype[ a ] = function( a, d ) {
            var e, g;
            if ( b !== cc && ( 2 == b.length && b !== Ab && b !== bc ? a : d ) === r ) {
                if ( V( a ) ) {
                    for ( e = 0; e < this.length; e++ )
                        if ( b === ac ) b( this[ e ], a );
                        else
                            for ( g in a ) b( this[ e ], g, a[ g ] );
                    return this
                }
                e = b.$dv;
                g = e === r ? Math.min( this.length, 1 ) : this.length;
                for ( var f = 0; f < g; f++ ) {
                    var h = b( this[ f ], a, d );
                    e = e ? e + h : h
                }
                return e
            }
            for ( e = 0; e < this.length; e++ ) b( this[ e ], a, d );
            return this
        }
    } );
    q( {
        removeData: Zb,
        dealoc: Ba,
        on: function a( c, d, e, g ) {
            if ( v( g ) ) throw wb( "onargs" );
            var f = ja( c, "events" ),
                h = ja( c, "handle" );
            f || ja( c, "events", f = {} );
            h || ja( c, "handle", h = Xc( c, f ) );
            q( d.split( " " ), function( d ) {
                var g = f[ d ];
                if ( !g ) {
                    if ( "mouseenter" == d || "mouseleave" == d ) {
                        var m = O.body.contains || O.body.compareDocumentPosition ? function( a, c ) {
                            var d = 9 === a.nodeType ? a.documentElement : a,
                                e = c && c.parentNode;
                            return a === e || !!( e && 1 === e.nodeType && ( d.contains ? d.contains( e ) : a.compareDocumentPosition && a.compareDocumentPosition( e ) & 16 ) )
                        } : function( a, c ) {
                            if ( c )
                                for ( ; c = c.parentNode; )
                                    if ( c === a ) return !0;
                            return !1
                        };
                        f[ d ] = [];
                        a( c, {
                            mouseleave: "mouseout",
                            mouseenter: "mouseover"
                        }[ d ], function( a ) {
                            var c = a.relatedTarget;
                            c && ( c === this || m( this, c ) ) || h( a, d )
                        } )
                    } else Hc( c, d, h ), f[ d ] = [];
                    g = f[ d ]
                }
                g.push( e )
            } )
        },
        off: $b,
        one: function( a, c, d ) {
            a = u( a );
            a.on( c, function g() {
                a.off( c, d );
                a.off( c, g )
            } );
            a.on( c, d )
        },
        replaceWith: function( a, c ) {
            var d,
                e = a.parentNode;
            Ba( a );
            q( new N( c ), function( c ) {
                d ? e.insertBefore( c, d.nextSibling ) : e.replaceChild( c, a );
                d = c
            } )
        },
        children: function( a ) {
            var c = [];
            q( a.childNodes, function( a ) {
                1 === a.nodeType && c.push( a )
            } );
            return c
        },
        contents: function( a ) {
            return a.childNodes || []
        },
        append: function( a, c ) {
            q( new N( c ), function( c ) {
                1 !== a.nodeType && 11 !== a.nodeType || a.appendChild( c )
            } )
        },
        prepend: function( a, c ) {
            if ( 1 === a.nodeType ) {
                var d = a.firstChild;
                q( new N( c ), function( c ) {
                    a.insertBefore( c, d )
                } )
            }
        },
        wrap: function( a, c ) {
            c = u( c )[ 0 ];
            var d = a.parentNode;
            d && d.replaceChild( c, a );
            c.appendChild( a )
        },
        remove: function( a ) {
            Ba( a );
            var c = a.parentNode;
            c && c.removeChild( a )
        },
        after: function( a, c ) {
            var d = a,
                e = a.parentNode;
            q( new N( c ), function( a ) {
                e.insertBefore( a, d.nextSibling );
                d = a
            } )
        },
        addClass: Cb,
        removeClass: Bb,
        toggleClass: function( a, c, d ) {
            D( d ) && ( d = !Ab( a, c ) );
            ( d ? Cb : Bb )( a, c )
        },
        parent: function( a ) {
            return ( a = a.parentNode ) && 11 !== a.nodeType ? a : null
        },
        next: function( a ) {
            if ( a.nextElementSibling ) return a.nextElementSibling;
            for ( a = a.nextSibling; null != a && 1 !== a.nodeType; ) a = a.nextSibling;
            return a
        },
        find: function( a, c ) {
            return a.getElementsByTagName ? a.getElementsByTagName( c ) : []
        },
        clone: yb,
        triggerHandler: function( a, c, d ) {
            c = ( ja( a, "events" ) || {} )[ c ];
            d = d || [];
            var e = [ {
                preventDefault: y,
                stopPropagation: y
            } ];
            q( c, function( c ) {
                c.apply( a, e.concat( d ) )
            } )
        }
    }, function( a, c ) {
        N.prototype[ c ] = function( c, e, g ) {
            for ( var f, h = 0; h < this.length; h++ ) D( f ) ? ( f = a( this[ h ], c, e, g ), v( f ) && ( f = u( f ) ) ) : xb( f, a( this[ h ], c, e, g ) );
            return v( f ) ? f : this
        };
        N.prototype.bind = N.prototype.on;
        N.prototype.unbind = N.prototype.off
    } );
    Ra.prototype = {
        put: function( a, c ) {
            this[ Ca( a ) ] = c
        },
        get: function( a ) {
            return this[ Ca( a ) ]
        },
        remove: function( a ) {
            var c = this[ a = Ca( a ) ];
            delete this[ a ];
            return c
        }
    };
    var Zc = /^function\s*[^\(]*\(\s*([^\)]*)\)/m,
        $c = /,/,
        ad = /^\s*(_?)(\S+?)\1\s*$/,
        Yc = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg,
        Sa = s( "$injector" ),
        Rd = s( "$animate" ),
        Sd = [ "$provide", function( a ) {
            this.$$selectors = {};
            this.register = function( c, d ) {
                var e = c + "-animation";
                if ( c && "." != c.charAt( 0 ) ) throw Rd( "notcsel", c );
                this.$$selectors[ c.substr( 1 ) ] = e;
                a.factory( e, d )
            };
            this.classNameFilter = function( a ) {
                1 === arguments.length && ( this.$$classNameFilter = a instanceof RegExp ? a : null );
                return this.$$classNameFilter
            };
            this.$get = [ "$timeout", function( a ) {
                return {
                    enter: function( d, e, g, f ) {
                        g ? g.after( d ) : ( e && e[ 0 ] || ( e = g.parent() ), e.append( d ) );
                        f && a( f, 0, !1 )
                    },
                    leave: function( d, e ) {
                        d.remove();
                        e && a( e, 0, !1 )
                    },
                    move: function( a, c, g, f ) {
                        this.enter( a, c, g, f )
                    },
                    addClass: function( d, e, g ) {
                        e = E( e ) ? e : I( e ) ? e.join( " " ) : "";
                        q( d, function( a ) {
                            Cb( a, e )
                        } );
                        g && a( g, 0, !1 )
                    },
                    removeClass: function( d, e, g ) {
                        e = E( e ) ? e : I( e ) ? e.join( " " ) : "";
                        q( d, function( a ) {
                            Bb( a, e )
                        } );
                        g && a( g, 0, !1 )
                    },
                    enabled: y
                }
            } ]
        } ],
        ha = s( "$compile" );
    hc.$inject = [ "$provide", "$$sanitizeUriProvider" ];
    var gd = /^(x[\:\-_]|data[\:\-_])/i,
        nd = Y.XMLHttpRequest || function() {
            try {
                return new ActiveXObject( "Msxml2.XMLHTTP.6.0" )
            } catch ( a ) {}
            try {
                return new ActiveXObject( "Msxml2.XMLHTTP.3.0" )
            } catch ( c ) {}
            try {
                return new ActiveXObject( "Msxml2.XMLHTTP" )
            } catch ( d ) {}
            throw s( "$httpBackend" )( "noxhr" );
        },
        nc = s( "$interpolate" ),
        Td = /^([^\?#]*)(\?([^#]*))?(#(.*))?$/,
        rd = {
            http: 80,
            https: 443,
            ftp: 21
        },
        Gb = s( "$location" );
    sc.prototype = Hb.prototype = rc.prototype = {
        $$html5: !1,
        $$replace: !1,
        absUrl: gb( "$$absUrl" ),
        url: function( a, c ) {
            if ( D( a ) ) return this.$$url;
            var d = Td.exec( a );
            d[ 1 ] && this.path( decodeURIComponent( d[ 1 ] ) );
            ( d[ 2 ] || d[ 1 ] ) && this.search( d[ 3 ] || "" );
            this.hash( d[ 5 ] || "", c );
            return this
        },
        protocol: gb( "$$protocol" ),
        host: gb( "$$host" ),
        port: gb( "$$port" ),
        path: tc( "$$path", function( a ) {
            return "/" == a.charAt( 0 ) ? a : "/" + a
        } ),
        search: function( a, c ) {
            switch ( arguments.length ) {
                case 0:
                    return this.$$search;
                case 1:
                    if ( E( a ) ) this.$$search = Vb( a );
                    else if ( V( a ) ) this.$$search = a;
                    else throw Gb( "isrcharg" );
                    break;
                default:
                    D( c ) || null === c ? delete this.$$search[ a ] : this.$$search[ a ] = c
            }
            this.$$compose();
            return this
        },
        hash: tc( "$$hash", za ),
        replace: function() {
            this.$$replace = !0;
            return this
        }
    };
    var xa = s( "$parse" ),
        wc = {},
        qa, Ia = {
            "null": function() {
                return null
            },
            "true": function() {
                return !0
            },
            "false": function() {
                return !1
            },
            undefined: y,
            "+": function( a, c, d, e ) {
                d = d( a, c );
                e = e( a, c );
                return v( d ) ? v( e ) ? d + e : d : v( e ) ? e : r
            },
            "-": function( a, c, d, e ) {
                d = d( a, c );
                e = e( a, c );
                return ( v( d ) ? d : 0 ) - ( v( e ) ? e : 0 )
            },
            "*": function( a, c, d, e ) {
                return d( a, c ) * e( a, c )
            },
            "/": function( a, c, d, e ) {
                return d( a, c ) / e( a, c )
            },
            "%": function( a, c, d, e ) {
                return d( a, c ) % e( a, c )
            },
            "^": function( a, c, d, e ) {
                return d( a, c ) ^ e( a, c )
            },
            "=": y,
            "===": function( a, c, d, e ) {
                return d( a, c ) === e( a, c )
            },
            "!==": function( a, c, d, e ) {
                return d( a, c ) !== e( a, c )
            },
            "==": function( a, c, d, e ) {
                return d( a, c ) == e( a, c )
            },
            "!=": function( a, c, d, e ) {
                return d( a, c ) != e( a, c )
            },
            "<": function( a, c, d, e ) {
                return d( a, c ) < e( a, c )
            },
            ">": function( a, c, d, e ) {
                return d( a, c ) > e( a, c )
            },
            "<=": function( a, c, d, e ) {
                return d( a, c ) <= e( a, c )
            },
            ">=": function( a, c, d, e ) {
                return d( a, c ) >= e( a, c )
            },
            "&&": function( a, c, d, e ) {
                return d( a, c ) && e( a, c )
            },
            "||": function( a, c, d, e ) {
                return d( a, c ) || e( a, c )
            },
            "&": function( a, c, d, e ) {
                return d( a, c ) & e( a, c )
            },
            "|": function( a, c, d, e ) {
                return e( a, c )( a, c, d( a, c ) )
            },
            "!": function( a, c, d ) {
                return !d( a, c )
            }
        },
        Ud = {
            n: "\n",
            f: "\f",
            r: "\r",
            t: "\t",
            v: "\v",
            "'": "'",
            '"': '"'
        },
        Jb = function( a ) {
            this.options = a
        };
    Jb.prototype = {
        constructor: Jb,
        lex: function( a ) {
            this.text = a;
            this.index = 0;
            this.ch = r;
            this.lastCh = ":";
            this.tokens = [];
            var c;
            for ( a = []; this.index < this.text.length; ) {
                this.ch = this.text.charAt( this.index );
                if ( this.is( "\"'" ) ) this.readString( this.ch );
                else if ( this.isNumber( this.ch ) || this.is( "." ) && this.isNumber( this.peek() ) ) this.readNumber();
                else if ( this.isIdent( this.ch ) ) this.readIdent(), this.was( "{," ) && ( "{" === a[ 0 ] && ( c = this.tokens[ this.tokens.length - 1 ] ) ) && ( c.json = -1 === c.text.indexOf( "." ) );
                else if ( this.is( "(){}[].,;:?" ) ) this.tokens.push( {
                    index: this.index,
                    text: this.ch,
                    json: this.was( ":[," ) && this.is( "{[" ) || this.is( "}]:," )
                } ), this.is( "{[" ) && a.unshift( this.ch ), this.is( "}]" ) && a.shift(), this.index++;
                else if ( this.isWhitespace( this.ch ) ) {
                    this.index++;
                    continue
                } else {
                    var d = this.ch + this.peek(),
                        e = d + this.peek( 2 ),
                        g = Ia[ this.ch ],
                        f = Ia[ d ],
                        h = Ia[ e ];
                    h ? ( this.tokens.push( {
                        index: this.index,
                        text: e,
                        fn: h
                    } ), this.index += 3 ) : f ? ( this.tokens.push( {
                        index: this.index,
                        text: d,
                        fn: f
                    } ), this.index += 2 ) : g ? ( this.tokens.push( {
                        index: this.index,
                        text: this.ch,
                        fn: g,
                        json: this.was( "[,:" ) && this.is( "+-" )
                    } ), this.index += 1 ) : this.throwError( "Unexpected next character ", this.index, this.index + 1 )
                }
                this.lastCh = this.ch
            }
            return this.tokens
        },
        is: function( a ) {
            return -1 !== a.indexOf( this.ch )
        },
        was: function( a ) {
            return -1 !== a.indexOf( this.lastCh )
        },
        peek: function( a ) {
            a = a || 1;
            return this.index + a < this.text.length ? this.text.charAt( this.index + a ) : !1
        },
        isNumber: function( a ) {
            return "0" <= a && "9" >= a
        },
        isWhitespace: function( a ) {
            return " " === a || "\r" === a || "\t" === a || "\n" === a || "\v" === a || "\u00a0" === a
        },
        isIdent: function( a ) {
            return "a" <= a && "z" >= a || "A" <= a && "Z" >= a || "_" === a || "$" === a
        },
        isExpOperator: function( a ) {
            return "-" === a || "+" === a || this.isNumber( a )
        },
        throwError: function( a, c, d ) {
            d = d || this.index;
            c = v( c ) ? "s " + c + "-" + this.index + " [" + this.text.substring( c, d ) + "]" : " " + d;
            throw xa( "lexerr", a, c, this.text );
        },
        readNumber: function() {
            for ( var a = "", c = this.index; this.index < this.text.length; ) {
                var d = C( this.text.charAt( this.index ) );
                if ( "." == d || this.isNumber( d ) ) a += d;
                else {
                    var e = this.peek();
                    if ( "e" == d && this.isExpOperator( e ) ) a += d;
                    else if ( this.isExpOperator( d ) && e && this.isNumber( e ) && "e" == a.charAt( a.length - 1 ) ) a += d;
                    else if ( !this.isExpOperator( d ) || e && this.isNumber( e ) || "e" != a.charAt( a.length - 1 ) ) break;
                    else this.throwError( "Invalid exponent" )
                }
                this.index++
            }
            a *= 1;
            this.tokens.push( {
                index: c,
                text: a,
                json: !0,
                fn: function() {
                    return a
                }
            } )
        },
        readIdent: function() {
            for ( var a = this, c = "", d = this.index, e, g, f, h; this.index < this.text.length; ) {
                h = this.text.charAt( this.index );
                if ( "." === h || this.isIdent( h ) || this.isNumber( h ) ) "." === h && ( e = this.index ), c += h;
                else break;
                this.index++
            }
            if ( e )
                for ( g = this.index; g < this.text.length; ) {
                    h = this.text.charAt( g );
                    if ( "(" === h ) {
                        f = c.substr( e - d + 1 );
                        c = c.substr( 0, e - d );
                        this.index = g;
                        break
                    }
                    if ( this.isWhitespace( h ) ) g++;
                    else break
                }
            d = {
                index: d,
                text: c
            };
            if ( Ia.hasOwnProperty( c ) ) d.fn = Ia[ c ], d.json = Ia[ c ];
            else {
                var l = vc( c, this.options, this.text );
                d.fn = x( function( a, c ) {
                    return l( a, c )
                }, {
                    assign: function( d, e ) {
                        return hb( d, c, e, a.text, a.options )
                    }
                } )
            }
            this.tokens.push( d );
            f && ( this.tokens.push( {
                index: e,
                text: ".",
                json: !1
            } ), this.tokens.push( {
                index: e + 1,
                text: f,
                json: !1
            } ) )
        },
        readString: function( a ) {
            var c = this.index;
            this.index++;
            for ( var d = "", e = a, g = !1; this.index < this.text.length; ) {
                var f = this.text.charAt( this.index ),
                    e = e + f;
                if ( g ) "u" === f ? ( f = this.text.substring( this.index + 1, this.index + 5 ), f.match( /[\da-f]{4}/i ) || this.throwError( "Invalid unicode escape [\\u" + f + "]" ), this.index += 4, d += String.fromCharCode( parseInt( f, 16 ) ) ) : d = ( g = Ud[ f ] ) ? d + g : d + f, g = !1;
                else if ( "\\" === f ) g = !0;
                else {
                    if ( f === a ) {
                        this.index++;
                        this.tokens.push( {
                            index: c,
                            text: e,
                            string: d,
                            json: !0,
                            fn: function() {
                                return d
                            }
                        } );
                        return
                    }
                    d += f
                }
                this.index++
            }
            this.throwError( "Unterminated quote", c )
        }
    };
    var Wa = function( a, c, d ) {
        this.lexer = a;
        this.$filter = c;
        this.options = d
    };
    Wa.ZERO = function() {
        return 0
    };
    Wa.prototype = {
        constructor: Wa,
        parse: function( a, c ) {
            this.text = a;
            this.json = c;
            this.tokens = this.lexer.lex( a );
            c && ( this.assignment = this.logicalOR, this.functionCall = this.fieldAccess = this.objectIndex = this.filterChain = function() {
                this.throwError( "is not valid json", {
                    text: a,
                    index: 0
                } )
            } );
            var d = c ? this.primary() : this.statements();
            0 !== this.tokens.length && this.throwError( "is an unexpected token", this.tokens[ 0 ] );
            d.literal = !!d.literal;
            d.constant = !!d.constant;
            return d
        },
        primary: function() {
            var a;
            if ( this.expect( "(" ) ) a = this.filterChain(), this.consume( ")" );
            else if ( this.expect( "[" ) ) a = this.arrayDeclaration();
            else if ( this.expect( "{" ) ) a = this.object();
            else {
                var c = this.expect();
                ( a = c.fn ) || this.throwError( "not a primary expression", c );
                c.json && ( a.constant = !0, a.literal = !0 )
            }
            for ( var d; c = this.expect( "(", "[", "." ); ) "(" === c.text ? ( a = this.functionCall( a, d ), d = null ) : "[" === c.text ? ( d = a, a = this.objectIndex( a ) ) : "." === c.text ? ( d = a, a = this.fieldAccess( a ) ) : this.throwError( "IMPOSSIBLE" );
            return a
        },
        throwError: function( a, c ) {
            throw xa( "syntax", c.text, a, c.index + 1, this.text, this.text.substring( c.index ) );
        },
        peekToken: function() {
            if ( 0 === this.tokens.length ) throw xa( "ueoe", this.text );
            return this.tokens[ 0 ]
        },
        peek: function( a, c, d, e ) {
            if ( 0 < this.tokens.length ) {
                var g = this.tokens[ 0 ],
                    f = g.text;
                if ( f === a || f === c || f === d || f === e || !( a || c || d || e ) ) return g
            }
            return !1
        },
        expect: function( a, c, d, e ) {
            return ( a = this.peek( a, c, d, e ) ) ? ( this.json && !a.json && this.throwError( "is not valid json", a ), this.tokens.shift(), a ) : !1
        },
        consume: function( a ) {
            this.expect( a ) || this.throwError( "is unexpected, expecting [" + a + "]", this.peek() )
        },
        unaryFn: function( a, c ) {
            return x( function( d, e ) {
                return a( d, e, c )
            }, {
                constant: c.constant
            } )
        },
        ternaryFn: function( a, c, d ) {
            return x( function( e, g ) {
                return a( e, g ) ? c( e, g ) : d( e, g )
            }, {
                constant: a.constant && c.constant && d.constant
            } )
        },
        binaryFn: function( a, c, d ) {
            return x( function( e, g ) {
                return c( e, g, a, d )
            }, {
                constant: a.constant && d.constant
            } )
        },
        statements: function() {
            for ( var a = [];; )
                if ( 0 < this.tokens.length && !this.peek( "}", ")", ";", "]" ) && a.push( this.filterChain() ), !this.expect( ";" ) ) return 1 === a.length ? a[ 0 ] : function( c, d ) {
                    for ( var e, g = 0; g < a.length; g++ ) {
                        var f = a[ g ];
                        f && ( e = f( c, d ) )
                    }
                    return e
                }
        },
        filterChain: function() {
            for ( var a = this.expression(), c;; )
                if ( c = this.expect( "|" ) ) a = this.binaryFn( a, c.fn, this.filter() );
                else return a
        },
        filter: function() {
            for ( var a = this.expect(), c = this.$filter( a.text ), d = [];; )
                if ( a = this.expect( ":" ) ) d.push( this.expression() );
                else {
                    var e = function( a, e, h ) {
                        h = [ h ];
                        for ( var l = 0; l < d.length; l++ ) h.push( d[ l ]( a, e ) );
                        return c.apply( a, h )
                    };
                    return function() {
                        return e
                    }
                }
        },
        expression: function() {
            return this.assignment()
        },
        assignment: function() {
            var a = this.ternary(),
                c, d;
            return ( d = this.expect( "=" ) ) ? ( a.assign || this.throwError( "implies assignment but [" + this.text.substring( 0, d.index ) + "] can not be assigned to", d ), c = this.ternary(), function( d, g ) {
                return a.assign( d, c( d, g ), g )
            } ) : a
        },
        ternary: function() {
            var a = this.logicalOR(),
                c, d;
            if ( this.expect( "?" ) ) {
                c = this.ternary();
                if ( d = this.expect( ":" ) ) return this.ternaryFn( a, c, this.ternary() );
                this.throwError( "expected :", d )
            } else return a
        },
        logicalOR: function() {
            for ( var a = this.logicalAND(), c;; )
                if ( c = this.expect( "||" ) ) a = this.binaryFn( a, c.fn, this.logicalAND() );
                else return a
        },
        logicalAND: function() {
            var a = this.equality(),
                c;
            if ( c = this.expect( "&&" ) ) a = this.binaryFn( a, c.fn, this.logicalAND() );
            return a
        },
        equality: function() {
            var a = this.relational(),
                c;
            if ( c = this.expect( "==", "!=", "===", "!==" ) ) a = this.binaryFn( a, c.fn, this.equality() );
            return a
        },
        relational: function() {
            var a = this.additive(),
                c;
            if ( c = this.expect( "<", ">", "<=", ">=" ) ) a = this.binaryFn( a, c.fn, this.relational() );
            return a
        },
        additive: function() {
            for ( var a = this.multiplicative(), c; c = this.expect( "+", "-" ); ) a = this.binaryFn( a, c.fn, this.multiplicative() );
            return a
        },
        multiplicative: function() {
            for ( var a = this.unary(), c; c = this.expect( "*", "/", "%" ); ) a = this.binaryFn( a, c.fn, this.unary() );
            return a
        },
        unary: function() {
            var a;
            return this.expect( "+" ) ? this.primary() : ( a = this.expect( "-" ) ) ? this.binaryFn( Wa.ZERO, a.fn, this.unary() ) : ( a = this.expect( "!" ) ) ? this.unaryFn( a.fn, this.unary() ) : this.primary()
        },
        fieldAccess: function( a ) {
            var c = this,
                d = this.expect().text,
                e = vc( d, this.options, this.text );
            return x( function( c, d, h ) {
                return e( h || a( c, d ), d )
            }, {
                assign: function( e, f, h ) {
                    return hb( a( e, h ), d, f, c.text, c.options )
                }
            } )
        },
        objectIndex: function( a ) {
            var c = this,
                d = this.expression();
            this.consume( "]" );
            return x( function( e, g ) {
                var f = a( e, g ),
                    h = d( e, g ),
                    l;
                if ( !f ) return r;
                ( f = Va( f[ h ], c.text ) ) && ( f.then && c.options.unwrapPromises ) && ( l = f, "$$v" in f || ( l.$$v = r, l.then( function( a ) {
                    l.$$v = a
                } ) ), f = f.$$v );
                return f
            }, {
                assign: function( e, g, f ) {
                    var h = d( e, f );
                    return Va( a( e, f ), c.text )[ h ] = g
                }
            } )
        },
        functionCall: function( a, c ) {
            var d = [];
            if ( ")" !== this.peekToken().text ) {
                do d.push( this.expression() ); while ( this.expect( "," ) )
            }
            this.consume( ")" );
            var e = this;
            return function( g, f ) {
                for ( var h = [], l = c ? c( g, f ) : g, k = 0; k < d.length; k++ ) h.push( d[ k ]( g, f ) );
                k = a( g, f, l ) || y;
                Va( l, e.text );
                Va( k, e.text );
                h = k.apply ? k.apply( l, h ) : k( h[ 0 ], h[ 1 ], h[ 2 ], h[ 3 ], h[ 4 ] );
                return Va( h, e.text )
            }
        },
        arrayDeclaration: function() {
            var a = [],
                c = !0;
            if ( "]" !== this.peekToken().text ) {
                do {
                    var d = this.expression();
                    a.push( d );
                    d.constant || ( c = !1 )
                } while ( this.expect( "," ) )
            }
            this.consume( "]" );
            return x( function( c, d ) {
                for ( var f = [], h = 0; h < a.length; h++ ) f.push( a[ h ]( c, d ) );
                return f
            }, {
                literal: !0,
                constant: c
            } )
        },
        object: function() {
            var a = [],
                c = !0;
            if ( "}" !== this.peekToken().text ) {
                do {
                    var d = this.expect(),
                        d = d.string || d.text;
                    this.consume( ":" );
                    var e = this.expression();
                    a.push( {
                        key: d,
                        value: e
                    } );
                    e.constant || ( c = !1 )
                } while ( this.expect( "," ) )
            }
            this.consume( "}" );
            return x( function( c, d ) {
                for ( var e = {}, l = 0; l < a.length; l++ ) {
                    var k = a[ l ];
                    e[ k.key ] = k.value( c, d )
                }
                return e
            }, {
                literal: !0,
                constant: c
            } )
        }
    };
    var Ib = {},
        ra = s( "$sce" ),
        da = {
            HTML: "html",
            CSS: "css",
            URL: "url",
            RESOURCE_URL: "resourceUrl",
            JS: "js"
        },
        X = O.createElement( "a" ),
        yc = pa( Y.location.href, !0 );
    zc.$inject = [ "$provide" ];
    Ac.$inject = [ "$locale" ];
    Cc.$inject = [ "$locale" ];
    var Fc = ".",
        Od = {
            yyyy: U( "FullYear", 4 ),
            yy: U( "FullYear", 2, 0, !0 ),
            y: U( "FullYear", 1 ),
            MMMM: ib( "Month" ),
            MMM: ib( "Month", !0 ),
            MM: U( "Month", 2, 1 ),
            M: U( "Month", 1, 1 ),
            dd: U( "Date", 2 ),
            d: U( "Date", 1 ),
            HH: U( "Hours", 2 ),
            H: U( "Hours", 1 ),
            hh: U( "Hours", 2, -12 ),
            h: U( "Hours", 1, -12 ),
            mm: U( "Minutes", 2 ),
            m: U( "Minutes", 1 ),
            ss: U( "Seconds", 2 ),
            s: U( "Seconds", 1 ),
            sss: U( "Milliseconds", 3 ),
            EEEE: ib( "Day" ),
            EEE: ib( "Day", !0 ),
            a: function( a, c ) {
                return 12 > a.getHours() ? c.AMPMS[ 0 ] : c.AMPMS[ 1 ]
            },
            Z: function( a ) {
                a = -1 * a.getTimezoneOffset();
                return a = ( 0 <= a ? "+" : "" ) + ( Kb( Math[ 0 < a ? "floor" : "ceil" ]( a / 60 ), 2 ) + Kb( Math.abs( a % 60 ), 2 ) )
            }
        },
        Nd = /((?:[^yMdHhmsaZE']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|d+|H+|h+|m+|s+|a|Z))(.*)/,
        Md = /^\-?\d+$/;
    Bc.$inject = [ "$locale" ];
    var Kd = Z( C ),
        Ld = Z( Ga );
    Dc.$inject = [ "$parse" ];
    var Vd = Z( {
            restrict: "E",
            compile: function( a, c ) {
                8 >= L && ( c.href || c.name || c.$set( "href", "" ), a.append( O.createComment( "IE fix" ) ) );
                if ( !c.href && !c.name ) return function( a, c ) {
                    c.on( "click", function( a ) {
                        c.attr( "href" ) || a.preventDefault()
                    } )
                }
            }
        } ),
        Mb = {};
    q( db, function( a, c ) {
        if ( "multiple" != a ) {
            var d = la( "ng-" + c );
            Mb[ d ] = function() {
                return {
                    priority: 100,
                    compile: function() {
                        return function( a, g, f ) {
                            a.$watch( f[ d ], function( a ) {
                                f.$set( c, !!a )
                            } )
                        }
                    }
                }
            }
        }
    } );
    q( [ "src",
"srcset", "href" ], function( a ) {
        var c = la( "ng-" + a );
        Mb[ c ] = function() {
            return {
                priority: 99,
                link: function( d, e, g ) {
                    g.$observe( c, function( c ) {
                        c && ( g.$set( a, c ), L && e.prop( a, g[ a ] ) )
                    } )
                }
            }
        }
    } );
    var lb = {
        $addControl: y,
        $removeControl: y,
        $setValidity: y,
        $setDirty: y,
        $setPristine: y
    };
    Gc.$inject = [ "$element", "$attrs", "$scope" ];
    var Ic = function( a ) {
            return [ "$timeout", function( c ) {
                return {
                    name: "form",
                    restrict: a ? "EAC" : "E",
                    controller: Gc,
                    compile: function() {
                        return {
                            pre: function( a, e, g, f ) {
                                if ( !g.action ) {
                                    var h = function( a ) {
                                        a.preventDefault ? a.preventDefault() : a.returnValue = !1
                                    };
                                    Hc( e[ 0 ], "submit", h );
                                    e.on( "$destroy", function() {
                                        c( function() {
                                            zb( e[ 0 ], "submit", h )
                                        }, 0, !1 )
                                    } )
                                }
                                var l = e.parent().controller( "form" ),
                                    k = g.name || g.ngForm;
                                k && hb( a, k, f, k );
                                if ( l ) e.on( "$destroy", function() {
                                    l.$removeControl( f );
                                    k && hb( a, k, r, k );
                                    x( f, lb )
                                } )
                            }
                        }
                    }
                }
            } ]
        },
        Wd = Ic(),
        Xd = Ic( !0 ),
        Yd = /^(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/,
        Zd = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,6}$/,
        $d = /^\s*(\-|\+)?(\d+|(\d*(\.\d*)))\s*$/,
        Jc = {
            text: nb,
            number: function( a, c, d, e, g, f ) {
                nb( a, c, d, e, g, f );
                e.$parsers.push( function( a ) {
                    var c = e.$isEmpty( a );
                    if ( c || $d.test( a ) ) return e.$setValidity( "number", !0 ), "" === a ? null : c ? a : parseFloat( a );
                    e.$setValidity( "number", !1 );
                    return r
                } );
                e.$formatters.push( function( a ) {
                    return e.$isEmpty( a ) ? "" : "" + a
                } );
                d.min && ( a = function( a ) {
                    var c = parseFloat( d.min );
                    if ( !e.$isEmpty( a ) && a < c ) return e.$setValidity( "min", !1 ), r;
                    e.$setValidity( "min", !0 );
                    return a
                }, e.$parsers.push( a ), e.$formatters.push( a ) );
                d.max && ( a = function( a ) {
                    var c = parseFloat( d.max );
                    if ( !e.$isEmpty( a ) && a > c ) return e.$setValidity( "max", !1 ), r;
                    e.$setValidity( "max", !0 );
                    return a
                }, e.$parsers.push( a ), e.$formatters.push( a ) );
                e.$formatters.push( function( a ) {
                    if ( e.$isEmpty( a ) || pb( a ) ) return e.$setValidity( "number", !0 ), a;
                    e.$setValidity( "number", !1 );
                    return r
                } )
            },
            url: function( a, c, d, e, g, f ) {
                nb( a, c, d, e, g, f );
                a = function( a ) {
                    if ( e.$isEmpty( a ) || Yd.test( a ) ) return e.$setValidity( "url", !0 ), a;
                    e.$setValidity( "url", !1 );
                    return r
                };
                e.$formatters.push( a );
                e.$parsers.push( a )
            },
            email: function( a, c, d, e, g, f ) {
                nb( a, c, d, e, g, f );
                a = function( a ) {
                    if ( e.$isEmpty( a ) || Zd.test( a ) ) return e.$setValidity( "email", !0 ), a;
                    e.$setValidity( "email", !1 );
                    return r
                };
                e.$formatters.push( a );
                e.$parsers.push( a )
            },
            radio: function( a, c, d, e ) {
                D( d.name ) && c.attr( "name", Xa() );
                c.on( "click", function() {
                    c[ 0 ].checked && a.$apply( function() {
                        e.$setViewValue( d.value )
                    } )
                } );
                e.$render = function() {
                    c[ 0 ].checked = d.value == e.$viewValue
                };
                d.$observe( "value", e.$render )
            },
            checkbox: function( a, c, d, e ) {
                var g = d.ngTrueValue,
                    f = d.ngFalseValue;
                E( g ) || ( g = !0 );
                E( f ) || ( f = !1 );
                c.on( "click", function() {
                    a.$apply( function() {
                        e.$setViewValue( c[ 0 ].checked )
                    } )
                } );
                e.$render = function() {
                    c[ 0 ].checked = e.$viewValue
                };
                e.$isEmpty = function( a ) {
                    return a !== g
                };
                e.$formatters.push( function( a ) {
                    return a === g
                } );
                e.$parsers.push( function( a ) {
                    return a ? g : f
                } )
            },
            hidden: y,
            button: y,
            submit: y,
            reset: y
        },
        Kc = [ "$browser", "$sniffer", function( a, c ) {
            return {
                restrict: "E",
                require: "?ngModel",
                link: function( d, e, g, f ) {
                    f && ( Jc[ C( g.type ) ] || Jc.text )( d, e, g, f, c, a )
                }
            }
        } ],
        kb = "ng-valid",
        jb = "ng-invalid",
        Ha = "ng-pristine",
        mb = "ng-dirty",
        ae = [ "$scope", "$exceptionHandler", "$attrs", "$element", "$parse", function( a, c, d, e, g ) {
            function f( a, c ) {
                c = c ? "-" + ab( c, "-" ) : "";
                e.removeClass( ( a ? jb : kb ) + c ).addClass( ( a ? kb : jb ) + c )
            }
            this.$modelValue = this.$viewValue = Number.NaN;
            this.$parsers = [];
            this.$formatters = [];
            this.$viewChangeListeners = [];
            this.$pristine = !0;
            this.$dirty = !1;
            this.$valid = !0;
            this.$invalid = !1;
            this.$name = d.name;
            var h = g( d.ngModel ),
                l = h.assign;
            if ( !l ) throw s( "ngModel" )( "nonassign", d.ngModel, fa( e ) );
            this.$render = y;
            this.$isEmpty = function( a ) {
                return D( a ) || "" === a || null === a || a !== a
            };
            var k = e.inheritedData( "$formController" ) || lb,
                m = 0,
                n = this.$error = {};
            e.addClass( Ha );
            f( !0 );
            this.$setValidity = function( a, c ) {
                n[ a ] !== !c && ( c ? ( n[ a ] && m--, m || ( f( !0 ), this.$valid = !0, this.$invalid = !1 ) ) : ( f( !1 ), this.$invalid = !0, this.$valid = !1, m++ ), n[ a ] = !c, f( c, a ), k.$setValidity( a, c, this ) )
            };
            this.$setPristine = function() {
                this.$dirty = !1;
                this.$pristine = !0;
                e.removeClass( mb ).addClass( Ha )
            };
            this.$setViewValue = function( d ) {
                this.$viewValue = d;
                this.$pristine && ( this.$dirty = !0, this.$pristine = !1, e.removeClass( Ha ).addClass( mb ), k.$setDirty() );
                q( this.$parsers, function( a ) {
                    d = a( d )
                } );
                this.$modelValue !== d && ( this.$modelValue = d, l( a, d ), q( this.$viewChangeListeners, function( a ) {
                    try {
                        a()
                    } catch ( d ) {
                        c( d )
                    }
                } ) )
            };
            var p = this;
            a.$watch( function() {
                var c = h( a );
                if ( p.$modelValue !== c ) {
                    var d = p.$formatters,
                        e = d.length;
                    for ( p.$modelValue = c; e--; ) c = d[ e ]( c );
                    p.$viewValue !== c && ( p.$viewValue = c, p.$render() )
                }
                return c
            } )
        } ],
        be = function() {
            return {
                require: [ "ngModel", "^?form" ],
                controller: ae,
                link: function( a, c, d, e ) {
                    var g = e[ 0 ],
                        f = e[ 1 ] || lb;
                    f.$addControl( g );
                    a.$on( "$destroy", function() {
                        f.$removeControl( g )
                    } )
                }
            }
        },
        ce = Z( {
            require: "ngModel",
            link: function( a, c, d, e ) {
                e.$viewChangeListeners.push( function() {
                    a.$eval( d.ngChange )
                } )
            }
        } ),
        Lc = function() {
            return {
                require: "?ngModel",
                link: function( a, c, d, e ) {
                    if ( e ) {
                        d.required = !0;
                        var g = function( a ) {
                            if ( d.required && e.$isEmpty( a ) ) e.$setValidity( "required", !1 );
                            else return e.$setValidity( "required", !0 ), a
                        };
                        e.$formatters.push( g );
                        e.$parsers.unshift( g );
                        d.$observe( "required", function() {
                            g( e.$viewValue )
                        } )
                    }
                }
            }
        },
        de = function() {
            return {
                require: "ngModel",
                link: function( a, c, d, e ) {
                    var g = ( a = /\/(.*)\//.exec( d.ngList ) ) && RegExp( a[ 1 ] ) || d.ngList || ",";
                    e.$parsers.push( function( a ) {
                        if ( !D( a ) ) {
                            var c = [];
                            a && q( a.split( g ), function( a ) {
                                a && c.push( aa( a ) )
                            } );
                            return c
                        }
                    } );
                    e.$formatters.push( function( a ) {
                        return I( a ) ? a.join( ", " ) : r
                    } );
                    e.$isEmpty = function( a ) {
                        return !a || !a.length
                    }
                }
            }
        },
        ee = /^(true|false|\d+)$/,
        fe = function() {
            return {
                priority: 100,
                compile: function( a, c ) {
                    return ee.test( c.ngValue ) ? function( a, c, g ) {
                        g.$set( "value", a.$eval( g.ngValue ) )
                    } : function( a, c, g ) {
                        a.$watch( g.ngValue, function( a ) {
                            g.$set( "value", a )
                        } )
                    }
                }
            }
        },
        ge = sa( function( a, c, d ) {
            c.addClass( "ng-binding" ).data( "$binding", d.ngBind );
            a.$watch( d.ngBind, function( a ) {
                c.text( a == r ? "" : a )
            } )
        } ),
        he = [ "$interpolate",
function( a ) {
                return function( c, d, e ) {
                    c = a( d.attr( e.$attr.ngBindTemplate ) );
                    d.addClass( "ng-binding" ).data( "$binding", c );
                    e.$observe( "ngBindTemplate", function( a ) {
                        d.text( a )
                    } )
                }
            } ],
        ie = [ "$sce", "$parse", function( a, c ) {
            return function( d, e, g ) {
                e.addClass( "ng-binding" ).data( "$binding", g.ngBindHtml );
                var f = c( g.ngBindHtml );
                d.$watch( function() {
                    return ( f( d ) || "" ).toString()
                }, function( c ) {
                    e.html( a.getTrustedHtml( f( d ) ) || "" )
                } )
            }
        } ],
        je = Lb( "", !0 ),
        ke = Lb( "Odd", 0 ),
        le = Lb( "Even", 1 ),
        me = sa( {
            compile: function( a, c ) {
                c.$set( "ngCloak", r );
                a.removeClass( "ng-cloak" )
            }
        } ),
        ne = [ function() {
            return {
                scope: !0,
                controller: "@",
                priority: 500
            }
        } ],
        Mc = {};
    q( "click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste".split( " " ), function( a ) {
        var c = la( "ng-" + a );
        Mc[ c ] = [ "$parse", function( d ) {
            return {
                compile: function( e, g ) {
                    var f = d( g[ c ] );
                    return function( c, d, e ) {
                        d.on( C( a ), function( a ) {
                            c.$apply( function() {
                                f( c, {
                                    $event: a
                                } )
                            } )
                        } )
                    }
                }
            }
        } ]
    } );
    var oe = [ "$animate", function( a ) {
            return {
                transclude: "element",
                priority: 600,
                terminal: !0,
                restrict: "A",
                $$tlb: !0,
                link: function( c, d, e, g, f ) {
                    var h, l;
                    c.$watch( e.ngIf, function( g ) {
                        Ma( g ) ? l || ( l = c.$new(), f( l, function( c ) {
                            c[ c.length++ ] = O.createComment( " end ngIf: " + e.ngIf + " " );
                            h = {
                                clone: c
                            };
                            a.enter( c, d.parent(), d )
                        } ) ) : ( l && ( l.$destroy(), l = null ), h && ( a.leave( ub( h.clone ) ), h = null ) )
                    } )
                }
            }
        } ],
        pe = [ "$http", "$templateCache", "$anchorScroll", "$animate", "$sce", function( a, c, d, e, g ) {
            return {
                restrict: "ECA",
                priority: 400,
                terminal: !0,
                transclude: "element",
                controller: Na.noop,
                compile: function( f, h ) {
                    var l = h.ngInclude || h.src,
                        k = h.onload || "",
                        m = h.autoscroll;
                    return function( f, h, q, r, A ) {
                        var s = 0,
                            u, x, z = function() {
                                u && ( u.$destroy(), u = null );
                                x && ( e.leave( x ), x = null )
                            };
                        f.$watch( g.parseAsResourceUrl( l ), function( g ) {
                            var l = function() {
                                    !v( m ) || m && !f.$eval( m ) || d()
                                },
                                q = ++s;
                            g ? ( a.get( g, {
                                cache: c
                            } ).success( function( a ) {
                                if ( q === s ) {
                                    var c = f.$new();
                                    r.template = a;
                                    a = A( c, function( a ) {
                                        z();
                                        e.enter( a, null, h, l )
                                    } );
                                    u = c;
                                    x = a;
                                    u.$emit( "$includeContentLoaded" );
                                    f.$eval( k )
                                }
                            } ).error( function() {
                                q === s && z()
                            } ), f.$emit( "$includeContentRequested" ) ) : ( z(), r.template = null )
                        } )
                    }
                }
            }
        } ],
        qe = [ "$compile", function( a ) {
            return {
                restrict: "ECA",
                priority: -400,
                require: "ngInclude",
                link: function( c, d, e, g ) {
                    d.html( g.template );
                    a( d.contents() )( c )
                }
            }
        } ],
        re = sa( {
            priority: 450,
            compile: function() {
                return {
                    pre: function( a, c, d ) {
                        a.$eval( d.ngInit )
                    }
                }
            }
        } ),
        se = sa( {
            terminal: !0,
            priority: 1E3
        } ),
        te = [ "$locale", "$interpolate", function( a, c ) {
            var d = /{}/g;
            return {
                restrict: "EA",
                link: function( e, g, f ) {
                    var h = f.count,
                        l = f.$attr.when && g.attr( f.$attr.when ),
                        k = f.offset || 0,
                        m = e.$eval( l ) || {},
                        n = {},
                        p = c.startSymbol(),
                        t = c.endSymbol(),
                        r = /^when(Minus)?(.+)$/;
                    q( f, function( a, c ) {
                        r.test( c ) && ( m[ C( c.replace( "when", "" ).replace( "Minus", "-" ) ) ] = g.attr( f.$attr[ c ] ) )
                    } );
                    q( m, function( a, e ) {
                        n[ e ] = c( a.replace( d, p + h + "-" + k + t ) )
                    } );
                    e.$watch( function() {
                        var c = parseFloat( e.$eval( h ) );
                        if ( isNaN( c ) ) return "";
                        c in m || ( c = a.pluralCat( c - k ) );
                        return n[ c ]( e, g, !0 )
                    }, function( a ) {
                        g.text( a )
                    } )
                }
            }
        } ],
        ue = [ "$parse", "$animate", function( a, c ) {
            var d = s( "ngRepeat" );
            return {
                transclude: "element",
                priority: 1E3,
                terminal: !0,
                $$tlb: !0,
                link: function( e, g, f, h, l ) {
                    var k = f.ngRepeat,
                        m = k.match( /^\s*(.+)\s+in\s+([\r\n\s\S]*?)\s*(\s+track\s+by\s+(.+)\s*)?$/ ),
                        n, p, t, r, s, x, v = {
                            $id: Ca
                        };
                    if ( !m ) throw d( "iexp", k );
                    f = m[ 1 ];
                    h = m[ 2 ];
                    ( m = m[ 4 ] ) ? ( n = a( m ), p = function( a, c, d ) {
                        x && ( v[ x ] = a );
                        v[ s ] = c;
                        v.$index = d;
                        return n( e, v )
                    } ) : ( t = function( a, c ) {
                        return Ca( c )
                    }, r = function( a ) {
                        return a
                    } );
                    m = f.match( /^(?:([\$\w]+)|\(([\$\w]+)\s*,\s*([\$\w]+)\))$/ );
                    if ( !m ) throw d( "iidexp", f );
                    s = m[ 3 ] || m[ 1 ];
                    x = m[ 2 ];
                    var D = {};
                    e.$watchCollection( h, function( a ) {
                        var f, h, m = g[ 0 ],
                            n, v = {},
                            H, R, E, y, T, C, I = [];
                        if ( ob( a ) ) T = a, n = p || t;
                        else {
                            n = p || r;
                            T = [];
                            for ( E in a ) a.hasOwnProperty( E ) && "$" != E.charAt( 0 ) && T.push( E );
                            T.sort()
                        }
                        H = T.length;
                        h = I.length = T.length;
                        for ( f = 0; f < h; f++ )
                            if ( E = a === T ? f : T[ f ], y = a[ E ], y = n( E, y, f ), wa( y, "`track by` id" ), D.hasOwnProperty( y ) ) C = D[ y ], delete D[ y ], v[ y ] = C, I[ f ] = C;
                            else {
                                if ( v.hasOwnProperty( y ) ) throw q( I, function( a ) {
                                    a && a.scope && ( D[ a.id ] = a )
                                } ), d( "dupes", k, y );
                                I[ f ] = {
                                    id: y
                                };
                                v[ y ] = !1
                            }
                        for ( E in D ) D.hasOwnProperty( E ) && ( C = D[ E ], f = ub( C.clone ), c.leave( f ), q( f, function( a ) {
                            a.$$NG_REMOVED = !0
                        } ), C.scope.$destroy() );
                        f = 0;
                        for ( h = T.length; f < h; f++ ) {
                            E = a === T ? f : T[ f ];
                            y = a[ E ];
                            C = I[ f ];
                            I[ f - 1 ] && ( m = I[ f - 1 ].clone[ I[ f - 1 ].clone.length - 1 ] );
                            if ( C.scope ) {
                                R = C.scope;
                                n = m;
                                do n = n.nextSibling;
                                while ( n && n.$$NG_REMOVED );
                                C.clone[ 0 ] != n && c.move( ub( C.clone ), null, u( m ) );
                                m = C.clone[ C.clone.length - 1 ]
                            } else R = e.$new();
                            R[ s ] = y;
                            x && ( R[ x ] = E );
                            R.$index = f;
                            R.$first = 0 === f;
                            R.$last = f === H - 1;
                            R.$middle = !( R.$first || R.$last );
                            R.$odd = !( R.$even = 0 === ( f & 1 ) );
                            C.scope || l( R, function( a ) {
                                a[ a.length++ ] = O.createComment( " end ngRepeat: " + k + " " );
                                c.enter( a, null, u( m ) );
                                m = a;
                                C.scope = R;
                                C.clone = a;
                                v[ C.id ] = C
                            } )
                        }
                        D = v
                    } )
                }
            }
        } ],
        ve = [ "$animate", function( a ) {
            return function( c, d, e ) {
                c.$watch( e.ngShow, function( c ) {
                    a[ Ma( c ) ? "removeClass" : "addClass" ]( d, "ng-hide" )
                } )
            }
        } ],
        we = [ "$animate", function( a ) {
            return function( c, d, e ) {
                c.$watch( e.ngHide, function( c ) {
                    a[ Ma( c ) ? "addClass" : "removeClass" ]( d, "ng-hide" )
                } )
            }
        } ],
        xe = sa( function( a, c, d ) {
            a.$watch( d.ngStyle, function( a, d ) {
                d && a !== d && q( d, function( a, d ) {
                    c.css( d, "" )
                } );
                a && c.css( a )
            }, !0 )
        } ),
        ye = [ "$animate", function( a ) {
            return {
                restrict: "EA",
                require: "ngSwitch",
                controller: [ "$scope", function() {
                    this.cases = {}
                } ],
                link: function( c, d, e, g ) {
                    var f, h, l = [];
                    c.$watch( e.ngSwitch || e.on, function( d ) {
                        for ( var m = 0, n = l.length; m < n; m++ ) l[ m ].$destroy(), a.leave( h[ m ] );
                        h = [];
                        l = [];
                        if ( f = g.cases[ "!" + d ] || g.cases[ "?" ] ) c.$eval( e.change ), q( f, function( d ) {
                            var e = c.$new();
                            l.push( e );
                            d.transclude( e, function( c ) {
                                var e = d.element;
                                h.push( c );
                                a.enter( c, e.parent(), e )
                            } )
                        } )
                    } )
                }
            }
        } ],
        ze = sa( {
            transclude: "element",
            priority: 800,
            require: "^ngSwitch",
            compile: function( a, c ) {
                return function( a, e, g, f, h ) {
                    f.cases[ "!" + c.ngSwitchWhen ] = f.cases[ "!" + c.ngSwitchWhen ] || [];
                    f.cases[ "!" + c.ngSwitchWhen ].push( {
                        transclude: h,
                        element: e
                    } )
                }
            }
        } ),
        Ae = sa( {
            transclude: "element",
            priority: 800,
            require: "^ngSwitch",
            link: function( a, c, d, e, g ) {
                e.cases[ "?" ] = e.cases[ "?" ] || [];
                e.cases[ "?" ].push( {
                    transclude: g,
                    element: c
                } )
            }
        } ),
        Be = sa( {
            controller: [ "$element", "$transclude", function( a, c ) {
                if ( !c ) throw s( "ngTransclude" )( "orphan", fa( a ) );
                this.$transclude = c
            } ],
            link: function( a, c, d, e ) {
                e.$transclude( function( a ) {
                    c.empty();
                    c.append( a )
                } )
            }
        } ),
        Ce = [ "$templateCache", function( a ) {
            return {
                restrict: "E",
                terminal: !0,
                compile: function( c, d ) {
                    "text/ng-template" == d.type && a.put( d.id, c[ 0 ].text )
                }
            }
        } ],
        De = s( "ngOptions" ),
        Ee = Z( {
            terminal: !0
        } ),
        Fe = [ "$compile", "$parse", function( a, c ) {
            var d = /^\s*(.*?)(?:\s+as\s+(.*?))?(?:\s+group\s+by\s+(.*))?\s+for\s+(?:([\$\w][\$\w]*)|(?:\(\s*([\$\w][\$\w]*)\s*,\s*([\$\w][\$\w]*)\s*\)))\s+in\s+(.*?)(?:\s+track\s+by\s+(.*?))?$/,
                e = {
                    $setViewValue: y
                };
            return {
                restrict: "E",
                require: [ "select", "?ngModel" ],
                controller: [ "$element", "$scope", "$attrs", function( a, c, d ) {
                    var l = this,
                        k = {},
                        m = e,
                        n;
                    l.databound = d.ngModel;
                    l.init = function( a, c, d ) {
                        m = a;
                        n = d
                    };
                    l.addOption = function( c ) {
                        wa( c, '"option value"' );
                        k[ c ] = !0;
                        m.$viewValue == c && ( a.val( c ), n.parent() && n.remove() )
                    };
                    l.removeOption = function( a ) {
                        this.hasOption( a ) && ( delete k[ a ], m.$viewValue == a && this.renderUnknownOption( a ) )
                    };
                    l.renderUnknownOption = function( c ) {
                        c = "? " + Ca( c ) + " ?";
                        n.val( c );
                        a.prepend( n );
                        a.val( c );
                        n.prop( "selected", !0 )
                    };
                    l.hasOption = function( a ) {
                        return k.hasOwnProperty( a )
                    };
                    c.$on( "$destroy", function() {
                        l.renderUnknownOption = y
                    } )
                } ],
                link: function( e, f, h, l ) {
                    function k( a, c, d, e ) {
                        d.$render = function() {
                            var a = d.$viewValue;
                            e.hasOption( a ) ? ( y.parent() && y.remove(), c.val( a ), "" === a && x.prop( "selected", !0 ) ) : D( a ) && x ? c.val( "" ) : e.renderUnknownOption( a )
                        };
                        c.on( "change", function() {
                            a.$apply( function() {
                                y.parent() && y.remove();
                                d.$setViewValue( c.val() )
                            } )
                        } )
                    }

                    function m( a, c, d ) {
                        var e;
                        d.$render = function() {
                            var a = new Ra( d.$viewValue );
                            q( c.find( "option" ), function( c ) {
                                c.selected = v( a.get( c.value ) )
                            } )
                        };
                        a.$watch( function() {
                            ta( e, d.$viewValue ) || ( e = ea( d.$viewValue ), d.$render() )
                        } );
                        c.on( "change", function() {
                            a.$apply( function() {
                                var a = [];
                                q( c.find( "option" ), function( c ) {
                                    c.selected && a.push( c.value )
                                } );
                                d.$setViewValue( a )
                            } )
                        } )
                    }

                    function n( e, f, g ) {
                        function h() {
                            var a = {
                                    "": []
                                },
                                c = [ "" ],
                                d, k, r, s, w;
                            s = g.$modelValue;
                            w = x( e ) || [];
                            var B = n ? Nb( w ) : w,
                                D, K, z;
                            K = {};
                            r = !1;
                            var F, J;
                            if ( t )
                                if ( u && I( s ) )
                                    for ( r = new Ra( [] ), z = 0; z < s.length; z++ ) K[ m ] = s[ z ], r.put( u( e, K ), s[ z ] );
                                else r = new Ra( s );
                            for ( z = 0; D = B.length, z < D; z++ ) {
                                k = z;
                                if ( n ) {
                                    k = B[ z ];
                                    if ( "$" === k.charAt( 0 ) ) continue;
                                    K[ n ] = k
                                }
                                K[ m ] = w[ k ];
                                d = p( e, K ) || "";
                                ( k = a[ d ] ) || ( k = a[ d ] = [], c.push( d ) );
                                t ? d = v( r.remove( u ? u( e, K ) : q( e, K ) ) ) : ( u ? ( d = {}, d[ m ] = s, d = u( e, d ) === u( e, K ) ) : d = s === q( e, K ), r = r || d );
                                F = l( e, K );
                                F = v( F ) ? F : "";
                                k.push( {
                                    id: u ? u( e, K ) : n ? B[ z ] : z,
                                    label: F,
                                    selected: d
                                } )
                            }
                            t || ( A || null === s ? a[ "" ].unshift( {
                                id: "",
                                label: "",
                                selected: !r
                            } ) : r || a[ "" ].unshift( {
                                id: "?",
                                label: "",
                                selected: !0
                            } ) );
                            K = 0;
                            for ( B = c.length; K < B; K++ ) {
                                d = c[ K ];
                                k = a[ d ];
                                y.length <= K ? ( s = {
                                    element: E.clone().attr( "label", d ),
                                    label: k.label
                                }, w = [ s ], y.push( w ), f.append( s.element ) ) : ( w = y[ K ], s = w[ 0 ], s.label != d && s.element.attr( "label", s.label = d ) );
                                F = null;
                                z = 0;
                                for ( D = k.length; z < D; z++ ) r = k[ z ], ( d = w[ z + 1 ] ) ? ( F = d.element, d.label !== r.label && F.text( d.label = r.label ), d.id !== r.id && F.val( d.id = r.id ), F[ 0 ].selected !== r.selected && F.prop( "selected", d.selected = r.selected ) ) : ( "" === r.id && A ? J = A : ( J = C.clone() ).val( r.id ).attr( "selected", r.selected ).text( r.label ), w.push( {
                                    element: J,
                                    label: r.label,
                                    id: r.id,
                                    selected: r.selected
                                } ), F ? F.after( J ) : s.element.append( J ), F = J );
                                for ( z++; w.length > z; ) w.pop().element.remove()
                            }
                            for ( ; y.length > K; ) y.pop()[ 0 ].element.remove()
                        }
                        var k;
                        if ( !( k = s.match( d ) ) ) throw De( "iexp", s, fa( f ) );
                        var l = c( k[ 2 ] || k[ 1 ] ),
                            m = k[ 4 ] || k[ 6 ],
                            n = k[ 5 ],
                            p = c( k[ 3 ] || "" ),
                            q = c( k[ 2 ] ? k[ 1 ] : m ),
                            x = c( k[ 7 ] ),
                            u = k[ 8 ] ? c( k[ 8 ] ) : null,
                            y = [ [ {
                                element: f,
                                label: ""
                            } ] ];
                        A && ( a( A )( e ), A.removeClass( "ng-scope" ), A.remove() );
                        f.empty();
                        f.on( "change", function() {
                            e.$apply( function() {
                                var a, c = x( e ) || [],
                                    d = {},
                                    h, k, l,
                                    p, s, w, v;
                                if ( t )
                                    for ( k = [], p = 0, w = y.length; p < w; p++ )
                                        for ( a = y[ p ], l = 1, s = a.length; l < s; l++ ) {
                                            if ( ( h = a[ l ].element )[ 0 ].selected ) {
                                                h = h.val();
                                                n && ( d[ n ] = h );
                                                if ( u )
                                                    for ( v = 0; v < c.length && ( d[ m ] = c[ v ], u( e, d ) != h ); v++ );
                                                else d[ m ] = c[ h ];
                                                k.push( q( e, d ) )
                                            }
                                        } else if ( h = f.val(), "?" == h ) k = r;
                                        else if ( "" === h ) k = null;
                                else if ( u )
                                    for ( v = 0; v < c.length; v++ ) {
                                        if ( d[ m ] = c[ v ], u( e, d ) == h ) {
                                            k = q( e, d );
                                            break
                                        }
                                    } else d[ m ] = c[ h ], n && ( d[ n ] = h ), k = q( e, d );
                                g.$setViewValue( k )
                            } )
                        } );
                        g.$render = h;
                        e.$watch( h )
                    }
                    if ( l[ 1 ] ) {
                        var p = l[ 0 ];
                        l = l[ 1 ];
                        var t = h.multiple,
                            s = h.ngOptions,
                            A = !1,
                            x, C = u( O.createElement( "option" ) ),
                            E = u( O.createElement( "optgroup" ) ),
                            y = C.clone();
                        h = 0;
                        for ( var B = f.children(), J = B.length; h < J; h++ )
                            if ( "" === B[ h ].value ) {
                                x = A = B.eq( h );
                                break
                            }
                        p.init( l, A, y );
                        t && ( l.$isEmpty = function( a ) {
                            return !a || 0 === a.length
                        } );
                        s ? n( e, f, l ) : t ? m( e, f, l ) : k( e, f, l, p )
                    }
                }
            }
        } ],
        Ge = [ "$interpolate", function( a ) {
            var c = {
                addOption: y,
                removeOption: y
            };
            return {
                restrict: "E",
                priority: 100,
                compile: function( d, e ) {
                    if ( D( e.value ) ) {
                        var g = a( d.text(), !0 );
                        g || e.$set( "value", d.text() )
                    }
                    return function( a, d, e ) {
                        var k = d.parent(),
                            m = k.data( "$selectController" ) || k.parent().data( "$selectController" );
                        m && m.databound ? d.prop( "selected", !1 ) : m = c;
                        g ? a.$watch( g, function( a, c ) {
                            e.$set( "value", a );
                            a !== c && m.removeOption( c );
                            m.addOption( a )
                        } ) : m.addOption( e.value );
                        d.on( "$destroy", function() {
                            m.removeOption( e.value )
                        } )
                    }
                }
            }
        } ],
        He = Z( {
            restrict: "E",
            terminal: !0
        } );
    ( Aa = Y.jQuery ) ? ( u = Aa, x( Aa.fn, {
        scope: Da.scope,
        isolateScope: Da.isolateScope,
        controller: Da.controller,
        injector: Da.injector,
        inheritedData: Da.inheritedData
    } ), vb( "remove", !0, !0, !1 ), vb( "empty", !1, !1, !1 ), vb( "html", !1, !1, !0 ) ) : u = N;
    Na.element = u;
    ( function( a ) {
        x( a, {
            bootstrap: Xb,
            copy: ea,
            extend: x,
            equals: ta,
            element: u,
            forEach: q,
            injector: Yb,
            noop: y,
            bind: qb,
            toJson: oa,
            fromJson: Tb,
            identity: za,
            isUndefined: D,
            isDefined: v,
            isString: E,
            isFunction: J,
            isObject: V,
            isNumber: pb,
            isElement: Oc,
            isArray: I,
            version: Qd,
            isDate: Ja,
            lowercase: C,
            uppercase: Ga,
            callbacks: {
                counter: 0
            },
            $$minErr: s,
            $$csp: Sb
        } );
        Ta = Tc( Y );
        try {
            Ta( "ngLocale" )
        } catch ( c ) {
            Ta( "ngLocale", [] ).provider( "$locale", qd )
        }
        Ta( "ng", [ "ngLocale" ], [ "$provide", function( a ) {
            a.provider( {
                $$sanitizeUri: Ad
            } );
            a.provider( "$compile", hc ).directive( {
                a: Vd,
                input: Kc,
                textarea: Kc,
                form: Wd,
                script: Ce,
                select: Fe,
                style: He,
                option: Ge,
                ngBind: ge,
                ngBindHtml: ie,
                ngBindTemplate: he,
                ngClass: je,
                ngClassEven: le,
                ngClassOdd: ke,
                ngCloak: me,
                ngController: ne,
                ngForm: Xd,
                ngHide: we,
                ngIf: oe,
                ngInclude: pe,
                ngInit: re,
                ngNonBindable: se,
                ngPluralize: te,
                ngRepeat: ue,
                ngShow: ve,
                ngStyle: xe,
                ngSwitch: ye,
                ngSwitchWhen: ze,
                ngSwitchDefault: Ae,
                ngOptions: Ee,
                ngTransclude: Be,
                ngModel: be,
                ngList: de,
                ngChange: ce,
                required: Lc,
                ngRequired: Lc,
                ngValue: fe
            } ).directive( {
                ngInclude: qe
            } ).directive( Mb ).directive( Mc );
            a.provider( {
                $anchorScroll: bd,
                $animate: Sd,
                $browser: dd,
                $cacheFactory: ed,
                $controller: hd,
                $document: id,
                $exceptionHandler: jd,
                $filter: zc,
                $interpolate: od,
                $interval: pd,
                $http: kd,
                $httpBackend: ld,
                $location: sd,
                $log: td,
                $parse: wd,
                $rootScope: zd,
                $q: xd,
                $sce: Dd,
                $sceDelegate: Cd,
                $sniffer: Ed,
                $templateCache: fd,
                $timeout: Fd,
                $window: Gd
            } )
        } ] )
    } )( Na );
    u( O ).ready( function() {
        Rc( O, Xb )
    } )
} )( window, document );
!angular.$$csp() && angular.element( document ).find( "head" ).prepend( '<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide{display:none !important;}ng\\:form{display:block;}</style>' );
//# sourceMappingURL=angular.min.js.map
/*!
 * Bootstrap v3.3.0 (http://getbootstrap.com)
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */
if ( typeof jQuery === 'undefined' ) {
    throw new Error( 'Bootstrap\'s JavaScript requires jQuery' )
} + function( $ ) {
    var version = $.fn.jquery.split( ' ' )[ 0 ].split( '.' )
    if ( ( version[ 0 ] < 2 && version[ 1 ] < 9 ) || ( version[ 0 ] == 1 && version[ 1 ] == 9 && version[ 2 ] < 1 ) ) {
        throw new Error( 'Bootstrap\'s JavaScript requires jQuery version 1.9.1 or higher' )
    }
}( jQuery );
/* ========================================================================
 * Bootstrap: transition.js v3.3.0
 * http://getbootstrap.com/javascript/#transitions
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */
+ function( $ ) {
    'use strict';
    // CSS TRANSITION SUPPORT (Shoutout: http://www.modernizr.com/)
    // ============================================================
    function transitionEnd() {
            var el = document.createElement( 'bootstrap' )
            var transEndEventNames = {
                WebkitTransition: 'webkitTransitionEnd',
                MozTransition: 'transitionend',
                OTransition: 'oTransitionEnd otransitionend',
                transition: 'transitionend'
            }
            for ( var name in transEndEventNames ) {
                if ( el.style[ name ] !== undefined ) {
                    return {
                        end: transEndEventNames[ name ]
                    }
                }
            }
            return false // explicit for ie8 (  ._.)
        }
        // http://blog.alexmaccaw.com/css-transitions
    $.fn.emulateTransitionEnd = function( duration ) {
        var called = false
        var $el = this
        $( this ).one( 'bsTransitionEnd', function() {
            called = true
        } )
        var callback = function() {
            if ( !called ) $( $el ).trigger( $.support.transition.end )
        }
        setTimeout( callback, duration )
        return this
    }
    $( function() {
        $.support.transition = transitionEnd()
        if ( !$.support.transition ) return
        $.event.special.bsTransitionEnd = {
            bindType: $.support.transition.end,
            delegateType: $.support.transition.end,
            handle: function( e ) {
                if ( $( e.target ).is( this ) ) return e.handleObj.handler.apply( this, arguments )
            }
        }
    } )
}( jQuery );
/* ========================================================================
 * Bootstrap: alert.js v3.3.0
 * http://getbootstrap.com/javascript/#alerts
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */
+ function( $ ) {
    'use strict';
    // ALERT CLASS DEFINITION
    // ======================
    var dismiss = '[data-dismiss="alert"]'
    var Alert = function( el ) {
        $( el ).on( 'click', dismiss, this.close )
    }
    Alert.VERSION = '3.3.0'
    Alert.TRANSITION_DURATION = 150
    Alert.prototype.close = function( e ) {
            var $this = $( this )
            var selector = $this.attr( 'data-target' )
            if ( !selector ) {
                selector = $this.attr( 'href' )
                selector = selector && selector.replace( /.*(?=#[^\s]*$)/, '' ) // strip for ie7
            }
            var $parent = $( selector )
            if ( e ) e.preventDefault()
            if ( !$parent.length ) {
                $parent = $this.closest( '.alert' )
            }
            $parent.trigger( e = $.Event( 'close.bs.alert' ) )
            if ( e.isDefaultPrevented() ) return
            $parent.removeClass( 'in' )

            function removeElement() {
                // detach from parent, fire event then clean up data
                $parent.detach().trigger( 'closed.bs.alert' ).remove()
            }
            $.support.transition && $parent.hasClass( 'fade' ) ? $parent.one( 'bsTransitionEnd', removeElement ).emulateTransitionEnd( Alert.TRANSITION_DURATION ) : removeElement()
        }
        // ALERT PLUGIN DEFINITION
        // =======================
    function Plugin( option ) {
        return this.each( function() {
            var $this = $( this )
            var data = $this.data( 'bs.alert' )
            if ( !data ) $this.data( 'bs.alert', ( data = new Alert( this ) ) )
            if ( typeof option == 'string' ) data[ option ].call( $this )
        } )
    }
    var old = $.fn.alert
    $.fn.alert = Plugin
    $.fn.alert.Constructor = Alert
        // ALERT NO CONFLICT
        // =================
    $.fn.alert.noConflict = function() {
            $.fn.alert = old
            return this
        }
        // ALERT DATA-API
        // ==============
    $( document ).on( 'click.bs.alert.data-api', dismiss, Alert.prototype.close )
}( jQuery );
/* ========================================================================
 * Bootstrap: button.js v3.3.0
 * http://getbootstrap.com/javascript/#buttons
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */
+ function( $ ) {
    'use strict';
    // BUTTON PUBLIC CLASS DEFINITION
    // ==============================
    var Button = function( element, options ) {
        this.$element = $( element )
        this.options = $.extend( {}, Button.DEFAULTS, options )
        this.isLoading = false
    }
    Button.VERSION = '3.3.0'
    Button.DEFAULTS = {
        loadingText: 'loading...'
    }
    Button.prototype.setState = function( state ) {
        var d = 'disabled'
        var $el = this.$element
        var val = $el.is( 'input' ) ? 'val' : 'html'
        var data = $el.data()
        state = state + 'Text'
        if ( data.resetText == null ) $el.data( 'resetText', $el[ val ]() )
            // push to event loop to allow forms to submit
        setTimeout( $.proxy( function() {
            $el[ val ]( data[ state ] == null ? this.options[ state ] : data[ state ] )
            if ( state == 'loadingText' ) {
                this.isLoading = true
                $el.addClass( d ).attr( d, d )
            } else if ( this.isLoading ) {
                this.isLoading = false
                $el.removeClass( d ).removeAttr( d )
            }
        }, this ), 0 )
    }
    Button.prototype.toggle = function() {
            var changed = true
            var $parent = this.$element.closest( '[data-toggle="buttons"]' )
            if ( $parent.length ) {
                var $input = this.$element.find( 'input' )
                if ( $input.prop( 'type' ) == 'radio' ) {
                    if ( $input.prop( 'checked' ) && this.$element.hasClass( 'active' ) ) changed = false
                    else $parent.find( '.active' ).removeClass( 'active' )
                }
                if ( changed ) $input.prop( 'checked', !this.$element.hasClass( 'active' ) ).trigger( 'change' )
            } else {
                this.$element.attr( 'aria-pressed', !this.$element.hasClass( 'active' ) )
            }
            if ( changed ) this.$element.toggleClass( 'active' )
        }
        // BUTTON PLUGIN DEFINITION
        // ========================
    function Plugin( option ) {
        return this.each( function() {
            var $this = $( this )
            var data = $this.data( 'bs.button' )
            var options = typeof option == 'object' && option
            if ( !data ) $this.data( 'bs.button', ( data = new Button( this, options ) ) )
            if ( option == 'toggle' ) data.toggle()
            else if ( option ) data.setState( option )
        } )
    }
    var old = $.fn.button
    $.fn.button = Plugin
    $.fn.button.Constructor = Button
        // BUTTON NO CONFLICT
        // ==================
    $.fn.button.noConflict = function() {
            $.fn.button = old
            return this
        }
        // BUTTON DATA-API
        // ===============
    $( document ).on( 'click.bs.button.data-api', '[data-toggle^="button"]', function( e ) {
        var $btn = $( e.target )
        if ( !$btn.hasClass( 'btn' ) ) $btn = $btn.closest( '.btn' )
        Plugin.call( $btn, 'toggle' )
        e.preventDefault()
    } ).on( 'focus.bs.button.data-api blur.bs.button.data-api', '[data-toggle^="button"]', function( e ) {
        $( e.target ).closest( '.btn' ).toggleClass( 'focus', e.type == 'focus' )
    } )
}( jQuery );
/* ========================================================================
 * Bootstrap: carousel.js v3.3.0
 * http://getbootstrap.com/javascript/#carousel
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */
+ function( $ ) {
    'use strict';
    // CAROUSEL CLASS DEFINITION
    // =========================
    var Carousel = function( element, options ) {
        this.$element = $( element )
        this.$indicators = this.$element.find( '.carousel-indicators' )
        this.options = options
        this.paused = this.sliding = this.interval = this.$active = this.$items = null
        this.options.keyboard && this.$element.on( 'keydown.bs.carousel', $.proxy( this.keydown, this ) )
        this.options.pause == 'hover' && !( 'ontouchstart' in document.documentElement ) && this.$element.on( 'mouseenter.bs.carousel', $.proxy( this.pause, this ) ).on( 'mouseleave.bs.carousel', $.proxy( this.cycle, this ) )
    }
    Carousel.VERSION = '3.3.0'
    Carousel.TRANSITION_DURATION = 600
    Carousel.DEFAULTS = {
        interval: 5000,
        pause: 'hover',
        wrap: true,
        keyboard: true
    }
    Carousel.prototype.keydown = function( e ) {
        switch ( e.which ) {
            case 37:
                this.prev();
                break
            case 39:
                this.next();
                break
            default:
                return
        }
        e.preventDefault()
    }
    Carousel.prototype.cycle = function( e ) {
        e || ( this.paused = false )
        this.interval && clearInterval( this.interval )
        this.options.interval && !this.paused && ( this.interval = setInterval( $.proxy( this.next, this ), this.options.interval ) )
        return this
    }
    Carousel.prototype.getItemIndex = function( item ) {
        this.$items = item.parent().children( '.item' )
        return this.$items.index( item || this.$active )
    }
    Carousel.prototype.getItemForDirection = function( direction, active ) {
        var delta = direction == 'prev' ? -1 : 1
        var activeIndex = this.getItemIndex( active )
        var itemIndex = ( activeIndex + delta ) % this.$items.length
        return this.$items.eq( itemIndex )
    }
    Carousel.prototype.to = function( pos ) {
        var that = this
        var activeIndex = this.getItemIndex( this.$active = this.$element.find( '.item.active' ) )
        if ( pos > ( this.$items.length - 1 ) || pos < 0 ) return
        if ( this.sliding ) return this.$element.one( 'slid.bs.carousel', function() {
                that.to( pos )
            } ) // yes, "slid"
        if ( activeIndex == pos ) return this.pause().cycle()
        return this.slide( pos > activeIndex ? 'next' : 'prev', this.$items.eq( pos ) )
    }
    Carousel.prototype.pause = function( e ) {
        e || ( this.paused = true )
        if ( this.$element.find( '.next, .prev' ).length && $.support.transition ) {
            this.$element.trigger( $.support.transition.end )
            this.cycle( true )
        }
        this.interval = clearInterval( this.interval )
        return this
    }
    Carousel.prototype.next = function() {
        if ( this.sliding ) return
        return this.slide( 'next' )
    }
    Carousel.prototype.prev = function() {
        if ( this.sliding ) return
        return this.slide( 'prev' )
    }
    Carousel.prototype.slide = function( type, next ) {
            var $active = this.$element.find( '.item.active' )
            var $next = next || this.getItemForDirection( type, $active )
            var isCycling = this.interval
            var direction = type == 'next' ? 'left' : 'right'
            var fallback = type == 'next' ? 'first' : 'last'
            var that = this
            if ( !$next.length ) {
                if ( !this.options.wrap ) return
                $next = this.$element.find( '.item' )[ fallback ]()
            }
            if ( $next.hasClass( 'active' ) ) return ( this.sliding = false )
            var relatedTarget = $next[ 0 ]
            var slideEvent = $.Event( 'slide.bs.carousel', {
                relatedTarget: relatedTarget,
                direction: direction
            } )
            this.$element.trigger( slideEvent )
            if ( slideEvent.isDefaultPrevented() ) return
            this.sliding = true
            isCycling && this.pause()
            if ( this.$indicators.length ) {
                this.$indicators.find( '.active' ).removeClass( 'active' )
                var $nextIndicator = $( this.$indicators.children()[ this.getItemIndex( $next ) ] )
                $nextIndicator && $nextIndicator.addClass( 'active' )
            }
            var slidEvent = $.Event( 'slid.bs.carousel', {
                    relatedTarget: relatedTarget,
                    direction: direction
                } ) // yes, "slid"
            if ( $.support.transition && this.$element.hasClass( 'slide' ) ) {
                $next.addClass( type )
                $next[ 0 ].offsetWidth // force reflow
                $active.addClass( direction )
                $next.addClass( direction )
                $active.one( 'bsTransitionEnd', function() {
                    $next.removeClass( [ type, direction ].join( ' ' ) ).addClass( 'active' )
                    $active.removeClass( [ 'active', direction ].join( ' ' ) )
                    that.sliding = false
                    setTimeout( function() {
                        that.$element.trigger( slidEvent )
                    }, 0 )
                } ).emulateTransitionEnd( Carousel.TRANSITION_DURATION )
            } else {
                $active.removeClass( 'active' )
                $next.addClass( 'active' )
                this.sliding = false
                this.$element.trigger( slidEvent )
            }
            isCycling && this.cycle()
            return this
        }
        // CAROUSEL PLUGIN DEFINITION
        // ==========================
    function Plugin( option ) {
        return this.each( function() {
            var $this = $( this )
            var data = $this.data( 'bs.carousel' )
            var options = $.extend( {}, Carousel.DEFAULTS, $this.data(), typeof option == 'object' && option )
            var action = typeof option == 'string' ? option : options.slide
            if ( !data ) $this.data( 'bs.carousel', ( data = new Carousel( this, options ) ) )
            if ( typeof option == 'number' ) data.to( option )
            else if ( action ) data[ action ]()
            else if ( options.interval ) data.pause().cycle()
        } )
    }
    var old = $.fn.carousel
    $.fn.carousel = Plugin
    $.fn.carousel.Constructor = Carousel
        // CAROUSEL NO CONFLICT
        // ====================
    $.fn.carousel.noConflict = function() {
            $.fn.carousel = old
            return this
        }
        // CAROUSEL DATA-API
        // =================
    var clickHandler = function( e ) {
        var href
        var $this = $( this )
        var $target = $( $this.attr( 'data-target' ) || ( href = $this.attr( 'href' ) ) && href.replace( /.*(?=#[^\s]+$)/, '' ) ) // strip for ie7
        if ( !$target.hasClass( 'carousel' ) ) return
        var options = $.extend( {}, $target.data(), $this.data() )
        var slideIndex = $this.attr( 'data-slide-to' )
        if ( slideIndex ) options.interval = false
        Plugin.call( $target, options )
        if ( slideIndex ) {
            $target.data( 'bs.carousel' ).to( slideIndex )
        }
        e.preventDefault()
    }
    $( document ).on( 'click.bs.carousel.data-api', '[data-slide]', clickHandler ).on( 'click.bs.carousel.data-api', '[data-slide-to]', clickHandler )
    $( window ).on( 'load', function() {
        $( '[data-ride="carousel"]' ).each( function() {
            var $carousel = $( this )
            Plugin.call( $carousel, $carousel.data() )
        } )
    } )
}( jQuery );
/* ========================================================================
 * Bootstrap: collapse.js v3.3.0
 * http://getbootstrap.com/javascript/#collapse
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */
+ function( $ ) {
    'use strict';
    // COLLAPSE PUBLIC CLASS DEFINITION
    // ================================
    var Collapse = function( element, options ) {
        this.$element = $( element )
        this.options = $.extend( {}, Collapse.DEFAULTS, options )
        this.$trigger = $( this.options.trigger ).filter( '[href="#' + element.id + '"], [data-target="#' + element.id + '"]' )
        this.transitioning = null
        if ( this.options.parent ) {
            this.$parent = this.getParent()
        } else {
            this.addAriaAndCollapsedClass( this.$element, this.$trigger )
        }
        if ( this.options.toggle ) this.toggle()
    }
    Collapse.VERSION = '3.3.0'
    Collapse.TRANSITION_DURATION = 350
    Collapse.DEFAULTS = {
        toggle: true,
        trigger: '[data-toggle="collapse"]'
    }
    Collapse.prototype.dimension = function() {
        var hasWidth = this.$element.hasClass( 'width' )
        return hasWidth ? 'width' : 'height'
    }
    Collapse.prototype.show = function() {
        if ( this.transitioning || this.$element.hasClass( 'in' ) ) return
        var activesData
        var actives = this.$parent && this.$parent.find( '> .panel' ).children( '.in, .collapsing' )
        if ( actives && actives.length ) {
            activesData = actives.data( 'bs.collapse' )
            if ( activesData && activesData.transitioning ) return
        }
        var startEvent = $.Event( 'show.bs.collapse' )
        this.$element.trigger( startEvent )
        if ( startEvent.isDefaultPrevented() ) return
        if ( actives && actives.length ) {
            Plugin.call( actives, 'hide' )
            activesData || actives.data( 'bs.collapse', null )
        }
        var dimension = this.dimension()
        this.$element.removeClass( 'collapse' ).addClass( 'collapsing' )[ dimension ]( 0 ).attr( 'aria-expanded', true )
        this.$trigger.removeClass( 'collapsed' ).attr( 'aria-expanded', true )
        this.transitioning = 1
        var complete = function() {
            this.$element.removeClass( 'collapsing' ).addClass( 'collapse in' )[ dimension ]( '' )
            this.transitioning = 0
            this.$element.trigger( 'shown.bs.collapse' )
        }
        if ( !$.support.transition ) return complete.call( this )
        var scrollSize = $.camelCase( [ 'scroll', dimension ].join( '-' ) )
        this.$element.one( 'bsTransitionEnd', $.proxy( complete, this ) ).emulateTransitionEnd( Collapse.TRANSITION_DURATION )[ dimension ]( this.$element[ 0 ][ scrollSize ] )
    }
    Collapse.prototype.hide = function() {
        if ( this.transitioning || !this.$element.hasClass( 'in' ) ) return
        var startEvent = $.Event( 'hide.bs.collapse' )
        this.$element.trigger( startEvent )
        if ( startEvent.isDefaultPrevented() ) return
        var dimension = this.dimension()
        this.$element[ dimension ]( this.$element[ dimension ]() )[ 0 ].offsetHeight
        this.$element.addClass( 'collapsing' ).removeClass( 'collapse in' ).attr( 'aria-expanded', false )
        this.$trigger.addClass( 'collapsed' ).attr( 'aria-expanded', false )
        this.transitioning = 1
        var complete = function() {
            this.transitioning = 0
            this.$element.removeClass( 'collapsing' ).addClass( 'collapse' ).trigger( 'hidden.bs.collapse' )
        }
        if ( !$.support.transition ) return complete.call( this )
        this.$element[ dimension ]( 0 ).one( 'bsTransitionEnd', $.proxy( complete, this ) ).emulateTransitionEnd( Collapse.TRANSITION_DURATION )
    }
    Collapse.prototype.toggle = function() {
        this[ this.$element.hasClass( 'in' ) ? 'hide' : 'show' ]()
    }
    Collapse.prototype.getParent = function() {
        return $( this.options.parent ).find( '[data-toggle="collapse"][data-parent="' + this.options.parent + '"]' ).each( $.proxy( function( i, element ) {
            var $element = $( element )
            this.addAriaAndCollapsedClass( getTargetFromTrigger( $element ), $element )
        }, this ) ).end()
    }
    Collapse.prototype.addAriaAndCollapsedClass = function( $element, $trigger ) {
        var isOpen = $element.hasClass( 'in' )
        $element.attr( 'aria-expanded', isOpen )
        $trigger.toggleClass( 'collapsed', !isOpen ).attr( 'aria-expanded', isOpen )
    }

    function getTargetFromTrigger( $trigger ) {
            var href
            var target = $trigger.attr( 'data-target' ) || ( href = $trigger.attr( 'href' ) ) && href.replace( /.*(?=#[^\s]+$)/, '' ) // strip for ie7
            return $( target )
        }
        // COLLAPSE PLUGIN DEFINITION
        // ==========================
    function Plugin( option ) {
        return this.each( function() {
            var $this = $( this )
            var data = $this.data( 'bs.collapse' )
            var options = $.extend( {}, Collapse.DEFAULTS, $this.data(), typeof option == 'object' && option )
            if ( !data && options.toggle && option == 'show' ) options.toggle = false
            if ( !data ) $this.data( 'bs.collapse', ( data = new Collapse( this, options ) ) )
            if ( typeof option == 'string' ) data[ option ]()
        } )
    }
    var old = $.fn.collapse
    $.fn.collapse = Plugin
    $.fn.collapse.Constructor = Collapse
        // COLLAPSE NO CONFLICT
        // ====================
    $.fn.collapse.noConflict = function() {
            $.fn.collapse = old
            return this
        }
        // COLLAPSE DATA-API
        // =================
    $( document ).on( 'click.bs.collapse.data-api', '[data-toggle="collapse"]', function( e ) {
        var $this = $( this )
        if ( !$this.attr( 'data-target' ) ) e.preventDefault()
        var $target = getTargetFromTrigger( $this )
        var data = $target.data( 'bs.collapse' )
        var option = data ? 'toggle' : $.extend( {}, $this.data(), {
            trigger: this
        } )
        Plugin.call( $target, option )
    } )
}( jQuery );
/* ========================================================================
 * Bootstrap: dropdown.js v3.3.0
 * http://getbootstrap.com/javascript/#dropdowns
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */
+ function( $ ) {
    'use strict';
    // DROPDOWN CLASS DEFINITION
    // =========================
    var backdrop = '.dropdown-backdrop'
    var toggle = '[data-toggle="dropdown"]'
    var Dropdown = function( element ) {
        $( element ).on( 'click.bs.dropdown', this.toggle )
    }
    Dropdown.VERSION = '3.3.0'
    Dropdown.prototype.toggle = function( e ) {
        var $this = $( this )
        if ( $this.is( '.disabled, :disabled' ) ) return
        var $parent = getParent( $this )
        var isActive = $parent.hasClass( 'open' )
        clearMenus()
        if ( !isActive ) {
            if ( 'ontouchstart' in document.documentElement && !$parent.closest( '.navbar-nav' ).length ) {
                // if mobile we use a backdrop because click events don't delegate
                $( '<div class="dropdown-backdrop"/>' ).insertAfter( $( this ) ).on( 'click', clearMenus )
            }
            var relatedTarget = {
                relatedTarget: this
            }
            $parent.trigger( e = $.Event( 'show.bs.dropdown', relatedTarget ) )
            if ( e.isDefaultPrevented() ) return
            $this.trigger( 'focus' ).attr( 'aria-expanded', 'true' )
            $parent.toggleClass( 'open' ).trigger( 'shown.bs.dropdown', relatedTarget )
        }
        return false
    }
    Dropdown.prototype.keydown = function( e ) {
        if ( !/(38|40|27|32)/.test( e.which ) ) return
        var $this = $( this )
        e.preventDefault()
        e.stopPropagation()
        if ( $this.is( '.disabled, :disabled' ) ) return
        var $parent = getParent( $this )
        var isActive = $parent.hasClass( 'open' )
        if ( ( !isActive && e.which != 27 ) || ( isActive && e.which == 27 ) ) {
            if ( e.which == 27 ) $parent.find( toggle ).trigger( 'focus' )
            return $this.trigger( 'click' )
        }
        var desc = ' li:not(.divider):visible a'
        var $items = $parent.find( '[role="menu"]' + desc + ', [role="listbox"]' + desc )
        if ( !$items.length ) return
        var index = $items.index( e.target )
        if ( e.which == 38 && index > 0 ) index-- // up
            if ( e.which == 40 && index < $items.length - 1 ) index++ // down
                if ( !~index ) index = 0
        $items.eq( index ).trigger( 'focus' )
    }

    function clearMenus( e ) {
        if ( e && e.which === 3 ) return
        $( backdrop ).remove()
        $( toggle ).each( function() {
            var $this = $( this )
            var $parent = getParent( $this )
            var relatedTarget = {
                relatedTarget: this
            }
            if ( !$parent.hasClass( 'open' ) ) return
            $parent.trigger( e = $.Event( 'hide.bs.dropdown', relatedTarget ) )
            if ( e.isDefaultPrevented() ) return
            $this.attr( 'aria-expanded', 'false' )
            $parent.removeClass( 'open' ).trigger( 'hidden.bs.dropdown', relatedTarget )
        } )
    }

    function getParent( $this ) {
            var selector = $this.attr( 'data-target' )
            if ( !selector ) {
                selector = $this.attr( 'href' )
                selector = selector && /#[A-Za-z]/.test( selector ) && selector.replace( /.*(?=#[^\s]*$)/, '' ) // strip for ie7
            }
            var $parent = selector && $( selector )
            return $parent && $parent.length ? $parent : $this.parent()
        }
        // DROPDOWN PLUGIN DEFINITION
        // ==========================
    function Plugin( option ) {
        return this.each( function() {
            var $this = $( this )
            var data = $this.data( 'bs.dropdown' )
            if ( !data ) $this.data( 'bs.dropdown', ( data = new Dropdown( this ) ) )
            if ( typeof option == 'string' ) data[ option ].call( $this )
        } )
    }
    var old = $.fn.dropdown
    $.fn.dropdown = Plugin
    $.fn.dropdown.Constructor = Dropdown
        // DROPDOWN NO CONFLICT
        // ====================
    $.fn.dropdown.noConflict = function() {
            $.fn.dropdown = old
            return this
        }
        // APPLY TO STANDARD DROPDOWN ELEMENTS
        // ===================================
    $( document ).on( 'click.bs.dropdown.data-api', clearMenus ).on( 'click.bs.dropdown.data-api', '.dropdown form', function( e ) {
        e.stopPropagation()
    } ).on( 'click.bs.dropdown.data-api', toggle, Dropdown.prototype.toggle ).on( 'keydown.bs.dropdown.data-api', toggle, Dropdown.prototype.keydown ).on( 'keydown.bs.dropdown.data-api', '[role="menu"]', Dropdown.prototype.keydown ).on( 'keydown.bs.dropdown.data-api', '[role="listbox"]', Dropdown.prototype.keydown )
}( jQuery );
/* ========================================================================
 * Bootstrap: modal.js v3.3.0
 * http://getbootstrap.com/javascript/#modals
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */
+ function( $ ) {
    'use strict';
    // MODAL CLASS DEFINITION
    // ======================
    var Modal = function( element, options ) {
        this.options = options
        this.$body = $( document.body )
        this.$element = $( element )
        this.$backdrop = this.isShown = null
        this.scrollbarWidth = 0
        if ( this.options.remote ) {
            this.$element.find( '.modal-content' ).load( this.options.remote, $.proxy( function() {
                this.$element.trigger( 'loaded.bs.modal' )
            }, this ) )
        }
    }
    Modal.VERSION = '3.3.0'
    Modal.TRANSITION_DURATION = 300
    Modal.BACKDROP_TRANSITION_DURATION = 150
    Modal.DEFAULTS = {
        backdrop: true,
        keyboard: true,
        show: true
    }
    Modal.prototype.toggle = function( _relatedTarget ) {
        return this.isShown ? this.hide() : this.show( _relatedTarget )
    }
    Modal.prototype.show = function( _relatedTarget ) {
        var that = this
        var e = $.Event( 'show.bs.modal', {
            relatedTarget: _relatedTarget
        } )
        this.$element.trigger( e )
        if ( this.isShown || e.isDefaultPrevented() ) return
        this.isShown = true
        this.checkScrollbar()
        this.$body.addClass( 'modal-open' )
        this.setScrollbar()
        this.escape()
        this.$element.on( 'click.dismiss.bs.modal', '[data-dismiss="modal"]', $.proxy( this.hide, this ) )
        this.backdrop( function() {
            var transition = $.support.transition && that.$element.hasClass( 'fade' )
            if ( !that.$element.parent().length ) {
                that.$element.appendTo( that.$body ) // don't move modals dom position
            }
            that.$element.show().scrollTop( 0 )
            if ( transition ) {
                that.$element[ 0 ].offsetWidth // force reflow
            }
            that.$element.addClass( 'in' ).attr( 'aria-hidden', false )
            that.enforceFocus()
            var e = $.Event( 'shown.bs.modal', {
                relatedTarget: _relatedTarget
            } )
            transition ? that.$element.find( '.modal-dialog' ) // wait for modal to slide in
                .one( 'bsTransitionEnd', function() {
                    that.$element.trigger( 'focus' ).trigger( e )
                } ).emulateTransitionEnd( Modal.TRANSITION_DURATION ) : that.$element.trigger( 'focus' ).trigger( e )
        } )
    }
    Modal.prototype.hide = function( e ) {
        if ( e ) e.preventDefault()
        e = $.Event( 'hide.bs.modal' )
        this.$element.trigger( e )
        if ( !this.isShown || e.isDefaultPrevented() ) return
        this.isShown = false
        this.escape()
        $( document ).off( 'focusin.bs.modal' )
        this.$element.removeClass( 'in' ).attr( 'aria-hidden', true ).off( 'click.dismiss.bs.modal' )
        $.support.transition && this.$element.hasClass( 'fade' ) ? this.$element.one( 'bsTransitionEnd', $.proxy( this.hideModal, this ) ).emulateTransitionEnd( Modal.TRANSITION_DURATION ) : this.hideModal()
    }
    Modal.prototype.enforceFocus = function() {
        $( document ).off( 'focusin.bs.modal' ) // guard against infinite focus loop
            .on( 'focusin.bs.modal', $.proxy( function( e ) {
                if ( this.$element[ 0 ] !== e.target && !this.$element.has( e.target ).length ) {
                    this.$element.trigger( 'focus' )
                }
            }, this ) )
    }
    Modal.prototype.escape = function() {
        if ( this.isShown && this.options.keyboard ) {
            this.$element.on( 'keydown.dismiss.bs.modal', $.proxy( function( e ) {
                e.which == 27 && this.hide()
            }, this ) )
        } else if ( !this.isShown ) {
            this.$element.off( 'keydown.dismiss.bs.modal' )
        }
    }
    Modal.prototype.hideModal = function() {
        var that = this
        this.$element.hide()
        this.backdrop( function() {
            that.$body.removeClass( 'modal-open' )
            that.resetScrollbar()
            that.$element.trigger( 'hidden.bs.modal' )
        } )
    }
    Modal.prototype.removeBackdrop = function() {
        this.$backdrop && this.$backdrop.remove()
        this.$backdrop = null
    }
    Modal.prototype.backdrop = function( callback ) {
        var that = this
        var animate = this.$element.hasClass( 'fade' ) ? 'fade' : ''
        if ( this.isShown && this.options.backdrop ) {
            var doAnimate = $.support.transition && animate
            this.$backdrop = $( '<div class="modal-backdrop ' + animate + '" />' ).prependTo( this.$element ).on( 'click.dismiss.bs.modal', $.proxy( function( e ) {
                if ( e.target !== e.currentTarget ) return
                this.options.backdrop == 'static' ? this.$element[ 0 ].focus.call( this.$element[ 0 ] ) : this.hide.call( this )
            }, this ) )
            if ( doAnimate ) this.$backdrop[ 0 ].offsetWidth // force reflow
            this.$backdrop.addClass( 'in' )
            if ( !callback ) return
            doAnimate ? this.$backdrop.one( 'bsTransitionEnd', callback ).emulateTransitionEnd( Modal.BACKDROP_TRANSITION_DURATION ) : callback()
        } else if ( !this.isShown && this.$backdrop ) {
            this.$backdrop.removeClass( 'in' )
            var callbackRemove = function() {
                that.removeBackdrop()
                callback && callback()
            }
            $.support.transition && this.$element.hasClass( 'fade' ) ? this.$backdrop.one( 'bsTransitionEnd', callbackRemove ).emulateTransitionEnd( Modal.BACKDROP_TRANSITION_DURATION ) : callbackRemove()
        } else if ( callback ) {
            callback()
        }
    }
    Modal.prototype.checkScrollbar = function() {
        this.scrollbarWidth = this.measureScrollbar()
    }
    Modal.prototype.setScrollbar = function() {
        var bodyPad = parseInt( ( this.$body.css( 'padding-right' ) || 0 ), 10 )
        if ( this.scrollbarWidth ) this.$body.css( 'padding-right', bodyPad + this.scrollbarWidth )
    }
    Modal.prototype.resetScrollbar = function() {
        this.$body.css( 'padding-right', '' )
    }
    Modal.prototype.measureScrollbar = function() { // thx walsh
            if ( document.body.clientWidth >= window.innerWidth ) return 0
            var scrollDiv = document.createElement( 'div' )
            scrollDiv.className = 'modal-scrollbar-measure'
            this.$body.append( scrollDiv )
            var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth
            this.$body[ 0 ].removeChild( scrollDiv )
            return scrollbarWidth
        }
        // MODAL PLUGIN DEFINITION
        // =======================
    function Plugin( option, _relatedTarget ) {
        return this.each( function() {
            var $this = $( this )
            var data = $this.data( 'bs.modal' )
            var options = $.extend( {}, Modal.DEFAULTS, $this.data(), typeof option == 'object' && option )
            if ( !data ) $this.data( 'bs.modal', ( data = new Modal( this, options ) ) )
            if ( typeof option == 'string' ) data[ option ]( _relatedTarget )
            else if ( options.show ) data.show( _relatedTarget )
        } )
    }
    var old = $.fn.modal
    $.fn.modal = Plugin
    $.fn.modal.Constructor = Modal
        // MODAL NO CONFLICT
        // =================
    $.fn.modal.noConflict = function() {
            $.fn.modal = old
            return this
        }
        // MODAL DATA-API
        // ==============
    $( document ).on( 'click.bs.modal.data-api', '[data-toggle="modal"]', function( e ) {
        var $this = $( this )
        var href = $this.attr( 'href' )
        var $target = $( $this.attr( 'data-target' ) || ( href && href.replace( /.*(?=#[^\s]+$)/, '' ) ) ) // strip for ie7
        var option = $target.data( 'bs.modal' ) ? 'toggle' : $.extend( {
            remote: !/#/.test( href ) && href
        }, $target.data(), $this.data() )
        if ( $this.is( 'a' ) ) e.preventDefault()
        $target.one( 'show.bs.modal', function( showEvent ) {
            if ( showEvent.isDefaultPrevented() ) return // only register focus restorer if modal will actually get shown
            $target.one( 'hidden.bs.modal', function() {
                $this.is( ':visible' ) && $this.trigger( 'focus' )
            } )
        } )
        Plugin.call( $target, option, this )
    } )
}( jQuery );
/* ========================================================================
 * Bootstrap: tooltip.js v3.3.0
 * http://getbootstrap.com/javascript/#tooltip
 * Inspired by the original jQuery.tipsy by Jason Frame
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */
+ function( $ ) {
    'use strict';
    // TOOLTIP PUBLIC CLASS DEFINITION
    // ===============================
    var Tooltip = function( element, options ) {
        this.type = this.options = this.enabled = this.timeout = this.hoverState = this.$element = null
        this.init( 'tooltip', element, options )
    }
    Tooltip.VERSION = '3.3.0'
    Tooltip.TRANSITION_DURATION = 150
    Tooltip.DEFAULTS = {
        animation: true,
        placement: 'top',
        selector: false,
        template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: 'hover focus',
        title: '',
        delay: 0,
        html: false,
        container: false,
        viewport: {
            selector: 'body',
            padding: 0
        }
    }
    Tooltip.prototype.init = function( type, element, options ) {
        this.enabled = true
        this.type = type
        this.$element = $( element )
        this.options = this.getOptions( options )
        this.$viewport = this.options.viewport && $( this.options.viewport.selector || this.options.viewport )
        var triggers = this.options.trigger.split( ' ' )
        for ( var i = triggers.length; i--; ) {
            var trigger = triggers[ i ]
            if ( trigger == 'click' ) {
                this.$element.on( 'click.' + this.type, this.options.selector, $.proxy( this.toggle, this ) )
            } else if ( trigger != 'manual' ) {
                var eventIn = trigger == 'hover' ? 'mouseenter' : 'focusin'
                var eventOut = trigger == 'hover' ? 'mouseleave' : 'focusout'
                this.$element.on( eventIn + '.' + this.type, this.options.selector, $.proxy( this.enter, this ) )
                this.$element.on( eventOut + '.' + this.type, this.options.selector, $.proxy( this.leave, this ) )
            }
        }
        this.options.selector ? ( this._options = $.extend( {}, this.options, {
            trigger: 'manual',
            selector: ''
        } ) ) : this.fixTitle()
    }
    Tooltip.prototype.getDefaults = function() {
        return Tooltip.DEFAULTS
    }
    Tooltip.prototype.getOptions = function( options ) {
        options = $.extend( {}, this.getDefaults(), this.$element.data(), options )
        if ( options.delay && typeof options.delay == 'number' ) {
            options.delay = {
                show: options.delay,
                hide: options.delay
            }
        }
        return options
    }
    Tooltip.prototype.getDelegateOptions = function() {
        var options = {}
        var defaults = this.getDefaults()
        this._options && $.each( this._options, function( key, value ) {
            if ( defaults[ key ] != value ) options[ key ] = value
        } )
        return options
    }
    Tooltip.prototype.enter = function( obj ) {
        var self = obj instanceof this.constructor ? obj : $( obj.currentTarget ).data( 'bs.' + this.type )
        if ( self && self.$tip && self.$tip.is( ':visible' ) ) {
            self.hoverState = 'in'
            return
        }
        if ( !self ) {
            self = new this.constructor( obj.currentTarget, this.getDelegateOptions() )
            $( obj.currentTarget ).data( 'bs.' + this.type, self )
        }
        clearTimeout( self.timeout )
        self.hoverState = 'in'
        if ( !self.options.delay || !self.options.delay.show ) return self.show()
        self.timeout = setTimeout( function() {
            if ( self.hoverState == 'in' ) self.show()
        }, self.options.delay.show )
    }
    Tooltip.prototype.leave = function( obj ) {
        var self = obj instanceof this.constructor ? obj : $( obj.currentTarget ).data( 'bs.' + this.type )
        if ( !self ) {
            self = new this.constructor( obj.currentTarget, this.getDelegateOptions() )
            $( obj.currentTarget ).data( 'bs.' + this.type, self )
        }
        clearTimeout( self.timeout )
        self.hoverState = 'out'
        if ( !self.options.delay || !self.options.delay.hide ) return self.hide()
        self.timeout = setTimeout( function() {
            if ( self.hoverState == 'out' ) self.hide()
        }, self.options.delay.hide )
    }
    Tooltip.prototype.show = function() {
        var e = $.Event( 'show.bs.' + this.type )
        if ( this.hasContent() && this.enabled ) {
            this.$element.trigger( e )
            var inDom = $.contains( this.$element[ 0 ].ownerDocument.documentElement, this.$element[ 0 ] )
            if ( e.isDefaultPrevented() || !inDom ) return
            var that = this
            var $tip = this.tip()
            var tipId = this.getUID( this.type )
            this.setContent()
            $tip.attr( 'id', tipId )
            this.$element.attr( 'aria-describedby', tipId )
            if ( this.options.animation ) $tip.addClass( 'fade' )
            var placement = typeof this.options.placement == 'function' ? this.options.placement.call( this, $tip[ 0 ], this.$element[ 0 ] ) : this.options.placement
            var autoToken = /\s?auto?\s?/i
            var autoPlace = autoToken.test( placement )
            if ( autoPlace ) placement = placement.replace( autoToken, '' ) || 'top'
            $tip.detach().css( {
                top: 0,
                left: 0,
                display: 'block'
            } ).addClass( placement ).data( 'bs.' + this.type, this )
            this.options.container ? $tip.appendTo( this.options.container ) : $tip.insertAfter( this.$element )
            var pos = this.getPosition()
            var actualWidth = $tip[ 0 ].offsetWidth
            var actualHeight = $tip[ 0 ].offsetHeight
            if ( autoPlace ) {
                var orgPlacement = placement
                var $container = this.options.container ? $( this.options.container ) : this.$element.parent()
                var containerDim = this.getPosition( $container )
                placement = placement == 'bottom' && pos.bottom + actualHeight > containerDim.bottom ? 'top' : placement == 'top' && pos.top - actualHeight < containerDim.top ? 'bottom' : placement == 'right' && pos.right + actualWidth > containerDim.width ? 'left' : placement == 'left' && pos.left - actualWidth < containerDim.left ? 'right' : placement
                $tip.removeClass( orgPlacement ).addClass( placement )
            }
            var calculatedOffset = this.getCalculatedOffset( placement, pos, actualWidth, actualHeight )
            this.applyPlacement( calculatedOffset, placement )
            var complete = function() {
                var prevHoverState = that.hoverState
                that.$element.trigger( 'shown.bs.' + that.type )
                that.hoverState = null
                if ( prevHoverState == 'out' ) that.leave( that )
            }
            $.support.transition && this.$tip.hasClass( 'fade' ) ? $tip.one( 'bsTransitionEnd', complete ).emulateTransitionEnd( Tooltip.TRANSITION_DURATION ) : complete()
        }
    }
    Tooltip.prototype.applyPlacement = function( offset, placement ) {
        var $tip = this.tip()
        var width = $tip[ 0 ].offsetWidth
        var height = $tip[ 0 ].offsetHeight
            // manually read margins because getBoundingClientRect includes difference
        var marginTop = parseInt( $tip.css( 'margin-top' ), 10 )
        var marginLeft = parseInt( $tip.css( 'margin-left' ), 10 )
            // we must check for NaN for ie 8/9
        if ( isNaN( marginTop ) ) marginTop = 0
        if ( isNaN( marginLeft ) ) marginLeft = 0
        offset.top = offset.top + marginTop
        offset.left = offset.left + marginLeft
            // $.fn.offset doesn't round pixel values
            // so we use setOffset directly with our own function B-0
        $.offset.setOffset( $tip[ 0 ], $.extend( {
            using: function( props ) {
                $tip.css( {
                    top: Math.round( props.top ),
                    left: Math.round( props.left )
                } )
            }
        }, offset ), 0 )
        $tip.addClass( 'in' )
            // check to see if placing tip in new offset caused the tip to resize itself
        var actualWidth = $tip[ 0 ].offsetWidth
        var actualHeight = $tip[ 0 ].offsetHeight
        if ( placement == 'top' && actualHeight != height ) {
            offset.top = offset.top + height - actualHeight
        }
        var delta = this.getViewportAdjustedDelta( placement, offset, actualWidth, actualHeight )
        if ( delta.left ) offset.left += delta.left
        else offset.top += delta.top
        var isVertical = /top|bottom/.test( placement )
        var arrowDelta = isVertical ? delta.left * 2 - width + actualWidth : delta.top * 2 - height + actualHeight
        var arrowOffsetPosition = isVertical ? 'offsetWidth' : 'offsetHeight'
        $tip.offset( offset )
        this.replaceArrow( arrowDelta, $tip[ 0 ][ arrowOffsetPosition ], isVertical )
    }
    Tooltip.prototype.replaceArrow = function( delta, dimension, isHorizontal ) {
        this.arrow().css( isHorizontal ? 'left' : 'top', 50 * ( 1 - delta / dimension ) + '%' ).css( isHorizontal ? 'top' : 'left', '' )
    }
    Tooltip.prototype.setContent = function() {
        var $tip = this.tip()
        var title = this.getTitle()
        $tip.find( '.tooltip-inner' )[ this.options.html ? 'html' : 'text' ]( title )
        $tip.removeClass( 'fade in top bottom left right' )
    }
    Tooltip.prototype.hide = function( callback ) {
        var that = this
        var $tip = this.tip()
        var e = $.Event( 'hide.bs.' + this.type )

        function complete() {
            if ( that.hoverState != 'in' ) $tip.detach()
            that.$element.removeAttr( 'aria-describedby' ).trigger( 'hidden.bs.' + that.type )
            callback && callback()
        }
        this.$element.trigger( e )
        if ( e.isDefaultPrevented() ) return
        $tip.removeClass( 'in' )
        $.support.transition && this.$tip.hasClass( 'fade' ) ? $tip.one( 'bsTransitionEnd', complete ).emulateTransitionEnd( Tooltip.TRANSITION_DURATION ) : complete()
        this.hoverState = null
        return this
    }
    Tooltip.prototype.fixTitle = function() {
        var $e = this.$element
        if ( $e.attr( 'title' ) || typeof( $e.attr( 'data-original-title' ) ) != 'string' ) {
            $e.attr( 'data-original-title', $e.attr( 'title' ) || '' ).attr( 'title', '' )
        }
    }
    Tooltip.prototype.hasContent = function() {
        return this.getTitle()
    }
    Tooltip.prototype.getPosition = function( $element ) {
        $element = $element || this.$element
        var el = $element[ 0 ]
        var isBody = el.tagName == 'BODY'
        var elRect = el.getBoundingClientRect()
        if ( elRect.width == null ) {
            // width and height are missing in IE8, so compute them manually; see https://github.com/twbs/bootstrap/issues/14093
            elRect = $.extend( {}, elRect, {
                width: elRect.right - elRect.left,
                height: elRect.bottom - elRect.top
            } )
        }
        var elOffset = isBody ? {
            top: 0,
            left: 0
        } : $element.offset()
        var scroll = {
            scroll: isBody ? document.documentElement.scrollTop || document.body.scrollTop : $element.scrollTop()
        }
        var outerDims = isBody ? {
            width: $( window ).width(),
            height: $( window ).height()
        } : null
        return $.extend( {}, elRect, scroll, outerDims, elOffset )
    }
    Tooltip.prototype.getCalculatedOffset = function( placement, pos, actualWidth, actualHeight ) {
        return placement == 'bottom' ? {
                top: pos.top + pos.height,
                left: pos.left + pos.width / 2 - actualWidth / 2
            } : placement == 'top' ? {
                top: pos.top - actualHeight,
                left: pos.left + pos.width / 2 - actualWidth / 2
            } : placement == 'left' ? {
                top: pos.top + pos.height / 2 - actualHeight / 2,
                left: pos.left - actualWidth
            } :
            /* placement == 'right' */
            {
                top: pos.top + pos.height / 2 - actualHeight / 2,
                left: pos.left + pos.width
            }
    }
    Tooltip.prototype.getViewportAdjustedDelta = function( placement, pos, actualWidth, actualHeight ) {
        var delta = {
            top: 0,
            left: 0
        }
        if ( !this.$viewport ) return delta
        var viewportPadding = this.options.viewport && this.options.viewport.padding || 0
        var viewportDimensions = this.getPosition( this.$viewport )
        if ( /right|left/.test( placement ) ) {
            var topEdgeOffset = pos.top - viewportPadding - viewportDimensions.scroll
            var bottomEdgeOffset = pos.top + viewportPadding - viewportDimensions.scroll + actualHeight
            if ( topEdgeOffset < viewportDimensions.top ) { // top overflow
                delta.top = viewportDimensions.top - topEdgeOffset
            } else if ( bottomEdgeOffset > viewportDimensions.top + viewportDimensions.height ) { // bottom overflow
                delta.top = viewportDimensions.top + viewportDimensions.height - bottomEdgeOffset
            }
        } else {
            var leftEdgeOffset = pos.left - viewportPadding
            var rightEdgeOffset = pos.left + viewportPadding + actualWidth
            if ( leftEdgeOffset < viewportDimensions.left ) { // left overflow
                delta.left = viewportDimensions.left - leftEdgeOffset
            } else if ( rightEdgeOffset > viewportDimensions.width ) { // right overflow
                delta.left = viewportDimensions.left + viewportDimensions.width - rightEdgeOffset
            }
        }
        return delta
    }
    Tooltip.prototype.getTitle = function() {
        var title
        var $e = this.$element
        var o = this.options
        title = $e.attr( 'data-original-title' ) || ( typeof o.title == 'function' ? o.title.call( $e[ 0 ] ) : o.title )
        return title
    }
    Tooltip.prototype.getUID = function( prefix ) {
        do prefix += ~~( Math.random() * 1000000 )
        while ( document.getElementById( prefix ) )
        return prefix
    }
    Tooltip.prototype.tip = function() {
        return ( this.$tip = this.$tip || $( this.options.template ) )
    }
    Tooltip.prototype.arrow = function() {
        return ( this.$arrow = this.$arrow || this.tip().find( '.tooltip-arrow' ) )
    }
    Tooltip.prototype.enable = function() {
        this.enabled = true
    }
    Tooltip.prototype.disable = function() {
        this.enabled = false
    }
    Tooltip.prototype.toggleEnabled = function() {
        this.enabled = !this.enabled
    }
    Tooltip.prototype.toggle = function( e ) {
        var self = this
        if ( e ) {
            self = $( e.currentTarget ).data( 'bs.' + this.type )
            if ( !self ) {
                self = new this.constructor( e.currentTarget, this.getDelegateOptions() )
                $( e.currentTarget ).data( 'bs.' + this.type, self )
            }
        }
        self.tip().hasClass( 'in' ) ? self.leave( self ) : self.enter( self )
    }
    Tooltip.prototype.destroy = function() {
            var that = this
            clearTimeout( this.timeout )
            this.hide( function() {
                that.$element.off( '.' + that.type ).removeData( 'bs.' + that.type )
            } )
        }
        // TOOLTIP PLUGIN DEFINITION
        // =========================
    function Plugin( option ) {
        return this.each( function() {
            var $this = $( this )
            var data = $this.data( 'bs.tooltip' )
            var options = typeof option == 'object' && option
            var selector = options && options.selector
            if ( !data && option == 'destroy' ) return
            if ( selector ) {
                if ( !data ) $this.data( 'bs.tooltip', ( data = {} ) )
                if ( !data[ selector ] ) data[ selector ] = new Tooltip( this, options )
            } else {
                if ( !data ) $this.data( 'bs.tooltip', ( data = new Tooltip( this, options ) ) )
            }
            if ( typeof option == 'string' ) data[ option ]()
        } )
    }
    var old = $.fn.tooltip
    $.fn.tooltip = Plugin
    $.fn.tooltip.Constructor = Tooltip
        // TOOLTIP NO CONFLICT
        // ===================
    $.fn.tooltip.noConflict = function() {
        $.fn.tooltip = old
        return this
    }
}( jQuery );
/* ========================================================================
 * Bootstrap: popover.js v3.3.0
 * http://getbootstrap.com/javascript/#popovers
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */
+ function( $ ) {
    'use strict';
    // POPOVER PUBLIC CLASS DEFINITION
    // ===============================
    var Popover = function( element, options ) {
        this.init( 'popover', element, options )
    }
    if ( !$.fn.tooltip ) throw new Error( 'Popover requires tooltip.js' )
    Popover.VERSION = '3.3.0'
    Popover.DEFAULTS = $.extend( {}, $.fn.tooltip.Constructor.DEFAULTS, {
            placement: 'right',
            trigger: 'click',
            content: '',
            template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
        } )
        // NOTE: POPOVER EXTENDS tooltip.js
        // ================================
    Popover.prototype = $.extend( {}, $.fn.tooltip.Constructor.prototype )
    Popover.prototype.constructor = Popover
    Popover.prototype.getDefaults = function() {
        return Popover.DEFAULTS
    }
    Popover.prototype.setContent = function() {
        var $tip = this.tip()
        var title = this.getTitle()
        var content = this.getContent()
        $tip.find( '.popover-title' )[ this.options.html ? 'html' : 'text' ]( title )
        $tip.find( '.popover-content' ).children().detach().end()[ // we use append for html objects to maintain js events
            this.options.html ? ( typeof content == 'string' ? 'html' : 'append' ) : 'text' ]( content )
        $tip.removeClass( 'fade top bottom left right in' )
            // IE8 doesn't accept hiding via the `:empty` pseudo selector, we have to do
            // this manually by checking the contents.
        if ( !$tip.find( '.popover-title' ).html() ) $tip.find( '.popover-title' ).hide()
    }
    Popover.prototype.hasContent = function() {
        return this.getTitle() || this.getContent()
    }
    Popover.prototype.getContent = function() {
        var $e = this.$element
        var o = this.options
        return $e.attr( 'data-content' ) || ( typeof o.content == 'function' ? o.content.call( $e[ 0 ] ) : o.content )
    }
    Popover.prototype.arrow = function() {
        return ( this.$arrow = this.$arrow || this.tip().find( '.arrow' ) )
    }
    Popover.prototype.tip = function() {
            if ( !this.$tip ) this.$tip = $( this.options.template )
            return this.$tip
        }
        // POPOVER PLUGIN DEFINITION
        // =========================
    function Plugin( option ) {
        return this.each( function() {
            var $this = $( this )
            var data = $this.data( 'bs.popover' )
            var options = typeof option == 'object' && option
            var selector = options && options.selector
            if ( !data && option == 'destroy' ) return
            if ( selector ) {
                if ( !data ) $this.data( 'bs.popover', ( data = {} ) )
                if ( !data[ selector ] ) data[ selector ] = new Popover( this, options )
            } else {
                if ( !data ) $this.data( 'bs.popover', ( data = new Popover( this, options ) ) )
            }
            if ( typeof option == 'string' ) data[ option ]()
        } )
    }
    var old = $.fn.popover
    $.fn.popover = Plugin
    $.fn.popover.Constructor = Popover
        // POPOVER NO CONFLICT
        // ===================
    $.fn.popover.noConflict = function() {
        $.fn.popover = old
        return this
    }
}( jQuery );
/* ========================================================================
 * Bootstrap: scrollspy.js v3.3.0
 * http://getbootstrap.com/javascript/#scrollspy
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */
+ function( $ ) {
    'use strict';
    // SCROLLSPY CLASS DEFINITION
    // ==========================
    function ScrollSpy( element, options ) {
        var process = $.proxy( this.process, this )
        this.$body = $( 'body' )
        this.$scrollElement = $( element ).is( 'body' ) ? $( window ) : $( element )
        this.options = $.extend( {}, ScrollSpy.DEFAULTS, options )
        this.selector = ( this.options.target || '' ) + ' .nav li > a'
        this.offsets = []
        this.targets = []
        this.activeTarget = null
        this.scrollHeight = 0
        this.$scrollElement.on( 'scroll.bs.scrollspy', process )
        this.refresh()
        this.process()
    }
    ScrollSpy.VERSION = '3.3.0'
    ScrollSpy.DEFAULTS = {
        offset: 10
    }
    ScrollSpy.prototype.getScrollHeight = function() {
        return this.$scrollElement[ 0 ].scrollHeight || Math.max( this.$body[ 0 ].scrollHeight, document.documentElement.scrollHeight )
    }
    ScrollSpy.prototype.refresh = function() {
        var offsetMethod = 'offset'
        var offsetBase = 0
        if ( !$.isWindow( this.$scrollElement[ 0 ] ) ) {
            offsetMethod = 'position'
            offsetBase = this.$scrollElement.scrollTop()
        }
        this.offsets = []
        this.targets = []
        this.scrollHeight = this.getScrollHeight()
        var self = this
        this.$body.find( this.selector ).map( function() {
            var $el = $( this )
            var href = $el.data( 'target' ) || $el.attr( 'href' )
            var $href = /^#./.test( href ) && $( href )
            return ( $href && $href.length && $href.is( ':visible' ) && [ [ $href[ offsetMethod ]().top + offsetBase, href ] ] ) || null
        } ).sort( function( a, b ) {
            return a[ 0 ] - b[ 0 ]
        } ).each( function() {
            self.offsets.push( this[ 0 ] )
            self.targets.push( this[ 1 ] )
        } )
    }
    ScrollSpy.prototype.process = function() {
        var scrollTop = this.$scrollElement.scrollTop() + this.options.offset
        var scrollHeight = this.getScrollHeight()
        var maxScroll = this.options.offset + scrollHeight - this.$scrollElement.height()
        var offsets = this.offsets
        var targets = this.targets
        var activeTarget = this.activeTarget
        var i
        if ( this.scrollHeight != scrollHeight ) {
            this.refresh()
        }
        if ( scrollTop >= maxScroll ) {
            return activeTarget != ( i = targets[ targets.length - 1 ] ) && this.activate( i )
        }
        if ( activeTarget && scrollTop < offsets[ 0 ] ) {
            this.activeTarget = null
            return this.clear()
        }
        for ( i = offsets.length; i--; ) {
            activeTarget != targets[ i ] && scrollTop >= offsets[ i ] && ( !offsets[ i + 1 ] || scrollTop <= offsets[ i + 1 ] ) && this.activate( targets[ i ] )
        }
    }
    ScrollSpy.prototype.activate = function( target ) {
        this.activeTarget = target
        this.clear()
        var selector = this.selector + '[data-target="' + target + '"],' + this.selector + '[href="' + target + '"]'
        var active = $( selector ).parents( 'li' ).addClass( 'active' )
        if ( active.parent( '.dropdown-menu' ).length ) {
            active = active.closest( 'li.dropdown' ).addClass( 'active' )
        }
        active.trigger( 'activate.bs.scrollspy' )
    }
    ScrollSpy.prototype.clear = function() {
            $( this.selector ).parentsUntil( this.options.target, '.active' ).removeClass( 'active' )
        }
        // SCROLLSPY PLUGIN DEFINITION
        // ===========================
    function Plugin( option ) {
        return this.each( function() {
            var $this = $( this )
            var data = $this.data( 'bs.scrollspy' )
            var options = typeof option == 'object' && option
            if ( !data ) $this.data( 'bs.scrollspy', ( data = new ScrollSpy( this, options ) ) )
            if ( typeof option == 'string' ) data[ option ]()
        } )
    }
    var old = $.fn.scrollspy
    $.fn.scrollspy = Plugin
    $.fn.scrollspy.Constructor = ScrollSpy
        // SCROLLSPY NO CONFLICT
        // =====================
    $.fn.scrollspy.noConflict = function() {
            $.fn.scrollspy = old
            return this
        }
        // SCROLLSPY DATA-API
        // ==================
    $( window ).on( 'load.bs.scrollspy.data-api', function() {
        $( '[data-spy="scroll"]' ).each( function() {
            var $spy = $( this )
            Plugin.call( $spy, $spy.data() )
        } )
    } )
}( jQuery );
/* ========================================================================
 * Bootstrap: tab.js v3.3.0
 * http://getbootstrap.com/javascript/#tabs
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */
+ function( $ ) {
    'use strict';
    // TAB CLASS DEFINITION
    // ====================
    var Tab = function( element ) {
        this.element = $( element )
    }
    Tab.VERSION = '3.3.0'
    Tab.TRANSITION_DURATION = 150
    Tab.prototype.show = function() {
        var $this = this.element
        var $ul = $this.closest( 'ul:not(.dropdown-menu)' )
        var selector = $this.data( 'target' )
        if ( !selector ) {
            selector = $this.attr( 'href' )
            selector = selector && selector.replace( /.*(?=#[^\s]*$)/, '' ) // strip for ie7
        }
        if ( $this.parent( 'li' ).hasClass( 'active' ) ) return
        var $previous = $ul.find( '.active:last a' )
        var hideEvent = $.Event( 'hide.bs.tab', {
            relatedTarget: $this[ 0 ]
        } )
        var showEvent = $.Event( 'show.bs.tab', {
            relatedTarget: $previous[ 0 ]
        } )
        $previous.trigger( hideEvent )
        $this.trigger( showEvent )
        if ( showEvent.isDefaultPrevented() || hideEvent.isDefaultPrevented() ) return
        var $target = $( selector )
        this.activate( $this.closest( 'li' ), $ul )
        this.activate( $target, $target.parent(), function() {
            $previous.trigger( {
                type: 'hidden.bs.tab',
                relatedTarget: $this[ 0 ]
            } )
            $this.trigger( {
                type: 'shown.bs.tab',
                relatedTarget: $previous[ 0 ]
            } )
        } )
    }
    Tab.prototype.activate = function( element, container, callback ) {
            var $active = container.find( '> .active' )
            var transition = callback && $.support.transition && ( ( $active.length && $active.hasClass( 'fade' ) ) || !!container.find( '> .fade' ).length )

            function next() {
                $active.removeClass( 'active' ).find( '> .dropdown-menu > .active' ).removeClass( 'active' ).end().find( '[data-toggle="tab"]' ).attr( 'aria-expanded', false )
                element.addClass( 'active' ).find( '[data-toggle="tab"]' ).attr( 'aria-expanded', true )
                if ( transition ) {
                    element[ 0 ].offsetWidth // reflow for transition
                    element.addClass( 'in' )
                } else {
                    element.removeClass( 'fade' )
                }
                if ( element.parent( '.dropdown-menu' ) ) {
                    element.closest( 'li.dropdown' ).addClass( 'active' ).end().find( '[data-toggle="tab"]' ).attr( 'aria-expanded', true )
                }
                callback && callback()
            }
            $active.length && transition ? $active.one( 'bsTransitionEnd', next ).emulateTransitionEnd( Tab.TRANSITION_DURATION ) : next()
            $active.removeClass( 'in' )
        }
        // TAB PLUGIN DEFINITION
        // =====================
    function Plugin( option ) {
        return this.each( function() {
            var $this = $( this )
            var data = $this.data( 'bs.tab' )
            if ( !data ) $this.data( 'bs.tab', ( data = new Tab( this ) ) )
            if ( typeof option == 'string' ) data[ option ]()
        } )
    }
    var old = $.fn.tab
    $.fn.tab = Plugin
    $.fn.tab.Constructor = Tab
        // TAB NO CONFLICT
        // ===============
    $.fn.tab.noConflict = function() {
            $.fn.tab = old
            return this
        }
        // TAB DATA-API
        // ============
    var clickHandler = function( e ) {
        e.preventDefault()
        Plugin.call( $( this ), 'show' )
    }
    $( document ).on( 'click.bs.tab.data-api', '[data-toggle="tab"]', clickHandler ).on( 'click.bs.tab.data-api', '[data-toggle="pill"]', clickHandler )
}( jQuery );
/* ========================================================================
 * Bootstrap: affix.js v3.3.0
 * http://getbootstrap.com/javascript/#affix
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */
+ function( $ ) {
    'use strict';
    // AFFIX CLASS DEFINITION
    // ======================
    var Affix = function( element, options ) {
        this.options = $.extend( {}, Affix.DEFAULTS, options )
        this.$target = $( this.options.target ).on( 'scroll.bs.affix.data-api', $.proxy( this.checkPosition, this ) ).on( 'click.bs.affix.data-api', $.proxy( this.checkPositionWithEventLoop, this ) )
        this.$element = $( element )
        this.affixed = this.unpin = this.pinnedOffset = null
        this.checkPosition()
    }
    Affix.VERSION = '3.3.0'
    Affix.RESET = 'affix affix-top affix-bottom'
    Affix.DEFAULTS = {
        offset: 0,
        target: window
    }
    Affix.prototype.getState = function( scrollHeight, height, offsetTop, offsetBottom ) {
        var scrollTop = this.$target.scrollTop()
        var position = this.$element.offset()
        var targetHeight = this.$target.height()
        if ( offsetTop != null && this.affixed == 'top' ) return scrollTop < offsetTop ? 'top' : false
        if ( this.affixed == 'bottom' ) {
            if ( offsetTop != null ) return ( scrollTop + this.unpin <= position.top ) ? false : 'bottom'
            return ( scrollTop + targetHeight <= scrollHeight - offsetBottom ) ? false : 'bottom'
        }
        var initializing = this.affixed == null
        var colliderTop = initializing ? scrollTop : position.top
        var colliderHeight = initializing ? targetHeight : height
        if ( offsetTop != null && colliderTop <= offsetTop ) return 'top'
        if ( offsetBottom != null && ( colliderTop + colliderHeight >= scrollHeight - offsetBottom ) ) return 'bottom'
        return false
    }
    Affix.prototype.getPinnedOffset = function() {
        if ( this.pinnedOffset ) return this.pinnedOffset
        this.$element.removeClass( Affix.RESET ).addClass( 'affix' )
        var scrollTop = this.$target.scrollTop()
        var position = this.$element.offset()
        return ( this.pinnedOffset = position.top - scrollTop )
    }
    Affix.prototype.checkPositionWithEventLoop = function() {
        setTimeout( $.proxy( this.checkPosition, this ), 1 )
    }
    Affix.prototype.checkPosition = function() {
            if ( !this.$element.is( ':visible' ) ) return
            var height = this.$element.height()
            var offset = this.options.offset
            var offsetTop = offset.top
            var offsetBottom = offset.bottom
            var scrollHeight = $( 'body' ).height()
            if ( typeof offset != 'object' ) offsetBottom = offsetTop = offset
            if ( typeof offsetTop == 'function' ) offsetTop = offset.top( this.$element )
            if ( typeof offsetBottom == 'function' ) offsetBottom = offset.bottom( this.$element )
            var affix = this.getState( scrollHeight, height, offsetTop, offsetBottom )
            if ( this.affixed != affix ) {
                if ( this.unpin != null ) this.$element.css( 'top', '' )
                var affixType = 'affix' + ( affix ? '-' + affix : '' )
                var e = $.Event( affixType + '.bs.affix' )
                this.$element.trigger( e )
                if ( e.isDefaultPrevented() ) return
                this.affixed = affix
                this.unpin = affix == 'bottom' ? this.getPinnedOffset() : null
                this.$element.removeClass( Affix.RESET ).addClass( affixType ).trigger( affixType.replace( 'affix', 'affixed' ) + '.bs.affix' )
            }
            if ( affix == 'bottom' ) {
                this.$element.offset( {
                    top: scrollHeight - height - offsetBottom
                } )
            }
        }
        // AFFIX PLUGIN DEFINITION
        // =======================
    function Plugin( option ) {
        return this.each( function() {
            var $this = $( this )
            var data = $this.data( 'bs.affix' )
            var options = typeof option == 'object' && option
            if ( !data ) $this.data( 'bs.affix', ( data = new Affix( this, options ) ) )
            if ( typeof option == 'string' ) data[ option ]()
        } )
    }
    var old = $.fn.affix
    $.fn.affix = Plugin
    $.fn.affix.Constructor = Affix
        // AFFIX NO CONFLICT
        // =================
    $.fn.affix.noConflict = function() {
            $.fn.affix = old
            return this
        }
        // AFFIX DATA-API
        // ==============
    $( window ).on( 'load', function() {
        $( '[data-spy="affix"]' ).each( function() {
            var $spy = $( this )
            var data = $spy.data()
            data.offset = data.offset || {}
            if ( data.offsetBottom != null ) data.offset.bottom = data.offsetBottom
            if ( data.offsetTop != null ) data.offset.top = data.offsetTop
            Plugin.call( $spy, data )
        } )
    } )
}( jQuery );
/**
 * An Angular module that gives you access to the browsers local storage
 * @version v0.1.5 - 2014-11-04
 * @link https://github.com/grevory/angular-local-storage
 * @author grevory <greg@gregpike.ca>
 * @license MIT License, http://www.opensource.org/licenses/MIT
 */
! function( a, b ) {
    "use strict";

    function c( a ) {
        return /^-?\d+\.?\d*$/.test( a.replace( /["']/g, "" ) )
    }
    var d = b.isDefined,
        e = b.isUndefined,
        f = b.isNumber,
        g = b.isObject,
        h = b.isArray,
        i = b.extend,
        j = b.toJson,
        k = b.fromJson,
        l = b.module( "LocalStorageModule", [] );
    l.provider( "localStorageService", function() {
        this.prefix = "ls", this.storageType = "localStorage", this.cookie = {
            expiry: 30,
            path: "/"
        }, this.notify = {
            setItem: !0,
            removeItem: !1
        }, this.setPrefix = function( a ) {
            return this.prefix = a, this
        }, this.setStorageType = function( a ) {
            return this.storageType = a, this
        }, this.setStorageCookie = function( a, b ) {
            return this.cookie = {
                expiry: a,
                path: b
            }, this
        }, this.setStorageCookieDomain = function( a ) {
            return this.cookie.domain = a, this
        }, this.setNotify = function( a, b ) {
            return this.notify = {
                setItem: a,
                removeItem: b
            }, this
        }, this.$get = [ "$rootScope", "$window", "$document", "$parse", function( a, b, l, m ) {
            var n, o = this,
                p = o.prefix,
                q = o.cookie,
                r = o.notify,
                s = o.storageType;
            l ? l[ 0 ] && ( l = l[ 0 ] ) : l = document, "." !== p.substr( -1 ) && ( p = p ? p + "." : "" );
            var t = function( a ) {
                    return p + a
                },
                u = function() {
                    try {
                        var c = s in b && null !== b[ s ],
                            d = t( "__" + Math.round( 1e7 * Math.random() ) );
                        return c && ( n = b[ s ], n.setItem( d, "" ), n.removeItem( d ) ), c
                    } catch ( e ) {
                        return s = "cookie", a.$broadcast( "LocalStorageModule.notification.error", e.message ), !1
                    }
                }(),
                v = function( b, c ) {
                    if ( e( c ) ? c = null : ( g( c ) || h( c ) || f( +c || c ) ) && ( c = j( c ) ), !u || "cookie" === o.storageType ) return u || a.$broadcast( "LocalStorageModule.notification.warning", "LOCAL_STORAGE_NOT_SUPPORTED" ), r.setItem && a.$broadcast( "LocalStorageModule.notification.setitem", {
                        key: b,
                        newvalue: c,
                        storageType: "cookie"
                    } ), B( b, c );
                    try {
                        ( g( c ) || h( c ) ) && ( c = j( c ) ), n && n.setItem( t( b ), c ), r.setItem && a.$broadcast( "LocalStorageModule.notification.setitem", {
                            key: b,
                            newvalue: c,
                            storageType: o.storageType
                        } )
                    } catch ( d ) {
                        return a.$broadcast( "LocalStorageModule.notification.error", d.message ), B( b, c )
                    }
                    return !0
                },
                w = function( b ) {
                    if ( !u || "cookie" === o.storageType ) return u || a.$broadcast( "LocalStorageModule.notification.warning", "LOCAL_STORAGE_NOT_SUPPORTED" ), C( b );
                    var d = n ? n.getItem( t( b ) ) : null;
                    return d && "null" !== d ? "{" === d.charAt( 0 ) || "[" === d.charAt( 0 ) || c( d ) ? k( d ) : d : null
                },
                x = function( b ) {
                    if ( !u || "cookie" === o.storageType ) return u || a.$broadcast( "LocalStorageModule.notification.warning", "LOCAL_STORAGE_NOT_SUPPORTED" ), r.removeItem && a.$broadcast( "LocalStorageModule.notification.removeitem", {
                        key: b,
                        storageType: "cookie"
                    } ), D( b );
                    try {
                        n.removeItem( t( b ) ), r.removeItem && a.$broadcast( "LocalStorageModule.notification.removeitem", {
                            key: b,
                            storageType: o.storageType
                        } )
                    } catch ( c ) {
                        return a.$broadcast( "LocalStorageModule.notification.error", c.message ), D( b )
                    }
                    return !0
                },
                y = function() {
                    if ( !u ) return a.$broadcast( "LocalStorageModule.notification.warning", "LOCAL_STORAGE_NOT_SUPPORTED" ), !1;
                    var b = p.length,
                        c = [];
                    for ( var d in n )
                        if ( d.substr( 0, b ) === p ) try {
                            c.push( d.substr( b ) )
                        } catch ( e ) {
                            return a.$broadcast( "LocalStorageModule.notification.error", e.Description ), []
                        }
                    return c
                },
                z = function( b ) {
                    b = b || "";
                    var c = p.slice( 0, -1 ),
                        d = new RegExp( c + "." + b );
                    if ( !u || "cookie" === o.storageType ) return u || a.$broadcast( "LocalStorageModule.notification.warning", "LOCAL_STORAGE_NOT_SUPPORTED" ), E();
                    var e = p.length;
                    for ( var f in n )
                        if ( d.test( f ) ) try {
                            x( f.substr( e ) )
                        } catch ( g ) {
                            return a.$broadcast( "LocalStorageModule.notification.error", g.message ), E()
                        }
                    return !0
                },
                A = function() {
                    try {
                        return b.navigator.cookieEnabled || "cookie" in l && ( l.cookie.length > 0 || ( l.cookie = "test" ).indexOf.call( l.cookie, "test" ) > -1 )
                    } catch ( c ) {
                        return a.$broadcast( "LocalStorageModule.notification.error", c.message ), !1
                    }
                }(),
                B = function( b, c ) {
                    if ( e( c ) ) return !1;
                    if ( ( h( c ) || g( c ) ) && ( c = j( c ) ), !A ) return a.$broadcast( "LocalStorageModule.notification.error", "COOKIES_NOT_SUPPORTED" ), !1;
                    try {
                        var d = "",
                            f = new Date,
                            i = "";
                        if ( null === c ? ( f.setTime( f.getTime() + -864e5 ), d = "; expires=" + f.toGMTString(), c = "" ) : 0 !== q.expiry && ( f.setTime( f.getTime() + 24 * q.expiry * 60 * 60 * 1e3 ), d = "; expires=" + f.toGMTString() ), b ) {
                            var k = "; path=" + q.path;
                            q.domain && ( i = "; domain=" + q.domain ), l.cookie = t( b ) + "=" + encodeURIComponent( c ) + d + k + i
                        }
                    } catch ( m ) {
                        return a.$broadcast( "LocalStorageModule.notification.error", m.message ), !1
                    }
                    return !0
                },
                C = function( b ) {
                    if ( !A ) return a.$broadcast( "LocalStorageModule.notification.error", "COOKIES_NOT_SUPPORTED" ), !1;
                    for ( var c = l.cookie && l.cookie.split( ";" ) || [], d = 0; d < c.length; d++ ) {
                        for ( var e = c[ d ];
                            " " === e.charAt( 0 ); ) e = e.substring( 1, e.length );
                        if ( 0 === e.indexOf( t( b ) + "=" ) ) {
                            var f = decodeURIComponent( e.substring( p.length + b.length + 1, e.length ) );
                            try {
                                var g = JSON.parse( f );
                                return k( g )
                            } catch ( h ) {
                                return f
                            }
                        }
                    }
                    return null
                },
                D = function( a ) {
                    B( a, null )
                },
                E = function() {
                    for ( var a = null, b = p.length, c = l.cookie.split( ";" ), d = 0; d < c.length; d++ ) {
                        for ( a = c[ d ];
                            " " === a.charAt( 0 ); ) a = a.substring( 1, a.length );
                        var e = a.substring( b, a.indexOf( "=" ) );
                        D( e )
                    }
                },
                F = function() {
                    return s
                },
                G = function( a, b, c, e ) {
                    e = e || b;
                    var f = w( e );
                    return null === f && d( c ) ? f = c : g( f ) && g( c ) && ( f = i( c, f ) ), m( b ).assign( a, f ), a.$watch( b, function( a ) {
                        v( e, a )
                    }, g( a[ b ] ) )
                },
                H = function() {
                    for ( var a = 0, c = b[ s ], d = 0; d < c.length; d++ ) 0 === c.key( d ).indexOf( p ) && a++;
                    return a
                };
            return {
                isSupported: u,
                getStorageType: F,
                set: v,
                add: v,
                get: w,
                keys: y,
                remove: x,
                clearAll: z,
                bind: G,
                deriveKey: t,
                length: H,
                cookie: {
                    isSupported: A,
                    set: B,
                    add: B,
                    get: C,
                    remove: D,
                    clearAll: E
                }
            }
        } ]
    } )
}( window, window.angular );
/*!
 * jQuery Color Animations v@VERSION
 * https://github.com/jquery/jquery-color
 *
 * Copyright 2013 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * Date: @DATE
 */
( function( jQuery, undefined ) {
    var stepHooks = "backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor",
        // plusequals test for += 100 -= 100
        rplusequals = /^([\-+])=\s*(\d+\.?\d*)/,
        // a set of RE's that can match strings and generate color tuples.
        stringParsers = [ {
            re: /rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
            parse: function( execResult ) {
                return [
     execResult[ 1 ],
     execResult[ 2 ],
     execResult[ 3 ],
     execResult[ 4 ]
    ];
            }
  }, {
            re: /rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
            parse: function( execResult ) {
                return [
     execResult[ 1 ] * 2.55,
     execResult[ 2 ] * 2.55,
     execResult[ 3 ] * 2.55,
     execResult[ 4 ]
    ];
            }
  }, {
            // this regex ignores A-F because it's compared against an already lowercased string
            re: /#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,
            parse: function( execResult ) {
                return [
     parseInt( execResult[ 1 ], 16 ),
     parseInt( execResult[ 2 ], 16 ),
     parseInt( execResult[ 3 ], 16 )
    ];
            }
  }, {
            // this regex ignores A-F because it's compared against an already lowercased string
            re: /#([a-f0-9])([a-f0-9])([a-f0-9])/,
            parse: function( execResult ) {
                return [
     parseInt( execResult[ 1 ] + execResult[ 1 ], 16 ),
     parseInt( execResult[ 2 ] + execResult[ 2 ], 16 ),
     parseInt( execResult[ 3 ] + execResult[ 3 ], 16 )
    ];
            }
  }, {
            re: /hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
            space: "hsla",
            parse: function( execResult ) {
                return [
     execResult[ 1 ],
     execResult[ 2 ] / 100,
     execResult[ 3 ] / 100,
     execResult[ 4 ]
    ];
            }
  } ],
        // jQuery.Color( )
        color = jQuery.Color = function( color, green, blue, alpha ) {
            return new jQuery.Color.fn.parse( color, green, blue, alpha );
        },
        spaces = {
            rgba: {
                props: {
                    red: {
                        idx: 0,
                        type: "byte"
                    },
                    green: {
                        idx: 1,
                        type: "byte"
                    },
                    blue: {
                        idx: 2,
                        type: "byte"
                    }
                }
            },
            hsla: {
                props: {
                    hue: {
                        idx: 0,
                        type: "degrees"
                    },
                    saturation: {
                        idx: 1,
                        type: "percent"
                    },
                    lightness: {
                        idx: 2,
                        type: "percent"
                    }
                }
            }
        },
        propTypes = {
            "byte": {
                floor: true,
                max: 255
            },
            "percent": {
                max: 1
            },
            "degrees": {
                mod: 360,
                floor: true
            }
        },
        support = color.support = {},
        // element for support tests
        supportElem = jQuery( "<p>" )[ 0 ],
        // colors = jQuery.Color.names
        colors,
        // local aliases of functions called often
        each = jQuery.each;
    // determine rgba support immediately
    supportElem.style.cssText = "background-color:rgba(1,1,1,.5)";
    support.rgba = supportElem.style.backgroundColor.indexOf( "rgba" ) > -1;
    // define cache name and alpha properties
    // for rgba and hsla spaces
    each( spaces, function( spaceName, space ) {
        space.cache = "_" + spaceName;
        space.props.alpha = {
            idx: 3,
            type: "percent",
            def: 1
        };
    } );

    function clamp( value, prop, allowEmpty ) {
        var type = propTypes[ prop.type ] || {};
        if ( value == null ) {
            return ( allowEmpty || !prop.def ) ? null : prop.def;
        }
        // ~~ is an short way of doing floor for positive numbers
        value = type.floor ? ~~value : parseFloat( value );
        // IE will pass in empty strings as value for alpha,
        // which will hit this case
        if ( isNaN( value ) ) {
            return prop.def;
        }
        if ( type.mod ) {
            // we add mod before modding to make sure that negatives values
            // get converted properly: -10 -> 350
            return ( value + type.mod ) % type.mod;
        }
        // for now all property types without mod have min and max
        return 0 > value ? 0 : type.max < value ? type.max : value;
    }

    function stringParse( string ) {
        var inst = color(),
            rgba = inst._rgba = [];
        string = string.toLowerCase();
        each( stringParsers, function( i, parser ) {
            var parsed,
                match = parser.re.exec( string ),
                values = match && parser.parse( match ),
                spaceName = parser.space || "rgba";
            if ( values ) {
                parsed = inst[ spaceName ]( values );
                // if this was an rgba parse the assignment might happen twice
                // oh well....
                inst[ spaces[ spaceName ].cache ] = parsed[ spaces[ spaceName ].cache ];
                rgba = inst._rgba = parsed._rgba;
                // exit each( stringParsers ) here because we matched
                return false;
            }
        } );
        // Found a stringParser that handled it
        if ( rgba.length ) {
            // if this came from a parsed string, force "transparent" when alpha is 0
            // chrome, (and maybe others) return "transparent" as rgba(0,0,0,0)
            if ( rgba.join() === "0,0,0,0" ) {
                jQuery.extend( rgba, colors.transparent );
            }
            return inst;
        }
        // named colors
        return colors[ string ];
    }
    color.fn = jQuery.extend( color.prototype, {
        parse: function( red, green, blue, alpha ) {
            if ( red === undefined ) {
                this._rgba = [ null, null, null, null ];
                return this;
            }
            if ( red.jquery || red.nodeType ) {
                red = jQuery( red ).css( green );
                green = undefined;
            }
            var inst = this,
                type = jQuery.type( red ),
                rgba = this._rgba = [];
            // more than 1 argument specified - assume ( red, green, blue, alpha )
            if ( green !== undefined ) {
                red = [ red, green, blue, alpha ];
                type = "array";
            }
            if ( type === "string" ) {
                return this.parse( stringParse( red ) || colors._default );
            }
            if ( type === "array" ) {
                each( spaces.rgba.props, function( key, prop ) {
                    rgba[ prop.idx ] = clamp( red[ prop.idx ], prop );
                } );
                return this;
            }
            if ( type === "object" ) {
                if ( red instanceof color ) {
                    each( spaces, function( spaceName, space ) {
                        if ( red[ space.cache ] ) {
                            inst[ space.cache ] = red[ space.cache ].slice();
                        }
                    } );
                } else {
                    each( spaces, function( spaceName, space ) {
                        var cache = space.cache;
                        each( space.props, function( key, prop ) {
                            // if the cache doesn't exist, and we know how to convert
                            if ( !inst[ cache ] && space.to ) {
                                // if the value was null, we don't need to copy it
                                // if the key was alpha, we don't need to copy it either
                                if ( key === "alpha" || red[ key ] == null ) {
                                    return;
                                }
                                inst[ cache ] = space.to( inst._rgba );
                            }
                            // this is the only case where we allow nulls for ALL properties.
                            // call clamp with alwaysAllowEmpty
                            inst[ cache ][ prop.idx ] = clamp( red[ key ], prop, true );
                        } );
                        // everything defined but alpha?
                        if ( inst[ cache ] && jQuery.inArray( null, inst[ cache ].slice( 0, 3 ) ) < 0 ) {
                            // use the default of 1
                            inst[ cache ][ 3 ] = 1;
                            if ( space.from ) {
                                inst._rgba = space.from( inst[ cache ] );
                            }
                        }
                    } );
                }
                return this;
            }
        },
        is: function( compare ) {
            var is = color( compare ),
                same = true,
                inst = this;
            each( spaces, function( _, space ) {
                var localCache,
                    isCache = is[ space.cache ];
                if ( isCache ) {
                    localCache = inst[ space.cache ] || space.to && space.to( inst._rgba ) || [];
                    each( space.props, function( _, prop ) {
                        if ( isCache[ prop.idx ] != null ) {
                            same = ( isCache[ prop.idx ] === localCache[ prop.idx ] );
                            return same;
                        }
                    } );
                }
                return same;
            } );
            return same;
        },
        _space: function() {
            var used = [],
                inst = this;
            each( spaces, function( spaceName, space ) {
                if ( inst[ space.cache ] ) {
                    used.push( spaceName );
                }
            } );
            return used.pop();
        },
        transition: function( other, distance ) {
            var end = color( other ),
                spaceName = end._space(),
                space = spaces[ spaceName ],
                startColor = this.alpha() === 0 ? color( "transparent" ) : this,
                start = startColor[ space.cache ] || space.to( startColor._rgba ),
                result = start.slice();
            end = end[ space.cache ];
            each( space.props, function( key, prop ) {
                var index = prop.idx,
                    startValue = start[ index ],
                    endValue = end[ index ],
                    type = propTypes[ prop.type ] || {};
                // if null, don't override start value
                if ( endValue === null ) {
                    return;
                }
                // if null - use end
                if ( startValue === null ) {
                    result[ index ] = endValue;
                } else {
                    if ( type.mod ) {
                        if ( endValue - startValue > type.mod / 2 ) {
                            startValue += type.mod;
                        } else if ( startValue - endValue > type.mod / 2 ) {
                            startValue -= type.mod;
                        }
                    }
                    result[ index ] = clamp( ( endValue - startValue ) * distance + startValue, prop );
                }
            } );
            return this[ spaceName ]( result );
        },
        blend: function( opaque ) {
            // if we are already opaque - return ourself
            if ( this._rgba[ 3 ] === 1 ) {
                return this;
            }
            var rgb = this._rgba.slice(),
                a = rgb.pop(),
                blend = color( opaque )._rgba;
            return color( jQuery.map( rgb, function( v, i ) {
                return ( 1 - a ) * blend[ i ] + a * v;
            } ) );
        },
        toRgbaString: function() {
            var prefix = "rgba(",
                rgba = jQuery.map( this._rgba, function( v, i ) {
                    return v == null ? ( i > 2 ? 1 : 0 ) : v;
                } );
            if ( rgba[ 3 ] === 1 ) {
                rgba.pop();
                prefix = "rgb(";
            }
            return prefix + rgba.join() + ")";
        },
        toHslaString: function() {
            var prefix = "hsla(",
                hsla = jQuery.map( this.hsla(), function( v, i ) {
                    if ( v == null ) {
                        v = i > 2 ? 1 : 0;
                    }
                    // catch 1 and 2
                    if ( i && i < 3 ) {
                        v = Math.round( v * 100 ) + "%";
                    }
                    return v;
                } );
            if ( hsla[ 3 ] === 1 ) {
                hsla.pop();
                prefix = "hsl(";
            }
            return prefix + hsla.join() + ")";
        },
        toHexString: function( includeAlpha ) {
            var rgba = this._rgba.slice(),
                alpha = rgba.pop();
            if ( includeAlpha ) {
                rgba.push( ~~( alpha * 255 ) );
            }
            return "#" + jQuery.map( rgba, function( v ) {
                // default to 0 when nulls exist
                v = ( v || 0 ).toString( 16 );
                return v.length === 1 ? "0" + v : v;
            } ).join( "" );
        },
        toString: function() {
            return this._rgba[ 3 ] === 0 ? "transparent" : this.toRgbaString();
        }
    } );
    color.fn.parse.prototype = color.fn;
    // hsla conversions adapted from:
    // https://code.google.com/p/maashaack/source/browse/packages/graphics/trunk/src/graphics/colors/HUE2RGB.as?r=5021
    function hue2rgb( p, q, h ) {
        h = ( h + 1 ) % 1;
        if ( h * 6 < 1 ) {
            return p + ( q - p ) * h * 6;
        }
        if ( h * 2 < 1 ) {
            return q;
        }
        if ( h * 3 < 2 ) {
            return p + ( q - p ) * ( ( 2 / 3 ) - h ) * 6;
        }
        return p;
    }
    spaces.hsla.to = function( rgba ) {
        if ( rgba[ 0 ] == null || rgba[ 1 ] == null || rgba[ 2 ] == null ) {
            return [ null, null, null, rgba[ 3 ] ];
        }
        var r = rgba[ 0 ] / 255,
            g = rgba[ 1 ] / 255,
            b = rgba[ 2 ] / 255,
            a = rgba[ 3 ],
            max = Math.max( r, g, b ),
            min = Math.min( r, g, b ),
            diff = max - min,
            add = max + min,
            l = add * 0.5,
            h, s;
        if ( min === max ) {
            h = 0;
        } else if ( r === max ) {
            h = ( 60 * ( g - b ) / diff ) + 360;
        } else if ( g === max ) {
            h = ( 60 * ( b - r ) / diff ) + 120;
        } else {
            h = ( 60 * ( r - g ) / diff ) + 240;
        }
        // chroma (diff) == 0 means greyscale which, by definition, saturation = 0%
        // otherwise, saturation is based on the ratio of chroma (diff) to lightness (add)
        if ( diff === 0 ) {
            s = 0;
        } else if ( l <= 0.5 ) {
            s = diff / add;
        } else {
            s = diff / ( 2 - add );
        }
        return [ Math.round( h ) % 360, s, l, a == null ? 1 : a ];
    };
    spaces.hsla.from = function( hsla ) {
        if ( hsla[ 0 ] == null || hsla[ 1 ] == null || hsla[ 2 ] == null ) {
            return [ null, null, null, hsla[ 3 ] ];
        }
        var h = hsla[ 0 ] / 360,
            s = hsla[ 1 ],
            l = hsla[ 2 ],
            a = hsla[ 3 ],
            q = l <= 0.5 ? l * ( 1 + s ) : l + s - l * s,
            p = 2 * l - q;
        return [
  Math.round( hue2rgb( p, q, h + ( 1 / 3 ) ) * 255 ),
  Math.round( hue2rgb( p, q, h ) * 255 ),
  Math.round( hue2rgb( p, q, h - ( 1 / 3 ) ) * 255 ),
  a
 ];
    };
    each( spaces, function( spaceName, space ) {
        var props = space.props,
            cache = space.cache,
            to = space.to,
            from = space.from;
        // makes rgba() and hsla()
        color.fn[ spaceName ] = function( value ) {
            // generate a cache for this space if it doesn't exist
            if ( to && !this[ cache ] ) {
                this[ cache ] = to( this._rgba );
            }
            if ( value === undefined ) {
                return this[ cache ].slice();
            }
            var ret,
                type = jQuery.type( value ),
                arr = ( type === "array" || type === "object" ) ? value : arguments,
                local = this[ cache ].slice();
            each( props, function( key, prop ) {
                var val = arr[ type === "object" ? key : prop.idx ];
                if ( val == null ) {
                    val = local[ prop.idx ];
                }
                local[ prop.idx ] = clamp( val, prop );
            } );
            if ( from ) {
                ret = color( from( local ) );
                ret[ cache ] = local;
                return ret;
            } else {
                return color( local );
            }
        };
        // makes red() green() blue() alpha() hue() saturation() lightness()
        each( props, function( key, prop ) {
            // alpha is included in more than one space
            if ( color.fn[ key ] ) {
                return;
            }
            color.fn[ key ] = function( value ) {
                var vtype = jQuery.type( value ),
                    fn = ( key === "alpha" ? ( this._hsla ? "hsla" : "rgba" ) : spaceName ),
                    local = this[ fn ](),
                    cur = local[ prop.idx ],
                    match;
                if ( vtype === "undefined" ) {
                    return cur;
                }
                if ( vtype === "function" ) {
                    value = value.call( this, cur );
                    vtype = jQuery.type( value );
                }
                if ( value == null && prop.empty ) {
                    return this;
                }
                if ( vtype === "string" ) {
                    match = rplusequals.exec( value );
                    if ( match ) {
                        value = cur + parseFloat( match[ 2 ] ) * ( match[ 1 ] === "+" ? 1 : -1 );
                    }
                }
                local[ prop.idx ] = value;
                return this[ fn ]( local );
            };
        } );
    } );
    // add cssHook and .fx.step function for each named hook.
    // accept a space separated string of properties
    color.hook = function( hook ) {
        var hooks = hook.split( " " );
        each( hooks, function( i, hook ) {
            jQuery.cssHooks[ hook ] = {
                set: function( elem, value ) {
                    var parsed, curElem,
                        backgroundColor = "";
                    if ( value !== "transparent" && ( jQuery.type( value ) !== "string" || ( parsed = stringParse( value ) ) ) ) {
                        value = color( parsed || value );
                        if ( !support.rgba && value._rgba[ 3 ] !== 1 ) {
                            curElem = hook === "backgroundColor" ? elem.parentNode : elem;
                            while (
                                ( backgroundColor === "" || backgroundColor === "transparent" ) && curElem && curElem.style ) {
                                try {
                                    backgroundColor = jQuery.css( curElem, "backgroundColor" );
                                    curElem = curElem.parentNode;
                                } catch ( e ) {}
                            }
                            value = value.blend( backgroundColor && backgroundColor !== "transparent" ? backgroundColor : "_default" );
                        }
                        value = value.toRgbaString();
                    }
                    try {
                        elem.style[ hook ] = value;
                    } catch ( e ) {
                        // wrapped to prevent IE from throwing errors on "invalid" values like 'auto' or 'inherit'
                    }
                }
            };
            jQuery.fx.step[ hook ] = function( fx ) {
                if ( !fx.colorInit ) {
                    fx.start = color( fx.elem, hook );
                    fx.end = color( fx.end );
                    fx.colorInit = true;
                }
                jQuery.cssHooks[ hook ].set( fx.elem, fx.start.transition( fx.end, fx.pos ) );
            };
        } );
    };
    color.hook( stepHooks );
    jQuery.cssHooks.borderColor = {
        expand: function( value ) {
            var expanded = {};
            each( [ "Top", "Right", "Bottom", "Left" ], function( i, part ) {
                expanded[ "border" + part + "Color" ] = value;
            } );
            return expanded;
        }
    };
    // Basic color names only.
    // Usage of any of the other color names requires adding yourself or including
    // jquery.color.svg-names.js.
    colors = jQuery.Color.names = {
        // 4.1. Basic color keywords
        aqua: "#00ffff",
        black: "#000000",
        blue: "#0000ff",
        fuchsia: "#ff00ff",
        gray: "#808080",
        green: "#008000",
        lime: "#00ff00",
        maroon: "#800000",
        navy: "#000080",
        olive: "#808000",
        purple: "#800080",
        red: "#ff0000",
        silver: "#c0c0c0",
        teal: "#008080",
        white: "#ffffff",
        yellow: "#ffff00",
        // 4.2.3. "transparent" color keyword
        transparent: [ null, null, null, 0 ],
        _default: "#ffffff"
    };
} )( jQuery );
// The MIT License (MIT)
// Typed.js | Copyright (c) 2014 Matt Boldt | www.mattboldt.com
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.
! function( $ ) {
    "use strict";
    var Typed = function( el, options ) {
        // chosen element to manipulate text
        this.el = $( el );
        // options
        this.options = $.extend( {}, $.fn.typed.defaults, options );
        // attribute to type into
        this.isInput = this.el.is( 'input' );
        this.attr = this.options.attr;
        // show cursor
        this.showCursor = this.isInput ? false : this.options.showCursor;
        // text content of element
        this.elContent = this.attr ? this.el.attr( this.attr ) : this.el.text()
            // html or plain text
        this.contentType = this.options.contentType;
        // typing speed
        this.typeSpeed = this.options.typeSpeed;
        // add a delay before typing starts
        this.startDelay = this.options.startDelay;
        // backspacing speed
        this.backSpeed = this.options.backSpeed;
        // amount of time to wait before backspacing
        this.backDelay = this.options.backDelay;
        // input strings of text
        this.strings = this.options.strings;
        // character number position of current string
        this.strPos = 0;
        // current array position
        this.arrayPos = 0;
        // number to stop backspacing on.
        // default 0, can change depending on how many chars
        // you want to remove at the time
        this.stopNum = 0;
        // Looping logic
        this.loop = this.options.loop;
        this.loopCount = this.options.loopCount;
        this.curLoop = 0;
        // for stopping
        this.stop = false;
        // custom cursor
        this.cursorChar = this.options.cursorChar;
        // All systems go!
        this.build();
    };
    Typed.prototype = {
        constructor: Typed,
        init: function() {
            // begin the loop w/ first current string (global self.string)
            // current string will be passed as an argument each time after this
            var self = this;
            self.timeout = setTimeout( function() {
                // Start typing
                self.typewrite( self.strings[ self.arrayPos ], self.strPos );
            }, self.startDelay );
        },
        build: function() {
                // Insert cursor
                if ( this.showCursor === true ) {
                    this.cursor = $( "<span class=\"typed-cursor\">" + this.cursorChar + "</span>" );
                    this.el.after( this.cursor );
                }
                this.init();
            }
            // pass current string state to each function, types 1 char per call
            ,
        typewrite: function( curString, curStrPos ) {
            // exit when stopped
            if ( this.stop === true ) {
                return;
            }
            // varying values for setTimeout during typing
            // can't be global since number changes each time loop is executed
            var humanize = Math.round( Math.random() * ( 100 - 30 ) ) + this.typeSpeed;
            var self = this;
            // ------------- optional ------------- //
            // backpaces a certain string faster
            // ------------------------------------ //
            // if (self.arrayPos == 1){
            //  self.backDelay = 50;
            // }
            // else{ self.backDelay = 500; }
            // contain typing function in a timeout humanize'd delay
            self.timeout = setTimeout( function() {
                // check for an escape character before a pause value
                // format: \^\d+ .. eg: ^1000 .. should be able to print the ^ too using ^^
                // single ^ are removed from string
                var charPause = 0;
                var substr = curString.substr( curStrPos );
                if ( substr.charAt( 0 ) === '^' ) {
                    var skip = 1; // skip atleast 1
                    if ( /^\^\d+/.test( substr ) ) {
                        substr = /\d+/.exec( substr )[ 0 ];
                        skip += substr.length;
                        charPause = parseInt( substr );
                    }
                    // strip out the escape character and pause value so they're not printed
                    curString = curString.substring( 0, curStrPos ) + curString.substring( curStrPos + skip );
                }
                if ( self.contentType === 'html' ) {
                    // skip over html tags while typing
                    if ( curString.substr( curStrPos ).charAt( 0 ) === '<' ) {
                        var tag = '';
                        while ( curString.substr( curStrPos ).charAt( 0 ) !== '>' ) {
                            tag += curString.substr( curStrPos ).charAt( 0 );
                            curStrPos++;
                        }
                        curStrPos++;
                        tag += '>';
                    }
                }
                // timeout for any pause after a character
                self.timeout = setTimeout( function() {
                    if ( curStrPos === curString.length ) {
                        // fires callback function
                        self.options.onStringTyped( self.arrayPos );
                        // is this the final string
                        if ( self.arrayPos === self.strings.length - 1 ) {
                            // animation that occurs on the last typed string
                            self.options.callback();
                            self.curLoop++;
                            // quit if we wont loop back
                            if ( self.loop === false || self.curLoop === self.loopCount ) return;
                        }
                        self.timeout = setTimeout( function() {
                            self.backspace( curString, curStrPos );
                        }, self.backDelay );
                    } else {
                        /* call before functions if applicable */
                        if ( curStrPos === 0 ) self.options.preStringTyped( self.arrayPos );
                        // start typing each new char into existing string
                        // curString: arg, self.el.html: original text inside element
                        var nextString = self.elContent + curString.substr( 0, curStrPos + 1 );
                        if ( self.attr ) {
                            self.el.attr( self.attr, nextString );
                        } else {
                            if ( self.contentType === 'html' ) {
                                self.el.html( nextString );
                            } else {
                                self.el.text( nextString );
                            }
                        }
                        // add characters one by one
                        curStrPos++;
                        // loop the function
                        self.typewrite( curString, curStrPos );
                    }
                    // end of character pause
                }, charPause );
                // humanized value for typing
            }, humanize );
        },
        backspace: function( curString, curStrPos ) {
                // exit when stopped
                if ( this.stop === true ) {
                    return;
                }
                // varying values for setTimeout during typing
                // can't be global since number changes each time loop is executed
                var humanize = Math.round( Math.random() * ( 100 - 30 ) ) + this.backSpeed;
                var self = this;
                self.timeout = setTimeout( function() {
                    // ----- this part is optional ----- //
                    // check string array position
                    // on the first string, only delete one word
                    // the stopNum actually represents the amount of chars to
                    // keep in the current string. In my case it's 14.
                    // if (self.arrayPos == 1){
                    //  self.stopNum = 14;
                    // }
                    //every other time, delete the whole typed string
                    // else{
                    //  self.stopNum = 0;
                    // }
                    if ( self.contentType === 'html' ) {
                        // skip over html tags while backspacing
                        if ( curString.substr( curStrPos ).charAt( 0 ) === '>' ) {
                            var tag = '';
                            while ( curString.substr( curStrPos ).charAt( 0 ) !== '<' ) {
                                tag -= curString.substr( curStrPos ).charAt( 0 );
                                curStrPos--;
                            }
                            curStrPos--;
                            tag += '<';
                        }
                    }
                    // ----- continue important stuff ----- //
                    // replace text with base text + typed characters
                    var nextString = self.elContent + curString.substr( 0, curStrPos );
                    if ( self.attr ) {
                        self.el.attr( self.attr, nextString );
                    } else {
                        if ( self.contentType === 'html' ) {
                            self.el.html( nextString );
                        } else {
                            self.el.text( nextString );
                        }
                    }
                    // if the number (id of character in current string) is
                    // less than the stop number, keep going
                    if ( curStrPos > self.stopNum ) {
                        // subtract characters one by one
                        curStrPos--;
                        // loop the function
                        self.backspace( curString, curStrPos );
                    }
                    // if the stop number has been reached, increase
                    // array position to next string
                    else if ( curStrPos <= self.stopNum ) {
                        self.arrayPos++;
                        if ( self.arrayPos === self.strings.length ) {
                            self.arrayPos = 0;
                            self.init();
                        } else self.typewrite( self.strings[ self.arrayPos ], curStrPos );
                    }
                    // humanized value for typing
                }, humanize );
            }
            // Start & Stop currently not working
            // , stop: function() {
            //     var self = this;
            //     self.stop = true;
            //     clearInterval(self.timeout);
            // }
            // , start: function() {
            //     var self = this;
            //     if(self.stop === false)
            //        return;
            //     this.stop = false;
            //     this.init();
            // }
            // Reset and rebuild the element
            ,
        reset: function() {
            var self = this;
            clearInterval( self.timeout );
            var id = this.el.attr( 'id' );
            this.el.after( '<span id="' + id + '"/>' )
            this.el.remove();
            this.cursor.remove();
            // Send the callback
            self.options.resetCallback();
        }
    };
    $.fn.typed = function( option ) {
        return this.each( function() {
            var $this = $( this ),
                data = $this.data( 'typed' ),
                options = typeof option == 'object' && option;
            if ( !data ) $this.data( 'typed', ( data = new Typed( this, options ) ) );
            if ( typeof option == 'string' ) data[ option ]();
        } );
    };
    $.fn.typed.defaults = {
        strings: [ "These are the default values...", "You know what you should do?", "Use your own!", "Have a great day!" ],
        // typing speed
        typeSpeed: 0,
        // time before typing starts
        startDelay: 0,
        // backspacing speed
        backSpeed: 0,
        // time before backspacing
        backDelay: 500,
        // loop
        loop: false,
        // false = infinite
        loopCount: false,
        // show cursor
        showCursor: true,
        // character for cursor
        cursorChar: "|",
        // attribute to type (null == text)
        attr: null,
        // either html or text
        contentType: 'html',
        // call when done callback function
        callback: function() {},
        // starting callback function before each string
        preStringTyped: function() {},
        //callback for every typed string
        onStringTyped: function() {},
        // callback for reset
        resetCallback: function() {}
    };
}( window.jQuery );
