"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 9468:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "B_": () => (/* binding */ useConfigs),
/* harmony export */   "E_": () => (/* binding */ ConfigContext)
/* harmony export */ });
/* unused harmony export defaultConfigs */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const defaultConfigs = {
    sidebarScrollHeight: 0,
    updateSidebarScrollHeight: ()=>{},
    updateRussianState: ()=>{},
    switchTheme: ()=>{}
};
const ConfigContext = react__WEBPACK_IMPORTED_MODULE_0___default().createContext(defaultConfigs);
const useConfigs = ()=>react__WEBPACK_IMPORTED_MODULE_0___default().useContext(ConfigContext);


/***/ }),

/***/ 2525:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "styled-jsx/style"
var style_ = __webpack_require__(9816);
var style_default = /*#__PURE__*/__webpack_require__.n(style_);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: ../core/components/index.ts + 112 modules
var components = __webpack_require__(7406);
;// CONCATENATED MODULE: ./lib/use-dom-clean.ts

const useDomClean = ()=>{
    (0,external_react_.useEffect)(()=>{
        document.documentElement.removeAttribute("style");
        document.body.removeAttribute("style");
    }, []);
};
/* harmony default export */ const use_dom_clean = (useDomClean);

// EXTERNAL MODULE: ./node_modules/next/dynamic.js
var dynamic = __webpack_require__(5152);
var dynamic_default = /*#__PURE__*/__webpack_require__.n(dynamic);
// EXTERNAL MODULE: ../core/components/themes/presets/index.ts + 1 modules
var presets = __webpack_require__(9798);
;// CONCATENATED MODULE: ./сomponents/layout/menu/menu-skeleton.tsx




const MenuSkeleton = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: style_default().dynamic([
            [
                "fe3adbaa2ae9b85c",
                [
                    presets/* Theme.palette.gray50.name */.Q.palette.gray50.name
                ]
            ]
        ]) + " " + "skeleton",
        children: jsx_runtime_.jsx((style_default()), {
            id: "fe3adbaa2ae9b85c",
            dynamic: [
                presets/* Theme.palette.gray50.name */.Q.palette.gray50.name
            ],
            children: `.skeleton.__jsx-style-dynamic-selector{height:var(--nui-page-nav-height);width:100%;margin:0 auto;background-color:${presets/* Theme.palette.gray50.name */.Q.palette.gray50.name};-webkit-border-radius:10px;-moz-border-radius:10px;border-radius:10px}`
        })
    });
};
/* harmony default export */ const menu_skeleton = (MenuSkeleton);

;// CONCATENATED MODULE: ./сomponents/layout/menu/index.tsx



const Menu = dynamic_default()(null, {
    loadableGenerated: {
        modules: [
            "..\\сomponents\\layout\\menu\\index.tsx -> " + "./menu"
        ]
    },
    ssr: false,
    loading: ()=>/*#__PURE__*/ jsx_runtime_.jsx(menu_skeleton, {})
});
/* harmony default export */ const menu = (Menu);

// EXTERNAL MODULE: ./lib/config-context.ts
var config_context = __webpack_require__(9468);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
;// CONCATENATED MODULE: ./lib/constants.ts
const CUSTOM_THEME_TYPE = "Custom";
const RUSSIAN_LANGUAGE_IDENT = "ru-ru";
const ENGLISH_LANGUAGE_IDENT = "en-us";
const GITHUB_URL = "https://github.com/Kambulov/napolke-ui";
const CONTRIBUTORS_URL = "https://github.com/Kambulov/napolke-ui";

;// CONCATENATED MODULE: ./lib/config-provider.tsx




// import { useTheme } from '@napolke-ui'

const defaultProps = {};
const ConfigProvider = /*#__PURE__*/ external_react_default().memo(({ onThemeChange , onThemeTypeChange , children ,  })=>{
    // const theme = useTheme()
    const { pathname  } = (0,router_.useRouter)();
    const { 0: isRussian , 1: setIsChinese  } = (0,external_react_.useState)(()=>pathname.includes(RUSSIAN_LANGUAGE_IDENT));
    const { 0: scrollHeight , 1: setScrollHeight  } = (0,external_react_.useState)(0);
    // const [customTheme, setCustomTheme] = useState<NapolkeUIThemes>(theme)
    const updateSidebarScrollHeight = (height)=>setScrollHeight(height);
    const updateRussianState = (state)=>setIsChinese(state);
    // const updateCustomTheme = (nextTheme: DeepPartial<NapolkeUIThemes>) => {
    //   const mergedTheme = Themes.create(theme, { ...nextTheme, type: CUSTOM_THEME_TYPE })
    //   setCustomTheme(mergedTheme)
    //   onThemeChange && onThemeChange(mergedTheme)
    // }
    const switchTheme = (type)=>{
        onThemeTypeChange && onThemeTypeChange(type);
    };
    const initialValue = (0,external_react_.useMemo)(()=>({
            onThemeChange,
            isRussian,
            // customTheme,
            switchTheme,
            // updateCustomTheme,
            updateRussianState,
            sidebarScrollHeight: scrollHeight,
            updateSidebarScrollHeight
        }), [
        onThemeChange,
        scrollHeight,
        isRussian
    ]);
    return /*#__PURE__*/ jsx_runtime_.jsx(config_context/* ConfigContext.Provider */.E_.Provider, {
        value: initialValue,
        children: children
    });
});
ConfigProvider.defaultProps = defaultProps;
ConfigProvider.displayName = "NuiConfigProvider";
/* harmony default export */ const config_provider = (ConfigProvider);

// EXTERNAL MODULE: external "@mdx-js/react"
var react_ = __webpack_require__(7425);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./сomponents/mdx-widgets/hybrid-link.tsx

var __rest = undefined && undefined.__rest || function(s, e) {
    var t = {};
    for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") for(var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++){
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
};




const HybridLink = (_a)=>{
    var { href ="#" , children  } = _a, props = __rest(_a, [
        "href",
        "children"
    ]);
    const isRelativeUrl = !/^([a-z0-9]*:|.{0})\/\/.*$/gim.test(href);
    const { pathname  } = (0,router_.useRouter)();
    const isHomePage = pathname.includes("guide/introduction");
    if (isRelativeUrl) {
        return /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
            href: href,
            passHref: true,
            children: /*#__PURE__*/ jsx_runtime_.jsx(components/* Link */.rU, {
                color: true,
                block: true,
                ...props,
                children: children
            })
        });
    }
    return /*#__PURE__*/ jsx_runtime_.jsx(components/* Link */.rU, {
        href: href,
        target: "_blank",
        color: true,
        icon: !isHomePage,
        rel: "noreferrer nofollow",
        ...props,
        children: children
    });
};
/* harmony default export */ const hybrid_link = (HybridLink);

;// CONCATENATED MODULE: ./pages/_app.tsx










const Application = ({ Component , pageProps  })=>{
    use_dom_clean();
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: "Napolke UI - Современная и минималистичная UI библиотека для React"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "google",
                        content: "notranslate"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        property: "og:title",
                        content: "Napolke UI"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        property: "og:site_name",
                        content: "Napolke UI"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "generator",
                        content: "Napolke UI"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(components/* NapolkeProvider */.ib, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(components/* CssBaseline */.Tk, {}),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(config_provider, {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(menu, {}),
                            /*#__PURE__*/ jsx_runtime_.jsx(react_.MDXProvider, {
                                components: {
                                    a: hybrid_link,
                                    img: components/* Image */.Ee
                                },
                                children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                                    ...pageProps,
                                    className: "jsx-3e14bcd2e280f00b" + " " + (pageProps && pageProps.className != null && pageProps.className || "")
                                })
                            })
                        ]
                    }),
                    jsx_runtime_.jsx((style_default()), {
                        id: "3e14bcd2e280f00b",
                        children: ":root{--nui-page-nav-height:64px;--nui-page-scrollbar-width:4px}"
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const _app = (Application); // {/*  .tag {*/}
 // {/*    color: ${theme.palette.accents_5};*/}
 // {/*  }*/}
 // {/*  .punctuation {*/}
 // {/*    color: ${theme.palette.accents_5};*/}
 // {/*  }*/}
 // {/*  .attr-name {*/}
 // {/*    color: ${theme.palette.accents_6};*/}
 // {/*  }*/}
 // {/*  .attr-value {*/}
 // {/*    color: ${theme.palette.accents_4};*/}
 // {/*  }*/}
 // {/*  .language-javascript {*/}
 // {/*    color: ${theme.palette.accents_4};*/}
 // {/*  }*/}
 // {/*  span.class-name {*/}
 // {/*    color: ${theme.palette.warning};*/}
 // {/*  }*/}
 // {/*  span.maybe-class-name {*/}
 // {/*    color: ${theme.palette.purple};*/}
 // {/*  }*/}
 // {/*  span.token.string {*/}
 // {/*    color: ${theme.palette.accents_5};*/}
 // {/*  }*/}
 // {/*  span.token.comment {*/}
 // {/*    color: ${theme.palette.accents_3};*/}
 // {/*  }*/}
 // {/*  span.keyword {*/}
 // {/*    color: ${theme.palette.success};*/}
 // {/*  }*/}
 // {/*  span.plain-text {*/}
 // {/*    color: ${theme.palette.accents_3};*/}
 // {/*  }*/}
 // {/*  body::-webkit-scrollbar {*/}
 // {/*    width: var(--geist-page-scrollbar-width);*/}
 // {/*    background-color: ${theme.palette.accents_1};*/}
 // {/*  }*/}
 // {/*  body::-webkit-scrollbar-thumb {*/}
 // {/*    background-color: ${theme.palette.accents_2};*/}
 // {/*    border-radius: ${theme.layout.radius};*/}
 // {/*  }*/}


/***/ }),

/***/ 7425:
/***/ ((module) => {

module.exports = require("@mdx-js/react");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 5832:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/loadable.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 6405:
/***/ ((module) => {

module.exports = require("react-dom");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 9816:
/***/ ((module) => {

module.exports = require("styled-jsx/style");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [117,152,676,664,406], () => (__webpack_exec__(2525)));
module.exports = __webpack_exports__;

})();