!(function (t, i) {
  if ("object" == typeof exports && "object" == typeof module)
    module.exports = i();
  else if ("function" == typeof define && define.amd) define([], i);
  else {
    var e = i();
    for (var s in e) ("object" == typeof exports ? exports : t)[s] = e[s];
  }
})(this, () =>
  (() => {
    "use strict";
    var t = {
        d: (i, e) => {
          for (var s in e)
            t.o(e, s) &&
              !t.o(i, s) &&
              Object.defineProperty(i, s, { enumerable: !0, get: e[s] });
        },
        o: (t, i) => Object.prototype.hasOwnProperty.call(t, i),
        r: (t) => {
          "undefined" != typeof Symbol &&
            Symbol.toStringTag &&
            Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
            Object.defineProperty(t, "__esModule", { value: !0 });
        },
      },
      i = {};
    t.r(i), t.d(i, { loadFountainPreset: () => Ki, Testball: () => _i });
    class e {
      constructor() {
        this._listeners = new Map();
      }
      addEventListener(t, i) {
        var e;
        this.removeEventListener(t, i),
          this._listeners.get(t) || this._listeners.set(t, []),
          null === (e = this._listeners.get(t)) || void 0 === e || e.push(i);
      }
      dispatchEvent(t, i) {
        var e;
        null === (e = this._listeners.get(t)) ||
          void 0 === e ||
          e.forEach((t) => t(i));
      }
      hasEventListener(t) {
        return !!this._listeners.get(t);
      }
      removeAllEventListeners(t) {
        t ? this._listeners.delete(t) : (this._listeners = new Map());
      }
      removeEventListener(t, i) {
        const e = this._listeners.get(t);
        if (!e) return;
        const s = e.length,
          o = e.indexOf(i);
        o < 0 || (1 === s ? this._listeners.delete(t) : e.splice(o, 1));
      }
    }
    class s {
      constructor(t, i, e) {
        if ("number" != typeof t && t) {
          (this.x = t.x), (this.y = t.y);
          const i = t;
          this.z = i.z ? i.z : 0;
        } else {
          if (void 0 === t || void 0 === i)
            throw new Error("Testball - Vector3d ??????????????????");
          (this.x = t), (this.y = i), (this.z = null != e ? e : 0);
        }
      }
      static get origin() {
        return s.create(0, 0, 0);
      }
      get angle() {
        return Math.atan2(this.y, this.x);
      }
      set angle(t) {
        this.updateFromAngle(t, this.length);
      }
      get length() {
        return Math.sqrt(this.getLengthSq());
      }
      set length(t) {
        this.updateFromAngle(this.angle, t);
      }
      static clone(t) {
        return s.create(t.x, t.y, t.z);
      }
      static create(t, i, e) {
        return new s(t, i, e);
      }
      add(t) {
        return s.create(this.x + t.x, this.y + t.y, this.z + t.z);
      }
      addTo(t) {
        (this.x += t.x), (this.y += t.y), (this.z += t.z);
      }
      copy() {
        return s.clone(this);
      }
      distanceTo(t) {
        return this.sub(t).length;
      }
      distanceToSq(t) {
        return this.sub(t).getLengthSq();
      }
      div(t) {
        return s.create(this.x / t, this.y / t, this.z / t);
      }
      divTo(t) {
        (this.x /= t), (this.y /= t), (this.z /= t);
      }
      getLengthSq() {
        return this.x ** 2 + this.y ** 2;
      }
      mult(t) {
        return s.create(this.x * t, this.y * t, this.z * t);
      }
      multTo(t) {
        (this.x *= t), (this.y *= t), (this.z *= t);
      }
      rotate(t) {
        return s.create(
          this.x * Math.cos(t) - this.y * Math.sin(t),
          this.x * Math.sin(t) + this.y * Math.cos(t),
          0
        );
      }
      setTo(t) {
        (this.x = t.x), (this.y = t.y);
        const i = t;
        this.z = i.z ? i.z : 0;
      }
      sub(t) {
        return s.create(this.x - t.x, this.y - t.y, this.z - t.z);
      }
      subFrom(t) {
        (this.x -= t.x), (this.y -= t.y), (this.z -= t.z);
      }
      updateFromAngle(t, i) {
        (this.x = Math.cos(t) * i), (this.y = Math.sin(t) * i);
      }
    }
    class o extends s {
      constructor(t, i) {
        super(t, i, 0);
      }
      static get origin() {
        return o.create(0, 0);
      }
      static clone(t) {
        return o.create(t.x, t.y);
      }
      static create(t, i) {
        return new o(t, i);
      }
    }
    let n = Math.random;
    new Map();
    function a() {
      return r(n(), 0, 1 - 1e-16);
    }
    function r(t, i, e) {
      return Math.min(Math.max(t, i), e);
    }
    function l(t) {
      const i = d(t);
      let e = c(t);
      return i === e && (e = 0), a() * (i - e) + e;
    }
    function h(t) {
      return "number" == typeof t ? t : l(t);
    }
    function c(t) {
      return "number" == typeof t ? t : t.min;
    }
    function d(t) {
      return "number" == typeof t ? t : t.max;
    }
    function u(t, i) {
      if (t === i || (void 0 === i && "number" == typeof t)) return t;
      const e = c(t),
        s = d(t);
      return void 0 !== i
        ? { min: Math.min(e, i), max: Math.max(s, i) }
        : u(e, s);
    }
    function p(t) {
      const i = t.random,
        { enable: e, minimumValue: s } =
          "boolean" == typeof i ? { enable: i, minimumValue: 0 } : i;
      return h(e ? u(t.value, s) : t.value);
    }
    function v(t, i) {
      const e = t.x - i.x,
        s = t.y - i.y;
      return { dx: e, dy: s, distance: Math.sqrt(e ** 2 + s ** 2) };
    }
    function m(t, i) {
      return v(t, i).distance;
    }
    function f(t) {
      var i, e;
      const s = {
        x:
          void 0 !== (null === (i = t.position) || void 0 === i ? void 0 : i.x)
            ? h(t.position.x)
            : void 0,
        y:
          void 0 !== (null === (e = t.position) || void 0 === e ? void 0 : e.y)
            ? h(t.position.y)
            : void 0,
      };
      return (function (t) {
        var i, e, s, o;
        return {
          x:
            ((null !==
              (e = null === (i = t.position) || void 0 === i ? void 0 : i.x) &&
            void 0 !== e
              ? e
              : 100 * a()) *
              t.size.width) /
            100,
          y:
            ((null !==
              (o = null === (s = t.position) || void 0 === s ? void 0 : s.y) &&
            void 0 !== o
              ? o
              : 100 * a()) *
              t.size.height) /
            100,
        };
      })({ size: t.size, position: s });
    }
    function y(t) {
      var i, e, s, o;
      return {
        x:
          null !==
            (e = null === (i = t.position) || void 0 === i ? void 0 : i.x) &&
          void 0 !== e
            ? e
            : a() * t.size.width,
        y:
          null !==
            (o = null === (s = t.position) || void 0 === s ? void 0 : s.y) &&
          void 0 !== o
            ? o
            : a() * t.size.height,
      };
    }
    function g(t) {
      return t ? (t.endsWith("%") ? parseFloat(t) / 100 : parseFloat(t)) : 1;
    }
    function w() {
      return (
        "undefined" == typeof window ||
        !window ||
        void 0 === window.document ||
        !window.document
      );
    }
    function b(t) {
      if (!w() && "undefined" != typeof matchMedia) return matchMedia(t);
    }
    function x(t, i) {
      return t === i || (i instanceof Array && i.indexOf(t) > -1);
    }
    function _(t) {
      return Math.floor(a() * t.length);
    }
    function z(t, i, e = !0) {
      return t[void 0 !== i && e ? i % t.length : _(t)];
    }
    function P(t, i, e, s, o) {
      return (function (t, i, e, s) {
        let o = !0;
        (s && "bottom" !== s) || (o = t.top < i.height + e.x);
        !o || (s && "left" !== s) || (o = t.right > e.x);
        !o || (s && "right" !== s) || (o = t.left < i.width + e.y);
        !o || (s && "top" !== s) || (o = t.bottom > e.y);
        return o;
      })(M(t, null != s ? s : 0), i, e, o);
    }
    function M(t, i) {
      return { bottom: t.y + i, left: t.x - i, right: t.x + i, top: t.y - i };
    }
    function C(t, ...i) {
      for (const e of i) {
        if (null == e) continue;
        if ("object" != typeof e) {
          t = e;
          continue;
        }
        const i = Array.isArray(e);
        !i || ("object" == typeof t && t && Array.isArray(t))
          ? i || ("object" == typeof t && t && !Array.isArray(t)) || (t = {})
          : (t = []);
        for (const i in e) {
          if ("__proto__" === i) continue;
          const s = e[i],
            o = "object" == typeof s,
            n = t;
          n[i] = o && Array.isArray(s) ? s.map((t) => C(n[i], t)) : C(n[i], s);
        }
      }
      return t;
    }
    function S(t, i) {
      return t instanceof Array ? t.map((t, e) => i(t, e)) : i(t, 0);
    }
    function O(t, i, e) {
      return t instanceof Array ? z(t, i, e) : t;
    }
    const k = "random",
      D = new Map();
    function I(t) {
      D.set(t.key, t);
    }
    function R(t, i, e) {
      return (
        e < 0 && (e += 1),
        e > 1 && (e -= 1),
        e < 1 / 6
          ? t + 6 * (i - t) * e
          : e < 0.5
          ? i
          : e < 2 / 3
          ? t + (i - t) * (2 / 3 - e) * 6
          : t
      );
    }
    function T(t) {
      for (const [, i] of D)
        if (t.startsWith(i.stringPrefix)) return i.parseString(t);
      const i = t.replace(
          /^#?([a-f\d])([a-f\d])([a-f\d])([a-f\d])?$/i,
          (t, i, e, s, o) => i + i + e + e + s + s + (void 0 !== o ? o + o : "")
        ),
        e = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})?$/i.exec(i);
      return e
        ? {
            a: void 0 !== e[4] ? parseInt(e[4], 16) / 255 : 1,
            b: parseInt(e[3], 16),
            g: parseInt(e[2], 16),
            r: parseInt(e[1], 16),
          }
        : void 0;
    }
    function E(t, i, e = !0) {
      if (!t) return;
      const s = "string" == typeof t ? { value: t } : t;
      if ("string" == typeof s.value) return L(s.value, i, e);
      if (s.value instanceof Array) return E({ value: z(s.value, i, e) });
      for (const [, t] of D) {
        const i = t.handleRangeColor(s);
        if (i) return i;
      }
    }
    function L(t, i, e = !0) {
      if (!t) return;
      const s = "string" == typeof t ? { value: t } : t;
      if ("string" == typeof s.value)
        return s.value === k
          ? B()
          : (function (t) {
              return T(t);
            })(s.value);
      if (s.value instanceof Array) return L({ value: z(s.value, i, e) });
      for (const [, t] of D) {
        const i = t.handleColor(s);
        if (i) return i;
      }
    }
    function A(t, i, e = !0) {
      const s = E(t, i, e);
      return s ? F(s) : void 0;
    }
    function F(t) {
      const i = t.r / 255,
        e = t.g / 255,
        s = t.b / 255,
        o = Math.max(i, e, s),
        n = Math.min(i, e, s),
        a = { h: 0, l: (o + n) / 2, s: 0 };
      return (
        o !== n &&
          ((a.s = a.l < 0.5 ? (o - n) / (o + n) : (o - n) / (2 - o - n)),
          (a.h =
            i === o
              ? (e - s) / (o - n)
              : (a.h =
                  e === o ? 2 + (s - i) / (o - n) : 4 + (i - e) / (o - n)))),
        (a.l *= 100),
        (a.s *= 100),
        (a.h *= 60),
        a.h < 0 && (a.h += 360),
        a.h >= 360 && (a.h -= 360),
        a
      );
    }
    function V(t) {
      const i = { b: 0, g: 0, r: 0 },
        e = { h: t.h / 360, l: t.l / 100, s: t.s / 100 };
      if (e.s) {
        const t = e.l < 0.5 ? e.l * (1 + e.s) : e.l + e.s - e.l * e.s,
          s = 2 * e.l - t;
        (i.r = R(s, t, e.h + 1 / 3)),
          (i.g = R(s, t, e.h)),
          (i.b = R(s, t, e.h - 1 / 3));
      } else (i.b = e.l), (i.g = e.l), (i.r = e.l);
      return (
        (i.r = Math.floor(255 * i.r)),
        (i.g = Math.floor(255 * i.g)),
        (i.b = Math.floor(255 * i.b)),
        i
      );
    }
    function B(t) {
      const i = null != t ? t : 0;
      return {
        b: Math.floor(l(u(i, 256))),
        g: Math.floor(l(u(i, 256))),
        r: Math.floor(l(u(i, 256))),
      };
    }
    function q(t, i) {
      return `rgba(${t.r}, ${t.g}, ${t.b}, ${null != i ? i : 1})`;
    }
    function W(t, i) {
      return `hsla(${t.h}, ${t.s}%, ${t.l}%, ${null != i ? i : 1})`;
    }
    function U(t) {
      return void 0 !== t
        ? { h: t.h.value, s: t.s.value, l: t.l.value }
        : void 0;
    }
    function H(t, i, e) {
      (t.enable = i.enable),
        t.enable
          ? ((t.velocity = (h(i.speed) / 100) * e),
            (t.decay = 1 - h(i.decay)),
            (t.status = "increasing"),
            (t.loops = 0),
            (t.maxLoops = h(i.count)),
            i.sync || ((t.velocity *= a()), (t.value *= a())),
            (t.initialValue = t.value))
          : (t.velocity = 0);
    }
    function j(t, i) {
      t.clearRect(0, 0, i.width, i.height);
    }
    const G = "generated",
      N = "touchend",
      X = "pointermove",
      Y = "pointerleave";
    function $(t, i, e) {
      var s;
      const o = i[e];
      void 0 !== o &&
        (t[e] = (null !== (s = t[e]) && void 0 !== s ? s : 1) * o);
    }
    class J {
      constructor(t) {
        (this.container = t),
          (this.size = { height: 0, width: 0 }),
          (this._context = null),
          (this._generated = !1),
          (this._preDrawUpdaters = []),
          (this._postDrawUpdaters = []),
          (this._resizePlugins = []),
          (this._colorPlugins = []),
          (this._mutationObserver =
            w() || "undefined" == typeof MutationObserver
              ? void 0
              : new MutationObserver((t) => {
                  for (const i of t)
                    "attributes" === i.type &&
                      "style" === i.attributeName &&
                      this._repairStyle();
                }));
      }
      get _fullScreen() {
        return this.container.actualOptions.fullScreen.enable;
      }
      clear() {
        const t = this.container.actualOptions,
          i = t.particles.move.trail;
        t.backgroundMask.enable
          ? this.paint()
          : i.enable && i.length > 0 && this._trailFillColor
          ? this._paintBase(q(this._trailFillColor, 1 / i.length))
          : this.draw((t) => {
              j(t, this.size);
            });
      }
      destroy() {
        var t, i;
        null === (t = this._mutationObserver) || void 0 === t || t.disconnect(),
          this._generated
            ? null === (i = this.element) || void 0 === i || i.remove()
            : this._resetOriginalStyle(),
          this.draw((t) => {
            j(t, this.size);
          }),
          (this._preDrawUpdaters = []),
          (this._postDrawUpdaters = []),
          (this._resizePlugins = []),
          (this._colorPlugins = []);
      }
      draw(t) {
        if (this._context) return t(this._context);
      }
      drawParticle(t, i) {
        var e;
        if (t.spawning || t.destroyed) return;
        const s = t.getRadius();
        if (s <= 0) return;
        const o = t.getFillColor(),
          n = null !== (e = t.getStrokeColor()) && void 0 !== e ? e : o;
        let [a, r] = this._getPluginParticleColors(t);
        a || (a = o),
          r || (r = n),
          (a || r) &&
            this.draw((e) => {
              var o, n, l, h;
              const c = this.container.actualOptions,
                d = t.options.zIndex,
                u = (1 - t.zIndexFactor) ** d.opacityRate,
                p =
                  null !==
                    (l =
                      null !== (o = t.bubble.opacity) && void 0 !== o
                        ? o
                        : null === (n = t.opacity) || void 0 === n
                        ? void 0
                        : n.value) && void 0 !== l
                    ? l
                    : 1,
                v = p * u,
                m =
                  (null !== (h = t.strokeOpacity) && void 0 !== h ? h : p) * u,
                f = {},
                y = { fill: a ? W(a, v) : void 0 };
              (y.stroke = r ? W(r, m) : y.fill),
                this._applyPreDrawUpdaters(e, t, s, v, y, f),
                (function (t) {
                  var i, e, s, o, n;
                  const {
                      container: a,
                      context: r,
                      particle: l,
                      delta: h,
                      colorStyles: c,
                      backgroundMask: d,
                      composite: u,
                      radius: p,
                      opacity: v,
                      shadow: m,
                      transform: f,
                    } = t,
                    y = l.getPosition(),
                    g = l.rotation + (l.pathRotation ? l.velocity.angle : 0),
                    w = Math.sin(g),
                    b = Math.cos(g),
                    x = {
                      a: b * (null !== (i = f.a) && void 0 !== i ? i : 1),
                      b: w * (null !== (e = f.b) && void 0 !== e ? e : 1),
                      c: -w * (null !== (s = f.c) && void 0 !== s ? s : 1),
                      d: b * (null !== (o = f.d) && void 0 !== o ? o : 1),
                    };
                  r.setTransform(x.a, x.b, x.c, x.d, y.x, y.y),
                    r.beginPath(),
                    d && (r.globalCompositeOperation = u);
                  const _ = l.shadowColor;
                  m.enable &&
                    _ &&
                    ((r.shadowBlur = m.blur),
                    (r.shadowColor = q(_)),
                    (r.shadowOffsetX = m.offset.x),
                    (r.shadowOffsetY = m.offset.y)),
                    c.fill && (r.fillStyle = c.fill);
                  const z =
                    null !== (n = l.strokeWidth) && void 0 !== n ? n : 0;
                  (r.lineWidth = z),
                    c.stroke && (r.strokeStyle = c.stroke),
                    (function (t, i, e, s, o, n) {
                      if (!e.shape) return;
                      const a = t.drawers.get(e.shape);
                      a && a.draw(i, e, s, o, n, t.retina.pixelRatio);
                    })(a, r, l, p, v, h),
                    z > 0 && r.stroke(),
                    l.close && r.closePath(),
                    l.fill && r.fill(),
                    (function (t, i, e, s, o, n) {
                      if (!e.shape) return;
                      const a = t.drawers.get(e.shape);
                      (null == a ? void 0 : a.afterEffect) &&
                        a.afterEffect(i, e, s, o, n, t.retina.pixelRatio);
                    })(a, r, l, p, v, h),
                    (r.globalCompositeOperation = "source-over"),
                    r.setTransform(1, 0, 0, 1, 0, 0);
                })({
                  container: this.container,
                  context: e,
                  particle: t,
                  delta: i,
                  colorStyles: y,
                  backgroundMask: c.backgroundMask.enable,
                  composite: c.backgroundMask.composite,
                  radius: s * (1 - t.zIndexFactor) ** d.sizeRate,
                  opacity: v,
                  shadow: t.options.shadow,
                  transform: f,
                }),
                this._applyPostDrawUpdaters(t);
            });
      }
      drawParticlePlugin(t, i, e) {
        this.draw((s) => {
          !(function (t, i, e, s) {
            i.drawParticle && i.drawParticle(t, e, s);
          })(s, t, i, e);
        });
      }
      drawPlugin(t, i) {
        this.draw((e) => {
          !(function (t, i, e) {
            i.draw && i.draw(t, e);
          })(e, t, i);
        });
      }
      init() {
        var t;
        this.resize(),
          this._initStyle(),
          this._initCover(),
          this._initTrail(),
          this.initBackground(),
          this.element &&
            (null === (t = this._mutationObserver) ||
              void 0 === t ||
              t.observe(this.element, { attributes: !0 })),
          this.initUpdaters(),
          this.initPlugins(),
          this.paint();
      }
      initBackground() {
        const t = this.container.actualOptions.background,
          i = this.element,
          e = null == i ? void 0 : i.style;
        if (e) {
          if (t.color) {
            const i = E(t.color);
            e.backgroundColor = i ? q(i, t.opacity) : "";
          } else e.backgroundColor = "";
          (e.backgroundImage = t.image || ""),
            (e.backgroundPosition = t.position || ""),
            (e.backgroundRepeat = t.repeat || ""),
            (e.backgroundSize = t.size || "");
        }
      }
      initPlugins() {
        this._resizePlugins = [];
        for (const [, t] of this.container.plugins)
          t.resize && this._resizePlugins.push(t),
            (t.particleFillColor || t.particleStrokeColor) &&
              this._colorPlugins.push(t);
      }
      initUpdaters() {
        (this._preDrawUpdaters = []), (this._postDrawUpdaters = []);
        for (const t of this.container.particles.updaters)
          t.afterDraw && this._postDrawUpdaters.push(t),
            (t.getColorStyles || t.getTransformValues || t.beforeDraw) &&
              this._preDrawUpdaters.push(t);
      }
      loadCanvas(t) {
        var i, e;
        this._generated &&
          (null === (i = this.element) || void 0 === i || i.remove()),
          (this._generated =
            t.dataset && G in t.dataset
              ? "true" === t.dataset[G]
              : this._generated),
          (this.element = t),
          (this.element.ariaHidden = "true"),
          (this._originalStyle = C({}, this.element.style)),
          (this.size.height = t.offsetHeight),
          (this.size.width = t.offsetWidth),
          (this._context = this.element.getContext("2d")),
          null === (e = this._mutationObserver) ||
            void 0 === e ||
            e.observe(this.element, { attributes: !0 }),
          this.container.retina.init(),
          this.initBackground();
      }
      paint() {
        const t = this.container.actualOptions;
        this.draw((i) => {
          t.backgroundMask.enable && t.backgroundMask.cover
            ? (j(i, this.size), this._paintBase(this._coverColorStyle))
            : this._paintBase();
        });
      }
      resize() {
        if (!this.element) return;
        const t = this.container,
          i = t.retina.pixelRatio,
          e = t.canvas.size,
          s = this.element.offsetWidth * i,
          o = this.element.offsetHeight * i;
        if (
          o === e.height &&
          s === e.width &&
          o === this.element.height &&
          s === this.element.width
        )
          return;
        const n = Object.assign({}, e);
        (this.element.width = e.width = this.element.offsetWidth * i),
          (this.element.height = e.height = this.element.offsetHeight * i),
          this.container.started &&
            (this.resizeFactor = {
              width: e.width / n.width,
              height: e.height / n.height,
            });
      }
      async windowResize() {
        if (!this.element) return;
        this.resize();
        const t = this.container,
          i = t.updateActualOptions();
        t.particles.setDensity(),
          this._applyResizePlugins(),
          i && (await t.refresh());
      }
      _applyPostDrawUpdaters(t) {
        var i;
        for (const e of this._postDrawUpdaters)
          null === (i = e.afterDraw) || void 0 === i || i.call(e, t);
      }
      _applyPreDrawUpdaters(t, i, e, s, o, n) {
        var a;
        for (const r of this._preDrawUpdaters) {
          if (r.getColorStyles) {
            const { fill: n, stroke: a } = r.getColorStyles(i, t, e, s);
            n && (o.fill = n), a && (o.stroke = a);
          }
          if (r.getTransformValues) {
            const t = r.getTransformValues(i);
            for (const i in t) $(n, t, i);
          }
          null === (a = r.beforeDraw) || void 0 === a || a.call(r, i);
        }
      }
      _applyResizePlugins() {
        for (const t of this._resizePlugins) t.resize && t.resize();
      }
      _getPluginParticleColors(t) {
        let i, e;
        for (const s of this._colorPlugins)
          if (
            (!i && s.particleFillColor && (i = A(s.particleFillColor(t))),
            !e && s.particleStrokeColor && (e = A(s.particleStrokeColor(t))),
            i && e)
          )
            break;
        return [i, e];
      }
      _initCover() {
        const t = this.container.actualOptions.backgroundMask.cover,
          i = E(t.color);
        if (i) {
          const e = { r: i.r, g: i.g, b: i.b, a: t.opacity };
          this._coverColorStyle = q(e, e.a);
        }
      }
      _initStyle() {
        const t = this.element,
          i = this.container.actualOptions;
        if (t) {
          this._fullScreen
            ? ((this._originalStyle = C({}, t.style)),
              this._setFullScreenStyle())
            : this._resetOriginalStyle();
          for (const e in i.style) {
            if (!e || !i.style) continue;
            const s = i.style[e];
            s && t.style.setProperty(e, s, "important");
          }
        }
      }
      _initTrail() {
        const t = this.container.actualOptions,
          i = E(t.particles.move.trail.fillColor);
        if (i) {
          const e = t.particles.move.trail;
          this._trailFillColor = Object.assign(Object.assign({}, i), {
            a: 1 / e.length,
          });
        }
      }
      _paintBase(t) {
        this.draw((i) => {
          !(function (t, i, e) {
            (t.fillStyle = null != e ? e : "rgba(0,0,0,0)"),
              t.fillRect(0, 0, i.width, i.height);
          })(i, this.size, t);
        });
      }
      _repairStyle() {
        var t, i;
        const e = this.element;
        e &&
          (null === (t = this._mutationObserver) ||
            void 0 === t ||
            t.disconnect(),
          this._initStyle(),
          this.initBackground(),
          null === (i = this._mutationObserver) ||
            void 0 === i ||
            i.observe(e, { attributes: !0 }));
      }
      _resetOriginalStyle() {
        const t = this.element,
          i = this._originalStyle;
        t &&
          i &&
          ((t.style.position = i.position),
          (t.style.zIndex = i.zIndex),
          (t.style.top = i.top),
          (t.style.left = i.left),
          (t.style.width = i.width),
          (t.style.height = i.height));
      }
      _setFullScreenStyle() {
        const t = this.element;
        if (!t) return;
        const i = "important";
        t.style.setProperty("position", "fixed", i),
          t.style.setProperty(
            "z-index",
            this.container.actualOptions.fullScreen.zIndex.toString(10),
            i
          ),
          t.style.setProperty("top", "0", i),
          t.style.setProperty("left", "0", i),
          t.style.setProperty("width", "100%", i),
          t.style.setProperty("height", "100%", i);
      }
    }
    function Z(t, i, e, s, o) {
      if (s) {
        let s = { passive: !0 };
        "boolean" == typeof o ? (s.capture = o) : void 0 !== o && (s = o),
          t.addEventListener(i, e, s);
      } else {
        const s = o;
        t.removeEventListener(i, e, s);
      }
    }
    class Q {
      constructor(t) {
        (this.container = t),
          (this.canPush = !0),
          (this.handlers = {
            mouseMove: (t) => this.mouseTouchMove(t),
            touchStart: (t) => this.mouseTouchMove(t),
            touchMove: (t) => this.mouseTouchMove(t),
            touchEnd: () => this.mouseTouchFinish(),
            mouseLeave: () => this.mouseTouchFinish(),
            touchCancel: () => this.mouseTouchFinish(),
            touchEndClick: (t) => this.mouseTouchClick(t),
            mouseUp: (t) => this.mouseTouchClick(t),
            mouseDown: () => this.mouseDown(),
            visibilityChange: () => this.handleVisibilityChange(),
            themeChange: (t) => this.handleThemeChange(t),
            oldThemeChange: (t) => this.handleThemeChange(t),
            resize: () => this.handleWindowResize(),
          });
      }
      addListeners() {
        this.manageListeners(!0);
      }
      removeListeners() {
        this.manageListeners(!1);
      }
      doMouseTouchClick(t) {
        const i = this.container,
          e = i.actualOptions;
        if (this.canPush) {
          const t = i.interactivity.mouse,
            s = t.position;
          if (!s) return;
          (t.clickPosition = Object.assign({}, s)),
            (t.clickTime = new Date().getTime());
          S(e.interactivity.events.onClick.mode, (t) =>
            this.handleClickMode(t)
          );
        }
        "touchend" === t.type && setTimeout(() => this.mouseTouchFinish(), 500);
      }
      handleClickMode(t) {
        this.container.handleClickMode(t);
      }
      handleThemeChange(t) {
        const i = t,
          e = this.container,
          s = e.options,
          o = s.defaultThemes,
          n = i.matches ? o.dark : o.light,
          a = s.themes.find((t) => t.name === n);
        a && a.default.auto && e.loadTheme(n);
      }
      handleVisibilityChange() {
        const t = this.container,
          i = t.actualOptions;
        this.mouseTouchFinish(),
          i.pauseOnBlur &&
            ((
              null === document || void 0 === document
                ? void 0
                : document.hidden
            )
              ? ((t.pageHidden = !0), t.pause())
              : ((t.pageHidden = !1),
                t.getAnimationStatus() ? t.play(!0) : t.draw(!0)));
      }
      handleWindowResize() {
        this.resizeTimeout &&
          (clearTimeout(this.resizeTimeout), delete this.resizeTimeout),
          (this.resizeTimeout = setTimeout(async () => {
            var t;
            return null === (t = this.container.canvas) || void 0 === t
              ? void 0
              : t.windowResize();
          }, 1e3 * this.container.actualOptions.interactivity.events.resize.delay));
      }
      manageListeners(t) {
        var i;
        const e = this.handlers,
          s = this.container,
          o = s.actualOptions,
          n = o.interactivity.detectsOn;
        let a = Y;
        if ("window" === n)
          (s.interactivity.element = window), (a = "pointerout");
        else if ("parent" === n && s.canvas.element) {
          const t = s.canvas.element;
          s.interactivity.element =
            null !== (i = t.parentElement) && void 0 !== i ? i : t.parentNode;
        } else s.interactivity.element = s.canvas.element;
        const r = b("(prefers-color-scheme: dark)");
        r &&
          (void 0 !== r.addEventListener
            ? Z(r, "change", e.themeChange, t)
            : void 0 !== r.addListener &&
              (t
                ? r.addListener(e.oldThemeChange)
                : r.removeListener(e.oldThemeChange)));
        const l = s.interactivity.element;
        if (!l) return;
        const h = l;
        (o.interactivity.events.onHover.enable ||
          o.interactivity.events.onClick.enable) &&
          (Z(l, X, e.mouseMove, t),
          Z(l, "touchstart", e.touchStart, t),
          Z(l, "touchmove", e.touchMove, t),
          o.interactivity.events.onClick.enable
            ? (Z(l, N, e.touchEndClick, t),
              Z(l, "pointerup", e.mouseUp, t),
              Z(l, "pointerdown", e.mouseDown, t))
            : Z(l, N, e.touchEnd, t),
          Z(l, a, e.mouseLeave, t),
          Z(l, "touchcancel", e.touchCancel, t)),
          s.canvas.element &&
            (s.canvas.element.style.pointerEvents =
              h === s.canvas.element ? "initial" : "none"),
          o.interactivity.events.resize &&
            ("undefined" != typeof ResizeObserver
              ? this.resizeObserver && !t
                ? (s.canvas.element &&
                    this.resizeObserver.unobserve(s.canvas.element),
                  this.resizeObserver.disconnect(),
                  delete this.resizeObserver)
                : !this.resizeObserver &&
                  t &&
                  s.canvas.element &&
                  ((this.resizeObserver = new ResizeObserver((t) => {
                    t.find((t) => t.target === s.canvas.element) &&
                      this.handleWindowResize();
                  })),
                  this.resizeObserver.observe(s.canvas.element))
              : Z(window, "resize", e.resize, t)),
          document &&
            Z(document, "visibilitychange", e.visibilityChange, t, !1);
      }
      mouseDown() {
        const t = this.container.interactivity;
        if (t) {
          const i = t.mouse;
          (i.clicking = !0), (i.downPosition = i.position);
        }
      }
      mouseTouchClick(t) {
        const i = this.container,
          e = i.actualOptions,
          s = i.interactivity.mouse;
        s.inside = !0;
        let o = !1;
        const n = s.position;
        if (n && e.interactivity.events.onClick.enable) {
          for (const [, t] of i.plugins)
            if (t.clickPositionValid && ((o = t.clickPositionValid(n)), o))
              break;
          o || this.doMouseTouchClick(t), (s.clicking = !1);
        }
      }
      mouseTouchFinish() {
        const t = this.container.interactivity;
        if (!t) return;
        const i = t.mouse;
        delete i.position,
          delete i.clickPosition,
          delete i.downPosition,
          (t.status = Y),
          (i.inside = !1),
          (i.clicking = !1);
      }
      mouseTouchMove(t) {
        var i, e, s, o, n, a, r;
        const l = this.container,
          h = l.actualOptions;
        if (
          !(null === (i = l.interactivity) || void 0 === i ? void 0 : i.element)
        )
          return;
        let c;
        l.interactivity.mouse.inside = !0;
        const d = l.canvas.element;
        if (t.type.startsWith("pointer")) {
          this.canPush = !0;
          const i = t;
          if (l.interactivity.element === window) {
            if (d) {
              const t = d.getBoundingClientRect();
              c = { x: i.clientX - t.left, y: i.clientY - t.top };
            }
          } else if ("parent" === h.interactivity.detectsOn) {
            const t = i.target,
              o = i.currentTarget,
              n = l.canvas.element;
            if (t && o && n) {
              const e = t.getBoundingClientRect(),
                s = o.getBoundingClientRect(),
                a = n.getBoundingClientRect();
              c = {
                x: i.offsetX + 2 * e.left - (s.left + a.left),
                y: i.offsetY + 2 * e.top - (s.top + a.top),
              };
            } else
              c = {
                x: null !== (e = i.offsetX) && void 0 !== e ? e : i.clientX,
                y: null !== (s = i.offsetY) && void 0 !== s ? s : i.clientY,
              };
          } else
            i.target === l.canvas.element &&
              (c = {
                x: null !== (o = i.offsetX) && void 0 !== o ? o : i.clientX,
                y: null !== (n = i.offsetY) && void 0 !== n ? n : i.clientY,
              });
        } else {
          this.canPush = "touchmove" !== t.type;
          const i = t,
            e = i.touches[i.touches.length - 1],
            s = null == d ? void 0 : d.getBoundingClientRect();
          c = {
            x:
              e.clientX -
              (null !== (a = null == s ? void 0 : s.left) && void 0 !== a
                ? a
                : 0),
            y:
              e.clientY -
              (null !== (r = null == s ? void 0 : s.top) && void 0 !== r
                ? r
                : 0),
          };
        }
        const u = l.retina.pixelRatio;
        c && ((c.x *= u), (c.y *= u)),
          (l.interactivity.mouse.position = c),
          (l.interactivity.status = X);
      }
    }
    class K {
      constructor(t) {
        this.container = t;
      }
      async nextFrame(t) {
        var i;
        try {
          const e = this.container;
          if (
            !e.smooth &&
            void 0 !== e.lastFrameTime &&
            t < e.lastFrameTime + 1e3 / e.fpsLimit
          )
            return void e.draw(!1);
          (null !== (i = e.lastFrameTime) && void 0 !== i) ||
            (e.lastFrameTime = t);
          const s = (function (t, i = 60, e = !1) {
            return { value: t, factor: e ? 35 / i : (35 * t) / 1e3 };
          })(t - e.lastFrameTime, e.fpsLimit, e.smooth);
          if (((e.lifeTime += s.value), (e.lastFrameTime = t), s.value > 1e3))
            return void e.draw(!1);
          if (
            (await e.particles.draw(s),
            e.duration > 0 && e.lifeTime > e.duration)
          )
            return void e.destroy();
          e.getAnimationStatus() && e.draw(!1);
        } catch (t) {
          console.error("Testball??????????????????", t);
        }
      }
    }
    class tt {
      constructor() {
        this.value = "";
      }
      static create(t, i) {
        const e = new tt();
        return (
          e.load(t),
          void 0 !== i &&
            ("string" == typeof i || i instanceof Array
              ? e.load({ value: i })
              : e.load(i)),
          e
        );
      }
      load(t) {
        void 0 !== (null == t ? void 0 : t.value) && (this.value = t.value);
      }
    }
    class it {
      constructor() {
        (this.color = new tt()),
          (this.color.value = ""),
          (this.image = ""),
          (this.position = ""),
          (this.repeat = ""),
          (this.size = ""),
          (this.opacity = 1);
      }
      load(t) {
        t &&
          (void 0 !== t.color && (this.color = tt.create(this.color, t.color)),
          void 0 !== t.image && (this.image = t.image),
          void 0 !== t.position && (this.position = t.position),
          void 0 !== t.repeat && (this.repeat = t.repeat),
          void 0 !== t.size && (this.size = t.size),
          void 0 !== t.opacity && (this.opacity = t.opacity));
      }
    }
    class et {
      constructor() {
        (this.color = new tt()),
          (this.color.value = "#fff"),
          (this.opacity = 1);
      }
      load(t) {
        t &&
          (void 0 !== t.color && (this.color = tt.create(this.color, t.color)),
          void 0 !== t.opacity && (this.opacity = t.opacity));
      }
    }
    class st {
      constructor() {
        (this.composite = "destination-out"),
          (this.cover = new et()),
          (this.enable = !1);
      }
      load(t) {
        if (t) {
          if (
            (void 0 !== t.composite && (this.composite = t.composite),
            void 0 !== t.cover)
          ) {
            const i = t.cover,
              e = "string" == typeof t.cover ? { color: t.cover } : t.cover;
            this.cover.load(void 0 !== i.color ? i : { color: e });
          }
          void 0 !== t.enable && (this.enable = t.enable);
        }
      }
    }
    class ot {
      constructor() {
        (this.enable = !0), (this.zIndex = 0);
      }
      load(t) {
        t &&
          (void 0 !== t.enable && (this.enable = t.enable),
          void 0 !== t.zIndex && (this.zIndex = t.zIndex));
      }
    }
    class nt {
      constructor() {
        (this.enable = !1), (this.mode = []);
      }
      load(t) {
        t &&
          (void 0 !== t.enable && (this.enable = t.enable),
          void 0 !== t.mode && (this.mode = t.mode));
      }
    }
    class at {
      constructor() {
        (this.selectors = []),
          (this.enable = !1),
          (this.mode = []),
          (this.type = "circle");
      }
      get el() {
        return this.elementId;
      }
      set el(t) {
        this.elementId = t;
      }
      get elementId() {
        return this.ids;
      }
      set elementId(t) {
        this.ids = t;
      }
      get ids() {
        return S(this.selectors, (t) => t.replace("#", ""));
      }
      set ids(t) {
        this.selectors = S(t, (t) => `#${t}`);
      }
      load(t) {
        var i, e;
        if (!t) return;
        const s =
          null !==
            (e = null !== (i = t.ids) && void 0 !== i ? i : t.elementId) &&
          void 0 !== e
            ? e
            : t.el;
        void 0 !== s && (this.ids = s),
          void 0 !== t.selectors && (this.selectors = t.selectors),
          void 0 !== t.enable && (this.enable = t.enable),
          void 0 !== t.mode && (this.mode = t.mode),
          void 0 !== t.type && (this.type = t.type);
      }
    }
    class rt {
      constructor() {
        (this.enable = !1), (this.force = 2), (this.smooth = 10);
      }
      load(t) {
        t &&
          (void 0 !== t.enable && (this.enable = t.enable),
          void 0 !== t.force && (this.force = t.force),
          void 0 !== t.smooth && (this.smooth = t.smooth));
      }
    }
    class lt {
      constructor() {
        (this.enable = !1), (this.mode = []), (this.parallax = new rt());
      }
      load(t) {
        t &&
          (void 0 !== t.enable && (this.enable = t.enable),
          void 0 !== t.mode && (this.mode = t.mode),
          this.parallax.load(t.parallax));
      }
    }
    class ht {
      constructor() {
        (this.delay = 0.5), (this.enable = !0);
      }
      load(t) {
        void 0 !== t &&
          (void 0 !== t.delay && (this.delay = t.delay),
          void 0 !== t.enable && (this.enable = t.enable));
      }
    }
    class ct {
      constructor() {
        (this.onClick = new nt()),
          (this.onDiv = new at()),
          (this.onHover = new lt()),
          (this.resize = new ht());
      }
      get onclick() {
        return this.onClick;
      }
      set onclick(t) {
        this.onClick = t;
      }
      get ondiv() {
        return this.onDiv;
      }
      set ondiv(t) {
        this.onDiv = t;
      }
      get onhover() {
        return this.onHover;
      }
      set onhover(t) {
        this.onHover = t;
      }
      load(t) {
        var i, e, s;
        if (!t) return;
        this.onClick.load(
          null !== (i = t.onClick) && void 0 !== i ? i : t.onclick
        );
        const o = null !== (e = t.onDiv) && void 0 !== e ? e : t.ondiv;
        void 0 !== o &&
          (this.onDiv = S(o, (t) => {
            const i = new at();
            return i.load(t), i;
          })),
          this.onHover.load(
            null !== (s = t.onHover) && void 0 !== s ? s : t.onhover
          ),
          "boolean" == typeof t.resize
            ? (this.resize.enable = t.resize)
            : this.resize.load(t.resize);
      }
    }
    class dt {
      constructor(t, i) {
        (this._engine = t), (this._container = i);
      }
      load(t) {
        if (t && this._container) {
          const i = this._engine.plugins.interactors.get(this._container);
          if (i)
            for (const e of i) e.loadModeOptions && e.loadModeOptions(this, t);
        }
      }
    }
    class ut {
      constructor(t, i) {
        (this.detectsOn = "window"),
          (this.events = new ct()),
          (this.modes = new dt(t, i));
      }
      get detect_on() {
        return this.detectsOn;
      }
      set detect_on(t) {
        this.detectsOn = t;
      }
      load(t) {
        var i;
        if (!t) return;
        const e = null !== (i = t.detectsOn) && void 0 !== i ? i : t.detect_on;
        void 0 !== e && (this.detectsOn = e),
          this.events.load(t.events),
          this.modes.load(t.modes);
      }
    }
    class pt {
      load(t) {
        var i, e;
        t &&
          (void 0 !== t.position &&
            (this.position = {
              x: null !== (i = t.position.x) && void 0 !== i ? i : 50,
              y: null !== (e = t.position.y) && void 0 !== e ? e : 50,
            }),
          void 0 !== t.options && (this.options = C({}, t.options)));
      }
    }
    class vt {
      constructor() {
        (this.maxWidth = 1 / 0), (this.options = {}), (this.mode = "canvas");
      }
      load(t) {
        t &&
          (void 0 !== t.maxWidth && (this.maxWidth = t.maxWidth),
          void 0 !== t.mode &&
            ("screen" === t.mode
              ? (this.mode = "screen")
              : (this.mode = "canvas")),
          void 0 !== t.options && (this.options = C({}, t.options)));
      }
    }
    class mt {
      constructor() {
        (this.auto = !1), (this.mode = "any"), (this.value = !1);
      }
      load(t) {
        t &&
          (void 0 !== t.auto && (this.auto = t.auto),
          void 0 !== t.mode && (this.mode = t.mode),
          void 0 !== t.value && (this.value = t.value));
      }
    }
    class ft {
      constructor() {
        (this.name = ""), (this.default = new mt());
      }
      load(t) {
        t &&
          (void 0 !== t.name && (this.name = t.name),
          this.default.load(t.default),
          void 0 !== t.options && (this.options = C({}, t.options)));
      }
    }
    class yt {
      constructor() {
        (this.count = 0),
          (this.enable = !1),
          (this.offset = 0),
          (this.speed = 1),
          (this.decay = 0),
          (this.sync = !0);
      }
      load(t) {
        t &&
          (void 0 !== t.count && (this.count = u(t.count)),
          void 0 !== t.enable && (this.enable = t.enable),
          void 0 !== t.offset && (this.offset = u(t.offset)),
          void 0 !== t.speed && (this.speed = u(t.speed)),
          void 0 !== t.decay && (this.decay = u(t.decay)),
          void 0 !== t.sync && (this.sync = t.sync));
      }
    }
    class gt {
      constructor() {
        (this.h = new yt()), (this.s = new yt()), (this.l = new yt());
      }
      load(t) {
        t && (this.h.load(t.h), this.s.load(t.s), this.l.load(t.l));
      }
    }
    class wt extends tt {
      constructor() {
        super(), (this.animation = new gt());
      }
      static create(t, i) {
        const e = new wt();
        return (
          e.load(t),
          void 0 !== i &&
            ("string" == typeof i || i instanceof Array
              ? e.load({ value: i })
              : e.load(i)),
          e
        );
      }
      load(t) {
        if ((super.load(t), !t)) return;
        const i = t.animation;
        void 0 !== i &&
          (void 0 !== i.enable
            ? this.animation.h.load(i)
            : this.animation.load(t.animation));
      }
    }
    class bt {
      constructor() {
        this.speed = 2;
      }
      load(t) {
        t && void 0 !== t.speed && (this.speed = t.speed);
      }
    }
    class xt {
      constructor() {
        (this.enable = !0), (this.retries = 0);
      }
      load(t) {
        t &&
          (void 0 !== t.enable && (this.enable = t.enable),
          void 0 !== t.retries && (this.retries = t.retries));
      }
    }
    class _t {
      constructor() {
        (this.enable = !1), (this.minimumValue = 0);
      }
      load(t) {
        t &&
          (void 0 !== t.enable && (this.enable = t.enable),
          void 0 !== t.minimumValue && (this.minimumValue = t.minimumValue));
      }
    }
    class zt {
      constructor() {
        (this.random = new _t()), (this.value = 0);
      }
      load(t) {
        t &&
          ("boolean" == typeof t.random
            ? (this.random.enable = t.random)
            : this.random.load(t.random),
          void 0 !== t.value &&
            (this.value = u(
              t.value,
              this.random.enable ? this.random.minimumValue : void 0
            )));
      }
    }
    class Pt extends zt {
      constructor() {
        super(), (this.random.minimumValue = 0.1), (this.value = 1);
      }
    }
    class Mt {
      constructor() {
        (this.horizontal = new Pt()), (this.vertical = new Pt());
      }
      load(t) {
        t &&
          (this.horizontal.load(t.horizontal), this.vertical.load(t.vertical));
      }
    }
    class Ct {
      constructor() {
        (this.absorb = new bt()),
          (this.bounce = new Mt()),
          (this.enable = !1),
          (this.mode = "bounce"),
          (this.overlap = new xt());
      }
      load(t) {
        t &&
          (this.absorb.load(t.absorb),
          this.bounce.load(t.bounce),
          void 0 !== t.enable && (this.enable = t.enable),
          void 0 !== t.mode && (this.mode = t.mode),
          this.overlap.load(t.overlap));
      }
    }
    class St {
      constructor() {
        (this.offset = 0), (this.value = 90);
      }
      load(t) {
        t &&
          (void 0 !== t.offset && (this.offset = u(t.offset)),
          void 0 !== t.value && (this.value = u(t.value)));
      }
    }
    class Ot {
      constructor() {
        (this.distance = 200),
          (this.enable = !1),
          (this.rotate = { x: 3e3, y: 3e3 });
      }
      get rotateX() {
        return this.rotate.x;
      }
      set rotateX(t) {
        this.rotate.x = t;
      }
      get rotateY() {
        return this.rotate.y;
      }
      set rotateY(t) {
        this.rotate.y = t;
      }
      load(t) {
        var i, e, s, o;
        if (!t) return;
        void 0 !== t.distance && (this.distance = u(t.distance)),
          void 0 !== t.enable && (this.enable = t.enable);
        const n =
          null !==
            (e = null === (i = t.rotate) || void 0 === i ? void 0 : i.x) &&
          void 0 !== e
            ? e
            : t.rotateX;
        void 0 !== n && (this.rotate.x = n);
        const a =
          null !==
            (o = null === (s = t.rotate) || void 0 === s ? void 0 : s.y) &&
          void 0 !== o
            ? o
            : t.rotateY;
        void 0 !== a && (this.rotate.y = a);
      }
    }
    class kt {
      constructor() {
        (this.x = 50),
          (this.y = 50),
          (this.mode = "percent"),
          (this.radius = 0);
      }
      load(t) {
        t &&
          (void 0 !== t.x && (this.x = t.x),
          void 0 !== t.y && (this.y = t.y),
          void 0 !== t.mode && (this.mode = t.mode),
          void 0 !== t.radius && (this.radius = t.radius));
      }
    }
    class Dt {
      constructor() {
        (this.acceleration = 9.81),
          (this.enable = !1),
          (this.inverse = !1),
          (this.maxSpeed = 50);
      }
      load(t) {
        t &&
          (void 0 !== t.acceleration && (this.acceleration = u(t.acceleration)),
          void 0 !== t.enable && (this.enable = t.enable),
          void 0 !== t.inverse && (this.inverse = t.inverse),
          void 0 !== t.maxSpeed && (this.maxSpeed = u(t.maxSpeed)));
      }
    }
    class It {
      constructor() {
        (this.clamp = !0),
          (this.delay = new zt()),
          (this.enable = !1),
          (this.options = {});
      }
      load(t) {
        t &&
          (void 0 !== t.clamp && (this.clamp = t.clamp),
          this.delay.load(t.delay),
          void 0 !== t.enable && (this.enable = t.enable),
          (this.generator = t.generator),
          t.options && (this.options = C(this.options, t.options)));
      }
    }
    class Rt {
      constructor() {
        (this.enable = !1),
          (this.length = 10),
          (this.fillColor = new tt()),
          (this.fillColor.value = "#000000");
      }
      load(t) {
        t &&
          (void 0 !== t.enable && (this.enable = t.enable),
          (this.fillColor = tt.create(this.fillColor, t.fillColor)),
          void 0 !== t.length && (this.length = t.length));
      }
    }
    class Tt {
      constructor() {
        this.default = "out";
      }
      load(t) {
        var i, e, s, o;
        t &&
          (void 0 !== t.default && (this.default = t.default),
          (this.bottom =
            null !== (i = t.bottom) && void 0 !== i ? i : t.default),
          (this.left = null !== (e = t.left) && void 0 !== e ? e : t.default),
          (this.right = null !== (s = t.right) && void 0 !== s ? s : t.default),
          (this.top = null !== (o = t.top) && void 0 !== o ? o : t.default));
      }
    }
    class Et {
      constructor() {
        (this.acceleration = 0), (this.enable = !1);
      }
      load(t) {
        t &&
          (void 0 !== t.acceleration && (this.acceleration = u(t.acceleration)),
          void 0 !== t.enable && (this.enable = t.enable),
          (this.position = t.position ? C({}, t.position) : void 0));
      }
    }
    class Lt {
      constructor() {
        (this.angle = new St()),
          (this.attract = new Ot()),
          (this.center = new kt()),
          (this.decay = 0),
          (this.distance = {}),
          (this.direction = "none"),
          (this.drift = 0),
          (this.enable = !1),
          (this.gravity = new Dt()),
          (this.path = new It()),
          (this.outModes = new Tt()),
          (this.random = !1),
          (this.size = !1),
          (this.speed = 2),
          (this.spin = new Et()),
          (this.straight = !1),
          (this.trail = new Rt()),
          (this.vibrate = !1),
          (this.warp = !1);
      }
      get bounce() {
        return this.collisions;
      }
      set bounce(t) {
        this.collisions = t;
      }
      get collisions() {
        return !1;
      }
      set collisions(t) {}
      get noise() {
        return this.path;
      }
      set noise(t) {
        this.path = t;
      }
      get outMode() {
        return this.outModes.default;
      }
      set outMode(t) {
        this.outModes.default = t;
      }
      get out_mode() {
        return this.outMode;
      }
      set out_mode(t) {
        this.outMode = t;
      }
      load(t) {
        var i, e, s;
        if (!t) return;
        this.angle.load(
          "number" == typeof t.angle ? { value: t.angle } : t.angle
        ),
          this.attract.load(t.attract),
          this.center.load(t.center),
          void 0 !== t.decay && (this.decay = u(t.decay)),
          void 0 !== t.direction && (this.direction = t.direction),
          void 0 !== t.distance &&
            (this.distance =
              "number" == typeof t.distance
                ? { horizontal: t.distance, vertical: t.distance }
                : Object.assign({}, t.distance)),
          void 0 !== t.drift && (this.drift = u(t.drift)),
          void 0 !== t.enable && (this.enable = t.enable),
          this.gravity.load(t.gravity);
        const o =
          null !==
            (e = null !== (i = t.outModes) && void 0 !== i ? i : t.outMode) &&
          void 0 !== e
            ? e
            : t.out_mode;
        void 0 !== o &&
          ("object" == typeof o
            ? this.outModes.load(o)
            : this.outModes.load({ default: o })),
          this.path.load(null !== (s = t.path) && void 0 !== s ? s : t.noise),
          void 0 !== t.random && (this.random = t.random),
          void 0 !== t.size && (this.size = t.size),
          void 0 !== t.speed && (this.speed = u(t.speed)),
          this.spin.load(t.spin),
          void 0 !== t.straight && (this.straight = t.straight),
          this.trail.load(t.trail),
          void 0 !== t.vibrate && (this.vibrate = t.vibrate),
          void 0 !== t.warp && (this.warp = t.warp);
      }
    }
    class At {
      constructor() {
        (this.count = 0),
          (this.enable = !1),
          (this.speed = 1),
          (this.decay = 0),
          (this.sync = !1);
      }
      load(t) {
        t &&
          (void 0 !== t.count && (this.count = u(t.count)),
          void 0 !== t.enable && (this.enable = t.enable),
          void 0 !== t.speed && (this.speed = u(t.speed)),
          void 0 !== t.decay && (this.decay = u(t.decay)),
          void 0 !== t.sync && (this.sync = t.sync));
      }
    }
    class Ft extends At {
      constructor() {
        super(),
          (this.destroy = "none"),
          (this.enable = !1),
          (this.speed = 2),
          (this.startValue = "random"),
          (this.sync = !1);
      }
      get opacity_min() {
        return this.minimumValue;
      }
      set opacity_min(t) {
        this.minimumValue = t;
      }
      load(t) {
        var i;
        t &&
          (super.load(t),
          void 0 !== t.destroy && (this.destroy = t.destroy),
          void 0 !== t.enable && (this.enable = t.enable),
          (this.minimumValue =
            null !== (i = t.minimumValue) && void 0 !== i ? i : t.opacity_min),
          void 0 !== t.speed && (this.speed = t.speed),
          void 0 !== t.startValue && (this.startValue = t.startValue),
          void 0 !== t.sync && (this.sync = t.sync));
      }
    }
    class Vt extends zt {
      constructor() {
        super(),
          (this.animation = new Ft()),
          (this.random.minimumValue = 0.1),
          (this.value = 1);
      }
      get anim() {
        return this.animation;
      }
      set anim(t) {
        this.animation = t;
      }
      load(t) {
        var i;
        if (!t) return;
        super.load(t);
        const e = null !== (i = t.animation) && void 0 !== i ? i : t.anim;
        void 0 !== e &&
          (this.animation.load(e),
          (this.value = u(
            this.value,
            this.animation.enable ? this.animation.minimumValue : void 0
          )));
      }
    }
    class Bt {
      constructor() {
        (this.enable = !1), (this.width = 1920), (this.height = 1080);
      }
      get area() {
        return this.width;
      }
      set area(t) {
        this.width = t;
      }
      get factor() {
        return this.height;
      }
      set factor(t) {
        this.height = t;
      }
      get value_area() {
        return this.area;
      }
      set value_area(t) {
        this.area = t;
      }
      load(t) {
        var i, e, s;
        if (!t) return;
        void 0 !== t.enable && (this.enable = t.enable);
        const o =
          null !== (e = null !== (i = t.width) && void 0 !== i ? i : t.area) &&
          void 0 !== e
            ? e
            : t.value_area;
        void 0 !== o && (this.width = o);
        const n = null !== (s = t.height) && void 0 !== s ? s : t.factor;
        void 0 !== n && (this.height = n);
      }
    }
    class qt {
      constructor() {
        (this.density = new Bt()), (this.limit = 0), (this.value = 100);
      }
      get max() {
        return this.limit;
      }
      set max(t) {
        this.limit = t;
      }
      load(t) {
        var i;
        if (!t) return;
        this.density.load(t.density);
        const e = null !== (i = t.limit) && void 0 !== i ? i : t.max;
        void 0 !== e && (this.limit = e),
          void 0 !== t.value && (this.value = t.value);
      }
    }
    class Wt {
      constructor() {
        (this.blur = 0),
          (this.color = new tt()),
          (this.enable = !1),
          (this.offset = { x: 0, y: 0 }),
          (this.color.value = "#000");
      }
      load(t) {
        t &&
          (void 0 !== t.blur && (this.blur = t.blur),
          (this.color = tt.create(this.color, t.color)),
          void 0 !== t.enable && (this.enable = t.enable),
          void 0 !== t.offset &&
            (void 0 !== t.offset.x && (this.offset.x = t.offset.x),
            void 0 !== t.offset.y && (this.offset.y = t.offset.y)));
      }
    }
    const Ut = "character",
      Ht = "char",
      jt = "image",
      Gt = "images",
      Nt = "polygon",
      Xt = "star";
    class Yt {
      constructor() {
        (this.options = {}), (this.type = "circle");
      }
      get character() {
        var t;
        return null !== (t = this.options[Ut]) && void 0 !== t
          ? t
          : this.options[Ht];
      }
      set character(t) {
        this.options[Ht] = this.options[Ut] = t;
      }
      get custom() {
        return this.options;
      }
      set custom(t) {
        this.options = t;
      }
      get image() {
        var t;
        return null !== (t = this.options[jt]) && void 0 !== t
          ? t
          : this.options[Gt];
      }
      set image(t) {
        this.options[Gt] = this.options[jt] = t;
      }
      get images() {
        return this.image;
      }
      set images(t) {
        this.image = t;
      }
      get polygon() {
        var t;
        return null !== (t = this.options[Nt]) && void 0 !== t
          ? t
          : this.options[Xt];
      }
      set polygon(t) {
        this.options[Xt] = this.options[Nt] = t;
      }
      get stroke() {
        return [];
      }
      set stroke(t) {}
      load(t) {
        var i, e, s;
        if (!t) return;
        const o = null !== (i = t.options) && void 0 !== i ? i : t.custom;
        if (void 0 !== o)
          for (const t in o) {
            const i = o[t];
            i &&
              (this.options[t] = C(
                null !== (e = this.options[t]) && void 0 !== e ? e : {},
                i
              ));
          }
        this.loadShape(t.character, Ut, Ht, !0),
          this.loadShape(t.polygon, Nt, Xt, !1),
          this.loadShape(
            null !== (s = t.image) && void 0 !== s ? s : t.images,
            jt,
            Gt,
            !0
          ),
          void 0 !== t.type && (this.type = t.type);
      }
      loadShape(t, i, e, s) {
        var o, n;
        if (!t) return;
        const a = t instanceof Array,
          r = a ? [] : {},
          l = a !== this.options[i] instanceof Array,
          h = a !== this.options[e] instanceof Array;
        l && (this.options[i] = r),
          h && s && (this.options[e] = r),
          (this.options[i] = C(
            null !== (o = this.options[i]) && void 0 !== o ? o : r,
            t
          )),
          (this.options[e] && !s) ||
            (this.options[e] = C(
              null !== (n = this.options[e]) && void 0 !== n ? n : r,
              t
            ));
      }
    }
    class $t extends At {
      constructor() {
        super(),
          (this.destroy = "none"),
          (this.enable = !1),
          (this.speed = 5),
          (this.startValue = "random"),
          (this.sync = !1);
      }
      get size_min() {
        return this.minimumValue;
      }
      set size_min(t) {
        this.minimumValue = t;
      }
      load(t) {
        var i;
        super.load(t),
          t &&
            (void 0 !== t.destroy && (this.destroy = t.destroy),
            void 0 !== t.enable && (this.enable = t.enable),
            (this.minimumValue =
              null !== (i = t.minimumValue) && void 0 !== i ? i : t.size_min),
            void 0 !== t.speed && (this.speed = t.speed),
            void 0 !== t.startValue && (this.startValue = t.startValue),
            void 0 !== t.sync && (this.sync = t.sync));
      }
    }
    class Jt extends zt {
      constructor() {
        super(),
          (this.animation = new $t()),
          (this.random.minimumValue = 1),
          (this.value = 3);
      }
      get anim() {
        return this.animation;
      }
      set anim(t) {
        this.animation = t;
      }
      load(t) {
        var i;
        if ((super.load(t), !t)) return;
        const e = null !== (i = t.animation) && void 0 !== i ? i : t.anim;
        void 0 !== e &&
          (this.animation.load(e),
          (this.value = u(
            this.value,
            this.animation.enable ? this.animation.minimumValue : void 0
          )));
      }
    }
    class Zt {
      constructor() {
        this.width = 0;
      }
      load(t) {
        t &&
          (void 0 !== t.color && (this.color = wt.create(this.color, t.color)),
          void 0 !== t.width && (this.width = u(t.width)),
          void 0 !== t.opacity && (this.opacity = u(t.opacity)));
      }
    }
    class Qt extends zt {
      constructor() {
        super(),
          (this.opacityRate = 1),
          (this.sizeRate = 1),
          (this.velocityRate = 1);
      }
      load(t) {
        super.load(t),
          t &&
            (void 0 !== t.opacityRate && (this.opacityRate = t.opacityRate),
            void 0 !== t.sizeRate && (this.sizeRate = t.sizeRate),
            void 0 !== t.velocityRate && (this.velocityRate = t.velocityRate));
      }
    }
    class Kt {
      constructor(t, i) {
        (this._engine = t),
          (this._container = i),
          (this.bounce = new Mt()),
          (this.collisions = new Ct()),
          (this.color = new wt()),
          (this.color.value = "#fff"),
          (this.groups = {}),
          (this.move = new Lt()),
          (this.number = new qt()),
          (this.opacity = new Vt()),
          (this.reduceDuplicates = !1),
          (this.shadow = new Wt()),
          (this.shape = new Yt()),
          (this.size = new Jt()),
          (this.stroke = new Zt()),
          (this.zIndex = new Qt());
      }
      load(t) {
        var i, e, s, o, n, a;
        if (!t) return;
        if (
          (this.bounce.load(t.bounce),
          this.color.load(wt.create(this.color, t.color)),
          void 0 !== t.groups)
        )
          for (const e in t.groups) {
            const s = t.groups[e];
            void 0 !== s &&
              (this.groups[e] = C(
                null !== (i = this.groups[e]) && void 0 !== i ? i : {},
                s
              ));
          }
        this.move.load(t.move),
          this.number.load(t.number),
          this.opacity.load(t.opacity),
          void 0 !== t.reduceDuplicates &&
            (this.reduceDuplicates = t.reduceDuplicates),
          this.shape.load(t.shape),
          this.size.load(t.size),
          this.shadow.load(t.shadow),
          this.zIndex.load(t.zIndex);
        const r =
          null !==
            (s =
              null === (e = t.move) || void 0 === e ? void 0 : e.collisions) &&
          void 0 !== s
            ? s
            : null === (o = t.move) || void 0 === o
            ? void 0
            : o.bounce;
        void 0 !== r && (this.collisions.enable = r),
          this.collisions.load(t.collisions),
          void 0 !== t.interactivity &&
            (this.interactivity = C({}, t.interactivity));
        const l =
          null !== (n = t.stroke) && void 0 !== n
            ? n
            : null === (a = t.shape) || void 0 === a
            ? void 0
            : a.stroke;
        if (
          (l &&
            (this.stroke = S(l, (t) => {
              const i = new Zt();
              return i.load(t), i;
            })),
          this._container)
        ) {
          const i = this._engine.plugins.updaters.get(this._container);
          if (i) for (const e of i) e.loadOptions && e.loadOptions(this, t);
          const e = this._engine.plugins.interactors.get(this._container);
          if (e)
            for (const i of e)
              i.loadParticlesOptions && i.loadParticlesOptions(this, t);
        }
      }
    }
    function ti(t, ...i) {
      for (const e of i) t.load(e);
    }
    function ii(t, i, ...e) {
      const s = new Kt(t, i);
      return ti(s, ...e), s;
    }
    class ei {
      constructor(t, i) {
        (this._engine = t),
          (this._container = i),
          (this.autoPlay = !0),
          (this.background = new it()),
          (this.backgroundMask = new st()),
          (this.defaultThemes = {}),
          (this.delay = 0),
          (this.fullScreen = new ot()),
          (this.detectRetina = !0),
          (this.duration = 0),
          (this.fpsLimit = 120),
          (this.interactivity = new ut(t, i)),
          (this.manualParticles = []),
          (this.particles = ii(this._engine, this._container)),
          (this.pauseOnBlur = !0),
          (this.pauseOnOutsideViewport = !0),
          (this.responsive = []),
          (this.smooth = !1),
          (this.style = {}),
          (this.themes = []),
          (this.zLayers = 100);
      }
      get backgroundMode() {
        return this.fullScreen;
      }
      set backgroundMode(t) {
        this.fullScreen.load(t);
      }
      get fps_limit() {
        return this.fpsLimit;
      }
      set fps_limit(t) {
        this.fpsLimit = t;
      }
      get retina_detect() {
        return this.detectRetina;
      }
      set retina_detect(t) {
        this.detectRetina = t;
      }
      load(t) {
        var i, e, s, o, n;
        if (!t) return;
        void 0 !== t.preset && S(t.preset, (t) => this._importPreset(t)),
          void 0 !== t.autoPlay && (this.autoPlay = t.autoPlay),
          void 0 !== t.delay && (this.delay = u(t.delay));
        const a =
          null !== (i = t.detectRetina) && void 0 !== i ? i : t.retina_detect;
        void 0 !== a && (this.detectRetina = a),
          void 0 !== t.duration && (this.duration = u(t.duration));
        const r = null !== (e = t.fpsLimit) && void 0 !== e ? e : t.fps_limit;
        void 0 !== r && (this.fpsLimit = r),
          void 0 !== t.pauseOnBlur && (this.pauseOnBlur = t.pauseOnBlur),
          void 0 !== t.pauseOnOutsideViewport &&
            (this.pauseOnOutsideViewport = t.pauseOnOutsideViewport),
          void 0 !== t.zLayers && (this.zLayers = t.zLayers),
          this.background.load(t.background);
        const l =
          null !== (s = t.fullScreen) && void 0 !== s ? s : t.backgroundMode;
        "boolean" == typeof l
          ? (this.fullScreen.enable = l)
          : this.fullScreen.load(l),
          this.backgroundMask.load(t.backgroundMask),
          this.interactivity.load(t.interactivity),
          void 0 !== t.manualParticles &&
            (this.manualParticles = t.manualParticles.map((t) => {
              const i = new pt();
              return i.load(t), i;
            })),
          this.particles.load(t.particles),
          (this.style = C(this.style, t.style)),
          this._engine.plugins.loadOptions(this, t),
          void 0 !== t.smooth && (this.smooth = t.smooth);
        const h = this._engine.plugins.interactors.get(this._container);
        if (h) for (const i of h) i.loadOptions && i.loadOptions(this, t);
        if (void 0 !== t.responsive)
          for (const i of t.responsive) {
            const t = new vt();
            t.load(i), this.responsive.push(t);
          }
        if (
          (this.responsive.sort((t, i) => t.maxWidth - i.maxWidth),
          void 0 !== t.themes)
        )
          for (const i of t.themes) {
            const t = this.themes.find((t) => t.name === i.name);
            if (t) t.load(i);
            else {
              const t = new ft();
              t.load(i), this.themes.push(t);
            }
          }
        (this.defaultThemes.dark =
          null === (o = this._findDefaultTheme("dark")) || void 0 === o
            ? void 0
            : o.name),
          (this.defaultThemes.light =
            null === (n = this._findDefaultTheme("light")) || void 0 === n
              ? void 0
              : n.name);
      }
      setResponsive(t, i, e) {
        this.load(e);
        const s = this.responsive.find((e) =>
          "screen" === e.mode && screen
            ? e.maxWidth > screen.availWidth
            : e.maxWidth * i > t
        );
        return (
          this.load(null == s ? void 0 : s.options),
          null == s ? void 0 : s.maxWidth
        );
      }
      setTheme(t) {
        if (t) {
          const i = this.themes.find((i) => i.name === t);
          i && this.load(i.options);
        } else {
          const t = b("(prefers-color-scheme: dark)"),
            i = t && t.matches,
            e = this._findDefaultTheme(i ? "dark" : "light");
          e && this.load(e.options);
        }
      }
      _findDefaultTheme(t) {
        var i;
        return null !==
          (i = this.themes.find(
            (i) => i.default.value && i.default.mode === t
          )) && void 0 !== i
          ? i
          : this.themes.find(
              (t) => t.default.value && "any" === t.default.mode
            );
      }
      _importPreset(t) {
        this.load(this._engine.plugins.getPreset(t));
      }
    }
    class si {
      constructor(t, i) {
        (this.container = i),
          (this._engine = t),
          (this._interactors = this._engine.plugins.getInteractors(
            this.container,
            !0
          )),
          (this._externalInteractors = []),
          (this._particleInteractors = []);
      }
      async externalInteract(t) {
        for (const i of this._externalInteractors)
          i.isEnabled() && (await i.interact(t));
      }
      handleClickMode(t) {
        for (const i of this._externalInteractors)
          i.handleClickMode && i.handleClickMode(t);
      }
      init() {
        (this._externalInteractors = []), (this._particleInteractors = []);
        for (const t of this._interactors) {
          switch (t.type) {
            case "external":
              this._externalInteractors.push(t);
              break;
            case "particles":
              this._particleInteractors.push(t);
          }
          t.init();
        }
      }
      async particlesInteract(t, i) {
        for (const e of this._externalInteractors) e.clear(t, i);
        for (const e of this._particleInteractors)
          e.isEnabled(t) && (await e.interact(t, i));
      }
      async reset(t) {
        for (const i of this._externalInteractors)
          i.isEnabled() && (await i.reset(t));
        for (const i of this._particleInteractors)
          i.isEnabled(t) && (await i.reset(t));
      }
    }
    const oi = (t) => {
      x(t.outMode, t.checkModes) &&
        (t.coord > t.maxCoord - 2 * t.radius
          ? t.setCb(-t.radius)
          : t.coord < 2 * t.radius && t.setCb(t.radius));
    };
    class ni {
      constructor(t, i, e, s, o, n) {
        (this.container = e), (this._engine = t), this.init(i, s, o, n);
      }
      destroy(t) {
        var i;
        if (!this.unbreakable && !this.destroyed) {
          (this.destroyed = !0),
            (this.bubble.inRange = !1),
            (this.slow.inRange = !1);
          for (const [, i] of this.container.plugins)
            i.particleDestroyed && i.particleDestroyed(this, t);
          for (const i of this.container.particles.updaters)
            i.particleDestroyed && i.particleDestroyed(this, t);
          null === (i = this.pathGenerator) || void 0 === i || i.reset(this);
        }
      }
      draw(t) {
        const i = this.container;
        for (const [, e] of i.plugins) i.canvas.drawParticlePlugin(e, this, t);
        i.canvas.drawParticle(this, t);
      }
      getFillColor() {
        var t;
        return this._getRollColor(
          null !== (t = this.bubble.color) && void 0 !== t ? t : U(this.color)
        );
      }
      getMass() {
        return (this.getRadius() ** 2 * Math.PI) / 2;
      }
      getPosition() {
        return {
          x: this.position.x + this.offset.x,
          y: this.position.y + this.offset.y,
          z: this.position.z,
        };
      }
      getRadius() {
        var t;
        return null !== (t = this.bubble.radius) && void 0 !== t
          ? t
          : this.size.value;
      }
      getStrokeColor() {
        var t;
        return this._getRollColor(
          null !== (t = this.bubble.color) && void 0 !== t
            ? t
            : U(this.strokeColor)
        );
      }
      init(t, i, e, s) {
        var n, u, v, m, f, y, g, w, b;
        const x = this.container,
          _ = this._engine;
        (this.id = t),
          (this.group = s),
          (this.fill = !0),
          (this.pathRotation = !1),
          (this.close = !0),
          (this.lastPathTime = 0),
          (this.destroyed = !1),
          (this.unbreakable = !1),
          (this.rotation = 0),
          (this.misplaced = !1),
          (this.retina = { maxDistance: {} }),
          (this.outType = "normal"),
          (this.ignoresResizeRatio = !0);
        const z = x.retina.pixelRatio,
          P = x.actualOptions,
          M = ii(this._engine, x, P.particles),
          C = M.shape.type,
          { reduceDuplicates: S } = M;
        this.shape = O(C, this.id, S);
        const k = M.shape;
        if (e && e.shape && e.shape.type) {
          const t = O(e.shape.type, this.id, S);
          t && ((this.shape = t), k.load(e.shape));
        }
        (this.shapeData = this._loadShapeData(k, S)),
          M.load(e),
          M.load(
            null === (n = this.shapeData) || void 0 === n ? void 0 : n.particles
          ),
          (this.interactivity = new ut(_, x)),
          this.interactivity.load(x.actualOptions.interactivity),
          this.interactivity.load(M.interactivity),
          (this.fill =
            null !==
              (v =
                null === (u = this.shapeData) || void 0 === u
                  ? void 0
                  : u.fill) && void 0 !== v
              ? v
              : this.fill),
          (this.close =
            null !==
              (f =
                null === (m = this.shapeData) || void 0 === m
                  ? void 0
                  : m.close) && void 0 !== f
              ? f
              : this.close),
          (this.options = M);
        const D = this.options.move.path;
        (this.pathDelay = 1e3 * p(D.delay)),
          D.generator &&
            ((this.pathGenerator = this._engine.plugins.getPathGenerator(
              D.generator
            )),
            this.pathGenerator &&
              x.addPath(D.generator, this.pathGenerator) &&
              this.pathGenerator.init(x));
        const I = h(this.options.zIndex.value);
        x.retina.initParticle(this);
        const R = this.options.size,
          T = R.value,
          L = R.animation;
        if (
          ((this.size = {
            enable: R.animation.enable,
            value: h(R.value) * x.retina.pixelRatio,
            max: d(T) * z,
            min: c(T) * z,
            loops: 0,
            maxLoops: h(R.animation.count),
          }),
          L.enable)
        )
          switch (
            ((this.size.status = "increasing"),
            (this.size.decay = 1 - h(L.decay)),
            L.startValue)
          ) {
            case "min":
              (this.size.value = this.size.min),
                (this.size.status = "increasing");
              break;
            case "random":
              (this.size.value = l(this.size)),
                (this.size.status = a() >= 0.5 ? "increasing" : "decreasing");
              break;
            default:
              (this.size.value = this.size.max),
                (this.size.status = "decreasing");
          }
        (this.size.initialValue = this.size.value),
          (this.bubble = { inRange: !1 }),
          (this.slow = { inRange: !1, factor: 1 }),
          (this.position = this._calcPosition(x, i, r(I, 0, x.zLayers))),
          (this.initialPosition = this.position.copy());
        const A = x.canvas.size,
          F = Object.assign({}, this.options.move.center),
          V = "percent" === F.mode;
        switch (
          ((this.moveCenter = {
            x: F.x * (V ? A.width / 100 : 1),
            y: F.y * (V ? A.height / 100 : 1),
            radius:
              null !== (y = this.options.move.center.radius) && void 0 !== y
                ? y
                : 0,
            mode:
              null !== (g = this.options.move.center.mode) && void 0 !== g
                ? g
                : "percent",
          }),
          (this.direction = (function (t, i, e) {
            if ("number" == typeof t) return (t * Math.PI) / 180;
            switch (t) {
              case "top":
                return -Math.PI / 2;
              case "top-right":
                return -Math.PI / 4;
              case "right":
                return 0;
              case "bottom-right":
                return Math.PI / 4;
              case "bottom":
                return Math.PI / 2;
              case "bottom-left":
                return (3 * Math.PI) / 4;
              case "left":
                return Math.PI;
              case "top-left":
                return (-3 * Math.PI) / 4;
              case "inside":
                return Math.atan2(e.y - i.y, e.x - i.x);
              case "outside":
                return Math.atan2(i.y - e.y, i.x - e.x);
              default:
                return a() * Math.PI * 2;
            }
          })(this.options.move.direction, this.position, this.moveCenter)),
          this.options.move.direction)
        ) {
          case "inside":
            this.outType = "inside";
            break;
          case "outside":
            this.outType = "outside";
        }
        (this.initialVelocity = this._calculateVelocity()),
          (this.velocity = this.initialVelocity.copy()),
          (this.moveDecay = 1 - h(this.options.move.decay)),
          (this.offset = o.origin);
        const B = x.particles;
        (B.needsSort = B.needsSort || B.lastZIndex < this.position.z),
          (B.lastZIndex = this.position.z),
          (this.zIndexFactor = this.position.z / x.zLayers),
          (this.sides = 24);
        let q = x.drawers.get(this.shape);
        q ||
          ((q = this._engine.plugins.getShapeDrawer(this.shape)),
          q && x.drawers.set(this.shape, q)),
          (null == q ? void 0 : q.loadShape) &&
            (null == q || q.loadShape(this));
        const W = null == q ? void 0 : q.getSidesCount;
        W && (this.sides = W(this)),
          (this.spawning = !1),
          (this.shadowColor = E(this.options.shadow.color));
        for (const t of x.particles.updaters) t.init(this);
        for (const t of x.particles.movers)
          null === (w = t.init) || void 0 === w || w.call(t, this);
        (null == q ? void 0 : q.particleInit) && q.particleInit(x, this);
        for (const [, t] of x.plugins)
          null === (b = t.particleCreated) || void 0 === b || b.call(t, this);
      }
      isInsideCanvas() {
        const t = this.getRadius(),
          i = this.container.canvas.size;
        return (
          this.position.x >= -t &&
          this.position.y >= -t &&
          this.position.y <= i.height + t &&
          this.position.x <= i.width + t
        );
      }
      isVisible() {
        return !this.destroyed && !this.spawning && this.isInsideCanvas();
      }
      reset() {
        var t;
        for (const i of this.container.particles.updaters)
          null === (t = i.reset) || void 0 === t || t.call(i, this);
      }
      _calcPosition(t, i, e, o = 0) {
        var n, a, r, l;
        for (const [, o] of t.plugins) {
          const t =
            void 0 !== o.particlePosition
              ? o.particlePosition(i, this)
              : void 0;
          if (void 0 !== t) return s.create(t.x, t.y, e);
        }
        const h = y({ size: t.canvas.size, position: i }),
          c = s.create(h.x, h.y, e),
          d = this.getRadius(),
          u = this.options.move.outModes,
          p = (i) => {
            oi({
              outMode: i,
              checkModes: ["bounce", "bounce-horizontal"],
              coord: c.x,
              maxCoord: t.canvas.size.width,
              setCb: (t) => (c.x += t),
              radius: d,
            });
          },
          v = (i) => {
            oi({
              outMode: i,
              checkModes: ["bounce", "bounce-vertical"],
              coord: c.y,
              maxCoord: t.canvas.size.height,
              setCb: (t) => (c.y += t),
              radius: d,
            });
          };
        return (
          p(null !== (n = u.left) && void 0 !== n ? n : u.default),
          p(null !== (a = u.right) && void 0 !== a ? a : u.default),
          v(null !== (r = u.top) && void 0 !== r ? r : u.default),
          v(null !== (l = u.bottom) && void 0 !== l ? l : u.default),
          this._checkOverlap(c, o) ? this._calcPosition(t, void 0, e, o + 1) : c
        );
      }
      _calculateVelocity() {
        const t = (function (t) {
            const i = o.origin;
            return (i.length = 1), (i.angle = t), i;
          })(this.direction).copy(),
          i = this.options.move;
        if ("inside" === i.direction || "outside" === i.direction) return t;
        const e = (Math.PI / 180) * h(i.angle.value),
          s = (Math.PI / 180) * h(i.angle.offset),
          n = { left: s - e / 2, right: s + e / 2 };
        return (
          i.straight || (t.angle += l(u(n.left, n.right))),
          i.random && "number" == typeof i.speed && (t.length *= a()),
          t
        );
      }
      _checkOverlap(t, i = 0) {
        const e = this.options.collisions,
          s = this.getRadius();
        if (!e.enable) return !1;
        const o = e.overlap;
        if (o.enable) return !1;
        const n = o.retries;
        if (n >= 0 && i > n)
          throw new Error("Particle is overlapping and can't be placed");
        let a = !1;
        for (const i of this.container.particles.array)
          if (m(t, i.position) < s + i.getRadius()) {
            a = !0;
            break;
          }
        return a;
      }
      _getRollColor(t) {
        var i;
        if (!t || !this.roll || (!this.backColor && !this.roll.alter)) return t;
        const e = this.roll.horizontal && this.roll.vertical ? 2 : 1,
          s = this.roll.horizontal ? Math.PI / 2 : 0;
        return Math.floor(
          ((null !== (i = this.roll.angle) && void 0 !== i ? i : 0) + s) /
            (Math.PI / e)
        ) % 2
          ? this.backColor
            ? this.backColor
            : this.roll.alter
            ? (function (t, i, e) {
                return {
                  h: t.h,
                  s: t.s,
                  l: t.l + ("darken" === i ? -1 : 1) * e,
                };
              })(t, this.roll.alter.type, this.roll.alter.value)
            : t
          : t;
      }
      _loadShapeData(t, i) {
        const e = t.options[this.shape];
        if (e) return C({}, O(e, this.id, i));
      }
    }
    class ai {
      constructor(t, i) {
        (this.position = t), (this.particle = i);
      }
    }
    class ri {
      constructor(t, i) {
        this.position = { x: t, y: i };
      }
    }
    class li extends ri {
      constructor(t, i, e) {
        super(t, i), (this.radius = e);
      }
      contains(t) {
        return m(t, this.position) <= this.radius;
      }
      intersects(t) {
        const i = t,
          e = t,
          s = this.position,
          o = t.position,
          n = Math.abs(o.x - s.x),
          a = Math.abs(o.y - s.y),
          r = this.radius;
        if (void 0 !== e.radius) {
          return r + e.radius > Math.sqrt(n ** 2 + a ** 2);
        }
        if (void 0 !== i.size) {
          const t = i.size.width,
            e = i.size.height;
          return (
            Math.pow(n - t, 2) + Math.pow(a - e, 2) <= r ** 2 ||
            (n <= r + t && a <= r + e) ||
            n <= t ||
            a <= e
          );
        }
        return !1;
      }
    }
    class hi extends ri {
      constructor(t, i, e, s) {
        super(t, i), (this.size = { height: s, width: e });
      }
      contains(t) {
        const i = this.size.width,
          e = this.size.height,
          s = this.position;
        return t.x >= s.x && t.x <= s.x + i && t.y >= s.y && t.y <= s.y + e;
      }
      intersects(t) {
        t instanceof li && t.intersects(this);
        const i = this.size.width,
          e = this.size.height,
          s = this.position,
          o = t.position,
          n = t instanceof hi ? t.size : { width: 0, height: 0 },
          a = n.width,
          r = n.height;
        return o.x < s.x + i && o.x + a > s.x && o.y < s.y + e && o.y + r > s.y;
      }
    }
    class ci {
      constructor(t, i) {
        (this.rectangle = t),
          (this.capacity = i),
          (this._points = []),
          (this._divided = !1);
      }
      insert(t) {
        var i, e, s, o, n;
        return (
          !!this.rectangle.contains(t.position) &&
          (this._points.length < this.capacity
            ? (this._points.push(t), !0)
            : (this._divided || this.subdivide(),
              null !==
                (n =
                  (null === (i = this._NE) || void 0 === i
                    ? void 0
                    : i.insert(t)) ||
                  (null === (e = this._NW) || void 0 === e
                    ? void 0
                    : e.insert(t)) ||
                  (null === (s = this._SE) || void 0 === s
                    ? void 0
                    : s.insert(t)) ||
                  (null === (o = this._SW) || void 0 === o
                    ? void 0
                    : o.insert(t))) &&
                void 0 !== n &&
                n))
        );
      }
      query(t, i, e) {
        var s, o, n, a;
        const r = null != e ? e : [];
        if (!t.intersects(this.rectangle)) return [];
        for (const e of this._points)
          (!t.contains(e.position) &&
            m(t.position, e.position) > e.particle.getRadius() &&
            (!i || i(e.particle))) ||
            r.push(e.particle);
        return (
          this._divided &&
            (null === (s = this._NE) || void 0 === s || s.query(t, i, r),
            null === (o = this._NW) || void 0 === o || o.query(t, i, r),
            null === (n = this._SE) || void 0 === n || n.query(t, i, r),
            null === (a = this._SW) || void 0 === a || a.query(t, i, r)),
          r
        );
      }
      queryCircle(t, i, e) {
        return this.query(new li(t.x, t.y, i), e);
      }
      queryRectangle(t, i, e) {
        return this.query(new hi(t.x, t.y, i.width, i.height), e);
      }
      subdivide() {
        const t = this.rectangle.position.x,
          i = this.rectangle.position.y,
          e = this.rectangle.size.width,
          s = this.rectangle.size.height,
          o = this.capacity;
        (this._NE = new ci(new hi(t, i, e / 2, s / 2), o)),
          (this._NW = new ci(new hi(t + e / 2, i, e / 2, s / 2), o)),
          (this._SE = new ci(new hi(t, i + s / 2, e / 2, s / 2), o)),
          (this._SW = new ci(new hi(t + e / 2, i + s / 2, e / 2, s / 2), o)),
          (this._divided = !0);
      }
    }
    class di {
      constructor(t, i) {
        (this.container = i),
          (this._engine = t),
          (this.nextId = 0),
          (this.array = []),
          (this.zArray = []),
          (this.pool = []),
          (this.limit = 0),
          (this.needsSort = !1),
          (this.lastZIndex = 0),
          (this.interactionManager = new si(this._engine, i));
        const e = this.container.canvas.size;
        (this.quadTree = new ci(
          new hi(
            -e.width / 4,
            -e.height / 4,
            (3 * e.width) / 2,
            (3 * e.height) / 2
          ),
          4
        )),
          (this.movers = this._engine.plugins.getMovers(i, !0)),
          (this.updaters = this._engine.plugins.getUpdaters(i, !0));
      }
      get count() {
        return this.array.length;
      }
      addManualParticles() {
        const t = this.container,
          i = t.actualOptions;
        for (const s of i.manualParticles)
          this.addParticle(
            (e = { size: t.canvas.size, position: s.position }).position &&
              void 0 !== e.position.x &&
              void 0 !== e.position.y
              ? {
                  x: (e.position.x * e.size.width) / 100,
                  y: (e.position.y * e.size.height) / 100,
                }
              : void 0,
            s.options
          );
        var e;
      }
      addParticle(t, i, e, s) {
        const o = this.container.actualOptions.particles.number.limit;
        if (o > 0) {
          const t = this.count + 1 - o;
          t > 0 && this.removeQuantity(t);
        }
        return this._pushParticle(t, i, e, s);
      }
      clear() {
        (this.array = []), (this.zArray = []);
      }
      destroy() {
        (this.array = []),
          (this.zArray = []),
          (this.movers = []),
          (this.updaters = []);
      }
      async draw(t) {
        const i = this.container,
          e = this.container.canvas.size;
        (this.quadTree = new ci(
          new hi(
            -e.width / 4,
            -e.height / 4,
            (3 * e.width) / 2,
            (3 * e.height) / 2
          ),
          4
        )),
          i.canvas.clear(),
          await this.update(t),
          this.needsSort &&
            (this.zArray.sort(
              (t, i) => i.position.z - t.position.z || t.id - i.id
            ),
            (this.lastZIndex = this.zArray[this.zArray.length - 1].position.z),
            (this.needsSort = !1));
        for (const [, e] of i.plugins) i.canvas.drawPlugin(e, t);
        for (const i of this.zArray) i.draw(t);
      }
      handleClickMode(t) {
        this.interactionManager.handleClickMode(t);
      }
      init() {
        var t;
        const i = this.container,
          e = i.actualOptions;
        (this.lastZIndex = 0), (this.needsSort = !1);
        let s = !1;
        (this.updaters = this._engine.plugins.getUpdaters(i, !0)),
          this.interactionManager.init();
        for (const [, t] of i.plugins)
          if (
            (void 0 !== t.particlesInitialization &&
              (s = t.particlesInitialization()),
            s)
          )
            break;
        this.interactionManager.init();
        for (const [, t] of i.pathGenerators) t.init(i);
        if ((this.addManualParticles(), !s)) {
          for (const i in e.particles.groups) {
            const s = e.particles.groups[i];
            for (
              let o = this.count, n = 0;
              n <
                (null === (t = s.number) || void 0 === t ? void 0 : t.value) &&
              o < e.particles.number.value;
              o++, n++
            )
              this.addParticle(void 0, s, i);
          }
          for (let t = this.count; t < e.particles.number.value; t++)
            this.addParticle();
        }
      }
      push(t, i, e, s) {
        this.pushing = !0;
        for (let o = 0; o < t; o++)
          this.addParticle(null == i ? void 0 : i.position, e, s);
        this.pushing = !1;
      }
      async redraw() {
        this.clear(), this.init(), await this.draw({ value: 0, factor: 0 });
      }
      remove(t, i, e) {
        this.removeAt(this.array.indexOf(t), void 0, i, e);
      }
      removeAt(t, i = 1, e, s) {
        if (t < 0 || t > this.count) return;
        let o = 0;
        for (let n = t; o < i && n < this.count; n++) {
          const t = this.array[n];
          if (!t || t.group !== e) continue;
          t.destroy(s), this.array.splice(n--, 1);
          const i = this.zArray.indexOf(t);
          this.zArray.splice(i, 1),
            this.pool.push(t),
            o++,
            this._engine.dispatchEvent("particleRemoved", {
              container: this.container,
              data: { particle: t },
            });
        }
      }
      removeQuantity(t, i) {
        this.removeAt(0, t, i);
      }
      setDensity() {
        const t = this.container.actualOptions;
        for (const i in t.particles.groups)
          this._applyDensity(t.particles.groups[i], 0, i);
        this._applyDensity(t.particles, t.manualParticles.length);
      }
      async update(t) {
        var i, e;
        const s = this.container,
          o = [];
        for (const [, t] of s.pathGenerators) t.update();
        for (const [, e] of s.plugins)
          null === (i = e.update) || void 0 === i || i.call(e, t);
        for (const i of this.array) {
          const n = s.canvas.resizeFactor;
          n &&
            !i.ignoresResizeRatio &&
            ((i.position.x *= n.width),
            (i.position.y *= n.height),
            (i.initialPosition.x *= n.width),
            (i.initialPosition.y *= n.height)),
            (i.ignoresResizeRatio = !1),
            await this.interactionManager.reset(i);
          for (const [, s] of this.container.plugins) {
            if (i.destroyed) break;
            null === (e = s.particleUpdate) || void 0 === e || e.call(s, i, t);
          }
          for (const e of this.movers) e.isEnabled(i) && e.move(i, t);
          i.destroyed
            ? o.push(i)
            : this.quadTree.insert(new ai(i.getPosition(), i));
        }
        for (const t of o) this.remove(t);
        await this.interactionManager.externalInteract(t);
        for (const i of this.array) {
          for (const e of this.updaters) e.update(i, t);
          i.destroyed ||
            i.spawning ||
            (await this.interactionManager.particlesInteract(i, t));
        }
        delete s.canvas.resizeFactor;
      }
      _applyDensity(t, i, e) {
        var s;
        if (
          !(null === (s = t.number.density) || void 0 === s ? void 0 : s.enable)
        )
          return;
        const o = t.number,
          n = this._initDensityFactor(o.density),
          a = o.value,
          r = o.limit > 0 ? o.limit : a,
          l = Math.min(a, r) * n + i,
          h = Math.min(
            this.count,
            this.array.filter((t) => t.group === e).length
          );
        (this.limit = o.limit * n),
          h < l
            ? this.push(Math.abs(l - h), void 0, t, e)
            : h > l && this.removeQuantity(h - l, e);
      }
      _initDensityFactor(t) {
        const i = this.container;
        if (!i.canvas.element || !t.enable) return 1;
        const e = i.canvas.element,
          s = i.retina.pixelRatio;
        return (e.width * e.height) / (t.factor * s ** 2 * t.area);
      }
      _pushParticle(t, i, e, s) {
        try {
          let o = this.pool.pop();
          o
            ? o.init(this.nextId, t, i, e)
            : (o = new ni(this._engine, this.nextId, this.container, t, i, e));
          let n = !0;
          if ((s && (n = s(o)), !n)) return;
          return (
            this.array.push(o),
            this.zArray.push(o),
            this.nextId++,
            this._engine.dispatchEvent("particleAdded", {
              container: this.container,
              data: { particle: o },
            }),
            o
          );
        } catch (t) {
          return void console.warn(`error adding particle: ${t}`);
        }
      }
    }
    class ui {
      constructor(t) {
        this.container = t;
      }
      init() {
        const t = this.container,
          i = t.actualOptions;
        (this.pixelRatio =
          !i.detectRetina || w() ? 1 : window.devicePixelRatio),
          (this.reduceFactor = 1);
        const e = this.pixelRatio;
        if (t.canvas.element) {
          const i = t.canvas.element;
          (t.canvas.size.width = i.offsetWidth * e),
            (t.canvas.size.height = i.offsetHeight * e);
        }
        const s = i.particles;
        (this.attractDistance = h(s.move.attract.distance) * e),
          (this.sizeAnimationSpeed = h(s.size.animation.speed) * e),
          (this.maxSpeed = h(s.move.gravity.maxSpeed) * e);
      }
      initParticle(t) {
        const i = t.options,
          e = this.pixelRatio,
          s = i.move.distance,
          o = t.retina;
        (o.attractDistance = h(i.move.attract.distance) * e),
          (o.moveDrift = h(i.move.drift) * e),
          (o.moveSpeed = h(i.move.speed) * e),
          (o.sizeAnimationSpeed = h(i.size.animation.speed) * e);
        const n = o.maxDistance;
        (n.horizontal = void 0 !== s.horizontal ? s.horizontal * e : void 0),
          (n.vertical = void 0 !== s.vertical ? s.vertical * e : void 0),
          (o.maxSpeed = h(i.move.gravity.maxSpeed) * e);
      }
    }
    function pi(t) {
      return t && !t.destroyed;
    }
    function vi(t, i, ...e) {
      const s = new ei(t, i);
      return ti(s, ...e), s;
    }
    const mi = {
      generate: (t) => {
        const i = t.velocity.copy();
        return (i.angle += (i.length * Math.PI) / 180), i;
      },
      init: () => {},
      update: () => {},
      reset: () => {},
    };
    class fi {
      constructor(t, i, e) {
        (this.id = i),
          (this._engine = t),
          (this.fpsLimit = 120),
          (this.smooth = !1),
          (this._delay = 0),
          (this.duration = 0),
          (this.lifeTime = 0),
          (this._firstStart = !0),
          (this.started = !1),
          (this.destroyed = !1),
          (this._paused = !0),
          (this.lastFrameTime = 0),
          (this.zLayers = 100),
          (this.pageHidden = !1),
          (this._sourceOptions = e),
          (this._initialSourceOptions = e),
          (this.retina = new ui(this)),
          (this.canvas = new J(this)),
          (this.particles = new di(this._engine, this)),
          (this.frameManager = new K(this)),
          (this.pathGenerators = new Map()),
          (this.interactivity = { mouse: { clicking: !1, inside: !1 } }),
          (this.plugins = new Map()),
          (this.drawers = new Map()),
          (this._options = vi(this._engine, this)),
          (this.actualOptions = vi(this._engine, this)),
          (this._eventListeners = new Q(this)),
          "undefined" != typeof IntersectionObserver &&
            IntersectionObserver &&
            (this._intersectionObserver = new IntersectionObserver((t) =>
              this._intersectionManager(t)
            )),
          this._engine.dispatchEvent("containerBuilt", { container: this });
      }
      get options() {
        return this._options;
      }
      get sourceOptions() {
        return this._sourceOptions;
      }
      addClickHandler(t) {
        if (!pi(this)) return;
        const i = this.interactivity.element;
        if (!i) return;
        const e = (i, e, s) => {
          if (!pi(this)) return;
          const o = this.retina.pixelRatio,
            n = { x: e.x * o, y: e.y * o },
            a = this.particles.quadTree.queryCircle(n, s * o);
          t(i, a);
        };
        let s = !1,
          o = !1;
        i.addEventListener("click", (t) => {
          if (!pi(this)) return;
          const i = t,
            s = { x: i.offsetX || i.clientX, y: i.offsetY || i.clientY };
          e(t, s, 1);
        }),
          i.addEventListener("touchstart", () => {
            pi(this) && ((s = !0), (o = !1));
          }),
          i.addEventListener("touchmove", () => {
            pi(this) && (o = !0);
          }),
          i.addEventListener("touchend", (t) => {
            if (pi(this)) {
              if (s && !o) {
                const i = t;
                let s = i.touches[i.touches.length - 1];
                if (
                  !s &&
                  ((s = i.changedTouches[i.changedTouches.length - 1]), !s)
                )
                  return;
                const o = this.canvas.element,
                  n = o ? o.getBoundingClientRect() : void 0,
                  a = {
                    x: s.clientX - (n ? n.left : 0),
                    y: s.clientY - (n ? n.top : 0),
                  };
                e(t, a, Math.max(s.radiusX, s.radiusY));
              }
              (s = !1), (o = !1);
            }
          }),
          i.addEventListener("touchcancel", () => {
            pi(this) && ((s = !1), (o = !1));
          });
      }
      addPath(t, i, e = !1) {
        return (
          !(!pi(this) || (!e && this.pathGenerators.has(t))) &&
          (this.pathGenerators.set(t, null != i ? i : mi), !0)
        );
      }
      destroy() {
        if (!pi(this)) return;
        this.stop(), this.particles.destroy(), this.canvas.destroy();
        for (const [, t] of this.drawers) t.destroy && t.destroy(this);
        for (const t of this.drawers.keys()) this.drawers.delete(t);
        this._engine.plugins.destroy(this), (this.destroyed = !0);
        const t = this._engine.dom(),
          i = t.findIndex((t) => t === this);
        i >= 0 && t.splice(i, 1),
          this._engine.dispatchEvent("containerDestroyed", { container: this });
      }
      draw(t) {
        if (!pi(this)) return;
        let i = t;
        this._drawAnimationFrame = (
          w()
            ? (t) => setTimeout(t)
            : (t) => (requestAnimationFrame || setTimeout)(t)
        )(async (t) => {
          i && ((this.lastFrameTime = void 0), (i = !1)),
            await this.frameManager.nextFrame(t);
        });
      }
      exportConfiguration() {
        return JSON.stringify(
          this.actualOptions,
          (t, i) => {
            if ("_engine" !== t && "_container" !== t) return i;
          },
          2
        );
      }
      exportImage(t, i, e) {
        const s = this.canvas.element;
        s && s.toBlob(t, null != i ? i : "image/png", e);
      }
      exportImg(t) {
        this.exportImage(t);
      }
      getAnimationStatus() {
        return !this._paused && !this.pageHidden && pi(this);
      }
      handleClickMode(t) {
        if (pi(this)) {
          this.particles.handleClickMode(t);
          for (const [, i] of this.plugins)
            i.handleClickMode && i.handleClickMode(t);
        }
      }
      async init() {
        if (!pi(this)) return;
        const t = this._engine.plugins.getSupportedShapes();
        for (const i of t) {
          const t = this._engine.plugins.getShapeDrawer(i);
          t && this.drawers.set(i, t);
        }
        (this._options = vi(
          this._engine,
          this,
          this._initialSourceOptions,
          this.sourceOptions
        )),
          (this.actualOptions = vi(this._engine, this, this._options));
        const i = this._engine.plugins.getAvailablePlugins(this);
        for (const [t, e] of i) this.plugins.set(t, e);
        this.retina.init(),
          this.canvas.init(),
          this.updateActualOptions(),
          this.canvas.initBackground(),
          this.canvas.resize(),
          (this.zLayers = this.actualOptions.zLayers),
          (this.duration = 1e3 * h(this.actualOptions.duration)),
          (this._delay = 1e3 * h(this.actualOptions.delay)),
          (this.lifeTime = 0),
          (this.fpsLimit =
            this.actualOptions.fpsLimit > 0
              ? this.actualOptions.fpsLimit
              : 120),
          (this.smooth = this.actualOptions.smooth);
        for (const [, t] of this.drawers) t.init && (await t.init(this));
        for (const [, t] of this.plugins) t.init && (await t.init());
        this._engine.dispatchEvent("containerInit", { container: this }),
          this.particles.init(),
          this.particles.setDensity();
        for (const [, t] of this.plugins)
          t.particlesSetup && t.particlesSetup();
        this._engine.dispatchEvent("particlesSetup", { container: this });
      }
      async loadTheme(t) {
        pi(this) && ((this._currentTheme = t), await this.refresh());
      }
      pause() {
        if (
          pi(this) &&
          (void 0 !== this._drawAnimationFrame &&
            ((w()
              ? (t) => clearTimeout(t)
              : (t) => (cancelAnimationFrame || clearTimeout)(t))(
              this._drawAnimationFrame
            ),
            delete this._drawAnimationFrame),
          !this._paused)
        ) {
          for (const [, t] of this.plugins) t.pause && t.pause();
          this.pageHidden || (this._paused = !0),
            this._engine.dispatchEvent("containerPaused", { container: this });
        }
      }
      play(t) {
        if (!pi(this)) return;
        const i = this._paused || t;
        if (!this._firstStart || this.actualOptions.autoPlay) {
          if ((this._paused && (this._paused = !1), i))
            for (const [, t] of this.plugins) t.play && t.play();
          this._engine.dispatchEvent("containerPlay", { container: this }),
            this.draw(i || !1);
        } else this._firstStart = !1;
      }
      async refresh() {
        if (pi(this)) return this.stop(), this.start();
      }
      async reset() {
        if (pi(this))
          return (this._options = vi(this._engine, this)), this.refresh();
      }
      setNoise(t, i, e) {
        pi(this) && this.setPath(t, i, e);
      }
      setPath(t, i, e) {
        if (!t || !pi(this)) return;
        const s = Object.assign({}, mi);
        if ("function" == typeof t)
          (s.generate = t), i && (s.init = i), e && (s.update = e);
        else {
          const i = s;
          (s.generate = t.generate || i.generate),
            (s.init = t.init || i.init),
            (s.update = t.update || i.update);
        }
        this.addPath("default", s, !0);
      }
      async start() {
        pi(this) &&
          !this.started &&
          (await this.init(),
          (this.started = !0),
          await new Promise((t) => {
            this._delayTimeout = setTimeout(async () => {
              this._eventListeners.addListeners(),
                this.interactivity.element instanceof HTMLElement &&
                  this._intersectionObserver &&
                  this._intersectionObserver.observe(
                    this.interactivity.element
                  );
              for (const [, t] of this.plugins) t.start && (await t.start());
              this._engine.dispatchEvent("containerStarted", {
                container: this,
              }),
                this.play(),
                t();
            }, this._delay);
          }));
      }
      stop() {
        if (pi(this) && this.started) {
          this._delayTimeout &&
            (clearTimeout(this._delayTimeout), delete this._delayTimeout),
            (this._firstStart = !0),
            (this.started = !1),
            this._eventListeners.removeListeners(),
            this.pause(),
            this.particles.clear(),
            this.canvas.clear(),
            this.interactivity.element instanceof HTMLElement &&
              this._intersectionObserver &&
              this._intersectionObserver.unobserve(this.interactivity.element);
          for (const [, t] of this.plugins) t.stop && t.stop();
          for (const t of this.plugins.keys()) this.plugins.delete(t);
          (this._sourceOptions = this._options),
            this._engine.dispatchEvent("containerStopped", { container: this });
        }
      }
      updateActualOptions() {
        this.actualOptions.responsive = [];
        const t = this.actualOptions.setResponsive(
          this.canvas.size.width,
          this.retina.pixelRatio,
          this._options
        );
        return (
          this.actualOptions.setTheme(this._currentTheme),
          this.responsiveMaxWidth !== t && ((this.responsiveMaxWidth = t), !0)
        );
      }
      _intersectionManager(t) {
        if (pi(this) && this.actualOptions.pauseOnOutsideViewport)
          for (const i of t)
            i.target === this.interactivity.element &&
              (i.isIntersecting ? this.play : this.pause)();
      }
    }
    class yi {
      constructor(t) {
        this._engine = t;
      }
      load(t, i, e) {
        const s = { index: e, remote: !1 };
        return (
          "string" == typeof t ? (s.tagId = t) : (s.options = t),
          "number" == typeof i
            ? (s.index = i)
            : (s.options = null != i ? i : s.options),
          this.loadOptions(s)
        );
      }
      async loadJSON(t, i, e) {
        let s, o;
        return (
          "number" == typeof i || void 0 === i ? (s = t) : ((o = t), (s = i)),
          this.loadRemoteOptions({ tagId: o, url: s, index: e, remote: !0 })
        );
      }
      async loadOptions(t) {
        var i, e, s;
        const o =
            null !== (i = t.tagId) && void 0 !== i
              ? i
              : `Testball${Math.floor(1e3 * a())}`,
          { index: n, url: r, remote: l } = t,
          h = l
            ? await (async function (t, i) {
                const e = O(t, i);
                if (!e) return;
                const s = await fetch(e);
                if (s.ok) return s.json();
                console.error(`Testball - ????????????????????? ${s.status} ?????????`);
              })(r, n)
            : t.options;
        let c =
          null !== (e = t.element) && void 0 !== e
            ? e
            : document.getElementById(o);
        c ||
          ((c = document.createElement("div")),
          (c.id = o),
          null === (s = document.querySelector("body")) ||
            void 0 === s ||
            s.append(c));
        const d = O(h, n),
          u = this._engine.dom(),
          p = u.findIndex((t) => t.id === o);
        if (p >= 0) {
          const t = this._engine.domItem(p);
          t && !t.destroyed && (t.destroy(), u.splice(p, 1));
        }
        let v;
        if ("canvas" === c.tagName.toLowerCase())
          (v = c), (v.dataset[G] = "false");
        else {
          const t = c.getElementsByTagName("canvas");
          t.length
            ? ((v = t[0]), (v.dataset[G] = "false"))
            : ((v = document.createElement("canvas")),
              (v.dataset[G] = "true"),
              c.appendChild(v));
        }
        v.style.width || (v.style.width = "100%"),
          v.style.height || (v.style.height = "100%");
        const m = new fi(this._engine, o, d);
        return (
          p >= 0 ? u.splice(p, 0, m) : u.push(m),
          m.canvas.loadCanvas(v),
          await m.start(),
          m
        );
      }
      async loadRemoteOptions(t) {
        return this.loadOptions(t);
      }
      async set(t, i, e, s) {
        const o = { index: s, remote: !1 };
        return (
          "string" == typeof t ? (o.tagId = t) : (o.element = t),
          i instanceof HTMLElement ? (o.element = i) : (o.options = i),
          "number" == typeof e
            ? (o.index = e)
            : (o.options = null != e ? e : o.options),
          this.loadOptions(o)
        );
      }
      async setJSON(t, i, e, s) {
        let o, n, a, r;
        return (
          t instanceof HTMLElement
            ? ((r = t), (o = i), (a = e))
            : ((n = t), (r = i), (o = e), (a = s)),
          this.loadRemoteOptions({
            tagId: n,
            url: o,
            index: a,
            element: r,
            remote: !0,
          })
        );
      }
    }
    function gi(t, i, e, s = !1) {
      let o = i.get(t);
      return (
        (o && !s) || ((o = [...e.values()].map((i) => i(t))), i.set(t, o)), o
      );
    }
    class wi {
      constructor(t) {
        (this._engine = t),
          (this.plugins = []),
          (this._initializers = {
            interactors: new Map(),
            movers: new Map(),
            updaters: new Map(),
          }),
          (this.interactors = new Map()),
          (this.movers = new Map()),
          (this.updaters = new Map()),
          (this.presets = new Map()),
          (this.drawers = new Map()),
          (this.pathGenerators = new Map());
      }
      addInteractor(t, i) {
        this._initializers.interactors.set(t, i);
      }
      addParticleMover(t, i) {
        this._initializers.movers.set(t, i);
      }
      addParticleUpdater(t, i) {
        this._initializers.updaters.set(t, i);
      }
      addPathGenerator(t, i) {
        this.getPathGenerator(t) || this.pathGenerators.set(t, i);
      }
      addPlugin(t) {
        this.getPlugin(t.id) || this.plugins.push(t);
      }
      addPreset(t, i, e = !1) {
        (!e && this.getPreset(t)) || this.presets.set(t, i);
      }
      addShapeDrawer(t, i) {
        S(t, (t) => {
          this.getShapeDrawer(t) || this.drawers.set(t, i);
        });
      }
      destroy(t) {
        this.updaters.delete(t),
          this.movers.delete(t),
          this.interactors.delete(t);
      }
      getAvailablePlugins(t) {
        const i = new Map();
        for (const e of this.plugins)
          e.needsPlugin(t.actualOptions) && i.set(e.id, e.getPlugin(t));
        return i;
      }
      getInteractors(t, i = !1) {
        return gi(t, this.interactors, this._initializers.interactors, i);
      }
      getMovers(t, i = !1) {
        return gi(t, this.movers, this._initializers.movers, i);
      }
      getPathGenerator(t) {
        return this.pathGenerators.get(t);
      }
      getPlugin(t) {
        return this.plugins.find((i) => i.id === t);
      }
      getPreset(t) {
        return this.presets.get(t);
      }
      getShapeDrawer(t) {
        return this.drawers.get(t);
      }
      getSupportedShapes() {
        return this.drawers.keys();
      }
      getUpdaters(t, i = !1) {
        return gi(t, this.updaters, this._initializers.updaters, i);
      }
      loadOptions(t, i) {
        for (const e of this.plugins) e.loadOptions(t, i);
      }
      loadParticlesOptions(t, i, ...e) {
        const s = this.updaters.get(t);
        if (s) for (const t of s) t.loadOptions && t.loadOptions(i, ...e);
      }
    }
    const bi = new (class {
        constructor() {
          (this.key = "rgb"), (this.stringPrefix = "rgb");
        }
        handleColor(t) {
          var i;
          const e = null !== (i = t.value.rgb) && void 0 !== i ? i : t.value;
          if (void 0 !== e.r) return e;
        }
        handleRangeColor(t) {
          var i;
          const e = null !== (i = t.value.rgb) && void 0 !== i ? i : t.value;
          if (void 0 !== e.r) return { r: h(e.r), g: h(e.g), b: h(e.b) };
        }
        parseString(t) {
          if (!t.startsWith(this.stringPrefix)) return;
          const i =
            /rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(,\s*([\d.%]+)\s*)?\)/i.exec(
              t
            );
          return i
            ? {
                a: i.length > 4 ? g(i[5]) : 1,
                b: parseInt(i[3], 10),
                g: parseInt(i[2], 10),
                r: parseInt(i[1], 10),
              }
            : void 0;
        }
      })(),
      xi = new (class {
        constructor() {
          (this.key = "hsl"), (this.stringPrefix = "hsl");
        }
        handleColor(t) {
          var i;
          const e = null !== (i = t.value.hsl) && void 0 !== i ? i : t.value;
          if (void 0 !== e.h && void 0 !== e.s && void 0 !== e.l) return V(e);
        }
        handleRangeColor(t) {
          var i;
          const e = null !== (i = t.value.hsl) && void 0 !== i ? i : t.value;
          if (void 0 !== e.h && void 0 !== e.l)
            return V({ h: h(e.h), l: h(e.l), s: h(e.s) });
        }
        parseString(t) {
          if (!t.startsWith("hsl")) return;
          const i =
            /hsla?\(\s*(\d+)\s*,\s*(\d+)%\s*,\s*(\d+)%\s*(,\s*([\d.%]+)\s*)?\)/i.exec(
              t
            );
          return i
            ? (function (t) {
                const i = V(t);
                return { a: t.a, b: i.b, g: i.g, r: i.r };
              })({
                a: i.length > 4 ? g(i[5]) : 1,
                h: parseInt(i[1], 10),
                l: parseInt(i[3], 10),
                s: parseInt(i[2], 10),
              })
            : void 0;
        }
      })();
    I(bi), I(xi);
    const _i = new (class {
      constructor() {
        (this._domArray = []),
          (this._eventDispatcher = new e()),
          (this._initialized = !1),
          (this._loader = new yi(this)),
          (this.plugins = new wi(this));
      }
      addEventListener(t, i) {
        this._eventDispatcher.addEventListener(t, i);
      }
      async addInteractor(t, i) {
        this.plugins.addInteractor(t, i), await this.refresh();
      }
      async addMover(t, i) {
        this.plugins.addParticleMover(t, i), await this.refresh();
      }
      async addParticleUpdater(t, i) {
        this.plugins.addParticleUpdater(t, i), await this.refresh();
      }
      async addPathGenerator(t, i) {
        this.plugins.addPathGenerator(t, i), await this.refresh();
      }
      async addPlugin(t) {
        this.plugins.addPlugin(t), await this.refresh();
      }
      async addPreset(t, i, e = !1) {
        this.plugins.addPreset(t, i, e), await this.refresh();
      }
      async addShape(t, i, e, s, o) {
        let n;
        (n =
          "function" == typeof i
            ? { afterEffect: s, destroy: o, draw: i, init: e }
            : i),
          this.plugins.addShapeDrawer(t, n),
          await this.refresh();
      }
      dispatchEvent(t, i) {
        this._eventDispatcher.dispatchEvent(t, i);
      }
      dom() {
        return this._domArray;
      }
      domItem(t) {
        const i = this.dom(),
          e = i[t];
        if (e && !e.destroyed) return e;
        i.splice(t, 1);
      }
      init() {
        this._initialized || (this._initialized = !0);
      }
      async load(t, i) {
        return this._loader.load(t, i);
      }
      async loadFromArray(t, i, e) {
        return this._loader.load(t, i, e);
      }
      async loadJSON(t, i, e) {
        return this._loader.loadJSON(t, i, e);
      }
      async refresh() {
        for (const t of this.dom()) await t.refresh();
      }
      removeEventListener(t, i) {
        this._eventDispatcher.removeEventListener(t, i);
      }
      async set(t, i, e) {
        return this._loader.set(t, i, e);
      }
      async setJSON(t, i, e, s) {
        return this._loader.setJSON(t, i, e, s);
      }
      setOnClickHandler(t) {
        const i = this.dom();
        if (!i.length)
          throw new Error(
            "??????????????? Testball.load() ??? Testball.loadJSON() ???????????????????????????"
          );
        for (const e of i) e.addClickHandler(t);
      }
    })();
    _i.init();
    class zi {
      init(t) {
        var i;
        const e = t.container,
          s = t.options,
          o = s.move.gravity,
          n = s.move.spin;
        if (
          ((t.gravity = {
            enable: o.enable,
            acceleration: h(o.acceleration),
            inverse: o.inverse,
          }),
          n.enable)
        ) {
          const s =
              null !== (i = n.position) && void 0 !== i ? i : { x: 50, y: 50 },
            o = {
              x: (s.x / 100) * e.canvas.size.width,
              y: (s.y / 100) * e.canvas.size.height,
            },
            a = m(t.getPosition(), o),
            r = h(n.acceleration);
          (t.retina.spinAcceleration = r * e.retina.pixelRatio),
            (t.spin = {
              center: o,
              direction: t.velocity.x >= 0 ? "clockwise" : "counter-clockwise",
              angle: t.velocity.angle,
              radius: a,
              acceleration: t.retina.spinAcceleration,
            });
        }
      }
      isEnabled(t) {
        return !t.destroyed && t.options.move.enable;
      }
      move(t, i) {
        var e, s, o, n, l;
        const c = t.options,
          u = c.move;
        if (!u.enable) return;
        const p = t.container,
          m = (function (t) {
            return t.slow.inRange ? t.slow.factor : 1;
          })(t),
          f =
            (null !== (e = (n = t.retina).moveSpeed) && void 0 !== e
              ? e
              : (n.moveSpeed = h(u.speed) * p.retina.pixelRatio)) *
            p.retina.reduceFactor,
          y =
            null !== (s = (l = t.retina).moveDrift) && void 0 !== s
              ? s
              : (l.moveDrift = h(t.options.move.drift) * p.retina.pixelRatio),
          g = d(c.size.value) * p.retina.pixelRatio,
          w =
            (f * ((u.size ? t.getRadius() / g : 1) * m * (i.factor || 1))) / 2;
        if (u.spin.enable)
          !(function (t, i) {
            const e = t.container;
            if (!t.spin) return;
            const s = {
              x: "clockwise" === t.spin.direction ? Math.cos : Math.sin,
              y: "clockwise" === t.spin.direction ? Math.sin : Math.cos,
            };
            (t.position.x =
              t.spin.center.x + t.spin.radius * s.x(t.spin.angle)),
              (t.position.y =
                t.spin.center.y + t.spin.radius * s.y(t.spin.angle)),
              (t.spin.radius += t.spin.acceleration);
            const o = Math.max(e.canvas.size.width, e.canvas.size.height);
            t.spin.radius > o / 2
              ? ((t.spin.radius = o / 2), (t.spin.acceleration *= -1))
              : t.spin.radius < 0 &&
                ((t.spin.radius = 0), (t.spin.acceleration *= -1)),
              (t.spin.angle += (i / 100) * (1 - t.spin.radius / o));
          })(t, w);
        else {
          !(function (t, i) {
            var e;
            const s = t.options.move.path;
            if (!s.enable) return;
            if (t.lastPathTime <= t.pathDelay)
              return void (t.lastPathTime += i.value);
            const o =
              null === (e = t.pathGenerator) || void 0 === e
                ? void 0
                : e.generate(t);
            o && t.velocity.addTo(o),
              s.clamp &&
                ((t.velocity.x = r(t.velocity.x, -1, 1)),
                (t.velocity.y = r(t.velocity.y, -1, 1))),
              (t.lastPathTime -= t.pathDelay);
          })(t, i);
          const e = t.gravity,
            s = (null == e ? void 0 : e.enable) && e.inverse ? -1 : 1;
          (null == e ? void 0 : e.enable) &&
            w &&
            (t.velocity.y += (s * (e.acceleration * i.factor)) / (60 * w)),
            y && w && (t.velocity.x += (y * i.factor) / (60 * w));
          const n = t.moveDecay;
          1 != n && t.velocity.multTo(n);
          const a = t.velocity.mult(w),
            l =
              null !== (o = t.retina.maxSpeed) && void 0 !== o
                ? o
                : p.retina.maxSpeed;
          (null == e ? void 0 : e.enable) &&
            l > 0 &&
            ((!e.inverse && a.y >= 0 && a.y >= l) ||
              (e.inverse && a.y <= 0 && a.y <= -l)) &&
            ((a.y = s * l), w && (t.velocity.y = a.y / w));
          const h = t.options.zIndex,
            c = (1 - t.zIndexFactor) ** h.velocityRate;
          1 != c && a.multTo(c),
            t.position.addTo(a),
            u.vibrate &&
              ((t.position.x += Math.sin(
                t.position.x * Math.cos(t.position.y)
              )),
              (t.position.y += Math.cos(
                t.position.y * Math.sin(t.position.x)
              )));
        }
        !(function (t) {
          const i = t.initialPosition,
            { dx: e, dy: s } = v(i, t.position),
            o = Math.abs(e),
            n = Math.abs(s),
            r = t.retina.maxDistance.horizontal,
            l = t.retina.maxDistance.vertical;
          if (r || l)
            if (((r && o >= r) || (l && n >= l)) && !t.misplaced)
              (t.misplaced = (!!r && o > r) || (!!l && n > l)),
                r && (t.velocity.x = t.velocity.y / 2 - t.velocity.x),
                l && (t.velocity.y = t.velocity.x / 2 - t.velocity.y);
            else if ((!r || o < r) && (!l || n < l) && t.misplaced)
              t.misplaced = !1;
            else if (t.misplaced) {
              const e = t.position,
                s = t.velocity;
              r &&
                ((e.x < i.x && s.x < 0) || (e.x > i.x && s.x > 0)) &&
                (s.x *= -a()),
                l &&
                  ((e.y < i.y && s.y < 0) || (e.y > i.y && s.y > 0)) &&
                  (s.y *= -a());
            }
        })(t);
      }
    }
    class Pi {
      draw(t, i, e) {
        i.circleRange || (i.circleRange = { min: 0, max: 2 * Math.PI });
        const s = i.circleRange;
        t.arc(0, 0, e, s.min, s.max, !1);
      }
      getSidesCount() {
        return 12;
      }
      particleInit(t, i) {
        var e;
        const s = i.shapeData,
          o =
            null !== (e = null == s ? void 0 : s.angle) && void 0 !== e
              ? e
              : { max: 360, min: 0 };
        i.circleRange =
          "object" != typeof o
            ? { min: 0, max: (o * Math.PI) / 180 }
            : { min: (o.min * Math.PI) / 180, max: (o.max * Math.PI) / 180 };
      }
    }
    function Mi(t, i, e, s, o) {
      var n, a;
      const r = i;
      if (
        !r ||
        !e.enable ||
        (void 0 !== r.loops &&
          void 0 !== r.maxLoops &&
          r.maxLoops > 0 &&
          r.loops >= r.maxLoops)
      )
        return;
      const h = l(e.offset),
        c =
          (null !== (n = i.velocity) && void 0 !== n ? n : 0) * t.factor +
          3.6 * h,
        d = null !== (a = i.decay) && void 0 !== a ? a : 1;
      o && "increasing" !== r.status
        ? ((r.value -= c),
          r.value < 0 &&
            (r.loops || (r.loops = 0),
            r.loops++,
            (r.status = "increasing"),
            (r.value += r.value)))
        : ((r.value += c),
          r.value > s &&
            (r.loops || (r.loops = 0),
            r.loops++,
            o && ((r.status = "decreasing"), (r.value -= r.value % s)))),
        r.velocity && 1 !== d && (r.velocity *= d),
        r.value > s && (r.value %= s);
    }
    class Ci {
      constructor(t) {
        this.container = t;
      }
      init(t) {
        const i = A(t.options.color, t.id, t.options.reduceDuplicates);
        i &&
          (t.color = (function (t, i, e) {
            const s = {
              h: { enable: !1, value: t.h },
              s: { enable: !1, value: t.s },
              l: { enable: !1, value: t.l },
            };
            return i && (H(s.h, i.h, e), H(s.s, i.s, e), H(s.l, i.l, e)), s;
          })(i, t.options.color.animation, this.container.retina.reduceFactor));
      }
      isEnabled(t) {
        var i, e, s;
        const o = t.options.color.animation;
        return (
          !t.destroyed &&
          !t.spawning &&
          ((void 0 !==
            (null === (i = t.color) || void 0 === i ? void 0 : i.h.value) &&
            o.h.enable) ||
            (void 0 !==
              (null === (e = t.color) || void 0 === e ? void 0 : e.s.value) &&
              o.s.enable) ||
            (void 0 !==
              (null === (s = t.color) || void 0 === s ? void 0 : s.l.value) &&
              o.l.enable))
        );
      }
      update(t, i) {
        !(function (t, i) {
          var e, s, o;
          const n = t.options.color.animation,
            a = null === (e = t.color) || void 0 === e ? void 0 : e.h,
            r = null === (s = t.color) || void 0 === s ? void 0 : s.s,
            l = null === (o = t.color) || void 0 === o ? void 0 : o.l;
          a && Mi(i, a, n.h, 360, !1),
            r && Mi(i, r, n.s, 100, !0),
            l && Mi(i, l, n.l, 100, !0);
        })(t, i);
      }
    }
    class Si {
      load(t) {
        t &&
          (void 0 !== t.bottom && (this.bottom = u(t.bottom)),
          void 0 !== t.left && (this.left = u(t.left)),
          void 0 !== t.right && (this.right = u(t.right)),
          void 0 !== t.top && (this.top = u(t.top)));
      }
    }
    class Oi extends zt {
      constructor() {
        super(), (this.value = 3);
      }
    }
    class ki extends zt {
      constructor() {
        super(), (this.value = { min: 4, max: 9 });
      }
    }
    class Di {
      constructor() {
        (this.count = 1),
          (this.factor = new Oi()),
          (this.rate = new ki()),
          (this.sizeOffset = !0);
      }
      load(t) {
        t &&
          (void 0 !== t.count && (this.count = t.count),
          this.factor.load(t.factor),
          this.rate.load(t.rate),
          (this.particles = S(t.particles, (t) => C({}, t))),
          void 0 !== t.sizeOffset && (this.sizeOffset = t.sizeOffset));
      }
    }
    class Ii {
      constructor() {
        (this.bounds = new Si()), (this.mode = "none"), (this.split = new Di());
      }
      load(t) {
        t &&
          (t.mode && (this.mode = t.mode),
          t.bounds && this.bounds.load(t.bounds),
          this.split.load(t.split));
      }
    }
    class Ri {
      constructor(t, i) {
        (this.engine = t), (this.container = i);
      }
      init(t) {
        const i = this.container,
          e = t.options.destroy;
        if (!e) return;
        t.splitCount = 0;
        const s = e.bounds;
        t.destroyBounds || (t.destroyBounds = {}),
          s.bottom &&
            (t.destroyBounds.bottom =
              (h(s.bottom) * i.canvas.size.height) / 100),
          s.left &&
            (t.destroyBounds.left = (h(s.left) * i.canvas.size.width) / 100),
          s.right &&
            (t.destroyBounds.right = (h(s.right) * i.canvas.size.width) / 100),
          s.top &&
            (t.destroyBounds.top = (h(s.top) * i.canvas.size.height) / 100);
      }
      isEnabled(t) {
        return !t.destroyed;
      }
      loadOptions(t, ...i) {
        t.destroy || (t.destroy = new Ii());
        for (const e of i) t.destroy.load(null == e ? void 0 : e.destroy);
      }
      particleDestroyed(t, i) {
        if (i) return;
        const e = t.options.destroy;
        e && "split" === e.mode && this.split(t);
      }
      update(t) {
        if (!this.isEnabled(t)) return;
        const i = t.getPosition(),
          e = t.destroyBounds;
        e &&
          ((void 0 !== e.bottom && i.y >= e.bottom) ||
            (void 0 !== e.left && i.x <= e.left) ||
            (void 0 !== e.right && i.x >= e.right) ||
            (void 0 !== e.top && i.y <= e.top)) &&
          t.destroy();
      }
      addSplitParticle(t, i) {
        const e = t.options.destroy;
        if (!e) return;
        const s = e.split,
          o = ii(this.engine, this.container, t.options),
          n = p(s.factor);
        o.color.load({ value: { hsl: t.getFillColor() } }),
          o.move.load({
            center: { x: t.position.x, y: t.position.y, mode: "precise" },
          }),
          "number" == typeof o.size.value
            ? (o.size.value /= n)
            : ((o.size.value.min /= n), (o.size.value.max /= n)),
          o.load(i);
        const a = s.sizeOffset ? u(-t.size.value, t.size.value) : 0,
          r = { x: t.position.x + l(a), y: t.position.y + l(a) };
        return this.container.particles.addParticle(r, o, t.group, (i) => {
          var e;
          return (
            !(i.size.value < 0.5) &&
            ((i.velocity.length = l(u(t.velocity.length, i.velocity.length))),
            (i.splitCount =
              (null !== (e = t.splitCount) && void 0 !== e ? e : 0) + 1),
            (i.unbreakable = !0),
            setTimeout(() => {
              i.unbreakable = !1;
            }, 500),
            !0)
          );
        });
      }
      split(t) {
        const i = t.options.destroy;
        if (!i) return;
        const e = i.split;
        if (
          e.count >= 0 &&
          (void 0 === t.splitCount || t.splitCount++ > e.count)
        )
          return;
        const s = p(e.rate),
          o = O(e.particles);
        for (let i = 0; i < s; i++) this.addSplitParticle(t, o);
      }
    }
    class Ti {
      randomPosition(t, i, e) {
        const [s, o] = [i.width / 2, i.height / 2],
          n = ((t, i) => {
            const e = a() / 4,
              s = Math.atan((i / t) * Math.tan(2 * Math.PI * e)),
              o = a();
            return o < 0.25
              ? s
              : o < 0.5
              ? Math.PI - s
              : o < 0.75
              ? Math.PI + s
              : -s;
          })(s, o),
          r =
            ((d = n),
            ((h = s) * (c = o)) /
              Math.sqrt((c * Math.cos(d)) ** 2 + (h * Math.sin(d)) ** 2)),
          l = e ? r * Math.sqrt(a()) : r;
        var h, c, d;
        return { x: t.x + l * Math.cos(n), y: t.y + l * Math.sin(n) };
      }
    }
    class Ei {
      constructor() {
        this.wait = !1;
      }
      load(t) {
        void 0 !== t &&
          (void 0 !== t.count && (this.count = t.count),
          void 0 !== t.delay && (this.delay = t.delay),
          void 0 !== t.duration && (this.duration = t.duration),
          void 0 !== t.wait && (this.wait = t.wait));
      }
    }
    class Li {
      constructor() {
        (this.quantity = 1), (this.delay = 0.1);
      }
      load(t) {
        void 0 !== t &&
          (void 0 !== t.quantity && (this.quantity = u(t.quantity)),
          void 0 !== t.delay && (this.delay = u(t.delay)));
      }
    }
    class Ai {
      constructor() {
        (this.mode = "percent"), (this.height = 0), (this.width = 0);
      }
      load(t) {
        void 0 !== t &&
          (void 0 !== t.mode && (this.mode = t.mode),
          void 0 !== t.height && (this.height = t.height),
          void 0 !== t.width && (this.width = t.width));
      }
    }
    class Fi {
      constructor() {
        (this.autoPlay = !0),
          (this.fill = !0),
          (this.life = new Ei()),
          (this.rate = new Li()),
          (this.shape = "square"),
          (this.startCount = 0);
      }
      load(t) {
        void 0 !== t &&
          (void 0 !== t.autoPlay && (this.autoPlay = t.autoPlay),
          void 0 !== t.size &&
            (void 0 === this.size && (this.size = new Ai()),
            this.size.load(t.size)),
          void 0 !== t.direction && (this.direction = t.direction),
          (this.domId = t.domId),
          void 0 !== t.fill && (this.fill = t.fill),
          this.life.load(t.life),
          (this.name = t.name),
          (this.particles = S(t.particles, (t) => C({}, t))),
          this.rate.load(t.rate),
          void 0 !== t.shape && (this.shape = t.shape),
          void 0 !== t.position &&
            ((this.position = {}),
            void 0 !== t.position.x && (this.position.x = u(t.position.x)),
            void 0 !== t.position.y && (this.position.y = u(t.position.y))),
          void 0 !== t.spawnColor &&
            (void 0 === this.spawnColor && (this.spawnColor = new wt()),
            this.spawnColor.load(t.spawnColor)),
          void 0 !== t.startCount && (this.startCount = t.startCount));
      }
    }
    class Vi {
      constructor(t, i, e, s, o) {
        var n, a, r, l, h, c, d, u;
        (this.emitters = i),
          (this.container = e),
          (this._engine = t),
          (this._currentDuration = 0),
          (this._currentEmitDelay = 0),
          (this._currentSpawnDelay = 0),
          (this._initialPosition = o),
          s instanceof Fi
            ? (this.options = s)
            : ((this.options = new Fi()), this.options.load(s)),
          (this._spawnDelay =
            (1e3 *
              (null !== (n = this.options.life.delay) && void 0 !== n
                ? n
                : 0)) /
            this.container.retina.reduceFactor),
          (this.position =
            null !== (a = this._initialPosition) && void 0 !== a
              ? a
              : this.calcPosition()),
          (this.name = this.options.name),
          (this._shape =
            null === (r = this._engine.emitterShapeManager) || void 0 === r
              ? void 0
              : r.getShape(this.options.shape)),
          (this.fill = this.options.fill),
          (this._firstSpawn = !this.options.life.wait),
          (this._startParticlesAdded = !1);
        let p = C({}, this.options.particles);
        null != p || (p = {}),
          (null !== (l = p.move) && void 0 !== l) || (p.move = {}),
          (null !== (h = (u = p.move).direction) && void 0 !== h) ||
            (u.direction = this.options.direction),
          this.options.spawnColor &&
            (this.spawnColor = A(this.options.spawnColor)),
          (this._paused = !this.options.autoPlay),
          (this._particlesOptions = p),
          (this.size =
            null !== (c = this.options.size) && void 0 !== c
              ? c
              : (() => {
                  const t = new Ai();
                  return t.load({ height: 0, mode: "percent", width: 0 }), t;
                })()),
          (this._lifeCount =
            null !== (d = this.options.life.count) && void 0 !== d ? d : -1),
          (this._immortal = this._lifeCount <= 0),
          this._engine.dispatchEvent("emitterCreated", {
            container: e,
            data: { emitter: this },
          }),
          this.play();
      }
      externalPause() {
        (this._paused = !0), this.pause();
      }
      externalPlay() {
        (this._paused = !1), this.play();
      }
      getPosition() {
        if (this.options.domId) {
          const t = this.container,
            i = document.getElementById(this.options.domId);
          if (i) {
            const e = i.getBoundingClientRect();
            return {
              x: (e.x + e.width / 2) * t.retina.pixelRatio,
              y: (e.y + e.height / 2) * t.retina.pixelRatio,
            };
          }
        }
        return this.position;
      }
      getSize() {
        const t = this.container;
        if (this.options.domId) {
          const i = document.getElementById(this.options.domId);
          if (i) {
            const e = i.getBoundingClientRect();
            return {
              width: e.width * t.retina.pixelRatio,
              height: e.height * t.retina.pixelRatio,
            };
          }
        }
        return {
          width:
            "percent" === this.size.mode
              ? (t.canvas.size.width * this.size.width) / 100
              : this.size.width,
          height:
            "percent" === this.size.mode
              ? (t.canvas.size.height * this.size.height) / 100
              : this.size.height,
        };
      }
      pause() {
        this._paused || delete this._emitDelay;
      }
      play() {
        var t;
        if (
          !this._paused &&
          this.container.retina.reduceFactor &&
          (this._lifeCount > 0 || this._immortal || !this.options.life.count) &&
          (this._firstSpawn ||
            this._currentSpawnDelay >=
              (null !== (t = this._spawnDelay) && void 0 !== t ? t : 0))
        ) {
          if (void 0 === this._emitDelay) {
            const t = h(this.options.rate.delay);
            this._emitDelay = (1e3 * t) / this.container.retina.reduceFactor;
          }
          (this._lifeCount > 0 || this._immortal) && this.prepareToDie();
        }
      }
      resize() {
        const t = this._initialPosition;
        this.position =
          t && P(t, this.container.canvas.size, o.origin)
            ? t
            : this.calcPosition();
      }
      update(t) {
        var i, e, s;
        this._paused ||
          (this._firstSpawn &&
            ((this._firstSpawn = !1),
            (this._currentSpawnDelay =
              null !== (i = this._spawnDelay) && void 0 !== i ? i : 0),
            (this._currentEmitDelay =
              null !== (e = this._emitDelay) && void 0 !== e ? e : 0)),
          this._startParticlesAdded ||
            ((this._startParticlesAdded = !0),
            this.emitParticles(this.options.startCount)),
          void 0 !== this._duration &&
            ((this._currentDuration += t.value),
            this._currentDuration >= this._duration &&
              (this.pause(),
              void 0 !== this._spawnDelay && delete this._spawnDelay,
              this._immortal || this._lifeCount--,
              this._lifeCount > 0 || this._immortal
                ? ((this.position = this.calcPosition()),
                  (this._spawnDelay =
                    (1e3 *
                      (null !== (s = this.options.life.delay) && void 0 !== s
                        ? s
                        : 0)) /
                    this.container.retina.reduceFactor))
                : this.destroy(),
              (this._currentDuration -= this._duration),
              delete this._duration)),
          void 0 !== this._spawnDelay &&
            ((this._currentSpawnDelay += t.value),
            this._currentSpawnDelay >= this._spawnDelay &&
              (this._engine.dispatchEvent("emitterPlay", {
                container: this.container,
              }),
              this.play(),
              (this._currentSpawnDelay -= this._currentSpawnDelay),
              delete this._spawnDelay)),
          void 0 !== this._emitDelay &&
            ((this._currentEmitDelay += t.value),
            this._currentEmitDelay >= this._emitDelay &&
              (this.emit(), (this._currentEmitDelay -= this._emitDelay))));
      }
      calcPosition() {
        return f({
          size: this.container.canvas.size,
          position: this.options.position,
        });
      }
      destroy() {
        this.emitters.removeEmitter(this),
          this._engine.dispatchEvent("emitterDestroyed", {
            container: this.container,
            data: { emitter: this },
          });
      }
      emit() {
        if (this._paused) return;
        const t = h(this.options.rate.quantity);
        this.emitParticles(t);
      }
      emitParticles(t) {
        var i, e, s;
        const o = this.getPosition(),
          n = this.getSize(),
          a = O(this._particlesOptions);
        for (let r = 0; r < t; r++) {
          const t = C({}, a);
          if (this.spawnColor) {
            const e =
              null === (i = this.options.spawnColor) || void 0 === i
                ? void 0
                : i.animation;
            e &&
              ((this.spawnColor.h = this.setColorAnimation(
                e.h,
                this.spawnColor.h,
                360
              )),
              (this.spawnColor.s = this.setColorAnimation(
                e.s,
                this.spawnColor.s,
                100
              )),
              (this.spawnColor.l = this.setColorAnimation(
                e.l,
                this.spawnColor.l,
                100
              ))),
              t.color
                ? (t.color.value = this.spawnColor)
                : (t.color = { value: this.spawnColor });
          }
          if (!o) return;
          const r =
            null !==
              (s =
                null === (e = this._shape) || void 0 === e
                  ? void 0
                  : e.randomPosition(o, n, this.fill)) && void 0 !== s
              ? s
              : o;
          this.container.particles.addParticle(r, t);
        }
      }
      prepareToDie() {
        var t;
        if (this._paused) return;
        const i =
          null === (t = this.options.life) || void 0 === t
            ? void 0
            : t.duration;
        this.container.retina.reduceFactor &&
          (this._lifeCount > 0 || this._immortal) &&
          void 0 !== i &&
          i > 0 &&
          (this._duration = 1e3 * i);
      }
      setColorAnimation(t, i, e) {
        var s;
        const o = this.container;
        if (!t.enable) return i;
        const n = l(t.offset),
          a = (1e3 * h(this.options.rate.delay)) / o.retina.reduceFactor;
        return (
          (i +
            (h(null !== (s = t.speed) && void 0 !== s ? s : 0) * o.fpsLimit) /
              a +
            3.6 * n) %
          e
        );
      }
    }
    class Bi {
      constructor(t, i) {
        (this.container = i),
          (this._engine = t),
          (this.array = []),
          (this.emitters = []),
          (this.interactivityEmitters = {
            random: { count: 1, enable: !1 },
            value: [],
          }),
          (i.getEmitter = (t) =>
            void 0 === t || "number" == typeof t
              ? this.array[t || 0]
              : this.array.find((i) => i.name === t)),
          (i.addEmitter = (t, i) => this.addEmitter(t, i)),
          (i.removeEmitter = (t) => {
            const e = i.getEmitter(t);
            e && this.removeEmitter(e);
          }),
          (i.playEmitter = (t) => {
            const e = i.getEmitter(t);
            e && e.externalPlay();
          }),
          (i.pauseEmitter = (t) => {
            const e = i.getEmitter(t);
            e && e.externalPause();
          });
      }
      addEmitter(t, i) {
        const e = new Fi();
        e.load(t);
        const s = new Vi(this._engine, this, this.container, e, i);
        return this.array.push(s), s;
      }
      handleClickMode(t) {
        const i = this.emitters,
          e = this.interactivityEmitters;
        if ("emitter" === t) {
          let t;
          if (e && e.value instanceof Array)
            if (e.value.length > 0 && e.random.enable) {
              t = [];
              const i = [];
              for (let s = 0; s < e.random.count; s++) {
                const o = _(e.value);
                i.includes(o) && i.length < e.value.length
                  ? s--
                  : (i.push(o), t.push(z(e.value, o)));
              }
            } else t = e.value;
          else t = null == e ? void 0 : e.value;
          const s = null != t ? t : i,
            o = this.container.interactivity.mouse.clickPosition;
          S(s, (t) => {
            this.addEmitter(t, o);
          });
        }
      }
      async init() {
        if (
          ((this.emitters = this.container.actualOptions.emitters),
          (this.interactivityEmitters =
            this.container.actualOptions.interactivity.modes.emitters),
          this.emitters instanceof Array)
        )
          for (const t of this.emitters) this.addEmitter(t);
        else this.addEmitter(this.emitters);
      }
      pause() {
        for (const t of this.array) t.pause();
      }
      play() {
        for (const t of this.array) t.play();
      }
      removeEmitter(t) {
        const i = this.array.indexOf(t);
        i >= 0 && this.array.splice(i, 1);
      }
      resize() {
        for (const t of this.array) t.resize();
      }
      stop() {
        this.array = [];
      }
      update(t) {
        for (const i of this.array) i.update(t);
      }
    }
    const qi = new Map();
    class Wi {
      constructor(t) {
        this._engine = t;
      }
      addShape(t, i) {
        this.getShape(t) || qi.set(t, i);
      }
      getShape(t) {
        return qi.get(t);
      }
      getSupportedShapes() {
        return qi.keys();
      }
    }
    function Ui(t, i) {
      return t + i * (a() - 0.5);
    }
    class Hi {
      randomPosition(t, i, e) {
        if (e) return { x: Ui(t.x, i.width), y: Ui(t.y, i.height) };
        {
          const e = i.width / 2,
            s = i.height / 2,
            o = Math.floor(4 * a()),
            n = 2 * (a() - 0.5);
          switch (o) {
            case 0:
              return { x: t.x + n * e, y: t.y - s };
            case 1:
              return { x: t.x - e, y: t.y + n * s };
            case 2:
              return { x: t.x + n * e, y: t.y + s };
            default:
              return { x: t.x + e, y: t.y + n * s };
          }
        }
      }
    }
    class ji {
      constructor(t) {
        (this._engine = t), (this.id = "emitters");
      }
      getPlugin(t) {
        return new Bi(this._engine, t);
      }
      loadOptions(t, i) {
        var e, s, o, n, a, r;
        if (!this.needsPlugin(t) && !this.needsPlugin(i)) return;
        (null == i ? void 0 : i.emitters) &&
          (t.emitters = S(i.emitters, (t) => {
            const i = new Fi();
            return i.load(t), i;
          }));
        const l =
          null ===
            (s =
              null === (e = null == i ? void 0 : i.interactivity) ||
              void 0 === e
                ? void 0
                : e.modes) || void 0 === s
            ? void 0
            : s.emitters;
        if (l)
          if (l instanceof Array)
            t.interactivity.modes.emitters = {
              random: { count: 1, enable: !0 },
              value: l.map((t) => {
                const i = new Fi();
                return i.load(t), i;
              }),
            };
          else {
            const i = l;
            if (void 0 !== i.value)
              if (i.value instanceof Array)
                t.interactivity.modes.emitters = {
                  random: {
                    count:
                      null !== (o = i.random.count) && void 0 !== o ? o : 1,
                    enable: null !== (n = i.random.enable) && void 0 !== n && n,
                  },
                  value: i.value.map((t) => {
                    const i = new Fi();
                    return i.load(t), i;
                  }),
                };
              else {
                const e = new Fi();
                e.load(i.value),
                  (t.interactivity.modes.emitters = {
                    random: {
                      count:
                        null !== (a = i.random.count) && void 0 !== a ? a : 1,
                      enable:
                        null !== (r = i.random.enable) && void 0 !== r && r,
                    },
                    value: e,
                  });
              }
            else {
              (t.interactivity.modes.emitters = {
                random: { count: 1, enable: !1 },
                value: new Fi(),
              }).value.load(l);
            }
          }
      }
      needsPlugin(t) {
        var i, e, s;
        if (!t) return !1;
        const o = t.emitters;
        return (
          (o instanceof Array && !!o.length) ||
          void 0 !== o ||
          (!!(null ===
            (s =
              null ===
                (e =
                  null === (i = t.interactivity) || void 0 === i
                    ? void 0
                    : i.events) || void 0 === e
                ? void 0
                : e.onClick) || void 0 === s
            ? void 0
            : s.mode) &&
            x("emitter", t.interactivity.events.onClick.mode))
        );
      }
    }
    class Gi {
      constructor(t) {
        this.container = t;
      }
      init(t) {
        const i = t.options.opacity;
        t.opacity = {
          enable: i.animation.enable,
          max: d(i.value),
          min: c(i.value),
          value: h(i.value),
          loops: 0,
          maxLoops: h(i.animation.count),
        };
        const e = i.animation;
        if (e.enable) {
          (t.opacity.decay = 1 - h(e.decay)), (t.opacity.status = "increasing");
          const s = i.value;
          switch (
            ((t.opacity.min = c(s)), (t.opacity.max = d(s)), e.startValue)
          ) {
            case "min":
              (t.opacity.value = t.opacity.min),
                (t.opacity.status = "increasing");
              break;
            case "random":
              (t.opacity.value = l(t.opacity)),
                (t.opacity.status = a() >= 0.5 ? "increasing" : "decreasing");
              break;
            default:
              (t.opacity.value = t.opacity.max),
                (t.opacity.status = "decreasing");
          }
          (t.opacity.velocity =
            (h(e.speed) / 100) * this.container.retina.reduceFactor),
            e.sync || (t.opacity.velocity *= a());
        }
        t.opacity.initialValue = t.opacity.value;
      }
      isEnabled(t) {
        var i, e, s, o;
        return (
          !t.destroyed &&
          !t.spawning &&
          !!t.opacity &&
          t.opacity.enable &&
          ((null !== (i = t.opacity.maxLoops) && void 0 !== i ? i : 0) <= 0 ||
            ((null !== (e = t.opacity.maxLoops) && void 0 !== e ? e : 0) > 0 &&
              (null !== (s = t.opacity.loops) && void 0 !== s ? s : 0) <
                (null !== (o = t.opacity.maxLoops) && void 0 !== o ? o : 0)))
        );
      }
      reset(t) {
        t.opacity && (t.opacity.loops = 0);
      }
      update(t, i) {
        this.isEnabled(t) &&
          (function (t, i) {
            var e, s, o, n, a, l;
            if (!t.opacity) return;
            const h = t.opacity.min,
              c = t.opacity.max,
              d = null !== (e = t.opacity.decay) && void 0 !== e ? e : 1;
            if (
              !(
                t.destroyed ||
                !t.opacity.enable ||
                ((null !== (s = t.opacity.maxLoops) && void 0 !== s ? s : 0) >
                  0 &&
                  (null !== (o = t.opacity.loops) && void 0 !== o ? o : 0) >
                    (null !== (n = t.opacity.maxLoops) && void 0 !== n ? n : 0))
              )
            ) {
              switch (t.opacity.status) {
                case "increasing":
                  t.opacity.value >= c
                    ? ((t.opacity.status = "decreasing"),
                      t.opacity.loops || (t.opacity.loops = 0),
                      t.opacity.loops++)
                    : (t.opacity.value +=
                        (null !== (a = t.opacity.velocity) && void 0 !== a
                          ? a
                          : 0) * i.factor);
                  break;
                case "decreasing":
                  t.opacity.value <= h
                    ? ((t.opacity.status = "increasing"),
                      t.opacity.loops || (t.opacity.loops = 0),
                      t.opacity.loops++)
                    : (t.opacity.value -=
                        (null !== (l = t.opacity.velocity) && void 0 !== l
                          ? l
                          : 0) * i.factor);
              }
              t.opacity.velocity &&
                1 !== t.opacity.decay &&
                (t.opacity.velocity *= d),
                (function (t, i, e, s) {
                  switch (t.options.opacity.animation.destroy) {
                    case "max":
                      i >= s && t.destroy();
                      break;
                    case "min":
                      i <= e && t.destroy();
                  }
                })(t, t.opacity.value, h, c),
                t.destroyed || (t.opacity.value = r(t.opacity.value, h, c));
            }
          })(t, i);
      }
    }
    class Ni {
      constructor(t) {
        (this.container = t),
          (this.modes = [
            "bounce",
            "bounce-vertical",
            "bounce-horizontal",
            "bounceVertical",
            "bounceHorizontal",
            "split",
          ]);
      }
      update(t, i, e, s) {
        if (!this.modes.includes(s)) return;
        const o = this.container;
        let n = !1;
        for (const [, s] of o.plugins)
          if (
            (void 0 !== s.particleBounce && (n = s.particleBounce(t, e, i)), n)
          )
            break;
        if (n) return;
        const a = t.getPosition(),
          r = t.offset,
          l = t.getRadius(),
          h = M(a, l),
          c = o.canvas.size;
        !(function (t) {
          if (
            "bounce" !== t.outMode &&
            "bounce-horizontal" !== t.outMode &&
            "bounceHorizontal" !== t.outMode &&
            "split" !== t.outMode
          )
            return;
          t.bounds.right < 0
            ? (t.particle.position.x = t.size + t.offset.x)
            : t.bounds.left > t.canvasSize.width &&
              (t.particle.position.x =
                t.canvasSize.width - t.size - t.offset.x);
          const i = t.particle.velocity.x;
          let e = !1;
          if (
            ("right" === t.direction &&
              t.bounds.right >= t.canvasSize.width &&
              i > 0) ||
            ("left" === t.direction && t.bounds.left <= 0 && i < 0)
          ) {
            const i = p(t.particle.options.bounce.horizontal);
            (t.particle.velocity.x *= -i), (e = !0);
          }
          if (!e) return;
          const s = t.offset.x + t.size;
          t.bounds.right >= t.canvasSize.width
            ? (t.particle.position.x = t.canvasSize.width - s)
            : t.bounds.left <= 0 && (t.particle.position.x = s),
            "split" === t.outMode && t.particle.destroy();
        })({
          particle: t,
          outMode: s,
          direction: i,
          bounds: h,
          canvasSize: c,
          offset: r,
          size: l,
        }),
          (function (t) {
            if (
              "bounce" !== t.outMode &&
              "bounce-vertical" !== t.outMode &&
              "bounceVertical" !== t.outMode &&
              "split" !== t.outMode
            )
              return;
            t.bounds.bottom < 0
              ? (t.particle.position.y = t.size + t.offset.y)
              : t.bounds.top > t.canvasSize.height &&
                (t.particle.position.y =
                  t.canvasSize.height - t.size - t.offset.y);
            const i = t.particle.velocity.y;
            let e = !1;
            if (
              ("bottom" === t.direction &&
                t.bounds.bottom >= t.canvasSize.height &&
                i > 0) ||
              ("top" === t.direction && t.bounds.top <= 0 && i < 0)
            ) {
              const i = p(t.particle.options.bounce.vertical);
              (t.particle.velocity.y *= -i), (e = !0);
            }
            if (!e) return;
            const s = t.offset.y + t.size;
            t.bounds.bottom >= t.canvasSize.height
              ? (t.particle.position.y = t.canvasSize.height - s)
              : t.bounds.top <= 0 && (t.particle.position.y = s),
              "split" === t.outMode && t.particle.destroy();
          })({
            particle: t,
            outMode: s,
            direction: i,
            bounds: h,
            canvasSize: c,
            offset: r,
            size: l,
          });
      }
    }
    class Xi {
      constructor(t) {
        (this.container = t), (this.modes = ["destroy"]);
      }
      update(t, i, e, s) {
        if (!this.modes.includes(s)) return;
        const n = this.container;
        switch (t.outType) {
          case "normal":
          case "outside":
            if (P(t.position, n.canvas.size, o.origin, t.getRadius(), i))
              return;
            break;
          case "inside": {
            const { dx: i, dy: e } = v(t.position, t.moveCenter),
              { x: s, y: o } = t.velocity;
            if (
              (s < 0 && i > t.moveCenter.radius) ||
              (o < 0 && e > t.moveCenter.radius) ||
              (s >= 0 && i < -t.moveCenter.radius) ||
              (o >= 0 && e < -t.moveCenter.radius)
            )
              return;
            break;
          }
        }
        n.particles.remove(t, void 0, !0);
      }
    }
    class Yi {
      constructor(t) {
        (this.container = t), (this.modes = ["none"]);
      }
      update(t, i, e, s) {
        if (!this.modes.includes(s)) return;
        if (
          (t.options.move.distance.horizontal &&
            ("left" === i || "right" === i)) ||
          (t.options.move.distance.vertical && ("top" === i || "bottom" === i))
        )
          return;
        const n = t.options.move.gravity,
          a = this.container,
          r = a.canvas.size,
          l = t.getRadius();
        if (n.enable) {
          const e = t.position;
          ((!n.inverse && e.y > r.height + l && "bottom" === i) ||
            (n.inverse && e.y < -l && "top" === i)) &&
            a.particles.remove(t);
        } else {
          if (
            (t.velocity.y > 0 && t.position.y <= r.height + l) ||
            (t.velocity.y < 0 && t.position.y >= -l) ||
            (t.velocity.x > 0 && t.position.x <= r.width + l) ||
            (t.velocity.x < 0 && t.position.x >= -l)
          )
            return;
          P(t.position, a.canvas.size, o.origin, l, i) || a.particles.remove(t);
        }
      }
    }
    class $i {
      constructor(t) {
        (this.container = t), (this.modes = ["out"]);
      }
      update(t, i, e, s) {
        if (!this.modes.includes(s)) return;
        const n = this.container;
        switch (t.outType) {
          case "inside": {
            const { x: i, y: e } = t.velocity,
              s = o.origin;
            (s.length = t.moveCenter.radius),
              (s.angle = t.velocity.angle + Math.PI),
              s.addTo(o.create(t.moveCenter));
            const { dx: a, dy: r } = v(t.position, s);
            if (
              (i <= 0 && a >= 0) ||
              (e <= 0 && r >= 0) ||
              (i >= 0 && a <= 0) ||
              (e >= 0 && r <= 0)
            )
              return;
            (t.position.x = Math.floor(
              l({ min: 0, max: n.canvas.size.width })
            )),
              (t.position.y = Math.floor(
                l({ min: 0, max: n.canvas.size.height })
              ));
            const { dx: h, dy: c } = v(t.position, t.moveCenter);
            (t.direction = Math.atan2(-c, -h)),
              (t.velocity.angle = t.direction);
            break;
          }
          default:
            if (P(t.position, n.canvas.size, o.origin, t.getRadius(), i))
              return;
            switch (t.outType) {
              case "outside": {
                (t.position.x =
                  Math.floor(
                    l({ min: -t.moveCenter.radius, max: t.moveCenter.radius })
                  ) + t.moveCenter.x),
                  (t.position.y =
                    Math.floor(
                      l({ min: -t.moveCenter.radius, max: t.moveCenter.radius })
                    ) + t.moveCenter.y);
                const { dx: i, dy: e } = v(t.position, t.moveCenter);
                t.moveCenter.radius &&
                  ((t.direction = Math.atan2(e, i)),
                  (t.velocity.angle = t.direction));
                break;
              }
              case "normal": {
                const e = t.options.move.warp,
                  s = n.canvas.size,
                  o = {
                    bottom: s.height + t.getRadius() + t.offset.y,
                    left: -t.getRadius() - t.offset.x,
                    right: s.width + t.getRadius() + t.offset.x,
                    top: -t.getRadius() - t.offset.y,
                  },
                  r = t.getRadius(),
                  l = M(t.position, r);
                "right" === i && l.left > s.width + t.offset.x
                  ? ((t.position.x = o.left),
                    (t.initialPosition.x = t.position.x),
                    e ||
                      ((t.position.y = a() * s.height),
                      (t.initialPosition.y = t.position.y)))
                  : "left" === i &&
                    l.right < -t.offset.x &&
                    ((t.position.x = o.right),
                    (t.initialPosition.x = t.position.x),
                    e ||
                      ((t.position.y = a() * s.height),
                      (t.initialPosition.y = t.position.y))),
                  "bottom" === i && l.top > s.height + t.offset.y
                    ? (e ||
                        ((t.position.x = a() * s.width),
                        (t.initialPosition.x = t.position.x)),
                      (t.position.y = o.top),
                      (t.initialPosition.y = t.position.y))
                    : "top" === i &&
                      l.bottom < -t.offset.y &&
                      (e ||
                        ((t.position.x = a() * s.width),
                        (t.initialPosition.x = t.position.x)),
                      (t.position.y = o.bottom),
                      (t.initialPosition.y = t.position.y));
                break;
              }
            }
        }
      }
    }
    class Ji {
      constructor(t) {
        (this.container = t),
          (this.updaters = [new Ni(t), new Xi(t), new $i(t), new Yi(t)]);
      }
      init() {}
      isEnabled(t) {
        return !t.destroyed && !t.spawning;
      }
      update(t, i) {
        var e, s, o, n;
        const a = t.options.move.outModes;
        this.updateOutMode(
          t,
          i,
          null !== (e = a.bottom) && void 0 !== e ? e : a.default,
          "bottom"
        ),
          this.updateOutMode(
            t,
            i,
            null !== (s = a.left) && void 0 !== s ? s : a.default,
            "left"
          ),
          this.updateOutMode(
            t,
            i,
            null !== (o = a.right) && void 0 !== o ? o : a.default,
            "right"
          ),
          this.updateOutMode(
            t,
            i,
            null !== (n = a.top) && void 0 !== n ? n : a.default,
            "top"
          );
      }
      updateOutMode(t, i, e, s) {
        for (const o of this.updaters) o.update(t, s, i, e);
      }
    }
    class Zi {
      init(t) {
        var i;
        const e = t.container,
          s = t.options.size.animation;
        s.enable &&
          ((t.size.velocity =
            ((null !== (i = t.retina.sizeAnimationSpeed) && void 0 !== i
              ? i
              : e.retina.sizeAnimationSpeed) /
              100) *
            e.retina.reduceFactor),
          s.sync || (t.size.velocity *= a()));
      }
      isEnabled(t) {
        var i, e, s, o;
        return (
          !t.destroyed &&
          !t.spawning &&
          t.size.enable &&
          ((null !== (i = t.size.maxLoops) && void 0 !== i ? i : 0) <= 0 ||
            ((null !== (e = t.size.maxLoops) && void 0 !== e ? e : 0) > 0 &&
              (null !== (s = t.size.loops) && void 0 !== s ? s : 0) <
                (null !== (o = t.size.maxLoops) && void 0 !== o ? o : 0)))
        );
      }
      reset(t) {
        t.size.loops = 0;
      }
      update(t, i) {
        this.isEnabled(t) &&
          (function (t, i) {
            var e, s, o, n, a;
            const l =
                (null !== (e = t.size.velocity) && void 0 !== e ? e : 0) *
                i.factor,
              h = t.size.min,
              c = t.size.max,
              d = null !== (s = t.size.decay) && void 0 !== s ? s : 1;
            if (
              !(
                t.destroyed ||
                !t.size.enable ||
                ((null !== (o = t.size.maxLoops) && void 0 !== o ? o : 0) > 0 &&
                  (null !== (n = t.size.loops) && void 0 !== n ? n : 0) >
                    (null !== (a = t.size.maxLoops) && void 0 !== a ? a : 0))
              )
            ) {
              switch (t.size.status) {
                case "increasing":
                  t.size.value >= c
                    ? ((t.size.status = "decreasing"),
                      t.size.loops || (t.size.loops = 0),
                      t.size.loops++)
                    : (t.size.value += l);
                  break;
                case "decreasing":
                  t.size.value <= h
                    ? ((t.size.status = "increasing"),
                      t.size.loops || (t.size.loops = 0),
                      t.size.loops++)
                    : (t.size.value -= l);
              }
              t.size.velocity && 1 !== d && (t.size.velocity *= d),
                (function (t, i, e, s) {
                  switch (t.options.size.animation.destroy) {
                    case "max":
                      i >= s && t.destroy();
                      break;
                    case "min":
                      i <= e && t.destroy();
                  }
                })(t, t.size.value, h, c),
                t.destroyed || (t.size.value = r(t.size.value, h, c));
            }
          })(t, i);
      }
    }
    const Qi = {
      fpsLimit: 120,
      particles: {
        bounce: { vertical: { value: { min: 0.75, max: 0.85 } } },
        color: {
          value: [
            "#3998D0",
            "#2EB6AF",
            "#A9BD33",
            "#FEC73B",
            "#F89930",
            "#F45623",
            "#D62E32",
            "#EB586E",
            "#9952CF",
          ],
        },
        number: { value: 0 },
        destroy: {
          mode: "split",
          split: {
            count: 2,
            factor: { value: { min: 1.1, max: 2 } },
            rate: { value: { min: 2, max: 3 } },
          },
        },
        opacity: { value: 0.5 },
        size: { value: { min: 10, max: 20 } },
        move: {
          enable: !0,
          gravity: { enable: !0, maxSpeed: 50 },
          speed: { min: 10, max: 20 },
          direction: "none",
          random: !1,
          straight: !1,
          outModes: { bottom: "split", default: "bounce", top: "none" },
          trail: { enable: !0, fillColor: "#fff", length: 3 },
        },
      },
      detectRetina: !0,
      background: { color: "#fff" },
      emitters: {
        direction: "top",
        life: { count: 0, duration: 0.15, delay: 3 },
        rate: { delay: 0.1, quantity: 5 },
        size: { width: 0, height: 0 },
      },
    };
    async function Ki(t) {
      await (async function (t) {
        t.addMover("base", () => new zi());
      })(t),
        await (async function (t) {
          await t.addShape("circle", new Pi());
        })(t),
        await (async function (t) {
          await t.addParticleUpdater("destroy", (i) => new Ri(t, i));
        })(t),
        await (async function (t) {
          t.emitterShapeManager || (t.emitterShapeManager = new Wi(t)),
            t.addEmitterShape ||
              (t.addEmitterShape = (i, e) => {
                var s;
                null === (s = t.emitterShapeManager) ||
                  void 0 === s ||
                  s.addShape(i, e);
              });
          const i = new ji(t);
          await t.addPlugin(i),
            t.addEmitterShape("circle", new Ti()),
            t.addEmitterShape("square", new Hi());
        })(t),
        await (async function (t) {
          await t.addParticleUpdater("color", (t) => new Ci(t));
        })(t),
        await (async function (t) {
          await t.addParticleUpdater("opacity", (t) => new Gi(t));
        })(t),
        await (async function (t) {
          await t.addParticleUpdater("outModes", (t) => new Ji(t));
        })(t),
        await (async function (t) {
          await t.addParticleUpdater("size", () => new Zi());
        })(t),
        await t.addPreset("fountain", Qi);
    }
    return Ki(_i), i;
  })()
);
