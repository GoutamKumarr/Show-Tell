(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [6179], {
        87596: function(e, r, t) {
            "use strict";
            t.r(r), t.d(r, {
                default: function() {
                    return g
                }
            });
            var s = t(85893),
                n = t(93490),
                l = t.n(n),
                o = t(1642),
                a = t(25675),
                i = t.n(a),
                u = t(2261),
                c = t(87419),
                d = t.n(c),
                _ = t(59706),
                p = t(38855),
                h = t(53065),
                C = t(19763),
                f = t(10990),
                m = t(11163),
                x = t(67294),
                w = t(42708),
                b = t(98918),
                j = t(60541),
                v = t(41664),
                k = t.n(v);
            t(5004);
            var N = t(66626);

            function g(e) {
                let {
                    title: r,
                    pages: t
                } = e, n = (0, x.useRef)(), a = (0, x.useRef)(null), c = (0, x.useRef)(null), v = (0, x.useRef)(0), [g, A] = (0, x.useState)(0), {
                    onCursor: S
                } = (0, x.useContext)(j.uG), W = (0, m.useRouter)(), E = (0, C._)({
                    type: "byChar"
                }), [P, D] = (0, w.YD)({
                    triggerOnce: !0
                }), M = (0, x.useCallback)(e => {
                    n.current = e, P(e)
                }, [P]);
                return t.length ? (0, s.jsx)("section", {
                    className: d().block,
                    children: (0, s.jsxs)(_.Z, {
                        className: d().wrapper,
                        children: [(0, s.jsxs)("h2", {
                            ref: E,
                            className: "".concat(d().title, " ").concat(l().title),
                            children: [(0, s.jsx)("span", {
                                children: (0, h.Z)(r)
                            }), (0, s.jsxs)("em", {
                                children: ["(", (0, p.Z)(t.length), ")"]
                            })]
                        }), (0, s.jsxs)("div", {
                            className: d().arrows,
                            children: [(0, s.jsx)("button", {
                                ref: a,
                                className: d().arrowPrev,
                                onMouseEnter: () => S("pointer"),
                                onMouseLeave: () => S(),
                                children: (0, s.jsx)(o.Arrow2, {})
                            }), (0, s.jsx)("button", {
                                ref: c,
                                className: d().arrowNext,
                                onMouseEnter: () => S("pointer"),
                                onMouseLeave: () => S(),
                                children: (0, s.jsx)(o.Arrow2, {})
                            })]
                        }), (0, s.jsx)("div", {
                            ref: M,
                            children: (0, s.jsx)(u.tq, {
                                modules: [b.W_],
                                effect: "slide",
                                spaceBetween: 20,
                                navigation: {
                                    nextEl: c.current,
                                    prevEl: a.current
                                },
                                loop: !0,
                                loopAdditionalSlides: 4,
                                className: d().swiper,
                                slidesPerView: "auto",
                                breakpoints: {
                                    546: {
                                        spaceBetween: 30
                                    }
                                },
                                watchSlidesProgress: !0,
                                touchStartPreventDefault: !1,
                                onSetTranslate: e => {
                                    let r = f.p8.utils.clamp(0, 1),
                                        t = f.p8.utils.clamp(0, 1);
                                    e.slides.map((s, n) => {
                                        var l = e.slidesGrid[n],
                                            o = -e.translate - l,
                                            a = 1 - o / s.offsetWidth,
                                            i = t(.5 * a + .5),
                                            u = r(.2 * a + .8);
                                        o = o <= 0 ? 0 : o, f.p8.set(s, {
                                            x: o,
                                            scale: u,
                                            opacity: i,
                                            transitionDuration: v.current
                                        }), f.p8.set(s, {
                                            transitionDuration: 0,
                                            delay: v.current
                                        })
                                    })
                                },
                                onSetTransition: (e, r) => {
                                    v.current = r / 1e3
                                },
                                onSlideChange: () => {
                                    A(e => e + 1)
                                },
                                children: t.map(e => {
                                    let r = (0, N.Z)(e.page);
                                    return (0, s.jsxs)(u.o5, {
                                        className: d().slideItem,
                                        onClick: () => W.push(r, void 0, {
                                            scroll: !1
                                        }),
                                        onMouseEnter: () => S("view"),
                                        onMouseLeave: () => S(),
                                        children: [(0, s.jsxs)("div", {
                                            className: d().content,
                                            children: [(0, s.jsx)("div", {
                                                className: d().subTitle,
                                                children: e.subtitle || "Sectors"
                                            }), (0, s.jsx)("h6", {
                                                className: d().title,
                                                children: (0, s.jsx)(k(), {
                                                    href: r,
                                                    scroll: !1,
                                                    children: e.title
                                                })
                                            }), (0, s.jsxs)("div", {
                                                className: d().button,
                                                children: [(0, s.jsx)("span", {
                                                    children: "Discover more"
                                                }), (0, s.jsx)(o.Arrow, {})]
                                            })]
                                        }), (0, s.jsx)("picture", {
                                            children: (0, s.jsx)(i(), {
                                                src: e.featuredImage.url,
                                                alt: e.featuredImage.alt,
                                                width: 385,
                                                height: 273
                                            })
                                        })]
                                    }, e.id)
                                })
                            })
                        })]
                    })
                }) : (0, s.jsx)(s.Fragment, {})
            }
        },
        38855: function(e, r, t) {
            "use strict";

            function s(e) {
                let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
                for (e = e.toString(); e.length < r;) e = "0" + e;
                return e
            }
            t.d(r, {
                Z: function() {
                    return s
                }
            })
        },
        53065: function(e, r, t) {
            "use strict";
            t.d(r, {
                Z: function() {
                    return n
                }
            });
            var s = t(47311);

            function n(e) {
                if (!e) return "";
                let r = e.replaceAll("\n", "<br />").replaceAll("{", "<b>").replaceAll("}", "</b>");
                return (0, s.ZP)(r)
            }
        },
        5004: function() {},
        87419: function(e) {
            e.exports = {
                "lg-up": "min-width: 1024px",
                block: "CardsCarousel_block__6pbwP",
                title: "CardsCarousel_title__mOoY0",
                swiper: "CardsCarousel_swiper__wJKXt",
                arrows: "CardsCarousel_arrows__cgwEM",
                arrowNext: "CardsCarousel_arrowNext__HAEr_",
                slideItem: "CardsCarousel_slideItem__tY__D",
                slideActive: "CardsCarousel_slideActive__VxO_p",
                content: "CardsCarousel_content__Cm6_5",
                subTitle: "CardsCarousel_subTitle__SjIz7",
                button: "CardsCarousel_button__ym1NB"
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
        }
    }
]);