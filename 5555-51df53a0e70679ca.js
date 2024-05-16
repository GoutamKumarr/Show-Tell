(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [5555], {
        66626: function(e, t, n) {
            "use strict";
            n.d(t, {
                Z: function() {
                    return T
                }
            });
            let l = function() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                    t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                return {
                    name: "category",
                    type: "relationship",
                    relationTo: e,
                    hasMany: !0,
                    required: t,
                    admin: {
                        position: "sidebar",
                        isSortable: !0
                    }
                }
            };

            function i(e) {
                return null !== e && "object" == typeof e && !Array.isArray(e)
            }
            let r = e => e.replace(/ /g, "-").replace(/[^\w-]+/g, "").replace("--", "-").toLowerCase();
            var o, a = e => t => {
                let {
                    operation: n,
                    value: l,
                    originalDoc: i,
                    data: o
                } = t;
                if ("string" == typeof l) return r(l);
                if ("create" === n) {
                    let t = (null == o ? void 0 : o[e]) || (null == i ? void 0 : i[e]);
                    if (t && "string" == typeof t) return r(t)
                }
                return l
            };
            let u = function() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "title",
                    t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                return function e(t, n) {
                    let l = { ...t
                    };
                    return i(t) && i(n) && Object.keys(n).forEach(r => {
                        i(n[r]) && r in t ? l[r] = e(t[r], n[r]) : Object.assign(l, {
                            [r]: n[r]
                        })
                    }), l
                }({
                    name: "slug",
                    label: "Slug",
                    type: "text",
                    index: !0,
                    localized: !0,
                    admin: {
                        position: "sidebar"
                    },
                    hooks: {
                        beforeValidate: [a(e)]
                    }
                }, t)
            };
            var d = n(91677);
            let c = () => ({
                    name: "unpublished",
                    type: "group",
                    fields: [{
                        type: "row",
                        fields: [{
                            name: "en",
                            type: "checkbox",
                            admin: {
                                width: "auto"
                            }
                        }, {
                            name: "de",
                            type: "checkbox",
                            admin: {
                                width: "auto"
                            }
                        }, {
                            name: "fr",
                            type: "checkbox",
                            admin: {
                                width: "auto"
                            }
                        }]
                    }],
                    admin: {
                        position: "sidebar"
                    }
                }),
                s = function(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
                    return (null == e ? void 0 : e.slug) && e.category ? "".concat(t, "/insights/").concat(e.category[0].value.slug, "/").concat(e.slug) : ""
                };
            u(), c(), l(["insight-categories"], !0), (0, d.slateEditor)({
                admin: {
                    elements: ["h1", "h2", "h3", "h4", "h5", "h6", "ul", "ol", "link", "blockquote", "upload"]
                }
            }), (0, d.slateEditor)({
                admin: {
                    elements: ["link"]
                }
            }), (0, d.slateEditor)({
                admin: {
                    elements: ["link"]
                }
            }), e => {
                let {
                    data: t,
                    index: n
                } = e;
                return (null == t ? void 0 : t.title) || null
            };
            let p = {
                fields: [{
                    name: "article",
                    type: "relationship",
                    relationTo: ["insights"],
                    required: !0
                }]
            };
            p.fields, p.fields;
            let m = {
                fields: [{
                    name: "title",
                    type: "text",
                    required: !0
                }, {
                    name: "titleSize",
                    type: "select",
                    options: ["Default", "Small"],
                    defaultValue: "Default"
                }, {
                    name: "ticker_text",
                    type: "checkbox",
                    label: "Ticker Text",
                    defaultValue: !1
                }, {
                    name: "description",
                    type: "textarea"
                }]
            };
            m.fields, (0, d.slateEditor)({
                admin: {
                    elements: ["link"]
                }
            }), (0, d.slateEditor)({
                admin: {
                    elements: ["link"]
                }
            }), (0, d.slateEditor)({
                admin: {
                    elements: ["link"]
                }
            }), (0, d.slateEditor)({
                admin: {
                    elements: ["h1", "h2", "h3", "h4", "h5", "h6", "ul", "ol", "link", "blockquote"]
                }
            }), e => {
                let {
                    data: t,
                    index: n
                } = e;
                return (null == t ? void 0 : t.label) || null
            };
            let h = {
                    slug: "base-page-content",
                    fields: [{
                        name: "subtitle",
                        type: "text"
                    }, {
                        name: "title",
                        type: "textarea",
                        required: !0
                    }, {
                        name: "content",
                        type: "richText",
                        required: !0,
                        editor: (0, d.slateEditor)({
                            admin: {
                                elements: ["h1", "h2", "h3", "h4", "h5", "h6", "ul", "ol", "link", "blockquote"]
                            }
                        })
                    }]
                },
                y = (h.fields, function(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
                    return (null == e ? void 0 : e.slug) ? (null == e ? void 0 : e.slug) == "homepage" ? "".concat(t) : "".concat(t, "/").concat(e.slug) : ""
                });
            u(), c(), o = ["insights", "contact-us"], m.fields, (e, t, n) => {
                let {
                    user: l
                } = n;
                return "base-page" == t.template
            };
            let g = function(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                return {
                    name: e,
                    type: "text",
                    required: t,
                    validate: e => !e || (null == e ? void 0 : e.includes("#")) || "".concat(e, " is not a valid hex color")
                }
            };
            g("backgroundColor"), (0, d.slateEditor)({
                admin: {
                    elements: ["link"]
                }
            }), g("textColor"), g("backgroundColor"), (0, d.slateEditor)({
                admin: {
                    elements: ["link"]
                }
            }), (e, t, n) => {
                let {
                    user: l
                } = n;
                return "Medium Editor" == t.contentType
            };
            let f = function(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
                return (null == e ? void 0 : e.slug) ? "".concat(t, "/case-study/").concat(e.slug) : ""
            };
            u(), c(), l(["project-categories"]), (0, d.slateEditor)({
                admin: {
                    elements: ["link"]
                }
            }), (0, d.slateEditor)({
                admin: {
                    elements: ["link"]
                }
            }), (0, d.slateEditor)({
                admin: {
                    elements: ["h1", "h2", "h3", "h4", "h5", "h6", "ul", "ol", "link", "blockquote", "upload"]
                }
            });
            let v = function(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
                return (null == e ? void 0 : e.slug) ? "".concat(t, "/sector/").concat(e.slug) : ""
            };
            u(), c(), l(["service-categories"]);
            var T = function(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "en",
                    n = "";
                return "services" == e.relationTo ? n = "".concat(v(e.value, t)) : "projects" == e.relationTo ? n = "".concat(f(e.value, t)) : "pages" == e.relationTo ? n = "".concat(y(e.value, t)) : "insights" == e.relationTo && (n = "".concat(s(e.value, t))), n && 0 != n.indexOf("/") && (n = "/".concat(n), "en" == t && (n = n.replace("/en", "")), n || (n = "/")), n
            }
        },
        24654: function() {}
    }
]);