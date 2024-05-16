(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [3024], {
        13024: function(e, t, r) {
            "use strict";
            r.r(t);
            var l = r(85893),
                n = r(59706),
                s = r(93490),
                c = r.n(s),
                o = r(26602),
                u = r.n(o),
                a = r(67294),
                i = r(10990),
                h = r(42708),
                f = r(53065),
                _ = r(70639),
                d = r(38855),
                p = r(52506),
                m = r(19763);
            t.default = e => {
                let {
                    title: t,
                    items: r,
                    link: {
                        url: s,
                        label: o
                    }
                } = e, g = (0, a.useRef)(), x = (0, a.useRef)(null), b = (0, m._)({
                    type: "byChar"
                }), [k, j] = (0, h.YD)({
                    triggerOnce: !0
                }), v = (0, a.useCallback)(e => {
                    g.current = e, k(e)
                }, [k]), N = e => {
                    if (!e.length) return !1;
                    let t = e[e.length - 1];
                    return t.offsetLeft + t.offsetWidth
                };
                return ((0, a.useEffect)(() => {
                    if (!x.current || r.length <= 2) return;
                    let e = N(x.current.querySelectorAll("article")),
                        t = e - x.current.offsetWidth,
                        l = i.p8.matchMedia();
                    l.add("(min-width: 1024px)", () => {
                        i.p8.to(x.current, {
                            x: -t,
                            scrollTrigger: {
                                trigger: x.current,
                                start: "-70 0",
                                end: "+=".concat(900 * r.length, "rem"),
                                scrub: 1,
                                pin: !0
                            }
                        })
                    });
                    let n = i.p8.context(() => {
                        i.p8.to(".".concat(u().block), {
                            y: "0%",
                            stagger: .1,
                            scrollTrigger: {
                                trigger: x.current,
                                start: "top 70%",
                                end: "50% 70%",
                                scrub: 1
                            }
                        })
                    }, x);
                    return () => {
                        n.revert(), l.revert()
                    }
                }, []), r.length) ? (0, l.jsx)("section", {
                    ref: v,
                    className: c().block,
                    children: (0, l.jsxs)(n.Z, {
                        children: [(0, l.jsxs)("div", {
                            className: c().top,
                            children: [(0, l.jsxs)("h2", {
                                className: c().title,
                                ref: b,
                                children: [(0, l.jsx)("span", {
                                    children: (0, f.Z)(t)
                                }), (0, l.jsxs)("em", {
                                    children: ["(", (0, d.Z)(r.length), ")"]
                                })]
                            }), s && o && (0, l.jsx)(p.Z, {
                                className: c().button,
                                href: s,
                                label: o
                            })]
                        }), (0, l.jsx)("div", {
                            className: c().carousel,
                            children: (0, l.jsx)("div", {
                                ref: x,
                                className: c().carouselWrap,
                                children: r.map((e, t) => (0, l.jsx)(_.Z, { ...e.value
                                }, t))
                            })
                        }), s && o && (0, l.jsx)("div", {
                            className: c().bottomButton,
                            children: (0, l.jsx)(p.Z, {
                                href: s,
                                label: o
                            })
                        })]
                    })
                }) : (0, l.jsx)(l.Fragment, {})
            }
        },
        2422: function(e, t, r) {
            "use strict";
            r.d(t, {
                Z: function() {
                    return c
                }
            });
            var l = r(85893),
                n = r(83030),
                s = r.n(n);

            function c(e) {
                let {
                    primary: t,
                    category: r,
                    className: n
                } = e, c = [s().block];
                return (n && c.push(n), r && r.length) ? (0, l.jsxs)("ul", {
                    className: c.join(" "),
                    children: ["object" == typeof t && (0, l.jsx)("li", {
                        className: s().primary,
                        children: t.value.title
                    }), r.length && r.map((e, r) => {
                        let {
                            value: n
                        } = e;
                        return (0, l.jsx)("li", {
                            className: "first" == t && 0 == r && s().primary || void 0,
                            children: n.title
                        }, r)
                    })]
                }) : (0, l.jsx)(l.Fragment, {})
            }
        },
        70639: function(e, t, r) {
            "use strict";
            r.d(t, {
                Z: function() {
                    return p
                }
            });
            var l = r(85893),
                n = r(60541),
                s = r(2422),
                c = r(53065),
                o = r(25675),
                u = r.n(o),
                a = r(11163),
                i = r(67294),
                h = r(26602),
                f = r.n(h),
                _ = r(41664),
                d = r.n(_);

            function p(e) {
                let {
                    category: t,
                    featuredImage: r,
                    title: o,
                    shortTitle: h
                } = e, _ = function(e) {
                    let {
                        slug: t
                    } = e;
                    return "/case-study/".concat(t)
                }(e), {
                    onCursor: p
                } = (0, i.useContext)(n.uG), m = (0, a.useRouter)();
                return (0, l.jsxs)("article", {
                    className: f().block,
                    onClick: () => m.push(_, void 0, {
                        scroll: !1
                    }),
                    onMouseEnter: () => p("view"),
                    onMouseLeave: () => p(),
                    children: [(0, l.jsxs)("picture", {
                        children: [r && r.url && (0, l.jsx)(u(), {
                            src: r.url,
                            alt: r.alt,
                            width: 930,
                            height: 866
                        }), (0, l.jsx)(s.Z, {
                            className: f().tags,
                            primary: {
                                value: {
                                    title: o
                                }
                            },
                            category: t
                        })]
                    }), (0, l.jsx)("h6", {
                        children: (0, l.jsx)(d(), {
                            href: _,
                            scroll: !1,
                            children: (0, c.Z)(h || o)
                        })
                    })]
                })
            }
        },
        38855: function(e, t, r) {
            "use strict";

            function l(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
                for (e = e.toString(); e.length < t;) e = "0" + e;
                return e
            }
            r.d(t, {
                Z: function() {
                    return l
                }
            })
        },
        53065: function(e, t, r) {
            "use strict";
            r.d(t, {
                Z: function() {
                    return n
                }
            });
            var l = r(47311);

            function n(e) {
                if (!e) return "";
                let t = e.replaceAll("\n", "<br />").replaceAll("{", "<b>").replaceAll("}", "</b>");
                return (0, l.ZP)(t)
            }
        },
        93490: function(e) {
            e.exports = {
                "md-up": "min-width: 960px",
                title: "WorkCarousel_title__knano",
                block: "WorkCarousel_block__7AFsU",
                top: "WorkCarousel_top__YubwQ",
                button: "WorkCarousel_button__w6__V",
                carousel: "WorkCarousel_carousel__48PNa",
                carouselWrap: "WorkCarousel_carouselWrap__dPS_u",
                bottomButton: "WorkCarousel_bottomButton__mjDCf"
            }
        },
        83030: function(e) {
            e.exports = {
                block: "Tags2_block__BmA8z",
                primary: "Tags2_primary__Il3RQ"
            }
        },
        26602: function(e) {
            e.exports = {
                block: "WorkItem_block__1_Klx",
                tags: "WorkItem_tags___YPJh"
            }
        }
    }
]);