'use strict';Object.defineProperty(exports,'__esModule',{value:true});var quasar=require('quasar');require('troyemixin'),require('@troyexu/yl-fn');//

var script = {
  props: {
    isLogin: {
      type: Boolean,
      default: true
    },
    account: {
      type: String,
      default: 'troye123'
    },
    money: {
      type: String,
      default: '$1000'
    }
  },
  data: function data() {
    return {// casino: require('./statics/image/casino-index.svg'),
    };
  },
  methods: {
    signOut: quasar.throttle(function () {
      alert('logout');
      this.$emit('logout');
    }, 500)
  }
};function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier /* server only */, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    if (typeof shadowMode !== 'boolean') {
        createInjectorSSR = createInjector;
        createInjector = shadowMode;
        shadowMode = false;
    }
    // Vue.extend constructor export interop.
    const options = typeof script === 'function' ? script.options : script;
    // render functions
    if (template && template.render) {
        options.render = template.render;
        options.staticRenderFns = template.staticRenderFns;
        options._compiled = true;
        // functional template
        if (isFunctionalTemplate) {
            options.functional = true;
        }
    }
    // scopedId
    if (scopeId) {
        options._scopeId = scopeId;
    }
    let hook;
    if (moduleIdentifier) {
        // server build
        hook = function (context) {
            // 2.3 injection
            context =
                context || // cached call
                    (this.$vnode && this.$vnode.ssrContext) || // stateful
                    (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext); // functional
            // 2.2 with runInNewContext: true
            if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
                context = __VUE_SSR_CONTEXT__;
            }
            // inject component styles
            if (style) {
                style.call(this, createInjectorSSR(context));
            }
            // register component module identifier for async chunk inference
            if (context && context._registeredComponents) {
                context._registeredComponents.add(moduleIdentifier);
            }
        };
        // used by ssr in case component is cached and beforeCreate
        // never gets called
        options._ssrRegister = hook;
    }
    else if (style) {
        hook = shadowMode
            ? function (context) {
                style.call(this, createInjectorShadow(context, this.$root.$options.shadowRoot));
            }
            : function (context) {
                style.call(this, createInjector(context));
            };
    }
    if (hook) {
        if (options.functional) {
            // register for functional component in vue file
            const originalRender = options.render;
            options.render = function renderWithStyleInjection(h, context) {
                hook.call(context);
                return originalRender(h, context);
            };
        }
        else {
            // inject component registration as beforeCreate hook
            const existing = options.beforeCreate;
            options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
        }
    }
    return script;
}function createInjectorSSR(context) {
    if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__;
    }
    if (!context)
        return () => { };
    if (!('styles' in context)) {
        context._styles = context._styles || {};
        Object.defineProperty(context, 'styles', {
            enumerable: true,
            get: () => context._renderStyles(context._styles)
        });
        context._renderStyles = context._renderStyles || renderStyles;
    }
    return (id, style) => addStyle(id, style, context);
}
function addStyle(id, css, context) {
    const group =  css.media || 'default' ;
    const style = context._styles[group] || (context._styles[group] = { ids: [], css: '' });
    if (!style.ids.includes(id)) {
        style.media = css.media;
        style.ids.push(id);
        let code = css.source;
        style.css += code + '\n';
    }
}
function renderStyles(styles) {
    let css = '';
    for (const key in styles) {
        const style = styles[key];
        css +=
            '<style data-vue-ssr-id="' +
                Array.from(style.ids).join(' ') +
                '"' +
                (style.media ? ' media="' + style.media + '"' : '') +
                '>' +
                style.css +
                '</style>';
    }
    return css;
}/* script */
var __vue_script__ = script;
/* template */

var __vue_render__ = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', {
    staticClass: "w100 abr-buttons"
  }, [_vm._ssrNode("<div class=\"buttons fo2\"><a><img" + _vm._ssrAttr("src", _vm.casino) + " class=\"mlogo\"></a> " + (_vm.isLogin ? "<div class=\"header_right fo2\"><div class=\"header_user fd6\"><div class=\"header-s1\">" + _vm._ssrEscape(_vm._s(_vm.account)) + "</div> <div class=\"header-s2\"><span>" + _vm._ssrEscape(_vm._s(_vm.money)) + "</span></div></div> <a class=\"m-btn01 fl5\">logout</a></div>" : "<!---->") + "</div>")]);
};

var __vue_staticRenderFns__ = [];
/* style */

var __vue_inject_styles__ = function __vue_inject_styles__(inject) {
  if (!inject) return;
  inject("data-v-13ae8e84_0", {
    source: "@charset \"UTF-8\";.outbox{width:100%;padding:0 5% 0;border-top:#b7a380 1px solid;position:fixed;bottom:50px;background-color:#151515}.m-btn01{padding:5px 10px;color:#fff;background-color:#b7a380;font-size:.9rem;letter-spacing:1px;border-radius:3px}.m-btn01:active{background-color:#5e5346}.w100{width:100%}.abr-buttons{position:fixed;z-index:92}.buttons{width:100%;height:49px;color:#fff;position:absolute;z-index:92;top:0;padding:0 19px;background-color:#151515}.mlogo{height:28px}.header_right{height:100%;position:relative}.header_user{height:100%;margin-right:12px}.header-s1{color:#7b6a56;font-size:.9rem;margin-bottom:3px}.header-s2{color:#f7d9b7;font-size:1rem}.menuicon{width:28px;height:28px;position:absolute;z-index:90;top:12px;right:0;-webkit-transition:all .3s;transition:all .5s}.menuicon.on{width:28px;height:28px;background:0 0;position:absolute;z-index:90;top:12px;right:0;-webkit-transition:all .3s;transition:all .5s}.menuicon .eee1,.menuicon .eee2{display:none}.menuicon.on .eee1,.menuicon.on .eee2{display:flex}.eee1{width:28px;height:2px;background-color:#fff;animation-name:oxxo;animation-duration:.5s;animation-fill-mode:forwards;position:absolute}.eee2{width:28px;height:2px;background-color:#fff;animation-name:oxxo2;animation-duration:.5s;animation-fill-mode:forwards}@keyframes oxxo{0%{transform:rotate(0)}100%{transform:rotate(45deg)}}@keyframes oxxo2{0%{transform:rotate(0)}100%{transform:rotate(-45deg)}}.row-5{margin-bottom:5px}.row-6{margin-bottom:6px}.row-7{margin-bottom:7px}.row-8{margin-bottom:8px}.row-9{margin-bottom:9px}.row-10{margin-bottom:10px}.row-15{margin-bottom:15px}.row-20{margin-bottom:20px}.row-25{margin-bottom:25px}.row-30{margin-bottom:30px}.row-35{margin-bottom:35px}.row-40{margin-bottom:40px}.row-50{margin-bottom:50px}.row-55{margin-bottom:55px}.row-60{margin-bottom:60px}.row-70{margin-bottom:70px}.row-80{margin-bottom:80px}.row-90{margin-bottom:90px}.row-100{margin-bottom:100px}.row-110{margin-bottom:110px}.row-120{margin-bottom:120px}.row-130{margin-bottom:130px}.row-140{margin-bottom:140px}.l-5{margin-left:5px}.l-10{margin-left:10px}.l-15{margin-left:15px}.l-20{margin-left:20px}.l-25{margin-left:25px}.l-30{margin-left:30px}.l-40{margin-left:40px}.l-50{margin-left:50px}.l-60{margin-left:60px}.l-70{margin-left:70px}.l-80{margin-left:80px}.l-90{margin-left:90px}.l-100{margin-left:100px}.f06{font-size:.6rem}.f07{font-size:.7rem}.f08{font-size:.8rem}.f09{font-size:.9rem}.f11{font-size:1.1rem}.f12{font-size:1.2rem}.f13{font-size:1.3rem}.f14{font-size:1.4rem}.f15{font-size:1.5rem}.f16{font-size:1.6rem}.f17{font-size:1.7rem}.f18{font-size:1.8rem}.f19{font-size:1.9rem}.f20{font-size:2rem}.f21{font-size:2.1rem}.f22{font-size:2.2rem}.f23{font-size:2.3rem}.f24{font-size:2.4rem}.b{font-weight:700}.rs10{border-radius:10px}.rs15{border-radius:15px}.rs20{border-radius:20px}.rs25{border-radius:25px}.rs30{border-radius:30px}.rs35{border-radius:35px}.rs50{border-radius:50px}.rs100{border-radius:100px}.h100{height:100%}.pt70{padding-top:70px}a,div,form,input,p,span{box-sizing:border-box}.fl1{display:flex}.fl2{display:flex;justify-content:center}.fl3{display:flex;justify-content:flex-end}.fl4{display:flex;align-items:center}.fl5{display:flex;justify-content:center;align-items:center}v .fl6{display:flex;justify-content:flex-end;align-items:center}.fl7{display:flex;align-items:flex-end}.fl8{display:flex;justify-content:center;align-items:flex-end}.fl9{display:flex;justify-content:flex-end;align-items:flex-end}.fd1{display:flex;flex-direction:column}.fd2{display:flex;flex-direction:column;align-items:center}.fd3{display:flex;flex-direction:column;align-items:flex-end}.fd4{display:flex;flex-direction:column;justify-content:center}.fd5{display:flex;flex-direction:column;justify-content:center;align-items:center}.fd6{display:flex;flex-direction:column;justify-content:center;align-items:flex-end}.fd7{display:flex;flex-direction:column;justify-content:flex-end}.fd8{display:flex;flex-direction:column;justify-content:flex-end;align-items:center}.fd9{display:flex;flex-direction:column;justify-content:flex-end;align-items:flex-end}.fo1{display:flex;justify-content:space-between}.fo2{display:flex;justify-content:space-between;align-items:center}.fo3{display:flex;justify-content:space-between;align-items:flex-end}.fo4{display:flex;flex-direction:column;justify-content:space-between}.fo5{display:flex;flex-direction:column;justify-content:space-between;align-items:center}.fo6{display:flex;flex-direction:column;justify-content:space-between;align-items:flex-end}.fw{flex-wrap:wrap}.fs{flex-shrink:0}.lr{justify-content:space-between;display:flex}.flex1{flex:1}.abr{position:relative}.aba{position:absolute;margin:auto;top:0;bottom:0;left:0;right:0}.w100{width:100%}.w95{width:95%}.w90{width:90%}.w85{width:85%}.w80{width:80%}.w75{width:75%}.w73{width:73%}.w70{width:70%}.w65{width:65%}.w60{width:60%}.w55{width:55%}.w50{width:50%}.w45{width:45%}.w40{width:40%}.w35{width:35%}.w30{width:30%}.w25{width:25%}.w20{width:20%}.w15{width:15%}.w10{width:10%}.w05{width:5%}.b{font-weight:700}.dn{display:none}",
    map: undefined,
    media: undefined
  });
};
/* scoped */


var __vue_scope_id__ = undefined;
/* module identifier */

var __vue_module_identifier__ = "data-v-13ae8e84";
/* functional template */

var __vue_is_functional_template__ = false;
/* style inject shadow dom */

var __vue_component__ = /*#__PURE__*/normalizeComponent({
  render: __vue_render__,
  staticRenderFns: __vue_staticRenderFns__
}, __vue_inject_styles__, __vue_script__, __vue_scope_id__, __vue_is_functional_template__, __vue_module_identifier__, false, undefined, createInjectorSSR, undefined);// Import vue component

var install = function installSc(Vue) {
  if (install.installed) return;
  install.installed = true;
  Vue.component('Sc', __vue_component__);
}; // Create module definition for Vue.use()


var plugin = {
  install: install
}; // To auto-install on non-es builds, when vue is found
// eslint-disable-next-line no-redeclare

/* global window, global */

{
  var GlobalVue = null;

  if (typeof window !== 'undefined') {
    GlobalVue = window.Vue;
  } else if (typeof global !== 'undefined') {
    GlobalVue = global.Vue;
  }

  if (GlobalVue) {
    GlobalVue.use(plugin);
  }
} // Inject install function into component - allows component
// to be registered via Vue.use() as well as Vue.component()


__vue_component__.install = install; // Export component by default
// also be used as directives, etc. - eg. import { RollupDemoDirective } from 'rollup-demo';
// export const RollupDemoDirective = component;
exports.default=__vue_component__;