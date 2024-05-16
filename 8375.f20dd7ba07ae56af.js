(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [8375], {
        88375: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var r = n(85893),
                i = n(3782),
                l = n.n(i),
                u = n(59706),
                c = n(25675),
                s = n.n(c),
                p = n(19763),
                a = n(53065);

            function d(e) {
                let {
                    text: t,
                    images: n
                } = e, i = (0, p._)({
                    type: "byWord"
                });
                if (!t) return (0, r.jsx)(r.Fragment, {});
                let c = t.split(" "),
                    d = /\[\d\]/i,
                    o = c.map((e, t) => {
                        if (d.test(e)) {
                            var i;
                            let l = parseInt(e.slice(1, -1)) - 1,
                                u = n && (n[l], !0) && (null === (i = n[l]) || void 0 === i ? void 0 : i.image);
                            if (u) return (0, r.jsx)(s(), {
                                src: u.url,
                                alt: u.alt,
                                width: 24,
                                height: 20
                            }, t)
                        }
                        return (0, a.Z)(e)
                    });
                return (0, r.jsx)("section", {
                    className: l().block,
                    children: (0, r.jsx)(u.Z, {
                        children: (0, r.jsx)("h2", {
                            ref: i,
                            children: o.reduce((e, t) => [e, " ", t])
                        })
                    })
                })
            }
        },
        53065: function(e, t, n) {
            "use strict";
            n.d(t, {
                Z: function() {
                    return i
                }
            });
            var r = n(47311);

            function i(e) {
                if (!e) return "";
                let t = e.replaceAll("\n", "<br />").replaceAll("{", "<b>").replaceAll("}", "</b>");
                return (0, r.ZP)(t)
            }
        },
        3782: function(e) {
            e.exports = {
                "xs-up": "min-width: 480px",
                "lg-up": "min-width: 1024px",
                "xl-up": "min-width: 1230px",
                "xxl-up": "min-width: 1450px",
                block: "IntroText_block__Qz_AF"
            }
        }
    }
]);