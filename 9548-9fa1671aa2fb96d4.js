(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [9548], {
        68394: function(e, t, n) {
            "use strict";
            n.d(t, {
                Z: function() {
                    return c
                }
            });
            var r = n(85893),
                s = n(81160),
                l = n(86146),
                a = n.n(l),
                o = n(81829),
                i = n(59706);

            function c(e) {
                let {
                    title: t = "Related Reading",
                    items: n,
                    className: l
                } = e, c = [a().block];
                return (l && c.push(l), n.length) ? (0, r.jsx)("section", {
                    className: c.join(" "),
                    children: (0, r.jsxs)(i.Z, {
                        className: a().wrapper,
                        children: [(0, r.jsxs)("h2", {
                            children: [(0, r.jsx)(s.Z, {}), (0, r.jsx)("span", {
                                children: t
                            })]
                        }), (0, r.jsx)("div", {
                            className: a().items,
                            children: n.map(e => (0, r.jsx)(o.ZP, { ...e
                            }, e.id))
                        })]
                    })
                }) : (0, r.jsx)(r.Fragment, {})
            }
        },
        25283: function(e, t, n) {
            "use strict";
            n.d(t, {
                Z: function() {
                    return i
                }
            });
            var r = n(85893),
                s = n(30462),
                l = n.n(s),
                a = n(60541),
                o = n(67294);

            function i(e) {
                let {
                    onCursor: t
                } = (0, o.useContext)(a.uG), n = [l().button];
                return e.className && n.push(e.className), e.isLight && n.push(l().light), (0, r.jsx)("button", {
                    className: n.join(" "),
                    onClick: e.onClick,
                    onMouseEnter: () => t("pointer"),
                    onMouseLeave: () => t(),
                    children: (0, r.jsx)("span", {
                        "data-title": e.label,
                        children: (0, r.jsx)("span", {
                            children: e.label
                        })
                    })
                })
            }
        },
        8411: function(e, t, n) {
            "use strict";
            n.d(t, {
                hE: function() {
                    return p
                },
                XZ: function() {
                    return v
                },
                yN: function() {
                    return _
                },
                U5: function() {
                    return g
                },
                l0: function() {
                    return G
                },
                __: function() {
                    return j
                },
                sb: function() {
                    return f
                },
                Ph: function() {
                    return m
                },
                Fz: function() {
                    return b
                },
                oi: function() {
                    return d
                },
                jM: function() {
                    return x
                }
            });
            var r = n(85893),
                s = n(87536),
                l = n(81429),
                a = n.n(l),
                o = n(67294),
                i = n(76743);

            function c(e) {
                let {
                    message: t,
                    show: n = !1
                } = e, s = (0, o.useRef)(null);
                return (0, r.jsx)(i.Z, {
                    nodeRef: s,
                    in: n,
                    unmountOnExit: !0,
                    timeout: 400,
                    classNames: {
                        enter: a().enter,
                        enterDone: a().enter
                    },
                    children: (0, r.jsx)("div", {
                        ref: s,
                        className: "".concat(a().errorMessage),
                        children: t
                    })
                })
            }
            var u = n(60541);

            function d(e) {
                let {
                    label: t,
                    name: n,
                    className: l = "",
                    value: i = "",
                    pattern: d,
                    errorMsg: h = "Please fill required field",
                    required: m = !1
                } = e, {
                    register: p,
                    formState: x
                } = (0, s.Gc)(), [f, j] = (0, o.useState)(!1), {
                    onCursor: _
                } = (0, o.useContext)(u.uG), v = p(n, {
                    required: m
                });
                return (0, o.useEffect)(() => {
                    j(!!x.errors[n])
                }, [x]), (0, r.jsxs)("div", {
                    className: "".concat(a().textInput, " ").concat(l, " ").concat(f ? a().error : ""),
                    children: [(0, r.jsx)("input", {
                        type: "text",
                        placeholder: t,
                        defaultValue: i,
                        pattern: d,
                        ...v,
                        onMouseEnter: () => _("pointer"),
                        onMouseLeave: () => _()
                    }), (0, r.jsx)(c, {
                        message: h,
                        show: f
                    })]
                })
            }
            var h = n(1642);

            function m(e) {
                let {
                    label: t,
                    name: n,
                    className: l = "",
                    value: d = "",
                    errorMsg: m = "Please fill required field",
                    options: p,
                    required: x = !1
                } = e, f = (0, o.useRef)(null), j = (0, o.useRef)(null), [_, v] = (0, o.useState)(!1), {
                    register: g,
                    formState: b,
                    setValue: y,
                    getValues: w
                } = (0, s.Gc)(), [N, k] = (0, o.useState)(!1), {
                    onCursor: E
                } = (0, o.useContext)(u.uG), L = g(n, {
                    required: x
                });
                (0, o.useEffect)(() => {
                    k(!!b.errors[n])
                }, [b]), (0, o.useEffect)(() => {
                    let e = e => {
                        f.current && !f.current.contains(e.target) && v(!1)
                    };
                    return document.addEventListener("mousedown", e), () => {
                        document.removeEventListener("mousedown", e)
                    }
                }, []);
                let F = e => {
                    y(n, e), v(!1)
                };
                return (0, r.jsxs)("div", {
                    ref: f,
                    className: "".concat(a().select, " ").concat(l),
                    children: [(0, r.jsx)("input", {
                        type: "text",
                        defaultValue: d,
                        ...L
                    }), (0, r.jsxs)("button", {
                        className: "".concat(a().selectToggle, " ").concat(N ? a().error : ""),
                        onClick: e => {
                            e.preventDefault(), v(!_)
                        },
                        onMouseEnter: () => E("pointer"),
                        onMouseLeave: () => E(),
                        children: [(0, r.jsx)("span", {
                            children: w(n) || t
                        }), (0, r.jsx)("i", {
                            children: (0, r.jsx)(h.Down3, {})
                        })]
                    }), (0, r.jsx)(i.Z, {
                        nodeRef: j,
                        timeout: 0,
                        in: _,
                        unmountOnExit: !0,
                        onEnter: () => {},
                        onExited: () => {},
                        children: (0, r.jsx)("ul", {
                            ref: j,
                            className: a().selectList,
                            children: p && p.map((e, t) => (0, r.jsx)("li", {
                                "data-current": e == w(n),
                                onClick: () => {
                                    F(e)
                                },
                                onMouseEnter: () => E("pointer"),
                                onMouseLeave: () => E(),
                                children: e
                            }, t))
                        })
                    }), (0, r.jsx)(c, {
                        message: m,
                        show: N
                    })]
                })
            }

            function p(e) {
                let {
                    items: t,
                    type: n = "radio",
                    name: l,
                    className: i = "",
                    value: d = "",
                    errorMsg: h = "Please fill required field",
                    inCol: m = !1,
                    required: p = !1
                } = e, {
                    register: x,
                    formState: f
                } = (0, s.Gc)(), [j, _] = (0, o.useState)(!1), {
                    onCursor: v
                } = (0, o.useContext)(u.uG);
                return (0, o.useEffect)(() => {
                    _(!!f.errors[l])
                }, [f]), m && (i += " " + a().inCol), (0, r.jsxs)("div", {
                    className: "".concat(a().buttonGroup, " ").concat(i, " ").concat(j ? a().error : ""),
                    children: [t && t.map((e, t) => {
                        let s = x("".concat(l).concat("checkbox" == n ? "[]" : ""), {
                            required: p
                        });
                        return (0, r.jsxs)("label", {
                            onMouseEnter: () => v("pointer"),
                            onMouseLeave: () => v(),
                            children: [(0, r.jsx)("input", {
                                type: n,
                                defaultValue: e,
                                defaultChecked: d == e,
                                ...s
                            }), (0, r.jsx)("span", {
                                children: (0, r.jsx)("span", {
                                    children: e
                                })
                            }), (0, r.jsx)("i", {})]
                        }, t)
                    }), (0, r.jsx)(c, {
                        message: h,
                        show: j
                    })]
                })
            }

            function x(e) {
                let {
                    label: t,
                    name: n,
                    className: l = "",
                    errorMsg: i = "Please fill required field",
                    required: d = !1,
                    accept: h
                } = e, [m, p] = (0, o.useState)(t), {
                    register: x,
                    formState: f
                } = (0, s.Gc)(), [j, _] = (0, o.useState)(!1), {
                    onCursor: v
                } = (0, o.useContext)(u.uG), g = x(n, {
                    required: d,
                    onChange: e => {
                        let n = e.target.files;
                        p(n.length ? n[0].name : t)
                    }
                });
                return (0, o.useEffect)(() => {
                    _(!!f.errors[n])
                }, [f]), (0, r.jsxs)("div", {
                    className: "".concat(a().uploadInput, " ").concat(l, " ").concat(j ? a().error : ""),
                    children: [(0, r.jsxs)("label", {
                        onMouseEnter: () => v("pointer"),
                        onMouseLeave: () => v(),
                        children: [(0, r.jsx)("input", {
                            type: "file",
                            placeholder: t,
                            "data-selected": t != m,
                            accept: h,
                            ...g
                        }), (0, r.jsxs)("span", {
                            children: [m, (0, r.jsxs)("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                fill: "none",
                                viewBox: "0 0 32 32",
                                children: [(0, r.jsx)("circle", {
                                    cx: "15.949",
                                    cy: "16.213",
                                    r: "15.75",
                                    fill: "#D9D9D9"
                                }), (0, r.jsx)("path", {
                                    fill: "#D9D9D9",
                                    fillRule: "evenodd",
                                    d: "M15.947 8.83c.164 0 .328.062.452.187l2.873 2.872a.638.638 0 11-.903.903l-1.784-1.784v6.758a.638.638 0 01-1.277 0v-6.755l-1.78 1.781a.638.638 0 01-.904-.903l2.848-2.847a.636.636 0 01.475-.212zm5.747 5.745c.352 0 .638.285.638.638v5.744a.638.638 0 01-.638.639h-11.49a.638.638 0 01-.638-.639v-5.742a.638.638 0 011.277 0v5.104h10.212v-5.106c0-.353.286-.638.639-.638z",
                                    clipRule: "evenodd"
                                })]
                            })]
                        })]
                    }), (0, r.jsx)(c, {
                        message: i,
                        show: j
                    })]
                })
            }

            function f(e) {
                let {
                    label: t,
                    name: n,
                    className: l = "",
                    value: i = "",
                    errorMsg: d = "Please fill required field",
                    required: h = !1
                } = e, {
                    register: m,
                    formState: p
                } = (0, s.Gc)(), [x, f] = (0, o.useState)(!1), {
                    onCursor: j
                } = (0, o.useContext)(u.uG), _ = m(n, {
                    required: h
                });
                return (0, o.useEffect)(() => {
                    f(!!p.errors[n])
                }, [p]), (0, r.jsxs)("div", {
                    className: "".concat(a().phoneInput, " ").concat(l, " ").concat(x ? a().error : ""),
                    children: [(0, r.jsx)("input", {
                        type: "phone",
                        placeholder: t,
                        defaultValue: i,
                        inputMode: "numeric",
                        ..._,
                        onMouseEnter: () => j("pointer"),
                        onMouseLeave: () => j()
                    }), (0, r.jsx)(c, {
                        message: d,
                        show: x
                    })]
                })
            }

            function j(e) {
                let {
                    label: t,
                    subLabel: n = "",
                    className: s = ""
                } = e;
                return (0, r.jsxs)("h6", {
                    className: "".concat(a().label, " ").concat(s),
                    children: [t, n && (0, r.jsx)("span", {
                        children: n
                    })]
                })
            }

            function _(e) {
                let {
                    label: t,
                    className: n = ""
                } = e;
                return (0, r.jsx)("div", {
                    className: "".concat(a().consent, " ").concat(n),
                    children: t
                })
            }

            function v(e) {
                let {
                    label: t,
                    name: n,
                    className: l = "",
                    defaultChecked: i = !1,
                    errorMsg: d = "Please fill required field",
                    required: h = !1
                } = e, {
                    register: m,
                    formState: p
                } = (0, s.Gc)(), [x, f] = (0, o.useState)(!1), {
                    onCursor: j
                } = (0, o.useContext)(u.uG), _ = m(n, {
                    required: h
                });
                return (0, o.useEffect)(() => {
                    f(!!p.errors[n])
                }, [p]), (0, r.jsxs)("div", {
                    className: "".concat(a().checkbox, " ").concat(l),
                    children: [(0, r.jsxs)("label", {
                        children: [(0, r.jsx)("input", {
                            type: "checkbox",
                            ..._,
                            defaultChecked: i,
                            onChange: e => {}
                        }), (0, r.jsx)("span", {
                            className: a().checkmark
                        }), (0, r.jsx)("span", {
                            children: t
                        })]
                    }), (0, r.jsx)(c, {
                        message: d,
                        show: x
                    })]
                })
            }

            function g(e) {
                let {
                    label: t,
                    name: n,
                    className: l = "",
                    value: i = "",
                    errorMsg: d = "Please fill required field",
                    required: h = !1,
                    optIn: m = !1
                } = e, {
                    register: p,
                    formState: x
                } = (0, s.Gc)(), [f, j] = (0, o.useState)(!1), {
                    onCursor: _
                } = (0, o.useContext)(u.uG), v = p(n, {
                    required: h
                });
                return (0, o.useEffect)(() => {
                    j(!!x.errors[n])
                }, [x]), (0, r.jsxs)("div", {
                    className: "".concat(a().emailInput, " ").concat(l, " ").concat(f ? a().error : ""),
                    children: [(0, r.jsx)("input", {
                        type: "email",
                        placeholder: t,
                        defaultValue: i,
                        ...v,
                        onMouseEnter: () => _("pointer"),
                        onMouseLeave: () => _()
                    }), m && (0, r.jsxs)("label", {
                        onMouseEnter: () => _("pointer"),
                        onMouseLeave: () => _(),
                        children: [(0, r.jsx)("input", {
                            type: "checkbox",
                            name: "opt-in"
                        }), (0, r.jsx)("i", {}), (0, r.jsx)("span", {
                            children: "Opt in for monthly updates"
                        })]
                    }), (0, r.jsx)(c, {
                        message: d,
                        show: f
                    })]
                })
            }

            function b(e) {
                let {
                    label: t,
                    name: n,
                    className: l = "",
                    value: i = "",
                    errorMsg: d = "Please fill required field",
                    required: h = !1
                } = e, {
                    register: m,
                    formState: p
                } = (0, s.Gc)(), [x, f] = (0, o.useState)(!1), {
                    onCursor: j
                } = (0, o.useContext)(u.uG), _ = m(n, {
                    required: h
                });
                return (0, o.useEffect)(() => {
                    f(!!p.errors[n])
                }, [p]), (0, r.jsxs)("div", {
                    className: "".concat(a().textAreaInput, " ").concat(l, " ").concat(x ? a().error : ""),
                    children: [(0, r.jsx)("textarea", {
                        placeholder: t,
                        defaultValue: i,
                        ..._,
                        onMouseEnter: () => j("pointer"),
                        onMouseLeave: () => j()
                    }), (0, r.jsx)(c, {
                        message: d,
                        show: x
                    })]
                })
            }
            var y = n(19912),
                w = n(11695),
                N = n(11378),
                k = n(61733),
                E = n(52660),
                L = n(92939),
                F = n(39663),
                C = n(62595),
                S = n(52844);

            function M(e) {
                let {
                    title: t,
                    fields: n
                } = e, s = e => e.replace(/^[-_]*(.)/, (e, t) => t.toUpperCase()).replace(/[-_]+(.)/g, (e, t) => " " + t.toUpperCase()), l = Object.keys(n);
                return (0, r.jsxs)(w.V, {
                    children: [(0, r.jsx)(N.F, {}), (0, r.jsx)(k.u, {
                        style: Z,
                        children: (0, r.jsx)(E.$, {
                            style: Z,
                            children: (0, r.jsx)(L.W, {
                                style: P,
                                children: (0, r.jsxs)(F.X, {
                                    children: [(0, r.jsx)(C.x, {
                                        style: I,
                                        children: t
                                    }), l.map((e, t) => {
                                        if (void 0 !== n[e][0] && void 0 !== n[e][0].name) return (0, r.jsx)(r.Fragment, {});
                                        let a = "";
                                        return "object" == typeof n[e] && n[e].length ? a = n[e].join(", ") : "object" != typeof n[e] && (a = n[e]), (0, r.jsxs)(o.Fragment, {
                                            children: [(0, r.jsx)(C.x, {
                                                style: { ...T,
                                                    fontWeight: "700"
                                                },
                                                children: s(e)
                                            }), (0, r.jsx)(C.x, {
                                                style: T,
                                                children: (0, y.Z)(a) || "-"
                                            }), l.length != t + 1 && (0, r.jsx)(S.Hr, {
                                                style: R
                                            })]
                                        }, t)
                                    })]
                                })
                            })
                        })
                    })]
                })
            }
            let Z = {
                    backgroundColor: "#ffffff",
                    fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif'
                },
                P = {
                    margin: "0 auto",
                    padding: "20px 0 48px",
                    width: "580px"
                },
                I = {
                    fontSize: "32px",
                    lineHeight: "1.3",
                    fontWeight: "700",
                    color: "#484848",
                    marginBottom: "30px"
                },
                T = {
                    fontSize: "18px",
                    lineHeight: "1.4",
                    color: "#484848"
                },
                R = {
                    borderColor: "#cccccc",
                    margin: "20px 0"
                };
            var O = n(23493),
                q = n(47041);

            function G(e) {
                let {
                    to: t,
                    className: n = "",
                    id: l,
                    children: o,
                    onSent: i,
                    formTitle: c
                } = e, u = (0, s.cI)(), d = (e, n) => {
                    let s = (0, O.s)((0, r.jsx)(M, {
                        title: c,
                        fields: e
                    }));
                    fetch("/api/mail", {
                        method: "POST",
                        headers: {
                            Accept: "application/json, text/plain, */*",
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            to: t,
                            subject: c,
                            attachments: n,
                            html: s
                        })
                    }).then(e => {
                        console.log("Response received"), i(!0)
                    }).catch(e => {
                        console.log("Something went wrong"), console.log(e)
                    })
                }, h = async e => {
                    if (e.first_name && l && c.includes("Campaign Updated Data"))(0, q.setCookie)("updatedName" + l, e.first_name, {}), await m(e);
                    else {
                        let t = [];
                        Object.keys(e).forEach(n => {
                            if (void 0 !== e[n][0] && void 0 !== e[n][0].name) {
                                var r;
                                t.push((r = e[n][0], new Promise((e, t) => {
                                    var n = new FileReader;
                                    n.onload = () => {
                                        n.result && e({
                                            content: n.result.toString().split(",")[1],
                                            filename: r.name,
                                            type: r.type,
                                            disposition: "attachment"
                                        })
                                    }, n.onerror = t, n.readAsDataURL(r)
                                })))
                            }
                        }), t.length ? Promise.all(t).then(t => {
                            d(e, t)
                        }) : d(e)
                    }
                }, m = async e => {
                    try {
                        let t;
                        let n = await fetch("/api/get-csv-data");
                        if (n.ok) {
                            let e = await n.json();
                            t = e.data
                        } else throw Error("Failed to fetch CSV data");
                        let r = t.replace(/^"(.*)"$/gm, "$1"),
                            s = p(r, e);
                        try {
                            let e = await fetch("/api/update-csv", {
                                method: "POST",
                                headers: {
                                    "Content-Type": "application/json"
                                },
                                body: JSON.stringify(s)
                            });
                            if (!e.ok) throw Error("Failed to update CSV file");
                            i(!0)
                        } catch (e) {
                            console.error("Error updating CSV file:", e)
                        }
                        i(!0)
                    } catch (e) {
                        console.error("Error:", e)
                    }
                }, p = (e, t) => {
                    let n = e.split("\n"),
                        r = n[0].split(","),
                        s = r.indexOf("company_name"),
                        l = r.indexOf("first_name"),
                        a = r.indexOf("last_name"),
                        o = r.indexOf("slug");
                    for (let e = 1; e < n.length; e++) {
                        let r = n[e].split(",");
                        r = r.map(e => e.replace(/^"/, ""));
                        let i = r[o],
                            c = i.substring(i.lastIndexOf("/") + 1);
                        if (r[s] === t.company_name && c === t.slug) {
                            r[l] = t.first_name, r[a] = t.last_name, r[3] = t.email, n[e] = r.join(",");
                            break
                        }
                    }
                    return n.join("\n")
                };
                return (0, r.jsx)(s.RV, { ...u,
                    children: (0, r.jsx)("form", {
                        className: "".concat(a().block, " ").concat(n),
                        onSubmit: u.handleSubmit(h),
                        children: o
                    })
                })
            }
        },
        79548: function(e, t, n) {
            "use strict";
            n.d(t, {
                Z: function() {
                    return ef
                }
            });
            var r = n(85893),
                s = n(90497),
                l = n.n(s),
                a = n(67294),
                o = n(52506),
                i = n(41664),
                c = n.n(i),
                u = n(50431),
                d = n.n(u),
                h = n(60541);

            function m(e) {
                let {
                    className: t,
                    items: n
                } = e, {
                    onCursor: s
                } = (0, a.useContext)(h.uG), l = [d().nav];
                return (t && l.push(t), n.length) ? (0, r.jsx)("div", {
                    className: l.join(" "),
                    children: n.map((e, t) => {
                        let {
                            title: l,
                            isExternalLink: o,
                            page: i,
                            link: u
                        } = e;
                        return (0, r.jsxs)(a.Fragment, {
                            children: [(0, r.jsx)(c(), {
                                href: o ? u : "/".concat(i.value.slug),
                                onMouseEnter: () => s("pointer"),
                                onMouseLeave: () => s(),
                                scroll: !1,
                                children: l
                            }), t + 1 < n.length && (0, r.jsx)("span", {
                                children: "/"
                            })]
                        }, t)
                    })
                }) : (0, r.jsx)(r.Fragment, {})
            }
            var p = n(38222),
                x = n(59706),
                f = n(65687),
                j = n.n(f);
            let _ = e => {
                let {
                    items: t
                } = e, {
                    onCursor: n
                } = (0, a.useContext)(h.uG);
                return t.length ? (0, r.jsx)("nav", {
                    className: j().block,
                    children: (0, r.jsx)("ul", {
                        children: t.map((e, t) => {
                            let {
                                title: s,
                                isExternalLink: l,
                                page: a,
                                link: o
                            } = e;
                            return (0, r.jsx)("li", {
                                children: (0, r.jsx)(c(), {
                                    href: l ? o : "/".concat(a.value.slug),
                                    onMouseEnter: () => n("pointer"),
                                    onMouseLeave: () => n(),
                                    scroll: !1,
                                    children: s
                                })
                            }, t)
                        })
                    })
                }) : (0, r.jsx)(r.Fragment, {})
            };
            var v = n(10990),
                g = n(56546),
                b = n(65829),
                y = n(50427),
                w = n.n(y),
                N = n(42708),
                k = n(47311);

            function E(e) {
                let {
                    label: t,
                    content: n
                } = e;
                return t && n ? (0, r.jsxs)("div", {
                    className: w().contactItem,
                    children: [(0, r.jsx)("div", {
                        className: w().label,
                        children: t
                    }), (0, r.jsx)("div", {
                        className: w().text,
                        children: function(e) {
                            let t = "<p>" + e.replace(/\n/g, "</p>\n<p>") + "</p>";
                            return (0, k.ZP)(t)
                        }(n)
                    })]
                }) : (0, r.jsx)(r.Fragment, {})
            }

            function L(e) {
                let {
                    navigation: t,
                    secondaryNav: n,
                    copyright: s,
                    contentBox1: l,
                    contentBox2: i,
                    contentBox3: u,
                    campaignFooter: d = !1
                } = e, f = (0, a.useRef)(null), j = (0, a.useRef)(null), y = (0, a.useRef)(null), [k, L] = (0, N.YD)({}), {
                    onCursor: F
                } = (0, a.useContext)(h.uG), C = [w().block];
                d && C.push(w().campaign);
                let S = (0, a.useCallback)(e => {
                    f.current = e, k(e)
                }, [k]);
                return (0, a.useEffect)(() => {
                    if (!L || !y.current) return;
                    let e = new b.Z(y.current, {
                            types: "chars"
                        }),
                        t = v.p8.context(() => {
                            v.p8.to(e.chars, {
                                y: 0,
                                stagger: .02,
                                scrollTrigger: {
                                    trigger: f.current,
                                    start: "top 50%",
                                    end: "20% 20%",
                                    scrub: !0
                                }
                            })
                        }, y);
                    return () => {
                        t.revert()
                    }
                }, [L]), (0, a.useEffect)(() => {
                    let e = () => {
                        var e;
                        v.p8.set(f.current, {
                            height: null === (e = j.current) || void 0 === e ? void 0 : e.offsetHeight
                        })
                    };
                    if (e(), !L) return;
                    let t = g.ScrollTrigger.create({
                        onUpdate() {
                            if (!f.current || !j.current) return;
                            let e = f.current;
                            window.scrollY - (null == e ? void 0 : e.offsetTop) >= 0 ? j.current.classList.add(w().end) : j.current.classList.remove(w().end), v.p8.set(j.current, {
                                top: 0
                            })
                        }
                    });
                    return window.addEventListener("resize", e), () => {
                        window.removeEventListener("resize", e), t.kill()
                    }
                }, [L]), (0, r.jsx)("div", {
                    ref: S,
                    className: w().blockOverlay,
                    children: (0, r.jsxs)("footer", {
                        ref: j,
                        className: C.join(" "),
                        children: [d && (0, r.jsxs)(x.Z, {
                            children: [(0, r.jsxs)("div", {
                                className: w().row,
                                children: [(0, r.jsx)(c(), {
                                    href: "/",
                                    className: w().logo,
                                    scroll: !1,
                                    onMouseEnter: () => F("pointer"),
                                    onMouseLeave: () => F(),
                                    children: (0, r.jsx)("svg", {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        viewBox: "0 0 153 37",
                                        fill: "#141414",
                                        children: (0, r.jsx)("path", {
                                            d: "M9.78 30.957c-4.658 0-8.015-2.633-8.68-6.945h3.038c.405 2.98 2.691 4.485 5.643 4.485 3.877 0 5.99-1.62 5.99-3.906 0-2.402-1.766-2.98-5.296-3.762l-2.749-.607c-3.443-.753-5.932-2.489-5.932-5.788 0-3.501 3.501-6.105 7.929-6.105 4.63 0 7.783 2.43 8.42 6.047h-3.038c-.695-2.517-2.72-3.588-5.382-3.588-2.778 0-4.977 1.331-4.977 3.357 0 2.083 1.417 2.778 4.803 3.53l2.749.608c4.427.984 6.424 2.546 6.424 5.99 0 3.935-3.56 6.684-8.941 6.684ZM28.977 14.81c3.502 0 5.383 2.691 5.383 6.164v9.665h-2.836v-9.231c0-3.154-1.447-4.514-3.704-4.514s-3.704 1.389-3.704 4.572v9.173H21.28V8.647h2.836v9.636c.695-1.823 2.2-3.473 4.861-3.473Zm15.266 16.147c-4.6 0-7.552-3.27-7.552-8.073 0-4.804 2.951-8.074 7.552-8.074 4.601 0 7.524 3.27 7.524 8.074 0 4.803-2.923 8.073-7.524 8.073Zm0-2.084c2.952 0 4.63-2.343 4.63-5.99 0-3.645-1.678-5.99-4.63-5.99-2.951 0-4.659 2.345-4.659 5.99 0 3.647 1.708 5.99 4.66 5.99Zm26.26 1.621 3.79-15.365h2.749l-3.82 15.51H67.81L64.8 15.273 61.792 30.64h-5.41l-3.82-15.51h2.748L59.1 30.494l3.01-15.365h5.382l3.01 15.365Zm21.47-8.015h7.235v.723h-7.234v7.437h-.81v-7.437h-7.235v-.723h7.234v-7.09h.81v7.09Zm11.715-13.832h17.565v2.604h-7.321V30.64h-2.923V11.25h-7.321V8.647Zm29.472 14.005c0 .29-.029.695-.058 1.07h-11.719c.231 3.357 1.939 5.151 4.514 5.151 2.257 0 3.443-1.041 4.022-2.777h2.894c-.897 3.298-3.415 4.861-6.916 4.861-4.688 0-7.379-3.415-7.379-8.073 0-4.717 2.749-8.074 7.35-8.074 4.341 0 7.292 3.068 7.292 7.842Zm-7.292-5.758c-2.459 0-4.109 1.591-4.456 4.688h8.854c-.173-2.778-1.851-4.688-4.398-4.688Zm12.637 13.745h-2.835V8.647h2.835v21.992Zm6.335 0h-2.836V8.647h2.836v21.992ZM146.754 27.332h2.542v.547h-.935v2.576h-.671v-2.576h-.936v-.547ZM149.511 27.332h.986l.772 2.349h.004l.749-2.349h.977v3.123h-.626v-2.33h-.018l-.767 2.33h-.662l-.771-2.33h-.014v2.33h-.63v-3.122Z"
                                        })
                                    })
                                }), (0, r.jsx)("div", {
                                    className: w().contactItem,
                                    children: (0, r.jsx)(p.Z, {})
                                })]
                            }), (0, r.jsxs)("div", {
                                className: w().bottom,
                                children: [(0, r.jsx)(m, {
                                    className: w().secondaryNav,
                                    items: n
                                }), s && (0, r.jsx)("div", {
                                    className: w().copyRight,
                                    children: s
                                })]
                            })]
                        }), !d && (0, r.jsxs)(x.Z, {
                            children: [(0, r.jsxs)("div", {
                                className: w().ctaBlock,
                                children: [(0, r.jsx)("div", {
                                    className: w().ctaTitle,
                                    ref: y,
                                    children: "Let’s Talk"
                                }), (0, r.jsx)(o.Z, {
                                    className: w().button,
                                    href: "#start-a-project",
                                    label: "Start a project",
                                    isLight: !0
                                })]
                            }), (0, r.jsxs)("div", {
                                className: w().row,
                                children: [(0, r.jsx)(_, {
                                    items: t
                                }), (0, r.jsxs)("div", {
                                    className: w().contacts,
                                    children: [(0, r.jsx)(E, { ...l
                                    }), (0, r.jsx)(E, { ...i
                                    }), (0, r.jsx)(E, { ...u
                                    }), (0, r.jsxs)("div", {
                                        className: w().contactItem,
                                        children: [(0, r.jsx)("div", {
                                            className: w().label,
                                            children: "Connect with us"
                                        }), (0, r.jsx)(p.Z, {})]
                                    })]
                                })]
                            }), (0, r.jsxs)("div", {
                                className: w().bottom,
                                children: [(0, r.jsx)(m, {
                                    className: w().secondaryNav,
                                    items: n
                                }), s && (0, r.jsx)("div", {
                                    className: w().copyRight,
                                    children: s
                                })]
                            })]
                        })]
                    })
                })
            }
            var F = n(97180),
                C = n.n(F),
                S = n(23747),
                M = n.n(S),
                Z = n(29823),
                P = n.n(Z),
                I = n(12809),
                T = n.n(I),
                R = n(25317),
                O = n(76743);
            let q = e => {
                let {
                    items: t,
                    isVisible: n,
                    setIsVisible: s
                } = e, l = (0, a.useRef)(null), {
                    onCursor: o
                } = (0, a.useContext)(h.uG);
                return (0, a.useEffect)(() => {
                    let e = e => {
                        l.current && !l.current.contains(e.target) && l.current.previousSibling && !l.current.previousSibling.contains(e.target) && s(!1)
                    };
                    return document.addEventListener("mousedown", e), () => {
                        document.removeEventListener("mousedown", e)
                    }
                }, []), (0, r.jsx)(O.Z, {
                    nodeRef: l,
                    in: n,
                    timeout: 500,
                    unmountOnExit: !0,
                    onEnter: () => {
                        v.p8.context(() => {
                            v.p8.to(l.current, {
                                delay: .2,
                                opacity: 1,
                                duration: .4,
                                ease: R.qD.easeInOut
                            }), v.p8.fromTo("li", {
                                opacity: 0,
                                y: "50%"
                            }, {
                                delay: .2,
                                opacity: 1,
                                y: "0%",
                                stagger: .1,
                                overwrite: !0
                            })
                        }, l)
                    },
                    onExit: () => {
                        v.p8.context(() => {
                            v.p8.to(l.current, {
                                opacity: 0,
                                duration: .4,
                                overwrite: !0,
                                ease: R.qD.easeInOut
                            }), v.p8.to("li", {
                                opacity: 0,
                                stagger: -.05,
                                overwrite: !0
                            })
                        }, l)
                    },
                    children: (0, r.jsx)("div", {
                        ref: l,
                        className: T().submenu,
                        children: (0, r.jsx)("ul", {
                            children: t.map((e, t) => {
                                if (e.title) return (0, r.jsx)("li", {
                                    children: (0, r.jsx)(c(), {
                                        href: e.isExternalLink ? e.link : "/".concat(e.page.slug),
                                        onMouseEnter: () => o("pointer"),
                                        onMouseLeave: () => o(),
                                        scroll: !1,
                                        children: (0, r.jsx)("span", {
                                            children: e.title
                                        })
                                    })
                                }, e.title)
                            })
                        })
                    })
                })
            };
            var G = n(11163);

            function V(e) {
                let {
                    link: t,
                    setSubmenuOpened: n
                } = e, s = t.isExternalLink ? t.link : "/".concat(t.page.slug), l = (0, a.useRef)(null), [o, i] = (0, a.useState)(!1), [u, d] = (0, a.useState)(!1), m = (0, G.useRouter)(), {
                    onCursor: p
                } = (0, a.useContext)(h.uG), x = t.hasSubmenu && t.submenu.length;
                return (0, a.useEffect)(() => {
                    x && o ? d(!0) : m.asPath == s ? d(!0) : d(!1)
                }, [o, m]), (0, a.useEffect)(() => {
                    x && n(o)
                }, [o]), (0, r.jsxs)("li", {
                    onMouseEnter: e => {
                        x && i(!0)
                    },
                    onMouseLeave: e => {
                        x && i(!1)
                    },
                    children: [
                        ["#", "/#"].includes(s) ? (0, r.jsx)("span", {
                            className: u ? P().active : void 0,
                            ref: l,
                            "data-title": t.title,
                            onMouseEnter: () => p("pointer"),
                            onMouseLeave: () => p(),
                            children: (0, r.jsx)("span", {
                                children: t.title
                            })
                        }) : (0, r.jsx)(c(), {
                            className: u ? P().active : void 0,
                            ref: l,
                            href: s,
                            "data-title": t.title,
                            onMouseEnter: () => p("pointer"),
                            onMouseLeave: () => p(),
                            scroll: !1,
                            children: (0, r.jsx)("span", {
                                children: t.title
                            })
                        }), x && (0, r.jsx)(q, {
                            items: t.submenu,
                            isVisible: o,
                            setIsVisible: i
                        })
                    ]
                })
            }
            var A = n(47961),
                H = n.n(A);

            function B(e) {
                let {
                    items: t,
                    isVisible: n
                } = e;
                return (0, r.jsx)("ul", {
                    children: t.map((e, t) => {
                        if (e.title) return (0, r.jsx)("li", {
                            children: (0, r.jsx)(c(), {
                                href: e.isExternalLink ? e.link : "/".concat(e.page.slug),
                                scroll: !1,
                                children: e.title
                            })
                        }, e.title)
                    })
                })
            }

            function D(e) {
                let {
                    link: t
                } = e, n = t.isExternalLink ? t.link : "/".concat(t.page.slug), s = (0, a.useRef)(null), l = (0, a.useRef)(null), [o, i] = (0, a.useState)(!1), [u, d] = (0, a.useState)(!1);
                (0, G.useRouter)();
                let h = t.hasSubmenu && t.submenu.length,
                    m = e => {
                        i(!o)
                    };
                return (0, a.useEffect)(() => {
                    if (!h) return;
                    let e = v.p8.context(() => {
                        o ? (v.p8.set("ul", {
                            display: "grid",
                            height: "auto"
                        }), v.p8.from("ul", {
                            display: "none",
                            height: 0
                        }), l.current && l.current.classList.add(H().opened)) : (v.p8.to("ul", {
                            display: "none",
                            height: 0
                        }), l.current && l.current.classList.remove(H().opened))
                    }, s);
                    return () => {
                        e.revert()
                    }
                }, [o]), (0, r.jsxs)("li", {
                    ref: s,
                    children: [
                        ["#", "/#"].includes(n) ? (0, r.jsxs)("span", {
                            className: u ? H().active : void 0,
                            ref: l,
                            onClick: m,
                            children: [(0, r.jsx)("span", {
                                children: (0, r.jsx)("span", {
                                    children: t.title
                                })
                            }), h && !1]
                        }) : (0, r.jsxs)(c(), {
                            className: u ? H().active : void 0,
                            ref: l,
                            href: h && !o ? "#" : n,
                            onClick: m,
                            scroll: !1,
                            children: [(0, r.jsx)("span", {
                                children: (0, r.jsx)("span", {
                                    children: t.title
                                })
                            }), h && !1]
                        }), h && (0, r.jsx)(B, {
                            items: t.submenu,
                            isVisible: o
                        })
                    ]
                })
            }

            function Y(e) {
                let {
                    items: t,
                    isVisible: n,
                    setVisible: s,
                    button: l,
                    secondaryNav: i
                } = e, c = (0, a.useRef)(null), u = (0, G.useRouter)();
                return (0, a.useEffect)(() => {
                    let e = () => {
                        s(!1)
                    };
                    return u.events.on("routeChangeStart", e), () => {
                        u.events.off("routeChangeStart", e)
                    }
                }, []), (0, r.jsx)(O.Z, {
                    nodeRef: c,
                    in: n,
                    timeout: 1e3,
                    unmountOnExit: !0,
                    onEnter: () => {
                        v.p8.context(() => {
                            v.p8.to(c.current, {
                                opacity: 1
                            }), v.p8.fromTo("." + H().menu + " > li > *:not(ul) > span > span", {
                                y: "100%"
                            }, {
                                y: "0%",
                                duration: .6,
                                delay: .4,
                                stagger: .05
                            }), v.p8.fromTo("." + H().button, {
                                y: "100%",
                                opacity: 0
                            }, {
                                y: "0%",
                                opacity: 1,
                                delay: 1
                            }), v.p8.fromTo("." + H().bottom, {
                                y: "100%",
                                opacity: 0
                            }, {
                                y: "0%",
                                opacity: 1,
                                delay: 1.1
                            })
                        }, c)
                    },
                    onExit: () => {
                        v.p8.context(() => {
                            v.p8.to(c.current, {
                                opacity: 0,
                                delay: .2
                            }), v.p8.fromTo("." + H().menu + " > li > *:not(ul) > span > span", {
                                y: "0%"
                            }, {
                                y: "-100%",
                                duration: .6,
                                delay: .1,
                                stagger: 0
                            }), v.p8.fromTo("." + H().button, {
                                y: "0%"
                            }, {
                                y: "100%",
                                opacity: 0
                            }), v.p8.fromTo("." + H().bottom, {
                                y: "0%"
                            }, {
                                y: "100%",
                                opacity: 0
                            })
                        }, c)
                    },
                    children: (0, r.jsx)("div", {
                        ref: c,
                        className: H().nav,
                        children: (0, r.jsxs)("div", {
                            className: H().wrap,
                            children: [(0, r.jsx)("ul", {
                                className: H().menu,
                                children: t.length && t.map(e => {
                                    if (e.title) return (0, r.jsx)(D, {
                                        link: e
                                    }, e.title)
                                })
                            }), (0, r.jsx)(o.Z, {
                                className: H().button,
                                isLight: !0,
                                label: l.label,
                                href: l.isExternalLink ? l.externalLink : "/".concat(l.value.slug)
                            }), (0, r.jsxs)("div", {
                                className: H().bottom,
                                children: [(0, r.jsx)(p.Z, {}), (0, r.jsx)(m, {
                                    className: H().secondaryNav,
                                    items: i
                                })]
                            })]
                        })
                    })
                })
            }
            let U = e => {
                let {
                    button: t,
                    items: n,
                    defaultColorScheme: s = "",
                    secondaryNav: l,
                    hideHeaderMenu: i = !1
                } = e, u = (0, a.useRef)(null), d = (0, G.useRouter)(), [m, p] = (0, a.useState)(!1), [x, f] = (0, a.useState)(!1), j = [C().primary], {
                    onCursor: _
                } = (0, a.useContext)(h.uG);
                return s && j.push(C()[s]), (0, a.useEffect)(() => {
                    let e = () => {
                        if (!u.current) return;
                        let e = u.current.querySelector("." + C().burger);
                        e && e.classList.remove(M().active, C().active), document.body.classList.remove("scroll-disable")
                    };
                    return d.events.on("routeChangeStart", e), () => {
                        d.events.off("routeChangeStart", e)
                    }
                }, []), (0, a.useEffect)(() => {
                    u.current
                }, [m, x]), (0, a.useEffect)(() => {
                    let e = g.ScrollTrigger.create({
                        onUpdate(e) {
                            u.current && (e.direction > 0 ? u.current.classList.add(C().hide) : u.current.classList.remove(C().hide), window.scrollY > 50 ? u.current.classList.add(C().fixed) : u.current.classList.remove(C().fixed))
                        }
                    });
                    return () => {
                        e.kill()
                    }
                }, []), (0, r.jsxs)("header", {
                    ref: u,
                    className: j.join(" "),
                    "data-color-scheme": s,
                    children: [(0, r.jsxs)("div", {
                        className: C().wrapper,
                        children: [(0, r.jsx)(c(), {
                            href: "/",
                            className: C().logo,
                            scroll: !1,
                            onMouseEnter: () => _("pointer"),
                            onMouseLeave: () => _(),
                            children: (0, r.jsx)("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                viewBox: "0 0 153 37",
                                fill: "#141414",
                                children: (0, r.jsx)("path", {
                                    d: "M9.78 30.957c-4.658 0-8.015-2.633-8.68-6.945h3.038c.405 2.98 2.691 4.485 5.643 4.485 3.877 0 5.99-1.62 5.99-3.906 0-2.402-1.766-2.98-5.296-3.762l-2.749-.607c-3.443-.753-5.932-2.489-5.932-5.788 0-3.501 3.501-6.105 7.929-6.105 4.63 0 7.783 2.43 8.42 6.047h-3.038c-.695-2.517-2.72-3.588-5.382-3.588-2.778 0-4.977 1.331-4.977 3.357 0 2.083 1.417 2.778 4.803 3.53l2.749.608c4.427.984 6.424 2.546 6.424 5.99 0 3.935-3.56 6.684-8.941 6.684ZM28.977 14.81c3.502 0 5.383 2.691 5.383 6.164v9.665h-2.836v-9.231c0-3.154-1.447-4.514-3.704-4.514s-3.704 1.389-3.704 4.572v9.173H21.28V8.647h2.836v9.636c.695-1.823 2.2-3.473 4.861-3.473Zm15.266 16.147c-4.6 0-7.552-3.27-7.552-8.073 0-4.804 2.951-8.074 7.552-8.074 4.601 0 7.524 3.27 7.524 8.074 0 4.803-2.923 8.073-7.524 8.073Zm0-2.084c2.952 0 4.63-2.343 4.63-5.99 0-3.645-1.678-5.99-4.63-5.99-2.951 0-4.659 2.345-4.659 5.99 0 3.647 1.708 5.99 4.66 5.99Zm26.26 1.621 3.79-15.365h2.749l-3.82 15.51H67.81L64.8 15.273 61.792 30.64h-5.41l-3.82-15.51h2.748L59.1 30.494l3.01-15.365h5.382l3.01 15.365Zm21.47-8.015h7.235v.723h-7.234v7.437h-.81v-7.437h-7.235v-.723h7.234v-7.09h.81v7.09Zm11.715-13.832h17.565v2.604h-7.321V30.64h-2.923V11.25h-7.321V8.647Zm29.472 14.005c0 .29-.029.695-.058 1.07h-11.719c.231 3.357 1.939 5.151 4.514 5.151 2.257 0 3.443-1.041 4.022-2.777h2.894c-.897 3.298-3.415 4.861-6.916 4.861-4.688 0-7.379-3.415-7.379-8.073 0-4.717 2.749-8.074 7.35-8.074 4.341 0 7.292 3.068 7.292 7.842Zm-7.292-5.758c-2.459 0-4.109 1.591-4.456 4.688h8.854c-.173-2.778-1.851-4.688-4.398-4.688Zm12.637 13.745h-2.835V8.647h2.835v21.992Zm6.335 0h-2.836V8.647h2.836v21.992ZM146.754 27.332h2.542v.547h-.935v2.576h-.671v-2.576h-.936v-.547ZM149.511 27.332h.986l.772 2.349h.004l.749-2.349h.977v3.123h-.626v-2.33h-.018l-.767 2.33h-.662l-.771-2.33h-.014v2.33h-.63v-3.122Z"
                                })
                            })
                        }), !i && (0, r.jsx)("nav", {
                            children: (0, r.jsx)("ul", {
                                children: n.map(e => {
                                    if (e.title) return (0, r.jsx)(V, {
                                        link: e,
                                        setSubmenuOpened: p
                                    }, e.title)
                                })
                            })
                        }), !i && (0, r.jsx)(o.Z, {
                            className: C().button,
                            label: t.label,
                            href: t.isExternalLink ? t.externalLink : "/".concat(t.value.slug)
                        }), i && (0, r.jsx)("div", {
                            className: C().campaignButton,
                            children: (0, r.jsx)(o.Z, {
                                className: C().button,
                                label: "Get your Free audit",
                                href: "#book_audit"
                            })
                        }), !i && (0, r.jsxs)("button", {
                            className: [M().button, C().burger, M()["not-hover"]].join(" "),
                            onClick: e => {
                                f(!x), x ? (document.body.classList.remove("scroll-disable"), e.currentTarget.classList.remove(M().active, C().active)) : (document.body.classList.add("scroll-disable"), e.currentTarget.classList.add(M().active, C().active))
                            },
                            children: [(0, r.jsx)("span", {
                                children: (0, r.jsx)("span", {
                                    "data-title": "Close",
                                    children: (0, r.jsx)("span", {
                                        children: "Menu"
                                    })
                                })
                            }), (0, r.jsx)("i", {})]
                        })]
                    }), !i && (0, r.jsx)(Y, {
                        items: n,
                        isVisible: x,
                        setVisible: f,
                        button: t,
                        secondaryNav: l
                    })]
                })
            };
            var W = n(25283),
                J = n(8411),
                z = n(56543),
                X = n.n(z),
                Q = n(60164),
                K = n.n(Q),
                $ = n(25675),
                ee = n.n($);

            function et(e) {
                let {
                    quote: t,
                    client: n
                } = e, {
                    onCursor: s
                } = (0, a.useContext)(h.uG);
                return (0, r.jsxs)("div", {
                    className: K().block,
                    children: [(0, r.jsxs)("blockquote", {
                        children: [(0, r.jsx)("p", {
                            children: t
                        }), (0, r.jsx)("footer", {
                            children: n
                        })]
                    }), (0, r.jsxs)("div", {
                        className: K().bottom,
                        children: [(0, r.jsx)(ee(), {
                            src: "/google-review.png",
                            width: 140,
                            height: 28.9,
                            alt: "google-review"
                        }), (0, r.jsx)(c(), {
                            href: "https://clutch.co/profile/show-tell",
                            target: "_blank",
                            onMouseEnter: () => s("pointer"),
                            onMouseLeave: () => s(),
                            scroll: !1,
                            children: "View all reviews ›"
                        })]
                    })]
                })
            }
            var en = n(19763),
                er = n(68394);

            function es(e) {
                let {
                    thankYouMsg: t,
                    review: n,
                    toEmail: s
                } = e, l = (0, a.useRef)(null), [i, c] = (0, a.useState)(!1), [u, d] = (0, a.useState)(!1), h = (0, G.useRouter)(), [m, x] = (0, a.useState)(), f = (0, en._)({
                    type: "byChar",
                    delay: .4
                }), j = (0, en._)({
                    type: "fadeIn",
                    delay: .7
                }), _ = (0, en._)({
                    type: "fadeIn",
                    delay: .6
                });
                (0, a.useEffect)(() => {
                    let e = h.asPath.split("#")[1];
                    "start-a-project" == e ? c(!0) : c(!1)
                }, [h.asPath]);
                let g = () => {
                        h.push(h.asPath.split("#")[0], void 0, {
                            scroll: !1
                        })
                    },
                    b = async () => {
                        let e = await fetch("/api/insights?_status=published&limit=2&sort=-customPublishDate&depth=1"),
                            t = await e.json();
                        x(t.docs)
                    };
                return (0, a.useEffect)(() => {
                    !m && i && b()
                }, [i]), (0, r.jsx)(O.Z, {
                    nodeRef: l,
                    timeout: 400,
                    in: i,
                    unmountOnExit: !0,
                    onEnter: () => {
                        v.p8.fromTo(l.current, {
                            x: "100%",
                            duration: .4
                        }, {
                            x: "0%"
                        })
                    },
                    onExit: () => {
                        v.p8.to(l.current, {
                            x: "-100%",
                            duration: .4
                        })
                    },
                    children: (0, r.jsxs)("section", {
                        ref: l,
                        className: X().block,
                        "data-lenis-prevent": !0,
                        children: [(0, r.jsx)(O.Z, {
                            timeout: 0,
                            in: !u,
                            unmountOnExit: !0,
                            children: (0, r.jsxs)("div", {
                                className: X().cols,
                                children: [(0, r.jsxs)("div", {
                                    className: X().leftCol,
                                    children: [(0, r.jsx)(W.Z, {
                                        label: "‹ Back to previous",
                                        onClick: g
                                    }), (0, r.jsxs)("h2", {
                                        className: X().title,
                                        ref: f,
                                        children: ["Start a", (0, r.jsx)("br", {}), (0, r.jsx)("span", {
                                            children: "project"
                                        })]
                                    }), (0, r.jsx)("div", {
                                        className: X().textAfter,
                                        children: "Thanks for your interest in working with us. Please complete your details and we’ll get back to you within 48 hours."
                                    }), (0, r.jsx)("div", {
                                        ref: _,
                                        children: (0, r.jsxs)(J.l0, {
                                            onSent: d,
                                            formTitle: "Start a project",
                                            to: s,
                                            children: [(0, r.jsx)("h5", {
                                                children: "About your project"
                                            }), (0, r.jsx)(J.__, {
                                                label: "1. Project Type *",
                                                subLabel: "(Select all applicable)"
                                            }), (0, r.jsx)(J.hE, {
                                                items: ["Branding", "Website"],
                                                type: "checkbox",
                                                value: "Branding",
                                                name: "project_type",
                                                required: !0
                                            }), (0, r.jsx)(J.__, {
                                                label: "2. Do you have an existing brand? *"
                                            }), (0, r.jsx)(J.hE, {
                                                items: ["Yes", "No"],
                                                value: "Yes",
                                                name: "existing_brand",
                                                required: !0
                                            }), (0, r.jsx)(J.__, {
                                                label: "3. Project budget *"
                                            }), (0, r.jsx)(J.hE, {
                                                items: ["\xa320,000 - \xa344,999", "\xa345,000 - \xa369,999", "\xa370,000 - \xa399,999", "\xa3100,000 +"],
                                                value: "\xa320,000 - \xa344,999",
                                                name: "project_budget",
                                                inCol: !0,
                                                required: !0
                                            }), (0, r.jsx)(J.__, {
                                                label: "4. Do you have a project brief?"
                                            }), (0, r.jsx)(J.jM, {
                                                label: "Upload a brief",
                                                name: "brief",
                                                accept: "application/pdf"
                                            }), (0, r.jsx)("h5", {
                                                children: "About you"
                                            }), (0, r.jsx)(J.__, {
                                                label: "5. What should we call you?"
                                            }), (0, r.jsx)(J.oi, {
                                                label: "First name *",
                                                name: "first_name",
                                                required: !0
                                            }), (0, r.jsx)(J.oi, {
                                                label: "Last name *",
                                                name: "last_name",
                                                required: !0
                                            }), (0, r.jsx)(J.__, {
                                                label: "6. About your company?"
                                            }), (0, r.jsx)(J.oi, {
                                                label: "Company name *",
                                                name: "company_name",
                                                required: !0
                                            }), (0, r.jsx)(J.oi, {
                                                label: "Existing website (optional)",
                                                name: "existing_website"
                                            }), (0, r.jsx)(J.__, {
                                                label: "7. Contact details"
                                            }), (0, r.jsx)(J.U5, {
                                                label: "Email address *",
                                                name: "email",
                                                optIn: !1,
                                                required: !0
                                            }), (0, r.jsx)(J.sb, {
                                                label: "Telephone *",
                                                name: "telephone",
                                                required: !0
                                            }), (0, r.jsx)("h5", {
                                                children: "Any other details"
                                            }), (0, r.jsx)(J.__, {
                                                label: "8. Any other details?"
                                            }), (0, r.jsx)(J.Fz, {
                                                label: "Your message (optional)",
                                                name: "message"
                                            }), (0, r.jsx)("h5", {
                                                children: "9. Where did you hear about Show + Tell?"
                                            }), (0, r.jsx)(J.Ph, {
                                                label: "Please select (optional)",
                                                name: "hear_about_show_and_tell",
                                                options: ["Word of mouth", "Google", "Online Ad", "Linkedin", "Press/News Article", "Instagram", "Clutch"]
                                            }), (0, r.jsx)(J.yN, {
                                                label: "By submitting you confirm you have read and agree to the storage and use of your data as outlined in our privacy policy."
                                            }), (0, r.jsx)(o.Z, {
                                                label: "Send enquiry",
                                                type: "submit",
                                                isLight: !0
                                            })]
                                        })
                                    })]
                                }), (0, r.jsx)("div", {
                                    ref: j,
                                    className: X().quoteCol,
                                    children: (0, r.jsx)(et, { ...n
                                    })
                                })]
                            })
                        }), (0, r.jsx)(O.Z, {
                            timeout: 0,
                            in: u,
                            unmountOnExit: !0,
                            children: (0, r.jsxs)("div", {
                                className: X().thankYou,
                                children: [(0, r.jsx)(W.Z, {
                                    label: "‹ Back to previous",
                                    onClick: g
                                }), (0, r.jsxs)("h2", {
                                    className: X().title,
                                    children: ["Thank You For ", (0, r.jsx)("span", {
                                        children: "Your Enquiry"
                                    })]
                                }), (0, r.jsx)("div", {
                                    className: X().textAfter,
                                    children: t
                                }), (0, r.jsx)(p.Z, {
                                    label: "Follow us"
                                }), m && (0, r.jsx)(er.Z, {
                                    className: X().latestNews,
                                    title: "Latest Insights",
                                    items: m
                                })]
                            })
                        })]
                    })
                })
            }
            var el = n(4945),
                ea = n(16259),
                eo = n.n(ea),
                ei = n(74506),
                ec = n(16953),
                eu = n(39332);

            function ed(e) {
                let {
                    children: t
                } = e, n = (0, a.useRef)(null), {
                    targetUrl: s,
                    phase: l
                } = (0, ei.cB)(), o = (0, ei.aK)(), {
                    isFirstEnter: i,
                    animationDelay: c,
                    setIsFirstEnter: u
                } = (0, a.useContext)(ec.GlobalContext), d = (0, a.useRef)(null), h = ["", 1, 2, 3, 4, 5, 6, 7, 8, 9, 0], m = (0, eu.usePathname)(), p = () => {
                    v.p8.fromTo(n.current, {
                        y: "-100%"
                    }, {
                        y: "0%",
                        duration: .6,
                        ease: R.EA.easeOut
                    })
                }, x = () => {
                    let e = document.querySelector("body");
                    (null == e ? void 0 : e.classList.contains("animation-started")) || null == e || e.classList.add("animation-started"), v.p8.fromTo(n.current, {
                        y: "0%"
                    }, {
                        y: "100%",
                        duration: .6,
                        delay: c,
                        ease: R.EA.easeIn,
                        onComplete: () => {
                            u(!1)
                        }
                    })
                }, f = () => {
                    if (!d.current || !i) return;
                    let e = d.current.querySelectorAll(".".concat(eo().decimalInner)),
                        t = Array.prototype.slice.call(e).reverse(),
                        n = v.p8.timeline({
                            paused: !0
                        });
                    t.forEach((e, t) => {
                        n.to(e, {
                            y: 2 == t ? "-1em" : "-10em"
                        }, "=-.3")
                    }), v.p8.fromTo(n, {
                        progress: 0
                    }, {
                        progress: 1,
                        duration: 3
                    })
                };
                return (0, a.useEffect)(() => {
                    ["/", "/fr/", "/de/"].includes(m || "") && f(), "IN" == l && x(), "OUT" == l && p()
                }, [l]), (0, a.useEffect)(() => {
                    if (!d.current || !i) return
                }, []), (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsx)("div", {
                        ref: n,
                        className: eo().block,
                        children: i && (0, r.jsxs)("div", {
                            ref: d,
                            className: eo().counter,
                            children: [(0, r.jsx)("div", {
                                className: eo().decimal,
                                children: (0, r.jsxs)("div", {
                                    className: eo().decimalInner,
                                    children: [(0, r.jsx)("span", {}), (0, r.jsx)("span", {
                                        children: "1"
                                    })]
                                })
                            }), (0, r.jsx)("div", {
                                className: eo().decimal,
                                children: (0, r.jsx)("div", {
                                    className: eo().decimalInner,
                                    children: h.map((e, t) => (0, r.jsx)("span", {
                                        children: e
                                    }, t))
                                })
                            }), (0, r.jsx)("div", {
                                className: eo().decimal,
                                children: (0, r.jsx)("div", {
                                    className: eo().decimalInner,
                                    children: h.map((e, t) => (0, r.jsx)("span", {
                                        children: e
                                    }, t))
                                })
                            })]
                        })
                    }), (0, r.jsx)(ei.ZP, {
                        children: (0, r.jsx)(a.Fragment, {
                            children: t
                        }, o)
                    })]
                })
            }
            var eh = n(9008),
                em = n.n(eh);

            function ep(e) {
                let {
                    title: t,
                    description: n,
                    image: s,
                    canonicalUrl: l,
                    noIndexing: a,
                    lastUpdate: o
                } = e;
                return (0, r.jsxs)(em(), {
                    children: [(0, r.jsx)("meta", {
                        property: "og:locale",
                        content: "en_GB"
                    }), (0, r.jsx)("meta", {
                        property: "og:type",
                        content: "website"
                    }), (0, r.jsx)("meta", {
                        property: "og:site_name",
                        content: "Show + Tell"
                    }), a ? (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsx)("meta", {
                            name: "robots",
                            content: "noindex"
                        }), (0, r.jsx)("meta", {
                            name: "googlebot",
                            content: "noindex"
                        })]
                    }) : (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsx)("meta", {
                            name: "robots",
                            content: "index,follow,noodp"
                        }), (0, r.jsx)("meta", {
                            name: "googlebot",
                            content: "index,follow"
                        })]
                    }), l && (0, r.jsx)("link", {
                        rel: "canonical",
                        href: l
                    }), t && (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsx)("title", {
                            children: t
                        }), (0, r.jsx)("meta", {
                            property: "og:title",
                            content: t
                        })]
                    }), n && (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsx)("meta", {
                            name: "description",
                            content: n
                        }), (0, r.jsx)("meta", {
                            property: "og:description",
                            content: n
                        })]
                    }), s && s.url && (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsx)("meta", {
                            property: "og:image",
                            content: s.url
                        }), (0, r.jsx)("meta", {
                            property: "og:image:width",
                            content: s.width.toString()
                        }), (0, r.jsx)("meta", {
                            property: "og:image:height",
                            content: s.height.toString()
                        }), (0, r.jsx)("meta", {
                            property: "og:image:type",
                            content: s.mimeType
                        }), (0, r.jsx)("meta", {
                            name: "twitter:card",
                            content: "summary_large_image"
                        })]
                    }), o && (0, r.jsx)("meta", {
                        property: "article:modified_time",
                        content: o
                    })]
                })
            }

            function ex(e) {
                let {
                    items: t
                } = e;
                return (0, r.jsxs)(em(), {
                    children: [t.length > 0 && t.map((e, t) => {
                        let {
                            locale: n,
                            href: s
                        } = e;
                        return (0, r.jsx)("link", {
                            rel: "alternate",
                            hrefLang: n,
                            href: "https://showandtell.agency" + ("/" == s ? "" : s)
                        }, t)
                    }), (0, r.jsx)("link", {
                        rel: "alternate",
                        hrefLang: "x-default",
                        href: "https://showandtell.agency"
                    })]
                })
            }

            function ef(e) {
                let {
                    children: t,
                    headerPrimary: n,
                    footerPrimary: s,
                    layout: o,
                    page: {
                        meta: i,
                        updatedAt: c,
                        colorScheme: u,
                        hreflang: d
                    }
                } = e, m = (0, a.useRef)(), p = [l().block];
                return (null == o ? void 0 : o.pageStyle) && p.push(l()["page-".concat(o.pageStyle)]), "dark" == u && (n.defaultColorScheme = "light", p.push(l().darkScheme)), (0, a.useEffect)(() => {
                    function e(e) {
                        var t;
                        null === (t = m.current) || void 0 === t || t.raf(1e3 * e)
                    }
                    return v.p8.ticker.add(e), () => {
                        v.p8.ticker.remove(e)
                    }
                }, []), (0, r.jsxs)(r.Fragment, {
                    children: [i && (0, r.jsx)(ep, { ...i,
                        lastUpdate: c
                    }), d && (0, r.jsx)(ex, {
                        items: d
                    }), (0, r.jsxs)(h.rK, {
                        children: [(0, r.jsxs)(el.pi, {
                            ref: m,
                            autoRaf: !1,
                            root: !0,
                            children: [(0, r.jsx)(U, { ...n
                            }), (0, r.jsx)(ed, {
                                children: (0, r.jsx)("main", {
                                    className: p.join(" "),
                                    children: t
                                })
                            }), (0, r.jsx)(L, { ...s
                            })]
                        }), (0, r.jsx)(es, {
                            thankYouMsg: n.thankYouMsg,
                            review: n.review,
                            toEmail: n.startProjectToEmail
                        })]
                    })]
                })
            }
        },
        81829: function(e, t, n) {
            "use strict";
            n.d(t, {
                LE: function() {
                    return _
                },
                Rg: function() {
                    return v
                },
                ZP: function() {
                    return g
                },
                t: function() {
                    return f
                },
                uT: function() {
                    return j
                }
            });
            var r = n(85893),
                s = n(25675),
                l = n.n(s),
                a = n(96337),
                o = n.n(a),
                i = n(41664),
                c = n.n(i),
                u = n(1642),
                d = n(60541),
                h = n(11163),
                m = n(67294),
                p = n(23450),
                x = n.n(p);

            function f(e) {
                let {
                    featuredImage: t,
                    className: n
                } = e, s = [o().picture];
                return (n && s.push(n), t && t.url) ? (0, r.jsx)("picture", {
                    className: s.join(" "),
                    children: (0, r.jsx)(c(), {
                        href: v(e),
                        scroll: !1,
                        children: (0, r.jsx)(l(), {
                            src: t.url,
                            alt: t.alt,
                            width: 770,
                            height: 540
                        })
                    })
                }) : (0, r.jsx)(r.Fragment, {})
            }

            function j(e) {
                let {
                    category: t,
                    isFeatured: n,
                    title: s,
                    className: l,
                    customPublishDate: a,
                    createdAt: i,
                    readTime: d
                } = e, h = v(e), m = new Date(a || i), p = [o().content];
                return l && p.push(l), (0, r.jsxs)("div", {
                    className: p.join(" "),
                    children: [(0, r.jsxs)("div", {
                        className: o().meta,
                        children: [n && (0, r.jsx)("div", {
                            className: o().cat,
                            children: "Featured"
                        }), !n && t && t.length && (0, r.jsx)("div", {
                            className: o().cat,
                            children: t[0].value.title
                        }), (0, r.jsx)("div", {
                            className: o().readTime,
                            children: _(d)
                        })]
                    }), (0, r.jsx)("h6", {
                        children: (0, r.jsx)(c(), {
                            href: h,
                            scroll: !1,
                            children: s
                        })
                    }), (0, r.jsxs)("div", {
                        className: o().bottom,
                        children: [(0, r.jsx)("div", {
                            className: o().date,
                            children: m.toLocaleString("en-GB", {
                                day: "numeric",
                                month: "long",
                                year: "numeric"
                            })
                        }), (0, r.jsx)("div", {
                            className: o().link,
                            children: (0, r.jsx)(c(), {
                                href: h,
                                scroll: !1,
                                children: (0, r.jsx)(u.Arrow, {})
                            })
                        })]
                    })]
                })
            }

            function _(e) {
                if (!e) return;
                let t = e.match(/\d/g);
                if (t && t[0]) return x()("min", parseInt(t[0]), !0)
            }

            function v(e) {
                let {
                    slug: t,
                    category: n
                } = e;
                return n ? "/insights/".concat(n[0].value.slug, "/").concat(t) : ""
            }

            function g(e) {
                let {
                    onCursor: t
                } = (0, m.useContext)(d.uG), n = (0, h.useRouter)(), {
                    category: s,
                    slug: l
                } = e;
                return (0, r.jsxs)("article", {
                    className: o().block,
                    onClick: () => n.push({
                        pathname: "/insights/[category]/[slug]",
                        query: {
                            category: s[0].value.slug,
                            slug: l
                        }
                    }, void 0, {
                        scroll: !1
                    }),
                    onMouseEnter: () => t("view"),
                    onMouseLeave: () => t(),
                    children: [(0, r.jsx)(j, { ...e
                    }), (0, r.jsx)(f, { ...e
                    })]
                })
            }
        },
        38222: function(e, t, n) {
            "use strict";
            n.d(t, {
                Z: function() {
                    return c
                }
            });
            var r = n(85893),
                s = n(60541),
                l = n(67294),
                a = n(89594),
                o = n.n(a),
                i = n(1642);

            function c(e) {
                let {
                    label: t
                } = e, {
                    onCursor: n
                } = (0, l.useContext)(s.uG), a = [{
                    url: "https://www.instagram.com/showandtell_agency/",
                    icon: (0, r.jsx)(i.Instagram, {})
                }, {
                    url: "https://www.linkedin.com/company/weareshowandtell/",
                    icon: (0, r.jsx)(i.Linkedin, {})
                }, {
                    url: "https://www.awwwards.com/showandtell/",
                    icon: (0, r.jsx)(i.W, {})
                }, {
                    url: "https://clutch.co/profile/show-tell",
                    icon: (0, r.jsx)(i.C, {})
                }];
                return (0, r.jsxs)("div", {
                    className: o().social,
                    children: [t && (0, r.jsx)("div", {
                        className: o().label,
                        children: t
                    }), a.map((e, t) => {
                        let {
                            url: s,
                            icon: l
                        } = e;
                        return (0, r.jsx)("a", {
                            href: s,
                            target: "_blank",
                            onMouseEnter: () => n("pointer"),
                            onMouseLeave: () => n(),
                            children: l
                        }, t)
                    })]
                })
            }
        },
        59706: function(e, t, n) {
            "use strict";
            var r = n(85893),
                s = n(88986),
                l = n.n(s);
            t.Z = function(e) {
                let {
                    nodeRef: t,
                    className: n = "",
                    children: s
                } = e, a = [l().wrapper];
                return n && a.push(n), (0, r.jsx)("div", {
                    ref: t,
                    className: a.join(" "),
                    children: s
                })
            }
        },
        19912: function(e, t, n) {
            "use strict";
            n.d(t, {
                Z: function() {
                    return s
                }
            });
            var r = n(47311);

            function s(e) {
                if (!e || "string" != typeof e) return "";
                let t = e.replaceAll("\n", "<br />");
                return (0, r.ZP)(t)
            }
        },
        19763: function(e, t, n) {
            "use strict";
            n.d(t, {
                _: function() {
                    return i
                }
            });
            var r = n(10990),
                s = n(67294),
                l = n(42708),
                a = n(16953),
                o = n(65829);

            function i(e) {
                let {
                    type: t,
                    delay: n
                } = e, i = (0, s.useRef)(null), [c, u] = (0, l.YD)({
                    triggerOnce: !0
                }), {
                    animationDelay: d
                } = (0, s.useContext)(a.GlobalContext), h = "pageLoading" == n && d || !!n && n || 0, m = (0, s.useCallback)(e => {
                    i.current = e, c(e)
                }, [c]);
                return (0, s.useEffect)(() => {
                    if (!["byChar", "byWord"].includes(t) || !i.current || !u) return;
                    let e = new o.Z(i.current, {
                        types: "chars,words"
                    });
                    if (r.p8.set(e.words, {
                            overflow: "hidden",
                            verticalAlign: "top"
                        }), "byWord" != t) return r.p8.from(e.chars, {
                        y: "100%",
                        stagger: .02,
                        delay: h,
                        scrollTrigger: !n && {
                            trigger: i.current,
                            end: "bottom 60%",
                            scrub: !n
                        } || null
                    }), () => {
                        r.p8.killTweensOf(e.chars), e.revert()
                    }; {
                        var s;
                        let t = r.p8.timeline({
                            delay: h,
                            scrollTrigger: !n && {
                                trigger: i.current,
                                scrub: !n,
                                end: "bottom 70%"
                            } || null
                        });
                        return (null === (s = e.words) || void 0 === s ? void 0 : s.length) && e.words.map((e, n) => {
                            t.from(e.querySelectorAll(".char"), {
                                y: "100%",
                                delay: .02 * n
                            }, "")
                        }), () => {
                            t.kill(), e.revert()
                        }
                    }
                }, [u]), (0, s.useEffect)(() => {
                    if ("fadeIn" == t && i.current && u) return r.p8.from(i.current, {
                        opacity: 0,
                        delay: h,
                        scrollTrigger: !n && {
                            trigger: i.current,
                            end: "bottom 50%",
                            scrub: !n
                        } || null
                    }), () => {
                        r.p8.killTweensOf(i.current)
                    }
                }, [u]), m
            }
        },
        47961: function(e) {
            e.exports = {
                nav: "MobileNav_nav__AmY1p",
                wrap: "MobileNav_wrap__0CwYO",
                menu: "MobileNav_menu__yk_yM",
                opened: "MobileNav_opened__xV9Lh",
                button: "MobileNav_button__KQ5HC",
                bottom: "MobileNav_bottom__gEaS0",
                secondaryNav: "MobileNav_secondaryNav__0Nlu3"
            }
        },
        29823: function(e) {
            e.exports = {
                active: "NavLink_active__0RIwj"
            }
        },
        12809: function(e) {
            e.exports = {
                submenu: "SubMenu_submenu__qv2Ow"
            }
        },
        97180: function(e) {
            e.exports = {
                "lg-up": "min-width: 1024px",
                primary: "HeaderPrimary_primary__T3MP_",
                "submenu-opened": "HeaderPrimary_submenu-opened__yl57V",
                fixed: "HeaderPrimary_fixed__qdpyv",
                light: "HeaderPrimary_light__pZtO5",
                logo: "HeaderPrimary_logo__7zNsg",
                button: "HeaderPrimary_button__tCR69",
                burger: "HeaderPrimary_burger__c_qX6",
                hide: "HeaderPrimary_hide__iOzq0",
                wrapper: "HeaderPrimary_wrapper__VsrLG",
                campaignButton: "HeaderPrimary_campaignButton__6ziTw",
                burgerTopLineOut: "HeaderPrimary_burgerTopLineOut__dUVFW",
                burgerBottomLineOut: "HeaderPrimary_burgerBottomLineOut__Ao3JJ",
                active: "HeaderPrimary_active__mRvvi",
                burgerTopLineIn: "HeaderPrimary_burgerTopLineIn__4q_R_",
                burgerBottomLineIn: "HeaderPrimary_burgerBottomLineIn__UrsLp"
            }
        },
        16259: function(e) {
            e.exports = {
                "xs-up": "min-width: 480px",
                "lg-up": "min-width: 1024px",
                "xl-up": "min-width: 1230px",
                "xxl-up": "min-width: 1450px",
                block: "Preloader_block__RFn4o",
                pageLoading: "Preloader_pageLoading__Mf4St",
                counter: "Preloader_counter__cj9MC",
                decimal: "Preloader_decimal__FpMyx",
                decimalInner: "Preloader_decimalInner__er2_f"
            }
        },
        86146: function(e) {
            e.exports = {
                "lg-up": "min-width: 1024px",
                block: "RelatedNews_block__Ie9VN",
                items: "RelatedNews_items__EYifv"
            }
        },
        56543: function(e) {
            e.exports = {
                "lg-up": "min-width: 1024px",
                "md-up": "min-width: 960px",
                block: "StartProject_block__MiWbA",
                cols: "StartProject_cols__3bQYj",
                title: "StartProject_title__i7GjO",
                textAfter: "StartProject_textAfter___VJDi",
                leftCol: "StartProject_leftCol__TMYZW",
                thankYou: "StartProject_thankYou__Laqbc",
                quoteCol: "StartProject_quoteCol__lPlc5",
                latestNews: "StartProject_latestNews__NI8GJ"
            }
        },
        30462: function(e) {
            e.exports = {
                button: "BackButton_button__oipQC"
            }
        },
        65687: function(e) {
            e.exports = {
                "lg-up": "min-width: 1024px",
                block: "FooterNav_block__Ig0nx"
            }
        },
        50427: function(e) {
            e.exports = {
                "lg-up": "min-width: 1024px",
                blockOverlay: "Footer_blockOverlay__i2NnI",
                block: "Footer_block__g4plT",
                end: "Footer_end__g5_rv",
                campaign: "Footer_campaign__LSxoP",
                row: "Footer_row___Tsyy",
                logo: "Footer_logo__4kHnx",
                bottom: "Footer_bottom__x6H5q",
                secondaryNav: "Footer_secondaryNav__QWcjr",
                copyRight: "Footer_copyRight__Almgx",
                ctaBlock: "Footer_ctaBlock__0aC7L",
                ctaTitle: "Footer_ctaTitle__iSilJ",
                button: "Footer_button__y6KvE",
                contacts: "Footer_contacts__DXLCQ",
                contactItem: "Footer_contactItem__UbCow",
                label: "Footer_label__ZU5aZ",
                text: "Footer_text__w6bKv"
            }
        },
        81429: function(e) {
            e.exports = {
                "lg-up": "min-width: 1024px",
                label: "FormFields_label__ZTiq9",
                buttonGroup: "FormFields_buttonGroup__s2mPk",
                inCol: "FormFields_inCol__XNeth",
                textInput: "FormFields_textInput__2laRS",
                phoneInput: "FormFields_phoneInput__mPY4T",
                emailInput: "FormFields_emailInput__PtXV9",
                uploadInput: "FormFields_uploadInput__e_WsU",
                textAreaInput: "FormFields_textAreaInput__A19XB",
                selectToggle: "FormFields_selectToggle__5kHfe",
                error: "FormFields_error__my92q",
                select: "FormFields_select__lnhlv",
                selectList: "FormFields_selectList__nnJY8",
                consent: "FormFields_consent__Q7j90",
                checkbox: "FormFields_checkbox__nF_S7",
                checkmark: "FormFields_checkmark__pnVEt",
                errorMessage: "FormFields_errorMessage__NOFWl",
                enter: "FormFields_enter__MtIbJ"
            }
        },
        90497: function(e) {
            e.exports = {
                block: "Layout_block__n_p_7",
                "page-gray": "Layout_page-gray__27gqO",
                darkScheme: "Layout_darkScheme__y8FAo"
            }
        },
        96337: function(e) {
            e.exports = {
                block: "NewsItem_block__UEmDK",
                picture: "NewsItem_picture__v4E8m",
                link: "NewsItem_link__pJE3n",
                content: "NewsItem_content__3JMAc",
                meta: "NewsItem_meta__XXC5a",
                bottom: "NewsItem_bottom__hOQHd"
            }
        },
        60164: function(e) {
            e.exports = {
                block: "ReviewWidget_block__eBBwG",
                bottom: "ReviewWidget_bottom__B6Mcp"
            }
        },
        50431: function(e) {
            e.exports = {
                nav: "SecondaryNav_nav__kURRk"
            }
        },
        89594: function(e) {
            e.exports = {
                social: "Social_social__xhgkb",
                label: "Social_label__iQYsX"
            }
        },
        88986: function(e) {
            e.exports = {
                wrapper: "Wrapper_wrapper__JTEHd",
                wrappersmall: "Wrapper_wrappersmall__cV_ts"
            }
        }
    }
]);