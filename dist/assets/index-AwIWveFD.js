(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const s of document.querySelectorAll('link[rel="modulepreload"]')) r(s);
  new MutationObserver((s) => {
    for (const l of s)
      if (l.type === "childList")
        for (const i of l.addedNodes)
          i.tagName === "LINK" && i.rel === "modulepreload" && r(i);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(s) {
    const l = {};
    return (
      s.integrity && (l.integrity = s.integrity),
      s.referrerPolicy && (l.referrerPolicy = s.referrerPolicy),
      s.crossOrigin === "use-credentials"
        ? (l.credentials = "include")
        : s.crossOrigin === "anonymous"
        ? (l.credentials = "omit")
        : (l.credentials = "same-origin"),
      l
    );
  }
  function r(s) {
    if (s.ep) return;
    s.ep = !0;
    const l = n(s);
    fetch(s.href, l);
  }
})();
function xf(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var xu = { exports: {} },
  Vs = {},
  yu = { exports: {} },
  L = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var jr = Symbol.for("react.element"),
  yf = Symbol.for("react.portal"),
  wf = Symbol.for("react.fragment"),
  kf = Symbol.for("react.strict_mode"),
  Sf = Symbol.for("react.profiler"),
  Nf = Symbol.for("react.provider"),
  jf = Symbol.for("react.context"),
  Cf = Symbol.for("react.forward_ref"),
  bf = Symbol.for("react.suspense"),
  Ef = Symbol.for("react.memo"),
  _f = Symbol.for("react.lazy"),
  Ho = Symbol.iterator;
function Tf(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Ho && e[Ho]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var wu = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  ku = Object.assign,
  Su = {};
function Pn(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Su),
    (this.updater = n || wu);
}
Pn.prototype.isReactComponent = {};
Pn.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
Pn.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Nu() {}
Nu.prototype = Pn.prototype;
function Ui(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Su),
    (this.updater = n || wu);
}
var Vi = (Ui.prototype = new Nu());
Vi.constructor = Ui;
ku(Vi, Pn.prototype);
Vi.isPureReactComponent = !0;
var Ko = Array.isArray,
  ju = Object.prototype.hasOwnProperty,
  Bi = { current: null },
  Cu = { key: !0, ref: !0, __self: !0, __source: !0 };
function bu(e, t, n) {
  var r,
    s = {},
    l = null,
    i = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (i = t.ref),
    t.key !== void 0 && (l = "" + t.key),
    t))
      ju.call(t, r) && !Cu.hasOwnProperty(r) && (s[r] = t[r]);
  var o = arguments.length - 2;
  if (o === 1) s.children = n;
  else if (1 < o) {
    for (var a = Array(o), c = 0; c < o; c++) a[c] = arguments[c + 2];
    s.children = a;
  }
  if (e && e.defaultProps)
    for (r in ((o = e.defaultProps), o)) s[r] === void 0 && (s[r] = o[r]);
  return {
    $$typeof: jr,
    type: e,
    key: l,
    ref: i,
    props: s,
    _owner: Bi.current,
  };
}
function Pf(e, t) {
  return {
    $$typeof: jr,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function Wi(e) {
  return typeof e == "object" && e !== null && e.$$typeof === jr;
}
function Rf(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var Qo = /\/+/g;
function il(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? Rf("" + e.key)
    : t.toString(36);
}
function es(e, t, n, r, s) {
  var l = typeof e;
  (l === "undefined" || l === "boolean") && (e = null);
  var i = !1;
  if (e === null) i = !0;
  else
    switch (l) {
      case "string":
      case "number":
        i = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case jr:
          case yf:
            i = !0;
        }
    }
  if (i)
    return (
      (i = e),
      (s = s(i)),
      (e = r === "" ? "." + il(i, 0) : r),
      Ko(s)
        ? ((n = ""),
          e != null && (n = e.replace(Qo, "$&/") + "/"),
          es(s, t, n, "", function (c) {
            return c;
          }))
        : s != null &&
          (Wi(s) &&
            (s = Pf(
              s,
              n +
                (!s.key || (i && i.key === s.key)
                  ? ""
                  : ("" + s.key).replace(Qo, "$&/") + "/") +
                e
            )),
          t.push(s)),
      1
    );
  if (((i = 0), (r = r === "" ? "." : r + ":"), Ko(e)))
    for (var o = 0; o < e.length; o++) {
      l = e[o];
      var a = r + il(l, o);
      i += es(l, t, n, a, s);
    }
  else if (((a = Tf(e)), typeof a == "function"))
    for (e = a.call(e), o = 0; !(l = e.next()).done; )
      (l = l.value), (a = r + il(l, o++)), (i += es(l, t, n, a, s));
  else if (l === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return i;
}
function Lr(e, t, n) {
  if (e == null) return e;
  var r = [],
    s = 0;
  return (
    es(e, r, "", "", function (l) {
      return t.call(n, l, s++);
    }),
    r
  );
}
function Mf(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var he = { current: null },
  ts = { transition: null },
  zf = {
    ReactCurrentDispatcher: he,
    ReactCurrentBatchConfig: ts,
    ReactCurrentOwner: Bi,
  };
function Eu() {
  throw Error("act(...) is not supported in production builds of React.");
}
L.Children = {
  map: Lr,
  forEach: function (e, t, n) {
    Lr(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      Lr(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      Lr(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!Wi(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
L.Component = Pn;
L.Fragment = wf;
L.Profiler = Sf;
L.PureComponent = Ui;
L.StrictMode = kf;
L.Suspense = bf;
L.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = zf;
L.act = Eu;
L.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = ku({}, e.props),
    s = e.key,
    l = e.ref,
    i = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((l = t.ref), (i = Bi.current)),
      t.key !== void 0 && (s = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var o = e.type.defaultProps;
    for (a in t)
      ju.call(t, a) &&
        !Cu.hasOwnProperty(a) &&
        (r[a] = t[a] === void 0 && o !== void 0 ? o[a] : t[a]);
  }
  var a = arguments.length - 2;
  if (a === 1) r.children = n;
  else if (1 < a) {
    o = Array(a);
    for (var c = 0; c < a; c++) o[c] = arguments[c + 2];
    r.children = o;
  }
  return { $$typeof: jr, type: e.type, key: s, ref: l, props: r, _owner: i };
};
L.createContext = function (e) {
  return (
    (e = {
      $$typeof: jf,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: Nf, _context: e }),
    (e.Consumer = e)
  );
};
L.createElement = bu;
L.createFactory = function (e) {
  var t = bu.bind(null, e);
  return (t.type = e), t;
};
L.createRef = function () {
  return { current: null };
};
L.forwardRef = function (e) {
  return { $$typeof: Cf, render: e };
};
L.isValidElement = Wi;
L.lazy = function (e) {
  return { $$typeof: _f, _payload: { _status: -1, _result: e }, _init: Mf };
};
L.memo = function (e, t) {
  return { $$typeof: Ef, type: e, compare: t === void 0 ? null : t };
};
L.startTransition = function (e) {
  var t = ts.transition;
  ts.transition = {};
  try {
    e();
  } finally {
    ts.transition = t;
  }
};
L.unstable_act = Eu;
L.useCallback = function (e, t) {
  return he.current.useCallback(e, t);
};
L.useContext = function (e) {
  return he.current.useContext(e);
};
L.useDebugValue = function () {};
L.useDeferredValue = function (e) {
  return he.current.useDeferredValue(e);
};
L.useEffect = function (e, t) {
  return he.current.useEffect(e, t);
};
L.useId = function () {
  return he.current.useId();
};
L.useImperativeHandle = function (e, t, n) {
  return he.current.useImperativeHandle(e, t, n);
};
L.useInsertionEffect = function (e, t) {
  return he.current.useInsertionEffect(e, t);
};
L.useLayoutEffect = function (e, t) {
  return he.current.useLayoutEffect(e, t);
};
L.useMemo = function (e, t) {
  return he.current.useMemo(e, t);
};
L.useReducer = function (e, t, n) {
  return he.current.useReducer(e, t, n);
};
L.useRef = function (e) {
  return he.current.useRef(e);
};
L.useState = function (e) {
  return he.current.useState(e);
};
L.useSyncExternalStore = function (e, t, n) {
  return he.current.useSyncExternalStore(e, t, n);
};
L.useTransition = function () {
  return he.current.useTransition();
};
L.version = "18.3.1";
yu.exports = L;
var I = yu.exports;
const Lf = xf(I);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var If = I,
  Of = Symbol.for("react.element"),
  Af = Symbol.for("react.fragment"),
  Ff = Object.prototype.hasOwnProperty,
  Df = If.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  $f = { key: !0, ref: !0, __self: !0, __source: !0 };
function _u(e, t, n) {
  var r,
    s = {},
    l = null,
    i = null;
  n !== void 0 && (l = "" + n),
    t.key !== void 0 && (l = "" + t.key),
    t.ref !== void 0 && (i = t.ref);
  for (r in t) Ff.call(t, r) && !$f.hasOwnProperty(r) && (s[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) s[r] === void 0 && (s[r] = t[r]);
  return {
    $$typeof: Of,
    type: e,
    key: l,
    ref: i,
    props: s,
    _owner: Df.current,
  };
}
Vs.Fragment = Af;
Vs.jsx = _u;
Vs.jsxs = _u;
xu.exports = Vs;
var u = xu.exports,
  Fl = {},
  Tu = { exports: {} },
  _e = {},
  Pu = { exports: {} },
  Ru = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(b, P) {
    var R = b.length;
    b.push(P);
    e: for (; 0 < R; ) {
      var A = (R - 1) >>> 1,
        ee = b[A];
      if (0 < s(ee, P)) (b[A] = P), (b[R] = ee), (R = A);
      else break e;
    }
  }
  function n(b) {
    return b.length === 0 ? null : b[0];
  }
  function r(b) {
    if (b.length === 0) return null;
    var P = b[0],
      R = b.pop();
    if (R !== P) {
      b[0] = R;
      e: for (var A = 0, ee = b.length, Mr = ee >>> 1; A < Mr; ) {
        var Rt = 2 * (A + 1) - 1,
          ll = b[Rt],
          Mt = Rt + 1,
          zr = b[Mt];
        if (0 > s(ll, R))
          Mt < ee && 0 > s(zr, ll)
            ? ((b[A] = zr), (b[Mt] = R), (A = Mt))
            : ((b[A] = ll), (b[Rt] = R), (A = Rt));
        else if (Mt < ee && 0 > s(zr, R)) (b[A] = zr), (b[Mt] = R), (A = Mt);
        else break e;
      }
    }
    return P;
  }
  function s(b, P) {
    var R = b.sortIndex - P.sortIndex;
    return R !== 0 ? R : b.id - P.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var l = performance;
    e.unstable_now = function () {
      return l.now();
    };
  } else {
    var i = Date,
      o = i.now();
    e.unstable_now = function () {
      return i.now() - o;
    };
  }
  var a = [],
    c = [],
    p = 1,
    g = null,
    h = 3,
    v = !1,
    w = !1,
    x = !1,
    E = typeof setTimeout == "function" ? setTimeout : null,
    f = typeof clearTimeout == "function" ? clearTimeout : null,
    d = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function m(b) {
    for (var P = n(c); P !== null; ) {
      if (P.callback === null) r(c);
      else if (P.startTime <= b)
        r(c), (P.sortIndex = P.expirationTime), t(a, P);
      else break;
      P = n(c);
    }
  }
  function y(b) {
    if (((x = !1), m(b), !w))
      if (n(a) !== null) (w = !0), ot(k);
      else {
        var P = n(c);
        P !== null && Zt(y, P.startTime - b);
      }
  }
  function k(b, P) {
    (w = !1), x && ((x = !1), f(N), (N = -1)), (v = !0);
    var R = h;
    try {
      for (
        m(P), g = n(a);
        g !== null && (!(g.expirationTime > P) || (b && !oe()));

      ) {
        var A = g.callback;
        if (typeof A == "function") {
          (g.callback = null), (h = g.priorityLevel);
          var ee = A(g.expirationTime <= P);
          (P = e.unstable_now()),
            typeof ee == "function" ? (g.callback = ee) : g === n(a) && r(a),
            m(P);
        } else r(a);
        g = n(a);
      }
      if (g !== null) var Mr = !0;
      else {
        var Rt = n(c);
        Rt !== null && Zt(y, Rt.startTime - P), (Mr = !1);
      }
      return Mr;
    } finally {
      (g = null), (h = R), (v = !1);
    }
  }
  var j = !1,
    C = null,
    N = -1,
    z = 5,
    T = -1;
  function oe() {
    return !(e.unstable_now() - T < z);
  }
  function F() {
    if (C !== null) {
      var b = e.unstable_now();
      T = b;
      var P = !0;
      try {
        P = C(!0, b);
      } finally {
        P ? it() : ((j = !1), (C = null));
      }
    } else j = !1;
  }
  var it;
  if (typeof d == "function")
    it = function () {
      d(F);
    };
  else if (typeof MessageChannel < "u") {
    var Pt = new MessageChannel(),
      Rr = Pt.port2;
    (Pt.port1.onmessage = F),
      (it = function () {
        Rr.postMessage(null);
      });
  } else
    it = function () {
      E(F, 0);
    };
  function ot(b) {
    (C = b), j || ((j = !0), it());
  }
  function Zt(b, P) {
    N = E(function () {
      b(e.unstable_now());
    }, P);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (b) {
      b.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      w || v || ((w = !0), ot(k));
    }),
    (e.unstable_forceFrameRate = function (b) {
      0 > b || 125 < b
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (z = 0 < b ? Math.floor(1e3 / b) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return h;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(a);
    }),
    (e.unstable_next = function (b) {
      switch (h) {
        case 1:
        case 2:
        case 3:
          var P = 3;
          break;
        default:
          P = h;
      }
      var R = h;
      h = P;
      try {
        return b();
      } finally {
        h = R;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (b, P) {
      switch (b) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          b = 3;
      }
      var R = h;
      h = b;
      try {
        return P();
      } finally {
        h = R;
      }
    }),
    (e.unstable_scheduleCallback = function (b, P, R) {
      var A = e.unstable_now();
      switch (
        (typeof R == "object" && R !== null
          ? ((R = R.delay), (R = typeof R == "number" && 0 < R ? A + R : A))
          : (R = A),
        b)
      ) {
        case 1:
          var ee = -1;
          break;
        case 2:
          ee = 250;
          break;
        case 5:
          ee = 1073741823;
          break;
        case 4:
          ee = 1e4;
          break;
        default:
          ee = 5e3;
      }
      return (
        (ee = R + ee),
        (b = {
          id: p++,
          callback: P,
          priorityLevel: b,
          startTime: R,
          expirationTime: ee,
          sortIndex: -1,
        }),
        R > A
          ? ((b.sortIndex = R),
            t(c, b),
            n(a) === null &&
              b === n(c) &&
              (x ? (f(N), (N = -1)) : (x = !0), Zt(y, R - A)))
          : ((b.sortIndex = ee), t(a, b), w || v || ((w = !0), ot(k))),
        b
      );
    }),
    (e.unstable_shouldYield = oe),
    (e.unstable_wrapCallback = function (b) {
      var P = h;
      return function () {
        var R = h;
        h = P;
        try {
          return b.apply(this, arguments);
        } finally {
          h = R;
        }
      };
    });
})(Ru);
Pu.exports = Ru;
var Uf = Pu.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Vf = I,
  Ee = Uf;
function S(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var Mu = new Set(),
  sr = {};
function Xt(e, t) {
  Sn(e, t), Sn(e + "Capture", t);
}
function Sn(e, t) {
  for (sr[e] = t, e = 0; e < t.length; e++) Mu.add(t[e]);
}
var tt = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  Dl = Object.prototype.hasOwnProperty,
  Bf =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Go = {},
  Yo = {};
function Wf(e) {
  return Dl.call(Yo, e)
    ? !0
    : Dl.call(Go, e)
    ? !1
    : Bf.test(e)
    ? (Yo[e] = !0)
    : ((Go[e] = !0), !1);
}
function Hf(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function Kf(e, t, n, r) {
  if (t === null || typeof t > "u" || Hf(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function ge(e, t, n, r, s, l, i) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = s),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = l),
    (this.removeEmptyString = i);
}
var ie = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    ie[e] = new ge(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  ie[t] = new ge(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  ie[e] = new ge(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  ie[e] = new ge(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    ie[e] = new ge(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  ie[e] = new ge(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  ie[e] = new ge(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  ie[e] = new ge(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  ie[e] = new ge(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Hi = /[\-:]([a-z])/g;
function Ki(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Hi, Ki);
    ie[t] = new ge(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Hi, Ki);
    ie[t] = new ge(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(Hi, Ki);
  ie[t] = new ge(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  ie[e] = new ge(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
ie.xlinkHref = new ge(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  ie[e] = new ge(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Qi(e, t, n, r) {
  var s = ie.hasOwnProperty(t) ? ie[t] : null;
  (s !== null
    ? s.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (Kf(t, n, s, r) && (n = null),
    r || s === null
      ? Wf(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : s.mustUseProperty
      ? (e[s.propertyName] = n === null ? (s.type === 3 ? !1 : "") : n)
      : ((t = s.attributeName),
        (r = s.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((s = s.type),
            (n = s === 3 || (s === 4 && n === !0) ? "" : "" + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var lt = Vf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  Ir = Symbol.for("react.element"),
  en = Symbol.for("react.portal"),
  tn = Symbol.for("react.fragment"),
  Gi = Symbol.for("react.strict_mode"),
  $l = Symbol.for("react.profiler"),
  zu = Symbol.for("react.provider"),
  Lu = Symbol.for("react.context"),
  Yi = Symbol.for("react.forward_ref"),
  Ul = Symbol.for("react.suspense"),
  Vl = Symbol.for("react.suspense_list"),
  Xi = Symbol.for("react.memo"),
  dt = Symbol.for("react.lazy"),
  Iu = Symbol.for("react.offscreen"),
  Xo = Symbol.iterator;
function Ln(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Xo && e[Xo]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Q = Object.assign,
  ol;
function Wn(e) {
  if (ol === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      ol = (t && t[1]) || "";
    }
  return (
    `
` +
    ol +
    e
  );
}
var al = !1;
function ul(e, t) {
  if (!e || al) return "";
  al = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (c) {
          var r = c;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (c) {
          r = c;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (c) {
        r = c;
      }
      e();
    }
  } catch (c) {
    if (c && r && typeof c.stack == "string") {
      for (
        var s = c.stack.split(`
`),
          l = r.stack.split(`
`),
          i = s.length - 1,
          o = l.length - 1;
        1 <= i && 0 <= o && s[i] !== l[o];

      )
        o--;
      for (; 1 <= i && 0 <= o; i--, o--)
        if (s[i] !== l[o]) {
          if (i !== 1 || o !== 1)
            do
              if ((i--, o--, 0 > o || s[i] !== l[o])) {
                var a =
                  `
` + s[i].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    a.includes("<anonymous>") &&
                    (a = a.replace("<anonymous>", e.displayName)),
                  a
                );
              }
            while (1 <= i && 0 <= o);
          break;
        }
    }
  } finally {
    (al = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? Wn(e) : "";
}
function Qf(e) {
  switch (e.tag) {
    case 5:
      return Wn(e.type);
    case 16:
      return Wn("Lazy");
    case 13:
      return Wn("Suspense");
    case 19:
      return Wn("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = ul(e.type, !1)), e;
    case 11:
      return (e = ul(e.type.render, !1)), e;
    case 1:
      return (e = ul(e.type, !0)), e;
    default:
      return "";
  }
}
function Bl(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case tn:
      return "Fragment";
    case en:
      return "Portal";
    case $l:
      return "Profiler";
    case Gi:
      return "StrictMode";
    case Ul:
      return "Suspense";
    case Vl:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case Lu:
        return (e.displayName || "Context") + ".Consumer";
      case zu:
        return (e._context.displayName || "Context") + ".Provider";
      case Yi:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case Xi:
        return (
          (t = e.displayName || null), t !== null ? t : Bl(e.type) || "Memo"
        );
      case dt:
        (t = e._payload), (e = e._init);
        try {
          return Bl(e(t));
        } catch {}
    }
  return null;
}
function Gf(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return Bl(t);
    case 8:
      return t === Gi ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function Ct(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function Ou(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function Yf(e) {
  var t = Ou(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var s = n.get,
      l = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return s.call(this);
        },
        set: function (i) {
          (r = "" + i), l.call(this, i);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (i) {
          r = "" + i;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function Or(e) {
  e._valueTracker || (e._valueTracker = Yf(e));
}
function Au(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = Ou(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function ms(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Wl(e, t) {
  var n = t.checked;
  return Q({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function qo(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = Ct(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function Fu(e, t) {
  (t = t.checked), t != null && Qi(e, "checked", t, !1);
}
function Hl(e, t) {
  Fu(e, t);
  var n = Ct(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? Kl(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && Kl(e, t.type, Ct(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function Zo(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function Kl(e, t, n) {
  (t !== "number" || ms(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Hn = Array.isArray;
function mn(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var s = 0; s < n.length; s++) t["$" + n[s]] = !0;
    for (n = 0; n < e.length; n++)
      (s = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== s && (e[n].selected = s),
        s && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + Ct(n), t = null, s = 0; s < e.length; s++) {
      if (e[s].value === n) {
        (e[s].selected = !0), r && (e[s].defaultSelected = !0);
        return;
      }
      t !== null || e[s].disabled || (t = e[s]);
    }
    t !== null && (t.selected = !0);
  }
}
function Ql(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(S(91));
  return Q({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function Jo(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(S(92));
      if (Hn(n)) {
        if (1 < n.length) throw Error(S(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: Ct(n) };
}
function Du(e, t) {
  var n = Ct(t.value),
    r = Ct(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function ea(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function $u(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Gl(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? $u(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var Ar,
  Uu = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, s) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, s);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        Ar = Ar || document.createElement("div"),
          Ar.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = Ar.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function lr(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Gn = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  Xf = ["Webkit", "ms", "Moz", "O"];
Object.keys(Gn).forEach(function (e) {
  Xf.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Gn[t] = Gn[e]);
  });
});
function Vu(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (Gn.hasOwnProperty(e) && Gn[e])
    ? ("" + t).trim()
    : t + "px";
}
function Bu(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        s = Vu(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, s) : (e[n] = s);
    }
}
var qf = Q(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function Yl(e, t) {
  if (t) {
    if (qf[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(S(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(S(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(S(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(S(62));
  }
}
function Xl(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var ql = null;
function qi(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var Zl = null,
  hn = null,
  gn = null;
function ta(e) {
  if ((e = Er(e))) {
    if (typeof Zl != "function") throw Error(S(280));
    var t = e.stateNode;
    t && ((t = Qs(t)), Zl(e.stateNode, e.type, t));
  }
}
function Wu(e) {
  hn ? (gn ? gn.push(e) : (gn = [e])) : (hn = e);
}
function Hu() {
  if (hn) {
    var e = hn,
      t = gn;
    if (((gn = hn = null), ta(e), t)) for (e = 0; e < t.length; e++) ta(t[e]);
  }
}
function Ku(e, t) {
  return e(t);
}
function Qu() {}
var cl = !1;
function Gu(e, t, n) {
  if (cl) return e(t, n);
  cl = !0;
  try {
    return Ku(e, t, n);
  } finally {
    (cl = !1), (hn !== null || gn !== null) && (Qu(), Hu());
  }
}
function ir(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Qs(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(S(231, t, typeof n));
  return n;
}
var Jl = !1;
if (tt)
  try {
    var In = {};
    Object.defineProperty(In, "passive", {
      get: function () {
        Jl = !0;
      },
    }),
      window.addEventListener("test", In, In),
      window.removeEventListener("test", In, In);
  } catch {
    Jl = !1;
  }
function Zf(e, t, n, r, s, l, i, o, a) {
  var c = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, c);
  } catch (p) {
    this.onError(p);
  }
}
var Yn = !1,
  hs = null,
  gs = !1,
  ei = null,
  Jf = {
    onError: function (e) {
      (Yn = !0), (hs = e);
    },
  };
function ep(e, t, n, r, s, l, i, o, a) {
  (Yn = !1), (hs = null), Zf.apply(Jf, arguments);
}
function tp(e, t, n, r, s, l, i, o, a) {
  if ((ep.apply(this, arguments), Yn)) {
    if (Yn) {
      var c = hs;
      (Yn = !1), (hs = null);
    } else throw Error(S(198));
    gs || ((gs = !0), (ei = c));
  }
}
function qt(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function Yu(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function na(e) {
  if (qt(e) !== e) throw Error(S(188));
}
function np(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = qt(e)), t === null)) throw Error(S(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var s = n.return;
    if (s === null) break;
    var l = s.alternate;
    if (l === null) {
      if (((r = s.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (s.child === l.child) {
      for (l = s.child; l; ) {
        if (l === n) return na(s), e;
        if (l === r) return na(s), t;
        l = l.sibling;
      }
      throw Error(S(188));
    }
    if (n.return !== r.return) (n = s), (r = l);
    else {
      for (var i = !1, o = s.child; o; ) {
        if (o === n) {
          (i = !0), (n = s), (r = l);
          break;
        }
        if (o === r) {
          (i = !0), (r = s), (n = l);
          break;
        }
        o = o.sibling;
      }
      if (!i) {
        for (o = l.child; o; ) {
          if (o === n) {
            (i = !0), (n = l), (r = s);
            break;
          }
          if (o === r) {
            (i = !0), (r = l), (n = s);
            break;
          }
          o = o.sibling;
        }
        if (!i) throw Error(S(189));
      }
    }
    if (n.alternate !== r) throw Error(S(190));
  }
  if (n.tag !== 3) throw Error(S(188));
  return n.stateNode.current === n ? e : t;
}
function Xu(e) {
  return (e = np(e)), e !== null ? qu(e) : null;
}
function qu(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = qu(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Zu = Ee.unstable_scheduleCallback,
  ra = Ee.unstable_cancelCallback,
  rp = Ee.unstable_shouldYield,
  sp = Ee.unstable_requestPaint,
  X = Ee.unstable_now,
  lp = Ee.unstable_getCurrentPriorityLevel,
  Zi = Ee.unstable_ImmediatePriority,
  Ju = Ee.unstable_UserBlockingPriority,
  vs = Ee.unstable_NormalPriority,
  ip = Ee.unstable_LowPriority,
  ec = Ee.unstable_IdlePriority,
  Bs = null,
  Qe = null;
function op(e) {
  if (Qe && typeof Qe.onCommitFiberRoot == "function")
    try {
      Qe.onCommitFiberRoot(Bs, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var Ue = Math.clz32 ? Math.clz32 : cp,
  ap = Math.log,
  up = Math.LN2;
function cp(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((ap(e) / up) | 0)) | 0;
}
var Fr = 64,
  Dr = 4194304;
function Kn(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function xs(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    s = e.suspendedLanes,
    l = e.pingedLanes,
    i = n & 268435455;
  if (i !== 0) {
    var o = i & ~s;
    o !== 0 ? (r = Kn(o)) : ((l &= i), l !== 0 && (r = Kn(l)));
  } else (i = n & ~s), i !== 0 ? (r = Kn(i)) : l !== 0 && (r = Kn(l));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & s) &&
    ((s = r & -r), (l = t & -t), s >= l || (s === 16 && (l & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - Ue(t)), (s = 1 << n), (r |= e[n]), (t &= ~s);
  return r;
}
function dp(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function fp(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      s = e.expirationTimes,
      l = e.pendingLanes;
    0 < l;

  ) {
    var i = 31 - Ue(l),
      o = 1 << i,
      a = s[i];
    a === -1
      ? (!(o & n) || o & r) && (s[i] = dp(o, t))
      : a <= t && (e.expiredLanes |= o),
      (l &= ~o);
  }
}
function ti(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function tc() {
  var e = Fr;
  return (Fr <<= 1), !(Fr & 4194240) && (Fr = 64), e;
}
function dl(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function Cr(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - Ue(t)),
    (e[t] = n);
}
function pp(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var s = 31 - Ue(n),
      l = 1 << s;
    (t[s] = 0), (r[s] = -1), (e[s] = -1), (n &= ~l);
  }
}
function Ji(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - Ue(n),
      s = 1 << r;
    (s & t) | (e[r] & t) && (e[r] |= t), (n &= ~s);
  }
}
var D = 0;
function nc(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var rc,
  eo,
  sc,
  lc,
  ic,
  ni = !1,
  $r = [],
  vt = null,
  xt = null,
  yt = null,
  or = new Map(),
  ar = new Map(),
  pt = [],
  mp =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function sa(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      vt = null;
      break;
    case "dragenter":
    case "dragleave":
      xt = null;
      break;
    case "mouseover":
    case "mouseout":
      yt = null;
      break;
    case "pointerover":
    case "pointerout":
      or.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      ar.delete(t.pointerId);
  }
}
function On(e, t, n, r, s, l) {
  return e === null || e.nativeEvent !== l
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: l,
        targetContainers: [s],
      }),
      t !== null && ((t = Er(t)), t !== null && eo(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      s !== null && t.indexOf(s) === -1 && t.push(s),
      e);
}
function hp(e, t, n, r, s) {
  switch (t) {
    case "focusin":
      return (vt = On(vt, e, t, n, r, s)), !0;
    case "dragenter":
      return (xt = On(xt, e, t, n, r, s)), !0;
    case "mouseover":
      return (yt = On(yt, e, t, n, r, s)), !0;
    case "pointerover":
      var l = s.pointerId;
      return or.set(l, On(or.get(l) || null, e, t, n, r, s)), !0;
    case "gotpointercapture":
      return (
        (l = s.pointerId), ar.set(l, On(ar.get(l) || null, e, t, n, r, s)), !0
      );
  }
  return !1;
}
function oc(e) {
  var t = Ot(e.target);
  if (t !== null) {
    var n = qt(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = Yu(n)), t !== null)) {
          (e.blockedOn = t),
            ic(e.priority, function () {
              sc(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function ns(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = ri(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (ql = r), n.target.dispatchEvent(r), (ql = null);
    } else return (t = Er(n)), t !== null && eo(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function la(e, t, n) {
  ns(e) && n.delete(t);
}
function gp() {
  (ni = !1),
    vt !== null && ns(vt) && (vt = null),
    xt !== null && ns(xt) && (xt = null),
    yt !== null && ns(yt) && (yt = null),
    or.forEach(la),
    ar.forEach(la);
}
function An(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    ni ||
      ((ni = !0),
      Ee.unstable_scheduleCallback(Ee.unstable_NormalPriority, gp)));
}
function ur(e) {
  function t(s) {
    return An(s, e);
  }
  if (0 < $r.length) {
    An($r[0], e);
    for (var n = 1; n < $r.length; n++) {
      var r = $r[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    vt !== null && An(vt, e),
      xt !== null && An(xt, e),
      yt !== null && An(yt, e),
      or.forEach(t),
      ar.forEach(t),
      n = 0;
    n < pt.length;
    n++
  )
    (r = pt[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < pt.length && ((n = pt[0]), n.blockedOn === null); )
    oc(n), n.blockedOn === null && pt.shift();
}
var vn = lt.ReactCurrentBatchConfig,
  ys = !0;
function vp(e, t, n, r) {
  var s = D,
    l = vn.transition;
  vn.transition = null;
  try {
    (D = 1), to(e, t, n, r);
  } finally {
    (D = s), (vn.transition = l);
  }
}
function xp(e, t, n, r) {
  var s = D,
    l = vn.transition;
  vn.transition = null;
  try {
    (D = 4), to(e, t, n, r);
  } finally {
    (D = s), (vn.transition = l);
  }
}
function to(e, t, n, r) {
  if (ys) {
    var s = ri(e, t, n, r);
    if (s === null) kl(e, t, r, ws, n), sa(e, r);
    else if (hp(s, e, t, n, r)) r.stopPropagation();
    else if ((sa(e, r), t & 4 && -1 < mp.indexOf(e))) {
      for (; s !== null; ) {
        var l = Er(s);
        if (
          (l !== null && rc(l),
          (l = ri(e, t, n, r)),
          l === null && kl(e, t, r, ws, n),
          l === s)
        )
          break;
        s = l;
      }
      s !== null && r.stopPropagation();
    } else kl(e, t, r, null, n);
  }
}
var ws = null;
function ri(e, t, n, r) {
  if (((ws = null), (e = qi(r)), (e = Ot(e)), e !== null))
    if (((t = qt(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = Yu(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (ws = e), null;
}
function ac(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (lp()) {
        case Zi:
          return 1;
        case Ju:
          return 4;
        case vs:
        case ip:
          return 16;
        case ec:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var ht = null,
  no = null,
  rs = null;
function uc() {
  if (rs) return rs;
  var e,
    t = no,
    n = t.length,
    r,
    s = "value" in ht ? ht.value : ht.textContent,
    l = s.length;
  for (e = 0; e < n && t[e] === s[e]; e++);
  var i = n - e;
  for (r = 1; r <= i && t[n - r] === s[l - r]; r++);
  return (rs = s.slice(e, 1 < r ? 1 - r : void 0));
}
function ss(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function Ur() {
  return !0;
}
function ia() {
  return !1;
}
function Te(e) {
  function t(n, r, s, l, i) {
    (this._reactName = n),
      (this._targetInst = s),
      (this.type = r),
      (this.nativeEvent = l),
      (this.target = i),
      (this.currentTarget = null);
    for (var o in e)
      e.hasOwnProperty(o) && ((n = e[o]), (this[o] = n ? n(l) : l[o]));
    return (
      (this.isDefaultPrevented = (
        l.defaultPrevented != null ? l.defaultPrevented : l.returnValue === !1
      )
        ? Ur
        : ia),
      (this.isPropagationStopped = ia),
      this
    );
  }
  return (
    Q(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = Ur));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = Ur));
      },
      persist: function () {},
      isPersistent: Ur,
    }),
    t
  );
}
var Rn = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  ro = Te(Rn),
  br = Q({}, Rn, { view: 0, detail: 0 }),
  yp = Te(br),
  fl,
  pl,
  Fn,
  Ws = Q({}, br, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: so,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== Fn &&
            (Fn && e.type === "mousemove"
              ? ((fl = e.screenX - Fn.screenX), (pl = e.screenY - Fn.screenY))
              : (pl = fl = 0),
            (Fn = e)),
          fl);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : pl;
    },
  }),
  oa = Te(Ws),
  wp = Q({}, Ws, { dataTransfer: 0 }),
  kp = Te(wp),
  Sp = Q({}, br, { relatedTarget: 0 }),
  ml = Te(Sp),
  Np = Q({}, Rn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  jp = Te(Np),
  Cp = Q({}, Rn, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  bp = Te(Cp),
  Ep = Q({}, Rn, { data: 0 }),
  aa = Te(Ep),
  _p = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  Tp = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  Pp = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function Rp(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Pp[e]) ? !!t[e] : !1;
}
function so() {
  return Rp;
}
var Mp = Q({}, br, {
    key: function (e) {
      if (e.key) {
        var t = _p[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = ss(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? Tp[e.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: so,
    charCode: function (e) {
      return e.type === "keypress" ? ss(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? ss(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  zp = Te(Mp),
  Lp = Q({}, Ws, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  ua = Te(Lp),
  Ip = Q({}, br, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: so,
  }),
  Op = Te(Ip),
  Ap = Q({}, Rn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Fp = Te(Ap),
  Dp = Q({}, Ws, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
        ? -e.wheelDeltaY
        : "wheelDelta" in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  $p = Te(Dp),
  Up = [9, 13, 27, 32],
  lo = tt && "CompositionEvent" in window,
  Xn = null;
tt && "documentMode" in document && (Xn = document.documentMode);
var Vp = tt && "TextEvent" in window && !Xn,
  cc = tt && (!lo || (Xn && 8 < Xn && 11 >= Xn)),
  ca = " ",
  da = !1;
function dc(e, t) {
  switch (e) {
    case "keyup":
      return Up.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function fc(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var nn = !1;
function Bp(e, t) {
  switch (e) {
    case "compositionend":
      return fc(t);
    case "keypress":
      return t.which !== 32 ? null : ((da = !0), ca);
    case "textInput":
      return (e = t.data), e === ca && da ? null : e;
    default:
      return null;
  }
}
function Wp(e, t) {
  if (nn)
    return e === "compositionend" || (!lo && dc(e, t))
      ? ((e = uc()), (rs = no = ht = null), (nn = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return cc && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Hp = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function fa(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Hp[e.type] : t === "textarea";
}
function pc(e, t, n, r) {
  Wu(r),
    (t = ks(t, "onChange")),
    0 < t.length &&
      ((n = new ro("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var qn = null,
  cr = null;
function Kp(e) {
  jc(e, 0);
}
function Hs(e) {
  var t = ln(e);
  if (Au(t)) return e;
}
function Qp(e, t) {
  if (e === "change") return t;
}
var mc = !1;
if (tt) {
  var hl;
  if (tt) {
    var gl = "oninput" in document;
    if (!gl) {
      var pa = document.createElement("div");
      pa.setAttribute("oninput", "return;"),
        (gl = typeof pa.oninput == "function");
    }
    hl = gl;
  } else hl = !1;
  mc = hl && (!document.documentMode || 9 < document.documentMode);
}
function ma() {
  qn && (qn.detachEvent("onpropertychange", hc), (cr = qn = null));
}
function hc(e) {
  if (e.propertyName === "value" && Hs(cr)) {
    var t = [];
    pc(t, cr, e, qi(e)), Gu(Kp, t);
  }
}
function Gp(e, t, n) {
  e === "focusin"
    ? (ma(), (qn = t), (cr = n), qn.attachEvent("onpropertychange", hc))
    : e === "focusout" && ma();
}
function Yp(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return Hs(cr);
}
function Xp(e, t) {
  if (e === "click") return Hs(t);
}
function qp(e, t) {
  if (e === "input" || e === "change") return Hs(t);
}
function Zp(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Be = typeof Object.is == "function" ? Object.is : Zp;
function dr(e, t) {
  if (Be(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var s = n[r];
    if (!Dl.call(t, s) || !Be(e[s], t[s])) return !1;
  }
  return !0;
}
function ha(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function ga(e, t) {
  var n = ha(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = ha(n);
  }
}
function gc(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? gc(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function vc() {
  for (var e = window, t = ms(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = ms(e.document);
  }
  return t;
}
function io(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function Jp(e) {
  var t = vc(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    gc(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && io(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var s = n.textContent.length,
          l = Math.min(r.start, s);
        (r = r.end === void 0 ? l : Math.min(r.end, s)),
          !e.extend && l > r && ((s = r), (r = l), (l = s)),
          (s = ga(n, l));
        var i = ga(n, r);
        s &&
          i &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== s.node ||
            e.anchorOffset !== s.offset ||
            e.focusNode !== i.node ||
            e.focusOffset !== i.offset) &&
          ((t = t.createRange()),
          t.setStart(s.node, s.offset),
          e.removeAllRanges(),
          l > r
            ? (e.addRange(t), e.extend(i.node, i.offset))
            : (t.setEnd(i.node, i.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var em = tt && "documentMode" in document && 11 >= document.documentMode,
  rn = null,
  si = null,
  Zn = null,
  li = !1;
function va(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  li ||
    rn == null ||
    rn !== ms(r) ||
    ((r = rn),
    "selectionStart" in r && io(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (Zn && dr(Zn, r)) ||
      ((Zn = r),
      (r = ks(si, "onSelect")),
      0 < r.length &&
        ((t = new ro("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = rn))));
}
function Vr(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var sn = {
    animationend: Vr("Animation", "AnimationEnd"),
    animationiteration: Vr("Animation", "AnimationIteration"),
    animationstart: Vr("Animation", "AnimationStart"),
    transitionend: Vr("Transition", "TransitionEnd"),
  },
  vl = {},
  xc = {};
tt &&
  ((xc = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete sn.animationend.animation,
    delete sn.animationiteration.animation,
    delete sn.animationstart.animation),
  "TransitionEvent" in window || delete sn.transitionend.transition);
function Ks(e) {
  if (vl[e]) return vl[e];
  if (!sn[e]) return e;
  var t = sn[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in xc) return (vl[e] = t[n]);
  return e;
}
var yc = Ks("animationend"),
  wc = Ks("animationiteration"),
  kc = Ks("animationstart"),
  Sc = Ks("transitionend"),
  Nc = new Map(),
  xa =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function Et(e, t) {
  Nc.set(e, t), Xt(t, [e]);
}
for (var xl = 0; xl < xa.length; xl++) {
  var yl = xa[xl],
    tm = yl.toLowerCase(),
    nm = yl[0].toUpperCase() + yl.slice(1);
  Et(tm, "on" + nm);
}
Et(yc, "onAnimationEnd");
Et(wc, "onAnimationIteration");
Et(kc, "onAnimationStart");
Et("dblclick", "onDoubleClick");
Et("focusin", "onFocus");
Et("focusout", "onBlur");
Et(Sc, "onTransitionEnd");
Sn("onMouseEnter", ["mouseout", "mouseover"]);
Sn("onMouseLeave", ["mouseout", "mouseover"]);
Sn("onPointerEnter", ["pointerout", "pointerover"]);
Sn("onPointerLeave", ["pointerout", "pointerover"]);
Xt(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
Xt(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
Xt("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Xt(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
Xt(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
Xt(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var Qn =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  rm = new Set("cancel close invalid load scroll toggle".split(" ").concat(Qn));
function ya(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), tp(r, t, void 0, e), (e.currentTarget = null);
}
function jc(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      s = r.event;
    r = r.listeners;
    e: {
      var l = void 0;
      if (t)
        for (var i = r.length - 1; 0 <= i; i--) {
          var o = r[i],
            a = o.instance,
            c = o.currentTarget;
          if (((o = o.listener), a !== l && s.isPropagationStopped())) break e;
          ya(s, o, c), (l = a);
        }
      else
        for (i = 0; i < r.length; i++) {
          if (
            ((o = r[i]),
            (a = o.instance),
            (c = o.currentTarget),
            (o = o.listener),
            a !== l && s.isPropagationStopped())
          )
            break e;
          ya(s, o, c), (l = a);
        }
    }
  }
  if (gs) throw ((e = ei), (gs = !1), (ei = null), e);
}
function V(e, t) {
  var n = t[ci];
  n === void 0 && (n = t[ci] = new Set());
  var r = e + "__bubble";
  n.has(r) || (Cc(t, e, 2, !1), n.add(r));
}
function wl(e, t, n) {
  var r = 0;
  t && (r |= 4), Cc(n, e, r, t);
}
var Br = "_reactListening" + Math.random().toString(36).slice(2);
function fr(e) {
  if (!e[Br]) {
    (e[Br] = !0),
      Mu.forEach(function (n) {
        n !== "selectionchange" && (rm.has(n) || wl(n, !1, e), wl(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Br] || ((t[Br] = !0), wl("selectionchange", !1, t));
  }
}
function Cc(e, t, n, r) {
  switch (ac(t)) {
    case 1:
      var s = vp;
      break;
    case 4:
      s = xp;
      break;
    default:
      s = to;
  }
  (n = s.bind(null, t, n, e)),
    (s = void 0),
    !Jl ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (s = !0),
    r
      ? s !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: s })
        : e.addEventListener(t, n, !0)
      : s !== void 0
      ? e.addEventListener(t, n, { passive: s })
      : e.addEventListener(t, n, !1);
}
function kl(e, t, n, r, s) {
  var l = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var i = r.tag;
      if (i === 3 || i === 4) {
        var o = r.stateNode.containerInfo;
        if (o === s || (o.nodeType === 8 && o.parentNode === s)) break;
        if (i === 4)
          for (i = r.return; i !== null; ) {
            var a = i.tag;
            if (
              (a === 3 || a === 4) &&
              ((a = i.stateNode.containerInfo),
              a === s || (a.nodeType === 8 && a.parentNode === s))
            )
              return;
            i = i.return;
          }
        for (; o !== null; ) {
          if (((i = Ot(o)), i === null)) return;
          if (((a = i.tag), a === 5 || a === 6)) {
            r = l = i;
            continue e;
          }
          o = o.parentNode;
        }
      }
      r = r.return;
    }
  Gu(function () {
    var c = l,
      p = qi(n),
      g = [];
    e: {
      var h = Nc.get(e);
      if (h !== void 0) {
        var v = ro,
          w = e;
        switch (e) {
          case "keypress":
            if (ss(n) === 0) break e;
          case "keydown":
          case "keyup":
            v = zp;
            break;
          case "focusin":
            (w = "focus"), (v = ml);
            break;
          case "focusout":
            (w = "blur"), (v = ml);
            break;
          case "beforeblur":
          case "afterblur":
            v = ml;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            v = oa;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            v = kp;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            v = Op;
            break;
          case yc:
          case wc:
          case kc:
            v = jp;
            break;
          case Sc:
            v = Fp;
            break;
          case "scroll":
            v = yp;
            break;
          case "wheel":
            v = $p;
            break;
          case "copy":
          case "cut":
          case "paste":
            v = bp;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            v = ua;
        }
        var x = (t & 4) !== 0,
          E = !x && e === "scroll",
          f = x ? (h !== null ? h + "Capture" : null) : h;
        x = [];
        for (var d = c, m; d !== null; ) {
          m = d;
          var y = m.stateNode;
          if (
            (m.tag === 5 &&
              y !== null &&
              ((m = y),
              f !== null && ((y = ir(d, f)), y != null && x.push(pr(d, y, m)))),
            E)
          )
            break;
          d = d.return;
        }
        0 < x.length &&
          ((h = new v(h, w, null, n, p)), g.push({ event: h, listeners: x }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((h = e === "mouseover" || e === "pointerover"),
          (v = e === "mouseout" || e === "pointerout"),
          h &&
            n !== ql &&
            (w = n.relatedTarget || n.fromElement) &&
            (Ot(w) || w[nt]))
        )
          break e;
        if (
          (v || h) &&
          ((h =
            p.window === p
              ? p
              : (h = p.ownerDocument)
              ? h.defaultView || h.parentWindow
              : window),
          v
            ? ((w = n.relatedTarget || n.toElement),
              (v = c),
              (w = w ? Ot(w) : null),
              w !== null &&
                ((E = qt(w)), w !== E || (w.tag !== 5 && w.tag !== 6)) &&
                (w = null))
            : ((v = null), (w = c)),
          v !== w)
        ) {
          if (
            ((x = oa),
            (y = "onMouseLeave"),
            (f = "onMouseEnter"),
            (d = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((x = ua),
              (y = "onPointerLeave"),
              (f = "onPointerEnter"),
              (d = "pointer")),
            (E = v == null ? h : ln(v)),
            (m = w == null ? h : ln(w)),
            (h = new x(y, d + "leave", v, n, p)),
            (h.target = E),
            (h.relatedTarget = m),
            (y = null),
            Ot(p) === c &&
              ((x = new x(f, d + "enter", w, n, p)),
              (x.target = m),
              (x.relatedTarget = E),
              (y = x)),
            (E = y),
            v && w)
          )
            t: {
              for (x = v, f = w, d = 0, m = x; m; m = Jt(m)) d++;
              for (m = 0, y = f; y; y = Jt(y)) m++;
              for (; 0 < d - m; ) (x = Jt(x)), d--;
              for (; 0 < m - d; ) (f = Jt(f)), m--;
              for (; d--; ) {
                if (x === f || (f !== null && x === f.alternate)) break t;
                (x = Jt(x)), (f = Jt(f));
              }
              x = null;
            }
          else x = null;
          v !== null && wa(g, h, v, x, !1),
            w !== null && E !== null && wa(g, E, w, x, !0);
        }
      }
      e: {
        if (
          ((h = c ? ln(c) : window),
          (v = h.nodeName && h.nodeName.toLowerCase()),
          v === "select" || (v === "input" && h.type === "file"))
        )
          var k = Qp;
        else if (fa(h))
          if (mc) k = qp;
          else {
            k = Yp;
            var j = Gp;
          }
        else
          (v = h.nodeName) &&
            v.toLowerCase() === "input" &&
            (h.type === "checkbox" || h.type === "radio") &&
            (k = Xp);
        if (k && (k = k(e, c))) {
          pc(g, k, n, p);
          break e;
        }
        j && j(e, h, c),
          e === "focusout" &&
            (j = h._wrapperState) &&
            j.controlled &&
            h.type === "number" &&
            Kl(h, "number", h.value);
      }
      switch (((j = c ? ln(c) : window), e)) {
        case "focusin":
          (fa(j) || j.contentEditable === "true") &&
            ((rn = j), (si = c), (Zn = null));
          break;
        case "focusout":
          Zn = si = rn = null;
          break;
        case "mousedown":
          li = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (li = !1), va(g, n, p);
          break;
        case "selectionchange":
          if (em) break;
        case "keydown":
        case "keyup":
          va(g, n, p);
      }
      var C;
      if (lo)
        e: {
          switch (e) {
            case "compositionstart":
              var N = "onCompositionStart";
              break e;
            case "compositionend":
              N = "onCompositionEnd";
              break e;
            case "compositionupdate":
              N = "onCompositionUpdate";
              break e;
          }
          N = void 0;
        }
      else
        nn
          ? dc(e, n) && (N = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (N = "onCompositionStart");
      N &&
        (cc &&
          n.locale !== "ko" &&
          (nn || N !== "onCompositionStart"
            ? N === "onCompositionEnd" && nn && (C = uc())
            : ((ht = p),
              (no = "value" in ht ? ht.value : ht.textContent),
              (nn = !0))),
        (j = ks(c, N)),
        0 < j.length &&
          ((N = new aa(N, e, null, n, p)),
          g.push({ event: N, listeners: j }),
          C ? (N.data = C) : ((C = fc(n)), C !== null && (N.data = C)))),
        (C = Vp ? Bp(e, n) : Wp(e, n)) &&
          ((c = ks(c, "onBeforeInput")),
          0 < c.length &&
            ((p = new aa("onBeforeInput", "beforeinput", null, n, p)),
            g.push({ event: p, listeners: c }),
            (p.data = C)));
    }
    jc(g, t);
  });
}
function pr(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function ks(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var s = e,
      l = s.stateNode;
    s.tag === 5 &&
      l !== null &&
      ((s = l),
      (l = ir(e, n)),
      l != null && r.unshift(pr(e, l, s)),
      (l = ir(e, t)),
      l != null && r.push(pr(e, l, s))),
      (e = e.return);
  }
  return r;
}
function Jt(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function wa(e, t, n, r, s) {
  for (var l = t._reactName, i = []; n !== null && n !== r; ) {
    var o = n,
      a = o.alternate,
      c = o.stateNode;
    if (a !== null && a === r) break;
    o.tag === 5 &&
      c !== null &&
      ((o = c),
      s
        ? ((a = ir(n, l)), a != null && i.unshift(pr(n, a, o)))
        : s || ((a = ir(n, l)), a != null && i.push(pr(n, a, o)))),
      (n = n.return);
  }
  i.length !== 0 && e.push({ event: t, listeners: i });
}
var sm = /\r\n?/g,
  lm = /\u0000|\uFFFD/g;
function ka(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      sm,
      `
`
    )
    .replace(lm, "");
}
function Wr(e, t, n) {
  if (((t = ka(t)), ka(e) !== t && n)) throw Error(S(425));
}
function Ss() {}
var ii = null,
  oi = null;
function ai(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var ui = typeof setTimeout == "function" ? setTimeout : void 0,
  im = typeof clearTimeout == "function" ? clearTimeout : void 0,
  Sa = typeof Promise == "function" ? Promise : void 0,
  om =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof Sa < "u"
      ? function (e) {
          return Sa.resolve(null).then(e).catch(am);
        }
      : ui;
function am(e) {
  setTimeout(function () {
    throw e;
  });
}
function Sl(e, t) {
  var n = t,
    r = 0;
  do {
    var s = n.nextSibling;
    if ((e.removeChild(n), s && s.nodeType === 8))
      if (((n = s.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(s), ur(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = s;
  } while (n);
  ur(t);
}
function wt(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function Na(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var Mn = Math.random().toString(36).slice(2),
  Ke = "__reactFiber$" + Mn,
  mr = "__reactProps$" + Mn,
  nt = "__reactContainer$" + Mn,
  ci = "__reactEvents$" + Mn,
  um = "__reactListeners$" + Mn,
  cm = "__reactHandles$" + Mn;
function Ot(e) {
  var t = e[Ke];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[nt] || n[Ke])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = Na(e); e !== null; ) {
          if ((n = e[Ke])) return n;
          e = Na(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function Er(e) {
  return (
    (e = e[Ke] || e[nt]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function ln(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(S(33));
}
function Qs(e) {
  return e[mr] || null;
}
var di = [],
  on = -1;
function _t(e) {
  return { current: e };
}
function B(e) {
  0 > on || ((e.current = di[on]), (di[on] = null), on--);
}
function $(e, t) {
  on++, (di[on] = e.current), (e.current = t);
}
var bt = {},
  fe = _t(bt),
  we = _t(!1),
  Wt = bt;
function Nn(e, t) {
  var n = e.type.contextTypes;
  if (!n) return bt;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var s = {},
    l;
  for (l in n) s[l] = t[l];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = s)),
    s
  );
}
function ke(e) {
  return (e = e.childContextTypes), e != null;
}
function Ns() {
  B(we), B(fe);
}
function ja(e, t, n) {
  if (fe.current !== bt) throw Error(S(168));
  $(fe, t), $(we, n);
}
function bc(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var s in r) if (!(s in t)) throw Error(S(108, Gf(e) || "Unknown", s));
  return Q({}, n, r);
}
function js(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || bt),
    (Wt = fe.current),
    $(fe, e),
    $(we, we.current),
    !0
  );
}
function Ca(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(S(169));
  n
    ? ((e = bc(e, t, Wt)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      B(we),
      B(fe),
      $(fe, e))
    : B(we),
    $(we, n);
}
var qe = null,
  Gs = !1,
  Nl = !1;
function Ec(e) {
  qe === null ? (qe = [e]) : qe.push(e);
}
function dm(e) {
  (Gs = !0), Ec(e);
}
function Tt() {
  if (!Nl && qe !== null) {
    Nl = !0;
    var e = 0,
      t = D;
    try {
      var n = qe;
      for (D = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (qe = null), (Gs = !1);
    } catch (s) {
      throw (qe !== null && (qe = qe.slice(e + 1)), Zu(Zi, Tt), s);
    } finally {
      (D = t), (Nl = !1);
    }
  }
  return null;
}
var an = [],
  un = 0,
  Cs = null,
  bs = 0,
  Re = [],
  Me = 0,
  Ht = null,
  Ze = 1,
  Je = "";
function zt(e, t) {
  (an[un++] = bs), (an[un++] = Cs), (Cs = e), (bs = t);
}
function _c(e, t, n) {
  (Re[Me++] = Ze), (Re[Me++] = Je), (Re[Me++] = Ht), (Ht = e);
  var r = Ze;
  e = Je;
  var s = 32 - Ue(r) - 1;
  (r &= ~(1 << s)), (n += 1);
  var l = 32 - Ue(t) + s;
  if (30 < l) {
    var i = s - (s % 5);
    (l = (r & ((1 << i) - 1)).toString(32)),
      (r >>= i),
      (s -= i),
      (Ze = (1 << (32 - Ue(t) + s)) | (n << s) | r),
      (Je = l + e);
  } else (Ze = (1 << l) | (n << s) | r), (Je = e);
}
function oo(e) {
  e.return !== null && (zt(e, 1), _c(e, 1, 0));
}
function ao(e) {
  for (; e === Cs; )
    (Cs = an[--un]), (an[un] = null), (bs = an[--un]), (an[un] = null);
  for (; e === Ht; )
    (Ht = Re[--Me]),
      (Re[Me] = null),
      (Je = Re[--Me]),
      (Re[Me] = null),
      (Ze = Re[--Me]),
      (Re[Me] = null);
}
var be = null,
  Ce = null,
  W = !1,
  $e = null;
function Tc(e, t) {
  var n = ze(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function ba(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (be = e), (Ce = wt(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (be = e), (Ce = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = Ht !== null ? { id: Ze, overflow: Je } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = ze(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (be = e),
            (Ce = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function fi(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function pi(e) {
  if (W) {
    var t = Ce;
    if (t) {
      var n = t;
      if (!ba(e, t)) {
        if (fi(e)) throw Error(S(418));
        t = wt(n.nextSibling);
        var r = be;
        t && ba(e, t)
          ? Tc(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (W = !1), (be = e));
      }
    } else {
      if (fi(e)) throw Error(S(418));
      (e.flags = (e.flags & -4097) | 2), (W = !1), (be = e);
    }
  }
}
function Ea(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  be = e;
}
function Hr(e) {
  if (e !== be) return !1;
  if (!W) return Ea(e), (W = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !ai(e.type, e.memoizedProps))),
    t && (t = Ce))
  ) {
    if (fi(e)) throw (Pc(), Error(S(418)));
    for (; t; ) Tc(e, t), (t = wt(t.nextSibling));
  }
  if ((Ea(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(S(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Ce = wt(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      Ce = null;
    }
  } else Ce = be ? wt(e.stateNode.nextSibling) : null;
  return !0;
}
function Pc() {
  for (var e = Ce; e; ) e = wt(e.nextSibling);
}
function jn() {
  (Ce = be = null), (W = !1);
}
function uo(e) {
  $e === null ? ($e = [e]) : $e.push(e);
}
var fm = lt.ReactCurrentBatchConfig;
function Dn(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(S(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(S(147, e));
      var s = r,
        l = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === l
        ? t.ref
        : ((t = function (i) {
            var o = s.refs;
            i === null ? delete o[l] : (o[l] = i);
          }),
          (t._stringRef = l),
          t);
    }
    if (typeof e != "string") throw Error(S(284));
    if (!n._owner) throw Error(S(290, e));
  }
  return e;
}
function Kr(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      S(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function _a(e) {
  var t = e._init;
  return t(e._payload);
}
function Rc(e) {
  function t(f, d) {
    if (e) {
      var m = f.deletions;
      m === null ? ((f.deletions = [d]), (f.flags |= 16)) : m.push(d);
    }
  }
  function n(f, d) {
    if (!e) return null;
    for (; d !== null; ) t(f, d), (d = d.sibling);
    return null;
  }
  function r(f, d) {
    for (f = new Map(); d !== null; )
      d.key !== null ? f.set(d.key, d) : f.set(d.index, d), (d = d.sibling);
    return f;
  }
  function s(f, d) {
    return (f = jt(f, d)), (f.index = 0), (f.sibling = null), f;
  }
  function l(f, d, m) {
    return (
      (f.index = m),
      e
        ? ((m = f.alternate),
          m !== null
            ? ((m = m.index), m < d ? ((f.flags |= 2), d) : m)
            : ((f.flags |= 2), d))
        : ((f.flags |= 1048576), d)
    );
  }
  function i(f) {
    return e && f.alternate === null && (f.flags |= 2), f;
  }
  function o(f, d, m, y) {
    return d === null || d.tag !== 6
      ? ((d = Pl(m, f.mode, y)), (d.return = f), d)
      : ((d = s(d, m)), (d.return = f), d);
  }
  function a(f, d, m, y) {
    var k = m.type;
    return k === tn
      ? p(f, d, m.props.children, y, m.key)
      : d !== null &&
        (d.elementType === k ||
          (typeof k == "object" &&
            k !== null &&
            k.$$typeof === dt &&
            _a(k) === d.type))
      ? ((y = s(d, m.props)), (y.ref = Dn(f, d, m)), (y.return = f), y)
      : ((y = ds(m.type, m.key, m.props, null, f.mode, y)),
        (y.ref = Dn(f, d, m)),
        (y.return = f),
        y);
  }
  function c(f, d, m, y) {
    return d === null ||
      d.tag !== 4 ||
      d.stateNode.containerInfo !== m.containerInfo ||
      d.stateNode.implementation !== m.implementation
      ? ((d = Rl(m, f.mode, y)), (d.return = f), d)
      : ((d = s(d, m.children || [])), (d.return = f), d);
  }
  function p(f, d, m, y, k) {
    return d === null || d.tag !== 7
      ? ((d = Ut(m, f.mode, y, k)), (d.return = f), d)
      : ((d = s(d, m)), (d.return = f), d);
  }
  function g(f, d, m) {
    if ((typeof d == "string" && d !== "") || typeof d == "number")
      return (d = Pl("" + d, f.mode, m)), (d.return = f), d;
    if (typeof d == "object" && d !== null) {
      switch (d.$$typeof) {
        case Ir:
          return (
            (m = ds(d.type, d.key, d.props, null, f.mode, m)),
            (m.ref = Dn(f, null, d)),
            (m.return = f),
            m
          );
        case en:
          return (d = Rl(d, f.mode, m)), (d.return = f), d;
        case dt:
          var y = d._init;
          return g(f, y(d._payload), m);
      }
      if (Hn(d) || Ln(d))
        return (d = Ut(d, f.mode, m, null)), (d.return = f), d;
      Kr(f, d);
    }
    return null;
  }
  function h(f, d, m, y) {
    var k = d !== null ? d.key : null;
    if ((typeof m == "string" && m !== "") || typeof m == "number")
      return k !== null ? null : o(f, d, "" + m, y);
    if (typeof m == "object" && m !== null) {
      switch (m.$$typeof) {
        case Ir:
          return m.key === k ? a(f, d, m, y) : null;
        case en:
          return m.key === k ? c(f, d, m, y) : null;
        case dt:
          return (k = m._init), h(f, d, k(m._payload), y);
      }
      if (Hn(m) || Ln(m)) return k !== null ? null : p(f, d, m, y, null);
      Kr(f, m);
    }
    return null;
  }
  function v(f, d, m, y, k) {
    if ((typeof y == "string" && y !== "") || typeof y == "number")
      return (f = f.get(m) || null), o(d, f, "" + y, k);
    if (typeof y == "object" && y !== null) {
      switch (y.$$typeof) {
        case Ir:
          return (f = f.get(y.key === null ? m : y.key) || null), a(d, f, y, k);
        case en:
          return (f = f.get(y.key === null ? m : y.key) || null), c(d, f, y, k);
        case dt:
          var j = y._init;
          return v(f, d, m, j(y._payload), k);
      }
      if (Hn(y) || Ln(y)) return (f = f.get(m) || null), p(d, f, y, k, null);
      Kr(d, y);
    }
    return null;
  }
  function w(f, d, m, y) {
    for (
      var k = null, j = null, C = d, N = (d = 0), z = null;
      C !== null && N < m.length;
      N++
    ) {
      C.index > N ? ((z = C), (C = null)) : (z = C.sibling);
      var T = h(f, C, m[N], y);
      if (T === null) {
        C === null && (C = z);
        break;
      }
      e && C && T.alternate === null && t(f, C),
        (d = l(T, d, N)),
        j === null ? (k = T) : (j.sibling = T),
        (j = T),
        (C = z);
    }
    if (N === m.length) return n(f, C), W && zt(f, N), k;
    if (C === null) {
      for (; N < m.length; N++)
        (C = g(f, m[N], y)),
          C !== null &&
            ((d = l(C, d, N)), j === null ? (k = C) : (j.sibling = C), (j = C));
      return W && zt(f, N), k;
    }
    for (C = r(f, C); N < m.length; N++)
      (z = v(C, f, N, m[N], y)),
        z !== null &&
          (e && z.alternate !== null && C.delete(z.key === null ? N : z.key),
          (d = l(z, d, N)),
          j === null ? (k = z) : (j.sibling = z),
          (j = z));
    return (
      e &&
        C.forEach(function (oe) {
          return t(f, oe);
        }),
      W && zt(f, N),
      k
    );
  }
  function x(f, d, m, y) {
    var k = Ln(m);
    if (typeof k != "function") throw Error(S(150));
    if (((m = k.call(m)), m == null)) throw Error(S(151));
    for (
      var j = (k = null), C = d, N = (d = 0), z = null, T = m.next();
      C !== null && !T.done;
      N++, T = m.next()
    ) {
      C.index > N ? ((z = C), (C = null)) : (z = C.sibling);
      var oe = h(f, C, T.value, y);
      if (oe === null) {
        C === null && (C = z);
        break;
      }
      e && C && oe.alternate === null && t(f, C),
        (d = l(oe, d, N)),
        j === null ? (k = oe) : (j.sibling = oe),
        (j = oe),
        (C = z);
    }
    if (T.done) return n(f, C), W && zt(f, N), k;
    if (C === null) {
      for (; !T.done; N++, T = m.next())
        (T = g(f, T.value, y)),
          T !== null &&
            ((d = l(T, d, N)), j === null ? (k = T) : (j.sibling = T), (j = T));
      return W && zt(f, N), k;
    }
    for (C = r(f, C); !T.done; N++, T = m.next())
      (T = v(C, f, N, T.value, y)),
        T !== null &&
          (e && T.alternate !== null && C.delete(T.key === null ? N : T.key),
          (d = l(T, d, N)),
          j === null ? (k = T) : (j.sibling = T),
          (j = T));
    return (
      e &&
        C.forEach(function (F) {
          return t(f, F);
        }),
      W && zt(f, N),
      k
    );
  }
  function E(f, d, m, y) {
    if (
      (typeof m == "object" &&
        m !== null &&
        m.type === tn &&
        m.key === null &&
        (m = m.props.children),
      typeof m == "object" && m !== null)
    ) {
      switch (m.$$typeof) {
        case Ir:
          e: {
            for (var k = m.key, j = d; j !== null; ) {
              if (j.key === k) {
                if (((k = m.type), k === tn)) {
                  if (j.tag === 7) {
                    n(f, j.sibling),
                      (d = s(j, m.props.children)),
                      (d.return = f),
                      (f = d);
                    break e;
                  }
                } else if (
                  j.elementType === k ||
                  (typeof k == "object" &&
                    k !== null &&
                    k.$$typeof === dt &&
                    _a(k) === j.type)
                ) {
                  n(f, j.sibling),
                    (d = s(j, m.props)),
                    (d.ref = Dn(f, j, m)),
                    (d.return = f),
                    (f = d);
                  break e;
                }
                n(f, j);
                break;
              } else t(f, j);
              j = j.sibling;
            }
            m.type === tn
              ? ((d = Ut(m.props.children, f.mode, y, m.key)),
                (d.return = f),
                (f = d))
              : ((y = ds(m.type, m.key, m.props, null, f.mode, y)),
                (y.ref = Dn(f, d, m)),
                (y.return = f),
                (f = y));
          }
          return i(f);
        case en:
          e: {
            for (j = m.key; d !== null; ) {
              if (d.key === j)
                if (
                  d.tag === 4 &&
                  d.stateNode.containerInfo === m.containerInfo &&
                  d.stateNode.implementation === m.implementation
                ) {
                  n(f, d.sibling),
                    (d = s(d, m.children || [])),
                    (d.return = f),
                    (f = d);
                  break e;
                } else {
                  n(f, d);
                  break;
                }
              else t(f, d);
              d = d.sibling;
            }
            (d = Rl(m, f.mode, y)), (d.return = f), (f = d);
          }
          return i(f);
        case dt:
          return (j = m._init), E(f, d, j(m._payload), y);
      }
      if (Hn(m)) return w(f, d, m, y);
      if (Ln(m)) return x(f, d, m, y);
      Kr(f, m);
    }
    return (typeof m == "string" && m !== "") || typeof m == "number"
      ? ((m = "" + m),
        d !== null && d.tag === 6
          ? (n(f, d.sibling), (d = s(d, m)), (d.return = f), (f = d))
          : (n(f, d), (d = Pl(m, f.mode, y)), (d.return = f), (f = d)),
        i(f))
      : n(f, d);
  }
  return E;
}
var Cn = Rc(!0),
  Mc = Rc(!1),
  Es = _t(null),
  _s = null,
  cn = null,
  co = null;
function fo() {
  co = cn = _s = null;
}
function po(e) {
  var t = Es.current;
  B(Es), (e._currentValue = t);
}
function mi(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function xn(e, t) {
  (_s = e),
    (co = cn = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (ye = !0), (e.firstContext = null));
}
function Ie(e) {
  var t = e._currentValue;
  if (co !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), cn === null)) {
      if (_s === null) throw Error(S(308));
      (cn = e), (_s.dependencies = { lanes: 0, firstContext: e });
    } else cn = cn.next = e;
  return t;
}
var At = null;
function mo(e) {
  At === null ? (At = [e]) : At.push(e);
}
function zc(e, t, n, r) {
  var s = t.interleaved;
  return (
    s === null ? ((n.next = n), mo(t)) : ((n.next = s.next), (s.next = n)),
    (t.interleaved = n),
    rt(e, r)
  );
}
function rt(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var ft = !1;
function ho(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function Lc(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function et(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function kt(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), O & 2)) {
    var s = r.pending;
    return (
      s === null ? (t.next = t) : ((t.next = s.next), (s.next = t)),
      (r.pending = t),
      rt(e, n)
    );
  }
  return (
    (s = r.interleaved),
    s === null ? ((t.next = t), mo(r)) : ((t.next = s.next), (s.next = t)),
    (r.interleaved = t),
    rt(e, n)
  );
}
function ls(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Ji(e, n);
  }
}
function Ta(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var s = null,
      l = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var i = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        l === null ? (s = l = i) : (l = l.next = i), (n = n.next);
      } while (n !== null);
      l === null ? (s = l = t) : (l = l.next = t);
    } else s = l = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: s,
      lastBaseUpdate: l,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function Ts(e, t, n, r) {
  var s = e.updateQueue;
  ft = !1;
  var l = s.firstBaseUpdate,
    i = s.lastBaseUpdate,
    o = s.shared.pending;
  if (o !== null) {
    s.shared.pending = null;
    var a = o,
      c = a.next;
    (a.next = null), i === null ? (l = c) : (i.next = c), (i = a);
    var p = e.alternate;
    p !== null &&
      ((p = p.updateQueue),
      (o = p.lastBaseUpdate),
      o !== i &&
        (o === null ? (p.firstBaseUpdate = c) : (o.next = c),
        (p.lastBaseUpdate = a)));
  }
  if (l !== null) {
    var g = s.baseState;
    (i = 0), (p = c = a = null), (o = l);
    do {
      var h = o.lane,
        v = o.eventTime;
      if ((r & h) === h) {
        p !== null &&
          (p = p.next =
            {
              eventTime: v,
              lane: 0,
              tag: o.tag,
              payload: o.payload,
              callback: o.callback,
              next: null,
            });
        e: {
          var w = e,
            x = o;
          switch (((h = t), (v = n), x.tag)) {
            case 1:
              if (((w = x.payload), typeof w == "function")) {
                g = w.call(v, g, h);
                break e;
              }
              g = w;
              break e;
            case 3:
              w.flags = (w.flags & -65537) | 128;
            case 0:
              if (
                ((w = x.payload),
                (h = typeof w == "function" ? w.call(v, g, h) : w),
                h == null)
              )
                break e;
              g = Q({}, g, h);
              break e;
            case 2:
              ft = !0;
          }
        }
        o.callback !== null &&
          o.lane !== 0 &&
          ((e.flags |= 64),
          (h = s.effects),
          h === null ? (s.effects = [o]) : h.push(o));
      } else
        (v = {
          eventTime: v,
          lane: h,
          tag: o.tag,
          payload: o.payload,
          callback: o.callback,
          next: null,
        }),
          p === null ? ((c = p = v), (a = g)) : (p = p.next = v),
          (i |= h);
      if (((o = o.next), o === null)) {
        if (((o = s.shared.pending), o === null)) break;
        (h = o),
          (o = h.next),
          (h.next = null),
          (s.lastBaseUpdate = h),
          (s.shared.pending = null);
      }
    } while (!0);
    if (
      (p === null && (a = g),
      (s.baseState = a),
      (s.firstBaseUpdate = c),
      (s.lastBaseUpdate = p),
      (t = s.shared.interleaved),
      t !== null)
    ) {
      s = t;
      do (i |= s.lane), (s = s.next);
      while (s !== t);
    } else l === null && (s.shared.lanes = 0);
    (Qt |= i), (e.lanes = i), (e.memoizedState = g);
  }
}
function Pa(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        s = r.callback;
      if (s !== null) {
        if (((r.callback = null), (r = n), typeof s != "function"))
          throw Error(S(191, s));
        s.call(r);
      }
    }
}
var _r = {},
  Ge = _t(_r),
  hr = _t(_r),
  gr = _t(_r);
function Ft(e) {
  if (e === _r) throw Error(S(174));
  return e;
}
function go(e, t) {
  switch (($(gr, t), $(hr, e), $(Ge, _r), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Gl(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = Gl(t, e));
  }
  B(Ge), $(Ge, t);
}
function bn() {
  B(Ge), B(hr), B(gr);
}
function Ic(e) {
  Ft(gr.current);
  var t = Ft(Ge.current),
    n = Gl(t, e.type);
  t !== n && ($(hr, e), $(Ge, n));
}
function vo(e) {
  hr.current === e && (B(Ge), B(hr));
}
var H = _t(0);
function Ps(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var jl = [];
function xo() {
  for (var e = 0; e < jl.length; e++)
    jl[e]._workInProgressVersionPrimary = null;
  jl.length = 0;
}
var is = lt.ReactCurrentDispatcher,
  Cl = lt.ReactCurrentBatchConfig,
  Kt = 0,
  K = null,
  Z = null,
  ne = null,
  Rs = !1,
  Jn = !1,
  vr = 0,
  pm = 0;
function ae() {
  throw Error(S(321));
}
function yo(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!Be(e[n], t[n])) return !1;
  return !0;
}
function wo(e, t, n, r, s, l) {
  if (
    ((Kt = l),
    (K = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (is.current = e === null || e.memoizedState === null ? vm : xm),
    (e = n(r, s)),
    Jn)
  ) {
    l = 0;
    do {
      if (((Jn = !1), (vr = 0), 25 <= l)) throw Error(S(301));
      (l += 1),
        (ne = Z = null),
        (t.updateQueue = null),
        (is.current = ym),
        (e = n(r, s));
    } while (Jn);
  }
  if (
    ((is.current = Ms),
    (t = Z !== null && Z.next !== null),
    (Kt = 0),
    (ne = Z = K = null),
    (Rs = !1),
    t)
  )
    throw Error(S(300));
  return e;
}
function ko() {
  var e = vr !== 0;
  return (vr = 0), e;
}
function He() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return ne === null ? (K.memoizedState = ne = e) : (ne = ne.next = e), ne;
}
function Oe() {
  if (Z === null) {
    var e = K.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = Z.next;
  var t = ne === null ? K.memoizedState : ne.next;
  if (t !== null) (ne = t), (Z = e);
  else {
    if (e === null) throw Error(S(310));
    (Z = e),
      (e = {
        memoizedState: Z.memoizedState,
        baseState: Z.baseState,
        baseQueue: Z.baseQueue,
        queue: Z.queue,
        next: null,
      }),
      ne === null ? (K.memoizedState = ne = e) : (ne = ne.next = e);
  }
  return ne;
}
function xr(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function bl(e) {
  var t = Oe(),
    n = t.queue;
  if (n === null) throw Error(S(311));
  n.lastRenderedReducer = e;
  var r = Z,
    s = r.baseQueue,
    l = n.pending;
  if (l !== null) {
    if (s !== null) {
      var i = s.next;
      (s.next = l.next), (l.next = i);
    }
    (r.baseQueue = s = l), (n.pending = null);
  }
  if (s !== null) {
    (l = s.next), (r = r.baseState);
    var o = (i = null),
      a = null,
      c = l;
    do {
      var p = c.lane;
      if ((Kt & p) === p)
        a !== null &&
          (a = a.next =
            {
              lane: 0,
              action: c.action,
              hasEagerState: c.hasEagerState,
              eagerState: c.eagerState,
              next: null,
            }),
          (r = c.hasEagerState ? c.eagerState : e(r, c.action));
      else {
        var g = {
          lane: p,
          action: c.action,
          hasEagerState: c.hasEagerState,
          eagerState: c.eagerState,
          next: null,
        };
        a === null ? ((o = a = g), (i = r)) : (a = a.next = g),
          (K.lanes |= p),
          (Qt |= p);
      }
      c = c.next;
    } while (c !== null && c !== l);
    a === null ? (i = r) : (a.next = o),
      Be(r, t.memoizedState) || (ye = !0),
      (t.memoizedState = r),
      (t.baseState = i),
      (t.baseQueue = a),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    s = e;
    do (l = s.lane), (K.lanes |= l), (Qt |= l), (s = s.next);
    while (s !== e);
  } else s === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function El(e) {
  var t = Oe(),
    n = t.queue;
  if (n === null) throw Error(S(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    s = n.pending,
    l = t.memoizedState;
  if (s !== null) {
    n.pending = null;
    var i = (s = s.next);
    do (l = e(l, i.action)), (i = i.next);
    while (i !== s);
    Be(l, t.memoizedState) || (ye = !0),
      (t.memoizedState = l),
      t.baseQueue === null && (t.baseState = l),
      (n.lastRenderedState = l);
  }
  return [l, r];
}
function Oc() {}
function Ac(e, t) {
  var n = K,
    r = Oe(),
    s = t(),
    l = !Be(r.memoizedState, s);
  if (
    (l && ((r.memoizedState = s), (ye = !0)),
    (r = r.queue),
    So($c.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || l || (ne !== null && ne.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      yr(9, Dc.bind(null, n, r, s, t), void 0, null),
      re === null)
    )
      throw Error(S(349));
    Kt & 30 || Fc(n, t, s);
  }
  return s;
}
function Fc(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = K.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (K.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function Dc(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), Uc(t) && Vc(e);
}
function $c(e, t, n) {
  return n(function () {
    Uc(t) && Vc(e);
  });
}
function Uc(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Be(e, n);
  } catch {
    return !0;
  }
}
function Vc(e) {
  var t = rt(e, 1);
  t !== null && Ve(t, e, 1, -1);
}
function Ra(e) {
  var t = He();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: xr,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = gm.bind(null, K, e)),
    [t.memoizedState, e]
  );
}
function yr(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = K.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (K.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function Bc() {
  return Oe().memoizedState;
}
function os(e, t, n, r) {
  var s = He();
  (K.flags |= e),
    (s.memoizedState = yr(1 | t, n, void 0, r === void 0 ? null : r));
}
function Ys(e, t, n, r) {
  var s = Oe();
  r = r === void 0 ? null : r;
  var l = void 0;
  if (Z !== null) {
    var i = Z.memoizedState;
    if (((l = i.destroy), r !== null && yo(r, i.deps))) {
      s.memoizedState = yr(t, n, l, r);
      return;
    }
  }
  (K.flags |= e), (s.memoizedState = yr(1 | t, n, l, r));
}
function Ma(e, t) {
  return os(8390656, 8, e, t);
}
function So(e, t) {
  return Ys(2048, 8, e, t);
}
function Wc(e, t) {
  return Ys(4, 2, e, t);
}
function Hc(e, t) {
  return Ys(4, 4, e, t);
}
function Kc(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function Qc(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), Ys(4, 4, Kc.bind(null, t, e), n)
  );
}
function No() {}
function Gc(e, t) {
  var n = Oe();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && yo(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function Yc(e, t) {
  var n = Oe();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && yo(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function Xc(e, t, n) {
  return Kt & 21
    ? (Be(n, t) || ((n = tc()), (K.lanes |= n), (Qt |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (ye = !0)), (e.memoizedState = n));
}
function mm(e, t) {
  var n = D;
  (D = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = Cl.transition;
  Cl.transition = {};
  try {
    e(!1), t();
  } finally {
    (D = n), (Cl.transition = r);
  }
}
function qc() {
  return Oe().memoizedState;
}
function hm(e, t, n) {
  var r = Nt(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    Zc(e))
  )
    Jc(t, n);
  else if (((n = zc(e, t, n, r)), n !== null)) {
    var s = me();
    Ve(n, e, r, s), ed(n, t, r);
  }
}
function gm(e, t, n) {
  var r = Nt(e),
    s = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Zc(e)) Jc(t, s);
  else {
    var l = e.alternate;
    if (
      e.lanes === 0 &&
      (l === null || l.lanes === 0) &&
      ((l = t.lastRenderedReducer), l !== null)
    )
      try {
        var i = t.lastRenderedState,
          o = l(i, n);
        if (((s.hasEagerState = !0), (s.eagerState = o), Be(o, i))) {
          var a = t.interleaved;
          a === null
            ? ((s.next = s), mo(t))
            : ((s.next = a.next), (a.next = s)),
            (t.interleaved = s);
          return;
        }
      } catch {
      } finally {
      }
    (n = zc(e, t, s, r)),
      n !== null && ((s = me()), Ve(n, e, r, s), ed(n, t, r));
  }
}
function Zc(e) {
  var t = e.alternate;
  return e === K || (t !== null && t === K);
}
function Jc(e, t) {
  Jn = Rs = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function ed(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Ji(e, n);
  }
}
var Ms = {
    readContext: Ie,
    useCallback: ae,
    useContext: ae,
    useEffect: ae,
    useImperativeHandle: ae,
    useInsertionEffect: ae,
    useLayoutEffect: ae,
    useMemo: ae,
    useReducer: ae,
    useRef: ae,
    useState: ae,
    useDebugValue: ae,
    useDeferredValue: ae,
    useTransition: ae,
    useMutableSource: ae,
    useSyncExternalStore: ae,
    useId: ae,
    unstable_isNewReconciler: !1,
  },
  vm = {
    readContext: Ie,
    useCallback: function (e, t) {
      return (He().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: Ie,
    useEffect: Ma,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        os(4194308, 4, Kc.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return os(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return os(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = He();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = He();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = hm.bind(null, K, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = He();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: Ra,
    useDebugValue: No,
    useDeferredValue: function (e) {
      return (He().memoizedState = e);
    },
    useTransition: function () {
      var e = Ra(!1),
        t = e[0];
      return (e = mm.bind(null, e[1])), (He().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = K,
        s = He();
      if (W) {
        if (n === void 0) throw Error(S(407));
        n = n();
      } else {
        if (((n = t()), re === null)) throw Error(S(349));
        Kt & 30 || Fc(r, t, n);
      }
      s.memoizedState = n;
      var l = { value: n, getSnapshot: t };
      return (
        (s.queue = l),
        Ma($c.bind(null, r, l, e), [e]),
        (r.flags |= 2048),
        yr(9, Dc.bind(null, r, l, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = He(),
        t = re.identifierPrefix;
      if (W) {
        var n = Je,
          r = Ze;
        (n = (r & ~(1 << (32 - Ue(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = vr++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = pm++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  xm = {
    readContext: Ie,
    useCallback: Gc,
    useContext: Ie,
    useEffect: So,
    useImperativeHandle: Qc,
    useInsertionEffect: Wc,
    useLayoutEffect: Hc,
    useMemo: Yc,
    useReducer: bl,
    useRef: Bc,
    useState: function () {
      return bl(xr);
    },
    useDebugValue: No,
    useDeferredValue: function (e) {
      var t = Oe();
      return Xc(t, Z.memoizedState, e);
    },
    useTransition: function () {
      var e = bl(xr)[0],
        t = Oe().memoizedState;
      return [e, t];
    },
    useMutableSource: Oc,
    useSyncExternalStore: Ac,
    useId: qc,
    unstable_isNewReconciler: !1,
  },
  ym = {
    readContext: Ie,
    useCallback: Gc,
    useContext: Ie,
    useEffect: So,
    useImperativeHandle: Qc,
    useInsertionEffect: Wc,
    useLayoutEffect: Hc,
    useMemo: Yc,
    useReducer: El,
    useRef: Bc,
    useState: function () {
      return El(xr);
    },
    useDebugValue: No,
    useDeferredValue: function (e) {
      var t = Oe();
      return Z === null ? (t.memoizedState = e) : Xc(t, Z.memoizedState, e);
    },
    useTransition: function () {
      var e = El(xr)[0],
        t = Oe().memoizedState;
      return [e, t];
    },
    useMutableSource: Oc,
    useSyncExternalStore: Ac,
    useId: qc,
    unstable_isNewReconciler: !1,
  };
function Fe(e, t) {
  if (e && e.defaultProps) {
    (t = Q({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function hi(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : Q({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Xs = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? qt(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = me(),
      s = Nt(e),
      l = et(r, s);
    (l.payload = t),
      n != null && (l.callback = n),
      (t = kt(e, l, s)),
      t !== null && (Ve(t, e, s, r), ls(t, e, s));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = me(),
      s = Nt(e),
      l = et(r, s);
    (l.tag = 1),
      (l.payload = t),
      n != null && (l.callback = n),
      (t = kt(e, l, s)),
      t !== null && (Ve(t, e, s, r), ls(t, e, s));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = me(),
      r = Nt(e),
      s = et(n, r);
    (s.tag = 2),
      t != null && (s.callback = t),
      (t = kt(e, s, r)),
      t !== null && (Ve(t, e, r, n), ls(t, e, r));
  },
};
function za(e, t, n, r, s, l, i) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, l, i)
      : t.prototype && t.prototype.isPureReactComponent
      ? !dr(n, r) || !dr(s, l)
      : !0
  );
}
function td(e, t, n) {
  var r = !1,
    s = bt,
    l = t.contextType;
  return (
    typeof l == "object" && l !== null
      ? (l = Ie(l))
      : ((s = ke(t) ? Wt : fe.current),
        (r = t.contextTypes),
        (l = (r = r != null) ? Nn(e, s) : bt)),
    (t = new t(n, l)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = Xs),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = s),
      (e.__reactInternalMemoizedMaskedChildContext = l)),
    t
  );
}
function La(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Xs.enqueueReplaceState(t, t.state, null);
}
function gi(e, t, n, r) {
  var s = e.stateNode;
  (s.props = n), (s.state = e.memoizedState), (s.refs = {}), ho(e);
  var l = t.contextType;
  typeof l == "object" && l !== null
    ? (s.context = Ie(l))
    : ((l = ke(t) ? Wt : fe.current), (s.context = Nn(e, l))),
    (s.state = e.memoizedState),
    (l = t.getDerivedStateFromProps),
    typeof l == "function" && (hi(e, t, l, n), (s.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof s.getSnapshotBeforeUpdate == "function" ||
      (typeof s.UNSAFE_componentWillMount != "function" &&
        typeof s.componentWillMount != "function") ||
      ((t = s.state),
      typeof s.componentWillMount == "function" && s.componentWillMount(),
      typeof s.UNSAFE_componentWillMount == "function" &&
        s.UNSAFE_componentWillMount(),
      t !== s.state && Xs.enqueueReplaceState(s, s.state, null),
      Ts(e, n, s, r),
      (s.state = e.memoizedState)),
    typeof s.componentDidMount == "function" && (e.flags |= 4194308);
}
function En(e, t) {
  try {
    var n = "",
      r = t;
    do (n += Qf(r)), (r = r.return);
    while (r);
    var s = n;
  } catch (l) {
    s =
      `
Error generating stack: ` +
      l.message +
      `
` +
      l.stack;
  }
  return { value: e, source: t, stack: s, digest: null };
}
function _l(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function vi(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var wm = typeof WeakMap == "function" ? WeakMap : Map;
function nd(e, t, n) {
  (n = et(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      Ls || ((Ls = !0), (Ei = r)), vi(e, t);
    }),
    n
  );
}
function rd(e, t, n) {
  (n = et(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var s = t.value;
    (n.payload = function () {
      return r(s);
    }),
      (n.callback = function () {
        vi(e, t);
      });
  }
  var l = e.stateNode;
  return (
    l !== null &&
      typeof l.componentDidCatch == "function" &&
      (n.callback = function () {
        vi(e, t),
          typeof r != "function" &&
            (St === null ? (St = new Set([this])) : St.add(this));
        var i = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: i !== null ? i : "",
        });
      }),
    n
  );
}
function Ia(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new wm();
    var s = new Set();
    r.set(t, s);
  } else (s = r.get(t)), s === void 0 && ((s = new Set()), r.set(t, s));
  s.has(n) || (s.add(n), (e = Lm.bind(null, e, t, n)), t.then(e, e));
}
function Oa(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Aa(e, t, n, r, s) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = s), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = et(-1, 1)), (t.tag = 2), kt(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var km = lt.ReactCurrentOwner,
  ye = !1;
function pe(e, t, n, r) {
  t.child = e === null ? Mc(t, null, n, r) : Cn(t, e.child, n, r);
}
function Fa(e, t, n, r, s) {
  n = n.render;
  var l = t.ref;
  return (
    xn(t, s),
    (r = wo(e, t, n, r, l, s)),
    (n = ko()),
    e !== null && !ye
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~s),
        st(e, t, s))
      : (W && n && oo(t), (t.flags |= 1), pe(e, t, r, s), t.child)
  );
}
function Da(e, t, n, r, s) {
  if (e === null) {
    var l = n.type;
    return typeof l == "function" &&
      !Ro(l) &&
      l.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = l), sd(e, t, l, r, s))
      : ((e = ds(n.type, null, r, t, t.mode, s)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((l = e.child), !(e.lanes & s))) {
    var i = l.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : dr), n(i, r) && e.ref === t.ref)
    )
      return st(e, t, s);
  }
  return (
    (t.flags |= 1),
    (e = jt(l, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function sd(e, t, n, r, s) {
  if (e !== null) {
    var l = e.memoizedProps;
    if (dr(l, r) && e.ref === t.ref)
      if (((ye = !1), (t.pendingProps = r = l), (e.lanes & s) !== 0))
        e.flags & 131072 && (ye = !0);
      else return (t.lanes = e.lanes), st(e, t, s);
  }
  return xi(e, t, n, r, s);
}
function ld(e, t, n) {
  var r = t.pendingProps,
    s = r.children,
    l = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        $(fn, Ne),
        (Ne |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = l !== null ? l.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          $(fn, Ne),
          (Ne |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = l !== null ? l.baseLanes : n),
        $(fn, Ne),
        (Ne |= r);
    }
  else
    l !== null ? ((r = l.baseLanes | n), (t.memoizedState = null)) : (r = n),
      $(fn, Ne),
      (Ne |= r);
  return pe(e, t, s, n), t.child;
}
function id(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function xi(e, t, n, r, s) {
  var l = ke(n) ? Wt : fe.current;
  return (
    (l = Nn(t, l)),
    xn(t, s),
    (n = wo(e, t, n, r, l, s)),
    (r = ko()),
    e !== null && !ye
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~s),
        st(e, t, s))
      : (W && r && oo(t), (t.flags |= 1), pe(e, t, n, s), t.child)
  );
}
function $a(e, t, n, r, s) {
  if (ke(n)) {
    var l = !0;
    js(t);
  } else l = !1;
  if ((xn(t, s), t.stateNode === null))
    as(e, t), td(t, n, r), gi(t, n, r, s), (r = !0);
  else if (e === null) {
    var i = t.stateNode,
      o = t.memoizedProps;
    i.props = o;
    var a = i.context,
      c = n.contextType;
    typeof c == "object" && c !== null
      ? (c = Ie(c))
      : ((c = ke(n) ? Wt : fe.current), (c = Nn(t, c)));
    var p = n.getDerivedStateFromProps,
      g =
        typeof p == "function" ||
        typeof i.getSnapshotBeforeUpdate == "function";
    g ||
      (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
        typeof i.componentWillReceiveProps != "function") ||
      ((o !== r || a !== c) && La(t, i, r, c)),
      (ft = !1);
    var h = t.memoizedState;
    (i.state = h),
      Ts(t, r, i, s),
      (a = t.memoizedState),
      o !== r || h !== a || we.current || ft
        ? (typeof p == "function" && (hi(t, n, p, r), (a = t.memoizedState)),
          (o = ft || za(t, n, o, r, h, a, c))
            ? (g ||
                (typeof i.UNSAFE_componentWillMount != "function" &&
                  typeof i.componentWillMount != "function") ||
                (typeof i.componentWillMount == "function" &&
                  i.componentWillMount(),
                typeof i.UNSAFE_componentWillMount == "function" &&
                  i.UNSAFE_componentWillMount()),
              typeof i.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof i.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = a)),
          (i.props = r),
          (i.state = a),
          (i.context = c),
          (r = o))
        : (typeof i.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (i = t.stateNode),
      Lc(e, t),
      (o = t.memoizedProps),
      (c = t.type === t.elementType ? o : Fe(t.type, o)),
      (i.props = c),
      (g = t.pendingProps),
      (h = i.context),
      (a = n.contextType),
      typeof a == "object" && a !== null
        ? (a = Ie(a))
        : ((a = ke(n) ? Wt : fe.current), (a = Nn(t, a)));
    var v = n.getDerivedStateFromProps;
    (p =
      typeof v == "function" ||
      typeof i.getSnapshotBeforeUpdate == "function") ||
      (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
        typeof i.componentWillReceiveProps != "function") ||
      ((o !== g || h !== a) && La(t, i, r, a)),
      (ft = !1),
      (h = t.memoizedState),
      (i.state = h),
      Ts(t, r, i, s);
    var w = t.memoizedState;
    o !== g || h !== w || we.current || ft
      ? (typeof v == "function" && (hi(t, n, v, r), (w = t.memoizedState)),
        (c = ft || za(t, n, c, r, h, w, a) || !1)
          ? (p ||
              (typeof i.UNSAFE_componentWillUpdate != "function" &&
                typeof i.componentWillUpdate != "function") ||
              (typeof i.componentWillUpdate == "function" &&
                i.componentWillUpdate(r, w, a),
              typeof i.UNSAFE_componentWillUpdate == "function" &&
                i.UNSAFE_componentWillUpdate(r, w, a)),
            typeof i.componentDidUpdate == "function" && (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof i.componentDidUpdate != "function" ||
              (o === e.memoizedProps && h === e.memoizedState) ||
              (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate != "function" ||
              (o === e.memoizedProps && h === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = w)),
        (i.props = r),
        (i.state = w),
        (i.context = a),
        (r = c))
      : (typeof i.componentDidUpdate != "function" ||
          (o === e.memoizedProps && h === e.memoizedState) ||
          (t.flags |= 4),
        typeof i.getSnapshotBeforeUpdate != "function" ||
          (o === e.memoizedProps && h === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return yi(e, t, n, r, l, s);
}
function yi(e, t, n, r, s, l) {
  id(e, t);
  var i = (t.flags & 128) !== 0;
  if (!r && !i) return s && Ca(t, n, !1), st(e, t, l);
  (r = t.stateNode), (km.current = t);
  var o =
    i && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && i
      ? ((t.child = Cn(t, e.child, null, l)), (t.child = Cn(t, null, o, l)))
      : pe(e, t, o, l),
    (t.memoizedState = r.state),
    s && Ca(t, n, !0),
    t.child
  );
}
function od(e) {
  var t = e.stateNode;
  t.pendingContext
    ? ja(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && ja(e, t.context, !1),
    go(e, t.containerInfo);
}
function Ua(e, t, n, r, s) {
  return jn(), uo(s), (t.flags |= 256), pe(e, t, n, r), t.child;
}
var wi = { dehydrated: null, treeContext: null, retryLane: 0 };
function ki(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function ad(e, t, n) {
  var r = t.pendingProps,
    s = H.current,
    l = !1,
    i = (t.flags & 128) !== 0,
    o;
  if (
    ((o = i) ||
      (o = e !== null && e.memoizedState === null ? !1 : (s & 2) !== 0),
    o
      ? ((l = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (s |= 1),
    $(H, s & 1),
    e === null)
  )
    return (
      pi(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((i = r.children),
          (e = r.fallback),
          l
            ? ((r = t.mode),
              (l = t.child),
              (i = { mode: "hidden", children: i }),
              !(r & 1) && l !== null
                ? ((l.childLanes = 0), (l.pendingProps = i))
                : (l = Js(i, r, 0, null)),
              (e = Ut(e, r, n, null)),
              (l.return = t),
              (e.return = t),
              (l.sibling = e),
              (t.child = l),
              (t.child.memoizedState = ki(n)),
              (t.memoizedState = wi),
              e)
            : jo(t, i))
    );
  if (((s = e.memoizedState), s !== null && ((o = s.dehydrated), o !== null)))
    return Sm(e, t, i, r, o, s, n);
  if (l) {
    (l = r.fallback), (i = t.mode), (s = e.child), (o = s.sibling);
    var a = { mode: "hidden", children: r.children };
    return (
      !(i & 1) && t.child !== s
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = a),
          (t.deletions = null))
        : ((r = jt(s, a)), (r.subtreeFlags = s.subtreeFlags & 14680064)),
      o !== null ? (l = jt(o, l)) : ((l = Ut(l, i, n, null)), (l.flags |= 2)),
      (l.return = t),
      (r.return = t),
      (r.sibling = l),
      (t.child = r),
      (r = l),
      (l = t.child),
      (i = e.child.memoizedState),
      (i =
        i === null
          ? ki(n)
          : {
              baseLanes: i.baseLanes | n,
              cachePool: null,
              transitions: i.transitions,
            }),
      (l.memoizedState = i),
      (l.childLanes = e.childLanes & ~n),
      (t.memoizedState = wi),
      r
    );
  }
  return (
    (l = e.child),
    (e = l.sibling),
    (r = jt(l, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function jo(e, t) {
  return (
    (t = Js({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function Qr(e, t, n, r) {
  return (
    r !== null && uo(r),
    Cn(t, e.child, null, n),
    (e = jo(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function Sm(e, t, n, r, s, l, i) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = _l(Error(S(422)))), Qr(e, t, i, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((l = r.fallback),
        (s = t.mode),
        (r = Js({ mode: "visible", children: r.children }, s, 0, null)),
        (l = Ut(l, s, i, null)),
        (l.flags |= 2),
        (r.return = t),
        (l.return = t),
        (r.sibling = l),
        (t.child = r),
        t.mode & 1 && Cn(t, e.child, null, i),
        (t.child.memoizedState = ki(i)),
        (t.memoizedState = wi),
        l);
  if (!(t.mode & 1)) return Qr(e, t, i, null);
  if (s.data === "$!") {
    if (((r = s.nextSibling && s.nextSibling.dataset), r)) var o = r.dgst;
    return (r = o), (l = Error(S(419))), (r = _l(l, r, void 0)), Qr(e, t, i, r);
  }
  if (((o = (i & e.childLanes) !== 0), ye || o)) {
    if (((r = re), r !== null)) {
      switch (i & -i) {
        case 4:
          s = 2;
          break;
        case 16:
          s = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          s = 32;
          break;
        case 536870912:
          s = 268435456;
          break;
        default:
          s = 0;
      }
      (s = s & (r.suspendedLanes | i) ? 0 : s),
        s !== 0 &&
          s !== l.retryLane &&
          ((l.retryLane = s), rt(e, s), Ve(r, e, s, -1));
    }
    return Po(), (r = _l(Error(S(421)))), Qr(e, t, i, r);
  }
  return s.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = Im.bind(null, e)),
      (s._reactRetry = t),
      null)
    : ((e = l.treeContext),
      (Ce = wt(s.nextSibling)),
      (be = t),
      (W = !0),
      ($e = null),
      e !== null &&
        ((Re[Me++] = Ze),
        (Re[Me++] = Je),
        (Re[Me++] = Ht),
        (Ze = e.id),
        (Je = e.overflow),
        (Ht = t)),
      (t = jo(t, r.children)),
      (t.flags |= 4096),
      t);
}
function Va(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), mi(e.return, t, n);
}
function Tl(e, t, n, r, s) {
  var l = e.memoizedState;
  l === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: s,
      })
    : ((l.isBackwards = t),
      (l.rendering = null),
      (l.renderingStartTime = 0),
      (l.last = r),
      (l.tail = n),
      (l.tailMode = s));
}
function ud(e, t, n) {
  var r = t.pendingProps,
    s = r.revealOrder,
    l = r.tail;
  if ((pe(e, t, r.children, n), (r = H.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Va(e, n, t);
        else if (e.tag === 19) Va(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if (($(H, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (s) {
      case "forwards":
        for (n = t.child, s = null; n !== null; )
          (e = n.alternate),
            e !== null && Ps(e) === null && (s = n),
            (n = n.sibling);
        (n = s),
          n === null
            ? ((s = t.child), (t.child = null))
            : ((s = n.sibling), (n.sibling = null)),
          Tl(t, !1, s, n, l);
        break;
      case "backwards":
        for (n = null, s = t.child, t.child = null; s !== null; ) {
          if (((e = s.alternate), e !== null && Ps(e) === null)) {
            t.child = s;
            break;
          }
          (e = s.sibling), (s.sibling = n), (n = s), (s = e);
        }
        Tl(t, !0, n, null, l);
        break;
      case "together":
        Tl(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function as(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function st(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (Qt |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(S(153));
  if (t.child !== null) {
    for (
      e = t.child, n = jt(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = jt(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function Nm(e, t, n) {
  switch (t.tag) {
    case 3:
      od(t), jn();
      break;
    case 5:
      Ic(t);
      break;
    case 1:
      ke(t.type) && js(t);
      break;
    case 4:
      go(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        s = t.memoizedProps.value;
      $(Es, r._currentValue), (r._currentValue = s);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? ($(H, H.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? ad(e, t, n)
          : ($(H, H.current & 1),
            (e = st(e, t, n)),
            e !== null ? e.sibling : null);
      $(H, H.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return ud(e, t, n);
        t.flags |= 128;
      }
      if (
        ((s = t.memoizedState),
        s !== null &&
          ((s.rendering = null), (s.tail = null), (s.lastEffect = null)),
        $(H, H.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), ld(e, t, n);
  }
  return st(e, t, n);
}
var cd, Si, dd, fd;
cd = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
Si = function () {};
dd = function (e, t, n, r) {
  var s = e.memoizedProps;
  if (s !== r) {
    (e = t.stateNode), Ft(Ge.current);
    var l = null;
    switch (n) {
      case "input":
        (s = Wl(e, s)), (r = Wl(e, r)), (l = []);
        break;
      case "select":
        (s = Q({}, s, { value: void 0 })),
          (r = Q({}, r, { value: void 0 })),
          (l = []);
        break;
      case "textarea":
        (s = Ql(e, s)), (r = Ql(e, r)), (l = []);
        break;
      default:
        typeof s.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = Ss);
    }
    Yl(n, r);
    var i;
    n = null;
    for (c in s)
      if (!r.hasOwnProperty(c) && s.hasOwnProperty(c) && s[c] != null)
        if (c === "style") {
          var o = s[c];
          for (i in o) o.hasOwnProperty(i) && (n || (n = {}), (n[i] = ""));
        } else
          c !== "dangerouslySetInnerHTML" &&
            c !== "children" &&
            c !== "suppressContentEditableWarning" &&
            c !== "suppressHydrationWarning" &&
            c !== "autoFocus" &&
            (sr.hasOwnProperty(c)
              ? l || (l = [])
              : (l = l || []).push(c, null));
    for (c in r) {
      var a = r[c];
      if (
        ((o = s != null ? s[c] : void 0),
        r.hasOwnProperty(c) && a !== o && (a != null || o != null))
      )
        if (c === "style")
          if (o) {
            for (i in o)
              !o.hasOwnProperty(i) ||
                (a && a.hasOwnProperty(i)) ||
                (n || (n = {}), (n[i] = ""));
            for (i in a)
              a.hasOwnProperty(i) &&
                o[i] !== a[i] &&
                (n || (n = {}), (n[i] = a[i]));
          } else n || (l || (l = []), l.push(c, n)), (n = a);
        else
          c === "dangerouslySetInnerHTML"
            ? ((a = a ? a.__html : void 0),
              (o = o ? o.__html : void 0),
              a != null && o !== a && (l = l || []).push(c, a))
            : c === "children"
            ? (typeof a != "string" && typeof a != "number") ||
              (l = l || []).push(c, "" + a)
            : c !== "suppressContentEditableWarning" &&
              c !== "suppressHydrationWarning" &&
              (sr.hasOwnProperty(c)
                ? (a != null && c === "onScroll" && V("scroll", e),
                  l || o === a || (l = []))
                : (l = l || []).push(c, a));
    }
    n && (l = l || []).push("style", n);
    var c = l;
    (t.updateQueue = c) && (t.flags |= 4);
  }
};
fd = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function $n(e, t) {
  if (!W)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function ue(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var s = e.child; s !== null; )
      (n |= s.lanes | s.childLanes),
        (r |= s.subtreeFlags & 14680064),
        (r |= s.flags & 14680064),
        (s.return = e),
        (s = s.sibling);
  else
    for (s = e.child; s !== null; )
      (n |= s.lanes | s.childLanes),
        (r |= s.subtreeFlags),
        (r |= s.flags),
        (s.return = e),
        (s = s.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function jm(e, t, n) {
  var r = t.pendingProps;
  switch ((ao(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return ue(t), null;
    case 1:
      return ke(t.type) && Ns(), ue(t), null;
    case 3:
      return (
        (r = t.stateNode),
        bn(),
        B(we),
        B(fe),
        xo(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (Hr(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), $e !== null && (Pi($e), ($e = null)))),
        Si(e, t),
        ue(t),
        null
      );
    case 5:
      vo(t);
      var s = Ft(gr.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        dd(e, t, n, r, s),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(S(166));
          return ue(t), null;
        }
        if (((e = Ft(Ge.current)), Hr(t))) {
          (r = t.stateNode), (n = t.type);
          var l = t.memoizedProps;
          switch (((r[Ke] = t), (r[mr] = l), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              V("cancel", r), V("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              V("load", r);
              break;
            case "video":
            case "audio":
              for (s = 0; s < Qn.length; s++) V(Qn[s], r);
              break;
            case "source":
              V("error", r);
              break;
            case "img":
            case "image":
            case "link":
              V("error", r), V("load", r);
              break;
            case "details":
              V("toggle", r);
              break;
            case "input":
              qo(r, l), V("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!l.multiple }),
                V("invalid", r);
              break;
            case "textarea":
              Jo(r, l), V("invalid", r);
          }
          Yl(n, l), (s = null);
          for (var i in l)
            if (l.hasOwnProperty(i)) {
              var o = l[i];
              i === "children"
                ? typeof o == "string"
                  ? r.textContent !== o &&
                    (l.suppressHydrationWarning !== !0 &&
                      Wr(r.textContent, o, e),
                    (s = ["children", o]))
                  : typeof o == "number" &&
                    r.textContent !== "" + o &&
                    (l.suppressHydrationWarning !== !0 &&
                      Wr(r.textContent, o, e),
                    (s = ["children", "" + o]))
                : sr.hasOwnProperty(i) &&
                  o != null &&
                  i === "onScroll" &&
                  V("scroll", r);
            }
          switch (n) {
            case "input":
              Or(r), Zo(r, l, !0);
              break;
            case "textarea":
              Or(r), ea(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof l.onClick == "function" && (r.onclick = Ss);
          }
          (r = s), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (i = s.nodeType === 9 ? s : s.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = $u(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = i.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = i.createElement(n, { is: r.is }))
                : ((e = i.createElement(n)),
                  n === "select" &&
                    ((i = e),
                    r.multiple
                      ? (i.multiple = !0)
                      : r.size && (i.size = r.size)))
              : (e = i.createElementNS(e, n)),
            (e[Ke] = t),
            (e[mr] = r),
            cd(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((i = Xl(n, r)), n)) {
              case "dialog":
                V("cancel", e), V("close", e), (s = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                V("load", e), (s = r);
                break;
              case "video":
              case "audio":
                for (s = 0; s < Qn.length; s++) V(Qn[s], e);
                s = r;
                break;
              case "source":
                V("error", e), (s = r);
                break;
              case "img":
              case "image":
              case "link":
                V("error", e), V("load", e), (s = r);
                break;
              case "details":
                V("toggle", e), (s = r);
                break;
              case "input":
                qo(e, r), (s = Wl(e, r)), V("invalid", e);
                break;
              case "option":
                s = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (s = Q({}, r, { value: void 0 })),
                  V("invalid", e);
                break;
              case "textarea":
                Jo(e, r), (s = Ql(e, r)), V("invalid", e);
                break;
              default:
                s = r;
            }
            Yl(n, s), (o = s);
            for (l in o)
              if (o.hasOwnProperty(l)) {
                var a = o[l];
                l === "style"
                  ? Bu(e, a)
                  : l === "dangerouslySetInnerHTML"
                  ? ((a = a ? a.__html : void 0), a != null && Uu(e, a))
                  : l === "children"
                  ? typeof a == "string"
                    ? (n !== "textarea" || a !== "") && lr(e, a)
                    : typeof a == "number" && lr(e, "" + a)
                  : l !== "suppressContentEditableWarning" &&
                    l !== "suppressHydrationWarning" &&
                    l !== "autoFocus" &&
                    (sr.hasOwnProperty(l)
                      ? a != null && l === "onScroll" && V("scroll", e)
                      : a != null && Qi(e, l, a, i));
              }
            switch (n) {
              case "input":
                Or(e), Zo(e, r, !1);
                break;
              case "textarea":
                Or(e), ea(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + Ct(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (l = r.value),
                  l != null
                    ? mn(e, !!r.multiple, l, !1)
                    : r.defaultValue != null &&
                      mn(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof s.onClick == "function" && (e.onclick = Ss);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return ue(t), null;
    case 6:
      if (e && t.stateNode != null) fd(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(S(166));
        if (((n = Ft(gr.current)), Ft(Ge.current), Hr(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[Ke] = t),
            (l = r.nodeValue !== n) && ((e = be), e !== null))
          )
            switch (e.tag) {
              case 3:
                Wr(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Wr(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          l && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[Ke] = t),
            (t.stateNode = r);
      }
      return ue(t), null;
    case 13:
      if (
        (B(H),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (W && Ce !== null && t.mode & 1 && !(t.flags & 128))
          Pc(), jn(), (t.flags |= 98560), (l = !1);
        else if (((l = Hr(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!l) throw Error(S(318));
            if (
              ((l = t.memoizedState),
              (l = l !== null ? l.dehydrated : null),
              !l)
            )
              throw Error(S(317));
            l[Ke] = t;
          } else
            jn(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          ue(t), (l = !1);
        } else $e !== null && (Pi($e), ($e = null)), (l = !0);
        if (!l) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || H.current & 1 ? J === 0 && (J = 3) : Po())),
          t.updateQueue !== null && (t.flags |= 4),
          ue(t),
          null);
    case 4:
      return (
        bn(), Si(e, t), e === null && fr(t.stateNode.containerInfo), ue(t), null
      );
    case 10:
      return po(t.type._context), ue(t), null;
    case 17:
      return ke(t.type) && Ns(), ue(t), null;
    case 19:
      if ((B(H), (l = t.memoizedState), l === null)) return ue(t), null;
      if (((r = (t.flags & 128) !== 0), (i = l.rendering), i === null))
        if (r) $n(l, !1);
        else {
          if (J !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((i = Ps(e)), i !== null)) {
                for (
                  t.flags |= 128,
                    $n(l, !1),
                    r = i.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (l = n),
                    (e = r),
                    (l.flags &= 14680066),
                    (i = l.alternate),
                    i === null
                      ? ((l.childLanes = 0),
                        (l.lanes = e),
                        (l.child = null),
                        (l.subtreeFlags = 0),
                        (l.memoizedProps = null),
                        (l.memoizedState = null),
                        (l.updateQueue = null),
                        (l.dependencies = null),
                        (l.stateNode = null))
                      : ((l.childLanes = i.childLanes),
                        (l.lanes = i.lanes),
                        (l.child = i.child),
                        (l.subtreeFlags = 0),
                        (l.deletions = null),
                        (l.memoizedProps = i.memoizedProps),
                        (l.memoizedState = i.memoizedState),
                        (l.updateQueue = i.updateQueue),
                        (l.type = i.type),
                        (e = i.dependencies),
                        (l.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return $(H, (H.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          l.tail !== null &&
            X() > _n &&
            ((t.flags |= 128), (r = !0), $n(l, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = Ps(i)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              $n(l, !0),
              l.tail === null && l.tailMode === "hidden" && !i.alternate && !W)
            )
              return ue(t), null;
          } else
            2 * X() - l.renderingStartTime > _n &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), $n(l, !1), (t.lanes = 4194304));
        l.isBackwards
          ? ((i.sibling = t.child), (t.child = i))
          : ((n = l.last),
            n !== null ? (n.sibling = i) : (t.child = i),
            (l.last = i));
      }
      return l.tail !== null
        ? ((t = l.tail),
          (l.rendering = t),
          (l.tail = t.sibling),
          (l.renderingStartTime = X()),
          (t.sibling = null),
          (n = H.current),
          $(H, r ? (n & 1) | 2 : n & 1),
          t)
        : (ue(t), null);
    case 22:
    case 23:
      return (
        To(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? Ne & 1073741824 && (ue(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : ue(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(S(156, t.tag));
}
function Cm(e, t) {
  switch ((ao(t), t.tag)) {
    case 1:
      return (
        ke(t.type) && Ns(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        bn(),
        B(we),
        B(fe),
        xo(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return vo(t), null;
    case 13:
      if ((B(H), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(S(340));
        jn();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return B(H), null;
    case 4:
      return bn(), null;
    case 10:
      return po(t.type._context), null;
    case 22:
    case 23:
      return To(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Gr = !1,
  de = !1,
  bm = typeof WeakSet == "function" ? WeakSet : Set,
  _ = null;
function dn(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        Y(e, t, r);
      }
    else n.current = null;
}
function Ni(e, t, n) {
  try {
    n();
  } catch (r) {
    Y(e, t, r);
  }
}
var Ba = !1;
function Em(e, t) {
  if (((ii = ys), (e = vc()), io(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var s = r.anchorOffset,
            l = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, l.nodeType;
          } catch {
            n = null;
            break e;
          }
          var i = 0,
            o = -1,
            a = -1,
            c = 0,
            p = 0,
            g = e,
            h = null;
          t: for (;;) {
            for (
              var v;
              g !== n || (s !== 0 && g.nodeType !== 3) || (o = i + s),
                g !== l || (r !== 0 && g.nodeType !== 3) || (a = i + r),
                g.nodeType === 3 && (i += g.nodeValue.length),
                (v = g.firstChild) !== null;

            )
              (h = g), (g = v);
            for (;;) {
              if (g === e) break t;
              if (
                (h === n && ++c === s && (o = i),
                h === l && ++p === r && (a = i),
                (v = g.nextSibling) !== null)
              )
                break;
              (g = h), (h = g.parentNode);
            }
            g = v;
          }
          n = o === -1 || a === -1 ? null : { start: o, end: a };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (oi = { focusedElem: e, selectionRange: n }, ys = !1, _ = t; _ !== null; )
    if (((t = _), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (_ = e);
    else
      for (; _ !== null; ) {
        t = _;
        try {
          var w = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (w !== null) {
                  var x = w.memoizedProps,
                    E = w.memoizedState,
                    f = t.stateNode,
                    d = f.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? x : Fe(t.type, x),
                      E
                    );
                  f.__reactInternalSnapshotBeforeUpdate = d;
                }
                break;
              case 3:
                var m = t.stateNode.containerInfo;
                m.nodeType === 1
                  ? (m.textContent = "")
                  : m.nodeType === 9 &&
                    m.documentElement &&
                    m.removeChild(m.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(S(163));
            }
        } catch (y) {
          Y(t, t.return, y);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (_ = e);
          break;
        }
        _ = t.return;
      }
  return (w = Ba), (Ba = !1), w;
}
function er(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var s = (r = r.next);
    do {
      if ((s.tag & e) === e) {
        var l = s.destroy;
        (s.destroy = void 0), l !== void 0 && Ni(t, n, l);
      }
      s = s.next;
    } while (s !== r);
  }
}
function qs(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function ji(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function pd(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), pd(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[Ke], delete t[mr], delete t[ci], delete t[um], delete t[cm])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function md(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Wa(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || md(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Ci(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = Ss));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Ci(e, t, n), e = e.sibling; e !== null; ) Ci(e, t, n), (e = e.sibling);
}
function bi(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (bi(e, t, n), e = e.sibling; e !== null; ) bi(e, t, n), (e = e.sibling);
}
var se = null,
  De = !1;
function at(e, t, n) {
  for (n = n.child; n !== null; ) hd(e, t, n), (n = n.sibling);
}
function hd(e, t, n) {
  if (Qe && typeof Qe.onCommitFiberUnmount == "function")
    try {
      Qe.onCommitFiberUnmount(Bs, n);
    } catch {}
  switch (n.tag) {
    case 5:
      de || dn(n, t);
    case 6:
      var r = se,
        s = De;
      (se = null),
        at(e, t, n),
        (se = r),
        (De = s),
        se !== null &&
          (De
            ? ((e = se),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : se.removeChild(n.stateNode));
      break;
    case 18:
      se !== null &&
        (De
          ? ((e = se),
            (n = n.stateNode),
            e.nodeType === 8
              ? Sl(e.parentNode, n)
              : e.nodeType === 1 && Sl(e, n),
            ur(e))
          : Sl(se, n.stateNode));
      break;
    case 4:
      (r = se),
        (s = De),
        (se = n.stateNode.containerInfo),
        (De = !0),
        at(e, t, n),
        (se = r),
        (De = s);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !de &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        s = r = r.next;
        do {
          var l = s,
            i = l.destroy;
          (l = l.tag),
            i !== void 0 && (l & 2 || l & 4) && Ni(n, t, i),
            (s = s.next);
        } while (s !== r);
      }
      at(e, t, n);
      break;
    case 1:
      if (
        !de &&
        (dn(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (o) {
          Y(n, t, o);
        }
      at(e, t, n);
      break;
    case 21:
      at(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((de = (r = de) || n.memoizedState !== null), at(e, t, n), (de = r))
        : at(e, t, n);
      break;
    default:
      at(e, t, n);
  }
}
function Ha(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new bm()),
      t.forEach(function (r) {
        var s = Om.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(s, s));
      });
  }
}
function Ae(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var s = n[r];
      try {
        var l = e,
          i = t,
          o = i;
        e: for (; o !== null; ) {
          switch (o.tag) {
            case 5:
              (se = o.stateNode), (De = !1);
              break e;
            case 3:
              (se = o.stateNode.containerInfo), (De = !0);
              break e;
            case 4:
              (se = o.stateNode.containerInfo), (De = !0);
              break e;
          }
          o = o.return;
        }
        if (se === null) throw Error(S(160));
        hd(l, i, s), (se = null), (De = !1);
        var a = s.alternate;
        a !== null && (a.return = null), (s.return = null);
      } catch (c) {
        Y(s, t, c);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) gd(t, e), (t = t.sibling);
}
function gd(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Ae(t, e), We(e), r & 4)) {
        try {
          er(3, e, e.return), qs(3, e);
        } catch (x) {
          Y(e, e.return, x);
        }
        try {
          er(5, e, e.return);
        } catch (x) {
          Y(e, e.return, x);
        }
      }
      break;
    case 1:
      Ae(t, e), We(e), r & 512 && n !== null && dn(n, n.return);
      break;
    case 5:
      if (
        (Ae(t, e),
        We(e),
        r & 512 && n !== null && dn(n, n.return),
        e.flags & 32)
      ) {
        var s = e.stateNode;
        try {
          lr(s, "");
        } catch (x) {
          Y(e, e.return, x);
        }
      }
      if (r & 4 && ((s = e.stateNode), s != null)) {
        var l = e.memoizedProps,
          i = n !== null ? n.memoizedProps : l,
          o = e.type,
          a = e.updateQueue;
        if (((e.updateQueue = null), a !== null))
          try {
            o === "input" && l.type === "radio" && l.name != null && Fu(s, l),
              Xl(o, i);
            var c = Xl(o, l);
            for (i = 0; i < a.length; i += 2) {
              var p = a[i],
                g = a[i + 1];
              p === "style"
                ? Bu(s, g)
                : p === "dangerouslySetInnerHTML"
                ? Uu(s, g)
                : p === "children"
                ? lr(s, g)
                : Qi(s, p, g, c);
            }
            switch (o) {
              case "input":
                Hl(s, l);
                break;
              case "textarea":
                Du(s, l);
                break;
              case "select":
                var h = s._wrapperState.wasMultiple;
                s._wrapperState.wasMultiple = !!l.multiple;
                var v = l.value;
                v != null
                  ? mn(s, !!l.multiple, v, !1)
                  : h !== !!l.multiple &&
                    (l.defaultValue != null
                      ? mn(s, !!l.multiple, l.defaultValue, !0)
                      : mn(s, !!l.multiple, l.multiple ? [] : "", !1));
            }
            s[mr] = l;
          } catch (x) {
            Y(e, e.return, x);
          }
      }
      break;
    case 6:
      if ((Ae(t, e), We(e), r & 4)) {
        if (e.stateNode === null) throw Error(S(162));
        (s = e.stateNode), (l = e.memoizedProps);
        try {
          s.nodeValue = l;
        } catch (x) {
          Y(e, e.return, x);
        }
      }
      break;
    case 3:
      if (
        (Ae(t, e), We(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          ur(t.containerInfo);
        } catch (x) {
          Y(e, e.return, x);
        }
      break;
    case 4:
      Ae(t, e), We(e);
      break;
    case 13:
      Ae(t, e),
        We(e),
        (s = e.child),
        s.flags & 8192 &&
          ((l = s.memoizedState !== null),
          (s.stateNode.isHidden = l),
          !l ||
            (s.alternate !== null && s.alternate.memoizedState !== null) ||
            (Eo = X())),
        r & 4 && Ha(e);
      break;
    case 22:
      if (
        ((p = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((de = (c = de) || p), Ae(t, e), (de = c)) : Ae(t, e),
        We(e),
        r & 8192)
      ) {
        if (
          ((c = e.memoizedState !== null),
          (e.stateNode.isHidden = c) && !p && e.mode & 1)
        )
          for (_ = e, p = e.child; p !== null; ) {
            for (g = _ = p; _ !== null; ) {
              switch (((h = _), (v = h.child), h.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  er(4, h, h.return);
                  break;
                case 1:
                  dn(h, h.return);
                  var w = h.stateNode;
                  if (typeof w.componentWillUnmount == "function") {
                    (r = h), (n = h.return);
                    try {
                      (t = r),
                        (w.props = t.memoizedProps),
                        (w.state = t.memoizedState),
                        w.componentWillUnmount();
                    } catch (x) {
                      Y(r, n, x);
                    }
                  }
                  break;
                case 5:
                  dn(h, h.return);
                  break;
                case 22:
                  if (h.memoizedState !== null) {
                    Qa(g);
                    continue;
                  }
              }
              v !== null ? ((v.return = h), (_ = v)) : Qa(g);
            }
            p = p.sibling;
          }
        e: for (p = null, g = e; ; ) {
          if (g.tag === 5) {
            if (p === null) {
              p = g;
              try {
                (s = g.stateNode),
                  c
                    ? ((l = s.style),
                      typeof l.setProperty == "function"
                        ? l.setProperty("display", "none", "important")
                        : (l.display = "none"))
                    : ((o = g.stateNode),
                      (a = g.memoizedProps.style),
                      (i =
                        a != null && a.hasOwnProperty("display")
                          ? a.display
                          : null),
                      (o.style.display = Vu("display", i)));
              } catch (x) {
                Y(e, e.return, x);
              }
            }
          } else if (g.tag === 6) {
            if (p === null)
              try {
                g.stateNode.nodeValue = c ? "" : g.memoizedProps;
              } catch (x) {
                Y(e, e.return, x);
              }
          } else if (
            ((g.tag !== 22 && g.tag !== 23) ||
              g.memoizedState === null ||
              g === e) &&
            g.child !== null
          ) {
            (g.child.return = g), (g = g.child);
            continue;
          }
          if (g === e) break e;
          for (; g.sibling === null; ) {
            if (g.return === null || g.return === e) break e;
            p === g && (p = null), (g = g.return);
          }
          p === g && (p = null), (g.sibling.return = g.return), (g = g.sibling);
        }
      }
      break;
    case 19:
      Ae(t, e), We(e), r & 4 && Ha(e);
      break;
    case 21:
      break;
    default:
      Ae(t, e), We(e);
  }
}
function We(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (md(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(S(160));
      }
      switch (r.tag) {
        case 5:
          var s = r.stateNode;
          r.flags & 32 && (lr(s, ""), (r.flags &= -33));
          var l = Wa(e);
          bi(e, l, s);
          break;
        case 3:
        case 4:
          var i = r.stateNode.containerInfo,
            o = Wa(e);
          Ci(e, o, i);
          break;
        default:
          throw Error(S(161));
      }
    } catch (a) {
      Y(e, e.return, a);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function _m(e, t, n) {
  (_ = e), vd(e);
}
function vd(e, t, n) {
  for (var r = (e.mode & 1) !== 0; _ !== null; ) {
    var s = _,
      l = s.child;
    if (s.tag === 22 && r) {
      var i = s.memoizedState !== null || Gr;
      if (!i) {
        var o = s.alternate,
          a = (o !== null && o.memoizedState !== null) || de;
        o = Gr;
        var c = de;
        if (((Gr = i), (de = a) && !c))
          for (_ = s; _ !== null; )
            (i = _),
              (a = i.child),
              i.tag === 22 && i.memoizedState !== null
                ? Ga(s)
                : a !== null
                ? ((a.return = i), (_ = a))
                : Ga(s);
        for (; l !== null; ) (_ = l), vd(l), (l = l.sibling);
        (_ = s), (Gr = o), (de = c);
      }
      Ka(e);
    } else
      s.subtreeFlags & 8772 && l !== null ? ((l.return = s), (_ = l)) : Ka(e);
  }
}
function Ka(e) {
  for (; _ !== null; ) {
    var t = _;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              de || qs(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !de)
                if (n === null) r.componentDidMount();
                else {
                  var s =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : Fe(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    s,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var l = t.updateQueue;
              l !== null && Pa(t, l, r);
              break;
            case 3:
              var i = t.updateQueue;
              if (i !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                Pa(t, i, n);
              }
              break;
            case 5:
              var o = t.stateNode;
              if (n === null && t.flags & 4) {
                n = o;
                var a = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    a.autoFocus && n.focus();
                    break;
                  case "img":
                    a.src && (n.src = a.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var c = t.alternate;
                if (c !== null) {
                  var p = c.memoizedState;
                  if (p !== null) {
                    var g = p.dehydrated;
                    g !== null && ur(g);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(S(163));
          }
        de || (t.flags & 512 && ji(t));
      } catch (h) {
        Y(t, t.return, h);
      }
    }
    if (t === e) {
      _ = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (_ = n);
      break;
    }
    _ = t.return;
  }
}
function Qa(e) {
  for (; _ !== null; ) {
    var t = _;
    if (t === e) {
      _ = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (_ = n);
      break;
    }
    _ = t.return;
  }
}
function Ga(e) {
  for (; _ !== null; ) {
    var t = _;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            qs(4, t);
          } catch (a) {
            Y(t, n, a);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var s = t.return;
            try {
              r.componentDidMount();
            } catch (a) {
              Y(t, s, a);
            }
          }
          var l = t.return;
          try {
            ji(t);
          } catch (a) {
            Y(t, l, a);
          }
          break;
        case 5:
          var i = t.return;
          try {
            ji(t);
          } catch (a) {
            Y(t, i, a);
          }
      }
    } catch (a) {
      Y(t, t.return, a);
    }
    if (t === e) {
      _ = null;
      break;
    }
    var o = t.sibling;
    if (o !== null) {
      (o.return = t.return), (_ = o);
      break;
    }
    _ = t.return;
  }
}
var Tm = Math.ceil,
  zs = lt.ReactCurrentDispatcher,
  Co = lt.ReactCurrentOwner,
  Le = lt.ReactCurrentBatchConfig,
  O = 0,
  re = null,
  q = null,
  le = 0,
  Ne = 0,
  fn = _t(0),
  J = 0,
  wr = null,
  Qt = 0,
  Zs = 0,
  bo = 0,
  tr = null,
  xe = null,
  Eo = 0,
  _n = 1 / 0,
  Xe = null,
  Ls = !1,
  Ei = null,
  St = null,
  Yr = !1,
  gt = null,
  Is = 0,
  nr = 0,
  _i = null,
  us = -1,
  cs = 0;
function me() {
  return O & 6 ? X() : us !== -1 ? us : (us = X());
}
function Nt(e) {
  return e.mode & 1
    ? O & 2 && le !== 0
      ? le & -le
      : fm.transition !== null
      ? (cs === 0 && (cs = tc()), cs)
      : ((e = D),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : ac(e.type))),
        e)
    : 1;
}
function Ve(e, t, n, r) {
  if (50 < nr) throw ((nr = 0), (_i = null), Error(S(185)));
  Cr(e, n, r),
    (!(O & 2) || e !== re) &&
      (e === re && (!(O & 2) && (Zs |= n), J === 4 && mt(e, le)),
      Se(e, r),
      n === 1 && O === 0 && !(t.mode & 1) && ((_n = X() + 500), Gs && Tt()));
}
function Se(e, t) {
  var n = e.callbackNode;
  fp(e, t);
  var r = xs(e, e === re ? le : 0);
  if (r === 0)
    n !== null && ra(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && ra(n), t === 1))
      e.tag === 0 ? dm(Ya.bind(null, e)) : Ec(Ya.bind(null, e)),
        om(function () {
          !(O & 6) && Tt();
        }),
        (n = null);
    else {
      switch (nc(r)) {
        case 1:
          n = Zi;
          break;
        case 4:
          n = Ju;
          break;
        case 16:
          n = vs;
          break;
        case 536870912:
          n = ec;
          break;
        default:
          n = vs;
      }
      n = Cd(n, xd.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function xd(e, t) {
  if (((us = -1), (cs = 0), O & 6)) throw Error(S(327));
  var n = e.callbackNode;
  if (yn() && e.callbackNode !== n) return null;
  var r = xs(e, e === re ? le : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = Os(e, r);
  else {
    t = r;
    var s = O;
    O |= 2;
    var l = wd();
    (re !== e || le !== t) && ((Xe = null), (_n = X() + 500), $t(e, t));
    do
      try {
        Mm();
        break;
      } catch (o) {
        yd(e, o);
      }
    while (!0);
    fo(),
      (zs.current = l),
      (O = s),
      q !== null ? (t = 0) : ((re = null), (le = 0), (t = J));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((s = ti(e)), s !== 0 && ((r = s), (t = Ti(e, s)))), t === 1)
    )
      throw ((n = wr), $t(e, 0), mt(e, r), Se(e, X()), n);
    if (t === 6) mt(e, r);
    else {
      if (
        ((s = e.current.alternate),
        !(r & 30) &&
          !Pm(s) &&
          ((t = Os(e, r)),
          t === 2 && ((l = ti(e)), l !== 0 && ((r = l), (t = Ti(e, l)))),
          t === 1))
      )
        throw ((n = wr), $t(e, 0), mt(e, r), Se(e, X()), n);
      switch (((e.finishedWork = s), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(S(345));
        case 2:
          Lt(e, xe, Xe);
          break;
        case 3:
          if (
            (mt(e, r), (r & 130023424) === r && ((t = Eo + 500 - X()), 10 < t))
          ) {
            if (xs(e, 0) !== 0) break;
            if (((s = e.suspendedLanes), (s & r) !== r)) {
              me(), (e.pingedLanes |= e.suspendedLanes & s);
              break;
            }
            e.timeoutHandle = ui(Lt.bind(null, e, xe, Xe), t);
            break;
          }
          Lt(e, xe, Xe);
          break;
        case 4:
          if ((mt(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, s = -1; 0 < r; ) {
            var i = 31 - Ue(r);
            (l = 1 << i), (i = t[i]), i > s && (s = i), (r &= ~l);
          }
          if (
            ((r = s),
            (r = X() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * Tm(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = ui(Lt.bind(null, e, xe, Xe), r);
            break;
          }
          Lt(e, xe, Xe);
          break;
        case 5:
          Lt(e, xe, Xe);
          break;
        default:
          throw Error(S(329));
      }
    }
  }
  return Se(e, X()), e.callbackNode === n ? xd.bind(null, e) : null;
}
function Ti(e, t) {
  var n = tr;
  return (
    e.current.memoizedState.isDehydrated && ($t(e, t).flags |= 256),
    (e = Os(e, t)),
    e !== 2 && ((t = xe), (xe = n), t !== null && Pi(t)),
    e
  );
}
function Pi(e) {
  xe === null ? (xe = e) : xe.push.apply(xe, e);
}
function Pm(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var s = n[r],
            l = s.getSnapshot;
          s = s.value;
          try {
            if (!Be(l(), s)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function mt(e, t) {
  for (
    t &= ~bo,
      t &= ~Zs,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - Ue(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function Ya(e) {
  if (O & 6) throw Error(S(327));
  yn();
  var t = xs(e, 0);
  if (!(t & 1)) return Se(e, X()), null;
  var n = Os(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = ti(e);
    r !== 0 && ((t = r), (n = Ti(e, r)));
  }
  if (n === 1) throw ((n = wr), $t(e, 0), mt(e, t), Se(e, X()), n);
  if (n === 6) throw Error(S(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    Lt(e, xe, Xe),
    Se(e, X()),
    null
  );
}
function _o(e, t) {
  var n = O;
  O |= 1;
  try {
    return e(t);
  } finally {
    (O = n), O === 0 && ((_n = X() + 500), Gs && Tt());
  }
}
function Gt(e) {
  gt !== null && gt.tag === 0 && !(O & 6) && yn();
  var t = O;
  O |= 1;
  var n = Le.transition,
    r = D;
  try {
    if (((Le.transition = null), (D = 1), e)) return e();
  } finally {
    (D = r), (Le.transition = n), (O = t), !(O & 6) && Tt();
  }
}
function To() {
  (Ne = fn.current), B(fn);
}
function $t(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), im(n)), q !== null))
    for (n = q.return; n !== null; ) {
      var r = n;
      switch ((ao(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && Ns();
          break;
        case 3:
          bn(), B(we), B(fe), xo();
          break;
        case 5:
          vo(r);
          break;
        case 4:
          bn();
          break;
        case 13:
          B(H);
          break;
        case 19:
          B(H);
          break;
        case 10:
          po(r.type._context);
          break;
        case 22:
        case 23:
          To();
      }
      n = n.return;
    }
  if (
    ((re = e),
    (q = e = jt(e.current, null)),
    (le = Ne = t),
    (J = 0),
    (wr = null),
    (bo = Zs = Qt = 0),
    (xe = tr = null),
    At !== null)
  ) {
    for (t = 0; t < At.length; t++)
      if (((n = At[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var s = r.next,
          l = n.pending;
        if (l !== null) {
          var i = l.next;
          (l.next = s), (r.next = i);
        }
        n.pending = r;
      }
    At = null;
  }
  return e;
}
function yd(e, t) {
  do {
    var n = q;
    try {
      if ((fo(), (is.current = Ms), Rs)) {
        for (var r = K.memoizedState; r !== null; ) {
          var s = r.queue;
          s !== null && (s.pending = null), (r = r.next);
        }
        Rs = !1;
      }
      if (
        ((Kt = 0),
        (ne = Z = K = null),
        (Jn = !1),
        (vr = 0),
        (Co.current = null),
        n === null || n.return === null)
      ) {
        (J = 1), (wr = t), (q = null);
        break;
      }
      e: {
        var l = e,
          i = n.return,
          o = n,
          a = t;
        if (
          ((t = le),
          (o.flags |= 32768),
          a !== null && typeof a == "object" && typeof a.then == "function")
        ) {
          var c = a,
            p = o,
            g = p.tag;
          if (!(p.mode & 1) && (g === 0 || g === 11 || g === 15)) {
            var h = p.alternate;
            h
              ? ((p.updateQueue = h.updateQueue),
                (p.memoizedState = h.memoizedState),
                (p.lanes = h.lanes))
              : ((p.updateQueue = null), (p.memoizedState = null));
          }
          var v = Oa(i);
          if (v !== null) {
            (v.flags &= -257),
              Aa(v, i, o, l, t),
              v.mode & 1 && Ia(l, c, t),
              (t = v),
              (a = c);
            var w = t.updateQueue;
            if (w === null) {
              var x = new Set();
              x.add(a), (t.updateQueue = x);
            } else w.add(a);
            break e;
          } else {
            if (!(t & 1)) {
              Ia(l, c, t), Po();
              break e;
            }
            a = Error(S(426));
          }
        } else if (W && o.mode & 1) {
          var E = Oa(i);
          if (E !== null) {
            !(E.flags & 65536) && (E.flags |= 256),
              Aa(E, i, o, l, t),
              uo(En(a, o));
            break e;
          }
        }
        (l = a = En(a, o)),
          J !== 4 && (J = 2),
          tr === null ? (tr = [l]) : tr.push(l),
          (l = i);
        do {
          switch (l.tag) {
            case 3:
              (l.flags |= 65536), (t &= -t), (l.lanes |= t);
              var f = nd(l, a, t);
              Ta(l, f);
              break e;
            case 1:
              o = a;
              var d = l.type,
                m = l.stateNode;
              if (
                !(l.flags & 128) &&
                (typeof d.getDerivedStateFromError == "function" ||
                  (m !== null &&
                    typeof m.componentDidCatch == "function" &&
                    (St === null || !St.has(m))))
              ) {
                (l.flags |= 65536), (t &= -t), (l.lanes |= t);
                var y = rd(l, o, t);
                Ta(l, y);
                break e;
              }
          }
          l = l.return;
        } while (l !== null);
      }
      Sd(n);
    } catch (k) {
      (t = k), q === n && n !== null && (q = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function wd() {
  var e = zs.current;
  return (zs.current = Ms), e === null ? Ms : e;
}
function Po() {
  (J === 0 || J === 3 || J === 2) && (J = 4),
    re === null || (!(Qt & 268435455) && !(Zs & 268435455)) || mt(re, le);
}
function Os(e, t) {
  var n = O;
  O |= 2;
  var r = wd();
  (re !== e || le !== t) && ((Xe = null), $t(e, t));
  do
    try {
      Rm();
      break;
    } catch (s) {
      yd(e, s);
    }
  while (!0);
  if ((fo(), (O = n), (zs.current = r), q !== null)) throw Error(S(261));
  return (re = null), (le = 0), J;
}
function Rm() {
  for (; q !== null; ) kd(q);
}
function Mm() {
  for (; q !== null && !rp(); ) kd(q);
}
function kd(e) {
  var t = jd(e.alternate, e, Ne);
  (e.memoizedProps = e.pendingProps),
    t === null ? Sd(e) : (q = t),
    (Co.current = null);
}
function Sd(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = Cm(n, t)), n !== null)) {
        (n.flags &= 32767), (q = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (J = 6), (q = null);
        return;
      }
    } else if (((n = jm(n, t, Ne)), n !== null)) {
      q = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      q = t;
      return;
    }
    q = t = e;
  } while (t !== null);
  J === 0 && (J = 5);
}
function Lt(e, t, n) {
  var r = D,
    s = Le.transition;
  try {
    (Le.transition = null), (D = 1), zm(e, t, n, r);
  } finally {
    (Le.transition = s), (D = r);
  }
  return null;
}
function zm(e, t, n, r) {
  do yn();
  while (gt !== null);
  if (O & 6) throw Error(S(327));
  n = e.finishedWork;
  var s = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(S(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var l = n.lanes | n.childLanes;
  if (
    (pp(e, l),
    e === re && ((q = re = null), (le = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Yr ||
      ((Yr = !0),
      Cd(vs, function () {
        return yn(), null;
      })),
    (l = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || l)
  ) {
    (l = Le.transition), (Le.transition = null);
    var i = D;
    D = 1;
    var o = O;
    (O |= 4),
      (Co.current = null),
      Em(e, n),
      gd(n, e),
      Jp(oi),
      (ys = !!ii),
      (oi = ii = null),
      (e.current = n),
      _m(n),
      sp(),
      (O = o),
      (D = i),
      (Le.transition = l);
  } else e.current = n;
  if (
    (Yr && ((Yr = !1), (gt = e), (Is = s)),
    (l = e.pendingLanes),
    l === 0 && (St = null),
    op(n.stateNode),
    Se(e, X()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (s = t[n]), r(s.value, { componentStack: s.stack, digest: s.digest });
  if (Ls) throw ((Ls = !1), (e = Ei), (Ei = null), e);
  return (
    Is & 1 && e.tag !== 0 && yn(),
    (l = e.pendingLanes),
    l & 1 ? (e === _i ? nr++ : ((nr = 0), (_i = e))) : (nr = 0),
    Tt(),
    null
  );
}
function yn() {
  if (gt !== null) {
    var e = nc(Is),
      t = Le.transition,
      n = D;
    try {
      if (((Le.transition = null), (D = 16 > e ? 16 : e), gt === null))
        var r = !1;
      else {
        if (((e = gt), (gt = null), (Is = 0), O & 6)) throw Error(S(331));
        var s = O;
        for (O |= 4, _ = e.current; _ !== null; ) {
          var l = _,
            i = l.child;
          if (_.flags & 16) {
            var o = l.deletions;
            if (o !== null) {
              for (var a = 0; a < o.length; a++) {
                var c = o[a];
                for (_ = c; _ !== null; ) {
                  var p = _;
                  switch (p.tag) {
                    case 0:
                    case 11:
                    case 15:
                      er(8, p, l);
                  }
                  var g = p.child;
                  if (g !== null) (g.return = p), (_ = g);
                  else
                    for (; _ !== null; ) {
                      p = _;
                      var h = p.sibling,
                        v = p.return;
                      if ((pd(p), p === c)) {
                        _ = null;
                        break;
                      }
                      if (h !== null) {
                        (h.return = v), (_ = h);
                        break;
                      }
                      _ = v;
                    }
                }
              }
              var w = l.alternate;
              if (w !== null) {
                var x = w.child;
                if (x !== null) {
                  w.child = null;
                  do {
                    var E = x.sibling;
                    (x.sibling = null), (x = E);
                  } while (x !== null);
                }
              }
              _ = l;
            }
          }
          if (l.subtreeFlags & 2064 && i !== null) (i.return = l), (_ = i);
          else
            e: for (; _ !== null; ) {
              if (((l = _), l.flags & 2048))
                switch (l.tag) {
                  case 0:
                  case 11:
                  case 15:
                    er(9, l, l.return);
                }
              var f = l.sibling;
              if (f !== null) {
                (f.return = l.return), (_ = f);
                break e;
              }
              _ = l.return;
            }
        }
        var d = e.current;
        for (_ = d; _ !== null; ) {
          i = _;
          var m = i.child;
          if (i.subtreeFlags & 2064 && m !== null) (m.return = i), (_ = m);
          else
            e: for (i = d; _ !== null; ) {
              if (((o = _), o.flags & 2048))
                try {
                  switch (o.tag) {
                    case 0:
                    case 11:
                    case 15:
                      qs(9, o);
                  }
                } catch (k) {
                  Y(o, o.return, k);
                }
              if (o === i) {
                _ = null;
                break e;
              }
              var y = o.sibling;
              if (y !== null) {
                (y.return = o.return), (_ = y);
                break e;
              }
              _ = o.return;
            }
        }
        if (
          ((O = s), Tt(), Qe && typeof Qe.onPostCommitFiberRoot == "function")
        )
          try {
            Qe.onPostCommitFiberRoot(Bs, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (D = n), (Le.transition = t);
    }
  }
  return !1;
}
function Xa(e, t, n) {
  (t = En(n, t)),
    (t = nd(e, t, 1)),
    (e = kt(e, t, 1)),
    (t = me()),
    e !== null && (Cr(e, 1, t), Se(e, t));
}
function Y(e, t, n) {
  if (e.tag === 3) Xa(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Xa(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (St === null || !St.has(r)))
        ) {
          (e = En(n, e)),
            (e = rd(t, e, 1)),
            (t = kt(t, e, 1)),
            (e = me()),
            t !== null && (Cr(t, 1, e), Se(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function Lm(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = me()),
    (e.pingedLanes |= e.suspendedLanes & n),
    re === e &&
      (le & n) === n &&
      (J === 4 || (J === 3 && (le & 130023424) === le && 500 > X() - Eo)
        ? $t(e, 0)
        : (bo |= n)),
    Se(e, t);
}
function Nd(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = Dr), (Dr <<= 1), !(Dr & 130023424) && (Dr = 4194304))
      : (t = 1));
  var n = me();
  (e = rt(e, t)), e !== null && (Cr(e, t, n), Se(e, n));
}
function Im(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), Nd(e, n);
}
function Om(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        s = e.memoizedState;
      s !== null && (n = s.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(S(314));
  }
  r !== null && r.delete(t), Nd(e, n);
}
var jd;
jd = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || we.current) ye = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (ye = !1), Nm(e, t, n);
      ye = !!(e.flags & 131072);
    }
  else (ye = !1), W && t.flags & 1048576 && _c(t, bs, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      as(e, t), (e = t.pendingProps);
      var s = Nn(t, fe.current);
      xn(t, n), (s = wo(null, t, r, e, s, n));
      var l = ko();
      return (
        (t.flags |= 1),
        typeof s == "object" &&
        s !== null &&
        typeof s.render == "function" &&
        s.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            ke(r) ? ((l = !0), js(t)) : (l = !1),
            (t.memoizedState =
              s.state !== null && s.state !== void 0 ? s.state : null),
            ho(t),
            (s.updater = Xs),
            (t.stateNode = s),
            (s._reactInternals = t),
            gi(t, r, e, n),
            (t = yi(null, t, r, !0, l, n)))
          : ((t.tag = 0), W && l && oo(t), pe(null, t, s, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (as(e, t),
          (e = t.pendingProps),
          (s = r._init),
          (r = s(r._payload)),
          (t.type = r),
          (s = t.tag = Fm(r)),
          (e = Fe(r, e)),
          s)
        ) {
          case 0:
            t = xi(null, t, r, e, n);
            break e;
          case 1:
            t = $a(null, t, r, e, n);
            break e;
          case 11:
            t = Fa(null, t, r, e, n);
            break e;
          case 14:
            t = Da(null, t, r, Fe(r.type, e), n);
            break e;
        }
        throw Error(S(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (s = t.pendingProps),
        (s = t.elementType === r ? s : Fe(r, s)),
        xi(e, t, r, s, n)
      );
    case 1:
      return (
        (r = t.type),
        (s = t.pendingProps),
        (s = t.elementType === r ? s : Fe(r, s)),
        $a(e, t, r, s, n)
      );
    case 3:
      e: {
        if ((od(t), e === null)) throw Error(S(387));
        (r = t.pendingProps),
          (l = t.memoizedState),
          (s = l.element),
          Lc(e, t),
          Ts(t, r, null, n);
        var i = t.memoizedState;
        if (((r = i.element), l.isDehydrated))
          if (
            ((l = {
              element: r,
              isDehydrated: !1,
              cache: i.cache,
              pendingSuspenseBoundaries: i.pendingSuspenseBoundaries,
              transitions: i.transitions,
            }),
            (t.updateQueue.baseState = l),
            (t.memoizedState = l),
            t.flags & 256)
          ) {
            (s = En(Error(S(423)), t)), (t = Ua(e, t, r, n, s));
            break e;
          } else if (r !== s) {
            (s = En(Error(S(424)), t)), (t = Ua(e, t, r, n, s));
            break e;
          } else
            for (
              Ce = wt(t.stateNode.containerInfo.firstChild),
                be = t,
                W = !0,
                $e = null,
                n = Mc(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((jn(), r === s)) {
            t = st(e, t, n);
            break e;
          }
          pe(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        Ic(t),
        e === null && pi(t),
        (r = t.type),
        (s = t.pendingProps),
        (l = e !== null ? e.memoizedProps : null),
        (i = s.children),
        ai(r, s) ? (i = null) : l !== null && ai(r, l) && (t.flags |= 32),
        id(e, t),
        pe(e, t, i, n),
        t.child
      );
    case 6:
      return e === null && pi(t), null;
    case 13:
      return ad(e, t, n);
    case 4:
      return (
        go(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = Cn(t, null, r, n)) : pe(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (s = t.pendingProps),
        (s = t.elementType === r ? s : Fe(r, s)),
        Fa(e, t, r, s, n)
      );
    case 7:
      return pe(e, t, t.pendingProps, n), t.child;
    case 8:
      return pe(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return pe(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (s = t.pendingProps),
          (l = t.memoizedProps),
          (i = s.value),
          $(Es, r._currentValue),
          (r._currentValue = i),
          l !== null)
        )
          if (Be(l.value, i)) {
            if (l.children === s.children && !we.current) {
              t = st(e, t, n);
              break e;
            }
          } else
            for (l = t.child, l !== null && (l.return = t); l !== null; ) {
              var o = l.dependencies;
              if (o !== null) {
                i = l.child;
                for (var a = o.firstContext; a !== null; ) {
                  if (a.context === r) {
                    if (l.tag === 1) {
                      (a = et(-1, n & -n)), (a.tag = 2);
                      var c = l.updateQueue;
                      if (c !== null) {
                        c = c.shared;
                        var p = c.pending;
                        p === null
                          ? (a.next = a)
                          : ((a.next = p.next), (p.next = a)),
                          (c.pending = a);
                      }
                    }
                    (l.lanes |= n),
                      (a = l.alternate),
                      a !== null && (a.lanes |= n),
                      mi(l.return, n, t),
                      (o.lanes |= n);
                    break;
                  }
                  a = a.next;
                }
              } else if (l.tag === 10) i = l.type === t.type ? null : l.child;
              else if (l.tag === 18) {
                if (((i = l.return), i === null)) throw Error(S(341));
                (i.lanes |= n),
                  (o = i.alternate),
                  o !== null && (o.lanes |= n),
                  mi(i, n, t),
                  (i = l.sibling);
              } else i = l.child;
              if (i !== null) i.return = l;
              else
                for (i = l; i !== null; ) {
                  if (i === t) {
                    i = null;
                    break;
                  }
                  if (((l = i.sibling), l !== null)) {
                    (l.return = i.return), (i = l);
                    break;
                  }
                  i = i.return;
                }
              l = i;
            }
        pe(e, t, s.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (s = t.type),
        (r = t.pendingProps.children),
        xn(t, n),
        (s = Ie(s)),
        (r = r(s)),
        (t.flags |= 1),
        pe(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (s = Fe(r, t.pendingProps)),
        (s = Fe(r.type, s)),
        Da(e, t, r, s, n)
      );
    case 15:
      return sd(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (s = t.pendingProps),
        (s = t.elementType === r ? s : Fe(r, s)),
        as(e, t),
        (t.tag = 1),
        ke(r) ? ((e = !0), js(t)) : (e = !1),
        xn(t, n),
        td(t, r, s),
        gi(t, r, s, n),
        yi(null, t, r, !0, e, n)
      );
    case 19:
      return ud(e, t, n);
    case 22:
      return ld(e, t, n);
  }
  throw Error(S(156, t.tag));
};
function Cd(e, t) {
  return Zu(e, t);
}
function Am(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function ze(e, t, n, r) {
  return new Am(e, t, n, r);
}
function Ro(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function Fm(e) {
  if (typeof e == "function") return Ro(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === Yi)) return 11;
    if (e === Xi) return 14;
  }
  return 2;
}
function jt(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = ze(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function ds(e, t, n, r, s, l) {
  var i = 2;
  if (((r = e), typeof e == "function")) Ro(e) && (i = 1);
  else if (typeof e == "string") i = 5;
  else
    e: switch (e) {
      case tn:
        return Ut(n.children, s, l, t);
      case Gi:
        (i = 8), (s |= 8);
        break;
      case $l:
        return (
          (e = ze(12, n, t, s | 2)), (e.elementType = $l), (e.lanes = l), e
        );
      case Ul:
        return (e = ze(13, n, t, s)), (e.elementType = Ul), (e.lanes = l), e;
      case Vl:
        return (e = ze(19, n, t, s)), (e.elementType = Vl), (e.lanes = l), e;
      case Iu:
        return Js(n, s, l, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case zu:
              i = 10;
              break e;
            case Lu:
              i = 9;
              break e;
            case Yi:
              i = 11;
              break e;
            case Xi:
              i = 14;
              break e;
            case dt:
              (i = 16), (r = null);
              break e;
          }
        throw Error(S(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = ze(i, n, t, s)), (t.elementType = e), (t.type = r), (t.lanes = l), t
  );
}
function Ut(e, t, n, r) {
  return (e = ze(7, e, r, t)), (e.lanes = n), e;
}
function Js(e, t, n, r) {
  return (
    (e = ze(22, e, r, t)),
    (e.elementType = Iu),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function Pl(e, t, n) {
  return (e = ze(6, e, null, t)), (e.lanes = n), e;
}
function Rl(e, t, n) {
  return (
    (t = ze(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function Dm(e, t, n, r, s) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = dl(0)),
    (this.expirationTimes = dl(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = dl(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = s),
    (this.mutableSourceEagerHydrationData = null);
}
function Mo(e, t, n, r, s, l, i, o, a) {
  return (
    (e = new Dm(e, t, n, o, a)),
    t === 1 ? ((t = 1), l === !0 && (t |= 8)) : (t = 0),
    (l = ze(3, null, null, t)),
    (e.current = l),
    (l.stateNode = e),
    (l.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    ho(l),
    e
  );
}
function $m(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: en,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function bd(e) {
  if (!e) return bt;
  e = e._reactInternals;
  e: {
    if (qt(e) !== e || e.tag !== 1) throw Error(S(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (ke(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(S(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (ke(n)) return bc(e, n, t);
  }
  return t;
}
function Ed(e, t, n, r, s, l, i, o, a) {
  return (
    (e = Mo(n, r, !0, e, s, l, i, o, a)),
    (e.context = bd(null)),
    (n = e.current),
    (r = me()),
    (s = Nt(n)),
    (l = et(r, s)),
    (l.callback = t ?? null),
    kt(n, l, s),
    (e.current.lanes = s),
    Cr(e, s, r),
    Se(e, r),
    e
  );
}
function el(e, t, n, r) {
  var s = t.current,
    l = me(),
    i = Nt(s);
  return (
    (n = bd(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = et(l, i)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = kt(s, t, i)),
    e !== null && (Ve(e, s, i, l), ls(e, s, i)),
    i
  );
}
function As(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function qa(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function zo(e, t) {
  qa(e, t), (e = e.alternate) && qa(e, t);
}
function Um() {
  return null;
}
var _d =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function Lo(e) {
  this._internalRoot = e;
}
tl.prototype.render = Lo.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(S(409));
  el(e, t, null, null);
};
tl.prototype.unmount = Lo.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Gt(function () {
      el(null, e, null, null);
    }),
      (t[nt] = null);
  }
};
function tl(e) {
  this._internalRoot = e;
}
tl.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = lc();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < pt.length && t !== 0 && t < pt[n].priority; n++);
    pt.splice(n, 0, e), n === 0 && oc(e);
  }
};
function Io(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function nl(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function Za() {}
function Vm(e, t, n, r, s) {
  if (s) {
    if (typeof r == "function") {
      var l = r;
      r = function () {
        var c = As(i);
        l.call(c);
      };
    }
    var i = Ed(t, r, e, 0, null, !1, !1, "", Za);
    return (
      (e._reactRootContainer = i),
      (e[nt] = i.current),
      fr(e.nodeType === 8 ? e.parentNode : e),
      Gt(),
      i
    );
  }
  for (; (s = e.lastChild); ) e.removeChild(s);
  if (typeof r == "function") {
    var o = r;
    r = function () {
      var c = As(a);
      o.call(c);
    };
  }
  var a = Mo(e, 0, !1, null, null, !1, !1, "", Za);
  return (
    (e._reactRootContainer = a),
    (e[nt] = a.current),
    fr(e.nodeType === 8 ? e.parentNode : e),
    Gt(function () {
      el(t, a, n, r);
    }),
    a
  );
}
function rl(e, t, n, r, s) {
  var l = n._reactRootContainer;
  if (l) {
    var i = l;
    if (typeof s == "function") {
      var o = s;
      s = function () {
        var a = As(i);
        o.call(a);
      };
    }
    el(t, i, e, s);
  } else i = Vm(n, t, e, s, r);
  return As(i);
}
rc = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Kn(t.pendingLanes);
        n !== 0 &&
          (Ji(t, n | 1), Se(t, X()), !(O & 6) && ((_n = X() + 500), Tt()));
      }
      break;
    case 13:
      Gt(function () {
        var r = rt(e, 1);
        if (r !== null) {
          var s = me();
          Ve(r, e, 1, s);
        }
      }),
        zo(e, 1);
  }
};
eo = function (e) {
  if (e.tag === 13) {
    var t = rt(e, 134217728);
    if (t !== null) {
      var n = me();
      Ve(t, e, 134217728, n);
    }
    zo(e, 134217728);
  }
};
sc = function (e) {
  if (e.tag === 13) {
    var t = Nt(e),
      n = rt(e, t);
    if (n !== null) {
      var r = me();
      Ve(n, e, t, r);
    }
    zo(e, t);
  }
};
lc = function () {
  return D;
};
ic = function (e, t) {
  var n = D;
  try {
    return (D = e), t();
  } finally {
    D = n;
  }
};
Zl = function (e, t, n) {
  switch (t) {
    case "input":
      if ((Hl(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var s = Qs(r);
            if (!s) throw Error(S(90));
            Au(r), Hl(r, s);
          }
        }
      }
      break;
    case "textarea":
      Du(e, n);
      break;
    case "select":
      (t = n.value), t != null && mn(e, !!n.multiple, t, !1);
  }
};
Ku = _o;
Qu = Gt;
var Bm = { usingClientEntryPoint: !1, Events: [Er, ln, Qs, Wu, Hu, _o] },
  Un = {
    findFiberByHostInstance: Ot,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom",
  },
  Wm = {
    bundleType: Un.bundleType,
    version: Un.version,
    rendererPackageName: Un.rendererPackageName,
    rendererConfig: Un.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: lt.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = Xu(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: Un.findFiberByHostInstance || Um,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Xr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Xr.isDisabled && Xr.supportsFiber)
    try {
      (Bs = Xr.inject(Wm)), (Qe = Xr);
    } catch {}
}
_e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Bm;
_e.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Io(t)) throw Error(S(200));
  return $m(e, t, null, n);
};
_e.createRoot = function (e, t) {
  if (!Io(e)) throw Error(S(299));
  var n = !1,
    r = "",
    s = _d;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (s = t.onRecoverableError)),
    (t = Mo(e, 1, !1, null, null, n, !1, r, s)),
    (e[nt] = t.current),
    fr(e.nodeType === 8 ? e.parentNode : e),
    new Lo(t)
  );
};
_e.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(S(188))
      : ((e = Object.keys(e).join(",")), Error(S(268, e)));
  return (e = Xu(t)), (e = e === null ? null : e.stateNode), e;
};
_e.flushSync = function (e) {
  return Gt(e);
};
_e.hydrate = function (e, t, n) {
  if (!nl(t)) throw Error(S(200));
  return rl(null, e, t, !0, n);
};
_e.hydrateRoot = function (e, t, n) {
  if (!Io(e)) throw Error(S(405));
  var r = (n != null && n.hydratedSources) || null,
    s = !1,
    l = "",
    i = _d;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (s = !0),
      n.identifierPrefix !== void 0 && (l = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (i = n.onRecoverableError)),
    (t = Ed(t, null, e, 1, n ?? null, s, !1, l, i)),
    (e[nt] = t.current),
    fr(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (s = n._getVersion),
        (s = s(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, s])
          : t.mutableSourceEagerHydrationData.push(n, s);
  return new tl(t);
};
_e.render = function (e, t, n) {
  if (!nl(t)) throw Error(S(200));
  return rl(null, e, t, !1, n);
};
_e.unmountComponentAtNode = function (e) {
  if (!nl(e)) throw Error(S(40));
  return e._reactRootContainer
    ? (Gt(function () {
        rl(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[nt] = null);
        });
      }),
      !0)
    : !1;
};
_e.unstable_batchedUpdates = _o;
_e.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!nl(n)) throw Error(S(200));
  if (e == null || e._reactInternals === void 0) throw Error(S(38));
  return rl(e, t, n, !1, r);
};
_e.version = "18.3.1-next-f1338f8080-20240426";
function Td() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Td);
    } catch (e) {
      console.error(e);
    }
}
Td(), (Tu.exports = _e);
var Hm = Tu.exports,
  Ja = Hm;
(Fl.createRoot = Ja.createRoot), (Fl.hydrateRoot = Ja.hydrateRoot);
const Km = () => {
    const [e, t] = I.useState(!1),
      n = () => {
        var r;
        (r = document.getElementById("contact")) == null ||
          r.scrollIntoView({ behavior: "smooth" });
      };
    return u.jsx("header", {
      className:
        "fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-sm border-b border-slate-800",
      children: u.jsxs("div", {
        className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
        children: [
          u.jsxs("div", {
            className: "flex items-center justify-between h-16 lg:h-20",
            children: [
              u.jsxs("div", {
                className: "flex items-center",
                children: [
                  u.jsx("img", {
                    src: "logo.jpeg",
                    alt: "Chess Academy Logo",
                    className:
                      "h-8 w-8 lg:h-10 lg:w-10 rounded-full mr-2 lg:mr-3 object-cover border border-emerald-400",
                  }),
                  u.jsx("span", {
                    className:
                      "font-display text-lg lg:text-xl font-bold text-white tracking-tight",
                    children: "ChessMaster",
                  }),
                ],
              }),
              u.jsxs("nav", {
                className: "hidden sm:flex items-center space-x-4 lg:space-x-8",
                children: [
                  u.jsx("a", {
                    href: "#about",
                    className:
                      "font-body text-white hover:text-emerald-400 transition-colors tracking-wide cursor-pointer",
                    children: "About",
                  }),
                  u.jsx("a", {
                    href: "#services",
                    className:
                      "font-body text-white hover:text-emerald-400 transition-colors tracking-wide cursor-pointer",
                    children: "Services",
                  }),
                  u.jsx("a", {
                    href: "#process",
                    className:
                      "font-body text-white hover:text-emerald-400 transition-colors tracking-wide cursor-pointer",
                    children: "Process",
                  }),
                  u.jsx("a", {
                    href: "#testimonials",
                    className:
                      "font-body text-white hover:text-emerald-400 transition-colors tracking-wide cursor-pointer",
                    children: "Testimonials",
                  }),
                  u.jsx("a", {
                    href: "#contact",
                    className:
                      "font-body text-white hover:text-emerald-400 transition-colors tracking-wide cursor-pointer",
                    children: "Contact",
                  }),
                ],
              }),
              u.jsx("button", {
                onClick: n,
                className:
                  "hidden sm:block font-display bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white px-4 lg:px-6 py-2 rounded-lg font-semibold transition-all duration-300 tracking-wide text-sm lg:text-base",
                children: "Book a Free Lesson",
              }),
              u.jsx("button", {
                onClick: () => t(!e),
                className: "sm:hidden text-white p-2",
                children: u.jsx("svg", {
                  className: "h-6 w-6",
                  fill: "none",
                  stroke: "currentColor",
                  viewBox: "0 0 24 24",
                  children: e
                    ? u.jsx("path", {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: 2,
                        d: "M6 18L18 6M6 6l12 12",
                      })
                    : u.jsx("path", {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: 2,
                        d: "M4 6h16M4 12h16M4 18h16",
                      }),
                }),
              }),
            ],
          }),
          e &&
            u.jsx("div", {
              className:
                "sm:hidden bg-slate-800/95 backdrop-blur-sm border-t border-slate-700",
              children: u.jsxs("nav", {
                className: "flex flex-col space-y-4 p-4",
                children: [
                  u.jsx("a", {
                    href: "#about",
                    className:
                      "font-body text-white hover:text-emerald-400 transition-colors tracking-wide cursor-pointer",
                    onClick: () => t(!1),
                    children: "About",
                  }),
                  u.jsx("a", {
                    href: "#services",
                    className:
                      "font-body text-white hover:text-emerald-400 transition-colors tracking-wide cursor-pointer",
                    onClick: () => t(!1),
                    children: "Services",
                  }),
                  u.jsx("a", {
                    href: "#process",
                    className:
                      "font-body text-white hover:text-emerald-400 transition-colors tracking-wide cursor-pointer",
                    onClick: () => t(!1),
                    children: "Process",
                  }),
                  u.jsx("a", {
                    href: "#testimonials",
                    className:
                      "font-body text-white hover:text-emerald-400 transition-colors tracking-wide cursor-pointer",
                    onClick: () => t(!1),
                    children: "Testimonials",
                  }),
                  u.jsx("a", {
                    href: "#contact",
                    className:
                      "font-body text-white hover:text-emerald-400 transition-colors tracking-wide cursor-pointer",
                    onClick: () => t(!1),
                    children: "Contact",
                  }),
                  u.jsx("button", {
                    onClick: () => {
                      t(!1), n();
                    },
                    className:
                      "font-display bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 tracking-wide text-center mt-2",
                    children: "Book a Free Lesson",
                  }),
                ],
              }),
            }),
        ],
      }),
    });
  },
  Qm = () => {
    const e = () => {
      var t;
      (t = document.getElementById("contact")) == null ||
        t.scrollIntoView({ behavior: "smooth" });
    };
    return u.jsxs("section", {
      className:
        "relative min-h-screen flex items-center justify-center overflow-hidden pt-20",
      children: [
        u.jsxs("div", {
          className: "absolute inset-0",
          children: [
            u.jsx("img", {
              src: "https://images.pexels.com/photos/1040157/pexels-photo-1040157.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=1",
              alt: "Professional wooden chess set with detailed pieces on elegant board",
              className: "w-full h-full object-cover",
            }),
            u.jsx("div", {
              className:
                "absolute inset-0 bg-gradient-to-r from-slate-900/85 via-slate-900/70 to-slate-900/50",
            }),
            u.jsx("div", { className: "absolute inset-0 bg-slate-900/20" }),
          ],
        }),
        u.jsx("div", {
          className:
            "relative z-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full",
          children: u.jsxs("div", {
            className: "grid lg:grid-cols-2 gap-8 lg:gap-12 items-center",
            children: [
              u.jsxs("div", {
                className: "text-center lg:text-left",
                children: [
                  u.jsxs("h1", {
                    className:
                      "font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 fade-in-up text-white tracking-tighter leading-none",
                    children: [
                      "Master Chess with",
                      u.jsx("span", {
                        className:
                          "block bg-gradient-to-r from-emerald-400 to-emerald-500 bg-clip-text text-transparent",
                        children: "Expert Coaching",
                      }),
                    ],
                  }),
                  u.jsx("p", {
                    className:
                      "font-body text-lg sm:text-xl lg:text-2xl text-slate-200 mb-6 sm:mb-8 fade-in-up stagger-1 max-w-xl mx-auto lg:mx-0 leading-relaxed font-light tracking-wide",
                    children:
                      "Personalized chess instruction for players of all levels. From beginner fundamentals to advanced strategy.",
                  }),
                  u.jsxs("div", {
                    className:
                      "flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 sm:mb-12 fade-in-up stagger-2 justify-center lg:justify-start",
                    children: [
                      u.jsx("button", {
                        onClick: e,
                        className:
                          "font-display bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold hover-lift transition-all duration-300 shadow-lg tracking-wide",
                        children: "Book Free Consultation",
                      }),
                      u.jsx("button", {
                        onClick: () => {
                          var t;
                          return (t = document.getElementById("services")) ==
                            null
                            ? void 0
                            : t.scrollIntoView({ behavior: "smooth" });
                        },
                        className:
                          "font-display border-2 border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-slate-900 px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold hover-lift transition-all duration-300 backdrop-blur-sm tracking-wide",
                        children: "View Lessons",
                      }),
                    ],
                  }),
                ],
              }),
              u.jsxs("div", {
                className: "relative",
                children: [
                  u.jsxs("div", {
                    className:
                      "bg-white/10 backdrop-blur-md p-6 sm:p-8 rounded-2xl border border-white/20 shadow-2xl",
                    children: [
                      u.jsx("h3", {
                        className:
                          "font-heading text-xl sm:text-2xl font-semibold text-white mb-4 sm:mb-6 tracking-tight text-center lg:text-left",
                        children: "Why Choose Talent Chess Academy?",
                      }),
                      u.jsxs("div", {
                        className: "space-y-3 sm:space-y-4",
                        children: [
                          u.jsxs("div", {
                            className: "flex items-center",
                            children: [
                              u.jsx("div", {
                                className:
                                  "w-10 h-10 sm:w-12 sm:h-12 bg-emerald-600 rounded-full flex items-center justify-center mr-3 sm:mr-4 text-white text-lg sm:text-xl flex-shrink-0",
                                children: "♔",
                              }),
                              u.jsxs("div", {
                                children: [
                                  u.jsx("div", {
                                    className:
                                      "font-heading font-semibold text-white tracking-tight text-sm sm:text-base",
                                    children: "Experienced, FIDE Rated Trainer",
                                  }),
                                  u.jsx("div", {
                                    className:
                                      "font-body text-slate-300 text-xs sm:text-sm font-light tracking-wide",
                                    children:
                                      "Professional certified instructor",
                                  }),
                                ],
                              }),
                            ],
                          }),
                          u.jsxs("div", {
                            className: "flex items-center",
                            children: [
                              u.jsx("div", {
                                className:
                                  "w-10 h-10 sm:w-12 sm:h-12 bg-emerald-600 rounded-full flex items-center justify-center mr-3 sm:mr-4 text-white text-lg sm:text-xl flex-shrink-0",
                                children: "♕",
                              }),
                              u.jsxs("div", {
                                children: [
                                  u.jsx("div", {
                                    className:
                                      "font-heading font-semibold text-white tracking-tight text-sm sm:text-base",
                                    children:
                                      "Best Online Live Chess Learning Platform",
                                  }),
                                  u.jsx("div", {
                                    className:
                                      "font-body text-slate-300 text-xs sm:text-sm font-light tracking-wide",
                                    children: "Interactive digital classroom",
                                  }),
                                ],
                              }),
                            ],
                          }),
                          u.jsxs("div", {
                            className: "flex items-center",
                            children: [
                              u.jsx("div", {
                                className:
                                  "w-10 h-10 sm:w-12 sm:h-12 bg-emerald-600 rounded-full flex items-center justify-center mr-3 sm:mr-4 text-white text-lg sm:text-xl flex-shrink-0",
                                children: "♖",
                              }),
                              u.jsxs("div", {
                                children: [
                                  u.jsx("div", {
                                    className:
                                      "font-heading font-semibold text-white tracking-tight text-sm sm:text-base",
                                    children: "Personalised Learning",
                                  }),
                                  u.jsx("div", {
                                    className:
                                      "font-body text-slate-300 text-xs sm:text-sm font-light tracking-wide",
                                    children: "Customized to your needs",
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  u.jsx("div", {
                    className:
                      "hidden sm:block absolute -top-4 sm:-top-6 -right-4 sm:-right-6 w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center text-xl sm:text-2xl text-white shadow-lg chess-piece-float leading-none",
                    style: {
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      lineHeight: "1",
                    },
                    children: "♔",
                  }),
                  u.jsx("div", {
                    className:
                      "hidden sm:block absolute -bottom-4 sm:-bottom-6 -left-4 sm:-left-6 w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-full flex items-center justify-center text-xl sm:text-2xl text-white shadow-lg chess-piece-float leading-none",
                    style: {
                      animationDelay: "2s",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      lineHeight: "1",
                    },
                    children: "♞",
                  }),
                ],
              }),
            ],
          }),
        }),
        u.jsx("div", {
          className:
            "hidden sm:block absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce",
          children: u.jsx("div", {
            className:
              "w-6 h-10 border-2 border-emerald-400 rounded-full flex justify-center",
            children: u.jsx("div", {
              className:
                "w-1 h-3 bg-emerald-400 rounded-full mt-2 animate-pulse",
            }),
          }),
        }),
      ],
    });
  };
function Gm(e) {
  const t = I.useRef(null);
  return t.current === null && (t.current = e()), t.current;
}
const Pd = I.createContext({
    transformPagePoint: (e) => e,
    isStatic: !1,
    reducedMotion: "never",
  }),
  Ym = typeof window < "u",
  Xm = Ym ? I.useLayoutEffect : I.useEffect,
  Tr = (e) => e;
let Rd = Tr;
const Oo = (e, t, n) => {
    const r = t - e;
    return r === 0 ? 1 : (n - e) / r;
  },
  Ao = (e) => e * 1e3,
  wn = (e) => e / 1e3,
  qm = { useManualTiming: !1 };
function Zm(e) {
  let t = new Set(),
    n = new Set(),
    r = !1,
    s = !1;
  const l = new WeakSet();
  let i = { delta: 0, timestamp: 0, isProcessing: !1 };
  function o(c) {
    l.has(c) && (a.schedule(c), e()), c(i);
  }
  const a = {
    schedule: (c, p = !1, g = !1) => {
      const v = g && r ? t : n;
      return p && l.add(c), v.has(c) || v.add(c), c;
    },
    cancel: (c) => {
      n.delete(c), l.delete(c);
    },
    process: (c) => {
      if (((i = c), r)) {
        s = !0;
        return;
      }
      (r = !0),
        ([t, n] = [n, t]),
        t.forEach(o),
        t.clear(),
        (r = !1),
        s && ((s = !1), a.process(c));
    },
  };
  return a;
}
const qr = [
    "read",
    "resolveKeyframes",
    "update",
    "preRender",
    "render",
    "postRender",
  ],
  Jm = 40;
function eh(e, t) {
  let n = !1,
    r = !0;
  const s = { delta: 0, timestamp: 0, isProcessing: !1 },
    l = () => (n = !0),
    i = qr.reduce((f, d) => ((f[d] = Zm(l)), f), {}),
    {
      read: o,
      resolveKeyframes: a,
      update: c,
      preRender: p,
      render: g,
      postRender: h,
    } = i,
    v = () => {
      const f = performance.now();
      (n = !1),
        (s.delta = r ? 1e3 / 60 : Math.max(Math.min(f - s.timestamp, Jm), 1)),
        (s.timestamp = f),
        (s.isProcessing = !0),
        o.process(s),
        a.process(s),
        c.process(s),
        p.process(s),
        g.process(s),
        h.process(s),
        (s.isProcessing = !1),
        n && t && ((r = !1), e(v));
    },
    w = () => {
      (n = !0), (r = !0), s.isProcessing || e(v);
    };
  return {
    schedule: qr.reduce((f, d) => {
      const m = i[d];
      return (f[d] = (y, k = !1, j = !1) => (n || w(), m.schedule(y, k, j))), f;
    }, {}),
    cancel: (f) => {
      for (let d = 0; d < qr.length; d++) i[qr[d]].cancel(f);
    },
    state: s,
    steps: i,
  };
}
const {
    schedule: kr,
    cancel: th,
    state: Sr,
  } = eh(typeof requestAnimationFrame < "u" ? requestAnimationFrame : Tr, !0),
  eu = (e) => !!(e && e.getVelocity),
  Md = [
    "transformPerspective",
    "x",
    "y",
    "z",
    "translateX",
    "translateY",
    "translateZ",
    "scale",
    "scaleX",
    "scaleY",
    "rotate",
    "rotateX",
    "rotateY",
    "rotateZ",
    "skew",
    "skewX",
    "skewY",
  ];
new Set(Md);
const nh = (e) => (t) => typeof t == "string" && t.startsWith(e),
  rh = nh("var(--"),
  sh = (e) => (rh(e) ? lh.test(e.split("/*")[0].trim()) : !1),
  lh =
    /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,
  Yt = (e, t, n) => (n > t ? t : n < e ? e : n),
  zd = {
    test: (e) => typeof e == "number",
    parse: parseFloat,
    transform: (e) => e,
  },
  Ld = { ...zd, transform: (e) => Yt(0, 1, e) },
  ih = (e) => ({
    test: (t) =>
      typeof t == "string" && t.endsWith(e) && t.split(" ").length === 1,
    parse: parseFloat,
    transform: (t) => `${t}${e}`,
  }),
  tu = ih("%"),
  Ri = 2e4;
function Id(e) {
  let t = 0;
  const n = 50;
  let r = e.next(t);
  for (; !r.done && t < Ri; ) (t += n), (r = e.next(t));
  return t >= Ri ? 1 / 0 : t;
}
function Od(e) {
  return typeof e == "function";
}
const oh = (e) => Array.isArray(e) && typeof e[0] == "number",
  ah = (e, t, n = 10) => {
    let r = "";
    const s = Math.max(Math.round(t / n), 2);
    for (let l = 0; l < s; l++) r += e(Oo(0, s - 1, l)) + ", ";
    return `linear(${r.substring(0, r.length - 2)})`;
  };
function uh(e, t, n) {
  var r;
  if (e instanceof Element) return [e];
  if (typeof e == "string") {
    let s = document;
    const l = (r = void 0) !== null && r !== void 0 ? r : s.querySelectorAll(e);
    return l ? Array.from(l) : [];
  }
  return Array.from(e);
}
let fs;
function ch() {
  fs = void 0;
}
const Vt = {
  now: () => (
    fs === void 0 &&
      Vt.set(
        Sr.isProcessing || qm.useManualTiming ? Sr.timestamp : performance.now()
      ),
    fs
  ),
  set: (e) => {
    (fs = e), queueMicrotask(ch);
  },
};
function dh(e, t) {
  e.indexOf(t) === -1 && e.push(t);
}
function fh(e, t) {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}
class ph {
  constructor() {
    this.subscriptions = [];
  }
  add(t) {
    return dh(this.subscriptions, t), () => fh(this.subscriptions, t);
  }
  notify(t, n, r) {
    const s = this.subscriptions.length;
    if (s)
      if (s === 1) this.subscriptions[0](t, n, r);
      else
        for (let l = 0; l < s; l++) {
          const i = this.subscriptions[l];
          i && i(t, n, r);
        }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
}
function Ad(e, t) {
  return t ? e * (1e3 / t) : 0;
}
const nu = 30,
  mh = (e) => !isNaN(parseFloat(e));
class hh {
  constructor(t, n = {}) {
    (this.version = "11.18.2"),
      (this.canTrackVelocity = null),
      (this.events = {}),
      (this.updateAndNotify = (r, s = !0) => {
        const l = Vt.now();
        this.updatedAt !== l && this.setPrevFrameValue(),
          (this.prev = this.current),
          this.setCurrent(r),
          this.current !== this.prev &&
            this.events.change &&
            this.events.change.notify(this.current),
          s &&
            this.events.renderRequest &&
            this.events.renderRequest.notify(this.current);
      }),
      (this.hasAnimated = !1),
      this.setCurrent(t),
      (this.owner = n.owner);
  }
  setCurrent(t) {
    (this.current = t),
      (this.updatedAt = Vt.now()),
      this.canTrackVelocity === null &&
        t !== void 0 &&
        (this.canTrackVelocity = mh(this.current));
  }
  setPrevFrameValue(t = this.current) {
    (this.prevFrameValue = t), (this.prevUpdatedAt = this.updatedAt);
  }
  onChange(t) {
    return this.on("change", t);
  }
  on(t, n) {
    this.events[t] || (this.events[t] = new ph());
    const r = this.events[t].add(n);
    return t === "change"
      ? () => {
          r(),
            kr.read(() => {
              this.events.change.getSize() || this.stop();
            });
        }
      : r;
  }
  clearListeners() {
    for (const t in this.events) this.events[t].clear();
  }
  attach(t, n) {
    (this.passiveEffect = t), (this.stopPassiveEffect = n);
  }
  set(t, n = !0) {
    !n || !this.passiveEffect
      ? this.updateAndNotify(t, n)
      : this.passiveEffect(t, this.updateAndNotify);
  }
  setWithVelocity(t, n, r) {
    this.set(n),
      (this.prev = void 0),
      (this.prevFrameValue = t),
      (this.prevUpdatedAt = this.updatedAt - r);
  }
  jump(t, n = !0) {
    this.updateAndNotify(t),
      (this.prev = t),
      (this.prevUpdatedAt = this.prevFrameValue = void 0),
      n && this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect();
  }
  get() {
    return this.current;
  }
  getPrevious() {
    return this.prev;
  }
  getVelocity() {
    const t = Vt.now();
    if (
      !this.canTrackVelocity ||
      this.prevFrameValue === void 0 ||
      t - this.updatedAt > nu
    )
      return 0;
    const n = Math.min(this.updatedAt - this.prevUpdatedAt, nu);
    return Ad(parseFloat(this.current) - parseFloat(this.prevFrameValue), n);
  }
  start(t) {
    return (
      this.stop(),
      new Promise((n) => {
        (this.hasAnimated = !0),
          (this.animation = t(n)),
          this.events.animationStart && this.events.animationStart.notify();
      }).then(() => {
        this.events.animationComplete && this.events.animationComplete.notify(),
          this.clearAnimation();
      })
    );
  }
  stop() {
    this.animation &&
      (this.animation.stop(),
      this.events.animationCancel && this.events.animationCancel.notify()),
      this.clearAnimation();
  }
  isAnimating() {
    return !!this.animation;
  }
  clearAnimation() {
    delete this.animation;
  }
  destroy() {
    this.clearListeners(),
      this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect();
  }
}
function gh(e, t) {
  return new hh(e, t);
}
const Fd = (e, t, n) =>
    (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e,
  vh = 1e-7,
  xh = 12;
function yh(e, t, n, r, s) {
  let l,
    i,
    o = 0;
  do (i = t + (n - t) / 2), (l = Fd(i, r, s) - e), l > 0 ? (n = i) : (t = i);
  while (Math.abs(l) > vh && ++o < xh);
  return i;
}
function Pr(e, t, n, r) {
  if (e === t && n === r) return Tr;
  const s = (l) => yh(l, 0, 1, e, n);
  return (l) => (l === 0 || l === 1 ? l : Fd(s(l), t, r));
}
const Dd = (e) => (t) => t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2,
  $d = (e) => (t) => 1 - e(1 - t),
  Ud = Pr(0.33, 1.53, 0.69, 0.99),
  Fo = $d(Ud),
  wh = Dd(Fo),
  kh = (e) =>
    (e *= 2) < 1 ? 0.5 * Fo(e) : 0.5 * (2 - Math.pow(2, -10 * (e - 1))),
  Do = (e) => 1 - Math.sin(Math.acos(e)),
  Sh = $d(Do),
  Nh = Dd(Do),
  rr = (e) => Math.round(e * 1e5) / 1e5,
  Vd = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function jh(e) {
  return e == null;
}
const Ch =
    /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,
  $o = (e, t) => (n) =>
    !!(
      (typeof n == "string" && Ch.test(n) && n.startsWith(e)) ||
      (t && !jh(n) && Object.prototype.hasOwnProperty.call(n, t))
    ),
  Bd = (e, t, n) => (r) => {
    if (typeof r != "string") return r;
    const [s, l, i, o] = r.match(Vd);
    return {
      [e]: parseFloat(s),
      [t]: parseFloat(l),
      [n]: parseFloat(i),
      alpha: o !== void 0 ? parseFloat(o) : 1,
    };
  },
  bh = (e) => Yt(0, 255, e),
  Ml = { ...zd, transform: (e) => Math.round(bh(e)) },
  Dt = {
    test: $o("rgb", "red"),
    parse: Bd("red", "green", "blue"),
    transform: ({ red: e, green: t, blue: n, alpha: r = 1 }) =>
      "rgba(" +
      Ml.transform(e) +
      ", " +
      Ml.transform(t) +
      ", " +
      Ml.transform(n) +
      ", " +
      rr(Ld.transform(r)) +
      ")",
  };
function Eh(e) {
  let t = "",
    n = "",
    r = "",
    s = "";
  return (
    e.length > 5
      ? ((t = e.substring(1, 3)),
        (n = e.substring(3, 5)),
        (r = e.substring(5, 7)),
        (s = e.substring(7, 9)))
      : ((t = e.substring(1, 2)),
        (n = e.substring(2, 3)),
        (r = e.substring(3, 4)),
        (s = e.substring(4, 5)),
        (t += t),
        (n += n),
        (r += r),
        (s += s)),
    {
      red: parseInt(t, 16),
      green: parseInt(n, 16),
      blue: parseInt(r, 16),
      alpha: s ? parseInt(s, 16) / 255 : 1,
    }
  );
}
const Mi = { test: $o("#"), parse: Eh, transform: Dt.transform },
  pn = {
    test: $o("hsl", "hue"),
    parse: Bd("hue", "saturation", "lightness"),
    transform: ({ hue: e, saturation: t, lightness: n, alpha: r = 1 }) =>
      "hsla(" +
      Math.round(e) +
      ", " +
      tu.transform(rr(t)) +
      ", " +
      tu.transform(rr(n)) +
      ", " +
      rr(Ld.transform(r)) +
      ")",
  },
  Nr = {
    test: (e) => Dt.test(e) || Mi.test(e) || pn.test(e),
    parse: (e) =>
      Dt.test(e) ? Dt.parse(e) : pn.test(e) ? pn.parse(e) : Mi.parse(e),
    transform: (e) =>
      typeof e == "string"
        ? e
        : e.hasOwnProperty("red")
        ? Dt.transform(e)
        : pn.transform(e),
  },
  _h =
    /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function Th(e) {
  var t, n;
  return (
    isNaN(e) &&
    typeof e == "string" &&
    (((t = e.match(Vd)) === null || t === void 0 ? void 0 : t.length) || 0) +
      (((n = e.match(_h)) === null || n === void 0 ? void 0 : n.length) || 0) >
      0
  );
}
const Wd = "number",
  Hd = "color",
  Ph = "var",
  Rh = "var(",
  ru = "${}",
  Mh =
    /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function Fs(e) {
  const t = e.toString(),
    n = [],
    r = { color: [], number: [], var: [] },
    s = [];
  let l = 0;
  const o = t
    .replace(
      Mh,
      (a) => (
        Nr.test(a)
          ? (r.color.push(l), s.push(Hd), n.push(Nr.parse(a)))
          : a.startsWith(Rh)
          ? (r.var.push(l), s.push(Ph), n.push(a))
          : (r.number.push(l), s.push(Wd), n.push(parseFloat(a))),
        ++l,
        ru
      )
    )
    .split(ru);
  return { values: n, split: o, indexes: r, types: s };
}
function Kd(e) {
  return Fs(e).values;
}
function Qd(e) {
  const { split: t, types: n } = Fs(e),
    r = t.length;
  return (s) => {
    let l = "";
    for (let i = 0; i < r; i++)
      if (((l += t[i]), s[i] !== void 0)) {
        const o = n[i];
        o === Wd
          ? (l += rr(s[i]))
          : o === Hd
          ? (l += Nr.transform(s[i]))
          : (l += s[i]);
      }
    return l;
  };
}
const zh = (e) => (typeof e == "number" ? 0 : e);
function Lh(e) {
  const t = Kd(e);
  return Qd(e)(t.map(zh));
}
const Gd = {
    test: Th,
    parse: Kd,
    createTransformer: Qd,
    getAnimatableNone: Lh,
  },
  Ih = new Set(["x", "y", "z"]),
  Oh = Md.filter((e) => !Ih.has(e));
function Ah(e) {
  const t = [];
  return (
    Oh.forEach((n) => {
      const r = e.getValue(n);
      r !== void 0 &&
        (t.push([n, r.get()]), r.set(n.startsWith("scale") ? 1 : 0));
    }),
    t
  );
}
const Bt = new Set();
let zi = !1,
  Li = !1;
function Yd() {
  if (Li) {
    const e = Array.from(Bt).filter((r) => r.needsMeasurement),
      t = new Set(e.map((r) => r.element)),
      n = new Map();
    t.forEach((r) => {
      const s = Ah(r);
      s.length && (n.set(r, s), r.render());
    }),
      e.forEach((r) => r.measureInitialState()),
      t.forEach((r) => {
        r.render();
        const s = n.get(r);
        s &&
          s.forEach(([l, i]) => {
            var o;
            (o = r.getValue(l)) === null || o === void 0 || o.set(i);
          });
      }),
      e.forEach((r) => r.measureEndState()),
      e.forEach((r) => {
        r.suspendedScrollY !== void 0 && window.scrollTo(0, r.suspendedScrollY);
      });
  }
  (Li = !1), (zi = !1), Bt.forEach((e) => e.complete()), Bt.clear();
}
function Xd() {
  Bt.forEach((e) => {
    e.readKeyframes(), e.needsMeasurement && (Li = !0);
  });
}
function Fh() {
  Xd(), Yd();
}
class Dh {
  constructor(t, n, r, s, l, i = !1) {
    (this.isComplete = !1),
      (this.isAsync = !1),
      (this.needsMeasurement = !1),
      (this.isScheduled = !1),
      (this.unresolvedKeyframes = [...t]),
      (this.onComplete = n),
      (this.name = r),
      (this.motionValue = s),
      (this.element = l),
      (this.isAsync = i);
  }
  scheduleResolve() {
    (this.isScheduled = !0),
      this.isAsync
        ? (Bt.add(this),
          zi || ((zi = !0), kr.read(Xd), kr.resolveKeyframes(Yd)))
        : (this.readKeyframes(), this.complete());
  }
  readKeyframes() {
    const {
      unresolvedKeyframes: t,
      name: n,
      element: r,
      motionValue: s,
    } = this;
    for (let l = 0; l < t.length; l++)
      if (t[l] === null)
        if (l === 0) {
          const i = s == null ? void 0 : s.get(),
            o = t[t.length - 1];
          if (i !== void 0) t[0] = i;
          else if (r && n) {
            const a = r.readValue(n, o);
            a != null && (t[0] = a);
          }
          t[0] === void 0 && (t[0] = o), s && i === void 0 && s.set(t[0]);
        } else t[l] = t[l - 1];
  }
  setFinalKeyframe() {}
  measureInitialState() {}
  renderEndStyles() {}
  measureEndState() {}
  complete() {
    (this.isComplete = !0),
      this.onComplete(this.unresolvedKeyframes, this.finalKeyframe),
      Bt.delete(this);
  }
  cancel() {
    this.isComplete || ((this.isScheduled = !1), Bt.delete(this));
  }
  resume() {
    this.isComplete || this.scheduleResolve();
  }
}
const su = (e, t) =>
  t === "zIndex"
    ? !1
    : !!(
        typeof e == "number" ||
        Array.isArray(e) ||
        (typeof e == "string" &&
          (Gd.test(e) || e === "0") &&
          !e.startsWith("url("))
      );
function $h(e) {
  const t = e[0];
  if (e.length === 1) return !0;
  for (let n = 0; n < e.length; n++) if (e[n] !== t) return !0;
}
function Uh(e, t, n, r) {
  const s = e[0];
  if (s === null) return !1;
  if (t === "display" || t === "visibility") return !0;
  const l = e[e.length - 1],
    i = su(s, t),
    o = su(l, t);
  return !i || !o ? !1 : $h(e) || ((n === "spring" || Od(n)) && r);
}
const Vh = (e) => e !== null;
function qd(e, { repeat: t, repeatType: n = "loop" }, r) {
  const s = e.filter(Vh),
    l = t && n !== "loop" && t % 2 === 1 ? 0 : s.length - 1;
  return !l || r === void 0 ? s[l] : r;
}
const Bh = 40;
class Wh {
  constructor({
    autoplay: t = !0,
    delay: n = 0,
    type: r = "keyframes",
    repeat: s = 0,
    repeatDelay: l = 0,
    repeatType: i = "loop",
    ...o
  }) {
    (this.isStopped = !1),
      (this.hasAttemptedResolve = !1),
      (this.createdAt = Vt.now()),
      (this.options = {
        autoplay: t,
        delay: n,
        type: r,
        repeat: s,
        repeatDelay: l,
        repeatType: i,
        ...o,
      }),
      this.updateFinishedPromise();
  }
  calcStartTime() {
    return this.resolvedAt
      ? this.resolvedAt - this.createdAt > Bh
        ? this.resolvedAt
        : this.createdAt
      : this.createdAt;
  }
  get resolved() {
    return !this._resolved && !this.hasAttemptedResolve && Fh(), this._resolved;
  }
  onKeyframesResolved(t, n) {
    (this.resolvedAt = Vt.now()), (this.hasAttemptedResolve = !0);
    const {
      name: r,
      type: s,
      velocity: l,
      delay: i,
      onComplete: o,
      onUpdate: a,
      isGenerator: c,
    } = this.options;
    if (!c && !Uh(t, r, s, l))
      if (i) this.options.duration = 0;
      else {
        a && a(qd(t, this.options, n)), o && o(), this.resolveFinishedPromise();
        return;
      }
    const p = this.initPlayback(t, n);
    p !== !1 &&
      ((this._resolved = { keyframes: t, finalKeyframe: n, ...p }),
      this.onPostResolved());
  }
  onPostResolved() {}
  then(t, n) {
    return this.currentFinishedPromise.then(t, n);
  }
  flatten() {
    (this.options.type = "keyframes"), (this.options.ease = "linear");
  }
  updateFinishedPromise() {
    this.currentFinishedPromise = new Promise((t) => {
      this.resolveFinishedPromise = t;
    });
  }
}
const sl = (e, t, n) => e + (t - e) * n;
function zl(e, t, n) {
  return (
    n < 0 && (n += 1),
    n > 1 && (n -= 1),
    n < 1 / 6
      ? e + (t - e) * 6 * n
      : n < 1 / 2
      ? t
      : n < 2 / 3
      ? e + (t - e) * (2 / 3 - n) * 6
      : e
  );
}
function Hh({ hue: e, saturation: t, lightness: n, alpha: r }) {
  (e /= 360), (t /= 100), (n /= 100);
  let s = 0,
    l = 0,
    i = 0;
  if (!t) s = l = i = n;
  else {
    const o = n < 0.5 ? n * (1 + t) : n + t - n * t,
      a = 2 * n - o;
    (s = zl(a, o, e + 1 / 3)), (l = zl(a, o, e)), (i = zl(a, o, e - 1 / 3));
  }
  return {
    red: Math.round(s * 255),
    green: Math.round(l * 255),
    blue: Math.round(i * 255),
    alpha: r,
  };
}
function Ds(e, t) {
  return (n) => (n > 0 ? t : e);
}
const Ll = (e, t, n) => {
    const r = e * e,
      s = n * (t * t - r) + r;
    return s < 0 ? 0 : Math.sqrt(s);
  },
  Kh = [Mi, Dt, pn],
  Qh = (e) => Kh.find((t) => t.test(e));
function lu(e) {
  const t = Qh(e);
  if (!t) return !1;
  let n = t.parse(e);
  return t === pn && (n = Hh(n)), n;
}
const iu = (e, t) => {
    const n = lu(e),
      r = lu(t);
    if (!n || !r) return Ds(e, t);
    const s = { ...n };
    return (l) => (
      (s.red = Ll(n.red, r.red, l)),
      (s.green = Ll(n.green, r.green, l)),
      (s.blue = Ll(n.blue, r.blue, l)),
      (s.alpha = sl(n.alpha, r.alpha, l)),
      Dt.transform(s)
    );
  },
  Gh = (e, t) => (n) => t(e(n)),
  Uo = (...e) => e.reduce(Gh),
  Ii = new Set(["none", "hidden"]);
function Yh(e, t) {
  return Ii.has(e) ? (n) => (n <= 0 ? e : t) : (n) => (n >= 1 ? t : e);
}
function Xh(e, t) {
  return (n) => sl(e, t, n);
}
function Vo(e) {
  return typeof e == "number"
    ? Xh
    : typeof e == "string"
    ? sh(e)
      ? Ds
      : Nr.test(e)
      ? iu
      : Jh
    : Array.isArray(e)
    ? Zd
    : typeof e == "object"
    ? Nr.test(e)
      ? iu
      : qh
    : Ds;
}
function Zd(e, t) {
  const n = [...e],
    r = n.length,
    s = e.map((l, i) => Vo(l)(l, t[i]));
  return (l) => {
    for (let i = 0; i < r; i++) n[i] = s[i](l);
    return n;
  };
}
function qh(e, t) {
  const n = { ...e, ...t },
    r = {};
  for (const s in n)
    e[s] !== void 0 && t[s] !== void 0 && (r[s] = Vo(e[s])(e[s], t[s]));
  return (s) => {
    for (const l in r) n[l] = r[l](s);
    return n;
  };
}
function Zh(e, t) {
  var n;
  const r = [],
    s = { color: 0, var: 0, number: 0 };
  for (let l = 0; l < t.values.length; l++) {
    const i = t.types[l],
      o = e.indexes[i][s[i]],
      a = (n = e.values[o]) !== null && n !== void 0 ? n : 0;
    (r[l] = a), s[i]++;
  }
  return r;
}
const Jh = (e, t) => {
  const n = Gd.createTransformer(t),
    r = Fs(e),
    s = Fs(t);
  return r.indexes.var.length === s.indexes.var.length &&
    r.indexes.color.length === s.indexes.color.length &&
    r.indexes.number.length >= s.indexes.number.length
    ? (Ii.has(e) && !s.values.length) || (Ii.has(t) && !r.values.length)
      ? Yh(e, t)
      : Uo(Zd(Zh(r, s), s.values), n)
    : Ds(e, t);
};
function Jd(e, t, n) {
  return typeof e == "number" && typeof t == "number" && typeof n == "number"
    ? sl(e, t, n)
    : Vo(e)(e, t);
}
const eg = 5;
function ef(e, t, n) {
  const r = Math.max(t - eg, 0);
  return Ad(n - e(r), t - r);
}
const G = {
    stiffness: 100,
    damping: 10,
    mass: 1,
    velocity: 0,
    duration: 800,
    bounce: 0.3,
    visualDuration: 0.3,
    restSpeed: { granular: 0.01, default: 2 },
    restDelta: { granular: 0.005, default: 0.5 },
    minDuration: 0.01,
    maxDuration: 10,
    minDamping: 0.05,
    maxDamping: 1,
  },
  Il = 0.001;
function tg({
  duration: e = G.duration,
  bounce: t = G.bounce,
  velocity: n = G.velocity,
  mass: r = G.mass,
}) {
  let s,
    l,
    i = 1 - t;
  (i = Yt(G.minDamping, G.maxDamping, i)),
    (e = Yt(G.minDuration, G.maxDuration, wn(e))),
    i < 1
      ? ((s = (c) => {
          const p = c * i,
            g = p * e,
            h = p - n,
            v = Oi(c, i),
            w = Math.exp(-g);
          return Il - (h / v) * w;
        }),
        (l = (c) => {
          const g = c * i * e,
            h = g * n + n,
            v = Math.pow(i, 2) * Math.pow(c, 2) * e,
            w = Math.exp(-g),
            x = Oi(Math.pow(c, 2), i);
          return ((-s(c) + Il > 0 ? -1 : 1) * ((h - v) * w)) / x;
        }))
      : ((s = (c) => {
          const p = Math.exp(-c * e),
            g = (c - n) * e + 1;
          return -Il + p * g;
        }),
        (l = (c) => {
          const p = Math.exp(-c * e),
            g = (n - c) * (e * e);
          return p * g;
        }));
  const o = 5 / e,
    a = rg(s, l, o);
  if (((e = Ao(e)), isNaN(a)))
    return { stiffness: G.stiffness, damping: G.damping, duration: e };
  {
    const c = Math.pow(a, 2) * r;
    return { stiffness: c, damping: i * 2 * Math.sqrt(r * c), duration: e };
  }
}
const ng = 12;
function rg(e, t, n) {
  let r = n;
  for (let s = 1; s < ng; s++) r = r - e(r) / t(r);
  return r;
}
function Oi(e, t) {
  return e * Math.sqrt(1 - t * t);
}
const sg = ["duration", "bounce"],
  lg = ["stiffness", "damping", "mass"];
function ou(e, t) {
  return t.some((n) => e[n] !== void 0);
}
function ig(e) {
  let t = {
    velocity: G.velocity,
    stiffness: G.stiffness,
    damping: G.damping,
    mass: G.mass,
    isResolvedFromDuration: !1,
    ...e,
  };
  if (!ou(e, lg) && ou(e, sg))
    if (e.visualDuration) {
      const n = e.visualDuration,
        r = (2 * Math.PI) / (n * 1.2),
        s = r * r,
        l = 2 * Yt(0.05, 1, 1 - (e.bounce || 0)) * Math.sqrt(s);
      t = { ...t, mass: G.mass, stiffness: s, damping: l };
    } else {
      const n = tg(e);
      (t = { ...t, ...n, mass: G.mass }), (t.isResolvedFromDuration = !0);
    }
  return t;
}
function tf(e = G.visualDuration, t = G.bounce) {
  const n =
    typeof e != "object"
      ? { visualDuration: e, keyframes: [0, 1], bounce: t }
      : e;
  let { restSpeed: r, restDelta: s } = n;
  const l = n.keyframes[0],
    i = n.keyframes[n.keyframes.length - 1],
    o = { done: !1, value: l },
    {
      stiffness: a,
      damping: c,
      mass: p,
      duration: g,
      velocity: h,
      isResolvedFromDuration: v,
    } = ig({ ...n, velocity: -wn(n.velocity || 0) }),
    w = h || 0,
    x = c / (2 * Math.sqrt(a * p)),
    E = i - l,
    f = wn(Math.sqrt(a / p)),
    d = Math.abs(E) < 5;
  r || (r = d ? G.restSpeed.granular : G.restSpeed.default),
    s || (s = d ? G.restDelta.granular : G.restDelta.default);
  let m;
  if (x < 1) {
    const k = Oi(f, x);
    m = (j) => {
      const C = Math.exp(-x * f * j);
      return (
        i - C * (((w + x * f * E) / k) * Math.sin(k * j) + E * Math.cos(k * j))
      );
    };
  } else if (x === 1) m = (k) => i - Math.exp(-f * k) * (E + (w + f * E) * k);
  else {
    const k = f * Math.sqrt(x * x - 1);
    m = (j) => {
      const C = Math.exp(-x * f * j),
        N = Math.min(k * j, 300);
      return (
        i - (C * ((w + x * f * E) * Math.sinh(N) + k * E * Math.cosh(N))) / k
      );
    };
  }
  const y = {
    calculatedDuration: (v && g) || null,
    next: (k) => {
      const j = m(k);
      if (v) o.done = k >= g;
      else {
        let C = 0;
        x < 1 && (C = k === 0 ? Ao(w) : ef(m, k, j));
        const N = Math.abs(C) <= r,
          z = Math.abs(i - j) <= s;
        o.done = N && z;
      }
      return (o.value = o.done ? i : j), o;
    },
    toString: () => {
      const k = Math.min(Id(y), Ri),
        j = ah((C) => y.next(k * C).value, k, 30);
      return k + "ms " + j;
    },
  };
  return y;
}
function au({
  keyframes: e,
  velocity: t = 0,
  power: n = 0.8,
  timeConstant: r = 325,
  bounceDamping: s = 10,
  bounceStiffness: l = 500,
  modifyTarget: i,
  min: o,
  max: a,
  restDelta: c = 0.5,
  restSpeed: p,
}) {
  const g = e[0],
    h = { done: !1, value: g },
    v = (N) => (o !== void 0 && N < o) || (a !== void 0 && N > a),
    w = (N) =>
      o === void 0
        ? a
        : a === void 0 || Math.abs(o - N) < Math.abs(a - N)
        ? o
        : a;
  let x = n * t;
  const E = g + x,
    f = i === void 0 ? E : i(E);
  f !== E && (x = f - g);
  const d = (N) => -x * Math.exp(-N / r),
    m = (N) => f + d(N),
    y = (N) => {
      const z = d(N),
        T = m(N);
      (h.done = Math.abs(z) <= c), (h.value = h.done ? f : T);
    };
  let k, j;
  const C = (N) => {
    v(h.value) &&
      ((k = N),
      (j = tf({
        keyframes: [h.value, w(h.value)],
        velocity: ef(m, N, h.value),
        damping: s,
        stiffness: l,
        restDelta: c,
        restSpeed: p,
      })));
  };
  return (
    C(0),
    {
      calculatedDuration: null,
      next: (N) => {
        let z = !1;
        return (
          !j && k === void 0 && ((z = !0), y(N), C(N)),
          k !== void 0 && N >= k ? j.next(N - k) : (!z && y(N), h)
        );
      },
    }
  );
}
const og = Pr(0.42, 0, 1, 1),
  ag = Pr(0, 0, 0.58, 1),
  nf = Pr(0.42, 0, 0.58, 1),
  ug = (e) => Array.isArray(e) && typeof e[0] != "number",
  cg = {
    linear: Tr,
    easeIn: og,
    easeInOut: nf,
    easeOut: ag,
    circIn: Do,
    circInOut: Nh,
    circOut: Sh,
    backIn: Fo,
    backInOut: wh,
    backOut: Ud,
    anticipate: kh,
  },
  uu = (e) => {
    if (oh(e)) {
      Rd(e.length === 4);
      const [t, n, r, s] = e;
      return Pr(t, n, r, s);
    } else if (typeof e == "string") return cg[e];
    return e;
  };
function dg(e, t, n) {
  const r = [],
    s = n || Jd,
    l = e.length - 1;
  for (let i = 0; i < l; i++) {
    let o = s(e[i], e[i + 1]);
    if (t) {
      const a = Array.isArray(t) ? t[i] || Tr : t;
      o = Uo(a, o);
    }
    r.push(o);
  }
  return r;
}
function fg(e, t, { clamp: n = !0, ease: r, mixer: s } = {}) {
  const l = e.length;
  if ((Rd(l === t.length), l === 1)) return () => t[0];
  if (l === 2 && t[0] === t[1]) return () => t[1];
  const i = e[0] === e[1];
  e[0] > e[l - 1] && ((e = [...e].reverse()), (t = [...t].reverse()));
  const o = dg(t, r, s),
    a = o.length,
    c = (p) => {
      if (i && p < e[0]) return t[0];
      let g = 0;
      if (a > 1) for (; g < e.length - 2 && !(p < e[g + 1]); g++);
      const h = Oo(e[g], e[g + 1], p);
      return o[g](h);
    };
  return n ? (p) => c(Yt(e[0], e[l - 1], p)) : c;
}
function pg(e, t) {
  const n = e[e.length - 1];
  for (let r = 1; r <= t; r++) {
    const s = Oo(0, t, r);
    e.push(sl(n, 1, s));
  }
}
function mg(e) {
  const t = [0];
  return pg(t, e.length - 1), t;
}
function hg(e, t) {
  return e.map((n) => n * t);
}
function gg(e, t) {
  return e.map(() => t || nf).splice(0, e.length - 1);
}
function $s({
  duration: e = 300,
  keyframes: t,
  times: n,
  ease: r = "easeInOut",
}) {
  const s = ug(r) ? r.map(uu) : uu(r),
    l = { done: !1, value: t[0] },
    i = hg(n && n.length === t.length ? n : mg(t), e),
    o = fg(i, t, { ease: Array.isArray(s) ? s : gg(t, s) });
  return {
    calculatedDuration: e,
    next: (a) => ((l.value = o(a)), (l.done = a >= e), l),
  };
}
const vg = (e) => {
    const t = ({ timestamp: n }) => e(n);
    return {
      start: () => kr.update(t, !0),
      stop: () => th(t),
      now: () => (Sr.isProcessing ? Sr.timestamp : Vt.now()),
    };
  },
  xg = { decay: au, inertia: au, tween: $s, keyframes: $s, spring: tf },
  yg = (e) => e / 100;
class wg extends Wh {
  constructor(t) {
    super(t),
      (this.holdTime = null),
      (this.cancelTime = null),
      (this.currentTime = 0),
      (this.playbackSpeed = 1),
      (this.pendingPlayState = "running"),
      (this.startTime = null),
      (this.state = "idle"),
      (this.stop = () => {
        if (
          (this.resolver.cancel(), (this.isStopped = !0), this.state === "idle")
        )
          return;
        this.teardown();
        const { onStop: a } = this.options;
        a && a();
      });
    const { name: n, motionValue: r, element: s, keyframes: l } = this.options,
      i = (s == null ? void 0 : s.KeyframeResolver) || Dh,
      o = (a, c) => this.onKeyframesResolved(a, c);
    (this.resolver = new i(l, o, n, r, s)), this.resolver.scheduleResolve();
  }
  flatten() {
    super.flatten(),
      this._resolved &&
        Object.assign(
          this._resolved,
          this.initPlayback(this._resolved.keyframes)
        );
  }
  initPlayback(t) {
    const {
        type: n = "keyframes",
        repeat: r = 0,
        repeatDelay: s = 0,
        repeatType: l,
        velocity: i = 0,
      } = this.options,
      o = Od(n) ? n : xg[n] || $s;
    let a, c;
    o !== $s &&
      typeof t[0] != "number" &&
      ((a = Uo(yg, Jd(t[0], t[1]))), (t = [0, 100]));
    const p = o({ ...this.options, keyframes: t });
    l === "mirror" &&
      (c = o({ ...this.options, keyframes: [...t].reverse(), velocity: -i })),
      p.calculatedDuration === null && (p.calculatedDuration = Id(p));
    const { calculatedDuration: g } = p,
      h = g + s,
      v = h * (r + 1) - s;
    return {
      generator: p,
      mirroredGenerator: c,
      mapPercentToKeyframes: a,
      calculatedDuration: g,
      resolvedDuration: h,
      totalDuration: v,
    };
  }
  onPostResolved() {
    const { autoplay: t = !0 } = this.options;
    this.play(),
      this.pendingPlayState === "paused" || !t
        ? this.pause()
        : (this.state = this.pendingPlayState);
  }
  tick(t, n = !1) {
    const { resolved: r } = this;
    if (!r) {
      const { keyframes: N } = this.options;
      return { done: !0, value: N[N.length - 1] };
    }
    const {
      finalKeyframe: s,
      generator: l,
      mirroredGenerator: i,
      mapPercentToKeyframes: o,
      keyframes: a,
      calculatedDuration: c,
      totalDuration: p,
      resolvedDuration: g,
    } = r;
    if (this.startTime === null) return l.next(0);
    const {
      delay: h,
      repeat: v,
      repeatType: w,
      repeatDelay: x,
      onUpdate: E,
    } = this.options;
    this.speed > 0
      ? (this.startTime = Math.min(this.startTime, t))
      : this.speed < 0 &&
        (this.startTime = Math.min(t - p / this.speed, this.startTime)),
      n
        ? (this.currentTime = t)
        : this.holdTime !== null
        ? (this.currentTime = this.holdTime)
        : (this.currentTime = Math.round(t - this.startTime) * this.speed);
    const f = this.currentTime - h * (this.speed >= 0 ? 1 : -1),
      d = this.speed >= 0 ? f < 0 : f > p;
    (this.currentTime = Math.max(f, 0)),
      this.state === "finished" &&
        this.holdTime === null &&
        (this.currentTime = p);
    let m = this.currentTime,
      y = l;
    if (v) {
      const N = Math.min(this.currentTime, p) / g;
      let z = Math.floor(N),
        T = N % 1;
      !T && N >= 1 && (T = 1),
        T === 1 && z--,
        (z = Math.min(z, v + 1)),
        !!(z % 2) &&
          (w === "reverse"
            ? ((T = 1 - T), x && (T -= x / g))
            : w === "mirror" && (y = i)),
        (m = Yt(0, 1, T) * g);
    }
    const k = d ? { done: !1, value: a[0] } : y.next(m);
    o && (k.value = o(k.value));
    let { done: j } = k;
    !d &&
      c !== null &&
      (j = this.speed >= 0 ? this.currentTime >= p : this.currentTime <= 0);
    const C =
      this.holdTime === null &&
      (this.state === "finished" || (this.state === "running" && j));
    return (
      C && s !== void 0 && (k.value = qd(a, this.options, s)),
      E && E(k.value),
      C && this.finish(),
      k
    );
  }
  get duration() {
    const { resolved: t } = this;
    return t ? wn(t.calculatedDuration) : 0;
  }
  get time() {
    return wn(this.currentTime);
  }
  set time(t) {
    (t = Ao(t)),
      (this.currentTime = t),
      this.holdTime !== null || this.speed === 0
        ? (this.holdTime = t)
        : this.driver && (this.startTime = this.driver.now() - t / this.speed);
  }
  get speed() {
    return this.playbackSpeed;
  }
  set speed(t) {
    const n = this.playbackSpeed !== t;
    (this.playbackSpeed = t), n && (this.time = wn(this.currentTime));
  }
  play() {
    if (
      (this.resolver.isScheduled || this.resolver.resume(), !this._resolved)
    ) {
      this.pendingPlayState = "running";
      return;
    }
    if (this.isStopped) return;
    const { driver: t = vg, onPlay: n, startTime: r } = this.options;
    this.driver || (this.driver = t((l) => this.tick(l))), n && n();
    const s = this.driver.now();
    this.holdTime !== null
      ? (this.startTime = s - this.holdTime)
      : this.startTime
      ? this.state === "finished" && (this.startTime = s)
      : (this.startTime = r ?? this.calcStartTime()),
      this.state === "finished" && this.updateFinishedPromise(),
      (this.cancelTime = this.startTime),
      (this.holdTime = null),
      (this.state = "running"),
      this.driver.start();
  }
  pause() {
    var t;
    if (!this._resolved) {
      this.pendingPlayState = "paused";
      return;
    }
    (this.state = "paused"),
      (this.holdTime = (t = this.currentTime) !== null && t !== void 0 ? t : 0);
  }
  complete() {
    this.state !== "running" && this.play(),
      (this.pendingPlayState = this.state = "finished"),
      (this.holdTime = null);
  }
  finish() {
    this.teardown(), (this.state = "finished");
    const { onComplete: t } = this.options;
    t && t();
  }
  cancel() {
    this.cancelTime !== null && this.tick(this.cancelTime),
      this.teardown(),
      this.updateFinishedPromise();
  }
  teardown() {
    (this.state = "idle"),
      this.stopDriver(),
      this.resolveFinishedPromise(),
      this.updateFinishedPromise(),
      (this.startTime = this.cancelTime = null),
      this.resolver.cancel();
  }
  stopDriver() {
    this.driver && (this.driver.stop(), (this.driver = void 0));
  }
  sample(t) {
    return (this.startTime = 0), this.tick(t, !0);
  }
}
function kg(e) {
  return new wg(e);
}
function rf(e) {
  const t = Gm(() => gh(e)),
    { isStatic: n } = I.useContext(Pd);
  if (n) {
    const [, r] = I.useState(e);
    I.useEffect(() => t.on("change", r), []);
  }
  return t;
}
function cu(e) {
  return typeof e == "number" ? e : parseFloat(e);
}
function Sg(e, t = {}) {
  const { isStatic: n } = I.useContext(Pd),
    r = I.useRef(null),
    s = rf(eu(e) ? cu(e.get()) : e),
    l = I.useRef(s.get()),
    i = I.useRef(() => {}),
    o = () => {
      const c = r.current;
      c && c.time === 0 && c.sample(Sr.delta),
        a(),
        (r.current = kg({
          keyframes: [s.get(), l.current],
          velocity: s.getVelocity(),
          type: "spring",
          restDelta: 0.001,
          restSpeed: 0.01,
          ...t,
          onUpdate: i.current,
        }));
    },
    a = () => {
      r.current && r.current.stop();
    };
  return (
    I.useInsertionEffect(
      () =>
        s.attach(
          (c, p) =>
            n
              ? p(c)
              : ((l.current = c), (i.current = p), kr.update(o), s.get()),
          a
        ),
      [JSON.stringify(t)]
    ),
    Xm(() => {
      if (eu(e)) return e.on("change", (c) => s.set(cu(c)));
    }, [s]),
    s
  );
}
const Ng = { some: 0, all: 1 };
function jg(e, t, { root: n, margin: r, amount: s = "some" } = {}) {
  const l = uh(e),
    i = new WeakMap(),
    o = (c) => {
      c.forEach((p) => {
        const g = i.get(p.target);
        if (p.isIntersecting !== !!g)
          if (p.isIntersecting) {
            const h = t(p);
            typeof h == "function" ? i.set(p.target, h) : a.unobserve(p.target);
          } else typeof g == "function" && (g(p), i.delete(p.target));
      });
    },
    a = new IntersectionObserver(o, {
      root: n,
      rootMargin: r,
      threshold: typeof s == "number" ? s : Ng[s],
    });
  return l.forEach((c) => a.observe(c)), () => a.disconnect();
}
function Cg(e, { root: t, margin: n, amount: r, once: s = !1 } = {}) {
  const [l, i] = I.useState(!1);
  return (
    I.useEffect(() => {
      if (!e.current || (s && l)) return;
      const o = () => (i(!0), s ? void 0 : () => i(!1)),
        a = { root: (t && t.current) || void 0, margin: n, amount: r };
      return jg(e.current, o, a);
    }, [t, e, n, s, r]),
    l
  );
}
function sf(e) {
  var t,
    n,
    r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object")
    if (Array.isArray(e)) {
      var s = e.length;
      for (t = 0; t < s; t++)
        e[t] && (n = sf(e[t])) && (r && (r += " "), (r += n));
    } else for (n in e) e[n] && (r && (r += " "), (r += n));
  return r;
}
function bg() {
  for (var e, t, n = 0, r = "", s = arguments.length; n < s; n++)
    (e = arguments[n]) && (t = sf(e)) && (r && (r += " "), (r += t));
  return r;
}
const Bo = "-",
  Eg = (e) => {
    const t = Tg(e),
      { conflictingClassGroups: n, conflictingClassGroupModifiers: r } = e;
    return {
      getClassGroupId: (i) => {
        const o = i.split(Bo);
        return o[0] === "" && o.length !== 1 && o.shift(), lf(o, t) || _g(i);
      },
      getConflictingClassGroupIds: (i, o) => {
        const a = n[i] || [];
        return o && r[i] ? [...a, ...r[i]] : a;
      },
    };
  },
  lf = (e, t) => {
    var i;
    if (e.length === 0) return t.classGroupId;
    const n = e[0],
      r = t.nextPart.get(n),
      s = r ? lf(e.slice(1), r) : void 0;
    if (s) return s;
    if (t.validators.length === 0) return;
    const l = e.join(Bo);
    return (i = t.validators.find(({ validator: o }) => o(l))) == null
      ? void 0
      : i.classGroupId;
  },
  du = /^\[(.+)\]$/,
  _g = (e) => {
    if (du.test(e)) {
      const t = du.exec(e)[1],
        n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
      if (n) return "arbitrary.." + n;
    }
  },
  Tg = (e) => {
    const { theme: t, prefix: n } = e,
      r = { nextPart: new Map(), validators: [] };
    return (
      Rg(Object.entries(e.classGroups), n).forEach(([l, i]) => {
        Ai(i, r, l, t);
      }),
      r
    );
  },
  Ai = (e, t, n, r) => {
    e.forEach((s) => {
      if (typeof s == "string") {
        const l = s === "" ? t : fu(t, s);
        l.classGroupId = n;
        return;
      }
      if (typeof s == "function") {
        if (Pg(s)) {
          Ai(s(r), t, n, r);
          return;
        }
        t.validators.push({ validator: s, classGroupId: n });
        return;
      }
      Object.entries(s).forEach(([l, i]) => {
        Ai(i, fu(t, l), n, r);
      });
    });
  },
  fu = (e, t) => {
    let n = e;
    return (
      t.split(Bo).forEach((r) => {
        n.nextPart.has(r) ||
          n.nextPart.set(r, { nextPart: new Map(), validators: [] }),
          (n = n.nextPart.get(r));
      }),
      n
    );
  },
  Pg = (e) => e.isThemeGetter,
  Rg = (e, t) =>
    t
      ? e.map(([n, r]) => {
          const s = r.map((l) =>
            typeof l == "string"
              ? t + l
              : typeof l == "object"
              ? Object.fromEntries(
                  Object.entries(l).map(([i, o]) => [t + i, o])
                )
              : l
          );
          return [n, s];
        })
      : e,
  Mg = (e) => {
    if (e < 1) return { get: () => {}, set: () => {} };
    let t = 0,
      n = new Map(),
      r = new Map();
    const s = (l, i) => {
      n.set(l, i), t++, t > e && ((t = 0), (r = n), (n = new Map()));
    };
    return {
      get(l) {
        let i = n.get(l);
        if (i !== void 0) return i;
        if ((i = r.get(l)) !== void 0) return s(l, i), i;
      },
      set(l, i) {
        n.has(l) ? n.set(l, i) : s(l, i);
      },
    };
  },
  of = "!",
  zg = (e) => {
    const { separator: t, experimentalParseClassName: n } = e,
      r = t.length === 1,
      s = t[0],
      l = t.length,
      i = (o) => {
        const a = [];
        let c = 0,
          p = 0,
          g;
        for (let E = 0; E < o.length; E++) {
          let f = o[E];
          if (c === 0) {
            if (f === s && (r || o.slice(E, E + l) === t)) {
              a.push(o.slice(p, E)), (p = E + l);
              continue;
            }
            if (f === "/") {
              g = E;
              continue;
            }
          }
          f === "[" ? c++ : f === "]" && c--;
        }
        const h = a.length === 0 ? o : o.substring(p),
          v = h.startsWith(of),
          w = v ? h.substring(1) : h,
          x = g && g > p ? g - p : void 0;
        return {
          modifiers: a,
          hasImportantModifier: v,
          baseClassName: w,
          maybePostfixModifierPosition: x,
        };
      };
    return n ? (o) => n({ className: o, parseClassName: i }) : i;
  },
  Lg = (e) => {
    if (e.length <= 1) return e;
    const t = [];
    let n = [];
    return (
      e.forEach((r) => {
        r[0] === "[" ? (t.push(...n.sort(), r), (n = [])) : n.push(r);
      }),
      t.push(...n.sort()),
      t
    );
  },
  Ig = (e) => ({ cache: Mg(e.cacheSize), parseClassName: zg(e), ...Eg(e) }),
  Og = /\s+/,
  Ag = (e, t) => {
    const {
        parseClassName: n,
        getClassGroupId: r,
        getConflictingClassGroupIds: s,
      } = t,
      l = [],
      i = e.trim().split(Og);
    let o = "";
    for (let a = i.length - 1; a >= 0; a -= 1) {
      const c = i[a],
        {
          modifiers: p,
          hasImportantModifier: g,
          baseClassName: h,
          maybePostfixModifierPosition: v,
        } = n(c);
      let w = !!v,
        x = r(w ? h.substring(0, v) : h);
      if (!x) {
        if (!w) {
          o = c + (o.length > 0 ? " " + o : o);
          continue;
        }
        if (((x = r(h)), !x)) {
          o = c + (o.length > 0 ? " " + o : o);
          continue;
        }
        w = !1;
      }
      const E = Lg(p).join(":"),
        f = g ? E + of : E,
        d = f + x;
      if (l.includes(d)) continue;
      l.push(d);
      const m = s(x, w);
      for (let y = 0; y < m.length; ++y) {
        const k = m[y];
        l.push(f + k);
      }
      o = c + (o.length > 0 ? " " + o : o);
    }
    return o;
  };
function Fg() {
  let e = 0,
    t,
    n,
    r = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (n = af(t)) && (r && (r += " "), (r += n));
  return r;
}
const af = (e) => {
  if (typeof e == "string") return e;
  let t,
    n = "";
  for (let r = 0; r < e.length; r++)
    e[r] && (t = af(e[r])) && (n && (n += " "), (n += t));
  return n;
};
function Dg(e, ...t) {
  let n,
    r,
    s,
    l = i;
  function i(a) {
    const c = t.reduce((p, g) => g(p), e());
    return (n = Ig(c)), (r = n.cache.get), (s = n.cache.set), (l = o), o(a);
  }
  function o(a) {
    const c = r(a);
    if (c) return c;
    const p = Ag(a, n);
    return s(a, p), p;
  }
  return function () {
    return l(Fg.apply(null, arguments));
  };
}
const U = (e) => {
    const t = (n) => n[e] || [];
    return (t.isThemeGetter = !0), t;
  },
  uf = /^\[(?:([a-z-]+):)?(.+)\]$/i,
  $g = /^\d+\/\d+$/,
  Ug = new Set(["px", "full", "screen"]),
  Vg = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
  Bg =
    /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
  Wg = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,
  Hg = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
  Kg =
    /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
  Ye = (e) => kn(e) || Ug.has(e) || $g.test(e),
  ut = (e) => zn(e, "length", ev),
  kn = (e) => !!e && !Number.isNaN(Number(e)),
  Ol = (e) => zn(e, "number", kn),
  Vn = (e) => !!e && Number.isInteger(Number(e)),
  Qg = (e) => e.endsWith("%") && kn(e.slice(0, -1)),
  M = (e) => uf.test(e),
  ct = (e) => Vg.test(e),
  Gg = new Set(["length", "size", "percentage"]),
  Yg = (e) => zn(e, Gg, cf),
  Xg = (e) => zn(e, "position", cf),
  qg = new Set(["image", "url"]),
  Zg = (e) => zn(e, qg, nv),
  Jg = (e) => zn(e, "", tv),
  Bn = () => !0,
  zn = (e, t, n) => {
    const r = uf.exec(e);
    return r
      ? r[1]
        ? typeof t == "string"
          ? r[1] === t
          : t.has(r[1])
        : n(r[2])
      : !1;
  },
  ev = (e) => Bg.test(e) && !Wg.test(e),
  cf = () => !1,
  tv = (e) => Hg.test(e),
  nv = (e) => Kg.test(e),
  rv = () => {
    const e = U("colors"),
      t = U("spacing"),
      n = U("blur"),
      r = U("brightness"),
      s = U("borderColor"),
      l = U("borderRadius"),
      i = U("borderSpacing"),
      o = U("borderWidth"),
      a = U("contrast"),
      c = U("grayscale"),
      p = U("hueRotate"),
      g = U("invert"),
      h = U("gap"),
      v = U("gradientColorStops"),
      w = U("gradientColorStopPositions"),
      x = U("inset"),
      E = U("margin"),
      f = U("opacity"),
      d = U("padding"),
      m = U("saturate"),
      y = U("scale"),
      k = U("sepia"),
      j = U("skew"),
      C = U("space"),
      N = U("translate"),
      z = () => ["auto", "contain", "none"],
      T = () => ["auto", "hidden", "clip", "visible", "scroll"],
      oe = () => ["auto", M, t],
      F = () => [M, t],
      it = () => ["", Ye, ut],
      Pt = () => ["auto", kn, M],
      Rr = () => [
        "bottom",
        "center",
        "left",
        "left-bottom",
        "left-top",
        "right",
        "right-bottom",
        "right-top",
        "top",
      ],
      ot = () => ["solid", "dashed", "dotted", "double", "none"],
      Zt = () => [
        "normal",
        "multiply",
        "screen",
        "overlay",
        "darken",
        "lighten",
        "color-dodge",
        "color-burn",
        "hard-light",
        "soft-light",
        "difference",
        "exclusion",
        "hue",
        "saturation",
        "color",
        "luminosity",
      ],
      b = () => [
        "start",
        "end",
        "center",
        "between",
        "around",
        "evenly",
        "stretch",
      ],
      P = () => ["", "0", M],
      R = () => [
        "auto",
        "avoid",
        "all",
        "avoid-page",
        "page",
        "left",
        "right",
        "column",
      ],
      A = () => [kn, M];
    return {
      cacheSize: 500,
      separator: ":",
      theme: {
        colors: [Bn],
        spacing: [Ye, ut],
        blur: ["none", "", ct, M],
        brightness: A(),
        borderColor: [e],
        borderRadius: ["none", "", "full", ct, M],
        borderSpacing: F(),
        borderWidth: it(),
        contrast: A(),
        grayscale: P(),
        hueRotate: A(),
        invert: P(),
        gap: F(),
        gradientColorStops: [e],
        gradientColorStopPositions: [Qg, ut],
        inset: oe(),
        margin: oe(),
        opacity: A(),
        padding: F(),
        saturate: A(),
        scale: A(),
        sepia: P(),
        skew: A(),
        space: F(),
        translate: F(),
      },
      classGroups: {
        aspect: [{ aspect: ["auto", "square", "video", M] }],
        container: ["container"],
        columns: [{ columns: [ct] }],
        "break-after": [{ "break-after": R() }],
        "break-before": [{ "break-before": R() }],
        "break-inside": [
          { "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"] },
        ],
        "box-decoration": [{ "box-decoration": ["slice", "clone"] }],
        box: [{ box: ["border", "content"] }],
        display: [
          "block",
          "inline-block",
          "inline",
          "flex",
          "inline-flex",
          "table",
          "inline-table",
          "table-caption",
          "table-cell",
          "table-column",
          "table-column-group",
          "table-footer-group",
          "table-header-group",
          "table-row-group",
          "table-row",
          "flow-root",
          "grid",
          "inline-grid",
          "contents",
          "list-item",
          "hidden",
        ],
        float: [{ float: ["right", "left", "none", "start", "end"] }],
        clear: [{ clear: ["left", "right", "both", "none", "start", "end"] }],
        isolation: ["isolate", "isolation-auto"],
        "object-fit": [
          { object: ["contain", "cover", "fill", "none", "scale-down"] },
        ],
        "object-position": [{ object: [...Rr(), M] }],
        overflow: [{ overflow: T() }],
        "overflow-x": [{ "overflow-x": T() }],
        "overflow-y": [{ "overflow-y": T() }],
        overscroll: [{ overscroll: z() }],
        "overscroll-x": [{ "overscroll-x": z() }],
        "overscroll-y": [{ "overscroll-y": z() }],
        position: ["static", "fixed", "absolute", "relative", "sticky"],
        inset: [{ inset: [x] }],
        "inset-x": [{ "inset-x": [x] }],
        "inset-y": [{ "inset-y": [x] }],
        start: [{ start: [x] }],
        end: [{ end: [x] }],
        top: [{ top: [x] }],
        right: [{ right: [x] }],
        bottom: [{ bottom: [x] }],
        left: [{ left: [x] }],
        visibility: ["visible", "invisible", "collapse"],
        z: [{ z: ["auto", Vn, M] }],
        basis: [{ basis: oe() }],
        "flex-direction": [
          { flex: ["row", "row-reverse", "col", "col-reverse"] },
        ],
        "flex-wrap": [{ flex: ["wrap", "wrap-reverse", "nowrap"] }],
        flex: [{ flex: ["1", "auto", "initial", "none", M] }],
        grow: [{ grow: P() }],
        shrink: [{ shrink: P() }],
        order: [{ order: ["first", "last", "none", Vn, M] }],
        "grid-cols": [{ "grid-cols": [Bn] }],
        "col-start-end": [{ col: ["auto", { span: ["full", Vn, M] }, M] }],
        "col-start": [{ "col-start": Pt() }],
        "col-end": [{ "col-end": Pt() }],
        "grid-rows": [{ "grid-rows": [Bn] }],
        "row-start-end": [{ row: ["auto", { span: [Vn, M] }, M] }],
        "row-start": [{ "row-start": Pt() }],
        "row-end": [{ "row-end": Pt() }],
        "grid-flow": [
          { "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"] },
        ],
        "auto-cols": [{ "auto-cols": ["auto", "min", "max", "fr", M] }],
        "auto-rows": [{ "auto-rows": ["auto", "min", "max", "fr", M] }],
        gap: [{ gap: [h] }],
        "gap-x": [{ "gap-x": [h] }],
        "gap-y": [{ "gap-y": [h] }],
        "justify-content": [{ justify: ["normal", ...b()] }],
        "justify-items": [
          { "justify-items": ["start", "end", "center", "stretch"] },
        ],
        "justify-self": [
          { "justify-self": ["auto", "start", "end", "center", "stretch"] },
        ],
        "align-content": [{ content: ["normal", ...b(), "baseline"] }],
        "align-items": [
          { items: ["start", "end", "center", "baseline", "stretch"] },
        ],
        "align-self": [
          { self: ["auto", "start", "end", "center", "stretch", "baseline"] },
        ],
        "place-content": [{ "place-content": [...b(), "baseline"] }],
        "place-items": [
          { "place-items": ["start", "end", "center", "baseline", "stretch"] },
        ],
        "place-self": [
          { "place-self": ["auto", "start", "end", "center", "stretch"] },
        ],
        p: [{ p: [d] }],
        px: [{ px: [d] }],
        py: [{ py: [d] }],
        ps: [{ ps: [d] }],
        pe: [{ pe: [d] }],
        pt: [{ pt: [d] }],
        pr: [{ pr: [d] }],
        pb: [{ pb: [d] }],
        pl: [{ pl: [d] }],
        m: [{ m: [E] }],
        mx: [{ mx: [E] }],
        my: [{ my: [E] }],
        ms: [{ ms: [E] }],
        me: [{ me: [E] }],
        mt: [{ mt: [E] }],
        mr: [{ mr: [E] }],
        mb: [{ mb: [E] }],
        ml: [{ ml: [E] }],
        "space-x": [{ "space-x": [C] }],
        "space-x-reverse": ["space-x-reverse"],
        "space-y": [{ "space-y": [C] }],
        "space-y-reverse": ["space-y-reverse"],
        w: [{ w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", M, t] }],
        "min-w": [{ "min-w": [M, t, "min", "max", "fit"] }],
        "max-w": [
          {
            "max-w": [
              M,
              t,
              "none",
              "full",
              "min",
              "max",
              "fit",
              "prose",
              { screen: [ct] },
              ct,
            ],
          },
        ],
        h: [{ h: [M, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"] }],
        "min-h": [
          { "min-h": [M, t, "min", "max", "fit", "svh", "lvh", "dvh"] },
        ],
        "max-h": [
          { "max-h": [M, t, "min", "max", "fit", "svh", "lvh", "dvh"] },
        ],
        size: [{ size: [M, t, "auto", "min", "max", "fit"] }],
        "font-size": [{ text: ["base", ct, ut] }],
        "font-smoothing": ["antialiased", "subpixel-antialiased"],
        "font-style": ["italic", "not-italic"],
        "font-weight": [
          {
            font: [
              "thin",
              "extralight",
              "light",
              "normal",
              "medium",
              "semibold",
              "bold",
              "extrabold",
              "black",
              Ol,
            ],
          },
        ],
        "font-family": [{ font: [Bn] }],
        "fvn-normal": ["normal-nums"],
        "fvn-ordinal": ["ordinal"],
        "fvn-slashed-zero": ["slashed-zero"],
        "fvn-figure": ["lining-nums", "oldstyle-nums"],
        "fvn-spacing": ["proportional-nums", "tabular-nums"],
        "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
        tracking: [
          {
            tracking: [
              "tighter",
              "tight",
              "normal",
              "wide",
              "wider",
              "widest",
              M,
            ],
          },
        ],
        "line-clamp": [{ "line-clamp": ["none", kn, Ol] }],
        leading: [
          {
            leading: [
              "none",
              "tight",
              "snug",
              "normal",
              "relaxed",
              "loose",
              Ye,
              M,
            ],
          },
        ],
        "list-image": [{ "list-image": ["none", M] }],
        "list-style-type": [{ list: ["none", "disc", "decimal", M] }],
        "list-style-position": [{ list: ["inside", "outside"] }],
        "placeholder-color": [{ placeholder: [e] }],
        "placeholder-opacity": [{ "placeholder-opacity": [f] }],
        "text-alignment": [
          { text: ["left", "center", "right", "justify", "start", "end"] },
        ],
        "text-color": [{ text: [e] }],
        "text-opacity": [{ "text-opacity": [f] }],
        "text-decoration": [
          "underline",
          "overline",
          "line-through",
          "no-underline",
        ],
        "text-decoration-style": [{ decoration: [...ot(), "wavy"] }],
        "text-decoration-thickness": [
          { decoration: ["auto", "from-font", Ye, ut] },
        ],
        "underline-offset": [{ "underline-offset": ["auto", Ye, M] }],
        "text-decoration-color": [{ decoration: [e] }],
        "text-transform": [
          "uppercase",
          "lowercase",
          "capitalize",
          "normal-case",
        ],
        "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
        "text-wrap": [{ text: ["wrap", "nowrap", "balance", "pretty"] }],
        indent: [{ indent: F() }],
        "vertical-align": [
          {
            align: [
              "baseline",
              "top",
              "middle",
              "bottom",
              "text-top",
              "text-bottom",
              "sub",
              "super",
              M,
            ],
          },
        ],
        whitespace: [
          {
            whitespace: [
              "normal",
              "nowrap",
              "pre",
              "pre-line",
              "pre-wrap",
              "break-spaces",
            ],
          },
        ],
        break: [{ break: ["normal", "words", "all", "keep"] }],
        hyphens: [{ hyphens: ["none", "manual", "auto"] }],
        content: [{ content: ["none", M] }],
        "bg-attachment": [{ bg: ["fixed", "local", "scroll"] }],
        "bg-clip": [{ "bg-clip": ["border", "padding", "content", "text"] }],
        "bg-opacity": [{ "bg-opacity": [f] }],
        "bg-origin": [{ "bg-origin": ["border", "padding", "content"] }],
        "bg-position": [{ bg: [...Rr(), Xg] }],
        "bg-repeat": [
          { bg: ["no-repeat", { repeat: ["", "x", "y", "round", "space"] }] },
        ],
        "bg-size": [{ bg: ["auto", "cover", "contain", Yg] }],
        "bg-image": [
          {
            bg: [
              "none",
              { "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"] },
              Zg,
            ],
          },
        ],
        "bg-color": [{ bg: [e] }],
        "gradient-from-pos": [{ from: [w] }],
        "gradient-via-pos": [{ via: [w] }],
        "gradient-to-pos": [{ to: [w] }],
        "gradient-from": [{ from: [v] }],
        "gradient-via": [{ via: [v] }],
        "gradient-to": [{ to: [v] }],
        rounded: [{ rounded: [l] }],
        "rounded-s": [{ "rounded-s": [l] }],
        "rounded-e": [{ "rounded-e": [l] }],
        "rounded-t": [{ "rounded-t": [l] }],
        "rounded-r": [{ "rounded-r": [l] }],
        "rounded-b": [{ "rounded-b": [l] }],
        "rounded-l": [{ "rounded-l": [l] }],
        "rounded-ss": [{ "rounded-ss": [l] }],
        "rounded-se": [{ "rounded-se": [l] }],
        "rounded-ee": [{ "rounded-ee": [l] }],
        "rounded-es": [{ "rounded-es": [l] }],
        "rounded-tl": [{ "rounded-tl": [l] }],
        "rounded-tr": [{ "rounded-tr": [l] }],
        "rounded-br": [{ "rounded-br": [l] }],
        "rounded-bl": [{ "rounded-bl": [l] }],
        "border-w": [{ border: [o] }],
        "border-w-x": [{ "border-x": [o] }],
        "border-w-y": [{ "border-y": [o] }],
        "border-w-s": [{ "border-s": [o] }],
        "border-w-e": [{ "border-e": [o] }],
        "border-w-t": [{ "border-t": [o] }],
        "border-w-r": [{ "border-r": [o] }],
        "border-w-b": [{ "border-b": [o] }],
        "border-w-l": [{ "border-l": [o] }],
        "border-opacity": [{ "border-opacity": [f] }],
        "border-style": [{ border: [...ot(), "hidden"] }],
        "divide-x": [{ "divide-x": [o] }],
        "divide-x-reverse": ["divide-x-reverse"],
        "divide-y": [{ "divide-y": [o] }],
        "divide-y-reverse": ["divide-y-reverse"],
        "divide-opacity": [{ "divide-opacity": [f] }],
        "divide-style": [{ divide: ot() }],
        "border-color": [{ border: [s] }],
        "border-color-x": [{ "border-x": [s] }],
        "border-color-y": [{ "border-y": [s] }],
        "border-color-s": [{ "border-s": [s] }],
        "border-color-e": [{ "border-e": [s] }],
        "border-color-t": [{ "border-t": [s] }],
        "border-color-r": [{ "border-r": [s] }],
        "border-color-b": [{ "border-b": [s] }],
        "border-color-l": [{ "border-l": [s] }],
        "divide-color": [{ divide: [s] }],
        "outline-style": [{ outline: ["", ...ot()] }],
        "outline-offset": [{ "outline-offset": [Ye, M] }],
        "outline-w": [{ outline: [Ye, ut] }],
        "outline-color": [{ outline: [e] }],
        "ring-w": [{ ring: it() }],
        "ring-w-inset": ["ring-inset"],
        "ring-color": [{ ring: [e] }],
        "ring-opacity": [{ "ring-opacity": [f] }],
        "ring-offset-w": [{ "ring-offset": [Ye, ut] }],
        "ring-offset-color": [{ "ring-offset": [e] }],
        shadow: [{ shadow: ["", "inner", "none", ct, Jg] }],
        "shadow-color": [{ shadow: [Bn] }],
        opacity: [{ opacity: [f] }],
        "mix-blend": [
          { "mix-blend": [...Zt(), "plus-lighter", "plus-darker"] },
        ],
        "bg-blend": [{ "bg-blend": Zt() }],
        filter: [{ filter: ["", "none"] }],
        blur: [{ blur: [n] }],
        brightness: [{ brightness: [r] }],
        contrast: [{ contrast: [a] }],
        "drop-shadow": [{ "drop-shadow": ["", "none", ct, M] }],
        grayscale: [{ grayscale: [c] }],
        "hue-rotate": [{ "hue-rotate": [p] }],
        invert: [{ invert: [g] }],
        saturate: [{ saturate: [m] }],
        sepia: [{ sepia: [k] }],
        "backdrop-filter": [{ "backdrop-filter": ["", "none"] }],
        "backdrop-blur": [{ "backdrop-blur": [n] }],
        "backdrop-brightness": [{ "backdrop-brightness": [r] }],
        "backdrop-contrast": [{ "backdrop-contrast": [a] }],
        "backdrop-grayscale": [{ "backdrop-grayscale": [c] }],
        "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [p] }],
        "backdrop-invert": [{ "backdrop-invert": [g] }],
        "backdrop-opacity": [{ "backdrop-opacity": [f] }],
        "backdrop-saturate": [{ "backdrop-saturate": [m] }],
        "backdrop-sepia": [{ "backdrop-sepia": [k] }],
        "border-collapse": [{ border: ["collapse", "separate"] }],
        "border-spacing": [{ "border-spacing": [i] }],
        "border-spacing-x": [{ "border-spacing-x": [i] }],
        "border-spacing-y": [{ "border-spacing-y": [i] }],
        "table-layout": [{ table: ["auto", "fixed"] }],
        caption: [{ caption: ["top", "bottom"] }],
        transition: [
          {
            transition: [
              "none",
              "all",
              "",
              "colors",
              "opacity",
              "shadow",
              "transform",
              M,
            ],
          },
        ],
        duration: [{ duration: A() }],
        ease: [{ ease: ["linear", "in", "out", "in-out", M] }],
        delay: [{ delay: A() }],
        animate: [{ animate: ["none", "spin", "ping", "pulse", "bounce", M] }],
        transform: [{ transform: ["", "gpu", "none"] }],
        scale: [{ scale: [y] }],
        "scale-x": [{ "scale-x": [y] }],
        "scale-y": [{ "scale-y": [y] }],
        rotate: [{ rotate: [Vn, M] }],
        "translate-x": [{ "translate-x": [N] }],
        "translate-y": [{ "translate-y": [N] }],
        "skew-x": [{ "skew-x": [j] }],
        "skew-y": [{ "skew-y": [j] }],
        "transform-origin": [
          {
            origin: [
              "center",
              "top",
              "top-right",
              "right",
              "bottom-right",
              "bottom",
              "bottom-left",
              "left",
              "top-left",
              M,
            ],
          },
        ],
        accent: [{ accent: ["auto", e] }],
        appearance: [{ appearance: ["none", "auto"] }],
        cursor: [
          {
            cursor: [
              "auto",
              "default",
              "pointer",
              "wait",
              "text",
              "move",
              "help",
              "not-allowed",
              "none",
              "context-menu",
              "progress",
              "cell",
              "crosshair",
              "vertical-text",
              "alias",
              "copy",
              "no-drop",
              "grab",
              "grabbing",
              "all-scroll",
              "col-resize",
              "row-resize",
              "n-resize",
              "e-resize",
              "s-resize",
              "w-resize",
              "ne-resize",
              "nw-resize",
              "se-resize",
              "sw-resize",
              "ew-resize",
              "ns-resize",
              "nesw-resize",
              "nwse-resize",
              "zoom-in",
              "zoom-out",
              M,
            ],
          },
        ],
        "caret-color": [{ caret: [e] }],
        "pointer-events": [{ "pointer-events": ["none", "auto"] }],
        resize: [{ resize: ["none", "y", "x", ""] }],
        "scroll-behavior": [{ scroll: ["auto", "smooth"] }],
        "scroll-m": [{ "scroll-m": F() }],
        "scroll-mx": [{ "scroll-mx": F() }],
        "scroll-my": [{ "scroll-my": F() }],
        "scroll-ms": [{ "scroll-ms": F() }],
        "scroll-me": [{ "scroll-me": F() }],
        "scroll-mt": [{ "scroll-mt": F() }],
        "scroll-mr": [{ "scroll-mr": F() }],
        "scroll-mb": [{ "scroll-mb": F() }],
        "scroll-ml": [{ "scroll-ml": F() }],
        "scroll-p": [{ "scroll-p": F() }],
        "scroll-px": [{ "scroll-px": F() }],
        "scroll-py": [{ "scroll-py": F() }],
        "scroll-ps": [{ "scroll-ps": F() }],
        "scroll-pe": [{ "scroll-pe": F() }],
        "scroll-pt": [{ "scroll-pt": F() }],
        "scroll-pr": [{ "scroll-pr": F() }],
        "scroll-pb": [{ "scroll-pb": F() }],
        "scroll-pl": [{ "scroll-pl": F() }],
        "snap-align": [{ snap: ["start", "end", "center", "align-none"] }],
        "snap-stop": [{ snap: ["normal", "always"] }],
        "snap-type": [{ snap: ["none", "x", "y", "both"] }],
        "snap-strictness": [{ snap: ["mandatory", "proximity"] }],
        touch: [{ touch: ["auto", "none", "manipulation"] }],
        "touch-x": [{ "touch-pan": ["x", "left", "right"] }],
        "touch-y": [{ "touch-pan": ["y", "up", "down"] }],
        "touch-pz": ["touch-pinch-zoom"],
        select: [{ select: ["none", "text", "all", "auto"] }],
        "will-change": [
          { "will-change": ["auto", "scroll", "contents", "transform", M] },
        ],
        fill: [{ fill: [e, "none"] }],
        "stroke-w": [{ stroke: [Ye, ut, Ol] }],
        stroke: [{ stroke: [e, "none"] }],
        sr: ["sr-only", "not-sr-only"],
        "forced-color-adjust": [{ "forced-color-adjust": ["auto", "none"] }],
      },
      conflictingClassGroups: {
        overflow: ["overflow-x", "overflow-y"],
        overscroll: ["overscroll-x", "overscroll-y"],
        inset: [
          "inset-x",
          "inset-y",
          "start",
          "end",
          "top",
          "right",
          "bottom",
          "left",
        ],
        "inset-x": ["right", "left"],
        "inset-y": ["top", "bottom"],
        flex: ["basis", "grow", "shrink"],
        gap: ["gap-x", "gap-y"],
        p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
        px: ["pr", "pl"],
        py: ["pt", "pb"],
        m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
        mx: ["mr", "ml"],
        my: ["mt", "mb"],
        size: ["w", "h"],
        "font-size": ["leading"],
        "fvn-normal": [
          "fvn-ordinal",
          "fvn-slashed-zero",
          "fvn-figure",
          "fvn-spacing",
          "fvn-fraction",
        ],
        "fvn-ordinal": ["fvn-normal"],
        "fvn-slashed-zero": ["fvn-normal"],
        "fvn-figure": ["fvn-normal"],
        "fvn-spacing": ["fvn-normal"],
        "fvn-fraction": ["fvn-normal"],
        "line-clamp": ["display", "overflow"],
        rounded: [
          "rounded-s",
          "rounded-e",
          "rounded-t",
          "rounded-r",
          "rounded-b",
          "rounded-l",
          "rounded-ss",
          "rounded-se",
          "rounded-ee",
          "rounded-es",
          "rounded-tl",
          "rounded-tr",
          "rounded-br",
          "rounded-bl",
        ],
        "rounded-s": ["rounded-ss", "rounded-es"],
        "rounded-e": ["rounded-se", "rounded-ee"],
        "rounded-t": ["rounded-tl", "rounded-tr"],
        "rounded-r": ["rounded-tr", "rounded-br"],
        "rounded-b": ["rounded-br", "rounded-bl"],
        "rounded-l": ["rounded-tl", "rounded-bl"],
        "border-spacing": ["border-spacing-x", "border-spacing-y"],
        "border-w": [
          "border-w-s",
          "border-w-e",
          "border-w-t",
          "border-w-r",
          "border-w-b",
          "border-w-l",
        ],
        "border-w-x": ["border-w-r", "border-w-l"],
        "border-w-y": ["border-w-t", "border-w-b"],
        "border-color": [
          "border-color-s",
          "border-color-e",
          "border-color-t",
          "border-color-r",
          "border-color-b",
          "border-color-l",
        ],
        "border-color-x": ["border-color-r", "border-color-l"],
        "border-color-y": ["border-color-t", "border-color-b"],
        "scroll-m": [
          "scroll-mx",
          "scroll-my",
          "scroll-ms",
          "scroll-me",
          "scroll-mt",
          "scroll-mr",
          "scroll-mb",
          "scroll-ml",
        ],
        "scroll-mx": ["scroll-mr", "scroll-ml"],
        "scroll-my": ["scroll-mt", "scroll-mb"],
        "scroll-p": [
          "scroll-px",
          "scroll-py",
          "scroll-ps",
          "scroll-pe",
          "scroll-pt",
          "scroll-pr",
          "scroll-pb",
          "scroll-pl",
        ],
        "scroll-px": ["scroll-pr", "scroll-pl"],
        "scroll-py": ["scroll-pt", "scroll-pb"],
        touch: ["touch-x", "touch-y", "touch-pz"],
        "touch-x": ["touch"],
        "touch-y": ["touch"],
        "touch-pz": ["touch"],
      },
      conflictingClassGroupModifiers: { "font-size": ["leading"] },
    };
  },
  sv = Dg(rv);
function lv(...e) {
  return sv(bg(e));
}
function Al({
  value: e,
  direction: t = "up",
  delay: n = 0,
  className: r,
  decimalPlaces: s = 0,
}) {
  const l = I.useRef(null),
    i = rf(t === "down" ? e : 0),
    o = Sg(i, { damping: 60, stiffness: 100 }),
    a = Cg(l, { once: !0, margin: "0px" });
  return (
    I.useEffect(() => {
      a &&
        setTimeout(() => {
          i.set(t === "down" ? 0 : e);
        }, n * 1e3);
    }, [i, a, n, e, t]),
    I.useEffect(
      () =>
        o.on("change", (c) => {
          l.current &&
            (l.current.textContent = Intl.NumberFormat("en-US", {
              minimumFractionDigits: s,
              maximumFractionDigits: s,
            }).format(Number(c.toFixed(s))));
        }),
      [o, s]
    ),
    u.jsx("span", {
      className: lv(
        "inline-block tabular-nums text-black dark:text-white tracking-wider",
        r
      ),
      ref: l,
    })
  );
}
const iv = () =>
    u.jsx("section", {
      className: "py-12 sm:py-16 bg-gradient-to-r from-slate-900 to-slate-800",
      children: u.jsx("div", {
        className: "max-w-6xl mx-auto px-4 sm:px-6 lg:px-8",
        children: u.jsxs("div", {
          className: "grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8",
          children: [
            u.jsxs("div", {
              className: "text-center",
              children: [
                u.jsxs("div", {
                  className:
                    "font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-emerald-400 tracking-tight",
                  children: [
                    u.jsx(Al, { value: 500, className: "text-emerald-400" }),
                    "+",
                  ],
                }),
                u.jsx("div", {
                  className:
                    "font-body text-slate-300 font-light tracking-wide text-base sm:text-lg",
                  children: "Students Taught",
                }),
              ],
            }),
            u.jsxs("div", {
              className: "text-center",
              children: [
                u.jsxs("div", {
                  className:
                    "font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-emerald-400 tracking-tight",
                  children: [
                    u.jsx(Al, {
                      value: 1e4,
                      delay: 0.2,
                      className: "text-emerald-400",
                    }),
                    "+",
                  ],
                }),
                u.jsx("div", {
                  className:
                    "font-body text-slate-300 font-light tracking-wide text-base sm:text-lg",
                  children: "Classes Conducted",
                }),
              ],
            }),
            u.jsxs("div", {
              className: "text-center",
              children: [
                u.jsxs("div", {
                  className:
                    "font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-emerald-400 tracking-tight",
                  children: [
                    u.jsx(Al, {
                      value: 6,
                      delay: 0.4,
                      className: "text-emerald-400",
                    }),
                    "+",
                  ],
                }),
                u.jsx("div", {
                  className:
                    "font-body text-slate-300 font-light tracking-wide text-base sm:text-lg",
                  children: "Years Experience",
                }),
              ],
            }),
          ],
        }),
      }),
    }),
  ov = () => {
    const [e, t] = I.useState(0),
      n = ["main.jpeg", "main2.jpeg", "main3.jpeg", "main4.jpeg"];
    return (
      I.useEffect(() => {
        const r = setInterval(() => {
          t((s) => (s + 1) % n.length);
        }, 3e3);
        return () => clearInterval(r);
      }, [n.length]),
      u.jsx("section", {
        id: "about",
        className: "py-20 bg-white",
        children: u.jsx("div", {
          className: "max-w-6xl mx-auto px-4 sm:px-6 lg:px-8",
          children: u.jsxs("div", {
            className: "grid lg:grid-cols-2 gap-8 lg:gap-12 items-center",
            children: [
              u.jsxs("div", {
                children: [
                  u.jsx("h2", {
                    className:
                      "font-display text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 gradient-text tracking-tight text-center lg:text-left",
                    children: "About Your Coach",
                  }),
                  u.jsx("h3", {
                    className:
                      "font-heading text-xl sm:text-2xl font-semibold mb-4 text-primary-dark tracking-tight text-center lg:text-left",
                    children: "Coach Pallab Bhattacharjee (FIDE Rating: 1550)",
                  }),
                  u.jsx("p", {
                    className:
                      "font-body text-base sm:text-lg text-gray-text mb-4 sm:mb-6 font-light leading-relaxed tracking-wide text-center lg:text-left",
                    children:
                      "Pallab Bhattacharjee is a professional chess player with over 15 years of playing experience. He was awarded District Champion and State Runner-up and achieved his FIDE rating in 2015. With more than 7 years of coaching experience, Pallab enjoys sharing his knowledge with students through both online and offline coaching sessions.",
                  }),
                  u.jsx("p", {
                    className:
                      "font-body text-base sm:text-lg text-gray-text mb-6 sm:mb-8 font-light leading-relaxed tracking-wide text-center lg:text-left",
                    children:
                      "Whether you're a complete beginner learning how pieces move or an advanced player seeking to break through rating plateaus, Pallab tailors each lesson to your specific needs and learning style, focusing on understanding patterns, developing tactical vision, and building strong positional foundations.",
                  }),
                  u.jsxs("div", {
                    className: "grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6",
                    children: [
                      u.jsxs("div", {
                        className:
                          "text-center p-3 sm:p-4 bg-neutral-light rounded-lg border border-gray-200",
                        children: [
                          u.jsx("div", {
                            className: "text-xl sm:text-2xl mb-2",
                            children: "🏆",
                          }),
                          u.jsx("div", {
                            className:
                              "font-heading font-semibold text-primary-dark tracking-tight text-sm sm:text-base",
                            children: "District Champion",
                          }),
                          u.jsx("div", {
                            className:
                              "font-body text-xs sm:text-sm text-gray-text font-light tracking-wide",
                            children: "State Runner-up",
                          }),
                        ],
                      }),
                      u.jsxs("div", {
                        className:
                          "text-center p-3 sm:p-4 bg-neutral-light rounded-lg border border-gray-200",
                        children: [
                          u.jsx("div", {
                            className: "text-xl sm:text-2xl mb-2",
                            children: "📚",
                          }),
                          u.jsx("div", {
                            className:
                              "font-heading font-semibold text-primary-dark tracking-tight text-sm sm:text-base",
                            children: "6+ Years",
                          }),
                          u.jsx("div", {
                            className:
                              "font-body text-xs sm:text-sm text-gray-text font-light tracking-wide",
                            children: "Coaching Experience",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              u.jsxs("div", {
                className: "relative",
                children: [
                  u.jsxs("div", {
                    className:
                      "w-full max-w-md mx-auto rounded-2xl overflow-hidden border border-gray-200 relative",
                    style: { aspectRatio: "853/1280" },
                    children: [
                      n.map((r, s) =>
                        u.jsx(
                          "img",
                          {
                            src: r,
                            alt: `Chess Coach ${s + 1}`,
                            className: `w-full h-full object-cover absolute inset-0 transition-opacity duration-1000 ${
                              s === e ? "opacity-100" : "opacity-0"
                            }`,
                            width: 853,
                            height: 1280,
                          },
                          r
                        )
                      ),
                      u.jsx("div", {
                        className:
                          "absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2",
                        children: n.map((r, s) =>
                          u.jsx(
                            "button",
                            {
                              onClick: () => t(s),
                              className: `w-2 h-2 rounded-full transition-colors duration-300 ${
                                s === e
                                  ? "bg-white"
                                  : "bg-white/50 hover:bg-white/75"
                              }`,
                              "aria-label": `View image ${s + 1}`,
                            },
                            s
                          )
                        ),
                      }),
                    ],
                  }),
                  u.jsx("div", {
                    className:
                      "hidden sm:block absolute -top-3 sm:-top-4 -right-3 sm:-right-4 text-2xl sm:text-3xl lg:text-4xl opacity-30 chess-piece-float text-yellow-500",
                    children: "♜",
                  }),
                  u.jsx("div", {
                    className:
                      "hidden sm:block absolute -bottom-3 sm:-bottom-4 -left-3 sm:-left-4 text-2xl sm:text-3xl lg:text-4xl opacity-30 chess-piece-float text-primary-dark",
                    style: { animationDelay: "2s" },
                    children: "♝",
                  }),
                ],
              }),
            ],
          }),
        }),
      })
    );
  },
  av = () => {
    const e = () => {
      var t;
      (t = document.getElementById("contact")) == null ||
        t.scrollIntoView({ behavior: "smooth" });
    };
    return u.jsx("section", {
      id: "services",
      className: "py-20 bg-gradient-to-br from-neutral-light to-gray-50",
      children: u.jsxs("div", {
        className: "max-w-6xl mx-auto px-4 sm:px-6 lg:px-8",
        children: [
          u.jsxs("div", {
            className: "text-center mb-16",
            children: [
              u.jsx("h2", {
                className:
                  "font-display text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 gradient-text tracking-tight",
                children: "🧠 Coaching Services – Choose Your Learning Style!",
              }),
              u.jsx("p", {
                className:
                  "font-body text-base sm:text-lg lg:text-xl text-gray-text max-w-2xl mx-auto font-light leading-relaxed tracking-wide",
                children:
                  "Flexible learning options designed to fit your schedule and budget",
              }),
            ],
          }),
          u.jsxs("div", {
            className: "grid lg:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto",
            children: [
              u.jsxs("div", {
                className:
                  "bg-white p-6 sm:p-8 rounded-2xl shadow-lg hover-lift border border-gray-100 relative",
                children: [
                  u.jsxs("div", {
                    className: "text-center mb-6",
                    children: [
                      u.jsx("div", {
                        className: "text-3xl sm:text-4xl lg:text-5xl mb-4",
                        children: "👥",
                      }),
                      u.jsx("h3", {
                        className:
                          "font-heading text-xl sm:text-2xl font-semibold text-primary-dark tracking-tight mb-2",
                        children: "Group Classes",
                      }),
                      u.jsx("p", {
                        className:
                          "font-body text-sm sm:text-base text-gray-text font-light tracking-wide",
                        children: "Learn with peers in interactive sessions",
                      }),
                    ],
                  }),
                  u.jsxs("div", {
                    className: "space-y-3 sm:space-y-4 mb-6 sm:mb-8",
                    children: [
                      u.jsxs("div", {
                        className: "flex items-start",
                        children: [
                          u.jsx("span", {
                            className:
                              "text-emerald-600 mr-2 sm:mr-3 mt-1 text-sm sm:text-base",
                            children: "📚",
                          }),
                          u.jsxs("div", {
                            children: [
                              u.jsx("div", {
                                className:
                                  "font-body font-medium text-primary-dark tracking-tight text-sm sm:text-base",
                                children: "Levels:",
                              }),
                              u.jsx("div", {
                                className:
                                  "font-body text-gray-text font-light tracking-wide text-xs sm:text-sm",
                                children: "Beginner, Intermediate, Advanced",
                              }),
                            ],
                          }),
                        ],
                      }),
                      u.jsxs("div", {
                        className: "flex items-start",
                        children: [
                          u.jsx("span", {
                            className:
                              "text-emerald-600 mr-2 sm:mr-3 mt-1 text-sm sm:text-base",
                            children: "📋",
                          }),
                          u.jsxs("div", {
                            children: [
                              u.jsx("div", {
                                className:
                                  "font-body font-medium text-primary-dark tracking-tight text-sm sm:text-base",
                                children: "Topic Structure:",
                              }),
                              u.jsx("div", {
                                className:
                                  "font-body text-gray-text font-light tracking-wide text-xs sm:text-sm",
                                children:
                                  "Topic will be shared before each session",
                              }),
                            ],
                          }),
                        ],
                      }),
                      u.jsxs("div", {
                        className: "flex items-start",
                        children: [
                          u.jsx("span", {
                            className:
                              "text-emerald-600 mr-2 sm:mr-3 mt-1 text-sm sm:text-base",
                            children: "🎯",
                          }),
                          u.jsxs("div", {
                            children: [
                              u.jsx("div", {
                                className:
                                  "font-body font-medium text-primary-dark tracking-tight text-sm sm:text-base",
                                children: "Frequency:",
                              }),
                              u.jsx("div", {
                                className:
                                  "font-body text-gray-text font-light tracking-wide text-xs sm:text-sm",
                                children: "8 live chess classes every month",
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  u.jsx("div", {
                    className: "border-t border-gray-200 pt-4 sm:pt-6",
                    children: u.jsxs("div", {
                      className: "text-center space-y-3",
                      children: [
                        u.jsxs("div", {
                          className: "flex items-center justify-center",
                          children: [
                            u.jsx("span", {
                              className: "text-lg sm:text-xl lg:text-2xl mr-2",
                              children: "💸",
                            }),
                            u.jsxs("div", {
                              children: [
                                u.jsx("div", {
                                  className:
                                    "font-display text-lg sm:text-xl lg:text-2xl font-bold text-primary-dark tracking-tight",
                                  children: "₹2800/month",
                                }),
                                u.jsx("div", {
                                  className:
                                    "font-body text-xs sm:text-sm text-red-600 font-medium tracking-wide",
                                  children: "(25% Discount)",
                                }),
                              ],
                            }),
                          ],
                        }),
                        u.jsxs("div", {
                          className: "text-center",
                          children: [
                            u.jsx("div", {
                              className:
                                "font-body text-gray-text font-light tracking-wide text-sm",
                              children: "or",
                            }),
                            u.jsxs("div", {
                              className:
                                "flex items-center justify-center mt-1",
                              children: [
                                u.jsx("span", {
                                  className:
                                    "text-base sm:text-lg lg:text-xl mr-2",
                                  children: "💸",
                                }),
                                u.jsxs("div", {
                                  children: [
                                    u.jsx("div", {
                                      className:
                                        "font-display text-base sm:text-lg lg:text-xl font-bold text-emerald-600 tracking-tight",
                                      children: "₹2100/month",
                                    }),
                                    u.jsx("div", {
                                      className:
                                        "font-body text-xs sm:text-sm text-emerald-600 font-medium tracking-wide",
                                      children: "if paid upfront",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                ],
              }),
              u.jsxs("div", {
                className:
                  "bg-white p-6 sm:p-8 rounded-2xl shadow-lg hover-lift border border-gray-100 relative",
                children: [
                  u.jsx("div", {
                    className:
                      "absolute -top-2 sm:-top-3 left-1/2 transform -translate-x-1/2",
                    children: u.jsx("div", {
                      className:
                        "bg-emerald-600 text-white px-3 sm:px-4 py-1 rounded-full text-xs sm:text-sm font-medium tracking-wide",
                      children: "Most Popular",
                    }),
                  }),
                  u.jsxs("div", {
                    className: "text-center mb-6",
                    children: [
                      u.jsx("div", {
                        className: "text-3xl sm:text-4xl lg:text-5xl mb-4",
                        children: "👨‍🏫",
                      }),
                      u.jsx("h3", {
                        className:
                          "font-heading text-xl sm:text-2xl font-semibold text-primary-dark tracking-tight mb-2",
                        children: "One-to-One Coaching",
                      }),
                      u.jsx("p", {
                        className:
                          "font-body text-sm sm:text-base text-gray-text font-light tracking-wide",
                        children: "Personalized attention for faster progress",
                      }),
                    ],
                  }),
                  u.jsxs("div", {
                    className: "space-y-3 sm:space-y-4 mb-6 sm:mb-8",
                    children: [
                      u.jsxs("div", {
                        className: "flex items-start",
                        children: [
                          u.jsx("span", {
                            className:
                              "text-emerald-600 mr-2 sm:mr-3 mt-1 text-sm sm:text-base",
                            children: "📚",
                          }),
                          u.jsxs("div", {
                            children: [
                              u.jsx("div", {
                                className:
                                  "font-body font-medium text-primary-dark tracking-tight text-sm sm:text-base",
                                children: "Levels:",
                              }),
                              u.jsx("div", {
                                className:
                                  "font-body text-gray-text font-light tracking-wide text-xs sm:text-sm",
                                children: "Beginner, Intermediate, Advanced",
                              }),
                            ],
                          }),
                        ],
                      }),
                      u.jsxs("div", {
                        className: "flex items-start",
                        children: [
                          u.jsx("span", {
                            className:
                              "text-emerald-600 mr-2 sm:mr-3 mt-1 text-sm sm:text-base",
                            children: "🤝",
                          }),
                          u.jsxs("div", {
                            children: [
                              u.jsx("div", {
                                className:
                                  "font-body font-medium text-primary-dark tracking-tight text-sm sm:text-base",
                                children: "Topic Structure:",
                              }),
                              u.jsx("div", {
                                className:
                                  "font-body text-gray-text font-light tracking-wide text-xs sm:text-sm",
                                children:
                                  "Topic chosen in collaboration with student",
                              }),
                            ],
                          }),
                        ],
                      }),
                      u.jsxs("div", {
                        className: "flex items-start",
                        children: [
                          u.jsx("span", {
                            className:
                              "text-emerald-600 mr-2 sm:mr-3 mt-1 text-sm sm:text-base",
                            children: "🎯",
                          }),
                          u.jsxs("div", {
                            children: [
                              u.jsx("div", {
                                className:
                                  "font-body font-medium text-primary-dark tracking-tight text-sm sm:text-base",
                                children: "Frequency:",
                              }),
                              u.jsx("div", {
                                className:
                                  "font-body text-gray-text font-light tracking-wide text-xs sm:text-sm",
                                children: "4 live chess classes every month",
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  u.jsx("div", {
                    className: "border-t border-gray-200 pt-4 sm:pt-6",
                    children: u.jsxs("div", {
                      className: "text-center space-y-4",
                      children: [
                        u.jsxs("div", {
                          className: "flex items-center justify-center",
                          children: [
                            u.jsx("span", {
                              className: "text-lg sm:text-xl lg:text-2xl mr-2",
                              children: "💸",
                            }),
                            u.jsxs("div", {
                              children: [
                                u.jsx("div", {
                                  className:
                                    "font-display text-base sm:text-lg lg:text-xl font-bold text-primary-dark tracking-tight",
                                  children: "₹6400 or ₹3200/month",
                                }),
                                u.jsx("div", {
                                  className:
                                    "font-body text-xs sm:text-sm text-gray-text font-light tracking-wide",
                                  children: "(Monthly rate)",
                                }),
                              ],
                            }),
                          ],
                        }),
                        u.jsxs("div", {
                          className: "text-center",
                          children: [
                            u.jsx("div", {
                              className:
                                "font-body text-gray-text font-light tracking-wide text-sm",
                              children: "or",
                            }),
                            u.jsxs("div", {
                              className:
                                "flex items-center justify-center mt-1",
                              children: [
                                u.jsx("span", {
                                  className:
                                    "text-base sm:text-lg lg:text-xl mr-2",
                                  children: "💸",
                                }),
                                u.jsxs("div", {
                                  children: [
                                    u.jsx("div", {
                                      className:
                                        "font-display text-base sm:text-lg lg:text-xl font-bold text-emerald-600 tracking-tight",
                                      children: "₹4800 or ₹2400/month",
                                    }),
                                    u.jsx("div", {
                                      className:
                                        "font-body text-xs sm:text-sm text-emerald-600 font-medium tracking-wide",
                                      children: "(with 25% Discount)",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            ],
          }),
          u.jsx("div", {
            className: "text-center mt-12",
            children: u.jsxs("div", {
              className:
                "bg-gradient-to-r from-emerald-50 to-emerald-100 p-4 sm:p-6 rounded-2xl border border-emerald-200 max-w-3xl mx-auto",
              children: [
                u.jsx("p", {
                  className:
                    "font-body text-base sm:text-lg text-emerald-800 mb-4 font-medium tracking-wide",
                  children:
                    "👉 Limited slots available! Enroll now and take your chess skills to the next level.",
                }),
                u.jsx("button", {
                  onClick: e,
                  className:
                    "font-display bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold hover-lift transition-all duration-300 tracking-wide shadow-lg",
                  children: "Enroll Now",
                }),
              ],
            }),
          }),
        ],
      }),
    });
  },
  uv = () => {
    const e = [
        {
          number: "01",
          title: "Free Consultation",
          description: "We discuss your chess goals and current skill level",
          icon: "💬",
        },
        {
          number: "02",
          title: "Skill Assessment",
          description:
            "Play a game to evaluate your strengths and areas for improvement",
          icon: "🎯",
        },
        {
          number: "03",
          title: "Custom Plan",
          description:
            "Receive a personalized learning plan tailored to your needs",
          icon: "📋",
        },
        {
          number: "04",
          title: "Regular Lessons",
          description: "Consistent coaching sessions with progress tracking",
          icon: "📈",
        },
      ],
      t = () => {
        var n;
        (n = document.getElementById("contact")) == null ||
          n.scrollIntoView({ behavior: "smooth" });
      };
    return u.jsx("section", {
      id: "process",
      className: "py-20 bg-white",
      children: u.jsxs("div", {
        className: "max-w-6xl mx-auto px-4 sm:px-6 lg:px-8",
        children: [
          u.jsxs("div", {
            className: "text-center mb-16",
            children: [
              u.jsx("h2", {
                className:
                  "font-display text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 gradient-text tracking-tight",
                children: "How It Works",
              }),
              u.jsx("p", {
                className:
                  "font-body text-base sm:text-lg lg:text-xl text-gray-text max-w-2xl mx-auto font-light leading-relaxed tracking-wide",
                children:
                  "A simple, proven process to accelerate your chess improvement",
              }),
            ],
          }),
          u.jsx("div", {
            className:
              "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8",
            children: e.map((n, r) =>
              u.jsxs(
                "div",
                {
                  className: "text-center relative",
                  children: [
                    r < e.length - 1 &&
                      r % 2 === 0 &&
                      u.jsx("div", {
                        className:
                          "hidden lg:block absolute top-12 sm:top-14 lg:top-16 left-full w-full h-0.5 bg-gray-200 transform -translate-y-1/2 z-0",
                      }),
                    u.jsxs("div", {
                      className: "relative z-10",
                      children: [
                        u.jsx("div", {
                          className:
                            "w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-primary-dark text-white rounded-full flex items-center justify-center font-display text-lg sm:text-xl lg:text-2xl font-bold mx-auto mb-3 sm:mb-4 tracking-tight",
                          children: n.number,
                        }),
                        u.jsx("div", {
                          className:
                            "text-2xl sm:text-3xl lg:text-4xl mb-3 sm:mb-4",
                          children: n.icon,
                        }),
                        u.jsx("h3", {
                          className:
                            "font-heading text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-primary-dark tracking-tight",
                          children: n.title,
                        }),
                        u.jsx("p", {
                          className:
                            "font-body text-sm sm:text-base text-gray-text font-light leading-relaxed tracking-wide",
                          children: n.description,
                        }),
                      ],
                    }),
                  ],
                },
                r
              )
            ),
          }),
          u.jsx("div", {
            className: "text-center mt-12",
            children: u.jsx("button", {
              onClick: t,
              className:
                "font-display bg-primary-dark hover:bg-primary-light text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold hover-lift transition-all duration-300 tracking-wide",
              children: "Start Your Chess Journey",
            }),
          }),
        ],
      }),
    });
  },
  cv = () => {
    const [e, t] = I.useState(null),
      n = [
        {
          id: 1,
          year: "2025",
          image: "/test1.jpeg",
          description:
            "Chess Tournament 2025 winner, showcasing exceptional speed and accuracy in tactical combinations.",
          testimonial:
            "The training here transformed my game completely. I learned to think faster and calculate deeper under time pressure!",
        },
        {
          id: 2,
          year: "2024",
          image: "/test2.jpeg",
          description:
            "Chess Tournament 2024 medalist, known for brilliant endgame techniques and time management.",
          testimonial:
            "The coaching helped me develop incredible time management skills. Now I can play complex positions confidently in rapid games.",
        },
        {
          id: 3,
          year: "2023",
          image: "/test3.jpeg",
          description:
            "Chess Tournament 2023 winner, demonstrated outstanding opening preparation and middle game strategy.",
          testimonial:
            "My opening repertoire expanded dramatically. The strategic concepts I learned here gave me a huge advantage in competitions.",
        },
        {
          id: 4,
          year: "2022",
          image: "/test4.jpeg",
          description:
            "Chess Tournament 2022 medalist, recognized for creative tactical solutions and mental resilience.",
          testimonial:
            "The tactical training was incredible. I can now spot combinations that I would have missed before. My calculation improved tremendously.",
        },
        {
          id: 5,
          year: "2021",
          image: "/test5.jpeg",
          description:
            "Chess Tournament 2021 winner, celebrated for aggressive attacking style and precise calculations.",
          testimonial:
            "Learning aggressive attacking patterns changed my style completely. I went from defensive player to a feared attacker!",
        },
      ];
    return u.jsxs("section", {
      id: "testimonials",
      className:
        "py-16 sm:py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900",
      children: [
        u.jsxs("div", {
          className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
          children: [
            u.jsxs("div", {
              className: "text-center mb-12",
              children: [
                u.jsxs("h2", {
                  className:
                    "font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4",
                  children: [
                    u.jsx("span", {
                      className: "text-emerald-400",
                      children: "Chess Tournament",
                    }),
                    " ",
                    "Champions",
                  ],
                }),
                u.jsx("p", {
                  className:
                    "font-body text-slate-300 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed",
                  children:
                    "Hear directly from our prize-winning students about their journey to success in the Chess Tournament (2021-2025)",
                }),
              ],
            }),
            u.jsx("div", {
              className:
                "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12",
              children: n.map((r) =>
                u.jsxs(
                  "div",
                  {
                    className:
                      "group relative overflow-hidden rounded-2xl bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 hover:border-emerald-500/50 transition-all duration-300 cursor-pointer transform hover:scale-105",
                    onClick: () => t(r),
                    children: [
                      u.jsxs("div", {
                        className: "aspect-square overflow-hidden relative",
                        children: [
                          u.jsx("img", {
                            src: r.image,
                            alt: `Student ${r.year}`,
                            className:
                              "w-full h-full object-cover transition-transform duration-300 group-hover:scale-110",
                          }),
                          u.jsx("div", {
                            className:
                              "absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/30 to-transparent",
                          }),
                          u.jsx("div", {
                            className:
                              "absolute top-4 left-4 px-3 py-1 rounded-full text-sm font-bold bg-emerald-500 text-emerald-900",
                            children: r.year,
                          }),
                          u.jsx("div", {
                            className:
                              "absolute top-4 right-4 text-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300",
                            children: u.jsx("svg", {
                              className: "w-6 h-6",
                              fill: "currentColor",
                              viewBox: "0 0 20 20",
                              children: u.jsx("path", {
                                fillRule: "evenodd",
                                d: "M10 2L7.5 8H2l4.5 3.5L5 18l5-4 5 4-1.5-6.5L18 8h-5.5L10 2z",
                                clipRule: "evenodd",
                              }),
                            }),
                          }),
                        ],
                      }),
                      u.jsxs("div", {
                        className: "p-6",
                        children: [
                          u.jsxs("div", {
                            className: "mb-4",
                            children: [
                              u.jsx("h4", {
                                className:
                                  "font-display text-white font-bold text-lg mb-1",
                                children: "Student Champion",
                              }),
                              u.jsx("p", {
                                className:
                                  "font-body text-emerald-400 text-sm font-semibold mb-1",
                                children: r.year,
                              }),
                              u.jsx("p", {
                                className: "font-body text-slate-400 text-xs",
                                children: "Chess Tournament",
                              }),
                            ],
                          }),
                          u.jsxs("p", {
                            className:
                              "font-body text-slate-300 text-sm italic leading-relaxed mb-4",
                            children: ['"', r.testimonial, '"'],
                          }),
                          u.jsx("div", {
                            className: "flex",
                            children: [...Array(5)].map((s, l) =>
                              u.jsx(
                                "span",
                                {
                                  className: "text-yellow-400 text-lg",
                                  children: "★",
                                },
                                l
                              )
                            ),
                          }),
                        ],
                      }),
                      u.jsx("div", {
                        className:
                          "absolute inset-0 bg-emerald-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300",
                      }),
                    ],
                  },
                  r.id
                )
              ),
            }),
            u.jsxs("div", {
              className: "grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8",
              children: [
                u.jsxs("div", {
                  className:
                    "text-center bg-slate-800/30 rounded-xl p-6 border border-slate-700/30",
                  children: [
                    u.jsx("div", {
                      className:
                        "font-display text-3xl sm:text-4xl font-bold text-emerald-400 mb-2",
                      children: "100+",
                    }),
                    u.jsx("div", {
                      className: "font-body text-slate-300 font-light",
                      children: "Championship Winners",
                    }),
                  ],
                }),
                u.jsxs("div", {
                  className:
                    "text-center bg-slate-800/30 rounded-xl p-6 border border-slate-700/30",
                  children: [
                    u.jsx("div", {
                      className:
                        "font-display text-3xl sm:text-4xl font-bold text-emerald-400 mb-2",
                      children: "6+",
                    }),
                    u.jsx("div", {
                      className: "font-body text-slate-300 font-light",
                      children: "Years of Excellence",
                    }),
                  ],
                }),
                u.jsxs("div", {
                  className:
                    "text-center bg-slate-800/30 rounded-xl p-6 border border-slate-700/30",
                  children: [
                    u.jsx("div", {
                      className:
                        "font-display text-3xl sm:text-4xl font-bold text-emerald-400 mb-2",
                      children: "100%",
                    }),
                    u.jsx("div", {
                      className: "font-body text-slate-300 font-light",
                      children: "Student Satisfaction",
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
        e &&
          u.jsx("div", {
            className:
              "fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4",
            children: u.jsx("div", {
              className:
                "bg-slate-800 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto",
              children: u.jsxs("div", {
                className: "relative",
                children: [
                  u.jsx("button", {
                    onClick: () => t(null),
                    className:
                      "absolute top-4 right-4 text-slate-400 hover:text-white z-10 bg-slate-900/50 rounded-full p-2",
                    children: u.jsx("svg", {
                      className: "w-6 h-6",
                      fill: "none",
                      stroke: "currentColor",
                      viewBox: "0 0 24 24",
                      children: u.jsx("path", {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: 2,
                        d: "M6 18L18 6M6 6l12 12",
                      }),
                    }),
                  }),
                  u.jsx("div", {
                    className: "aspect-video overflow-hidden rounded-t-2xl",
                    children: u.jsx("img", {
                      src: e.image,
                      alt: `Student ${e.year}`,
                      className: "w-full h-full object-cover",
                    }),
                  }),
                  u.jsxs("div", {
                    className: "p-6",
                    children: [
                      u.jsx("div", {
                        className:
                          "inline-block px-3 py-1 rounded-full text-sm font-bold mb-3 bg-emerald-500 text-emerald-900",
                        children: e.year,
                      }),
                      u.jsx("h3", {
                        className:
                          "font-display text-2xl font-bold text-white mb-2",
                        children: "Student Champion",
                      }),
                      u.jsxs("p", {
                        className:
                          "font-body text-emerald-400 font-semibold text-lg mb-4",
                        children: ["Chess Tournament ", e.year],
                      }),
                      u.jsx("p", {
                        className:
                          "font-body text-slate-300 leading-relaxed mb-4",
                        children: e.description,
                      }),
                      u.jsxs("div", {
                        className: "border-t border-slate-700 pt-4",
                        children: [
                          u.jsx("h4", {
                            className:
                              "font-display text-lg font-semibold text-white mb-2",
                            children: "Student Testimonial",
                          }),
                          u.jsxs("p", {
                            className:
                              "font-body text-slate-300 italic leading-relaxed",
                            children: ['"', e.testimonial, '"'],
                          }),
                          u.jsx("div", {
                            className: "flex mt-3",
                            children: [...Array(5)].map((r, s) =>
                              u.jsx(
                                "span",
                                {
                                  className: "text-yellow-400 text-lg",
                                  children: "★",
                                },
                                s
                              )
                            ),
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            }),
          }),
      ],
    });
  };
var dv = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};
const fv = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
  pv = (e, t) => {
    const n = I.forwardRef(
      (
        {
          color: r = "currentColor",
          size: s = 24,
          strokeWidth: l = 2,
          absoluteStrokeWidth: i,
          children: o,
          ...a
        },
        c
      ) =>
        I.createElement(
          "svg",
          {
            ref: c,
            ...dv,
            width: s,
            height: s,
            stroke: r,
            strokeWidth: i ? (Number(l) * 24) / Number(s) : l,
            className: `lucide lucide-${fv(e)}`,
            ...a,
          },
          [
            ...t.map(([p, g]) => I.createElement(p, g)),
            ...((Array.isArray(o) ? o : [o]) || []),
          ]
        )
    );
    return (n.displayName = `${e}`), n;
  };
var Wo = pv;
const mv = Wo("Facebook", [
    [
      "path",
      {
        d: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z",
        key: "1jg4f8",
      },
    ],
  ]),
  hv = Wo("Twitter", [
    [
      "path",
      {
        d: "M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",
        key: "pff0z6",
      },
    ],
  ]),
  gv = Wo("Youtube", [
    [
      "path",
      {
        d: "M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17",
        key: "1q2vi4",
      },
    ],
    ["path", { d: "m10 15 5-3-5-3z", key: "1jp15x" }],
  ]);
function Pe(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return e;
}
function Fi(e, t) {
  return (
    (Fi = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (n, r) {
          return (n.__proto__ = r), n;
        }),
    Fi(e, t)
  );
}
function vv(e, t) {
  (e.prototype = Object.create(t.prototype)),
    (e.prototype.constructor = e),
    Fi(e, t);
}
var xv = Object.defineProperty,
  yv = Object.defineProperties,
  wv = Object.getOwnPropertyDescriptors,
  Us = Object.getOwnPropertySymbols,
  df = Object.prototype.hasOwnProperty,
  ff = Object.prototype.propertyIsEnumerable,
  Di = (e, t, n) =>
    t in e
      ? xv(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n),
  je = (e, t) => {
    for (var n in t || (t = {})) df.call(t, n) && Di(e, n, t[n]);
    if (Us) for (var n of Us(t)) ff.call(t, n) && Di(e, n, t[n]);
    return e;
  },
  pf = (e, t) => yv(e, wv(t)),
  kv = (e, t) => {
    var n = {};
    for (var r in e) df.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
    if (e != null && Us)
      for (var r of Us(e)) t.indexOf(r) < 0 && ff.call(e, r) && (n[r] = e[r]);
    return n;
  },
  te = (e, t, n) => (Di(e, typeof t != "symbol" ? t + "" : t, n), n),
  Tn = (e, t, n) =>
    new Promise((r, s) => {
      var l = (a) => {
          try {
            o(n.next(a));
          } catch (c) {
            s(c);
          }
        },
        i = (a) => {
          try {
            o(n.throw(a));
          } catch (c) {
            s(c);
          }
        },
        o = (a) => (a.done ? r(a.value) : Promise.resolve(a.value).then(l, i));
      o((n = n.apply(e, t)).next());
    }),
  Sv = "hCaptcha-script",
  ps = "hCaptchaOnLoad",
  pu = "script-error",
  It = "@hCaptcha/loader";
function Nv(e) {
  return Object.entries(e)
    .filter(([, t]) => t || t === !1)
    .map(
      ([t, n]) => `${encodeURIComponent(t)}=${encodeURIComponent(String(n))}`
    )
    .join("&");
}
function mf(e) {
  let t = (e && e.ownerDocument) || document,
    n = t.defaultView || t.parentWindow || window;
  return { document: t, window: n };
}
function hf(e) {
  return e || document.head;
}
function jv(e) {
  var t;
  e.setTag("source", It),
    e.setTag("url", document.URL),
    e.setContext("os", { UA: navigator.userAgent }),
    e.setContext("browser", je({}, Cv())),
    e.setContext(
      "device",
      pf(je({}, bv()), {
        screen_width_pixels: screen.width,
        screen_height_pixels: screen.height,
        language: navigator.language,
        orientation:
          ((t = screen.orientation) == null ? void 0 : t.type) || "Unknown",
        processor_count: navigator.hardwareConcurrency,
        platform: navigator.platform,
      })
    );
}
function Cv() {
  var e, t, n, r, s, l;
  let i = navigator.userAgent,
    o,
    a;
  return (
    i.indexOf("Firefox") !== -1
      ? ((o = "Firefox"),
        (a = (e = i.match(/Firefox\/([\d.]+)/)) == null ? void 0 : e[1]))
      : i.indexOf("Edg") !== -1
      ? ((o = "Microsoft Edge"),
        (a = (t = i.match(/Edg\/([\d.]+)/)) == null ? void 0 : t[1]))
      : i.indexOf("Chrome") !== -1 && i.indexOf("Safari") !== -1
      ? ((o = "Chrome"),
        (a = (n = i.match(/Chrome\/([\d.]+)/)) == null ? void 0 : n[1]))
      : i.indexOf("Safari") !== -1 && i.indexOf("Chrome") === -1
      ? ((o = "Safari"),
        (a = (r = i.match(/Version\/([\d.]+)/)) == null ? void 0 : r[1]))
      : i.indexOf("Opera") !== -1 || i.indexOf("OPR") !== -1
      ? ((o = "Opera"),
        (a = (s = i.match(/(Opera|OPR)\/([\d.]+)/)) == null ? void 0 : s[2]))
      : i.indexOf("MSIE") !== -1 || i.indexOf("Trident") !== -1
      ? ((o = "Internet Explorer"),
        (a = (l = i.match(/(MSIE |rv:)([\d.]+)/)) == null ? void 0 : l[2]))
      : ((o = "Unknown"), (a = "Unknown")),
    { name: o, version: a }
  );
}
function bv() {
  let e = navigator.userAgent,
    t;
  e.indexOf("Win") !== -1
    ? (t = "Windows")
    : e.indexOf("Mac") !== -1
    ? (t = "Mac")
    : e.indexOf("Linux") !== -1
    ? (t = "Linux")
    : e.indexOf("Android") !== -1
    ? (t = "Android")
    : e.indexOf("like Mac") !== -1 ||
      e.indexOf("iPhone") !== -1 ||
      e.indexOf("iPad") !== -1
    ? (t = "iOS")
    : (t = "Unknown");
  let n;
  return (
    /Mobile|iPhone|iPod|Android/i.test(e)
      ? (n = "Mobile")
      : /Tablet|iPad/i.test(e)
      ? (n = "Tablet")
      : (n = "Desktop"),
    { model: t, family: t, device: n }
  );
}
var Ev = class gf {
    constructor(t) {
      te(this, "_parent"),
        te(this, "breadcrumbs", []),
        te(this, "context", {}),
        te(this, "extra", {}),
        te(this, "tags", {}),
        te(this, "request"),
        te(this, "user"),
        (this._parent = t);
    }
    get parent() {
      return this._parent;
    }
    child() {
      return new gf(this);
    }
    setRequest(t) {
      return (this.request = t), this;
    }
    removeRequest() {
      return (this.request = void 0), this;
    }
    addBreadcrumb(t) {
      return (
        typeof t.timestamp > "u" && (t.timestamp = new Date().toISOString()),
        this.breadcrumbs.push(t),
        this
      );
    }
    setExtra(t, n) {
      return (this.extra[t] = n), this;
    }
    removeExtra(t) {
      return delete this.extra[t], this;
    }
    setContext(t, n) {
      return typeof n.type > "u" && (n.type = t), (this.context[t] = n), this;
    }
    removeContext(t) {
      return delete this.context[t], this;
    }
    setTags(t) {
      return (this.tags = je(je({}, this.tags), t)), this;
    }
    setTag(t, n) {
      return (this.tags[t] = n), this;
    }
    removeTag(t) {
      return delete this.tags[t], this;
    }
    setUser(t) {
      return (this.user = t), this;
    }
    removeUser() {
      return (this.user = void 0), this;
    }
    toBody() {
      let t = [],
        n = this;
      for (; n; ) t.push(n), (n = n.parent);
      return t.reverse().reduce(
        (r, s) => {
          var l;
          return (
            (r.breadcrumbs = [
              ...((l = r.breadcrumbs) != null ? l : []),
              ...s.breadcrumbs,
            ]),
            (r.extra = je(je({}, r.extra), s.extra)),
            (r.contexts = je(je({}, r.contexts), s.context)),
            (r.tags = je(je({}, r.tags), s.tags)),
            s.user && (r.user = s.user),
            s.request && (r.request = s.request),
            r
          );
        },
        {
          breadcrumbs: [],
          extra: {},
          contexts: {},
          tags: {},
          request: void 0,
          user: void 0,
        }
      );
    }
    clear() {
      (this.breadcrumbs = []),
        (this.context = {}),
        (this.tags = {}),
        (this.user = void 0);
    }
  },
  _v =
    /^\s*at (?:(.*?) ?\()?((?:file|https?|blob|chrome-extension|address|native|eval|webpack|<anonymous>|[-a-z]+:|.*bundle|\/).*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i,
  Tv =
    /^\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:file|https?|blob|chrome|webpack|resource|moz-extension).*?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js))(?::(\d+))?(?::(\d+))?\s*$/i,
  Pv =
    /^\s*at (?:((?:\[object object\])?.+) )?\(?((?:file|ms-appx|https?|webpack|blob):.*?):(\d+)(?::(\d+))?\)?\s*$/i,
  Rv = /^(?:(\w+):)\/\/(?:(\w+)(?::(\w+))?@)([\w.-]+)(?::(\d+))?\/(.+)/,
  Zr = "?",
  mu = "An unknown error occurred",
  Mv = "0.0.4";
function zv(e) {
  for (let t = 0; t < e.length; t++) e[t] = Math.floor(Math.random() * 256);
  return e;
}
function ce(e) {
  return (e + 256).toString(16).substring(1);
}
function Lv() {
  let e = zv(new Array(16));
  return (
    (e[6] = (e[6] & 15) | 64),
    (e[8] = (e[8] & 63) | 128),
    ce(e[0]) +
      ce(e[1]) +
      ce(e[2]) +
      ce(e[3]) +
      "-" +
      ce(e[4]) +
      ce(e[5]) +
      "-" +
      ce(e[6]) +
      ce(e[7]) +
      "-" +
      ce(e[8]) +
      ce(e[9]) +
      "-" +
      ce(e[10]) +
      ce(e[11]) +
      ce(e[12]) +
      ce(e[13]) +
      ce(e[14]) +
      ce(e[15])
  );
}
var Iv = [
  [_v, "chrome"],
  [Pv, "winjs"],
  [Tv, "gecko"],
];
function Ov(e) {
  var t, n, r, s;
  if (!e.stack) return null;
  let l = [],
    i =
      (r =
        (n = (t = e.stack).split) == null
          ? void 0
          : n.call(
              t,
              `
`
            )) != null
        ? r
        : [];
  for (let o = 0; o < i.length; ++o) {
    let a = null,
      c = null,
      p = null;
    for (let [g, h] of Iv)
      if (((c = g.exec(i[o])), c)) {
        p = h;
        break;
      }
    if (!(!c || !p)) {
      if (p === "chrome")
        a = {
          filename:
            (s = c[2]) != null && s.startsWith("address at ")
              ? c[2].substring(11)
              : c[2],
          function: c[1] || Zr,
          lineno: c[3] ? +c[3] : null,
          colno: c[4] ? +c[4] : null,
        };
      else if (p === "winjs")
        a = {
          filename: c[2],
          function: c[1] || Zr,
          lineno: +c[3],
          colno: c[4] ? +c[4] : null,
        };
      else if (p === "gecko")
        o === 0 &&
          !c[5] &&
          e.columnNumber !== void 0 &&
          l.length > 0 &&
          (l[0].column = e.columnNumber + 1),
          (a = {
            filename: c[3],
            function: c[1] || Zr,
            lineno: c[4] ? +c[4] : null,
            colno: c[5] ? +c[5] : null,
          });
      else continue;
      !a.function && a.lineno && (a.function = Zr), l.push(a);
    }
  }
  return l.length ? l.reverse() : null;
}
function Av(e) {
  let t = Ov(e);
  return { type: e.name, value: e.message, stacktrace: { frames: t ?? [] } };
}
function Fv(e) {
  let t = Rv.exec(e),
    n = t ? t.slice(1) : [];
  if (n.length !== 6) throw new Error("Invalid DSN");
  let r = n[5].split("/"),
    s = r.slice(0, -1).join("/");
  return (
    n[0] +
    "://" +
    n[3] +
    (n[4] ? ":" + n[4] : "") +
    (s ? "/" + s : "") +
    "/api/" +
    r.pop() +
    "/envelope/?sentry_version=7&sentry_key=" +
    n[1] +
    (n[2] ? "&sentry_secret=" + n[2] : "")
  );
}
function Dv(e, t, n) {
  var r, s;
  let l = je(
    {
      event_id: Lv().replaceAll("-", ""),
      platform: "javascript",
      sdk: { name: "@hcaptcha/sentry", version: Mv },
      environment: t,
      release: n,
      timestamp: Date.now() / 1e3,
    },
    e.scope.toBody()
  );
  if (e.type === "exception") {
    (l.message =
      (s = (r = e.error) == null ? void 0 : r.message) != null
        ? s
        : "Unknown error"),
      (l.fingerprint = [l.message]);
    let i = [],
      o = e.error;
    for (
      let a = 0;
      a < 5 && o && (i.push(Av(o)), !(!o.cause || !(o.cause instanceof Error)));
      a++
    )
      o = o.cause;
    l.exception = { values: i.reverse() };
  }
  return (
    e.type === "message" && ((l.message = e.message), (l.level = e.level)), l
  );
}
function $v(e) {
  if (e instanceof Error) return e;
  if (typeof e == "string") return new Error(e);
  if (typeof e == "object" && e !== null && !Array.isArray(e)) {
    let n = e,
      { message: r } = n,
      s = kv(n, ["message"]),
      l = new Error(typeof r == "string" ? r : mu);
    return Object.assign(l, s);
  }
  let t = new Error(mu);
  return Object.assign(t, { cause: e });
}
function Uv(e, t, n) {
  return Tn(this, null, function* () {
    var r, s;
    try {
      if (typeof fetch < "u" && typeof AbortSignal < "u") {
        let l;
        if (n) {
          let a = new AbortController();
          (l = a.signal), setTimeout(() => a.abort(), n);
        }
        let i = yield fetch(e, pf(je({}, t), { signal: l })),
          o = yield i.text();
        return { status: i.status, body: o };
      }
      return yield new Promise((l, i) => {
        var o, a;
        let c = new XMLHttpRequest();
        if (
          (c.open((o = t == null ? void 0 : t.method) != null ? o : "GET", e),
          (c.onload = () => l({ status: c.status, body: c.responseText })),
          (c.onerror = () => i(new Error("XHR Network Error"))),
          t == null ? void 0 : t.headers)
        )
          for (let [p, g] of Object.entries(t.headers))
            c.setRequestHeader(p, g);
        if (n) {
          let p = setTimeout(() => {
            c.abort(), i(new Error("Request timed out"));
          }, n);
          c.onloadend = () => {
            clearTimeout(p);
          };
        }
        c.send(
          (a = t == null ? void 0 : t.body) == null ? void 0 : a.toString()
        );
      });
    } catch (l) {
      return {
        status: 0,
        body:
          (s =
            (r = l == null ? void 0 : l.toString) == null
              ? void 0
              : r.call(l)) != null
            ? s
            : "Unknown error",
      };
    }
  });
}
var ve,
  $i =
    ((ve = class {
      constructor(e) {
        te(this, "apiURL"),
          te(this, "dsn"),
          te(this, "environment"),
          te(this, "release"),
          te(this, "sampleRate"),
          te(this, "debug"),
          te(this, "_scope"),
          te(this, "shouldBuffer", !1),
          te(this, "bufferlimit", 20),
          te(this, "buffer", []);
        var t, n, r, s, l;
        (this.environment = e.environment),
          (this.release = e.release),
          (this.sampleRate = (t = e.sampleRate) != null ? t : 1),
          (this.debug = (n = e.debug) != null ? n : !1),
          (this._scope = (r = e.scope) != null ? r : new Ev()),
          (this.apiURL = Fv(e.dsn)),
          (this.dsn = e.dsn),
          (this.shouldBuffer = (s = e.buffer) != null ? s : !1),
          (this.bufferlimit = (l = e.bufferLimit) != null ? l : 20);
      }
      static init(e) {
        ve._instance || (ve._instance = new ve(e));
      }
      static get instance() {
        if (!ve._instance) throw new Error("Sentry has not been initialized");
        return ve._instance;
      }
      log(...e) {
        this.debug && console.log(...e);
      }
      get scope() {
        return this._scope;
      }
      static get scope() {
        return ve.instance.scope;
      }
      withScope(e) {
        let t = this._scope.child();
        e(t);
      }
      static withScope(e) {
        ve.instance.withScope(e);
      }
      captureException(e, t) {
        this.captureEvent({
          type: "exception",
          level: "error",
          error: $v(e),
          scope: t ?? this._scope,
        });
      }
      static captureException(e, t) {
        ve.instance.captureException(e, t);
      }
      captureMessage(e, t = "info", n) {
        this.captureEvent({
          type: "message",
          level: t,
          message: e,
          scope: n ?? this._scope,
        });
      }
      static captureMessage(e, t = "info", n) {
        ve.instance.captureMessage(e, t, n);
      }
      captureEvent(e) {
        if (Math.random() >= this.sampleRate) {
          this.log("Dropped event due to sample rate");
          return;
        }
        if (this.shouldBuffer) {
          if (this.buffer.length >= this.bufferlimit) return;
          this.buffer.push(e);
        } else this.sendEvent(e);
      }
      sendEvent(e, t = 5e3) {
        return Tn(this, null, function* () {
          try {
            this.log("Sending sentry event", e);
            let n = Dv(e, this.environment, this.release),
              r = { event_id: n.event_id, dsn: this.dsn },
              s = { type: "event" },
              l =
                JSON.stringify(r) +
                `
` +
                JSON.stringify(s) +
                `
` +
                JSON.stringify(n),
              i = yield Uv(
                this.apiURL,
                {
                  method: "POST",
                  headers: { "Content-Type": "application/x-sentry-envelope" },
                  body: l,
                },
                t
              );
            this.log("Sentry response", i.status),
              i.status !== 200 &&
                (console.log(i.body),
                console.error("Failed to send event to Sentry", i));
          } catch (n) {
            console.error("Failed to send event", n);
          }
        });
      }
      flush(e = 5e3) {
        return Tn(this, null, function* () {
          try {
            this.log("Flushing sentry events", this.buffer.length);
            let t = this.buffer
              .splice(0, this.buffer.length)
              .map((n) => this.sendEvent(n, e));
            yield Promise.all(t), this.log("Flushed all events");
          } catch (t) {
            console.error("Failed to flush events", t);
          }
        });
      }
      static flush(e = 5e3) {
        return ve.instance.flush(e);
      }
      static reset() {
        ve._instance = void 0;
      }
    }),
    te(ve, "_instance"),
    ve),
  Vv = "https://d233059272824702afc8c43834c4912d@sentry.hcaptcha.com/6",
  Bv = "2.0.0",
  Wv = "production";
function Hv(e = !0) {
  if (!e) return hu();
  $i.init({ dsn: Vv, release: Bv, environment: Wv });
  let t = $i.scope;
  return jv(t), hu(t);
}
function hu(e = null) {
  return {
    addBreadcrumb: (t) => {
      e && e.addBreadcrumb(t);
    },
    captureRequest: (t) => {
      e && e.setRequest(t);
    },
    captureException: (t) => {
      e && $i.captureException(t, e);
    },
  };
}
function Kv(
  {
    scriptLocation: e,
    query: t,
    loadAsync: n = !0,
    crossOrigin: r,
    apihost: s = "https://js.hcaptcha.com",
    cleanup: l = !0,
    secureApi: i = !1,
    scriptSource: o = "",
  } = {},
  a
) {
  let c = hf(e),
    p = mf(c);
  return new Promise((g, h) => {
    let v = p.document.createElement("script");
    (v.id = Sv),
      o
        ? (v.src = `${o}?onload=${ps}`)
        : i
        ? (v.src = `${s}/1/secure-api.js?onload=${ps}`)
        : (v.src = `${s}/1/api.js?onload=${ps}`),
      (v.crossOrigin = r),
      (v.async = n);
    let w = (x, E) => {
      try {
        !i && l && c.removeChild(v), E(x);
      } catch (f) {
        h(f);
      }
    };
    (v.onload = (x) => w(x, g)),
      (v.onerror = (x) => {
        a && a(v.src), w(x, h);
      }),
      (v.src += t !== "" ? `&${t}` : ""),
      c.appendChild(v);
  });
}
var Jr = [];
function Qv(e = { cleanup: !0 }, t) {
  try {
    t.addBreadcrumb({
      category: It,
      message: "hCaptcha loader params",
      data: e,
    });
    let n = hf(e.scriptLocation),
      r = mf(n),
      s = Jr.find(({ scope: i }) => i === r.window);
    if (s)
      return (
        t.addBreadcrumb({ category: It, message: "hCaptcha already loaded" }),
        s.promise
      );
    let l = new Promise((i, o) =>
      Tn(this, null, function* () {
        try {
          r.window[ps] = () => {
            t.addBreadcrumb({
              category: It,
              message: "hCaptcha script called onload function",
            }),
              i(r.window.hcaptcha);
          };
          let a = Nv({
            custom: e.custom,
            render: e.render,
            sentry: e.sentry,
            assethost: e.assethost,
            imghost: e.imghost,
            reportapi: e.reportapi,
            endpoint: e.endpoint,
            host: e.host,
            recaptchacompat: e.recaptchacompat,
            hl: e.hl,
          });
          yield Kv(je({ query: a }, e), (c) => {
            t.captureRequest({ url: c, method: "GET" });
          }),
            t.addBreadcrumb({
              category: It,
              message: "hCaptcha loaded",
              data: s,
            });
        } catch {
          t.addBreadcrumb({ category: It, message: "hCaptcha failed to load" });
          let c = Jr.findIndex((p) => p.scope === r.window);
          c !== -1 && Jr.splice(c, 1), o(new Error(pu));
        }
      })
    );
    return Jr.push({ promise: l, scope: r.window }), l;
  } catch (n) {
    return t.captureException(n), Promise.reject(new Error(pu));
  }
}
function vf(e, t, n = 0) {
  return Tn(this, null, function* () {
    let r = n < 2 ? "Retry loading hCaptcha Api" : "Exceeded maximum retries";
    try {
      return yield Qv(e, t);
    } catch (s) {
      return (
        t.addBreadcrumb({ category: It, message: r }),
        n >= 2
          ? (t.captureException(s), Promise.reject(s))
          : ((n += 1), vf(e, t, n))
      );
    }
  });
}
function Gv() {
  return Tn(this, arguments, function* (e = {}) {
    let t = Hv(e.sentry);
    return yield vf(e, t);
  });
}
function gu(e) {
  var t = (e && e.ownerDocument) || document,
    n = t.defaultView || t.parentWindow || window;
  return { document: t, window: n };
}
function vu(e) {
  return e || document.head;
}
var Yv = (function (e) {
  vv(t, e);
  function t(r) {
    var s;
    return (
      (s = e.call(this, r) || this),
      (s._hcaptcha = void 0),
      (s.renderCaptcha = s.renderCaptcha.bind(Pe(s))),
      (s.resetCaptcha = s.resetCaptcha.bind(Pe(s))),
      (s.removeCaptcha = s.removeCaptcha.bind(Pe(s))),
      (s.isReady = s.isReady.bind(Pe(s))),
      (s._onReady = null),
      (s.loadCaptcha = s.loadCaptcha.bind(Pe(s))),
      (s.handleOnLoad = s.handleOnLoad.bind(Pe(s))),
      (s.handleSubmit = s.handleSubmit.bind(Pe(s))),
      (s.handleExpire = s.handleExpire.bind(Pe(s))),
      (s.handleError = s.handleError.bind(Pe(s))),
      (s.handleOpen = s.handleOpen.bind(Pe(s))),
      (s.handleClose = s.handleClose.bind(Pe(s))),
      (s.handleChallengeExpired = s.handleChallengeExpired.bind(Pe(s))),
      (s.ref = I.createRef()),
      (s.apiScriptRequested = !1),
      (s.sentryHub = null),
      (s.captchaId = ""),
      (s.state = { isApiReady: !1, isRemoved: !1, elementId: r.id }),
      s
    );
  }
  var n = t.prototype;
  return (
    (n.componentDidMount = function () {
      var s = this,
        l = vu(this.props.scriptLocation),
        i = gu(l);
      this._hcaptcha = i.window.hcaptcha || void 0;
      var o = typeof this._hcaptcha < "u";
      if (o) {
        this.setState({ isApiReady: !0 }, function () {
          s.renderCaptcha();
        });
        return;
      }
      this.loadCaptcha();
    }),
    (n.componentWillUnmount = function () {
      var s = this._hcaptcha,
        l = this.captchaId;
      this.isReady() && (s.reset(l), s.remove(l));
    }),
    (n.shouldComponentUpdate = function (s, l) {
      return !(
        this.state.isApiReady !== l.isApiReady ||
        this.state.isRemoved !== l.isRemoved
      );
    }),
    (n.componentDidUpdate = function (s) {
      var l = this,
        i = [
          "sitekey",
          "size",
          "theme",
          "tabindex",
          "languageOverride",
          "endpoint",
        ],
        o = i.every(function (a) {
          return s[a] === l.props[a];
        });
      o ||
        this.removeCaptcha(function () {
          l.renderCaptcha();
        });
    }),
    (n.loadCaptcha = function () {
      if (!this.apiScriptRequested) {
        var s = this.props,
          l = s.apihost,
          i = s.assethost,
          o = s.endpoint,
          a = s.host,
          c = s.imghost,
          p = s.languageOverride,
          g = s.reCaptchaCompat,
          h = s.reportapi,
          v = s.sentry,
          w = s.custom,
          x = s.loadAsync,
          E = s.scriptLocation,
          f = s.scriptSource,
          d = s.secureApi,
          m = s.cleanup,
          y = m === void 0 ? !0 : m,
          k = {
            render: "explicit",
            apihost: l,
            assethost: i,
            endpoint: o,
            hl: p,
            host: a,
            imghost: c,
            recaptchacompat: g === !1 ? "off" : null,
            reportapi: h,
            sentry: v,
            custom: w,
            loadAsync: x,
            scriptLocation: E,
            scriptSource: f,
            secureApi: d,
            cleanup: y,
          };
        Gv(k).then(this.handleOnLoad, this.handleError).catch(this.handleError),
          (this.apiScriptRequested = !0);
      }
    }),
    (n.renderCaptcha = function (s) {
      var l = this,
        i = this.props.onReady,
        o = this.state.isApiReady,
        a = this.captchaId;
      if (!(!o || a)) {
        var c = Object.assign(
            {
              "open-callback": this.handleOpen,
              "close-callback": this.handleClose,
              "error-callback": this.handleError,
              "chalexpired-callback": this.handleChallengeExpired,
              "expired-callback": this.handleExpire,
              callback: this.handleSubmit,
            },
            this.props,
            {
              hl: this.props.hl || this.props.languageOverride,
              languageOverride: void 0,
            }
          ),
          p = this._hcaptcha,
          g = p.render(this.ref.current, c);
        (this.captchaId = g),
          this.setState({ isRemoved: !1 }, function () {
            s && s(), i && i(), l._onReady && l._onReady(g);
          });
      }
    }),
    (n.resetCaptcha = function () {
      var s = this._hcaptcha,
        l = this.captchaId;
      this.isReady() && s.reset(l);
    }),
    (n.removeCaptcha = function (s) {
      var l = this,
        i = this._hcaptcha,
        o = this.captchaId;
      this.isReady() &&
        this.setState({ isRemoved: !0 }, function () {
          (l.captchaId = ""), i.remove(o), s && s();
        });
    }),
    (n.handleOnLoad = function () {
      var s = this;
      this.setState({ isApiReady: !0 }, function () {
        var l = vu(s.props.scriptLocation),
          i = gu(l);
        (s._hcaptcha = i.window.hcaptcha),
          s.renderCaptcha(function () {
            var o = s.props.onLoad;
            o && o();
          });
      });
    }),
    (n.handleSubmit = function (s) {
      var l = this.props.onVerify,
        i = this.state.isRemoved,
        o = this._hcaptcha,
        a = this.captchaId;
      if (!(typeof o > "u" || i)) {
        var c = o.getResponse(a),
          p = o.getRespKey(a);
        l && l(c, p);
      }
    }),
    (n.handleExpire = function () {
      var s = this.props.onExpire,
        l = this._hcaptcha,
        i = this.captchaId;
      this.isReady() && (l.reset(i), s && s());
    }),
    (n.handleError = function (s) {
      var l = this.props.onError,
        i = this._hcaptcha,
        o = this.captchaId;
      this.isReady() && i.reset(o), l && l(s);
    }),
    (n.isReady = function () {
      var s = this.state,
        l = s.isApiReady,
        i = s.isRemoved;
      return l && !i;
    }),
    (n.handleOpen = function () {
      !this.isReady() || !this.props.onOpen || this.props.onOpen();
    }),
    (n.handleClose = function () {
      !this.isReady() || !this.props.onClose || this.props.onClose();
    }),
    (n.handleChallengeExpired = function () {
      !this.isReady() ||
        !this.props.onChalExpired ||
        this.props.onChalExpired();
    }),
    (n.execute = function (s) {
      var l = this;
      s === void 0 && (s = null), (s = typeof s == "object" ? s : null);
      try {
        var i = this._hcaptcha,
          o = this.captchaId;
        if (!this.isReady()) {
          var a,
            c = new Promise(function (p, g) {
              l._onReady = function (h) {
                try {
                  var v = l._hcaptcha;
                  s && s.async
                    ? v.execute(h, s).then(p).catch(g)
                    : p(v.execute(h, s));
                } catch (w) {
                  g(w);
                }
              };
            });
          return (a = s) != null && a.async ? c : null;
        }
        return i.execute(o, s);
      } catch (p) {
        return s && s.async ? Promise.reject(p) : null;
      }
    }),
    (n.close = function () {
      var s = this._hcaptcha,
        l = this.captchaId;
      if (this.isReady()) return s.close(l);
    }),
    (n.setData = function (s) {
      var l = this._hcaptcha,
        i = this.captchaId;
      this.isReady() &&
        (s && typeof s != "object" && (s = null), l.setData(i, s));
    }),
    (n.getResponse = function () {
      var s = this._hcaptcha;
      return s.getResponse(this.captchaId);
    }),
    (n.getRespKey = function () {
      var s = this._hcaptcha;
      return s.getRespKey(this.captchaId);
    }),
    (n.render = function () {
      var s = this.state.elementId;
      return I.createElement("div", { ref: this.ref, id: s });
    }),
    t
  );
})(I.Component);
const Xv = () => {
  const [e, t] = I.useState({ name: "", email: "", level: "", message: "" }),
    [n, r] = I.useState(!1),
    [s, l] = I.useState(!1),
    [i, o] = I.useState(""),
    a = async (h) => {
      if ((h.preventDefault(), !i)) {
        alert("Please complete the captcha verification");
        return;
      }
      r(!0);
      const v = h.target,
        w = new FormData(v);
      w.append("h-captcha-response", i);
      try {
        (
          await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: w,
          })
        ).ok
          ? (l(!0), t({ name: "", email: "", level: "", message: "" }), o(""))
          : alert("There was an error sending your message. Please try again.");
      } catch {
        alert("There was an error sending your message. Please try again.");
      } finally {
        r(!1);
      }
    },
    c = (h) => {
      t({ ...e, [h.target.name]: h.target.value });
    },
    p = (h) => {
      o(h);
    },
    g = () => {
      const h = "6003582956",
        v = encodeURIComponent(
          "Hi! I'm interested in chess coaching lessons. Could you please provide more information?"
        ),
        w = `https://wa.me/${h}?text=${v}`;
      window.open(w, "_blank");
    };
  return s
    ? u.jsx("section", {
        className: "py-20 bg-white",
        children: u.jsx("div", {
          className: "max-w-6xl mx-auto px-4",
          children: u.jsx("div", {
            className: "text-center",
            children: u.jsxs("div", {
              className:
                "bg-gradient-to-br from-emerald-50 to-emerald-100 p-12 rounded-2xl border border-emerald-200 max-w-2xl mx-auto",
              children: [
                u.jsx("div", { className: "text-6xl mb-6", children: "✅" }),
                u.jsx("h2", {
                  className:
                    "font-display text-3xl font-bold mb-4 text-emerald-800 tracking-tight",
                  children: "Thank You!",
                }),
                u.jsx("p", {
                  className:
                    "font-body text-lg text-emerald-700 mb-6 font-light leading-relaxed tracking-wide",
                  children:
                    "Your message has been sent successfully! I'll get back to you within 24 hours to discuss your chess coaching needs.",
                }),
                u.jsx("button", {
                  onClick: () => l(!1),
                  className:
                    "font-display bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-300 tracking-wide",
                  children: "Send Another Message",
                }),
              ],
            }),
          }),
        }),
      })
    : u.jsx("section", {
        className: "py-20 bg-white",
        id: "contact",
        children: u.jsxs("div", {
          className: "max-w-6xl mx-auto px-4 sm:px-6 lg:px-8",
          children: [
            u.jsxs("div", {
              className: "text-center mb-16",
              children: [
                u.jsx("h2", {
                  className:
                    "font-display text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 gradient-text tracking-tight",
                  children: "Ready to Improve Your Chess?",
                }),
                u.jsx("p", {
                  className:
                    "font-body text-base sm:text-lg lg:text-xl text-gray-text max-w-2xl mx-auto font-light leading-relaxed tracking-wide",
                  children:
                    "Get in touch to schedule your free consultation and start your chess journey",
                }),
              ],
            }),
            u.jsxs("div", {
              className: "grid lg:grid-cols-2 gap-8 lg:gap-12",
              children: [
                u.jsxs("div", {
                  children: [
                    u.jsx("h3", {
                      className:
                        "font-heading text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-primary-dark tracking-tight",
                      children: "Contact Information",
                    }),
                    u.jsxs("div", {
                      className: "space-y-3 sm:space-y-4 mb-6 sm:mb-8",
                      children: [
                        u.jsxs("div", {
                          className: "flex items-center",
                          children: [
                            u.jsx("span", {
                              className:
                                "text-lg sm:text-xl lg:text-2xl mr-3 sm:mr-4",
                              children: "📧",
                            }),
                            u.jsxs("div", {
                              children: [
                                u.jsx("div", {
                                  className:
                                    "font-heading font-semibold text-primary-dark tracking-tight text-sm sm:text-base",
                                  children: "Email",
                                }),
                                u.jsx("div", {
                                  className:
                                    "font-body text-gray-text font-light tracking-wide text-xs sm:text-sm",
                                  children: "coach@chessmasterclass.com",
                                }),
                              ],
                            }),
                          ],
                        }),
                        u.jsxs("div", {
                          className: "flex items-center",
                          children: [
                            u.jsx("span", {
                              className:
                                "text-lg sm:text-xl lg:text-2xl mr-3 sm:mr-4",
                              children: "📱",
                            }),
                            u.jsxs("div", {
                              children: [
                                u.jsx("div", {
                                  className:
                                    "font-heading font-semibold text-primary-dark tracking-tight text-sm sm:text-base",
                                  children: "Phone",
                                }),
                                u.jsx("div", {
                                  className:
                                    "font-body text-gray-text font-light tracking-wide text-xs sm:text-sm",
                                  children: "+1 (555) 123-4567",
                                }),
                              ],
                            }),
                          ],
                        }),
                        u.jsxs("div", {
                          className: "flex items-center",
                          children: [
                            u.jsx("span", {
                              className:
                                "text-lg sm:text-xl lg:text-2xl mr-3 sm:mr-4",
                              children: "🌐",
                            }),
                            u.jsxs("div", {
                              children: [
                                u.jsx("div", {
                                  className:
                                    "font-heading font-semibold text-primary-dark tracking-tight text-sm sm:text-base",
                                  children: "Online Platforms",
                                }),
                                u.jsx("div", {
                                  className:
                                    "font-body text-gray-text font-light tracking-wide text-xs sm:text-sm",
                                  children: "Lichess • Chess.com",
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                    u.jsx("div", {
                      className:
                        "bg-green-50 p-4 sm:p-6 rounded-2xl border border-green-100 mb-6 sm:mb-8",
                      children: u.jsxs("div", {
                        className: "flex items-center justify-between",
                        children: [
                          u.jsxs("div", {
                            className: "flex items-center",
                            children: [
                              u.jsx("div", {
                                className:
                                  "w-10 h-10 sm:w-12 sm:h-12 bg-green-500 rounded-full flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0",
                                children: u.jsx("svg", {
                                  viewBox: "0 0 24 24",
                                  className: "w-5 h-5 sm:w-6 sm:h-6 fill-white",
                                  xmlns: "http://www.w3.org/2000/svg",
                                  children: u.jsx("path", {
                                    d: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.785",
                                  }),
                                }),
                              }),
                              u.jsxs("div", {
                                children: [
                                  u.jsx("div", {
                                    className:
                                      "font-heading font-semibold text-green-800 tracking-tight text-sm sm:text-base",
                                    children: "WhatsApp",
                                  }),
                                  u.jsx("div", {
                                    className:
                                      "font-body text-green-600 font-light tracking-wide text-xs sm:text-sm",
                                    children: "+91 6003582956",
                                  }),
                                ],
                              }),
                            ],
                          }),
                          u.jsxs("button", {
                            onClick: g,
                            className:
                              "font-display bg-green-500 hover:bg-green-600 text-white px-3 sm:px-4 py-2 rounded-lg font-semibold transition-colors duration-300 flex items-center gap-1 sm:gap-2 tracking-wide text-xs sm:text-sm",
                            children: [
                              u.jsx("svg", {
                                viewBox: "0 0 24 24",
                                className: "w-3 h-3 sm:w-4 sm:h-4 fill-white",
                                xmlns: "http://www.w3.org/2000/svg",
                                children: u.jsx("path", {
                                  d: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.785",
                                }),
                              }),
                              u.jsx("span", {
                                className: "hidden sm:inline",
                                children: "Have a chat",
                              }),
                              u.jsx("span", {
                                className: "sm:hidden",
                                children: "Chat",
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                    u.jsxs("div", {
                      children: [
                        u.jsx("h4", {
                          className:
                            "font-heading text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-primary-dark tracking-tight",
                          children: "Follow Me",
                        }),
                        u.jsxs("div", {
                          className: "flex space-x-4",
                          children: [
                            u.jsx("button", {
                              className:
                                "w-10 h-10 sm:w-12 sm:h-12 bg-primary-dark text-white rounded-full hover:bg-primary-light transition-colors flex items-center justify-center",
                              children: u.jsx(mv, {
                                size: 16,
                                className: "sm:w-5 sm:h-5",
                              }),
                            }),
                            u.jsx("button", {
                              className:
                                "w-10 h-10 sm:w-12 sm:h-12 bg-primary-dark text-white rounded-full hover:bg-primary-light transition-colors flex items-center justify-center",
                              children: u.jsx(hv, {
                                size: 16,
                                className: "sm:w-5 sm:h-5",
                              }),
                            }),
                            u.jsx("button", {
                              className:
                                "w-10 h-10 sm:w-12 sm:h-12 bg-primary-dark text-white rounded-full hover:bg-primary-light transition-colors flex items-center justify-center",
                              children: u.jsx(gv, {
                                size: 16,
                                className: "sm:w-5 sm:h-5",
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                u.jsx("div", {
                  children: u.jsxs("form", {
                    onSubmit: a,
                    action: "https://api.web3forms.com/submit",
                    method: "POST",
                    className: "space-y-4 sm:space-y-6 needs-validation",
                    noValidate: !0,
                    children: [
                      u.jsx("input", {
                        type: "hidden",
                        name: "access_key",
                        value: "YOUR-API-KEY-HERE",
                      }),
                      u.jsx("input", {
                        type: "hidden",
                        name: "email",
                        value: "rubibhatt53@gmail.com",
                      }),
                      u.jsx("input", {
                        type: "hidden",
                        name: "subject",
                        value: "New Chess Coaching Inquiry",
                      }),
                      u.jsx("input", {
                        type: "hidden",
                        name: "from_name",
                        value: "Chess Coaching Website",
                      }),
                      u.jsx("input", {
                        type: "checkbox",
                        name: "botcheck",
                        style: { display: "none" },
                      }),
                      u.jsxs("div", {
                        children: [
                          u.jsx("label", {
                            htmlFor: "name",
                            className:
                              "block font-body text-xs sm:text-sm font-medium text-primary-dark mb-1 sm:mb-2 tracking-wide",
                            children: "Full Name *",
                          }),
                          u.jsx("input", {
                            type: "text",
                            id: "name",
                            name: "name",
                            value: e.name,
                            onChange: c,
                            required: !0,
                            className:
                              "w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent font-body text-xs sm:text-sm tracking-wide",
                            placeholder: "Enter your full name",
                          }),
                        ],
                      }),
                      u.jsxs("div", {
                        children: [
                          u.jsx("label", {
                            htmlFor: "email",
                            className:
                              "block font-body text-xs sm:text-sm font-medium text-primary-dark mb-1 sm:mb-2 tracking-wide",
                            children: "Email Address *",
                          }),
                          u.jsx("input", {
                            type: "email",
                            id: "email",
                            name: "email",
                            value: e.email,
                            onChange: c,
                            required: !0,
                            className:
                              "w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent font-body text-xs sm:text-sm tracking-wide",
                            placeholder: "Enter your email address",
                          }),
                        ],
                      }),
                      u.jsxs("div", {
                        children: [
                          u.jsx("label", {
                            htmlFor: "level",
                            className:
                              "block font-body text-xs sm:text-sm font-medium text-primary-dark mb-1 sm:mb-2 tracking-wide",
                            children: "Chess Level",
                          }),
                          u.jsxs("select", {
                            id: "level",
                            name: "level",
                            value: e.level,
                            onChange: c,
                            className:
                              "w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent font-body text-xs sm:text-sm tracking-wide",
                            children: [
                              u.jsx("option", {
                                value: "",
                                children: "Select your current level",
                              }),
                              u.jsx("option", {
                                value: "beginner",
                                children: "Beginner (Just learning)",
                              }),
                              u.jsx("option", {
                                value: "intermediate",
                                children: "Intermediate (Some experience)",
                              }),
                              u.jsx("option", {
                                value: "advanced",
                                children: "Advanced (Tournament player)",
                              }),
                              u.jsx("option", {
                                value: "expert",
                                children: "Expert (High-level player)",
                              }),
                            ],
                          }),
                        ],
                      }),
                      u.jsxs("div", {
                        children: [
                          u.jsx("label", {
                            htmlFor: "message",
                            className:
                              "block font-body text-xs sm:text-sm font-medium text-primary-dark mb-1 sm:mb-2 tracking-wide",
                            children: "Message *",
                          }),
                          u.jsx("textarea", {
                            id: "message",
                            name: "message",
                            value: e.message,
                            onChange: c,
                            required: !0,
                            rows: 4,
                            className:
                              "w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent font-body text-xs sm:text-sm tracking-wide resize-vertical",
                            placeholder:
                              "Tell me about your chess goals, current level, and what you'd like to improve...",
                          }),
                        ],
                      }),
                      u.jsx("div", {
                        className: "flex justify-center",
                        children: u.jsx(Yv, {
                          sitekey: "50b2fe65-b00b-4b9e-ad62-3ba471098be2",
                          reCaptchaCompat: !1,
                          onVerify: p,
                        }),
                      }),
                      u.jsx("button", {
                        type: "submit",
                        disabled: n || !i,
                        className: `w-full font-display px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold transition-all duration-300 tracking-wide ${
                          n || !i
                            ? "bg-gray-400 text-gray-600 cursor-not-allowed"
                            : "bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white hover-lift shadow-lg"
                        }`,
                        children: n
                          ? u.jsxs("div", {
                              className: "flex items-center justify-center",
                              children: [
                                u.jsx("div", {
                                  className:
                                    "animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2",
                                }),
                                "Sending Message...",
                              ],
                            })
                          : "Send Message",
                      }),
                      u.jsx("p", {
                        className:
                          "text-xs text-gray-500 text-center tracking-wide",
                        children:
                          "* Required fields. Your information will be kept confidential.",
                      }),
                    ],
                  }),
                }),
              ],
            }),
          ],
        }),
      });
};
function qv() {
  return u.jsxs("div", {
    className: "min-h-screen bg-neutral-light",
    children: [
      u.jsx(Km, {}),
      u.jsx(Qm, {}),
      u.jsx(iv, {}),
      u.jsx(ov, {}),
      u.jsx(av, {}),
      u.jsx(uv, {}),
      u.jsx(cv, {}),
      u.jsx(Xv, {}),
    ],
  });
}
Fl.createRoot(document.getElementById("root")).render(
  u.jsx(Lf.StrictMode, { children: u.jsx(qv, {}) })
);
