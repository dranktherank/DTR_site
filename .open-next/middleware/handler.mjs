
import {Buffer} from "node:buffer";
globalThis.Buffer = Buffer;

import {AsyncLocalStorage} from "node:async_hooks";
globalThis.AsyncLocalStorage = AsyncLocalStorage;


const defaultDefineProperty = Object.defineProperty;
Object.defineProperty = function(o, p, a) {
  if(p=== '__import_unsupported' && Boolean(globalThis.__import_unsupported)) {
    return;
  }
  return defaultDefineProperty(o, p, a);
};

  
  
  globalThis.openNextDebug = false;globalThis.openNextVersion = "3.7.0";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __reExport = (target, mod, secondTarget) => (__copyProps(target, mod, "default"), secondTarget && __copyProps(secondTarget, mod, "default"));
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// node_modules/@opennextjs/aws/dist/utils/error.js
function isOpenNextError(e) {
  try {
    return "__openNextInternal" in e;
  } catch {
    return false;
  }
}
var init_error = __esm({
  "node_modules/@opennextjs/aws/dist/utils/error.js"() {
  }
});

// node_modules/@opennextjs/aws/dist/adapters/logger.js
function debug(...args) {
  if (globalThis.openNextDebug) {
    console.log(...args);
  }
}
function warn(...args) {
  console.warn(...args);
}
function error(...args) {
  if (args.some((arg) => isDownplayedErrorLog(arg))) {
    return debug(...args);
  }
  if (args.some((arg) => isOpenNextError(arg))) {
    const error2 = args.find((arg) => isOpenNextError(arg));
    if (error2.logLevel < getOpenNextErrorLogLevel()) {
      return;
    }
    if (error2.logLevel === 0) {
      return console.log(...args.map((arg) => isOpenNextError(arg) ? `${arg.name}: ${arg.message}` : arg));
    }
    if (error2.logLevel === 1) {
      return warn(...args.map((arg) => isOpenNextError(arg) ? `${arg.name}: ${arg.message}` : arg));
    }
    return console.error(...args);
  }
  console.error(...args);
}
function getOpenNextErrorLogLevel() {
  const strLevel = process.env.OPEN_NEXT_ERROR_LOG_LEVEL ?? "1";
  switch (strLevel.toLowerCase()) {
    case "debug":
    case "0":
      return 0;
    case "error":
    case "2":
      return 2;
    default:
      return 1;
  }
}
var DOWNPLAYED_ERROR_LOGS, isDownplayedErrorLog;
var init_logger = __esm({
  "node_modules/@opennextjs/aws/dist/adapters/logger.js"() {
    init_error();
    DOWNPLAYED_ERROR_LOGS = [
      {
        clientName: "S3Client",
        commandName: "GetObjectCommand",
        errorName: "NoSuchKey"
      }
    ];
    isDownplayedErrorLog = (errorLog) => DOWNPLAYED_ERROR_LOGS.some((downplayedInput) => downplayedInput.clientName === errorLog?.clientName && downplayedInput.commandName === errorLog?.commandName && (downplayedInput.errorName === errorLog?.error?.name || downplayedInput.errorName === errorLog?.error?.Code));
  }
});

// node_modules/cookie/dist/index.js
var require_dist = __commonJS({
  "node_modules/cookie/dist/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.parse = parse3;
    exports.serialize = serialize;
    var cookieNameRegExp = /^[\u0021-\u003A\u003C\u003E-\u007E]+$/;
    var cookieValueRegExp = /^[\u0021-\u003A\u003C-\u007E]*$/;
    var domainValueRegExp = /^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i;
    var pathValueRegExp = /^[\u0020-\u003A\u003D-\u007E]*$/;
    var __toString = Object.prototype.toString;
    var NullObject = /* @__PURE__ */ (() => {
      const C = function() {
      };
      C.prototype = /* @__PURE__ */ Object.create(null);
      return C;
    })();
    function parse3(str, options) {
      const obj = new NullObject();
      const len = str.length;
      if (len < 2)
        return obj;
      const dec = options?.decode || decode;
      let index = 0;
      do {
        const eqIdx = str.indexOf("=", index);
        if (eqIdx === -1)
          break;
        const colonIdx = str.indexOf(";", index);
        const endIdx = colonIdx === -1 ? len : colonIdx;
        if (eqIdx > endIdx) {
          index = str.lastIndexOf(";", eqIdx - 1) + 1;
          continue;
        }
        const keyStartIdx = startIndex(str, index, eqIdx);
        const keyEndIdx = endIndex(str, eqIdx, keyStartIdx);
        const key = str.slice(keyStartIdx, keyEndIdx);
        if (obj[key] === void 0) {
          let valStartIdx = startIndex(str, eqIdx + 1, endIdx);
          let valEndIdx = endIndex(str, endIdx, valStartIdx);
          const value = dec(str.slice(valStartIdx, valEndIdx));
          obj[key] = value;
        }
        index = endIdx + 1;
      } while (index < len);
      return obj;
    }
    function startIndex(str, index, max) {
      do {
        const code = str.charCodeAt(index);
        if (code !== 32 && code !== 9)
          return index;
      } while (++index < max);
      return max;
    }
    function endIndex(str, index, min) {
      while (index > min) {
        const code = str.charCodeAt(--index);
        if (code !== 32 && code !== 9)
          return index + 1;
      }
      return min;
    }
    function serialize(name, val, options) {
      const enc = options?.encode || encodeURIComponent;
      if (!cookieNameRegExp.test(name)) {
        throw new TypeError(`argument name is invalid: ${name}`);
      }
      const value = enc(val);
      if (!cookieValueRegExp.test(value)) {
        throw new TypeError(`argument val is invalid: ${val}`);
      }
      let str = name + "=" + value;
      if (!options)
        return str;
      if (options.maxAge !== void 0) {
        if (!Number.isInteger(options.maxAge)) {
          throw new TypeError(`option maxAge is invalid: ${options.maxAge}`);
        }
        str += "; Max-Age=" + options.maxAge;
      }
      if (options.domain) {
        if (!domainValueRegExp.test(options.domain)) {
          throw new TypeError(`option domain is invalid: ${options.domain}`);
        }
        str += "; Domain=" + options.domain;
      }
      if (options.path) {
        if (!pathValueRegExp.test(options.path)) {
          throw new TypeError(`option path is invalid: ${options.path}`);
        }
        str += "; Path=" + options.path;
      }
      if (options.expires) {
        if (!isDate(options.expires) || !Number.isFinite(options.expires.valueOf())) {
          throw new TypeError(`option expires is invalid: ${options.expires}`);
        }
        str += "; Expires=" + options.expires.toUTCString();
      }
      if (options.httpOnly) {
        str += "; HttpOnly";
      }
      if (options.secure) {
        str += "; Secure";
      }
      if (options.partitioned) {
        str += "; Partitioned";
      }
      if (options.priority) {
        const priority = typeof options.priority === "string" ? options.priority.toLowerCase() : void 0;
        switch (priority) {
          case "low":
            str += "; Priority=Low";
            break;
          case "medium":
            str += "; Priority=Medium";
            break;
          case "high":
            str += "; Priority=High";
            break;
          default:
            throw new TypeError(`option priority is invalid: ${options.priority}`);
        }
      }
      if (options.sameSite) {
        const sameSite = typeof options.sameSite === "string" ? options.sameSite.toLowerCase() : options.sameSite;
        switch (sameSite) {
          case true:
          case "strict":
            str += "; SameSite=Strict";
            break;
          case "lax":
            str += "; SameSite=Lax";
            break;
          case "none":
            str += "; SameSite=None";
            break;
          default:
            throw new TypeError(`option sameSite is invalid: ${options.sameSite}`);
        }
      }
      return str;
    }
    function decode(str) {
      if (str.indexOf("%") === -1)
        return str;
      try {
        return decodeURIComponent(str);
      } catch (e) {
        return str;
      }
    }
    function isDate(val) {
      return __toString.call(val) === "[object Date]";
    }
  }
});

// node_modules/@opennextjs/aws/dist/http/util.js
function parseSetCookieHeader(cookies) {
  if (!cookies) {
    return [];
  }
  if (typeof cookies === "string") {
    return cookies.split(/(?<!Expires=\w+),/i).map((c) => c.trim());
  }
  return cookies;
}
function getQueryFromIterator(it) {
  const query = {};
  for (const [key, value] of it) {
    if (key in query) {
      if (Array.isArray(query[key])) {
        query[key].push(value);
      } else {
        query[key] = [query[key], value];
      }
    } else {
      query[key] = value;
    }
  }
  return query;
}
var init_util = __esm({
  "node_modules/@opennextjs/aws/dist/http/util.js"() {
  }
});

// node_modules/@opennextjs/aws/dist/overrides/converters/utils.js
function getQueryFromSearchParams(searchParams) {
  return getQueryFromIterator(searchParams.entries());
}
var init_utils = __esm({
  "node_modules/@opennextjs/aws/dist/overrides/converters/utils.js"() {
    init_util();
  }
});

// node_modules/@opennextjs/aws/dist/overrides/converters/edge.js
var edge_exports = {};
__export(edge_exports, {
  default: () => edge_default
});
import { Buffer as Buffer2 } from "node:buffer";
var import_cookie, NULL_BODY_STATUSES, converter, edge_default;
var init_edge = __esm({
  "node_modules/@opennextjs/aws/dist/overrides/converters/edge.js"() {
    import_cookie = __toESM(require_dist(), 1);
    init_util();
    init_utils();
    NULL_BODY_STATUSES = /* @__PURE__ */ new Set([101, 103, 204, 205, 304]);
    converter = {
      convertFrom: async (event) => {
        const url = new URL(event.url);
        const searchParams = url.searchParams;
        const query = getQueryFromSearchParams(searchParams);
        const body = await event.arrayBuffer();
        const headers = {};
        event.headers.forEach((value, key) => {
          headers[key] = value;
        });
        const rawPath = url.pathname;
        const method = event.method;
        const shouldHaveBody = method !== "GET" && method !== "HEAD";
        const cookieHeader = event.headers.get("cookie");
        const cookies = cookieHeader ? import_cookie.default.parse(cookieHeader) : {};
        return {
          type: "core",
          method,
          rawPath,
          url: event.url,
          body: shouldHaveBody ? Buffer2.from(body) : void 0,
          headers,
          remoteAddress: event.headers.get("x-forwarded-for") ?? "::1",
          query,
          cookies
        };
      },
      convertTo: async (result) => {
        if ("internalEvent" in result) {
          const request = new Request(result.internalEvent.url, {
            body: result.internalEvent.body,
            method: result.internalEvent.method,
            headers: {
              ...result.internalEvent.headers,
              "x-forwarded-host": result.internalEvent.headers.host
            }
          });
          if (globalThis.__dangerous_ON_edge_converter_returns_request === true) {
            return request;
          }
          const cfCache = (result.isISR || result.internalEvent.rawPath.startsWith("/_next/image")) && process.env.DISABLE_CACHE !== "true" ? { cacheEverything: true } : {};
          return fetch(request, {
            // This is a hack to make sure that the response is cached by Cloudflare
            // See https://developers.cloudflare.com/workers/examples/cache-using-fetch/#caching-html-resources
            // @ts-expect-error - This is a Cloudflare specific option
            cf: cfCache
          });
        }
        const headers = new Headers();
        for (const [key, value] of Object.entries(result.headers)) {
          if (key === "set-cookie" && typeof value === "string") {
            const cookies = parseSetCookieHeader(value);
            for (const cookie of cookies) {
              headers.append(key, cookie);
            }
            continue;
          }
          if (Array.isArray(value)) {
            for (const v of value) {
              headers.append(key, v);
            }
          } else {
            headers.set(key, value);
          }
        }
        const body = NULL_BODY_STATUSES.has(result.statusCode) ? null : result.body;
        return new Response(body, {
          status: result.statusCode,
          headers
        });
      },
      name: "edge"
    };
    edge_default = converter;
  }
});

// node_modules/@opennextjs/aws/dist/overrides/wrappers/cloudflare-edge.js
var cloudflare_edge_exports = {};
__export(cloudflare_edge_exports, {
  default: () => cloudflare_edge_default
});
var cfPropNameMapping, handler, cloudflare_edge_default;
var init_cloudflare_edge = __esm({
  "node_modules/@opennextjs/aws/dist/overrides/wrappers/cloudflare-edge.js"() {
    cfPropNameMapping = {
      // The city name is percent-encoded.
      // See https://github.com/vercel/vercel/blob/4cb6143/packages/functions/src/headers.ts#L94C19-L94C37
      city: [encodeURIComponent, "x-open-next-city"],
      country: "x-open-next-country",
      regionCode: "x-open-next-region",
      latitude: "x-open-next-latitude",
      longitude: "x-open-next-longitude"
    };
    handler = async (handler3, converter2) => async (request, env, ctx) => {
      globalThis.process = process;
      for (const [key, value] of Object.entries(env)) {
        if (typeof value === "string") {
          process.env[key] = value;
        }
      }
      const internalEvent = await converter2.convertFrom(request);
      const cfProperties = request.cf;
      for (const [propName, mapping] of Object.entries(cfPropNameMapping)) {
        const propValue = cfProperties?.[propName];
        if (propValue != null) {
          const [encode, headerName] = Array.isArray(mapping) ? mapping : [null, mapping];
          internalEvent.headers[headerName] = encode ? encode(propValue) : propValue;
        }
      }
      const response = await handler3(internalEvent, {
        waitUntil: ctx.waitUntil.bind(ctx)
      });
      const result = await converter2.convertTo(response);
      return result;
    };
    cloudflare_edge_default = {
      wrapper: handler,
      name: "cloudflare-edge",
      supportStreaming: true,
      edgeRuntime: true
    };
  }
});

// node_modules/@opennextjs/aws/dist/overrides/originResolver/pattern-env.js
var pattern_env_exports = {};
__export(pattern_env_exports, {
  default: () => pattern_env_default
});
var envLoader, pattern_env_default;
var init_pattern_env = __esm({
  "node_modules/@opennextjs/aws/dist/overrides/originResolver/pattern-env.js"() {
    init_logger();
    envLoader = {
      name: "env",
      resolve: async (_path) => {
        try {
          const origin = JSON.parse(process.env.OPEN_NEXT_ORIGIN ?? "{}");
          for (const [key, value] of Object.entries(globalThis.openNextConfig.functions ?? {}).filter(([key2]) => key2 !== "default")) {
            if (value.patterns.some((pattern) => {
              return new RegExp(
                // transform glob pattern to regex
                `/${pattern.replace(/\*\*/g, "(.*)").replace(/\*/g, "([^/]*)").replace(/\//g, "\\/").replace(/\?/g, ".")}`
              ).test(_path);
            })) {
              debug("Using origin", key, value.patterns);
              return origin[key];
            }
          }
          if (_path.startsWith("/_next/image") && origin.imageOptimizer) {
            debug("Using origin", "imageOptimizer", _path);
            return origin.imageOptimizer;
          }
          if (origin.default) {
            debug("Using default origin", origin.default, _path);
            return origin.default;
          }
          return false;
        } catch (e) {
          error("Error while resolving origin", e);
          return false;
        }
      }
    };
    pattern_env_default = envLoader;
  }
});

// node_modules/@opennextjs/aws/dist/overrides/assetResolver/dummy.js
var dummy_exports = {};
__export(dummy_exports, {
  default: () => dummy_default
});
var resolver, dummy_default;
var init_dummy = __esm({
  "node_modules/@opennextjs/aws/dist/overrides/assetResolver/dummy.js"() {
    resolver = {
      name: "dummy"
    };
    dummy_default = resolver;
  }
});

// node_modules/@opennextjs/aws/dist/utils/stream.js
import { Readable } from "node:stream";
function toReadableStream(value, isBase64) {
  return Readable.toWeb(Readable.from(Buffer.from(value, isBase64 ? "base64" : "utf8")));
}
function emptyReadableStream() {
  if (process.env.OPEN_NEXT_FORCE_NON_EMPTY_RESPONSE === "true") {
    return Readable.toWeb(Readable.from([Buffer.from("SOMETHING")]));
  }
  return Readable.toWeb(Readable.from([]));
}
var init_stream = __esm({
  "node_modules/@opennextjs/aws/dist/utils/stream.js"() {
  }
});

// node_modules/@opennextjs/aws/dist/overrides/proxyExternalRequest/fetch.js
var fetch_exports = {};
__export(fetch_exports, {
  default: () => fetch_default
});
var fetchProxy, fetch_default;
var init_fetch = __esm({
  "node_modules/@opennextjs/aws/dist/overrides/proxyExternalRequest/fetch.js"() {
    init_stream();
    fetchProxy = {
      name: "fetch-proxy",
      // @ts-ignore
      proxy: async (internalEvent) => {
        const { url, headers: eventHeaders, method, body } = internalEvent;
        const headers = Object.fromEntries(Object.entries(eventHeaders).filter(([key]) => key.toLowerCase() !== "cf-connecting-ip"));
        const response = await fetch(url, {
          method,
          headers,
          body
        });
        const responseHeaders = {};
        response.headers.forEach((value, key) => {
          responseHeaders[key] = value;
        });
        return {
          type: "core",
          headers: responseHeaders,
          statusCode: response.status,
          isBase64Encoded: true,
          body: response.body ?? emptyReadableStream()
        };
      }
    };
    fetch_default = fetchProxy;
  }
});

// .next/server/edge-runtime-webpack.js
var require_edge_runtime_webpack = __commonJS({
  ".next/server/edge-runtime-webpack.js"() {
    (() => {
      "use strict";
      var e = {}, r = {};
      function t(o) {
        var n = r[o];
        if (void 0 !== n) return n.exports;
        var i = r[o] = { exports: {} }, l = true;
        try {
          e[o](i, i.exports, t), l = false;
        } finally {
          l && delete r[o];
        }
        return i.exports;
      }
      t.m = e, t.amdO = {}, (() => {
        var e2 = [];
        t.O = (r2, o, n, i) => {
          if (o) {
            i = i || 0;
            for (var l = e2.length; l > 0 && e2[l - 1][2] > i; l--) e2[l] = e2[l - 1];
            e2[l] = [o, n, i];
            return;
          }
          for (var a = 1 / 0, l = 0; l < e2.length; l++) {
            for (var [o, n, i] = e2[l], f = true, u = 0; u < o.length; u++) a >= i && Object.keys(t.O).every((e3) => t.O[e3](o[u])) ? o.splice(u--, 1) : (f = false, i < a && (a = i));
            if (f) {
              e2.splice(l--, 1);
              var s = n();
              void 0 !== s && (r2 = s);
            }
          }
          return r2;
        };
      })(), t.d = (e2, r2) => {
        for (var o in r2) t.o(r2, o) && !t.o(e2, o) && Object.defineProperty(e2, o, { enumerable: true, get: r2[o] });
      }, t.g = function() {
        if ("object" == typeof globalThis) return globalThis;
        try {
          return this || Function("return this")();
        } catch (e2) {
          if ("object" == typeof window) return window;
        }
      }(), t.o = (e2, r2) => Object.prototype.hasOwnProperty.call(e2, r2), t.r = (e2) => {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e2, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e2, "__esModule", { value: true });
      }, (() => {
        var e2 = { 993: 0 };
        t.O.j = (r3) => 0 === e2[r3];
        var r2 = (r3, o2) => {
          var n, i, [l, a, f] = o2, u = 0;
          if (l.some((r4) => 0 !== e2[r4])) {
            for (n in a) t.o(a, n) && (t.m[n] = a[n]);
            if (f) var s = f(t);
          }
          for (r3 && r3(o2); u < l.length; u++) i = l[u], t.o(e2, i) && e2[i] && e2[i][0](), e2[i] = 0;
          return t.O(s);
        }, o = self.webpackChunk_N_E = self.webpackChunk_N_E || [];
        o.forEach(r2.bind(null, 0)), o.push = r2.bind(null, o.push.bind(o));
      })();
    })();
  }
});

// node-built-in-modules:node:async_hooks
var node_async_hooks_exports = {};
import * as node_async_hooks_star from "node:async_hooks";
var init_node_async_hooks = __esm({
  "node-built-in-modules:node:async_hooks"() {
    __reExport(node_async_hooks_exports, node_async_hooks_star);
  }
});

// node-built-in-modules:node:buffer
var node_buffer_exports = {};
import * as node_buffer_star from "node:buffer";
var init_node_buffer = __esm({
  "node-built-in-modules:node:buffer"() {
    __reExport(node_buffer_exports, node_buffer_star);
  }
});

// .next/server/middleware.js
var require_middleware = __commonJS({
  ".next/server/middleware.js"() {
    (self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[826], { 67: (e) => {
      "use strict";
      e.exports = (init_node_async_hooks(), __toCommonJS(node_async_hooks_exports));
    }, 195: (e) => {
      "use strict";
      e.exports = (init_node_buffer(), __toCommonJS(node_buffer_exports));
    }, 274: (e, t, r) => {
      "use strict";
      let n, i;
      r.r(t), r.d(t, { default: () => eK });
      var o, a, s, l, u, d, c, p, g, h, f, b, m = {};
      async function v() {
        let e2 = "_ENTRIES" in globalThis && _ENTRIES.middleware_instrumentation && (await _ENTRIES.middleware_instrumentation).register;
        if (e2) try {
          await e2();
        } catch (e3) {
          throw e3.message = `An error occurred while loading instrumentation hook: ${e3.message}`, e3;
        }
      }
      r.r(m), r.d(m, { middleware: () => eH });
      let w = null;
      function y() {
        return w || (w = v()), w;
      }
      function _(e2) {
        return `The edge runtime does not support Node.js '${e2}' module.
Learn More: https://nextjs.org/docs/messages/node-module-in-edge-runtime`;
      }
      process !== r.g.process && (process.env = r.g.process.env, r.g.process = process), Object.defineProperty(globalThis, "__import_unsupported", { value: function(e2) {
        let t2 = new Proxy(function() {
        }, { get(t3, r2) {
          if ("then" === r2) return {};
          throw Error(_(e2));
        }, construct() {
          throw Error(_(e2));
        }, apply(r2, n2, i2) {
          if ("function" == typeof i2[0]) return i2[0](t2);
          throw Error(_(e2));
        } });
        return new Proxy({}, { get: () => t2 });
      }, enumerable: false, configurable: false }), y();
      class x extends Error {
        constructor({ page: e2 }) {
          super(`The middleware "${e2}" accepts an async API directly with the form:
  
  export function middleware(request, event) {
    return NextResponse.redirect('/new-location')
  }
  
  Read more: https://nextjs.org/docs/messages/middleware-new-signature
  `);
        }
      }
      class S extends Error {
        constructor() {
          super(`The request.page has been deprecated in favour of \`URLPattern\`.
  Read more: https://nextjs.org/docs/messages/middleware-request-page
  `);
        }
      }
      class P extends Error {
        constructor() {
          super(`The request.ua has been removed in favour of \`userAgent\` function.
  Read more: https://nextjs.org/docs/messages/middleware-parse-user-agent
  `);
        }
      }
      let O = { shared: "shared", reactServerComponents: "rsc", serverSideRendering: "ssr", actionBrowser: "action-browser", api: "api", middleware: "middleware", instrument: "instrument", edgeAsset: "edge-asset", appPagesBrowser: "app-pages-browser", appMetadataRoute: "app-metadata-route", appRouteHandler: "app-route-handler" };
      function R(e2) {
        var t2, r2, n2, i2, o2, a2 = [], s2 = 0;
        function l2() {
          for (; s2 < e2.length && /\s/.test(e2.charAt(s2)); ) s2 += 1;
          return s2 < e2.length;
        }
        for (; s2 < e2.length; ) {
          for (t2 = s2, o2 = false; l2(); ) if ("," === (r2 = e2.charAt(s2))) {
            for (n2 = s2, s2 += 1, l2(), i2 = s2; s2 < e2.length && "=" !== (r2 = e2.charAt(s2)) && ";" !== r2 && "," !== r2; ) s2 += 1;
            s2 < e2.length && "=" === e2.charAt(s2) ? (o2 = true, s2 = i2, a2.push(e2.substring(t2, n2)), t2 = s2) : s2 = n2 + 1;
          } else s2 += 1;
          (!o2 || s2 >= e2.length) && a2.push(e2.substring(t2, e2.length));
        }
        return a2;
      }
      function N(e2) {
        let t2 = {}, r2 = [];
        if (e2) for (let [n2, i2] of e2.entries()) "set-cookie" === n2.toLowerCase() ? (r2.push(...R(i2)), t2[n2] = 1 === r2.length ? r2[0] : r2) : t2[n2] = i2;
        return t2;
      }
      function C(e2) {
        try {
          return String(new URL(String(e2)));
        } catch (t2) {
          throw Error(`URL is malformed "${String(e2)}". Please use only absolute URLs - https://nextjs.org/docs/messages/middleware-relative-urls`, { cause: t2 });
        }
      }
      ({ ...O, GROUP: { serverOnly: [O.reactServerComponents, O.actionBrowser, O.appMetadataRoute, O.appRouteHandler, O.instrument], clientOnly: [O.serverSideRendering, O.appPagesBrowser], nonClientServerTarget: [O.middleware, O.api], app: [O.reactServerComponents, O.actionBrowser, O.appMetadataRoute, O.appRouteHandler, O.serverSideRendering, O.appPagesBrowser, O.shared, O.instrument] } });
      let T = Symbol("response"), E = Symbol("passThrough"), I = Symbol("waitUntil");
      class M {
        constructor(e2) {
          this[I] = [], this[E] = false;
        }
        respondWith(e2) {
          this[T] || (this[T] = Promise.resolve(e2));
        }
        passThroughOnException() {
          this[E] = true;
        }
        waitUntil(e2) {
          this[I].push(e2);
        }
      }
      class A extends M {
        constructor(e2) {
          super(e2.request), this.sourcePage = e2.page;
        }
        get request() {
          throw new x({ page: this.sourcePage });
        }
        respondWith() {
          throw new x({ page: this.sourcePage });
        }
      }
      function L(e2) {
        return e2.replace(/\/$/, "") || "/";
      }
      function k(e2) {
        let t2 = e2.indexOf("#"), r2 = e2.indexOf("?"), n2 = r2 > -1 && (t2 < 0 || r2 < t2);
        return n2 || t2 > -1 ? { pathname: e2.substring(0, n2 ? r2 : t2), query: n2 ? e2.substring(r2, t2 > -1 ? t2 : void 0) : "", hash: t2 > -1 ? e2.slice(t2) : "" } : { pathname: e2, query: "", hash: "" };
      }
      function j(e2, t2) {
        if (!e2.startsWith("/") || !t2) return e2;
        let { pathname: r2, query: n2, hash: i2 } = k(e2);
        return "" + t2 + r2 + n2 + i2;
      }
      function D(e2, t2) {
        if (!e2.startsWith("/") || !t2) return e2;
        let { pathname: r2, query: n2, hash: i2 } = k(e2);
        return "" + r2 + t2 + n2 + i2;
      }
      function U(e2, t2) {
        if ("string" != typeof e2) return false;
        let { pathname: r2 } = k(e2);
        return r2 === t2 || r2.startsWith(t2 + "/");
      }
      function V(e2, t2) {
        let r2;
        let n2 = e2.split("/");
        return (t2 || []).some((t3) => !!n2[1] && n2[1].toLowerCase() === t3.toLowerCase() && (r2 = t3, n2.splice(1, 1), e2 = n2.join("/") || "/", true)), { pathname: e2, detectedLocale: r2 };
      }
      let B = /(?!^https?:\/\/)(127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}|\[::1\]|localhost)/;
      function q(e2, t2) {
        return new URL(String(e2).replace(B, "localhost"), t2 && String(t2).replace(B, "localhost"));
      }
      let $ = Symbol("NextURLInternal");
      class G {
        constructor(e2, t2, r2) {
          let n2, i2;
          "object" == typeof t2 && "pathname" in t2 || "string" == typeof t2 ? (n2 = t2, i2 = r2 || {}) : i2 = r2 || t2 || {}, this[$] = { url: q(e2, n2 ?? i2.base), options: i2, basePath: "" }, this.analyze();
        }
        analyze() {
          var e2, t2, r2, n2, i2;
          let o2 = function(e3, t3) {
            var r3, n3;
            let { basePath: i3, i18n: o3, trailingSlash: a3 } = null != (r3 = t3.nextConfig) ? r3 : {}, s3 = { pathname: e3, trailingSlash: "/" !== e3 ? e3.endsWith("/") : a3 };
            i3 && U(s3.pathname, i3) && (s3.pathname = function(e4, t4) {
              if (!U(e4, t4)) return e4;
              let r4 = e4.slice(t4.length);
              return r4.startsWith("/") ? r4 : "/" + r4;
            }(s3.pathname, i3), s3.basePath = i3);
            let l2 = s3.pathname;
            if (s3.pathname.startsWith("/_next/data/") && s3.pathname.endsWith(".json")) {
              let e4 = s3.pathname.replace(/^\/_next\/data\//, "").replace(/\.json$/, "").split("/"), r4 = e4[0];
              s3.buildId = r4, l2 = "index" !== e4[1] ? "/" + e4.slice(1).join("/") : "/", true === t3.parseData && (s3.pathname = l2);
            }
            if (o3) {
              let e4 = t3.i18nProvider ? t3.i18nProvider.analyze(s3.pathname) : V(s3.pathname, o3.locales);
              s3.locale = e4.detectedLocale, s3.pathname = null != (n3 = e4.pathname) ? n3 : s3.pathname, !e4.detectedLocale && s3.buildId && (e4 = t3.i18nProvider ? t3.i18nProvider.analyze(l2) : V(l2, o3.locales)).detectedLocale && (s3.locale = e4.detectedLocale);
            }
            return s3;
          }(this[$].url.pathname, { nextConfig: this[$].options.nextConfig, parseData: true, i18nProvider: this[$].options.i18nProvider }), a2 = function(e3, t3) {
            let r3;
            if ((null == t3 ? void 0 : t3.host) && !Array.isArray(t3.host)) r3 = t3.host.toString().split(":", 1)[0];
            else {
              if (!e3.hostname) return;
              r3 = e3.hostname;
            }
            return r3.toLowerCase();
          }(this[$].url, this[$].options.headers);
          this[$].domainLocale = this[$].options.i18nProvider ? this[$].options.i18nProvider.detectDomainLocale(a2) : function(e3, t3, r3) {
            if (e3) for (let o3 of (r3 && (r3 = r3.toLowerCase()), e3)) {
              var n3, i3;
              if (t3 === (null == (n3 = o3.domain) ? void 0 : n3.split(":", 1)[0].toLowerCase()) || r3 === o3.defaultLocale.toLowerCase() || (null == (i3 = o3.locales) ? void 0 : i3.some((e4) => e4.toLowerCase() === r3))) return o3;
            }
          }(null == (t2 = this[$].options.nextConfig) ? void 0 : null == (e2 = t2.i18n) ? void 0 : e2.domains, a2);
          let s2 = (null == (r2 = this[$].domainLocale) ? void 0 : r2.defaultLocale) || (null == (i2 = this[$].options.nextConfig) ? void 0 : null == (n2 = i2.i18n) ? void 0 : n2.defaultLocale);
          this[$].url.pathname = o2.pathname, this[$].defaultLocale = s2, this[$].basePath = o2.basePath ?? "", this[$].buildId = o2.buildId, this[$].locale = o2.locale ?? s2, this[$].trailingSlash = o2.trailingSlash;
        }
        formatPathname() {
          var e2;
          let t2;
          return t2 = function(e3, t3, r2, n2) {
            if (!t3 || t3 === r2) return e3;
            let i2 = e3.toLowerCase();
            return !n2 && (U(i2, "/api") || U(i2, "/" + t3.toLowerCase())) ? e3 : j(e3, "/" + t3);
          }((e2 = { basePath: this[$].basePath, buildId: this[$].buildId, defaultLocale: this[$].options.forceLocale ? void 0 : this[$].defaultLocale, locale: this[$].locale, pathname: this[$].url.pathname, trailingSlash: this[$].trailingSlash }).pathname, e2.locale, e2.buildId ? void 0 : e2.defaultLocale, e2.ignorePrefix), (e2.buildId || !e2.trailingSlash) && (t2 = L(t2)), e2.buildId && (t2 = D(j(t2, "/_next/data/" + e2.buildId), "/" === e2.pathname ? "index.json" : ".json")), t2 = j(t2, e2.basePath), !e2.buildId && e2.trailingSlash ? t2.endsWith("/") ? t2 : D(t2, "/") : L(t2);
        }
        formatSearch() {
          return this[$].url.search;
        }
        get buildId() {
          return this[$].buildId;
        }
        set buildId(e2) {
          this[$].buildId = e2;
        }
        get locale() {
          return this[$].locale ?? "";
        }
        set locale(e2) {
          var t2, r2;
          if (!this[$].locale || !(null == (r2 = this[$].options.nextConfig) ? void 0 : null == (t2 = r2.i18n) ? void 0 : t2.locales.includes(e2))) throw TypeError(`The NextURL configuration includes no locale "${e2}"`);
          this[$].locale = e2;
        }
        get defaultLocale() {
          return this[$].defaultLocale;
        }
        get domainLocale() {
          return this[$].domainLocale;
        }
        get searchParams() {
          return this[$].url.searchParams;
        }
        get host() {
          return this[$].url.host;
        }
        set host(e2) {
          this[$].url.host = e2;
        }
        get hostname() {
          return this[$].url.hostname;
        }
        set hostname(e2) {
          this[$].url.hostname = e2;
        }
        get port() {
          return this[$].url.port;
        }
        set port(e2) {
          this[$].url.port = e2;
        }
        get protocol() {
          return this[$].url.protocol;
        }
        set protocol(e2) {
          this[$].url.protocol = e2;
        }
        get href() {
          let e2 = this.formatPathname(), t2 = this.formatSearch();
          return `${this.protocol}//${this.host}${e2}${t2}${this.hash}`;
        }
        set href(e2) {
          this[$].url = q(e2), this.analyze();
        }
        get origin() {
          return this[$].url.origin;
        }
        get pathname() {
          return this[$].url.pathname;
        }
        set pathname(e2) {
          this[$].url.pathname = e2;
        }
        get hash() {
          return this[$].url.hash;
        }
        set hash(e2) {
          this[$].url.hash = e2;
        }
        get search() {
          return this[$].url.search;
        }
        set search(e2) {
          this[$].url.search = e2;
        }
        get password() {
          return this[$].url.password;
        }
        set password(e2) {
          this[$].url.password = e2;
        }
        get username() {
          return this[$].url.username;
        }
        set username(e2) {
          this[$].url.username = e2;
        }
        get basePath() {
          return this[$].basePath;
        }
        set basePath(e2) {
          this[$].basePath = e2.startsWith("/") ? e2 : `/${e2}`;
        }
        toString() {
          return this.href;
        }
        toJSON() {
          return this.href;
        }
        [Symbol.for("edge-runtime.inspect.custom")]() {
          return { href: this.href, origin: this.origin, protocol: this.protocol, username: this.username, password: this.password, host: this.host, hostname: this.hostname, port: this.port, pathname: this.pathname, search: this.search, searchParams: this.searchParams, hash: this.hash };
        }
        clone() {
          return new G(String(this), this[$].options);
        }
      }
      var H = r(945);
      let F = Symbol("internal request");
      class z extends Request {
        constructor(e2, t2 = {}) {
          let r2 = "string" != typeof e2 && "url" in e2 ? e2.url : String(e2);
          C(r2), e2 instanceof Request ? super(e2, t2) : super(r2, t2);
          let n2 = new G(r2, { headers: N(this.headers), nextConfig: t2.nextConfig });
          this[F] = { cookies: new H.RequestCookies(this.headers), geo: t2.geo || {}, ip: t2.ip, nextUrl: n2, url: n2.toString() };
        }
        [Symbol.for("edge-runtime.inspect.custom")]() {
          return { cookies: this.cookies, geo: this.geo, ip: this.ip, nextUrl: this.nextUrl, url: this.url, bodyUsed: this.bodyUsed, cache: this.cache, credentials: this.credentials, destination: this.destination, headers: Object.fromEntries(this.headers), integrity: this.integrity, keepalive: this.keepalive, method: this.method, mode: this.mode, redirect: this.redirect, referrer: this.referrer, referrerPolicy: this.referrerPolicy, signal: this.signal };
        }
        get cookies() {
          return this[F].cookies;
        }
        get geo() {
          return this[F].geo;
        }
        get ip() {
          return this[F].ip;
        }
        get nextUrl() {
          return this[F].nextUrl;
        }
        get page() {
          throw new S();
        }
        get ua() {
          throw new P();
        }
        get url() {
          return this[F].url;
        }
      }
      class W {
        static get(e2, t2, r2) {
          let n2 = Reflect.get(e2, t2, r2);
          return "function" == typeof n2 ? n2.bind(e2) : n2;
        }
        static set(e2, t2, r2, n2) {
          return Reflect.set(e2, t2, r2, n2);
        }
        static has(e2, t2) {
          return Reflect.has(e2, t2);
        }
        static deleteProperty(e2, t2) {
          return Reflect.deleteProperty(e2, t2);
        }
      }
      let K = Symbol("internal response"), X = /* @__PURE__ */ new Set([301, 302, 303, 307, 308]);
      function Y(e2, t2) {
        var r2;
        if (null == e2 ? void 0 : null == (r2 = e2.request) ? void 0 : r2.headers) {
          if (!(e2.request.headers instanceof Headers)) throw Error("request.headers must be an instance of Headers");
          let r3 = [];
          for (let [n2, i2] of e2.request.headers) t2.set("x-middleware-request-" + n2, i2), r3.push(n2);
          t2.set("x-middleware-override-headers", r3.join(","));
        }
      }
      class Z extends Response {
        constructor(e2, t2 = {}) {
          super(e2, t2);
          let r2 = this.headers, n2 = new Proxy(new H.ResponseCookies(r2), { get(e3, n3, i2) {
            switch (n3) {
              case "delete":
              case "set":
                return (...i3) => {
                  let o2 = Reflect.apply(e3[n3], e3, i3), a2 = new Headers(r2);
                  return o2 instanceof H.ResponseCookies && r2.set("x-middleware-set-cookie", o2.getAll().map((e4) => (0, H.stringifyCookie)(e4)).join(",")), Y(t2, a2), o2;
                };
              default:
                return W.get(e3, n3, i2);
            }
          } });
          this[K] = { cookies: n2, url: t2.url ? new G(t2.url, { headers: N(r2), nextConfig: t2.nextConfig }) : void 0 };
        }
        [Symbol.for("edge-runtime.inspect.custom")]() {
          return { cookies: this.cookies, url: this.url, body: this.body, bodyUsed: this.bodyUsed, headers: Object.fromEntries(this.headers), ok: this.ok, redirected: this.redirected, status: this.status, statusText: this.statusText, type: this.type };
        }
        get cookies() {
          return this[K].cookies;
        }
        static json(e2, t2) {
          let r2 = Response.json(e2, t2);
          return new Z(r2.body, r2);
        }
        static redirect(e2, t2) {
          let r2 = "number" == typeof t2 ? t2 : (null == t2 ? void 0 : t2.status) ?? 307;
          if (!X.has(r2)) throw RangeError('Failed to execute "redirect" on "response": Invalid status code');
          let n2 = "object" == typeof t2 ? t2 : {}, i2 = new Headers(null == n2 ? void 0 : n2.headers);
          return i2.set("Location", C(e2)), new Z(null, { ...n2, headers: i2, status: r2 });
        }
        static rewrite(e2, t2) {
          let r2 = new Headers(null == t2 ? void 0 : t2.headers);
          return r2.set("x-middleware-rewrite", C(e2)), Y(t2, r2), new Z(null, { ...t2, headers: r2 });
        }
        static next(e2) {
          let t2 = new Headers(null == e2 ? void 0 : e2.headers);
          return t2.set("x-middleware-next", "1"), Y(e2, t2), new Z(null, { ...e2, headers: t2 });
        }
      }
      function J(e2, t2) {
        let r2 = "string" == typeof t2 ? new URL(t2) : t2, n2 = new URL(e2, t2), i2 = r2.protocol + "//" + r2.host;
        return n2.protocol + "//" + n2.host === i2 ? n2.toString().replace(i2, "") : n2.toString();
      }
      let Q = [["RSC"], ["Next-Router-State-Tree"], ["Next-Router-Prefetch"]], ee = ["__nextFallback", "__nextLocale", "__nextInferredLocaleFromDefault", "__nextDefaultLocale", "__nextIsNotFound", "_rsc"], et = ["__nextDataReq"];
      class er extends Error {
        constructor() {
          super("Headers cannot be modified. Read more: https://nextjs.org/docs/app/api-reference/functions/headers");
        }
        static callable() {
          throw new er();
        }
      }
      class en extends Headers {
        constructor(e2) {
          super(), this.headers = new Proxy(e2, { get(t2, r2, n2) {
            if ("symbol" == typeof r2) return W.get(t2, r2, n2);
            let i2 = r2.toLowerCase(), o2 = Object.keys(e2).find((e3) => e3.toLowerCase() === i2);
            if (void 0 !== o2) return W.get(t2, o2, n2);
          }, set(t2, r2, n2, i2) {
            if ("symbol" == typeof r2) return W.set(t2, r2, n2, i2);
            let o2 = r2.toLowerCase(), a2 = Object.keys(e2).find((e3) => e3.toLowerCase() === o2);
            return W.set(t2, a2 ?? r2, n2, i2);
          }, has(t2, r2) {
            if ("symbol" == typeof r2) return W.has(t2, r2);
            let n2 = r2.toLowerCase(), i2 = Object.keys(e2).find((e3) => e3.toLowerCase() === n2);
            return void 0 !== i2 && W.has(t2, i2);
          }, deleteProperty(t2, r2) {
            if ("symbol" == typeof r2) return W.deleteProperty(t2, r2);
            let n2 = r2.toLowerCase(), i2 = Object.keys(e2).find((e3) => e3.toLowerCase() === n2);
            return void 0 === i2 || W.deleteProperty(t2, i2);
          } });
        }
        static seal(e2) {
          return new Proxy(e2, { get(e3, t2, r2) {
            switch (t2) {
              case "append":
              case "delete":
              case "set":
                return er.callable;
              default:
                return W.get(e3, t2, r2);
            }
          } });
        }
        merge(e2) {
          return Array.isArray(e2) ? e2.join(", ") : e2;
        }
        static from(e2) {
          return e2 instanceof Headers ? e2 : new en(e2);
        }
        append(e2, t2) {
          let r2 = this.headers[e2];
          "string" == typeof r2 ? this.headers[e2] = [r2, t2] : Array.isArray(r2) ? r2.push(t2) : this.headers[e2] = t2;
        }
        delete(e2) {
          delete this.headers[e2];
        }
        get(e2) {
          let t2 = this.headers[e2];
          return void 0 !== t2 ? this.merge(t2) : null;
        }
        has(e2) {
          return void 0 !== this.headers[e2];
        }
        set(e2, t2) {
          this.headers[e2] = t2;
        }
        forEach(e2, t2) {
          for (let [r2, n2] of this.entries()) e2.call(t2, n2, r2, this);
        }
        *entries() {
          for (let e2 of Object.keys(this.headers)) {
            let t2 = e2.toLowerCase(), r2 = this.get(t2);
            yield [t2, r2];
          }
        }
        *keys() {
          for (let e2 of Object.keys(this.headers)) {
            let t2 = e2.toLowerCase();
            yield t2;
          }
        }
        *values() {
          for (let e2 of Object.keys(this.headers)) {
            let t2 = this.get(e2);
            yield t2;
          }
        }
        [Symbol.iterator]() {
          return this.entries();
        }
      }
      let ei = Error("Invariant: AsyncLocalStorage accessed in runtime where it is not available");
      class eo {
        disable() {
          throw ei;
        }
        getStore() {
        }
        run() {
          throw ei;
        }
        exit() {
          throw ei;
        }
        enterWith() {
          throw ei;
        }
      }
      let ea = globalThis.AsyncLocalStorage;
      function es() {
        return ea ? new ea() : new eo();
      }
      let el = es();
      class eu extends Error {
        constructor() {
          super("Cookies can only be modified in a Server Action or Route Handler. Read more: https://nextjs.org/docs/app/api-reference/functions/cookies#cookiessetname-value-options");
        }
        static callable() {
          throw new eu();
        }
      }
      class ed {
        static seal(e2) {
          return new Proxy(e2, { get(e3, t2, r2) {
            switch (t2) {
              case "clear":
              case "delete":
              case "set":
                return eu.callable;
              default:
                return W.get(e3, t2, r2);
            }
          } });
        }
      }
      let ec = Symbol.for("next.mutated.cookies");
      class ep {
        static wrap(e2, t2) {
          let r2 = new H.ResponseCookies(new Headers());
          for (let t3 of e2.getAll()) r2.set(t3);
          let n2 = [], i2 = /* @__PURE__ */ new Set(), o2 = () => {
            let e3 = el.getStore();
            if (e3 && (e3.pathWasRevalidated = true), n2 = r2.getAll().filter((e4) => i2.has(e4.name)), t2) {
              let e4 = [];
              for (let t3 of n2) {
                let r3 = new H.ResponseCookies(new Headers());
                r3.set(t3), e4.push(r3.toString());
              }
              t2(e4);
            }
          };
          return new Proxy(r2, { get(e3, t3, r3) {
            switch (t3) {
              case ec:
                return n2;
              case "delete":
                return function(...t4) {
                  i2.add("string" == typeof t4[0] ? t4[0] : t4[0].name);
                  try {
                    e3.delete(...t4);
                  } finally {
                    o2();
                  }
                };
              case "set":
                return function(...t4) {
                  i2.add("string" == typeof t4[0] ? t4[0] : t4[0].name);
                  try {
                    return e3.set(...t4);
                  } finally {
                    o2();
                  }
                };
              default:
                return W.get(e3, t3, r3);
            }
          } });
        }
      }
      !function(e2) {
        e2.handleRequest = "BaseServer.handleRequest", e2.run = "BaseServer.run", e2.pipe = "BaseServer.pipe", e2.getStaticHTML = "BaseServer.getStaticHTML", e2.render = "BaseServer.render", e2.renderToResponseWithComponents = "BaseServer.renderToResponseWithComponents", e2.renderToResponse = "BaseServer.renderToResponse", e2.renderToHTML = "BaseServer.renderToHTML", e2.renderError = "BaseServer.renderError", e2.renderErrorToResponse = "BaseServer.renderErrorToResponse", e2.renderErrorToHTML = "BaseServer.renderErrorToHTML", e2.render404 = "BaseServer.render404";
      }(o || (o = {})), function(e2) {
        e2.loadDefaultErrorComponents = "LoadComponents.loadDefaultErrorComponents", e2.loadComponents = "LoadComponents.loadComponents";
      }(a || (a = {})), function(e2) {
        e2.getRequestHandler = "NextServer.getRequestHandler", e2.getServer = "NextServer.getServer", e2.getServerRequestHandler = "NextServer.getServerRequestHandler", e2.createServer = "createServer.createServer";
      }(s || (s = {})), function(e2) {
        e2.compression = "NextNodeServer.compression", e2.getBuildId = "NextNodeServer.getBuildId", e2.createComponentTree = "NextNodeServer.createComponentTree", e2.clientComponentLoading = "NextNodeServer.clientComponentLoading", e2.getLayoutOrPageModule = "NextNodeServer.getLayoutOrPageModule", e2.generateStaticRoutes = "NextNodeServer.generateStaticRoutes", e2.generateFsStaticRoutes = "NextNodeServer.generateFsStaticRoutes", e2.generatePublicRoutes = "NextNodeServer.generatePublicRoutes", e2.generateImageRoutes = "NextNodeServer.generateImageRoutes.route", e2.sendRenderResult = "NextNodeServer.sendRenderResult", e2.proxyRequest = "NextNodeServer.proxyRequest", e2.runApi = "NextNodeServer.runApi", e2.render = "NextNodeServer.render", e2.renderHTML = "NextNodeServer.renderHTML", e2.imageOptimizer = "NextNodeServer.imageOptimizer", e2.getPagePath = "NextNodeServer.getPagePath", e2.getRoutesManifest = "NextNodeServer.getRoutesManifest", e2.findPageComponents = "NextNodeServer.findPageComponents", e2.getFontManifest = "NextNodeServer.getFontManifest", e2.getServerComponentManifest = "NextNodeServer.getServerComponentManifest", e2.getRequestHandler = "NextNodeServer.getRequestHandler", e2.renderToHTML = "NextNodeServer.renderToHTML", e2.renderError = "NextNodeServer.renderError", e2.renderErrorToHTML = "NextNodeServer.renderErrorToHTML", e2.render404 = "NextNodeServer.render404", e2.startResponse = "NextNodeServer.startResponse", e2.route = "route", e2.onProxyReq = "onProxyReq", e2.apiResolver = "apiResolver", e2.internalFetch = "internalFetch";
      }(l || (l = {})), (u || (u = {})).startServer = "startServer.startServer", function(e2) {
        e2.getServerSideProps = "Render.getServerSideProps", e2.getStaticProps = "Render.getStaticProps", e2.renderToString = "Render.renderToString", e2.renderDocument = "Render.renderDocument", e2.createBodyResult = "Render.createBodyResult";
      }(d || (d = {})), function(e2) {
        e2.renderToString = "AppRender.renderToString", e2.renderToReadableStream = "AppRender.renderToReadableStream", e2.getBodyResult = "AppRender.getBodyResult", e2.fetch = "AppRender.fetch";
      }(c || (c = {})), (p || (p = {})).executeRoute = "Router.executeRoute", (g || (g = {})).runHandler = "Node.runHandler", (h || (h = {})).runHandler = "AppRouteRouteHandlers.runHandler", function(e2) {
        e2.generateMetadata = "ResolveMetadata.generateMetadata", e2.generateViewport = "ResolveMetadata.generateViewport";
      }(f || (f = {})), (b || (b = {})).execute = "Middleware.execute";
      let eg = ["Middleware.execute", "BaseServer.handleRequest", "Render.getServerSideProps", "Render.getStaticProps", "AppRender.fetch", "AppRender.getBodyResult", "Render.renderDocument", "Node.runHandler", "AppRouteRouteHandlers.runHandler", "ResolveMetadata.generateMetadata", "ResolveMetadata.generateViewport", "NextNodeServer.createComponentTree", "NextNodeServer.findPageComponents", "NextNodeServer.getLayoutOrPageModule", "NextNodeServer.startResponse", "NextNodeServer.clientComponentLoading"], eh = ["NextNodeServer.findPageComponents", "NextNodeServer.createComponentTree", "NextNodeServer.clientComponentLoading"], { context: ef, propagation: eb, trace: em, SpanStatusCode: ev, SpanKind: ew, ROOT_CONTEXT: ey } = n = r(439), e_ = (e2) => null !== e2 && "object" == typeof e2 && "function" == typeof e2.then, ex = (e2, t2) => {
        (null == t2 ? void 0 : t2.bubble) === true ? e2.setAttribute("next.bubble", true) : (t2 && e2.recordException(t2), e2.setStatus({ code: ev.ERROR, message: null == t2 ? void 0 : t2.message })), e2.end();
      }, eS = /* @__PURE__ */ new Map(), eP = n.createContextKey("next.rootSpanId"), eO = 0, eR = () => eO++;
      class eN {
        getTracerInstance() {
          return em.getTracer("next.js", "0.0.1");
        }
        getContext() {
          return ef;
        }
        getActiveScopeSpan() {
          return em.getSpan(null == ef ? void 0 : ef.active());
        }
        withPropagatedContext(e2, t2, r2) {
          let n2 = ef.active();
          if (em.getSpanContext(n2)) return t2();
          let i2 = eb.extract(n2, e2, r2);
          return ef.with(i2, t2);
        }
        trace(...e2) {
          var t2;
          let [r2, n2, i2] = e2, { fn: o2, options: a2 } = "function" == typeof n2 ? { fn: n2, options: {} } : { fn: i2, options: { ...n2 } }, s2 = a2.spanName ?? r2;
          if (!eg.includes(r2) && "1" !== process.env.NEXT_OTEL_VERBOSE || a2.hideSpan) return o2();
          let l2 = this.getSpanContext((null == a2 ? void 0 : a2.parentSpan) ?? this.getActiveScopeSpan()), u2 = false;
          l2 ? (null == (t2 = em.getSpanContext(l2)) ? void 0 : t2.isRemote) && (u2 = true) : (l2 = (null == ef ? void 0 : ef.active()) ?? ey, u2 = true);
          let d2 = eR();
          return a2.attributes = { "next.span_name": s2, "next.span_type": r2, ...a2.attributes }, ef.with(l2.setValue(eP, d2), () => this.getTracerInstance().startActiveSpan(s2, a2, (e3) => {
            let t3 = "performance" in globalThis ? globalThis.performance.now() : void 0, n3 = () => {
              eS.delete(d2), t3 && process.env.NEXT_OTEL_PERFORMANCE_PREFIX && eh.includes(r2 || "") && performance.measure(`${process.env.NEXT_OTEL_PERFORMANCE_PREFIX}:next-${(r2.split(".").pop() || "").replace(/[A-Z]/g, (e4) => "-" + e4.toLowerCase())}`, { start: t3, end: performance.now() });
            };
            u2 && eS.set(d2, new Map(Object.entries(a2.attributes ?? {})));
            try {
              if (o2.length > 1) return o2(e3, (t5) => ex(e3, t5));
              let t4 = o2(e3);
              if (e_(t4)) return t4.then((t5) => (e3.end(), t5)).catch((t5) => {
                throw ex(e3, t5), t5;
              }).finally(n3);
              return e3.end(), n3(), t4;
            } catch (t4) {
              throw ex(e3, t4), n3(), t4;
            }
          }));
        }
        wrap(...e2) {
          let t2 = this, [r2, n2, i2] = 3 === e2.length ? e2 : [e2[0], {}, e2[1]];
          return eg.includes(r2) || "1" === process.env.NEXT_OTEL_VERBOSE ? function() {
            let e3 = n2;
            "function" == typeof e3 && "function" == typeof i2 && (e3 = e3.apply(this, arguments));
            let o2 = arguments.length - 1, a2 = arguments[o2];
            if ("function" != typeof a2) return t2.trace(r2, e3, () => i2.apply(this, arguments));
            {
              let n3 = t2.getContext().bind(ef.active(), a2);
              return t2.trace(r2, e3, (e4, t3) => (arguments[o2] = function(e5) {
                return null == t3 || t3(e5), n3.apply(this, arguments);
              }, i2.apply(this, arguments)));
            }
          } : i2;
        }
        startSpan(...e2) {
          let [t2, r2] = e2, n2 = this.getSpanContext((null == r2 ? void 0 : r2.parentSpan) ?? this.getActiveScopeSpan());
          return this.getTracerInstance().startSpan(t2, r2, n2);
        }
        getSpanContext(e2) {
          return e2 ? em.setSpan(ef.active(), e2) : void 0;
        }
        getRootSpanAttributes() {
          let e2 = ef.active().getValue(eP);
          return eS.get(e2);
        }
      }
      let eC = (() => {
        let e2 = new eN();
        return () => e2;
      })(), eT = "__prerender_bypass";
      Symbol("__next_preview_data"), Symbol(eT);
      class eE {
        constructor(e2, t2, r2, n2) {
          var i2;
          let o2 = e2 && function(e3, t3) {
            let r3 = en.from(e3.headers);
            return { isOnDemandRevalidate: r3.get("x-prerender-revalidate") === t3.previewModeId, revalidateOnlyGenerated: r3.has("x-prerender-revalidate-if-generated") };
          }(t2, e2).isOnDemandRevalidate, a2 = null == (i2 = r2.get(eT)) ? void 0 : i2.value;
          this.isEnabled = !!(!o2 && a2 && e2 && a2 === e2.previewModeId), this._previewModeId = null == e2 ? void 0 : e2.previewModeId, this._mutableCookies = n2;
        }
        enable() {
          if (!this._previewModeId) throw Error("Invariant: previewProps missing previewModeId this should never happen");
          this._mutableCookies.set({ name: eT, value: this._previewModeId, httpOnly: true, sameSite: "none", secure: true, path: "/" });
        }
        disable() {
          this._mutableCookies.set({ name: eT, value: "", httpOnly: true, sameSite: "none", secure: true, path: "/", expires: /* @__PURE__ */ new Date(0) });
        }
      }
      function eI(e2, t2) {
        if ("x-middleware-set-cookie" in e2.headers && "string" == typeof e2.headers["x-middleware-set-cookie"]) {
          let r2 = e2.headers["x-middleware-set-cookie"], n2 = new Headers();
          for (let e3 of R(r2)) n2.append("set-cookie", e3);
          for (let e3 of new H.ResponseCookies(n2).getAll()) t2.set(e3);
        }
      }
      let eM = { wrap(e2, { req: t2, res: r2, renderOpts: n2 }, i2) {
        let o2;
        function a2(e3) {
          r2 && r2.setHeader("Set-Cookie", e3);
        }
        n2 && "previewProps" in n2 && (o2 = n2.previewProps);
        let s2 = {}, l2 = { get headers() {
          return s2.headers || (s2.headers = function(e3) {
            let t3 = en.from(e3);
            for (let e4 of Q) t3.delete(e4.toString().toLowerCase());
            return en.seal(t3);
          }(t2.headers)), s2.headers;
        }, get cookies() {
          if (!s2.cookies) {
            let e3 = new H.RequestCookies(en.from(t2.headers));
            eI(t2, e3), s2.cookies = ed.seal(e3);
          }
          return s2.cookies;
        }, get mutableCookies() {
          if (!s2.mutableCookies) {
            let e3 = function(e4, t3) {
              let r3 = new H.RequestCookies(en.from(e4));
              return ep.wrap(r3, t3);
            }(t2.headers, (null == n2 ? void 0 : n2.onUpdateCookies) || (r2 ? a2 : void 0));
            eI(t2, e3), s2.mutableCookies = e3;
          }
          return s2.mutableCookies;
        }, get draftMode() {
          return s2.draftMode || (s2.draftMode = new eE(o2, t2, this.cookies, this.mutableCookies)), s2.draftMode;
        }, reactLoadableManifest: (null == n2 ? void 0 : n2.reactLoadableManifest) || {}, assetPrefix: (null == n2 ? void 0 : n2.assetPrefix) || "" };
        return e2.run(l2, i2, l2);
      } }, eA = es();
      function eL() {
        return { previewModeId: process.env.__NEXT_PREVIEW_MODE_ID, previewModeSigningKey: process.env.__NEXT_PREVIEW_MODE_SIGNING_KEY || "", previewModeEncryptionKey: process.env.__NEXT_PREVIEW_MODE_ENCRYPTION_KEY || "" };
      }
      class ek extends z {
        constructor(e2) {
          super(e2.input, e2.init), this.sourcePage = e2.page;
        }
        get request() {
          throw new x({ page: this.sourcePage });
        }
        respondWith() {
          throw new x({ page: this.sourcePage });
        }
        waitUntil() {
          throw new x({ page: this.sourcePage });
        }
      }
      let ej = { keys: (e2) => Array.from(e2.keys()), get: (e2, t2) => e2.get(t2) ?? void 0 }, eD = (e2, t2) => eC().withPropagatedContext(e2.headers, t2, ej), eU = false;
      async function eV(e2) {
        let t2, n2;
        !function() {
          if (!eU && (eU = true, "true" === process.env.NEXT_PRIVATE_TEST_PROXY)) {
            let { interceptTestApis: e3, wrapRequestHandler: t3 } = r(177);
            e3(), eD = t3(eD);
          }
        }(), await y();
        let i2 = void 0 !== self.__BUILD_MANIFEST;
        e2.request.url = e2.request.url.replace(/\.rsc($|\?)/, "$1");
        let o2 = new G(e2.request.url, { headers: e2.request.headers, nextConfig: e2.request.nextConfig });
        for (let e3 of [...o2.searchParams.keys()]) {
          let t3 = o2.searchParams.getAll(e3);
          !function(e4, t4) {
            for (let r2 of ["nxtP", "nxtI"]) e4 !== r2 && e4.startsWith(r2) && t4(e4.substring(r2.length));
          }(e3, (r2) => {
            for (let e4 of (o2.searchParams.delete(r2), t3)) o2.searchParams.append(r2, e4);
            o2.searchParams.delete(e3);
          });
        }
        let a2 = o2.buildId;
        o2.buildId = "";
        let s2 = e2.request.headers["x-nextjs-data"];
        s2 && "/index" === o2.pathname && (o2.pathname = "/");
        let l2 = function(e3) {
          let t3 = new Headers();
          for (let [r2, n3] of Object.entries(e3)) for (let e4 of Array.isArray(n3) ? n3 : [n3]) void 0 !== e4 && ("number" == typeof e4 && (e4 = e4.toString()), t3.append(r2, e4));
          return t3;
        }(e2.request.headers), u2 = /* @__PURE__ */ new Map();
        if (!i2) for (let e3 of Q) {
          let t3 = e3.toString().toLowerCase();
          l2.get(t3) && (u2.set(t3, l2.get(t3)), l2.delete(t3));
        }
        let d2 = new ek({ page: e2.page, input: function(e3, t3) {
          let r2 = "string" == typeof e3, n3 = r2 ? new URL(e3) : e3;
          for (let e4 of ee) n3.searchParams.delete(e4);
          if (t3) for (let e4 of et) n3.searchParams.delete(e4);
          return r2 ? n3.toString() : n3;
        }(o2, true).toString(), init: { body: e2.request.body, geo: e2.request.geo, headers: l2, ip: e2.request.ip, method: e2.request.method, nextConfig: e2.request.nextConfig, signal: e2.request.signal } });
        s2 && Object.defineProperty(d2, "__isData", { enumerable: false, value: true }), !globalThis.__incrementalCacheShared && e2.IncrementalCache && (globalThis.__incrementalCache = new e2.IncrementalCache({ appDir: true, fetchCache: true, minimalMode: true, fetchCacheKeyPrefix: "", dev: false, requestHeaders: e2.request.headers, requestProtocol: "https", getPrerenderManifest: () => ({ version: -1, routes: {}, dynamicRoutes: {}, notFoundRoutes: [], preview: eL() }) }));
        let c2 = new A({ request: d2, page: e2.page });
        if ((t2 = await eD(d2, () => "/middleware" === e2.page || "/src/middleware" === e2.page ? eC().trace(b.execute, { spanName: `middleware ${d2.method} ${d2.nextUrl.pathname}`, attributes: { "http.target": d2.nextUrl.pathname, "http.method": d2.method } }, () => eM.wrap(eA, { req: d2, renderOpts: { onUpdateCookies: (e3) => {
          n2 = e3;
        }, previewProps: eL() } }, () => e2.handler(d2, c2))) : e2.handler(d2, c2))) && !(t2 instanceof Response)) throw TypeError("Expected an instance of Response to be returned");
        t2 && n2 && t2.headers.set("set-cookie", n2);
        let p2 = null == t2 ? void 0 : t2.headers.get("x-middleware-rewrite");
        if (t2 && p2 && !i2) {
          let r2 = new G(p2, { forceLocale: true, headers: e2.request.headers, nextConfig: e2.request.nextConfig });
          r2.host === d2.nextUrl.host && (r2.buildId = a2 || r2.buildId, t2.headers.set("x-middleware-rewrite", String(r2)));
          let n3 = J(String(r2), String(o2));
          s2 && t2.headers.set("x-nextjs-rewrite", n3);
        }
        let g2 = null == t2 ? void 0 : t2.headers.get("Location");
        if (t2 && g2 && !i2) {
          let r2 = new G(g2, { forceLocale: false, headers: e2.request.headers, nextConfig: e2.request.nextConfig });
          t2 = new Response(t2.body, t2), r2.host === d2.nextUrl.host && (r2.buildId = a2 || r2.buildId, t2.headers.set("Location", String(r2))), s2 && (t2.headers.delete("Location"), t2.headers.set("x-nextjs-redirect", J(String(r2), String(o2))));
        }
        let h2 = t2 || Z.next(), f2 = h2.headers.get("x-middleware-override-headers"), m2 = [];
        if (f2) {
          for (let [e3, t3] of u2) h2.headers.set(`x-middleware-request-${e3}`, t3), m2.push(e3);
          m2.length > 0 && h2.headers.set("x-middleware-override-headers", f2 + "," + m2.join(","));
        }
        return { response: h2, waitUntil: Promise.all(c2[I]), fetchMetrics: d2.fetchMetrics };
      }
      r(340), "undefined" == typeof URLPattern || URLPattern;
      let eB = { randomUUID: "undefined" != typeof crypto && crypto.randomUUID && crypto.randomUUID.bind(crypto) }, eq = new Uint8Array(16), e$ = [];
      for (let e2 = 0; e2 < 256; ++e2) e$.push((e2 + 256).toString(16).slice(1));
      let eG = function(e2, t2, r2) {
        if (eB.randomUUID && !t2 && !e2) return eB.randomUUID();
        let n2 = (e2 = e2 || {}).random ?? e2.rng?.() ?? function() {
          if (!i) {
            if ("undefined" == typeof crypto || !crypto.getRandomValues) throw Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
            i = crypto.getRandomValues.bind(crypto);
          }
          return i(eq);
        }();
        if (n2.length < 16) throw Error("Random bytes length must be >= 16");
        if (n2[6] = 15 & n2[6] | 64, n2[8] = 63 & n2[8] | 128, t2) {
          if ((r2 = r2 || 0) < 0 || r2 + 16 > t2.length) throw RangeError(`UUID byte range ${r2}:${r2 + 15} is out of buffer bounds`);
          for (let e3 = 0; e3 < 16; ++e3) t2[r2 + e3] = n2[e3];
          return t2;
        }
        return function(e3, t3 = 0) {
          return (e$[e3[t3 + 0]] + e$[e3[t3 + 1]] + e$[e3[t3 + 2]] + e$[e3[t3 + 3]] + "-" + e$[e3[t3 + 4]] + e$[e3[t3 + 5]] + "-" + e$[e3[t3 + 6]] + e$[e3[t3 + 7]] + "-" + e$[e3[t3 + 8]] + e$[e3[t3 + 9]] + "-" + e$[e3[t3 + 10]] + e$[e3[t3 + 11]] + e$[e3[t3 + 12]] + e$[e3[t3 + 13]] + e$[e3[t3 + 14]] + e$[e3[t3 + 15]]).toLowerCase();
        }(n2);
      };
      function eH(e2) {
        let t2 = Z.next(), r2 = "user_id";
        if (!e2.cookies.get(r2)) {
          let e3 = eG();
          t2.cookies.set({ name: r2, value: e3, path: "/", httpOnly: true, secure: true, sameSite: "lax", maxAge: 31536e4 });
        }
        return t2;
      }
      let eF = { ...m }, ez = eF.middleware || eF.default, eW = "/middleware";
      if ("function" != typeof ez) throw Error(`The Middleware "${eW}" must export a \`middleware\` or a \`default\` function`);
      function eK(e2) {
        return eV({ ...e2, page: eW, handler: ez });
      }
    }, 945: (e) => {
      "use strict";
      var t = Object.defineProperty, r = Object.getOwnPropertyDescriptor, n = Object.getOwnPropertyNames, i = Object.prototype.hasOwnProperty, o = {};
      function a(e2) {
        var t2;
        let r2 = ["path" in e2 && e2.path && `Path=${e2.path}`, "expires" in e2 && (e2.expires || 0 === e2.expires) && `Expires=${("number" == typeof e2.expires ? new Date(e2.expires) : e2.expires).toUTCString()}`, "maxAge" in e2 && "number" == typeof e2.maxAge && `Max-Age=${e2.maxAge}`, "domain" in e2 && e2.domain && `Domain=${e2.domain}`, "secure" in e2 && e2.secure && "Secure", "httpOnly" in e2 && e2.httpOnly && "HttpOnly", "sameSite" in e2 && e2.sameSite && `SameSite=${e2.sameSite}`, "partitioned" in e2 && e2.partitioned && "Partitioned", "priority" in e2 && e2.priority && `Priority=${e2.priority}`].filter(Boolean), n2 = `${e2.name}=${encodeURIComponent(null != (t2 = e2.value) ? t2 : "")}`;
        return 0 === r2.length ? n2 : `${n2}; ${r2.join("; ")}`;
      }
      function s(e2) {
        let t2 = /* @__PURE__ */ new Map();
        for (let r2 of e2.split(/; */)) {
          if (!r2) continue;
          let e3 = r2.indexOf("=");
          if (-1 === e3) {
            t2.set(r2, "true");
            continue;
          }
          let [n2, i2] = [r2.slice(0, e3), r2.slice(e3 + 1)];
          try {
            t2.set(n2, decodeURIComponent(null != i2 ? i2 : "true"));
          } catch {
          }
        }
        return t2;
      }
      function l(e2) {
        var t2, r2;
        if (!e2) return;
        let [[n2, i2], ...o2] = s(e2), { domain: a2, expires: l2, httponly: c2, maxage: p2, path: g, samesite: h, secure: f, partitioned: b, priority: m } = Object.fromEntries(o2.map(([e3, t3]) => [e3.toLowerCase(), t3]));
        return function(e3) {
          let t3 = {};
          for (let r3 in e3) e3[r3] && (t3[r3] = e3[r3]);
          return t3;
        }({ name: n2, value: decodeURIComponent(i2), domain: a2, ...l2 && { expires: new Date(l2) }, ...c2 && { httpOnly: true }, ..."string" == typeof p2 && { maxAge: Number(p2) }, path: g, ...h && { sameSite: u.includes(t2 = (t2 = h).toLowerCase()) ? t2 : void 0 }, ...f && { secure: true }, ...m && { priority: d.includes(r2 = (r2 = m).toLowerCase()) ? r2 : void 0 }, ...b && { partitioned: true } });
      }
      ((e2, r2) => {
        for (var n2 in r2) t(e2, n2, { get: r2[n2], enumerable: true });
      })(o, { RequestCookies: () => c, ResponseCookies: () => p, parseCookie: () => s, parseSetCookie: () => l, stringifyCookie: () => a }), e.exports = ((e2, o2, a2, s2) => {
        if (o2 && "object" == typeof o2 || "function" == typeof o2) for (let l2 of n(o2)) i.call(e2, l2) || l2 === a2 || t(e2, l2, { get: () => o2[l2], enumerable: !(s2 = r(o2, l2)) || s2.enumerable });
        return e2;
      })(t({}, "__esModule", { value: true }), o);
      var u = ["strict", "lax", "none"], d = ["low", "medium", "high"], c = class {
        constructor(e2) {
          this._parsed = /* @__PURE__ */ new Map(), this._headers = e2;
          let t2 = e2.get("cookie");
          if (t2) for (let [e3, r2] of s(t2)) this._parsed.set(e3, { name: e3, value: r2 });
        }
        [Symbol.iterator]() {
          return this._parsed[Symbol.iterator]();
        }
        get size() {
          return this._parsed.size;
        }
        get(...e2) {
          let t2 = "string" == typeof e2[0] ? e2[0] : e2[0].name;
          return this._parsed.get(t2);
        }
        getAll(...e2) {
          var t2;
          let r2 = Array.from(this._parsed);
          if (!e2.length) return r2.map(([e3, t3]) => t3);
          let n2 = "string" == typeof e2[0] ? e2[0] : null == (t2 = e2[0]) ? void 0 : t2.name;
          return r2.filter(([e3]) => e3 === n2).map(([e3, t3]) => t3);
        }
        has(e2) {
          return this._parsed.has(e2);
        }
        set(...e2) {
          let [t2, r2] = 1 === e2.length ? [e2[0].name, e2[0].value] : e2, n2 = this._parsed;
          return n2.set(t2, { name: t2, value: r2 }), this._headers.set("cookie", Array.from(n2).map(([e3, t3]) => a(t3)).join("; ")), this;
        }
        delete(e2) {
          let t2 = this._parsed, r2 = Array.isArray(e2) ? e2.map((e3) => t2.delete(e3)) : t2.delete(e2);
          return this._headers.set("cookie", Array.from(t2).map(([e3, t3]) => a(t3)).join("; ")), r2;
        }
        clear() {
          return this.delete(Array.from(this._parsed.keys())), this;
        }
        [Symbol.for("edge-runtime.inspect.custom")]() {
          return `RequestCookies ${JSON.stringify(Object.fromEntries(this._parsed))}`;
        }
        toString() {
          return [...this._parsed.values()].map((e2) => `${e2.name}=${encodeURIComponent(e2.value)}`).join("; ");
        }
      }, p = class {
        constructor(e2) {
          var t2, r2, n2;
          this._parsed = /* @__PURE__ */ new Map(), this._headers = e2;
          let i2 = null != (n2 = null != (r2 = null == (t2 = e2.getSetCookie) ? void 0 : t2.call(e2)) ? r2 : e2.get("set-cookie")) ? n2 : [];
          for (let e3 of Array.isArray(i2) ? i2 : function(e4) {
            if (!e4) return [];
            var t3, r3, n3, i3, o2, a2 = [], s2 = 0;
            function l2() {
              for (; s2 < e4.length && /\s/.test(e4.charAt(s2)); ) s2 += 1;
              return s2 < e4.length;
            }
            for (; s2 < e4.length; ) {
              for (t3 = s2, o2 = false; l2(); ) if ("," === (r3 = e4.charAt(s2))) {
                for (n3 = s2, s2 += 1, l2(), i3 = s2; s2 < e4.length && "=" !== (r3 = e4.charAt(s2)) && ";" !== r3 && "," !== r3; ) s2 += 1;
                s2 < e4.length && "=" === e4.charAt(s2) ? (o2 = true, s2 = i3, a2.push(e4.substring(t3, n3)), t3 = s2) : s2 = n3 + 1;
              } else s2 += 1;
              (!o2 || s2 >= e4.length) && a2.push(e4.substring(t3, e4.length));
            }
            return a2;
          }(i2)) {
            let t3 = l(e3);
            t3 && this._parsed.set(t3.name, t3);
          }
        }
        get(...e2) {
          let t2 = "string" == typeof e2[0] ? e2[0] : e2[0].name;
          return this._parsed.get(t2);
        }
        getAll(...e2) {
          var t2;
          let r2 = Array.from(this._parsed.values());
          if (!e2.length) return r2;
          let n2 = "string" == typeof e2[0] ? e2[0] : null == (t2 = e2[0]) ? void 0 : t2.name;
          return r2.filter((e3) => e3.name === n2);
        }
        has(e2) {
          return this._parsed.has(e2);
        }
        set(...e2) {
          let [t2, r2, n2] = 1 === e2.length ? [e2[0].name, e2[0].value, e2[0]] : e2, i2 = this._parsed;
          return i2.set(t2, function(e3 = { name: "", value: "" }) {
            return "number" == typeof e3.expires && (e3.expires = new Date(e3.expires)), e3.maxAge && (e3.expires = new Date(Date.now() + 1e3 * e3.maxAge)), (null === e3.path || void 0 === e3.path) && (e3.path = "/"), e3;
          }({ name: t2, value: r2, ...n2 })), function(e3, t3) {
            for (let [, r3] of (t3.delete("set-cookie"), e3)) {
              let e4 = a(r3);
              t3.append("set-cookie", e4);
            }
          }(i2, this._headers), this;
        }
        delete(...e2) {
          let [t2, r2, n2] = "string" == typeof e2[0] ? [e2[0]] : [e2[0].name, e2[0].path, e2[0].domain];
          return this.set({ name: t2, path: r2, domain: n2, value: "", expires: /* @__PURE__ */ new Date(0) });
        }
        [Symbol.for("edge-runtime.inspect.custom")]() {
          return `ResponseCookies ${JSON.stringify(Object.fromEntries(this._parsed))}`;
        }
        toString() {
          return [...this._parsed.values()].map(a).join("; ");
        }
      };
    }, 439: (e, t, r) => {
      (() => {
        "use strict";
        var t2 = { 491: (e2, t3, r2) => {
          Object.defineProperty(t3, "__esModule", { value: true }), t3.ContextAPI = void 0;
          let n2 = r2(223), i2 = r2(172), o2 = r2(930), a = "context", s = new n2.NoopContextManager();
          class l {
            constructor() {
            }
            static getInstance() {
              return this._instance || (this._instance = new l()), this._instance;
            }
            setGlobalContextManager(e3) {
              return (0, i2.registerGlobal)(a, e3, o2.DiagAPI.instance());
            }
            active() {
              return this._getContextManager().active();
            }
            with(e3, t4, r3, ...n3) {
              return this._getContextManager().with(e3, t4, r3, ...n3);
            }
            bind(e3, t4) {
              return this._getContextManager().bind(e3, t4);
            }
            _getContextManager() {
              return (0, i2.getGlobal)(a) || s;
            }
            disable() {
              this._getContextManager().disable(), (0, i2.unregisterGlobal)(a, o2.DiagAPI.instance());
            }
          }
          t3.ContextAPI = l;
        }, 930: (e2, t3, r2) => {
          Object.defineProperty(t3, "__esModule", { value: true }), t3.DiagAPI = void 0;
          let n2 = r2(56), i2 = r2(912), o2 = r2(957), a = r2(172);
          class s {
            constructor() {
              function e3(e4) {
                return function(...t5) {
                  let r3 = (0, a.getGlobal)("diag");
                  if (r3) return r3[e4](...t5);
                };
              }
              let t4 = this;
              t4.setLogger = (e4, r3 = { logLevel: o2.DiagLogLevel.INFO }) => {
                var n3, s2, l;
                if (e4 === t4) {
                  let e5 = Error("Cannot use diag as the logger for itself. Please use a DiagLogger implementation like ConsoleDiagLogger or a custom implementation");
                  return t4.error(null !== (n3 = e5.stack) && void 0 !== n3 ? n3 : e5.message), false;
                }
                "number" == typeof r3 && (r3 = { logLevel: r3 });
                let u = (0, a.getGlobal)("diag"), d = (0, i2.createLogLevelDiagLogger)(null !== (s2 = r3.logLevel) && void 0 !== s2 ? s2 : o2.DiagLogLevel.INFO, e4);
                if (u && !r3.suppressOverrideMessage) {
                  let e5 = null !== (l = Error().stack) && void 0 !== l ? l : "<failed to generate stacktrace>";
                  u.warn(`Current logger will be overwritten from ${e5}`), d.warn(`Current logger will overwrite one already registered from ${e5}`);
                }
                return (0, a.registerGlobal)("diag", d, t4, true);
              }, t4.disable = () => {
                (0, a.unregisterGlobal)("diag", t4);
              }, t4.createComponentLogger = (e4) => new n2.DiagComponentLogger(e4), t4.verbose = e3("verbose"), t4.debug = e3("debug"), t4.info = e3("info"), t4.warn = e3("warn"), t4.error = e3("error");
            }
            static instance() {
              return this._instance || (this._instance = new s()), this._instance;
            }
          }
          t3.DiagAPI = s;
        }, 653: (e2, t3, r2) => {
          Object.defineProperty(t3, "__esModule", { value: true }), t3.MetricsAPI = void 0;
          let n2 = r2(660), i2 = r2(172), o2 = r2(930), a = "metrics";
          class s {
            constructor() {
            }
            static getInstance() {
              return this._instance || (this._instance = new s()), this._instance;
            }
            setGlobalMeterProvider(e3) {
              return (0, i2.registerGlobal)(a, e3, o2.DiagAPI.instance());
            }
            getMeterProvider() {
              return (0, i2.getGlobal)(a) || n2.NOOP_METER_PROVIDER;
            }
            getMeter(e3, t4, r3) {
              return this.getMeterProvider().getMeter(e3, t4, r3);
            }
            disable() {
              (0, i2.unregisterGlobal)(a, o2.DiagAPI.instance());
            }
          }
          t3.MetricsAPI = s;
        }, 181: (e2, t3, r2) => {
          Object.defineProperty(t3, "__esModule", { value: true }), t3.PropagationAPI = void 0;
          let n2 = r2(172), i2 = r2(874), o2 = r2(194), a = r2(277), s = r2(369), l = r2(930), u = "propagation", d = new i2.NoopTextMapPropagator();
          class c {
            constructor() {
              this.createBaggage = s.createBaggage, this.getBaggage = a.getBaggage, this.getActiveBaggage = a.getActiveBaggage, this.setBaggage = a.setBaggage, this.deleteBaggage = a.deleteBaggage;
            }
            static getInstance() {
              return this._instance || (this._instance = new c()), this._instance;
            }
            setGlobalPropagator(e3) {
              return (0, n2.registerGlobal)(u, e3, l.DiagAPI.instance());
            }
            inject(e3, t4, r3 = o2.defaultTextMapSetter) {
              return this._getGlobalPropagator().inject(e3, t4, r3);
            }
            extract(e3, t4, r3 = o2.defaultTextMapGetter) {
              return this._getGlobalPropagator().extract(e3, t4, r3);
            }
            fields() {
              return this._getGlobalPropagator().fields();
            }
            disable() {
              (0, n2.unregisterGlobal)(u, l.DiagAPI.instance());
            }
            _getGlobalPropagator() {
              return (0, n2.getGlobal)(u) || d;
            }
          }
          t3.PropagationAPI = c;
        }, 997: (e2, t3, r2) => {
          Object.defineProperty(t3, "__esModule", { value: true }), t3.TraceAPI = void 0;
          let n2 = r2(172), i2 = r2(846), o2 = r2(139), a = r2(607), s = r2(930), l = "trace";
          class u {
            constructor() {
              this._proxyTracerProvider = new i2.ProxyTracerProvider(), this.wrapSpanContext = o2.wrapSpanContext, this.isSpanContextValid = o2.isSpanContextValid, this.deleteSpan = a.deleteSpan, this.getSpan = a.getSpan, this.getActiveSpan = a.getActiveSpan, this.getSpanContext = a.getSpanContext, this.setSpan = a.setSpan, this.setSpanContext = a.setSpanContext;
            }
            static getInstance() {
              return this._instance || (this._instance = new u()), this._instance;
            }
            setGlobalTracerProvider(e3) {
              let t4 = (0, n2.registerGlobal)(l, this._proxyTracerProvider, s.DiagAPI.instance());
              return t4 && this._proxyTracerProvider.setDelegate(e3), t4;
            }
            getTracerProvider() {
              return (0, n2.getGlobal)(l) || this._proxyTracerProvider;
            }
            getTracer(e3, t4) {
              return this.getTracerProvider().getTracer(e3, t4);
            }
            disable() {
              (0, n2.unregisterGlobal)(l, s.DiagAPI.instance()), this._proxyTracerProvider = new i2.ProxyTracerProvider();
            }
          }
          t3.TraceAPI = u;
        }, 277: (e2, t3, r2) => {
          Object.defineProperty(t3, "__esModule", { value: true }), t3.deleteBaggage = t3.setBaggage = t3.getActiveBaggage = t3.getBaggage = void 0;
          let n2 = r2(491), i2 = (0, r2(780).createContextKey)("OpenTelemetry Baggage Key");
          function o2(e3) {
            return e3.getValue(i2) || void 0;
          }
          t3.getBaggage = o2, t3.getActiveBaggage = function() {
            return o2(n2.ContextAPI.getInstance().active());
          }, t3.setBaggage = function(e3, t4) {
            return e3.setValue(i2, t4);
          }, t3.deleteBaggage = function(e3) {
            return e3.deleteValue(i2);
          };
        }, 993: (e2, t3) => {
          Object.defineProperty(t3, "__esModule", { value: true }), t3.BaggageImpl = void 0;
          class r2 {
            constructor(e3) {
              this._entries = e3 ? new Map(e3) : /* @__PURE__ */ new Map();
            }
            getEntry(e3) {
              let t4 = this._entries.get(e3);
              if (t4) return Object.assign({}, t4);
            }
            getAllEntries() {
              return Array.from(this._entries.entries()).map(([e3, t4]) => [e3, t4]);
            }
            setEntry(e3, t4) {
              let n2 = new r2(this._entries);
              return n2._entries.set(e3, t4), n2;
            }
            removeEntry(e3) {
              let t4 = new r2(this._entries);
              return t4._entries.delete(e3), t4;
            }
            removeEntries(...e3) {
              let t4 = new r2(this._entries);
              for (let r3 of e3) t4._entries.delete(r3);
              return t4;
            }
            clear() {
              return new r2();
            }
          }
          t3.BaggageImpl = r2;
        }, 830: (e2, t3) => {
          Object.defineProperty(t3, "__esModule", { value: true }), t3.baggageEntryMetadataSymbol = void 0, t3.baggageEntryMetadataSymbol = Symbol("BaggageEntryMetadata");
        }, 369: (e2, t3, r2) => {
          Object.defineProperty(t3, "__esModule", { value: true }), t3.baggageEntryMetadataFromString = t3.createBaggage = void 0;
          let n2 = r2(930), i2 = r2(993), o2 = r2(830), a = n2.DiagAPI.instance();
          t3.createBaggage = function(e3 = {}) {
            return new i2.BaggageImpl(new Map(Object.entries(e3)));
          }, t3.baggageEntryMetadataFromString = function(e3) {
            return "string" != typeof e3 && (a.error(`Cannot create baggage metadata from unknown type: ${typeof e3}`), e3 = ""), { __TYPE__: o2.baggageEntryMetadataSymbol, toString: () => e3 };
          };
        }, 67: (e2, t3, r2) => {
          Object.defineProperty(t3, "__esModule", { value: true }), t3.context = void 0;
          let n2 = r2(491);
          t3.context = n2.ContextAPI.getInstance();
        }, 223: (e2, t3, r2) => {
          Object.defineProperty(t3, "__esModule", { value: true }), t3.NoopContextManager = void 0;
          let n2 = r2(780);
          class i2 {
            active() {
              return n2.ROOT_CONTEXT;
            }
            with(e3, t4, r3, ...n3) {
              return t4.call(r3, ...n3);
            }
            bind(e3, t4) {
              return t4;
            }
            enable() {
              return this;
            }
            disable() {
              return this;
            }
          }
          t3.NoopContextManager = i2;
        }, 780: (e2, t3) => {
          Object.defineProperty(t3, "__esModule", { value: true }), t3.ROOT_CONTEXT = t3.createContextKey = void 0, t3.createContextKey = function(e3) {
            return Symbol.for(e3);
          };
          class r2 {
            constructor(e3) {
              let t4 = this;
              t4._currentContext = e3 ? new Map(e3) : /* @__PURE__ */ new Map(), t4.getValue = (e4) => t4._currentContext.get(e4), t4.setValue = (e4, n2) => {
                let i2 = new r2(t4._currentContext);
                return i2._currentContext.set(e4, n2), i2;
              }, t4.deleteValue = (e4) => {
                let n2 = new r2(t4._currentContext);
                return n2._currentContext.delete(e4), n2;
              };
            }
          }
          t3.ROOT_CONTEXT = new r2();
        }, 506: (e2, t3, r2) => {
          Object.defineProperty(t3, "__esModule", { value: true }), t3.diag = void 0;
          let n2 = r2(930);
          t3.diag = n2.DiagAPI.instance();
        }, 56: (e2, t3, r2) => {
          Object.defineProperty(t3, "__esModule", { value: true }), t3.DiagComponentLogger = void 0;
          let n2 = r2(172);
          class i2 {
            constructor(e3) {
              this._namespace = e3.namespace || "DiagComponentLogger";
            }
            debug(...e3) {
              return o2("debug", this._namespace, e3);
            }
            error(...e3) {
              return o2("error", this._namespace, e3);
            }
            info(...e3) {
              return o2("info", this._namespace, e3);
            }
            warn(...e3) {
              return o2("warn", this._namespace, e3);
            }
            verbose(...e3) {
              return o2("verbose", this._namespace, e3);
            }
          }
          function o2(e3, t4, r3) {
            let i3 = (0, n2.getGlobal)("diag");
            if (i3) return r3.unshift(t4), i3[e3](...r3);
          }
          t3.DiagComponentLogger = i2;
        }, 972: (e2, t3) => {
          Object.defineProperty(t3, "__esModule", { value: true }), t3.DiagConsoleLogger = void 0;
          let r2 = [{ n: "error", c: "error" }, { n: "warn", c: "warn" }, { n: "info", c: "info" }, { n: "debug", c: "debug" }, { n: "verbose", c: "trace" }];
          class n2 {
            constructor() {
              for (let e3 = 0; e3 < r2.length; e3++) this[r2[e3].n] = /* @__PURE__ */ function(e4) {
                return function(...t4) {
                  if (console) {
                    let r3 = console[e4];
                    if ("function" != typeof r3 && (r3 = console.log), "function" == typeof r3) return r3.apply(console, t4);
                  }
                };
              }(r2[e3].c);
            }
          }
          t3.DiagConsoleLogger = n2;
        }, 912: (e2, t3, r2) => {
          Object.defineProperty(t3, "__esModule", { value: true }), t3.createLogLevelDiagLogger = void 0;
          let n2 = r2(957);
          t3.createLogLevelDiagLogger = function(e3, t4) {
            function r3(r4, n3) {
              let i2 = t4[r4];
              return "function" == typeof i2 && e3 >= n3 ? i2.bind(t4) : function() {
              };
            }
            return e3 < n2.DiagLogLevel.NONE ? e3 = n2.DiagLogLevel.NONE : e3 > n2.DiagLogLevel.ALL && (e3 = n2.DiagLogLevel.ALL), t4 = t4 || {}, { error: r3("error", n2.DiagLogLevel.ERROR), warn: r3("warn", n2.DiagLogLevel.WARN), info: r3("info", n2.DiagLogLevel.INFO), debug: r3("debug", n2.DiagLogLevel.DEBUG), verbose: r3("verbose", n2.DiagLogLevel.VERBOSE) };
          };
        }, 957: (e2, t3) => {
          Object.defineProperty(t3, "__esModule", { value: true }), t3.DiagLogLevel = void 0, function(e3) {
            e3[e3.NONE = 0] = "NONE", e3[e3.ERROR = 30] = "ERROR", e3[e3.WARN = 50] = "WARN", e3[e3.INFO = 60] = "INFO", e3[e3.DEBUG = 70] = "DEBUG", e3[e3.VERBOSE = 80] = "VERBOSE", e3[e3.ALL = 9999] = "ALL";
          }(t3.DiagLogLevel || (t3.DiagLogLevel = {}));
        }, 172: (e2, t3, r2) => {
          Object.defineProperty(t3, "__esModule", { value: true }), t3.unregisterGlobal = t3.getGlobal = t3.registerGlobal = void 0;
          let n2 = r2(200), i2 = r2(521), o2 = r2(130), a = i2.VERSION.split(".")[0], s = Symbol.for(`opentelemetry.js.api.${a}`), l = n2._globalThis;
          t3.registerGlobal = function(e3, t4, r3, n3 = false) {
            var o3;
            let a2 = l[s] = null !== (o3 = l[s]) && void 0 !== o3 ? o3 : { version: i2.VERSION };
            if (!n3 && a2[e3]) {
              let t5 = Error(`@opentelemetry/api: Attempted duplicate registration of API: ${e3}`);
              return r3.error(t5.stack || t5.message), false;
            }
            if (a2.version !== i2.VERSION) {
              let t5 = Error(`@opentelemetry/api: Registration of version v${a2.version} for ${e3} does not match previously registered API v${i2.VERSION}`);
              return r3.error(t5.stack || t5.message), false;
            }
            return a2[e3] = t4, r3.debug(`@opentelemetry/api: Registered a global for ${e3} v${i2.VERSION}.`), true;
          }, t3.getGlobal = function(e3) {
            var t4, r3;
            let n3 = null === (t4 = l[s]) || void 0 === t4 ? void 0 : t4.version;
            if (n3 && (0, o2.isCompatible)(n3)) return null === (r3 = l[s]) || void 0 === r3 ? void 0 : r3[e3];
          }, t3.unregisterGlobal = function(e3, t4) {
            t4.debug(`@opentelemetry/api: Unregistering a global for ${e3} v${i2.VERSION}.`);
            let r3 = l[s];
            r3 && delete r3[e3];
          };
        }, 130: (e2, t3, r2) => {
          Object.defineProperty(t3, "__esModule", { value: true }), t3.isCompatible = t3._makeCompatibilityCheck = void 0;
          let n2 = r2(521), i2 = /^(\d+)\.(\d+)\.(\d+)(-(.+))?$/;
          function o2(e3) {
            let t4 = /* @__PURE__ */ new Set([e3]), r3 = /* @__PURE__ */ new Set(), n3 = e3.match(i2);
            if (!n3) return () => false;
            let o3 = { major: +n3[1], minor: +n3[2], patch: +n3[3], prerelease: n3[4] };
            if (null != o3.prerelease) return function(t5) {
              return t5 === e3;
            };
            function a(e4) {
              return r3.add(e4), false;
            }
            return function(e4) {
              if (t4.has(e4)) return true;
              if (r3.has(e4)) return false;
              let n4 = e4.match(i2);
              if (!n4) return a(e4);
              let s = { major: +n4[1], minor: +n4[2], patch: +n4[3], prerelease: n4[4] };
              return null != s.prerelease || o3.major !== s.major ? a(e4) : 0 === o3.major ? o3.minor === s.minor && o3.patch <= s.patch ? (t4.add(e4), true) : a(e4) : o3.minor <= s.minor ? (t4.add(e4), true) : a(e4);
            };
          }
          t3._makeCompatibilityCheck = o2, t3.isCompatible = o2(n2.VERSION);
        }, 886: (e2, t3, r2) => {
          Object.defineProperty(t3, "__esModule", { value: true }), t3.metrics = void 0;
          let n2 = r2(653);
          t3.metrics = n2.MetricsAPI.getInstance();
        }, 901: (e2, t3) => {
          Object.defineProperty(t3, "__esModule", { value: true }), t3.ValueType = void 0, function(e3) {
            e3[e3.INT = 0] = "INT", e3[e3.DOUBLE = 1] = "DOUBLE";
          }(t3.ValueType || (t3.ValueType = {}));
        }, 102: (e2, t3) => {
          Object.defineProperty(t3, "__esModule", { value: true }), t3.createNoopMeter = t3.NOOP_OBSERVABLE_UP_DOWN_COUNTER_METRIC = t3.NOOP_OBSERVABLE_GAUGE_METRIC = t3.NOOP_OBSERVABLE_COUNTER_METRIC = t3.NOOP_UP_DOWN_COUNTER_METRIC = t3.NOOP_HISTOGRAM_METRIC = t3.NOOP_COUNTER_METRIC = t3.NOOP_METER = t3.NoopObservableUpDownCounterMetric = t3.NoopObservableGaugeMetric = t3.NoopObservableCounterMetric = t3.NoopObservableMetric = t3.NoopHistogramMetric = t3.NoopUpDownCounterMetric = t3.NoopCounterMetric = t3.NoopMetric = t3.NoopMeter = void 0;
          class r2 {
            constructor() {
            }
            createHistogram(e3, r3) {
              return t3.NOOP_HISTOGRAM_METRIC;
            }
            createCounter(e3, r3) {
              return t3.NOOP_COUNTER_METRIC;
            }
            createUpDownCounter(e3, r3) {
              return t3.NOOP_UP_DOWN_COUNTER_METRIC;
            }
            createObservableGauge(e3, r3) {
              return t3.NOOP_OBSERVABLE_GAUGE_METRIC;
            }
            createObservableCounter(e3, r3) {
              return t3.NOOP_OBSERVABLE_COUNTER_METRIC;
            }
            createObservableUpDownCounter(e3, r3) {
              return t3.NOOP_OBSERVABLE_UP_DOWN_COUNTER_METRIC;
            }
            addBatchObservableCallback(e3, t4) {
            }
            removeBatchObservableCallback(e3) {
            }
          }
          t3.NoopMeter = r2;
          class n2 {
          }
          t3.NoopMetric = n2;
          class i2 extends n2 {
            add(e3, t4) {
            }
          }
          t3.NoopCounterMetric = i2;
          class o2 extends n2 {
            add(e3, t4) {
            }
          }
          t3.NoopUpDownCounterMetric = o2;
          class a extends n2 {
            record(e3, t4) {
            }
          }
          t3.NoopHistogramMetric = a;
          class s {
            addCallback(e3) {
            }
            removeCallback(e3) {
            }
          }
          t3.NoopObservableMetric = s;
          class l extends s {
          }
          t3.NoopObservableCounterMetric = l;
          class u extends s {
          }
          t3.NoopObservableGaugeMetric = u;
          class d extends s {
          }
          t3.NoopObservableUpDownCounterMetric = d, t3.NOOP_METER = new r2(), t3.NOOP_COUNTER_METRIC = new i2(), t3.NOOP_HISTOGRAM_METRIC = new a(), t3.NOOP_UP_DOWN_COUNTER_METRIC = new o2(), t3.NOOP_OBSERVABLE_COUNTER_METRIC = new l(), t3.NOOP_OBSERVABLE_GAUGE_METRIC = new u(), t3.NOOP_OBSERVABLE_UP_DOWN_COUNTER_METRIC = new d(), t3.createNoopMeter = function() {
            return t3.NOOP_METER;
          };
        }, 660: (e2, t3, r2) => {
          Object.defineProperty(t3, "__esModule", { value: true }), t3.NOOP_METER_PROVIDER = t3.NoopMeterProvider = void 0;
          let n2 = r2(102);
          class i2 {
            getMeter(e3, t4, r3) {
              return n2.NOOP_METER;
            }
          }
          t3.NoopMeterProvider = i2, t3.NOOP_METER_PROVIDER = new i2();
        }, 200: function(e2, t3, r2) {
          var n2 = this && this.__createBinding || (Object.create ? function(e3, t4, r3, n3) {
            void 0 === n3 && (n3 = r3), Object.defineProperty(e3, n3, { enumerable: true, get: function() {
              return t4[r3];
            } });
          } : function(e3, t4, r3, n3) {
            void 0 === n3 && (n3 = r3), e3[n3] = t4[r3];
          }), i2 = this && this.__exportStar || function(e3, t4) {
            for (var r3 in e3) "default" === r3 || Object.prototype.hasOwnProperty.call(t4, r3) || n2(t4, e3, r3);
          };
          Object.defineProperty(t3, "__esModule", { value: true }), i2(r2(46), t3);
        }, 651: (e2, t3) => {
          Object.defineProperty(t3, "__esModule", { value: true }), t3._globalThis = void 0, t3._globalThis = "object" == typeof globalThis ? globalThis : r.g;
        }, 46: function(e2, t3, r2) {
          var n2 = this && this.__createBinding || (Object.create ? function(e3, t4, r3, n3) {
            void 0 === n3 && (n3 = r3), Object.defineProperty(e3, n3, { enumerable: true, get: function() {
              return t4[r3];
            } });
          } : function(e3, t4, r3, n3) {
            void 0 === n3 && (n3 = r3), e3[n3] = t4[r3];
          }), i2 = this && this.__exportStar || function(e3, t4) {
            for (var r3 in e3) "default" === r3 || Object.prototype.hasOwnProperty.call(t4, r3) || n2(t4, e3, r3);
          };
          Object.defineProperty(t3, "__esModule", { value: true }), i2(r2(651), t3);
        }, 939: (e2, t3, r2) => {
          Object.defineProperty(t3, "__esModule", { value: true }), t3.propagation = void 0;
          let n2 = r2(181);
          t3.propagation = n2.PropagationAPI.getInstance();
        }, 874: (e2, t3) => {
          Object.defineProperty(t3, "__esModule", { value: true }), t3.NoopTextMapPropagator = void 0;
          class r2 {
            inject(e3, t4) {
            }
            extract(e3, t4) {
              return e3;
            }
            fields() {
              return [];
            }
          }
          t3.NoopTextMapPropagator = r2;
        }, 194: (e2, t3) => {
          Object.defineProperty(t3, "__esModule", { value: true }), t3.defaultTextMapSetter = t3.defaultTextMapGetter = void 0, t3.defaultTextMapGetter = { get(e3, t4) {
            if (null != e3) return e3[t4];
          }, keys: (e3) => null == e3 ? [] : Object.keys(e3) }, t3.defaultTextMapSetter = { set(e3, t4, r2) {
            null != e3 && (e3[t4] = r2);
          } };
        }, 845: (e2, t3, r2) => {
          Object.defineProperty(t3, "__esModule", { value: true }), t3.trace = void 0;
          let n2 = r2(997);
          t3.trace = n2.TraceAPI.getInstance();
        }, 403: (e2, t3, r2) => {
          Object.defineProperty(t3, "__esModule", { value: true }), t3.NonRecordingSpan = void 0;
          let n2 = r2(476);
          class i2 {
            constructor(e3 = n2.INVALID_SPAN_CONTEXT) {
              this._spanContext = e3;
            }
            spanContext() {
              return this._spanContext;
            }
            setAttribute(e3, t4) {
              return this;
            }
            setAttributes(e3) {
              return this;
            }
            addEvent(e3, t4) {
              return this;
            }
            setStatus(e3) {
              return this;
            }
            updateName(e3) {
              return this;
            }
            end(e3) {
            }
            isRecording() {
              return false;
            }
            recordException(e3, t4) {
            }
          }
          t3.NonRecordingSpan = i2;
        }, 614: (e2, t3, r2) => {
          Object.defineProperty(t3, "__esModule", { value: true }), t3.NoopTracer = void 0;
          let n2 = r2(491), i2 = r2(607), o2 = r2(403), a = r2(139), s = n2.ContextAPI.getInstance();
          class l {
            startSpan(e3, t4, r3 = s.active()) {
              if (null == t4 ? void 0 : t4.root) return new o2.NonRecordingSpan();
              let n3 = r3 && (0, i2.getSpanContext)(r3);
              return "object" == typeof n3 && "string" == typeof n3.spanId && "string" == typeof n3.traceId && "number" == typeof n3.traceFlags && (0, a.isSpanContextValid)(n3) ? new o2.NonRecordingSpan(n3) : new o2.NonRecordingSpan();
            }
            startActiveSpan(e3, t4, r3, n3) {
              let o3, a2, l2;
              if (arguments.length < 2) return;
              2 == arguments.length ? l2 = t4 : 3 == arguments.length ? (o3 = t4, l2 = r3) : (o3 = t4, a2 = r3, l2 = n3);
              let u = null != a2 ? a2 : s.active(), d = this.startSpan(e3, o3, u), c = (0, i2.setSpan)(u, d);
              return s.with(c, l2, void 0, d);
            }
          }
          t3.NoopTracer = l;
        }, 124: (e2, t3, r2) => {
          Object.defineProperty(t3, "__esModule", { value: true }), t3.NoopTracerProvider = void 0;
          let n2 = r2(614);
          class i2 {
            getTracer(e3, t4, r3) {
              return new n2.NoopTracer();
            }
          }
          t3.NoopTracerProvider = i2;
        }, 125: (e2, t3, r2) => {
          Object.defineProperty(t3, "__esModule", { value: true }), t3.ProxyTracer = void 0;
          let n2 = new (r2(614)).NoopTracer();
          class i2 {
            constructor(e3, t4, r3, n3) {
              this._provider = e3, this.name = t4, this.version = r3, this.options = n3;
            }
            startSpan(e3, t4, r3) {
              return this._getTracer().startSpan(e3, t4, r3);
            }
            startActiveSpan(e3, t4, r3, n3) {
              let i3 = this._getTracer();
              return Reflect.apply(i3.startActiveSpan, i3, arguments);
            }
            _getTracer() {
              if (this._delegate) return this._delegate;
              let e3 = this._provider.getDelegateTracer(this.name, this.version, this.options);
              return e3 ? (this._delegate = e3, this._delegate) : n2;
            }
          }
          t3.ProxyTracer = i2;
        }, 846: (e2, t3, r2) => {
          Object.defineProperty(t3, "__esModule", { value: true }), t3.ProxyTracerProvider = void 0;
          let n2 = r2(125), i2 = new (r2(124)).NoopTracerProvider();
          class o2 {
            getTracer(e3, t4, r3) {
              var i3;
              return null !== (i3 = this.getDelegateTracer(e3, t4, r3)) && void 0 !== i3 ? i3 : new n2.ProxyTracer(this, e3, t4, r3);
            }
            getDelegate() {
              var e3;
              return null !== (e3 = this._delegate) && void 0 !== e3 ? e3 : i2;
            }
            setDelegate(e3) {
              this._delegate = e3;
            }
            getDelegateTracer(e3, t4, r3) {
              var n3;
              return null === (n3 = this._delegate) || void 0 === n3 ? void 0 : n3.getTracer(e3, t4, r3);
            }
          }
          t3.ProxyTracerProvider = o2;
        }, 996: (e2, t3) => {
          Object.defineProperty(t3, "__esModule", { value: true }), t3.SamplingDecision = void 0, function(e3) {
            e3[e3.NOT_RECORD = 0] = "NOT_RECORD", e3[e3.RECORD = 1] = "RECORD", e3[e3.RECORD_AND_SAMPLED = 2] = "RECORD_AND_SAMPLED";
          }(t3.SamplingDecision || (t3.SamplingDecision = {}));
        }, 607: (e2, t3, r2) => {
          Object.defineProperty(t3, "__esModule", { value: true }), t3.getSpanContext = t3.setSpanContext = t3.deleteSpan = t3.setSpan = t3.getActiveSpan = t3.getSpan = void 0;
          let n2 = r2(780), i2 = r2(403), o2 = r2(491), a = (0, n2.createContextKey)("OpenTelemetry Context Key SPAN");
          function s(e3) {
            return e3.getValue(a) || void 0;
          }
          function l(e3, t4) {
            return e3.setValue(a, t4);
          }
          t3.getSpan = s, t3.getActiveSpan = function() {
            return s(o2.ContextAPI.getInstance().active());
          }, t3.setSpan = l, t3.deleteSpan = function(e3) {
            return e3.deleteValue(a);
          }, t3.setSpanContext = function(e3, t4) {
            return l(e3, new i2.NonRecordingSpan(t4));
          }, t3.getSpanContext = function(e3) {
            var t4;
            return null === (t4 = s(e3)) || void 0 === t4 ? void 0 : t4.spanContext();
          };
        }, 325: (e2, t3, r2) => {
          Object.defineProperty(t3, "__esModule", { value: true }), t3.TraceStateImpl = void 0;
          let n2 = r2(564);
          class i2 {
            constructor(e3) {
              this._internalState = /* @__PURE__ */ new Map(), e3 && this._parse(e3);
            }
            set(e3, t4) {
              let r3 = this._clone();
              return r3._internalState.has(e3) && r3._internalState.delete(e3), r3._internalState.set(e3, t4), r3;
            }
            unset(e3) {
              let t4 = this._clone();
              return t4._internalState.delete(e3), t4;
            }
            get(e3) {
              return this._internalState.get(e3);
            }
            serialize() {
              return this._keys().reduce((e3, t4) => (e3.push(t4 + "=" + this.get(t4)), e3), []).join(",");
            }
            _parse(e3) {
              !(e3.length > 512) && (this._internalState = e3.split(",").reverse().reduce((e4, t4) => {
                let r3 = t4.trim(), i3 = r3.indexOf("=");
                if (-1 !== i3) {
                  let o2 = r3.slice(0, i3), a = r3.slice(i3 + 1, t4.length);
                  (0, n2.validateKey)(o2) && (0, n2.validateValue)(a) && e4.set(o2, a);
                }
                return e4;
              }, /* @__PURE__ */ new Map()), this._internalState.size > 32 && (this._internalState = new Map(Array.from(this._internalState.entries()).reverse().slice(0, 32))));
            }
            _keys() {
              return Array.from(this._internalState.keys()).reverse();
            }
            _clone() {
              let e3 = new i2();
              return e3._internalState = new Map(this._internalState), e3;
            }
          }
          t3.TraceStateImpl = i2;
        }, 564: (e2, t3) => {
          Object.defineProperty(t3, "__esModule", { value: true }), t3.validateValue = t3.validateKey = void 0;
          let r2 = "[_0-9a-z-*/]", n2 = `[a-z]${r2}{0,255}`, i2 = `[a-z0-9]${r2}{0,240}@[a-z]${r2}{0,13}`, o2 = RegExp(`^(?:${n2}|${i2})$`), a = /^[ -~]{0,255}[!-~]$/, s = /,|=/;
          t3.validateKey = function(e3) {
            return o2.test(e3);
          }, t3.validateValue = function(e3) {
            return a.test(e3) && !s.test(e3);
          };
        }, 98: (e2, t3, r2) => {
          Object.defineProperty(t3, "__esModule", { value: true }), t3.createTraceState = void 0;
          let n2 = r2(325);
          t3.createTraceState = function(e3) {
            return new n2.TraceStateImpl(e3);
          };
        }, 476: (e2, t3, r2) => {
          Object.defineProperty(t3, "__esModule", { value: true }), t3.INVALID_SPAN_CONTEXT = t3.INVALID_TRACEID = t3.INVALID_SPANID = void 0;
          let n2 = r2(475);
          t3.INVALID_SPANID = "0000000000000000", t3.INVALID_TRACEID = "00000000000000000000000000000000", t3.INVALID_SPAN_CONTEXT = { traceId: t3.INVALID_TRACEID, spanId: t3.INVALID_SPANID, traceFlags: n2.TraceFlags.NONE };
        }, 357: (e2, t3) => {
          Object.defineProperty(t3, "__esModule", { value: true }), t3.SpanKind = void 0, function(e3) {
            e3[e3.INTERNAL = 0] = "INTERNAL", e3[e3.SERVER = 1] = "SERVER", e3[e3.CLIENT = 2] = "CLIENT", e3[e3.PRODUCER = 3] = "PRODUCER", e3[e3.CONSUMER = 4] = "CONSUMER";
          }(t3.SpanKind || (t3.SpanKind = {}));
        }, 139: (e2, t3, r2) => {
          Object.defineProperty(t3, "__esModule", { value: true }), t3.wrapSpanContext = t3.isSpanContextValid = t3.isValidSpanId = t3.isValidTraceId = void 0;
          let n2 = r2(476), i2 = r2(403), o2 = /^([0-9a-f]{32})$/i, a = /^[0-9a-f]{16}$/i;
          function s(e3) {
            return o2.test(e3) && e3 !== n2.INVALID_TRACEID;
          }
          function l(e3) {
            return a.test(e3) && e3 !== n2.INVALID_SPANID;
          }
          t3.isValidTraceId = s, t3.isValidSpanId = l, t3.isSpanContextValid = function(e3) {
            return s(e3.traceId) && l(e3.spanId);
          }, t3.wrapSpanContext = function(e3) {
            return new i2.NonRecordingSpan(e3);
          };
        }, 847: (e2, t3) => {
          Object.defineProperty(t3, "__esModule", { value: true }), t3.SpanStatusCode = void 0, function(e3) {
            e3[e3.UNSET = 0] = "UNSET", e3[e3.OK = 1] = "OK", e3[e3.ERROR = 2] = "ERROR";
          }(t3.SpanStatusCode || (t3.SpanStatusCode = {}));
        }, 475: (e2, t3) => {
          Object.defineProperty(t3, "__esModule", { value: true }), t3.TraceFlags = void 0, function(e3) {
            e3[e3.NONE = 0] = "NONE", e3[e3.SAMPLED = 1] = "SAMPLED";
          }(t3.TraceFlags || (t3.TraceFlags = {}));
        }, 521: (e2, t3) => {
          Object.defineProperty(t3, "__esModule", { value: true }), t3.VERSION = void 0, t3.VERSION = "1.6.0";
        } }, n = {};
        function i(e2) {
          var r2 = n[e2];
          if (void 0 !== r2) return r2.exports;
          var o2 = n[e2] = { exports: {} }, a = true;
          try {
            t2[e2].call(o2.exports, o2, o2.exports, i), a = false;
          } finally {
            a && delete n[e2];
          }
          return o2.exports;
        }
        i.ab = "//";
        var o = {};
        (() => {
          Object.defineProperty(o, "__esModule", { value: true }), o.trace = o.propagation = o.metrics = o.diag = o.context = o.INVALID_SPAN_CONTEXT = o.INVALID_TRACEID = o.INVALID_SPANID = o.isValidSpanId = o.isValidTraceId = o.isSpanContextValid = o.createTraceState = o.TraceFlags = o.SpanStatusCode = o.SpanKind = o.SamplingDecision = o.ProxyTracerProvider = o.ProxyTracer = o.defaultTextMapSetter = o.defaultTextMapGetter = o.ValueType = o.createNoopMeter = o.DiagLogLevel = o.DiagConsoleLogger = o.ROOT_CONTEXT = o.createContextKey = o.baggageEntryMetadataFromString = void 0;
          var e2 = i(369);
          Object.defineProperty(o, "baggageEntryMetadataFromString", { enumerable: true, get: function() {
            return e2.baggageEntryMetadataFromString;
          } });
          var t3 = i(780);
          Object.defineProperty(o, "createContextKey", { enumerable: true, get: function() {
            return t3.createContextKey;
          } }), Object.defineProperty(o, "ROOT_CONTEXT", { enumerable: true, get: function() {
            return t3.ROOT_CONTEXT;
          } });
          var r2 = i(972);
          Object.defineProperty(o, "DiagConsoleLogger", { enumerable: true, get: function() {
            return r2.DiagConsoleLogger;
          } });
          var n2 = i(957);
          Object.defineProperty(o, "DiagLogLevel", { enumerable: true, get: function() {
            return n2.DiagLogLevel;
          } });
          var a = i(102);
          Object.defineProperty(o, "createNoopMeter", { enumerable: true, get: function() {
            return a.createNoopMeter;
          } });
          var s = i(901);
          Object.defineProperty(o, "ValueType", { enumerable: true, get: function() {
            return s.ValueType;
          } });
          var l = i(194);
          Object.defineProperty(o, "defaultTextMapGetter", { enumerable: true, get: function() {
            return l.defaultTextMapGetter;
          } }), Object.defineProperty(o, "defaultTextMapSetter", { enumerable: true, get: function() {
            return l.defaultTextMapSetter;
          } });
          var u = i(125);
          Object.defineProperty(o, "ProxyTracer", { enumerable: true, get: function() {
            return u.ProxyTracer;
          } });
          var d = i(846);
          Object.defineProperty(o, "ProxyTracerProvider", { enumerable: true, get: function() {
            return d.ProxyTracerProvider;
          } });
          var c = i(996);
          Object.defineProperty(o, "SamplingDecision", { enumerable: true, get: function() {
            return c.SamplingDecision;
          } });
          var p = i(357);
          Object.defineProperty(o, "SpanKind", { enumerable: true, get: function() {
            return p.SpanKind;
          } });
          var g = i(847);
          Object.defineProperty(o, "SpanStatusCode", { enumerable: true, get: function() {
            return g.SpanStatusCode;
          } });
          var h = i(475);
          Object.defineProperty(o, "TraceFlags", { enumerable: true, get: function() {
            return h.TraceFlags;
          } });
          var f = i(98);
          Object.defineProperty(o, "createTraceState", { enumerable: true, get: function() {
            return f.createTraceState;
          } });
          var b = i(139);
          Object.defineProperty(o, "isSpanContextValid", { enumerable: true, get: function() {
            return b.isSpanContextValid;
          } }), Object.defineProperty(o, "isValidTraceId", { enumerable: true, get: function() {
            return b.isValidTraceId;
          } }), Object.defineProperty(o, "isValidSpanId", { enumerable: true, get: function() {
            return b.isValidSpanId;
          } });
          var m = i(476);
          Object.defineProperty(o, "INVALID_SPANID", { enumerable: true, get: function() {
            return m.INVALID_SPANID;
          } }), Object.defineProperty(o, "INVALID_TRACEID", { enumerable: true, get: function() {
            return m.INVALID_TRACEID;
          } }), Object.defineProperty(o, "INVALID_SPAN_CONTEXT", { enumerable: true, get: function() {
            return m.INVALID_SPAN_CONTEXT;
          } });
          let v = i(67);
          Object.defineProperty(o, "context", { enumerable: true, get: function() {
            return v.context;
          } });
          let w = i(506);
          Object.defineProperty(o, "diag", { enumerable: true, get: function() {
            return w.diag;
          } });
          let y = i(886);
          Object.defineProperty(o, "metrics", { enumerable: true, get: function() {
            return y.metrics;
          } });
          let _ = i(939);
          Object.defineProperty(o, "propagation", { enumerable: true, get: function() {
            return _.propagation;
          } });
          let x = i(845);
          Object.defineProperty(o, "trace", { enumerable: true, get: function() {
            return x.trace;
          } }), o.default = { context: v.context, diag: w.diag, metrics: y.metrics, propagation: _.propagation, trace: x.trace };
        })(), e.exports = o;
      })();
    }, 133: (e) => {
      (() => {
        "use strict";
        "undefined" != typeof __nccwpck_require__ && (__nccwpck_require__.ab = "//");
        var t = {};
        (() => {
          t.parse = function(t2, r2) {
            if ("string" != typeof t2) throw TypeError("argument str must be a string");
            for (var i2 = {}, o = t2.split(n), a = (r2 || {}).decode || e2, s = 0; s < o.length; s++) {
              var l = o[s], u = l.indexOf("=");
              if (!(u < 0)) {
                var d = l.substr(0, u).trim(), c = l.substr(++u, l.length).trim();
                '"' == c[0] && (c = c.slice(1, -1)), void 0 == i2[d] && (i2[d] = function(e3, t3) {
                  try {
                    return t3(e3);
                  } catch (t4) {
                    return e3;
                  }
                }(c, a));
              }
            }
            return i2;
          }, t.serialize = function(e3, t2, n2) {
            var o = n2 || {}, a = o.encode || r;
            if ("function" != typeof a) throw TypeError("option encode is invalid");
            if (!i.test(e3)) throw TypeError("argument name is invalid");
            var s = a(t2);
            if (s && !i.test(s)) throw TypeError("argument val is invalid");
            var l = e3 + "=" + s;
            if (null != o.maxAge) {
              var u = o.maxAge - 0;
              if (isNaN(u) || !isFinite(u)) throw TypeError("option maxAge is invalid");
              l += "; Max-Age=" + Math.floor(u);
            }
            if (o.domain) {
              if (!i.test(o.domain)) throw TypeError("option domain is invalid");
              l += "; Domain=" + o.domain;
            }
            if (o.path) {
              if (!i.test(o.path)) throw TypeError("option path is invalid");
              l += "; Path=" + o.path;
            }
            if (o.expires) {
              if ("function" != typeof o.expires.toUTCString) throw TypeError("option expires is invalid");
              l += "; Expires=" + o.expires.toUTCString();
            }
            if (o.httpOnly && (l += "; HttpOnly"), o.secure && (l += "; Secure"), o.sameSite) switch ("string" == typeof o.sameSite ? o.sameSite.toLowerCase() : o.sameSite) {
              case true:
              case "strict":
                l += "; SameSite=Strict";
                break;
              case "lax":
                l += "; SameSite=Lax";
                break;
              case "none":
                l += "; SameSite=None";
                break;
              default:
                throw TypeError("option sameSite is invalid");
            }
            return l;
          };
          var e2 = decodeURIComponent, r = encodeURIComponent, n = /; */, i = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;
        })(), e.exports = t;
      })();
    }, 340: (e, t, r) => {
      var n;
      (() => {
        var i = { 226: function(i2, o2) {
          !function(a2, s2) {
            "use strict";
            var l = "function", u = "undefined", d = "object", c = "string", p = "major", g = "model", h = "name", f = "type", b = "vendor", m = "version", v = "architecture", w = "console", y = "mobile", _ = "tablet", x = "smarttv", S = "wearable", P = "embedded", O = "Amazon", R = "Apple", N = "ASUS", C = "BlackBerry", T = "Browser", E = "Chrome", I = "Firefox", M = "Google", A = "Huawei", L = "Microsoft", k = "Motorola", j = "Opera", D = "Samsung", U = "Sharp", V = "Sony", B = "Xiaomi", q = "Zebra", $ = "Facebook", G = "Chromium OS", H = "Mac OS", F = function(e2, t2) {
              var r2 = {};
              for (var n2 in e2) t2[n2] && t2[n2].length % 2 == 0 ? r2[n2] = t2[n2].concat(e2[n2]) : r2[n2] = e2[n2];
              return r2;
            }, z = function(e2) {
              for (var t2 = {}, r2 = 0; r2 < e2.length; r2++) t2[e2[r2].toUpperCase()] = e2[r2];
              return t2;
            }, W = function(e2, t2) {
              return typeof e2 === c && -1 !== K(t2).indexOf(K(e2));
            }, K = function(e2) {
              return e2.toLowerCase();
            }, X = function(e2, t2) {
              if (typeof e2 === c) return e2 = e2.replace(/^\s\s*/, ""), typeof t2 === u ? e2 : e2.substring(0, 350);
            }, Y = function(e2, t2) {
              for (var r2, n2, i3, o3, a3, u2, c2 = 0; c2 < t2.length && !a3; ) {
                var p2 = t2[c2], g2 = t2[c2 + 1];
                for (r2 = n2 = 0; r2 < p2.length && !a3 && p2[r2]; ) if (a3 = p2[r2++].exec(e2)) for (i3 = 0; i3 < g2.length; i3++) u2 = a3[++n2], typeof (o3 = g2[i3]) === d && o3.length > 0 ? 2 === o3.length ? typeof o3[1] == l ? this[o3[0]] = o3[1].call(this, u2) : this[o3[0]] = o3[1] : 3 === o3.length ? typeof o3[1] !== l || o3[1].exec && o3[1].test ? this[o3[0]] = u2 ? u2.replace(o3[1], o3[2]) : void 0 : this[o3[0]] = u2 ? o3[1].call(this, u2, o3[2]) : void 0 : 4 === o3.length && (this[o3[0]] = u2 ? o3[3].call(this, u2.replace(o3[1], o3[2])) : void 0) : this[o3] = u2 || s2;
                c2 += 2;
              }
            }, Z = function(e2, t2) {
              for (var r2 in t2) if (typeof t2[r2] === d && t2[r2].length > 0) {
                for (var n2 = 0; n2 < t2[r2].length; n2++) if (W(t2[r2][n2], e2)) return "?" === r2 ? s2 : r2;
              } else if (W(t2[r2], e2)) return "?" === r2 ? s2 : r2;
              return e2;
            }, J = { ME: "4.90", "NT 3.11": "NT3.51", "NT 4.0": "NT4.0", 2e3: "NT 5.0", XP: ["NT 5.1", "NT 5.2"], Vista: "NT 6.0", 7: "NT 6.1", 8: "NT 6.2", 8.1: "NT 6.3", 10: ["NT 6.4", "NT 10.0"], RT: "ARM" }, Q = { browser: [[/\b(?:crmo|crios)\/([\w\.]+)/i], [m, [h, "Chrome"]], [/edg(?:e|ios|a)?\/([\w\.]+)/i], [m, [h, "Edge"]], [/(opera mini)\/([-\w\.]+)/i, /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i, /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i], [h, m], [/opios[\/ ]+([\w\.]+)/i], [m, [h, j + " Mini"]], [/\bopr\/([\w\.]+)/i], [m, [h, j]], [/(kindle)\/([\w\.]+)/i, /(lunascape|maxthon|netfront|jasmine|blazer)[\/ ]?([\w\.]*)/i, /(avant |iemobile|slim)(?:browser)?[\/ ]?([\w\.]*)/i, /(ba?idubrowser)[\/ ]?([\w\.]+)/i, /(?:ms|\()(ie) ([\w\.]+)/i, /(flock|rockmelt|midori|epiphany|silk|skyfire|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|qq|duckduckgo)\/([-\w\.]+)/i, /(heytap|ovi)browser\/([\d\.]+)/i, /(weibo)__([\d\.]+)/i], [h, m], [/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i], [m, [h, "UC" + T]], [/microm.+\bqbcore\/([\w\.]+)/i, /\bqbcore\/([\w\.]+).+microm/i], [m, [h, "WeChat(Win) Desktop"]], [/micromessenger\/([\w\.]+)/i], [m, [h, "WeChat"]], [/konqueror\/([\w\.]+)/i], [m, [h, "Konqueror"]], [/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i], [m, [h, "IE"]], [/ya(?:search)?browser\/([\w\.]+)/i], [m, [h, "Yandex"]], [/(avast|avg)\/([\w\.]+)/i], [[h, /(.+)/, "$1 Secure " + T], m], [/\bfocus\/([\w\.]+)/i], [m, [h, I + " Focus"]], [/\bopt\/([\w\.]+)/i], [m, [h, j + " Touch"]], [/coc_coc\w+\/([\w\.]+)/i], [m, [h, "Coc Coc"]], [/dolfin\/([\w\.]+)/i], [m, [h, "Dolphin"]], [/coast\/([\w\.]+)/i], [m, [h, j + " Coast"]], [/miuibrowser\/([\w\.]+)/i], [m, [h, "MIUI " + T]], [/fxios\/([-\w\.]+)/i], [m, [h, I]], [/\bqihu|(qi?ho?o?|360)browser/i], [[h, "360 " + T]], [/(oculus|samsung|sailfish|huawei)browser\/([\w\.]+)/i], [[h, /(.+)/, "$1 " + T], m], [/(comodo_dragon)\/([\w\.]+)/i], [[h, /_/g, " "], m], [/(electron)\/([\w\.]+) safari/i, /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i, /m?(qqbrowser|baiduboxapp|2345Explorer)[\/ ]?([\w\.]+)/i], [h, m], [/(metasr)[\/ ]?([\w\.]+)/i, /(lbbrowser)/i, /\[(linkedin)app\]/i], [h], [/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i], [[h, $], m], [/(kakao(?:talk|story))[\/ ]([\w\.]+)/i, /(naver)\(.*?(\d+\.[\w\.]+).*\)/i, /safari (line)\/([\w\.]+)/i, /\b(line)\/([\w\.]+)\/iab/i, /(chromium|instagram)[\/ ]([-\w\.]+)/i], [h, m], [/\bgsa\/([\w\.]+) .*safari\//i], [m, [h, "GSA"]], [/musical_ly(?:.+app_?version\/|_)([\w\.]+)/i], [m, [h, "TikTok"]], [/headlesschrome(?:\/([\w\.]+)| )/i], [m, [h, E + " Headless"]], [/ wv\).+(chrome)\/([\w\.]+)/i], [[h, E + " WebView"], m], [/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i], [m, [h, "Android " + T]], [/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i], [h, m], [/version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i], [m, [h, "Mobile Safari"]], [/version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i], [m, h], [/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i], [h, [m, Z, { "1.0": "/8", 1.2: "/1", 1.3: "/3", "2.0": "/412", "2.0.2": "/416", "2.0.3": "/417", "2.0.4": "/419", "?": "/" }]], [/(webkit|khtml)\/([\w\.]+)/i], [h, m], [/(navigator|netscape\d?)\/([-\w\.]+)/i], [[h, "Netscape"], m], [/mobile vr; rv:([\w\.]+)\).+firefox/i], [m, [h, I + " Reality"]], [/ekiohf.+(flow)\/([\w\.]+)/i, /(swiftfox)/i, /(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror|klar)[\/ ]?([\w\.\+]+)/i, /(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i, /(firefox)\/([\w\.]+)/i, /(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i, /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i, /(links) \(([\w\.]+)/i, /panasonic;(viera)/i], [h, m], [/(cobalt)\/([\w\.]+)/i], [h, [m, /master.|lts./, ""]]], cpu: [[/(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i], [[v, "amd64"]], [/(ia32(?=;))/i], [[v, K]], [/((?:i[346]|x)86)[;\)]/i], [[v, "ia32"]], [/\b(aarch64|arm(v?8e?l?|_?64))\b/i], [[v, "arm64"]], [/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i], [[v, "armhf"]], [/windows (ce|mobile); ppc;/i], [[v, "arm"]], [/((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i], [[v, /ower/, "", K]], [/(sun4\w)[;\)]/i], [[v, "sparc"]], [/((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i], [[v, K]]], device: [[/\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i], [g, [b, D], [f, _]], [/\b((?:s[cgp]h|gt|sm)-\w+|sc[g-]?[\d]+a?|galaxy nexus)/i, /samsung[- ]([-\w]+)/i, /sec-(sgh\w+)/i], [g, [b, D], [f, y]], [/(?:\/|\()(ip(?:hone|od)[\w, ]*)(?:\/|;)/i], [g, [b, R], [f, y]], [/\((ipad);[-\w\),; ]+apple/i, /applecoremedia\/[\w\.]+ \((ipad)/i, /\b(ipad)\d\d?,\d\d?[;\]].+ios/i], [g, [b, R], [f, _]], [/(macintosh);/i], [g, [b, R]], [/\b(sh-?[altvz]?\d\d[a-ekm]?)/i], [g, [b, U], [f, y]], [/\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i], [g, [b, A], [f, _]], [/(?:huawei|honor)([-\w ]+)[;\)]/i, /\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i], [g, [b, A], [f, y]], [/\b(poco[\w ]+)(?: bui|\))/i, /\b; (\w+) build\/hm\1/i, /\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i, /\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i, /\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite)?)(?: bui|\))/i], [[g, /_/g, " "], [b, B], [f, y]], [/\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i], [[g, /_/g, " "], [b, B], [f, _]], [/; (\w+) bui.+ oppo/i, /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i], [g, [b, "OPPO"], [f, y]], [/vivo (\w+)(?: bui|\))/i, /\b(v[12]\d{3}\w?[at])(?: bui|;)/i], [g, [b, "Vivo"], [f, y]], [/\b(rmx[12]\d{3})(?: bui|;|\))/i], [g, [b, "Realme"], [f, y]], [/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i, /\bmot(?:orola)?[- ](\w*)/i, /((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i], [g, [b, k], [f, y]], [/\b(mz60\d|xoom[2 ]{0,2}) build\//i], [g, [b, k], [f, _]], [/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i], [g, [b, "LG"], [f, _]], [/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i, /\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i, /\blg-?([\d\w]+) bui/i], [g, [b, "LG"], [f, y]], [/(ideatab[-\w ]+)/i, /lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i], [g, [b, "Lenovo"], [f, _]], [/(?:maemo|nokia).*(n900|lumia \d+)/i, /nokia[-_ ]?([-\w\.]*)/i], [[g, /_/g, " "], [b, "Nokia"], [f, y]], [/(pixel c)\b/i], [g, [b, M], [f, _]], [/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i], [g, [b, M], [f, y]], [/droid.+ (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i], [g, [b, V], [f, y]], [/sony tablet [ps]/i, /\b(?:sony)?sgp\w+(?: bui|\))/i], [[g, "Xperia Tablet"], [b, V], [f, _]], [/ (kb2005|in20[12]5|be20[12][59])\b/i, /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i], [g, [b, "OnePlus"], [f, y]], [/(alexa)webm/i, /(kf[a-z]{2}wi|aeo[c-r]{2})( bui|\))/i, /(kf[a-z]+)( bui|\)).+silk\//i], [g, [b, O], [f, _]], [/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i], [[g, /(.+)/g, "Fire Phone $1"], [b, O], [f, y]], [/(playbook);[-\w\),; ]+(rim)/i], [g, b, [f, _]], [/\b((?:bb[a-f]|st[hv])100-\d)/i, /\(bb10; (\w+)/i], [g, [b, C], [f, y]], [/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i], [g, [b, N], [f, _]], [/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i], [g, [b, N], [f, y]], [/(nexus 9)/i], [g, [b, "HTC"], [f, _]], [/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i, /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i, /(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i], [b, [g, /_/g, " "], [f, y]], [/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i], [g, [b, "Acer"], [f, _]], [/droid.+; (m[1-5] note) bui/i, /\bmz-([-\w]{2,})/i], [g, [b, "Meizu"], [f, y]], [/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[-_ ]?([-\w]*)/i, /(hp) ([\w ]+\w)/i, /(asus)-?(\w+)/i, /(microsoft); (lumia[\w ]+)/i, /(lenovo)[-_ ]?([-\w]+)/i, /(jolla)/i, /(oppo) ?([\w ]+) bui/i], [b, g, [f, y]], [/(kobo)\s(ereader|touch)/i, /(archos) (gamepad2?)/i, /(hp).+(touchpad(?!.+tablet)|tablet)/i, /(kindle)\/([\w\.]+)/i, /(nook)[\w ]+build\/(\w+)/i, /(dell) (strea[kpr\d ]*[\dko])/i, /(le[- ]+pan)[- ]+(\w{1,9}) bui/i, /(trinity)[- ]*(t\d{3}) bui/i, /(gigaset)[- ]+(q\w{1,9}) bui/i, /(vodafone) ([\w ]+)(?:\)| bui)/i], [b, g, [f, _]], [/(surface duo)/i], [g, [b, L], [f, _]], [/droid [\d\.]+; (fp\du?)(?: b|\))/i], [g, [b, "Fairphone"], [f, y]], [/(u304aa)/i], [g, [b, "AT&T"], [f, y]], [/\bsie-(\w*)/i], [g, [b, "Siemens"], [f, y]], [/\b(rct\w+) b/i], [g, [b, "RCA"], [f, _]], [/\b(venue[\d ]{2,7}) b/i], [g, [b, "Dell"], [f, _]], [/\b(q(?:mv|ta)\w+) b/i], [g, [b, "Verizon"], [f, _]], [/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i], [g, [b, "Barnes & Noble"], [f, _]], [/\b(tm\d{3}\w+) b/i], [g, [b, "NuVision"], [f, _]], [/\b(k88) b/i], [g, [b, "ZTE"], [f, _]], [/\b(nx\d{3}j) b/i], [g, [b, "ZTE"], [f, y]], [/\b(gen\d{3}) b.+49h/i], [g, [b, "Swiss"], [f, y]], [/\b(zur\d{3}) b/i], [g, [b, "Swiss"], [f, _]], [/\b((zeki)?tb.*\b) b/i], [g, [b, "Zeki"], [f, _]], [/\b([yr]\d{2}) b/i, /\b(dragon[- ]+touch |dt)(\w{5}) b/i], [[b, "Dragon Touch"], g, [f, _]], [/\b(ns-?\w{0,9}) b/i], [g, [b, "Insignia"], [f, _]], [/\b((nxa|next)-?\w{0,9}) b/i], [g, [b, "NextBook"], [f, _]], [/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i], [[b, "Voice"], g, [f, y]], [/\b(lvtel\-)?(v1[12]) b/i], [[b, "LvTel"], g, [f, y]], [/\b(ph-1) /i], [g, [b, "Essential"], [f, y]], [/\b(v(100md|700na|7011|917g).*\b) b/i], [g, [b, "Envizen"], [f, _]], [/\b(trio[-\w\. ]+) b/i], [g, [b, "MachSpeed"], [f, _]], [/\btu_(1491) b/i], [g, [b, "Rotor"], [f, _]], [/(shield[\w ]+) b/i], [g, [b, "Nvidia"], [f, _]], [/(sprint) (\w+)/i], [b, g, [f, y]], [/(kin\.[onetw]{3})/i], [[g, /\./g, " "], [b, L], [f, y]], [/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i], [g, [b, q], [f, _]], [/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i], [g, [b, q], [f, y]], [/smart-tv.+(samsung)/i], [b, [f, x]], [/hbbtv.+maple;(\d+)/i], [[g, /^/, "SmartTV"], [b, D], [f, x]], [/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i], [[b, "LG"], [f, x]], [/(apple) ?tv/i], [b, [g, R + " TV"], [f, x]], [/crkey/i], [[g, E + "cast"], [b, M], [f, x]], [/droid.+aft(\w)( bui|\))/i], [g, [b, O], [f, x]], [/\(dtv[\);].+(aquos)/i, /(aquos-tv[\w ]+)\)/i], [g, [b, U], [f, x]], [/(bravia[\w ]+)( bui|\))/i], [g, [b, V], [f, x]], [/(mitv-\w{5}) bui/i], [g, [b, B], [f, x]], [/Hbbtv.*(technisat) (.*);/i], [b, g, [f, x]], [/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i, /hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i], [[b, X], [g, X], [f, x]], [/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i], [[f, x]], [/(ouya)/i, /(nintendo) ([wids3utch]+)/i], [b, g, [f, w]], [/droid.+; (shield) bui/i], [g, [b, "Nvidia"], [f, w]], [/(playstation [345portablevi]+)/i], [g, [b, V], [f, w]], [/\b(xbox(?: one)?(?!; xbox))[\); ]/i], [g, [b, L], [f, w]], [/((pebble))app/i], [b, g, [f, S]], [/(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i], [g, [b, R], [f, S]], [/droid.+; (glass) \d/i], [g, [b, M], [f, S]], [/droid.+; (wt63?0{2,3})\)/i], [g, [b, q], [f, S]], [/(quest( 2| pro)?)/i], [g, [b, $], [f, S]], [/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i], [b, [f, P]], [/(aeobc)\b/i], [g, [b, O], [f, P]], [/droid .+?; ([^;]+?)(?: bui|\) applew).+? mobile safari/i], [g, [f, y]], [/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i], [g, [f, _]], [/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i], [[f, _]], [/(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i], [[f, y]], [/(android[-\w\. ]{0,9});.+buil/i], [g, [b, "Generic"]]], engine: [[/windows.+ edge\/([\w\.]+)/i], [m, [h, "EdgeHTML"]], [/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i], [m, [h, "Blink"]], [/(presto)\/([\w\.]+)/i, /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i, /ekioh(flow)\/([\w\.]+)/i, /(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i, /(icab)[\/ ]([23]\.[\d\.]+)/i, /\b(libweb)/i], [h, m], [/rv\:([\w\.]{1,9})\b.+(gecko)/i], [m, h]], os: [[/microsoft (windows) (vista|xp)/i], [h, m], [/(windows) nt 6\.2; (arm)/i, /(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i, /(windows)[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i], [h, [m, Z, J]], [/(win(?=3|9|n)|win 9x )([nt\d\.]+)/i], [[h, "Windows"], [m, Z, J]], [/ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i, /ios;fbsv\/([\d\.]+)/i, /cfnetwork\/.+darwin/i], [[m, /_/g, "."], [h, "iOS"]], [/(mac os x) ?([\w\. ]*)/i, /(macintosh|mac_powerpc\b)(?!.+haiku)/i], [[h, H], [m, /_/g, "."]], [/droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i], [m, h], [/(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\/ ]?([\w\.]*)/i, /(blackberry)\w*\/([\w\.]*)/i, /(tizen|kaios)[\/ ]([\w\.]+)/i, /\((series40);/i], [h, m], [/\(bb(10);/i], [m, [h, C]], [/(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i], [m, [h, "Symbian"]], [/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i], [m, [h, I + " OS"]], [/web0s;.+rt(tv)/i, /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i], [m, [h, "webOS"]], [/watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i], [m, [h, "watchOS"]], [/crkey\/([\d\.]+)/i], [m, [h, E + "cast"]], [/(cros) [\w]+(?:\)| ([\w\.]+)\b)/i], [[h, G], m], [/panasonic;(viera)/i, /(netrange)mmh/i, /(nettv)\/(\d+\.[\w\.]+)/i, /(nintendo|playstation) ([wids345portablevuch]+)/i, /(xbox); +xbox ([^\);]+)/i, /\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i, /(mint)[\/\(\) ]?(\w*)/i, /(mageia|vectorlinux)[; ]/i, /([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i, /(hurd|linux) ?([\w\.]*)/i, /(gnu) ?([\w\.]*)/i, /\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i, /(haiku) (\w+)/i], [h, m], [/(sunos) ?([\w\.\d]*)/i], [[h, "Solaris"], m], [/((?:open)?solaris)[-\/ ]?([\w\.]*)/i, /(aix) ((\d)(?=\.|\)| )[\w\.])*/i, /\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux|serenityos)/i, /(unix) ?([\w\.]*)/i], [h, m]] }, ee = function(e2, t2) {
              if (typeof e2 === d && (t2 = e2, e2 = s2), !(this instanceof ee)) return new ee(e2, t2).getResult();
              var r2 = typeof a2 !== u && a2.navigator ? a2.navigator : s2, n2 = e2 || (r2 && r2.userAgent ? r2.userAgent : ""), i3 = r2 && r2.userAgentData ? r2.userAgentData : s2, o3 = t2 ? F(Q, t2) : Q, w2 = r2 && r2.userAgent == n2;
              return this.getBrowser = function() {
                var e3, t3 = {};
                return t3[h] = s2, t3[m] = s2, Y.call(t3, n2, o3.browser), t3[p] = typeof (e3 = t3[m]) === c ? e3.replace(/[^\d\.]/g, "").split(".")[0] : s2, w2 && r2 && r2.brave && typeof r2.brave.isBrave == l && (t3[h] = "Brave"), t3;
              }, this.getCPU = function() {
                var e3 = {};
                return e3[v] = s2, Y.call(e3, n2, o3.cpu), e3;
              }, this.getDevice = function() {
                var e3 = {};
                return e3[b] = s2, e3[g] = s2, e3[f] = s2, Y.call(e3, n2, o3.device), w2 && !e3[f] && i3 && i3.mobile && (e3[f] = y), w2 && "Macintosh" == e3[g] && r2 && typeof r2.standalone !== u && r2.maxTouchPoints && r2.maxTouchPoints > 2 && (e3[g] = "iPad", e3[f] = _), e3;
              }, this.getEngine = function() {
                var e3 = {};
                return e3[h] = s2, e3[m] = s2, Y.call(e3, n2, o3.engine), e3;
              }, this.getOS = function() {
                var e3 = {};
                return e3[h] = s2, e3[m] = s2, Y.call(e3, n2, o3.os), w2 && !e3[h] && i3 && "Unknown" != i3.platform && (e3[h] = i3.platform.replace(/chrome os/i, G).replace(/macos/i, H)), e3;
              }, this.getResult = function() {
                return { ua: this.getUA(), browser: this.getBrowser(), engine: this.getEngine(), os: this.getOS(), device: this.getDevice(), cpu: this.getCPU() };
              }, this.getUA = function() {
                return n2;
              }, this.setUA = function(e3) {
                return n2 = typeof e3 === c && e3.length > 350 ? X(e3, 350) : e3, this;
              }, this.setUA(n2), this;
            };
            ee.VERSION = "1.0.35", ee.BROWSER = z([h, m, p]), ee.CPU = z([v]), ee.DEVICE = z([g, b, f, w, y, x, _, S, P]), ee.ENGINE = ee.OS = z([h, m]), typeof o2 !== u ? (i2.exports && (o2 = i2.exports = ee), o2.UAParser = ee) : r.amdO ? void 0 !== (n = function() {
              return ee;
            }.call(t, r, t, e)) && (e.exports = n) : typeof a2 !== u && (a2.UAParser = ee);
            var et = typeof a2 !== u && (a2.jQuery || a2.Zepto);
            if (et && !et.ua) {
              var er = new ee();
              et.ua = er.getResult(), et.ua.get = function() {
                return er.getUA();
              }, et.ua.set = function(e2) {
                er.setUA(e2);
                var t2 = er.getResult();
                for (var r2 in t2) et.ua[r2] = t2[r2];
              };
            }
          }("object" == typeof window ? window : this);
        } }, o = {};
        function a(e2) {
          var t2 = o[e2];
          if (void 0 !== t2) return t2.exports;
          var r2 = o[e2] = { exports: {} }, n2 = true;
          try {
            i[e2].call(r2.exports, r2, r2.exports, a), n2 = false;
          } finally {
            n2 && delete o[e2];
          }
          return r2.exports;
        }
        a.ab = "//";
        var s = a(226);
        e.exports = s;
      })();
    }, 488: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: true }), function(e2, t2) {
        for (var r2 in t2) Object.defineProperty(e2, r2, { enumerable: true, get: t2[r2] });
      }(t, { getTestReqInfo: function() {
        return a;
      }, withRequest: function() {
        return o;
      } });
      let n = new (r(67)).AsyncLocalStorage();
      function i(e2, t2) {
        let r2 = t2.header(e2, "next-test-proxy-port");
        if (r2) return { url: t2.url(e2), proxyPort: Number(r2), testData: t2.header(e2, "next-test-data") || "" };
      }
      function o(e2, t2, r2) {
        let o2 = i(e2, t2);
        return o2 ? n.run(o2, r2) : r2();
      }
      function a(e2, t2) {
        return n.getStore() || (e2 && t2 ? i(e2, t2) : void 0);
      }
    }, 375: (e, t, r) => {
      "use strict";
      var n = r(195).Buffer;
      Object.defineProperty(t, "__esModule", { value: true }), function(e2, t2) {
        for (var r2 in t2) Object.defineProperty(e2, r2, { enumerable: true, get: t2[r2] });
      }(t, { handleFetch: function() {
        return s;
      }, interceptFetch: function() {
        return l;
      }, reader: function() {
        return o;
      } });
      let i = r(488), o = { url: (e2) => e2.url, header: (e2, t2) => e2.headers.get(t2) };
      async function a(e2, t2) {
        let { url: r2, method: i2, headers: o2, body: a2, cache: s2, credentials: l2, integrity: u, mode: d, redirect: c, referrer: p, referrerPolicy: g } = t2;
        return { testData: e2, api: "fetch", request: { url: r2, method: i2, headers: [...Array.from(o2), ["next-test-stack", function() {
          let e3 = (Error().stack ?? "").split("\n");
          for (let t3 = 1; t3 < e3.length; t3++) if (e3[t3].length > 0) {
            e3 = e3.slice(t3);
            break;
          }
          return (e3 = (e3 = (e3 = e3.filter((e4) => !e4.includes("/next/dist/"))).slice(0, 5)).map((e4) => e4.replace("webpack-internal:///(rsc)/", "").trim())).join("    ");
        }()]], body: a2 ? n.from(await t2.arrayBuffer()).toString("base64") : null, cache: s2, credentials: l2, integrity: u, mode: d, redirect: c, referrer: p, referrerPolicy: g } };
      }
      async function s(e2, t2) {
        let r2 = (0, i.getTestReqInfo)(t2, o);
        if (!r2) return e2(t2);
        let { testData: s2, proxyPort: l2 } = r2, u = await a(s2, t2), d = await e2(`http://localhost:${l2}`, { method: "POST", body: JSON.stringify(u), next: { internal: true } });
        if (!d.ok) throw Error(`Proxy request failed: ${d.status}`);
        let c = await d.json(), { api: p } = c;
        switch (p) {
          case "continue":
            return e2(t2);
          case "abort":
          case "unhandled":
            throw Error(`Proxy request aborted [${t2.method} ${t2.url}]`);
        }
        return function(e3) {
          let { status: t3, headers: r3, body: i2 } = e3.response;
          return new Response(i2 ? n.from(i2, "base64") : null, { status: t3, headers: new Headers(r3) });
        }(c);
      }
      function l(e2) {
        return r.g.fetch = function(t2, r2) {
          var n2;
          return (null == r2 ? void 0 : null == (n2 = r2.next) ? void 0 : n2.internal) ? e2(t2, r2) : s(e2, new Request(t2, r2));
        }, () => {
          r.g.fetch = e2;
        };
      }
    }, 177: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: true }), function(e2, t2) {
        for (var r2 in t2) Object.defineProperty(e2, r2, { enumerable: true, get: t2[r2] });
      }(t, { interceptTestApis: function() {
        return o;
      }, wrapRequestHandler: function() {
        return a;
      } });
      let n = r(488), i = r(375);
      function o() {
        return (0, i.interceptFetch)(r.g.fetch);
      }
      function a(e2) {
        return (t2, r2) => (0, n.withRequest)(t2, i.reader, () => e2(t2, r2));
      }
    } }, (e) => {
      var t = e(e.s = 274);
      (_ENTRIES = "undefined" == typeof _ENTRIES ? {} : _ENTRIES).middleware_middleware = t;
    }]);
  }
});

// node_modules/@opennextjs/aws/dist/core/edgeFunctionHandler.js
var edgeFunctionHandler_exports = {};
__export(edgeFunctionHandler_exports, {
  default: () => edgeFunctionHandler
});
async function edgeFunctionHandler(request) {
  const path3 = new URL(request.url).pathname;
  const routes = globalThis._ROUTES;
  const correspondingRoute = routes.find((route) => route.regex.some((r) => new RegExp(r).test(path3)));
  if (!correspondingRoute) {
    throw new Error(`No route found for ${request.url}`);
  }
  const entry = await self._ENTRIES[`middleware_${correspondingRoute.name}`];
  const result = await entry.default({
    page: correspondingRoute.page,
    request: {
      ...request,
      page: {
        name: correspondingRoute.name
      }
    }
  });
  globalThis.__openNextAls.getStore()?.pendingPromiseRunner.add(result.waitUntil);
  const response = result.response;
  return response;
}
var init_edgeFunctionHandler = __esm({
  "node_modules/@opennextjs/aws/dist/core/edgeFunctionHandler.js"() {
    globalThis._ENTRIES = {};
    globalThis.self = globalThis;
    globalThis._ROUTES = [{ "name": "middleware", "page": "/", "regex": ["^/.*$"] }];
    require_edge_runtime_webpack();
    require_middleware();
  }
});

// node_modules/@opennextjs/aws/dist/utils/promise.js
init_logger();
var DetachedPromise = class {
  resolve;
  reject;
  promise;
  constructor() {
    let resolve;
    let reject;
    this.promise = new Promise((res, rej) => {
      resolve = res;
      reject = rej;
    });
    this.resolve = resolve;
    this.reject = reject;
  }
};
var DetachedPromiseRunner = class {
  promises = [];
  withResolvers() {
    const detachedPromise = new DetachedPromise();
    this.promises.push(detachedPromise);
    return detachedPromise;
  }
  add(promise) {
    const detachedPromise = new DetachedPromise();
    this.promises.push(detachedPromise);
    promise.then(detachedPromise.resolve, detachedPromise.reject);
  }
  async await() {
    debug(`Awaiting ${this.promises.length} detached promises`);
    const results = await Promise.allSettled(this.promises.map((p) => p.promise));
    const rejectedPromises = results.filter((r) => r.status === "rejected");
    rejectedPromises.forEach((r) => {
      error(r.reason);
    });
  }
};
async function awaitAllDetachedPromise() {
  const store = globalThis.__openNextAls.getStore();
  const promisesToAwait = store?.pendingPromiseRunner.await() ?? Promise.resolve();
  if (store?.waitUntil) {
    store.waitUntil(promisesToAwait);
    return;
  }
  await promisesToAwait;
}
function provideNextAfterProvider() {
  const NEXT_REQUEST_CONTEXT_SYMBOL = Symbol.for("@next/request-context");
  const VERCEL_REQUEST_CONTEXT_SYMBOL = Symbol.for("@vercel/request-context");
  const store = globalThis.__openNextAls.getStore();
  const waitUntil = store?.waitUntil ?? ((promise) => store?.pendingPromiseRunner.add(promise));
  const nextAfterContext = {
    get: () => ({
      waitUntil
    })
  };
  globalThis[NEXT_REQUEST_CONTEXT_SYMBOL] = nextAfterContext;
  if (process.env.EMULATE_VERCEL_REQUEST_CONTEXT) {
    globalThis[VERCEL_REQUEST_CONTEXT_SYMBOL] = nextAfterContext;
  }
}
function runWithOpenNextRequestContext({ isISRRevalidation, waitUntil, requestId = Math.random().toString(36) }, fn) {
  return globalThis.__openNextAls.run({
    requestId,
    pendingPromiseRunner: new DetachedPromiseRunner(),
    isISRRevalidation,
    waitUntil,
    writtenTags: /* @__PURE__ */ new Set()
  }, async () => {
    provideNextAfterProvider();
    let result;
    try {
      result = await fn();
    } finally {
      await awaitAllDetachedPromise();
    }
    return result;
  });
}

// node_modules/@opennextjs/aws/dist/adapters/middleware.js
init_logger();

// node_modules/@opennextjs/aws/dist/core/createGenericHandler.js
init_logger();

// node_modules/@opennextjs/aws/dist/core/resolve.js
async function resolveConverter(converter2) {
  if (typeof converter2 === "function") {
    return converter2();
  }
  const m_1 = await Promise.resolve().then(() => (init_edge(), edge_exports));
  return m_1.default;
}
async function resolveWrapper(wrapper) {
  if (typeof wrapper === "function") {
    return wrapper();
  }
  const m_1 = await Promise.resolve().then(() => (init_cloudflare_edge(), cloudflare_edge_exports));
  return m_1.default;
}
async function resolveOriginResolver(originResolver) {
  if (typeof originResolver === "function") {
    return originResolver();
  }
  const m_1 = await Promise.resolve().then(() => (init_pattern_env(), pattern_env_exports));
  return m_1.default;
}
async function resolveAssetResolver(assetResolver) {
  if (typeof assetResolver === "function") {
    return assetResolver();
  }
  const m_1 = await Promise.resolve().then(() => (init_dummy(), dummy_exports));
  return m_1.default;
}
async function resolveProxyRequest(proxyRequest) {
  if (typeof proxyRequest === "function") {
    return proxyRequest();
  }
  const m_1 = await Promise.resolve().then(() => (init_fetch(), fetch_exports));
  return m_1.default;
}

// node_modules/@opennextjs/aws/dist/core/createGenericHandler.js
async function createGenericHandler(handler3) {
  const config = await import("./open-next.config.mjs").then((m) => m.default);
  globalThis.openNextConfig = config;
  const override = config[handler3.type]?.override;
  const converter2 = await resolveConverter(override?.converter);
  const { name, wrapper } = await resolveWrapper(override?.wrapper);
  debug("Using wrapper", name);
  return wrapper(handler3.handler, converter2);
}

// node_modules/@opennextjs/aws/dist/core/routing/util.js
import crypto2 from "node:crypto";
import { Readable as Readable2 } from "node:stream";

// node_modules/@opennextjs/aws/dist/adapters/config/index.js
init_logger();
import path from "node:path";
globalThis.__dirname ??= "";
var NEXT_DIR = path.join(__dirname, ".next");
var OPEN_NEXT_DIR = path.join(__dirname, ".open-next");
debug({ NEXT_DIR, OPEN_NEXT_DIR });
var NextConfig = { "env": {}, "webpack": null, "eslint": { "ignoreDuringBuilds": false }, "typescript": { "ignoreBuildErrors": false, "tsconfigPath": "tsconfig.json" }, "distDir": ".next", "cleanDistDir": true, "assetPrefix": "", "cacheMaxMemorySize": 52428800, "configOrigin": "next.config.js", "useFileSystemPublicRoutes": true, "generateEtags": true, "pageExtensions": ["tsx", "ts", "jsx", "js"], "poweredByHeader": true, "compress": true, "analyticsId": "", "images": { "deviceSizes": [640, 750, 828, 1080, 1200, 1920, 2048, 3840], "imageSizes": [16, 32, 48, 64, 96, 128, 256, 384], "path": "/_next/image", "loader": "default", "loaderFile": "", "domains": [], "disableStaticImages": false, "minimumCacheTTL": 60, "formats": ["image/webp"], "dangerouslyAllowSVG": false, "contentSecurityPolicy": "script-src 'none'; frame-src 'none'; sandbox;", "contentDispositionType": "inline", "remotePatterns": [], "unoptimized": false }, "devIndicators": { "buildActivity": true, "buildActivityPosition": "bottom-right" }, "onDemandEntries": { "maxInactiveAge": 6e4, "pagesBufferLength": 5 }, "amp": { "canonicalBase": "" }, "basePath": "", "sassOptions": {}, "trailingSlash": false, "i18n": null, "productionBrowserSourceMaps": false, "optimizeFonts": true, "excludeDefaultMomentLocales": true, "serverRuntimeConfig": {}, "publicRuntimeConfig": {}, "reactProductionProfiling": false, "reactStrictMode": false, "httpAgentOptions": { "keepAlive": true }, "outputFileTracing": true, "staticPageGenerationTimeout": 60, "swcMinify": true, "output": "standalone", "modularizeImports": { "@mui/icons-material": { "transform": "@mui/icons-material/{{member}}" }, "lodash": { "transform": "lodash/{{member}}" } }, "experimental": { "multiZoneDraftMode": false, "prerenderEarlyExit": false, "serverMinification": true, "serverSourceMaps": false, "linkNoTouchStart": false, "caseSensitiveRoutes": false, "clientRouterFilter": true, "clientRouterFilterRedirects": false, "fetchCacheKeyPrefix": "", "middlewarePrefetch": "flexible", "optimisticClientCache": true, "manualClientBasePath": false, "cpus": 11, "memoryBasedWorkersCount": false, "isrFlushToDisk": true, "workerThreads": false, "optimizeCss": false, "nextScriptWorkers": false, "scrollRestoration": false, "externalDir": false, "disableOptimizedLoading": false, "gzipSize": true, "craCompat": false, "esmExternals": true, "fullySpecified": false, "outputFileTracingRoot": "C:\\Users\\william\\Documents\\DTR-sites\\first-attempt", "swcTraceProfiling": false, "forceSwcTransforms": false, "largePageDataBytes": 128e3, "adjustFontFallbacks": false, "adjustFontFallbacksWithSizeAdjust": false, "typedRoutes": false, "instrumentationHook": false, "bundlePagesExternals": false, "parallelServerCompiles": false, "parallelServerBuildTraces": false, "ppr": false, "missingSuspenseWithCSRBailout": true, "optimizeServerReact": true, "useEarlyImport": false, "staleTimes": { "dynamic": 30, "static": 300 }, "optimizePackageImports": ["lucide-react", "date-fns", "lodash-es", "ramda", "antd", "react-bootstrap", "ahooks", "@ant-design/icons", "@headlessui/react", "@headlessui-float/react", "@heroicons/react/20/solid", "@heroicons/react/24/solid", "@heroicons/react/24/outline", "@visx/visx", "@tremor/react", "rxjs", "@mui/material", "@mui/icons-material", "recharts", "react-use", "@material-ui/core", "@material-ui/icons", "@tabler/icons-react", "mui-core", "react-icons/ai", "react-icons/bi", "react-icons/bs", "react-icons/cg", "react-icons/ci", "react-icons/di", "react-icons/fa", "react-icons/fa6", "react-icons/fc", "react-icons/fi", "react-icons/gi", "react-icons/go", "react-icons/gr", "react-icons/hi", "react-icons/hi2", "react-icons/im", "react-icons/io", "react-icons/io5", "react-icons/lia", "react-icons/lib", "react-icons/lu", "react-icons/md", "react-icons/pi", "react-icons/ri", "react-icons/rx", "react-icons/si", "react-icons/sl", "react-icons/tb", "react-icons/tfi", "react-icons/ti", "react-icons/vsc", "react-icons/wi"], "trustHostHeader": false, "isExperimentalCompile": false }, "configFileName": "next.config.js" };
var BuildId = "UlYcBLJGp4X6hgFFR5aOq";
var RoutesManifest = { "basePath": "", "rewrites": { "beforeFiles": [], "afterFiles": [], "fallback": [] }, "redirects": [{ "source": "/:path+/", "destination": "/:path+", "internal": true, "statusCode": 308, "regex": "^(?:/((?:[^/]+?)(?:/(?:[^/]+?))*))/$" }], "routes": { "static": [{ "page": "/", "regex": "^/(?:/)?$", "routeKeys": {}, "namedRegex": "^/(?:/)?$" }, { "page": "/_not-found", "regex": "^/_not\\-found(?:/)?$", "routeKeys": {}, "namedRegex": "^/_not\\-found(?:/)?$" }, { "page": "/info", "regex": "^/info(?:/)?$", "routeKeys": {}, "namedRegex": "^/info(?:/)?$" }, { "page": "/products/test-shirt", "regex": "^/products/test\\-shirt(?:/)?$", "routeKeys": {}, "namedRegex": "^/products/test\\-shirt(?:/)?$" }, { "page": "/secret", "regex": "^/secret(?:/)?$", "routeKeys": {}, "namedRegex": "^/secret(?:/)?$" }, { "page": "/shop", "regex": "^/shop(?:/)?$", "routeKeys": {}, "namedRegex": "^/shop(?:/)?$" }], "dynamic": [], "data": { "static": [], "dynamic": [] } }, "locales": [] };
var ConfigHeaders = [];
var PrerenderManifest = { "version": 4, "routes": { "/products/test-shirt": { "experimentalBypassFor": [{ "type": "header", "key": "Next-Action" }, { "type": "header", "key": "content-type", "value": "multipart/form-data;.*" }], "initialRevalidateSeconds": false, "srcRoute": "/products/test-shirt", "dataRoute": "/products/test-shirt.rsc" }, "/secret": { "experimentalBypassFor": [{ "type": "header", "key": "Next-Action" }, { "type": "header", "key": "content-type", "value": "multipart/form-data;.*" }], "initialRevalidateSeconds": false, "srcRoute": "/secret", "dataRoute": "/secret.rsc" }, "/": { "experimentalBypassFor": [{ "type": "header", "key": "Next-Action" }, { "type": "header", "key": "content-type", "value": "multipart/form-data;.*" }], "initialRevalidateSeconds": false, "srcRoute": "/", "dataRoute": "/index.rsc" }, "/info": { "experimentalBypassFor": [{ "type": "header", "key": "Next-Action" }, { "type": "header", "key": "content-type", "value": "multipart/form-data;.*" }], "initialRevalidateSeconds": false, "srcRoute": "/info", "dataRoute": "/info.rsc" }, "/shop": { "experimentalBypassFor": [{ "type": "header", "key": "Next-Action" }, { "type": "header", "key": "content-type", "value": "multipart/form-data;.*" }], "initialRevalidateSeconds": false, "srcRoute": "/shop", "dataRoute": "/shop.rsc" } }, "dynamicRoutes": {}, "notFoundRoutes": [], "preview": { "previewModeId": "57d28e8bcc651c7c3ec839dbd82965a3", "previewModeSigningKey": "c57d86b5bd54ed069386e208e8e26507456e0266e6c4d7b0e84b6010f9dbefeb", "previewModeEncryptionKey": "1261677825458d22734d26d9c535cbe1af30af3a57718e590a39af311a282552" } };
var MiddlewareManifest = { "version": 3, "middleware": { "/": { "files": ["server/edge-runtime-webpack.js", "server/middleware.js"], "name": "middleware", "page": "/", "matchers": [{ "regexp": "^/.*$", "originalSource": "/:path*" }], "wasm": [], "assets": [], "env": { "__NEXT_BUILD_ID": "UlYcBLJGp4X6hgFFR5aOq", "NEXT_SERVER_ACTIONS_ENCRYPTION_KEY": "JRmYhGw3Nxctfw4b6IbNt37A16Ti+7Zuejz5fPjf80I=", "__NEXT_PREVIEW_MODE_ID": "57d28e8bcc651c7c3ec839dbd82965a3", "__NEXT_PREVIEW_MODE_ENCRYPTION_KEY": "1261677825458d22734d26d9c535cbe1af30af3a57718e590a39af311a282552", "__NEXT_PREVIEW_MODE_SIGNING_KEY": "c57d86b5bd54ed069386e208e8e26507456e0266e6c4d7b0e84b6010f9dbefeb" } } }, "functions": {}, "sortedMiddleware": ["/"] };
var AppPathRoutesManifest = { "/_not-found/page": "/_not-found", "/api/guest-info/route": "/api/guest-info", "/api/register-guest/route": "/api/register-guest", "/info/page": "/info", "/page": "/", "/products/test-shirt/page": "/products/test-shirt", "/secret/page": "/secret", "/shop/page": "/shop" };
var FunctionsConfigManifest = { "version": 1, "functions": {} };
var PagesManifest = { "/_app": "pages/_app.js", "/_error": "pages/_error.js", "/_document": "pages/_document.js", "/404": "pages/404.html" };
process.env.NEXT_BUILD_ID = BuildId;

// node_modules/@opennextjs/aws/dist/http/openNextResponse.js
init_logger();
init_util();
import { Transform } from "node:stream";

// node_modules/@opennextjs/aws/dist/core/routing/util.js
init_util();
init_logger();

// node_modules/@opennextjs/aws/dist/core/routing/i18n/index.js
init_stream();
init_logger();

// node_modules/@opennextjs/aws/dist/core/routing/i18n/accept-header.js
function parse(raw, preferences, options) {
  const lowers = /* @__PURE__ */ new Map();
  const header = raw.replace(/[ \t]/g, "");
  if (preferences) {
    let pos = 0;
    for (const preference of preferences) {
      const lower = preference.toLowerCase();
      lowers.set(lower, { orig: preference, pos: pos++ });
      if (options.prefixMatch) {
        const parts2 = lower.split("-");
        while (parts2.pop(), parts2.length > 0) {
          const joined = parts2.join("-");
          if (!lowers.has(joined)) {
            lowers.set(joined, { orig: preference, pos: pos++ });
          }
        }
      }
    }
  }
  const parts = header.split(",");
  const selections = [];
  const map = /* @__PURE__ */ new Set();
  for (let i = 0; i < parts.length; ++i) {
    const part = parts[i];
    if (!part) {
      continue;
    }
    const params = part.split(";");
    if (params.length > 2) {
      throw new Error(`Invalid ${options.type} header`);
    }
    const token = params[0].toLowerCase();
    if (!token) {
      throw new Error(`Invalid ${options.type} header`);
    }
    const selection = { token, pos: i, q: 1 };
    if (preferences && lowers.has(token)) {
      selection.pref = lowers.get(token).pos;
    }
    map.add(selection.token);
    if (params.length === 2) {
      const q = params[1];
      const [key, value] = q.split("=");
      if (!value || key !== "q" && key !== "Q") {
        throw new Error(`Invalid ${options.type} header`);
      }
      const score = Number.parseFloat(value);
      if (score === 0) {
        continue;
      }
      if (Number.isFinite(score) && score <= 1 && score >= 1e-3) {
        selection.q = score;
      }
    }
    selections.push(selection);
  }
  selections.sort((a, b) => {
    if (b.q !== a.q) {
      return b.q - a.q;
    }
    if (b.pref !== a.pref) {
      if (a.pref === void 0) {
        return 1;
      }
      if (b.pref === void 0) {
        return -1;
      }
      return a.pref - b.pref;
    }
    return a.pos - b.pos;
  });
  const values = selections.map((selection) => selection.token);
  if (!preferences || !preferences.length) {
    return values;
  }
  const preferred = [];
  for (const selection of values) {
    if (selection === "*") {
      for (const [preference, value] of lowers) {
        if (!map.has(preference)) {
          preferred.push(value.orig);
        }
      }
    } else {
      const lower = selection.toLowerCase();
      if (lowers.has(lower)) {
        preferred.push(lowers.get(lower).orig);
      }
    }
  }
  return preferred;
}
function acceptLanguage(header = "", preferences) {
  return parse(header, preferences, {
    type: "accept-language",
    prefixMatch: true
  })[0] || void 0;
}

// node_modules/@opennextjs/aws/dist/core/routing/i18n/index.js
function isLocalizedPath(path3) {
  return NextConfig.i18n?.locales.includes(path3.split("/")[1].toLowerCase()) ?? false;
}
function getLocaleFromCookie(cookies) {
  const i18n = NextConfig.i18n;
  const nextLocale = cookies.NEXT_LOCALE?.toLowerCase();
  return nextLocale ? i18n?.locales.find((locale) => nextLocale === locale.toLowerCase()) : void 0;
}
function detectDomainLocale({ hostname, detectedLocale }) {
  const i18n = NextConfig.i18n;
  const domains = i18n?.domains;
  if (!domains) {
    return;
  }
  const lowercasedLocale = detectedLocale?.toLowerCase();
  for (const domain of domains) {
    const domainHostname = domain.domain.split(":", 1)[0].toLowerCase();
    if (hostname === domainHostname || lowercasedLocale === domain.defaultLocale.toLowerCase() || domain.locales?.some((locale) => lowercasedLocale === locale.toLowerCase())) {
      return domain;
    }
  }
}
function detectLocale(internalEvent, i18n) {
  const domainLocale = detectDomainLocale({
    hostname: internalEvent.headers.host
  });
  if (i18n.localeDetection === false) {
    return domainLocale?.defaultLocale ?? i18n.defaultLocale;
  }
  const cookiesLocale = getLocaleFromCookie(internalEvent.cookies);
  const preferredLocale = acceptLanguage(internalEvent.headers["accept-language"], i18n?.locales);
  debug({
    cookiesLocale,
    preferredLocale,
    defaultLocale: i18n.defaultLocale,
    domainLocale
  });
  return domainLocale?.defaultLocale ?? cookiesLocale ?? preferredLocale ?? i18n.defaultLocale;
}
function localizePath(internalEvent) {
  const i18n = NextConfig.i18n;
  if (!i18n) {
    return internalEvent.rawPath;
  }
  if (isLocalizedPath(internalEvent.rawPath)) {
    return internalEvent.rawPath;
  }
  const detectedLocale = detectLocale(internalEvent, i18n);
  return `/${detectedLocale}${internalEvent.rawPath}`;
}
function handleLocaleRedirect(internalEvent) {
  const i18n = NextConfig.i18n;
  if (!i18n || i18n.localeDetection === false || internalEvent.rawPath !== "/") {
    return false;
  }
  const preferredLocale = acceptLanguage(internalEvent.headers["accept-language"], i18n?.locales);
  const detectedLocale = detectLocale(internalEvent, i18n);
  const domainLocale = detectDomainLocale({
    hostname: internalEvent.headers.host
  });
  const preferredDomain = detectDomainLocale({
    detectedLocale: preferredLocale
  });
  if (domainLocale && preferredDomain) {
    const isPDomain = preferredDomain.domain === domainLocale.domain;
    const isPLocale = preferredDomain.defaultLocale === preferredLocale;
    if (!isPDomain || !isPLocale) {
      const scheme = `http${preferredDomain.http ? "" : "s"}`;
      const rlocale = isPLocale ? "" : preferredLocale;
      return {
        type: "core",
        statusCode: 307,
        headers: {
          Location: `${scheme}://${preferredDomain.domain}/${rlocale}`
        },
        body: emptyReadableStream(),
        isBase64Encoded: false
      };
    }
  }
  const defaultLocale = domainLocale?.defaultLocale ?? i18n.defaultLocale;
  if (detectedLocale.toLowerCase() !== defaultLocale.toLowerCase()) {
    return {
      type: "core",
      statusCode: 307,
      headers: {
        Location: constructNextUrl(internalEvent.url, `/${detectedLocale}`)
      },
      body: emptyReadableStream(),
      isBase64Encoded: false
    };
  }
  return false;
}

// node_modules/@opennextjs/aws/dist/core/routing/queue.js
function generateShardId(rawPath, maxConcurrency, prefix) {
  let a = cyrb128(rawPath);
  let t = a += 1831565813;
  t = Math.imul(t ^ t >>> 15, t | 1);
  t ^= t + Math.imul(t ^ t >>> 7, t | 61);
  const randomFloat = ((t ^ t >>> 14) >>> 0) / 4294967296;
  const randomInt = Math.floor(randomFloat * maxConcurrency);
  return `${prefix}-${randomInt}`;
}
function generateMessageGroupId(rawPath) {
  const maxConcurrency = Number.parseInt(process.env.MAX_REVALIDATE_CONCURRENCY ?? "10");
  return generateShardId(rawPath, maxConcurrency, "revalidate");
}
function cyrb128(str) {
  let h1 = 1779033703;
  let h2 = 3144134277;
  let h3 = 1013904242;
  let h4 = 2773480762;
  for (let i = 0, k; i < str.length; i++) {
    k = str.charCodeAt(i);
    h1 = h2 ^ Math.imul(h1 ^ k, 597399067);
    h2 = h3 ^ Math.imul(h2 ^ k, 2869860233);
    h3 = h4 ^ Math.imul(h3 ^ k, 951274213);
    h4 = h1 ^ Math.imul(h4 ^ k, 2716044179);
  }
  h1 = Math.imul(h3 ^ h1 >>> 18, 597399067);
  h2 = Math.imul(h4 ^ h2 >>> 22, 2869860233);
  h3 = Math.imul(h1 ^ h3 >>> 17, 951274213);
  h4 = Math.imul(h2 ^ h4 >>> 19, 2716044179);
  h1 ^= h2 ^ h3 ^ h4, h2 ^= h1, h3 ^= h1, h4 ^= h1;
  return h1 >>> 0;
}

// node_modules/@opennextjs/aws/dist/core/routing/util.js
function isExternal(url, host) {
  if (!url)
    return false;
  const pattern = /^https?:\/\//;
  if (host) {
    return pattern.test(url) && !url.includes(host);
  }
  return pattern.test(url);
}
function convertFromQueryString(query) {
  if (query === "")
    return {};
  const queryParts = query.split("&");
  return getQueryFromIterator(queryParts.map((p) => {
    const [key, value] = p.split("=");
    return [key, value];
  }));
}
function getUrlParts(url, isExternal2) {
  if (!isExternal2) {
    const regex2 = /\/([^?]*)\??(.*)/;
    const match3 = url.match(regex2);
    return {
      hostname: "",
      pathname: match3?.[1] ? `/${match3[1]}` : url,
      protocol: "",
      queryString: match3?.[2] ?? ""
    };
  }
  const regex = /^(https?:)\/\/?([^\/\s]+)(\/[^?]*)?(\?.*)?/;
  const match2 = url.match(regex);
  if (!match2) {
    throw new Error(`Invalid external URL: ${url}`);
  }
  return {
    protocol: match2[1] ?? "https:",
    hostname: match2[2],
    pathname: match2[3] ?? "",
    queryString: match2[4]?.slice(1) ?? ""
  };
}
function constructNextUrl(baseUrl, path3) {
  const nextBasePath = NextConfig.basePath ?? "";
  const url = new URL(`${nextBasePath}${path3}`, baseUrl);
  return url.href;
}
function convertToQueryString(query) {
  const queryStrings = [];
  Object.entries(query).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach((entry) => queryStrings.push(`${key}=${entry}`));
    } else {
      queryStrings.push(`${key}=${value}`);
    }
  });
  return queryStrings.length > 0 ? `?${queryStrings.join("&")}` : "";
}
function getMiddlewareMatch(middlewareManifest2, functionsManifest) {
  if (functionsManifest?.functions?.["/_middleware"]) {
    return functionsManifest.functions["/_middleware"].matchers?.map(({ regexp }) => new RegExp(regexp)) ?? [/.*/];
  }
  const rootMiddleware = middlewareManifest2.middleware["/"];
  if (!rootMiddleware?.matchers)
    return [];
  return rootMiddleware.matchers.map(({ regexp }) => new RegExp(regexp));
}
function escapeRegex(str, { isPath } = {}) {
  const result = str.replaceAll("(.)", "_\xB51_").replaceAll("(..)", "_\xB52_").replaceAll("(...)", "_\xB53_");
  return isPath ? result : result.replaceAll("+", "_\xB54_");
}
function unescapeRegex(str) {
  return str.replaceAll("_\xB51_", "(.)").replaceAll("_\xB52_", "(..)").replaceAll("_\xB53_", "(...)").replaceAll("_\xB54_", "+");
}
function convertBodyToReadableStream(method, body) {
  if (method === "GET" || method === "HEAD")
    return void 0;
  if (!body)
    return void 0;
  const readable = new ReadableStream({
    start(controller) {
      controller.enqueue(body);
      controller.close();
    }
  });
  return readable;
}
var CommonHeaders;
(function(CommonHeaders2) {
  CommonHeaders2["CACHE_CONTROL"] = "cache-control";
  CommonHeaders2["NEXT_CACHE"] = "x-nextjs-cache";
})(CommonHeaders || (CommonHeaders = {}));

// node_modules/@opennextjs/aws/dist/core/routingHandler.js
init_logger();

// node_modules/@opennextjs/aws/dist/core/routing/cacheInterceptor.js
import { createHash } from "node:crypto";
init_stream();

// node_modules/@opennextjs/aws/dist/utils/cache.js
init_logger();
async function hasBeenRevalidated(key, tags, cacheEntry) {
  if (globalThis.openNextConfig.dangerous?.disableTagCache) {
    return false;
  }
  const value = cacheEntry.value;
  if (!value) {
    return true;
  }
  if ("type" in cacheEntry && cacheEntry.type === "page") {
    return false;
  }
  const lastModified = cacheEntry.lastModified ?? Date.now();
  if (globalThis.tagCache.mode === "nextMode") {
    return await globalThis.tagCache.hasBeenRevalidated(tags, lastModified);
  }
  const _lastModified = await globalThis.tagCache.getLastModified(key, lastModified);
  return _lastModified === -1;
}
function getTagsFromValue(value) {
  if (!value) {
    return [];
  }
  try {
    return value.meta?.headers?.["x-next-cache-tags"]?.split(",") ?? [];
  } catch (e) {
    return [];
  }
}

// node_modules/@opennextjs/aws/dist/core/routing/cacheInterceptor.js
init_logger();
var CACHE_ONE_YEAR = 60 * 60 * 24 * 365;
var CACHE_ONE_MONTH = 60 * 60 * 24 * 30;
var VARY_HEADER = "RSC, Next-Router-State-Tree, Next-Router-Prefetch, Next-Router-Segment-Prefetch, Next-Url";
async function computeCacheControl(path3, body, host, revalidate, lastModified) {
  let finalRevalidate = CACHE_ONE_YEAR;
  const existingRoute = Object.entries(PrerenderManifest.routes).find((p) => p[0] === path3)?.[1];
  if (revalidate === void 0 && existingRoute) {
    finalRevalidate = existingRoute.initialRevalidateSeconds === false ? CACHE_ONE_YEAR : existingRoute.initialRevalidateSeconds;
  } else if (revalidate !== void 0) {
    finalRevalidate = revalidate === false ? CACHE_ONE_YEAR : revalidate;
  }
  const age = Math.round((Date.now() - (lastModified ?? 0)) / 1e3);
  const hash = (str) => createHash("md5").update(str).digest("hex");
  const etag = hash(body);
  if (revalidate === 0) {
    return {
      "cache-control": "private, no-cache, no-store, max-age=0, must-revalidate",
      "x-opennext-cache": "ERROR",
      etag
    };
  }
  if (finalRevalidate !== CACHE_ONE_YEAR) {
    const sMaxAge = Math.max(finalRevalidate - age, 1);
    debug("sMaxAge", {
      finalRevalidate,
      age,
      lastModified,
      revalidate
    });
    const isStale = sMaxAge === 1;
    if (isStale) {
      let url = NextConfig.trailingSlash ? `${path3}/` : path3;
      if (NextConfig.basePath) {
        url = `${NextConfig.basePath}${url}`;
      }
      await globalThis.queue.send({
        MessageBody: {
          host,
          url,
          eTag: etag,
          lastModified: lastModified ?? Date.now()
        },
        MessageDeduplicationId: hash(`${path3}-${lastModified}-${etag}`),
        MessageGroupId: generateMessageGroupId(path3)
      });
    }
    return {
      "cache-control": `s-maxage=${sMaxAge}, stale-while-revalidate=${CACHE_ONE_MONTH}`,
      "x-opennext-cache": isStale ? "STALE" : "HIT",
      etag
    };
  }
  return {
    "cache-control": `s-maxage=${CACHE_ONE_YEAR}, stale-while-revalidate=${CACHE_ONE_MONTH}`,
    "x-opennext-cache": "HIT",
    etag
  };
}
async function generateResult(event, localizedPath, cachedValue, lastModified) {
  debug("Returning result from experimental cache");
  let body = "";
  let type = "application/octet-stream";
  let isDataRequest = false;
  switch (cachedValue.type) {
    case "app":
      isDataRequest = Boolean(event.headers.rsc);
      body = isDataRequest ? cachedValue.rsc : cachedValue.html;
      type = isDataRequest ? "text/x-component" : "text/html; charset=utf-8";
      break;
    case "page":
      isDataRequest = Boolean(event.query.__nextDataReq);
      body = isDataRequest ? JSON.stringify(cachedValue.json) : cachedValue.html;
      type = isDataRequest ? "application/json" : "text/html; charset=utf-8";
      break;
  }
  const cacheControl = await computeCacheControl(localizedPath, body, event.headers.host, cachedValue.revalidate, lastModified);
  return {
    type: "core",
    // sometimes other status codes can be cached, like 404. For these cases, we should return the correct status code
    statusCode: cachedValue.meta?.status ?? 200,
    body: toReadableStream(body, false),
    isBase64Encoded: false,
    headers: {
      ...cacheControl,
      "content-type": type,
      ...cachedValue.meta?.headers,
      vary: VARY_HEADER
    }
  };
}
function escapePathDelimiters(segment, escapeEncoded) {
  return segment.replace(new RegExp(`([/#?]${escapeEncoded ? "|%(2f|23|3f|5c)" : ""})`, "gi"), (char) => encodeURIComponent(char));
}
function decodePathParams(pathname) {
  return pathname.split("/").map((segment) => {
    try {
      return escapePathDelimiters(decodeURIComponent(segment), true);
    } catch (e) {
      return segment;
    }
  }).join("/");
}
async function cacheInterceptor(event) {
  if (Boolean(event.headers["next-action"]) || Boolean(event.headers["x-prerender-revalidate"]))
    return event;
  let localizedPath = localizePath(event);
  if (NextConfig.basePath) {
    localizedPath = localizedPath.replace(NextConfig.basePath, "");
  }
  localizedPath = localizedPath.replace(/\/$/, "");
  localizedPath = decodePathParams(localizedPath);
  debug("Checking cache for", localizedPath, PrerenderManifest);
  const isISR = Object.keys(PrerenderManifest.routes).includes(localizedPath ?? "/") || Object.values(PrerenderManifest.dynamicRoutes).some((dr) => new RegExp(dr.routeRegex).test(localizedPath));
  debug("isISR", isISR);
  if (isISR) {
    try {
      const cachedData = await globalThis.incrementalCache.get(localizedPath ?? "/index");
      debug("cached data in interceptor", cachedData);
      if (!cachedData?.value) {
        return event;
      }
      if (cachedData.value?.type === "app") {
        const tags = getTagsFromValue(cachedData.value);
        const _hasBeenRevalidated = await hasBeenRevalidated(localizedPath, tags, cachedData);
        if (_hasBeenRevalidated) {
          return event;
        }
      }
      const host = event.headers.host;
      switch (cachedData?.value?.type) {
        case "app":
        case "page":
          return generateResult(event, localizedPath, cachedData.value, cachedData.lastModified);
        case "redirect": {
          const cacheControl = await computeCacheControl(localizedPath, "", host, cachedData.value.revalidate, cachedData.lastModified);
          return {
            type: "core",
            statusCode: cachedData.value.meta?.status ?? 307,
            body: emptyReadableStream(),
            headers: {
              ...cachedData.value.meta?.headers ?? {},
              ...cacheControl
            },
            isBase64Encoded: false
          };
        }
        default:
          return event;
      }
    } catch (e) {
      debug("Error while fetching cache", e);
      return event;
    }
  }
  return event;
}

// node_modules/path-to-regexp/dist.es2015/index.js
function lexer(str) {
  var tokens = [];
  var i = 0;
  while (i < str.length) {
    var char = str[i];
    if (char === "*" || char === "+" || char === "?") {
      tokens.push({ type: "MODIFIER", index: i, value: str[i++] });
      continue;
    }
    if (char === "\\") {
      tokens.push({ type: "ESCAPED_CHAR", index: i++, value: str[i++] });
      continue;
    }
    if (char === "{") {
      tokens.push({ type: "OPEN", index: i, value: str[i++] });
      continue;
    }
    if (char === "}") {
      tokens.push({ type: "CLOSE", index: i, value: str[i++] });
      continue;
    }
    if (char === ":") {
      var name = "";
      var j = i + 1;
      while (j < str.length) {
        var code = str.charCodeAt(j);
        if (
          // `0-9`
          code >= 48 && code <= 57 || // `A-Z`
          code >= 65 && code <= 90 || // `a-z`
          code >= 97 && code <= 122 || // `_`
          code === 95
        ) {
          name += str[j++];
          continue;
        }
        break;
      }
      if (!name)
        throw new TypeError("Missing parameter name at ".concat(i));
      tokens.push({ type: "NAME", index: i, value: name });
      i = j;
      continue;
    }
    if (char === "(") {
      var count = 1;
      var pattern = "";
      var j = i + 1;
      if (str[j] === "?") {
        throw new TypeError('Pattern cannot start with "?" at '.concat(j));
      }
      while (j < str.length) {
        if (str[j] === "\\") {
          pattern += str[j++] + str[j++];
          continue;
        }
        if (str[j] === ")") {
          count--;
          if (count === 0) {
            j++;
            break;
          }
        } else if (str[j] === "(") {
          count++;
          if (str[j + 1] !== "?") {
            throw new TypeError("Capturing groups are not allowed at ".concat(j));
          }
        }
        pattern += str[j++];
      }
      if (count)
        throw new TypeError("Unbalanced pattern at ".concat(i));
      if (!pattern)
        throw new TypeError("Missing pattern at ".concat(i));
      tokens.push({ type: "PATTERN", index: i, value: pattern });
      i = j;
      continue;
    }
    tokens.push({ type: "CHAR", index: i, value: str[i++] });
  }
  tokens.push({ type: "END", index: i, value: "" });
  return tokens;
}
function parse2(str, options) {
  if (options === void 0) {
    options = {};
  }
  var tokens = lexer(str);
  var _a = options.prefixes, prefixes = _a === void 0 ? "./" : _a, _b = options.delimiter, delimiter = _b === void 0 ? "/#?" : _b;
  var result = [];
  var key = 0;
  var i = 0;
  var path3 = "";
  var tryConsume = function(type) {
    if (i < tokens.length && tokens[i].type === type)
      return tokens[i++].value;
  };
  var mustConsume = function(type) {
    var value2 = tryConsume(type);
    if (value2 !== void 0)
      return value2;
    var _a2 = tokens[i], nextType = _a2.type, index = _a2.index;
    throw new TypeError("Unexpected ".concat(nextType, " at ").concat(index, ", expected ").concat(type));
  };
  var consumeText = function() {
    var result2 = "";
    var value2;
    while (value2 = tryConsume("CHAR") || tryConsume("ESCAPED_CHAR")) {
      result2 += value2;
    }
    return result2;
  };
  var isSafe = function(value2) {
    for (var _i = 0, delimiter_1 = delimiter; _i < delimiter_1.length; _i++) {
      var char2 = delimiter_1[_i];
      if (value2.indexOf(char2) > -1)
        return true;
    }
    return false;
  };
  var safePattern = function(prefix2) {
    var prev = result[result.length - 1];
    var prevText = prefix2 || (prev && typeof prev === "string" ? prev : "");
    if (prev && !prevText) {
      throw new TypeError('Must have text between two parameters, missing text after "'.concat(prev.name, '"'));
    }
    if (!prevText || isSafe(prevText))
      return "[^".concat(escapeString(delimiter), "]+?");
    return "(?:(?!".concat(escapeString(prevText), ")[^").concat(escapeString(delimiter), "])+?");
  };
  while (i < tokens.length) {
    var char = tryConsume("CHAR");
    var name = tryConsume("NAME");
    var pattern = tryConsume("PATTERN");
    if (name || pattern) {
      var prefix = char || "";
      if (prefixes.indexOf(prefix) === -1) {
        path3 += prefix;
        prefix = "";
      }
      if (path3) {
        result.push(path3);
        path3 = "";
      }
      result.push({
        name: name || key++,
        prefix,
        suffix: "",
        pattern: pattern || safePattern(prefix),
        modifier: tryConsume("MODIFIER") || ""
      });
      continue;
    }
    var value = char || tryConsume("ESCAPED_CHAR");
    if (value) {
      path3 += value;
      continue;
    }
    if (path3) {
      result.push(path3);
      path3 = "";
    }
    var open = tryConsume("OPEN");
    if (open) {
      var prefix = consumeText();
      var name_1 = tryConsume("NAME") || "";
      var pattern_1 = tryConsume("PATTERN") || "";
      var suffix = consumeText();
      mustConsume("CLOSE");
      result.push({
        name: name_1 || (pattern_1 ? key++ : ""),
        pattern: name_1 && !pattern_1 ? safePattern(prefix) : pattern_1,
        prefix,
        suffix,
        modifier: tryConsume("MODIFIER") || ""
      });
      continue;
    }
    mustConsume("END");
  }
  return result;
}
function compile(str, options) {
  return tokensToFunction(parse2(str, options), options);
}
function tokensToFunction(tokens, options) {
  if (options === void 0) {
    options = {};
  }
  var reFlags = flags(options);
  var _a = options.encode, encode = _a === void 0 ? function(x) {
    return x;
  } : _a, _b = options.validate, validate = _b === void 0 ? true : _b;
  var matches = tokens.map(function(token) {
    if (typeof token === "object") {
      return new RegExp("^(?:".concat(token.pattern, ")$"), reFlags);
    }
  });
  return function(data) {
    var path3 = "";
    for (var i = 0; i < tokens.length; i++) {
      var token = tokens[i];
      if (typeof token === "string") {
        path3 += token;
        continue;
      }
      var value = data ? data[token.name] : void 0;
      var optional = token.modifier === "?" || token.modifier === "*";
      var repeat = token.modifier === "*" || token.modifier === "+";
      if (Array.isArray(value)) {
        if (!repeat) {
          throw new TypeError('Expected "'.concat(token.name, '" to not repeat, but got an array'));
        }
        if (value.length === 0) {
          if (optional)
            continue;
          throw new TypeError('Expected "'.concat(token.name, '" to not be empty'));
        }
        for (var j = 0; j < value.length; j++) {
          var segment = encode(value[j], token);
          if (validate && !matches[i].test(segment)) {
            throw new TypeError('Expected all "'.concat(token.name, '" to match "').concat(token.pattern, '", but got "').concat(segment, '"'));
          }
          path3 += token.prefix + segment + token.suffix;
        }
        continue;
      }
      if (typeof value === "string" || typeof value === "number") {
        var segment = encode(String(value), token);
        if (validate && !matches[i].test(segment)) {
          throw new TypeError('Expected "'.concat(token.name, '" to match "').concat(token.pattern, '", but got "').concat(segment, '"'));
        }
        path3 += token.prefix + segment + token.suffix;
        continue;
      }
      if (optional)
        continue;
      var typeOfMessage = repeat ? "an array" : "a string";
      throw new TypeError('Expected "'.concat(token.name, '" to be ').concat(typeOfMessage));
    }
    return path3;
  };
}
function match(str, options) {
  var keys = [];
  var re = pathToRegexp(str, keys, options);
  return regexpToFunction(re, keys, options);
}
function regexpToFunction(re, keys, options) {
  if (options === void 0) {
    options = {};
  }
  var _a = options.decode, decode = _a === void 0 ? function(x) {
    return x;
  } : _a;
  return function(pathname) {
    var m = re.exec(pathname);
    if (!m)
      return false;
    var path3 = m[0], index = m.index;
    var params = /* @__PURE__ */ Object.create(null);
    var _loop_1 = function(i2) {
      if (m[i2] === void 0)
        return "continue";
      var key = keys[i2 - 1];
      if (key.modifier === "*" || key.modifier === "+") {
        params[key.name] = m[i2].split(key.prefix + key.suffix).map(function(value) {
          return decode(value, key);
        });
      } else {
        params[key.name] = decode(m[i2], key);
      }
    };
    for (var i = 1; i < m.length; i++) {
      _loop_1(i);
    }
    return { path: path3, index, params };
  };
}
function escapeString(str) {
  return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
}
function flags(options) {
  return options && options.sensitive ? "" : "i";
}
function regexpToRegexp(path3, keys) {
  if (!keys)
    return path3;
  var groupsRegex = /\((?:\?<(.*?)>)?(?!\?)/g;
  var index = 0;
  var execResult = groupsRegex.exec(path3.source);
  while (execResult) {
    keys.push({
      // Use parenthesized substring match if available, index otherwise
      name: execResult[1] || index++,
      prefix: "",
      suffix: "",
      modifier: "",
      pattern: ""
    });
    execResult = groupsRegex.exec(path3.source);
  }
  return path3;
}
function arrayToRegexp(paths, keys, options) {
  var parts = paths.map(function(path3) {
    return pathToRegexp(path3, keys, options).source;
  });
  return new RegExp("(?:".concat(parts.join("|"), ")"), flags(options));
}
function stringToRegexp(path3, keys, options) {
  return tokensToRegexp(parse2(path3, options), keys, options);
}
function tokensToRegexp(tokens, keys, options) {
  if (options === void 0) {
    options = {};
  }
  var _a = options.strict, strict = _a === void 0 ? false : _a, _b = options.start, start = _b === void 0 ? true : _b, _c = options.end, end = _c === void 0 ? true : _c, _d = options.encode, encode = _d === void 0 ? function(x) {
    return x;
  } : _d, _e = options.delimiter, delimiter = _e === void 0 ? "/#?" : _e, _f = options.endsWith, endsWith = _f === void 0 ? "" : _f;
  var endsWithRe = "[".concat(escapeString(endsWith), "]|$");
  var delimiterRe = "[".concat(escapeString(delimiter), "]");
  var route = start ? "^" : "";
  for (var _i = 0, tokens_1 = tokens; _i < tokens_1.length; _i++) {
    var token = tokens_1[_i];
    if (typeof token === "string") {
      route += escapeString(encode(token));
    } else {
      var prefix = escapeString(encode(token.prefix));
      var suffix = escapeString(encode(token.suffix));
      if (token.pattern) {
        if (keys)
          keys.push(token);
        if (prefix || suffix) {
          if (token.modifier === "+" || token.modifier === "*") {
            var mod = token.modifier === "*" ? "?" : "";
            route += "(?:".concat(prefix, "((?:").concat(token.pattern, ")(?:").concat(suffix).concat(prefix, "(?:").concat(token.pattern, "))*)").concat(suffix, ")").concat(mod);
          } else {
            route += "(?:".concat(prefix, "(").concat(token.pattern, ")").concat(suffix, ")").concat(token.modifier);
          }
        } else {
          if (token.modifier === "+" || token.modifier === "*") {
            throw new TypeError('Can not repeat "'.concat(token.name, '" without a prefix and suffix'));
          }
          route += "(".concat(token.pattern, ")").concat(token.modifier);
        }
      } else {
        route += "(?:".concat(prefix).concat(suffix, ")").concat(token.modifier);
      }
    }
  }
  if (end) {
    if (!strict)
      route += "".concat(delimiterRe, "?");
    route += !options.endsWith ? "$" : "(?=".concat(endsWithRe, ")");
  } else {
    var endToken = tokens[tokens.length - 1];
    var isEndDelimited = typeof endToken === "string" ? delimiterRe.indexOf(endToken[endToken.length - 1]) > -1 : endToken === void 0;
    if (!strict) {
      route += "(?:".concat(delimiterRe, "(?=").concat(endsWithRe, "))?");
    }
    if (!isEndDelimited) {
      route += "(?=".concat(delimiterRe, "|").concat(endsWithRe, ")");
    }
  }
  return new RegExp(route, flags(options));
}
function pathToRegexp(path3, keys, options) {
  if (path3 instanceof RegExp)
    return regexpToRegexp(path3, keys);
  if (Array.isArray(path3))
    return arrayToRegexp(path3, keys, options);
  return stringToRegexp(path3, keys, options);
}

// node_modules/@opennextjs/aws/dist/utils/normalize-path.js
import path2 from "node:path";
function normalizeRepeatedSlashes(url) {
  const urlNoQuery = url.host + url.pathname;
  return `${url.protocol}//${urlNoQuery.replace(/\\/g, "/").replace(/\/\/+/g, "/")}${url.search}`;
}

// node_modules/@opennextjs/aws/dist/core/routing/matcher.js
init_stream();
init_logger();

// node_modules/@opennextjs/aws/dist/core/routing/routeMatcher.js
var optionalLocalePrefixRegex = `^/(?:${RoutesManifest.locales.map((locale) => `${locale}/?`).join("|")})?`;
var optionalBasepathPrefixRegex = RoutesManifest.basePath ? `^${RoutesManifest.basePath}/?` : "^/";
var optionalPrefix = optionalLocalePrefixRegex.replace("^/", optionalBasepathPrefixRegex);
function routeMatcher(routeDefinitions) {
  const regexp = routeDefinitions.map((route) => ({
    page: route.page,
    regexp: new RegExp(route.regex.replace("^/", optionalPrefix))
  }));
  const appPathsSet = /* @__PURE__ */ new Set();
  const routePathsSet = /* @__PURE__ */ new Set();
  for (const [k, v] of Object.entries(AppPathRoutesManifest)) {
    if (k.endsWith("page")) {
      appPathsSet.add(v);
    } else if (k.endsWith("route")) {
      routePathsSet.add(v);
    }
  }
  return function matchRoute(path3) {
    const foundRoutes = regexp.filter((route) => route.regexp.test(path3));
    return foundRoutes.map((foundRoute) => {
      let routeType = "page";
      if (appPathsSet.has(foundRoute.page)) {
        routeType = "app";
      } else if (routePathsSet.has(foundRoute.page)) {
        routeType = "route";
      }
      return {
        route: foundRoute.page,
        type: routeType
      };
    });
  };
}
var staticRouteMatcher = routeMatcher([
  ...RoutesManifest.routes.static,
  ...getStaticAPIRoutes()
]);
var dynamicRouteMatcher = routeMatcher(RoutesManifest.routes.dynamic);
function getStaticAPIRoutes() {
  const createRouteDefinition = (route) => ({
    page: route,
    regex: `^${route}(?:/)?$`
  });
  const dynamicRoutePages = new Set(RoutesManifest.routes.dynamic.map(({ page }) => page));
  const pagesStaticAPIRoutes = Object.keys(PagesManifest).filter((route) => route.startsWith("/api/") && !dynamicRoutePages.has(route)).map(createRouteDefinition);
  const appPathsStaticAPIRoutes = Object.values(AppPathRoutesManifest).filter((route) => route.startsWith("/api/") || route === "/api" && !dynamicRoutePages.has(route)).map(createRouteDefinition);
  return [...pagesStaticAPIRoutes, ...appPathsStaticAPIRoutes];
}

// node_modules/@opennextjs/aws/dist/core/routing/matcher.js
var routeHasMatcher = (headers, cookies, query) => (redirect) => {
  switch (redirect.type) {
    case "header":
      return !!headers?.[redirect.key.toLowerCase()] && new RegExp(redirect.value ?? "").test(headers[redirect.key.toLowerCase()] ?? "");
    case "cookie":
      return !!cookies?.[redirect.key] && new RegExp(redirect.value ?? "").test(cookies[redirect.key] ?? "");
    case "query":
      return query[redirect.key] && Array.isArray(redirect.value) ? redirect.value.reduce((prev, current) => prev || new RegExp(current).test(query[redirect.key]), false) : new RegExp(redirect.value ?? "").test(query[redirect.key] ?? "");
    case "host":
      return headers?.host !== "" && new RegExp(redirect.value ?? "").test(headers.host);
    default:
      return false;
  }
};
function checkHas(matcher, has, inverted = false) {
  return has ? has.reduce((acc, cur) => {
    if (acc === false)
      return false;
    return inverted ? !matcher(cur) : matcher(cur);
  }, true) : true;
}
var getParamsFromSource = (source) => (value) => {
  debug("value", value);
  const _match = source(value);
  return _match ? _match.params : {};
};
var computeParamHas = (headers, cookies, query) => (has) => {
  if (!has.value)
    return {};
  const matcher = new RegExp(`^${has.value}$`);
  const fromSource = (value) => {
    const matches = value.match(matcher);
    return matches?.groups ?? {};
  };
  switch (has.type) {
    case "header":
      return fromSource(headers[has.key.toLowerCase()] ?? "");
    case "cookie":
      return fromSource(cookies[has.key] ?? "");
    case "query":
      return Array.isArray(query[has.key]) ? fromSource(query[has.key].join(",")) : fromSource(query[has.key] ?? "");
    case "host":
      return fromSource(headers.host ?? "");
  }
};
function convertMatch(match2, toDestination, destination) {
  if (!match2) {
    return destination;
  }
  const { params } = match2;
  const isUsingParams = Object.keys(params).length > 0;
  return isUsingParams ? toDestination(params) : destination;
}
function getNextConfigHeaders(event, configHeaders) {
  if (!configHeaders) {
    return {};
  }
  const matcher = routeHasMatcher(event.headers, event.cookies, event.query);
  const requestHeaders = {};
  const localizedRawPath = localizePath(event);
  for (const { headers, has, missing, regex, source, locale } of configHeaders) {
    const path3 = locale === false ? event.rawPath : localizedRawPath;
    if (new RegExp(regex).test(path3) && checkHas(matcher, has) && checkHas(matcher, missing, true)) {
      const fromSource = match(source);
      const _match = fromSource(path3);
      headers.forEach((h) => {
        try {
          const key = convertMatch(_match, compile(h.key), h.key);
          const value = convertMatch(_match, compile(h.value), h.value);
          requestHeaders[key] = value;
        } catch {
          debug(`Error matching header ${h.key} with value ${h.value}`);
          requestHeaders[h.key] = h.value;
        }
      });
    }
  }
  return requestHeaders;
}
function handleRewrites(event, rewrites) {
  const { rawPath, headers, query, cookies, url } = event;
  const localizedRawPath = localizePath(event);
  const matcher = routeHasMatcher(headers, cookies, query);
  const computeHas = computeParamHas(headers, cookies, query);
  const rewrite = rewrites.find((route) => {
    const path3 = route.locale === false ? rawPath : localizedRawPath;
    return new RegExp(route.regex).test(path3) && checkHas(matcher, route.has) && checkHas(matcher, route.missing, true);
  });
  let finalQuery = query;
  let rewrittenUrl = url;
  const isExternalRewrite = isExternal(rewrite?.destination);
  debug("isExternalRewrite", isExternalRewrite);
  if (rewrite) {
    const { pathname, protocol, hostname, queryString } = getUrlParts(rewrite.destination, isExternalRewrite);
    const pathToUse = rewrite.locale === false ? rawPath : localizedRawPath;
    debug("urlParts", { pathname, protocol, hostname, queryString });
    const toDestinationPath = compile(escapeRegex(pathname, { isPath: true }));
    const toDestinationHost = compile(escapeRegex(hostname));
    const toDestinationQuery = compile(escapeRegex(queryString));
    const params = {
      // params for the source
      ...getParamsFromSource(match(escapeRegex(rewrite.source, { isPath: true })))(pathToUse),
      // params for the has
      ...rewrite.has?.reduce((acc, cur) => {
        return Object.assign(acc, computeHas(cur));
      }, {}),
      // params for the missing
      ...rewrite.missing?.reduce((acc, cur) => {
        return Object.assign(acc, computeHas(cur));
      }, {})
    };
    const isUsingParams = Object.keys(params).length > 0;
    let rewrittenQuery = queryString;
    let rewrittenHost = hostname;
    let rewrittenPath = pathname;
    if (isUsingParams) {
      rewrittenPath = unescapeRegex(toDestinationPath(params));
      rewrittenHost = unescapeRegex(toDestinationHost(params));
      rewrittenQuery = unescapeRegex(toDestinationQuery(params));
    }
    if (NextConfig.i18n && !isExternalRewrite) {
      const strippedPathLocale = rewrittenPath.replace(new RegExp(`^/(${NextConfig.i18n.locales.join("|")})`), "");
      if (strippedPathLocale.startsWith("/api/")) {
        rewrittenPath = strippedPathLocale;
      }
    }
    rewrittenUrl = isExternalRewrite ? `${protocol}//${rewrittenHost}${rewrittenPath}` : new URL(rewrittenPath, event.url).href;
    finalQuery = {
      ...query,
      ...convertFromQueryString(rewrittenQuery)
    };
    rewrittenUrl += convertToQueryString(finalQuery);
    debug("rewrittenUrl", { rewrittenUrl, finalQuery, isUsingParams });
  }
  return {
    internalEvent: {
      ...event,
      query: finalQuery,
      rawPath: new URL(rewrittenUrl).pathname,
      url: rewrittenUrl
    },
    __rewrite: rewrite,
    isExternalRewrite
  };
}
function handleRepeatedSlashRedirect(event) {
  if (event.rawPath.match(/(\\|\/\/)/)) {
    return {
      type: event.type,
      statusCode: 308,
      headers: {
        Location: normalizeRepeatedSlashes(new URL(event.url))
      },
      body: emptyReadableStream(),
      isBase64Encoded: false
    };
  }
  return false;
}
function handleTrailingSlashRedirect(event) {
  const url = new URL(event.rawPath, "http://localhost");
  if (
    // Someone is trying to redirect to a different origin, let's not do that
    url.host !== "localhost" || NextConfig.skipTrailingSlashRedirect || // We should not apply trailing slash redirect to API routes
    event.rawPath.startsWith("/api/")
  ) {
    return false;
  }
  const emptyBody = emptyReadableStream();
  if (NextConfig.trailingSlash && !event.headers["x-nextjs-data"] && !event.rawPath.endsWith("/") && !event.rawPath.match(/[\w-]+\.[\w]+$/g)) {
    const headersLocation = event.url.split("?");
    return {
      type: event.type,
      statusCode: 308,
      headers: {
        Location: `${headersLocation[0]}/${headersLocation[1] ? `?${headersLocation[1]}` : ""}`
      },
      body: emptyBody,
      isBase64Encoded: false
    };
  }
  if (!NextConfig.trailingSlash && event.rawPath.endsWith("/") && event.rawPath !== "/") {
    const headersLocation = event.url.split("?");
    return {
      type: event.type,
      statusCode: 308,
      headers: {
        Location: `${headersLocation[0].replace(/\/$/, "")}${headersLocation[1] ? `?${headersLocation[1]}` : ""}`
      },
      body: emptyBody,
      isBase64Encoded: false
    };
  }
  return false;
}
function handleRedirects(event, redirects) {
  const repeatedSlashRedirect = handleRepeatedSlashRedirect(event);
  if (repeatedSlashRedirect)
    return repeatedSlashRedirect;
  const trailingSlashRedirect = handleTrailingSlashRedirect(event);
  if (trailingSlashRedirect)
    return trailingSlashRedirect;
  const localeRedirect = handleLocaleRedirect(event);
  if (localeRedirect)
    return localeRedirect;
  const { internalEvent, __rewrite } = handleRewrites(event, redirects.filter((r) => !r.internal));
  if (__rewrite && !__rewrite.internal) {
    return {
      type: event.type,
      statusCode: __rewrite.statusCode ?? 308,
      headers: {
        Location: internalEvent.url
      },
      body: emptyReadableStream(),
      isBase64Encoded: false
    };
  }
}
function fixDataPage(internalEvent, buildId) {
  const { rawPath, query } = internalEvent;
  const basePath = NextConfig.basePath ?? "";
  const dataPattern = `${basePath}/_next/data/${buildId}`;
  if (rawPath.startsWith("/_next/data") && !rawPath.startsWith(dataPattern)) {
    return {
      type: internalEvent.type,
      statusCode: 404,
      body: toReadableStream("{}"),
      headers: {
        "Content-Type": "application/json"
      },
      isBase64Encoded: false
    };
  }
  if (rawPath.startsWith(dataPattern) && rawPath.endsWith(".json")) {
    const newPath = `${basePath}${rawPath.slice(dataPattern.length, -".json".length).replace(/^\/index$/, "/")}`;
    query.__nextDataReq = "1";
    return {
      ...internalEvent,
      rawPath: newPath,
      query,
      url: new URL(`${newPath}${convertToQueryString(query)}`, internalEvent.url).href
    };
  }
  return internalEvent;
}
function handleFallbackFalse(internalEvent, prerenderManifest) {
  const { rawPath } = internalEvent;
  const { dynamicRoutes, routes } = prerenderManifest;
  const prerenderedFallbackRoutes = Object.entries(dynamicRoutes).filter(([, { fallback }]) => fallback === false);
  const routeFallback = prerenderedFallbackRoutes.some(([, { routeRegex }]) => {
    const routeRegexExp = new RegExp(routeRegex);
    return routeRegexExp.test(rawPath);
  });
  const locales = NextConfig.i18n?.locales;
  const routesAlreadyHaveLocale = locales?.includes(rawPath.split("/")[1]) || // If we don't use locales, we don't need to add the default locale
  locales === void 0;
  let localizedPath = routesAlreadyHaveLocale ? rawPath : `/${NextConfig.i18n?.defaultLocale}${rawPath}`;
  if (
    // Not if localizedPath is "/" tho, because that would not make it find `isPregenerated` below since it would be try to match an empty string.
    localizedPath !== "/" && NextConfig.trailingSlash && localizedPath.endsWith("/")
  ) {
    localizedPath = localizedPath.slice(0, -1);
  }
  const matchedStaticRoute = staticRouteMatcher(localizedPath);
  const prerenderedFallbackRoutesName = prerenderedFallbackRoutes.map(([name]) => name);
  const matchedDynamicRoute = dynamicRouteMatcher(localizedPath).filter(({ route }) => !prerenderedFallbackRoutesName.includes(route));
  const isPregenerated = Object.keys(routes).includes(localizedPath);
  if (routeFallback && !isPregenerated && matchedStaticRoute.length === 0 && matchedDynamicRoute.length === 0) {
    return {
      event: {
        ...internalEvent,
        rawPath: "/404",
        url: constructNextUrl(internalEvent.url, "/404"),
        headers: {
          ...internalEvent.headers,
          "x-invoke-status": "404"
        }
      },
      isISR: false
    };
  }
  return {
    event: internalEvent,
    isISR: routeFallback || isPregenerated
  };
}

// node_modules/@opennextjs/aws/dist/core/routing/middleware.js
init_stream();
init_utils();
var middlewareManifest = MiddlewareManifest;
var functionsConfigManifest = FunctionsConfigManifest;
var middleMatch = getMiddlewareMatch(middlewareManifest, functionsConfigManifest);
function defaultMiddlewareLoader() {
  return Promise.resolve().then(() => (init_edgeFunctionHandler(), edgeFunctionHandler_exports));
}
async function handleMiddleware(internalEvent, initialSearch, middlewareLoader = defaultMiddlewareLoader) {
  const headers = internalEvent.headers;
  if (headers["x-isr"] && headers["x-prerender-revalidate"] === PrerenderManifest.preview.previewModeId)
    return internalEvent;
  const normalizedPath = localizePath(internalEvent);
  const hasMatch = middleMatch.some((r) => r.test(normalizedPath));
  if (!hasMatch)
    return internalEvent;
  const initialUrl = new URL(normalizedPath, internalEvent.url);
  initialUrl.search = initialSearch;
  const url = initialUrl.href;
  const middleware = await middlewareLoader();
  const result = await middleware.default({
    // `geo` is pre Next 15.
    geo: {
      // The city name is percent-encoded.
      // See https://github.com/vercel/vercel/blob/4cb6143/packages/functions/src/headers.ts#L94C19-L94C37
      city: decodeURIComponent(headers["x-open-next-city"]),
      country: headers["x-open-next-country"],
      region: headers["x-open-next-region"],
      latitude: headers["x-open-next-latitude"],
      longitude: headers["x-open-next-longitude"]
    },
    headers,
    method: internalEvent.method || "GET",
    nextConfig: {
      basePath: NextConfig.basePath,
      i18n: NextConfig.i18n,
      trailingSlash: NextConfig.trailingSlash
    },
    url,
    body: convertBodyToReadableStream(internalEvent.method, internalEvent.body)
  });
  const statusCode = result.status;
  const responseHeaders = result.headers;
  const reqHeaders = {};
  const resHeaders = {};
  const filteredHeaders = [
    "x-middleware-override-headers",
    "x-middleware-next",
    "x-middleware-rewrite",
    // We need to drop `content-encoding` because it will be decoded
    "content-encoding"
  ];
  const xMiddlewareKey = "x-middleware-request-";
  responseHeaders.forEach((value, key) => {
    if (key.startsWith(xMiddlewareKey)) {
      const k = key.substring(xMiddlewareKey.length);
      reqHeaders[k] = value;
    } else {
      if (filteredHeaders.includes(key.toLowerCase()))
        return;
      if (key.toLowerCase() === "set-cookie") {
        resHeaders[key] = resHeaders[key] ? [...resHeaders[key], value] : [value];
      } else {
        resHeaders[key] = value;
      }
    }
  });
  const rewriteUrl = responseHeaders.get("x-middleware-rewrite");
  let isExternalRewrite = false;
  let middlewareQuery = internalEvent.query;
  let newUrl = internalEvent.url;
  if (rewriteUrl) {
    newUrl = rewriteUrl;
    if (isExternal(newUrl, internalEvent.headers.host)) {
      isExternalRewrite = true;
    } else {
      const rewriteUrlObject = new URL(rewriteUrl);
      middlewareQuery = getQueryFromSearchParams(rewriteUrlObject.searchParams);
      if ("__nextDataReq" in internalEvent.query) {
        middlewareQuery.__nextDataReq = internalEvent.query.__nextDataReq;
      }
    }
  }
  if (!rewriteUrl && !responseHeaders.get("x-middleware-next")) {
    const body = result.body ?? emptyReadableStream();
    return {
      type: internalEvent.type,
      statusCode,
      headers: resHeaders,
      body,
      isBase64Encoded: false
    };
  }
  return {
    responseHeaders: resHeaders,
    url: newUrl,
    rawPath: new URL(newUrl).pathname,
    type: internalEvent.type,
    headers: { ...internalEvent.headers, ...reqHeaders },
    body: internalEvent.body,
    method: internalEvent.method,
    query: middlewareQuery,
    cookies: internalEvent.cookies,
    remoteAddress: internalEvent.remoteAddress,
    isExternalRewrite
  };
}

// node_modules/@opennextjs/aws/dist/core/routingHandler.js
var MIDDLEWARE_HEADER_PREFIX = "x-middleware-response-";
var MIDDLEWARE_HEADER_PREFIX_LEN = MIDDLEWARE_HEADER_PREFIX.length;
var INTERNAL_HEADER_PREFIX = "x-opennext-";
var INTERNAL_HEADER_INITIAL_URL = `${INTERNAL_HEADER_PREFIX}initial-url`;
var INTERNAL_HEADER_LOCALE = `${INTERNAL_HEADER_PREFIX}locale`;
var INTERNAL_HEADER_RESOLVED_ROUTES = `${INTERNAL_HEADER_PREFIX}resolved-routes`;
var INTERNAL_EVENT_REQUEST_ID = `${INTERNAL_HEADER_PREFIX}request-id`;
var geoHeaderToNextHeader = {
  "x-open-next-city": "x-vercel-ip-city",
  "x-open-next-country": "x-vercel-ip-country",
  "x-open-next-region": "x-vercel-ip-country-region",
  "x-open-next-latitude": "x-vercel-ip-latitude",
  "x-open-next-longitude": "x-vercel-ip-longitude"
};
function applyMiddlewareHeaders(eventOrResult, middlewareHeaders) {
  const isResult = isInternalResult(eventOrResult);
  const headers = eventOrResult.headers;
  const keyPrefix = isResult ? "" : MIDDLEWARE_HEADER_PREFIX;
  Object.entries(middlewareHeaders).forEach(([key, value]) => {
    if (value) {
      headers[keyPrefix + key] = Array.isArray(value) ? value.join(",") : value;
    }
  });
}
async function routingHandler(event, { assetResolver }) {
  try {
    for (const [openNextGeoName, nextGeoName] of Object.entries(geoHeaderToNextHeader)) {
      const value = event.headers[openNextGeoName];
      if (value) {
        event.headers[nextGeoName] = value;
      }
    }
    for (const key of Object.keys(event.headers)) {
      if (key.startsWith(INTERNAL_HEADER_PREFIX) || key.startsWith(MIDDLEWARE_HEADER_PREFIX)) {
        delete event.headers[key];
      }
    }
    let headers = getNextConfigHeaders(event, ConfigHeaders);
    let eventOrResult = fixDataPage(event, BuildId);
    if (isInternalResult(eventOrResult)) {
      return eventOrResult;
    }
    const redirect = handleRedirects(eventOrResult, RoutesManifest.redirects);
    if (redirect) {
      redirect.headers.Location = new URL(redirect.headers.Location).href;
      debug("redirect", redirect);
      return redirect;
    }
    const middlewareEventOrResult = await handleMiddleware(
      eventOrResult,
      // We need to pass the initial search without any decoding
      // TODO: we'd need to refactor InternalEvent to include the initial querystring directly
      // Should be done in another PR because it is a breaking change
      new URL(event.url).search
    );
    if (isInternalResult(middlewareEventOrResult)) {
      return middlewareEventOrResult;
    }
    headers = {
      ...middlewareEventOrResult.responseHeaders,
      ...headers
    };
    let isExternalRewrite = middlewareEventOrResult.isExternalRewrite ?? false;
    eventOrResult = middlewareEventOrResult;
    if (!isExternalRewrite) {
      const beforeRewrite = handleRewrites(eventOrResult, RoutesManifest.rewrites.beforeFiles);
      eventOrResult = beforeRewrite.internalEvent;
      isExternalRewrite = beforeRewrite.isExternalRewrite;
      if (!isExternalRewrite) {
        const assetResult = await assetResolver?.maybeGetAssetResult?.(eventOrResult);
        if (assetResult) {
          applyMiddlewareHeaders(assetResult, headers);
          return assetResult;
        }
      }
    }
    const foundStaticRoute = staticRouteMatcher(eventOrResult.rawPath);
    const isStaticRoute = !isExternalRewrite && foundStaticRoute.length > 0;
    if (!(isStaticRoute || isExternalRewrite)) {
      const afterRewrite = handleRewrites(eventOrResult, RoutesManifest.rewrites.afterFiles);
      eventOrResult = afterRewrite.internalEvent;
      isExternalRewrite = afterRewrite.isExternalRewrite;
    }
    let isISR = false;
    if (!isExternalRewrite) {
      const fallbackResult = handleFallbackFalse(eventOrResult, PrerenderManifest);
      eventOrResult = fallbackResult.event;
      isISR = fallbackResult.isISR;
    }
    const foundDynamicRoute = dynamicRouteMatcher(eventOrResult.rawPath);
    const isDynamicRoute = !isExternalRewrite && foundDynamicRoute.length > 0;
    if (!(isDynamicRoute || isStaticRoute || isExternalRewrite)) {
      const fallbackRewrites = handleRewrites(eventOrResult, RoutesManifest.rewrites.fallback);
      eventOrResult = fallbackRewrites.internalEvent;
      isExternalRewrite = fallbackRewrites.isExternalRewrite;
    }
    const isNextImageRoute = eventOrResult.rawPath.startsWith("/_next/image");
    const isRouteFoundBeforeAllRewrites = isStaticRoute || isDynamicRoute || isExternalRewrite;
    if (!(isRouteFoundBeforeAllRewrites || isNextImageRoute || // We need to check again once all rewrites have been applied
    staticRouteMatcher(eventOrResult.rawPath).length > 0 || dynamicRouteMatcher(eventOrResult.rawPath).length > 0)) {
      eventOrResult = {
        ...eventOrResult,
        rawPath: "/404",
        url: constructNextUrl(eventOrResult.url, "/404"),
        headers: {
          ...eventOrResult.headers,
          "x-middleware-response-cache-control": "private, no-cache, no-store, max-age=0, must-revalidate"
        }
      };
    }
    if (globalThis.openNextConfig.dangerous?.enableCacheInterception && !isInternalResult(eventOrResult)) {
      debug("Cache interception enabled");
      eventOrResult = await cacheInterceptor(eventOrResult);
      if (isInternalResult(eventOrResult)) {
        applyMiddlewareHeaders(eventOrResult, headers);
        return eventOrResult;
      }
    }
    applyMiddlewareHeaders(eventOrResult, headers);
    const resolvedRoutes = [
      ...foundStaticRoute,
      ...foundDynamicRoute
    ];
    debug("resolvedRoutes", resolvedRoutes);
    return {
      internalEvent: eventOrResult,
      isExternalRewrite,
      origin: false,
      isISR,
      resolvedRoutes,
      initialURL: event.url,
      locale: NextConfig.i18n ? detectLocale(eventOrResult, NextConfig.i18n) : void 0
    };
  } catch (e) {
    error("Error in routingHandler", e);
    return {
      internalEvent: {
        type: "core",
        method: "GET",
        rawPath: "/500",
        url: constructNextUrl(event.url, "/500"),
        headers: {
          ...event.headers
        },
        query: event.query,
        cookies: event.cookies,
        remoteAddress: event.remoteAddress
      },
      isExternalRewrite: false,
      origin: false,
      isISR: false,
      resolvedRoutes: [],
      initialURL: event.url,
      locale: NextConfig.i18n ? detectLocale(event, NextConfig.i18n) : void 0
    };
  }
}
function isInternalResult(eventOrResult) {
  return eventOrResult != null && "statusCode" in eventOrResult;
}

// node_modules/@opennextjs/aws/dist/adapters/middleware.js
globalThis.internalFetch = fetch;
globalThis.__openNextAls = new AsyncLocalStorage();
var defaultHandler = async (internalEvent, options) => {
  const config = globalThis.openNextConfig.middleware;
  const originResolver = await resolveOriginResolver(config?.originResolver);
  const externalRequestProxy = await resolveProxyRequest(config?.override?.proxyExternalRequest);
  const assetResolver = await resolveAssetResolver(config?.assetResolver);
  const requestId = Math.random().toString(36);
  return runWithOpenNextRequestContext({
    isISRRevalidation: internalEvent.headers["x-isr"] === "1",
    waitUntil: options?.waitUntil,
    requestId
  }, async () => {
    const result = await routingHandler(internalEvent, { assetResolver });
    if ("internalEvent" in result) {
      debug("Middleware intercepted event", internalEvent);
      if (!result.isExternalRewrite) {
        const origin = await originResolver.resolve(result.internalEvent.rawPath);
        return {
          type: "middleware",
          internalEvent: {
            ...result.internalEvent,
            headers: {
              ...result.internalEvent.headers,
              [INTERNAL_HEADER_INITIAL_URL]: internalEvent.url,
              [INTERNAL_HEADER_RESOLVED_ROUTES]: JSON.stringify(result.resolvedRoutes),
              [INTERNAL_EVENT_REQUEST_ID]: requestId
            }
          },
          isExternalRewrite: result.isExternalRewrite,
          origin,
          isISR: result.isISR,
          initialURL: result.initialURL,
          resolvedRoutes: result.resolvedRoutes
        };
      }
      try {
        return externalRequestProxy.proxy(result.internalEvent);
      } catch (e) {
        error("External request failed.", e);
        return {
          type: "middleware",
          internalEvent: {
            ...result.internalEvent,
            headers: {
              ...result.internalEvent.headers,
              [INTERNAL_EVENT_REQUEST_ID]: requestId
            },
            rawPath: "/500",
            url: constructNextUrl(result.internalEvent.url, "/500"),
            method: "GET"
          },
          // On error we need to rewrite to the 500 page which is an internal rewrite
          isExternalRewrite: false,
          origin: false,
          isISR: result.isISR,
          initialURL: result.internalEvent.url,
          resolvedRoutes: [{ route: "/500", type: "page" }]
        };
      }
    }
    result.headers[INTERNAL_EVENT_REQUEST_ID] = requestId;
    debug("Middleware response", result);
    return result;
  });
};
var handler2 = await createGenericHandler({
  handler: defaultHandler,
  type: "middleware"
});
var middleware_default = {
  fetch: handler2
};
export {
  middleware_default as default,
  handler2 as handler
};
