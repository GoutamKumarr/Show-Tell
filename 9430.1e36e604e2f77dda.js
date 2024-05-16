(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [9430], {
        39430: function(e, t, n) {
            "use strict";
            n.r(t);
            var r = n(85893),
                o = n(67294),
                i = n(88825),
                a = n.n(i),
                u = n(63003),
                c = n(52506),
                s = n(59706),
                l = n(41113),
                f = n(19763),
                d = n(25675),
                g = n.n(d);
            t.default = e => {
                let {
                    textContent: t,
                    linkText: n,
                    linkedPage: i,
                    bigImage: d,
                    firstSmallImage: p,
                    secondSmallImage: h
                } = e, m = (0, o.useRef)(null), b = (0, f._)({
                    type: "fadeIn"
                });
                return (0, r.jsx)("section", {
                    ref: m,
                    className: a().block,
                    children: (0, r.jsxs)(s.Z, {
                        children: [(0, r.jsx)(l.Parallax, {
                            className: a().bigImage,
                            strength: 300,
                            children: (0, r.jsx)(l.Background, {
                                children: (0, r.jsx)(g(), {
                                    src: d.url,
                                    alt: d.alt,
                                    fill: !0,
                                    sizes: "100vw"
                                })
                            })
                        }), (0, r.jsx)(u.v, {
                            text: "Studio — Our Studio -",
                            reverse: !0
                        }), (0, r.jsxs)("div", {
                            ref: b,
                            className: a().content,
                            children: [(0, r.jsx)("div", {
                                className: a().text,
                                children: t
                            }), (0, r.jsx)("div", {
                                className: a().link,
                                children: (0, r.jsx)(c.Z, {
                                    href: i.value.slug,
                                    label: n
                                })
                            })]
                        }), (0, r.jsxs)("div", {
                            className: a().images,
                            children: [(0, r.jsx)(l.Parallax, {
                                className: a().firstSmallImage,
                                strength: -100,
                                children: (0, r.jsx)(l.Background, {
                                    children: (0, r.jsx)(g(), {
                                        src: p.url,
                                        alt: p.alt,
                                        fill: !0,
                                        sizes: "27vw"
                                    })
                                })
                            }), (0, r.jsx)(l.Parallax, {
                                className: a().secondSmallImage,
                                strength: 100,
                                children: (0, r.jsx)(l.Background, {
                                    children: (0, r.jsx)(g(), {
                                        src: h.url,
                                        alt: h.alt,
                                        fill: !0,
                                        sizes: "43vw"
                                    })
                                })
                            })]
                        })]
                    })
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
                u = n(10990),
                c = n(42708),
                s = n(1642),
                l = n(59632),
                f = n.n(l);
            let d = e => {
                let {
                    text: t,
                    reverse: n = !1,
                    className: i = "",
                    speed: l = 200
                } = e, d = (0, o.useRef)(null), g = (0, o.useRef)(), [p, h] = (0, c.YD)({}), m = (0, o.useCallback)(e => {
                    d.current = e, p(e)
                }, [p]), b = e => {
                    u.p8.set(e, {
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
                    let o = u.p8.context(() => {
                            g.current = u.p8.timeline({
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
                        children: f()(t, "*", (e, t) => (0, r.jsx)(s.Subtract, {}, t))
                    })
                })
            }
        },
        88825: function(e) {
            e.exports = {
                "sm-down": "max-width: 767px",
                "lg-up": "min-width: 1024px",
                block: "OurStudio_block__Ewv0V",
                bigImage: "OurStudio_bigImage__ovCGv",
                content: "OurStudio_content___KRKg",
                text: "OurStudio_text__LRbFv",
                link: "OurStudio_link__AUghH",
                images: "OurStudio_images__fQrYO",
                firstSmallImage: "OurStudio_firstSmallImage__XIYRT",
                secondSmallImage: "OurStudio_secondSmallImage__UVzWj"
            }
        },
        14501: function(e) {
            e.exports = {
                "lg-up": "min-width: 1024px",
                ticker: "Ticker_ticker__ouUx5"
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

                function u(e) {
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
                        var n, o, i = c(e);
                        if (t) {
                            var a = c(this).constructor;
                            o = Reflect.construct(i, arguments, a)
                        } else o = i.apply(this, arguments);
                        return (n = o) && ("object" === r(n) || "function" == typeof n) ? n : function(e) {
                            if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
                            return e
                        }(this)
                    }
                }

                function c(e) {
                    return (c = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
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
                }), t.Background = t.Parallax = void 0;
                var l = s(n(0)),
                    f = function(e) {
                        i(n, e);
                        var t = u(n);

                        function n() {
                            return o(this, n), t.apply(this, arguments)
                        }
                        return n
                    }(l.default.Component);
                t.Parallax = f;
                var d = function(e) {
                    i(n, e);
                    var t = u(n);

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
                var u = this && this.__importDefault || function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var c = u(n(0)),
                    s = n(1),
                    l = n(5),
                    f = n(2),
                    d = u(n(6)),
                    g = {
                        position: "absolute",
                        left: "50%",
                        WebkitTransform: "translate3d(-50%, 0, 0)",
                        transform: "translate3d(-50%, 0, 0)",
                        WebkitTransformStyle: "preserve-3d",
                        WebkitBackfaceVisibility: "hidden",
                        MozBackfaceVisibility: "hidden",
                        MsBackfaceVisibility: "hidden"
                    },
                    p = function(e) {
                        ! function(e, t) {
                            if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
                            e.prototype = Object.create(t && t.prototype, {
                                constructor: {
                                    value: e,
                                    writable: !0,
                                    configurable: !0
                                }
                            }), t && i(e, t)
                        }(p, e);
                        var t, n, u, s = (t = function() {
                            if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
                            if ("function" == typeof Proxy) return !0;
                            try {
                                return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), !0
                            } catch (e) {
                                return !1
                            }
                        }(), function() {
                            var e, n, o = a(p);
                            if (t) {
                                var i = a(this).constructor;
                                n = Reflect.construct(o, arguments, i)
                            } else n = o.apply(this, arguments);
                            return (e = n) && ("object" === r(e) || "function" == typeof e) ? e : function(e) {
                                if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
                                return e
                            }(this)
                        });

                        function p(e) {
                            var t;
                            return function(e, t) {
                                if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
                            }(this, p), (t = s.call(this, e)).onWindowResize = function() {
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
                                imgStyle: g,
                                bgStyle: Object.assign(Object.assign({}, g), e.bgStyle),
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
                                    u = t ? "".concat(this.contentWidth, "px") : "auto",
                                    c = Object.assign(Object.assign({}, this.state.imgStyle), {
                                        height: a,
                                        width: u
                                    });
                                if (!r) {
                                    var s = (o < 0 ? o : 0) - o * e,
                                        f = "translate3d(-50%, ".concat(s, "px, 0)"),
                                        d = "none";
                                    i && (d = "blur(".concat(l.getBlurValue(this.isDynamicBlur, i, e), "px)")), c.WebkitTransform = f, c.transform = f, c.WebkitFilter = d, c.filter = d
                                }
                                this.setState({
                                    imgStyle: c,
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
                                    u = t.renderLayer,
                                    s = t.bgImageStyle,
                                    l = t.lazy,
                                    f = this.state,
                                    g = f.bgImage,
                                    p = f.bgImageSrcSet,
                                    h = f.bgImageSizes,
                                    m = f.percentage,
                                    b = f.imgStyle,
                                    y = f.bgStyle,
                                    v = f.splitChildren;
                                return c.default.createElement("div", {
                                    className: "react-parallax ".concat(n),
                                    style: Object.assign({
                                        position: "relative",
                                        overflow: "hidden"
                                    }, r),
                                    ref: function(t) {
                                        e.node = t
                                    }
                                }, g ? c.default.createElement("img", {
                                    className: o,
                                    src: g,
                                    srcSet: p,
                                    sizes: h,
                                    ref: function(t) {
                                        e.img = t
                                    },
                                    alt: a,
                                    style: Object.assign(Object.assign({}, b), s),
                                    loading: l ? "lazy" : "eager"
                                }) : null, u ? u(-(m - 1)) : null, v.bgChildren.length > 0 ? c.default.createElement("div", {
                                    className: "react-parallax-background-children",
                                    ref: function(t) {
                                        e.bg = t
                                    },
                                    style: y
                                }, v.bgChildren) : null, c.default.createElement(d.default, {
                                    onMount: this.onContentMount,
                                    className: i
                                }, v.children))
                            }
                        }], u = [{
                            key: "getDerivedStateFromProps",
                            value: function(e) {
                                return {
                                    splitChildren: l.getSplitChildren(e)
                                }
                            }
                        }], n && o(p.prototype, n), u && o(p, u), p
                    }(s.Parallax);
                p.defaultProps = {
                    bgClassName: "react-parallax-bgimage",
                    bgImageAlt: "",
                    className: "",
                    contentClassName: "",
                    disabled: !1,
                    strength: 100
                }, t.default = p
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
                        u = i.getNodeHeight(n),
                        c = a > u ? a : u,
                        s = Math.round(o > c ? c : o);
                    return t.getPercentage(0, c, s)
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
                var u = this && this.__importDefault || function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var c = u(n(0)),
                    s = function(e) {
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
                        var t, n, u, s = (t = function() {
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
                            }(this, l), s.apply(this, arguments)
                        }
                        return n = [{
                            key: "render",
                            value: function() {
                                var e = this.props,
                                    t = e.className,
                                    n = e.children;
                                return c.default.createElement("div", {
                                    className: "react-parallax-background ".concat(t)
                                }, n)
                            }
                        }], o(l.prototype, n), u && o(l, u), l
                    }(n(1).Background);
                s.defaultProps = {
                    className: ""
                }, s.isParallaxBackground = !0, t.default = s
            }]))
        },
        59632: function(e) {
            var t = function(e) {
                    var t = /[\\^$.*+?()[\]{}|]/g,
                        n = RegExp(t.source);
                    return e && n.test(e) ? e.replace(t, "\\$&") : e
                },
                n = function(e) {
                    return "string" == typeof e
                },
                r = function(e) {
                    var t = [];
                    return e.forEach(function(e) {
                        Array.isArray(e) ? t = t.concat(e) : t.push(e)
                    }), t
                };
            e.exports = function(e, o, i) {
                return Array.isArray(e) || (e = [e]), r(e.map(function(e) {
                    return n(e) ? function(e, r, o) {
                        var i = 0,
                            a = 0;
                        if ("" === e) return e;
                        if (!e || !n(e)) throw TypeError("First argument to react-string-replace#replaceString must be a string");
                        var u = r;
                        u instanceof RegExp || (u = RegExp("(" + t(u) + ")", "gi"));
                        for (var c = e.split(u), s = 1, l = c.length; s < l; s += 2) {
                            if (void 0 === c[s] || void 0 === c[s - 1]) {
                                console.warn("reactStringReplace: Encountered undefined value during string replacement. Your RegExp may not be working the way you expect.");
                                continue
                            }
                            a = c[s].length, i += c[s - 1].length, c[s] = o(c[s], s, i), i += a
                        }
                        return c
                    }(e, o, i) : e
                }))
            }
        }
    }
]);