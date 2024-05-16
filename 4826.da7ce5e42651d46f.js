(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [4826], {
        14826: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return k
                }
            });
            var n = r(85893),
                s = r(52506),
                l = r(59706),
                o = r(53065),
                c = r(19763),
                u = r(67294),
                i = r(42708),
                a = r(10990),
                d = r(46049),
                h = r.n(d),
                m = r(25675),
                _ = r.n(m),
                f = r(41664),
                v = r.n(f),
                p = r(77495),
                x = r(60541),
                g = r(11163),
                w = r(81829);
            let j = e => {
                let {
                    featuredImage: t,
                    page: r
                } = e, s = (0, u.useRef)(null), l = (0, u.useRef)(null);
                a.p8.utils.clamp(-5, 5), (0, u.useRef)(0), (0, u.useRef)(0);
                let {
                    onCursor: o
                } = (0, u.useContext)(x.uG), c = (0, g.useRouter)(), i = r.value, d = (0, w.Rg)(i);
                return (0, u.useEffect)(() => {
                    if (!s.current || !l.current) return;
                    let e = s.current.parentNode;
                    if (a.p8.quickSetter(l.current, "rotate", "deg"), !e) return;
                    let t = e => {
                            var t;
                            if (!s.current) return;
                            let r = null === (t = s.current) || void 0 === t ? void 0 : t.getBoundingClientRect(),
                                n = e.offsetX + s.current.getBoundingClientRect().left,
                                l = e.clientY - r.top;
                            return {
                                x: n,
                                y: l
                            }
                        },
                        r = e => {
                            if (!s.current || !l.current) return;
                            let r = t(e);
                            null != r && a.p8.to(l.current, {
                                y: r.y - l.current.offsetHeight / 2
                            })
                        },
                        n = () => {
                            a.p8.fromTo(l.current, {
                                clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)"
                            }, {
                                clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
                                overwrite: !0
                            })
                        },
                        o = () => {
                            a.p8.to(l.current, {
                                clipPath: "polygon(100% 0, 100% 0, 100% 100%, 100% 100%)"
                            })
                        };
                    return e.addEventListener("mousemove", r), s.current.addEventListener("mouseenter", n), s.current.addEventListener("mouseleave", o), () => {
                        s.current && (e.removeEventListener("mousemove", r), s.current.removeEventListener("mouseenter", n), s.current.removeEventListener("mouseleave", o))
                    }
                }, []), (0, n.jsxs)("article", {
                    ref: s,
                    className: h().block,
                    onMouseEnter: () => o("view"),
                    onMouseLeave: () => o(),
                    onClick: () => c.push(d, void 0, {
                        scroll: !1
                    }),
                    children: [(0, n.jsx)("picture", {
                        className: h().image,
                        children: (0, n.jsx)(_(), {
                            ref: l,
                            src: t.url,
                            alt: t.alt,
                            width: 310,
                            height: 310
                        })
                    }), (0, n.jsxs)("div", {
                        className: h().content,
                        children: [(0, n.jsx)("h6", {
                            children: (0, n.jsx)(v(), {
                                href: d,
                                scroll: !1,
                                children: i.title
                            })
                        }), (0, n.jsxs)("div", {
                            className: h().meta,
                            children: [i.category.length && (0, n.jsx)("div", {
                                className: h().cat,
                                children: i.category[0].value.title
                            }), (0, n.jsx)("time", {
                                children: new Date(i.createdAt).toLocaleDateString("en-GB", {
                                    day: "numeric",
                                    year: "numeric",
                                    month: "short"
                                })
                            })]
                        })]
                    }), (0, n.jsx)(p.Z, {
                        className: h().arrowLink,
                        light: !0
                    })]
                })
            };
            var N = r(11492),
                b = r.n(N),
                k = e => {
                    let {
                        bigTitle: t,
                        ctaTitle: r,
                        indexPage: a,
                        stories: d
                    } = e, h = (0, u.useRef)(null), m = (0, c._)({
                        type: "byChar"
                    }), [_, f] = (0, i.YD)({
                        triggerOnce: !0
                    }), v = (0, u.useCallback)(e => {
                        h.current = e, _(e)
                    }, [_]);
                    return d.length ? (0, n.jsx)("section", {
                        ref: v,
                        className: b().block,
                        children: (0, n.jsxs)(l.Z, {
                            children: [(0, n.jsxs)("div", {
                                className: b().titleBlock,
                                children: [(0, n.jsx)("h2", {
                                    ref: m,
                                    children: (0, o.Z)(t)
                                }), (0, n.jsx)(s.Z, {
                                    className: b().button,
                                    label: r,
                                    href: a.value.slug
                                })]
                            }), (0, n.jsx)("div", {
                                className: b().items,
                                children: d.map(e => (0, n.jsx)(j, { ...e
                                }, e.id))
                            })]
                        })
                    }) : (0, n.jsx)(n.Fragment, {})
                }
        },
        77495: function(e, t, r) {
            "use strict";
            r.d(t, {
                Z: function() {
                    return d
                }
            });
            var n = r(85893),
                s = r(41664),
                l = r.n(s),
                o = r(1642),
                c = r(19434),
                u = r.n(c),
                i = r(60541),
                a = r(67294);

            function d(e) {
                let {
                    onCursor: t
                } = (0, a.useContext)(i.uG), r = [u().button];
                return e.className && r.push(e.className), e.isLight && r.push(u().light), (0, n.jsx)(n.Fragment, {
                    children: e.href ? (0, n.jsx)(l(), {
                        className: r.join(" "),
                        href: e.href,
                        onMouseEnter: () => t("pointer"),
                        onMouseLeave: () => t(),
                        scroll: !1,
                        children: (0, n.jsx)(o.Arrow, {})
                    }) : (0, n.jsx)("button", {
                        className: r.join(" "),
                        onClick: e.onClick,
                        onMouseEnter: () => t("pointer"),
                        onMouseLeave: () => t(),
                        children: (0, n.jsx)(o.Arrow, {})
                    })
                })
            }
        },
        53065: function(e, t, r) {
            "use strict";
            r.d(t, {
                Z: function() {
                    return s
                }
            });
            var n = r(47311);

            function s(e) {
                if (!e) return "";
                let t = e.replaceAll("\n", "<br />").replaceAll("{", "<b>").replaceAll("}", "</b>");
                return (0, n.ZP)(t)
            }
        },
        46049: function(e) {
            e.exports = {
                "lg-up": "min-width: 1024px",
                block: "NewsFeedItem_block__gWnQO",
                meta: "NewsFeedItem_meta__ZgZkA",
                arrowLink: "NewsFeedItem_arrowLink__0BA6b",
                content: "NewsFeedItem_content__xqZwr"
            }
        },
        11492: function(e) {
            e.exports = {
                "lg-up": "min-width: 1024px",
                block: "NewsFeed_block__DzEOY",
                titleBlock: "NewsFeed_titleBlock__xuVcI",
                word: "NewsFeed_word__Esj_E",
                char: "NewsFeed_char__oLB9E",
                items: "NewsFeed_items__zboS9"
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