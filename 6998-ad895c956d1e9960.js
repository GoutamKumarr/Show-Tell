(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [6998], {
        63429: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return l
                }
            });
            var n = r(85893),
                i = r(67294),
                s = r(60541),
                c = r(18515),
                o = r.n(c),
                u = r(81829);

            function l(e) {
                let {
                    article: t
                } = e, {
                    onCursor: r
                } = (0, i.useContext)(s.uG);
                return (0, n.jsxs)("section", {
                    className: o().block,
                    onMouseEnter: () => r("view"),
                    onMouseLeave: () => r(),
                    children: [(0, n.jsx)(u.t, { ...t.value
                    }), (0, n.jsx)(u.uT, {
                        className: o().articleBody,
                        ...t.value,
                        isFeatured: !0
                    })]
                })
            }
        },
        80629: function(e, t, r) {
            "use strict";
            r.d(t, {
                Z: function() {
                    return h
                }
            });
            var n = r(85893),
                i = r(59706),
                s = r(7129),
                c = r.n(s),
                o = r(81829),
                u = r(75228),
                l = r(61211),
                a = r(56546),
                d = r(67294),
                f = r(42708),
                p = r(10990);

            function h(e) {
                let {
                    docs: t,
                    nextPage: r,
                    categories: s,
                    locale: h,
                    limit: g,
                    currentCategory: m
                } = e, [x, v] = (0, d.useState)({
                    prev: "",
                    current: ""
                }), [_, w] = (0, d.useState)(r), [j, b] = (0, d.useState)(t), [y, k] = (0, d.useState)(m), E = (0, d.useRef)(null), N = (0, d.useRef)(), C = (0, l.s)(), [S, L] = (0, f.YD)({
                    triggerOnce: !0
                }), R = async () => {
                    let e = "";
                    y && y.id && (e += "&where[category.value][equals]=".concat(y.id));
                    let t = await fetch("/api/insights?page=".concat(_).concat(e, "&limit=").concat(g, "&depth=1&sort=-customPublishDate&locale=").concat(h));
                    return t.json()
                };
                return (0, d.useEffect)(() => {
                    C || (v(e => ({
                        prev: e.current,
                        current: "cat_switch"
                    })), w(1), window.history.pushState({}, "", "".concat(window.location.origin, "/insights/").concat(y && y.slug || "")))
                }, [y]), (0, d.useEffect)(() => {
                    x.current && !x.prev && null !== _ && R().then(e => {
                        "loadmore" == x.current ? b(j.concat(e.docs)) : b(e.docs), w(e.nextPage), v(e => ({
                            prev: e.current,
                            current: ""
                        }))
                    })
                }, [x]), (0, d.useEffect)(() => (N.current = a.ScrollTrigger.create({
                    trigger: E.current,
                    start: "top top",
                    end: "bottom bottom",
                    onUpdate: e => {
                        let t = +e.progress.toFixed(2);
                        !x.current && t >= .75 && 1 === e.direction && v(e => ({
                            prev: e.current,
                            current: "loadmore"
                        }))
                    }
                }), () => {
                    N.current && N.current.kill()
                }), [x]), (0, d.useEffect)(() => {
                    var e;
                    null === (e = N.current) || void 0 === e || e.refresh()
                }, [j, x]), (0, d.useEffect)(() => {
                    if (!L) return;
                    let e = {
                            threshold: .3
                        },
                        t = p.ZP.context(() => {
                            var t;
                            let r = null === (t = E.current) || void 0 === t ? void 0 : t.querySelectorAll("article"),
                                n = p.ZP.timeline(),
                                i = new IntersectionObserver(function(e, t) {
                                    e.forEach(e => {
                                        if ("cat_switch" != x.prev && (0 >= a.ScrollTrigger.positionInViewport(e.target) || "1" == e.target.style.opacity)) t.unobserve(e.target);
                                        else if (e.isIntersecting) {
                                            let r = "-=0.4";
                                            n.isActive() || (r = "+=0"), n.to(e.target, {
                                                opacity: 1
                                            }, r), t.unobserve(e.target)
                                        }
                                    })
                                }, e);
                            r && (p.ZP.set(r, {
                                opacity: (e, t) => "cat_switch" != x.prev && (0 >= a.ScrollTrigger.positionInViewport(t) || a.ScrollTrigger.isInViewport(t)) ? 1 : 0
                            }), r.forEach(e => {
                                i.observe(e)
                            }))
                        }, E);
                    return () => {
                        t.revert()
                    }
                }, [L, j]), (0, n.jsx)("section", {
                    ref: S,
                    className: c().block,
                    children: (0, n.jsxs)(i.Z, {
                        className: c().wrapper,
                        children: [j.length ? (0, n.jsx)("div", {
                            ref: E,
                            className: c().items,
                            children: j.map((e, t) => (0, n.jsx)(o.ZP, { ...e
                            }, t))
                        }) : (0, n.jsx)("div", {
                            className: c().nothingFound,
                            children: "Nothing Found"
                        }), null !== _ && x.current && (0, n.jsx)("div", {
                            className: c().loading + " " + c()[x.current],
                            children: (0, n.jsx)("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                viewBox: "0 0 45 45",
                                stroke: "currentColor",
                                children: (0, n.jsxs)("g", {
                                    fill: "none",
                                    fillRule: "evenodd",
                                    strokeWidth: 2,
                                    transform: "translate(1 1)",
                                    children: [(0, n.jsxs)("circle", {
                                        cx: 22,
                                        cy: 22,
                                        r: 6,
                                        stroke: "currentColor",
                                        children: [(0, n.jsx)("animate", {
                                            attributeName: "r",
                                            begin: "1.5s",
                                            calcMode: "linear",
                                            dur: "3s",
                                            repeatCount: "indefinite",
                                            values: "6;22"
                                        }), (0, n.jsx)("animate", {
                                            attributeName: "stroke-opacity",
                                            begin: "1.5s",
                                            calcMode: "linear",
                                            dur: "3s",
                                            repeatCount: "indefinite",
                                            values: "1;0"
                                        }), (0, n.jsx)("animate", {
                                            attributeName: "stroke-width",
                                            begin: "1.5s",
                                            calcMode: "linear",
                                            dur: "3s",
                                            repeatCount: "indefinite",
                                            values: "2;0"
                                        })]
                                    }), (0, n.jsxs)("circle", {
                                        cx: 22,
                                        cy: 22,
                                        r: 6,
                                        stroke: "currentColor",
                                        children: [(0, n.jsx)("animate", {
                                            attributeName: "r",
                                            begin: "3s",
                                            calcMode: "linear",
                                            dur: "3s",
                                            repeatCount: "indefinite",
                                            values: "6;22"
                                        }), (0, n.jsx)("animate", {
                                            attributeName: "stroke-opacity",
                                            begin: "3s",
                                            calcMode: "linear",
                                            dur: "3s",
                                            repeatCount: "indefinite",
                                            values: "1;0"
                                        }), (0, n.jsx)("animate", {
                                            attributeName: "stroke-width",
                                            begin: "3s",
                                            calcMode: "linear",
                                            dur: "3s",
                                            repeatCount: "indefinite",
                                            values: "2;0"
                                        })]
                                    }), (0, n.jsx)("circle", {
                                        cx: 22,
                                        cy: 22,
                                        r: 8,
                                        children: (0, n.jsx)("animate", {
                                            attributeName: "r",
                                            begin: "0s",
                                            calcMode: "linear",
                                            dur: "1.5s",
                                            repeatCount: "indefinite",
                                            values: "6;1;2;3;4;5;6"
                                        })
                                    })]
                                })
                            })
                        }), (0, n.jsx)(u.B, {
                            current: y,
                            items: s,
                            callback: k
                        })]
                    })
                })
            }
        },
        9986: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return h
                }
            });
            var n = r(85893),
                i = r(84114),
                s = r.n(i),
                c = r(63003),
                o = r(1642),
                u = r(67294),
                l = r(10990),
                a = r(65829),
                d = r(16953),
                f = r(19912),
                p = r(19763);

            function h(e) {
                let {
                    title: t,
                    ticker_text: r = !1,
                    description: i,
                    titleSize: h
                } = e, g = [s().block], m = (0, u.useRef)(null), x = (0, u.useRef)(null), v = (0, p._)({
                    type: "fadeIn",
                    delay: "pageLoading"
                }), _ = (0, p._)({
                    type: "byWord",
                    delay: "pageLoading"
                }), {
                    animationDelay: w
                } = (0, u.useContext)(d.GlobalContext);
                return h && "Default" != h && g.push(s()["title".concat(h)]), (0, u.useEffect)(() => {
                    if (r || !x.current) return;
                    let e = new a.Z(x.current, {
                            types: "words,lines",
                            lineClass: s().line
                        }),
                        t = l.p8.context(() => {
                            l.p8.fromTo(e.words, {
                                y: "100%"
                            }, {
                                y: "0%",
                                stagger: .05,
                                delay: w
                            })
                        }, x);
                    return () => {
                        t.revert(), e.revert()
                    }
                }, []), (0, n.jsxs)("section", {
                    ref: m,
                    className: g.join(" "),
                    children: [(0, n.jsx)("h1", {
                        ref: x,
                        children: r ? (0, n.jsx)(c.v, {
                            className: s().ticker,
                            text: t
                        }) : t
                    }), i && (0, n.jsxs)("div", {
                        ref: v,
                        className: s().description,
                        children: [(0, n.jsx)(o.Subtract, {}), (0, n.jsx)("p", {
                            ref: _,
                            children: (0, f.Z)(i)
                        })]
                    })]
                })
            }
        },
        75228: function(e, t, r) {
            "use strict";
            r.d(t, {
                B: function() {
                    return d
                }
            });
            var n = r(85893),
                i = r(60541),
                s = r(71130),
                c = r(67294),
                o = r(96630),
                u = r(20833),
                l = r.n(u),
                a = r(10990);

            function d(e) {
                let {
                    current: t,
                    items: r,
                    callback: u
                } = e, d = (0, c.useRef)(null), [f, p] = (0, c.useState)(!1), h = (0, c.useRef)(null), {
                    onCursor: g
                } = (0, c.useContext)(i.uG), m = (0, s.Z)("(min-width: 1024px)"), x = e => {
                    var t, r;
                    u(e), p(!1);
                    let n = (null === (r = d.current) || void 0 === r ? void 0 : null === (t = r.parentElement) || void 0 === t ? void 0 : t.getBoundingClientRect().top) || 0;
                    window.scrollTo({
                        top: n + window.scrollY - 120,
                        left: 0,
                        behavior: "smooth"
                    })
                };
                return (0, c.useEffect)(() => {
                    h.current && (f ? (a.p8.from(h.current, {
                        width: 0,
                        duration: .3
                    }), a.p8.from(h.current, {
                        height: 0,
                        delay: .3,
                        duration: .4
                    })) : (a.p8.to(h.current, {
                        height: 0,
                        duration: .4
                    }), a.p8.to(h.current, {
                        width: 0,
                        delay: .4,
                        duration: .3
                    })))
                }, [f]), (0, c.useEffect)(() => {
                    let e = e => {
                        d.current && !d.current.contains(e.target) && p(!1)
                    };
                    return document.addEventListener("mousedown", e), () => {
                        document.removeEventListener("mousedown", e)
                    }
                }, []), (0, n.jsx)("div", {
                    ref: d,
                    className: l().filter,
                    "aria-current": f,
                    children: (0, n.jsxs)("div", {
                        className: l().inner,
                        children: [(0, n.jsx)(o.ZP, { in: f || m,
                            timeout: 500,
                            unmountOnExit: !0,
                            children: (0, n.jsxs)("ul", {
                                ref: h,
                                children: [(0, n.jsx)("li", {
                                    children: (0, n.jsx)("button", {
                                        onClick: () => x({
                                            id: "",
                                            title: "",
                                            slug: ""
                                        }),
                                        "data-current": !t || !t.id,
                                        onMouseEnter: () => g("pointer"),
                                        onMouseLeave: () => g(),
                                        children: "All"
                                    })
                                }), r.map(e => {
                                    let {
                                        id: r,
                                        title: i,
                                        slug: s
                                    } = e;
                                    return (0, n.jsx)("li", {
                                        children: (0, n.jsx)("button", {
                                            onClick: () => x({
                                                id: r,
                                                title: i,
                                                slug: s
                                            }),
                                            "data-current": r == (t && t.id),
                                            onMouseEnter: () => g("pointer"),
                                            onMouseLeave: () => g(),
                                            children: i
                                        })
                                    }, r)
                                })]
                            })
                        }), !m && (0, n.jsxs)("button", {
                            className: l().filterButton,
                            onClick: () => {
                                p(!f)
                            },
                            "aria-current": f,
                            children: [(0, n.jsx)("i", {}), (0, n.jsxs)("span", {
                                children: [(0, n.jsx)("span", {
                                    children: "Show\xa0Filter"
                                }), (0, n.jsx)("span", {
                                    children: "Hide\xa0Filter"
                                })]
                            })]
                        })]
                    })
                })
            }
        },
        63003: function(e, t, r) {
            "use strict";
            r.d(t, {
                v: function() {
                    return f
                }
            });
            var n = r(85893),
                i = r(67294),
                s = r(14501),
                c = r.n(s),
                o = r(10990),
                u = r(42708),
                l = r(1642),
                a = r(59632),
                d = r.n(a);
            let f = e => {
                let {
                    text: t,
                    reverse: r = !1,
                    className: s = "",
                    speed: a = 200
                } = e, f = (0, i.useRef)(null), p = (0, i.useRef)(), [h, g] = (0, u.YD)({}), m = (0, i.useCallback)(e => {
                    f.current = e, h(e)
                }, [h]), x = e => {
                    o.p8.set(e, {
                        position: "absolute",
                        left: r ? -e.offsetWidth : e.offsetWidth
                    })
                };
                return (0, i.useEffect)(() => {
                    if (!g || !f.current) return;
                    let e = f.current.querySelector("div"),
                        t = (null == e ? void 0 : e.offsetWidth) / a;
                    if (!e) return;
                    let n = e.cloneNode(!0);
                    f.current.appendChild(n), x(n);
                    let i = o.p8.context(() => {
                            p.current = o.p8.timeline({
                                repeat: -1
                            }).to([n, e], {
                                x: r ? "100%" : "-100%",
                                duration: t,
                                ease: "linear"
                            })
                        }, f),
                        s = () => {
                            x(n)
                        };
                    return window.addEventListener("resize", s), () => {
                        i.revert(), window.removeEventListener("resize", s), f.current && f.current.removeChild(n)
                    }
                }, [g]), (0, n.jsx)("div", {
                    className: c().ticker + " " + s,
                    ref: m,
                    children: (0, n.jsx)("div", {
                        children: d()(t, "*", (e, t) => (0, n.jsx)(l.Subtract, {}, t))
                    })
                })
            }
        },
        61211: function(e, t, r) {
            "use strict";
            r.d(t, {
                s: function() {
                    return i
                }
            });
            var n = r(67294);

            function i() {
                let e = (0, n.useRef)(!0);
                return (0, n.useEffect)(() => {
                    e.current = !1
                }, []), e.current
            }
        },
        71130: function(e, t, r) {
            "use strict";
            r.d(t, {
                Z: function() {
                    return i
                }
            });
            var n = r(67294);

            function i(e) {
                let [t, r] = (0, n.useState)();
                return (0, n.useEffect)(() => {
                    let t = window.matchMedia(e),
                        n = () => r(!!t.matches);
                    return n(), t.addEventListener("change", n), () => t.removeEventListener("change", n)
                }, [e]), t
            }
        },
        18515: function(e) {
            e.exports = {
                "lg-up": "min-width: 1024px",
                block: "FeaturedNews_block__mJHWo",
                articleBody: "FeaturedNews_articleBody__wtwRx"
            }
        },
        7129: function(e) {
            e.exports = {
                "lg-up": "min-width: 1024px",
                "sm-up": "min-width: 768px",
                "md-up": "min-width: 960px",
                block: "InsightsList_block__dzLuK",
                wrapper: "InsightsList_wrapper__5TWil",
                items: "InsightsList_items__sAhHi",
                categories: "InsightsList_categories__HuBk_",
                nothingFound: "InsightsList_nothingFound__T9RzO",
                loading: "InsightsList_loading__eCO6E",
                cat_switch: "InsightsList_cat_switch__Wxo78",
                scroll: "InsightsList_scroll__dLldZ"
            }
        },
        84114: function(e) {
            e.exports = {
                "lg-up": "min-width: 1024px",
                block: "SimpleHero_block__yuRPJ",
                titleSmall: "SimpleHero_titleSmall__I1k2B",
                line: "SimpleHero_line__VQm4c",
                ticker: "SimpleHero_ticker__SrQ4e",
                description: "SimpleHero_description__fHmLr"
            }
        },
        20833: function(e) {
            e.exports = {
                "lg-up": "min-width: 1024px",
                filter: "PostsFilter_filter__DNqKb",
                inner: "PostsFilter_inner__jAT78",
                filterButton: "PostsFilter_filterButton__dnTQC"
            }
        },
        14501: function(e) {
            e.exports = {
                "lg-up": "min-width: 1024px",
                ticker: "Ticker_ticker__ouUx5"
            }
        },
        59632: function(e) {
            var t = function(e) {
                    var t = /[\\^$.*+?()[\]{}|]/g,
                        r = RegExp(t.source);
                    return e && r.test(e) ? e.replace(t, "\\$&") : e
                },
                r = function(e) {
                    return "string" == typeof e
                },
                n = function(e) {
                    var t = [];
                    return e.forEach(function(e) {
                        Array.isArray(e) ? t = t.concat(e) : t.push(e)
                    }), t
                };
            e.exports = function(e, i, s) {
                return Array.isArray(e) || (e = [e]), n(e.map(function(e) {
                    return r(e) ? function(e, n, i) {
                        var s = 0,
                            c = 0;
                        if ("" === e) return e;
                        if (!e || !r(e)) throw TypeError("First argument to react-string-replace#replaceString must be a string");
                        var o = n;
                        o instanceof RegExp || (o = RegExp("(" + t(o) + ")", "gi"));
                        for (var u = e.split(o), l = 1, a = u.length; l < a; l += 2) {
                            if (void 0 === u[l] || void 0 === u[l - 1]) {
                                console.warn("reactStringReplace: Encountered undefined value during string replacement. Your RegExp may not be working the way you expect.");
                                continue
                            }
                            c = u[l].length, s += u[l - 1].length, u[l] = i(u[l], l, s), s += c
                        }
                        return u
                    }(e, i, s) : e
                }))
            }
        }
    }
]);