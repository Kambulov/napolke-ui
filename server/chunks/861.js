"use strict";
exports.id = 861;
exports.ids = [861];
exports.modules = {

/***/ 9861:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ _omponents_layout)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "styled-jsx/style"
var style_ = __webpack_require__(9816);
var style_default = /*#__PURE__*/__webpack_require__.n(style_);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
;// CONCATENATED MODULE: ./сomponents/layout/header.tsx



const toCapitalize = (name)=>{
    const [first, ...rest] = name;
    return `${first.toUpperCase()}${rest.join("")}`;
};
const PageHeader = ({ meta  })=>{
    const capitalizeTitle = (0,external_react_.useMemo)(()=>{
        if (!meta.title) return "";
        if (meta.title.toLowerCase().startsWith("use")) return `${meta.title} - `;
        return `${toCapitalize(meta.title)} - `;
    }, [
        meta.title
    ]);
    return /*#__PURE__*/ jsx_runtime_.jsx((head_default()), {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("title", {
            children: [
                capitalizeTitle,
                "Napolke UI"
            ]
        })
    });
};
/* harmony default export */ const header = (PageHeader);

// EXTERNAL MODULE: ./node_modules/next/dynamic.js
var dynamic = __webpack_require__(5152);
var dynamic_default = /*#__PURE__*/__webpack_require__.n(dynamic);
// EXTERNAL MODULE: ../core/components/themes/presets/index.ts + 1 modules
var presets = __webpack_require__(9798);
;// CONCATENATED MODULE: ./сomponents/layout/sidebar/sidebar-skeleton.tsx




const DEFAULT_OPACITY = 0.75;
const LOADING_OPACITY = 0.45;
const SidebarSkeleton = ()=>{
    const { 0: opacity , 1: setOpacity  } = (0,external_react_.useState)(DEFAULT_OPACITY);
    (0,external_react_.useEffect)(()=>{
        const timer = setInterval(()=>{
            setOpacity((opacity)=>opacity !== DEFAULT_OPACITY ? DEFAULT_OPACITY : LOADING_OPACITY);
        }, 600);
        return ()=>{
            window.clearTimeout(timer);
        };
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: style_default().dynamic([
            [
                "799994c1005a1ed1",
                [
                    presets/* Theme.palette.gray200.name */.Q.palette.gray200.name,
                    opacity
                ]
            ]
        ]) + " " + "skeleton",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                style: {
                    width: "50%"
                },
                className: style_default().dynamic([
                    [
                        "799994c1005a1ed1",
                        [
                            presets/* Theme.palette.gray200.name */.Q.palette.gray200.name,
                            opacity
                        ]
                    ]
                ]) + " " + "item"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                style: {
                    width: "65%"
                },
                className: style_default().dynamic([
                    [
                        "799994c1005a1ed1",
                        [
                            presets/* Theme.palette.gray200.name */.Q.palette.gray200.name,
                            opacity
                        ]
                    ]
                ]) + " " + "item"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                style: {
                    width: "75%"
                },
                className: style_default().dynamic([
                    [
                        "799994c1005a1ed1",
                        [
                            presets/* Theme.palette.gray200.name */.Q.palette.gray200.name,
                            opacity
                        ]
                    ]
                ]) + " " + "item"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                style: {
                    width: "75%"
                },
                className: style_default().dynamic([
                    [
                        "799994c1005a1ed1",
                        [
                            presets/* Theme.palette.gray200.name */.Q.palette.gray200.name,
                            opacity
                        ]
                    ]
                ]) + " " + "item"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: style_default().dynamic([
                    [
                        "799994c1005a1ed1",
                        [
                            presets/* Theme.palette.gray200.name */.Q.palette.gray200.name,
                            opacity
                        ]
                    ]
                ]) + " " + "space"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                style: {
                    width: "50%"
                },
                className: style_default().dynamic([
                    [
                        "799994c1005a1ed1",
                        [
                            presets/* Theme.palette.gray200.name */.Q.palette.gray200.name,
                            opacity
                        ]
                    ]
                ]) + " " + "item"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                style: {
                    width: "65%"
                },
                className: style_default().dynamic([
                    [
                        "799994c1005a1ed1",
                        [
                            presets/* Theme.palette.gray200.name */.Q.palette.gray200.name,
                            opacity
                        ]
                    ]
                ]) + " " + "item"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: style_default().dynamic([
                    [
                        "799994c1005a1ed1",
                        [
                            presets/* Theme.palette.gray200.name */.Q.palette.gray200.name,
                            opacity
                        ]
                    ]
                ]) + " " + "item"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: style_default().dynamic([
                    [
                        "799994c1005a1ed1",
                        [
                            presets/* Theme.palette.gray200.name */.Q.palette.gray200.name,
                            opacity
                        ]
                    ]
                ]) + " " + "item"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: style_default().dynamic([
                    [
                        "799994c1005a1ed1",
                        [
                            presets/* Theme.palette.gray200.name */.Q.palette.gray200.name,
                            opacity
                        ]
                    ]
                ]) + " " + "item"
            }),
            jsx_runtime_.jsx((style_default()), {
                id: "799994c1005a1ed1",
                dynamic: [
                    presets/* Theme.palette.gray200.name */.Q.palette.gray200.name,
                    opacity
                ],
                children: `.skeleton.__jsx-style-dynamic-selector{width:100%}.item.__jsx-style-dynamic-selector{width:100%;height:20px;-webkit-border-radius:6px;-moz-border-radius:6px;border-radius:6px;margin:8px 0;background-color:${presets/* Theme.palette.gray200.name */.Q.palette.gray200.name};opacity:${opacity};-webkit-transition:opacity 350ms linear;-moz-transition:opacity 350ms linear;-o-transition:opacity 350ms linear;transition:opacity 350ms linear}.space.__jsx-style-dynamic-selector{margin:40px 0}`
            })
        ]
    });
};
/* harmony default export */ const sidebar_skeleton = (SidebarSkeleton);

;// CONCATENATED MODULE: ./сomponents/layout/sidebar/index.tsx



const Sidebar = dynamic_default()(null, {
    loadableGenerated: {
        modules: [
            "..\\сomponents\\layout\\sidebar\\index.tsx -> " + "./sidebar"
        ]
    },
    ssr: false,
    loading: ()=>/*#__PURE__*/ jsx_runtime_.jsx(sidebar_skeleton, {})
});
/* harmony default export */ const sidebar = (Sidebar);

;// CONCATENATED MODULE: ./сomponents/layout/powered-by/index.ts

const PoweredBy = dynamic_default()(null, {
    loadableGenerated: {
        modules: [
            "..\\сomponents\\layout\\powered-by\\index.ts -> " + "./powered-by"
        ]
    },
    ssr: false,
    loading: ()=>null
});
/* harmony default export */ const powered_by = (PoweredBy);

;// CONCATENATED MODULE: ./сomponents/layout/layout.tsx







const Layout = /*#__PURE__*/ external_react_default().memo(({ children , meta  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: style_default().dynamic([
            [
                "620eba2d6beefe59",
                [
                    presets/* Theme.layout.pageWidthWithMargin.name */.Q.layout.pageWidthWithMargin.name,
                    presets/* Theme.layout.gap.name */.Q.layout.gap.name,
                    presets/* Theme.layout.breakpointMobile.name */.Q.layout.breakpointMobile.name
                ]
            ]
        ]) + " " + "layout",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(header, {
                meta: meta
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("aside", {
                className: style_default().dynamic([
                    [
                        "620eba2d6beefe59",
                        [
                            presets/* Theme.layout.pageWidthWithMargin.name */.Q.layout.pageWidthWithMargin.name,
                            presets/* Theme.layout.gap.name */.Q.layout.gap.name,
                            presets/* Theme.layout.breakpointMobile.name */.Q.layout.breakpointMobile.name
                        ]
                    ]
                ]) + " " + "sidebar",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: style_default().dynamic([
                        [
                            "620eba2d6beefe59",
                            [
                                presets/* Theme.layout.pageWidthWithMargin.name */.Q.layout.pageWidthWithMargin.name,
                                presets/* Theme.layout.gap.name */.Q.layout.gap.name,
                                presets/* Theme.layout.breakpointMobile.name */.Q.layout.breakpointMobile.name
                            ]
                        ]
                    ]) + " " + "content",
                    children: /*#__PURE__*/ jsx_runtime_.jsx(sidebar, {})
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("main", {
                className: style_default().dynamic([
                    [
                        "620eba2d6beefe59",
                        [
                            presets/* Theme.layout.pageWidthWithMargin.name */.Q.layout.pageWidthWithMargin.name,
                            presets/* Theme.layout.gap.name */.Q.layout.gap.name,
                            presets/* Theme.layout.breakpointMobile.name */.Q.layout.breakpointMobile.name
                        ]
                    ]
                ]) + " " + "main",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: style_default().dynamic([
                            [
                                "620eba2d6beefe59",
                                [
                                    presets/* Theme.layout.pageWidthWithMargin.name */.Q.layout.pageWidthWithMargin.name,
                                    presets/* Theme.layout.gap.name */.Q.layout.gap.name,
                                    presets/* Theme.layout.breakpointMobile.name */.Q.layout.breakpointMobile.name
                                ]
                            ]
                        ]),
                        children: children
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(powered_by, {})
                ]
            }),
            jsx_runtime_.jsx((style_default()), {
                id: "620eba2d6beefe59",
                dynamic: [
                    presets/* Theme.layout.pageWidthWithMargin.name */.Q.layout.pageWidthWithMargin.name,
                    presets/* Theme.layout.gap.name */.Q.layout.gap.name,
                    presets/* Theme.layout.breakpointMobile.name */.Q.layout.breakpointMobile.name
                ],
                children: `.layout h3{margin-top:40px}.layout h4{margin-top:25px}.layout ol{padding-left:40px;margin:25px auto;-webkit-transform:scale(.95);-moz-transform:scale(.95);-ms-transform:scale(.95);-o-transform:scale(.95);transform:scale(.95)}.layout.__jsx-style-dynamic-selector{min-height:-webkit-calc(100vh - 108px);min-height:-moz-calc(100vh - 108px);min-height:calc(100vh - 108px);max-width:${presets/* Theme.layout.pageWidthWithMargin.name */.Q.layout.pageWidthWithMargin.name};margin:0 auto;padding:0 ${presets/* Theme.layout.gap.name */.Q.layout.gap.name};display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}.sidebar.__jsx-style-dynamic-selector{-webkit-box-flex:1;-webkit-flex-grow:1;-moz-box-flex:1;-ms-flex-positive:1;flex-grow:1}.sidebar.__jsx-style-dynamic-selector>.content.__jsx-style-dynamic-selector{height:-webkit-calc(100% - 2rem - 96px + var(--nui-page-nav-height));height:-moz-calc(100% - 2rem - 96px + var(--nui-page-nav-height));height:calc(100% - 2rem - 96px + var(--nui-page-nav-height));position:fixed;top:96px;bottom:2rem;width:200px;margin-right:20px;-webkit-overflow-scrolling:touch;-webkit-flex-shrink:0;z-index:100}.main.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;max-width:-webkit-calc(100% - 220px);max-width:-moz-calc(100% - 220px);max-width:calc(100% - 220px);-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;padding-left:20px;padding-top:25px;-webkit-box-flex:0;-webkit-flex:0 0 100%;-moz-box-flex:0;-ms-flex:0 0 100%;flex:0 0 100%;padding-bottom:50px}@media only screen and (max-width:${presets/* Theme.layout.breakpointMobile.name */.Q.layout.breakpointMobile.name}){.layout.__jsx-style-dynamic-selector{max-width:100%;width:100%;padding:20px 1rem}.sidebar.__jsx-style-dynamic-selector{display:none}.main.__jsx-style-dynamic-selector{width:90vw;max-width:90vw;padding:0}}`
            })
        ]
    });
});
/* harmony default export */ const layout = ((/* unused pure expression or super */ null && (Layout)));

;// CONCATENATED MODULE: ./сomponents/layout/index.tsx

/* harmony default export */ const _omponents_layout = (Layout);


/***/ })

};
;