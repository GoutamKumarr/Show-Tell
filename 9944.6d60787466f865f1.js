(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [9944], {
        79944: function(e, t, n) {
            "use strict";
            n.r(t);
            var r = n(85893),
                o = n(67294),
                i = n(52695),
                a = n.n(i),
                s = n(25675),
                u = n.n(s),
                c = n(16953),
                l = n(41113),
                f = n(63003),
                d = n(53065),
                p = n(12534),
                g = n(60541),
                h = n(19763),
                m = n(48333),
                b = n(88610),
                y = n(42708),
                v = n(71130),
                w = n(61211);
            t.default = e => {
                let {
                    ticker: t,
                    title: n,
                    vimeoId: i,
                    vimeoIdSecret: s = 0,
                    image: _,
                    video: x
                } = e, S = (0, o.useRef)(), j = (0, o.useRef)(null), k = (0, o.useRef)(null), O = (0, o.useRef)(), {
                    animationDelay: P
                } = (0, o.useContext)(c.GlobalContext), {
                    onCursor: E
                } = (0, o.useContext)(g.uG), [I, R] = (0, o.useState)(!1), [C, M] = (0, o.useState)(!1), [L, H] = (0, y.YD)({
                    initialInView: !0
                });
                (0, w.s)();
                let N = (0, v.Z)("(min-width: 1024px)"),
                    B = (0, o.useCallback)(e => {
                        S.current = e, L(e)
                    }, [L]),
                    D = (0, h._)({
                        type: "byWord",
                        delay: "pageLoading"
                    }),
                    W = (0, h._)({
                        type: "fadeIn",
                        delay: "pageLoading"
                    });
                return (0, o.useEffect)(() => {
                    if (I && k.current && i) return O.current = new m.Z(k.current, {
                        id: i,
                        playsinline: !1,
                        background: !0
                    }), () => {
                        var e;
                        null === (e = O.current) || void 0 === e || e.destroy()
                    }
                }, [I]), (0, o.useEffect)(() => {
                    var e, t;
                    i && (H ? null === (e = O.current) || void 0 === e || e.play() : null === (t = O.current) || void 0 === t || t.pause())
                }, [H]), (0, o.useEffect)(() => {
                    let e = () => {
                        R(!0)
                    };
                    return window.addEventListener("mousemove", e), window.addEventListener("touchstart", e), () => {
                        window.removeEventListener("mousemove", e), window.removeEventListener("touchstart", e)
                    }
                }, []), (0, r.jsxs)("section", {
                    ref: B,
                    className: a().block,
                    children: [(0, r.jsxs)("div", {
                        className: a().content,
                        children: [(0, r.jsx)(f.v, {
                            className: a().ticker,
                            text: t
                        }), (0, r.jsx)("h1", {
                            ref: D,
                            className: a().title,
                            children: (0, d.Z)(n)
                        }), (0, r.jsxs)("div", {
                            ref: W,
                            className: a().buttonBlock,
                            children: [N && (0, r.jsx)(p.Z, {
                                className: a().button,
                                onClick: () => {
                                    var e;
                                    window.scrollTo({
                                        top: null === (e = S.current) || void 0 === e ? void 0 : e.offsetHeight,
                                        behavior: "smooth"
                                    })
                                },
                                label: "Scroll + explore"
                            }), !N && (0, r.jsx)(p.Z, {
                                className: a().button,
                                onClick: () => M(!0),
                                label: "Play Showreel",
                                icon: "play"
                            })]
                        })]
                    }), (0, r.jsx)("div", {
                        ref: j,
                        className: a().media,
                        children: (0, r.jsx)(l.Parallax, {
                            className: a().bg,
                            strength: 300,
                            children: (0, r.jsxs)(l.Background, {
                                children: [(0, r.jsx)(u(), {
                                    src: _.url,
                                    alt: _.alt,
                                    fill: !0,
                                    sizes: "(max-width: 768px) 400px, 920px",
                                    priority: !0
                                }), I && i && (0, r.jsx)("div", {
                                    ref: k,
                                    onMouseEnter: () => E("play"),
                                    onMouseLeave: () => E(),
                                    onClick: () => M(!0)
                                })]
                            })
                        })
                    }), I && i && (0, r.jsx)(b.Z, {
                        parentRef: j,
                        videoId: i,
                        videoSecretId: s,
                        open: C,
                        callback: M
                    })]
                })
            }
        },
        63003: function(e, t, n) {
            "use strict";
            n.d(t, {
                v: function() {
                    return d
                }
            });
            var r = n(85893),
                o = n(67294),
                i = n(14501),
                a = n.n(i),
                s = n(10990),
                u = n(42708),
                c = n(1642),
                l = n(59632),
                f = n.n(l);
            let d = e => {
                let {
                    text: t,
                    reverse: n = !1,
                    className: i = "",
                    speed: l = 200
                } = e, d = (0, o.useRef)(null), p = (0, o.useRef)(), [g, h] = (0, u.YD)({}), m = (0, o.useCallback)(e => {
                    d.current = e, g(e)
                }, [g]), b = e => {
                    s.p8.set(e, {
                        position: "absolute",
                        left: n ? -e.offsetWidth : e.offsetWidth
                    })
                };
                return (0, o.useEffect)(() => {
                    if (!h || !d.current) return;
                    let e = d.current.querySelector("div"),
                        t = (null == e ? void 0 : e.offsetWidth) / l;
                    if (!e) return;
                    let r = e.cloneNode(!0);
                    d.current.appendChild(r), b(r);
                    let o = s.p8.context(() => {
                            p.current = s.p8.timeline({
                                repeat: -1
                            }).to([r, e], {
                                x: n ? "100%" : "-100%",
                                duration: t,
                                ease: "linear"
                            })
                        }, d),
                        i = () => {
                            b(r)
                        };
                    return window.addEventListener("resize", i), () => {
                        o.revert(), window.removeEventListener("resize", i), d.current && d.current.removeChild(r)
                    }
                }, [h]), (0, r.jsx)("div", {
                    className: a().ticker + " " + i,
                    ref: m,
                    children: (0, r.jsx)("div", {
                        children: f()(t, "*", (e, t) => (0, r.jsx)(c.Subtract, {}, t))
                    })
                })
            }
        },
        12534: function(e, t, n) {
            "use strict";
            n.d(t, {
                Z: function() {
                    return u
                }
            });
            var r = n(85893),
                o = n(38843),
                i = n.n(o),
                a = n(60541),
                s = n(67294);

            function u(e) {
                let {
                    className: t,
                    isLight: n,
                    onClick: o,
                    label: u,
                    icon: c = "downArrow"
                } = e, {
                    onCursor: l
                } = (0, s.useContext)(a.uG), f = [i().button];
                return t && f.push(t), n && f.push(i().light), (0, r.jsxs)("button", {
                    className: f.join(" "),
                    onClick: o,
                    onMouseEnter: () => l("pointer"),
                    onMouseLeave: () => l(),
                    children: ["play" == c && (0, r.jsx)("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "9",
                        height: "11",
                        fill: "none",
                        children: (0, r.jsx)("path", {
                            fill: "currentColor",
                            d: "M9 5.5.75 10.263V.737L9 5.5Z"
                        })
                    }), (0, r.jsx)("span", {
                        "data-title": u,
                        children: (0, r.jsx)("span", {
                            children: u
                        })
                    }), "downArrow" == c && (0, r.jsxs)("svg", {
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 11 9",
                        children: [(0, r.jsx)("path", {
                            d: "M.603.902h6.808V7.71",
                            stroke: "currentColor",
                            strokeWidth: ".851"
                        }), (0, r.jsx)("path", {
                            d: "m4.434 5.157 2.978 2.978 2.979-2.978",
                            stroke: "currentColor",
                            strokeWidth: ".851"
                        })]
                    })]
                })
            }
        },
        88610: function(e, t, n) {
            "use strict";
            n.d(t, {
                Z: function() {
                    return p
                }
            });
            var r = n(85893),
                o = n(46749),
                i = n.n(o),
                a = n(60541),
                s = n(67294),
                u = n(71130),
                c = n(48333),
                l = n(97180),
                f = n.n(l),
                d = n(10990);

            function p(e) {
                let {
                    videoId: t,
                    videoSecretId: n = 0,
                    open: o = !1,
                    callback: l,
                    parentRef: p
                } = e, g = (0, s.useRef)(null), h = (0, s.useRef)(null), m = (0, s.useRef)(), b = (0, u.Z)("(min-width: 1024px)"), {
                    onCursor: y
                } = (0, s.useContext)(a.uG), v = () => {
                    var e;
                    p.current && g.current && (null === (e = m.current) || void 0 === e || e.play(), d.ZP.to(g.current, {
                        pointerEvents: "all",
                        opacity: 1,
                        duration: .3,
                        x: 0,
                        y: 0,
                        width: "100%",
                        height: "100%",
                        onStart: () => {
                            var e;
                            document.body.classList.add("scroll-disable"), null === (e = document.body.querySelector(".".concat(f().primary))) || void 0 === e || e.classList.add(f().hide)
                        }
                    }))
                }, w = () => {
                    var e;
                    g.current && (null === (e = m.current) || void 0 === e || e.pause(), d.ZP.to(g.current, {
                        opacity: 0,
                        pointerEvents: "none",
                        onStart: () => {
                            var e;
                            document.body.classList.remove("scroll-disable"), null === (e = document.body.querySelector(".".concat(f().primary))) || void 0 === e || e.classList.remove(f().hide)
                        },
                        onComplete: () => {}
                    }))
                };
                return ((0, s.useEffect)(() => {
                    var e;
                    if (h.current && t) return m.current = new c.Z(h.current, {
                        id: t,
                        playsinline: !1,
                        controls: !1,
                        autoplay: !0,
                        muted: !1
                    }), null === (e = m.current) || void 0 === e || e.pause(), () => {
                        var e;
                        null === (e = m.current) || void 0 === e || e.destroy()
                    }
                }, []), (0, s.useEffect)(() => {
                    o ? v() : w()
                }, [o]), (0, s.useEffect)(() => {
                    if (!t) return;
                    let e = () => {
                        if (o) return !1;
                        let e = {
                            x: p.current.offsetLeft - window.scrollX,
                            y: p.current.offsetTop - window.scrollY,
                            width: p.current.offsetWidth,
                            height: p.current.offsetHeight
                        };
                        d.ZP.set(g.current, e)
                    };
                    return e(), window.addEventListener("scroll", e), window.addEventListener("resize", e), window.addEventListener("load", e), () => {
                        window.removeEventListener("scroll", e), window.removeEventListener("resize", e), window.removeEventListener("load", e)
                    }
                }, [o]), t) ? (0, r.jsx)("div", {
                    ref: g,
                    className: i().block,
                    onMouseEnter: () => y("close"),
                    onMouseLeave: () => y(),
                    onClick: () => l(!1),
                    children: (0, r.jsxs)("div", {
                        className: i().iframeBlock,
                        children: [!b && (0, r.jsx)("button", {
                            className: i().close,
                            children: "Close"
                        }), (0, r.jsx)("div", {
                            ref: h
                        })]
                    })
                }) : (0, r.jsx)(r.Fragment, {})
            }
        },
        53065: function(e, t, n) {
            "use strict";
            n.d(t, {
                Z: function() {
                    return o
                }
            });
            var r = n(47311);

            function o(e) {
                if (!e) return "";
                let t = e.replaceAll("\n", "<br />").replaceAll("{", "<b>").replaceAll("}", "</b>");
                return (0, r.ZP)(t)
            }
        },
        61211: function(e, t, n) {
            "use strict";
            n.d(t, {
                s: function() {
                    return o
                }
            });
            var r = n(67294);

            function o() {
                let e = (0, r.useRef)(!0);
                return (0, r.useEffect)(() => {
                    e.current = !1
                }, []), e.current
            }
        },
        71130: function(e, t, n) {
            "use strict";
            n.d(t, {
                Z: function() {
                    return o
                }
            });
            var r = n(67294);

            function o(e) {
                let [t, n] = (0, r.useState)();
                return (0, r.useEffect)(() => {
                    let t = window.matchMedia(e),
                        r = () => n(!!t.matches);
                    return r(), t.addEventListener("change", r), () => t.removeEventListener("change", r)
                }, [e]), t
            }
        },
        52695: function(e) {
            e.exports = {
                "sm-down": "max-width: 767px",
                "lg-up": "min-width: 1024px",
                "xl-up": "min-width: 1230px",
                "xxl-up": "min-width: 1450px",
                block: "HomepageHero_block__fV2a3",
                content: "HomepageHero_content__bCxLj",
                ticker: "HomepageHero_ticker__PXiPG",
                title: "HomepageHero_title__5hkUf",
                button: "HomepageHero_button__2YCRO",
                media: "HomepageHero_media__3Y_DB",
                bg: "HomepageHero_bg__BIqD1"
            }
        },
        14501: function(e) {
            e.exports = {
                "lg-up": "min-width: 1024px",
                ticker: "Ticker_ticker__ouUx5"
            }
        },
        38843: function(e) {
            e.exports = {
                button: "UnderlineButton_button__X6quS"
            }
        },
        46749: function(e) {
            e.exports = {
                "lg-up": "min-width: 1024px",
                block: "fullScreenVideo_block__15T6s",
                iframeBlock: "fullScreenVideo_iframeBlock__58qw8",
                close: "fullScreenVideo_close__6TqLx"
            }
        },
        41113: function(e, t, n) {
            var r;
            "undefined" != typeof self && self, e.exports = (r = n(67294), function(e) {
                var t = {};

                function n(r) {
                    if (t[r]) return t[r].exports;
                    var o = t[r] = {
                        i: r,
                        l: !1,
                        exports: {}
                    };
                    return e[r].call(o.exports, o, o.exports, n), o.l = !0, o.exports
                }
                return n.m = e, n.c = t, n.d = function(e, t, r) {
                    n.o(e, t) || Object.defineProperty(e, t, {
                        enumerable: !0,
                        get: r
                    })
                }, n.r = function(e) {
                    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                        value: "Module"
                    }), Object.defineProperty(e, "__esModule", {
                        value: !0
                    })
                }, n.t = function(e, t) {
                    if (1 & t && (e = n(e)), 8 & t || 4 & t && "object" == typeof e && e && e.__esModule) return e;
                    var r = Object.create(null);
                    if (n.r(r), Object.defineProperty(r, "default", {
                            enumerable: !0,
                            value: e
                        }), 2 & t && "string" != typeof e)
                        for (var o in e) n.d(r, o, (function(t) {
                            return e[t]
                        }).bind(null, o));
                    return r
                }, n.n = function(e) {
                    var t = e && e.__esModule ? function() {
                        return e.default
                    } : function() {
                        return e
                    };
                    return n.d(t, "a", t), t
                }, n.o = function(e, t) {
                    return Object.prototype.hasOwnProperty.call(e, t)
                }, n.p = "", n(n.s = 3)
            }([function(e, t) {
                e.exports = r
            }, function(e, t, n) {
                "use strict";

                function r(e) {
                    return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                        return typeof e
                    } : function(e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                    })(e)
                }

                function o(e, t) {
                    if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
                }

                function i(e, t) {
                    if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && a(e, t)
                }

                function a(e, t) {
                    return (a = Object.setPrototypeOf || function(e, t) {
                        return e.__proto__ = t, e
                    })(e, t)
                }

                function s(e) {
                    var t = function() {
                        if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                            return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), !0
                        } catch (e) {
                            return !1
                        }
                    }();
                    return function() {
                        var n, o, i = u(e);
                        if (t) {
                            var a = u(this).constructor;
                            o = Reflect.construct(i, arguments, a)
                        } else o = i.apply(this, arguments);
                        return (n = o) && ("object" === r(n) || "function" == typeof n) ? n : function(e) {
                            if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
                            return e
                        }(this)
                    }
                }

                function u(e) {
                    return (u = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                        return e.__proto__ || Object.getPrototypeOf(e)
                    })(e)
                }
                var c = this && this.__importDefault || function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.Background = t.Parallax = void 0;
                var l = c(n(0)),
                    f = function(e) {
                        i(n, e);
                        var t = s(n);

                        function n() {
                            return o(this, n), t.apply(this, arguments)
                        }
                        return n
                    }(l.default.Component);
                t.Parallax = f;
                var d = function(e) {
                    i(n, e);
                    var t = s(n);

                    function n() {
                        return o(this, n), t.apply(this, arguments)
                    }
                    return n
                }(l.default.Component);
                t.Background = d
            }, function(e, t, n) {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.canUseDOM = t.getNodeHeight = t.isScrolledIntoView = t.getWindowHeight = void 0, t.getWindowHeight = function(e) {
                    if (!e) return 0;
                    var t = window,
                        n = document,
                        r = n.documentElement,
                        o = n.getElementsByTagName("body")[0];
                    return t.innerHeight || r.clientHeight || o.clientHeight
                }, t.isScrolledIntoView = function(e) {
                    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                        r = arguments.length > 2 ? arguments[2] : void 0;
                    if (!r) return !1;
                    var o = e.getBoundingClientRect().top - n,
                        i = e.getBoundingClientRect().bottom + n;
                    return o <= t.getWindowHeight(r) && i >= 0
                }, t.getNodeHeight = function(e, n) {
                    return e ? n && "clientHeight" in n ? n.clientHeight : t.getWindowHeight(e) : 0
                }, t.canUseDOM = function() {
                    return !("undefined" == typeof window || !window.document || !window.document.createElement)
                }
            }, function(e, t, n) {
                "use strict";
                var r = this && this.__importDefault || function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.Background = t.Parallax = void 0;
                var o = r(n(4));
                t.Parallax = o.default;
                var i = r(n(7));
                t.Background = i.default
            }, function(e, t, n) {
                "use strict";

                function r(e) {
                    return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                        return typeof e
                    } : function(e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                    })(e)
                }

                function o(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                    }
                }

                function i(e, t) {
                    return (i = Object.setPrototypeOf || function(e, t) {
                        return e.__proto__ = t, e
                    })(e, t)
                }

                function a(e) {
                    return (a = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                        return e.__proto__ || Object.getPrototypeOf(e)
                    })(e)
                }
                var s = this && this.__importDefault || function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var u = s(n(0)),
                    c = n(1),
                    l = n(5),
                    f = n(2),
                    d = s(n(6)),
                    p = {
                        position: "absolute",
                        left: "50%",
                        WebkitTransform: "translate3d(-50%, 0, 0)",
                        transform: "translate3d(-50%, 0, 0)",
                        WebkitTransformStyle: "preserve-3d",
                        WebkitBackfaceVisibility: "hidden",
                        MozBackfaceVisibility: "hidden",
                        MsBackfaceVisibility: "hidden"
                    },
                    g = function(e) {
                        ! function(e, t) {
                            if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
                            e.prototype = Object.create(t && t.prototype, {
                                constructor: {
                                    value: e,
                                    writable: !0,
                                    configurable: !0
                                }
                            }), t && i(e, t)
                        }(g, e);
                        var t, n, s, c = (t = function() {
                            if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
                            if ("function" == typeof Proxy) return !0;
                            try {
                                return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), !0
                            } catch (e) {
                                return !1
                            }
                        }(), function() {
                            var e, n, o = a(g);
                            if (t) {
                                var i = a(this).constructor;
                                n = Reflect.construct(o, arguments, i)
                            } else n = o.apply(this, arguments);
                            return (e = n) && ("object" === r(e) || "function" == typeof e) ? e : function(e) {
                                if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
                                return e
                            }(this)
                        });

                        function g(e) {
                            var t;
                            return function(e, t) {
                                if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
                            }(this, g), (t = c.call(this, e)).onWindowResize = function() {
                                t.parentHeight = f.getNodeHeight(t.canUseDOM, t.parent), t.updatePosition()
                            }, t.onWindowLoad = function() {
                                t.updatePosition()
                            }, t.onScroll = function() {
                                if (t.canUseDOM) {
                                    var e = Date.now();
                                    e - t.timestamp >= 10 && f.isScrolledIntoView(t.node, 100, t.canUseDOM) && (window.requestAnimationFrame(t.updatePosition), t.timestamp = e)
                                }
                            }, t.onContentMount = function(e) {
                                t.content = e
                            }, t.updatePosition = function() {
                                if (t.content) {
                                    var e = !1;
                                    t.contentHeight = t.content.getBoundingClientRect().height, t.contentWidth = t.node.getBoundingClientRect().width, t.img && t.img.naturalWidth / t.img.naturalHeight < t.contentWidth / t.getImageHeight() && (e = !0);
                                    var n = l.getRelativePosition(t.node, t.canUseDOM),
                                        r = !!t.img,
                                        o = t.bg && t.state.splitChildren.bgChildren.length > 0;
                                    r && t.setImagePosition(n, e), o && t.setBackgroundPosition(n), r || o || t.setState({
                                        percentage: n
                                    })
                                }
                            }, t.state = {
                                bgImage: e.bgImage,
                                bgImageSrcSet: e.bgImageSrcSet,
                                bgImageSizes: e.bgImageSizes,
                                imgStyle: p,
                                bgStyle: Object.assign(Object.assign({}, p), e.bgStyle),
                                percentage: 0,
                                splitChildren: l.getSplitChildren(e)
                            }, t.canUseDOM = f.canUseDOM(), t.node = null, t.content = null, t.bgImageLoaded = !1, t.bgImageRef = void 0, t.parent = e.parent, t.parentHeight = f.getNodeHeight(t.canUseDOM, t.parent), t.timestamp = Date.now(), t.isDynamicBlur = l.getHasDynamicBlur(e.blur), t
                        }
                        return n = [{
                            key: "componentDidMount",
                            value: function() {
                                var e = this.props.parent,
                                    t = this.state,
                                    n = t.bgImage,
                                    r = t.bgImageSrcSet,
                                    o = t.bgImageSizes;
                                this.parent = e || document, this.addListeners(), n ? this.loadImage(n, r, o) : this.updatePosition()
                            }
                        }, {
                            key: "componentDidUpdate",
                            value: function(e) {
                                var t = this.props,
                                    n = t.parent,
                                    r = t.bgImage,
                                    o = t.bgImageSrcSet,
                                    i = t.bgImageSizes,
                                    a = this.state.bgImage;
                                e.parent !== n && (this.removeListeners(this.parent), this.parent = n, n && this.addListeners()), this.parentHeight = f.getNodeHeight(this.canUseDOM, this.parent), a !== r && this.loadImage(r, o, i)
                            }
                        }, {
                            key: "componentWillUnmount",
                            value: function() {
                                this.removeListeners(this.parent), this.releaseImage()
                            }
                        }, {
                            key: "setBackgroundPosition",
                            value: function(e) {
                                var t = this.props,
                                    n = t.disabled,
                                    r = t.strength,
                                    o = Object.assign({}, this.state.bgStyle);
                                if (!n) {
                                    var i = "translate3d(-50%, ".concat((r < 0 ? r : 0) - r * e, "px, 0)");
                                    o.WebkitTransform = i, o.transform = i
                                }
                                this.setState({
                                    bgStyle: o,
                                    percentage: e
                                })
                            }
                        }, {
                            key: "setImagePosition",
                            value: function(e) {
                                var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                                    n = this.props,
                                    r = n.disabled,
                                    o = n.strength,
                                    i = n.blur,
                                    a = t ? "auto" : "".concat(this.getImageHeight(), "px"),
                                    s = t ? "".concat(this.contentWidth, "px") : "auto",
                                    u = Object.assign(Object.assign({}, this.state.imgStyle), {
                                        height: a,
                                        width: s
                                    });
                                if (!r) {
                                    var c = (o < 0 ? o : 0) - o * e,
                                        f = "translate3d(-50%, ".concat(c, "px, 0)"),
                                        d = "none";
                                    i && (d = "blur(".concat(l.getBlurValue(this.isDynamicBlur, i, e), "px)")), u.WebkitTransform = f, u.transform = f, u.WebkitFilter = d, u.filter = d
                                }
                                this.setState({
                                    imgStyle: u,
                                    percentage: e
                                })
                            }
                        }, {
                            key: "getImageHeight",
                            value: function() {
                                var e = this.props.strength;
                                return Math.floor(this.contentHeight + (e < 0 ? 2.5 : 1) * Math.abs(e))
                            }
                        }, {
                            key: "loadImage",
                            value: function(e, t, n) {
                                var r = this;
                                this.releaseImage(), this.bgImageRef = new Image, this.bgImageRef.onload = function(o) {
                                    r.setState({
                                        bgImage: e,
                                        bgImageSrcSet: t,
                                        bgImageSizes: n
                                    }, function() {
                                        return r.updatePosition()
                                    }), r.props.onLoad && r.props.onLoad(o)
                                }, this.bgImageRef.onerror = this.bgImageRef.onload, this.bgImageRef.src = e, this.bgImageRef.srcset = t || "", this.bgImageRef.sizes = n || ""
                            }
                        }, {
                            key: "releaseImage",
                            value: function() {
                                this.bgImageRef && (this.bgImageRef.onload = null, this.bgImageRef.onerror = null, delete this.bgImageRef)
                            }
                        }, {
                            key: "addListeners",
                            value: function() {
                                this.canUseDOM && this.parent && (this.parent.addEventListener("scroll", this.onScroll, !1), window.addEventListener("resize", this.onWindowResize, !1), window.addEventListener("load", this.onWindowLoad, !1))
                            }
                        }, {
                            key: "removeListeners",
                            value: function(e) {
                                this.canUseDOM && (e && e.removeEventListener("scroll", this.onScroll, !1), window.removeEventListener("resize", this.onWindowResize, !1), window.removeEventListener("load", this.onWindowLoad, !1))
                            }
                        }, {
                            key: "render",
                            value: function() {
                                var e = this,
                                    t = this.props,
                                    n = t.className,
                                    r = t.style,
                                    o = t.bgClassName,
                                    i = t.contentClassName,
                                    a = t.bgImageAlt,
                                    s = t.renderLayer,
                                    c = t.bgImageStyle,
                                    l = t.lazy,
                                    f = this.state,
                                    p = f.bgImage,
                                    g = f.bgImageSrcSet,
                                    h = f.bgImageSizes,
                                    m = f.percentage,
                                    b = f.imgStyle,
                                    y = f.bgStyle,
                                    v = f.splitChildren;
                                return u.default.createElement("div", {
                                    className: "react-parallax ".concat(n),
                                    style: Object.assign({
                                        position: "relative",
                                        overflow: "hidden"
                                    }, r),
                                    ref: function(t) {
                                        e.node = t
                                    }
                                }, p ? u.default.createElement("img", {
                                    className: o,
                                    src: p,
                                    srcSet: g,
                                    sizes: h,
                                    ref: function(t) {
                                        e.img = t
                                    },
                                    alt: a,
                                    style: Object.assign(Object.assign({}, b), c),
                                    loading: l ? "lazy" : "eager"
                                }) : null, s ? s(-(m - 1)) : null, v.bgChildren.length > 0 ? u.default.createElement("div", {
                                    className: "react-parallax-background-children",
                                    ref: function(t) {
                                        e.bg = t
                                    },
                                    style: y
                                }, v.bgChildren) : null, u.default.createElement(d.default, {
                                    onMount: this.onContentMount,
                                    className: i
                                }, v.children))
                            }
                        }], s = [{
                            key: "getDerivedStateFromProps",
                            value: function(e) {
                                return {
                                    splitChildren: l.getSplitChildren(e)
                                }
                            }
                        }], n && o(g.prototype, n), s && o(g, s), g
                    }(c.Parallax);
                g.defaultProps = {
                    bgClassName: "react-parallax-bgimage",
                    bgImageAlt: "",
                    className: "",
                    contentClassName: "",
                    disabled: !1,
                    strength: 100
                }, t.default = g
            }, function(e, t, n) {
                "use strict";

                function r(e) {
                    return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                        return typeof e
                    } : function(e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                    })(e)
                }
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.setBlur = t.getBlurValue = t.getHasDynamicBlur = t.getSplitChildren = t.getRelativePosition = t.getPercentage = void 0;
                var o = n(0),
                    i = n(2);
                t.getPercentage = function(e, t, n) {
                    return (n - e) / (t - e) || 0
                }, t.getRelativePosition = function(e, n) {
                    if (!n) return 0;
                    var r = e.getBoundingClientRect(),
                        o = r.top,
                        a = r.height,
                        s = i.getNodeHeight(n),
                        u = a > s ? a : s,
                        c = Math.round(o > u ? u : o);
                    return t.getPercentage(0, u, c)
                }, t.getSplitChildren = function(e) {
                    var t = [],
                        n = o.Children.toArray(e.children);
                    return n.forEach(function(e, r) {
                        e.type && e.type.isParallaxBackground && (t = t.concat(n.splice(r, 1)))
                    }), {
                        bgChildren: t,
                        children: n
                    }
                }, t.getHasDynamicBlur = function(e) {
                    return "object" === r(e) && void 0 !== e.min && void 0 !== e.max
                }, t.getBlurValue = function(e, t, n) {
                    return e ? t.min + (1 - n) * t.max : t
                }, t.setBlur = function(e, t) {
                    e.style.webkitFilter = "blur(".concat(t, "px)"), e.style.filter = "blur(".concat(t, "px)")
                }
            }, function(e, t, n) {
                "use strict";
                var r = this && this.__importDefault || function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var o = r(n(0));
                t.default = function(e) {
                    var t = e.children,
                        n = e.onMount,
                        r = e.className;
                    return o.default.createElement("div", {
                        ref: function(e) {
                            return n(e)
                        },
                        className: r || "react-parallax-content",
                        style: {
                            position: "relative"
                        }
                    }, t)
                }
            }, function(e, t, n) {
                "use strict";

                function r(e) {
                    return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                        return typeof e
                    } : function(e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                    })(e)
                }

                function o(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                    }
                }

                function i(e, t) {
                    return (i = Object.setPrototypeOf || function(e, t) {
                        return e.__proto__ = t, e
                    })(e, t)
                }

                function a(e) {
                    return (a = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                        return e.__proto__ || Object.getPrototypeOf(e)
                    })(e)
                }
                var s = this && this.__importDefault || function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var u = s(n(0)),
                    c = function(e) {
                        ! function(e, t) {
                            if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
                            e.prototype = Object.create(t && t.prototype, {
                                constructor: {
                                    value: e,
                                    writable: !0,
                                    configurable: !0
                                }
                            }), t && i(e, t)
                        }(l, e);
                        var t, n, s, c = (t = function() {
                            if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
                            if ("function" == typeof Proxy) return !0;
                            try {
                                return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), !0
                            } catch (e) {
                                return !1
                            }
                        }(), function() {
                            var e, n, o = a(l);
                            if (t) {
                                var i = a(this).constructor;
                                n = Reflect.construct(o, arguments, i)
                            } else n = o.apply(this, arguments);
                            return (e = n) && ("object" === r(e) || "function" == typeof e) ? e : function(e) {
                                if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
                                return e
                            }(this)
                        });

                        function l() {
                            return function(e, t) {
                                if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
                            }(this, l), c.apply(this, arguments)
                        }
                        return n = [{
                            key: "render",
                            value: function() {
                                var e = this.props,
                                    t = e.className,
                                    n = e.children;
                                return u.default.createElement("div", {
                                    className: "react-parallax-background ".concat(t)
                                }, n)
                            }
                        }], o(l.prototype, n), s && o(l, s), l
                    }(n(1).Background);
                c.defaultProps = {
                    className: ""
                }, c.isParallaxBackground = !0, t.default = c
            }]))
        }
    }
]);