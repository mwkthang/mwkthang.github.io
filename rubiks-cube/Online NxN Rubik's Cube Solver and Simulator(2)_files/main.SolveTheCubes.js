(this.webpackJsonprubiksprogram = this.webpackJsonprubiksprogram || []).push([
  [0],
  {
    111: function (e, t, n) {},
    112: function (e, t, n) {},
    113: function (e, t, n) {},
    114: function (e, t, n) {},
    125: function (e, t) {
      function n(e, t, n) {
        return e > n && e < t;
      }
      e.exports = function (e, t, o, s) {
        var a = "",
          r = e,
          c = "",
          i = 0,
          l = t - 1;
        if (2 === t)
          return {
            solveState: 2,
          };
        for (
          var u = (function (e) {
              for (
                var t = [], n = e.length / 3, o = n / 4, s = [], a = 0;
                a < n;
                a++
              )
                s.push(e[a]), s.length === o && (t.push(s), (s = []));
              return t;
            })(s),
            h = u[0][0],
            p = u[3][0],
            d = u[1][0],
            v = u[2][0],
            b = 0;
          b < r.length;
          b++
        )
          if ((a.length && (c = " "), r[b].includes("white"))) {
            for (
              var g = 0, j = -1, y = r[b][6], m = r[b][7], f = r[b][8], x = 0;
              x < 6;
              x++
            )
              "black" === r[b][x] ? g++ : "white" === r[b][x] && (j = x);
            4 === g &&
              (b === h &&
                0 === i &&
                (n(y, l, 0) && 0 === m && f === l
                  ? j
                    ? (a += c + "01U' 01R' 01F'")
                    : i++
                  : y === l && 0 === m && n(f, l, 0)
                  ? (a += j ? c + "01R 01U" : c + "01F'")
                  : n(y, l, 0) && 0 === m && 0 === f
                  ? (a += j ? c + "01D 01R 01F'" : c + "01F2")
                  : 0 === y && 0 === m && n(f, l, 0)
                  ? (a += j ? c + "01L' 01U'" : c + "01F")
                  : 0 === y && n(m, l, 0) && f === l
                  ? (a += 1 === j ? c + "01L 01F" : c + "01U'")
                  : y === l && n(m, l, 0) && f === l
                  ? (a += 1 === j ? c + "01R' 01F'" : c + "01U")
                  : y === l && n(m, l, 0) && 0 === f
                  ? (a += 2 === j ? c + "01D' 01F2" : c + "01R 01F'")
                  : 0 === y && n(m, l, 0) && 0 === f
                  ? (a += 4 === j ? c + "01D 01F2" : c + "01L' 01F")
                  : n(y, l, 0) && m === l && f === l
                  ? (a += 3 === j ? c + "01U2" : c + "01B 01L 01U'")
                  : y === l && m === l && n(f, l, 0)
                  ? (a += 3 === j ? c + "01R2 01F'" : c + "01R' 01U")
                  : n(y, l, 0) && m === l && 0 === f
                  ? (a += 3 === j ? c + "01B2 01U2" : c + "01B' 01L 01U'")
                  : 0 === y &&
                    m === l &&
                    n(f, l, 0) &&
                    (a += 3 === j ? c + "01B' 01U2" : c + "01L 01U'")),
              b === p &&
                1 === i &&
                (0 === y && 0 === m && n(f, l, 0)
                  ? j
                    ? (a += c + "01L' 01R 01U' 01R'")
                    : i++
                  : n(y, l, 0) && 0 === m && 0 === f
                  ? (a += j ? c + "01D' 01L'" : c + "01D' 01F' 01D 01F")
                  : y === l &&
                    0 === m &&
                    n(f, l, 0) &&
                    (a += j
                      ? c + "01R 01F 01U 01F'"
                      : c + "01R 01F2 01R' 01F2"),
                0 === y && n(m, l, 0) && f === l
                  ? (a += 1 === j ? c + "01L" : c + "01F 01U' 01F'")
                  : y === l && n(m, l, 0) && f === l
                  ? (a += 1 === j ? c + "01F2 01R' 01F2" : c + "01U 01F' 01U'")
                  : y === l && n(m, l, 0) && 0 === f
                  ? (a += 2 === j ? c + "01F' 01D' 01F" : c + "01F2 01R 01F2")
                  : 0 === y &&
                    n(m, l, 0) &&
                    0 === f &&
                    (a += 4 === j ? c + "01F' 01D 01F" : c + "01L'"),
                n(y, l, 0) && m === l && f === l
                  ? (a += 3 === j ? c + "01F 01U2 01F'" : c + "01U' 01L 01U")
                  : y === l && m === l && n(f, l, 0)
                  ? (a += 3 === j ? c + "01B2 01L2" : c + "01R' 01F 01U 01F'")
                  : n(y, l, 0) && m === l && 0 === f
                  ? (a += 3 === j ? c + "01F' 01D2 01F" : c + "01D 01L'")
                  : 0 === y &&
                    m === l &&
                    n(f, l, 0) &&
                    (a += 3 === j ? c + "01L2" : c + "01B' 01U' 01L 01U")),
              b === d &&
                2 === i &&
                (n(y, l, 0) && 0 === m && 0 === f
                  ? (a += j ? c + "01D 01R" : c + "01D 01F 01D' 01F'")
                  : y === l &&
                    0 === m &&
                    n(f, l, 0) &&
                    (j ? (a += c + "01R 01F' 01U 01F") : i++),
                0 === y && n(m, l, 0) && f === l
                  ? (a += 1 === j ? c + "01F2 01L 01F2" : c + "01F' 01U' 01F")
                  : y === l && n(m, l, 0) && f === l
                  ? (a += 1 === j ? c + "01R'" : c + "01F' 01U 01F")
                  : y === l && n(m, l, 0) && 0 === f
                  ? (a += 2 === j ? c + "01F 01D' 01F'" : c + "01R")
                  : 0 === y &&
                    n(m, l, 0) &&
                    0 === f &&
                    (a += 4 === j ? c + "01F 01D 01F'" : c + "01F2 01L' 01F2"),
                n(y, l, 0) && m === l && f === l
                  ? (a += 3 === j ? c + "01F' 01U2 01F" : c + "01U 01R' 01U'")
                  : y === l && m === l && n(f, l, 0)
                  ? (a += 3 === j ? c + "01R2" : c + "01R' 01F' 01U 01F")
                  : n(y, l, 0) && m === l && 0 === f
                  ? (a += 3 === j ? c + "01F 01D2 01F'" : c + "01D' 01L")
                  : 0 === y &&
                    m === l &&
                    n(f, l, 0) &&
                    (a +=
                      3 === j ? c + "01B2 01R2" : c + "01B' 01U 01R' 01U'")),
              b === v &&
                3 === i &&
                (n(y, l, 0) &&
                  0 === m &&
                  0 === f &&
                  (j ? (a += c + "01D 01F' 01R 01F") : i++),
                0 === y && n(m, l, 0) && f === l
                  ? (a += 1 === j ? c + "01F 01L 01F'" : c + "01F2 01U' 01F2")
                  : y === l && n(m, l, 0) && f === l
                  ? (a += 1 === j ? c + "01F' 01R' 01F" : c + "01F2 01U 01F2")
                  : y === l && n(m, l, 0) && 0 === f
                  ? (a += 2 === j ? c + "01D'" : c + "01F' 01R 01F")
                  : 0 === y &&
                    n(m, l, 0) &&
                    0 === f &&
                    (a += 4 === j ? c + "01D" : c + "01F 01L' 01F'"),
                n(y, l, 0) && m === l && f === l
                  ? (a +=
                      3 === j ? c + "01F2 01U2 01F2" : c + "01B 01L' 01D 01L")
                  : y === l && m === l && n(f, l, 0)
                  ? (a += 3 === j ? c + "01F' 01R2 01F" : c + "01R 01D' 01R'")
                  : n(y, l, 0) && m === l && 0 === f
                  ? (a += 3 === j ? c + "01D2" : c + "01D' 01F' 01R 01F")
                  : 0 === y &&
                    m === l &&
                    n(f, l, 0) &&
                    (a += 3 === j ? c + "01F 01L2 01F'" : c + "01L' 01D 01L")));
          }
        var S = o(a);
        return i < 4
          ? {
              moveSet: S,
            }
          : {
              solveState: 2,
            };
      };
    },
    126: function (e, t) {
      e.exports = function (e, t, n, o) {
        for (
          var s = "",
            a = e,
            r = 0,
            c = t,
            i = c - 1,
            l = o[0],
            u = o[1],
            h = o[2],
            p = o[3],
            d = 0;
          d < a.length;
          d++
        ) {
          for (
            var v = -1, b = a[d][6], g = a[d][7], j = a[d][8], y = 0;
            y < 6;
            y++
          )
            "white" === a[d][y] && (v = y);
          d === l &&
            0 === r &&
            (0 === b && 0 === g && j === i
              ? 0 === v
                ? r++
                : (s =
                    1 === v
                      ? "01L' 01B 01L 01B' 01L' 01B 01L"
                      : "01L' 01B' 01L 01B2 01U 01B' 01U'")
              : b === i && 0 === g && j === i
              ? (s = "01R 01L' 01B 01L 01R'")
              : b === i && 0 === g && 0 === j
              ? (s = "01R' 01B' 01R 01U 01B' 01U'")
              : 0 === b && 0 === g && 0 === j
              ? (s = "01D' 01U 01B 01U' 01D")
              : 0 === b && g === i && j === i
              ? (s = "01U 01B 01U'")
              : b === i && g === i && j === i
              ? (s = "01L' 01B 01L")
              : b === i && g === i && 0 === j
              ? (s = "01L' 01B2 01L")
              : 0 === b && g === i && 0 === j && (s = "01U 01B' 01U'")),
            d === u &&
              1 === r &&
              (b === i && 0 === g && j === i
                ? 0 === v
                  ? r++
                  : (s =
                      1 === v
                        ? "01R 01B' 01R' 01B 01R 01B' 01R'"
                        : "01U' 01B 01U 01B' 01U' 01B 01U")
                : b === i && 0 === g && 0 === j
                ? (s = "01U' 01D 01B 01D' 01U")
                : 0 === b && 0 === g && 0 === j
                ? (s = "01L 01R 01B2 01R' 01L'")
                : 0 === b && g === i && j === i
                ? (s = "01R 01B' 01R'")
                : b === i && g === i && j === i
                ? (s = "01B 01R 01B' 01R'")
                : b === i && g === i && 0 === j
                ? (s = "01B2 01R 01B' 01R'")
                : 0 === b && g === i && 0 === j && (s = "01R 01B2 01R'")),
            d === h &&
              2 === r &&
              (0 === b && 0 === g && 0 === j
                ? 0 === v
                  ? r++
                  : (s =
                      4 === v
                        ? "01D' 01B 01D 01B' 01D' 01B 01D"
                        : "01L 01B' 01L' 01B 01L 01B' 01L'")
                : b === i && 0 === g && 0 === j
                ? (s = "01R' 01L 01B' 01L' 01R")
                : 0 === b && g === i && j === i
                ? (s = "01D' 01B 01D")
                : b === i && g === i && j === i
                ? (s = "01D' 01B2 01D")
                : b === i && g === i && 0 === j
                ? (s = "01B' 01D' 01B' 01D")
                : 0 === b && g === i && 0 === j && (s = "01D' 01B' 01D")),
            d === p &&
              3 === r &&
              (b === i && 0 === g && 0 === j
                ? 0 === v
                  ? r++
                  : (s =
                      2 === v
                        ? "01D 01B' 01D' 01B 01D 01B' 01D'"
                        : "01R' 01B 01R 01B' 01R' 01B 01R")
                : 0 === b && g === i && j === i
                ? (s = " 01R' 01B2 01R")
                : b === i && g === i && j === i
                ? (s = "01D 01B' 01D'")
                : b === i && g === i && 0 === j
                ? (s = "01B 01D 01B' 01D'")
                : 0 === b && g === i && 0 === j && (s = "01R' 01B 01R"));
        }
        var m = n(s);
        return r < 4
          ? {
              moveSet: m,
            }
          : 2 === c
          ? {
              solveState: 6,
            }
          : {
              solveState: 3,
            };
      };
    },
    127: function (e, t) {
      function n(e, t, n) {
        return e > n && e < t;
      }
      e.exports = function (e, t, o, s) {
        for (
          var a = "",
            r = e,
            c = "",
            i = 0,
            l = "01B 01U 01B' 01U' 01B' 01L' 01B 01L",
            u = "01B 01R 01B' 01R' 01B' 01U' 01B 01U",
            h = "01B 01D 01B' 01D' 01B' 01R' 01B 01R",
            p = "01B 01L 01B' 01L' 01B' 01D' 01B 01D",
            d = s - 1,
            v = (function (e) {
              for (
                var t = [], n = e.length / 3, o = n / 4, s = [], a = 2 * n;
                a < 3 * n;
                a++
              )
                s.push(e[a]), s.length === o && (t.push(s), (s = []));
              return t;
            })(o),
            b = v[0][0],
            g = v[1][0],
            j = v[3][0],
            y = v[2][0],
            m = 0;
          m < r.length;
          m++
        ) {
          a.length && (c = " ");
          for (
            var f = -1, x = -1, S = r[m][6], F = r[m][7], O = r[m][8], D = 0;
            D < 6;
            D++
          )
            "black" === r[m][D] ||
              ("blue" === r[m][D] ? (f = D) : "green" === r[m][D] && (x = D));
          m === b &&
            0 === i &&
            (0 === S && n(F, d, 0) && O === d
              ? 1 === f
                ? i++
                : (a += c + l)
              : S === d && n(F, d, 0) && O === d
              ? (a += c + u)
              : 0 === S && n(F, d, 0) && 0 === O
              ? (a += c + p)
              : S === d && n(F, d, 0) && 0 === O
              ? (a += c + h)
              : 0 === S && F === d && n(O, d, 0)
              ? (a +=
                  3 === f ? c + l : c + "01B2 01L' 01B' 01L 01B 01U 01B 01U'")
              : n(S, d, 0) && F === d && O === d
              ? (a += c + "01B")
              : S === d && F === d && n(O, d, 0)
              ? (a += c + "01B2")
              : n(S, d, 0) && F === d && 0 === O && (a += c + "01B'")),
            m === g &&
              1 === i &&
              (S === d && n(F, d, 0) && O === d
                ? 1 === f
                  ? i++
                  : (a += c + u)
                : 0 === S && n(F, d, 0) && 0 === O
                ? (a += c + p)
                : S === d && n(F, d, 0) && 0 === O
                ? (a += c + h)
                : n(S, d, 0) && F === d && O === d
                ? (a +=
                    1 === f ? c + u : c + "01B2 01U' 01B' 01U 01B 01R 01B 01R'")
                : S === d && F === d && n(O, d, 0)
                ? (a += c + "01B")
                : n(S, d, 0) && F === d && 0 === O
                ? (a += c + "01B2")
                : 0 === S && F === d && n(O, d, 0) && (a += c + "01B'")),
            m === j &&
              2 === i &&
              (0 === S && n(F, d, 0) && 0 === O
                ? 5 === x
                  ? i++
                  : (a += c + p)
                : S === d && n(F, d, 0) && 0 === O
                ? (a += c + h)
                : n(S, d, 0) && F === d && 0 === O
                ? (a +=
                    5 === x ? c + p : c + "01B2 01D' 01B' 01D 01B 01L 01B 01L'")
                : 0 === S && F === d && n(O, d, 0)
                ? (a += c + "01B")
                : n(S, d, 0) && F === d && O === d
                ? (a += c + "01B2")
                : S === d && F === d && n(O, d, 0) && (a += c + "01B'")),
            m === y &&
              3 === i &&
              (S === d && n(F, d, 0) && 0 === O
                ? 5 === x
                  ? i++
                  : (a += c + h)
                : S === d && F === d && n(O, d, 0)
                ? (a +=
                    3 === x ? c + h : c + "01B2 01R' 01B' 01R 01B 01D 01B 01D'")
                : n(S, d, 0) && F === d && 0 === O
                ? (a += c + "01B")
                : 0 === S && F === d && n(O, d, 0)
                ? (a += c + "01B2")
                : n(S, d, 0) && F === d && O === d && (a += c + "01B'"));
        }
        var k = t(a);
        return i < 4
          ? {
              moveSet: k,
            }
          : {
              solveState: 4,
            };
      };
    },
    128: function (e, t) {
      function n(e, t, n) {
        return e > n && e < t;
      }

      function o(e, t) {
        return (e < 10 ? "0" : "") + e + t;
      }
      e.exports = function (e, t, s, a) {
        if (2 === a)
          return {
            solveState: 5,
          };
        for (
          var r = "",
            c = e,
            i = "01U 01R 01B 01R' 01B' 01U'",
            l = a - 1,
            u = (function (e) {
              for (
                var t = [], n = e.length / 3, o = n / 4, s = [], a = n;
                a < 2 * n;
                a++
              )
                s.push(e[a]), s.length === o && (t.push(s), (s = []));
              return t;
            })(s),
            h = [u[0][0], u[3][0], u[1][0], u[2][0]],
            p = [],
            d = 0;
          d < 4;
          d++
        )
          n(c[h[d]][6], l, 0) && c[h[d]][7] === l && c[h[d]][8] === l
            ? (p[0] = c[h[d]][3])
            : 0 === c[h[d]][6] && c[h[d]][7] === l && n(c[h[d]][8], l, 0)
            ? (p[1] = c[h[d]][3])
            : c[h[d]][6] === l && c[h[d]][7] === l && n(c[h[d]][8], l, 0)
            ? (p[2] = c[h[d]][3])
            : n(c[h[d]][6], l, 0) &&
              c[h[d]][7] === l &&
              0 === c[h[d]][8] &&
              (p[3] = c[h[d]][3]);
        var v = !1;
        if (a % 2 === 0 && a >= 4) {
          for (var b = 0, g = 0; g < 4; g++) "yellow" === c[h[g]][3] && b++;
          b % 2 &&
            ((v = !0),
            (r = ""
              .concat(o(a / 2, "r"), " 01B2 ")
              .concat(o(a / 2, "r'"), " 01B2 \n          ")
              .concat(o(a / 2, "r"), " 01B2 ")
              .concat(o(a / 2, "r"), " 01B2 \n          ")
              .concat(o(a / 2, "l'"), " 01B2 ")
              .concat(o(a / 2, "r"), " 01B2 \n          ")
              .concat(o(a / 2, "r'"), " 01B2 01D2 \n          ")
              .concat(o(a / 2, "r2"), " 01D2 ")
              .concat(o(a, "r'"))));
        }
        v ||
          ("yellow" === c[h[0]][3] &&
            "yellow" === c[h[1]][3] &&
            "yellow" === c[h[2]][3] &&
            "yellow" === c[h[3]][3]) ||
          (r =
            "yellow" === p[0] && "yellow" === p[3]
              ? "01B " + i
              : "yellow" === p[1] && "yellow" === p[2]
              ? i
              : "yellow" === p[0] && "yellow" === p[2]
              ? "01B2 " + i + " " + i
              : "yellow" === p[1] && "yellow" === p[3]
              ? i + " " + i
              : "yellow" === p[0] && "yellow" === p[1]
              ? "01B " + i + " " + i
              : "yellow" === p[2] && p[3]
              ? "01B' " + i + " " + i
              : i);
        var j = t(r);
        return r.length
          ? {
              moveSet: j,
            }
          : {
              solveState: 5,
            };
      };
    },
    129: function (e, t) {
      function n(e, t, n) {
        return e > n && e < t;
      }
      e.exports = function (e, t, o, s) {
        if (2 === s)
          return {
            solveState: 6,
          };
        var a = "",
          r = e,
          c = s - 1,
          i = (function (e) {
            for (
              var t = [], n = e.length / 3, o = n / 4, s = [], a = n;
              a < 2 * n;
              a++
            )
              s.push(e[a]), s.length === o && (t.push(s), (s = []));
            return t;
          })(o),
          l = [i[0][0], i[3][0], i[1][0], i[2][0]];
        n(r[l[0]][6], c, 0) && r[l[0]][7] === c && r[l[0]][8] === c
          ? (0 === r[l[1]][6] &&
              n(r[l[1]][8], c, 0) &&
              r[l[2]][6] === c &&
              n(r[l[2]][8], c, 0)) ||
            (r[l[1]][6] === c &&
            n(r[l[2]][8], c, 0) &&
            n(r[l[3]][6], c, 0) &&
            0 === r[l[3]][8]
              ? (a =
                  "01D 01B 01D' 01B 01D 01B2 01D' 01B2 01L 01B 01L' 01B 01L 01B2 01L' 01B")
              : ((r[l[3]][6] === c && n(r[l[3]][8], c, 0)) ||
                  (0 === r[l[3]][6] && n(r[l[3]][8], c, 0))) &&
                (a = "01R 01B 01R' 01B 01R 01B2 01R' 01B"))
          : (a =
              r[l[0]][6] === c && r[l[0]][7] === c && n(r[l[0]][8], c, 0)
                ? "01B"
                : "01B'");
        var u = t(a);
        return a.length
          ? {
              moveSet: u,
            }
          : {
              solveState: 6,
            };
      };
    },
    130: function (e, t) {
      function n(e, t) {
        return (e < 10 ? "0" : "") + e + t;
      }
      e.exports = function (e, t, o, s, a) {
        var r,
          c = "",
          i = e,
          l = "01U' 01F' 01U 01F 01U' 01F' 01U 01F",
          u = t,
          h = u - 1,
          p = a[4],
          d = a[5],
          v = a[6],
          b = a[7];
        if (
          ("yellow" === i[p][3] &&
          "yellow" === i[d][3] &&
          "yellow" === i[v][3] &&
          "yellow" === i[b][3]
            ? (0 === i[p][6] && i[p][8] === h) || (c = "01B")
            : "yellow" !== i[p][3]
            ? (c = l)
            : "yellow" !== i[d][3]
            ? (c = 0 === i[d][6] && i[d][8] === h ? l : "01B")
            : "yellow" !== i[b][3]
            ? (c = 0 === i[b][6] && i[b][8] === h ? l : "01B")
            : "yellow" !== i[v][3] &&
              (c = 0 === i[v][6] && i[v][8] === h ? l : "01B"),
          (r = o(c)),
          c.length)
        )
          return {
            moveSet: r,
          };
        if (2 === u) {
          if (0 !== i[p][6] || i[p][8] !== h)
            return {
              moveSet: (r = o((c = "01B"))),
            };
          if (i[d][6] === h && i[d][8] === h) {
            if (0 === i[v][6] && 0 === i[v][8]) {
              var g = {
                moveLog: "",
                currentFunc: "None",
                moveSet: [],
                solveState: -1,
              };
              return s.length ? ((g.solveMoves = ""), g) : g;
            }
            return {
              moveSet: (r = o((c = "01R 01D' 01R' 01F' 01R' 01F 01D"))),
            };
          }
        } else {
          if (!(u > 3)) {
            var j = {
              moveLog: "",
              currentFunc: "None",
              moveSet: [],
              solveState: -1,
            };
            return s.length ? ((j.solveMoves = ""), j) : j;
          }
          if (
            0 === i[p][6] &&
            i[p][8] === h &&
            i[d][6] === h &&
            i[d][8] === h
          ) {
            if (0 === i[v][6] && 0 === i[v][8]) {
              var y = {
                moveLog: "",
                currentFunc: "None",
                moveSet: [],
                solveState: -1,
              };
              return s.length ? ((y.solveMoves = ""), y) : y;
            }
            return (
              (c = "02R2 01B2 02R2 01B2 02B2 02R2 02B2"),
              {
                moveSet: (r = o(
                  (c = ""
                    .concat(n(u / 2, "r2"), " 01R2 01B2 ")
                    .concat(n(u / 2, "r2"), " 01R2 01B2 ")
                    .concat(n(u / 2, "b2"), " 01B2 ")
                    .concat(n(u / 2, "r2"), " 01R2 ")
                    .concat(n(u / 2, "b2"), " 01B2"))
                )),
                solveState: 4,
              }
            );
          }
        }
      };
    },
    131: function (e, t) {
      function n(e, t) {
        return (e < 10 ? "0" : "") + e + t;
      }
      e.exports = function (e, t, o, s) {
        var a = "",
          r = e,
          c = t,
          i = c - 1,
          l = s[4],
          u = s[5],
          h = s[6],
          p = s[7],
          d = 0;
        if (
          (r[l][6] === r[l][9] &&
            r[l][7] === r[l][10] &&
            r[l][8] === r[l][11] &&
            d++,
          r[u][6] === r[u][9] &&
            r[u][7] === r[u][10] &&
            r[u][8] === r[u][11] &&
            d++,
          r[h][6] === r[h][9] &&
            r[h][7] === r[h][10] &&
            r[h][8] === r[h][11] &&
            d++,
          r[p][6] === r[p][9] &&
            r[p][7] === r[p][10] &&
            r[p][8] === r[p][11] &&
            d++,
          0 === r[l][6] && r[l][8] === i && r[u][6] === i && r[u][8] === i)
        );
        else if (2 === d && c > 3) {
          a = "02D2 01B2 02D2 02b2 02D2 02b2";
          var v = o(
            (a = ""
              .concat(n(c / 2, "d2"), " 01D2 01B2 ")
              .concat(n(c / 2, "d2"), " 01D2 ")
              .concat(n(c / 2, "b2"), " ")
              .concat(n(c / 2, "d2"), " 01D2 ")
              .concat(n(c / 2, "b2")))
          );
          if (a.length)
            return {
              moveSet: v,
              solveState: 5,
            };
        } else
          a =
            0 === r[l][6] && r[l][8] === i
              ? "01B 01U 01B' 01D' 01B 01U' 01B' 01D"
              : r[u][6] === i && r[u][8] === i
              ? "01B 01R 01B' 01L' 01B 01R' 01B' 01L"
              : 0 === r[h][6] && 0 === r[h][8]
              ? "01B 01L 01B' 01R' 01B 01L' 01B' 01R"
              : r[p][6] === i && 0 === r[p][8]
              ? "01B 01D 01B' 01U' 01B 01D' 01B' 01U"
              : "01B 01U 01B' 01D' 01B 01U' 01B' 01D";
        var b = o(a);
        return a.length
          ? {
              moveSet: b,
            }
          : {
              solveState: 7,
            };
      };
    },
    132: function (e, t) {
      function n(e, t, n) {
        return e + (t < 10 ? "0" : "") + t + n;
      }
      e.exports = function (e, t, o, s) {
        var a = "F",
          r = Math.floor(s / (o - 2)),
          c = s % (o - 2),
          i = "";
        return (
          0 === e.x
            ? (a = "L")
            : e.x === o - 1
            ? (a = "R")
            : e.y === o - 1
            ? (a = "B")
            : 0 === e.z
            ? (a = "D")
            : e.z === o - 1 && (a = "U"),
          1 === t.x
            ? (i =
                o - t.z === 2
                  ? "F" === a
                    ? "01F"
                    : "D" !== a && "U" !== a
                    ? e.z !== o - 2
                      ? "01" + a
                      : n("", o - e.z, "U")
                    : e.x !== t.x
                    ? "01" + a
                    : "02L"
                  : "F" === a
                  ? n("", e.z + 1, "D'")
                  : "B" === a
                  ? e.z <= t.z
                    ? n("", e.z + 1, "D")
                    : "01B"
                  : "L" === a
                  ? e.y !== o - 2 || e.z !== t.z
                    ? "01L"
                    : n("", e.z + 1, "D")
                  : n("", e.y + 1, "F'"))
            : 0 === r
            ? (i =
                "F" === a
                  ? e.z < t.z && e.x >= t.x
                    ? n("", o - e.x, "R")
                    : n("", e.z + 1, "D")
                  : "B" === a
                  ? e.x === t.x && e.z !== t.z
                    ? n("", c + 2, "L2")
                    : "01B"
                  : e.y === o - 2
                  ? e.z !== o - 1
                    ? n("", r + 2, "B")
                    : e.x !== t.x
                    ? "01U"
                    : n("", c + 2, "L")
                  : "01" + a)
            : "F" === a
            ? e.z < t.z
              ? (i = n("", o - e.z, "U"))
              : ((i = n("", o - e.z, "U")),
                (i += n(" ", o - e.x, "F'")),
                (i += n(" ", o - e.z, "U'")))
            : "B" === a
            ? e.z === t.z
              ? t.x === e.x
                ? ((i = n("", o - e.z, "U")),
                  (i += n(" ", e.x + 1, "B")),
                  (i += n(" ", o - e.z, "U'")))
                : ((i = n("", o - e.z, "U")),
                  (i += " 01R"),
                  (i += n(" ", o - e.z, "U'")))
              : (i = "01B")
            : "U" !== a
            ? (i += n(" ", e.y + 1, "F"))
            : e.x !== t.x || e.y !== t.z
            ? (i = "01U")
            : ((i = "01U'"),
              (i += n(" ", o - t.z, "U'")),
              (i += n(" ", e.x + 1, "F")),
              (i += n(" ", o - t.z, "U"))),
          i
        );
      };
    },
    133: function (e, t) {
      function n(e, t, n) {
        return e + (t < 10 ? "0" : "") + t + n;
      }
      e.exports = function (e, t, o, s) {
        var a = "F",
          r = Math.floor(o / 2),
          c = "";
        return (
          0 === e.x
            ? (a = "L")
            : e.x === o - 1
            ? (a = "R")
            : e.y === o - 1
            ? (a = "B")
            : 0 === e.z
            ? (a = "D")
            : e.z === o - 1 && (a = "U"),
          "B" === a
            ? ((c += n(" ", e.z + 1, "D'")),
              (c += o % 2 && e.z === r ? " 01R" : " 01R2"),
              (c += n(" ", e.z + 1, "D")),
              (c += o % 2 && e.z === r ? " 01R" : ""),
              (c += n(" ", e.x + 1, "F")),
              (c += o % 2 && e.z === r ? " 01R'" : ""),
              (c += n(" ", e.z + 1, "D'")),
              (c += o % 2 && e.z === r ? " 01R'" : " 01R2"),
              (c += n(" ", e.z + 1, "D")))
            : "R" !== a
            ? (c = n("", e.y + 1, "F"))
            : e.y !== o - (t.x + 1) || e.z !== t.z
            ? (c = "01R")
            : ((c = n("", e.y + 1, "F'")),
              (c += n(" ", e.z + 1, "D'")),
              (e.y >= r && e.z >= r) || (e.y < r && e.z < r)
                ? (c += " 01L")
                : (c += " 01L'"),
              (c += n(" ", e.y + 1, "F")),
              (e.y >= r && e.z >= r) || (e.y < r && e.z < r)
                ? (c += " 01L'")
                : (c += " 01L"),
              (c += n(" ", e.z + 1, "D"))),
          c
        );
      };
    },
    134: function (e, t) {
      function n(e, t, n) {
        return e + (t < 10 ? "0" : "") + t + n;
      }
      e.exports = function (e, t, o) {
        var s = "F",
          a = Math.floor(o / 2),
          r = o % 2,
          c = "";
        if (
          (0 === e.x
            ? (s = "L")
            : e.x === o - 1
            ? (s = "R")
            : 0 === e.z
            ? (s = "D")
            : e.z === o - 1 && (s = "U"),
          r && t.x === a && t.y === a)
        )
          switch (s) {
            case "L":
              (c = n("", e.y + 1, "F'")),
                (c += " 01L"),
                (c += n(" ", e.y + 1, "F")),
                (c += " 01L'"),
                (c += n(" ", e.y + 1, "F"));
              break;
            case "D":
              (c = n("", e.y + 1, "F'")),
                (c += " 01L"),
                (c += n(" ", e.y + 1, "F2")),
                (c += " 01L'"),
                (c += n(" ", e.y + 1, "F"));
              break;
            case "R":
              (c = n("", e.y + 1, "F")),
                (c += " 01R"),
                (c += n(" ", e.y + 1, "F'")),
                (c += " 01R'"),
                (c += n(" ", e.y + 1, "F'"));
              break;
            default:
              console.log(
                "Shouldn't be checking middle if already in solved location."
              );
          }
        else
          "U" === s
            ? ((c = n("", e.y + 1, "F")),
              (c += n(" ", e.x + 1, "U2")),
              r && e.y === a && (c += " 01L'"),
              (c += n(" ", e.y + 1, "F'")),
              r && e.y === a && (c += " 01L"),
              (c += n(" ", e.x + 1, "U2")))
            : "R" === s
            ? o - e.z === t.x + 1 && e.y === t.y
              ? ((c = n("", t.x + 1, "U2")),
                r && t.y === a && (c += " 01L'"),
                (c += n(" ", t.y + 1, "F")),
                r && t.y === a && (c += " 01L"),
                (c += n(" ", t.x + 1, "U2")),
                (c += n(" ", t.y + 1, "F'")))
              : (c = "01R'")
            : "L" === s
            ? e.z === t.x && e.y === t.y
              ? ((c = n("", e.z + 1, "D2")),
                r && t.y === a && (c += " 01R"),
                (c += n(" ", t.y + 1, "F'")),
                r && t.y === a && (c += " 01R'"),
                (c += n(" ", e.z + 1, "D2")),
                (c += n(" ", t.y + 1, "F")))
              : (c = "01L")
            : e.y !== t.y
            ? (c = "01D")
            : ((c = n("", t.y + 1, "F'")),
              (c += " 01R"),
              (c += n(" ", t.y + 1, "F")));
        return c;
      };
    },
    135: function (e, t) {
      function n(e, t) {
        return (e < 10 ? "0" : "") + e + t;
      }
      e.exports = function (e, t, o, s) {
        var a = (function (e, t) {
            var n = "F";
            return (
              0 === e.x
                ? (n = "L")
                : e.x === t - 1
                ? (n = "R")
                : e.y === t - 1
                ? (n = "B")
                : 0 === e.z
                ? (n = "D")
                : e.z === t - 1 && (n = "U"),
              n
            );
          })(e, o),
          r = Math.floor(o / 2),
          c = r + 1,
          i = r - 1,
          l = [];
        if (o % 2 === 0)
          "D" === a &&
            (t.x === r - 1 && t.y === r - 1 && 0 === t.z
              ? l.push("01D")
              : t.x === r && t.y === r - 1 && 0 === t.z
              ? (l.push(n(e.y + 1, "F'")),
                l.push("01R2"),
                l.push(n(e.y + 1, "F")))
              : t.x === r - 1 && t.y === r && 0 === t.z
              ? (l.push(n(r + 1, "F'")), l.push("01R'"), l.push(n(r + 1, "F")))
              : t.x === t.y ||
                t.x === o - 1 - t.y ||
                o - 1 - t.x === o - 1 - t.y ||
                o - 1 - t.x === t.y
              ? t.y < r && t.x < r
                ? l.push("01D")
                : t.x > r && t.y < r
                ? l.push(n(e.y + 1, "F'"), "01R2", n(e.y + 1, "F"))
                : t.x < r &&
                  t.y > r &&
                  l.push(n(e.y + 1, "F'"), "01R", n(e.y + 1, "F"))
              : l.push(
                  "01R'",
                  "01D'",
                  n(o - e.x, "F"),
                  "01D",
                  n(o - e.y, "B'"),
                  "01D'",
                  n(o - e.x, "F'"),
                  "01D",
                  n(o - e.y, "B"),
                  "01R"
                )),
            "R" === a &&
              (t.x === r - 1 && t.y === r - 1 && 0 === t.z
                ? (l.push(n(e.y + 1, "F")),
                  l.push("01D2"),
                  l.push(n(e.y + 1, "F'")))
                : t.x === r && t.y === r - 1 && 0 === t.z
                ? e.y === r && e.z === r
                  ? (l.push("01D"),
                    l.push(n(r + 1, "F")),
                    l.push("01D'"),
                    l.push(n(r + 1, "F'")))
                  : l.push("01R")
                : t.x === r - 1 && t.y === r && 0 === t.z
                ? e.y === r && e.z === r - 1
                  ? (l.push("01R"),
                    l.push(n(r + 1, "F'")),
                    l.push("01R'"),
                    l.push(n(r + 1, "F")))
                  : l.push("01R")
                : t.x === r && t.y === r && 0 === t.z
                ? e.y === r - 1 && e.z === r
                  ? (l.push(n(r + 1, "F'")),
                    l.push("01R'"),
                    l.push(n(r + 1, "F")),
                    l.push("01R"),
                    l.push(n(r + 1, "F'")),
                    l.push("01R"),
                    l.push(n(r + 1, "F")))
                  : l.push("01R")
                : t.x === t.y ||
                  t.x === o - 1 - t.y ||
                  o - 1 - t.x === o - 1 - t.y ||
                  o - 1 - t.x === t.y
                ? e.y < r && e.z < r
                  ? t.x < r && t.y < r
                    ? l.push(n(e.y + 1, "F"), "01D'", n(e.y + 1, "F'"), "01D")
                    : t.x > r && t.y < r
                    ? l.push(
                        "01D'",
                        n(e.y + 1, "F"),
                        "01D'",
                        n(e.y + 1, "F'"),
                        "01D2"
                      )
                    : t.x < r && t.y > r
                    ? l.push(n(o - e.y, "F'"), "01R'", n(o - e.y, "F"))
                    : t.x > r &&
                      t.y > r &&
                      l.push(
                        "01R'",
                        n(o - e.y, "F"),
                        "01D'",
                        n(o - e.y, "F'"),
                        "01R2",
                        "01D",
                        n(o - e.y, "F'"),
                        "01R2",
                        n(o - e.y, "F")
                      )
                  : l.push("01R")
                : e.y === t.y && e.z === t.x
                ? l.push(
                    "01R'",
                    "01D'",
                    n(o - e.z, "F"),
                    "01D",
                    n(o - e.y, "B'"),
                    "01D'",
                    n(o - e.z, "F'"),
                    "01D",
                    n(o - e.y, "B"),
                    "01R"
                  )
                : l.push("01R"));
        else if (o % 2)
          switch (a) {
            case "D":
              t.x >= i && t.x <= c && t.y >= i && t.y <= c
                ? t.y === i
                  ? t.x === i
                    ? l.push("01D")
                    : t.x === r
                    ? e.x < r
                      ? (l.push(n(e.y + 1, "F")),
                        l.push("01D'"),
                        l.push(n(e.y + 1, "F'")),
                        l.push("01D"))
                      : e.x > r
                      ? (l.push(n(e.y + 1, "F")),
                        l.push("01D"),
                        l.push(n(e.y + 1, "F'")),
                        l.push("01D'"))
                      : (l.push(n(e.y + 1, "F'")),
                        l.push("01R'"),
                        l.push(n(e.y + 1, "F")))
                    : (l.push(n(e.y + 1, "F")),
                      l.push("01D"),
                      l.push(n(e.y + 1, "F'")),
                      l.push("01D'"))
                  : t.y === r
                  ? t.x === i
                    ? e.y === r
                      ? (l.push(n(i + 1, "F")),
                        l.push("01D2"),
                        l.push(n(i + 1, "F'")))
                      : (l.push(n(i + 1, "F")),
                        l.push("01D"),
                        l.push(n(i + 1, "F'")))
                    : (l.push(n(e.y + 1, "F'")),
                      l.push("01R"),
                      l.push(n(e.y + 1, "F")))
                  : t.x === i &&
                    (l.push(n(e.y + 1, "F'")),
                    l.push("01R"),
                    l.push(n(e.y + 1, "F")))
                : t.x === t.y ||
                  t.x === o - 1 - t.y ||
                  o - 1 - t.x === o - 1 - t.y ||
                  o - 1 - t.x === t.y
                ? t.y < r && t.x < r
                  ? l.push("01D")
                  : t.x > r && t.y < r
                  ? l.push(n(e.y + 1, "F'"), "01R2", n(e.y + 1, "F"))
                  : t.x < r &&
                    t.y > r &&
                    l.push(n(e.y + 1, "F'"), "01R", n(e.y + 1, "F"))
                : l.push(
                    "01R'",
                    "01D'",
                    n(o - e.x, "F"),
                    "01D",
                    n(o - e.y, "B'"),
                    "01D'",
                    n(o - e.x, "F'"),
                    "01D",
                    n(o - e.y, "B"),
                    "01R"
                  );
              break;
            case "R":
              t.x >= r - 1 && t.x <= r + 1 && t.y >= r - 1 && t.y <= r + 1
                ? t.y === i
                  ? t.x === i
                    ? (l.push(n(e.y + 1, "F")),
                      l.push("01D2"),
                      l.push(n(e.y + 1, "F'")))
                    : t.x === r
                    ? e.z === c
                      ? (l.push("01D"),
                        l.push(n(e.y + 1, "F")),
                        l.push("01D'"),
                        l.push(n(e.y + 1, "F'")))
                      : l.push("01R")
                    : e.y === c && e.z === c
                    ? (l.push("01D"),
                      l.push(n(e.y + 1, "F")),
                      l.push("01D'"),
                      l.push(n(e.y + 1, "F'")))
                    : l.push("01R")
                  : t.y === r
                  ? t.x === i
                    ? e.y === c
                      ? (l.push(n(r + 1, "F'")),
                        l.push("01R"),
                        l.push(n(r + 1, "F")))
                      : l.push("01R'")
                    : e.z === i
                    ? (l.push(n(i + 1, "F")),
                      l.push("01D'"),
                      l.push(n(i + 1, "F'")),
                      l.push("01R"),
                      l.push(n(i + 1, "F")),
                      l.push("01D"),
                      l.push(n(i + 1, "F'")))
                    : l.push("01R'")
                  : t.x === i
                  ? e.z === i && e.y === i
                    ? (l.push(n(c + 1, "F'")),
                      l.push("01R'"),
                      l.push(n(c + 1, "F")))
                    : l.push("01R")
                  : t.x === r
                  ? e.y === c
                    ? (l.push(n(e.y + 1, "F'")),
                      l.push("01R'"),
                      l.push(n(e.y + 1, "F")),
                      l.push("01R'"),
                      l.push(n(e.y + 1, "F'")),
                      l.push("01R"),
                      l.push(n(e.y + 1, "F")))
                    : l.push("01R")
                  : e.y === c && e.z === i
                  ? (l.push(n(e.y + 1, "F")),
                    l.push("01D'"),
                    l.push(n(e.y + 1, "F'")),
                    l.push("01D'"),
                    l.push(n(e.y + 1, "F")),
                    l.push("01D2"),
                    l.push(n(e.y + 1, "F'")))
                  : l.push("01R")
                : t.x === t.y ||
                  t.x === o - 1 - t.y ||
                  o - 1 - t.x === o - 1 - t.y ||
                  o - 1 - t.x === t.y
                ? e.y < r && e.z < r
                  ? t.x < r && t.y < r
                    ? l.push(n(e.y + 1, "F"), "01D'", n(e.y + 1, "F'"), "01D")
                    : t.x > r && t.y < r
                    ? l.push(
                        "01D'",
                        n(e.y + 1, "F"),
                        "01D'",
                        n(e.y + 1, "F'"),
                        "01D2"
                      )
                    : t.x < r && t.y > r
                    ? l.push(n(o - e.y, "F'"), "01R'", n(o - e.y, "F"))
                    : t.x > r &&
                      t.y > r &&
                      l.push(
                        "01R'",
                        n(o - e.y, "F"),
                        "01D'",
                        n(o - e.y, "F'"),
                        "01R2",
                        "01D",
                        n(o - e.y, "F'"),
                        "01R2",
                        n(o - e.y, "F")
                      )
                  : l.push("01R")
                : e.y === t.y && e.z === t.x
                ? l.push(
                    "01R'",
                    "01D'",
                    n(o - e.z, "F"),
                    "01D",
                    n(o - e.y, "B'"),
                    "01D'",
                    n(o - e.z, "F'"),
                    "01D",
                    n(o - e.y, "B"),
                    "01R"
                  )
                : l.push("01R");
              break;
            default:
              console.log(
                "Woops something broke. Only red and green should be unsolved."
              );
          }
        return l.join(" ");
      };
    },
    136: function (e, t) {
      function n(e, t) {
        return (e < 10 ? "0" : "") + e + t;
      }
      e.exports = function (e, t, o) {
        var s = Math.floor(o / 2),
          a = o % 2,
          r = [],
          c = "F";
        if (
          (0 === e.x
            ? (c = "L")
            : e.x === o - 1
            ? (c = "R")
            : 0 === e.z && (c = "D"),
          o % 2 === 0)
        )
          switch (c) {
            case "L":
              0 === t.x && t.y === s - 1 && t.z === s
                ? r.push("01L")
                : (0 === t.x && t.y === s - 1 && t.z === s - 1) ||
                  (0 === t.x && t.y === s && t.z === s)
                ? (r.push(n(e.y + 1, "F'")),
                  r.push(" 01D2"),
                  r.push(n(e.y + 1, "F")))
                : t.z === t.y ||
                  t.z === o - 1 - t.y ||
                  o - 1 - t.z === o - 1 - t.y ||
                  o - 1 - t.z === t.y
                ? e.z < s - 1 && e.y < s - 1
                  ? r.push(
                      "01L'",
                      "01D'",
                      n(e.y + 1, "B'"),
                      "01D",
                      n(e.y + 1, "F'"),
                      "01D'",
                      n(e.y + 1, "B"),
                      "01D",
                      n(e.y + 1, "F"),
                      "01L"
                    )
                  : e.z > s && e.y < s - 1
                  ? r.push(
                      "01D'",
                      n(e.y + 1, "B'"),
                      "01D",
                      n(e.y + 1, "F'"),
                      "01D'",
                      n(e.y + 1, "B"),
                      "01D",
                      n(e.y + 1, "F")
                    )
                  : e.z > s && e.y > s
                  ? r.push(
                      "01L",
                      "01D'",
                      n(o - e.y, "B'"),
                      "01D",
                      n(o - e.y, "F'"),
                      "01D'",
                      n(o - e.y, "B"),
                      "01D",
                      n(o - e.y, "F"),
                      "01L'"
                    )
                  : e.z < s - 1 &&
                    e.y > s &&
                    r.push(
                      "01L2",
                      "01D'",
                      n(o - e.y, "B'"),
                      "01D",
                      n(o - e.y, "F'"),
                      "01D'",
                      n(o - e.y, "B"),
                      "01D",
                      n(o - e.y, "F"),
                      "01L2"
                    )
                : r.push(
                    "01D'",
                    n(o - 1 - e.z + 1, "B'"),
                    "01D",
                    n(e.y + 1, "F'"),
                    "01D'",
                    n(o - 1 - e.z + 1, "B"),
                    "01D",
                    n(e.y + 1, "F")
                  );
              break;
            case "D":
              0 === t.x && t.y === s - 1 && t.z === s
                ? (r.push(n(e.y + 1, "F")),
                  r.push(" 01L2"),
                  r.push(n(e.y + 1, "F'")))
                : 0 === t.x && t.y === s - 1 && t.z === s - 1
                ? e.x === s && e.y === s
                  ? r.push("01L", n(s, "F'"), "01D'", n(s, "F"))
                  : r.push("01D")
                : 0 === t.x && t.y === s && t.z === s
                ? e.y === s - 1 && e.x === s - 1
                  ? r.push(n(s + 1, "F'"), "01D'", n(s + 1, "F"))
                  : r.push("01D")
                : 0 === t.x && t.y === s && t.z === s - 1
                ? e.y === s - 1 && e.x === s
                  ? r.push(
                      n(s + 1, "F'"),
                      "01D'",
                      n(s + 1, "F"),
                      "01D",
                      n(s + 1, "F'"),
                      "01D",
                      n(s + 1, "F")
                    )
                  : r.push("01D")
                : t.x === t.y ||
                  t.x === o - 1 - t.y ||
                  o - 1 - t.z === o - 1 - t.y ||
                  o - 1 - t.z === t.y
                ? e.x < s - 1 && e.y < s - 1
                  ? t.z < s - 1 && t.y < s - 1
                    ? r.push(
                        "01L'",
                        "01D'",
                        n(t.y + 1, "B'"),
                        "01D",
                        n(t.y + 1, "F'"),
                        "01D'",
                        n(t.y + 1, "B"),
                        "01D",
                        n(t.y + 1, "F"),
                        "01L"
                      )
                    : t.z > s && t.y < s - 1
                    ? r.push(
                        "01D'",
                        n(t.y + 1, "B'"),
                        "01D",
                        n(t.y + 1, "F'"),
                        "01D'",
                        n(t.y + 1, "B"),
                        "01D",
                        n(t.y + 1, "F")
                      )
                    : t.z > s && t.y > s
                    ? r.push(
                        "01L",
                        "01D'",
                        n(o - t.y, "B'"),
                        "01D",
                        n(o - t.y, "F'"),
                        "01D'",
                        n(o - t.y, "B"),
                        "01D",
                        n(o - t.y, "F"),
                        "01L'"
                      )
                    : t.z < s - 1 &&
                      t.y > s &&
                      r.push(
                        "01L2",
                        "01D'",
                        n(o - t.y, "B'"),
                        "01D",
                        n(o - t.y, "F'"),
                        "01D'",
                        n(o - t.y, "B"),
                        "01D",
                        n(o - t.y, "F"),
                        "01L2"
                      )
                  : r.push("01D")
                : e.y === t.y && e.x === o - 1 - t.z
                ? r.push(
                    "01D'",
                    n(e.x + 1, "B'"),
                    "01D",
                    n(e.y + 1, "F'"),
                    "01D'",
                    n(e.x + 1, "B"),
                    "01D",
                    n(e.y + 1, "F")
                  )
                : r.push("01D");
              break;
            case "R":
              0 === t.x && t.y === s - 1 && t.z === s
                ? (r.push(n(e.y + 1, "F2")),
                  r.push("01L2"),
                  r.push(n(e.y + 1, "F2")))
                : (0 === t.x && t.y === s - 1 && t.z === s - 1) ||
                  (0 === t.x && t.y === s && t.z === s - 1) ||
                  (0 === t.x && t.y === s && t.z === s)
                ? (r.push(n(e.y + 1, "F")),
                  r.push("01D2"),
                  r.push(n(e.y + 1, "F'")))
                : r.push(n(e.y + 1, "F"), "01D", n(e.y + 1, "F'"));
              break;
            default:
              console.log("Something broke");
          }
        else if (o % 2) {
          switch (c) {
            case "L":
              t.z >= s - 1 && t.z <= s + 1 && t.y >= s - 1 && t.y <= s + 1
                ? 0 === t.x && t.y === s - 1 && t.z === s + 1
                  ? r.push("01L")
                  : t.y === s - 1
                  ? (r.push(n(e.y + 1, "F'")),
                    s && a
                      ? r.push("01D'", n(e.y + 1, "F"))
                      : r.push("01D2", n(e.y + 1, "F")))
                  : t.y === s
                  ? (r.push(n(e.y + 1, "F'")),
                    r.push("01D'"),
                    r.push(n(e.y + 1, "F")))
                  : t.y === s + 1 &&
                    t.z === s + 1 &&
                    (r.push(n(e.y + 1, "F'")),
                    r.push("01D"),
                    r.push(n(e.y + 1, "F")))
                : t.z === t.y ||
                  t.z === o - 1 - t.y ||
                  o - 1 - t.z === o - 1 - t.y ||
                  o - 1 - t.z === t.y
                ? e.z < s - 1 && e.y < s - 1
                  ? r.push(
                      "01L'",
                      "01D'",
                      n(e.y + 1, "B'"),
                      "01D",
                      n(e.y + 1, "F'"),
                      "01D'",
                      n(e.y + 1, "B"),
                      "01D",
                      n(e.y + 1, "F"),
                      "01L"
                    )
                  : e.z > s && e.y < s - 1
                  ? r.push(
                      "01D'",
                      n(e.y + 1, "B'"),
                      "01D",
                      n(e.y + 1, "F'"),
                      "01D'",
                      n(e.y + 1, "B"),
                      "01D",
                      n(e.y + 1, "F")
                    )
                  : e.z > s && e.y > s
                  ? r.push(
                      "01L",
                      "01D'",
                      n(o - e.y, "B'"),
                      "01D",
                      n(o - e.y, "F'"),
                      "01D'",
                      n(o - e.y, "B"),
                      "01D",
                      n(o - e.y, "F"),
                      "01L'"
                    )
                  : e.z < s - 1 &&
                    e.y > s &&
                    r.push(
                      "01L2",
                      "01D'",
                      n(o - e.y, "B'"),
                      "01D",
                      n(o - e.y, "F'"),
                      "01D'",
                      n(o - e.y, "B"),
                      "01D",
                      n(o - e.y, "F"),
                      "01L2"
                    )
                : r.push(
                    "01D'",
                    n(o - 1 - e.z + 1, "B'"),
                    "01D",
                    n(e.y + 1, "F'"),
                    "01D'",
                    n(o - 1 - e.z + 1, "B"),
                    "01D",
                    n(e.y + 1, "F")
                  );
              break;
            case "D":
              t.z >= s - 1 && t.z <= s + 1 && t.y >= s - 1 && t.y <= s + 1
                ? 0 === t.x && t.y === s - 1 && t.z === s + 1
                  ? r.push(n(e.y + 1, "F"), "01L2", n(e.y + 1, "F'"))
                  : t.y === s - 1
                  ? e.x < s + 1 || e.y === s - 1
                    ? r.push("01D")
                    : r.push("01L", n(e.y + 1, "F"), "01L'", n(e.y + 1, "F'"))
                  : t.y === s
                  ? t.z === s + 1
                    ? e.y !== s - 1
                      ? r.push("01D")
                      : (r.push(n(s + 1, "F'")),
                        r.push("01D'"),
                        r.push(n(s + 1, "F")))
                    : t.z === s - 1 &&
                      (e.y !== s + 1
                        ? r.push("01D")
                        : (r.push(n(s + 1, "F'")),
                          r.push(n(e.y + 1, "F")),
                          r.push("01D"),
                          r.push(n(e.y + 1, "F'")),
                          r.push("01D'"),
                          r.push(n(s + 1, "F"))))
                  : t.y === s + 1 &&
                    (t.z === s + 1
                      ? e.x === s - 1 && e.y === s - 1
                        ? (r.push(n(s + 1 + 1, "F'")),
                          r.push("01D'"),
                          r.push(n(s + 1 + 1, "F")))
                        : r.push("01D")
                      : t.z === s
                      ? e.x === s + 1
                        ? (r.push(n(s + 1 + 1, "F2")),
                          r.push("01R'"),
                          r.push(n(s + 1 + 1, "F")),
                          r.push("01D"),
                          r.push(n(s + 1 + 1, "F")))
                        : r.push("01D'")
                      : t.z === s - 1 &&
                        (e.x === s - 1 && e.y === s + 1
                          ? (r.push(n(s + 1 + 1, "F")),
                            r.push("01L'"),
                            r.push(n(s + 1 + 1, "F'")),
                            r.push("01L"),
                            r.push("01D2"),
                            r.push(n(s + 1 + 1, "F'")),
                            r.push("01D2"),
                            r.push(n(s + 1 + 1, "F")))
                          : r.push("01D")))
                : t.z === t.y ||
                  t.z === o - 1 - t.y ||
                  o - 1 - t.z === o - 1 - t.y ||
                  o - 1 - t.z === t.y
                ? e.x < s - 1 && e.y < s - 1
                  ? t.z < s - 1 && t.y < s - 1
                    ? r.push(
                        "01L'",
                        "01D'",
                        n(t.y + 1, "B'"),
                        "01D",
                        n(t.y + 1, "F'"),
                        "01D'",
                        n(t.y + 1, "B"),
                        "01D",
                        n(t.y + 1, "F"),
                        "01L"
                      )
                    : t.z > s && t.y < s - 1
                    ? r.push(
                        "01D'",
                        n(t.y + 1, "B'"),
                        "01D",
                        n(t.y + 1, "F'"),
                        "01D'",
                        n(t.y + 1, "B"),
                        "01D",
                        n(t.y + 1, "F")
                      )
                    : t.z > s && t.y > s
                    ? r.push(
                        "01L",
                        "01D'",
                        n(o - t.y, "B'"),
                        "01D",
                        n(o - t.y, "F'"),
                        "01D'",
                        n(o - t.y, "B"),
                        "01D",
                        n(o - t.y, "F"),
                        "01L'"
                      )
                    : t.z < s - 1 &&
                      t.y > s &&
                      r.push(
                        "01L2",
                        "01D'",
                        n(o - t.y, "B'"),
                        "01D",
                        n(o - t.y, "F'"),
                        "01D'",
                        n(o - t.y, "B"),
                        "01D",
                        n(o - t.y, "F"),
                        "01L2"
                      )
                  : r.push("01D")
                : e.y === t.y && e.x === o - 1 - t.z
                ? r.push(
                    "01D'",
                    n(e.x + 1, "B'"),
                    "01D",
                    n(e.y + 1, "F'"),
                    "01D'",
                    n(e.x + 1, "B"),
                    "01D",
                    n(e.y + 1, "F")
                  )
                : r.push("01D");
              break;
            case "R":
              t.z >= s - 1 && t.z <= s + 1 && t.y >= s - 1 && t.y <= s + 1
                ? 0 === t.x && t.y === s - 1 && t.z === s + 1
                  ? r.push(n(e.y + 1, "F2"), "01L2", n(e.y + 1, "F2"))
                  : t.y === s - 1
                  ? e.z !== s + 1 || e.y === s - 1
                    ? r.push("01R")
                    : r.push("01L", n(e.y + 1, "F2"), "01L'", n(e.y + 1, "F2"))
                  : t.y === s
                  ? (r.push(n(e.y + 1, "F")),
                    r.push("01D"),
                    r.push(n(e.y + 1, "F'")))
                  : t.y === s + 1 &&
                    (t.z === s + 1
                      ? e.y === s - 1 && e.z === s - 1
                        ? (r.push(n(s + 1 + 1, "F2")),
                          r.push("01R'"),
                          r.push(n(s + 1 + 1, "F2")))
                        : r.push("01R")
                      : t.z === s
                      ? (r.push(n(e.y + 1, "F")),
                        r.push("01D"),
                        r.push(n(e.y + 1, "F'")))
                      : t.z === s - 1 &&
                        (r.push(n(e.y + 1, "F")),
                        r.push("01D2"),
                        r.push(n(e.y + 1, "F'"))))
                : r.push(n(e.y + 1, "F"), "01D", n(e.y + 1, "F'"));
              break;
            default:
              return console.log("Something broke"), "";
          }
          return r.join(" ");
        }
        return r.join(" ");
      };
    },
    137: function (e, t) {
      function n(e, t, n) {
        return e + (t < 10 ? "0" : "") + t + n;
      }
      e.exports = function (e, t, o, s) {
        var a = o - 1;
        return 0 === e.y
          ? (function (e, t, o) {
              return e.z === t
                ? ""
                    .concat(n("", e.x + 1, "L'"), " 01B' 01R 01B ")
                    .concat(n("", e.x + 1, "L"), " 01R'")
                : e.x === t
                ? ""
                    .concat(n("", e.z + 1, "D"), " 01B' 01D 01B ")
                    .concat(n("", e.z + 1, "D'"), " 01D'")
                : e.z === o
                ? ""
                    .concat(n("", e.x + 1, "L"), " 01B' 01L 01B ")
                    .concat(n("", e.x + 1, "L'"), " 01L'")
                : e.x === o
                ? ""
                    .concat(n("", e.z + 1, "D'"), " 01B' 01U 01B ")
                    .concat(n("", e.z + 1, "D"), " 01U'")
                : void 0;
            })(e, a, 0)
          : e.y > 0 && e.y < a
          ? (function (e, t, n, o) {
              return e.x === t && e.z === t
                ? 1 === o
                  ? "01U' 01B 01U"
                  : "01R 01B 01R'"
                : e.x === n && e.z === t
                ? 1 === o
                  ? "01U 01B 01U'"
                  : "01L' 01B 01L"
                : e.x === t && e.z === n
                ? 5 === o
                  ? "01D 01B 01D'"
                  : "01R' 01B 01R"
                : e.x === n && e.z === n
                ? 1 === o
                  ? "01D' 01B 01U"
                  : "01L 01B 01L'"
                : void 0;
            })(e, a, 0, s)
          : e.y === a && 3 === s
          ? (function (e, t, n) {
              return e.z === t
                ? "01U 01R 01B2 01R' 01U' 01B'"
                : e.x === t
                ? "01R 01D 01B2 01D' 01R' 01B'"
                : e.z === n
                ? "01D 01L 01B2 01L' 01D' 01B'"
                : e.x === n
                ? "01L 01U 01B2 01U' 01L' 01B'"
                : void 0;
            })(e, a, 0)
          : e.z === t.z && e.x === t.x
          ? (function (e, t, o, s) {
              return e.z === o && t.z === o
                ? ""
                    .concat(n("", e.x + 1, "L"), " 01F 01R' 01F' ")
                    .concat(n("", e.x + 1, "L'"), " 01F 01R 01F'")
                : e.x === o && t.x === o
                ? ""
                    .concat(n("", e.z + 1, "D'"), " 01F 01D' 01F' ")
                    .concat(n("", e.z + 1, "D"), " 01F 01D 01F'")
                : e.z === s && t.z === s
                ? ""
                    .concat(n("", e.x + 1, "L'"), " 01F 01L' 01F' ")
                    .concat(n("", e.x + 1, "L"), " 01F 01L 01F'")
                : e.x === s && t.x === s
                ? ""
                    .concat(n("", e.z + 1, "D"), " 01F 01U' 01F' ")
                    .concat(n("", e.z + 1, "D'"), " 01F 01U 01F'")
                : "";
            })(e, t, a, 0)
          : "01B";
      };
    },
    138: function (e, t) {
      function n(e, t, n) {
        return e + (t < 10 ? "0" : "") + t + n;
      }
      e.exports = function (e, t, o, s) {
        var a = o - 1,
          r = "";
        if (t.z === a)
          e.y < a && e.z === a && e.x === a
            ? (r =
                2 === s
                  ? "01L' 01B 01L "
                      .concat(n("", e.y + 1, "F'"), " 01L' 01B 01L 01B2 ")
                      .concat(n("", e.y + 1, "F"))
                  : "01R 01B 01R' 01B' 01U' 01B 01U")
            : e.z === t.z && e.y === t.y
            ? (r = "01L' 01B 01L "
                .concat(n("", o - e.x, "F'"), " 01L' 01B 01L 01B2 ")
                .concat(n("", o - e.x, "F")))
            : e.y === a && e.z !== a
            ? (r = "01U' 01B 01U")
            : e.y !== a &&
              (e.z === a && 0 === e.x
                ? (r = "01L' 01B' 01L 01B")
                : 0 === e.z && 0 === e.x
                ? (r = "01L 01B' 01L' 01B")
                : 0 === e.z && e.x === a && (r = "01R' 01B 01R 01B'"));
        else if (t.x === a)
          e.y < a && 0 === e.z && e.x === a
            ? (r =
                5 === s
                  ? "01U' 01B 01U "
                      .concat(n("", e.y + 1, "F'"), " 01U' 01B 01U 01B2 ")
                      .concat(n("", e.y + 1, "F"), " 01R' 01B2 01R")
                  : "01D 01B 01D' 01B' 01R' 01B 01R2 01B' 01R'")
            : e.x === t.x && e.y === t.y
            ? (r = "01U' 01B 01U "
                .concat(n("", e.z + 1, "F'"), " 01U' 01B 01U 01B2 ")
                .concat(n("", e.z + 1, "F"), " 01R' 01B2 01R"))
            : e.y === a
            ? 0 === e.z
              ? (r = "01R' 01B 01R2 01B' 01R'")
              : 0 === e.x && (r = "01R' 01B2 01R2 01B2 01R'")
            : e.y !== a &&
              (e.x === a && e.z === a
                ? (r = "01B 01R 01B 01R' 01B2")
                : 0 === e.x && e.z === a
                ? (r = "01L' 01B' 01L 01B")
                : 0 === e.x && 0 === e.z && (r = "01D' 01B 01D 01B'"));
        else if (0 === t.z)
          e.y < a && 0 === e.z && 0 === e.x
            ? (r =
                4 === s
                  ? "01R' 01B 01R "
                      .concat(n("", e.y + 1, "F'"), " 01R' 01B 01R 01B2 ")
                      .concat(n("", e.y + 1, "F"), " 01D 01U' 01B2 01D' 01U")
                  : "01L 01B 01L' 01B' 01D' 01B 01D2 01B' 01D' 01B' 01R' 01B' 01R 01B2")
            : e.z === t.z && e.y === t.y
            ? (r = "01R' 01B 01R "
                .concat(n("", e.x + 1, "F'"), " 01R' 01B 01R 01B2 ")
                .concat(n("", e.x + 1, "F"), " 01D 01U' 01B2 01D' 01U"))
            : e.y === a
            ? (r = "01D' 01B 01D2 01B' 01D'")
            : e.y < a && (r = "01D 01R 01U 01B 01U' 01R' 01D'");
        else if (0 === t.x) {
          var c = "01R 01B' 01R' 01B 01U 01B 01U' 01B'",
            i = "01D' 01B 01D "
              .concat(n("", e.y + 1, "F'"), " 01D' 01B 01D 01B2 ")
              .concat(n("", e.y + 1, "F"), " 01L 01R' 01B2 01R 01L'"),
            l = "01B 01U 01B' 01U' 01B' 01R 01B 01R'",
            u =
              "01R 01B 01R' 01B' 01U' 01B 01U2 01B' 01U' 01B' 01L' 01B' 01L 01B2";
          e.y < a && e.z === a && e.x === a
            ? (r =
                2 === s
                  ? "".concat(c, " ").concat(i, " ").concat(l)
                  : "".concat(u))
            : e.y < a && e.z === a && 0 === e.x
            ? (r =
                1 === s
                  ? ""
                      .concat(n("", o - 1, "f"), " ")
                      .concat(c, " ")
                      .concat(i, " ")
                      .concat(l, " ")
                      .concat(n("", o - 1, "f'"))
                  : ""
                      .concat(n("", o - 1, "f"), " ")
                      .concat(u, " ")
                      .concat(n("", o - 1, "f'")))
            : e.y < a && 0 === e.z && 0 === e.x
            ? (r =
                4 === s
                  ? ""
                      .concat(n("", o - 1, "f2"), " ")
                      .concat(c, " ")
                      .concat(i, " ")
                      .concat(l, " ")
                      .concat(n("", o - 1, "f2"))
                  : ""
                      .concat(n("", o - 1, "f2"), " ")
                      .concat(u, " ")
                      .concat(n("", o - 1, "f2")))
            : e.y < a && 0 === e.z && e.x === a
            ? (r =
                5 === s
                  ? ""
                      .concat(n("", o - 1, "f'"), " ")
                      .concat(c, " ")
                      .concat(i, " ")
                      .concat(l, " ")
                      .concat(n("", o - 1, "f"))
                  : ""
                      .concat(n("", o - 1, "f'"), " ")
                      .concat(u, " ")
                      .concat(n("", o - 1, "f")))
            : e.x === t.x &&
              e.y === t.y &&
              (r = ""
                .concat(c, " 01D' 01B 01D ")
                .concat(n("", o - e.z, "F'"), " 01D' 01B 01D 01B2 ")
                .concat(
                  n("", o - e.z, "F"),
                  " 01L 01R' 01B2 01L' 01R 01L 01D 01R 01B 01R' 01D' 01L'"
                ));
        }
        return r;
      };
    },
    139: function (e, t) {
      function n(e, t) {
        return (e < 10 ? "0" : "") + e + t;
      }
      e.exports = function (e, t, o) {
        var s,
          a = o - 1,
          r = Math.floor(o / 2),
          c = [],
          i = 0 === t.x && t.z === a,
          l = t.x === a && t.z === a,
          u = t.x === a && 0 === t.z,
          h = [
            n(r + 1, "B'"),
            "01R",
            "01B",
            "01R'",
            "01U",
            "01R'",
            "01U'",
            "01R",
            n(r + 1, "B"),
          ],
          p = [
            n(r + 1, "B'"),
            "01D",
            "01B",
            "01D'",
            "01R",
            "01D'",
            "01R'",
            "01D",
            n(r + 1, "B"),
          ],
          d = [
            n(r + 1, "B'"),
            "01L",
            "01B",
            "01L'",
            "01D",
            "01L'",
            "01D'",
            "01L",
            n(r + 1, "B"),
          ],
          v = [
            n(r, "b2"),
            "01L2",
            "01D2",
            n(r, "b2"),
            "01D2",
            "01L2",
            n(r, "b2"),
            "01D2",
          ],
          b = [
            n(r, "f"),
            "01L2",
            n(r, "f"),
            "01L2",
            n(r, "f'"),
            "01L2",
            n(r, "f"),
            "01L2",
            n(r, "b'"),
            "01L2",
            n(r, "f"),
            "01L2",
            n(r, "f'"),
            "01L2",
            n(o, "f'"),
            n(r, "f'"),
            "01L2",
            n(r, "f'"),
            "01L2",
            n(r + 1, "F"),
            "01L'",
            "01B",
            "01D",
          ],
          g = function (e) {
            return [
              "01F",
              n(e, "F"),
              "01R",
              "01U'",
              "01B",
              "01R'",
              "01U",
              "01F'",
              n(e, "F'"),
            ];
          },
          j = function (e) {
            return [
              n(e, "B'"),
              "01B'",
              "01R",
              "01U'",
              "01B",
              "01R'",
              "01U",
              n(e, "B"),
              "01B",
            ];
          },
          y = function (e) {
            return [
              "01F",
              n(e, "F"),
              "01D",
              "01R'",
              "01B",
              "01D'",
              "01R",
              "01F'",
              n(e, "F'"),
            ];
          },
          m = function (e) {
            return [
              n(e, "B'"),
              "01B'",
              "01D",
              "01R'",
              "01B",
              "01D'",
              "01R",
              n(e, "B"),
              "01B",
            ];
          },
          f = function (e) {
            return [
              "01F",
              n(e, "F"),
              "01L",
              "01D'",
              "01B",
              "01L'",
              "01D",
              "01F'",
              n(e, "F'"),
            ];
          },
          x = function (e) {
            return [
              n(e, "B'"),
              "01B'",
              "01L",
              "01D'",
              "01B",
              "01L'",
              "01D",
              n(e, "B"),
              "01B",
            ];
          };
        return (
          o > 4 && o % 2 && e.y === r
            ? (c = i
                ? 0 === e.x && 0 === e.z
                  ? [n(r + 1, "F'"), "01D2", n(r + 1, "F")]
                  : e.x === a && 0 === e.z
                  ? ["01D2"]
                  : e.x === a && e.z === a
                  ? [n(r + 1, "F"), "01R2", n(r + 1, "F'")]
                  : h
                : l
                ? 0 === e.x && 0 === e.z
                  ? ["01D2"]
                  : e.x === a && 0 === e.z
                  ? [n(r + 1, "F"), "01D2", n(r + 1, "F'")]
                  : p
                : u
                ? e.x === a && 0 === e.z
                  ? d
                  : v
                : b)
            : i
            ? 0 === e.x && e.z === a
              ? (c = e.y >= r ? j(o - e.y) : g(e.y + 1))
              : e.x === a && e.z === a
              ? (c =
                  e.y === t.y
                    ? ["01R", "01U'", "01B", "01R'", "01U"]
                    : e.y >= r
                    ? g(o - e.y)
                    : j(e.y + 1))
              : 0 === e.x && 0 === e.z
              ? c.push("01D2", "01R2")
              : c.push("01R2")
            : l
            ? e.x === a && e.z === a
              ? (c = e.y >= r ? m(o - e.y) : y(e.y + 1))
              : e.x === a && 0 === e.z
              ? (c =
                  e.y === t.y
                    ? ["01D", "01R'", "01B", "01D'", "01R"]
                    : e.y >= r
                    ? y(o - e.y)
                    : m(e.y + 1))
              : c.push("01D2")
            : u
            ? e.x === a && 0 === e.z
              ? (c = e.y === a - 1 ? x(o - e.y) : f(e.y + 1))
              : 0 === e.x &&
                0 === e.z &&
                (c =
                  e.y === t.y
                    ? ["01L", "01D'", "01B", "01L'", "01D"]
                    : e.y === a - 1
                    ? f(o - e.y)
                    : x(e.y + 1))
            : (c = [
                n((s = e.y + 1), "B'"),
                "01D2",
                n(s, "F"),
                "01L2",
                n(s, "F'"),
                "01L2",
                n(s, "B2"),
                "01D2",
                n(s, "B"),
                "01D2",
                n(s, "B'"),
                "01D2",
                "01L2",
                n(s, "B2"),
                "01L2",
              ]),
          c.join(" ")
        );
      };
    },
    149: function (e, t, n) {},
    150: function (e, t, n) {},
    156: function (e, t, n) {},
    213: function (e, t, n) {},
    214: function (e, t, n) {},
    215: function (e, t, n) {},
    216: function (e, t, n) {},
    221: function (e, t, n) {},
    228: function (e, t, n) {
      "use strict";
      n.r(t);
      var o = n(0),
        s = n(2),
        a = n.n(s),
        r = n(13),
        c = n.n(r),
        i = (n(149), n(34)),
        l = n(5),
        u = n(47),
        h = n(3),
        p = n(16),
        d = n(20),
        v = n(44),
        b = n(19),
        g = n(18),
        j = (n(150), n(143)),
        y = n(232),
        m = (n(151), n(117)),
        f = function (e) {
          var t = [];

          function n() {
            setTimeout(function () {
              window.location.reload();
            }, 50);
          }
          for (var s = 2; s <= 16; s++)
            t.push(
              Object(o.jsxs)(
                j.a.Item,
                {
                  href: "/rubiks-cube/#id=".concat(s),
                  onClick: n,
                  children: [s, " X ", s],
                },
                s
              )
            );
          return Object(o.jsxs)("nav", {
            className: "navbar navbar-dark fixed-top",
            children: [
              Object(o.jsx)("ul", {
                className: "nav nav-justified mr-auto",
                children: Object(o.jsxs)("li", {
                  className: "nav-item nav-fix-for-edge",
                  children: [
                    Object(o.jsx)("p", {
                      className: "navbar-brand",
                      children: Object(o.jsxs)("a", {
                        href: "/",
                        children: ["Rubikverse"],
                      }),
                    }),
                    Object(o.jsx)("div", {
                      className: "settingsDropDown",
                      children: Object(o.jsx)(y.a, {
                        className: "settings",
                        "aria-label": "settings",
                        id: "settings",
                        title: Object(o.jsx)("i", {
                          className: "settingIcon",
                          children: "Settings",
                        }),
                        children: Object(o.jsxs)("ul", {
                          children: [
                            Object(o.jsxs)("li", {
                              className: "settingsDropDownItem",
                              children: [
                                Object(o.jsx)("div", {
                                  className: "checkbox-inline",
                                  children: Object(o.jsx)("input", {
                                    type: "checkbox",
                                    "data-toggle": "toggle",
                                    onClick: function () {
                                      return e.changeSettings(
                                        "displayMoveInput"
                                      );
                                    },
                                  }),
                                }),
                                "Move Input",
                              ],
                            }),
                            Object(o.jsxs)("li", {
                              className: "settingsDropDownItem",
                              onClick: function () {
                                return e.changeSettings("displayHints");
                              },
                              children: [
                                Object(o.jsx)("div", {
                                  className: "checkbox-inline",
                                  children: Object(o.jsx)("input", {
                                    type: "checkbox",
                                    defaultChecked: !0,
                                    "data-toggle": "toggle",
                                    onClick: function () {
                                      return e.changeSettings("displayHints");
                                    },
                                  }),
                                }),
                                "Move Hints",
                              ],
                            }),
                          ],
                        }),
                      }),
                    }),
                    Object(o.jsx)("div", {
                      className: "cubesDropdown",
                      children: Object(o.jsx)(y.a, {
                        title: "Cubes Option ",
                        className: "cubes",
                        children: t,
                      }),
                    }),
                  ],
                }),
              }),
              Object(o.jsxs)("div", {
                style: {
                  float: "right",
                  height: "100%",
                },
                children: [
                  " ",
                  " ",
                  Object(o.jsx)("button", {
                    id: "fullscreenBtn",
                    value: "true",
                    children: "FullScreen",
                  }),
                ],
              }),
            ],
          });
        },
        x = (n(155), n(156), n(95)),
        S = function (e) {
          return Object(o.jsx)("div", {
            className: "sliderDiv",
            children: e.isDisabled
              ? Object(o.jsx)(x.a, {
                  defaultValue: 40,
                  value: e.speed,
                  min: e.speed,
                  max: e.speed,
                  step: 10,
                })
              : Object(o.jsx)(x.a, {
                  defaultValue: 40,
                  value: e.speed,
                  min: 0,
                  max: 70,
                  step: 10,
                  onChange: e.onSliderChange,
                }),
          });
        },
        F = n(124),
        O = n.n(F),
        D = function (e) {
          return Object(o.jsx)("div", {
            style: {
              position: "absolute",
              zIndex: "99",
            },
            children: Object(o.jsx)(O.a, {
              handle: ".handle",
              defaultPosition: {
                x: 0,
                y: 150,
              },
              position: null,
              grid: [50, 50],
              scale: 1,
              onStart: e.handleStart,
              onDrag: e.handleDrag,
              onStop: e.handleStop,
              children: Object(o.jsxs)("div", {
                children: [
                  Object(o.jsx)("div", {
                    className: "handle",
                    style: {
                      color: "grey",
                    },
                    children: "Drag from here",
                  }),
                  Object(o.jsxs)("div", {
                    children: [
                      Object(o.jsx)("input", {
                        placeholder: "type moves here",
                        id: "moveInput",
                        onKeyDown: function (t) {
                          "Enter" === t.key &&
                            e.algorithm(
                              document.getElementById("moveInput").value,
                              "Custom"
                            ),
                            t.stopPropagation();
                        },
                        style: {
                          borderRadius: "4px",
                          margin: "1px",
                          border: "1.5px solid #aed5ff",
                          width: "200px",
                        },
                      }),
                      Object(o.jsx)("button", {
                        id: "moveSubmit",
                        onClick: function () {
                          return e.algorithm(
                            document.getElementById("moveInput").value,
                            "Custom"
                          );
                        },
                        children: "Enter",
                      }),
                    ],
                  }),
                ],
              }),
            }),
          });
        },
        k =
          (n(213),
          function (e) {
            return Object(o.jsxs)("div", {
              className:
                window.innerWidth > 900 && window.innerHeight > 580
                  ? "sideSolverInfo"
                  : "solverInfo",
              children: [
                Object(o.jsxs)("div", {
                  className: "setLengthWrapper",
                  children: [
                    "Total Moves: ",
                    Object(o.jsx)("div", {
                      className: "setLength",
                      children: e.solvedSetLength,
                    }),
                  ],
                }),
                Object(o.jsxs)("div", {
                  className: "setLengthWrapper",
                  children: [
                    "Current Move: ",
                    Object(o.jsx)("div", {
                      className: "setLength",
                      children: e.prevSetLength,
                    }),
                  ],
                }),
              ],
            });
          }),
        B =
          (n(214),
          function (e) {
            return Object(o.jsx)("div", {
              className:
                window.innerWidth > 900 && window.innerHeight > 580
                  ? "sideSolverInfo"
                  : "solverInfo",
              children: Object(o.jsxs)("div", {
                className: "setLengthWrapper",
                children: [
                  "Current Color: ",
                  Object(o.jsx)("div", {
                    className: "setLength",
                    style: {
                      backgroundColor: e.colorPicked,
                    },
                  }),
                ],
              }),
            });
          }),
        R = (n(111), n(215), n(216), []),
        w = [],
        L = [],
        M = [],
        C = [],
        U = 0;

      function z(e) {
        switch (e) {
          case "F":
            return {
              bgc: "white",
              color: "black",
            };
          case "U":
            return {
              bgc: "blue",
              color: "white",
            };
          case "R":
            return {
              bgc: "red",
              color: "white",
            };
          case "B":
            return {
              bgc: "yellow",
              color: "black",
            };
          case "L":
            return {
              bgc: "orange",
              color: "black",
            };
          case "D":
            return {
              bgc: "green",
              color: "white",
            };
        }
      }
      var P = function (e) {
          return (
            (R = []),
            (w = []),
            (L = []),
            (M = []),
            (C = []),
            Object(o.jsxs)("div", {
              id: "controlsDiv",
              children: [
                e.size % 2
                  ? Object(o.jsx)("div", {
                      className: "centerMoves",
                      style: {
                        marginRight: "5px",
                      },
                      children: Object(o.jsxs)("div", {
                        className: "centerLayerColumns",
                        children: [
                          e.generatedButtons.center.forEach(function (t) {
                            R.push(
                              Object(o.jsx)(
                                "div",
                                {
                                  className: "moveBtn",
                                  onMouseDown: function () {
                                    return e.rotateOneFace(
                                      t.clockwise.name,
                                      t.clockwise.data
                                    );
                                  },
                                  style: {
                                    position: "relative",
                                    left: "0px",
                                    backgroundColor: "magenta",
                                    width: "45px",
                                  },
                                  onMouseEnter: function (n) {
                                    return e.mouseEnter(
                                      t.clockwise.name,
                                      t.clockwise.data,
                                      n
                                    );
                                  },
                                  onMouseLeave: function () {
                                    return e.mouseLeave();
                                  },
                                  children: t.clockwise.name,
                                },
                                U
                              )
                            ),
                              (U += 1),
                              R.push(
                                Object(o.jsx)(
                                  "div",
                                  {
                                    className: "moveBtn",
                                    onMouseDown: function () {
                                      return e.rotateOneFace(
                                        t.counter.name,
                                        t.counter.data
                                      );
                                    },
                                    style: {
                                      position: "relative",
                                      left: "0px",
                                      backgroundColor: "magenta",
                                      width: "45px",
                                    },
                                    onMouseEnter: function () {
                                      return e.mouseEnter(
                                        t.counter.name,
                                        t.counter.data
                                      );
                                    },
                                    onMouseLeave: function () {
                                      return e.mouseLeave();
                                    },
                                    children: t.counter.name,
                                  },
                                  U
                                )
                              ),
                              (U += 1);
                          }),
                          R,
                        ],
                      }),
                    })
                  : "",
                Object(o.jsxs)("div", {
                  className: "singleLayerMoves",
                  style: {
                    marginRight: "5px",
                  },
                  children: [
                    e.generatedButtons.single.forEach(function (t) {
                      var n = z(t.counter.face);
                      "F" === t.counter.face && w.push([], []);
                      var s = w.length - 2,
                        a = w.length - 1;
                      w[s].push(
                        Object(o.jsx)(
                          "div",
                          {
                            className: "moveBtn",
                            onMouseDown: function () {
                              return e.rotateOneFace(
                                t.counter.name,
                                t.counter.data
                              );
                            },
                            style: {
                              position: "relative",
                              left: "0px",
                              backgroundColor: n.bgc,
                              color: n.color,
                              width: "45px",
                            },
                            onMouseEnter: function () {
                              return e.mouseEnter(
                                t.counter.name,
                                t.counter.data
                              );
                            },
                            onMouseLeave: function () {
                              return e.mouseLeave();
                            },
                            children: t.counter.name,
                          },
                          U
                        )
                      ),
                        (U += 1),
                        w[a].push(
                          Object(o.jsx)(
                            "div",
                            {
                              className: "moveBtn",
                              onMouseDown: function () {
                                return e.rotateOneFace(
                                  t.clockwise.name,
                                  t.clockwise.data
                                );
                              },
                              style: {
                                position: "relative",
                                left: "0px",
                                backgroundColor: n.bgc,
                                color: n.color,
                                width: "45px",
                              },
                              onMouseEnter: function () {
                                return e.mouseEnter(
                                  t.clockwise.name,
                                  t.clockwise.data
                                );
                              },
                              onMouseLeave: function () {
                                return e.mouseLeave();
                              },
                              children: t.clockwise.name,
                            },
                            U
                          )
                        ),
                        (U += 1);
                    }),
                    w.forEach(function (e) {
                      (U += 1),
                        M.push(
                          Object(o.jsx)(
                            "div",
                            {
                              className: "singleLayerColumns",
                              children: e,
                            },
                            U
                          )
                        );
                    }),
                    M,
                  ],
                }),
                Object(o.jsxs)("div", {
                  className: "multiLayerMoves",
                  children: [
                    e.generatedButtons.multi.forEach(function (t) {
                      var n = z(t.counter.face);
                      "F" === t.counter.face && L.push([], []);
                      var s = L.length - 2,
                        a = L.length - 1;
                      L[s].push(
                        Object(o.jsx)(
                          "div",
                          {
                            className: "moveBtn",
                            onMouseDown: function () {
                              return e.rotateOneFace(
                                t.counter.name,
                                t.counter.data
                              );
                            },
                            style: {
                              position: "relative",
                              left: "0px",
                              backgroundColor: n.bgc,
                              color: n.color,
                              width: "45px",
                            },
                            onMouseEnter: function () {
                              return e.mouseEnter(
                                t.counter.name,
                                t.counter.data
                              );
                            },
                            onMouseLeave: function () {
                              return e.mouseLeave();
                            },
                            children: t.counter.name,
                          },
                          U
                        )
                      ),
                        (U += 1),
                        L[a].push(
                          Object(o.jsx)(
                            "div",
                            {
                              className: "moveBtn",
                              onMouseDown: function () {
                                return e.rotateOneFace(
                                  t.clockwise.name,
                                  t.clockwise.data
                                );
                              },
                              style: {
                                position: "relative",
                                left: "0px",
                                backgroundColor: n.bgc,
                                color: n.color,
                                width: "45px",
                              },
                              onMouseEnter: function () {
                                return e.mouseEnter(
                                  t.clockwise.name,
                                  t.clockwise.data
                                );
                              },
                              onMouseLeave: function () {
                                return e.mouseLeave();
                              },
                              children: t.clockwise.name,
                            },
                            U
                          )
                        ),
                        (U += 1);
                    }),
                    L.forEach(function (e) {
                      (U += 1),
                        C.push(
                          Object(o.jsx)(
                            "div",
                            {
                              className: "multiLayerColumns",
                              children: e,
                            },
                            U
                          )
                        );
                    }),
                    C,
                  ],
                }),
              ],
            })
          );
        },
        I = n(233),
        N = n(234),
        E =
          (n(91),
          "01R 01R 01L' 01D 01F 01F 01R' 01D' 01R' 01L 01U' 01D 01R 01D 01B 01B 01R' 01U 01D 01D"),
        A = "01U 01D' 01R 01L' 01F 01B' 01U 01D'",
        T = ce("BDF'B'DL2ULU'BD'RBRD'RL'FU2D"),
        q = ce("R L F B R L F B R L F B R2 B2 L2 R2 B2 L2".split(" ").join("")),
        X = ce("R2 U2 R2 U2 R2 U2 L2 D2 L2 D2 L2 D2 L2 R2".split(" ").join("")),
        V = ce("F U F R L2 B D' R D2 L D' B R2 L F U F".split(" ").join("")),
        W = ce(
          "U B2 R2 B2 L2 F2 R2 D' F2 L2 B F' L F2 D U' R2 F' L' R'"
            .split(" ")
            .join("")
        ),
        Z = ce("F R' U L F' L' F U' R U L' U' L F'".split(" ").join("")),
        Y = ce("L' B' D U R U' R' D2 R2 D L D' L' R' F U".split(" ").join("")),
        H = ce("U2 R2 L2 F2 B2 D2 L2 R2 F2 B2".split(" ").join("")),
        J = ce("U F B' L2 U2 L2 F' B U2 L2 U".split(" ").join("")),
        _ = ce(
          "L2 B2 D' B2 D L2 U R2 D R2 B U R' F2 R U' B' U'".split(" ").join("")
        ),
        G = ce(
          "R2 U2 L2 D B2 L2 B2 R2 D' U L' D F' U' R2 F' U B2 U2 R'"
            .split(" ")
            .join("")
        ),
        Q = ce(
          "L2 F2 D' L2 B2 D' U' R2 B2 U' L' B2 L D L B' D L' U"
            .split(" ")
            .join("")
        ),
        K = ce(
          "D' B2 F2 L2 U' F2 R2 D F2 U2 L' B R' U' L' F D' F L D2"
            .split(" ")
            .join("")
        ),
        $ = ce("U F R2 F' D' R U B2 U2 F' R2 F D B2 R B'".split(" ").join("")),
        ee = ce("D L' U R' B' R B U2 D B D' B' L U D'".split(" ").join("")),
        te = ce(
          "U L2 B2 R2 U R2 D' U L F' U L' D B' U L B' L R' U'"
            .split(" ")
            .join("")
        ),
        ne = ce(
          "U' D B R' F R B' L' F' B L F R' B' R F' U' D".split(" ").join("")
        ),
        oe = ce("U B2 D2 L B' L' U' L' B D2 B2".split(" ").join("")),
        se = ce("R L B F R L U' D' F' B' U D".split(" ").join("")),
        ae = ce("R2 U2 R2 U2 R2 U2".split(" ").join("")),
        re = ce(
          "R' F' U F2 U' F R' F2 D2 F2 D2 F2 D F2 R2 U2".split(" ").join("")
        );

      function ce(e) {
        return e
          .split("")
          .map(function (t, n) {
            return "'" !== t && "2" !== t
              ? " 01" + t
              : "2" === t
              ? " 01" + e[n - 1]
              : t;
          })
          .join("")
          .trim();
      }
      var ie = function (e, t, n, o) {
          var s = [];
          s.push({
            name: e,
            moves: t,
            worksFor: [],
          });
          for (var a = n; a <= o; a++) s[0].worksFor.push(a);
          return s;
        },
        le = function (e, t, n) {
          for (var o = [], s = 3; s <= 30; s++) {
            var a = e;
            "Cube x3" === e &&
              ((a = a.split("")).pop(), a.push(s), (a = a.join(""))),
              o.push({
                name: a,
                moves: ue(s, t, n),
                worksFor: [s],
              }),
              s < -1 &&
                o.push({
                  name: a + " (Inverse)",
                  moves: pe(s, t),
                  worksFor: [s],
                });
          }
          return o;
        },
        ue = function (e, t, n) {
          for (var o = [], s = 1; s <= Math.floor(e / 2); s++)
            n && s % 2 ? o.push(he(s, n)) : o.push(he(s, t));
          return o.join(" ");
        },
        he = function (e, t) {
          var n = [];
          return (
            e > 1
              ? t.split(" ").forEach(function (t) {
                  return n.push(ve(e, t.substring(2).toLowerCase()));
                })
              : t.split(" ").forEach(function (t) {
                  return n.push(ve(e, t.substring(2).toUpperCase()));
                }),
            n.join(" ")
          );
        },
        pe = function (e, t) {
          for (var n = [], o = 1; o <= Math.floor(e / 2); o++) n.push(de(o, t));
          return n.join(" ");
        },
        de = function (e, t) {
          var n = [];
          return (
            t.split(" ").forEach(function (t) {
              return n.push(ve(e, t.substring(2).toUpperCase()));
            }),
            n.join(" ")
          );
        };

      function ve(e, t) {
        return (e < 10 ? "0" : "") + e + t;
      }
      var be = [
          (function (e) {
            for (var t = [], n = 2; n <= 30; n++) t.push(n);
            return {
              name: e,
              worksFor: t,
            };
          })("None Selected"),
        ].concat(
          Object(h.a)(
            le(
              "Anaconda",
              "01L 01U 01B' 01U' 01R 01L' 01B 01R' 01F 01B' 01D 01R 01D' 01F'"
            )
          ),
          Object(h.a)(le("Cross", E)),
          Object(h.a)(
            ie(
              "Cube x2",
              "01F 01L 01F 01U' 01R 01U 01F 01F 01L 01L 01U' 01L' 01B 01D' 01B' 01L 01L 01U",
              2,
              4
            )
          ),
          Object(h.a)(
            le(
              "Cube x3",
              "01U' 01L' 01U' 01F' 01R 01R 01B' 01R 01F 01U 01B 01B 01U 01B' 01L 01U' 01F 01U 01R 01F'"
            )
          ),
          Object(h.a)(
            ie(
              "Cube x4 Twisted",
              "01B' 02R 02R 02L 02L 01U 01U 02R 02R 02L 02L 01B 01F 01F 01R 01U' 01R 01U 01R 01R 01U 01R 01R 01F' 01U 01F' 01U 02U 01L 02L 01U' 02U' 01F 01F 02F 02F 01D 02D 01R' 02R' 01U 02U 01F 02F 01D 01D 02D 02D 01R 01R 02R 02R",
              4,
              4
            )
          ),
          Object(h.a)(
            le(
              "Checkerboard",
              "01U 01U 01D 01D 01R 01R 01L 01L 01F 01F 01B 01B"
            )
          ),
          Object(h.a)(
            le(
              "Checkerboard1",
              "01U' 01R 01R 01L 01L 01F 01F 01B 01B 01U' 01R 01L 01F 01B' 01U 01F 01F 01D 01D 01R 01R 01L 01L 01F 01F 01U 01U 01F 01F 01U' 01F 01F"
            )
          ),
          Object(h.a)(le("Checkerboard In Cube", T)),
          Object(h.a)(le("Corner Pyramid", ne)),
          Object(h.a)(le("Displaced Motif", _)),
          Object(h.a)(le("Exchanged Duck Feet", $)),
          Object(h.a)(le("Four Crosses", H)),
          Object(h.a)(le("Gift Box", W)),
          Object(h.a)(le("Perpendicular Lines", X)),
          Object(h.a)(le("Pyraminx", ee)),
          Object(h.a)(
            le(
              "Python",
              "01F 01F 01R' 01B' 01U 01R' 01L 01F' 01L 01F' 01B 01D' 01R 01B 01L 01L"
            )
          ),
          Object(h.a)(
            ie(
              "Rings",
              "02R 03R 04R 05R 02B' 03B' 04B' 01L 01L 02F 02B 01L 01L 02B' 02D' 03D' 04D' 05D' 02F' 01L 01L 02F 02B 01L 01L 02B' 02D 02D 03D 03D 04D 04D 05D 05D 03R 04R 01U' 03R' 04R' 02D' 03D' 04D' 05D' 03R 04R 01U 02R' 03R' 04R' 05R' 03F' 04F' 03R' 04R' 03F 04F 02F 03F 04F 05F 02L 02L 03L 03L 04L 04L 02F 02F 03R 03R 04R 04R 02B 02B 03B 03B 04B 04B 02L 02L",
              6,
              6
            )
          ),
          Object(h.a)(le("Six Spots", A)),
          Object(h.a)(le("Six Spots + Cross", A, E)),
          Object(h.a)(le("Six-Two-One", oe)),
          Object(h.a)(ie("Snake Eyes", ae, 3, 3)),
          Object(h.a)(le("Spiral", Y)),
          Object(h.a)(le("Staircase", Q)),
          Object(h.a)(le("Twin Peaks", te)),
          Object(h.a)(le("Twister", Z)),
          Object(h.a)(le("Union Jack", J)),
          Object(h.a)(le("Vertical Stripes", V)),
          Object(h.a)(le("Viaduct", G)),
          Object(h.a)(le("Weirdo", re)),
          Object(h.a)(ie("Wire", q, 3, 3)),
          Object(h.a)(le("Wrapped 2x2", K)),
          Object(h.a)(le("Yin Yang", se))
        ),
        ge = n(70),
        je = n.n(ge),
        ye = n(125),
        me = n.n(ye),
        fe = n(126),
        xe = n.n(fe),
        Se = n(127),
        Fe = n.n(Se),
        Oe = n(128),
        De = n.n(Oe),
        ke = n(129),
        Be = n.n(ke),
        Re = n(130),
        we = n.n(Re),
        Le = n(131),
        Me = n.n(Le),
        Ce = n(132),
        Ue = n.n(Ce),
        ze = n(133),
        Pe = n.n(ze),
        Ie = n(134),
        Ne = n.n(Ie),
        Ee = n(135),
        Ae = n.n(Ee),
        Te = n(136),
        qe = n.n(Te);
      var Xe = function (e, t, n) {
        var o = e,
          s = Math.floor(n / ((o - 2) * (o - 2))),
          a = {
            x: t[6],
            y: t[7],
            z: t[8],
          },
          r = {
            x: t[9],
            y: t[10],
            z: t[11],
          };
        return a.x !== r.x || a.y !== r.y || a.z !== r.z
          ? (function (e) {
              switch (e) {
                case 0:
                  return Ue()(a, r, o, n);
                case 1:
                  return Pe()(a, r, o, n);
                case 2:
                  return Ne()(a, r, o);
                case 3:
                  return qe()(a, r, o);
                case 4:
                  return Ae()(a, r, o, n);
                default:
                  console.log("Should never reach here");
              }
            })(s)
          : "";
      };
      var Ve = function (e, t, n, o, s) {
          if (2 === t)
            return {
              solveState: 1,
            };
          var a = (t - 2) * (t - 2) * 5,
            r = {},
            c = "";
          if (3 === t) {
            (0 === e[4][7] && 2 === e[10][8]) ||
              (2 === e[4][8]
                ? 0 === e[12][6]
                  ? (c += "02R'")
                  : (c += "02U'")
                : 0 === e[4][6]
                ? 2 === e[10][8]
                  ? (c += "02U'")
                  : (c += "02R'")
                : 2 === e[4][6]
                ? 2 === e[10][8]
                  ? (c += "02U")
                  : (c += "02R'")
                : 0 === e[4][8]
                ? 0 === e[12][6]
                  ? (c += "02R")
                  : (c += "02U'")
                : 2 === e[4][7]
                ? 2 === e[10][8]
                  ? (c += "02U2")
                  : (c += "02F'")
                : (c += "02B'"));
            var i = n(c);
            c.trim().length ? (r.moveSet = i) : (r.solveState = 1);
          } else if (o < a) {
            var l = n((c = Xe(t, e[s[o]], o)));
            c.trim().length ? (r.moveSet = l) : (r.rubiksIndex = o + 1);
          } else
            (r.solveState = 0.1),
              (r.rubiksIndex = 0),
              (r.currentFunc = "Solving"),
              (r.moveSet = ["stop"]);
          return r;
        },
        We = n(137),
        Ze = n.n(We),
        Ye = n(138),
        He = n.n(Ye),
        Je = n(139),
        _e = n.n(Je);

      function Ge(e, t) {
        return e.indexOf(t);
      }
      var Qe = function (e, t, n, o, s) {
        var a = e,
          r = a - 2,
          c = Math.floor(n / (4 * r)),
          i = Ge(t, "white"),
          l = Ge(t, "yellow"),
          u = Ge(t, "blue"),
          h = Ge(t, "green"),
          p = "",
          d = {
            x: t[6],
            y: t[7],
            z: t[8],
          },
          v = {
            x: t[9],
            y: t[10],
            z: t[11],
          };
        if (
          d.x === v.x &&
          d.y === v.y &&
          d.z === v.z &&
          ((0 === i && 0 === c) ||
            (3 === l && 1 === c) ||
            (1 === u && 2 === c) ||
            (5 === h && 2 === c))
        )
          return "";
        switch (c) {
          case 0:
            p = Ze()(d, v, a, i);
            break;
          case 1:
            p = He()(d, v, a, l);
            break;
          case 2:
            p = _e()(d, v, a);
            break;
          default:
            console.log("Should never reach here");
        }
        return p;
      };
      var Ke = function (e, t, n, o, s) {
          var a = "",
            r = {};
          return (
            s < 12 * (t - 2)
              ? (a = Qe(t, e[o[s]], s, e, o)).trim().length
                ? (r.moveSet = n(a))
                : (r.rubiksIndex = s + 1)
              : ((r.solveState = 1),
                (r.rubiksIndex = 0),
                (r.currentFunc = "Solving"),
                (r.moveSet = ["stop"])),
            r
          );
        },
        $e = 0,
        et = 0.1,
        tt = 1,
        nt = 2,
        ot = 3,
        st = 4,
        at = 5,
        rt = 6,
        ct = 7;
      var it = function (e, t, n, o, s, a, r, c, i) {
          switch (e) {
            case $e:
              return Ve(t, n, o, a, r);
            case et:
              return Ke(t, n, o, c, a);
            case tt:
              return me()(t, n, o, c);
            case nt:
              return xe()(t, n, o, i);
            case ot:
              return Fe()(t, o, c, n);
            case st:
              return De()(t, o, c, n);
            case at:
              return Be()(t, o, c, n);
            case rt:
              return Me()(t, n, o, i);
            case ct:
              return we()(t, n, o, s, i);
            default:
              console.log("invalid solve state");
          }
        },
        lt = n(4),
        ut = {
          generateSolved: function (e, t, n) {
            for (
              var o = n,
                s = Math.floor(o / 2),
                a = [],
                r = [],
                c = [],
                i = [],
                l = [[], [], [], [], [], []],
                u = [
                  [[], [], [], []],
                  [[], [], [], []],
                  [[], [], [], []],
                ],
                p = 0;
              p < t;
              p++
            )
              for (var d = n - 1; d >= 0; d--)
                for (var v = 0; v < e; v++) {
                  var b = "black",
                    g = "black",
                    j = "black",
                    y = "black",
                    m = "black",
                    f = "black",
                    x = null,
                    S = null;
                  v === e - 1 ? (j = "red") : 0 === v && (m = "orange"),
                    p === t - 1 ? (y = "yellow") : 0 === p && (b = "white"),
                    d === n - 1 ? (g = "blue") : 0 === d && (f = "green");
                  var F = 0;
                  (0 !== p && p !== t - 1) || F++,
                    (0 !== d && d !== n - 1) || F++,
                    (0 !== v && v !== e - 1) || F++;
                  var O = "none";
                  1 === F
                    ? ((O = "middle"),
                      o % 2 &&
                        ((p === s && d === s) ||
                          (p === s && v === s) ||
                          (v === s && d === s)) &&
                        (S = "center"),
                      0 === p && (l[0].push(a.length), (S = l[0].length + 1)),
                      p === t - 1 &&
                        (l[1].push(a.length), (S = l[1].length + 1)),
                      d === n - 1 &&
                        (l[2].push(a.length), (S = l[2].length + 1)),
                      0 === v && (l[3].push(a.length), (S = l[3].length + 1)),
                      0 === d && (l[4].push(a.length), (S = l[4].length + 1)),
                      v === e - 1 &&
                        (l[5].push(a.length), (S = l[5].length + 1)))
                    : 2 === F
                    ? ((O = "edge"),
                      0 === p
                        ? d === n - 1
                          ? (e % 2 &&
                              u[0][0].length + 1 === Math.floor(e / 2) &&
                              (x = "center"),
                            u[0][0].push(a.length))
                          : v === e - 1
                          ? (e % 2 &&
                              u[0][1].length + 1 === Math.floor(e / 2) &&
                              (x = "center"),
                            u[0][1].push(a.length))
                          : 0 === d
                          ? (e % 2 &&
                              u[0][2].length + 1 === Math.floor(e / 2) &&
                              (x = "center"),
                            u[0][2].push(a.length))
                          : 0 === v &&
                            (e % 2 &&
                              u[0][3].length + 1 === Math.floor(e / 2) &&
                              (x = "center"),
                            u[0][3].push(a.length))
                        : p === t - 1
                        ? d === n - 1
                          ? (e % 2 &&
                              u[1][0].length + 1 === Math.floor(e / 2) &&
                              (x = "center"),
                            u[1][0].push(a.length))
                          : v === e - 1
                          ? (e % 2 &&
                              u[1][1].length + 1 === Math.floor(e / 2) &&
                              (x = "center"),
                            u[1][1].push(a.length))
                          : 0 === d
                          ? (e % 2 &&
                              u[1][2].length + 1 === Math.floor(e / 2) &&
                              (x = "center"),
                            u[1][2].push(a.length))
                          : 0 === v &&
                            (e % 2 &&
                              u[1][3].length + 1 === Math.floor(e / 2) &&
                              (x = "center"),
                            u[1][3].push(a.length))
                        : d === n - 1 && 0 === v
                        ? (e % 2 &&
                            u[2][0].length + 1 === Math.floor(e / 2) &&
                            (x = "center"),
                          u[2][0].push(a.length))
                        : d === n - 1 && v === e - 1
                        ? (e % 2 &&
                            u[2][1].length + 1 === Math.floor(e / 2) &&
                            (x = "center"),
                          u[2][1].push(a.length))
                        : 0 === d && v === e - 1
                        ? (e % 2 &&
                            u[2][2].length + 1 === Math.floor(e / 2) &&
                            (x = "center"),
                          u[2][2].push(a.length))
                        : 0 === d &&
                          0 === v &&
                          (e % 2 &&
                            u[2][3].length + 1 === Math.floor(e / 2) &&
                            (x = "center"),
                          u[2][3].push(a.length)))
                    : 3 === F && ((O = "corner"), i.push(a.length)),
                    a.push([b, g, j, y, m, f, v, p, d, v, p, d, O, x, S]);
                }
            o >= 6 &&
              (function () {
                for (
                  var e = o - 2 - 1,
                    t = function (t) {
                      for (var n = [], a = [], r = 0, c = 0; c < s - 1; c++)
                        a.push([]);
                      a.forEach(function (a, c) {
                        for (var i = 0; i <= e; i++)
                          for (var u = 0; u <= e; u++)
                            (i === c || e - i === c) && u >= c && u <= e - c
                              ? (u !== 0 + c && u !== e - c) ||
                                !(
                                  u < Math.ceil(e / 2) - 1 ||
                                  u > Math.ceil(e / 2) + (o % 2 ? 1 : 0)
                                )
                                ? a.push(l[t][r])
                                : n.push(l[t][r])
                              : ((i > c &&
                                  e - i > c &&
                                  (u === c || u === e - c)) ||
                                  (c === s - 2 && i === u && i === e / 2)) &&
                                a.push(l[t][r]),
                              (r += 1);
                        r = 0;
                      });
                      var i = a[a.length - 1];
                      (a[a.length - 1] = n),
                        a.push(i),
                        a.reverse(),
                        (l[t] = a.flat(2));
                    },
                    n = 3;
                  n < 6;
                  n++
                )
                  t(n);
              })();
            for (var D = 0; D < 6; D++)
              for (var k = 0; k < (e - 2) * (e - 2); k++) r.push(l[D][k]);
            for (var B = 0; B < 3; B++)
              for (var R = 0; R < 4; R++) c.push.apply(c, Object(h.a)(u[B][R]));
            return {
              tempArr: a,
              middles: r,
              edges: c,
              corners: i,
            };
          },
          generateBlank: function (e, t, n) {
            for (
              var o = e,
                s = Math.floor(o / 2),
                a = [],
                r = [],
                c = [[], [], [], [], [], []],
                i = [
                  [[], [], [], []],
                  [[], [], [], []],
                  [[], [], [], []],
                ],
                l = 0;
              l < t;
              l++
            )
              for (var u = n - 1; u >= 0; u--)
                for (var h = 0; h < e; h++) {
                  var p = "black",
                    d = "black",
                    v = "black",
                    b = "black",
                    g = "black",
                    j = "black",
                    y = null,
                    m = null;
                  h === e - 1 ? (v = "red") : 0 === h && (g = "orange"),
                    l === t - 1 ? (b = "yellow") : 0 === l && (p = "white"),
                    u === n - 1 ? (d = "blue") : 0 === u && (j = "green");
                  var f = 0;
                  (0 !== l && l !== t - 1) || f++,
                    (0 !== u && u !== n - 1) || f++,
                    (0 !== h && h !== e - 1) || f++;
                  var x = "none";
                  1 === f
                    ? ((x = "middle"),
                      o % 2 &&
                        ((l === s && u === s) ||
                          (l === s && h === s) ||
                          (h === s && u === s)) &&
                        (m = "center"),
                      0 === l && (c[0].push(a.length), (m = c[0].length + 1)),
                      l === t - 1 &&
                        (c[1].push(a.length), (m = c[1].length + 1)),
                      u === n - 1 &&
                        (c[2].push(a.length), (m = c[2].length + 1)),
                      0 === h && (c[3].push(a.length), (m = c[3].length + 1)),
                      0 === u && (c[4].push(a.length), (m = c[4].length + 1)),
                      h === e - 1 &&
                        (c[5].push(a.length), (m = c[5].length + 1)))
                    : 2 === f
                    ? ((x = "edge"),
                      0 === l
                        ? u === n - 1
                          ? (e % 2 &&
                              i[0][0].length + 1 === Math.floor(e / 2) &&
                              (y = "center"),
                            i[0][0].push(a.length))
                          : h === e - 1
                          ? (e % 2 &&
                              i[0][1].length + 1 === Math.floor(e / 2) &&
                              (y = "center"),
                            i[0][1].push(a.length))
                          : 0 === u
                          ? (e % 2 &&
                              i[0][2].length + 1 === Math.floor(e / 2) &&
                              (y = "center"),
                            i[0][2].push(a.length))
                          : 0 === h &&
                            (e % 2 &&
                              i[0][3].length + 1 === Math.floor(e / 2) &&
                              (y = "center"),
                            i[0][3].push(a.length))
                        : l === t - 1
                        ? u === n - 1
                          ? (e % 2 &&
                              i[1][0].length + 1 === Math.floor(e / 2) &&
                              (y = "center"),
                            i[1][0].push(a.length))
                          : h === e - 1
                          ? (e % 2 &&
                              i[1][1].length + 1 === Math.floor(e / 2) &&
                              (y = "center"),
                            i[1][1].push(a.length))
                          : 0 === u
                          ? (e % 2 &&
                              i[1][2].length + 1 === Math.floor(e / 2) &&
                              (y = "center"),
                            i[1][2].push(a.length))
                          : 0 === h &&
                            (e % 2 &&
                              i[1][3].length + 1 === Math.floor(e / 2) &&
                              (y = "center"),
                            i[1][3].push(a.length))
                        : u === n - 1 && 0 === h
                        ? (e % 2 &&
                            i[2][0].length + 1 === Math.floor(e / 2) &&
                            (y = "center"),
                          i[2][0].push(a.length))
                        : u === n - 1 && h === e - 1
                        ? (e % 2 &&
                            i[2][1].length + 1 === Math.floor(e / 2) &&
                            (y = "center"),
                          i[2][1].push(a.length))
                        : 0 === u && h === e - 1
                        ? (e % 2 &&
                            i[2][2].length + 1 === Math.floor(e / 2) &&
                            (y = "center"),
                          i[2][2].push(a.length))
                        : 0 === u &&
                          0 === h &&
                          (e % 2 &&
                            i[2][3].length + 1 === Math.floor(e / 2) &&
                            (y = "center"),
                          i[2][3].push(a.length)))
                    : 3 === f && ((x = "corner"), r.push(a.length)),
                    a.push([p, d, v, b, g, j, h, l, u, h, l, u, x, y, m]);
                }
            return a;
          },
          generateButtonData: function (e) {
            var t = Math.floor(e / 2),
              n = Math.ceil(e / 2),
              o = ["F", "U", "R", "B", "L", "D"],
              s = {
                center: [],
                single: [],
                multi: [],
              };
            e % 2 &&
              s.center.push(
                {
                  clockwise: {
                    name: "C1",
                    data: [0, -1, n, !1],
                  },
                  counter: {
                    name: "C1'",
                    data: [0, 0, n, !1],
                  },
                },
                {
                  clockwise: {
                    name: "C2",
                    data: [1, -1, n, !1],
                  },
                  counter: {
                    name: "C2'",
                    data: [1, 0, n, !1],
                  },
                },
                {
                  clockwise: {
                    name: "C3",
                    data: [2, -1, n, !1],
                  },
                  counter: {
                    name: "C3'",
                    data: [2, 0, n, !1],
                  },
                }
              );
            for (var a = 0; a < t; a++)
              for (var r = 0; r < o.length; r++) {
                var c = (a < 10 ? "0" : "") + (a + 1) + o[r],
                  i = (a < 10 ? "0" : "") + (a + 1) + o[r].toLowerCase();
                s.single.push({
                  clockwise: {
                    face: o[r],
                    name: c,
                    data: [r, -1, a + 1, !1],
                  },
                  counter: {
                    face: o[r],
                    name: c + "'",
                    data: [r, 0, a + 1, !1],
                  },
                }),
                  a > 0 &&
                    s.multi.push({
                      clockwise: {
                        face: o[r],
                        name: i,
                        data: [r, -1, a + 1, !0],
                      },
                      counter: {
                        face: o[r],
                        name: i + "'",
                        data: [r, 0, a + 1, !0],
                      },
                    });
              }
            return s;
          },
          generateMoveHints: function (e, t) {
            for (
              var n = [[], [], [], [], [], []],
                o = new lt.k(1, 1),
                s = new lt.i({
                  map: e,
                  transparent: !0,
                  color: "black",
                  opacity: ".8",
                  side: lt.c,
                }),
                a = 0;
              a < t;
              a++
            ) {
              for (var r = new lt.f(), c = new lt.f(), i = 0; i < 4; i++)
                for (var l = 0; l < t; l++) {
                  var u = new lt.h(o, s),
                    h = new lt.h(o, s);
                  0 === i
                    ? (u.translateX(t - 1 - a),
                      u.translateZ(t - 1 + 0.51),
                      u.translateY(t - 1 - l),
                      h.translateX(t - 1 - a),
                      h.translateZ(t - 1 + 0.51),
                      h.translateY(t - 1 - l),
                      h.rotateZ(Math.PI))
                    : 1 === i
                    ? (u.translateX(t - 1 - a),
                      u.translateZ(t - 1 - l),
                      u.translateY(t - 1 + 0.51),
                      u.rotateX(Math.PI / 2),
                      u.rotateZ(Math.PI),
                      h.translateX(t - 1 - a),
                      h.translateZ(t - 1 - l),
                      h.translateY(t - 1 + 0.51),
                      h.rotateX(Math.PI / 2))
                    : 2 === i
                    ? (u.translateX(t - 1 - a),
                      u.translateZ(-0.51),
                      u.translateY(t - 1 - l),
                      u.rotateX(Math.PI),
                      h.translateX(t - 1 - a),
                      h.translateZ(-0.51),
                      h.translateY(t - 1 - l))
                    : 3 === i &&
                      (u.translateX(t - 1 - a),
                      u.translateZ(t - 1 - l),
                      u.translateY(-0.51),
                      u.rotateX(-Math.PI / 2),
                      u.rotateZ(Math.PI),
                      h.translateX(t - 1 - a),
                      h.translateZ(t - 1 - l),
                      h.translateY(-0.51),
                      h.rotateX(-Math.PI / 2)),
                    r.add(u),
                    c.add(h);
                }
              (r.visible = !1), (c.visible = !1), n[2].push(r), n[5].push(c);
            }
            for (var p = 0; p < t; p++) {
              for (var d = new lt.f(), v = new lt.f(), b = 0; b < 4; b++)
                for (var g = 0; g < t; g++) {
                  var j = new lt.h(o, s),
                    y = new lt.h(o, s);
                  0 === b
                    ? (j.translateX(t - 1 - g),
                      j.translateZ(t - 1 + 0.51),
                      j.translateY(p),
                      j.rotateZ(-Math.PI / 2),
                      y.translateX(t - 1 - g),
                      y.translateZ(t - 1 + 0.51),
                      y.translateY(p),
                      y.rotateX(Math.PI),
                      y.rotateZ(Math.PI / 2))
                    : 1 === b
                    ? (j.translateX(t - 1 + 0.51),
                      j.translateZ(t - 1 - g),
                      j.translateY(p),
                      j.rotateX(Math.PI / 2),
                      j.rotateZ(Math.PI),
                      j.rotateY(Math.PI / 2),
                      y.translateX(t - 1 + 0.51),
                      y.translateZ(t - 1 - g),
                      y.translateY(p),
                      y.rotateX(Math.PI / 2),
                      y.rotateY(Math.PI / 2))
                    : 2 === b
                    ? (j.translateX(t - 1 - g),
                      j.translateZ(-0.51),
                      j.translateY(p),
                      j.rotateX(Math.PI),
                      j.rotateZ(Math.PI / 2),
                      y.translateX(t - 1 - g),
                      y.translateZ(-0.51),
                      y.translateY(p),
                      y.rotateZ(-Math.PI / 2))
                    : 3 === b &&
                      (j.translateX(-0.51),
                      j.translateZ(t - 1 - g),
                      j.translateY(p),
                      j.rotateX(-Math.PI / 2),
                      j.rotateZ(Math.PI),
                      j.rotateY(-Math.PI / 2),
                      y.translateX(-0.51),
                      y.translateZ(t - 1 - g),
                      y.translateY(p),
                      y.rotateX(-Math.PI / 2),
                      y.rotateY(Math.PI / 2)),
                    d.add(j),
                    v.add(y);
                }
              (d.visible = !1), (v.visible = !1), n[0].push(d), n[3].push(v);
            }
            for (var m = 0; m < t; m++) {
              for (var f = new lt.f(), x = new lt.f(), S = 0; S < 4; S++)
                for (var F = 0; F < t; F++) {
                  var O = new lt.h(o, s),
                    D = new lt.h(o, s);
                  0 === S
                    ? (O.translateX(t - 1 - F),
                      O.translateZ(t - 1 - m),
                      O.translateY(t - 1 + 0.51),
                      O.rotateZ(-Math.PI / 2),
                      O.rotateY(Math.PI / 2),
                      D.translateX(t - 1 - F),
                      D.translateZ(t - 1 - m),
                      D.translateY(t - 1 + 0.51),
                      D.rotateX(Math.PI),
                      D.rotateZ(Math.PI / 2),
                      D.rotateY(Math.PI / 2))
                    : 1 === S
                    ? (O.translateX(t - 1 + 0.51),
                      O.translateZ(t - 1 - m),
                      O.translateY(t - 1 - F),
                      O.rotateZ(Math.PI),
                      O.rotateY(Math.PI / 2),
                      D.translateX(t - 1 + 0.51),
                      D.translateZ(t - 1 - m),
                      D.translateY(t - 1 - F),
                      D.rotateY(Math.PI / 2))
                    : 2 === S
                    ? (O.translateX(t - 1 - F),
                      O.translateZ(t - 1 - m),
                      O.translateY(-0.51),
                      O.rotateX(Math.PI / 2),
                      O.rotateZ(Math.PI / 2),
                      D.translateX(t - 1 - F),
                      D.translateZ(t - 1 - m),
                      D.translateY(-0.51),
                      D.rotateX(Math.PI / 2),
                      D.rotateZ(-Math.PI / 2))
                    : 3 === S &&
                      (O.translateX(-0.51),
                      O.translateZ(t - 1 - m),
                      O.translateY(t - 1 - F),
                      O.rotateX(Math.PI),
                      O.rotateZ(Math.PI),
                      O.rotateY(-Math.PI / 2),
                      D.translateX(-0.51),
                      D.translateZ(t - 1 - m),
                      D.translateY(t - 1 - F),
                      D.rotateX(-Math.PI),
                      D.rotateY(Math.PI / 2)),
                    f.add(O),
                    x.add(D);
                }
              (f.visible = !1), (x.visible = !1), n[1].push(f), n[4].push(x);
            }
            return n;
          },
          rotatePoint: function (e, t, n, o, s, a) {
            var r = (a * Math.PI) / 180;
            return (
              n < 0 && (r *= -1),
              {
                p1: Math.cos(r) * (o - e) - Math.sin(r) * (s - t) + e,
                p2: Math.sin(r) * (o - e) + Math.cos(r) * (s - t) + t,
              }
            );
          },
          rotatePieces: function (e, t, n, o) {
            var s = n.cubeDimension / 2 - 0.5,
              a = n.cubes,
              r = n.turnDirection,
              c = n.speed,
              i = n.start,
              l = n.face,
              u = n.cubeDepth,
              h = n.isMulti;
            if (0 === l)
              for (var p = 0; p < n.rubiksObject.length; p++)
                if ((h || a[p].position.y > u - 2) && a[p].position.y < u) {
                  r < 0
                    ? (a[p].rotation.y += (0.1745 * c) / 10)
                    : (a[p].rotation.y -= (0.1745 * c) / 10);
                  var d = e(s, s, r, a[p].position.x, a[p].position.z, c);
                  i % 90 === 0 &&
                    ((d.p1 = Math.round(d.p1)), (d.p2 = Math.round(d.p2))),
                    (a[p].position.x = d.p1),
                    (a[p].position.z = d.p2);
                }
            if (1 === l)
              for (var v = 0; v < n.rubiksObject.length; v++)
                if (
                  (h || a[v].position.z < n.cubeDimension + 1 - u) &&
                  a[v].position.z > n.cubeDimension - 1 - u
                ) {
                  r < 0
                    ? (a[v].rotation.z -= (0.1745 * c) / 10)
                    : (a[v].rotation.z += (0.1745 * c) / 10);
                  var b = e(
                    s,
                    s,
                    r,
                    a[v].position.x,
                    a[v].position.y,
                    (10 * c) / 10
                  );
                  i % 90 === 0 &&
                    ((b.p1 = Math.round(b.p1)), (b.p2 = Math.round(b.p2))),
                    (a[v].position.x = b.p1),
                    (a[v].position.y = b.p2);
                }
            if (2 === l)
              for (var g = 0; g < n.rubiksObject.length; g++)
                if (
                  (h || t[g].position.x < n.cubeDimension + 1 - u) &&
                  a[g].position.x > n.cubeDimension - 1 - u
                ) {
                  r < 0
                    ? (t[g].rotation.x -= (0.1745 * c) / 10)
                    : (t[g].rotation.x += (0.1745 * c) / 10);
                  var j = e(
                    s,
                    s,
                    r,
                    t[g].position.y,
                    t[g].position.z,
                    (10 * c) / 10
                  );
                  i % 90 === 0 &&
                    ((j.p1 = Math.round(j.p1)), (j.p2 = Math.round(j.p2))),
                    (t[g].position.y = j.p1),
                    (t[g].position.z = j.p2);
                }
            if (3 === l)
              for (var y = 0; y < n.rubiksObject.length; y++)
                if (
                  (h || t[y].position.y < n.cubeDimension + 1 - u) &&
                  a[y].position.y > n.cubeDimension - 1 - u
                ) {
                  r < 0
                    ? (t[y].rotation.y += (0.1745 * c) / 10)
                    : (t[y].rotation.y -= (0.1745 * c) / 10);
                  var m = e(
                    s,
                    s,
                    r,
                    t[y].position.x,
                    t[y].position.z,
                    (10 * c) / 10
                  );
                  i % 90 === 0 &&
                    ((m.p1 = Math.round(m.p1)), (m.p2 = Math.round(m.p2))),
                    (t[y].position.x = m.p1),
                    (t[y].position.z = m.p2);
                }
            if (4 === l)
              for (var f = 0; f < n.rubiksObject.length; f++)
                if ((h || t[f].position.x > u - 2) && a[f].position.x < u) {
                  r < 0
                    ? (t[f].rotation.x -= (0.1745 * c) / 10)
                    : (t[f].rotation.x += (0.1745 * c) / 10);
                  var x = e(
                    s,
                    s,
                    r,
                    t[f].position.y,
                    t[f].position.z,
                    (10 * c) / 10
                  );
                  i % 90 === 0 &&
                    ((x.p1 = Math.round(x.p1)), (x.p2 = Math.round(x.p2))),
                    (t[f].position.y = x.p1),
                    (t[f].position.z = x.p2);
                }
            if (5 === l)
              for (var S = 0; S < n.rubiksObject.length; S++)
                if ((h || t[S].position.z > u - 2) && a[S].position.z < u) {
                  r < 0
                    ? (t[S].rotation.z -= (0.1745 * c) / 10)
                    : (t[S].rotation.z += (0.1745 * c) / 10);
                  var F = e(
                    s,
                    s,
                    r,
                    t[S].position.x,
                    t[S].position.y,
                    (10 * c) / 10
                  );
                  i % 90 === 0 &&
                    ((F.p1 = Math.round(F.p1)), (F.p2 = Math.round(F.p2))),
                    (t[S].position.x = F.p1),
                    (t[S].position.y = F.p2);
                }
            return {
              start: i + c,
              reload: !0,
            };
          },
          rotatePoint2: function (e, t, n, o, s) {
            var a = Math.PI / 2;
            return (
              n < 0 && (a *= -1),
              {
                p1: -Math.sin(a) * (s - t) + e,
                p2: Math.sin(a) * (o - e) + t,
              }
            );
          },
          rotateFace: function (e, t, n, o, s, a) {
            var r = s,
              c = s / 2 - 0.5,
              i = Object(h.a)(a),
              l = 90;
            if ((t < 0 && (l *= -1), 0 === e))
              for (var u = 0; u < i.length; u++)
                if ((o || i[u][7] > n - 2) && i[u][7] < n) {
                  var p = ut.rotatePoint2(c, c, l, i[u][6], i[u][8]);
                  if (((i[u][6] = p.p1), (i[u][8] = p.p2), 0 === t)) {
                    var d = i[u][1];
                    (i[u][1] = i[u][2]),
                      (i[u][2] = i[u][5]),
                      (i[u][5] = i[u][4]),
                      (i[u][4] = d);
                  } else {
                    var v = i[u][1];
                    (i[u][1] = i[u][4]),
                      (i[u][4] = i[u][5]),
                      (i[u][5] = i[u][2]),
                      (i[u][2] = v);
                  }
                }
            if (1 === e)
              for (var b = 0; b < i.length; b++)
                if ((o || i[b][8] < r + 1 - n) && i[b][8] > r - 1 - n) {
                  var g = ut.rotatePoint2(c, c, l, i[b][6], i[b][7]);
                  if (((i[b][6] = g.p1), (i[b][7] = g.p2), 0 === t)) {
                    var j = i[b][3];
                    (i[b][3] = i[b][2]),
                      (i[b][2] = i[b][0]),
                      (i[b][0] = i[b][4]),
                      (i[b][4] = j);
                  } else {
                    var y = i[b][3];
                    (i[b][3] = i[b][4]),
                      (i[b][4] = i[b][0]),
                      (i[b][0] = i[b][2]),
                      (i[b][2] = y);
                  }
                }
            if (2 === e)
              for (var m = 0; m < i.length; m++)
                if ((o || i[m][6] < r + 1 - n) && i[m][6] > r - 1 - n) {
                  var f = ut.rotatePoint2(c, c, l, i[m][7], i[m][8]);
                  if (((i[m][7] = f.p1), (i[m][8] = f.p2), 0 === t)) {
                    var x = i[m][3];
                    (i[m][3] = i[m][5]),
                      (i[m][5] = i[m][0]),
                      (i[m][0] = i[m][1]),
                      (i[m][1] = x);
                  } else {
                    var S = i[m][3];
                    (i[m][3] = i[m][1]),
                      (i[m][1] = i[m][0]),
                      (i[m][0] = i[m][5]),
                      (i[m][5] = S);
                  }
                }
            if (3 === e)
              for (var F = 0; F < i.length; F++)
                if ((o || i[F][7] < r + 1 - n) && i[F][7] > r - 1 - n) {
                  var O = ut.rotatePoint2(c, c, l, i[F][6], i[F][8]);
                  if (((i[F][6] = O.p1), (i[F][8] = O.p2), -1 === t)) {
                    var D = i[F][1];
                    (i[F][1] = i[F][4]),
                      (i[F][4] = i[F][5]),
                      (i[F][5] = i[F][2]),
                      (i[F][2] = D);
                  } else {
                    var k = i[F][1];
                    (i[F][1] = i[F][2]),
                      (i[F][2] = i[F][5]),
                      (i[F][5] = i[F][4]),
                      (i[F][4] = k);
                  }
                }
            if (4 === e)
              for (var B = 0; B < i.length; B++)
                if ((o || i[B][6] > n - 2) && i[B][6] < n) {
                  var R = ut.rotatePoint2(c, c, l, i[B][7], i[B][8]);
                  if (((i[B][7] = R.p1), (i[B][8] = R.p2), -1 === t)) {
                    var w = i[B][3];
                    (i[B][3] = i[B][1]),
                      (i[B][1] = i[B][0]),
                      (i[B][0] = i[B][5]),
                      (i[B][5] = w);
                  } else {
                    var L = i[B][3];
                    (i[B][3] = i[B][5]),
                      (i[B][5] = i[B][0]),
                      (i[B][0] = i[B][1]),
                      (i[B][1] = L);
                  }
                }
            if (5 === e)
              for (var M = 0; M < i.length; M++)
                if ((o || i[M][8] > n - 2) && i[M][8] < n) {
                  var C = ut.rotatePoint2(c, c, l, i[M][6], i[M][7]);
                  if (((i[M][6] = C.p1), (i[M][7] = C.p2), -1 === t)) {
                    var U = i[M][3];
                    (i[M][3] = i[M][4]),
                      (i[M][4] = i[M][0]),
                      (i[M][0] = i[M][2]),
                      (i[M][2] = U);
                  } else {
                    var z = i[M][3];
                    (i[M][3] = i[M][2]),
                      (i[M][2] = i[M][0]),
                      (i[M][0] = i[M][4]),
                      (i[M][4] = z);
                  }
                }
            return i;
          },
          rotateCubeFace: function (e, t, n, o, s, a, r, c, i) {
            var l = {};
            if (!s) {
              var u = "";
              (u += n < 10 ? "0" + n : n),
                0 === e
                  ? (u += o ? "f" : "F")
                  : 1 === e
                  ? (u += o ? "u" : "U")
                  : 2 === e
                  ? (u += o ? "r" : "R")
                  : 3 === e
                  ? (u += o ? "b" : "B")
                  : 4 === e
                  ? (u += o ? "l" : "L")
                  : 5 === e && (u += o ? "d" : "D"),
                -1 === t && (u += "'"),
                a && a.length > 0 ? (l.moveLog = a + " " + u) : (l.moveLog = u),
                i > -1 && (l.solveMoves = r.length ? r + " " + u : r + u);
            }
            return (
              e > 2 && -1 === t ? (t = 0) : e > 2 && 0 === t && (t = -1),
              (l.blockMoveLog = !1),
              (l.face = e),
              (l.turnDirection = t),
              (l.end = c + 90),
              (l.cubeDepth = n),
              (l.isMulti = o),
              l
            );
          },
        },
        ht = ut,
        pt = {
          parseMoveArray: function (e) {
            var t = e.shift(),
              n = 0,
              o = -1,
              s = 1,
              a = !1;
            if (t)
              return (
                4 === t.length && (o = 0),
                (s = parseInt(t.slice(0, 2))),
                t.slice(2, 3) === t.slice(2, 3).toLowerCase() && (a = !0),
                "U" === t.slice(2, 3).toUpperCase()
                  ? (n = 1)
                  : "F" === t.slice(2, 3).toUpperCase()
                  ? (n = 0)
                  : "B" === t.slice(2, 3).toUpperCase()
                  ? (n = 3)
                  : "R" === t.slice(2, 3).toUpperCase()
                  ? (n = 2)
                  : "L" === t.slice(2, 3).toUpperCase()
                  ? (n = 4)
                  : "D" === t.slice(2, 3).toUpperCase() && (n = 5),
                [n, o, s, a]
              );
          },
          convertDataToMove: function (e) {
            var t = "",
              n = ["F", "U", "R", "B", "L", "D"];
            return (
              (t += e[2].toString().length < 2 ? "0".concat(e[2]) : e[2]),
              (t += e[3] ? n[e[0]].toLowerCase() : n[e[0]]),
              -1 === e[1] ? (t += "") : (t += "'"),
              t
            );
          },
          convertMoveToData: function (e) {
            if (e.length < 2) return !1;
            var t = [];
            return (
              t.push(
                ["F", "U", "R", "B", "L", "D"].indexOf(e[2].toUpperCase())
              ),
              e.length < 4 ? t.push(-1) : t.push(0),
              "0" === e[0]
                ? t.push(parseInt(e[1]))
                : t.push(parseInt(e.substring(0, 2))),
              e[2].toUpperCase() === e[2] ? t.push(!1) : t.push(!0),
              t
            );
          },
          moveStringToArray: function (e) {
            for (var t = e.split(" "), n = [], o = 0; o < t.length; o++)
              if (4 === t[o].length && "2" === t[o].slice(3, 4)) {
                var s = t[o].slice(0, 3);
                n.push(s), n.push(s);
              } else n.push(t[o]);
            return n;
          },
          generateMove: function (e) {
            var t = Math.ceil(e / 2),
              n = Math.floor(6 * Math.random()),
              o = Math.floor(2 * Math.random() - 1),
              s = Math.floor(2 * Math.random()),
              a = 1;
            return (
              n > 2 && e % 2 && (t -= 1),
              e > 2 && (a = Math.floor(Math.random() * t) + 1),
              1 === a && (s = 0),
              a === Math.ceil(e / 2) && e % 2 && (s = 0),
              pt.convertDataToMove([n, o, a, s])
            );
          },
          equivalentMove: function (e, t) {
            var n,
              o = e.split(""),
              s = "";
            switch (
              ((s +=
                (n =
                  "0" === o[0]
                    ? t - parseInt(o[1]) + 1
                    : t - parseInt(o[0] + o[1]) + 1) < 10
                  ? "0".concat(n)
                  : "".concat(n)),
              o[2])
            ) {
              case "F":
                s += "B";
                break;
              case "f":
                s += "b";
                break;
              case "U":
                s += "D";
                break;
              case "u":
                s += "d";
                break;
              case "R":
                s += "L";
                break;
              case "r":
                s += "l";
                break;
              case "B":
                s += "F";
                break;
              case "b":
                s += "f";
                break;
              case "L":
                s += "R";
                break;
              case "l":
                s += "r";
                break;
              case "D":
                s += "U";
                break;
              case "d":
                s += "u";
            }
            return o.length < 4 && (s += "'"), s;
          },
          checkMoveEquivalence: function (e, t, n) {
            if (t.toLowerCase() === t)
              if (e.toLowerCase().slice(2) === t.slice(2)) {
                if (parseInt(e.slice(0, 2)) <= parseInt(t.slice(0, 2)))
                  return !0;
              } else if (
                pt.equivalentMove(e, n).toLowerCase().slice(2) === t.slice(2) &&
                parseInt(pt.equivalentMove(e, n).slice(0, 2)) <=
                  parseInt(t.slice(0, 2))
              )
                return !0;
            return e === t || pt.equivalentMove(e, n) === t;
          },
        },
        dt = pt;
      var vt = function (e, t) {
          var n = t.map(function (e) {
              return Object(h.a)(e);
            }),
            o = Object(l.a)({}, e),
            s = "",
            a = null,
            r = null,
            c = 0,
            i = !1,
            u = 0,
            p = 0;
          for (
            "Color Picker" === o.currentFunc &&
            ((o.solveState = 0),
            (o.currentFunc = "Solving"),
            (o.rubiksObject = t.map(function (e) {
              return Object(h.a)(e);
            })));
            "Solving" === o.currentFunc;

          )
            if (o.moveSet && o.moveSet.length) {
              var d = o.cubeDimension,
                v = o.blockMoveLog,
                b = o.moveLog,
                g = o.solveMoves,
                j = o.rubiksObject,
                y = o.end,
                m = o.solveState,
                f = dt.parseMoveArray(o.moveSet),
                x = ht.rotateCubeFace.apply(
                  ht,
                  Object(h.a)(f).concat([v, b, g, y, m])
                );
              (x.rubiksObject = ht.rotateFace(
                x.face,
                x.turnDirection,
                x.cubeDepth,
                x.isMulti,
                d,
                j
              )),
                (o = Object(l.a)(Object(l.a)({}, o), x));
            } else {
              (a = o.rubiksIndex) === r ? (c += 1) : (c = 0),
                o.solveState >= 1 && p++;
              var S = void 0;
              if (
                ((S = it(
                  o.solveState,
                  o.rubiksObject,
                  o.cubeDimension,
                  dt.moveStringToArray,
                  o.solveMoves,
                  o.rubiksIndex,
                  o.middles,
                  o.edges,
                  o.corners
                )) || (S = {}),
                S.moveSet &&
                  "stop" === S.moveSet[0] &&
                  ("Solving" === o.currentFunc
                    ? ((S.solveMoves = o.solveMoves + " ".concat(S.moveSet[0])),
                      S.moveSet.pop())
                    : S.moveSet.pop()),
                S.moveSet)
              ) {
                for (var F = [], O = 0; O < S.moveSet.length; O++)
                  "" === S.moveSet[O] ||
                    " " === S.moveSet[O] ||
                    "N" === S.moveSet[O][0] ||
                    "'" === S.moveSet[O] ||
                    F.push(S.moveSet[O]);
                S.moveSet = F;
              }
              p > 500
                ? ((i = !0), (S.currentFunc = "None"))
                : ((c > 10 && o.solveState < 1) ||
                    u > 1e4 ||
                    (S.moveSet && "error" === S.moveSet[0])) &&
                  (console.log(
                    "Solve State: ",
                    o.solveState,
                    "\nPiece attempts: ",
                    c,
                    "\nPiece: ",
                    o.rubiksObject[o.middles[o.rubiksIndex]]
                  ),
                  console.log(S),
                  (i = !0),
                  (S.currentFunc = "None")),
                S.currentFunc && "None" === S.currentFunc && (s = o.solveMoves),
                u++,
                (o = Object(l.a)(Object(l.a)({}, o), S)),
                (r = a);
            }
          var D = s.split(" ");
          ("N" !== D[0][0] && "'" !== D[0][0]) || D.shift();
          var k = [];
          D.forEach(function (e) {
            return "'" === e[e.length - 1]
              ? k.push(e.replace("'", ""))
              : k.push(e + "'");
          });
          for (var B = 0; B < k.length; B++)
            ("" !== k[B] &&
              " " !== k[B] &&
              "N" !== k[B][0] &&
              "'" !== k[B] &&
              void 0 !== k[B]) ||
              k.splice(B, 1);
          var R = Math.floor(o.cubeDimension / 2);
          k = k.map(function (e) {
            if ("stop'" === e) return e;
            var t = dt.convertMoveToData(e);
            return parseInt(t[2]) > R && !t[3]
              ? ((t[2] = o.cubeDimension - t[2] + 1),
                0 === parseInt(t[0])
                  ? (t[0] = 3)
                  : 1 === parseInt(t[0])
                  ? (t[0] = 5)
                  : 2 === parseInt(t[0])
                  ? (t[0] = 4)
                  : 3 === parseInt(t[0])
                  ? (t[0] = 0)
                  : 4 === parseInt(t[0])
                  ? (t[0] = 2)
                  : 5 === parseInt(t[0]) && (t[0] = 1),
                0 === t[1] ? (t[1] = -1) : (t[1] = 0),
                dt.convertDataToMove(t))
              : dt.convertDataToMove(t);
          });
          for (var w = 0; k.length !== w; ) {
            w = k.length;
            for (var L = 0; L < k.length - 2; L++)
              k[L].substring(0, 3) === k[L + 1].substring(0, 3) &&
                k[L].length !== k[L + 1].length &&
                k.splice(L, 2);
            for (var M = 0; M < k.length - 2; M++)
              k[M] === k[M + 1] &&
                k[M] === k[M + 2] &&
                (3 === k[M].length
                  ? (k[M] += "'")
                  : (k[M] = k[M].substring(0, 3)),
                k.splice(M + 1, 2));
          }
          return (
            "stop'" === k[0] && "stop'" === k[1] && 2 === k.length && (k = []),
            e.cubeDimension < 6 &&
              o.rubiksObject.forEach(function (e) {
                if (!e.includes("middle")) {
                  var t = e.slice(0, 6),
                    n = t.filter(function (e) {
                      return "black" !== e;
                    }),
                    o = 0;
                  [e[6], e[7], e[8]].join("") !==
                    [e[9], e[10], e[11]].join("") &&
                    n.length > 1 &&
                    (i = !0),
                    ("white" !== t[0] && "black" !== t[0]) || o++,
                    ("blue" !== t[1] && "black" !== t[1]) || o++,
                    ("red" !== t[2] && "black" !== t[2]) || o++,
                    ("yellow" !== t[3] && "black" !== t[3]) || o++,
                    ("orange" !== t[4] && "black" !== t[4]) || o++,
                    ("green" !== t[5] && "black" !== t[5]) || o++,
                    o < 6 && (i = !0);
                }
              }),
            i
              ? {
                  moveSet: Object(h.a)(k),
                  rubiksObject: n,
                  solveable: !1,
                  solvedSet: Object(h.a)(k),
                  solvedSetIndex: 0,
                }
              : {
                  moveSet: Object(h.a)(k),
                  rubiksObject: n,
                  solveable: !0,
                  solvedSet: Object(h.a)(k),
                  solvedSetIndex: 0,
                  tempObject: o.rubiksObject,
                }
          );
        },
        bt = {
          autoJump: function (e, t) {
            var n = Object(l.a)({}, e);
            for (n.moveSet = t; n.moveSet.length; ) {
              var o = n.cubeDimension,
                s = n.blockMoveLog,
                a = n.moveLog,
                r = n.solveMoves,
                c = n.rubiksObject,
                i = n.end,
                u = n.solveState,
                p = dt.parseMoveArray(n.moveSet),
                d = ht.rotateCubeFace.apply(
                  ht,
                  Object(h.a)(p).concat([s, a, r, i, u])
                );
              (d.rubiksObject = ht.rotateFace(
                d.face,
                d.turnDirection,
                d.cubeDepth,
                d.isMulti,
                o,
                c
              )),
                (n = Object(l.a)(Object(l.a)({}, n), d));
            }
            return Object(h.a)(n.rubiksObject);
          },
          setTarget: function (e, t) {
            if (t.state.autoPlay || t.state.autoRewind);
            else if (parseInt(e.target.id) - t.state.solvedSetIndex === 1)
              t.setState({
                targetSolveIndex: parseInt(e.target.id),
              }),
                t.playOne(t);
            else if (t.state.solvedSetIndex <= parseInt(e.target.id)) {
              t.setState({
                targetSolveIndex: parseInt(e.target.id),
                autoTarget: !0,
              });
              var n = t.state.solvedSet.slice(0, parseInt(e.target.id)),
                o = t.state.solvedSet.slice(
                  parseInt(e.target.id),
                  t.state.solvedSet.length
                ),
                s = t.state.solvedSet.slice(
                  t.state.solvedSetIndex,
                  parseInt(e.target.id)
                );
              t.setState({
                solvedSetIndex: parseInt(e.target.id),
                prevSet: n,
                moveSet: o,
                rubiksObject: bt.autoJump(t.state, s),
              });
            } else if (t.state.solvedSetIndex > parseInt(e.target.id)) {
              t.setState({
                targetSolveIndex: parseInt(e.target.id),
                autoTarget: !0,
              });
              var a = t.state.solvedSet.slice(0, parseInt(e.target.id)),
                r = t.state.solvedSet.slice(
                  parseInt(e.target.id),
                  t.state.solvedSet.length
                ),
                c = t.state.solvedSet
                  .slice(parseInt(e.target.id), t.state.solvedSetIndex)
                  .map(function (e) {
                    return 4 === e.length ? e.slice(0, 3) : e + "'";
                  });
              t.setState({
                solvedSetIndex: parseInt(e.target.id),
                prevSet: a,
                moveSet: r,
                rubiksObject: bt.autoJump(t.state, c.reverse()),
              });
            }
          },
          algoStart: function (e, t) {
            var n = t.state.cubeDimension,
              o = e,
              s = [],
              a = ht.generateSolved(n, n, n);
            "None Selected" !== o &&
              (s = be
                .find(function (e) {
                  return e.name === o && e.worksFor.includes(n);
                })
                .moves.split(" ")),
              t.setState({
                activeAlgo: o,
                moveSet: Object(h.a)(s),
                rubiksObject: a.tempArr,
                solveable: !0,
                solvedSet: Object(h.a)(s),
                solvedSetIndex: 0,
                prevSet: [],
                jumpToEnd: !0,
              });
          },
        },
        gt = bt,
        jt = gt.setTarget,
        yt = gt.algoStart,
        mt = (function (e) {
          Object(b.a)(n, e);
          var t = Object(g.a)(n);

          function n(e) {
            return Object(p.a)(this, n), t.call(this, e);
          }
          return (
            Object(d.a)(n, [
              {
                key: "UNSAFE_componentWillReceiveProps",
                value: function (e) {
                  !0 === e.state.autoRewind &&
                  e.state.solvedSetIndex >= e.state.targetSolveIndex
                    ? ("stop'" === e.state.moveSet[0] &&
                        e.setState({
                          autoRewind: !1,
                        }),
                      e.rewindOne())
                    : !0 === e.state.autoRewind &&
                      e.state.solvedSetIndex <= e.state.targetSolveIndex &&
                      e.setState({
                        autoRewind: !1,
                      }),
                    !0 === e.state.autoPlay &&
                    e.state.solvedSetIndex < e.state.targetSolveIndex
                      ? ("stop'" === e.state.moveSet[0] &&
                          e.setState({
                            autoPlay: !1,
                          }),
                        e.playOne(e))
                      : !0 === e.state.autoPlay &&
                        e.state.solvedSetIndex >= e.state.targetSolveIndex &&
                        e.setState({
                          autoPlay: !1,
                        }),
                    e.state.jumpToEnd &&
                      e.setState(
                        {
                          jumpToEnd: !1,
                        },
                        jt(
                          {
                            target: {
                              id: e.state.moveSet.length,
                            },
                          },
                          e
                        )
                      );
                },
              },
              {
                key: "componentDidMount",
                value: function () {
                  var e = this.props.setState,
                    t = this.props.state;
                  t.solveOnce &&
                    setTimeout(function () {
                      e(
                        Object(l.a)(
                          Object(l.a)({}, vt(t, t.rubiksObject)),
                          {},
                          {
                            solveOnce: !1,
                          }
                        )
                      );
                    }, 50);
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this,
                    t = [],
                    n = this.props.state.prevSet,
                    s = this.props.state.moveSet,
                    a = this.props.state.solveOnce
                      ? "Loading, please wait..."
                      : "Already Solved",
                    r =
                      "Solving" === this.props.state.currentFunc
                        ? a
                        : "None Selected",
                    c = [
                      Object(o.jsx)(
                        "div",
                        {
                          onClick: function (t) {
                            return h(t, e.props, jt);
                          },
                          id: 0,
                          className: "solveMoveDiv jumper",
                          children: "Top",
                        },
                        -1
                      ),
                    ];
                  this.props.state.solvedSet.length
                    ? this.props.state.solvedSet.forEach(function (n, s) {
                        return n === e.props.state.solvedSet[s + 1]
                          ? Object(o.jsx)(o.Fragment, {})
                          : "stop'" === n
                          ? (t.push(
                              Object(o.jsxs)(
                                "div",
                                {
                                  style: {
                                    width: "100%",
                                  },
                                  children: [
                                    Object(o.jsx)(
                                      "hr",
                                      {
                                        style: {
                                          border: "1px solid lightblue",
                                          marginLeft: "5px",
                                        },
                                      },
                                      s
                                    ),
                                    1 === c.length ? "Edges: " : "3x3: ",
                                  ],
                                },
                                s
                              )
                            ),
                            c.push(
                              1 === c.length
                                ? Object(o.jsx)(
                                    "div",
                                    {
                                      onClick: function (t) {
                                        return h(t, e.props, jt);
                                      },
                                      id: s + 1,
                                      className: "solveMoveDiv jumper",
                                      children: "Edge",
                                    },
                                    s
                                  )
                                : Object(o.jsx)(
                                    "div",
                                    {
                                      onClick: function (t) {
                                        return h(t, e.props, jt);
                                      },
                                      id: s + 1,
                                      className: "solveMoveDiv jumper",
                                      children: "3x3",
                                    },
                                    s
                                  )
                            ))
                          : n === e.props.state.solvedSet[s - 1]
                          ? s === e.props.state.solvedSetIndex ||
                            (s === e.props.state.solvedSetIndex + 1 &&
                              n === e.props.state.solvedSet[s - 1])
                            ? t.push(
                                Object(o.jsx)(
                                  "div",
                                  {
                                    id: s - 1,
                                    className: "solveMoveDiv nextSolveIndex",
                                    children:
                                      n
                                        .replace("0" + n[1], n[1])
                                        .replace("'", "") + "2",
                                  },
                                  s
                                )
                              )
                            : t.push(
                                Object(o.jsx)(
                                  "div",
                                  {
                                    onClick: function (t) {
                                      return jt(t, e.props);
                                    },
                                    id: s - 1,
                                    className: "solveMoveDiv",
                                    children:
                                      n
                                        .replace("0" + n[1], n[1])
                                        .replace("'", "") + "2",
                                  },
                                  s
                                )
                              )
                          : s === e.props.state.solvedSetIndex ||
                            (s === e.props.state.solvedSetIndex + 1 &&
                              n === e.props.state.solvedSet[s - 1])
                          ? t.push(
                              Object(o.jsx)(
                                "div",
                                {
                                  id: s,
                                  className: "solveMoveDiv nextSolveIndex",
                                  children: n.replace("0" + n[1], n[1]),
                                },
                                s
                              )
                            )
                          : t.push(
                              Object(o.jsx)(
                                "div",
                                {
                                  onClick: function (t) {
                                    return jt(t, e.props);
                                  },
                                  id: s,
                                  className: "solveMoveDiv",
                                  children: n.replace("0" + n[1], n[1]),
                                },
                                s
                              )
                            );
                      })
                    : t.push(r),
                    t.map(function (e) {
                      return Object(o.jsx)(je.a, {
                        height: "2rem",
                        children: "el",
                      });
                    });
                  var i = Object(o.jsx)("div", {
                      className: "previousMove",
                      children:
                        n.length - 1 >= 0
                          ? "stop'" === n[n.length - 1]
                            ? n[n.length - 2]
                              ? n[n.length - 2] === n[n.length - 3]
                                ? n[n.length - 2]
                                    .replace(
                                      "0" + n[n.length - 2][1],
                                      n[n.length - 2][1]
                                    )
                                    .replace("'", "") + 2
                                : n[n.length - 2].replace(
                                    "0" + n[n.length - 2][1],
                                    n[n.length - 2][1]
                                  )
                              : "-"
                            : n[n.length - 1] === n[n.length - 2]
                            ? n[n.length - 1]
                                .replace(
                                  "0" + n[n.length - 1][1],
                                  n[n.length - 1][1]
                                )
                                .replace("'", "") + 2
                            : n[n.length - 1].replace(
                                "0" + n[n.length - 1][1],
                                n[n.length - 1][1]
                              )
                          : "-",
                    }),
                    l = Object(o.jsx)("div", {
                      className: "nextMove",
                      children:
                        s[0] && "string" === typeof s[0][0] && "'" !== s[0]
                          ? "stop'" === s[0]
                            ? s[1]
                              ? s[1] === s[2]
                                ? s[1]
                                    .replace("0" + s[1][1], s[1][1])
                                    .replace("'", "") + 2
                                : s[1].replace("0" + s[1][1], s[1][1])
                              : "-"
                            : s[0] === s[1]
                            ? s[0]
                                .replace("0" + s[0][1], s[0][1])
                                .replace("'", "") + 2
                            : s[0].replace("0" + s[0][0], s[0][1])
                          : "-",
                    });

                  function u(e) {
                    e.setState({
                      autoPlay: !1,
                      autoRewind: !1,
                    });
                  }

                  function h(e, t, n) {
                    t.setState({
                      autoScroll: !0,
                    }),
                      n(e, t);
                  }

                  function p(e, t) {
                    switch (t.state.currentFunc) {
                      case "Solving":
                        (document.querySelector(
                          ".warningPopupSolver"
                        ).style.visibility = "visible"),
                          (document.querySelector(
                            ".warningPopupSolver"
                          ).style.width = "100%"),
                          (document.querySelector(
                            ".solverInterface"
                          ).style.display = "none"),
                          (document.querySelector(".exitDiv").style.display =
                            "none");
                        break;
                      case "Algorithms":
                        t.setState({
                          activeMenu: "",
                          currentFunc: "Reset",
                          solvedSet: [],
                          hoverData: [],
                          prevSet: [],
                          moveSet: [],
                          isValidConfig: !1,
                          targetSolveIndex: -1,
                          solveMoves: "",
                          autoPlay: !1,
                          autoRewind: !1,
                          autoTarget: !1,
                          playOne: !1,
                          activeAlgo: "none",
                        });
                        break;
                      default:
                        t.setState({
                          activeMenu: "",
                          currentFunct: "None",
                        });
                    }
                  }
                  return Object(o.jsx)("div", {
                    className: "solverUIWrapper",
                    children: Object(o.jsxs)(I.a, {
                      style: {
                        width: "100%",
                        height: "100%",
                        margin: 0,
                      },
                      children: [
                        Object(o.jsx)(N.a, {
                          id:
                            this.props.mobile ||
                            "Algorithms" !== this.props.state.currentFunc
                              ? ""
                              : "centerControls2",
                          style: {
                            paddingLeft: "0px",
                          },
                          children: this.props.mobile
                            ? Object(o.jsx)(o.Fragment, {
                                children:
                                  "Algorithms" === this.props.state.currentFunc
                                    ? Object(o.jsxs)(o.Fragment, {
                                        children: [
                                          Object(o.jsx)(I.a, {
                                            style: {
                                              paddingLeft: "15px",
                                            },
                                            children: Object(o.jsx)("select", {
                                              style: {
                                                color: "lightgrey",
                                                backgroundColor: "#343a40",
                                              },
                                              id: "patterns",
                                              onChange: function (t) {
                                                return yt(
                                                  t.target.value,
                                                  e.props
                                                );
                                              },
                                              children: be.map(function (t) {
                                                return t.worksFor.includes(
                                                  e.props.state.cubeDimension
                                                )
                                                  ? Object(o.jsx)(
                                                      "option",
                                                      {
                                                        className: "mobileAlgo",
                                                        id: t.name,
                                                        value: t.name,
                                                        children: t.name,
                                                      },
                                                      t.name
                                                    )
                                                  : "";
                                              }),
                                            }),
                                          }),
                                          Object(o.jsx)(I.a, {
                                            style: {
                                              paddingLeft: "15px",
                                            },
                                            children: Object(o.jsx)("div", {
                                              className: "algoMoves",
                                              children: t,
                                            }),
                                          }),
                                        ],
                                      })
                                    : Object(o.jsx)(o.Fragment, {
                                        children: Object(o.jsx)("div", {
                                          className: "solverMovesMobile",
                                          children: t,
                                        }),
                                      }),
                              })
                            : Object(o.jsx)(o.Fragment, {
                                children: Object(o.jsx)("div", {
                                  className: "solverMoves",
                                  children: t,
                                }),
                              }),
                        }),
                        Object(o.jsxs)(N.a, {
                          id:
                            this.props.mobile ||
                            "Algorithms" !== this.props.state.currentFunc
                              ? "centerControlsOther"
                              : "centerControls",
                          style: {
                            paddingRight: 0,
                            paddingLeft: 0,
                            maxWidth: "300px",
                          },
                          children: [
                            Object(o.jsxs)("div", {
                              className: "warningPopupSolver",
                              children: [
                                Object(o.jsx)("div", {
                                  id: "solverChangeData",
                                  data: "",
                                }),
                                this.props.mobile
                                  ? Object(o.jsx)("div", {
                                      className: "solverMessage",
                                      children: " Progress will not be saved.",
                                    })
                                  : Object(o.jsx)("div", {
                                      className: "solverMessage",
                                      children:
                                        " Are you sure you want to leave Solver? Progress will not be saved.",
                                    }),
                                Object(o.jsx)("button", {
                                  onClick: function () {
                                    (document.querySelector(
                                      ".warningPopupSolver"
                                    ).style.visibility = "hidden"),
                                      (document.querySelector(
                                        ".solverInterface"
                                      ).style.display = "block"),
                                      (document.querySelector(
                                        ".exitDiv"
                                      ).style.display = "block");
                                  },
                                  className: "solverLeaveStay",
                                  children: "Stay",
                                }),
                                Object(o.jsx)("button", {
                                  onClick: function (t) {
                                    return (function (e, t) {
                                      if (
                                        (e.stopPropagation(),
                                        t.stopSolve(),
                                        document.querySelector(".activeMenu") &&
                                          document
                                            .querySelector(".activeMenu")
                                            .classList.remove("activeMenu"),
                                        document.querySelector(
                                          "#solverChangeData"
                                        ).data)
                                      ) {
                                        var n = document
                                          .querySelector("#solverChangeData")
                                          .data.split(",");
                                        if ("ColorPicker" === n[0])
                                          return (
                                            t.setState({
                                              activeMenu: "",
                                              currentFunct: "None",
                                              isValidConfig: !1,
                                            }),
                                            void (document.querySelector(
                                              "#solverChangeData"
                                            ).data = "")
                                          );
                                        document
                                          .querySelector("#".concat(n[0]))
                                          .classList.add("activeMenu"),
                                          t.setState({
                                            activeMenu: n[0],
                                            currentFunct: n[1],
                                            isValidConfig: !1,
                                          }),
                                          (document.querySelector(
                                            "#solverChangeData"
                                          ).data = "");
                                      } else
                                        t.setState({
                                          activeMenu: "",
                                          currentFunct: "None",
                                          isValidConfig: !1,
                                        });
                                    })(t, e.props);
                                  },
                                  className: "solverLeaveStay",
                                  children: "Leave",
                                }),
                              ],
                            }),
                            Object(o.jsxs)("div", {
                              className: "solverInterface",
                              children: [
                                Object(o.jsx)("div", {
                                  className: "solverButtonDiv rewindOne",
                                  children: Object(o.jsxs)("button", {
                                    className: "solverButton",
                                    onClick: function () {
                                      return e.props.rewindOne(e.props);
                                    },
                                    children: ["Previous ", i],
                                  }),
                                }),
                                Object(o.jsx)("div", {
                                  className: "solverButtonDiv playOne",
                                  children: Object(o.jsxs)("button", {
                                    className: "solverButton",
                                    onClick: function () {
                                      return e.props.playOne(e.props);
                                    },
                                    children: ["Next ", l],
                                  }),
                                }),
                                Object(o.jsx)("div", {
                                  className: "solverButtonDiv rewindAll",
                                  children: this.props.state.autoRewind
                                    ? Object(o.jsxs)("button", {
                                        className: "solverButton",
                                        onClick: function () {
                                          return u(e.props);
                                        },
                                        children: [
                                          Object(o.jsx)("div", {
                                            style: {
                                              width: "100%",
                                            },
                                            children: "Pause",
                                          }),
                                          " Solver",
                                        ],
                                      })
                                    : Object(o.jsxs)("button", {
                                        className: "solverButton",
                                        onClick: function () {
                                          e.props.setState({
                                            autoPlay: !1,
                                            autoRewind: !0,
                                            targetSolveIndex: 0,
                                          });
                                        },
                                        children: [
                                          Object(o.jsx)("div", {
                                            style: {
                                              width: "100%",
                                            },
                                            children: "Auto",
                                          }),
                                          " Rewind",
                                        ],
                                      }),
                                }),
                                Object(o.jsx)("div", {
                                  className: "solverButtonDiv fastforward",
                                  children: this.props.state.autoPlay
                                    ? Object(o.jsxs)("button", {
                                        className: "solverButton",
                                        onClick: function () {
                                          return u(e.props);
                                        },
                                        children: [
                                          Object(o.jsx)("div", {
                                            style: {
                                              width: "100%",
                                            },
                                            children: "Pause",
                                          }),
                                          " Solver",
                                        ],
                                      })
                                    : Object(o.jsxs)("button", {
                                        className: "solverButton",
                                        onClick: function () {
                                          var t;
                                          (t = e.props).state.moveSet.length &&
                                            (1 === t.state.moveSet.length
                                              ? t.playOne(t)
                                              : t.setState({
                                                  autoPlay: !0,
                                                  autoRewind: !1,
                                                  targetSolveIndex:
                                                    t.state.solvedSet.length,
                                                }));
                                        },
                                        children: [
                                          Object(o.jsx)("div", {
                                            style: {
                                              width: "100%",
                                            },
                                            children: "Auto",
                                          }),
                                          " Forward",
                                        ],
                                      }),
                                }),
                              ],
                            }),
                            Object(o.jsx)("div", {
                              className: "exitDiv",
                              style: {
                                width: "100%",
                                height: "25%",
                              },
                              children:
                                "Solving" === this.props.state.currentFunc
                                  ? Object(o.jsx)(o.Fragment, {
                                      children: Object(o.jsx)("button", {
                                        id: "Solver",
                                        data: "Solving",
                                        onClick: function (t) {
                                          return p(0, e.props);
                                        },
                                        className: "exitButton",
                                        children: "Exit",
                                      }),
                                    })
                                  : Object(o.jsx)("button", {
                                      id: "Algorithms",
                                      data: "Algorithms",
                                      onClick: function (t) {
                                        return p(0, e.props);
                                      },
                                      className: "exitButton",
                                      children: "Exit",
                                    }),
                            }),
                          ],
                        }),
                      ],
                    }),
                  });
                },
              },
            ]),
            n
          );
        })(s.Component),
        ft = a.a.memo(mt),
        xt =
          (n(62),
          function (e) {
            var t = e.color.charAt(0).toUpperCase() + e.color.slice(1),
              n = e.color === e.colorPicked ? "" : e.color;
            return Object(o.jsx)("div", {
              onClick: function (e) {
                e.stopPropagation(), e.nativeEvent.stopImmediatePropagation();
              },
              className: ""
                .concat(e.side ? "bottomColorButtonDiv" : "colorButtonDiv", " ")
                .concat(e.index % 2 ? "leftCp" : "rightCp"),
              children: Object(o.jsx)("button", {
                className: "colorPicker ".concat(n),
                style: {
                  backgroundColor: n
                    ? "rgba(0,0,255,.10)"
                    : "rgba(".concat(
                        {
                          white: [255, 255, 255],
                          blue: [0, 0, 255],
                          red: [255, 0, 0],
                          yellow: [255, 255, 0],
                          orange: [255, 165, 0],
                          green: [0, 255, 0],
                        }[e.color],
                        ",.5)"
                      ),
                  color: e.color,
                },
                onClick: function (t) {
                  t.stopPropagation(),
                    t.nativeEvent.stopImmediatePropagation(),
                    e.changeColor(e.color);
                },
                children: e.isMobile ? t : "".concat(e.index, ". ").concat(t),
              }),
            });
          }),
        St = function (e) {
          var t = Object(s.useState)("Solve"),
            n = Object(i.a)(t, 2),
            a = n[0],
            r = n[1],
            c = Object(s.useState)("Check"),
            l = Object(i.a)(c, 2),
            u = l[0],
            h = l[1];
          return Object(o.jsxs)(I.a, {
            className: "cp-container",
            style: {
              height: "98%",
              width: "100%",
              overflowX: "hidden!important",
              overflowY: "hidden!important",
              margin: "0px",
            },
            children: [
              Object(o.jsx)(N.a, {
                children: Object(o.jsxs)("div", {
                  className: "cpInfo",
                  children: [
                    e.isValidConfig
                      ? Object(o.jsx)("div", {
                          className: "solveCpDiv",
                          children: Object(o.jsx)("button", {
                            className: "solveCp",
                            onClick: function () {
                              return (
                                r("Configuring..."),
                                void setTimeout(function () {
                                  e.setColorPickedCube();
                                }, 100)
                              );
                            },
                            children: Object(o.jsx)("strong", {
                              style: {
                                color: "green",
                                fontSize: "1rem",
                              },
                              children: a,
                            }),
                          }),
                        })
                      : e.cpErrors.length
                      ? []
                      : Object(o.jsx)("div", {
                          className: "checkCpDiv",
                          children: Object(o.jsx)("button", {
                            className: "checkCp",
                            onClick: function () {
                              return (
                                h("Checking..."),
                                void setTimeout(function () {
                                  e.runCheckColors(), h("Check");
                                }, 100)
                              );
                            },
                            children: Object(o.jsx)("strong", {
                              style: {
                                color: "white",
                                fontSize: "1rem",
                              },
                              children: u,
                            }),
                          }),
                        }),
                    Object(o.jsx)("div", {
                      style: {
                        fontSize: ".5rem",
                      },
                      children: e.state.cpErrors.map(function (e, t) {
                        return Object(o.jsx)(
                          "p",
                          {
                            className: "cpErrorMessage",
                            children: "- " + e,
                          },
                          t
                        );
                      }),
                    }),
                  ],
                }),
              }),
              Object(o.jsxs)(N.a, {
                style: {
                  padding: "0px",
                },
                children: [
                  Object(o.jsxs)("div", {
                    className: "warningPopup",
                    children: [
                      Object(o.jsx)("div", {
                        id: "cpChangeData",
                        data: "",
                      }),
                      e.isMobile
                        ? Object(o.jsx)("div", {
                            className: "cpMessage",
                            children: "Progress will not be saved.",
                          })
                        : Object(o.jsx)("div", {
                            className: "cpMessage",
                            children:
                              "Are you sure you want to leave Color Picker? Progress will not be saved.",
                          }),
                      Object(o.jsx)("button", {
                        onClick: function () {
                          (document.querySelector(
                            ".warningPopup"
                          ).style.display = "none"),
                            (document.querySelector(
                              ".colorButtonContainer"
                            ).style.visibility = "visible");
                        },
                        className: "cpLeaveStay",
                        children: "Stay",
                      }),
                      Object(o.jsx)("button", {
                        onClick: function () {
                          if (
                            (e.endColorPicker(),
                            document.querySelector(".activeMenu") &&
                              document
                                .querySelector(".activeMenu")
                                .classList.remove("activeMenu"),
                            document.querySelector("#cpChangeData").data)
                          ) {
                            var t = document
                              .querySelector("#cpChangeData")
                              .data.split(",");
                            if ("Solver" === t[0])
                              return (
                                e.setState({
                                  activeMenu: "",
                                  currentFunct: "None",
                                  isValidConfig: !1,
                                }),
                                void (document.querySelector(
                                  "#cpChangeData"
                                ).data = "")
                              );
                            document
                              .querySelector("#".concat(t[0]))
                              .classList.add("activeMenu"),
                              (document.querySelector("#cpChangeData").data =
                                ""),
                              e.setState(
                                {
                                  activeMenu: t[0],
                                  currentFunc: t[1],
                                  isValidConfig: !1,
                                },
                                function () {
                                  return e.beginSolve();
                                }
                              );
                          } else
                            e.setState({
                              activeMenu: "",
                              currentFunct: "None",
                              isValidConfig: !1,
                            });
                        },
                        className: "cpLeaveStay",
                        children: "Leave",
                      }),
                    ],
                  }),
                  Object(o.jsxs)("div", {
                    className: "colorButtonContainer",
                    children: [
                      ["white", "blue", "red", "yellow", "orange", "green"].map(
                        function (t, n) {
                          return Object(o.jsx)(
                            xt,
                            {
                              index: n + 1,
                              color: t,
                              colorPicked: e.colorPicked,
                              changeColor: e.changeColor,
                              isMobile: e.isMobile,
                            },
                            t
                          );
                        }
                      ),
                      Object(o.jsx)("div", {
                        className: "colorButtonDiv",
                        style: {
                          paddingBottom: "0px",
                          width: "100%",
                        },
                        children: Object(o.jsx)("button", {
                          id: "ColorPicker",
                          data: "Color Picker",
                          onClick: function (e) {
                            (document.querySelector(
                              ".warningPopup"
                            ).style.display = "block"),
                              (document.querySelector(
                                ".warningPopup"
                              ).style.width = "100%"),
                              (document.querySelector(
                                ".colorButtonContainer"
                              ).style.visibility = "hidden");
                          },
                          className: "colorPicker activeMenu colorPickerExit",
                          children: "Exit",
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            ],
          });
        },
        Ft = (function (e) {
          Object(b.a)(n, e);
          var t = Object(g.a)(n);

          function n(e) {
            return Object(p.a)(this, n), t.call(this, e);
          }
          return (
            Object(d.a)(n, [
              {
                key: "shouldComponentUpdate",
                value: function (e, t) {
                  return (
                    this.props.state.solvedSet !== e.state.solvedSet ||
                    this.props.state.currentFunc !== e.state.currentFunc ||
                    this.props.state.activeAlgo !== e.state.activeAlgo ||
                    ((this.props.state.activeAlgo !== e.state.activeAlgo ||
                      this.props.state.solvedSetIndex !==
                        e.state.solvedSetIndex ||
                      (!this.props.state.autoRewind &&
                        !this.props.state.autoPlay) ||
                      this.props.state.autoRewind !== e.state.autoRewind ||
                      this.props.state.autoPlay !== e.state.autoPlay) &&
                      (this.props.state.solvedSetIndex !==
                        e.state.solvedSetIndex ||
                        !!(
                          e.state.autoRewind &&
                          e.state.solvedSetIndex >= e.state.targetSolveIndex - 1
                        ) ||
                        !!(
                          e.state.autoPlay &&
                          e.state.solvedSetIndex < e.state.targetSolveIndex - 1
                        ) ||
                        !(e.state.autoRewind || !this.props.state.autoRewind) ||
                        !(e.state.autoPlay || !this.props.state.autoPlay) ||
                        (!(
                          this.props.state.activeMenu === e.state.activeMenu &&
                          this.props.state.colorPicked ===
                            e.state.colorPicked &&
                          this.props.state.currentFunc ===
                            e.state.currentFunc &&
                          this.props.state.isValidConfig ===
                            e.state.isValidConfig &&
                          this.props.cpErrors === e.cpErrors &&
                          this.props.state.solveTime === e.state.solveTime &&
                          this.props.state.playOne === e.state.playOne &&
                          !this.props.state.autoPlay
                        ) &&
                          !(
                            this.props.state.solvedSetIndex ===
                              e.state.solvedSetIndex &&
                            this.props.state.autoPlay &&
                            this.props.state.solvedSetIndex <
                              this.props.state.targetSolveIndex
                          ) &&
                          !(
                            this.props.state.solvedSetIndex ===
                              e.state.solvedSetIndex &&
                            this.props.state.autoRewind &&
                            this.props.state.solvedSetIndex >=
                              this.props.state.targetSolveIndex
                          ))))
                  );
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this,
                    t = be.filter(function (t) {
                      return t.worksFor.includes(e.props.state.cubeDimension);
                    }).length;

                  function n(e, t) {
                    switch (e.target.id) {
                      case "Reset":
                        t.setState({
                          activeMenu: "",
                          currentFunc: "Reset",
                        });
                        break;
                      case "Scramble":
                        "None" === t.state.currentFunc && t.beginScramble();
                        break;
                      default:
                        t.setState({
                          activeMenu: e.target.id,
                          currentFunc: "None",
                        });
                    }
                  }

                  function s(e, t) {
                    "None" === t.state.currentFunc &&
                      ("ColorPicker" === e.target.id
                        ? (t.setState({
                            activeMenu: e.target.id,
                            isValidConfig: !0,
                          }),
                          t.beginColorPicker())
                        : "Solver" === e.target.id
                        ? (t.setState({
                            activeMenu: e.target.id,
                          }),
                          t.beginSolve())
                        : "Algorithms" === e.target.id &&
                          t.setState({
                            activeMenu: e.target.id,
                            currentFunc: "Algorithms",
                            solveOnce: !1,
                            solvedSet: [],
                            prevSet: [],
                            moveSet: [],
                          }));
                  }
                  return Object(o.jsx)("div", {
                    className: "menuWrapper",
                    children:
                      ("None" !== this.props.state.currentFunc &&
                        "Drag Turn" !== this.props.state.currentFunc &&
                        "Undo" !== this.props.state.currentFunc &&
                        "Redo" !== this.props.state.currentFunc &&
                        "Scrambling" !== this.props.state.currentFunc) ||
                      "Moves" === this.props.state.activeMenu
                        ? "Color Picker" === this.props.state.currentFunc
                          ? Object(o.jsx)(
                              St,
                              Object(l.a)(
                                Object(l.a)({}, this.props),
                                {},
                                {
                                  isMobile: !0,
                                }
                              )
                            )
                          : "Solving" === this.props.state.currentFunc
                          ? Object(o.jsx)(
                              ft,
                              Object(l.a)(
                                Object(l.a)({}, this.props),
                                {},
                                {
                                  mobile: !0,
                                }
                              )
                            )
                          : "Algorithms" === this.props.state.currentFunc
                          ? Object(o.jsx)(o.Fragment, {
                              children: Object(o.jsx)(
                                ft,
                                Object(l.a)(
                                  Object(l.a)({}, this.props),
                                  {},
                                  {
                                    mobile: !0,
                                  }
                                )
                              ),
                            })
                          : "Moves" === this.props.state.activeMenu
                          ? Object(o.jsxs)(I.a, {
                              style: {
                                height: "100%",
                              },
                              children: [
                                Object(o.jsx)(N.a, {
                                  xs: 2,
                                  children: Object(o.jsx)("div", {
                                    id: "infoBtn",
                                    style: {
                                      fontSize: "2rem",
                                      padding: 0,
                                      display: "inline",
                                    },
                                    onClick: function () {
                                      e.props.setState({
                                        activeMenu: "",
                                      });
                                    },
                                    children: "\u2190",
                                  }),
                                }),
                                Object(o.jsx)(N.a, {
                                  xs: 10,
                                  children: Object(o.jsx)(
                                    P,
                                    Object(l.a)({}, this.props)
                                  ),
                                }),
                              ],
                            })
                          : Object(o.jsx)(o.Fragment, {})
                        : Object(o.jsxs)(I.a, {
                            style: {
                              width: "100%",
                              height: "100%",
                              margin: 0,
                            },
                            children: [
                              Object(o.jsxs)(N.a, {
                                xs: 6,
                                style: {
                                  paddingRight: "7.5px",
                                },
                                children: [
                                  this.props.state.cubeDimension <= 100
                                    ? Object(o.jsxs)(o.Fragment, {
                                        children: [
                                          Object(o.jsx)(
                                            "button",
                                            {
                                              className: "mobileButton",
                                              id: "ColorPicker",
                                              data: "Color Picker",
                                              onClick: function (t) {
                                                return s(t, e.props);
                                              },
                                              children: "Color Picker",
                                            },
                                            1
                                          ),
                                          Object(o.jsx)(
                                            "button",
                                            {
                                              className: "mobileButton",
                                              id: "Solver",
                                              data: "Solving",
                                              onClick: function (t) {
                                                return s(t, e.props);
                                              },
                                              children: "Solver",
                                            },
                                            2
                                          ),
                                        ],
                                      })
                                    : Object(o.jsxs)(o.Fragment, {
                                        children: [
                                          Object(o.jsx)(
                                            "button",
                                            {
                                              className: "blankButton",
                                            },
                                            1
                                          ),
                                          Object(o.jsx)(
                                            "button",
                                            {
                                              className: "blankButton",
                                            },
                                            2
                                          ),
                                        ],
                                      }),
                                  t
                                    ? Object(o.jsx)(
                                        "button",
                                        {
                                          className: "mobileButton",
                                          id: "Algorithms",
                                          data: "Algorithms",
                                          onClick: function (t) {
                                            return s(t, e.props);
                                          },
                                          children: "Patterns",
                                        },
                                        3
                                      )
                                    : "",
                                ],
                              }),
                              Object(o.jsxs)(N.a, {
                                xs: 6,
                                style: {
                                  paddingLeft: "7.5px",
                                },
                                children: [
                                  this.props.state.cubeDimension < 1
                                    ? Object(o.jsx)(
                                        "button",
                                        {
                                          className: "mobileButton",
                                          onClick: function () {
                                            return n;
                                          },
                                          children: "Moves",
                                        },
                                        0
                                      )
                                    : Object(o.jsx)(
                                        "button",
                                        {
                                          className: "blankButton",
                                        },
                                        0
                                      ),
                                  Object(o.jsx)(
                                    "button",
                                    {
                                      className: "mobileButton",
                                      id: "Scramble",
                                      onClick: function (t) {
                                        return n(t, e.props);
                                      },
                                      children: "Scramble",
                                    },
                                    2
                                  ),
                                  Object(o.jsx)(
                                    "button",
                                    {
                                      className: "mobileButton",
                                      id: "Reset",
                                      onClick: function (t) {
                                        return n(t, e.props);
                                      },
                                      children: "Reset",
                                    },
                                    3
                                  ),
                                ],
                              }),
                            ],
                          }),
                  });
                },
              },
            ]),
            n
          );
        })(s.Component),
        Ot =
          (n(112),
          function (e) {
            var t = be
                .filter(function (t) {
                  return t.worksFor.includes(e.state.cubeDimension);
                })
                .map(function (t) {
                  return Object(o.jsx)(
                    "button",
                    {
                      id: t.name,
                      className:
                        e.state.activeAlgo === t.name
                          ? "algoButton algoActive"
                          : "algoButton",
                      onClick: function (t) {
                        return (function (e, t) {
                          if (
                            t.state.autoPlay ||
                            t.state.autoRewind ||
                            t.state.playOne
                          )
                            return;
                          var n = t.state.cubeDimension,
                            o = e.target.id,
                            s = [],
                            a = ht.generateSolved(n, n, n);
                          be.forEach(function (e) {
                            e.moves &&
                              e.name === o &&
                              e.worksFor.includes(n) &&
                              s.push.apply(s, Object(h.a)(e.moves.split(" ")));
                          }),
                            t.setState({
                              activeAlgo: o,
                              moveSet: [].concat(s),
                              rubiksObject: a.tempArr,
                              solveable: !0,
                              solvedSet: [].concat(s),
                              solvedSetIndex: 0,
                              prevSet: [],
                              autoPlay: !1,
                              autoRewind: !1,
                              autoTarget: !1,
                              playOne: !1,
                              jumpToEnd: !0,
                            });
                        })(t, e);
                      },
                      children: t.name,
                    },
                    t.name
                  );
                }),
              n = Object(o.jsxs)(o.Fragment, {
                children: [
                  e.state.cubeDimension <= 100
                    ? Object(o.jsx)(
                        "button",
                        {
                          id: "ColorPicker",
                          data: "Color Picker",
                          onClick: s,
                          className: "leftButton",
                          children: "Color Picker",
                        },
                        "Color Picker"
                      )
                    : Object(o.jsx)("button", {
                        className: "leftButton invis",
                      }),
                  e.state.cubeDimension <= 100
                    ? Object(o.jsx)(
                        "button",
                        {
                          id: "Solver",
                          data: "Solving",
                          onClick: s,
                          className: "leftButton",
                          children: "Solver",
                        },
                        "Soler"
                      )
                    : Object(o.jsx)("button", {
                        className: "leftButton invis",
                      }),
                  t.length
                    ? Object(o.jsx)(
                        "button",
                        {
                          id: "Algorithms",
                          data: "None",
                          onClick: s,
                          className: "leftButton",
                          children: "Patterns",
                        },
                        "Algorithms"
                      )
                    : Object(o.jsx)("button", {
                        className: "leftButton invis",
                      }),
                ],
              });

            function s(t) {
              "None" === e.state.currentFunc &&
                ("ColorPicker" === t.target.id
                  ? (e.setState({
                      activeMenu: t.target.id,
                      isValidConfig: !0,
                    }),
                    e.beginColorPicker())
                  : "Solver" === t.target.id
                  ? e.setState(
                      {
                        activeMenu: t.target.id,
                      },
                      e.beginSolve()
                    )
                  : "Algorithms" === t.target.id
                  ? (console.log(e.state.currentFunc),
                    e.setState({
                      activeMenu: t.target.id,
                      currentFunc: "Algorithms",
                      solveOnce: !1,
                      solvedSet: [],
                      prevSet: [],
                      moveSet: [],
                      activeAlgo: "",
                    }))
                  : e.setState({
                      activeMenu: t.target.id,
                      currentFunc: "None",
                    }));
            }
            return Object(o.jsx)("div", {
              className: "menuOptionsWrapper",
              children:
                "Solving" === e.state.currentFunc
                  ? []
                  : "Color Picker" === e.state.currentFunc
                  ? Object(o.jsxs)(o.Fragment, {
                      children: [
                        Object(o.jsx)("div", {
                          style: {
                            paddingTop: "45%",
                          },
                        }),
                        Object(o.jsx)(
                          "button",
                          {
                            id: "ColorPicker",
                            data: "Color Picker",
                            onClick: s,
                            className: "cpButton activeMenu",
                            children: "Exit",
                          },
                          "Color Picker"
                        ),
                      ],
                    })
                  : "Algorithms" === e.state.currentFunc
                  ? Object(o.jsx)("div", {
                      className: "algoList",
                      children: t,
                    })
                  : n,
            });
          }),
        Dt = a.a.memo(Ot),
        kt = function (e) {
          var t = Object(o.jsxs)(o.Fragment, {
            children: [
              Object(o.jsx)(
                "button",
                {
                  className: "rightButton invis",
                },
                "Blank"
              ),
              Object(o.jsx)(
                "button",
                {
                  id: "Scramble",
                  onClick: n,
                  className: "rightButton scramble",
                  children: "Scramble",
                },
                "Scramble"
              ),
              Object(o.jsx)(
                "button",
                {
                  id: "Reset",
                  onClick: n,
                  className: "rightButton reset",
                  children: "Reset",
                },
                "Reset"
              ),
            ],
          });

          function n(t) {
            switch (t.target.id) {
              case "Reset":
                e.setState({
                  activeMenu: "",
                  currentFunc: "Reset",
                });
                break;
              case "Scramble":
                "None" === e.state.currentFunc && e.beginScramble();
                break;
              default:
                e.setState({
                  activeMenu: t.target.id,
                  currentFunc: "None",
                });
            }
          }
          return Object(o.jsx)("div", {
            className: "menuOptionsWrapper",
            style: {
              float: "right",
            },
            children:
              "Solving" === e.state.currentFunc ||
              "Color Picker" === e.state.currentFunc ||
              "Algorithms" === e.state.currentFunc
                ? Object(o.jsx)(o.Fragment, {
                    children: Object(o.jsx)("div", {
                      style: {
                        paddingTop: "45%",
                      },
                    }),
                  })
                : t,
          });
        },
        Bt = a.a.memo(kt),
        Rt = (function (e) {
          Object(b.a)(n, e);
          var t = Object(g.a)(n);

          function n(e) {
            return Object(p.a)(this, n), t.call(this, e);
          }
          return (
            Object(d.a)(n, [
              {
                key: "shouldComponentUpdate",
                value: function (e, t) {
                  return (
                    this.props.state.upDateCp !== e.state.upDateCp ||
                    this.props.state.solvedSet !== e.state.solvedSet ||
                    this.props.state.currentFunc !== e.state.currentFunc ||
                    this.props.state.activeAlgo !== e.state.activeAlgo ||
                    ((this.props.state.activeAlgo !== e.state.activeAlgo ||
                      this.props.state.solvedSetIndex !==
                        e.state.solvedSetIndex ||
                      (!this.props.state.autoRewind &&
                        !this.props.state.autoPlay) ||
                      this.props.state.autoRewind !== e.state.autoRewind ||
                      this.props.state.autoPlay !== e.state.autoPlay) &&
                      (this.props.state.solvedSetIndex !==
                        e.state.solvedSetIndex ||
                        !!(
                          e.state.autoRewind &&
                          e.state.solvedSetIndex >= e.state.targetSolveIndex - 1
                        ) ||
                        !!(
                          e.state.autoPlay &&
                          e.state.solvedSetIndex < e.state.targetSolveIndex - 1
                        ) ||
                        !(e.state.autoRewind || !this.props.state.autoRewind) ||
                        !(e.state.autoPlay || !this.props.state.autoPlay) ||
                        (!(
                          this.props.state.activeMenu === e.state.activeMenu &&
                          this.props.state.colorPicked ===
                            e.state.colorPicked &&
                          this.props.state.currentFunc ===
                            e.state.currentFunc &&
                          this.props.state.isValidConfig ===
                            e.state.isValidConfig &&
                          this.props.cpErrors === e.cpErrors &&
                          this.props.state.solveTime === e.state.solveTime &&
                          this.props.state.playOne === e.state.playOne &&
                          !this.props.state.autoPlay
                        ) &&
                          !(
                            this.props.state.solvedSetIndex ===
                              e.state.solvedSetIndex &&
                            this.props.state.autoPlay &&
                            this.props.state.solvedSetIndex <
                              this.props.state.targetSolveIndex
                          ) &&
                          !(
                            this.props.state.solvedSetIndex ===
                              e.state.solvedSetIndex &&
                            this.props.state.autoRewind &&
                            this.props.state.solvedSetIndex >=
                              this.props.state.targetSolveIndex
                          ))))
                  );
                },
              },
              {
                key: "render",
                value: function () {
                  var e;
                  switch (this.props.state.activeMenu) {
                    case "Moves":
                      e = Object(o.jsx)(P, Object(l.a)({}, this.props));
                      break;
                    case "ColorPicker":
                      e = Object(o.jsx)(St, Object(l.a)({}, this.props));
                      break;
                    case "Solver":
                    case "Algorithms":
                      e = Object(o.jsx)(ft, Object(l.a)({}, this.props));
                      break;
                    default:
                      e = "";
                  }
                  return Object(o.jsx)("div", {
                    className: "menuWrapper",
                    style: {
                      pointerEvents: "none",
                    },
                    children: Object(o.jsxs)(I.a, {
                      style: {
                        height: "100%",
                        margin: "0px",
                      },
                      children: [
                        "ColorPicker" === this.props.state.activeMenu ||
                        "Solver" === this.props.state.activeMenu
                          ? []
                          : [
                              Object(o.jsx)(
                                N.a,
                                {
                                  style: {
                                    paddingLeft: "0px",
                                  },
                                  children: Object(o.jsx)(
                                    Dt,
                                    Object(l.a)({}, this.props)
                                  ),
                                },
                                "MenuOptions"
                              ),
                              Object(o.jsx)(
                                N.a,
                                {
                                  style: {
                                    padding: 0,
                                    color: "black",
                                    opacity: 0,
                                  },
                                  xs: 0.5,
                                  children: ".",
                                },
                                "MenuOptionsPadding"
                              ),
                            ],
                        Object(o.jsx)(N.a, {
                          id: "menuBox",
                          style: {
                            position: "relative",
                            bottom: "0",
                            height: "100%",
                          },
                          xs:
                            "Color Picker" === this.props.state.currentFunc ||
                            "Solver" === this.props.state.activeMenu
                              ? 12
                              : "None" === this.props.state.currentFunc ||
                                "Scrambling" === this.props.state.currentFunc ||
                                "Reset" === this.props.state.currentFunc
                              ? 4
                              : 8,
                          children: e,
                        }),
                        "ColorPicker" === this.props.state.activeMenu ||
                        "Solver" === this.props.state.activeMenu ||
                        "Algorithms" === this.props.state.activeMenu
                          ? []
                          : [
                              Object(o.jsx)(
                                N.a,
                                {
                                  style: {
                                    padding: 0,
                                    color: "black",
                                    opacity: 0,
                                  },
                                  xs: 0.5,
                                  children: ".",
                                },
                                "MenuOptionsOther"
                              ),
                              Object(o.jsx)(
                                N.a,
                                {
                                  style: {
                                    paddingLeft: "0px",
                                    minWidth: "150px",
                                    paddingRight: "0px",
                                  },
                                  children: Object(o.jsx)(
                                    Bt,
                                    Object(l.a)({}, this.props)
                                  ),
                                },
                                "MenuOptionsOtherPadding"
                              ),
                            ],
                      ],
                    }),
                  });
                },
              },
            ]),
            n
          );
        })(s.Component),
        wt = a.a.memo(Rt),
        Lt =
          (n(42),
          function (e) {
            var t = Object(s.useState)("Solve"),
              n = Object(i.a)(t, 2),
              a = n[0],
              r = n[1],
              c = Object(s.useState)("Check"),
              l = Object(i.a)(c, 2),
              u = l[0],
              h = l[1];
            return Object(o.jsx)("div", {
              className: "sideMenuBox0 sideLimit",
              children: Object(o.jsx)("div", {
                className: "sideMenuBox1",
                children: Object(o.jsxs)("div", {
                  className: "cpInfo",
                  style: {
                    width: "100%",
                  },
                  children: [
                    e.isValidConfig
                      ? Object(o.jsx)("div", {
                          className: "solveCpDiv",
                          children: Object(o.jsx)("button", {
                            className: "solveCp",
                            onClick: function () {
                              r("Configuring..."),
                                setTimeout(function () {
                                  (document.querySelector(
                                    ".warningPopup"
                                  ).style.display = "none"),
                                    (document.querySelector(
                                      ".bottomExitDiv"
                                    ).style.visibility = "visible"),
                                    e.setColorPickedCube();
                                }, 100);
                            },
                            children: Object(o.jsx)("strong", {
                              style: {
                                color: "green",
                                fontSize: "1rem",
                              },
                              children: a,
                            }),
                          }),
                        })
                      : e.cpErrors.length
                      ? []
                      : Object(o.jsx)("div", {
                          className: "checkCpDiv",
                          children: Object(o.jsx)("button", {
                            className: "checkCp",
                            onClick: function () {
                              h("Checking..."),
                                setTimeout(function () {
                                  e.runCheckColors(), h("Check");
                                }, 100);
                            },
                            children: Object(o.jsx)("strong", {
                              style: {
                                color: "white",
                                fontSize: "1rem",
                              },
                              children: u,
                            }),
                          }),
                        }),
                    Object(o.jsx)("div", {
                      style: {
                        fontSize: ".5rem",
                      },
                      children: e.state.cpErrors.map(function (e, t) {
                        return Object(o.jsx)(
                          "p",
                          {
                            className: "cpErrorMessage",
                            children: "- " + e,
                          },
                          t
                        );
                      }),
                    }),
                  ],
                }),
              }),
            });
          }),
        Mt = (n(113), gt.setTarget),
        Ct = gt.algoStart,
        Ut = (function (e) {
          Object(b.a)(n, e);
          var t = Object(g.a)(n);

          function n(e) {
            return Object(p.a)(this, n), t.call(this, e);
          }
          return (
            Object(d.a)(n, [
              {
                key: "UNSAFE_componentWillReceiveProps",
                value: function (e) {
                  !0 === e.state.autoRewind &&
                  e.state.solvedSetIndex >= e.state.targetSolveIndex
                    ? ("stop'" === e.state.moveSet[0] &&
                        e.setState({
                          autoRewind: !1,
                        }),
                      e.rewindOne())
                    : !0 === e.state.autoRewind &&
                      e.state.solvedSetIndex <= e.state.targetSolveIndex &&
                      e.setState({
                        autoRewind: !1,
                      }),
                    !0 === e.state.autoPlay &&
                    e.state.solvedSetIndex < e.state.targetSolveIndex
                      ? ("stop'" === e.state.moveSet[0] &&
                          e.setState({
                            autoPlay: !1,
                          }),
                        e.playOne(e))
                      : !0 === e.state.autoPlay &&
                        e.state.solvedSetIndex >= e.state.targetSolveIndex &&
                        e.setState({
                          autoPlay: !1,
                        }),
                    e.state.jumpToEnd &&
                      e.setState(
                        {
                          jumpToEnd: !1,
                        },
                        Mt(
                          {
                            target: {
                              id: e.state.moveSet.length,
                            },
                          },
                          e
                        )
                      );
                },
              },
              {
                key: "componentDidMount",
                value: function () {
                  var e = this.props.setState,
                    t = this.props.state;
                  t.solveOnce &&
                    setTimeout(function () {
                      e(
                        Object(l.a)(
                          Object(l.a)({}, vt(t, t.rubiksObject)),
                          {},
                          {
                            solveOnce: !1,
                          }
                        )
                      );
                    }, 50);
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this,
                    t = [],
                    n = this.props.state.solveOnce
                      ? "Loading, please wait..."
                      : "Already Solved",
                    s =
                      "Solving" === this.props.state.currentFunc
                        ? n
                        : "None Selected",
                    a = [
                      Object(o.jsx)(
                        "div",
                        {
                          onClick: function (t) {
                            return c(t, e.props, Mt);
                          },
                          id: 0,
                          className: "solveMoveDiv jumper",
                          children: "Top",
                        },
                        -1
                      ),
                    ];
                  this.props.state.solvedSet.length
                    ? this.props.state.solvedSet.forEach(function (n, s) {
                        return n === e.props.state.solvedSet[s + 1]
                          ? Object(o.jsx)(o.Fragment, {})
                          : "stop'" === n
                          ? (t.push(
                              Object(o.jsxs)(
                                "div",
                                {
                                  style: {
                                    width: "100%",
                                  },
                                  children: [
                                    Object(o.jsx)(
                                      "hr",
                                      {
                                        style: {
                                          border: "1px solid lightblue",
                                          marginLeft: "5px",
                                        },
                                      },
                                      s
                                    ),
                                    1 === a.length ? "Edges: " : "3x3: ",
                                  ],
                                },
                                s
                              )
                            ),
                            a.push(
                              1 === a.length
                                ? Object(o.jsx)(
                                    "div",
                                    {
                                      onClick: function (t) {
                                        return c(t, e.props, Mt);
                                      },
                                      id: s + 1,
                                      className: "solveMoveDiv jumper",
                                      children: "Edge",
                                    },
                                    s
                                  )
                                : Object(o.jsx)(
                                    "div",
                                    {
                                      onClick: function (t) {
                                        return c(t, e.props, Mt);
                                      },
                                      id: s + 1,
                                      className: "solveMoveDiv jumper",
                                      children: "3x3",
                                    },
                                    s
                                  )
                            ))
                          : n === e.props.state.solvedSet[s - 1]
                          ? s === e.props.state.solvedSetIndex ||
                            (s === e.props.state.solvedSetIndex + 1 &&
                              n === e.props.state.solvedSet[s - 1])
                            ? t.push(
                                Object(o.jsx)(
                                  "div",
                                  {
                                    id: s - 1,
                                    className: "solveMoveDiv nextSolveIndex",
                                    children:
                                      n
                                        .replace("0".concat(n[1]), n[1])
                                        .replace("'", "") + "2",
                                  },
                                  s
                                )
                              )
                            : t.push(
                                Object(o.jsx)(
                                  "div",
                                  {
                                    onClick: function (t) {
                                      return Mt(t, e.props);
                                    },
                                    id: s - 1,
                                    className: "solveMoveDiv",
                                    children:
                                      n
                                        .replace("0".concat(n[1]), n[1])
                                        .replace("'", "") + "2",
                                  },
                                  s
                                )
                              )
                          : s === e.props.state.solvedSetIndex ||
                            (s === e.props.state.solvedSetIndex + 1 &&
                              n === e.props.state.solvedSet[s - 1])
                          ? t.push(
                              Object(o.jsx)(
                                "div",
                                {
                                  id: s,
                                  className: "solveMoveDiv nextSolveIndex",
                                  children: n.replace("0".concat(n[1]), n[1]),
                                },
                                s
                              )
                            )
                          : t.push(
                              Object(o.jsx)(
                                "div",
                                {
                                  onClick: function (t) {
                                    return Mt(t, e.props);
                                  },
                                  id: s,
                                  className: "solveMoveDiv",
                                  children: n.replace("0".concat(n[1]), n[1]),
                                },
                                s
                              )
                            );
                      })
                    : t.push(s),
                    t.map(function (e) {
                      return Object(o.jsx)(je.a, {
                        height: "2rem",
                        children: "el",
                      });
                    });
                  var r = be
                    .filter(function (t) {
                      return t.worksFor.includes(e.props.state.cubeDimension);
                    })
                    .map(function (t) {
                      return Object(o.jsx)(
                        "button",
                        {
                          id: t.name,
                          className:
                            e.props.state.activeAlgo === t.name
                              ? "algoButton algoActive"
                              : "algoButton",
                          onClick: function () {
                            return Ct(t.name, e.props);
                          },
                          children: t.name,
                        },
                        t.name
                      );
                    });

                  function c(e, t, n) {
                    t.setState({
                      autoScroll: !0,
                    }),
                      n(e, t);
                  }
                  return Object(o.jsx)("div", {
                    className: "sideMenu",
                    children: Object(o.jsx)("div", {
                      className: "sideMenuBox0 sideLimit",
                      children:
                        "Solving" === this.props.state.currentFunc
                          ? Object(o.jsx)("div", {
                              className: "sideMovesBox",
                              children: t,
                            })
                          : [
                              Object(o.jsx)(
                                "div",
                                {
                                  className: "sideMenuBox1",
                                  children: Object(o.jsx)("div", {
                                    className: "algoList",
                                    style: {
                                      maxWidth: "400px",
                                    },
                                    children: r,
                                  }),
                                },
                                "sideMenuBox1"
                              ),
                              Object(o.jsx)(
                                "div",
                                {
                                  className: "sideMenuBox2",
                                  children: Object(o.jsx)("div", {
                                    className: "sideMovesBox",
                                    children: t,
                                  }),
                                },
                                "sideMenuBox2"
                              ),
                            ],
                    }),
                  });
                },
              },
            ]),
            n
          );
        })(s.Component),
        zt = a.a.memo(Ut),
        Pt = (function (e) {
          Object(b.a)(n, e);
          var t = Object(g.a)(n);

          function n(e) {
            return Object(p.a)(this, n), t.call(this, e);
          }
          return (
            Object(d.a)(n, [
              {
                key: "UNSAFE_componentWillReceiveProps",
                value: function (e) {
                  !0 === e.state.autoRewind &&
                  e.state.solvedSetIndex >= e.state.targetSolveIndex
                    ? ("stop'" === e.state.moveSet[0] &&
                        e.setState({
                          autoRewind: !1,
                        }),
                      e.rewindOne())
                    : !0 === e.state.autoRewind &&
                      e.state.solvedSetIndex <= e.state.targetSolveIndex &&
                      e.setState({
                        autoRewind: !1,
                      }),
                    !0 === e.state.autoPlay &&
                    e.state.solvedSetIndex < e.state.targetSolveIndex
                      ? ("stop'" === e.state.moveSet[0] &&
                          e.setState({
                            autoPlay: !1,
                          }),
                        e.playOne(e))
                      : !0 === e.state.autoPlay &&
                        e.state.solvedSetIndex >= e.state.targetSolveIndex &&
                        e.setState({
                          autoPlay: !1,
                        });
                },
              },
              {
                key: "componentDidUpdate",
                value: function () {
                  document.querySelector(".nextSolveIndex") &&
                    this.props.state.autoScroll &&
                    (document
                      .querySelector(".nextSolveIndex")
                      .scrollIntoView(!0),
                    this.props.setState({
                      autoScroll: !1,
                    }));
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this,
                    t = this.props.state.prevSet,
                    n = this.props.state.moveSet,
                    s = Object(o.jsx)("div", {
                      className: "previousMove",
                      children:
                        t.length - 1 >= 0
                          ? "stop'" === t[t.length - 1]
                            ? t[t.length - 2]
                              ? t[t.length - 2] === t[t.length - 3]
                                ? t[t.length - 2]
                                    .replace(
                                      "0" + t[t.length - 2][1],
                                      t[t.length - 2][1]
                                    )
                                    .replace("'", "") + 2
                                : t[t.length - 2].replace(
                                    "0" + t[t.length - 2][1],
                                    t[t.length - 2][1]
                                  )
                              : "-"
                            : t[t.length - 1] === t[t.length - 2]
                            ? t[t.length - 1]
                                .replace(
                                  "0" + t[t.length - 1][1],
                                  t[t.length - 1][1]
                                )
                                .replace("'", "") + 2
                            : t[t.length - 1].replace(
                                "0" + t[t.length - 1][1],
                                t[t.length - 1][1]
                              )
                          : "-",
                    }),
                    a = Object(o.jsx)("div", {
                      className: "nextMove",
                      children:
                        n[0] && "string" === typeof n[0][0] && "'" !== n[0]
                          ? "stop'" === n[0]
                            ? n[1]
                              ? n[1] === n[2]
                                ? n[1]
                                    .replace("0" + n[1][1], n[1][1])
                                    .replace("'", "") + 2
                                : n[1].replace("0" + n[1][1], n[1][1])
                              : "-"
                            : n[0] === n[1]
                            ? n[0]
                                .replace("0" + n[0][1], n[0][1])
                                .replace("'", "") + 2
                            : n[0].replace("0" + n[0][1], n[0][1])
                          : "-",
                    });

                  function r(e) {
                    e.setState({
                      autoPlay: !1,
                      autoRewind: !1,
                    });
                  }
                  return Object(o.jsx)("div", {
                    className: "controllerBox",
                    style: {
                      width: "30vw",
                    },
                    children: Object(o.jsxs)("div", {
                      className: "buttonWrapper",
                      children: [
                        Object(o.jsx)("div", {
                          className: "solverButtonDiv rewindOne",
                          children: Object(o.jsxs)("button", {
                            className: "solverButton",
                            onClick: function () {
                              return e.props.rewindOne(e.props);
                            },
                            children: ["Previous ", s],
                          }),
                        }),
                        Object(o.jsx)("div", {
                          className: "solverButtonDiv playOne",
                          children: Object(o.jsxs)("button", {
                            className: "solverButton",
                            onClick: function () {
                              return e.props.playOne(e.props);
                            },
                            children: ["Next ", a],
                          }),
                        }),
                        Object(o.jsx)("div", {
                          className: "solverButtonDiv rewindAll",
                          children: this.props.state.autoRewind
                            ? Object(o.jsxs)("button", {
                                className: "solverButton",
                                onClick: function () {
                                  return r(e.props);
                                },
                                children: [
                                  Object(o.jsx)("div", {
                                    style: {
                                      width: "100%",
                                    },
                                    children: "Pause",
                                  }),
                                  " Solver",
                                ],
                              })
                            : Object(o.jsxs)("button", {
                                className: "solverButton",
                                onClick: function () {
                                  e.props.setState({
                                    autoPlay: !1,
                                    autoRewind: !0,
                                    targetSolveIndex: 0,
                                  });
                                },
                                children: [
                                  Object(o.jsx)("div", {
                                    style: {
                                      width: "100%",
                                    },
                                    children: "Auto",
                                  }),
                                  " Rewind",
                                ],
                              }),
                        }),
                        Object(o.jsx)("div", {
                          className: "solverButtonDiv fastforward",
                          children: this.props.state.autoPlay
                            ? Object(o.jsxs)("button", {
                                className: "solverButton",
                                onClick: function () {
                                  return r(e.props);
                                },
                                children: [
                                  Object(o.jsx)("div", {
                                    style: {
                                      width: "100%",
                                    },
                                    children: "Pause",
                                  }),
                                  " Solver",
                                ],
                              })
                            : Object(o.jsxs)("button", {
                                className: "solverButton",
                                onClick: function () {
                                  var t;
                                  (t = e.props).state.moveSet.length &&
                                    (1 === t.state.moveSet.length
                                      ? t.playOne(t)
                                      : t.setState({
                                          autoPlay: !0,
                                          autoRewind: !1,
                                          targetSolveIndex:
                                            t.state.solvedSet.length,
                                        }));
                                },
                                children: [
                                  Object(o.jsx)("div", {
                                    style: {
                                      width: "100%",
                                    },
                                    children: "Auto",
                                  }),
                                  " Forward",
                                ],
                              }),
                        }),
                      ],
                    }),
                  });
                },
              },
            ]),
            n
          );
        })(s.Component),
        It = a.a.memo(Pt),
        Nt = function (e) {
          var t = [];
          return (
            e.cpErrors.forEach(function (e, n) {
              t.push(
                Object(o.jsx)(
                  "p",
                  {
                    style: {
                      color: "red",
                      fontSize: ".8rem",
                      textAlign: "left",
                      listStyle: "none",
                      margin: "2px",
                      lineHeight: "15px",
                    },
                    children: "- " + e,
                  },
                  n
                )
              );
            }),
            Object(o.jsx)("div", {
              className: "controllerBox",
              style: {
                width: "30vw",
              },
              children: Object(o.jsx)("div", {
                className: "colorButtonContainer",
                children: [
                  "white",
                  "blue",
                  "red",
                  "yellow",
                  "orange",
                  "green",
                ].map(function (t, n) {
                  return Object(o.jsx)(
                    xt,
                    {
                      index: n + 1,
                      height: (1 / 3) * 100,
                      color: t,
                      side: !0,
                      colorPicked: e.colorPicked,
                      changeColor: e.changeColor,
                      isMobile: e.isMobile,
                    },
                    t
                  );
                }),
              }),
            })
          );
        },
        Et =
          (n(114),
          function (e) {
            return Object(o.jsx)("div", {
              className: "mainSideMenuButton",
              style: {
                height: "".concat((1 / 6) * 100, "%"),
              },
              children: Object(o.jsx)("button", {
                className: "sideMenuButton",
                onClick: e.onClick,
                children: e.name,
              }),
            });
          }),
        At = function (e) {
          var t = be.filter(function (t) {
            return t.worksFor.includes(e.state.cubeDimension);
          });
          return Object(o.jsxs)("div", {
            className: "sideMenuBox0 sideLimit",
            children: [
              e.state.cubeDimension <= 100
                ? Object(o.jsx)(Et, {
                    name: "Color Picker",
                    onClick: function () {
                      "None" === e.state.currentFunc &&
                        (e.setState({
                          activeMenu: "ColorPicker",
                          isValidConfig: !0,
                        }),
                        e.beginColorPicker());
                    },
                  })
                : [],
              e.state.cubeDimension <= 100
                ? Object(o.jsx)(Et, {
                    name: "Solver",
                    onClick: function () {
                      "None" === e.state.currentFunc &&
                        e.setState(
                          {
                            activeMenu: "Solver",
                          },
                          e.beginSolve()
                        );
                    },
                  })
                : [],
              t.length > 0
                ? Object(o.jsx)(Et, {
                    name: "Patterns",
                    onClick: function () {
                      "None" === e.state.currentFunc &&
                        e.setState({
                          activeMenu: "Algorithms",
                          currentFunc: "Algorithms",
                          solveOnce: !1,
                          solvedSet: [],
                          prevSet: [],
                          moveSet: [],
                        });
                    },
                  })
                : [],
              Object(o.jsx)(Et, {
                name: "Scramble",
                onClick: function () {
                  "None" === e.state.currentFunc &&
                    e.setState(
                      {
                        activeMenu: "Scrambling",
                      },
                      e.beginScramble()
                    );
                },
              }),
              Object(o.jsx)(Et, {
                name: "Reset",
                onClick: function () {
                  e.setState({
                    activeMenu: "",
                    currentFunc: "Reset",
                  });
                },
              }),
            ],
          });
        },
        Tt = (function (e) {
          Object(b.a)(n, e);
          var t = Object(g.a)(n);

          function n(e) {
            return Object(p.a)(this, n), t.call(this, e);
          }
          return (
            Object(d.a)(n, [
              {
                key: "shouldComponentUpdate",
                value: function (e, t) {
                  return (
                    this.props.state.upDateCp !== e.state.upDateCp ||
                    this.props.state.solvedSet !== e.state.solvedSet ||
                    this.props.state.currentFunc !== e.state.currentFunc ||
                    this.props.state.activeAlgo !== e.state.activeAlgo ||
                    ((this.props.state.activeAlgo !== e.state.activeAlgo ||
                      this.props.state.solvedSetIndex !==
                        e.state.solvedSetIndex ||
                      (!this.props.state.autoRewind &&
                        !this.props.state.autoPlay) ||
                      this.props.state.autoRewind !== e.state.autoRewind ||
                      this.props.state.autoPlay !== e.state.autoPlay) &&
                      (this.props.state.solvedSetIndex !==
                        e.state.solvedSetIndex ||
                        !!(
                          e.state.autoRewind &&
                          e.state.solvedSetIndex >= e.state.targetSolveIndex - 1
                        ) ||
                        !!(
                          e.state.autoPlay &&
                          e.state.solvedSetIndex < e.state.targetSolveIndex - 1
                        ) ||
                        !(e.state.autoRewind || !this.props.state.autoRewind) ||
                        !(e.state.autoPlay || !this.props.state.autoPlay) ||
                        (!(
                          this.props.state.activeMenu === e.state.activeMenu &&
                          this.props.state.colorPicked ===
                            e.state.colorPicked &&
                          this.props.state.currentFunc ===
                            e.state.currentFunc &&
                          this.props.state.isValidConfig ===
                            e.state.isValidConfig &&
                          this.props.cpErrors === e.cpErrors &&
                          this.props.state.solveTime === e.state.solveTime &&
                          this.props.state.playOne === e.state.playOne &&
                          !this.props.state.autoPlay
                        ) &&
                          !(
                            this.props.state.solvedSetIndex ===
                              e.state.solvedSetIndex &&
                            this.props.state.autoPlay &&
                            this.props.state.solvedSetIndex <
                              this.props.state.targetSolveIndex
                          ) &&
                          !(
                            this.props.state.solvedSetIndex ===
                              e.state.solvedSetIndex &&
                            this.props.state.autoRewind &&
                            this.props.state.solvedSetIndex >=
                              this.props.state.targetSolveIndex
                          ))))
                  );
                },
              },
              {
                key: "render",
                value: function () {
                  var e,
                    t,
                    n,
                    s = this;
                  var a = Object(o.jsx)("button", {
                      id: "Solver",
                      data: "Solving",
                      onClick: function () {
                        (document.querySelector(
                          ".warningPopupSolver"
                        ).style.visibility = "visible"),
                          (document.querySelector(
                            ".controllerBox"
                          ).style.visibility = "hidden"),
                          (document.querySelector(
                            ".bottomExitDiv"
                          ).style.visibility = "hidden");
                      },
                      className: "exitButton",
                      children: "Exit",
                    }),
                    r = Object(o.jsx)("button", {
                      id: "Algorithms",
                      data: "Algorithms",
                      onClick: function () {
                        s.props.setState({
                          activeMenu: "",
                          currentFunc: "Reset",
                          solvedSet: [],
                          hoverData: [],
                          prevSet: [],
                          moveSet: [],
                          isValidConfig: !1,
                          targetSolveIndex: -1,
                          solveMoves: "",
                          autoPlay: !1,
                          autoRewind: !1,
                          autoTarget: !1,
                          playOne: !1,
                          activeAlgo: "none",
                        });
                      },
                      className: "exitButton",
                      children: "Exit",
                    }),
                    c = Object(o.jsx)("button", {
                      id: "ColorPicker",
                      data: "Color Picker",
                      onClick: function () {
                        (document.querySelector(".warningPopup").style.display =
                          "block"),
                          (document.querySelector(
                            ".colorButtonContainer"
                          ).style.visibility = "hidden"),
                          (document.querySelector(
                            ".bottomExitDiv"
                          ).style.visibility = "hidden");
                      },
                      className: "exitButton",
                      children: "Exit",
                    }),
                    i = Object(o.jsxs)("div", {
                      id: "controlsPopup",
                      className: "warningPopupSolver",
                      style: {
                        position: "absolute",
                        left: "35vw",
                        width: "30vw",
                        bottom: "8px",
                      },
                      children: [
                        Object(o.jsx)("div", {
                          id: "solverChangeData",
                          data: "",
                        }),
                        Object(o.jsx)("div", {
                          className: "solverMessage",
                          children:
                            "Are you sure you want to leave Solver? Progress will not be saved.",
                        }),
                        Object(o.jsx)("button", {
                          onClick: function () {
                            (document.querySelector(
                              ".warningPopupSolver"
                            ).style.visibility = "hidden"),
                              (document.querySelector(
                                ".controllerBox"
                              ).style.visibility = "visible"),
                              (document.querySelector(
                                ".bottomExitDiv"
                              ).style.visibility = "visible");
                          },
                          className: "solverLeaveStay",
                          children: "Stay",
                        }),
                        Object(o.jsx)("button", {
                          onClick: function (e) {
                            return (function (e, t) {
                              if (
                                ((document.querySelector(
                                  ".warningPopupSolver"
                                ).style.visibility = "hidden"),
                                (document.querySelector(
                                  ".bottomExitDiv"
                                ).style.visibility = "visible"),
                                e.stopPropagation(),
                                t.stopSolve(),
                                document.querySelector(".activeMenu") &&
                                  document
                                    .querySelector(".activeMenu")
                                    .classList.remove("activeMenu"),
                                document.querySelector("#solverChangeData")
                                  .data)
                              ) {
                                var n = document
                                  .querySelector("#solverChangeData")
                                  .data.split(",");
                                if ("ColorPicker" === n[0])
                                  return (
                                    t.setState({
                                      activeMenu: "",
                                      currentFunct: "None",
                                      isValidConfig: !1,
                                    }),
                                    void (document.querySelector(
                                      "#solverChangeData"
                                    ).data = "")
                                  );
                                document
                                  .querySelector("#".concat(n[0]))
                                  .classList.add("activeMenu"),
                                  t.setState({
                                    activeMenu: n[0],
                                    currentFunct: n[1],
                                    isValidConfig: !1,
                                  }),
                                  (document.querySelector(
                                    "#solverChangeData"
                                  ).data = "");
                              } else
                                t.setState({
                                  activeMenu: "",
                                  currentFunct: "None",
                                  isValidConfig: !1,
                                });
                            })(e, s.props);
                          },
                          className: "solverLeaveStay",
                          children: "Leave",
                        }),
                      ],
                    }),
                    u = Object(o.jsxs)("div", {
                      id: "controlsPopup",
                      className: "warningPopup",
                      style: {
                        position: "absolute",
                        left: "35vw",
                        width: "30vw",
                        bottom: "8px",
                      },
                      children: [
                        Object(o.jsx)("div", {
                          id: "cpChangeData",
                          data: "",
                        }),
                        Object(o.jsx)("div", {
                          className: "cpMessage",
                          children:
                            "Are you sure you want to leave Color Picker? Progress will not be saved.",
                        }),
                        Object(o.jsx)("button", {
                          onClick: function () {
                            (document.querySelector(
                              ".warningPopup"
                            ).style.display = "none"),
                              (document.querySelector(
                                ".colorButtonContainer"
                              ).style.visibility = "visible"),
                              (document.querySelector(
                                ".bottomExitDiv"
                              ).style.visibility = "visible");
                          },
                          className: "cpLeaveStay",
                          children: "Stay",
                        }),
                        Object(o.jsx)("button", {
                          onClick: function () {
                            if (
                              ((document.querySelector(
                                ".warningPopup"
                              ).style.display = "none"),
                              (document.querySelector(
                                ".bottomExitDiv"
                              ).style.visibility = "visible"),
                              s.props.endColorPicker(),
                              document.querySelector(".activeMenu") &&
                                document
                                  .querySelector(".activeMenu")
                                  .classList.remove("activeMenu"),
                              document.querySelector("#cpChangeData").data)
                            ) {
                              var e = document
                                .querySelector("#cpChangeData")
                                .data.split(",");
                              if ("Solver" === e[0])
                                return (
                                  s.props.setState({
                                    activeMenu: "",
                                    currentFunct: "None",
                                    isValidConfig: !1,
                                  }),
                                  void (document.querySelector(
                                    "#cpChangeData"
                                  ).data = "")
                                );
                              document
                                .querySelector("#".concat(e[0]))
                                .classList.add("activeMenu"),
                                (document.querySelector("#cpChangeData").data =
                                  ""),
                                s.props.setState(
                                  {
                                    activeMenu: e[0],
                                    currentFunc: e[1],
                                    isValidConfig: !1,
                                  },
                                  function () {
                                    return s.props.beginSolve();
                                  }
                                );
                            } else
                              s.props.setState({
                                activeMenu: "",
                                currentFunct: "None",
                                isValidConfig: !1,
                              });
                          },
                          className: "cpLeaveStay",
                          children: "Leave",
                        }),
                      ],
                    });
                  switch (this.props.state.activeMenu) {
                    case "Moves":
                      e = Object(o.jsx)(P, Object(l.a)({}, this.props));
                      break;
                    case "ColorPicker":
                      (e = Object(o.jsx)(Lt, Object(l.a)({}, this.props))),
                        (t = Object(o.jsx)(Nt, Object(l.a)({}, this.props))),
                        (n = c);
                      break;
                    case "Solver":
                      (e = Object(o.jsx)(zt, Object(l.a)({}, this.props))),
                        (t = Object(o.jsx)(It, Object(l.a)({}, this.props))),
                        (n = a);
                      break;
                    case "Algorithms":
                      (e = Object(o.jsx)(zt, Object(l.a)({}, this.props))),
                        (t = Object(o.jsx)(It, Object(l.a)({}, this.props))),
                        (n = r);
                      break;
                    default:
                      (e = Object(o.jsx)(At, Object(l.a)({}, this.props))),
                        (t = "");
                  }
                  return [
                    Object(o.jsx)(
                      "div",
                      {
                        className: "sideMenuWrapper",
                        style: {
                          pointerEvents: "none",
                        },
                        children: e,
                      },
                      "sideMenuWrapper"
                    ),
                    Object(o.jsxs)(
                      "div",
                      {
                        className: "bottomMenuWrapper",
                        style: {
                          pointerEvents: "none",
                        },
                        children: [
                          u,
                          i,
                          t,
                          Object(o.jsx)("div", {
                            className: "bottomExitDiv",
                            children: n,
                          }),
                        ],
                      },
                      "bottomMenuWrapper"
                    ),
                  ];
                },
              },
            ]),
            n
          );
        })(s.Component),
        qt = a.a.memo(Tt),
        Xt = (function (e) {
          Object(b.a)(n, e);
          var t = Object(g.a)(n);

          function n(e) {
            return Object(p.a)(this, n), t.call(this, e);
          }
          return (
            Object(d.a)(n, [
              {
                key: "shouldComponentUpdate",
                value: function (e, t) {
                  return !0 === this.props.state.resized
                    ? (this.props.setState({
                        resized: !1,
                      }),
                      !0)
                    : this.props.state.upDateCp !== e.state.upDateCp ||
                        this.props.state.solvedSet !== e.state.solvedSet ||
                        "Scrambling" === this.props.state.currentFunc ||
                        ((this.props.state.activeMenu !== e.state.activeMenu ||
                          "none" !== this.props.state.activeMenu) &&
                          (("Algorithms" !== this.props.state.currentFunc &&
                            "Solving" !== this.props.state.currentFunc) ||
                            this.props.state.moveSet !== e.state.moveSet ||
                            !1 !== this.props.state.playOne ||
                            !1 !== this.props.state.autoPlay ||
                            !1 !== this.props.state.autoRewind ||
                            !1 !== e.state.autoRewind));
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this.props;
                  return window.innerWidth > 900 && window.innerHeight > 580
                    ? Object(o.jsx)(qt, Object(l.a)({}, e))
                    : window.innerWidth > 600
                    ? Object(o.jsx)(wt, Object(l.a)({}, e))
                    : Object(o.jsx)(Ft, Object(l.a)({}, e));
                },
              },
            ]),
            n
          );
        })(s.Component),
        Vt = a.a.memo(Xt),
        Wt = (n(221), n(222), n(223), n(140)),
        Zt = {
          alignQuadrant: function (e, t) {
            var n = e.position,
              o = {
                colors: e.colors,
              },
              s = t - 1;
            return (
              n[0] < Math.floor(t / 2) && n[1] >= Math.floor(t / 2)
                ? (o.position = [s - n[1], n[0], n[2]].join(""))
                : n[0] >= Math.floor(t / 2) && n[1] >= Math.ceil(t / 2)
                ? (o.position = [s - n[0], s - n[1], n[2]].join(""))
                : n[0] >= Math.ceil(t / 2) && n[1] < Math.ceil(t / 2)
                ? (o.position = [n[1], s - n[0], n[2]].join(""))
                : (o.position = n.join("")),
              o
            );
          },
          checkOccurences: function (e, t) {
            for (var n = !0, o = [], s = 0; s < e.length; s++) {
              for (var a = 0, r = 0; r < t.length; r++) t[r] === e[s] && a++;
              a > 1 && ((n = !1), o.includes(e[s]) || o.push(e[s]));
            }
            return {
              success: n,
              failedColors: o,
              amount: 0,
            };
          },
          convertToBlueMiddle: function (e, t) {
            var n = Object(h.a)(e),
              o = t - 1,
              s = t - 1,
              a = t - 1,
              r = t - 1;
            return 0 === n[7]
              ? {
                  colors: [n[5], n[0], n[2], n[1], n[4], n[3]].join(""),
                  position: [n[6], n[8], o],
                }
              : n[8] === s
              ? {
                  colors: [n[0], n[1], n[2], n[3], n[4], n[5]].join(""),
                  position: [n[6], n[7], o],
                }
              : n[6] === a
              ? {
                  colors: [n[0], n[2], n[5], n[3], n[1], n[4]].join(""),
                  position: [o - n[8], n[7], o],
                }
              : n[7] === r
              ? {
                  colors: [n[1], n[3], n[2], n[5], n[4], n[0]].join(""),
                  position: [n[6], o - n[8], o],
                }
              : 0 === n[6]
              ? {
                  colors: [n[0], n[4], n[1], n[3], n[5], n[2]].join(""),
                  position: [n[8], n[7], o],
                }
              : 0 === n[8]
              ? {
                  colors: [n[0], n[5], n[4], n[3], n[2], n[1]].join(""),
                  position: [o - n[6], n[7], o],
                }
              : void 0;
          },
          checkValidMatchMiddle: function (e, t, n) {
            var o = Zt.alignQuadrant(Zt.convertToBlueMiddle(e, n)),
              s = Zt.alignQuadrant(Zt.convertToBlueMiddle(t, n));
            return o.colors === s.colors && o.position === s.position;
          },
          convertToBlueWhiteEdge: function (e, t) {
            var n = Object(h.a)(e),
              o = t - 1,
              s = t - 1,
              a = t - 1,
              r = t - 1;
            return 0 === n[7] && n[8] === s
              ? {
                  colors: [n[0], n[1], n[2], n[3], n[4], n[5]].join(""),
                  position: [n[6], 0, o].join(""),
                }
              : 0 === n[6] && n[8] === s
              ? {
                  colors: [n[4], n[1], n[0], n[2], n[3], n[5]].join(""),
                  position: [o - n[7], 0, o].join(""),
                }
              : n[7] === r && n[8] === s
              ? {
                  colors: [n[3], n[1], n[4], n[0], n[2], n[5]].join(""),
                  position: [t - (n[6] + 1), 0, o].join(""),
                }
              : n[6] === a && n[8] === s
              ? {
                  colors: [n[2], n[1], n[3], n[4], n[0], n[5]].join(""),
                  position: [n[7], 0, o].join(""),
                }
              : 0 === n[6] && 0 === n[7]
              ? {
                  colors: [n[0], n[4], n[1], n[3], n[5], n[2]].join(""),
                  position: [n[8], 0, o].join(""),
                }
              : n[6] === a && 0 === n[7]
              ? {
                  colors: [n[0], n[2], n[5], n[3], n[1], n[4]].join(""),
                  position: [o - n[8], 0, o].join(""),
                }
              : 0 === n[6] && n[7] === r
              ? {
                  colors: [n[4], n[3], "black", "black", "black", "black"].join(
                    ""
                  ),
                  position: [n[8], 0, o].join(""),
                }
              : n[6] === a && n[7] === r
              ? {
                  colors: [n[2], n[3], "black", "black", "black", "black"].join(
                    ""
                  ),
                  position: [o - n[8], 0, o].join(""),
                }
              : 0 === n[7] && 0 === n[8]
              ? {
                  colors: [n[0], n[5], "black", "black", "black", "black"].join(
                    ""
                  ),
                  position: [o - n[6], 0, o].join(""),
                }
              : 0 === n[6] && 0 === n[8]
              ? {
                  colors: [n[4], n[5], "black", "black", "black", "black"].join(
                    ""
                  ),
                  position: [n[7], 0, o].join(""),
                }
              : n[7] === r && 0 === n[8]
              ? {
                  colors: [n[3], n[5], "black", "black", "black", "black"].join(
                    ""
                  ),
                  position: [n[6], 0, o].join(""),
                }
              : n[6] === a && 0 === n[8]
              ? {
                  colors: [n[2], n[5], "black", "black", "black", "black"].join(
                    ""
                  ),
                  position: [o - n[7], 0, o].join(""),
                }
              : (console.log("failed to register piece", n), null);
          },
          checkValidMatchEdge: function (e, t, n) {
            var o = n - 1,
              s = Zt.convertToBlueWhiteEdge(Object(h.a)(e), n),
              a = Zt.convertToBlueWhiteEdge(Object(h.a)(t), n);
            return (
              !!(
                (s.colors === a.colors && s.position === a.position) ||
                e.includes("center")
              ) ||
              (s.colors !== a.colors &&
                parseInt(s.position[0]) === o - parseInt(a.position[0]))
            );
          },
          checkColors: function (e) {
            for (
              var t,
                n,
                o = e.cubeDimension,
                s = e.rubiksObject.length,
                a = 0,
                r = 0,
                c = 0,
                i = 0,
                p = 0,
                d = 0,
                v = !1,
                b = [],
                g = 0,
                j = {
                  error: [],
                },
                y = o * o,
                m = Object(h.a)(e.rubiksObject),
                f = ht.generateSolved(o, o, o),
                x = [],
                S = 0;
              S < m.length;
              S++
            ) {
              var F = Object(h.a)(m[S]);
              F.includes("white") && (a += 1),
                F.includes("blue") && (r += 1),
                F.includes("red") && (c += 1),
                F.includes("yellow") && (i += 1),
                F.includes("orange") && (p += 1),
                F.includes("green") && (d += 1);
              var O = Zt.checkOccurences(
                ["white", "blue", "red", "yellow", "orange", "green"],
                F
              );
              O.success ||
                (function () {
                  v = !0;
                  var e = [];
                  O.failedColors.forEach(function (t) {
                    e.includes(t) || e.push(t);
                  }),
                    (b = e);
                })();
            }
            var D = [],
              k = [];
            f.tempArr.forEach(function (e, s) {
              var a = Object(u.a)(e).slice(0);
              x.push([]);
              var r = [];
              m.forEach(function (e, t) {
                var n = Object(u.a)(e).slice(0),
                  c = 0;
                if (
                  (a
                    .slice(0, 6)
                    .sort()
                    .forEach(function (e, t) {
                      n.slice(0, 6).sort()[t] === e && c++;
                    }),
                  6 === c && !D.includes(s) && !k.includes(t))
                ) {
                  var i = !1,
                    l = !1;
                  a.includes("edge")
                    ? ((i = Zt.checkValidMatchEdge(a, n, o)),
                      ("center" === a[13] && "center" !== n[13]) ||
                      ("center" === n[13] && "center" !== a[13])
                        ? (i = !1)
                        : "center" === a[13] && "center" === n[13] && (i = !0))
                    : a.includes("middle")
                    ? (l = Zt.checkValidMatchMiddle(a, n, o)) || r.push([a, n])
                    : ((i = !0), (l = !0)),
                    (i || l) &&
                      (g++,
                      D.push(s),
                      k.push(t),
                      (x[s] = [].concat(
                        Object(h.a)(n.slice(0, 9)),
                        Object(h.a)(a.slice(9, 15))
                      )));
                }
              }),
                0 === x[s].length &&
                  ("edge" === a[12]
                    ? (n = "Invalid edge configuration.")
                    : "middle" === a[12] &&
                      (t = "Invalid middle configuration."));
            });
            var B = [];
            (a !== y && B.push("white"),
            r !== y && B.push("blue"),
            c !== y && B.push("red"),
            i !== y && B.push("yellow"),
            p !== y && B.push("orange"),
            d !== y && B.push("green"),
            B.length &&
              ((B = B.join(", ")),
              j.error.push("Invalid ".concat(B, " sticker count."))),
            v &&
              ((b = b.join(", ")),
              j.error.push(
                "More than one occurence of ".concat(b, " found on a piece.")
              )),
            g !== s &&
              e.cubeDimension < 4 &&
              j.error.push(
                "["
                  .concat(g - 1, "] out of [")
                  .concat(s - 1, "] matched. Missing [")
                  .concat(s - 1 - (g - 1), "]")
              ),
            n && j.error.push(n),
            t && j.error.push(t),
            j.error.length) ||
              (!1 === Object(l.a)({}, vt(e, x)).solveable
                ? j.error.push(
                    "This configuration of the cube is not solveable,\n            please check that you've entered all pieces correctly."
                  )
                : (j.error = void 0));
            return j.error || ((j.success = !0), (j.newGenerated = x)), j;
          },
        },
        Yt = Zt,
        Ht = (function (e) {
          Object(b.a)(n, e);
          var t = Object(g.a)(n);

          function n() {
            var e;
            Object(p.a)(this, n);
            for (var o = arguments.length, s = new Array(o), a = 0; a < o; a++)
              s[a] = arguments[a];
            return (
              ((e = t.call.apply(t, [this].concat(s))).state = {
                cubes: [],
                rubiksObject: [],
                blackObject: [],
                speed: 7.5,
                rotationSpeed: 350,
                start: 7.5,
                end: 0,
                turnDirection: 0,
                face: 0,
                cameraX: 5,
                cameraY: -5,
                cameraZ: 2,
                currentFunc: "None",
                moveLog: "",
                moveSet: [],
                prevSet: [],
                angle: 3.9,
                cubeDimension: null,
                cubeDepth: 1,
                currentSpeed: "Medium",
                moves: 0,
                reload: !1,
                solveState: -1,
                solveMoves: "",
                solvedSet: [],
                solvedSetIndex: 0,
                facePosX: null,
                facePosY: null,
                facePosZ: null,
                faceSide: null,
                colorPicked: "white",
                mouseFace: null,
                mouseDown: !1,
                mousePos: null,
                undoIndex: 0,
                blockMoveLog: !1,
                previousPiece: null,
                rubiksIndex: 0,
                middles: [],
                corners: [],
                showMoveInput: !1,
                showControls: !1,
                showHints: !0,
                showGuideArrows: !0,
                activeDragsInput: 0,
                deltaPositionInput: {
                  x: 100,
                  y: 100,
                },
                controlledPositionInput: {
                  x: 0,
                  y: 0,
                },
                activeDragsControls: 0,
                deltaPositionControls: {
                  x: 100,
                  y: 100,
                },
                controlledPositionControls: {
                  x: 0,
                  y: 0,
                },
                isMulti: !1,
                isVisible: !1,
                isValidConfig: !0,
                hoverData: [],
                showSolveController: !1,
                autoPlay: !1,
                autoRewind: !1,
                autoTarget: !1,
                playOne: !1,
                generateAllMoves: !1,
                isLocal: null,
                cpErrors: [],
                activeMenu: "",
                solveTime: 0,
                targetSolveIndex: -1,
                activeAlgo: "None Selected",
                sliderSpeed: 40,
                jumpToEnd: !1,
                algoUp: !1,
                algoDown: !1,
                upDateCp: 0,
              }),
              (e.keyBinds = function (t) {
                switch (t) {
                  case "R":
                    e.rotateOneFace(t + "'", [2, 0, 1]);
                    break;
                  case "r":
                    e.rotateOneFace(t.toUpperCase(), [2, -1, 1]);
                    break;
                  case "L":
                    e.rotateOneFace(t + "'", [4, 0, 1]);
                    break;
                  case "l":
                    e.rotateOneFace(t.toUpperCase(), [4, -1, 1]);
                    break;
                  case "F":
                    e.rotateOneFace(t + "'", [0, 0, 1]);
                    break;
                  case "f":
                    e.rotateOneFace(t.toUpperCase(), [0, -1, 1]);
                    break;
                  case "U":
                    e.rotateOneFace(t + "'", [1, 0, 1]);
                    break;
                  case "u":
                    e.rotateOneFace(t.toUpperCase(), [1, -1, 1]);
                    break;
                  case "D":
                    e.rotateOneFace(t + "'", [5, 0, 1]);
                    break;
                  case "d":
                    e.rotateOneFace(t.toUpperCase(), [5, -1, 1]);
                    break;
                  case "B":
                    e.rotateOneFace(t + "'", [3, 0, 1]);
                    break;
                  case "b":
                    e.rotateOneFace(t.toUpperCase(), [3, -1, 1]);
                    break;
                  case "1":
                    "Color Picker" === e.state.currentFunc &&
                      e.changeColor("white");
                    break;
                  case "2":
                    "Color Picker" === e.state.currentFunc &&
                      e.changeColor("blue");
                    break;
                  case "3":
                    "Color Picker" === e.state.currentFunc &&
                      e.changeColor("red");
                    break;
                  case "4":
                    "Color Picker" === e.state.currentFunc &&
                      e.changeColor("yellow");
                    break;
                  case "5":
                    "Color Picker" === e.state.currentFunc &&
                      e.changeColor("orange");
                    break;
                  case "6":
                    "Color Picker" === e.state.currentFunc &&
                      e.changeColor("green");
                    break;
                  case "ArrowLeft":
                    "Solving" === e.state.currentFunc ||
                    "Algorithms" === e.state.currentFunc
                      ? e.rewindSolve()
                      : "None" === e.state.currentFunc && e.undo();
                    break;
                  case "ArrowRight":
                    if (
                      "Solving" === e.state.currentFunc ||
                      "Algorithms" === e.state.currentFunc
                    ) {
                      if (!e.state.moveSet.length) return;
                      if (
                        (e.state.moveSet[0] !== e.state.moveSet[1] &&
                          "stop'" !== e.state.moveSet[1]) ||
                        e.state.autoPlay
                      ) {
                        if (!0 === e.state.playOne) return;
                        e.state.moveSet[0] &&
                          "string" === typeof e.state.moveSet[0][0] &&
                          "'" !== e.state.moveSet[0] &&
                          e.setState({
                            playOne: !0,
                            prevSet: [].concat(Object(h.a)(e.state.prevSet), [
                              e.state.moveSet[0],
                            ]),
                          });
                      } else
                        e.setState({
                          autoPlay: !0,
                          autoRewind: !1,
                          targetSolveIndex: e.state.solvedSetIndex + 2,
                        });
                    } else "None" === e.state.currentFunc && e.redo();
                    break;
                  case "ArrowDown":
                    "Algorithms" === e.state.currentFunc &&
                      e.setState({
                        algoDown: !0,
                        resized: !0,
                      });
                    break;
                  case "ArrowUp":
                    "Algorithms" === e.state.currentFunc &&
                      e.setState({
                        algoUp: !0,
                        resized: !0,
                      });
                }
              }),
              (e.keyHandling = function (t) {
                e.keyBinds(t.key);
              }),
              (e.onSliderChange = function (t) {
                switch (
                  (e.setState({
                    sliderSpeed: t,
                  }),
                  t)
                ) {
                  case 0:
                    e.changeSpeed(1.5, 1050, "Slowest");
                    break;
                  case 10:
                    e.changeSpeed(3, 750, "Slower");
                    break;
                  case 20:
                    e.changeSpeed(5, 500, "Slow");
                    break;
                  case 30:
                    e.changeSpeed(7.5, 350, "Medium");
                    break;
                  case 40:
                    e.changeSpeed(10, 250, "Fast");
                    break;
                  case 50:
                    e.changeSpeed(15, 175, "Faster");
                    break;
                  case 60:
                    e.changeSpeed(30, 100, "Fastest");
                    break;
                  case 70:
                    e.changeSpeed(90, 20, "Zoomin");
                    break;
                  default:
                    console.log("unexpected behavior");
                }
              }),
              (e.changeSpeed = function (t, n, o, s) {
                "None" === e.state.currentFunc || s
                  ? e.setState({
                      currentSpeed: o,
                      speed: t,
                      start: t,
                      end: 0,
                      rotationSpeed: n,
                    })
                  : e.setState({
                      moveSet: [[t, n, o]].concat(Object(h.a)(e.state.moveSet)),
                    });
              }),
              (e.changeColor = function (t) {
                e.setState({
                  colorPicked: t,
                });
              }),
              (e.changeFaceColor = function (t, n, o) {
                for (
                  var s = Object(h.a)(e.state.rubiksObject), a = 0;
                  a < s.length;
                  a++
                ) {
                  var r = Object(h.a)(s[a]);
                  r[6] === t.x &&
                    r[7] === t.y &&
                    r[8] === t.z &&
                    ((r[n] = o), (s[a] = Object(h.a)(r)), (a = s.length));
                }
                e.setState(
                  {
                    rubiksObject: Object(h.a)(s),
                    isValidConfig: !1,
                    upDateCp: e.state.upDateCp + 1,
                    cpErrors: [],
                  },
                  function () {
                    e.reloadTurnedPieces("cp");
                  }
                );
              }),
              (e.setColorPickedCube = function () {
                var t = Object(h.a)(e.state.rubiksObject),
                  n = e.state.cubeDimension,
                  o = ht.generateSolved(n, n, n),
                  s = [],
                  a = [],
                  r = [];
                o.tempArr.forEach(function (e, o) {
                  var c = Object(u.a)(e).slice(0);
                  s.push([]),
                    t.forEach(function (e, t) {
                      var i = Object(u.a)(e).slice(0),
                        l = 0;
                      if (
                        (c
                          .slice(0, 6)
                          .sort()
                          .forEach(function (e, t) {
                            i.slice(0, 6).sort()[t] === e && l++;
                          }),
                        6 === l && !a.includes(o) && !r.includes(t))
                      ) {
                        var p = !1,
                          d = !1;
                        c.includes("edge")
                          ? ((p = Yt.checkValidMatchEdge(c, i, n)),
                            ("center" === c[13] && "center" !== i[13]) ||
                            ("center" === i[13] && "center" !== c[13])
                              ? (p = !1)
                              : "center" === c[13] &&
                                "center" === i[13] &&
                                (p = !0))
                          : c.includes("middle")
                          ? (d = Yt.checkValidMatchMiddle(c, i, n))
                          : ((p = !0), (d = !0)),
                          (p || d) &&
                            (a.push(o),
                            r.push(t),
                            (s[o] = [].concat(
                              Object(h.a)(i.slice(0, 9)),
                              Object(h.a)(c.slice(9, 15))
                            )));
                      }
                    });
                }),
                  e.setState(
                    {
                      rubiksObject: s,
                      currentFunc: "None",
                      activeMenu: "",
                    },
                    function () {
                      e.reloadTurnedPieces("check"),
                        e.setState({
                          activeMenu: "Solver",
                        }),
                        e.beginSolve();
                    }
                  );
              }),
              (e.undo = function () {
                var t = e.state.undoIndex,
                  n = e.state.moveLog,
                  o = dt.moveStringToArray(n);
                "" !== n &&
                  "None" === e.state.currentFunc &&
                  o.length - 1 - t >= 0 &&
                  e.setState({
                    blockMoveLog: !0,
                    currentFunc: "Undo",
                    moveSet: [o[o.length - 1 - t]],
                    undoIndex: t + 1,
                  });
              }),
              (e.redo = function () {
                if ("None" === e.state.currentFunc) {
                  var t = e.state.undoIndex,
                    n = e.state.moveLog;
                  if ("" !== n) {
                    var o = dt.moveStringToArray(n),
                      s = o[o.length - t];
                    try {
                      s.includes("'") ? (s = s.substring(0, 3)) : (s += "'");
                    } catch (a) {
                      return;
                    }
                    t > 0 &&
                      e.setState({
                        blockMoveLog: !0,
                        currentFunc: "Redo",
                        moveSet: [s],
                        undoIndex: t - 1,
                      });
                  }
                }
              }),
              (e.rotateOneFace = function (t, n) {
                if (
                  (n.length < 4 && n.push(!1), "None" === e.state.currentFunc)
                ) {
                  var o = e.state.cubeDimension,
                    s = e.state.rubiksObject,
                    a = e.state.blockMoveLog,
                    r = e.state.moveLog,
                    c = e.state.solveMoves,
                    i = e.state.solveState,
                    l = e.state.end,
                    u = ht.rotateCubeFace(
                      n[0],
                      n[1],
                      n[2],
                      n[3],
                      a,
                      r,
                      c,
                      l,
                      i
                    );
                  (u.currentFunc = t),
                    (u.rubiksObject = ht.rotateFace(
                      u.face,
                      u.turnDirection,
                      u.cubeDepth,
                      u.isMulti,
                      o,
                      s
                    )),
                    e.setState(u);
                }
              }),
              (e.algorithm = function (t, n) {
                if (
                  "Solving" !== e.state.currentFunc &&
                  "Algorithms" !== e.state.currentFunc
                ) {
                  if ("None" === e.state.currentFunc) {
                    var o = dt.moveStringToArray(t);
                    e.setState({
                      currentFunc: n,
                      moveSet: o,
                    });
                  }
                } else
                  e.state.moveSet[0] &&
                    dt.checkMoveEquivalence(
                      t,
                      e.state.moveSet[0],
                      e.state.cubeDimension
                    ) &&
                    e.playOne(Object(v.a)(e));
              }),
              (e.reset = function () {
                var t = e.state.cubeDimension,
                  n = ht.generateSolved(t, t, t).tempArr;
                e.setState(
                  {
                    rubiksObject: n,
                    moveSet: [],
                    moveLog: "",
                    currentFunc: "None",
                    solveState: -1,
                    autoPlay: !1,
                    playOne: !1,
                    isVisible: !1,
                    hoverData: [],
                    solveMoves: "",
                    prevSet: [],
                    cpErrors: [],
                    activeMenu: "none",
                  },
                  function () {
                    e.reloadTurnedPieces("all");
                  }
                );
              }),
              (e.beginScramble = function () {
                if ("None" === e.state.currentFunc) {
                  for (var t = []; t.length < 25; ) {
                    var n = dt.generateMove(e.state.cubeDimension);
                    (t[t.length - 1] &&
                      t[t.length - 1].slice(0, 3) === n.slice(0, 3) &&
                      t[t.length - 1].length !== n.length) ||
                      (t[t.length - 2] &&
                        t[t.length - 1] &&
                        t[t.length - 2] === n &&
                        t[t.length - 1] === n) ||
                      t.push(n);
                  }
                  e.setState({
                    currentFunc: "Scrambling",
                    moveSet: t,
                  });
                }
              }),
              (e.beginSolve = function () {
                "None" === e.state.currentFunc &&
                  e.setState({
                    currentFunc: "Solving",
                    solveState: 0,
                    autoPlay: !1,
                    playOne: !1,
                    solveOnce: !0,
                  });
              }),
              (e.stopSolve = function () {
                e.setState({
                  currentFunc: "None",
                  solveState: -1,
                  autoPlay: !1,
                  playOne: !1,
                  isVisible: !1,
                  hoverData: [],
                  solveMoves: "",
                  prevSet: [],
                  moveSet: [],
                  targetSolveIndex: -1,
                  solvedSet: [],
                });
              }),
              (e.beginColorPicker = function () {
                var t = e.state.cubeDimension;
                if ("None" === e.state.currentFunc) {
                  var n = Object(h.a)(ht.generateBlank(t, t, t));
                  e.setState(
                    {
                      currentFunc: "Color Picker",
                      rubiksObject: Object(h.a)(n),
                    },
                    function () {
                      e.reloadTurnedPieces("cp");
                    }
                  );
                }
              }),
              (e.endColorPicker = function () {
                e.reset(),
                  e.setState({
                    currentFunc: "None",
                    cpErrors: [],
                  });
              }),
              (e.playOne = function (e) {
                if (e.state.moveSet.length)
                  if (
                    (e.state.moveSet[0] !== e.state.moveSet[1] &&
                      "stop'" !== e.state.moveSet[1]) ||
                    e.state.autoPlay
                  ) {
                    if (!0 === e.state.playOne) return;
                    e.state.moveSet[0] &&
                      "string" === typeof e.state.moveSet[0][0] &&
                      "'" !== e.state.moveSet[0] &&
                      e.setState({
                        playOne: !0,
                        prevSet: [].concat(Object(h.a)(e.state.prevSet), [
                          e.state.moveSet[0],
                        ]),
                      });
                  } else
                    e.setState({
                      autoPlay: !0,
                      autoRewind: !1,
                      targetSolveIndex: e.state.solvedSetIndex + 2,
                    });
              }),
              (e.rewindSolve = function () {
                if (!e.state.playOne)
                  if (
                    (e.state.prevSet[e.state.prevSet.length - 1] !==
                      e.state.prevSet[e.state.prevSet.length - 2] &&
                      "stop'" !==
                        e.state.prevSet[e.state.prevSet.length - 1]) ||
                    e.state.autoRewind
                  ) {
                    var t = [],
                      n = Object(h.a)(e.state.moveSet),
                      o = Object(h.a)(e.state.prevSet),
                      s = o[o.length - 1],
                      a = o.pop();
                    a
                      ? ("'" === a[a.length - 1]
                          ? (a = a.slice(0, 3))
                          : (a += "'"),
                        t.push.apply(t, [a, s].concat(Object(h.a)(n))),
                        e.setState({
                          playOne: !0,
                          prevSet: o,
                          moveSet: t,
                          solvedSetIndex: e.state.solvedSetIndex - 2,
                        }))
                      : e.setState({
                          autoRewind: !1,
                        });
                  } else
                    e.setState({
                      autoPlay: !1,
                      autoRewind: !0,
                      targetSolveIndex: e.state.solvedSetIndex - 2,
                    });
              }),
              (e.handleDragInput = function (t, n) {
                var o = e.state.deltaPositionInput,
                  s = o.x,
                  a = o.y;
                e.setState({
                  deltaPositionInput: {
                    x: s + n.deltaX,
                    y: a + n.deltaY,
                  },
                });
              }),
              (e.onStartInput = function () {
                e.setState({
                  activeDragsInput: e.state.activeDragsInput + 1,
                });
              }),
              (e.onStopInput = function () {
                e.setState({
                  activeDragsInput: e.state.activeDragsInput - 1,
                });
              }),
              (e.mouseOver = function (t, n, o) {
                e.state.showHints &&
                  e.setState({
                    isVisible: !0,
                    hoverData: n,
                  });
              }),
              (e.mouseLeave = function () {
                e.setState({
                  isVisible: !1,
                  hoverData: [],
                });
              }),
              (e.reloadTurnedPieces = function (t) {
                for (
                  var n = Object(h.a)(e.state.cubes), o = 0;
                  o < e.state.rubiksObject.length;
                  o++
                ) {
                  var s = Object(l.a)({}, n[o]),
                    a = s.rotation;
                  t === s.position
                    ? ((s.opacity = 1), (n[o] = s))
                    : (0 === a.x &&
                        0 === a.y &&
                        0 === a.z &&
                        "all" !== t &&
                        "cp" !== t &&
                        "check" !== t) ||
                      (("all" !== t && "cp" !== t) ||
                        ((s.position.x = e.state.rubiksObject[o][9]),
                        (s.position.y = e.state.rubiksObject[o][10]),
                        (s.position.z = e.state.rubiksObject[o][11])),
                      "check" === t &&
                        ((s.position.x = e.state.rubiksObject[o][6]),
                        (s.position.y = e.state.rubiksObject[o][7]),
                        (s.position.z = e.state.rubiksObject[o][8])),
                      (s.material[0].color = new lt.b(
                        e.state.rubiksObject[o][2]
                      )),
                      (s.material[1].color = new lt.b(
                        e.state.rubiksObject[o][4]
                      )),
                      (s.material[2].color = new lt.b(
                        e.state.rubiksObject[o][3]
                      )),
                      (s.material[3].color = new lt.b(
                        e.state.rubiksObject[o][0]
                      )),
                      (s.material[4].color = new lt.b(
                        e.state.rubiksObject[o][1]
                      )),
                      (s.material[5].color = new lt.b(
                        e.state.rubiksObject[o][5]
                      )),
                      (s.rotation.x = 0),
                      (s.rotation.y = 0),
                      (s.rotation.z = 0),
                      (n[o] = s));
                }
                e.setState({
                  cubes: n,
                  reload: !1,
                });
              }),
              (e.menuSetState = function (t) {
                e.setState(t, function () {
                  t.activeAlgo && e.reloadTurnedPieces("all");
                });
              }),
              (e.windowResized = function () {
                e.setState({
                  resized: !0,
                });
              }),
              e
            );
          }
          return (
            Object(d.a)(n, [
              {
                key: "onMouseUp",
                value: function (e) {
                  this.setState({
                    mouseDown: !1,
                  });
                },
              },
              {
                key: "runCheckColors",
                value: function () {
                  var e = Yt.checkColors(this.state);
                  e.error
                    ? this.setState({
                        cpErrors: Object(h.a)(e.error),
                      })
                    : e.success &&
                      this.setState({
                        isValidConfig: !0,
                        cpErrors: [],
                      });
                },
              },
              {
                key: "changeSettings",
                value: function (e, t) {
                  switch (e) {
                    case "displayMoveInput":
                      this.setState({
                        showMoveInput: !this.state.showMoveInput,
                      });
                      break;
                    case "displayControls":
                      this.setState({
                        showControls: !this.state.showControls,
                      });
                      break;
                    case "displayHints":
                      this.setState({
                        showHints: !this.state.showHints,
                      });
                      break;
                    default:
                      console.log("Invalid Setting");
                  }
                },
              },
              {
                key: "componentWillUnmount",
                value: function () {
                  window.removeEventListener("keydown", this.keyHandling);
                },
              },
              {
                key: "getSizeFromUrl",
                value: function (e) {
                  var t,
                    n = window.location.href.split("/"),
                    o = n[n.length - 1].slice(0, 4);
                  // return e
                  //   ? "localhost" === n[2].substr(0, 9)
                  //   : ("#id=" === o &&
                  //       (t = parseInt(n[n.length - 1].substr(4))),
                  //     t <= 75 && t >= 1 ? t : 3);
                  const sides = window.location.href.split("#id=")[1];
                  console.log("url===>", window.location.href, o);
                  return sides ? sides : 6;
                },
              },
              {
                key: "calculateTurn",
                value: function (e, t, n, o, s) {
                  var a = null,
                    r = null,
                    c = null,
                    i = {
                      x: t.x - e.x,
                      y: t.y - e.y,
                      z: t.z - e.z,
                    };
                  if (e.x === t.x && e.y === t.y && e.z === t.z) return null;

                  function l(e, t, n, o, s, a, r, c) {
                    return Math.abs(e) >= Math.abs(n) && Math.abs(e) > 0.05
                      ? {
                          calculated: t ? r : r + "'",
                          depth: a,
                        }
                      : Math.abs(n) > Math.abs(e) && Math.abs(n) > 0.05
                      ? {
                          calculated: o ? c : c + "'",
                          depth: s,
                        }
                      : {
                          calculated: null,
                          depth: null,
                        };
                  }
                  switch (o) {
                    case 0:
                      (a = (c = l(
                        i.z,
                        i.z < 0,
                        i.x,
                        i.x >= 0,
                        s - n.z,
                        s - n.x,
                        "R",
                        "U"
                      )).calculated),
                        (r = c.depth);
                      break;
                    case 1:
                      (a = (c = l(
                        i.x,
                        i.x <= 0,
                        i.y,
                        i.y < 0,
                        s - n.x,
                        n.y + 1,
                        "F",
                        "R"
                      )).calculated),
                        (r = c.depth);
                      break;
                    case 2:
                      (a = (c = l(
                        i.z,
                        i.z > 0,
                        i.y,
                        i.y > 0,
                        s - n.z,
                        n.y + 1,
                        "F",
                        "U"
                      )).calculated),
                        (r = c.depth);
                      break;
                    case 3:
                      (a = (c = l(
                        i.z,
                        i.z > 0,
                        i.x,
                        i.x <= 0,
                        s - n.z,
                        s - n.x,
                        "R",
                        "U"
                      )).calculated),
                        (r = c.depth);
                      break;
                    case 4:
                      (a = (c = l(
                        i.z,
                        i.z < 0,
                        i.y,
                        i.y < 0,
                        s - n.z,
                        n.y + 1,
                        "F",
                        "U"
                      )).calculated),
                        (r = c.depth);
                      break;
                    case 5:
                      (a = (c = l(
                        i.x,
                        i.x >= 0,
                        i.y,
                        i.y > 0,
                        s - n.x,
                        n.y + 1,
                        "F",
                        "R"
                      )).calculated),
                        (r = c.depth);
                  }
                  return (r < 10 ? "0" : "") + r + a;
                },
              },
              {
                key: "calculateTheta",
                value: function () {},
              },
              {
                key: "componentDidMount",
                value: function () {
                  var e = this,
                    t = this.getSizeFromUrl(),
                    n = ht.generateSolved(t, t, t),
                    o = n.tempArr,
                    s = [],
                    a = null,
                    r = null,
                    c = !1,
                    u = new lt.n(),
                    p = new lt.j(
                      75,
                      window.innerWidth / window.innerHeight,
                      0.1,
                      1e3
                    ),
                    d = new lt.t({
                      antialias: !0,
                      alpha: !0,
                    }),
                    v = new lt.m(),
                    b = new lt.r(),
                    g = new lt.a(),
                    j = new lt.q().load(
                      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQW92XE-j1aJzRMI9kvvMZIf2VikZzzdEI87zl4rWgHMJBNJ9iw7A&s"
                    ),
                    y = new lt.q().load(
                      "https://cdn2.iconfinder.com/data/icons/communication-language/100/Up_Arrow-01-512.png"
                    ),
                    m = Math.tan(((Math.PI / 180) * p.fov) / 2),
                    f = window.innerHeight,
                    x = ht.generateMoveHints(y, t),
                    S = this.calculateTurn,
                    F = this.algorithm;

                  function O(e) {
                    a && (a.object.material[r].opacity = 1),
                      c && L.reset(),
                      (c = !1),
                      (a = null),
                      (L.enabled = !0);
                  }
                  window.addEventListener("keydown", this.keyHandling, !1),
                    window.addEventListener(
                      "mousemove",
                      function (e) {
                        (b.x = (e.clientX / window.innerWidth) * 2 - 1),
                          (b.y = (-e.clientY / window.innerHeight) * 2 + 1),
                          v.setFromCamera(b, p);
                        var n = v.intersectObjects(u.children);
                        if (a && n.length) {
                          var o = n[0].point,
                            s = Object(l.a)({}, a.point),
                            c = Object(l.a)({}, a.object.position),
                            i = Math.floor(a.faceIndex / 2),
                            h = S(o, s, c, [2, 4, 3, 0, 1, 5][i], t);
                          null === h ||
                            h.includes("null") ||
                            (F(h, "Drag Turn"),
                            (a.object.material[r].opacity = 1),
                            (a = null),
                            (r = null));
                        }
                      }.bind(this),
                      !1
                    ),
                    window.addEventListener(
                      "mousedown",
                      function (e) {
                        (L.enabled = !0),
                          (c = !1),
                          (b.x = (e.clientX / window.innerWidth) * 2 - 1),
                          (b.y = (-e.clientY / window.innerHeight) * 2 + 1),
                          v.setFromCamera(b, p);
                        var t = v.intersectObjects(u.children);
                        if (t.length) {
                          (c = !0), L.saveState(), (L.enabled = !1);
                          for (
                            var n = t[0].faceIndex, o = -1, s = 0;
                            s < 6;
                            s++
                          )
                            if (n === 2 * s || n === 2 * s + 1) {
                              o = s;
                              break;
                            }
                          if ("Color Picker" === this.state.currentFunc) {
                            this.changeFaceColor(
                              {
                                x: t[0].object.position.x,
                                y: t[0].object.position.y,
                                z: t[0].object.position.z,
                              },
                              [2, 4, 3, 0, 1, 5][o],
                              this.state.colorPicked
                            );
                          }
                          t[0].object.material[o] &&
                            o > -1 &&
                            t[0].object.material[o].color &&
                            ((a = t[0]),
                            (r = o),
                            (t[0].object.material[o].opacity = 0.8));
                        } else (L.enabled = !0), (a = null), (r = null);
                      }.bind(this),
                      !1
                    ),
                    window.addEventListener(
                      "touchstart",
                      function (e) {
                        (L.enabled = !0),
                          (c = !1),
                          (b.x =
                            (e.touches[0].clientX / window.innerWidth) * 2 - 1),
                          (b.y =
                            (-e.touches[0].clientY / window.innerHeight) * 2 +
                            1),
                          v.setFromCamera(b, p);
                        var t = v.intersectObjects(u.children);
                        if (t.length) {
                          (c = !0), L.saveState(), (L.enabled = !1);
                          for (
                            var n = t[0].faceIndex, o = -1, s = 0;
                            s < 6;
                            s++
                          )
                            if (n === 2 * s || n === 2 * s + 1) {
                              o = s;
                              break;
                            }
                          if ("Color Picker" === this.state.currentFunc) {
                            this.changeFaceColor(
                              {
                                x: t[0].object.position.x,
                                y: t[0].object.position.y,
                                z: t[0].object.position.z,
                              },
                              [2, 4, 3, 0, 1, 5][o],
                              this.state.colorPicked
                            );
                          }
                          t[0].object.material[o] &&
                            o > -1 &&
                            t[0].object.material[o].color &&
                            ((a = t[0]),
                            (r = o),
                            (t[0].object.material[o].opacity = 0.8));
                        } else (L.enabled = !0), (a = null), (r = null);
                      }.bind(this),
                      !1
                    ),
                    window.addEventListener(
                      "touchmove",
                      function (e) {
                        a && (L.enabled = !1),
                          (b.x =
                            (e.touches[0].clientX / window.innerWidth) * 2 - 1),
                          (b.y =
                            (-e.touches[0].clientY / window.innerHeight) * 2 +
                            1),
                          v.setFromCamera(b, p);
                        var n = v.intersectObjects(u.children);
                        if (a && n.length) {
                          var o = n[0].point,
                            s = Object(l.a)({}, a.point),
                            c = Object(l.a)({}, a.object.position),
                            i = Math.floor(a.faceIndex / 2),
                            h = S(o, s, c, [2, 4, 3, 0, 1, 5][i], t);
                          null === h ||
                            h.includes("null") ||
                            (F(h, "Drag Turn"),
                            (a.object.material[r].opacity = 1),
                            (a = null),
                            (r = null));
                        }
                      }.bind(this),
                      !1
                    ),
                    window.addEventListener("touchend", O, !1),
                    window.addEventListener("mouseup", O, !1),
                    window.addEventListener(
                      "resize",
                      function () {
                        return (
                          (t = e.windowResized),
                          (p.aspect = window.innerWidth / window.innerHeight),
                          (p.fov =
                            (360 / Math.PI) *
                            Math.atan(m * (window.innerHeight / f))),
                          p.updateProjectionMatrix(),
                          p.lookAt(u.position),
                          d.setSize(window.innerWidth, window.innerHeight - 10),
                          d.render(u, p),
                          void t()
                        );
                        var t;
                      },
                      !1
                    ),
                    d.setClearColor(new lt.b("black"), 0),
                    (d.domElement.className = "canvas"),
                    d.setSize(window.innerWidth, window.innerHeight),
                    document.body.children[5].appendChild(d.domElement),
                    (j.anisotropy = d.capabilities.getMaxAnisotropy()),
                    (y.anisotropy = d.capabilities.getMaxAnisotropy());
                  for (var D = 0; D < o.length; D++) {
                    var k = o[D][6],
                      B = o[D][7],
                      R = o[D][8],
                      w = [
                        new lt.i({
                          map: j,
                          transparent: !0,
                          opacity: 1,
                          color: o[D][2],
                          side: lt.e,
                        }),
                        new lt.i({
                          map: j,
                          transparent: !0,
                          opacity: 1,
                          color: o[D][4],
                          side: lt.e,
                        }),
                        new lt.i({
                          map: j,
                          transparent: !0,
                          opacity: 1,
                          color: o[D][3],
                          side: lt.e,
                        }),
                        new lt.i({
                          map: j,
                          transparent: !0,
                          opacity: 1,
                        }),
                        new lt.i({
                          map: j,
                          transparent: !0,
                          opacity: 1,
                          color: o[D][1],
                          side: lt.e,
                        }),
                        new lt.i({
                          map: j,
                          transparent: !0,
                          opacity: 1,
                          color: o[D][5],
                          side: lt.e,
                        }),
                      ];
                    (s[D] = new lt.h(g, w)),
                      s[D].translateX(k),
                      s[D].translateY(B),
                      s[D].translateZ(R);
                  }
                  u.translateX(0.5 - t / 2),
                    u.translateY(0.5 - t / 2),
                    u.translateZ(0.5 - t / 2);
                  var L = new Wt.a(p, d.domElement);
                  (L.enabled = !0),
                    (L.enableDamping = !0),
                    (L.dampingFactor = 0.15),
                    (L.enableZoom = !0),
                    (L.autoRotate = !1),
                    (L.minDistance = 2 + t),
                    (L.maxDistance = 2 + t + 20),
                    (L.enablePan = !1),
                    (L.keys = {
                      LEFT: null,
                      UP: null,
                      RIGHT: null,
                      BOTTOM: null,
                    }),
                    L.addEventListener("change", function (e) {
                      d && d.render(u, p);
                    }),
                    x.forEach(function (e) {
                      return u.add.apply(u, Object(h.a)(e));
                    }),
                    this.setState(
                      {
                        cubes: s,
                        cubeDimension: t,
                        cameraZ: -(2 + t),
                        cameraX: 2 + t,
                        cameraY: -(2 + t),
                        rubiksObject: o,
                        middles: n.middles,
                        edges: n.edges,
                        corners: n.corners,
                        currentFunc: "Reset",
                        generatedButtons: ht.generateButtonData(
                          this.getSizeFromUrl()
                        ),
                      },
                      function () {
                        for (var t = 0; t < o.length; t++)
                          (0 !== e.state.cubes[t].position.x &&
                            e.state.cubes[t].position.x !==
                              e.state.cubeDimension - 1 &&
                            0 !== e.state.cubes[t].position.y &&
                            e.state.cubes[t].position.y !==
                              e.state.cubeDimension - 1 &&
                            0 !== e.state.cubes[t].position.z &&
                            e.state.cubes[t].position.z !==
                              e.state.cubeDimension - 1) ||
                            u.add(e.state.cubes[t]);
                        (p.position.z = e.state.cameraZ),
                          (p.position.y = e.state.cameraY),
                          (p.position.x = e.state.cameraX),
                          d.render(u, p),
                          M();
                      }
                    );
                  var M = function t() {
                    requestAnimationFrame(t);
                    for (var n = 0; n < x.length; n++)
                      x[n].forEach(function (e) {
                        return (e.visible = !1);
                      });
                    if (e.state.start <= e.state.end)
                      e.setState(ht.rotatePieces(ht.rotatePoint, s, e.state));
                    else {
                      if (
                        ("Color Picker" === e.state.currentFunc ||
                          "None" === e.state.currentFunc ||
                          "Solving" === e.state.currentFunc ||
                          "Algorithms" === e.state.currentFunc) &&
                        e.state.isVisible
                      ) {
                        var o = Object(i.a)(e.state.hoverData, 4),
                          a = o[0],
                          r = o[1],
                          c = o[2],
                          l = o[3];
                        if (a < 3)
                          if (-1 === r)
                            if (l)
                              for (var v = 0; v <= c - 1; v++)
                                x[a][v].visible = !0;
                            else x[a][c - 1].visible = !0;
                          else if (l)
                            for (var b = 0; b <= c - 1; b++)
                              x[a + 3][b].visible = !0;
                          else x[a + 3][c - 1].visible = !0;
                        else if (
                          (3 === a && (a = 0),
                          4 === a && (a = 2),
                          5 === a && (a = 1),
                          -1 === r)
                        )
                          if (l)
                            for (
                              var g = x[a + 3].length - 1;
                              g >= x[a + 3].length - 1 - (c - 1);
                              g--
                            )
                              x[a + 3][g].visible = !0;
                          else
                            x[a + 3][x[a + 3].length - 1 - (c - 1)].visible =
                              !0;
                        else if (l)
                          for (
                            var j = x[a].length - 1;
                            j >= x[a + 3].length - 1 - (c - 1);
                            j--
                          )
                            x[a][j].visible = !0;
                        else x[a][x[a].length - 1 - (c - 1)].visible = !0;
                      }
                      if (
                        (e.state.reload && e.reloadTurnedPieces(e.state.face),
                        "None" !== e.state.currentFunc)
                      ) {
                        if (
                          "Undo" === e.state.currentFunc ||
                          "Redo" === e.state.currentFunc
                        );
                        else {
                          var y = e.state.moveLog,
                            m = e.state.undoIndex;
                          if (m > 0) {
                            var f = dt.moveStringToArray(y);
                            if (
                              "0" === e.state.currentFunc[0] ||
                              "1" === e.state.currentFunc[0] ||
                              "1" === e.state.currentFunc[1] ||
                              "2" === e.state.currentFunc[1] ||
                              "3" === e.state.currentFunc[1]
                            ) {
                              for (var S = f[f.length - 1], F = 0; F <= m; F++)
                                f.pop();
                              f.push(S);
                            } else for (var O = 0; O < m; O++) f.pop();
                            (y = f.join(" ")),
                              e.setState({
                                undoIndex: 0,
                                moveLog: y,
                              });
                          }
                        }
                        if ("Scrambling" === e.state.currentFunc)
                          if (e.state.moveSet && e.state.moveSet.length) {
                            var D = e.state.cubeDimension,
                              k = e.state.rubiksObject,
                              B = e.state.blockMoveLog,
                              R = e.state.moveLog,
                              w = e.state.solveMoves,
                              M = e.state.solveState,
                              C = e.state.end;
                            if ("number" === typeof e.state.moveSet[0][0]) {
                              var U = e.state.moveSet;
                              e.changeSpeed.apply(
                                e,
                                Object(h.a)(U[0]).concat([!0])
                              ),
                                U.shift(),
                                e.setState({
                                  moveSet: U,
                                });
                            } else {
                              var z = dt.parseMoveArray(e.state.moveSet);
                              if (z) {
                                var P = ht.rotateCubeFace.apply(
                                  ht,
                                  Object(h.a)(z).concat([B, R, w, C, M])
                                );
                                (P.rubiksObject = ht.rotateFace(
                                  P.face,
                                  P.turnDirection,
                                  P.cubeDepth,
                                  P.isMulti,
                                  D,
                                  k
                                )),
                                  e.setState(P);
                              }
                            }
                          } else
                            e.setState({
                              currentFunc: "None",
                              moves: 0,
                            });
                        else if (
                          "Solving" === e.state.currentFunc ||
                          "Algorithms" === e.state.currentFunc
                        )
                          if (
                            !e.state.autoTarget ||
                            e.state.autoPlay ||
                            e.state.autoRewind
                          ) {
                            if (e.state.playOne) {
                              var I = e.state.cubeDimension,
                                N = e.state.rubiksObject,
                                E = e.state.blockMoveLog,
                                A = e.state.moveLog,
                                T = e.state.solveMoves,
                                q = e.state.moveSet,
                                X = e.state.end,
                                V = e.state.solveState,
                                W = {};
                              if ("number" === typeof q[0][0])
                                e.changeSpeed.apply(
                                  e,
                                  Object(h.a)(q[0]).concat([!0])
                                ),
                                  q.shift(),
                                  (W.moveSet = q);
                              else {
                                var Z = dt.parseMoveArray(q);
                                Z &&
                                  (W = ht.rotateCubeFace.apply(
                                    ht,
                                    Object(h.a)(Z).concat([E, A, T, X, V])
                                  )),
                                  e.state.playOne && (W.playOne = !1),
                                  e.mouseLeave(),
                                  Z &&
                                    ((W.rubiksObject = ht.rotateFace(
                                      W.face,
                                      W.turnDirection,
                                      W.cubeDepth,
                                      W.isMulti,
                                      I,
                                      N
                                    )),
                                    (W.solvedSetIndex =
                                      e.state.solvedSetIndex + 1));
                              }
                              e.setState(W);
                            } else if (e.state.moveSet.length) {
                              var Y = e.state.moveSet,
                                H = {};
                              if ("number" === typeof Y[0][0])
                                e.changeSpeed.apply(
                                  e,
                                  Object(h.a)(Y[0]).concat([!0])
                                ),
                                  Y.shift(),
                                  (H.moveSet = Y);
                              else {
                                var J = dt.convertMoveToData(Y[0]);
                                J && e.mouseOver(e.state.moveSet[0], J);
                              }
                              H.length &&
                                e.setState({
                                  obj: H,
                                });
                            }
                          } else
                            e.setState(
                              {
                                autoTarget: !1,
                              },
                              function () {
                                return e.reloadTurnedPieces("check");
                              }
                            );
                        else if ("Color Picker" === e.state.currentFunc);
                        else if ("Reset" === e.state.currentFunc) e.reset();
                        else if (e.state.moveSet.length) {
                          var _ = e.state.cubeDimension,
                            G = e.state.rubiksObject,
                            Q = e.state.blockMoveLog,
                            K = e.state.moveLog,
                            $ = e.state.solveMoves,
                            ee = e.state.solveState,
                            te = e.state.end;
                          if ("number" === typeof e.state.moveSet[0][0]) {
                            var ne = e.state.moveSet;
                            e.changeSpeed.apply(
                              e,
                              Object(h.a)(ne[0]).concat([!0])
                            ),
                              ne.shift(),
                              e.setState({
                                moveSet: ne,
                              });
                          } else {
                            var oe = dt.parseMoveArray(e.state.moveSet);
                            if (oe) {
                              var se = ht.rotateCubeFace.apply(
                                ht,
                                Object(h.a)(oe).concat([Q, K, $, te, ee])
                              );
                              (se.rubiksObject = ht.rotateFace(
                                se.face,
                                se.turnDirection,
                                se.cubeDepth,
                                se.isMulti,
                                _,
                                G
                              )),
                                e.setState(se);
                            }
                          }
                        } else
                          e.setState({
                            currentFunc: "None",
                          });
                      }
                    }
                    L.update(), d.render(u, p);
                  };
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this;
                  return Object(o.jsxs)("div", {
                    className: "App",
                    style: {
                      width: "max-content",
                    },
                    children: [
                      Object(o.jsx)(f, {
                        title: "Rubik's Cube",
                        changeSettings: this.changeSettings.bind(this),
                        isLocal: this.getSizeFromUrl(!0),
                        state: this.state,
                      }),
                      "Color Picker" === this.state.currentFunc
                        ? Object(o.jsx)(o.Fragment, {})
                        : Object(o.jsxs)("p", {
                            style: {
                              position: "fixed",
                              top: "110px",
                              left: "10px",
                              color: "lightgrey",
                              fontSize: "1rem",
                            },
                            children: ["Speed: ", this.state.currentSpeed],
                          }),
                      Object(o.jsx)("div", {
                        style: {
                          width: "100%",
                          position: "absolute",
                          top: "85px",
                          margin: "auto",
                        },
                        children: Object(o.jsx)("div", {
                          style: {
                            width: "116px",
                            margin: "auto",
                          },
                          children:
                            "None" === this.state.currentFunc ||
                            "Undo" === this.state.currentFunc ||
                            "Redo" === this.state.currentFunc ||
                            "Drag Turn" === this.state.currentFunc
                              ? [
                                  Object(o.jsx)(
                                    "button",
                                    {
                                      className: "redoUndo",
                                      style: {
                                        marginRight: "8px",
                                        float: "left",
                                        width: "40px",
                                        height: "40px",
                                        fontSize: "1rem",
                                        backgroundImage:
                                          "url(https://cube-solver.com/buttonundo.svg)",
                                        backgroundRepeat: "no-repeat",
                                      },
                                      onClick: function () {
                                        return e.undo();
                                      },
                                    },
                                    "undo"
                                  ),
                                  Object(o.jsx)(
                                    "button",
                                    {
                                      className: "redoUndo",
                                      style: {
                                        marginLeft: "8px",
                                        float: "right",
                                        width: "40px",
                                        height: "40px",
                                        fontSize: "1rem",
                                        backgroundImage:
                                          "url(https://cube-solver.com/buttonredo.svg)",
                                        backgroundRepeat: "no-repeat",
                                      },
                                      onClick: function () {
                                        return e.redo();
                                      },
                                    },
                                    "redo"
                                  ),
                                ]
                              : "",
                        }),
                      }),
                      "Color Picker" === this.state.currentFunc
                        ? []
                        : Object(o.jsx)(S, {
                            onSliderChange: this.onSliderChange,
                            speed: this.state.sliderSpeed,
                          }),
                      this.state.showMoveInput
                        ? Object(o.jsx)(D, {
                            algorithm: this.algorithm,
                            handleDrag: this.handleDragInput,
                            onStart: this.onStartInput,
                            onStop: this.onStopInput,
                          })
                        : [],
                      "Solving" === this.state.currentFunc
                        ? Object(o.jsx)(k, {
                            solvedSetLength: this.state.solvedSet.length,
                            prevSetLength: this.state.prevSet.length,
                          })
                        : [],
                      "Color Picker" === this.state.currentFunc
                        ? Object(o.jsx)(B, {
                            colorPicked: this.state.colorPicked,
                          })
                        : [],
                      Object(o.jsx)(Vt, {
                        state: this.state,
                        setState: this.menuSetState,
                        beginScramble: this.beginScramble,
                        disableHover: this.state.showGuideArrows,
                        generatedButtons: this.state.generatedButtons,
                        size: this.getSizeFromUrl(),
                        rotateOneFace: this.rotateOneFace,
                        mouseEnter: this.mouseOver,
                        mouseLeave: this.mouseLeave,
                        beginColorPicker: this.beginColorPicker,
                        endColorPicker: this.endColorPicker,
                        colorPicked: this.state.colorPicked,
                        changeColor: this.changeColor,
                        isValidConfig: this.state.isValidConfig,
                        setColorPickedCube: this.setColorPickedCube,
                        cpErrors: this.state.cpErrors,
                        runCheckColors: this.runCheckColors,
                        beginSolve: this.beginSolve,
                        stopSolve: this.stopSolve,
                        playOne: this.playOne,
                        rewindOne: this.rewindSolve,
                        reload: this.reloadTurnedPieces,
                      }),
                    ],
                  });
                },
              },
            ]),
            n
          );
        })(s.Component),
        Jt = Boolean(
          "localhost" === window.location.hostname ||
            "[::1]" === window.location.hostname ||
            window.location.hostname.match(
              /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
            )
        );

      function _t(e, t) {
        navigator.serviceWorker
          .register(e)
          .then(function (e) {
            e.onupdatefound = function () {
              var n = e.installing;
              null != n &&
                (n.onstatechange = function () {
                  "installed" === n.state &&
                    (navigator.serviceWorker.controller
                      ? (console.log(
                          "New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."
                        ),
                        t && t.onUpdate && t.onUpdate(e))
                      : (console.log("Content is cached for offline use."),
                        t && t.onSuccess && t.onSuccess(e)));
                });
            };
          })
          .catch(function (e) {
            console.error("Error during service worker registration:", e);
          });
      }
      var Gt = n(141),
        Qt = n(15),
        Kt = Object(o.jsx)(Gt.a, {
          children: Object(o.jsx)("div", {
            children: Object(o.jsx)(Qt.a, {
              path: "*/",
              component: Ht,
            }),
          }),
        });
      c.a.render(Kt, document.getElementById("root")),
        (function (e) {
          if ("serviceWorker" in navigator) {
            if (
              new URL("/RubiksProgram", window.location.href).origin !==
              window.location.origin
            )
              return;
            window.addEventListener("load", function () {
              var t = "".concat("/RubiksProgram", "/service-worker.js");
              Jt
                ? (!(function (e, t) {
                    fetch(e, {
                      headers: {
                        "Service-Worker": "script",
                      },
                    })
                      .then(function (n) {
                        var o = n.headers.get("content-type");
                        404 === n.status ||
                        (null != o && -1 === o.indexOf("javascript"))
                          ? navigator.serviceWorker.ready.then(function (e) {
                              e.unregister().then(function () {
                                window.location.reload();
                              });
                            })
                          : _t(e, t);
                      })
                      .catch(function () {
                        console.log(
                          "No internet connection found. App is running in offline mode."
                        );
                      });
                  })(t, e),
                  navigator.serviceWorker.ready.then(function () {
                    console.log(
                      "This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA"
                    );
                  }))
                : _t(t, e);
            });
          }
        })();
    },
    42: function (e, t, n) {},
    62: function (e, t, n) {},
    91: function (e, t, n) {},
  },
  [[228, 1, 2]],
]);
//# sourceMappingURL=main.2e4bfd3e.chunk.js.map
