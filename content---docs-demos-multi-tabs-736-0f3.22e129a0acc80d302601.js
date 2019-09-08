(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{61:function(n,t,e){"use strict";e.r(t);e(0);var r=e(63),i=e(72),s=e(69),a=e(70),o=e(71),c='\n// 2. Create a form with multi steps & fields\nconst MyForm = () => {\n  const myForm = useForm()\n  const [isLoading, setIsLoading] = React.useState(false)\n  const submitForm = (values) => {\n    setIsLoading(true)\n\n    setTimeout(() => {\n      setIsLoading(false)\n      alert(JSON.stringify(values))\n      myForm.invalidateFields({\n        email: \'You can display an error after an API call\',\n      })\n      const step = myForm.getFieldStepName(\'email\')\n      myForm.goToStep(step)\n    }, 1000)\n  }\n  return (\n    <Formiz onValidSubmit={submitForm} connect={myForm}>\n      <form\n        noValidate\n        onSubmit={myForm.submit}\n        className="demo-form"\n        style={{ minHeight: \'16rem\' }}\n      >\n        <div className="demo-form__tabs">\n          {myForm.steps.map(step => (\n            <button\n              key={step.name}\n              className={`demo-form__tab ${step.name === myForm.currentStep.name ? \'is-active\' : \'\'}`}\n              type="button"\n              onClick={() => myForm.goToStep(step.name)}\n            >\n              {!step.isValid && step.isSubmitted && (\n                <small className="mr-2">⚠️</small>\n              )}\n              { step.label }\n            </button>\n          ))}\n        </div>\n\n        <div className="demo-form__content">\n          <FormizStep name="step1" label="Step A">\n            '.concat(Object(a.a)(!0),'\n          </FormizStep>\n          <FormizStep name="step2" label="Step B">\n            ').concat(Object(o.a)(!0),'\n          </FormizStep>\n        </div>\n\n        <div className="demo-form__footer">\n          <div\n            className="ml-auto"\n            style={{ minWidth: \'6rem\' }}\n          >\n            <button\n              className="demo-button is-primary"\n              type="submit"\n              disabled={isLoading || (!myForm.isValid && myForm.isSubmitted)}\n            >\n              {isLoading ? \'Loading...\' : \'Submit\'}\n            </button>\n          </div>\n        </div>\n      </form>\n    </Formiz>\n  )\n}\n'),u="\n".concat(s.a,"\n").concat(c,"\nrender(\n  <MyForm />\n)\n");function p(){return(p=Object.assign||function(n){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r])}return n}).apply(this,arguments)}function l(n,t){if(null==n)return{};var e,r,i=function(n,t){if(null==n)return{};var e,r,i={},s=Object.keys(n);for(r=0;r<s.length;r++)e=s[r],t.indexOf(e)>=0||(i[e]=n[e]);return i}(n,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(n);for(r=0;r<s.length;r++)e=s[r],t.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(n,e)&&(i[e]=n[e])}return i}e.d(t,"frontMatter",function(){return S}),e.d(t,"rightToc",function(){return j}),e.d(t,"default",function(){return f});var S={id:"multi-tabs",title:"Multi Tabs Form"},j=[],_={rightToc:j},d="wrapper";function f(n){var t=n.components,e=l(n,["components"]);return Object(r.b)(d,p({},_,e,{components:t,mdxType:"MDXLayout"}),Object(r.b)(i.a,{code:u,mdxType:"CodePreview"}))}f.isMDXComponent=!0},69:function(n,t,e){"use strict";e.d(t,"a",function(){return r});var r="\n// 1. Create a reusable field\nconst MyField = (props) => {\n  const {\n    errorMessage,\n    id,\n    isValid,\n    isPristine,\n    isSubmitted,\n    resetKey,\n    setValue,\n    value,\n  } = useField(props)\n  const { label, type, isRequired } = props\n  const [isFocused, setIsFocused] = React.useState(false);\n  const showError = !isValid && (!isPristine || isSubmitted)\n\n  return (\n    <div className={`demo-form-group ${(showError && !isFocused) ? 'is-error' : ''}`}>\n      <label\n        className=\"demo-label\"\n        htmlFor={id}\n      >\n        { label }\n        {isRequired && ' *'}\n      </label>\n      <input\n        key={resetKey}\n        id={id}\n        type={type || 'text'}\n        defaultValue={value}\n        className=\"demo-input\"\n        onChange={e => setValue(e.target.value)}\n        onFocus={() => setIsFocused(true)}\n        onBlur={() => setIsFocused(false)}\n        aria-invalid={!isValid}\n        aria-describedby={!isValid ? `${id}-error` : null}\n      />\n      {showError && (\n        <div id={`${id}-error`} className=\"demo-form-feedback\">\n          { errorMessage }\n        </div>\n      )}\n    </div>\n  )\n}\n"},70:function(n,t,e){"use strict";e.d(t,"a",function(){return r});var r=function(n){return'\n            <MyField\n              name="name"\n              label="Name"\n              isRequired="Name is required"\n              '.concat(n?'defaultValue="Hailey Terry"':"",'\n            />\n\n            <MyField\n              name="nickname"\n              label="Nickname"\n              ').concat(n?'defaultValue="hailey"':"","\n            />\n")}},71:function(n,t,e){"use strict";e.d(t,"a",function(){return r});var r=function(n){return'\n            <MyField\n              name="email"\n              label="Email"\n              type="email"\n              isRequired="Email is required"\n              validations={[\n                {\n                  rule: validations.isEmail(),\n                  message: \'Not a valid email\',\n                }\n              ]}\n              '.concat(n?'defaultValue="hailey@company.com"':"",'\n            />\n\n            <MyField\n              name="password"\n              label="Password"\n              type="password"\n            />\n            <MyField\n              name="passwordConfirm"\n              label="Confirm password"\n              type="password"\n              validations={[\n                {\n                  rule: (value, values) => values.password === value,\n                  message: \'Passwords do not match\',\n                }\n              ]}\n            />\n')}},72:function(n,t,e){"use strict";var r={};e.r(r),e.d(r,"isEmail",function(){return _n}),e.d(r,"isNotEmptyArray",function(){return jn}),e.d(r,"isNotEmptyString",function(){return Sn}),e.d(r,"isRequired",function(){return ln});var i=e(0),s=e.n(i),a=e(6),o=e.n(a),c=e(480),u=e(68),p=e.n(u),l=e(78),S=e.n(l);function j(n){return(j="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(n)}function _(n){return(_="function"==typeof Symbol&&"symbol"==j(Symbol.iterator)?function(n){return j(n)}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":j(n)})(n)}function d(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}function f(){return(f=Object.assign||function(n){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r])}return n}).apply(this,arguments)}function m(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable})),e.push.apply(e,r)}return e}function y(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?m(e,!0).forEach(function(t){d(n,t,e[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):m(e).forEach(function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(e,t))})}return n}function g(n,t){if(null==n)return{};var e,r,i=function(n,t){if(null==n)return{};var e,r,i={},s=Object.keys(n);for(r=0;r<s.length;r++)e=s[r],t.indexOf(e)>=0||(i[e]=n[e]);return i}(n,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(n);for(r=0;r<s.length;r++)e=s[r],t.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(n,e)&&(i[e]=n[e])}return i}function h(n,t){return b(n)||function(n,t){var e=[],r=!0,i=!1,s=void 0;try{for(var a,o=n[Symbol.iterator]();!(r=(a=o.next()).done)&&(e.push(a.value),!t||e.length!==t);r=!0);}catch(n){i=!0,s=n}finally{try{r||null==o.return||o.return()}finally{if(i)throw s}}return e}(n,t)||x()}function E(n){return function(n){if(Array.isArray(n)){for(var t=0,e=new Array(n.length);t<n.length;t++)e[t]=n[t];return e}}(n)||v(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function b(n){if(Array.isArray(n))return n}function v(n){if(Symbol.iterator in Object(n)||"[object Arguments]"===Object.prototype.toString.call(n))return Array.from(n)}function x(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function P(n){var t=function(n,t){if("object"!=j(n)||null===n)return n;var e=n[Symbol.toPrimitive];if(void 0!==e){var r=e.call(n,t);if("object"!=j(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(n)}(n,"string");return"symbol"==j(t)?t:String(t)}var O=function(n){return n&&"object"===_(n)&&n.constructor===Object},C=function(n){return Object.keys(n).reduce(function(n,t){return B(t,n)},n)},B=function(n,t){if(n.indexOf(".")<0&&n.indexOf("[")<0)return t;var e,r=t[n],i=t||{},s=(i[n],g(i,[n].map(P))),a=b(e=n.split("."))||v(e)||x(),o=a[0],c=a.slice(1);if(o.match(/\[([0-9]*)\]$/g)){var u=h(o.split(/(\[|\])/g),3),p=u[0],l=u[2],S=t[p]||[];if(c.length){var j=y({},t[p]&&O(t[p][l])?t[p][l]:{},d({},c.join("."),r));S[l]=C(j)}else S[l]=r;return y({},s,d({},p,S))}var _=y({},O(t[o])?t[o]:{},d({},c.join("."),r));return y({},s,d({},o,C(_)))},w=function(n){var t=(n||[]).filter(function(n){return n.isActive}).reduce(function(n,t){return y({},n,d({},t.name,t.value))},{});return C(t)},M=function(n,t){return(t||[]).filter(function(t){return t.step===n})},N=function(n,t){var e=function(n,t){return(t||[]).find(function(t){return t.name===n})}(n,t);if(!e)return[];var r=(e.validations||[]).map(function(n){return n.rule&&!n.rule(e.value,w(t))?n.message:"___FIELD_IS_VALID___"}).filter(function(n){return"___FIELD_IS_VALID___"!==n});return e.externalError?[e.externalError].concat(E(r)):r},T=function(n,t){return(t||[]).find(function(t){return t.name===n})||{}},F=function(n){return n.navigatedStepName||n.initialStepName},G=function(n,t){return(t||[]).findIndex(function(t){return t.name===n})||0},k=function(n){return(n||[]).sort(function(n,t){return n.order-t.order}).sort(function(n,t){return n.index-t.index})},V=function(){return"id-".concat(Math.random().toString(36).substr(2,9))},L=s.a.createContext(),A=function(){return Object(i.useContext)(L)},I=function(n){var t=n.children,e=n.onStateChange,r=Object(i.useMemo)(function(){return V()},[]),a=Object(i.useRef)({id:r,resetKey:0,isValid:!0,isSubmitted:!1,initialStepName:null,navigatedStepName:null,steps:[],fields:[]}),o=Object(i.useRef)(!1),c=Object(i.useRef)(null),u=h(Object(i.useState)(a.current),2),p=u[0],l=u[1];Object(i.useEffect)(function(){return o.current=!0,function(){o.current=!1}},[]);var S=Object(i.useCallback)(function(n){a.current=n(a.current),clearTimeout(c.current),c.current=setTimeout(function(){o.current&&l(a.current)})},[a,c,l]);return Object(i.useEffect)(function(){e(a.current)},[a.current]),s.a.createElement(L.Provider,{value:{state:p,dispatch:S}},t)};I.propTypes={children:S.a.node.isRequired,onStateChange:S.a.func},I.defaultProps={onStateChange:function(){}};var D=function(){return function(n){var t=(n.fields||[]).map(function(t){return y({},t,{errors:N(t.name,n.fields)})}),e=t.every(function(n){return!n.errors.length}),r=(n.steps||[]).map(function(n){return y({},n,{isValid:M(n.name,t).every(function(n){return!n.errors.length})})});return y({},n,{fields:t,steps:r,isValid:e})}},H=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(){},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){},e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(){};return function(r){var i=(r.steps||[]).map(function(n){return y({},n,{isSubmitted:!0})}),s=w(r.fields);n(s);var a=y({},r,{steps:i,isSubmitted:!0});return(a=D()(a)).isValid?t(s):e(s),a}},K=function(n){return function(t){var e=(t.steps||[]).find(function(t){return t.name===n});if(!e||!e.name)return t;var r=y({},t,{navigatedStepName:e.name});return D()(r)}},R=function(n){return function(t){var e=(t.steps||[])[n]||{};return K(e.name)(t)}},z=function(){return function(n){var t=n.steps,e=(t||[]).length,r=F(n),i=G(r,t),s=e>0?i+1:0;return R(s=s>e-1?i:s)(n)}},J={children:S.a.node,autoForm:S.a.bool,onSubmit:S.a.func,onValidSubmit:S.a.func,onInvalidSubmit:S.a.func,onValid:S.a.func,onInvalid:S.a.func,onChange:S.a.func,connect:S.a.shape({__connect__:S.a.func})},W={children:"",autoForm:!1,onSubmit:function(){},onValidSubmit:function(){},onInvalidSubmit:function(){},onValid:function(){},onInvalid:function(){},onChange:function(){},connect:{__connect__:function(){}}},q=function(n){var t=n.children,e=n.autoForm,r=n.onSubmit,a=n.onValidSubmit,o=n.onInvalidSubmit,c=n.onValid,u=n.onInvalid,p=n.onChange,l=n.connect,S=A(),j=S.state,_=S.dispatch,d=j.id,f=j.fields,m=j.isValid,h=j.isSubmitted,b=j.steps,v=Object(i.useMemo)(function(){return w(f)},[f]),x=(b||[]).length,P=F(j),O=T(P,b),C=G(P,b),B=function(n){return{name:n.name,label:n.label,isValid:n.isValid,isVisited:n.isVisited,isSubmitted:n.isSubmitted,index:n.index}};p(v),m?c():u();var M=function(n){n&&n.preventDefault(),_(H(r,a,o))},N=function(n){n&&n.preventDefault(),_(function(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){},e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(){},r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:function(){};return function(i){var s=i.steps.find(function(t){return t.name===n})||{},a=i.steps.filter(function(t){return t.name!==n}),o=k([].concat(E(a),[y({},s,{isSubmitted:!0})])),c=y({},i,{steps:o});return s.isValid?(c.navigatedStepName===(c=z()(c)).navigatedStepName&&(c=H(t,e,r)(c)),c):c}}(P,r,a,o))};return Object(i.useEffect)(function(){l.__connect__({id:d,submit:M,isValid:m,isSubmitted:h,values:v,invalidateFields:function(n){_(function(n){return function(t){var e=t.fields.map(function(t){var e=n[t.name];return e?y({},t,{externalError:e}):t}),r=y({},t,{fields:e});return D()(r)}}(n))},reset:function(){_(function(n){var t=(n.fields||[]).map(function(n){n.externalError;var t=g(n,["externalError"]);return y({},t,{isPristine:!0,value:t.defaultValue})}),e=(n.steps||[]).map(function(n){return y({},n,{isSubmitted:!1,isVisited:!1})}),r=y({},n,{fields:t,steps:e,isSubmitted:!1,navigatedStepName:n.initialStepName,resetKey:n.resetKey+1});return D()(r)})},currentStep:B(O),steps:(b||[]).map(B),isStepValid:O.isValid,isStepSubmitted:O.isSubmitted,isFirstStep:0===C,isLastStep:C===x-1,submitStep:N,getFieldStepName:function(n){return function(n,t){var e=f.find(function(t){return t.name===n});if(e&&e.isActive)return e.step}(n)},nextStep:function(){_(z())},prevStep:function(){_(function(n){var t=n.steps,e=F(n),r=G(e,t)-1;return R(r=r<0?0:r)(n)})},goToStep:function(n){_(K(n))}})},[_,JSON.stringify(l.__connect__),JSON.stringify(M),JSON.stringify(N),d,m,h,JSON.stringify(v),JSON.stringify(b),JSON.stringify(f),JSON.stringify(O),C,x]),e?s.a.createElement("form",{onSubmit:M},t):t};q.propTypes=J,q.defaultProps=W;var $=new Error("A <FormizStep> always needs a `name` attribute."),U={as:S.a.oneOfType([S.a.func,S.a.string,S.a.shape({$$typeof:S.a.symbol,render:S.a.func}),S.a.arrayOf(S.a.oneOfType([S.a.func,S.a.string,S.a.shape({$$typeof:S.a.symbol,render:S.a.func})]))]),children:S.a.oneOfType([S.a.node,S.a.func]),name:S.a.string.isRequired,label:S.a.node,order:S.a.number,style:S.a.oneOfType([S.a.object,S.a.array])},X={as:"div",children:"",label:"",order:0,style:{}},Y=function(n){var t=n.as,e=n.children,r=n.name,a=n.label,o=n.order,c=n.style,u=g(n,["as","children","name","label","order","style"]);if(!r)throw $;var p,l=A(),S=l.state,j=l.dispatch,_=F(S),d=T(_,S.steps),m=_===r;return d.name&&!d.isVisited&&m&&j((p=_,function(n){var t=n.steps.find(function(n){return n.name===p})||{},e=n.steps.filter(function(n){return n.name!==p}),r=k([].concat(E(e),[y({},t,{isVisited:!0})]));return y({},n,{steps:r})})),Object(i.useEffect)(function(){return j(function(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";return function(r){var i=r.steps.find(function(t){return t.name===n})||{},s=r.steps.filter(function(t){return t.name!==n}),a=k([].concat(E(s),[y({},i,{name:n,label:e,order:t,isValid:!0,isVisited:!1,isSubmitted:!1})])).map(function(n,t){return y({},n,{index:t})}),o=y({},r,{steps:a,initialStepName:a.length?a[0].name:null});return D()(o)}}(r,o,a)),function(){j(function(n){return function(t){var e=t.steps.filter(function(t){return t.name!==n}),r=y({},t,{steps:k(e)});return D()(r)}}(r))}},[r,o]),"function"==typeof e?e({isActive:m}):s.a.createElement(t,f({style:y({},c,{display:m?null:"none"})},u),e)};Y.propTypes=U,Y.defaultProps=X;var Z=s.a.createContext(),Q=function(n){var t=n.children,e=n.name;return s.a.createElement(Z.Provider,{value:e},t)};Q.propTypes={children:S.a.node.isRequired,name:S.a.string},Q.defaultProps={name:null};var nn=function(n){var t=Object(i.useRef)();return Object(i.useEffect)(function(){t.current=n},[n]),t.current},tn=function(){var n=h(Object(i.useState)({id:null,submit:function(){},isValid:!0,isSubmitted:!1,values:{},invalidateFields:function(){},reset:function(){},currentStep:{},steps:[],isStepValid:!0,isStepSubmitted:!1,isFirstStep:!0,isLastStep:!0,submitStep:function(){},getFieldStepName:function(){},nextStep:function(){},prevStep:function(){},goToStep:function(){}}),2),t=n[0],e=n[1],r=nn(t);return y({},t,{__connect__:function(n){n!==r&&e(n)}})},en=new Error("A Formiz field always needs to be in a `<Formiz>` component."),rn=new Error("A Formiz field always needs a `name` attribute."),sn=(S.a.any,S.a.string,S.a.bool,S.a.string,S.a.func,S.a.arrayOf(S.a.shape({rule:S.a.func,message:S.a.string})),function(n){return n||""===n?{rule:function(n){return!!n||0===n},message:!0!==n?n:""}:{}}),an=function(n){var t=n.defaultValue,e=n.isRequired,r=n.keepValue,s=n.name,a=n.onChange,o=n.validations,c=void 0===o?[]:o;if(!s)throw rn;var u=A(),p=Object(i.useContext)(Z);if(!u)throw en;var l=u.state,S=u.dispatch,j=nn(s),_=l.fields.find(function(n){return n.name===s}),d=l.fields.find(function(n){return n.name===j}),f=_?(_.errors||[]).filter(function(n){return!!n}):[],m=T(p,l.steps),h=m.name?m.isSubmitted:l.isSubmitted;return Object(i.useEffect)(function(){return S(function(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},e=t.value,r=void 0===e?null:e,i=t.step,s=void 0===i?null:i,a=t.validations,o=void 0===a?[]:a;return function(t){var e=t.fields.find(function(t){return t.name===n})||{},i=t.fields.filter(function(t){return t.name!==n}),a=[].concat(E(i),[y({},e,{id:V(),name:n,value:e.value||r,defaultValue:r,isActive:!0,isPristine:!0,step:s,validations:o,errors:[]})]),c=y({},t,{fields:a});return D()(c)}}(s,{value:d?d.value:t,step:p,validations:c})),function(){S(function(n,t){return function(e){var r=e.fields.find(function(t){return t.name===n});if(!r)return e;var i=e.fields.filter(function(t){return t.name!==n}),s=t?[].concat(E(i),[y({},r,{isActive:!1})]):i,a=y({},e,{fields:s});return D()(a)}}(s,r))}},[S,s,p,r]),Object(i.useEffect)(function(){var n=[sn(e)];S(function(n,t){return function(e){var r=e.fields.find(function(t){return t.name===n});if(!r)return e;var i=e.fields.filter(function(t){return t.name!==n}),s=[].concat(E(i),[y({},r,{validations:t})]),a=y({},e,{fields:s});return D()(a)}}(s,[].concat(n,E(c))))},[S,s,JSON.stringify(c),JSON.stringify(e)]),{id:"".concat(_?_.id:l.id,"-").concat(s),resetKey:l.resetKey,value:_?_.value:null,errorMessages:f,errorMessage:f[0],isValid:!_||!_.errors.length,isPristine:!_||_.isPristine,isSubmitted:h,setValue:function(n){S(function(n,t){return function(e){var r=e.fields.find(function(t){return t.name===n});if(!r)return e;var i=e.fields.filter(function(t){return t.name!==n}),s=(r.externalError,g(r,["externalError"])),a=[].concat(E(i),[y({},s,{value:t,isPristine:!1})]),o=y({},e,{fields:a});return D()(o)}}(s,n)),a&&a(n)}}},on=function(n){return s.a.createElement(I,null,s.a.createElement(q,n))};on.propTypes=J,on.defaultProps=W;var cn=function(n){var t=n.name,e=n.order,r=g(n,["name","order"]);return s.a.createElement(Q,{name:t},s.a.createElement(Y,f({},r,{name:t,order:e})))};cn.propTypes=U,cn.defaultProps=X;var un=function(n){return"string"==typeof n||n instanceof String},pn=/^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i,ln=function(){return function(n){return!!n||0===n}},Sn=function(){return function(n){return!!un(n)&&!!(n||"").match(/^(?!\s*$).+/)}},jn=function(){return function(n){return t=n,!!Array.isArray(t)&&!!(n||[]).length;var t}},_n=function(){return function(n){return null==n||!!un(n)&&(!n||pn.test(n))}};e.d(t,"a",function(){return dn});var dn=function(n){var t=n.code;return s.a.createElement(c.d,{code:t.trim(),scope:{React:s.a,Formiz:on,FormizStep:cn,useForm:tn,useField:an,validations:r},theme:p.a,noInline:!0},s.a.createElement("div",{className:"relative mx-4 xxl:mx-0 z-20 shadow-lg rounded-lg overflow-hidden bg-white"},s.a.createElement(c.c,null)),s.a.createElement(c.b,null),s.a.createElement("div",{className:"relative z-10 xxl:-mx-20 -mt-6 px-2 pb-2 pt-10 rounded-lg overflow-hidden",style:{background:"#011627"}},s.a.createElement(c.a,null)))};dn.propTypes={code:o.a.string.isRequired}},79:function(n,t,e){var r={"./Binary_Property/ASCII.js":80,"./Binary_Property/ASCII_Hex_Digit.js":81,"./Binary_Property/Alphabetic.js":82,"./Binary_Property/Any.js":83,"./Binary_Property/Assigned.js":84,"./Binary_Property/Bidi_Control.js":85,"./Binary_Property/Bidi_Mirrored.js":86,"./Binary_Property/Case_Ignorable.js":87,"./Binary_Property/Cased.js":88,"./Binary_Property/Changes_When_Casefolded.js":89,"./Binary_Property/Changes_When_Casemapped.js":90,"./Binary_Property/Changes_When_Lowercased.js":91,"./Binary_Property/Changes_When_NFKC_Casefolded.js":92,"./Binary_Property/Changes_When_Titlecased.js":93,"./Binary_Property/Changes_When_Uppercased.js":94,"./Binary_Property/Dash.js":95,"./Binary_Property/Default_Ignorable_Code_Point.js":96,"./Binary_Property/Deprecated.js":97,"./Binary_Property/Diacritic.js":98,"./Binary_Property/Emoji.js":99,"./Binary_Property/Emoji_Component.js":100,"./Binary_Property/Emoji_Modifier.js":101,"./Binary_Property/Emoji_Modifier_Base.js":102,"./Binary_Property/Emoji_Presentation.js":103,"./Binary_Property/Extended_Pictographic.js":104,"./Binary_Property/Extender.js":105,"./Binary_Property/Grapheme_Base.js":106,"./Binary_Property/Grapheme_Extend.js":107,"./Binary_Property/Hex_Digit.js":108,"./Binary_Property/IDS_Binary_Operator.js":109,"./Binary_Property/IDS_Trinary_Operator.js":110,"./Binary_Property/ID_Continue.js":111,"./Binary_Property/ID_Start.js":112,"./Binary_Property/Ideographic.js":113,"./Binary_Property/Join_Control.js":114,"./Binary_Property/Logical_Order_Exception.js":115,"./Binary_Property/Lowercase.js":116,"./Binary_Property/Math.js":117,"./Binary_Property/Noncharacter_Code_Point.js":118,"./Binary_Property/Pattern_Syntax.js":119,"./Binary_Property/Pattern_White_Space.js":120,"./Binary_Property/Quotation_Mark.js":121,"./Binary_Property/Radical.js":122,"./Binary_Property/Regional_Indicator.js":123,"./Binary_Property/Sentence_Terminal.js":124,"./Binary_Property/Soft_Dotted.js":125,"./Binary_Property/Terminal_Punctuation.js":126,"./Binary_Property/Unified_Ideograph.js":127,"./Binary_Property/Uppercase.js":128,"./Binary_Property/Variation_Selector.js":129,"./Binary_Property/White_Space.js":130,"./Binary_Property/XID_Continue.js":131,"./Binary_Property/XID_Start.js":132,"./General_Category/Cased_Letter.js":133,"./General_Category/Close_Punctuation.js":134,"./General_Category/Connector_Punctuation.js":135,"./General_Category/Control.js":136,"./General_Category/Currency_Symbol.js":137,"./General_Category/Dash_Punctuation.js":138,"./General_Category/Decimal_Number.js":139,"./General_Category/Enclosing_Mark.js":140,"./General_Category/Final_Punctuation.js":141,"./General_Category/Format.js":142,"./General_Category/Initial_Punctuation.js":143,"./General_Category/Letter.js":144,"./General_Category/Letter_Number.js":145,"./General_Category/Line_Separator.js":146,"./General_Category/Lowercase_Letter.js":147,"./General_Category/Mark.js":148,"./General_Category/Math_Symbol.js":149,"./General_Category/Modifier_Letter.js":150,"./General_Category/Modifier_Symbol.js":151,"./General_Category/Nonspacing_Mark.js":152,"./General_Category/Number.js":153,"./General_Category/Open_Punctuation.js":154,"./General_Category/Other.js":155,"./General_Category/Other_Letter.js":156,"./General_Category/Other_Number.js":157,"./General_Category/Other_Punctuation.js":158,"./General_Category/Other_Symbol.js":159,"./General_Category/Paragraph_Separator.js":160,"./General_Category/Private_Use.js":161,"./General_Category/Punctuation.js":162,"./General_Category/Separator.js":163,"./General_Category/Space_Separator.js":164,"./General_Category/Spacing_Mark.js":165,"./General_Category/Surrogate.js":166,"./General_Category/Symbol.js":167,"./General_Category/Titlecase_Letter.js":168,"./General_Category/Unassigned.js":169,"./General_Category/Uppercase_Letter.js":170,"./Script/Adlam.js":171,"./Script/Ahom.js":172,"./Script/Anatolian_Hieroglyphs.js":173,"./Script/Arabic.js":174,"./Script/Armenian.js":175,"./Script/Avestan.js":176,"./Script/Balinese.js":177,"./Script/Bamum.js":178,"./Script/Bassa_Vah.js":179,"./Script/Batak.js":180,"./Script/Bengali.js":181,"./Script/Bhaiksuki.js":182,"./Script/Bopomofo.js":183,"./Script/Brahmi.js":184,"./Script/Braille.js":185,"./Script/Buginese.js":186,"./Script/Buhid.js":187,"./Script/Canadian_Aboriginal.js":188,"./Script/Carian.js":189,"./Script/Caucasian_Albanian.js":190,"./Script/Chakma.js":191,"./Script/Cham.js":192,"./Script/Cherokee.js":193,"./Script/Common.js":194,"./Script/Coptic.js":195,"./Script/Cuneiform.js":196,"./Script/Cypriot.js":197,"./Script/Cyrillic.js":198,"./Script/Deseret.js":199,"./Script/Devanagari.js":200,"./Script/Dogra.js":201,"./Script/Duployan.js":202,"./Script/Egyptian_Hieroglyphs.js":203,"./Script/Elbasan.js":204,"./Script/Elymaic.js":205,"./Script/Ethiopic.js":206,"./Script/Georgian.js":207,"./Script/Glagolitic.js":208,"./Script/Gothic.js":209,"./Script/Grantha.js":210,"./Script/Greek.js":211,"./Script/Gujarati.js":212,"./Script/Gunjala_Gondi.js":213,"./Script/Gurmukhi.js":214,"./Script/Han.js":215,"./Script/Hangul.js":216,"./Script/Hanifi_Rohingya.js":217,"./Script/Hanunoo.js":218,"./Script/Hatran.js":219,"./Script/Hebrew.js":220,"./Script/Hiragana.js":221,"./Script/Imperial_Aramaic.js":222,"./Script/Inherited.js":223,"./Script/Inscriptional_Pahlavi.js":224,"./Script/Inscriptional_Parthian.js":225,"./Script/Javanese.js":226,"./Script/Kaithi.js":227,"./Script/Kannada.js":228,"./Script/Katakana.js":229,"./Script/Kayah_Li.js":230,"./Script/Kharoshthi.js":231,"./Script/Khmer.js":232,"./Script/Khojki.js":233,"./Script/Khudawadi.js":234,"./Script/Lao.js":235,"./Script/Latin.js":236,"./Script/Lepcha.js":237,"./Script/Limbu.js":238,"./Script/Linear_A.js":239,"./Script/Linear_B.js":240,"./Script/Lisu.js":241,"./Script/Lycian.js":242,"./Script/Lydian.js":243,"./Script/Mahajani.js":244,"./Script/Makasar.js":245,"./Script/Malayalam.js":246,"./Script/Mandaic.js":247,"./Script/Manichaean.js":248,"./Script/Marchen.js":249,"./Script/Masaram_Gondi.js":250,"./Script/Medefaidrin.js":251,"./Script/Meetei_Mayek.js":252,"./Script/Mende_Kikakui.js":253,"./Script/Meroitic_Cursive.js":254,"./Script/Meroitic_Hieroglyphs.js":255,"./Script/Miao.js":256,"./Script/Modi.js":257,"./Script/Mongolian.js":258,"./Script/Mro.js":259,"./Script/Multani.js":260,"./Script/Myanmar.js":261,"./Script/Nabataean.js":262,"./Script/Nandinagari.js":263,"./Script/New_Tai_Lue.js":264,"./Script/Newa.js":265,"./Script/Nko.js":266,"./Script/Nushu.js":267,"./Script/Nyiakeng_Puachue_Hmong.js":268,"./Script/Ogham.js":269,"./Script/Ol_Chiki.js":270,"./Script/Old_Hungarian.js":271,"./Script/Old_Italic.js":272,"./Script/Old_North_Arabian.js":273,"./Script/Old_Permic.js":274,"./Script/Old_Persian.js":275,"./Script/Old_Sogdian.js":276,"./Script/Old_South_Arabian.js":277,"./Script/Old_Turkic.js":278,"./Script/Oriya.js":279,"./Script/Osage.js":280,"./Script/Osmanya.js":281,"./Script/Pahawh_Hmong.js":282,"./Script/Palmyrene.js":283,"./Script/Pau_Cin_Hau.js":284,"./Script/Phags_Pa.js":285,"./Script/Phoenician.js":286,"./Script/Psalter_Pahlavi.js":287,"./Script/Rejang.js":288,"./Script/Runic.js":289,"./Script/Samaritan.js":290,"./Script/Saurashtra.js":291,"./Script/Sharada.js":292,"./Script/Shavian.js":293,"./Script/Siddham.js":294,"./Script/SignWriting.js":295,"./Script/Sinhala.js":296,"./Script/Sogdian.js":297,"./Script/Sora_Sompeng.js":298,"./Script/Soyombo.js":299,"./Script/Sundanese.js":300,"./Script/Syloti_Nagri.js":301,"./Script/Syriac.js":302,"./Script/Tagalog.js":303,"./Script/Tagbanwa.js":304,"./Script/Tai_Le.js":305,"./Script/Tai_Tham.js":306,"./Script/Tai_Viet.js":307,"./Script/Takri.js":308,"./Script/Tamil.js":309,"./Script/Tangut.js":310,"./Script/Telugu.js":311,"./Script/Thaana.js":312,"./Script/Thai.js":313,"./Script/Tibetan.js":314,"./Script/Tifinagh.js":315,"./Script/Tirhuta.js":316,"./Script/Ugaritic.js":317,"./Script/Vai.js":318,"./Script/Wancho.js":319,"./Script/Warang_Citi.js":320,"./Script/Yi.js":321,"./Script/Zanabazar_Square.js":322,"./Script_Extensions/Adlam.js":323,"./Script_Extensions/Ahom.js":324,"./Script_Extensions/Anatolian_Hieroglyphs.js":325,"./Script_Extensions/Arabic.js":326,"./Script_Extensions/Armenian.js":327,"./Script_Extensions/Avestan.js":328,"./Script_Extensions/Balinese.js":329,"./Script_Extensions/Bamum.js":330,"./Script_Extensions/Bassa_Vah.js":331,"./Script_Extensions/Batak.js":332,"./Script_Extensions/Bengali.js":333,"./Script_Extensions/Bhaiksuki.js":334,"./Script_Extensions/Bopomofo.js":335,"./Script_Extensions/Brahmi.js":336,"./Script_Extensions/Braille.js":337,"./Script_Extensions/Buginese.js":338,"./Script_Extensions/Buhid.js":339,"./Script_Extensions/Canadian_Aboriginal.js":340,"./Script_Extensions/Carian.js":341,"./Script_Extensions/Caucasian_Albanian.js":342,"./Script_Extensions/Chakma.js":343,"./Script_Extensions/Cham.js":344,"./Script_Extensions/Cherokee.js":345,"./Script_Extensions/Common.js":346,"./Script_Extensions/Coptic.js":347,"./Script_Extensions/Cuneiform.js":348,"./Script_Extensions/Cypriot.js":349,"./Script_Extensions/Cyrillic.js":350,"./Script_Extensions/Deseret.js":351,"./Script_Extensions/Devanagari.js":352,"./Script_Extensions/Dogra.js":353,"./Script_Extensions/Duployan.js":354,"./Script_Extensions/Egyptian_Hieroglyphs.js":355,"./Script_Extensions/Elbasan.js":356,"./Script_Extensions/Elymaic.js":357,"./Script_Extensions/Ethiopic.js":358,"./Script_Extensions/Georgian.js":359,"./Script_Extensions/Glagolitic.js":360,"./Script_Extensions/Gothic.js":361,"./Script_Extensions/Grantha.js":362,"./Script_Extensions/Greek.js":363,"./Script_Extensions/Gujarati.js":364,"./Script_Extensions/Gunjala_Gondi.js":365,"./Script_Extensions/Gurmukhi.js":366,"./Script_Extensions/Han.js":367,"./Script_Extensions/Hangul.js":368,"./Script_Extensions/Hanifi_Rohingya.js":369,"./Script_Extensions/Hanunoo.js":370,"./Script_Extensions/Hatran.js":371,"./Script_Extensions/Hebrew.js":372,"./Script_Extensions/Hiragana.js":373,"./Script_Extensions/Imperial_Aramaic.js":374,"./Script_Extensions/Inherited.js":375,"./Script_Extensions/Inscriptional_Pahlavi.js":376,"./Script_Extensions/Inscriptional_Parthian.js":377,"./Script_Extensions/Javanese.js":378,"./Script_Extensions/Kaithi.js":379,"./Script_Extensions/Kannada.js":380,"./Script_Extensions/Katakana.js":381,"./Script_Extensions/Kayah_Li.js":382,"./Script_Extensions/Kharoshthi.js":383,"./Script_Extensions/Khmer.js":384,"./Script_Extensions/Khojki.js":385,"./Script_Extensions/Khudawadi.js":386,"./Script_Extensions/Lao.js":387,"./Script_Extensions/Latin.js":388,"./Script_Extensions/Lepcha.js":389,"./Script_Extensions/Limbu.js":390,"./Script_Extensions/Linear_A.js":391,"./Script_Extensions/Linear_B.js":392,"./Script_Extensions/Lisu.js":393,"./Script_Extensions/Lycian.js":394,"./Script_Extensions/Lydian.js":395,"./Script_Extensions/Mahajani.js":396,"./Script_Extensions/Makasar.js":397,"./Script_Extensions/Malayalam.js":398,"./Script_Extensions/Mandaic.js":399,"./Script_Extensions/Manichaean.js":400,"./Script_Extensions/Marchen.js":401,"./Script_Extensions/Masaram_Gondi.js":402,"./Script_Extensions/Medefaidrin.js":403,"./Script_Extensions/Meetei_Mayek.js":404,"./Script_Extensions/Mende_Kikakui.js":405,"./Script_Extensions/Meroitic_Cursive.js":406,"./Script_Extensions/Meroitic_Hieroglyphs.js":407,"./Script_Extensions/Miao.js":408,"./Script_Extensions/Modi.js":409,"./Script_Extensions/Mongolian.js":410,"./Script_Extensions/Mro.js":411,"./Script_Extensions/Multani.js":412,"./Script_Extensions/Myanmar.js":413,"./Script_Extensions/Nabataean.js":414,"./Script_Extensions/Nandinagari.js":415,"./Script_Extensions/New_Tai_Lue.js":416,"./Script_Extensions/Newa.js":417,"./Script_Extensions/Nko.js":418,"./Script_Extensions/Nushu.js":419,"./Script_Extensions/Nyiakeng_Puachue_Hmong.js":420,"./Script_Extensions/Ogham.js":421,"./Script_Extensions/Ol_Chiki.js":422,"./Script_Extensions/Old_Hungarian.js":423,"./Script_Extensions/Old_Italic.js":424,"./Script_Extensions/Old_North_Arabian.js":425,"./Script_Extensions/Old_Permic.js":426,"./Script_Extensions/Old_Persian.js":427,"./Script_Extensions/Old_Sogdian.js":428,"./Script_Extensions/Old_South_Arabian.js":429,"./Script_Extensions/Old_Turkic.js":430,"./Script_Extensions/Oriya.js":431,"./Script_Extensions/Osage.js":432,"./Script_Extensions/Osmanya.js":433,"./Script_Extensions/Pahawh_Hmong.js":434,"./Script_Extensions/Palmyrene.js":435,"./Script_Extensions/Pau_Cin_Hau.js":436,"./Script_Extensions/Phags_Pa.js":437,"./Script_Extensions/Phoenician.js":438,"./Script_Extensions/Psalter_Pahlavi.js":439,"./Script_Extensions/Rejang.js":440,"./Script_Extensions/Runic.js":441,"./Script_Extensions/Samaritan.js":442,"./Script_Extensions/Saurashtra.js":443,"./Script_Extensions/Sharada.js":444,"./Script_Extensions/Shavian.js":445,"./Script_Extensions/Siddham.js":446,"./Script_Extensions/SignWriting.js":447,"./Script_Extensions/Sinhala.js":448,"./Script_Extensions/Sogdian.js":449,"./Script_Extensions/Sora_Sompeng.js":450,"./Script_Extensions/Soyombo.js":451,"./Script_Extensions/Sundanese.js":452,"./Script_Extensions/Syloti_Nagri.js":453,"./Script_Extensions/Syriac.js":454,"./Script_Extensions/Tagalog.js":455,"./Script_Extensions/Tagbanwa.js":456,"./Script_Extensions/Tai_Le.js":457,"./Script_Extensions/Tai_Tham.js":458,"./Script_Extensions/Tai_Viet.js":459,"./Script_Extensions/Takri.js":460,"./Script_Extensions/Tamil.js":461,"./Script_Extensions/Tangut.js":462,"./Script_Extensions/Telugu.js":463,"./Script_Extensions/Thaana.js":464,"./Script_Extensions/Thai.js":465,"./Script_Extensions/Tibetan.js":466,"./Script_Extensions/Tifinagh.js":467,"./Script_Extensions/Tirhuta.js":468,"./Script_Extensions/Ugaritic.js":469,"./Script_Extensions/Vai.js":470,"./Script_Extensions/Wancho.js":471,"./Script_Extensions/Warang_Citi.js":472,"./Script_Extensions/Yi.js":473,"./Script_Extensions/Zanabazar_Square.js":474,"./index.js":475,"./unicode-version.js":476};function i(n){var t=s(n);return e(t)}function s(n){if(!e.o(r,n)){var t=new Error("Cannot find module '"+n+"'");throw t.code="MODULE_NOT_FOUND",t}return r[n]}i.keys=function(){return Object.keys(r)},i.resolve=s,n.exports=i,i.id=79}}]);