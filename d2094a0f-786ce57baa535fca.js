"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [8700], {
        96391: function(e, t, r) {
            r.r(t), r.d(t, {
                DefaultElement: function() {
                    return ej
                },
                DefaultLeaf: function() {
                    return eN
                },
                DefaultPlaceholder: function() {
                    return th
                },
                Editable: function() {
                    return tf
                },
                ReactEditor: function() {
                    return ew
                },
                Slate: function() {
                    return tD
                },
                useEditor: function() {
                    return tO
                },
                useFocused: function() {
                    return tb
                },
                useReadOnly: function() {
                    return e_
                },
                useSelected: function() {
                    return eU
                },
                useSlate: function() {
                    return eH
                },
                useSlateSelection: function() {
                    return tS
                },
                useSlateSelector: function() {
                    return tC
                },
                useSlateStatic: function() {
                    return eM
                },
                useSlateWithV: function() {
                    return eY
                },
                withReact: function() {
                    return tN
                }
            });
            var a = r(6907),
                n = r.n(a),
                o = r(23279),
                i = r.n(o),
                s = r(62614),
                l = r.n(s),
                d = r(67294),
                c = r(94203),
                u = r(77493),
                f = r(58354),
                h = r(59619),
                v = r(73935);

            function g(e, t, r) {
                return t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r, e
            }

            function p(e, t) {
                if (null == e) return {};
                var r, a, n = function(e, t) {
                    if (null == e) return {};
                    var r, a, n = {},
                        o = Object.keys(e);
                    for (a = 0; a < o.length; a++) r = o[a], t.indexOf(r) >= 0 || (n[r] = e[r]);
                    return n
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    for (a = 0; a < o.length; a++) r = o[a], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r])
                }
                return n
            }
            var m = 0;
            class E {
                constructor() {
                    this.id = "".concat(m++)
                }
            }
            var w = new WeakMap,
                b = new WeakMap,
                x = new WeakMap,
                k = new WeakMap,
                C = new WeakMap,
                y = new WeakMap,
                D = new WeakMap,
                O = new WeakMap,
                S = new WeakMap,
                T = new WeakMap,
                F = new WeakMap,
                P = new WeakMap,
                R = new WeakMap,
                M = new WeakMap,
                B = new WeakMap,
                N = new WeakMap,
                L = new WeakMap,
                W = new WeakMap,
                j = new WeakMap,
                A = new WeakMap,
                I = new WeakMap,
                q = Symbol("placeholder"),
                U = Symbol("mark-placeholder"),
                z = globalThis.Text,
                V = e => e && e.ownerDocument && e.ownerDocument.defaultView || null,
                _ = e => H(e) && 8 === e.nodeType,
                K = e => H(e) && 1 === e.nodeType,
                H = e => {
                    var t = V(e);
                    return !!t && e instanceof t.Node
                },
                Y = e => {
                    var t = e && e.anchorNode && V(e.anchorNode);
                    return !!t && e instanceof t.Selection
                },
                X = e => H(e) && 3 === e.nodeType,
                $ = e => e.clipboardData && "" !== e.clipboardData.getData("text/plain") && 1 === e.clipboardData.types.length,
                J = e => {
                    var [t, r] = e;
                    if (K(t) && t.childNodes.length) {
                        var a = r === t.childNodes.length,
                            n = a ? r - 1 : r;
                        for ([t, n] = G(t, n, a ? "backward" : "forward"), a = n < r; K(t) && t.childNodes.length;) {
                            var o = a ? t.childNodes.length - 1 : 0;
                            t = Q(t, o, a ? "backward" : "forward")
                        }
                        r = a && null != t.textContent ? t.textContent.length : 0
                    }
                    return [t, r]
                },
                Z = e => {
                    for (var t = e && e.parentNode; t;) {
                        if ("[object ShadowRoot]" === t.toString()) return !0;
                        t = t.parentNode
                    }
                    return !1
                },
                G = (e, t, r) => {
                    for (var {
                            childNodes: a
                        } = e, n = a[t], o = t, i = !1, s = !1;
                        (_(n) || K(n) && 0 === n.childNodes.length || K(n) && "false" === n.getAttribute("contenteditable")) && (!i || !s);) {
                        if (o >= a.length) {
                            i = !0, o = t - 1, r = "backward";
                            continue
                        }
                        if (o < 0) {
                            s = !0, o = t + 1, r = "forward";
                            continue
                        }
                        n = a[o], t = o, o += "forward" === r ? 1 : -1
                    }
                    return [n, t]
                },
                Q = (e, t, r) => {
                    var [a] = G(e, t, r);
                    return a
                },
                ee = e => {
                    var t = "";
                    if (X(e) && e.nodeValue) return e.nodeValue;
                    if (K(e)) {
                        for (var r of Array.from(e.childNodes)) t += ee(r);
                        var a = getComputedStyle(e).getPropertyValue("display");
                        ("block" === a || "list" === a || "BR" === e.tagName) && (t += "\n")
                    }
                    return t
                },
                et = /data-slate-fragment="(.+?)"/m,
                er = e => {
                    var [, t] = e.getData("text/html").match(et) || [];
                    return t
                },
                ea = (e, t, r) => {
                    var {
                        target: a
                    } = t;
                    if (K(a) && a.matches('[contentEditable="false"]')) return !1;
                    var {
                        document: n
                    } = ew.getWindow(e);
                    if (n.contains(a)) return ew.hasDOMNode(e, a, {
                        editable: !0
                    });
                    var o = r.find(e => {
                        var {
                            addedNodes: t,
                            removedNodes: r
                        } = e;
                        for (var n of t)
                            if (n === a || n.contains(a)) return !0;
                        for (var o of r)
                            if (o === a || o.contains(a)) return !0
                    });
                    return !!o && o !== t && ea(e, o, r)
                },
                en = parseInt(d.version.split(".")[0], 10) >= 17,
                eo = "undefined" != typeof navigator && "undefined" != typeof window && /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream,
                ei = "undefined" != typeof navigator && /Mac OS X/.test(navigator.userAgent),
                es = "undefined" != typeof navigator && /Android/.test(navigator.userAgent),
                el = "undefined" != typeof navigator && /^(?!.*Seamonkey)(?=.*Firefox).*/i.test(navigator.userAgent),
                ed = "undefined" != typeof navigator && /Version\/[\d\.]+.*Safari/.test(navigator.userAgent),
                ec = "undefined" != typeof navigator && /Edge?\/(?:[0-6][0-9]|[0-7][0-8])(?:\.)/i.test(navigator.userAgent),
                eu = "undefined" != typeof navigator && /Chrome/i.test(navigator.userAgent),
                ef = "undefined" != typeof navigator && /Chrome?\/(?:[0-7][0-5]|[0-6][0-9])(?:\.)/i.test(navigator.userAgent),
                eh = es && "undefined" != typeof navigator && /Chrome?\/(?:[0-5]?\d)(?:\.)/i.test(navigator.userAgent),
                ev = "undefined" != typeof navigator && /^(?!.*Seamonkey)(?=.*Firefox\/(?:[0-7][0-9]|[0-8][0-6])(?:\.)).*/i.test(navigator.userAgent),
                eg = "undefined" != typeof navigator && /.*UCBrowser/.test(navigator.userAgent),
                ep = "undefined" != typeof navigator && /.*Wechat/.test(navigator.userAgent),
                em = !!("undefined" != typeof window && void 0 !== window.document && void 0 !== window.document.createElement),
                eE = (!ef || !eh) && !ec && "undefined" != typeof globalThis && globalThis.InputEvent && "function" == typeof globalThis.InputEvent.prototype.getTargetRanges,
                ew = {
                    isComposing: e => !!P.get(e),
                    getWindow(e) {
                        var t = x.get(e);
                        if (!t) throw Error("Unable to find a host window element for this editor");
                        return t
                    },
                    findKey(e, t) {
                        var r = O.get(t);
                        return r || (r = new E, O.set(t, r)), r
                    },
                    findPath(e, t) {
                        for (var r = [], a = t;;) {
                            var n = b.get(a);
                            if (null == n) {
                                if (u.Editor.isEditor(a)) return r;
                                break
                            }
                            var o = w.get(a);
                            if (null == o) break;
                            r.unshift(o), a = n
                        }
                        throw Error("Unable to find the path for Slate node: ".concat(u.Scrubber.stringify(t)))
                    },
                    findDocumentOrShadowRoot(e) {
                        var t = ew.toDOMNode(e, e),
                            r = t.getRootNode();
                        return (r instanceof Document || r instanceof ShadowRoot) && null != r.getSelection ? r : t.ownerDocument
                    },
                    isFocused: e => !!F.get(e),
                    isReadOnly: e => !!T.get(e),
                    blur(e) {
                        var t = ew.toDOMNode(e, e),
                            r = ew.findDocumentOrShadowRoot(e);
                        F.set(e, !1), r.activeElement === t && t.blur()
                    },
                    focus(e) {
                        var t = ew.toDOMNode(e, e),
                            r = ew.findDocumentOrShadowRoot(e);
                        F.set(e, !0), r.activeElement !== t && t.focus({
                            preventScroll: !0
                        })
                    },
                    deselect(e) {
                        var {
                            selection: t
                        } = e, r = ew.findDocumentOrShadowRoot(e).getSelection();
                        r && r.rangeCount > 0 && r.removeAllRanges(), t && u.Transforms.deselect(e)
                    },
                    hasDOMNode(e, t) {
                        var r, a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                            {
                                editable: n = !1
                            } = a,
                            o = ew.toDOMNode(e, e);
                        try {
                            r = K(t) ? t : t.parentElement
                        } catch (e) {
                            if (!e.message.includes('Permission denied to access property "nodeType"')) throw e
                        }
                        return !!r && r.closest("[data-slate-editor]") === o && (!n || !!r.isContentEditable || "boolean" == typeof r.isContentEditable && r.closest('[contenteditable="false"]') === o || !!r.getAttribute("data-slate-zero-width"))
                    },
                    insertData(e, t) {
                        e.insertData(t)
                    },
                    insertFragmentData: (e, t) => e.insertFragmentData(t),
                    insertTextData: (e, t) => e.insertTextData(t),
                    setFragmentData(e, t, r) {
                        e.setFragmentData(t, r)
                    },
                    toDOMNode(e, t) {
                        var r = S.get(e),
                            a = u.Editor.isEditor(t) ? k.get(e) : null == r ? void 0 : r.get(ew.findKey(e, t));
                        if (!a) throw Error("Cannot resolve a DOM node from Slate node: ".concat(u.Scrubber.stringify(t)));
                        return a
                    },
                    toDOMPoint(e, t) {
                        var [r] = u.Editor.node(e, t.path), a = ew.toDOMNode(e, r);
                        u.Editor.void(e, {
                            at: t
                        }) && (t = {
                            path: t.path,
                            offset: 0
                        });
                        for (var n = Array.from(a.querySelectorAll("[data-slate-string], [data-slate-zero-width]")), o = 0, i = 0; i < n.length; i++) {
                            var s = n[i],
                                l = s.childNodes[0];
                            if (null != l && null != l.textContent) {
                                var {
                                    length: d
                                } = l.textContent, c = s.getAttribute("data-slate-length"), f = o + (null == c ? d : parseInt(c, 10)), h = n[i + 1];
                                if (t.offset === f && null != h && h.hasAttribute("data-slate-mark-placeholder")) {
                                    var v, g, p = h.childNodes[0];
                                    v = [p instanceof z ? p : h, null !== (g = h.textContent) && void 0 !== g && g.startsWith("\uFEFF") ? 1 : 0];
                                    break
                                }
                                if (t.offset <= f) {
                                    v = [l, Math.min(d, Math.max(0, t.offset - o))];
                                    break
                                }
                                o = f
                            }
                        }
                        if (!v) throw Error("Cannot resolve a DOM point from Slate point: ".concat(u.Scrubber.stringify(t)));
                        return v
                    },
                    toDOMRange(e, t) {
                        var {
                            anchor: r,
                            focus: a
                        } = t, n = u.Range.isBackward(t), o = ew.toDOMPoint(e, r), i = u.Range.isCollapsed(t) ? o : ew.toDOMPoint(e, a), s = ew.getWindow(e).document.createRange(), [l, d] = n ? i : o, [c, f] = n ? o : i, h = !!(K(l) ? l : l.parentElement).getAttribute("data-slate-zero-width"), v = !!(K(c) ? c : c.parentElement).getAttribute("data-slate-zero-width");
                        return s.setStart(l, h ? 1 : d), s.setEnd(c, v ? 1 : f), s
                    },
                    toSlateNode(e, t) {
                        var r = K(t) ? t : t.parentElement;
                        r && !r.hasAttribute("data-slate-node") && (r = r.closest("[data-slate-node]"));
                        var a = r ? y.get(r) : null;
                        if (!a) throw Error("Cannot resolve a Slate node from DOM node: ".concat(r));
                        return a
                    },
                    findEventRange(e, t) {
                        "nativeEvent" in t && (t = t.nativeEvent);
                        var r, {
                            clientX: a,
                            clientY: n,
                            target: o
                        } = t;
                        if (null == a || null == n) throw Error("Cannot resolve a Slate range from a DOM event: ".concat(t));
                        var i = ew.toSlateNode(e, t.target),
                            s = ew.findPath(e, i);
                        if (u.Element.isElement(i) && u.Editor.isVoid(e, i)) {
                            var l = o.getBoundingClientRect(),
                                d = e.isInline(i) ? a - l.left < l.left + l.width - a : n - l.top < l.top + l.height - n,
                                c = u.Editor.point(e, s, {
                                    edge: d ? "start" : "end"
                                }),
                                f = d ? u.Editor.before(e, c) : u.Editor.after(e, c);
                            if (f) return u.Editor.range(e, f)
                        }
                        var {
                            document: h
                        } = ew.getWindow(e);
                        if (h.caretRangeFromPoint) r = h.caretRangeFromPoint(a, n);
                        else {
                            var v = h.caretPositionFromPoint(a, n);
                            v && ((r = h.createRange()).setStart(v.offsetNode, v.offset), r.setEnd(v.offsetNode, v.offset))
                        }
                        if (!r) throw Error("Cannot resolve a Slate range from a DOM event: ".concat(t));
                        return ew.toSlateRange(e, r, {
                            exactMatch: !1,
                            suppressThrow: !1
                        })
                    },
                    toSlatePoint(e, t, r) {
                        var {
                            exactMatch: a,
                            suppressThrow: n
                        } = r, [o, i] = a ? t : J(t), s = o.parentNode, l = null, d = 0;
                        if (s) {
                            var c, f, h = ew.toDOMNode(e, e),
                                v = s.closest('[data-slate-void="true"]'),
                                g = v && h.contains(v) ? v : null,
                                p = s.closest("[data-slate-leaf]"),
                                m = null;
                            if (p) {
                                if (l = p.closest('[data-slate-node="text"]')) {
                                    var E = ew.getWindow(e).document.createRange();
                                    E.setStart(l, 0), E.setEnd(o, i);
                                    var w = E.cloneContents();
                                    [...Array.prototype.slice.call(w.querySelectorAll("[data-slate-zero-width]")), ...Array.prototype.slice.call(w.querySelectorAll("[contenteditable=false]"))].forEach(e => {
                                        if (es && !a && e.hasAttribute("data-slate-zero-width") && e.textContent.length > 0 && "\uFEFF" !== e.textContext) {
                                            e.textContent.startsWith("\uFEFF") && (e.textContent = e.textContent.slice(1));
                                            return
                                        }
                                        e.parentNode.removeChild(e)
                                    }), d = w.textContent.length, m = l
                                }
                            } else if (g) {
                                for (var b = g.querySelectorAll("[data-slate-leaf]"), x = 0; x < b.length; x++) {
                                    var k = b[x];
                                    if (ew.hasDOMNode(e, k)) {
                                        p = k;
                                        break
                                    }
                                }
                                p ? (l = p.closest('[data-slate-node="text"]'), d = (m = p).textContent.length, m.querySelectorAll("[data-slate-zero-width]").forEach(e => {
                                    d -= e.textContent.length
                                })) : d = 1
                            }
                            m && d === m.textContent.length && es && "z" === m.getAttribute("data-slate-zero-width") && null !== (c = m.textContent) && void 0 !== c && c.startsWith("\uFEFF") && (s.hasAttribute("data-slate-zero-width") || el && null !== (f = m.textContent) && void 0 !== f && f.endsWith("\n\n")) && d--
                        }
                        if (es && !l && !a) {
                            var C = s.hasAttribute("data-slate-node") ? s : s.closest("[data-slate-node]");
                            if (C && ew.hasDOMNode(e, C, {
                                    editable: !0
                                })) {
                                var y = ew.toSlateNode(e, C),
                                    {
                                        path: D,
                                        offset: O
                                    } = u.Editor.start(e, ew.findPath(e, y));
                                return C.querySelector("[data-slate-leaf]") || (O = i), {
                                    path: D,
                                    offset: O
                                }
                            }
                        }
                        if (!l) {
                            if (n) return null;
                            throw Error("Cannot resolve a Slate point from DOM point: ".concat(t))
                        }
                        var S = ew.toSlateNode(e, l);
                        return {
                            path: ew.findPath(e, S),
                            offset: d
                        }
                    },
                    toSlateRange(e, t, r) {
                        var a, n, o, i, s, l, {
                            exactMatch: d,
                            suppressThrow: c
                        } = r;
                        if ((Y(t) ? t.anchorNode : t.startContainer) && (Y(t) ? (a = t.anchorNode, n = t.anchorOffset, o = t.focusNode, i = t.focusOffset, s = eu && Z(a) ? t.anchorNode === t.focusNode && t.anchorOffset === t.focusOffset : t.isCollapsed) : (a = t.startContainer, n = t.startOffset, o = t.endContainer, i = t.endOffset, s = t.collapsed)), null == a || null == o || null == n || null == i) throw Error("Cannot resolve a Slate range from DOM range: ".concat(t));
                        "getAttribute" in o && "false" === o.getAttribute("contenteditable") && (o = a, i = (null === (l = a.textContent) || void 0 === l ? void 0 : l.length) || 0);
                        var f = ew.toSlatePoint(e, [a, n], {
                            exactMatch: d,
                            suppressThrow: c
                        });
                        if (!f) return null;
                        var h = s ? f : ew.toSlatePoint(e, [o, i], {
                            exactMatch: d,
                            suppressThrow: c
                        });
                        if (!h) return null;
                        if (el && !s && a !== o) {
                            var v = u.Editor.isEnd(e, f, f.path),
                                g = u.Editor.isStart(e, h, h.path);
                            v && (f = u.Editor.after(e, f) || f), g && (h = u.Editor.before(e, h) || h)
                        }
                        var p = {
                            anchor: f,
                            focus: h
                        };
                        return u.Range.isExpanded(p) && u.Range.isForward(p) && K(o) && u.Editor.void(e, {
                            at: p.focus,
                            mode: "highest"
                        }) && (p = u.Editor.unhangRange(e, p, {
                            voids: !0
                        })), p
                    },
                    hasRange(e, t) {
                        var {
                            anchor: r,
                            focus: a
                        } = t;
                        return u.Editor.hasPath(e, r.path) && u.Editor.hasPath(e, a.path)
                    },
                    hasTarget: (e, t) => H(t) && ew.hasDOMNode(e, t),
                    hasEditableTarget: (e, t) => H(t) && ew.hasDOMNode(e, t, {
                        editable: !0
                    }),
                    hasSelectableTarget: (e, t) => ew.hasEditableTarget(e, t) || ew.isTargetInsideNonReadonlyVoid(e, t),
                    isTargetInsideNonReadonlyVoid(e, t) {
                        if (T.get(e)) return !1;
                        var r = ew.hasTarget(e, t) && ew.toSlateNode(e, t);
                        return u.Element.isElement(r) && u.Editor.isVoid(e, r)
                    },
                    androidScheduleFlush(e) {
                        var t;
                        null === (t = B.get(e)) || void 0 === t || t()
                    },
                    androidPendingDiffs: e => W.get(e)
                },
                eb = ["anchor", "focus"],
                ex = ["anchor", "focus"],
                ek = (e, t) => Object.keys(e).length === Object.keys(t).length && Object.keys(e).every(r => t.hasOwnProperty(r) && e[r] === t[r]),
                eC = (e, t) => {
                    var r = p(e, eb),
                        a = p(t, ex);
                    return e[q] === t[q] && ek(r, a)
                },
                ey = (e, t) => {
                    if (e.length !== t.length) return !1;
                    for (var r = 0; r < e.length; r++) {
                        var a = e[r],
                            n = t[r];
                        if (!u.Range.equals(a, n) || !eC(a, n)) return !1
                    }
                    return !0
                },
                eD = (e, t) => {
                    if (e.length !== t.length) return !1;
                    for (var r = 0; r < e.length; r++) {
                        var a = e[r],
                            n = t[r];
                        if (a.anchor.offset !== n.anchor.offset || a.focus.offset !== n.focus.offset || !eC(a, n)) return !1
                    }
                    return !0
                },
                eO = em ? d.useLayoutEffect : d.useEffect,
                eS = e => {
                    var {
                        isLast: t,
                        leaf: r,
                        parent: a,
                        text: n
                    } = e, o = eM(), i = ew.findPath(o, n), s = u.Path.parent(i), l = !0 === r[U];
                    return o.isVoid(a) ? d.createElement(eP, {
                        length: u.Node.string(a).length
                    }) : "" !== r.text || a.children[a.children.length - 1] !== n || o.isInline(a) || "" !== u.Editor.string(o, s) ? "" === r.text ? d.createElement(eP, {
                        isMarkPlaceholder: l
                    }) : t && "\n" === r.text.slice(-1) ? d.createElement(eT, {
                        isTrailing: !0,
                        text: r.text
                    }) : d.createElement(eT, {
                        text: r.text
                    }) : d.createElement(eP, {
                        isLineBreak: !0,
                        isMarkPlaceholder: l
                    })
                },
                eT = e => {
                    var {
                        text: t,
                        isTrailing: r = !1
                    } = e, a = (0, d.useRef)(null), n = () => "".concat(null != t ? t : "").concat(r ? "\n" : ""), [o] = (0, d.useState)(n);
                    return eO(() => {
                        var e = n();
                        a.current && a.current.textContent !== e && (a.current.textContent = e)
                    }), d.createElement(eF, {
                        ref: a
                    }, o)
                },
                eF = (0, d.memo)((0, d.forwardRef)((e, t) => d.createElement("span", {
                    "data-slate-string": !0,
                    ref: t
                }, e.children))),
                eP = e => {
                    var {
                        length: t = 0,
                        isLineBreak: r = !1,
                        isMarkPlaceholder: a = !1
                    } = e, n = {
                        "data-slate-zero-width": r ? "n" : "z",
                        "data-slate-length": t
                    };
                    return a && (n["data-slate-mark-placeholder"] = !0), d.createElement("span", Object.assign({}, n), es && r ? null : "\uFEFF", r ? d.createElement("br", null) : null)
                },
                eR = (0, d.createContext)(null),
                eM = () => {
                    var e = (0, d.useContext)(eR);
                    if (!e) throw Error("The `useSlateStatic` hook must be used inside the <Slate> component's context.");
                    return e
                },
                eB = d.memo(e => {
                    var {
                        leaf: t,
                        isLast: r,
                        text: a,
                        parent: n,
                        renderPlaceholder: o,
                        renderLeaf: i = e => d.createElement(eN, Object.assign({}, e))
                    } = e, s = (0, d.useRef)(null), l = (0, d.useRef)(null), c = eM(), u = (0, d.useRef)(null);
                    (0, d.useEffect)(() => () => {
                        u.current && u.current.disconnect()
                    }, []), (0, d.useEffect)(() => {
                        var e = null == l ? void 0 : l.current;
                        if (e ? C.set(c, e) : C.delete(c), u.current) u.current.disconnect(), e && u.current.observe(e);
                        else if (e) {
                            var t = window.ResizeObserver || f.do;
                            u.current = new t(() => {
                                var e = I.get(c);
                                null == e || e()
                            }), u.current.observe(e)
                        }
                        if (!e && s.current) {
                            var r = I.get(c);
                            null == r || r()
                        }
                        return s.current = l.current, () => {
                            C.delete(c)
                        }
                    }, [l, t, c]);
                    var h = d.createElement(eS, {
                        isLast: r,
                        leaf: t,
                        parent: n,
                        text: a
                    });
                    if (t[q]) {
                        var v = {
                            children: t.placeholder,
                            attributes: {
                                "data-slate-placeholder": !0,
                                style: {
                                    position: "absolute",
                                    pointerEvents: "none",
                                    width: "100%",
                                    maxWidth: "100%",
                                    display: "block",
                                    opacity: "0.333",
                                    userSelect: "none",
                                    textDecoration: "none"
                                },
                                contentEditable: !1,
                                ref: l
                            }
                        };
                        h = d.createElement(d.Fragment, null, o(v), h)
                    }
                    return i({
                        attributes: {
                            "data-slate-leaf": !0
                        },
                        children: h,
                        leaf: t,
                        text: a
                    })
                }, (e, t) => t.parent === e.parent && t.isLast === e.isLast && t.renderLeaf === e.renderLeaf && t.renderPlaceholder === e.renderPlaceholder && t.text === e.text && u.Text.equals(t.leaf, e.leaf) && t.leaf[q] === e.leaf[q]),
                eN = e => {
                    var {
                        attributes: t,
                        children: r
                    } = e;
                    return d.createElement("span", Object.assign({}, t), r)
                },
                eL = d.memo(e => {
                    for (var {
                            decorations: t,
                            isLast: r,
                            parent: a,
                            renderPlaceholder: n,
                            renderLeaf: o,
                            text: i
                        } = e, s = eM(), l = (0, d.useRef)(null), c = u.Text.decorations(i, t), f = ew.findKey(s, i), h = [], v = 0; v < c.length; v++) {
                        var g = c[v];
                        h.push(d.createElement(eB, {
                            isLast: r && v === c.length - 1,
                            key: "".concat(f.id, "-").concat(v),
                            renderPlaceholder: n,
                            leaf: g,
                            text: i,
                            parent: a,
                            renderLeaf: o
                        }))
                    }
                    var p = (0, d.useCallback)(e => {
                        var t = S.get(s);
                        e ? (null == t || t.set(f, e), D.set(i, e), y.set(e, i)) : (null == t || t.delete(f), D.delete(i), l.current && y.delete(l.current)), l.current = e
                    }, [l, s, f, i]);
                    return d.createElement("span", {
                        "data-slate-node": "text",
                        ref: p
                    }, h)
                }, (e, t) => t.parent === e.parent && t.isLast === e.isLast && t.renderLeaf === e.renderLeaf && t.renderPlaceholder === e.renderPlaceholder && t.text === e.text && eD(t.decorations, e.decorations)),
                eW = d.memo(e => {
                    var {
                        decorations: t,
                        element: r,
                        renderElement: a = e => d.createElement(ej, Object.assign({}, e)),
                        renderPlaceholder: o,
                        renderLeaf: i,
                        selection: s
                    } = e, l = eM(), c = e_(), f = l.isInline(r), h = ew.findKey(l, r), v = (0, d.useCallback)(e => {
                        var t = S.get(l);
                        e ? (null == t || t.set(h, e), D.set(r, e), y.set(e, r)) : (null == t || t.delete(h), D.delete(r))
                    }, [l, h, r]), g = ez({
                        decorations: t,
                        node: r,
                        renderElement: a,
                        renderPlaceholder: o,
                        renderLeaf: i,
                        selection: s
                    }), p = {
                        "data-slate-node": "element",
                        ref: v
                    };
                    if (f && (p["data-slate-inline"] = !0), !f && u.Editor.hasInlines(l, r)) {
                        var m = u.Node.string(r),
                            E = n()(m);
                        "rtl" === E && (p.dir = E)
                    }
                    if (u.Editor.isVoid(l, r)) {
                        p["data-slate-void"] = !0, !c && f && (p.contentEditable = !1);
                        var [
                            [x]
                        ] = u.Node.texts(r);
                        g = d.createElement(f ? "span" : "div", {
                            "data-slate-spacer": !0,
                            style: {
                                height: "0",
                                color: "transparent",
                                outline: "none",
                                position: "absolute"
                            }
                        }, d.createElement(eL, {
                            renderPlaceholder: o,
                            decorations: [],
                            isLast: !1,
                            parent: r,
                            text: x
                        })), w.set(x, 0), b.set(x, r)
                    }
                    return a({
                        attributes: p,
                        children: g,
                        element: r
                    })
                }, (e, t) => e.element === t.element && e.renderElement === t.renderElement && e.renderLeaf === t.renderLeaf && e.renderPlaceholder === t.renderPlaceholder && ey(e.decorations, t.decorations) && (e.selection === t.selection || !!e.selection && !!t.selection && u.Range.equals(e.selection, t.selection))),
                ej = e => {
                    var {
                        attributes: t,
                        children: r,
                        element: a
                    } = e, n = eM().isInline(a) ? "span" : "div";
                    return d.createElement(n, Object.assign({}, t, {
                        style: {
                            position: "relative"
                        }
                    }), r)
                },
                eA = (0, d.createContext)(() => []),
                eI = () => (0, d.useContext)(eA),
                eq = (0, d.createContext)(!1),
                eU = () => (0, d.useContext)(eq),
                ez = e => {
                    for (var {
                            decorations: t,
                            node: r,
                            renderElement: a,
                            renderPlaceholder: n,
                            renderLeaf: o,
                            selection: i
                        } = e, s = eI(), l = eM(), c = ew.findPath(l, r), f = [], h = u.Element.isElement(r) && !l.isInline(r) && u.Editor.hasInlines(l, r), v = 0; v < r.children.length; v++) {
                        var g = c.concat(v),
                            p = r.children[v],
                            m = ew.findKey(l, p),
                            E = u.Editor.range(l, g),
                            x = i && u.Range.intersection(E, i),
                            k = s([p, g]);
                        for (var C of t) {
                            var y = u.Range.intersection(C, E);
                            y && k.push(y)
                        }
                        u.Element.isElement(p) ? f.push(d.createElement(eq.Provider, {
                            key: "provider-".concat(m.id),
                            value: !!x
                        }, d.createElement(eW, {
                            decorations: k,
                            element: p,
                            key: m.id,
                            renderElement: a,
                            renderPlaceholder: n,
                            renderLeaf: o,
                            selection: x
                        }))) : f.push(d.createElement(eL, {
                            decorations: k,
                            key: m.id,
                            isLast: h && v === r.children.length - 1,
                            parent: r,
                            renderPlaceholder: n,
                            renderLeaf: o,
                            text: p
                        })), w.set(p, v), b.set(p, r)
                    }
                    return f
                },
                eV = (0, d.createContext)(!1),
                e_ = () => (0, d.useContext)(eV),
                eK = (0, d.createContext)(null),
                eH = () => {
                    var e = (0, d.useContext)(eK);
                    if (!e) throw Error("The `useSlate` hook must be used inside the <Slate> component's context.");
                    var {
                        editor: t
                    } = e;
                    return t
                },
                eY = () => {
                    var e = (0, d.useContext)(eK);
                    if (!e) throw Error("The `useSlate` hook must be used inside the <Slate> component's context.");
                    return e
                },
                eX = {
                    bold: "mod+b",
                    compose: ["down", "left", "right", "up", "backspace", "enter"],
                    moveBackward: "left",
                    moveForward: "right",
                    moveWordBackward: "ctrl+left",
                    moveWordForward: "ctrl+right",
                    deleteBackward: "shift?+backspace",
                    deleteForward: "shift?+delete",
                    extendBackward: "shift+left",
                    extendForward: "shift+right",
                    italic: "mod+i",
                    insertSoftBreak: "shift+enter",
                    splitBlock: "enter",
                    undo: "mod+z"
                },
                e$ = {
                    moveLineBackward: "opt+up",
                    moveLineForward: "opt+down",
                    moveWordBackward: "opt+left",
                    moveWordForward: "opt+right",
                    deleteBackward: ["ctrl+backspace", "ctrl+h"],
                    deleteForward: ["ctrl+delete", "ctrl+d"],
                    deleteLineBackward: "cmd+shift?+backspace",
                    deleteLineForward: ["cmd+shift?+delete", "ctrl+k"],
                    deleteWordBackward: "opt+shift?+backspace",
                    deleteWordForward: "opt+shift?+delete",
                    extendLineBackward: "opt+shift+up",
                    extendLineForward: "opt+shift+down",
                    redo: "cmd+shift+z",
                    transposeCharacter: "ctrl+t"
                },
                eJ = {
                    deleteWordBackward: "ctrl+shift?+backspace",
                    deleteWordForward: "ctrl+shift?+delete",
                    redo: ["ctrl+y", "ctrl+shift+z"]
                },
                eZ = e => {
                    var t = eX[e],
                        r = e$[e],
                        a = eJ[e],
                        n = t && (0, h.TB)(t),
                        o = r && (0, h.TB)(r),
                        i = a && (0, h.TB)(a);
                    return e => !!(n && n(e) || ei && o && o(e) || !ei && i && i(e))
                },
                eG = {
                    isBold: eZ("bold"),
                    isCompose: eZ("compose"),
                    isMoveBackward: eZ("moveBackward"),
                    isMoveForward: eZ("moveForward"),
                    isDeleteBackward: eZ("deleteBackward"),
                    isDeleteForward: eZ("deleteForward"),
                    isDeleteLineBackward: eZ("deleteLineBackward"),
                    isDeleteLineForward: eZ("deleteLineForward"),
                    isDeleteWordBackward: eZ("deleteWordBackward"),
                    isDeleteWordForward: eZ("deleteWordForward"),
                    isExtendBackward: eZ("extendBackward"),
                    isExtendForward: eZ("extendForward"),
                    isExtendLineBackward: eZ("extendLineBackward"),
                    isExtendLineForward: eZ("extendLineForward"),
                    isItalic: eZ("italic"),
                    isMoveLineBackward: eZ("moveLineBackward"),
                    isMoveLineForward: eZ("moveLineForward"),
                    isMoveWordBackward: eZ("moveWordBackward"),
                    isMoveWordForward: eZ("moveWordForward"),
                    isRedo: eZ("redo"),
                    isSoftBreak: eZ("insertSoftBreak"),
                    isSplitBlock: eZ("splitBlock"),
                    isTransposeCharacter: eZ("transposeCharacter"),
                    isUndo: eZ("undo")
                },
                eQ = (e, t) => {
                    var r = [],
                        a = () => {
                            r = []
                        };
                    return {
                        registerMutations: a => {
                            if (t.current) {
                                var n = a.filter(t => ea(e, t, a));
                                r.push(...n)
                            }
                        },
                        restoreDOM: function() {
                            r.length > 0 && (r.reverse().forEach(e => {
                                "characterData" !== e.type && (e.removedNodes.forEach(t => {
                                    e.target.insertBefore(t, e.nextSibling)
                                }), e.addedNodes.forEach(t => {
                                    e.target.removeChild(t)
                                }))
                            }), a())
                        },
                        clear: a
                    }
                },
                e0 = {
                    subtree: !0,
                    childList: !0,
                    characterData: !0,
                    characterDataOldValue: !0
                };
            class e1 extends d.Component {
                constructor() {
                    super(...arguments), this.context = null, this.manager = null, this.mutationObserver = null
                }
                observe() {
                    var e, {
                        node: t
                    } = this.props;
                    if (!t.current) throw Error("Failed to attach MutationObserver, `node` is undefined");
                    null === (e = this.mutationObserver) || void 0 === e || e.observe(t.current, e0)
                }
                componentDidMount() {
                    var {
                        receivedUserInput: e
                    } = this.props, t = this.context;
                    this.manager = eQ(t, e), this.mutationObserver = new MutationObserver(this.manager.registerMutations), this.observe()
                }
                getSnapshotBeforeUpdate() {
                    var e, t, r, a, n = null === (e = this.mutationObserver) || void 0 === e ? void 0 : e.takeRecords();
                    return null != n && n.length && (null === (a = this.manager) || void 0 === a || a.registerMutations(n)), null === (t = this.mutationObserver) || void 0 === t || t.disconnect(), null === (r = this.manager) || void 0 === r || r.restoreDOM(), null
                }
                componentDidUpdate() {
                    var e;
                    null === (e = this.manager) || void 0 === e || e.clear(), this.observe()
                }
                componentWillUnmount() {
                    var e;
                    null === (e = this.mutationObserver) || void 0 === e || e.disconnect()
                }
                render() {
                    return this.props.children
                }
            }
            e1.contextType = eR;
            var e2 = es ? e1 : e => {
                var {
                    children: t
                } = e;
                return d.createElement(d.Fragment, null, t)
            };

            function e9(e) {
                for (var t = arguments.length, r = Array(t > 1 ? t - 1 : 0), a = 1; a < t; a++) r[a - 1] = arguments[a];
                return r.reduce((e, t) => e.slice(0, t.start) + t.text + e.slice(t.end), e)
            }

            function e3(e, t) {
                var {
                    start: r,
                    end: a,
                    text: n
                } = t, o = e.slice(r, a), i = function(e, t) {
                    for (var r = Math.min(e.length, t.length), a = 0; a < r; a++)
                        if (e.charAt(a) !== t.charAt(a)) return a;
                    return r
                }(o, n), s = Math.min(o.length - i, n.length - i), l = function(e, t, r) {
                    for (var a = Math.min(e.length, t.length, r), n = 0; n < a; n++)
                        if (e.charAt(e.length - n - 1) !== t.charAt(t.length - n - 1)) return n;
                    return a
                }(o, n, s), d = {
                    start: r + i,
                    end: a - l,
                    text: n.slice(i, n.length - l)
                };
                return d.start === d.end && 0 === d.text.length ? null : d
            }

            function e7(e, t) {
                var {
                    path: r,
                    offset: a
                } = t;
                if (!u.Editor.hasPath(e, r)) return null;
                var n = u.Node.get(e, r);
                if (!u.Text.isText(n)) return null;
                var o = u.Editor.above(e, {
                    match: t => u.Element.isElement(t) && u.Editor.isBlock(e, t),
                    at: r
                });
                if (!o) return null;
                for (; a > n.text.length;) {
                    var i = u.Editor.next(e, {
                        at: r,
                        match: u.Text.isText
                    });
                    if (!i || !u.Path.isDescendant(i[1], o[1])) return null;
                    a -= n.text.length, n = i[0], r = i[1]
                }
                return {
                    path: r,
                    offset: a
                }
            }

            function e6(e, t) {
                var r = e7(e, t.anchor);
                if (!r) return null;
                if (u.Range.isCollapsed(t)) return {
                    anchor: r,
                    focus: r
                };
                var a = e7(e, t.focus);
                return a ? {
                    anchor: r,
                    focus: a
                } : null
            }

            function e5(e, t, r) {
                var a = W.get(e),
                    n = null == a ? void 0 : a.find(e => {
                        var {
                            path: r
                        } = e;
                        return u.Path.equals(r, t.path)
                    });
                if (!n || t.offset <= n.diff.start) return u.Point.transform(t, r, {
                    affinity: "backward"
                });
                var {
                    diff: o
                } = n;
                if (t.offset <= o.start + o.text.length) {
                    var i = {
                            path: t.path,
                            offset: o.start
                        },
                        s = u.Point.transform(i, r, {
                            affinity: "backward"
                        });
                    return s ? {
                        path: s.path,
                        offset: s.offset + t.offset - o.start
                    } : null
                }
                var l = {
                        path: t.path,
                        offset: t.offset - o.text.length + o.end - o.start
                    },
                    d = u.Point.transform(l, r, {
                        affinity: "backward"
                    });
                return d ? "split_node" === r.type && u.Path.equals(r.path, t.path) && l.offset < r.position && o.start < r.position ? d : {
                    path: d.path,
                    offset: d.offset + o.text.length - o.end + o.start
                } : null
            }

            function e4(e, t, r) {
                var a = e5(e, t.anchor, r);
                if (!a) return null;
                if (u.Range.isCollapsed(t)) return {
                    anchor: a,
                    focus: a
                };
                var n = e5(e, t.focus, r);
                return n ? {
                    anchor: a,
                    focus: n
                } : null
            }

            function e8(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    t && (a = a.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), r.push.apply(r, a)
                }
                return r
            }

            function te(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? e8(Object(r), !0).forEach(function(t) {
                        g(e, t, r[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : e8(Object(r)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    })
                }
                return e
            }
            var tt = function() {},
                tr = e => (null == e ? void 0 : e.constructor.name) === "DataTransfer",
                ta = ["node"];

            function tn(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    t && (a = a.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), r.push.apply(r, a)
                }
                return r
            }
            var to = {
                    subtree: !0,
                    childList: !0,
                    characterData: !0
                },
                ti = es ? e => {
                    var t, {
                            node: r
                        } = e,
                        a = p(e, ta);
                    if (!es) return null;
                    var n = eM(),
                        o = (t = (0, d.useRef)(!1), (0, d.useEffect)(() => (t.current = !0, () => {
                            t.current = !1
                        }), []), t.current),
                        [i] = (0, d.useState)(() => (function(e) {
                            var {
                                editor: t,
                                scheduleOnDOMSelectionChange: r,
                                onDOMSelectionChange: a
                            } = e, n = !1, o = null, i = null, s = null, l = 0, d = !1, c = () => {
                                var e = A.get(t);
                                if (A.delete(t), e) {
                                    var {
                                        selection: r
                                    } = t, a = e6(t, e);
                                    !a || r && u.Range.equals(a, r) || u.Transforms.select(t, a)
                                }
                            }, f = () => {
                                var e = j.get(t);
                                if (j.delete(t), e) {
                                    if (e.at) {
                                        var r = u.Point.isPoint(e.at) ? e7(t, e.at) : e6(t, e.at);
                                        if (!r) return;
                                        var a = u.Editor.range(t, r);
                                        t.selection && u.Range.equals(t.selection, a) || u.Transforms.select(t, r)
                                    }
                                    e.run()
                                }
                            }, h = () => {
                                if (i && (clearTimeout(i), i = null), s && (clearTimeout(s), s = null), !E() && !m()) {
                                    c();
                                    return
                                }
                                n || (n = !0, setTimeout(() => n = !1)), m() && (n = "action");
                                var e = t.selection && u.Editor.rangeRef(t, t.selection, {
                                    affinity: "forward"
                                });
                                L.set(t, t.marks), tt("flush", j.get(t), W.get(t));
                                for (var o = E(); l = null === (h = W.get(t)) || void 0 === h ? void 0 : h[0];) {
                                    var l, h, v, g = N.get(t);
                                    void 0 !== g && (N.delete(t), t.marks = g), g && !1 === d && (d = null);
                                    var p = function(e) {
                                        var {
                                            path: t,
                                            diff: r
                                        } = e;
                                        return {
                                            anchor: {
                                                path: t,
                                                offset: r.start
                                            },
                                            focus: {
                                                path: t,
                                                offset: r.end
                                            }
                                        }
                                    }(l);
                                    t.selection && u.Range.equals(t.selection, p) || u.Transforms.select(t, p), l.diff.text ? u.Editor.insertText(t, l.diff.text) : u.Editor.deleteFragment(t), W.set(t, null === (v = W.get(t)) || void 0 === v ? void 0 : v.filter(e => {
                                        var {
                                            id: t
                                        } = e;
                                        return t !== l.id
                                    })), ! function(e, t) {
                                        var {
                                            path: r,
                                            diff: a
                                        } = t;
                                        if (!u.Editor.hasPath(e, r)) return !1;
                                        var n = u.Node.get(e, r);
                                        if (!u.Text.isText(n)) return !1;
                                        if (a.start !== n.text.length || 0 === a.text.length) return n.text.slice(a.start, a.start + a.text.length) === a.text;
                                        var o = u.Path.next(r);
                                        if (!u.Editor.hasPath(e, o)) return !1;
                                        var i = u.Node.get(e, o);
                                        return u.Text.isText(i) && i.text.startsWith(a.text)
                                    }(t, l) && (o = !1, j.delete(t), L.delete(t), n = "action", A.delete(t), r.cancel(), a.cancel(), null == e || e.unref())
                                }
                                var w = null == e ? void 0 : e.unref();
                                if (!w || A.get(t) || t.selection && u.Range.equals(w, t.selection) || u.Transforms.select(t, w), m()) {
                                    f();
                                    return
                                }
                                o && r(), r.flush(), a.flush(), c();
                                var b = L.get(t);
                                L.delete(t), void 0 !== b && (t.marks = b, t.onChange())
                            }, v = function() {
                                var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                                    r = C.get(t);
                                if (r) {
                                    if (E() || e) {
                                        r.style.display = "none";
                                        return
                                    }
                                    r.style.removeProperty("display")
                                }
                            }, g = (e, r) => {
                                var a, n, o, i, s, d, c, f, h = null !== (f = W.get(t)) && void 0 !== f ? f : [];
                                W.set(t, h);
                                var g = u.Node.leaf(t, e),
                                    p = h.findIndex(t => u.Path.equals(t.path, e));
                                if (p < 0) {
                                    e3(g.text, r) && h.push({
                                        path: e,
                                        diff: r,
                                        id: l++
                                    }), v();
                                    return
                                }
                                var m = (a = g.text, o = Math.min((n = h[p].diff).start, r.start), i = Math.max(0, Math.min(n.start + n.text.length, r.end) - r.start), s = e9(a, n, r), d = Math.max(r.start + r.text.length, n.start + n.text.length + (n.start + n.text.length > r.start ? r.text.length : 0) - i), c = s.slice(o, d), e3(a, {
                                    start: o,
                                    end: Math.max(n.end, r.end - n.text.length + (n.end - n.start)),
                                    text: c
                                }));
                                if (!m) {
                                    h.splice(p, 1), v();
                                    return
                                }
                                h[p] = te(te({}, h[p]), {}, {
                                    diff: m
                                })
                            }, p = function(e) {
                                var {
                                    at: n
                                } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                                d = !1, A.delete(t), r.cancel(), a.cancel(), m() && h(), j.set(t, {
                                    at: n,
                                    run: e
                                }), s = setTimeout(h)
                            }, m = () => !!j.get(t), E = () => {
                                var e;
                                return !!(null !== (e = W.get(t)) && void 0 !== e && e.length)
                            }, w = e => {
                                A.set(t, e), i && (clearTimeout(i), i = null);
                                var {
                                    selection: r
                                } = t;
                                if (e) {
                                    var a = !r || !u.Path.equals(r.anchor.path, e.anchor.path),
                                        n = !r || !u.Path.equals(r.anchor.path.slice(0, -1), e.anchor.path.slice(0, -1));
                                    (a && d || n) && (d = !1), (a || E()) && (i = setTimeout(h, 200))
                                }
                            }, b = () => {
                                m() || (s = setTimeout(h))
                            };
                            return {
                                flush: h,
                                scheduleFlush: b,
                                hasPendingDiffs: E,
                                hasPendingAction: m,
                                hasPendingChanges: () => m() || E(),
                                isFlushing: () => n,
                                handleUserSelect: w,
                                handleCompositionEnd: e => {
                                    o && clearTimeout(o), o = setTimeout(() => {
                                        P.set(t, !1), h()
                                    }, 25)
                                },
                                handleCompositionStart: e => {
                                    P.set(t, !0), o && (clearTimeout(o), o = null)
                                },
                                handleDOMBeforeInput: e => {
                                    i && (clearTimeout(i), i = null);
                                    var {
                                        inputType: r
                                    } = e, a = null, n = e.dataTransfer || e.data || void 0;
                                    !1 !== d && "insertText" !== r && "insertCompositionText" !== r && (d = !1);
                                    var [o] = e.getTargetRanges();
                                    o && (a = ew.toSlateRange(t, o, {
                                        exactMatch: !1,
                                        suppressThrow: !0
                                    }));
                                    var s = ew.getWindow(t).getSelection();
                                    if (!a && s && (o = s, a = ew.toSlateRange(t, s, {
                                            exactMatch: !1,
                                            suppressThrow: !0
                                        })), a = null !== (P = a) && void 0 !== P ? P : t.selection) {
                                        var l = !0;
                                        if (r.startsWith("delete")) {
                                            if (u.Range.isExpanded(a)) {
                                                var [c, f] = u.Range.edges(a);
                                                if (u.Node.leaf(t, c.path).text.length === c.offset && 0 === f.offset) {
                                                    var h = u.Editor.next(t, {
                                                        at: c.path,
                                                        match: u.Text.isText
                                                    });
                                                    h && u.Path.equals(h[1], f.path) && (a = {
                                                        anchor: f,
                                                        focus: f
                                                    })
                                                }
                                            }
                                            var v = r.endsWith("Backward") ? "backward" : "forward",
                                                [m, E] = u.Range.edges(a),
                                                [x, k] = u.Editor.leaf(t, m.path),
                                                C = {
                                                    text: "",
                                                    start: m.offset,
                                                    end: E.offset
                                                },
                                                y = W.get(t),
                                                D = null == y ? void 0 : y.find(e => u.Path.equals(e.path, k)),
                                                O = D ? [D.diff, C] : [C];
                                            if (0 === e9(x.text, ...O).length && (l = !1), u.Range.isExpanded(a)) {
                                                if (l && u.Path.equals(a.anchor.path, a.focus.path)) {
                                                    var S = {
                                                        path: a.anchor.path,
                                                        offset: m.offset
                                                    };
                                                    return w(u.Editor.range(t, S, S)), g(a.anchor.path, {
                                                        text: "",
                                                        end: E.offset,
                                                        start: m.offset
                                                    })
                                                }
                                                return p(() => u.Editor.deleteFragment(t, {
                                                    direction: v
                                                }), {
                                                    at: a
                                                })
                                            }
                                        }
                                        switch (r) {
                                            case "deleteByComposition":
                                            case "deleteByCut":
                                            case "deleteByDrag":
                                                return p(() => u.Editor.deleteFragment(t), {
                                                    at: a
                                                });
                                            case "deleteContent":
                                            case "deleteContentForward":
                                                var {
                                                    anchor: T
                                                } = a;
                                                if (l && u.Range.isCollapsed(a)) {
                                                    var F = u.Node.leaf(t, T.path);
                                                    if (T.offset < F.text.length) return g(T.path, {
                                                        text: "",
                                                        start: T.offset,
                                                        end: T.offset + 1
                                                    })
                                                }
                                                return p(() => u.Editor.deleteForward(t), {
                                                    at: a
                                                });
                                            case "deleteContentBackward":
                                                var P, R, {
                                                        anchor: M
                                                    } = a,
                                                    B = Y(o) ? o.isCollapsed : !!(null !== (R = o) && void 0 !== R && R.collapsed);
                                                if (l && B && u.Range.isCollapsed(a) && M.offset > 0) return g(M.path, {
                                                    text: "",
                                                    start: M.offset - 1,
                                                    end: M.offset
                                                });
                                                return p(() => u.Editor.deleteBackward(t), {
                                                    at: a
                                                });
                                            case "deleteEntireSoftLine":
                                                return p(() => {
                                                    u.Editor.deleteBackward(t, {
                                                        unit: "line"
                                                    }), u.Editor.deleteForward(t, {
                                                        unit: "line"
                                                    })
                                                }, {
                                                    at: a
                                                });
                                            case "deleteHardLineBackward":
                                                return p(() => u.Editor.deleteBackward(t, {
                                                    unit: "block"
                                                }), {
                                                    at: a
                                                });
                                            case "deleteSoftLineBackward":
                                                return p(() => u.Editor.deleteBackward(t, {
                                                    unit: "line"
                                                }), {
                                                    at: a
                                                });
                                            case "deleteHardLineForward":
                                                return p(() => u.Editor.deleteForward(t, {
                                                    unit: "block"
                                                }), {
                                                    at: a
                                                });
                                            case "deleteSoftLineForward":
                                                return p(() => u.Editor.deleteForward(t, {
                                                    unit: "line"
                                                }), {
                                                    at: a
                                                });
                                            case "deleteWordBackward":
                                                return p(() => u.Editor.deleteBackward(t, {
                                                    unit: "word"
                                                }), {
                                                    at: a
                                                });
                                            case "deleteWordForward":
                                                return p(() => u.Editor.deleteForward(t, {
                                                    unit: "word"
                                                }), {
                                                    at: a
                                                });
                                            case "insertLineBreak":
                                                return p(() => u.Editor.insertSoftBreak(t), {
                                                    at: a
                                                });
                                            case "insertParagraph":
                                                return p(() => u.Editor.insertBreak(t), {
                                                    at: a
                                                });
                                            case "insertCompositionText":
                                            case "deleteCompositionText":
                                            case "insertFromComposition":
                                            case "insertFromDrop":
                                            case "insertFromPaste":
                                            case "insertFromYank":
                                            case "insertReplacementText":
                                            case "insertText":
                                                if (tr(n)) return p(() => ew.insertData(t, n), {
                                                    at: a
                                                });
                                                var L = null != n ? n : "";
                                                if (N.get(t) && (L = L.replace("\uFEFF", "")), "insertText" === r && /.*\n.*\n$/.test(L) && (L = L.slice(0, -1)), L.includes("\n")) return p(() => {
                                                    var e = L.split("\n");
                                                    e.forEach((r, a) => {
                                                        r && u.Editor.insertText(t, r), a !== e.length - 1 && u.Editor.insertSoftBreak(t)
                                                    })
                                                }, {
                                                    at: a
                                                });
                                                if (u.Path.equals(a.anchor.path, a.focus.path)) {
                                                    var [j, A] = u.Range.edges(a), I = {
                                                        start: j.offset,
                                                        end: A.offset,
                                                        text: L
                                                    };
                                                    if (L && d && "insertCompositionText" === r) {
                                                        var q = d.start + d.text.search(/\S|$/);
                                                        I.start + I.text.search(/\S|$/) === q + 1 && I.end === d.start + d.text.length ? (I.start -= 1, d = null, b()) : d = !1
                                                    } else d = "insertText" === r && (null === d ? I : !!(d && u.Range.isCollapsed(a)) && d.end + d.text.length === j.offset && te(te({}, d), {}, {
                                                        text: d.text + L
                                                    }));
                                                    if (l) {
                                                        g(j.path, I);
                                                        return
                                                    }
                                                }
                                                return p(() => u.Editor.insertText(t, L), {
                                                    at: a
                                                })
                                        }
                                    }
                                },
                                handleKeyDown: e => {
                                    E() || (v(!0), setTimeout(v))
                                },
                                handleDomMutations: e => {
                                    if (!(E() || m()) && e.some(r => ea(t, r, e))) {
                                        var r;
                                        null === (r = I.get(t)) || void 0 === r || r()
                                    }
                                },
                                handleInput: () => {
                                    (m() || !E()) && h()
                                }
                            }
                        })(function(e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var r = null != arguments[t] ? arguments[t] : {};
                                t % 2 ? tn(Object(r), !0).forEach(function(t) {
                                    g(e, t, r[t])
                                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : tn(Object(r)).forEach(function(t) {
                                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                                })
                            }
                            return e
                        }({
                            editor: n
                        }, a)));
                    return ! function(e, t, r) {
                        var [a] = (0, d.useState)(() => new MutationObserver(t));
                        eO(() => {
                            a.takeRecords()
                        }), (0, d.useEffect)(() => {
                            if (!e.current) throw Error("Failed to attach MutationObserver, `node` is undefined");
                            return a.observe(e.current, r), () => a.disconnect()
                        }, [a, e, r])
                    }(r, i.handleDomMutations, to), B.set(n, i.scheduleFlush), o && i.flush(), i
                } : () => null,
                ts = ["autoFocus", "decorate", "onDOMBeforeInput", "placeholder", "readOnly", "renderElement", "renderLeaf", "renderPlaceholder", "scrollSelectionIntoView", "style", "as", "disableDefaultStyles"],
                tl = ["text"];

            function td(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    t && (a = a.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), r.push.apply(r, a)
                }
                return r
            }

            function tc(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? td(Object(r), !0).forEach(function(t) {
                        g(e, t, r[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : td(Object(r)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    })
                }
                return e
            }
            var tu = e => d.createElement(d.Fragment, null, ez(e)),
                tf = e => {
                    var t, r, a, o, s, c, f = (0, d.useCallback)(e => d.createElement(th, Object.assign({}, e)), []),
                        {
                            autoFocus: h,
                            decorate: v = tv,
                            onDOMBeforeInput: g,
                            placeholder: m,
                            readOnly: E = !1,
                            renderElement: w,
                            renderLeaf: b,
                            renderPlaceholder: O = f,
                            scrollSelectionIntoView: S = tg,
                            style: M = {},
                            as: B = "div",
                            disableDefaultStyles: W = !1
                        } = e,
                        j = p(e, ts),
                        A = eH(),
                        [z, _] = (0, d.useState)(!1),
                        Y = (0, d.useRef)(null),
                        X = (0, d.useRef)([]),
                        {
                            onUserInput: J,
                            receivedUserInput: Z
                        } = (t = eM(), r = (0, d.useRef)(!1), a = (0, d.useRef)(0), o = (0, d.useCallback)(() => {
                            if (!r.current) {
                                r.current = !0;
                                var e = ew.getWindow(t);
                                e.cancelAnimationFrame(a.current), a.current = e.requestAnimationFrame(() => {
                                    r.current = !1
                                })
                            }
                        }, [t]), (0, d.useEffect)(() => () => cancelAnimationFrame(a.current), []), {
                            receivedUserInput: r,
                            onUserInput: o
                        }),
                        [, G] = (0, d.useReducer)(e => e + 1, 0);
                    I.set(A, G), T.set(A, E);
                    var Q = (0, d.useMemo)(() => ({
                        isDraggingInternally: !1,
                        isUpdatingSelection: !1,
                        latestElement: null,
                        hasMarkPlaceholder: !1
                    }), []);
                    (0, d.useEffect)(() => {
                        Y.current && h && Y.current.focus()
                    }, [h]);
                    var ee = (0, d.useRef)(),
                        et = (0, d.useMemo)(() => l()(() => {
                            var e = ee.current;
                            if ((es || !ew.isComposing(A)) && (!Q.isUpdatingSelection || null != e && e.isFlushing()) && !Q.isDraggingInternally) {
                                var t = ew.findDocumentOrShadowRoot(A),
                                    {
                                        activeElement: r
                                    } = t,
                                    a = ew.toDOMNode(A, A),
                                    n = t.getSelection();
                                if (r === a ? (Q.latestElement = r, F.set(A, !0)) : F.delete(A), !n) return u.Transforms.deselect(A);
                                var {
                                    anchorNode: o,
                                    focusNode: i
                                } = n, s = ew.hasEditableTarget(A, o) || ew.isTargetInsideNonReadonlyVoid(A, o), l = ew.hasEditableTarget(A, i) || ew.isTargetInsideNonReadonlyVoid(A, i);
                                if (s && l) {
                                    var d = ew.toSlateRange(A, n, {
                                        exactMatch: !1,
                                        suppressThrow: !0
                                    });
                                    d && (ew.isComposing(A) || null != e && e.hasPendingChanges() || null != e && e.isFlushing() ? null == e || e.handleUserSelect(d) : u.Transforms.select(A, d))
                                }!E || s && l || u.Transforms.deselect(A)
                            }
                        }, 100), [A, E, Q]),
                        er = (0, d.useMemo)(() => i()(et, 0), [et]);
                    ee.current = ti({
                        node: Y,
                        onDOMSelectionChange: et,
                        scheduleOnDOMSelectionChange: er
                    }), eO(() => {
                        Y.current && (r = V(Y.current)) ? (x.set(A, r), k.set(A, Y.current), D.set(A, Y.current), y.set(Y.current, A)) : D.delete(A);
                        var e, t, r, {
                                selection: a
                            } = A,
                            n = ew.findDocumentOrShadowRoot(A).getSelection();
                        if (!(!n || !ew.isFocused(A) || null !== (e = ee.current) && void 0 !== e && e.hasPendingAction())) {
                            var o = e => {
                                    var t = "None" !== n.type;
                                    if (a || t) {
                                        var r = k.get(A),
                                            o = !1;
                                        if (r.contains(n.anchorNode) && r.contains(n.focusNode) && (o = !0), t && o && a && !e) {
                                            var i = ew.toSlateRange(A, n, {
                                                exactMatch: !0,
                                                suppressThrow: !0
                                            });
                                            if (i && u.Range.equals(i, a)) {
                                                if (!Q.hasMarkPlaceholder) return;
                                                var s, {
                                                    anchorNode: l
                                                } = n;
                                                if (null != l && null !== (s = l.parentElement) && void 0 !== s && s.hasAttribute("data-slate-mark-placeholder")) return
                                            }
                                        }
                                        if (a && !ew.hasRange(A, a)) {
                                            A.selection = ew.toSlateRange(A, n, {
                                                exactMatch: !1,
                                                suppressThrow: !0
                                            });
                                            return
                                        }
                                        Q.isUpdatingSelection = !0;
                                        var d = a && ew.toDOMRange(A, a);
                                        return d ? (u.Range.isBackward(a) ? n.setBaseAndExtent(d.endContainer, d.endOffset, d.startContainer, d.startOffset) : n.setBaseAndExtent(d.startContainer, d.startOffset, d.endContainer, d.endOffset), S(A, d)) : n.removeAllRanges(), d
                                    }
                                },
                                i = o(),
                                s = (null === (t = ee.current) || void 0 === t ? void 0 : t.isFlushing()) === "action";
                            if (!es || !s) {
                                setTimeout(() => {
                                    i && el && ew.toDOMNode(A, A).focus(), Q.isUpdatingSelection = !1
                                });
                                return
                            }
                            var l = null,
                                d = requestAnimationFrame(() => {
                                    if (s) {
                                        var e = e => {
                                            try {
                                                ew.toDOMNode(A, A).focus(), o(e)
                                            } catch (e) {}
                                        };
                                        e(), l = setTimeout(() => {
                                            e(!0), Q.isUpdatingSelection = !1
                                        })
                                    }
                                });
                            return () => {
                                cancelAnimationFrame(d), l && clearTimeout(l)
                            }
                        }
                    });
                    var ea = (0, d.useCallback)(e => {
                            if (J(), !E && ew.hasEditableTarget(A, e.target) && !tE(e, g)) {
                                if (ee.current) return ee.current.handleDOMBeforeInput(e);
                                er.flush(), et.flush();
                                var {
                                    selection: t
                                } = A, {
                                    inputType: r
                                } = e, a = e.dataTransfer || e.data || void 0, n = "insertCompositionText" === r || "deleteCompositionText" === r;
                                if (!(n && ew.isComposing(A))) {
                                    var o = !1;
                                    if ("insertText" === r && t && u.Range.isCollapsed(t) && e.data && 1 === e.data.length && /[a-z ]/i.test(e.data) && 0 !== t.anchor.offset) {
                                        o = !0, A.marks && (o = !1);
                                        var {
                                            anchor: i
                                        } = t, [s, l] = ew.toDOMPoint(A, i), d = null === (h = s.parentElement) || void 0 === h ? void 0 : h.closest("a"), c = ew.getWindow(A);
                                        if (o && d && ew.hasDOMNode(A, d)) {
                                            var f, h, v, p, m = null == c ? void 0 : c.document.createTreeWalker(d, NodeFilter.SHOW_TEXT).lastChild();
                                            m === s && (null === (p = m.textContent) || void 0 === p ? void 0 : p.length) === l && (o = !1)
                                        }
                                        if (o && s.parentElement && (null == c ? void 0 : null === (v = c.getComputedStyle(s.parentElement)) || void 0 === v ? void 0 : v.whiteSpace) === "pre") {
                                            var w = u.Editor.above(A, {
                                                at: i.path,
                                                match: e => u.Element.isElement(e) && u.Editor.isBlock(A, e)
                                            });
                                            w && u.Node.string(w[0]).includes("	") && (o = !1)
                                        }
                                    }
                                    if (!r.startsWith("delete") || r.startsWith("deleteBy")) {
                                        var [b] = e.getTargetRanges();
                                        if (b) {
                                            var x = ew.toSlateRange(A, b, {
                                                exactMatch: !1,
                                                suppressThrow: !1
                                            });
                                            if (!t || !u.Range.equals(t, x)) {
                                                o = !1;
                                                var k = !n && A.selection && u.Editor.rangeRef(A, A.selection);
                                                u.Transforms.select(A, x), k && R.set(A, k)
                                            }
                                        }
                                    }
                                    if (!n) {
                                        if (o || e.preventDefault(), t && u.Range.isExpanded(t) && r.startsWith("delete")) {
                                            var C = r.endsWith("Backward") ? "backward" : "forward";
                                            u.Editor.deleteFragment(A, {
                                                direction: C
                                            });
                                            return
                                        }
                                        switch (r) {
                                            case "deleteByComposition":
                                            case "deleteByCut":
                                            case "deleteByDrag":
                                                u.Editor.deleteFragment(A);
                                                break;
                                            case "deleteContent":
                                            case "deleteContentForward":
                                                u.Editor.deleteForward(A);
                                                break;
                                            case "deleteContentBackward":
                                                u.Editor.deleteBackward(A);
                                                break;
                                            case "deleteEntireSoftLine":
                                                u.Editor.deleteBackward(A, {
                                                    unit: "line"
                                                }), u.Editor.deleteForward(A, {
                                                    unit: "line"
                                                });
                                                break;
                                            case "deleteHardLineBackward":
                                                u.Editor.deleteBackward(A, {
                                                    unit: "block"
                                                });
                                                break;
                                            case "deleteSoftLineBackward":
                                                u.Editor.deleteBackward(A, {
                                                    unit: "line"
                                                });
                                                break;
                                            case "deleteHardLineForward":
                                                u.Editor.deleteForward(A, {
                                                    unit: "block"
                                                });
                                                break;
                                            case "deleteSoftLineForward":
                                                u.Editor.deleteForward(A, {
                                                    unit: "line"
                                                });
                                                break;
                                            case "deleteWordBackward":
                                                u.Editor.deleteBackward(A, {
                                                    unit: "word"
                                                });
                                                break;
                                            case "deleteWordForward":
                                                u.Editor.deleteForward(A, {
                                                    unit: "word"
                                                });
                                                break;
                                            case "insertLineBreak":
                                                u.Editor.insertSoftBreak(A);
                                                break;
                                            case "insertParagraph":
                                                u.Editor.insertBreak(A);
                                                break;
                                            case "insertFromComposition":
                                            case "insertFromDrop":
                                            case "insertFromPaste":
                                            case "insertFromYank":
                                            case "insertReplacementText":
                                            case "insertText":
                                                "insertFromComposition" === r && ew.isComposing(A) && (_(!1), P.set(A, !1)), (null == a ? void 0 : a.constructor.name) === "DataTransfer" ? ew.insertData(A, a) : "string" == typeof a && (o ? X.current.push(() => u.Editor.insertText(A, a)) : u.Editor.insertText(A, a))
                                        }
                                        var y = null === (f = R.get(A)) || void 0 === f ? void 0 : f.unref();
                                        R.delete(A), !y || A.selection && u.Range.equals(A.selection, y) || u.Transforms.select(A, y)
                                    }
                                }
                            }
                        }, [A, et, J, g, E, er]),
                        en = (0, d.useCallback)(e => {
                            null == e ? (et.cancel(), er.cancel(), k.delete(A), D.delete(A), Y.current && eE && Y.current.removeEventListener("beforeinput", ea)) : eE && e.addEventListener("beforeinput", ea), Y.current = e
                        }, [et, er, A, ea]);
                    eO(() => {
                        var e = ew.getWindow(A);
                        return e.document.addEventListener("selectionchange", er), () => {
                            e.document.removeEventListener("selectionchange", er)
                        }
                    }, [er]);
                    var ei = v([A, []]);
                    if (m && 1 === A.children.length && 1 === Array.from(u.Node.texts(A)).length && "" === u.Node.string(A) && !z) {
                        var ec = u.Editor.start(A, []);
                        ei.push({
                            [q]: !0,
                            placeholder: m,
                            anchor: ec,
                            focus: ec
                        })
                    }
                    var {
                        marks: ef
                    } = A;
                    if (Q.hasMarkPlaceholder = !1, A.selection && u.Range.isCollapsed(A.selection) && ef) {
                        var {
                            anchor: eh
                        } = A.selection, eb = u.Node.leaf(A, eh.path), ex = p(eb, tl);
                        if (!u.Text.equals(eb, ef, {
                                loose: !0
                            })) {
                            Q.hasMarkPlaceholder = !0;
                            var ek = Object.fromEntries(Object.keys(ex).map(e => [e, null]));
                            ei.push(tc(tc(tc({
                                [U]: !0
                            }, ek), ef), {}, {
                                anchor: eh,
                                focus: eh
                            }))
                        }
                    }(0, d.useEffect)(() => {
                        setTimeout(() => {
                            var {
                                selection: e
                            } = A;
                            if (e) {
                                var {
                                    anchor: t
                                } = e, r = u.Node.leaf(A, t.path);
                                if (ef && !u.Text.equals(r, ef, {
                                        loose: !0
                                    })) {
                                    N.set(A, ef);
                                    return
                                }
                            }
                            N.delete(A)
                        })
                    });
                    var eC = null === (s = C.get(A)) || void 0 === s ? void 0 : null === (c = s.getBoundingClientRect()) || void 0 === c ? void 0 : c.height;
                    return d.createElement(eV.Provider, {
                        value: E
                    }, d.createElement(eA.Provider, {
                        value: v
                    }, d.createElement(e2, {
                        node: Y,
                        receivedUserInput: Z
                    }, d.createElement(B, Object.assign({
                        role: E ? void 0 : "textbox",
                        "aria-multiline": !E || void 0
                    }, j, {
                        spellCheck: (!!eE || !em) && j.spellCheck,
                        autoCorrect: eE || !em ? j.autoCorrect : "false",
                        autoCapitalize: eE || !em ? j.autoCapitalize : "false",
                        "data-slate-editor": !0,
                        "data-slate-node": "value",
                        contentEditable: !E,
                        zindex: -1,
                        suppressContentEditableWarning: !0,
                        ref: en,
                        style: tc(tc({}, W ? {} : tc({
                            position: "relative",
                            outline: "none",
                            whiteSpace: "pre-wrap",
                            wordWrap: "break-word"
                        }, eC ? {
                            minHeight: eC
                        } : {})), M),
                        onBeforeInput: (0, d.useCallback)(e => {
                            if (!eE && !E && !tp(e, j.onBeforeInput) && ew.hasSelectableTarget(A, e.target) && (e.preventDefault(), !ew.isComposing(A))) {
                                var t = e.data;
                                u.Editor.insertText(A, t)
                            }
                        }, [j.onBeforeInput, A, E]),
                        onInput: (0, d.useCallback)(e => {
                            if (!tp(e, j.onInput)) {
                                if (ee.current) {
                                    ee.current.handleInput();
                                    return
                                }
                                for (var t of X.current) t();
                                X.current = []
                            }
                        }, [j.onInput]),
                        onBlur: (0, d.useCallback)(e => {
                            if (!(E || Q.isUpdatingSelection || !ew.hasSelectableTarget(A, e.target) || tp(e, j.onBlur))) {
                                var t = ew.findDocumentOrShadowRoot(A);
                                if (Q.latestElement !== t.activeElement) {
                                    var {
                                        relatedTarget: r
                                    } = e;
                                    if (!(r === ew.toDOMNode(A, A) || K(r) && r.hasAttribute("data-slate-spacer"))) {
                                        if (null != r && H(r) && ew.hasDOMNode(A, r)) {
                                            var a = ew.toSlateNode(A, r);
                                            if (u.Element.isElement(a) && !A.isVoid(a)) return
                                        }
                                        if (ed) {
                                            var n = t.getSelection();
                                            null == n || n.removeAllRanges()
                                        }
                                        F.delete(A)
                                    }
                                }
                            }
                        }, [E, Q.isUpdatingSelection, Q.latestElement, A, j.onBlur]),
                        onClick: (0, d.useCallback)(e => {
                            if (ew.hasTarget(A, e.target) && !tp(e, j.onClick) && H(e.target)) {
                                var t = ew.toSlateNode(A, e.target),
                                    r = ew.findPath(A, t);
                                if (u.Editor.hasPath(A, r) && u.Node.get(A, r) === t) {
                                    if (3 === e.detail && r.length >= 1) {
                                        var a = r;
                                        if (!(u.Element.isElement(t) && u.Editor.isBlock(A, t))) {
                                            var n, o = u.Editor.above(A, {
                                                match: e => u.Element.isElement(e) && u.Editor.isBlock(A, e),
                                                at: r
                                            });
                                            a = null !== (n = null == o ? void 0 : o[1]) && void 0 !== n ? n : r.slice(0, 1)
                                        }
                                        var i = u.Editor.range(A, a);
                                        u.Transforms.select(A, i);
                                        return
                                    }
                                    if (!E) {
                                        var s = u.Editor.start(A, r),
                                            l = u.Editor.end(A, r),
                                            d = u.Editor.void(A, {
                                                at: s
                                            }),
                                            c = u.Editor.void(A, {
                                                at: l
                                            });
                                        if (d && c && u.Path.equals(d[1], c[1])) {
                                            var f = u.Editor.range(A, s);
                                            u.Transforms.select(A, f)
                                        }
                                    }
                                }
                            }
                        }, [A, j.onClick, E]),
                        onCompositionEnd: (0, d.useCallback)(e => {
                            if (ew.hasSelectableTarget(A, e.target)) {
                                var t;
                                if (ew.isComposing(A) && (_(!1), P.set(A, !1)), null === (t = ee.current) || void 0 === t || t.handleCompositionEnd(e), !tp(e, j.onCompositionEnd) && !es && !ed && !ev && !eo && !ep && !eg && e.data) {
                                    var r = N.get(A);
                                    N.delete(A), void 0 !== r && (L.set(A, A.marks), A.marks = r), u.Editor.insertText(A, e.data);
                                    var a = L.get(A);
                                    L.delete(A), void 0 !== a && (A.marks = a)
                                }
                            }
                        }, [j.onCompositionEnd, A]),
                        onCompositionUpdate: (0, d.useCallback)(e => {
                            !ew.hasSelectableTarget(A, e.target) || tp(e, j.onCompositionUpdate) || ew.isComposing(A) || (_(!0), P.set(A, !0))
                        }, [j.onCompositionUpdate, A]),
                        onCompositionStart: (0, d.useCallback)(e => {
                            if (ew.hasSelectableTarget(A, e.target) && (null === (t = ee.current) || void 0 === t || t.handleCompositionStart(e), !tp(e, j.onCompositionStart) && !es)) {
                                _(!0);
                                var t, {
                                    selection: r
                                } = A;
                                if (r) {
                                    if (u.Range.isExpanded(r)) {
                                        u.Editor.deleteFragment(A);
                                        return
                                    }
                                    var a = u.Editor.above(A, {
                                        match: e => u.Element.isElement(e) && u.Editor.isInline(A, e),
                                        mode: "highest"
                                    });
                                    if (a) {
                                        var [, n] = a;
                                        if (u.Editor.isEnd(A, r.anchor, n)) {
                                            var o = u.Editor.after(A, n);
                                            u.Transforms.setSelection(A, {
                                                anchor: o,
                                                focus: o
                                            })
                                        }
                                    }
                                }
                            }
                        }, [j.onCompositionStart, A]),
                        onCopy: (0, d.useCallback)(e => {
                            !ew.hasSelectableTarget(A, e.target) || tp(e, j.onCopy) || tm(e) || (e.preventDefault(), ew.setFragmentData(A, e.clipboardData, "copy"))
                        }, [j.onCopy, A]),
                        onCut: (0, d.useCallback)(e => {
                            if (!E && ew.hasSelectableTarget(A, e.target) && !tp(e, j.onCut) && !tm(e)) {
                                e.preventDefault(), ew.setFragmentData(A, e.clipboardData, "cut");
                                var {
                                    selection: t
                                } = A;
                                if (t) {
                                    if (u.Range.isExpanded(t)) u.Editor.deleteFragment(A);
                                    else {
                                        var r = u.Node.parent(A, t.anchor.path);
                                        u.Editor.isVoid(A, r) && u.Transforms.delete(A)
                                    }
                                }
                            }
                        }, [E, A, j.onCut]),
                        onDragOver: (0, d.useCallback)(e => {
                            if (ew.hasTarget(A, e.target) && !tp(e, j.onDragOver)) {
                                var t = ew.toSlateNode(A, e.target);
                                u.Element.isElement(t) && u.Editor.isVoid(A, t) && e.preventDefault()
                            }
                        }, [j.onDragOver, A]),
                        onDragStart: (0, d.useCallback)(e => {
                            if (!E && ew.hasTarget(A, e.target) && !tp(e, j.onDragStart)) {
                                var t = ew.toSlateNode(A, e.target),
                                    r = ew.findPath(A, t);
                                if (u.Element.isElement(t) && u.Editor.isVoid(A, t) || u.Editor.void(A, {
                                        at: r,
                                        voids: !0
                                    })) {
                                    var a = u.Editor.range(A, r);
                                    u.Transforms.select(A, a)
                                }
                                Q.isDraggingInternally = !0, ew.setFragmentData(A, e.dataTransfer, "drag")
                            }
                        }, [E, A, j.onDragStart, Q]),
                        onDrop: (0, d.useCallback)(e => {
                            if (!E && ew.hasTarget(A, e.target) && !tp(e, j.onDrop)) {
                                e.preventDefault();
                                var t = A.selection,
                                    r = ew.findEventRange(A, e),
                                    a = e.dataTransfer;
                                u.Transforms.select(A, r), Q.isDraggingInternally && t && !u.Range.equals(t, r) && !u.Editor.void(A, {
                                    at: r,
                                    voids: !0
                                }) && u.Transforms.delete(A, {
                                    at: t
                                }), ew.insertData(A, a), ew.isFocused(A) || ew.focus(A)
                            }
                            Q.isDraggingInternally = !1
                        }, [E, A, j.onDrop, Q]),
                        onDragEnd: (0, d.useCallback)(e => {
                            !E && Q.isDraggingInternally && j.onDragEnd && ew.hasTarget(A, e.target) && j.onDragEnd(e), Q.isDraggingInternally = !1
                        }, [E, Q, j, A]),
                        onFocus: (0, d.useCallback)(e => {
                            if (!E && !Q.isUpdatingSelection && ew.hasEditableTarget(A, e.target) && !tp(e, j.onFocus)) {
                                var t = ew.toDOMNode(A, A),
                                    r = ew.findDocumentOrShadowRoot(A);
                                if (Q.latestElement = r.activeElement, el && e.target !== t) {
                                    t.focus();
                                    return
                                }
                                F.set(A, !0)
                            }
                        }, [E, Q, A, j.onFocus]),
                        onKeyDown: (0, d.useCallback)(e => {
                            if (!E && ew.hasEditableTarget(A, e.target)) {
                                null === (t = ee.current) || void 0 === t || t.handleKeyDown(e);
                                var t, {
                                    nativeEvent: r
                                } = e;
                                if (ew.isComposing(A) && !1 === r.isComposing && (P.set(A, !1), _(!1)), !(tp(e, j.onKeyDown) || ew.isComposing(A))) {
                                    var {
                                        selection: a
                                    } = A, o = A.children[null !== a ? a.focus.path[0] : 0], i = "rtl" === n()(u.Node.string(o));
                                    if (eG.isRedo(r)) {
                                        e.preventDefault(), "function" == typeof A.redo && A.redo();
                                        return
                                    }
                                    if (eG.isUndo(r)) {
                                        e.preventDefault(), "function" == typeof A.undo && A.undo();
                                        return
                                    }
                                    if (eG.isMoveLineBackward(r)) {
                                        e.preventDefault(), u.Transforms.move(A, {
                                            unit: "line",
                                            reverse: !0
                                        });
                                        return
                                    }
                                    if (eG.isMoveLineForward(r)) {
                                        e.preventDefault(), u.Transforms.move(A, {
                                            unit: "line"
                                        });
                                        return
                                    }
                                    if (eG.isExtendLineBackward(r)) {
                                        e.preventDefault(), u.Transforms.move(A, {
                                            unit: "line",
                                            edge: "focus",
                                            reverse: !0
                                        });
                                        return
                                    }
                                    if (eG.isExtendLineForward(r)) {
                                        e.preventDefault(), u.Transforms.move(A, {
                                            unit: "line",
                                            edge: "focus"
                                        });
                                        return
                                    }
                                    if (eG.isMoveBackward(r)) {
                                        e.preventDefault(), a && u.Range.isCollapsed(a) ? u.Transforms.move(A, {
                                            reverse: !i
                                        }) : u.Transforms.collapse(A, {
                                            edge: "start"
                                        });
                                        return
                                    }
                                    if (eG.isMoveForward(r)) {
                                        e.preventDefault(), a && u.Range.isCollapsed(a) ? u.Transforms.move(A, {
                                            reverse: i
                                        }) : u.Transforms.collapse(A, {
                                            edge: "end"
                                        });
                                        return
                                    }
                                    if (eG.isMoveWordBackward(r)) {
                                        e.preventDefault(), a && u.Range.isExpanded(a) && u.Transforms.collapse(A, {
                                            edge: "focus"
                                        }), u.Transforms.move(A, {
                                            unit: "word",
                                            reverse: !i
                                        });
                                        return
                                    }
                                    if (eG.isMoveWordForward(r)) {
                                        e.preventDefault(), a && u.Range.isExpanded(a) && u.Transforms.collapse(A, {
                                            edge: "focus"
                                        }), u.Transforms.move(A, {
                                            unit: "word",
                                            reverse: i
                                        });
                                        return
                                    }
                                    if (eE) {
                                        if ((eu || ed) && a && (eG.isDeleteBackward(r) || eG.isDeleteForward(r)) && u.Range.isCollapsed(a)) {
                                            var s = u.Node.parent(A, a.anchor.path);
                                            if (u.Element.isElement(s) && u.Editor.isVoid(A, s) && (u.Editor.isInline(A, s) || u.Editor.isBlock(A, s))) {
                                                e.preventDefault(), u.Editor.deleteBackward(A, {
                                                    unit: "block"
                                                });
                                                return
                                            }
                                        }
                                    } else {
                                        if (eG.isBold(r) || eG.isItalic(r) || eG.isTransposeCharacter(r)) {
                                            e.preventDefault();
                                            return
                                        }
                                        if (eG.isSoftBreak(r)) {
                                            e.preventDefault(), u.Editor.insertSoftBreak(A);
                                            return
                                        }
                                        if (eG.isSplitBlock(r)) {
                                            e.preventDefault(), u.Editor.insertBreak(A);
                                            return
                                        }
                                        if (eG.isDeleteBackward(r)) {
                                            e.preventDefault(), a && u.Range.isExpanded(a) ? u.Editor.deleteFragment(A, {
                                                direction: "backward"
                                            }) : u.Editor.deleteBackward(A);
                                            return
                                        }
                                        if (eG.isDeleteForward(r)) {
                                            e.preventDefault(), a && u.Range.isExpanded(a) ? u.Editor.deleteFragment(A, {
                                                direction: "forward"
                                            }) : u.Editor.deleteForward(A);
                                            return
                                        }
                                        if (eG.isDeleteLineBackward(r)) {
                                            e.preventDefault(), a && u.Range.isExpanded(a) ? u.Editor.deleteFragment(A, {
                                                direction: "backward"
                                            }) : u.Editor.deleteBackward(A, {
                                                unit: "line"
                                            });
                                            return
                                        }
                                        if (eG.isDeleteLineForward(r)) {
                                            e.preventDefault(), a && u.Range.isExpanded(a) ? u.Editor.deleteFragment(A, {
                                                direction: "forward"
                                            }) : u.Editor.deleteForward(A, {
                                                unit: "line"
                                            });
                                            return
                                        }
                                        if (eG.isDeleteWordBackward(r)) {
                                            e.preventDefault(), a && u.Range.isExpanded(a) ? u.Editor.deleteFragment(A, {
                                                direction: "backward"
                                            }) : u.Editor.deleteBackward(A, {
                                                unit: "word"
                                            });
                                            return
                                        }
                                        if (eG.isDeleteWordForward(r)) {
                                            e.preventDefault(), a && u.Range.isExpanded(a) ? u.Editor.deleteFragment(A, {
                                                direction: "forward"
                                            }) : u.Editor.deleteForward(A, {
                                                unit: "word"
                                            });
                                            return
                                        }
                                    }
                                }
                            }
                        }, [E, A, j.onKeyDown]),
                        onPaste: (0, d.useCallback)(e => {
                            !E && ew.hasEditableTarget(A, e.target) && !tp(e, j.onPaste) && (!eE || $(e.nativeEvent) || ed) && (e.preventDefault(), ew.insertData(A, e.clipboardData))
                        }, [E, A, j.onPaste])
                    }), d.createElement(tu, {
                        decorations: ei,
                        node: A,
                        renderElement: w,
                        renderPlaceholder: O,
                        renderLeaf: b,
                        selection: A.selection
                    })))))
                },
                th = e => {
                    var {
                        attributes: t,
                        children: r
                    } = e;
                    return d.createElement("span", Object.assign({}, t), r, es && d.createElement("br", null))
                },
                tv = () => [],
                tg = (e, t) => {
                    if (t.getBoundingClientRect && (!e.selection || e.selection && u.Range.isCollapsed(e.selection))) {
                        var r = t.startContainer.parentElement;
                        r.getBoundingClientRect = t.getBoundingClientRect.bind(t), (0, c.Z)(r, {
                            scrollMode: "if-needed"
                        }), delete r.getBoundingClientRect
                    }
                },
                tp = (e, t) => {
                    if (!t) return !1;
                    var r = t(e);
                    return null != r ? r : e.isDefaultPrevented() || e.isPropagationStopped()
                },
                tm = e => H(e.target) && (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement),
                tE = (e, t) => {
                    if (!t) return !1;
                    var r = t(e);
                    return null != r ? r : e.defaultPrevented
                },
                tw = (0, d.createContext)(!1),
                tb = () => (0, d.useContext)(tw),
                tx = (0, d.createContext)({}),
                tk = (e, t) => e === t;

            function tC(e) {
                var t, r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : tk,
                    [, a] = (0, d.useReducer)(e => e + 1, 0),
                    n = (0, d.useContext)(tx);
                if (!n) throw Error("The `useSlateSelector` hook must be used inside the <Slate> component's context.");
                var {
                    getSlate: o,
                    addEventListener: i
                } = n, s = (0, d.useRef)(), l = (0, d.useRef)(() => null), c = (0, d.useRef)(null);
                try {
                    t = e !== l.current || s.current ? e(o()) : c.current
                } catch (e) {
                    throw s.current && e instanceof Error && (e.message += "\nThe error may be correlated with this previous error:\n".concat(s.current.stack, "\n\n")), e
                }
                return eO(() => {
                    l.current = e, c.current = t, s.current = void 0
                }), eO(() => {
                    function e() {
                        try {
                            var e = l.current(o());
                            if (r(e, c.current)) return;
                            c.current = e
                        } catch (e) {
                            s.current = e
                        }
                        a()
                    }
                    var t = i(e);
                    return e(), () => t()
                }, [i, o]), t
            }
            var ty = ["editor", "children", "onChange", "value"],
                tD = e => {
                    var t, r, a, {
                            editor: n,
                            children: o,
                            onChange: i,
                            value: s
                        } = e,
                        l = p(e, ty),
                        c = (0, d.useRef)(!1),
                        [f, h] = d.useState(() => {
                            if (!u.Node.isNodeList(s)) throw Error("[Slate] value is invalid! Expected a list of elements but got: ".concat(u.Scrubber.stringify(s)));
                            if (!u.Editor.isEditor(n)) throw Error("[Slate] editor is invalid! You passed: ".concat(u.Scrubber.stringify(n)));
                            return n.children = s, Object.assign(n, l), {
                                v: 0,
                                editor: n
                            }
                        }),
                        {
                            selectorContext: v,
                            onChange: g
                        } = (t = (0, d.useRef)([]).current, r = (0, d.useRef)({
                            editor: n
                        }).current, a = (0, d.useCallback)(e => {
                            r.editor = e, t.forEach(t => t(e))
                        }, [t, r]), {
                            selectorContext: (0, d.useMemo)(() => ({
                                getSlate: () => r.editor,
                                addEventListener: e => (t.push(e), () => {
                                    t.splice(t.indexOf(e), 1)
                                })
                            }), [t, r]),
                            onChange: a
                        }),
                        m = (0, d.useCallback)(() => {
                            i && i(n.children), h(e => ({
                                v: e.v + 1,
                                editor: n
                            })), g(n)
                        }, [n, g, i]);
                    (0, d.useEffect)(() => (M.set(n, m), () => {
                        M.set(n, () => {}), c.current = !0
                    }), [n, m]);
                    var [E, w] = (0, d.useState)(ew.isFocused(n));
                    return (0, d.useEffect)(() => {
                        w(ew.isFocused(n))
                    }, [n]), eO(() => {
                        var e = () => w(ew.isFocused(n));
                        return en ? (document.addEventListener("focusin", e), document.addEventListener("focusout", e), () => {
                            document.removeEventListener("focusin", e), document.removeEventListener("focusout", e)
                        }) : (document.addEventListener("focus", e, !0), document.addEventListener("blur", e, !0), () => {
                            document.removeEventListener("focus", e, !0), document.removeEventListener("blur", e, !0)
                        })
                    }, []), d.createElement(tx.Provider, {
                        value: v
                    }, d.createElement(eK.Provider, {
                        value: f
                    }, d.createElement(eR.Provider, {
                        value: f.editor
                    }, d.createElement(tw.Provider, {
                        value: E
                    }, o))))
                },
                tO = () => {
                    var e = (0, d.useContext)(eR);
                    if (!e) throw Error("The `useEditor` hook must be used inside the <Slate> component's context.");
                    return e
                },
                tS = () => tC(e => e.selection, tT),
                tT = (e, t) => !e && !t || !!e && !!t && u.Range.equals(e, t),
                tF = (e, t) => {
                    var r = (t.top + t.bottom) / 2;
                    return e.top <= r && e.bottom >= r
                },
                tP = (e, t, r) => {
                    var a = ew.toDOMRange(e, t).getBoundingClientRect(),
                        n = ew.toDOMRange(e, r).getBoundingClientRect();
                    return tF(a, n) && tF(n, a)
                },
                tR = (e, t) => {
                    var r = u.Editor.range(e, u.Range.end(t)),
                        a = Array.from(u.Editor.positions(e, {
                            at: t
                        })),
                        n = 0,
                        o = a.length,
                        i = Math.floor(o / 2);
                    if (tP(e, u.Editor.range(e, a[n]), r)) return u.Editor.range(e, a[n], r);
                    if (a.length < 2) return u.Editor.range(e, a[a.length - 1], r);
                    for (; i !== a.length && i !== n;) tP(e, u.Editor.range(e, a[i]), r) ? o = i : n = i, i = Math.floor((n + o) / 2);
                    return u.Editor.range(e, a[o], r)
                };

            function tM(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    t && (a = a.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), r.push.apply(r, a)
                }
                return r
            }

            function tB(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? tM(Object(r), !0).forEach(function(t) {
                        g(e, t, r[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : tM(Object(r)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    })
                }
                return e
            }
            var tN = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "x-slate-fragment",
                        {
                            apply: r,
                            onChange: a,
                            deleteBackward: n,
                            addMark: o,
                            removeMark: i
                        } = e;
                    return S.set(e, new WeakMap), e.addMark = (t, r) => {
                        var a, n;
                        null === (a = B.get(e)) || void 0 === a || a(), !N.get(e) && null !== (n = W.get(e)) && void 0 !== n && n.length && N.set(e, null), L.delete(e), o(t, r)
                    }, e.removeMark = t => {
                        var r;
                        !N.get(e) && null !== (r = W.get(e)) && void 0 !== r && r.length && N.set(e, null), L.delete(e), i(t)
                    }, e.deleteBackward = t => {
                        if ("line" !== t) return n(t);
                        if (e.selection && u.Range.isCollapsed(e.selection)) {
                            var r = u.Editor.above(e, {
                                match: t => u.Element.isElement(t) && u.Editor.isBlock(e, t),
                                at: e.selection
                            });
                            if (r) {
                                var [, a] = r, o = u.Editor.range(e, a, e.selection.anchor), i = tR(e, o);
                                u.Range.isCollapsed(i) || u.Transforms.delete(e, {
                                    at: i
                                })
                            }
                        }
                    }, e.apply = t => {
                        var a, n = [],
                            o = W.get(e);
                        if (null != o && o.length) {
                            var i = o.map(e => (function(e, t) {
                                var {
                                    path: r,
                                    diff: a,
                                    id: n
                                } = e;
                                switch (t.type) {
                                    case "insert_text":
                                        if (!u.Path.equals(t.path, r) || t.offset >= a.end) return e;
                                        if (t.offset <= a.start) return {
                                            diff: {
                                                start: t.text.length + a.start,
                                                end: t.text.length + a.end,
                                                text: a.text
                                            },
                                            id: n,
                                            path: r
                                        };
                                        return {
                                            diff: {
                                                start: a.start,
                                                end: a.end + t.text.length,
                                                text: a.text
                                            },
                                            id: n,
                                            path: r
                                        };
                                    case "remove_text":
                                        if (!u.Path.equals(t.path, r) || t.offset >= a.end) return e;
                                        if (t.offset + t.text.length <= a.start) return {
                                            diff: {
                                                start: a.start - t.text.length,
                                                end: a.end - t.text.length,
                                                text: a.text
                                            },
                                            id: n,
                                            path: r
                                        };
                                        return {
                                            diff: {
                                                start: a.start,
                                                end: a.end - t.text.length,
                                                text: a.text
                                            },
                                            id: n,
                                            path: r
                                        };
                                    case "split_node":
                                        if (!u.Path.equals(t.path, r) || t.position >= a.end) return {
                                            diff: a,
                                            id: n,
                                            path: u.Path.transform(r, t, {
                                                affinity: "backward"
                                            })
                                        };
                                        if (t.position > a.start) return {
                                            diff: {
                                                start: a.start,
                                                end: Math.min(t.position, a.end),
                                                text: a.text
                                            },
                                            id: n,
                                            path: r
                                        };
                                        return {
                                            diff: {
                                                start: a.start - t.position,
                                                end: a.end - t.position,
                                                text: a.text
                                            },
                                            id: n,
                                            path: u.Path.transform(r, t, {
                                                affinity: "forward"
                                            })
                                        };
                                    case "merge_node":
                                        if (!u.Path.equals(t.path, r)) return {
                                            diff: a,
                                            id: n,
                                            path: u.Path.transform(r, t)
                                        };
                                        return {
                                            diff: {
                                                start: a.start + t.position,
                                                end: a.end + t.position,
                                                text: a.text
                                            },
                                            id: n,
                                            path: u.Path.transform(r, t)
                                        }
                                }
                                var o = u.Path.transform(r, t);
                                return o ? {
                                    diff: a,
                                    path: o,
                                    id: n
                                } : null
                            })(e, t)).filter(Boolean);
                            W.set(e, i)
                        }
                        var s = A.get(e);
                        s && A.set(e, e4(e, s, t));
                        var l = j.get(e);
                        if (null != l && l.at) {
                            var d = u.Point.isPoint(null == l ? void 0 : l.at) ? e5(e, l.at, t) : e4(e, l.at, t);
                            j.set(e, d ? tB(tB({}, l), {}, {
                                at: d
                            }) : null)
                        }
                        switch (t.type) {
                            case "insert_text":
                            case "remove_text":
                            case "set_node":
                            case "split_node":
                                n.push(...tL(e, t.path));
                                break;
                            case "set_selection":
                                null === (a = R.get(e)) || void 0 === a || a.unref(), R.delete(e);
                                break;
                            case "insert_node":
                            case "remove_node":
                                n.push(...tL(e, u.Path.parent(t.path)));
                                break;
                            case "merge_node":
                                n.push(...tL(e, u.Path.previous(t.path)));
                                break;
                            case "move_node":
                                n.push(...tL(e, u.Path.common(u.Path.parent(t.path), u.Path.parent(t.newPath))))
                        }
                        for (var [c, f] of (r(t), n)) {
                            var [h] = u.Editor.node(e, c);
                            O.set(h, f)
                        }
                    }, e.setFragmentData = r => {
                        var {
                            selection: a
                        } = e;
                        if (a) {
                            var [n, o] = u.Range.edges(a), i = u.Editor.void(e, {
                                at: n.path
                            }), s = u.Editor.void(e, {
                                at: o.path
                            });
                            if (!u.Range.isCollapsed(a) || i) {
                                var l = ew.toDOMRange(e, a),
                                    d = l.cloneContents(),
                                    c = d.childNodes[0];
                                if (d.childNodes.forEach(e => {
                                        e.textContent && "" !== e.textContent.trim() && (c = e)
                                    }), s) {
                                    var [f] = s, h = l.cloneRange(), v = ew.toDOMNode(e, f);
                                    h.setEndAfter(v), d = h.cloneContents()
                                }
                                if (i && (c = d.querySelector("[data-slate-spacer]")), Array.from(d.querySelectorAll("[data-slate-zero-width]")).forEach(e => {
                                        var t = "n" === e.getAttribute("data-slate-zero-width");
                                        e.textContent = t ? "\n" : ""
                                    }), X(c)) {
                                    var g = c.ownerDocument.createElement("span");
                                    g.style.whiteSpace = "pre", g.appendChild(c), d.appendChild(g), c = g
                                }
                                var p = JSON.stringify(e.getFragment()),
                                    m = window.btoa(encodeURIComponent(p));
                                c.setAttribute("data-slate-fragment", m), r.setData("application/".concat(t), m);
                                var E = d.ownerDocument.createElement("div");
                                return E.appendChild(d), E.setAttribute("hidden", "true"), d.ownerDocument.body.appendChild(E), r.setData("text/html", E.innerHTML), r.setData("text/plain", ee(E)), d.ownerDocument.body.removeChild(E), r
                            }
                        }
                    }, e.insertData = t => {
                        e.insertFragmentData(t) || e.insertTextData(t)
                    }, e.insertFragmentData = r => {
                        var a = r.getData("application/".concat(t)) || er(r);
                        if (a) {
                            var n = JSON.parse(decodeURIComponent(window.atob(a)));
                            return e.insertFragment(n), !0
                        }
                        return !1
                    }, e.insertTextData = t => {
                        var r = t.getData("text/plain");
                        if (r) {
                            var a = r.split(/\r\n|\r|\n/),
                                n = !1;
                            for (var o of a) n && u.Transforms.splitNodes(e, {
                                always: !0
                            }), e.insertText(o), n = !0;
                            return !0
                        }
                        return !1
                    }, e.onChange = t => {
                        v.unstable_batchedUpdates(() => {
                            var r = M.get(e);
                            r && r(), a(t)
                        })
                    }, e
                },
                tL = (e, t) => {
                    var r = [];
                    for (var [a, n] of u.Editor.levels(e, {
                            at: t
                        })) {
                        var o = ew.findKey(e, a);
                        r.push([n, o])
                    }
                    return r
                }
        }
    }
]);