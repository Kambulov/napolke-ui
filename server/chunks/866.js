"use strict";
exports.id = 866;
exports.ids = [866];
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

/***/ 3472:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ _omponents_attributes)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: ../core/components/index.ts + 112 modules
var components = __webpack_require__(7406);
// EXTERNAL MODULE: ./сomponents/pures/anchor/index.tsx + 1 modules
var pures_anchor = __webpack_require__(593);
// EXTERNAL MODULE: ./lib/config-context.ts
var config_context = __webpack_require__(9468);
// EXTERNAL MODULE: external "styled-jsx/style"
var style_ = __webpack_require__(9816);
var style_default = /*#__PURE__*/__webpack_require__.n(style_);
// EXTERNAL MODULE: ../core/components/themes/presets/index.ts + 1 modules
var presets = __webpack_require__(9798);
;// CONCATENATED MODULE: ./сomponents/attributes/attributes-table.tsx





const AttributesTable = ({ children  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(components/* Card */.Zb, {
        className: "attr",
        children: [
            children,
            jsx_runtime_.jsx((style_default()), {
                id: "a76b224d154ceccc",
                dynamic: [
                    presets/* Theme.layout.gap.name */.Q.layout.gap.name,
                    presets/* Theme.layout.gap.name */.Q.layout.gap.name,
                    presets/* Theme.palette.gray500.name */.Q.palette.gray500.name,
                    presets/* Theme.palette.gray50.name */.Q.palette.gray50.name,
                    presets/* Theme.palette.border.name */.Q.palette.border.name,
                    presets/* Theme.palette.border.name */.Q.palette.border.name,
                    presets/* Theme.palette.border.name */.Q.palette.border.name,
                    presets/* Theme.palette.border.name */.Q.palette.border.name,
                    presets/* Theme.palette.border.name */.Q.palette.border.name,
                    presets/* Theme.palette.border.name */.Q.palette.border.name,
                    presets/* Theme.palette.border.name */.Q.palette.border.name,
                    presets/* Theme.palette.border.name */.Q.palette.border.name,
                    presets/* Theme.palette.border.name */.Q.palette.border.name,
                    presets/* Theme.palette.gray500.name */.Q.palette.gray500.name,
                    presets/* Theme.layout.breakpointMobile */.Q.layout.breakpointMobile
                ],
                children: `.attr .pre{margin-top:12px!important}.attr table{margin-top:12px;margin-right:${presets/* Theme.layout.gap.name */.Q.layout.gap.name}}.attr h4.title{margin-top:-webkit-calc(${presets/* Theme.layout.gap.name */.Q.layout.gap.name} * 2.2);margin-top:-moz-calc(${presets/* Theme.layout.gap.name */.Q.layout.gap.name} * 2.2);margin-top:calc(${presets/* Theme.layout.gap.name */.Q.layout.gap.name} * 2.2)}.attr h4.title:first-of-type{margin-top:0}.attr table{border-collapse:separate;border-spacing:0;width:100%}.attr thead th td{height:2.5rem}.attr tbody tr td{height:3.333rem}.attr th,.attr td{padding:0 .625rem;text-align:left}.attr th{height:2.5rem;color:${presets/* Theme.palette.gray500.name */.Q.palette.gray500.name};font-size:.75rem;font-weight:400;letter-spacing:0;background:${presets/* Theme.palette.gray50.name */.Q.palette.gray50.name};border-bottom:1px solid ${presets/* Theme.palette.border.name */.Q.palette.border.name};border-top:1px solid ${presets/* Theme.palette.border.name */.Q.palette.border.name}}.attr th:nth-child(1){border-bottom:1px solid ${presets/* Theme.palette.border.name */.Q.palette.border.name};border-left:1px solid ${presets/* Theme.palette.border.name */.Q.palette.border.name};-webkit-border-radius:4px 0 0 4px;-moz-border-radius:4px 0 0 4px;border-radius:4px 0 0 4px;border-top:1px solid ${presets/* Theme.palette.border.name */.Q.palette.border.name}}.attr th:last-child{border-bottom:1px solid ${presets/* Theme.palette.border.name */.Q.palette.border.name};-webkit-border-radius:0 4px 4px 0;-moz-border-radius:0 4px 4px 0;border-radius:0 4px 4px 0;border-right:1px solid ${presets/* Theme.palette.border.name */.Q.palette.border.name};border-top:1px solid ${presets/* Theme.palette.border.name */.Q.palette.border.name}}.attr tr td{border-bottom:1px solid ${presets/* Theme.palette.border.name */.Q.palette.border.name};color:${presets/* Theme.palette.gray500.name */.Q.palette.gray500.name};font-size:.875rem;height:2.5rem}.attr td:nth-child(1){border-left:1px solid transparent}@media only screen and (max-width:${presets/* Theme.layout.breakpointMobile */.Q.layout.breakpointMobile}){.attr{overflow-x:scroll}.attr::-webkit-scrollbar{width:0;height:0;background-color:transparent}}`
            })
        ]
    });
};
/* harmony default export */ const attributes_table = (AttributesTable);

;// CONCATENATED MODULE: ./сomponents/attributes/attributes.tsx






const Attributes = /*#__PURE__*/ external_react_default().memo(({ children  })=>{
    const { isRussian  } = (0,config_context/* useConfigs */.B_)();
    const apiTitles = (0,external_react_.useMemo)(()=>{
        if (external_react_default().Children.count(children) === 0) return null;
        return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(components/* Spacer */.LZ, {
                    h: 1
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                    children: /*#__PURE__*/ jsx_runtime_.jsx(pures_anchor/* default */.Z, {
                        children: "APIs"
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(attributes_table, {
                    children: children
                })
            ]
        });
    }, [
        children,
        isRussian
    ]);
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: apiTitles
    });
});
/* harmony default export */ const attributes = (Attributes);

;// CONCATENATED MODULE: ./сomponents/attributes/attributes-title.tsx







const getAlias = (isChinese, alias)=>{
    if (!alias) return null;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("small", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                children: "["
            }),
            isChinese ? "别名" : "alias",
            ": ",
            /*#__PURE__*/ jsx_runtime_.jsx(components/* Code */.EK, {
                children: alias
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                children: "]"
            })
        ]
    });
};
const AttributesTitle = /*#__PURE__*/ external_react_default().memo(({ children , alias  })=>{
    const { isRussian  } = (0,config_context/* useConfigs */.B_)();
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h4", {
                className: style_default().dynamic([
                    [
                        "5f26b062c637cb7d",
                        [
                            presets/* Theme.layout.gapQuarter.name */.Q.layout.gapQuarter.name,
                            presets/* Theme.layout.gapHalf.name */.Q.layout.gapHalf.name,
                            presets/* Theme.palette.gray50.name */.Q.palette.gray50.name,
                            presets/* Theme.layout.radius.name */.Q.layout.radius.name,
                            presets/* Theme.palette.gray400.name */.Q.palette.gray400.name,
                            presets/* Theme.palette.gray500.name */.Q.palette.gray500.name
                        ]
                    ]
                ]) + " " + "title",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(components/* Code */.EK, {
                        children: /*#__PURE__*/ jsx_runtime_.jsx(pures_anchor/* default */.Z, {
                            pure: true,
                            children: children
                        })
                    }),
                    getAlias(!!isRussian, alias)
                ]
            }),
            jsx_runtime_.jsx((style_default()), {
                id: "5f26b062c637cb7d",
                dynamic: [
                    presets/* Theme.layout.gapQuarter.name */.Q.layout.gapQuarter.name,
                    presets/* Theme.layout.gapHalf.name */.Q.layout.gapHalf.name,
                    presets/* Theme.palette.gray50.name */.Q.palette.gray50.name,
                    presets/* Theme.layout.radius.name */.Q.layout.radius.name,
                    presets/* Theme.palette.gray400.name */.Q.palette.gray400.name,
                    presets/* Theme.palette.gray500.name */.Q.palette.gray500.name
                ],
                children: `h4.__jsx-style-dynamic-selector{display:-webkit-inline-box;display:-webkit-inline-flex;display:-moz-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;height:2rem;padding-left:${presets/* Theme.layout.gapQuarter.name */.Q.layout.gapQuarter.name};padding-right:${presets/* Theme.layout.gapHalf.name */.Q.layout.gapHalf.name};background-color:${presets/* Theme.palette.gray50.name */.Q.palette.gray50.name};-webkit-border-radius:${presets/* Theme.layout.radius.name */.Q.layout.radius.name};-moz-border-radius:${presets/* Theme.layout.radius.name */.Q.layout.radius.name};border-radius:${presets/* Theme.layout.radius.name */.Q.layout.radius.name};margin-bottom:0}h4.__jsx-style-dynamic-selector small{font-size:.65em;padding-left:.65rem;color:${presets/* Theme.palette.gray400.name */.Q.palette.gray400.name};-webkit-align-self:flex-end;-ms-flex-item-align:end;align-self:flex-end;line-height:1.6rem}h4.__jsx-style-dynamic-selector span{color:${presets/* Theme.palette.gray500.name */.Q.palette.gray500.name}}`
            })
        ]
    });
});
/* harmony default export */ const attributes_title = (AttributesTitle);

;// CONCATENATED MODULE: ./сomponents/attributes/index.ts



attributes.Title = attributes_title;
attributes.Table = attributes_table;
/* harmony default export */ const _omponents_attributes = (attributes);


/***/ }),

/***/ 2346:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ _omponents_playground)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "styled-jsx/style"
var style_ = __webpack_require__(9816);
var style_default = /*#__PURE__*/__webpack_require__.n(style_);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: ./node_modules/next/dynamic.js
var dynamic = __webpack_require__(5152);
var dynamic_default = /*#__PURE__*/__webpack_require__.n(dynamic);
// EXTERNAL MODULE: ../core/components/index.ts + 112 modules
var components = __webpack_require__(7406);
// EXTERNAL MODULE: ./lib/config-context.ts
var config_context = __webpack_require__(9468);
// EXTERNAL MODULE: ./сomponents/playground/title.tsx
var playground_title = __webpack_require__(6449);
// EXTERNAL MODULE: ../core/components/themes/presets/index.ts + 1 modules
var presets = __webpack_require__(9798);
;// CONCATENATED MODULE: ./сomponents/playground/playground.tsx








const DynamicLive = dynamic_default()(null, {
    loadableGenerated: {
        modules: [
            "..\\сomponents\\playground\\playground.tsx -> " + "./dynamic-live"
        ]
    },
    ssr: false,
    loading: ()=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
            style: {
                padding: "20pt 0"
            },
            children: /*#__PURE__*/ jsx_runtime_.jsx(components/* Loading */.gb, {})
        })
});
const defaultProps = {
    desc: "",
    code: "",
    bindings: {}
};
const Playground = /*#__PURE__*/ external_react_default().memo(({ title: inputTitle , code: inputCode , desc , scope ,  })=>{
    const { isRussian  } = (0,config_context/* useConfigs */.B_)();
    const code = inputCode.trim();
    const title = inputTitle || (isRussian ? "Главные" : "General");
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(playground_title/* default */.Z, {
                title: title,
                desc: desc
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: style_default().dynamic([
                    [
                        "e828386b5cfc3f27",
                        [
                            presets/* Theme.layout.radius.name */.Q.layout.radius.name,
                            presets/* Theme.palette.gray200.name */.Q.palette.gray200.name
                        ]
                    ]
                ]) + " " + "playground",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(DynamicLive, {
                        code: code,
                        scope: scope
                    }),
                    jsx_runtime_.jsx((style_default()), {
                        id: "e828386b5cfc3f27",
                        dynamic: [
                            presets/* Theme.layout.radius.name */.Q.layout.radius.name,
                            presets/* Theme.palette.gray200.name */.Q.palette.gray200.name
                        ],
                        children: `.playground.__jsx-style-dynamic-selector{width:100%;-webkit-border-radius:${presets/* Theme.layout.radius.name */.Q.layout.radius.name};-moz-border-radius:${presets/* Theme.layout.radius.name */.Q.layout.radius.name};border-radius:${presets/* Theme.layout.radius.name */.Q.layout.radius.name};border:1px solid ${presets/* Theme.palette.gray200.name */.Q.palette.gray200.name}}`
                    })
                ]
            })
        ]
    });
});
Playground.defaultProps = defaultProps;
Playground.displayName = "NuiPlayground";
/* harmony default export */ const playground = (Playground);

;// CONCATENATED MODULE: ./сomponents/playground/index.ts

/* harmony default export */ const _omponents_playground = (playground);


/***/ }),

/***/ 6449:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9816);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _pures__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(593);




const defaultProps = {
    desc: ""
};
const replaceCode = (desc)=>{
    if (!desc.includes("`")) return desc;
    let count = 0;
    return desc.replace(/`/g, ()=>{
        const val = count % 2 === 0 ? "<code>" : "</code>";
        count++;
        return val;
    });
};
const Title = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_2___default().memo(({ title , desc  })=>{
    const isStringDesc = typeof desc === "string";
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                    [
                        "24421eb4067b6ec6",
                        [
                            desc ? 0 : "30px"
                        ]
                    ]
                ]),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pures__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                    children: title
                })
            }),
            desc && isStringDesc && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                dangerouslySetInnerHTML: {
                    __html: replaceCode(desc)
                },
                className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                    [
                        "24421eb4067b6ec6",
                        [
                            desc ? 0 : "30px"
                        ]
                    ]
                ])
            }),
            desc && !isStringDesc && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
                    [
                        "24421eb4067b6ec6",
                        [
                            desc ? 0 : "30px"
                        ]
                    ]
                ]),
                children: desc
            }),
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {
                id: "24421eb4067b6ec6",
                dynamic: [
                    desc ? 0 : "30px"
                ],
                children: `h3.__jsx-style-dynamic-selector{margin-bottom:${desc ? 0 : "30px"};line-height:1;font-size:1.3rem;margin-top:55px;position:relative}h3.__jsx-style-dynamic-selector>p.__jsx-style-dynamic-selector{margin:0}h3.__jsx-style-dynamic-selector>code,h3.__jsx-style-dynamic-selector>pre{text-transform:none}`
            })
        ]
    });
});
Title.defaultProps = defaultProps;
Title.displayName = "GeistPlayGroundTitle";
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Title);


/***/ }),

/***/ 593:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ pures_anchor)
});

// UNUSED EXPORTS: virtualAnchorEncode

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "styled-jsx/style"
var style_ = __webpack_require__(9816);
var style_default = /*#__PURE__*/__webpack_require__.n(style_);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ../core/components/index.ts + 112 modules
var components = __webpack_require__(7406);
;// CONCATENATED MODULE: ./сomponents/pures/anchor/anchor-icon.tsx


const AnchorIcon = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
        viewBox: "0 0 24 24",
        width: "100%",
        height: "100%",
        stroke: "currentColor",
        strokeWidth: "1.5",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        fill: "none",
        shapeRendering: "geometricPrecision",
        style: {
            color: "currentColor"
        },
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71"
            })
        ]
    });
};
/* harmony default export */ const anchor_icon = (AnchorIcon);

// EXTERNAL MODULE: ../core/components/themes/presets/index.ts + 1 modules
var presets = __webpack_require__(9798);
;// CONCATENATED MODULE: ./сomponents/pures/anchor/index.tsx






const virtualAnchorEncode = (text)=>{
    if (!text) return undefined;
    return text.toLowerCase().replace(/ /g, "-");
};
const VirtualAnchor = ({ children , pure  })=>{
    const ref = (0,external_react_.useRef)(null);
    const { 0: id , 1: setId  } = (0,external_react_.useState)();
    (0,external_react_.useEffect)(()=>{
        if (!ref.current) return;
        setId(virtualAnchorEncode(ref.current.textContent || undefined));
    }, [
        ref.current
    ]);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
        ref: ref,
        className: style_default().dynamic([
            [
                "98dccc06612a4a5b",
                [
                    presets/* Theme.palette.gray500.name */.Q.palette.gray500.name
                ]
            ]
        ]) + " " + "parent",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(components/* Link */.rU, {
                href: `#${id}`,
                children: children
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                id: id,
                className: style_default().dynamic([
                    [
                        "98dccc06612a4a5b",
                        [
                            presets/* Theme.palette.gray500.name */.Q.palette.gray500.name
                        ]
                    ]
                ]) + " " + "virtual"
            }),
            !pure && /*#__PURE__*/ jsx_runtime_.jsx("span", {
                className: style_default().dynamic([
                    [
                        "98dccc06612a4a5b",
                        [
                            presets/* Theme.palette.gray500.name */.Q.palette.gray500.name
                        ]
                    ]
                ]) + " " + "icon",
                children: /*#__PURE__*/ jsx_runtime_.jsx(anchor_icon, {})
            }),
            jsx_runtime_.jsx((style_default()), {
                id: "98dccc06612a4a5b",
                dynamic: [
                    presets/* Theme.palette.gray500.name */.Q.palette.gray500.name
                ],
                children: `.parent.__jsx-style-dynamic-selector{position:relative;color:inherit}.parent.__jsx-style-dynamic-selector a{color:inherit}.virtual.__jsx-style-dynamic-selector{position:absolute;top:-65px;left:0;opacity:0;pointer-events:none;visibility:hidden}.icon.__jsx-style-dynamic-selector{display:-webkit-inline-box;display:-webkit-inline-flex;display:-moz-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;overflow:hidden;left:-1.5em;top:50%;-webkit-transform:translateY(-50%);-moz-transform:translateY(-50%);-ms-transform:translateY(-50%);-o-transform:translateY(-50%);transform:translateY(-50%);position:absolute;opacity:0;visibility:hidden;font-size:inherit;width:.8em;height:.8em;margin-top:1px;color:${presets/* Theme.palette.gray500.name */.Q.palette.gray500.name}}.parent.__jsx-style-dynamic-selector:hover>.icon.__jsx-style-dynamic-selector{opacity:1;visibility:visible}`
            })
        ]
    });
};
/* harmony default export */ const pures_anchor = (VirtualAnchor);


/***/ })

};
;