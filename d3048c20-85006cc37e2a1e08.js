"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [1272], {
        77493: function(u, e, t) {
            t.r(e), t.d(e, {
                Editor: function() {
                    return Q
                },
                Element: function() {
                    return J
                },
                Location: function() {
                    return X
                },
                Node: function() {
                    return ur
                },
                Operation: function() {
                    return uD
                },
                Path: function() {
                    return ui
                },
                PathRef: function() {
                    return uo
                },
                Point: function() {
                    return ul
                },
                PointRef: function() {
                    return uB
                },
                Range: function() {
                    return uA
                },
                RangeRef: function() {
                    return uh
                },
                Scrubber: function() {
                    return uE
                },
                Span: function() {
                    return Y
                },
                Text: function() {
                    return uy
                },
                Transforms: function() {
                    return uI
                },
                createEditor: function() {
                    return F
                }
            });
            var r, n, a = t(90111),
                D = t(12902);

            function i(u, e, t) {
                return e in u ? Object.defineProperty(u, e, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : u[e] = t, u
            }
            var o = new WeakMap,
                s = new WeakMap,
                C = new WeakMap,
                l = new WeakMap,
                B = new WeakMap,
                c = new WeakMap,
                f = new WeakMap;

            function A(u, e) {
                var t = Object.keys(u);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(u);
                    e && (r = r.filter(function(e) {
                        return Object.getOwnPropertyDescriptor(u, e).enumerable
                    })), t.push.apply(t, r)
                }
                return t
            }

            function h(u) {
                for (var e = 1; e < arguments.length; e++) {
                    var t = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? A(Object(t), !0).forEach(function(e) {
                        i(u, e, t[e])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(u, Object.getOwnPropertyDescriptors(t)) : A(Object(t)).forEach(function(e) {
                        Object.defineProperty(u, e, Object.getOwnPropertyDescriptor(t, e))
                    })
                }
                return u
            }
            var F = () => {
                var u = {
                    children: [],
                    operations: [],
                    selection: null,
                    marks: null,
                    isInline: () => !1,
                    isVoid: () => !1,
                    markableVoid: () => !1,
                    onChange: () => {},
                    apply: e => {
                        for (var t of Q.pathRefs(u)) uo.transform(t, e);
                        for (var r of Q.pointRefs(u)) uB.transform(r, e);
                        for (var n of Q.rangeRefs(u)) uh.transform(n, e);
                        var a, D, i = o.get(u) || [],
                            l = s.get(u) || new Set,
                            B = u => {
                                if (u) {
                                    var e = u.join(",");
                                    D.has(e) || (D.add(e), a.push(u))
                                }
                            };
                        if (ui.operationCanTransformPath(e))
                            for (var c of (a = [], D = new Set, i)) B(ui.transform(c, e));
                        else a = i, D = l;
                        for (var f of u.getDirtyPaths(e)) B(f);
                        o.set(u, a), s.set(u, D), uI.transform(u, e), u.operations.push(e), Q.normalize(u, {
                            operation: e
                        }), "set_selection" === e.type && (u.marks = null), C.get(u) || (C.set(u, !0), Promise.resolve().then(() => {
                            C.set(u, !1), u.onChange({
                                operation: e
                            }), u.operations = []
                        }))
                    },
                    addMark: (e, t) => {
                        var {
                            selection: r,
                            markableVoid: n
                        } = u;
                        if (r) {
                            var a = (e, t) => {
                                    if (!uy.isText(e)) return !1;
                                    var [r, n] = Q.parent(u, t);
                                    return !u.isVoid(r) || u.markableVoid(r)
                                },
                                D = uA.isExpanded(r),
                                i = !1;
                            if (!D) {
                                var [o, s] = Q.node(u, r);
                                if (o && a(o, s)) {
                                    var [l] = Q.parent(u, s);
                                    i = l && u.markableVoid(l)
                                }
                            }
                            if (D || i) uI.setNodes(u, {
                                [e]: t
                            }, {
                                match: a,
                                split: !0,
                                voids: !0
                            });
                            else {
                                var B = h(h({}, Q.marks(u) || {}), {}, {
                                    [e]: t
                                });
                                u.marks = B, C.get(u) || u.onChange()
                            }
                        }
                    },
                    deleteBackward: e => {
                        var {
                            selection: t
                        } = u;
                        t && uA.isCollapsed(t) && uI.delete(u, {
                            unit: e,
                            reverse: !0
                        })
                    },
                    deleteForward: e => {
                        var {
                            selection: t
                        } = u;
                        t && uA.isCollapsed(t) && uI.delete(u, {
                            unit: e
                        })
                    },
                    deleteFragment: e => {
                        var {
                            selection: t
                        } = u;
                        t && uA.isExpanded(t) && uI.delete(u, {
                            reverse: "backward" === e
                        })
                    },
                    getFragment: () => {
                        var {
                            selection: e
                        } = u;
                        return e ? ur.fragment(u, e) : []
                    },
                    insertBreak: () => {
                        uI.splitNodes(u, {
                            always: !0
                        })
                    },
                    insertSoftBreak: () => {
                        uI.splitNodes(u, {
                            always: !0
                        })
                    },
                    insertFragment: e => {
                        uI.insertFragment(u, e)
                    },
                    insertNode: e => {
                        uI.insertNodes(u, e)
                    },
                    insertText: e => {
                        var {
                            selection: t,
                            marks: r
                        } = u;
                        if (t) {
                            if (r) {
                                var n = h({
                                    text: e
                                }, r);
                                uI.insertNodes(u, n)
                            } else uI.insertText(u, e);
                            u.marks = null
                        }
                    },
                    normalizeNode: e => {
                        var [t, r] = e;
                        if (!uy.isText(t)) {
                            if (J.isElement(t) && 0 === t.children.length) {
                                uI.insertNodes(u, {
                                    text: ""
                                }, {
                                    at: r.concat(0),
                                    voids: !0
                                });
                                return
                            }
                            for (var n = !Q.isEditor(t) && J.isElement(t) && (u.isInline(t) || 0 === t.children.length || uy.isText(t.children[0]) || u.isInline(t.children[0])), a = 0, D = 0; D < t.children.length; D++, a++) {
                                var i = ur.get(u, r);
                                if (!uy.isText(i)) {
                                    var o = t.children[D],
                                        s = i.children[a - 1],
                                        C = D === t.children.length - 1;
                                    if ((uy.isText(o) || J.isElement(o) && u.isInline(o)) !== n) uI.removeNodes(u, {
                                        at: r.concat(a),
                                        voids: !0
                                    }), a--;
                                    else if (J.isElement(o)) {
                                        if (u.isInline(o)) {
                                            if (null != s && uy.isText(s)) {
                                                if (C) {
                                                    var l = {
                                                        text: ""
                                                    };
                                                    uI.insertNodes(u, l, {
                                                        at: r.concat(a + 1),
                                                        voids: !0
                                                    }), a++
                                                }
                                            } else {
                                                var B = {
                                                    text: ""
                                                };
                                                uI.insertNodes(u, B, {
                                                    at: r.concat(a),
                                                    voids: !0
                                                }), a++
                                            }
                                        }
                                    } else null != s && uy.isText(s) && (uy.equals(o, s, {
                                        loose: !0
                                    }) ? (uI.mergeNodes(u, {
                                        at: r.concat(a),
                                        voids: !0
                                    }), a--) : "" === s.text ? (uI.removeNodes(u, {
                                        at: r.concat(a - 1),
                                        voids: !0
                                    }), a--) : "" === o.text && (uI.removeNodes(u, {
                                        at: r.concat(a),
                                        voids: !0
                                    }), a--))
                                }
                            }
                        }
                    },
                    removeMark: e => {
                        var {
                            selection: t
                        } = u;
                        if (t) {
                            var r = (e, t) => {
                                    if (!uy.isText(e)) return !1;
                                    var [r, n] = Q.parent(u, t);
                                    return !u.isVoid(r) || u.markableVoid(r)
                                },
                                n = uA.isExpanded(t),
                                a = !1;
                            if (!n) {
                                var [D, i] = Q.node(u, t);
                                if (D && r(D, i)) {
                                    var [o] = Q.parent(u, i);
                                    a = o && u.markableVoid(o)
                                }
                            }
                            if (n || a) uI.unsetNodes(u, e, {
                                match: r,
                                split: !0,
                                voids: !0
                            });
                            else {
                                var s = h({}, Q.marks(u) || {});
                                delete s[e], u.marks = s, C.get(u) || u.onChange()
                            }
                        }
                    },
                    getDirtyPaths: u => {
                        switch (u.type) {
                            case "insert_text":
                            case "remove_text":
                            case "set_node":
                                var {
                                    path: e
                                } = u;
                                return ui.levels(e);
                            case "insert_node":
                                var {
                                    node: t,
                                    path: r
                                } = u;
                                return [...ui.levels(r), ...uy.isText(t) ? [] : Array.from(ur.nodes(t), u => {
                                    var [, e] = u;
                                    return r.concat(e)
                                })];
                            case "merge_node":
                                var {
                                    path: n
                                } = u;
                                return [...ui.ancestors(n), ui.previous(n)];
                            case "move_node":
                                var {
                                    path: a,
                                    newPath: D
                                } = u;
                                if (ui.equals(a, D)) return [];
                                var i = [],
                                    o = [];
                                for (var s of ui.ancestors(a)) {
                                    var C = ui.transform(s, u);
                                    i.push(C)
                                }
                                for (var l of ui.ancestors(D)) {
                                    var B = ui.transform(l, u);
                                    o.push(B)
                                }
                                var c = o[o.length - 1],
                                    f = D[D.length - 1];
                                return [...i, ...o, c.concat(f)];
                            case "remove_node":
                                var {
                                    path: A
                                } = u;
                                return [...ui.ancestors(A)];
                            case "split_node":
                                var {
                                    path: h
                                } = u;
                                return [...ui.levels(h), ui.next(h)];
                            default:
                                return []
                        }
                    },
                    shouldNormalize: u => {
                        var {
                            iteration: e,
                            initialDirtyPathsLength: t
                        } = u, r = 42 * t;
                        if (e > r) throw Error("Could not completely normalize the editor after ".concat(r, " iterations! This is usually due to incorrect normalization logic that leaves a node in an invalid state."));
                        return !0
                    }
                };
                return u
            };

            function E(u, e) {
                if (null == u) return {};
                var t, r, n = function(u, e) {
                    if (null == u) return {};
                    var t, r, n = {},
                        a = Object.keys(u);
                    for (r = 0; r < a.length; r++) t = a[r], e.indexOf(t) >= 0 || (n[t] = u[t]);
                    return n
                }(u, e);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(u);
                    for (r = 0; r < a.length; r++) t = a[r], !(e.indexOf(t) >= 0) && Object.prototype.propertyIsEnumerable.call(u, t) && (n[t] = u[t])
                }
                return n
            }
            var d = function(u) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        t = !e,
                        r = e ? w(u) : u,
                        a = n.None,
                        D = n.None,
                        i = 0,
                        o = null;
                    for (var s of r) {
                        var C, l, B, c, f, A, h, F, E = s.codePointAt(0);
                        if (!E) break;
                        var d = V(s, E);
                        if ([a, D] = t ? [D, d] : [d, a], (a & n.ZWJ) != 0 && (D & n.ExtPict) != 0 && !(t ? L(u.substring(0, i)) : L(u.substring(0, u.length - i))) || (a & n.RI) != 0 && (D & n.RI) != 0 && !(o = null !== o ? !o : !!t || W(u.substring(0, u.length - i))) || a !== n.None && D !== n.None && function(u, e) {
                                return -1 === I.findIndex(t => (u & t[0]) != 0 && (e & t[1]) != 0)
                            }(a, D)) break;
                        i += s.length
                    }
                    return i || 1
                },
                p = /\s/,
                v = /[\u0021-\u0023\u0025-\u002A\u002C-\u002F\u003A\u003B\u003F\u0040\u005B-\u005D\u005F\u007B\u007D\u00A1\u00A7\u00AB\u00B6\u00B7\u00BB\u00BF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u0AF0\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166D\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E3B\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]/,
                g = /['\u2018\u2019]/,
                m = function(u) {
                    for (var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], t = 0, r = !1; u.length > 0;) {
                        var n = d(u, e),
                            [a, D] = y(u, n, e);
                        if (b(a, D, e)) r = !0, t += n;
                        else if (r) break;
                        else t += n;
                        u = D
                    }
                    return t
                },
                y = (u, e, t) => {
                    if (t) {
                        var r = u.length - e;
                        return [u.slice(r, u.length), u.slice(0, r)]
                    }
                    return [u.slice(0, e), u.slice(e)]
                },
                b = function u(e, t) {
                    var r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                    if (p.test(e)) return !1;
                    if (g.test(e)) {
                        var n = d(t, r),
                            [a, D] = y(t, n, r);
                        if (u(a, D, r)) return !0
                    }
                    return !v.test(e)
                },
                w = function*(u) {
                    for (var e = u.length - 1, t = 0; t < u.length; t++) {
                        var r = u.charAt(e - t);
                        if (O(r.charCodeAt(0))) {
                            var n = u.charAt(e - t - 1);
                            if (x(n.charCodeAt(0))) {
                                yield n + r, t++;
                                continue
                            }
                        }
                        yield r
                    }
                },
                x = u => u >= 55296 && u <= 56319,
                O = u => u >= 56320 && u <= 57343;
            (r = n || (n = {}))[r.None = 0] = "None", r[r.Extend = 1] = "Extend", r[r.ZWJ = 2] = "ZWJ", r[r.RI = 4] = "RI", r[r.Prepend = 8] = "Prepend", r[r.SpacingMark = 16] = "SpacingMark", r[r.L = 32] = "L", r[r.V = 64] = "V", r[r.T = 128] = "T", r[r.LV = 256] = "LV", r[r.LVT = 512] = "LVT", r[r.ExtPict = 1024] = "ExtPict", r[r.Any = 2048] = "Any";
            var P = /^(?:[\u0300-\u036F\u0483-\u0489\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u0711\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F3\u07FD\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u08D3-\u08E1\u08E3-\u0902\u093A\u093C\u0941-\u0948\u094D\u0951-\u0957\u0962\u0963\u0981\u09BC\u09BE\u09C1-\u09C4\u09CD\u09D7\u09E2\u09E3\u09FE\u0A01\u0A02\u0A3C\u0A41\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A70\u0A71\u0A75\u0A81\u0A82\u0ABC\u0AC1-\u0AC5\u0AC7\u0AC8\u0ACD\u0AE2\u0AE3\u0AFA-\u0AFF\u0B01\u0B3C\u0B3E\u0B3F\u0B41-\u0B44\u0B4D\u0B55-\u0B57\u0B62\u0B63\u0B82\u0BBE\u0BC0\u0BCD\u0BD7\u0C00\u0C04\u0C3E-\u0C40\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C81\u0CBC\u0CBF\u0CC2\u0CC6\u0CCC\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0D00\u0D01\u0D3B\u0D3C\u0D3E\u0D41-\u0D44\u0D4D\u0D57\u0D62\u0D63\u0D81\u0DCA\u0DCF\u0DD2-\u0DD4\u0DD6\u0DDF\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0EB1\u0EB4-\u0EBC\u0EC8-\u0ECD\u0F18\u0F19\u0F35\u0F37\u0F39\u0F71-\u0F7E\u0F80-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102D-\u1030\u1032-\u1037\u1039\u103A\u103D\u103E\u1058\u1059\u105E-\u1060\u1071-\u1074\u1082\u1085\u1086\u108D\u109D\u135D-\u135F\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17B4\u17B5\u17B7-\u17BD\u17C6\u17C9-\u17D3\u17DD\u180B-\u180D\u1885\u1886\u18A9\u1920-\u1922\u1927\u1928\u1932\u1939-\u193B\u1A17\u1A18\u1A1B\u1A56\u1A58-\u1A5E\u1A60\u1A62\u1A65-\u1A6C\u1A73-\u1A7C\u1A7F\u1AB0-\u1AC0\u1B00-\u1B03\u1B34-\u1B3A\u1B3C\u1B42\u1B6B-\u1B73\u1B80\u1B81\u1BA2-\u1BA5\u1BA8\u1BA9\u1BAB-\u1BAD\u1BE6\u1BE8\u1BE9\u1BED\u1BEF-\u1BF1\u1C2C-\u1C33\u1C36\u1C37\u1CD0-\u1CD2\u1CD4-\u1CE0\u1CE2-\u1CE8\u1CED\u1CF4\u1CF8\u1CF9\u1DC0-\u1DF9\u1DFB-\u1DFF\u200C\u20D0-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\uA66F-\uA672\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA825\uA826\uA82C\uA8C4\uA8C5\uA8E0-\uA8F1\uA8FF\uA926-\uA92D\uA947-\uA951\uA980-\uA982\uA9B3\uA9B6-\uA9B9\uA9BC\uA9BD\uA9E5\uAA29-\uAA2E\uAA31\uAA32\uAA35\uAA36\uAA43\uAA4C\uAA7C\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEC\uAAED\uAAF6\uABE5\uABE8\uABED\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F\uFF9E\uFF9F]|\uD800[\uDDFD\uDEE0\uDF76-\uDF7A]|\uD802[\uDE01-\uDE03\uDE05\uDE06\uDE0C-\uDE0F\uDE38-\uDE3A\uDE3F\uDEE5\uDEE6]|\uD803[\uDD24-\uDD27\uDEAB\uDEAC\uDF46-\uDF50]|\uD804[\uDC01\uDC38-\uDC46\uDC7F-\uDC81\uDCB3-\uDCB6\uDCB9\uDCBA\uDD00-\uDD02\uDD27-\uDD2B\uDD2D-\uDD34\uDD73\uDD80\uDD81\uDDB6-\uDDBE\uDDC9-\uDDCC\uDDCF\uDE2F-\uDE31\uDE34\uDE36\uDE37\uDE3E\uDEDF\uDEE3-\uDEEA\uDF00\uDF01\uDF3B\uDF3C\uDF3E\uDF40\uDF57\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC38-\uDC3F\uDC42-\uDC44\uDC46\uDC5E\uDCB0\uDCB3-\uDCB8\uDCBA\uDCBD\uDCBF\uDCC0\uDCC2\uDCC3\uDDAF\uDDB2-\uDDB5\uDDBC\uDDBD\uDDBF\uDDC0\uDDDC\uDDDD\uDE33-\uDE3A\uDE3D\uDE3F\uDE40\uDEAB\uDEAD\uDEB0-\uDEB5\uDEB7\uDF1D-\uDF1F\uDF22-\uDF25\uDF27-\uDF2B]|\uD806[\uDC2F-\uDC37\uDC39\uDC3A\uDD30\uDD3B\uDD3C\uDD3E\uDD43\uDDD4-\uDDD7\uDDDA\uDDDB\uDDE0\uDE01-\uDE0A\uDE33-\uDE38\uDE3B-\uDE3E\uDE47\uDE51-\uDE56\uDE59-\uDE5B\uDE8A-\uDE96\uDE98\uDE99]|\uD807[\uDC30-\uDC36\uDC38-\uDC3D\uDC3F\uDC92-\uDCA7\uDCAA-\uDCB0\uDCB2\uDCB3\uDCB5\uDCB6\uDD31-\uDD36\uDD3A\uDD3C\uDD3D\uDD3F-\uDD45\uDD47\uDD90\uDD91\uDD95\uDD97\uDEF3\uDEF4]|\uD81A[\uDEF0-\uDEF4\uDF30-\uDF36]|\uD81B[\uDF4F\uDF8F-\uDF92\uDFE4]|\uD82F[\uDC9D\uDC9E]|\uD834[\uDD65\uDD67-\uDD69\uDD6E-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A\uDD30-\uDD36\uDEEC-\uDEEF]|\uD83A[\uDCD0-\uDCD6\uDD44-\uDD4A]|\uD83C[\uDFFB-\uDFFF]|\uDB40[\uDC20-\uDC7F\uDD00-\uDDEF])$/,
                k = /^(?:[\u0600-\u0605\u06DD\u070F\u0890\u0891\u08E2\u0D4E]|\uD804[\uDCBD\uDCCD\uDDC2\uDDC3]|\uD806[\uDD3F\uDD41\uDE3A\uDE84-\uDE89]|\uD807\uDD46)$/,
                j = /^(?:[\u0903\u093B\u093E-\u0940\u0949-\u094C\u094E\u094F\u0982\u0983\u09BF\u09C0\u09C7\u09C8\u09CB\u09CC\u0A03\u0A3E-\u0A40\u0A83\u0ABE-\u0AC0\u0AC9\u0ACB\u0ACC\u0B02\u0B03\u0B40\u0B47\u0B48\u0B4B\u0B4C\u0BBF\u0BC1\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCC\u0C01-\u0C03\u0C41-\u0C44\u0C82\u0C83\u0CBE\u0CC0\u0CC1\u0CC3\u0CC4\u0CC7\u0CC8\u0CCA\u0CCB\u0D02\u0D03\u0D3F\u0D40\u0D46-\u0D48\u0D4A-\u0D4C\u0D82\u0D83\u0DD0\u0DD1\u0DD8-\u0DDE\u0DF2\u0DF3\u0E33\u0EB3\u0F3E\u0F3F\u0F7F\u1031\u103B\u103C\u1056\u1057\u1084\u1715\u1734\u17B6\u17BE-\u17C5\u17C7\u17C8\u1923-\u1926\u1929-\u192B\u1930\u1931\u1933-\u1938\u1A19\u1A1A\u1A55\u1A57\u1A6D-\u1A72\u1B04\u1B3B\u1B3D-\u1B41\u1B43\u1B44\u1B82\u1BA1\u1BA6\u1BA7\u1BAA\u1BE7\u1BEA-\u1BEC\u1BEE\u1BF2\u1BF3\u1C24-\u1C2B\u1C34\u1C35\u1CE1\u1CF7\uA823\uA824\uA827\uA880\uA881\uA8B4-\uA8C3\uA952\uA953\uA983\uA9B4\uA9B5\uA9BA\uA9BB\uA9BE-\uA9C0\uAA2F\uAA30\uAA33\uAA34\uAA4D\uAAEB\uAAEE\uAAEF\uAAF5\uABE3\uABE4\uABE6\uABE7\uABE9\uABEA\uABEC]|\uD804[\uDC00\uDC02\uDC82\uDCB0-\uDCB2\uDCB7\uDCB8\uDD2C\uDD45\uDD46\uDD82\uDDB3-\uDDB5\uDDBF\uDDC0\uDDCE\uDE2C-\uDE2E\uDE32\uDE33\uDE35\uDEE0-\uDEE2\uDF02\uDF03\uDF3F\uDF41-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF62\uDF63]|\uD805[\uDC35-\uDC37\uDC40\uDC41\uDC45\uDCB1\uDCB2\uDCB9\uDCBB\uDCBC\uDCBE\uDCC1\uDDB0\uDDB1\uDDB8-\uDDBB\uDDBE\uDE30-\uDE32\uDE3B\uDE3C\uDE3E\uDEAC\uDEAE\uDEAF\uDEB6\uDF26]|\uD806[\uDC2C-\uDC2E\uDC38\uDD31-\uDD35\uDD37\uDD38\uDD3D\uDD40\uDD42\uDDD1-\uDDD3\uDDDC-\uDDDF\uDDE4\uDE39\uDE57\uDE58\uDE97]|\uD807[\uDC2F\uDC3E\uDCA9\uDCB1\uDCB4\uDD8A-\uDD8E\uDD93\uDD94\uDD96\uDEF5\uDEF6]|\uD81B[\uDF51-\uDF87\uDFF0\uDFF1]|\uD834[\uDD66\uDD6D])$/,
                N = /^[\u1100-\u115F\uA960-\uA97C]$/,
                _ = /^[\u1160-\u11A7\uD7B0-\uD7C6]$/,
                R = /^[\u11A8-\u11FF\uD7CB-\uD7FB]$/,
                T = /^[\uAC00\uAC1C\uAC38\uAC54\uAC70\uAC8C\uACA8\uACC4\uACE0\uACFC\uAD18\uAD34\uAD50\uAD6C\uAD88\uADA4\uADC0\uADDC\uADF8\uAE14\uAE30\uAE4C\uAE68\uAE84\uAEA0\uAEBC\uAED8\uAEF4\uAF10\uAF2C\uAF48\uAF64\uAF80\uAF9C\uAFB8\uAFD4\uAFF0\uB00C\uB028\uB044\uB060\uB07C\uB098\uB0B4\uB0D0\uB0EC\uB108\uB124\uB140\uB15C\uB178\uB194\uB1B0\uB1CC\uB1E8\uB204\uB220\uB23C\uB258\uB274\uB290\uB2AC\uB2C8\uB2E4\uB300\uB31C\uB338\uB354\uB370\uB38C\uB3A8\uB3C4\uB3E0\uB3FC\uB418\uB434\uB450\uB46C\uB488\uB4A4\uB4C0\uB4DC\uB4F8\uB514\uB530\uB54C\uB568\uB584\uB5A0\uB5BC\uB5D8\uB5F4\uB610\uB62C\uB648\uB664\uB680\uB69C\uB6B8\uB6D4\uB6F0\uB70C\uB728\uB744\uB760\uB77C\uB798\uB7B4\uB7D0\uB7EC\uB808\uB824\uB840\uB85C\uB878\uB894\uB8B0\uB8CC\uB8E8\uB904\uB920\uB93C\uB958\uB974\uB990\uB9AC\uB9C8\uB9E4\uBA00\uBA1C\uBA38\uBA54\uBA70\uBA8C\uBAA8\uBAC4\uBAE0\uBAFC\uBB18\uBB34\uBB50\uBB6C\uBB88\uBBA4\uBBC0\uBBDC\uBBF8\uBC14\uBC30\uBC4C\uBC68\uBC84\uBCA0\uBCBC\uBCD8\uBCF4\uBD10\uBD2C\uBD48\uBD64\uBD80\uBD9C\uBDB8\uBDD4\uBDF0\uBE0C\uBE28\uBE44\uBE60\uBE7C\uBE98\uBEB4\uBED0\uBEEC\uBF08\uBF24\uBF40\uBF5C\uBF78\uBF94\uBFB0\uBFCC\uBFE8\uC004\uC020\uC03C\uC058\uC074\uC090\uC0AC\uC0C8\uC0E4\uC100\uC11C\uC138\uC154\uC170\uC18C\uC1A8\uC1C4\uC1E0\uC1FC\uC218\uC234\uC250\uC26C\uC288\uC2A4\uC2C0\uC2DC\uC2F8\uC314\uC330\uC34C\uC368\uC384\uC3A0\uC3BC\uC3D8\uC3F4\uC410\uC42C\uC448\uC464\uC480\uC49C\uC4B8\uC4D4\uC4F0\uC50C\uC528\uC544\uC560\uC57C\uC598\uC5B4\uC5D0\uC5EC\uC608\uC624\uC640\uC65C\uC678\uC694\uC6B0\uC6CC\uC6E8\uC704\uC720\uC73C\uC758\uC774\uC790\uC7AC\uC7C8\uC7E4\uC800\uC81C\uC838\uC854\uC870\uC88C\uC8A8\uC8C4\uC8E0\uC8FC\uC918\uC934\uC950\uC96C\uC988\uC9A4\uC9C0\uC9DC\uC9F8\uCA14\uCA30\uCA4C\uCA68\uCA84\uCAA0\uCABC\uCAD8\uCAF4\uCB10\uCB2C\uCB48\uCB64\uCB80\uCB9C\uCBB8\uCBD4\uCBF0\uCC0C\uCC28\uCC44\uCC60\uCC7C\uCC98\uCCB4\uCCD0\uCCEC\uCD08\uCD24\uCD40\uCD5C\uCD78\uCD94\uCDB0\uCDCC\uCDE8\uCE04\uCE20\uCE3C\uCE58\uCE74\uCE90\uCEAC\uCEC8\uCEE4\uCF00\uCF1C\uCF38\uCF54\uCF70\uCF8C\uCFA8\uCFC4\uCFE0\uCFFC\uD018\uD034\uD050\uD06C\uD088\uD0A4\uD0C0\uD0DC\uD0F8\uD114\uD130\uD14C\uD168\uD184\uD1A0\uD1BC\uD1D8\uD1F4\uD210\uD22C\uD248\uD264\uD280\uD29C\uD2B8\uD2D4\uD2F0\uD30C\uD328\uD344\uD360\uD37C\uD398\uD3B4\uD3D0\uD3EC\uD408\uD424\uD440\uD45C\uD478\uD494\uD4B0\uD4CC\uD4E8\uD504\uD520\uD53C\uD558\uD574\uD590\uD5AC\uD5C8\uD5E4\uD600\uD61C\uD638\uD654\uD670\uD68C\uD6A8\uD6C4\uD6E0\uD6FC\uD718\uD734\uD750\uD76C\uD788]$/,
                S = /^[\uAC01-\uAC1B\uAC1D-\uAC37\uAC39-\uAC53\uAC55-\uAC6F\uAC71-\uAC8B\uAC8D-\uACA7\uACA9-\uACC3\uACC5-\uACDF\uACE1-\uACFB\uACFD-\uAD17\uAD19-\uAD33\uAD35-\uAD4F\uAD51-\uAD6B\uAD6D-\uAD87\uAD89-\uADA3\uADA5-\uADBF\uADC1-\uADDB\uADDD-\uADF7\uADF9-\uAE13\uAE15-\uAE2F\uAE31-\uAE4B\uAE4D-\uAE67\uAE69-\uAE83\uAE85-\uAE9F\uAEA1-\uAEBB\uAEBD-\uAED7\uAED9-\uAEF3\uAEF5-\uAF0F\uAF11-\uAF2B\uAF2D-\uAF47\uAF49-\uAF63\uAF65-\uAF7F\uAF81-\uAF9B\uAF9D-\uAFB7\uAFB9-\uAFD3\uAFD5-\uAFEF\uAFF1-\uB00B\uB00D-\uB027\uB029-\uB043\uB045-\uB05F\uB061-\uB07B\uB07D-\uB097\uB099-\uB0B3\uB0B5-\uB0CF\uB0D1-\uB0EB\uB0ED-\uB107\uB109-\uB123\uB125-\uB13F\uB141-\uB15B\uB15D-\uB177\uB179-\uB193\uB195-\uB1AF\uB1B1-\uB1CB\uB1CD-\uB1E7\uB1E9-\uB203\uB205-\uB21F\uB221-\uB23B\uB23D-\uB257\uB259-\uB273\uB275-\uB28F\uB291-\uB2AB\uB2AD-\uB2C7\uB2C9-\uB2E3\uB2E5-\uB2FF\uB301-\uB31B\uB31D-\uB337\uB339-\uB353\uB355-\uB36F\uB371-\uB38B\uB38D-\uB3A7\uB3A9-\uB3C3\uB3C5-\uB3DF\uB3E1-\uB3FB\uB3FD-\uB417\uB419-\uB433\uB435-\uB44F\uB451-\uB46B\uB46D-\uB487\uB489-\uB4A3\uB4A5-\uB4BF\uB4C1-\uB4DB\uB4DD-\uB4F7\uB4F9-\uB513\uB515-\uB52F\uB531-\uB54B\uB54D-\uB567\uB569-\uB583\uB585-\uB59F\uB5A1-\uB5BB\uB5BD-\uB5D7\uB5D9-\uB5F3\uB5F5-\uB60F\uB611-\uB62B\uB62D-\uB647\uB649-\uB663\uB665-\uB67F\uB681-\uB69B\uB69D-\uB6B7\uB6B9-\uB6D3\uB6D5-\uB6EF\uB6F1-\uB70B\uB70D-\uB727\uB729-\uB743\uB745-\uB75F\uB761-\uB77B\uB77D-\uB797\uB799-\uB7B3\uB7B5-\uB7CF\uB7D1-\uB7EB\uB7ED-\uB807\uB809-\uB823\uB825-\uB83F\uB841-\uB85B\uB85D-\uB877\uB879-\uB893\uB895-\uB8AF\uB8B1-\uB8CB\uB8CD-\uB8E7\uB8E9-\uB903\uB905-\uB91F\uB921-\uB93B\uB93D-\uB957\uB959-\uB973\uB975-\uB98F\uB991-\uB9AB\uB9AD-\uB9C7\uB9C9-\uB9E3\uB9E5-\uB9FF\uBA01-\uBA1B\uBA1D-\uBA37\uBA39-\uBA53\uBA55-\uBA6F\uBA71-\uBA8B\uBA8D-\uBAA7\uBAA9-\uBAC3\uBAC5-\uBADF\uBAE1-\uBAFB\uBAFD-\uBB17\uBB19-\uBB33\uBB35-\uBB4F\uBB51-\uBB6B\uBB6D-\uBB87\uBB89-\uBBA3\uBBA5-\uBBBF\uBBC1-\uBBDB\uBBDD-\uBBF7\uBBF9-\uBC13\uBC15-\uBC2F\uBC31-\uBC4B\uBC4D-\uBC67\uBC69-\uBC83\uBC85-\uBC9F\uBCA1-\uBCBB\uBCBD-\uBCD7\uBCD9-\uBCF3\uBCF5-\uBD0F\uBD11-\uBD2B\uBD2D-\uBD47\uBD49-\uBD63\uBD65-\uBD7F\uBD81-\uBD9B\uBD9D-\uBDB7\uBDB9-\uBDD3\uBDD5-\uBDEF\uBDF1-\uBE0B\uBE0D-\uBE27\uBE29-\uBE43\uBE45-\uBE5F\uBE61-\uBE7B\uBE7D-\uBE97\uBE99-\uBEB3\uBEB5-\uBECF\uBED1-\uBEEB\uBEED-\uBF07\uBF09-\uBF23\uBF25-\uBF3F\uBF41-\uBF5B\uBF5D-\uBF77\uBF79-\uBF93\uBF95-\uBFAF\uBFB1-\uBFCB\uBFCD-\uBFE7\uBFE9-\uC003\uC005-\uC01F\uC021-\uC03B\uC03D-\uC057\uC059-\uC073\uC075-\uC08F\uC091-\uC0AB\uC0AD-\uC0C7\uC0C9-\uC0E3\uC0E5-\uC0FF\uC101-\uC11B\uC11D-\uC137\uC139-\uC153\uC155-\uC16F\uC171-\uC18B\uC18D-\uC1A7\uC1A9-\uC1C3\uC1C5-\uC1DF\uC1E1-\uC1FB\uC1FD-\uC217\uC219-\uC233\uC235-\uC24F\uC251-\uC26B\uC26D-\uC287\uC289-\uC2A3\uC2A5-\uC2BF\uC2C1-\uC2DB\uC2DD-\uC2F7\uC2F9-\uC313\uC315-\uC32F\uC331-\uC34B\uC34D-\uC367\uC369-\uC383\uC385-\uC39F\uC3A1-\uC3BB\uC3BD-\uC3D7\uC3D9-\uC3F3\uC3F5-\uC40F\uC411-\uC42B\uC42D-\uC447\uC449-\uC463\uC465-\uC47F\uC481-\uC49B\uC49D-\uC4B7\uC4B9-\uC4D3\uC4D5-\uC4EF\uC4F1-\uC50B\uC50D-\uC527\uC529-\uC543\uC545-\uC55F\uC561-\uC57B\uC57D-\uC597\uC599-\uC5B3\uC5B5-\uC5CF\uC5D1-\uC5EB\uC5ED-\uC607\uC609-\uC623\uC625-\uC63F\uC641-\uC65B\uC65D-\uC677\uC679-\uC693\uC695-\uC6AF\uC6B1-\uC6CB\uC6CD-\uC6E7\uC6E9-\uC703\uC705-\uC71F\uC721-\uC73B\uC73D-\uC757\uC759-\uC773\uC775-\uC78F\uC791-\uC7AB\uC7AD-\uC7C7\uC7C9-\uC7E3\uC7E5-\uC7FF\uC801-\uC81B\uC81D-\uC837\uC839-\uC853\uC855-\uC86F\uC871-\uC88B\uC88D-\uC8A7\uC8A9-\uC8C3\uC8C5-\uC8DF\uC8E1-\uC8FB\uC8FD-\uC917\uC919-\uC933\uC935-\uC94F\uC951-\uC96B\uC96D-\uC987\uC989-\uC9A3\uC9A5-\uC9BF\uC9C1-\uC9DB\uC9DD-\uC9F7\uC9F9-\uCA13\uCA15-\uCA2F\uCA31-\uCA4B\uCA4D-\uCA67\uCA69-\uCA83\uCA85-\uCA9F\uCAA1-\uCABB\uCABD-\uCAD7\uCAD9-\uCAF3\uCAF5-\uCB0F\uCB11-\uCB2B\uCB2D-\uCB47\uCB49-\uCB63\uCB65-\uCB7F\uCB81-\uCB9B\uCB9D-\uCBB7\uCBB9-\uCBD3\uCBD5-\uCBEF\uCBF1-\uCC0B\uCC0D-\uCC27\uCC29-\uCC43\uCC45-\uCC5F\uCC61-\uCC7B\uCC7D-\uCC97\uCC99-\uCCB3\uCCB5-\uCCCF\uCCD1-\uCCEB\uCCED-\uCD07\uCD09-\uCD23\uCD25-\uCD3F\uCD41-\uCD5B\uCD5D-\uCD77\uCD79-\uCD93\uCD95-\uCDAF\uCDB1-\uCDCB\uCDCD-\uCDE7\uCDE9-\uCE03\uCE05-\uCE1F\uCE21-\uCE3B\uCE3D-\uCE57\uCE59-\uCE73\uCE75-\uCE8F\uCE91-\uCEAB\uCEAD-\uCEC7\uCEC9-\uCEE3\uCEE5-\uCEFF\uCF01-\uCF1B\uCF1D-\uCF37\uCF39-\uCF53\uCF55-\uCF6F\uCF71-\uCF8B\uCF8D-\uCFA7\uCFA9-\uCFC3\uCFC5-\uCFDF\uCFE1-\uCFFB\uCFFD-\uD017\uD019-\uD033\uD035-\uD04F\uD051-\uD06B\uD06D-\uD087\uD089-\uD0A3\uD0A5-\uD0BF\uD0C1-\uD0DB\uD0DD-\uD0F7\uD0F9-\uD113\uD115-\uD12F\uD131-\uD14B\uD14D-\uD167\uD169-\uD183\uD185-\uD19F\uD1A1-\uD1BB\uD1BD-\uD1D7\uD1D9-\uD1F3\uD1F5-\uD20F\uD211-\uD22B\uD22D-\uD247\uD249-\uD263\uD265-\uD27F\uD281-\uD29B\uD29D-\uD2B7\uD2B9-\uD2D3\uD2D5-\uD2EF\uD2F1-\uD30B\uD30D-\uD327\uD329-\uD343\uD345-\uD35F\uD361-\uD37B\uD37D-\uD397\uD399-\uD3B3\uD3B5-\uD3CF\uD3D1-\uD3EB\uD3ED-\uD407\uD409-\uD423\uD425-\uD43F\uD441-\uD45B\uD45D-\uD477\uD479-\uD493\uD495-\uD4AF\uD4B1-\uD4CB\uD4CD-\uD4E7\uD4E9-\uD503\uD505-\uD51F\uD521-\uD53B\uD53D-\uD557\uD559-\uD573\uD575-\uD58F\uD591-\uD5AB\uD5AD-\uD5C7\uD5C9-\uD5E3\uD5E5-\uD5FF\uD601-\uD61B\uD61D-\uD637\uD639-\uD653\uD655-\uD66F\uD671-\uD68B\uD68D-\uD6A7\uD6A9-\uD6C3\uD6C5-\uD6DF\uD6E1-\uD6FB\uD6FD-\uD717\uD719-\uD733\uD735-\uD74F\uD751-\uD76B\uD76D-\uD787\uD789-\uD7A3]$/,
                q = /^(?:[\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u2388\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2605\u2607-\u2612\u2614-\u2685\u2690-\u2705\u2708-\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763-\u2767\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC00-\uDCFF\uDD0D-\uDD0F\uDD2F\uDD6C-\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDAD-\uDDE5\uDE01-\uDE0F\uDE1A\uDE2F\uDE32-\uDE3A\uDE3C-\uDE3F\uDE49-\uDFFA]|\uD83D[\uDC00-\uDD3D\uDD46-\uDE4F\uDE80-\uDEFF\uDF74-\uDF7F\uDFD5-\uDFFF]|\uD83E[\uDC0C-\uDC0F\uDC48-\uDC4F\uDC5A-\uDC5F\uDC88-\uDC8F\uDCAE-\uDCFF\uDD0C-\uDD3A\uDD3C-\uDD45\uDD47-\uDEFF]|\uD83F[\uDC00-\uDFFD])$/,
                V = (u, e) => {
                    var t = n.Any;
                    return -1 !== u.search(P) && (t |= n.Extend), 8205 === e && (t |= n.ZWJ), e >= 127462 && e <= 127487 && (t |= n.RI), -1 !== u.search(k) && (t |= n.Prepend), -1 !== u.search(j) && (t |= n.SpacingMark), -1 !== u.search(N) && (t |= n.L), -1 !== u.search(_) && (t |= n.V), -1 !== u.search(R) && (t |= n.T), -1 !== u.search(T) && (t |= n.LV), -1 !== u.search(S) && (t |= n.LVT), -1 !== u.search(q) && (t |= n.ExtPict), t
                },
                I = [
                    [n.L, n.L | n.V | n.LV | n.LVT],
                    [n.LV | n.V, n.V | n.T],
                    [n.LVT | n.T, n.T],
                    [n.Any, n.Extend | n.ZWJ],
                    [n.Any, n.SpacingMark],
                    [n.Prepend, n.Any],
                    [n.ZWJ, n.ExtPict],
                    [n.RI, n.RI]
                ],
                z = /(?:[\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u2388\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2605\u2607-\u2612\u2614-\u2685\u2690-\u2705\u2708-\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763-\u2767\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC00-\uDCFF\uDD0D-\uDD0F\uDD2F\uDD6C-\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDAD-\uDDE5\uDE01-\uDE0F\uDE1A\uDE2F\uDE32-\uDE3A\uDE3C-\uDE3F\uDE49-\uDFFA]|\uD83D[\uDC00-\uDD3D\uDD46-\uDE4F\uDE80-\uDEFF\uDF74-\uDF7F\uDFD5-\uDFFF]|\uD83E[\uDC0C-\uDC0F\uDC48-\uDC4F\uDC5A-\uDC5F\uDC88-\uDC8F\uDCAE-\uDCFF\uDD0C-\uDD3A\uDD3C-\uDD45\uDD47-\uDEFF]|\uD83F[\uDC00-\uDFFD])(?:[\u0300-\u036F\u0483-\u0489\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u0711\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F3\u07FD\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u08D3-\u08E1\u08E3-\u0902\u093A\u093C\u0941-\u0948\u094D\u0951-\u0957\u0962\u0963\u0981\u09BC\u09BE\u09C1-\u09C4\u09CD\u09D7\u09E2\u09E3\u09FE\u0A01\u0A02\u0A3C\u0A41\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A70\u0A71\u0A75\u0A81\u0A82\u0ABC\u0AC1-\u0AC5\u0AC7\u0AC8\u0ACD\u0AE2\u0AE3\u0AFA-\u0AFF\u0B01\u0B3C\u0B3E\u0B3F\u0B41-\u0B44\u0B4D\u0B55-\u0B57\u0B62\u0B63\u0B82\u0BBE\u0BC0\u0BCD\u0BD7\u0C00\u0C04\u0C3E-\u0C40\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C81\u0CBC\u0CBF\u0CC2\u0CC6\u0CCC\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0D00\u0D01\u0D3B\u0D3C\u0D3E\u0D41-\u0D44\u0D4D\u0D57\u0D62\u0D63\u0D81\u0DCA\u0DCF\u0DD2-\u0DD4\u0DD6\u0DDF\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0EB1\u0EB4-\u0EBC\u0EC8-\u0ECD\u0F18\u0F19\u0F35\u0F37\u0F39\u0F71-\u0F7E\u0F80-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102D-\u1030\u1032-\u1037\u1039\u103A\u103D\u103E\u1058\u1059\u105E-\u1060\u1071-\u1074\u1082\u1085\u1086\u108D\u109D\u135D-\u135F\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17B4\u17B5\u17B7-\u17BD\u17C6\u17C9-\u17D3\u17DD\u180B-\u180D\u1885\u1886\u18A9\u1920-\u1922\u1927\u1928\u1932\u1939-\u193B\u1A17\u1A18\u1A1B\u1A56\u1A58-\u1A5E\u1A60\u1A62\u1A65-\u1A6C\u1A73-\u1A7C\u1A7F\u1AB0-\u1AC0\u1B00-\u1B03\u1B34-\u1B3A\u1B3C\u1B42\u1B6B-\u1B73\u1B80\u1B81\u1BA2-\u1BA5\u1BA8\u1BA9\u1BAB-\u1BAD\u1BE6\u1BE8\u1BE9\u1BED\u1BEF-\u1BF1\u1C2C-\u1C33\u1C36\u1C37\u1CD0-\u1CD2\u1CD4-\u1CE0\u1CE2-\u1CE8\u1CED\u1CF4\u1CF8\u1CF9\u1DC0-\u1DF9\u1DFB-\u1DFF\u200C\u20D0-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\uA66F-\uA672\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA825\uA826\uA82C\uA8C4\uA8C5\uA8E0-\uA8F1\uA8FF\uA926-\uA92D\uA947-\uA951\uA980-\uA982\uA9B3\uA9B6-\uA9B9\uA9BC\uA9BD\uA9E5\uAA29-\uAA2E\uAA31\uAA32\uAA35\uAA36\uAA43\uAA4C\uAA7C\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEC\uAAED\uAAF6\uABE5\uABE8\uABED\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F\uFF9E\uFF9F]|\uD800[\uDDFD\uDEE0\uDF76-\uDF7A]|\uD802[\uDE01-\uDE03\uDE05\uDE06\uDE0C-\uDE0F\uDE38-\uDE3A\uDE3F\uDEE5\uDEE6]|\uD803[\uDD24-\uDD27\uDEAB\uDEAC\uDF46-\uDF50]|\uD804[\uDC01\uDC38-\uDC46\uDC7F-\uDC81\uDCB3-\uDCB6\uDCB9\uDCBA\uDD00-\uDD02\uDD27-\uDD2B\uDD2D-\uDD34\uDD73\uDD80\uDD81\uDDB6-\uDDBE\uDDC9-\uDDCC\uDDCF\uDE2F-\uDE31\uDE34\uDE36\uDE37\uDE3E\uDEDF\uDEE3-\uDEEA\uDF00\uDF01\uDF3B\uDF3C\uDF3E\uDF40\uDF57\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC38-\uDC3F\uDC42-\uDC44\uDC46\uDC5E\uDCB0\uDCB3-\uDCB8\uDCBA\uDCBD\uDCBF\uDCC0\uDCC2\uDCC3\uDDAF\uDDB2-\uDDB5\uDDBC\uDDBD\uDDBF\uDDC0\uDDDC\uDDDD\uDE33-\uDE3A\uDE3D\uDE3F\uDE40\uDEAB\uDEAD\uDEB0-\uDEB5\uDEB7\uDF1D-\uDF1F\uDF22-\uDF25\uDF27-\uDF2B]|\uD806[\uDC2F-\uDC37\uDC39\uDC3A\uDD30\uDD3B\uDD3C\uDD3E\uDD43\uDDD4-\uDDD7\uDDDA\uDDDB\uDDE0\uDE01-\uDE0A\uDE33-\uDE38\uDE3B-\uDE3E\uDE47\uDE51-\uDE56\uDE59-\uDE5B\uDE8A-\uDE96\uDE98\uDE99]|\uD807[\uDC30-\uDC36\uDC38-\uDC3D\uDC3F\uDC92-\uDCA7\uDCAA-\uDCB0\uDCB2\uDCB3\uDCB5\uDCB6\uDD31-\uDD36\uDD3A\uDD3C\uDD3D\uDD3F-\uDD45\uDD47\uDD90\uDD91\uDD95\uDD97\uDEF3\uDEF4]|\uD81A[\uDEF0-\uDEF4\uDF30-\uDF36]|\uD81B[\uDF4F\uDF8F-\uDF92\uDFE4]|\uD82F[\uDC9D\uDC9E]|\uD834[\uDD65\uDD67-\uDD69\uDD6E-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A\uDD30-\uDD36\uDEEC-\uDEEF]|\uD83A[\uDCD0-\uDCD6\uDD44-\uDD4A]|\uD83C[\uDFFB-\uDFFF]|\uDB40[\uDC20-\uDC7F\uDD00-\uDDEF])*\u200D$/,
                L = u => -1 !== u.search(z),
                M = /(?:\uD83C[\uDDE6-\uDDFF])+$/g,
                W = u => {
                    var e = u.match(M);
                    return null !== e && e[0].length / 2 % 2 == 1
                },
                $ = u => (0, a.P)(u) && ur.isNodeList(u.children) && !Q.isEditor(u),
                J = {
                    isAncestor: u => (0, a.P)(u) && ur.isNodeList(u.children),
                    isElement: $,
                    isElementList: u => Array.isArray(u) && u.every(u => J.isElement(u)),
                    isElementProps: u => void 0 !== u.children,
                    isElementType: function(u, e) {
                        var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "type";
                        return $(u) && u[t] === e
                    },
                    matches(u, e) {
                        for (var t in e)
                            if ("children" !== t && u[t] !== e[t]) return !1;
                        return !0
                    }
                },
                Z = ["text"],
                U = ["text"];

            function G(u, e) {
                var t = Object.keys(u);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(u);
                    e && (r = r.filter(function(e) {
                        return Object.getOwnPropertyDescriptor(u, e).enumerable
                    })), t.push.apply(t, r)
                }
                return t
            }

            function H(u) {
                for (var e = 1; e < arguments.length; e++) {
                    var t = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? G(Object(t), !0).forEach(function(e) {
                        i(u, e, t[e])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(u, Object.getOwnPropertyDescriptors(t)) : G(Object(t)).forEach(function(e) {
                        Object.defineProperty(u, e, Object.getOwnPropertyDescriptor(t, e))
                    })
                }
                return u
            }
            var K = new WeakMap,
                Q = {
                    above(u) {
                        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            {
                                voids: t = !1,
                                mode: r = "lowest",
                                at: n = u.selection,
                                match: a
                            } = e;
                        if (n) {
                            var D = Q.path(u, n);
                            for (var [i, o] of Q.levels(u, {
                                    at: D,
                                    voids: t,
                                    match: a,
                                    reverse: "lowest" === r
                                }))
                                if (!uy.isText(i)) {
                                    if (uA.isRange(n)) {
                                        if (ui.isAncestor(o, n.anchor.path) && ui.isAncestor(o, n.focus.path)) return [i, o]
                                    } else if (!ui.equals(D, o)) return [i, o]
                                }
                        }
                    },
                    addMark(u, e, t) {
                        u.addMark(e, t)
                    },
                    after(u, e) {
                        var t, r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                            n = Q.point(u, e, {
                                edge: "end"
                            }),
                            a = Q.end(u, []),
                            {
                                distance: D = 1
                            } = r,
                            i = 0;
                        for (var o of Q.positions(u, H(H({}, r), {}, {
                                at: {
                                    anchor: n,
                                    focus: a
                                }
                            }))) {
                            if (i > D) break;
                            0 !== i && (t = o), i++
                        }
                        return t
                    },
                    before(u, e) {
                        var t, r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                            n = Q.start(u, []),
                            a = Q.point(u, e, {
                                edge: "start"
                            }),
                            {
                                distance: D = 1
                            } = r,
                            i = 0;
                        for (var o of Q.positions(u, H(H({}, r), {}, {
                                at: {
                                    anchor: n,
                                    focus: a
                                },
                                reverse: !0
                            }))) {
                            if (i > D) break;
                            0 !== i && (t = o), i++
                        }
                        return t
                    },
                    deleteBackward(u) {
                        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            {
                                unit: t = "character"
                            } = e;
                        u.deleteBackward(t)
                    },
                    deleteForward(u) {
                        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            {
                                unit: t = "character"
                            } = e;
                        u.deleteForward(t)
                    },
                    deleteFragment(u) {
                        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            {
                                direction: t = "forward"
                            } = e;
                        u.deleteFragment(t)
                    },
                    edges: (u, e) => [Q.start(u, e), Q.end(u, e)],
                    end: (u, e) => Q.point(u, e, {
                        edge: "end"
                    }),
                    first(u, e) {
                        var t = Q.path(u, e, {
                            edge: "start"
                        });
                        return Q.node(u, t)
                    },
                    fragment(u, e) {
                        var t = Q.range(u, e);
                        return ur.fragment(u, t)
                    },
                    hasBlocks: (u, e) => e.children.some(e => J.isElement(e) && Q.isBlock(u, e)),
                    hasInlines: (u, e) => e.children.some(e => uy.isText(e) || Q.isInline(u, e)),
                    hasTexts: (u, e) => e.children.every(u => uy.isText(u)),
                    insertBreak(u) {
                        u.insertBreak()
                    },
                    insertSoftBreak(u) {
                        u.insertSoftBreak()
                    },
                    insertFragment(u, e) {
                        u.insertFragment(e)
                    },
                    insertNode(u, e) {
                        u.insertNode(e)
                    },
                    insertText(u, e) {
                        u.insertText(e)
                    },
                    isBlock: (u, e) => !u.isInline(e),
                    isEditor(u) {
                        var e = K.get(u);
                        if (void 0 !== e) return e;
                        if (!(0, a.P)(u)) return !1;
                        var t = "function" == typeof u.addMark && "function" == typeof u.apply && "function" == typeof u.deleteBackward && "function" == typeof u.deleteForward && "function" == typeof u.deleteFragment && "function" == typeof u.insertBreak && "function" == typeof u.insertSoftBreak && "function" == typeof u.insertFragment && "function" == typeof u.insertNode && "function" == typeof u.insertText && "function" == typeof u.isInline && "function" == typeof u.isVoid && "function" == typeof u.normalizeNode && "function" == typeof u.onChange && "function" == typeof u.removeMark && "function" == typeof u.getDirtyPaths && (null === u.marks || (0, a.P)(u.marks)) && (null === u.selection || uA.isRange(u.selection)) && ur.isNodeList(u.children) && uD.isOperationList(u.operations);
                        return K.set(u, t), t
                    },
                    isEnd(u, e, t) {
                        var r = Q.end(u, t);
                        return ul.equals(e, r)
                    },
                    isEdge: (u, e, t) => Q.isStart(u, e, t) || Q.isEnd(u, e, t),
                    isEmpty(u, e) {
                        var {
                            children: t
                        } = e, [r] = t;
                        return 0 === t.length || 1 === t.length && uy.isText(r) && "" === r.text && !u.isVoid(e)
                    },
                    isInline: (u, e) => u.isInline(e),
                    isNormalizing(u) {
                        var e = l.get(u);
                        return void 0 === e || e
                    },
                    isStart(u, e, t) {
                        if (0 !== e.offset) return !1;
                        var r = Q.start(u, t);
                        return ul.equals(e, r)
                    },
                    isVoid: (u, e) => u.isVoid(e),
                    last(u, e) {
                        var t = Q.path(u, e, {
                            edge: "end"
                        });
                        return Q.node(u, t)
                    },
                    leaf(u, e) {
                        var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                            r = Q.path(u, e, t);
                        return [ur.leaf(u, r), r]
                    },
                    * levels(u) {
                        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            {
                                at: t = u.selection,
                                reverse: r = !1,
                                voids: n = !1
                            } = e,
                            {
                                match: a
                            } = e;
                        if (null == a && (a = () => !0), t) {
                            var D = [],
                                i = Q.path(u, t);
                            for (var [o, s] of ur.levels(u, i))
                                if (a(o, s) && (D.push([o, s]), !n && J.isElement(o) && Q.isVoid(u, o))) break;
                            r && D.reverse(), yield* D
                        }
                    },
                    marks(u) {
                        var {
                            marks: e,
                            selection: t
                        } = u;
                        if (!t) return null;
                        if (e) return e;
                        if (uA.isExpanded(t)) {
                            var [r] = Q.nodes(u, {
                                match: uy.isText
                            });
                            if (!r) return {};
                            var [n] = r;
                            return E(n, Z)
                        }
                        var {
                            anchor: a
                        } = t, {
                            path: D
                        } = a, [i] = Q.leaf(u, D);
                        if (0 === a.offset) {
                            var o = Q.previous(u, {
                                at: D,
                                match: uy.isText
                            });
                            if (!Q.above(u, {
                                    match: e => J.isElement(e) && Q.isVoid(u, e) && u.markableVoid(e)
                                })) {
                                var s = Q.above(u, {
                                    match: e => J.isElement(e) && Q.isBlock(u, e)
                                });
                                if (o && s) {
                                    var [C, l] = o, [, B] = s;
                                    ui.isAncestor(B, l) && (i = C)
                                }
                            }
                        }
                        return E(i, U)
                    },
                    next(u) {
                        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            {
                                mode: t = "lowest",
                                voids: r = !1
                            } = e,
                            {
                                match: n,
                                at: a = u.selection
                            } = e;
                        if (a) {
                            var D = Q.after(u, a, {
                                voids: r
                            });
                            if (D) {
                                var [, i] = Q.last(u, []), o = [D.path, i];
                                if (ui.isPath(a) && 0 === a.length) throw Error("Cannot get the next node from the root node!");
                                if (null == n) {
                                    if (ui.isPath(a)) {
                                        var [s] = Q.parent(u, a);
                                        n = u => s.children.includes(u)
                                    } else n = () => !0
                                }
                                var [C] = Q.nodes(u, {
                                    at: o,
                                    match: n,
                                    mode: t,
                                    voids: r
                                });
                                return C
                            }
                        }
                    },
                    node(u, e) {
                        var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                            r = Q.path(u, e, t);
                        return [ur.get(u, r), r]
                    },
                    * nodes(u) {
                        var e, t, r, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            {
                                at: a = u.selection,
                                mode: D = "all",
                                universal: i = !1,
                                reverse: o = !1,
                                voids: s = !1
                            } = n,
                            {
                                match: C
                            } = n;
                        if (C || (C = () => !0), a) {
                            if (Y.isSpan(a)) e = a[0], t = a[1];
                            else {
                                var l = Q.path(u, a, {
                                        edge: "start"
                                    }),
                                    B = Q.path(u, a, {
                                        edge: "end"
                                    });
                                e = o ? B : l, t = o ? l : B
                            }
                            var c = ur.nodes(u, {
                                    reverse: o,
                                    from: e,
                                    to: t,
                                    pass: e => {
                                        var [t] = e;
                                        return !s && J.isElement(t) && Q.isVoid(u, t)
                                    }
                                }),
                                f = [];
                            for (var [A, h] of c) {
                                var F = r && 0 === ui.compare(h, r[1]);
                                if ("highest" !== D || !F) {
                                    if (!C(A, h)) {
                                        if (i && !F && uy.isText(A)) return;
                                        continue
                                    }
                                    if ("lowest" === D && F) {
                                        r = [A, h];
                                        continue
                                    }
                                    var E = "lowest" === D ? r : [A, h];
                                    E && (i ? f.push(E) : yield E), r = [A, h]
                                }
                            }
                            "lowest" === D && r && (i ? f.push(r) : yield r), i && (yield* f)
                        }
                    },
                    normalize(u) {
                        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            {
                                force: t = !1,
                                operation: r
                            } = e,
                            n = u => o.get(u) || [],
                            a = u => s.get(u) || new Set,
                            D = u => {
                                var e = n(u).pop(),
                                    t = e.join(",");
                                return a(u).delete(t), e
                            };
                        if (Q.isNormalizing(u)) {
                            if (t) {
                                var i = Array.from(ur.nodes(u), u => {
                                        var [, e] = u;
                                        return e
                                    }),
                                    C = new Set(i.map(u => u.join(",")));
                                o.set(u, i), s.set(u, C)
                            }
                            0 !== n(u).length && Q.withoutNormalizing(u, () => {
                                for (var e of n(u))
                                    if (ur.has(u, e)) {
                                        var t = Q.node(u, e),
                                            [a, i] = t;
                                        J.isElement(a) && 0 === a.children.length && u.normalizeNode(t, {
                                            operation: r
                                        })
                                    }
                                for (var o = n(u), s = o.length, C = 0; 0 !== o.length;) {
                                    if (!u.shouldNormalize({
                                            dirtyPaths: o,
                                            iteration: C,
                                            initialDirtyPathsLength: s,
                                            operation: r
                                        })) return;
                                    var l = D(u);
                                    if (ur.has(u, l)) {
                                        var B = Q.node(u, l);
                                        u.normalizeNode(B, {
                                            operation: r
                                        })
                                    }
                                    C++, o = n(u)
                                }
                            })
                        }
                    },
                    parent(u, e) {
                        var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                            r = Q.path(u, e, t),
                            n = ui.parent(r);
                        return Q.node(u, n)
                    },
                    path(u, e) {
                        var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                            {
                                depth: r,
                                edge: n
                            } = t;
                        if (ui.isPath(e)) {
                            if ("start" === n) {
                                var [, a] = ur.first(u, e);
                                e = a
                            } else if ("end" === n) {
                                var [, D] = ur.last(u, e);
                                e = D
                            }
                        }
                        return uA.isRange(e) && (e = "start" === n ? uA.start(e) : "end" === n ? uA.end(e) : ui.common(e.anchor.path, e.focus.path)), ul.isPoint(e) && (e = e.path), null != r && (e = e.slice(0, r)), e
                    },
                    hasPath: (u, e) => ur.has(u, e),
                    pathRef(u, e) {
                        var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                            {
                                affinity: r = "forward"
                            } = t,
                            n = {
                                current: e,
                                affinity: r,
                                unref() {
                                    var {
                                        current: e
                                    } = n;
                                    return Q.pathRefs(u).delete(n), n.current = null, e
                                }
                            };
                        return Q.pathRefs(u).add(n), n
                    },
                    pathRefs(u) {
                        var e = B.get(u);
                        return e || (e = new Set, B.set(u, e)), e
                    },
                    point(u, e) {
                        var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                            {
                                edge: r = "start"
                            } = t;
                        if (ui.isPath(e)) {
                            if ("end" === r) {
                                var n, [, a] = ur.last(u, e);
                                n = a
                            } else {
                                var [, D] = ur.first(u, e);
                                n = D
                            }
                            var i = ur.get(u, n);
                            if (!uy.isText(i)) throw Error("Cannot get the ".concat(r, " point in the node at path [").concat(e, "] because it has no ").concat(r, " text node."));
                            return {
                                path: n,
                                offset: "end" === r ? i.text.length : 0
                            }
                        }
                        if (uA.isRange(e)) {
                            var [o, s] = uA.edges(e);
                            return "start" === r ? o : s
                        }
                        return e
                    },
                    pointRef(u, e) {
                        var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                            {
                                affinity: r = "forward"
                            } = t,
                            n = {
                                current: e,
                                affinity: r,
                                unref() {
                                    var {
                                        current: e
                                    } = n;
                                    return Q.pointRefs(u).delete(n), n.current = null, e
                                }
                            };
                        return Q.pointRefs(u).add(n), n
                    },
                    pointRefs(u) {
                        var e = c.get(u);
                        return e || (e = new Set, c.set(u, e)), e
                    },
                    * positions(u) {
                        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            {
                                at: t = u.selection,
                                unit: r = "offset",
                                reverse: n = !1,
                                voids: a = !1
                            } = e;
                        if (t) {
                            var D = Q.range(u, t),
                                [i, o] = uA.edges(D),
                                s = n ? o : i,
                                C = !1,
                                l = "",
                                B = 0,
                                c = 0,
                                f = 0;
                            for (var [A, h] of Q.nodes(u, {
                                    at: t,
                                    reverse: n,
                                    voids: a
                                })) {
                                if (J.isElement(A)) {
                                    if (!a && u.isVoid(A)) {
                                        yield Q.start(u, h);
                                        continue
                                    }
                                    if (u.isInline(A)) continue;
                                    if (Q.hasInlines(u, A)) {
                                        var F = ui.isAncestor(h, o.path) ? o : Q.end(u, h),
                                            E = ui.isAncestor(h, i.path) ? i : Q.start(u, h);
                                        l = Q.string(u, {
                                            anchor: E,
                                            focus: F
                                        }, {
                                            voids: a
                                        }), C = !0
                                    }
                                }
                                if (uy.isText(A)) {
                                    var p, v = ui.equals(h, s.path);
                                    for (v ? (c = n ? s.offset : A.text.length - s.offset, f = s.offset) : (c = A.text.length, f = n ? c : 0), (v || C || "offset" === r) && (yield {
                                            path: h,
                                            offset: f
                                        }, C = !1);;) {
                                        if (0 === B) {
                                            if ("" === l) break;
                                            p = l, B = "character" === r ? d(p, n) : "word" === r ? m(p, n) : "line" === r || "block" === r ? p.length : 1, l = y(l, B, n)[1]
                                        }
                                        if (f = n ? f - B : f + B, (c -= B) < 0) {
                                            B = -c;
                                            break
                                        }
                                        B = 0, yield {
                                            path: h,
                                            offset: f
                                        }
                                    }
                                }
                            }
                        }
                    },
                    previous(u) {
                        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            {
                                mode: t = "lowest",
                                voids: r = !1
                            } = e,
                            {
                                match: n,
                                at: a = u.selection
                            } = e;
                        if (a) {
                            var D = Q.before(u, a, {
                                voids: r
                            });
                            if (D) {
                                var [, i] = Q.first(u, []), o = [D.path, i];
                                if (ui.isPath(a) && 0 === a.length) throw Error("Cannot get the previous node from the root node!");
                                if (null == n) {
                                    if (ui.isPath(a)) {
                                        var [s] = Q.parent(u, a);
                                        n = u => s.children.includes(u)
                                    } else n = () => !0
                                }
                                var [C] = Q.nodes(u, {
                                    reverse: !0,
                                    at: o,
                                    match: n,
                                    mode: t,
                                    voids: r
                                });
                                return C
                            }
                        }
                    },
                    range: (u, e, t) => uA.isRange(e) && !t ? e : {
                        anchor: Q.start(u, e),
                        focus: Q.end(u, t || e)
                    },
                    rangeRef(u, e) {
                        var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                            {
                                affinity: r = "forward"
                            } = t,
                            n = {
                                current: e,
                                affinity: r,
                                unref() {
                                    var {
                                        current: e
                                    } = n;
                                    return Q.rangeRefs(u).delete(n), n.current = null, e
                                }
                            };
                        return Q.rangeRefs(u).add(n), n
                    },
                    rangeRefs(u) {
                        var e = f.get(u);
                        return e || (e = new Set, f.set(u, e)), e
                    },
                    removeMark(u, e) {
                        u.removeMark(e)
                    },
                    setNormalizing(u, e) {
                        l.set(u, e)
                    },
                    start: (u, e) => Q.point(u, e, {
                        edge: "start"
                    }),
                    string(u, e) {
                        var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                            {
                                voids: r = !1
                            } = t,
                            n = Q.range(u, e),
                            [a, D] = uA.edges(n),
                            i = "";
                        for (var [o, s] of Q.nodes(u, {
                                at: n,
                                match: uy.isText,
                                voids: r
                            })) {
                            var C = o.text;
                            ui.equals(s, D.path) && (C = C.slice(0, D.offset)), ui.equals(s, a.path) && (C = C.slice(a.offset)), i += C
                        }
                        return i
                    },
                    unhangRange(u, e) {
                        var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                            {
                                voids: r = !1
                            } = t,
                            [n, a] = uA.edges(e);
                        if (0 !== n.offset || 0 !== a.offset || uA.isCollapsed(e) || ui.hasPrevious(a.path)) return e;
                        var D = Q.above(u, {
                                at: a,
                                match: e => J.isElement(e) && Q.isBlock(u, e),
                                voids: r
                            }),
                            i = D ? D[1] : [],
                            o = {
                                anchor: Q.start(u, n),
                                focus: a
                            },
                            s = !0;
                        for (var [C, l] of Q.nodes(u, {
                                at: o,
                                match: uy.isText,
                                reverse: !0,
                                voids: r
                            })) {
                            if (s) {
                                s = !1;
                                continue
                            }
                            if ("" !== C.text || ui.isBefore(l, i)) {
                                a = {
                                    path: l,
                                    offset: C.text.length
                                };
                                break
                            }
                        }
                        return {
                            anchor: n,
                            focus: a
                        }
                    },
                    void(u) {
                        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        return Q.above(u, H(H({}, e), {}, {
                            match: e => J.isElement(e) && Q.isVoid(u, e)
                        }))
                    },
                    withoutNormalizing(u, e) {
                        var t = Q.isNormalizing(u);
                        Q.setNormalizing(u, !1);
                        try {
                            e()
                        } finally {
                            Q.setNormalizing(u, t)
                        }
                        Q.normalize(u)
                    }
                },
                X = {
                    isLocation: u => ui.isPath(u) || ul.isPoint(u) || uA.isRange(u)
                },
                Y = {
                    isSpan: u => Array.isArray(u) && 2 === u.length && u.every(ui.isPath)
                },
                uu = ["children"],
                ue = ["text"],
                ut = new WeakMap,
                ur = {
                    ancestor(u, e) {
                        var t = ur.get(u, e);
                        if (uy.isText(t)) throw Error("Cannot get the ancestor node at path [".concat(e, "] because it refers to a text node instead: ").concat(uE.stringify(t)));
                        return t
                    },
                    * ancestors(u, e) {
                        var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                        for (var r of ui.ancestors(e, t)) {
                            var n = [ur.ancestor(u, r), r];
                            yield n
                        }
                    },
                    child(u, e) {
                        if (uy.isText(u)) throw Error("Cannot get the child of a text node: ".concat(uE.stringify(u)));
                        var t = u.children[e];
                        if (null == t) throw Error("Cannot get child at index `".concat(e, "` in node: ").concat(uE.stringify(u)));
                        return t
                    },
                    * children(u, e) {
                        for (var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, {
                                reverse: r = !1
                            } = t, n = ur.ancestor(u, e), {
                                children: a
                            } = n, D = r ? a.length - 1 : 0; r ? D >= 0 : D < a.length;) {
                            var i = ur.child(n, D),
                                o = e.concat(D);
                            yield [i, o], D = r ? D - 1 : D + 1
                        }
                    },
                    common(u, e, t) {
                        var r = ui.common(e, t);
                        return [ur.get(u, r), r]
                    },
                    descendant(u, e) {
                        var t = ur.get(u, e);
                        if (Q.isEditor(t)) throw Error("Cannot get the descendant node at path [".concat(e, "] because it refers to the root editor node instead: ").concat(uE.stringify(t)));
                        return t
                    },
                    * descendants(u) {
                        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        for (var [t, r] of ur.nodes(u, e)) 0 !== r.length && (yield [t, r])
                    },
                    * elements(u) {
                        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        for (var [t, r] of ur.nodes(u, e)) J.isElement(t) && (yield [t, r])
                    },
                    extractProps(u) {
                        if (J.isAncestor(u)) {
                            var e = E(u, uu);
                            return e
                        }
                        var e = E(u, ue);
                        return e
                    },
                    first(u, e) {
                        for (var t = e.slice(), r = ur.get(u, t); r && !uy.isText(r) && 0 !== r.children.length;) r = r.children[0], t.push(0);
                        return [r, t]
                    },
                    fragment(u, e) {
                        if (uy.isText(u)) throw Error("Cannot get a fragment starting from a root text node: ".concat(uE.stringify(u)));
                        return (0, D.Uy)({
                            children: u.children
                        }, u => {
                            var [t, r] = uA.edges(e);
                            for (var [, n] of ur.nodes(u, {
                                    reverse: !0,
                                    pass: u => {
                                        var [, t] = u;
                                        return !uA.includes(e, t)
                                    }
                                })) {
                                if (!uA.includes(e, n)) {
                                    var a = ur.parent(u, n),
                                        D = n[n.length - 1];
                                    a.children.splice(D, 1)
                                }
                                if (ui.equals(n, r.path)) {
                                    var i = ur.leaf(u, n);
                                    i.text = i.text.slice(0, r.offset)
                                }
                                if (ui.equals(n, t.path)) {
                                    var o = ur.leaf(u, n);
                                    o.text = o.text.slice(t.offset)
                                }
                            }
                            Q.isEditor(u) && (u.selection = null)
                        }).children
                    },
                    get(u, e) {
                        for (var t = u, r = 0; r < e.length; r++) {
                            var n = e[r];
                            if (uy.isText(t) || !t.children[n]) throw Error("Cannot find a descendant at path [".concat(e, "] in node: ").concat(uE.stringify(u)));
                            t = t.children[n]
                        }
                        return t
                    },
                    has(u, e) {
                        for (var t = u, r = 0; r < e.length; r++) {
                            var n = e[r];
                            if (uy.isText(t) || !t.children[n]) return !1;
                            t = t.children[n]
                        }
                        return !0
                    },
                    isNode: u => uy.isText(u) || J.isElement(u) || Q.isEditor(u),
                    isNodeList(u) {
                        if (!Array.isArray(u)) return !1;
                        var e = ut.get(u);
                        if (void 0 !== e) return e;
                        var t = u.every(u => ur.isNode(u));
                        return ut.set(u, t), t
                    },
                    last(u, e) {
                        for (var t = e.slice(), r = ur.get(u, t); r && !uy.isText(r) && 0 !== r.children.length;) {
                            var n = r.children.length - 1;
                            r = r.children[n], t.push(n)
                        }
                        return [r, t]
                    },
                    leaf(u, e) {
                        var t = ur.get(u, e);
                        if (!uy.isText(t)) throw Error("Cannot get the leaf node at path [".concat(e, "] because it refers to a non-leaf node: ").concat(uE.stringify(t)));
                        return t
                    },
                    * levels(u, e) {
                        var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                        for (var r of ui.levels(e, t)) {
                            var n = ur.get(u, r);
                            yield [n, r]
                        }
                    },
                    matches: (u, e) => J.isElement(u) && J.isElementProps(e) && J.matches(u, e) || uy.isText(u) && uy.isTextProps(e) && uy.matches(u, e),
                    * nodes(u) {
                        for (var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, {
                                pass: t,
                                reverse: r = !1
                            } = e, {
                                from: n = [],
                                to: a
                            } = e, D = new Set, i = [], o = u; !(a && (r ? ui.isBefore(i, a) : ui.isAfter(i, a)));) {
                            if (D.has(o) || (yield [o, i]), !D.has(o) && !uy.isText(o) && 0 !== o.children.length && (null == t || !1 === t([o, i]))) {
                                D.add(o);
                                var s = r ? o.children.length - 1 : 0;
                                ui.isAncestor(i, n) && (s = n[i.length]), i = i.concat(s), o = ur.get(u, i);
                                continue
                            }
                            if (0 === i.length) break;
                            if (!r) {
                                var C = ui.next(i);
                                if (ur.has(u, C)) {
                                    i = C, o = ur.get(u, i);
                                    continue
                                }
                            }
                            if (r && 0 !== i[i.length - 1]) {
                                i = ui.previous(i), o = ur.get(u, i);
                                continue
                            }
                            i = ui.parent(i), o = ur.get(u, i), D.add(o)
                        }
                    },
                    parent(u, e) {
                        var t = ui.parent(e),
                            r = ur.get(u, t);
                        if (uy.isText(r)) throw Error("Cannot get the parent of path [".concat(e, "] because it does not exist in the root."));
                        return r
                    },
                    string: u => uy.isText(u) ? u.text : u.children.map(ur.string).join(""),
                    * texts(u) {
                        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        for (var [t, r] of ur.nodes(u, e)) uy.isText(t) && (yield [t, r])
                    }
                };

            function un(u, e) {
                var t = Object.keys(u);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(u);
                    e && (r = r.filter(function(e) {
                        return Object.getOwnPropertyDescriptor(u, e).enumerable
                    })), t.push.apply(t, r)
                }
                return t
            }

            function ua(u) {
                for (var e = 1; e < arguments.length; e++) {
                    var t = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? un(Object(t), !0).forEach(function(e) {
                        i(u, e, t[e])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(u, Object.getOwnPropertyDescriptors(t)) : un(Object(t)).forEach(function(e) {
                        Object.defineProperty(u, e, Object.getOwnPropertyDescriptor(t, e))
                    })
                }
                return u
            }
            var uD = {
                    isNodeOperation: u => uD.isOperation(u) && u.type.endsWith("_node"),
                    isOperation(u) {
                        if (!(0, a.P)(u)) return !1;
                        switch (u.type) {
                            case "insert_node":
                            case "remove_node":
                                return ui.isPath(u.path) && ur.isNode(u.node);
                            case "insert_text":
                            case "remove_text":
                                return "number" == typeof u.offset && "string" == typeof u.text && ui.isPath(u.path);
                            case "merge_node":
                                return "number" == typeof u.position && ui.isPath(u.path) && (0, a.P)(u.properties);
                            case "move_node":
                                return ui.isPath(u.path) && ui.isPath(u.newPath);
                            case "set_node":
                                return ui.isPath(u.path) && (0, a.P)(u.properties) && (0, a.P)(u.newProperties);
                            case "set_selection":
                                return null === u.properties && uA.isRange(u.newProperties) || null === u.newProperties && uA.isRange(u.properties) || (0, a.P)(u.properties) && (0, a.P)(u.newProperties);
                            case "split_node":
                                return ui.isPath(u.path) && "number" == typeof u.position && (0, a.P)(u.properties);
                            default:
                                return !1
                        }
                    },
                    isOperationList: u => Array.isArray(u) && u.every(u => uD.isOperation(u)),
                    isSelectionOperation: u => uD.isOperation(u) && u.type.endsWith("_selection"),
                    isTextOperation: u => uD.isOperation(u) && u.type.endsWith("_text"),
                    inverse(u) {
                        switch (u.type) {
                            case "insert_node":
                                return ua(ua({}, u), {}, {
                                    type: "remove_node"
                                });
                            case "insert_text":
                                return ua(ua({}, u), {}, {
                                    type: "remove_text"
                                });
                            case "merge_node":
                                return ua(ua({}, u), {}, {
                                    type: "split_node",
                                    path: ui.previous(u.path)
                                });
                            case "move_node":
                                var {
                                    newPath: e,
                                    path: t
                                } = u;
                                if (ui.equals(e, t)) return u;
                                if (ui.isSibling(t, e)) return ua(ua({}, u), {}, {
                                    path: e,
                                    newPath: t
                                });
                                var r = ui.transform(t, u),
                                    n = ui.transform(ui.next(t), u);
                                return ua(ua({}, u), {}, {
                                    path: r,
                                    newPath: n
                                });
                            case "remove_node":
                                return ua(ua({}, u), {}, {
                                    type: "insert_node"
                                });
                            case "remove_text":
                                return ua(ua({}, u), {}, {
                                    type: "insert_text"
                                });
                            case "set_node":
                                var {
                                    properties: a,
                                    newProperties: D
                                } = u;
                                return ua(ua({}, u), {}, {
                                    properties: D,
                                    newProperties: a
                                });
                            case "set_selection":
                                var {
                                    properties: i,
                                    newProperties: o
                                } = u;
                                if (null == i) return ua(ua({}, u), {}, {
                                    properties: o,
                                    newProperties: null
                                });
                                if (null == o) return ua(ua({}, u), {}, {
                                    properties: null,
                                    newProperties: i
                                });
                                return ua(ua({}, u), {}, {
                                    properties: o,
                                    newProperties: i
                                });
                            case "split_node":
                                return ua(ua({}, u), {}, {
                                    type: "merge_node",
                                    path: ui.next(u.path)
                                })
                        }
                    }
                },
                ui = {
                    ancestors(u) {
                        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            {
                                reverse: t = !1
                            } = e,
                            r = ui.levels(u, e);
                        return t ? r.slice(1) : r.slice(0, -1)
                    },
                    common(u, e) {
                        for (var t = [], r = 0; r < u.length && r < e.length; r++) {
                            var n = u[r];
                            if (n !== e[r]) break;
                            t.push(n)
                        }
                        return t
                    },
                    compare(u, e) {
                        for (var t = Math.min(u.length, e.length), r = 0; r < t; r++) {
                            if (u[r] < e[r]) return -1;
                            if (u[r] > e[r]) return 1
                        }
                        return 0
                    },
                    endsAfter(u, e) {
                        var t = u.length - 1,
                            r = u.slice(0, t),
                            n = e.slice(0, t),
                            a = u[t],
                            D = e[t];
                        return ui.equals(r, n) && a > D
                    },
                    endsAt(u, e) {
                        var t = u.length,
                            r = u.slice(0, t),
                            n = e.slice(0, t);
                        return ui.equals(r, n)
                    },
                    endsBefore(u, e) {
                        var t = u.length - 1,
                            r = u.slice(0, t),
                            n = e.slice(0, t),
                            a = u[t],
                            D = e[t];
                        return ui.equals(r, n) && a < D
                    },
                    equals: (u, e) => u.length === e.length && u.every((u, t) => u === e[t]),
                    hasPrevious: u => u[u.length - 1] > 0,
                    isAfter: (u, e) => 1 === ui.compare(u, e),
                    isAncestor: (u, e) => u.length < e.length && 0 === ui.compare(u, e),
                    isBefore: (u, e) => -1 === ui.compare(u, e),
                    isChild: (u, e) => u.length === e.length + 1 && 0 === ui.compare(u, e),
                    isCommon: (u, e) => u.length <= e.length && 0 === ui.compare(u, e),
                    isDescendant: (u, e) => u.length > e.length && 0 === ui.compare(u, e),
                    isParent: (u, e) => u.length + 1 === e.length && 0 === ui.compare(u, e),
                    isPath: u => Array.isArray(u) && (0 === u.length || "number" == typeof u[0]),
                    isSibling(u, e) {
                        if (u.length !== e.length) return !1;
                        var t = u.slice(0, -1),
                            r = e.slice(0, -1);
                        return u[u.length - 1] !== e[e.length - 1] && ui.equals(t, r)
                    },
                    levels(u) {
                        for (var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, {
                                reverse: t = !1
                            } = e, r = [], n = 0; n <= u.length; n++) r.push(u.slice(0, n));
                        return t && r.reverse(), r
                    },
                    next(u) {
                        if (0 === u.length) throw Error("Cannot get the next path of a root path [".concat(u, "], because it has no next index."));
                        var e = u[u.length - 1];
                        return u.slice(0, -1).concat(e + 1)
                    },
                    operationCanTransformPath(u) {
                        switch (u.type) {
                            case "insert_node":
                            case "remove_node":
                            case "merge_node":
                            case "split_node":
                            case "move_node":
                                return !0;
                            default:
                                return !1
                        }
                    },
                    parent(u) {
                        if (0 === u.length) throw Error("Cannot get the parent path of the root path [".concat(u, "]."));
                        return u.slice(0, -1)
                    },
                    previous(u) {
                        if (0 === u.length) throw Error("Cannot get the previous path of a root path [".concat(u, "], because it has no previous index."));
                        var e = u[u.length - 1];
                        if (e <= 0) throw Error("Cannot get the previous path of a first child path [".concat(u, "] because it would result in a negative index."));
                        return u.slice(0, -1).concat(e - 1)
                    },
                    relative(u, e) {
                        if (!ui.isAncestor(e, u) && !ui.equals(u, e)) throw Error("Cannot get the relative path of [".concat(u, "] inside ancestor [").concat(e, "], because it is not above or equal to the path."));
                        return u.slice(e.length)
                    },
                    transform(u, e) {
                        var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                        if (!u) return null;
                        var r = [...u],
                            {
                                affinity: n = "forward"
                            } = t;
                        if (0 === u.length) return r;
                        switch (e.type) {
                            case "insert_node":
                                var {
                                    path: a
                                } = e;
                                (ui.equals(a, r) || ui.endsBefore(a, r) || ui.isAncestor(a, r)) && (r[a.length - 1] += 1);
                                break;
                            case "remove_node":
                                var {
                                    path: D
                                } = e;
                                if (ui.equals(D, r) || ui.isAncestor(D, r)) return null;
                                ui.endsBefore(D, r) && (r[D.length - 1] -= 1);
                                break;
                            case "merge_node":
                                var {
                                    path: i,
                                    position: o
                                } = e;
                                ui.equals(i, r) || ui.endsBefore(i, r) ? r[i.length - 1] -= 1 : ui.isAncestor(i, r) && (r[i.length - 1] -= 1, r[i.length] += o);
                                break;
                            case "split_node":
                                var {
                                    path: s,
                                    position: C
                                } = e;
                                if (ui.equals(s, r)) {
                                    if ("forward" === n) r[r.length - 1] += 1;
                                    else if ("backward" !== n) return null
                                } else ui.endsBefore(s, r) ? r[s.length - 1] += 1 : ui.isAncestor(s, r) && u[s.length] >= C && (r[s.length - 1] += 1, r[s.length] -= C);
                                break;
                            case "move_node":
                                var {
                                    path: l,
                                    newPath: B
                                } = e;
                                if (ui.equals(l, B)) break;
                                if (ui.isAncestor(l, r) || ui.equals(l, r)) {
                                    var c = B.slice();
                                    return ui.endsBefore(l, B) && l.length < B.length && (c[l.length - 1] -= 1), c.concat(r.slice(l.length))
                                }
                                ui.isSibling(l, B) && (ui.isAncestor(B, r) || ui.equals(B, r)) ? ui.endsBefore(l, r) ? r[l.length - 1] -= 1 : r[l.length - 1] += 1 : ui.endsBefore(B, r) || ui.equals(B, r) || ui.isAncestor(B, r) ? (ui.endsBefore(l, r) && (r[l.length - 1] -= 1), r[B.length - 1] += 1) : ui.endsBefore(l, r) && (ui.equals(B, r) && (r[B.length - 1] += 1), r[l.length - 1] -= 1)
                        }
                        return r
                    }
                },
                uo = {
                    transform(u, e) {
                        var {
                            current: t,
                            affinity: r
                        } = u;
                        if (null != t) {
                            var n = ui.transform(t, e, {
                                affinity: r
                            });
                            u.current = n, null == n && u.unref()
                        }
                    }
                };

            function us(u, e) {
                var t = Object.keys(u);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(u);
                    e && (r = r.filter(function(e) {
                        return Object.getOwnPropertyDescriptor(u, e).enumerable
                    })), t.push.apply(t, r)
                }
                return t
            }

            function uC(u) {
                for (var e = 1; e < arguments.length; e++) {
                    var t = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? us(Object(t), !0).forEach(function(e) {
                        i(u, e, t[e])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(u, Object.getOwnPropertyDescriptors(t)) : us(Object(t)).forEach(function(e) {
                        Object.defineProperty(u, e, Object.getOwnPropertyDescriptor(t, e))
                    })
                }
                return u
            }
            var ul = {
                    compare(u, e) {
                        var t = ui.compare(u.path, e.path);
                        return 0 === t ? u.offset < e.offset ? -1 : u.offset > e.offset ? 1 : 0 : t
                    },
                    isAfter: (u, e) => 1 === ul.compare(u, e),
                    isBefore: (u, e) => -1 === ul.compare(u, e),
                    equals: (u, e) => u.offset === e.offset && ui.equals(u.path, e.path),
                    isPoint: u => (0, a.P)(u) && "number" == typeof u.offset && ui.isPath(u.path),
                    transform(u, e) {
                        var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                        return (0, D.Uy)(u, u => {
                            if (null === u) return null;
                            var {
                                affinity: r = "forward"
                            } = t, {
                                path: n,
                                offset: a
                            } = u;
                            switch (e.type) {
                                case "insert_node":
                                case "move_node":
                                    u.path = ui.transform(n, e, t);
                                    break;
                                case "insert_text":
                                    ui.equals(e.path, n) && (e.offset < a || e.offset === a && "forward" === r) && (u.offset += e.text.length);
                                    break;
                                case "merge_node":
                                    ui.equals(e.path, n) && (u.offset += e.position), u.path = ui.transform(n, e, t);
                                    break;
                                case "remove_text":
                                    ui.equals(e.path, n) && e.offset <= a && (u.offset -= Math.min(a - e.offset, e.text.length));
                                    break;
                                case "remove_node":
                                    if (ui.equals(e.path, n) || ui.isAncestor(e.path, n)) return null;
                                    u.path = ui.transform(n, e, t);
                                    break;
                                case "split_node":
                                    if (ui.equals(e.path, n)) {
                                        if (e.position === a && null == r) return null;
                                        (e.position < a || e.position === a && "forward" === r) && (u.offset -= e.position, u.path = ui.transform(n, e, uC(uC({}, t), {}, {
                                            affinity: "forward"
                                        })))
                                    } else u.path = ui.transform(n, e, t)
                            }
                        })
                    }
                },
                uB = {
                    transform(u, e) {
                        var {
                            current: t,
                            affinity: r
                        } = u;
                        if (null != t) {
                            var n = ul.transform(t, e, {
                                affinity: r
                            });
                            u.current = n, null == n && u.unref()
                        }
                    }
                },
                uc = ["anchor", "focus"];

            function uf(u, e) {
                var t = Object.keys(u);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(u);
                    e && (r = r.filter(function(e) {
                        return Object.getOwnPropertyDescriptor(u, e).enumerable
                    })), t.push.apply(t, r)
                }
                return t
            }
            var uA = {
                    edges(u) {
                        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            {
                                reverse: t = !1
                            } = e,
                            {
                                anchor: r,
                                focus: n
                            } = u;
                        return uA.isBackward(u) === t ? [r, n] : [n, r]
                    },
                    end(u) {
                        var [, e] = uA.edges(u);
                        return e
                    },
                    equals: (u, e) => ul.equals(u.anchor, e.anchor) && ul.equals(u.focus, e.focus),
                    includes(u, e) {
                        if (uA.isRange(e)) {
                            if (uA.includes(u, e.anchor) || uA.includes(u, e.focus)) return !0;
                            var [t, r] = uA.edges(u), [n, a] = uA.edges(e);
                            return ul.isBefore(t, n) && ul.isAfter(r, a)
                        }
                        var [D, i] = uA.edges(u), o = !1, s = !1;
                        return ul.isPoint(e) ? (o = ul.compare(e, D) >= 0, s = 0 >= ul.compare(e, i)) : (o = ui.compare(e, D.path) >= 0, s = 0 >= ui.compare(e, i.path)), o && s
                    },
                    intersection(u, e) {
                        var t = E(u, uc),
                            [r, n] = uA.edges(u),
                            [a, D] = uA.edges(e),
                            o = ul.isBefore(r, a) ? a : r,
                            s = ul.isBefore(n, D) ? n : D;
                        return ul.isBefore(s, o) ? null : function(u) {
                            for (var e = 1; e < arguments.length; e++) {
                                var t = null != arguments[e] ? arguments[e] : {};
                                e % 2 ? uf(Object(t), !0).forEach(function(e) {
                                    i(u, e, t[e])
                                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(u, Object.getOwnPropertyDescriptors(t)) : uf(Object(t)).forEach(function(e) {
                                    Object.defineProperty(u, e, Object.getOwnPropertyDescriptor(t, e))
                                })
                            }
                            return u
                        }({
                            anchor: o,
                            focus: s
                        }, t)
                    },
                    isBackward(u) {
                        var {
                            anchor: e,
                            focus: t
                        } = u;
                        return ul.isAfter(e, t)
                    },
                    isCollapsed(u) {
                        var {
                            anchor: e,
                            focus: t
                        } = u;
                        return ul.equals(e, t)
                    },
                    isExpanded: u => !uA.isCollapsed(u),
                    isForward: u => !uA.isBackward(u),
                    isRange: u => (0, a.P)(u) && ul.isPoint(u.anchor) && ul.isPoint(u.focus),
                    * points(u) {
                        yield [u.anchor, "anchor"], yield [u.focus, "focus"]
                    },
                    start(u) {
                        var [e] = uA.edges(u);
                        return e
                    },
                    transform(u, e) {
                        var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                        return (0, D.Uy)(u, u => {
                            if (null === u) return null;
                            var r, n, {
                                affinity: a = "inward"
                            } = t;
                            if ("inward" === a) {
                                var D = uA.isCollapsed(u);
                                uA.isForward(u) ? (r = "forward", n = D ? r : "backward") : (r = "backward", n = D ? r : "forward")
                            } else "outward" === a ? uA.isForward(u) ? (r = "backward", n = "forward") : (r = "forward", n = "backward") : (r = a, n = a);
                            var i = ul.transform(u.anchor, e, {
                                    affinity: r
                                }),
                                o = ul.transform(u.focus, e, {
                                    affinity: n
                                });
                            if (!i || !o) return null;
                            u.anchor = i, u.focus = o
                        })
                    }
                },
                uh = {
                    transform(u, e) {
                        var {
                            current: t,
                            affinity: r
                        } = u;
                        if (null != t) {
                            var n = uA.transform(t, e, {
                                affinity: r
                            });
                            u.current = n, null == n && u.unref()
                        }
                    }
                },
                uF = void 0,
                uE = {
                    setScrubber(u) {
                        uF = u
                    },
                    stringify: u => JSON.stringify(u, uF)
                },
                ud = (u, e) => {
                    for (var t in u) {
                        var r = u[t],
                            n = e[t];
                        if ((0, a.P)(r) && (0, a.P)(n)) {
                            if (!ud(r, n)) return !1
                        } else if (Array.isArray(r) && Array.isArray(n)) {
                            if (r.length !== n.length) return !1;
                            for (var D = 0; D < r.length; D++)
                                if (r[D] !== n[D]) return !1
                        } else if (r !== n) return !1
                    }
                    for (var i in e)
                        if (void 0 === u[i] && void 0 !== e[i]) return !1;
                    return !0
                },
                up = ["text"],
                uv = ["anchor", "focus"];

            function ug(u, e) {
                var t = Object.keys(u);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(u);
                    e && (r = r.filter(function(e) {
                        return Object.getOwnPropertyDescriptor(u, e).enumerable
                    })), t.push.apply(t, r)
                }
                return t
            }

            function um(u) {
                for (var e = 1; e < arguments.length; e++) {
                    var t = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? ug(Object(t), !0).forEach(function(e) {
                        i(u, e, t[e])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(u, Object.getOwnPropertyDescriptors(t)) : ug(Object(t)).forEach(function(e) {
                        Object.defineProperty(u, e, Object.getOwnPropertyDescriptor(t, e))
                    })
                }
                return u
            }
            var uy = {
                equals(u, e) {
                    var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                        {
                            loose: r = !1
                        } = t;
                    return ud(r ? E(u, up) : u, r ? E(e, up) : e)
                },
                isText: u => (0, a.P)(u) && "string" == typeof u.text,
                isTextList: u => Array.isArray(u) && u.every(u => uy.isText(u)),
                isTextProps: u => void 0 !== u.text,
                matches(u, e) {
                    for (var t in e)
                        if ("text" !== t && (!u.hasOwnProperty(t) || u[t] !== e[t])) return !1;
                    return !0
                },
                decorations(u, e) {
                    var t = [um({}, u)];
                    for (var r of e) {
                        var n = E(r, uv),
                            [a, D] = uA.edges(r),
                            i = [],
                            o = 0,
                            s = a.offset,
                            C = D.offset;
                        for (var l of t) {
                            var {
                                length: B
                            } = l.text, c = o;
                            if (o += B, s <= c && o <= C) {
                                Object.assign(l, n), i.push(l);
                                continue
                            }
                            if (s !== C && (s === o || C === c) || s > o || C < c || C === c && 0 !== c) {
                                i.push(l);
                                continue
                            }
                            var f = l,
                                A = void 0,
                                h = void 0;
                            if (C < o) {
                                var F = C - c;
                                h = um(um({}, f), {}, {
                                    text: f.text.slice(F)
                                }), f = um(um({}, f), {}, {
                                    text: f.text.slice(0, F)
                                })
                            }
                            if (s > c) {
                                var d = s - c;
                                A = um(um({}, f), {}, {
                                    text: f.text.slice(0, d)
                                }), f = um(um({}, f), {}, {
                                    text: f.text.slice(d)
                                })
                            }
                            Object.assign(f, n), A && i.push(A), i.push(f), h && i.push(h)
                        }
                        t = i
                    }
                    return t
                }
            };

            function ub(u, e) {
                var t = Object.keys(u);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(u);
                    e && (r = r.filter(function(e) {
                        return Object.getOwnPropertyDescriptor(u, e).enumerable
                    })), t.push.apply(t, r)
                }
                return t
            }

            function uw(u) {
                for (var e = 1; e < arguments.length; e++) {
                    var t = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? ub(Object(t), !0).forEach(function(e) {
                        i(u, e, t[e])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(u, Object.getOwnPropertyDescriptors(t)) : ub(Object(t)).forEach(function(e) {
                        Object.defineProperty(u, e, Object.getOwnPropertyDescriptor(t, e))
                    })
                }
                return u
            }
            var ux = (u, e, t) => {
                    switch (t.type) {
                        case "insert_node":
                            var {
                                path: r,
                                node: n
                            } = t, a = ur.parent(u, r), D = r[r.length - 1];
                            if (D > a.children.length) throw Error('Cannot apply an "insert_node" operation at path ['.concat(r, "] because the destination is past the end of the node."));
                            if (a.children.splice(D, 0, n), e)
                                for (var [i, o] of uA.points(e)) e[o] = ul.transform(i, t);
                            break;
                        case "insert_text":
                            var {
                                path: s,
                                offset: C,
                                text: l
                            } = t;
                            if (0 === l.length) break;
                            var B = ur.leaf(u, s),
                                c = B.text.slice(0, C),
                                f = B.text.slice(C);
                            if (B.text = c + l + f, e)
                                for (var [A, h] of uA.points(e)) e[h] = ul.transform(A, t);
                            break;
                        case "merge_node":
                            var {
                                path: F
                            } = t, E = ur.get(u, F), d = ui.previous(F), p = ur.get(u, d), v = ur.parent(u, F), g = F[F.length - 1];
                            if (uy.isText(E) && uy.isText(p)) p.text += E.text;
                            else if (uy.isText(E) || uy.isText(p)) throw Error('Cannot apply a "merge_node" operation at path ['.concat(F, "] to nodes of different interfaces: ").concat(uE.stringify(E), " ").concat(uE.stringify(p)));
                            else p.children.push(...E.children);
                            if (v.children.splice(g, 1), e)
                                for (var [m, y] of uA.points(e)) e[y] = ul.transform(m, t);
                            break;
                        case "move_node":
                            var {
                                path: b,
                                newPath: w
                            } = t;
                            if (ui.isAncestor(b, w)) throw Error("Cannot move a path [".concat(b, "] to new path [").concat(w, "] because the destination is inside itself."));
                            var x = ur.get(u, b),
                                O = ur.parent(u, b),
                                P = b[b.length - 1];
                            O.children.splice(P, 1);
                            var k = ui.transform(b, t),
                                j = ur.get(u, ui.parent(k)),
                                N = k[k.length - 1];
                            if (j.children.splice(N, 0, x), e)
                                for (var [_, R] of uA.points(e)) e[R] = ul.transform(_, t);
                            break;
                        case "remove_node":
                            var {
                                path: T
                            } = t, S = T[T.length - 1];
                            if (ur.parent(u, T).children.splice(S, 1), e)
                                for (var [q, V] of uA.points(e)) {
                                    var I = ul.transform(q, t);
                                    if (null != e && null != I) e[V] = I;
                                    else {
                                        var z = void 0,
                                            L = void 0;
                                        for (var [M, W] of ur.texts(u))
                                            if (-1 === ui.compare(W, T)) z = [M, W];
                                            else {
                                                L = [M, W];
                                                break
                                            }
                                        var $ = !1;
                                        z && L && ($ = ui.equals(L[1], T) ? !ui.hasPrevious(L[1]) : ui.common(z[1], T).length < ui.common(L[1], T).length), z && !$ ? (q.path = z[1], q.offset = z[0].text.length) : L ? (q.path = L[1], q.offset = 0) : e = null
                                    }
                                }
                            break;
                        case "remove_text":
                            var {
                                path: J,
                                offset: Z,
                                text: U
                            } = t;
                            if (0 === U.length) break;
                            var G = ur.leaf(u, J),
                                H = G.text.slice(0, Z),
                                K = G.text.slice(Z + U.length);
                            if (G.text = H + K, e)
                                for (var [Q, X] of uA.points(e)) e[X] = ul.transform(Q, t);
                            break;
                        case "set_node":
                            var {
                                path: Y,
                                properties: uu,
                                newProperties: ue
                            } = t;
                            if (0 === Y.length) throw Error("Cannot set properties on the root node!");
                            var ut = ur.get(u, Y);
                            for (var un in ue) {
                                if ("children" === un || "text" === un) throw Error('Cannot set the "'.concat(un, '" property of nodes!'));
                                var ua = ue[un];
                                null == ua ? delete ut[un] : ut[un] = ua
                            }
                            for (var uD in uu) ue.hasOwnProperty(uD) || delete ut[uD];
                            break;
                        case "set_selection":
                            var {
                                newProperties: uo
                            } = t;
                            if (null == uo) e = uo;
                            else {
                                if (null == e) {
                                    if (!uA.isRange(uo)) throw Error('Cannot apply an incomplete "set_selection" operation properties '.concat(uE.stringify(uo), " when there is no current selection."));
                                    e = uw({}, uo)
                                }
                                for (var us in uo) {
                                    var uC = uo[us];
                                    if (null == uC) {
                                        if ("anchor" === us || "focus" === us) throw Error('Cannot remove the "'.concat(us, '" selection property'));
                                        delete e[us]
                                    } else e[us] = uC
                                }
                            }
                            break;
                        case "split_node":
                            var uB, {
                                path: uc,
                                position: uf,
                                properties: uh
                            } = t;
                            if (0 === uc.length) throw Error('Cannot apply a "split_node" operation at path ['.concat(uc, "] because the root node cannot be split."));
                            var uF = ur.get(u, uc),
                                ud = ur.parent(u, uc),
                                up = uc[uc.length - 1];
                            if (uy.isText(uF)) {
                                var uv = uF.text.slice(0, uf),
                                    ug = uF.text.slice(uf);
                                uF.text = uv, uB = uw(uw({}, uh), {}, {
                                    text: ug
                                })
                            } else {
                                var um = uF.children.slice(0, uf),
                                    ub = uF.children.slice(uf);
                                uF.children = um, uB = uw(uw({}, uh), {}, {
                                    children: ub
                                })
                            }
                            if (ud.children.splice(up + 1, 0, uB), e)
                                for (var [ux, uO] of uA.points(e)) e[uO] = ul.transform(ux, t)
                    }
                    return e
                },
                uO = ["text"],
                uP = ["children"];

            function uk(u, e) {
                var t = Object.keys(u);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(u);
                    e && (r = r.filter(function(e) {
                        return Object.getOwnPropertyDescriptor(u, e).enumerable
                    })), t.push.apply(t, r)
                }
                return t
            }

            function uj(u) {
                for (var e = 1; e < arguments.length; e++) {
                    var t = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? uk(Object(t), !0).forEach(function(e) {
                        i(u, e, t[e])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(u, Object.getOwnPropertyDescriptors(t)) : uk(Object(t)).forEach(function(e) {
                        Object.defineProperty(u, e, Object.getOwnPropertyDescriptor(t, e))
                    })
                }
                return u
            }
            var uN = (u, e) => J.isElement(e) ? !!Q.isVoid(u, e) || 1 === e.children.length && uN(u, e.children[0]) : !Q.isEditor(e),
                u_ = (u, e) => {
                    if (uA.isCollapsed(e)) return e.anchor;
                    var [, t] = uA.edges(e), r = Q.pointRef(u, t);
                    return uI.delete(u, {
                        at: e
                    }), r.unref()
                },
                uR = (u, e) => {
                    var [t] = Q.node(u, e);
                    return u => u === t
                };

            function uT(u, e) {
                var t = Object.keys(u);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(u);
                    e && (r = r.filter(function(e) {
                        return Object.getOwnPropertyDescriptor(u, e).enumerable
                    })), t.push.apply(t, r)
                }
                return t
            }

            function uS(u) {
                for (var e = 1; e < arguments.length; e++) {
                    var t = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? uT(Object(t), !0).forEach(function(e) {
                        i(u, e, t[e])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(u, Object.getOwnPropertyDescriptors(t)) : uT(Object(t)).forEach(function(e) {
                        Object.defineProperty(u, e, Object.getOwnPropertyDescriptor(t, e))
                    })
                }
                return u
            }

            function uq(u, e) {
                var t = Object.keys(u);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(u);
                    e && (r = r.filter(function(e) {
                        return Object.getOwnPropertyDescriptor(u, e).enumerable
                    })), t.push.apply(t, r)
                }
                return t
            }

            function uV(u) {
                for (var e = 1; e < arguments.length; e++) {
                    var t = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? uq(Object(t), !0).forEach(function(e) {
                        i(u, e, t[e])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(u, Object.getOwnPropertyDescriptors(t)) : uq(Object(t)).forEach(function(e) {
                        Object.defineProperty(u, e, Object.getOwnPropertyDescriptor(t, e))
                    })
                }
                return u
            }
            var uI = uV(uV(uV(uV({}, {
                transform(u, e) {
                    u.children = (0, D.P2)(u.children);
                    var t = u.selection && (0, D.P2)(u.selection);
                    try {
                        t = ux(u, t, e)
                    } finally {
                        u.children = (0, D._x)(u.children), t ? u.selection = (0, D.mv)(t) ? (0, D._x)(t) : t : u.selection = null
                    }
                }
            }), {
                insertNodes(u, e) {
                    var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                    Q.withoutNormalizing(u, () => {
                        var {
                            hanging: r = !1,
                            voids: n = !1,
                            mode: a = "lowest"
                        } = t, {
                            at: D,
                            match: i,
                            select: o
                        } = t;
                        if (ur.isNode(e) && (e = [e]), 0 !== e.length) {
                            var [s] = e;
                            if (D || (D = u.selection ? u.selection : u.children.length > 0 ? Q.end(u, []) : [0], o = !0), null == o && (o = !1), uA.isRange(D)) {
                                if (r || (D = Q.unhangRange(u, D, {
                                        voids: n
                                    })), uA.isCollapsed(D)) D = D.anchor;
                                else {
                                    var [, C] = uA.edges(D), l = Q.pointRef(u, C);
                                    uI.delete(u, {
                                        at: D
                                    }), D = l.unref()
                                }
                            }
                            if (ul.isPoint(D)) {
                                null == i && (i = uy.isText(s) ? u => uy.isText(u) : u.isInline(s) ? e => uy.isText(e) || Q.isInline(u, e) : e => J.isElement(e) && Q.isBlock(u, e));
                                var [B] = Q.nodes(u, {
                                    at: D.path,
                                    match: i,
                                    mode: a,
                                    voids: n
                                });
                                if (!B) return;
                                var [, c] = B, f = Q.pathRef(u, c), A = Q.isEnd(u, D, c);
                                uI.splitNodes(u, {
                                    at: D,
                                    match: i,
                                    mode: a,
                                    voids: n
                                });
                                var h = f.unref();
                                D = A ? ui.next(h) : h
                            }
                            var F = ui.parent(D),
                                E = D[D.length - 1];
                            if (!(!n && Q.void(u, {
                                    at: F
                                }))) {
                                for (var d of e) {
                                    var p = F.concat(E);
                                    E++, u.apply({
                                        type: "insert_node",
                                        path: p,
                                        node: d
                                    }), D = ui.next(D)
                                }
                                if (D = ui.previous(D), o) {
                                    var v = Q.end(u, D);
                                    v && uI.select(u, v)
                                }
                            }
                        }
                    })
                },
                liftNodes(u) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    Q.withoutNormalizing(u, () => {
                        var {
                            at: t = u.selection,
                            mode: r = "lowest",
                            voids: n = !1
                        } = e, {
                            match: a
                        } = e;
                        if (null == a && (a = ui.isPath(t) ? uR(u, t) : e => J.isElement(e) && Q.isBlock(u, e)), t)
                            for (var D of Array.from(Q.nodes(u, {
                                    at: t,
                                    match: a,
                                    mode: r,
                                    voids: n
                                }), e => {
                                    var [, t] = e;
                                    return Q.pathRef(u, t)
                                })) {
                                var i = D.unref();
                                if (i.length < 2) throw Error("Cannot lift node at a path [".concat(i, "] because it has a depth of less than `2`."));
                                var [o, s] = Q.node(u, ui.parent(i)), C = i[i.length - 1], {
                                    length: l
                                } = o.children;
                                if (1 === l) {
                                    var B = ui.next(s);
                                    uI.moveNodes(u, {
                                        at: i,
                                        to: B,
                                        voids: n
                                    }), uI.removeNodes(u, {
                                        at: s,
                                        voids: n
                                    })
                                } else if (0 === C) uI.moveNodes(u, {
                                    at: i,
                                    to: s,
                                    voids: n
                                });
                                else if (C === l - 1) {
                                    var c = ui.next(s);
                                    uI.moveNodes(u, {
                                        at: i,
                                        to: c,
                                        voids: n
                                    })
                                } else {
                                    var f = ui.next(i),
                                        A = ui.next(s);
                                    uI.splitNodes(u, {
                                        at: f,
                                        voids: n
                                    }), uI.moveNodes(u, {
                                        at: i,
                                        to: A,
                                        voids: n
                                    })
                                }
                            }
                    })
                },
                mergeNodes(u) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    Q.withoutNormalizing(u, () => {
                        var t, r, {
                                match: n,
                                at: a = u.selection
                            } = e,
                            {
                                hanging: D = !1,
                                voids: i = !1,
                                mode: o = "lowest"
                            } = e;
                        if (a) {
                            if (null == n) {
                                if (ui.isPath(a)) {
                                    var [s] = Q.parent(u, a);
                                    n = u => s.children.includes(u)
                                } else n = e => J.isElement(e) && Q.isBlock(u, e)
                            }
                            if (!D && uA.isRange(a) && (a = Q.unhangRange(u, a, {
                                    voids: i
                                })), uA.isRange(a)) {
                                if (uA.isCollapsed(a)) a = a.anchor;
                                else {
                                    var [, C] = uA.edges(a), l = Q.pointRef(u, C);
                                    uI.delete(u, {
                                        at: a
                                    }), a = l.unref(), null == e.at && uI.select(u, a)
                                }
                            }
                            var [B] = Q.nodes(u, {
                                at: a,
                                match: n,
                                voids: i,
                                mode: o
                            }), c = Q.previous(u, {
                                at: a,
                                match: n,
                                voids: i,
                                mode: o
                            });
                            if (B && c) {
                                var [f, A] = B, [h, F] = c;
                                if (0 !== A.length && 0 !== F.length) {
                                    var d = ui.next(F),
                                        p = ui.common(A, F),
                                        v = ui.isSibling(A, F),
                                        g = Array.from(Q.levels(u, {
                                            at: A
                                        }), u => {
                                            var [e] = u;
                                            return e
                                        }).slice(p.length).slice(0, -1),
                                        m = Q.above(u, {
                                            at: A,
                                            mode: "highest",
                                            match: e => g.includes(e) && uN(u, e)
                                        }),
                                        y = m && Q.pathRef(u, m[1]);
                                    if (uy.isText(f) && uy.isText(h)) {
                                        var b = E(f, uO);
                                        r = h.text.length, t = b
                                    } else if (J.isElement(f) && J.isElement(h)) {
                                        var b = E(f, uP);
                                        r = h.children.length, t = b
                                    } else throw Error("Cannot merge the node at path [".concat(A, "] with the previous sibling because it is not the same kind: ").concat(uE.stringify(f), " ").concat(uE.stringify(h)));
                                    v || uI.moveNodes(u, {
                                        at: A,
                                        to: d,
                                        voids: i
                                    }), y && uI.removeNodes(u, {
                                        at: y.current,
                                        voids: i
                                    }), J.isElement(h) && Q.isEmpty(u, h) || uy.isText(h) && "" === h.text && 0 !== F[F.length - 1] ? uI.removeNodes(u, {
                                        at: F,
                                        voids: i
                                    }) : u.apply({
                                        type: "merge_node",
                                        path: d,
                                        position: r,
                                        properties: t
                                    }), y && y.unref()
                                }
                            }
                        }
                    })
                },
                moveNodes(u, e) {
                    Q.withoutNormalizing(u, () => {
                        var {
                            to: t,
                            at: r = u.selection,
                            mode: n = "lowest",
                            voids: a = !1
                        } = e, {
                            match: D
                        } = e;
                        if (r) {
                            null == D && (D = ui.isPath(r) ? uR(u, r) : e => J.isElement(e) && Q.isBlock(u, e));
                            var i = Q.pathRef(u, t);
                            for (var o of Array.from(Q.nodes(u, {
                                    at: r,
                                    match: D,
                                    mode: n,
                                    voids: a
                                }), e => {
                                    var [, t] = e;
                                    return Q.pathRef(u, t)
                                })) {
                                var s = o.unref(),
                                    C = i.current;
                                0 !== s.length && u.apply({
                                    type: "move_node",
                                    path: s,
                                    newPath: C
                                }), i.current && ui.isSibling(C, s) && ui.isAfter(C, s) && (i.current = ui.next(i.current))
                            }
                            i.unref()
                        }
                    })
                },
                removeNodes(u) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    Q.withoutNormalizing(u, () => {
                        var {
                            hanging: t = !1,
                            voids: r = !1,
                            mode: n = "lowest"
                        } = e, {
                            at: a = u.selection,
                            match: D
                        } = e;
                        if (a)
                            for (var i of (null == D && (D = ui.isPath(a) ? uR(u, a) : e => J.isElement(e) && Q.isBlock(u, e)), !t && uA.isRange(a) && (a = Q.unhangRange(u, a, {
                                    voids: r
                                })), Array.from(Q.nodes(u, {
                                    at: a,
                                    match: D,
                                    mode: n,
                                    voids: r
                                }), e => {
                                    var [, t] = e;
                                    return Q.pathRef(u, t)
                                }))) {
                                var o = i.unref();
                                if (o) {
                                    var [s] = Q.node(u, o);
                                    u.apply({
                                        type: "remove_node",
                                        path: o,
                                        node: s
                                    })
                                }
                            }
                    })
                },
                setNodes(u, e) {
                    var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                    Q.withoutNormalizing(u, () => {
                        var {
                            match: r,
                            at: n = u.selection,
                            compare: a,
                            merge: D
                        } = t, {
                            hanging: i = !1,
                            mode: o = "lowest",
                            split: s = !1,
                            voids: C = !1
                        } = t;
                        if (n) {
                            if (null == r && (r = ui.isPath(n) ? uR(u, n) : e => J.isElement(e) && Q.isBlock(u, e)), !i && uA.isRange(n) && (n = Q.unhangRange(u, n, {
                                    voids: C
                                })), s && uA.isRange(n)) {
                                if (uA.isCollapsed(n) && Q.leaf(u, n.anchor)[0].text.length > 0) return;
                                var l = Q.rangeRef(u, n, {
                                        affinity: "inward"
                                    }),
                                    [B, c] = uA.edges(n),
                                    f = "lowest" === o ? "lowest" : "highest",
                                    A = Q.isEnd(u, c, c.path);
                                uI.splitNodes(u, {
                                    at: c,
                                    match: r,
                                    mode: f,
                                    voids: C,
                                    always: !A
                                });
                                var h = Q.isStart(u, B, B.path);
                                uI.splitNodes(u, {
                                    at: B,
                                    match: r,
                                    mode: f,
                                    voids: C,
                                    always: !h
                                }), n = l.unref(), null == t.at && uI.select(u, n)
                            }
                            for (var [F, E] of (a || (a = (u, e) => u !== e), Q.nodes(u, {
                                    at: n,
                                    match: r,
                                    mode: o,
                                    voids: C
                                }))) {
                                var d = {},
                                    p = {};
                                if (0 !== E.length) {
                                    var v = !1;
                                    for (var g in e) "children" !== g && "text" !== g && a(e[g], F[g]) && (v = !0, F.hasOwnProperty(g) && (d[g] = F[g]), D ? null != e[g] && (p[g] = D(F[g], e[g])) : null != e[g] && (p[g] = e[g]));
                                    v && u.apply({
                                        type: "set_node",
                                        path: E,
                                        properties: d,
                                        newProperties: p
                                    })
                                }
                            }
                        }
                    })
                },
                splitNodes(u) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    Q.withoutNormalizing(u, () => {
                        var t, r, {
                                mode: n = "lowest",
                                voids: a = !1
                            } = e,
                            {
                                match: D,
                                at: i = u.selection,
                                height: o = 0,
                                always: s = !1
                            } = e;
                        if (null == D && (D = e => J.isElement(e) && Q.isBlock(u, e)), uA.isRange(i) && (i = u_(u, i)), ui.isPath(i)) {
                            var C = i,
                                l = Q.point(u, C),
                                [B] = Q.parent(u, C);
                            D = u => u === B, o = l.path.length - C.length + 1, i = l, s = !0
                        }
                        if (i) {
                            var c = Q.pointRef(u, i, {
                                affinity: "backward"
                            });
                            try {
                                var [f] = Q.nodes(u, {
                                    at: i,
                                    match: D,
                                    mode: n,
                                    voids: a
                                });
                                if (!f) return;
                                var A = Q.void(u, {
                                    at: i,
                                    mode: "highest"
                                });
                                if (!a && A) {
                                    var [h, F] = A;
                                    if (J.isElement(h) && u.isInline(h)) {
                                        var E = Q.after(u, F);
                                        if (!E) {
                                            var d = ui.next(F);
                                            uI.insertNodes(u, {
                                                text: ""
                                            }, {
                                                at: d,
                                                voids: a
                                            }), E = Q.point(u, d)
                                        }
                                        i = E, s = !0
                                    }
                                    o = i.path.length - F.length + 1, s = !0
                                }
                                t = Q.pointRef(u, i);
                                var p = i.path.length - o,
                                    [, v] = f,
                                    g = i.path.slice(0, p),
                                    m = 0 === o ? i.offset : i.path[p] + 0;
                                for (var [y, b] of Q.levels(u, {
                                        at: g,
                                        reverse: !0,
                                        voids: a
                                    })) {
                                    var w = !1;
                                    if (b.length < v.length || 0 === b.length || !a && J.isElement(y) && Q.isVoid(u, y)) break;
                                    var x = c.current,
                                        O = Q.isEnd(u, x, b);
                                    if (s || !c || !Q.isEdge(u, x, b)) {
                                        w = !0;
                                        var P = ur.extractProps(y);
                                        u.apply({
                                            type: "split_node",
                                            path: b,
                                            position: m,
                                            properties: P
                                        })
                                    }
                                    m = b[b.length - 1] + (w || O ? 1 : 0)
                                }
                                if (null == e.at) {
                                    var k = t.current || Q.end(u, []);
                                    uI.select(u, k)
                                }
                            } finally {
                                c.unref(), null === (r = t) || void 0 === r || r.unref()
                            }
                        }
                    })
                },
                unsetNodes(u, e) {
                    var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                    Array.isArray(e) || (e = [e]);
                    var r = {};
                    for (var n of e) r[n] = null;
                    uI.setNodes(u, r, t)
                },
                unwrapNodes(u) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    Q.withoutNormalizing(u, () => {
                        var {
                            mode: t = "lowest",
                            split: r = !1,
                            voids: n = !1
                        } = e, {
                            at: a = u.selection,
                            match: D
                        } = e;
                        if (a) {
                            null == D && (D = ui.isPath(a) ? uR(u, a) : e => J.isElement(e) && Q.isBlock(u, e)), ui.isPath(a) && (a = Q.range(u, a));
                            var i = uA.isRange(a) ? Q.rangeRef(u, a) : null;
                            for (var o of Array.from(Q.nodes(u, {
                                    at: a,
                                    match: D,
                                    mode: t,
                                    voids: n
                                }), e => {
                                    var [, t] = e;
                                    return Q.pathRef(u, t)
                                }).reverse()) ! function(e) {
                                var t = e.unref(),
                                    [a] = Q.node(u, t),
                                    D = Q.range(u, t);
                                r && i && (D = uA.intersection(i.current, D)), uI.liftNodes(u, {
                                    at: D,
                                    match: u => J.isAncestor(a) && a.children.includes(u),
                                    voids: n
                                })
                            }(o);
                            i && i.unref()
                        }
                    })
                },
                wrapNodes(u, e) {
                    var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                    Q.withoutNormalizing(u, () => {
                        var {
                            mode: r = "lowest",
                            split: n = !1,
                            voids: a = !1
                        } = t, {
                            match: D,
                            at: i = u.selection
                        } = t;
                        if (i) {
                            if (null == D && (D = ui.isPath(i) ? uR(u, i) : u.isInline(e) ? e => J.isElement(e) && Q.isInline(u, e) || uy.isText(e) : e => J.isElement(e) && Q.isBlock(u, e)), n && uA.isRange(i)) {
                                var [o, s] = uA.edges(i), C = Q.rangeRef(u, i, {
                                    affinity: "inward"
                                });
                                uI.splitNodes(u, {
                                    at: s,
                                    match: D,
                                    voids: a
                                }), uI.splitNodes(u, {
                                    at: o,
                                    match: D,
                                    voids: a
                                }), i = C.unref(), null == t.at && uI.select(u, i)
                            }
                            for (var [, l] of Array.from(Q.nodes(u, {
                                    at: i,
                                    match: u.isInline(e) ? e => J.isElement(e) && Q.isBlock(u, e) : u => Q.isEditor(u),
                                    mode: "lowest",
                                    voids: a
                                }))) {
                                var B = uA.isRange(i) ? uA.intersection(i, Q.range(u, l)) : i;
                                if (B) {
                                    var c = Array.from(Q.nodes(u, {
                                        at: B,
                                        match: D,
                                        mode: r,
                                        voids: a
                                    }));
                                    if (c.length > 0 && "continue" === function() {
                                            var [t] = c, r = c[c.length - 1], [, n] = t, [, D] = r;
                                            if (0 === n.length && 0 === D.length) return "continue";
                                            var i = ui.equals(n, D) ? ui.parent(n) : ui.common(n, D),
                                                o = Q.range(u, n, D),
                                                [s] = Q.node(u, i),
                                                C = i.length + 1,
                                                l = ui.next(D.slice(0, C)),
                                                B = uj(uj({}, e), {}, {
                                                    children: []
                                                });
                                            uI.insertNodes(u, B, {
                                                at: l,
                                                voids: a
                                            }), uI.moveNodes(u, {
                                                at: o,
                                                match: u => J.isAncestor(s) && s.children.includes(u),
                                                to: l.concat(0),
                                                voids: a
                                            })
                                        }()) continue
                                }
                            }
                        }
                    })
                }
            }), {
                collapse(u) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        {
                            edge: t = "anchor"
                        } = e,
                        {
                            selection: r
                        } = u;
                    if (r) {
                        if ("anchor" === t) uI.select(u, r.anchor);
                        else if ("focus" === t) uI.select(u, r.focus);
                        else if ("start" === t) {
                            var [n] = uA.edges(r);
                            uI.select(u, n)
                        } else if ("end" === t) {
                            var [, a] = uA.edges(r);
                            uI.select(u, a)
                        }
                    }
                },
                deselect(u) {
                    var {
                        selection: e
                    } = u;
                    e && u.apply({
                        type: "set_selection",
                        properties: e,
                        newProperties: null
                    })
                },
                move(u) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        {
                            selection: t
                        } = u,
                        {
                            distance: r = 1,
                            unit: n = "character",
                            reverse: a = !1
                        } = e,
                        {
                            edge: D = null
                        } = e;
                    if (t) {
                        "start" === D && (D = uA.isBackward(t) ? "focus" : "anchor"), "end" === D && (D = uA.isBackward(t) ? "anchor" : "focus");
                        var {
                            anchor: i,
                            focus: o
                        } = t, s = {
                            distance: r,
                            unit: n
                        }, C = {};
                        if (null == D || "anchor" === D) {
                            var l = a ? Q.before(u, i, s) : Q.after(u, i, s);
                            l && (C.anchor = l)
                        }
                        if (null == D || "focus" === D) {
                            var B = a ? Q.before(u, o, s) : Q.after(u, o, s);
                            B && (C.focus = B)
                        }
                        uI.setSelection(u, C)
                    }
                },
                select(u, e) {
                    var {
                        selection: t
                    } = u;
                    if (e = Q.range(u, e), t) {
                        uI.setSelection(u, e);
                        return
                    }
                    if (!uA.isRange(e)) throw Error("When setting the selection and the current selection is `null` you must provide at least an `anchor` and `focus`, but you passed: ".concat(uE.stringify(e)));
                    u.apply({
                        type: "set_selection",
                        properties: t,
                        newProperties: e
                    })
                },
                setPoint(u, e) {
                    var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                        {
                            selection: r
                        } = u,
                        {
                            edge: n = "both"
                        } = t;
                    if (r) {
                        "start" === n && (n = uA.isBackward(r) ? "focus" : "anchor"), "end" === n && (n = uA.isBackward(r) ? "anchor" : "focus");
                        var {
                            anchor: a,
                            focus: D
                        } = r, i = "anchor" === n ? a : D;
                        uI.setSelection(u, {
                            ["anchor" === n ? "anchor" : "focus"]: uS(uS({}, i), e)
                        })
                    }
                },
                setSelection(u, e) {
                    var {
                        selection: t
                    } = u, r = {}, n = {};
                    if (t) {
                        for (var a in e)("anchor" !== a || null == e.anchor || ul.equals(e.anchor, t.anchor)) && ("focus" !== a || null == e.focus || ul.equals(e.focus, t.focus)) && ("anchor" === a || "focus" === a || e[a] === t[a]) || (r[a] = t[a], n[a] = e[a]);
                        Object.keys(r).length > 0 && u.apply({
                            type: "set_selection",
                            properties: r,
                            newProperties: n
                        })
                    }
                }
            }), {
                delete(u) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    Q.withoutNormalizing(u, () => {
                        var t, {
                                reverse: r = !1,
                                unit: n = "character",
                                distance: a = 1,
                                voids: D = !1
                            } = e,
                            {
                                at: i = u.selection,
                                hanging: o = !1
                            } = e;
                        if (i) {
                            var s = !1;
                            if (uA.isRange(i) && uA.isCollapsed(i) && (s = !0, i = i.anchor), ul.isPoint(i)) {
                                var C = Q.void(u, {
                                    at: i,
                                    mode: "highest"
                                });
                                if (!D && C) {
                                    var [, l] = C;
                                    i = l
                                } else {
                                    var B = {
                                            unit: n,
                                            distance: a
                                        },
                                        c = r ? Q.before(u, i, B) || Q.start(u, []) : Q.after(u, i, B) || Q.end(u, []);
                                    i = {
                                        anchor: i,
                                        focus: c
                                    }, o = !0
                                }
                            }
                            if (ui.isPath(i)) {
                                uI.removeNodes(u, {
                                    at: i,
                                    voids: D
                                });
                                return
                            }
                            if (!uA.isCollapsed(i)) {
                                if (!o) {
                                    var [, f] = uA.edges(i), A = Q.end(u, []);
                                    ul.equals(f, A) || (i = Q.unhangRange(u, i, {
                                        voids: D
                                    }))
                                }
                                var [h, F] = uA.edges(i), E = Q.above(u, {
                                    match: e => J.isElement(e) && Q.isBlock(u, e),
                                    at: h,
                                    voids: D
                                }), d = Q.above(u, {
                                    match: e => J.isElement(e) && Q.isBlock(u, e),
                                    at: F,
                                    voids: D
                                }), p = E && d && !ui.equals(E[1], d[1]), v = ui.equals(h.path, F.path), g = D ? null : Q.void(u, {
                                    at: h,
                                    mode: "highest"
                                }), m = D ? null : Q.void(u, {
                                    at: F,
                                    mode: "highest"
                                });
                                if (g) {
                                    var y = Q.before(u, h);
                                    y && E && ui.isAncestor(E[1], y.path) && (h = y)
                                }
                                if (m) {
                                    var b = Q.after(u, F);
                                    b && d && ui.isAncestor(d[1], b.path) && (F = b)
                                }
                                var w = [];
                                for (var x of Q.nodes(u, {
                                        at: i,
                                        voids: D
                                    })) {
                                    var [O, P] = x;
                                    (!t || 0 !== ui.compare(P, t)) && (!D && J.isElement(O) && Q.isVoid(u, O) || !ui.isCommon(P, h.path) && !ui.isCommon(P, F.path)) && (w.push(x), t = P)
                                }
                                var k = Array.from(w, e => {
                                        var [, t] = e;
                                        return Q.pathRef(u, t)
                                    }),
                                    j = Q.pointRef(u, h),
                                    N = Q.pointRef(u, F),
                                    _ = "";
                                if (!v && !g) {
                                    var R = j.current,
                                        [T] = Q.leaf(u, R),
                                        {
                                            path: S
                                        } = R,
                                        {
                                            offset: q
                                        } = h,
                                        V = T.text.slice(q);
                                    V.length > 0 && (u.apply({
                                        type: "remove_text",
                                        path: S,
                                        offset: q,
                                        text: V
                                    }), _ = V)
                                }
                                if (k.reverse().map(u => u.unref()).filter(u => null !== u).forEach(e => uI.removeNodes(u, {
                                        at: e,
                                        voids: D
                                    })), !m) {
                                    var I = N.current,
                                        [z] = Q.leaf(u, I),
                                        {
                                            path: L
                                        } = I,
                                        M = v ? h.offset : 0,
                                        W = z.text.slice(M, F.offset);
                                    W.length > 0 && (u.apply({
                                        type: "remove_text",
                                        path: L,
                                        offset: M,
                                        text: W
                                    }), _ = W)
                                }!v && p && N.current && j.current && uI.mergeNodes(u, {
                                    at: N.current,
                                    hanging: !0,
                                    voids: D
                                }), s && r && "character" === n && _.length > 1 && _.match(/[\u0E00-\u0E7F]+/) && uI.insertText(u, _.slice(0, _.length - a));
                                var $ = j.unref(),
                                    Z = N.unref(),
                                    U = r ? $ || Z : Z || $;
                                null == e.at && U && uI.select(u, U)
                            }
                        }
                    })
                },
                insertFragment(u, e) {
                    var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                    Q.withoutNormalizing(u, () => {
                        var r, {
                                hanging: n = !1,
                                voids: a = !1
                            } = t,
                            {
                                at: D = u.selection
                            } = t;
                        if (e.length && D) {
                            if (uA.isRange(D)) {
                                if (n || (D = Q.unhangRange(u, D, {
                                        voids: a
                                    })), uA.isCollapsed(D)) D = D.anchor;
                                else {
                                    var [, i] = uA.edges(D);
                                    if (!a && Q.void(u, {
                                            at: i
                                        })) return;
                                    var o = Q.pointRef(u, i);
                                    uI.delete(u, {
                                        at: D
                                    }), D = o.unref()
                                }
                            } else ui.isPath(D) && (D = Q.start(u, D));
                            if (!(!a && Q.void(u, {
                                    at: D
                                }))) {
                                var s = Q.above(u, {
                                    at: D,
                                    match: e => J.isElement(e) && Q.isInline(u, e),
                                    mode: "highest",
                                    voids: a
                                });
                                if (s) {
                                    var [, C] = s;
                                    Q.isEnd(u, D, C) ? D = Q.after(u, C) : Q.isStart(u, D, C) && (D = Q.before(u, C))
                                }
                                var [, l] = Q.above(u, {
                                    match: e => J.isElement(e) && Q.isBlock(u, e),
                                    at: D,
                                    voids: a
                                }), B = Q.isStart(u, D, l), c = Q.isEnd(u, D, l), f = B && c, A = !B || B && c, h = !c, [, F] = ur.first({
                                    children: e
                                }, []), [, E] = ur.last({
                                    children: e
                                }, []), d = [], p = e => {
                                    var [t, r] = e;
                                    return 0 !== r.length && (!!f || !(A && ui.isAncestor(r, F) && J.isElement(t) && !u.isVoid(t) && !u.isInline(t) || h && ui.isAncestor(r, E) && J.isElement(t) && !u.isVoid(t) && !u.isInline(t)))
                                };
                                for (var v of ur.nodes({
                                        children: e
                                    }, {
                                        pass: p
                                    })) p(v) && d.push(v);
                                var g = [],
                                    m = [],
                                    y = [],
                                    b = !0,
                                    w = !1;
                                for (var [x] of d) J.isElement(x) && !u.isInline(x) ? (b = !1, w = !0, m.push(x)) : b ? g.push(x) : y.push(x);
                                var [O] = Q.nodes(u, {
                                    at: D,
                                    match: e => uy.isText(e) || Q.isInline(u, e),
                                    mode: "highest",
                                    voids: a
                                }), [, P] = O, k = Q.isStart(u, D, P), j = Q.isEnd(u, D, P), N = Q.pathRef(u, c && !y.length ? ui.next(l) : l), _ = Q.pathRef(u, j ? ui.next(P) : P);
                                uI.splitNodes(u, {
                                    at: D,
                                    match: e => w ? J.isElement(e) && Q.isBlock(u, e) : uy.isText(e) || Q.isInline(u, e),
                                    mode: w ? "lowest" : "highest",
                                    always: w && (!B || g.length > 0) && (!c || y.length > 0),
                                    voids: a
                                });
                                var R = Q.pathRef(u, !k || k && j ? ui.next(P) : P);
                                if (uI.insertNodes(u, g, {
                                        at: R.current,
                                        match: e => uy.isText(e) || Q.isInline(u, e),
                                        mode: "highest",
                                        voids: a
                                    }), f && !g.length && m.length && !y.length && uI.delete(u, {
                                        at: l,
                                        voids: a
                                    }), uI.insertNodes(u, m, {
                                        at: N.current,
                                        match: e => J.isElement(e) && Q.isBlock(u, e),
                                        mode: "lowest",
                                        voids: a
                                    }), uI.insertNodes(u, y, {
                                        at: _.current,
                                        match: e => uy.isText(e) || Q.isInline(u, e),
                                        mode: "highest",
                                        voids: a
                                    }), !t.at && (y.length > 0 && _.current ? r = ui.previous(_.current) : m.length > 0 && N.current ? r = ui.previous(N.current) : R.current && (r = ui.previous(R.current)), r)) {
                                    var T = Q.end(u, r);
                                    uI.select(u, T)
                                }
                                R.unref(), N.unref(), _.unref()
                            }
                        }
                    })
                },
                insertText(u, e) {
                    var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                    Q.withoutNormalizing(u, () => {
                        var {
                            voids: r = !1
                        } = t, {
                            at: n = u.selection
                        } = t;
                        if (n) {
                            if (ui.isPath(n) && (n = Q.range(u, n)), uA.isRange(n)) {
                                if (uA.isCollapsed(n)) n = n.anchor;
                                else {
                                    var a = uA.end(n);
                                    if (!r && Q.void(u, {
                                            at: a
                                        })) return;
                                    var D = uA.start(n),
                                        i = Q.pointRef(u, D),
                                        o = Q.pointRef(u, a);
                                    uI.delete(u, {
                                        at: n,
                                        voids: r
                                    });
                                    var s = i.unref(),
                                        C = o.unref();
                                    n = s || C, uI.setSelection(u, {
                                        anchor: n,
                                        focus: n
                                    })
                                }
                            }
                            if (!(!r && Q.void(u, {
                                    at: n
                                }))) {
                                var {
                                    path: l,
                                    offset: B
                                } = n;
                                e.length > 0 && u.apply({
                                    type: "insert_text",
                                    path: l,
                                    offset: B,
                                    text: e
                                })
                            }
                        }
                    })
                }
            })
        }
    }
]);