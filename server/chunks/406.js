"use strict";
exports.id = 406;
exports.ids = [406];
exports.modules = {

/***/ 7406:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "qE": () => (/* reexport */ components_avatar),
  "zx": () => (/* reexport */ components_button),
  "Zb": () => (/* reexport */ components_card),
  "EK": () => (/* reexport */ components_code),
  "Tk": () => (/* reexport */ css_baseline),
  "rj": () => (/* reexport */ components_grid),
  "Ee": () => (/* reexport */ components_image),
  "rU": () => (/* reexport */ components_link),
  "gb": () => (/* reexport */ components_loading),
  "ib": () => (/* reexport */ napolke_providers),
  "LZ": () => (/* reexport */ components_spacer),
  "mQ": () => (/* reexport */ components_tabs),
  "xv": () => (/* reexport */ components_text)
});

// UNUSED EXPORTS: Divider, Keyboard, Select, Tooltip, useBodyScroll, useClickAway, useClipboard, useMediaQuery, useTheme, useToasts

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "styled-jsx/style"
var style_ = __webpack_require__(9816);
var style_default = /*#__PURE__*/__webpack_require__.n(style_);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: ../core/node_modules/styled-jsx/server.js
var server = __webpack_require__(2117);
// EXTERNAL MODULE: ../core/components/themes/presets/index.ts + 1 modules
var presets = __webpack_require__(9798);
;// CONCATENATED MODULE: ../core/components/css-baseline/css-baseline.tsx





const CssBaseline = ({ children  })=>{
    console.log(" Object.keys(Theme.palette)", Object.keys(presets/* Theme.palette */.Q.palette));
    let obj = {};
    Object.keys(presets/* Theme.palette */.Q.palette).forEach((item)=>{
        const regex = /var\(([^)]+)\)/;
        // @ts-ignore
        const matches = presets/* Theme.palette */.Q.palette[item].name.match(regex);
        obj = Object.assign(Object.assign({}, obj), {
            // @ts-ignore
            [matches[1]]: presets/* Theme.palette */.Q.palette[item].value
        });
    });
    Object.keys(presets/* Theme.layout */.Q.layout).forEach((item)=>{
        const regex = /var\(([^)]+)\)/;
        // @ts-ignore
        const matches = presets/* Theme.layout */.Q.layout[item].name.match(regex);
        obj = Object.assign(Object.assign({}, obj), {
            // @ts-ignore
            [matches[1]]: presets/* Theme.layout */.Q.layout[item].value
        });
    });
    const cssString = Object.entries(obj).map(([key, value])=>`  ${key}: ${value};`).join("\n");
    const result = `:root[data-theme="light"] {\n${cssString}\n}`;
    console.log(result);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            children,
            jsx_runtime_.jsx((style_default()), {
                id: "e75d363401770dd9",
                dynamic: [
                    result,
                    presets/* Theme.palette.background.name */.Q.palette.background.name,
                    presets/* Theme.palette.black.name */.Q.palette.black.name,
                    presets/* Theme.palette.background.name */.Q.palette.background.name,
                    presets/* Theme.font.sans */.Q.font.sans,
                    presets/* Theme.font.sans */.Q.font.sans,
                    presets/* Theme.palette.link.name */.Q.palette.link.name,
                    presets/* Theme.expressiveness.linkStyle */.Q.expressiveness.linkStyle,
                    presets/* Theme.expressiveness.linkHoverStyle */.Q.expressiveness.linkHoverStyle,
                    presets/* Theme.layout.gapHalf.name */.Q.layout.gapHalf.name,
                    presets/* Theme.layout.gapHalf.name */.Q.layout.gapHalf.name,
                    presets/* Theme.layout.gapHalf.name */.Q.layout.gapHalf.name,
                    presets/* Theme.layout.gap */.Q.layout.gap,
                    presets/* Theme.palette.black.name */.Q.palette.black.name,
                    presets/* Theme.palette.gray400.name */.Q.palette.gray400.name,
                    presets/* Theme.palette.blue500.name */.Q.palette.blue500.name,
                    presets/* Theme.font.mono */.Q.font.mono,
                    presets/* Theme.layout.gap.name */.Q.layout.gap.name,
                    presets/* Theme.layout.gap.name */.Q.layout.gap.name,
                    presets/* Theme.layout.gap.name */.Q.layout.gap.name,
                    presets/* Theme.font.mono */.Q.font.mono,
                    presets/* Theme.palette.black.name */.Q.palette.black.name,
                    presets/* Theme.palette.gray200.name */.Q.palette.gray200.name,
                    presets/* Theme.palette.gray50.name */.Q.palette.gray50.name,
                    presets/* Theme.layout.gap.name */.Q.layout.gap.name,
                    presets/* Theme.layout.gap.name */.Q.layout.gap.name,
                    presets/* Theme.palette.gray500.name */.Q.palette.gray500.name,
                    presets/* Theme.palette.gray200.name */.Q.palette.gray200.name,
                    presets/* Theme.layout.radius.name */.Q.layout.radius.name,
                    presets/* Theme.palette.border.name */.Q.palette.border.name,
                    presets/* Theme.palette.gray200.name */.Q.palette.gray200.name,
                    presets/* Theme.palette.black.name */.Q.palette.black.name
                ],
                children: `${result} :root[data-theme="dark"]{--npui-color-gray-50:hsl(240 5.1% 15%);--npui-color-gray-100:hsl(240 5.7% 18.2%);--npui-color-gray-200:hsl(240 4.6% 22%);--npui-color-gray-300:hsl(240 5% 27.6%);--npui-color-gray-400:hsl(240 5% 35.5%);--npui-color-gray-500:hsl(240 3.7% 44%);--npui-color-gray-600:hsl(240 5.3% 58%);--npui-color-gray-700:hsl(240 5.6% 73%);--npui-color-gray-800:hsl(240 7.3% 84%);--npui-color-gray-900:hsl(240 9.1% 91.8%);--npui-color-gray-950:hsl(0 0% 95%)}html,body{background-color:${presets/* Theme.palette.background.name */.Q.palette.background.name};color:${presets/* Theme.palette.black.name */.Q.palette.black.name}}html{font-size:16px;--nui-icons-background:${presets/* Theme.palette.background.name */.Q.palette.background.name}}body{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;text-rendering:optimizeLegibility;font-size:1rem;line-height:1.5;margin:0;padding:0;min-height:100%;position:relative;overflow-x:hidden;font-family:${presets/* Theme.font.sans */.Q.font.sans}}#__next{overflow-x:hidden}*,*:before,*:after{-webkit-box-sizing:inherit;-moz-box-sizing:inherit;box-sizing:inherit;text-rendering:geometricPrecision;-webkit-tap-highlight-color:transparent}p,small{font-weight:400;color:inherit;letter-spacing:-.005625em;font-family:${presets/* Theme.font.sans */.Q.font.sans}}p{margin:1em 0;font-size:1em;line-height:1.625em}small{margin:0;line-height:1.5;font-size:.875em}b{font-weight:600}span{font-size:inherit;color:inherit;font-weight:inherit}img{max-width:100%}a{cursor:pointer;font-size:inherit;-webkit-touch-callout:none;-webkit-tap-highlight-color:rgba(0,0,0,0);-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;color:${presets/* Theme.palette.link.name */.Q.palette.link.name};-webkit-text-decoration:${presets/* Theme.expressiveness.linkStyle */.Q.expressiveness.linkStyle};-moz-text-decoration:${presets/* Theme.expressiveness.linkStyle */.Q.expressiveness.linkStyle};text-decoration:${presets/* Theme.expressiveness.linkStyle */.Q.expressiveness.linkStyle}}a:hover{-webkit-text-decoration:${presets/* Theme.expressiveness.linkHoverStyle */.Q.expressiveness.linkHoverStyle};-moz-text-decoration:${presets/* Theme.expressiveness.linkHoverStyle */.Q.expressiveness.linkHoverStyle};text-decoration:${presets/* Theme.expressiveness.linkHoverStyle */.Q.expressiveness.linkHoverStyle}}ul,ol{padding:0;list-style-type:none;margin:${presets/* Theme.layout.gapHalf.name */.Q.layout.gapHalf.name} ${presets/* Theme.layout.gapHalf.name */.Q.layout.gapHalf.name} ${presets/* Theme.layout.gapHalf.name */.Q.layout.gapHalf.name} ${presets/* Theme.layout.gap */.Q.layout.gap};color:${presets/* Theme.palette.black.name */.Q.palette.black.name}}ol{list-style-type:decimal}li{margin-bottom:.625em;font-size:1em;line-height:1.625em}ul li:before{content:"–";display:inline-block;color:${presets/* Theme.palette.gray400.name */.Q.palette.gray400.name};position:absolute;margin-left:-.9375em}h1,h2,h3,h4,h5,h6{color:inherit;margin:0 0 .7rem 0}h1{font-size:3rem;letter-spacing:-.02em;line-height:1.5;font-weight:700}h2{font-size:2.25rem;letter-spacing:-.02em;font-weight:600}h3{font-size:1.5rem;letter-spacing:-.02em;font-weight:600}h4{font-size:1.25rem;letter-spacing:-.02em;font-weight:600}h5{font-size:1rem;letter-spacing:-.01em;font-weight:600}h6{font-size:.875rem;letter-spacing:-.005em;font-weight:600}button,input,select,textarea{font-family:inherit;font-size:inherit;line-height:inherit;color:inherit;margin:0}button:focus,input:focus,select:focus,textarea:focus{outline:none}code{color:${presets/* Theme.palette.blue500.name */.Q.palette.blue500.name};font-family:${presets/* Theme.font.mono */.Q.font.mono};font-size:.9em;white-space:pre-wrap}code:before,code:after{content:"\`"}pre{padding:-webkit-calc(${presets/* Theme.layout.gap.name */.Q.layout.gap.name} * 0.9)${presets/* Theme.layout.gap.name */.Q.layout.gap.name};padding:-moz-calc(${presets/* Theme.layout.gap.name */.Q.layout.gap.name} * 0.9)${presets/* Theme.layout.gap.name */.Q.layout.gap.name};padding:calc(${presets/* Theme.layout.gap.name */.Q.layout.gap.name} * 0.9)${presets/* Theme.layout.gap.name */.Q.layout.gap.name};margin:${presets/* Theme.layout.gap.name */.Q.layout.gap.name} 0;font-family:${presets/* Theme.font.mono */.Q.font.mono};white-space:pre;overflow:auto;line-height:1.5;text-align:left;font-size:14px;-webkit-overflow-scrolling:touch}pre code{color:${presets/* Theme.palette.black.name */.Q.palette.black.name};font-size:1em;line-height:1.25em;white-space:pre}pre code:before,pre code:after{display:none}pre p{margin:0}pre::-webkit-scrollbar{display:none;width:0;height:0;background:transparent}hr{border-color:${presets/* Theme.palette.gray200.name */.Q.palette.gray200.name}}details{background-color:${presets/* Theme.palette.gray50.name */.Q.palette.gray50.name};border:none}details:focus,details:hover,details:active{outline:none}summary{cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;list-style:none;outline:none}summary::marker,summary::before,summary::-webkit-details-marker{display:none}summary::-moz-list-bullet{font-size:0}summary:focus,summary:hover,summary:active{outline:none;list-style:none}blockquote{padding:-webkit-calc(0.667 * ${presets/* Theme.layout.gap.name */.Q.layout.gap.name})${presets/* Theme.layout.gap.name */.Q.layout.gap.name};padding:-moz-calc(0.667 * ${presets/* Theme.layout.gap.name */.Q.layout.gap.name})${presets/* Theme.layout.gap.name */.Q.layout.gap.name};padding:calc(0.667 * ${presets/* Theme.layout.gap.name */.Q.layout.gap.name})${presets/* Theme.layout.gap.name */.Q.layout.gap.name};color:${presets/* Theme.palette.gray500.name */.Q.palette.gray500.name};background-color:${presets/* Theme.palette.gray200.name */.Q.palette.gray200.name};-webkit-border-radius:${presets/* Theme.layout.radius.name */.Q.layout.radius.name};-moz-border-radius:${presets/* Theme.layout.radius.name */.Q.layout.radius.name};border-radius:${presets/* Theme.layout.radius.name */.Q.layout.radius.name};margin:1.5em 0;border:1px solid ${presets/* Theme.palette.border.name */.Q.palette.border.name}}blockquote *:first-child{margin-top:0}blockquote *:last-child{margin-bottom:0}::-moz-selection{background-color:${presets/* Theme.palette.gray200.name */.Q.palette.gray200.name};color:${presets/* Theme.palette.black.name */.Q.palette.black.name}}::selection{background-color:${presets/* Theme.palette.gray200.name */.Q.palette.gray200.name};color:${presets/* Theme.palette.black.name */.Q.palette.black.name}}`
            })
        ]
    });
};
const MemoCssBaseline = /*#__PURE__*/ external_react_default().memo(CssBaseline);
MemoCssBaseline.flush = server["default"];
MemoCssBaseline.flushToHTML = server.flushToHTML;
/* harmony default export */ const css_baseline = (MemoCssBaseline);

;// CONCATENATED MODULE: ../core/components/css-baseline/index.ts


;// CONCATENATED MODULE: ../core/components/use-theme/theme-context.ts

const ThemeContext = external_react_default().createContext({
    mode: "",
    toggleMode: ()=>{}
});
const useTheme = ()=>external_react_default().useContext(ThemeContext);

;// CONCATENATED MODULE: ../core/components/use-theme/index.ts

/* harmony default export */ const use_theme = (useTheme);

;// CONCATENATED MODULE: ../core/components/utils/use-napolke-ui-context.ts

const use_napolke_ui_context_defaultToastLayout = {
    padding: "12px 16px",
    margin: "8px 0",
    width: "420px",
    maxWidth: "90vw",
    maxHeight: "75px",
    placement: "bottomRight"
};
const defaultParams = {
    toasts: [],
    toastLayout: use_napolke_ui_context_defaultToastLayout,
    updateToastLayout: (t)=>t,
    updateToasts: (t)=>t,
    lastUpdateToastId: null,
    updateLastToastId: ()=>null
};
const NapolkeUIContent = external_react_default().createContext(defaultParams);
const use_napolke_ui_context_useNapolkeUIContext = ()=>external_react_default().useContext(NapolkeUIContent);

;// CONCATENATED MODULE: ../core/components/themes/helpers.ts
function setThemeModeCookieValue(value) {
    document.cookie = `theme=${value}; max-age=31536000; path=/`;
    document.cookie = `theme=${value}; max-age=31536000; domain=${document.location.origin}; path=/`;
}
function getThemeModeCookieValue() {
    let value;
    if (typeof document !== "undefined") {
        const cookies = document.cookie.split(";");
        const filteredCookies = cookies.filter((cookie)=>cookie.indexOf("theme=") >= 0);
        if (filteredCookies.length) {
            value = filteredCookies[0].substring(filteredCookies[0].indexOf("true"), filteredCookies[0].length) === "dark" ? "dark" : "light";
        }
    }
    return value;
}
function getPreferredTheme() {
    // Проверка наличия объекта window
    if (false) {} else {
        // Обработка сценария, когда код выполняется в среде, где window не определен
        return "light"; // или любое другое значение по умолчанию
    }
}

;// CONCATENATED MODULE: ../core/components/themes/themes.ts


function useDarkMode() {
    const { 0: mode , 1: setMode  } = (0,external_react_.useState)(getPreferredTheme());
    function toggleMode() {
        setMode(mode === "light" ? "dark" : "light");
    }
    function setBodyCssClass(theme) {
        document.documentElement.setAttribute("data-theme", theme);
    }
    (0,external_react_.useEffect)(()=>{
        setThemeModeCookieValue(mode);
        setBodyCssClass(mode);
    }, [
        mode
    ]);
    return [
        mode,
        toggleMode
    ];
}

;// CONCATENATED MODULE: ../core/components/napolke-providers/theme-provider.tsx




const DarkModeProvider = ({ children  })=>{
    const [mode, toggleMode] = useDarkMode();
    return /*#__PURE__*/ jsx_runtime_.jsx(ThemeContext.Provider, {
        value: {
            mode,
            toggleMode
        },
        children: children
    });
};
/* harmony default export */ const theme_provider = (DarkModeProvider);

;// CONCATENATED MODULE: ../core/components/use-current-state/use-current-state.ts

const useCurrentState = (initialState)=>{
    const { 0: state , 1: setState  } = (0,external_react_.useState)(()=>{
        return typeof initialState === "function" ? initialState() : initialState;
    });
    const ref = (0,external_react_.useRef)(initialState);
    (0,external_react_.useEffect)(()=>{
        ref.current = state;
    }, [
        state
    ]);
    const setValue = (val)=>{
        const result = typeof val === "function" ? val(ref.current) : val;
        ref.current = result;
        setState(result);
    };
    return [
        state,
        setValue,
        ref
    ];
};
/* harmony default export */ const use_current_state = (useCurrentState);

;// CONCATENATED MODULE: ../core/components/use-current-state/index.ts

/* harmony default export */ const components_use_current_state = (use_current_state);

;// CONCATENATED MODULE: ../core/components/utils/use-current-state.ts

/* harmony default export */ const utils_use_current_state = (components_use_current_state);

// EXTERNAL MODULE: external "react-dom"
var external_react_dom_ = __webpack_require__(6405);
;// CONCATENATED MODULE: ../core/components/utils/collections.ts

const collections_getId = ()=>{
    return Math.random().toString(32).slice(2, 10);
};
const capitalize = (str)=>{
    const safeStr = String(str).trim();
    return safeStr.charAt(0).toUpperCase() + safeStr.slice(1);
};
const hasChild = (children, child)=>{
    const types = external_react_default().Children.map(children, (item)=>{
        if (!external_react_default().isValidElement(item)) return null;
        return item.type;
    });
    return (types || []).includes(child);
};
const pickChild = (children, targetChild)=>{
    let target = [];
    const withoutTargetChildren = external_react_default().Children.map(children, (item)=>{
        if (!external_react_default().isValidElement(item)) return item;
        if (item.type === targetChild) {
            target.push(item);
            return null;
        }
        return item;
    });
    const targetChildren = target.length >= 0 ? target : undefined;
    return [
        withoutTargetChildren,
        targetChildren
    ];
};
const pickChildByProps = (children, key, value)=>{
    let target = [];
    const isArray = Array.isArray(value);
    const withoutPropChildren = external_react_default().Children.map(children, (item)=>{
        if (!external_react_default().isValidElement(item)) return null;
        if (!item.props) return item;
        if (isArray) {
            if (value.includes(item.props[key])) {
                target.push(item);
                return null;
            }
            return item;
        }
        if (item.props[key] === value) {
            target.push(item);
            return null;
        }
        return item;
    });
    const targetChildren = target.length >= 0 ? target : undefined;
    return [
        withoutPropChildren,
        targetChildren
    ];
};
const pickChildrenFirst = (children)=>{
    return React.Children.toArray(children)[0];
};
const setChildrenProps = (children, props, targetComponents = [])=>{
    if (React.Children.count(children) === 0) return [];
    const allowAll = targetComponents.length === 0;
    const clone = (child, props = {})=>React.cloneElement(child, props);
    return React.Children.map(children, (item)=>{
        if (!React.isValidElement(item)) return item;
        if (allowAll) return clone(item, props);
        const isAllowed = targetComponents.find((child)=>child === item.type);
        if (isAllowed) return clone(item, props);
        return item;
    });
};
const setChildrenIndex = (children, targetComponents = [])=>{
    if (React.Children.count(children) === 0) return [];
    const allowAll = targetComponents.length === 0;
    const clone = (child, props = {})=>React.cloneElement(child, props);
    let index = 0;
    return React.Children.map(children, (item)=>{
        if (!React.isValidElement(item)) return item;
        index = index + 1;
        if (allowAll) return clone(item, {
            index
        });
        const isAllowed = targetComponents.find((child)=>child === item.type);
        if (isAllowed) return clone(item, {
            index
        });
        index = index - 1;
        return item;
    });
};
const getReactNode = (node)=>{
    if (!node) return null;
    if (typeof node !== "function") return node;
    return node();
};
const isChildElement = (parent, child)=>{
    if (!parent || !child) return false;
    let node = child;
    while(node){
        if (node === parent) return true;
        node = node.parentNode;
    }
    return false;
};
const isGeistElement = (el)=>{
    if (!el) return false;
    if ((el === null || el === void 0 ? void 0 : el.dataset) && (el === null || el === void 0 ? void 0 : el.dataset["geist"])) return true;
    el.attributes.getNamedItem("data-geist");
    return !!el.attributes.getNamedItem("data-geist");
};
const isBrowser = ()=>{
    return Boolean( false && 0);
};
const isMac = ()=>{
    if (!isBrowser()) return false;
    return navigator.platform.toUpperCase().indexOf("MAC") >= 0;
};
const isCSSNumberValue = (value)=>value !== undefined && !Number.isNaN(+value);

;// CONCATENATED MODULE: ../core/components/utils/use-ssr.ts


const useSSR = ()=>{
    const { 0: browser , 1: setBrowser  } = (0,external_react_.useState)(false);
    (0,external_react_.useEffect)(()=>{
        setBrowser(isBrowser());
    }, []);
    return {
        isBrowser: browser,
        isServer: !browser
    };
};
/* harmony default export */ const use_ssr = (useSSR);

;// CONCATENATED MODULE: ../core/components/utils/use-portal.ts



const createElement = (id)=>{
    const el = document.createElement("div");
    el.setAttribute("id", id);
    return el;
};
const use_portal_usePortal = (selectId = collections_getId(), getContainer)=>{
    const id = `napolke-ui-${selectId}`;
    const { isBrowser  } = use_ssr();
    const { 0: elSnapshot , 1: setElSnapshot  } = (0,external_react_.useState)(isBrowser ? createElement(id) : null);
    (0,external_react_.useEffect)(()=>{
        const customContainer = getContainer ? getContainer() : null;
        const parentElement = customContainer || document.body;
        const hasElement = parentElement.querySelector(`#${id}`);
        const el = hasElement || createElement(id);
        if (!hasElement) {
            parentElement.appendChild(el);
        }
        setElSnapshot(el);
    }, []);
    return elSnapshot;
};
/* harmony default export */ const use_portal = (use_portal_usePortal);

;// CONCATENATED MODULE: ../core/components/shared/css-transition.tsx
var __rest = undefined && undefined.__rest || function(s, e) {
    var t = {};
    for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") for(var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++){
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
};

const defaultProps = {
    visible: false,
    enterTime: 60,
    leaveTime: 60,
    clearTime: 60,
    className: "",
    name: "transition"
};
const CssTransition = (_a)=>{
    var _b;
    var { children , className , visible , enterTime , leaveTime , clearTime , name  } = _a, props = __rest(_a, [
        "children",
        "className",
        "visible",
        "enterTime",
        "leaveTime",
        "clearTime",
        "name"
    ]);
    const { 0: classes , 1: setClasses  } = (0,external_react_.useState)("");
    const { 0: renderable , 1: setRenderable  } = (0,external_react_.useState)(visible);
    (0,external_react_.useEffect)(()=>{
        const statusClassName = visible ? "enter" : "leave";
        const time = visible ? enterTime : leaveTime;
        if (visible && !renderable) {
            setRenderable(true);
        }
        setClasses(`${name}-${statusClassName}`);
        // set class to active
        const timer = setTimeout(()=>{
            setClasses(`${name}-${statusClassName} ${name}-${statusClassName}-active`);
            clearTimeout(timer);
        }, time);
        // remove classess when animation over
        const clearClassesTimer = setTimeout(()=>{
            if (!visible) {
                setClasses("");
                setRenderable(false);
            }
            clearTimeout(clearClassesTimer);
        }, time + clearTime);
        return ()=>{
            clearTimeout(timer);
            clearTimeout(clearClassesTimer);
        };
    }, [
        visible,
        renderable
    ]);
    if (!/*#__PURE__*/ external_react_default().isValidElement(children) || !renderable) return null;
    return /*#__PURE__*/ external_react_default().cloneElement(children, Object.assign(Object.assign({}, props), {
        // @ts-ignore
        className: `${((_b = children === null || children === void 0 ? void 0 : children.props) === null || _b === void 0 ? void 0 : _b.className) || ""} ${className} ${classes}`
    }));
};
CssTransition.defaultProps = defaultProps;
CssTransition.displayName = "NuiCssTransition";
/* harmony default export */ const css_transition = (CssTransition);

;// CONCATENATED MODULE: ../core/components/use-scale/scale-context.ts

const ScalePropKeys = [
    "width",
    "height",
    "padding",
    "margin",
    "w",
    "h",
    "paddingLeft",
    "paddingRight",
    "paddingTop",
    "paddingBottom",
    "pl",
    "pr",
    "pt",
    "pb",
    "marginLeft",
    "marginRight",
    "marginTop",
    "marginBottom",
    "ml",
    "mr",
    "mt",
    "mb",
    "px",
    "py",
    "mx",
    "my",
    "fs",
    "fw",
    "unit",
    "scale", 
];
const defaultDynamicLayoutPipe = (scale1x)=>{
    return `${scale1x}`;
};
const defaultContext = {
    getScaleProps: ()=>undefined,
    getAllScaleProps: ()=>({}),
    SCALES: {
        pl: defaultDynamicLayoutPipe,
        pr: defaultDynamicLayoutPipe,
        pb: defaultDynamicLayoutPipe,
        pt: defaultDynamicLayoutPipe,
        px: defaultDynamicLayoutPipe,
        py: defaultDynamicLayoutPipe,
        mb: defaultDynamicLayoutPipe,
        ml: defaultDynamicLayoutPipe,
        mr: defaultDynamicLayoutPipe,
        mt: defaultDynamicLayoutPipe,
        mx: defaultDynamicLayoutPipe,
        my: defaultDynamicLayoutPipe,
        width: defaultDynamicLayoutPipe,
        height: defaultDynamicLayoutPipe,
        fs: defaultDynamicLayoutPipe,
        fw: defaultDynamicLayoutPipe
    },
    unit: "16px"
};
const ScaleContext = external_react_default().createContext(defaultContext);
const useScale = ()=>external_react_default().useContext(ScaleContext);

;// CONCATENATED MODULE: ../core/components/use-scale/utils.ts

const generateGetScaleProps = (props)=>{
    const getScaleProps = (keyOrKeys)=>{
        if (!Array.isArray(keyOrKeys)) return props[keyOrKeys];
        let value = undefined;
        for (const key of keyOrKeys){
            const currentValue = props[key];
            if (typeof currentValue !== "undefined") {
                value = currentValue;
            }
        }
        return value;
    };
    return getScaleProps;
};
const generateGetAllScaleProps = (props)=>{
    const getAllScaleProps = ()=>{
        let scaleProps = {};
        for (const key of ScalePropKeys){
            const value = props[key];
            if (typeof value !== "undefined") {
                scaleProps[key] = value;
            }
        }
        return scaleProps;
    };
    return getAllScaleProps;
};

;// CONCATENATED MODULE: ../core/components/use-scale/with-scale.tsx

var with_scale_rest = undefined && undefined.__rest || function(s, e) {
    var t = {};
    for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") for(var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++){
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
};




const reduceScaleCoefficient = (scale)=>{
    if (scale === 1) return scale;
    const diff = Math.abs((scale - 1) / 2);
    return scale > 1 ? 1 + diff : 1 - diff;
};
const withScale = (Render)=>{
    const ScaleFC = /*#__PURE__*/ (0,external_react_.forwardRef)((_a, ref)=>{
        var _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3, _4, _5, _6, _7, _8;
        var { children  } = _a, props = with_scale_rest(_a, [
            "children"
        ]);
        const { paddingLeft , pl , paddingRight , pr , paddingTop , pt , paddingBottom , pb , marginTop , mt , marginRight , mr , marginBottom , mb , marginLeft , ml , px , py , mx , my , width , height , fs , fw , w , h , margin , padding , unit ="16px" , scale =1  } = props, innerProps = with_scale_rest(props, [
            "paddingLeft",
            "pl",
            "paddingRight",
            "pr",
            "paddingTop",
            "pt",
            "paddingBottom",
            "pb",
            "marginTop",
            "mt",
            "marginRight",
            "mr",
            "marginBottom",
            "mb",
            "marginLeft",
            "ml",
            "px",
            "py",
            "mx",
            "my",
            "width",
            "height",
            "fs",
            "fw",
            "w",
            "h",
            "margin",
            "padding",
            "unit",
            "scale"
        ]);
        const makeScaleHandler = (attrValue)=>(scale1x, defaultValue)=>{
                if (scale1x === 0) {
                    scale1x = 1;
                    defaultValue = defaultValue || 0;
                }
                const factor = reduceScaleCoefficient(scale) * scale1x;
                if (typeof attrValue === "undefined") {
                    if (typeof defaultValue !== "undefined") return `${defaultValue}`;
                    return `calc(${factor} * ${unit})`;
                }
                if (!isCSSNumberValue(attrValue)) return `${attrValue}`;
                const customFactor = factor * Number(attrValue);
                return `calc(${customFactor} * ${unit})`;
            };
        const value = {
            unit: unit,
            SCALES: {
                pt: makeScaleHandler((_c = (_b = paddingTop !== null && paddingTop !== void 0 ? paddingTop : pt) !== null && _b !== void 0 ? _b : py) !== null && _c !== void 0 ? _c : padding),
                pr: makeScaleHandler((_e = (_d = paddingRight !== null && paddingRight !== void 0 ? paddingRight : pr) !== null && _d !== void 0 ? _d : px) !== null && _e !== void 0 ? _e : padding),
                pb: makeScaleHandler((_g = (_f = paddingBottom !== null && paddingBottom !== void 0 ? paddingBottom : pb) !== null && _f !== void 0 ? _f : py) !== null && _g !== void 0 ? _g : padding),
                pl: makeScaleHandler((_j = (_h = paddingLeft !== null && paddingLeft !== void 0 ? paddingLeft : pl) !== null && _h !== void 0 ? _h : px) !== null && _j !== void 0 ? _j : padding),
                px: makeScaleHandler((_o = (_m = (_l = (_k = px !== null && px !== void 0 ? px : paddingLeft) !== null && _k !== void 0 ? _k : paddingRight) !== null && _l !== void 0 ? _l : pl) !== null && _m !== void 0 ? _m : pr) !== null && _o !== void 0 ? _o : padding),
                py: makeScaleHandler((_s = (_r = (_q = (_p = py !== null && py !== void 0 ? py : paddingTop) !== null && _p !== void 0 ? _p : paddingBottom) !== null && _q !== void 0 ? _q : pt) !== null && _r !== void 0 ? _r : pb) !== null && _s !== void 0 ? _s : padding),
                mt: makeScaleHandler((_u = (_t = marginTop !== null && marginTop !== void 0 ? marginTop : mt) !== null && _t !== void 0 ? _t : my) !== null && _u !== void 0 ? _u : margin),
                mr: makeScaleHandler((_w = (_v = marginRight !== null && marginRight !== void 0 ? marginRight : mr) !== null && _v !== void 0 ? _v : mx) !== null && _w !== void 0 ? _w : margin),
                mb: makeScaleHandler((_y = (_x = marginBottom !== null && marginBottom !== void 0 ? marginBottom : mb) !== null && _x !== void 0 ? _x : my) !== null && _y !== void 0 ? _y : margin),
                ml: makeScaleHandler((_0 = (_z = marginLeft !== null && marginLeft !== void 0 ? marginLeft : ml) !== null && _z !== void 0 ? _z : mx) !== null && _0 !== void 0 ? _0 : margin),
                mx: makeScaleHandler((_4 = (_3 = (_2 = (_1 = mx !== null && mx !== void 0 ? mx : marginLeft) !== null && _1 !== void 0 ? _1 : marginRight) !== null && _2 !== void 0 ? _2 : ml) !== null && _3 !== void 0 ? _3 : mr) !== null && _4 !== void 0 ? _4 : margin),
                my: makeScaleHandler((_8 = (_7 = (_6 = (_5 = my !== null && my !== void 0 ? my : marginTop) !== null && _5 !== void 0 ? _5 : marginBottom) !== null && _6 !== void 0 ? _6 : mt) !== null && _7 !== void 0 ? _7 : mb) !== null && _8 !== void 0 ? _8 : margin),
                width: makeScaleHandler(width !== null && width !== void 0 ? width : w),
                height: makeScaleHandler(height !== null && height !== void 0 ? height : h),
                fs: makeScaleHandler(fs),
                fw: makeScaleHandler(fw)
            },
            getScaleProps: generateGetScaleProps(props),
            getAllScaleProps: generateGetAllScaleProps(props)
        };
        return /*#__PURE__*/ jsx_runtime_.jsx(ScaleContext.Provider, {
            value: value,
            children: /*#__PURE__*/ jsx_runtime_.jsx(// @ts-ignore
            Render, {
                ...innerProps,
                ref: ref,
                children: children
            })
        });
    });
    ScaleFC.displayName = `Scale${Render.displayName || "Wrapper"}`;
    return ScaleFC;
};
/* harmony default export */ const with_scale = (withScale);

;// CONCATENATED MODULE: ../core/components/use-scale/index.ts




/* harmony default export */ const use_scale = (useScale);


;// CONCATENATED MODULE: ../core/components/button/button.drip.tsx



const button_drip_defaultProps = {
    x: 0,
    y: 0
};
const ButtonDrip = ({ x , y , color , onCompleted ,  })=>{
    const dripRef = (0,external_react_.useRef)(null);
    /* istanbul ignore next */ const top = Number.isNaN(+y) ? 0 : y - 10;
    /* istanbul ignore next */ const left = Number.isNaN(+x) ? 0 : x - 10;
    (0,external_react_.useEffect)(()=>{
        /* istanbul ignore next */ if (!dripRef.current) return;
        dripRef.current.addEventListener("animationend", onCompleted);
        return ()=>{
            /* istanbul ignore next */ if (!dripRef.current) return;
            dripRef.current.removeEventListener("animationend", onCompleted);
        };
    });
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        ref: dripRef,
        className: "jsx-1ae13353f7936269" + " " + "drip",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                width: "20",
                height: "20",
                viewBox: "0 0 20 20",
                style: {
                    top,
                    left
                },
                className: "jsx-1ae13353f7936269",
                children: /*#__PURE__*/ jsx_runtime_.jsx("g", {
                    stroke: "none",
                    strokeWidth: "1",
                    fill: "none",
                    fillRule: "evenodd",
                    className: "jsx-1ae13353f7936269",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("g", {
                        fill: color,
                        className: "jsx-1ae13353f7936269",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("rect", {
                            width: "100%",
                            height: "100%",
                            rx: "10",
                            className: "jsx-1ae13353f7936269"
                        })
                    })
                })
            }),
            jsx_runtime_.jsx((style_default()), {
                id: "1ae13353f7936269",
                children: ".drip.jsx-1ae13353f7936269{position:absolute;left:0;right:0;top:0;bottom:0}svg.jsx-1ae13353f7936269{position:absolute;-webkit-animation:350ms ease-in expand;-moz-animation:350ms ease-in expand;-o-animation:350ms ease-in expand;animation:350ms ease-in expand;-webkit-animation-fill-mode:forwards;-moz-animation-fill-mode:forwards;-o-animation-fill-mode:forwards;animation-fill-mode:forwards;width:1rem;height:1rem}@-webkit-keyframes expand{0%{opacity:0;-webkit-transform:scale(1);transform:scale(1)}30%{opacity:1}80%{opacity:.5}100%{-webkit-transform:scale(28);transform:scale(28);opacity:0}}@-moz-keyframes expand{0%{opacity:0;-moz-transform:scale(1);transform:scale(1)}30%{opacity:1}80%{opacity:.5}100%{-moz-transform:scale(28);transform:scale(28);opacity:0}}@-o-keyframes expand{0%{opacity:0;-o-transform:scale(1);transform:scale(1)}30%{opacity:1}80%{opacity:.5}100%{-o-transform:scale(28);transform:scale(28);opacity:0}}@keyframes expand{0%{opacity:0;-webkit-transform:scale(1);-moz-transform:scale(1);-o-transform:scale(1);transform:scale(1)}30%{opacity:1}80%{opacity:.5}100%{-webkit-transform:scale(28);-moz-transform:scale(28);-o-transform:scale(28);transform:scale(28);opacity:0}}"
            })
        ]
    });
};
ButtonDrip.defaultProps = button_drip_defaultProps;
ButtonDrip.displayName = "NuiButtonDrip";
/* harmony default export */ const button_drip = (ButtonDrip);

;// CONCATENATED MODULE: ../core/components/use-classes/use-classes.ts
const classObjectToString = (className)=>{
    const keys = Object.keys(className);
    const len = keys.length;
    let str = "";
    for(let index = 0; index < len; index++){
        const key = keys[index];
        const val = className[keys[index]];
        if (!val) continue;
        str = str ? `${str} ${String(key)}` : String(key);
    }
    return str;
};
const isObjectClassName = (value)=>typeof value === "object" && !Array.isArray(value);
const useClasses = (...classNames)=>{
    const len = classNames.length;
    let classes = "";
    if (len === 0) return classes;
    for(let index = 0; index < len; index++){
        const val = classNames[index];
        if (!val) continue;
        if (isObjectClassName(val)) {
            classes += ` ${classObjectToString(val)}`;
        } else {
            classes += ` ${String(val).trim()}`;
        }
    }
    return classes.trim();
};
/* harmony default export */ const use_classes = (useClasses);

;// CONCATENATED MODULE: ../core/components/use-classes/index.ts

/* harmony default export */ const components_use_classes = (use_classes);

;// CONCATENATED MODULE: ../core/components/loading/loading.tsx


var loading_rest = undefined && undefined.__rest || function(s, e) {
    var t = {};
    for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") for(var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++){
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
};




const loading_defaultProps = {
    type: "default",
    className: "",
    spaceRatio: 1
};
const getIconBgColor = (type, palette, color)=>{
    const colors = {
        default: palette.gray700.name,
        secondary: palette.secondary.name,
        success: palette.success.name,
        warning: palette.warning.name,
        error: palette.error.name
    };
    return color ? color : colors[type];
};
const LoadingComponent = (_a)=>{
    var { children , type , color , className , spaceRatio  } = _a, props = loading_rest(_a, [
        "children",
        "type",
        "color",
        "className",
        "spaceRatio"
    ]);
    const { SCALES  } = use_scale();
    const classes = components_use_classes("loading-container", className);
    const bgColor = (0,external_react_.useMemo)(()=>getIconBgColor(type, presets/* Theme.palette */.Q.palette, color), [
        type,
        presets/* Theme.palette */.Q.palette,
        color
    ]);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        ...props,
        className: style_default().dynamic([
            [
                "50f22ec782bb4a69",
                [
                    SCALES.fs(1),
                    SCALES.width(1, "100%"),
                    SCALES.height(1, "100%"),
                    SCALES.pt(0),
                    SCALES.pr(0),
                    SCALES.pb(0),
                    SCALES.pl(0),
                    SCALES.mt(0),
                    SCALES.mr(0),
                    SCALES.mb(0),
                    SCALES.ml(0),
                    presets/* Theme.palette.gray500.name */.Q.palette.gray500.name,
                    bgColor,
                    spaceRatio
                ]
            ]
        ]) + " " + (props && props.className != null && props.className || classes || ""),
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                className: style_default().dynamic([
                    [
                        "50f22ec782bb4a69",
                        [
                            SCALES.fs(1),
                            SCALES.width(1, "100%"),
                            SCALES.height(1, "100%"),
                            SCALES.pt(0),
                            SCALES.pr(0),
                            SCALES.pb(0),
                            SCALES.pl(0),
                            SCALES.mt(0),
                            SCALES.mr(0),
                            SCALES.mb(0),
                            SCALES.ml(0),
                            presets/* Theme.palette.gray500.name */.Q.palette.gray500.name,
                            bgColor,
                            spaceRatio
                        ]
                    ]
                ]) + " " + "loading",
                children: [
                    children && /*#__PURE__*/ jsx_runtime_.jsx("label", {
                        className: style_default().dynamic([
                            [
                                "50f22ec782bb4a69",
                                [
                                    SCALES.fs(1),
                                    SCALES.width(1, "100%"),
                                    SCALES.height(1, "100%"),
                                    SCALES.pt(0),
                                    SCALES.pr(0),
                                    SCALES.pb(0),
                                    SCALES.pl(0),
                                    SCALES.mt(0),
                                    SCALES.mr(0),
                                    SCALES.mb(0),
                                    SCALES.ml(0),
                                    presets/* Theme.palette.gray500.name */.Q.palette.gray500.name,
                                    bgColor,
                                    spaceRatio
                                ]
                            ]
                        ]),
                        children: children
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("i", {
                        className: style_default().dynamic([
                            [
                                "50f22ec782bb4a69",
                                [
                                    SCALES.fs(1),
                                    SCALES.width(1, "100%"),
                                    SCALES.height(1, "100%"),
                                    SCALES.pt(0),
                                    SCALES.pr(0),
                                    SCALES.pb(0),
                                    SCALES.pl(0),
                                    SCALES.mt(0),
                                    SCALES.mr(0),
                                    SCALES.mb(0),
                                    SCALES.ml(0),
                                    presets/* Theme.palette.gray500.name */.Q.palette.gray500.name,
                                    bgColor,
                                    spaceRatio
                                ]
                            ]
                        ])
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("i", {
                        className: style_default().dynamic([
                            [
                                "50f22ec782bb4a69",
                                [
                                    SCALES.fs(1),
                                    SCALES.width(1, "100%"),
                                    SCALES.height(1, "100%"),
                                    SCALES.pt(0),
                                    SCALES.pr(0),
                                    SCALES.pb(0),
                                    SCALES.pl(0),
                                    SCALES.mt(0),
                                    SCALES.mr(0),
                                    SCALES.mb(0),
                                    SCALES.ml(0),
                                    presets/* Theme.palette.gray500.name */.Q.palette.gray500.name,
                                    bgColor,
                                    spaceRatio
                                ]
                            ]
                        ])
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("i", {
                        className: style_default().dynamic([
                            [
                                "50f22ec782bb4a69",
                                [
                                    SCALES.fs(1),
                                    SCALES.width(1, "100%"),
                                    SCALES.height(1, "100%"),
                                    SCALES.pt(0),
                                    SCALES.pr(0),
                                    SCALES.pb(0),
                                    SCALES.pl(0),
                                    SCALES.mt(0),
                                    SCALES.mr(0),
                                    SCALES.mb(0),
                                    SCALES.ml(0),
                                    presets/* Theme.palette.gray500.name */.Q.palette.gray500.name,
                                    bgColor,
                                    spaceRatio
                                ]
                            ]
                        ])
                    })
                ]
            }),
            jsx_runtime_.jsx((style_default()), {
                id: "50f22ec782bb4a69",
                dynamic: [
                    SCALES.fs(1),
                    SCALES.width(1, "100%"),
                    SCALES.height(1, "100%"),
                    SCALES.pt(0),
                    SCALES.pr(0),
                    SCALES.pb(0),
                    SCALES.pl(0),
                    SCALES.mt(0),
                    SCALES.mr(0),
                    SCALES.mb(0),
                    SCALES.ml(0),
                    presets/* Theme.palette.gray500.name */.Q.palette.gray500.name,
                    bgColor,
                    spaceRatio
                ],
                children: `.loading-container.__jsx-style-dynamic-selector{display:-webkit-inline-box;display:-webkit-inline-flex;display:-moz-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;position:relative;font-size:${SCALES.fs(1)};width:${SCALES.width(1, "100%")};height:${SCALES.height(1, "100%")};min-height:1em;padding:${SCALES.pt(0)} ${SCALES.pr(0)} ${SCALES.pb(0)} ${SCALES.pl(0)};margin:${SCALES.mt(0)} ${SCALES.mr(0)} ${SCALES.mb(0)} ${SCALES.ml(0)}}label.__jsx-style-dynamic-selector{margin-right:.5em;color:${presets/* Theme.palette.gray500.name */.Q.palette.gray500.name};line-height:1}label.__jsx-style-dynamic-selector *{margin:0}.loading.__jsx-style-dynamic-selector{position:absolute;top:50%;left:50%;width:100%;height:100%;-webkit-transform:translate(-50%,-50%);-moz-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);-o-transform:translate(-50%,-50%);transform:translate(-50%,-50%);display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;background-color:transparent;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}i.__jsx-style-dynamic-selector{width:.25em;height:.25em;-webkit-border-radius:50%;-moz-border-radius:50%;border-radius:50%;background-color:${bgColor};margin:0 -webkit-calc(0.25em / 2 * ${spaceRatio});margin:0 -moz-calc(0.25em / 2 * ${spaceRatio});margin:0 calc(0.25em / 2 * ${spaceRatio});display:inline-block;-webkit-animation:loading-blink 1.4s infinite both;-moz-animation:loading-blink 1.4s infinite both;-o-animation:loading-blink 1.4s infinite both;animation:loading-blink 1.4s infinite both}i.__jsx-style-dynamic-selector:nth-child(2){-webkit-animation-delay:.2s;-moz-animation-delay:.2s;-o-animation-delay:.2s;animation-delay:.2s}i.__jsx-style-dynamic-selector:nth-child(3){-webkit-animation-delay:.4s;-moz-animation-delay:.4s;-o-animation-delay:.4s;animation-delay:.4s}@-webkit-keyframes loading-blink{0%{opacity:.2}20%{opacity:1}100%{opacity:.2}}@-moz-keyframes loading-blink{0%{opacity:.2}20%{opacity:1}100%{opacity:.2}}@-o-keyframes loading-blink{0%{opacity:.2}20%{opacity:1}100%{opacity:.2}}@keyframes loading-blink{0%{opacity:.2}20%{opacity:1}100%{opacity:.2}}`
            })
        ]
    });
};
LoadingComponent.defaultProps = loading_defaultProps;
LoadingComponent.displayName = "NuiLoading";
const Loading = with_scale(LoadingComponent);
/* harmony default export */ const loading = (Loading);

;// CONCATENATED MODULE: ../core/components/loading/index.ts

/* harmony default export */ const components_loading = (loading);

;// CONCATENATED MODULE: ../core/components/button/button-loading.tsx




const ButtonLoading = ({ color  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "jsx-c1427bdf74aadfd7" + " " + "btn-loading",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(components_loading, {
                color: color
            }),
            jsx_runtime_.jsx((style_default()), {
                id: "c1427bdf74aadfd7",
                children: ".btn-loading.jsx-c1427bdf74aadfd7{position:absolute;top:0;left:0;right:0;bottom:0;z-index:2;background-color:var(--nui-button-bg)}"
            })
        ]
    });
};
ButtonLoading.displayName = "NuiButtonLoading";
/* harmony default export */ const button_loading = (ButtonLoading);

;// CONCATENATED MODULE: ../core/components/button/button-icon.tsx


var button_icon_rest = undefined && undefined.__rest || function(s, e) {
    var t = {};
    for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") for(var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++){
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
};


const button_icon_defaultProps = {
    isRight: false,
    className: ""
};
const ButtonIcon = (_a)=>{
    var { isRight , isSingle , children , className  } = _a, props = button_icon_rest(_a, [
        "isRight",
        "isSingle",
        "children",
        "className"
    ]);
    const classes = components_use_classes("icon", {
        right: isRight,
        single: isSingle
    }, className);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
        ...props,
        className: "jsx-80eeaab46d34f8fb" + " " + (props && props.className != null && props.className || classes || ""),
        children: [
            children,
            jsx_runtime_.jsx((style_default()), {
                id: "80eeaab46d34f8fb",
                children: ".icon.jsx-80eeaab46d34f8fb{position:absolute;left:var(--nui-button-icon-padding);right:auto;top:50%;-webkit-transform:translateY(-50%);-moz-transform:translateY(-50%);-ms-transform:translateY(-50%);-o-transform:translateY(-50%);transform:translateY(-50%);display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;color:var(--nui-button-color);z-index:1}.right.jsx-80eeaab46d34f8fb{right:var(--nui-button-icon-padding);left:auto}.icon.jsx-80eeaab46d34f8fb svg{background:transparent;height:-webkit-calc(var(--nui-button-height)/2.35);height:-moz-calc(var(--nui-button-height)/2.35);height:calc(var(--nui-button-height)/2.35);width:-webkit-calc(var(--nui-button-height)/2.35);width:-moz-calc(var(--nui-button-height)/2.35);width:calc(var(--nui-button-height)/2.35)}.single.jsx-80eeaab46d34f8fb{position:static;-webkit-transform:none;-moz-transform:none;-ms-transform:none;-o-transform:none;transform:none}"
            })
        ]
    });
};
ButtonIcon.defaultProps = button_icon_defaultProps;
ButtonIcon.displayName = "NuiButtonIcon";
/* harmony default export */ const button_icon = (ButtonIcon);

;// CONCATENATED MODULE: ../core/components/button/utils.tsx





const getButtonChildrenWithIcon = (auto, children, icons)=>{
    const { icon , iconRight  } = icons;
    const hasIcon = icon || iconRight;
    const isRight = Boolean(iconRight);
    const paddingForAutoMode = auto ? `calc(var(--nui-button-height) / 2 + var(--nui-button-icon-padding) * .5)` : 0;
    const classes = components_use_classes("text", isRight ? "right" : "left");
    if (!hasIcon) return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "text",
        children: children
    });
    if (external_react_default().Children.count(children) === 0) {
        return /*#__PURE__*/ jsx_runtime_.jsx(button_icon, {
            isRight: isRight,
            isSingle: true,
            children: hasIcon
        });
    }
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(button_icon, {
                isRight: isRight,
                children: hasIcon
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: style_default().dynamic([
                    [
                        "833704f6cfd10052",
                        [
                            paddingForAutoMode,
                            paddingForAutoMode
                        ]
                    ]
                ]) + " " + (classes || ""),
                children: [
                    children,
                    jsx_runtime_.jsx((style_default()), {
                        id: "833704f6cfd10052",
                        dynamic: [
                            paddingForAutoMode,
                            paddingForAutoMode
                        ],
                        children: `.left.__jsx-style-dynamic-selector{padding-left:${paddingForAutoMode}}.right.__jsx-style-dynamic-selector{padding-right:${paddingForAutoMode}}`
                    })
                ]
            })
        ]
    });
};
const filterPropsWithGroup = (props, config)=>{
    if (!config.isButtonGroup) return props;
    return Object.assign(Object.assign({}, props), {
        auto: true,
        shadow: false,
        ghost: config.ghost || props.ghost,
        type: config.type || props.type,
        disabled: config.disabled || props.disabled
    });
};

;// CONCATENATED MODULE: ../core/components/button-group/button-group-context.ts

const button_group_context_defaultContext = {
    isButtonGroup: false,
    disabled: false
};
const ButtonGroupContext = external_react_default().createContext(button_group_context_defaultContext);
const useButtonGroupContext = ()=>external_react_default().useContext(ButtonGroupContext);

;// CONCATENATED MODULE: ../core/components/utils/color.ts
const hexToRgb = (color)=>{
    const fullReg = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    const full = color.replace(fullReg, (_, r, g, b)=>`${r}${r}${g}${g}${b}${b}`);
    const values = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(full);
    if (!values) {
        throw new Error(`Napolke UI: Unsupported ${color} color.`);
    }
    return [
        Number.parseInt(values[1], 16),
        Number.parseInt(values[2], 16),
        Number.parseInt(values[3], 16), 
    ];
};
const colorToRgbValues = (color)=>{
    if (color.charAt(0) === "#") return hexToRgb(color);
    const safeColor = color.replace(/ /g, "");
    const colorType = color.substr(0, 4);
    const regArray = safeColor.match(/\((.+)\)/);
    if (!colorType.startsWith("rgb") || !regArray) {
        console.log(color);
        throw new Error(`Napolke UI: Only support ["RGB", "RGBA", "HEX"] color.`);
    }
    return regArray[1].split(",").map((str)=>Number.parseFloat(str));
};
const addColorAlpha = (color, alpha)=>{
    if (!/^#|rgb|RGB/.test(color)) return color;
    const [r, g, b] = colorToRgbValues(color);
    const safeAlpha = alpha > 1 ? 1 : alpha < 0 ? 0 : alpha;
    return `rgba(${r}, ${g}, ${b}, ${safeAlpha})`;
};

;// CONCATENATED MODULE: ../core/components/button/styles.ts


const getButtonGhostColors = (palette, type)=>{
    const colors = {
        secondary: {
            bg: palette.background.name,
            border: palette.black.name,
            color: palette.black.name
        },
        success: {
            bg: palette.background.name,
            border: palette.success.name,
            color: palette.success.name
        },
        warning: {
            bg: palette.background.name,
            border: palette.warning.name,
            color: palette.warning.name
        },
        error: {
            bg: palette.background.name,
            border: palette.error.name,
            color: palette.error.name
        }
    };
    return colors[type] || null;
};
const getButtonColors = (palette, props)=>{
    const { type , disabled , ghost  } = props;
    const colors = {
        default: {
            bg: palette.background.value,
            border: palette.border.name,
            color: palette.gray500.name
        },
        secondary: {
            bg: palette.black.value,
            border: palette.black.name,
            color: palette.background.name
        },
        success: {
            bg: palette.success.value,
            border: palette.success.name,
            color: palette.white.name
        },
        warning: {
            bg: palette.warning.value,
            border: palette.warning.name,
            color: palette.white.name
        },
        error: {
            bg: palette.error.value,
            border: palette.error.name,
            color: palette.white.name
        },
        market: {
            bg: palette.market.value,
            border: palette.market.name,
            color: palette.white.name
        },
        primary: {
            bg: palette.primary.value,
            border: palette.primary.name,
            color: palette.white.name
        },
        abort: {
            bg: "transparent",
            border: "transparent",
            color: palette.gray500.name
        }
    };
    if (disabled) return {
        bg: palette.gray50.value,
        border: palette.gray200.name,
        color: palette.gray300.name
    };
    /**
     * The '-light' type is the same color as the common type,
     * only hover's color is different.
     * e.g.
     *   Color['success'] === Color['success-light']
     *   Color['warning'] === Color['warning-light']
     */ const withoutLightType = type === null || type === void 0 ? void 0 : type.replace("-light", "");
    const defaultColor = colors.default;
    if (ghost) return getButtonGhostColors(presets/* Theme.palette */.Q.palette, withoutLightType) || defaultColor;
    return colors[withoutLightType] || defaultColor;
};
const getButtonGhostHoverColors = (palette, type)=>{
    const colors = {
        secondary: {
            bg: palette.black.name,
            border: palette.background.name,
            color: palette.background.name
        },
        success: {
            bg: palette.success.name,
            border: palette.background.name,
            color: palette.black.name
        },
        warning: {
            bg: palette.warning.name,
            border: palette.background.name,
            color: palette.white.name
        },
        error: {
            bg: palette.error.name,
            border: palette.background.name,
            color: palette.white.name
        }
    };
    const withoutLightType = type.replace("-light", "");
    return colors[withoutLightType] || null;
};
const getButtonHoverColors = (palette, props)=>{
    const { type , disabled , loading , shadow , ghost  } = props;
    const defaultColor = getButtonColors(palette, props);
    const alphaBackground = addColorAlpha(defaultColor.bg, 0.75);
    const colors = {
        default: {
            bg: palette.background.value,
            border: palette.black.value
        },
        secondary: {
            bg: palette.background.value,
            border: palette.black.value
        },
        success: {
            bg: palette.background.value,
            border: palette.success.value
        },
        warning: {
            bg: palette.background.value,
            border: palette.warning.value
        },
        market: {
            bg: palette.background.value,
            border: palette.market.value
        },
        error: {
            bg: palette.background.value,
            border: palette.error.value
        },
        primary: {
            bg: palette.background.value,
            border: palette.primary.name
        },
        abort: {
            bg: "transparent",
            border: "transparent",
            color: palette.gray500.value
        },
        "secondary-light": Object.assign(Object.assign({}, defaultColor), {
            bg: alphaBackground
        }),
        "success-light": Object.assign(Object.assign({}, defaultColor), {
            bg: alphaBackground
        }),
        "warning-light": Object.assign(Object.assign({}, defaultColor), {
            bg: alphaBackground
        }),
        "error-light": Object.assign(Object.assign({}, defaultColor), {
            bg: alphaBackground
        }),
        "market-light": Object.assign(Object.assign({}, defaultColor), {
            bg: alphaBackground
        })
    };
    if (disabled) return {
        bg: palette.gray50.value,
        border: palette.gray200.value,
        color: palette.gray500.value
    };
    if (loading) return Object.assign(Object.assign({}, defaultColor), {
        color: "transparent"
    });
    if (shadow) return defaultColor;
    const hoverColor = (ghost ? getButtonGhostHoverColors(palette, type) : colors[type]) || colors.default;
    return Object.assign(Object.assign({}, hoverColor), {
        color: hoverColor.color || hoverColor.border
    });
};
const getButtonCursor = (disabled, loading)=>{
    if (disabled) return {
        cursor: "not-allowed",
        events: "auto"
    };
    if (loading) return {
        cursor: "default",
        events: "none"
    };
    return {
        cursor: "pointer",
        events: "auto"
    };
};
const getButtonDripColor = (palette, props)=>{
    const { type  } = props;
    const isLightHover = type.endsWith("light");
    const hoverColors = getButtonHoverColors(palette, props);
    return isLightHover ? addColorAlpha(hoverColors.bg, 0.65) : addColorAlpha(palette.gray200.value, 0.65);
};

;// CONCATENATED MODULE: ../core/components/button/button.tsx


var button_rest = undefined && undefined.__rest || function(s, e) {
    var t = {};
    for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") for(var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++){
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
};









const button_defaultProps = {
    type: "default",
    htmlType: "button",
    ghost: false,
    loading: false,
    shadow: false,
    auto: false,
    effect: true,
    disabled: false,
    className: ""
};
const ButtonComponent = /*#__PURE__*/ external_react_default().forwardRef((btnProps, ref)=>{
    const { SCALES  } = use_scale();
    const buttonRef = (0,external_react_.useRef)(null);
    (0,external_react_.useImperativeHandle)(ref, ()=>buttonRef.current);
    const { 0: dripShow , 1: setDripShow  } = (0,external_react_.useState)(false);
    const { 0: dripX , 1: setDripX  } = (0,external_react_.useState)(0);
    const { 0: dripY , 1: setDripY  } = (0,external_react_.useState)(0);
    const groupConfig = useButtonGroupContext();
    const filteredProps = filterPropsWithGroup(btnProps, groupConfig);
    /* eslint-disable @typescript-eslint/no-unused-vars */ const { children , disabled , type , loading , shadow , ghost , effect , onClick , auto , icon , htmlType , iconRight , className  } = filteredProps, props = button_rest(filteredProps, [
        "children",
        "disabled",
        "type",
        "loading",
        "shadow",
        "ghost",
        "effect",
        "onClick",
        "auto",
        "icon",
        "htmlType",
        "iconRight",
        "className"
    ]);
    /* eslint-enable @typescript-eslint/no-unused-vars */ const { bg , border , color  } = (0,external_react_.useMemo)(()=>getButtonColors(presets/* Theme.palette */.Q.palette, filteredProps), [
        presets/* Theme.palette */.Q.palette,
        filteredProps
    ]);
    const hover = (0,external_react_.useMemo)(()=>getButtonHoverColors(presets/* Theme.palette */.Q.palette, filteredProps), [
        presets/* Theme.palette */.Q.palette,
        filteredProps
    ]);
    const { cursor , events  } = (0,external_react_.useMemo)(()=>getButtonCursor(disabled, loading), [
        disabled,
        loading
    ]);
    const dripColor = (0,external_react_.useMemo)(()=>getButtonDripColor(presets/* Theme.palette */.Q.palette, filteredProps), [
        presets/* Theme.palette */.Q.palette,
        filteredProps
    ]);
    /* istanbul ignore next */ const dripCompletedHandle = ()=>{
        setDripShow(false);
        setDripX(0);
        setDripY(0);
    };
    const clickHandler = (event)=>{
        if (disabled || loading) return;
        const showDrip = !shadow && !ghost && effect;
        /* istanbul ignore next */ if (showDrip && buttonRef.current) {
            const rect = buttonRef.current.getBoundingClientRect();
            setDripShow(true);
            setDripX(event.clientX - rect.left);
            setDripY(event.clientY - rect.top);
        }
        onClick && onClick(event);
    };
    const childrenWithIcon = (0,external_react_.useMemo)(()=>getButtonChildrenWithIcon(auto, children, {
            icon,
            iconRight
        }), [
        auto,
        children,
        icon,
        iconRight
    ]);
    const [paddingLeft, paddingRight] = [
        auto ? SCALES.pl(1.15) : SCALES.pl(1.375),
        auto ? SCALES.pr(1.15) : SCALES.pr(1.375), 
    ];
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
        ref: buttonRef,
        type: htmlType,
        disabled: disabled,
        onClick: clickHandler,
        ...props,
        className: style_default().dynamic([
            [
                "9617ee7d86de15d8",
                [
                    SCALES.height(2.5),
                    presets/* Theme.layout.radius.name */.Q.layout.radius.name,
                    SCALES.fs(0.875),
                    color,
                    bg,
                    border,
                    cursor,
                    events,
                    shadow ? presets/* Theme.expressiveness.shadowSmall */.Q.expressiveness.shadowSmall : "none",
                    SCALES.pl(0.727),
                    SCALES.height(2.5),
                    color,
                    bg,
                    auto ? "min-content" : SCALES.width(10.5),
                    auto ? "auto" : "initial",
                    SCALES.height(2.5),
                    SCALES.pt(0),
                    paddingRight,
                    SCALES.pb(0),
                    paddingLeft,
                    SCALES.mt(0),
                    SCALES.mr(0),
                    SCALES.mb(0),
                    SCALES.ml(0),
                    hover.color,
                    hover.color,
                    hover.bg,
                    hover.border,
                    cursor,
                    events,
                    shadow ? presets/* Theme.expressiveness.shadowMedium */.Q.expressiveness.shadowMedium : "none",
                    shadow ? "-1px" : "0px"
                ]
            ]
        ]) + " " + (props && props.className != null && props.className || components_use_classes("btn", className) || ""),
        children: [
            loading && /*#__PURE__*/ jsx_runtime_.jsx(button_loading, {
                color: color
            }),
            childrenWithIcon,
            dripShow && /*#__PURE__*/ jsx_runtime_.jsx(button_drip, {
                x: dripX,
                y: dripY,
                color: dripColor,
                onCompleted: dripCompletedHandle
            }),
            jsx_runtime_.jsx((style_default()), {
                id: "9617ee7d86de15d8",
                dynamic: [
                    SCALES.height(2.5),
                    presets/* Theme.layout.radius.name */.Q.layout.radius.name,
                    SCALES.fs(0.875),
                    color,
                    bg,
                    border,
                    cursor,
                    events,
                    shadow ? presets/* Theme.expressiveness.shadowSmall */.Q.expressiveness.shadowSmall : "none",
                    SCALES.pl(0.727),
                    SCALES.height(2.5),
                    color,
                    bg,
                    auto ? "min-content" : SCALES.width(10.5),
                    auto ? "auto" : "initial",
                    SCALES.height(2.5),
                    SCALES.pt(0),
                    paddingRight,
                    SCALES.pb(0),
                    paddingLeft,
                    SCALES.mt(0),
                    SCALES.mr(0),
                    SCALES.mb(0),
                    SCALES.ml(0),
                    hover.color,
                    hover.color,
                    hover.bg,
                    hover.border,
                    cursor,
                    events,
                    shadow ? presets/* Theme.expressiveness.shadowMedium */.Q.expressiveness.shadowMedium : "none",
                    shadow ? "-1px" : "0px"
                ],
                children: `.btn.__jsx-style-dynamic-selector{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:inline-block;line-height:${SCALES.height(2.5)};-webkit-border-radius:${presets/* Theme.layout.radius.name */.Q.layout.radius.name};-moz-border-radius:${presets/* Theme.layout.radius.name */.Q.layout.radius.name};border-radius:${presets/* Theme.layout.radius.name */.Q.layout.radius.name};font-weight:400;font-size:${SCALES.fs(0.875)};-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;outline:none;text-transform:capitalize;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;text-align:center;white-space:nowrap;-webkit-transition:background-color 200ms ease 0ms,box-shadow 200ms ease 0ms,border 200ms ease 0ms,color 200ms ease 0ms;-moz-transition:background-color 200ms ease 0ms,box-shadow 200ms ease 0ms,border 200ms ease 0ms,color 200ms ease 0ms;-o-transition:background-color 200ms ease 0ms,box-shadow 200ms ease 0ms,border 200ms ease 0ms,color 200ms ease 0ms;transition:background-color 200ms ease 0ms,box-shadow 200ms ease 0ms,border 200ms ease 0ms,color 200ms ease 0ms;position:relative;overflow:hidden;color:${color};background-color:${bg};border:1px solid ${border};cursor:${cursor};pointer-events:${events};-webkit-box-shadow:${shadow ? presets/* Theme.expressiveness.shadowSmall */.Q.expressiveness.shadowSmall : "none"};-moz-box-shadow:${shadow ? presets/* Theme.expressiveness.shadowSmall */.Q.expressiveness.shadowSmall : "none"};box-shadow:${shadow ? presets/* Theme.expressiveness.shadowSmall */.Q.expressiveness.shadowSmall : "none"};--nui-button-icon-padding:${SCALES.pl(0.727)};--nui-button-height:${SCALES.height(2.5)};--nui-button-color:${color};--nui-button-bg:${bg};min-width:${auto ? "min-content" : SCALES.width(10.5)};width:${auto ? "auto" : "initial"};height:${SCALES.height(2.5)};padding:${SCALES.pt(0)} ${paddingRight} ${SCALES.pb(0)} ${paddingLeft};margin:${SCALES.mt(0)} ${SCALES.mr(0)} ${SCALES.mb(0)} ${SCALES.ml(0)}}.btn.__jsx-style-dynamic-selector:hover,.btn.__jsx-style-dynamic-selector:focus{color:${hover.color};--nui-button-color:${hover.color};background-color:${hover.bg};border-color:${hover.border};cursor:${cursor};pointer-events:${events};-webkit-box-shadow:${shadow ? presets/* Theme.expressiveness.shadowMedium */.Q.expressiveness.shadowMedium : "none"};-moz-box-shadow:${shadow ? presets/* Theme.expressiveness.shadowMedium */.Q.expressiveness.shadowMedium : "none"};box-shadow:${shadow ? presets/* Theme.expressiveness.shadowMedium */.Q.expressiveness.shadowMedium : "none"};-webkit-transform:translate3d(0px,${shadow ? "-1px" : "0px"},0px);-moz-transform:translate3d(0px,${shadow ? "-1px" : "0px"},0px);transform:translate3d(0px,${shadow ? "-1px" : "0px"},0px)}.btn.__jsx-style-dynamic-selector .text{position:relative;z-index:1;display:-webkit-inline-box;display:-webkit-inline-flex;display:-moz-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;text-align:center;line-height:inherit;top:-1px}.btn.__jsx-style-dynamic-selector .text p,.btn.__jsx-style-dynamic-selector .text pre,.btn.__jsx-style-dynamic-selector .text div{margin:0}`
            })
        ]
    });
});
ButtonComponent.defaultProps = button_defaultProps;
ButtonComponent.displayName = "NuiButton";
const Button = with_scale(ButtonComponent);
/* harmony default export */ const button_button = (Button);

;// CONCATENATED MODULE: ../core/components/button/index.ts

/* harmony default export */ const components_button = (button_button);

;// CONCATENATED MODULE: ../core/components/utils/prop-types.ts
const tuple = (...args)=>args;
const tupleNumber = (...args)=>args;
const buttonTypes = tuple("default", "primary", "secondary", "success", "warning", "error", "abort", "market", "market-light", "secondary-light", "success-light", "warning-light", "error-light");
const normalTypes = tuple("default", "secondary", "success", "warning", "error");
const snippetTypes = tuple("default", "secondary", "success", "warning", "error", "dark", "lite");
const cardTypes = tuple("default", "secondary", "success", "warning", "error", "dark", "lite", "alert", "purple", "violet", "cyan");
const copyTypes = tuple("default", "silent", "prevent");
const triggerTypes = tuple("hover", "click");
const placement = tuple("top", "topStart", "topEnd", "left", "leftStart", "leftEnd", "bottom", "bottomStart", "bottomEnd", "right", "rightStart", "rightEnd");
const dividerAlign = tuple("start", "center", "end", "left", "right");

;// CONCATENATED MODULE: ../core/components/use-toasts/helpers.tsx




const makeToastActions = (actions, cancelHandle)=>{
    const handler = (event, userHandler)=>{
        userHandler && userHandler(event, cancelHandle);
    };
    if (!actions || !actions.length) return null;
    return actions.map((action, index)=>/*#__PURE__*/ jsx_runtime_.jsx(components_button, {
            auto: true,
            scale: 1 / 3,
            fs: "13px",
            type: action.passive ? "default" : "secondary",
            onClick: (event)=>handler(event, action.handler),
            children: action.name
        }, `action-${index}`));
};
const getColors = (palette, type)=>{
    const colors = {
        default: palette.background.name,
        secondary: palette.secondary.name,
        success: palette.success.name,
        warning: palette.warning.name,
        error: palette.error.name
    };
    const isDefault = !type || type === "default";
    if (isDefault) return {
        bgColor: colors.default,
        color: palette.black.name
    };
    /**
     * Prevent main color change in special types.
     * The color will only follow the theme when it is in the default type.
     */ return {
        bgColor: colors[type],
        color: "white"
    };
};
const toastPlacement = tuple("topLeft", "topRight", "bottomLeft", "bottomRight");
const isTopPlacement = (placement)=>`${placement}`.toLowerCase().startsWith("top");
const isLeftPlacement = (placement)=>`${placement}`.toLowerCase().endsWith("left");
const getTranslateByPlacement = (placement)=>{
    const translateInByPlacement = {
        topLeft: "translate(-60px, -60px)",
        topRight: "translate(60px, -60px)",
        bottomLeft: "translate(-60px, 60px)",
        bottomRight: "translate(60px, 60px)"
    };
    const translateOutByPlacement = {
        topLeft: "translate(-50px, 15px) scale(0.85)",
        topRight: "translate(50px, 15px) scale(0.85)",
        bottomLeft: "translate(-50px, -15px) scale(0.85)",
        bottomRight: "translate(50px, -15px) scale(0.85)"
    };
    return {
        enter: translateInByPlacement[placement],
        leave: translateOutByPlacement[placement]
    };
};

;// CONCATENATED MODULE: ../core/components/use-toasts/toast-item.tsx






const ToastItem = /*#__PURE__*/ external_react_default().memo(({ toast , layout  })=>{
    const { color , bgColor  } = (0,external_react_.useMemo)(()=>getColors(presets/* Theme.palette */.Q.palette, toast.type), [
        presets/* Theme.palette */.Q.palette,
        toast.type
    ]);
    const isReactNode = typeof toast.text !== "string";
    const { padding , margin , maxHeight , maxWidth , width , placement  } = layout;
    const { enter , leave  } = (0,external_react_.useMemo)(()=>getTranslateByPlacement(placement), [
        placement
    ]);
    return /*#__PURE__*/ jsx_runtime_.jsx(css_transition, {
        name: "toast",
        visible: toast.visible,
        clearTime: 350,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: style_default().dynamic([
                [
                    "1f67be030ab7bb37",
                    [
                        width,
                        maxWidth,
                        maxHeight,
                        presets/* Theme.palette.black.name */.Q.palette.black.name,
                        bgColor,
                        color,
                        presets/* Theme.layout.radius.name */.Q.layout.radius.name,
                        presets/* Theme.expressiveness.shadowSmall */.Q.expressiveness.shadowSmall,
                        presets/* Theme.layout.gapHalf.name */.Q.layout.gapHalf.name,
                        enter,
                        margin,
                        padding,
                        margin,
                        padding,
                        leave
                    ]
                ]
            ]) + " " + "toast",
            children: [
                isReactNode ? toast.text : /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: style_default().dynamic([
                                [
                                    "1f67be030ab7bb37",
                                    [
                                        width,
                                        maxWidth,
                                        maxHeight,
                                        presets/* Theme.palette.black.name */.Q.palette.black.name,
                                        bgColor,
                                        color,
                                        presets/* Theme.layout.radius.name */.Q.layout.radius.name,
                                        presets/* Theme.expressiveness.shadowSmall */.Q.expressiveness.shadowSmall,
                                        presets/* Theme.layout.gapHalf.name */.Q.layout.gapHalf.name,
                                        enter,
                                        margin,
                                        padding,
                                        margin,
                                        padding,
                                        leave
                                    ]
                                ]
                            ]) + " " + "message",
                            children: toast.text
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: style_default().dynamic([
                                [
                                    "1f67be030ab7bb37",
                                    [
                                        width,
                                        maxWidth,
                                        maxHeight,
                                        presets/* Theme.palette.black.name */.Q.palette.black.name,
                                        bgColor,
                                        color,
                                        presets/* Theme.layout.radius.name */.Q.layout.radius.name,
                                        presets/* Theme.expressiveness.shadowSmall */.Q.expressiveness.shadowSmall,
                                        presets/* Theme.layout.gapHalf.name */.Q.layout.gapHalf.name,
                                        enter,
                                        margin,
                                        padding,
                                        margin,
                                        padding,
                                        leave
                                    ]
                                ]
                            ]) + " " + "action",
                            children: makeToastActions(toast.actions, toast.cancel)
                        })
                    ]
                }),
                jsx_runtime_.jsx((style_default()), {
                    id: "1f67be030ab7bb37",
                    dynamic: [
                        width,
                        maxWidth,
                        maxHeight,
                        presets/* Theme.palette.black.name */.Q.palette.black.name,
                        bgColor,
                        color,
                        presets/* Theme.layout.radius.name */.Q.layout.radius.name,
                        presets/* Theme.expressiveness.shadowSmall */.Q.expressiveness.shadowSmall,
                        presets/* Theme.layout.gapHalf.name */.Q.layout.gapHalf.name,
                        enter,
                        margin,
                        padding,
                        margin,
                        padding,
                        leave
                    ],
                    children: `.toast.__jsx-style-dynamic-selector{width:${width};max-width:${maxWidth};max-height:${maxHeight};display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-moz-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;color:${presets/* Theme.palette.black.name */.Q.palette.black.name};background-color:${bgColor};color:${color};border:0;-webkit-border-radius:${presets/* Theme.layout.radius.name */.Q.layout.radius.name};-moz-border-radius:${presets/* Theme.layout.radius.name */.Q.layout.radius.name};border-radius:${presets/* Theme.layout.radius.name */.Q.layout.radius.name};opacity:1;-webkit-box-shadow:${presets/* Theme.expressiveness.shadowSmall */.Q.expressiveness.shadowSmall};-moz-box-shadow:${presets/* Theme.expressiveness.shadowSmall */.Q.expressiveness.shadowSmall};box-shadow:${presets/* Theme.expressiveness.shadowSmall */.Q.expressiveness.shadowSmall};-webkit-transition:all 350ms cubic-bezier(.1,.2,.1,1);-moz-transition:all 350ms cubic-bezier(.1,.2,.1,1);-o-transition:all 350ms cubic-bezier(.1,.2,.1,1);transition:all 350ms cubic-bezier(.1,.2,.1,1);overflow:hidden}.message.__jsx-style-dynamic-selector{-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;height:100%;font-size:.875em;display:-webkit-box;word-break:break-all;padding-right:${presets/* Theme.layout.gapHalf.name */.Q.layout.gapHalf.name};overflow:hidden;max-height:100%;-o-text-overflow:ellipsis;text-overflow:ellipsis;-webkit-box-orient:vertical;-webkit-line-clamp:2;line-height:1.1rem}.toast-enter.__jsx-style-dynamic-selector{opacity:0;height:0;padding:0;margin:0;-webkit-transform:${enter};-moz-transform:${enter};-ms-transform:${enter};-o-transform:${enter};transform:${enter}}.toast-enter-active.__jsx-style-dynamic-selector{opacity:1;height:auto;margin:${margin};padding:${padding};-webkit-transform:translate(0,0);-moz-transform:translate(0,0);-ms-transform:translate(0,0);-o-transform:translate(0,0);transform:translate(0,0)}.toast-leave.__jsx-style-dynamic-selector{opacity:1;-webkit-transform:translate(0,0);-moz-transform:translate(0,0);-ms-transform:translate(0,0);-o-transform:translate(0,0);transform:translate(0,0);height:auto;margin:${margin};padding:${padding}}.toast-leave-active.__jsx-style-dynamic-selector{opacity:0;-webkit-transform:${leave};-moz-transform:${leave};-ms-transform:${leave};-o-transform:${leave};transform:${leave}}`
                })
            ]
        }, toast.id)
    });
});
/* harmony default export */ const toast_item = (ToastItem);

;// CONCATENATED MODULE: ../core/components/use-toasts/toast-container.tsx











const ToastContainer = ()=>{
    const portal = use_portal("toast");
    const [, setHovering, hoveringRef] = utils_use_current_state(false);
    const { toasts , updateToasts , toastLayout , lastUpdateToastId  } = use_napolke_ui_context_useNapolkeUIContext();
    const memoizedLayout = (0,external_react_.useMemo)(()=>toastLayout, [
        toastLayout
    ]);
    const toastElements = (0,external_react_.useMemo)(()=>toasts.map((toast)=>/*#__PURE__*/ jsx_runtime_.jsx(toast_item, {
                toast: toast,
                layout: memoizedLayout
            }, toast._internalIdent)), [
        toasts,
        memoizedLayout
    ]);
    const classNames = (0,external_react_.useMemo)(()=>components_use_classes("toasts", {
            top: isTopPlacement(toastLayout.placement),
            left: isLeftPlacement(toastLayout.placement)
        }), [
        memoizedLayout
    ]);
    const hoverHandler = (isHovering)=>{
        setHovering(isHovering);
        if (isHovering) {
            return updateToasts((last)=>last.map((toast)=>{
                    if (!toast.visible) return toast;
                    toast._timeout && window.clearTimeout(toast._timeout);
                    return Object.assign(Object.assign({}, toast), {
                        timeout: null
                    });
                }));
        }
        updateToasts((last)=>last.map((toast, index)=>{
                if (!toast.visible) return toast;
                toast._timeout && window.clearTimeout(toast._timeout);
                return Object.assign(Object.assign({}, toast), {
                    _timeout: (()=>{
                        const timer = window.setTimeout(()=>{
                            toast.cancel();
                            window.clearTimeout(timer);
                        }, toast.delay + index * 100);
                        return timer;
                    })()
                });
            }));
    };
    (0,external_react_.useEffect)(()=>{
        const index = toasts.findIndex((r)=>r._internalIdent === lastUpdateToastId);
        const toast = toasts[index];
        if (!toast || toast.visible || !hoveringRef.current) return;
        const hasVisible = toasts.find((r, i)=>i < index && r.visible);
        if (hasVisible || !hoveringRef.current) return;
        hoverHandler(false);
    }, [
        toasts,
        lastUpdateToastId
    ]);
    (0,external_react_.useEffect)(()=>{
        let timeout = null;
        const timer = window.setInterval(()=>{
            if (toasts.length === 0) return;
            timeout = window.setTimeout(()=>{
                const allInvisible = !toasts.find((r)=>r.visible);
                allInvisible && updateToasts(()=>[]);
                timeout && clearTimeout(timeout);
            }, 350);
        }, 5000);
        return ()=>{
            timer && clearInterval(timer);
            timeout && clearTimeout(timeout);
        };
    }, [
        toasts
    ]);
    if (!portal) return null;
    if (!toasts || toasts.length === 0) return null;
    return /*#__PURE__*/ (0,external_react_dom_.createPortal)(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        onMouseEnter: ()=>hoverHandler(true),
        onMouseLeave: ()=>hoverHandler(false),
        className: style_default().dynamic([
            [
                "373d89312bda31be",
                [
                    presets/* Theme.layout.gap.name */.Q.layout.gap.name,
                    presets/* Theme.layout.gap.name */.Q.layout.gap.name,
                    presets/* Theme.layout.gap.name */.Q.layout.gap.name,
                    presets/* Theme.layout.gap.name */.Q.layout.gap.name
                ]
            ]
        ]) + " " + (classNames || ""),
        children: [
            toastElements,
            jsx_runtime_.jsx((style_default()), {
                id: "373d89312bda31be",
                dynamic: [
                    presets/* Theme.layout.gap.name */.Q.layout.gap.name,
                    presets/* Theme.layout.gap.name */.Q.layout.gap.name,
                    presets/* Theme.layout.gap.name */.Q.layout.gap.name,
                    presets/* Theme.layout.gap.name */.Q.layout.gap.name
                ],
                children: `.toasts.__jsx-style-dynamic-selector{position:fixed;width:auto;max-width:100%;right:${presets/* Theme.layout.gap.name */.Q.layout.gap.name};bottom:${presets/* Theme.layout.gap.name */.Q.layout.gap.name};z-index:2000;-webkit-transition:all 400ms ease;-moz-transition:all 400ms ease;-o-transition:all 400ms ease;transition:all 400ms ease;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.top.__jsx-style-dynamic-selector{bottom:unset;-webkit-box-orient:vertical;-webkit-box-direction:reverse;-webkit-flex-direction:column-reverse;-moz-box-orient:vertical;-moz-box-direction:reverse;-ms-flex-direction:column-reverse;flex-direction:column-reverse;top:${presets/* Theme.layout.gap.name */.Q.layout.gap.name}}.left.__jsx-style-dynamic-selector{right:unset;left:${presets/* Theme.layout.gap.name */.Q.layout.gap.name}}`
            })
        ]
    }), portal);
};
/* harmony default export */ const toast_container = (ToastContainer);

;// CONCATENATED MODULE: ../core/components/napolke-providers/napolke-provider.tsx






const NapolkeProvider = ({ children ,  })=>{
    const { 0: lastUpdateToastId , 1: setLastUpdateToastId  } = (0,external_react_.useState)(null);
    const [toasts, setToasts, toastsRef] = utils_use_current_state([]);
    const [toastLayout, setToastLayout, toastLayoutRef] = utils_use_current_state(use_napolke_ui_context_defaultToastLayout);
    const updateToasts = (fn)=>{
        const nextToasts = fn(toastsRef.current);
        setToasts(nextToasts);
    };
    const updateToastLayout = (fn)=>{
        const nextLayout = fn(toastLayoutRef.current);
        setToastLayout(nextLayout);
    };
    const updateLastToastId = (fn)=>{
        setLastUpdateToastId(fn());
    };
    const initialValue = (0,external_react_.useMemo)(()=>({
            toasts,
            toastLayout,
            updateToasts,
            lastUpdateToastId,
            updateToastLayout,
            updateLastToastId
        }), [
        toasts,
        toastLayout,
        lastUpdateToastId
    ]);
    return /*#__PURE__*/ jsx_runtime_.jsx(NapolkeUIContent.Provider, {
        value: initialValue,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(theme_provider, {
            children: [
                children,
                /*#__PURE__*/ jsx_runtime_.jsx(toast_container, {})
            ]
        })
    });
};
/* harmony default export */ const napolke_provider = (NapolkeProvider);

;// CONCATENATED MODULE: ../core/components/napolke-providers/index.ts

/* harmony default export */ const napolke_providers = (napolke_provider);

;// CONCATENATED MODULE: ../core/components/spacer/spacer.tsx


var spacer_rest = undefined && undefined.__rest || function(s, e) {
    var t = {};
    for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") for(var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++){
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
};


const spacer_defaultProps = {
    inline: false,
    className: ""
};
const SpacerComponent = (_a)=>{
    var { inline , className  } = _a, props = spacer_rest(_a, [
        "inline",
        "className"
    ]);
    const { SCALES  } = use_scale();
    return /*#__PURE__*/ jsx_runtime_.jsx("span", {
        ...props,
        className: style_default().dynamic([
            [
                "562ea5d7ae6bc51d",
                [
                    inline ? "inline-block" : "block",
                    SCALES.width(1),
                    SCALES.height(1),
                    SCALES.pt(0),
                    SCALES.pr(0),
                    SCALES.pb(0),
                    SCALES.pl(0),
                    SCALES.mt(0),
                    SCALES.mr(0),
                    SCALES.mb(0),
                    SCALES.ml(0)
                ]
            ]
        ]) + " " + (props && props.className != null && props.className || className || ""),
        children: jsx_runtime_.jsx((style_default()), {
            id: "562ea5d7ae6bc51d",
            dynamic: [
                inline ? "inline-block" : "block",
                SCALES.width(1),
                SCALES.height(1),
                SCALES.pt(0),
                SCALES.pr(0),
                SCALES.pb(0),
                SCALES.pl(0),
                SCALES.mt(0),
                SCALES.mr(0),
                SCALES.mb(0),
                SCALES.ml(0)
            ],
            children: `span.__jsx-style-dynamic-selector{display:${inline ? "inline-block" : "block"};width:${SCALES.width(1)};height:${SCALES.height(1)};padding:${SCALES.pt(0)} ${SCALES.pr(0)} ${SCALES.pb(0)} ${SCALES.pl(0)};margin:${SCALES.mt(0)} ${SCALES.mr(0)} ${SCALES.mb(0)} ${SCALES.ml(0)}}`
        })
    });
};
SpacerComponent.defaultProps = spacer_defaultProps;
SpacerComponent.displayName = "NuiSpacer";
const Spacer = with_scale(SpacerComponent);
/* harmony default export */ const spacer = (Spacer);

;// CONCATENATED MODULE: ../core/components/spacer/index.ts

/* harmony default export */ const components_spacer = (spacer);

;// CONCATENATED MODULE: ../core/components/text/child.tsx


var child_rest = undefined && undefined.__rest || function(s, e) {
    var t = {};
    for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") for(var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++){
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
};



const child_defaultProps = {
    type: "default",
    className: ""
};
const getTypeColor = (type, palette)=>{
    const colors = {
        default: "inherit",
        secondary: palette.secondary.name,
        success: palette.success.name,
        warning: palette.warning.name,
        error: palette.error.name
    };
    return colors[type] || colors.default;
};
const TextChild = (_a)=>{
    var { children , tag , className , type  } = _a, props = child_rest(_a, [
        "children",
        "tag",
        "className",
        "type"
    ]);
    const Component = tag;
    const { SCALES , getScaleProps  } = use_scale();
    const fontSize = getScaleProps("fs");
    const fontWeight = getScaleProps("fw");
    const mx = getScaleProps([
        "margin",
        "marginLeft",
        "marginRight",
        "mx",
        "ml",
        "mr"
    ]);
    const my = getScaleProps([
        "margin",
        "marginTop",
        "marginBottom",
        "my",
        "mt",
        "mb"
    ]);
    const px = getScaleProps([
        "padding",
        "paddingLeft",
        "paddingRight",
        "pl",
        "pr",
        "px"
    ]);
    const py = getScaleProps([
        "padding",
        "paddingTop",
        "paddingBottom",
        "pt",
        "pb",
        "py"
    ]);
    const color = (0,external_react_.useMemo)(()=>getTypeColor(type, presets/* Theme.palette */.Q.palette), [
        type,
        presets/* Theme.palette */.Q.palette
    ]);
    const classNames = (0,external_react_.useMemo)(()=>{
        const keys = [
            {
                value: mx,
                className: "mx"
            },
            {
                value: my,
                className: "my"
            },
            {
                value: px,
                className: "px"
            },
            {
                value: py,
                className: "py"
            },
            {
                value: fontSize,
                className: "font"
            },
            {
                value: fontWeight,
                className: "font-weight"
            }, 
        ];
        const scaleClassNames = keys.reduce((pre, next)=>{
            if (typeof next.value === "undefined") return pre;
            return `${pre} ${next.className}`;
        }, "");
        return `${scaleClassNames} ${className}`.trim();
    }, [
        mx,
        my,
        px,
        py,
        fontSize,
        className
    ]);
    return(// @ts-ignore
    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Component, {
        ...props,
        className: style_default().dynamic([
            [
                "e8e3b12cda0b0487",
                [
                    tag,
                    color,
                    SCALES.width(1, "auto"),
                    SCALES.height(1, "auto"),
                    SCALES.fs(1, "inherit"),
                    fontWeight,
                    SCALES.ml(0, "revert"),
                    SCALES.mr(0, "revert"),
                    SCALES.mt(0, "revert"),
                    SCALES.mb(0, "revert"),
                    SCALES.pl(0, "revert"),
                    SCALES.pr(0, "revert"),
                    SCALES.pt(0, "revert"),
                    SCALES.pb(0, "revert")
                ]
            ]
        ]) + " " + (props && props.className != null && props.className || classNames || ""),
        children: [
            children,
            jsx_runtime_.jsx((style_default()), {
                id: "e8e3b12cda0b0487",
                dynamic: [
                    tag,
                    color,
                    SCALES.width(1, "auto"),
                    SCALES.height(1, "auto"),
                    SCALES.fs(1, "inherit"),
                    fontWeight,
                    SCALES.ml(0, "revert"),
                    SCALES.mr(0, "revert"),
                    SCALES.mt(0, "revert"),
                    SCALES.mb(0, "revert"),
                    SCALES.pl(0, "revert"),
                    SCALES.pr(0, "revert"),
                    SCALES.pt(0, "revert"),
                    SCALES.pb(0, "revert")
                ],
                children: `${tag}.__jsx-style-dynamic-selector{color:${color};width:${SCALES.width(1, "auto")};height:${SCALES.height(1, "auto")}}.font.__jsx-style-dynamic-selector{font-size:${SCALES.fs(1, "inherit")};font-weight:${fontWeight}}.mx.__jsx-style-dynamic-selector{margin-left:${SCALES.ml(0, "revert")};margin-right:${SCALES.mr(0, "revert")}}.my.__jsx-style-dynamic-selector{margin-top:${SCALES.mt(0, "revert")};margin-bottom:${SCALES.mb(0, "revert")}}.px.__jsx-style-dynamic-selector{padding-left:${SCALES.pl(0, "revert")};padding-right:${SCALES.pr(0, "revert")}}.py.__jsx-style-dynamic-selector{padding-top:${SCALES.pt(0, "revert")};padding-bottom:${SCALES.pb(0, "revert")}}`
            })
        ]
    }));
};
TextChild.defaultProps = child_defaultProps;
TextChild.displayName = "NuiTextChild";
/* harmony default export */ const child = (TextChild);

;// CONCATENATED MODULE: ../core/components/text/text.tsx

var text_rest = undefined && undefined.__rest || function(s, e) {
    var t = {};
    for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") for(var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++){
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
};



const text_defaultProps = {
    h1: false,
    h2: false,
    h3: false,
    h4: false,
    h5: false,
    h6: false,
    p: false,
    b: false,
    small: false,
    i: false,
    span: false,
    del: false,
    em: false,
    blockquote: false,
    className: "",
    type: "default"
};
const getModifierChild = (tags, children)=>{
    if (!tags.length) return children;
    const nextTag = tags.slice(1, tags.length);
    return /*#__PURE__*/ jsx_runtime_.jsx(child, {
        tag: tags[0],
        children: getModifierChild(nextTag, children)
    });
};
const TextComponent = (_a)=>{
    var { h1 , h2 , h3 , h4 , h5 , h6 , p , b , small , i , span , del , em , blockquote , children , className  } = _a, props = text_rest(_a, [
        "h1",
        "h2",
        "h3",
        "h4",
        "h5",
        "h6",
        "p",
        "b",
        "small",
        "i",
        "span",
        "del",
        "em",
        "blockquote",
        "children",
        "className"
    ]);
    const elements = {
        h1,
        h2,
        h3,
        h4,
        h5,
        h6,
        p,
        blockquote
    };
    const inlineElements = {
        span,
        small,
        b,
        em,
        i,
        del
    };
    const names = Object.keys(elements).filter((name)=>elements[name]);
    const inlineNames = Object.keys(inlineElements).filter((name)=>inlineElements[name]);
    /**
     *  Render element "p" only if no element is found.
     *  If there is only one modifier, just rendered one modifier element
     *  e.g.
     *    <Text /> => <p />
     *    <Text em /> => <em />
     *    <Text p em /> => <p><em>children</em></p>
     *
     */ const tag = (0,external_react_.useMemo)(()=>{
        if (names[0]) return names[0];
        if (inlineNames[0]) return inlineNames[0];
        return "p";
    }, [
        names,
        inlineNames
    ]);
    const renderableChildElements = inlineNames.filter((name)=>name !== tag);
    const modifers = (0,external_react_.useMemo)(()=>{
        if (!renderableChildElements.length) return children;
        return getModifierChild(renderableChildElements, children);
    }, [
        renderableChildElements,
        children
    ]);
    return /*#__PURE__*/ jsx_runtime_.jsx(child, {
        className: className,
        tag: tag,
        ...props,
        children: modifers
    });
};
TextComponent.defaultProps = text_defaultProps;
TextComponent.displayName = "NuiText";
const Text = with_scale(TextComponent);
/* harmony default export */ const text_text = (Text);

;// CONCATENATED MODULE: ../core/components/text/index.ts

/* harmony default export */ const components_text = (text_text);

;// CONCATENATED MODULE: ../core/components/keyboard/keyboard.tsx


var keyboard_rest = undefined && undefined.__rest || function(s, e) {
    var t = {};
    for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") for(var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++){
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
};



const keyboard_defaultProps = {
    command: false,
    shift: false,
    option: false,
    ctrl: false,
    className: ""
};
const KeyboardComponent = (_a)=>{
    var { command , shift , option , ctrl , children , className  } = _a, props = keyboard_rest(_a, [
        "command",
        "shift",
        "option",
        "ctrl",
        "children",
        "className"
    ]);
    const { SCALES  } = use_scale();
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("kbd", {
        ...props,
        className: style_default().dynamic([
            [
                "7b9a812c8f237407",
                [
                    presets/* Theme.palette.gray500.name */.Q.palette.gray500.name,
                    presets/* Theme.palette.gray50.name */.Q.palette.gray50.name,
                    presets/* Theme.font.sans */.Q.font.sans,
                    presets/* Theme.layout.radius */.Q.layout.radius,
                    presets/* Theme.palette.gray200.name */.Q.palette.gray200.name,
                    SCALES.fs(0.875),
                    SCALES.width(1, "fit-content"),
                    SCALES.height(1, "auto"),
                    SCALES.pt(0),
                    SCALES.pr(0.34),
                    SCALES.pb(0),
                    SCALES.pl(0.34),
                    SCALES.mt(0),
                    SCALES.mr(0),
                    SCALES.mb(0),
                    SCALES.ml(0)
                ]
            ]
        ]) + " " + (props && props.className != null && props.className || className || ""),
        children: [
            command && /*#__PURE__*/ jsx_runtime_.jsx("span", {
                className: style_default().dynamic([
                    [
                        "7b9a812c8f237407",
                        [
                            presets/* Theme.palette.gray500.name */.Q.palette.gray500.name,
                            presets/* Theme.palette.gray50.name */.Q.palette.gray50.name,
                            presets/* Theme.font.sans */.Q.font.sans,
                            presets/* Theme.layout.radius */.Q.layout.radius,
                            presets/* Theme.palette.gray200.name */.Q.palette.gray200.name,
                            SCALES.fs(0.875),
                            SCALES.width(1, "fit-content"),
                            SCALES.height(1, "auto"),
                            SCALES.pt(0),
                            SCALES.pr(0.34),
                            SCALES.pb(0),
                            SCALES.pl(0.34),
                            SCALES.mt(0),
                            SCALES.mr(0),
                            SCALES.mb(0),
                            SCALES.ml(0)
                        ]
                    ]
                ]),
                children: "⌘"
            }),
            shift && /*#__PURE__*/ jsx_runtime_.jsx("span", {
                className: style_default().dynamic([
                    [
                        "7b9a812c8f237407",
                        [
                            presets/* Theme.palette.gray500.name */.Q.palette.gray500.name,
                            presets/* Theme.palette.gray50.name */.Q.palette.gray50.name,
                            presets/* Theme.font.sans */.Q.font.sans,
                            presets/* Theme.layout.radius */.Q.layout.radius,
                            presets/* Theme.palette.gray200.name */.Q.palette.gray200.name,
                            SCALES.fs(0.875),
                            SCALES.width(1, "fit-content"),
                            SCALES.height(1, "auto"),
                            SCALES.pt(0),
                            SCALES.pr(0.34),
                            SCALES.pb(0),
                            SCALES.pl(0.34),
                            SCALES.mt(0),
                            SCALES.mr(0),
                            SCALES.mb(0),
                            SCALES.ml(0)
                        ]
                    ]
                ]),
                children: "⇧"
            }),
            option && /*#__PURE__*/ jsx_runtime_.jsx("span", {
                className: style_default().dynamic([
                    [
                        "7b9a812c8f237407",
                        [
                            presets/* Theme.palette.gray500.name */.Q.palette.gray500.name,
                            presets/* Theme.palette.gray50.name */.Q.palette.gray50.name,
                            presets/* Theme.font.sans */.Q.font.sans,
                            presets/* Theme.layout.radius */.Q.layout.radius,
                            presets/* Theme.palette.gray200.name */.Q.palette.gray200.name,
                            SCALES.fs(0.875),
                            SCALES.width(1, "fit-content"),
                            SCALES.height(1, "auto"),
                            SCALES.pt(0),
                            SCALES.pr(0.34),
                            SCALES.pb(0),
                            SCALES.pl(0.34),
                            SCALES.mt(0),
                            SCALES.mr(0),
                            SCALES.mb(0),
                            SCALES.ml(0)
                        ]
                    ]
                ]),
                children: "⌥"
            }),
            ctrl && /*#__PURE__*/ jsx_runtime_.jsx("span", {
                className: style_default().dynamic([
                    [
                        "7b9a812c8f237407",
                        [
                            presets/* Theme.palette.gray500.name */.Q.palette.gray500.name,
                            presets/* Theme.palette.gray50.name */.Q.palette.gray50.name,
                            presets/* Theme.font.sans */.Q.font.sans,
                            presets/* Theme.layout.radius */.Q.layout.radius,
                            presets/* Theme.palette.gray200.name */.Q.palette.gray200.name,
                            SCALES.fs(0.875),
                            SCALES.width(1, "fit-content"),
                            SCALES.height(1, "auto"),
                            SCALES.pt(0),
                            SCALES.pr(0.34),
                            SCALES.pb(0),
                            SCALES.pl(0.34),
                            SCALES.mt(0),
                            SCALES.mr(0),
                            SCALES.mb(0),
                            SCALES.ml(0)
                        ]
                    ]
                ]),
                children: "⌃"
            }),
            children && /*#__PURE__*/ jsx_runtime_.jsx("span", {
                className: style_default().dynamic([
                    [
                        "7b9a812c8f237407",
                        [
                            presets/* Theme.palette.gray500.name */.Q.palette.gray500.name,
                            presets/* Theme.palette.gray50.name */.Q.palette.gray50.name,
                            presets/* Theme.font.sans */.Q.font.sans,
                            presets/* Theme.layout.radius */.Q.layout.radius,
                            presets/* Theme.palette.gray200.name */.Q.palette.gray200.name,
                            SCALES.fs(0.875),
                            SCALES.width(1, "fit-content"),
                            SCALES.height(1, "auto"),
                            SCALES.pt(0),
                            SCALES.pr(0.34),
                            SCALES.pb(0),
                            SCALES.pl(0.34),
                            SCALES.mt(0),
                            SCALES.mr(0),
                            SCALES.mb(0),
                            SCALES.ml(0)
                        ]
                    ]
                ]),
                children: children
            }),
            jsx_runtime_.jsx((style_default()), {
                id: "7b9a812c8f237407",
                dynamic: [
                    presets/* Theme.palette.gray500.name */.Q.palette.gray500.name,
                    presets/* Theme.palette.gray50.name */.Q.palette.gray50.name,
                    presets/* Theme.font.sans */.Q.font.sans,
                    presets/* Theme.layout.radius */.Q.layout.radius,
                    presets/* Theme.palette.gray200.name */.Q.palette.gray200.name,
                    SCALES.fs(0.875),
                    SCALES.width(1, "fit-content"),
                    SCALES.height(1, "auto"),
                    SCALES.pt(0),
                    SCALES.pr(0.34),
                    SCALES.pb(0),
                    SCALES.pl(0.34),
                    SCALES.mt(0),
                    SCALES.mr(0),
                    SCALES.mb(0),
                    SCALES.ml(0)
                ],
                children: `kbd.__jsx-style-dynamic-selector{line-height:2em;text-align:center;display:inline-block;color:${presets/* Theme.palette.gray500.name */.Q.palette.gray500.name};background-color:${presets/* Theme.palette.gray50.name */.Q.palette.gray50.name};font-family:${presets/* Theme.font.sans */.Q.font.sans};-webkit-border-radius:${presets/* Theme.layout.radius */.Q.layout.radius};-moz-border-radius:${presets/* Theme.layout.radius */.Q.layout.radius};border-radius:${presets/* Theme.layout.radius */.Q.layout.radius};border:1px solid ${presets/* Theme.palette.gray200.name */.Q.palette.gray200.name};font-size:${SCALES.fs(0.875)};width:${SCALES.width(1, "fit-content")};height:${SCALES.height(1, "auto")};min-width:2em;min-height:2em;padding:${SCALES.pt(0)} ${SCALES.pr(0.34)} ${SCALES.pb(0)} ${SCALES.pl(0.34)};margin:${SCALES.mt(0)} ${SCALES.mr(0)} ${SCALES.mb(0)} ${SCALES.ml(0)}}span.__jsx-style-dynamic-selector{line-height:2em;font-size:1em;text-align:center}span.__jsx-style-dynamic-selector+span.__jsx-style-dynamic-selector{margin-left:.3em}`
            })
        ]
    });
};
KeyboardComponent.defaultProps = keyboard_defaultProps;
KeyboardComponent.displayName = "GeistKeyboard";
const keyboard_Keyboard = with_scale(KeyboardComponent);
/* harmony default export */ const keyboard = ((/* unused pure expression or super */ null && (keyboard_Keyboard)));

;// CONCATENATED MODULE: ../core/components/keyboard/index.ts

/* harmony default export */ const components_keyboard = ((/* unused pure expression or super */ null && (Keyboard)));

;// CONCATENATED MODULE: ../core/components/select/select-icon.tsx



const SelectIconComponent = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
        viewBox: "0 0 24 24",
        strokeWidth: "1",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        fill: "none",
        shapeRendering: "geometricPrecision",
        className: "jsx-8f2ed1aecb6ca10b",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M6 9l6 6 6-6",
                className: "jsx-8f2ed1aecb6ca10b"
            }),
            jsx_runtime_.jsx((style_default()), {
                id: "8f2ed1aecb6ca10b",
                children: "svg.jsx-8f2ed1aecb6ca10b{color:inherit;stroke:currentColor;-webkit-transition:all 200ms ease;-moz-transition:all 200ms ease;-o-transition:all 200ms ease;transition:all 200ms ease;width:1.214em;height:1.214em}"
            })
        ]
    });
};
SelectIconComponent.displayName = "NuiSelectIcon";
const SelectIcon = /*#__PURE__*/ external_react_default().memo(SelectIconComponent);
/* harmony default export */ const select_icon = (SelectIcon);

;// CONCATENATED MODULE: ../core/components/select/select-context.ts

const select_context_defaultContext = {
    visible: false,
    disableAll: false
};
const SelectContext = external_react_default().createContext(select_context_defaultContext);
const useSelectContext = ()=>external_react_default().useContext(SelectContext);

;// CONCATENATED MODULE: ../core/components/utils/use-resize.ts

const useResize = (callback, immediatelyInvoke = true)=>{
    (0,external_react_.useEffect)(()=>{
        const fn = ()=>callback();
        if (immediatelyInvoke) {
            fn();
        }
        window.addEventListener("resize", fn);
        return ()=>window.removeEventListener("resize", fn);
    }, []);
};
/* harmony default export */ const use_resize = (useResize);

;// CONCATENATED MODULE: ../core/components/utils/use-click-anywhere.ts

const useClickAnyWhere = (handler)=>{
    (0,external_react_.useEffect)(()=>{
        const callback = (event)=>handler(event);
        document.addEventListener("click", callback);
        return ()=>document.removeEventListener("click", callback);
    }, [
        handler
    ]);
};
/* harmony default export */ const use_click_anywhere = (useClickAnyWhere);

;// CONCATENATED MODULE: ../core/components/utils/use-dom-observer.ts

const useDOMObserver = (ref, callback = ()=>{})=>{
    const config = {
        attributes: false,
        childList: true,
        subtree: true
    };
    (0,external_react_.useEffect)(()=>{
        if (!ref || !ref.current) return;
        let unmount = false;
        const done = (...params)=>{
            if (unmount) return;
            callback(...params);
        };
        const observer = new MutationObserver(done);
        observer.observe(ref.current, config);
        return ()=>{
            unmount = true;
            observer.disconnect();
        };
    }, [
        ref
    ]);
};
/* harmony default export */ const use_dom_observer = (useDOMObserver);

;// CONCATENATED MODULE: ../core/components/utils/use-warning.ts
const warningStack = {};
const useWarning = (message, component)=>{
    const tag = component ? ` [${component}]` : " ";
    const log = `[Nui UI]${tag}: ${message}`;
    if (typeof console === "undefined") return;
    if (warningStack[log]) return;
    warningStack[log] = true;
    if (false) {}
    console.warn(log);
};
/* harmony default export */ const use_warning = (useWarning);

;// CONCATENATED MODULE: ../core/components/utils/layouts.ts

const getElementOffset = (el)=>{
    if (!el) return {
        top: 0,
        left: 0
    };
    const { top , left  } = el.getBoundingClientRect();
    return {
        top,
        left
    };
};
const defaultRect = {
    top: -1000,
    left: -1000,
    right: -1000,
    width: 0,
    height: 0,
    elementTop: -1000
};
const getRectFromDOMWithContainer = (domRect, getContainer)=>{
    if (!domRect) return defaultRect;
    const container = getContainer ? getContainer() : null;
    const scrollElement = container || document.documentElement;
    const { top: offsetTop , left: offsetLeft  } = getElementOffset(container);
    return Object.assign(Object.assign({}, domRect), {
        width: domRect.width || domRect.right - domRect.left,
        height: domRect.height || domRect.top - domRect.bottom,
        top: domRect.bottom + scrollElement.scrollTop - offsetTop,
        left: domRect.left + scrollElement.scrollLeft - offsetLeft,
        elementTop: domRect.top + scrollElement.scrollTop - offsetTop
    });
};
const isUnplacedRect = (rect)=>{
    if (!rect) return true;
    return rect.top === defaultRect.top && rect.left === defaultRect.left;
};
const getRefRect = (ref, getContainer)=>{
    if (!ref || !ref.current) return defaultRect;
    const rect = ref.current.getBoundingClientRect();
    return getRectFromDOMWithContainer(rect, getContainer);
};
const getEventRect = (event, getContainer)=>{
    var _a;
    const rect = (_a = event === null || event === void 0 ? void 0 : event.target) === null || _a === void 0 ? void 0 : _a.getBoundingClientRect();
    if (!rect) return defaultRect;
    return getRectFromDOMWithContainer(rect, getContainer);
};
const isRefTarget = (eventOrRef)=>{
    return typeof (eventOrRef === null || eventOrRef === void 0 ? void 0 : eventOrRef.target) === "undefined";
};
const useRect = (initialState)=>{
    const { 0: rect , 1: setRect  } = (0,external_react_.useState)(initialState || defaultRect);
    const updateRect = (eventOrRef, getContainer)=>{
        if (isRefTarget(eventOrRef)) return setRect(getRefRect(eventOrRef, getContainer));
        setRect(getEventRect(eventOrRef, getContainer));
    };
    return {
        rect,
        setRect: updateRect
    };
};

;// CONCATENATED MODULE: ../core/components/shared/dropdown.tsx












const dropdown_defaultRect = {
    top: -1000,
    left: -1000,
    right: -1000,
    width: 0
};
const Dropdown = /*#__PURE__*/ external_react_default().memo(({ children , parent , visible , disableMatchWidth , getPopupContainer  })=>{
    const el = use_portal("dropdown", getPopupContainer);
    const { 0: rect , 1: setRect  } = (0,external_react_.useState)(dropdown_defaultRect);
    const classes = components_use_classes("dropdown", disableMatchWidth ? "disable-match" : "width-match");
    if (!parent) return null;
    /* istanbul ignore next */ if (false) {}
    const updateRect = ()=>{
        const { top , left , right , width: nativeWidth ,  } = getRefRect(parent, getPopupContainer);
        setRect({
            top,
            left,
            right,
            width: nativeWidth
        });
    };
    use_resize(updateRect);
    use_click_anywhere(()=>{
        const { top , left  } = getRefRect(parent, getPopupContainer);
        const shouldUpdatePosition = top !== rect.top || left !== rect.left;
        if (!shouldUpdatePosition) return;
        updateRect();
    });
    use_dom_observer(parent, ()=>{
        updateRect();
    });
    (0,external_react_.useEffect)(()=>{
        if (!parent || !parent.current) return;
        parent.current.addEventListener("mouseenter", updateRect);
        /* istanbul ignore next */ return ()=>{
            if (!parent || !parent.current) return;
            parent.current.removeEventListener("mouseenter", updateRect);
        };
    }, [
        parent
    ]);
    const clickHandler = (event)=>{
        event.stopPropagation();
        event.nativeEvent.stopImmediatePropagation();
        event.preventDefault();
    };
    const mouseDownHandler = (event)=>{
        event.preventDefault();
    };
    if (!el) return null;
    return /*#__PURE__*/ (0,external_react_dom_.createPortal)(/*#__PURE__*/ jsx_runtime_.jsx(css_transition, {
        visible: visible,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            onClick: clickHandler,
            onMouseDown: mouseDownHandler,
            className: style_default().dynamic([
                [
                    "a647f1f25a63e789",
                    [
                        rect.top + 2,
                        rect.left,
                        rect.width,
                        rect.width
                    ]
                ]
            ]) + " " + (classes || ""),
            children: [
                children,
                jsx_runtime_.jsx((style_default()), {
                    id: "a647f1f25a63e789",
                    dynamic: [
                        rect.top + 2,
                        rect.left,
                        rect.width,
                        rect.width
                    ],
                    children: `.dropdown.__jsx-style-dynamic-selector{position:absolute;top:${rect.top + 2}px;left:${rect.left}px;z-index:1100}.width-match.__jsx-style-dynamic-selector{width:${rect.width}px}.disable-match.__jsx-style-dynamic-selector{min-width:${rect.width}px}`
                })
            ]
        })
    }), el);
});
/* harmony default export */ const dropdown = (Dropdown);

;// CONCATENATED MODULE: ../core/components/select/select-dropdown.tsx







const select_dropdown_defaultProps = {
    className: "",
    dropdownStyle: {}
};
const SelectDropdown = /*#__PURE__*/ external_react_default().forwardRef(({ visible , children , className , dropdownStyle , disableMatchWidth , getPopupContainer ,  }, dropdownRef)=>{
    const internalDropdownRef = (0,external_react_.useRef)(null);
    const { ref  } = useSelectContext();
    const classes = components_use_classes("select-dropdown", className);
    (0,external_react_.useImperativeHandle)(dropdownRef, ()=>internalDropdownRef.current);
    return /*#__PURE__*/ jsx_runtime_.jsx(dropdown, {
        parent: ref,
        visible: visible,
        disableMatchWidth: disableMatchWidth,
        getPopupContainer: getPopupContainer,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            ref: internalDropdownRef,
            style: dropdownStyle,
            className: style_default().dynamic([
                [
                    "4874c546af436558",
                    [
                        presets/* Theme.layout.radius.name */.Q.layout.radius.name,
                        presets/* Theme.expressiveness.shadowLarge */.Q.expressiveness.shadowLarge,
                        presets/* Theme.palette.background.name */.Q.palette.background.name
                    ]
                ]
            ]) + " " + (classes || ""),
            children: [
                children,
                jsx_runtime_.jsx((style_default()), {
                    id: "4874c546af436558",
                    dynamic: [
                        presets/* Theme.layout.radius.name */.Q.layout.radius.name,
                        presets/* Theme.expressiveness.shadowLarge */.Q.expressiveness.shadowLarge,
                        presets/* Theme.palette.background.name */.Q.palette.background.name
                    ],
                    children: `.select-dropdown.__jsx-style-dynamic-selector{-webkit-border-radius:${presets/* Theme.layout.radius.name */.Q.layout.radius.name};-moz-border-radius:${presets/* Theme.layout.radius.name */.Q.layout.radius.name};border-radius:${presets/* Theme.layout.radius.name */.Q.layout.radius.name};-webkit-box-shadow:${presets/* Theme.expressiveness.shadowLarge */.Q.expressiveness.shadowLarge};-moz-box-shadow:${presets/* Theme.expressiveness.shadowLarge */.Q.expressiveness.shadowLarge};box-shadow:${presets/* Theme.expressiveness.shadowLarge */.Q.expressiveness.shadowLarge};background-color:${presets/* Theme.palette.background.name */.Q.palette.background.name};max-height:17em;overflow-y:auto;overflow-anchor:none;padding:.38em 0;scroll-behavior:smooth}`
                })
            ]
        })
    });
});
SelectDropdown.defaultProps = select_dropdown_defaultProps;
SelectDropdown.displayName = "NuiSelectDropdown";
/* harmony default export */ const select_dropdown = (SelectDropdown);

;// CONCATENATED MODULE: ../core/components/grid/basic-item.tsx


var basic_item_rest = undefined && undefined.__rest || function(s, e) {
    var t = {};
    for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") for(var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++){
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
};




const basic_item_defaultProps = {
    xs: false,
    sm: false,
    md: false,
    lg: false,
    xl: false,
    className: ""
};
const getItemLayout = (val)=>{
    const display = val === 0 ? "display: none;" : "display: inherit;";
    if (typeof val === "number") {
        const width = 100 / 24 * val;
        const ratio = width > 100 ? "100%" : width < 0 ? "0" : `${width}%`;
        return {
            grow: 0,
            display,
            width: ratio,
            basis: ratio
        };
    }
    return {
        grow: 1,
        display,
        width: "100%",
        basis: "0"
    };
};
const GridBasicItem = (_a)=>{
    var { xs , sm , md , lg , xl , justify , direction , alignItems , alignContent , children , className  } = _a, props = basic_item_rest(_a, [
        "xs",
        "sm",
        "md",
        "lg",
        "xl",
        "justify",
        "direction",
        "alignItems",
        "alignContent",
        "children",
        "className"
    ]);
    const { SCALES  } = use_scale();
    const classes = (0,external_react_.useMemo)(()=>{
        const aligns = {
            justify,
            direction,
            alignItems,
            alignContent,
            xs,
            sm,
            md,
            lg,
            xl
        };
        const classString = Object.keys(aligns).reduce((pre, name)=>{
            if (aligns[name] !== undefined && aligns[name] !== false) return `${pre} ${name}`;
            return pre;
        }, "");
        return classString.trim();
    }, [
        justify,
        direction,
        alignItems,
        alignContent,
        xs,
        sm,
        md,
        lg,
        xl
    ]);
    const layout = (0,external_react_.useMemo)(()=>({
            xs: getItemLayout(xs),
            sm: getItemLayout(sm),
            md: getItemLayout(md),
            lg: getItemLayout(lg),
            xl: getItemLayout(xl)
        }), [
        xs,
        sm,
        md,
        lg,
        xl
    ]);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        ...props,
        className: style_default().dynamic([
            [
                "ec7e3ac5d01b01fb",
                [
                    SCALES.fs(1, "inherit"),
                    SCALES.height(1, "auto"),
                    justify,
                    direction,
                    alignContent,
                    alignItems,
                    layout.xs.grow,
                    layout.xs.width,
                    layout.xs.basis,
                    layout.xs.display,
                    presets/* Theme.breakpoints.sm.min */.Q.breakpoints.sm.min,
                    layout.sm.grow,
                    layout.sm.width,
                    layout.sm.basis,
                    layout.sm.display,
                    presets/* Theme.breakpoints.md.min */.Q.breakpoints.md.min,
                    layout.md.grow,
                    layout.md.width,
                    layout.md.basis,
                    layout.md.display,
                    presets/* Theme.breakpoints.lg.min */.Q.breakpoints.lg.min,
                    layout.lg.grow,
                    layout.lg.width,
                    layout.lg.basis,
                    layout.lg.display,
                    presets/* Theme.breakpoints.xl.min */.Q.breakpoints.xl.min,
                    layout.xl.grow,
                    layout.xl.width,
                    layout.xl.basis,
                    layout.xl.display
                ]
            ]
        ]) + " " + (props && props.className != null && props.className || components_use_classes(className, "item", classes) || ""),
        children: [
            children,
            jsx_runtime_.jsx((style_default()), {
                id: "ec7e3ac5d01b01fb",
                dynamic: [
                    SCALES.fs(1, "inherit"),
                    SCALES.height(1, "auto"),
                    justify,
                    direction,
                    alignContent,
                    alignItems,
                    layout.xs.grow,
                    layout.xs.width,
                    layout.xs.basis,
                    layout.xs.display,
                    presets/* Theme.breakpoints.sm.min */.Q.breakpoints.sm.min,
                    layout.sm.grow,
                    layout.sm.width,
                    layout.sm.basis,
                    layout.sm.display,
                    presets/* Theme.breakpoints.md.min */.Q.breakpoints.md.min,
                    layout.md.grow,
                    layout.md.width,
                    layout.md.basis,
                    layout.md.display,
                    presets/* Theme.breakpoints.lg.min */.Q.breakpoints.lg.min,
                    layout.lg.grow,
                    layout.lg.width,
                    layout.lg.basis,
                    layout.lg.display,
                    presets/* Theme.breakpoints.xl.min */.Q.breakpoints.xl.min,
                    layout.xl.grow,
                    layout.xl.width,
                    layout.xl.basis,
                    layout.xl.display
                ],
                children: `.item.__jsx-style-dynamic-selector{font-size:${SCALES.fs(1, "inherit")};height:${SCALES.height(1, "auto")}}.justify.__jsx-style-dynamic-selector{-webkit-box-pack:${justify};-webkit-justify-content:${justify};-moz-box-pack:${justify};-ms-flex-pack:${justify};justify-content:${justify}}.direction.__jsx-style-dynamic-selector{-webkit-flex-direction:${direction};-ms-flex-direction:${direction};flex-direction:${direction}}.alignContent.__jsx-style-dynamic-selector{-webkit-align-content:${alignContent};-ms-flex-line-pack:${alignContent};align-content:${alignContent}}.alignItems.__jsx-style-dynamic-selector{-webkit-box-align:${alignItems};-webkit-align-items:${alignItems};-moz-box-align:${alignItems};-ms-flex-align:${alignItems};align-items:${alignItems}}.xs.__jsx-style-dynamic-selector{-webkit-box-flex:${layout.xs.grow};-webkit-flex-grow:${layout.xs.grow};-moz-box-flex:${layout.xs.grow};-ms-flex-positive:${layout.xs.grow};flex-grow:${layout.xs.grow};max-width:${layout.xs.width};-webkit-flex-basis:${layout.xs.basis};-ms-flex-preferred-size:${layout.xs.basis};flex-basis:${layout.xs.basis};${layout.xs.display}
        }@media only screen and (min-width:${presets/* Theme.breakpoints.sm.min */.Q.breakpoints.sm.min}){.sm.__jsx-style-dynamic-selector{-webkit-box-flex:${layout.sm.grow};-webkit-flex-grow:${layout.sm.grow};-moz-box-flex:${layout.sm.grow};-ms-flex-positive:${layout.sm.grow};flex-grow:${layout.sm.grow};max-width:${layout.sm.width};-webkit-flex-basis:${layout.sm.basis};-ms-flex-preferred-size:${layout.sm.basis};flex-basis:${layout.sm.basis};${layout.sm.display}
          }}@media only screen and (min-width:${presets/* Theme.breakpoints.md.min */.Q.breakpoints.md.min}){.md.__jsx-style-dynamic-selector{-webkit-box-flex:${layout.md.grow};-webkit-flex-grow:${layout.md.grow};-moz-box-flex:${layout.md.grow};-ms-flex-positive:${layout.md.grow};flex-grow:${layout.md.grow};max-width:${layout.md.width};-webkit-flex-basis:${layout.md.basis};-ms-flex-preferred-size:${layout.md.basis};flex-basis:${layout.md.basis};${layout.md.display}
          }}@media only screen and (min-width:${presets/* Theme.breakpoints.lg.min */.Q.breakpoints.lg.min}){.lg.__jsx-style-dynamic-selector{-webkit-box-flex:${layout.lg.grow};-webkit-flex-grow:${layout.lg.grow};-moz-box-flex:${layout.lg.grow};-ms-flex-positive:${layout.lg.grow};flex-grow:${layout.lg.grow};max-width:${layout.lg.width};-webkit-flex-basis:${layout.lg.basis};-ms-flex-preferred-size:${layout.lg.basis};flex-basis:${layout.lg.basis};${layout.lg.display}
          }}@media only screen and (min-width:${presets/* Theme.breakpoints.xl.min */.Q.breakpoints.xl.min}){.xl.__jsx-style-dynamic-selector{-webkit-box-flex:${layout.xl.grow};-webkit-flex-grow:${layout.xl.grow};-moz-box-flex:${layout.xl.grow};-ms-flex-positive:${layout.xl.grow};flex-grow:${layout.xl.grow};max-width:${layout.xl.width};-webkit-flex-basis:${layout.xl.basis};-ms-flex-preferred-size:${layout.xl.basis};flex-basis:${layout.xl.basis};${layout.xl.display}
          }}`
            })
        ]
    });
};
GridBasicItem.defaultProps = basic_item_defaultProps;
GridBasicItem.displayName = "NuiGridBasicItem";
/* harmony default export */ const basic_item = (GridBasicItem);

;// CONCATENATED MODULE: ../core/components/grid/grid.tsx


var grid_rest = undefined && undefined.__rest || function(s, e) {
    var t = {};
    for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") for(var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++){
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
};




const grid_defaultProps = {
    className: ""
};
const GridComponent = (_a)=>{
    var { children , className  } = _a, props = grid_rest(_a, [
        "children",
        "className"
    ]);
    const { SCALES  } = use_scale();
    const { className: resolveClassName , styles  } = {
        styles: jsx_runtime_.jsx((style_default()), {
            id: "5c05de9003e289b9",
            dynamic: [
                SCALES.mt(0),
                SCALES.mr(0),
                SCALES.mb(0),
                SCALES.ml(0),
                SCALES.pt(0, "var(--grid-gap-unit)"),
                SCALES.pr(0, "var(--grid-gap-unit)"),
                SCALES.pb(0, "var(--grid-gap-unit)"),
                SCALES.pl(0, "var(--grid-gap-unit)")
            ],
            children: `div.__jsx-style-dynamic-selector{margin:${SCALES.mt(0)} ${SCALES.mr(0)} ${SCALES.mb(0)} ${SCALES.ml(0)};-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;padding:${SCALES.pt(0, "var(--grid-gap-unit)")} ${SCALES.pr(0, "var(--grid-gap-unit)")} ${SCALES.pb(0, "var(--grid-gap-unit)")} ${SCALES.pl(0, "var(--grid-gap-unit)")}}`
        }),
        className: style_default().dynamic([
            [
                "5c05de9003e289b9",
                [
                    SCALES.mt(0),
                    SCALES.mr(0),
                    SCALES.mb(0),
                    SCALES.ml(0),
                    SCALES.pt(0, "var(--grid-gap-unit)"),
                    SCALES.pr(0, "var(--grid-gap-unit)"),
                    SCALES.pb(0, "var(--grid-gap-unit)"),
                    SCALES.pl(0, "var(--grid-gap-unit)")
                ]
            ]
        ])
    };
    const classes = components_use_classes(resolveClassName, className);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(basic_item, {
        className: classes,
        ...props,
        children: [
            children,
            styles
        ]
    });
};
GridComponent.defaultProps = grid_defaultProps;
GridComponent.displayName = "NuiGrid";
const Grid = with_scale(GridComponent);
/* harmony default export */ const grid = (Grid);

;// CONCATENATED MODULE: ../core/components/grid/grid-container.tsx


var grid_container_rest = undefined && undefined.__rest || function(s, e) {
    var t = {};
    for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") for(var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++){
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
};




const grid_container_defaultProps = {
    gap: 0,
    wrap: "wrap",
    className: ""
};
const GridContainerComponent = (_a)=>{
    var { gap , wrap , children , className  } = _a, props = grid_container_rest(_a, [
        "gap",
        "wrap",
        "children",
        "className"
    ]);
    const { unit , SCALES  } = use_scale();
    const gapUnit = (0,external_react_.useMemo)(()=>`calc(${gap} * ${unit} * 1/3)`, [
        gap,
        unit
    ]);
    const { className: resolveClassName , styles  } = {
        styles: jsx_runtime_.jsx((style_default()), {
            id: "9431be4ae49f20d0",
            dynamic: [
                gapUnit,
                wrap,
                SCALES.width(1, "var(--grid-container-width)"),
                SCALES.mt(0, "var(--grid-container-margin)"),
                SCALES.mr(0, "var(--grid-container-margin)"),
                SCALES.mb(0, "var(--grid-container-margin)"),
                SCALES.ml(0, "var(--grid-container-margin)")
            ],
            children: `div.__jsx-style-dynamic-selector{--grid-gap-unit:${gapUnit};--grid-container-margin:calc(-1 * var(--grid-gap-unit));--grid-container-width:calc(100% + var(--grid-gap-unit) * 2);display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-flex-wrap:${wrap};-ms-flex-wrap:${wrap};flex-wrap:${wrap};-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;width:${SCALES.width(1, "var(--grid-container-width)")};margin:${SCALES.mt(0, "var(--grid-container-margin)")} ${SCALES.mr(0, "var(--grid-container-margin)")} ${SCALES.mb(0, "var(--grid-container-margin)")} ${SCALES.ml(0, "var(--grid-container-margin)")}}`
        }),
        className: style_default().dynamic([
            [
                "9431be4ae49f20d0",
                [
                    gapUnit,
                    wrap,
                    SCALES.width(1, "var(--grid-container-width)"),
                    SCALES.mt(0, "var(--grid-container-margin)"),
                    SCALES.mr(0, "var(--grid-container-margin)"),
                    SCALES.mb(0, "var(--grid-container-margin)"),
                    SCALES.ml(0, "var(--grid-container-margin)")
                ]
            ]
        ])
    };
    const classes = components_use_classes(className, resolveClassName);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(basic_item, {
        className: classes,
        ...props,
        children: [
            children,
            styles
        ]
    });
};
GridContainerComponent.defaultProps = grid_container_defaultProps;
GridContainerComponent.displayName = "NuiGridContainer";
const GridContainer = with_scale(GridContainerComponent);
/* harmony default export */ const grid_container = (GridContainer);

;// CONCATENATED MODULE: ../core/components/grid/index.ts


grid.Container = grid_container;
/* harmony default export */ const components_grid = (grid);

;// CONCATENATED MODULE: ../core/components/select/select-icon-clear.tsx




const SelectIconClear = ({ onClick  })=>{
    const clickHandler = (event)=>{
        event.preventDefault();
        event.stopPropagation();
        event.nativeEvent.stopImmediatePropagation();
        onClick && onClick(event);
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        onClick: clickHandler,
        className: style_default().dynamic([
            [
                "a5abae6d717938e3",
                [
                    presets/* Theme.palette.gray400.name */.Q.palette.gray400.name,
                    presets/* Theme.palette.black.name */.Q.palette.black.name
                ]
            ]
        ]) + " " + "clear-icon",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
                viewBox: "0 0 24 24",
                stroke: "currentColor",
                strokeWidth: "1.5",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                fill: "none",
                shapeRendering: "geometricPrecision",
                className: style_default().dynamic([
                    [
                        "a5abae6d717938e3",
                        [
                            presets/* Theme.palette.gray400.name */.Q.palette.gray400.name,
                            presets/* Theme.palette.black.name */.Q.palette.black.name
                        ]
                    ]
                ]),
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M18 6L6 18",
                        className: style_default().dynamic([
                            [
                                "a5abae6d717938e3",
                                [
                                    presets/* Theme.palette.gray400.name */.Q.palette.gray400.name,
                                    presets/* Theme.palette.black.name */.Q.palette.black.name
                                ]
                            ]
                        ])
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M6 6l12 12",
                        className: style_default().dynamic([
                            [
                                "a5abae6d717938e3",
                                [
                                    presets/* Theme.palette.gray400.name */.Q.palette.gray400.name,
                                    presets/* Theme.palette.black.name */.Q.palette.black.name
                                ]
                            ]
                        ])
                    })
                ]
            }),
            jsx_runtime_.jsx((style_default()), {
                id: "a5abae6d717938e3",
                dynamic: [
                    presets/* Theme.palette.gray400.name */.Q.palette.gray400.name,
                    presets/* Theme.palette.black.name */.Q.palette.black.name
                ],
                children: `.clear-icon.__jsx-style-dynamic-selector{padding:0 0 0 .5em;margin:0;display:-webkit-inline-box;display:-webkit-inline-flex;display:-moz-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;height:100%;cursor:pointer;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;-webkit-transition:color 150ms ease 0s;-moz-transition:color 150ms ease 0s;-o-transition:color 150ms ease 0s;transition:color 150ms ease 0s;color:${presets/* Theme.palette.gray400.name */.Q.palette.gray400.name};visibility:visible;opacity:1}.clear-icon.__jsx-style-dynamic-selector:hover{color:${presets/* Theme.palette.black.name */.Q.palette.black.name}}svg.__jsx-style-dynamic-selector{color:currentColor;width:1em;height:1em}`
            })
        ]
    });
};
const MemoSelectIconClear = /*#__PURE__*/ external_react_default().memo(SelectIconClear);
/* harmony default export */ const select_icon_clear = (MemoSelectIconClear);

;// CONCATENATED MODULE: ../core/components/select/select-multiple-value.tsx






const SelectMultipleValue = ({ disabled , onClear , children ,  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(components_grid, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: style_default().dynamic([
                    [
                        "3225b5bdcffee14",
                        [
                            presets/* Theme.layout.radius.name */.Q.layout.radius.name,
                            presets/* Theme.palette.gray200.name */.Q.palette.gray200.name,
                            disabled ? presets/* Theme.palette.gray400.name */.Q.palette.gray400.name : presets/* Theme.palette.gray700.name */.Q.palette.gray700.name
                        ]
                    ]
                ]) + " " + "item",
                children: [
                    children,
                    !!onClear && /*#__PURE__*/ jsx_runtime_.jsx(select_icon_clear, {
                        onClick: onClear
                    })
                ]
            }),
            jsx_runtime_.jsx((style_default()), {
                id: "3225b5bdcffee14",
                dynamic: [
                    presets/* Theme.layout.radius.name */.Q.layout.radius.name,
                    presets/* Theme.palette.gray200.name */.Q.palette.gray200.name,
                    disabled ? presets/* Theme.palette.gray400.name */.Q.palette.gray400.name : presets/* Theme.palette.gray700.name */.Q.palette.gray700.name
                ],
                children: `.item.__jsx-style-dynamic-selector{display:-webkit-inline-box;display:-webkit-inline-flex;display:-moz-inline-box;display:-ms-inline-flexbox;display:inline-flex;justify-items:center;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;line-height:1;padding:0 .5em;font-size:var(--select-font-size);height:-webkit-calc(var(--select-font-size)*2);height:-moz-calc(var(--select-font-size)*2);height:calc(var(--select-font-size)*2);-webkit-border-radius:${presets/* Theme.layout.radius.name */.Q.layout.radius.name};-moz-border-radius:${presets/* Theme.layout.radius.name */.Q.layout.radius.name};border-radius:${presets/* Theme.layout.radius.name */.Q.layout.radius.name};background-color:${presets/* Theme.palette.gray200.name */.Q.palette.gray200.name};color:${disabled ? presets/* Theme.palette.gray400.name */.Q.palette.gray400.name : presets/* Theme.palette.gray700.name */.Q.palette.gray700.name}}.item.__jsx-style-dynamic-selector>div:not(.clear-icon),.item.__jsx-style-dynamic-selector>div:not(.clear-icon):hover{-webkit-border-radius:0;-moz-border-radius:0;border-radius:0;background-color:transparent;padding:0;margin:0;color:inherit}`
            })
        ]
    });
};
SelectMultipleValue.displayName = "GeistSelectMultipleValue";
/* harmony default export */ const select_multiple_value = (SelectMultipleValue);

;// CONCATENATED MODULE: ../core/components/select/styles.ts

const styles_getColors = (palette, status)=>{
    const colors = {
        default: {
            border: presets/* Theme.palette.border.name */.Q.palette.border.name,
            borderActive: presets/* Theme.palette.background.name */.Q.palette.background.name,
            iconBorder: presets/* Theme.palette.gray500.name */.Q.palette.gray500.name,
            placeholderColor: palette.gray300.name
        },
        secondary: {
            border: palette.border.name,
            borderActive: palette.background.name,
            iconBorder: palette.gray500.name,
            placeholderColor: palette.gray300.name
        },
        success: {
            border: palette.successLight.name,
            borderActive: palette.success.name,
            iconBorder: palette.success.name,
            placeholderColor: palette.gray300.name
        },
        warning: {
            border: palette.warning.name,
            borderActive: palette.warning.name,
            iconBorder: palette.warning.name,
            placeholderColor: palette.gray300.name
        },
        error: {
            border: palette.errorLight.name,
            borderActive: palette.error.name,
            iconBorder: palette.error.name,
            placeholderColor: palette.error.name
        }
    };
    if (!status) return colors.default;
    return colors[status];
};

;// CONCATENATED MODULE: ../core/components/shared/ellipsis.tsx



const Ellipsis = ({ children , height ,  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
        className: style_default().dynamic([
            [
                "4773ba92e9044fd4",
                [
                    height
                ]
            ]
        ]),
        children: [
            children,
            jsx_runtime_.jsx((style_default()), {
                id: "4773ba92e9044fd4",
                dynamic: [
                    height
                ],
                children: `span.__jsx-style-dynamic-selector{overflow:hidden;-o-text-overflow:ellipsis;text-overflow:ellipsis;white-space:nowrap;line-height:${height};min-width:0}`
            })
        ]
    });
};
/* harmony default export */ const ellipsis = (/*#__PURE__*/external_react_default().memo(Ellipsis));

;// CONCATENATED MODULE: ../core/components/select/select-input.tsx



const SelectInput = /*#__PURE__*/ external_react_default().forwardRef(({ visible , onBlur , onFocus  }, inputRef)=>{
    const ref = (0,external_react_.useRef)(null);
    (0,external_react_.useImperativeHandle)(inputRef, ()=>ref.current);
    (0,external_react_.useEffect)(()=>{
        var _a;
        if (visible) {
            (_a = ref.current) === null || _a === void 0 ? void 0 : _a.focus();
        }
    }, [
        visible
    ]);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                ref: ref,
                type: "search",
                role: "combobox",
                "aria-haspopup": "listbox",
                readOnly: true,
                unselectable: "on",
                "aria-expanded": visible,
                onBlur: onBlur,
                onFocus: onFocus,
                className: "jsx-ea2a01cb86a68bec"
            }),
            jsx_runtime_.jsx((style_default()), {
                id: "ea2a01cb86a68bec",
                children: "input.jsx-ea2a01cb86a68bec{position:fixed;top:-1e4px;left:-1e4px;opacity:0;z-index:-1;width:0;height:0;padding:0;font-size:0;border:none}"
            })
        ]
    });
});
SelectInput.displayName = "NuiSelectInput";
/* harmony default export */ const select_input = (SelectInput);

;// CONCATENATED MODULE: ../core/components/select/select.tsx


var select_rest = undefined && undefined.__rest || function(s, e) {
    var t = {};
    for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") for(var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++){
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
};














const select_defaultProps = {
    disabled: false,
    type: "default",
    icon: select_icon,
    pure: false,
    multiple: false,
    clearable: true,
    className: "",
    disableMatchWidth: false,
    onDropdownVisibleChange: ()=>{}
};
const SelectComponent = /*#__PURE__*/ external_react_default().forwardRef((_a, selectRef)=>{
    var { children , type , disabled , initialValue: init , value: customValue , icon , onChange , pure , multiple , clearable , placeholder , className , dropdownClassName , dropdownStyle , disableMatchWidth , getPopupContainer , onDropdownVisibleChange  } = _a, props = select_rest(_a, [
        "children",
        "type",
        "disabled",
        "initialValue",
        "value",
        "icon",
        "onChange",
        "pure",
        "multiple",
        "clearable",
        "placeholder",
        "className",
        "dropdownClassName",
        "dropdownStyle",
        "disableMatchWidth",
        "getPopupContainer",
        "onDropdownVisibleChange"
    ]);
    const { SCALES  } = use_scale();
    const ref = (0,external_react_.useRef)(null);
    const inputRef = (0,external_react_.useRef)(null);
    const dropdownRef = (0,external_react_.useRef)(null);
    const { 0: visible , 1: setVisible  } = (0,external_react_.useState)(false);
    const { 0: selectFocus , 1: setSelectFocus  } = (0,external_react_.useState)(false);
    const [value, setValue, valueRef] = utils_use_current_state(()=>{
        if (!multiple) return init;
        if (Array.isArray(init)) return init;
        return typeof init === "undefined" ? [] : [
            init
        ];
    });
    const isEmpty = (0,external_react_.useMemo)(()=>{
        if (!Array.isArray(value)) return !value;
        return value.length === 0;
    }, [
        value
    ]);
    const { border , borderActive , iconBorder , placeholderColor  } = (0,external_react_.useMemo)(()=>styles_getColors(presets/* Theme.palette */.Q.palette, type), [
        presets/* Theme.palette */.Q.palette,
        type
    ]);
    const updateVisible = (next)=>{
        onDropdownVisibleChange(next);
        setVisible(next);
    };
    const updateValue = (next)=>{
        setValue((last)=>{
            if (!Array.isArray(last)) return next;
            if (!last.includes(next)) return [
                ...last,
                next
            ];
            return last.filter((item)=>item !== next);
        });
        onChange && onChange(valueRef.current);
        if (!multiple) {
            updateVisible(false);
        }
    };
    const initialValue = (0,external_react_.useMemo)(()=>({
            value,
            visible,
            updateValue,
            updateVisible,
            ref,
            disableAll: disabled
        }), [
        visible,
        disabled,
        ref,
        value,
        multiple
    ]);
    const clickHandler = (event)=>{
        event.stopPropagation();
        event.nativeEvent.stopImmediatePropagation();
        event.preventDefault();
        if (disabled) return;
        updateVisible(!visible);
        event.preventDefault();
    };
    const mouseDownHandler = (event)=>{
        /* istanbul ignore next */ if (visible) {
            event.preventDefault();
        }
    };
    (0,external_react_.useEffect)(()=>{
        if (customValue === undefined) return;
        setValue(customValue);
    }, [
        customValue
    ]);
    (0,external_react_.useImperativeHandle)(selectRef, ()=>({
            focus: ()=>{
                var _a;
                return (_a = inputRef.current) === null || _a === void 0 ? void 0 : _a.focus();
            },
            blur: ()=>{
                var _a;
                return (_a = inputRef.current) === null || _a === void 0 ? void 0 : _a.blur();
            },
            scrollTo: (options)=>{
                var _a;
                return (_a = dropdownRef.current) === null || _a === void 0 ? void 0 : _a.scrollTo(options);
            }
        }), [
        inputRef,
        dropdownRef
    ]);
    const selectedChild = (0,external_react_.useMemo)(()=>{
        const [, optionChildren] = pickChildByProps(children, "value", value);
        return external_react_default().Children.map(optionChildren, (child)=>{
            if (!/*#__PURE__*/ external_react_default().isValidElement(child)) return null;
            // const el = React.Children.map(children, (child) => {
            //    if (React.isValidElement(child)) {
            //       return React.cloneElement(child, {
            //          ...(child.props as React.HTMLAttributes<HTMLElement>),
            //          preventAllEvents: true,
            //       });
            //    }
            //    return child;
            // });
            const el = /*#__PURE__*/ external_react_default().cloneElement(child, {
                preventAllEvents: true
            });
            if (!multiple) return el;
            return /*#__PURE__*/ jsx_runtime_.jsx(select_multiple_value, {
                disabled: disabled,
                onClear: clearable ? ()=>updateValue(child.props.value) : null,
                children: el
            });
        });
    }, [
        value,
        children,
        multiple
    ]);
    const onInputBlur = ()=>{
        updateVisible(false);
        setSelectFocus(false);
    };
    const classes = components_use_classes("select", {
        active: selectFocus || visible,
        multiple
    }, className);
    return /*#__PURE__*/ jsx_runtime_.jsx(SelectContext.Provider, {
        value: initialValue,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            ref: ref,
            onClick: clickHandler,
            onMouseDown: mouseDownHandler,
            ...props,
            className: style_default().dynamic([
                [
                    "90b0f54e744e947e",
                    [
                        disabled ? "not-allowed" : "pointer",
                        border,
                        presets/* Theme.layout.radius.name */.Q.layout.radius.name,
                        disabled ? presets/* Theme.palette.gray50.name */.Q.palette.gray50.name : presets/* Theme.palette.background.name */.Q.palette.background.name,
                        SCALES.fs(0.875),
                        SCALES.height(2.25),
                        SCALES.width(1, "initial"),
                        SCALES.pt(0),
                        SCALES.pr(0.334),
                        SCALES.pb(0),
                        SCALES.pl(0.667),
                        SCALES.mt(0),
                        SCALES.mr(0),
                        SCALES.mb(0),
                        SCALES.ml(0),
                        SCALES.pt(0.334),
                        SCALES.pr(0.334),
                        SCALES.pb(0.334),
                        SCALES.pl(0.667),
                        disabled ? presets/* Theme.palette.border */.Q.palette.border : borderActive,
                        disabled ? presets/* Theme.palette.gray500.name */.Q.palette.gray500.name : borderActive,
                        disabled ? presets/* Theme.palette.gray400 */.Q.palette.gray400 : presets/* Theme.palette.black */.Q.palette.black,
                        placeholderColor,
                        presets/* Theme.layout.gapQuarter.name */.Q.layout.gapQuarter.name,
                        visible ? "180" : "0",
                        iconBorder
                    ]
                ]
            ]) + " " + (props && props.className != null && props.className || classes || ""),
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(select_input, {
                    ref: inputRef,
                    visible: visible,
                    onBlur: onInputBlur,
                    onFocus: ()=>setSelectFocus(true)
                }),
                isEmpty && /*#__PURE__*/ jsx_runtime_.jsx("span", {
                    className: style_default().dynamic([
                        [
                            "90b0f54e744e947e",
                            [
                                disabled ? "not-allowed" : "pointer",
                                border,
                                presets/* Theme.layout.radius.name */.Q.layout.radius.name,
                                disabled ? presets/* Theme.palette.gray50.name */.Q.palette.gray50.name : presets/* Theme.palette.background.name */.Q.palette.background.name,
                                SCALES.fs(0.875),
                                SCALES.height(2.25),
                                SCALES.width(1, "initial"),
                                SCALES.pt(0),
                                SCALES.pr(0.334),
                                SCALES.pb(0),
                                SCALES.pl(0.667),
                                SCALES.mt(0),
                                SCALES.mr(0),
                                SCALES.mb(0),
                                SCALES.ml(0),
                                SCALES.pt(0.334),
                                SCALES.pr(0.334),
                                SCALES.pb(0.334),
                                SCALES.pl(0.667),
                                disabled ? presets/* Theme.palette.border */.Q.palette.border : borderActive,
                                disabled ? presets/* Theme.palette.gray500.name */.Q.palette.gray500.name : borderActive,
                                disabled ? presets/* Theme.palette.gray400 */.Q.palette.gray400 : presets/* Theme.palette.black */.Q.palette.black,
                                placeholderColor,
                                presets/* Theme.layout.gapQuarter.name */.Q.layout.gapQuarter.name,
                                visible ? "180" : "0",
                                iconBorder
                            ]
                        ]
                    ]) + " " + "value placeholder",
                    children: /*#__PURE__*/ jsx_runtime_.jsx(ellipsis, {
                        height: "var(--select-height)",
                        children: placeholder
                    })
                }),
                value && !multiple && /*#__PURE__*/ jsx_runtime_.jsx("span", {
                    className: style_default().dynamic([
                        [
                            "90b0f54e744e947e",
                            [
                                disabled ? "not-allowed" : "pointer",
                                border,
                                presets/* Theme.layout.radius.name */.Q.layout.radius.name,
                                disabled ? presets/* Theme.palette.gray50.name */.Q.palette.gray50.name : presets/* Theme.palette.background.name */.Q.palette.background.name,
                                SCALES.fs(0.875),
                                SCALES.height(2.25),
                                SCALES.width(1, "initial"),
                                SCALES.pt(0),
                                SCALES.pr(0.334),
                                SCALES.pb(0),
                                SCALES.pl(0.667),
                                SCALES.mt(0),
                                SCALES.mr(0),
                                SCALES.mb(0),
                                SCALES.ml(0),
                                SCALES.pt(0.334),
                                SCALES.pr(0.334),
                                SCALES.pb(0.334),
                                SCALES.pl(0.667),
                                disabled ? presets/* Theme.palette.border */.Q.palette.border : borderActive,
                                disabled ? presets/* Theme.palette.gray500.name */.Q.palette.gray500.name : borderActive,
                                disabled ? presets/* Theme.palette.gray400 */.Q.palette.gray400 : presets/* Theme.palette.black */.Q.palette.black,
                                placeholderColor,
                                presets/* Theme.layout.gapQuarter.name */.Q.layout.gapQuarter.name,
                                visible ? "180" : "0",
                                iconBorder
                            ]
                        ]
                    ]) + " " + "value",
                    children: selectedChild
                }),
                value && multiple && /*#__PURE__*/ jsx_runtime_.jsx(components_grid.Container, {
                    gap: 0.5,
                    children: selectedChild
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(select_dropdown, {
                    ref: dropdownRef,
                    visible: visible,
                    className: dropdownClassName,
                    dropdownStyle: dropdownStyle,
                    disableMatchWidth: disableMatchWidth,
                    getPopupContainer: getPopupContainer,
                    children: children
                }),
                !pure && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: style_default().dynamic([
                        [
                            "90b0f54e744e947e",
                            [
                                disabled ? "not-allowed" : "pointer",
                                border,
                                presets/* Theme.layout.radius.name */.Q.layout.radius.name,
                                disabled ? presets/* Theme.palette.gray50.name */.Q.palette.gray50.name : presets/* Theme.palette.background.name */.Q.palette.background.name,
                                SCALES.fs(0.875),
                                SCALES.height(2.25),
                                SCALES.width(1, "initial"),
                                SCALES.pt(0),
                                SCALES.pr(0.334),
                                SCALES.pb(0),
                                SCALES.pl(0.667),
                                SCALES.mt(0),
                                SCALES.mr(0),
                                SCALES.mb(0),
                                SCALES.ml(0),
                                SCALES.pt(0.334),
                                SCALES.pr(0.334),
                                SCALES.pb(0.334),
                                SCALES.pl(0.667),
                                disabled ? presets/* Theme.palette.border */.Q.palette.border : borderActive,
                                disabled ? presets/* Theme.palette.gray500.name */.Q.palette.gray500.name : borderActive,
                                disabled ? presets/* Theme.palette.gray400 */.Q.palette.gray400 : presets/* Theme.palette.black */.Q.palette.black,
                                placeholderColor,
                                presets/* Theme.layout.gapQuarter.name */.Q.layout.gapQuarter.name,
                                visible ? "180" : "0",
                                iconBorder
                            ]
                        ]
                    ]) + " " + "icon",
                    children: icon
                }),
                jsx_runtime_.jsx((style_default()), {
                    id: "90b0f54e744e947e",
                    dynamic: [
                        disabled ? "not-allowed" : "pointer",
                        border,
                        presets/* Theme.layout.radius.name */.Q.layout.radius.name,
                        disabled ? presets/* Theme.palette.gray50.name */.Q.palette.gray50.name : presets/* Theme.palette.background.name */.Q.palette.background.name,
                        SCALES.fs(0.875),
                        SCALES.height(2.25),
                        SCALES.width(1, "initial"),
                        SCALES.pt(0),
                        SCALES.pr(0.334),
                        SCALES.pb(0),
                        SCALES.pl(0.667),
                        SCALES.mt(0),
                        SCALES.mr(0),
                        SCALES.mb(0),
                        SCALES.ml(0),
                        SCALES.pt(0.334),
                        SCALES.pr(0.334),
                        SCALES.pb(0.334),
                        SCALES.pl(0.667),
                        disabled ? presets/* Theme.palette.border */.Q.palette.border : borderActive,
                        disabled ? presets/* Theme.palette.gray500.name */.Q.palette.gray500.name : borderActive,
                        disabled ? presets/* Theme.palette.gray400 */.Q.palette.gray400 : presets/* Theme.palette.black */.Q.palette.black,
                        placeholderColor,
                        presets/* Theme.layout.gapQuarter.name */.Q.layout.gapQuarter.name,
                        visible ? "180" : "0",
                        iconBorder
                    ],
                    children: `.select.__jsx-style-dynamic-selector{display:-webkit-inline-box;display:-webkit-inline-flex;display:-moz-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;white-space:nowrap;position:relative;cursor:${disabled ? "not-allowed" : "pointer"};max-width:90vw;overflow:hidden;-webkit-transition:border 150ms ease-in 0s,color 200ms ease-out 0s,box-shadow 200ms ease 0s;-moz-transition:border 150ms ease-in 0s,color 200ms ease-out 0s,box-shadow 200ms ease 0s;-o-transition:border 150ms ease-in 0s,color 200ms ease-out 0s,box-shadow 200ms ease 0s;transition:border 150ms ease-in 0s,color 200ms ease-out 0s,box-shadow 200ms ease 0s;border:1px solid ${border};-webkit-border-radius:${presets/* Theme.layout.radius.name */.Q.layout.radius.name};-moz-border-radius:${presets/* Theme.layout.radius.name */.Q.layout.radius.name};border-radius:${presets/* Theme.layout.radius.name */.Q.layout.radius.name};background-color:${disabled ? presets/* Theme.palette.gray50.name */.Q.palette.gray50.name : presets/* Theme.palette.background.name */.Q.palette.background.name};--select-font-size:${SCALES.fs(0.875)};--select-height:${SCALES.height(2.25)};min-width:11.5em;width:${SCALES.width(1, "initial")};height:var(--select-height);padding:${SCALES.pt(0)} ${SCALES.pr(0.334)} ${SCALES.pb(0)} ${SCALES.pl(0.667)};margin:${SCALES.mt(0)} ${SCALES.mr(0)} ${SCALES.mb(0)} ${SCALES.ml(0)}}.multiple.__jsx-style-dynamic-selector{height:auto;min-height:var(--select-height);padding:${SCALES.pt(0.334)} ${SCALES.pr(0.334)} ${SCALES.pb(0.334)} ${SCALES.pl(0.667)}}.select.active.__jsx-style-dynamic-selector,.select.__jsx-style-dynamic-selector:hover{border-color:${disabled ? presets/* Theme.palette.border */.Q.palette.border : borderActive}}.select.active.icon.__jsx-style-dynamic-selector,.select.__jsx-style-dynamic-selector:hover .icon.__jsx-style-dynamic-selector{color:${disabled ? presets/* Theme.palette.gray500.name */.Q.palette.gray500.name : borderActive}}.value.__jsx-style-dynamic-selector{display:-webkit-inline-box;display:-webkit-inline-flex;display:-moz-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-flex:1;-webkit-flex:1;-moz-box-flex:1;-ms-flex:1;flex:1;height:100%;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;line-height:1;padding:0;margin-right:1.25em;font-size:var(--select-font-size);color:${disabled ? presets/* Theme.palette.gray400 */.Q.palette.gray400 : presets/* Theme.palette.black */.Q.palette.black};width:-webkit-calc(100% - 1.25em);width:-moz-calc(100% - 1.25em);width:calc(100% - 1.25em)}.value.__jsx-style-dynamic-selector>div,.value.__jsx-style-dynamic-selector>div:hover{-webkit-border-radius:0;-moz-border-radius:0;border-radius:0;background-color:transparent;padding:0;margin:0;color:inherit}.placeholder.__jsx-style-dynamic-selector{color:${placeholderColor}}.icon.__jsx-style-dynamic-selector{position:absolute;right:${presets/* Theme.layout.gapQuarter.name */.Q.layout.gapQuarter.name};font-size:var(--select-font-size);top:50%;bottom:0;-webkit-transform:translateY(-50%)rotate(${visible ? "180" : "0"}deg);-moz-transform:translateY(-50%)rotate(${visible ? "180" : "0"}deg);-ms-transform:translateY(-50%)rotate(${visible ? "180" : "0"}deg);-o-transform:translateY(-50%)rotate(${visible ? "180" : "0"}deg);transform:translateY(-50%)rotate(${visible ? "180" : "0"}deg);pointer-events:none;-webkit-transition:-webkit-transform 200ms ease;-moz-transition:-moz-transform 200ms ease;-o-transition:-o-transform 200ms ease;transition:-webkit-transform 200ms ease;transition:-moz-transform 200ms ease;transition:-o-transform 200ms ease;transition:transform 200ms ease;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;color:${iconBorder}}`
                })
            ]
        })
    });
});
SelectComponent.defaultProps = select_defaultProps;
SelectComponent.displayName = "GeistSelect";
const select_Select = with_scale(SelectComponent);
/* harmony default export */ const select_select = (select_Select);

;// CONCATENATED MODULE: ../core/components/select/select-option.tsx


var select_option_rest = undefined && undefined.__rest || function(s, e) {
    var t = {};
    for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") for(var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++){
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
};







const select_option_defaultProps = {
    disabled: false,
    divider: false,
    label: false,
    className: "",
    preventAllEvents: false
};
const SelectOptionComponent = (_a)=>{
    var { value: identValue , className , children , disabled , divider , label , preventAllEvents  } = _a, props = select_option_rest(_a, [
        "value",
        "className",
        "children",
        "disabled",
        "divider",
        "label",
        "preventAllEvents"
    ]);
    const { SCALES  } = use_scale();
    const { updateValue , value , disableAll  } = useSelectContext();
    const isDisabled = (0,external_react_.useMemo)(()=>disabled || disableAll, [
        disabled,
        disableAll
    ]);
    const isLabel = (0,external_react_.useMemo)(()=>label || divider, [
        label,
        divider
    ]);
    const classes = components_use_classes("option", {
        divider,
        label
    }, className);
    if (!isLabel && identValue === undefined) {
        use_warning('The props "value" is required.', "Select Option");
    }
    const selected = (0,external_react_.useMemo)(()=>{
        if (!value) return false;
        if (typeof value === "string") {
            return identValue === value;
        }
        return value.includes(`${identValue}`);
    }, [
        identValue,
        value
    ]);
    const bgColor = (0,external_react_.useMemo)(()=>{
        if (isDisabled) return presets/* Theme.palette.gray50.name */.Q.palette.gray50.name;
        return selected ? presets/* Theme.palette.gray200.name */.Q.palette.gray200.name : presets/* Theme.palette.background.name */.Q.palette.background.name;
    }, [
        selected,
        isDisabled,
        presets/* Theme.palette */.Q.palette
    ]);
    const hoverBgColor = (0,external_react_.useMemo)(()=>{
        if (isDisabled || isLabel || selected) return bgColor;
        return presets/* Theme.palette.gray50.name */.Q.palette.gray50.name;
    }, [
        selected,
        isDisabled,
        presets/* Theme.palette */.Q.palette,
        isLabel,
        bgColor
    ]);
    const color = (0,external_react_.useMemo)(()=>{
        if (isDisabled) return presets/* Theme.palette.gray400.name */.Q.palette.gray400.name;
        return selected ? presets/* Theme.palette.black.name */.Q.palette.black.name : presets/* Theme.palette.gray500.name */.Q.palette.gray500.name;
    }, [
        selected,
        isDisabled,
        presets/* Theme.palette */.Q.palette
    ]);
    const clickHandler = (event)=>{
        if (preventAllEvents) return;
        event.stopPropagation();
        event.nativeEvent.stopImmediatePropagation();
        event.preventDefault();
        if (isDisabled || isLabel) return;
        updateValue && updateValue(identValue);
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        onClick: clickHandler,
        ...props,
        className: style_default().dynamic([
            [
                "1072a0bbda19108d",
                [
                    bgColor,
                    color,
                    isDisabled ? "not-allowed" : "pointer",
                    SCALES.fs(0.75),
                    SCALES.width(1, "100%"),
                    SCALES.height(2.25),
                    SCALES.pt(0),
                    SCALES.pr(0.667),
                    SCALES.pb(0),
                    SCALES.pl(0.667),
                    SCALES.mt(0),
                    SCALES.mr(0),
                    SCALES.mb(0),
                    SCALES.ml(0),
                    hoverBgColor,
                    presets/* Theme.palette.gray700.name */.Q.palette.gray700.name,
                    presets/* Theme.palette.border.name */.Q.palette.border.name,
                    SCALES.width(1, "100%"),
                    SCALES.height(1, 0),
                    SCALES.pt(0),
                    SCALES.pr(0),
                    SCALES.pb(0),
                    SCALES.pl(0),
                    SCALES.mt(0.5),
                    SCALES.mr(0),
                    SCALES.mb(0.5),
                    SCALES.ml(0),
                    presets/* Theme.palette.gray700.name */.Q.palette.gray700.name,
                    presets/* Theme.palette.border.name */.Q.palette.border.name,
                    SCALES.fs(0.875),
                    SCALES.width(1, "100%")
                ]
            ]
        ]) + " " + (props && props.className != null && props.className || classes || ""),
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(ellipsis, {
                height: SCALES.height(2.25),
                children: children
            }),
            jsx_runtime_.jsx((style_default()), {
                id: "1072a0bbda19108d",
                dynamic: [
                    bgColor,
                    color,
                    isDisabled ? "not-allowed" : "pointer",
                    SCALES.fs(0.75),
                    SCALES.width(1, "100%"),
                    SCALES.height(2.25),
                    SCALES.pt(0),
                    SCALES.pr(0.667),
                    SCALES.pb(0),
                    SCALES.pl(0.667),
                    SCALES.mt(0),
                    SCALES.mr(0),
                    SCALES.mb(0),
                    SCALES.ml(0),
                    hoverBgColor,
                    presets/* Theme.palette.gray700.name */.Q.palette.gray700.name,
                    presets/* Theme.palette.border.name */.Q.palette.border.name,
                    SCALES.width(1, "100%"),
                    SCALES.height(1, 0),
                    SCALES.pt(0),
                    SCALES.pr(0),
                    SCALES.pb(0),
                    SCALES.pl(0),
                    SCALES.mt(0.5),
                    SCALES.mr(0),
                    SCALES.mb(0.5),
                    SCALES.ml(0),
                    presets/* Theme.palette.gray700.name */.Q.palette.gray700.name,
                    presets/* Theme.palette.border.name */.Q.palette.border.name,
                    SCALES.fs(0.875),
                    SCALES.width(1, "100%")
                ],
                children: `.option.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;max-width:100%;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;-webkit-box-pack:start;-webkit-justify-content:flex-start;-moz-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;font-weight:normal;background-color:${bgColor};color:${color};-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;border:0;cursor:${isDisabled ? "not-allowed" : "pointer"};-webkit-transition:background.2s ease 0s,border-color.2s ease 0s;-moz-transition:background.2s ease 0s,border-color.2s ease 0s;-o-transition:background.2s ease 0s,border-color.2s ease 0s;transition:background.2s ease 0s,border-color.2s ease 0s;--select-font-size:${SCALES.fs(0.75)};font-size:var(--select-font-size);width:${SCALES.width(1, "100%")};height:${SCALES.height(2.25)};padding:${SCALES.pt(0)} ${SCALES.pr(0.667)} ${SCALES.pb(0)} ${SCALES.pl(0.667)};margin:${SCALES.mt(0)} ${SCALES.mr(0)} ${SCALES.mb(0)} ${SCALES.ml(0)}}.option.__jsx-style-dynamic-selector:hover{background-color:${hoverBgColor};color:${presets/* Theme.palette.gray700.name */.Q.palette.gray700.name}}.divider.__jsx-style-dynamic-selector{line-height:0;overflow:hidden;border-top:1px solid ${presets/* Theme.palette.border.name */.Q.palette.border.name};width:${SCALES.width(1, "100%")};height:${SCALES.height(1, 0)};padding:${SCALES.pt(0)} ${SCALES.pr(0)} ${SCALES.pb(0)} ${SCALES.pl(0)};margin:${SCALES.mt(0.5)} ${SCALES.mr(0)} ${SCALES.mb(0.5)} ${SCALES.ml(0)}}.label.__jsx-style-dynamic-selector{color:${presets/* Theme.palette.gray700.name */.Q.palette.gray700.name};border-bottom:1px solid ${presets/* Theme.palette.border.name */.Q.palette.border.name};text-transform:capitalize;cursor:default;font-size:${SCALES.fs(0.875)};width:${SCALES.width(1, "100%")};font-weight:500}`
            })
        ]
    });
};
SelectOptionComponent.defaultProps = select_option_defaultProps;
SelectOptionComponent.displayName = "NuiSelectOption";
const SelectOption = with_scale(SelectOptionComponent);
/* harmony default export */ const select_option = (SelectOption);

;// CONCATENATED MODULE: ../core/components/select/index.ts


select_select.Option = select_option;
/* harmony default export */ const components_select = ((/* unused pure expression or super */ null && (Select)));

;// CONCATENATED MODULE: ../core/components/use-body-scroll/use-body-scroll.ts

const defaultOptions = {
    scrollLayer: false,
    delayReset: 0
};
const elementStack = new Map();
const getOwnerPaddingRight = (element)=>{
    const owner = (element === null || element === void 0 ? void 0 : element.ownerDocument) || document;
    const view = owner.defaultView || window;
    return Number.parseInt(view.getComputedStyle(element).paddingRight, 10) || 0;
};
const getOwnerScrollbarWidth = (element)=>{
    const doc = (element === null || element === void 0 ? void 0 : element.ownerDocument) || document;
    return Math.abs(window.innerWidth - doc.documentElement.clientWidth);
};
const use_body_scroll_useBodyScroll = (elementRef, options)=>{
    /* istanbul ignore next */ if (typeof document === "undefined") return [
        false,
        (t)=>t
    ];
    const elRef = elementRef || useRef(document.body);
    const { 0: hidden , 1: setHidden  } = useState(false);
    const safeOptions = Object.assign(Object.assign({}, defaultOptions), options || {});
    useEffect(()=>{
        if (!elRef || !elRef.current) return;
        const lastOverflow = elRef.current.style.overflow;
        if (hidden) {
            if (elementStack.has(elRef.current)) return;
            const paddingRight = getOwnerPaddingRight(elRef.current);
            const scrollbarWidth = getOwnerScrollbarWidth(elRef.current);
            elementStack.set(elRef.current, {
                overflow: lastOverflow,
                paddingRight: elRef.current.style.paddingRight
            });
            elRef.current.style.overflow = "hidden";
            elRef.current.style.paddingRight = `${paddingRight + scrollbarWidth}px`;
            return;
        }
        // reset element overflow
        if (!elementStack.has(elRef.current)) return;
        const reset = (el)=>{
            const store = elementStack.get(el);
            if (!store) return;
            el.style.overflow = store.overflow;
            el.style.paddingRight = store.paddingRight;
            elementStack.delete(el);
        };
        const timer = window.setTimeout(()=>{
            reset(elRef.current);
            window.clearTimeout(timer);
        }, safeOptions.delayReset);
    }, [
        hidden,
        elRef
    ]);
    return [
        hidden,
        setHidden
    ];
};
/* harmony default export */ const use_body_scroll = ((/* unused pure expression or super */ null && (use_body_scroll_useBodyScroll)));

;// CONCATENATED MODULE: ../core/components/use-body-scroll/index.ts

/* harmony default export */ const components_use_body_scroll = ((/* unused pure expression or super */ null && (useBodyScroll)));

;// CONCATENATED MODULE: ../core/components/link/icon.tsx



const LinkIconComponent = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
        viewBox: "0 0 24 24",
        width: "0.9375em",
        height: "0.9375em",
        stroke: "currentColor",
        strokeWidth: "1.5",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        fill: "none",
        shapeRendering: "geometricPrecision",
        className: "jsx-dfc825d7f7c18afc" + " " + "icon",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6",
                className: "jsx-dfc825d7f7c18afc"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M15 3h6v6",
                className: "jsx-dfc825d7f7c18afc"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M10 14L21 3",
                className: "jsx-dfc825d7f7c18afc"
            }),
            jsx_runtime_.jsx((style_default()), {
                id: "dfc825d7f7c18afc",
                children: ".icon.jsx-dfc825d7f7c18afc{margin:0 0 -1px .1875em;display:-webkit-inline-box;display:-webkit-inline-flex;display:-moz-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-align-self:center;-ms-flex-item-align:center;align-self:center;color:currentColor}"
            })
        ]
    });
};
LinkIconComponent.displayName = "NuiLinkIcon";
const LinkIcon = /*#__PURE__*/ external_react_default().memo(LinkIconComponent);
/* harmony default export */ const link_icon = (LinkIcon);

;// CONCATENATED MODULE: ../core/components/link/link.tsx


var link_rest = undefined && undefined.__rest || function(s, e) {
    var t = {};
    for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") for(var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++){
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
};






const link_defaultProps = {
    href: "",
    color: false,
    icon: false,
    underline: false,
    block: false,
    className: ""
};
const LinkComponent = /*#__PURE__*/ external_react_default().forwardRef((_a, ref)=>{
    var { href , color , underline , children , className , block , icon  } = _a, props = link_rest(_a, [
        "href",
        "color",
        "underline",
        "children",
        "className",
        "block",
        "icon"
    ]);
    const { SCALES  } = use_scale();
    const linkColor = color || block ? presets/* Theme.palette.link.name */.Q.palette.link.name : "inherit";
    const hoverColor = color || block ? presets/* Theme.palette.successLight.name */.Q.palette.successLight.name : "inherit";
    const decoration = underline ? "underline" : "none";
    const classes = components_use_classes("link", {
        block
    }, className);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
        href: href,
        ...props,
        ref: ref,
        className: style_default().dynamic([
            [
                "15308695528b7937",
                [
                    linkColor,
                    block ? presets/* Theme.layout.radius.name */.Q.layout.radius.name : 0,
                    SCALES.fs(1, "inherit"),
                    SCALES.width(1, "fit-content"),
                    SCALES.height(1, "auto"),
                    SCALES.mt(0),
                    SCALES.mr(0),
                    SCALES.mb(0),
                    SCALES.ml(0),
                    SCALES.pt(0),
                    SCALES.pr(0),
                    SCALES.pb(0),
                    SCALES.pl(0),
                    SCALES.pt(0.125),
                    SCALES.pr(0.25),
                    SCALES.pb(0.125),
                    SCALES.pl(0.25),
                    SCALES.mt(0),
                    SCALES.mr(-0.125),
                    SCALES.mb(0),
                    SCALES.ml(-0.125),
                    decoration,
                    block ? addColorAlpha(presets/* Theme.palette.link.value */.Q.palette.link.value, 0.1) : "unset",
                    hoverColor
                ]
            ]
        ]) + " " + (props && props.className != null && props.className || classes || ""),
        children: [
            children,
            icon && /*#__PURE__*/ jsx_runtime_.jsx(link_icon, {}),
            jsx_runtime_.jsx((style_default()), {
                id: "15308695528b7937",
                dynamic: [
                    linkColor,
                    block ? presets/* Theme.layout.radius.name */.Q.layout.radius.name : 0,
                    SCALES.fs(1, "inherit"),
                    SCALES.width(1, "fit-content"),
                    SCALES.height(1, "auto"),
                    SCALES.mt(0),
                    SCALES.mr(0),
                    SCALES.mb(0),
                    SCALES.ml(0),
                    SCALES.pt(0),
                    SCALES.pr(0),
                    SCALES.pb(0),
                    SCALES.pl(0),
                    SCALES.pt(0.125),
                    SCALES.pr(0.25),
                    SCALES.pb(0.125),
                    SCALES.pl(0.25),
                    SCALES.mt(0),
                    SCALES.mr(-0.125),
                    SCALES.mb(0),
                    SCALES.ml(-0.125),
                    decoration,
                    block ? addColorAlpha(presets/* Theme.palette.link.value */.Q.palette.link.value, 0.1) : "unset",
                    hoverColor
                ],
                children: `.link.__jsx-style-dynamic-selector{display:-webkit-inline-box;display:-webkit-inline-flex;display:-moz-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:baseline;-webkit-align-items:baseline;-moz-box-align:baseline;-ms-flex-align:baseline;align-items:baseline;line-height:inherit;color:${linkColor};text-decoration:none;-webkit-border-radius:${block ? presets/* Theme.layout.radius.name */.Q.layout.radius.name : 0};-moz-border-radius:${block ? presets/* Theme.layout.radius.name */.Q.layout.radius.name : 0};border-radius:${block ? presets/* Theme.layout.radius.name */.Q.layout.radius.name : 0};-webkit-transition:color 200ms ease 0ms;-moz-transition:color 200ms ease 0ms;-o-transition:color 200ms ease 0ms;transition:color 200ms ease 0ms;font-size:${SCALES.fs(1, "inherit")};width:${SCALES.width(1, "fit-content")};height:${SCALES.height(1, "auto")};margin:${SCALES.mt(0)} ${SCALES.mr(0)} ${SCALES.mb(0)} ${SCALES.ml(0)};padding:${SCALES.pt(0)} ${SCALES.pr(0)} ${SCALES.pb(0)} ${SCALES.pl(0)}}.block.__jsx-style-dynamic-selector{padding:${SCALES.pt(0.125)} ${SCALES.pr(0.25)} ${SCALES.pb(0.125)} ${SCALES.pl(0.25)};margin:${SCALES.mt(0)} ${SCALES.mr(-0.125)} ${SCALES.mb(0)} ${SCALES.ml(-0.125)}}.link.__jsx-style-dynamic-selector:hover,.link.__jsx-style-dynamic-selector:active,.link.__jsx-style-dynamic-selector:focus{-webkit-text-decoration:${decoration};-moz-text-decoration:${decoration};text-decoration:${decoration}}.link.__jsx-style-dynamic-selector:hover{background-color:${block ? addColorAlpha(presets/* Theme.palette.link.value */.Q.palette.link.value, 0.1) : "unset"};color:${hoverColor}}`
            })
        ]
    });
});
LinkComponent.defaultProps = link_defaultProps;
LinkComponent.displayName = "GeistLink";
const Link = with_scale(LinkComponent);
/* harmony default export */ const link_link = (Link);

;// CONCATENATED MODULE: ../core/components/link/index.ts

/* harmony default export */ const components_link = (link_link);

;// CONCATENATED MODULE: ../core/components/image/image.skeleton.tsx


var image_skeleton_rest = undefined && undefined.__rest || function(s, e) {
    var t = {};
    for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") for(var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++){
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
};


const image_skeleton_defaultProps = {
    opacity: 0.5
};
const ImageSkeleton = /*#__PURE__*/ external_react_default().memo((_a)=>{
    var { opacity  } = _a, props = image_skeleton_rest(_a, [
        "opacity"
    ]);
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        ...props,
        className: style_default().dynamic([
            [
                "48638fb9705ea853",
                [
                    presets/* Theme.palette.gray50.name */.Q.palette.gray50.name,
                    presets/* Theme.palette.gray200.name */.Q.palette.gray200.name,
                    presets/* Theme.palette.gray200.name */.Q.palette.gray200.name,
                    presets/* Theme.palette.gray50.name */.Q.palette.gray50.name,
                    opacity
                ]
            ]
        ]) + " " + (props && props.className != null && props.className || "skeleton"),
        children: jsx_runtime_.jsx((style_default()), {
            id: "48638fb9705ea853",
            dynamic: [
                presets/* Theme.palette.gray50.name */.Q.palette.gray50.name,
                presets/* Theme.palette.gray200.name */.Q.palette.gray200.name,
                presets/* Theme.palette.gray200.name */.Q.palette.gray200.name,
                presets/* Theme.palette.gray50.name */.Q.palette.gray50.name,
                opacity
            ],
            children: `.skeleton.__jsx-style-dynamic-selector{position:absolute;top:0;left:0;right:0;bottom:0;width:100%;height:100%;background-image:-webkit-linear-gradient(right,${presets/* Theme.palette.gray50.name */.Q.palette.gray50.name},${presets/* Theme.palette.gray200.name */.Q.palette.gray200.name},${presets/* Theme.palette.gray200.name */.Q.palette.gray200.name},${presets/* Theme.palette.gray50.name */.Q.palette.gray50.name});background-image:-moz-linear-gradient(right,${presets/* Theme.palette.gray50.name */.Q.palette.gray50.name},${presets/* Theme.palette.gray200.name */.Q.palette.gray200.name},${presets/* Theme.palette.gray200.name */.Q.palette.gray200.name},${presets/* Theme.palette.gray50.name */.Q.palette.gray50.name});background-image:-o-linear-gradient(right,${presets/* Theme.palette.gray50.name */.Q.palette.gray50.name},${presets/* Theme.palette.gray200.name */.Q.palette.gray200.name},${presets/* Theme.palette.gray200.name */.Q.palette.gray200.name},${presets/* Theme.palette.gray50.name */.Q.palette.gray50.name});background-image:linear-gradient(270deg,${presets/* Theme.palette.gray50.name */.Q.palette.gray50.name},${presets/* Theme.palette.gray200.name */.Q.palette.gray200.name},${presets/* Theme.palette.gray200.name */.Q.palette.gray200.name},${presets/* Theme.palette.gray50.name */.Q.palette.gray50.name});-webkit-background-size:400%100%;-moz-background-size:400%100%;-o-background-size:400%100%;background-size:400%100%;-webkit-animation:loading 3s ease-in-out infinite;-moz-animation:loading 3s ease-in-out infinite;-o-animation:loading 3s ease-in-out infinite;animation:loading 3s ease-in-out infinite;opacity:${opacity};-webkit-transition:opacity 300ms ease-out;-moz-transition:opacity 300ms ease-out;-o-transition:opacity 300ms ease-out;transition:opacity 300ms ease-out}@-webkit-keyframes loading{0%{background-position:200%0}to{background-position:-200%0}}@-moz-keyframes loading{0%{background-position:200%0}to{background-position:-200%0}}@-o-keyframes loading{0%{background-position:200%0}to{background-position:-200%0}}@keyframes loading{0%{background-position:200%0}to{background-position:-200%0}}`
        })
    });
});
ImageSkeleton.defaultProps = image_skeleton_defaultProps;
ImageSkeleton.displayName = "NuiImageSkeleton";
/* harmony default export */ const image_skeleton = (ImageSkeleton);

;// CONCATENATED MODULE: ../core/components/image/helpers.ts
const transformDataSource = (src)=>{
    const left = `${src}`.slice(0, 4);
    if (encodeURIComponent(left) === "%3Csvg") {
        return `data:image/svg+xml;utf8,${src}`;
    }
    return src;
};
const getHostFromUrl = (url)=>{
    try {
        return new URL(url).host;
    } catch (e) {
        return url;
    }
};

;// CONCATENATED MODULE: ../core/components/image/image.tsx


var image_rest = undefined && undefined.__rest || function(s, e) {
    var t = {};
    for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") for(var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++){
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
};






const image_defaultProps = {
    disableSkeleton: false,
    className: "",
    maxDelay: 3000
};
const ImageComponent = (_a)=>{
    var { src , disableSkeleton , className , maxDelay  } = _a, props = image_rest(_a, [
        "src",
        "disableSkeleton",
        "className",
        "maxDelay"
    ]);
    const { SCALES , getScaleProps  } = use_scale();
    const width = getScaleProps([
        "width",
        "w"
    ]);
    const height = getScaleProps([
        "height",
        "h"
    ]);
    const showAnimation = !disableSkeleton && width && height;
    const { 0: loading , 1: setLoading  } = (0,external_react_.useState)(true);
    const { 0: showSkeleton , 1: setShowSkeleton  } = (0,external_react_.useState)(true);
    const imageRef = (0,external_react_.useRef)(null);
    const url = (0,external_react_.useMemo)(()=>transformDataSource(src), [
        src
    ]);
    const imageLoaded = ()=>{
        if (!showAnimation) return;
        setLoading(false);
    };
    (0,external_react_.useEffect)(()=>{
        if (!showAnimation) return;
        if (!imageRef.current) return;
        if (imageRef.current.complete) {
            setLoading(false);
            setShowSkeleton(false);
        }
    });
    (0,external_react_.useEffect)(()=>{
        const timer = setTimeout(()=>{
            if (showAnimation) {
                setShowSkeleton(false);
            }
            clearTimeout(timer);
        }, maxDelay);
        return ()=>clearTimeout(timer);
    }, [
        loading
    ]);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: style_default().dynamic([
            [
                "ec24dc6145446df4",
                [
                    presets/* Theme.layout.radius.name */.Q.layout.radius.name,
                    SCALES.width(1, "auto"),
                    SCALES.height(1, "auto"),
                    SCALES.mt(0),
                    SCALES.mr(0, "auto"),
                    SCALES.mb(0),
                    SCALES.ml(0, "auto"),
                    SCALES.pt(0),
                    SCALES.pr(0),
                    SCALES.pb(0),
                    SCALES.pl(0),
                    SCALES.width(1, "auto"),
                    SCALES.height(1, "auto")
                ]
            ]
        ]) + " " + (components_use_classes("image", className) || ""),
        children: [
            showSkeleton && showAnimation && /*#__PURE__*/ jsx_runtime_.jsx(image_skeleton, {
                opacity: loading ? 0.5 : 0
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                ref: imageRef,
                onLoad: imageLoaded,
                src: url,
                ...props,
                className: style_default().dynamic([
                    [
                        "ec24dc6145446df4",
                        [
                            presets/* Theme.layout.radius.name */.Q.layout.radius.name,
                            SCALES.width(1, "auto"),
                            SCALES.height(1, "auto"),
                            SCALES.mt(0),
                            SCALES.mr(0, "auto"),
                            SCALES.mb(0),
                            SCALES.ml(0, "auto"),
                            SCALES.pt(0),
                            SCALES.pr(0),
                            SCALES.pb(0),
                            SCALES.pl(0),
                            SCALES.width(1, "auto"),
                            SCALES.height(1, "auto")
                        ]
                    ]
                ]) + " " + (props && props.className != null && props.className || "")
            }),
            jsx_runtime_.jsx((style_default()), {
                id: "ec24dc6145446df4",
                dynamic: [
                    presets/* Theme.layout.radius.name */.Q.layout.radius.name,
                    SCALES.width(1, "auto"),
                    SCALES.height(1, "auto"),
                    SCALES.mt(0),
                    SCALES.mr(0, "auto"),
                    SCALES.mb(0),
                    SCALES.ml(0, "auto"),
                    SCALES.pt(0),
                    SCALES.pr(0),
                    SCALES.pb(0),
                    SCALES.pl(0),
                    SCALES.width(1, "auto"),
                    SCALES.height(1, "auto")
                ],
                children: `.image.__jsx-style-dynamic-selector{position:relative;-webkit-border-radius:${presets/* Theme.layout.radius.name */.Q.layout.radius.name};-moz-border-radius:${presets/* Theme.layout.radius.name */.Q.layout.radius.name};border-radius:${presets/* Theme.layout.radius.name */.Q.layout.radius.name};overflow:hidden;max-width:100%;width:${SCALES.width(1, "auto")};height:${SCALES.height(1, "auto")};margin:${SCALES.mt(0)} ${SCALES.mr(0, "auto")} ${SCALES.mb(0)} ${SCALES.ml(0, "auto")};padding:${SCALES.pt(0)} ${SCALES.pr(0)} ${SCALES.pb(0)} ${SCALES.pl(0)}}img.__jsx-style-dynamic-selector{width:${SCALES.width(1, "auto")};height:${SCALES.height(1, "auto")};-o-object-fit:scale-down;object-fit:scale-down;display:inline-block}`
            })
        ]
    });
};
ImageComponent.defaultProps = image_defaultProps;
ImageComponent.displayName = "NuiImage";
const Image = with_scale(ImageComponent);
/* harmony default export */ const image_image = (Image);

;// CONCATENATED MODULE: ../core/components/image/image-browser-https-icon.tsx



const ImageBrowserHttpsIcon = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
        viewBox: "0 0 24 24",
        fill: "currentColor",
        className: "jsx-46e7bcef6a12ca1b",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M5 10.2H19V21H5V10.2Z",
                className: "jsx-46e7bcef6a12ca1b"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M12 12C13.933 12 15.5 10.3882 15.5 8.4C15.5 6.41177 13.933 4.8 12 4.8C10.067 4.8 8.5 6.41177 8.5 8.4C8.5 10.3882 10.067 12 12 12ZM12 13.8C14.8995 13.8 17.25 11.3823 17.25 8.4C17.25 5.41766 14.8995 3 12 3C9.10051 3 6.75 5.41766 6.75 8.4C6.75 11.3823 9.10051 13.8 12 13.8Z",
                className: "jsx-46e7bcef6a12ca1b"
            }),
            jsx_runtime_.jsx((style_default()), {
                id: "46e7bcef6a12ca1b",
                children: "svg.jsx-46e7bcef6a12ca1b{width:1em;height:1em}"
            })
        ]
    });
};
const MemoImageBrowserHttpsIcon = /*#__PURE__*/ external_react_default().memo(ImageBrowserHttpsIcon);
/* harmony default export */ const image_browser_https_icon = (MemoImageBrowserHttpsIcon);

;// CONCATENATED MODULE: ../core/components/image/styles.ts
const getBrowserColors = (invert, palette)=>{
    return invert ? {
        color: palette.black.name,
        barBgColor: palette.background.name,
        inputBgColor: palette.gray950.name,
        borderColor: palette.gray700.name,
        titleColor: palette.gray200.name
    } : {
        color: palette.black.name,
        barBgColor: palette.background.name,
        inputBgColor: palette.gray50.name,
        borderColor: palette.border.name,
        titleColor: palette.gray500.name
    };
};

;// CONCATENATED MODULE: ../core/components/image/image-browser.tsx


var image_browser_rest = undefined && undefined.__rest || function(s, e) {
    var t = {};
    for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") for(var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++){
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
};








const image_browser_defaultProps = {
    className: "",
    showFullLink: false,
    anchorProps: {},
    invert: false
};
const getTitle = (title, colors)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: style_default().dynamic([
            [
                "5124d5c7123e2fe5",
                [
                    colors.titleColor
                ]
            ]
        ]) + " " + "title",
        children: [
            title,
            jsx_runtime_.jsx((style_default()), {
                id: "5124d5c7123e2fe5",
                dynamic: [
                    colors.titleColor
                ],
                children: `.title.__jsx-style-dynamic-selector{color:${colors.titleColor};font-size:.75em}`
            })
        ]
    });
const getAddressInput = (url, showFullLink, colors, anchorProps)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: style_default().dynamic([
            [
                "51b133d8d021f9a4",
                [
                    colors.inputBgColor
                ]
            ]
        ]) + " " + "address-input",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                className: style_default().dynamic([
                    [
                        "51b133d8d021f9a4",
                        [
                            colors.inputBgColor
                        ]
                    ]
                ]) + " " + "https",
                children: /*#__PURE__*/ jsx_runtime_.jsx(image_browser_https_icon, {})
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(components_link, {
                href: url,
                title: url,
                target: "_blank",
                ...anchorProps,
                children: showFullLink ? url : getHostFromUrl(url)
            }),
            jsx_runtime_.jsx((style_default()), {
                id: "51b133d8d021f9a4",
                dynamic: [
                    colors.inputBgColor
                ],
                children: `.address-input.__jsx-style-dynamic-selector{height:1.75em;max-width:60%;min-width:40%;background-color:${colors.inputBgColor};color:inherit;-webkit-border-radius:3px;-moz-border-radius:3px;border-radius:3px;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;padding:0 10px;overflow:hidden;position:relative}.address-input.__jsx-style-dynamic-selector *{font-size:.75em;color:inherit}.address-input.__jsx-style-dynamic-selector a{max-width:90%;overflow:hidden;white-space:nowrap;-o-text-overflow:ellipsis;text-overflow:ellipsis;display:inline-block;color:inherit}.https.__jsx-style-dynamic-selector{width:.75em;height:.75em;font-size:1em;margin-right:.31em;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;margin-top:-1px;color:inherit;display:-webkit-inline-box;display:-webkit-inline-flex;display:-moz-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center}`
            })
        ]
    });
const ImageBrowserComponent = /*#__PURE__*/ external_react_default().forwardRef((_a, ref)=>{
    var { url , title , children , showFullLink , invert , anchorProps , className  } = _a, props = image_browser_rest(_a, [
        "url",
        "title",
        "children",
        "showFullLink",
        "invert",
        "anchorProps",
        "className"
    ]);
    const { SCALES  } = use_scale();
    const colors = (0,external_react_.useMemo)(()=>getBrowserColors(invert, presets/* Theme.palette */.Q.palette), [
        invert,
        presets/* Theme.palette */.Q.palette
    ]);
    const input = (0,external_react_.useMemo)(()=>{
        if (url) return getAddressInput(url, showFullLink, colors, anchorProps);
        if (title) return getTitle(title, colors);
        return null;
    }, [
        url,
        showFullLink,
        title,
        colors,
        anchorProps
    ]);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        ref: ref,
        ...props,
        className: style_default().dynamic([
            [
                "a9b67627db00867a",
                [
                    presets/* Theme.expressiveness.shadowLarge */.Q.expressiveness.shadowLarge,
                    presets/* Theme.layout.radius */.Q.layout.radius,
                    SCALES.fs(1),
                    SCALES.width(1, "max-content"),
                    SCALES.height(1, "auto"),
                    SCALES.mt(0),
                    SCALES.mr(0, "auto"),
                    SCALES.mb(0),
                    SCALES.ml(0, "auto"),
                    SCALES.pt(0),
                    SCALES.pr(0),
                    SCALES.pb(0),
                    SCALES.pl(0),
                    colors.color,
                    colors.barBgColor,
                    colors.borderColor,
                    presets/* Theme.layout.gapHalf.name */.Q.layout.gapHalf.name
                ]
            ]
        ]) + " " + (props && props.className != null && props.className || components_use_classes("browser", className) || ""),
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("header", {
                className: style_default().dynamic([
                    [
                        "a9b67627db00867a",
                        [
                            presets/* Theme.expressiveness.shadowLarge */.Q.expressiveness.shadowLarge,
                            presets/* Theme.layout.radius */.Q.layout.radius,
                            SCALES.fs(1),
                            SCALES.width(1, "max-content"),
                            SCALES.height(1, "auto"),
                            SCALES.mt(0),
                            SCALES.mr(0, "auto"),
                            SCALES.mb(0),
                            SCALES.ml(0, "auto"),
                            SCALES.pt(0),
                            SCALES.pr(0),
                            SCALES.pb(0),
                            SCALES.pl(0),
                            colors.color,
                            colors.barBgColor,
                            colors.borderColor,
                            presets/* Theme.layout.gapHalf.name */.Q.layout.gapHalf.name
                        ]
                    ]
                ]),
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: style_default().dynamic([
                            [
                                "a9b67627db00867a",
                                [
                                    presets/* Theme.expressiveness.shadowLarge */.Q.expressiveness.shadowLarge,
                                    presets/* Theme.layout.radius */.Q.layout.radius,
                                    SCALES.fs(1),
                                    SCALES.width(1, "max-content"),
                                    SCALES.height(1, "auto"),
                                    SCALES.mt(0),
                                    SCALES.mr(0, "auto"),
                                    SCALES.mb(0),
                                    SCALES.ml(0, "auto"),
                                    SCALES.pt(0),
                                    SCALES.pr(0),
                                    SCALES.pb(0),
                                    SCALES.pl(0),
                                    colors.color,
                                    colors.barBgColor,
                                    colors.borderColor,
                                    presets/* Theme.layout.gapHalf.name */.Q.layout.gapHalf.name
                                ]
                            ]
                        ]) + " " + "traffic",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: style_default().dynamic([
                                    [
                                        "a9b67627db00867a",
                                        [
                                            presets/* Theme.expressiveness.shadowLarge */.Q.expressiveness.shadowLarge,
                                            presets/* Theme.layout.radius */.Q.layout.radius,
                                            SCALES.fs(1),
                                            SCALES.width(1, "max-content"),
                                            SCALES.height(1, "auto"),
                                            SCALES.mt(0),
                                            SCALES.mr(0, "auto"),
                                            SCALES.mb(0),
                                            SCALES.ml(0, "auto"),
                                            SCALES.pt(0),
                                            SCALES.pr(0),
                                            SCALES.pb(0),
                                            SCALES.pl(0),
                                            colors.color,
                                            colors.barBgColor,
                                            colors.borderColor,
                                            presets/* Theme.layout.gapHalf.name */.Q.layout.gapHalf.name
                                        ]
                                    ]
                                ]) + " " + "close"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: style_default().dynamic([
                                    [
                                        "a9b67627db00867a",
                                        [
                                            presets/* Theme.expressiveness.shadowLarge */.Q.expressiveness.shadowLarge,
                                            presets/* Theme.layout.radius */.Q.layout.radius,
                                            SCALES.fs(1),
                                            SCALES.width(1, "max-content"),
                                            SCALES.height(1, "auto"),
                                            SCALES.mt(0),
                                            SCALES.mr(0, "auto"),
                                            SCALES.mb(0),
                                            SCALES.ml(0, "auto"),
                                            SCALES.pt(0),
                                            SCALES.pr(0),
                                            SCALES.pb(0),
                                            SCALES.pl(0),
                                            colors.color,
                                            colors.barBgColor,
                                            colors.borderColor,
                                            presets/* Theme.layout.gapHalf.name */.Q.layout.gapHalf.name
                                        ]
                                    ]
                                ]) + " " + "mini"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: style_default().dynamic([
                                    [
                                        "a9b67627db00867a",
                                        [
                                            presets/* Theme.expressiveness.shadowLarge */.Q.expressiveness.shadowLarge,
                                            presets/* Theme.layout.radius */.Q.layout.radius,
                                            SCALES.fs(1),
                                            SCALES.width(1, "max-content"),
                                            SCALES.height(1, "auto"),
                                            SCALES.mt(0),
                                            SCALES.mr(0, "auto"),
                                            SCALES.mb(0),
                                            SCALES.ml(0, "auto"),
                                            SCALES.pt(0),
                                            SCALES.pr(0),
                                            SCALES.pb(0),
                                            SCALES.pl(0),
                                            colors.color,
                                            colors.barBgColor,
                                            colors.borderColor,
                                            presets/* Theme.layout.gapHalf.name */.Q.layout.gapHalf.name
                                        ]
                                    ]
                                ]) + " " + "full"
                            })
                        ]
                    }),
                    input
                ]
            }),
            children,
            jsx_runtime_.jsx((style_default()), {
                id: "a9b67627db00867a",
                dynamic: [
                    presets/* Theme.expressiveness.shadowLarge */.Q.expressiveness.shadowLarge,
                    presets/* Theme.layout.radius */.Q.layout.radius,
                    SCALES.fs(1),
                    SCALES.width(1, "max-content"),
                    SCALES.height(1, "auto"),
                    SCALES.mt(0),
                    SCALES.mr(0, "auto"),
                    SCALES.mb(0),
                    SCALES.ml(0, "auto"),
                    SCALES.pt(0),
                    SCALES.pr(0),
                    SCALES.pb(0),
                    SCALES.pl(0),
                    colors.color,
                    colors.barBgColor,
                    colors.borderColor,
                    presets/* Theme.layout.gapHalf.name */.Q.layout.gapHalf.name
                ],
                children: `.browser.__jsx-style-dynamic-selector{background-color:transparent;-webkit-box-shadow:${presets/* Theme.expressiveness.shadowLarge */.Q.expressiveness.shadowLarge};-moz-box-shadow:${presets/* Theme.expressiveness.shadowLarge */.Q.expressiveness.shadowLarge};box-shadow:${presets/* Theme.expressiveness.shadowLarge */.Q.expressiveness.shadowLarge};max-width:100%;-webkit-border-radius:${presets/* Theme.layout.radius */.Q.layout.radius};-moz-border-radius:${presets/* Theme.layout.radius */.Q.layout.radius};border-radius:${presets/* Theme.layout.radius */.Q.layout.radius};overflow:hidden;font-size:${SCALES.fs(1)};width:${SCALES.width(1, "max-content")};height:${SCALES.height(1, "auto")};margin:${SCALES.mt(0)} ${SCALES.mr(0, "auto")} ${SCALES.mb(0)} ${SCALES.ml(0, "auto")};padding:${SCALES.pt(0)} ${SCALES.pr(0)} ${SCALES.pb(0)} ${SCALES.pl(0)}}.browser.__jsx-style-dynamic-selector .image{-webkit-border-top-left-radius:0;-moz-border-radius-topleft:0;border-top-left-radius:0;-webkit-border-top-right-radius:0;-moz-border-radius-topright:0;border-top-right-radius:0}header.__jsx-style-dynamic-selector{height:2.5em;width:100%;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;position:relative;color:${colors.color};background-color:${colors.barBgColor};border-bottom:1px solid ${colors.borderColor}}.traffic.__jsx-style-dynamic-selector{width:auto;position:absolute;left:${presets/* Theme.layout.gapHalf.name */.Q.layout.gapHalf.name};top:50%;-webkit-transform:translateY(-50%);-moz-transform:translateY(-50%);-ms-transform:translateY(-50%);-o-transform:translateY(-50%);transform:translateY(-50%);bottom:0;height:100%;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;font-size:inherit}.traffic.__jsx-style-dynamic-selector span.__jsx-style-dynamic-selector{-webkit-border-radius:50%;-moz-border-radius:50%;border-radius:50%;width:.75em;height:.75em;max-width:20px;max-height:20px;display:inline-block;margin-right:.5em}.close.__jsx-style-dynamic-selector{background-color:#ff5f56}.mini.__jsx-style-dynamic-selector{background-color:#ffbd2e}.full.__jsx-style-dynamic-selector{background-color:#27c93f}`
            })
        ]
    });
});
ImageBrowserComponent.defaultProps = image_browser_defaultProps;
ImageBrowserComponent.displayName = "NuiImageBrowser";
const ImageBrowser = with_scale(ImageBrowserComponent);
/* harmony default export */ const image_browser = (ImageBrowser);

;// CONCATENATED MODULE: ../core/components/image/index.ts


image_image.Browser = image_browser;
/* harmony default export */ const components_image = (image_image);

;// CONCATENATED MODULE: ../core/components/use-media-query/use-media-query.ts



const breakpoints = tuple("xs", "sm", "md", "lg", "xl", "mobile");
const matchType = tuple("up", "down", "default");
const defaultResponsiveOptions = {
    match: "default"
};
const makeQueries = (bp, up, down)=>{
    const queryString = (item)=>{
        const upQuery = `(min-width: ${item.min})`;
        const downQuery = `(max-width: ${item.max})`;
        return up ? upQuery : down ? downQuery : `${upQuery} and ${downQuery}`;
    };
    const xs = queryString(bp.xs);
    return {
        xs: xs,
        mobile: xs,
        sm: queryString(bp.sm),
        md: queryString(bp.md),
        lg: queryString(bp.lg),
        xl: queryString(bp.xl)
    };
};
const use_media_query_useMediaQuery = (breakpoint, options = defaultResponsiveOptions)=>{
    const { match: matchType = "default" , ssrMatchMedia =null  } = options;
    const supportMedia =  false && 0;
    const mediaQueries = useMemo(()=>{
        const up = matchType === "up";
        const down = matchType === "down";
        return makeQueries(Theme.breakpoints, up, down);
    }, [
        Theme.breakpoints,
        options
    ]);
    const query = useMemo(()=>mediaQueries[breakpoint], [
        mediaQueries,
        breakpoint
    ]);
    const matchQuery = (q)=>window.matchMedia(q);
    /**
     * Do nothing in the server-side rendering.
     * If server match query fucntion is simulated, return user-defined value first.
     */ const { 0: state , 1: setState  } = useState(()=>{
        if (supportMedia) return matchQuery(query).matches;
        if (ssrMatchMedia && typeof ssrMatchMedia === "function") {
            return ssrMatchMedia(query).matches;
        }
        return false;
    });
    useEffect(()=>{
        if (!supportMedia) return;
        const queryList = matchQuery(query);
        const update = ()=>setState(matchQuery(query).matches);
        update();
        /**
         * addListener is deprecated. EventTarget.addEventListener is recommended.
         * But in some old browsers, MediaQueryList does not inherit from EventTarget.
         */ queryList.addListener(update);
        return ()=>{
            queryList.removeListener(update);
        };
    }, [
        supportMedia
    ]);
    return state;
};
/* harmony default export */ const use_media_query = ((/* unused pure expression or super */ null && (use_media_query_useMediaQuery)));

;// CONCATENATED MODULE: ../core/components/use-media-query/index.ts

/* harmony default export */ const components_use_media_query = ((/* unused pure expression or super */ null && (useMediaQuery)));

;// CONCATENATED MODULE: ../core/components/tabs/tabs-context.ts

const tabs_context_defaultContext = {
    inGroup: false
};
const TabsContext = external_react_default().createContext(tabs_context_defaultContext);
const useTabsContext = ()=>external_react_default().useContext(TabsContext);

;// CONCATENATED MODULE: ../core/components/utils/use-previous.ts

const usePrevious = (state)=>{
    const ref = (0,external_react_.useRef)(null);
    (0,external_react_.useEffect)(()=>{
        ref.current = state;
    });
    return ref ? ref.current : null;
};
/* harmony default export */ const use_previous = (usePrevious);

;// CONCATENATED MODULE: ../core/components/shared/highlight.tsx


var highlight_rest = undefined && undefined.__rest || function(s, e) {
    var t = {};
    for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") for(var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++){
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
};





const Highlight = (_a)=>{
    var { rect , visible , hoverHeightRatio =1 , hoverWidthRatio =1 , activeOpacity =0.8 , className  } = _a, props = highlight_rest(_a, [
        "rect",
        "visible",
        "hoverHeightRatio",
        "hoverWidthRatio",
        "activeOpacity",
        "className"
    ]);
    const ref = (0,external_react_.useRef)(null);
    const isFirstVisible = use_previous(isUnplacedRect(rect));
    const position = (0,external_react_.useMemo)(()=>{
        const width = rect.width * hoverWidthRatio;
        const height = rect.height * hoverHeightRatio;
        return {
            width: `${width}px`,
            left: `${rect.left + (rect.width - width) / 2}px`,
            height: `${height}px`,
            top: `${rect.elementTop + (rect.height - height) / 2}px`,
            transition: isFirstVisible ? "opacity" : "opacity, width, left, top"
        };
    }, [
        rect,
        hoverWidthRatio,
        hoverHeightRatio
    ]);
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        ref: ref,
        ...props,
        className: style_default().dynamic([
            [
                "838bd5d1007b4bc5",
                [
                    presets/* Theme.palette.gray200.name */.Q.palette.gray200.name,
                    position.width,
                    position.left,
                    position.height,
                    position.top,
                    visible ? activeOpacity : 0,
                    position.transition
                ]
            ]
        ]) + " " + (props && props.className != null && props.className || components_use_classes("highlight", className) || ""),
        children: jsx_runtime_.jsx((style_default()), {
            id: "838bd5d1007b4bc5",
            dynamic: [
                presets/* Theme.palette.gray200.name */.Q.palette.gray200.name,
                position.width,
                position.left,
                position.height,
                position.top,
                visible ? activeOpacity : 0,
                position.transition
            ],
            children: `.highlight.__jsx-style-dynamic-selector{background:${presets/* Theme.palette.gray200.name */.Q.palette.gray200.name};position:absolute;-webkit-border-radius:5px;-moz-border-radius:5px;border-radius:5px;width:${position.width};left:${position.left};height:${position.height};top:${position.top};opacity:${visible ? activeOpacity : 0};-webkit-transition:.15s ease;-moz-transition:.15s ease;-o-transition:.15s ease;transition:.15s ease;-webkit-transition-property:${position.transition};-moz-transition-timing-function:${position.transition};-o-transition-timing-function:${position.transition};transition-property:${position.transition}}`
        })
    });
};
/* harmony default export */ const shared_highlight = (Highlight);

;// CONCATENATED MODULE: ../core/components/tabs/tabs.tsx


var tabs_rest = undefined && undefined.__rest || function(s, e) {
    var t = {};
    for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") for(var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++){
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
};








const tabs_defaultProps = {
    className: "",
    hideDivider: false,
    highlight: true,
    leftSpace: "12px",
    hoverHeightRatio: 0.7,
    hoverWidthRatio: 1.15,
    activeClassName: "",
    activeStyle: {},
    align: "left"
};
const TabsComponent = (_a)=>{
    var { initialValue: userCustomInitialValue , value , hideDivider , hideBorder , children , onChange , className , leftSpace , highlight , hoverHeightRatio , hoverWidthRatio , activeClassName , activeStyle , align  } = _a, props = tabs_rest(_a, [
        "initialValue",
        "value",
        "hideDivider",
        "hideBorder",
        "children",
        "onChange",
        "className",
        "leftSpace",
        "highlight",
        "hoverHeightRatio",
        "hoverWidthRatio",
        "activeClassName",
        "activeStyle",
        "align"
    ]);
    const { SCALES  } = use_scale();
    const { 0: tabs , 1: setTabs  } = (0,external_react_.useState)([]);
    const { 0: selfValue , 1: setSelfValue  } = (0,external_react_.useState)(userCustomInitialValue);
    const ref = (0,external_react_.useRef)(null);
    const { 0: displayHighlight , 1: setDisplayHighlight  } = (0,external_react_.useState)(false);
    const { rect , setRect  } = useRect();
    const register = (next)=>{
        setTabs((last)=>{
            const hasItem = last.find((item)=>item.value === next.value);
            if (!hasItem) return [
                ...last,
                next
            ];
            return last.map((item)=>{
                if (item.value !== next.value) return item;
                return Object.assign(Object.assign({}, item), next);
            });
        });
    };
    const initialValue = (0,external_react_.useMemo)(()=>({
            register,
            currentValue: selfValue,
            inGroup: true,
            leftSpace
        }), [
        selfValue,
        leftSpace
    ]);
    (0,external_react_.useEffect)(()=>{
        if (typeof value === "undefined") return;
        setSelfValue(value);
    }, [
        value
    ]);
    const clickHandler = (value)=>{
        setSelfValue(value);
        onChange && onChange(value);
    };
    const tabItemMouseOverHandler = (event)=>{
        if (!isGeistElement(event.target)) return;
        setRect(event, ()=>ref.current);
        if (highlight) {
            setDisplayHighlight(true);
        }
    };
    return /*#__PURE__*/ jsx_runtime_.jsx(TabsContext.Provider, {
        value: initialValue,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            ...props,
            className: style_default().dynamic([
                [
                    "7044edc578063579",
                    [
                        SCALES.fs(1),
                        SCALES.width(1, "initial"),
                        SCALES.height(1, "auto"),
                        SCALES.pt(0),
                        SCALES.pr(0),
                        SCALES.pb(0),
                        SCALES.pl(0),
                        SCALES.mt(0),
                        SCALES.mr(0),
                        SCALES.mb(0),
                        SCALES.ml(0),
                        align,
                        presets/* Theme.palette.border.name */.Q.palette.border.name,
                        leftSpace
                    ]
                ]
            ]) + " " + (props && props.className != null && props.className || components_use_classes("tabs", className) || ""),
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("header", {
                    ref: ref,
                    onMouseLeave: ()=>setDisplayHighlight(false),
                    className: style_default().dynamic([
                        [
                            "7044edc578063579",
                            [
                                SCALES.fs(1),
                                SCALES.width(1, "initial"),
                                SCALES.height(1, "auto"),
                                SCALES.pt(0),
                                SCALES.pr(0),
                                SCALES.pb(0),
                                SCALES.pl(0),
                                SCALES.mt(0),
                                SCALES.mr(0),
                                SCALES.mb(0),
                                SCALES.ml(0),
                                align,
                                presets/* Theme.palette.border.name */.Q.palette.border.name,
                                leftSpace
                            ]
                        ]
                    ]),
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(shared_highlight, {
                            rect: rect,
                            visible: displayHighlight,
                            hoverHeightRatio: hoverHeightRatio,
                            hoverWidthRatio: hoverWidthRatio
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: style_default().dynamic([
                                [
                                    "7044edc578063579",
                                    [
                                        SCALES.fs(1),
                                        SCALES.width(1, "initial"),
                                        SCALES.height(1, "auto"),
                                        SCALES.pt(0),
                                        SCALES.pr(0),
                                        SCALES.pb(0),
                                        SCALES.pl(0),
                                        SCALES.mt(0),
                                        SCALES.mr(0),
                                        SCALES.mb(0),
                                        SCALES.ml(0),
                                        align,
                                        presets/* Theme.palette.border.name */.Q.palette.border.name,
                                        leftSpace
                                    ]
                                ]
                            ]) + " " + (components_use_classes("scroll-container", {
                                "hide-divider": hideDivider
                            }) || ""),
                            children: tabs.map(({ cell: Cell , value  })=>/*#__PURE__*/ jsx_runtime_.jsx(Cell, {
                                    onClick: clickHandler,
                                    onMouseOver: tabItemMouseOverHandler,
                                    activeClassName: activeClassName,
                                    activeStyle: activeStyle,
                                    hideBorder: hideBorder,
                                    className: style_default().dynamic([
                                        [
                                            "7044edc578063579",
                                            [
                                                SCALES.fs(1),
                                                SCALES.width(1, "initial"),
                                                SCALES.height(1, "auto"),
                                                SCALES.pt(0),
                                                SCALES.pr(0),
                                                SCALES.pb(0),
                                                SCALES.pl(0),
                                                SCALES.mt(0),
                                                SCALES.mr(0),
                                                SCALES.mb(0),
                                                SCALES.ml(0),
                                                align,
                                                presets/* Theme.palette.border.name */.Q.palette.border.name,
                                                leftSpace
                                            ]
                                        ]
                                    ])
                                }, value))
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: style_default().dynamic([
                        [
                            "7044edc578063579",
                            [
                                SCALES.fs(1),
                                SCALES.width(1, "initial"),
                                SCALES.height(1, "auto"),
                                SCALES.pt(0),
                                SCALES.pr(0),
                                SCALES.pb(0),
                                SCALES.pl(0),
                                SCALES.mt(0),
                                SCALES.mr(0),
                                SCALES.mb(0),
                                SCALES.ml(0),
                                align,
                                presets/* Theme.palette.border.name */.Q.palette.border.name,
                                leftSpace
                            ]
                        ]
                    ]) + " " + "content",
                    children: children
                }),
                jsx_runtime_.jsx((style_default()), {
                    id: "7044edc578063579",
                    dynamic: [
                        SCALES.fs(1),
                        SCALES.width(1, "initial"),
                        SCALES.height(1, "auto"),
                        SCALES.pt(0),
                        SCALES.pr(0),
                        SCALES.pb(0),
                        SCALES.pl(0),
                        SCALES.mt(0),
                        SCALES.mr(0),
                        SCALES.mb(0),
                        SCALES.ml(0),
                        align,
                        presets/* Theme.palette.border.name */.Q.palette.border.name,
                        leftSpace
                    ],
                    children: `.tabs.__jsx-style-dynamic-selector{font-size:${SCALES.fs(1)};width:${SCALES.width(1, "initial")};height:${SCALES.height(1, "auto")};padding:${SCALES.pt(0)} ${SCALES.pr(0)} ${SCALES.pb(0)} ${SCALES.pl(0)};margin:${SCALES.mt(0)} ${SCALES.mr(0)} ${SCALES.mb(0)} ${SCALES.ml(0)}}header.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-flex-wrap:nowrap;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;overflow-y:hidden;overflow-x:scroll;scrollbar-width:none;position:relative}.scroll-container.__jsx-style-dynamic-selector{width:100%;height:100%;-webkit-box-flex:1;-webkit-flex:1;-moz-box-flex:1;-ms-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-flex-wrap:nowrap;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:${align};-webkit-justify-content:${align};-moz-box-pack:${align};-ms-flex-pack:${align};justify-content:${align};border-bottom:1px solid ${presets/* Theme.palette.border.name */.Q.palette.border.name};padding-left:${leftSpace}}header.__jsx-style-dynamic-selector::-webkit-scrollbar{display:none}.hide-divider.__jsx-style-dynamic-selector{border-color:transparent}.content.__jsx-style-dynamic-selector{padding-top:.625rem}`
                })
            ]
        })
    });
};
TabsComponent.defaultProps = tabs_defaultProps;
TabsComponent.displayName = "GeistTabs";
const Tabs = with_scale(TabsComponent);
/* harmony default export */ const tabs = (Tabs);

;// CONCATENATED MODULE: ../core/components/tabs/tabs-item.tsx







const tabs_item_defaultProps = {
    disabled: false
};
const TabsItemComponent = ({ children , value , label , disabled ,  })=>{
    const { SCALES  } = use_scale();
    const { register , currentValue  } = useTabsContext();
    const isActive = (0,external_react_.useMemo)(()=>currentValue === value, [
        currentValue,
        value
    ]);
    const TabsInternalCell = ({ onClick , onMouseOver , activeClassName , activeStyle , hideBorder ,  })=>{
        const ref = (0,external_react_.useRef)(null);
        const { currentValue  } = useTabsContext();
        const active = currentValue === value;
        const classes = components_use_classes("tab", {
            active,
            disabled,
            [activeClassName]: active,
            "hide-border": hideBorder
        });
        const clickHandler = ()=>{
            if (disabled) return;
            onClick && onClick(value);
        };
        return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            ref: ref,
            role: "button",
            onMouseOver: onMouseOver,
            onClick: clickHandler,
            style: active ? activeStyle : {},
            "data-geist": "tab-item",
            className: style_default().dynamic([
                [
                    "c92c2a083e49394b",
                    [
                        presets/* Theme.palette.gray500.name */.Q.palette.gray500.name,
                        SCALES.fs(0.875),
                        SCALES.width(1, "auto"),
                        SCALES.height(1, "auto"),
                        SCALES.pt(0.875),
                        SCALES.pr(0.55),
                        SCALES.pb(0.875),
                        SCALES.pl(0.55),
                        SCALES.mt(0),
                        SCALES.mr(0.2),
                        SCALES.mb(0),
                        SCALES.ml(0.2),
                        SCALES.pl(0.28),
                        SCALES.pr(0.28),
                        presets/* Theme.palette.black.name */.Q.palette.black.name,
                        presets/* Theme.palette.black.name */.Q.palette.black.name,
                        presets/* Theme.palette.black.name */.Q.palette.black.name,
                        presets/* Theme.palette.gray500.name */.Q.palette.gray500.name,
                        label
                    ]
                ]
            ]) + " " + (classes || ""),
            children: [
                label,
                jsx_runtime_.jsx((style_default()), {
                    id: "c92c2a083e49394b",
                    dynamic: [
                        presets/* Theme.palette.gray500.name */.Q.palette.gray500.name,
                        SCALES.fs(0.875),
                        SCALES.width(1, "auto"),
                        SCALES.height(1, "auto"),
                        SCALES.pt(0.875),
                        SCALES.pr(0.55),
                        SCALES.pb(0.875),
                        SCALES.pl(0.55),
                        SCALES.mt(0),
                        SCALES.mr(0.2),
                        SCALES.mb(0),
                        SCALES.ml(0.2),
                        SCALES.pl(0.28),
                        SCALES.pr(0.28),
                        presets/* Theme.palette.black.name */.Q.palette.black.name,
                        presets/* Theme.palette.black.name */.Q.palette.black.name,
                        presets/* Theme.palette.black.name */.Q.palette.black.name,
                        presets/* Theme.palette.gray500.name */.Q.palette.gray500.name,
                        label
                    ],
                    children: `.tab.__jsx-style-dynamic-selector{position:relative;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;cursor:pointer;outline:0;text-transform:capitalize;white-space:nowrap;background-color:transparent;color:${presets/* Theme.palette.gray500.name */.Q.palette.gray500.name};-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;font-size:${SCALES.fs(0.875)};line-height:normal;width:${SCALES.width(1, "auto")};height:${SCALES.height(1, "auto")};padding:${SCALES.pt(0.875)} ${SCALES.pr(0.55)} ${SCALES.pb(0.875)} ${SCALES.pl(0.55)};margin:${SCALES.mt(0)} ${SCALES.mr(0.2)} ${SCALES.mb(0)} ${SCALES.ml(0.2)};z-index:1;--tabs-item-hover-left:calc(-1 * ${SCALES.pl(0.28)});--tabs-item-hover-right:calc(-1 * ${SCALES.pr(0.28)})}.tab.__jsx-style-dynamic-selector:hover{color:${presets/* Theme.palette.black.name */.Q.palette.black.name}}.tab.__jsx-style-dynamic-selector:after{position:absolute;content:"";bottom:-1px;left:0;right:0;width:100%;height:2px;-webkit-border-radius:4px;-moz-border-radius:4px;border-radius:4px;-webkit-transform:scaleX(.75);-moz-transform:scaleX(.75);-ms-transform:scaleX(.75);-o-transform:scaleX(.75);transform:scaleX(.75);background-color:${presets/* Theme.palette.black.name */.Q.palette.black.name};-webkit-transition:opacity,-webkit-transform 200ms ease-in;-moz-transition:opacity,-moz-transform 200ms ease-in;-o-transition:opacity,-o-transform 200ms ease-in;transition:opacity,-webkit-transform 200ms ease-in;transition:opacity,-moz-transform 200ms ease-in;transition:opacity,-o-transform 200ms ease-in;transition:opacity,transform 200ms ease-in;opacity:0}.active.__jsx-style-dynamic-selector:after{opacity:1;-webkit-transform:scaleX(1);-moz-transform:scaleX(1);-ms-transform:scaleX(1);-o-transform:scaleX(1);transform:scaleX(1)}.tab.__jsx-style-dynamic-selector svg{max-height:1em;margin-right:5px}.tab.__jsx-style-dynamic-selector:first-of-type{margin-left:0}.active.__jsx-style-dynamic-selector{color:${presets/* Theme.palette.black.name */.Q.palette.black.name}}.disabled.__jsx-style-dynamic-selector{color:${presets/* Theme.palette.gray500.name */.Q.palette.gray500.name};cursor:not-allowed}.hide-border.__jsx-style-dynamic-selector:before{display:block;content:${label};font-weight:500;height:0;overflow:hidden;visibility:hidden}.hide-border.__jsx-style-dynamic-selector:after{display:none}.hide-border.active.__jsx-style-dynamic-selector{font-weight:500}`
                })
            ]
        }, value);
    };
    TabsInternalCell.displayName = "GeistTabsInternalCell";
    (0,external_react_.useEffect)(()=>{
        register && register({
            value,
            cell: TabsInternalCell
        });
    }, [
        value,
        label,
        disabled
    ]);
    /* eslint-disable react/jsx-no-useless-fragment */ return isActive ? /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: children
    }) : null;
};
TabsItemComponent.defaultProps = tabs_item_defaultProps;
TabsItemComponent.displayName = "GeistTabsItem";
const TabsItem = with_scale(TabsItemComponent);
/* harmony default export */ const tabs_item = (TabsItem); /* eslint-enable */ 

;// CONCATENATED MODULE: ../core/components/tabs/index.ts


tabs.Item = tabs_item;
tabs.Tab = tabs_item;
/* harmony default export */ const components_tabs = (tabs);

;// CONCATENATED MODULE: ../core/components/code/code.tsx


var code_rest = undefined && undefined.__rest || function(s, e) {
    var t = {};
    for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") for(var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++){
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
};




const code_defaultProps = {
    block: false,
    className: "",
    name: "",
    classic: false
};
const CodeComponent = (_a)=>{
    var { children , block , className , name , classic  } = _a, props = code_rest(_a, [
        "children",
        "block",
        "className",
        "name",
        "classic"
    ]);
    const { SCALES  } = use_scale();
    const { background , border  } = (0,external_react_.useMemo)(()=>{
        if (!classic) return {
            border: presets/* Theme.palette.gray50.name */.Q.palette.gray50.name,
            background: addColorAlpha(presets/* Theme.palette.gray50.value */.Q.palette.gray50.value, 0.75)
        };
        return {
            border: presets/* Theme.palette.gray200.name */.Q.palette.gray200.name,
            background: presets/* Theme.palette.background.name */.Q.palette.background.name
        };
    }, [
        classic,
        presets/* Theme.palette */.Q.palette
    ]);
    if (!block) return /*#__PURE__*/ jsx_runtime_.jsx("code", {
        ...props,
        children: children
    });
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: style_default().dynamic([
            [
                "52a134c5831d28a8",
                [
                    border,
                    SCALES.fs(0.875),
                    SCALES.width(1, "initial"),
                    SCALES.height(1, "auto"),
                    SCALES.mt(1.3),
                    SCALES.mr(0),
                    SCALES.mb(1.3),
                    SCALES.ml(0),
                    presets/* Theme.layout.radius.name */.Q.layout.radius.name,
                    background,
                    SCALES.pt(1.1),
                    SCALES.pr(1),
                    SCALES.pb(1.1),
                    SCALES.pl(1),
                    presets/* Theme.layout.radius.name */.Q.layout.radius.name,
                    presets/* Theme.palette.gray200.name */.Q.palette.gray200.name,
                    presets/* Theme.palette.gray200.name */.Q.palette.gray200.name,
                    presets/* Theme.palette.gray500.name */.Q.palette.gray500.name,
                    SCALES.fs(0.8125),
                    SCALES.fs(0.32),
                    SCALES.fs(0.5),
                    SCALES.fs(0.32),
                    SCALES.fs(0.5),
                    presets/* Theme.layout.radius.name */.Q.layout.radius.name,
                    presets/* Theme.layout.radius.name */.Q.layout.radius.name
                ]
            ]
        ]) + " " + "pre",
        children: [
            name && /*#__PURE__*/ jsx_runtime_.jsx("header", {
                className: style_default().dynamic([
                    [
                        "52a134c5831d28a8",
                        [
                            border,
                            SCALES.fs(0.875),
                            SCALES.width(1, "initial"),
                            SCALES.height(1, "auto"),
                            SCALES.mt(1.3),
                            SCALES.mr(0),
                            SCALES.mb(1.3),
                            SCALES.ml(0),
                            presets/* Theme.layout.radius.name */.Q.layout.radius.name,
                            background,
                            SCALES.pt(1.1),
                            SCALES.pr(1),
                            SCALES.pb(1.1),
                            SCALES.pl(1),
                            presets/* Theme.layout.radius.name */.Q.layout.radius.name,
                            presets/* Theme.palette.gray200.name */.Q.palette.gray200.name,
                            presets/* Theme.palette.gray200.name */.Q.palette.gray200.name,
                            presets/* Theme.palette.gray500.name */.Q.palette.gray500.name,
                            SCALES.fs(0.8125),
                            SCALES.fs(0.32),
                            SCALES.fs(0.5),
                            SCALES.fs(0.32),
                            SCALES.fs(0.5),
                            presets/* Theme.layout.radius.name */.Q.layout.radius.name,
                            presets/* Theme.layout.radius.name */.Q.layout.radius.name
                        ]
                    ]
                ]),
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: style_default().dynamic([
                        [
                            "52a134c5831d28a8",
                            [
                                border,
                                SCALES.fs(0.875),
                                SCALES.width(1, "initial"),
                                SCALES.height(1, "auto"),
                                SCALES.mt(1.3),
                                SCALES.mr(0),
                                SCALES.mb(1.3),
                                SCALES.ml(0),
                                presets/* Theme.layout.radius.name */.Q.layout.radius.name,
                                background,
                                SCALES.pt(1.1),
                                SCALES.pr(1),
                                SCALES.pb(1.1),
                                SCALES.pl(1),
                                presets/* Theme.layout.radius.name */.Q.layout.radius.name,
                                presets/* Theme.palette.gray200.name */.Q.palette.gray200.name,
                                presets/* Theme.palette.gray200.name */.Q.palette.gray200.name,
                                presets/* Theme.palette.gray500.name */.Q.palette.gray500.name,
                                SCALES.fs(0.8125),
                                SCALES.fs(0.32),
                                SCALES.fs(0.5),
                                SCALES.fs(0.32),
                                SCALES.fs(0.5),
                                presets/* Theme.layout.radius.name */.Q.layout.radius.name,
                                presets/* Theme.layout.radius.name */.Q.layout.radius.name
                            ]
                        ]
                    ]) + " " + "name",
                    children: name
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("pre", {
                ...props,
                className: style_default().dynamic([
                    [
                        "52a134c5831d28a8",
                        [
                            border,
                            SCALES.fs(0.875),
                            SCALES.width(1, "initial"),
                            SCALES.height(1, "auto"),
                            SCALES.mt(1.3),
                            SCALES.mr(0),
                            SCALES.mb(1.3),
                            SCALES.ml(0),
                            presets/* Theme.layout.radius.name */.Q.layout.radius.name,
                            background,
                            SCALES.pt(1.1),
                            SCALES.pr(1),
                            SCALES.pb(1.1),
                            SCALES.pl(1),
                            presets/* Theme.layout.radius.name */.Q.layout.radius.name,
                            presets/* Theme.palette.gray200.name */.Q.palette.gray200.name,
                            presets/* Theme.palette.gray200.name */.Q.palette.gray200.name,
                            presets/* Theme.palette.gray500.name */.Q.palette.gray500.name,
                            SCALES.fs(0.8125),
                            SCALES.fs(0.32),
                            SCALES.fs(0.5),
                            SCALES.fs(0.32),
                            SCALES.fs(0.5),
                            presets/* Theme.layout.radius.name */.Q.layout.radius.name,
                            presets/* Theme.layout.radius.name */.Q.layout.radius.name
                        ]
                    ]
                ]) + " " + (props && props.className != null && props.className || className || ""),
                children: children
            }),
            jsx_runtime_.jsx((style_default()), {
                id: "52a134c5831d28a8",
                dynamic: [
                    border,
                    SCALES.fs(0.875),
                    SCALES.width(1, "initial"),
                    SCALES.height(1, "auto"),
                    SCALES.mt(1.3),
                    SCALES.mr(0),
                    SCALES.mb(1.3),
                    SCALES.ml(0),
                    presets/* Theme.layout.radius.name */.Q.layout.radius.name,
                    background,
                    SCALES.pt(1.1),
                    SCALES.pr(1),
                    SCALES.pb(1.1),
                    SCALES.pl(1),
                    presets/* Theme.layout.radius.name */.Q.layout.radius.name,
                    presets/* Theme.palette.gray200.name */.Q.palette.gray200.name,
                    presets/* Theme.palette.gray200.name */.Q.palette.gray200.name,
                    presets/* Theme.palette.gray500.name */.Q.palette.gray500.name,
                    SCALES.fs(0.8125),
                    SCALES.fs(0.32),
                    SCALES.fs(0.5),
                    SCALES.fs(0.32),
                    SCALES.fs(0.5),
                    presets/* Theme.layout.radius.name */.Q.layout.radius.name,
                    presets/* Theme.layout.radius.name */.Q.layout.radius.name
                ],
                children: `.pre.__jsx-style-dynamic-selector{max-width:100%;border:1px solid ${border};font-size:${SCALES.fs(0.875)};width:${SCALES.width(1, "initial")};height:${SCALES.height(1, "auto")};margin:${SCALES.mt(1.3)} ${SCALES.mr(0)} ${SCALES.mb(1.3)} ${SCALES.ml(0)};-webkit-border-radius:${presets/* Theme.layout.radius.name */.Q.layout.radius.name};-moz-border-radius:${presets/* Theme.layout.radius.name */.Q.layout.radius.name};border-radius:${presets/* Theme.layout.radius.name */.Q.layout.radius.name};background-color:${background}}pre.__jsx-style-dynamic-selector{max-width:100%;font-size:inherit;border:none;margin:0;line-height:1.5em;padding:${SCALES.pt(1.1)} ${SCALES.pr(1)} ${SCALES.pb(1.1)} ${SCALES.pl(1)}}.dark.__jsx-style-dynamic-selector{color:white;background:black}.dark.__jsx-style-dynamic-selector code.__jsx-style-dynamic-selector{color:white}header.__jsx-style-dynamic-selector{height:auto;width:100%;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-moz-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-border-radius:${presets/* Theme.layout.radius.name */.Q.layout.radius.name};-moz-border-radius:${presets/* Theme.layout.radius.name */.Q.layout.radius.name};border-radius:${presets/* Theme.layout.radius.name */.Q.layout.radius.name};background-color:transparent}.name.__jsx-style-dynamic-selector{border:1px solid ${presets/* Theme.palette.gray200.name */.Q.palette.gray200.name};background-color:${presets/* Theme.palette.gray200.name */.Q.palette.gray200.name};color:${presets/* Theme.palette.gray500.name */.Q.palette.gray500.name};height:auto;line-height:1.35em;display:-webkit-inline-box;display:-webkit-inline-flex;display:-moz-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;font-size:${SCALES.fs(0.8125)};padding:${SCALES.fs(0.32)} ${SCALES.fs(0.5)} ${SCALES.fs(0.32)} ${SCALES.fs(0.5)};width:auto;-webkit-border-top-left-radius:-webkit-calc(${presets/* Theme.layout.radius.name */.Q.layout.radius.name} - 1px);-moz-border-radius-topleft:-moz-calc(${presets/* Theme.layout.radius.name */.Q.layout.radius.name} - 1px);border-top-left-radius:-webkit-calc(${presets/* Theme.layout.radius.name */.Q.layout.radius.name} - 1px);border-top-left-radius:-moz-calc(${presets/* Theme.layout.radius.name */.Q.layout.radius.name} - 1px);border-top-left-radius:calc(${presets/* Theme.layout.radius.name */.Q.layout.radius.name} - 1px);-webkit-border-bottom-right-radius:${presets/* Theme.layout.radius.name */.Q.layout.radius.name};-moz-border-radius-bottomright:${presets/* Theme.layout.radius.name */.Q.layout.radius.name};border-bottom-right-radius:${presets/* Theme.layout.radius.name */.Q.layout.radius.name}}`
            })
        ]
    });
};
CodeComponent.defaultProps = code_defaultProps;
CodeComponent.displayName = "NuiCode";
const Code = with_scale(CodeComponent);
/* harmony default export */ const code = (Code);

;// CONCATENATED MODULE: ../core/components/code/index.ts

/* harmony default export */ const components_code = (code);

;// CONCATENATED MODULE: ../core/components/use-toasts/use-toast.tsx



const defaultToast = {
    delay: 2000,
    type: "default"
};
const use_toast_useToasts = (layout)=>{
    const { updateToasts , toasts , updateToastLayout , updateLastToastId  } = useNapolkeUIContext();
    useEffect(()=>{
        if (!layout) return;
        updateToastLayout(()=>layout ? Object.assign(Object.assign({}, defaultToastLayout), layout) : defaultToastLayout);
    }, []);
    const cancel = (internalId)=>{
        updateToasts((currentToasts)=>currentToasts.map((item)=>{
                if (item._internalIdent !== internalId) return item;
                return Object.assign(Object.assign({}, item), {
                    visible: false
                });
            }));
        updateLastToastId(()=>internalId);
    };
    const removeAll = ()=>{
        updateToasts((last)=>last.map((toast)=>Object.assign(Object.assign({}, toast), {
                    visible: false
                })));
    };
    const findToastOneByID = (id)=>toasts.find((t)=>t.id === id);
    const removeToastOneByID = (id)=>{
        updateToasts((last)=>last.map((toast)=>{
                if (toast.id !== id) return toast;
                return Object.assign(Object.assign({}, toast), {
                    visible: false
                });
            }));
    };
    const setToast = (toast)=>{
        const internalIdent = `toast-${getId()}`;
        const delay = toast.delay || defaultToast.delay;
        if (toast.id) {
            const hasIdent = toasts.find((t)=>t.id === toast.id);
            if (hasIdent) {
                throw new Error('Toast: Already have the same key: "ident"');
            }
        }
        updateToasts((last)=>{
            const newToast = {
                delay,
                text: toast.text,
                visible: true,
                type: toast.type || defaultToast.type,
                id: toast.id || internalIdent,
                actions: toast.actions || [],
                _internalIdent: internalIdent,
                _timeout: window.setTimeout(()=>{
                    cancel(internalIdent);
                    if (newToast._timeout) {
                        window.clearTimeout(newToast._timeout);
                        newToast._timeout = null;
                    }
                }, delay),
                cancel: ()=>cancel(internalIdent)
            };
            return [
                ...last,
                newToast
            ];
        });
    };
    return {
        toasts,
        setToast,
        removeAll,
        findToastOneByID,
        removeToastOneByID
    };
};
/* harmony default export */ const use_toast = ((/* unused pure expression or super */ null && (use_toast_useToasts)));

;// CONCATENATED MODULE: ../core/components/use-toasts/index.ts

/* harmony default export */ const use_toasts = ((/* unused pure expression or super */ null && (useToasts)));

;// CONCATENATED MODULE: ../core/components/use-clipboard/use-clipboard.ts



const use_clipboard_defaultOptions = {
    onError: ()=>use_warning("Failed to copy.", "use-clipboard")
};
const use_clipboard_useClipboard = (options = use_clipboard_defaultOptions)=>{
    const el = usePortal("clipboard");
    const copyText = (el, text)=>{
        if (!el || !text) return;
        const selection = window.getSelection();
        if (!selection) return;
        el.style.whiteSpace = "pre";
        el.textContent = text;
        const range = window.document.createRange();
        selection.removeAllRanges();
        range.selectNode(el);
        selection.addRange(range);
        try {
            window.document.execCommand("copy");
        } catch (e) {
            options.onError && options.onError();
        }
        selection.removeAllRanges();
        if (el) {
            el.textContent = "";
        }
    };
    const copy = useCallback((text)=>{
        copyText(el, text);
    }, [
        el
    ]);
    return {
        copy
    };
};
/* harmony default export */ const use_clipboard = ((/* unused pure expression or super */ null && (use_clipboard_useClipboard)));

;// CONCATENATED MODULE: ../core/components/use-clipboard/index.ts

/* harmony default export */ const components_use_clipboard = ((/* unused pure expression or super */ null && (useClipboard)));

;// CONCATENATED MODULE: ../core/components/divider/divider.tsx


var divider_rest = undefined && undefined.__rest || function(s, e) {
    var t = {};
    for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") for(var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++){
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
};




const divider_defaultProps = {
    align: "center",
    type: "default",
    className: ""
};
const getColor = (type, palette)=>{
    const colors = {
        default: palette.border.name,
        lite: palette.gray50.name,
        success: palette.successLight.name,
        warning: palette.warning.name,
        error: palette.errorLight.name,
        secondary: palette.secondary.name,
        dark: palette.black.name
    };
    return colors[type];
};
const DividerComponent = (_a)=>{
    var { type , align , children , className  } = _a, props = divider_rest(_a, [
        "type",
        "align",
        "children",
        "className"
    ]);
    const { SCALES  } = use_scale();
    const classes = components_use_classes("divider", className);
    const color = (0,external_react_.useMemo)(()=>getColor(type, presets/* Theme.palette */.Q.palette), [
        type,
        presets/* Theme.palette */.Q.palette
    ]);
    const alignClassName = (0,external_react_.useMemo)(()=>{
        if (!align || align === "center") return "";
        if (align === "left" || align === "start") return "start";
        return "end";
    }, [
        align
    ]);
    const alignClasses = components_use_classes("text", alignClassName);
    const textColor = type === "default" ? presets/* Theme.palette.black.name */.Q.palette.black.name : color;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        role: "separator",
        ...props,
        className: style_default().dynamic([
            [
                "d04fc38e769a1d31",
                [
                    color,
                    SCALES.fs(1),
                    SCALES.width(1, "auto"),
                    SCALES.height(0.0625),
                    SCALES.pt(0),
                    SCALES.pr(0),
                    SCALES.pb(0),
                    SCALES.pl(0),
                    SCALES.mt(0.5),
                    SCALES.mr(0),
                    SCALES.mb(0.5),
                    SCALES.ml(0),
                    presets/* Theme.palette.background.name */.Q.palette.background.name,
                    textColor
                ]
            ]
        ]) + " " + (props && props.className != null && props.className || classes || ""),
        children: [
            children && /*#__PURE__*/ jsx_runtime_.jsx("span", {
                className: style_default().dynamic([
                    [
                        "d04fc38e769a1d31",
                        [
                            color,
                            SCALES.fs(1),
                            SCALES.width(1, "auto"),
                            SCALES.height(0.0625),
                            SCALES.pt(0),
                            SCALES.pr(0),
                            SCALES.pb(0),
                            SCALES.pl(0),
                            SCALES.mt(0.5),
                            SCALES.mr(0),
                            SCALES.mb(0.5),
                            SCALES.ml(0),
                            presets/* Theme.palette.background.name */.Q.palette.background.name,
                            textColor
                        ]
                    ]
                ]) + " " + (alignClasses || ""),
                children: children
            }),
            jsx_runtime_.jsx((style_default()), {
                id: "d04fc38e769a1d31",
                dynamic: [
                    color,
                    SCALES.fs(1),
                    SCALES.width(1, "auto"),
                    SCALES.height(0.0625),
                    SCALES.pt(0),
                    SCALES.pr(0),
                    SCALES.pb(0),
                    SCALES.pl(0),
                    SCALES.mt(0.5),
                    SCALES.mr(0),
                    SCALES.mb(0.5),
                    SCALES.ml(0),
                    presets/* Theme.palette.background.name */.Q.palette.background.name,
                    textColor
                ],
                children: `.divider.__jsx-style-dynamic-selector{max-width:100%;background-color:${color};position:relative;font-size:${SCALES.fs(1)};width:${SCALES.width(1, "auto")};height:${SCALES.height(0.0625)};padding:${SCALES.pt(0)} ${SCALES.pr(0)} ${SCALES.pb(0)} ${SCALES.pl(0)};margin:${SCALES.mt(0.5)} ${SCALES.mr(0)} ${SCALES.mb(0.5)} ${SCALES.ml(0)}}.text.__jsx-style-dynamic-selector{position:absolute;left:50%;top:50%;min-height:100%;display:-webkit-inline-box;display:-webkit-inline-flex;display:-moz-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-transform:translate(-50%,-50%);-moz-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);-o-transform:translate(-50%,-50%);transform:translate(-50%,-50%);padding:0 .75em;font-size:inherit;font-weight:bold;text-transform:capitalize;background-color:${presets/* Theme.palette.background.name */.Q.palette.background.name};color:${textColor};z-index:10}.text.start.__jsx-style-dynamic-selector{-webkit-transform:translateY(-50%);-moz-transform:translateY(-50%);-ms-transform:translateY(-50%);-o-transform:translateY(-50%);transform:translateY(-50%);left:7%}.text.end.__jsx-style-dynamic-selector{-webkit-transform:translateY(-50%);-moz-transform:translateY(-50%);-ms-transform:translateY(-50%);-o-transform:translateY(-50%);transform:translateY(-50%);left:auto;right:7%}`
            })
        ]
    });
};
DividerComponent.defaultProps = divider_defaultProps;
DividerComponent.displayName = "NuiDivider";
const divider_Divider = with_scale(DividerComponent);
/* harmony default export */ const divider = ((/* unused pure expression or super */ null && (divider_Divider)));

;// CONCATENATED MODULE: ../core/components/divider/index.ts

/* harmony default export */ const components_divider = ((/* unused pure expression or super */ null && (Divider)));

;// CONCATENATED MODULE: ../core/components/card/styles.ts
const getStyles = (type, palette, isShadow)=>{
    const colors = {
        default: {
            color: palette.black.name,
            bgColor: palette.background.name
        },
        dark: {
            color: palette.background.name,
            bgColor: palette.black.name
        },
        secondary: {
            color: palette.background.name,
            bgColor: palette.secondary.name
        },
        success: {
            color: palette.background.name,
            bgColor: palette.success.name
        },
        warning: {
            color: palette.background.name,
            bgColor: palette.warning.name
        },
        error: {
            color: palette.background.name,
            bgColor: palette.error.name
        },
        lite: {
            color: palette.black.name,
            bgColor: palette.background.name
        },
        alert: {
            color: "white",
            bgColor: palette.gray500.name
        },
        purple: {
            color: "white",
            bgColor: palette.gray500.name
        },
        violet: {
            color: "white",
            bgColor: palette.gray500.name
        },
        cyan: {
            color: "black",
            bgColor: palette.gray500.name
        }
    };
    const showBorder = type === "default" && !isShadow;
    return Object.assign(Object.assign({}, colors[type]), {
        borderColor: showBorder ? palette.border.name : "transparent"
    });
};

;// CONCATENATED MODULE: ../core/components/card/card-footer.tsx


var card_footer_rest = undefined && undefined.__rest || function(s, e) {
    var t = {};
    for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") for(var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++){
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
};




const card_footer_defaultProps = {
    disableAutoMargin: false,
    className: ""
};
const CardFooterComponent = (_a)=>{
    var { children , className , disableAutoMargin  } = _a, props = card_footer_rest(_a, [
        "children",
        "className",
        "disableAutoMargin"
    ]);
    const { SCALES  } = use_scale();
    const classes = components_use_classes({
        "auto-margin": !disableAutoMargin
    }, className);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("footer", {
        ...props,
        className: style_default().dynamic([
            [
                "d40ae31f31f4cbe0",
                [
                    SCALES.py(0.66),
                    SCALES.px(1.31),
                    SCALES.fs(0.875),
                    presets/* Theme.palette.border.name */.Q.palette.border.name,
                    presets/* Theme.layout.radius.name */.Q.layout.radius.name,
                    presets/* Theme.layout.radius.name */.Q.layout.radius.name,
                    SCALES.height(3.3),
                    SCALES.width(1, "auto"),
                    SCALES.height(1, "auto"),
                    SCALES.mt(0),
                    SCALES.mr(0),
                    SCALES.mb(0),
                    SCALES.ml(0),
                    presets/* Theme.layout.gapQuarter.name */.Q.layout.gapQuarter.name
                ]
            ]
        ]) + " " + (props && props.className != null && props.className || classes || ""),
        children: [
            children,
            jsx_runtime_.jsx((style_default()), {
                id: "d40ae31f31f4cbe0",
                dynamic: [
                    SCALES.py(0.66),
                    SCALES.px(1.31),
                    SCALES.fs(0.875),
                    presets/* Theme.palette.border.name */.Q.palette.border.name,
                    presets/* Theme.layout.radius.name */.Q.layout.radius.name,
                    presets/* Theme.layout.radius.name */.Q.layout.radius.name,
                    SCALES.height(3.3),
                    SCALES.width(1, "auto"),
                    SCALES.height(1, "auto"),
                    SCALES.mt(0),
                    SCALES.mr(0),
                    SCALES.mb(0),
                    SCALES.ml(0),
                    presets/* Theme.layout.gapQuarter.name */.Q.layout.gapQuarter.name
                ],
                children: `footer.__jsx-style-dynamic-selector{padding:${SCALES.py(0.66)} ${SCALES.px(1.31)};display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;overflow:hidden;color:inherit;background-color:inherit;font-size:${SCALES.fs(0.875)};border-top:1px solid ${presets/* Theme.palette.border.name */.Q.palette.border.name};-webkit-border-bottom-left-radius:${presets/* Theme.layout.radius.name */.Q.layout.radius.name};-moz-border-radius-bottomleft:${presets/* Theme.layout.radius.name */.Q.layout.radius.name};border-bottom-left-radius:${presets/* Theme.layout.radius.name */.Q.layout.radius.name};-webkit-border-bottom-right-radius:${presets/* Theme.layout.radius.name */.Q.layout.radius.name};-moz-border-radius-bottomright:${presets/* Theme.layout.radius.name */.Q.layout.radius.name};border-bottom-right-radius:${presets/* Theme.layout.radius.name */.Q.layout.radius.name};min-height:${SCALES.height(3.3)};width:${SCALES.width(1, "auto")};height:${SCALES.height(1, "auto")};margin:${SCALES.mt(0)} ${SCALES.mr(0)} ${SCALES.mb(0)} ${SCALES.ml(0)}}.auto-margin.__jsx-style-dynamic-selector *{margin-top:0;margin-bottom:0;margin-right:${presets/* Theme.layout.gapQuarter.name */.Q.layout.gapQuarter.name}}`
            })
        ]
    });
};
CardFooterComponent.defaultProps = card_footer_defaultProps;
CardFooterComponent.displayName = "NuiCardFooter";
const CardFooter = with_scale(CardFooterComponent);
/* harmony default export */ const card_footer = (CardFooter);

;// CONCATENATED MODULE: ../core/components/card/card-content.tsx


var card_content_rest = undefined && undefined.__rest || function(s, e) {
    var t = {};
    for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") for(var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++){
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
};



const card_content_defaultProps = {
    className: ""
};
const CardContentComponent = (_a)=>{
    var { className , children  } = _a, props = card_content_rest(_a, [
        "className",
        "children"
    ]);
    const { SCALES  } = use_scale();
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        ...props,
        className: style_default().dynamic([
            [
                "a1038ab63f02faca",
                [
                    SCALES.width(1, "100%"),
                    SCALES.height(1, "auto"),
                    SCALES.pt(1),
                    SCALES.pr(1),
                    SCALES.pb(1),
                    SCALES.pl(1),
                    SCALES.mt(0),
                    SCALES.mr(0),
                    SCALES.mb(0),
                    SCALES.ml(0)
                ]
            ]
        ]) + " " + (props && props.className != null && props.className || components_use_classes("content", className) || ""),
        children: [
            children,
            jsx_runtime_.jsx((style_default()), {
                id: "a1038ab63f02faca",
                dynamic: [
                    SCALES.width(1, "100%"),
                    SCALES.height(1, "auto"),
                    SCALES.pt(1),
                    SCALES.pr(1),
                    SCALES.pb(1),
                    SCALES.pl(1),
                    SCALES.mt(0),
                    SCALES.mr(0),
                    SCALES.mb(0),
                    SCALES.ml(0)
                ],
                children: `.content.__jsx-style-dynamic-selector{width:${SCALES.width(1, "100%")};height:${SCALES.height(1, "auto")};padding:${SCALES.pt(1)} ${SCALES.pr(1)} ${SCALES.pb(1)} ${SCALES.pl(1)};margin:${SCALES.mt(0)} ${SCALES.mr(0)} ${SCALES.mb(0)} ${SCALES.ml(0)}}.content.__jsx-style-dynamic-selector>p:first-child{margin-top:0}.content.__jsx-style-dynamic-selector>p:last-child{margin-bottom:0}`
            })
        ]
    });
};
CardContentComponent.defaultProps = card_content_defaultProps;
CardContentComponent.displayName = "NuiCardContent";
const CardContent = with_scale(CardContentComponent);
/* harmony default export */ const card_content = (CardContent);

;// CONCATENATED MODULE: ../core/components/card/card.tsx


var card_rest = undefined && undefined.__rest || function(s, e) {
    var t = {};
    for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") for(var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++){
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
};









const card_defaultProps = {
    type: "default",
    hoverable: false,
    shadow: false,
    className: ""
};
const CardComponent = (_a)=>{
    var { children , hoverable , className , shadow , type  } = _a, props = card_rest(_a, [
        "children",
        "hoverable",
        "className",
        "shadow",
        "type"
    ]);
    const { SCALES  } = use_scale();
    const hoverShadow = (0,external_react_.useMemo)(()=>{
        if (shadow) return presets/* Theme.expressiveness.shadowMedium */.Q.expressiveness.shadowMedium;
        return hoverable ? presets/* Theme.expressiveness.shadowSmall */.Q.expressiveness.shadowSmall : "none";
    }, [
        hoverable,
        shadow,
        presets/* Theme.expressiveness */.Q.expressiveness
    ]);
    const { color , bgColor , borderColor  } = (0,external_react_.useMemo)(()=>getStyles(type, presets/* Theme.palette */.Q.palette, shadow), [
        type,
        presets/* Theme.palette */.Q.palette,
        shadow
    ]);
    const [withoutFooterChildren, footerChildren] = pickChild(children, card_footer);
    const [withoutImageChildren, imageChildren] = pickChild(withoutFooterChildren, components_image);
    const hasContent = hasChild(withoutImageChildren, card_content);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        ...props,
        className: style_default().dynamic([
            [
                "7814712a22b7d7e4",
                [
                    presets/* Theme.palette.background.name */.Q.palette.background.name,
                    presets/* Theme.layout.radius.name */.Q.layout.radius.name,
                    shadow ? presets/* Theme.expressiveness.shadowSmall */.Q.expressiveness.shadowSmall : "none",
                    color,
                    bgColor,
                    borderColor,
                    SCALES.width(1, "auto"),
                    SCALES.height(1, "auto"),
                    SCALES.pt(0),
                    SCALES.pr(0),
                    SCALES.pb(0),
                    SCALES.pl(0),
                    SCALES.mt(0),
                    SCALES.mr(0),
                    SCALES.mb(0),
                    SCALES.ml(0),
                    hoverShadow
                ]
            ]
        ]) + " " + (props && props.className != null && props.className || components_use_classes("card", className) || ""),
        children: [
            imageChildren,
            hasContent ? withoutImageChildren : /*#__PURE__*/ jsx_runtime_.jsx(card_content, {
                children: withoutImageChildren
            }),
            footerChildren,
            jsx_runtime_.jsx((style_default()), {
                id: "7814712a22b7d7e4",
                dynamic: [
                    presets/* Theme.palette.background.name */.Q.palette.background.name,
                    presets/* Theme.layout.radius.name */.Q.layout.radius.name,
                    shadow ? presets/* Theme.expressiveness.shadowSmall */.Q.expressiveness.shadowSmall : "none",
                    color,
                    bgColor,
                    borderColor,
                    SCALES.width(1, "auto"),
                    SCALES.height(1, "auto"),
                    SCALES.pt(0),
                    SCALES.pr(0),
                    SCALES.pb(0),
                    SCALES.pl(0),
                    SCALES.mt(0),
                    SCALES.mr(0),
                    SCALES.mb(0),
                    SCALES.ml(0),
                    hoverShadow
                ],
                children: `.card.__jsx-style-dynamic-selector{background:${presets/* Theme.palette.background.name */.Q.palette.background.name};-webkit-transition:all.2s ease;-moz-transition:all.2s ease;-o-transition:all.2s ease;transition:all.2s ease;-webkit-border-radius:${presets/* Theme.layout.radius.name */.Q.layout.radius.name};-moz-border-radius:${presets/* Theme.layout.radius.name */.Q.layout.radius.name};border-radius:${presets/* Theme.layout.radius.name */.Q.layout.radius.name};-webkit-box-shadow:${shadow ? presets/* Theme.expressiveness.shadowSmall */.Q.expressiveness.shadowSmall : "none"};-moz-box-shadow:${shadow ? presets/* Theme.expressiveness.shadowSmall */.Q.expressiveness.shadowSmall : "none"};box-shadow:${shadow ? presets/* Theme.expressiveness.shadowSmall */.Q.expressiveness.shadowSmall : "none"};-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;color:${color};background-color:${bgColor};border:1px solid ${borderColor};width:${SCALES.width(1, "auto")};height:${SCALES.height(1, "auto")};padding:${SCALES.pt(0)} ${SCALES.pr(0)} ${SCALES.pb(0)} ${SCALES.pl(0)};margin:${SCALES.mt(0)} ${SCALES.mr(0)} ${SCALES.mb(0)} ${SCALES.ml(0)}}.card.__jsx-style-dynamic-selector:hover{-webkit-box-shadow:${hoverShadow};-moz-box-shadow:${hoverShadow};box-shadow:${hoverShadow}}.card.__jsx-style-dynamic-selector img{width:100%}.card.__jsx-style-dynamic-selector .image{-webkit-border-bottom-left-radius:0;-moz-border-radius-bottomleft:0;border-bottom-left-radius:0;-webkit-border-bottom-right-radius:0;-moz-border-radius-bottomright:0;border-bottom-right-radius:0}`
            })
        ]
    });
};
CardComponent.defaultProps = card_defaultProps;
CardComponent.displayName = "NuiCard";
const Card = with_scale(CardComponent);
/* harmony default export */ const card = (Card);

;// CONCATENATED MODULE: ../core/components/card/index.ts



card.Footer = card_footer;
card.Actions = card_footer;
card.Content = card_content;
card.Body = card_content;
/* harmony default export */ const components_card = (card);

;// CONCATENATED MODULE: ../core/components/avatar/avatar.tsx


var avatar_rest = undefined && undefined.__rest || function(s, e) {
    var t = {};
    for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") for(var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++){
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
};




const avatar_defaultProps = {
    stacked: false,
    text: "",
    isSquare: false,
    className: ""
};
const safeText = (text)=>{
    if (text.length <= 4) return text;
    return text.slice(0, 3);
};
const AvatarComponent = (_a)=>{
    var { src , stacked , text , isSquare , className , icon  } = _a, props = avatar_rest(_a, [
        "src",
        "stacked",
        "text",
        "isSquare",
        "className",
        "icon"
    ]);
    const { SCALES  } = use_scale();
    const radius = isSquare ? presets/* Theme.layout.radius.name */.Q.layout.radius.name : "50%";
    const marginLeft = stacked ? SCALES.ml(-0.625) : SCALES.ml(0);
    const classes = components_use_classes("avatar", className);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
        className: style_default().dynamic([
            [
                "c67a7d2715f07dda",
                [
                    presets/* Theme.palette.gray200.name */.Q.palette.gray200.name,
                    radius,
                    presets/* Theme.palette.background.name */.Q.palette.background.name,
                    SCALES.width(1.75) || SCALES.height(1.75),
                    SCALES.height(1.75) || SCALES.width(1.75),
                    SCALES.pt(0),
                    SCALES.pr(0),
                    SCALES.pb(0),
                    SCALES.pl(0),
                    SCALES.mt(0),
                    SCALES.mr(0),
                    SCALES.mb(0),
                    marginLeft,
                    radius,
                    SCALES.fs(1)
                ]
            ]
        ]) + " " + (classes || ""),
        children: [
            src && !icon && /*#__PURE__*/ jsx_runtime_.jsx("img", {
                alt: "avatar",
                src: src,
                draggable: false,
                ...props,
                className: style_default().dynamic([
                    [
                        "c67a7d2715f07dda",
                        [
                            presets/* Theme.palette.gray200.name */.Q.palette.gray200.name,
                            radius,
                            presets/* Theme.palette.background.name */.Q.palette.background.name,
                            SCALES.width(1.75) || SCALES.height(1.75),
                            SCALES.height(1.75) || SCALES.width(1.75),
                            SCALES.pt(0),
                            SCALES.pr(0),
                            SCALES.pb(0),
                            SCALES.pl(0),
                            SCALES.mt(0),
                            SCALES.mr(0),
                            SCALES.mb(0),
                            marginLeft,
                            radius,
                            SCALES.fs(1)
                        ]
                    ]
                ]) + " " + (props && props.className != null && props.className || "avatar-img")
            }),
            !src && !icon && /*#__PURE__*/ jsx_runtime_.jsx("span", {
                ...props,
                className: style_default().dynamic([
                    [
                        "c67a7d2715f07dda",
                        [
                            presets/* Theme.palette.gray200.name */.Q.palette.gray200.name,
                            radius,
                            presets/* Theme.palette.background.name */.Q.palette.background.name,
                            SCALES.width(1.75) || SCALES.height(1.75),
                            SCALES.height(1.75) || SCALES.width(1.75),
                            SCALES.pt(0),
                            SCALES.pr(0),
                            SCALES.pb(0),
                            SCALES.pl(0),
                            SCALES.mt(0),
                            SCALES.mr(0),
                            SCALES.mb(0),
                            marginLeft,
                            radius,
                            SCALES.fs(1)
                        ]
                    ]
                ]) + " " + (props && props.className != null && props.className || "avatar-text"),
                children: safeText(text)
            }),
            !src && icon && /*#__PURE__*/ jsx_runtime_.jsx("span", {
                ...props,
                className: style_default().dynamic([
                    [
                        "c67a7d2715f07dda",
                        [
                            presets/* Theme.palette.gray200.name */.Q.palette.gray200.name,
                            radius,
                            presets/* Theme.palette.background.name */.Q.palette.background.name,
                            SCALES.width(1.75) || SCALES.height(1.75),
                            SCALES.height(1.75) || SCALES.width(1.75),
                            SCALES.pt(0),
                            SCALES.pr(0),
                            SCALES.pb(0),
                            SCALES.pl(0),
                            SCALES.mt(0),
                            SCALES.mr(0),
                            SCALES.mb(0),
                            marginLeft,
                            radius,
                            SCALES.fs(1)
                        ]
                    ]
                ]) + " " + (props && props.className != null && props.className || "avatar-icon"),
                children: icon
            }),
            jsx_runtime_.jsx((style_default()), {
                id: "c67a7d2715f07dda",
                dynamic: [
                    presets/* Theme.palette.gray200.name */.Q.palette.gray200.name,
                    radius,
                    presets/* Theme.palette.background.name */.Q.palette.background.name,
                    SCALES.width(1.75) || SCALES.height(1.75),
                    SCALES.height(1.75) || SCALES.width(1.75),
                    SCALES.pt(0),
                    SCALES.pr(0),
                    SCALES.pb(0),
                    SCALES.pl(0),
                    SCALES.mt(0),
                    SCALES.mr(0),
                    SCALES.mb(0),
                    marginLeft,
                    radius,
                    SCALES.fs(1)
                ],
                children: `.avatar.__jsx-style-dynamic-selector{display:inline-block;position:relative;overflow:hidden;border:1px solid ${presets/* Theme.palette.gray200.name */.Q.palette.gray200.name};-webkit-border-radius:${radius};-moz-border-radius:${radius};border-radius:${radius};vertical-align:top;background-color:${presets/* Theme.palette.background.name */.Q.palette.background.name};-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;width:${SCALES.width(1.75) || SCALES.height(1.75)};height:${SCALES.height(1.75) || SCALES.width(1.75)};padding:${SCALES.pt(0)} ${SCALES.pr(0)} ${SCALES.pb(0)} ${SCALES.pl(0)};margin:${SCALES.mt(0)} ${SCALES.mr(0)} ${SCALES.mb(0)} ${marginLeft}}.avatar-img.__jsx-style-dynamic-selector{display:inline-block;-o-object-fit:cover;object-fit:cover;width:100%;height:100%;-webkit-border-radius:${radius};-moz-border-radius:${radius};border-radius:${radius};-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.avatar-icon.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.avatar-text.__jsx-style-dynamic-selector{position:absolute;left:50%;top:50%;font-size:${SCALES.fs(1)};text-align:center;-webkit-transform:translate(-50%,-50%)scale(.65);-moz-transform:translate(-50%,-50%)scale(.65);-ms-transform:translate(-50%,-50%)scale(.65);-o-transform:translate(-50%,-50%)scale(.65);transform:translate(-50%,-50%)scale(.65);white-space:nowrap;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}`
            })
        ]
    });
};
AvatarComponent.defaultProps = avatar_defaultProps;
AvatarComponent.displayName = "NuiAvatar";
const Avatar = with_scale(AvatarComponent);
/* harmony default export */ const avatar = (Avatar);

;// CONCATENATED MODULE: ../core/components/avatar/avatar-group.tsx






const avatar_group_defaultProps = {
    className: ""
};
const AvatarGroupComponent = ({ count , className , children ,  })=>{
    const { SCALES  } = use_scale();
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: style_default().dynamic([
            [
                "de82bfd6b9a67923",
                [
                    SCALES.width(1, "max-content"),
                    SCALES.height(1, "auto"),
                    SCALES.pt(0),
                    SCALES.pr(0),
                    SCALES.pb(0),
                    SCALES.pl(0),
                    SCALES.mt(0),
                    SCALES.mr(0),
                    SCALES.mb(0),
                    SCALES.ml(0),
                    SCALES.ml(0.625),
                    SCALES.fs(0.875),
                    presets/* Theme.palette.gray700.name */.Q.palette.gray700.name
                ]
            ]
        ]) + " " + (components_use_classes("avatar-group", className) || ""),
        children: [
            children,
            count && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                className: style_default().dynamic([
                    [
                        "de82bfd6b9a67923",
                        [
                            SCALES.width(1, "max-content"),
                            SCALES.height(1, "auto"),
                            SCALES.pt(0),
                            SCALES.pr(0),
                            SCALES.pb(0),
                            SCALES.pl(0),
                            SCALES.mt(0),
                            SCALES.mr(0),
                            SCALES.mb(0),
                            SCALES.ml(0),
                            SCALES.ml(0.625),
                            SCALES.fs(0.875),
                            presets/* Theme.palette.gray700.name */.Q.palette.gray700.name
                        ]
                    ]
                ]) + " " + "count",
                children: [
                    "+",
                    count
                ]
            }),
            jsx_runtime_.jsx((style_default()), {
                id: "de82bfd6b9a67923",
                dynamic: [
                    SCALES.width(1, "max-content"),
                    SCALES.height(1, "auto"),
                    SCALES.pt(0),
                    SCALES.pr(0),
                    SCALES.pb(0),
                    SCALES.pl(0),
                    SCALES.mt(0),
                    SCALES.mr(0),
                    SCALES.mb(0),
                    SCALES.ml(0),
                    SCALES.ml(0.625),
                    SCALES.fs(0.875),
                    presets/* Theme.palette.gray700.name */.Q.palette.gray700.name
                ],
                children: `.avatar-group.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;width:${SCALES.width(1, "max-content")};height:${SCALES.height(1, "auto")};padding:${SCALES.pt(0)} ${SCALES.pr(0)} ${SCALES.pb(0)} ${SCALES.pl(0)};margin:${SCALES.mt(0)} ${SCALES.mr(0)} ${SCALES.mb(0)} ${SCALES.ml(0)}}.avatar-group.__jsx-style-dynamic-selector .avatar{margin-left:-${SCALES.ml(0.625)}}.count.__jsx-style-dynamic-selector{font-size:${SCALES.fs(0.875)};display:-webkit-inline-box;display:-webkit-inline-flex;display:-moz-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;padding-left:5.5px;color:${presets/* Theme.palette.gray700.name */.Q.palette.gray700.name}}`
            })
        ]
    });
};
AvatarGroupComponent.defaultProps = avatar_group_defaultProps;
AvatarGroupComponent.displayName = "NuiAvatarGroup";
const AvatarGroup = with_scale(AvatarGroupComponent);
/* harmony default export */ const avatar_group = (AvatarGroup);

;// CONCATENATED MODULE: ../core/components/avatar/index.ts


avatar.Group = avatar_group;
/* harmony default export */ const components_avatar = (avatar);

;// CONCATENATED MODULE: ../core/components/use-click-away/use-click-away.ts

const useClickAway = (ref, handler)=>{
    const handlerRef = (0,external_react_.useRef)(handler);
    (0,external_react_.useEffect)(()=>{
        handlerRef.current = handler;
    }, [
        handler
    ]);
    (0,external_react_.useEffect)(()=>{
        const callback = (event)=>{
            const el = ref.current;
            if (!event || !el || el.contains(event.target)) return;
            handlerRef.current(event);
        };
        document.addEventListener("click", callback);
        return ()=>document.removeEventListener("click", callback);
    }, [
        ref
    ]);
};
/* harmony default export */ const use_click_away = (useClickAway);

;// CONCATENATED MODULE: ../core/components/use-click-away/index.ts

/* harmony default export */ const components_use_click_away = (use_click_away);

;// CONCATENATED MODULE: ../core/components/tooltip/styles.ts
const tooltip_styles_getColors = (type, palette)=>{
    const colors = {
        default: palette.background.name,
        success: palette.success.name,
        warning: palette.warning.name,
        error: palette.error.name,
        secondary: palette.secondary.name,
        dark: palette.black.name,
        lite: palette.background.name
    };
    const color = type === "lite" || type === "default" ? palette.black.name : palette.background.name;
    return {
        color,
        bgColor: colors[type]
    };
};

;// CONCATENATED MODULE: ../core/components/tooltip/placement.ts
const defaultTooltipPosition = {
    top: "-1000px",
    left: "-1000px",
    transform: "none"
};
const getPosition = (placement, rect, offset)=>{
    const positions = {
        top: {
            top: `${rect.top - offset}px`,
            left: `${rect.left + rect.width / 2}px`,
            transform: "translate(-50%, -100%)"
        },
        topStart: {
            top: `${rect.top - offset}px`,
            left: `${rect.left}px`,
            transform: "translate(0, -100%)"
        },
        topEnd: {
            top: `${rect.top - offset}px`,
            left: `${rect.left + rect.width}px`,
            transform: "translate(-100%, -100%)"
        },
        bottom: {
            top: `${rect.bottom + offset}px`,
            left: `${rect.left + rect.width / 2}px`,
            transform: "translate(-50%, 0)"
        },
        bottomStart: {
            top: `${rect.bottom + offset}px`,
            left: `${rect.left}px`,
            transform: "translate(0, 0)"
        },
        bottomEnd: {
            top: `${rect.bottom + offset}px`,
            left: `${rect.left + rect.width}px`,
            transform: "translate(-100%, 0)"
        },
        left: {
            top: `${rect.top + rect.height / 2}px`,
            left: `${rect.left - offset}px`,
            transform: "translate(-100%, -50%)"
        },
        leftStart: {
            top: `${rect.top}px`,
            left: `${rect.left - offset}px`,
            transform: "translate(-100%, 0)"
        },
        leftEnd: {
            top: `${rect.top + rect.height}px`,
            left: `${rect.left - offset}px`,
            transform: "translate(-100%, -100%)"
        },
        right: {
            top: `${rect.top + rect.height / 2}px`,
            left: `${rect.right + offset}px`,
            transform: "translate(0, -50%)"
        },
        rightStart: {
            top: `${rect.top}px`,
            left: `${rect.right + offset}px`,
            transform: "translate(0, 0)"
        },
        rightEnd: {
            top: `${rect.top + rect.height}px`,
            left: `${rect.right + offset}px`,
            transform: "translate(0, -100%)"
        }
    };
    return positions[placement] || positions.top;
};
const getIconPosition = (placement, offsetX, offsetY, offsetAbsolute = "3px")=>{
    const positions = {
        top: {
            top: "auto",
            right: "auto",
            left: "50%",
            bottom: `${offsetAbsolute}`,
            transform: "translate(-50%, 100%) rotate(-90deg)"
        },
        topStart: {
            top: "auto",
            right: "auto",
            left: `${offsetX}`,
            bottom: `${offsetAbsolute}`,
            transform: "translate(0, 100%) rotate(-90deg)"
        },
        topEnd: {
            top: "auto",
            right: `${offsetX}`,
            left: "auto",
            bottom: `${offsetAbsolute}`,
            transform: "translate(0, 100%) rotate(-90deg)"
        },
        bottom: {
            top: `${offsetAbsolute}`,
            right: "auto",
            left: "50%",
            bottom: "auto",
            transform: "translate(-50%, -100%) rotate(90deg)"
        },
        bottomStart: {
            top: `${offsetAbsolute}`,
            right: "auto",
            left: `${offsetX}`,
            bottom: "auto",
            transform: "translate(0, -100%) rotate(90deg)"
        },
        bottomEnd: {
            top: `${offsetAbsolute}`,
            right: `${offsetX}`,
            left: "auto",
            bottom: "auto",
            transform: "translate(0, -100%) rotate(90deg)"
        },
        left: {
            top: "50%",
            right: "0",
            left: "auto",
            bottom: "auto",
            transform: "translate(100%, -50%) rotate(180deg)"
        },
        leftStart: {
            top: `${offsetY}`,
            right: "0",
            left: "auto",
            bottom: "auto",
            transform: "translate(100%, -50%) rotate(180deg)"
        },
        leftEnd: {
            top: "auto",
            right: "0",
            left: "auto",
            bottom: `${offsetY}`,
            transform: "translate(100%, 50%) rotate(180deg)"
        },
        right: {
            top: "50%",
            right: "auto",
            left: "0",
            bottom: "auto",
            transform: "translate(-100%, -50%) rotate(0deg)"
        },
        rightStart: {
            top: `${offsetY}`,
            right: "auto",
            left: "0",
            bottom: "auto",
            transform: "translate(-100%, -50%) rotate(0deg)"
        },
        rightEnd: {
            top: "auto",
            right: "auto",
            left: "0",
            bottom: `${offsetY}`,
            transform: "translate(-100%, 50%) rotate(0deg)"
        }
    };
    return positions[placement] || positions.top;
};

;// CONCATENATED MODULE: ../core/components/tooltip/tooltip-icon.tsx






const TooltipIcon = ({ placement , shadow  })=>{
    const { mode  } = use_theme();
    const { transform , top , left , right , bottom  } = (0,external_react_.useMemo)(()=>getIconPosition(placement, "var(--tooltip-icon-offset-x)", "var(--tooltip-icon-offset-y)"), [
        placement
    ]);
    const bgColorWithDark = (0,external_react_.useMemo)(()=>{
        if (!shadow || mode !== "dark") return "var(--tooltip-content-bg)";
        return presets/* Theme.palette.gray200.name */.Q.palette.gray200.name;
    }, [
        mode,
        shadow
    ]);
    return /*#__PURE__*/ jsx_runtime_.jsx("span", {
        className: style_default().dynamic([
            [
                "2ea2d189cdc54bcf",
                [
                    bgColorWithDark,
                    left,
                    top,
                    right,
                    bottom,
                    transform
                ]
            ]
        ]),
        children: jsx_runtime_.jsx((style_default()), {
            id: "2ea2d189cdc54bcf",
            dynamic: [
                bgColorWithDark,
                left,
                top,
                right,
                bottom,
                transform
            ],
            children: `span.__jsx-style-dynamic-selector{width:0;height:0;border-style:solid;border-width:6px 7px 6px 0;border-color:transparent ${bgColorWithDark} transparent transparent;position:absolute;left:${left};top:${top};right:${right};bottom:${bottom};-webkit-transform:${transform};-moz-transform:${transform};-ms-transform:${transform};-o-transform:${transform};transform:${transform}}`
        })
    });
};
/* harmony default export */ const tooltip_icon = (TooltipIcon);

;// CONCATENATED MODULE: ../core/components/tooltip/helper.ts
const helper_defaultRect = {
    top: -1000,
    left: -1000,
    right: -1000,
    bottom: -1000,
    width: 0,
    height: 0
};
const getRect = (ref)=>{
    if (!ref || !ref.current) return helper_defaultRect;
    const rect = ref.current.getBoundingClientRect();
    return Object.assign(Object.assign({}, rect), {
        width: rect.width || rect.right - rect.left,
        height: rect.height || rect.bottom - rect.top,
        top: rect.top + document.documentElement.scrollTop,
        bottom: rect.bottom + document.documentElement.scrollTop,
        left: rect.left + document.documentElement.scrollLeft,
        right: rect.right + document.documentElement.scrollLeft
    });
};

;// CONCATENATED MODULE: ../core/components/tooltip/tooltip-content.tsx















const TooltipContent = ({ children , parent , visible , offset , iconOffset , placement , type , className , hideArrow ,  })=>{
    const { SCALES  } = use_scale();
    const el = use_portal("tooltip");
    const selfRef = (0,external_react_.useRef)(null);
    const { 0: rect , 1: setRect  } = (0,external_react_.useState)(defaultTooltipPosition);
    const colors = (0,external_react_.useMemo)(()=>tooltip_styles_getColors(type, presets/* Theme.palette */.Q.palette), [
        type,
        presets/* Theme.palette */.Q.palette
    ]);
    const hasShadow = type === "default";
    const classes = components_use_classes("tooltip-content", className);
    if (!parent) return null;
    const updateRect = ()=>{
        const position = getPosition(placement, getRect(parent), offset);
        setRect(position);
    };
    use_resize(updateRect);
    use_click_anywhere(()=>updateRect());
    (0,external_react_.useEffect)(()=>{
        updateRect();
    }, [
        visible
    ]);
    const preventHandler = (event)=>{
        event.stopPropagation();
        event.nativeEvent.stopImmediatePropagation();
    };
    if (!el) return null;
    return /*#__PURE__*/ (0,external_react_dom_.createPortal)(/*#__PURE__*/ jsx_runtime_.jsx(css_transition, {
        visible: visible,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            ref: selfRef,
            onClick: preventHandler,
            className: style_default().dynamic([
                [
                    "3f64a9bf5fa86aaa",
                    [
                        iconOffset.x,
                        iconOffset.y,
                        colors.bgColor,
                        rect.top,
                        rect.left,
                        rect.transform,
                        colors.color,
                        presets/* Theme.layout.radius.name */.Q.layout.radius.name,
                        hasShadow ? presets/* Theme.expressiveness.shadowMedium */.Q.expressiveness.shadowMedium : "none",
                        SCALES.width(1, "auto"),
                        SCALES.height(1, "auto"),
                        SCALES.fs(1),
                        SCALES.pt(0.65),
                        SCALES.pr(0.9),
                        SCALES.pb(0.65),
                        SCALES.pl(0.9)
                    ]
                ]
            ]) + " " + (classes || ""),
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: style_default().dynamic([
                        [
                            "3f64a9bf5fa86aaa",
                            [
                                iconOffset.x,
                                iconOffset.y,
                                colors.bgColor,
                                rect.top,
                                rect.left,
                                rect.transform,
                                colors.color,
                                presets/* Theme.layout.radius.name */.Q.layout.radius.name,
                                hasShadow ? presets/* Theme.expressiveness.shadowMedium */.Q.expressiveness.shadowMedium : "none",
                                SCALES.width(1, "auto"),
                                SCALES.height(1, "auto"),
                                SCALES.fs(1),
                                SCALES.pt(0.65),
                                SCALES.pr(0.9),
                                SCALES.pb(0.65),
                                SCALES.pl(0.9)
                            ]
                        ]
                    ]) + " " + "inner",
                    children: [
                        !hideArrow && /*#__PURE__*/ jsx_runtime_.jsx(tooltip_icon, {
                            placement: placement,
                            shadow: hasShadow
                        }),
                        children
                    ]
                }),
                jsx_runtime_.jsx((style_default()), {
                    id: "3f64a9bf5fa86aaa",
                    dynamic: [
                        iconOffset.x,
                        iconOffset.y,
                        colors.bgColor,
                        rect.top,
                        rect.left,
                        rect.transform,
                        colors.color,
                        presets/* Theme.layout.radius.name */.Q.layout.radius.name,
                        hasShadow ? presets/* Theme.expressiveness.shadowMedium */.Q.expressiveness.shadowMedium : "none",
                        SCALES.width(1, "auto"),
                        SCALES.height(1, "auto"),
                        SCALES.fs(1),
                        SCALES.pt(0.65),
                        SCALES.pr(0.9),
                        SCALES.pb(0.65),
                        SCALES.pl(0.9)
                    ],
                    children: `.tooltip-content.__jsx-style-dynamic-selector{--tooltip-icon-offset-x:${iconOffset.x};--tooltip-icon-offset-y:${iconOffset.y};--tooltip-content-bg:${colors.bgColor};-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:absolute;top:${rect.top};left:${rect.left};-webkit-transform:${rect.transform};-moz-transform:${rect.transform};-ms-transform:${rect.transform};-o-transform:${rect.transform};transform:${rect.transform};background-color:var(--tooltip-content-bg);color:${colors.color};-webkit-border-radius:${presets/* Theme.layout.radius.name */.Q.layout.radius.name};-moz-border-radius:${presets/* Theme.layout.radius.name */.Q.layout.radius.name};border-radius:${presets/* Theme.layout.radius.name */.Q.layout.radius.name};padding:0;z-index:1000;-webkit-box-shadow:${hasShadow ? presets/* Theme.expressiveness.shadowMedium */.Q.expressiveness.shadowMedium : "none"};-moz-box-shadow:${hasShadow ? presets/* Theme.expressiveness.shadowMedium */.Q.expressiveness.shadowMedium : "none"};box-shadow:${hasShadow ? presets/* Theme.expressiveness.shadowMedium */.Q.expressiveness.shadowMedium : "none"};width:${SCALES.width(1, "auto")};height:${SCALES.height(1, "auto")}}.inner.__jsx-style-dynamic-selector{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:relative;font-size:${SCALES.fs(1)};padding:${SCALES.pt(0.65)} ${SCALES.pr(0.9)} ${SCALES.pb(0.65)} ${SCALES.pl(0.9)};height:100%}`
                })
            ]
        })
    }), el);
};
/* harmony default export */ const tooltip_content = (TooltipContent);

;// CONCATENATED MODULE: ../core/components/utils/use-click-away.ts

/* harmony default export */ const utils_use_click_away = (components_use_click_away);

;// CONCATENATED MODULE: ../core/components/tooltip/tooltip.tsx


var tooltip_rest = undefined && undefined.__rest || function(s, e) {
    var t = {};
    for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") for(var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++){
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
};






const tooltip_defaultProps = {
    initialVisible: false,
    hideArrow: false,
    type: "default",
    trigger: "hover",
    placement: "top",
    enterDelay: 100,
    leaveDelay: 150,
    offset: 12,
    className: "",
    portalClassName: "",
    onVisibleChange: ()=>{}
};
const TooltipComponent = (_a)=>{
    var { children , initialVisible , text , offset , placement , portalClassName , enterDelay , leaveDelay , trigger , type , className , onVisibleChange , hideArrow , visible: customVisible  } = _a, props = tooltip_rest(_a, [
        "children",
        "initialVisible",
        "text",
        "offset",
        "placement",
        "portalClassName",
        "enterDelay",
        "leaveDelay",
        "trigger",
        "type",
        "className",
        "onVisibleChange",
        "hideArrow",
        "visible"
    ]);
    const timer = (0,external_react_.useRef)();
    const ref = (0,external_react_.useRef)(null);
    const { 0: visible , 1: setVisible  } = (0,external_react_.useState)(initialVisible);
    const iconOffset = (0,external_react_.useMemo)(()=>{
        if (!(ref === null || ref === void 0 ? void 0 : ref.current)) return {
            x: "0.75em",
            y: "0.75em"
        };
        const rect = getRect(ref);
        return {
            x: `${rect.width ? rect.width / 2 : 0}px`,
            y: `${rect.height ? rect.height / 2 : 0}px`
        };
    }, [
        ref === null || ref === void 0 ? void 0 : ref.current
    ]);
    const contentProps = {
        type,
        visible,
        offset,
        placement,
        hideArrow,
        iconOffset,
        parent: ref,
        className: portalClassName
    };
    const changeVisible = (nextState)=>{
        const clear = ()=>{
            clearTimeout(timer.current);
            timer.current = undefined;
        };
        const handler = (nextState)=>{
            setVisible(nextState);
            onVisibleChange(nextState);
            clear();
        };
        clear();
        if (nextState) {
            timer.current = window.setTimeout(()=>handler(true), enterDelay);
            return;
        }
        const leaveDelayWithoutClick = trigger === "click" ? 0 : leaveDelay;
        timer.current = window.setTimeout(()=>handler(false), leaveDelayWithoutClick);
    };
    const mouseEventHandler = (next)=>trigger === "hover" && changeVisible(next);
    const clickEventHandler = ()=>trigger === "click" && changeVisible(!visible);
    utils_use_click_away(ref, ()=>trigger === "click" && changeVisible(false));
    (0,external_react_.useEffect)(()=>{
        if (customVisible === undefined) return;
        changeVisible(customVisible);
    }, [
        customVisible
    ]);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        ref: ref,
        onClick: clickEventHandler,
        onMouseEnter: ()=>mouseEventHandler(true),
        onMouseLeave: ()=>mouseEventHandler(false),
        ...props,
        className: "jsx-7718503315aea2a2" + " " + (props && props.className != null && props.className || components_use_classes("tooltip", className) || ""),
        children: [
            children,
            /*#__PURE__*/ jsx_runtime_.jsx(tooltip_content, {
                ...contentProps,
                children: text
            }),
            jsx_runtime_.jsx((style_default()), {
                id: "7718503315aea2a2",
                children: ".tooltip.jsx-7718503315aea2a2{width:-webkit-max-content;width:-moz-max-content;width:max-content;display:inline-block}"
            })
        ]
    });
};
TooltipComponent.defaultProps = tooltip_defaultProps;
TooltipComponent.displayName = "GeistTooltip";
const tooltip_Tooltip = with_scale(TooltipComponent);
/* harmony default export */ const tooltip = ((/* unused pure expression or super */ null && (tooltip_Tooltip)));

;// CONCATENATED MODULE: ../core/components/tooltip/index.ts

/* harmony default export */ const components_tooltip = ((/* unused pure expression or super */ null && (Tooltip)));

;// CONCATENATED MODULE: ../core/components/index.ts
// @ts-ignore
/// <reference types="styled-jsx" />

























/***/ }),

/***/ 9798:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Q": () => (/* binding */ Theme)
});

;// CONCATENATED MODULE: ../core/components/themes/presets/pallete.ts
const palette = {
    white: {
        value: "#fff",
        name: "var(--nui-color-white)"
    },
    black: {
        value: "#000",
        name: "var(--nui-color-black)"
    },
    link: {
        value: "#0070f3",
        name: "var(--nui-color-link)"
    },
    background: {
        value: "#fff",
        name: "var(--nui-color-background)"
    },
    border: {
        value: "#eaeaea",
        name: "var(--nui-color-border-default)"
    },
    success: {
        value: "#4b9806",
        name: "var(--nui-color-success)"
    },
    successLight: {
        value: "#68b921",
        name: "var(--nui-color-success-light)"
    },
    primary: {
        value: "#0070f3",
        name: "var(--nui-color-primary)"
    },
    primaryLight: {
        value: "#3291ff",
        name: "var(--nui-color-primary-light)"
    },
    secondary: {
        value: "#666",
        name: "var(--nui-color-secondary)"
    },
    error: {
        value: "#e00",
        name: "var(--nui-color-error)"
    },
    errorLight: {
        value: "#ff1a1a",
        name: "var(--nui-color-error-light)"
    },
    warning: {
        value: "#f5a623",
        name: "var(--nui-color-secondary)"
    },
    market: {
        value: "rgb(248, 77, 4)",
        name: "var(--nui-color-market)"
    },
    // *** GRAY ***
    gray50: {
        value: "hsl(0 0% 98%)",
        name: "var(--npui-color-gray-50)"
    },
    gray100: {
        value: "hsl(240 4.8% 95.9%)",
        name: "var(--npui-color-gray-100)"
    },
    gray200: {
        value: "hsl(240 5.9% 90%)",
        name: "var(--npui-color-gray-200)"
    },
    gray300: {
        value: "hsl(240 4.9% 83.9%)",
        name: "var(--npui-color-gray-300)"
    },
    gray400: {
        value: "hsl(240 5% 64.9%)",
        name: "var(--npui-color-gray-400)"
    },
    gray500: {
        value: "hsl(240 3.8% 46.1%)",
        name: "var(--npui-color-gray-500)"
    },
    gray600: {
        value: "hsl(240 5.2% 33.9%)",
        name: "var(--npui-color-gray-500)"
    },
    gray700: {
        value: "hsl(240 5.3% 26.1%)",
        name: "var(--npui-color-gray-700)"
    },
    gray800: {
        value: "hsl(240 3.7% 15.9%)",
        name: "var(--npui-color-gray-700)"
    },
    gray900: {
        value: "hsl(240 5.9% 10%)",
        name: "var(--npui-color-gray-700)"
    },
    gray950: {
        value: "hsl(240 7.3% 8%)",
        name: "var(--npui-color-gray-950)"
    },
    // *** GRAY ***
    blue50: {
        value: "hsl(204 100% 97.1%)",
        name: "var(--nui-color-blue-50)"
    },
    blue100: {
        value: "hsl(204 93.8% 93.7%)",
        name: "var(--nui-color-blue-100)"
    },
    blue200: {
        value: "hsl(200.6 94.4% 86.1%)",
        name: "var(--nui-color-blue-200)"
    },
    blue300: {
        value: "hsl(199.4 95.5% 73.9%)",
        name: "var(--nui-color-blue-300)"
    },
    blue400: {
        value: "hsl(198.4 93.2% 59.6%)",
        name: "var(--nui-color-blue-400)"
    },
    blue500: {
        value: "hsl(198.6 88.7% 48.4%)",
        name: "var(--nui-color-blue-500)"
    },
    blue600: {
        value: "hsl(200.4 98% 39.4%)",
        name: "var(--nui-color-blue-600)"
    },
    blue700: {
        value: "hsl(201.3 96.3% 32.2%)",
        name: "var(--nui-color-blue-700)"
    },
    blue800: {
        value: "hsl(201.3 96.3% 32.2%)",
        name: "var(--nui-color-blue-800)"
    },
    blue900: {
        value: "hsl(202 80.3% 23.9%)",
        name: "var(--nui-color-blue-900)"
    },
    blue950: {
        value: "hsl(202.3 73.8% 16.5%)",
        name: "var(--nui-color-blue-950)"
    },
    // *** GREEn ***
    green50: {
        value: "hsl(138.5 76.5% 96.7%)",
        name: "var(--nui-color-green-50)"
    },
    green100: {
        value: "hsl(140.6 84.2% 92.5%)",
        name: "var(--nui-color-green-100)"
    },
    green200: {
        value: "hsl(141 78.9% 85.1%)",
        name: "var(--nui-color-green-200)"
    },
    green300: {
        value: "hsl(141.7 76.6% 73.1%)",
        name: "var(--nui-color-green-300)"
    },
    green400: {
        value: "hsl(141.9 69.2% 58%)",
        name: "var(--nui-color-green-400)"
    },
    green500: {
        value: "hsl(142.1 70.6% 45.3%)",
        name: "var(--nui-color-green-500)"
    },
    green600: {
        value: "hsl(142.1 76.2% 36.3%)",
        name: "var(--nui-color-green-600)"
    },
    green700: {
        value: "hsl(142.4 71.8% 29.2%)",
        name: "var(--nui-color-green-700)"
    },
    green800: {
        value: "hsl(142.8 64.2% 24.1%)",
        name: "var(--nui-color-green-800)"
    },
    green900: {
        value: "hsl(143.8 61.2% 20.2%)",
        name: "var(--nui-color-green-900)"
    },
    green950: {
        value: "hsl(144.3 60.7% 12%)",
        name: "var(--nui-color-green-950)"
    }
};

;// CONCATENATED MODULE: ../core/components/themes/presets/index.ts

const Theme = {
    palette: palette,
    layout: {
        radius: {
            value: "6px",
            name: "var(--nui-radius-default)"
        },
        gapQuarter: {
            value: "4pt",
            name: "var(--nui-gap-quarter)"
        },
        gapHalf: {
            value: "8pt",
            name: "var(--nui-gap-half)"
        },
        gap: {
            value: "16pt",
            name: "var(--nui-gap)"
        },
        unit: {
            value: "16px",
            name: "var(--nui-unit)"
        },
        gapQuarterNegative: {
            value: "-4pt",
            name: "var(--nui-gap-quarter-negative)"
        },
        pageWidthWithMargin: {
            value: "825pt",
            name: "var(--nui-page-with-margin)"
        },
        breakpointMobile: {
            value: "650px",
            name: "var(--nui-breakpoint-mobile)"
        },
        breakpointTablet: {
            value: "900px",
            name: "var(--nui-breakpoint-tablet)"
        },
        pageMargin: {
            value: "16pt",
            name: "var(--nui-page-margin)"
        }
    },
    expressiveness: {
        linkStyle: "none",
        linkHoverStyle: "none",
        dropdownBoxShadow: "0 4px 4px 0 rgba(0, 0, 0, 0.02)",
        scrollerStart: "rgba(255, 255, 255, 1)",
        scrollerEnd: "rgba(255, 255, 255, 0)",
        shadowSmall: "0 5px 10px rgba(0, 0, 0, 0.12)",
        shadowMedium: "0 8px 30px rgba(0, 0, 0, 0.12)",
        shadowLarge: "0 30px 60px rgba(0, 0, 0, 0.12)",
        portalOpacity: 0.25
    },
    font: {
        sans: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
        mono: "Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace",
        prism: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,"Liberation Mono", "Courier New", monospace'
    },
    breakpoints: {
        xs: {
            min: "0",
            max: "650px"
        },
        sm: {
            min: "650px",
            max: "900px"
        },
        md: {
            min: "900px",
            max: "1280px"
        },
        lg: {
            min: "1280px",
            max: "1920px"
        },
        xl: {
            min: "1920px",
            max: "10000px"
        }
    }
};


/***/ })

};
;