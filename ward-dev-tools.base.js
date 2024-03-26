function Se() {
}
function ja(e) {
  return e();
}
function Hs() {
  return /* @__PURE__ */ Object.create(null);
}
function Br(e) {
  e.forEach(ja);
}
function _i(e) {
  return typeof e == "function";
}
function Ta(e, t) {
  return e != e ? t == t : e !== t || e && typeof e == "object" || typeof e == "function";
}
function Co(e) {
  return Object.keys(e).length === 0;
}
function pe(e, t) {
  e.appendChild(t);
}
function tt(e, t, r) {
  e.insertBefore(t, r || null);
}
function rt(e) {
  e.parentNode && e.parentNode.removeChild(e);
}
function Na(e, t) {
  for (let r = 0; r < e.length; r += 1)
    e[r] && e[r].d(t);
}
function ge(e) {
  return document.createElement(e);
}
function Jr(e) {
  return document.createTextNode(e);
}
function Dt() {
  return Jr(" ");
}
function Io() {
  return Jr("");
}
function Wu(e, t, r, n) {
  return e.addEventListener(t, r, n), () => e.removeEventListener(t, r, n);
}
function Gu(e, t, r) {
  r == null ? e.removeAttribute(t) : e.getAttribute(t) !== r && e.setAttribute(t, r);
}
function be(e, t, r) {
  t in e ? e[t] = typeof e[t] == "boolean" && r === "" ? !0 : r : Gu(e, t, r);
}
function Hu(e) {
  return Array.from(e.childNodes);
}
function qu(e, t) {
  t = "" + t, e.data !== t && (e.data = t);
}
function zu(e) {
  const t = {};
  for (const r of e)
    t[r.name] = r.value;
  return t;
}
let Hr;
function kr(e) {
  Hr = e;
}
function Ku() {
  if (!Hr)
    throw new Error("Function called outside component initialization");
  return Hr;
}
function Bu(e) {
  Ku().$$.on_destroy.push(e);
}
const Kt = [], qs = [];
let Zt = [];
const zs = [], Ju = /* @__PURE__ */ Promise.resolve();
let ma = !1;
function Qu() {
  ma || (ma = !0, Ju.then(Ro));
}
function _a(e) {
  Zt.push(e);
}
const na = /* @__PURE__ */ new Set();
let Lt = 0;
function Ro() {
  if (Lt !== 0)
    return;
  const e = Hr;
  do {
    try {
      for (; Lt < Kt.length; ) {
        const t = Kt[Lt];
        Lt++, kr(t), Yu(t.$$);
      }
    } catch (t) {
      throw Kt.length = 0, Lt = 0, t;
    }
    for (kr(null), Kt.length = 0, Lt = 0; qs.length; )
      qs.pop()();
    for (let t = 0; t < Zt.length; t += 1) {
      const r = Zt[t];
      na.has(r) || (na.add(r), r());
    }
    Zt.length = 0;
  } while (Kt.length);
  for (; zs.length; )
    zs.pop()();
  ma = !1, na.clear(), kr(e);
}
function Yu(e) {
  if (e.fragment !== null) {
    e.update(), Br(e.before_update);
    const t = e.dirty;
    e.dirty = [-1], e.fragment && e.fragment.p(e.ctx, t), e.after_update.forEach(_a);
  }
}
function Xu(e) {
  const t = [], r = [];
  Zt.forEach((n) => e.indexOf(n) === -1 ? t.push(n) : r.push(n)), r.forEach((n) => n()), Zt = t;
}
const vn = /* @__PURE__ */ new Set();
let Zu;
function va(e, t) {
  e && e.i && (vn.delete(e), e.i(t));
}
function Ks(e, t, r, n) {
  if (e && e.o) {
    if (vn.has(e))
      return;
    vn.add(e), Zu.c.push(() => {
      vn.delete(e), n && (r && e.d(1), n());
    }), e.o(t);
  } else
    n && n();
}
function Bs(e) {
  e && e.c();
}
function ga(e, t, r, n) {
  const { fragment: i, after_update: a } = e.$$;
  i && i.m(t, r), n || _a(() => {
    const s = e.$$.on_mount.map(ja).filter(_i);
    e.$$.on_destroy ? e.$$.on_destroy.push(...s) : Br(s), e.$$.on_mount = [];
  }), a.forEach(_a);
}
function vi(e, t) {
  const r = e.$$;
  r.fragment !== null && (Xu(r.after_update), Br(r.on_destroy), r.fragment && r.fragment.d(t), r.on_destroy = r.fragment = null, r.ctx = []);
}
function xu(e, t) {
  e.$$.dirty[0] === -1 && (Kt.push(e), Qu(), e.$$.dirty.fill(0)), e.$$.dirty[t / 31 | 0] |= 1 << t % 31;
}
function Ma(e, t, r, n, i, a, s, l = [-1]) {
  const p = Hr;
  kr(e);
  const c = e.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: a,
    update: Se,
    not_equal: i,
    bound: Hs(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(t.context || (p ? p.$$.context : [])),
    // everything else
    callbacks: Hs(),
    dirty: l,
    skip_bound: !1,
    root: t.target || p.$$.root
  };
  s && s(c.root);
  let f = !1;
  if (c.ctx = r ? r(e, t.props || {}, (h, b, ...j) => {
    const E = j.length ? j[0] : b;
    return c.ctx && i(c.ctx[h], c.ctx[h] = E) && (!c.skip_bound && c.bound[h] && c.bound[h](E), f && xu(e, h)), b;
  }) : [], c.update(), f = !0, Br(c.before_update), c.fragment = n ? n(c.ctx) : !1, t.target) {
    if (t.hydrate) {
      const h = Hu(t.target);
      c.fragment && c.fragment.l(h), h.forEach(rt);
    } else
      c.fragment && c.fragment.c();
    t.intro && va(e.$$.fragment), ga(e, t.target, t.anchor, t.customElement), Ro();
  }
  kr(p);
}
let Ao;
typeof HTMLElement == "function" && (Ao = class extends HTMLElement {
  constructor() {
    super(), this.attachShadow({ mode: "open" });
  }
  connectedCallback() {
    const { on_mount: e } = this.$$;
    this.$$.on_disconnect = e.map(ja).filter(_i);
    for (const t in this.$$.slotted)
      this.appendChild(this.$$.slotted[t]);
  }
  attributeChangedCallback(e, t, r) {
    this[e] = r;
  }
  disconnectedCallback() {
    Br(this.$$.on_disconnect);
  }
  $destroy() {
    vi(this, 1), this.$destroy = Se;
  }
  $on(e, t) {
    if (!_i(t))
      return Se;
    const r = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
    return r.push(t), () => {
      const n = r.indexOf(t);
      n !== -1 && r.splice(n, 1);
    };
  }
  $set(e) {
    this.$$set && !Co(e) && (this.$$.skip_bound = !0, this.$$set(e), this.$$.skip_bound = !1);
  }
});
class Uo {
  $destroy() {
    vi(this, 1), this.$destroy = Se;
  }
  $on(t, r) {
    if (!_i(r))
      return Se;
    const n = this.$$.callbacks[t] || (this.$$.callbacks[t] = []);
    return n.push(r), () => {
      const i = n.indexOf(r);
      i !== -1 && n.splice(i, 1);
    };
  }
  $set(t) {
    this.$$set && !Co(t) && (this.$$.skip_bound = !0, this.$$set(t), this.$$.skip_bound = !1);
  }
}
function el(e) {
  let t;
  return {
    c() {
      t = ge("ui5-tab"), t.innerHTML = "<ui5-label>Plugins</ui5-label>", be(t, "text", "Plugins");
    },
    m(r, n) {
      tt(r, t, n);
    },
    p: Se,
    i: Se,
    o: Se,
    d(r) {
      r && rt(t);
    }
  };
}
class tl extends Uo {
  constructor(t) {
    super(), Ma(this, t, null, el, Ta, {});
  }
}
var A = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function rl(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var ko = {}, nr = {}, Ei = {};
Object.defineProperty(Ei, "__esModule", { value: !0 });
Ei.Alphabet = void 0;
Ei.Alphabet = {
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
};
var Si = {};
Object.defineProperty(Si, "__esModule", { value: !0 });
Si.ArrayUtils = void 0;
var nl = (
  /** @class */
  function() {
    function e() {
    }
    return e.createIntArray = function(t) {
      t === void 0 && (t = 0);
      for (var r = [], n = 0; n < t; n++)
        r.push(n);
      return r;
    }, e.shuffle = function(t) {
      t === void 0 && (t = []);
      for (var r = t.slice(), n = []; r.length; ) {
        var i = Math.floor(Math.random() * r.length);
        n.push(r.splice(i, 1)[0]);
      }
      return n;
    }, e.randomSubArray = function(t, r) {
      t === void 0 && (t = []), r === void 0 && (r = 0);
      for (var n = t.slice(), i = [], a = 0; a < r; a++) {
        var s = Math.floor(Math.random() * n.length);
        i.push(n.splice(s, 1)[0]);
      }
      return i;
    }, e.randomElement = function(t) {
      if (t === void 0 && (t = []), t.length) {
        var r = Math.floor(Math.random() * t.length);
        return t[r];
      }
      return null;
    }, e.removeElement = function(t, r) {
      var n = t.indexOf(r), i = t.slice();
      return n !== -1 && i.splice(n, 1), i;
    }, e;
  }()
);
Si.ArrayUtils = nl;
var Qr = {};
Object.defineProperty(Qr, "__esModule", { value: !0 });
Qr.DataStates = void 0;
Qr.DataStates = {
  NEVER: "NEVER",
  FETCHING_FIRST: "FETCHING_FIRST",
  FETCHING: "FETCHING",
  SUCCESS: "SUCCESS",
  FAILURE: "FAILURE",
  OUTDATED: "OUTDATED"
};
var Oi = {};
Object.defineProperty(Oi, "__esModule", { value: !0 });
Oi.DataStatesUtils = void 0;
var Me = Qr, il = (
  /** @class */
  function() {
    function e() {
    }
    return e.mergeDataStates = function(t) {
      return t.length === 0 ? Me.DataStates.NEVER : t.some(function(r) {
        return r === Me.DataStates.FAILURE;
      }) ? Me.DataStates.FAILURE : t.some(function(r) {
        return r === Me.DataStates.OUTDATED;
      }) ? Me.DataStates.OUTDATED : t.some(function(r) {
        return r === Me.DataStates.NEVER;
      }) ? Me.DataStates.NEVER : t.some(function(r) {
        return r === Me.DataStates.FETCHING_FIRST;
      }) ? Me.DataStates.FETCHING_FIRST : t.some(function(r) {
        return r === Me.DataStates.FETCHING;
      }) ? Me.DataStates.FETCHING : Me.DataStates.SUCCESS;
    }, e;
  }()
);
Oi.DataStatesUtils = il;
var Di = {};
Object.defineProperty(Di, "__esModule", { value: !0 });
Di.DateUtils = void 0;
var gn = 1e3, gi = 60, ya = gn * gi, qr = 60, Fo = gi * qr, $a = ya * qr, ji = 24, al = qr * ji, sl = Fo * ji, ol = $a * ji, ul = (
  /** @class */
  function() {
    function e() {
    }
    return e.durationToHumanTime = function(t) {
      return {
        millis: t % gn,
        seconds: Math.floor(t / gn) % gi,
        minutes: Math.floor(t / ya) % qr,
        hours: Math.floor(t / $a)
      };
    }, e.normalizeTime = function(t) {
      return "".concat(t).padStart(2, "0");
    }, e.dateString = function(t) {
      var r = e.normalizeTime(t.getFullYear()), n = e.normalizeTime(t.getMonth()), i = e.normalizeTime(t.getDate()), a = e.normalizeTime(t.getHours()), s = e.normalizeTime(t.getMinutes()), l = e.normalizeTime(t.getSeconds());
      return "".concat(r, "-").concat(n, "-").concat(i, " ").concat(a, ":").concat(s, ":").concat(l);
    }, e.nowString = function() {
      return e.dateString(new Date(Date.now()));
    }, e.TimeConstants = {
      MIL_PER_SEC: gn,
      SEC_PER_MIN: gi,
      MIL_PER_MIN: ya,
      MIN_PER_HOU: qr,
      SEC_PER_HOU: Fo,
      MIL_PER_HOU: $a,
      HOU_PER_DAY: ji,
      MIN_PER_DAY: al,
      SEC_PER_DAY: sl,
      MIL_PER_DAY: ol
    }, e;
  }()
);
Di.DateUtils = ul;
var Ti = {};
Object.defineProperty(Ti, "__esModule", { value: !0 });
Ti.DownloadUtils = void 0;
var ll = (
  /** @class */
  function() {
    function e() {
    }
    return e.downloadJson = function(t, r) {
      var n = new Blob([JSON.stringify(r, null, 2)], { type: "application/json" }), i = URL.createObjectURL(n), a = document.createElement("a");
      a.download = t, a.target = "_blank", a.href = i, a.click();
    }, e;
  }()
);
Ti.DownloadUtils = ll;
var Ni = {};
Object.defineProperty(Ni, "__esModule", { value: !0 });
Ni.EncodeUtils = void 0;
var cl = (
  /** @class */
  function() {
    function e() {
    }
    return e.encode = function(t) {
      return t === void 0 && (t = ""), Buffer.from(t).toString("base64");
    }, e.decode = function(t) {
      return t === void 0 && (t = ""), Buffer.from(t, "base64").toString();
    }, e.encodeBasicHeader = function(t, r) {
      t === void 0 && (t = ""), r === void 0 && (r = "");
      var n = "".concat(t, ":").concat(r), i = e.encode(n);
      return "Basic ".concat(i);
    }, e.decodeBasicHeader = function(t) {
      t === void 0 && (t = "");
      var r = t.split("Basic ").join(""), n = e.decode(r), i = n.split(":");
      return i.length === 2 ? {
        username: i[0],
        password: i[1]
      } : {
        username: null,
        password: null
      };
    }, e;
  }()
);
Ni.EncodeUtils = cl;
var Mi = {};
Object.defineProperty(Mi, "__esModule", { value: !0 });
Mi.FileUtils = void 0;
var dl = (
  /** @class */
  function() {
    function e() {
    }
    return e.getExtension = function(t) {
      var r = t.name;
      return r.substring(r.lastIndexOf(".") + 1).toLowerCase();
    }, e.checkExtension = function(t, r) {
      return r.indexOf(e.getExtension(t)) !== -1;
    }, e.checkSize = function(t, r) {
      return t.size <= r;
    }, e;
  }()
);
Mi.FileUtils = dl;
var Ci = {};
Object.defineProperty(Ci, "__esModule", { value: !0 });
Ci.FunctionUtils = void 0;
var fl = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg, hl = /([^\s,]+)/g, pl = (
  /** @class */
  function() {
    function e() {
    }
    return e.getParamNames = function(t) {
      var r = t.toString().replace(fl, ""), n = r.slice(r.indexOf("(") + 1, r.indexOf(")")).match(hl);
      return n === null ? [] : n;
    }, e;
  }()
);
Ci.FunctionUtils = pl;
var lt = {};
Object.defineProperty(lt, "__esModule", { value: !0 });
lt.HttpStatuses = lt.HttpMethods = lt.HttpHeaders = void 0;
lt.HttpHeaders = {
  ACCESS_CONTROL_ALLOW_ORIGIN: "Access-Control-Allow-Origin",
  ACCESS_CONTROL_ALLOW_HEADERS: "Access-Control-Allow-Headers",
  ACCESS_CONTROL_ALLOW_METHODS: "Access-Control-Allow-Methods"
};
lt.HttpMethods = {
  GET: "GET",
  POST: "POST",
  PUT: "PUT",
  PATCH: "PATCH",
  DELETE: "DELETE",
  OPTIONS: "OPTIONS"
};
lt.HttpStatuses = {
  OK: 200,
  CREATED: 201,
  REMOVED: 204,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  ERROR: 500
};
var Ii = {};
Object.defineProperty(Ii, "__esModule", { value: !0 });
Ii.ObjectUtils = void 0;
var ml = (
  /** @class */
  function() {
    function e() {
    }
    return e.nil = function(t) {
      return typeof t > "u" || t === null;
    }, e.getProperty = function(t, r) {
      return r.split(".").reduce(function(n, i) {
        if (n && typeof n == "object")
          return n[i];
      }, t);
    }, e.clone = function(t) {
      return JSON.parse(JSON.stringify(t));
    }, e.arrayfy = function(t) {
      return Array.isArray(t) ? t : [t];
    }, e;
  }()
);
Ii.ObjectUtils = ml;
var Ri = {};
Object.defineProperty(Ri, "__esModule", { value: !0 });
Ri.PromiseUtils = void 0;
var _l = 0, vl = (
  /** @class */
  function() {
    function e() {
    }
    return e.delayedPromise = function(t, r) {
      return r === void 0 && (r = _l), Promise.all([
        t,
        new Promise(function(n) {
          return setTimeout(n, r);
        })
      ]).then(function(n) {
        return n[0];
      }).catch(function(n) {
        throw n;
      });
    }, e;
  }()
);
Ri.PromiseUtils = vl;
var Ai = {};
Object.defineProperty(Ai, "__esModule", { value: !0 });
Ai.Sets = void 0;
var gl = (
  /** @class */
  function() {
    function e() {
    }
    return e.toSet = function(t) {
      return t.reduce(function(r, n) {
        return r.includes(n) || r.push(n), r;
      }, []);
    }, e.add = function(t) {
      for (var r = [], n = 1; n < arguments.length; n++)
        r[n - 1] = arguments[n];
      return r.forEach(function(i) {
        t.includes(i) || t.push(i);
      }), t;
    }, e.remove = function(t) {
      for (var r = [], n = 1; n < arguments.length; n++)
        r[n - 1] = arguments[n];
      return r.forEach(function(i) {
        var a = t.indexOf(i);
        a !== -1 && t.splice(a, 1);
      }), t;
    }, e.merge = function(t, r) {
      return e.toSet(t.concat(r));
    }, e;
  }()
);
Ai.Sets = gl;
var Ui = {}, Yr = {};
Object.defineProperty(Yr, "__esModule", { value: !0 });
Yr.StringUtils = void 0;
var yl = (
  /** @class */
  function() {
    function e() {
    }
    return e.capitalize = function(t) {
      return t.length ? t.substring(0, 1).toUpperCase() + t.substring(1).toLowerCase() : "";
    }, e.capitalizeFirst = function(t) {
      return t.length ? t.substring(0, 1).toUpperCase() : "";
    }, e.replaceAll = function(t, r, n) {
      return t.split(r).join(n);
    }, e.getIndent = function(t, r) {
      r === void 0 && (r = "  ");
      for (var n = "", i = 0; i < t; i++)
        n += r;
      return n;
    }, e;
  }()
);
Yr.StringUtils = yl;
Object.defineProperty(Ui, "__esModule", { value: !0 });
Ui.StringLabel = void 0;
var ia = Yr, $l = (
  /** @class */
  function() {
    function e(t, r) {
      r === void 0 && (r = " "), this._value = t, this._words = t.split(r).map(function(n) {
        return n.toLowerCase();
      }).filter(function(n) {
        return !!n;
      });
    }
    return Object.defineProperty(e.prototype, "words", {
      get: function() {
        return this._words;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e.prototype, "camel", {
      get: function() {
        return this.words.map(function(t, r) {
          return r === 0 ? t : ia.StringUtils.capitalize(t);
        }).join("");
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e.prototype, "pascal", {
      get: function() {
        return this.words.map(function(t) {
          return ia.StringUtils.capitalize(t);
        }).join("");
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e.prototype, "worm", {
      get: function() {
        return this.words.map(function(t) {
          return t.toLowerCase();
        }).join("_");
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e.prototype, "snake", {
      get: function() {
        return this.words.map(function(t) {
          return ia.StringUtils.capitalize(t);
        }).join("_");
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e.prototype, "serpent", {
      get: function() {
        return this.words.map(function(t) {
          return t.toUpperCase();
        }).join("_");
      },
      enumerable: !1,
      configurable: !0
    }), e;
  }()
);
Ui.StringLabel = $l;
var ki = {};
Object.defineProperty(ki, "__esModule", { value: !0 });
ki.UUID = void 0;
var Pl = (
  /** @class */
  function() {
    function e() {
    }
    return e.next = function() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(t) {
        var r = Math.random() * 16 | 0, n = t == "x" ? r : r & 3 | 8;
        return n.toString(16);
      });
    }, e;
  }()
);
ki.UUID = Pl;
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.UUID = e.StringUtils = e.StringLabel = e.Sets = e.PromiseUtils = e.ObjectUtils = e.HttpStatuses = e.HttpMethods = e.HttpHeaders = e.FunctionUtils = e.FileUtils = e.EncodeUtils = e.DownloadUtils = e.DateUtils = e.DataStatesUtils = e.DataStates = e.ArrayUtils = e.Alphabet = void 0;
  var t = Ei;
  Object.defineProperty(e, "Alphabet", { enumerable: !0, get: function() {
    return t.Alphabet;
  } });
  var r = Si;
  Object.defineProperty(e, "ArrayUtils", { enumerable: !0, get: function() {
    return r.ArrayUtils;
  } });
  var n = Qr;
  Object.defineProperty(e, "DataStates", { enumerable: !0, get: function() {
    return n.DataStates;
  } });
  var i = Oi;
  Object.defineProperty(e, "DataStatesUtils", { enumerable: !0, get: function() {
    return i.DataStatesUtils;
  } });
  var a = Di;
  Object.defineProperty(e, "DateUtils", { enumerable: !0, get: function() {
    return a.DateUtils;
  } });
  var s = Ti;
  Object.defineProperty(e, "DownloadUtils", { enumerable: !0, get: function() {
    return s.DownloadUtils;
  } });
  var l = Ni;
  Object.defineProperty(e, "EncodeUtils", { enumerable: !0, get: function() {
    return l.EncodeUtils;
  } });
  var p = Mi;
  Object.defineProperty(e, "FileUtils", { enumerable: !0, get: function() {
    return p.FileUtils;
  } });
  var c = Ci;
  Object.defineProperty(e, "FunctionUtils", { enumerable: !0, get: function() {
    return c.FunctionUtils;
  } });
  var f = lt;
  Object.defineProperty(e, "HttpHeaders", { enumerable: !0, get: function() {
    return f.HttpHeaders;
  } }), Object.defineProperty(e, "HttpMethods", { enumerable: !0, get: function() {
    return f.HttpMethods;
  } }), Object.defineProperty(e, "HttpStatuses", { enumerable: !0, get: function() {
    return f.HttpStatuses;
  } });
  var h = Ii;
  Object.defineProperty(e, "ObjectUtils", { enumerable: !0, get: function() {
    return h.ObjectUtils;
  } });
  var b = Ri;
  Object.defineProperty(e, "PromiseUtils", { enumerable: !0, get: function() {
    return b.PromiseUtils;
  } });
  var j = Ai;
  Object.defineProperty(e, "Sets", { enumerable: !0, get: function() {
    return j.Sets;
  } });
  var E = Ui;
  Object.defineProperty(e, "StringLabel", { enumerable: !0, get: function() {
    return E.StringLabel;
  } });
  var O = Yr;
  Object.defineProperty(e, "StringUtils", { enumerable: !0, get: function() {
    return O.StringUtils;
  } });
  var P = ki;
  Object.defineProperty(e, "UUID", { enumerable: !0, get: function() {
    return P.UUID;
  } });
})(nr);
var Ca = {}, ir = {}, Fi = {}, Xr = {};
Object.defineProperty(Xr, "__esModule", { value: !0 });
const wl = {
  DEBUG: 0,
  INFO: 1,
  WARN: 2,
  ERROR: 3,
  OFF: 4
};
Xr.default = wl;
var bl = A && A.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(Fi, "__esModule", { value: !0 });
const vr = bl(Xr);
let vt = null;
const El = {
  level: () => vt,
  reset: () => {
    vt = null;
  },
  off: () => {
    vt = vr.default.OFF;
  },
  debug: () => {
    vt = vr.default.DEBUG;
  },
  info: () => {
    vt = vr.default.INFO;
  },
  warn: () => {
    vt = vr.default.WARN;
  },
  error: () => {
    vt = vr.default.ERROR;
  }
};
Fi.default = El;
var Li = {}, Js = A && A.__classPrivateFieldSet || function(e, t, r, n, i) {
  if (n === "m")
    throw new TypeError("Private method is not writable");
  if (n === "a" && !i)
    throw new TypeError("Private accessor was defined without a setter");
  if (typeof t == "function" ? e !== t || !i : !t.has(e))
    throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return n === "a" ? i.call(e, r) : i ? i.value = r : t.set(e, r), r;
}, Qs = A && A.__classPrivateFieldGet || function(e, t, r, n) {
  if (r === "a" && !n)
    throw new TypeError("Private accessor was defined without a getter");
  if (typeof t == "function" ? e !== t || !n : !t.has(e))
    throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return r === "m" ? n : r === "a" ? n.call(e) : n ? n.value : t.get(e);
}, Lo = A && A.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
}, yn, $n;
Object.defineProperty(Li, "__esModule", { value: !0 });
const gr = Lo(Xr), Sl = Lo(Fi);
class Ol {
  constructor(t = "Logger", r = gr.default.ERROR) {
    yn.set(this, void 0), $n.set(this, void 0), Js(this, yn, t, "f"), Js(this, $n, r, "f");
  }
  get name() {
    return Qs(this, yn, "f");
  }
  get level() {
    return Sl.default.level() || Qs(this, $n, "f");
  }
  message(t) {
    return `${this.name} - ${t}`;
  }
  debug(t) {
    this.level <= gr.default.DEBUG && console.log(this.message(t));
  }
  info(t) {
    this.level <= gr.default.INFO && console.log(this.message(t));
  }
  warn(t) {
    this.level <= gr.default.WARN && console.warn(this.message(t));
  }
  error(t) {
    this.level <= gr.default.ERROR && console.error(this.message(t));
  }
}
Li.default = Ol;
yn = /* @__PURE__ */ new WeakMap(), $n = /* @__PURE__ */ new WeakMap();
(function(e) {
  var t = A && A.__importDefault || function(a) {
    return a && a.__esModule ? a : { default: a };
  };
  Object.defineProperty(e, "__esModule", { value: !0 }), e.default = e.LogLevels = e.LogConfig = void 0;
  var r = Fi;
  Object.defineProperty(e, "LogConfig", { enumerable: !0, get: function() {
    return t(r).default;
  } });
  var n = Xr;
  Object.defineProperty(e, "LogLevels", { enumerable: !0, get: function() {
    return t(n).default;
  } });
  var i = Li;
  Object.defineProperty(e, "default", { enumerable: !0, get: function() {
    return t(i).default;
  } });
})(ir);
var Ia = {}, Ra = {}, Aa = {}, gt = A && A.__classPrivateFieldSet || function(e, t, r, n, i) {
  if (n === "m")
    throw new TypeError("Private method is not writable");
  if (n === "a" && !i)
    throw new TypeError("Private accessor was defined without a setter");
  if (typeof t == "function" ? e !== t || !i : !t.has(e))
    throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return n === "a" ? i.call(e, r) : i ? i.value = r : t.set(e, r), r;
}, yr = A && A.__classPrivateFieldGet || function(e, t, r, n) {
  if (r === "a" && !n)
    throw new TypeError("Private accessor was defined without a getter");
  if (typeof t == "function" ? e !== t || !n : !t.has(e))
    throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return r === "m" ? n : r === "a" ? n.call(e) : n ? n.value : t.get(e);
}, Pn, wn, bn, Tr, Nr;
Object.defineProperty(Aa, "__esModule", { value: !0 });
class Dl {
  constructor(t, r, n) {
    Pn.set(this, void 0), wn.set(this, void 0), bn.set(this, void 0), Tr.set(this, void 0), Nr.set(this, void 0), gt(this, Pn, t, "f"), gt(this, Nr, !1, "f"), gt(this, Tr, !0, "f");
    let i = r;
    i.endsWith("?") && (gt(this, Tr, !1, "f"), i = i.substring(0, i.length - 1)), gt(this, wn, i, "f");
    let a = n;
    a.endsWith("[]") && (gt(this, Nr, !0, "f"), a = a.substring(0, a.length - 2)), gt(this, bn, a, "f");
  }
  get plugin() {
    return yr(this, Pn, "f");
  }
  get name() {
    return yr(this, wn, "f");
  }
  get type() {
    return yr(this, bn, "f");
  }
  get array() {
    return yr(this, Nr, "f");
  }
  get mandatory() {
    return yr(this, Tr, "f");
  }
}
Pn = /* @__PURE__ */ new WeakMap(), wn = /* @__PURE__ */ new WeakMap(), bn = /* @__PURE__ */ new WeakMap(), Tr = /* @__PURE__ */ new WeakMap(), Nr = /* @__PURE__ */ new WeakMap();
Aa.default = Dl;
var Ua = {}, Ys = A && A.__classPrivateFieldSet || function(e, t, r, n, i) {
  if (n === "m")
    throw new TypeError("Private method is not writable");
  if (n === "a" && !i)
    throw new TypeError("Private accessor was defined without a setter");
  if (typeof t == "function" ? e !== t || !i : !t.has(e))
    throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return n === "a" ? i.call(e, r) : i ? i.value = r : t.set(e, r), r;
}, Xs = A && A.__classPrivateFieldGet || function(e, t, r, n) {
  if (r === "a" && !n)
    throw new TypeError("Private accessor was defined without a getter");
  if (typeof t == "function" ? e !== t || !n : !t.has(e))
    throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return r === "m" ? n : r === "a" ? n.call(e) : n ? n.value : t.get(e);
}, En, Sn;
Object.defineProperty(Ua, "__esModule", { value: !0 });
class jl {
  constructor(t, r, n) {
    En.set(this, void 0), Sn.set(this, void 0), Ys(this, En, t, "f"), Ys(this, Sn, r, "f");
  }
  get plugin() {
    return Xs(this, En, "f");
  }
  get name() {
    return Xs(this, Sn, "f");
  }
}
En = /* @__PURE__ */ new WeakMap(), Sn = /* @__PURE__ */ new WeakMap();
Ua.default = jl;
var ka = {}, yt = A && A.__classPrivateFieldSet || function(e, t, r, n, i) {
  if (n === "m")
    throw new TypeError("Private method is not writable");
  if (n === "a" && !i)
    throw new TypeError("Private accessor was defined without a setter");
  if (typeof t == "function" ? e !== t || !i : !t.has(e))
    throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return n === "a" ? i.call(e, r) : i ? i.value = r : t.set(e, r), r;
}, $r = A && A.__classPrivateFieldGet || function(e, t, r, n) {
  if (r === "a" && !n)
    throw new TypeError("Private accessor was defined without a getter");
  if (typeof t == "function" ? e !== t || !n : !t.has(e))
    throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return r === "m" ? n : r === "a" ? n.call(e) : n ? n.value : t.get(e);
}, On, Dn, jn, Mr, Cr;
Object.defineProperty(ka, "__esModule", { value: !0 });
class Tl {
  constructor(t, r, n) {
    On.set(this, void 0), Dn.set(this, void 0), jn.set(this, void 0), Mr.set(this, void 0), Cr.set(this, void 0), yt(this, On, t, "f"), yt(this, Cr, !1, "f"), yt(this, Mr, !0, "f");
    let i = r;
    i.endsWith("?") && (yt(this, Mr, !1, "f"), i = i.substring(0, i.length - 1)), yt(this, Dn, i, "f");
    let a = n;
    a.endsWith("[]") && (yt(this, Cr, !0, "f"), a = a.substring(0, a.length - 2)), yt(this, jn, a, "f");
  }
  get plugin() {
    return $r(this, On, "f");
  }
  get name() {
    return $r(this, Dn, "f");
  }
  get type() {
    return $r(this, jn, "f");
  }
  get array() {
    return $r(this, Cr, "f");
  }
  get mandatory() {
    return $r(this, Mr, "f");
  }
}
On = /* @__PURE__ */ new WeakMap(), Dn = /* @__PURE__ */ new WeakMap(), jn = /* @__PURE__ */ new WeakMap(), Mr = /* @__PURE__ */ new WeakMap(), Cr = /* @__PURE__ */ new WeakMap();
ka.default = Tl;
var Pr = A && A.__classPrivateFieldSet || function(e, t, r, n, i) {
  if (n === "m")
    throw new TypeError("Private method is not writable");
  if (n === "a" && !i)
    throw new TypeError("Private accessor was defined without a setter");
  if (typeof t == "function" ? e !== t || !i : !t.has(e))
    throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return n === "a" ? i.call(e, r) : i ? i.value = r : t.set(e, r), r;
}, wr = A && A.__classPrivateFieldGet || function(e, t, r, n) {
  if (r === "a" && !n)
    throw new TypeError("Private accessor was defined without a getter");
  if (typeof t == "function" ? e !== t || !n : !t.has(e))
    throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return r === "m" ? n : r === "a" ? n.call(e) : n ? n.value : t.get(e);
}, Fa = A && A.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
}, Tn, Nn, Mn, Cn, In;
Object.defineProperty(Ra, "__esModule", { value: !0 });
const Nl = Fa(Aa), Ml = Fa(Ua), Cl = Fa(ka);
class Il {
  constructor(t, r, n) {
    Tn.set(this, void 0), Nn.set(this, void 0), Mn.set(this, void 0), Cn.set(this, void 0), In.set(this, void 0), Pr(this, Tn, t, "f"), Pr(this, Nn, `${t}/${r}`, "f");
    const i = n.properties || {};
    Pr(this, Mn, Object.keys(i).map((l) => {
      const p = i[l];
      return new Cl.default(t, l, p);
    }), "f");
    const a = n.attributes || {};
    Pr(this, Cn, Object.keys(a).map((l) => {
      const p = a[l];
      return new Nl.default(t, l, p);
    }), "f");
    const s = n.elements || {};
    Pr(this, In, Object.keys(s).map((l) => {
      const p = s[l];
      return new Ml.default(t, l, p);
    }), "f");
  }
  get plugin() {
    return wr(this, Tn, "f");
  }
  get name() {
    return wr(this, Nn, "f");
  }
  get properties() {
    return wr(this, Mn, "f").slice();
  }
  getProperty(t) {
    return this.properties.find((r) => r.name === t);
  }
  get attributes() {
    return wr(this, Cn, "f").slice();
  }
  getAttribute(t) {
    return this.attributes.find((r) => r.name === t);
  }
  get elements() {
    return wr(this, In, "f").slice();
  }
  getElement(t) {
    return this.elements.find((r) => r.name === t);
  }
}
Tn = /* @__PURE__ */ new WeakMap(), Nn = /* @__PURE__ */ new WeakMap(), Mn = /* @__PURE__ */ new WeakMap(), Cn = /* @__PURE__ */ new WeakMap(), In = /* @__PURE__ */ new WeakMap();
Ra.default = Il;
var La = {}, Va = {}, aa = A && A.__classPrivateFieldSet || function(e, t, r, n, i) {
  if (n === "m")
    throw new TypeError("Private method is not writable");
  if (n === "a" && !i)
    throw new TypeError("Private accessor was defined without a setter");
  if (typeof t == "function" ? e !== t || !i : !t.has(e))
    throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return n === "a" ? i.call(e, r) : i ? i.value = r : t.set(e, r), r;
}, sa = A && A.__classPrivateFieldGet || function(e, t, r, n) {
  if (r === "a" && !n)
    throw new TypeError("Private accessor was defined without a getter");
  if (typeof t == "function" ? e !== t || !n : !t.has(e))
    throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return r === "m" ? n : r === "a" ? n.call(e) : n ? n.value : t.get(e);
}, Rn, An, Un;
Object.defineProperty(Va, "__esModule", { value: !0 });
class Rl {
  constructor(t, r, n) {
    Rn.set(this, void 0), An.set(this, void 0), Un.set(this, void 0), aa(this, Rn, t, "f"), aa(this, An, r, "f"), aa(this, Un, n, "f");
  }
  get plugin() {
    return sa(this, Rn, "f");
  }
  get name() {
    return sa(this, An, "f");
  }
  get value() {
    return sa(this, Un, "f");
  }
}
Rn = /* @__PURE__ */ new WeakMap(), An = /* @__PURE__ */ new WeakMap(), Un = /* @__PURE__ */ new WeakMap();
Va.default = Rl;
var Wa = {}, br = A && A.__classPrivateFieldSet || function(e, t, r, n, i) {
  if (n === "m")
    throw new TypeError("Private method is not writable");
  if (n === "a" && !i)
    throw new TypeError("Private accessor was defined without a setter");
  if (typeof t == "function" ? e !== t || !i : !t.has(e))
    throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return n === "a" ? i.call(e, r) : i ? i.value = r : t.set(e, r), r;
}, Er = A && A.__classPrivateFieldGet || function(e, t, r, n) {
  if (r === "a" && !n)
    throw new TypeError("Private accessor was defined without a getter");
  if (typeof t == "function" ? e !== t || !n : !t.has(e))
    throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return r === "m" ? n : r === "a" ? n.call(e) : n ? n.value : t.get(e);
}, kn, Fn, Ln, Vn, Wn;
Object.defineProperty(Wa, "__esModule", { value: !0 });
class Al {
  constructor(t, r, n) {
    kn.set(this, void 0), Fn.set(this, void 0), Ln.set(this, void 0), Vn.set(this, void 0), Wn.set(this, void 0), br(this, kn, t, "f"), br(this, Fn, r, "f"), br(this, Ln, n.url, "f"), br(this, Vn, n.type, "f"), br(this, Wn, n.element, "f");
  }
  get plugin() {
    return Er(this, kn, "f");
  }
  get name() {
    return Er(this, Fn, "f");
  }
  get url() {
    return Er(this, Ln, "f");
  }
  get type() {
    return Er(this, Vn, "f");
  }
  get element() {
    return Er(this, Wn, "f");
  }
}
kn = /* @__PURE__ */ new WeakMap(), Fn = /* @__PURE__ */ new WeakMap(), Ln = /* @__PURE__ */ new WeakMap(), Vn = /* @__PURE__ */ new WeakMap(), Wn = /* @__PURE__ */ new WeakMap();
Wa.default = Al;
var Sr = A && A.__classPrivateFieldSet || function(e, t, r, n, i) {
  if (n === "m")
    throw new TypeError("Private method is not writable");
  if (n === "a" && !i)
    throw new TypeError("Private accessor was defined without a setter");
  if (typeof t == "function" ? e !== t || !i : !t.has(e))
    throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return n === "a" ? i.call(e, r) : i ? i.value = r : t.set(e, r), r;
}, Or = A && A.__classPrivateFieldGet || function(e, t, r, n) {
  if (r === "a" && !n)
    throw new TypeError("Private accessor was defined without a getter");
  if (typeof t == "function" ? e !== t || !n : !t.has(e))
    throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return r === "m" ? n : r === "a" ? n.call(e) : n ? n.value : t.get(e);
}, Vo = A && A.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
}, Gn, Hn, qn, zn, Kn;
Object.defineProperty(La, "__esModule", { value: !0 });
const Ul = Vo(Va), kl = Vo(Wa);
class Fl {
  constructor(t, r, n, i) {
    Gn.set(this, void 0), Hn.set(this, void 0), qn.set(this, void 0), zn.set(this, void 0), Kn.set(this, void 0), Sr(this, Gn, t, "f"), Sr(this, Hn, r, "f"), Sr(this, qn, n, "f");
    const a = i.attributes || {};
    Sr(this, zn, Object.keys(a).map((l) => {
      const p = a[l];
      return new Ul.default(t, l, p);
    }), "f");
    const s = i.elements || {};
    Sr(this, Kn, Object.keys(s).map((l) => {
      const p = s[l];
      return new kl.default(t, l, p);
    }), "f");
  }
  get plugin() {
    return Or(this, Gn, "f");
  }
  get define() {
    return Or(this, Hn, "f");
  }
  get name() {
    return Or(this, qn, "f");
  }
  get attributes() {
    return Or(this, zn, "f").slice();
  }
  get elements() {
    return Or(this, Kn, "f").slice();
  }
}
Gn = /* @__PURE__ */ new WeakMap(), Hn = /* @__PURE__ */ new WeakMap(), qn = /* @__PURE__ */ new WeakMap(), zn = /* @__PURE__ */ new WeakMap(), Kn = /* @__PURE__ */ new WeakMap();
La.default = Fl;
var Vt = A && A.__classPrivateFieldSet || function(e, t, r, n, i) {
  if (n === "m")
    throw new TypeError("Private method is not writable");
  if (n === "a" && !i)
    throw new TypeError("Private accessor was defined without a setter");
  if (typeof t == "function" ? e !== t || !i : !t.has(e))
    throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return n === "a" ? i.call(e, r) : i ? i.value = r : t.set(e, r), r;
}, Wt = A && A.__classPrivateFieldGet || function(e, t, r, n) {
  if (r === "a" && !n)
    throw new TypeError("Private accessor was defined without a getter");
  if (typeof t == "function" ? e !== t || !n : !t.has(e))
    throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return r === "m" ? n : r === "a" ? n.call(e) : n ? n.value : t.get(e);
}, Wo = A && A.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
}, Bn, Jn, Qn, Yn, Xn, Zn;
Object.defineProperty(Ia, "__esModule", { value: !0 });
const Ll = Wo(Ra), Vl = Wo(La);
class Wl {
  constructor(t, r) {
    Bn.set(this, void 0), Jn.set(this, void 0), Qn.set(this, void 0), Yn.set(this, void 0), Xn.set(this, void 0), Zn.set(this, void 0), Vt(this, Bn, t, "f"), Vt(this, Jn, r.name, "f"), Vt(this, Qn, r.url, "f"), Vt(this, Yn, r.dependencies || [], "f");
    const n = r.defines || {};
    Vt(this, Xn, Object.keys(n).map((a) => {
      const s = n[a];
      return new Ll.default(this.name, a, s);
    }), "f");
    const i = r.provides || {};
    Vt(this, Zn, Object.keys(i).reduce((a, s) => {
      const l = i[s], p = Object.keys(l).map((c) => new Vl.default(this.name, s, c, l[c]), []);
      return [...a, ...p];
    }, []), "f");
  }
  get loadUrl() {
    return Wt(this, Bn, "f");
  }
  get name() {
    return Wt(this, Jn, "f");
  }
  get url() {
    return Wt(this, Qn, "f");
  }
  get dependencies() {
    return Wt(this, Yn, "f").slice();
  }
  get defines() {
    return Wt(this, Xn, "f").slice();
  }
  get provides() {
    return Wt(this, Zn, "f").slice();
  }
}
Bn = /* @__PURE__ */ new WeakMap(), Jn = /* @__PURE__ */ new WeakMap(), Qn = /* @__PURE__ */ new WeakMap(), Yn = /* @__PURE__ */ new WeakMap(), Xn = /* @__PURE__ */ new WeakMap(), Zn = /* @__PURE__ */ new WeakMap();
Ia.default = Wl;
var Ga = {}, Ha = {}, $t = A && A.__classPrivateFieldSet || function(e, t, r, n, i) {
  if (n === "m")
    throw new TypeError("Private method is not writable");
  if (n === "a" && !i)
    throw new TypeError("Private accessor was defined without a setter");
  if (typeof t == "function" ? e !== t || !i : !t.has(e))
    throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return n === "a" ? i.call(e, r) : i ? i.value = r : t.set(e, r), r;
}, Gt = A && A.__classPrivateFieldGet || function(e, t, r, n) {
  if (r === "a" && !n)
    throw new TypeError("Private accessor was defined without a getter");
  if (typeof t == "function" ? e !== t || !n : !t.has(e))
    throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return r === "m" ? n : r === "a" ? n.call(e) : n ? n.value : t.get(e);
}, xn, Ir, ei, ti, Bt;
Object.defineProperty(Ha, "__esModule", { value: !0 });
class Gl {
  constructor(t, r, n) {
    xn.set(this, void 0), Ir.set(this, void 0), ei.set(this, void 0), ti.set(this, void 0), Bt.set(this, void 0), $t(this, xn, r.name, "f"), $t(this, Ir, r.type, "f"), $t(this, ei, r.mandatory, "f"), $t(this, ti, r.array, "f");
    const i = n.value;
    switch (Gt(this, Ir, "f")) {
      case "url": {
        Array.isArray(i) ? $t(this, Bt, i.map((a) => `${t}${a}`), "f") : $t(this, Bt, `${t}${i}`, "f");
        break;
      }
      default: {
        $t(this, Bt, i, "f");
        break;
      }
    }
  }
  get name() {
    return Gt(this, xn, "f");
  }
  get type() {
    return Gt(this, Ir, "f");
  }
  get mandatory() {
    return Gt(this, ei, "f");
  }
  get array() {
    return Gt(this, ti, "f");
  }
  get value() {
    return Gt(this, Bt, "f");
  }
}
xn = /* @__PURE__ */ new WeakMap(), Ir = /* @__PURE__ */ new WeakMap(), ei = /* @__PURE__ */ new WeakMap(), ti = /* @__PURE__ */ new WeakMap(), Bt = /* @__PURE__ */ new WeakMap();
Ha.default = Gl;
var qa = {}, ln = A && A.__classPrivateFieldSet || function(e, t, r, n, i) {
  if (n === "m")
    throw new TypeError("Private method is not writable");
  if (n === "a" && !i)
    throw new TypeError("Private accessor was defined without a setter");
  if (typeof t == "function" ? e !== t || !i : !t.has(e))
    throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return n === "a" ? i.call(e, r) : i ? i.value = r : t.set(e, r), r;
}, cn = A && A.__classPrivateFieldGet || function(e, t, r, n) {
  if (r === "a" && !n)
    throw new TypeError("Private accessor was defined without a getter");
  if (typeof t == "function" ? e !== t || !n : !t.has(e))
    throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return r === "m" ? n : r === "a" ? n.call(e) : n ? n.value : t.get(e);
}, ri, ni, ii, ai;
Object.defineProperty(qa, "__esModule", { value: !0 });
class Hl {
  constructor(t, r, n) {
    ri.set(this, void 0), ni.set(this, void 0), ii.set(this, void 0), ai.set(this, void 0), ln(this, ri, r.name, "f"), ln(this, ni, `${t}${n.url}`, "f"), ln(this, ii, n.type, "f"), ln(this, ai, n.element, "f");
  }
  get name() {
    return cn(this, ri, "f");
  }
  get url() {
    return cn(this, ni, "f");
  }
  get type() {
    return cn(this, ii, "f");
  }
  get element() {
    return cn(this, ai, "f");
  }
}
ri = /* @__PURE__ */ new WeakMap(), ni = /* @__PURE__ */ new WeakMap(), ii = /* @__PURE__ */ new WeakMap(), ai = /* @__PURE__ */ new WeakMap();
qa.default = Hl;
var oa = A && A.__classPrivateFieldSet || function(e, t, r, n, i) {
  if (n === "m")
    throw new TypeError("Private method is not writable");
  if (n === "a" && !i)
    throw new TypeError("Private accessor was defined without a setter");
  if (typeof t == "function" ? e !== t || !i : !t.has(e))
    throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return n === "a" ? i.call(e, r) : i ? i.value = r : t.set(e, r), r;
}, Ye = A && A.__classPrivateFieldGet || function(e, t, r, n) {
  if (r === "a" && !n)
    throw new TypeError("Private accessor was defined without a getter");
  if (typeof t == "function" ? e !== t || !n : !t.has(e))
    throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return r === "m" ? n : r === "a" ? n.call(e) : n ? n.value : t.get(e);
}, za = A && A.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
}, si, oi, ui, Rr, Ar;
Object.defineProperty(Ga, "__esModule", { value: !0 });
const ql = za(Li), zl = za(Ha), Kl = za(qa), Bl = ir, Zs = new ql.default("PluginManager", Bl.LogLevels.WARN);
class Jl {
  constructor(t, r, n) {
    si.set(this, void 0), oi.set(this, void 0), ui.set(this, void 0), Rr.set(this, []), Ar.set(this, []), oa(this, si, n.plugin, "f"), oa(this, oi, r.name, "f"), oa(this, ui, `${r.name}/${n.name}`, "f"), r.attributes.forEach((i) => {
      const { name: a, type: s, mandatory: l, array: p } = i, c = n.attributes.find((f) => f.name === a);
      if (l && !c)
        throw new Error(`Missing mandatory attribute '${a}'`);
      if (c) {
        if (p !== Array.isArray(c.value))
          throw new Error(`Invalid attribute type '${a}', should ${p ? "" : "not "}be an array`);
        Ye(this, Rr, "f").push(new zl.default(t, i, c));
      }
    }), n.attributes.forEach((i) => {
      r.attributes.find((s) => s.name === i.name) || Zs.warn(`${n.plugin} - ${n.name} - Attribute '${i.name}' is not defined`);
    }), r.elements.forEach((i) => {
      const { name: a } = i, s = n.elements.find((l) => l.name === a);
      if (!s)
        throw new Error(`Missing element '${a}'`);
      Ye(this, Ar, "f").push(new Kl.default(t, i, s));
    }), n.elements.forEach((i) => {
      r.elements.find((s) => s.name === i.name) || Zs.warn(`${n.plugin} - ${n.name} - Element '${i.name}' is not defined`);
    });
  }
  get plugin() {
    return Ye(this, si, "f");
  }
  get definition() {
    return Ye(this, oi, "f");
  }
  get name() {
    return Ye(this, ui, "f");
  }
  get attributes() {
    return Ye(this, Rr, "f").reduce((t, r) => (t[r.name] = r.value, t), {});
  }
  getAttributes() {
    return Ye(this, Rr, "f").slice();
  }
  getAttribute(t) {
    return this.attributes[t];
  }
  get elements() {
    return Ye(this, Ar, "f").reduce((t, r) => (t[r.name] = {
      plugin: this.plugin,
      url: r.url,
      type: r.type,
      element: r.element
    }, t), {});
  }
  getElements() {
    return Ye(this, Ar, "f").slice();
  }
  getElement(t) {
    return this.elements[t];
  }
}
si = /* @__PURE__ */ new WeakMap(), oi = /* @__PURE__ */ new WeakMap(), ui = /* @__PURE__ */ new WeakMap(), Rr = /* @__PURE__ */ new WeakMap(), Ar = /* @__PURE__ */ new WeakMap();
Ga.default = Jl;
var Go = {}, er = {}, Pa = { exports: {} }, Ho = {}, Fe = {}, tr = {}, Zr = {}, Q = {}, zr = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.regexpCode = e.getEsmExportName = e.getProperty = e.safeStringify = e.stringify = e.strConcat = e.addCodeArg = e.str = e._ = e.nil = e._Code = e.Name = e.IDENTIFIER = e._CodeOrName = void 0;
  class t {
  }
  e._CodeOrName = t, e.IDENTIFIER = /^[a-z$_][a-z$_0-9]*$/i;
  class r extends t {
    constructor(S) {
      if (super(), !e.IDENTIFIER.test(S))
        throw new Error("CodeGen: name must be a valid identifier");
      this.str = S;
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
  class n extends t {
    constructor(S) {
      super(), this._items = typeof S == "string" ? [S] : S;
    }
    toString() {
      return this.str;
    }
    emptyStr() {
      if (this._items.length > 1)
        return !1;
      const S = this._items[0];
      return S === "" || S === '""';
    }
    get str() {
      var S;
      return (S = this._str) !== null && S !== void 0 ? S : this._str = this._items.reduce(($, w) => `${$}${w}`, "");
    }
    get names() {
      var S;
      return (S = this._names) !== null && S !== void 0 ? S : this._names = this._items.reduce(($, w) => (w instanceof r && ($[w.str] = ($[w.str] || 0) + 1), $), {});
    }
  }
  e._Code = n, e.nil = new n("");
  function i(d, ...S) {
    const $ = [d[0]];
    let w = 0;
    for (; w < S.length; )
      l($, S[w]), $.push(d[++w]);
    return new n($);
  }
  e._ = i;
  const a = new n("+");
  function s(d, ...S) {
    const $ = [j(d[0])];
    let w = 0;
    for (; w < S.length; )
      $.push(a), l($, S[w]), $.push(a, j(d[++w]));
    return p($), new n($);
  }
  e.str = s;
  function l(d, S) {
    S instanceof n ? d.push(...S._items) : S instanceof r ? d.push(S) : d.push(h(S));
  }
  e.addCodeArg = l;
  function p(d) {
    let S = 1;
    for (; S < d.length - 1; ) {
      if (d[S] === a) {
        const $ = c(d[S - 1], d[S + 1]);
        if ($ !== void 0) {
          d.splice(S - 1, 3, $);
          continue;
        }
        d[S++] = "+";
      }
      S++;
    }
  }
  function c(d, S) {
    if (S === '""')
      return d;
    if (d === '""')
      return S;
    if (typeof d == "string")
      return S instanceof r || d[d.length - 1] !== '"' ? void 0 : typeof S != "string" ? `${d.slice(0, -1)}${S}"` : S[0] === '"' ? d.slice(0, -1) + S.slice(1) : void 0;
    if (typeof S == "string" && S[0] === '"' && !(d instanceof r))
      return `"${d}${S.slice(1)}`;
  }
  function f(d, S) {
    return S.emptyStr() ? d : d.emptyStr() ? S : s`${d}${S}`;
  }
  e.strConcat = f;
  function h(d) {
    return typeof d == "number" || typeof d == "boolean" || d === null ? d : j(Array.isArray(d) ? d.join(",") : d);
  }
  function b(d) {
    return new n(j(d));
  }
  e.stringify = b;
  function j(d) {
    return JSON.stringify(d).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029");
  }
  e.safeStringify = j;
  function E(d) {
    return typeof d == "string" && e.IDENTIFIER.test(d) ? new n(`.${d}`) : i`[${d}]`;
  }
  e.getProperty = E;
  function O(d) {
    if (typeof d == "string" && e.IDENTIFIER.test(d))
      return new n(`${d}`);
    throw new Error(`CodeGen: invalid export name: ${d}, use explicit $id name mapping`);
  }
  e.getEsmExportName = O;
  function P(d) {
    return new n(d.toString());
  }
  e.regexpCode = P;
})(zr);
var wa = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.ValueScope = e.ValueScopeName = e.Scope = e.varKinds = e.UsedValueState = void 0;
  const t = zr;
  class r extends Error {
    constructor(c) {
      super(`CodeGen: "code" for ${c} not defined`), this.value = c.value;
    }
  }
  var n;
  (function(p) {
    p[p.Started = 0] = "Started", p[p.Completed = 1] = "Completed";
  })(n = e.UsedValueState || (e.UsedValueState = {})), e.varKinds = {
    const: new t.Name("const"),
    let: new t.Name("let"),
    var: new t.Name("var")
  };
  class i {
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
  e.Scope = i;
  class a extends t.Name {
    constructor(c, f) {
      super(f), this.prefix = c;
    }
    setValue(c, { property: f, itemIndex: h }) {
      this.value = c, this.scopePath = (0, t._)`.${new t.Name(f)}[${h}]`;
    }
  }
  e.ValueScopeName = a;
  const s = (0, t._)`\n`;
  class l extends i {
    constructor(c) {
      super(c), this._values = {}, this._scope = c.scope, this.opts = { ...c, _n: c.lines ? s : t.nil };
    }
    get() {
      return this._scope;
    }
    name(c) {
      return new a(c, this._newName(c));
    }
    value(c, f) {
      var h;
      if (f.ref === void 0)
        throw new Error("CodeGen: ref must be passed in value");
      const b = this.toName(c), { prefix: j } = b, E = (h = f.key) !== null && h !== void 0 ? h : f.ref;
      let O = this._values[j];
      if (O) {
        const S = O.get(E);
        if (S)
          return S;
      } else
        O = this._values[j] = /* @__PURE__ */ new Map();
      O.set(E, b);
      const P = this._scope[j] || (this._scope[j] = []), d = P.length;
      return P[d] = f.ref, b.setValue(f, { property: j, itemIndex: d }), b;
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
      return this._reduceValues(c, (b) => {
        if (b.value === void 0)
          throw new Error(`CodeGen: name "${b}" has no value`);
        return b.value.code;
      }, f, h);
    }
    _reduceValues(c, f, h = {}, b) {
      let j = t.nil;
      for (const E in c) {
        const O = c[E];
        if (!O)
          continue;
        const P = h[E] = h[E] || /* @__PURE__ */ new Map();
        O.forEach((d) => {
          if (P.has(d))
            return;
          P.set(d, n.Started);
          let S = f(d);
          if (S) {
            const $ = this.opts.es5 ? e.varKinds.var : e.varKinds.const;
            j = (0, t._)`${j}${$} ${d} = ${S};${this.opts._n}`;
          } else if (S = b == null ? void 0 : b(d))
            j = (0, t._)`${j}${S}${this.opts._n}`;
          else
            throw new r(d);
          P.set(d, n.Completed);
        });
      }
      return j;
    }
  }
  e.ValueScope = l;
})(wa);
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.or = e.and = e.not = e.CodeGen = e.operators = e.varKinds = e.ValueScopeName = e.ValueScope = e.Scope = e.Name = e.regexpCode = e.stringify = e.getProperty = e.nil = e.strConcat = e.str = e._ = void 0;
  const t = zr, r = wa;
  var n = zr;
  Object.defineProperty(e, "_", { enumerable: !0, get: function() {
    return n._;
  } }), Object.defineProperty(e, "str", { enumerable: !0, get: function() {
    return n.str;
  } }), Object.defineProperty(e, "strConcat", { enumerable: !0, get: function() {
    return n.strConcat;
  } }), Object.defineProperty(e, "nil", { enumerable: !0, get: function() {
    return n.nil;
  } }), Object.defineProperty(e, "getProperty", { enumerable: !0, get: function() {
    return n.getProperty;
  } }), Object.defineProperty(e, "stringify", { enumerable: !0, get: function() {
    return n.stringify;
  } }), Object.defineProperty(e, "regexpCode", { enumerable: !0, get: function() {
    return n.regexpCode;
  } }), Object.defineProperty(e, "Name", { enumerable: !0, get: function() {
    return n.Name;
  } });
  var i = wa;
  Object.defineProperty(e, "Scope", { enumerable: !0, get: function() {
    return i.Scope;
  } }), Object.defineProperty(e, "ValueScope", { enumerable: !0, get: function() {
    return i.ValueScope;
  } }), Object.defineProperty(e, "ValueScopeName", { enumerable: !0, get: function() {
    return i.ValueScopeName;
  } }), Object.defineProperty(e, "varKinds", { enumerable: !0, get: function() {
    return i.varKinds;
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
  class a {
    optimizeNodes() {
      return this;
    }
    optimizeNames(o, g) {
      return this;
    }
  }
  class s extends a {
    constructor(o, g, R) {
      super(), this.varKind = o, this.name = g, this.rhs = R;
    }
    render({ es5: o, _n: g }) {
      const R = o ? r.varKinds.var : this.varKind, F = this.rhs === void 0 ? "" : ` = ${this.rhs}`;
      return `${R} ${this.name}${F};` + g;
    }
    optimizeNames(o, g) {
      if (o[this.name.str])
        return this.rhs && (this.rhs = fe(this.rhs, o, g)), this;
    }
    get names() {
      return this.rhs instanceof t._CodeOrName ? this.rhs.names : {};
    }
  }
  class l extends a {
    constructor(o, g, R) {
      super(), this.lhs = o, this.rhs = g, this.sideEffects = R;
    }
    render({ _n: o }) {
      return `${this.lhs} = ${this.rhs};` + o;
    }
    optimizeNames(o, g) {
      if (!(this.lhs instanceof t.Name && !o[this.lhs.str] && !this.sideEffects))
        return this.rhs = fe(this.rhs, o, g), this;
    }
    get names() {
      const o = this.lhs instanceof t.Name ? {} : { ...this.lhs.names };
      return je(o, this.rhs);
    }
  }
  class p extends l {
    constructor(o, g, R, F) {
      super(o, R, F), this.op = g;
    }
    render({ _n: o }) {
      return `${this.lhs} ${this.op}= ${this.rhs};` + o;
    }
  }
  class c extends a {
    constructor(o) {
      super(), this.label = o, this.names = {};
    }
    render({ _n: o }) {
      return `${this.label}:` + o;
    }
  }
  class f extends a {
    constructor(o) {
      super(), this.label = o, this.names = {};
    }
    render({ _n: o }) {
      return `break${this.label ? ` ${this.label}` : ""};` + o;
    }
  }
  class h extends a {
    constructor(o) {
      super(), this.error = o;
    }
    render({ _n: o }) {
      return `throw ${this.error};` + o;
    }
    get names() {
      return this.error.names;
    }
  }
  class b extends a {
    constructor(o) {
      super(), this.code = o;
    }
    render({ _n: o }) {
      return `${this.code};` + o;
    }
    optimizeNodes() {
      return `${this.code}` ? this : void 0;
    }
    optimizeNames(o, g) {
      return this.code = fe(this.code, o, g), this;
    }
    get names() {
      return this.code instanceof t._CodeOrName ? this.code.names : {};
    }
  }
  class j extends a {
    constructor(o = []) {
      super(), this.nodes = o;
    }
    render(o) {
      return this.nodes.reduce((g, R) => g + R.render(o), "");
    }
    optimizeNodes() {
      const { nodes: o } = this;
      let g = o.length;
      for (; g--; ) {
        const R = o[g].optimizeNodes();
        Array.isArray(R) ? o.splice(g, 1, ...R) : R ? o[g] = R : o.splice(g, 1);
      }
      return o.length > 0 ? this : void 0;
    }
    optimizeNames(o, g) {
      const { nodes: R } = this;
      let F = R.length;
      for (; F--; ) {
        const V = R[F];
        V.optimizeNames(o, g) || (dt(o, V.names), R.splice(F, 1));
      }
      return R.length > 0 ? this : void 0;
    }
    get names() {
      return this.nodes.reduce((o, g) => x(o, g.names), {});
    }
  }
  class E extends j {
    render(o) {
      return "{" + o._n + super.render(o) + "}" + o._n;
    }
  }
  class O extends j {
  }
  class P extends E {
  }
  P.kind = "else";
  class d extends E {
    constructor(o, g) {
      super(g), this.condition = o;
    }
    render(o) {
      let g = `if(${this.condition})` + super.render(o);
      return this.else && (g += "else " + this.else.render(o)), g;
    }
    optimizeNodes() {
      super.optimizeNodes();
      const o = this.condition;
      if (o === !0)
        return this.nodes;
      let g = this.else;
      if (g) {
        const R = g.optimizeNodes();
        g = this.else = Array.isArray(R) ? new P(R) : R;
      }
      if (g)
        return o === !1 ? g instanceof d ? g : g.nodes : this.nodes.length ? this : new d(ft(o), g instanceof d ? [g] : g.nodes);
      if (!(o === !1 || !this.nodes.length))
        return this;
    }
    optimizeNames(o, g) {
      var R;
      if (this.else = (R = this.else) === null || R === void 0 ? void 0 : R.optimizeNames(o, g), !!(super.optimizeNames(o, g) || this.else))
        return this.condition = fe(this.condition, o, g), this;
    }
    get names() {
      const o = super.names;
      return je(o, this.condition), this.else && x(o, this.else.names), o;
    }
  }
  d.kind = "if";
  class S extends E {
  }
  S.kind = "for";
  class $ extends S {
    constructor(o) {
      super(), this.iteration = o;
    }
    render(o) {
      return `for(${this.iteration})` + super.render(o);
    }
    optimizeNames(o, g) {
      if (super.optimizeNames(o, g))
        return this.iteration = fe(this.iteration, o, g), this;
    }
    get names() {
      return x(super.names, this.iteration.names);
    }
  }
  class w extends S {
    constructor(o, g, R, F) {
      super(), this.varKind = o, this.name = g, this.from = R, this.to = F;
    }
    render(o) {
      const g = o.es5 ? r.varKinds.var : this.varKind, { name: R, from: F, to: V } = this;
      return `for(${g} ${R}=${F}; ${R}<${V}; ${R}++)` + super.render(o);
    }
    get names() {
      const o = je(super.names, this.from);
      return je(o, this.to);
    }
  }
  class I extends S {
    constructor(o, g, R, F) {
      super(), this.loop = o, this.varKind = g, this.name = R, this.iterable = F;
    }
    render(o) {
      return `for(${this.varKind} ${this.name} ${this.loop} ${this.iterable})` + super.render(o);
    }
    optimizeNames(o, g) {
      if (super.optimizeNames(o, g))
        return this.iterable = fe(this.iterable, o, g), this;
    }
    get names() {
      return x(super.names, this.iterable.names);
    }
  }
  class m extends E {
    constructor(o, g, R) {
      super(), this.name = o, this.args = g, this.async = R;
    }
    render(o) {
      return `${this.async ? "async " : ""}function ${this.name}(${this.args})` + super.render(o);
    }
  }
  m.kind = "func";
  class _ extends j {
    render(o) {
      return "return " + super.render(o);
    }
  }
  _.kind = "return";
  class C extends E {
    render(o) {
      let g = "try" + super.render(o);
      return this.catch && (g += this.catch.render(o)), this.finally && (g += this.finally.render(o)), g;
    }
    optimizeNodes() {
      var o, g;
      return super.optimizeNodes(), (o = this.catch) === null || o === void 0 || o.optimizeNodes(), (g = this.finally) === null || g === void 0 || g.optimizeNodes(), this;
    }
    optimizeNames(o, g) {
      var R, F;
      return super.optimizeNames(o, g), (R = this.catch) === null || R === void 0 || R.optimizeNames(o, g), (F = this.finally) === null || F === void 0 || F.optimizeNames(o, g), this;
    }
    get names() {
      const o = super.names;
      return this.catch && x(o, this.catch.names), this.finally && x(o, this.finally.names), o;
    }
  }
  class L extends E {
    constructor(o) {
      super(), this.error = o;
    }
    render(o) {
      return `catch(${this.error})` + super.render(o);
    }
  }
  L.kind = "catch";
  class q extends E {
    render(o) {
      return "finally" + super.render(o);
    }
  }
  q.kind = "finally";
  class re {
    constructor(o, g = {}) {
      this._values = {}, this._blockStarts = [], this._constants = {}, this.opts = { ...g, _n: g.lines ? `
` : "" }, this._extScope = o, this._scope = new r.Scope({ parent: o }), this._nodes = [new O()];
    }
    toString() {
      return this._root.render(this.opts);
    }
    // returns unique name in the internal scope
    name(o) {
      return this._scope.name(o);
    }
    // reserves unique name in the external scope
    scopeName(o) {
      return this._extScope.name(o);
    }
    // reserves unique name in the external scope and assigns value to it
    scopeValue(o, g) {
      const R = this._extScope.value(o, g);
      return (this._values[R.prefix] || (this._values[R.prefix] = /* @__PURE__ */ new Set())).add(R), R;
    }
    getScopeValue(o, g) {
      return this._extScope.getValue(o, g);
    }
    // return code that assigns values in the external scope to the names that are used internally
    // (same names that were returned by gen.scopeName or gen.scopeValue)
    scopeRefs(o) {
      return this._extScope.scopeRefs(o, this._values);
    }
    scopeCode() {
      return this._extScope.scopeCode(this._values);
    }
    _def(o, g, R, F) {
      const V = this._scope.toName(g);
      return R !== void 0 && F && (this._constants[V.str] = R), this._leafNode(new s(o, V, R)), V;
    }
    // `const` declaration (`var` in es5 mode)
    const(o, g, R) {
      return this._def(r.varKinds.const, o, g, R);
    }
    // `let` declaration with optional assignment (`var` in es5 mode)
    let(o, g, R) {
      return this._def(r.varKinds.let, o, g, R);
    }
    // `var` declaration with optional assignment
    var(o, g, R) {
      return this._def(r.varKinds.var, o, g, R);
    }
    // assignment code
    assign(o, g, R) {
      return this._leafNode(new l(o, g, R));
    }
    // `+=` code
    add(o, g) {
      return this._leafNode(new p(o, e.operators.ADD, g));
    }
    // appends passed SafeExpr to code or executes Block
    code(o) {
      return typeof o == "function" ? o() : o !== t.nil && this._leafNode(new b(o)), this;
    }
    // returns code for object literal for the passed argument list of key-value pairs
    object(...o) {
      const g = ["{"];
      for (const [R, F] of o)
        g.length > 1 && g.push(","), g.push(R), (R !== F || this.opts.es5) && (g.push(":"), (0, t.addCodeArg)(g, F));
      return g.push("}"), new t._Code(g);
    }
    // `if` clause (or statement if `thenBody` and, optionally, `elseBody` are passed)
    if(o, g, R) {
      if (this._blockNode(new d(o)), g && R)
        this.code(g).else().code(R).endIf();
      else if (g)
        this.code(g).endIf();
      else if (R)
        throw new Error('CodeGen: "else" body without "then" body');
      return this;
    }
    // `else if` clause - invalid without `if` or after `else` clauses
    elseIf(o) {
      return this._elseNode(new d(o));
    }
    // `else` clause - only valid after `if` or `else if` clauses
    else() {
      return this._elseNode(new P());
    }
    // end `if` statement (needed if gen.if was used only with condition)
    endIf() {
      return this._endBlockNode(d, P);
    }
    _for(o, g) {
      return this._blockNode(o), g && this.code(g).endFor(), this;
    }
    // a generic `for` clause (or statement if `forBody` is passed)
    for(o, g) {
      return this._for(new $(o), g);
    }
    // `for` statement for a range of values
    forRange(o, g, R, F, V = this.opts.es5 ? r.varKinds.var : r.varKinds.let) {
      const Y = this._scope.toName(o);
      return this._for(new w(V, Y, g, R), () => F(Y));
    }
    // `for-of` statement (in es5 mode replace with a normal for loop)
    forOf(o, g, R, F = r.varKinds.const) {
      const V = this._scope.toName(o);
      if (this.opts.es5) {
        const Y = g instanceof t.Name ? g : this.var("_arr", g);
        return this.forRange("_i", 0, (0, t._)`${Y}.length`, (Z) => {
          this.var(V, (0, t._)`${Y}[${Z}]`), R(V);
        });
      }
      return this._for(new I("of", F, V, g), () => R(V));
    }
    // `for-in` statement.
    // With option `ownProperties` replaced with a `for-of` loop for object keys
    forIn(o, g, R, F = this.opts.es5 ? r.varKinds.var : r.varKinds.const) {
      if (this.opts.ownProperties)
        return this.forOf(o, (0, t._)`Object.keys(${g})`, R);
      const V = this._scope.toName(o);
      return this._for(new I("in", F, V, g), () => R(V));
    }
    // end `for` loop
    endFor() {
      return this._endBlockNode(S);
    }
    // `label` statement
    label(o) {
      return this._leafNode(new c(o));
    }
    // `break` statement
    break(o) {
      return this._leafNode(new f(o));
    }
    // `return` statement
    return(o) {
      const g = new _();
      if (this._blockNode(g), this.code(o), g.nodes.length !== 1)
        throw new Error('CodeGen: "return" should have one node');
      return this._endBlockNode(_);
    }
    // `try` statement
    try(o, g, R) {
      if (!g && !R)
        throw new Error('CodeGen: "try" without "catch" and "finally"');
      const F = new C();
      if (this._blockNode(F), this.code(o), g) {
        const V = this.name("e");
        this._currNode = F.catch = new L(V), g(V);
      }
      return R && (this._currNode = F.finally = new q(), this.code(R)), this._endBlockNode(L, q);
    }
    // `throw` statement
    throw(o) {
      return this._leafNode(new h(o));
    }
    // start self-balancing block
    block(o, g) {
      return this._blockStarts.push(this._nodes.length), o && this.code(o).endBlock(g), this;
    }
    // end the current self-balancing block
    endBlock(o) {
      const g = this._blockStarts.pop();
      if (g === void 0)
        throw new Error("CodeGen: not in self-balancing block");
      const R = this._nodes.length - g;
      if (R < 0 || o !== void 0 && R !== o)
        throw new Error(`CodeGen: wrong number of nodes: ${R} vs ${o} expected`);
      return this._nodes.length = g, this;
    }
    // `function` heading (or definition if funcBody is passed)
    func(o, g = t.nil, R, F) {
      return this._blockNode(new m(o, g, R)), F && this.code(F).endFunc(), this;
    }
    // end function definition
    endFunc() {
      return this._endBlockNode(m);
    }
    optimize(o = 1) {
      for (; o-- > 0; )
        this._root.optimizeNodes(), this._root.optimizeNames(this._root.names, this._constants);
    }
    _leafNode(o) {
      return this._currNode.nodes.push(o), this;
    }
    _blockNode(o) {
      this._currNode.nodes.push(o), this._nodes.push(o);
    }
    _endBlockNode(o, g) {
      const R = this._currNode;
      if (R instanceof o || g && R instanceof g)
        return this._nodes.pop(), this;
      throw new Error(`CodeGen: not in block "${g ? `${o.kind}/${g.kind}` : o.kind}"`);
    }
    _elseNode(o) {
      const g = this._currNode;
      if (!(g instanceof d))
        throw new Error('CodeGen: "else" without "if"');
      return this._currNode = g.else = o, this;
    }
    get _root() {
      return this._nodes[0];
    }
    get _currNode() {
      const o = this._nodes;
      return o[o.length - 1];
    }
    set _currNode(o) {
      const g = this._nodes;
      g[g.length - 1] = o;
    }
  }
  e.CodeGen = re;
  function x(T, o) {
    for (const g in o)
      T[g] = (T[g] || 0) + (o[g] || 0);
    return T;
  }
  function je(T, o) {
    return o instanceof t._CodeOrName ? x(T, o.names) : T;
  }
  function fe(T, o, g) {
    if (T instanceof t.Name)
      return R(T);
    if (!F(T))
      return T;
    return new t._Code(T._items.reduce((V, Y) => (Y instanceof t.Name && (Y = R(Y)), Y instanceof t._Code ? V.push(...Y._items) : V.push(Y), V), []));
    function R(V) {
      const Y = g[V.str];
      return Y === void 0 || o[V.str] !== 1 ? V : (delete o[V.str], Y);
    }
    function F(V) {
      return V instanceof t._Code && V._items.some((Y) => Y instanceof t.Name && o[Y.str] === 1 && g[Y.str] !== void 0);
    }
  }
  function dt(T, o) {
    for (const g in o)
      T[g] = (T[g] || 0) - (o[g] || 0);
  }
  function ft(T) {
    return typeof T == "boolean" || typeof T == "number" || T === null ? !T : (0, t._)`!${U(T)}`;
  }
  e.not = ft;
  const Nt = D(e.operators.AND);
  function or(...T) {
    return T.reduce(Nt);
  }
  e.and = or;
  const Mt = D(e.operators.OR);
  function k(...T) {
    return T.reduce(Mt);
  }
  e.or = k;
  function D(T) {
    return (o, g) => o === t.nil ? g : g === t.nil ? o : (0, t._)`${U(o)} ${T} ${U(g)}`;
  }
  function U(T) {
    return T instanceof t.Name ? T : (0, t._)`(${T})`;
  }
})(Q);
var te = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.checkStrictMode = e.getErrorPath = e.Type = e.useFunc = e.setEvaluated = e.evaluatedPropsToName = e.mergeEvaluated = e.eachItem = e.unescapeJsonPointer = e.escapeJsonPointer = e.escapeFragment = e.unescapeFragment = e.schemaRefOrVal = e.schemaHasRulesButRef = e.schemaHasRules = e.checkUnknownRules = e.alwaysValidSchema = e.toHash = void 0;
  const t = Q, r = zr;
  function n(m) {
    const _ = {};
    for (const C of m)
      _[C] = !0;
    return _;
  }
  e.toHash = n;
  function i(m, _) {
    return typeof _ == "boolean" ? _ : Object.keys(_).length === 0 ? !0 : (a(m, _), !s(_, m.self.RULES.all));
  }
  e.alwaysValidSchema = i;
  function a(m, _ = m.schema) {
    const { opts: C, self: L } = m;
    if (!C.strictSchema || typeof _ == "boolean")
      return;
    const q = L.RULES.keywords;
    for (const re in _)
      q[re] || I(m, `unknown keyword: "${re}"`);
  }
  e.checkUnknownRules = a;
  function s(m, _) {
    if (typeof m == "boolean")
      return !m;
    for (const C in m)
      if (_[C])
        return !0;
    return !1;
  }
  e.schemaHasRules = s;
  function l(m, _) {
    if (typeof m == "boolean")
      return !m;
    for (const C in m)
      if (C !== "$ref" && _.all[C])
        return !0;
    return !1;
  }
  e.schemaHasRulesButRef = l;
  function p({ topSchemaRef: m, schemaPath: _ }, C, L, q) {
    if (!q) {
      if (typeof C == "number" || typeof C == "boolean")
        return C;
      if (typeof C == "string")
        return (0, t._)`${C}`;
    }
    return (0, t._)`${m}${_}${(0, t.getProperty)(L)}`;
  }
  e.schemaRefOrVal = p;
  function c(m) {
    return b(decodeURIComponent(m));
  }
  e.unescapeFragment = c;
  function f(m) {
    return encodeURIComponent(h(m));
  }
  e.escapeFragment = f;
  function h(m) {
    return typeof m == "number" ? `${m}` : m.replace(/~/g, "~0").replace(/\//g, "~1");
  }
  e.escapeJsonPointer = h;
  function b(m) {
    return m.replace(/~1/g, "/").replace(/~0/g, "~");
  }
  e.unescapeJsonPointer = b;
  function j(m, _) {
    if (Array.isArray(m))
      for (const C of m)
        _(C);
    else
      _(m);
  }
  e.eachItem = j;
  function E({ mergeNames: m, mergeToName: _, mergeValues: C, resultToName: L }) {
    return (q, re, x, je) => {
      const fe = x === void 0 ? re : x instanceof t.Name ? (re instanceof t.Name ? m(q, re, x) : _(q, re, x), x) : re instanceof t.Name ? (_(q, x, re), re) : C(re, x);
      return je === t.Name && !(fe instanceof t.Name) ? L(q, fe) : fe;
    };
  }
  e.mergeEvaluated = {
    props: E({
      mergeNames: (m, _, C) => m.if((0, t._)`${C} !== true && ${_} !== undefined`, () => {
        m.if((0, t._)`${_} === true`, () => m.assign(C, !0), () => m.assign(C, (0, t._)`${C} || {}`).code((0, t._)`Object.assign(${C}, ${_})`));
      }),
      mergeToName: (m, _, C) => m.if((0, t._)`${C} !== true`, () => {
        _ === !0 ? m.assign(C, !0) : (m.assign(C, (0, t._)`${C} || {}`), P(m, C, _));
      }),
      mergeValues: (m, _) => m === !0 ? !0 : { ...m, ..._ },
      resultToName: O
    }),
    items: E({
      mergeNames: (m, _, C) => m.if((0, t._)`${C} !== true && ${_} !== undefined`, () => m.assign(C, (0, t._)`${_} === true ? true : ${C} > ${_} ? ${C} : ${_}`)),
      mergeToName: (m, _, C) => m.if((0, t._)`${C} !== true`, () => m.assign(C, _ === !0 ? !0 : (0, t._)`${C} > ${_} ? ${C} : ${_}`)),
      mergeValues: (m, _) => m === !0 ? !0 : Math.max(m, _),
      resultToName: (m, _) => m.var("items", _)
    })
  };
  function O(m, _) {
    if (_ === !0)
      return m.var("props", !0);
    const C = m.var("props", (0, t._)`{}`);
    return _ !== void 0 && P(m, C, _), C;
  }
  e.evaluatedPropsToName = O;
  function P(m, _, C) {
    Object.keys(C).forEach((L) => m.assign((0, t._)`${_}${(0, t.getProperty)(L)}`, !0));
  }
  e.setEvaluated = P;
  const d = {};
  function S(m, _) {
    return m.scopeValue("func", {
      ref: _,
      code: d[_.code] || (d[_.code] = new r._Code(_.code))
    });
  }
  e.useFunc = S;
  var $;
  (function(m) {
    m[m.Num = 0] = "Num", m[m.Str = 1] = "Str";
  })($ = e.Type || (e.Type = {}));
  function w(m, _, C) {
    if (m instanceof t.Name) {
      const L = _ === $.Num;
      return C ? L ? (0, t._)`"[" + ${m} + "]"` : (0, t._)`"['" + ${m} + "']"` : L ? (0, t._)`"/" + ${m}` : (0, t._)`"/" + ${m}.replace(/~/g, "~0").replace(/\\//g, "~1")`;
    }
    return C ? (0, t.getProperty)(m).toString() : "/" + h(m);
  }
  e.getErrorPath = w;
  function I(m, _, C = m.opts.strictSchema) {
    if (C) {
      if (_ = `strict mode: ${_}`, C === !0)
        throw new Error(_);
      m.self.logger.warn(_);
    }
  }
  e.checkStrictMode = I;
})(te);
var Je = {};
Object.defineProperty(Je, "__esModule", { value: !0 });
const ve = Q, Ql = {
  // validation function arguments
  data: new ve.Name("data"),
  // args passed from referencing schema
  valCxt: new ve.Name("valCxt"),
  instancePath: new ve.Name("instancePath"),
  parentData: new ve.Name("parentData"),
  parentDataProperty: new ve.Name("parentDataProperty"),
  rootData: new ve.Name("rootData"),
  dynamicAnchors: new ve.Name("dynamicAnchors"),
  // function scoped variables
  vErrors: new ve.Name("vErrors"),
  errors: new ve.Name("errors"),
  this: new ve.Name("this"),
  // "globals"
  self: new ve.Name("self"),
  scope: new ve.Name("scope"),
  // JTD serialize/parse name for JSON string and position
  json: new ve.Name("json"),
  jsonPos: new ve.Name("jsonPos"),
  jsonLen: new ve.Name("jsonLen"),
  jsonPart: new ve.Name("jsonPart")
};
Je.default = Ql;
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.extendErrors = e.resetErrorsCount = e.reportExtraError = e.reportError = e.keyword$DataError = e.keywordError = void 0;
  const t = Q, r = te, n = Je;
  e.keywordError = {
    message: ({ keyword: P }) => (0, t.str)`must pass "${P}" keyword validation`
  }, e.keyword$DataError = {
    message: ({ keyword: P, schemaType: d }) => d ? (0, t.str)`"${P}" keyword must be ${d} ($data)` : (0, t.str)`"${P}" keyword is invalid ($data)`
  };
  function i(P, d = e.keywordError, S, $) {
    const { it: w } = P, { gen: I, compositeRule: m, allErrors: _ } = w, C = h(P, d, S);
    $ ?? (m || _) ? p(I, C) : c(w, (0, t._)`[${C}]`);
  }
  e.reportError = i;
  function a(P, d = e.keywordError, S) {
    const { it: $ } = P, { gen: w, compositeRule: I, allErrors: m } = $, _ = h(P, d, S);
    p(w, _), I || m || c($, n.default.vErrors);
  }
  e.reportExtraError = a;
  function s(P, d) {
    P.assign(n.default.errors, d), P.if((0, t._)`${n.default.vErrors} !== null`, () => P.if(d, () => P.assign((0, t._)`${n.default.vErrors}.length`, d), () => P.assign(n.default.vErrors, null)));
  }
  e.resetErrorsCount = s;
  function l({ gen: P, keyword: d, schemaValue: S, data: $, errsCount: w, it: I }) {
    if (w === void 0)
      throw new Error("ajv implementation error");
    const m = P.name("err");
    P.forRange("i", w, n.default.errors, (_) => {
      P.const(m, (0, t._)`${n.default.vErrors}[${_}]`), P.if((0, t._)`${m}.instancePath === undefined`, () => P.assign((0, t._)`${m}.instancePath`, (0, t.strConcat)(n.default.instancePath, I.errorPath))), P.assign((0, t._)`${m}.schemaPath`, (0, t.str)`${I.errSchemaPath}/${d}`), I.opts.verbose && (P.assign((0, t._)`${m}.schema`, S), P.assign((0, t._)`${m}.data`, $));
    });
  }
  e.extendErrors = l;
  function p(P, d) {
    const S = P.const("err", d);
    P.if((0, t._)`${n.default.vErrors} === null`, () => P.assign(n.default.vErrors, (0, t._)`[${S}]`), (0, t._)`${n.default.vErrors}.push(${S})`), P.code((0, t._)`${n.default.errors}++`);
  }
  function c(P, d) {
    const { gen: S, validateName: $, schemaEnv: w } = P;
    w.$async ? S.throw((0, t._)`new ${P.ValidationError}(${d})`) : (S.assign((0, t._)`${$}.errors`, d), S.return(!1));
  }
  const f = {
    keyword: new t.Name("keyword"),
    schemaPath: new t.Name("schemaPath"),
    params: new t.Name("params"),
    propertyName: new t.Name("propertyName"),
    message: new t.Name("message"),
    schema: new t.Name("schema"),
    parentSchema: new t.Name("parentSchema")
  };
  function h(P, d, S) {
    const { createErrors: $ } = P.it;
    return $ === !1 ? (0, t._)`{}` : b(P, d, S);
  }
  function b(P, d, S = {}) {
    const { gen: $, it: w } = P, I = [
      j(w, S),
      E(P, S)
    ];
    return O(P, d, I), $.object(...I);
  }
  function j({ errorPath: P }, { instancePath: d }) {
    const S = d ? (0, t.str)`${P}${(0, r.getErrorPath)(d, r.Type.Str)}` : P;
    return [n.default.instancePath, (0, t.strConcat)(n.default.instancePath, S)];
  }
  function E({ keyword: P, it: { errSchemaPath: d } }, { schemaPath: S, parentSchema: $ }) {
    let w = $ ? d : (0, t.str)`${d}/${P}`;
    return S && (w = (0, t.str)`${w}${(0, r.getErrorPath)(S, r.Type.Str)}`), [f.schemaPath, w];
  }
  function O(P, { params: d, message: S }, $) {
    const { keyword: w, data: I, schemaValue: m, it: _ } = P, { opts: C, propertyName: L, topSchemaRef: q, schemaPath: re } = _;
    $.push([f.keyword, w], [f.params, typeof d == "function" ? d(P) : d || (0, t._)`{}`]), C.messages && $.push([f.message, typeof S == "function" ? S(P) : S]), C.verbose && $.push([f.schema, m], [f.parentSchema, (0, t._)`${q}${re}`], [n.default.data, I]), L && $.push([f.propertyName, L]);
  }
})(Zr);
Object.defineProperty(tr, "__esModule", { value: !0 });
tr.boolOrEmptySchema = tr.topBoolOrEmptySchema = void 0;
const Yl = Zr, Xl = Q, Zl = Je, xl = {
  message: "boolean schema is false"
};
function ec(e) {
  const { gen: t, schema: r, validateName: n } = e;
  r === !1 ? qo(e, !1) : typeof r == "object" && r.$async === !0 ? t.return(Zl.default.data) : (t.assign((0, Xl._)`${n}.errors`, null), t.return(!0));
}
tr.topBoolOrEmptySchema = ec;
function tc(e, t) {
  const { gen: r, schema: n } = e;
  n === !1 ? (r.var(t, !1), qo(e)) : r.var(t, !0);
}
tr.boolOrEmptySchema = tc;
function qo(e, t) {
  const { gen: r, data: n } = e, i = {
    gen: r,
    keyword: "false schema",
    data: n,
    schema: !1,
    schemaCode: !1,
    schemaValue: !1,
    params: {},
    it: e
  };
  (0, Yl.reportError)(i, xl, void 0, t);
}
var xr = {}, jt = {};
Object.defineProperty(jt, "__esModule", { value: !0 });
jt.getRules = jt.isJSONType = void 0;
const rc = ["string", "number", "integer", "boolean", "null", "object", "array"], nc = new Set(rc);
function ic(e) {
  return typeof e == "string" && nc.has(e);
}
jt.isJSONType = ic;
function ac() {
  const e = {
    number: { type: "number", rules: [] },
    string: { type: "string", rules: [] },
    array: { type: "array", rules: [] },
    object: { type: "object", rules: [] }
  };
  return {
    types: { ...e, integer: !0, boolean: !0, null: !0 },
    rules: [{ rules: [] }, e.number, e.string, e.array, e.object],
    post: { rules: [] },
    all: {},
    keywords: {}
  };
}
jt.getRules = ac;
var xe = {};
Object.defineProperty(xe, "__esModule", { value: !0 });
xe.shouldUseRule = xe.shouldUseGroup = xe.schemaHasRulesForType = void 0;
function sc({ schema: e, self: t }, r) {
  const n = t.RULES.types[r];
  return n && n !== !0 && zo(e, n);
}
xe.schemaHasRulesForType = sc;
function zo(e, t) {
  return t.rules.some((r) => Ko(e, r));
}
xe.shouldUseGroup = zo;
function Ko(e, t) {
  var r;
  return e[t.keyword] !== void 0 || ((r = t.definition.implements) === null || r === void 0 ? void 0 : r.some((n) => e[n] !== void 0));
}
xe.shouldUseRule = Ko;
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.reportTypeError = e.checkDataTypes = e.checkDataType = e.coerceAndCheckDataType = e.getJSONTypes = e.getSchemaTypes = e.DataType = void 0;
  const t = jt, r = xe, n = Zr, i = Q, a = te;
  var s;
  (function($) {
    $[$.Correct = 0] = "Correct", $[$.Wrong = 1] = "Wrong";
  })(s = e.DataType || (e.DataType = {}));
  function l($) {
    const w = p($.type);
    if (w.includes("null")) {
      if ($.nullable === !1)
        throw new Error("type: null contradicts nullable: false");
    } else {
      if (!w.length && $.nullable !== void 0)
        throw new Error('"nullable" cannot be used without "type"');
      $.nullable === !0 && w.push("null");
    }
    return w;
  }
  e.getSchemaTypes = l;
  function p($) {
    const w = Array.isArray($) ? $ : $ ? [$] : [];
    if (w.every(t.isJSONType))
      return w;
    throw new Error("type must be JSONType or JSONType[]: " + w.join(","));
  }
  e.getJSONTypes = p;
  function c($, w) {
    const { gen: I, data: m, opts: _ } = $, C = h(w, _.coerceTypes), L = w.length > 0 && !(C.length === 0 && w.length === 1 && (0, r.schemaHasRulesForType)($, w[0]));
    if (L) {
      const q = O(w, m, _.strictNumbers, s.Wrong);
      I.if(q, () => {
        C.length ? b($, w, C) : d($);
      });
    }
    return L;
  }
  e.coerceAndCheckDataType = c;
  const f = /* @__PURE__ */ new Set(["string", "number", "integer", "boolean", "null"]);
  function h($, w) {
    return w ? $.filter((I) => f.has(I) || w === "array" && I === "array") : [];
  }
  function b($, w, I) {
    const { gen: m, data: _, opts: C } = $, L = m.let("dataType", (0, i._)`typeof ${_}`), q = m.let("coerced", (0, i._)`undefined`);
    C.coerceTypes === "array" && m.if((0, i._)`${L} == 'object' && Array.isArray(${_}) && ${_}.length == 1`, () => m.assign(_, (0, i._)`${_}[0]`).assign(L, (0, i._)`typeof ${_}`).if(O(w, _, C.strictNumbers), () => m.assign(q, _))), m.if((0, i._)`${q} !== undefined`);
    for (const x of I)
      (f.has(x) || x === "array" && C.coerceTypes === "array") && re(x);
    m.else(), d($), m.endIf(), m.if((0, i._)`${q} !== undefined`, () => {
      m.assign(_, q), j($, q);
    });
    function re(x) {
      switch (x) {
        case "string":
          m.elseIf((0, i._)`${L} == "number" || ${L} == "boolean"`).assign(q, (0, i._)`"" + ${_}`).elseIf((0, i._)`${_} === null`).assign(q, (0, i._)`""`);
          return;
        case "number":
          m.elseIf((0, i._)`${L} == "boolean" || ${_} === null
              || (${L} == "string" && ${_} && ${_} == +${_})`).assign(q, (0, i._)`+${_}`);
          return;
        case "integer":
          m.elseIf((0, i._)`${L} === "boolean" || ${_} === null
              || (${L} === "string" && ${_} && ${_} == +${_} && !(${_} % 1))`).assign(q, (0, i._)`+${_}`);
          return;
        case "boolean":
          m.elseIf((0, i._)`${_} === "false" || ${_} === 0 || ${_} === null`).assign(q, !1).elseIf((0, i._)`${_} === "true" || ${_} === 1`).assign(q, !0);
          return;
        case "null":
          m.elseIf((0, i._)`${_} === "" || ${_} === 0 || ${_} === false`), m.assign(q, null);
          return;
        case "array":
          m.elseIf((0, i._)`${L} === "string" || ${L} === "number"
              || ${L} === "boolean" || ${_} === null`).assign(q, (0, i._)`[${_}]`);
      }
    }
  }
  function j({ gen: $, parentData: w, parentDataProperty: I }, m) {
    $.if((0, i._)`${w} !== undefined`, () => $.assign((0, i._)`${w}[${I}]`, m));
  }
  function E($, w, I, m = s.Correct) {
    const _ = m === s.Correct ? i.operators.EQ : i.operators.NEQ;
    let C;
    switch ($) {
      case "null":
        return (0, i._)`${w} ${_} null`;
      case "array":
        C = (0, i._)`Array.isArray(${w})`;
        break;
      case "object":
        C = (0, i._)`${w} && typeof ${w} == "object" && !Array.isArray(${w})`;
        break;
      case "integer":
        C = L((0, i._)`!(${w} % 1) && !isNaN(${w})`);
        break;
      case "number":
        C = L();
        break;
      default:
        return (0, i._)`typeof ${w} ${_} ${$}`;
    }
    return m === s.Correct ? C : (0, i.not)(C);
    function L(q = i.nil) {
      return (0, i.and)((0, i._)`typeof ${w} == "number"`, q, I ? (0, i._)`isFinite(${w})` : i.nil);
    }
  }
  e.checkDataType = E;
  function O($, w, I, m) {
    if ($.length === 1)
      return E($[0], w, I, m);
    let _;
    const C = (0, a.toHash)($);
    if (C.array && C.object) {
      const L = (0, i._)`typeof ${w} != "object"`;
      _ = C.null ? L : (0, i._)`!${w} || ${L}`, delete C.null, delete C.array, delete C.object;
    } else
      _ = i.nil;
    C.number && delete C.integer;
    for (const L in C)
      _ = (0, i.and)(_, E(L, w, I, m));
    return _;
  }
  e.checkDataTypes = O;
  const P = {
    message: ({ schema: $ }) => `must be ${$}`,
    params: ({ schema: $, schemaValue: w }) => typeof $ == "string" ? (0, i._)`{type: ${$}}` : (0, i._)`{type: ${w}}`
  };
  function d($) {
    const w = S($);
    (0, n.reportError)(w, P);
  }
  e.reportTypeError = d;
  function S($) {
    const { gen: w, data: I, schema: m } = $, _ = (0, a.schemaRefOrVal)($, m, "type");
    return {
      gen: w,
      keyword: "type",
      data: I,
      schema: m.type,
      schemaCode: _,
      schemaValue: _,
      parentSchema: m,
      params: {},
      it: $
    };
  }
})(xr);
var Vi = {};
Object.defineProperty(Vi, "__esModule", { value: !0 });
Vi.assignDefaults = void 0;
const Ht = Q, oc = te;
function uc(e, t) {
  const { properties: r, items: n } = e.schema;
  if (t === "object" && r)
    for (const i in r)
      xs(e, i, r[i].default);
  else
    t === "array" && Array.isArray(n) && n.forEach((i, a) => xs(e, a, i.default));
}
Vi.assignDefaults = uc;
function xs(e, t, r) {
  const { gen: n, compositeRule: i, data: a, opts: s } = e;
  if (r === void 0)
    return;
  const l = (0, Ht._)`${a}${(0, Ht.getProperty)(t)}`;
  if (i) {
    (0, oc.checkStrictMode)(e, `default is ignored for: ${l}`);
    return;
  }
  let p = (0, Ht._)`${l} === undefined`;
  s.useDefaults === "empty" && (p = (0, Ht._)`${p} || ${l} === null || ${l} === ""`), n.if(p, (0, Ht._)`${l} = ${(0, Ht.stringify)(r)}`);
}
var Be = {}, J = {};
Object.defineProperty(J, "__esModule", { value: !0 });
J.validateUnion = J.validateArray = J.usePattern = J.callValidateCode = J.schemaProperties = J.allSchemaProperties = J.noPropertyInData = J.propertyInData = J.isOwnProperty = J.hasPropFunc = J.reportMissingProp = J.checkMissingProp = J.checkReportMissingProp = void 0;
const ae = Q, Ka = te, it = Je, lc = te;
function cc(e, t) {
  const { gen: r, data: n, it: i } = e;
  r.if(Ja(r, n, t, i.opts.ownProperties), () => {
    e.setParams({ missingProperty: (0, ae._)`${t}` }, !0), e.error();
  });
}
J.checkReportMissingProp = cc;
function dc({ gen: e, data: t, it: { opts: r } }, n, i) {
  return (0, ae.or)(...n.map((a) => (0, ae.and)(Ja(e, t, a, r.ownProperties), (0, ae._)`${i} = ${a}`)));
}
J.checkMissingProp = dc;
function fc(e, t) {
  e.setParams({ missingProperty: t }, !0), e.error();
}
J.reportMissingProp = fc;
function Bo(e) {
  return e.scopeValue("func", {
    // eslint-disable-next-line @typescript-eslint/unbound-method
    ref: Object.prototype.hasOwnProperty,
    code: (0, ae._)`Object.prototype.hasOwnProperty`
  });
}
J.hasPropFunc = Bo;
function Ba(e, t, r) {
  return (0, ae._)`${Bo(e)}.call(${t}, ${r})`;
}
J.isOwnProperty = Ba;
function hc(e, t, r, n) {
  const i = (0, ae._)`${t}${(0, ae.getProperty)(r)} !== undefined`;
  return n ? (0, ae._)`${i} && ${Ba(e, t, r)}` : i;
}
J.propertyInData = hc;
function Ja(e, t, r, n) {
  const i = (0, ae._)`${t}${(0, ae.getProperty)(r)} === undefined`;
  return n ? (0, ae.or)(i, (0, ae.not)(Ba(e, t, r))) : i;
}
J.noPropertyInData = Ja;
function Jo(e) {
  return e ? Object.keys(e).filter((t) => t !== "__proto__") : [];
}
J.allSchemaProperties = Jo;
function pc(e, t) {
  return Jo(t).filter((r) => !(0, Ka.alwaysValidSchema)(e, t[r]));
}
J.schemaProperties = pc;
function mc({ schemaCode: e, data: t, it: { gen: r, topSchemaRef: n, schemaPath: i, errorPath: a }, it: s }, l, p, c) {
  const f = c ? (0, ae._)`${e}, ${t}, ${n}${i}` : t, h = [
    [it.default.instancePath, (0, ae.strConcat)(it.default.instancePath, a)],
    [it.default.parentData, s.parentData],
    [it.default.parentDataProperty, s.parentDataProperty],
    [it.default.rootData, it.default.rootData]
  ];
  s.opts.dynamicRef && h.push([it.default.dynamicAnchors, it.default.dynamicAnchors]);
  const b = (0, ae._)`${f}, ${r.object(...h)}`;
  return p !== ae.nil ? (0, ae._)`${l}.call(${p}, ${b})` : (0, ae._)`${l}(${b})`;
}
J.callValidateCode = mc;
const _c = (0, ae._)`new RegExp`;
function vc({ gen: e, it: { opts: t } }, r) {
  const n = t.unicodeRegExp ? "u" : "", { regExp: i } = t.code, a = i(r, n);
  return e.scopeValue("pattern", {
    key: a.toString(),
    ref: a,
    code: (0, ae._)`${i.code === "new RegExp" ? _c : (0, lc.useFunc)(e, i)}(${r}, ${n})`
  });
}
J.usePattern = vc;
function gc(e) {
  const { gen: t, data: r, keyword: n, it: i } = e, a = t.name("valid");
  if (i.allErrors) {
    const l = t.let("valid", !0);
    return s(() => t.assign(l, !1)), l;
  }
  return t.var(a, !0), s(() => t.break()), a;
  function s(l) {
    const p = t.const("len", (0, ae._)`${r}.length`);
    t.forRange("i", 0, p, (c) => {
      e.subschema({
        keyword: n,
        dataProp: c,
        dataPropType: Ka.Type.Num
      }, a), t.if((0, ae.not)(a), l);
    });
  }
}
J.validateArray = gc;
function yc(e) {
  const { gen: t, schema: r, keyword: n, it: i } = e;
  if (!Array.isArray(r))
    throw new Error("ajv implementation error");
  if (r.some((p) => (0, Ka.alwaysValidSchema)(i, p)) && !i.opts.unevaluated)
    return;
  const s = t.let("valid", !1), l = t.name("_valid");
  t.block(() => r.forEach((p, c) => {
    const f = e.subschema({
      keyword: n,
      schemaProp: c,
      compositeRule: !0
    }, l);
    t.assign(s, (0, ae._)`${s} || ${l}`), e.mergeValidEvaluated(f, l) || t.if((0, ae.not)(s));
  })), e.result(s, () => e.reset(), () => e.error(!0));
}
J.validateUnion = yc;
Object.defineProperty(Be, "__esModule", { value: !0 });
Be.validateKeywordUsage = Be.validSchemaType = Be.funcKeywordCode = Be.macroKeywordCode = void 0;
const $e = Q, bt = Je, $c = J, Pc = Zr;
function wc(e, t) {
  const { gen: r, keyword: n, schema: i, parentSchema: a, it: s } = e, l = t.macro.call(s.self, i, a, s), p = Qo(r, n, l);
  s.opts.validateSchema !== !1 && s.self.validateSchema(l, !0);
  const c = r.name("valid");
  e.subschema({
    schema: l,
    schemaPath: $e.nil,
    errSchemaPath: `${s.errSchemaPath}/${n}`,
    topSchemaRef: p,
    compositeRule: !0
  }, c), e.pass(c, () => e.error(!0));
}
Be.macroKeywordCode = wc;
function bc(e, t) {
  var r;
  const { gen: n, keyword: i, schema: a, parentSchema: s, $data: l, it: p } = e;
  Sc(p, t);
  const c = !l && t.compile ? t.compile.call(p.self, a, s, p) : t.validate, f = Qo(n, i, c), h = n.let("valid");
  e.block$data(h, b), e.ok((r = t.valid) !== null && r !== void 0 ? r : h);
  function b() {
    if (t.errors === !1)
      O(), t.modifying && eo(e), P(() => e.error());
    else {
      const d = t.async ? j() : E();
      t.modifying && eo(e), P(() => Ec(e, d));
    }
  }
  function j() {
    const d = n.let("ruleErrs", null);
    return n.try(() => O((0, $e._)`await `), (S) => n.assign(h, !1).if((0, $e._)`${S} instanceof ${p.ValidationError}`, () => n.assign(d, (0, $e._)`${S}.errors`), () => n.throw(S))), d;
  }
  function E() {
    const d = (0, $e._)`${f}.errors`;
    return n.assign(d, null), O($e.nil), d;
  }
  function O(d = t.async ? (0, $e._)`await ` : $e.nil) {
    const S = p.opts.passContext ? bt.default.this : bt.default.self, $ = !("compile" in t && !l || t.schema === !1);
    n.assign(h, (0, $e._)`${d}${(0, $c.callValidateCode)(e, f, S, $)}`, t.modifying);
  }
  function P(d) {
    var S;
    n.if((0, $e.not)((S = t.valid) !== null && S !== void 0 ? S : h), d);
  }
}
Be.funcKeywordCode = bc;
function eo(e) {
  const { gen: t, data: r, it: n } = e;
  t.if(n.parentData, () => t.assign(r, (0, $e._)`${n.parentData}[${n.parentDataProperty}]`));
}
function Ec(e, t) {
  const { gen: r } = e;
  r.if((0, $e._)`Array.isArray(${t})`, () => {
    r.assign(bt.default.vErrors, (0, $e._)`${bt.default.vErrors} === null ? ${t} : ${bt.default.vErrors}.concat(${t})`).assign(bt.default.errors, (0, $e._)`${bt.default.vErrors}.length`), (0, Pc.extendErrors)(e);
  }, () => e.error());
}
function Sc({ schemaEnv: e }, t) {
  if (t.async && !e.$async)
    throw new Error("async keyword in sync schema");
}
function Qo(e, t, r) {
  if (r === void 0)
    throw new Error(`keyword "${t}" failed to compile`);
  return e.scopeValue("keyword", typeof r == "function" ? { ref: r } : { ref: r, code: (0, $e.stringify)(r) });
}
function Oc(e, t, r = !1) {
  return !t.length || t.some((n) => n === "array" ? Array.isArray(e) : n === "object" ? e && typeof e == "object" && !Array.isArray(e) : typeof e == n || r && typeof e > "u");
}
Be.validSchemaType = Oc;
function Dc({ schema: e, opts: t, self: r, errSchemaPath: n }, i, a) {
  if (Array.isArray(i.keyword) ? !i.keyword.includes(a) : i.keyword !== a)
    throw new Error("ajv implementation error");
  const s = i.dependencies;
  if (s != null && s.some((l) => !Object.prototype.hasOwnProperty.call(e, l)))
    throw new Error(`parent schema must have dependencies of ${a}: ${s.join(",")}`);
  if (i.validateSchema && !i.validateSchema(e[a])) {
    const p = `keyword "${a}" value is invalid at path "${n}": ` + r.errorsText(i.validateSchema.errors);
    if (t.validateSchema === "log")
      r.logger.error(p);
    else
      throw new Error(p);
  }
}
Be.validateKeywordUsage = Dc;
var ct = {};
Object.defineProperty(ct, "__esModule", { value: !0 });
ct.extendSubschemaMode = ct.extendSubschemaData = ct.getSubschema = void 0;
const Ke = Q, Yo = te;
function jc(e, { keyword: t, schemaProp: r, schema: n, schemaPath: i, errSchemaPath: a, topSchemaRef: s }) {
  if (t !== void 0 && n !== void 0)
    throw new Error('both "keyword" and "schema" passed, only one allowed');
  if (t !== void 0) {
    const l = e.schema[t];
    return r === void 0 ? {
      schema: l,
      schemaPath: (0, Ke._)`${e.schemaPath}${(0, Ke.getProperty)(t)}`,
      errSchemaPath: `${e.errSchemaPath}/${t}`
    } : {
      schema: l[r],
      schemaPath: (0, Ke._)`${e.schemaPath}${(0, Ke.getProperty)(t)}${(0, Ke.getProperty)(r)}`,
      errSchemaPath: `${e.errSchemaPath}/${t}/${(0, Yo.escapeFragment)(r)}`
    };
  }
  if (n !== void 0) {
    if (i === void 0 || a === void 0 || s === void 0)
      throw new Error('"schemaPath", "errSchemaPath" and "topSchemaRef" are required with "schema"');
    return {
      schema: n,
      schemaPath: i,
      topSchemaRef: s,
      errSchemaPath: a
    };
  }
  throw new Error('either "keyword" or "schema" must be passed');
}
ct.getSubschema = jc;
function Tc(e, t, { dataProp: r, dataPropType: n, data: i, dataTypes: a, propertyName: s }) {
  if (i !== void 0 && r !== void 0)
    throw new Error('both "data" and "dataProp" passed, only one allowed');
  const { gen: l } = t;
  if (r !== void 0) {
    const { errorPath: c, dataPathArr: f, opts: h } = t, b = l.let("data", (0, Ke._)`${t.data}${(0, Ke.getProperty)(r)}`, !0);
    p(b), e.errorPath = (0, Ke.str)`${c}${(0, Yo.getErrorPath)(r, n, h.jsPropertySyntax)}`, e.parentDataProperty = (0, Ke._)`${r}`, e.dataPathArr = [...f, e.parentDataProperty];
  }
  if (i !== void 0) {
    const c = i instanceof Ke.Name ? i : l.let("data", i, !0);
    p(c), s !== void 0 && (e.propertyName = s);
  }
  a && (e.dataTypes = a);
  function p(c) {
    e.data = c, e.dataLevel = t.dataLevel + 1, e.dataTypes = [], t.definedProperties = /* @__PURE__ */ new Set(), e.parentData = t.data, e.dataNames = [...t.dataNames, c];
  }
}
ct.extendSubschemaData = Tc;
function Nc(e, { jtdDiscriminator: t, jtdMetadata: r, compositeRule: n, createErrors: i, allErrors: a }) {
  n !== void 0 && (e.compositeRule = n), i !== void 0 && (e.createErrors = i), a !== void 0 && (e.allErrors = a), e.jtdDiscriminator = t, e.jtdMetadata = r;
}
ct.extendSubschemaMode = Nc;
var _e = {}, Xo = function e(t, r) {
  if (t === r)
    return !0;
  if (t && r && typeof t == "object" && typeof r == "object") {
    if (t.constructor !== r.constructor)
      return !1;
    var n, i, a;
    if (Array.isArray(t)) {
      if (n = t.length, n != r.length)
        return !1;
      for (i = n; i-- !== 0; )
        if (!e(t[i], r[i]))
          return !1;
      return !0;
    }
    if (t.constructor === RegExp)
      return t.source === r.source && t.flags === r.flags;
    if (t.valueOf !== Object.prototype.valueOf)
      return t.valueOf() === r.valueOf();
    if (t.toString !== Object.prototype.toString)
      return t.toString() === r.toString();
    if (a = Object.keys(t), n = a.length, n !== Object.keys(r).length)
      return !1;
    for (i = n; i-- !== 0; )
      if (!Object.prototype.hasOwnProperty.call(r, a[i]))
        return !1;
    for (i = n; i-- !== 0; ) {
      var s = a[i];
      if (!e(t[s], r[s]))
        return !1;
    }
    return !0;
  }
  return t !== t && r !== r;
}, Zo = { exports: {} }, ut = Zo.exports = function(e, t, r) {
  typeof t == "function" && (r = t, t = {}), r = t.cb || r;
  var n = typeof r == "function" ? r : r.pre || function() {
  }, i = r.post || function() {
  };
  li(t, n, i, e, "", e);
};
ut.keywords = {
  additionalItems: !0,
  items: !0,
  contains: !0,
  additionalProperties: !0,
  propertyNames: !0,
  not: !0,
  if: !0,
  then: !0,
  else: !0
};
ut.arrayKeywords = {
  items: !0,
  allOf: !0,
  anyOf: !0,
  oneOf: !0
};
ut.propsKeywords = {
  $defs: !0,
  definitions: !0,
  properties: !0,
  patternProperties: !0,
  dependencies: !0
};
ut.skipKeywords = {
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
function li(e, t, r, n, i, a, s, l, p, c) {
  if (n && typeof n == "object" && !Array.isArray(n)) {
    t(n, i, a, s, l, p, c);
    for (var f in n) {
      var h = n[f];
      if (Array.isArray(h)) {
        if (f in ut.arrayKeywords)
          for (var b = 0; b < h.length; b++)
            li(e, t, r, h[b], i + "/" + f + "/" + b, a, i, f, n, b);
      } else if (f in ut.propsKeywords) {
        if (h && typeof h == "object")
          for (var j in h)
            li(e, t, r, h[j], i + "/" + f + "/" + Mc(j), a, i, f, n, j);
      } else
        (f in ut.keywords || e.allKeys && !(f in ut.skipKeywords)) && li(e, t, r, h, i + "/" + f, a, i, f, n);
    }
    r(n, i, a, s, l, p, c);
  }
}
function Mc(e) {
  return e.replace(/~/g, "~0").replace(/\//g, "~1");
}
var Cc = Zo.exports;
Object.defineProperty(_e, "__esModule", { value: !0 });
_e.getSchemaRefs = _e.resolveUrl = _e.normalizeId = _e._getFullPath = _e.getFullPath = _e.inlineRef = void 0;
const Ic = te, Rc = Xo, Ac = Cc, Uc = /* @__PURE__ */ new Set([
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
function kc(e, t = !0) {
  return typeof e == "boolean" ? !0 : t === !0 ? !ba(e) : t ? xo(e) <= t : !1;
}
_e.inlineRef = kc;
const Fc = /* @__PURE__ */ new Set([
  "$ref",
  "$recursiveRef",
  "$recursiveAnchor",
  "$dynamicRef",
  "$dynamicAnchor"
]);
function ba(e) {
  for (const t in e) {
    if (Fc.has(t))
      return !0;
    const r = e[t];
    if (Array.isArray(r) && r.some(ba) || typeof r == "object" && ba(r))
      return !0;
  }
  return !1;
}
function xo(e) {
  let t = 0;
  for (const r in e) {
    if (r === "$ref")
      return 1 / 0;
    if (t++, !Uc.has(r) && (typeof e[r] == "object" && (0, Ic.eachItem)(e[r], (n) => t += xo(n)), t === 1 / 0))
      return 1 / 0;
  }
  return t;
}
function eu(e, t = "", r) {
  r !== !1 && (t = xt(t));
  const n = e.parse(t);
  return tu(e, n);
}
_e.getFullPath = eu;
function tu(e, t) {
  return e.serialize(t).split("#")[0] + "#";
}
_e._getFullPath = tu;
const Lc = /#\/?$/;
function xt(e) {
  return e ? e.replace(Lc, "") : "";
}
_e.normalizeId = xt;
function Vc(e, t, r) {
  return r = xt(r), e.resolve(t, r);
}
_e.resolveUrl = Vc;
const Wc = /^[a-z_][-a-z0-9._]*$/i;
function Gc(e, t) {
  if (typeof e == "boolean")
    return {};
  const { schemaId: r, uriResolver: n } = this.opts, i = xt(e[r] || t), a = { "": i }, s = eu(n, i, !1), l = {}, p = /* @__PURE__ */ new Set();
  return Ac(e, { allKeys: !0 }, (h, b, j, E) => {
    if (E === void 0)
      return;
    const O = s + b;
    let P = a[E];
    typeof h[r] == "string" && (P = d.call(this, h[r])), S.call(this, h.$anchor), S.call(this, h.$dynamicAnchor), a[b] = P;
    function d($) {
      const w = this.opts.uriResolver.resolve;
      if ($ = xt(P ? w(P, $) : $), p.has($))
        throw f($);
      p.add($);
      let I = this.refs[$];
      return typeof I == "string" && (I = this.refs[I]), typeof I == "object" ? c(h, I.schema, $) : $ !== xt(O) && ($[0] === "#" ? (c(h, l[$], $), l[$] = h) : this.refs[$] = O), $;
    }
    function S($) {
      if (typeof $ == "string") {
        if (!Wc.test($))
          throw new Error(`invalid anchor "${$}"`);
        d.call(this, `#${$}`);
      }
    }
  }), l;
  function c(h, b, j) {
    if (b !== void 0 && !Rc(h, b))
      throw f(j);
  }
  function f(h) {
    return new Error(`reference "${h}" resolves to more than one schema`);
  }
}
_e.getSchemaRefs = Gc;
Object.defineProperty(Fe, "__esModule", { value: !0 });
Fe.getData = Fe.KeywordCxt = Fe.validateFunctionCode = void 0;
const ru = tr, to = xr, Qa = xe, yi = xr, Hc = Vi, Fr = Be, ua = ct, W = Q, z = Je, qc = _e, et = te, Dr = Zr;
function zc(e) {
  if (au(e) && (su(e), iu(e))) {
    Jc(e);
    return;
  }
  nu(e, () => (0, ru.topBoolOrEmptySchema)(e));
}
Fe.validateFunctionCode = zc;
function nu({ gen: e, validateName: t, schema: r, schemaEnv: n, opts: i }, a) {
  i.code.es5 ? e.func(t, (0, W._)`${z.default.data}, ${z.default.valCxt}`, n.$async, () => {
    e.code((0, W._)`"use strict"; ${ro(r, i)}`), Bc(e, i), e.code(a);
  }) : e.func(t, (0, W._)`${z.default.data}, ${Kc(i)}`, n.$async, () => e.code(ro(r, i)).code(a));
}
function Kc(e) {
  return (0, W._)`{${z.default.instancePath}="", ${z.default.parentData}, ${z.default.parentDataProperty}, ${z.default.rootData}=${z.default.data}${e.dynamicRef ? (0, W._)`, ${z.default.dynamicAnchors}={}` : W.nil}}={}`;
}
function Bc(e, t) {
  e.if(z.default.valCxt, () => {
    e.var(z.default.instancePath, (0, W._)`${z.default.valCxt}.${z.default.instancePath}`), e.var(z.default.parentData, (0, W._)`${z.default.valCxt}.${z.default.parentData}`), e.var(z.default.parentDataProperty, (0, W._)`${z.default.valCxt}.${z.default.parentDataProperty}`), e.var(z.default.rootData, (0, W._)`${z.default.valCxt}.${z.default.rootData}`), t.dynamicRef && e.var(z.default.dynamicAnchors, (0, W._)`${z.default.valCxt}.${z.default.dynamicAnchors}`);
  }, () => {
    e.var(z.default.instancePath, (0, W._)`""`), e.var(z.default.parentData, (0, W._)`undefined`), e.var(z.default.parentDataProperty, (0, W._)`undefined`), e.var(z.default.rootData, z.default.data), t.dynamicRef && e.var(z.default.dynamicAnchors, (0, W._)`{}`);
  });
}
function Jc(e) {
  const { schema: t, opts: r, gen: n } = e;
  nu(e, () => {
    r.$comment && t.$comment && uu(e), xc(e), n.let(z.default.vErrors, null), n.let(z.default.errors, 0), r.unevaluated && Qc(e), ou(e), rd(e);
  });
}
function Qc(e) {
  const { gen: t, validateName: r } = e;
  e.evaluated = t.const("evaluated", (0, W._)`${r}.evaluated`), t.if((0, W._)`${e.evaluated}.dynamicProps`, () => t.assign((0, W._)`${e.evaluated}.props`, (0, W._)`undefined`)), t.if((0, W._)`${e.evaluated}.dynamicItems`, () => t.assign((0, W._)`${e.evaluated}.items`, (0, W._)`undefined`));
}
function ro(e, t) {
  const r = typeof e == "object" && e[t.schemaId];
  return r && (t.code.source || t.code.process) ? (0, W._)`/*# sourceURL=${r} */` : W.nil;
}
function Yc(e, t) {
  if (au(e) && (su(e), iu(e))) {
    Xc(e, t);
    return;
  }
  (0, ru.boolOrEmptySchema)(e, t);
}
function iu({ schema: e, self: t }) {
  if (typeof e == "boolean")
    return !e;
  for (const r in e)
    if (t.RULES.all[r])
      return !0;
  return !1;
}
function au(e) {
  return typeof e.schema != "boolean";
}
function Xc(e, t) {
  const { schema: r, gen: n, opts: i } = e;
  i.$comment && r.$comment && uu(e), ed(e), td(e);
  const a = n.const("_errs", z.default.errors);
  ou(e, a), n.var(t, (0, W._)`${a} === ${z.default.errors}`);
}
function su(e) {
  (0, et.checkUnknownRules)(e), Zc(e);
}
function ou(e, t) {
  if (e.opts.jtd)
    return no(e, [], !1, t);
  const r = (0, to.getSchemaTypes)(e.schema), n = (0, to.coerceAndCheckDataType)(e, r);
  no(e, r, !n, t);
}
function Zc(e) {
  const { schema: t, errSchemaPath: r, opts: n, self: i } = e;
  t.$ref && n.ignoreKeywordsWithRef && (0, et.schemaHasRulesButRef)(t, i.RULES) && i.logger.warn(`$ref: keywords ignored in schema at path "${r}"`);
}
function xc(e) {
  const { schema: t, opts: r } = e;
  t.default !== void 0 && r.useDefaults && r.strictSchema && (0, et.checkStrictMode)(e, "default is ignored in the schema root");
}
function ed(e) {
  const t = e.schema[e.opts.schemaId];
  t && (e.baseId = (0, qc.resolveUrl)(e.opts.uriResolver, e.baseId, t));
}
function td(e) {
  if (e.schema.$async && !e.schemaEnv.$async)
    throw new Error("async schema in sync schema");
}
function uu({ gen: e, schemaEnv: t, schema: r, errSchemaPath: n, opts: i }) {
  const a = r.$comment;
  if (i.$comment === !0)
    e.code((0, W._)`${z.default.self}.logger.log(${a})`);
  else if (typeof i.$comment == "function") {
    const s = (0, W.str)`${n}/$comment`, l = e.scopeValue("root", { ref: t.root });
    e.code((0, W._)`${z.default.self}.opts.$comment(${a}, ${s}, ${l}.schema)`);
  }
}
function rd(e) {
  const { gen: t, schemaEnv: r, validateName: n, ValidationError: i, opts: a } = e;
  r.$async ? t.if((0, W._)`${z.default.errors} === 0`, () => t.return(z.default.data), () => t.throw((0, W._)`new ${i}(${z.default.vErrors})`)) : (t.assign((0, W._)`${n}.errors`, z.default.vErrors), a.unevaluated && nd(e), t.return((0, W._)`${z.default.errors} === 0`));
}
function nd({ gen: e, evaluated: t, props: r, items: n }) {
  r instanceof W.Name && e.assign((0, W._)`${t}.props`, r), n instanceof W.Name && e.assign((0, W._)`${t}.items`, n);
}
function no(e, t, r, n) {
  const { gen: i, schema: a, data: s, allErrors: l, opts: p, self: c } = e, { RULES: f } = c;
  if (a.$ref && (p.ignoreKeywordsWithRef || !(0, et.schemaHasRulesButRef)(a, f))) {
    i.block(() => du(e, "$ref", f.all.$ref.definition));
    return;
  }
  p.jtd || id(e, t), i.block(() => {
    for (const b of f.rules)
      h(b);
    h(f.post);
  });
  function h(b) {
    (0, Qa.shouldUseGroup)(a, b) && (b.type ? (i.if((0, yi.checkDataType)(b.type, s, p.strictNumbers)), io(e, b), t.length === 1 && t[0] === b.type && r && (i.else(), (0, yi.reportTypeError)(e)), i.endIf()) : io(e, b), l || i.if((0, W._)`${z.default.errors} === ${n || 0}`));
  }
}
function io(e, t) {
  const { gen: r, schema: n, opts: { useDefaults: i } } = e;
  i && (0, Hc.assignDefaults)(e, t.type), r.block(() => {
    for (const a of t.rules)
      (0, Qa.shouldUseRule)(n, a) && du(e, a.keyword, a.definition, t.type);
  });
}
function id(e, t) {
  e.schemaEnv.meta || !e.opts.strictTypes || (ad(e, t), e.opts.allowUnionTypes || sd(e, t), od(e, e.dataTypes));
}
function ad(e, t) {
  if (t.length) {
    if (!e.dataTypes.length) {
      e.dataTypes = t;
      return;
    }
    t.forEach((r) => {
      lu(e.dataTypes, r) || Ya(e, `type "${r}" not allowed by context "${e.dataTypes.join(",")}"`);
    }), ld(e, t);
  }
}
function sd(e, t) {
  t.length > 1 && !(t.length === 2 && t.includes("null")) && Ya(e, "use allowUnionTypes to allow union type keyword");
}
function od(e, t) {
  const r = e.self.RULES.all;
  for (const n in r) {
    const i = r[n];
    if (typeof i == "object" && (0, Qa.shouldUseRule)(e.schema, i)) {
      const { type: a } = i.definition;
      a.length && !a.some((s) => ud(t, s)) && Ya(e, `missing type "${a.join(",")}" for keyword "${n}"`);
    }
  }
}
function ud(e, t) {
  return e.includes(t) || t === "number" && e.includes("integer");
}
function lu(e, t) {
  return e.includes(t) || t === "integer" && e.includes("number");
}
function ld(e, t) {
  const r = [];
  for (const n of e.dataTypes)
    lu(t, n) ? r.push(n) : t.includes("integer") && n === "number" && r.push("integer");
  e.dataTypes = r;
}
function Ya(e, t) {
  const r = e.schemaEnv.baseId + e.errSchemaPath;
  t += ` at "${r}" (strictTypes)`, (0, et.checkStrictMode)(e, t, e.opts.strictTypes);
}
class cu {
  constructor(t, r, n) {
    if ((0, Fr.validateKeywordUsage)(t, r, n), this.gen = t.gen, this.allErrors = t.allErrors, this.keyword = n, this.data = t.data, this.schema = t.schema[n], this.$data = r.$data && t.opts.$data && this.schema && this.schema.$data, this.schemaValue = (0, et.schemaRefOrVal)(t, this.schema, n, this.$data), this.schemaType = r.schemaType, this.parentSchema = t.schema, this.params = {}, this.it = t, this.def = r, this.$data)
      this.schemaCode = t.gen.const("vSchema", fu(this.$data, t));
    else if (this.schemaCode = this.schemaValue, !(0, Fr.validSchemaType)(this.schema, r.schemaType, r.allowUndefined))
      throw new Error(`${n} value must be ${JSON.stringify(r.schemaType)}`);
    ("code" in r ? r.trackErrors : r.errors !== !1) && (this.errsCount = t.gen.const("_errs", z.default.errors));
  }
  result(t, r, n) {
    this.failResult((0, W.not)(t), r, n);
  }
  failResult(t, r, n) {
    this.gen.if(t), n ? n() : this.error(), r ? (this.gen.else(), r(), this.allErrors && this.gen.endIf()) : this.allErrors ? this.gen.endIf() : this.gen.else();
  }
  pass(t, r) {
    this.failResult((0, W.not)(t), void 0, r);
  }
  fail(t) {
    if (t === void 0) {
      this.error(), this.allErrors || this.gen.if(!1);
      return;
    }
    this.gen.if(t), this.error(), this.allErrors ? this.gen.endIf() : this.gen.else();
  }
  fail$data(t) {
    if (!this.$data)
      return this.fail(t);
    const { schemaCode: r } = this;
    this.fail((0, W._)`${r} !== undefined && (${(0, W.or)(this.invalid$data(), t)})`);
  }
  error(t, r, n) {
    if (r) {
      this.setParams(r), this._error(t, n), this.setParams({});
      return;
    }
    this._error(t, n);
  }
  _error(t, r) {
    (t ? Dr.reportExtraError : Dr.reportError)(this, this.def.error, r);
  }
  $dataError() {
    (0, Dr.reportError)(this, this.def.$dataError || Dr.keyword$DataError);
  }
  reset() {
    if (this.errsCount === void 0)
      throw new Error('add "trackErrors" to keyword definition');
    (0, Dr.resetErrorsCount)(this.gen, this.errsCount);
  }
  ok(t) {
    this.allErrors || this.gen.if(t);
  }
  setParams(t, r) {
    r ? Object.assign(this.params, t) : this.params = t;
  }
  block$data(t, r, n = W.nil) {
    this.gen.block(() => {
      this.check$data(t, n), r();
    });
  }
  check$data(t = W.nil, r = W.nil) {
    if (!this.$data)
      return;
    const { gen: n, schemaCode: i, schemaType: a, def: s } = this;
    n.if((0, W.or)((0, W._)`${i} === undefined`, r)), t !== W.nil && n.assign(t, !0), (a.length || s.validateSchema) && (n.elseIf(this.invalid$data()), this.$dataError(), t !== W.nil && n.assign(t, !1)), n.else();
  }
  invalid$data() {
    const { gen: t, schemaCode: r, schemaType: n, def: i, it: a } = this;
    return (0, W.or)(s(), l());
    function s() {
      if (n.length) {
        if (!(r instanceof W.Name))
          throw new Error("ajv implementation error");
        const p = Array.isArray(n) ? n : [n];
        return (0, W._)`${(0, yi.checkDataTypes)(p, r, a.opts.strictNumbers, yi.DataType.Wrong)}`;
      }
      return W.nil;
    }
    function l() {
      if (i.validateSchema) {
        const p = t.scopeValue("validate$data", { ref: i.validateSchema });
        return (0, W._)`!${p}(${r})`;
      }
      return W.nil;
    }
  }
  subschema(t, r) {
    const n = (0, ua.getSubschema)(this.it, t);
    (0, ua.extendSubschemaData)(n, this.it, t), (0, ua.extendSubschemaMode)(n, t);
    const i = { ...this.it, ...n, items: void 0, props: void 0 };
    return Yc(i, r), i;
  }
  mergeEvaluated(t, r) {
    const { it: n, gen: i } = this;
    n.opts.unevaluated && (n.props !== !0 && t.props !== void 0 && (n.props = et.mergeEvaluated.props(i, t.props, n.props, r)), n.items !== !0 && t.items !== void 0 && (n.items = et.mergeEvaluated.items(i, t.items, n.items, r)));
  }
  mergeValidEvaluated(t, r) {
    const { it: n, gen: i } = this;
    if (n.opts.unevaluated && (n.props !== !0 || n.items !== !0))
      return i.if(r, () => this.mergeEvaluated(t, W.Name)), !0;
  }
}
Fe.KeywordCxt = cu;
function du(e, t, r, n) {
  const i = new cu(e, r, t);
  "code" in r ? r.code(i, n) : i.$data && r.validate ? (0, Fr.funcKeywordCode)(i, r) : "macro" in r ? (0, Fr.macroKeywordCode)(i, r) : (r.compile || r.validate) && (0, Fr.funcKeywordCode)(i, r);
}
const cd = /^\/(?:[^~]|~0|~1)*$/, dd = /^([0-9]+)(#|\/(?:[^~]|~0|~1)*)?$/;
function fu(e, { dataLevel: t, dataNames: r, dataPathArr: n }) {
  let i, a;
  if (e === "")
    return z.default.rootData;
  if (e[0] === "/") {
    if (!cd.test(e))
      throw new Error(`Invalid JSON-pointer: ${e}`);
    i = e, a = z.default.rootData;
  } else {
    const c = dd.exec(e);
    if (!c)
      throw new Error(`Invalid JSON-pointer: ${e}`);
    const f = +c[1];
    if (i = c[2], i === "#") {
      if (f >= t)
        throw new Error(p("property/index", f));
      return n[t - f];
    }
    if (f > t)
      throw new Error(p("data", f));
    if (a = r[t - f], !i)
      return a;
  }
  let s = a;
  const l = i.split("/");
  for (const c of l)
    c && (a = (0, W._)`${a}${(0, W.getProperty)((0, et.unescapeJsonPointer)(c))}`, s = (0, W._)`${s} && ${a}`);
  return s;
  function p(c, f) {
    return `Cannot access ${c} ${f} levels up, current level is ${t}`;
  }
}
Fe.getData = fu;
var en = {};
Object.defineProperty(en, "__esModule", { value: !0 });
class fd extends Error {
  constructor(t) {
    super("validation failed"), this.errors = t, this.ajv = this.validation = !0;
  }
}
en.default = fd;
var tn = {};
Object.defineProperty(tn, "__esModule", { value: !0 });
const la = _e;
class hd extends Error {
  constructor(t, r, n, i) {
    super(i || `can't resolve reference ${n} from id ${r}`), this.missingRef = (0, la.resolveUrl)(t, r, n), this.missingSchema = (0, la.normalizeId)((0, la.getFullPath)(t, this.missingRef));
  }
}
tn.default = hd;
var Ee = {};
Object.defineProperty(Ee, "__esModule", { value: !0 });
Ee.resolveSchema = Ee.getCompilingSchema = Ee.resolveRef = Ee.compileSchema = Ee.SchemaEnv = void 0;
const Ae = Q, pd = en, Pt = Je, ke = _e, ao = te, md = Fe;
class Wi {
  constructor(t) {
    var r;
    this.refs = {}, this.dynamicAnchors = {};
    let n;
    typeof t.schema == "object" && (n = t.schema), this.schema = t.schema, this.schemaId = t.schemaId, this.root = t.root || this, this.baseId = (r = t.baseId) !== null && r !== void 0 ? r : (0, ke.normalizeId)(n == null ? void 0 : n[t.schemaId || "$id"]), this.schemaPath = t.schemaPath, this.localRefs = t.localRefs, this.meta = t.meta, this.$async = n == null ? void 0 : n.$async, this.refs = {};
  }
}
Ee.SchemaEnv = Wi;
function Xa(e) {
  const t = hu.call(this, e);
  if (t)
    return t;
  const r = (0, ke.getFullPath)(this.opts.uriResolver, e.root.baseId), { es5: n, lines: i } = this.opts.code, { ownProperties: a } = this.opts, s = new Ae.CodeGen(this.scope, { es5: n, lines: i, ownProperties: a });
  let l;
  e.$async && (l = s.scopeValue("Error", {
    ref: pd.default,
    code: (0, Ae._)`require("ajv/dist/runtime/validation_error").default`
  }));
  const p = s.scopeName("validate");
  e.validateName = p;
  const c = {
    gen: s,
    allErrors: this.opts.allErrors,
    data: Pt.default.data,
    parentData: Pt.default.parentData,
    parentDataProperty: Pt.default.parentDataProperty,
    dataNames: [Pt.default.data],
    dataPathArr: [Ae.nil],
    dataLevel: 0,
    dataTypes: [],
    definedProperties: /* @__PURE__ */ new Set(),
    topSchemaRef: s.scopeValue("schema", this.opts.code.source === !0 ? { ref: e.schema, code: (0, Ae.stringify)(e.schema) } : { ref: e.schema }),
    validateName: p,
    ValidationError: l,
    schema: e.schema,
    schemaEnv: e,
    rootId: r,
    baseId: e.baseId || r,
    schemaPath: Ae.nil,
    errSchemaPath: e.schemaPath || (this.opts.jtd ? "" : "#"),
    errorPath: (0, Ae._)`""`,
    opts: this.opts,
    self: this
  };
  let f;
  try {
    this._compilations.add(e), (0, md.validateFunctionCode)(c), s.optimize(this.opts.code.optimize);
    const h = s.toString();
    f = `${s.scopeRefs(Pt.default.scope)}return ${h}`, this.opts.code.process && (f = this.opts.code.process(f, e));
    const j = new Function(`${Pt.default.self}`, `${Pt.default.scope}`, f)(this, this.scope.get());
    if (this.scope.value(p, { ref: j }), j.errors = null, j.schema = e.schema, j.schemaEnv = e, e.$async && (j.$async = !0), this.opts.code.source === !0 && (j.source = { validateName: p, validateCode: h, scopeValues: s._values }), this.opts.unevaluated) {
      const { props: E, items: O } = c;
      j.evaluated = {
        props: E instanceof Ae.Name ? void 0 : E,
        items: O instanceof Ae.Name ? void 0 : O,
        dynamicProps: E instanceof Ae.Name,
        dynamicItems: O instanceof Ae.Name
      }, j.source && (j.source.evaluated = (0, Ae.stringify)(j.evaluated));
    }
    return e.validate = j, e;
  } catch (h) {
    throw delete e.validate, delete e.validateName, f && this.logger.error("Error compiling schema, function code:", f), h;
  } finally {
    this._compilations.delete(e);
  }
}
Ee.compileSchema = Xa;
function _d(e, t, r) {
  var n;
  r = (0, ke.resolveUrl)(this.opts.uriResolver, t, r);
  const i = e.refs[r];
  if (i)
    return i;
  let a = yd.call(this, e, r);
  if (a === void 0) {
    const s = (n = e.localRefs) === null || n === void 0 ? void 0 : n[r], { schemaId: l } = this.opts;
    s && (a = new Wi({ schema: s, schemaId: l, root: e, baseId: t }));
  }
  if (a !== void 0)
    return e.refs[r] = vd.call(this, a);
}
Ee.resolveRef = _d;
function vd(e) {
  return (0, ke.inlineRef)(e.schema, this.opts.inlineRefs) ? e.schema : e.validate ? e : Xa.call(this, e);
}
function hu(e) {
  for (const t of this._compilations)
    if (gd(t, e))
      return t;
}
Ee.getCompilingSchema = hu;
function gd(e, t) {
  return e.schema === t.schema && e.root === t.root && e.baseId === t.baseId;
}
function yd(e, t) {
  let r;
  for (; typeof (r = this.refs[t]) == "string"; )
    t = r;
  return r || this.schemas[t] || Gi.call(this, e, t);
}
function Gi(e, t) {
  const r = this.opts.uriResolver.parse(t), n = (0, ke._getFullPath)(this.opts.uriResolver, r);
  let i = (0, ke.getFullPath)(this.opts.uriResolver, e.baseId, void 0);
  if (Object.keys(e.schema).length > 0 && n === i)
    return ca.call(this, r, e);
  const a = (0, ke.normalizeId)(n), s = this.refs[a] || this.schemas[a];
  if (typeof s == "string") {
    const l = Gi.call(this, e, s);
    return typeof (l == null ? void 0 : l.schema) != "object" ? void 0 : ca.call(this, r, l);
  }
  if (typeof (s == null ? void 0 : s.schema) == "object") {
    if (s.validate || Xa.call(this, s), a === (0, ke.normalizeId)(t)) {
      const { schema: l } = s, { schemaId: p } = this.opts, c = l[p];
      return c && (i = (0, ke.resolveUrl)(this.opts.uriResolver, i, c)), new Wi({ schema: l, schemaId: p, root: e, baseId: i });
    }
    return ca.call(this, r, s);
  }
}
Ee.resolveSchema = Gi;
const $d = /* @__PURE__ */ new Set([
  "properties",
  "patternProperties",
  "enum",
  "dependencies",
  "definitions"
]);
function ca(e, { baseId: t, schema: r, root: n }) {
  var i;
  if (((i = e.fragment) === null || i === void 0 ? void 0 : i[0]) !== "/")
    return;
  for (const l of e.fragment.slice(1).split("/")) {
    if (typeof r == "boolean")
      return;
    const p = r[(0, ao.unescapeFragment)(l)];
    if (p === void 0)
      return;
    r = p;
    const c = typeof r == "object" && r[this.opts.schemaId];
    !$d.has(l) && c && (t = (0, ke.resolveUrl)(this.opts.uriResolver, t, c));
  }
  let a;
  if (typeof r != "boolean" && r.$ref && !(0, ao.schemaHasRulesButRef)(r, this.RULES)) {
    const l = (0, ke.resolveUrl)(this.opts.uriResolver, t, r.$ref);
    a = Gi.call(this, n, l);
  }
  const { schemaId: s } = this.opts;
  if (a = a || new Wi({ schema: r, schemaId: s, root: n, baseId: t }), a.schema !== a.root.schema)
    return a;
}
const Pd = "https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#", wd = "Meta-schema for $data reference (JSON AnySchema extension proposal)", bd = "object", Ed = [
  "$data"
], Sd = {
  $data: {
    type: "string",
    anyOf: [
      {
        format: "relative-json-pointer"
      },
      {
        format: "json-pointer"
      }
    ]
  }
}, Od = !1, Dd = {
  $id: Pd,
  description: wd,
  type: bd,
  required: Ed,
  properties: Sd,
  additionalProperties: Od
};
var Za = {}, Ea = { exports: {} };
/** @license URI.js v4.4.1 (c) 2011 Gary Court. License: http://github.com/garycourt/uri-js */
(function(e, t) {
  (function(r, n) {
    n(t);
  })(A, function(r) {
    function n() {
      for (var v = arguments.length, u = Array(v), y = 0; y < v; y++)
        u[y] = arguments[y];
      if (u.length > 1) {
        u[0] = u[0].slice(0, -1);
        for (var M = u.length - 1, N = 1; N < M; ++N)
          u[N] = u[N].slice(1, -1);
        return u[M] = u[M].slice(1), u.join("");
      } else
        return u[0];
    }
    function i(v) {
      return "(?:" + v + ")";
    }
    function a(v) {
      return v === void 0 ? "undefined" : v === null ? "null" : Object.prototype.toString.call(v).split(" ").pop().split("]").shift().toLowerCase();
    }
    function s(v) {
      return v.toUpperCase();
    }
    function l(v) {
      return v != null ? v instanceof Array ? v : typeof v.length != "number" || v.split || v.setInterval || v.call ? [v] : Array.prototype.slice.call(v) : [];
    }
    function p(v, u) {
      var y = v;
      if (u)
        for (var M in u)
          y[M] = u[M];
      return y;
    }
    function c(v) {
      var u = "[A-Za-z]", y = "[0-9]", M = n(y, "[A-Fa-f]"), N = i(i("%[EFef]" + M + "%" + M + M + "%" + M + M) + "|" + i("%[89A-Fa-f]" + M + "%" + M + M) + "|" + i("%" + M + M)), G = "[\\:\\/\\?\\#\\[\\]\\@]", H = "[\\!\\$\\&\\'\\(\\)\\*\\+\\,\\;\\=]", ee = n(G, H), ie = v ? "[\\xA0-\\u200D\\u2010-\\u2029\\u202F-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF]" : "[]", le = v ? "[\\uE000-\\uF8FF]" : "[]", X = n(u, y, "[\\-\\.\\_\\~]", ie);
      i(u + n(u, y, "[\\+\\-\\.]") + "*"), i(i(N + "|" + n(X, H, "[\\:]")) + "*");
      var ne = i(i("25[0-5]") + "|" + i("2[0-4]" + y) + "|" + i("1" + y + y) + "|" + i("0?[1-9]" + y) + "|0?0?" + y), ce = i(ne + "\\." + ne + "\\." + ne + "\\." + ne), K = i(M + "{1,4}"), se = i(i(K + "\\:" + K) + "|" + ce), he = i(i(K + "\\:") + "{6}" + se), oe = i("\\:\\:" + i(K + "\\:") + "{5}" + se), nt = i(i(K) + "?\\:\\:" + i(K + "\\:") + "{4}" + se), Ge = i(i(i(K + "\\:") + "{0,1}" + K) + "?\\:\\:" + i(K + "\\:") + "{3}" + se), He = i(i(i(K + "\\:") + "{0,2}" + K) + "?\\:\\:" + i(K + "\\:") + "{2}" + se), Ft = i(i(i(K + "\\:") + "{0,3}" + K) + "?\\:\\:" + K + "\\:" + se), mt = i(i(i(K + "\\:") + "{0,4}" + K) + "?\\:\\:" + se), Ne = i(i(i(K + "\\:") + "{0,5}" + K) + "?\\:\\:" + K), qe = i(i(i(K + "\\:") + "{0,6}" + K) + "?\\:\\:"), _t = i([he, oe, nt, Ge, He, Ft, mt, Ne, qe].join("|")), Qe = i(i(X + "|" + N) + "+");
      i("[vV]" + M + "+\\." + n(X, H, "[\\:]") + "+"), i(i(N + "|" + n(X, H)) + "*");
      var mr = i(N + "|" + n(X, H, "[\\:\\@]"));
      return i(i(N + "|" + n(X, H, "[\\@]")) + "+"), i(i(mr + "|" + n("[\\/\\?]", le)) + "*"), {
        NOT_SCHEME: new RegExp(n("[^]", u, y, "[\\+\\-\\.]"), "g"),
        NOT_USERINFO: new RegExp(n("[^\\%\\:]", X, H), "g"),
        NOT_HOST: new RegExp(n("[^\\%\\[\\]\\:]", X, H), "g"),
        NOT_PATH: new RegExp(n("[^\\%\\/\\:\\@]", X, H), "g"),
        NOT_PATH_NOSCHEME: new RegExp(n("[^\\%\\/\\@]", X, H), "g"),
        NOT_QUERY: new RegExp(n("[^\\%]", X, H, "[\\:\\@\\/\\?]", le), "g"),
        NOT_FRAGMENT: new RegExp(n("[^\\%]", X, H, "[\\:\\@\\/\\?]"), "g"),
        ESCAPE: new RegExp(n("[^]", X, H), "g"),
        UNRESERVED: new RegExp(X, "g"),
        OTHER_CHARS: new RegExp(n("[^\\%]", X, ee), "g"),
        PCT_ENCODED: new RegExp(N, "g"),
        IPV4ADDRESS: new RegExp("^(" + ce + ")$"),
        IPV6ADDRESS: new RegExp("^\\[?(" + _t + ")" + i(i("\\%25|\\%(?!" + M + "{2})") + "(" + Qe + ")") + "?\\]?$")
        //RFC 6874, with relaxed parsing rules
      };
    }
    var f = c(!1), h = c(!0), b = function() {
      function v(u, y) {
        var M = [], N = !0, G = !1, H = void 0;
        try {
          for (var ee = u[Symbol.iterator](), ie; !(N = (ie = ee.next()).done) && (M.push(ie.value), !(y && M.length === y)); N = !0)
            ;
        } catch (le) {
          G = !0, H = le;
        } finally {
          try {
            !N && ee.return && ee.return();
          } finally {
            if (G)
              throw H;
          }
        }
        return M;
      }
      return function(u, y) {
        if (Array.isArray(u))
          return u;
        if (Symbol.iterator in Object(u))
          return v(u, y);
        throw new TypeError("Invalid attempt to destructure non-iterable instance");
      };
    }(), j = function(v) {
      if (Array.isArray(v)) {
        for (var u = 0, y = Array(v.length); u < v.length; u++)
          y[u] = v[u];
        return y;
      } else
        return Array.from(v);
    }, E = 2147483647, O = 36, P = 1, d = 26, S = 38, $ = 700, w = 72, I = 128, m = "-", _ = /^xn--/, C = /[^\0-\x7E]/, L = /[\x2E\u3002\uFF0E\uFF61]/g, q = {
      overflow: "Overflow: input needs wider integers to process",
      "not-basic": "Illegal input >= 0x80 (not a basic code point)",
      "invalid-input": "Invalid input"
    }, re = O - P, x = Math.floor, je = String.fromCharCode;
    function fe(v) {
      throw new RangeError(q[v]);
    }
    function dt(v, u) {
      for (var y = [], M = v.length; M--; )
        y[M] = u(v[M]);
      return y;
    }
    function ft(v, u) {
      var y = v.split("@"), M = "";
      y.length > 1 && (M = y[0] + "@", v = y[1]), v = v.replace(L, ".");
      var N = v.split("."), G = dt(N, u).join(".");
      return M + G;
    }
    function Nt(v) {
      for (var u = [], y = 0, M = v.length; y < M; ) {
        var N = v.charCodeAt(y++);
        if (N >= 55296 && N <= 56319 && y < M) {
          var G = v.charCodeAt(y++);
          (G & 64512) == 56320 ? u.push(((N & 1023) << 10) + (G & 1023) + 65536) : (u.push(N), y--);
        } else
          u.push(N);
      }
      return u;
    }
    var or = function(u) {
      return String.fromCodePoint.apply(String, j(u));
    }, Mt = function(u) {
      return u - 48 < 10 ? u - 22 : u - 65 < 26 ? u - 65 : u - 97 < 26 ? u - 97 : O;
    }, k = function(u, y) {
      return u + 22 + 75 * (u < 26) - ((y != 0) << 5);
    }, D = function(u, y, M) {
      var N = 0;
      for (
        u = M ? x(u / $) : u >> 1, u += x(u / y);
        /* no initialization */
        u > re * d >> 1;
        N += O
      )
        u = x(u / re);
      return x(N + (re + 1) * u / (u + S));
    }, U = function(u) {
      var y = [], M = u.length, N = 0, G = I, H = w, ee = u.lastIndexOf(m);
      ee < 0 && (ee = 0);
      for (var ie = 0; ie < ee; ++ie)
        u.charCodeAt(ie) >= 128 && fe("not-basic"), y.push(u.charCodeAt(ie));
      for (var le = ee > 0 ? ee + 1 : 0; le < M; ) {
        for (
          var X = N, ne = 1, ce = O;
          ;
          /* no condition */
          ce += O
        ) {
          le >= M && fe("invalid-input");
          var K = Mt(u.charCodeAt(le++));
          (K >= O || K > x((E - N) / ne)) && fe("overflow"), N += K * ne;
          var se = ce <= H ? P : ce >= H + d ? d : ce - H;
          if (K < se)
            break;
          var he = O - se;
          ne > x(E / he) && fe("overflow"), ne *= he;
        }
        var oe = y.length + 1;
        H = D(N - X, oe, X == 0), x(N / oe) > E - G && fe("overflow"), G += x(N / oe), N %= oe, y.splice(N++, 0, G);
      }
      return String.fromCodePoint.apply(String, y);
    }, T = function(u) {
      var y = [];
      u = Nt(u);
      var M = u.length, N = I, G = 0, H = w, ee = !0, ie = !1, le = void 0;
      try {
        for (var X = u[Symbol.iterator](), ne; !(ee = (ne = X.next()).done); ee = !0) {
          var ce = ne.value;
          ce < 128 && y.push(je(ce));
        }
      } catch (_r) {
        ie = !0, le = _r;
      } finally {
        try {
          !ee && X.return && X.return();
        } finally {
          if (ie)
            throw le;
        }
      }
      var K = y.length, se = K;
      for (K && y.push(m); se < M; ) {
        var he = E, oe = !0, nt = !1, Ge = void 0;
        try {
          for (var He = u[Symbol.iterator](), Ft; !(oe = (Ft = He.next()).done); oe = !0) {
            var mt = Ft.value;
            mt >= N && mt < he && (he = mt);
          }
        } catch (_r) {
          nt = !0, Ge = _r;
        } finally {
          try {
            !oe && He.return && He.return();
          } finally {
            if (nt)
              throw Ge;
          }
        }
        var Ne = se + 1;
        he - N > x((E - G) / Ne) && fe("overflow"), G += (he - N) * Ne, N = he;
        var qe = !0, _t = !1, Qe = void 0;
        try {
          for (var mr = u[Symbol.iterator](), Ls; !(qe = (Ls = mr.next()).done); qe = !0) {
            var Vs = Ls.value;
            if (Vs < N && ++G > E && fe("overflow"), Vs == N) {
              for (
                var sn = G, on = O;
                ;
                /* no condition */
                on += O
              ) {
                var un = on <= H ? P : on >= H + d ? d : on - H;
                if (sn < un)
                  break;
                var Ws = sn - un, Gs = O - un;
                y.push(je(k(un + Ws % Gs, 0))), sn = x(Ws / Gs);
              }
              y.push(je(k(sn, 0))), H = D(G, Ne, se == K), G = 0, ++se;
            }
          }
        } catch (_r) {
          _t = !0, Qe = _r;
        } finally {
          try {
            !qe && mr.return && mr.return();
          } finally {
            if (_t)
              throw Qe;
          }
        }
        ++G, ++N;
      }
      return y.join("");
    }, o = function(u) {
      return ft(u, function(y) {
        return _.test(y) ? U(y.slice(4).toLowerCase()) : y;
      });
    }, g = function(u) {
      return ft(u, function(y) {
        return C.test(y) ? "xn--" + T(y) : y;
      });
    }, R = {
      /**
       * A string representing the current Punycode.js version number.
       * @memberOf punycode
       * @type String
       */
      version: "2.1.0",
      /**
       * An object of methods to convert from JavaScript's internal character
       * representation (UCS-2) to Unicode code points, and back.
       * @see <https://mathiasbynens.be/notes/javascript-encoding>
       * @memberOf punycode
       * @type Object
       */
      ucs2: {
        decode: Nt,
        encode: or
      },
      decode: U,
      encode: T,
      toASCII: g,
      toUnicode: o
    }, F = {};
    function V(v) {
      var u = v.charCodeAt(0), y = void 0;
      return u < 16 ? y = "%0" + u.toString(16).toUpperCase() : u < 128 ? y = "%" + u.toString(16).toUpperCase() : u < 2048 ? y = "%" + (u >> 6 | 192).toString(16).toUpperCase() + "%" + (u & 63 | 128).toString(16).toUpperCase() : y = "%" + (u >> 12 | 224).toString(16).toUpperCase() + "%" + (u >> 6 & 63 | 128).toString(16).toUpperCase() + "%" + (u & 63 | 128).toString(16).toUpperCase(), y;
    }
    function Y(v) {
      for (var u = "", y = 0, M = v.length; y < M; ) {
        var N = parseInt(v.substr(y + 1, 2), 16);
        if (N < 128)
          u += String.fromCharCode(N), y += 3;
        else if (N >= 194 && N < 224) {
          if (M - y >= 6) {
            var G = parseInt(v.substr(y + 4, 2), 16);
            u += String.fromCharCode((N & 31) << 6 | G & 63);
          } else
            u += v.substr(y, 6);
          y += 6;
        } else if (N >= 224) {
          if (M - y >= 9) {
            var H = parseInt(v.substr(y + 4, 2), 16), ee = parseInt(v.substr(y + 7, 2), 16);
            u += String.fromCharCode((N & 15) << 12 | (H & 63) << 6 | ee & 63);
          } else
            u += v.substr(y, 9);
          y += 9;
        } else
          u += v.substr(y, 3), y += 3;
      }
      return u;
    }
    function Z(v, u) {
      function y(M) {
        var N = Y(M);
        return N.match(u.UNRESERVED) ? N : M;
      }
      return v.scheme && (v.scheme = String(v.scheme).replace(u.PCT_ENCODED, y).toLowerCase().replace(u.NOT_SCHEME, "")), v.userinfo !== void 0 && (v.userinfo = String(v.userinfo).replace(u.PCT_ENCODED, y).replace(u.NOT_USERINFO, V).replace(u.PCT_ENCODED, s)), v.host !== void 0 && (v.host = String(v.host).replace(u.PCT_ENCODED, y).toLowerCase().replace(u.NOT_HOST, V).replace(u.PCT_ENCODED, s)), v.path !== void 0 && (v.path = String(v.path).replace(u.PCT_ENCODED, y).replace(v.scheme ? u.NOT_PATH : u.NOT_PATH_NOSCHEME, V).replace(u.PCT_ENCODED, s)), v.query !== void 0 && (v.query = String(v.query).replace(u.PCT_ENCODED, y).replace(u.NOT_QUERY, V).replace(u.PCT_ENCODED, s)), v.fragment !== void 0 && (v.fragment = String(v.fragment).replace(u.PCT_ENCODED, y).replace(u.NOT_FRAGMENT, V).replace(u.PCT_ENCODED, s)), v;
    }
    function ue(v) {
      return v.replace(/^0*(.*)/, "$1") || "0";
    }
    function Le(v, u) {
      var y = v.match(u.IPV4ADDRESS) || [], M = b(y, 2), N = M[1];
      return N ? N.split(".").map(ue).join(".") : v;
    }
    function Ct(v, u) {
      var y = v.match(u.IPV6ADDRESS) || [], M = b(y, 3), N = M[1], G = M[2];
      if (N) {
        for (var H = N.toLowerCase().split("::").reverse(), ee = b(H, 2), ie = ee[0], le = ee[1], X = le ? le.split(":").map(ue) : [], ne = ie.split(":").map(ue), ce = u.IPV4ADDRESS.test(ne[ne.length - 1]), K = ce ? 7 : 8, se = ne.length - K, he = Array(K), oe = 0; oe < K; ++oe)
          he[oe] = X[oe] || ne[se + oe] || "";
        ce && (he[K - 1] = Le(he[K - 1], u));
        var nt = he.reduce(function(Ne, qe, _t) {
          if (!qe || qe === "0") {
            var Qe = Ne[Ne.length - 1];
            Qe && Qe.index + Qe.length === _t ? Qe.length++ : Ne.push({ index: _t, length: 1 });
          }
          return Ne;
        }, []), Ge = nt.sort(function(Ne, qe) {
          return qe.length - Ne.length;
        })[0], He = void 0;
        if (Ge && Ge.length > 1) {
          var Ft = he.slice(0, Ge.index), mt = he.slice(Ge.index + Ge.length);
          He = Ft.join(":") + "::" + mt.join(":");
        } else
          He = he.join(":");
        return G && (He += "%" + G), He;
      } else
        return v;
    }
    var ur = /^(?:([^:\/?#]+):)?(?:\/\/((?:([^\/?#@]*)@)?(\[[^\/?#\]]+\]|[^\/?#:]*)(?:\:(\d*))?))?([^?#]*)(?:\?([^#]*))?(?:#((?:.|\n|\r)*))?/i, lr = "".match(/(){0}/)[1] === void 0;
    function Oe(v) {
      var u = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, y = {}, M = u.iri !== !1 ? h : f;
      u.reference === "suffix" && (v = (u.scheme ? u.scheme + ":" : "") + "//" + v);
      var N = v.match(ur);
      if (N) {
        lr ? (y.scheme = N[1], y.userinfo = N[3], y.host = N[4], y.port = parseInt(N[5], 10), y.path = N[6] || "", y.query = N[7], y.fragment = N[8], isNaN(y.port) && (y.port = N[5])) : (y.scheme = N[1] || void 0, y.userinfo = v.indexOf("@") !== -1 ? N[3] : void 0, y.host = v.indexOf("//") !== -1 ? N[4] : void 0, y.port = parseInt(N[5], 10), y.path = N[6] || "", y.query = v.indexOf("?") !== -1 ? N[7] : void 0, y.fragment = v.indexOf("#") !== -1 ? N[8] : void 0, isNaN(y.port) && (y.port = v.match(/\/\/(?:.|\n)*\:(?:\/|\?|\#|$)/) ? N[4] : void 0)), y.host && (y.host = Ct(Le(y.host, M), M)), y.scheme === void 0 && y.userinfo === void 0 && y.host === void 0 && y.port === void 0 && !y.path && y.query === void 0 ? y.reference = "same-document" : y.scheme === void 0 ? y.reference = "relative" : y.fragment === void 0 ? y.reference = "absolute" : y.reference = "uri", u.reference && u.reference !== "suffix" && u.reference !== y.reference && (y.error = y.error || "URI is not a " + u.reference + " reference.");
        var G = F[(u.scheme || y.scheme || "").toLowerCase()];
        if (!u.unicodeSupport && (!G || !G.unicodeSupport)) {
          if (y.host && (u.domainHost || G && G.domainHost))
            try {
              y.host = R.toASCII(y.host.replace(M.PCT_ENCODED, Y).toLowerCase());
            } catch (H) {
              y.error = y.error || "Host's domain name can not be converted to ASCII via punycode: " + H;
            }
          Z(y, f);
        } else
          Z(y, M);
        G && G.parse && G.parse(y, u);
      } else
        y.error = y.error || "URI can not be parsed.";
      return y;
    }
    function cr(v, u) {
      var y = u.iri !== !1 ? h : f, M = [];
      return v.userinfo !== void 0 && (M.push(v.userinfo), M.push("@")), v.host !== void 0 && M.push(Ct(Le(String(v.host), y), y).replace(y.IPV6ADDRESS, function(N, G, H) {
        return "[" + G + (H ? "%25" + H : "") + "]";
      })), (typeof v.port == "number" || typeof v.port == "string") && (M.push(":"), M.push(String(v.port))), M.length ? M.join("") : void 0;
    }
    var It = /^\.\.?\//, Rt = /^\/\.(\/|$)/, At = /^\/\.\.(\/|$)/, dr = /^\/?(?:.|\n)*?(?=\/|$)/;
    function Ve(v) {
      for (var u = []; v.length; )
        if (v.match(It))
          v = v.replace(It, "");
        else if (v.match(Rt))
          v = v.replace(Rt, "/");
        else if (v.match(At))
          v = v.replace(At, "/"), u.pop();
        else if (v === "." || v === "..")
          v = "";
        else {
          var y = v.match(dr);
          if (y) {
            var M = y[0];
            v = v.slice(M.length), u.push(M);
          } else
            throw new Error("Unexpected dot segment condition");
        }
      return u.join("");
    }
    function Pe(v) {
      var u = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, y = u.iri ? h : f, M = [], N = F[(u.scheme || v.scheme || "").toLowerCase()];
      if (N && N.serialize && N.serialize(v, u), v.host && !y.IPV6ADDRESS.test(v.host)) {
        if (u.domainHost || N && N.domainHost)
          try {
            v.host = u.iri ? R.toUnicode(v.host) : R.toASCII(v.host.replace(y.PCT_ENCODED, Y).toLowerCase());
          } catch (ee) {
            v.error = v.error || "Host's domain name can not be converted to " + (u.iri ? "Unicode" : "ASCII") + " via punycode: " + ee;
          }
      }
      Z(v, y), u.reference !== "suffix" && v.scheme && (M.push(v.scheme), M.push(":"));
      var G = cr(v, u);
      if (G !== void 0 && (u.reference !== "suffix" && M.push("//"), M.push(G), v.path && v.path.charAt(0) !== "/" && M.push("/")), v.path !== void 0) {
        var H = v.path;
        !u.absolutePath && (!N || !N.absolutePath) && (H = Ve(H)), G === void 0 && (H = H.replace(/^\/\//, "/%2F")), M.push(H);
      }
      return v.query !== void 0 && (M.push("?"), M.push(v.query)), v.fragment !== void 0 && (M.push("#"), M.push(v.fragment)), M.join("");
    }
    function Ut(v, u) {
      var y = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, M = arguments[3], N = {};
      return M || (v = Oe(Pe(v, y), y), u = Oe(Pe(u, y), y)), y = y || {}, !y.tolerant && u.scheme ? (N.scheme = u.scheme, N.userinfo = u.userinfo, N.host = u.host, N.port = u.port, N.path = Ve(u.path || ""), N.query = u.query) : (u.userinfo !== void 0 || u.host !== void 0 || u.port !== void 0 ? (N.userinfo = u.userinfo, N.host = u.host, N.port = u.port, N.path = Ve(u.path || ""), N.query = u.query) : (u.path ? (u.path.charAt(0) === "/" ? N.path = Ve(u.path) : ((v.userinfo !== void 0 || v.host !== void 0 || v.port !== void 0) && !v.path ? N.path = "/" + u.path : v.path ? N.path = v.path.slice(0, v.path.lastIndexOf("/") + 1) + u.path : N.path = u.path, N.path = Ve(N.path)), N.query = u.query) : (N.path = v.path, u.query !== void 0 ? N.query = u.query : N.query = v.query), N.userinfo = v.userinfo, N.host = v.host, N.port = v.port), N.scheme = v.scheme), N.fragment = u.fragment, N;
    }
    function fr(v, u, y) {
      var M = p({ scheme: "null" }, y);
      return Pe(Ut(Oe(v, M), Oe(u, M), M, !0), M);
    }
    function ht(v, u) {
      return typeof v == "string" ? v = Pe(Oe(v, u), u) : a(v) === "object" && (v = Oe(Pe(v, u), u)), v;
    }
    function hr(v, u, y) {
      return typeof v == "string" ? v = Pe(Oe(v, y), y) : a(v) === "object" && (v = Pe(v, y)), typeof u == "string" ? u = Pe(Oe(u, y), y) : a(u) === "object" && (u = Pe(u, y)), v === u;
    }
    function an(v, u) {
      return v && v.toString().replace(!u || !u.iri ? f.ESCAPE : h.ESCAPE, V);
    }
    function Te(v, u) {
      return v && v.toString().replace(!u || !u.iri ? f.PCT_ENCODED : h.PCT_ENCODED, Y);
    }
    var pt = {
      scheme: "http",
      domainHost: !0,
      parse: function(u, y) {
        return u.host || (u.error = u.error || "HTTP URIs must have a host."), u;
      },
      serialize: function(u, y) {
        var M = String(u.scheme).toLowerCase() === "https";
        return (u.port === (M ? 443 : 80) || u.port === "") && (u.port = void 0), u.path || (u.path = "/"), u;
      }
    }, Ms = {
      scheme: "https",
      domainHost: pt.domainHost,
      parse: pt.parse,
      serialize: pt.serialize
    };
    function Cs(v) {
      return typeof v.secure == "boolean" ? v.secure : String(v.scheme).toLowerCase() === "wss";
    }
    var pr = {
      scheme: "ws",
      domainHost: !0,
      parse: function(u, y) {
        var M = u;
        return M.secure = Cs(M), M.resourceName = (M.path || "/") + (M.query ? "?" + M.query : ""), M.path = void 0, M.query = void 0, M;
      },
      serialize: function(u, y) {
        if ((u.port === (Cs(u) ? 443 : 80) || u.port === "") && (u.port = void 0), typeof u.secure == "boolean" && (u.scheme = u.secure ? "wss" : "ws", u.secure = void 0), u.resourceName) {
          var M = u.resourceName.split("?"), N = b(M, 2), G = N[0], H = N[1];
          u.path = G && G !== "/" ? G : void 0, u.query = H, u.resourceName = void 0;
        }
        return u.fragment = void 0, u;
      }
    }, Is = {
      scheme: "wss",
      domainHost: pr.domainHost,
      parse: pr.parse,
      serialize: pr.serialize
    }, Nu = {}, Rs = "[A-Za-z0-9\\-\\.\\_\\~\\xA0-\\u200D\\u2010-\\u2029\\u202F-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF]", We = "[0-9A-Fa-f]", Mu = i(i("%[EFef]" + We + "%" + We + We + "%" + We + We) + "|" + i("%[89A-Fa-f]" + We + "%" + We + We) + "|" + i("%" + We + We)), Cu = "[A-Za-z0-9\\!\\$\\%\\'\\*\\+\\-\\^\\_\\`\\{\\|\\}\\~]", Iu = "[\\!\\$\\%\\'\\(\\)\\*\\+\\,\\-\\.0-9\\<\\>A-Z\\x5E-\\x7E]", Ru = n(Iu, '[\\"\\\\]'), Au = "[\\!\\$\\'\\(\\)\\*\\+\\,\\;\\:\\@]", Uu = new RegExp(Rs, "g"), kt = new RegExp(Mu, "g"), ku = new RegExp(n("[^]", Cu, "[\\.]", '[\\"]', Ru), "g"), As = new RegExp(n("[^]", Rs, Au), "g"), Fu = As;
    function ra(v) {
      var u = Y(v);
      return u.match(Uu) ? u : v;
    }
    var Us = {
      scheme: "mailto",
      parse: function(u, y) {
        var M = u, N = M.to = M.path ? M.path.split(",") : [];
        if (M.path = void 0, M.query) {
          for (var G = !1, H = {}, ee = M.query.split("&"), ie = 0, le = ee.length; ie < le; ++ie) {
            var X = ee[ie].split("=");
            switch (X[0]) {
              case "to":
                for (var ne = X[1].split(","), ce = 0, K = ne.length; ce < K; ++ce)
                  N.push(ne[ce]);
                break;
              case "subject":
                M.subject = Te(X[1], y);
                break;
              case "body":
                M.body = Te(X[1], y);
                break;
              default:
                G = !0, H[Te(X[0], y)] = Te(X[1], y);
                break;
            }
          }
          G && (M.headers = H);
        }
        M.query = void 0;
        for (var se = 0, he = N.length; se < he; ++se) {
          var oe = N[se].split("@");
          if (oe[0] = Te(oe[0]), y.unicodeSupport)
            oe[1] = Te(oe[1], y).toLowerCase();
          else
            try {
              oe[1] = R.toASCII(Te(oe[1], y).toLowerCase());
            } catch (nt) {
              M.error = M.error || "Email address's domain name can not be converted to ASCII via punycode: " + nt;
            }
          N[se] = oe.join("@");
        }
        return M;
      },
      serialize: function(u, y) {
        var M = u, N = l(u.to);
        if (N) {
          for (var G = 0, H = N.length; G < H; ++G) {
            var ee = String(N[G]), ie = ee.lastIndexOf("@"), le = ee.slice(0, ie).replace(kt, ra).replace(kt, s).replace(ku, V), X = ee.slice(ie + 1);
            try {
              X = y.iri ? R.toUnicode(X) : R.toASCII(Te(X, y).toLowerCase());
            } catch (se) {
              M.error = M.error || "Email address's domain name can not be converted to " + (y.iri ? "Unicode" : "ASCII") + " via punycode: " + se;
            }
            N[G] = le + "@" + X;
          }
          M.path = N.join(",");
        }
        var ne = u.headers = u.headers || {};
        u.subject && (ne.subject = u.subject), u.body && (ne.body = u.body);
        var ce = [];
        for (var K in ne)
          ne[K] !== Nu[K] && ce.push(K.replace(kt, ra).replace(kt, s).replace(As, V) + "=" + ne[K].replace(kt, ra).replace(kt, s).replace(Fu, V));
        return ce.length && (M.query = ce.join("&")), M;
      }
    }, Lu = /^([^\:]+)\:(.*)/, ks = {
      scheme: "urn",
      parse: function(u, y) {
        var M = u.path && u.path.match(Lu), N = u;
        if (M) {
          var G = y.scheme || N.scheme || "urn", H = M[1].toLowerCase(), ee = M[2], ie = G + ":" + (y.nid || H), le = F[ie];
          N.nid = H, N.nss = ee, N.path = void 0, le && (N = le.parse(N, y));
        } else
          N.error = N.error || "URN can not be parsed.";
        return N;
      },
      serialize: function(u, y) {
        var M = y.scheme || u.scheme || "urn", N = u.nid, G = M + ":" + (y.nid || N), H = F[G];
        H && (u = H.serialize(u, y));
        var ee = u, ie = u.nss;
        return ee.path = (N || y.nid) + ":" + ie, ee;
      }
    }, Vu = /^[0-9A-Fa-f]{8}(?:\-[0-9A-Fa-f]{4}){3}\-[0-9A-Fa-f]{12}$/, Fs = {
      scheme: "urn:uuid",
      parse: function(u, y) {
        var M = u;
        return M.uuid = M.nss, M.nss = void 0, !y.tolerant && (!M.uuid || !M.uuid.match(Vu)) && (M.error = M.error || "UUID is not valid."), M;
      },
      serialize: function(u, y) {
        var M = u;
        return M.nss = (u.uuid || "").toLowerCase(), M;
      }
    };
    F[pt.scheme] = pt, F[Ms.scheme] = Ms, F[pr.scheme] = pr, F[Is.scheme] = Is, F[Us.scheme] = Us, F[ks.scheme] = ks, F[Fs.scheme] = Fs, r.SCHEMES = F, r.pctEncChar = V, r.pctDecChars = Y, r.parse = Oe, r.removeDotSegments = Ve, r.serialize = Pe, r.resolveComponents = Ut, r.resolve = fr, r.normalize = ht, r.equal = hr, r.escapeComponent = an, r.unescapeComponent = Te, Object.defineProperty(r, "__esModule", { value: !0 });
  });
})(Ea, Ea.exports);
var jd = Ea.exports;
Object.defineProperty(Za, "__esModule", { value: !0 });
const pu = jd;
pu.code = 'require("ajv/dist/runtime/uri").default';
Za.default = pu;
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.CodeGen = e.Name = e.nil = e.stringify = e.str = e._ = e.KeywordCxt = void 0;
  var t = Fe;
  Object.defineProperty(e, "KeywordCxt", { enumerable: !0, get: function() {
    return t.KeywordCxt;
  } });
  var r = Q;
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
  const n = en, i = tn, a = jt, s = Ee, l = Q, p = _e, c = xr, f = te, h = Dd, b = Za, j = (k, D) => new RegExp(k, D);
  j.code = "new RegExp";
  const E = ["removeAdditional", "useDefaults", "coerceTypes"], O = /* @__PURE__ */ new Set([
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
  ]), P = {
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
  }, d = {
    ignoreKeywordsWithRef: "",
    jsPropertySyntax: "",
    unicode: '"minLength"/"maxLength" account for unicode characters by default.'
  }, S = 200;
  function $(k) {
    var D, U, T, o, g, R, F, V, Y, Z, ue, Le, Ct, ur, lr, Oe, cr, It, Rt, At, dr, Ve, Pe, Ut, fr;
    const ht = k.strict, hr = (D = k.code) === null || D === void 0 ? void 0 : D.optimize, an = hr === !0 || hr === void 0 ? 1 : hr || 0, Te = (T = (U = k.code) === null || U === void 0 ? void 0 : U.regExp) !== null && T !== void 0 ? T : j, pt = (o = k.uriResolver) !== null && o !== void 0 ? o : b.default;
    return {
      strictSchema: (R = (g = k.strictSchema) !== null && g !== void 0 ? g : ht) !== null && R !== void 0 ? R : !0,
      strictNumbers: (V = (F = k.strictNumbers) !== null && F !== void 0 ? F : ht) !== null && V !== void 0 ? V : !0,
      strictTypes: (Z = (Y = k.strictTypes) !== null && Y !== void 0 ? Y : ht) !== null && Z !== void 0 ? Z : "log",
      strictTuples: (Le = (ue = k.strictTuples) !== null && ue !== void 0 ? ue : ht) !== null && Le !== void 0 ? Le : "log",
      strictRequired: (ur = (Ct = k.strictRequired) !== null && Ct !== void 0 ? Ct : ht) !== null && ur !== void 0 ? ur : !1,
      code: k.code ? { ...k.code, optimize: an, regExp: Te } : { optimize: an, regExp: Te },
      loopRequired: (lr = k.loopRequired) !== null && lr !== void 0 ? lr : S,
      loopEnum: (Oe = k.loopEnum) !== null && Oe !== void 0 ? Oe : S,
      meta: (cr = k.meta) !== null && cr !== void 0 ? cr : !0,
      messages: (It = k.messages) !== null && It !== void 0 ? It : !0,
      inlineRefs: (Rt = k.inlineRefs) !== null && Rt !== void 0 ? Rt : !0,
      schemaId: (At = k.schemaId) !== null && At !== void 0 ? At : "$id",
      addUsedSchema: (dr = k.addUsedSchema) !== null && dr !== void 0 ? dr : !0,
      validateSchema: (Ve = k.validateSchema) !== null && Ve !== void 0 ? Ve : !0,
      validateFormats: (Pe = k.validateFormats) !== null && Pe !== void 0 ? Pe : !0,
      unicodeRegExp: (Ut = k.unicodeRegExp) !== null && Ut !== void 0 ? Ut : !0,
      int32range: (fr = k.int32range) !== null && fr !== void 0 ? fr : !0,
      uriResolver: pt
    };
  }
  class w {
    constructor(D = {}) {
      this.schemas = {}, this.refs = {}, this.formats = {}, this._compilations = /* @__PURE__ */ new Set(), this._loading = {}, this._cache = /* @__PURE__ */ new Map(), D = this.opts = { ...D, ...$(D) };
      const { es5: U, lines: T } = this.opts.code;
      this.scope = new l.ValueScope({ scope: {}, prefixes: O, es5: U, lines: T }), this.logger = x(D.logger);
      const o = D.validateFormats;
      D.validateFormats = !1, this.RULES = (0, a.getRules)(), I.call(this, P, D, "NOT SUPPORTED"), I.call(this, d, D, "DEPRECATED", "warn"), this._metaOpts = q.call(this), D.formats && C.call(this), this._addVocabularies(), this._addDefaultMetaSchema(), D.keywords && L.call(this, D.keywords), typeof D.meta == "object" && this.addMetaSchema(D.meta), _.call(this), D.validateFormats = o;
    }
    _addVocabularies() {
      this.addKeyword("$async");
    }
    _addDefaultMetaSchema() {
      const { $data: D, meta: U, schemaId: T } = this.opts;
      let o = h;
      T === "id" && (o = { ...h }, o.id = o.$id, delete o.$id), U && D && this.addMetaSchema(o, o[T], !1);
    }
    defaultMeta() {
      const { meta: D, schemaId: U } = this.opts;
      return this.opts.defaultMeta = typeof D == "object" ? D[U] || D : void 0;
    }
    validate(D, U) {
      let T;
      if (typeof D == "string") {
        if (T = this.getSchema(D), !T)
          throw new Error(`no schema with key or ref "${D}"`);
      } else
        T = this.compile(D);
      const o = T(U);
      return "$async" in T || (this.errors = T.errors), o;
    }
    compile(D, U) {
      const T = this._addSchema(D, U);
      return T.validate || this._compileSchemaEnv(T);
    }
    compileAsync(D, U) {
      if (typeof this.opts.loadSchema != "function")
        throw new Error("options.loadSchema should be a function");
      const { loadSchema: T } = this.opts;
      return o.call(this, D, U);
      async function o(Z, ue) {
        await g.call(this, Z.$schema);
        const Le = this._addSchema(Z, ue);
        return Le.validate || R.call(this, Le);
      }
      async function g(Z) {
        Z && !this.getSchema(Z) && await o.call(this, { $ref: Z }, !0);
      }
      async function R(Z) {
        try {
          return this._compileSchemaEnv(Z);
        } catch (ue) {
          if (!(ue instanceof i.default))
            throw ue;
          return F.call(this, ue), await V.call(this, ue.missingSchema), R.call(this, Z);
        }
      }
      function F({ missingSchema: Z, missingRef: ue }) {
        if (this.refs[Z])
          throw new Error(`AnySchema ${Z} is loaded but ${ue} cannot be resolved`);
      }
      async function V(Z) {
        const ue = await Y.call(this, Z);
        this.refs[Z] || await g.call(this, ue.$schema), this.refs[Z] || this.addSchema(ue, Z, U);
      }
      async function Y(Z) {
        const ue = this._loading[Z];
        if (ue)
          return ue;
        try {
          return await (this._loading[Z] = T(Z));
        } finally {
          delete this._loading[Z];
        }
      }
    }
    // Adds schema to the instance
    addSchema(D, U, T, o = this.opts.validateSchema) {
      if (Array.isArray(D)) {
        for (const R of D)
          this.addSchema(R, void 0, T, o);
        return this;
      }
      let g;
      if (typeof D == "object") {
        const { schemaId: R } = this.opts;
        if (g = D[R], g !== void 0 && typeof g != "string")
          throw new Error(`schema ${R} must be string`);
      }
      return U = (0, p.normalizeId)(U || g), this._checkUnique(U), this.schemas[U] = this._addSchema(D, T, U, o, !0), this;
    }
    // Add schema that will be used to validate other schemas
    // options in META_IGNORE_OPTIONS are alway set to false
    addMetaSchema(D, U, T = this.opts.validateSchema) {
      return this.addSchema(D, U, !0, T), this;
    }
    //  Validate schema against its meta-schema
    validateSchema(D, U) {
      if (typeof D == "boolean")
        return !0;
      let T;
      if (T = D.$schema, T !== void 0 && typeof T != "string")
        throw new Error("$schema must be a string");
      if (T = T || this.opts.defaultMeta || this.defaultMeta(), !T)
        return this.logger.warn("meta-schema not available"), this.errors = null, !0;
      const o = this.validate(T, D);
      if (!o && U) {
        const g = "schema is invalid: " + this.errorsText();
        if (this.opts.validateSchema === "log")
          this.logger.error(g);
        else
          throw new Error(g);
      }
      return o;
    }
    // Get compiled schema by `key` or `ref`.
    // (`key` that was passed to `addSchema` or full schema reference - `schema.$id` or resolved id)
    getSchema(D) {
      let U;
      for (; typeof (U = m.call(this, D)) == "string"; )
        D = U;
      if (U === void 0) {
        const { schemaId: T } = this.opts, o = new s.SchemaEnv({ schema: {}, schemaId: T });
        if (U = s.resolveSchema.call(this, o, D), !U)
          return;
        this.refs[D] = U;
      }
      return U.validate || this._compileSchemaEnv(U);
    }
    // Remove cached schema(s).
    // If no parameter is passed all schemas but meta-schemas are removed.
    // If RegExp is passed all schemas with key/id matching pattern but meta-schemas are removed.
    // Even if schema is referenced by other schemas it still can be removed as other schemas have local references.
    removeSchema(D) {
      if (D instanceof RegExp)
        return this._removeAllSchemas(this.schemas, D), this._removeAllSchemas(this.refs, D), this;
      switch (typeof D) {
        case "undefined":
          return this._removeAllSchemas(this.schemas), this._removeAllSchemas(this.refs), this._cache.clear(), this;
        case "string": {
          const U = m.call(this, D);
          return typeof U == "object" && this._cache.delete(U.schema), delete this.schemas[D], delete this.refs[D], this;
        }
        case "object": {
          const U = D;
          this._cache.delete(U);
          let T = D[this.opts.schemaId];
          return T && (T = (0, p.normalizeId)(T), delete this.schemas[T], delete this.refs[T]), this;
        }
        default:
          throw new Error("ajv.removeSchema: invalid parameter");
      }
    }
    // add "vocabulary" - a collection of keywords
    addVocabulary(D) {
      for (const U of D)
        this.addKeyword(U);
      return this;
    }
    addKeyword(D, U) {
      let T;
      if (typeof D == "string")
        T = D, typeof U == "object" && (this.logger.warn("these parameters are deprecated, see docs for addKeyword"), U.keyword = T);
      else if (typeof D == "object" && U === void 0) {
        if (U = D, T = U.keyword, Array.isArray(T) && !T.length)
          throw new Error("addKeywords: keyword must be string or non-empty array");
      } else
        throw new Error("invalid addKeywords parameters");
      if (fe.call(this, T, U), !U)
        return (0, f.eachItem)(T, (g) => dt.call(this, g)), this;
      Nt.call(this, U);
      const o = {
        ...U,
        type: (0, c.getJSONTypes)(U.type),
        schemaType: (0, c.getJSONTypes)(U.schemaType)
      };
      return (0, f.eachItem)(T, o.type.length === 0 ? (g) => dt.call(this, g, o) : (g) => o.type.forEach((R) => dt.call(this, g, o, R))), this;
    }
    getKeyword(D) {
      const U = this.RULES.all[D];
      return typeof U == "object" ? U.definition : !!U;
    }
    // Remove keyword
    removeKeyword(D) {
      const { RULES: U } = this;
      delete U.keywords[D], delete U.all[D];
      for (const T of U.rules) {
        const o = T.rules.findIndex((g) => g.keyword === D);
        o >= 0 && T.rules.splice(o, 1);
      }
      return this;
    }
    // Add format
    addFormat(D, U) {
      return typeof U == "string" && (U = new RegExp(U)), this.formats[D] = U, this;
    }
    errorsText(D = this.errors, { separator: U = ", ", dataVar: T = "data" } = {}) {
      return !D || D.length === 0 ? "No errors" : D.map((o) => `${T}${o.instancePath} ${o.message}`).reduce((o, g) => o + U + g);
    }
    $dataMetaSchema(D, U) {
      const T = this.RULES.all;
      D = JSON.parse(JSON.stringify(D));
      for (const o of U) {
        const g = o.split("/").slice(1);
        let R = D;
        for (const F of g)
          R = R[F];
        for (const F in T) {
          const V = T[F];
          if (typeof V != "object")
            continue;
          const { $data: Y } = V.definition, Z = R[F];
          Y && Z && (R[F] = Mt(Z));
        }
      }
      return D;
    }
    _removeAllSchemas(D, U) {
      for (const T in D) {
        const o = D[T];
        (!U || U.test(T)) && (typeof o == "string" ? delete D[T] : o && !o.meta && (this._cache.delete(o.schema), delete D[T]));
      }
    }
    _addSchema(D, U, T, o = this.opts.validateSchema, g = this.opts.addUsedSchema) {
      let R;
      const { schemaId: F } = this.opts;
      if (typeof D == "object")
        R = D[F];
      else {
        if (this.opts.jtd)
          throw new Error("schema must be object");
        if (typeof D != "boolean")
          throw new Error("schema must be object or boolean");
      }
      let V = this._cache.get(D);
      if (V !== void 0)
        return V;
      T = (0, p.normalizeId)(R || T);
      const Y = p.getSchemaRefs.call(this, D, T);
      return V = new s.SchemaEnv({ schema: D, schemaId: F, meta: U, baseId: T, localRefs: Y }), this._cache.set(V.schema, V), g && !T.startsWith("#") && (T && this._checkUnique(T), this.refs[T] = V), o && this.validateSchema(D, !0), V;
    }
    _checkUnique(D) {
      if (this.schemas[D] || this.refs[D])
        throw new Error(`schema with key or id "${D}" already exists`);
    }
    _compileSchemaEnv(D) {
      if (D.meta ? this._compileMetaSchema(D) : s.compileSchema.call(this, D), !D.validate)
        throw new Error("ajv implementation error");
      return D.validate;
    }
    _compileMetaSchema(D) {
      const U = this.opts;
      this.opts = this._metaOpts;
      try {
        s.compileSchema.call(this, D);
      } finally {
        this.opts = U;
      }
    }
  }
  e.default = w, w.ValidationError = n.default, w.MissingRefError = i.default;
  function I(k, D, U, T = "error") {
    for (const o in k) {
      const g = o;
      g in D && this.logger[T](`${U}: option ${o}. ${k[g]}`);
    }
  }
  function m(k) {
    return k = (0, p.normalizeId)(k), this.schemas[k] || this.refs[k];
  }
  function _() {
    const k = this.opts.schemas;
    if (k)
      if (Array.isArray(k))
        this.addSchema(k);
      else
        for (const D in k)
          this.addSchema(k[D], D);
  }
  function C() {
    for (const k in this.opts.formats) {
      const D = this.opts.formats[k];
      D && this.addFormat(k, D);
    }
  }
  function L(k) {
    if (Array.isArray(k)) {
      this.addVocabulary(k);
      return;
    }
    this.logger.warn("keywords option as map is deprecated, pass array");
    for (const D in k) {
      const U = k[D];
      U.keyword || (U.keyword = D), this.addKeyword(U);
    }
  }
  function q() {
    const k = { ...this.opts };
    for (const D of E)
      delete k[D];
    return k;
  }
  const re = { log() {
  }, warn() {
  }, error() {
  } };
  function x(k) {
    if (k === !1)
      return re;
    if (k === void 0)
      return console;
    if (k.log && k.warn && k.error)
      return k;
    throw new Error("logger must implement log, warn and error methods");
  }
  const je = /^[a-z_$][a-z0-9_$:-]*$/i;
  function fe(k, D) {
    const { RULES: U } = this;
    if ((0, f.eachItem)(k, (T) => {
      if (U.keywords[T])
        throw new Error(`Keyword ${T} is already defined`);
      if (!je.test(T))
        throw new Error(`Keyword ${T} has invalid name`);
    }), !!D && D.$data && !("code" in D || "validate" in D))
      throw new Error('$data keyword must have "code" or "validate" function');
  }
  function dt(k, D, U) {
    var T;
    const o = D == null ? void 0 : D.post;
    if (U && o)
      throw new Error('keyword with "post" flag cannot have "type"');
    const { RULES: g } = this;
    let R = o ? g.post : g.rules.find(({ type: V }) => V === U);
    if (R || (R = { type: U, rules: [] }, g.rules.push(R)), g.keywords[k] = !0, !D)
      return;
    const F = {
      keyword: k,
      definition: {
        ...D,
        type: (0, c.getJSONTypes)(D.type),
        schemaType: (0, c.getJSONTypes)(D.schemaType)
      }
    };
    D.before ? ft.call(this, R, F, D.before) : R.rules.push(F), g.all[k] = F, (T = D.implements) === null || T === void 0 || T.forEach((V) => this.addKeyword(V));
  }
  function ft(k, D, U) {
    const T = k.rules.findIndex((o) => o.keyword === U);
    T >= 0 ? k.rules.splice(T, 0, D) : (k.rules.push(D), this.logger.warn(`rule ${U} is not defined`));
  }
  function Nt(k) {
    let { metaSchema: D } = k;
    D !== void 0 && (k.$data && this.opts.$data && (D = Mt(D)), k.validateSchema = this.compile(D, !0));
  }
  const or = {
    $ref: "https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#"
  };
  function Mt(k) {
    return { anyOf: [k, or] };
  }
})(Ho);
var xa = {}, es = {}, ts = {};
Object.defineProperty(ts, "__esModule", { value: !0 });
const Td = {
  keyword: "id",
  code() {
    throw new Error('NOT SUPPORTED: keyword "id", use "$id" for schema ID');
  }
};
ts.default = Td;
var Tt = {};
Object.defineProperty(Tt, "__esModule", { value: !0 });
Tt.callRef = Tt.getValidate = void 0;
const Nd = tn, so = J, we = Q, qt = Je, oo = Ee, dn = te, Md = {
  keyword: "$ref",
  schemaType: "string",
  code(e) {
    const { gen: t, schema: r, it: n } = e, { baseId: i, schemaEnv: a, validateName: s, opts: l, self: p } = n, { root: c } = a;
    if ((r === "#" || r === "#/") && i === c.baseId)
      return h();
    const f = oo.resolveRef.call(p, c, i, r);
    if (f === void 0)
      throw new Nd.default(n.opts.uriResolver, i, r);
    if (f instanceof oo.SchemaEnv)
      return b(f);
    return j(f);
    function h() {
      if (a === c)
        return ci(e, s, a, a.$async);
      const E = t.scopeValue("root", { ref: c });
      return ci(e, (0, we._)`${E}.validate`, c, c.$async);
    }
    function b(E) {
      const O = mu(e, E);
      ci(e, O, E, E.$async);
    }
    function j(E) {
      const O = t.scopeValue("schema", l.code.source === !0 ? { ref: E, code: (0, we.stringify)(E) } : { ref: E }), P = t.name("valid"), d = e.subschema({
        schema: E,
        dataTypes: [],
        schemaPath: we.nil,
        topSchemaRef: O,
        errSchemaPath: r
      }, P);
      e.mergeEvaluated(d), e.ok(P);
    }
  }
};
function mu(e, t) {
  const { gen: r } = e;
  return t.validate ? r.scopeValue("validate", { ref: t.validate }) : (0, we._)`${r.scopeValue("wrapper", { ref: t })}.validate`;
}
Tt.getValidate = mu;
function ci(e, t, r, n) {
  const { gen: i, it: a } = e, { allErrors: s, schemaEnv: l, opts: p } = a, c = p.passContext ? qt.default.this : we.nil;
  n ? f() : h();
  function f() {
    if (!l.$async)
      throw new Error("async schema referenced by sync schema");
    const E = i.let("valid");
    i.try(() => {
      i.code((0, we._)`await ${(0, so.callValidateCode)(e, t, c)}`), j(t), s || i.assign(E, !0);
    }, (O) => {
      i.if((0, we._)`!(${O} instanceof ${a.ValidationError})`, () => i.throw(O)), b(O), s || i.assign(E, !1);
    }), e.ok(E);
  }
  function h() {
    e.result((0, so.callValidateCode)(e, t, c), () => j(t), () => b(t));
  }
  function b(E) {
    const O = (0, we._)`${E}.errors`;
    i.assign(qt.default.vErrors, (0, we._)`${qt.default.vErrors} === null ? ${O} : ${qt.default.vErrors}.concat(${O})`), i.assign(qt.default.errors, (0, we._)`${qt.default.vErrors}.length`);
  }
  function j(E) {
    var O;
    if (!a.opts.unevaluated)
      return;
    const P = (O = r == null ? void 0 : r.validate) === null || O === void 0 ? void 0 : O.evaluated;
    if (a.props !== !0)
      if (P && !P.dynamicProps)
        P.props !== void 0 && (a.props = dn.mergeEvaluated.props(i, P.props, a.props));
      else {
        const d = i.var("props", (0, we._)`${E}.evaluated.props`);
        a.props = dn.mergeEvaluated.props(i, d, a.props, we.Name);
      }
    if (a.items !== !0)
      if (P && !P.dynamicItems)
        P.items !== void 0 && (a.items = dn.mergeEvaluated.items(i, P.items, a.items));
      else {
        const d = i.var("items", (0, we._)`${E}.evaluated.items`);
        a.items = dn.mergeEvaluated.items(i, d, a.items, we.Name);
      }
  }
}
Tt.callRef = ci;
Tt.default = Md;
Object.defineProperty(es, "__esModule", { value: !0 });
const Cd = ts, Id = Tt, Rd = [
  "$schema",
  "$id",
  "$defs",
  "$vocabulary",
  { keyword: "$comment" },
  "definitions",
  Cd.default,
  Id.default
];
es.default = Rd;
var rs = {}, ns = {};
Object.defineProperty(ns, "__esModule", { value: !0 });
const $i = Q, at = $i.operators, Pi = {
  maximum: { okStr: "<=", ok: at.LTE, fail: at.GT },
  minimum: { okStr: ">=", ok: at.GTE, fail: at.LT },
  exclusiveMaximum: { okStr: "<", ok: at.LT, fail: at.GTE },
  exclusiveMinimum: { okStr: ">", ok: at.GT, fail: at.LTE }
}, Ad = {
  message: ({ keyword: e, schemaCode: t }) => (0, $i.str)`must be ${Pi[e].okStr} ${t}`,
  params: ({ keyword: e, schemaCode: t }) => (0, $i._)`{comparison: ${Pi[e].okStr}, limit: ${t}}`
}, Ud = {
  keyword: Object.keys(Pi),
  type: "number",
  schemaType: "number",
  $data: !0,
  error: Ad,
  code(e) {
    const { keyword: t, data: r, schemaCode: n } = e;
    e.fail$data((0, $i._)`${r} ${Pi[t].fail} ${n} || isNaN(${r})`);
  }
};
ns.default = Ud;
var is = {};
Object.defineProperty(is, "__esModule", { value: !0 });
const Lr = Q, kd = {
  message: ({ schemaCode: e }) => (0, Lr.str)`must be multiple of ${e}`,
  params: ({ schemaCode: e }) => (0, Lr._)`{multipleOf: ${e}}`
}, Fd = {
  keyword: "multipleOf",
  type: "number",
  schemaType: "number",
  $data: !0,
  error: kd,
  code(e) {
    const { gen: t, data: r, schemaCode: n, it: i } = e, a = i.opts.multipleOfPrecision, s = t.let("res"), l = a ? (0, Lr._)`Math.abs(Math.round(${s}) - ${s}) > 1e-${a}` : (0, Lr._)`${s} !== parseInt(${s})`;
    e.fail$data((0, Lr._)`(${n} === 0 || (${s} = ${r}/${n}, ${l}))`);
  }
};
is.default = Fd;
var as = {}, ss = {};
Object.defineProperty(ss, "__esModule", { value: !0 });
function _u(e) {
  const t = e.length;
  let r = 0, n = 0, i;
  for (; n < t; )
    r++, i = e.charCodeAt(n++), i >= 55296 && i <= 56319 && n < t && (i = e.charCodeAt(n), (i & 64512) === 56320 && n++);
  return r;
}
ss.default = _u;
_u.code = 'require("ajv/dist/runtime/ucs2length").default';
Object.defineProperty(as, "__esModule", { value: !0 });
const Et = Q, Ld = te, Vd = ss, Wd = {
  message({ keyword: e, schemaCode: t }) {
    const r = e === "maxLength" ? "more" : "fewer";
    return (0, Et.str)`must NOT have ${r} than ${t} characters`;
  },
  params: ({ schemaCode: e }) => (0, Et._)`{limit: ${e}}`
}, Gd = {
  keyword: ["maxLength", "minLength"],
  type: "string",
  schemaType: "number",
  $data: !0,
  error: Wd,
  code(e) {
    const { keyword: t, data: r, schemaCode: n, it: i } = e, a = t === "maxLength" ? Et.operators.GT : Et.operators.LT, s = i.opts.unicode === !1 ? (0, Et._)`${r}.length` : (0, Et._)`${(0, Ld.useFunc)(e.gen, Vd.default)}(${r})`;
    e.fail$data((0, Et._)`${s} ${a} ${n}`);
  }
};
as.default = Gd;
var os = {};
Object.defineProperty(os, "__esModule", { value: !0 });
const Hd = J, wi = Q, qd = {
  message: ({ schemaCode: e }) => (0, wi.str)`must match pattern "${e}"`,
  params: ({ schemaCode: e }) => (0, wi._)`{pattern: ${e}}`
}, zd = {
  keyword: "pattern",
  type: "string",
  schemaType: "string",
  $data: !0,
  error: qd,
  code(e) {
    const { data: t, $data: r, schema: n, schemaCode: i, it: a } = e, s = a.opts.unicodeRegExp ? "u" : "", l = r ? (0, wi._)`(new RegExp(${i}, ${s}))` : (0, Hd.usePattern)(e, n);
    e.fail$data((0, wi._)`!${l}.test(${t})`);
  }
};
os.default = zd;
var us = {};
Object.defineProperty(us, "__esModule", { value: !0 });
const Vr = Q, Kd = {
  message({ keyword: e, schemaCode: t }) {
    const r = e === "maxProperties" ? "more" : "fewer";
    return (0, Vr.str)`must NOT have ${r} than ${t} properties`;
  },
  params: ({ schemaCode: e }) => (0, Vr._)`{limit: ${e}}`
}, Bd = {
  keyword: ["maxProperties", "minProperties"],
  type: "object",
  schemaType: "number",
  $data: !0,
  error: Kd,
  code(e) {
    const { keyword: t, data: r, schemaCode: n } = e, i = t === "maxProperties" ? Vr.operators.GT : Vr.operators.LT;
    e.fail$data((0, Vr._)`Object.keys(${r}).length ${i} ${n}`);
  }
};
us.default = Bd;
var ls = {};
Object.defineProperty(ls, "__esModule", { value: !0 });
const jr = J, Wr = Q, Jd = te, Qd = {
  message: ({ params: { missingProperty: e } }) => (0, Wr.str)`must have required property '${e}'`,
  params: ({ params: { missingProperty: e } }) => (0, Wr._)`{missingProperty: ${e}}`
}, Yd = {
  keyword: "required",
  type: "object",
  schemaType: "array",
  $data: !0,
  error: Qd,
  code(e) {
    const { gen: t, schema: r, schemaCode: n, data: i, $data: a, it: s } = e, { opts: l } = s;
    if (!a && r.length === 0)
      return;
    const p = r.length >= l.loopRequired;
    if (s.allErrors ? c() : f(), l.strictRequired) {
      const j = e.parentSchema.properties, { definedProperties: E } = e.it;
      for (const O of r)
        if ((j == null ? void 0 : j[O]) === void 0 && !E.has(O)) {
          const P = s.schemaEnv.baseId + s.errSchemaPath, d = `required property "${O}" is not defined at "${P}" (strictRequired)`;
          (0, Jd.checkStrictMode)(s, d, s.opts.strictRequired);
        }
    }
    function c() {
      if (p || a)
        e.block$data(Wr.nil, h);
      else
        for (const j of r)
          (0, jr.checkReportMissingProp)(e, j);
    }
    function f() {
      const j = t.let("missing");
      if (p || a) {
        const E = t.let("valid", !0);
        e.block$data(E, () => b(j, E)), e.ok(E);
      } else
        t.if((0, jr.checkMissingProp)(e, r, j)), (0, jr.reportMissingProp)(e, j), t.else();
    }
    function h() {
      t.forOf("prop", n, (j) => {
        e.setParams({ missingProperty: j }), t.if((0, jr.noPropertyInData)(t, i, j, l.ownProperties), () => e.error());
      });
    }
    function b(j, E) {
      e.setParams({ missingProperty: j }), t.forOf(j, n, () => {
        t.assign(E, (0, jr.propertyInData)(t, i, j, l.ownProperties)), t.if((0, Wr.not)(E), () => {
          e.error(), t.break();
        });
      }, Wr.nil);
    }
  }
};
ls.default = Yd;
var cs = {};
Object.defineProperty(cs, "__esModule", { value: !0 });
const Gr = Q, Xd = {
  message({ keyword: e, schemaCode: t }) {
    const r = e === "maxItems" ? "more" : "fewer";
    return (0, Gr.str)`must NOT have ${r} than ${t} items`;
  },
  params: ({ schemaCode: e }) => (0, Gr._)`{limit: ${e}}`
}, Zd = {
  keyword: ["maxItems", "minItems"],
  type: "array",
  schemaType: "number",
  $data: !0,
  error: Xd,
  code(e) {
    const { keyword: t, data: r, schemaCode: n } = e, i = t === "maxItems" ? Gr.operators.GT : Gr.operators.LT;
    e.fail$data((0, Gr._)`${r}.length ${i} ${n}`);
  }
};
cs.default = Zd;
var ds = {}, rn = {};
Object.defineProperty(rn, "__esModule", { value: !0 });
const vu = Xo;
vu.code = 'require("ajv/dist/runtime/equal").default';
rn.default = vu;
Object.defineProperty(ds, "__esModule", { value: !0 });
const da = xr, me = Q, xd = te, ef = rn, tf = {
  message: ({ params: { i: e, j: t } }) => (0, me.str)`must NOT have duplicate items (items ## ${t} and ${e} are identical)`,
  params: ({ params: { i: e, j: t } }) => (0, me._)`{i: ${e}, j: ${t}}`
}, rf = {
  keyword: "uniqueItems",
  type: "array",
  schemaType: "boolean",
  $data: !0,
  error: tf,
  code(e) {
    const { gen: t, data: r, $data: n, schema: i, parentSchema: a, schemaCode: s, it: l } = e;
    if (!n && !i)
      return;
    const p = t.let("valid"), c = a.items ? (0, da.getSchemaTypes)(a.items) : [];
    e.block$data(p, f, (0, me._)`${s} === false`), e.ok(p);
    function f() {
      const E = t.let("i", (0, me._)`${r}.length`), O = t.let("j");
      e.setParams({ i: E, j: O }), t.assign(p, !0), t.if((0, me._)`${E} > 1`, () => (h() ? b : j)(E, O));
    }
    function h() {
      return c.length > 0 && !c.some((E) => E === "object" || E === "array");
    }
    function b(E, O) {
      const P = t.name("item"), d = (0, da.checkDataTypes)(c, P, l.opts.strictNumbers, da.DataType.Wrong), S = t.const("indices", (0, me._)`{}`);
      t.for((0, me._)`;${E}--;`, () => {
        t.let(P, (0, me._)`${r}[${E}]`), t.if(d, (0, me._)`continue`), c.length > 1 && t.if((0, me._)`typeof ${P} == "string"`, (0, me._)`${P} += "_"`), t.if((0, me._)`typeof ${S}[${P}] == "number"`, () => {
          t.assign(O, (0, me._)`${S}[${P}]`), e.error(), t.assign(p, !1).break();
        }).code((0, me._)`${S}[${P}] = ${E}`);
      });
    }
    function j(E, O) {
      const P = (0, xd.useFunc)(t, ef.default), d = t.name("outer");
      t.label(d).for((0, me._)`;${E}--;`, () => t.for((0, me._)`${O} = ${E}; ${O}--;`, () => t.if((0, me._)`${P}(${r}[${E}], ${r}[${O}])`, () => {
        e.error(), t.assign(p, !1).break(d);
      })));
    }
  }
};
ds.default = rf;
var fs = {};
Object.defineProperty(fs, "__esModule", { value: !0 });
const Sa = Q, nf = te, af = rn, sf = {
  message: "must be equal to constant",
  params: ({ schemaCode: e }) => (0, Sa._)`{allowedValue: ${e}}`
}, of = {
  keyword: "const",
  $data: !0,
  error: sf,
  code(e) {
    const { gen: t, data: r, $data: n, schemaCode: i, schema: a } = e;
    n || a && typeof a == "object" ? e.fail$data((0, Sa._)`!${(0, nf.useFunc)(t, af.default)}(${r}, ${i})`) : e.fail((0, Sa._)`${a} !== ${r}`);
  }
};
fs.default = of;
var hs = {};
Object.defineProperty(hs, "__esModule", { value: !0 });
const Ur = Q, uf = te, lf = rn, cf = {
  message: "must be equal to one of the allowed values",
  params: ({ schemaCode: e }) => (0, Ur._)`{allowedValues: ${e}}`
}, df = {
  keyword: "enum",
  schemaType: "array",
  $data: !0,
  error: cf,
  code(e) {
    const { gen: t, data: r, $data: n, schema: i, schemaCode: a, it: s } = e;
    if (!n && i.length === 0)
      throw new Error("enum must have non-empty array");
    const l = i.length >= s.opts.loopEnum;
    let p;
    const c = () => p ?? (p = (0, uf.useFunc)(t, lf.default));
    let f;
    if (l || n)
      f = t.let("valid"), e.block$data(f, h);
    else {
      if (!Array.isArray(i))
        throw new Error("ajv implementation error");
      const j = t.const("vSchema", a);
      f = (0, Ur.or)(...i.map((E, O) => b(j, O)));
    }
    e.pass(f);
    function h() {
      t.assign(f, !1), t.forOf("v", a, (j) => t.if((0, Ur._)`${c()}(${r}, ${j})`, () => t.assign(f, !0).break()));
    }
    function b(j, E) {
      const O = i[E];
      return typeof O == "object" && O !== null ? (0, Ur._)`${c()}(${r}, ${j}[${E}])` : (0, Ur._)`${r} === ${O}`;
    }
  }
};
hs.default = df;
Object.defineProperty(rs, "__esModule", { value: !0 });
const ff = ns, hf = is, pf = as, mf = os, _f = us, vf = ls, gf = cs, yf = ds, $f = fs, Pf = hs, wf = [
  // number
  ff.default,
  hf.default,
  // string
  pf.default,
  mf.default,
  // object
  _f.default,
  vf.default,
  // array
  gf.default,
  yf.default,
  // any
  { keyword: "type", schemaType: ["string", "array"] },
  { keyword: "nullable", schemaType: "boolean" },
  $f.default,
  Pf.default
];
rs.default = wf;
var ps = {}, ar = {};
Object.defineProperty(ar, "__esModule", { value: !0 });
ar.validateAdditionalItems = void 0;
const St = Q, Oa = te, bf = {
  message: ({ params: { len: e } }) => (0, St.str)`must NOT have more than ${e} items`,
  params: ({ params: { len: e } }) => (0, St._)`{limit: ${e}}`
}, Ef = {
  keyword: "additionalItems",
  type: "array",
  schemaType: ["boolean", "object"],
  before: "uniqueItems",
  error: bf,
  code(e) {
    const { parentSchema: t, it: r } = e, { items: n } = t;
    if (!Array.isArray(n)) {
      (0, Oa.checkStrictMode)(r, '"additionalItems" is ignored when "items" is not an array of schemas');
      return;
    }
    gu(e, n);
  }
};
function gu(e, t) {
  const { gen: r, schema: n, data: i, keyword: a, it: s } = e;
  s.items = !0;
  const l = r.const("len", (0, St._)`${i}.length`);
  if (n === !1)
    e.setParams({ len: t.length }), e.pass((0, St._)`${l} <= ${t.length}`);
  else if (typeof n == "object" && !(0, Oa.alwaysValidSchema)(s, n)) {
    const c = r.var("valid", (0, St._)`${l} <= ${t.length}`);
    r.if((0, St.not)(c), () => p(c)), e.ok(c);
  }
  function p(c) {
    r.forRange("i", t.length, l, (f) => {
      e.subschema({ keyword: a, dataProp: f, dataPropType: Oa.Type.Num }, c), s.allErrors || r.if((0, St.not)(c), () => r.break());
    });
  }
}
ar.validateAdditionalItems = gu;
ar.default = Ef;
var ms = {}, sr = {};
Object.defineProperty(sr, "__esModule", { value: !0 });
sr.validateTuple = void 0;
const uo = Q, di = te, Sf = J, Of = {
  keyword: "items",
  type: "array",
  schemaType: ["object", "array", "boolean"],
  before: "uniqueItems",
  code(e) {
    const { schema: t, it: r } = e;
    if (Array.isArray(t))
      return yu(e, "additionalItems", t);
    r.items = !0, !(0, di.alwaysValidSchema)(r, t) && e.ok((0, Sf.validateArray)(e));
  }
};
function yu(e, t, r = e.schema) {
  const { gen: n, parentSchema: i, data: a, keyword: s, it: l } = e;
  f(i), l.opts.unevaluated && r.length && l.items !== !0 && (l.items = di.mergeEvaluated.items(n, r.length, l.items));
  const p = n.name("valid"), c = n.const("len", (0, uo._)`${a}.length`);
  r.forEach((h, b) => {
    (0, di.alwaysValidSchema)(l, h) || (n.if((0, uo._)`${c} > ${b}`, () => e.subschema({
      keyword: s,
      schemaProp: b,
      dataProp: b
    }, p)), e.ok(p));
  });
  function f(h) {
    const { opts: b, errSchemaPath: j } = l, E = r.length, O = E === h.minItems && (E === h.maxItems || h[t] === !1);
    if (b.strictTuples && !O) {
      const P = `"${s}" is ${E}-tuple, but minItems or maxItems/${t} are not specified or different at path "${j}"`;
      (0, di.checkStrictMode)(l, P, b.strictTuples);
    }
  }
}
sr.validateTuple = yu;
sr.default = Of;
Object.defineProperty(ms, "__esModule", { value: !0 });
const Df = sr, jf = {
  keyword: "prefixItems",
  type: "array",
  schemaType: ["array"],
  before: "uniqueItems",
  code: (e) => (0, Df.validateTuple)(e, "items")
};
ms.default = jf;
var _s = {};
Object.defineProperty(_s, "__esModule", { value: !0 });
const lo = Q, Tf = te, Nf = J, Mf = ar, Cf = {
  message: ({ params: { len: e } }) => (0, lo.str)`must NOT have more than ${e} items`,
  params: ({ params: { len: e } }) => (0, lo._)`{limit: ${e}}`
}, If = {
  keyword: "items",
  type: "array",
  schemaType: ["object", "boolean"],
  before: "uniqueItems",
  error: Cf,
  code(e) {
    const { schema: t, parentSchema: r, it: n } = e, { prefixItems: i } = r;
    n.items = !0, !(0, Tf.alwaysValidSchema)(n, t) && (i ? (0, Mf.validateAdditionalItems)(e, i) : e.ok((0, Nf.validateArray)(e)));
  }
};
_s.default = If;
var vs = {};
Object.defineProperty(vs, "__esModule", { value: !0 });
const Ie = Q, fn = te, Rf = {
  message: ({ params: { min: e, max: t } }) => t === void 0 ? (0, Ie.str)`must contain at least ${e} valid item(s)` : (0, Ie.str)`must contain at least ${e} and no more than ${t} valid item(s)`,
  params: ({ params: { min: e, max: t } }) => t === void 0 ? (0, Ie._)`{minContains: ${e}}` : (0, Ie._)`{minContains: ${e}, maxContains: ${t}}`
}, Af = {
  keyword: "contains",
  type: "array",
  schemaType: ["object", "boolean"],
  before: "uniqueItems",
  trackErrors: !0,
  error: Rf,
  code(e) {
    const { gen: t, schema: r, parentSchema: n, data: i, it: a } = e;
    let s, l;
    const { minContains: p, maxContains: c } = n;
    a.opts.next ? (s = p === void 0 ? 1 : p, l = c) : s = 1;
    const f = t.const("len", (0, Ie._)`${i}.length`);
    if (e.setParams({ min: s, max: l }), l === void 0 && s === 0) {
      (0, fn.checkStrictMode)(a, '"minContains" == 0 without "maxContains": "contains" keyword ignored');
      return;
    }
    if (l !== void 0 && s > l) {
      (0, fn.checkStrictMode)(a, '"minContains" > "maxContains" is always invalid'), e.fail();
      return;
    }
    if ((0, fn.alwaysValidSchema)(a, r)) {
      let O = (0, Ie._)`${f} >= ${s}`;
      l !== void 0 && (O = (0, Ie._)`${O} && ${f} <= ${l}`), e.pass(O);
      return;
    }
    a.items = !0;
    const h = t.name("valid");
    l === void 0 && s === 1 ? j(h, () => t.if(h, () => t.break())) : s === 0 ? (t.let(h, !0), l !== void 0 && t.if((0, Ie._)`${i}.length > 0`, b)) : (t.let(h, !1), b()), e.result(h, () => e.reset());
    function b() {
      const O = t.name("_valid"), P = t.let("count", 0);
      j(O, () => t.if(O, () => E(P)));
    }
    function j(O, P) {
      t.forRange("i", 0, f, (d) => {
        e.subschema({
          keyword: "contains",
          dataProp: d,
          dataPropType: fn.Type.Num,
          compositeRule: !0
        }, O), P();
      });
    }
    function E(O) {
      t.code((0, Ie._)`${O}++`), l === void 0 ? t.if((0, Ie._)`${O} >= ${s}`, () => t.assign(h, !0).break()) : (t.if((0, Ie._)`${O} > ${l}`, () => t.assign(h, !1).break()), s === 1 ? t.assign(h, !0) : t.if((0, Ie._)`${O} >= ${s}`, () => t.assign(h, !0)));
    }
  }
};
vs.default = Af;
var $u = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.validateSchemaDeps = e.validatePropertyDeps = e.error = void 0;
  const t = Q, r = te, n = J;
  e.error = {
    message: ({ params: { property: p, depsCount: c, deps: f } }) => {
      const h = c === 1 ? "property" : "properties";
      return (0, t.str)`must have ${h} ${f} when property ${p} is present`;
    },
    params: ({ params: { property: p, depsCount: c, deps: f, missingProperty: h } }) => (0, t._)`{property: ${p},
    missingProperty: ${h},
    depsCount: ${c},
    deps: ${f}}`
    // TODO change to reference
  };
  const i = {
    keyword: "dependencies",
    type: "object",
    schemaType: "object",
    error: e.error,
    code(p) {
      const [c, f] = a(p);
      s(p, c), l(p, f);
    }
  };
  function a({ schema: p }) {
    const c = {}, f = {};
    for (const h in p) {
      if (h === "__proto__")
        continue;
      const b = Array.isArray(p[h]) ? c : f;
      b[h] = p[h];
    }
    return [c, f];
  }
  function s(p, c = p.schema) {
    const { gen: f, data: h, it: b } = p;
    if (Object.keys(c).length === 0)
      return;
    const j = f.let("missing");
    for (const E in c) {
      const O = c[E];
      if (O.length === 0)
        continue;
      const P = (0, n.propertyInData)(f, h, E, b.opts.ownProperties);
      p.setParams({
        property: E,
        depsCount: O.length,
        deps: O.join(", ")
      }), b.allErrors ? f.if(P, () => {
        for (const d of O)
          (0, n.checkReportMissingProp)(p, d);
      }) : (f.if((0, t._)`${P} && (${(0, n.checkMissingProp)(p, O, j)})`), (0, n.reportMissingProp)(p, j), f.else());
    }
  }
  e.validatePropertyDeps = s;
  function l(p, c = p.schema) {
    const { gen: f, data: h, keyword: b, it: j } = p, E = f.name("valid");
    for (const O in c)
      (0, r.alwaysValidSchema)(j, c[O]) || (f.if(
        (0, n.propertyInData)(f, h, O, j.opts.ownProperties),
        () => {
          const P = p.subschema({ keyword: b, schemaProp: O }, E);
          p.mergeValidEvaluated(P, E);
        },
        () => f.var(E, !0)
        // TODO var
      ), p.ok(E));
  }
  e.validateSchemaDeps = l, e.default = i;
})($u);
var gs = {};
Object.defineProperty(gs, "__esModule", { value: !0 });
const Pu = Q, Uf = te, kf = {
  message: "property name must be valid",
  params: ({ params: e }) => (0, Pu._)`{propertyName: ${e.propertyName}}`
}, Ff = {
  keyword: "propertyNames",
  type: "object",
  schemaType: ["object", "boolean"],
  error: kf,
  code(e) {
    const { gen: t, schema: r, data: n, it: i } = e;
    if ((0, Uf.alwaysValidSchema)(i, r))
      return;
    const a = t.name("valid");
    t.forIn("key", n, (s) => {
      e.setParams({ propertyName: s }), e.subschema({
        keyword: "propertyNames",
        data: s,
        dataTypes: ["string"],
        propertyName: s,
        compositeRule: !0
      }, a), t.if((0, Pu.not)(a), () => {
        e.error(!0), i.allErrors || t.break();
      });
    }), e.ok(a);
  }
};
gs.default = Ff;
var Hi = {};
Object.defineProperty(Hi, "__esModule", { value: !0 });
const hn = J, Ue = Q, Lf = Je, pn = te, Vf = {
  message: "must NOT have additional properties",
  params: ({ params: e }) => (0, Ue._)`{additionalProperty: ${e.additionalProperty}}`
}, Wf = {
  keyword: "additionalProperties",
  type: ["object"],
  schemaType: ["boolean", "object"],
  allowUndefined: !0,
  trackErrors: !0,
  error: Vf,
  code(e) {
    const { gen: t, schema: r, parentSchema: n, data: i, errsCount: a, it: s } = e;
    if (!a)
      throw new Error("ajv implementation error");
    const { allErrors: l, opts: p } = s;
    if (s.props = !0, p.removeAdditional !== "all" && (0, pn.alwaysValidSchema)(s, r))
      return;
    const c = (0, hn.allSchemaProperties)(n.properties), f = (0, hn.allSchemaProperties)(n.patternProperties);
    h(), e.ok((0, Ue._)`${a} === ${Lf.default.errors}`);
    function h() {
      t.forIn("key", i, (P) => {
        !c.length && !f.length ? E(P) : t.if(b(P), () => E(P));
      });
    }
    function b(P) {
      let d;
      if (c.length > 8) {
        const S = (0, pn.schemaRefOrVal)(s, n.properties, "properties");
        d = (0, hn.isOwnProperty)(t, S, P);
      } else
        c.length ? d = (0, Ue.or)(...c.map((S) => (0, Ue._)`${P} === ${S}`)) : d = Ue.nil;
      return f.length && (d = (0, Ue.or)(d, ...f.map((S) => (0, Ue._)`${(0, hn.usePattern)(e, S)}.test(${P})`))), (0, Ue.not)(d);
    }
    function j(P) {
      t.code((0, Ue._)`delete ${i}[${P}]`);
    }
    function E(P) {
      if (p.removeAdditional === "all" || p.removeAdditional && r === !1) {
        j(P);
        return;
      }
      if (r === !1) {
        e.setParams({ additionalProperty: P }), e.error(), l || t.break();
        return;
      }
      if (typeof r == "object" && !(0, pn.alwaysValidSchema)(s, r)) {
        const d = t.name("valid");
        p.removeAdditional === "failing" ? (O(P, d, !1), t.if((0, Ue.not)(d), () => {
          e.reset(), j(P);
        })) : (O(P, d), l || t.if((0, Ue.not)(d), () => t.break()));
      }
    }
    function O(P, d, S) {
      const $ = {
        keyword: "additionalProperties",
        dataProp: P,
        dataPropType: pn.Type.Str
      };
      S === !1 && Object.assign($, {
        compositeRule: !0,
        createErrors: !1,
        allErrors: !1
      }), e.subschema($, d);
    }
  }
};
Hi.default = Wf;
var ys = {};
Object.defineProperty(ys, "__esModule", { value: !0 });
const Gf = Fe, co = J, fa = te, fo = Hi, Hf = {
  keyword: "properties",
  type: "object",
  schemaType: "object",
  code(e) {
    const { gen: t, schema: r, parentSchema: n, data: i, it: a } = e;
    a.opts.removeAdditional === "all" && n.additionalProperties === void 0 && fo.default.code(new Gf.KeywordCxt(a, fo.default, "additionalProperties"));
    const s = (0, co.allSchemaProperties)(r);
    for (const h of s)
      a.definedProperties.add(h);
    a.opts.unevaluated && s.length && a.props !== !0 && (a.props = fa.mergeEvaluated.props(t, (0, fa.toHash)(s), a.props));
    const l = s.filter((h) => !(0, fa.alwaysValidSchema)(a, r[h]));
    if (l.length === 0)
      return;
    const p = t.name("valid");
    for (const h of l)
      c(h) ? f(h) : (t.if((0, co.propertyInData)(t, i, h, a.opts.ownProperties)), f(h), a.allErrors || t.else().var(p, !0), t.endIf()), e.it.definedProperties.add(h), e.ok(p);
    function c(h) {
      return a.opts.useDefaults && !a.compositeRule && r[h].default !== void 0;
    }
    function f(h) {
      e.subschema({
        keyword: "properties",
        schemaProp: h,
        dataProp: h
      }, p);
    }
  }
};
ys.default = Hf;
var $s = {};
Object.defineProperty($s, "__esModule", { value: !0 });
const ho = J, mn = Q, po = te, mo = te, qf = {
  keyword: "patternProperties",
  type: "object",
  schemaType: "object",
  code(e) {
    const { gen: t, schema: r, data: n, parentSchema: i, it: a } = e, { opts: s } = a, l = (0, ho.allSchemaProperties)(r), p = l.filter((O) => (0, po.alwaysValidSchema)(a, r[O]));
    if (l.length === 0 || p.length === l.length && (!a.opts.unevaluated || a.props === !0))
      return;
    const c = s.strictSchema && !s.allowMatchingProperties && i.properties, f = t.name("valid");
    a.props !== !0 && !(a.props instanceof mn.Name) && (a.props = (0, mo.evaluatedPropsToName)(t, a.props));
    const { props: h } = a;
    b();
    function b() {
      for (const O of l)
        c && j(O), a.allErrors ? E(O) : (t.var(f, !0), E(O), t.if(f));
    }
    function j(O) {
      for (const P in c)
        new RegExp(O).test(P) && (0, po.checkStrictMode)(a, `property ${P} matches pattern ${O} (use allowMatchingProperties)`);
    }
    function E(O) {
      t.forIn("key", n, (P) => {
        t.if((0, mn._)`${(0, ho.usePattern)(e, O)}.test(${P})`, () => {
          const d = p.includes(O);
          d || e.subschema({
            keyword: "patternProperties",
            schemaProp: O,
            dataProp: P,
            dataPropType: mo.Type.Str
          }, f), a.opts.unevaluated && h !== !0 ? t.assign((0, mn._)`${h}[${P}]`, !0) : !d && !a.allErrors && t.if((0, mn.not)(f), () => t.break());
        });
      });
    }
  }
};
$s.default = qf;
var Ps = {};
Object.defineProperty(Ps, "__esModule", { value: !0 });
const zf = te, Kf = {
  keyword: "not",
  schemaType: ["object", "boolean"],
  trackErrors: !0,
  code(e) {
    const { gen: t, schema: r, it: n } = e;
    if ((0, zf.alwaysValidSchema)(n, r)) {
      e.fail();
      return;
    }
    const i = t.name("valid");
    e.subschema({
      keyword: "not",
      compositeRule: !0,
      createErrors: !1,
      allErrors: !1
    }, i), e.failResult(i, () => e.reset(), () => e.error());
  },
  error: { message: "must NOT be valid" }
};
Ps.default = Kf;
var ws = {};
Object.defineProperty(ws, "__esModule", { value: !0 });
const Bf = J, Jf = {
  keyword: "anyOf",
  schemaType: "array",
  trackErrors: !0,
  code: Bf.validateUnion,
  error: { message: "must match a schema in anyOf" }
};
ws.default = Jf;
var bs = {};
Object.defineProperty(bs, "__esModule", { value: !0 });
const fi = Q, Qf = te, Yf = {
  message: "must match exactly one schema in oneOf",
  params: ({ params: e }) => (0, fi._)`{passingSchemas: ${e.passing}}`
}, Xf = {
  keyword: "oneOf",
  schemaType: "array",
  trackErrors: !0,
  error: Yf,
  code(e) {
    const { gen: t, schema: r, parentSchema: n, it: i } = e;
    if (!Array.isArray(r))
      throw new Error("ajv implementation error");
    if (i.opts.discriminator && n.discriminator)
      return;
    const a = r, s = t.let("valid", !1), l = t.let("passing", null), p = t.name("_valid");
    e.setParams({ passing: l }), t.block(c), e.result(s, () => e.reset(), () => e.error(!0));
    function c() {
      a.forEach((f, h) => {
        let b;
        (0, Qf.alwaysValidSchema)(i, f) ? t.var(p, !0) : b = e.subschema({
          keyword: "oneOf",
          schemaProp: h,
          compositeRule: !0
        }, p), h > 0 && t.if((0, fi._)`${p} && ${s}`).assign(s, !1).assign(l, (0, fi._)`[${l}, ${h}]`).else(), t.if(p, () => {
          t.assign(s, !0), t.assign(l, h), b && e.mergeEvaluated(b, fi.Name);
        });
      });
    }
  }
};
bs.default = Xf;
var Es = {};
Object.defineProperty(Es, "__esModule", { value: !0 });
const Zf = te, xf = {
  keyword: "allOf",
  schemaType: "array",
  code(e) {
    const { gen: t, schema: r, it: n } = e;
    if (!Array.isArray(r))
      throw new Error("ajv implementation error");
    const i = t.name("valid");
    r.forEach((a, s) => {
      if ((0, Zf.alwaysValidSchema)(n, a))
        return;
      const l = e.subschema({ keyword: "allOf", schemaProp: s }, i);
      e.ok(i), e.mergeEvaluated(l);
    });
  }
};
Es.default = xf;
var Ss = {};
Object.defineProperty(Ss, "__esModule", { value: !0 });
const bi = Q, wu = te, eh = {
  message: ({ params: e }) => (0, bi.str)`must match "${e.ifClause}" schema`,
  params: ({ params: e }) => (0, bi._)`{failingKeyword: ${e.ifClause}}`
}, th = {
  keyword: "if",
  schemaType: ["object", "boolean"],
  trackErrors: !0,
  error: eh,
  code(e) {
    const { gen: t, parentSchema: r, it: n } = e;
    r.then === void 0 && r.else === void 0 && (0, wu.checkStrictMode)(n, '"if" without "then" and "else" is ignored');
    const i = _o(n, "then"), a = _o(n, "else");
    if (!i && !a)
      return;
    const s = t.let("valid", !0), l = t.name("_valid");
    if (p(), e.reset(), i && a) {
      const f = t.let("ifClause");
      e.setParams({ ifClause: f }), t.if(l, c("then", f), c("else", f));
    } else
      i ? t.if(l, c("then")) : t.if((0, bi.not)(l), c("else"));
    e.pass(s, () => e.error(!0));
    function p() {
      const f = e.subschema({
        keyword: "if",
        compositeRule: !0,
        createErrors: !1,
        allErrors: !1
      }, l);
      e.mergeEvaluated(f);
    }
    function c(f, h) {
      return () => {
        const b = e.subschema({ keyword: f }, l);
        t.assign(s, l), e.mergeValidEvaluated(b, s), h ? t.assign(h, (0, bi._)`${f}`) : e.setParams({ ifClause: f });
      };
    }
  }
};
function _o(e, t) {
  const r = e.schema[t];
  return r !== void 0 && !(0, wu.alwaysValidSchema)(e, r);
}
Ss.default = th;
var Os = {};
Object.defineProperty(Os, "__esModule", { value: !0 });
const rh = te, nh = {
  keyword: ["then", "else"],
  schemaType: ["object", "boolean"],
  code({ keyword: e, parentSchema: t, it: r }) {
    t.if === void 0 && (0, rh.checkStrictMode)(r, `"${e}" without "if" is ignored`);
  }
};
Os.default = nh;
Object.defineProperty(ps, "__esModule", { value: !0 });
const ih = ar, ah = ms, sh = sr, oh = _s, uh = vs, lh = $u, ch = gs, dh = Hi, fh = ys, hh = $s, ph = Ps, mh = ws, _h = bs, vh = Es, gh = Ss, yh = Os;
function $h(e = !1) {
  const t = [
    // any
    ph.default,
    mh.default,
    _h.default,
    vh.default,
    gh.default,
    yh.default,
    // object
    ch.default,
    dh.default,
    lh.default,
    fh.default,
    hh.default
  ];
  return e ? t.push(ah.default, oh.default) : t.push(ih.default, sh.default), t.push(uh.default), t;
}
ps.default = $h;
var Ds = {}, js = {};
Object.defineProperty(js, "__esModule", { value: !0 });
const de = Q, Ph = {
  message: ({ schemaCode: e }) => (0, de.str)`must match format "${e}"`,
  params: ({ schemaCode: e }) => (0, de._)`{format: ${e}}`
}, wh = {
  keyword: "format",
  type: ["number", "string"],
  schemaType: "string",
  $data: !0,
  error: Ph,
  code(e, t) {
    const { gen: r, data: n, $data: i, schema: a, schemaCode: s, it: l } = e, { opts: p, errSchemaPath: c, schemaEnv: f, self: h } = l;
    if (!p.validateFormats)
      return;
    i ? b() : j();
    function b() {
      const E = r.scopeValue("formats", {
        ref: h.formats,
        code: p.code.formats
      }), O = r.const("fDef", (0, de._)`${E}[${s}]`), P = r.let("fType"), d = r.let("format");
      r.if((0, de._)`typeof ${O} == "object" && !(${O} instanceof RegExp)`, () => r.assign(P, (0, de._)`${O}.type || "string"`).assign(d, (0, de._)`${O}.validate`), () => r.assign(P, (0, de._)`"string"`).assign(d, O)), e.fail$data((0, de.or)(S(), $()));
      function S() {
        return p.strictSchema === !1 ? de.nil : (0, de._)`${s} && !${d}`;
      }
      function $() {
        const w = f.$async ? (0, de._)`(${O}.async ? await ${d}(${n}) : ${d}(${n}))` : (0, de._)`${d}(${n})`, I = (0, de._)`(typeof ${d} == "function" ? ${w} : ${d}.test(${n}))`;
        return (0, de._)`${d} && ${d} !== true && ${P} === ${t} && !${I}`;
      }
    }
    function j() {
      const E = h.formats[a];
      if (!E) {
        S();
        return;
      }
      if (E === !0)
        return;
      const [O, P, d] = $(E);
      O === t && e.pass(w());
      function S() {
        if (p.strictSchema === !1) {
          h.logger.warn(I());
          return;
        }
        throw new Error(I());
        function I() {
          return `unknown format "${a}" ignored in schema at path "${c}"`;
        }
      }
      function $(I) {
        const m = I instanceof RegExp ? (0, de.regexpCode)(I) : p.code.formats ? (0, de._)`${p.code.formats}${(0, de.getProperty)(a)}` : void 0, _ = r.scopeValue("formats", { key: a, ref: I, code: m });
        return typeof I == "object" && !(I instanceof RegExp) ? [I.type || "string", I.validate, (0, de._)`${_}.validate`] : ["string", I, _];
      }
      function w() {
        if (typeof E == "object" && !(E instanceof RegExp) && E.async) {
          if (!f.$async)
            throw new Error("async format in sync schema");
          return (0, de._)`await ${d}(${n})`;
        }
        return typeof P == "function" ? (0, de._)`${d}(${n})` : (0, de._)`${d}.test(${n})`;
      }
    }
  }
};
js.default = wh;
Object.defineProperty(Ds, "__esModule", { value: !0 });
const bh = js, Eh = [bh.default];
Ds.default = Eh;
var rr = {};
Object.defineProperty(rr, "__esModule", { value: !0 });
rr.contentVocabulary = rr.metadataVocabulary = void 0;
rr.metadataVocabulary = [
  "title",
  "description",
  "default",
  "deprecated",
  "readOnly",
  "writeOnly",
  "examples"
];
rr.contentVocabulary = [
  "contentMediaType",
  "contentEncoding",
  "contentSchema"
];
Object.defineProperty(xa, "__esModule", { value: !0 });
const Sh = es, Oh = rs, Dh = ps, jh = Ds, vo = rr, Th = [
  Sh.default,
  Oh.default,
  (0, Dh.default)(),
  jh.default,
  vo.metadataVocabulary,
  vo.contentVocabulary
];
xa.default = Th;
var Ts = {}, bu = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.DiscrError = void 0, function(t) {
    t.Tag = "tag", t.Mapping = "mapping";
  }(e.DiscrError || (e.DiscrError = {}));
})(bu);
Object.defineProperty(Ts, "__esModule", { value: !0 });
const Jt = Q, Da = bu, go = Ee, Nh = te, Mh = {
  message: ({ params: { discrError: e, tagName: t } }) => e === Da.DiscrError.Tag ? `tag "${t}" must be string` : `value of tag "${t}" must be in oneOf`,
  params: ({ params: { discrError: e, tag: t, tagName: r } }) => (0, Jt._)`{error: ${e}, tag: ${r}, tagValue: ${t}}`
}, Ch = {
  keyword: "discriminator",
  type: "object",
  schemaType: "object",
  error: Mh,
  code(e) {
    const { gen: t, data: r, schema: n, parentSchema: i, it: a } = e, { oneOf: s } = i;
    if (!a.opts.discriminator)
      throw new Error("discriminator: requires discriminator option");
    const l = n.propertyName;
    if (typeof l != "string")
      throw new Error("discriminator: requires propertyName");
    if (n.mapping)
      throw new Error("discriminator: mapping is not supported");
    if (!s)
      throw new Error("discriminator: requires oneOf keyword");
    const p = t.let("valid", !1), c = t.const("tag", (0, Jt._)`${r}${(0, Jt.getProperty)(l)}`);
    t.if((0, Jt._)`typeof ${c} == "string"`, () => f(), () => e.error(!1, { discrError: Da.DiscrError.Tag, tag: c, tagName: l })), e.ok(p);
    function f() {
      const j = b();
      t.if(!1);
      for (const E in j)
        t.elseIf((0, Jt._)`${c} === ${E}`), t.assign(p, h(j[E]));
      t.else(), e.error(!1, { discrError: Da.DiscrError.Mapping, tag: c, tagName: l }), t.endIf();
    }
    function h(j) {
      const E = t.name("valid"), O = e.subschema({ keyword: "oneOf", schemaProp: j }, E);
      return e.mergeEvaluated(O, Jt.Name), E;
    }
    function b() {
      var j;
      const E = {}, O = d(i);
      let P = !0;
      for (let w = 0; w < s.length; w++) {
        let I = s[w];
        I != null && I.$ref && !(0, Nh.schemaHasRulesButRef)(I, a.self.RULES) && (I = go.resolveRef.call(a.self, a.schemaEnv.root, a.baseId, I == null ? void 0 : I.$ref), I instanceof go.SchemaEnv && (I = I.schema));
        const m = (j = I == null ? void 0 : I.properties) === null || j === void 0 ? void 0 : j[l];
        if (typeof m != "object")
          throw new Error(`discriminator: oneOf subschemas (or referenced schemas) must have "properties/${l}"`);
        P = P && (O || d(I)), S(m, w);
      }
      if (!P)
        throw new Error(`discriminator: "${l}" must be required`);
      return E;
      function d({ required: w }) {
        return Array.isArray(w) && w.includes(l);
      }
      function S(w, I) {
        if (w.const)
          $(w.const, I);
        else if (w.enum)
          for (const m of w.enum)
            $(m, I);
        else
          throw new Error(`discriminator: "properties/${l}" must have "const" or "enum"`);
      }
      function $(w, I) {
        if (typeof w != "string" || w in E)
          throw new Error(`discriminator: "${l}" values must be unique strings`);
        E[w] = I;
      }
    }
  }
};
Ts.default = Ch;
const Ih = "http://json-schema.org/draft-07/schema#", Rh = "http://json-schema.org/draft-07/schema#", Ah = "Core schema meta-schema", Uh = {
  schemaArray: {
    type: "array",
    minItems: 1,
    items: {
      $ref: "#"
    }
  },
  nonNegativeInteger: {
    type: "integer",
    minimum: 0
  },
  nonNegativeIntegerDefault0: {
    allOf: [
      {
        $ref: "#/definitions/nonNegativeInteger"
      },
      {
        default: 0
      }
    ]
  },
  simpleTypes: {
    enum: [
      "array",
      "boolean",
      "integer",
      "null",
      "number",
      "object",
      "string"
    ]
  },
  stringArray: {
    type: "array",
    items: {
      type: "string"
    },
    uniqueItems: !0,
    default: []
  }
}, kh = [
  "object",
  "boolean"
], Fh = {
  $id: {
    type: "string",
    format: "uri-reference"
  },
  $schema: {
    type: "string",
    format: "uri"
  },
  $ref: {
    type: "string",
    format: "uri-reference"
  },
  $comment: {
    type: "string"
  },
  title: {
    type: "string"
  },
  description: {
    type: "string"
  },
  default: !0,
  readOnly: {
    type: "boolean",
    default: !1
  },
  examples: {
    type: "array",
    items: !0
  },
  multipleOf: {
    type: "number",
    exclusiveMinimum: 0
  },
  maximum: {
    type: "number"
  },
  exclusiveMaximum: {
    type: "number"
  },
  minimum: {
    type: "number"
  },
  exclusiveMinimum: {
    type: "number"
  },
  maxLength: {
    $ref: "#/definitions/nonNegativeInteger"
  },
  minLength: {
    $ref: "#/definitions/nonNegativeIntegerDefault0"
  },
  pattern: {
    type: "string",
    format: "regex"
  },
  additionalItems: {
    $ref: "#"
  },
  items: {
    anyOf: [
      {
        $ref: "#"
      },
      {
        $ref: "#/definitions/schemaArray"
      }
    ],
    default: !0
  },
  maxItems: {
    $ref: "#/definitions/nonNegativeInteger"
  },
  minItems: {
    $ref: "#/definitions/nonNegativeIntegerDefault0"
  },
  uniqueItems: {
    type: "boolean",
    default: !1
  },
  contains: {
    $ref: "#"
  },
  maxProperties: {
    $ref: "#/definitions/nonNegativeInteger"
  },
  minProperties: {
    $ref: "#/definitions/nonNegativeIntegerDefault0"
  },
  required: {
    $ref: "#/definitions/stringArray"
  },
  additionalProperties: {
    $ref: "#"
  },
  definitions: {
    type: "object",
    additionalProperties: {
      $ref: "#"
    },
    default: {}
  },
  properties: {
    type: "object",
    additionalProperties: {
      $ref: "#"
    },
    default: {}
  },
  patternProperties: {
    type: "object",
    additionalProperties: {
      $ref: "#"
    },
    propertyNames: {
      format: "regex"
    },
    default: {}
  },
  dependencies: {
    type: "object",
    additionalProperties: {
      anyOf: [
        {
          $ref: "#"
        },
        {
          $ref: "#/definitions/stringArray"
        }
      ]
    }
  },
  propertyNames: {
    $ref: "#"
  },
  const: !0,
  enum: {
    type: "array",
    items: !0,
    minItems: 1,
    uniqueItems: !0
  },
  type: {
    anyOf: [
      {
        $ref: "#/definitions/simpleTypes"
      },
      {
        type: "array",
        items: {
          $ref: "#/definitions/simpleTypes"
        },
        minItems: 1,
        uniqueItems: !0
      }
    ]
  },
  format: {
    type: "string"
  },
  contentMediaType: {
    type: "string"
  },
  contentEncoding: {
    type: "string"
  },
  if: {
    $ref: "#"
  },
  then: {
    $ref: "#"
  },
  else: {
    $ref: "#"
  },
  allOf: {
    $ref: "#/definitions/schemaArray"
  },
  anyOf: {
    $ref: "#/definitions/schemaArray"
  },
  oneOf: {
    $ref: "#/definitions/schemaArray"
  },
  not: {
    $ref: "#"
  }
}, Lh = {
  $schema: Ih,
  $id: Rh,
  title: Ah,
  definitions: Uh,
  type: kh,
  properties: Fh,
  default: !0
};
(function(e, t) {
  Object.defineProperty(t, "__esModule", { value: !0 }), t.MissingRefError = t.ValidationError = t.CodeGen = t.Name = t.nil = t.stringify = t.str = t._ = t.KeywordCxt = void 0;
  const r = Ho, n = xa, i = Ts, a = Lh, s = ["/properties"], l = "http://json-schema.org/draft-07/schema";
  class p extends r.default {
    _addVocabularies() {
      super._addVocabularies(), n.default.forEach((E) => this.addVocabulary(E)), this.opts.discriminator && this.addKeyword(i.default);
    }
    _addDefaultMetaSchema() {
      if (super._addDefaultMetaSchema(), !this.opts.meta)
        return;
      const E = this.opts.$data ? this.$dataMetaSchema(a, s) : a;
      this.addMetaSchema(E, l, !1), this.refs["http://json-schema.org/schema"] = l;
    }
    defaultMeta() {
      return this.opts.defaultMeta = super.defaultMeta() || (this.getSchema(l) ? l : void 0);
    }
  }
  e.exports = t = p, Object.defineProperty(t, "__esModule", { value: !0 }), t.default = p;
  var c = Fe;
  Object.defineProperty(t, "KeywordCxt", { enumerable: !0, get: function() {
    return c.KeywordCxt;
  } });
  var f = Q;
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
  var h = en;
  Object.defineProperty(t, "ValidationError", { enumerable: !0, get: function() {
    return h.default;
  } });
  var b = tn;
  Object.defineProperty(t, "MissingRefError", { enumerable: !0, get: function() {
    return b.default;
  } });
})(Pa, Pa.exports);
var Vh = Pa.exports, Eu = {}, qi = {};
Object.defineProperty(qi, "__esModule", { value: !0 });
qi.PluginDefineAttributesSchema = void 0;
qi.PluginDefineAttributesSchema = {
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
};
var zi = {};
Object.defineProperty(zi, "__esModule", { value: !0 });
zi.PluginDefineElementSchema = void 0;
zi.PluginDefineElementSchema = {
  $id: "WardPluginDefineElementSchema",
  title: "Ward Plugin Define Element",
  description: "Plugin Define Element",
  type: "object"
};
var Ki = {};
Object.defineProperty(Ki, "__esModule", { value: !0 });
Ki.PluginDefineElementsSchema = void 0;
Ki.PluginDefineElementsSchema = {
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
};
var Bi = {};
Object.defineProperty(Bi, "__esModule", { value: !0 });
Bi.PluginDefinePropertiesSchema = void 0;
Bi.PluginDefinePropertiesSchema = {
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
};
var Ji = {};
Object.defineProperty(Ji, "__esModule", { value: !0 });
Ji.PluginDefineSchema = void 0;
Ji.PluginDefineSchema = {
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
};
var Qi = {};
Object.defineProperty(Qi, "__esModule", { value: !0 });
Qi.PluginDefinesSchema = void 0;
Qi.PluginDefinesSchema = {
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
};
var Yi = {};
Object.defineProperty(Yi, "__esModule", { value: !0 });
Yi.PluginProvideAttributesSchema = void 0;
Yi.PluginProvideAttributesSchema = {
  $id: "WardPluginProvideAttributesSchema",
  title: "Ward Plugin Provide Attributes",
  description: "Plugin Provide Attributes",
  type: "object",
  patternProperties: {
    "^.*$": {
      description: "Attribute value",
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
};
var Xi = {};
Object.defineProperty(Xi, "__esModule", { value: !0 });
Xi.PluginProvideElementSchema = void 0;
Xi.PluginProvideElementSchema = {
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
};
var Zi = {};
Object.defineProperty(Zi, "__esModule", { value: !0 });
Zi.PluginProvideElementsSchema = void 0;
Zi.PluginProvideElementsSchema = {
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
};
var xi = {};
Object.defineProperty(xi, "__esModule", { value: !0 });
xi.PluginProvidePropertiesSchema = void 0;
xi.PluginProvidePropertiesSchema = {
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
};
var ea = {};
Object.defineProperty(ea, "__esModule", { value: !0 });
ea.PluginProvideSchema = void 0;
ea.PluginProvideSchema = {
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
};
var ta = {};
Object.defineProperty(ta, "__esModule", { value: !0 });
ta.PluginProvidesSchema = void 0;
ta.PluginProvidesSchema = {
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
};
var Su = {};
(function(e) {
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
})(Su);
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.PluginSchema = e.PluginProvidesSchema = e.PluginProvideSchema = e.PluginProvidePropertiesSchema = e.PluginProvideElementsSchema = e.PluginProvideElementSchema = e.PluginProvideAttributesSchema = e.PluginDefinesSchema = e.PluginDefineSchema = e.PluginDefinePropertiesSchema = e.PluginDefineElementsSchema = e.PluginDefineElementSchema = e.PluginDefineAttributesSchema = void 0;
  var t = qi;
  Object.defineProperty(e, "PluginDefineAttributesSchema", { enumerable: !0, get: function() {
    return t.PluginDefineAttributesSchema;
  } });
  var r = zi;
  Object.defineProperty(e, "PluginDefineElementSchema", { enumerable: !0, get: function() {
    return r.PluginDefineElementSchema;
  } });
  var n = Ki;
  Object.defineProperty(e, "PluginDefineElementsSchema", { enumerable: !0, get: function() {
    return n.PluginDefineElementsSchema;
  } });
  var i = Bi;
  Object.defineProperty(e, "PluginDefinePropertiesSchema", { enumerable: !0, get: function() {
    return i.PluginDefinePropertiesSchema;
  } });
  var a = Ji;
  Object.defineProperty(e, "PluginDefineSchema", { enumerable: !0, get: function() {
    return a.PluginDefineSchema;
  } });
  var s = Qi;
  Object.defineProperty(e, "PluginDefinesSchema", { enumerable: !0, get: function() {
    return s.PluginDefinesSchema;
  } });
  var l = Yi;
  Object.defineProperty(e, "PluginProvideAttributesSchema", { enumerable: !0, get: function() {
    return l.PluginProvideAttributesSchema;
  } });
  var p = Xi;
  Object.defineProperty(e, "PluginProvideElementSchema", { enumerable: !0, get: function() {
    return p.PluginProvideElementSchema;
  } });
  var c = Zi;
  Object.defineProperty(e, "PluginProvideElementsSchema", { enumerable: !0, get: function() {
    return c.PluginProvideElementsSchema;
  } });
  var f = xi;
  Object.defineProperty(e, "PluginProvidePropertiesSchema", { enumerable: !0, get: function() {
    return f.PluginProvidePropertiesSchema;
  } });
  var h = ea;
  Object.defineProperty(e, "PluginProvideSchema", { enumerable: !0, get: function() {
    return h.PluginProvideSchema;
  } });
  var b = ta;
  Object.defineProperty(e, "PluginProvidesSchema", { enumerable: !0, get: function() {
    return b.PluginProvidesSchema;
  } });
  var j = Su;
  Object.defineProperty(e, "PluginSchema", { enumerable: !0, get: function() {
    return j.PluginSchema;
  } });
})(Eu);
var Wh = A && A.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(er, "__esModule", { value: !0 });
er.getValidator = er.validate = void 0;
const Gh = Wh(Vh), De = Eu, Ou = new Gh.default({
  allowUnionTypes: !0,
  schemas: [
    De.PluginDefineAttributesSchema,
    De.PluginDefineElementSchema,
    De.PluginDefineElementsSchema,
    De.PluginDefinePropertiesSchema,
    De.PluginDefineSchema,
    De.PluginDefinesSchema,
    De.PluginProvideAttributesSchema,
    De.PluginProvideElementSchema,
    De.PluginProvideElementsSchema,
    De.PluginProvidePropertiesSchema,
    De.PluginProvideSchema,
    De.PluginProvidesSchema,
    De.PluginSchema
  ]
});
er.validate = Ou.getSchema("WardPluginSchema");
const Hh = () => Ou.getSchema("WardPluginSchema");
er.getValidator = Hh;
(function(e) {
  var t = A && A.__awaiter || function(f, h, b, j) {
    function E(O) {
      return O instanceof b ? O : new b(function(P) {
        P(O);
      });
    }
    return new (b || (b = Promise))(function(O, P) {
      function d(w) {
        try {
          $(j.next(w));
        } catch (I) {
          P(I);
        }
      }
      function S(w) {
        try {
          $(j.throw(w));
        } catch (I) {
          P(I);
        }
      }
      function $(w) {
        w.done ? O(w.value) : E(w.value).then(d, S);
      }
      $((j = j.apply(f, h || [])).next());
    });
  }, r = A && A.__classPrivateFieldGet || function(f, h, b, j) {
    if (b === "a" && !j)
      throw new TypeError("Private accessor was defined without a getter");
    if (typeof h == "function" ? f !== h || !j : !h.has(f))
      throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return b === "m" ? j : b === "a" ? j.call(f) : j ? j.value : h.get(f);
  }, n = A && A.__classPrivateFieldSet || function(f, h, b, j, E) {
    if (j === "m")
      throw new TypeError("Private method is not writable");
    if (j === "a" && !E)
      throw new TypeError("Private accessor was defined without a setter");
    if (typeof h == "function" ? f !== h || !E : !h.has(f))
      throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return j === "a" ? E.call(f, b) : E ? E.value = b : h.set(f, b), b;
  }, i, a, s, l;
  Object.defineProperty(e, "__esModule", { value: !0 }), e.PluginLoadStates = void 0;
  const p = er;
  e.PluginLoadStates = {
    NONE: "NONE",
    LOAD_ERROR: "LOAD_ERROR",
    VALIDATION_ERROR: "VALIDATION_ERROR",
    LOADED: "LOADED"
  };
  class c {
    constructor() {
      i.add(this), a.set(this, {});
    }
    get urls() {
      return Object.keys(r(this, a, "f"));
    }
    reset() {
      n(this, a, {}, "f");
    }
    hasData(h) {
      var b;
      return !!(!((b = r(this, a, "f")[h]) === null || b === void 0) && b.data);
    }
    isLoaded(h) {
      var b;
      return ((b = r(this, a, "f")[h]) === null || b === void 0 ? void 0 : b.state) === e.PluginLoadStates.LOADED;
    }
    getData(h) {
      var b;
      return (b = r(this, a, "f")[h]) === null || b === void 0 ? void 0 : b.data;
    }
    getErrors(h) {
      var b;
      return ((b = r(this, a, "f")[h]) === null || b === void 0 ? void 0 : b.errors) || [];
    }
    getState(h) {
      var b;
      return ((b = r(this, a, "f")[h]) === null || b === void 0 ? void 0 : b.state) || e.PluginLoadStates.NONE;
    }
    load(h) {
      return t(this, void 0, void 0, function* () {
        r(this, a, "f")[h] = {
          url: h,
          state: "NONE",
          errors: [],
          loadDate: (/* @__PURE__ */ new Date()).getTime()
        };
        let b;
        try {
          b = yield r(this, i, "m", s).call(this, h);
        } catch (P) {
          return r(this, a, "f")[h].state = e.PluginLoadStates.LOAD_ERROR, r(this, a, "f")[h].errors.push(String(P)), !1;
        }
        let j;
        try {
          j = yield r(this, i, "m", l).call(this, b), r(this, a, "f")[h].data = j;
        } catch (P) {
          return r(this, a, "f")[h].state = e.PluginLoadStates.LOAD_ERROR, r(this, a, "f")[h].errors.push(String(P)), !1;
        }
        const E = (0, p.getValidator)();
        return E(j) ? (r(this, a, "f")[h].state = e.PluginLoadStates.LOADED, !0) : (r(this, a, "f")[h].state = e.PluginLoadStates.VALIDATION_ERROR, E.errors && r(this, a, "f")[h].errors.push(...E.errors.map((P) => JSON.stringify(P, null, 2))), !1);
      });
    }
  }
  a = /* @__PURE__ */ new WeakMap(), i = /* @__PURE__ */ new WeakSet(), s = function(h) {
    return t(this, void 0, void 0, function* () {
      return yield fetch(h, {
        method: "GET",
        headers: new Headers()
      });
    });
  }, l = function(h) {
    return t(this, void 0, void 0, function* () {
      return yield h.json();
    });
  }, e.default = c;
})(Go);
var qh = A && A.__createBinding || (Object.create ? function(e, t, r, n) {
  n === void 0 && (n = r);
  var i = Object.getOwnPropertyDescriptor(t, r);
  (!i || ("get" in i ? !t.__esModule : i.writable || i.configurable)) && (i = { enumerable: !0, get: function() {
    return t[r];
  } }), Object.defineProperty(e, n, i);
} : function(e, t, r, n) {
  n === void 0 && (n = r), e[n] = t[r];
}), zh = A && A.__setModuleDefault || (Object.create ? function(e, t) {
  Object.defineProperty(e, "default", { enumerable: !0, value: t });
} : function(e, t) {
  e.default = t;
}), Kh = A && A.__importStar || function(e) {
  if (e && e.__esModule)
    return e;
  var t = {};
  if (e != null)
    for (var r in e)
      r !== "default" && Object.prototype.hasOwnProperty.call(e, r) && qh(t, e, r);
  return zh(t, e), t;
}, hi = A && A.__awaiter || function(e, t, r, n) {
  function i(a) {
    return a instanceof r ? a : new r(function(s) {
      s(a);
    });
  }
  return new (r || (r = Promise))(function(a, s) {
    function l(f) {
      try {
        c(n.next(f));
      } catch (h) {
        s(h);
      }
    }
    function p(f) {
      try {
        c(n.throw(f));
      } catch (h) {
        s(h);
      }
    }
    function c(f) {
      f.done ? a(f.value) : i(f.value).then(l, p);
    }
    c((n = n.apply(e, t || [])).next());
  });
}, Ce = A && A.__classPrivateFieldSet || function(e, t, r, n, i) {
  if (n === "m")
    throw new TypeError("Private method is not writable");
  if (n === "a" && !i)
    throw new TypeError("Private accessor was defined without a setter");
  if (typeof t == "function" ? e !== t || !i : !t.has(e))
    throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return n === "a" ? i.call(e, r) : i ? i.value = r : t.set(e, r), r;
}, B = A && A.__classPrivateFieldGet || function(e, t, r, n) {
  if (r === "a" && !n)
    throw new TypeError("Private accessor was defined without a getter");
  if (typeof t == "function" ? e !== t || !n : !t.has(e))
    throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return r === "m" ? n : r === "a" ? n.call(e) : n ? n.value : t.get(e);
}, Ns = A && A.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
}, Xe, ye, Qt, pi, Yt, ze, Ot, Ze, Du, ju, yo, $o;
Object.defineProperty(Ca, "__esModule", { value: !0 });
const Po = Kh(ir), Bh = Ns(Ia), Jh = Ns(Ga), Qh = nr, Yh = Ns(Go), ot = new Po.default("PluginManager", Po.LogLevels.WARN);
class Xh {
  constructor(t) {
    Xe.add(this), ye.set(this, void 0), Qt.set(this, -1), pi.set(this, void 0), Yt.set(this, []), ze.set(this, {}), Ot.set(this, {}), Ze.set(this, {}), Ce(this, ye, t || new Yh.default(), "f");
  }
  get retryDelay() {
    return B(this, Qt, "f");
  }
  set retryDelay(t) {
    Ce(this, Qt, t, "f");
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
    return B(this, ye, "f").urls.reduce((t, r) => (t[r] = {
      state: this.getState(r),
      errors: this.getErrors(r),
      data: this.getData(r)
    }, t), {});
  }
  getData(t) {
    return B(this, ye, "f").getData(t);
  }
  getState(t) {
    return B(this, ye, "f").getState(t);
  }
  getErrors(t) {
    return B(this, ye, "f").getErrors(t);
  }
  get roots() {
    const t = [];
    return Object.values(B(this, ze, "f")).forEach((r) => {
      r.dependencies.forEach((n) => {
        t.includes(n) || t.push(n);
      });
    }), Object.values(B(this, ze, "f")).reduce((r, n) => (t.includes(n.loadUrl) || (r[n.name] = n), r), {});
  }
  get plugins() {
    return B(this, ze, "f");
  }
  getPlugin(t) {
    return this.plugins[t];
  }
  getPluginByUrl(t) {
    const r = this.getData(t);
    if (r)
      return this.plugins[r.name];
  }
  get definitions() {
    return B(this, Ot, "f");
  }
  getDefinition(t) {
    return this.definitions[t];
  }
  get providers() {
    return B(this, Ze, "f");
  }
  getProviders(t) {
    return Object.values(B(this, Ze, "f")).filter((r) => r.definition === t);
  }
  getProvider(t) {
    return B(this, Ze, "f")[t];
  }
  register(t) {
    return B(this, Yt, "f").push(t), () => this.unregister(t);
  }
  unregister(t) {
    Ce(this, Yt, Qh.ArrayUtils.removeElement(B(this, Yt, "f"), t), "f");
  }
  notify() {
    B(this, Yt, "f").forEach((t) => {
      t(this.data);
    });
  }
  reset() {
    B(this, ye, "f").reset(), Ce(this, ze, {}, "f"), Ce(this, Ot, {}, "f"), Ce(this, Ze, {}, "f"), this.notify();
  }
  loadPlugin(t) {
    return hi(this, void 0, void 0, function* () {
      clearInterval(B(this, pi, "f"));
      try {
        yield B(this, Xe, "m", Du).call(this, t), B(this, Xe, "m", ju).call(this);
      } catch (r) {
        ot.error(String(r));
      }
      B(this, Qt, "f") > 0 && Ce(this, pi, setInterval(() => {
        this.reloadPlugins();
      }, B(this, Qt, "f")), "f"), this.notify();
    });
  }
  reloadPlugins() {
    return hi(this, void 0, void 0, function* () {
      const t = Object.values(this.roots).map((r) => r.loadUrl);
      Ce(this, ze, {}, "f"), Ce(this, Ot, {}, "f"), Ce(this, Ze, {}, "f"), t.forEach((r) => hi(this, void 0, void 0, function* () {
        yield this.loadPlugin(r);
      }));
    });
  }
}
ye = /* @__PURE__ */ new WeakMap(), Qt = /* @__PURE__ */ new WeakMap(), pi = /* @__PURE__ */ new WeakMap(), Yt = /* @__PURE__ */ new WeakMap(), ze = /* @__PURE__ */ new WeakMap(), Ot = /* @__PURE__ */ new WeakMap(), Ze = /* @__PURE__ */ new WeakMap(), Xe = /* @__PURE__ */ new WeakSet(), Du = function e(t, r) {
  return hi(this, void 0, void 0, function* () {
    if (B(this, ye, "f").hasData(t))
      return ot.warn(`URL already loaded: '${t}'`), !0;
    if (!(yield B(this, ye, "f").load(t)))
      return ot.warn(`Failed to load plugin from: '${t}'`), ot.warn(B(this, ye, "f").getErrors(t).join(`
`)), !1;
    const i = B(this, ye, "f").getData(t);
    if (B(this, ze, "f")[i.name]) {
      const s = B(this, ze, "f")[i.name].loadUrl;
      return ot.warn(`Plugin '${i.name}' from '${i.url}' already registered from '${s}'`), !1;
    }
    const a = new Bh.default(t, i);
    return B(this, ze, "f")[i.name] = a, yield Promise.allSettled((i.dependencies || []).map((s) => B(this, Xe, "m", e).call(this, s, i.name))), ot.warn(`Succesully loaded plugin from '${t}'`), !0;
  });
}, ju = function() {
  Ce(this, Ot, {}, "f"), Ce(this, Ze, {}, "f"), Object.values(this.roots).forEach((t) => B(this, Xe, "m", yo).call(this, t)), Object.values(this.roots).forEach((t) => B(this, Xe, "m", $o).call(this, t));
}, yo = function e(t) {
  t.defines.forEach((r) => {
    this.getDefinition(r.name) ? ot.warn(`Defines '${r.name}' from '${t.name}' is already registered from ${this.getDefinition(r.name).plugin}`) : B(this, Ot, "f")[r.name] = r;
  }), t.dependencies.forEach((r) => {
    if (B(this, ye, "f").isLoaded(r)) {
      const n = B(this, ye, "f").getData(r), i = this.getPlugin(n.name);
      B(this, Xe, "m", e).call(this, i);
    }
  });
}, $o = function e(t) {
  t.provides.forEach((r) => {
    const n = this.getDefinition(r.define);
    if (!n)
      ot.warn(`Provides '${r.name}' from '${t.name}' has no definition '${r.define}'`);
    else {
      const i = new Jh.default(t.url, n, r);
      B(this, Ze, "f")[i.name] = i;
    }
  }), t.dependencies.forEach((r) => {
    if (B(this, ye, "f").isLoaded(r)) {
      const n = B(this, ye, "f").getData(r), i = this.getPlugin(n.name);
      B(this, Xe, "m", e).call(this, i);
    }
  });
};
Ca.default = Xh;
var ha = {}, _n = {}, nn = {};
Object.defineProperty(nn, "__esModule", { value: !0 });
nn.MessageServiceTypes = void 0;
nn.MessageServiceTypes = {
  EVENT: "event",
  FRAME: "frame",
  NAVIGATION: "navigation"
};
var wo;
function Zh() {
  if (wo)
    return _n;
  wo = 1;
  var e = A && A.__createBinding || (Object.create ? function($, w, I, m) {
    m === void 0 && (m = I);
    var _ = Object.getOwnPropertyDescriptor(w, I);
    (!_ || ("get" in _ ? !w.__esModule : _.writable || _.configurable)) && (_ = { enumerable: !0, get: function() {
      return w[I];
    } }), Object.defineProperty($, m, _);
  } : function($, w, I, m) {
    m === void 0 && (m = I), $[m] = w[I];
  }), t = A && A.__setModuleDefault || (Object.create ? function($, w) {
    Object.defineProperty($, "default", { enumerable: !0, value: w });
  } : function($, w) {
    $.default = w;
  }), r = A && A.__importStar || function($) {
    if ($ && $.__esModule)
      return $;
    var w = {};
    if ($ != null)
      for (var I in $)
        I !== "default" && Object.prototype.hasOwnProperty.call($, I) && e(w, $, I);
    return t(w, $), w;
  }, n = A && A.__classPrivateFieldSet || function($, w, I, m, _) {
    if (m === "m")
      throw new TypeError("Private method is not writable");
    if (m === "a" && !_)
      throw new TypeError("Private accessor was defined without a setter");
    if (typeof w == "function" ? $ !== w || !_ : !w.has($))
      throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return m === "a" ? _.call($, I) : _ ? _.value = I : w.set($, I), I;
  }, i = A && A.__classPrivateFieldGet || function($, w, I, m) {
    if (I === "a" && !m)
      throw new TypeError("Private accessor was defined without a getter");
    if (typeof w == "function" ? $ !== w || !m : !w.has($))
      throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return I === "m" ? m : I === "a" ? m.call($) : m ? m.value : w.get($);
  }, a, s, l, p, c, f, h, b;
  Object.defineProperty(_n, "__esModule", { value: !0 });
  const j = nr, E = r(ir), O = nn, P = Tu(), d = new E.default("FrameService", E.LogLevels.DEBUG);
  let S = class {
    constructor(w, I, m, _, C) {
      a.add(this), s.set(this, void 0), l.set(this, void 0), p.set(this, void 0), c.set(this, void 0), f.set(this, void 0), n(this, l, w, "f"), n(this, s, C || j.UUID.next(), "f"), n(this, c, I, "f"), n(this, f, m, "f"), n(this, p, _, "f"), d.info(`[DISP-${this.dispatcherId}/FRAME-${this.id}] created`), window.addEventListener("message", i(this, a, "m", b).bind(this)), window.addEventListener("beforeUnload", i(this, a, "m", h).bind(this));
    }
    get id() {
      return i(this, s, "f");
    }
    get dispatcherId() {
      return i(this, l, "f").id;
    }
    get window() {
      return i(this, c, "f");
    }
    get type() {
      return O.MessageServiceTypes.FRAME;
    }
    onMessage(w) {
      d.info(`[DISP-${this.dispatcherId}/FRAME-${this.id}] onMessage ${w.type}`), i(this, c, "f").closed ? (d.info(`[DISP-${this.dispatcherId}/FRAME-${this.id}] onMessage /!\\ window closed /!\\`), this.terminate()) : (d.debug(`[DISP-${this.dispatcherId}/FRAME-${this.id}] onMessage posting message to ${i(this, f, "f")}`), i(this, c, "f").postMessage(Object.assign(Object.assign({}, w), { _serviceId: i(this, s, "f") }), i(this, f, "f")));
    }
    sendMessage(w) {
      d.debug(`[DISP-${this.dispatcherId}/FRAME-${this.id}] sendMessage ${w.type}`), i(this, l, "f").sendMessage(Object.assign(Object.assign({}, w), { _serviceId: this.id }));
    }
    terminate() {
      d.info(`[DISP-${this.dispatcherId}/FRAME-${this.id}] terminate`), i(this, l, "f").removeService(this);
    }
  };
  return s = /* @__PURE__ */ new WeakMap(), l = /* @__PURE__ */ new WeakMap(), p = /* @__PURE__ */ new WeakMap(), c = /* @__PURE__ */ new WeakMap(), f = /* @__PURE__ */ new WeakMap(), a = /* @__PURE__ */ new WeakSet(), h = function() {
    this.onMessage({
      type: P.CONNECTION_CLOSING,
      _dispatcherId: this.dispatcherId,
      payload: {}
    }), this.terminate();
  }, b = function(w) {
    const I = w.data || {};
    d.debug(`[DISP-${this.dispatcherId}/FRAME-${this.id}] handleMessage `), I._serviceId && I._dispatcherId && I._dispatcherId === i(this, p, "f") && (d.debug(`[DISP-${this.dispatcherId}/FRAME-${this.id}] handleMessage ${w.data.type}`), I.type === P.CONNECTION_CLOSING ? this.terminate() : this.sendMessage({
      _serviceId: i(this, s, "f"),
      type: I.type,
      payload: I.payload
    }));
  }, _n.default = S, _n;
}
var bo;
function Tu() {
  return bo || (bo = 1, function(e) {
    var t = A && A.__createBinding || (Object.create ? function(m, _, C, L) {
      L === void 0 && (L = C);
      var q = Object.getOwnPropertyDescriptor(_, C);
      (!q || ("get" in q ? !_.__esModule : q.writable || q.configurable)) && (q = { enumerable: !0, get: function() {
        return _[C];
      } }), Object.defineProperty(m, L, q);
    } : function(m, _, C, L) {
      L === void 0 && (L = C), m[L] = _[C];
    }), r = A && A.__setModuleDefault || (Object.create ? function(m, _) {
      Object.defineProperty(m, "default", { enumerable: !0, value: _ });
    } : function(m, _) {
      m.default = _;
    }), n = A && A.__importStar || function(m) {
      if (m && m.__esModule)
        return m;
      var _ = {};
      if (m != null)
        for (var C in m)
          C !== "default" && Object.prototype.hasOwnProperty.call(m, C) && t(_, m, C);
      return r(_, m), _;
    }, i = A && A.__classPrivateFieldSet || function(m, _, C, L, q) {
      if (L === "m")
        throw new TypeError("Private method is not writable");
      if (L === "a" && !q)
        throw new TypeError("Private accessor was defined without a setter");
      if (typeof _ == "function" ? m !== _ || !q : !_.has(m))
        throw new TypeError("Cannot write private member to an object whose class did not declare it");
      return L === "a" ? q.call(m, C) : q ? q.value = C : _.set(m, C), C;
    }, a = A && A.__classPrivateFieldGet || function(m, _, C, L) {
      if (C === "a" && !L)
        throw new TypeError("Private accessor was defined without a getter");
      if (typeof _ == "function" ? m !== _ || !L : !_.has(m))
        throw new TypeError("Cannot read private member from an object whose class did not declare it");
      return C === "m" ? L : C === "a" ? L.call(m) : L ? L.value : _.get(m);
    }, s = A && A.__importDefault || function(m) {
      return m && m.__esModule ? m : { default: m };
    }, l, p, c, f, h, b, j, E, O, P;
    Object.defineProperty(e, "__esModule", { value: !0 }), e.CONNECTION_CLOSING = e.CONNECTION_ACKNOWLEDGE = e.CONNECTION_REQUEST = void 0;
    const d = nr, S = n(ir), $ = s(Zh());
    e.CONNECTION_REQUEST = "__CONNNECTION_REQUEST__", e.CONNECTION_ACKNOWLEDGE = "__CONNECTION_ACKNOWLEDGE__", e.CONNECTION_CLOSING = "__CONNNECTION_CLOSING__";
    const w = new S.default("MessageDispatcher", S.LogLevels.DEBUG);
    class I {
      constructor(_) {
        l.add(this), p.set(this, void 0), c.set(this, []), f.set(this, []), h.set(this, []), b.set(this, void 0), i(this, p, _ || d.UUID.next(), "f"), w.info(`[DISP-${this.id}] created`), i(this, b, a(this, l, "m", j).bind(this), "f"), window.addEventListener("message", a(this, b, "f")), window !== window.parent && (w.info(`[DISP-${this.id}] contact parent`), window.parent.postMessage({
          _dispatcherId: a(this, p, "f"),
          type: e.CONNECTION_REQUEST
        }, "*"));
      }
      get data() {
        return {
          services: this.services,
          dispatchers: this.dispatchers
        };
      }
      get id() {
        return a(this, p, "f");
      }
      get services() {
        return a(this, c, "f").reduce((_, C) => (_[C.id] = C, _), {});
      }
      get dispatchers() {
        return a(this, f, "f").slice();
      }
      register(_) {
        return a(this, h, "f").push(_), () => this.unregister(_);
      }
      unregister(_) {
        i(this, h, d.ArrayUtils.removeElement(a(this, h, "f"), _), "f");
      }
      notify() {
        a(this, h, "f").forEach((_) => {
          _(this.data);
        });
      }
      terminate() {
        w.info(`[DISP-${this.id}] stopping`), window.removeEventListener("message", a(this, b, "f")), window !== window.parent && (w.info(`[DISP-${this.id}] notifying parent`), window.parent.postMessage({
          _dispatcherId: a(this, p, "f"),
          type: e.CONNECTION_CLOSING
        }, "*"));
      }
      reset() {
        i(this, c, [], "f"), i(this, f, [], "f"), this.notify();
      }
      getService(_) {
        return a(this, c, "f").find((C) => C.id === _);
      }
      addService(_) {
        return w.info(`[DISP-${this.id}] add service [${_.id}]`), a(this, c, "f").includes(_) || a(this, c, "f").push(_), this.notify(), () => this.removeService(_);
      }
      removeService(_) {
        w.info(`[DISP-${this.id}] remove service [${_.id}]`), i(this, c, a(this, c, "f").filter((C) => C !== _), "f"), this.notify();
      }
      sendMessage(_) {
        w.info(`[DISP-${this.id}] send message to ${a(this, c, "f").length - 1} services from [${a(this, p, "f")}-${_._serviceId}]`), a(this, c, "f").forEach((C) => {
          C.id !== _._serviceId && (w.info(`[DISP-${this.id}] send message on service [${C.id}]`), C.onMessage(Object.assign({ _dispatcherId: a(this, p, "f") }, _)));
        });
      }
    }
    p = /* @__PURE__ */ new WeakMap(), c = /* @__PURE__ */ new WeakMap(), f = /* @__PURE__ */ new WeakMap(), h = /* @__PURE__ */ new WeakMap(), b = /* @__PURE__ */ new WeakMap(), l = /* @__PURE__ */ new WeakSet(), j = function(_) {
      var C;
      if (!((C = _.data) === null || C === void 0) && C._dispatcherId)
        switch (_.data.type) {
          case e.CONNECTION_REQUEST: {
            a(this, l, "m", E).call(this, _);
            break;
          }
          case e.CONNECTION_ACKNOWLEDGE: {
            a(this, l, "m", O).call(this, _);
            break;
          }
          case e.CONNECTION_CLOSING: {
            a(this, l, "m", P).call(this, _);
            break;
          }
        }
    }, E = function(_) {
      const C = _.data._dispatcherId;
      w.info(`[DISP-${this.id}] child trying to connect [${C}]`), w.info(`[DISP-${this.id}] current childs: ${this.dispatchers.join(", ")}`);
      const L = _.source, q = _.origin;
      if (!a(this, f, "f").includes(C)) {
        const re = new $.default(this, L, q, C);
        a(this, f, "f").push(C), this.addService(re), re.onMessage({
          _dispatcherId: a(this, p, "f"),
          _serviceId: re.id,
          type: e.CONNECTION_ACKNOWLEDGE,
          payload: null
        });
      }
    }, O = function(_) {
      w.info(`[DISP-${this.id}] parent acknowledge connection`);
      const C = new $.default(this, window.parent, _.origin, _.data._dispatcherId, _.data._serviceId);
      this.addService(C);
    }, P = function(_) {
      w.info(`[DISP-${this.id}] child notify closing`);
    }, e.default = I;
  }(ha)), ha;
}
var Kr = {}, xh = A && A.__createBinding || (Object.create ? function(e, t, r, n) {
  n === void 0 && (n = r);
  var i = Object.getOwnPropertyDescriptor(t, r);
  (!i || ("get" in i ? !t.__esModule : i.writable || i.configurable)) && (i = { enumerable: !0, get: function() {
    return t[r];
  } }), Object.defineProperty(e, n, i);
} : function(e, t, r, n) {
  n === void 0 && (n = r), e[n] = t[r];
}), ep = A && A.__setModuleDefault || (Object.create ? function(e, t) {
  Object.defineProperty(e, "default", { enumerable: !0, value: t });
} : function(e, t) {
  e.default = t;
}), tp = A && A.__importStar || function(e) {
  if (e && e.__esModule)
    return e;
  var t = {};
  if (e != null)
    for (var r in e)
      r !== "default" && Object.prototype.hasOwnProperty.call(e, r) && xh(t, e, r);
  return ep(t, e), t;
}, pa = A && A.__classPrivateFieldSet || function(e, t, r, n, i) {
  if (n === "m")
    throw new TypeError("Private method is not writable");
  if (n === "a" && !i)
    throw new TypeError("Private accessor was defined without a setter");
  if (typeof t == "function" ? e !== t || !i : !t.has(e))
    throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return n === "a" ? i.call(e, r) : i ? i.value = r : t.set(e, r), r;
}, st = A && A.__classPrivateFieldGet || function(e, t, r, n) {
  if (r === "a" && !n)
    throw new TypeError("Private accessor was defined without a getter");
  if (typeof t == "function" ? e !== t || !n : !t.has(e))
    throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return r === "m" ? n : r === "a" ? n.call(e) : n ? n.value : t.get(e);
}, mi, wt, Xt;
Object.defineProperty(Kr, "__esModule", { value: !0 });
Kr.ServiceEvent = void 0;
const Eo = nr, So = tp(ir), rp = nn, zt = new So.default("EventService", So.LogLevels.DEBUG);
class np {
  constructor(t, r) {
    mi.set(this, void 0), wt.set(this, void 0), Xt.set(this, []), pa(this, mi, r || Eo.UUID.next(), "f"), pa(this, wt, t, "f"), st(this, wt, "f").addService(this), zt.info(`[DISP-${this.dispatcherId}/EVENT-${this.id}] created`);
  }
  get id() {
    return st(this, mi, "f");
  }
  get dispatcherId() {
    return st(this, wt, "f").id;
  }
  get type() {
    return rp.MessageServiceTypes.EVENT;
  }
  terminate() {
    zt.info(`[DISP-${this.dispatcherId}/EVENT-${this.id}] terminate`), st(this, wt, "f").removeService(this);
  }
  addHandler(t) {
    return zt.debug(`[DISP-${this.dispatcherId}/EVENT-${this.id}] add handler`), st(this, Xt, "f").push(t), this.removeHandler.bind(this, t);
  }
  removeHandler(t) {
    zt.debug(`[DISP-${this.dispatcherId}/EVENT-${this.id}] add handler`), pa(this, Xt, Eo.ArrayUtils.removeElement(st(this, Xt, "f"), t), "f");
  }
  onMessage(t) {
    zt.debug(`[DISP-${this.dispatcherId}/EVENT-${this.id}] onMessage`), st(this, Xt, "f").forEach((r) => r(t));
  }
  sendMessage(t) {
    zt.info(`[DISP-${this.dispatcherId}/EVENT-${this.id}] sendMessage`), st(this, wt, "f").sendMessage(Object.assign(Object.assign({}, t), { _serviceId: this.id }));
  }
}
Kr.ServiceEvent = np;
mi = /* @__PURE__ */ new WeakMap(), wt = /* @__PURE__ */ new WeakMap(), Xt = /* @__PURE__ */ new WeakMap();
(function(e) {
  var t = A && A.__classPrivateFieldSet || function(P, d, S, $, w) {
    if ($ === "m")
      throw new TypeError("Private method is not writable");
    if ($ === "a" && !w)
      throw new TypeError("Private accessor was defined without a setter");
    if (typeof d == "function" ? P !== d || !w : !d.has(P))
      throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return $ === "a" ? w.call(P, S) : w ? w.value = S : d.set(P, S), S;
  }, r = A && A.__classPrivateFieldGet || function(P, d, S, $) {
    if (S === "a" && !$)
      throw new TypeError("Private accessor was defined without a getter");
    if (typeof d == "function" ? P !== d || !$ : !d.has(P))
      throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return S === "m" ? $ : S === "a" ? $.call(P) : $ ? $.value : d.get(P);
  }, n = A && A.__importDefault || function(P) {
    return P && P.__esModule ? P : { default: P };
  }, i, a, s, l, p;
  Object.defineProperty(e, "__esModule", { value: !0 }), e.ServiceEvent = void 0;
  const c = nr, f = n(Ca), h = n(Tu()), b = Kr;
  var j = Kr;
  Object.defineProperty(e, "ServiceEvent", { enumerable: !0, get: function() {
    return j.ServiceEvent;
  } });
  class E {
    constructor(d, S, $) {
      a.set(this, void 0), s.set(this, void 0), l.set(this, void 0), p.set(this, []), t(this, a, d || c.UUID.next(), "f"), t(this, s, S || new f.default(), "f"), t(this, l, $ || new h.default(), "f"), r(this, s, "f").register(this.notify.bind(this)), r(this, l, "f").register(this.notify.bind(this));
    }
    get id() {
      return r(this, a, "f");
    }
    get data() {
      return Object.assign(Object.assign({}, r(this, l, "f").data), r(this, s, "f").data);
    }
    register(d) {
      return r(this, p, "f").push(d), () => this.unregister(d);
    }
    unregister(d) {
      t(this, p, c.ArrayUtils.removeElement(r(this, p, "f"), d), "f");
    }
    notify() {
      r(this, p, "f").forEach((d) => {
        d(this.data);
      });
    }
    reset() {
      r(this, s, "f").reset(), r(this, l, "f").reset();
    }
    loadPlugin(d) {
      r(this, s, "f").loadPlugin(d);
    }
    addService(d) {
      return new b.ServiceEvent(r(this, l, "f"), d);
    }
  }
  a = /* @__PURE__ */ new WeakMap(), s = /* @__PURE__ */ new WeakMap(), l = /* @__PURE__ */ new WeakMap(), p = /* @__PURE__ */ new WeakMap();
  let O;
  !((i = window.uncover) === null || i === void 0) && i.ward ? O = window.uncover.ward : (O = new E(), window.uncover = window.uncover || {}, window.uncover.ward = O), e.default = O;
})(ko);
const Re = /* @__PURE__ */ rl(ko);
function Oo(e, t, r) {
  const n = e.slice();
  return n[4] = t[r], n;
}
function Do(e, t, r) {
  const n = e.slice();
  return n[7] = t[r], n;
}
function jo(e, t, r) {
  const n = e.slice();
  return n[10] = t[r], n;
}
function ip(e) {
  let t, r = Object.values(Re.data.dispatchers), n = [];
  for (let i = 0; i < r.length; i += 1)
    n[i] = To(jo(e, r, i));
  return {
    c() {
      for (let i = 0; i < n.length; i += 1)
        n[i].c();
      t = Io();
    },
    m(i, a) {
      for (let s = 0; s < n.length; s += 1)
        n[s] && n[s].m(i, a);
      tt(i, t, a);
    },
    p(i, a) {
      if (a & /*Object, Ward*/
      0) {
        r = Object.values(Re.data.dispatchers);
        let s;
        for (s = 0; s < r.length; s += 1) {
          const l = jo(i, r, s);
          n[s] ? n[s].p(l, a) : (n[s] = To(l), n[s].c(), n[s].m(t.parentNode, t));
        }
        for (; s < n.length; s += 1)
          n[s].d(1);
        n.length = r.length;
      }
    },
    d(i) {
      Na(n, i), i && rt(t);
    }
  };
}
function To(e) {
  let t, r, n = (
    /*dispatcher*/
    e[10].id + ""
  ), i, a;
  return {
    c() {
      t = ge("ui5-li"), r = ge("ui5-label"), i = Jr(n), a = Dt();
    },
    m(s, l) {
      tt(s, t, l), pe(t, r), pe(r, i), pe(t, a);
    },
    p: Se,
    d(s) {
      s && rt(t);
    }
  };
}
function ap(e) {
  let t, r = Object.values(Re.data.services), n = [];
  for (let i = 0; i < r.length; i += 1)
    n[i] = No(Do(e, r, i));
  return {
    c() {
      for (let i = 0; i < n.length; i += 1)
        n[i].c();
      t = Io();
    },
    m(i, a) {
      for (let s = 0; s < n.length; s += 1)
        n[s] && n[s].m(i, a);
      tt(i, t, a);
    },
    p(i, a) {
      if (a & /*Object, Ward*/
      0) {
        r = Object.values(Re.data.services);
        let s;
        for (s = 0; s < r.length; s += 1) {
          const l = Do(i, r, s);
          n[s] ? n[s].p(l, a) : (n[s] = No(l), n[s].c(), n[s].m(t.parentNode, t));
        }
        for (; s < n.length; s += 1)
          n[s].d(1);
        n.length = r.length;
      }
    },
    d(i) {
      Na(n, i), i && rt(t);
    }
  };
}
function No(e) {
  let t, r, n = (
    /*service*/
    e[7].id + ""
  ), i, a;
  return {
    c() {
      t = ge("ui5-li"), r = ge("ui5-label"), i = Jr(n), a = Dt();
    },
    m(s, l) {
      tt(s, t, l), pe(t, r), pe(r, i), pe(t, a);
    },
    p: Se,
    d(s) {
      s && rt(t);
    }
  };
}
function Mo(e) {
  let t, r = (
    /*message*/
    e[4].type + ""
  ), n, i, a, s;
  return {
    c() {
      t = ge("ui5-li"), n = Jr(r), i = Dt(), be(t, "additional-text", a = /*message*/
      e[4].timestamp.toLocaleTimeString("en-us", { hour12: !1 })), be(t, "description", s = `Sent by ${/*message*/
      e[4]._dispatcherId} | ${/*message*/
      e[4]._serviceId}`), be(t, "icon", "email");
    },
    m(l, p) {
      tt(l, t, p), pe(t, n), pe(t, i);
    },
    p(l, p) {
      p & /*messages*/
      1 && r !== (r = /*message*/
      l[4].type + "") && qu(n, r), p & /*messages*/
      1 && a !== (a = /*message*/
      l[4].timestamp.toLocaleTimeString("en-us", { hour12: !1 })) && be(t, "additional-text", a), p & /*messages*/
      1 && s !== (s = `Sent by ${/*message*/
      l[4]._dispatcherId} | ${/*message*/
      l[4]._serviceId}`) && be(t, "description", s);
    },
    d(l) {
      l && rt(t);
    }
  };
}
function sp(e) {
  let t, r, n, i, a, s, l, p, c, f, h, b, j, E, O, P = Re.data && ip(e), d = Re.data && ap(e), S = (
    /*messages*/
    e[0].toReversed()
  ), $ = [];
  for (let w = 0; w < S.length; w += 1)
    $[w] = Mo(Oo(e, S, w));
  return {
    c() {
      t = ge("ui5-tab"), r = ge("div"), n = ge("ui5-button"), n.textContent = "Send Message", i = Dt(), a = ge("ui5-panel"), s = ge("ui5-list"), P && P.c(), l = Dt(), p = ge("ui5-panel"), c = ge("ui5-list"), d && d.c(), f = Dt(), h = ge("ui5-panel"), b = ge("ui5-list");
      for (let w = 0; w < $.length; w += 1)
        $[w].c();
      be(n, "accessiblerole", "Button"), be(a, "header-text", `Dispatchers (${Object.values(Re.data.dispatchers).length})`), be(p, "header-text", `Services (${Object.values(Re.data.services).length})`), be(h, "header-text", j = `Messages (${/*messages*/
      e[0].length})`), be(t, "text", "Services"), be(t, "selected", "");
    },
    m(w, I) {
      tt(w, t, I), pe(t, r), pe(r, n), pe(t, i), pe(t, a), pe(a, s), P && P.m(s, null), pe(t, l), pe(t, p), pe(p, c), d && d.m(c, null), pe(t, f), pe(t, h), pe(h, b);
      for (let m = 0; m < $.length; m += 1)
        $[m] && $[m].m(b, null);
      E || (O = Wu(
        n,
        "click",
        /*sendTestMessage*/
        e[1]
      ), E = !0);
    },
    p(w, [I]) {
      if (Re.data && P.p(w, I), Re.data && d.p(w, I), I & /*messages*/
      1) {
        S = /*messages*/
        w[0].toReversed();
        let m;
        for (m = 0; m < S.length; m += 1) {
          const _ = Oo(w, S, m);
          $[m] ? $[m].p(_, I) : ($[m] = Mo(_), $[m].c(), $[m].m(b, null));
        }
        for (; m < $.length; m += 1)
          $[m].d(1);
        $.length = S.length;
      }
      I & /*messages*/
      1 && j !== (j = `Messages (${/*messages*/
      w[0].length})`) && be(h, "header-text", j);
    },
    i: Se,
    o: Se,
    d(w) {
      w && rt(t), P && P.d(), d && d.d(), Na($, w), E = !1, O();
    }
  };
}
function op(e, t, r) {
  let n = [];
  const i = Re.addService("ward-dev-tools--log-service"), a = Re.addService("ward-dev-tools--test-service");
  i.addHandler((l) => {
    r(0, n = [...n, { ...l, timestamp: /* @__PURE__ */ new Date() }]);
  });
  const s = function() {
    a.sendMessage({ type: "test-message", payload: "test" });
  };
  return Bu(() => {
    i.terminate(), a.terminate();
  }), [n, s];
}
class up extends Uo {
  constructor(t) {
    super(), Ma(this, t, op, sp, Ta, {});
  }
}
function lp(e) {
  let t, r, n, i, a;
  return r = new tl({}), i = new up({}), {
    c() {
      t = ge("ui5-tabcontainer"), Bs(r.$$.fragment), n = Dt(), Bs(i.$$.fragment), this.c = Se, be(t, "fixed", "");
    },
    m(s, l) {
      tt(s, t, l), ga(r, t, null), pe(t, n), ga(i, t, null), a = !0;
    },
    p: Se,
    i(s) {
      a || (va(r.$$.fragment, s), va(i.$$.fragment, s), a = !0);
    },
    o(s) {
      Ks(r.$$.fragment, s), Ks(i.$$.fragment, s), a = !1;
    },
    d(s) {
      s && rt(t), vi(r), vi(i);
    }
  };
}
class cp extends Ao {
  constructor(t) {
    super();
    const r = document.createElement("style");
    r.textContent = "ui5-tabcontainer{height:100%}", this.shadowRoot.appendChild(r), Ma(
      this,
      {
        target: this.shadowRoot,
        props: zu(this.attributes),
        customElement: !0
      },
      null,
      lp,
      Ta,
      {},
      null
    ), t && t.target && tt(t.target, this, t.anchor);
  }
}
customElements.define("ward-dev-tools", cp);
export {
  cp as WardDevTools
};
