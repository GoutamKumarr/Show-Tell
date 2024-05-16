(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [1340], {
        91340: function(e, r, t) {
            "use strict";
            t.r(r), t.d(r, {
                default: function() {
                    return p
                }
            });
            var n = t(85893),
                o = t(67294),
                i = t(10990),
                s = t(33710),
                c = t.n(s),
                u = t(42921),
                l = t.n(u),
                a = t(77495),
                d = t(38855),
                f = t(19912),
                h = t(19763),
                _ = t(25675),
                v = t.n(_),
                x = t(11163),
                g = t(42708);

            function m(e) {
                let r = (0, o.useRef)(null),
                    t = (0, o.useRef)(null),
                    s = (0, o.useRef)(null),
                    c = (0, h._)({
                        type: "byWord"
                    }),
                    u = (0, o.useRef)(null),
                    _ = (0, o.useRef)(),
                    [m, p] = (0, g.YD)({
                        triggerOnce: !0
                    }),
                    k = (0, x.useRouter)(),
                    w = (0, o.useCallback)(e => {
                        r.current = e, m(e)
                    }, [m]),
                    j = () => {
                        var e, r, t;
                        if (u.current && s.current) return (null === (e = u.current) || void 0 === e ? void 0 : e.offsetTop) - (null === (r = s.current) || void 0 === r ? void 0 : r.offsetTop) - (null === (t = s.current) || void 0 === t ? void 0 : t.offsetHeight)
                    },
                    b = () => {
                        i.p8.set(s.current, {
                            y: j()
                        })
                    };
                return (0, o.useEffect)(() => {
                    let e = i.p8.context(() => {
                            _.current = i.p8.timeline().to("." + l().headingBlock, {
                                y: 0,
                                duration: .4,
                                overwrite: !0
                            }, 0).reverse()
                        }, t),
                        r = () => {
                            b()
                        };
                    return window.addEventListener("resize", r), () => {
                        window.removeEventListener("resize", r), e.revert()
                    }
                }, []), (0, o.useEffect)(() => {
                    u.current && s.current && b()
                }, []), (0, n.jsxs)("div", {
                    ref: w,
                    className: l().block,
                    onMouseEnter: () => {
                        _.current && _.current.reversed(!1)
                    },
                    onMouseLeave: () => {
                        _.current && _.current.reversed(!0)
                    },
                    onClick: () => k.push(e.isExternalLink ? e.link : "/" + e.page.relationTo + "/" + e.page.slug, void 0, {
                        scroll: !1
                    }),
                    children: [(0, n.jsx)("picture", {
                        children: (0, n.jsx)(v(), {
                            src: e.image.url,
                            alt: e.image.alt,
                            width: 720,
                            height: 480
                        })
                    }), (0, n.jsxs)("div", {
                        ref: t,
                        className: l().content,
                        children: [(0, n.jsxs)("div", {
                            ref: s,
                            className: l().headingBlock,
                            children: [(0, n.jsx)("em", {
                                children: (0, d.Z)(e.idx + 1)
                            }), (0, n.jsx)("h6", {
                                ref: c,
                                children: (0, f.Z)(e.title)
                            })]
                        }), (0, n.jsx)("div", {
                            className: l().desc,
                            children: e.text
                        }), (0, n.jsx)("div", {
                            ref: u,
                            className: l().link,
                            children: (0, n.jsx)(a.Z, {
                                href: e.isExternalLink ? e.link : "/" + e.page.relationTo + "/" + e.page.slug,
                                isLight: !0
                            })
                        })]
                    })]
                })
            }

            function p(e) {
                let {
                    items: r
                } = e, t = (0, o.useRef)(null);
                return ((0, o.useEffect)(() => {
                    let e = i.p8.context(e => {
                        let r = i.p8.matchMedia();
                        r.add("(min-width: 960px)", () => {
                            i.p8.to("." + l().block, {
                                y: 0,
                                stagger: .1,
                                scrollTrigger: {
                                    trigger: t.current,
                                    scrub: !0,
                                    start: "top bottom",
                                    end: "center 60%"
                                }
                            })
                        })
                    }, t);
                    return () => {
                        e.revert()
                    }
                }, []), r.length) ? (0, n.jsx)("section", {
                    ref: t,
                    className: c().block,
                    children: r.map((e, r) => (0, n.jsx)(m, {
                        idx: r,
                        ...e
                    }, r))
                }) : (0, n.jsx)(n.Fragment, {})
            }
        },
        77495: function(e, r, t) {
            "use strict";
            t.d(r, {
                Z: function() {
                    return d
                }
            });
            var n = t(85893),
                o = t(41664),
                i = t.n(o),
                s = t(1642),
                c = t(19434),
                u = t.n(c),
                l = t(60541),
                a = t(67294);

            function d(e) {
                let {
                    onCursor: r
                } = (0, a.useContext)(l.uG), t = [u().button];
                return e.className && t.push(e.className), e.isLight && t.push(u().light), (0, n.jsx)(n.Fragment, {
                    children: e.href ? (0, n.jsx)(i(), {
                        className: t.join(" "),
                        href: e.href,
                        onMouseEnter: () => r("pointer"),
                        onMouseLeave: () => r(),
                        scroll: !1,
                        children: (0, n.jsx)(s.Arrow, {})
                    }) : (0, n.jsx)("button", {
                        className: t.join(" "),
                        onClick: e.onClick,
                        onMouseEnter: () => r("pointer"),
                        onMouseLeave: () => r(),
                        children: (0, n.jsx)(s.Arrow, {})
                    })
                })
            }
        },
        38855: function(e, r, t) {
            "use strict";

            function n(e) {
                let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
                for (e = e.toString(); e.length < r;) e = "0" + e;
                return e
            }
            t.d(r, {
                Z: function() {
                    return n
                }
            })
        },
        42921: function(e) {
            e.exports = {
                "md-up": "min-width: 960px",
                "md-down": "max-width: 959px",
                block: "ServiceCarouselItem_block__z3jKL",
                content: "ServiceCarouselItem_content__caeA4",
                headingBlock: "ServiceCarouselItem_headingBlock__0Yj8q",
                word: "ServiceCarouselItem_word___OEe_",
                desc: "ServiceCarouselItem_desc__kX48H",
                link: "ServiceCarouselItem_link__ywu0q"
            }
        },
        33710: function(e) {
            e.exports = {
                "md-up": "min-width: 960px",
                block: "ServicesCarousel_block__kLoo7"
            }
        },
        19434: function(e) {
            e.exports = {
                button: "ArrowButton_button__TSOE3",
                light: "ArrowButton_light__JbwbV",
                "not-hover": "ArrowButton_not-hover__8P38u",
                active: "ArrowButton_active__yDk6b"
            }
        }
    }
]);