var ml = Object.defineProperty;
var ja = (e) => {
  throw TypeError(e);
};
var pl = (e, t, r) => t in e ? ml(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var Je = (e, t, r) => pl(e, typeof t != "symbol" ? t + "" : t, r), Ma = (e, t, r) => t.has(e) || ja("Cannot " + r);
var Ne = (e, t, r) => (Ma(e, t, "read from private field"), r ? r.call(e) : t.get(e)), Ai = (e, t, r) => t.has(e) ? ja("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), Li = (e, t, r, i) => (Ma(e, t, "write to private field"), i ? i.call(e, r) : t.set(e, r), r);
const vl = "5";
var pu;
typeof window < "u" && ((pu = window.__svelte ?? (window.__svelte = {})).v ?? (pu.v = /* @__PURE__ */ new Set())).add(vl);
let yr = !1, gl = !1;
function _l() {
  yr = !0;
}
_l();
const yl = 1, Pl = 2, wl = 16, bl = 2, $l = 1, El = 2, la = "[", ca = "[!", da = "]", cn = {}, Ie = Symbol(), Sl = "http://www.w3.org/1999/xhtml", Na = !1, ct = 2, vu = 4, wi = 8, fa = 16, Ot = 32, ir = 64, li = 128, Ve = 256, ci = 512, Ae = 1024, Tt = 2048, ar = 4096, St = 8192, bi = 16384, Dl = 32768, ha = 65536, Ol = 1 << 17, Tl = 1 << 19, gu = 1 << 20, xi = 1 << 21, xt = Symbol("$state"), _u = Symbol("legacy props"), Rl = Symbol("");
var ma = Array.isArray, jl = Array.prototype.indexOf, pa = Array.from, di = Object.keys, fn = Object.defineProperty, er = Object.getOwnPropertyDescriptor, yu = Object.getOwnPropertyDescriptors, Ml = Object.prototype, Nl = Array.prototype, va = Object.getPrototypeOf, Ia = Object.isExtensible;
const vr = () => {
};
function Il(e) {
  return e();
}
function fi(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
let hn = [], ea = [];
function Pu() {
  var e = hn;
  hn = [], fi(e);
}
function Cl() {
  var e = ea;
  ea = [], fi(e);
}
function wu(e) {
  hn.length === 0 && queueMicrotask(Pu), hn.push(e);
}
function Ca() {
  hn.length > 0 && Pu(), ea.length > 0 && Cl();
}
function bu(e) {
  return e === this.v;
}
function $u(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function Eu(e) {
  return !$u(e, this.v);
}
function Al(e) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function Ll() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function ql(e) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function kl() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function Ul() {
  throw new Error("https://svelte.dev/e/hydration_failed");
}
function Fl() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function Wl() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function Vl() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function mr(e, t) {
  if (typeof e != "object" || e === null || xt in e)
    return e;
  const r = va(e);
  if (r !== Ml && r !== Nl)
    return e;
  var i = /* @__PURE__ */ new Map(), s = ma(e), n = Nt(0), a = he, o = (u) => {
    var c = he;
    He(a);
    var f;
    return f = u(), He(c), f;
  };
  return s && i.set("length", Nt(
    /** @type {any[]} */
    e.length
  )), new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(u, c, f) {
        (!("value" in f) || f.configurable === !1 || f.enumerable === !1 || f.writable === !1) && Fl();
        var h = i.get(c);
        return h === void 0 ? (h = o(() => Nt(f.value)), i.set(c, h)) : ee(
          h,
          o(() => mr(f.value))
        ), !0;
      },
      deleteProperty(u, c) {
        var f = i.get(c);
        if (f === void 0)
          c in u && i.set(
            c,
            o(() => Nt(Ie))
          );
        else {
          if (s && typeof c == "string") {
            var h = (
              /** @type {Source<number>} */
              i.get("length")
            ), d = Number(c);
            Number.isInteger(d) && d < h.v && ee(h, d);
          }
          ee(f, Ie), Aa(n);
        }
        return !0;
      },
      get(u, c, f) {
        var P;
        if (c === xt)
          return e;
        var h = i.get(c), d = c in u;
        if (h === void 0 && (!d || (P = er(u, c)) != null && P.writable) && (h = o(() => Nt(mr(d ? u[c] : Ie))), i.set(c, h)), h !== void 0) {
          var g = j(h);
          return g === Ie ? void 0 : g;
        }
        return Reflect.get(u, c, f);
      },
      getOwnPropertyDescriptor(u, c) {
        var f = Reflect.getOwnPropertyDescriptor(u, c);
        if (f && "value" in f) {
          var h = i.get(c);
          h && (f.value = j(h));
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
      has(u, c) {
        var g;
        if (c === xt)
          return !0;
        var f = i.get(c), h = f !== void 0 && f.v !== Ie || Reflect.has(u, c);
        if (f !== void 0 || me !== null && (!h || (g = er(u, c)) != null && g.writable)) {
          f === void 0 && (f = o(() => Nt(h ? mr(u[c]) : Ie)), i.set(c, f));
          var d = j(f);
          if (d === Ie)
            return !1;
        }
        return h;
      },
      set(u, c, f, h) {
        var p;
        var d = i.get(c), g = c in u;
        if (s && c === "length")
          for (var P = f; P < /** @type {Source<number>} */
          d.v; P += 1) {
            var _ = i.get(P + "");
            _ !== void 0 ? ee(_, Ie) : P in u && (_ = o(() => Nt(Ie)), i.set(P + "", _));
          }
        d === void 0 ? (!g || (p = er(u, c)) != null && p.writable) && (d = o(() => Nt(void 0)), ee(
          d,
          o(() => mr(f))
        ), i.set(c, d)) : (g = d.v !== Ie, ee(
          d,
          o(() => mr(f))
        ));
        var m = Reflect.getOwnPropertyDescriptor(u, c);
        if (m != null && m.set && m.set.call(h, f), !g) {
          if (s && typeof c == "string") {
            var v = (
              /** @type {Source<number>} */
              i.get("length")
            ), l = Number(c);
            Number.isInteger(l) && l >= v.v && ee(v, l + 1);
          }
          Aa(n);
        }
        return !0;
      },
      ownKeys(u) {
        j(n);
        var c = Reflect.ownKeys(u).filter((d) => {
          var g = i.get(d);
          return g === void 0 || g.v !== Ie;
        });
        for (var [f, h] of i)
          h.v !== Ie && !(f in u) && c.push(f);
        return c;
      },
      setPrototypeOf() {
        Wl();
      }
    }
  );
}
function Aa(e, t = 1) {
  ee(e, e.v + t);
}
const mn = /* @__PURE__ */ new Map();
function pn(e, t) {
  var r = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: e,
    reactions: null,
    equals: bu,
    rv: 0,
    wv: 0
  };
  return r;
}
function Nt(e, t) {
  const r = pn(e);
  return Kl(r), r;
}
// @__NO_SIDE_EFFECTS__
function ie(e, t = !1) {
  var i;
  const r = pn(e);
  return t || (r.equals = Eu), yr && ge !== null && ge.l !== null && ((i = ge.l).s ?? (i.s = [])).push(r), r;
}
function un(e, t) {
  return ee(
    e,
    sr(() => j(e))
  ), t;
}
function ee(e, t, r = !1) {
  he !== null && !ut && Oi() && (he.f & (ct | fa)) !== 0 && !(Re != null && Re.includes(e)) && Vl();
  let i = r ? mr(t) : t;
  return Su(e, i);
}
function Su(e, t) {
  if (!e.equals(t)) {
    var r = e.v;
    gn ? mn.set(e, t) : mn.set(e, r), e.v = t, e.wv = Cu(), Du(e, Tt), Oi() && me !== null && (me.f & Ae) !== 0 && (me.f & (Ot | ir)) === 0 && (Fe === null ? Bl([e]) : Fe.push(e));
  }
  return t;
}
function Du(e, t) {
  var r = e.reactions;
  if (r !== null)
    for (var i = Oi(), s = r.length, n = 0; n < s; n++) {
      var a = r[n], o = a.f;
      (o & Tt) === 0 && (!i && a === me || (et(a, t), (o & (Ae | Ve)) !== 0 && ((o & ct) !== 0 ? Du(
        /** @type {Derived} */
        a,
        ar
      ) : Di(
        /** @type {Effect} */
        a
      ))));
    }
}
// @__NO_SIDE_EFFECTS__
function ga(e) {
  var t = ct | Tt, r = he !== null && (he.f & ct) !== 0 ? (
    /** @type {Derived} */
    he
  ) : null;
  return me === null || r !== null && (r.f & Ve) !== 0 ? t |= Ve : me.f |= gu, {
    ctx: ge,
    deps: null,
    effects: null,
    equals: bu,
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
function Ge(e) {
  const t = /* @__PURE__ */ ga(e);
  return t.equals = Eu, t;
}
function Ou(e) {
  var t = e.effects;
  if (t !== null) {
    e.effects = null;
    for (var r = 0; r < t.length; r += 1)
      Dt(
        /** @type {Effect} */
        t[r]
      );
  }
}
function Gl(e) {
  for (var t = e.parent; t !== null; ) {
    if ((t.f & ct) === 0)
      return (
        /** @type {Effect} */
        t
      );
    t = t.parent;
  }
  return null;
}
function Hl(e) {
  var t, r = me;
  dt(Gl(e));
  try {
    Ou(e), t = Lu(e);
  } finally {
    dt(r);
  }
  return t;
}
function Tu(e) {
  var t = Hl(e), r = (zt || (e.f & Ve) !== 0) && e.deps !== null ? ar : Ae;
  et(e, r), e.equals(t) || (e.v = t, e.wv = Cu());
}
function _a(e) {
  console.warn("https://svelte.dev/e/hydration_mismatch");
}
let ve = !1;
function Ze(e) {
  ve = e;
}
let _e;
function xe(e) {
  if (e === null)
    throw _a(), cn;
  return _e = e;
}
function $i() {
  return xe(
    /** @type {TemplateNode} */
    /* @__PURE__ */ Bt(_e)
  );
}
function U(e) {
  if (ve) {
    if (/* @__PURE__ */ Bt(_e) !== null)
      throw _a(), cn;
    _e = e;
  }
}
function ta() {
  for (var e = 0, t = _e; ; ) {
    if (t.nodeType === 8) {
      var r = (
        /** @type {Comment} */
        t.data
      );
      if (r === da) {
        if (e === 0) return t;
        e -= 1;
      } else (r === la || r === ca) && (e += 1);
    }
    var i = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Bt(t)
    );
    t.remove(), t = i;
  }
}
var La, Ru, ju, Mu;
function ra() {
  if (La === void 0) {
    La = window, Ru = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype, r = Text.prototype;
    ju = er(t, "firstChild").get, Mu = er(t, "nextSibling").get, Ia(e) && (e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__style = void 0, e.__e = void 0), Ia(r) && (r.__t = void 0);
  }
}
function _r(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function rr(e) {
  return ju.call(e);
}
// @__NO_SIDE_EFFECTS__
function Bt(e) {
  return Mu.call(e);
}
function W(e, t) {
  if (!ve)
    return /* @__PURE__ */ rr(e);
  var r = (
    /** @type {TemplateNode} */
    /* @__PURE__ */ rr(_e)
  );
  if (r === null)
    r = _e.appendChild(_r());
  else if (t && r.nodeType !== 3) {
    var i = _r();
    return r == null || r.before(i), xe(i), i;
  }
  return xe(r), r;
}
function Kt(e, t) {
  if (!ve) {
    var r = (
      /** @type {DocumentFragment} */
      /* @__PURE__ */ rr(
        /** @type {Node} */
        e
      )
    );
    return r instanceof Comment && r.data === "" ? /* @__PURE__ */ Bt(r) : r;
  }
  return _e;
}
function z(e, t = 1, r = !1) {
  let i = ve ? _e : e;
  for (var s; t--; )
    s = i, i = /** @type {TemplateNode} */
    /* @__PURE__ */ Bt(i);
  if (!ve)
    return i;
  var n = i == null ? void 0 : i.nodeType;
  if (r && n !== 3) {
    var a = _r();
    return i === null ? s == null || s.after(a) : i.before(a), xe(a), a;
  }
  return xe(i), /** @type {TemplateNode} */
  i;
}
function Nu(e) {
  e.textContent = "";
}
let oi = !1, hi = !1, mi = null, tr = !1, gn = !1;
function qa(e) {
  gn = e;
}
let dn = [];
let he = null, ut = !1;
function He(e) {
  he = e;
}
let me = null;
function dt(e) {
  me = e;
}
let Re = null;
function zl(e) {
  Re = e;
}
function Kl(e) {
  he !== null && he.f & xi && (Re === null ? zl([e]) : Re.push(e));
}
let Se = null, qe = 0, Fe = null;
function Bl(e) {
  Fe = e;
}
let Iu = 1, pi = 0, zt = !1;
function Cu() {
  return ++Iu;
}
function Pr(e) {
  var h;
  var t = e.f;
  if ((t & Tt) !== 0)
    return !0;
  if ((t & ar) !== 0) {
    var r = e.deps, i = (t & Ve) !== 0;
    if (r !== null) {
      var s, n, a = (t & ci) !== 0, o = i && me !== null && !zt, u = r.length;
      if (a || o) {
        var c = (
          /** @type {Derived} */
          e
        ), f = c.parent;
        for (s = 0; s < u; s++)
          n = r[s], (a || !((h = n == null ? void 0 : n.reactions) != null && h.includes(c))) && (n.reactions ?? (n.reactions = [])).push(c);
        a && (c.f ^= ci), o && f !== null && (f.f & Ve) === 0 && (c.f ^= Ve);
      }
      for (s = 0; s < u; s++)
        if (n = r[s], Pr(
          /** @type {Derived} */
          n
        ) && Tu(
          /** @type {Derived} */
          n
        ), n.wv > e.wv)
          return !0;
    }
    (!i || me !== null && !zt) && et(e, Ae);
  }
  return !1;
}
function Jl(e, t) {
  for (var r = t; r !== null; ) {
    if ((r.f & li) !== 0)
      try {
        r.fn(e);
        return;
      } catch {
        r.f ^= li;
      }
    r = r.parent;
  }
  throw oi = !1, e;
}
function Yl(e) {
  return (e.f & bi) === 0 && (e.parent === null || (e.parent.f & li) === 0);
}
function Ei(e, t, r, i) {
  if (oi) {
    if (r === null && (oi = !1), Yl(t))
      throw e;
    return;
  }
  r !== null && (oi = !0);
  {
    Jl(e, t);
    return;
  }
}
function Au(e, t, r = !0) {
  var i = e.reactions;
  if (i !== null)
    for (var s = 0; s < i.length; s++) {
      var n = i[s];
      Re != null && Re.includes(e) || ((n.f & ct) !== 0 ? Au(
        /** @type {Derived} */
        n,
        t,
        !1
      ) : t === n && (r ? et(n, Tt) : (n.f & Ae) !== 0 && et(n, ar), Di(
        /** @type {Effect} */
        n
      )));
    }
}
function Lu(e) {
  var g;
  var t = Se, r = qe, i = Fe, s = he, n = zt, a = Re, o = ge, u = ut, c = e.f;
  Se = /** @type {null | Value[]} */
  null, qe = 0, Fe = null, zt = (c & Ve) !== 0 && (ut || !tr || he === null), he = (c & (Ot | ir)) === 0 ? e : null, Re = null, ka(e.ctx), ut = !1, pi++, e.f |= xi;
  try {
    var f = (
      /** @type {Function} */
      (0, e.fn)()
    ), h = e.deps;
    if (Se !== null) {
      var d;
      if (vi(e, qe), h !== null && qe > 0)
        for (h.length = qe + Se.length, d = 0; d < Se.length; d++)
          h[qe + d] = Se[d];
      else
        e.deps = h = Se;
      if (!zt)
        for (d = qe; d < h.length; d++)
          ((g = h[d]).reactions ?? (g.reactions = [])).push(e);
    } else h !== null && qe < h.length && (vi(e, qe), h.length = qe);
    if (Oi() && Fe !== null && !ut && h !== null && (e.f & (ct | ar | Tt)) === 0)
      for (d = 0; d < /** @type {Source[]} */
      Fe.length; d++)
        Au(
          Fe[d],
          /** @type {Effect} */
          e
        );
    return s !== null && (pi++, Fe !== null && (i === null ? i = Fe : i.push(.../** @type {Source[]} */
    Fe))), f;
  } finally {
    Se = t, qe = r, Fe = i, he = s, zt = n, Re = a, ka(o), ut = u, e.f ^= xi;
  }
}
function Xl(e, t) {
  let r = t.reactions;
  if (r !== null) {
    var i = jl.call(r, e);
    if (i !== -1) {
      var s = r.length - 1;
      s === 0 ? r = t.reactions = null : (r[i] = r[s], r.pop());
    }
  }
  r === null && (t.f & ct) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (Se === null || !Se.includes(t)) && (et(t, ar), (t.f & (Ve | ci)) === 0 && (t.f ^= ci), Ou(
    /** @type {Derived} **/
    t
  ), vi(
    /** @type {Derived} **/
    t,
    0
  ));
}
function vi(e, t) {
  var r = e.deps;
  if (r !== null)
    for (var i = t; i < r.length; i++)
      Xl(e, r[i]);
}
function Si(e) {
  var t = e.f;
  if ((t & bi) === 0) {
    et(e, Ae);
    var r = me, i = ge, s = tr;
    me = e, tr = !0;
    try {
      (t & fa) !== 0 ? sc(e) : Fu(e), Uu(e);
      var n = Lu(e);
      e.teardown = typeof n == "function" ? n : null, e.wv = Iu;
      var a = e.deps, o;
      Na && gl && e.f & Tt;
    } catch (u) {
      Ei(u, e, r, i || e.ctx);
    } finally {
      tr = s, me = r;
    }
  }
}
function Ql() {
  try {
    kl();
  } catch (e) {
    if (mi !== null)
      Ei(e, mi, null);
    else
      throw e;
  }
}
function qu() {
  var e = tr;
  try {
    var t = 0;
    for (tr = !0; dn.length > 0; ) {
      t++ > 1e3 && Ql();
      var r = dn, i = r.length;
      dn = [];
      for (var s = 0; s < i; s++) {
        var n = xl(r[s]);
        Zl(n);
      }
    }
  } finally {
    hi = !1, tr = e, mi = null, mn.clear();
  }
}
function Zl(e) {
  var t = e.length;
  if (t !== 0)
    for (var r = 0; r < t; r++) {
      var i = e[r];
      if ((i.f & (bi | St)) === 0)
        try {
          Pr(i) && (Si(i), i.deps === null && i.first === null && i.nodes_start === null && (i.teardown === null ? Wu(i) : i.fn = null));
        } catch (s) {
          Ei(s, i, null, i.ctx);
        }
    }
}
function Di(e) {
  hi || (hi = !0, queueMicrotask(qu));
  for (var t = mi = e; t.parent !== null; ) {
    t = t.parent;
    var r = t.f;
    if ((r & (ir | Ot)) !== 0) {
      if ((r & Ae) === 0) return;
      t.f ^= Ae;
    }
  }
  dn.push(t);
}
function xl(e) {
  for (var t = [], r = e; r !== null; ) {
    var i = r.f, s = (i & (Ot | ir)) !== 0, n = s && (i & Ae) !== 0;
    if (!n && (i & St) === 0) {
      if ((i & vu) !== 0)
        t.push(r);
      else if (s)
        r.f ^= Ae;
      else {
        var a = he;
        try {
          he = r, Pr(r) && Si(r);
        } catch (c) {
          Ei(c, r, null, r.ctx);
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
    var u = r.parent;
    for (r = r.next; r === null && u !== null; )
      r = u.next, u = u.parent;
  }
  return t;
}
function ec(e) {
  var t;
  for (Ca(); dn.length > 0; )
    hi = !0, qu(), Ca();
  return (
    /** @type {T} */
    t
  );
}
function j(e) {
  var t = e.f, r = (t & ct) !== 0;
  if (he !== null && !ut) {
    if (!(Re != null && Re.includes(e))) {
      var i = he.deps;
      e.rv < pi && (e.rv = pi, Se === null && i !== null && i[qe] === e ? qe++ : Se === null ? Se = [e] : (!zt || !Se.includes(e)) && Se.push(e));
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
  e, Pr(s) && Tu(s)), gn && mn.has(e) ? mn.get(e) : e.v;
}
function sr(e) {
  var t = ut;
  try {
    return ut = !0, e();
  } finally {
    ut = t;
  }
}
const tc = -7169;
function et(e, t) {
  e.f = e.f & tc | t;
}
function or(e) {
  if (!(typeof e != "object" || !e || e instanceof EventTarget)) {
    if (xt in e)
      na(e);
    else if (!Array.isArray(e))
      for (let t in e) {
        const r = e[t];
        typeof r == "object" && r && xt in r && na(r);
      }
  }
}
function na(e, t = /* @__PURE__ */ new Set()) {
  if (typeof e == "object" && e !== null && // We don't want to traverse DOM elements
  !(e instanceof EventTarget) && !t.has(e)) {
    t.add(e), e instanceof Date && e.getTime();
    for (let i in e)
      try {
        na(e[i], t);
      } catch {
      }
    const r = va(e);
    if (r !== Object.prototype && r !== Array.prototype && r !== Map.prototype && r !== Set.prototype && r !== Date.prototype) {
      const i = yu(r);
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
function ku(e) {
  me === null && he === null && ql(), he !== null && (he.f & Ve) !== 0 && me === null && Ll(), gn && Al();
}
function rc(e, t) {
  var r = t.last;
  r === null ? t.last = t.first = e : (r.next = e, e.prev = r, t.last = e);
}
function ur(e, t, r, i = !0) {
  var s = me, n = {
    ctx: ge,
    deps: null,
    nodes_start: null,
    nodes_end: null,
    f: e | Tt,
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
      Si(n), n.f |= Dl;
    } catch (u) {
      throw Dt(n), u;
    }
  else t !== null && Di(n);
  var a = r && n.deps === null && n.first === null && n.nodes_start === null && n.teardown === null && (n.f & (gu | li)) === 0;
  if (!a && i && (s !== null && rc(n, s), he !== null && (he.f & ct) !== 0)) {
    var o = (
      /** @type {Derived} */
      he
    );
    (o.effects ?? (o.effects = [])).push(n);
  }
  return n;
}
function ya(e) {
  const t = ur(wi, null, !1);
  return et(t, Ae), t.teardown = e, t;
}
function ia(e) {
  ku();
  var t = me !== null && (me.f & Ot) !== 0 && ge !== null && !ge.m;
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
    var i = Pa(e);
    return i;
  }
}
function nc(e) {
  return ku(), _n(e);
}
function ic(e) {
  const t = ur(ir, e, !0);
  return () => {
    Dt(t);
  };
}
function ac(e) {
  const t = ur(ir, e, !0);
  return (r = {}) => new Promise((i) => {
    r.outro ? gi(t, () => {
      Dt(t), i(void 0);
    }) : (Dt(t), i(void 0));
  });
}
function Pa(e) {
  return ur(vu, e, !1);
}
function Ce(e, t) {
  var r = (
    /** @type {ComponentContextLegacy} */
    ge
  ), i = { effect: null, ran: !1 };
  r.l.r1.push(i), i.effect = _n(() => {
    e(), !i.ran && (i.ran = !0, ee(r.l.r2, !0), sr(t));
  });
}
function Rt() {
  var e = (
    /** @type {ComponentContextLegacy} */
    ge
  );
  _n(() => {
    if (j(e.l.r2)) {
      for (var t of e.l.r1) {
        var r = t.effect;
        (r.f & Ae) !== 0 && et(r, ar), Pr(r) && Si(r), t.ran = !1;
      }
      e.l.r2.v = !1;
    }
  });
}
function _n(e) {
  return ur(wi, e, !0);
}
function le(e, t = [], r = ga) {
  const i = t.map(r);
  return wa(() => e(...i.map(j)));
}
function wa(e, t = 0) {
  return ur(wi | fa | t, e, !0);
}
function vn(e, t = !0) {
  return ur(wi | Ot, e, !0, t);
}
function Uu(e) {
  var t = e.teardown;
  if (t !== null) {
    const r = gn, i = he;
    qa(!0), He(null);
    try {
      t.call(null);
    } finally {
      qa(r), He(i);
    }
  }
}
function Fu(e, t = !1) {
  var r = e.first;
  for (e.first = e.last = null; r !== null; ) {
    var i = r.next;
    (r.f & ir) !== 0 ? r.parent = null : Dt(r, t), r = i;
  }
}
function sc(e) {
  for (var t = e.first; t !== null; ) {
    var r = t.next;
    (t.f & Ot) === 0 && Dt(t), t = r;
  }
}
function Dt(e, t = !0) {
  var r = !1;
  if ((t || (e.f & Tl) !== 0) && e.nodes_start !== null) {
    for (var i = e.nodes_start, s = e.nodes_end; i !== null; ) {
      var n = i === s ? null : (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Bt(i)
      );
      i.remove(), i = n;
    }
    r = !0;
  }
  Fu(e, t && !r), vi(e, 0), et(e, bi);
  var a = e.transitions;
  if (a !== null)
    for (const u of a)
      u.stop();
  Uu(e);
  var o = e.parent;
  o !== null && o.first !== null && Wu(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes_start = e.nodes_end = null;
}
function Wu(e) {
  var t = e.parent, r = e.prev, i = e.next;
  r !== null && (r.next = i), i !== null && (i.prev = r), t !== null && (t.first === e && (t.first = i), t.last === e && (t.last = r));
}
function gi(e, t) {
  var r = [];
  ba(e, r, !0), Vu(r, () => {
    Dt(e), t && t();
  });
}
function Vu(e, t) {
  var r = e.length;
  if (r > 0) {
    var i = () => --r || t();
    for (var s of e)
      s.out(i);
  } else
    t();
}
function ba(e, t, r) {
  if ((e.f & St) === 0) {
    if (e.f ^= St, e.transitions !== null)
      for (const a of e.transitions)
        (a.is_global || r) && t.push(a);
    for (var i = e.first; i !== null; ) {
      var s = i.next, n = (i.f & ha) !== 0 || (i.f & Ot) !== 0;
      ba(i, t, n ? r : !1), i = s;
    }
  }
}
function _i(e) {
  Gu(e, !0);
}
function Gu(e, t) {
  if ((e.f & St) !== 0) {
    e.f ^= St, (e.f & Ae) === 0 && (e.f ^= Ae), Pr(e) && (et(e, Tt), Di(e));
    for (var r = e.first; r !== null; ) {
      var i = r.next, s = (r.f & ha) !== 0 || (r.f & Ot) !== 0;
      Gu(r, s ? t : !1), r = i;
    }
    if (e.transitions !== null)
      for (const n of e.transitions)
        (n.is_global || t) && n.in();
  }
}
function Hu(e) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
let ge = null;
function ka(e) {
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
  yr && !t && (ge.l = {
    s: null,
    u: null,
    r1: [],
    r2: pn(!1)
  }), ya(() => {
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
          dt(n.effect), He(n.reaction), Pa(n.fn);
        }
      } finally {
        dt(r), He(i);
      }
    }
    ge = t.p, t.m = !0;
  }
  return (
    /** @type {T} */
    {}
  );
}
function Oi() {
  return !yr || ge !== null && ge.l === null;
}
const oc = ["touchstart", "touchmove"];
function uc(e) {
  return oc.includes(e);
}
function lc(e) {
  var t = he, r = me;
  He(null), dt(null);
  try {
    return e();
  } finally {
    He(t), dt(r);
  }
}
const cc = /* @__PURE__ */ new Set(), Ua = /* @__PURE__ */ new Set();
function dc(e, t, r, i = {}) {
  function s(n) {
    if (i.capture || ln.call(t, n), !n.cancelBubble)
      return lc(() => r == null ? void 0 : r.call(this, n));
  }
  return e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? wu(() => {
    t.addEventListener(e, s, i);
  }) : t.addEventListener(e, s, i), s;
}
function pr(e, t, r, i, s) {
  var n = { capture: i, passive: s }, a = dc(e, t, r, n);
  (t === document.body || t === window || t === document) && ya(() => {
    t.removeEventListener(e, a, n);
  });
}
function ln(e) {
  var l;
  var t = this, r = (
    /** @type {Node} */
    t.ownerDocument
  ), i = e.type, s = ((l = e.composedPath) == null ? void 0 : l.call(e)) || [], n = (
    /** @type {null | Element} */
    s[0] || e.target
  ), a = 0, o = e.__root;
  if (o) {
    var u = s.indexOf(o);
    if (u !== -1 && (t === document || t === /** @type {any} */
    window)) {
      e.__root = t;
      return;
    }
    var c = s.indexOf(t);
    if (c === -1)
      return;
    u <= c && (a = u);
  }
  if (n = /** @type {Element} */
  s[a] || e.target, n !== t) {
    fn(e, "currentTarget", {
      configurable: !0,
      get() {
        return n || r;
      }
    });
    var f = he, h = me;
    He(null), dt(null);
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
            if (ma(_)) {
              var [m, ...v] = _;
              m.apply(n, [e, ...v]);
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
      e.__root = t, delete e.currentTarget, He(f), dt(h);
    }
  }
}
function fc(e) {
  var t = document.createElement("template");
  return t.innerHTML = e, t.content;
}
function gr(e, t) {
  var r = (
    /** @type {Effect} */
    me
  );
  r.nodes_start === null && (r.nodes_start = e, r.nodes_end = t);
}
// @__NO_SIDE_EFFECTS__
function de(e, t) {
  var r = (t & $l) !== 0, i = (t & El) !== 0, s, n = !e.startsWith("<!>");
  return () => {
    if (ve)
      return gr(_e, null), _e;
    s === void 0 && (s = fc(n ? e : "<!>" + e), r || (s = /** @type {Node} */
    /* @__PURE__ */ rr(s)));
    var a = (
      /** @type {TemplateNode} */
      i || Ru ? document.importNode(s, !0) : s.cloneNode(!0)
    );
    if (r) {
      var o = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ rr(a)
      ), u = (
        /** @type {TemplateNode} */
        a.lastChild
      );
      gr(o, u);
    } else
      gr(a, a);
    return a;
  };
}
function nr() {
  if (ve)
    return gr(_e, null), _e;
  var e = document.createDocumentFragment(), t = document.createComment(""), r = _r();
  return e.append(t, r), gr(t, r), e;
}
function re(e, t) {
  if (ve) {
    me.nodes_end = _e, $i();
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
function zu(e, t) {
  return Ku(e, t);
}
function hc(e, t) {
  ra(), t.intro = t.intro ?? !1;
  const r = t.target, i = ve, s = _e;
  try {
    for (var n = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ rr(r)
    ); n && (n.nodeType !== 8 || /** @type {Comment} */
    n.data !== la); )
      n = /** @type {TemplateNode} */
      /* @__PURE__ */ Bt(n);
    if (!n)
      throw cn;
    Ze(!0), xe(
      /** @type {Comment} */
      n
    ), $i();
    const a = Ku(e, { ...t, anchor: n });
    if (_e === null || _e.nodeType !== 8 || /** @type {Comment} */
    _e.data !== da)
      throw _a(), cn;
    return Ze(!1), /**  @type {Exports} */
    a;
  } catch (a) {
    if (a === cn)
      return t.recover === !1 && Ul(), ra(), Nu(r), Ze(!1), zu(e, t);
    throw a;
  } finally {
    Ze(i), xe(s);
  }
}
const cr = /* @__PURE__ */ new Map();
function Ku(e, { target: t, anchor: r, props: i = {}, events: s, context: n, intro: a = !0 }) {
  ra();
  var o = /* @__PURE__ */ new Set(), u = (h) => {
    for (var d = 0; d < h.length; d++) {
      var g = h[d];
      if (!o.has(g)) {
        o.add(g);
        var P = uc(g);
        t.addEventListener(g, ln, { passive: P });
        var _ = cr.get(g);
        _ === void 0 ? (document.addEventListener(g, ln, { passive: P }), cr.set(g, 1)) : cr.set(g, _ + 1);
      }
    }
  };
  u(pa(cc)), Ua.add(u);
  var c = void 0, f = ac(() => {
    var h = r ?? t.appendChild(_r());
    return vn(() => {
      if (n) {
        ze({});
        var d = (
          /** @type {ComponentContext} */
          ge
        );
        d.c = n;
      }
      s && (i.$$events = s), ve && gr(
        /** @type {TemplateNode} */
        h,
        null
      ), c = e(h, i) || {}, ve && (me.nodes_end = _e), n && Ke();
    }), () => {
      var P;
      for (var d of o) {
        t.removeEventListener(d, ln);
        var g = (
          /** @type {number} */
          cr.get(d)
        );
        --g === 0 ? (document.removeEventListener(d, ln), cr.delete(d)) : cr.set(d, g);
      }
      Ua.delete(u), h !== r && ((P = h.parentNode) == null || P.removeChild(h));
    };
  });
  return aa.set(c, f), c;
}
let aa = /* @__PURE__ */ new WeakMap();
function mc(e, t) {
  const r = aa.get(e);
  return r ? (aa.delete(e), r(t)) : Promise.resolve();
}
function De(e, t, [r, i] = [0, 0]) {
  ve && r === 0 && $i();
  var s = e, n = null, a = null, o = Ie, u = r > 0 ? ha : 0, c = !1;
  const f = (d, g = !0) => {
    c = !0, h(g, d);
  }, h = (d, g) => {
    if (o === (o = d)) return;
    let P = !1;
    if (ve && i !== -1) {
      if (r === 0) {
        const m = (
          /** @type {Comment} */
          s.data
        );
        m === la ? i = 0 : m === ca ? i = 1 / 0 : (i = parseInt(m.substring(1)), i !== i && (i = o ? 1 / 0 : -1));
      }
      const _ = i > r;
      !!o === _ && (s = ta(), xe(s), Ze(!1), P = !0, i = -1);
    }
    o ? (n ? _i(n) : g && (n = vn(() => g(s))), a && gi(a, () => {
      a = null;
    })) : (a ? _i(a) : g && (a = vn(() => g(s, [r + 1, i]))), n && gi(n, () => {
      n = null;
    })), P && Ze(!0);
  };
  wa(() => {
    c = !1, t(f), c || h(null, null);
  }, u), ve && (s = _e);
}
function Oe(e, t) {
  return t;
}
function pc(e, t, r, i) {
  for (var s = [], n = t.length, a = 0; a < n; a++)
    ba(t[a].e, s, !0);
  var o = n > 0 && s.length === 0 && r !== null;
  if (o) {
    var u = (
      /** @type {Element} */
      /** @type {Element} */
      r.parentNode
    );
    Nu(u), u.append(
      /** @type {Element} */
      r
    ), i.clear(), Ht(e, t[0].prev, t[n - 1].next);
  }
  Vu(s, () => {
    for (var c = 0; c < n; c++) {
      var f = t[c];
      o || (i.delete(f.k), Ht(e, f.prev, f.next)), Dt(f.e, !o);
    }
  });
}
function Te(e, t, r, i, s, n = null) {
  var a = e, o = { flags: t, items: /* @__PURE__ */ new Map(), first: null };
  {
    var u = (
      /** @type {Element} */
      e
    );
    a = ve ? xe(
      /** @type {Comment | Text} */
      /* @__PURE__ */ rr(u)
    ) : u.appendChild(_r());
  }
  ve && $i();
  var c = null, f = !1, h = /* @__PURE__ */ Ge(() => {
    var d = r();
    return ma(d) ? d : d == null ? [] : pa(d);
  });
  wa(() => {
    var d = j(h), g = d.length;
    if (f && g === 0)
      return;
    f = g === 0;
    let P = !1;
    if (ve) {
      var _ = (
        /** @type {Comment} */
        a.data === ca
      );
      _ !== (g === 0) && (a = ta(), xe(a), Ze(!1), P = !0);
    }
    if (ve) {
      for (var m = null, v, l = 0; l < g; l++) {
        if (_e.nodeType === 8 && /** @type {Comment} */
        _e.data === da) {
          a = /** @type {Comment} */
          _e, P = !0, Ze(!1);
          break;
        }
        var p = d[l], y = i(p, l);
        v = Bu(
          _e,
          o,
          m,
          null,
          p,
          y,
          l,
          s,
          t,
          r
        ), o.items.set(y, v), m = v;
      }
      g > 0 && xe(ta());
    }
    ve || vc(d, o, a, s, t, i, r), n !== null && (g === 0 ? c ? _i(c) : c = vn(() => n(a)) : c !== null && gi(c, () => {
      c = null;
    })), P && Ze(!0), j(h);
  }), ve && (a = _e);
}
function vc(e, t, r, i, s, n, a) {
  var o = e.length, u = t.items, c = t.first, f = c, h, d = null, g = [], P = [], _, m, v, l;
  for (l = 0; l < o; l += 1) {
    if (_ = e[l], m = n(_, l), v = u.get(m), v === void 0) {
      var p = f ? (
        /** @type {TemplateNode} */
        f.e.nodes_start
      ) : r;
      d = Bu(
        p,
        t,
        d,
        d === null ? t.first : d.next,
        _,
        m,
        l,
        i,
        s,
        a
      ), u.set(m, d), g = [], P = [], f = d.next;
      continue;
    }
    if (gc(v, _, l), (v.e.f & St) !== 0 && _i(v.e), v !== f) {
      if (h !== void 0 && h.has(v)) {
        if (g.length < P.length) {
          var y = P[0], w;
          d = y.prev;
          var b = g[0], E = g[g.length - 1];
          for (w = 0; w < g.length; w += 1)
            Fa(g[w], y, r);
          for (w = 0; w < P.length; w += 1)
            h.delete(P[w]);
          Ht(t, b.prev, E.next), Ht(t, d, b), Ht(t, E, y), f = y, d = E, l -= 1, g = [], P = [];
        } else
          h.delete(v), Fa(v, f, r), Ht(t, v.prev, v.next), Ht(t, v, d === null ? t.first : d.next), Ht(t, d, v), d = v;
        continue;
      }
      for (g = [], P = []; f !== null && f.k !== m; )
        (f.e.f & St) === 0 && (h ?? (h = /* @__PURE__ */ new Set())).add(f), P.push(f), f = f.next;
      if (f === null)
        continue;
      v = f;
    }
    g.push(v), d = v, f = v.next;
  }
  if (f !== null || h !== void 0) {
    for (var S = h === void 0 ? [] : pa(h); f !== null; )
      (f.e.f & St) === 0 && S.push(f), f = f.next;
    var O = S.length;
    if (O > 0) {
      var C = o === 0 ? r : null;
      pc(t, S, C, u);
    }
  }
  me.first = t.first && t.first.e, me.last = d && d.e;
}
function gc(e, t, r, i) {
  Su(e.v, t), e.i = r;
}
function Bu(e, t, r, i, s, n, a, o, u, c) {
  var f = (u & yl) !== 0, h = (u & wl) === 0, d = f ? h ? /* @__PURE__ */ ie(s) : pn(s) : s, g = (u & Pl) === 0 ? a : pn(a), P = {
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
    return P.e = vn(() => o(e, d, g, c), ve), P.e.prev = r && r.e, P.e.next = i && i.e, r === null ? t.first = P : (r.next = P, r.e.next = P.e), i !== null && (i.prev = P, i.e.prev = P.e), P;
  } finally {
  }
}
function Fa(e, t, r) {
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
      /* @__PURE__ */ Bt(n)
    );
    s.before(n), n = a;
  }
}
function Ht(e, t, r) {
  t === null ? e.first = r : (t.next = r, t.e.next = r && r.e), r !== null && (r.prev = t, r.e.prev = t && t.e);
}
function _c(e, t, r) {
  var i = e == null ? "" : "" + e;
  return i === "" ? null : i;
}
function yc(e, t) {
  return e == null ? null : String(e);
}
function sa(e, t, r, i, s, n) {
  var a = e.__className;
  if (ve || a !== r || a === void 0) {
    var o = _c(r);
    (!ve || o !== e.getAttribute("class")) && (o == null ? e.removeAttribute("class") : e.className = o), e.__className = r;
  }
  return n;
}
function be(e, t, r, i) {
  var s = e.__style;
  if (ve || s !== t) {
    var n = yc(t);
    (!ve || n !== e.getAttribute("style")) && (n == null ? e.removeAttribute("style") : e.style.cssText = n), e.__style = t;
  }
  return i;
}
const Pc = Symbol("is custom element"), wc = Symbol("is html");
function bc(e, t, r, i) {
  var s = $c(e);
  ve && (s[t] = e.getAttribute(t), t === "src" || t === "srcset" || t === "href" && e.nodeName === "LINK") || s[t] !== (s[t] = r) && (t === "loading" && (e[Rl] = r), r == null ? e.removeAttribute(t) : typeof r != "string" && Ju(e).includes(t) ? e[t] = r : e.setAttribute(t, r));
}
function K(e, t, r) {
  var i = he, s = me;
  let n = ve;
  ve && Ze(!1), He(null), dt(null);
  try {
    // `style` should use `set_attribute` rather than the setter
    t !== "style" && // Don't compute setters for custom elements while they aren't registered yet,
    // because during their upgrade/instantiation they might add more setters.
    // Instead, fall back to a simple "an object, then set as property" heuristic.
    (oa.has(e.nodeName) || // customElements may not be available in browser extension contexts
    !customElements || customElements.get(e.tagName.toLowerCase()) ? Ju(e).includes(t) : r && typeof r == "object") ? e[t] = r : bc(e, t, r == null ? r : String(r));
  } finally {
    He(i), dt(s), n && Ze(!0);
  }
}
function $c(e) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    // @ts-expect-error
    e.__attributes ?? (e.__attributes = {
      [Pc]: e.nodeName.includes("-"),
      [wc]: e.namespaceURI === Sl
    })
  );
}
var oa = /* @__PURE__ */ new Map();
function Ju(e) {
  var t = oa.get(e.nodeName);
  if (t) return t;
  oa.set(e.nodeName, t = []);
  for (var r, i = e, s = Element.prototype; s !== i; ) {
    r = yu(i);
    for (var n in r)
      r[n].set && t.push(n);
    i = va(i);
  }
  return t;
}
function Wa(e, t) {
  return e === t || (e == null ? void 0 : e[xt]) === t;
}
function lt(e = {}, t, r, i) {
  return Pa(() => {
    var s, n;
    return _n(() => {
      s = n, n = [], sr(() => {
        e !== r(...n) && (t(e, ...n), s && Wa(r(...s), e) && t(null, ...s));
      });
    }), () => {
      wu(() => {
        n && Wa(r(...n), e) && t(null, ...n);
      });
    };
  }), e;
}
function tt(e = !1) {
  const t = (
    /** @type {ComponentContextLegacy} */
    ge
  ), r = t.l.u;
  if (!r) return;
  let i = () => or(t.s);
  if (e) {
    let s = 0, n = (
      /** @type {Record<string, any>} */
      {}
    );
    const a = /* @__PURE__ */ ga(() => {
      let o = !1;
      const u = t.s;
      for (const c in u)
        u[c] !== n[c] && (n[c] = u[c], o = !0);
      return o && s++, s;
    });
    i = () => j(a);
  }
  r.b.length && nc(() => {
    Va(t, i), fi(r.b);
  }), ia(() => {
    const s = sr(() => r.m.map(Il));
    return () => {
      for (const n of s)
        typeof n == "function" && n();
    };
  }), r.a.length && ia(() => {
    Va(t, i), fi(r.a);
  });
}
function Va(e, t) {
  if (e.l.s)
    for (const r of e.l.s) j(r);
  t();
}
function wr(e) {
  ge === null && Hu(), yr && ge.l !== null ? Ec(ge).m.push(e) : ia(() => {
    const t = sr(e);
    if (typeof t == "function") return (
      /** @type {() => void} */
      t
    );
  });
}
function yn(e) {
  ge === null && Hu(), wr(() => () => sr(e));
}
function Ec(e) {
  var t = (
    /** @type {ComponentContextLegacy} */
    e.l
  );
  return t.u ?? (t.u = { a: [], b: [], m: [] });
}
function Yu(e, t, r) {
  if (e == null)
    return t(void 0), vr;
  const i = sr(
    () => e.subscribe(
      t,
      // @ts-expect-error
      r
    )
  );
  return i.unsubscribe ? () => i.unsubscribe() : i;
}
const dr = [];
function Xu(e, t = vr) {
  let r = null;
  const i = /* @__PURE__ */ new Set();
  function s(o) {
    if ($u(e, o) && (e = o, r)) {
      const u = !dr.length;
      for (const c of i)
        c[1](), dr.push(c, e);
      if (u) {
        for (let c = 0; c < dr.length; c += 2)
          dr[c][0](dr[c + 1]);
        dr.length = 0;
      }
    }
  }
  function n(o) {
    s(o(
      /** @type {T} */
      e
    ));
  }
  function a(o, u = vr) {
    const c = [o, u];
    return i.add(c), i.size === 1 && (r = t(s, n) || vr), o(
      /** @type {T} */
      e
    ), () => {
      i.delete(c), i.size === 0 && r && (r(), r = null);
    };
  }
  return { set: s, update: n, subscribe: a };
}
function Sc(e) {
  let t;
  return Yu(e, (r) => t = r)(), t;
}
let bn = !1, ua = Symbol();
function jt(e, t, r) {
  const i = r[t] ?? (r[t] = {
    store: null,
    source: /* @__PURE__ */ ie(void 0),
    unsubscribe: vr
  });
  if (i.store !== e && !(ua in r))
    if (i.unsubscribe(), i.store = e ?? null, e == null)
      i.source.v = void 0, i.unsubscribe = vr;
    else {
      var s = !0;
      i.unsubscribe = Yu(e, (n) => {
        s ? i.source.v = n : ee(i.source, n);
      }), s = !1;
    }
  return e && ua in r ? Sc(e) : j(i.source);
}
function Mt() {
  const e = {};
  function t() {
    ya(() => {
      for (var r in e)
        e[r].unsubscribe();
      fn(e, ua, {
        enumerable: !1,
        value: !0
      });
    });
  }
  return [e, t];
}
function Dc(e) {
  var t = bn;
  try {
    return bn = !1, [e(), bn];
  } finally {
    bn = t;
  }
}
function br(e, t, r, i) {
  var g;
  var s = !yr || (r & bl) !== 0, n = !1, a;
  [a, n] = Dc(() => (
    /** @type {V} */
    e[t]
  ));
  var o = xt in e || _u in e;
  ((g = er(e, t)) == null ? void 0 : g.set) ?? (o && t in e);
  var u = (
    /** @type {V} */
    i
  ), c = !0, f = () => (c && (c = !1, u = /** @type {V} */
  i), u), h;
  if (s)
    h = () => {
      var P = (
        /** @type {V} */
        e[t]
      );
      return P === void 0 ? f() : (c = !0, P);
    };
  else {
    var d = /* @__PURE__ */ Ge(
      () => (
        /** @type {V} */
        e[t]
      )
    );
    d.f |= Ol, h = () => {
      var P = j(d);
      return P !== void 0 && (u = /** @type {V} */
      void 0), P === void 0 ? u : P;
    };
  }
  return h;
}
function Oc(e) {
  return new Tc(e);
}
var Et, We;
class Tc {
  /**
   * @param {ComponentConstructorOptions & {
   *  component: any;
   * }} options
   */
  constructor(t) {
    /** @type {any} */
    Ai(this, Et);
    /** @type {Record<string, any>} */
    Ai(this, We);
    var n;
    var r = /* @__PURE__ */ new Map(), i = (a, o) => {
      var u = /* @__PURE__ */ ie(o);
      return r.set(a, u), u;
    };
    const s = new Proxy(
      { ...t.props || {}, $$events: {} },
      {
        get(a, o) {
          return j(r.get(o) ?? i(o, Reflect.get(a, o)));
        },
        has(a, o) {
          return o === _u ? !0 : (j(r.get(o) ?? i(o, Reflect.get(a, o))), Reflect.has(a, o));
        },
        set(a, o, u) {
          return ee(r.get(o) ?? i(o, u), u), Reflect.set(a, o, u);
        }
      }
    );
    Li(this, We, (t.hydrate ? hc : zu)(t.component, {
      target: t.target,
      anchor: t.anchor,
      props: s,
      context: t.context,
      intro: t.intro ?? !1,
      recover: t.recover
    })), (!((n = t == null ? void 0 : t.props) != null && n.$$host) || t.sync === !1) && ec(), Li(this, Et, s.$$events);
    for (const a of Object.keys(Ne(this, We)))
      a === "$set" || a === "$destroy" || a === "$on" || fn(this, a, {
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
      mc(Ne(this, We));
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
    Ne(this, Et)[t] = Ne(this, Et)[t] || [];
    const i = (...s) => r.call(this, ...s);
    return Ne(this, Et)[t].push(i), () => {
      Ne(this, Et)[t] = Ne(this, Et)[t].filter(
        /** @param {any} fn */
        (s) => s !== i
      );
    };
  }
  $destroy() {
    Ne(this, We).$destroy();
  }
}
Et = new WeakMap(), We = new WeakMap();
let Qu;
typeof HTMLElement == "function" && (Qu = class extends HTMLElement {
  /**
   * @param {*} $$componentCtor
   * @param {*} $$slots
   * @param {*} use_shadow_dom
   */
  constructor(t, r, i) {
    super();
    /** The Svelte component constructor */
    Je(this, "$$ctor");
    /** Slots */
    Je(this, "$$s");
    /** @type {any} The Svelte component instance */
    Je(this, "$$c");
    /** Whether or not the custom element is connected */
    Je(this, "$$cn", !1);
    /** @type {Record<string, any>} Component props data */
    Je(this, "$$d", {});
    /** `true` if currently in the process of reflecting component props back to attributes */
    Je(this, "$$r", !1);
    /** @type {Record<string, CustomElementPropDefinition>} Props definition (name, reflected, type etc) */
    Je(this, "$$p_d", {});
    /** @type {Record<string, EventListenerOrEventListenerObject[]>} Event listeners */
    Je(this, "$$l", {});
    /** @type {Map<EventListenerOrEventListenerObject, Function>} Event listener unsubscribe functions */
    Je(this, "$$l_u", /* @__PURE__ */ new Map());
    /** @type {any} The managed render effect for reflecting attributes */
    Je(this, "$$me");
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
      const i = {}, s = Rc(this);
      for (const n of this.$$s)
        n in s && (n === "default" && !this.$$d.children ? (this.$$d.children = r(n), i.default = !0) : i[n] = r(n));
      for (const n of this.attributes) {
        const a = this.$$g_p(n.name);
        a in this.$$d || (this.$$d[a] = ui(a, n.value, this.$$p_d, "toProp"));
      }
      for (const n in this.$$p_d)
        !(n in this.$$d) && this[n] !== void 0 && (this.$$d[n] = this[n], delete this[n]);
      this.$$c = Oc({
        component: this.$$ctor,
        target: this.shadowRoot || this,
        props: {
          ...this.$$d,
          $$slots: i,
          $$host: this
        }
      }), this.$$me = ic(() => {
        _n(() => {
          var n;
          this.$$r = !0;
          for (const a of di(this.$$c)) {
            if (!((n = this.$$p_d[a]) != null && n.reflect)) continue;
            this.$$d[a] = this.$$c[a];
            const o = ui(
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
    this.$$r || (t = this.$$g_p(t), this.$$d[t] = ui(t, i, this.$$p_d, "toProp"), (s = this.$$c) == null || s.$set({ [t]: this.$$d[t] }));
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
    return di(this.$$p_d).find(
      (r) => this.$$p_d[r].attribute === t || !this.$$p_d[r].attribute && r.toLowerCase() === t
    ) || t;
  }
});
function ui(e, t, r, i) {
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
function Rc(e) {
  const t = {};
  return e.childNodes.forEach((r) => {
    t[
      /** @type {Element} node */
      r.slot || "default"
    ] = !0;
  }), t;
}
function Zu(e, t, r, i, s, n) {
  let a = class extends Qu {
    constructor() {
      super(e, r, s), this.$$p_d = t;
    }
    static get observedAttributes() {
      return di(t).map(
        (o) => (t[o].attribute || o).toLowerCase()
      );
    }
  };
  return di(t).forEach((o) => {
    fn(a.prototype, o, {
      get() {
        return this.$$c && o in this.$$c ? this.$$c[o] : this.$$d[o];
      },
      set(u) {
        var h;
        u = ui(o, u, t), this.$$d[o] = u;
        var c = this.$$c;
        if (c) {
          var f = (h = er(c, o)) == null ? void 0 : h.get;
          f ? c[o] = u : c.$set({ [o]: u });
        }
      }
    });
  }), i.forEach((o) => {
    fn(a.prototype, o, {
      get() {
        var u;
        return (u = this.$$c) == null ? void 0 : u[o];
      }
    });
  }), e.element = /** @type {any} */
  a, a;
}
var jc = /* @__PURE__ */ de('<span class="ui5-content-density-compact"><ui5-avatar></ui5-avatar> <ui5-dialog><ward-dev-tools-content></ward-dev-tools-content> <ui5-bar><ui5-button>Close</ui5-button></ui5-bar></ui5-dialog></span>', 2);
function Mc(e) {
  let t = /* @__PURE__ */ ie(), r = /* @__PURE__ */ ie();
  function i() {
    un(r, j(r).open = !0), setTimeout(
      () => {
        un(t, j(t).pressed = !1);
      },
      0
    );
  }
  function s() {
    un(r, j(r).open = !1), setTimeout(
      () => {
        un(t, j(t).pressed = !1), j(t).focus();
      },
      0
    );
  }
  var n = jc(), a = W(n);
  sa(a, 1, "ward-dev-tools-button"), K(a, "part", "ward-dev-tools-button"), K(a, "colorScheme", "Accent7"), K(a, "color-scheme", "Accent9"), K(a, "design", "Emphasized"), K(a, "icon", "world"), K(a, "interactive", !0), K(a, "size", "XS"), lt(a, (h) => ee(t, h), () => j(t));
  var o = z(a, 2);
  sa(o, 1, "ward-dev-tools-dialog svelte-19ox8wh"), K(o, "data-ui5-compact-size", !0), K(o, "draggable", !0), K(o, "header-text", `Ward Dev Tools${window.uncover.wardVersion ? ` (${window.uncover.wardVersion})` : ""}`), K(o, "resizable", !0);
  var u = W(o), c = z(u, 2);
  K(c, "slot", "footer");
  var f = W(c);
  K(f, "slot", "endContent"), U(c), U(o), lt(o, (h) => ee(r, h), () => j(r)), U(n), pr("click", a, i), pr("click", f, s), re(e, n);
}
customElements.define("ward-dev-tools", Zu(Mc, {}, [], [], !0));
var ht = {}, qi = {}, Sr = {}, Ga;
function Nc() {
  return Ga || (Ga = 1, Object.defineProperty(Sr, "__esModule", { value: !0 }), Sr.Alphabet = void 0, Sr.Alphabet = {
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
  }), Sr;
}
var Dr = {}, Ha;
function Ic() {
  if (Ha) return Dr;
  Ha = 1, Object.defineProperty(Dr, "__esModule", { value: !0 }), Dr.ArrayUtils = void 0;
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
  return Dr.ArrayUtils = e, Dr;
}
var Or = {}, za;
function xu() {
  return za || (za = 1, Object.defineProperty(Or, "__esModule", { value: !0 }), Or.DataStates = void 0, Or.DataStates = {
    NEVER: "NEVER",
    FETCHING_FIRST: "FETCHING_FIRST",
    FETCHING: "FETCHING",
    SUCCESS: "SUCCESS",
    FAILURE: "FAILURE",
    OUTDATED: "OUTDATED"
  }), Or;
}
var Tr = {}, Ka;
function Cc() {
  if (Ka) return Tr;
  Ka = 1, Object.defineProperty(Tr, "__esModule", { value: !0 }), Tr.DataStatesUtils = void 0;
  var e = xu(), t = (
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
  return Tr.DataStatesUtils = t, Tr;
}
var Rr = {}, Ba;
function Ac() {
  if (Ba) return Rr;
  Ba = 1, Object.defineProperty(Rr, "__esModule", { value: !0 }), Rr.DateUtils = void 0;
  var e = 1e3, t = 60, r = e * t, i = 60, s = t * i, n = r * i, a = 24, o = i * a, u = s * a, c = n * a, f = (
    /** @class */
    function() {
      function h() {
      }
      return h.durationToHumanTime = function(d) {
        return {
          millis: d % e,
          seconds: Math.floor(d / e) % t,
          minutes: Math.floor(d / r) % i,
          hours: Math.floor(d / n)
        };
      }, h.normalizeTime = function(d) {
        return "".concat(d).padStart(2, "0");
      }, h.dateString = function(d) {
        var g = h.normalizeTime(d.getFullYear()), P = h.normalizeTime(d.getMonth()), _ = h.normalizeTime(d.getDate()), m = h.normalizeTime(d.getHours()), v = h.normalizeTime(d.getMinutes()), l = h.normalizeTime(d.getSeconds());
        return "".concat(g, "-").concat(P, "-").concat(_, " ").concat(m, ":").concat(v, ":").concat(l);
      }, h.nowString = function() {
        return h.dateString(new Date(Date.now()));
      }, h.TimeConstants = {
        MIL_PER_SEC: e,
        SEC_PER_MIN: t,
        MIL_PER_MIN: r,
        MIN_PER_HOU: i,
        SEC_PER_HOU: s,
        MIL_PER_HOU: n,
        HOU_PER_DAY: a,
        MIN_PER_DAY: o,
        SEC_PER_DAY: u,
        MIL_PER_DAY: c
      }, h;
    }()
  );
  return Rr.DateUtils = f, Rr;
}
var jr = {}, Ja;
function Lc() {
  if (Ja) return jr;
  Ja = 1, Object.defineProperty(jr, "__esModule", { value: !0 }), jr.DownloadUtils = void 0;
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
var Mr = {}, Ya;
function qc() {
  if (Ya) return Mr;
  Ya = 1, Object.defineProperty(Mr, "__esModule", { value: !0 }), Mr.EncodeUtils = void 0;
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
  return Mr.EncodeUtils = e, Mr;
}
var Nr = {}, Xa;
function kc() {
  if (Xa) return Nr;
  Xa = 1, Object.defineProperty(Nr, "__esModule", { value: !0 }), Nr.FileUtils = void 0;
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
  return Nr.FileUtils = e, Nr;
}
var Ir = {}, Qa;
function Uc() {
  if (Qa) return Ir;
  Qa = 1, Object.defineProperty(Ir, "__esModule", { value: !0 }), Ir.FunctionUtils = void 0;
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
  return Ir.FunctionUtils = r, Ir;
}
var mt = {}, Za;
function Fc() {
  return Za || (Za = 1, Object.defineProperty(mt, "__esModule", { value: !0 }), mt.HttpStatuses = mt.HttpMethods = mt.HttpHeaders = void 0, mt.HttpHeaders = {
    ACCESS_CONTROL_ALLOW_ORIGIN: "Access-Control-Allow-Origin",
    ACCESS_CONTROL_ALLOW_HEADERS: "Access-Control-Allow-Headers",
    ACCESS_CONTROL_ALLOW_METHODS: "Access-Control-Allow-Methods"
  }, mt.HttpMethods = {
    GET: "GET",
    POST: "POST",
    PUT: "PUT",
    PATCH: "PATCH",
    DELETE: "DELETE",
    OPTIONS: "OPTIONS"
  }, mt.HttpStatuses = {
    OK: 200,
    CREATED: 201,
    REMOVED: 204,
    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    FORBIDDEN: 403,
    NOT_FOUND: 404,
    ERROR: 500
  }), mt;
}
var Cr = {}, xa;
function Wc() {
  if (xa) return Cr;
  xa = 1, Object.defineProperty(Cr, "__esModule", { value: !0 }), Cr.ObjectUtils = void 0;
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
  return Cr.ObjectUtils = e, Cr;
}
var Ar = {}, es;
function Vc() {
  if (es) return Ar;
  es = 1, Object.defineProperty(Ar, "__esModule", { value: !0 }), Ar.PromiseUtils = void 0;
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
  return Ar.PromiseUtils = t, Ar;
}
var Lr = {}, ts;
function Gc() {
  if (ts) return Lr;
  ts = 1, Object.defineProperty(Lr, "__esModule", { value: !0 }), Lr.Sets = void 0;
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
  return Lr.Sets = e, Lr;
}
var qr = {}, kr = {}, rs;
function el() {
  if (rs) return kr;
  rs = 1, Object.defineProperty(kr, "__esModule", { value: !0 }), kr.StringUtils = void 0;
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
  return kr.StringUtils = e, kr;
}
var ns;
function Hc() {
  if (ns) return qr;
  ns = 1, Object.defineProperty(qr, "__esModule", { value: !0 }), qr.StringLabel = void 0;
  var e = el(), t = (
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
  return qr.StringLabel = t, qr;
}
var Ur = {}, is;
function zc() {
  if (is) return Ur;
  is = 1, Object.defineProperty(Ur, "__esModule", { value: !0 }), Ur.UUID = void 0;
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
var as;
function Pn() {
  return as || (as = 1, function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.UUID = e.StringUtils = e.StringLabel = e.Sets = e.PromiseUtils = e.ObjectUtils = e.HttpStatuses = e.HttpMethods = e.HttpHeaders = e.FunctionUtils = e.FileUtils = e.EncodeUtils = e.DownloadUtils = e.DateUtils = e.DataStatesUtils = e.DataStates = e.ArrayUtils = e.Alphabet = void 0;
    var t = Nc();
    Object.defineProperty(e, "Alphabet", { enumerable: !0, get: function() {
      return t.Alphabet;
    } });
    var r = Ic();
    Object.defineProperty(e, "ArrayUtils", { enumerable: !0, get: function() {
      return r.ArrayUtils;
    } });
    var i = xu();
    Object.defineProperty(e, "DataStates", { enumerable: !0, get: function() {
      return i.DataStates;
    } });
    var s = Cc();
    Object.defineProperty(e, "DataStatesUtils", { enumerable: !0, get: function() {
      return s.DataStatesUtils;
    } });
    var n = Ac();
    Object.defineProperty(e, "DateUtils", { enumerable: !0, get: function() {
      return n.DateUtils;
    } });
    var a = Lc();
    Object.defineProperty(e, "DownloadUtils", { enumerable: !0, get: function() {
      return a.DownloadUtils;
    } });
    var o = qc();
    Object.defineProperty(e, "EncodeUtils", { enumerable: !0, get: function() {
      return o.EncodeUtils;
    } });
    var u = kc();
    Object.defineProperty(e, "FileUtils", { enumerable: !0, get: function() {
      return u.FileUtils;
    } });
    var c = Uc();
    Object.defineProperty(e, "FunctionUtils", { enumerable: !0, get: function() {
      return c.FunctionUtils;
    } });
    var f = Fc();
    Object.defineProperty(e, "HttpHeaders", { enumerable: !0, get: function() {
      return f.HttpHeaders;
    } }), Object.defineProperty(e, "HttpMethods", { enumerable: !0, get: function() {
      return f.HttpMethods;
    } }), Object.defineProperty(e, "HttpStatuses", { enumerable: !0, get: function() {
      return f.HttpStatuses;
    } });
    var h = Wc();
    Object.defineProperty(e, "ObjectUtils", { enumerable: !0, get: function() {
      return h.ObjectUtils;
    } });
    var d = Vc();
    Object.defineProperty(e, "PromiseUtils", { enumerable: !0, get: function() {
      return d.PromiseUtils;
    } });
    var g = Gc();
    Object.defineProperty(e, "Sets", { enumerable: !0, get: function() {
      return g.Sets;
    } });
    var P = Hc();
    Object.defineProperty(e, "StringLabel", { enumerable: !0, get: function() {
      return P.StringLabel;
    } });
    var _ = el();
    Object.defineProperty(e, "StringUtils", { enumerable: !0, get: function() {
      return _.StringUtils;
    } });
    var m = zc();
    Object.defineProperty(e, "UUID", { enumerable: !0, get: function() {
      return m.UUID;
    } });
  }(qi)), qi;
}
var Ue = {}, ki = {}, Ye = {}, Fr = {}, ss;
function $a() {
  return ss || (ss = 1, Object.defineProperty(Fr, "__esModule", { value: !0 }), Fr.LogLevels = void 0, Fr.LogLevels = {
    DEBUG: 0,
    INFO: 1,
    WARN: 2,
    ERROR: 3,
    OFF: 4
  }), Fr;
}
var os;
function tl() {
  if (os) return Ye;
  os = 1;
  var e = Ye && Ye.__classPrivateFieldSet || function(n, a, o, u, c) {
    if (u === "m") throw new TypeError("Private method is not writable");
    if (u === "a" && !c) throw new TypeError("Private accessor was defined without a setter");
    if (typeof a == "function" ? n !== a || !c : !a.has(n)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return u === "a" ? c.call(n, o) : c ? c.value = o : a.set(n, o), o;
  }, t = Ye && Ye.__classPrivateFieldGet || function(n, a, o, u) {
    if (o === "a" && !u) throw new TypeError("Private accessor was defined without a getter");
    if (typeof a == "function" ? n !== a || !u : !a.has(n)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return o === "m" ? u : o === "a" ? u.call(n) : u ? u.value : a.get(n);
  }, r;
  Object.defineProperty(Ye, "__esModule", { value: !0 }), Ye.GlobalConfig = Ye.LogConfig = void 0;
  const i = $a();
  class s {
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
  }
  return Ye.LogConfig = s, r = /* @__PURE__ */ new WeakMap(), Ye.GlobalConfig = new s().debug(), Ye;
}
var pt = {}, us;
function rl() {
  if (us) return pt;
  us = 1;
  var e = pt && pt.__classPrivateFieldSet || function(u, c, f, h, d) {
    if (h === "m") throw new TypeError("Private method is not writable");
    if (h === "a" && !d) throw new TypeError("Private accessor was defined without a setter");
    if (typeof c == "function" ? u !== c || !d : !c.has(u)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return h === "a" ? d.call(u, f) : d ? d.value = f : c.set(u, f), f;
  }, t = pt && pt.__classPrivateFieldGet || function(u, c, f, h) {
    if (f === "a" && !h) throw new TypeError("Private accessor was defined without a getter");
    if (typeof c == "function" ? u !== c || !h : !c.has(u)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return f === "m" ? h : f === "a" ? h.call(u) : h ? h.value : c.get(u);
  }, r, i;
  Object.defineProperty(pt, "__esModule", { value: !0 }), pt.Logger = void 0;
  const s = $a(), n = tl();
  function a(u, c) {
    return u.config.level <= c && n.GlobalConfig.level <= c;
  }
  class o {
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
  }
  return pt.Logger = o, r = /* @__PURE__ */ new WeakMap(), i = /* @__PURE__ */ new WeakMap(), pt;
}
var ls;
function wn() {
  return ls || (ls = 1, function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.Logger = e.LogLevels = e.GlobalConfig = e.LogConfig = void 0;
    var t = tl();
    Object.defineProperty(e, "LogConfig", { enumerable: !0, get: function() {
      return t.LogConfig;
    } }), Object.defineProperty(e, "GlobalConfig", { enumerable: !0, get: function() {
      return t.GlobalConfig;
    } });
    var r = $a();
    Object.defineProperty(e, "LogLevels", { enumerable: !0, get: function() {
      return r.LogLevels;
    } });
    var i = rl();
    Object.defineProperty(e, "Logger", { enumerable: !0, get: function() {
      return i.Logger;
    } });
  }(ki)), ki;
}
var nt = {}, it = {}, It = {}, cs;
function Kc() {
  if (cs) return It;
  cs = 1;
  var e = It && It.__classPrivateFieldSet || function(u, c, f, h, d) {
    if (h === "m") throw new TypeError("Private method is not writable");
    if (h === "a" && !d) throw new TypeError("Private accessor was defined without a setter");
    if (typeof c == "function" ? u !== c || !d : !c.has(u)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return h === "a" ? d.call(u, f) : d ? d.value = f : c.set(u, f), f;
  }, t = It && It.__classPrivateFieldGet || function(u, c, f, h) {
    if (f === "a" && !h) throw new TypeError("Private accessor was defined without a getter");
    if (typeof c == "function" ? u !== c || !h : !c.has(u)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return f === "m" ? h : f === "a" ? h.call(u) : h ? h.value : c.get(u);
  }, r, i, s, n, a;
  Object.defineProperty(It, "__esModule", { value: !0 });
  let o = class {
    constructor(c, f, h) {
      r.set(this, void 0), i.set(this, void 0), s.set(this, void 0), n.set(this, void 0), a.set(this, void 0), e(this, r, c, "f"), e(this, a, !1, "f"), e(this, n, !0, "f");
      let d = f;
      d.endsWith("?") && (e(this, n, !1, "f"), d = d.substring(0, d.length - 1)), e(this, i, d, "f");
      let g = h;
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
  return r = /* @__PURE__ */ new WeakMap(), i = /* @__PURE__ */ new WeakMap(), s = /* @__PURE__ */ new WeakMap(), n = /* @__PURE__ */ new WeakMap(), a = /* @__PURE__ */ new WeakMap(), It.default = o, It;
}
var at = {}, Ct = {}, ds;
function Bc() {
  if (ds) return Ct;
  ds = 1;
  var e = Ct && Ct.__classPrivateFieldSet || function(n, a, o, u, c) {
    if (u === "m") throw new TypeError("Private method is not writable");
    if (u === "a" && !c) throw new TypeError("Private accessor was defined without a setter");
    if (typeof a == "function" ? n !== a || !c : !a.has(n)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return u === "a" ? c.call(n, o) : c ? c.value = o : a.set(n, o), o;
  }, t = Ct && Ct.__classPrivateFieldGet || function(n, a, o, u) {
    if (o === "a" && !u) throw new TypeError("Private accessor was defined without a getter");
    if (typeof a == "function" ? n !== a || !u : !a.has(n)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return o === "m" ? u : o === "a" ? u.call(n) : u ? u.value : a.get(n);
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
var At = {}, fs;
function Jc() {
  if (fs) return At;
  fs = 1;
  var e = At && At.__classPrivateFieldSet || function(s, n, a, o, u) {
    if (o === "m") throw new TypeError("Private method is not writable");
    if (o === "a" && !u) throw new TypeError("Private accessor was defined without a setter");
    if (typeof n == "function" ? s !== n || !u : !n.has(s)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return o === "a" ? u.call(s, a) : u ? u.value = a : n.set(s, a), a;
  }, t = At && At.__classPrivateFieldGet || function(s, n, a, o) {
    if (a === "a" && !o) throw new TypeError("Private accessor was defined without a getter");
    if (typeof n == "function" ? s !== n || !o : !n.has(s)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return a === "m" ? o : a === "a" ? o.call(s) : o ? o.value : n.get(s);
  }, r;
  Object.defineProperty(At, "__esModule", { value: !0 });
  let i = class {
    constructor(n) {
      r.set(this, void 0), e(this, r, n, "f");
    }
    get name() {
      return t(this, r, "f");
    }
  };
  return r = /* @__PURE__ */ new WeakMap(), At.default = i, At;
}
var Lt = {}, hs;
function Yc() {
  if (hs) return Lt;
  hs = 1;
  var e = Lt && Lt.__classPrivateFieldSet || function(n, a, o, u, c) {
    if (u === "m") throw new TypeError("Private method is not writable");
    if (u === "a" && !c) throw new TypeError("Private accessor was defined without a setter");
    if (typeof a == "function" ? n !== a || !c : !a.has(n)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return u === "a" ? c.call(n, o) : c ? c.value = o : a.set(n, o), o;
  }, t = Lt && Lt.__classPrivateFieldGet || function(n, a, o, u) {
    if (o === "a" && !u) throw new TypeError("Private accessor was defined without a getter");
    if (typeof a == "function" ? n !== a || !u : !a.has(n)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return o === "m" ? u : o === "a" ? u.call(n) : u ? u.value : a.get(n);
  }, r, i;
  Object.defineProperty(Lt, "__esModule", { value: !0 });
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
  return r = /* @__PURE__ */ new WeakMap(), i = /* @__PURE__ */ new WeakMap(), Lt.default = s, Lt;
}
var ms;
function Xc() {
  if (ms) return at;
  ms = 1;
  var e = at && at.__classPrivateFieldSet || function(d, g, P, _, m) {
    if (_ === "m") throw new TypeError("Private method is not writable");
    if (_ === "a" && !m) throw new TypeError("Private accessor was defined without a setter");
    if (typeof g == "function" ? d !== g || !m : !g.has(d)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return _ === "a" ? m.call(d, P) : m ? m.value = P : g.set(d, P), P;
  }, t = at && at.__classPrivateFieldGet || function(d, g, P, _) {
    if (P === "a" && !_) throw new TypeError("Private accessor was defined without a getter");
    if (typeof g == "function" ? d !== g || !_ : !g.has(d)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return P === "m" ? _ : P === "a" ? _.call(d) : _ ? _.value : g.get(d);
  }, r = at && at.__importDefault || function(d) {
    return d && d.__esModule ? d : { default: d };
  }, i, s, n, a, o;
  Object.defineProperty(at, "__esModule", { value: !0 });
  const u = r(Bc()), c = r(Jc()), f = r(Yc());
  let h = class {
    constructor(g, P, _) {
      i.set(this, void 0), s.set(this, void 0), n.set(this, void 0), a.set(this, void 0), o.set(this, void 0), e(this, i, g, "f"), e(this, s, P, "f");
      const m = _.attributes || {};
      e(this, n, Object.keys(m).map((p) => new u.default(p, String(m[p]))), "f");
      const v = _.properties || {};
      e(this, a, Object.keys(v).map((p) => new f.default(p, String(v[p]))), "f");
      const l = _.events || {};
      e(this, o, Object.keys(l).map((p) => new c.default(p)), "f");
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
  return i = /* @__PURE__ */ new WeakMap(), s = /* @__PURE__ */ new WeakMap(), n = /* @__PURE__ */ new WeakMap(), a = /* @__PURE__ */ new WeakMap(), o = /* @__PURE__ */ new WeakMap(), at.default = h, at;
}
var qt = {}, ps;
function Qc() {
  if (ps) return qt;
  ps = 1;
  var e = qt && qt.__classPrivateFieldSet || function(u, c, f, h, d) {
    if (h === "m") throw new TypeError("Private method is not writable");
    if (h === "a" && !d) throw new TypeError("Private accessor was defined without a setter");
    if (typeof c == "function" ? u !== c || !d : !c.has(u)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return h === "a" ? d.call(u, f) : d ? d.value = f : c.set(u, f), f;
  }, t = qt && qt.__classPrivateFieldGet || function(u, c, f, h) {
    if (f === "a" && !h) throw new TypeError("Private accessor was defined without a getter");
    if (typeof c == "function" ? u !== c || !h : !c.has(u)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return f === "m" ? h : f === "a" ? h.call(u) : h ? h.value : c.get(u);
  }, r, i, s, n, a;
  Object.defineProperty(qt, "__esModule", { value: !0 });
  let o = class {
    constructor(c, f, h) {
      r.set(this, void 0), i.set(this, void 0), s.set(this, void 0), n.set(this, void 0), a.set(this, void 0), e(this, r, c, "f"), e(this, a, !1, "f"), e(this, n, !0, "f");
      let d = f;
      d.endsWith("?") && (e(this, n, !1, "f"), d = d.substring(0, d.length - 1)), e(this, i, d, "f");
      let g = h;
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
  return r = /* @__PURE__ */ new WeakMap(), i = /* @__PURE__ */ new WeakMap(), s = /* @__PURE__ */ new WeakMap(), n = /* @__PURE__ */ new WeakMap(), a = /* @__PURE__ */ new WeakMap(), qt.default = o, qt;
}
var vs;
function Zc() {
  if (vs) return it;
  vs = 1;
  var e = it && it.__classPrivateFieldSet || function(d, g, P, _, m) {
    if (_ === "m") throw new TypeError("Private method is not writable");
    if (_ === "a" && !m) throw new TypeError("Private accessor was defined without a setter");
    if (typeof g == "function" ? d !== g || !m : !g.has(d)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return _ === "a" ? m.call(d, P) : m ? m.value = P : g.set(d, P), P;
  }, t = it && it.__classPrivateFieldGet || function(d, g, P, _) {
    if (P === "a" && !_) throw new TypeError("Private accessor was defined without a getter");
    if (typeof g == "function" ? d !== g || !_ : !g.has(d)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return P === "m" ? _ : P === "a" ? _.call(d) : _ ? _.value : g.get(d);
  }, r = it && it.__importDefault || function(d) {
    return d && d.__esModule ? d : { default: d };
  }, i, s, n, a, o;
  Object.defineProperty(it, "__esModule", { value: !0 });
  const u = r(Kc()), c = r(Xc()), f = r(Qc());
  let h = class {
    constructor(g, P, _) {
      i.set(this, void 0), s.set(this, void 0), n.set(this, void 0), a.set(this, void 0), o.set(this, void 0), e(this, i, g, "f"), e(this, s, `${g}/${P}`, "f");
      const m = _.properties || {};
      e(this, n, Object.keys(m).map((p) => {
        const y = m[p];
        return new f.default(g, p, y);
      }), "f");
      const v = _.attributes || {};
      e(this, a, Object.keys(v).map((p) => {
        const y = v[p];
        return new u.default(g, p, y);
      }), "f");
      const l = _.elements || {};
      e(this, o, Object.keys(l).map((p) => {
        const y = l[p];
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
  return i = /* @__PURE__ */ new WeakMap(), s = /* @__PURE__ */ new WeakMap(), n = /* @__PURE__ */ new WeakMap(), a = /* @__PURE__ */ new WeakMap(), o = /* @__PURE__ */ new WeakMap(), it.default = h, it;
}
var st = {}, kt = {}, gs;
function xc() {
  if (gs) return kt;
  gs = 1;
  var e = kt && kt.__classPrivateFieldSet || function(a, o, u, c, f) {
    if (c === "m") throw new TypeError("Private method is not writable");
    if (c === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof o == "function" ? a !== o || !f : !o.has(a)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return c === "a" ? f.call(a, u) : f ? f.value = u : o.set(a, u), u;
  }, t = kt && kt.__classPrivateFieldGet || function(a, o, u, c) {
    if (u === "a" && !c) throw new TypeError("Private accessor was defined without a getter");
    if (typeof o == "function" ? a !== o || !c : !o.has(a)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return u === "m" ? c : u === "a" ? c.call(a) : c ? c.value : o.get(a);
  }, r, i, s;
  Object.defineProperty(kt, "__esModule", { value: !0 });
  let n = class {
    constructor(o, u, c) {
      r.set(this, void 0), i.set(this, void 0), s.set(this, void 0), e(this, r, o, "f"), e(this, i, u, "f"), e(this, s, c, "f");
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
var Ut = {}, _s;
function ed() {
  if (_s) return Ut;
  _s = 1;
  var e = Ut && Ut.__classPrivateFieldSet || function(u, c, f, h, d) {
    if (h === "m") throw new TypeError("Private method is not writable");
    if (h === "a" && !d) throw new TypeError("Private accessor was defined without a setter");
    if (typeof c == "function" ? u !== c || !d : !c.has(u)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return h === "a" ? d.call(u, f) : d ? d.value = f : c.set(u, f), f;
  }, t = Ut && Ut.__classPrivateFieldGet || function(u, c, f, h) {
    if (f === "a" && !h) throw new TypeError("Private accessor was defined without a getter");
    if (typeof c == "function" ? u !== c || !h : !c.has(u)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return f === "m" ? h : f === "a" ? h.call(u) : h ? h.value : c.get(u);
  }, r, i, s, n, a;
  Object.defineProperty(Ut, "__esModule", { value: !0 });
  let o = class {
    constructor(c, f, h) {
      r.set(this, void 0), i.set(this, void 0), s.set(this, void 0), n.set(this, void 0), a.set(this, void 0), e(this, r, c, "f"), e(this, i, f, "f"), e(this, s, h.url, "f"), e(this, n, h.type, "f"), e(this, a, h.element, "f");
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
  return r = /* @__PURE__ */ new WeakMap(), i = /* @__PURE__ */ new WeakMap(), s = /* @__PURE__ */ new WeakMap(), n = /* @__PURE__ */ new WeakMap(), a = /* @__PURE__ */ new WeakMap(), Ut.default = o, Ut;
}
var ys;
function td() {
  if (ys) return st;
  ys = 1;
  var e = st && st.__classPrivateFieldSet || function(h, d, g, P, _) {
    if (P === "m") throw new TypeError("Private method is not writable");
    if (P === "a" && !_) throw new TypeError("Private accessor was defined without a setter");
    if (typeof d == "function" ? h !== d || !_ : !d.has(h)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return P === "a" ? _.call(h, g) : _ ? _.value = g : d.set(h, g), g;
  }, t = st && st.__classPrivateFieldGet || function(h, d, g, P) {
    if (g === "a" && !P) throw new TypeError("Private accessor was defined without a getter");
    if (typeof d == "function" ? h !== d || !P : !d.has(h)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return g === "m" ? P : g === "a" ? P.call(h) : P ? P.value : d.get(h);
  }, r = st && st.__importDefault || function(h) {
    return h && h.__esModule ? h : { default: h };
  }, i, s, n, a, o;
  Object.defineProperty(st, "__esModule", { value: !0 });
  const u = r(xc()), c = r(ed());
  let f = class {
    constructor(d, g, P, _) {
      i.set(this, void 0), s.set(this, void 0), n.set(this, void 0), a.set(this, void 0), o.set(this, void 0), e(this, i, d, "f"), e(this, s, g, "f"), e(this, n, P, "f");
      const m = _.attributes || {};
      e(this, a, Object.keys(m).map((l) => {
        const p = m[l];
        return new u.default(d, l, p);
      }), "f");
      const v = _.elements || {};
      e(this, o, Object.keys(v).map((l) => {
        const p = v[l];
        return new c.default(d, l, p);
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
  return i = /* @__PURE__ */ new WeakMap(), s = /* @__PURE__ */ new WeakMap(), n = /* @__PURE__ */ new WeakMap(), a = /* @__PURE__ */ new WeakMap(), o = /* @__PURE__ */ new WeakMap(), st.default = f, st;
}
var Ps;
function rd() {
  if (Ps) return nt;
  Ps = 1;
  var e = nt && nt.__classPrivateFieldSet || function(d, g, P, _, m) {
    if (_ === "m") throw new TypeError("Private method is not writable");
    if (_ === "a" && !m) throw new TypeError("Private accessor was defined without a setter");
    if (typeof g == "function" ? d !== g || !m : !g.has(d)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return _ === "a" ? m.call(d, P) : m ? m.value = P : g.set(d, P), P;
  }, t = nt && nt.__classPrivateFieldGet || function(d, g, P, _) {
    if (P === "a" && !_) throw new TypeError("Private accessor was defined without a getter");
    if (typeof g == "function" ? d !== g || !_ : !g.has(d)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return P === "m" ? _ : P === "a" ? _.call(d) : _ ? _.value : g.get(d);
  }, r = nt && nt.__importDefault || function(d) {
    return d && d.__esModule ? d : { default: d };
  }, i, s, n, a, o, u;
  Object.defineProperty(nt, "__esModule", { value: !0 });
  const c = r(Zc()), f = r(td());
  let h = class {
    constructor(g, P) {
      i.set(this, void 0), s.set(this, void 0), n.set(this, void 0), a.set(this, void 0), o.set(this, void 0), u.set(this, void 0), e(this, i, g, "f"), e(this, s, P.name, "f"), e(this, n, P.url, "f"), e(this, a, P.dependencies || [], "f");
      const _ = P.defines || {};
      e(this, o, Object.keys(_).map((v) => {
        const l = _[v];
        return new c.default(this.name, v, l);
      }), "f");
      const m = P.provides || {};
      e(this, u, Object.keys(m).reduce((v, l) => {
        const p = m[l], y = Object.keys(p).map((w) => new f.default(this.name, l, w, p[w]), []);
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
      return t(this, u, "f").slice();
    }
  };
  return i = /* @__PURE__ */ new WeakMap(), s = /* @__PURE__ */ new WeakMap(), n = /* @__PURE__ */ new WeakMap(), a = /* @__PURE__ */ new WeakMap(), o = /* @__PURE__ */ new WeakMap(), u = /* @__PURE__ */ new WeakMap(), nt.default = h, nt;
}
var ot = {}, Ft = {}, ws;
function nd() {
  if (ws) return Ft;
  ws = 1;
  var e = Ft && Ft.__classPrivateFieldSet || function(u, c, f, h, d) {
    if (h === "m") throw new TypeError("Private method is not writable");
    if (h === "a" && !d) throw new TypeError("Private accessor was defined without a setter");
    if (typeof c == "function" ? u !== c || !d : !c.has(u)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return h === "a" ? d.call(u, f) : d ? d.value = f : c.set(u, f), f;
  }, t = Ft && Ft.__classPrivateFieldGet || function(u, c, f, h) {
    if (f === "a" && !h) throw new TypeError("Private accessor was defined without a getter");
    if (typeof c == "function" ? u !== c || !h : !c.has(u)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return f === "m" ? h : f === "a" ? h.call(u) : h ? h.value : c.get(u);
  }, r, i, s, n, a;
  Object.defineProperty(Ft, "__esModule", { value: !0 });
  let o = class {
    constructor(c, f, h) {
      r.set(this, void 0), i.set(this, void 0), s.set(this, void 0), n.set(this, void 0), a.set(this, void 0), e(this, r, f.name, "f"), e(this, i, f.type, "f"), e(this, s, f.mandatory, "f"), e(this, n, f.array, "f");
      const d = h.value;
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
  return r = /* @__PURE__ */ new WeakMap(), i = /* @__PURE__ */ new WeakMap(), s = /* @__PURE__ */ new WeakMap(), n = /* @__PURE__ */ new WeakMap(), a = /* @__PURE__ */ new WeakMap(), Ft.default = o, Ft;
}
var Wt = {}, bs;
function id() {
  if (bs) return Wt;
  bs = 1;
  var e = Wt && Wt.__classPrivateFieldSet || function(o, u, c, f, h) {
    if (f === "m") throw new TypeError("Private method is not writable");
    if (f === "a" && !h) throw new TypeError("Private accessor was defined without a setter");
    if (typeof u == "function" ? o !== u || !h : !u.has(o)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return f === "a" ? h.call(o, c) : h ? h.value = c : u.set(o, c), c;
  }, t = Wt && Wt.__classPrivateFieldGet || function(o, u, c, f) {
    if (c === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof u == "function" ? o !== u || !f : !u.has(o)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return c === "m" ? f : c === "a" ? f.call(o) : f ? f.value : u.get(o);
  }, r, i, s, n;
  Object.defineProperty(Wt, "__esModule", { value: !0 });
  let a = class {
    constructor(u, c, f) {
      r.set(this, void 0), i.set(this, void 0), s.set(this, void 0), n.set(this, void 0), e(this, r, c.name, "f"), e(this, i, `${u}${f.url}`, "f"), e(this, s, f.type, "f"), e(this, n, f.element, "f");
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
  return r = /* @__PURE__ */ new WeakMap(), i = /* @__PURE__ */ new WeakMap(), s = /* @__PURE__ */ new WeakMap(), n = /* @__PURE__ */ new WeakMap(), Wt.default = a, Wt;
}
var $s;
function ad() {
  if ($s) return ot;
  $s = 1;
  var e = ot && ot.__classPrivateFieldSet || function(g, P, _, m, v) {
    if (m === "m") throw new TypeError("Private method is not writable");
    if (m === "a" && !v) throw new TypeError("Private accessor was defined without a setter");
    if (typeof P == "function" ? g !== P || !v : !P.has(g)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return m === "a" ? v.call(g, _) : v ? v.value = _ : P.set(g, _), _;
  }, t = ot && ot.__classPrivateFieldGet || function(g, P, _, m) {
    if (_ === "a" && !m) throw new TypeError("Private accessor was defined without a getter");
    if (typeof P == "function" ? g !== P || !m : !P.has(g)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return _ === "m" ? m : _ === "a" ? m.call(g) : m ? m.value : P.get(g);
  }, r = ot && ot.__importDefault || function(g) {
    return g && g.__esModule ? g : { default: g };
  }, i, s, n, a, o, u;
  Object.defineProperty(ot, "__esModule", { value: !0 });
  const c = rl(), f = r(nd()), h = r(id());
  let d = class {
    constructor(P, _, m, v) {
      i.set(this, void 0), s.set(this, void 0), n.set(this, void 0), a.set(this, []), o.set(this, []), u.set(this, void 0), e(this, u, new c.Logger("PluginManager", v), "f"), e(this, i, m.plugin, "f"), e(this, s, _.name, "f"), e(this, n, `${_.name}/${m.name}`, "f"), _.attributes.forEach((l) => {
        const { name: p, type: y, mandatory: w, array: b } = l, E = m.attributes.find((S) => S.name === p);
        if (w && !E)
          throw new Error(`Missing mandatory attribute '${p}'`);
        if (E) {
          if (b !== Array.isArray(E.value))
            throw new Error(`Invalid attribute type '${p}', should ${b ? "" : "not "}be an array`);
          t(this, a, "f").push(new f.default(P, l, E));
        }
      }), m.attributes.forEach((l) => {
        _.attributes.find((y) => y.name === l.name) || this.logger.warn(`${m.plugin} - ${m.name} - Attribute '${l.name}' is not defined`);
      }), _.elements.forEach((l) => {
        const { name: p } = l, y = m.elements.find((w) => w.name === p);
        if (!y)
          throw new Error(`Missing element '${p}'`);
        t(this, o, "f").push(new h.default(P, l, y));
      }), m.elements.forEach((l) => {
        _.elements.find((y) => y.name === l.name) || this.logger.warn(`${m.plugin} - ${m.name} - Element '${l.name}' is not defined`);
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
      return t(this, u, "f");
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
  return i = /* @__PURE__ */ new WeakMap(), s = /* @__PURE__ */ new WeakMap(), n = /* @__PURE__ */ new WeakMap(), a = /* @__PURE__ */ new WeakMap(), o = /* @__PURE__ */ new WeakMap(), u = /* @__PURE__ */ new WeakMap(), ot.default = d, ot;
}
var vt = {}, gt = {}, $n = { exports: {} }, Ui = {}, _t = {}, Yt = {}, Fi = {}, Wi = {}, Vi = {}, Es;
function yi() {
  return Es || (Es = 1, function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.regexpCode = e.getEsmExportName = e.getProperty = e.safeStringify = e.stringify = e.strConcat = e.addCodeArg = e.str = e._ = e.nil = e._Code = e.Name = e.IDENTIFIER = e._CodeOrName = void 0;
    class t {
    }
    e._CodeOrName = t, e.IDENTIFIER = /^[a-z$_][a-z$_0-9]*$/i;
    class r extends t {
      constructor(l) {
        if (super(), !e.IDENTIFIER.test(l))
          throw new Error("CodeGen: name must be a valid identifier");
        this.str = l;
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
      constructor(l) {
        super(), this._items = typeof l == "string" ? [l] : l;
      }
      toString() {
        return this.str;
      }
      emptyStr() {
        if (this._items.length > 1)
          return !1;
        const l = this._items[0];
        return l === "" || l === '""';
      }
      get str() {
        var l;
        return (l = this._str) !== null && l !== void 0 ? l : this._str = this._items.reduce((p, y) => `${p}${y}`, "");
      }
      get names() {
        var l;
        return (l = this._names) !== null && l !== void 0 ? l : this._names = this._items.reduce((p, y) => (y instanceof r && (p[y.str] = (p[y.str] || 0) + 1), p), {});
      }
    }
    e._Code = i, e.nil = new i("");
    function s(v, ...l) {
      const p = [v[0]];
      let y = 0;
      for (; y < l.length; )
        o(p, l[y]), p.push(v[++y]);
      return new i(p);
    }
    e._ = s;
    const n = new i("+");
    function a(v, ...l) {
      const p = [g(v[0])];
      let y = 0;
      for (; y < l.length; )
        p.push(n), o(p, l[y]), p.push(n, g(v[++y]));
      return u(p), new i(p);
    }
    e.str = a;
    function o(v, l) {
      l instanceof i ? v.push(...l._items) : l instanceof r ? v.push(l) : v.push(h(l));
    }
    e.addCodeArg = o;
    function u(v) {
      let l = 1;
      for (; l < v.length - 1; ) {
        if (v[l] === n) {
          const p = c(v[l - 1], v[l + 1]);
          if (p !== void 0) {
            v.splice(l - 1, 3, p);
            continue;
          }
          v[l++] = "+";
        }
        l++;
      }
    }
    function c(v, l) {
      if (l === '""')
        return v;
      if (v === '""')
        return l;
      if (typeof v == "string")
        return l instanceof r || v[v.length - 1] !== '"' ? void 0 : typeof l != "string" ? `${v.slice(0, -1)}${l}"` : l[0] === '"' ? v.slice(0, -1) + l.slice(1) : void 0;
      if (typeof l == "string" && l[0] === '"' && !(v instanceof r))
        return `"${v}${l.slice(1)}`;
    }
    function f(v, l) {
      return l.emptyStr() ? v : v.emptyStr() ? l : a`${v}${l}`;
    }
    e.strConcat = f;
    function h(v) {
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
    function m(v) {
      return new i(v.toString());
    }
    e.regexpCode = m;
  }(Vi)), Vi;
}
var Gi = {}, Ss;
function Ds() {
  return Ss || (Ss = 1, function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.ValueScope = e.ValueScopeName = e.Scope = e.varKinds = e.UsedValueState = void 0;
    const t = yi();
    class r extends Error {
      constructor(c) {
        super(`CodeGen: "code" for ${c} not defined`), this.value = c.value;
      }
    }
    var i;
    (function(u) {
      u[u.Started = 0] = "Started", u[u.Completed = 1] = "Completed";
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
        var f, h;
        if (!((h = (f = this._parent) === null || f === void 0 ? void 0 : f._prefixes) === null || h === void 0) && h.has(c) || this._prefixes && !this._prefixes.has(c))
          throw new Error(`CodeGen: prefix "${c}" is not allowed in this scope`);
        return this._names[c] = { prefix: c, index: 0 };
      }
    }
    e.Scope = s;
    class n extends t.Name {
      constructor(c, f) {
        super(f), this.prefix = c;
      }
      setValue(c, { property: f, itemIndex: h }) {
        this.value = c, this.scopePath = (0, t._)`.${new t.Name(f)}[${h}]`;
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
        var h;
        if (f.ref === void 0)
          throw new Error("CodeGen: ref must be passed in value");
        const d = this.toName(c), { prefix: g } = d, P = (h = f.key) !== null && h !== void 0 ? h : f.ref;
        let _ = this._values[g];
        if (_) {
          const l = _.get(P);
          if (l)
            return l;
        } else
          _ = this._values[g] = /* @__PURE__ */ new Map();
        _.set(P, d);
        const m = this._scope[g] || (this._scope[g] = []), v = m.length;
        return m[v] = f.ref, d.setValue(f, { property: g, itemIndex: v }), d;
      }
      getValue(c, f) {
        const h = this._values[c];
        if (h)
          return h.get(f);
      }
      scopeRefs(c, f = this._values) {
        return this._reduceValues(f, (h) => {
          if (h.scopePath === void 0)
            throw new Error(`CodeGen: name "${h}" has no value`);
          return (0, t._)`${c}${h.scopePath}`;
        });
      }
      scopeCode(c = this._values, f, h) {
        return this._reduceValues(c, (d) => {
          if (d.value === void 0)
            throw new Error(`CodeGen: name "${d}" has no value`);
          return d.value.code;
        }, f, h);
      }
      _reduceValues(c, f, h = {}, d) {
        let g = t.nil;
        for (const P in c) {
          const _ = c[P];
          if (!_)
            continue;
          const m = h[P] = h[P] || /* @__PURE__ */ new Map();
          _.forEach((v) => {
            if (m.has(v))
              return;
            m.set(v, i.Started);
            let l = f(v);
            if (l) {
              const p = this.opts.es5 ? e.varKinds.var : e.varKinds.const;
              g = (0, t._)`${g}${p} ${v} = ${l};${this.opts._n}`;
            } else if (l = d == null ? void 0 : d(v))
              g = (0, t._)`${g}${l}${this.opts._n}`;
            else
              throw new r(v);
            m.set(v, i.Completed);
          });
        }
        return g;
      }
    }
    e.ValueScope = o;
  }(Gi)), Gi;
}
var Os;
function se() {
  return Os || (Os = 1, function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.or = e.and = e.not = e.CodeGen = e.operators = e.varKinds = e.ValueScopeName = e.ValueScope = e.Scope = e.Name = e.regexpCode = e.stringify = e.getProperty = e.nil = e.strConcat = e.str = e._ = void 0;
    const t = yi(), r = Ds();
    var i = yi();
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
    var s = Ds();
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
        const I = $ ? r.varKinds.var : this.varKind, B = this.rhs === void 0 ? "" : ` = ${this.rhs}`;
        return `${I} ${this.name}${B};` + D;
      }
      optimizeNames($, D) {
        if ($[this.name.str])
          return this.rhs && (this.rhs = G(this.rhs, $, D)), this;
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
          return this.rhs = G(this.rhs, $, D), this;
      }
      get names() {
        const $ = this.lhs instanceof t.Name ? {} : { ...this.lhs.names };
        return F($, this.rhs);
      }
    }
    class u extends o {
      constructor($, D, I, B) {
        super($, I, B), this.op = D;
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
    class h extends n {
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
        return this.code = G(this.code, $, D), this;
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
        let B = I.length;
        for (; B--; ) {
          const Y = I[B];
          Y.optimizeNames($, D) || (J($, Y.names), I.splice(B, 1));
        }
        return I.length > 0 ? this : void 0;
      }
      get names() {
        return this.nodes.reduce(($, D) => H($, D.names), {});
      }
    }
    class P extends g {
      render($) {
        return "{" + $._n + super.render($) + "}" + $._n;
      }
    }
    class _ extends g {
    }
    class m extends P {
    }
    m.kind = "else";
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
          D = this.else = Array.isArray(I) ? new m(I) : I;
        }
        if (D)
          return $ === !1 ? D instanceof v ? D : D.nodes : this.nodes.length ? this : new v(x($), D instanceof v ? [D] : D.nodes);
        if (!($ === !1 || !this.nodes.length))
          return this;
      }
      optimizeNames($, D) {
        var I;
        if (this.else = (I = this.else) === null || I === void 0 ? void 0 : I.optimizeNames($, D), !!(super.optimizeNames($, D) || this.else))
          return this.condition = G(this.condition, $, D), this;
      }
      get names() {
        const $ = super.names;
        return F($, this.condition), this.else && H($, this.else.names), $;
      }
    }
    v.kind = "if";
    class l extends P {
    }
    l.kind = "for";
    class p extends l {
      constructor($) {
        super(), this.iteration = $;
      }
      render($) {
        return `for(${this.iteration})` + super.render($);
      }
      optimizeNames($, D) {
        if (super.optimizeNames($, D))
          return this.iteration = G(this.iteration, $, D), this;
      }
      get names() {
        return H(super.names, this.iteration.names);
      }
    }
    class y extends l {
      constructor($, D, I, B) {
        super(), this.varKind = $, this.name = D, this.from = I, this.to = B;
      }
      render($) {
        const D = $.es5 ? r.varKinds.var : this.varKind, { name: I, from: B, to: Y } = this;
        return `for(${D} ${I}=${B}; ${I}<${Y}; ${I}++)` + super.render($);
      }
      get names() {
        const $ = F(super.names, this.from);
        return F($, this.to);
      }
    }
    class w extends l {
      constructor($, D, I, B) {
        super(), this.loop = $, this.varKind = D, this.name = I, this.iterable = B;
      }
      render($) {
        return `for(${this.varKind} ${this.name} ${this.loop} ${this.iterable})` + super.render($);
      }
      optimizeNames($, D) {
        if (super.optimizeNames($, D))
          return this.iterable = G(this.iterable, $, D), this;
      }
      get names() {
        return H(super.names, this.iterable.names);
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
        var I, B;
        return super.optimizeNames($, D), (I = this.catch) === null || I === void 0 || I.optimizeNames($, D), (B = this.finally) === null || B === void 0 || B.optimizeNames($, D), this;
      }
      get names() {
        const $ = super.names;
        return this.catch && H($, this.catch.names), this.finally && H($, this.finally.names), $;
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
    class k {
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
      _def($, D, I, B) {
        const Y = this._scope.toName(D);
        return I !== void 0 && B && (this._constants[Y.str] = I), this._leafNode(new a($, Y, I)), Y;
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
        return this._leafNode(new u($, e.operators.ADD, D));
      }
      // appends passed SafeExpr to code or executes Block
      code($) {
        return typeof $ == "function" ? $() : $ !== t.nil && this._leafNode(new d($)), this;
      }
      // returns code for object literal for the passed argument list of key-value pairs
      object(...$) {
        const D = ["{"];
        for (const [I, B] of $)
          D.length > 1 && D.push(","), D.push(I), (I !== B || this.opts.es5) && (D.push(":"), (0, t.addCodeArg)(D, B));
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
        return this._elseNode(new m());
      }
      // end `if` statement (needed if gen.if was used only with condition)
      endIf() {
        return this._endBlockNode(v, m);
      }
      _for($, D) {
        return this._blockNode($), D && this.code(D).endFor(), this;
      }
      // a generic `for` clause (or statement if `forBody` is passed)
      for($, D) {
        return this._for(new p($), D);
      }
      // `for` statement for a range of values
      forRange($, D, I, B, Y = this.opts.es5 ? r.varKinds.var : r.varKinds.let) {
        const ce = this._scope.toName($);
        return this._for(new y(Y, ce, D, I), () => B(ce));
      }
      // `for-of` statement (in es5 mode replace with a normal for loop)
      forOf($, D, I, B = r.varKinds.const) {
        const Y = this._scope.toName($);
        if (this.opts.es5) {
          const ce = D instanceof t.Name ? D : this.var("_arr", D);
          return this.forRange("_i", 0, (0, t._)`${ce}.length`, (ue) => {
            this.var(Y, (0, t._)`${ce}[${ue}]`), I(Y);
          });
        }
        return this._for(new w("of", B, Y, D), () => I(Y));
      }
      // `for-in` statement.
      // With option `ownProperties` replaced with a `for-of` loop for object keys
      forIn($, D, I, B = this.opts.es5 ? r.varKinds.var : r.varKinds.const) {
        if (this.opts.ownProperties)
          return this.forOf($, (0, t._)`Object.keys(${D})`, I);
        const Y = this._scope.toName($);
        return this._for(new w("in", B, Y, D), () => I(Y));
      }
      // end `for` loop
      endFor() {
        return this._endBlockNode(l);
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
        const B = new S();
        if (this._blockNode(B), this.code($), D) {
          const Y = this.name("e");
          this._currNode = B.catch = new O(Y), D(Y);
        }
        return I && (this._currNode = B.finally = new C(), this.code(I)), this._endBlockNode(O, C);
      }
      // `throw` statement
      throw($) {
        return this._leafNode(new h($));
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
      func($, D = t.nil, I, B) {
        return this._blockNode(new b($, D, I)), B && this.code(B).endFunc(), this;
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
    e.CodeGen = k;
    function H(M, $) {
      for (const D in $)
        M[D] = (M[D] || 0) + ($[D] || 0);
      return M;
    }
    function F(M, $) {
      return $ instanceof t._CodeOrName ? H(M, $.names) : M;
    }
    function G(M, $, D) {
      if (M instanceof t.Name)
        return I(M);
      if (!B(M))
        return M;
      return new t._Code(M._items.reduce((Y, ce) => (ce instanceof t.Name && (ce = I(ce)), ce instanceof t._Code ? Y.push(...ce._items) : Y.push(ce), Y), []));
      function I(Y) {
        const ce = D[Y.str];
        return ce === void 0 || $[Y.str] !== 1 ? Y : (delete $[Y.str], ce);
      }
      function B(Y) {
        return Y instanceof t._Code && Y._items.some((ce) => ce instanceof t.Name && $[ce.str] === 1 && D[ce.str] !== void 0);
      }
    }
    function J(M, $) {
      for (const D in $)
        M[D] = (M[D] || 0) - ($[D] || 0);
    }
    function x(M) {
      return typeof M == "boolean" || typeof M == "number" || M === null ? !M : (0, t._)`!${A(M)}`;
    }
    e.not = x;
    const Z = R(e.operators.AND);
    function X(...M) {
      return M.reduce(Z);
    }
    e.and = X;
    const oe = R(e.operators.OR);
    function q(...M) {
      return M.reduce(oe);
    }
    e.or = q;
    function R(M) {
      return ($, D) => $ === t.nil ? D : D === t.nil ? $ : (0, t._)`${A($)} ${M} ${A(D)}`;
    }
    function A(M) {
      return M instanceof t.Name ? M : (0, t._)`(${M})`;
    }
  }(Wi)), Wi;
}
var ne = {}, Ts;
function fe() {
  if (Ts) return ne;
  Ts = 1, Object.defineProperty(ne, "__esModule", { value: !0 }), ne.checkStrictMode = ne.getErrorPath = ne.Type = ne.useFunc = ne.setEvaluated = ne.evaluatedPropsToName = ne.mergeEvaluated = ne.eachItem = ne.unescapeJsonPointer = ne.escapeJsonPointer = ne.escapeFragment = ne.unescapeFragment = ne.schemaRefOrVal = ne.schemaHasRulesButRef = ne.schemaHasRules = ne.checkUnknownRules = ne.alwaysValidSchema = ne.toHash = void 0;
  const e = se(), t = yi();
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
  function u(w) {
    return h(decodeURIComponent(w));
  }
  ne.unescapeFragment = u;
  function c(w) {
    return encodeURIComponent(f(w));
  }
  ne.escapeFragment = c;
  function f(w) {
    return typeof w == "number" ? `${w}` : w.replace(/~/g, "~0").replace(/\//g, "~1");
  }
  ne.escapeJsonPointer = f;
  function h(w) {
    return w.replace(/~1/g, "/").replace(/~0/g, "~");
  }
  ne.unescapeJsonPointer = h;
  function d(w, b) {
    if (Array.isArray(w))
      for (const E of w)
        b(E);
    else
      b(w);
  }
  ne.eachItem = d;
  function g({ mergeNames: w, mergeToName: b, mergeValues: E, resultToName: S }) {
    return (O, C, k, H) => {
      const F = k === void 0 ? C : k instanceof e.Name ? (C instanceof e.Name ? w(O, C, k) : b(O, C, k), k) : C instanceof e.Name ? (b(O, k, C), C) : E(C, k);
      return H === e.Name && !(F instanceof e.Name) ? S(O, F) : F;
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
  const m = {};
  function v(w, b) {
    return w.scopeValue("func", {
      ref: b,
      code: m[b.code] || (m[b.code] = new t._Code(b.code))
    });
  }
  ne.useFunc = v;
  var l;
  (function(w) {
    w[w.Num = 0] = "Num", w[w.Str = 1] = "Str";
  })(l || (ne.Type = l = {}));
  function p(w, b, E) {
    if (w instanceof e.Name) {
      const S = b === l.Num;
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
var En = {}, Rs;
function Jt() {
  if (Rs) return En;
  Rs = 1, Object.defineProperty(En, "__esModule", { value: !0 });
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
  return En.default = t, En;
}
var js;
function Ti() {
  return js || (js = 1, function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.extendErrors = e.resetErrorsCount = e.reportExtraError = e.reportError = e.keyword$DataError = e.keywordError = void 0;
    const t = se(), r = fe(), i = Jt();
    e.keywordError = {
      message: ({ keyword: m }) => (0, t.str)`must pass "${m}" keyword validation`
    }, e.keyword$DataError = {
      message: ({ keyword: m, schemaType: v }) => v ? (0, t.str)`"${m}" keyword must be ${v} ($data)` : (0, t.str)`"${m}" keyword is invalid ($data)`
    };
    function s(m, v = e.keywordError, l, p) {
      const { it: y } = m, { gen: w, compositeRule: b, allErrors: E } = y, S = h(m, v, l);
      p ?? (b || E) ? u(w, S) : c(y, (0, t._)`[${S}]`);
    }
    e.reportError = s;
    function n(m, v = e.keywordError, l) {
      const { it: p } = m, { gen: y, compositeRule: w, allErrors: b } = p, E = h(m, v, l);
      u(y, E), w || b || c(p, i.default.vErrors);
    }
    e.reportExtraError = n;
    function a(m, v) {
      m.assign(i.default.errors, v), m.if((0, t._)`${i.default.vErrors} !== null`, () => m.if(v, () => m.assign((0, t._)`${i.default.vErrors}.length`, v), () => m.assign(i.default.vErrors, null)));
    }
    e.resetErrorsCount = a;
    function o({ gen: m, keyword: v, schemaValue: l, data: p, errsCount: y, it: w }) {
      if (y === void 0)
        throw new Error("ajv implementation error");
      const b = m.name("err");
      m.forRange("i", y, i.default.errors, (E) => {
        m.const(b, (0, t._)`${i.default.vErrors}[${E}]`), m.if((0, t._)`${b}.instancePath === undefined`, () => m.assign((0, t._)`${b}.instancePath`, (0, t.strConcat)(i.default.instancePath, w.errorPath))), m.assign((0, t._)`${b}.schemaPath`, (0, t.str)`${w.errSchemaPath}/${v}`), w.opts.verbose && (m.assign((0, t._)`${b}.schema`, l), m.assign((0, t._)`${b}.data`, p));
      });
    }
    e.extendErrors = o;
    function u(m, v) {
      const l = m.const("err", v);
      m.if((0, t._)`${i.default.vErrors} === null`, () => m.assign(i.default.vErrors, (0, t._)`[${l}]`), (0, t._)`${i.default.vErrors}.push(${l})`), m.code((0, t._)`${i.default.errors}++`);
    }
    function c(m, v) {
      const { gen: l, validateName: p, schemaEnv: y } = m;
      y.$async ? l.throw((0, t._)`new ${m.ValidationError}(${v})`) : (l.assign((0, t._)`${p}.errors`, v), l.return(!1));
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
    function h(m, v, l) {
      const { createErrors: p } = m.it;
      return p === !1 ? (0, t._)`{}` : d(m, v, l);
    }
    function d(m, v, l = {}) {
      const { gen: p, it: y } = m, w = [
        g(y, l),
        P(m, l)
      ];
      return _(m, v, w), p.object(...w);
    }
    function g({ errorPath: m }, { instancePath: v }) {
      const l = v ? (0, t.str)`${m}${(0, r.getErrorPath)(v, r.Type.Str)}` : m;
      return [i.default.instancePath, (0, t.strConcat)(i.default.instancePath, l)];
    }
    function P({ keyword: m, it: { errSchemaPath: v } }, { schemaPath: l, parentSchema: p }) {
      let y = p ? v : (0, t.str)`${v}/${m}`;
      return l && (y = (0, t.str)`${y}${(0, r.getErrorPath)(l, r.Type.Str)}`), [f.schemaPath, y];
    }
    function _(m, { params: v, message: l }, p) {
      const { keyword: y, data: w, schemaValue: b, it: E } = m, { opts: S, propertyName: O, topSchemaRef: C, schemaPath: k } = E;
      p.push([f.keyword, y], [f.params, typeof v == "function" ? v(m) : v || (0, t._)`{}`]), S.messages && p.push([f.message, typeof l == "function" ? l(m) : l]), S.verbose && p.push([f.schema, b], [f.parentSchema, (0, t._)`${C}${k}`], [i.default.data, w]), O && p.push([f.propertyName, O]);
    }
  }(Fi)), Fi;
}
var Ms;
function sd() {
  if (Ms) return Yt;
  Ms = 1, Object.defineProperty(Yt, "__esModule", { value: !0 }), Yt.boolOrEmptySchema = Yt.topBoolOrEmptySchema = void 0;
  const e = Ti(), t = se(), r = Jt(), i = {
    message: "boolean schema is false"
  };
  function s(o) {
    const { gen: u, schema: c, validateName: f } = o;
    c === !1 ? a(o, !1) : typeof c == "object" && c.$async === !0 ? u.return(r.default.data) : (u.assign((0, t._)`${f}.errors`, null), u.return(!0));
  }
  Yt.topBoolOrEmptySchema = s;
  function n(o, u) {
    const { gen: c, schema: f } = o;
    f === !1 ? (c.var(u, !1), a(o)) : c.var(u, !0);
  }
  Yt.boolOrEmptySchema = n;
  function a(o, u) {
    const { gen: c, data: f } = o, h = {
      gen: c,
      keyword: "false schema",
      data: f,
      schema: !1,
      schemaCode: !1,
      schemaValue: !1,
      params: {},
      it: o
    };
    (0, e.reportError)(h, i, void 0, u);
  }
  return Yt;
}
var we = {}, Xt = {}, Ns;
function nl() {
  if (Ns) return Xt;
  Ns = 1, Object.defineProperty(Xt, "__esModule", { value: !0 }), Xt.getRules = Xt.isJSONType = void 0;
  const e = ["string", "number", "integer", "boolean", "null", "object", "array"], t = new Set(e);
  function r(s) {
    return typeof s == "string" && t.has(s);
  }
  Xt.isJSONType = r;
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
  return Xt.getRules = i, Xt;
}
var yt = {}, Is;
function il() {
  if (Is) return yt;
  Is = 1, Object.defineProperty(yt, "__esModule", { value: !0 }), yt.shouldUseRule = yt.shouldUseGroup = yt.schemaHasRulesForType = void 0;
  function e({ schema: i, self: s }, n) {
    const a = s.RULES.types[n];
    return a && a !== !0 && t(i, a);
  }
  yt.schemaHasRulesForType = e;
  function t(i, s) {
    return s.rules.some((n) => r(i, n));
  }
  yt.shouldUseGroup = t;
  function r(i, s) {
    var n;
    return i[s.keyword] !== void 0 || ((n = s.definition.implements) === null || n === void 0 ? void 0 : n.some((a) => i[a] !== void 0));
  }
  return yt.shouldUseRule = r, yt;
}
var Cs;
function Pi() {
  if (Cs) return we;
  Cs = 1, Object.defineProperty(we, "__esModule", { value: !0 }), we.reportTypeError = we.checkDataTypes = we.checkDataType = we.coerceAndCheckDataType = we.getJSONTypes = we.getSchemaTypes = we.DataType = void 0;
  const e = nl(), t = il(), r = Ti(), i = se(), s = fe();
  var n;
  (function(l) {
    l[l.Correct = 0] = "Correct", l[l.Wrong = 1] = "Wrong";
  })(n || (we.DataType = n = {}));
  function a(l) {
    const p = o(l.type);
    if (p.includes("null")) {
      if (l.nullable === !1)
        throw new Error("type: null contradicts nullable: false");
    } else {
      if (!p.length && l.nullable !== void 0)
        throw new Error('"nullable" cannot be used without "type"');
      l.nullable === !0 && p.push("null");
    }
    return p;
  }
  we.getSchemaTypes = a;
  function o(l) {
    const p = Array.isArray(l) ? l : l ? [l] : [];
    if (p.every(e.isJSONType))
      return p;
    throw new Error("type must be JSONType or JSONType[]: " + p.join(","));
  }
  we.getJSONTypes = o;
  function u(l, p) {
    const { gen: y, data: w, opts: b } = l, E = f(p, b.coerceTypes), S = p.length > 0 && !(E.length === 0 && p.length === 1 && (0, t.schemaHasRulesForType)(l, p[0]));
    if (S) {
      const O = P(p, w, b.strictNumbers, n.Wrong);
      y.if(O, () => {
        E.length ? h(l, p, E) : m(l);
      });
    }
    return S;
  }
  we.coerceAndCheckDataType = u;
  const c = /* @__PURE__ */ new Set(["string", "number", "integer", "boolean", "null"]);
  function f(l, p) {
    return p ? l.filter((y) => c.has(y) || p === "array" && y === "array") : [];
  }
  function h(l, p, y) {
    const { gen: w, data: b, opts: E } = l, S = w.let("dataType", (0, i._)`typeof ${b}`), O = w.let("coerced", (0, i._)`undefined`);
    E.coerceTypes === "array" && w.if((0, i._)`${S} == 'object' && Array.isArray(${b}) && ${b}.length == 1`, () => w.assign(b, (0, i._)`${b}[0]`).assign(S, (0, i._)`typeof ${b}`).if(P(p, b, E.strictNumbers), () => w.assign(O, b))), w.if((0, i._)`${O} !== undefined`);
    for (const k of y)
      (c.has(k) || k === "array" && E.coerceTypes === "array") && C(k);
    w.else(), m(l), w.endIf(), w.if((0, i._)`${O} !== undefined`, () => {
      w.assign(b, O), d(l, O);
    });
    function C(k) {
      switch (k) {
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
  function d({ gen: l, parentData: p, parentDataProperty: y }, w) {
    l.if((0, i._)`${p} !== undefined`, () => l.assign((0, i._)`${p}[${y}]`, w));
  }
  function g(l, p, y, w = n.Correct) {
    const b = w === n.Correct ? i.operators.EQ : i.operators.NEQ;
    let E;
    switch (l) {
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
        return (0, i._)`typeof ${p} ${b} ${l}`;
    }
    return w === n.Correct ? E : (0, i.not)(E);
    function S(O = i.nil) {
      return (0, i.and)((0, i._)`typeof ${p} == "number"`, O, y ? (0, i._)`isFinite(${p})` : i.nil);
    }
  }
  we.checkDataType = g;
  function P(l, p, y, w) {
    if (l.length === 1)
      return g(l[0], p, y, w);
    let b;
    const E = (0, s.toHash)(l);
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
    message: ({ schema: l }) => `must be ${l}`,
    params: ({ schema: l, schemaValue: p }) => typeof l == "string" ? (0, i._)`{type: ${l}}` : (0, i._)`{type: ${p}}`
  };
  function m(l) {
    const p = v(l);
    (0, r.reportError)(p, _);
  }
  we.reportTypeError = m;
  function v(l) {
    const { gen: p, data: y, schema: w } = l, b = (0, s.schemaRefOrVal)(l, w, "type");
    return {
      gen: p,
      keyword: "type",
      data: y,
      schema: w.type,
      schemaCode: b,
      schemaValue: b,
      parentSchema: w,
      params: {},
      it: l
    };
  }
  return we;
}
var Wr = {}, As;
function od() {
  if (As) return Wr;
  As = 1, Object.defineProperty(Wr, "__esModule", { value: !0 }), Wr.assignDefaults = void 0;
  const e = se(), t = fe();
  function r(s, n) {
    const { properties: a, items: o } = s.schema;
    if (n === "object" && a)
      for (const u in a)
        i(s, u, a[u].default);
    else n === "array" && Array.isArray(o) && o.forEach((u, c) => i(s, c, u.default));
  }
  Wr.assignDefaults = r;
  function i(s, n, a) {
    const { gen: o, compositeRule: u, data: c, opts: f } = s;
    if (a === void 0)
      return;
    const h = (0, e._)`${c}${(0, e.getProperty)(n)}`;
    if (u) {
      (0, t.checkStrictMode)(s, `default is ignored for: ${h}`);
      return;
    }
    let d = (0, e._)`${h} === undefined`;
    f.useDefaults === "empty" && (d = (0, e._)`${d} || ${h} === null || ${h} === ""`), o.if(d, (0, e._)`${h} = ${(0, e.stringify)(a)}`);
  }
  return Wr;
}
var Xe = {}, pe = {}, Ls;
function rt() {
  if (Ls) return pe;
  Ls = 1, Object.defineProperty(pe, "__esModule", { value: !0 }), pe.validateUnion = pe.validateArray = pe.usePattern = pe.callValidateCode = pe.schemaProperties = pe.allSchemaProperties = pe.noPropertyInData = pe.propertyInData = pe.isOwnProperty = pe.hasPropFunc = pe.reportMissingProp = pe.checkMissingProp = pe.checkReportMissingProp = void 0;
  const e = se(), t = fe(), r = Jt(), i = fe();
  function s(l, p) {
    const { gen: y, data: w, it: b } = l;
    y.if(f(y, w, p, b.opts.ownProperties), () => {
      l.setParams({ missingProperty: (0, e._)`${p}` }, !0), l.error();
    });
  }
  pe.checkReportMissingProp = s;
  function n({ gen: l, data: p, it: { opts: y } }, w, b) {
    return (0, e.or)(...w.map((E) => (0, e.and)(f(l, p, E, y.ownProperties), (0, e._)`${b} = ${E}`)));
  }
  pe.checkMissingProp = n;
  function a(l, p) {
    l.setParams({ missingProperty: p }, !0), l.error();
  }
  pe.reportMissingProp = a;
  function o(l) {
    return l.scopeValue("func", {
      // eslint-disable-next-line @typescript-eslint/unbound-method
      ref: Object.prototype.hasOwnProperty,
      code: (0, e._)`Object.prototype.hasOwnProperty`
    });
  }
  pe.hasPropFunc = o;
  function u(l, p, y) {
    return (0, e._)`${o(l)}.call(${p}, ${y})`;
  }
  pe.isOwnProperty = u;
  function c(l, p, y, w) {
    const b = (0, e._)`${p}${(0, e.getProperty)(y)} !== undefined`;
    return w ? (0, e._)`${b} && ${u(l, p, y)}` : b;
  }
  pe.propertyInData = c;
  function f(l, p, y, w) {
    const b = (0, e._)`${p}${(0, e.getProperty)(y)} === undefined`;
    return w ? (0, e.or)(b, (0, e.not)(u(l, p, y))) : b;
  }
  pe.noPropertyInData = f;
  function h(l) {
    return l ? Object.keys(l).filter((p) => p !== "__proto__") : [];
  }
  pe.allSchemaProperties = h;
  function d(l, p) {
    return h(p).filter((y) => !(0, t.alwaysValidSchema)(l, p[y]));
  }
  pe.schemaProperties = d;
  function g({ schemaCode: l, data: p, it: { gen: y, topSchemaRef: w, schemaPath: b, errorPath: E }, it: S }, O, C, k) {
    const H = k ? (0, e._)`${l}, ${p}, ${w}${b}` : p, F = [
      [r.default.instancePath, (0, e.strConcat)(r.default.instancePath, E)],
      [r.default.parentData, S.parentData],
      [r.default.parentDataProperty, S.parentDataProperty],
      [r.default.rootData, r.default.rootData]
    ];
    S.opts.dynamicRef && F.push([r.default.dynamicAnchors, r.default.dynamicAnchors]);
    const G = (0, e._)`${H}, ${y.object(...F)}`;
    return C !== e.nil ? (0, e._)`${O}.call(${C}, ${G})` : (0, e._)`${O}(${G})`;
  }
  pe.callValidateCode = g;
  const P = (0, e._)`new RegExp`;
  function _({ gen: l, it: { opts: p } }, y) {
    const w = p.unicodeRegExp ? "u" : "", { regExp: b } = p.code, E = b(y, w);
    return l.scopeValue("pattern", {
      key: E.toString(),
      ref: E,
      code: (0, e._)`${b.code === "new RegExp" ? P : (0, i.useFunc)(l, b)}(${y}, ${w})`
    });
  }
  pe.usePattern = _;
  function m(l) {
    const { gen: p, data: y, keyword: w, it: b } = l, E = p.name("valid");
    if (b.allErrors) {
      const O = p.let("valid", !0);
      return S(() => p.assign(O, !1)), O;
    }
    return p.var(E, !0), S(() => p.break()), E;
    function S(O) {
      const C = p.const("len", (0, e._)`${y}.length`);
      p.forRange("i", 0, C, (k) => {
        l.subschema({
          keyword: w,
          dataProp: k,
          dataPropType: t.Type.Num
        }, E), p.if((0, e.not)(E), O);
      });
    }
  }
  pe.validateArray = m;
  function v(l) {
    const { gen: p, schema: y, keyword: w, it: b } = l;
    if (!Array.isArray(y))
      throw new Error("ajv implementation error");
    if (y.some((C) => (0, t.alwaysValidSchema)(b, C)) && !b.opts.unevaluated)
      return;
    const S = p.let("valid", !1), O = p.name("_valid");
    p.block(() => y.forEach((C, k) => {
      const H = l.subschema({
        keyword: w,
        schemaProp: k,
        compositeRule: !0
      }, O);
      p.assign(S, (0, e._)`${S} || ${O}`), l.mergeValidEvaluated(H, O) || p.if((0, e.not)(S));
    })), l.result(S, () => l.reset(), () => l.error(!0));
  }
  return pe.validateUnion = v, pe;
}
var qs;
function ud() {
  if (qs) return Xe;
  qs = 1, Object.defineProperty(Xe, "__esModule", { value: !0 }), Xe.validateKeywordUsage = Xe.validSchemaType = Xe.funcKeywordCode = Xe.macroKeywordCode = void 0;
  const e = se(), t = Jt(), r = rt(), i = Ti();
  function s(d, g) {
    const { gen: P, keyword: _, schema: m, parentSchema: v, it: l } = d, p = g.macro.call(l.self, m, v, l), y = c(P, _, p);
    l.opts.validateSchema !== !1 && l.self.validateSchema(p, !0);
    const w = P.name("valid");
    d.subschema({
      schema: p,
      schemaPath: e.nil,
      errSchemaPath: `${l.errSchemaPath}/${_}`,
      topSchemaRef: y,
      compositeRule: !0
    }, w), d.pass(w, () => d.error(!0));
  }
  Xe.macroKeywordCode = s;
  function n(d, g) {
    var P;
    const { gen: _, keyword: m, schema: v, parentSchema: l, $data: p, it: y } = d;
    u(y, g);
    const w = !p && g.compile ? g.compile.call(y.self, v, l, y) : g.validate, b = c(_, m, w), E = _.let("valid");
    d.block$data(E, S), d.ok((P = g.valid) !== null && P !== void 0 ? P : E);
    function S() {
      if (g.errors === !1)
        k(), g.modifying && a(d), H(() => d.error());
      else {
        const F = g.async ? O() : C();
        g.modifying && a(d), H(() => o(d, F));
      }
    }
    function O() {
      const F = _.let("ruleErrs", null);
      return _.try(() => k((0, e._)`await `), (G) => _.assign(E, !1).if((0, e._)`${G} instanceof ${y.ValidationError}`, () => _.assign(F, (0, e._)`${G}.errors`), () => _.throw(G))), F;
    }
    function C() {
      const F = (0, e._)`${b}.errors`;
      return _.assign(F, null), k(e.nil), F;
    }
    function k(F = g.async ? (0, e._)`await ` : e.nil) {
      const G = y.opts.passContext ? t.default.this : t.default.self, J = !("compile" in g && !p || g.schema === !1);
      _.assign(E, (0, e._)`${F}${(0, r.callValidateCode)(d, b, G, J)}`, g.modifying);
    }
    function H(F) {
      var G;
      _.if((0, e.not)((G = g.valid) !== null && G !== void 0 ? G : E), F);
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
  function u({ schemaEnv: d }, g) {
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
  function h({ schema: d, opts: g, self: P, errSchemaPath: _ }, m, v) {
    if (Array.isArray(m.keyword) ? !m.keyword.includes(v) : m.keyword !== v)
      throw new Error("ajv implementation error");
    const l = m.dependencies;
    if (l != null && l.some((p) => !Object.prototype.hasOwnProperty.call(d, p)))
      throw new Error(`parent schema must have dependencies of ${v}: ${l.join(",")}`);
    if (m.validateSchema && !m.validateSchema(d[v])) {
      const y = `keyword "${v}" value is invalid at path "${_}": ` + P.errorsText(m.validateSchema.errors);
      if (g.validateSchema === "log")
        P.logger.error(y);
      else
        throw new Error(y);
    }
  }
  return Xe.validateKeywordUsage = h, Xe;
}
var Pt = {}, ks;
function ld() {
  if (ks) return Pt;
  ks = 1, Object.defineProperty(Pt, "__esModule", { value: !0 }), Pt.extendSubschemaMode = Pt.extendSubschemaData = Pt.getSubschema = void 0;
  const e = se(), t = fe();
  function r(n, { keyword: a, schemaProp: o, schema: u, schemaPath: c, errSchemaPath: f, topSchemaRef: h }) {
    if (a !== void 0 && u !== void 0)
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
    if (u !== void 0) {
      if (c === void 0 || f === void 0 || h === void 0)
        throw new Error('"schemaPath", "errSchemaPath" and "topSchemaRef" are required with "schema"');
      return {
        schema: u,
        schemaPath: c,
        topSchemaRef: h,
        errSchemaPath: f
      };
    }
    throw new Error('either "keyword" or "schema" must be passed');
  }
  Pt.getSubschema = r;
  function i(n, a, { dataProp: o, dataPropType: u, data: c, dataTypes: f, propertyName: h }) {
    if (c !== void 0 && o !== void 0)
      throw new Error('both "data" and "dataProp" passed, only one allowed');
    const { gen: d } = a;
    if (o !== void 0) {
      const { errorPath: P, dataPathArr: _, opts: m } = a, v = d.let("data", (0, e._)`${a.data}${(0, e.getProperty)(o)}`, !0);
      g(v), n.errorPath = (0, e.str)`${P}${(0, t.getErrorPath)(o, u, m.jsPropertySyntax)}`, n.parentDataProperty = (0, e._)`${o}`, n.dataPathArr = [..._, n.parentDataProperty];
    }
    if (c !== void 0) {
      const P = c instanceof e.Name ? c : d.let("data", c, !0);
      g(P), h !== void 0 && (n.propertyName = h);
    }
    f && (n.dataTypes = f);
    function g(P) {
      n.data = P, n.dataLevel = a.dataLevel + 1, n.dataTypes = [], a.definedProperties = /* @__PURE__ */ new Set(), n.parentData = a.data, n.dataNames = [...a.dataNames, P];
    }
  }
  Pt.extendSubschemaData = i;
  function s(n, { jtdDiscriminator: a, jtdMetadata: o, compositeRule: u, createErrors: c, allErrors: f }) {
    u !== void 0 && (n.compositeRule = u), c !== void 0 && (n.createErrors = c), f !== void 0 && (n.allErrors = f), n.jtdDiscriminator = a, n.jtdMetadata = o;
  }
  return Pt.extendSubschemaMode = s, Pt;
}
var Ee = {}, Hi, Us;
function al() {
  return Us || (Us = 1, Hi = function e(t, r) {
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
  }), Hi;
}
var zi = { exports: {} }, Fs;
function cd() {
  if (Fs) return zi.exports;
  Fs = 1;
  var e = zi.exports = function(i, s, n) {
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
  function t(i, s, n, a, o, u, c, f, h, d) {
    if (a && typeof a == "object" && !Array.isArray(a)) {
      s(a, o, u, c, f, h, d);
      for (var g in a) {
        var P = a[g];
        if (Array.isArray(P)) {
          if (g in e.arrayKeywords)
            for (var _ = 0; _ < P.length; _++)
              t(i, s, n, P[_], o + "/" + g + "/" + _, u, o, g, a, _);
        } else if (g in e.propsKeywords) {
          if (P && typeof P == "object")
            for (var m in P)
              t(i, s, n, P[m], o + "/" + g + "/" + r(m), u, o, g, a, m);
        } else (g in e.keywords || i.allKeys && !(g in e.skipKeywords)) && t(i, s, n, P, o + "/" + g, u, o, g, a);
      }
      n(a, o, u, c, f, h, d);
    }
  }
  function r(i) {
    return i.replace(/~/g, "~0").replace(/\//g, "~1");
  }
  return zi.exports;
}
var Ws;
function Ri() {
  if (Ws) return Ee;
  Ws = 1, Object.defineProperty(Ee, "__esModule", { value: !0 }), Ee.getSchemaRefs = Ee.resolveUrl = Ee.normalizeId = Ee._getFullPath = Ee.getFullPath = Ee.inlineRef = void 0;
  const e = fe(), t = al(), r = cd(), i = /* @__PURE__ */ new Set([
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
  function s(_, m = !0) {
    return typeof _ == "boolean" ? !0 : m === !0 ? !a(_) : m ? o(_) <= m : !1;
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
    for (const m in _) {
      if (n.has(m))
        return !0;
      const v = _[m];
      if (Array.isArray(v) && v.some(a) || typeof v == "object" && a(v))
        return !0;
    }
    return !1;
  }
  function o(_) {
    let m = 0;
    for (const v in _) {
      if (v === "$ref")
        return 1 / 0;
      if (m++, !i.has(v) && (typeof _[v] == "object" && (0, e.eachItem)(_[v], (l) => m += o(l)), m === 1 / 0))
        return 1 / 0;
    }
    return m;
  }
  function u(_, m = "", v) {
    v !== !1 && (m = h(m));
    const l = _.parse(m);
    return c(_, l);
  }
  Ee.getFullPath = u;
  function c(_, m) {
    return _.serialize(m).split("#")[0] + "#";
  }
  Ee._getFullPath = c;
  const f = /#\/?$/;
  function h(_) {
    return _ ? _.replace(f, "") : "";
  }
  Ee.normalizeId = h;
  function d(_, m, v) {
    return v = h(v), _.resolve(m, v);
  }
  Ee.resolveUrl = d;
  const g = /^[a-z_][-a-z0-9._]*$/i;
  function P(_, m) {
    if (typeof _ == "boolean")
      return {};
    const { schemaId: v, uriResolver: l } = this.opts, p = h(_[v] || m), y = { "": p }, w = u(l, p, !1), b = {}, E = /* @__PURE__ */ new Set();
    return r(_, { allKeys: !0 }, (C, k, H, F) => {
      if (F === void 0)
        return;
      const G = w + k;
      let J = y[F];
      typeof C[v] == "string" && (J = x.call(this, C[v])), Z.call(this, C.$anchor), Z.call(this, C.$dynamicAnchor), y[k] = J;
      function x(X) {
        const oe = this.opts.uriResolver.resolve;
        if (X = h(J ? oe(J, X) : X), E.has(X))
          throw O(X);
        E.add(X);
        let q = this.refs[X];
        return typeof q == "string" && (q = this.refs[q]), typeof q == "object" ? S(C, q.schema, X) : X !== h(G) && (X[0] === "#" ? (S(C, b[X], X), b[X] = C) : this.refs[X] = G), X;
      }
      function Z(X) {
        if (typeof X == "string") {
          if (!g.test(X))
            throw new Error(`invalid anchor "${X}"`);
          x.call(this, `#${X}`);
        }
      }
    }), b;
    function S(C, k, H) {
      if (k !== void 0 && !t(C, k))
        throw O(H);
    }
    function O(C) {
      return new Error(`reference "${C}" resolves to more than one schema`);
    }
  }
  return Ee.getSchemaRefs = P, Ee;
}
var Vs;
function ji() {
  if (Vs) return _t;
  Vs = 1, Object.defineProperty(_t, "__esModule", { value: !0 }), _t.getData = _t.KeywordCxt = _t.validateFunctionCode = void 0;
  const e = sd(), t = Pi(), r = il(), i = Pi(), s = od(), n = ud(), a = ld(), o = se(), u = Jt(), c = Ri(), f = fe(), h = Ti();
  function d(T) {
    if (w(T) && (E(T), y(T))) {
      m(T);
      return;
    }
    g(T, () => (0, e.topBoolOrEmptySchema)(T));
  }
  _t.validateFunctionCode = d;
  function g({ gen: T, validateName: N, schema: L, schemaEnv: V, opts: Q }, ae) {
    Q.code.es5 ? T.func(N, (0, o._)`${u.default.data}, ${u.default.valCxt}`, V.$async, () => {
      T.code((0, o._)`"use strict"; ${l(L, Q)}`), _(T, Q), T.code(ae);
    }) : T.func(N, (0, o._)`${u.default.data}, ${P(Q)}`, V.$async, () => T.code(l(L, Q)).code(ae));
  }
  function P(T) {
    return (0, o._)`{${u.default.instancePath}="", ${u.default.parentData}, ${u.default.parentDataProperty}, ${u.default.rootData}=${u.default.data}${T.dynamicRef ? (0, o._)`, ${u.default.dynamicAnchors}={}` : o.nil}}={}`;
  }
  function _(T, N) {
    T.if(u.default.valCxt, () => {
      T.var(u.default.instancePath, (0, o._)`${u.default.valCxt}.${u.default.instancePath}`), T.var(u.default.parentData, (0, o._)`${u.default.valCxt}.${u.default.parentData}`), T.var(u.default.parentDataProperty, (0, o._)`${u.default.valCxt}.${u.default.parentDataProperty}`), T.var(u.default.rootData, (0, o._)`${u.default.valCxt}.${u.default.rootData}`), N.dynamicRef && T.var(u.default.dynamicAnchors, (0, o._)`${u.default.valCxt}.${u.default.dynamicAnchors}`);
    }, () => {
      T.var(u.default.instancePath, (0, o._)`""`), T.var(u.default.parentData, (0, o._)`undefined`), T.var(u.default.parentDataProperty, (0, o._)`undefined`), T.var(u.default.rootData, u.default.data), N.dynamicRef && T.var(u.default.dynamicAnchors, (0, o._)`{}`);
    });
  }
  function m(T) {
    const { schema: N, opts: L, gen: V } = T;
    g(T, () => {
      L.$comment && N.$comment && F(T), C(T), V.let(u.default.vErrors, null), V.let(u.default.errors, 0), L.unevaluated && v(T), S(T), G(T);
    });
  }
  function v(T) {
    const { gen: N, validateName: L } = T;
    T.evaluated = N.const("evaluated", (0, o._)`${L}.evaluated`), N.if((0, o._)`${T.evaluated}.dynamicProps`, () => N.assign((0, o._)`${T.evaluated}.props`, (0, o._)`undefined`)), N.if((0, o._)`${T.evaluated}.dynamicItems`, () => N.assign((0, o._)`${T.evaluated}.items`, (0, o._)`undefined`));
  }
  function l(T, N) {
    const L = typeof T == "object" && T[N.schemaId];
    return L && (N.code.source || N.code.process) ? (0, o._)`/*# sourceURL=${L} */` : o.nil;
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
    for (const L in T)
      if (N.RULES.all[L])
        return !0;
    return !1;
  }
  function w(T) {
    return typeof T.schema != "boolean";
  }
  function b(T, N) {
    const { schema: L, gen: V, opts: Q } = T;
    Q.$comment && L.$comment && F(T), k(T), H(T);
    const ae = V.const("_errs", u.default.errors);
    S(T, ae), V.var(N, (0, o._)`${ae} === ${u.default.errors}`);
  }
  function E(T) {
    (0, f.checkUnknownRules)(T), O(T);
  }
  function S(T, N) {
    if (T.opts.jtd)
      return x(T, [], !1, N);
    const L = (0, t.getSchemaTypes)(T.schema), V = (0, t.coerceAndCheckDataType)(T, L);
    x(T, L, !V, N);
  }
  function O(T) {
    const { schema: N, errSchemaPath: L, opts: V, self: Q } = T;
    N.$ref && V.ignoreKeywordsWithRef && (0, f.schemaHasRulesButRef)(N, Q.RULES) && Q.logger.warn(`$ref: keywords ignored in schema at path "${L}"`);
  }
  function C(T) {
    const { schema: N, opts: L } = T;
    N.default !== void 0 && L.useDefaults && L.strictSchema && (0, f.checkStrictMode)(T, "default is ignored in the schema root");
  }
  function k(T) {
    const N = T.schema[T.opts.schemaId];
    N && (T.baseId = (0, c.resolveUrl)(T.opts.uriResolver, T.baseId, N));
  }
  function H(T) {
    if (T.schema.$async && !T.schemaEnv.$async)
      throw new Error("async schema in sync schema");
  }
  function F({ gen: T, schemaEnv: N, schema: L, errSchemaPath: V, opts: Q }) {
    const ae = L.$comment;
    if (Q.$comment === !0)
      T.code((0, o._)`${u.default.self}.logger.log(${ae})`);
    else if (typeof Q.$comment == "function") {
      const ye = (0, o.str)`${V}/$comment`, Be = T.scopeValue("root", { ref: N.root });
      T.code((0, o._)`${u.default.self}.opts.$comment(${ae}, ${ye}, ${Be}.schema)`);
    }
  }
  function G(T) {
    const { gen: N, schemaEnv: L, validateName: V, ValidationError: Q, opts: ae } = T;
    L.$async ? N.if((0, o._)`${u.default.errors} === 0`, () => N.return(u.default.data), () => N.throw((0, o._)`new ${Q}(${u.default.vErrors})`)) : (N.assign((0, o._)`${V}.errors`, u.default.vErrors), ae.unevaluated && J(T), N.return((0, o._)`${u.default.errors} === 0`));
  }
  function J({ gen: T, evaluated: N, props: L, items: V }) {
    L instanceof o.Name && T.assign((0, o._)`${N}.props`, L), V instanceof o.Name && T.assign((0, o._)`${N}.items`, V);
  }
  function x(T, N, L, V) {
    const { gen: Q, schema: ae, data: ye, allErrors: Be, opts: je, self: Me } = T, { RULES: Pe } = Me;
    if (ae.$ref && (je.ignoreKeywordsWithRef || !(0, f.schemaHasRulesButRef)(ae, Pe))) {
      Q.block(() => B(T, "$ref", Pe.all.$ref.definition));
      return;
    }
    je.jtd || X(T, N), Q.block(() => {
      for (const ke of Pe.rules)
        lr(ke);
      lr(Pe.post);
    });
    function lr(ke) {
      (0, r.shouldUseGroup)(ae, ke) && (ke.type ? (Q.if((0, i.checkDataType)(ke.type, ye, je.strictNumbers)), Z(T, ke), N.length === 1 && N[0] === ke.type && L && (Q.else(), (0, i.reportTypeError)(T)), Q.endIf()) : Z(T, ke), Be || Q.if((0, o._)`${u.default.errors} === ${V || 0}`));
    }
  }
  function Z(T, N) {
    const { gen: L, schema: V, opts: { useDefaults: Q } } = T;
    Q && (0, s.assignDefaults)(T, N.type), L.block(() => {
      for (const ae of N.rules)
        (0, r.shouldUseRule)(V, ae) && B(T, ae.keyword, ae.definition, N.type);
    });
  }
  function X(T, N) {
    T.schemaEnv.meta || !T.opts.strictTypes || (oe(T, N), T.opts.allowUnionTypes || q(T, N), R(T, T.dataTypes));
  }
  function oe(T, N) {
    if (N.length) {
      if (!T.dataTypes.length) {
        T.dataTypes = N;
        return;
      }
      N.forEach((L) => {
        M(T.dataTypes, L) || D(T, `type "${L}" not allowed by context "${T.dataTypes.join(",")}"`);
      }), $(T, N);
    }
  }
  function q(T, N) {
    N.length > 1 && !(N.length === 2 && N.includes("null")) && D(T, "use allowUnionTypes to allow union type keyword");
  }
  function R(T, N) {
    const L = T.self.RULES.all;
    for (const V in L) {
      const Q = L[V];
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
    const L = [];
    for (const V of T.dataTypes)
      M(N, V) ? L.push(V) : N.includes("integer") && V === "number" && L.push("integer");
    T.dataTypes = L;
  }
  function D(T, N) {
    const L = T.schemaEnv.baseId + T.errSchemaPath;
    N += ` at "${L}" (strictTypes)`, (0, f.checkStrictMode)(T, N, T.opts.strictTypes);
  }
  class I {
    constructor(N, L, V) {
      if ((0, n.validateKeywordUsage)(N, L, V), this.gen = N.gen, this.allErrors = N.allErrors, this.keyword = V, this.data = N.data, this.schema = N.schema[V], this.$data = L.$data && N.opts.$data && this.schema && this.schema.$data, this.schemaValue = (0, f.schemaRefOrVal)(N, this.schema, V, this.$data), this.schemaType = L.schemaType, this.parentSchema = N.schema, this.params = {}, this.it = N, this.def = L, this.$data)
        this.schemaCode = N.gen.const("vSchema", ue(this.$data, N));
      else if (this.schemaCode = this.schemaValue, !(0, n.validSchemaType)(this.schema, L.schemaType, L.allowUndefined))
        throw new Error(`${V} value must be ${JSON.stringify(L.schemaType)}`);
      ("code" in L ? L.trackErrors : L.errors !== !1) && (this.errsCount = N.gen.const("_errs", u.default.errors));
    }
    result(N, L, V) {
      this.failResult((0, o.not)(N), L, V);
    }
    failResult(N, L, V) {
      this.gen.if(N), V ? V() : this.error(), L ? (this.gen.else(), L(), this.allErrors && this.gen.endIf()) : this.allErrors ? this.gen.endIf() : this.gen.else();
    }
    pass(N, L) {
      this.failResult((0, o.not)(N), void 0, L);
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
      const { schemaCode: L } = this;
      this.fail((0, o._)`${L} !== undefined && (${(0, o.or)(this.invalid$data(), N)})`);
    }
    error(N, L, V) {
      if (L) {
        this.setParams(L), this._error(N, V), this.setParams({});
        return;
      }
      this._error(N, V);
    }
    _error(N, L) {
      (N ? h.reportExtraError : h.reportError)(this, this.def.error, L);
    }
    $dataError() {
      (0, h.reportError)(this, this.def.$dataError || h.keyword$DataError);
    }
    reset() {
      if (this.errsCount === void 0)
        throw new Error('add "trackErrors" to keyword definition');
      (0, h.resetErrorsCount)(this.gen, this.errsCount);
    }
    ok(N) {
      this.allErrors || this.gen.if(N);
    }
    setParams(N, L) {
      L ? Object.assign(this.params, N) : this.params = N;
    }
    block$data(N, L, V = o.nil) {
      this.gen.block(() => {
        this.check$data(N, V), L();
      });
    }
    check$data(N = o.nil, L = o.nil) {
      if (!this.$data)
        return;
      const { gen: V, schemaCode: Q, schemaType: ae, def: ye } = this;
      V.if((0, o.or)((0, o._)`${Q} === undefined`, L)), N !== o.nil && V.assign(N, !0), (ae.length || ye.validateSchema) && (V.elseIf(this.invalid$data()), this.$dataError(), N !== o.nil && V.assign(N, !1)), V.else();
    }
    invalid$data() {
      const { gen: N, schemaCode: L, schemaType: V, def: Q, it: ae } = this;
      return (0, o.or)(ye(), Be());
      function ye() {
        if (V.length) {
          if (!(L instanceof o.Name))
            throw new Error("ajv implementation error");
          const je = Array.isArray(V) ? V : [V];
          return (0, o._)`${(0, i.checkDataTypes)(je, L, ae.opts.strictNumbers, i.DataType.Wrong)}`;
        }
        return o.nil;
      }
      function Be() {
        if (Q.validateSchema) {
          const je = N.scopeValue("validate$data", { ref: Q.validateSchema });
          return (0, o._)`!${je}(${L})`;
        }
        return o.nil;
      }
    }
    subschema(N, L) {
      const V = (0, a.getSubschema)(this.it, N);
      (0, a.extendSubschemaData)(V, this.it, N), (0, a.extendSubschemaMode)(V, N);
      const Q = { ...this.it, ...V, items: void 0, props: void 0 };
      return p(Q, L), Q;
    }
    mergeEvaluated(N, L) {
      const { it: V, gen: Q } = this;
      V.opts.unevaluated && (V.props !== !0 && N.props !== void 0 && (V.props = f.mergeEvaluated.props(Q, N.props, V.props, L)), V.items !== !0 && N.items !== void 0 && (V.items = f.mergeEvaluated.items(Q, N.items, V.items, L)));
    }
    mergeValidEvaluated(N, L) {
      const { it: V, gen: Q } = this;
      if (V.opts.unevaluated && (V.props !== !0 || V.items !== !0))
        return Q.if(L, () => this.mergeEvaluated(N, o.Name)), !0;
    }
  }
  _t.KeywordCxt = I;
  function B(T, N, L, V) {
    const Q = new I(T, L, N);
    "code" in L ? L.code(Q, V) : Q.$data && L.validate ? (0, n.funcKeywordCode)(Q, L) : "macro" in L ? (0, n.macroKeywordCode)(Q, L) : (L.compile || L.validate) && (0, n.funcKeywordCode)(Q, L);
  }
  const Y = /^\/(?:[^~]|~0|~1)*$/, ce = /^([0-9]+)(#|\/(?:[^~]|~0|~1)*)?$/;
  function ue(T, { dataLevel: N, dataNames: L, dataPathArr: V }) {
    let Q, ae;
    if (T === "")
      return u.default.rootData;
    if (T[0] === "/") {
      if (!Y.test(T))
        throw new Error(`Invalid JSON-pointer: ${T}`);
      Q = T, ae = u.default.rootData;
    } else {
      const Me = ce.exec(T);
      if (!Me)
        throw new Error(`Invalid JSON-pointer: ${T}`);
      const Pe = +Me[1];
      if (Q = Me[2], Q === "#") {
        if (Pe >= N)
          throw new Error(je("property/index", Pe));
        return V[N - Pe];
      }
      if (Pe > N)
        throw new Error(je("data", Pe));
      if (ae = L[N - Pe], !Q)
        return ae;
    }
    let ye = ae;
    const Be = Q.split("/");
    for (const Me of Be)
      Me && (ae = (0, o._)`${ae}${(0, o.getProperty)((0, f.unescapeJsonPointer)(Me))}`, ye = (0, o._)`${ye} && ${ae}`);
    return ye;
    function je(Me, Pe) {
      return `Cannot access ${Me} ${Pe} levels up, current level is ${N}`;
    }
  }
  return _t.getData = ue, _t;
}
var Sn = {}, Gs;
function Ea() {
  if (Gs) return Sn;
  Gs = 1, Object.defineProperty(Sn, "__esModule", { value: !0 });
  class e extends Error {
    constructor(r) {
      super("validation failed"), this.errors = r, this.ajv = this.validation = !0;
    }
  }
  return Sn.default = e, Sn;
}
var Dn = {}, Hs;
function Mi() {
  if (Hs) return Dn;
  Hs = 1, Object.defineProperty(Dn, "__esModule", { value: !0 });
  const e = Ri();
  class t extends Error {
    constructor(i, s, n, a) {
      super(a || `can't resolve reference ${n} from id ${s}`), this.missingRef = (0, e.resolveUrl)(i, s, n), this.missingSchema = (0, e.normalizeId)((0, e.getFullPath)(i, this.missingRef));
    }
  }
  return Dn.default = t, Dn;
}
var Le = {}, zs;
function Sa() {
  if (zs) return Le;
  zs = 1, Object.defineProperty(Le, "__esModule", { value: !0 }), Le.resolveSchema = Le.getCompilingSchema = Le.resolveRef = Le.compileSchema = Le.SchemaEnv = void 0;
  const e = se(), t = Ea(), r = Jt(), i = Ri(), s = fe(), n = ji();
  class a {
    constructor(v) {
      var l;
      this.refs = {}, this.dynamicAnchors = {};
      let p;
      typeof v.schema == "object" && (p = v.schema), this.schema = v.schema, this.schemaId = v.schemaId, this.root = v.root || this, this.baseId = (l = v.baseId) !== null && l !== void 0 ? l : (0, i.normalizeId)(p == null ? void 0 : p[v.schemaId || "$id"]), this.schemaPath = v.schemaPath, this.localRefs = v.localRefs, this.meta = v.meta, this.$async = p == null ? void 0 : p.$async, this.refs = {};
    }
  }
  Le.SchemaEnv = a;
  function o(m) {
    const v = f.call(this, m);
    if (v)
      return v;
    const l = (0, i.getFullPath)(this.opts.uriResolver, m.root.baseId), { es5: p, lines: y } = this.opts.code, { ownProperties: w } = this.opts, b = new e.CodeGen(this.scope, { es5: p, lines: y, ownProperties: w });
    let E;
    m.$async && (E = b.scopeValue("Error", {
      ref: t.default,
      code: (0, e._)`require("ajv/dist/runtime/validation_error").default`
    }));
    const S = b.scopeName("validate");
    m.validateName = S;
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
      topSchemaRef: b.scopeValue("schema", this.opts.code.source === !0 ? { ref: m.schema, code: (0, e.stringify)(m.schema) } : { ref: m.schema }),
      validateName: S,
      ValidationError: E,
      schema: m.schema,
      schemaEnv: m,
      rootId: l,
      baseId: m.baseId || l,
      schemaPath: e.nil,
      errSchemaPath: m.schemaPath || (this.opts.jtd ? "" : "#"),
      errorPath: (0, e._)`""`,
      opts: this.opts,
      self: this
    };
    let C;
    try {
      this._compilations.add(m), (0, n.validateFunctionCode)(O), b.optimize(this.opts.code.optimize);
      const k = b.toString();
      C = `${b.scopeRefs(r.default.scope)}return ${k}`, this.opts.code.process && (C = this.opts.code.process(C, m));
      const F = new Function(`${r.default.self}`, `${r.default.scope}`, C)(this, this.scope.get());
      if (this.scope.value(S, { ref: F }), F.errors = null, F.schema = m.schema, F.schemaEnv = m, m.$async && (F.$async = !0), this.opts.code.source === !0 && (F.source = { validateName: S, validateCode: k, scopeValues: b._values }), this.opts.unevaluated) {
        const { props: G, items: J } = O;
        F.evaluated = {
          props: G instanceof e.Name ? void 0 : G,
          items: J instanceof e.Name ? void 0 : J,
          dynamicProps: G instanceof e.Name,
          dynamicItems: J instanceof e.Name
        }, F.source && (F.source.evaluated = (0, e.stringify)(F.evaluated));
      }
      return m.validate = F, m;
    } catch (k) {
      throw delete m.validate, delete m.validateName, C && this.logger.error("Error compiling schema, function code:", C), k;
    } finally {
      this._compilations.delete(m);
    }
  }
  Le.compileSchema = o;
  function u(m, v, l) {
    var p;
    l = (0, i.resolveUrl)(this.opts.uriResolver, v, l);
    const y = m.refs[l];
    if (y)
      return y;
    let w = d.call(this, m, l);
    if (w === void 0) {
      const b = (p = m.localRefs) === null || p === void 0 ? void 0 : p[l], { schemaId: E } = this.opts;
      b && (w = new a({ schema: b, schemaId: E, root: m, baseId: v }));
    }
    if (w !== void 0)
      return m.refs[l] = c.call(this, w);
  }
  Le.resolveRef = u;
  function c(m) {
    return (0, i.inlineRef)(m.schema, this.opts.inlineRefs) ? m.schema : m.validate ? m : o.call(this, m);
  }
  function f(m) {
    for (const v of this._compilations)
      if (h(v, m))
        return v;
  }
  Le.getCompilingSchema = f;
  function h(m, v) {
    return m.schema === v.schema && m.root === v.root && m.baseId === v.baseId;
  }
  function d(m, v) {
    let l;
    for (; typeof (l = this.refs[v]) == "string"; )
      v = l;
    return l || this.schemas[v] || g.call(this, m, v);
  }
  function g(m, v) {
    const l = this.opts.uriResolver.parse(v), p = (0, i._getFullPath)(this.opts.uriResolver, l);
    let y = (0, i.getFullPath)(this.opts.uriResolver, m.baseId, void 0);
    if (Object.keys(m.schema).length > 0 && p === y)
      return _.call(this, l, m);
    const w = (0, i.normalizeId)(p), b = this.refs[w] || this.schemas[w];
    if (typeof b == "string") {
      const E = g.call(this, m, b);
      return typeof (E == null ? void 0 : E.schema) != "object" ? void 0 : _.call(this, l, E);
    }
    if (typeof (b == null ? void 0 : b.schema) == "object") {
      if (b.validate || o.call(this, b), w === (0, i.normalizeId)(v)) {
        const { schema: E } = b, { schemaId: S } = this.opts, O = E[S];
        return O && (y = (0, i.resolveUrl)(this.opts.uriResolver, y, O)), new a({ schema: E, schemaId: S, root: m, baseId: y });
      }
      return _.call(this, l, b);
    }
  }
  Le.resolveSchema = g;
  const P = /* @__PURE__ */ new Set([
    "properties",
    "patternProperties",
    "enum",
    "dependencies",
    "definitions"
  ]);
  function _(m, { baseId: v, schema: l, root: p }) {
    var y;
    if (((y = m.fragment) === null || y === void 0 ? void 0 : y[0]) !== "/")
      return;
    for (const E of m.fragment.slice(1).split("/")) {
      if (typeof l == "boolean")
        return;
      const S = l[(0, s.unescapeFragment)(E)];
      if (S === void 0)
        return;
      l = S;
      const O = typeof l == "object" && l[this.opts.schemaId];
      !P.has(E) && O && (v = (0, i.resolveUrl)(this.opts.uriResolver, v, O));
    }
    let w;
    if (typeof l != "boolean" && l.$ref && !(0, s.schemaHasRulesButRef)(l, this.RULES)) {
      const E = (0, i.resolveUrl)(this.opts.uriResolver, v, l.$ref);
      w = g.call(this, p, E);
    }
    const { schemaId: b } = this.opts;
    if (w = w || new a({ schema: l, schemaId: b, root: p, baseId: v }), w.schema !== w.root.schema)
      return w;
  }
  return Le;
}
const dd = "https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#", fd = "Meta-schema for $data reference (JSON AnySchema extension proposal)", hd = "object", md = ["$data"], pd = { $data: { type: "string", anyOf: [{ format: "relative-json-pointer" }, { format: "json-pointer" }] } }, vd = !1, gd = {
  $id: dd,
  description: fd,
  type: hd,
  required: md,
  properties: pd,
  additionalProperties: vd
};
var On = {}, Vr = { exports: {} }, Ki, Ks;
function _d() {
  return Ks || (Ks = 1, Ki = {
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
  }), Ki;
}
var Bi, Bs;
function yd() {
  if (Bs) return Bi;
  Bs = 1;
  const { HEX: e } = _d(), t = /^(?:(?:25[0-5]|2[0-4]\d|1\d{2}|[1-9]\d|\d)\.){3}(?:25[0-5]|2[0-4]\d|1\d{2}|[1-9]\d|\d)$/u;
  function r(_) {
    if (o(_, ".") < 3)
      return { host: _, isIPV4: !1 };
    const m = _.match(t) || [], [v] = m;
    return v ? { host: a(v, "."), isIPV4: !0 } : { host: _, isIPV4: !1 };
  }
  function i(_, m = !1) {
    let v = "", l = !0;
    for (const p of _) {
      if (e[p] === void 0) return;
      p !== "0" && l === !0 && (l = !1), l || (v += p);
    }
    return m && v.length === 0 && (v = "0"), v;
  }
  function s(_) {
    let m = 0;
    const v = { error: !1, address: "", zone: "" }, l = [], p = [];
    let y = !1, w = !1, b = !1;
    function E() {
      if (p.length) {
        if (y === !1) {
          const S = i(p);
          if (S !== void 0)
            l.push(S);
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
          if (m++, l.push(":"), m > 7) {
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
    return p.length && (y ? v.zone = p.join("") : b ? l.push(p.join("")) : l.push(i(p))), v.address = l.join(""), v;
  }
  function n(_) {
    if (o(_, ":") < 2)
      return { host: _, isIPV6: !1 };
    const m = s(_);
    if (m.error)
      return { host: _, isIPV6: !1 };
    {
      let v = m.address, l = m.address;
      return m.zone && (v += "%" + m.zone, l += "%25" + m.zone), { host: v, escapedHost: l, isIPV6: !0 };
    }
  }
  function a(_, m) {
    let v = "", l = !0;
    const p = _.length;
    for (let y = 0; y < p; y++) {
      const w = _[y];
      w === "0" && l ? (y + 1 <= p && _[y + 1] === m || y + 1 === p) && (v += w, l = !1) : (w === m ? l = !0 : l = !1, v += w);
    }
    return v;
  }
  function o(_, m) {
    let v = 0;
    for (let l = 0; l < _.length; l++)
      _[l] === m && v++;
    return v;
  }
  const u = /^\.\.?\//u, c = /^\/\.(?:\/|$)/u, f = /^\/\.\.(?:\/|$)/u, h = /^\/?(?:.|\n)*?(?=\/|$)/u;
  function d(_) {
    const m = [];
    for (; _.length; )
      if (_.match(u))
        _ = _.replace(u, "");
      else if (_.match(c))
        _ = _.replace(c, "/");
      else if (_.match(f))
        _ = _.replace(f, "/"), m.pop();
      else if (_ === "." || _ === "..")
        _ = "";
      else {
        const v = _.match(h);
        if (v) {
          const l = v[0];
          _ = _.slice(l.length), m.push(l);
        } else
          throw new Error("Unexpected dot segment condition");
      }
    return m.join("");
  }
  function g(_, m) {
    const v = m !== !0 ? escape : unescape;
    return _.scheme !== void 0 && (_.scheme = v(_.scheme)), _.userinfo !== void 0 && (_.userinfo = v(_.userinfo)), _.host !== void 0 && (_.host = v(_.host)), _.path !== void 0 && (_.path = v(_.path)), _.query !== void 0 && (_.query = v(_.query)), _.fragment !== void 0 && (_.fragment = v(_.fragment)), _;
  }
  function P(_) {
    const m = [];
    if (_.userinfo !== void 0 && (m.push(_.userinfo), m.push("@")), _.host !== void 0) {
      let v = unescape(_.host);
      const l = r(v);
      if (l.isIPV4)
        v = l.host;
      else {
        const p = n(l.host);
        p.isIPV6 === !0 ? v = `[${p.escapedHost}]` : v = _.host;
      }
      m.push(v);
    }
    return (typeof _.port == "number" || typeof _.port == "string") && (m.push(":"), m.push(String(_.port))), m.length ? m.join("") : void 0;
  }
  return Bi = {
    recomposeAuthority: P,
    normalizeComponentEncoding: g,
    removeDotSegments: d,
    normalizeIPv4: r,
    normalizeIPv6: n,
    stringArrayToHexStripped: i
  }, Bi;
}
var Ji, Js;
function Pd() {
  if (Js) return Ji;
  Js = 1;
  const e = /^[\da-f]{8}-[\da-f]{4}-[\da-f]{4}-[\da-f]{4}-[\da-f]{12}$/iu, t = /([\da-z][\d\-a-z]{0,31}):((?:[\w!$'()*+,\-.:;=@]|%[\da-f]{2})+)/iu;
  function r(l) {
    return typeof l.secure == "boolean" ? l.secure : String(l.scheme).toLowerCase() === "wss";
  }
  function i(l) {
    return l.host || (l.error = l.error || "HTTP URIs must have a host."), l;
  }
  function s(l) {
    const p = String(l.scheme).toLowerCase() === "https";
    return (l.port === (p ? 443 : 80) || l.port === "") && (l.port = void 0), l.path || (l.path = "/"), l;
  }
  function n(l) {
    return l.secure = r(l), l.resourceName = (l.path || "/") + (l.query ? "?" + l.query : ""), l.path = void 0, l.query = void 0, l;
  }
  function a(l) {
    if ((l.port === (r(l) ? 443 : 80) || l.port === "") && (l.port = void 0), typeof l.secure == "boolean" && (l.scheme = l.secure ? "wss" : "ws", l.secure = void 0), l.resourceName) {
      const [p, y] = l.resourceName.split("?");
      l.path = p && p !== "/" ? p : void 0, l.query = y, l.resourceName = void 0;
    }
    return l.fragment = void 0, l;
  }
  function o(l, p) {
    if (!l.path)
      return l.error = "URN can not be parsed", l;
    const y = l.path.match(t);
    if (y) {
      const w = p.scheme || l.scheme || "urn";
      l.nid = y[1].toLowerCase(), l.nss = y[2];
      const b = `${w}:${p.nid || l.nid}`, E = v[b];
      l.path = void 0, E && (l = E.parse(l, p));
    } else
      l.error = l.error || "URN can not be parsed.";
    return l;
  }
  function u(l, p) {
    const y = p.scheme || l.scheme || "urn", w = l.nid.toLowerCase(), b = `${y}:${p.nid || w}`, E = v[b];
    E && (l = E.serialize(l, p));
    const S = l, O = l.nss;
    return S.path = `${w || p.nid}:${O}`, p.skipEscape = !0, S;
  }
  function c(l, p) {
    const y = l;
    return y.uuid = y.nss, y.nss = void 0, !p.tolerant && (!y.uuid || !e.test(y.uuid)) && (y.error = y.error || "UUID is not valid."), y;
  }
  function f(l) {
    const p = l;
    return p.nss = (l.uuid || "").toLowerCase(), p;
  }
  const h = {
    scheme: "http",
    domainHost: !0,
    parse: i,
    serialize: s
  }, d = {
    scheme: "https",
    domainHost: h.domainHost,
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
    http: h,
    https: d,
    ws: g,
    wss: P,
    urn: {
      scheme: "urn",
      parse: o,
      serialize: u,
      skipNormalize: !0
    },
    "urn:uuid": {
      scheme: "urn:uuid",
      parse: c,
      serialize: f,
      skipNormalize: !0
    }
  };
  return Ji = v, Ji;
}
var Ys;
function wd() {
  if (Ys) return Vr.exports;
  Ys = 1;
  const { normalizeIPv6: e, normalizeIPv4: t, removeDotSegments: r, recomposeAuthority: i, normalizeComponentEncoding: s } = yd(), n = Pd();
  function a(m, v) {
    return typeof m == "string" ? m = f(P(m, v), v) : typeof m == "object" && (m = P(f(m, v), v)), m;
  }
  function o(m, v, l) {
    const p = Object.assign({ scheme: "null" }, l), y = u(P(m, p), P(v, p), p, !0);
    return f(y, { ...p, skipEscape: !0 });
  }
  function u(m, v, l, p) {
    const y = {};
    return p || (m = P(f(m, l), l), v = P(f(v, l), l)), l = l || {}, !l.tolerant && v.scheme ? (y.scheme = v.scheme, y.userinfo = v.userinfo, y.host = v.host, y.port = v.port, y.path = r(v.path || ""), y.query = v.query) : (v.userinfo !== void 0 || v.host !== void 0 || v.port !== void 0 ? (y.userinfo = v.userinfo, y.host = v.host, y.port = v.port, y.path = r(v.path || ""), y.query = v.query) : (v.path ? (v.path.charAt(0) === "/" ? y.path = r(v.path) : ((m.userinfo !== void 0 || m.host !== void 0 || m.port !== void 0) && !m.path ? y.path = "/" + v.path : m.path ? y.path = m.path.slice(0, m.path.lastIndexOf("/") + 1) + v.path : y.path = v.path, y.path = r(y.path)), y.query = v.query) : (y.path = m.path, v.query !== void 0 ? y.query = v.query : y.query = m.query), y.userinfo = m.userinfo, y.host = m.host, y.port = m.port), y.scheme = m.scheme), y.fragment = v.fragment, y;
  }
  function c(m, v, l) {
    return typeof m == "string" ? (m = unescape(m), m = f(s(P(m, l), !0), { ...l, skipEscape: !0 })) : typeof m == "object" && (m = f(s(m, !0), { ...l, skipEscape: !0 })), typeof v == "string" ? (v = unescape(v), v = f(s(P(v, l), !0), { ...l, skipEscape: !0 })) : typeof v == "object" && (v = f(s(v, !0), { ...l, skipEscape: !0 })), m.toLowerCase() === v.toLowerCase();
  }
  function f(m, v) {
    const l = {
      host: m.host,
      scheme: m.scheme,
      userinfo: m.userinfo,
      port: m.port,
      path: m.path,
      query: m.query,
      nid: m.nid,
      nss: m.nss,
      uuid: m.uuid,
      fragment: m.fragment,
      reference: m.reference,
      resourceName: m.resourceName,
      secure: m.secure,
      error: ""
    }, p = Object.assign({}, v), y = [], w = n[(p.scheme || l.scheme || "").toLowerCase()];
    w && w.serialize && w.serialize(l, p), l.path !== void 0 && (p.skipEscape ? l.path = unescape(l.path) : (l.path = escape(l.path), l.scheme !== void 0 && (l.path = l.path.split("%3A").join(":")))), p.reference !== "suffix" && l.scheme && y.push(l.scheme, ":");
    const b = i(l);
    if (b !== void 0 && (p.reference !== "suffix" && y.push("//"), y.push(b), l.path && l.path.charAt(0) !== "/" && y.push("/")), l.path !== void 0) {
      let E = l.path;
      !p.absolutePath && (!w || !w.absolutePath) && (E = r(E)), b === void 0 && (E = E.replace(/^\/\//u, "/%2F")), y.push(E);
    }
    return l.query !== void 0 && y.push("?", l.query), l.fragment !== void 0 && y.push("#", l.fragment), y.join("");
  }
  const h = Array.from({ length: 127 }, (m, v) => /[^!"$&'()*+,\-.;=_`a-z{}~]/u.test(String.fromCharCode(v)));
  function d(m) {
    let v = 0;
    for (let l = 0, p = m.length; l < p; ++l)
      if (v = m.charCodeAt(l), v > 126 || h[v])
        return !0;
    return !1;
  }
  const g = /^(?:([^#/:?]+):)?(?:\/\/((?:([^#/?@]*)@)?(\[[^#/?\]]+\]|[^#/:?]*)(?::(\d*))?))?([^#?]*)(?:\?([^#]*))?(?:#((?:.|[\n\r])*))?/u;
  function P(m, v) {
    const l = Object.assign({}, v), p = {
      scheme: void 0,
      userinfo: void 0,
      host: "",
      port: void 0,
      path: "",
      query: void 0,
      fragment: void 0
    }, y = m.indexOf("%") !== -1;
    let w = !1;
    l.reference === "suffix" && (m = (l.scheme ? l.scheme + ":" : "") + "//" + m);
    const b = m.match(g);
    if (b) {
      if (p.scheme = b[1], p.userinfo = b[3], p.host = b[4], p.port = parseInt(b[5], 10), p.path = b[6] || "", p.query = b[7], p.fragment = b[8], isNaN(p.port) && (p.port = b[5]), p.host) {
        const S = t(p.host);
        if (S.isIPV4 === !1) {
          const O = e(S.host);
          p.host = O.host.toLowerCase(), w = O.isIPV6;
        } else
          p.host = S.host, w = !0;
      }
      p.scheme === void 0 && p.userinfo === void 0 && p.host === void 0 && p.port === void 0 && p.query === void 0 && !p.path ? p.reference = "same-document" : p.scheme === void 0 ? p.reference = "relative" : p.fragment === void 0 ? p.reference = "absolute" : p.reference = "uri", l.reference && l.reference !== "suffix" && l.reference !== p.reference && (p.error = p.error || "URI is not a " + l.reference + " reference.");
      const E = n[(l.scheme || p.scheme || "").toLowerCase()];
      if (!l.unicodeSupport && (!E || !E.unicodeSupport) && p.host && (l.domainHost || E && E.domainHost) && w === !1 && d(p.host))
        try {
          p.host = URL.domainToASCII(p.host.toLowerCase());
        } catch (S) {
          p.error = p.error || "Host's domain name can not be converted to ASCII: " + S;
        }
      (!E || E && !E.skipNormalize) && (y && p.scheme !== void 0 && (p.scheme = unescape(p.scheme)), y && p.host !== void 0 && (p.host = unescape(p.host)), p.path && (p.path = escape(unescape(p.path))), p.fragment && (p.fragment = encodeURI(decodeURIComponent(p.fragment)))), E && E.parse && E.parse(p, l);
    } else
      p.error = p.error || "URI can not be parsed.";
    return p;
  }
  const _ = {
    SCHEMES: n,
    normalize: a,
    resolve: o,
    resolveComponents: u,
    equal: c,
    serialize: f,
    parse: P
  };
  return Vr.exports = _, Vr.exports.default = _, Vr.exports.fastUri = _, Vr.exports;
}
var Xs;
function bd() {
  if (Xs) return On;
  Xs = 1, Object.defineProperty(On, "__esModule", { value: !0 });
  const e = wd();
  return e.code = 'require("ajv/dist/runtime/uri").default', On.default = e, On;
}
var Qs;
function $d() {
  return Qs || (Qs = 1, function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.CodeGen = e.Name = e.nil = e.stringify = e.str = e._ = e.KeywordCxt = void 0;
    var t = ji();
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
    const i = Ea(), s = Mi(), n = nl(), a = Sa(), o = se(), u = Ri(), c = Pi(), f = fe(), h = gd, d = bd(), g = (q, R) => new RegExp(q, R);
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
    ]), m = {
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
    }, l = 200;
    function p(q) {
      var R, A, M, $, D, I, B, Y, ce, ue, T, N, L, V, Q, ae, ye, Be, je, Me, Pe, lr, ke, Ni, Ii;
      const Er = q.strict, Ci = (R = q.code) === null || R === void 0 ? void 0 : R.optimize, Ta = Ci === !0 || Ci === void 0 ? 1 : Ci || 0, Ra = (M = (A = q.code) === null || A === void 0 ? void 0 : A.regExp) !== null && M !== void 0 ? M : g, hl = ($ = q.uriResolver) !== null && $ !== void 0 ? $ : d.default;
      return {
        strictSchema: (I = (D = q.strictSchema) !== null && D !== void 0 ? D : Er) !== null && I !== void 0 ? I : !0,
        strictNumbers: (Y = (B = q.strictNumbers) !== null && B !== void 0 ? B : Er) !== null && Y !== void 0 ? Y : !0,
        strictTypes: (ue = (ce = q.strictTypes) !== null && ce !== void 0 ? ce : Er) !== null && ue !== void 0 ? ue : "log",
        strictTuples: (N = (T = q.strictTuples) !== null && T !== void 0 ? T : Er) !== null && N !== void 0 ? N : "log",
        strictRequired: (V = (L = q.strictRequired) !== null && L !== void 0 ? L : Er) !== null && V !== void 0 ? V : !1,
        code: q.code ? { ...q.code, optimize: Ta, regExp: Ra } : { optimize: Ta, regExp: Ra },
        loopRequired: (Q = q.loopRequired) !== null && Q !== void 0 ? Q : l,
        loopEnum: (ae = q.loopEnum) !== null && ae !== void 0 ? ae : l,
        meta: (ye = q.meta) !== null && ye !== void 0 ? ye : !0,
        messages: (Be = q.messages) !== null && Be !== void 0 ? Be : !0,
        inlineRefs: (je = q.inlineRefs) !== null && je !== void 0 ? je : !0,
        schemaId: (Me = q.schemaId) !== null && Me !== void 0 ? Me : "$id",
        addUsedSchema: (Pe = q.addUsedSchema) !== null && Pe !== void 0 ? Pe : !0,
        validateSchema: (lr = q.validateSchema) !== null && lr !== void 0 ? lr : !0,
        validateFormats: (ke = q.validateFormats) !== null && ke !== void 0 ? ke : !0,
        unicodeRegExp: (Ni = q.unicodeRegExp) !== null && Ni !== void 0 ? Ni : !0,
        int32range: (Ii = q.int32range) !== null && Ii !== void 0 ? Ii : !0,
        uriResolver: hl
      };
    }
    class y {
      constructor(R = {}) {
        this.schemas = {}, this.refs = {}, this.formats = {}, this._compilations = /* @__PURE__ */ new Set(), this._loading = {}, this._cache = /* @__PURE__ */ new Map(), R = this.opts = { ...R, ...p(R) };
        const { es5: A, lines: M } = this.opts.code;
        this.scope = new o.ValueScope({ scope: {}, prefixes: _, es5: A, lines: M }), this.logger = H(R.logger);
        const $ = R.validateFormats;
        R.validateFormats = !1, this.RULES = (0, n.getRules)(), w.call(this, m, R, "NOT SUPPORTED"), w.call(this, v, R, "DEPRECATED", "warn"), this._metaOpts = C.call(this), R.formats && S.call(this), this._addVocabularies(), this._addDefaultMetaSchema(), R.keywords && O.call(this, R.keywords), typeof R.meta == "object" && this.addMetaSchema(R.meta), E.call(this), R.validateFormats = $;
      }
      _addVocabularies() {
        this.addKeyword("$async");
      }
      _addDefaultMetaSchema() {
        const { $data: R, meta: A, schemaId: M } = this.opts;
        let $ = h;
        M === "id" && ($ = { ...h }, $.id = $.$id, delete $.$id), A && R && this.addMetaSchema($, $[M], !1);
      }
      defaultMeta() {
        const { meta: R, schemaId: A } = this.opts;
        return this.opts.defaultMeta = typeof R == "object" ? R[A] || R : void 0;
      }
      validate(R, A) {
        let M;
        if (typeof R == "string") {
          if (M = this.getSchema(R), !M)
            throw new Error(`no schema with key or ref "${R}"`);
        } else
          M = this.compile(R);
        const $ = M(A);
        return "$async" in M || (this.errors = M.errors), $;
      }
      compile(R, A) {
        const M = this._addSchema(R, A);
        return M.validate || this._compileSchemaEnv(M);
      }
      compileAsync(R, A) {
        if (typeof this.opts.loadSchema != "function")
          throw new Error("options.loadSchema should be a function");
        const { loadSchema: M } = this.opts;
        return $.call(this, R, A);
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
            return B.call(this, T), await Y.call(this, T.missingSchema), I.call(this, ue);
          }
        }
        function B({ missingSchema: ue, missingRef: T }) {
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
      addSchema(R, A, M, $ = this.opts.validateSchema) {
        if (Array.isArray(R)) {
          for (const I of R)
            this.addSchema(I, void 0, M, $);
          return this;
        }
        let D;
        if (typeof R == "object") {
          const { schemaId: I } = this.opts;
          if (D = R[I], D !== void 0 && typeof D != "string")
            throw new Error(`schema ${I} must be string`);
        }
        return A = (0, u.normalizeId)(A || D), this._checkUnique(A), this.schemas[A] = this._addSchema(R, M, A, $, !0), this;
      }
      // Add schema that will be used to validate other schemas
      // options in META_IGNORE_OPTIONS are alway set to false
      addMetaSchema(R, A, M = this.opts.validateSchema) {
        return this.addSchema(R, A, !0, M), this;
      }
      //  Validate schema against its meta-schema
      validateSchema(R, A) {
        if (typeof R == "boolean")
          return !0;
        let M;
        if (M = R.$schema, M !== void 0 && typeof M != "string")
          throw new Error("$schema must be a string");
        if (M = M || this.opts.defaultMeta || this.defaultMeta(), !M)
          return this.logger.warn("meta-schema not available"), this.errors = null, !0;
        const $ = this.validate(M, R);
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
      getSchema(R) {
        let A;
        for (; typeof (A = b.call(this, R)) == "string"; )
          R = A;
        if (A === void 0) {
          const { schemaId: M } = this.opts, $ = new a.SchemaEnv({ schema: {}, schemaId: M });
          if (A = a.resolveSchema.call(this, $, R), !A)
            return;
          this.refs[R] = A;
        }
        return A.validate || this._compileSchemaEnv(A);
      }
      // Remove cached schema(s).
      // If no parameter is passed all schemas but meta-schemas are removed.
      // If RegExp is passed all schemas with key/id matching pattern but meta-schemas are removed.
      // Even if schema is referenced by other schemas it still can be removed as other schemas have local references.
      removeSchema(R) {
        if (R instanceof RegExp)
          return this._removeAllSchemas(this.schemas, R), this._removeAllSchemas(this.refs, R), this;
        switch (typeof R) {
          case "undefined":
            return this._removeAllSchemas(this.schemas), this._removeAllSchemas(this.refs), this._cache.clear(), this;
          case "string": {
            const A = b.call(this, R);
            return typeof A == "object" && this._cache.delete(A.schema), delete this.schemas[R], delete this.refs[R], this;
          }
          case "object": {
            const A = R;
            this._cache.delete(A);
            let M = R[this.opts.schemaId];
            return M && (M = (0, u.normalizeId)(M), delete this.schemas[M], delete this.refs[M]), this;
          }
          default:
            throw new Error("ajv.removeSchema: invalid parameter");
        }
      }
      // add "vocabulary" - a collection of keywords
      addVocabulary(R) {
        for (const A of R)
          this.addKeyword(A);
        return this;
      }
      addKeyword(R, A) {
        let M;
        if (typeof R == "string")
          M = R, typeof A == "object" && (this.logger.warn("these parameters are deprecated, see docs for addKeyword"), A.keyword = M);
        else if (typeof R == "object" && A === void 0) {
          if (A = R, M = A.keyword, Array.isArray(M) && !M.length)
            throw new Error("addKeywords: keyword must be string or non-empty array");
        } else
          throw new Error("invalid addKeywords parameters");
        if (G.call(this, M, A), !A)
          return (0, f.eachItem)(M, (D) => J.call(this, D)), this;
        Z.call(this, A);
        const $ = {
          ...A,
          type: (0, c.getJSONTypes)(A.type),
          schemaType: (0, c.getJSONTypes)(A.schemaType)
        };
        return (0, f.eachItem)(M, $.type.length === 0 ? (D) => J.call(this, D, $) : (D) => $.type.forEach((I) => J.call(this, D, $, I))), this;
      }
      getKeyword(R) {
        const A = this.RULES.all[R];
        return typeof A == "object" ? A.definition : !!A;
      }
      // Remove keyword
      removeKeyword(R) {
        const { RULES: A } = this;
        delete A.keywords[R], delete A.all[R];
        for (const M of A.rules) {
          const $ = M.rules.findIndex((D) => D.keyword === R);
          $ >= 0 && M.rules.splice($, 1);
        }
        return this;
      }
      // Add format
      addFormat(R, A) {
        return typeof A == "string" && (A = new RegExp(A)), this.formats[R] = A, this;
      }
      errorsText(R = this.errors, { separator: A = ", ", dataVar: M = "data" } = {}) {
        return !R || R.length === 0 ? "No errors" : R.map(($) => `${M}${$.instancePath} ${$.message}`).reduce(($, D) => $ + A + D);
      }
      $dataMetaSchema(R, A) {
        const M = this.RULES.all;
        R = JSON.parse(JSON.stringify(R));
        for (const $ of A) {
          const D = $.split("/").slice(1);
          let I = R;
          for (const B of D)
            I = I[B];
          for (const B in M) {
            const Y = M[B];
            if (typeof Y != "object")
              continue;
            const { $data: ce } = Y.definition, ue = I[B];
            ce && ue && (I[B] = oe(ue));
          }
        }
        return R;
      }
      _removeAllSchemas(R, A) {
        for (const M in R) {
          const $ = R[M];
          (!A || A.test(M)) && (typeof $ == "string" ? delete R[M] : $ && !$.meta && (this._cache.delete($.schema), delete R[M]));
        }
      }
      _addSchema(R, A, M, $ = this.opts.validateSchema, D = this.opts.addUsedSchema) {
        let I;
        const { schemaId: B } = this.opts;
        if (typeof R == "object")
          I = R[B];
        else {
          if (this.opts.jtd)
            throw new Error("schema must be object");
          if (typeof R != "boolean")
            throw new Error("schema must be object or boolean");
        }
        let Y = this._cache.get(R);
        if (Y !== void 0)
          return Y;
        M = (0, u.normalizeId)(I || M);
        const ce = u.getSchemaRefs.call(this, R, M);
        return Y = new a.SchemaEnv({ schema: R, schemaId: B, meta: A, baseId: M, localRefs: ce }), this._cache.set(Y.schema, Y), D && !M.startsWith("#") && (M && this._checkUnique(M), this.refs[M] = Y), $ && this.validateSchema(R, !0), Y;
      }
      _checkUnique(R) {
        if (this.schemas[R] || this.refs[R])
          throw new Error(`schema with key or id "${R}" already exists`);
      }
      _compileSchemaEnv(R) {
        if (R.meta ? this._compileMetaSchema(R) : a.compileSchema.call(this, R), !R.validate)
          throw new Error("ajv implementation error");
        return R.validate;
      }
      _compileMetaSchema(R) {
        const A = this.opts;
        this.opts = this._metaOpts;
        try {
          a.compileSchema.call(this, R);
        } finally {
          this.opts = A;
        }
      }
    }
    y.ValidationError = i.default, y.MissingRefError = s.default, e.default = y;
    function w(q, R, A, M = "error") {
      for (const $ in q) {
        const D = $;
        D in R && this.logger[M](`${A}: option ${$}. ${q[D]}`);
      }
    }
    function b(q) {
      return q = (0, u.normalizeId)(q), this.schemas[q] || this.refs[q];
    }
    function E() {
      const q = this.opts.schemas;
      if (q)
        if (Array.isArray(q))
          this.addSchema(q);
        else
          for (const R in q)
            this.addSchema(q[R], R);
    }
    function S() {
      for (const q in this.opts.formats) {
        const R = this.opts.formats[q];
        R && this.addFormat(q, R);
      }
    }
    function O(q) {
      if (Array.isArray(q)) {
        this.addVocabulary(q);
        return;
      }
      this.logger.warn("keywords option as map is deprecated, pass array");
      for (const R in q) {
        const A = q[R];
        A.keyword || (A.keyword = R), this.addKeyword(A);
      }
    }
    function C() {
      const q = { ...this.opts };
      for (const R of P)
        delete q[R];
      return q;
    }
    const k = { log() {
    }, warn() {
    }, error() {
    } };
    function H(q) {
      if (q === !1)
        return k;
      if (q === void 0)
        return console;
      if (q.log && q.warn && q.error)
        return q;
      throw new Error("logger must implement log, warn and error methods");
    }
    const F = /^[a-z_$][a-z0-9_$:-]*$/i;
    function G(q, R) {
      const { RULES: A } = this;
      if ((0, f.eachItem)(q, (M) => {
        if (A.keywords[M])
          throw new Error(`Keyword ${M} is already defined`);
        if (!F.test(M))
          throw new Error(`Keyword ${M} has invalid name`);
      }), !!R && R.$data && !("code" in R || "validate" in R))
        throw new Error('$data keyword must have "code" or "validate" function');
    }
    function J(q, R, A) {
      var M;
      const $ = R == null ? void 0 : R.post;
      if (A && $)
        throw new Error('keyword with "post" flag cannot have "type"');
      const { RULES: D } = this;
      let I = $ ? D.post : D.rules.find(({ type: Y }) => Y === A);
      if (I || (I = { type: A, rules: [] }, D.rules.push(I)), D.keywords[q] = !0, !R)
        return;
      const B = {
        keyword: q,
        definition: {
          ...R,
          type: (0, c.getJSONTypes)(R.type),
          schemaType: (0, c.getJSONTypes)(R.schemaType)
        }
      };
      R.before ? x.call(this, I, B, R.before) : I.rules.push(B), D.all[q] = B, (M = R.implements) === null || M === void 0 || M.forEach((Y) => this.addKeyword(Y));
    }
    function x(q, R, A) {
      const M = q.rules.findIndex(($) => $.keyword === A);
      M >= 0 ? q.rules.splice(M, 0, R) : (q.rules.push(R), this.logger.warn(`rule ${A} is not defined`));
    }
    function Z(q) {
      let { metaSchema: R } = q;
      R !== void 0 && (q.$data && this.opts.$data && (R = oe(R)), q.validateSchema = this.compile(R, !0));
    }
    const X = {
      $ref: "https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#"
    };
    function oe(q) {
      return { anyOf: [q, X] };
    }
  }(Ui)), Ui;
}
var Tn = {}, Rn = {}, jn = {}, Zs;
function Ed() {
  if (Zs) return jn;
  Zs = 1, Object.defineProperty(jn, "__esModule", { value: !0 });
  const e = {
    keyword: "id",
    code() {
      throw new Error('NOT SUPPORTED: keyword "id", use "$id" for schema ID');
    }
  };
  return jn.default = e, jn;
}
var Vt = {}, xs;
function Sd() {
  if (xs) return Vt;
  xs = 1, Object.defineProperty(Vt, "__esModule", { value: !0 }), Vt.callRef = Vt.getValidate = void 0;
  const e = Mi(), t = rt(), r = se(), i = Jt(), s = Sa(), n = fe(), a = {
    keyword: "$ref",
    schemaType: "string",
    code(c) {
      const { gen: f, schema: h, it: d } = c, { baseId: g, schemaEnv: P, validateName: _, opts: m, self: v } = d, { root: l } = P;
      if ((h === "#" || h === "#/") && g === l.baseId)
        return y();
      const p = s.resolveRef.call(v, l, g, h);
      if (p === void 0)
        throw new e.default(d.opts.uriResolver, g, h);
      if (p instanceof s.SchemaEnv)
        return w(p);
      return b(p);
      function y() {
        if (P === l)
          return u(c, _, P, P.$async);
        const E = f.scopeValue("root", { ref: l });
        return u(c, (0, r._)`${E}.validate`, l, l.$async);
      }
      function w(E) {
        const S = o(c, E);
        u(c, S, E, E.$async);
      }
      function b(E) {
        const S = f.scopeValue("schema", m.code.source === !0 ? { ref: E, code: (0, r.stringify)(E) } : { ref: E }), O = f.name("valid"), C = c.subschema({
          schema: E,
          dataTypes: [],
          schemaPath: r.nil,
          topSchemaRef: S,
          errSchemaPath: h
        }, O);
        c.mergeEvaluated(C), c.ok(O);
      }
    }
  };
  function o(c, f) {
    const { gen: h } = c;
    return f.validate ? h.scopeValue("validate", { ref: f.validate }) : (0, r._)`${h.scopeValue("wrapper", { ref: f })}.validate`;
  }
  Vt.getValidate = o;
  function u(c, f, h, d) {
    const { gen: g, it: P } = c, { allErrors: _, schemaEnv: m, opts: v } = P, l = v.passContext ? i.default.this : r.nil;
    d ? p() : y();
    function p() {
      if (!m.$async)
        throw new Error("async schema referenced by sync schema");
      const E = g.let("valid");
      g.try(() => {
        g.code((0, r._)`await ${(0, t.callValidateCode)(c, f, l)}`), b(f), _ || g.assign(E, !0);
      }, (S) => {
        g.if((0, r._)`!(${S} instanceof ${P.ValidationError})`, () => g.throw(S)), w(S), _ || g.assign(E, !1);
      }), c.ok(E);
    }
    function y() {
      c.result((0, t.callValidateCode)(c, f, l), () => b(f), () => w(f));
    }
    function w(E) {
      const S = (0, r._)`${E}.errors`;
      g.assign(i.default.vErrors, (0, r._)`${i.default.vErrors} === null ? ${S} : ${i.default.vErrors}.concat(${S})`), g.assign(i.default.errors, (0, r._)`${i.default.vErrors}.length`);
    }
    function b(E) {
      var S;
      if (!P.opts.unevaluated)
        return;
      const O = (S = h == null ? void 0 : h.validate) === null || S === void 0 ? void 0 : S.evaluated;
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
  return Vt.callRef = u, Vt.default = a, Vt;
}
var eo;
function Dd() {
  if (eo) return Rn;
  eo = 1, Object.defineProperty(Rn, "__esModule", { value: !0 });
  const e = Ed(), t = Sd(), r = [
    "$schema",
    "$id",
    "$defs",
    "$vocabulary",
    { keyword: "$comment" },
    "definitions",
    e.default,
    t.default
  ];
  return Rn.default = r, Rn;
}
var Mn = {}, Nn = {}, to;
function Od() {
  if (to) return Nn;
  to = 1, Object.defineProperty(Nn, "__esModule", { value: !0 });
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
      const { keyword: a, data: o, schemaCode: u } = n;
      n.fail$data((0, e._)`${o} ${r[a].fail} ${u} || isNaN(${o})`);
    }
  };
  return Nn.default = s, Nn;
}
var In = {}, ro;
function Td() {
  if (ro) return In;
  ro = 1, Object.defineProperty(In, "__esModule", { value: !0 });
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
      const { gen: s, data: n, schemaCode: a, it: o } = i, u = o.opts.multipleOfPrecision, c = s.let("res"), f = u ? (0, e._)`Math.abs(Math.round(${c}) - ${c}) > 1e-${u}` : (0, e._)`${c} !== parseInt(${c})`;
      i.fail$data((0, e._)`(${a} === 0 || (${c} = ${n}/${a}, ${f}))`);
    }
  };
  return In.default = r, In;
}
var Cn = {}, An = {}, no;
function Rd() {
  if (no) return An;
  no = 1, Object.defineProperty(An, "__esModule", { value: !0 });
  function e(t) {
    const r = t.length;
    let i = 0, s = 0, n;
    for (; s < r; )
      i++, n = t.charCodeAt(s++), n >= 55296 && n <= 56319 && s < r && (n = t.charCodeAt(s), (n & 64512) === 56320 && s++);
    return i;
  }
  return An.default = e, e.code = 'require("ajv/dist/runtime/ucs2length").default', An;
}
var io;
function jd() {
  if (io) return Cn;
  io = 1, Object.defineProperty(Cn, "__esModule", { value: !0 });
  const e = se(), t = fe(), r = Rd(), s = {
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
      const { keyword: a, data: o, schemaCode: u, it: c } = n, f = a === "maxLength" ? e.operators.GT : e.operators.LT, h = c.opts.unicode === !1 ? (0, e._)`${o}.length` : (0, e._)`${(0, t.useFunc)(n.gen, r.default)}(${o})`;
      n.fail$data((0, e._)`${h} ${f} ${u}`);
    }
  };
  return Cn.default = s, Cn;
}
var Ln = {}, ao;
function Md() {
  if (ao) return Ln;
  ao = 1, Object.defineProperty(Ln, "__esModule", { value: !0 });
  const e = rt(), t = se(), i = {
    keyword: "pattern",
    type: "string",
    schemaType: "string",
    $data: !0,
    error: {
      message: ({ schemaCode: s }) => (0, t.str)`must match pattern "${s}"`,
      params: ({ schemaCode: s }) => (0, t._)`{pattern: ${s}}`
    },
    code(s) {
      const { data: n, $data: a, schema: o, schemaCode: u, it: c } = s, f = c.opts.unicodeRegExp ? "u" : "", h = a ? (0, t._)`(new RegExp(${u}, ${f}))` : (0, e.usePattern)(s, o);
      s.fail$data((0, t._)`!${h}.test(${n})`);
    }
  };
  return Ln.default = i, Ln;
}
var qn = {}, so;
function Nd() {
  if (so) return qn;
  so = 1, Object.defineProperty(qn, "__esModule", { value: !0 });
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
  return qn.default = r, qn;
}
var kn = {}, oo;
function Id() {
  if (oo) return kn;
  oo = 1, Object.defineProperty(kn, "__esModule", { value: !0 });
  const e = rt(), t = se(), r = fe(), s = {
    keyword: "required",
    type: "object",
    schemaType: "array",
    $data: !0,
    error: {
      message: ({ params: { missingProperty: n } }) => (0, t.str)`must have required property '${n}'`,
      params: ({ params: { missingProperty: n } }) => (0, t._)`{missingProperty: ${n}}`
    },
    code(n) {
      const { gen: a, schema: o, schemaCode: u, data: c, $data: f, it: h } = n, { opts: d } = h;
      if (!f && o.length === 0)
        return;
      const g = o.length >= d.loopRequired;
      if (h.allErrors ? P() : _(), d.strictRequired) {
        const l = n.parentSchema.properties, { definedProperties: p } = n.it;
        for (const y of o)
          if ((l == null ? void 0 : l[y]) === void 0 && !p.has(y)) {
            const w = h.schemaEnv.baseId + h.errSchemaPath, b = `required property "${y}" is not defined at "${w}" (strictRequired)`;
            (0, r.checkStrictMode)(h, b, h.opts.strictRequired);
          }
      }
      function P() {
        if (g || f)
          n.block$data(t.nil, m);
        else
          for (const l of o)
            (0, e.checkReportMissingProp)(n, l);
      }
      function _() {
        const l = a.let("missing");
        if (g || f) {
          const p = a.let("valid", !0);
          n.block$data(p, () => v(l, p)), n.ok(p);
        } else
          a.if((0, e.checkMissingProp)(n, o, l)), (0, e.reportMissingProp)(n, l), a.else();
      }
      function m() {
        a.forOf("prop", u, (l) => {
          n.setParams({ missingProperty: l }), a.if((0, e.noPropertyInData)(a, c, l, d.ownProperties), () => n.error());
        });
      }
      function v(l, p) {
        n.setParams({ missingProperty: l }), a.forOf(l, u, () => {
          a.assign(p, (0, e.propertyInData)(a, c, l, d.ownProperties)), a.if((0, t.not)(p), () => {
            n.error(), a.break();
          });
        }, t.nil);
      }
    }
  };
  return kn.default = s, kn;
}
var Un = {}, uo;
function Cd() {
  if (uo) return Un;
  uo = 1, Object.defineProperty(Un, "__esModule", { value: !0 });
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
  return Un.default = r, Un;
}
var Fn = {}, Wn = {}, lo;
function Da() {
  if (lo) return Wn;
  lo = 1, Object.defineProperty(Wn, "__esModule", { value: !0 });
  const e = al();
  return e.code = 'require("ajv/dist/runtime/equal").default', Wn.default = e, Wn;
}
var co;
function Ad() {
  if (co) return Fn;
  co = 1, Object.defineProperty(Fn, "__esModule", { value: !0 });
  const e = Pi(), t = se(), r = fe(), i = Da(), n = {
    keyword: "uniqueItems",
    type: "array",
    schemaType: "boolean",
    $data: !0,
    error: {
      message: ({ params: { i: a, j: o } }) => (0, t.str)`must NOT have duplicate items (items ## ${o} and ${a} are identical)`,
      params: ({ params: { i: a, j: o } }) => (0, t._)`{i: ${a}, j: ${o}}`
    },
    code(a) {
      const { gen: o, data: u, $data: c, schema: f, parentSchema: h, schemaCode: d, it: g } = a;
      if (!c && !f)
        return;
      const P = o.let("valid"), _ = h.items ? (0, e.getSchemaTypes)(h.items) : [];
      a.block$data(P, m, (0, t._)`${d} === false`), a.ok(P);
      function m() {
        const y = o.let("i", (0, t._)`${u}.length`), w = o.let("j");
        a.setParams({ i: y, j: w }), o.assign(P, !0), o.if((0, t._)`${y} > 1`, () => (v() ? l : p)(y, w));
      }
      function v() {
        return _.length > 0 && !_.some((y) => y === "object" || y === "array");
      }
      function l(y, w) {
        const b = o.name("item"), E = (0, e.checkDataTypes)(_, b, g.opts.strictNumbers, e.DataType.Wrong), S = o.const("indices", (0, t._)`{}`);
        o.for((0, t._)`;${y}--;`, () => {
          o.let(b, (0, t._)`${u}[${y}]`), o.if(E, (0, t._)`continue`), _.length > 1 && o.if((0, t._)`typeof ${b} == "string"`, (0, t._)`${b} += "_"`), o.if((0, t._)`typeof ${S}[${b}] == "number"`, () => {
            o.assign(w, (0, t._)`${S}[${b}]`), a.error(), o.assign(P, !1).break();
          }).code((0, t._)`${S}[${b}] = ${y}`);
        });
      }
      function p(y, w) {
        const b = (0, r.useFunc)(o, i.default), E = o.name("outer");
        o.label(E).for((0, t._)`;${y}--;`, () => o.for((0, t._)`${w} = ${y}; ${w}--;`, () => o.if((0, t._)`${b}(${u}[${y}], ${u}[${w}])`, () => {
          a.error(), o.assign(P, !1).break(E);
        })));
      }
    }
  };
  return Fn.default = n, Fn;
}
var Vn = {}, fo;
function Ld() {
  if (fo) return Vn;
  fo = 1, Object.defineProperty(Vn, "__esModule", { value: !0 });
  const e = se(), t = fe(), r = Da(), s = {
    keyword: "const",
    $data: !0,
    error: {
      message: "must be equal to constant",
      params: ({ schemaCode: n }) => (0, e._)`{allowedValue: ${n}}`
    },
    code(n) {
      const { gen: a, data: o, $data: u, schemaCode: c, schema: f } = n;
      u || f && typeof f == "object" ? n.fail$data((0, e._)`!${(0, t.useFunc)(a, r.default)}(${o}, ${c})`) : n.fail((0, e._)`${f} !== ${o}`);
    }
  };
  return Vn.default = s, Vn;
}
var Gn = {}, ho;
function qd() {
  if (ho) return Gn;
  ho = 1, Object.defineProperty(Gn, "__esModule", { value: !0 });
  const e = se(), t = fe(), r = Da(), s = {
    keyword: "enum",
    schemaType: "array",
    $data: !0,
    error: {
      message: "must be equal to one of the allowed values",
      params: ({ schemaCode: n }) => (0, e._)`{allowedValues: ${n}}`
    },
    code(n) {
      const { gen: a, data: o, $data: u, schema: c, schemaCode: f, it: h } = n;
      if (!u && c.length === 0)
        throw new Error("enum must have non-empty array");
      const d = c.length >= h.opts.loopEnum;
      let g;
      const P = () => g ?? (g = (0, t.useFunc)(a, r.default));
      let _;
      if (d || u)
        _ = a.let("valid"), n.block$data(_, m);
      else {
        if (!Array.isArray(c))
          throw new Error("ajv implementation error");
        const l = a.const("vSchema", f);
        _ = (0, e.or)(...c.map((p, y) => v(l, y)));
      }
      n.pass(_);
      function m() {
        a.assign(_, !1), a.forOf("v", f, (l) => a.if((0, e._)`${P()}(${o}, ${l})`, () => a.assign(_, !0).break()));
      }
      function v(l, p) {
        const y = c[p];
        return typeof y == "object" && y !== null ? (0, e._)`${P()}(${o}, ${l}[${p}])` : (0, e._)`${o} === ${y}`;
      }
    }
  };
  return Gn.default = s, Gn;
}
var mo;
function kd() {
  if (mo) return Mn;
  mo = 1, Object.defineProperty(Mn, "__esModule", { value: !0 });
  const e = Od(), t = Td(), r = jd(), i = Md(), s = Nd(), n = Id(), a = Cd(), o = Ad(), u = Ld(), c = qd(), f = [
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
    u.default,
    c.default
  ];
  return Mn.default = f, Mn;
}
var Hn = {}, fr = {}, po;
function sl() {
  if (po) return fr;
  po = 1, Object.defineProperty(fr, "__esModule", { value: !0 }), fr.validateAdditionalItems = void 0;
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
      const { parentSchema: a, it: o } = n, { items: u } = a;
      if (!Array.isArray(u)) {
        (0, t.checkStrictMode)(o, '"additionalItems" is ignored when "items" is not an array of schemas');
        return;
      }
      s(n, u);
    }
  };
  function s(n, a) {
    const { gen: o, schema: u, data: c, keyword: f, it: h } = n;
    h.items = !0;
    const d = o.const("len", (0, e._)`${c}.length`);
    if (u === !1)
      n.setParams({ len: a.length }), n.pass((0, e._)`${d} <= ${a.length}`);
    else if (typeof u == "object" && !(0, t.alwaysValidSchema)(h, u)) {
      const P = o.var("valid", (0, e._)`${d} <= ${a.length}`);
      o.if((0, e.not)(P), () => g(P)), n.ok(P);
    }
    function g(P) {
      o.forRange("i", a.length, d, (_) => {
        n.subschema({ keyword: f, dataProp: _, dataPropType: t.Type.Num }, P), h.allErrors || o.if((0, e.not)(P), () => o.break());
      });
    }
  }
  return fr.validateAdditionalItems = s, fr.default = i, fr;
}
var zn = {}, hr = {}, vo;
function ol() {
  if (vo) return hr;
  vo = 1, Object.defineProperty(hr, "__esModule", { value: !0 }), hr.validateTuple = void 0;
  const e = se(), t = fe(), r = rt(), i = {
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
    const { gen: u, parentSchema: c, data: f, keyword: h, it: d } = n;
    _(c), d.opts.unevaluated && o.length && d.items !== !0 && (d.items = t.mergeEvaluated.items(u, o.length, d.items));
    const g = u.name("valid"), P = u.const("len", (0, e._)`${f}.length`);
    o.forEach((m, v) => {
      (0, t.alwaysValidSchema)(d, m) || (u.if((0, e._)`${P} > ${v}`, () => n.subschema({
        keyword: h,
        schemaProp: v,
        dataProp: v
      }, g)), n.ok(g));
    });
    function _(m) {
      const { opts: v, errSchemaPath: l } = d, p = o.length, y = p === m.minItems && (p === m.maxItems || m[a] === !1);
      if (v.strictTuples && !y) {
        const w = `"${h}" is ${p}-tuple, but minItems or maxItems/${a} are not specified or different at path "${l}"`;
        (0, t.checkStrictMode)(d, w, v.strictTuples);
      }
    }
  }
  return hr.validateTuple = s, hr.default = i, hr;
}
var go;
function Ud() {
  if (go) return zn;
  go = 1, Object.defineProperty(zn, "__esModule", { value: !0 });
  const e = ol(), t = {
    keyword: "prefixItems",
    type: "array",
    schemaType: ["array"],
    before: "uniqueItems",
    code: (r) => (0, e.validateTuple)(r, "items")
  };
  return zn.default = t, zn;
}
var Kn = {}, _o;
function Fd() {
  if (_o) return Kn;
  _o = 1, Object.defineProperty(Kn, "__esModule", { value: !0 });
  const e = se(), t = fe(), r = rt(), i = sl(), n = {
    keyword: "items",
    type: "array",
    schemaType: ["object", "boolean"],
    before: "uniqueItems",
    error: {
      message: ({ params: { len: a } }) => (0, e.str)`must NOT have more than ${a} items`,
      params: ({ params: { len: a } }) => (0, e._)`{limit: ${a}}`
    },
    code(a) {
      const { schema: o, parentSchema: u, it: c } = a, { prefixItems: f } = u;
      c.items = !0, !(0, t.alwaysValidSchema)(c, o) && (f ? (0, i.validateAdditionalItems)(a, f) : a.ok((0, r.validateArray)(a)));
    }
  };
  return Kn.default = n, Kn;
}
var Bn = {}, yo;
function Wd() {
  if (yo) return Bn;
  yo = 1, Object.defineProperty(Bn, "__esModule", { value: !0 });
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
      const { gen: n, schema: a, parentSchema: o, data: u, it: c } = s;
      let f, h;
      const { minContains: d, maxContains: g } = o;
      c.opts.next ? (f = d === void 0 ? 1 : d, h = g) : f = 1;
      const P = n.const("len", (0, e._)`${u}.length`);
      if (s.setParams({ min: f, max: h }), h === void 0 && f === 0) {
        (0, t.checkStrictMode)(c, '"minContains" == 0 without "maxContains": "contains" keyword ignored');
        return;
      }
      if (h !== void 0 && f > h) {
        (0, t.checkStrictMode)(c, '"minContains" > "maxContains" is always invalid'), s.fail();
        return;
      }
      if ((0, t.alwaysValidSchema)(c, a)) {
        let p = (0, e._)`${P} >= ${f}`;
        h !== void 0 && (p = (0, e._)`${p} && ${P} <= ${h}`), s.pass(p);
        return;
      }
      c.items = !0;
      const _ = n.name("valid");
      h === void 0 && f === 1 ? v(_, () => n.if(_, () => n.break())) : f === 0 ? (n.let(_, !0), h !== void 0 && n.if((0, e._)`${u}.length > 0`, m)) : (n.let(_, !1), m()), s.result(_, () => s.reset());
      function m() {
        const p = n.name("_valid"), y = n.let("count", 0);
        v(p, () => n.if(p, () => l(y)));
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
      function l(p) {
        n.code((0, e._)`${p}++`), h === void 0 ? n.if((0, e._)`${p} >= ${f}`, () => n.assign(_, !0).break()) : (n.if((0, e._)`${p} > ${h}`, () => n.assign(_, !1).break()), f === 1 ? n.assign(_, !0) : n.if((0, e._)`${p} >= ${f}`, () => n.assign(_, !0)));
      }
    }
  };
  return Bn.default = i, Bn;
}
var Yi = {}, Po;
function Vd() {
  return Po || (Po = 1, function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.validateSchemaDeps = e.validatePropertyDeps = e.error = void 0;
    const t = se(), r = fe(), i = rt();
    e.error = {
      message: ({ params: { property: u, depsCount: c, deps: f } }) => {
        const h = c === 1 ? "property" : "properties";
        return (0, t.str)`must have ${h} ${f} when property ${u} is present`;
      },
      params: ({ params: { property: u, depsCount: c, deps: f, missingProperty: h } }) => (0, t._)`{property: ${u},
    missingProperty: ${h},
    depsCount: ${c},
    deps: ${f}}`
      // TODO change to reference
    };
    const s = {
      keyword: "dependencies",
      type: "object",
      schemaType: "object",
      error: e.error,
      code(u) {
        const [c, f] = n(u);
        a(u, c), o(u, f);
      }
    };
    function n({ schema: u }) {
      const c = {}, f = {};
      for (const h in u) {
        if (h === "__proto__")
          continue;
        const d = Array.isArray(u[h]) ? c : f;
        d[h] = u[h];
      }
      return [c, f];
    }
    function a(u, c = u.schema) {
      const { gen: f, data: h, it: d } = u;
      if (Object.keys(c).length === 0)
        return;
      const g = f.let("missing");
      for (const P in c) {
        const _ = c[P];
        if (_.length === 0)
          continue;
        const m = (0, i.propertyInData)(f, h, P, d.opts.ownProperties);
        u.setParams({
          property: P,
          depsCount: _.length,
          deps: _.join(", ")
        }), d.allErrors ? f.if(m, () => {
          for (const v of _)
            (0, i.checkReportMissingProp)(u, v);
        }) : (f.if((0, t._)`${m} && (${(0, i.checkMissingProp)(u, _, g)})`), (0, i.reportMissingProp)(u, g), f.else());
      }
    }
    e.validatePropertyDeps = a;
    function o(u, c = u.schema) {
      const { gen: f, data: h, keyword: d, it: g } = u, P = f.name("valid");
      for (const _ in c)
        (0, r.alwaysValidSchema)(g, c[_]) || (f.if(
          (0, i.propertyInData)(f, h, _, g.opts.ownProperties),
          () => {
            const m = u.subschema({ keyword: d, schemaProp: _ }, P);
            u.mergeValidEvaluated(m, P);
          },
          () => f.var(P, !0)
          // TODO var
        ), u.ok(P));
    }
    e.validateSchemaDeps = o, e.default = s;
  }(Yi)), Yi;
}
var Jn = {}, wo;
function Gd() {
  if (wo) return Jn;
  wo = 1, Object.defineProperty(Jn, "__esModule", { value: !0 });
  const e = se(), t = fe(), i = {
    keyword: "propertyNames",
    type: "object",
    schemaType: ["object", "boolean"],
    error: {
      message: "property name must be valid",
      params: ({ params: s }) => (0, e._)`{propertyName: ${s.propertyName}}`
    },
    code(s) {
      const { gen: n, schema: a, data: o, it: u } = s;
      if ((0, t.alwaysValidSchema)(u, a))
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
          s.error(!0), u.allErrors || n.break();
        });
      }), s.ok(c);
    }
  };
  return Jn.default = i, Jn;
}
var Yn = {}, bo;
function ul() {
  if (bo) return Yn;
  bo = 1, Object.defineProperty(Yn, "__esModule", { value: !0 });
  const e = rt(), t = se(), r = Jt(), i = fe(), n = {
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
      const { gen: o, schema: u, parentSchema: c, data: f, errsCount: h, it: d } = a;
      if (!h)
        throw new Error("ajv implementation error");
      const { allErrors: g, opts: P } = d;
      if (d.props = !0, P.removeAdditional !== "all" && (0, i.alwaysValidSchema)(d, u))
        return;
      const _ = (0, e.allSchemaProperties)(c.properties), m = (0, e.allSchemaProperties)(c.patternProperties);
      v(), a.ok((0, t._)`${h} === ${r.default.errors}`);
      function v() {
        o.forIn("key", f, (b) => {
          !_.length && !m.length ? y(b) : o.if(l(b), () => y(b));
        });
      }
      function l(b) {
        let E;
        if (_.length > 8) {
          const S = (0, i.schemaRefOrVal)(d, c.properties, "properties");
          E = (0, e.isOwnProperty)(o, S, b);
        } else _.length ? E = (0, t.or)(..._.map((S) => (0, t._)`${b} === ${S}`)) : E = t.nil;
        return m.length && (E = (0, t.or)(E, ...m.map((S) => (0, t._)`${(0, e.usePattern)(a, S)}.test(${b})`))), (0, t.not)(E);
      }
      function p(b) {
        o.code((0, t._)`delete ${f}[${b}]`);
      }
      function y(b) {
        if (P.removeAdditional === "all" || P.removeAdditional && u === !1) {
          p(b);
          return;
        }
        if (u === !1) {
          a.setParams({ additionalProperty: b }), a.error(), g || o.break();
          return;
        }
        if (typeof u == "object" && !(0, i.alwaysValidSchema)(d, u)) {
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
  return Yn.default = n, Yn;
}
var Xn = {}, $o;
function Hd() {
  if ($o) return Xn;
  $o = 1, Object.defineProperty(Xn, "__esModule", { value: !0 });
  const e = ji(), t = rt(), r = fe(), i = ul(), s = {
    keyword: "properties",
    type: "object",
    schemaType: "object",
    code(n) {
      const { gen: a, schema: o, parentSchema: u, data: c, it: f } = n;
      f.opts.removeAdditional === "all" && u.additionalProperties === void 0 && i.default.code(new e.KeywordCxt(f, i.default, "additionalProperties"));
      const h = (0, t.allSchemaProperties)(o);
      for (const m of h)
        f.definedProperties.add(m);
      f.opts.unevaluated && h.length && f.props !== !0 && (f.props = r.mergeEvaluated.props(a, (0, r.toHash)(h), f.props));
      const d = h.filter((m) => !(0, r.alwaysValidSchema)(f, o[m]));
      if (d.length === 0)
        return;
      const g = a.name("valid");
      for (const m of d)
        P(m) ? _(m) : (a.if((0, t.propertyInData)(a, c, m, f.opts.ownProperties)), _(m), f.allErrors || a.else().var(g, !0), a.endIf()), n.it.definedProperties.add(m), n.ok(g);
      function P(m) {
        return f.opts.useDefaults && !f.compositeRule && o[m].default !== void 0;
      }
      function _(m) {
        n.subschema({
          keyword: "properties",
          schemaProp: m,
          dataProp: m
        }, g);
      }
    }
  };
  return Xn.default = s, Xn;
}
var Qn = {}, Eo;
function zd() {
  if (Eo) return Qn;
  Eo = 1, Object.defineProperty(Qn, "__esModule", { value: !0 });
  const e = rt(), t = se(), r = fe(), i = fe(), s = {
    keyword: "patternProperties",
    type: "object",
    schemaType: "object",
    code(n) {
      const { gen: a, schema: o, data: u, parentSchema: c, it: f } = n, { opts: h } = f, d = (0, e.allSchemaProperties)(o), g = d.filter((y) => (0, r.alwaysValidSchema)(f, o[y]));
      if (d.length === 0 || g.length === d.length && (!f.opts.unevaluated || f.props === !0))
        return;
      const P = h.strictSchema && !h.allowMatchingProperties && c.properties, _ = a.name("valid");
      f.props !== !0 && !(f.props instanceof t.Name) && (f.props = (0, i.evaluatedPropsToName)(a, f.props));
      const { props: m } = f;
      v();
      function v() {
        for (const y of d)
          P && l(y), f.allErrors ? p(y) : (a.var(_, !0), p(y), a.if(_));
      }
      function l(y) {
        for (const w in P)
          new RegExp(y).test(w) && (0, r.checkStrictMode)(f, `property ${w} matches pattern ${y} (use allowMatchingProperties)`);
      }
      function p(y) {
        a.forIn("key", u, (w) => {
          a.if((0, t._)`${(0, e.usePattern)(n, y)}.test(${w})`, () => {
            const b = g.includes(y);
            b || n.subschema({
              keyword: "patternProperties",
              schemaProp: y,
              dataProp: w,
              dataPropType: i.Type.Str
            }, _), f.opts.unevaluated && m !== !0 ? a.assign((0, t._)`${m}[${w}]`, !0) : !b && !f.allErrors && a.if((0, t.not)(_), () => a.break());
          });
        });
      }
    }
  };
  return Qn.default = s, Qn;
}
var Zn = {}, So;
function Kd() {
  if (So) return Zn;
  So = 1, Object.defineProperty(Zn, "__esModule", { value: !0 });
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
  return Zn.default = t, Zn;
}
var xn = {}, Do;
function Bd() {
  if (Do) return xn;
  Do = 1, Object.defineProperty(xn, "__esModule", { value: !0 });
  const t = {
    keyword: "anyOf",
    schemaType: "array",
    trackErrors: !0,
    code: rt().validateUnion,
    error: { message: "must match a schema in anyOf" }
  };
  return xn.default = t, xn;
}
var ei = {}, Oo;
function Jd() {
  if (Oo) return ei;
  Oo = 1, Object.defineProperty(ei, "__esModule", { value: !0 });
  const e = se(), t = fe(), i = {
    keyword: "oneOf",
    schemaType: "array",
    trackErrors: !0,
    error: {
      message: "must match exactly one schema in oneOf",
      params: ({ params: s }) => (0, e._)`{passingSchemas: ${s.passing}}`
    },
    code(s) {
      const { gen: n, schema: a, parentSchema: o, it: u } = s;
      if (!Array.isArray(a))
        throw new Error("ajv implementation error");
      if (u.opts.discriminator && o.discriminator)
        return;
      const c = a, f = n.let("valid", !1), h = n.let("passing", null), d = n.name("_valid");
      s.setParams({ passing: h }), n.block(g), s.result(f, () => s.reset(), () => s.error(!0));
      function g() {
        c.forEach((P, _) => {
          let m;
          (0, t.alwaysValidSchema)(u, P) ? n.var(d, !0) : m = s.subschema({
            keyword: "oneOf",
            schemaProp: _,
            compositeRule: !0
          }, d), _ > 0 && n.if((0, e._)`${d} && ${f}`).assign(f, !1).assign(h, (0, e._)`[${h}, ${_}]`).else(), n.if(d, () => {
            n.assign(f, !0), n.assign(h, _), m && s.mergeEvaluated(m, e.Name);
          });
        });
      }
    }
  };
  return ei.default = i, ei;
}
var ti = {}, To;
function Yd() {
  if (To) return ti;
  To = 1, Object.defineProperty(ti, "__esModule", { value: !0 });
  const e = fe(), t = {
    keyword: "allOf",
    schemaType: "array",
    code(r) {
      const { gen: i, schema: s, it: n } = r;
      if (!Array.isArray(s))
        throw new Error("ajv implementation error");
      const a = i.name("valid");
      s.forEach((o, u) => {
        if ((0, e.alwaysValidSchema)(n, o))
          return;
        const c = r.subschema({ keyword: "allOf", schemaProp: u }, a);
        r.ok(a), r.mergeEvaluated(c);
      });
    }
  };
  return ti.default = t, ti;
}
var ri = {}, Ro;
function Xd() {
  if (Ro) return ri;
  Ro = 1, Object.defineProperty(ri, "__esModule", { value: !0 });
  const e = se(), t = fe(), i = {
    keyword: "if",
    schemaType: ["object", "boolean"],
    trackErrors: !0,
    error: {
      message: ({ params: n }) => (0, e.str)`must match "${n.ifClause}" schema`,
      params: ({ params: n }) => (0, e._)`{failingKeyword: ${n.ifClause}}`
    },
    code(n) {
      const { gen: a, parentSchema: o, it: u } = n;
      o.then === void 0 && o.else === void 0 && (0, t.checkStrictMode)(u, '"if" without "then" and "else" is ignored');
      const c = s(u, "then"), f = s(u, "else");
      if (!c && !f)
        return;
      const h = a.let("valid", !0), d = a.name("_valid");
      if (g(), n.reset(), c && f) {
        const _ = a.let("ifClause");
        n.setParams({ ifClause: _ }), a.if(d, P("then", _), P("else", _));
      } else c ? a.if(d, P("then")) : a.if((0, e.not)(d), P("else"));
      n.pass(h, () => n.error(!0));
      function g() {
        const _ = n.subschema({
          keyword: "if",
          compositeRule: !0,
          createErrors: !1,
          allErrors: !1
        }, d);
        n.mergeEvaluated(_);
      }
      function P(_, m) {
        return () => {
          const v = n.subschema({ keyword: _ }, d);
          a.assign(h, d), n.mergeValidEvaluated(v, h), m ? a.assign(m, (0, e._)`${_}`) : n.setParams({ ifClause: _ });
        };
      }
    }
  };
  function s(n, a) {
    const o = n.schema[a];
    return o !== void 0 && !(0, t.alwaysValidSchema)(n, o);
  }
  return ri.default = i, ri;
}
var ni = {}, jo;
function Qd() {
  if (jo) return ni;
  jo = 1, Object.defineProperty(ni, "__esModule", { value: !0 });
  const e = fe(), t = {
    keyword: ["then", "else"],
    schemaType: ["object", "boolean"],
    code({ keyword: r, parentSchema: i, it: s }) {
      i.if === void 0 && (0, e.checkStrictMode)(s, `"${r}" without "if" is ignored`);
    }
  };
  return ni.default = t, ni;
}
var Mo;
function Zd() {
  if (Mo) return Hn;
  Mo = 1, Object.defineProperty(Hn, "__esModule", { value: !0 });
  const e = sl(), t = Ud(), r = ol(), i = Fd(), s = Wd(), n = Vd(), a = Gd(), o = ul(), u = Hd(), c = zd(), f = Kd(), h = Bd(), d = Jd(), g = Yd(), P = Xd(), _ = Qd();
  function m(v = !1) {
    const l = [
      // any
      f.default,
      h.default,
      d.default,
      g.default,
      P.default,
      _.default,
      // object
      a.default,
      o.default,
      n.default,
      u.default,
      c.default
    ];
    return v ? l.push(t.default, i.default) : l.push(e.default, r.default), l.push(s.default), l;
  }
  return Hn.default = m, Hn;
}
var ii = {}, ai = {}, No;
function xd() {
  if (No) return ai;
  No = 1, Object.defineProperty(ai, "__esModule", { value: !0 });
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
      const { gen: n, data: a, $data: o, schema: u, schemaCode: c, it: f } = i, { opts: h, errSchemaPath: d, schemaEnv: g, self: P } = f;
      if (!h.validateFormats)
        return;
      o ? _() : m();
      function _() {
        const v = n.scopeValue("formats", {
          ref: P.formats,
          code: h.code.formats
        }), l = n.const("fDef", (0, e._)`${v}[${c}]`), p = n.let("fType"), y = n.let("format");
        n.if((0, e._)`typeof ${l} == "object" && !(${l} instanceof RegExp)`, () => n.assign(p, (0, e._)`${l}.type || "string"`).assign(y, (0, e._)`${l}.validate`), () => n.assign(p, (0, e._)`"string"`).assign(y, l)), i.fail$data((0, e.or)(w(), b()));
        function w() {
          return h.strictSchema === !1 ? e.nil : (0, e._)`${c} && !${y}`;
        }
        function b() {
          const E = g.$async ? (0, e._)`(${l}.async ? await ${y}(${a}) : ${y}(${a}))` : (0, e._)`${y}(${a})`, S = (0, e._)`(typeof ${y} == "function" ? ${E} : ${y}.test(${a}))`;
          return (0, e._)`${y} && ${y} !== true && ${p} === ${s} && !${S}`;
        }
      }
      function m() {
        const v = P.formats[u];
        if (!v) {
          w();
          return;
        }
        if (v === !0)
          return;
        const [l, p, y] = b(v);
        l === s && i.pass(E());
        function w() {
          if (h.strictSchema === !1) {
            P.logger.warn(S());
            return;
          }
          throw new Error(S());
          function S() {
            return `unknown format "${u}" ignored in schema at path "${d}"`;
          }
        }
        function b(S) {
          const O = S instanceof RegExp ? (0, e.regexpCode)(S) : h.code.formats ? (0, e._)`${h.code.formats}${(0, e.getProperty)(u)}` : void 0, C = n.scopeValue("formats", { key: u, ref: S, code: O });
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
  return ai.default = r, ai;
}
var Io;
function ef() {
  if (Io) return ii;
  Io = 1, Object.defineProperty(ii, "__esModule", { value: !0 });
  const t = [xd().default];
  return ii.default = t, ii;
}
var Qt = {}, Co;
function tf() {
  return Co || (Co = 1, Object.defineProperty(Qt, "__esModule", { value: !0 }), Qt.contentVocabulary = Qt.metadataVocabulary = void 0, Qt.metadataVocabulary = [
    "title",
    "description",
    "default",
    "deprecated",
    "readOnly",
    "writeOnly",
    "examples"
  ], Qt.contentVocabulary = [
    "contentMediaType",
    "contentEncoding",
    "contentSchema"
  ]), Qt;
}
var Ao;
function rf() {
  if (Ao) return Tn;
  Ao = 1, Object.defineProperty(Tn, "__esModule", { value: !0 });
  const e = Dd(), t = kd(), r = Zd(), i = ef(), s = tf(), n = [
    e.default,
    t.default,
    (0, r.default)(),
    i.default,
    s.metadataVocabulary,
    s.contentVocabulary
  ];
  return Tn.default = n, Tn;
}
var si = {}, Gr = {}, Lo;
function nf() {
  if (Lo) return Gr;
  Lo = 1, Object.defineProperty(Gr, "__esModule", { value: !0 }), Gr.DiscrError = void 0;
  var e;
  return function(t) {
    t.Tag = "tag", t.Mapping = "mapping";
  }(e || (Gr.DiscrError = e = {})), Gr;
}
var qo;
function af() {
  if (qo) return si;
  qo = 1, Object.defineProperty(si, "__esModule", { value: !0 });
  const e = se(), t = nf(), r = Sa(), i = Mi(), s = fe(), a = {
    keyword: "discriminator",
    type: "object",
    schemaType: "object",
    error: {
      message: ({ params: { discrError: o, tagName: u } }) => o === t.DiscrError.Tag ? `tag "${u}" must be string` : `value of tag "${u}" must be in oneOf`,
      params: ({ params: { discrError: o, tag: u, tagName: c } }) => (0, e._)`{error: ${o}, tag: ${c}, tagValue: ${u}}`
    },
    code(o) {
      const { gen: u, data: c, schema: f, parentSchema: h, it: d } = o, { oneOf: g } = h;
      if (!d.opts.discriminator)
        throw new Error("discriminator: requires discriminator option");
      const P = f.propertyName;
      if (typeof P != "string")
        throw new Error("discriminator: requires propertyName");
      if (f.mapping)
        throw new Error("discriminator: mapping is not supported");
      if (!g)
        throw new Error("discriminator: requires oneOf keyword");
      const _ = u.let("valid", !1), m = u.const("tag", (0, e._)`${c}${(0, e.getProperty)(P)}`);
      u.if((0, e._)`typeof ${m} == "string"`, () => v(), () => o.error(!1, { discrError: t.DiscrError.Tag, tag: m, tagName: P })), o.ok(_);
      function v() {
        const y = p();
        u.if(!1);
        for (const w in y)
          u.elseIf((0, e._)`${m} === ${w}`), u.assign(_, l(y[w]));
        u.else(), o.error(!1, { discrError: t.DiscrError.Mapping, tag: m, tagName: P }), u.endIf();
      }
      function l(y) {
        const w = u.name("valid"), b = o.subschema({ keyword: "oneOf", schemaProp: y }, w);
        return o.mergeEvaluated(b, e.Name), w;
      }
      function p() {
        var y;
        const w = {}, b = S(h);
        let E = !0;
        for (let k = 0; k < g.length; k++) {
          let H = g[k];
          if (H != null && H.$ref && !(0, s.schemaHasRulesButRef)(H, d.self.RULES)) {
            const G = H.$ref;
            if (H = r.resolveRef.call(d.self, d.schemaEnv.root, d.baseId, G), H instanceof r.SchemaEnv && (H = H.schema), H === void 0)
              throw new i.default(d.opts.uriResolver, d.baseId, G);
          }
          const F = (y = H == null ? void 0 : H.properties) === null || y === void 0 ? void 0 : y[P];
          if (typeof F != "object")
            throw new Error(`discriminator: oneOf subschemas (or referenced schemas) must have "properties/${P}"`);
          E = E && (b || S(H)), O(F, k);
        }
        if (!E)
          throw new Error(`discriminator: "${P}" must be required`);
        return w;
        function S({ required: k }) {
          return Array.isArray(k) && k.includes(P);
        }
        function O(k, H) {
          if (k.const)
            C(k.const, H);
          else if (k.enum)
            for (const F of k.enum)
              C(F, H);
          else
            throw new Error(`discriminator: "properties/${P}" must have "const" or "enum"`);
        }
        function C(k, H) {
          if (typeof k != "string" || k in w)
            throw new Error(`discriminator: "${P}" values must be unique strings`);
          w[k] = H;
        }
      }
    }
  };
  return si.default = a, si;
}
const sf = "http://json-schema.org/draft-07/schema#", of = "http://json-schema.org/draft-07/schema#", uf = "Core schema meta-schema", lf = { schemaArray: { type: "array", minItems: 1, items: { $ref: "#" } }, nonNegativeInteger: { type: "integer", minimum: 0 }, nonNegativeIntegerDefault0: { allOf: [{ $ref: "#/definitions/nonNegativeInteger" }, { default: 0 }] }, simpleTypes: { enum: ["array", "boolean", "integer", "null", "number", "object", "string"] }, stringArray: { type: "array", items: { type: "string" }, uniqueItems: !0, default: [] } }, cf = ["object", "boolean"], df = { $id: { type: "string", format: "uri-reference" }, $schema: { type: "string", format: "uri" }, $ref: { type: "string", format: "uri-reference" }, $comment: { type: "string" }, title: { type: "string" }, description: { type: "string" }, default: !0, readOnly: { type: "boolean", default: !1 }, examples: { type: "array", items: !0 }, multipleOf: { type: "number", exclusiveMinimum: 0 }, maximum: { type: "number" }, exclusiveMaximum: { type: "number" }, minimum: { type: "number" }, exclusiveMinimum: { type: "number" }, maxLength: { $ref: "#/definitions/nonNegativeInteger" }, minLength: { $ref: "#/definitions/nonNegativeIntegerDefault0" }, pattern: { type: "string", format: "regex" }, additionalItems: { $ref: "#" }, items: { anyOf: [{ $ref: "#" }, { $ref: "#/definitions/schemaArray" }], default: !0 }, maxItems: { $ref: "#/definitions/nonNegativeInteger" }, minItems: { $ref: "#/definitions/nonNegativeIntegerDefault0" }, uniqueItems: { type: "boolean", default: !1 }, contains: { $ref: "#" }, maxProperties: { $ref: "#/definitions/nonNegativeInteger" }, minProperties: { $ref: "#/definitions/nonNegativeIntegerDefault0" }, required: { $ref: "#/definitions/stringArray" }, additionalProperties: { $ref: "#" }, definitions: { type: "object", additionalProperties: { $ref: "#" }, default: {} }, properties: { type: "object", additionalProperties: { $ref: "#" }, default: {} }, patternProperties: { type: "object", additionalProperties: { $ref: "#" }, propertyNames: { format: "regex" }, default: {} }, dependencies: { type: "object", additionalProperties: { anyOf: [{ $ref: "#" }, { $ref: "#/definitions/stringArray" }] } }, propertyNames: { $ref: "#" }, const: !0, enum: { type: "array", items: !0, minItems: 1, uniqueItems: !0 }, type: { anyOf: [{ $ref: "#/definitions/simpleTypes" }, { type: "array", items: { $ref: "#/definitions/simpleTypes" }, minItems: 1, uniqueItems: !0 }] }, format: { type: "string" }, contentMediaType: { type: "string" }, contentEncoding: { type: "string" }, if: { $ref: "#" }, then: { $ref: "#" }, else: { $ref: "#" }, allOf: { $ref: "#/definitions/schemaArray" }, anyOf: { $ref: "#/definitions/schemaArray" }, oneOf: { $ref: "#/definitions/schemaArray" }, not: { $ref: "#" } }, ff = {
  $schema: sf,
  $id: of,
  title: uf,
  definitions: lf,
  type: cf,
  properties: df,
  default: !0
};
var ko;
function hf() {
  return ko || (ko = 1, function(e, t) {
    Object.defineProperty(t, "__esModule", { value: !0 }), t.MissingRefError = t.ValidationError = t.CodeGen = t.Name = t.nil = t.stringify = t.str = t._ = t.KeywordCxt = t.Ajv = void 0;
    const r = $d(), i = rf(), s = af(), n = ff, a = ["/properties"], o = "http://json-schema.org/draft-07/schema";
    class u extends r.default {
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
    t.Ajv = u, e.exports = t = u, e.exports.Ajv = u, Object.defineProperty(t, "__esModule", { value: !0 }), t.default = u;
    var c = ji();
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
    var h = Ea();
    Object.defineProperty(t, "ValidationError", { enumerable: !0, get: function() {
      return h.default;
    } });
    var d = Mi();
    Object.defineProperty(t, "MissingRefError", { enumerable: !0, get: function() {
      return d.default;
    } });
  }($n, $n.exports)), $n.exports;
}
var Xi = {}, Hr = {}, Uo;
function mf() {
  return Uo || (Uo = 1, Object.defineProperty(Hr, "__esModule", { value: !0 }), Hr.PluginDefineAttributesSchema = void 0, Hr.PluginDefineAttributesSchema = {
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
var zr = {}, Fo;
function pf() {
  return Fo || (Fo = 1, Object.defineProperty(zr, "__esModule", { value: !0 }), zr.PluginDefineElementAttributesSchema = void 0, zr.PluginDefineElementAttributesSchema = {
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
  }), zr;
}
var Kr = {}, Wo;
function vf() {
  return Wo || (Wo = 1, Object.defineProperty(Kr, "__esModule", { value: !0 }), Kr.PluginDefineElementEventsSchema = void 0, Kr.PluginDefineElementEventsSchema = {
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
  }), Kr;
}
var Br = {}, Vo;
function gf() {
  return Vo || (Vo = 1, Object.defineProperty(Br, "__esModule", { value: !0 }), Br.PluginDefineElementPropertiesSchema = void 0, Br.PluginDefineElementPropertiesSchema = {
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
  }), Br;
}
var Jr = {}, Go;
function _f() {
  return Go || (Go = 1, Object.defineProperty(Jr, "__esModule", { value: !0 }), Jr.PluginDefineElementSchema = void 0, Jr.PluginDefineElementSchema = {
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
var Yr = {}, Ho;
function yf() {
  return Ho || (Ho = 1, Object.defineProperty(Yr, "__esModule", { value: !0 }), Yr.PluginDefineElementsSchema = void 0, Yr.PluginDefineElementsSchema = {
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
  }), Yr;
}
var Xr = {}, zo;
function Pf() {
  return zo || (zo = 1, Object.defineProperty(Xr, "__esModule", { value: !0 }), Xr.PluginDefinePropertiesSchema = void 0, Xr.PluginDefinePropertiesSchema = {
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
  }), Xr;
}
var Qr = {}, Ko;
function wf() {
  return Ko || (Ko = 1, Object.defineProperty(Qr, "__esModule", { value: !0 }), Qr.PluginDefineSchema = void 0, Qr.PluginDefineSchema = {
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
  }), Qr;
}
var Zr = {}, Bo;
function bf() {
  return Bo || (Bo = 1, Object.defineProperty(Zr, "__esModule", { value: !0 }), Zr.PluginDefinesSchema = void 0, Zr.PluginDefinesSchema = {
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
  }), Zr;
}
var xr = {}, Jo;
function $f() {
  return Jo || (Jo = 1, Object.defineProperty(xr, "__esModule", { value: !0 }), xr.PluginProvideAttributesSchema = void 0, xr.PluginProvideAttributesSchema = {
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
  }), xr;
}
var en = {}, Yo;
function Ef() {
  return Yo || (Yo = 1, Object.defineProperty(en, "__esModule", { value: !0 }), en.PluginProvideElementSchema = void 0, en.PluginProvideElementSchema = {
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
  }), en;
}
var tn = {}, Xo;
function Sf() {
  return Xo || (Xo = 1, Object.defineProperty(tn, "__esModule", { value: !0 }), tn.PluginProvideElementsSchema = void 0, tn.PluginProvideElementsSchema = {
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
  }), tn;
}
var rn = {}, Qo;
function Df() {
  return Qo || (Qo = 1, Object.defineProperty(rn, "__esModule", { value: !0 }), rn.PluginProvidePropertiesSchema = void 0, rn.PluginProvidePropertiesSchema = {
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
  }), rn;
}
var nn = {}, Zo;
function Of() {
  return Zo || (Zo = 1, Object.defineProperty(nn, "__esModule", { value: !0 }), nn.PluginProvideSchema = void 0, nn.PluginProvideSchema = {
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
  }), nn;
}
var an = {}, xo;
function Tf() {
  return xo || (xo = 1, Object.defineProperty(an, "__esModule", { value: !0 }), an.PluginProvidesSchema = void 0, an.PluginProvidesSchema = {
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
  }), an;
}
var Qi = {}, eu;
function Rf() {
  return eu || (eu = 1, function(e) {
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
  }(Qi)), Qi;
}
var tu;
function jf() {
  return tu || (tu = 1, function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.PluginSchema = e.PluginProvidesSchema = e.PluginProvideSchema = e.PluginProvidePropertiesSchema = e.PluginProvideElementsSchema = e.PluginProvideElementSchema = e.PluginProvideAttributesSchema = e.PluginDefinesSchema = e.PluginDefineSchema = e.PluginDefinePropertiesSchema = e.PluginDefineElementsSchema = e.PluginDefineElementSchema = e.PluginDefineElementPropertiesSchema = e.PluginDefineElementEventsSchema = e.PluginDefineElementAttributesSchema = e.PluginDefineAttributesSchema = void 0;
    var t = mf();
    Object.defineProperty(e, "PluginDefineAttributesSchema", { enumerable: !0, get: function() {
      return t.PluginDefineAttributesSchema;
    } });
    var r = pf();
    Object.defineProperty(e, "PluginDefineElementAttributesSchema", { enumerable: !0, get: function() {
      return r.PluginDefineElementAttributesSchema;
    } });
    var i = vf();
    Object.defineProperty(e, "PluginDefineElementEventsSchema", { enumerable: !0, get: function() {
      return i.PluginDefineElementEventsSchema;
    } });
    var s = gf();
    Object.defineProperty(e, "PluginDefineElementPropertiesSchema", { enumerable: !0, get: function() {
      return s.PluginDefineElementPropertiesSchema;
    } });
    var n = _f();
    Object.defineProperty(e, "PluginDefineElementSchema", { enumerable: !0, get: function() {
      return n.PluginDefineElementSchema;
    } });
    var a = yf();
    Object.defineProperty(e, "PluginDefineElementsSchema", { enumerable: !0, get: function() {
      return a.PluginDefineElementsSchema;
    } });
    var o = Pf();
    Object.defineProperty(e, "PluginDefinePropertiesSchema", { enumerable: !0, get: function() {
      return o.PluginDefinePropertiesSchema;
    } });
    var u = wf();
    Object.defineProperty(e, "PluginDefineSchema", { enumerable: !0, get: function() {
      return u.PluginDefineSchema;
    } });
    var c = bf();
    Object.defineProperty(e, "PluginDefinesSchema", { enumerable: !0, get: function() {
      return c.PluginDefinesSchema;
    } });
    var f = $f();
    Object.defineProperty(e, "PluginProvideAttributesSchema", { enumerable: !0, get: function() {
      return f.PluginProvideAttributesSchema;
    } });
    var h = Ef();
    Object.defineProperty(e, "PluginProvideElementSchema", { enumerable: !0, get: function() {
      return h.PluginProvideElementSchema;
    } });
    var d = Sf();
    Object.defineProperty(e, "PluginProvideElementsSchema", { enumerable: !0, get: function() {
      return d.PluginProvideElementsSchema;
    } });
    var g = Df();
    Object.defineProperty(e, "PluginProvidePropertiesSchema", { enumerable: !0, get: function() {
      return g.PluginProvidePropertiesSchema;
    } });
    var P = Of();
    Object.defineProperty(e, "PluginProvideSchema", { enumerable: !0, get: function() {
      return P.PluginProvideSchema;
    } });
    var _ = Tf();
    Object.defineProperty(e, "PluginProvidesSchema", { enumerable: !0, get: function() {
      return _.PluginProvidesSchema;
    } });
    var m = Rf();
    Object.defineProperty(e, "PluginSchema", { enumerable: !0, get: function() {
      return m.PluginSchema;
    } });
  }(Xi)), Xi;
}
var ru;
function Mf() {
  if (ru) return gt;
  ru = 1;
  var e = gt && gt.__importDefault || function(n) {
    return n && n.__esModule ? n : { default: n };
  };
  Object.defineProperty(gt, "__esModule", { value: !0 }), gt.getValidator = gt.validate = void 0;
  const t = e(hf()), r = jf(), i = new t.default({
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
  gt.validate = i.getSchema("WardPluginSchema");
  const s = () => i.getSchema("WardPluginSchema");
  return gt.getValidator = s, gt;
}
var nu;
function Nf() {
  return nu || (nu = 1, function(e) {
    var t = vt && vt.__awaiter || function(h, d, g, P) {
      function _(m) {
        return m instanceof g ? m : new g(function(v) {
          v(m);
        });
      }
      return new (g || (g = Promise))(function(m, v) {
        function l(w) {
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
          w.done ? m(w.value) : _(w.value).then(l, p);
        }
        y((P = P.apply(h, d || [])).next());
      });
    }, r = vt && vt.__classPrivateFieldGet || function(h, d, g, P) {
      if (g === "a" && !P) throw new TypeError("Private accessor was defined without a getter");
      if (typeof d == "function" ? h !== d || !P : !d.has(h)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
      return g === "m" ? P : g === "a" ? P.call(h) : P ? P.value : d.get(h);
    }, i = vt && vt.__classPrivateFieldSet || function(h, d, g, P, _) {
      if (P === "m") throw new TypeError("Private method is not writable");
      if (P === "a" && !_) throw new TypeError("Private accessor was defined without a setter");
      if (typeof d == "function" ? h !== d || !_ : !d.has(h)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
      return P === "a" ? _.call(h, g) : _ ? _.value = g : d.set(h, g), g;
    }, s, n, a, o, u;
    Object.defineProperty(e, "__esModule", { value: !0 }), e.PluginLoadStates = void 0;
    const c = Mf();
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
            P = yield r(this, s, "m", u).call(this, g), r(this, n, "f")[d].data = P;
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
    }, u = function(d) {
      return t(this, void 0, void 0, function* () {
        return yield d.json();
      });
    }, e.default = f;
  }(vt)), vt;
}
var iu;
function If() {
  if (iu) return Ue;
  iu = 1;
  var e = Ue && Ue.__awaiter || function(E, S, O, C) {
    function k(H) {
      return H instanceof O ? H : new O(function(F) {
        F(H);
      });
    }
    return new (O || (O = Promise))(function(H, F) {
      function G(Z) {
        try {
          x(C.next(Z));
        } catch (X) {
          F(X);
        }
      }
      function J(Z) {
        try {
          x(C.throw(Z));
        } catch (X) {
          F(X);
        }
      }
      function x(Z) {
        Z.done ? H(Z.value) : k(Z.value).then(G, J);
      }
      x((C = C.apply(E, S || [])).next());
    });
  }, t = Ue && Ue.__classPrivateFieldSet || function(E, S, O, C, k) {
    if (C === "m") throw new TypeError("Private method is not writable");
    if (C === "a" && !k) throw new TypeError("Private accessor was defined without a setter");
    if (typeof S == "function" ? E !== S || !k : !S.has(E)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return C === "a" ? k.call(E, O) : k ? k.value = O : S.set(E, O), O;
  }, r = Ue && Ue.__classPrivateFieldGet || function(E, S, O, C) {
    if (O === "a" && !C) throw new TypeError("Private accessor was defined without a getter");
    if (typeof S == "function" ? E !== S || !C : !S.has(E)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return O === "m" ? C : O === "a" ? C.call(E) : C ? C.value : S.get(E);
  }, i = Ue && Ue.__importDefault || function(E) {
    return E && E.__esModule ? E : { default: E };
  }, s, n, a, o, u, c, f, h, d, g, P, _, m;
  Object.defineProperty(Ue, "__esModule", { value: !0 });
  const v = wn(), l = i(rd()), p = i(ad()), y = Pn(), w = i(Nf());
  let b = class {
    constructor(S, O) {
      s.add(this), n.set(this, void 0), a.set(this, -1), o.set(this, void 0), u.set(this, []), c.set(this, {}), f.set(this, {}), h.set(this, {}), d.set(this, void 0), t(this, n, S || new w.default(), "f"), t(this, d, new v.Logger("PluginManager", O), "f");
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
      return r(this, h, "f");
    }
    getProviders(S) {
      return Object.values(r(this, h, "f")).filter((O) => O.definition === S);
    }
    getProvider(S) {
      return r(this, h, "f")[S];
    }
    register(S) {
      return r(this, u, "f").push(S), () => this.unregister(S);
    }
    unregister(S) {
      t(this, u, y.ArrayUtils.removeElement(r(this, u, "f"), S), "f");
    }
    notify() {
      r(this, u, "f").forEach((S) => {
        S(this.data);
      });
    }
    reset(S = !0) {
      r(this, n, "f").reset(), t(this, c, {}, "f"), t(this, f, {}, "f"), t(this, h, {}, "f"), S && this.notify();
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
  return n = /* @__PURE__ */ new WeakMap(), a = /* @__PURE__ */ new WeakMap(), o = /* @__PURE__ */ new WeakMap(), u = /* @__PURE__ */ new WeakMap(), c = /* @__PURE__ */ new WeakMap(), f = /* @__PURE__ */ new WeakMap(), h = /* @__PURE__ */ new WeakMap(), d = /* @__PURE__ */ new WeakMap(), s = /* @__PURE__ */ new WeakSet(), g = function E(S, O) {
    return e(this, void 0, void 0, function* () {
      if (clearInterval(r(this, o, "f")), r(this, n, "f").hasData(S))
        return this.logger.warn(`URL already loaded: '${S}'`), !0;
      if (!(yield r(this, n, "f").load(S)))
        return this.logger.warn(`Failed to load plugin from: '${S}'`), this.logger.warn(r(this, n, "f").getErrors(S).join(`
`)), !1;
      const k = r(this, n, "f").getData(S);
      if (r(this, c, "f")[k.name]) {
        const F = r(this, c, "f")[k.name].loadUrl;
        return this.logger.warn(`Plugin '${k.name}' from '${k.url}' already registered from '${F}'`), !1;
      }
      const H = new l.default(S, k);
      r(this, c, "f")[k.name] = H, yield Promise.allSettled((k.dependencies || []).map((F) => r(this, s, "m", E).call(this, F, k.name)));
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
    t(this, f, {}, "f"), t(this, h, {}, "f"), Object.values(this.roots).forEach((S) => r(this, s, "m", _).call(this, S)), Object.values(this.roots).forEach((S) => r(this, s, "m", m).call(this, S));
  }, _ = function E(S) {
    S.defines.forEach((O) => {
      this.getDefinition(O.name) ? this.logger.warn(`Defines '${O.name}' from '${S.name}' is already registered from ${this.getDefinition(O.name).plugin}`) : r(this, f, "f")[O.name] = O;
    }), S.dependencies.forEach((O) => {
      if (r(this, n, "f").isLoaded(O)) {
        const C = r(this, n, "f").getData(O), k = this.getPlugin(C.name);
        r(this, s, "m", E).call(this, k);
      }
    });
  }, m = function E(S) {
    S.provides.forEach((O) => {
      const C = this.getDefinition(O.define);
      if (!C)
        this.logger.warn(`Provides '${O.name}' from '${S.name}' has no definition '${O.define}'`);
      else {
        const k = new p.default(S.url, C, O);
        r(this, h, "f")[k.name] = k;
      }
    }), S.dependencies.forEach((O) => {
      if (r(this, n, "f").isLoaded(O)) {
        const C = r(this, n, "f").getData(O), k = this.getPlugin(C.name);
        r(this, s, "m", E).call(this, k);
      }
    });
  }, Ue.default = b, Ue;
}
var wt = {}, Gt = {}, sn = {}, au;
function ll() {
  return au || (au = 1, Object.defineProperty(sn, "__esModule", { value: !0 }), sn.MessageServiceTypes = void 0, sn.MessageServiceTypes = {
    EVENT: "event",
    FRAME: "frame",
    NAVIGATION: "navigation"
  }), sn;
}
var su;
function Cf() {
  if (su) return Gt;
  su = 1;
  var e = Gt && Gt.__classPrivateFieldSet || function(v, l, p, y, w) {
    if (y === "m") throw new TypeError("Private method is not writable");
    if (y === "a" && !w) throw new TypeError("Private accessor was defined without a setter");
    if (typeof l == "function" ? v !== l || !w : !l.has(v)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return y === "a" ? w.call(v, p) : w ? w.value = p : l.set(v, p), p;
  }, t = Gt && Gt.__classPrivateFieldGet || function(v, l, p, y) {
    if (p === "a" && !y) throw new TypeError("Private accessor was defined without a getter");
    if (typeof l == "function" ? v !== l || !y : !l.has(v)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return p === "m" ? y : p === "a" ? y.call(v) : y ? y.value : l.get(v);
  }, r, i, s, n, a, o, u, c, f, h;
  Object.defineProperty(Gt, "__esModule", { value: !0 });
  const d = Pn(), g = wn(), P = ll(), _ = cl();
  let m = class {
    constructor(l, p, y, w, b, E, S) {
      r.add(this), i.set(this, void 0), s.set(this, void 0), n.set(this, void 0), a.set(this, void 0), o.set(this, void 0), u.set(this, void 0), c.set(this, void 0), e(this, c, new g.Logger("FrameService", S), "f"), e(this, s, l, "f"), e(this, i, E || d.UUID.next(), "f"), e(this, a, p, "f"), e(this, o, y, "f"), e(this, u, w, "f"), e(this, n, b, "f"), this.logger.info(`[DISP-${this.dispatcherId}/FRAME-${this.id}] created`), t(this, a, "f").addEventListener("message", t(this, r, "m", h).bind(this)), t(this, a, "f").addEventListener("beforeUnload", t(this, r, "m", f).bind(this));
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
    onMessage(l) {
      this.logger.info(`[DISP-${this.dispatcherId}/FRAME-${this.id}] onMessage ${l.type}`), t(this, o, "f").closed ? (this.logger.info(`[DISP-${this.dispatcherId}/FRAME-${this.id}] onMessage /!\\ window closed /!\\`), this.terminate()) : (this.logger.debug(`[DISP-${this.dispatcherId}/FRAME-${this.id}] onMessage posting message to ${t(this, u, "f")}`), t(this, o, "f").postMessage(Object.assign(Object.assign({}, l), { _serviceId: t(this, i, "f") }), t(this, u, "f")));
    }
    sendMessage(l) {
      this.logger.debug(`[DISP-${this.dispatcherId}/FRAME-${this.id}] sendMessage ${l.type}`), t(this, s, "f").sendMessage(Object.assign(Object.assign({}, l), { _serviceId: this.id }));
    }
    terminate() {
      this.logger.info(`[DISP-${this.dispatcherId}/FRAME-${this.id}] terminate`), t(this, s, "f").removeService(this);
    }
  };
  return i = /* @__PURE__ */ new WeakMap(), s = /* @__PURE__ */ new WeakMap(), n = /* @__PURE__ */ new WeakMap(), a = /* @__PURE__ */ new WeakMap(), o = /* @__PURE__ */ new WeakMap(), u = /* @__PURE__ */ new WeakMap(), c = /* @__PURE__ */ new WeakMap(), r = /* @__PURE__ */ new WeakSet(), f = function() {
    this.onMessage({
      type: _.CONNECTION_CLOSING,
      _dispatcherId: this.dispatcherId,
      payload: {}
    }), this.terminate();
  }, h = function(l) {
    const p = l.data || {};
    p._serviceId && p._dispatcherId && p._dispatcherId === t(this, n, "f") && (this.logger.debug(`[DISP-${this.dispatcherId}/FRAME-${this.id}] handleMessage ${l.data.type}`), p.type === _.CONNECTION_CLOSING ? this.terminate() : this.sendMessage({
      _serviceId: t(this, i, "f"),
      type: p.type,
      payload: p.payload
    }));
  }, Gt.default = m, Gt;
}
var ou;
function cl() {
  return ou || (ou = 1, function(e) {
    var t = wt && wt.__classPrivateFieldSet || function(p, y, w, b, E) {
      if (b === "m") throw new TypeError("Private method is not writable");
      if (b === "a" && !E) throw new TypeError("Private accessor was defined without a setter");
      if (typeof y == "function" ? p !== y || !E : !y.has(p)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
      return b === "a" ? E.call(p, w) : E ? E.value = w : y.set(p, w), w;
    }, r = wt && wt.__classPrivateFieldGet || function(p, y, w, b) {
      if (w === "a" && !b) throw new TypeError("Private accessor was defined without a getter");
      if (typeof y == "function" ? p !== y || !b : !y.has(p)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
      return w === "m" ? b : w === "a" ? b.call(p) : b ? b.value : y.get(p);
    }, i = wt && wt.__importDefault || function(p) {
      return p && p.__esModule ? p : { default: p };
    }, s, n, a, o, u, c, f, h, d, g, P;
    Object.defineProperty(e, "__esModule", { value: !0 }), e.CONNECTION_CLOSING = e.CONNECTION_ACKNOWLEDGE = e.CONNECTION_REQUEST = void 0;
    const _ = Pn(), m = wn(), v = i(Cf());
    e.CONNECTION_REQUEST = "__CONNNECTION_REQUEST__", e.CONNECTION_ACKNOWLEDGE = "__CONNECTION_ACKNOWLEDGE__", e.CONNECTION_CLOSING = "__CONNNECTION_CLOSING__";
    let l = class {
      constructor(y, w) {
        s.add(this), n.set(this, void 0), a.set(this, []), o.set(this, []), u.set(this, void 0), c.set(this, []), f.set(this, void 0), t(this, u, new m.Logger("MessageDispatcher", w), "f"), t(this, n, y || _.UUID.next(), "f"), this.logger.info(`[DISP-${this.id}] created`), t(this, f, r(this, s, "m", h).bind(this, window), "f"), window.addEventListener("message", r(this, f, "f")), window !== window.parent ? (this.logger.info(`[DISP-${this.id}] contact parent`), window.parent.postMessage({
          _dispatcherId: r(this, n, "f"),
          type: e.CONNECTION_REQUEST
        }, "*")) : window.documentPictureInPicture && window.documentPictureInPicture.addEventListener("enter", (b) => {
          const E = b.window;
          E.addEventListener("message", r(this, s, "m", h).bind(this, E));
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
        return r(this, u, "f");
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
    n = /* @__PURE__ */ new WeakMap(), a = /* @__PURE__ */ new WeakMap(), o = /* @__PURE__ */ new WeakMap(), u = /* @__PURE__ */ new WeakMap(), c = /* @__PURE__ */ new WeakMap(), f = /* @__PURE__ */ new WeakMap(), s = /* @__PURE__ */ new WeakSet(), h = function(y, w) {
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
    }, e.default = l;
  }(wt)), wt;
}
var bt = {}, uu;
function lu() {
  if (uu) return bt;
  uu = 1;
  var e = bt && bt.__classPrivateFieldSet || function(f, h, d, g, P) {
    if (g === "m") throw new TypeError("Private method is not writable");
    if (g === "a" && !P) throw new TypeError("Private accessor was defined without a setter");
    if (typeof h == "function" ? f !== h || !P : !h.has(f)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return g === "a" ? P.call(f, d) : P ? P.value = d : h.set(f, d), d;
  }, t = bt && bt.__classPrivateFieldGet || function(f, h, d, g) {
    if (d === "a" && !g) throw new TypeError("Private accessor was defined without a getter");
    if (typeof h == "function" ? f !== h || !g : !h.has(f)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return d === "m" ? g : d === "a" ? g.call(f) : g ? g.value : h.get(f);
  }, r, i, s, n;
  Object.defineProperty(bt, "__esModule", { value: !0 }), bt.ServiceEvent = void 0;
  const a = Pn(), o = wn(), u = ll();
  let c = class {
    constructor(h, d, g) {
      r.set(this, void 0), i.set(this, void 0), s.set(this, []), n.set(this, void 0), e(this, n, new o.Logger("EventService", g), "f"), e(this, r, d || a.UUID.next(), "f"), e(this, i, h, "f"), t(this, i, "f").addService(this), this.logger.info(`[DISP-${this.dispatcherId}/EVENT-${this.id}] created`);
    }
    get id() {
      return t(this, r, "f");
    }
    get dispatcherId() {
      return t(this, i, "f").id;
    }
    get type() {
      return u.MessageServiceTypes.EVENT;
    }
    get logger() {
      return t(this, n, "f");
    }
    terminate() {
      this.logger.info(`[DISP-${this.dispatcherId}/EVENT-${this.id}] terminate`), e(this, s, [], "f"), t(this, i, "f").removeService(this);
    }
    addHandler(h) {
      return this.logger.debug(`[DISP-${this.dispatcherId}/EVENT-${this.id}] add handler`), t(this, s, "f").push(h), this.removeHandler.bind(this, h);
    }
    removeHandler(h) {
      this.logger.debug(`[DISP-${this.dispatcherId}/EVENT-${this.id}] add handler`), e(this, s, a.ArrayUtils.removeElement(t(this, s, "f"), h), "f");
    }
    onMessage(h) {
      this.logger.debug(`[DISP-${this.dispatcherId}/EVENT-${this.id}] onMessage`), t(this, s, "f").forEach((d) => {
        try {
          d(h);
        } catch (g) {
          this.logger.error(`[DISP-${this.dispatcherId}/EVENT-${this.id}] handler failed with error`), this.logger.error(`${g}`);
        }
      });
    }
    sendMessage(h) {
      this.logger.info(`[DISP-${this.dispatcherId}/EVENT-${this.id}] sendMessage`), t(this, i, "f").sendMessage(Object.assign(Object.assign({}, h), { _serviceId: this.id }));
    }
  };
  return bt.ServiceEvent = c, r = /* @__PURE__ */ new WeakMap(), i = /* @__PURE__ */ new WeakMap(), s = /* @__PURE__ */ new WeakMap(), n = /* @__PURE__ */ new WeakMap(), bt;
}
var cu;
function Af() {
  return cu || (cu = 1, function(e) {
    var t = ht && ht.__classPrivateFieldSet || function(w, b, E, S, O) {
      if (S === "m") throw new TypeError("Private method is not writable");
      if (S === "a" && !O) throw new TypeError("Private accessor was defined without a setter");
      if (typeof b == "function" ? w !== b || !O : !b.has(w)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
      return S === "a" ? O.call(w, E) : O ? O.value = E : b.set(w, E), E;
    }, r = ht && ht.__classPrivateFieldGet || function(w, b, E, S) {
      if (E === "a" && !S) throw new TypeError("Private accessor was defined without a getter");
      if (typeof b == "function" ? w !== b || !S : !b.has(w)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
      return E === "m" ? S : E === "a" ? S.call(w) : S ? S.value : b.get(w);
    }, i = ht && ht.__importDefault || function(w) {
      return w && w.__esModule ? w : { default: w };
    }, s, n, a, o, u, c, f, h;
    Object.defineProperty(e, "__esModule", { value: !0 }), e.WardVersion = e.Ward = e.ServiceEvent = void 0;
    const d = Pn(), g = i(If()), P = i(cl()), _ = lu(), m = wn();
    var v = lu();
    Object.defineProperty(e, "ServiceEvent", { enumerable: !0, get: function() {
      return v.ServiceEvent;
    } });
    class l {
      constructor(b, E, S) {
        n.set(this, void 0), a.set(this, void 0), o.set(this, void 0), u.set(this, []), c.set(this, []), f.set(this, []), h.set(this, new m.LogConfig()), t(this, n, b || d.UUID.next(), "f"), t(this, a, E || new g.default(void 0, this.logConfig), "f"), t(this, o, S || new P.default(void 0, this.logConfig), "f"), r(this, a, "f").register(this.notifyPlugins.bind(this)), r(this, o, "f").register(this.notifyServices.bind(this));
      }
      get id() {
        return r(this, n, "f");
      }
      get data() {
        return Object.assign(Object.assign({}, r(this, o, "f").data), r(this, a, "f").data);
      }
      get logConfig() {
        return r(this, h, "f");
      }
      register(b) {
        return r(this, u, "f").push(b), () => this.unregister(b);
      }
      unregister(b) {
        t(this, u, d.ArrayUtils.removeElement(r(this, u, "f"), b), "f");
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
        }), r(this, u, "f").forEach((b) => {
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
        }), r(this, u, "f").forEach((b) => {
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
    n = /* @__PURE__ */ new WeakMap(), a = /* @__PURE__ */ new WeakMap(), o = /* @__PURE__ */ new WeakMap(), u = /* @__PURE__ */ new WeakMap(), c = /* @__PURE__ */ new WeakMap(), f = /* @__PURE__ */ new WeakMap(), h = /* @__PURE__ */ new WeakMap();
    let p = "1.0.0", y;
    !((s = window.uncover) === null || s === void 0) && s.ward ? (console.warn(`Ward is already registered with version ${window.uncover.wardVersion || "older than 0.2.21"}`), y = window.uncover.ward, p = window.uncover.wardVersion) : (y = new l(), window.uncover = window.uncover || {}, window.uncover.ward = y, window.uncover.wardVersion = p), e.Ward = y, e.WardVersion = p;
  }(ht)), ht;
}
var $e = Af();
const ft = Xu({
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
$e.Ward.register(Lf);
function Lf() {
  ft.set($e.Ward.data);
}
const $r = Xu({
  type: null,
  id: null
});
var qf = /* @__PURE__ */ de("<ui5-tree-item></ui5-tree-item>", 2);
function kf(e, t) {
  ze(t, !1);
  const [r, i] = Mt(), s = () => jt(ft, "$WardStore", r), n = /* @__PURE__ */ ie();
  let a = br(t, "urlId", 8), o = /* @__PURE__ */ ie(), u = /* @__PURE__ */ ie();
  const c = $r.subscribe((m) => {
    ee(o, m.type), ee(u, m.id);
  });
  let f = /* @__PURE__ */ ie(), h = /* @__PURE__ */ ie(), d = /* @__PURE__ */ ie();
  wr(() => {
    j(d).setAttribute("data-attribute-type", "url"), j(d).setAttribute("data-attribute-id", a());
  }), yn(() => {
    c();
  }), Ce(
    () => (s(), or(a())),
    () => {
      ee(f, s().urls[a()]);
    }
  ), Ce(() => j(f), () => {
    ee(n, j(f).state === "LOADED" ? "Success" : j(f).state === "EXCLUDED" ? "Warning" : "Error");
  }), Ce(() => s(), () => {
    ee(h, s().roots);
  }), Rt(), tt();
  var g = nr(), P = Kt(g);
  {
    var _ = (m) => {
      var v = qf();
      K(v, "icon", "world"), le(() => K(v, "highlight", j(n))), le(() => K(v, "text", a())), le(() => K(v, "data-attribute-id", a())), le(() => K(v, "selected", j(o) === "url" && j(u) === a())), lt(v, (l) => ee(d, l), () => j(d)), re(m, v);
    };
    De(P, (m) => {
      a() && m(_);
    });
  }
  re(e, g), Ke(), i();
}
var Uf = /* @__PURE__ */ de('<ui5-panel><div style="width:100%;display:flex;align-items:center;" slot="header"><ui5-title> </ui5-title> <ui5-input></ui5-input> <ui5-button>Load plugin</ui5-button></div> <ui5-tree></ui5-tree></ui5-panel>', 2);
function Ff(e, t) {
  ze(t, !1);
  const [r, i] = Mt(), s = () => jt(ft, "$WardStore", r);
  let n = /* @__PURE__ */ ie(), a = /* @__PURE__ */ ie(), o = /* @__PURE__ */ ie(), u = /* @__PURE__ */ ie();
  wr(() => {
    j(a).addEventListener("input", c), j(a).addEventListener("change", f), j(o).addEventListener("click", h), j(u).addEventListener("item-click", d), j(u).addEventListener("item-delete", g);
  });
  function c() {
    j(a).value && j(a).value.trim() ? j(o).removeAttribute("disabled") : j(o).setAttribute("disabled", "");
  }
  function f() {
    c(), h();
  }
  function h() {
    j(a).value && j(a).value.trim() && ($e.Ward.loadPlugin(j(a).value), un(a, j(a).value = ""));
  }
  function d(w) {
    $r.update((b) => {
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
  }), Rt(), tt();
  var P = Uf(), _ = W(P), m = W(_);
  be(m, "margin-right:auto"), K(m, "slot", "startContent"), K(m, "level", "H5");
  var v = W(m, !0);
  U(m);
  var l = z(m, 2);
  K(l, "placeholder", "Enter plugin url"), lt(l, (w) => ee(a, w), () => j(a));
  var p = z(l, 2);
  K(p, "disabled", !0), be(p, "margin-left: 0.5rem"), K(p, "icon", "add"), lt(p, (w) => ee(o, w), () => j(o)), U(_);
  var y = z(_, 2);
  K(y, "mode", "Delete"), Te(y, 5, () => Object.keys(j(n)), Oe, (w, b) => {
    kf(w, {
      get urlId() {
        return j(b);
      }
    });
  }), U(y), lt(y, (w) => ee(u, w), () => j(u)), U(P), le(
    (w) => te(v, w),
    [
      () => `URLs (${Object.values(j(n)).length})`
    ],
    Ge
  ), re(e, P), Ke(), i();
}
var Wf = /* @__PURE__ */ de("<ui5-tree-item></ui5-tree-item>", 2);
function dl(e, t) {
  ze(t, !1);
  const [r, i] = Mt(), s = () => jt(ft, "$WardStore", r), n = /* @__PURE__ */ ie();
  let a = br(t, "pluginId", 8), o = /* @__PURE__ */ ie(), u = /* @__PURE__ */ ie();
  const c = $r.subscribe((m) => {
    ee(o, m.type), ee(u, m.id);
  });
  let f = /* @__PURE__ */ ie(), h = /* @__PURE__ */ ie(), d = /* @__PURE__ */ ie();
  wr(() => {
    j(d) && (j(d).setAttribute("data-attribute-type", "plugin"), j(d).setAttribute("data-attribute-id", a()));
  }), yn(() => {
    c();
  }), Ce(
    () => (s(), or(a())),
    () => {
      ee(f, s().plugins[a()]);
    }
  ), Ce(() => s(), () => {
    ee(h, s().plugins);
  }), Ce(() => (j(f), j(h)), () => {
    var m;
    ee(n, (((m = j(f)) == null ? void 0 : m.dependencies) || []).map((v) => {
      const l = Object.values(j(h)).find((p) => p.loadUrl === v);
      return l == null ? void 0 : l.name;
    }));
  }), Rt(), tt();
  var g = nr(), P = Kt(g);
  {
    var _ = (m) => {
      var v = Wf();
      K(v, "expanded", !0), K(v, "icon", "tree"), le(() => K(v, "text", a())), le(() => K(v, "selected", j(o) === "plugin" && j(u) === a())), Te(v, 5, () => j(n), Oe, (l, p) => {
        var y = nr(), w = Kt(y);
        dl(w, {
          get pluginId() {
            return j(p);
          }
        }), re(l, y);
      }), U(v), lt(v, (l) => ee(d, l), () => j(d)), re(m, v);
    };
    De(P, (m) => {
      a() && m(_);
    });
  }
  re(e, g), Ke(), i();
}
var Vf = /* @__PURE__ */ de('<ui5-panel><div style="width:100%;display:flex;align-items:center;" slot="header"><ui5-title> </ui5-title></div> <ui5-tree></ui5-tree></ui5-panel>', 2);
function Gf(e, t) {
  ze(t, !1);
  const [r, i] = Mt(), s = () => jt(ft, "$WardStore", r);
  let n = /* @__PURE__ */ ie(), a = /* @__PURE__ */ ie();
  wr(() => {
    j(a).addEventListener("item-click", o);
  });
  function o(g) {
    $r.update((P) => {
      const _ = g.detail.item.getAttribute("data-attribute-type"), m = g.detail.item.getAttribute("data-attribute-id");
      return P.type === _ && P.id === m ? { type: null, id: null } : { type: _, id: m };
    });
  }
  Ce(() => s(), () => {
    ee(n, s().roots);
  }), Rt(), tt();
  var u = Vf();
  be(u, "margin-top:1rem;");
  var c = W(u), f = W(c);
  be(f, "margin-right:auto"), K(f, "slot", "startContent"), K(f, "level", "H5");
  var h = W(f, !0);
  U(f), U(c);
  var d = z(c, 2);
  Te(d, 5, () => Object.keys(j(n)), Oe, (g, P) => {
    dl(g, {
      get pluginId() {
        return j(P);
      }
    });
  }), U(d), lt(d, (g) => ee(a, g), () => j(a)), U(u), le(
    (g) => te(h, g),
    [
      () => `Plugins (${Object.values(j(n)).length})`
    ],
    Ge
  ), re(e, u), Ke(), i();
}
var Hf = /* @__PURE__ */ de("<li> <ul><li><ui5-label>type:</ui5-label> </li> <li><ui5-label>mandatory:</ui5-label> </li> <li><ui5-label>array:</ui5-label> </li></ul></li>", 2), zf = /* @__PURE__ */ de("<li> <ul><li><ui5-label>type:</ui5-label> </li> <li><ui5-label>mandatory:</ui5-label> </li> <li><ui5-label>array:</ui5-label> </li></ul></li>", 2), Kf = /* @__PURE__ */ de("<li> </li>"), Bf = /* @__PURE__ */ de("<div><ui5-title> </ui5-title> <br> <div><ui5-label>Name:</ui5-label> </div> <br> <ui5-title> </ui5-title> <ul></ul> <ui5-title> </ui5-title> <ul></ul> <ui5-title> </ui5-title> <ul></ul></div>", 2), Jf = /* @__PURE__ */ de("<div>Deinition not found</div>");
function Yf(e, t) {
  ze(t, !1);
  const [r, i] = Mt(), s = () => jt(ft, "$WardStore", r);
  let n = br(t, "definitionId", 8), a = /* @__PURE__ */ ie();
  Ce(
    () => (s(), or(n())),
    () => {
      ee(a, s().definitions[n()]);
    }
  ), Rt(), tt();
  var o = nr(), u = Kt(o);
  {
    var c = (h) => {
      var d = Bf(), g = W(d);
      K(g, "level", "H5");
      var P = W(g, !0);
      U(g);
      var _ = z(g, 4), m = W(_), v = z(m);
      U(_);
      var l = z(_, 4);
      K(l, "level", "H6");
      var p = W(l, !0);
      U(l);
      var y = z(l, 2);
      Te(y, 5, () => j(a).properties, Oe, (k, H) => {
        var F = Hf(), G = W(F), J = z(G), x = W(J), Z = W(x), X = z(Z);
        U(x);
        var oe = z(x, 2), q = W(oe), R = z(q);
        U(oe);
        var A = z(oe, 2), M = W(A), $ = z(M);
        U(A), U(J), U(F), le(
          (D, I) => {
            te(G, `${j(H).name ?? ""} `), te(X, ` ${j(H).type ?? ""}`), te(R, ` ${D ?? ""}`), te($, ` ${I ?? ""}`);
          },
          [
            () => String(j(H).mandatory),
            () => String(j(H).array)
          ],
          Ge
        ), re(k, F);
      }), U(y);
      var w = z(y, 2);
      K(w, "level", "H6");
      var b = W(w, !0);
      U(w);
      var E = z(w, 2);
      Te(E, 5, () => j(a).attributes, Oe, (k, H) => {
        var F = zf(), G = W(F), J = z(G), x = W(J), Z = W(x), X = z(Z);
        U(x);
        var oe = z(x, 2), q = W(oe), R = z(q);
        U(oe);
        var A = z(oe, 2), M = W(A), $ = z(M);
        U(A), U(J), U(F), le(
          (D, I) => {
            te(G, `${j(H).name ?? ""} `), te(X, ` ${j(H).type ?? ""}`), te(R, ` ${D ?? ""}`), te($, ` ${I ?? ""}`);
          },
          [
            () => String(j(H).mandatory),
            () => String(j(H).array)
          ],
          Ge
        ), re(k, F);
      }), U(E);
      var S = z(E, 2);
      K(S, "level", "H6");
      var O = W(S, !0);
      U(S);
      var C = z(S, 2);
      Te(C, 5, () => j(a).elements, Oe, (k, H) => {
        var F = Kf(), G = W(F, !0);
        U(F), le(() => te(G, j(H).name)), re(k, F);
      }), U(C), U(d), le(() => {
        te(P, `Definition Details (${n()})`), te(v, ` ${j(a).name ?? ""}`), te(p, `Properties (${j(a).properties.length})`), te(b, `Attributes (${j(a).attributes.length})`), te(O, `Elements (${j(a).elements.length})`);
      }), re(h, d);
    }, f = (h) => {
      var d = Jf();
      re(h, d);
    };
    De(u, (h) => {
      j(a) ? h(c) : h(f, !1);
    });
  }
  re(e, o), Ke(), i();
}
var Xf = /* @__PURE__ */ de("<div><ui5-title> </ui5-title> <p> </p> <pre> </pre></div>", 2);
function Qf(e, t) {
  ze(t, !1);
  const [r, i] = Mt(), s = () => jt(ft, "$WardStore", r);
  let n = br(t, "urlId", 8), a = /* @__PURE__ */ ie();
  Ce(
    () => (s(), or(n())),
    () => {
      ee(a, s().urls[n()]);
    }
  ), Rt(), tt();
  var o = Xf(), u = W(o);
  K(u, "level", "H5");
  var c = W(u, !0);
  U(u);
  var f = z(u, 2), h = W(f, !0);
  U(f);
  var d = z(f, 2), g = W(d, !0);
  U(d), U(o), le(
    (P) => {
      te(c, `URL Details (${n()})`), te(h, n()), te(g, P);
    },
    [
      () => JSON.stringify(j(a).data, null, 2)
    ],
    Ge
  ), re(e, o), Ke(), i();
}
var Zf = /* @__PURE__ */ de("<li> </li>"), xf = /* @__PURE__ */ de("<ul></ul>"), eh = /* @__PURE__ */ de("<br>"), th = /* @__PURE__ */ de("<li> </li>"), rh = /* @__PURE__ */ de("<li> </li>"), nh = /* @__PURE__ */ de("<div><ui5-title> </ui5-title> <br> <div><ui5-label>Name:</ui5-label> </div> <div><ui5-label>URL:</ui5-label> </div> <br> <ui5-title> </ui5-title> <!> <ui5-title> </ui5-title> <ul></ul> <ui5-title> </ui5-title> <ul></ul></div>", 2), ih = /* @__PURE__ */ de("<div>Plugin not found</div>");
function ah(e, t) {
  ze(t, !1);
  const [r, i] = Mt(), s = () => jt(ft, "$WardStore", r);
  let n = br(t, "pluginId", 8), a = /* @__PURE__ */ ie();
  Ce(
    () => (s(), or(n())),
    () => {
      ee(a, s().plugins[n()]);
    }
  ), Rt(), tt();
  var o = nr(), u = Kt(o);
  {
    var c = (h) => {
      var d = nh(), g = W(d);
      K(g, "level", "H5");
      var P = W(g, !0);
      U(g);
      var _ = z(g, 4), m = W(_), v = z(m);
      U(_);
      var l = z(_, 2), p = W(l), y = z(p);
      U(l);
      var w = z(l, 4);
      K(w, "level", "H6");
      var b = W(w, !0);
      U(w);
      var E = z(w, 2);
      {
        var S = (x) => {
          var Z = xf();
          Te(Z, 5, () => j(a).dependencies, Oe, (X, oe) => {
            var q = Zf(), R = W(q, !0);
            U(q), le(() => te(R, j(oe))), re(X, q);
          }), U(Z), re(x, Z);
        }, O = (x) => {
          var Z = eh();
          re(x, Z);
        };
        De(E, (x) => {
          j(a).dependencies.length ? x(S) : x(O, !1);
        });
      }
      var C = z(E, 2);
      K(C, "level", "H6");
      var k = W(C, !0);
      U(C);
      var H = z(C, 2);
      Te(H, 5, () => j(a).defines, Oe, (x, Z) => {
        var X = th(), oe = W(X, !0);
        U(X), le(() => te(oe, `${n()}/${j(Z).name}`)), re(x, X);
      }), U(H);
      var F = z(H, 2);
      K(F, "level", "H6");
      var G = W(F, !0);
      U(F);
      var J = z(F, 2);
      Te(J, 5, () => j(a).provides, Oe, (x, Z) => {
        var X = rh(), oe = W(X, !0);
        U(X), le(() => te(oe, `${j(Z).define}/${j(Z).name}`)), re(x, X);
      }), U(J), U(d), le(() => {
        te(P, `Plugin Details (${n()})`), te(v, ` ${j(a).name ?? ""}`), te(y, ` ${j(a).url ?? ""}`), te(b, `Dependencies (${j(a).dependencies.length})`), te(k, `Defines (${j(a).defines.length})`), te(G, `Provides (${j(a).provides.length})`);
      }), re(h, d);
    }, f = (h) => {
      var d = ih();
      re(h, d);
    };
    De(u, (h) => {
      j(a) ? h(c) : h(f, !1);
    });
  }
  re(e, o), Ke(), i();
}
var sh = /* @__PURE__ */ de("<li> <ul><li><ui5-label>value:</ui5-label> </li> <li><ui5-label>type:</ui5-label> </li> <li><ui5-label>mandatory:</ui5-label> </li> <li><ui5-label>array:</ui5-label> </li></ul></li>", 2), oh = /* @__PURE__ */ de("<li> <ul><li><ui5-label>type:</ui5-label> </li> <li><ui5-label>url:</ui5-label> </li> <li><ui5-label>element:</ui5-label> </li></ul></li>", 2), uh = /* @__PURE__ */ de("<div><ui5-title>Provider Details</ui5-title> <br> <div><ui5-label>Name:</ui5-label> </div> <br> <ui5-title> </ui5-title> <ul></ul> <ui5-title> </ui5-title> <ul></ul></div>", 2);
function lh(e, t) {
  ze(t, !1);
  const [r, i] = Mt(), s = () => jt(ft, "$WardStore", r);
  let n = br(t, "providerId", 8), a = /* @__PURE__ */ ie();
  Ce(
    () => (s(), or(n())),
    () => {
      ee(a, s().providers[n()]);
    }
  ), Rt(), tt();
  var o = uh(), u = W(o);
  K(u, "level", "H5");
  var c = z(u, 4), f = W(c), h = z(f);
  U(c);
  var d = z(c, 4);
  K(d, "level", "H6");
  var g = W(d, !0);
  U(d);
  var P = z(d, 2);
  Te(P, 5, () => Object.values(j(a).getAttributes()), Oe, (l, p) => {
    var y = sh(), w = W(y), b = z(w), E = W(b), S = W(E), O = z(S);
    U(E);
    var C = z(E, 2), k = W(C), H = z(k);
    U(C);
    var F = z(C, 2), G = W(F), J = z(G);
    U(F);
    var x = z(F, 2), Z = W(x), X = z(Z);
    U(x), U(b), U(y), le(
      (oe, q) => {
        te(w, `${j(p).name ?? ""} `), te(O, ` ${j(p).value ?? ""}`), te(H, ` ${j(p).type ?? ""}`), te(J, ` ${oe ?? ""}`), te(X, ` ${q ?? ""}`);
      },
      [
        () => String(j(p).mandatory),
        () => String(j(p).array)
      ],
      Ge
    ), re(l, y);
  }), U(P);
  var _ = z(P, 2);
  K(_, "level", "H6");
  var m = W(_, !0);
  U(_);
  var v = z(_, 2);
  Te(v, 5, () => Object.values(j(a).getElements()), Oe, (l, p) => {
    var y = oh(), w = W(y), b = z(w), E = W(b), S = W(E), O = z(S);
    U(E);
    var C = z(E, 2), k = W(C), H = z(k);
    U(C);
    var F = z(C, 2), G = W(F), J = z(G);
    U(F), U(b), U(y), le(
      (x, Z) => {
        te(w, `${j(p).name ?? ""} `), te(O, ` ${j(p).type ?? ""}`), te(H, ` ${x ?? ""}`), te(J, ` ${Z ?? ""}`);
      },
      [
        () => String(j(p).url),
        () => String(j(p).element)
      ],
      Ge
    ), re(l, y);
  }), U(v), U(o), le(
    (l, p) => {
      te(h, ` ${j(a).name ?? ""}`), te(g, l), te(m, p);
    },
    [
      () => `Attributes (${Object.values(j(a).getAttributes()).length})`,
      () => `Elements (${Object.values(j(a).getElements()).length})`
    ],
    Ge
  ), re(e, o), Ke(), i();
}
function ch(e, t) {
  ze(t, !1);
  let r = /* @__PURE__ */ ie(), i = /* @__PURE__ */ ie();
  const s = $r.subscribe((u) => {
    ee(r, u.type), ee(i, u.id);
  });
  yn(() => {
    s();
  }), tt();
  var n = nr(), a = Kt(n);
  {
    var o = (u) => {
      var c = nr(), f = Kt(c);
      {
        var h = (g) => {
          Qf(g, {
            get urlId() {
              return j(i);
            }
          });
        }, d = (g, P) => {
          {
            var _ = (v) => {
              ah(v, {
                get pluginId() {
                  return j(i);
                }
              });
            }, m = (v, l) => {
              {
                var p = (w) => {
                  Yf(w, {
                    get definitionId() {
                      return j(i);
                    }
                  });
                }, y = (w, b) => {
                  {
                    var E = (S) => {
                      lh(S, {
                        get providerId() {
                          return j(i);
                        }
                      });
                    };
                    De(
                      w,
                      (S) => {
                        j(r) === "provider" && S(E);
                      },
                      b
                    );
                  }
                };
                De(
                  v,
                  (w) => {
                    j(r) === "definition" ? w(p) : w(y, !1);
                  },
                  l
                );
              }
            };
            De(
              g,
              (v) => {
                j(r) === "plugin" ? v(_) : v(m, !1);
              },
              P
            );
          }
        };
        De(f, (g) => {
          j(r) === "url" ? g(h) : g(d, !1);
        });
      }
      re(u, c);
    };
    De(a, (u) => {
      j(i) && u(o);
    });
  }
  re(e, n), Ke();
}
var dh = /* @__PURE__ */ de('<ui5-tab><ui5-flexible-column-layout><div slot="startColumn" style="padding-right:1em;"><!> <!></div> <div slot="midColumn"><!></div></ui5-flexible-column-layout></ui5-tab>', 2);
function fh(e, t) {
  ze(t, !1);
  const [r, i] = Mt(), s = () => jt(ft, "$WardStore", r), n = /* @__PURE__ */ ie();
  let a = /* @__PURE__ */ ie(), o = /* @__PURE__ */ ie();
  const u = $r.subscribe((v) => {
    ee(a, v.type), ee(o, v.id);
  });
  let c = /* @__PURE__ */ ie();
  yn(() => {
    u();
  }), Ce(
    () => (j(o), j(a)),
    () => {
      ee(n, j(o) && j(a) ? "TwoColumnsMidExpanded" : "OneColumn");
    }
  ), Ce(() => s(), () => {
    ee(c, s());
  }), Rt(), tt();
  var f = dh();
  K(f, "text", "Plugins"), K(f, "data-ui5-compact-size", !0);
  var h = W(f);
  le(() => K(h, "layout", j(n))), be(h, "height:100%");
  var d = W(h), g = W(d);
  Ff(g, {});
  var P = z(g, 2);
  Gf(P, {}), U(d);
  var _ = z(d, 2), m = W(_);
  ch(m, {}), U(_), U(h), U(f), re(e, f), Ke(), i();
}
var Zi = {}, Qe = {}, on = {}, du;
function Oa() {
  return du || (du = 1, Object.defineProperty(on, "__esModule", { value: !0 }), on.LogLevels = void 0, on.LogLevels = {
    DEBUG: 0,
    INFO: 1,
    WARN: 2,
    ERROR: 3,
    OFF: 4
  }), on;
}
var fu;
function fl() {
  if (fu) return Qe;
  fu = 1;
  var e = Qe && Qe.__classPrivateFieldSet || function(n, a, o, u, c) {
    if (u === "m") throw new TypeError("Private method is not writable");
    if (u === "a" && !c) throw new TypeError("Private accessor was defined without a setter");
    if (typeof a == "function" ? n !== a || !c : !a.has(n)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return u === "a" ? c.call(n, o) : c ? c.value = o : a.set(n, o), o;
  }, t = Qe && Qe.__classPrivateFieldGet || function(n, a, o, u) {
    if (o === "a" && !u) throw new TypeError("Private accessor was defined without a getter");
    if (typeof a == "function" ? n !== a || !u : !a.has(n)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return o === "m" ? u : o === "a" ? u.call(n) : u ? u.value : a.get(n);
  }, r;
  Object.defineProperty(Qe, "__esModule", { value: !0 }), Qe.GlobalConfig = Qe.LogConfig = void 0;
  const i = Oa();
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
  return Qe.LogConfig = s, r = /* @__PURE__ */ new WeakMap(), Qe.GlobalConfig = new s().debug(), Qe;
}
var $t = {}, hu;
function hh() {
  if (hu) return $t;
  hu = 1;
  var e = $t && $t.__classPrivateFieldSet || function(u, c, f, h, d) {
    if (h === "m") throw new TypeError("Private method is not writable");
    if (h === "a" && !d) throw new TypeError("Private accessor was defined without a setter");
    if (typeof c == "function" ? u !== c || !d : !c.has(u)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return h === "a" ? d.call(u, f) : d ? d.value = f : c.set(u, f), f;
  }, t = $t && $t.__classPrivateFieldGet || function(u, c, f, h) {
    if (f === "a" && !h) throw new TypeError("Private accessor was defined without a getter");
    if (typeof c == "function" ? u !== c || !h : !c.has(u)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return f === "m" ? h : f === "a" ? h.call(u) : h ? h.value : c.get(u);
  }, r, i;
  Object.defineProperty($t, "__esModule", { value: !0 }), $t.Logger = void 0;
  const s = Oa(), n = fl();
  function a(u, c) {
    return u.config.level <= c && n.GlobalConfig.level <= c;
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
  return $t.Logger = o, r = /* @__PURE__ */ new WeakMap(), i = /* @__PURE__ */ new WeakMap(), $t;
}
var mu;
function mh() {
  return mu || (mu = 1, function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.Logger = e.LogLevels = e.GlobalConfig = e.LogConfig = void 0;
    var t = fl();
    Object.defineProperty(e, "LogConfig", { enumerable: !0, get: function() {
      return t.LogConfig;
    } }), Object.defineProperty(e, "GlobalConfig", { enumerable: !0, get: function() {
      return t.GlobalConfig;
    } });
    var r = Oa();
    Object.defineProperty(e, "LogLevels", { enumerable: !0, get: function() {
      return r.LogLevels;
    } });
    var i = hh();
    Object.defineProperty(e, "Logger", { enumerable: !0, get: function() {
      return i.Logger;
    } });
  }(Zi)), Zi;
}
var Zt = mh(), ph = /* @__PURE__ */ de("<ui5-segmented-button-item> </ui5-segmented-button-item>", 2), vh = /* @__PURE__ */ de("<ui5-segmented-button></ui5-segmented-button>", 2), gh = /* @__PURE__ */ de("<ui5-li><ui5-label> </ui5-label></ui5-li>", 2), _h = /* @__PURE__ */ de("<ui5-panel><ui5-list></ui5-list></ui5-panel>", 2), yh = /* @__PURE__ */ de("<ui5-button>Send Test Message</ui5-button> <ui5-button>Stop Test Service</ui5-button>", 3), Ph = /* @__PURE__ */ de("<ui5-button>Start Test Service</ui5-button>", 2), wh = /* @__PURE__ */ de("<ui5-li><ui5-label> </ui5-label></ui5-li>", 2), bh = /* @__PURE__ */ de('<ui5-panel><div style="width:100%;display:flex;align-items:center;" slot="header"><ui5-title> </ui5-title> <!></div> <ui5-list></ui5-list></ui5-panel>', 2), $h = /* @__PURE__ */ de("<ui5-button>Reset Messages</ui5-button>", 2), Eh = /* @__PURE__ */ de('<ui5-li-custom><div style="width:100%"><div style="display:flex;align-items:center;width:100%;height:2rem;"><ui5-icon></ui5-icon> <span> </span> <ui5-label> </ui5-label></div> <div><div><ui5-label> </ui5-label></div> <div> </div></div></div></ui5-li-custom>', 2), Sh = /* @__PURE__ */ de('<ui5-tab><!> <!> <!> <ui5-panel><div style="width:100%;display:flex;align-items:center;" slot="header"><ui5-title> </ui5-title> <!></div> <ui5-list></ui5-list></ui5-panel></ui5-tab>', 2);
function Dh(e, t) {
  ze(t, !1);
  let r = /* @__PURE__ */ ie([]), i = /* @__PURE__ */ ie(null), s = /* @__PURE__ */ ie($e.Ward.data), n = /* @__PURE__ */ ie(), a = /* @__PURE__ */ ie();
  $e.Ward.register(c);
  const o = $e.Ward.addService("ward-dev-tools--log-service");
  let u = /* @__PURE__ */ ie(null);
  o.addHandler((G) => {
    ee(r, [
      ...j(r),
      { ...G, timestamp: /* @__PURE__ */ new Date() }
    ]);
  });
  function c() {
    ee(s, $e.Ward.data);
  }
  function f() {
    j(u) && j(u).sendMessage({ type: "test-message", payload: "test" });
  }
  function h() {
    ee(u, $e.Ward.addService("ward-dev-tools--test-service"));
  }
  function d() {
    j(u) && j(u).terminate(), ee(u, null);
  }
  function g() {
    ee(i, null), ee(r, []);
  }
  wr(() => {
    j(n).addEventListener("selection-change", P), j(a).addEventListener("selection-change", _);
  }), yn(() => {
    $e.Ward.unregister(c), o.terminate(), j(u) && j(u).terminate();
  });
  function P(G) {
    switch (parseInt(G.detail.selectedItems[0].getAttribute("data-log-level"))) {
      case Zt.LogLevels.DEBUG: {
        $e.Ward.logConfig.debug();
        break;
      }
      case Zt.LogLevels.INFO: {
        $e.Ward.logConfig.info();
        break;
      }
      case Zt.LogLevels.WARN: {
        $e.Ward.logConfig.warn();
        break;
      }
      case Zt.LogLevels.ERROR: {
        $e.Ward.logConfig.error();
        break;
      }
      default: {
        $e.Ward.logConfig.off();
        break;
      }
    }
  }
  function _(G) {
    const J = j(r)[G.detail.selectedItems[0].getAttribute("data-message-index")];
    ee(i, J);
  }
  tt();
  var m = Sh();
  K(m, "text", "Services"), be(m, "display:flex;"), K(m, "data-ui5-compact-size", !0);
  var v = W(m);
  {
    var l = (G) => {
      var J = vh();
      Te(J, 5, () => Object.keys(Zt.LogLevels), Oe, (x, Z) => {
        var X = ph();
        le(() => K(X, "data-log-level", Zt.LogLevels[j(Z)])), le(() => K(X, "pressed", Zt.LogLevels[j(Z)] === $e.Ward.logConfig.level));
        var oe = W(X, !0);
        U(X), le(() => te(oe, j(Z))), re(x, X);
      }), U(J), lt(J, (x) => ee(n, x), () => j(n)), re(G, J);
    };
    De(v, (G) => {
      window.uncover.wardVersion && G(l);
    });
  }
  var p = z(v, 2);
  {
    var y = (G) => {
      var J = _h();
      le(() => K(J, "header-text", `Dispatchers (${Object.values(j(s).dispatchers).length})`)), be(J, "margin-top:1rem;");
      var x = W(J);
      Te(x, 5, () => Object.values(j(s).dispatchers), Oe, (Z, X) => {
        var oe = gh(), q = W(oe), R = W(q, !0);
        U(q), U(oe), le(() => te(R, j(X))), re(Z, oe);
      }), U(x), U(J), re(G, J);
    };
    De(p, (G) => {
      Object.values(j(s).dispatchers).length && G(y);
    });
  }
  var w = z(p, 2);
  {
    var b = (G) => {
      var J = bh();
      be(J, "margin-top:1rem;");
      var x = W(J), Z = W(x);
      be(Z, "margin-right:auto"), K(Z, "slot", "startContent"), K(Z, "level", "H5");
      var X = W(Z, !0);
      U(Z);
      var oe = z(Z, 2);
      {
        var q = (M) => {
          var $ = yh(), D = Kt($);
          K(D, "design", "Emphasized"), K(D, "slot", "endContent");
          var I = z(D, 2);
          be(I, "margin-left: 0.5rem"), K(I, "design", "Negative"), K(I, "slot", "endContent"), pr("click", D, f), pr("click", I, d), re(M, $);
        }, R = (M) => {
          var $ = Ph();
          K($, "design", "Emphasized"), K($, "slot", "endContent"), pr("click", $, h), re(M, $);
        };
        De(oe, (M) => {
          j(u) ? M(q) : M(R, !1);
        });
      }
      U(x);
      var A = z(x, 2);
      Te(A, 5, () => Object.values(j(s).services), Oe, (M, $) => {
        var D = wh();
        le(() => K(D, "additional-text", `${j(r).filter((Y) => Y._serviceId === j($).id).length} messages`)), K(D, "additional-text-state", "Information"), le(() => K(D, "icon", j($).type === "event" ? "enter-more" : "journey-arrive")), le(() => K(D, "tooltip", j($).type === "event" ? "local service" : "iframe service"));
        var I = W(D), B = W(I, !0);
        U(I), U(D), le(() => te(B, j($).id)), re(M, D);
      }), U(A), U(J), le(
        (M) => te(X, M),
        [
          () => `Services (${Object.values(j(s).services).length})`
        ],
        Ge
      ), re(G, J);
    };
    De(w, (G) => {
      Object.values(j(s).services).length && G(b);
    });
  }
  var E = z(w, 2);
  le(() => K(E, "header-text", `Messages (${j(r).length})`)), be(E, "margin-top:1rem;");
  var S = W(E), O = W(S);
  be(O, "margin-right:auto"), K(O, "slot", "startContent"), K(O, "level", "H5");
  var C = W(O, !0);
  U(O);
  var k = z(O, 2);
  {
    var H = (G) => {
      var J = $h();
      K(J, "slot", "endContent"), pr("click", J, g), re(G, J);
    };
    De(k, (G) => {
      j(r).length && G(H);
    });
  }
  U(S);
  var F = z(S, 2);
  K(F, "mode", "SingleSelect"), Te(F, 5, () => j(r).toReversed(), Oe, (G, J, x) => {
    var Z = Eh();
    be(Z, "padding:0.5rem"), le(() => K(Z, "data-message-index", j(r).length - 1 - x));
    var X = W(Z), oe = W(X), q = W(oe);
    be(q, "margin-inline-end:0.5rem"), K(q, "name", "email");
    var R = z(q, 2), A = W(R, !0);
    U(R);
    var M = z(R, 2);
    be(M, "margin-inline-start:auto");
    var $ = W(M, !0);
    U(M), U(oe);
    var D = z(oe, 2), I = W(D), B = W(I);
    be(B, "height:1.5rem");
    var Y = W(B, !0);
    U(B), U(I);
    var ce = z(I, 2), ue = W(ce, !0);
    U(ce), U(D), U(X), U(Z), le(
      (T, N) => {
        te(A, j(J).type), te($, T), be(D, `display:${j(i) === j(J) ? "block" : "none"}`), te(Y, `Sent by ${j(J)._dispatcherId} | ${j(J)._serviceId}`), te(ue, N);
      },
      [
        () => j(J).timestamp.toLocaleTimeString("en-us", { hour12: !1 }),
        () => JSON.stringify(j(J).payload, null, 2)
      ],
      Ge
    ), re(G, Z);
  }), U(F), lt(F, (G) => ee(a, G), () => j(a)), U(E), U(m), le(() => te(C, `Messages (${j(r).length})`)), re(e, m), Ke();
}
var Oh = /* @__PURE__ */ de("<ui5-tabcontainer><!> <!></ui5-tabcontainer>", 2);
function Th(e) {
  var t = Oh();
  K(t, "fixed", !0), K(t, "data-ui5-compact-size", !0), sa(t, 1, "svelte-1qpu4yh");
  var r = W(t);
  fh(r, {});
  var i = z(r, 2);
  Dh(i, {}), U(t), re(e, t);
}
customElements.define("ward-dev-tools-content", Zu(Th, {}, [], [], !0));
