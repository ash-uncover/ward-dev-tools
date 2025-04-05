var il = Object.defineProperty;
var Sa = (e) => {
  throw TypeError(e);
};
var al = (e, t, r) => t in e ? il(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var Be = (e, t, r) => al(e, typeof t != "symbol" ? t + "" : t, r), Da = (e, t, r) => t.has(e) || Sa("Cannot " + r);
var Ne = (e, t, r) => (Da(e, t, "read from private field"), r ? r.call(e) : t.get(e)), Ni = (e, t, r) => t.has(e) ? Sa("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), Ii = (e, t, r, i) => (Da(e, t, "write to private field"), i ? i.call(e, r) : t.set(e, r), r);
const sl = "5";
var su;
typeof window < "u" && ((su = window.__svelte ?? (window.__svelte = {})).v ?? (su.v = /* @__PURE__ */ new Set())).add(sl);
let gr = !1, ol = !1;
function ul() {
  gr = !0;
}
ul();
const ll = 1, cl = 2, dl = 16, fl = 2, hl = 1, ml = 2, aa = "[", sa = "[!", oa = "]", un = {}, Ie = Symbol(), pl = "http://www.w3.org/1999/xhtml", Oa = !1, lt = 2, ou = 4, _i = 8, ua = 16, St = 32, rr = 64, si = 128, Ve = 256, oi = 512, Ae = 1024, Dt = 2048, nr = 4096, $t = 8192, yi = 16384, vl = 32768, la = 65536, gl = 1 << 17, _l = 1 << 19, uu = 1 << 20, Yi = 1 << 21, Qt = Symbol("$state"), lu = Symbol("legacy props"), yl = Symbol("");
var ca = Array.isArray, Pl = Array.prototype.indexOf, da = Array.from, ui = Object.keys, cn = Object.defineProperty, Zt = Object.getOwnPropertyDescriptor, cu = Object.getOwnPropertyDescriptors, wl = Object.prototype, bl = Array.prototype, fa = Object.getPrototypeOf, Ta = Object.isExtensible;
const mr = () => {
};
function $l(e) {
  return e();
}
function li(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
let dn = [], Xi = [];
function du() {
  var e = dn;
  dn = [], li(e);
}
function El() {
  var e = Xi;
  Xi = [], li(e);
}
function fu(e) {
  dn.length === 0 && queueMicrotask(du), dn.push(e);
}
function ja() {
  dn.length > 0 && du(), Xi.length > 0 && El();
}
function hu(e) {
  return e === this.v;
}
function mu(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function pu(e) {
  return !mu(e, this.v);
}
function Sl(e) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function Dl() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function Ol(e) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function Tl() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function jl() {
  throw new Error("https://svelte.dev/e/hydration_failed");
}
function Rl() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function Ml() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function Nl() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function fr(e, t) {
  if (typeof e != "object" || e === null || Qt in e)
    return e;
  const r = fa(e);
  if (r !== wl && r !== bl)
    return e;
  var i = /* @__PURE__ */ new Map(), s = ca(e), n = Rt(0), a = he, o = (l) => {
    var c = he;
    Ge(a);
    var f;
    return f = l(), Ge(c), f;
  };
  return s && i.set("length", Rt(
    /** @type {any[]} */
    e.length
  )), new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(l, c, f) {
        (!("value" in f) || f.configurable === !1 || f.enumerable === !1 || f.writable === !1) && Rl();
        var m = i.get(c);
        return m === void 0 ? (m = o(() => Rt(f.value)), i.set(c, m)) : ee(
          m,
          o(() => fr(f.value))
        ), !0;
      },
      deleteProperty(l, c) {
        var f = i.get(c);
        if (f === void 0)
          c in l && i.set(
            c,
            o(() => Rt(Ie))
          );
        else {
          if (s && typeof c == "string") {
            var m = (
              /** @type {Source<number>} */
              i.get("length")
            ), d = Number(c);
            Number.isInteger(d) && d < m.v && ee(m, d);
          }
          ee(f, Ie), Ra(n);
        }
        return !0;
      },
      get(l, c, f) {
        var P;
        if (c === Qt)
          return e;
        var m = i.get(c), d = c in l;
        if (m === void 0 && (!d || (P = Zt(l, c)) != null && P.writable) && (m = o(() => Rt(fr(d ? l[c] : Ie))), i.set(c, m)), m !== void 0) {
          var g = R(m);
          return g === Ie ? void 0 : g;
        }
        return Reflect.get(l, c, f);
      },
      getOwnPropertyDescriptor(l, c) {
        var f = Reflect.getOwnPropertyDescriptor(l, c);
        if (f && "value" in f) {
          var m = i.get(c);
          m && (f.value = R(m));
        } else if (f === void 0) {
          var d = i.get(c), g = d == null ? void 0 : d.v;
          if (d !== void 0 && g !== Ie)
            return {
              enumerable: !0,
              configurable: !0,
              value: g,
              writable: !0
            };
        }
        return f;
      },
      has(l, c) {
        var g;
        if (c === Qt)
          return !0;
        var f = i.get(c), m = f !== void 0 && f.v !== Ie || Reflect.has(l, c);
        if (f !== void 0 || me !== null && (!m || (g = Zt(l, c)) != null && g.writable)) {
          f === void 0 && (f = o(() => Rt(m ? fr(l[c]) : Ie)), i.set(c, f));
          var d = R(f);
          if (d === Ie)
            return !1;
        }
        return m;
      },
      set(l, c, f, m) {
        var p;
        var d = i.get(c), g = c in l;
        if (s && c === "length")
          for (var P = f; P < /** @type {Source<number>} */
          d.v; P += 1) {
            var _ = i.get(P + "");
            _ !== void 0 ? ee(_, Ie) : P in l && (_ = o(() => Rt(Ie)), i.set(P + "", _));
          }
        d === void 0 ? (!g || (p = Zt(l, c)) != null && p.writable) && (d = o(() => Rt(void 0)), ee(
          d,
          o(() => fr(f))
        ), i.set(c, d)) : (g = d.v !== Ie, ee(
          d,
          o(() => fr(f))
        ));
        var h = Reflect.getOwnPropertyDescriptor(l, c);
        if (h != null && h.set && h.set.call(m, f), !g) {
          if (s && typeof c == "string") {
            var v = (
              /** @type {Source<number>} */
              i.get("length")
            ), u = Number(c);
            Number.isInteger(u) && u >= v.v && ee(v, u + 1);
          }
          Ra(n);
        }
        return !0;
      },
      ownKeys(l) {
        R(n);
        var c = Reflect.ownKeys(l).filter((d) => {
          var g = i.get(d);
          return g === void 0 || g.v !== Ie;
        });
        for (var [f, m] of i)
          m.v !== Ie && !(f in l) && c.push(f);
        return c;
      },
      setPrototypeOf() {
        Ml();
      }
    }
  );
}
function Ra(e, t = 1) {
  ee(e, e.v + t);
}
const fn = /* @__PURE__ */ new Map();
function hn(e, t) {
  var r = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: e,
    reactions: null,
    equals: hu,
    rv: 0,
    wv: 0
  };
  return r;
}
function Rt(e, t) {
  const r = hn(e);
  return kl(r), r;
}
// @__NO_SIDE_EFFECTS__
function ie(e, t = !1) {
  var i;
  const r = hn(e);
  return t || (r.equals = pu), gr && ge !== null && ge.l !== null && ((i = ge.l).s ?? (i.s = [])).push(r), r;
}
function sn(e, t) {
  return ee(
    e,
    ir(() => R(e))
  ), t;
}
function ee(e, t, r = !1) {
  he !== null && !ot && Ei() && (he.f & (lt | ua)) !== 0 && !(je != null && je.includes(e)) && Nl();
  let i = r ? fr(t) : t;
  return vu(e, i);
}
function vu(e, t) {
  if (!e.equals(t)) {
    var r = e.v;
    pn ? fn.set(e, t) : fn.set(e, r), e.v = t, e.wv = Su(), gu(e, Dt), Ei() && me !== null && (me.f & Ae) !== 0 && (me.f & (St | rr)) === 0 && (Fe === null ? ql([e]) : Fe.push(e));
  }
  return t;
}
function gu(e, t) {
  var r = e.reactions;
  if (r !== null)
    for (var i = Ei(), s = r.length, n = 0; n < s; n++) {
      var a = r[n], o = a.f;
      (o & Dt) === 0 && (!i && a === me || (xe(a, t), (o & (Ae | Ve)) !== 0 && ((o & lt) !== 0 ? gu(
        /** @type {Derived} */
        a,
        nr
      ) : $i(
        /** @type {Effect} */
        a
      ))));
    }
}
// @__NO_SIDE_EFFECTS__
function ha(e) {
  var t = lt | Dt, r = he !== null && (he.f & lt) !== 0 ? (
    /** @type {Derived} */
    he
  ) : null;
  return me === null || r !== null && (r.f & Ve) !== 0 ? t |= Ve : me.f |= uu, {
    ctx: ge,
    deps: null,
    effects: null,
    equals: hu,
    f: t,
    fn: e,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      null
    ),
    wv: 0,
    parent: r ?? me
  };
}
// @__NO_SIDE_EFFECTS__
function He(e) {
  const t = /* @__PURE__ */ ha(e);
  return t.equals = pu, t;
}
function _u(e) {
  var t = e.effects;
  if (t !== null) {
    e.effects = null;
    for (var r = 0; r < t.length; r += 1)
      Et(
        /** @type {Effect} */
        t[r]
      );
  }
}
function Il(e) {
  for (var t = e.parent; t !== null; ) {
    if ((t.f & lt) === 0)
      return (
        /** @type {Effect} */
        t
      );
    t = t.parent;
  }
  return null;
}
function Cl(e) {
  var t, r = me;
  ct(Il(e));
  try {
    _u(e), t = Ou(e);
  } finally {
    ct(r);
  }
  return t;
}
function yu(e) {
  var t = Cl(e), r = (Ht || (e.f & Ve) !== 0) && e.deps !== null ? nr : Ae;
  xe(e, r), e.equals(t) || (e.v = t, e.wv = Su());
}
function ma(e) {
  console.warn("https://svelte.dev/e/hydration_mismatch");
}
let ve = !1;
function Qe(e) {
  ve = e;
}
let _e;
function Ze(e) {
  if (e === null)
    throw ma(), un;
  return _e = e;
}
function Pi() {
  return Ze(
    /** @type {TemplateNode} */
    /* @__PURE__ */ zt(_e)
  );
}
function L(e) {
  if (ve) {
    if (/* @__PURE__ */ zt(_e) !== null)
      throw ma(), un;
    _e = e;
  }
}
function Qi() {
  for (var e = 0, t = _e; ; ) {
    if (t.nodeType === 8) {
      var r = (
        /** @type {Comment} */
        t.data
      );
      if (r === oa) {
        if (e === 0) return t;
        e -= 1;
      } else (r === aa || r === sa) && (e += 1);
    }
    var i = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ zt(t)
    );
    t.remove(), t = i;
  }
}
var Ma, Pu, wu, bu;
function Zi() {
  if (Ma === void 0) {
    Ma = window, Pu = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype, r = Text.prototype;
    wu = Zt(t, "firstChild").get, bu = Zt(t, "nextSibling").get, Ta(e) && (e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__style = void 0, e.__e = void 0), Ta(r) && (r.__t = void 0);
  }
}
function vr(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function er(e) {
  return wu.call(e);
}
// @__NO_SIDE_EFFECTS__
function zt(e) {
  return bu.call(e);
}
function W(e, t) {
  if (!ve)
    return /* @__PURE__ */ er(e);
  var r = (
    /** @type {TemplateNode} */
    /* @__PURE__ */ er(_e)
  );
  if (r === null)
    r = _e.appendChild(vr());
  else if (t && r.nodeType !== 3) {
    var i = vr();
    return r == null || r.before(i), Ze(i), i;
  }
  return Ze(r), r;
}
function Gt(e, t) {
  if (!ve) {
    var r = (
      /** @type {DocumentFragment} */
      /* @__PURE__ */ er(
        /** @type {Node} */
        e
      )
    );
    return r instanceof Comment && r.data === "" ? /* @__PURE__ */ zt(r) : r;
  }
  return _e;
}
function z(e, t = 1, r = !1) {
  let i = ve ? _e : e;
  for (var s; t--; )
    s = i, i = /** @type {TemplateNode} */
    /* @__PURE__ */ zt(i);
  if (!ve)
    return i;
  var n = i == null ? void 0 : i.nodeType;
  if (r && n !== 3) {
    var a = vr();
    return i === null ? s == null || s.after(a) : i.before(a), Ze(a), a;
  }
  return Ze(i), /** @type {TemplateNode} */
  i;
}
function $u(e) {
  e.textContent = "";
}
let ii = !1, ci = !1, di = null, xt = !1, pn = !1;
function Na(e) {
  pn = e;
}
let ln = [];
let he = null, ot = !1;
function Ge(e) {
  he = e;
}
let me = null;
function ct(e) {
  me = e;
}
let je = null;
function Al(e) {
  je = e;
}
function kl(e) {
  he !== null && he.f & Yi && (je === null ? Al([e]) : je.push(e));
}
let Se = null, qe = 0, Fe = null;
function ql(e) {
  Fe = e;
}
let Eu = 1, fi = 0, Ht = !1;
function Su() {
  return ++Eu;
}
function _r(e) {
  var m;
  var t = e.f;
  if ((t & Dt) !== 0)
    return !0;
  if ((t & nr) !== 0) {
    var r = e.deps, i = (t & Ve) !== 0;
    if (r !== null) {
      var s, n, a = (t & oi) !== 0, o = i && me !== null && !Ht, l = r.length;
      if (a || o) {
        var c = (
          /** @type {Derived} */
          e
        ), f = c.parent;
        for (s = 0; s < l; s++)
          n = r[s], (a || !((m = n == null ? void 0 : n.reactions) != null && m.includes(c))) && (n.reactions ?? (n.reactions = [])).push(c);
        a && (c.f ^= oi), o && f !== null && (f.f & Ve) === 0 && (c.f ^= Ve);
      }
      for (s = 0; s < l; s++)
        if (n = r[s], _r(
          /** @type {Derived} */
          n
        ) && yu(
          /** @type {Derived} */
          n
        ), n.wv > e.wv)
          return !0;
    }
    (!i || me !== null && !Ht) && xe(e, Ae);
  }
  return !1;
}
function Ul(e, t) {
  for (var r = t; r !== null; ) {
    if ((r.f & si) !== 0)
      try {
        r.fn(e);
        return;
      } catch {
        r.f ^= si;
      }
    r = r.parent;
  }
  throw ii = !1, e;
}
function Ll(e) {
  return (e.f & yi) === 0 && (e.parent === null || (e.parent.f & si) === 0);
}
function wi(e, t, r, i) {
  if (ii) {
    if (r === null && (ii = !1), Ll(t))
      throw e;
    return;
  }
  r !== null && (ii = !0);
  {
    Ul(e, t);
    return;
  }
}
function Du(e, t, r = !0) {
  var i = e.reactions;
  if (i !== null)
    for (var s = 0; s < i.length; s++) {
      var n = i[s];
      je != null && je.includes(e) || ((n.f & lt) !== 0 ? Du(
        /** @type {Derived} */
        n,
        t,
        !1
      ) : t === n && (r ? xe(n, Dt) : (n.f & Ae) !== 0 && xe(n, nr), $i(
        /** @type {Effect} */
        n
      )));
    }
}
function Ou(e) {
  var g;
  var t = Se, r = qe, i = Fe, s = he, n = Ht, a = je, o = ge, l = ot, c = e.f;
  Se = /** @type {null | Value[]} */
  null, qe = 0, Fe = null, Ht = (c & Ve) !== 0 && (ot || !xt || he === null), he = (c & (St | rr)) === 0 ? e : null, je = null, Ia(e.ctx), ot = !1, fi++, e.f |= Yi;
  try {
    var f = (
      /** @type {Function} */
      (0, e.fn)()
    ), m = e.deps;
    if (Se !== null) {
      var d;
      if (hi(e, qe), m !== null && qe > 0)
        for (m.length = qe + Se.length, d = 0; d < Se.length; d++)
          m[qe + d] = Se[d];
      else
        e.deps = m = Se;
      if (!Ht)
        for (d = qe; d < m.length; d++)
          ((g = m[d]).reactions ?? (g.reactions = [])).push(e);
    } else m !== null && qe < m.length && (hi(e, qe), m.length = qe);
    if (Ei() && Fe !== null && !ot && m !== null && (e.f & (lt | nr | Dt)) === 0)
      for (d = 0; d < /** @type {Source[]} */
      Fe.length; d++)
        Du(
          Fe[d],
          /** @type {Effect} */
          e
        );
    return s !== null && (fi++, Fe !== null && (i === null ? i = Fe : i.push(.../** @type {Source[]} */
    Fe))), f;
  } finally {
    Se = t, qe = r, Fe = i, he = s, Ht = n, je = a, Ia(o), ot = l, e.f ^= Yi;
  }
}
function Fl(e, t) {
  let r = t.reactions;
  if (r !== null) {
    var i = Pl.call(r, e);
    if (i !== -1) {
      var s = r.length - 1;
      s === 0 ? r = t.reactions = null : (r[i] = r[s], r.pop());
    }
  }
  r === null && (t.f & lt) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (Se === null || !Se.includes(t)) && (xe(t, nr), (t.f & (Ve | oi)) === 0 && (t.f ^= oi), _u(
    /** @type {Derived} **/
    t
  ), hi(
    /** @type {Derived} **/
    t,
    0
  ));
}
function hi(e, t) {
  var r = e.deps;
  if (r !== null)
    for (var i = t; i < r.length; i++)
      Fl(e, r[i]);
}
function bi(e) {
  var t = e.f;
  if ((t & yi) === 0) {
    xe(e, Ae);
    var r = me, i = ge, s = xt;
    me = e, xt = !0;
    try {
      (t & ua) !== 0 ? Xl(e) : Mu(e), Ru(e);
      var n = Ou(e);
      e.teardown = typeof n == "function" ? n : null, e.wv = Eu;
      var a = e.deps, o;
      Oa && ol && e.f & Dt;
    } catch (l) {
      wi(l, e, r, i || e.ctx);
    } finally {
      xt = s, me = r;
    }
  }
}
function Wl() {
  try {
    Tl();
  } catch (e) {
    if (di !== null)
      wi(e, di, null);
    else
      throw e;
  }
}
function Tu() {
  var e = xt;
  try {
    var t = 0;
    for (xt = !0; ln.length > 0; ) {
      t++ > 1e3 && Wl();
      var r = ln, i = r.length;
      ln = [];
      for (var s = 0; s < i; s++) {
        var n = Hl(r[s]);
        Vl(n);
      }
    }
  } finally {
    ci = !1, xt = e, di = null, fn.clear();
  }
}
function Vl(e) {
  var t = e.length;
  if (t !== 0)
    for (var r = 0; r < t; r++) {
      var i = e[r];
      if ((i.f & (yi | $t)) === 0)
        try {
          _r(i) && (bi(i), i.deps === null && i.first === null && i.nodes_start === null && (i.teardown === null ? Nu(i) : i.fn = null));
        } catch (s) {
          wi(s, i, null, i.ctx);
        }
    }
}
function $i(e) {
  ci || (ci = !0, queueMicrotask(Tu));
  for (var t = di = e; t.parent !== null; ) {
    t = t.parent;
    var r = t.f;
    if ((r & (rr | St)) !== 0) {
      if ((r & Ae) === 0) return;
      t.f ^= Ae;
    }
  }
  ln.push(t);
}
function Hl(e) {
  for (var t = [], r = e; r !== null; ) {
    var i = r.f, s = (i & (St | rr)) !== 0, n = s && (i & Ae) !== 0;
    if (!n && (i & $t) === 0) {
      if ((i & ou) !== 0)
        t.push(r);
      else if (s)
        r.f ^= Ae;
      else {
        var a = he;
        try {
          he = r, _r(r) && bi(r);
        } catch (c) {
          wi(c, r, null, r.ctx);
        } finally {
          he = a;
        }
      }
      var o = r.first;
      if (o !== null) {
        r = o;
        continue;
      }
    }
    var l = r.parent;
    for (r = r.next; r === null && l !== null; )
      r = l.next, l = l.parent;
  }
  return t;
}
function Gl(e) {
  var t;
  for (ja(); ln.length > 0; )
    ci = !0, Tu(), ja();
  return (
    /** @type {T} */
    t
  );
}
function R(e) {
  var t = e.f, r = (t & lt) !== 0;
  if (he !== null && !ot) {
    if (!(je != null && je.includes(e))) {
      var i = he.deps;
      e.rv < fi && (e.rv = fi, Se === null && i !== null && i[qe] === e ? qe++ : Se === null ? Se = [e] : (!Ht || !Se.includes(e)) && Se.push(e));
    }
  } else if (r && /** @type {Derived} */
  e.deps === null && /** @type {Derived} */
  e.effects === null) {
    var s = (
      /** @type {Derived} */
      e
    ), n = s.parent;
    n !== null && (n.f & Ve) === 0 && (s.f ^= Ve);
  }
  return r && (s = /** @type {Derived} */
  e, _r(s) && yu(s)), pn && fn.has(e) ? fn.get(e) : e.v;
}
function ir(e) {
  var t = ot;
  try {
    return ot = !0, e();
  } finally {
    ot = t;
  }
}
const zl = -7169;
function xe(e, t) {
  e.f = e.f & zl | t;
}
function ar(e) {
  if (!(typeof e != "object" || !e || e instanceof EventTarget)) {
    if (Qt in e)
      xi(e);
    else if (!Array.isArray(e))
      for (let t in e) {
        const r = e[t];
        typeof r == "object" && r && Qt in r && xi(r);
      }
  }
}
function xi(e, t = /* @__PURE__ */ new Set()) {
  if (typeof e == "object" && e !== null && // We don't want to traverse DOM elements
  !(e instanceof EventTarget) && !t.has(e)) {
    t.add(e), e instanceof Date && e.getTime();
    for (let i in e)
      try {
        xi(e[i], t);
      } catch {
      }
    const r = fa(e);
    if (r !== Object.prototype && r !== Array.prototype && r !== Map.prototype && r !== Set.prototype && r !== Date.prototype) {
      const i = cu(r);
      for (let s in i) {
        const n = i[s].get;
        if (n)
          try {
            n.call(e);
          } catch {
          }
      }
    }
  }
}
function ju(e) {
  me === null && he === null && Ol(), he !== null && (he.f & Ve) !== 0 && me === null && Dl(), pn && Sl();
}
function Kl(e, t) {
  var r = t.last;
  r === null ? t.last = t.first = e : (r.next = e, e.prev = r, t.last = e);
}
function sr(e, t, r, i = !0) {
  var s = me, n = {
    ctx: ge,
    deps: null,
    nodes_start: null,
    nodes_end: null,
    f: e | Dt,
    first: null,
    fn: t,
    last: null,
    next: null,
    parent: s,
    prev: null,
    teardown: null,
    transitions: null,
    wv: 0
  };
  if (r)
    try {
      bi(n), n.f |= vl;
    } catch (l) {
      throw Et(n), l;
    }
  else t !== null && $i(n);
  var a = r && n.deps === null && n.first === null && n.nodes_start === null && n.teardown === null && (n.f & (uu | si)) === 0;
  if (!a && i && (s !== null && Kl(n, s), he !== null && (he.f & lt) !== 0)) {
    var o = (
      /** @type {Derived} */
      he
    );
    (o.effects ?? (o.effects = [])).push(n);
  }
  return n;
}
function pa(e) {
  const t = sr(_i, null, !1);
  return xe(t, Ae), t.teardown = e, t;
}
function ea(e) {
  ju();
  var t = me !== null && (me.f & St) !== 0 && ge !== null && !ge.m;
  if (t) {
    var r = (
      /** @type {ComponentContext} */
      ge
    );
    (r.e ?? (r.e = [])).push({
      fn: e,
      effect: me,
      reaction: he
    });
  } else {
    var i = va(e);
    return i;
  }
}
function Jl(e) {
  return ju(), vn(e);
}
function Bl(e) {
  const t = sr(rr, e, !0);
  return () => {
    Et(t);
  };
}
function Yl(e) {
  const t = sr(rr, e, !0);
  return (r = {}) => new Promise((i) => {
    r.outro ? mi(t, () => {
      Et(t), i(void 0);
    }) : (Et(t), i(void 0));
  });
}
function va(e) {
  return sr(ou, e, !1);
}
function Ce(e, t) {
  var r = (
    /** @type {ComponentContextLegacy} */
    ge
  ), i = { effect: null, ran: !1 };
  r.l.r1.push(i), i.effect = vn(() => {
    e(), !i.ran && (i.ran = !0, ee(r.l.r2, !0), ir(t));
  });
}
function Ot() {
  var e = (
    /** @type {ComponentContextLegacy} */
    ge
  );
  vn(() => {
    if (R(e.l.r2)) {
      for (var t of e.l.r1) {
        var r = t.effect;
        (r.f & Ae) !== 0 && xe(r, nr), _r(r) && bi(r), t.ran = !1;
      }
      e.l.r2.v = !1;
    }
  });
}
function vn(e) {
  return sr(_i, e, !0);
}
function le(e, t = [], r = ha) {
  const i = t.map(r);
  return ga(() => e(...i.map(R)));
}
function ga(e, t = 0) {
  return sr(_i | ua | t, e, !0);
}
function mn(e, t = !0) {
  return sr(_i | St, e, !0, t);
}
function Ru(e) {
  var t = e.teardown;
  if (t !== null) {
    const r = pn, i = he;
    Na(!0), Ge(null);
    try {
      t.call(null);
    } finally {
      Na(r), Ge(i);
    }
  }
}
function Mu(e, t = !1) {
  var r = e.first;
  for (e.first = e.last = null; r !== null; ) {
    var i = r.next;
    (r.f & rr) !== 0 ? r.parent = null : Et(r, t), r = i;
  }
}
function Xl(e) {
  for (var t = e.first; t !== null; ) {
    var r = t.next;
    (t.f & St) === 0 && Et(t), t = r;
  }
}
function Et(e, t = !0) {
  var r = !1;
  if ((t || (e.f & _l) !== 0) && e.nodes_start !== null) {
    for (var i = e.nodes_start, s = e.nodes_end; i !== null; ) {
      var n = i === s ? null : (
        /** @type {TemplateNode} */
        /* @__PURE__ */ zt(i)
      );
      i.remove(), i = n;
    }
    r = !0;
  }
  Mu(e, t && !r), hi(e, 0), xe(e, yi);
  var a = e.transitions;
  if (a !== null)
    for (const l of a)
      l.stop();
  Ru(e);
  var o = e.parent;
  o !== null && o.first !== null && Nu(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes_start = e.nodes_end = null;
}
function Nu(e) {
  var t = e.parent, r = e.prev, i = e.next;
  r !== null && (r.next = i), i !== null && (i.prev = r), t !== null && (t.first === e && (t.first = i), t.last === e && (t.last = r));
}
function mi(e, t) {
  var r = [];
  _a(e, r, !0), Iu(r, () => {
    Et(e), t && t();
  });
}
function Iu(e, t) {
  var r = e.length;
  if (r > 0) {
    var i = () => --r || t();
    for (var s of e)
      s.out(i);
  } else
    t();
}
function _a(e, t, r) {
  if ((e.f & $t) === 0) {
    if (e.f ^= $t, e.transitions !== null)
      for (const a of e.transitions)
        (a.is_global || r) && t.push(a);
    for (var i = e.first; i !== null; ) {
      var s = i.next, n = (i.f & la) !== 0 || (i.f & St) !== 0;
      _a(i, t, n ? r : !1), i = s;
    }
  }
}
function pi(e) {
  Cu(e, !0);
}
function Cu(e, t) {
  if ((e.f & $t) !== 0) {
    e.f ^= $t, (e.f & Ae) === 0 && (e.f ^= Ae), _r(e) && (xe(e, Dt), $i(e));
    for (var r = e.first; r !== null; ) {
      var i = r.next, s = (r.f & la) !== 0 || (r.f & St) !== 0;
      Cu(r, s ? t : !1), r = i;
    }
    if (e.transitions !== null)
      for (const n of e.transitions)
        (n.is_global || t) && n.in();
  }
}
function Au(e) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
let ge = null;
function Ia(e) {
  ge = e;
}
function ze(e, t = !1, r) {
  var i = ge = {
    p: ge,
    c: null,
    d: !1,
    e: null,
    m: !1,
    s: e,
    x: null,
    l: null
  };
  gr && !t && (ge.l = {
    s: null,
    u: null,
    r1: [],
    r2: hn(!1)
  }), pa(() => {
    i.d = !0;
  });
}
function Ke(e) {
  const t = ge;
  if (t !== null) {
    const a = t.e;
    if (a !== null) {
      var r = me, i = he;
      t.e = null;
      try {
        for (var s = 0; s < a.length; s++) {
          var n = a[s];
          ct(n.effect), Ge(n.reaction), va(n.fn);
        }
      } finally {
        ct(r), Ge(i);
      }
    }
    ge = t.p, t.m = !0;
  }
  return (
    /** @type {T} */
    {}
  );
}
function Ei() {
  return !gr || ge !== null && ge.l === null;
}
const Ql = ["touchstart", "touchmove"];
function Zl(e) {
  return Ql.includes(e);
}
function xl(e) {
  var t = he, r = me;
  Ge(null), ct(null);
  try {
    return e();
  } finally {
    Ge(t), ct(r);
  }
}
const ec = /* @__PURE__ */ new Set(), Ca = /* @__PURE__ */ new Set();
function tc(e, t, r, i = {}) {
  function s(n) {
    if (i.capture || on.call(t, n), !n.cancelBubble)
      return xl(() => r == null ? void 0 : r.call(this, n));
  }
  return e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? fu(() => {
    t.addEventListener(e, s, i);
  }) : t.addEventListener(e, s, i), s;
}
function hr(e, t, r, i, s) {
  var n = { capture: i, passive: s }, a = tc(e, t, r, n);
  (t === document.body || t === window || t === document) && pa(() => {
    t.removeEventListener(e, a, n);
  });
}
function on(e) {
  var u;
  var t = this, r = (
    /** @type {Node} */
    t.ownerDocument
  ), i = e.type, s = ((u = e.composedPath) == null ? void 0 : u.call(e)) || [], n = (
    /** @type {null | Element} */
    s[0] || e.target
  ), a = 0, o = e.__root;
  if (o) {
    var l = s.indexOf(o);
    if (l !== -1 && (t === document || t === /** @type {any} */
    window)) {
      e.__root = t;
      return;
    }
    var c = s.indexOf(t);
    if (c === -1)
      return;
    l <= c && (a = l);
  }
  if (n = /** @type {Element} */
  s[a] || e.target, n !== t) {
    cn(e, "currentTarget", {
      configurable: !0,
      get() {
        return n || r;
      }
    });
    var f = he, m = me;
    Ge(null), ct(null);
    try {
      for (var d, g = []; n !== null; ) {
        var P = n.assignedSlot || n.parentNode || /** @type {any} */
        n.host || null;
        try {
          var _ = n["__" + i];
          if (_ != null && (!/** @type {any} */
          n.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          e.target === n))
            if (ca(_)) {
              var [h, ...v] = _;
              h.apply(n, [e, ...v]);
            } else
              _.call(n, e);
        } catch (p) {
          d ? g.push(p) : d = p;
        }
        if (e.cancelBubble || P === t || P === null)
          break;
        n = P;
      }
      if (d) {
        for (let p of g)
          queueMicrotask(() => {
            throw p;
          });
        throw d;
      }
    } finally {
      e.__root = t, delete e.currentTarget, Ge(f), ct(m);
    }
  }
}
function rc(e) {
  var t = document.createElement("template");
  return t.innerHTML = e, t.content;
}
function pr(e, t) {
  var r = (
    /** @type {Effect} */
    me
  );
  r.nodes_start === null && (r.nodes_start = e, r.nodes_end = t);
}
// @__NO_SIDE_EFFECTS__
function de(e, t) {
  var r = (t & hl) !== 0, i = (t & ml) !== 0, s, n = !e.startsWith("<!>");
  return () => {
    if (ve)
      return pr(_e, null), _e;
    s === void 0 && (s = rc(n ? e : "<!>" + e), r || (s = /** @type {Node} */
    /* @__PURE__ */ er(s)));
    var a = (
      /** @type {TemplateNode} */
      i || Pu ? document.importNode(s, !0) : s.cloneNode(!0)
    );
    if (r) {
      var o = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ er(a)
      ), l = (
        /** @type {TemplateNode} */
        a.lastChild
      );
      pr(o, l);
    } else
      pr(a, a);
    return a;
  };
}
function tr() {
  if (ve)
    return pr(_e, null), _e;
  var e = document.createDocumentFragment(), t = document.createComment(""), r = vr();
  return e.append(t, r), pr(t, r), e;
}
function re(e, t) {
  if (ve) {
    me.nodes_end = _e, Pi();
    return;
  }
  e !== null && e.before(
    /** @type {Node} */
    t
  );
}
function te(e, t) {
  var r = t == null ? "" : typeof t == "object" ? t + "" : t;
  r !== (e.__t ?? (e.__t = e.nodeValue)) && (e.__t = r, e.nodeValue = r + "");
}
function ku(e, t) {
  return qu(e, t);
}
function nc(e, t) {
  Zi(), t.intro = t.intro ?? !1;
  const r = t.target, i = ve, s = _e;
  try {
    for (var n = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ er(r)
    ); n && (n.nodeType !== 8 || /** @type {Comment} */
    n.data !== aa); )
      n = /** @type {TemplateNode} */
      /* @__PURE__ */ zt(n);
    if (!n)
      throw un;
    Qe(!0), Ze(
      /** @type {Comment} */
      n
    ), Pi();
    const a = qu(e, { ...t, anchor: n });
    if (_e === null || _e.nodeType !== 8 || /** @type {Comment} */
    _e.data !== oa)
      throw ma(), un;
    return Qe(!1), /**  @type {Exports} */
    a;
  } catch (a) {
    if (a === un)
      return t.recover === !1 && jl(), Zi(), $u(r), Qe(!1), ku(e, t);
    throw a;
  } finally {
    Qe(i), Ze(s);
  }
}
const ur = /* @__PURE__ */ new Map();
function qu(e, { target: t, anchor: r, props: i = {}, events: s, context: n, intro: a = !0 }) {
  Zi();
  var o = /* @__PURE__ */ new Set(), l = (m) => {
    for (var d = 0; d < m.length; d++) {
      var g = m[d];
      if (!o.has(g)) {
        o.add(g);
        var P = Zl(g);
        t.addEventListener(g, on, { passive: P });
        var _ = ur.get(g);
        _ === void 0 ? (document.addEventListener(g, on, { passive: P }), ur.set(g, 1)) : ur.set(g, _ + 1);
      }
    }
  };
  l(da(ec)), Ca.add(l);
  var c = void 0, f = Yl(() => {
    var m = r ?? t.appendChild(vr());
    return mn(() => {
      if (n) {
        ze({});
        var d = (
          /** @type {ComponentContext} */
          ge
        );
        d.c = n;
      }
      s && (i.$$events = s), ve && pr(
        /** @type {TemplateNode} */
        m,
        null
      ), c = e(m, i) || {}, ve && (me.nodes_end = _e), n && Ke();
    }), () => {
      var P;
      for (var d of o) {
        t.removeEventListener(d, on);
        var g = (
          /** @type {number} */
          ur.get(d)
        );
        --g === 0 ? (document.removeEventListener(d, on), ur.delete(d)) : ur.set(d, g);
      }
      Ca.delete(l), m !== r && ((P = m.parentNode) == null || P.removeChild(m));
    };
  });
  return ta.set(c, f), c;
}
let ta = /* @__PURE__ */ new WeakMap();
function ic(e, t) {
  const r = ta.get(e);
  return r ? (ta.delete(e), r(t)) : Promise.resolve();
}
function De(e, t, [r, i] = [0, 0]) {
  ve && r === 0 && Pi();
  var s = e, n = null, a = null, o = Ie, l = r > 0 ? la : 0, c = !1;
  const f = (d, g = !0) => {
    c = !0, m(g, d);
  }, m = (d, g) => {
    if (o === (o = d)) return;
    let P = !1;
    if (ve && i !== -1) {
      if (r === 0) {
        const h = (
          /** @type {Comment} */
          s.data
        );
        h === aa ? i = 0 : h === sa ? i = 1 / 0 : (i = parseInt(h.substring(1)), i !== i && (i = o ? 1 / 0 : -1));
      }
      const _ = i > r;
      !!o === _ && (s = Qi(), Ze(s), Qe(!1), P = !0, i = -1);
    }
    o ? (n ? pi(n) : g && (n = mn(() => g(s))), a && mi(a, () => {
      a = null;
    })) : (a ? pi(a) : g && (a = mn(() => g(s, [r + 1, i]))), n && mi(n, () => {
      n = null;
    })), P && Qe(!0);
  };
  ga(() => {
    c = !1, t(f), c || m(null, null);
  }, l), ve && (s = _e);
}
function Oe(e, t) {
  return t;
}
function ac(e, t, r, i) {
  for (var s = [], n = t.length, a = 0; a < n; a++)
    _a(t[a].e, s, !0);
  var o = n > 0 && s.length === 0 && r !== null;
  if (o) {
    var l = (
      /** @type {Element} */
      /** @type {Element} */
      r.parentNode
    );
    $u(l), l.append(
      /** @type {Element} */
      r
    ), i.clear(), Vt(e, t[0].prev, t[n - 1].next);
  }
  Iu(s, () => {
    for (var c = 0; c < n; c++) {
      var f = t[c];
      o || (i.delete(f.k), Vt(e, f.prev, f.next)), Et(f.e, !o);
    }
  });
}
function Te(e, t, r, i, s, n = null) {
  var a = e, o = { flags: t, items: /* @__PURE__ */ new Map(), first: null };
  {
    var l = (
      /** @type {Element} */
      e
    );
    a = ve ? Ze(
      /** @type {Comment | Text} */
      /* @__PURE__ */ er(l)
    ) : l.appendChild(vr());
  }
  ve && Pi();
  var c = null, f = !1, m = /* @__PURE__ */ He(() => {
    var d = r();
    return ca(d) ? d : d == null ? [] : da(d);
  });
  ga(() => {
    var d = R(m), g = d.length;
    if (f && g === 0)
      return;
    f = g === 0;
    let P = !1;
    if (ve) {
      var _ = (
        /** @type {Comment} */
        a.data === sa
      );
      _ !== (g === 0) && (a = Qi(), Ze(a), Qe(!1), P = !0);
    }
    if (ve) {
      for (var h = null, v, u = 0; u < g; u++) {
        if (_e.nodeType === 8 && /** @type {Comment} */
        _e.data === oa) {
          a = /** @type {Comment} */
          _e, P = !0, Qe(!1);
          break;
        }
        var p = d[u], y = i(p, u);
        v = Uu(
          _e,
          o,
          h,
          null,
          p,
          y,
          u,
          s,
          t,
          r
        ), o.items.set(y, v), h = v;
      }
      g > 0 && Ze(Qi());
    }
    ve || sc(d, o, a, s, t, i, r), n !== null && (g === 0 ? c ? pi(c) : c = mn(() => n(a)) : c !== null && mi(c, () => {
      c = null;
    })), P && Qe(!0), R(m);
  }), ve && (a = _e);
}
function sc(e, t, r, i, s, n, a) {
  var o = e.length, l = t.items, c = t.first, f = c, m, d = null, g = [], P = [], _, h, v, u;
  for (u = 0; u < o; u += 1) {
    if (_ = e[u], h = n(_, u), v = l.get(h), v === void 0) {
      var p = f ? (
        /** @type {TemplateNode} */
        f.e.nodes_start
      ) : r;
      d = Uu(
        p,
        t,
        d,
        d === null ? t.first : d.next,
        _,
        h,
        u,
        i,
        s,
        a
      ), l.set(h, d), g = [], P = [], f = d.next;
      continue;
    }
    if (oc(v, _, u), (v.e.f & $t) !== 0 && pi(v.e), v !== f) {
      if (m !== void 0 && m.has(v)) {
        if (g.length < P.length) {
          var y = P[0], w;
          d = y.prev;
          var b = g[0], E = g[g.length - 1];
          for (w = 0; w < g.length; w += 1)
            Aa(g[w], y, r);
          for (w = 0; w < P.length; w += 1)
            m.delete(P[w]);
          Vt(t, b.prev, E.next), Vt(t, d, b), Vt(t, E, y), f = y, d = E, u -= 1, g = [], P = [];
        } else
          m.delete(v), Aa(v, f, r), Vt(t, v.prev, v.next), Vt(t, v, d === null ? t.first : d.next), Vt(t, d, v), d = v;
        continue;
      }
      for (g = [], P = []; f !== null && f.k !== h; )
        (f.e.f & $t) === 0 && (m ?? (m = /* @__PURE__ */ new Set())).add(f), P.push(f), f = f.next;
      if (f === null)
        continue;
      v = f;
    }
    g.push(v), d = v, f = v.next;
  }
  if (f !== null || m !== void 0) {
    for (var S = m === void 0 ? [] : da(m); f !== null; )
      (f.e.f & $t) === 0 && S.push(f), f = f.next;
    var O = S.length;
    if (O > 0) {
      var C = o === 0 ? r : null;
      ac(t, S, C, l);
    }
  }
  me.first = t.first && t.first.e, me.last = d && d.e;
}
function oc(e, t, r, i) {
  vu(e.v, t), e.i = r;
}
function Uu(e, t, r, i, s, n, a, o, l, c) {
  var f = (l & ll) !== 0, m = (l & dl) === 0, d = f ? m ? /* @__PURE__ */ ie(s) : hn(s) : s, g = (l & cl) === 0 ? a : hn(a), P = {
    i: g,
    v: d,
    k: n,
    a: null,
    // @ts-expect-error
    e: null,
    prev: r,
    next: i
  };
  try {
    return P.e = mn(() => o(e, d, g, c), ve), P.e.prev = r && r.e, P.e.next = i && i.e, r === null ? t.first = P : (r.next = P, r.e.next = P.e), i !== null && (i.prev = P, i.e.prev = P.e), P;
  } finally {
  }
}
function Aa(e, t, r) {
  for (var i = e.next ? (
    /** @type {TemplateNode} */
    e.next.e.nodes_start
  ) : r, s = t ? (
    /** @type {TemplateNode} */
    t.e.nodes_start
  ) : r, n = (
    /** @type {TemplateNode} */
    e.e.nodes_start
  ); n !== i; ) {
    var a = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ zt(n)
    );
    s.before(n), n = a;
  }
}
function Vt(e, t, r) {
  t === null ? e.first = r : (t.next = r, t.e.next = r && r.e), r !== null && (r.prev = t, r.e.prev = t && t.e);
}
function uc(e, t, r) {
  var i = e == null ? "" : "" + e;
  return i === "" ? null : i;
}
function lc(e, t) {
  return e == null ? null : String(e);
}
function ra(e, t, r, i, s, n) {
  var a = e.__className;
  if (ve || a !== r || a === void 0) {
    var o = uc(r);
    (!ve || o !== e.getAttribute("class")) && (o == null ? e.removeAttribute("class") : e.className = o), e.__className = r;
  }
  return n;
}
function be(e, t, r, i) {
  var s = e.__style;
  if (ve || s !== t) {
    var n = lc(t);
    (!ve || n !== e.getAttribute("style")) && (n == null ? e.removeAttribute("style") : e.style.cssText = n), e.__style = t;
  }
  return i;
}
const cc = Symbol("is custom element"), dc = Symbol("is html");
function fc(e, t, r, i) {
  var s = hc(e);
  ve && (s[t] = e.getAttribute(t), t === "src" || t === "srcset" || t === "href" && e.nodeName === "LINK") || s[t] !== (s[t] = r) && (t === "loading" && (e[yl] = r), r == null ? e.removeAttribute(t) : typeof r != "string" && Lu(e).includes(t) ? e[t] = r : e.setAttribute(t, r));
}
function K(e, t, r) {
  var i = he, s = me;
  let n = ve;
  ve && Qe(!1), Ge(null), ct(null);
  try {
    // `style` should use `set_attribute` rather than the setter
    t !== "style" && // Don't compute setters for custom elements while they aren't registered yet,
    // because during their upgrade/instantiation they might add more setters.
    // Instead, fall back to a simple "an object, then set as property" heuristic.
    (na.has(e.nodeName) || // customElements may not be available in browser extension contexts
    !customElements || customElements.get(e.tagName.toLowerCase()) ? Lu(e).includes(t) : r && typeof r == "object") ? e[t] = r : fc(e, t, r == null ? r : String(r));
  } finally {
    Ge(i), ct(s), n && Qe(!0);
  }
}
function hc(e) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    // @ts-expect-error
    e.__attributes ?? (e.__attributes = {
      [cc]: e.nodeName.includes("-"),
      [dc]: e.namespaceURI === pl
    })
  );
}
var na = /* @__PURE__ */ new Map();
function Lu(e) {
  var t = na.get(e.nodeName);
  if (t) return t;
  na.set(e.nodeName, t = []);
  for (var r, i = e, s = Element.prototype; s !== i; ) {
    r = cu(i);
    for (var n in r)
      r[n].set && t.push(n);
    i = fa(i);
  }
  return t;
}
function ka(e, t) {
  return e === t || (e == null ? void 0 : e[Qt]) === t;
}
function ut(e = {}, t, r, i) {
  return va(() => {
    var s, n;
    return vn(() => {
      s = n, n = [], ir(() => {
        e !== r(...n) && (t(e, ...n), s && ka(r(...s), e) && t(null, ...s));
      });
    }), () => {
      fu(() => {
        n && ka(r(...n), e) && t(null, ...n);
      });
    };
  }), e;
}
function et(e = !1) {
  const t = (
    /** @type {ComponentContextLegacy} */
    ge
  ), r = t.l.u;
  if (!r) return;
  let i = () => ar(t.s);
  if (e) {
    let s = 0, n = (
      /** @type {Record<string, any>} */
      {}
    );
    const a = /* @__PURE__ */ ha(() => {
      let o = !1;
      const l = t.s;
      for (const c in l)
        l[c] !== n[c] && (n[c] = l[c], o = !0);
      return o && s++, s;
    });
    i = () => R(a);
  }
  r.b.length && Jl(() => {
    qa(t, i), li(r.b);
  }), ea(() => {
    const s = ir(() => r.m.map($l));
    return () => {
      for (const n of s)
        typeof n == "function" && n();
    };
  }), r.a.length && ea(() => {
    qa(t, i), li(r.a);
  });
}
function qa(e, t) {
  if (e.l.s)
    for (const r of e.l.s) R(r);
  t();
}
function yr(e) {
  ge === null && Au(), gr && ge.l !== null ? mc(ge).m.push(e) : ea(() => {
    const t = ir(e);
    if (typeof t == "function") return (
      /** @type {() => void} */
      t
    );
  });
}
function gn(e) {
  ge === null && Au(), yr(() => () => ir(e));
}
function mc(e) {
  var t = (
    /** @type {ComponentContextLegacy} */
    e.l
  );
  return t.u ?? (t.u = { a: [], b: [], m: [] });
}
function Fu(e, t, r) {
  if (e == null)
    return t(void 0), mr;
  const i = ir(
    () => e.subscribe(
      t,
      // @ts-expect-error
      r
    )
  );
  return i.unsubscribe ? () => i.unsubscribe() : i;
}
const lr = [];
function Wu(e, t = mr) {
  let r = null;
  const i = /* @__PURE__ */ new Set();
  function s(o) {
    if (mu(e, o) && (e = o, r)) {
      const l = !lr.length;
      for (const c of i)
        c[1](), lr.push(c, e);
      if (l) {
        for (let c = 0; c < lr.length; c += 2)
          lr[c][0](lr[c + 1]);
        lr.length = 0;
      }
    }
  }
  function n(o) {
    s(o(
      /** @type {T} */
      e
    ));
  }
  function a(o, l = mr) {
    const c = [o, l];
    return i.add(c), i.size === 1 && (r = t(s, n) || mr), o(
      /** @type {T} */
      e
    ), () => {
      i.delete(c), i.size === 0 && r && (r(), r = null);
    };
  }
  return { set: s, update: n, subscribe: a };
}
function pc(e) {
  let t;
  return Fu(e, (r) => t = r)(), t;
}
let yn = !1, ia = Symbol();
function Tt(e, t, r) {
  const i = r[t] ?? (r[t] = {
    store: null,
    source: /* @__PURE__ */ ie(void 0),
    unsubscribe: mr
  });
  if (i.store !== e && !(ia in r))
    if (i.unsubscribe(), i.store = e ?? null, e == null)
      i.source.v = void 0, i.unsubscribe = mr;
    else {
      var s = !0;
      i.unsubscribe = Fu(e, (n) => {
        s ? i.source.v = n : ee(i.source, n);
      }), s = !1;
    }
  return e && ia in r ? pc(e) : R(i.source);
}
function jt() {
  const e = {};
  function t() {
    pa(() => {
      for (var r in e)
        e[r].unsubscribe();
      cn(e, ia, {
        enumerable: !1,
        value: !0
      });
    });
  }
  return [e, t];
}
function vc(e) {
  var t = yn;
  try {
    return yn = !1, [e(), yn];
  } finally {
    yn = t;
  }
}
function Pr(e, t, r, i) {
  var g;
  var s = !gr || (r & fl) !== 0, n = !1, a;
  [a, n] = vc(() => (
    /** @type {V} */
    e[t]
  ));
  var o = Qt in e || lu in e;
  ((g = Zt(e, t)) == null ? void 0 : g.set) ?? (o && t in e);
  var l = (
    /** @type {V} */
    i
  ), c = !0, f = () => (c && (c = !1, l = /** @type {V} */
  i), l), m;
  if (s)
    m = () => {
      var P = (
        /** @type {V} */
        e[t]
      );
      return P === void 0 ? f() : (c = !0, P);
    };
  else {
    var d = /* @__PURE__ */ He(
      () => (
        /** @type {V} */
        e[t]
      )
    );
    d.f |= gl, m = () => {
      var P = R(d);
      return P !== void 0 && (l = /** @type {V} */
      void 0), P === void 0 ? l : P;
    };
  }
  return m;
}
function gc(e) {
  return new _c(e);
}
var bt, We;
class _c {
  /**
   * @param {ComponentConstructorOptions & {
   *  component: any;
   * }} options
   */
  constructor(t) {
    /** @type {any} */
    Ni(this, bt);
    /** @type {Record<string, any>} */
    Ni(this, We);
    var n;
    var r = /* @__PURE__ */ new Map(), i = (a, o) => {
      var l = /* @__PURE__ */ ie(o);
      return r.set(a, l), l;
    };
    const s = new Proxy(
      { ...t.props || {}, $$events: {} },
      {
        get(a, o) {
          return R(r.get(o) ?? i(o, Reflect.get(a, o)));
        },
        has(a, o) {
          return o === lu ? !0 : (R(r.get(o) ?? i(o, Reflect.get(a, o))), Reflect.has(a, o));
        },
        set(a, o, l) {
          return ee(r.get(o) ?? i(o, l), l), Reflect.set(a, o, l);
        }
      }
    );
    Ii(this, We, (t.hydrate ? nc : ku)(t.component, {
      target: t.target,
      anchor: t.anchor,
      props: s,
      context: t.context,
      intro: t.intro ?? !1,
      recover: t.recover
    })), (!((n = t == null ? void 0 : t.props) != null && n.$$host) || t.sync === !1) && Gl(), Ii(this, bt, s.$$events);
    for (const a of Object.keys(Ne(this, We)))
      a === "$set" || a === "$destroy" || a === "$on" || cn(this, a, {
        get() {
          return Ne(this, We)[a];
        },
        /** @param {any} value */
        set(o) {
          Ne(this, We)[a] = o;
        },
        enumerable: !0
      });
    Ne(this, We).$set = /** @param {Record<string, any>} next */
    (a) => {
      Object.assign(s, a);
    }, Ne(this, We).$destroy = () => {
      ic(Ne(this, We));
    };
  }
  /** @param {Record<string, any>} props */
  $set(t) {
    Ne(this, We).$set(t);
  }
  /**
   * @param {string} event
   * @param {(...args: any[]) => any} callback
   * @returns {any}
   */
  $on(t, r) {
    Ne(this, bt)[t] = Ne(this, bt)[t] || [];
    const i = (...s) => r.call(this, ...s);
    return Ne(this, bt)[t].push(i), () => {
      Ne(this, bt)[t] = Ne(this, bt)[t].filter(
        /** @param {any} fn */
        (s) => s !== i
      );
    };
  }
  $destroy() {
    Ne(this, We).$destroy();
  }
}
bt = new WeakMap(), We = new WeakMap();
let Vu;
typeof HTMLElement == "function" && (Vu = class extends HTMLElement {
  /**
   * @param {*} $$componentCtor
   * @param {*} $$slots
   * @param {*} use_shadow_dom
   */
  constructor(t, r, i) {
    super();
    /** The Svelte component constructor */
    Be(this, "$$ctor");
    /** Slots */
    Be(this, "$$s");
    /** @type {any} The Svelte component instance */
    Be(this, "$$c");
    /** Whether or not the custom element is connected */
    Be(this, "$$cn", !1);
    /** @type {Record<string, any>} Component props data */
    Be(this, "$$d", {});
    /** `true` if currently in the process of reflecting component props back to attributes */
    Be(this, "$$r", !1);
    /** @type {Record<string, CustomElementPropDefinition>} Props definition (name, reflected, type etc) */
    Be(this, "$$p_d", {});
    /** @type {Record<string, EventListenerOrEventListenerObject[]>} Event listeners */
    Be(this, "$$l", {});
    /** @type {Map<EventListenerOrEventListenerObject, Function>} Event listener unsubscribe functions */
    Be(this, "$$l_u", /* @__PURE__ */ new Map());
    /** @type {any} The managed render effect for reflecting attributes */
    Be(this, "$$me");
    this.$$ctor = t, this.$$s = r, i && this.attachShadow({ mode: "open" });
  }
  /**
   * @param {string} type
   * @param {EventListenerOrEventListenerObject} listener
   * @param {boolean | AddEventListenerOptions} [options]
   */
  addEventListener(t, r, i) {
    if (this.$$l[t] = this.$$l[t] || [], this.$$l[t].push(r), this.$$c) {
      const s = this.$$c.$on(t, r);
      this.$$l_u.set(r, s);
    }
    super.addEventListener(t, r, i);
  }
  /**
   * @param {string} type
   * @param {EventListenerOrEventListenerObject} listener
   * @param {boolean | AddEventListenerOptions} [options]
   */
  removeEventListener(t, r, i) {
    if (super.removeEventListener(t, r, i), this.$$c) {
      const s = this.$$l_u.get(r);
      s && (s(), this.$$l_u.delete(r));
    }
  }
  async connectedCallback() {
    if (this.$$cn = !0, !this.$$c) {
      let r = function(n) {
        return (a) => {
          const o = document.createElement("slot");
          n !== "default" && (o.name = n), re(a, o);
        };
      };
      var t = r;
      if (await Promise.resolve(), !this.$$cn || this.$$c)
        return;
      const i = {}, s = yc(this);
      for (const n of this.$$s)
        n in s && (n === "default" && !this.$$d.children ? (this.$$d.children = r(n), i.default = !0) : i[n] = r(n));
      for (const n of this.attributes) {
        const a = this.$$g_p(n.name);
        a in this.$$d || (this.$$d[a] = ai(a, n.value, this.$$p_d, "toProp"));
      }
      for (const n in this.$$p_d)
        !(n in this.$$d) && this[n] !== void 0 && (this.$$d[n] = this[n], delete this[n]);
      this.$$c = gc({
        component: this.$$ctor,
        target: this.shadowRoot || this,
        props: {
          ...this.$$d,
          $$slots: i,
          $$host: this
        }
      }), this.$$me = Bl(() => {
        vn(() => {
          var n;
          this.$$r = !0;
          for (const a of ui(this.$$c)) {
            if (!((n = this.$$p_d[a]) != null && n.reflect)) continue;
            this.$$d[a] = this.$$c[a];
            const o = ai(
              a,
              this.$$d[a],
              this.$$p_d,
              "toAttribute"
            );
            o == null ? this.removeAttribute(this.$$p_d[a].attribute || a) : this.setAttribute(this.$$p_d[a].attribute || a, o);
          }
          this.$$r = !1;
        });
      });
      for (const n in this.$$l)
        for (const a of this.$$l[n]) {
          const o = this.$$c.$on(n, a);
          this.$$l_u.set(a, o);
        }
      this.$$l = {};
    }
  }
  // We don't need this when working within Svelte code, but for compatibility of people using this outside of Svelte
  // and setting attributes through setAttribute etc, this is helpful
  /**
   * @param {string} attr
   * @param {string} _oldValue
   * @param {string} newValue
   */
  attributeChangedCallback(t, r, i) {
    var s;
    this.$$r || (t = this.$$g_p(t), this.$$d[t] = ai(t, i, this.$$p_d, "toProp"), (s = this.$$c) == null || s.$set({ [t]: this.$$d[t] }));
  }
  disconnectedCallback() {
    this.$$cn = !1, Promise.resolve().then(() => {
      !this.$$cn && this.$$c && (this.$$c.$destroy(), this.$$me(), this.$$c = void 0);
    });
  }
  /**
   * @param {string} attribute_name
   */
  $$g_p(t) {
    return ui(this.$$p_d).find(
      (r) => this.$$p_d[r].attribute === t || !this.$$p_d[r].attribute && r.toLowerCase() === t
    ) || t;
  }
});
function ai(e, t, r, i) {
  var n;
  const s = (n = r[e]) == null ? void 0 : n.type;
  if (t = s === "Boolean" && typeof t != "boolean" ? t != null : t, !i || !r[e])
    return t;
  if (i === "toAttribute")
    switch (s) {
      case "Object":
      case "Array":
        return t == null ? null : JSON.stringify(t);
      case "Boolean":
        return t ? "" : null;
      case "Number":
        return t ?? null;
      default:
        return t;
    }
  else
    switch (s) {
      case "Object":
      case "Array":
        return t && JSON.parse(t);
      case "Boolean":
        return t;
      // conversion already handled above
      case "Number":
        return t != null ? +t : t;
      default:
        return t;
    }
}
function yc(e) {
  const t = {};
  return e.childNodes.forEach((r) => {
    t[
      /** @type {Element} node */
      r.slot || "default"
    ] = !0;
  }), t;
}
function Hu(e, t, r, i, s, n) {
  let a = class extends Vu {
    constructor() {
      super(e, r, s), this.$$p_d = t;
    }
    static get observedAttributes() {
      return ui(t).map(
        (o) => (t[o].attribute || o).toLowerCase()
      );
    }
  };
  return ui(t).forEach((o) => {
    cn(a.prototype, o, {
      get() {
        return this.$$c && o in this.$$c ? this.$$c[o] : this.$$d[o];
      },
      set(l) {
        var m;
        l = ai(o, l, t), this.$$d[o] = l;
        var c = this.$$c;
        if (c) {
          var f = (m = Zt(c, o)) == null ? void 0 : m.get;
          f ? c[o] = l : c.$set({ [o]: l });
        }
      }
    });
  }), i.forEach((o) => {
    cn(a.prototype, o, {
      get() {
        var l;
        return (l = this.$$c) == null ? void 0 : l[o];
      }
    });
  }), e.element = /** @type {any} */
  a, a;
}
var Pc = /* @__PURE__ */ de('<span class="ui5-content-density-compact"><ui5-avatar></ui5-avatar> <ui5-dialog><ward-dev-tools-content></ward-dev-tools-content> <ui5-bar><ui5-button>Close</ui5-button></ui5-bar></ui5-dialog></span>', 2);
function wc(e) {
  let t = /* @__PURE__ */ ie(), r = /* @__PURE__ */ ie();
  function i() {
    sn(r, R(r).open = !0), setTimeout(
      () => {
        sn(t, R(t).pressed = !1);
      },
      0
    );
  }
  function s() {
    sn(r, R(r).open = !1), setTimeout(
      () => {
        sn(t, R(t).pressed = !1), R(t).focus();
      },
      0
    );
  }
  var n = Pc(), a = W(n);
  ra(a, 1, "ward-dev-tools-button"), K(a, "part", "ward-dev-tools-button"), K(a, "colorScheme", "Accent7"), K(a, "color-scheme", "Accent9"), K(a, "design", "Emphasized"), K(a, "icon", "world"), K(a, "interactive", !0), K(a, "size", "XS"), ut(a, (m) => ee(t, m), () => R(t));
  var o = z(a, 2);
  ra(o, 1, "ward-dev-tools-dialog svelte-19ox8wh"), K(o, "data-ui5-compact-size", !0), K(o, "draggable", !0), K(o, "header-text", `Ward Dev Tools${window.uncover.wardVersion ? ` (${window.uncover.wardVersion})` : ""}`), K(o, "resizable", !0);
  var l = W(o), c = z(l, 2);
  K(c, "slot", "footer");
  var f = W(c);
  K(f, "slot", "endContent"), L(c), L(o), ut(o, (m) => ee(r, m), () => R(r)), L(n), hr("click", a, i), hr("click", f, s), re(e, n);
}
customElements.define("ward-dev-tools", Hu(wc, {}, [], [], !0));
var ft = {}, Ci = {}, Er = {}, Ua;
function bc() {
  return Ua || (Ua = 1, Object.defineProperty(Er, "__esModule", { value: !0 }), Er.Alphabet = void 0, Er.Alphabet = {
    LETTERS: {
      A: "a",
      B: "b",
      C: "c",
      D: "d",
      E: "e",
      F: "f",
      G: "g",
      H: "h",
      I: "i",
      J: "j",
      K: "k",
      L: "l",
      M: "m",
      N: "n",
      O: "o",
      P: "p",
      Q: "q",
      R: "r",
      S: "s",
      T: "t",
      U: "u",
      V: "v",
      W: "w",
      X: "x",
      Y: "y",
      Z: "z"
    }
  }), Er;
}
var Sr = {}, La;
function $c() {
  if (La) return Sr;
  La = 1, Object.defineProperty(Sr, "__esModule", { value: !0 }), Sr.ArrayUtils = void 0;
  var e = (
    /** @class */
    function() {
      function t() {
      }
      return t.createIntArray = function(r) {
        r === void 0 && (r = 0);
        for (var i = [], s = 0; s < r; s++)
          i.push(s);
        return i;
      }, t.shuffle = function(r) {
        r === void 0 && (r = []);
        for (var i = r.slice(), s = []; i.length; ) {
          var n = Math.floor(Math.random() * i.length);
          s.push(i.splice(n, 1)[0]);
        }
        return s;
      }, t.randomSubArray = function(r, i) {
        r === void 0 && (r = []), i === void 0 && (i = 0);
        for (var s = r.slice(), n = [], a = 0; a < i; a++) {
          var o = Math.floor(Math.random() * s.length);
          n.push(s.splice(o, 1)[0]);
        }
        return n;
      }, t.randomElement = function(r) {
        if (r === void 0 && (r = []), r.length) {
          var i = Math.floor(Math.random() * r.length);
          return r[i];
        }
        return null;
      }, t.removeElement = function(r, i) {
        var s = r.indexOf(i), n = r.slice();
        return s !== -1 && n.splice(s, 1), n;
      }, t;
    }()
  );
  return Sr.ArrayUtils = e, Sr;
}
var Dr = {}, Fa;
function Gu() {
  return Fa || (Fa = 1, Object.defineProperty(Dr, "__esModule", { value: !0 }), Dr.DataStates = void 0, Dr.DataStates = {
    NEVER: "NEVER",
    FETCHING_FIRST: "FETCHING_FIRST",
    FETCHING: "FETCHING",
    SUCCESS: "SUCCESS",
    FAILURE: "FAILURE",
    OUTDATED: "OUTDATED"
  }), Dr;
}
var Or = {}, Wa;
function Ec() {
  if (Wa) return Or;
  Wa = 1, Object.defineProperty(Or, "__esModule", { value: !0 }), Or.DataStatesUtils = void 0;
  var e = Gu(), t = (
    /** @class */
    function() {
      function r() {
      }
      return r.mergeDataStates = function(i) {
        return i.length === 0 ? e.DataStates.NEVER : i.some(function(s) {
          return s === e.DataStates.FAILURE;
        }) ? e.DataStates.FAILURE : i.some(function(s) {
          return s === e.DataStates.OUTDATED;
        }) ? e.DataStates.OUTDATED : i.some(function(s) {
          return s === e.DataStates.NEVER;
        }) ? e.DataStates.NEVER : i.some(function(s) {
          return s === e.DataStates.FETCHING_FIRST;
        }) ? e.DataStates.FETCHING_FIRST : i.some(function(s) {
          return s === e.DataStates.FETCHING;
        }) ? e.DataStates.FETCHING : e.DataStates.SUCCESS;
      }, r;
    }()
  );
  return Or.DataStatesUtils = t, Or;
}
var Tr = {}, Va;
function Sc() {
  if (Va) return Tr;
  Va = 1, Object.defineProperty(Tr, "__esModule", { value: !0 }), Tr.DateUtils = void 0;
  var e = 1e3, t = 60, r = e * t, i = 60, s = t * i, n = r * i, a = 24, o = i * a, l = s * a, c = n * a, f = (
    /** @class */
    function() {
      function m() {
      }
      return m.durationToHumanTime = function(d) {
        return {
          millis: d % e,
          seconds: Math.floor(d / e) % t,
          minutes: Math.floor(d / r) % i,
          hours: Math.floor(d / n)
        };
      }, m.normalizeTime = function(d) {
        return "".concat(d).padStart(2, "0");
      }, m.dateString = function(d) {
        var g = m.normalizeTime(d.getFullYear()), P = m.normalizeTime(d.getMonth()), _ = m.normalizeTime(d.getDate()), h = m.normalizeTime(d.getHours()), v = m.normalizeTime(d.getMinutes()), u = m.normalizeTime(d.getSeconds());
        return "".concat(g, "-").concat(P, "-").concat(_, " ").concat(h, ":").concat(v, ":").concat(u);
      }, m.nowString = function() {
        return m.dateString(new Date(Date.now()));
      }, m.TimeConstants = {
        MIL_PER_SEC: e,
        SEC_PER_MIN: t,
        MIL_PER_MIN: r,
        MIN_PER_HOU: i,
        SEC_PER_HOU: s,
        MIL_PER_HOU: n,
        HOU_PER_DAY: a,
        MIN_PER_DAY: o,
        SEC_PER_DAY: l,
        MIL_PER_DAY: c
      }, m;
    }()
  );
  return Tr.DateUtils = f, Tr;
}
var jr = {}, Ha;
function Dc() {
  if (Ha) return jr;
  Ha = 1, Object.defineProperty(jr, "__esModule", { value: !0 }), jr.DownloadUtils = void 0;
  var e = (
    /** @class */
    function() {
      function t() {
      }
      return t.downloadJson = function(r, i) {
        var s = new Blob([JSON.stringify(i, null, 2)], { type: "application/json" }), n = URL.createObjectURL(s), a = document.createElement("a");
        a.download = r, a.target = "_blank", a.href = n, a.click(), URL.revokeObjectURL(n);
      }, t;
    }()
  );
  return jr.DownloadUtils = e, jr;
}
var Rr = {}, Ga;
function Oc() {
  if (Ga) return Rr;
  Ga = 1, Object.defineProperty(Rr, "__esModule", { value: !0 }), Rr.EncodeUtils = void 0;
  var e = (
    /** @class */
    function() {
      function t() {
      }
      return t.encode = function(r) {
        return r === void 0 && (r = ""), Buffer.from(r).toString("base64");
      }, t.decode = function(r) {
        return r === void 0 && (r = ""), Buffer.from(r, "base64").toString();
      }, t.encodeBasicHeader = function(r, i) {
        r === void 0 && (r = ""), i === void 0 && (i = "");
        var s = "".concat(r, ":").concat(i), n = t.encode(s);
        return "Basic ".concat(n);
      }, t.decodeBasicHeader = function(r) {
        r === void 0 && (r = "");
        var i = r.split("Basic ").join(""), s = t.decode(i), n = s.split(":");
        return n.length === 2 ? {
          username: n[0],
          password: n[1]
        } : {
          username: null,
          password: null
        };
      }, t;
    }()
  );
  return Rr.EncodeUtils = e, Rr;
}
var Mr = {}, za;
function Tc() {
  if (za) return Mr;
  za = 1, Object.defineProperty(Mr, "__esModule", { value: !0 }), Mr.FileUtils = void 0;
  var e = (
    /** @class */
    function() {
      function t() {
      }
      return t.getExtention = function(r) {
        var i = r.name;
        return i.substring(i.lastIndexOf(".") + 1).toLowerCase();
      }, t.checkExtention = function(r, i) {
        return i.indexOf(t.getExtention(r)) !== -1;
      }, t.checkSize = function(r, i) {
        return r.size <= i;
      }, t;
    }()
  );
  return Mr.FileUtils = e, Mr;
}
var Nr = {}, Ka;
function jc() {
  if (Ka) return Nr;
  Ka = 1, Object.defineProperty(Nr, "__esModule", { value: !0 }), Nr.FunctionUtils = void 0;
  var e = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg, t = /([^\s,]+)/g, r = (
    /** @class */
    function() {
      function i() {
      }
      return i.getParamNames = function(s) {
        var n = s.toString().replace(e, ""), a = n.slice(n.indexOf("(") + 1, n.indexOf(")")).match(t);
        return a === null ? [] : a;
      }, i;
    }()
  );
  return Nr.FunctionUtils = r, Nr;
}
var ht = {}, Ja;
function Rc() {
  return Ja || (Ja = 1, Object.defineProperty(ht, "__esModule", { value: !0 }), ht.HttpStatuses = ht.HttpMethods = ht.HttpHeaders = void 0, ht.HttpHeaders = {
    ACCESS_CONTROL_ALLOW_ORIGIN: "Access-Control-Allow-Origin",
    ACCESS_CONTROL_ALLOW_HEADERS: "Access-Control-Allow-Headers",
    ACCESS_CONTROL_ALLOW_METHODS: "Access-Control-Allow-Methods"
  }, ht.HttpMethods = {
    GET: "GET",
    POST: "POST",
    PUT: "PUT",
    PATCH: "PATCH",
    DELETE: "DELETE",
    OPTIONS: "OPTIONS"
  }, ht.HttpStatuses = {
    OK: 200,
    CREATED: 201,
    REMOVED: 204,
    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    FORBIDDEN: 403,
    NOT_FOUND: 404,
    ERROR: 500
  }), ht;
}
var Ir = {}, Ba;
function Mc() {
  if (Ba) return Ir;
  Ba = 1, Object.defineProperty(Ir, "__esModule", { value: !0 }), Ir.ObjectUtils = void 0;
  var e = (
    /** @class */
    function() {
      function t() {
      }
      return t.nil = function(r) {
        return typeof r > "u" || r === null;
      }, t.getProperty = function(r, i) {
        return i.split(".").reduce(function(s, n) {
          if (s && typeof s == "object")
            return s[n];
        }, r);
      }, t.clone = function(r) {
        return JSON.parse(JSON.stringify(r));
      }, t.arrayfy = function(r) {
        return Array.isArray(r) ? r : [r];
      }, t;
    }()
  );
  return Ir.ObjectUtils = e, Ir;
}
var Cr = {}, Ya;
function Nc() {
  if (Ya) return Cr;
  Ya = 1, Object.defineProperty(Cr, "__esModule", { value: !0 }), Cr.PromiseUtils = void 0;
  var e = 0, t = (
    /** @class */
    function() {
      function r() {
      }
      return r.delayedPromise = function(i, s) {
        return s === void 0 && (s = e), Promise.all([
          i,
          new Promise(function(n) {
            return setTimeout(n, s);
          })
        ]).then(function(n) {
          return n[0];
        }).catch(function(n) {
          throw n;
        });
      }, r;
    }()
  );
  return Cr.PromiseUtils = t, Cr;
}
var Ar = {}, Xa;
function Ic() {
  if (Xa) return Ar;
  Xa = 1, Object.defineProperty(Ar, "__esModule", { value: !0 }), Ar.Sets = void 0;
  var e = (
    /** @class */
    function() {
      function t() {
      }
      return t.toSet = function(r) {
        return r.reduce(function(i, s) {
          return i.includes(s) || i.push(s), i;
        }, []);
      }, t.add = function(r) {
        for (var i = [], s = 1; s < arguments.length; s++)
          i[s - 1] = arguments[s];
        return i.forEach(function(n) {
          r.includes(n) || r.push(n);
        }), r;
      }, t.remove = function(r) {
        for (var i = [], s = 1; s < arguments.length; s++)
          i[s - 1] = arguments[s];
        return i.forEach(function(n) {
          var a = r.indexOf(n);
          a !== -1 && r.splice(a, 1);
        }), r;
      }, t.merge = function(r, i) {
        return t.toSet(r.concat(i));
      }, t;
    }()
  );
  return Ar.Sets = e, Ar;
}
var kr = {}, qr = {}, Qa;
function zu() {
  if (Qa) return qr;
  Qa = 1, Object.defineProperty(qr, "__esModule", { value: !0 }), qr.StringUtils = void 0;
  var e = (
    /** @class */
    function() {
      function t() {
      }
      return t.capitalize = function(r) {
        return r.length ? r.substring(0, 1).toUpperCase() + r.substring(1).toLowerCase() : "";
      }, t.capitalizeFirst = function(r) {
        return r.length ? r.substring(0, 1).toUpperCase() : "";
      }, t.replaceAll = function(r, i, s) {
        return r.split(i).join(s);
      }, t.getIndent = function(r, i) {
        i === void 0 && (i = "  ");
        for (var s = "", n = 0; n < r; n++)
          s += i;
        return s;
      }, t;
    }()
  );
  return qr.StringUtils = e, qr;
}
var Za;
function Cc() {
  if (Za) return kr;
  Za = 1, Object.defineProperty(kr, "__esModule", { value: !0 }), kr.StringLabel = void 0;
  var e = zu(), t = (
    /** @class */
    function() {
      function r(i, s) {
        s === void 0 && (s = " "), this._value = i, this._words = i.split(s).map(function(n) {
          return n.toLowerCase();
        }).filter(function(n) {
          return !!n;
        });
      }
      return Object.defineProperty(r.prototype, "words", {
        get: function() {
          return this._words;
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(r.prototype, "camel", {
        get: function() {
          return this.words.map(function(i, s) {
            return s === 0 ? i : e.StringUtils.capitalize(i);
          }).join("");
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(r.prototype, "pascal", {
        get: function() {
          return this.words.map(function(i) {
            return e.StringUtils.capitalize(i);
          }).join("");
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(r.prototype, "worm", {
        get: function() {
          return this.words.map(function(i) {
            return i.toLowerCase();
          }).join("_");
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(r.prototype, "snake", {
        get: function() {
          return this.words.map(function(i) {
            return e.StringUtils.capitalize(i);
          }).join("_");
        },
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(r.prototype, "serpent", {
        get: function() {
          return this.words.map(function(i) {
            return i.toUpperCase();
          }).join("_");
        },
        enumerable: !1,
        configurable: !0
      }), r;
    }()
  );
  return kr.StringLabel = t, kr;
}
var Ur = {}, xa;
function Ac() {
  if (xa) return Ur;
  xa = 1, Object.defineProperty(Ur, "__esModule", { value: !0 }), Ur.UUID = void 0;
  var e = (
    /** @class */
    function() {
      function t() {
      }
      return t.next = function() {
        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(r) {
          var i = Math.random() * 16 | 0, s = r == "x" ? i : i & 3 | 8;
          return s.toString(16);
        });
      }, t;
    }()
  );
  return Ur.UUID = e, Ur;
}
var es;
function _n() {
  return es || (es = 1, function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.UUID = e.StringUtils = e.StringLabel = e.Sets = e.PromiseUtils = e.ObjectUtils = e.HttpStatuses = e.HttpMethods = e.HttpHeaders = e.FunctionUtils = e.FileUtils = e.EncodeUtils = e.DownloadUtils = e.DateUtils = e.DataStatesUtils = e.DataStates = e.ArrayUtils = e.Alphabet = void 0;
    var t = bc();
    Object.defineProperty(e, "Alphabet", { enumerable: !0, get: function() {
      return t.Alphabet;
    } });
    var r = $c();
    Object.defineProperty(e, "ArrayUtils", { enumerable: !0, get: function() {
      return r.ArrayUtils;
    } });
    var i = Gu();
    Object.defineProperty(e, "DataStates", { enumerable: !0, get: function() {
      return i.DataStates;
    } });
    var s = Ec();
    Object.defineProperty(e, "DataStatesUtils", { enumerable: !0, get: function() {
      return s.DataStatesUtils;
    } });
    var n = Sc();
    Object.defineProperty(e, "DateUtils", { enumerable: !0, get: function() {
      return n.DateUtils;
    } });
    var a = Dc();
    Object.defineProperty(e, "DownloadUtils", { enumerable: !0, get: function() {
      return a.DownloadUtils;
    } });
    var o = Oc();
    Object.defineProperty(e, "EncodeUtils", { enumerable: !0, get: function() {
      return o.EncodeUtils;
    } });
    var l = Tc();
    Object.defineProperty(e, "FileUtils", { enumerable: !0, get: function() {
      return l.FileUtils;
    } });
    var c = jc();
    Object.defineProperty(e, "FunctionUtils", { enumerable: !0, get: function() {
      return c.FunctionUtils;
    } });
    var f = Rc();
    Object.defineProperty(e, "HttpHeaders", { enumerable: !0, get: function() {
      return f.HttpHeaders;
    } }), Object.defineProperty(e, "HttpMethods", { enumerable: !0, get: function() {
      return f.HttpMethods;
    } }), Object.defineProperty(e, "HttpStatuses", { enumerable: !0, get: function() {
      return f.HttpStatuses;
    } });
    var m = Mc();
    Object.defineProperty(e, "ObjectUtils", { enumerable: !0, get: function() {
      return m.ObjectUtils;
    } });
    var d = Nc();
    Object.defineProperty(e, "PromiseUtils", { enumerable: !0, get: function() {
      return d.PromiseUtils;
    } });
    var g = Ic();
    Object.defineProperty(e, "Sets", { enumerable: !0, get: function() {
      return g.Sets;
    } });
    var P = Cc();
    Object.defineProperty(e, "StringLabel", { enumerable: !0, get: function() {
      return P.StringLabel;
    } });
    var _ = zu();
    Object.defineProperty(e, "StringUtils", { enumerable: !0, get: function() {
      return _.StringUtils;
    } });
    var h = Ac();
    Object.defineProperty(e, "UUID", { enumerable: !0, get: function() {
      return h.UUID;
    } });
  }(Ci)), Ci;
}
var Le = {}, Ai = {}, Ye = {}, Lr = {}, ts;
function ya() {
  return ts || (ts = 1, Object.defineProperty(Lr, "__esModule", { value: !0 }), Lr.LogLevels = void 0, Lr.LogLevels = {
    DEBUG: 0,
    INFO: 1,
    WARN: 2,
    ERROR: 3,
    OFF: 4
  }), Lr;
}
var rs;
function Ku() {
  if (rs) return Ye;
  rs = 1;
  var e = Ye && Ye.__classPrivateFieldSet || function(n, a, o, l, c) {
    if (l === "m") throw new TypeError("Private method is not writable");
    if (l === "a" && !c) throw new TypeError("Private accessor was defined without a setter");
    if (typeof a == "function" ? n !== a || !c : !a.has(n)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return l === "a" ? c.call(n, o) : c ? c.value = o : a.set(n, o), o;
  }, t = Ye && Ye.__classPrivateFieldGet || function(n, a, o, l) {
    if (o === "a" && !l) throw new TypeError("Private accessor was defined without a getter");
    if (typeof a == "function" ? n !== a || !l : !a.has(n)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return o === "m" ? l : o === "a" ? l.call(n) : l ? l.value : a.get(n);
  }, r;
  Object.defineProperty(Ye, "__esModule", { value: !0 }), Ye.GlobalConfig = Ye.LogConfig = void 0;
  const i = ya();
  let s = class {
    // #endregion
    // #region Constructor
    constructor(a = i.LogLevels.ERROR) {
      r.set(this, void 0), e(this, r, a, "f");
    }
    // #endregion
    // #region Getters & Setters
    get level() {
      return t(this, r, "f");
    }
    // #endregion
    // #region Public Methods
    off() {
      return e(this, r, i.LogLevels.OFF, "f"), this;
    }
    debug() {
      return e(this, r, i.LogLevels.DEBUG, "f"), this;
    }
    info() {
      return e(this, r, i.LogLevels.INFO, "f"), this;
    }
    warn() {
      return e(this, r, i.LogLevels.WARN, "f"), this;
    }
    error() {
      return e(this, r, i.LogLevels.ERROR, "f"), this;
    }
  };
  return Ye.LogConfig = s, r = /* @__PURE__ */ new WeakMap(), Ye.GlobalConfig = new s().debug(), Ye;
}
var mt = {}, ns;
function Ju() {
  if (ns) return mt;
  ns = 1;
  var e = mt && mt.__classPrivateFieldSet || function(l, c, f, m, d) {
    if (m === "m") throw new TypeError("Private method is not writable");
    if (m === "a" && !d) throw new TypeError("Private accessor was defined without a setter");
    if (typeof c == "function" ? l !== c || !d : !c.has(l)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return m === "a" ? d.call(l, f) : d ? d.value = f : c.set(l, f), f;
  }, t = mt && mt.__classPrivateFieldGet || function(l, c, f, m) {
    if (f === "a" && !m) throw new TypeError("Private accessor was defined without a getter");
    if (typeof c == "function" ? l !== c || !m : !c.has(l)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return f === "m" ? m : f === "a" ? m.call(l) : m ? m.value : c.get(l);
  }, r, i;
  Object.defineProperty(mt, "__esModule", { value: !0 }), mt.Logger = void 0;
  const s = ya(), n = Ku();
  function a(l, c) {
    return l.config.level <= c && n.GlobalConfig.level <= c;
  }
  let o = class {
    // #endregion
    // #region Constructor
    constructor(c = "Logger", f = new n.LogConfig()) {
      r.set(this, void 0), i.set(this, void 0), e(this, r, c, "f"), e(this, i, f, "f");
    }
    // #endregion
    // #region Getters & Setters
    get name() {
      return t(this, r, "f");
    }
    get config() {
      return t(this, i, "f");
    }
    get level() {
      return t(this, i, "f").level;
    }
    // #endregion
    // #region Public Methods
    message(c) {
      return `${this.name} - ${c}`;
    }
    debug(c) {
      a(this, s.LogLevels.DEBUG) && console.log(this.message(c));
    }
    info(c) {
      a(this, s.LogLevels.INFO) && console.log(this.message(c));
    }
    warn(c) {
      a(this, s.LogLevels.WARN) && console.warn(this.message(c));
    }
    error(c) {
      a(this, s.LogLevels.ERROR) && console.error(this.message(c));
    }
  };
  return mt.Logger = o, r = /* @__PURE__ */ new WeakMap(), i = /* @__PURE__ */ new WeakMap(), mt;
}
var is;
function wr() {
  return is || (is = 1, function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.Logger = e.LogLevels = e.GlobalConfig = e.LogConfig = void 0;
    var t = Ku();
    Object.defineProperty(e, "LogConfig", { enumerable: !0, get: function() {
      return t.LogConfig;
    } }), Object.defineProperty(e, "GlobalConfig", { enumerable: !0, get: function() {
      return t.GlobalConfig;
    } });
    var r = ya();
    Object.defineProperty(e, "LogLevels", { enumerable: !0, get: function() {
      return r.LogLevels;
    } });
    var i = Ju();
    Object.defineProperty(e, "Logger", { enumerable: !0, get: function() {
      return i.Logger;
    } });
  }(Ai)), Ai;
}
var rt = {}, nt = {}, Mt = {}, as;
function kc() {
  if (as) return Mt;
  as = 1;
  var e = Mt && Mt.__classPrivateFieldSet || function(l, c, f, m, d) {
    if (m === "m") throw new TypeError("Private method is not writable");
    if (m === "a" && !d) throw new TypeError("Private accessor was defined without a setter");
    if (typeof c == "function" ? l !== c || !d : !c.has(l)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return m === "a" ? d.call(l, f) : d ? d.value = f : c.set(l, f), f;
  }, t = Mt && Mt.__classPrivateFieldGet || function(l, c, f, m) {
    if (f === "a" && !m) throw new TypeError("Private accessor was defined without a getter");
    if (typeof c == "function" ? l !== c || !m : !c.has(l)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return f === "m" ? m : f === "a" ? m.call(l) : m ? m.value : c.get(l);
  }, r, i, s, n, a;
  Object.defineProperty(Mt, "__esModule", { value: !0 });
  let o = class {
    constructor(c, f, m) {
      r.set(this, void 0), i.set(this, void 0), s.set(this, void 0), n.set(this, void 0), a.set(this, void 0), e(this, r, c, "f"), e(this, a, !1, "f"), e(this, n, !0, "f");
      let d = f;
      d.endsWith("?") && (e(this, n, !1, "f"), d = d.substring(0, d.length - 1)), e(this, i, d, "f");
      let g = m;
      g.endsWith("[]") && (e(this, a, !0, "f"), g = g.substring(0, g.length - 2)), e(this, s, g, "f");
    }
    get plugin() {
      return t(this, r, "f");
    }
    get name() {
      return t(this, i, "f");
    }
    get type() {
      return t(this, s, "f");
    }
    get array() {
      return t(this, a, "f");
    }
    get mandatory() {
      return t(this, n, "f");
    }
  };
  return r = /* @__PURE__ */ new WeakMap(), i = /* @__PURE__ */ new WeakMap(), s = /* @__PURE__ */ new WeakMap(), n = /* @__PURE__ */ new WeakMap(), a = /* @__PURE__ */ new WeakMap(), Mt.default = o, Mt;
}
var it = {}, Nt = {}, ss;
function qc() {
  if (ss) return Nt;
  ss = 1;
  var e = Nt && Nt.__classPrivateFieldSet || function(n, a, o, l, c) {
    if (l === "m") throw new TypeError("Private method is not writable");
    if (l === "a" && !c) throw new TypeError("Private accessor was defined without a setter");
    if (typeof a == "function" ? n !== a || !c : !a.has(n)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return l === "a" ? c.call(n, o) : c ? c.value = o : a.set(n, o), o;
  }, t = Nt && Nt.__classPrivateFieldGet || function(n, a, o, l) {
    if (o === "a" && !l) throw new TypeError("Private accessor was defined without a getter");
    if (typeof a == "function" ? n !== a || !l : !a.has(n)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return o === "m" ? l : o === "a" ? l.call(n) : l ? l.value : a.get(n);
  }, r, i;
  Object.defineProperty(Nt, "__esModule", { value: !0 });
  let s = class {
    constructor(a, o) {
      r.set(this, void 0), i.set(this, void 0), e(this, r, a, "f"), e(this, i, o, "f");
    }
    get type() {
      return t(this, i, "f");
    }
    get name() {
      return t(this, r, "f");
    }
  };
  return r = /* @__PURE__ */ new WeakMap(), i = /* @__PURE__ */ new WeakMap(), Nt.default = s, Nt;
}
var It = {}, os;
function Uc() {
  if (os) return It;
  os = 1;
  var e = It && It.__classPrivateFieldSet || function(s, n, a, o, l) {
    if (o === "m") throw new TypeError("Private method is not writable");
    if (o === "a" && !l) throw new TypeError("Private accessor was defined without a setter");
    if (typeof n == "function" ? s !== n || !l : !n.has(s)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return o === "a" ? l.call(s, a) : l ? l.value = a : n.set(s, a), a;
  }, t = It && It.__classPrivateFieldGet || function(s, n, a, o) {
    if (a === "a" && !o) throw new TypeError("Private accessor was defined without a getter");
    if (typeof n == "function" ? s !== n || !o : !n.has(s)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return a === "m" ? o : a === "a" ? o.call(s) : o ? o.value : n.get(s);
  }, r;
  Object.defineProperty(It, "__esModule", { value: !0 });
  let i = class {
    constructor(n) {
      r.set(this, void 0), e(this, r, n, "f");
    }
    get name() {
      return t(this, r, "f");
    }
  };
  return r = /* @__PURE__ */ new WeakMap(), It.default = i, It;
}
var Ct = {}, us;
function Lc() {
  if (us) return Ct;
  us = 1;
  var e = Ct && Ct.__classPrivateFieldSet || function(n, a, o, l, c) {
    if (l === "m") throw new TypeError("Private method is not writable");
    if (l === "a" && !c) throw new TypeError("Private accessor was defined without a setter");
    if (typeof a == "function" ? n !== a || !c : !a.has(n)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return l === "a" ? c.call(n, o) : c ? c.value = o : a.set(n, o), o;
  }, t = Ct && Ct.__classPrivateFieldGet || function(n, a, o, l) {
    if (o === "a" && !l) throw new TypeError("Private accessor was defined without a getter");
    if (typeof a == "function" ? n !== a || !l : !a.has(n)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return o === "m" ? l : o === "a" ? l.call(n) : l ? l.value : a.get(n);
  }, r, i;
  Object.defineProperty(Ct, "__esModule", { value: !0 });
  let s = class {
    constructor(a, o) {
      r.set(this, void 0), i.set(this, void 0), e(this, r, a, "f"), e(this, i, o, "f");
    }
    get type() {
      return t(this, i, "f");
    }
    get name() {
      return t(this, r, "f");
    }
  };
  return r = /* @__PURE__ */ new WeakMap(), i = /* @__PURE__ */ new WeakMap(), Ct.default = s, Ct;
}
var ls;
function Fc() {
  if (ls) return it;
  ls = 1;
  var e = it && it.__classPrivateFieldSet || function(d, g, P, _, h) {
    if (_ === "m") throw new TypeError("Private method is not writable");
    if (_ === "a" && !h) throw new TypeError("Private accessor was defined without a setter");
    if (typeof g == "function" ? d !== g || !h : !g.has(d)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return _ === "a" ? h.call(d, P) : h ? h.value = P : g.set(d, P), P;
  }, t = it && it.__classPrivateFieldGet || function(d, g, P, _) {
    if (P === "a" && !_) throw new TypeError("Private accessor was defined without a getter");
    if (typeof g == "function" ? d !== g || !_ : !g.has(d)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return P === "m" ? _ : P === "a" ? _.call(d) : _ ? _.value : g.get(d);
  }, r = it && it.__importDefault || function(d) {
    return d && d.__esModule ? d : { default: d };
  }, i, s, n, a, o;
  Object.defineProperty(it, "__esModule", { value: !0 });
  const l = r(qc()), c = r(Uc()), f = r(Lc());
  let m = class {
    constructor(g, P, _) {
      i.set(this, void 0), s.set(this, void 0), n.set(this, void 0), a.set(this, void 0), o.set(this, void 0), e(this, i, g, "f"), e(this, s, P, "f");
      const h = _.attributes || {};
      e(this, n, Object.keys(h).map((p) => new l.default(p, String(h[p]))), "f");
      const v = _.properties || {};
      e(this, a, Object.keys(v).map((p) => new f.default(p, String(v[p]))), "f");
      const u = _.events || {};
      e(this, o, Object.keys(u).map((p) => new c.default(p)), "f");
    }
    get plugin() {
      return t(this, i, "f");
    }
    get name() {
      return t(this, s, "f");
    }
    get attributes() {
      return t(this, n, "f").slice();
    }
    get properties() {
      return t(this, a, "f").slice();
    }
    get events() {
      return t(this, o, "f").slice();
    }
  };
  return i = /* @__PURE__ */ new WeakMap(), s = /* @__PURE__ */ new WeakMap(), n = /* @__PURE__ */ new WeakMap(), a = /* @__PURE__ */ new WeakMap(), o = /* @__PURE__ */ new WeakMap(), it.default = m, it;
}
var At = {}, cs;
function Wc() {
  if (cs) return At;
  cs = 1;
  var e = At && At.__classPrivateFieldSet || function(l, c, f, m, d) {
    if (m === "m") throw new TypeError("Private method is not writable");
    if (m === "a" && !d) throw new TypeError("Private accessor was defined without a setter");
    if (typeof c == "function" ? l !== c || !d : !c.has(l)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return m === "a" ? d.call(l, f) : d ? d.value = f : c.set(l, f), f;
  }, t = At && At.__classPrivateFieldGet || function(l, c, f, m) {
    if (f === "a" && !m) throw new TypeError("Private accessor was defined without a getter");
    if (typeof c == "function" ? l !== c || !m : !c.has(l)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return f === "m" ? m : f === "a" ? m.call(l) : m ? m.value : c.get(l);
  }, r, i, s, n, a;
  Object.defineProperty(At, "__esModule", { value: !0 });
  let o = class {
    constructor(c, f, m) {
      r.set(this, void 0), i.set(this, void 0), s.set(this, void 0), n.set(this, void 0), a.set(this, void 0), e(this, r, c, "f"), e(this, a, !1, "f"), e(this, n, !0, "f");
      let d = f;
      d.endsWith("?") && (e(this, n, !1, "f"), d = d.substring(0, d.length - 1)), e(this, i, d, "f");
      let g = m;
      g.endsWith("[]") && (e(this, a, !0, "f"), g = g.substring(0, g.length - 2)), e(this, s, g, "f");
    }
    get plugin() {
      return t(this, r, "f");
    }
    get name() {
      return t(this, i, "f");
    }
    get type() {
      return t(this, s, "f");
    }
    get array() {
      return t(this, a, "f");
    }
    get mandatory() {
      return t(this, n, "f");
    }
  };
  return r = /* @__PURE__ */ new WeakMap(), i = /* @__PURE__ */ new WeakMap(), s = /* @__PURE__ */ new WeakMap(), n = /* @__PURE__ */ new WeakMap(), a = /* @__PURE__ */ new WeakMap(), At.default = o, At;
}
var ds;
function Vc() {
  if (ds) return nt;
  ds = 1;
  var e = nt && nt.__classPrivateFieldSet || function(d, g, P, _, h) {
    if (_ === "m") throw new TypeError("Private method is not writable");
    if (_ === "a" && !h) throw new TypeError("Private accessor was defined without a setter");
    if (typeof g == "function" ? d !== g || !h : !g.has(d)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return _ === "a" ? h.call(d, P) : h ? h.value = P : g.set(d, P), P;
  }, t = nt && nt.__classPrivateFieldGet || function(d, g, P, _) {
    if (P === "a" && !_) throw new TypeError("Private accessor was defined without a getter");
    if (typeof g == "function" ? d !== g || !_ : !g.has(d)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return P === "m" ? _ : P === "a" ? _.call(d) : _ ? _.value : g.get(d);
  }, r = nt && nt.__importDefault || function(d) {
    return d && d.__esModule ? d : { default: d };
  }, i, s, n, a, o;
  Object.defineProperty(nt, "__esModule", { value: !0 });
  const l = r(kc()), c = r(Fc()), f = r(Wc());
  let m = class {
    constructor(g, P, _) {
      i.set(this, void 0), s.set(this, void 0), n.set(this, void 0), a.set(this, void 0), o.set(this, void 0), e(this, i, g, "f"), e(this, s, `${g}/${P}`, "f");
      const h = _.properties || {};
      e(this, n, Object.keys(h).map((p) => {
        const y = h[p];
        return new f.default(g, p, y);
      }), "f");
      const v = _.attributes || {};
      e(this, a, Object.keys(v).map((p) => {
        const y = v[p];
        return new l.default(g, p, y);
      }), "f");
      const u = _.elements || {};
      e(this, o, Object.keys(u).map((p) => {
        const y = u[p];
        return new c.default(g, p, y);
      }), "f");
    }
    get plugin() {
      return t(this, i, "f");
    }
    get name() {
      return t(this, s, "f");
    }
    get properties() {
      return t(this, n, "f").slice();
    }
    getProperty(g) {
      return this.properties.find((P) => P.name === g);
    }
    get attributes() {
      return t(this, a, "f").slice();
    }
    getAttribute(g) {
      return this.attributes.find((P) => P.name === g);
    }
    get elements() {
      return t(this, o, "f").slice();
    }
    getElement(g) {
      return this.elements.find((P) => P.name === g);
    }
  };
  return i = /* @__PURE__ */ new WeakMap(), s = /* @__PURE__ */ new WeakMap(), n = /* @__PURE__ */ new WeakMap(), a = /* @__PURE__ */ new WeakMap(), o = /* @__PURE__ */ new WeakMap(), nt.default = m, nt;
}
var at = {}, kt = {}, fs;
function Hc() {
  if (fs) return kt;
  fs = 1;
  var e = kt && kt.__classPrivateFieldSet || function(a, o, l, c, f) {
    if (c === "m") throw new TypeError("Private method is not writable");
    if (c === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof o == "function" ? a !== o || !f : !o.has(a)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return c === "a" ? f.call(a, l) : f ? f.value = l : o.set(a, l), l;
  }, t = kt && kt.__classPrivateFieldGet || function(a, o, l, c) {
    if (l === "a" && !c) throw new TypeError("Private accessor was defined without a getter");
    if (typeof o == "function" ? a !== o || !c : !o.has(a)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return l === "m" ? c : l === "a" ? c.call(a) : c ? c.value : o.get(a);
  }, r, i, s;
  Object.defineProperty(kt, "__esModule", { value: !0 });
  let n = class {
    constructor(o, l, c) {
      r.set(this, void 0), i.set(this, void 0), s.set(this, void 0), e(this, r, o, "f"), e(this, i, l, "f"), e(this, s, c, "f");
    }
    get plugin() {
      return t(this, r, "f");
    }
    get name() {
      return t(this, i, "f");
    }
    get value() {
      return t(this, s, "f");
    }
  };
  return r = /* @__PURE__ */ new WeakMap(), i = /* @__PURE__ */ new WeakMap(), s = /* @__PURE__ */ new WeakMap(), kt.default = n, kt;
}
var qt = {}, hs;
function Gc() {
  if (hs) return qt;
  hs = 1;
  var e = qt && qt.__classPrivateFieldSet || function(l, c, f, m, d) {
    if (m === "m") throw new TypeError("Private method is not writable");
    if (m === "a" && !d) throw new TypeError("Private accessor was defined without a setter");
    if (typeof c == "function" ? l !== c || !d : !c.has(l)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return m === "a" ? d.call(l, f) : d ? d.value = f : c.set(l, f), f;
  }, t = qt && qt.__classPrivateFieldGet || function(l, c, f, m) {
    if (f === "a" && !m) throw new TypeError("Private accessor was defined without a getter");
    if (typeof c == "function" ? l !== c || !m : !c.has(l)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return f === "m" ? m : f === "a" ? m.call(l) : m ? m.value : c.get(l);
  }, r, i, s, n, a;
  Object.defineProperty(qt, "__esModule", { value: !0 });
  let o = class {
    constructor(c, f, m) {
      r.set(this, void 0), i.set(this, void 0), s.set(this, void 0), n.set(this, void 0), a.set(this, void 0), e(this, r, c, "f"), e(this, i, f, "f"), e(this, s, m.url, "f"), e(this, n, m.type, "f"), e(this, a, m.element, "f");
    }
    get plugin() {
      return t(this, r, "f");
    }
    get name() {
      return t(this, i, "f");
    }
    get url() {
      return t(this, s, "f");
    }
    get type() {
      return t(this, n, "f");
    }
    get element() {
      return t(this, a, "f");
    }
  };
  return r = /* @__PURE__ */ new WeakMap(), i = /* @__PURE__ */ new WeakMap(), s = /* @__PURE__ */ new WeakMap(), n = /* @__PURE__ */ new WeakMap(), a = /* @__PURE__ */ new WeakMap(), qt.default = o, qt;
}
var ms;
function zc() {
  if (ms) return at;
  ms = 1;
  var e = at && at.__classPrivateFieldSet || function(m, d, g, P, _) {
    if (P === "m") throw new TypeError("Private method is not writable");
    if (P === "a" && !_) throw new TypeError("Private accessor was defined without a setter");
    if (typeof d == "function" ? m !== d || !_ : !d.has(m)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return P === "a" ? _.call(m, g) : _ ? _.value = g : d.set(m, g), g;
  }, t = at && at.__classPrivateFieldGet || function(m, d, g, P) {
    if (g === "a" && !P) throw new TypeError("Private accessor was defined without a getter");
    if (typeof d == "function" ? m !== d || !P : !d.has(m)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return g === "m" ? P : g === "a" ? P.call(m) : P ? P.value : d.get(m);
  }, r = at && at.__importDefault || function(m) {
    return m && m.__esModule ? m : { default: m };
  }, i, s, n, a, o;
  Object.defineProperty(at, "__esModule", { value: !0 });
  const l = r(Hc()), c = r(Gc());
  let f = class {
    constructor(d, g, P, _) {
      i.set(this, void 0), s.set(this, void 0), n.set(this, void 0), a.set(this, void 0), o.set(this, void 0), e(this, i, d, "f"), e(this, s, g, "f"), e(this, n, P, "f");
      const h = _.attributes || {};
      e(this, a, Object.keys(h).map((u) => {
        const p = h[u];
        return new l.default(d, u, p);
      }), "f");
      const v = _.elements || {};
      e(this, o, Object.keys(v).map((u) => {
        const p = v[u];
        return new c.default(d, u, p);
      }), "f");
    }
    get plugin() {
      return t(this, i, "f");
    }
    get define() {
      return t(this, s, "f");
    }
    get name() {
      return t(this, n, "f");
    }
    get attributes() {
      return t(this, a, "f").slice();
    }
    getAttribute(d) {
      return this.attributes.find((g) => g.name === d);
    }
    get elements() {
      return t(this, o, "f").slice();
    }
    getElement(d) {
      return this.elements.find((g) => g.name === d);
    }
  };
  return i = /* @__PURE__ */ new WeakMap(), s = /* @__PURE__ */ new WeakMap(), n = /* @__PURE__ */ new WeakMap(), a = /* @__PURE__ */ new WeakMap(), o = /* @__PURE__ */ new WeakMap(), at.default = f, at;
}
var ps;
function Kc() {
  if (ps) return rt;
  ps = 1;
  var e = rt && rt.__classPrivateFieldSet || function(d, g, P, _, h) {
    if (_ === "m") throw new TypeError("Private method is not writable");
    if (_ === "a" && !h) throw new TypeError("Private accessor was defined without a setter");
    if (typeof g == "function" ? d !== g || !h : !g.has(d)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return _ === "a" ? h.call(d, P) : h ? h.value = P : g.set(d, P), P;
  }, t = rt && rt.__classPrivateFieldGet || function(d, g, P, _) {
    if (P === "a" && !_) throw new TypeError("Private accessor was defined without a getter");
    if (typeof g == "function" ? d !== g || !_ : !g.has(d)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return P === "m" ? _ : P === "a" ? _.call(d) : _ ? _.value : g.get(d);
  }, r = rt && rt.__importDefault || function(d) {
    return d && d.__esModule ? d : { default: d };
  }, i, s, n, a, o, l;
  Object.defineProperty(rt, "__esModule", { value: !0 });
  const c = r(Vc()), f = r(zc());
  let m = class {
    constructor(g, P) {
      i.set(this, void 0), s.set(this, void 0), n.set(this, void 0), a.set(this, void 0), o.set(this, void 0), l.set(this, void 0), e(this, i, g, "f"), e(this, s, P.name, "f"), e(this, n, P.url, "f"), e(this, a, P.dependencies || [], "f");
      const _ = P.defines || {};
      e(this, o, Object.keys(_).map((v) => {
        const u = _[v];
        return new c.default(this.name, v, u);
      }), "f");
      const h = P.provides || {};
      e(this, l, Object.keys(h).reduce((v, u) => {
        const p = h[u], y = Object.keys(p).map((w) => new f.default(this.name, u, w, p[w]), []);
        return [...v, ...y];
      }, []), "f");
    }
    get loadUrl() {
      return t(this, i, "f");
    }
    get name() {
      return t(this, s, "f");
    }
    get url() {
      return t(this, n, "f");
    }
    get dependencies() {
      return t(this, a, "f").slice();
    }
    get defines() {
      return t(this, o, "f").slice();
    }
    get provides() {
      return t(this, l, "f").slice();
    }
  };
  return i = /* @__PURE__ */ new WeakMap(), s = /* @__PURE__ */ new WeakMap(), n = /* @__PURE__ */ new WeakMap(), a = /* @__PURE__ */ new WeakMap(), o = /* @__PURE__ */ new WeakMap(), l = /* @__PURE__ */ new WeakMap(), rt.default = m, rt;
}
var st = {}, Ut = {}, vs;
function Jc() {
  if (vs) return Ut;
  vs = 1;
  var e = Ut && Ut.__classPrivateFieldSet || function(l, c, f, m, d) {
    if (m === "m") throw new TypeError("Private method is not writable");
    if (m === "a" && !d) throw new TypeError("Private accessor was defined without a setter");
    if (typeof c == "function" ? l !== c || !d : !c.has(l)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return m === "a" ? d.call(l, f) : d ? d.value = f : c.set(l, f), f;
  }, t = Ut && Ut.__classPrivateFieldGet || function(l, c, f, m) {
    if (f === "a" && !m) throw new TypeError("Private accessor was defined without a getter");
    if (typeof c == "function" ? l !== c || !m : !c.has(l)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return f === "m" ? m : f === "a" ? m.call(l) : m ? m.value : c.get(l);
  }, r, i, s, n, a;
  Object.defineProperty(Ut, "__esModule", { value: !0 });
  let o = class {
    constructor(c, f, m) {
      r.set(this, void 0), i.set(this, void 0), s.set(this, void 0), n.set(this, void 0), a.set(this, void 0), e(this, r, f.name, "f"), e(this, i, f.type, "f"), e(this, s, f.mandatory, "f"), e(this, n, f.array, "f");
      const d = m.value;
      switch (t(this, i, "f")) {
        case "url": {
          Array.isArray(d) ? e(this, a, d.map((g) => `${c}${g}`), "f") : e(this, a, `${c}${d}`, "f");
          break;
        }
        default: {
          e(this, a, d, "f");
          break;
        }
      }
    }
    get name() {
      return t(this, r, "f");
    }
    get type() {
      return t(this, i, "f");
    }
    get mandatory() {
      return t(this, s, "f");
    }
    get array() {
      return t(this, n, "f");
    }
    get value() {
      return t(this, a, "f");
    }
  };
  return r = /* @__PURE__ */ new WeakMap(), i = /* @__PURE__ */ new WeakMap(), s = /* @__PURE__ */ new WeakMap(), n = /* @__PURE__ */ new WeakMap(), a = /* @__PURE__ */ new WeakMap(), Ut.default = o, Ut;
}
var Lt = {}, gs;
function Bc() {
  if (gs) return Lt;
  gs = 1;
  var e = Lt && Lt.__classPrivateFieldSet || function(o, l, c, f, m) {
    if (f === "m") throw new TypeError("Private method is not writable");
    if (f === "a" && !m) throw new TypeError("Private accessor was defined without a setter");
    if (typeof l == "function" ? o !== l || !m : !l.has(o)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return f === "a" ? m.call(o, c) : m ? m.value = c : l.set(o, c), c;
  }, t = Lt && Lt.__classPrivateFieldGet || function(o, l, c, f) {
    if (c === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof l == "function" ? o !== l || !f : !l.has(o)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return c === "m" ? f : c === "a" ? f.call(o) : f ? f.value : l.get(o);
  }, r, i, s, n;
  Object.defineProperty(Lt, "__esModule", { value: !0 });
  let a = class {
    constructor(l, c, f) {
      r.set(this, void 0), i.set(this, void 0), s.set(this, void 0), n.set(this, void 0), e(this, r, c.name, "f"), e(this, i, `${l}${f.url}`, "f"), e(this, s, f.type, "f"), e(this, n, f.element, "f");
    }
    get name() {
      return t(this, r, "f");
    }
    get url() {
      return t(this, i, "f");
    }
    get type() {
      return t(this, s, "f");
    }
    get element() {
      return t(this, n, "f");
    }
  };
  return r = /* @__PURE__ */ new WeakMap(), i = /* @__PURE__ */ new WeakMap(), s = /* @__PURE__ */ new WeakMap(), n = /* @__PURE__ */ new WeakMap(), Lt.default = a, Lt;
}
var _s;
function Yc() {
  if (_s) return st;
  _s = 1;
  var e = st && st.__classPrivateFieldSet || function(g, P, _, h, v) {
    if (h === "m") throw new TypeError("Private method is not writable");
    if (h === "a" && !v) throw new TypeError("Private accessor was defined without a setter");
    if (typeof P == "function" ? g !== P || !v : !P.has(g)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return h === "a" ? v.call(g, _) : v ? v.value = _ : P.set(g, _), _;
  }, t = st && st.__classPrivateFieldGet || function(g, P, _, h) {
    if (_ === "a" && !h) throw new TypeError("Private accessor was defined without a getter");
    if (typeof P == "function" ? g !== P || !h : !P.has(g)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return _ === "m" ? h : _ === "a" ? h.call(g) : h ? h.value : P.get(g);
  }, r = st && st.__importDefault || function(g) {
    return g && g.__esModule ? g : { default: g };
  }, i, s, n, a, o, l;
  Object.defineProperty(st, "__esModule", { value: !0 });
  const c = Ju(), f = r(Jc()), m = r(Bc());
  let d = class {
    constructor(P, _, h, v) {
      i.set(this, void 0), s.set(this, void 0), n.set(this, void 0), a.set(this, []), o.set(this, []), l.set(this, void 0), e(this, l, new c.Logger("PluginManager", v), "f"), e(this, i, h.plugin, "f"), e(this, s, _.name, "f"), e(this, n, `${_.name}/${h.name}`, "f"), _.attributes.forEach((u) => {
        const { name: p, type: y, mandatory: w, array: b } = u, E = h.attributes.find((S) => S.name === p);
        if (w && !E)
          throw new Error(`Missing mandatory attribute '${p}'`);
        if (E) {
          if (b !== Array.isArray(E.value))
            throw new Error(`Invalid attribute type '${p}', should ${b ? "" : "not "}be an array`);
          t(this, a, "f").push(new f.default(P, u, E));
        }
      }), h.attributes.forEach((u) => {
        _.attributes.find((y) => y.name === u.name) || this.logger.warn(`${h.plugin} - ${h.name} - Attribute '${u.name}' is not defined`);
      }), _.elements.forEach((u) => {
        const { name: p } = u, y = h.elements.find((w) => w.name === p);
        if (!y)
          throw new Error(`Missing element '${p}'`);
        t(this, o, "f").push(new m.default(P, u, y));
      }), h.elements.forEach((u) => {
        _.elements.find((y) => y.name === u.name) || this.logger.warn(`${h.plugin} - ${h.name} - Element '${u.name}' is not defined`);
      });
    }
    get plugin() {
      return t(this, i, "f");
    }
    get definition() {
      return t(this, s, "f");
    }
    get name() {
      return t(this, n, "f");
    }
    get logger() {
      return t(this, l, "f");
    }
    get attributes() {
      return t(this, a, "f").reduce((P, _) => (P[_.name] = _.value, P), {});
    }
    getAttributes() {
      return t(this, a, "f").slice();
    }
    getAttribute(P) {
      return this.attributes[P];
    }
    get elements() {
      return t(this, o, "f").reduce((P, _) => (P[_.name] = {
        plugin: this.plugin,
        url: _.url,
        type: _.type,
        element: _.element
      }, P), {});
    }
    getElements() {
      return t(this, o, "f").slice();
    }
    getElement(P) {
      return this.elements[P];
    }
  };
  return i = /* @__PURE__ */ new WeakMap(), s = /* @__PURE__ */ new WeakMap(), n = /* @__PURE__ */ new WeakMap(), a = /* @__PURE__ */ new WeakMap(), o = /* @__PURE__ */ new WeakMap(), l = /* @__PURE__ */ new WeakMap(), st.default = d, st;
}
var pt = {}, vt = {}, Pn = { exports: {} }, ki = {}, gt = {}, Jt = {}, qi = {}, Ui = {}, Li = {}, ys;
function vi() {
  return ys || (ys = 1, function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.regexpCode = e.getEsmExportName = e.getProperty = e.safeStringify = e.stringify = e.strConcat = e.addCodeArg = e.str = e._ = e.nil = e._Code = e.Name = e.IDENTIFIER = e._CodeOrName = void 0;
    class t {
    }
    e._CodeOrName = t, e.IDENTIFIER = /^[a-z$_][a-z$_0-9]*$/i;
    class r extends t {
      constructor(u) {
        if (super(), !e.IDENTIFIER.test(u))
          throw new Error("CodeGen: name must be a valid identifier");
        this.str = u;
      }
      toString() {
        return this.str;
      }
      emptyStr() {
        return !1;
      }
      get names() {
        return { [this.str]: 1 };
      }
    }
    e.Name = r;
    class i extends t {
      constructor(u) {
        super(), this._items = typeof u == "string" ? [u] : u;
      }
      toString() {
        return this.str;
      }
      emptyStr() {
        if (this._items.length > 1)
          return !1;
        const u = this._items[0];
        return u === "" || u === '""';
      }
      get str() {
        var u;
        return (u = this._str) !== null && u !== void 0 ? u : this._str = this._items.reduce((p, y) => `${p}${y}`, "");
      }
      get names() {
        var u;
        return (u = this._names) !== null && u !== void 0 ? u : this._names = this._items.reduce((p, y) => (y instanceof r && (p[y.str] = (p[y.str] || 0) + 1), p), {});
      }
    }
    e._Code = i, e.nil = new i("");
    function s(v, ...u) {
      const p = [v[0]];
      let y = 0;
      for (; y < u.length; )
        o(p, u[y]), p.push(v[++y]);
      return new i(p);
    }
    e._ = s;
    const n = new i("+");
    function a(v, ...u) {
      const p = [g(v[0])];
      let y = 0;
      for (; y < u.length; )
        p.push(n), o(p, u[y]), p.push(n, g(v[++y]));
      return l(p), new i(p);
    }
    e.str = a;
    function o(v, u) {
      u instanceof i ? v.push(...u._items) : u instanceof r ? v.push(u) : v.push(m(u));
    }
    e.addCodeArg = o;
    function l(v) {
      let u = 1;
      for (; u < v.length - 1; ) {
        if (v[u] === n) {
          const p = c(v[u - 1], v[u + 1]);
          if (p !== void 0) {
            v.splice(u - 1, 3, p);
            continue;
          }
          v[u++] = "+";
        }
        u++;
      }
    }
    function c(v, u) {
      if (u === '""')
        return v;
      if (v === '""')
        return u;
      if (typeof v == "string")
        return u instanceof r || v[v.length - 1] !== '"' ? void 0 : typeof u != "string" ? `${v.slice(0, -1)}${u}"` : u[0] === '"' ? v.slice(0, -1) + u.slice(1) : void 0;
      if (typeof u == "string" && u[0] === '"' && !(v instanceof r))
        return `"${v}${u.slice(1)}`;
    }
    function f(v, u) {
      return u.emptyStr() ? v : v.emptyStr() ? u : a`${v}${u}`;
    }
    e.strConcat = f;
    function m(v) {
      return typeof v == "number" || typeof v == "boolean" || v === null ? v : g(Array.isArray(v) ? v.join(",") : v);
    }
    function d(v) {
      return new i(g(v));
    }
    e.stringify = d;
    function g(v) {
      return JSON.stringify(v).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029");
    }
    e.safeStringify = g;
    function P(v) {
      return typeof v == "string" && e.IDENTIFIER.test(v) ? new i(`.${v}`) : s`[${v}]`;
    }
    e.getProperty = P;
    function _(v) {
      if (typeof v == "string" && e.IDENTIFIER.test(v))
        return new i(`${v}`);
      throw new Error(`CodeGen: invalid export name: ${v}, use explicit $id name mapping`);
    }
    e.getEsmExportName = _;
    function h(v) {
      return new i(v.toString());
    }
    e.regexpCode = h;
  }(Li)), Li;
}
var Fi = {}, Ps;
function ws() {
  return Ps || (Ps = 1, function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.ValueScope = e.ValueScopeName = e.Scope = e.varKinds = e.UsedValueState = void 0;
    const t = vi();
    class r extends Error {
      constructor(c) {
        super(`CodeGen: "code" for ${c} not defined`), this.value = c.value;
      }
    }
    var i;
    (function(l) {
      l[l.Started = 0] = "Started", l[l.Completed = 1] = "Completed";
    })(i || (e.UsedValueState = i = {})), e.varKinds = {
      const: new t.Name("const"),
      let: new t.Name("let"),
      var: new t.Name("var")
    };
    class s {
      constructor({ prefixes: c, parent: f } = {}) {
        this._names = {}, this._prefixes = c, this._parent = f;
      }
      toName(c) {
        return c instanceof t.Name ? c : this.name(c);
      }
      name(c) {
        return new t.Name(this._newName(c));
      }
      _newName(c) {
        const f = this._names[c] || this._nameGroup(c);
        return `${c}${f.index++}`;
      }
      _nameGroup(c) {
        var f, m;
        if (!((m = (f = this._parent) === null || f === void 0 ? void 0 : f._prefixes) === null || m === void 0) && m.has(c) || this._prefixes && !this._prefixes.has(c))
          throw new Error(`CodeGen: prefix "${c}" is not allowed in this scope`);
        return this._names[c] = { prefix: c, index: 0 };
      }
    }
    e.Scope = s;
    class n extends t.Name {
      constructor(c, f) {
        super(f), this.prefix = c;
      }
      setValue(c, { property: f, itemIndex: m }) {
        this.value = c, this.scopePath = (0, t._)`.${new t.Name(f)}[${m}]`;
      }
    }
    e.ValueScopeName = n;
    const a = (0, t._)`\n`;
    class o extends s {
      constructor(c) {
        super(c), this._values = {}, this._scope = c.scope, this.opts = { ...c, _n: c.lines ? a : t.nil };
      }
      get() {
        return this._scope;
      }
      name(c) {
        return new n(c, this._newName(c));
      }
      value(c, f) {
        var m;
        if (f.ref === void 0)
          throw new Error("CodeGen: ref must be passed in value");
        const d = this.toName(c), { prefix: g } = d, P = (m = f.key) !== null && m !== void 0 ? m : f.ref;
        let _ = this._values[g];
        if (_) {
          const u = _.get(P);
          if (u)
            return u;
        } else
          _ = this._values[g] = /* @__PURE__ */ new Map();
        _.set(P, d);
        const h = this._scope[g] || (this._scope[g] = []), v = h.length;
        return h[v] = f.ref, d.setValue(f, { property: g, itemIndex: v }), d;
      }
      getValue(c, f) {
        const m = this._values[c];
        if (m)
          return m.get(f);
      }
      scopeRefs(c, f = this._values) {
        return this._reduceValues(f, (m) => {
          if (m.scopePath === void 0)
            throw new Error(`CodeGen: name "${m}" has no value`);
          return (0, t._)`${c}${m.scopePath}`;
        });
      }
      scopeCode(c = this._values, f, m) {
        return this._reduceValues(c, (d) => {
          if (d.value === void 0)
            throw new Error(`CodeGen: name "${d}" has no value`);
          return d.value.code;
        }, f, m);
      }
      _reduceValues(c, f, m = {}, d) {
        let g = t.nil;
        for (const P in c) {
          const _ = c[P];
          if (!_)
            continue;
          const h = m[P] = m[P] || /* @__PURE__ */ new Map();
          _.forEach((v) => {
            if (h.has(v))
              return;
            h.set(v, i.Started);
            let u = f(v);
            if (u) {
              const p = this.opts.es5 ? e.varKinds.var : e.varKinds.const;
              g = (0, t._)`${g}${p} ${v} = ${u};${this.opts._n}`;
            } else if (u = d == null ? void 0 : d(v))
              g = (0, t._)`${g}${u}${this.opts._n}`;
            else
              throw new r(v);
            h.set(v, i.Completed);
          });
        }
        return g;
      }
    }
    e.ValueScope = o;
  }(Fi)), Fi;
}
var bs;
function se() {
  return bs || (bs = 1, function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.or = e.and = e.not = e.CodeGen = e.operators = e.varKinds = e.ValueScopeName = e.ValueScope = e.Scope = e.Name = e.regexpCode = e.stringify = e.getProperty = e.nil = e.strConcat = e.str = e._ = void 0;
    const t = vi(), r = ws();
    var i = vi();
    Object.defineProperty(e, "_", { enumerable: !0, get: function() {
      return i._;
    } }), Object.defineProperty(e, "str", { enumerable: !0, get: function() {
      return i.str;
    } }), Object.defineProperty(e, "strConcat", { enumerable: !0, get: function() {
      return i.strConcat;
    } }), Object.defineProperty(e, "nil", { enumerable: !0, get: function() {
      return i.nil;
    } }), Object.defineProperty(e, "getProperty", { enumerable: !0, get: function() {
      return i.getProperty;
    } }), Object.defineProperty(e, "stringify", { enumerable: !0, get: function() {
      return i.stringify;
    } }), Object.defineProperty(e, "regexpCode", { enumerable: !0, get: function() {
      return i.regexpCode;
    } }), Object.defineProperty(e, "Name", { enumerable: !0, get: function() {
      return i.Name;
    } });
    var s = ws();
    Object.defineProperty(e, "Scope", { enumerable: !0, get: function() {
      return s.Scope;
    } }), Object.defineProperty(e, "ValueScope", { enumerable: !0, get: function() {
      return s.ValueScope;
    } }), Object.defineProperty(e, "ValueScopeName", { enumerable: !0, get: function() {
      return s.ValueScopeName;
    } }), Object.defineProperty(e, "varKinds", { enumerable: !0, get: function() {
      return s.varKinds;
    } }), e.operators = {
      GT: new t._Code(">"),
      GTE: new t._Code(">="),
      LT: new t._Code("<"),
      LTE: new t._Code("<="),
      EQ: new t._Code("==="),
      NEQ: new t._Code("!=="),
      NOT: new t._Code("!"),
      OR: new t._Code("||"),
      AND: new t._Code("&&"),
      ADD: new t._Code("+")
    };
    class n {
      optimizeNodes() {
        return this;
      }
      optimizeNames($, D) {
        return this;
      }
    }
    class a extends n {
      constructor($, D, I) {
        super(), this.varKind = $, this.name = D, this.rhs = I;
      }
      render({ es5: $, _n: D }) {
        const I = $ ? r.varKinds.var : this.varKind, J = this.rhs === void 0 ? "" : ` = ${this.rhs}`;
        return `${I} ${this.name}${J};` + D;
      }
      optimizeNames($, D) {
        if ($[this.name.str])
          return this.rhs && (this.rhs = H(this.rhs, $, D)), this;
      }
      get names() {
        return this.rhs instanceof t._CodeOrName ? this.rhs.names : {};
      }
    }
    class o extends n {
      constructor($, D, I) {
        super(), this.lhs = $, this.rhs = D, this.sideEffects = I;
      }
      render({ _n: $ }) {
        return `${this.lhs} = ${this.rhs};` + $;
      }
      optimizeNames($, D) {
        if (!(this.lhs instanceof t.Name && !$[this.lhs.str] && !this.sideEffects))
          return this.rhs = H(this.rhs, $, D), this;
      }
      get names() {
        const $ = this.lhs instanceof t.Name ? {} : { ...this.lhs.names };
        return F($, this.rhs);
      }
    }
    class l extends o {
      constructor($, D, I, J) {
        super($, I, J), this.op = D;
      }
      render({ _n: $ }) {
        return `${this.lhs} ${this.op}= ${this.rhs};` + $;
      }
    }
    class c extends n {
      constructor($) {
        super(), this.label = $, this.names = {};
      }
      render({ _n: $ }) {
        return `${this.label}:` + $;
      }
    }
    class f extends n {
      constructor($) {
        super(), this.label = $, this.names = {};
      }
      render({ _n: $ }) {
        return `break${this.label ? ` ${this.label}` : ""};` + $;
      }
    }
    class m extends n {
      constructor($) {
        super(), this.error = $;
      }
      render({ _n: $ }) {
        return `throw ${this.error};` + $;
      }
      get names() {
        return this.error.names;
      }
    }
    class d extends n {
      constructor($) {
        super(), this.code = $;
      }
      render({ _n: $ }) {
        return `${this.code};` + $;
      }
      optimizeNodes() {
        return `${this.code}` ? this : void 0;
      }
      optimizeNames($, D) {
        return this.code = H(this.code, $, D), this;
      }
      get names() {
        return this.code instanceof t._CodeOrName ? this.code.names : {};
      }
    }
    class g extends n {
      constructor($ = []) {
        super(), this.nodes = $;
      }
      render($) {
        return this.nodes.reduce((D, I) => D + I.render($), "");
      }
      optimizeNodes() {
        const { nodes: $ } = this;
        let D = $.length;
        for (; D--; ) {
          const I = $[D].optimizeNodes();
          Array.isArray(I) ? $.splice(D, 1, ...I) : I ? $[D] = I : $.splice(D, 1);
        }
        return $.length > 0 ? this : void 0;
      }
      optimizeNames($, D) {
        const { nodes: I } = this;
        let J = I.length;
        for (; J--; ) {
          const Y = I[J];
          Y.optimizeNames($, D) || (B($, Y.names), I.splice(J, 1));
        }
        return I.length > 0 ? this : void 0;
      }
      get names() {
        return this.nodes.reduce(($, D) => G($, D.names), {});
      }
    }
    class P extends g {
      render($) {
        return "{" + $._n + super.render($) + "}" + $._n;
      }
    }
    class _ extends g {
    }
    class h extends P {
    }
    h.kind = "else";
    class v extends P {
      constructor($, D) {
        super(D), this.condition = $;
      }
      render($) {
        let D = `if(${this.condition})` + super.render($);
        return this.else && (D += "else " + this.else.render($)), D;
      }
      optimizeNodes() {
        super.optimizeNodes();
        const $ = this.condition;
        if ($ === !0)
          return this.nodes;
        let D = this.else;
        if (D) {
          const I = D.optimizeNodes();
          D = this.else = Array.isArray(I) ? new h(I) : I;
        }
        if (D)
          return $ === !1 ? D instanceof v ? D : D.nodes : this.nodes.length ? this : new v(x($), D instanceof v ? [D] : D.nodes);
        if (!($ === !1 || !this.nodes.length))
          return this;
      }
      optimizeNames($, D) {
        var I;
        if (this.else = (I = this.else) === null || I === void 0 ? void 0 : I.optimizeNames($, D), !!(super.optimizeNames($, D) || this.else))
          return this.condition = H(this.condition, $, D), this;
      }
      get names() {
        const $ = super.names;
        return F($, this.condition), this.else && G($, this.else.names), $;
      }
    }
    v.kind = "if";
    class u extends P {
    }
    u.kind = "for";
    class p extends u {
      constructor($) {
        super(), this.iteration = $;
      }
      render($) {
        return `for(${this.iteration})` + super.render($);
      }
      optimizeNames($, D) {
        if (super.optimizeNames($, D))
          return this.iteration = H(this.iteration, $, D), this;
      }
      get names() {
        return G(super.names, this.iteration.names);
      }
    }
    class y extends u {
      constructor($, D, I, J) {
        super(), this.varKind = $, this.name = D, this.from = I, this.to = J;
      }
      render($) {
        const D = $.es5 ? r.varKinds.var : this.varKind, { name: I, from: J, to: Y } = this;
        return `for(${D} ${I}=${J}; ${I}<${Y}; ${I}++)` + super.render($);
      }
      get names() {
        const $ = F(super.names, this.from);
        return F($, this.to);
      }
    }
    class w extends u {
      constructor($, D, I, J) {
        super(), this.loop = $, this.varKind = D, this.name = I, this.iterable = J;
      }
      render($) {
        return `for(${this.varKind} ${this.name} ${this.loop} ${this.iterable})` + super.render($);
      }
      optimizeNames($, D) {
        if (super.optimizeNames($, D))
          return this.iterable = H(this.iterable, $, D), this;
      }
      get names() {
        return G(super.names, this.iterable.names);
      }
    }
    class b extends P {
      constructor($, D, I) {
        super(), this.name = $, this.args = D, this.async = I;
      }
      render($) {
        return `${this.async ? "async " : ""}function ${this.name}(${this.args})` + super.render($);
      }
    }
    b.kind = "func";
    class E extends g {
      render($) {
        return "return " + super.render($);
      }
    }
    E.kind = "return";
    class S extends P {
      render($) {
        let D = "try" + super.render($);
        return this.catch && (D += this.catch.render($)), this.finally && (D += this.finally.render($)), D;
      }
      optimizeNodes() {
        var $, D;
        return super.optimizeNodes(), ($ = this.catch) === null || $ === void 0 || $.optimizeNodes(), (D = this.finally) === null || D === void 0 || D.optimizeNodes(), this;
      }
      optimizeNames($, D) {
        var I, J;
        return super.optimizeNames($, D), (I = this.catch) === null || I === void 0 || I.optimizeNames($, D), (J = this.finally) === null || J === void 0 || J.optimizeNames($, D), this;
      }
      get names() {
        const $ = super.names;
        return this.catch && G($, this.catch.names), this.finally && G($, this.finally.names), $;
      }
    }
    class O extends P {
      constructor($) {
        super(), this.error = $;
      }
      render($) {
        return `catch(${this.error})` + super.render($);
      }
    }
    O.kind = "catch";
    class C extends P {
      render($) {
        return "finally" + super.render($);
      }
    }
    C.kind = "finally";
    class U {
      constructor($, D = {}) {
        this._values = {}, this._blockStarts = [], this._constants = {}, this.opts = { ...D, _n: D.lines ? `
` : "" }, this._extScope = $, this._scope = new r.Scope({ parent: $ }), this._nodes = [new _()];
      }
      toString() {
        return this._root.render(this.opts);
      }
      // returns unique name in the internal scope
      name($) {
        return this._scope.name($);
      }
      // reserves unique name in the external scope
      scopeName($) {
        return this._extScope.name($);
      }
      // reserves unique name in the external scope and assigns value to it
      scopeValue($, D) {
        const I = this._extScope.value($, D);
        return (this._values[I.prefix] || (this._values[I.prefix] = /* @__PURE__ */ new Set())).add(I), I;
      }
      getScopeValue($, D) {
        return this._extScope.getValue($, D);
      }
      // return code that assigns values in the external scope to the names that are used internally
      // (same names that were returned by gen.scopeName or gen.scopeValue)
      scopeRefs($) {
        return this._extScope.scopeRefs($, this._values);
      }
      scopeCode() {
        return this._extScope.scopeCode(this._values);
      }
      _def($, D, I, J) {
        const Y = this._scope.toName(D);
        return I !== void 0 && J && (this._constants[Y.str] = I), this._leafNode(new a($, Y, I)), Y;
      }
      // `const` declaration (`var` in es5 mode)
      const($, D, I) {
        return this._def(r.varKinds.const, $, D, I);
      }
      // `let` declaration with optional assignment (`var` in es5 mode)
      let($, D, I) {
        return this._def(r.varKinds.let, $, D, I);
      }
      // `var` declaration with optional assignment
      var($, D, I) {
        return this._def(r.varKinds.var, $, D, I);
      }
      // assignment code
      assign($, D, I) {
        return this._leafNode(new o($, D, I));
      }
      // `+=` code
      add($, D) {
        return this._leafNode(new l($, e.operators.ADD, D));
      }
      // appends passed SafeExpr to code or executes Block
      code($) {
        return typeof $ == "function" ? $() : $ !== t.nil && this._leafNode(new d($)), this;
      }
      // returns code for object literal for the passed argument list of key-value pairs
      object(...$) {
        const D = ["{"];
        for (const [I, J] of $)
          D.length > 1 && D.push(","), D.push(I), (I !== J || this.opts.es5) && (D.push(":"), (0, t.addCodeArg)(D, J));
        return D.push("}"), new t._Code(D);
      }
      // `if` clause (or statement if `thenBody` and, optionally, `elseBody` are passed)
      if($, D, I) {
        if (this._blockNode(new v($)), D && I)
          this.code(D).else().code(I).endIf();
        else if (D)
          this.code(D).endIf();
        else if (I)
          throw new Error('CodeGen: "else" body without "then" body');
        return this;
      }
      // `else if` clause - invalid without `if` or after `else` clauses
      elseIf($) {
        return this._elseNode(new v($));
      }
      // `else` clause - only valid after `if` or `else if` clauses
      else() {
        return this._elseNode(new h());
      }
      // end `if` statement (needed if gen.if was used only with condition)
      endIf() {
        return this._endBlockNode(v, h);
      }
      _for($, D) {
        return this._blockNode($), D && this.code(D).endFor(), this;
      }
      // a generic `for` clause (or statement if `forBody` is passed)
      for($, D) {
        return this._for(new p($), D);
      }
      // `for` statement for a range of values
      forRange($, D, I, J, Y = this.opts.es5 ? r.varKinds.var : r.varKinds.let) {
        const ce = this._scope.toName($);
        return this._for(new y(Y, ce, D, I), () => J(ce));
      }
      // `for-of` statement (in es5 mode replace with a normal for loop)
      forOf($, D, I, J = r.varKinds.const) {
        const Y = this._scope.toName($);
        if (this.opts.es5) {
          const ce = D instanceof t.Name ? D : this.var("_arr", D);
          return this.forRange("_i", 0, (0, t._)`${ce}.length`, (ue) => {
            this.var(Y, (0, t._)`${ce}[${ue}]`), I(Y);
          });
        }
        return this._for(new w("of", J, Y, D), () => I(Y));
      }
      // `for-in` statement.
      // With option `ownProperties` replaced with a `for-of` loop for object keys
      forIn($, D, I, J = this.opts.es5 ? r.varKinds.var : r.varKinds.const) {
        if (this.opts.ownProperties)
          return this.forOf($, (0, t._)`Object.keys(${D})`, I);
        const Y = this._scope.toName($);
        return this._for(new w("in", J, Y, D), () => I(Y));
      }
      // end `for` loop
      endFor() {
        return this._endBlockNode(u);
      }
      // `label` statement
      label($) {
        return this._leafNode(new c($));
      }
      // `break` statement
      break($) {
        return this._leafNode(new f($));
      }
      // `return` statement
      return($) {
        const D = new E();
        if (this._blockNode(D), this.code($), D.nodes.length !== 1)
          throw new Error('CodeGen: "return" should have one node');
        return this._endBlockNode(E);
      }
      // `try` statement
      try($, D, I) {
        if (!D && !I)
          throw new Error('CodeGen: "try" without "catch" and "finally"');
        const J = new S();
        if (this._blockNode(J), this.code($), D) {
          const Y = this.name("e");
          this._currNode = J.catch = new O(Y), D(Y);
        }
        return I && (this._currNode = J.finally = new C(), this.code(I)), this._endBlockNode(O, C);
      }
      // `throw` statement
      throw($) {
        return this._leafNode(new m($));
      }
      // start self-balancing block
      block($, D) {
        return this._blockStarts.push(this._nodes.length), $ && this.code($).endBlock(D), this;
      }
      // end the current self-balancing block
      endBlock($) {
        const D = this._blockStarts.pop();
        if (D === void 0)
          throw new Error("CodeGen: not in self-balancing block");
        const I = this._nodes.length - D;
        if (I < 0 || $ !== void 0 && I !== $)
          throw new Error(`CodeGen: wrong number of nodes: ${I} vs ${$} expected`);
        return this._nodes.length = D, this;
      }
      // `function` heading (or definition if funcBody is passed)
      func($, D = t.nil, I, J) {
        return this._blockNode(new b($, D, I)), J && this.code(J).endFunc(), this;
      }
      // end function definition
      endFunc() {
        return this._endBlockNode(b);
      }
      optimize($ = 1) {
        for (; $-- > 0; )
          this._root.optimizeNodes(), this._root.optimizeNames(this._root.names, this._constants);
      }
      _leafNode($) {
        return this._currNode.nodes.push($), this;
      }
      _blockNode($) {
        this._currNode.nodes.push($), this._nodes.push($);
      }
      _endBlockNode($, D) {
        const I = this._currNode;
        if (I instanceof $ || D && I instanceof D)
          return this._nodes.pop(), this;
        throw new Error(`CodeGen: not in block "${D ? `${$.kind}/${D.kind}` : $.kind}"`);
      }
      _elseNode($) {
        const D = this._currNode;
        if (!(D instanceof v))
          throw new Error('CodeGen: "else" without "if"');
        return this._currNode = D.else = $, this;
      }
      get _root() {
        return this._nodes[0];
      }
      get _currNode() {
        const $ = this._nodes;
        return $[$.length - 1];
      }
      set _currNode($) {
        const D = this._nodes;
        D[D.length - 1] = $;
      }
    }
    e.CodeGen = U;
    function G(M, $) {
      for (const D in $)
        M[D] = (M[D] || 0) + ($[D] || 0);
      return M;
    }
    function F(M, $) {
      return $ instanceof t._CodeOrName ? G(M, $.names) : M;
    }
    function H(M, $, D) {
      if (M instanceof t.Name)
        return I(M);
      if (!J(M))
        return M;
      return new t._Code(M._items.reduce((Y, ce) => (ce instanceof t.Name && (ce = I(ce)), ce instanceof t._Code ? Y.push(...ce._items) : Y.push(ce), Y), []));
      function I(Y) {
        const ce = D[Y.str];
        return ce === void 0 || $[Y.str] !== 1 ? Y : (delete $[Y.str], ce);
      }
      function J(Y) {
        return Y instanceof t._Code && Y._items.some((ce) => ce instanceof t.Name && $[ce.str] === 1 && D[ce.str] !== void 0);
      }
    }
    function B(M, $) {
      for (const D in $)
        M[D] = (M[D] || 0) - ($[D] || 0);
    }
    function x(M) {
      return typeof M == "boolean" || typeof M == "number" || M === null ? !M : (0, t._)`!${A(M)}`;
    }
    e.not = x;
    const Z = j(e.operators.AND);
    function X(...M) {
      return M.reduce(Z);
    }
    e.and = X;
    const oe = j(e.operators.OR);
    function q(...M) {
      return M.reduce(oe);
    }
    e.or = q;
    function j(M) {
      return ($, D) => $ === t.nil ? D : D === t.nil ? $ : (0, t._)`${A($)} ${M} ${A(D)}`;
    }
    function A(M) {
      return M instanceof t.Name ? M : (0, t._)`(${M})`;
    }
  }(Ui)), Ui;
}
var ne = {}, $s;
function fe() {
  if ($s) return ne;
  $s = 1, Object.defineProperty(ne, "__esModule", { value: !0 }), ne.checkStrictMode = ne.getErrorPath = ne.Type = ne.useFunc = ne.setEvaluated = ne.evaluatedPropsToName = ne.mergeEvaluated = ne.eachItem = ne.unescapeJsonPointer = ne.escapeJsonPointer = ne.escapeFragment = ne.unescapeFragment = ne.schemaRefOrVal = ne.schemaHasRulesButRef = ne.schemaHasRules = ne.checkUnknownRules = ne.alwaysValidSchema = ne.toHash = void 0;
  const e = se(), t = vi();
  function r(w) {
    const b = {};
    for (const E of w)
      b[E] = !0;
    return b;
  }
  ne.toHash = r;
  function i(w, b) {
    return typeof b == "boolean" ? b : Object.keys(b).length === 0 ? !0 : (s(w, b), !n(b, w.self.RULES.all));
  }
  ne.alwaysValidSchema = i;
  function s(w, b = w.schema) {
    const { opts: E, self: S } = w;
    if (!E.strictSchema || typeof b == "boolean")
      return;
    const O = S.RULES.keywords;
    for (const C in b)
      O[C] || y(w, `unknown keyword: "${C}"`);
  }
  ne.checkUnknownRules = s;
  function n(w, b) {
    if (typeof w == "boolean")
      return !w;
    for (const E in w)
      if (b[E])
        return !0;
    return !1;
  }
  ne.schemaHasRules = n;
  function a(w, b) {
    if (typeof w == "boolean")
      return !w;
    for (const E in w)
      if (E !== "$ref" && b.all[E])
        return !0;
    return !1;
  }
  ne.schemaHasRulesButRef = a;
  function o({ topSchemaRef: w, schemaPath: b }, E, S, O) {
    if (!O) {
      if (typeof E == "number" || typeof E == "boolean")
        return E;
      if (typeof E == "string")
        return (0, e._)`${E}`;
    }
    return (0, e._)`${w}${b}${(0, e.getProperty)(S)}`;
  }
  ne.schemaRefOrVal = o;
  function l(w) {
    return m(decodeURIComponent(w));
  }
  ne.unescapeFragment = l;
  function c(w) {
    return encodeURIComponent(f(w));
  }
  ne.escapeFragment = c;
  function f(w) {
    return typeof w == "number" ? `${w}` : w.replace(/~/g, "~0").replace(/\//g, "~1");
  }
  ne.escapeJsonPointer = f;
  function m(w) {
    return w.replace(/~1/g, "/").replace(/~0/g, "~");
  }
  ne.unescapeJsonPointer = m;
  function d(w, b) {
    if (Array.isArray(w))
      for (const E of w)
        b(E);
    else
      b(w);
  }
  ne.eachItem = d;
  function g({ mergeNames: w, mergeToName: b, mergeValues: E, resultToName: S }) {
    return (O, C, U, G) => {
      const F = U === void 0 ? C : U instanceof e.Name ? (C instanceof e.Name ? w(O, C, U) : b(O, C, U), U) : C instanceof e.Name ? (b(O, U, C), C) : E(C, U);
      return G === e.Name && !(F instanceof e.Name) ? S(O, F) : F;
    };
  }
  ne.mergeEvaluated = {
    props: g({
      mergeNames: (w, b, E) => w.if((0, e._)`${E} !== true && ${b} !== undefined`, () => {
        w.if((0, e._)`${b} === true`, () => w.assign(E, !0), () => w.assign(E, (0, e._)`${E} || {}`).code((0, e._)`Object.assign(${E}, ${b})`));
      }),
      mergeToName: (w, b, E) => w.if((0, e._)`${E} !== true`, () => {
        b === !0 ? w.assign(E, !0) : (w.assign(E, (0, e._)`${E} || {}`), _(w, E, b));
      }),
      mergeValues: (w, b) => w === !0 ? !0 : { ...w, ...b },
      resultToName: P
    }),
    items: g({
      mergeNames: (w, b, E) => w.if((0, e._)`${E} !== true && ${b} !== undefined`, () => w.assign(E, (0, e._)`${b} === true ? true : ${E} > ${b} ? ${E} : ${b}`)),
      mergeToName: (w, b, E) => w.if((0, e._)`${E} !== true`, () => w.assign(E, b === !0 ? !0 : (0, e._)`${E} > ${b} ? ${E} : ${b}`)),
      mergeValues: (w, b) => w === !0 ? !0 : Math.max(w, b),
      resultToName: (w, b) => w.var("items", b)
    })
  };
  function P(w, b) {
    if (b === !0)
      return w.var("props", !0);
    const E = w.var("props", (0, e._)`{}`);
    return b !== void 0 && _(w, E, b), E;
  }
  ne.evaluatedPropsToName = P;
  function _(w, b, E) {
    Object.keys(E).forEach((S) => w.assign((0, e._)`${b}${(0, e.getProperty)(S)}`, !0));
  }
  ne.setEvaluated = _;
  const h = {};
  function v(w, b) {
    return w.scopeValue("func", {
      ref: b,
      code: h[b.code] || (h[b.code] = new t._Code(b.code))
    });
  }
  ne.useFunc = v;
  var u;
  (function(w) {
    w[w.Num = 0] = "Num", w[w.Str = 1] = "Str";
  })(u || (ne.Type = u = {}));
  function p(w, b, E) {
    if (w instanceof e.Name) {
      const S = b === u.Num;
      return E ? S ? (0, e._)`"[" + ${w} + "]"` : (0, e._)`"['" + ${w} + "']"` : S ? (0, e._)`"/" + ${w}` : (0, e._)`"/" + ${w}.replace(/~/g, "~0").replace(/\\//g, "~1")`;
    }
    return E ? (0, e.getProperty)(w).toString() : "/" + f(w);
  }
  ne.getErrorPath = p;
  function y(w, b, E = w.opts.strictSchema) {
    if (E) {
      if (b = `strict mode: ${b}`, E === !0)
        throw new Error(b);
      w.self.logger.warn(b);
    }
  }
  return ne.checkStrictMode = y, ne;
}
var wn = {}, Es;
function Kt() {
  if (Es) return wn;
  Es = 1, Object.defineProperty(wn, "__esModule", { value: !0 });
  const e = se(), t = {
    // validation function arguments
    data: new e.Name("data"),
    // data passed to validation function
    // args passed from referencing schema
    valCxt: new e.Name("valCxt"),
    // validation/data context - should not be used directly, it is destructured to the names below
    instancePath: new e.Name("instancePath"),
    parentData: new e.Name("parentData"),
    parentDataProperty: new e.Name("parentDataProperty"),
    rootData: new e.Name("rootData"),
    // root data - same as the data passed to the first/top validation function
    dynamicAnchors: new e.Name("dynamicAnchors"),
    // used to support recursiveRef and dynamicRef
    // function scoped variables
    vErrors: new e.Name("vErrors"),
    // null or array of validation errors
    errors: new e.Name("errors"),
    // counter of validation errors
    this: new e.Name("this"),
    // "globals"
    self: new e.Name("self"),
    scope: new e.Name("scope"),
    // JTD serialize/parse name for JSON string and position
    json: new e.Name("json"),
    jsonPos: new e.Name("jsonPos"),
    jsonLen: new e.Name("jsonLen"),
    jsonPart: new e.Name("jsonPart")
  };
  return wn.default = t, wn;
}
var Ss;
function Si() {
  return Ss || (Ss = 1, function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.extendErrors = e.resetErrorsCount = e.reportExtraError = e.reportError = e.keyword$DataError = e.keywordError = void 0;
    const t = se(), r = fe(), i = Kt();
    e.keywordError = {
      message: ({ keyword: h }) => (0, t.str)`must pass "${h}" keyword validation`
    }, e.keyword$DataError = {
      message: ({ keyword: h, schemaType: v }) => v ? (0, t.str)`"${h}" keyword must be ${v} ($data)` : (0, t.str)`"${h}" keyword is invalid ($data)`
    };
    function s(h, v = e.keywordError, u, p) {
      const { it: y } = h, { gen: w, compositeRule: b, allErrors: E } = y, S = m(h, v, u);
      p ?? (b || E) ? l(w, S) : c(y, (0, t._)`[${S}]`);
    }
    e.reportError = s;
    function n(h, v = e.keywordError, u) {
      const { it: p } = h, { gen: y, compositeRule: w, allErrors: b } = p, E = m(h, v, u);
      l(y, E), w || b || c(p, i.default.vErrors);
    }
    e.reportExtraError = n;
    function a(h, v) {
      h.assign(i.default.errors, v), h.if((0, t._)`${i.default.vErrors} !== null`, () => h.if(v, () => h.assign((0, t._)`${i.default.vErrors}.length`, v), () => h.assign(i.default.vErrors, null)));
    }
    e.resetErrorsCount = a;
    function o({ gen: h, keyword: v, schemaValue: u, data: p, errsCount: y, it: w }) {
      if (y === void 0)
        throw new Error("ajv implementation error");
      const b = h.name("err");
      h.forRange("i", y, i.default.errors, (E) => {
        h.const(b, (0, t._)`${i.default.vErrors}[${E}]`), h.if((0, t._)`${b}.instancePath === undefined`, () => h.assign((0, t._)`${b}.instancePath`, (0, t.strConcat)(i.default.instancePath, w.errorPath))), h.assign((0, t._)`${b}.schemaPath`, (0, t.str)`${w.errSchemaPath}/${v}`), w.opts.verbose && (h.assign((0, t._)`${b}.schema`, u), h.assign((0, t._)`${b}.data`, p));
      });
    }
    e.extendErrors = o;
    function l(h, v) {
      const u = h.const("err", v);
      h.if((0, t._)`${i.default.vErrors} === null`, () => h.assign(i.default.vErrors, (0, t._)`[${u}]`), (0, t._)`${i.default.vErrors}.push(${u})`), h.code((0, t._)`${i.default.errors}++`);
    }
    function c(h, v) {
      const { gen: u, validateName: p, schemaEnv: y } = h;
      y.$async ? u.throw((0, t._)`new ${h.ValidationError}(${v})`) : (u.assign((0, t._)`${p}.errors`, v), u.return(!1));
    }
    const f = {
      keyword: new t.Name("keyword"),
      schemaPath: new t.Name("schemaPath"),
      // also used in JTD errors
      params: new t.Name("params"),
      propertyName: new t.Name("propertyName"),
      message: new t.Name("message"),
      schema: new t.Name("schema"),
      parentSchema: new t.Name("parentSchema")
    };
    function m(h, v, u) {
      const { createErrors: p } = h.it;
      return p === !1 ? (0, t._)`{}` : d(h, v, u);
    }
    function d(h, v, u = {}) {
      const { gen: p, it: y } = h, w = [
        g(y, u),
        P(h, u)
      ];
      return _(h, v, w), p.object(...w);
    }
    function g({ errorPath: h }, { instancePath: v }) {
      const u = v ? (0, t.str)`${h}${(0, r.getErrorPath)(v, r.Type.Str)}` : h;
      return [i.default.instancePath, (0, t.strConcat)(i.default.instancePath, u)];
    }
    function P({ keyword: h, it: { errSchemaPath: v } }, { schemaPath: u, parentSchema: p }) {
      let y = p ? v : (0, t.str)`${v}/${h}`;
      return u && (y = (0, t.str)`${y}${(0, r.getErrorPath)(u, r.Type.Str)}`), [f.schemaPath, y];
    }
    function _(h, { params: v, message: u }, p) {
      const { keyword: y, data: w, schemaValue: b, it: E } = h, { opts: S, propertyName: O, topSchemaRef: C, schemaPath: U } = E;
      p.push([f.keyword, y], [f.params, typeof v == "function" ? v(h) : v || (0, t._)`{}`]), S.messages && p.push([f.message, typeof u == "function" ? u(h) : u]), S.verbose && p.push([f.schema, b], [f.parentSchema, (0, t._)`${C}${U}`], [i.default.data, w]), O && p.push([f.propertyName, O]);
    }
  }(qi)), qi;
}
var Ds;
function Xc() {
  if (Ds) return Jt;
  Ds = 1, Object.defineProperty(Jt, "__esModule", { value: !0 }), Jt.boolOrEmptySchema = Jt.topBoolOrEmptySchema = void 0;
  const e = Si(), t = se(), r = Kt(), i = {
    message: "boolean schema is false"
  };
  function s(o) {
    const { gen: l, schema: c, validateName: f } = o;
    c === !1 ? a(o, !1) : typeof c == "object" && c.$async === !0 ? l.return(r.default.data) : (l.assign((0, t._)`${f}.errors`, null), l.return(!0));
  }
  Jt.topBoolOrEmptySchema = s;
  function n(o, l) {
    const { gen: c, schema: f } = o;
    f === !1 ? (c.var(l, !1), a(o)) : c.var(l, !0);
  }
  Jt.boolOrEmptySchema = n;
  function a(o, l) {
    const { gen: c, data: f } = o, m = {
      gen: c,
      keyword: "false schema",
      data: f,
      schema: !1,
      schemaCode: !1,
      schemaValue: !1,
      params: {},
      it: o
    };
    (0, e.reportError)(m, i, void 0, l);
  }
  return Jt;
}
var we = {}, Bt = {}, Os;
function Bu() {
  if (Os) return Bt;
  Os = 1, Object.defineProperty(Bt, "__esModule", { value: !0 }), Bt.getRules = Bt.isJSONType = void 0;
  const e = ["string", "number", "integer", "boolean", "null", "object", "array"], t = new Set(e);
  function r(s) {
    return typeof s == "string" && t.has(s);
  }
  Bt.isJSONType = r;
  function i() {
    const s = {
      number: { type: "number", rules: [] },
      string: { type: "string", rules: [] },
      array: { type: "array", rules: [] },
      object: { type: "object", rules: [] }
    };
    return {
      types: { ...s, integer: !0, boolean: !0, null: !0 },
      rules: [{ rules: [] }, s.number, s.string, s.array, s.object],
      post: { rules: [] },
      all: {},
      keywords: {}
    };
  }
  return Bt.getRules = i, Bt;
}
var _t = {}, Ts;
function Yu() {
  if (Ts) return _t;
  Ts = 1, Object.defineProperty(_t, "__esModule", { value: !0 }), _t.shouldUseRule = _t.shouldUseGroup = _t.schemaHasRulesForType = void 0;
  function e({ schema: i, self: s }, n) {
    const a = s.RULES.types[n];
    return a && a !== !0 && t(i, a);
  }
  _t.schemaHasRulesForType = e;
  function t(i, s) {
    return s.rules.some((n) => r(i, n));
  }
  _t.shouldUseGroup = t;
  function r(i, s) {
    var n;
    return i[s.keyword] !== void 0 || ((n = s.definition.implements) === null || n === void 0 ? void 0 : n.some((a) => i[a] !== void 0));
  }
  return _t.shouldUseRule = r, _t;
}
var js;
function gi() {
  if (js) return we;
  js = 1, Object.defineProperty(we, "__esModule", { value: !0 }), we.reportTypeError = we.checkDataTypes = we.checkDataType = we.coerceAndCheckDataType = we.getJSONTypes = we.getSchemaTypes = we.DataType = void 0;
  const e = Bu(), t = Yu(), r = Si(), i = se(), s = fe();
  var n;
  (function(u) {
    u[u.Correct = 0] = "Correct", u[u.Wrong = 1] = "Wrong";
  })(n || (we.DataType = n = {}));
  function a(u) {
    const p = o(u.type);
    if (p.includes("null")) {
      if (u.nullable === !1)
        throw new Error("type: null contradicts nullable: false");
    } else {
      if (!p.length && u.nullable !== void 0)
        throw new Error('"nullable" cannot be used without "type"');
      u.nullable === !0 && p.push("null");
    }
    return p;
  }
  we.getSchemaTypes = a;
  function o(u) {
    const p = Array.isArray(u) ? u : u ? [u] : [];
    if (p.every(e.isJSONType))
      return p;
    throw new Error("type must be JSONType or JSONType[]: " + p.join(","));
  }
  we.getJSONTypes = o;
  function l(u, p) {
    const { gen: y, data: w, opts: b } = u, E = f(p, b.coerceTypes), S = p.length > 0 && !(E.length === 0 && p.length === 1 && (0, t.schemaHasRulesForType)(u, p[0]));
    if (S) {
      const O = P(p, w, b.strictNumbers, n.Wrong);
      y.if(O, () => {
        E.length ? m(u, p, E) : h(u);
      });
    }
    return S;
  }
  we.coerceAndCheckDataType = l;
  const c = /* @__PURE__ */ new Set(["string", "number", "integer", "boolean", "null"]);
  function f(u, p) {
    return p ? u.filter((y) => c.has(y) || p === "array" && y === "array") : [];
  }
  function m(u, p, y) {
    const { gen: w, data: b, opts: E } = u, S = w.let("dataType", (0, i._)`typeof ${b}`), O = w.let("coerced", (0, i._)`undefined`);
    E.coerceTypes === "array" && w.if((0, i._)`${S} == 'object' && Array.isArray(${b}) && ${b}.length == 1`, () => w.assign(b, (0, i._)`${b}[0]`).assign(S, (0, i._)`typeof ${b}`).if(P(p, b, E.strictNumbers), () => w.assign(O, b))), w.if((0, i._)`${O} !== undefined`);
    for (const U of y)
      (c.has(U) || U === "array" && E.coerceTypes === "array") && C(U);
    w.else(), h(u), w.endIf(), w.if((0, i._)`${O} !== undefined`, () => {
      w.assign(b, O), d(u, O);
    });
    function C(U) {
      switch (U) {
        case "string":
          w.elseIf((0, i._)`${S} == "number" || ${S} == "boolean"`).assign(O, (0, i._)`"" + ${b}`).elseIf((0, i._)`${b} === null`).assign(O, (0, i._)`""`);
          return;
        case "number":
          w.elseIf((0, i._)`${S} == "boolean" || ${b} === null
              || (${S} == "string" && ${b} && ${b} == +${b})`).assign(O, (0, i._)`+${b}`);
          return;
        case "integer":
          w.elseIf((0, i._)`${S} === "boolean" || ${b} === null
              || (${S} === "string" && ${b} && ${b} == +${b} && !(${b} % 1))`).assign(O, (0, i._)`+${b}`);
          return;
        case "boolean":
          w.elseIf((0, i._)`${b} === "false" || ${b} === 0 || ${b} === null`).assign(O, !1).elseIf((0, i._)`${b} === "true" || ${b} === 1`).assign(O, !0);
          return;
        case "null":
          w.elseIf((0, i._)`${b} === "" || ${b} === 0 || ${b} === false`), w.assign(O, null);
          return;
        case "array":
          w.elseIf((0, i._)`${S} === "string" || ${S} === "number"
              || ${S} === "boolean" || ${b} === null`).assign(O, (0, i._)`[${b}]`);
      }
    }
  }
  function d({ gen: u, parentData: p, parentDataProperty: y }, w) {
    u.if((0, i._)`${p} !== undefined`, () => u.assign((0, i._)`${p}[${y}]`, w));
  }
  function g(u, p, y, w = n.Correct) {
    const b = w === n.Correct ? i.operators.EQ : i.operators.NEQ;
    let E;
    switch (u) {
      case "null":
        return (0, i._)`${p} ${b} null`;
      case "array":
        E = (0, i._)`Array.isArray(${p})`;
        break;
      case "object":
        E = (0, i._)`${p} && typeof ${p} == "object" && !Array.isArray(${p})`;
        break;
      case "integer":
        E = S((0, i._)`!(${p} % 1) && !isNaN(${p})`);
        break;
      case "number":
        E = S();
        break;
      default:
        return (0, i._)`typeof ${p} ${b} ${u}`;
    }
    return w === n.Correct ? E : (0, i.not)(E);
    function S(O = i.nil) {
      return (0, i.and)((0, i._)`typeof ${p} == "number"`, O, y ? (0, i._)`isFinite(${p})` : i.nil);
    }
  }
  we.checkDataType = g;
  function P(u, p, y, w) {
    if (u.length === 1)
      return g(u[0], p, y, w);
    let b;
    const E = (0, s.toHash)(u);
    if (E.array && E.object) {
      const S = (0, i._)`typeof ${p} != "object"`;
      b = E.null ? S : (0, i._)`!${p} || ${S}`, delete E.null, delete E.array, delete E.object;
    } else
      b = i.nil;
    E.number && delete E.integer;
    for (const S in E)
      b = (0, i.and)(b, g(S, p, y, w));
    return b;
  }
  we.checkDataTypes = P;
  const _ = {
    message: ({ schema: u }) => `must be ${u}`,
    params: ({ schema: u, schemaValue: p }) => typeof u == "string" ? (0, i._)`{type: ${u}}` : (0, i._)`{type: ${p}}`
  };
  function h(u) {
    const p = v(u);
    (0, r.reportError)(p, _);
  }
  we.reportTypeError = h;
  function v(u) {
    const { gen: p, data: y, schema: w } = u, b = (0, s.schemaRefOrVal)(u, w, "type");
    return {
      gen: p,
      keyword: "type",
      data: y,
      schema: w.type,
      schemaCode: b,
      schemaValue: b,
      parentSchema: w,
      params: {},
      it: u
    };
  }
  return we;
}
var Fr = {}, Rs;
function Qc() {
  if (Rs) return Fr;
  Rs = 1, Object.defineProperty(Fr, "__esModule", { value: !0 }), Fr.assignDefaults = void 0;
  const e = se(), t = fe();
  function r(s, n) {
    const { properties: a, items: o } = s.schema;
    if (n === "object" && a)
      for (const l in a)
        i(s, l, a[l].default);
    else n === "array" && Array.isArray(o) && o.forEach((l, c) => i(s, c, l.default));
  }
  Fr.assignDefaults = r;
  function i(s, n, a) {
    const { gen: o, compositeRule: l, data: c, opts: f } = s;
    if (a === void 0)
      return;
    const m = (0, e._)`${c}${(0, e.getProperty)(n)}`;
    if (l) {
      (0, t.checkStrictMode)(s, `default is ignored for: ${m}`);
      return;
    }
    let d = (0, e._)`${m} === undefined`;
    f.useDefaults === "empty" && (d = (0, e._)`${d} || ${m} === null || ${m} === ""`), o.if(d, (0, e._)`${m} = ${(0, e.stringify)(a)}`);
  }
  return Fr;
}
var Xe = {}, pe = {}, Ms;
function tt() {
  if (Ms) return pe;
  Ms = 1, Object.defineProperty(pe, "__esModule", { value: !0 }), pe.validateUnion = pe.validateArray = pe.usePattern = pe.callValidateCode = pe.schemaProperties = pe.allSchemaProperties = pe.noPropertyInData = pe.propertyInData = pe.isOwnProperty = pe.hasPropFunc = pe.reportMissingProp = pe.checkMissingProp = pe.checkReportMissingProp = void 0;
  const e = se(), t = fe(), r = Kt(), i = fe();
  function s(u, p) {
    const { gen: y, data: w, it: b } = u;
    y.if(f(y, w, p, b.opts.ownProperties), () => {
      u.setParams({ missingProperty: (0, e._)`${p}` }, !0), u.error();
    });
  }
  pe.checkReportMissingProp = s;
  function n({ gen: u, data: p, it: { opts: y } }, w, b) {
    return (0, e.or)(...w.map((E) => (0, e.and)(f(u, p, E, y.ownProperties), (0, e._)`${b} = ${E}`)));
  }
  pe.checkMissingProp = n;
  function a(u, p) {
    u.setParams({ missingProperty: p }, !0), u.error();
  }
  pe.reportMissingProp = a;
  function o(u) {
    return u.scopeValue("func", {
      // eslint-disable-next-line @typescript-eslint/unbound-method
      ref: Object.prototype.hasOwnProperty,
      code: (0, e._)`Object.prototype.hasOwnProperty`
    });
  }
  pe.hasPropFunc = o;
  function l(u, p, y) {
    return (0, e._)`${o(u)}.call(${p}, ${y})`;
  }
  pe.isOwnProperty = l;
  function c(u, p, y, w) {
    const b = (0, e._)`${p}${(0, e.getProperty)(y)} !== undefined`;
    return w ? (0, e._)`${b} && ${l(u, p, y)}` : b;
  }
  pe.propertyInData = c;
  function f(u, p, y, w) {
    const b = (0, e._)`${p}${(0, e.getProperty)(y)} === undefined`;
    return w ? (0, e.or)(b, (0, e.not)(l(u, p, y))) : b;
  }
  pe.noPropertyInData = f;
  function m(u) {
    return u ? Object.keys(u).filter((p) => p !== "__proto__") : [];
  }
  pe.allSchemaProperties = m;
  function d(u, p) {
    return m(p).filter((y) => !(0, t.alwaysValidSchema)(u, p[y]));
  }
  pe.schemaProperties = d;
  function g({ schemaCode: u, data: p, it: { gen: y, topSchemaRef: w, schemaPath: b, errorPath: E }, it: S }, O, C, U) {
    const G = U ? (0, e._)`${u}, ${p}, ${w}${b}` : p, F = [
      [r.default.instancePath, (0, e.strConcat)(r.default.instancePath, E)],
      [r.default.parentData, S.parentData],
      [r.default.parentDataProperty, S.parentDataProperty],
      [r.default.rootData, r.default.rootData]
    ];
    S.opts.dynamicRef && F.push([r.default.dynamicAnchors, r.default.dynamicAnchors]);
    const H = (0, e._)`${G}, ${y.object(...F)}`;
    return C !== e.nil ? (0, e._)`${O}.call(${C}, ${H})` : (0, e._)`${O}(${H})`;
  }
  pe.callValidateCode = g;
  const P = (0, e._)`new RegExp`;
  function _({ gen: u, it: { opts: p } }, y) {
    const w = p.unicodeRegExp ? "u" : "", { regExp: b } = p.code, E = b(y, w);
    return u.scopeValue("pattern", {
      key: E.toString(),
      ref: E,
      code: (0, e._)`${b.code === "new RegExp" ? P : (0, i.useFunc)(u, b)}(${y}, ${w})`
    });
  }
  pe.usePattern = _;
  function h(u) {
    const { gen: p, data: y, keyword: w, it: b } = u, E = p.name("valid");
    if (b.allErrors) {
      const O = p.let("valid", !0);
      return S(() => p.assign(O, !1)), O;
    }
    return p.var(E, !0), S(() => p.break()), E;
    function S(O) {
      const C = p.const("len", (0, e._)`${y}.length`);
      p.forRange("i", 0, C, (U) => {
        u.subschema({
          keyword: w,
          dataProp: U,
          dataPropType: t.Type.Num
        }, E), p.if((0, e.not)(E), O);
      });
    }
  }
  pe.validateArray = h;
  function v(u) {
    const { gen: p, schema: y, keyword: w, it: b } = u;
    if (!Array.isArray(y))
      throw new Error("ajv implementation error");
    if (y.some((C) => (0, t.alwaysValidSchema)(b, C)) && !b.opts.unevaluated)
      return;
    const S = p.let("valid", !1), O = p.name("_valid");
    p.block(() => y.forEach((C, U) => {
      const G = u.subschema({
        keyword: w,
        schemaProp: U,
        compositeRule: !0
      }, O);
      p.assign(S, (0, e._)`${S} || ${O}`), u.mergeValidEvaluated(G, O) || p.if((0, e.not)(S));
    })), u.result(S, () => u.reset(), () => u.error(!0));
  }
  return pe.validateUnion = v, pe;
}
var Ns;
function Zc() {
  if (Ns) return Xe;
  Ns = 1, Object.defineProperty(Xe, "__esModule", { value: !0 }), Xe.validateKeywordUsage = Xe.validSchemaType = Xe.funcKeywordCode = Xe.macroKeywordCode = void 0;
  const e = se(), t = Kt(), r = tt(), i = Si();
  function s(d, g) {
    const { gen: P, keyword: _, schema: h, parentSchema: v, it: u } = d, p = g.macro.call(u.self, h, v, u), y = c(P, _, p);
    u.opts.validateSchema !== !1 && u.self.validateSchema(p, !0);
    const w = P.name("valid");
    d.subschema({
      schema: p,
      schemaPath: e.nil,
      errSchemaPath: `${u.errSchemaPath}/${_}`,
      topSchemaRef: y,
      compositeRule: !0
    }, w), d.pass(w, () => d.error(!0));
  }
  Xe.macroKeywordCode = s;
  function n(d, g) {
    var P;
    const { gen: _, keyword: h, schema: v, parentSchema: u, $data: p, it: y } = d;
    l(y, g);
    const w = !p && g.compile ? g.compile.call(y.self, v, u, y) : g.validate, b = c(_, h, w), E = _.let("valid");
    d.block$data(E, S), d.ok((P = g.valid) !== null && P !== void 0 ? P : E);
    function S() {
      if (g.errors === !1)
        U(), g.modifying && a(d), G(() => d.error());
      else {
        const F = g.async ? O() : C();
        g.modifying && a(d), G(() => o(d, F));
      }
    }
    function O() {
      const F = _.let("ruleErrs", null);
      return _.try(() => U((0, e._)`await `), (H) => _.assign(E, !1).if((0, e._)`${H} instanceof ${y.ValidationError}`, () => _.assign(F, (0, e._)`${H}.errors`), () => _.throw(H))), F;
    }
    function C() {
      const F = (0, e._)`${b}.errors`;
      return _.assign(F, null), U(e.nil), F;
    }
    function U(F = g.async ? (0, e._)`await ` : e.nil) {
      const H = y.opts.passContext ? t.default.this : t.default.self, B = !("compile" in g && !p || g.schema === !1);
      _.assign(E, (0, e._)`${F}${(0, r.callValidateCode)(d, b, H, B)}`, g.modifying);
    }
    function G(F) {
      var H;
      _.if((0, e.not)((H = g.valid) !== null && H !== void 0 ? H : E), F);
    }
  }
  Xe.funcKeywordCode = n;
  function a(d) {
    const { gen: g, data: P, it: _ } = d;
    g.if(_.parentData, () => g.assign(P, (0, e._)`${_.parentData}[${_.parentDataProperty}]`));
  }
  function o(d, g) {
    const { gen: P } = d;
    P.if((0, e._)`Array.isArray(${g})`, () => {
      P.assign(t.default.vErrors, (0, e._)`${t.default.vErrors} === null ? ${g} : ${t.default.vErrors}.concat(${g})`).assign(t.default.errors, (0, e._)`${t.default.vErrors}.length`), (0, i.extendErrors)(d);
    }, () => d.error());
  }
  function l({ schemaEnv: d }, g) {
    if (g.async && !d.$async)
      throw new Error("async keyword in sync schema");
  }
  function c(d, g, P) {
    if (P === void 0)
      throw new Error(`keyword "${g}" failed to compile`);
    return d.scopeValue("keyword", typeof P == "function" ? { ref: P } : { ref: P, code: (0, e.stringify)(P) });
  }
  function f(d, g, P = !1) {
    return !g.length || g.some((_) => _ === "array" ? Array.isArray(d) : _ === "object" ? d && typeof d == "object" && !Array.isArray(d) : typeof d == _ || P && typeof d > "u");
  }
  Xe.validSchemaType = f;
  function m({ schema: d, opts: g, self: P, errSchemaPath: _ }, h, v) {
    if (Array.isArray(h.keyword) ? !h.keyword.includes(v) : h.keyword !== v)
      throw new Error("ajv implementation error");
    const u = h.dependencies;
    if (u != null && u.some((p) => !Object.prototype.hasOwnProperty.call(d, p)))
      throw new Error(`parent schema must have dependencies of ${v}: ${u.join(",")}`);
    if (h.validateSchema && !h.validateSchema(d[v])) {
      const y = `keyword "${v}" value is invalid at path "${_}": ` + P.errorsText(h.validateSchema.errors);
      if (g.validateSchema === "log")
        P.logger.error(y);
      else
        throw new Error(y);
    }
  }
  return Xe.validateKeywordUsage = m, Xe;
}
var yt = {}, Is;
function xc() {
  if (Is) return yt;
  Is = 1, Object.defineProperty(yt, "__esModule", { value: !0 }), yt.extendSubschemaMode = yt.extendSubschemaData = yt.getSubschema = void 0;
  const e = se(), t = fe();
  function r(n, { keyword: a, schemaProp: o, schema: l, schemaPath: c, errSchemaPath: f, topSchemaRef: m }) {
    if (a !== void 0 && l !== void 0)
      throw new Error('both "keyword" and "schema" passed, only one allowed');
    if (a !== void 0) {
      const d = n.schema[a];
      return o === void 0 ? {
        schema: d,
        schemaPath: (0, e._)`${n.schemaPath}${(0, e.getProperty)(a)}`,
        errSchemaPath: `${n.errSchemaPath}/${a}`
      } : {
        schema: d[o],
        schemaPath: (0, e._)`${n.schemaPath}${(0, e.getProperty)(a)}${(0, e.getProperty)(o)}`,
        errSchemaPath: `${n.errSchemaPath}/${a}/${(0, t.escapeFragment)(o)}`
      };
    }
    if (l !== void 0) {
      if (c === void 0 || f === void 0 || m === void 0)
        throw new Error('"schemaPath", "errSchemaPath" and "topSchemaRef" are required with "schema"');
      return {
        schema: l,
        schemaPath: c,
        topSchemaRef: m,
        errSchemaPath: f
      };
    }
    throw new Error('either "keyword" or "schema" must be passed');
  }
  yt.getSubschema = r;
  function i(n, a, { dataProp: o, dataPropType: l, data: c, dataTypes: f, propertyName: m }) {
    if (c !== void 0 && o !== void 0)
      throw new Error('both "data" and "dataProp" passed, only one allowed');
    const { gen: d } = a;
    if (o !== void 0) {
      const { errorPath: P, dataPathArr: _, opts: h } = a, v = d.let("data", (0, e._)`${a.data}${(0, e.getProperty)(o)}`, !0);
      g(v), n.errorPath = (0, e.str)`${P}${(0, t.getErrorPath)(o, l, h.jsPropertySyntax)}`, n.parentDataProperty = (0, e._)`${o}`, n.dataPathArr = [..._, n.parentDataProperty];
    }
    if (c !== void 0) {
      const P = c instanceof e.Name ? c : d.let("data", c, !0);
      g(P), m !== void 0 && (n.propertyName = m);
    }
    f && (n.dataTypes = f);
    function g(P) {
      n.data = P, n.dataLevel = a.dataLevel + 1, n.dataTypes = [], a.definedProperties = /* @__PURE__ */ new Set(), n.parentData = a.data, n.dataNames = [...a.dataNames, P];
    }
  }
  yt.extendSubschemaData = i;
  function s(n, { jtdDiscriminator: a, jtdMetadata: o, compositeRule: l, createErrors: c, allErrors: f }) {
    l !== void 0 && (n.compositeRule = l), c !== void 0 && (n.createErrors = c), f !== void 0 && (n.allErrors = f), n.jtdDiscriminator = a, n.jtdMetadata = o;
  }
  return yt.extendSubschemaMode = s, yt;
}
var Ee = {}, Wi, Cs;
function Xu() {
  return Cs || (Cs = 1, Wi = function e(t, r) {
    if (t === r) return !0;
    if (t && r && typeof t == "object" && typeof r == "object") {
      if (t.constructor !== r.constructor) return !1;
      var i, s, n;
      if (Array.isArray(t)) {
        if (i = t.length, i != r.length) return !1;
        for (s = i; s-- !== 0; )
          if (!e(t[s], r[s])) return !1;
        return !0;
      }
      if (t.constructor === RegExp) return t.source === r.source && t.flags === r.flags;
      if (t.valueOf !== Object.prototype.valueOf) return t.valueOf() === r.valueOf();
      if (t.toString !== Object.prototype.toString) return t.toString() === r.toString();
      if (n = Object.keys(t), i = n.length, i !== Object.keys(r).length) return !1;
      for (s = i; s-- !== 0; )
        if (!Object.prototype.hasOwnProperty.call(r, n[s])) return !1;
      for (s = i; s-- !== 0; ) {
        var a = n[s];
        if (!e(t[a], r[a])) return !1;
      }
      return !0;
    }
    return t !== t && r !== r;
  }), Wi;
}
var Vi = { exports: {} }, As;
function ed() {
  if (As) return Vi.exports;
  As = 1;
  var e = Vi.exports = function(i, s, n) {
    typeof s == "function" && (n = s, s = {}), n = s.cb || n;
    var a = typeof n == "function" ? n : n.pre || function() {
    }, o = n.post || function() {
    };
    t(s, a, o, i, "", i);
  };
  e.keywords = {
    additionalItems: !0,
    items: !0,
    contains: !0,
    additionalProperties: !0,
    propertyNames: !0,
    not: !0,
    if: !0,
    then: !0,
    else: !0
  }, e.arrayKeywords = {
    items: !0,
    allOf: !0,
    anyOf: !0,
    oneOf: !0
  }, e.propsKeywords = {
    $defs: !0,
    definitions: !0,
    properties: !0,
    patternProperties: !0,
    dependencies: !0
  }, e.skipKeywords = {
    default: !0,
    enum: !0,
    const: !0,
    required: !0,
    maximum: !0,
    minimum: !0,
    exclusiveMaximum: !0,
    exclusiveMinimum: !0,
    multipleOf: !0,
    maxLength: !0,
    minLength: !0,
    pattern: !0,
    format: !0,
    maxItems: !0,
    minItems: !0,
    uniqueItems: !0,
    maxProperties: !0,
    minProperties: !0
  };
  function t(i, s, n, a, o, l, c, f, m, d) {
    if (a && typeof a == "object" && !Array.isArray(a)) {
      s(a, o, l, c, f, m, d);
      for (var g in a) {
        var P = a[g];
        if (Array.isArray(P)) {
          if (g in e.arrayKeywords)
            for (var _ = 0; _ < P.length; _++)
              t(i, s, n, P[_], o + "/" + g + "/" + _, l, o, g, a, _);
        } else if (g in e.propsKeywords) {
          if (P && typeof P == "object")
            for (var h in P)
              t(i, s, n, P[h], o + "/" + g + "/" + r(h), l, o, g, a, h);
        } else (g in e.keywords || i.allKeys && !(g in e.skipKeywords)) && t(i, s, n, P, o + "/" + g, l, o, g, a);
      }
      n(a, o, l, c, f, m, d);
    }
  }
  function r(i) {
    return i.replace(/~/g, "~0").replace(/\//g, "~1");
  }
  return Vi.exports;
}
var ks;
function Di() {
  if (ks) return Ee;
  ks = 1, Object.defineProperty(Ee, "__esModule", { value: !0 }), Ee.getSchemaRefs = Ee.resolveUrl = Ee.normalizeId = Ee._getFullPath = Ee.getFullPath = Ee.inlineRef = void 0;
  const e = fe(), t = Xu(), r = ed(), i = /* @__PURE__ */ new Set([
    "type",
    "format",
    "pattern",
    "maxLength",
    "minLength",
    "maxProperties",
    "minProperties",
    "maxItems",
    "minItems",
    "maximum",
    "minimum",
    "uniqueItems",
    "multipleOf",
    "required",
    "enum",
    "const"
  ]);
  function s(_, h = !0) {
    return typeof _ == "boolean" ? !0 : h === !0 ? !a(_) : h ? o(_) <= h : !1;
  }
  Ee.inlineRef = s;
  const n = /* @__PURE__ */ new Set([
    "$ref",
    "$recursiveRef",
    "$recursiveAnchor",
    "$dynamicRef",
    "$dynamicAnchor"
  ]);
  function a(_) {
    for (const h in _) {
      if (n.has(h))
        return !0;
      const v = _[h];
      if (Array.isArray(v) && v.some(a) || typeof v == "object" && a(v))
        return !0;
    }
    return !1;
  }
  function o(_) {
    let h = 0;
    for (const v in _) {
      if (v === "$ref")
        return 1 / 0;
      if (h++, !i.has(v) && (typeof _[v] == "object" && (0, e.eachItem)(_[v], (u) => h += o(u)), h === 1 / 0))
        return 1 / 0;
    }
    return h;
  }
  function l(_, h = "", v) {
    v !== !1 && (h = m(h));
    const u = _.parse(h);
    return c(_, u);
  }
  Ee.getFullPath = l;
  function c(_, h) {
    return _.serialize(h).split("#")[0] + "#";
  }
  Ee._getFullPath = c;
  const f = /#\/?$/;
  function m(_) {
    return _ ? _.replace(f, "") : "";
  }
  Ee.normalizeId = m;
  function d(_, h, v) {
    return v = m(v), _.resolve(h, v);
  }
  Ee.resolveUrl = d;
  const g = /^[a-z_][-a-z0-9._]*$/i;
  function P(_, h) {
    if (typeof _ == "boolean")
      return {};
    const { schemaId: v, uriResolver: u } = this.opts, p = m(_[v] || h), y = { "": p }, w = l(u, p, !1), b = {}, E = /* @__PURE__ */ new Set();
    return r(_, { allKeys: !0 }, (C, U, G, F) => {
      if (F === void 0)
        return;
      const H = w + U;
      let B = y[F];
      typeof C[v] == "string" && (B = x.call(this, C[v])), Z.call(this, C.$anchor), Z.call(this, C.$dynamicAnchor), y[U] = B;
      function x(X) {
        const oe = this.opts.uriResolver.resolve;
        if (X = m(B ? oe(B, X) : X), E.has(X))
          throw O(X);
        E.add(X);
        let q = this.refs[X];
        return typeof q == "string" && (q = this.refs[q]), typeof q == "object" ? S(C, q.schema, X) : X !== m(H) && (X[0] === "#" ? (S(C, b[X], X), b[X] = C) : this.refs[X] = H), X;
      }
      function Z(X) {
        if (typeof X == "string") {
          if (!g.test(X))
            throw new Error(`invalid anchor "${X}"`);
          x.call(this, `#${X}`);
        }
      }
    }), b;
    function S(C, U, G) {
      if (U !== void 0 && !t(C, U))
        throw O(G);
    }
    function O(C) {
      return new Error(`reference "${C}" resolves to more than one schema`);
    }
  }
  return Ee.getSchemaRefs = P, Ee;
}
var qs;
function Oi() {
  if (qs) return gt;
  qs = 1, Object.defineProperty(gt, "__esModule", { value: !0 }), gt.getData = gt.KeywordCxt = gt.validateFunctionCode = void 0;
  const e = Xc(), t = gi(), r = Yu(), i = gi(), s = Qc(), n = Zc(), a = xc(), o = se(), l = Kt(), c = Di(), f = fe(), m = Si();
  function d(T) {
    if (w(T) && (E(T), y(T))) {
      h(T);
      return;
    }
    g(T, () => (0, e.topBoolOrEmptySchema)(T));
  }
  gt.validateFunctionCode = d;
  function g({ gen: T, validateName: N, schema: k, schemaEnv: V, opts: Q }, ae) {
    Q.code.es5 ? T.func(N, (0, o._)`${l.default.data}, ${l.default.valCxt}`, V.$async, () => {
      T.code((0, o._)`"use strict"; ${u(k, Q)}`), _(T, Q), T.code(ae);
    }) : T.func(N, (0, o._)`${l.default.data}, ${P(Q)}`, V.$async, () => T.code(u(k, Q)).code(ae));
  }
  function P(T) {
    return (0, o._)`{${l.default.instancePath}="", ${l.default.parentData}, ${l.default.parentDataProperty}, ${l.default.rootData}=${l.default.data}${T.dynamicRef ? (0, o._)`, ${l.default.dynamicAnchors}={}` : o.nil}}={}`;
  }
  function _(T, N) {
    T.if(l.default.valCxt, () => {
      T.var(l.default.instancePath, (0, o._)`${l.default.valCxt}.${l.default.instancePath}`), T.var(l.default.parentData, (0, o._)`${l.default.valCxt}.${l.default.parentData}`), T.var(l.default.parentDataProperty, (0, o._)`${l.default.valCxt}.${l.default.parentDataProperty}`), T.var(l.default.rootData, (0, o._)`${l.default.valCxt}.${l.default.rootData}`), N.dynamicRef && T.var(l.default.dynamicAnchors, (0, o._)`${l.default.valCxt}.${l.default.dynamicAnchors}`);
    }, () => {
      T.var(l.default.instancePath, (0, o._)`""`), T.var(l.default.parentData, (0, o._)`undefined`), T.var(l.default.parentDataProperty, (0, o._)`undefined`), T.var(l.default.rootData, l.default.data), N.dynamicRef && T.var(l.default.dynamicAnchors, (0, o._)`{}`);
    });
  }
  function h(T) {
    const { schema: N, opts: k, gen: V } = T;
    g(T, () => {
      k.$comment && N.$comment && F(T), C(T), V.let(l.default.vErrors, null), V.let(l.default.errors, 0), k.unevaluated && v(T), S(T), H(T);
    });
  }
  function v(T) {
    const { gen: N, validateName: k } = T;
    T.evaluated = N.const("evaluated", (0, o._)`${k}.evaluated`), N.if((0, o._)`${T.evaluated}.dynamicProps`, () => N.assign((0, o._)`${T.evaluated}.props`, (0, o._)`undefined`)), N.if((0, o._)`${T.evaluated}.dynamicItems`, () => N.assign((0, o._)`${T.evaluated}.items`, (0, o._)`undefined`));
  }
  function u(T, N) {
    const k = typeof T == "object" && T[N.schemaId];
    return k && (N.code.source || N.code.process) ? (0, o._)`/*# sourceURL=${k} */` : o.nil;
  }
  function p(T, N) {
    if (w(T) && (E(T), y(T))) {
      b(T, N);
      return;
    }
    (0, e.boolOrEmptySchema)(T, N);
  }
  function y({ schema: T, self: N }) {
    if (typeof T == "boolean")
      return !T;
    for (const k in T)
      if (N.RULES.all[k])
        return !0;
    return !1;
  }
  function w(T) {
    return typeof T.schema != "boolean";
  }
  function b(T, N) {
    const { schema: k, gen: V, opts: Q } = T;
    Q.$comment && k.$comment && F(T), U(T), G(T);
    const ae = V.const("_errs", l.default.errors);
    S(T, ae), V.var(N, (0, o._)`${ae} === ${l.default.errors}`);
  }
  function E(T) {
    (0, f.checkUnknownRules)(T), O(T);
  }
  function S(T, N) {
    if (T.opts.jtd)
      return x(T, [], !1, N);
    const k = (0, t.getSchemaTypes)(T.schema), V = (0, t.coerceAndCheckDataType)(T, k);
    x(T, k, !V, N);
  }
  function O(T) {
    const { schema: N, errSchemaPath: k, opts: V, self: Q } = T;
    N.$ref && V.ignoreKeywordsWithRef && (0, f.schemaHasRulesButRef)(N, Q.RULES) && Q.logger.warn(`$ref: keywords ignored in schema at path "${k}"`);
  }
  function C(T) {
    const { schema: N, opts: k } = T;
    N.default !== void 0 && k.useDefaults && k.strictSchema && (0, f.checkStrictMode)(T, "default is ignored in the schema root");
  }
  function U(T) {
    const N = T.schema[T.opts.schemaId];
    N && (T.baseId = (0, c.resolveUrl)(T.opts.uriResolver, T.baseId, N));
  }
  function G(T) {
    if (T.schema.$async && !T.schemaEnv.$async)
      throw new Error("async schema in sync schema");
  }
  function F({ gen: T, schemaEnv: N, schema: k, errSchemaPath: V, opts: Q }) {
    const ae = k.$comment;
    if (Q.$comment === !0)
      T.code((0, o._)`${l.default.self}.logger.log(${ae})`);
    else if (typeof Q.$comment == "function") {
      const ye = (0, o.str)`${V}/$comment`, Je = T.scopeValue("root", { ref: N.root });
      T.code((0, o._)`${l.default.self}.opts.$comment(${ae}, ${ye}, ${Je}.schema)`);
    }
  }
  function H(T) {
    const { gen: N, schemaEnv: k, validateName: V, ValidationError: Q, opts: ae } = T;
    k.$async ? N.if((0, o._)`${l.default.errors} === 0`, () => N.return(l.default.data), () => N.throw((0, o._)`new ${Q}(${l.default.vErrors})`)) : (N.assign((0, o._)`${V}.errors`, l.default.vErrors), ae.unevaluated && B(T), N.return((0, o._)`${l.default.errors} === 0`));
  }
  function B({ gen: T, evaluated: N, props: k, items: V }) {
    k instanceof o.Name && T.assign((0, o._)`${N}.props`, k), V instanceof o.Name && T.assign((0, o._)`${N}.items`, V);
  }
  function x(T, N, k, V) {
    const { gen: Q, schema: ae, data: ye, allErrors: Je, opts: Re, self: Me } = T, { RULES: Pe } = Me;
    if (ae.$ref && (Re.ignoreKeywordsWithRef || !(0, f.schemaHasRulesButRef)(ae, Pe))) {
      Q.block(() => J(T, "$ref", Pe.all.$ref.definition));
      return;
    }
    Re.jtd || X(T, N), Q.block(() => {
      for (const Ue of Pe.rules)
        or(Ue);
      or(Pe.post);
    });
    function or(Ue) {
      (0, r.shouldUseGroup)(ae, Ue) && (Ue.type ? (Q.if((0, i.checkDataType)(Ue.type, ye, Re.strictNumbers)), Z(T, Ue), N.length === 1 && N[0] === Ue.type && k && (Q.else(), (0, i.reportTypeError)(T)), Q.endIf()) : Z(T, Ue), Je || Q.if((0, o._)`${l.default.errors} === ${V || 0}`));
    }
  }
  function Z(T, N) {
    const { gen: k, schema: V, opts: { useDefaults: Q } } = T;
    Q && (0, s.assignDefaults)(T, N.type), k.block(() => {
      for (const ae of N.rules)
        (0, r.shouldUseRule)(V, ae) && J(T, ae.keyword, ae.definition, N.type);
    });
  }
  function X(T, N) {
    T.schemaEnv.meta || !T.opts.strictTypes || (oe(T, N), T.opts.allowUnionTypes || q(T, N), j(T, T.dataTypes));
  }
  function oe(T, N) {
    if (N.length) {
      if (!T.dataTypes.length) {
        T.dataTypes = N;
        return;
      }
      N.forEach((k) => {
        M(T.dataTypes, k) || D(T, `type "${k}" not allowed by context "${T.dataTypes.join(",")}"`);
      }), $(T, N);
    }
  }
  function q(T, N) {
    N.length > 1 && !(N.length === 2 && N.includes("null")) && D(T, "use allowUnionTypes to allow union type keyword");
  }
  function j(T, N) {
    const k = T.self.RULES.all;
    for (const V in k) {
      const Q = k[V];
      if (typeof Q == "object" && (0, r.shouldUseRule)(T.schema, Q)) {
        const { type: ae } = Q.definition;
        ae.length && !ae.some((ye) => A(N, ye)) && D(T, `missing type "${ae.join(",")}" for keyword "${V}"`);
      }
    }
  }
  function A(T, N) {
    return T.includes(N) || N === "number" && T.includes("integer");
  }
  function M(T, N) {
    return T.includes(N) || N === "integer" && T.includes("number");
  }
  function $(T, N) {
    const k = [];
    for (const V of T.dataTypes)
      M(N, V) ? k.push(V) : N.includes("integer") && V === "number" && k.push("integer");
    T.dataTypes = k;
  }
  function D(T, N) {
    const k = T.schemaEnv.baseId + T.errSchemaPath;
    N += ` at "${k}" (strictTypes)`, (0, f.checkStrictMode)(T, N, T.opts.strictTypes);
  }
  class I {
    constructor(N, k, V) {
      if ((0, n.validateKeywordUsage)(N, k, V), this.gen = N.gen, this.allErrors = N.allErrors, this.keyword = V, this.data = N.data, this.schema = N.schema[V], this.$data = k.$data && N.opts.$data && this.schema && this.schema.$data, this.schemaValue = (0, f.schemaRefOrVal)(N, this.schema, V, this.$data), this.schemaType = k.schemaType, this.parentSchema = N.schema, this.params = {}, this.it = N, this.def = k, this.$data)
        this.schemaCode = N.gen.const("vSchema", ue(this.$data, N));
      else if (this.schemaCode = this.schemaValue, !(0, n.validSchemaType)(this.schema, k.schemaType, k.allowUndefined))
        throw new Error(`${V} value must be ${JSON.stringify(k.schemaType)}`);
      ("code" in k ? k.trackErrors : k.errors !== !1) && (this.errsCount = N.gen.const("_errs", l.default.errors));
    }
    result(N, k, V) {
      this.failResult((0, o.not)(N), k, V);
    }
    failResult(N, k, V) {
      this.gen.if(N), V ? V() : this.error(), k ? (this.gen.else(), k(), this.allErrors && this.gen.endIf()) : this.allErrors ? this.gen.endIf() : this.gen.else();
    }
    pass(N, k) {
      this.failResult((0, o.not)(N), void 0, k);
    }
    fail(N) {
      if (N === void 0) {
        this.error(), this.allErrors || this.gen.if(!1);
        return;
      }
      this.gen.if(N), this.error(), this.allErrors ? this.gen.endIf() : this.gen.else();
    }
    fail$data(N) {
      if (!this.$data)
        return this.fail(N);
      const { schemaCode: k } = this;
      this.fail((0, o._)`${k} !== undefined && (${(0, o.or)(this.invalid$data(), N)})`);
    }
    error(N, k, V) {
      if (k) {
        this.setParams(k), this._error(N, V), this.setParams({});
        return;
      }
      this._error(N, V);
    }
    _error(N, k) {
      (N ? m.reportExtraError : m.reportError)(this, this.def.error, k);
    }
    $dataError() {
      (0, m.reportError)(this, this.def.$dataError || m.keyword$DataError);
    }
    reset() {
      if (this.errsCount === void 0)
        throw new Error('add "trackErrors" to keyword definition');
      (0, m.resetErrorsCount)(this.gen, this.errsCount);
    }
    ok(N) {
      this.allErrors || this.gen.if(N);
    }
    setParams(N, k) {
      k ? Object.assign(this.params, N) : this.params = N;
    }
    block$data(N, k, V = o.nil) {
      this.gen.block(() => {
        this.check$data(N, V), k();
      });
    }
    check$data(N = o.nil, k = o.nil) {
      if (!this.$data)
        return;
      const { gen: V, schemaCode: Q, schemaType: ae, def: ye } = this;
      V.if((0, o.or)((0, o._)`${Q} === undefined`, k)), N !== o.nil && V.assign(N, !0), (ae.length || ye.validateSchema) && (V.elseIf(this.invalid$data()), this.$dataError(), N !== o.nil && V.assign(N, !1)), V.else();
    }
    invalid$data() {
      const { gen: N, schemaCode: k, schemaType: V, def: Q, it: ae } = this;
      return (0, o.or)(ye(), Je());
      function ye() {
        if (V.length) {
          if (!(k instanceof o.Name))
            throw new Error("ajv implementation error");
          const Re = Array.isArray(V) ? V : [V];
          return (0, o._)`${(0, i.checkDataTypes)(Re, k, ae.opts.strictNumbers, i.DataType.Wrong)}`;
        }
        return o.nil;
      }
      function Je() {
        if (Q.validateSchema) {
          const Re = N.scopeValue("validate$data", { ref: Q.validateSchema });
          return (0, o._)`!${Re}(${k})`;
        }
        return o.nil;
      }
    }
    subschema(N, k) {
      const V = (0, a.getSubschema)(this.it, N);
      (0, a.extendSubschemaData)(V, this.it, N), (0, a.extendSubschemaMode)(V, N);
      const Q = { ...this.it, ...V, items: void 0, props: void 0 };
      return p(Q, k), Q;
    }
    mergeEvaluated(N, k) {
      const { it: V, gen: Q } = this;
      V.opts.unevaluated && (V.props !== !0 && N.props !== void 0 && (V.props = f.mergeEvaluated.props(Q, N.props, V.props, k)), V.items !== !0 && N.items !== void 0 && (V.items = f.mergeEvaluated.items(Q, N.items, V.items, k)));
    }
    mergeValidEvaluated(N, k) {
      const { it: V, gen: Q } = this;
      if (V.opts.unevaluated && (V.props !== !0 || V.items !== !0))
        return Q.if(k, () => this.mergeEvaluated(N, o.Name)), !0;
    }
  }
  gt.KeywordCxt = I;
  function J(T, N, k, V) {
    const Q = new I(T, k, N);
    "code" in k ? k.code(Q, V) : Q.$data && k.validate ? (0, n.funcKeywordCode)(Q, k) : "macro" in k ? (0, n.macroKeywordCode)(Q, k) : (k.compile || k.validate) && (0, n.funcKeywordCode)(Q, k);
  }
  const Y = /^\/(?:[^~]|~0|~1)*$/, ce = /^([0-9]+)(#|\/(?:[^~]|~0|~1)*)?$/;
  function ue(T, { dataLevel: N, dataNames: k, dataPathArr: V }) {
    let Q, ae;
    if (T === "")
      return l.default.rootData;
    if (T[0] === "/") {
      if (!Y.test(T))
        throw new Error(`Invalid JSON-pointer: ${T}`);
      Q = T, ae = l.default.rootData;
    } else {
      const Me = ce.exec(T);
      if (!Me)
        throw new Error(`Invalid JSON-pointer: ${T}`);
      const Pe = +Me[1];
      if (Q = Me[2], Q === "#") {
        if (Pe >= N)
          throw new Error(Re("property/index", Pe));
        return V[N - Pe];
      }
      if (Pe > N)
        throw new Error(Re("data", Pe));
      if (ae = k[N - Pe], !Q)
        return ae;
    }
    let ye = ae;
    const Je = Q.split("/");
    for (const Me of Je)
      Me && (ae = (0, o._)`${ae}${(0, o.getProperty)((0, f.unescapeJsonPointer)(Me))}`, ye = (0, o._)`${ye} && ${ae}`);
    return ye;
    function Re(Me, Pe) {
      return `Cannot access ${Me} ${Pe} levels up, current level is ${N}`;
    }
  }
  return gt.getData = ue, gt;
}
var bn = {}, Us;
function Pa() {
  if (Us) return bn;
  Us = 1, Object.defineProperty(bn, "__esModule", { value: !0 });
  class e extends Error {
    constructor(r) {
      super("validation failed"), this.errors = r, this.ajv = this.validation = !0;
    }
  }
  return bn.default = e, bn;
}
var $n = {}, Ls;
function Ti() {
  if (Ls) return $n;
  Ls = 1, Object.defineProperty($n, "__esModule", { value: !0 });
  const e = Di();
  class t extends Error {
    constructor(i, s, n, a) {
      super(a || `can't resolve reference ${n} from id ${s}`), this.missingRef = (0, e.resolveUrl)(i, s, n), this.missingSchema = (0, e.normalizeId)((0, e.getFullPath)(i, this.missingRef));
    }
  }
  return $n.default = t, $n;
}
var ke = {}, Fs;
function wa() {
  if (Fs) return ke;
  Fs = 1, Object.defineProperty(ke, "__esModule", { value: !0 }), ke.resolveSchema = ke.getCompilingSchema = ke.resolveRef = ke.compileSchema = ke.SchemaEnv = void 0;
  const e = se(), t = Pa(), r = Kt(), i = Di(), s = fe(), n = Oi();
  class a {
    constructor(v) {
      var u;
      this.refs = {}, this.dynamicAnchors = {};
      let p;
      typeof v.schema == "object" && (p = v.schema), this.schema = v.schema, this.schemaId = v.schemaId, this.root = v.root || this, this.baseId = (u = v.baseId) !== null && u !== void 0 ? u : (0, i.normalizeId)(p == null ? void 0 : p[v.schemaId || "$id"]), this.schemaPath = v.schemaPath, this.localRefs = v.localRefs, this.meta = v.meta, this.$async = p == null ? void 0 : p.$async, this.refs = {};
    }
  }
  ke.SchemaEnv = a;
  function o(h) {
    const v = f.call(this, h);
    if (v)
      return v;
    const u = (0, i.getFullPath)(this.opts.uriResolver, h.root.baseId), { es5: p, lines: y } = this.opts.code, { ownProperties: w } = this.opts, b = new e.CodeGen(this.scope, { es5: p, lines: y, ownProperties: w });
    let E;
    h.$async && (E = b.scopeValue("Error", {
      ref: t.default,
      code: (0, e._)`require("ajv/dist/runtime/validation_error").default`
    }));
    const S = b.scopeName("validate");
    h.validateName = S;
    const O = {
      gen: b,
      allErrors: this.opts.allErrors,
      data: r.default.data,
      parentData: r.default.parentData,
      parentDataProperty: r.default.parentDataProperty,
      dataNames: [r.default.data],
      dataPathArr: [e.nil],
      // TODO can its length be used as dataLevel if nil is removed?
      dataLevel: 0,
      dataTypes: [],
      definedProperties: /* @__PURE__ */ new Set(),
      topSchemaRef: b.scopeValue("schema", this.opts.code.source === !0 ? { ref: h.schema, code: (0, e.stringify)(h.schema) } : { ref: h.schema }),
      validateName: S,
      ValidationError: E,
      schema: h.schema,
      schemaEnv: h,
      rootId: u,
      baseId: h.baseId || u,
      schemaPath: e.nil,
      errSchemaPath: h.schemaPath || (this.opts.jtd ? "" : "#"),
      errorPath: (0, e._)`""`,
      opts: this.opts,
      self: this
    };
    let C;
    try {
      this._compilations.add(h), (0, n.validateFunctionCode)(O), b.optimize(this.opts.code.optimize);
      const U = b.toString();
      C = `${b.scopeRefs(r.default.scope)}return ${U}`, this.opts.code.process && (C = this.opts.code.process(C, h));
      const F = new Function(`${r.default.self}`, `${r.default.scope}`, C)(this, this.scope.get());
      if (this.scope.value(S, { ref: F }), F.errors = null, F.schema = h.schema, F.schemaEnv = h, h.$async && (F.$async = !0), this.opts.code.source === !0 && (F.source = { validateName: S, validateCode: U, scopeValues: b._values }), this.opts.unevaluated) {
        const { props: H, items: B } = O;
        F.evaluated = {
          props: H instanceof e.Name ? void 0 : H,
          items: B instanceof e.Name ? void 0 : B,
          dynamicProps: H instanceof e.Name,
          dynamicItems: B instanceof e.Name
        }, F.source && (F.source.evaluated = (0, e.stringify)(F.evaluated));
      }
      return h.validate = F, h;
    } catch (U) {
      throw delete h.validate, delete h.validateName, C && this.logger.error("Error compiling schema, function code:", C), U;
    } finally {
      this._compilations.delete(h);
    }
  }
  ke.compileSchema = o;
  function l(h, v, u) {
    var p;
    u = (0, i.resolveUrl)(this.opts.uriResolver, v, u);
    const y = h.refs[u];
    if (y)
      return y;
    let w = d.call(this, h, u);
    if (w === void 0) {
      const b = (p = h.localRefs) === null || p === void 0 ? void 0 : p[u], { schemaId: E } = this.opts;
      b && (w = new a({ schema: b, schemaId: E, root: h, baseId: v }));
    }
    if (w !== void 0)
      return h.refs[u] = c.call(this, w);
  }
  ke.resolveRef = l;
  function c(h) {
    return (0, i.inlineRef)(h.schema, this.opts.inlineRefs) ? h.schema : h.validate ? h : o.call(this, h);
  }
  function f(h) {
    for (const v of this._compilations)
      if (m(v, h))
        return v;
  }
  ke.getCompilingSchema = f;
  function m(h, v) {
    return h.schema === v.schema && h.root === v.root && h.baseId === v.baseId;
  }
  function d(h, v) {
    let u;
    for (; typeof (u = this.refs[v]) == "string"; )
      v = u;
    return u || this.schemas[v] || g.call(this, h, v);
  }
  function g(h, v) {
    const u = this.opts.uriResolver.parse(v), p = (0, i._getFullPath)(this.opts.uriResolver, u);
    let y = (0, i.getFullPath)(this.opts.uriResolver, h.baseId, void 0);
    if (Object.keys(h.schema).length > 0 && p === y)
      return _.call(this, u, h);
    const w = (0, i.normalizeId)(p), b = this.refs[w] || this.schemas[w];
    if (typeof b == "string") {
      const E = g.call(this, h, b);
      return typeof (E == null ? void 0 : E.schema) != "object" ? void 0 : _.call(this, u, E);
    }
    if (typeof (b == null ? void 0 : b.schema) == "object") {
      if (b.validate || o.call(this, b), w === (0, i.normalizeId)(v)) {
        const { schema: E } = b, { schemaId: S } = this.opts, O = E[S];
        return O && (y = (0, i.resolveUrl)(this.opts.uriResolver, y, O)), new a({ schema: E, schemaId: S, root: h, baseId: y });
      }
      return _.call(this, u, b);
    }
  }
  ke.resolveSchema = g;
  const P = /* @__PURE__ */ new Set([
    "properties",
    "patternProperties",
    "enum",
    "dependencies",
    "definitions"
  ]);
  function _(h, { baseId: v, schema: u, root: p }) {
    var y;
    if (((y = h.fragment) === null || y === void 0 ? void 0 : y[0]) !== "/")
      return;
    for (const E of h.fragment.slice(1).split("/")) {
      if (typeof u == "boolean")
        return;
      const S = u[(0, s.unescapeFragment)(E)];
      if (S === void 0)
        return;
      u = S;
      const O = typeof u == "object" && u[this.opts.schemaId];
      !P.has(E) && O && (v = (0, i.resolveUrl)(this.opts.uriResolver, v, O));
    }
    let w;
    if (typeof u != "boolean" && u.$ref && !(0, s.schemaHasRulesButRef)(u, this.RULES)) {
      const E = (0, i.resolveUrl)(this.opts.uriResolver, v, u.$ref);
      w = g.call(this, p, E);
    }
    const { schemaId: b } = this.opts;
    if (w = w || new a({ schema: u, schemaId: b, root: p, baseId: v }), w.schema !== w.root.schema)
      return w;
  }
  return ke;
}
const td = "https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#", rd = "Meta-schema for $data reference (JSON AnySchema extension proposal)", nd = "object", id = ["$data"], ad = { $data: { type: "string", anyOf: [{ format: "relative-json-pointer" }, { format: "json-pointer" }] } }, sd = !1, od = {
  $id: td,
  description: rd,
  type: nd,
  required: id,
  properties: ad,
  additionalProperties: sd
};
var En = {}, Wr = { exports: {} }, Hi, Ws;
function ud() {
  return Ws || (Ws = 1, Hi = {
    HEX: {
      0: 0,
      1: 1,
      2: 2,
      3: 3,
      4: 4,
      5: 5,
      6: 6,
      7: 7,
      8: 8,
      9: 9,
      a: 10,
      A: 10,
      b: 11,
      B: 11,
      c: 12,
      C: 12,
      d: 13,
      D: 13,
      e: 14,
      E: 14,
      f: 15,
      F: 15
    }
  }), Hi;
}
var Gi, Vs;
function ld() {
  if (Vs) return Gi;
  Vs = 1;
  const { HEX: e } = ud(), t = /^(?:(?:25[0-5]|2[0-4]\d|1\d{2}|[1-9]\d|\d)\.){3}(?:25[0-5]|2[0-4]\d|1\d{2}|[1-9]\d|\d)$/u;
  function r(_) {
    if (o(_, ".") < 3)
      return { host: _, isIPV4: !1 };
    const h = _.match(t) || [], [v] = h;
    return v ? { host: a(v, "."), isIPV4: !0 } : { host: _, isIPV4: !1 };
  }
  function i(_, h = !1) {
    let v = "", u = !0;
    for (const p of _) {
      if (e[p] === void 0) return;
      p !== "0" && u === !0 && (u = !1), u || (v += p);
    }
    return h && v.length === 0 && (v = "0"), v;
  }
  function s(_) {
    let h = 0;
    const v = { error: !1, address: "", zone: "" }, u = [], p = [];
    let y = !1, w = !1, b = !1;
    function E() {
      if (p.length) {
        if (y === !1) {
          const S = i(p);
          if (S !== void 0)
            u.push(S);
          else
            return v.error = !0, !1;
        }
        p.length = 0;
      }
      return !0;
    }
    for (let S = 0; S < _.length; S++) {
      const O = _[S];
      if (!(O === "[" || O === "]"))
        if (O === ":") {
          if (w === !0 && (b = !0), !E())
            break;
          if (h++, u.push(":"), h > 7) {
            v.error = !0;
            break;
          }
          S - 1 >= 0 && _[S - 1] === ":" && (w = !0);
          continue;
        } else if (O === "%") {
          if (!E())
            break;
          y = !0;
        } else {
          p.push(O);
          continue;
        }
    }
    return p.length && (y ? v.zone = p.join("") : b ? u.push(p.join("")) : u.push(i(p))), v.address = u.join(""), v;
  }
  function n(_) {
    if (o(_, ":") < 2)
      return { host: _, isIPV6: !1 };
    const h = s(_);
    if (h.error)
      return { host: _, isIPV6: !1 };
    {
      let v = h.address, u = h.address;
      return h.zone && (v += "%" + h.zone, u += "%25" + h.zone), { host: v, escapedHost: u, isIPV6: !0 };
    }
  }
  function a(_, h) {
    let v = "", u = !0;
    const p = _.length;
    for (let y = 0; y < p; y++) {
      const w = _[y];
      w === "0" && u ? (y + 1 <= p && _[y + 1] === h || y + 1 === p) && (v += w, u = !1) : (w === h ? u = !0 : u = !1, v += w);
    }
    return v;
  }
  function o(_, h) {
    let v = 0;
    for (let u = 0; u < _.length; u++)
      _[u] === h && v++;
    return v;
  }
  const l = /^\.\.?\//u, c = /^\/\.(?:\/|$)/u, f = /^\/\.\.(?:\/|$)/u, m = /^\/?(?:.|\n)*?(?=\/|$)/u;
  function d(_) {
    const h = [];
    for (; _.length; )
      if (_.match(l))
        _ = _.replace(l, "");
      else if (_.match(c))
        _ = _.replace(c, "/");
      else if (_.match(f))
        _ = _.replace(f, "/"), h.pop();
      else if (_ === "." || _ === "..")
        _ = "";
      else {
        const v = _.match(m);
        if (v) {
          const u = v[0];
          _ = _.slice(u.length), h.push(u);
        } else
          throw new Error("Unexpected dot segment condition");
      }
    return h.join("");
  }
  function g(_, h) {
    const v = h !== !0 ? escape : unescape;
    return _.scheme !== void 0 && (_.scheme = v(_.scheme)), _.userinfo !== void 0 && (_.userinfo = v(_.userinfo)), _.host !== void 0 && (_.host = v(_.host)), _.path !== void 0 && (_.path = v(_.path)), _.query !== void 0 && (_.query = v(_.query)), _.fragment !== void 0 && (_.fragment = v(_.fragment)), _;
  }
  function P(_) {
    const h = [];
    if (_.userinfo !== void 0 && (h.push(_.userinfo), h.push("@")), _.host !== void 0) {
      let v = unescape(_.host);
      const u = r(v);
      if (u.isIPV4)
        v = u.host;
      else {
        const p = n(u.host);
        p.isIPV6 === !0 ? v = `[${p.escapedHost}]` : v = _.host;
      }
      h.push(v);
    }
    return (typeof _.port == "number" || typeof _.port == "string") && (h.push(":"), h.push(String(_.port))), h.length ? h.join("") : void 0;
  }
  return Gi = {
    recomposeAuthority: P,
    normalizeComponentEncoding: g,
    removeDotSegments: d,
    normalizeIPv4: r,
    normalizeIPv6: n,
    stringArrayToHexStripped: i
  }, Gi;
}
var zi, Hs;
function cd() {
  if (Hs) return zi;
  Hs = 1;
  const e = /^[\da-f]{8}-[\da-f]{4}-[\da-f]{4}-[\da-f]{4}-[\da-f]{12}$/iu, t = /([\da-z][\d\-a-z]{0,31}):((?:[\w!$'()*+,\-.:;=@]|%[\da-f]{2})+)/iu;
  function r(u) {
    return typeof u.secure == "boolean" ? u.secure : String(u.scheme).toLowerCase() === "wss";
  }
  function i(u) {
    return u.host || (u.error = u.error || "HTTP URIs must have a host."), u;
  }
  function s(u) {
    const p = String(u.scheme).toLowerCase() === "https";
    return (u.port === (p ? 443 : 80) || u.port === "") && (u.port = void 0), u.path || (u.path = "/"), u;
  }
  function n(u) {
    return u.secure = r(u), u.resourceName = (u.path || "/") + (u.query ? "?" + u.query : ""), u.path = void 0, u.query = void 0, u;
  }
  function a(u) {
    if ((u.port === (r(u) ? 443 : 80) || u.port === "") && (u.port = void 0), typeof u.secure == "boolean" && (u.scheme = u.secure ? "wss" : "ws", u.secure = void 0), u.resourceName) {
      const [p, y] = u.resourceName.split("?");
      u.path = p && p !== "/" ? p : void 0, u.query = y, u.resourceName = void 0;
    }
    return u.fragment = void 0, u;
  }
  function o(u, p) {
    if (!u.path)
      return u.error = "URN can not be parsed", u;
    const y = u.path.match(t);
    if (y) {
      const w = p.scheme || u.scheme || "urn";
      u.nid = y[1].toLowerCase(), u.nss = y[2];
      const b = `${w}:${p.nid || u.nid}`, E = v[b];
      u.path = void 0, E && (u = E.parse(u, p));
    } else
      u.error = u.error || "URN can not be parsed.";
    return u;
  }
  function l(u, p) {
    const y = p.scheme || u.scheme || "urn", w = u.nid.toLowerCase(), b = `${y}:${p.nid || w}`, E = v[b];
    E && (u = E.serialize(u, p));
    const S = u, O = u.nss;
    return S.path = `${w || p.nid}:${O}`, p.skipEscape = !0, S;
  }
  function c(u, p) {
    const y = u;
    return y.uuid = y.nss, y.nss = void 0, !p.tolerant && (!y.uuid || !e.test(y.uuid)) && (y.error = y.error || "UUID is not valid."), y;
  }
  function f(u) {
    const p = u;
    return p.nss = (u.uuid || "").toLowerCase(), p;
  }
  const m = {
    scheme: "http",
    domainHost: !0,
    parse: i,
    serialize: s
  }, d = {
    scheme: "https",
    domainHost: m.domainHost,
    parse: i,
    serialize: s
  }, g = {
    scheme: "ws",
    domainHost: !0,
    parse: n,
    serialize: a
  }, P = {
    scheme: "wss",
    domainHost: g.domainHost,
    parse: g.parse,
    serialize: g.serialize
  }, v = {
    http: m,
    https: d,
    ws: g,
    wss: P,
    urn: {
      scheme: "urn",
      parse: o,
      serialize: l,
      skipNormalize: !0
    },
    "urn:uuid": {
      scheme: "urn:uuid",
      parse: c,
      serialize: f,
      skipNormalize: !0
    }
  };
  return zi = v, zi;
}
var Gs;
function dd() {
  if (Gs) return Wr.exports;
  Gs = 1;
  const { normalizeIPv6: e, normalizeIPv4: t, removeDotSegments: r, recomposeAuthority: i, normalizeComponentEncoding: s } = ld(), n = cd();
  function a(h, v) {
    return typeof h == "string" ? h = f(P(h, v), v) : typeof h == "object" && (h = P(f(h, v), v)), h;
  }
  function o(h, v, u) {
    const p = Object.assign({ scheme: "null" }, u), y = l(P(h, p), P(v, p), p, !0);
    return f(y, { ...p, skipEscape: !0 });
  }
  function l(h, v, u, p) {
    const y = {};
    return p || (h = P(f(h, u), u), v = P(f(v, u), u)), u = u || {}, !u.tolerant && v.scheme ? (y.scheme = v.scheme, y.userinfo = v.userinfo, y.host = v.host, y.port = v.port, y.path = r(v.path || ""), y.query = v.query) : (v.userinfo !== void 0 || v.host !== void 0 || v.port !== void 0 ? (y.userinfo = v.userinfo, y.host = v.host, y.port = v.port, y.path = r(v.path || ""), y.query = v.query) : (v.path ? (v.path.charAt(0) === "/" ? y.path = r(v.path) : ((h.userinfo !== void 0 || h.host !== void 0 || h.port !== void 0) && !h.path ? y.path = "/" + v.path : h.path ? y.path = h.path.slice(0, h.path.lastIndexOf("/") + 1) + v.path : y.path = v.path, y.path = r(y.path)), y.query = v.query) : (y.path = h.path, v.query !== void 0 ? y.query = v.query : y.query = h.query), y.userinfo = h.userinfo, y.host = h.host, y.port = h.port), y.scheme = h.scheme), y.fragment = v.fragment, y;
  }
  function c(h, v, u) {
    return typeof h == "string" ? (h = unescape(h), h = f(s(P(h, u), !0), { ...u, skipEscape: !0 })) : typeof h == "object" && (h = f(s(h, !0), { ...u, skipEscape: !0 })), typeof v == "string" ? (v = unescape(v), v = f(s(P(v, u), !0), { ...u, skipEscape: !0 })) : typeof v == "object" && (v = f(s(v, !0), { ...u, skipEscape: !0 })), h.toLowerCase() === v.toLowerCase();
  }
  function f(h, v) {
    const u = {
      host: h.host,
      scheme: h.scheme,
      userinfo: h.userinfo,
      port: h.port,
      path: h.path,
      query: h.query,
      nid: h.nid,
      nss: h.nss,
      uuid: h.uuid,
      fragment: h.fragment,
      reference: h.reference,
      resourceName: h.resourceName,
      secure: h.secure,
      error: ""
    }, p = Object.assign({}, v), y = [], w = n[(p.scheme || u.scheme || "").toLowerCase()];
    w && w.serialize && w.serialize(u, p), u.path !== void 0 && (p.skipEscape ? u.path = unescape(u.path) : (u.path = escape(u.path), u.scheme !== void 0 && (u.path = u.path.split("%3A").join(":")))), p.reference !== "suffix" && u.scheme && y.push(u.scheme, ":");
    const b = i(u);
    if (b !== void 0 && (p.reference !== "suffix" && y.push("//"), y.push(b), u.path && u.path.charAt(0) !== "/" && y.push("/")), u.path !== void 0) {
      let E = u.path;
      !p.absolutePath && (!w || !w.absolutePath) && (E = r(E)), b === void 0 && (E = E.replace(/^\/\//u, "/%2F")), y.push(E);
    }
    return u.query !== void 0 && y.push("?", u.query), u.fragment !== void 0 && y.push("#", u.fragment), y.join("");
  }
  const m = Array.from({ length: 127 }, (h, v) => /[^!"$&'()*+,\-.;=_`a-z{}~]/u.test(String.fromCharCode(v)));
  function d(h) {
    let v = 0;
    for (let u = 0, p = h.length; u < p; ++u)
      if (v = h.charCodeAt(u), v > 126 || m[v])
        return !0;
    return !1;
  }
  const g = /^(?:([^#/:?]+):)?(?:\/\/((?:([^#/?@]*)@)?(\[[^#/?\]]+\]|[^#/:?]*)(?::(\d*))?))?([^#?]*)(?:\?([^#]*))?(?:#((?:.|[\n\r])*))?/u;
  function P(h, v) {
    const u = Object.assign({}, v), p = {
      scheme: void 0,
      userinfo: void 0,
      host: "",
      port: void 0,
      path: "",
      query: void 0,
      fragment: void 0
    }, y = h.indexOf("%") !== -1;
    let w = !1;
    u.reference === "suffix" && (h = (u.scheme ? u.scheme + ":" : "") + "//" + h);
    const b = h.match(g);
    if (b) {
      if (p.scheme = b[1], p.userinfo = b[3], p.host = b[4], p.port = parseInt(b[5], 10), p.path = b[6] || "", p.query = b[7], p.fragment = b[8], isNaN(p.port) && (p.port = b[5]), p.host) {
        const S = t(p.host);
        if (S.isIPV4 === !1) {
          const O = e(S.host);
          p.host = O.host.toLowerCase(), w = O.isIPV6;
        } else
          p.host = S.host, w = !0;
      }
      p.scheme === void 0 && p.userinfo === void 0 && p.host === void 0 && p.port === void 0 && p.query === void 0 && !p.path ? p.reference = "same-document" : p.scheme === void 0 ? p.reference = "relative" : p.fragment === void 0 ? p.reference = "absolute" : p.reference = "uri", u.reference && u.reference !== "suffix" && u.reference !== p.reference && (p.error = p.error || "URI is not a " + u.reference + " reference.");
      const E = n[(u.scheme || p.scheme || "").toLowerCase()];
      if (!u.unicodeSupport && (!E || !E.unicodeSupport) && p.host && (u.domainHost || E && E.domainHost) && w === !1 && d(p.host))
        try {
          p.host = URL.domainToASCII(p.host.toLowerCase());
        } catch (S) {
          p.error = p.error || "Host's domain name can not be converted to ASCII: " + S;
        }
      (!E || E && !E.skipNormalize) && (y && p.scheme !== void 0 && (p.scheme = unescape(p.scheme)), y && p.host !== void 0 && (p.host = unescape(p.host)), p.path && (p.path = escape(unescape(p.path))), p.fragment && (p.fragment = encodeURI(decodeURIComponent(p.fragment)))), E && E.parse && E.parse(p, u);
    } else
      p.error = p.error || "URI can not be parsed.";
    return p;
  }
  const _ = {
    SCHEMES: n,
    normalize: a,
    resolve: o,
    resolveComponents: l,
    equal: c,
    serialize: f,
    parse: P
  };
  return Wr.exports = _, Wr.exports.default = _, Wr.exports.fastUri = _, Wr.exports;
}
var zs;
function fd() {
  if (zs) return En;
  zs = 1, Object.defineProperty(En, "__esModule", { value: !0 });
  const e = dd();
  return e.code = 'require("ajv/dist/runtime/uri").default', En.default = e, En;
}
var Ks;
function hd() {
  return Ks || (Ks = 1, function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.CodeGen = e.Name = e.nil = e.stringify = e.str = e._ = e.KeywordCxt = void 0;
    var t = Oi();
    Object.defineProperty(e, "KeywordCxt", { enumerable: !0, get: function() {
      return t.KeywordCxt;
    } });
    var r = se();
    Object.defineProperty(e, "_", { enumerable: !0, get: function() {
      return r._;
    } }), Object.defineProperty(e, "str", { enumerable: !0, get: function() {
      return r.str;
    } }), Object.defineProperty(e, "stringify", { enumerable: !0, get: function() {
      return r.stringify;
    } }), Object.defineProperty(e, "nil", { enumerable: !0, get: function() {
      return r.nil;
    } }), Object.defineProperty(e, "Name", { enumerable: !0, get: function() {
      return r.Name;
    } }), Object.defineProperty(e, "CodeGen", { enumerable: !0, get: function() {
      return r.CodeGen;
    } });
    const i = Pa(), s = Ti(), n = Bu(), a = wa(), o = se(), l = Di(), c = gi(), f = fe(), m = od, d = fd(), g = (q, j) => new RegExp(q, j);
    g.code = "new RegExp";
    const P = ["removeAdditional", "useDefaults", "coerceTypes"], _ = /* @__PURE__ */ new Set([
      "validate",
      "serialize",
      "parse",
      "wrapper",
      "root",
      "schema",
      "keyword",
      "pattern",
      "formats",
      "validate$data",
      "func",
      "obj",
      "Error"
    ]), h = {
      errorDataPath: "",
      format: "`validateFormats: false` can be used instead.",
      nullable: '"nullable" keyword is supported by default.',
      jsonPointers: "Deprecated jsPropertySyntax can be used instead.",
      extendRefs: "Deprecated ignoreKeywordsWithRef can be used instead.",
      missingRefs: "Pass empty schema with $id that should be ignored to ajv.addSchema.",
      processCode: "Use option `code: {process: (code, schemaEnv: object) => string}`",
      sourceCode: "Use option `code: {source: true}`",
      strictDefaults: "It is default now, see option `strict`.",
      strictKeywords: "It is default now, see option `strict`.",
      uniqueItems: '"uniqueItems" keyword is always validated.',
      unknownFormats: "Disable strict mode or pass `true` to `ajv.addFormat` (or `formats` option).",
      cache: "Map is used as cache, schema object as key.",
      serialize: "Map is used as cache, schema object as key.",
      ajvErrors: "It is default now."
    }, v = {
      ignoreKeywordsWithRef: "",
      jsPropertySyntax: "",
      unicode: '"minLength"/"maxLength" account for unicode characters by default.'
    }, u = 200;
    function p(q) {
      var j, A, M, $, D, I, J, Y, ce, ue, T, N, k, V, Q, ae, ye, Je, Re, Me, Pe, or, Ue, ji, Ri;
      const $r = q.strict, Mi = (j = q.code) === null || j === void 0 ? void 0 : j.optimize, $a = Mi === !0 || Mi === void 0 ? 1 : Mi || 0, Ea = (M = (A = q.code) === null || A === void 0 ? void 0 : A.regExp) !== null && M !== void 0 ? M : g, nl = ($ = q.uriResolver) !== null && $ !== void 0 ? $ : d.default;
      return {
        strictSchema: (I = (D = q.strictSchema) !== null && D !== void 0 ? D : $r) !== null && I !== void 0 ? I : !0,
        strictNumbers: (Y = (J = q.strictNumbers) !== null && J !== void 0 ? J : $r) !== null && Y !== void 0 ? Y : !0,
        strictTypes: (ue = (ce = q.strictTypes) !== null && ce !== void 0 ? ce : $r) !== null && ue !== void 0 ? ue : "log",
        strictTuples: (N = (T = q.strictTuples) !== null && T !== void 0 ? T : $r) !== null && N !== void 0 ? N : "log",
        strictRequired: (V = (k = q.strictRequired) !== null && k !== void 0 ? k : $r) !== null && V !== void 0 ? V : !1,
        code: q.code ? { ...q.code, optimize: $a, regExp: Ea } : { optimize: $a, regExp: Ea },
        loopRequired: (Q = q.loopRequired) !== null && Q !== void 0 ? Q : u,
        loopEnum: (ae = q.loopEnum) !== null && ae !== void 0 ? ae : u,
        meta: (ye = q.meta) !== null && ye !== void 0 ? ye : !0,
        messages: (Je = q.messages) !== null && Je !== void 0 ? Je : !0,
        inlineRefs: (Re = q.inlineRefs) !== null && Re !== void 0 ? Re : !0,
        schemaId: (Me = q.schemaId) !== null && Me !== void 0 ? Me : "$id",
        addUsedSchema: (Pe = q.addUsedSchema) !== null && Pe !== void 0 ? Pe : !0,
        validateSchema: (or = q.validateSchema) !== null && or !== void 0 ? or : !0,
        validateFormats: (Ue = q.validateFormats) !== null && Ue !== void 0 ? Ue : !0,
        unicodeRegExp: (ji = q.unicodeRegExp) !== null && ji !== void 0 ? ji : !0,
        int32range: (Ri = q.int32range) !== null && Ri !== void 0 ? Ri : !0,
        uriResolver: nl
      };
    }
    class y {
      constructor(j = {}) {
        this.schemas = {}, this.refs = {}, this.formats = {}, this._compilations = /* @__PURE__ */ new Set(), this._loading = {}, this._cache = /* @__PURE__ */ new Map(), j = this.opts = { ...j, ...p(j) };
        const { es5: A, lines: M } = this.opts.code;
        this.scope = new o.ValueScope({ scope: {}, prefixes: _, es5: A, lines: M }), this.logger = G(j.logger);
        const $ = j.validateFormats;
        j.validateFormats = !1, this.RULES = (0, n.getRules)(), w.call(this, h, j, "NOT SUPPORTED"), w.call(this, v, j, "DEPRECATED", "warn"), this._metaOpts = C.call(this), j.formats && S.call(this), this._addVocabularies(), this._addDefaultMetaSchema(), j.keywords && O.call(this, j.keywords), typeof j.meta == "object" && this.addMetaSchema(j.meta), E.call(this), j.validateFormats = $;
      }
      _addVocabularies() {
        this.addKeyword("$async");
      }
      _addDefaultMetaSchema() {
        const { $data: j, meta: A, schemaId: M } = this.opts;
        let $ = m;
        M === "id" && ($ = { ...m }, $.id = $.$id, delete $.$id), A && j && this.addMetaSchema($, $[M], !1);
      }
      defaultMeta() {
        const { meta: j, schemaId: A } = this.opts;
        return this.opts.defaultMeta = typeof j == "object" ? j[A] || j : void 0;
      }
      validate(j, A) {
        let M;
        if (typeof j == "string") {
          if (M = this.getSchema(j), !M)
            throw new Error(`no schema with key or ref "${j}"`);
        } else
          M = this.compile(j);
        const $ = M(A);
        return "$async" in M || (this.errors = M.errors), $;
      }
      compile(j, A) {
        const M = this._addSchema(j, A);
        return M.validate || this._compileSchemaEnv(M);
      }
      compileAsync(j, A) {
        if (typeof this.opts.loadSchema != "function")
          throw new Error("options.loadSchema should be a function");
        const { loadSchema: M } = this.opts;
        return $.call(this, j, A);
        async function $(ue, T) {
          await D.call(this, ue.$schema);
          const N = this._addSchema(ue, T);
          return N.validate || I.call(this, N);
        }
        async function D(ue) {
          ue && !this.getSchema(ue) && await $.call(this, { $ref: ue }, !0);
        }
        async function I(ue) {
          try {
            return this._compileSchemaEnv(ue);
          } catch (T) {
            if (!(T instanceof s.default))
              throw T;
            return J.call(this, T), await Y.call(this, T.missingSchema), I.call(this, ue);
          }
        }
        function J({ missingSchema: ue, missingRef: T }) {
          if (this.refs[ue])
            throw new Error(`AnySchema ${ue} is loaded but ${T} cannot be resolved`);
        }
        async function Y(ue) {
          const T = await ce.call(this, ue);
          this.refs[ue] || await D.call(this, T.$schema), this.refs[ue] || this.addSchema(T, ue, A);
        }
        async function ce(ue) {
          const T = this._loading[ue];
          if (T)
            return T;
          try {
            return await (this._loading[ue] = M(ue));
          } finally {
            delete this._loading[ue];
          }
        }
      }
      // Adds schema to the instance
      addSchema(j, A, M, $ = this.opts.validateSchema) {
        if (Array.isArray(j)) {
          for (const I of j)
            this.addSchema(I, void 0, M, $);
          return this;
        }
        let D;
        if (typeof j == "object") {
          const { schemaId: I } = this.opts;
          if (D = j[I], D !== void 0 && typeof D != "string")
            throw new Error(`schema ${I} must be string`);
        }
        return A = (0, l.normalizeId)(A || D), this._checkUnique(A), this.schemas[A] = this._addSchema(j, M, A, $, !0), this;
      }
      // Add schema that will be used to validate other schemas
      // options in META_IGNORE_OPTIONS are alway set to false
      addMetaSchema(j, A, M = this.opts.validateSchema) {
        return this.addSchema(j, A, !0, M), this;
      }
      //  Validate schema against its meta-schema
      validateSchema(j, A) {
        if (typeof j == "boolean")
          return !0;
        let M;
        if (M = j.$schema, M !== void 0 && typeof M != "string")
          throw new Error("$schema must be a string");
        if (M = M || this.opts.defaultMeta || this.defaultMeta(), !M)
          return this.logger.warn("meta-schema not available"), this.errors = null, !0;
        const $ = this.validate(M, j);
        if (!$ && A) {
          const D = "schema is invalid: " + this.errorsText();
          if (this.opts.validateSchema === "log")
            this.logger.error(D);
          else
            throw new Error(D);
        }
        return $;
      }
      // Get compiled schema by `key` or `ref`.
      // (`key` that was passed to `addSchema` or full schema reference - `schema.$id` or resolved id)
      getSchema(j) {
        let A;
        for (; typeof (A = b.call(this, j)) == "string"; )
          j = A;
        if (A === void 0) {
          const { schemaId: M } = this.opts, $ = new a.SchemaEnv({ schema: {}, schemaId: M });
          if (A = a.resolveSchema.call(this, $, j), !A)
            return;
          this.refs[j] = A;
        }
        return A.validate || this._compileSchemaEnv(A);
      }
      // Remove cached schema(s).
      // If no parameter is passed all schemas but meta-schemas are removed.
      // If RegExp is passed all schemas with key/id matching pattern but meta-schemas are removed.
      // Even if schema is referenced by other schemas it still can be removed as other schemas have local references.
      removeSchema(j) {
        if (j instanceof RegExp)
          return this._removeAllSchemas(this.schemas, j), this._removeAllSchemas(this.refs, j), this;
        switch (typeof j) {
          case "undefined":
            return this._removeAllSchemas(this.schemas), this._removeAllSchemas(this.refs), this._cache.clear(), this;
          case "string": {
            const A = b.call(this, j);
            return typeof A == "object" && this._cache.delete(A.schema), delete this.schemas[j], delete this.refs[j], this;
          }
          case "object": {
            const A = j;
            this._cache.delete(A);
            let M = j[this.opts.schemaId];
            return M && (M = (0, l.normalizeId)(M), delete this.schemas[M], delete this.refs[M]), this;
          }
          default:
            throw new Error("ajv.removeSchema: invalid parameter");
        }
      }
      // add "vocabulary" - a collection of keywords
      addVocabulary(j) {
        for (const A of j)
          this.addKeyword(A);
        return this;
      }
      addKeyword(j, A) {
        let M;
        if (typeof j == "string")
          M = j, typeof A == "object" && (this.logger.warn("these parameters are deprecated, see docs for addKeyword"), A.keyword = M);
        else if (typeof j == "object" && A === void 0) {
          if (A = j, M = A.keyword, Array.isArray(M) && !M.length)
            throw new Error("addKeywords: keyword must be string or non-empty array");
        } else
          throw new Error("invalid addKeywords parameters");
        if (H.call(this, M, A), !A)
          return (0, f.eachItem)(M, (D) => B.call(this, D)), this;
        Z.call(this, A);
        const $ = {
          ...A,
          type: (0, c.getJSONTypes)(A.type),
          schemaType: (0, c.getJSONTypes)(A.schemaType)
        };
        return (0, f.eachItem)(M, $.type.length === 0 ? (D) => B.call(this, D, $) : (D) => $.type.forEach((I) => B.call(this, D, $, I))), this;
      }
      getKeyword(j) {
        const A = this.RULES.all[j];
        return typeof A == "object" ? A.definition : !!A;
      }
      // Remove keyword
      removeKeyword(j) {
        const { RULES: A } = this;
        delete A.keywords[j], delete A.all[j];
        for (const M of A.rules) {
          const $ = M.rules.findIndex((D) => D.keyword === j);
          $ >= 0 && M.rules.splice($, 1);
        }
        return this;
      }
      // Add format
      addFormat(j, A) {
        return typeof A == "string" && (A = new RegExp(A)), this.formats[j] = A, this;
      }
      errorsText(j = this.errors, { separator: A = ", ", dataVar: M = "data" } = {}) {
        return !j || j.length === 0 ? "No errors" : j.map(($) => `${M}${$.instancePath} ${$.message}`).reduce(($, D) => $ + A + D);
      }
      $dataMetaSchema(j, A) {
        const M = this.RULES.all;
        j = JSON.parse(JSON.stringify(j));
        for (const $ of A) {
          const D = $.split("/").slice(1);
          let I = j;
          for (const J of D)
            I = I[J];
          for (const J in M) {
            const Y = M[J];
            if (typeof Y != "object")
              continue;
            const { $data: ce } = Y.definition, ue = I[J];
            ce && ue && (I[J] = oe(ue));
          }
        }
        return j;
      }
      _removeAllSchemas(j, A) {
        for (const M in j) {
          const $ = j[M];
          (!A || A.test(M)) && (typeof $ == "string" ? delete j[M] : $ && !$.meta && (this._cache.delete($.schema), delete j[M]));
        }
      }
      _addSchema(j, A, M, $ = this.opts.validateSchema, D = this.opts.addUsedSchema) {
        let I;
        const { schemaId: J } = this.opts;
        if (typeof j == "object")
          I = j[J];
        else {
          if (this.opts.jtd)
            throw new Error("schema must be object");
          if (typeof j != "boolean")
            throw new Error("schema must be object or boolean");
        }
        let Y = this._cache.get(j);
        if (Y !== void 0)
          return Y;
        M = (0, l.normalizeId)(I || M);
        const ce = l.getSchemaRefs.call(this, j, M);
        return Y = new a.SchemaEnv({ schema: j, schemaId: J, meta: A, baseId: M, localRefs: ce }), this._cache.set(Y.schema, Y), D && !M.startsWith("#") && (M && this._checkUnique(M), this.refs[M] = Y), $ && this.validateSchema(j, !0), Y;
      }
      _checkUnique(j) {
        if (this.schemas[j] || this.refs[j])
          throw new Error(`schema with key or id "${j}" already exists`);
      }
      _compileSchemaEnv(j) {
        if (j.meta ? this._compileMetaSchema(j) : a.compileSchema.call(this, j), !j.validate)
          throw new Error("ajv implementation error");
        return j.validate;
      }
      _compileMetaSchema(j) {
        const A = this.opts;
        this.opts = this._metaOpts;
        try {
          a.compileSchema.call(this, j);
        } finally {
          this.opts = A;
        }
      }
    }
    y.ValidationError = i.default, y.MissingRefError = s.default, e.default = y;
    function w(q, j, A, M = "error") {
      for (const $ in q) {
        const D = $;
        D in j && this.logger[M](`${A}: option ${$}. ${q[D]}`);
      }
    }
    function b(q) {
      return q = (0, l.normalizeId)(q), this.schemas[q] || this.refs[q];
    }
    function E() {
      const q = this.opts.schemas;
      if (q)
        if (Array.isArray(q))
          this.addSchema(q);
        else
          for (const j in q)
            this.addSchema(q[j], j);
    }
    function S() {
      for (const q in this.opts.formats) {
        const j = this.opts.formats[q];
        j && this.addFormat(q, j);
      }
    }
    function O(q) {
      if (Array.isArray(q)) {
        this.addVocabulary(q);
        return;
      }
      this.logger.warn("keywords option as map is deprecated, pass array");
      for (const j in q) {
        const A = q[j];
        A.keyword || (A.keyword = j), this.addKeyword(A);
      }
    }
    function C() {
      const q = { ...this.opts };
      for (const j of P)
        delete q[j];
      return q;
    }
    const U = { log() {
    }, warn() {
    }, error() {
    } };
    function G(q) {
      if (q === !1)
        return U;
      if (q === void 0)
        return console;
      if (q.log && q.warn && q.error)
        return q;
      throw new Error("logger must implement log, warn and error methods");
    }
    const F = /^[a-z_$][a-z0-9_$:-]*$/i;
    function H(q, j) {
      const { RULES: A } = this;
      if ((0, f.eachItem)(q, (M) => {
        if (A.keywords[M])
          throw new Error(`Keyword ${M} is already defined`);
        if (!F.test(M))
          throw new Error(`Keyword ${M} has invalid name`);
      }), !!j && j.$data && !("code" in j || "validate" in j))
        throw new Error('$data keyword must have "code" or "validate" function');
    }
    function B(q, j, A) {
      var M;
      const $ = j == null ? void 0 : j.post;
      if (A && $)
        throw new Error('keyword with "post" flag cannot have "type"');
      const { RULES: D } = this;
      let I = $ ? D.post : D.rules.find(({ type: Y }) => Y === A);
      if (I || (I = { type: A, rules: [] }, D.rules.push(I)), D.keywords[q] = !0, !j)
        return;
      const J = {
        keyword: q,
        definition: {
          ...j,
          type: (0, c.getJSONTypes)(j.type),
          schemaType: (0, c.getJSONTypes)(j.schemaType)
        }
      };
      j.before ? x.call(this, I, J, j.before) : I.rules.push(J), D.all[q] = J, (M = j.implements) === null || M === void 0 || M.forEach((Y) => this.addKeyword(Y));
    }
    function x(q, j, A) {
      const M = q.rules.findIndex(($) => $.keyword === A);
      M >= 0 ? q.rules.splice(M, 0, j) : (q.rules.push(j), this.logger.warn(`rule ${A} is not defined`));
    }
    function Z(q) {
      let { metaSchema: j } = q;
      j !== void 0 && (q.$data && this.opts.$data && (j = oe(j)), q.validateSchema = this.compile(j, !0));
    }
    const X = {
      $ref: "https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#"
    };
    function oe(q) {
      return { anyOf: [q, X] };
    }
  }(ki)), ki;
}
var Sn = {}, Dn = {}, On = {}, Js;
function md() {
  if (Js) return On;
  Js = 1, Object.defineProperty(On, "__esModule", { value: !0 });
  const e = {
    keyword: "id",
    code() {
      throw new Error('NOT SUPPORTED: keyword "id", use "$id" for schema ID');
    }
  };
  return On.default = e, On;
}
var Ft = {}, Bs;
function pd() {
  if (Bs) return Ft;
  Bs = 1, Object.defineProperty(Ft, "__esModule", { value: !0 }), Ft.callRef = Ft.getValidate = void 0;
  const e = Ti(), t = tt(), r = se(), i = Kt(), s = wa(), n = fe(), a = {
    keyword: "$ref",
    schemaType: "string",
    code(c) {
      const { gen: f, schema: m, it: d } = c, { baseId: g, schemaEnv: P, validateName: _, opts: h, self: v } = d, { root: u } = P;
      if ((m === "#" || m === "#/") && g === u.baseId)
        return y();
      const p = s.resolveRef.call(v, u, g, m);
      if (p === void 0)
        throw new e.default(d.opts.uriResolver, g, m);
      if (p instanceof s.SchemaEnv)
        return w(p);
      return b(p);
      function y() {
        if (P === u)
          return l(c, _, P, P.$async);
        const E = f.scopeValue("root", { ref: u });
        return l(c, (0, r._)`${E}.validate`, u, u.$async);
      }
      function w(E) {
        const S = o(c, E);
        l(c, S, E, E.$async);
      }
      function b(E) {
        const S = f.scopeValue("schema", h.code.source === !0 ? { ref: E, code: (0, r.stringify)(E) } : { ref: E }), O = f.name("valid"), C = c.subschema({
          schema: E,
          dataTypes: [],
          schemaPath: r.nil,
          topSchemaRef: S,
          errSchemaPath: m
        }, O);
        c.mergeEvaluated(C), c.ok(O);
      }
    }
  };
  function o(c, f) {
    const { gen: m } = c;
    return f.validate ? m.scopeValue("validate", { ref: f.validate }) : (0, r._)`${m.scopeValue("wrapper", { ref: f })}.validate`;
  }
  Ft.getValidate = o;
  function l(c, f, m, d) {
    const { gen: g, it: P } = c, { allErrors: _, schemaEnv: h, opts: v } = P, u = v.passContext ? i.default.this : r.nil;
    d ? p() : y();
    function p() {
      if (!h.$async)
        throw new Error("async schema referenced by sync schema");
      const E = g.let("valid");
      g.try(() => {
        g.code((0, r._)`await ${(0, t.callValidateCode)(c, f, u)}`), b(f), _ || g.assign(E, !0);
      }, (S) => {
        g.if((0, r._)`!(${S} instanceof ${P.ValidationError})`, () => g.throw(S)), w(S), _ || g.assign(E, !1);
      }), c.ok(E);
    }
    function y() {
      c.result((0, t.callValidateCode)(c, f, u), () => b(f), () => w(f));
    }
    function w(E) {
      const S = (0, r._)`${E}.errors`;
      g.assign(i.default.vErrors, (0, r._)`${i.default.vErrors} === null ? ${S} : ${i.default.vErrors}.concat(${S})`), g.assign(i.default.errors, (0, r._)`${i.default.vErrors}.length`);
    }
    function b(E) {
      var S;
      if (!P.opts.unevaluated)
        return;
      const O = (S = m == null ? void 0 : m.validate) === null || S === void 0 ? void 0 : S.evaluated;
      if (P.props !== !0)
        if (O && !O.dynamicProps)
          O.props !== void 0 && (P.props = n.mergeEvaluated.props(g, O.props, P.props));
        else {
          const C = g.var("props", (0, r._)`${E}.evaluated.props`);
          P.props = n.mergeEvaluated.props(g, C, P.props, r.Name);
        }
      if (P.items !== !0)
        if (O && !O.dynamicItems)
          O.items !== void 0 && (P.items = n.mergeEvaluated.items(g, O.items, P.items));
        else {
          const C = g.var("items", (0, r._)`${E}.evaluated.items`);
          P.items = n.mergeEvaluated.items(g, C, P.items, r.Name);
        }
    }
  }
  return Ft.callRef = l, Ft.default = a, Ft;
}
var Ys;
function vd() {
  if (Ys) return Dn;
  Ys = 1, Object.defineProperty(Dn, "__esModule", { value: !0 });
  const e = md(), t = pd(), r = [
    "$schema",
    "$id",
    "$defs",
    "$vocabulary",
    { keyword: "$comment" },
    "definitions",
    e.default,
    t.default
  ];
  return Dn.default = r, Dn;
}
var Tn = {}, jn = {}, Xs;
function gd() {
  if (Xs) return jn;
  Xs = 1, Object.defineProperty(jn, "__esModule", { value: !0 });
  const e = se(), t = e.operators, r = {
    maximum: { okStr: "<=", ok: t.LTE, fail: t.GT },
    minimum: { okStr: ">=", ok: t.GTE, fail: t.LT },
    exclusiveMaximum: { okStr: "<", ok: t.LT, fail: t.GTE },
    exclusiveMinimum: { okStr: ">", ok: t.GT, fail: t.LTE }
  }, i = {
    message: ({ keyword: n, schemaCode: a }) => (0, e.str)`must be ${r[n].okStr} ${a}`,
    params: ({ keyword: n, schemaCode: a }) => (0, e._)`{comparison: ${r[n].okStr}, limit: ${a}}`
  }, s = {
    keyword: Object.keys(r),
    type: "number",
    schemaType: "number",
    $data: !0,
    error: i,
    code(n) {
      const { keyword: a, data: o, schemaCode: l } = n;
      n.fail$data((0, e._)`${o} ${r[a].fail} ${l} || isNaN(${o})`);
    }
  };
  return jn.default = s, jn;
}
var Rn = {}, Qs;
function _d() {
  if (Qs) return Rn;
  Qs = 1, Object.defineProperty(Rn, "__esModule", { value: !0 });
  const e = se(), r = {
    keyword: "multipleOf",
    type: "number",
    schemaType: "number",
    $data: !0,
    error: {
      message: ({ schemaCode: i }) => (0, e.str)`must be multiple of ${i}`,
      params: ({ schemaCode: i }) => (0, e._)`{multipleOf: ${i}}`
    },
    code(i) {
      const { gen: s, data: n, schemaCode: a, it: o } = i, l = o.opts.multipleOfPrecision, c = s.let("res"), f = l ? (0, e._)`Math.abs(Math.round(${c}) - ${c}) > 1e-${l}` : (0, e._)`${c} !== parseInt(${c})`;
      i.fail$data((0, e._)`(${a} === 0 || (${c} = ${n}/${a}, ${f}))`);
    }
  };
  return Rn.default = r, Rn;
}
var Mn = {}, Nn = {}, Zs;
function yd() {
  if (Zs) return Nn;
  Zs = 1, Object.defineProperty(Nn, "__esModule", { value: !0 });
  function e(t) {
    const r = t.length;
    let i = 0, s = 0, n;
    for (; s < r; )
      i++, n = t.charCodeAt(s++), n >= 55296 && n <= 56319 && s < r && (n = t.charCodeAt(s), (n & 64512) === 56320 && s++);
    return i;
  }
  return Nn.default = e, e.code = 'require("ajv/dist/runtime/ucs2length").default', Nn;
}
var xs;
function Pd() {
  if (xs) return Mn;
  xs = 1, Object.defineProperty(Mn, "__esModule", { value: !0 });
  const e = se(), t = fe(), r = yd(), s = {
    keyword: ["maxLength", "minLength"],
    type: "string",
    schemaType: "number",
    $data: !0,
    error: {
      message({ keyword: n, schemaCode: a }) {
        const o = n === "maxLength" ? "more" : "fewer";
        return (0, e.str)`must NOT have ${o} than ${a} characters`;
      },
      params: ({ schemaCode: n }) => (0, e._)`{limit: ${n}}`
    },
    code(n) {
      const { keyword: a, data: o, schemaCode: l, it: c } = n, f = a === "maxLength" ? e.operators.GT : e.operators.LT, m = c.opts.unicode === !1 ? (0, e._)`${o}.length` : (0, e._)`${(0, t.useFunc)(n.gen, r.default)}(${o})`;
      n.fail$data((0, e._)`${m} ${f} ${l}`);
    }
  };
  return Mn.default = s, Mn;
}
var In = {}, eo;
function wd() {
  if (eo) return In;
  eo = 1, Object.defineProperty(In, "__esModule", { value: !0 });
  const e = tt(), t = se(), i = {
    keyword: "pattern",
    type: "string",
    schemaType: "string",
    $data: !0,
    error: {
      message: ({ schemaCode: s }) => (0, t.str)`must match pattern "${s}"`,
      params: ({ schemaCode: s }) => (0, t._)`{pattern: ${s}}`
    },
    code(s) {
      const { data: n, $data: a, schema: o, schemaCode: l, it: c } = s, f = c.opts.unicodeRegExp ? "u" : "", m = a ? (0, t._)`(new RegExp(${l}, ${f}))` : (0, e.usePattern)(s, o);
      s.fail$data((0, t._)`!${m}.test(${n})`);
    }
  };
  return In.default = i, In;
}
var Cn = {}, to;
function bd() {
  if (to) return Cn;
  to = 1, Object.defineProperty(Cn, "__esModule", { value: !0 });
  const e = se(), r = {
    keyword: ["maxProperties", "minProperties"],
    type: "object",
    schemaType: "number",
    $data: !0,
    error: {
      message({ keyword: i, schemaCode: s }) {
        const n = i === "maxProperties" ? "more" : "fewer";
        return (0, e.str)`must NOT have ${n} than ${s} properties`;
      },
      params: ({ schemaCode: i }) => (0, e._)`{limit: ${i}}`
    },
    code(i) {
      const { keyword: s, data: n, schemaCode: a } = i, o = s === "maxProperties" ? e.operators.GT : e.operators.LT;
      i.fail$data((0, e._)`Object.keys(${n}).length ${o} ${a}`);
    }
  };
  return Cn.default = r, Cn;
}
var An = {}, ro;
function $d() {
  if (ro) return An;
  ro = 1, Object.defineProperty(An, "__esModule", { value: !0 });
  const e = tt(), t = se(), r = fe(), s = {
    keyword: "required",
    type: "object",
    schemaType: "array",
    $data: !0,
    error: {
      message: ({ params: { missingProperty: n } }) => (0, t.str)`must have required property '${n}'`,
      params: ({ params: { missingProperty: n } }) => (0, t._)`{missingProperty: ${n}}`
    },
    code(n) {
      const { gen: a, schema: o, schemaCode: l, data: c, $data: f, it: m } = n, { opts: d } = m;
      if (!f && o.length === 0)
        return;
      const g = o.length >= d.loopRequired;
      if (m.allErrors ? P() : _(), d.strictRequired) {
        const u = n.parentSchema.properties, { definedProperties: p } = n.it;
        for (const y of o)
          if ((u == null ? void 0 : u[y]) === void 0 && !p.has(y)) {
            const w = m.schemaEnv.baseId + m.errSchemaPath, b = `required property "${y}" is not defined at "${w}" (strictRequired)`;
            (0, r.checkStrictMode)(m, b, m.opts.strictRequired);
          }
      }
      function P() {
        if (g || f)
          n.block$data(t.nil, h);
        else
          for (const u of o)
            (0, e.checkReportMissingProp)(n, u);
      }
      function _() {
        const u = a.let("missing");
        if (g || f) {
          const p = a.let("valid", !0);
          n.block$data(p, () => v(u, p)), n.ok(p);
        } else
          a.if((0, e.checkMissingProp)(n, o, u)), (0, e.reportMissingProp)(n, u), a.else();
      }
      function h() {
        a.forOf("prop", l, (u) => {
          n.setParams({ missingProperty: u }), a.if((0, e.noPropertyInData)(a, c, u, d.ownProperties), () => n.error());
        });
      }
      function v(u, p) {
        n.setParams({ missingProperty: u }), a.forOf(u, l, () => {
          a.assign(p, (0, e.propertyInData)(a, c, u, d.ownProperties)), a.if((0, t.not)(p), () => {
            n.error(), a.break();
          });
        }, t.nil);
      }
    }
  };
  return An.default = s, An;
}
var kn = {}, no;
function Ed() {
  if (no) return kn;
  no = 1, Object.defineProperty(kn, "__esModule", { value: !0 });
  const e = se(), r = {
    keyword: ["maxItems", "minItems"],
    type: "array",
    schemaType: "number",
    $data: !0,
    error: {
      message({ keyword: i, schemaCode: s }) {
        const n = i === "maxItems" ? "more" : "fewer";
        return (0, e.str)`must NOT have ${n} than ${s} items`;
      },
      params: ({ schemaCode: i }) => (0, e._)`{limit: ${i}}`
    },
    code(i) {
      const { keyword: s, data: n, schemaCode: a } = i, o = s === "maxItems" ? e.operators.GT : e.operators.LT;
      i.fail$data((0, e._)`${n}.length ${o} ${a}`);
    }
  };
  return kn.default = r, kn;
}
var qn = {}, Un = {}, io;
function ba() {
  if (io) return Un;
  io = 1, Object.defineProperty(Un, "__esModule", { value: !0 });
  const e = Xu();
  return e.code = 'require("ajv/dist/runtime/equal").default', Un.default = e, Un;
}
var ao;
function Sd() {
  if (ao) return qn;
  ao = 1, Object.defineProperty(qn, "__esModule", { value: !0 });
  const e = gi(), t = se(), r = fe(), i = ba(), n = {
    keyword: "uniqueItems",
    type: "array",
    schemaType: "boolean",
    $data: !0,
    error: {
      message: ({ params: { i: a, j: o } }) => (0, t.str)`must NOT have duplicate items (items ## ${o} and ${a} are identical)`,
      params: ({ params: { i: a, j: o } }) => (0, t._)`{i: ${a}, j: ${o}}`
    },
    code(a) {
      const { gen: o, data: l, $data: c, schema: f, parentSchema: m, schemaCode: d, it: g } = a;
      if (!c && !f)
        return;
      const P = o.let("valid"), _ = m.items ? (0, e.getSchemaTypes)(m.items) : [];
      a.block$data(P, h, (0, t._)`${d} === false`), a.ok(P);
      function h() {
        const y = o.let("i", (0, t._)`${l}.length`), w = o.let("j");
        a.setParams({ i: y, j: w }), o.assign(P, !0), o.if((0, t._)`${y} > 1`, () => (v() ? u : p)(y, w));
      }
      function v() {
        return _.length > 0 && !_.some((y) => y === "object" || y === "array");
      }
      function u(y, w) {
        const b = o.name("item"), E = (0, e.checkDataTypes)(_, b, g.opts.strictNumbers, e.DataType.Wrong), S = o.const("indices", (0, t._)`{}`);
        o.for((0, t._)`;${y}--;`, () => {
          o.let(b, (0, t._)`${l}[${y}]`), o.if(E, (0, t._)`continue`), _.length > 1 && o.if((0, t._)`typeof ${b} == "string"`, (0, t._)`${b} += "_"`), o.if((0, t._)`typeof ${S}[${b}] == "number"`, () => {
            o.assign(w, (0, t._)`${S}[${b}]`), a.error(), o.assign(P, !1).break();
          }).code((0, t._)`${S}[${b}] = ${y}`);
        });
      }
      function p(y, w) {
        const b = (0, r.useFunc)(o, i.default), E = o.name("outer");
        o.label(E).for((0, t._)`;${y}--;`, () => o.for((0, t._)`${w} = ${y}; ${w}--;`, () => o.if((0, t._)`${b}(${l}[${y}], ${l}[${w}])`, () => {
          a.error(), o.assign(P, !1).break(E);
        })));
      }
    }
  };
  return qn.default = n, qn;
}
var Ln = {}, so;
function Dd() {
  if (so) return Ln;
  so = 1, Object.defineProperty(Ln, "__esModule", { value: !0 });
  const e = se(), t = fe(), r = ba(), s = {
    keyword: "const",
    $data: !0,
    error: {
      message: "must be equal to constant",
      params: ({ schemaCode: n }) => (0, e._)`{allowedValue: ${n}}`
    },
    code(n) {
      const { gen: a, data: o, $data: l, schemaCode: c, schema: f } = n;
      l || f && typeof f == "object" ? n.fail$data((0, e._)`!${(0, t.useFunc)(a, r.default)}(${o}, ${c})`) : n.fail((0, e._)`${f} !== ${o}`);
    }
  };
  return Ln.default = s, Ln;
}
var Fn = {}, oo;
function Od() {
  if (oo) return Fn;
  oo = 1, Object.defineProperty(Fn, "__esModule", { value: !0 });
  const e = se(), t = fe(), r = ba(), s = {
    keyword: "enum",
    schemaType: "array",
    $data: !0,
    error: {
      message: "must be equal to one of the allowed values",
      params: ({ schemaCode: n }) => (0, e._)`{allowedValues: ${n}}`
    },
    code(n) {
      const { gen: a, data: o, $data: l, schema: c, schemaCode: f, it: m } = n;
      if (!l && c.length === 0)
        throw new Error("enum must have non-empty array");
      const d = c.length >= m.opts.loopEnum;
      let g;
      const P = () => g ?? (g = (0, t.useFunc)(a, r.default));
      let _;
      if (d || l)
        _ = a.let("valid"), n.block$data(_, h);
      else {
        if (!Array.isArray(c))
          throw new Error("ajv implementation error");
        const u = a.const("vSchema", f);
        _ = (0, e.or)(...c.map((p, y) => v(u, y)));
      }
      n.pass(_);
      function h() {
        a.assign(_, !1), a.forOf("v", f, (u) => a.if((0, e._)`${P()}(${o}, ${u})`, () => a.assign(_, !0).break()));
      }
      function v(u, p) {
        const y = c[p];
        return typeof y == "object" && y !== null ? (0, e._)`${P()}(${o}, ${u}[${p}])` : (0, e._)`${o} === ${y}`;
      }
    }
  };
  return Fn.default = s, Fn;
}
var uo;
function Td() {
  if (uo) return Tn;
  uo = 1, Object.defineProperty(Tn, "__esModule", { value: !0 });
  const e = gd(), t = _d(), r = Pd(), i = wd(), s = bd(), n = $d(), a = Ed(), o = Sd(), l = Dd(), c = Od(), f = [
    // number
    e.default,
    t.default,
    // string
    r.default,
    i.default,
    // object
    s.default,
    n.default,
    // array
    a.default,
    o.default,
    // any
    { keyword: "type", schemaType: ["string", "array"] },
    { keyword: "nullable", schemaType: "boolean" },
    l.default,
    c.default
  ];
  return Tn.default = f, Tn;
}
var Wn = {}, cr = {}, lo;
function Qu() {
  if (lo) return cr;
  lo = 1, Object.defineProperty(cr, "__esModule", { value: !0 }), cr.validateAdditionalItems = void 0;
  const e = se(), t = fe(), i = {
    keyword: "additionalItems",
    type: "array",
    schemaType: ["boolean", "object"],
    before: "uniqueItems",
    error: {
      message: ({ params: { len: n } }) => (0, e.str)`must NOT have more than ${n} items`,
      params: ({ params: { len: n } }) => (0, e._)`{limit: ${n}}`
    },
    code(n) {
      const { parentSchema: a, it: o } = n, { items: l } = a;
      if (!Array.isArray(l)) {
        (0, t.checkStrictMode)(o, '"additionalItems" is ignored when "items" is not an array of schemas');
        return;
      }
      s(n, l);
    }
  };
  function s(n, a) {
    const { gen: o, schema: l, data: c, keyword: f, it: m } = n;
    m.items = !0;
    const d = o.const("len", (0, e._)`${c}.length`);
    if (l === !1)
      n.setParams({ len: a.length }), n.pass((0, e._)`${d} <= ${a.length}`);
    else if (typeof l == "object" && !(0, t.alwaysValidSchema)(m, l)) {
      const P = o.var("valid", (0, e._)`${d} <= ${a.length}`);
      o.if((0, e.not)(P), () => g(P)), n.ok(P);
    }
    function g(P) {
      o.forRange("i", a.length, d, (_) => {
        n.subschema({ keyword: f, dataProp: _, dataPropType: t.Type.Num }, P), m.allErrors || o.if((0, e.not)(P), () => o.break());
      });
    }
  }
  return cr.validateAdditionalItems = s, cr.default = i, cr;
}
var Vn = {}, dr = {}, co;
function Zu() {
  if (co) return dr;
  co = 1, Object.defineProperty(dr, "__esModule", { value: !0 }), dr.validateTuple = void 0;
  const e = se(), t = fe(), r = tt(), i = {
    keyword: "items",
    type: "array",
    schemaType: ["object", "array", "boolean"],
    before: "uniqueItems",
    code(n) {
      const { schema: a, it: o } = n;
      if (Array.isArray(a))
        return s(n, "additionalItems", a);
      o.items = !0, !(0, t.alwaysValidSchema)(o, a) && n.ok((0, r.validateArray)(n));
    }
  };
  function s(n, a, o = n.schema) {
    const { gen: l, parentSchema: c, data: f, keyword: m, it: d } = n;
    _(c), d.opts.unevaluated && o.length && d.items !== !0 && (d.items = t.mergeEvaluated.items(l, o.length, d.items));
    const g = l.name("valid"), P = l.const("len", (0, e._)`${f}.length`);
    o.forEach((h, v) => {
      (0, t.alwaysValidSchema)(d, h) || (l.if((0, e._)`${P} > ${v}`, () => n.subschema({
        keyword: m,
        schemaProp: v,
        dataProp: v
      }, g)), n.ok(g));
    });
    function _(h) {
      const { opts: v, errSchemaPath: u } = d, p = o.length, y = p === h.minItems && (p === h.maxItems || h[a] === !1);
      if (v.strictTuples && !y) {
        const w = `"${m}" is ${p}-tuple, but minItems or maxItems/${a} are not specified or different at path "${u}"`;
        (0, t.checkStrictMode)(d, w, v.strictTuples);
      }
    }
  }
  return dr.validateTuple = s, dr.default = i, dr;
}
var fo;
function jd() {
  if (fo) return Vn;
  fo = 1, Object.defineProperty(Vn, "__esModule", { value: !0 });
  const e = Zu(), t = {
    keyword: "prefixItems",
    type: "array",
    schemaType: ["array"],
    before: "uniqueItems",
    code: (r) => (0, e.validateTuple)(r, "items")
  };
  return Vn.default = t, Vn;
}
var Hn = {}, ho;
function Rd() {
  if (ho) return Hn;
  ho = 1, Object.defineProperty(Hn, "__esModule", { value: !0 });
  const e = se(), t = fe(), r = tt(), i = Qu(), n = {
    keyword: "items",
    type: "array",
    schemaType: ["object", "boolean"],
    before: "uniqueItems",
    error: {
      message: ({ params: { len: a } }) => (0, e.str)`must NOT have more than ${a} items`,
      params: ({ params: { len: a } }) => (0, e._)`{limit: ${a}}`
    },
    code(a) {
      const { schema: o, parentSchema: l, it: c } = a, { prefixItems: f } = l;
      c.items = !0, !(0, t.alwaysValidSchema)(c, o) && (f ? (0, i.validateAdditionalItems)(a, f) : a.ok((0, r.validateArray)(a)));
    }
  };
  return Hn.default = n, Hn;
}
var Gn = {}, mo;
function Md() {
  if (mo) return Gn;
  mo = 1, Object.defineProperty(Gn, "__esModule", { value: !0 });
  const e = se(), t = fe(), i = {
    keyword: "contains",
    type: "array",
    schemaType: ["object", "boolean"],
    before: "uniqueItems",
    trackErrors: !0,
    error: {
      message: ({ params: { min: s, max: n } }) => n === void 0 ? (0, e.str)`must contain at least ${s} valid item(s)` : (0, e.str)`must contain at least ${s} and no more than ${n} valid item(s)`,
      params: ({ params: { min: s, max: n } }) => n === void 0 ? (0, e._)`{minContains: ${s}}` : (0, e._)`{minContains: ${s}, maxContains: ${n}}`
    },
    code(s) {
      const { gen: n, schema: a, parentSchema: o, data: l, it: c } = s;
      let f, m;
      const { minContains: d, maxContains: g } = o;
      c.opts.next ? (f = d === void 0 ? 1 : d, m = g) : f = 1;
      const P = n.const("len", (0, e._)`${l}.length`);
      if (s.setParams({ min: f, max: m }), m === void 0 && f === 0) {
        (0, t.checkStrictMode)(c, '"minContains" == 0 without "maxContains": "contains" keyword ignored');
        return;
      }
      if (m !== void 0 && f > m) {
        (0, t.checkStrictMode)(c, '"minContains" > "maxContains" is always invalid'), s.fail();
        return;
      }
      if ((0, t.alwaysValidSchema)(c, a)) {
        let p = (0, e._)`${P} >= ${f}`;
        m !== void 0 && (p = (0, e._)`${p} && ${P} <= ${m}`), s.pass(p);
        return;
      }
      c.items = !0;
      const _ = n.name("valid");
      m === void 0 && f === 1 ? v(_, () => n.if(_, () => n.break())) : f === 0 ? (n.let(_, !0), m !== void 0 && n.if((0, e._)`${l}.length > 0`, h)) : (n.let(_, !1), h()), s.result(_, () => s.reset());
      function h() {
        const p = n.name("_valid"), y = n.let("count", 0);
        v(p, () => n.if(p, () => u(y)));
      }
      function v(p, y) {
        n.forRange("i", 0, P, (w) => {
          s.subschema({
            keyword: "contains",
            dataProp: w,
            dataPropType: t.Type.Num,
            compositeRule: !0
          }, p), y();
        });
      }
      function u(p) {
        n.code((0, e._)`${p}++`), m === void 0 ? n.if((0, e._)`${p} >= ${f}`, () => n.assign(_, !0).break()) : (n.if((0, e._)`${p} > ${m}`, () => n.assign(_, !1).break()), f === 1 ? n.assign(_, !0) : n.if((0, e._)`${p} >= ${f}`, () => n.assign(_, !0)));
      }
    }
  };
  return Gn.default = i, Gn;
}
var Ki = {}, po;
function Nd() {
  return po || (po = 1, function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.validateSchemaDeps = e.validatePropertyDeps = e.error = void 0;
    const t = se(), r = fe(), i = tt();
    e.error = {
      message: ({ params: { property: l, depsCount: c, deps: f } }) => {
        const m = c === 1 ? "property" : "properties";
        return (0, t.str)`must have ${m} ${f} when property ${l} is present`;
      },
      params: ({ params: { property: l, depsCount: c, deps: f, missingProperty: m } }) => (0, t._)`{property: ${l},
    missingProperty: ${m},
    depsCount: ${c},
    deps: ${f}}`
      // TODO change to reference
    };
    const s = {
      keyword: "dependencies",
      type: "object",
      schemaType: "object",
      error: e.error,
      code(l) {
        const [c, f] = n(l);
        a(l, c), o(l, f);
      }
    };
    function n({ schema: l }) {
      const c = {}, f = {};
      for (const m in l) {
        if (m === "__proto__")
          continue;
        const d = Array.isArray(l[m]) ? c : f;
        d[m] = l[m];
      }
      return [c, f];
    }
    function a(l, c = l.schema) {
      const { gen: f, data: m, it: d } = l;
      if (Object.keys(c).length === 0)
        return;
      const g = f.let("missing");
      for (const P in c) {
        const _ = c[P];
        if (_.length === 0)
          continue;
        const h = (0, i.propertyInData)(f, m, P, d.opts.ownProperties);
        l.setParams({
          property: P,
          depsCount: _.length,
          deps: _.join(", ")
        }), d.allErrors ? f.if(h, () => {
          for (const v of _)
            (0, i.checkReportMissingProp)(l, v);
        }) : (f.if((0, t._)`${h} && (${(0, i.checkMissingProp)(l, _, g)})`), (0, i.reportMissingProp)(l, g), f.else());
      }
    }
    e.validatePropertyDeps = a;
    function o(l, c = l.schema) {
      const { gen: f, data: m, keyword: d, it: g } = l, P = f.name("valid");
      for (const _ in c)
        (0, r.alwaysValidSchema)(g, c[_]) || (f.if(
          (0, i.propertyInData)(f, m, _, g.opts.ownProperties),
          () => {
            const h = l.subschema({ keyword: d, schemaProp: _ }, P);
            l.mergeValidEvaluated(h, P);
          },
          () => f.var(P, !0)
          // TODO var
        ), l.ok(P));
    }
    e.validateSchemaDeps = o, e.default = s;
  }(Ki)), Ki;
}
var zn = {}, vo;
function Id() {
  if (vo) return zn;
  vo = 1, Object.defineProperty(zn, "__esModule", { value: !0 });
  const e = se(), t = fe(), i = {
    keyword: "propertyNames",
    type: "object",
    schemaType: ["object", "boolean"],
    error: {
      message: "property name must be valid",
      params: ({ params: s }) => (0, e._)`{propertyName: ${s.propertyName}}`
    },
    code(s) {
      const { gen: n, schema: a, data: o, it: l } = s;
      if ((0, t.alwaysValidSchema)(l, a))
        return;
      const c = n.name("valid");
      n.forIn("key", o, (f) => {
        s.setParams({ propertyName: f }), s.subschema({
          keyword: "propertyNames",
          data: f,
          dataTypes: ["string"],
          propertyName: f,
          compositeRule: !0
        }, c), n.if((0, e.not)(c), () => {
          s.error(!0), l.allErrors || n.break();
        });
      }), s.ok(c);
    }
  };
  return zn.default = i, zn;
}
var Kn = {}, go;
function xu() {
  if (go) return Kn;
  go = 1, Object.defineProperty(Kn, "__esModule", { value: !0 });
  const e = tt(), t = se(), r = Kt(), i = fe(), n = {
    keyword: "additionalProperties",
    type: ["object"],
    schemaType: ["boolean", "object"],
    allowUndefined: !0,
    trackErrors: !0,
    error: {
      message: "must NOT have additional properties",
      params: ({ params: a }) => (0, t._)`{additionalProperty: ${a.additionalProperty}}`
    },
    code(a) {
      const { gen: o, schema: l, parentSchema: c, data: f, errsCount: m, it: d } = a;
      if (!m)
        throw new Error("ajv implementation error");
      const { allErrors: g, opts: P } = d;
      if (d.props = !0, P.removeAdditional !== "all" && (0, i.alwaysValidSchema)(d, l))
        return;
      const _ = (0, e.allSchemaProperties)(c.properties), h = (0, e.allSchemaProperties)(c.patternProperties);
      v(), a.ok((0, t._)`${m} === ${r.default.errors}`);
      function v() {
        o.forIn("key", f, (b) => {
          !_.length && !h.length ? y(b) : o.if(u(b), () => y(b));
        });
      }
      function u(b) {
        let E;
        if (_.length > 8) {
          const S = (0, i.schemaRefOrVal)(d, c.properties, "properties");
          E = (0, e.isOwnProperty)(o, S, b);
        } else _.length ? E = (0, t.or)(..._.map((S) => (0, t._)`${b} === ${S}`)) : E = t.nil;
        return h.length && (E = (0, t.or)(E, ...h.map((S) => (0, t._)`${(0, e.usePattern)(a, S)}.test(${b})`))), (0, t.not)(E);
      }
      function p(b) {
        o.code((0, t._)`delete ${f}[${b}]`);
      }
      function y(b) {
        if (P.removeAdditional === "all" || P.removeAdditional && l === !1) {
          p(b);
          return;
        }
        if (l === !1) {
          a.setParams({ additionalProperty: b }), a.error(), g || o.break();
          return;
        }
        if (typeof l == "object" && !(0, i.alwaysValidSchema)(d, l)) {
          const E = o.name("valid");
          P.removeAdditional === "failing" ? (w(b, E, !1), o.if((0, t.not)(E), () => {
            a.reset(), p(b);
          })) : (w(b, E), g || o.if((0, t.not)(E), () => o.break()));
        }
      }
      function w(b, E, S) {
        const O = {
          keyword: "additionalProperties",
          dataProp: b,
          dataPropType: i.Type.Str
        };
        S === !1 && Object.assign(O, {
          compositeRule: !0,
          createErrors: !1,
          allErrors: !1
        }), a.subschema(O, E);
      }
    }
  };
  return Kn.default = n, Kn;
}
var Jn = {}, _o;
function Cd() {
  if (_o) return Jn;
  _o = 1, Object.defineProperty(Jn, "__esModule", { value: !0 });
  const e = Oi(), t = tt(), r = fe(), i = xu(), s = {
    keyword: "properties",
    type: "object",
    schemaType: "object",
    code(n) {
      const { gen: a, schema: o, parentSchema: l, data: c, it: f } = n;
      f.opts.removeAdditional === "all" && l.additionalProperties === void 0 && i.default.code(new e.KeywordCxt(f, i.default, "additionalProperties"));
      const m = (0, t.allSchemaProperties)(o);
      for (const h of m)
        f.definedProperties.add(h);
      f.opts.unevaluated && m.length && f.props !== !0 && (f.props = r.mergeEvaluated.props(a, (0, r.toHash)(m), f.props));
      const d = m.filter((h) => !(0, r.alwaysValidSchema)(f, o[h]));
      if (d.length === 0)
        return;
      const g = a.name("valid");
      for (const h of d)
        P(h) ? _(h) : (a.if((0, t.propertyInData)(a, c, h, f.opts.ownProperties)), _(h), f.allErrors || a.else().var(g, !0), a.endIf()), n.it.definedProperties.add(h), n.ok(g);
      function P(h) {
        return f.opts.useDefaults && !f.compositeRule && o[h].default !== void 0;
      }
      function _(h) {
        n.subschema({
          keyword: "properties",
          schemaProp: h,
          dataProp: h
        }, g);
      }
    }
  };
  return Jn.default = s, Jn;
}
var Bn = {}, yo;
function Ad() {
  if (yo) return Bn;
  yo = 1, Object.defineProperty(Bn, "__esModule", { value: !0 });
  const e = tt(), t = se(), r = fe(), i = fe(), s = {
    keyword: "patternProperties",
    type: "object",
    schemaType: "object",
    code(n) {
      const { gen: a, schema: o, data: l, parentSchema: c, it: f } = n, { opts: m } = f, d = (0, e.allSchemaProperties)(o), g = d.filter((y) => (0, r.alwaysValidSchema)(f, o[y]));
      if (d.length === 0 || g.length === d.length && (!f.opts.unevaluated || f.props === !0))
        return;
      const P = m.strictSchema && !m.allowMatchingProperties && c.properties, _ = a.name("valid");
      f.props !== !0 && !(f.props instanceof t.Name) && (f.props = (0, i.evaluatedPropsToName)(a, f.props));
      const { props: h } = f;
      v();
      function v() {
        for (const y of d)
          P && u(y), f.allErrors ? p(y) : (a.var(_, !0), p(y), a.if(_));
      }
      function u(y) {
        for (const w in P)
          new RegExp(y).test(w) && (0, r.checkStrictMode)(f, `property ${w} matches pattern ${y} (use allowMatchingProperties)`);
      }
      function p(y) {
        a.forIn("key", l, (w) => {
          a.if((0, t._)`${(0, e.usePattern)(n, y)}.test(${w})`, () => {
            const b = g.includes(y);
            b || n.subschema({
              keyword: "patternProperties",
              schemaProp: y,
              dataProp: w,
              dataPropType: i.Type.Str
            }, _), f.opts.unevaluated && h !== !0 ? a.assign((0, t._)`${h}[${w}]`, !0) : !b && !f.allErrors && a.if((0, t.not)(_), () => a.break());
          });
        });
      }
    }
  };
  return Bn.default = s, Bn;
}
var Yn = {}, Po;
function kd() {
  if (Po) return Yn;
  Po = 1, Object.defineProperty(Yn, "__esModule", { value: !0 });
  const e = fe(), t = {
    keyword: "not",
    schemaType: ["object", "boolean"],
    trackErrors: !0,
    code(r) {
      const { gen: i, schema: s, it: n } = r;
      if ((0, e.alwaysValidSchema)(n, s)) {
        r.fail();
        return;
      }
      const a = i.name("valid");
      r.subschema({
        keyword: "not",
        compositeRule: !0,
        createErrors: !1,
        allErrors: !1
      }, a), r.failResult(a, () => r.reset(), () => r.error());
    },
    error: { message: "must NOT be valid" }
  };
  return Yn.default = t, Yn;
}
var Xn = {}, wo;
function qd() {
  if (wo) return Xn;
  wo = 1, Object.defineProperty(Xn, "__esModule", { value: !0 });
  const t = {
    keyword: "anyOf",
    schemaType: "array",
    trackErrors: !0,
    code: tt().validateUnion,
    error: { message: "must match a schema in anyOf" }
  };
  return Xn.default = t, Xn;
}
var Qn = {}, bo;
function Ud() {
  if (bo) return Qn;
  bo = 1, Object.defineProperty(Qn, "__esModule", { value: !0 });
  const e = se(), t = fe(), i = {
    keyword: "oneOf",
    schemaType: "array",
    trackErrors: !0,
    error: {
      message: "must match exactly one schema in oneOf",
      params: ({ params: s }) => (0, e._)`{passingSchemas: ${s.passing}}`
    },
    code(s) {
      const { gen: n, schema: a, parentSchema: o, it: l } = s;
      if (!Array.isArray(a))
        throw new Error("ajv implementation error");
      if (l.opts.discriminator && o.discriminator)
        return;
      const c = a, f = n.let("valid", !1), m = n.let("passing", null), d = n.name("_valid");
      s.setParams({ passing: m }), n.block(g), s.result(f, () => s.reset(), () => s.error(!0));
      function g() {
        c.forEach((P, _) => {
          let h;
          (0, t.alwaysValidSchema)(l, P) ? n.var(d, !0) : h = s.subschema({
            keyword: "oneOf",
            schemaProp: _,
            compositeRule: !0
          }, d), _ > 0 && n.if((0, e._)`${d} && ${f}`).assign(f, !1).assign(m, (0, e._)`[${m}, ${_}]`).else(), n.if(d, () => {
            n.assign(f, !0), n.assign(m, _), h && s.mergeEvaluated(h, e.Name);
          });
        });
      }
    }
  };
  return Qn.default = i, Qn;
}
var Zn = {}, $o;
function Ld() {
  if ($o) return Zn;
  $o = 1, Object.defineProperty(Zn, "__esModule", { value: !0 });
  const e = fe(), t = {
    keyword: "allOf",
    schemaType: "array",
    code(r) {
      const { gen: i, schema: s, it: n } = r;
      if (!Array.isArray(s))
        throw new Error("ajv implementation error");
      const a = i.name("valid");
      s.forEach((o, l) => {
        if ((0, e.alwaysValidSchema)(n, o))
          return;
        const c = r.subschema({ keyword: "allOf", schemaProp: l }, a);
        r.ok(a), r.mergeEvaluated(c);
      });
    }
  };
  return Zn.default = t, Zn;
}
var xn = {}, Eo;
function Fd() {
  if (Eo) return xn;
  Eo = 1, Object.defineProperty(xn, "__esModule", { value: !0 });
  const e = se(), t = fe(), i = {
    keyword: "if",
    schemaType: ["object", "boolean"],
    trackErrors: !0,
    error: {
      message: ({ params: n }) => (0, e.str)`must match "${n.ifClause}" schema`,
      params: ({ params: n }) => (0, e._)`{failingKeyword: ${n.ifClause}}`
    },
    code(n) {
      const { gen: a, parentSchema: o, it: l } = n;
      o.then === void 0 && o.else === void 0 && (0, t.checkStrictMode)(l, '"if" without "then" and "else" is ignored');
      const c = s(l, "then"), f = s(l, "else");
      if (!c && !f)
        return;
      const m = a.let("valid", !0), d = a.name("_valid");
      if (g(), n.reset(), c && f) {
        const _ = a.let("ifClause");
        n.setParams({ ifClause: _ }), a.if(d, P("then", _), P("else", _));
      } else c ? a.if(d, P("then")) : a.if((0, e.not)(d), P("else"));
      n.pass(m, () => n.error(!0));
      function g() {
        const _ = n.subschema({
          keyword: "if",
          compositeRule: !0,
          createErrors: !1,
          allErrors: !1
        }, d);
        n.mergeEvaluated(_);
      }
      function P(_, h) {
        return () => {
          const v = n.subschema({ keyword: _ }, d);
          a.assign(m, d), n.mergeValidEvaluated(v, m), h ? a.assign(h, (0, e._)`${_}`) : n.setParams({ ifClause: _ });
        };
      }
    }
  };
  function s(n, a) {
    const o = n.schema[a];
    return o !== void 0 && !(0, t.alwaysValidSchema)(n, o);
  }
  return xn.default = i, xn;
}
var ei = {}, So;
function Wd() {
  if (So) return ei;
  So = 1, Object.defineProperty(ei, "__esModule", { value: !0 });
  const e = fe(), t = {
    keyword: ["then", "else"],
    schemaType: ["object", "boolean"],
    code({ keyword: r, parentSchema: i, it: s }) {
      i.if === void 0 && (0, e.checkStrictMode)(s, `"${r}" without "if" is ignored`);
    }
  };
  return ei.default = t, ei;
}
var Do;
function Vd() {
  if (Do) return Wn;
  Do = 1, Object.defineProperty(Wn, "__esModule", { value: !0 });
  const e = Qu(), t = jd(), r = Zu(), i = Rd(), s = Md(), n = Nd(), a = Id(), o = xu(), l = Cd(), c = Ad(), f = kd(), m = qd(), d = Ud(), g = Ld(), P = Fd(), _ = Wd();
  function h(v = !1) {
    const u = [
      // any
      f.default,
      m.default,
      d.default,
      g.default,
      P.default,
      _.default,
      // object
      a.default,
      o.default,
      n.default,
      l.default,
      c.default
    ];
    return v ? u.push(t.default, i.default) : u.push(e.default, r.default), u.push(s.default), u;
  }
  return Wn.default = h, Wn;
}
var ti = {}, ri = {}, Oo;
function Hd() {
  if (Oo) return ri;
  Oo = 1, Object.defineProperty(ri, "__esModule", { value: !0 });
  const e = se(), r = {
    keyword: "format",
    type: ["number", "string"],
    schemaType: "string",
    $data: !0,
    error: {
      message: ({ schemaCode: i }) => (0, e.str)`must match format "${i}"`,
      params: ({ schemaCode: i }) => (0, e._)`{format: ${i}}`
    },
    code(i, s) {
      const { gen: n, data: a, $data: o, schema: l, schemaCode: c, it: f } = i, { opts: m, errSchemaPath: d, schemaEnv: g, self: P } = f;
      if (!m.validateFormats)
        return;
      o ? _() : h();
      function _() {
        const v = n.scopeValue("formats", {
          ref: P.formats,
          code: m.code.formats
        }), u = n.const("fDef", (0, e._)`${v}[${c}]`), p = n.let("fType"), y = n.let("format");
        n.if((0, e._)`typeof ${u} == "object" && !(${u} instanceof RegExp)`, () => n.assign(p, (0, e._)`${u}.type || "string"`).assign(y, (0, e._)`${u}.validate`), () => n.assign(p, (0, e._)`"string"`).assign(y, u)), i.fail$data((0, e.or)(w(), b()));
        function w() {
          return m.strictSchema === !1 ? e.nil : (0, e._)`${c} && !${y}`;
        }
        function b() {
          const E = g.$async ? (0, e._)`(${u}.async ? await ${y}(${a}) : ${y}(${a}))` : (0, e._)`${y}(${a})`, S = (0, e._)`(typeof ${y} == "function" ? ${E} : ${y}.test(${a}))`;
          return (0, e._)`${y} && ${y} !== true && ${p} === ${s} && !${S}`;
        }
      }
      function h() {
        const v = P.formats[l];
        if (!v) {
          w();
          return;
        }
        if (v === !0)
          return;
        const [u, p, y] = b(v);
        u === s && i.pass(E());
        function w() {
          if (m.strictSchema === !1) {
            P.logger.warn(S());
            return;
          }
          throw new Error(S());
          function S() {
            return `unknown format "${l}" ignored in schema at path "${d}"`;
          }
        }
        function b(S) {
          const O = S instanceof RegExp ? (0, e.regexpCode)(S) : m.code.formats ? (0, e._)`${m.code.formats}${(0, e.getProperty)(l)}` : void 0, C = n.scopeValue("formats", { key: l, ref: S, code: O });
          return typeof S == "object" && !(S instanceof RegExp) ? [S.type || "string", S.validate, (0, e._)`${C}.validate`] : ["string", S, C];
        }
        function E() {
          if (typeof v == "object" && !(v instanceof RegExp) && v.async) {
            if (!g.$async)
              throw new Error("async format in sync schema");
            return (0, e._)`await ${y}(${a})`;
          }
          return typeof p == "function" ? (0, e._)`${y}(${a})` : (0, e._)`${y}.test(${a})`;
        }
      }
    }
  };
  return ri.default = r, ri;
}
var To;
function Gd() {
  if (To) return ti;
  To = 1, Object.defineProperty(ti, "__esModule", { value: !0 });
  const t = [Hd().default];
  return ti.default = t, ti;
}
var Yt = {}, jo;
function zd() {
  return jo || (jo = 1, Object.defineProperty(Yt, "__esModule", { value: !0 }), Yt.contentVocabulary = Yt.metadataVocabulary = void 0, Yt.metadataVocabulary = [
    "title",
    "description",
    "default",
    "deprecated",
    "readOnly",
    "writeOnly",
    "examples"
  ], Yt.contentVocabulary = [
    "contentMediaType",
    "contentEncoding",
    "contentSchema"
  ]), Yt;
}
var Ro;
function Kd() {
  if (Ro) return Sn;
  Ro = 1, Object.defineProperty(Sn, "__esModule", { value: !0 });
  const e = vd(), t = Td(), r = Vd(), i = Gd(), s = zd(), n = [
    e.default,
    t.default,
    (0, r.default)(),
    i.default,
    s.metadataVocabulary,
    s.contentVocabulary
  ];
  return Sn.default = n, Sn;
}
var ni = {}, Vr = {}, Mo;
function Jd() {
  if (Mo) return Vr;
  Mo = 1, Object.defineProperty(Vr, "__esModule", { value: !0 }), Vr.DiscrError = void 0;
  var e;
  return function(t) {
    t.Tag = "tag", t.Mapping = "mapping";
  }(e || (Vr.DiscrError = e = {})), Vr;
}
var No;
function Bd() {
  if (No) return ni;
  No = 1, Object.defineProperty(ni, "__esModule", { value: !0 });
  const e = se(), t = Jd(), r = wa(), i = Ti(), s = fe(), a = {
    keyword: "discriminator",
    type: "object",
    schemaType: "object",
    error: {
      message: ({ params: { discrError: o, tagName: l } }) => o === t.DiscrError.Tag ? `tag "${l}" must be string` : `value of tag "${l}" must be in oneOf`,
      params: ({ params: { discrError: o, tag: l, tagName: c } }) => (0, e._)`{error: ${o}, tag: ${c}, tagValue: ${l}}`
    },
    code(o) {
      const { gen: l, data: c, schema: f, parentSchema: m, it: d } = o, { oneOf: g } = m;
      if (!d.opts.discriminator)
        throw new Error("discriminator: requires discriminator option");
      const P = f.propertyName;
      if (typeof P != "string")
        throw new Error("discriminator: requires propertyName");
      if (f.mapping)
        throw new Error("discriminator: mapping is not supported");
      if (!g)
        throw new Error("discriminator: requires oneOf keyword");
      const _ = l.let("valid", !1), h = l.const("tag", (0, e._)`${c}${(0, e.getProperty)(P)}`);
      l.if((0, e._)`typeof ${h} == "string"`, () => v(), () => o.error(!1, { discrError: t.DiscrError.Tag, tag: h, tagName: P })), o.ok(_);
      function v() {
        const y = p();
        l.if(!1);
        for (const w in y)
          l.elseIf((0, e._)`${h} === ${w}`), l.assign(_, u(y[w]));
        l.else(), o.error(!1, { discrError: t.DiscrError.Mapping, tag: h, tagName: P }), l.endIf();
      }
      function u(y) {
        const w = l.name("valid"), b = o.subschema({ keyword: "oneOf", schemaProp: y }, w);
        return o.mergeEvaluated(b, e.Name), w;
      }
      function p() {
        var y;
        const w = {}, b = S(m);
        let E = !0;
        for (let U = 0; U < g.length; U++) {
          let G = g[U];
          if (G != null && G.$ref && !(0, s.schemaHasRulesButRef)(G, d.self.RULES)) {
            const H = G.$ref;
            if (G = r.resolveRef.call(d.self, d.schemaEnv.root, d.baseId, H), G instanceof r.SchemaEnv && (G = G.schema), G === void 0)
              throw new i.default(d.opts.uriResolver, d.baseId, H);
          }
          const F = (y = G == null ? void 0 : G.properties) === null || y === void 0 ? void 0 : y[P];
          if (typeof F != "object")
            throw new Error(`discriminator: oneOf subschemas (or referenced schemas) must have "properties/${P}"`);
          E = E && (b || S(G)), O(F, U);
        }
        if (!E)
          throw new Error(`discriminator: "${P}" must be required`);
        return w;
        function S({ required: U }) {
          return Array.isArray(U) && U.includes(P);
        }
        function O(U, G) {
          if (U.const)
            C(U.const, G);
          else if (U.enum)
            for (const F of U.enum)
              C(F, G);
          else
            throw new Error(`discriminator: "properties/${P}" must have "const" or "enum"`);
        }
        function C(U, G) {
          if (typeof U != "string" || U in w)
            throw new Error(`discriminator: "${P}" values must be unique strings`);
          w[U] = G;
        }
      }
    }
  };
  return ni.default = a, ni;
}
const Yd = "http://json-schema.org/draft-07/schema#", Xd = "http://json-schema.org/draft-07/schema#", Qd = "Core schema meta-schema", Zd = { schemaArray: { type: "array", minItems: 1, items: { $ref: "#" } }, nonNegativeInteger: { type: "integer", minimum: 0 }, nonNegativeIntegerDefault0: { allOf: [{ $ref: "#/definitions/nonNegativeInteger" }, { default: 0 }] }, simpleTypes: { enum: ["array", "boolean", "integer", "null", "number", "object", "string"] }, stringArray: { type: "array", items: { type: "string" }, uniqueItems: !0, default: [] } }, xd = ["object", "boolean"], ef = { $id: { type: "string", format: "uri-reference" }, $schema: { type: "string", format: "uri" }, $ref: { type: "string", format: "uri-reference" }, $comment: { type: "string" }, title: { type: "string" }, description: { type: "string" }, default: !0, readOnly: { type: "boolean", default: !1 }, examples: { type: "array", items: !0 }, multipleOf: { type: "number", exclusiveMinimum: 0 }, maximum: { type: "number" }, exclusiveMaximum: { type: "number" }, minimum: { type: "number" }, exclusiveMinimum: { type: "number" }, maxLength: { $ref: "#/definitions/nonNegativeInteger" }, minLength: { $ref: "#/definitions/nonNegativeIntegerDefault0" }, pattern: { type: "string", format: "regex" }, additionalItems: { $ref: "#" }, items: { anyOf: [{ $ref: "#" }, { $ref: "#/definitions/schemaArray" }], default: !0 }, maxItems: { $ref: "#/definitions/nonNegativeInteger" }, minItems: { $ref: "#/definitions/nonNegativeIntegerDefault0" }, uniqueItems: { type: "boolean", default: !1 }, contains: { $ref: "#" }, maxProperties: { $ref: "#/definitions/nonNegativeInteger" }, minProperties: { $ref: "#/definitions/nonNegativeIntegerDefault0" }, required: { $ref: "#/definitions/stringArray" }, additionalProperties: { $ref: "#" }, definitions: { type: "object", additionalProperties: { $ref: "#" }, default: {} }, properties: { type: "object", additionalProperties: { $ref: "#" }, default: {} }, patternProperties: { type: "object", additionalProperties: { $ref: "#" }, propertyNames: { format: "regex" }, default: {} }, dependencies: { type: "object", additionalProperties: { anyOf: [{ $ref: "#" }, { $ref: "#/definitions/stringArray" }] } }, propertyNames: { $ref: "#" }, const: !0, enum: { type: "array", items: !0, minItems: 1, uniqueItems: !0 }, type: { anyOf: [{ $ref: "#/definitions/simpleTypes" }, { type: "array", items: { $ref: "#/definitions/simpleTypes" }, minItems: 1, uniqueItems: !0 }] }, format: { type: "string" }, contentMediaType: { type: "string" }, contentEncoding: { type: "string" }, if: { $ref: "#" }, then: { $ref: "#" }, else: { $ref: "#" }, allOf: { $ref: "#/definitions/schemaArray" }, anyOf: { $ref: "#/definitions/schemaArray" }, oneOf: { $ref: "#/definitions/schemaArray" }, not: { $ref: "#" } }, tf = {
  $schema: Yd,
  $id: Xd,
  title: Qd,
  definitions: Zd,
  type: xd,
  properties: ef,
  default: !0
};
var Io;
function rf() {
  return Io || (Io = 1, function(e, t) {
    Object.defineProperty(t, "__esModule", { value: !0 }), t.MissingRefError = t.ValidationError = t.CodeGen = t.Name = t.nil = t.stringify = t.str = t._ = t.KeywordCxt = t.Ajv = void 0;
    const r = hd(), i = Kd(), s = Bd(), n = tf, a = ["/properties"], o = "http://json-schema.org/draft-07/schema";
    class l extends r.default {
      _addVocabularies() {
        super._addVocabularies(), i.default.forEach((P) => this.addVocabulary(P)), this.opts.discriminator && this.addKeyword(s.default);
      }
      _addDefaultMetaSchema() {
        if (super._addDefaultMetaSchema(), !this.opts.meta)
          return;
        const P = this.opts.$data ? this.$dataMetaSchema(n, a) : n;
        this.addMetaSchema(P, o, !1), this.refs["http://json-schema.org/schema"] = o;
      }
      defaultMeta() {
        return this.opts.defaultMeta = super.defaultMeta() || (this.getSchema(o) ? o : void 0);
      }
    }
    t.Ajv = l, e.exports = t = l, e.exports.Ajv = l, Object.defineProperty(t, "__esModule", { value: !0 }), t.default = l;
    var c = Oi();
    Object.defineProperty(t, "KeywordCxt", { enumerable: !0, get: function() {
      return c.KeywordCxt;
    } });
    var f = se();
    Object.defineProperty(t, "_", { enumerable: !0, get: function() {
      return f._;
    } }), Object.defineProperty(t, "str", { enumerable: !0, get: function() {
      return f.str;
    } }), Object.defineProperty(t, "stringify", { enumerable: !0, get: function() {
      return f.stringify;
    } }), Object.defineProperty(t, "nil", { enumerable: !0, get: function() {
      return f.nil;
    } }), Object.defineProperty(t, "Name", { enumerable: !0, get: function() {
      return f.Name;
    } }), Object.defineProperty(t, "CodeGen", { enumerable: !0, get: function() {
      return f.CodeGen;
    } });
    var m = Pa();
    Object.defineProperty(t, "ValidationError", { enumerable: !0, get: function() {
      return m.default;
    } });
    var d = Ti();
    Object.defineProperty(t, "MissingRefError", { enumerable: !0, get: function() {
      return d.default;
    } });
  }(Pn, Pn.exports)), Pn.exports;
}
var Ji = {}, Hr = {}, Co;
function nf() {
  return Co || (Co = 1, Object.defineProperty(Hr, "__esModule", { value: !0 }), Hr.PluginDefineAttributesSchema = void 0, Hr.PluginDefineAttributesSchema = {
    $id: "WardPluginDefineAttributesSchema",
    title: "Ward Plugin Defines Attributes",
    description: "Plugin Define Attributes",
    type: "object",
    patternProperties: {
      "^.*$": {
        description: "Define Attribute",
        type: "string",
        enum: [
          "string",
          "string[]",
          "url",
          "url[]",
          "number",
          "number[]",
          "boolean",
          "boolean[]"
        ]
      }
    },
    additionalProperties: !1
  }), Hr;
}
var Gr = {}, Ao;
function af() {
  return Ao || (Ao = 1, Object.defineProperty(Gr, "__esModule", { value: !0 }), Gr.PluginDefineElementAttributesSchema = void 0, Gr.PluginDefineElementAttributesSchema = {
    $id: "WardPluginDefineElementAttributesSchema",
    title: "Ward Plugin Define Element Attributes",
    description: "Plugin Define Element Attributes",
    type: "object",
    patternProperties: {
      "^.*$": {
        description: "Define Element Attribute",
        type: ["string", "number", "boolean", "array", "object"]
      }
    },
    additionalProperties: !1
  }), Gr;
}
var zr = {}, ko;
function sf() {
  return ko || (ko = 1, Object.defineProperty(zr, "__esModule", { value: !0 }), zr.PluginDefineElementEventsSchema = void 0, zr.PluginDefineElementEventsSchema = {
    $id: "WardPluginDefineElementEventsSchema",
    title: "Ward Plugin Define Element Events",
    description: "Plugin Define Element Events",
    type: "object",
    patternProperties: {
      "^.*$": {
        description: "Define Element Event",
        type: "object"
      }
    },
    additionalProperties: !1
  }), zr;
}
var Kr = {}, qo;
function of() {
  return qo || (qo = 1, Object.defineProperty(Kr, "__esModule", { value: !0 }), Kr.PluginDefineElementPropertiesSchema = void 0, Kr.PluginDefineElementPropertiesSchema = {
    $id: "WardPluginDefineElementPropertiesSchema",
    title: "Ward Plugin Define Element Properties",
    description: "Plugin Define Element Properties",
    type: "object",
    patternProperties: {
      "^.*$": {
        description: "Define Element Property",
        type: ["string", "number", "boolean", "array", "object"]
      }
    },
    additionalProperties: !1
  }), Kr;
}
var Jr = {}, Uo;
function uf() {
  return Uo || (Uo = 1, Object.defineProperty(Jr, "__esModule", { value: !0 }), Jr.PluginDefineElementSchema = void 0, Jr.PluginDefineElementSchema = {
    $id: "WardPluginDefineElementSchema",
    title: "Ward Plugin Define Element",
    description: "Plugin Define Element",
    type: "object",
    properties: {
      properties: {
        $ref: "WardPluginDefineElementPropertiesSchema"
      },
      attributes: {
        $ref: "WardPluginDefineElementAttributesSchema"
      },
      events: {
        $ref: "WardPluginDefineElementEventsSchema"
      }
    },
    additionalProperties: !1
  }), Jr;
}
var Br = {}, Lo;
function lf() {
  return Lo || (Lo = 1, Object.defineProperty(Br, "__esModule", { value: !0 }), Br.PluginDefineElementsSchema = void 0, Br.PluginDefineElementsSchema = {
    $id: "WardPluginDefineElementsSchema",
    title: "Ward Plugin Define Elements",
    description: "Plugin Define Elements",
    type: "object",
    patternProperties: {
      "^.*$": {
        $ref: "WardPluginDefineElementSchema"
      }
    },
    additionalProperties: !1
  }), Br;
}
var Yr = {}, Fo;
function cf() {
  return Fo || (Fo = 1, Object.defineProperty(Yr, "__esModule", { value: !0 }), Yr.PluginDefinePropertiesSchema = void 0, Yr.PluginDefinePropertiesSchema = {
    $id: "WardPluginDefinePropertiesSchema",
    title: "Ward Plugin Define Properties",
    description: "Plugin Define Properties",
    type: "object",
    patternProperties: {
      "^.*$": {
        description: "Define Property",
        type: "string",
        enum: [
          "string",
          "string[]",
          "url",
          "url[]",
          "number",
          "number[]",
          "boolean",
          "boolean[]"
        ]
      }
    },
    additionalProperties: !1
  }), Yr;
}
var Xr = {}, Wo;
function df() {
  return Wo || (Wo = 1, Object.defineProperty(Xr, "__esModule", { value: !0 }), Xr.PluginDefineSchema = void 0, Xr.PluginDefineSchema = {
    $id: "WardPluginDefineSchema",
    title: "Ward Plugin Define",
    description: "Plugin Define",
    type: "object",
    properties: {
      properties: {
        $ref: "WardPluginDefinePropertiesSchema"
      },
      attributes: {
        $ref: "WardPluginDefineAttributesSchema"
      },
      elements: {
        $ref: "WardPluginDefineElementsSchema"
      }
    },
    additionalProperties: !1
  }), Xr;
}
var Qr = {}, Vo;
function ff() {
  return Vo || (Vo = 1, Object.defineProperty(Qr, "__esModule", { value: !0 }), Qr.PluginDefinesSchema = void 0, Qr.PluginDefinesSchema = {
    $id: "WardPluginDefinesSchema",
    title: "Ward Plugin Defines",
    description: "Plugin Defines",
    type: "object",
    patternProperties: {
      "^.*$": {
        $ref: "WardPluginDefineSchema"
      }
    },
    additionalProperties: !1
  }), Qr;
}
var Zr = {}, Ho;
function hf() {
  return Ho || (Ho = 1, Object.defineProperty(Zr, "__esModule", { value: !0 }), Zr.PluginProvideAttributesSchema = void 0, Zr.PluginProvideAttributesSchema = {
    $id: "WardPluginProvideAttributesSchema",
    title: "Ward Plugin Provide Attributes",
    description: "Plugin Provide Attributes",
    type: "object",
    patternProperties: {
      "^.*$": {
        description: "Provide Attribute",
        oneOf: [{
          type: ["string", "number", "boolean"]
        }, {
          type: "array",
          items: { type: "string" }
        }, {
          type: "array",
          items: { type: "number" }
        }, {
          type: "array",
          items: { type: "boolean" }
        }]
      }
    },
    additionalProperties: !1
  }), Zr;
}
var xr = {}, Go;
function mf() {
  return Go || (Go = 1, Object.defineProperty(xr, "__esModule", { value: !0 }), xr.PluginProvideElementSchema = void 0, xr.PluginProvideElementSchema = {
    $id: "WardPluginProvideElementSchema",
    title: "Ward Plugin Provide Element",
    description: "Plugin Provide Element",
    type: "object",
    properties: {
      url: {
        type: "string"
      },
      type: {
        type: "string",
        enum: ["iframe", "webcomponent", "component"]
      },
      element: {
        type: "string"
      }
    },
    required: [
      "url",
      "type"
    ],
    additionalProperties: !1
  }), xr;
}
var en = {}, zo;
function pf() {
  return zo || (zo = 1, Object.defineProperty(en, "__esModule", { value: !0 }), en.PluginProvideElementsSchema = void 0, en.PluginProvideElementsSchema = {
    $id: "WardPluginProvideElementsSchema",
    title: "Ward Plugin Provide Elements",
    description: "Plugin Provide Elements",
    type: "object",
    patternProperties: {
      "^.*$": {
        $ref: "WardPluginProvideElementSchema"
      }
    },
    additionalProperties: !1
  }), en;
}
var tn = {}, Ko;
function vf() {
  return Ko || (Ko = 1, Object.defineProperty(tn, "__esModule", { value: !0 }), tn.PluginProvidePropertiesSchema = void 0, tn.PluginProvidePropertiesSchema = {
    $id: "WardPluginProvidePropertiesSchema",
    title: "Ward Plugin Provide Properties",
    description: "Plugin Provide Properties",
    type: "object",
    patternProperties: {
      "^.*$": {
        description: "Provide Property",
        oneOf: [{
          type: ["string", "number", "boolean"]
        }, {
          type: "array",
          items: { type: "string" }
        }, {
          type: "array",
          items: { type: "number" }
        }, {
          type: "array",
          items: { type: "boolean" }
        }]
      }
    },
    additionalProperties: !1
  }), tn;
}
var rn = {}, Jo;
function gf() {
  return Jo || (Jo = 1, Object.defineProperty(rn, "__esModule", { value: !0 }), rn.PluginProvideSchema = void 0, rn.PluginProvideSchema = {
    $id: "WardPluginProvideSchema",
    title: "Ward Plugin Provide",
    description: "Plugin Provide",
    type: "object",
    properties: {
      properties: {
        $ref: "WardPluginProvidePropertiesSchema"
      },
      attributes: {
        $ref: "WardPluginProvideAttributesSchema"
      },
      elements: {
        $ref: "WardPluginProvideElementsSchema"
      }
    },
    additionalProperties: !1
  }), rn;
}
var nn = {}, Bo;
function _f() {
  return Bo || (Bo = 1, Object.defineProperty(nn, "__esModule", { value: !0 }), nn.PluginProvidesSchema = void 0, nn.PluginProvidesSchema = {
    $id: "WardPluginProvidesSchema",
    title: "Ward Plugin Provides",
    description: "Plugin Provides",
    type: "object",
    patternProperties: {
      "^.*$": {
        $ref: "WardPluginProvideSchema"
      }
    },
    additionalProperties: !1
  }), nn;
}
var Bi = {}, Yo;
function yf() {
  return Yo || (Yo = 1, function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.PluginSchema = void 0, e.PluginSchema = {
      $id: "WardPluginSchema",
      title: "Ward Plugin",
      description: "Plugin",
      type: "object",
      properties: {
        name: {
          description: "The unique identifier for a plugin",
          type: "string"
        },
        url: {
          description: "The url for a plugin",
          type: "string"
        },
        dependencies: {
          description: "Dependencies for the plugin",
          type: "array",
          items: {
            type: "string"
          },
          minItems: 0,
          uniqueItems: !0
        },
        defines: {
          $ref: "WardPluginDefinesSchema"
        },
        provides: {
          description: "Providers",
          type: "object",
          patternProperties: {
            "^.*$": {
              $ref: "WardPluginProvidesSchema"
            }
          }
        }
      },
      required: [
        "name",
        "url"
      ],
      additionalProperties: !1
    }, e.default = e.PluginSchema;
  }(Bi)), Bi;
}
var Xo;
function Pf() {
  return Xo || (Xo = 1, function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.PluginSchema = e.PluginProvidesSchema = e.PluginProvideSchema = e.PluginProvidePropertiesSchema = e.PluginProvideElementsSchema = e.PluginProvideElementSchema = e.PluginProvideAttributesSchema = e.PluginDefinesSchema = e.PluginDefineSchema = e.PluginDefinePropertiesSchema = e.PluginDefineElementsSchema = e.PluginDefineElementSchema = e.PluginDefineElementPropertiesSchema = e.PluginDefineElementEventsSchema = e.PluginDefineElementAttributesSchema = e.PluginDefineAttributesSchema = void 0;
    var t = nf();
    Object.defineProperty(e, "PluginDefineAttributesSchema", { enumerable: !0, get: function() {
      return t.PluginDefineAttributesSchema;
    } });
    var r = af();
    Object.defineProperty(e, "PluginDefineElementAttributesSchema", { enumerable: !0, get: function() {
      return r.PluginDefineElementAttributesSchema;
    } });
    var i = sf();
    Object.defineProperty(e, "PluginDefineElementEventsSchema", { enumerable: !0, get: function() {
      return i.PluginDefineElementEventsSchema;
    } });
    var s = of();
    Object.defineProperty(e, "PluginDefineElementPropertiesSchema", { enumerable: !0, get: function() {
      return s.PluginDefineElementPropertiesSchema;
    } });
    var n = uf();
    Object.defineProperty(e, "PluginDefineElementSchema", { enumerable: !0, get: function() {
      return n.PluginDefineElementSchema;
    } });
    var a = lf();
    Object.defineProperty(e, "PluginDefineElementsSchema", { enumerable: !0, get: function() {
      return a.PluginDefineElementsSchema;
    } });
    var o = cf();
    Object.defineProperty(e, "PluginDefinePropertiesSchema", { enumerable: !0, get: function() {
      return o.PluginDefinePropertiesSchema;
    } });
    var l = df();
    Object.defineProperty(e, "PluginDefineSchema", { enumerable: !0, get: function() {
      return l.PluginDefineSchema;
    } });
    var c = ff();
    Object.defineProperty(e, "PluginDefinesSchema", { enumerable: !0, get: function() {
      return c.PluginDefinesSchema;
    } });
    var f = hf();
    Object.defineProperty(e, "PluginProvideAttributesSchema", { enumerable: !0, get: function() {
      return f.PluginProvideAttributesSchema;
    } });
    var m = mf();
    Object.defineProperty(e, "PluginProvideElementSchema", { enumerable: !0, get: function() {
      return m.PluginProvideElementSchema;
    } });
    var d = pf();
    Object.defineProperty(e, "PluginProvideElementsSchema", { enumerable: !0, get: function() {
      return d.PluginProvideElementsSchema;
    } });
    var g = vf();
    Object.defineProperty(e, "PluginProvidePropertiesSchema", { enumerable: !0, get: function() {
      return g.PluginProvidePropertiesSchema;
    } });
    var P = gf();
    Object.defineProperty(e, "PluginProvideSchema", { enumerable: !0, get: function() {
      return P.PluginProvideSchema;
    } });
    var _ = _f();
    Object.defineProperty(e, "PluginProvidesSchema", { enumerable: !0, get: function() {
      return _.PluginProvidesSchema;
    } });
    var h = yf();
    Object.defineProperty(e, "PluginSchema", { enumerable: !0, get: function() {
      return h.PluginSchema;
    } });
  }(Ji)), Ji;
}
var Qo;
function wf() {
  if (Qo) return vt;
  Qo = 1;
  var e = vt && vt.__importDefault || function(n) {
    return n && n.__esModule ? n : { default: n };
  };
  Object.defineProperty(vt, "__esModule", { value: !0 }), vt.getValidator = vt.validate = void 0;
  const t = e(rf()), r = Pf(), i = new t.default({
    allowUnionTypes: !0,
    schemas: [
      r.PluginDefineAttributesSchema,
      r.PluginDefineElementAttributesSchema,
      r.PluginDefineElementEventsSchema,
      r.PluginDefineElementPropertiesSchema,
      r.PluginDefineElementSchema,
      r.PluginDefineElementsSchema,
      r.PluginDefinePropertiesSchema,
      r.PluginDefineSchema,
      r.PluginDefinesSchema,
      r.PluginProvideAttributesSchema,
      r.PluginProvideElementSchema,
      r.PluginProvideElementsSchema,
      r.PluginProvidePropertiesSchema,
      r.PluginProvideSchema,
      r.PluginProvidesSchema,
      r.PluginSchema
    ]
  });
  vt.validate = i.getSchema("WardPluginSchema");
  const s = () => i.getSchema("WardPluginSchema");
  return vt.getValidator = s, vt;
}
var Zo;
function bf() {
  return Zo || (Zo = 1, function(e) {
    var t = pt && pt.__awaiter || function(m, d, g, P) {
      function _(h) {
        return h instanceof g ? h : new g(function(v) {
          v(h);
        });
      }
      return new (g || (g = Promise))(function(h, v) {
        function u(w) {
          try {
            y(P.next(w));
          } catch (b) {
            v(b);
          }
        }
        function p(w) {
          try {
            y(P.throw(w));
          } catch (b) {
            v(b);
          }
        }
        function y(w) {
          w.done ? h(w.value) : _(w.value).then(u, p);
        }
        y((P = P.apply(m, d || [])).next());
      });
    }, r = pt && pt.__classPrivateFieldGet || function(m, d, g, P) {
      if (g === "a" && !P) throw new TypeError("Private accessor was defined without a getter");
      if (typeof d == "function" ? m !== d || !P : !d.has(m)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
      return g === "m" ? P : g === "a" ? P.call(m) : P ? P.value : d.get(m);
    }, i = pt && pt.__classPrivateFieldSet || function(m, d, g, P, _) {
      if (P === "m") throw new TypeError("Private method is not writable");
      if (P === "a" && !_) throw new TypeError("Private accessor was defined without a setter");
      if (typeof d == "function" ? m !== d || !_ : !d.has(m)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
      return P === "a" ? _.call(m, g) : _ ? _.value = g : d.set(m, g), g;
    }, s, n, a, o, l;
    Object.defineProperty(e, "__esModule", { value: !0 }), e.PluginLoadStates = void 0;
    const c = wf();
    e.PluginLoadStates = {
      NONE: "NONE",
      EXCLUDED: "EXCLUDED",
      LOAD_ERROR: "LOAD_ERROR",
      VALIDATION_ERROR: "VALIDATION_ERROR",
      LOADED: "LOADED"
    };
    let f = class {
      constructor() {
        s.add(this), n.set(this, {}), a.set(this, []);
      }
      get urls() {
        return Object.keys(r(this, n, "f"));
      }
      get excludedUrls() {
        return r(this, a, "f").slice();
      }
      reset(d = !1) {
        i(this, n, {}, "f"), d && i(this, a, [], "f");
      }
      hasData(d) {
        var g;
        return !!(!((g = r(this, n, "f")[d]) === null || g === void 0) && g.data);
      }
      isLoaded(d) {
        var g;
        return ((g = r(this, n, "f")[d]) === null || g === void 0 ? void 0 : g.state) === e.PluginLoadStates.LOADED;
      }
      getData(d) {
        var g;
        return (g = r(this, n, "f")[d]) === null || g === void 0 ? void 0 : g.data;
      }
      getErrors(d) {
        var g;
        return ((g = r(this, n, "f")[d]) === null || g === void 0 ? void 0 : g.errors) || [];
      }
      getState(d) {
        var g;
        return ((g = r(this, n, "f")[d]) === null || g === void 0 ? void 0 : g.state) || e.PluginLoadStates.NONE;
      }
      exclude(d) {
        r(this, a, "f").includes(d) || r(this, a, "f").push(d);
      }
      include(d) {
        const g = r(this, a, "f").indexOf(d);
        g > -1 && r(this, a, "f").splice(g, 1);
      }
      load(d) {
        return t(this, void 0, void 0, function* () {
          if (r(this, n, "f")[d] = {
            url: d,
            state: e.PluginLoadStates.NONE,
            errors: [],
            loadDate: (/* @__PURE__ */ new Date()).getTime()
          }, r(this, a, "f").includes(d))
            return r(this, n, "f")[d].state = e.PluginLoadStates.EXCLUDED, !1;
          let g;
          try {
            g = yield r(this, s, "m", o).call(this, d);
          } catch (v) {
            return r(this, n, "f")[d].state = e.PluginLoadStates.LOAD_ERROR, r(this, n, "f")[d].errors.push(String(v)), !1;
          }
          let P;
          try {
            P = yield r(this, s, "m", l).call(this, g), r(this, n, "f")[d].data = P;
          } catch (v) {
            return r(this, n, "f")[d].state = e.PluginLoadStates.LOAD_ERROR, r(this, n, "f")[d].errors.push(String(v)), !1;
          }
          const _ = (0, c.getValidator)();
          return _(P) ? (r(this, n, "f")[d].state = e.PluginLoadStates.LOADED, !0) : (r(this, n, "f")[d].state = e.PluginLoadStates.VALIDATION_ERROR, _.errors && r(this, n, "f")[d].errors.push(..._.errors.map((v) => JSON.stringify(v, null, 2))), !1);
        });
      }
    };
    n = /* @__PURE__ */ new WeakMap(), a = /* @__PURE__ */ new WeakMap(), s = /* @__PURE__ */ new WeakSet(), o = function(d) {
      return t(this, void 0, void 0, function* () {
        return yield fetch(d, {
          method: "GET",
          headers: new Headers()
        });
      });
    }, l = function(d) {
      return t(this, void 0, void 0, function* () {
        return yield d.json();
      });
    }, e.default = f;
  }(pt)), pt;
}
var xo;
function $f() {
  if (xo) return Le;
  xo = 1;
  var e = Le && Le.__awaiter || function(E, S, O, C) {
    function U(G) {
      return G instanceof O ? G : new O(function(F) {
        F(G);
      });
    }
    return new (O || (O = Promise))(function(G, F) {
      function H(Z) {
        try {
          x(C.next(Z));
        } catch (X) {
          F(X);
        }
      }
      function B(Z) {
        try {
          x(C.throw(Z));
        } catch (X) {
          F(X);
        }
      }
      function x(Z) {
        Z.done ? G(Z.value) : U(Z.value).then(H, B);
      }
      x((C = C.apply(E, S || [])).next());
    });
  }, t = Le && Le.__classPrivateFieldSet || function(E, S, O, C, U) {
    if (C === "m") throw new TypeError("Private method is not writable");
    if (C === "a" && !U) throw new TypeError("Private accessor was defined without a setter");
    if (typeof S == "function" ? E !== S || !U : !S.has(E)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return C === "a" ? U.call(E, O) : U ? U.value = O : S.set(E, O), O;
  }, r = Le && Le.__classPrivateFieldGet || function(E, S, O, C) {
    if (O === "a" && !C) throw new TypeError("Private accessor was defined without a getter");
    if (typeof S == "function" ? E !== S || !C : !S.has(E)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return O === "m" ? C : O === "a" ? C.call(E) : C ? C.value : S.get(E);
  }, i = Le && Le.__importDefault || function(E) {
    return E && E.__esModule ? E : { default: E };
  }, s, n, a, o, l, c, f, m, d, g, P, _, h;
  Object.defineProperty(Le, "__esModule", { value: !0 });
  const v = wr(), u = i(Kc()), p = i(Yc()), y = _n(), w = i(bf());
  let b = class {
    constructor(S, O) {
      s.add(this), n.set(this, void 0), a.set(this, -1), o.set(this, void 0), l.set(this, []), c.set(this, {}), f.set(this, {}), m.set(this, {}), d.set(this, void 0), t(this, n, S || new w.default(), "f"), t(this, d, new v.Logger("PluginManager", O), "f");
    }
    get logger() {
      return r(this, d, "f");
    }
    get retryDelay() {
      return r(this, a, "f");
    }
    set retryDelay(S) {
      t(this, a, S, "f");
    }
    get data() {
      return {
        urls: this.urls,
        roots: this.roots,
        plugins: this.plugins,
        definitions: this.definitions,
        providers: this.providers
      };
    }
    get urls() {
      return r(this, n, "f").urls.reduce((O, C) => (O[C] = {
        state: this.getState(C),
        errors: this.getErrors(C),
        data: this.getData(C)
      }, O), {});
    }
    getData(S) {
      return r(this, n, "f").getData(S);
    }
    getState(S) {
      return r(this, n, "f").getState(S);
    }
    getErrors(S) {
      return r(this, n, "f").getErrors(S);
    }
    get roots() {
      const S = [];
      return Object.values(r(this, c, "f")).forEach((O) => {
        O.dependencies.forEach((C) => {
          S.includes(C) || S.push(C);
        });
      }), Object.values(r(this, c, "f")).reduce((O, C) => (S.includes(C.loadUrl) || (O[C.name] = C), O), {});
    }
    get plugins() {
      return r(this, c, "f");
    }
    getPlugin(S) {
      return this.plugins[S];
    }
    getPluginByUrl(S) {
      const O = this.getData(S);
      if (O)
        return this.plugins[O.name];
    }
    get definitions() {
      return r(this, f, "f");
    }
    getDefinition(S) {
      return this.definitions[S];
    }
    get providers() {
      return r(this, m, "f");
    }
    getProviders(S) {
      return Object.values(r(this, m, "f")).filter((O) => O.definition === S);
    }
    getProvider(S) {
      return r(this, m, "f")[S];
    }
    register(S) {
      return r(this, l, "f").push(S), () => this.unregister(S);
    }
    unregister(S) {
      t(this, l, y.ArrayUtils.removeElement(r(this, l, "f"), S), "f");
    }
    notify() {
      r(this, l, "f").forEach((S) => {
        S(this.data);
      });
    }
    reset(S = !0) {
      r(this, n, "f").reset(), t(this, c, {}, "f"), t(this, f, {}, "f"), t(this, m, {}, "f"), S && this.notify();
    }
    loadPlugin(S) {
      return e(this, arguments, void 0, function* (O, C = !0) {
        r(this, n, "f").include(O), yield r(this, s, "m", g).call(this, O), C && this.notify();
      });
    }
    unloadPlugin(S) {
      return e(this, void 0, void 0, function* () {
        r(this, n, "f").exclude(S), this.reloadPlugins();
      });
    }
    reloadPlugins() {
      return e(this, void 0, void 0, function* () {
        const S = Object.values(this.roots).map((O) => O.loadUrl);
        this.reset(!1), yield Promise.all(S.map((O) => r(this, s, "m", g).call(this, O))), this.notify();
      });
    }
  };
  return n = /* @__PURE__ */ new WeakMap(), a = /* @__PURE__ */ new WeakMap(), o = /* @__PURE__ */ new WeakMap(), l = /* @__PURE__ */ new WeakMap(), c = /* @__PURE__ */ new WeakMap(), f = /* @__PURE__ */ new WeakMap(), m = /* @__PURE__ */ new WeakMap(), d = /* @__PURE__ */ new WeakMap(), s = /* @__PURE__ */ new WeakSet(), g = function E(S, O) {
    return e(this, void 0, void 0, function* () {
      if (clearInterval(r(this, o, "f")), r(this, n, "f").hasData(S))
        return this.logger.warn(`URL already loaded: '${S}'`), !0;
      if (!(yield r(this, n, "f").load(S)))
        return this.logger.warn(`Failed to load plugin from: '${S}'`), this.logger.warn(r(this, n, "f").getErrors(S).join(`
`)), !1;
      const U = r(this, n, "f").getData(S);
      if (r(this, c, "f")[U.name]) {
        const F = r(this, c, "f")[U.name].loadUrl;
        return this.logger.warn(`Plugin '${U.name}' from '${U.url}' already registered from '${F}'`), !1;
      }
      const G = new u.default(S, U);
      r(this, c, "f")[U.name] = G, yield Promise.allSettled((U.dependencies || []).map((F) => r(this, s, "m", E).call(this, F, U.name)));
      try {
        r(this, s, "m", P).call(this);
      } catch (F) {
        this.logger.error(String(F));
      }
      return r(this, a, "f") > 0 && t(this, o, setInterval(() => {
        this.reloadPlugins();
      }, r(this, a, "f")), "f"), this.logger.warn(`Succesully loaded plugin from '${S}'`), !0;
    });
  }, P = function() {
    t(this, f, {}, "f"), t(this, m, {}, "f"), Object.values(this.roots).forEach((S) => r(this, s, "m", _).call(this, S)), Object.values(this.roots).forEach((S) => r(this, s, "m", h).call(this, S));
  }, _ = function E(S) {
    S.defines.forEach((O) => {
      this.getDefinition(O.name) ? this.logger.warn(`Defines '${O.name}' from '${S.name}' is already registered from ${this.getDefinition(O.name).plugin}`) : r(this, f, "f")[O.name] = O;
    }), S.dependencies.forEach((O) => {
      if (r(this, n, "f").isLoaded(O)) {
        const C = r(this, n, "f").getData(O), U = this.getPlugin(C.name);
        r(this, s, "m", E).call(this, U);
      }
    });
  }, h = function E(S) {
    S.provides.forEach((O) => {
      const C = this.getDefinition(O.define);
      if (!C)
        this.logger.warn(`Provides '${O.name}' from '${S.name}' has no definition '${O.define}'`);
      else {
        const U = new p.default(S.url, C, O);
        r(this, m, "f")[U.name] = U;
      }
    }), S.dependencies.forEach((O) => {
      if (r(this, n, "f").isLoaded(O)) {
        const C = r(this, n, "f").getData(O), U = this.getPlugin(C.name);
        r(this, s, "m", E).call(this, U);
      }
    });
  }, Le.default = b, Le;
}
var Pt = {}, Wt = {}, an = {}, eu;
function el() {
  return eu || (eu = 1, Object.defineProperty(an, "__esModule", { value: !0 }), an.MessageServiceTypes = void 0, an.MessageServiceTypes = {
    EVENT: "event",
    FRAME: "frame",
    NAVIGATION: "navigation"
  }), an;
}
var tu;
function Ef() {
  if (tu) return Wt;
  tu = 1;
  var e = Wt && Wt.__classPrivateFieldSet || function(v, u, p, y, w) {
    if (y === "m") throw new TypeError("Private method is not writable");
    if (y === "a" && !w) throw new TypeError("Private accessor was defined without a setter");
    if (typeof u == "function" ? v !== u || !w : !u.has(v)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return y === "a" ? w.call(v, p) : w ? w.value = p : u.set(v, p), p;
  }, t = Wt && Wt.__classPrivateFieldGet || function(v, u, p, y) {
    if (p === "a" && !y) throw new TypeError("Private accessor was defined without a getter");
    if (typeof u == "function" ? v !== u || !y : !u.has(v)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return p === "m" ? y : p === "a" ? y.call(v) : y ? y.value : u.get(v);
  }, r, i, s, n, a, o, l, c, f, m;
  Object.defineProperty(Wt, "__esModule", { value: !0 });
  const d = _n(), g = wr(), P = el(), _ = tl();
  let h = class {
    constructor(u, p, y, w, b, E, S) {
      r.add(this), i.set(this, void 0), s.set(this, void 0), n.set(this, void 0), a.set(this, void 0), o.set(this, void 0), l.set(this, void 0), c.set(this, void 0), e(this, c, new g.Logger("FrameService", S), "f"), e(this, s, u, "f"), e(this, i, E || d.UUID.next(), "f"), e(this, a, p, "f"), e(this, o, y, "f"), e(this, l, w, "f"), e(this, n, b, "f"), this.logger.info(`[DISP-${this.dispatcherId}/FRAME-${this.id}] created`), t(this, a, "f").addEventListener("message", t(this, r, "m", m).bind(this)), t(this, a, "f").addEventListener("beforeUnload", t(this, r, "m", f).bind(this));
    }
    get id() {
      return t(this, i, "f");
    }
    get dispatcherId() {
      return t(this, s, "f").id;
    }
    get remoteDispatcherId() {
      return t(this, n, "f");
    }
    get windowRemote() {
      return t(this, o, "f");
    }
    get type() {
      return P.MessageServiceTypes.FRAME;
    }
    get logger() {
      return t(this, c, "f");
    }
    onMessage(u) {
      this.logger.info(`[DISP-${this.dispatcherId}/FRAME-${this.id}] onMessage ${u.type}`), t(this, o, "f").closed ? (this.logger.info(`[DISP-${this.dispatcherId}/FRAME-${this.id}] onMessage /!\\ window closed /!\\`), this.terminate()) : (this.logger.debug(`[DISP-${this.dispatcherId}/FRAME-${this.id}] onMessage posting message to ${t(this, l, "f")}`), t(this, o, "f").postMessage(Object.assign(Object.assign({}, u), { _serviceId: t(this, i, "f") }), t(this, l, "f")));
    }
    sendMessage(u) {
      this.logger.debug(`[DISP-${this.dispatcherId}/FRAME-${this.id}] sendMessage ${u.type}`), t(this, s, "f").sendMessage(Object.assign(Object.assign({}, u), { _serviceId: this.id }));
    }
    terminate() {
      this.logger.info(`[DISP-${this.dispatcherId}/FRAME-${this.id}] terminate`), t(this, s, "f").removeService(this);
    }
  };
  return i = /* @__PURE__ */ new WeakMap(), s = /* @__PURE__ */ new WeakMap(), n = /* @__PURE__ */ new WeakMap(), a = /* @__PURE__ */ new WeakMap(), o = /* @__PURE__ */ new WeakMap(), l = /* @__PURE__ */ new WeakMap(), c = /* @__PURE__ */ new WeakMap(), r = /* @__PURE__ */ new WeakSet(), f = function() {
    this.onMessage({
      type: _.CONNECTION_CLOSING,
      _dispatcherId: this.dispatcherId,
      payload: {}
    }), this.terminate();
  }, m = function(u) {
    const p = u.data || {};
    p._serviceId && p._dispatcherId && p._dispatcherId === t(this, n, "f") && (this.logger.debug(`[DISP-${this.dispatcherId}/FRAME-${this.id}] handleMessage ${u.data.type}`), p.type === _.CONNECTION_CLOSING ? this.terminate() : this.sendMessage({
      _serviceId: t(this, i, "f"),
      type: p.type,
      payload: p.payload
    }));
  }, Wt.default = h, Wt;
}
var ru;
function tl() {
  return ru || (ru = 1, function(e) {
    var t = Pt && Pt.__classPrivateFieldSet || function(p, y, w, b, E) {
      if (b === "m") throw new TypeError("Private method is not writable");
      if (b === "a" && !E) throw new TypeError("Private accessor was defined without a setter");
      if (typeof y == "function" ? p !== y || !E : !y.has(p)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
      return b === "a" ? E.call(p, w) : E ? E.value = w : y.set(p, w), w;
    }, r = Pt && Pt.__classPrivateFieldGet || function(p, y, w, b) {
      if (w === "a" && !b) throw new TypeError("Private accessor was defined without a getter");
      if (typeof y == "function" ? p !== y || !b : !y.has(p)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
      return w === "m" ? b : w === "a" ? b.call(p) : b ? b.value : y.get(p);
    }, i = Pt && Pt.__importDefault || function(p) {
      return p && p.__esModule ? p : { default: p };
    }, s, n, a, o, l, c, f, m, d, g, P;
    Object.defineProperty(e, "__esModule", { value: !0 }), e.CONNECTION_CLOSING = e.CONNECTION_ACKNOWLEDGE = e.CONNECTION_REQUEST = void 0;
    const _ = _n(), h = wr(), v = i(Ef());
    e.CONNECTION_REQUEST = "__CONNNECTION_REQUEST__", e.CONNECTION_ACKNOWLEDGE = "__CONNECTION_ACKNOWLEDGE__", e.CONNECTION_CLOSING = "__CONNNECTION_CLOSING__";
    let u = class {
      constructor(y, w) {
        s.add(this), n.set(this, void 0), a.set(this, []), o.set(this, []), l.set(this, void 0), c.set(this, []), f.set(this, void 0), t(this, l, new h.Logger("MessageDispatcher", w), "f"), t(this, n, y || _.UUID.next(), "f"), this.logger.info(`[DISP-${this.id}] created`), t(this, f, r(this, s, "m", m).bind(this, window), "f"), window.addEventListener("message", r(this, f, "f")), window !== window.parent ? (this.logger.info(`[DISP-${this.id}] contact parent`), window.parent.postMessage({
          _dispatcherId: r(this, n, "f"),
          type: e.CONNECTION_REQUEST
        }, "*")) : window.documentPictureInPicture && window.documentPictureInPicture.addEventListener("enter", (b) => {
          const E = b.window;
          E.addEventListener("message", r(this, s, "m", m).bind(this, E));
        });
      }
      get data() {
        return {
          services: this.services,
          dispatchers: this.dispatchers
        };
      }
      get id() {
        return r(this, n, "f");
      }
      get services() {
        return r(this, a, "f").reduce((y, w) => (y[w.id] = w, y), {});
      }
      get dispatchers() {
        return r(this, o, "f").slice();
      }
      get logger() {
        return r(this, l, "f");
      }
      register(y) {
        return r(this, c, "f").push(y), () => this.unregister(y);
      }
      unregister(y) {
        t(this, c, _.ArrayUtils.removeElement(r(this, c, "f"), y), "f");
      }
      notify() {
        r(this, c, "f").forEach((y) => {
          try {
            y(this.data);
          } catch (w) {
            this.logger.error(`[DISP-${this.id}] listener failed with error`), this.logger.error(`${w}`);
          }
        });
      }
      terminate() {
        this.logger.info(`[DISP-${this.id}] stopping`), window.removeEventListener("message", r(this, f, "f")), window !== window.parent && (this.logger.info(`[DISP-${this.id}] notifying parent`), window.parent.postMessage({
          _dispatcherId: r(this, n, "f"),
          type: e.CONNECTION_CLOSING
        }, "*"));
      }
      reset() {
        t(this, a, [], "f"), t(this, o, [], "f"), this.notify();
      }
      getService(y) {
        return r(this, a, "f").find((w) => w.id === y);
      }
      addService(y) {
        return this.logger.info(`[DISP-${this.id}] add service [${y.id}]`), r(this, a, "f").includes(y) || r(this, a, "f").push(y), this.notify(), () => this.removeService(y);
      }
      removeService(y) {
        this.logger.info(`[DISP-${this.id}] remove service [${y.id}]`), t(this, a, r(this, a, "f").filter((w) => w !== y), "f"), y instanceof v.default && t(this, o, r(this, o, "f").filter((w) => w !== y.remoteDispatcherId), "f"), this.notify();
      }
      sendMessage(y) {
        this.logger.info(`[DISP-${this.id}] send message to ${r(this, a, "f").length - 1} services from [${r(this, n, "f")}-${y._serviceId}]`), r(this, a, "f").forEach((w) => {
          w.id !== y._serviceId && (this.logger.info(`[DISP-${this.id}] send message on service [${w.id}]`), w.onMessage(Object.assign({ _dispatcherId: r(this, n, "f") }, y)));
        });
      }
    };
    n = /* @__PURE__ */ new WeakMap(), a = /* @__PURE__ */ new WeakMap(), o = /* @__PURE__ */ new WeakMap(), l = /* @__PURE__ */ new WeakMap(), c = /* @__PURE__ */ new WeakMap(), f = /* @__PURE__ */ new WeakMap(), s = /* @__PURE__ */ new WeakSet(), m = function(y, w) {
      var b;
      if (!((b = w.data) === null || b === void 0) && b._dispatcherId)
        switch (w.data.type) {
          case e.CONNECTION_REQUEST: {
            r(this, s, "m", d).call(this, w, y);
            break;
          }
          case e.CONNECTION_ACKNOWLEDGE: {
            r(this, s, "m", g).call(this, w, y);
            break;
          }
          case e.CONNECTION_CLOSING: {
            r(this, s, "m", P).call(this, w);
            break;
          }
        }
    }, d = function(y, w = window) {
      const b = y.data._dispatcherId;
      this.logger.info(`[DISP-${this.id}] child trying to connect [${b}]`), this.logger.info(`[DISP-${this.id}] current childs: ${this.dispatchers.join(", ")}`);
      const E = y.source, S = y.origin;
      if (!r(this, o, "f").includes(b)) {
        const O = new v.default(this, w, E, S, b, void 0, this.logger.config);
        r(this, o, "f").push(b), this.addService(O), O.onMessage({
          _dispatcherId: r(this, n, "f"),
          _serviceId: O.id,
          type: e.CONNECTION_ACKNOWLEDGE,
          payload: null
        });
      }
    }, g = function(y, w = window) {
      this.logger.info(`[DISP-${this.id}] parent acknowledge connection`);
      const b = new v.default(this, w, window.parent, y.origin, y.data._dispatcherId, y.data._serviceId, this.logger.config);
      this.addService(b);
    }, P = function(y) {
      this.logger.info(`[DISP-${this.id}] child notify closing`);
    }, e.default = u;
  }(Pt)), Pt;
}
var wt = {}, nu;
function iu() {
  if (nu) return wt;
  nu = 1;
  var e = wt && wt.__classPrivateFieldSet || function(f, m, d, g, P) {
    if (g === "m") throw new TypeError("Private method is not writable");
    if (g === "a" && !P) throw new TypeError("Private accessor was defined without a setter");
    if (typeof m == "function" ? f !== m || !P : !m.has(f)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return g === "a" ? P.call(f, d) : P ? P.value = d : m.set(f, d), d;
  }, t = wt && wt.__classPrivateFieldGet || function(f, m, d, g) {
    if (d === "a" && !g) throw new TypeError("Private accessor was defined without a getter");
    if (typeof m == "function" ? f !== m || !g : !m.has(f)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return d === "m" ? g : d === "a" ? g.call(f) : g ? g.value : m.get(f);
  }, r, i, s, n;
  Object.defineProperty(wt, "__esModule", { value: !0 }), wt.ServiceEvent = void 0;
  const a = _n(), o = wr(), l = el();
  let c = class {
    constructor(m, d, g) {
      r.set(this, void 0), i.set(this, void 0), s.set(this, []), n.set(this, void 0), e(this, n, new o.Logger("EventService", g), "f"), e(this, r, d || a.UUID.next(), "f"), e(this, i, m, "f"), t(this, i, "f").addService(this), this.logger.info(`[DISP-${this.dispatcherId}/EVENT-${this.id}] created`);
    }
    get id() {
      return t(this, r, "f");
    }
    get dispatcherId() {
      return t(this, i, "f").id;
    }
    get type() {
      return l.MessageServiceTypes.EVENT;
    }
    get logger() {
      return t(this, n, "f");
    }
    terminate() {
      this.logger.info(`[DISP-${this.dispatcherId}/EVENT-${this.id}] terminate`), e(this, s, [], "f"), t(this, i, "f").removeService(this);
    }
    addHandler(m) {
      return this.logger.debug(`[DISP-${this.dispatcherId}/EVENT-${this.id}] add handler`), t(this, s, "f").push(m), this.removeHandler.bind(this, m);
    }
    removeHandler(m) {
      this.logger.debug(`[DISP-${this.dispatcherId}/EVENT-${this.id}] add handler`), e(this, s, a.ArrayUtils.removeElement(t(this, s, "f"), m), "f");
    }
    onMessage(m) {
      this.logger.debug(`[DISP-${this.dispatcherId}/EVENT-${this.id}] onMessage`), t(this, s, "f").forEach((d) => {
        try {
          d(m);
        } catch (g) {
          this.logger.error(`[DISP-${this.dispatcherId}/EVENT-${this.id}] handler failed with error`), this.logger.error(`${g}`);
        }
      });
    }
    sendMessage(m) {
      this.logger.info(`[DISP-${this.dispatcherId}/EVENT-${this.id}] sendMessage`), t(this, i, "f").sendMessage(Object.assign(Object.assign({}, m), { _serviceId: this.id }));
    }
  };
  return wt.ServiceEvent = c, r = /* @__PURE__ */ new WeakMap(), i = /* @__PURE__ */ new WeakMap(), s = /* @__PURE__ */ new WeakMap(), n = /* @__PURE__ */ new WeakMap(), wt;
}
var au;
function Sf() {
  return au || (au = 1, function(e) {
    var t = ft && ft.__classPrivateFieldSet || function(w, b, E, S, O) {
      if (S === "m") throw new TypeError("Private method is not writable");
      if (S === "a" && !O) throw new TypeError("Private accessor was defined without a setter");
      if (typeof b == "function" ? w !== b || !O : !b.has(w)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
      return S === "a" ? O.call(w, E) : O ? O.value = E : b.set(w, E), E;
    }, r = ft && ft.__classPrivateFieldGet || function(w, b, E, S) {
      if (E === "a" && !S) throw new TypeError("Private accessor was defined without a getter");
      if (typeof b == "function" ? w !== b || !S : !b.has(w)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
      return E === "m" ? S : E === "a" ? S.call(w) : S ? S.value : b.get(w);
    }, i = ft && ft.__importDefault || function(w) {
      return w && w.__esModule ? w : { default: w };
    }, s, n, a, o, l, c, f, m;
    Object.defineProperty(e, "__esModule", { value: !0 }), e.WardVersion = e.Ward = e.ServiceEvent = void 0;
    const d = _n(), g = i($f()), P = i(tl()), _ = iu(), h = wr();
    var v = iu();
    Object.defineProperty(e, "ServiceEvent", { enumerable: !0, get: function() {
      return v.ServiceEvent;
    } });
    class u {
      constructor(b, E, S) {
        n.set(this, void 0), a.set(this, void 0), o.set(this, void 0), l.set(this, []), c.set(this, []), f.set(this, []), m.set(this, new h.LogConfig()), t(this, n, b || d.UUID.next(), "f"), t(this, a, E || new g.default(void 0, this.logConfig), "f"), t(this, o, S || new P.default(void 0, this.logConfig), "f"), r(this, a, "f").register(this.notifyPlugins.bind(this)), r(this, o, "f").register(this.notifyServices.bind(this));
      }
      get id() {
        return r(this, n, "f");
      }
      get data() {
        return Object.assign(Object.assign({}, r(this, o, "f").data), r(this, a, "f").data);
      }
      get logConfig() {
        return r(this, m, "f");
      }
      register(b) {
        return r(this, l, "f").push(b), () => this.unregister(b);
      }
      unregister(b) {
        t(this, l, d.ArrayUtils.removeElement(r(this, l, "f"), b), "f");
      }
      registerPlugins(b) {
        return r(this, c, "f").push(b), () => this.unregisterPlugins(b);
      }
      unregisterPlugins(b) {
        t(this, c, d.ArrayUtils.removeElement(r(this, c, "f"), b), "f");
      }
      notifyPlugins() {
        r(this, c, "f").forEach((b) => {
          b(this.data);
        }), r(this, l, "f").forEach((b) => {
          b(this.data);
        });
      }
      registerServices(b) {
        return r(this, f, "f").push(b), () => this.unregisterServices(b);
      }
      unregisterServices(b) {
        t(this, f, d.ArrayUtils.removeElement(r(this, f, "f"), b), "f");
      }
      notifyServices() {
        r(this, f, "f").forEach((b) => {
          b(this.data);
        }), r(this, l, "f").forEach((b) => {
          b(this.data);
        });
      }
      reset() {
        r(this, a, "f").reset(), r(this, o, "f").reset();
      }
      loadPlugin(b) {
        r(this, a, "f").loadPlugin(b);
      }
      unloadPlugin(b) {
        r(this, a, "f").unloadPlugin(b);
      }
      addService(b) {
        return new _.ServiceEvent(r(this, o, "f"), b, this.logConfig);
      }
    }
    n = /* @__PURE__ */ new WeakMap(), a = /* @__PURE__ */ new WeakMap(), o = /* @__PURE__ */ new WeakMap(), l = /* @__PURE__ */ new WeakMap(), c = /* @__PURE__ */ new WeakMap(), f = /* @__PURE__ */ new WeakMap(), m = /* @__PURE__ */ new WeakMap();
    let p = "1.0.0", y;
    !((s = window.uncover) === null || s === void 0) && s.ward ? (console.warn(`Ward is already registered with version ${window.uncover.wardVersion || "older than 0.2.21"}`), y = window.uncover.ward, p = window.uncover.wardVersion) : (y = new u(), window.uncover = window.uncover || {}, window.uncover.ward = y, window.uncover.wardVersion = p), e.Ward = y, e.WardVersion = p;
  }(ft)), ft;
}
var $e = Sf();
const dt = Wu({
  plugin: null,
  loaded: !1,
  urls: {},
  roots: {},
  plugins: {},
  definitions: {},
  providers: {},
  services: {},
  dispatchers: []
});
$e.Ward.register(Df);
function Df() {
  dt.set($e.Ward.data);
}
const br = Wu({
  type: null,
  id: null
});
var Of = /* @__PURE__ */ de("<ui5-tree-item></ui5-tree-item>", 2);
function Tf(e, t) {
  ze(t, !1);
  const [r, i] = jt(), s = () => Tt(dt, "$WardStore", r), n = /* @__PURE__ */ ie();
  let a = Pr(t, "urlId", 8), o = /* @__PURE__ */ ie(), l = /* @__PURE__ */ ie();
  const c = br.subscribe((h) => {
    ee(o, h.type), ee(l, h.id);
  });
  let f = /* @__PURE__ */ ie(), m = /* @__PURE__ */ ie(), d = /* @__PURE__ */ ie();
  yr(() => {
    R(d).setAttribute("data-attribute-type", "url"), R(d).setAttribute("data-attribute-id", a());
  }), gn(() => {
    c();
  }), Ce(
    () => (s(), ar(a())),
    () => {
      ee(f, s().urls[a()]);
    }
  ), Ce(() => R(f), () => {
    ee(n, R(f).state === "LOADED" ? "Success" : R(f).state === "EXCLUDED" ? "Warning" : "Error");
  }), Ce(() => s(), () => {
    ee(m, s().roots);
  }), Ot(), et();
  var g = tr(), P = Gt(g);
  {
    var _ = (h) => {
      var v = Of();
      K(v, "icon", "world"), le(() => K(v, "highlight", R(n))), le(() => K(v, "text", a())), le(() => K(v, "data-attribute-id", a())), le(() => K(v, "selected", R(o) === "url" && R(l) === a())), ut(v, (u) => ee(d, u), () => R(d)), re(h, v);
    };
    De(P, (h) => {
      a() && h(_);
    });
  }
  re(e, g), Ke(), i();
}
var jf = /* @__PURE__ */ de('<ui5-panel><div style="width:100%;display:flex;align-items:center;" slot="header"><ui5-title> </ui5-title> <ui5-input></ui5-input> <ui5-button>Load plugin</ui5-button></div> <ui5-tree></ui5-tree></ui5-panel>', 2);
function Rf(e, t) {
  ze(t, !1);
  const [r, i] = jt(), s = () => Tt(dt, "$WardStore", r);
  let n = /* @__PURE__ */ ie(), a = /* @__PURE__ */ ie(), o = /* @__PURE__ */ ie(), l = /* @__PURE__ */ ie();
  yr(() => {
    R(a).addEventListener("input", c), R(a).addEventListener("change", f), R(o).addEventListener("click", m), R(l).addEventListener("item-click", d), R(l).addEventListener("item-delete", g);
  });
  function c() {
    R(a).value && R(a).value.trim() ? R(o).removeAttribute("disabled") : R(o).setAttribute("disabled", "");
  }
  function f() {
    c(), m();
  }
  function m() {
    R(a).value && R(a).value.trim() && ($e.Ward.loadPlugin(R(a).value), sn(a, R(a).value = ""));
  }
  function d(w) {
    br.update((b) => {
      const E = w.detail.item.getAttribute("data-attribute-type"), S = w.detail.item.getAttribute("data-attribute-id");
      return b.type === E && b.id === S ? { type: null, id: null } : { type: E, id: S };
    });
  }
  function g(w) {
    const b = w.detail.item.getAttribute("data-attribute-id");
    switch (w.detail.item.highlight) {
      case "Success": {
        $e.Ward.unloadPlugin(b);
        break;
      }
      case "Warning": {
        $e.Ward.loadPlugin(b);
        break;
      }
    }
  }
  Ce(() => s(), () => {
    ee(n, s().urls);
  }), Ot(), et();
  var P = jf(), _ = W(P), h = W(_);
  be(h, "margin-right:auto"), K(h, "slot", "startContent"), K(h, "level", "H5");
  var v = W(h, !0);
  L(h);
  var u = z(h, 2);
  K(u, "placeholder", "Enter plugin url"), ut(u, (w) => ee(a, w), () => R(a));
  var p = z(u, 2);
  K(p, "disabled", !0), be(p, "margin-left: 0.5rem"), K(p, "icon", "add"), ut(p, (w) => ee(o, w), () => R(o)), L(_);
  var y = z(_, 2);
  K(y, "mode", "Delete"), Te(y, 5, () => Object.keys(R(n)), Oe, (w, b) => {
    Tf(w, {
      get urlId() {
        return R(b);
      }
    });
  }), L(y), ut(y, (w) => ee(l, w), () => R(l)), L(P), le(
    (w) => te(v, w),
    [
      () => `URLs (${Object.values(R(n)).length})`
    ],
    He
  ), re(e, P), Ke(), i();
}
var Mf = /* @__PURE__ */ de("<ui5-tree-item></ui5-tree-item>", 2);
function rl(e, t) {
  ze(t, !1);
  const [r, i] = jt(), s = () => Tt(dt, "$WardStore", r), n = /* @__PURE__ */ ie();
  let a = Pr(t, "pluginId", 8), o = /* @__PURE__ */ ie(), l = /* @__PURE__ */ ie();
  const c = br.subscribe((h) => {
    ee(o, h.type), ee(l, h.id);
  });
  let f = /* @__PURE__ */ ie(), m = /* @__PURE__ */ ie(), d = /* @__PURE__ */ ie();
  yr(() => {
    R(d) && (R(d).setAttribute("data-attribute-type", "plugin"), R(d).setAttribute("data-attribute-id", a()));
  }), gn(() => {
    c();
  }), Ce(
    () => (s(), ar(a())),
    () => {
      ee(f, s().plugins[a()]);
    }
  ), Ce(() => s(), () => {
    ee(m, s().plugins);
  }), Ce(() => (R(f), R(m)), () => {
    var h;
    ee(n, (((h = R(f)) == null ? void 0 : h.dependencies) || []).map((v) => {
      const u = Object.values(R(m)).find((p) => p.loadUrl === v);
      return u == null ? void 0 : u.name;
    }));
  }), Ot(), et();
  var g = tr(), P = Gt(g);
  {
    var _ = (h) => {
      var v = Mf();
      K(v, "expanded", !0), K(v, "icon", "tree"), le(() => K(v, "text", a())), le(() => K(v, "selected", R(o) === "plugin" && R(l) === a())), Te(v, 5, () => R(n), Oe, (u, p) => {
        var y = tr(), w = Gt(y);
        rl(w, {
          get pluginId() {
            return R(p);
          }
        }), re(u, y);
      }), L(v), ut(v, (u) => ee(d, u), () => R(d)), re(h, v);
    };
    De(P, (h) => {
      a() && h(_);
    });
  }
  re(e, g), Ke(), i();
}
var Nf = /* @__PURE__ */ de('<ui5-panel><div style="width:100%;display:flex;align-items:center;" slot="header"><ui5-title> </ui5-title></div> <ui5-tree></ui5-tree></ui5-panel>', 2);
function If(e, t) {
  ze(t, !1);
  const [r, i] = jt(), s = () => Tt(dt, "$WardStore", r);
  let n = /* @__PURE__ */ ie(), a = /* @__PURE__ */ ie();
  yr(() => {
    R(a).addEventListener("item-click", o);
  });
  function o(g) {
    br.update((P) => {
      const _ = g.detail.item.getAttribute("data-attribute-type"), h = g.detail.item.getAttribute("data-attribute-id");
      return P.type === _ && P.id === h ? { type: null, id: null } : { type: _, id: h };
    });
  }
  Ce(() => s(), () => {
    ee(n, s().roots);
  }), Ot(), et();
  var l = Nf();
  be(l, "margin-top:1rem;");
  var c = W(l), f = W(c);
  be(f, "margin-right:auto"), K(f, "slot", "startContent"), K(f, "level", "H5");
  var m = W(f, !0);
  L(f), L(c);
  var d = z(c, 2);
  Te(d, 5, () => Object.keys(R(n)), Oe, (g, P) => {
    rl(g, {
      get pluginId() {
        return R(P);
      }
    });
  }), L(d), ut(d, (g) => ee(a, g), () => R(a)), L(l), le(
    (g) => te(m, g),
    [
      () => `Plugins (${Object.values(R(n)).length})`
    ],
    He
  ), re(e, l), Ke(), i();
}
var Cf = /* @__PURE__ */ de("<li> <ul><li><ui5-label>type:</ui5-label> </li> <li><ui5-label>mandatory:</ui5-label> </li> <li><ui5-label>array:</ui5-label> </li></ul></li>", 2), Af = /* @__PURE__ */ de("<li> <ul><li><ui5-label>type:</ui5-label> </li> <li><ui5-label>mandatory:</ui5-label> </li> <li><ui5-label>array:</ui5-label> </li></ul></li>", 2), kf = /* @__PURE__ */ de("<li> </li>"), qf = /* @__PURE__ */ de("<div><ui5-title> </ui5-title> <br> <div><ui5-label>Name:</ui5-label> </div> <br> <ui5-title> </ui5-title> <ul></ul> <ui5-title> </ui5-title> <ul></ul> <ui5-title> </ui5-title> <ul></ul></div>", 2), Uf = /* @__PURE__ */ de("<div>Deinition not found</div>");
function Lf(e, t) {
  ze(t, !1);
  const [r, i] = jt(), s = () => Tt(dt, "$WardStore", r);
  let n = Pr(t, "definitionId", 8), a = /* @__PURE__ */ ie();
  Ce(
    () => (s(), ar(n())),
    () => {
      ee(a, s().definitions[n()]);
    }
  ), Ot(), et();
  var o = tr(), l = Gt(o);
  {
    var c = (m) => {
      var d = qf(), g = W(d);
      K(g, "level", "H5");
      var P = W(g, !0);
      L(g);
      var _ = z(g, 4), h = W(_), v = z(h);
      L(_);
      var u = z(_, 4);
      K(u, "level", "H6");
      var p = W(u, !0);
      L(u);
      var y = z(u, 2);
      Te(y, 5, () => R(a).properties, Oe, (U, G) => {
        var F = Cf(), H = W(F), B = z(H), x = W(B), Z = W(x), X = z(Z);
        L(x);
        var oe = z(x, 2), q = W(oe), j = z(q);
        L(oe);
        var A = z(oe, 2), M = W(A), $ = z(M);
        L(A), L(B), L(F), le(
          (D, I) => {
            te(H, `${R(G).name ?? ""} `), te(X, ` ${R(G).type ?? ""}`), te(j, ` ${D ?? ""}`), te($, ` ${I ?? ""}`);
          },
          [
            () => String(R(G).mandatory),
            () => String(R(G).array)
          ],
          He
        ), re(U, F);
      }), L(y);
      var w = z(y, 2);
      K(w, "level", "H6");
      var b = W(w, !0);
      L(w);
      var E = z(w, 2);
      Te(E, 5, () => R(a).attributes, Oe, (U, G) => {
        var F = Af(), H = W(F), B = z(H), x = W(B), Z = W(x), X = z(Z);
        L(x);
        var oe = z(x, 2), q = W(oe), j = z(q);
        L(oe);
        var A = z(oe, 2), M = W(A), $ = z(M);
        L(A), L(B), L(F), le(
          (D, I) => {
            te(H, `${R(G).name ?? ""} `), te(X, ` ${R(G).type ?? ""}`), te(j, ` ${D ?? ""}`), te($, ` ${I ?? ""}`);
          },
          [
            () => String(R(G).mandatory),
            () => String(R(G).array)
          ],
          He
        ), re(U, F);
      }), L(E);
      var S = z(E, 2);
      K(S, "level", "H6");
      var O = W(S, !0);
      L(S);
      var C = z(S, 2);
      Te(C, 5, () => R(a).elements, Oe, (U, G) => {
        var F = kf(), H = W(F, !0);
        L(F), le(() => te(H, R(G).name)), re(U, F);
      }), L(C), L(d), le(() => {
        te(P, `Definition Details (${n()})`), te(v, ` ${R(a).name ?? ""}`), te(p, `Properties (${R(a).properties.length})`), te(b, `Attributes (${R(a).attributes.length})`), te(O, `Elements (${R(a).elements.length})`);
      }), re(m, d);
    }, f = (m) => {
      var d = Uf();
      re(m, d);
    };
    De(l, (m) => {
      R(a) ? m(c) : m(f, !1);
    });
  }
  re(e, o), Ke(), i();
}
var Ff = /* @__PURE__ */ de("<div><ui5-title> </ui5-title> <p> </p> <pre> </pre></div>", 2);
function Wf(e, t) {
  ze(t, !1);
  const [r, i] = jt(), s = () => Tt(dt, "$WardStore", r);
  let n = Pr(t, "urlId", 8), a = /* @__PURE__ */ ie();
  Ce(
    () => (s(), ar(n())),
    () => {
      ee(a, s().urls[n()]);
    }
  ), Ot(), et();
  var o = Ff(), l = W(o);
  K(l, "level", "H5");
  var c = W(l, !0);
  L(l);
  var f = z(l, 2), m = W(f, !0);
  L(f);
  var d = z(f, 2), g = W(d, !0);
  L(d), L(o), le(
    (P) => {
      te(c, `URL Details (${n()})`), te(m, n()), te(g, P);
    },
    [
      () => JSON.stringify(R(a).data, null, 2)
    ],
    He
  ), re(e, o), Ke(), i();
}
var Vf = /* @__PURE__ */ de("<li> </li>"), Hf = /* @__PURE__ */ de("<ul></ul>"), Gf = /* @__PURE__ */ de("<br>"), zf = /* @__PURE__ */ de("<li> </li>"), Kf = /* @__PURE__ */ de("<li> </li>"), Jf = /* @__PURE__ */ de("<div><ui5-title> </ui5-title> <br> <div><ui5-label>Name:</ui5-label> </div> <div><ui5-label>URL:</ui5-label> </div> <br> <ui5-title> </ui5-title> <!> <ui5-title> </ui5-title> <ul></ul> <ui5-title> </ui5-title> <ul></ul></div>", 2), Bf = /* @__PURE__ */ de("<div>Plugin not found</div>");
function Yf(e, t) {
  ze(t, !1);
  const [r, i] = jt(), s = () => Tt(dt, "$WardStore", r);
  let n = Pr(t, "pluginId", 8), a = /* @__PURE__ */ ie();
  Ce(
    () => (s(), ar(n())),
    () => {
      ee(a, s().plugins[n()]);
    }
  ), Ot(), et();
  var o = tr(), l = Gt(o);
  {
    var c = (m) => {
      var d = Jf(), g = W(d);
      K(g, "level", "H5");
      var P = W(g, !0);
      L(g);
      var _ = z(g, 4), h = W(_), v = z(h);
      L(_);
      var u = z(_, 2), p = W(u), y = z(p);
      L(u);
      var w = z(u, 4);
      K(w, "level", "H6");
      var b = W(w, !0);
      L(w);
      var E = z(w, 2);
      {
        var S = (x) => {
          var Z = Hf();
          Te(Z, 5, () => R(a).dependencies, Oe, (X, oe) => {
            var q = Vf(), j = W(q, !0);
            L(q), le(() => te(j, R(oe))), re(X, q);
          }), L(Z), re(x, Z);
        }, O = (x) => {
          var Z = Gf();
          re(x, Z);
        };
        De(E, (x) => {
          R(a).dependencies.length ? x(S) : x(O, !1);
        });
      }
      var C = z(E, 2);
      K(C, "level", "H6");
      var U = W(C, !0);
      L(C);
      var G = z(C, 2);
      Te(G, 5, () => R(a).defines, Oe, (x, Z) => {
        var X = zf(), oe = W(X, !0);
        L(X), le(() => te(oe, `${n()}/${R(Z).name}`)), re(x, X);
      }), L(G);
      var F = z(G, 2);
      K(F, "level", "H6");
      var H = W(F, !0);
      L(F);
      var B = z(F, 2);
      Te(B, 5, () => R(a).provides, Oe, (x, Z) => {
        var X = Kf(), oe = W(X, !0);
        L(X), le(() => te(oe, `${R(Z).define}/${R(Z).name}`)), re(x, X);
      }), L(B), L(d), le(() => {
        te(P, `Plugin Details (${n()})`), te(v, ` ${R(a).name ?? ""}`), te(y, ` ${R(a).url ?? ""}`), te(b, `Dependencies (${R(a).dependencies.length})`), te(U, `Defines (${R(a).defines.length})`), te(H, `Provides (${R(a).provides.length})`);
      }), re(m, d);
    }, f = (m) => {
      var d = Bf();
      re(m, d);
    };
    De(l, (m) => {
      R(a) ? m(c) : m(f, !1);
    });
  }
  re(e, o), Ke(), i();
}
var Xf = /* @__PURE__ */ de("<li> <ul><li><ui5-label>value:</ui5-label> </li> <li><ui5-label>type:</ui5-label> </li> <li><ui5-label>mandatory:</ui5-label> </li> <li><ui5-label>array:</ui5-label> </li></ul></li>", 2), Qf = /* @__PURE__ */ de("<li> <ul><li><ui5-label>type:</ui5-label> </li> <li><ui5-label>url:</ui5-label> </li> <li><ui5-label>element:</ui5-label> </li></ul></li>", 2), Zf = /* @__PURE__ */ de("<div><ui5-title>Provider Details</ui5-title> <br> <div><ui5-label>Name:</ui5-label> </div> <br> <ui5-title> </ui5-title> <ul></ul> <ui5-title> </ui5-title> <ul></ul></div>", 2);
function xf(e, t) {
  ze(t, !1);
  const [r, i] = jt(), s = () => Tt(dt, "$WardStore", r);
  let n = Pr(t, "providerId", 8), a = /* @__PURE__ */ ie();
  Ce(
    () => (s(), ar(n())),
    () => {
      ee(a, s().providers[n()]);
    }
  ), Ot(), et();
  var o = Zf(), l = W(o);
  K(l, "level", "H5");
  var c = z(l, 4), f = W(c), m = z(f);
  L(c);
  var d = z(c, 4);
  K(d, "level", "H6");
  var g = W(d, !0);
  L(d);
  var P = z(d, 2);
  Te(P, 5, () => Object.values(R(a).getAttributes()), Oe, (u, p) => {
    var y = Xf(), w = W(y), b = z(w), E = W(b), S = W(E), O = z(S);
    L(E);
    var C = z(E, 2), U = W(C), G = z(U);
    L(C);
    var F = z(C, 2), H = W(F), B = z(H);
    L(F);
    var x = z(F, 2), Z = W(x), X = z(Z);
    L(x), L(b), L(y), le(
      (oe, q) => {
        te(w, `${R(p).name ?? ""} `), te(O, ` ${R(p).value ?? ""}`), te(G, ` ${R(p).type ?? ""}`), te(B, ` ${oe ?? ""}`), te(X, ` ${q ?? ""}`);
      },
      [
        () => String(R(p).mandatory),
        () => String(R(p).array)
      ],
      He
    ), re(u, y);
  }), L(P);
  var _ = z(P, 2);
  K(_, "level", "H6");
  var h = W(_, !0);
  L(_);
  var v = z(_, 2);
  Te(v, 5, () => Object.values(R(a).getElements()), Oe, (u, p) => {
    var y = Qf(), w = W(y), b = z(w), E = W(b), S = W(E), O = z(S);
    L(E);
    var C = z(E, 2), U = W(C), G = z(U);
    L(C);
    var F = z(C, 2), H = W(F), B = z(H);
    L(F), L(b), L(y), le(
      (x, Z) => {
        te(w, `${R(p).name ?? ""} `), te(O, ` ${R(p).type ?? ""}`), te(G, ` ${x ?? ""}`), te(B, ` ${Z ?? ""}`);
      },
      [
        () => String(R(p).url),
        () => String(R(p).element)
      ],
      He
    ), re(u, y);
  }), L(v), L(o), le(
    (u, p) => {
      te(m, ` ${R(a).name ?? ""}`), te(g, u), te(h, p);
    },
    [
      () => `Attributes (${Object.values(R(a).getAttributes()).length})`,
      () => `Elements (${Object.values(R(a).getElements()).length})`
    ],
    He
  ), re(e, o), Ke(), i();
}
function eh(e, t) {
  ze(t, !1);
  let r = /* @__PURE__ */ ie(), i = /* @__PURE__ */ ie();
  const s = br.subscribe((l) => {
    ee(r, l.type), ee(i, l.id);
  });
  gn(() => {
    s();
  }), et();
  var n = tr(), a = Gt(n);
  {
    var o = (l) => {
      var c = tr(), f = Gt(c);
      {
        var m = (g) => {
          Wf(g, {
            get urlId() {
              return R(i);
            }
          });
        }, d = (g, P) => {
          {
            var _ = (v) => {
              Yf(v, {
                get pluginId() {
                  return R(i);
                }
              });
            }, h = (v, u) => {
              {
                var p = (w) => {
                  Lf(w, {
                    get definitionId() {
                      return R(i);
                    }
                  });
                }, y = (w, b) => {
                  {
                    var E = (S) => {
                      xf(S, {
                        get providerId() {
                          return R(i);
                        }
                      });
                    };
                    De(
                      w,
                      (S) => {
                        R(r) === "provider" && S(E);
                      },
                      b
                    );
                  }
                };
                De(
                  v,
                  (w) => {
                    R(r) === "definition" ? w(p) : w(y, !1);
                  },
                  u
                );
              }
            };
            De(
              g,
              (v) => {
                R(r) === "plugin" ? v(_) : v(h, !1);
              },
              P
            );
          }
        };
        De(f, (g) => {
          R(r) === "url" ? g(m) : g(d, !1);
        });
      }
      re(l, c);
    };
    De(a, (l) => {
      R(i) && l(o);
    });
  }
  re(e, n), Ke();
}
var th = /* @__PURE__ */ de('<ui5-tab><ui5-flexible-column-layout><div slot="startColumn" style="padding-right:1em;"><!> <!></div> <div slot="midColumn"><!></div></ui5-flexible-column-layout></ui5-tab>', 2);
function rh(e, t) {
  ze(t, !1);
  const [r, i] = jt(), s = () => Tt(dt, "$WardStore", r), n = /* @__PURE__ */ ie();
  let a = /* @__PURE__ */ ie(), o = /* @__PURE__ */ ie();
  const l = br.subscribe((v) => {
    ee(a, v.type), ee(o, v.id);
  });
  let c = /* @__PURE__ */ ie();
  gn(() => {
    l();
  }), Ce(
    () => (R(o), R(a)),
    () => {
      ee(n, R(o) && R(a) ? "TwoColumnsMidExpanded" : "OneColumn");
    }
  ), Ce(() => s(), () => {
    ee(c, s());
  }), Ot(), et();
  var f = th();
  K(f, "text", "Plugins"), K(f, "data-ui5-compact-size", !0);
  var m = W(f);
  le(() => K(m, "layout", R(n))), be(m, "height:100%");
  var d = W(m), g = W(d);
  Rf(g, {});
  var P = z(g, 2);
  If(P, {}), L(d);
  var _ = z(d, 2), h = W(_);
  eh(h, {}), L(_), L(m), L(f), re(e, f), Ke(), i();
}
var Xt = wr(), nh = /* @__PURE__ */ de("<ui5-segmented-button-item> </ui5-segmented-button-item>", 2), ih = /* @__PURE__ */ de("<ui5-segmented-button></ui5-segmented-button>", 2), ah = /* @__PURE__ */ de("<ui5-li><ui5-label> </ui5-label></ui5-li>", 2), sh = /* @__PURE__ */ de("<ui5-panel><ui5-list></ui5-list></ui5-panel>", 2), oh = /* @__PURE__ */ de("<ui5-button>Send Test Message</ui5-button> <ui5-button>Stop Test Service</ui5-button>", 3), uh = /* @__PURE__ */ de("<ui5-button>Start Test Service</ui5-button>", 2), lh = /* @__PURE__ */ de("<ui5-li><ui5-label> </ui5-label></ui5-li>", 2), ch = /* @__PURE__ */ de('<ui5-panel><div style="width:100%;display:flex;align-items:center;" slot="header"><ui5-title> </ui5-title> <!></div> <ui5-list></ui5-list></ui5-panel>', 2), dh = /* @__PURE__ */ de("<ui5-button>Reset Messages</ui5-button>", 2), fh = /* @__PURE__ */ de('<ui5-li-custom><div style="width:100%"><div style="display:flex;align-items:center;width:100%;height:2rem;"><ui5-icon></ui5-icon> <span> </span> <ui5-label> </ui5-label></div> <div><div><ui5-label> </ui5-label></div> <div> </div></div></div></ui5-li-custom>', 2), hh = /* @__PURE__ */ de('<ui5-tab><!> <!> <!> <ui5-panel><div style="width:100%;display:flex;align-items:center;" slot="header"><ui5-title> </ui5-title> <!></div> <ui5-list></ui5-list></ui5-panel></ui5-tab>', 2);
function mh(e, t) {
  ze(t, !1);
  let r = /* @__PURE__ */ ie([]), i = /* @__PURE__ */ ie(null), s = /* @__PURE__ */ ie($e.Ward.data), n = /* @__PURE__ */ ie(), a = /* @__PURE__ */ ie();
  $e.Ward.register(c);
  const o = $e.Ward.addService("ward-dev-tools--log-service");
  let l = /* @__PURE__ */ ie(null);
  o.addHandler((H) => {
    ee(r, [
      ...R(r),
      { ...H, timestamp: /* @__PURE__ */ new Date() }
    ]);
  });
  function c() {
    ee(s, $e.Ward.data);
  }
  function f() {
    R(l) && R(l).sendMessage({ type: "test-message", payload: "test" });
  }
  function m() {
    ee(l, $e.Ward.addService("ward-dev-tools--test-service"));
  }
  function d() {
    R(l) && R(l).terminate(), ee(l, null);
  }
  function g() {
    ee(i, null), ee(r, []);
  }
  yr(() => {
    R(n).addEventListener("selection-change", P), R(a).addEventListener("selection-change", _);
  }), gn(() => {
    $e.Ward.unregister(c), o.terminate(), R(l) && R(l).terminate();
  });
  function P(H) {
    switch (parseInt(H.detail.selectedItems[0].getAttribute("data-log-level"))) {
      case Xt.LogLevels.DEBUG: {
        $e.Ward.logConfig.debug();
        break;
      }
      case Xt.LogLevels.INFO: {
        $e.Ward.logConfig.info();
        break;
      }
      case Xt.LogLevels.WARN: {
        $e.Ward.logConfig.warn();
        break;
      }
      case Xt.LogLevels.ERROR: {
        $e.Ward.logConfig.error();
        break;
      }
      default: {
        $e.Ward.logConfig.off();
        break;
      }
    }
  }
  function _(H) {
    const B = R(r)[H.detail.selectedItems[0].getAttribute("data-message-index")];
    ee(i, B);
  }
  et();
  var h = hh();
  K(h, "text", "Services"), be(h, "display:flex;"), K(h, "data-ui5-compact-size", !0);
  var v = W(h);
  {
    var u = (H) => {
      var B = ih();
      Te(B, 5, () => Object.keys(Xt.LogLevels), Oe, (x, Z) => {
        var X = nh();
        le(() => K(X, "data-log-level", Xt.LogLevels[R(Z)])), le(() => K(X, "pressed", Xt.LogLevels[R(Z)] === $e.Ward.logConfig.level));
        var oe = W(X, !0);
        L(X), le(() => te(oe, R(Z))), re(x, X);
      }), L(B), ut(B, (x) => ee(n, x), () => R(n)), re(H, B);
    };
    De(v, (H) => {
      window.uncover.wardVersion && H(u);
    });
  }
  var p = z(v, 2);
  {
    var y = (H) => {
      var B = sh();
      le(() => K(B, "header-text", `Dispatchers (${Object.values(R(s).dispatchers).length})`)), be(B, "margin-top:1rem;");
      var x = W(B);
      Te(x, 5, () => Object.values(R(s).dispatchers), Oe, (Z, X) => {
        var oe = ah(), q = W(oe), j = W(q, !0);
        L(q), L(oe), le(() => te(j, R(X))), re(Z, oe);
      }), L(x), L(B), re(H, B);
    };
    De(p, (H) => {
      Object.values(R(s).dispatchers).length && H(y);
    });
  }
  var w = z(p, 2);
  {
    var b = (H) => {
      var B = ch();
      be(B, "margin-top:1rem;");
      var x = W(B), Z = W(x);
      be(Z, "margin-right:auto"), K(Z, "slot", "startContent"), K(Z, "level", "H5");
      var X = W(Z, !0);
      L(Z);
      var oe = z(Z, 2);
      {
        var q = (M) => {
          var $ = oh(), D = Gt($);
          K(D, "design", "Emphasized"), K(D, "slot", "endContent");
          var I = z(D, 2);
          be(I, "margin-left: 0.5rem"), K(I, "design", "Negative"), K(I, "slot", "endContent"), hr("click", D, f), hr("click", I, d), re(M, $);
        }, j = (M) => {
          var $ = uh();
          K($, "design", "Emphasized"), K($, "slot", "endContent"), hr("click", $, m), re(M, $);
        };
        De(oe, (M) => {
          R(l) ? M(q) : M(j, !1);
        });
      }
      L(x);
      var A = z(x, 2);
      Te(A, 5, () => Object.values(R(s).services), Oe, (M, $) => {
        var D = lh();
        le(() => K(D, "additional-text", `${R(r).filter((Y) => Y._serviceId === R($).id).length} messages`)), K(D, "additional-text-state", "Information"), le(() => K(D, "icon", R($).type === "event" ? "enter-more" : "journey-arrive")), le(() => K(D, "tooltip", R($).type === "event" ? "local service" : "iframe service"));
        var I = W(D), J = W(I, !0);
        L(I), L(D), le(() => te(J, R($).id)), re(M, D);
      }), L(A), L(B), le(
        (M) => te(X, M),
        [
          () => `Services (${Object.values(R(s).services).length})`
        ],
        He
      ), re(H, B);
    };
    De(w, (H) => {
      Object.values(R(s).services).length && H(b);
    });
  }
  var E = z(w, 2);
  le(() => K(E, "header-text", `Messages (${R(r).length})`)), be(E, "margin-top:1rem;");
  var S = W(E), O = W(S);
  be(O, "margin-right:auto"), K(O, "slot", "startContent"), K(O, "level", "H5");
  var C = W(O, !0);
  L(O);
  var U = z(O, 2);
  {
    var G = (H) => {
      var B = dh();
      K(B, "slot", "endContent"), hr("click", B, g), re(H, B);
    };
    De(U, (H) => {
      R(r).length && H(G);
    });
  }
  L(S);
  var F = z(S, 2);
  K(F, "mode", "SingleSelect"), Te(F, 5, () => R(r).toReversed(), Oe, (H, B, x) => {
    var Z = fh();
    be(Z, "padding:0.5rem"), le(() => K(Z, "data-message-index", R(r).length - 1 - x));
    var X = W(Z), oe = W(X), q = W(oe);
    be(q, "margin-inline-end:0.5rem"), K(q, "name", "email");
    var j = z(q, 2), A = W(j, !0);
    L(j);
    var M = z(j, 2);
    be(M, "margin-inline-start:auto");
    var $ = W(M, !0);
    L(M), L(oe);
    var D = z(oe, 2), I = W(D), J = W(I);
    be(J, "height:1.5rem");
    var Y = W(J, !0);
    L(J), L(I);
    var ce = z(I, 2), ue = W(ce, !0);
    L(ce), L(D), L(X), L(Z), le(
      (T, N) => {
        te(A, R(B).type), te($, T), be(D, `display:${R(i) === R(B) ? "block" : "none"}`), te(Y, `Sent by ${R(B)._dispatcherId} | ${R(B)._serviceId}`), te(ue, N);
      },
      [
        () => R(B).timestamp.toLocaleTimeString("en-us", { hour12: !1 }),
        () => JSON.stringify(R(B).payload, null, 2)
      ],
      He
    ), re(H, Z);
  }), L(F), ut(F, (H) => ee(a, H), () => R(a)), L(E), L(h), le(() => te(C, `Messages (${R(r).length})`)), re(e, h), Ke();
}
var ph = /* @__PURE__ */ de("<ui5-tabcontainer><!> <!></ui5-tabcontainer>", 2);
function vh(e) {
  var t = ph();
  K(t, "fixed", !0), K(t, "data-ui5-compact-size", !0), ra(t, 1, "svelte-1qpu4yh");
  var r = W(t);
  rh(r, {});
  var i = z(r, 2);
  mh(i, {}), L(t), re(e, t);
}
customElements.define("ward-dev-tools-content", Hu(vh, {}, [], [], !0));
