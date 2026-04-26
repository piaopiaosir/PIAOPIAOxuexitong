// ==UserScript==
// @name         |🥇超星学习通｜知到智慧树--网课小助手|AI自动答题|答案校验|飘飘|飘飘友情提供|自动跳转任务点|自动答题|超高题库覆盖率|逐渐支持更多平台
// @namespace    飘飘
// @license      MIT
// @version      2.2.1
// @author       PIAOPIAO
// @description  🏆🏆【免费】【手机平板支持】【ChatGPT Gemini Deepseek 等7款模型接入】【AI自动答题】 【永久免费题库】【挑战全网最全题库】【拥有题库 AI双重校验】。🚀 目前已经具有的功能包括：▶️视频自动观看，跳转下一个任务点，📄章节测试、作业自动完成，无答案自动保存，💯考试自动完成，自动切换、保存。使用脚本请进入对应平台的页面。
// @icon         http://pan-yz.chaoxing.com/favicon.ico
// @match        *://*.chaoxing.com/*
// @match        *://*.xuexitong.com/*
// @match        *://*.edu.cn/*
// @match        *://*.nbdlib.cn/*
// @match        *://*.hnsyu.net/*
// @match        *://*.gdhkmooc.com/*
// @match        *://onlineexamh5new.zhihuishu.com/*
// @require      https://lib.baomitu.com/vue/3.5.0/vue.global.prod.js
// @require      https://lib.baomitu.com/vue-demi/0.14.7/index.iife.js
// @require      data:application/javascript,window.Vue%3DVue%3B
// @require      https://lib.baomitu.com/element-plus/2.7.2/index.full.min.js
// @require      https://lib.baomitu.com/pinia/2.3.1/pinia.iife.min.js
// @require      https://lib.baomitu.com/rxjs/7.8.2/rxjs.umd.min.js
// @require      https://lib.baomitu.com/blueimp-md5/2.19.0/js/md5.min.js
// @resource     ElementPlus       https://lib.baomitu.com/element-plus/2.7.2/index.css
// @resource     ElementPlusStyle  https://lib.baomitu.com/element-plus/2.8.2/index.min.css
// @resource     ttf               https://www.forestpolice.org/ttf/2.0/table.json
// @connect      43.139.12.117
// @connect      152.136.30.238
// @connect      scriptcat.org
// @grant        GM_addStyle
// @grant        GM_getResourceText
// @grant        GM_getValue
// @grant        GM_info
// @grant        GM_setValue
// @grant        GM_xmlhttpRequest
// @grant        unsafeWindow
// @run-at       document-start
// @antifeature  payment  答案需调用AI的API需收费
//@tag                 ChatGPT|Gemini|Deepseek多模型支持
//@tag                 免费题库
// ==/UserScript==


const LAYOUT_CSS = " .log[data-v-83e6bb0c] el-text{white-space:normal}.setting[data-v-9ea68a6a]{margin-top:-8px;font-size:13px}.setting[data-v-9ea68a6a] .el-form-item[data-v-9ea68a6a]{margin-bottom:6px}.question_table[data-v-18523ca7]{width:100%}.main-page{z-index:100003;position:fixed;width:720px;max-width:720px;transition:height 0.3s ease,width 0.3s ease}.main-page .overlay{position:fixed;top:0;left:0;right:0;bottom:0;z-index:1001}.main-page .el-card{border-radius:12px;box-shadow:0 8px 32px rgba(102,126,234,0.15);border:none;height:100%;display:flex;flex-direction:column}.main-page .el-card .card-header{display:flex;justify-content:space-between;flex-direction:row;align-items:center;margin:0;padding:0;cursor:move}.main-page .el-card .card-header .title{font-size:14px;display:flex;align-items:center;justify-content:center;font-weight:600;letter-spacing:0.5px}.main-page .el-card .minus{margin:5px 10px -10px 0}.main-page .el-card__header{background:linear-gradient(135deg,#667eea 0%,#764ba2 100%);color:#fff;padding:10px 14px 10px 18px;margin:0;border-bottom:none;flex-shrink:0}.main-page .el-card__body{padding:12px 16px 16px;background:#fafbff;flex:1;overflow-y:auto;overflow-x:hidden;font-size:13px}.main-page .config-tabs-container{display:flex;gap:0;margin-bottom:15px;border-bottom:2px solid #e1f5fe;flex-shrink:0;background:#f5f7fa;padding:8px 8px 0 8px;border-radius:8px 8px 0 0}.main-page .config-tab{background:linear-gradient(135deg,#f5f7fa 0%,#e8ecf3 100%);border:1px solid #ddd;border-bottom:none;padding:10px 18px;cursor:pointer;border-radius:8px 8px 0 0;font-size:13px;transition:all 0.3s;white-space:nowrap;margin:0 2px;font-weight:500;box-shadow:0 -2px 4px rgba(0,0,0,0.05)}.main-page .config-tab:hover{background:linear-gradient(135deg,#e3f2fd 0%,#bbdefb 100%);transform:translateY(-2px);box-shadow:0 -4px 8px rgba(0,0,0,0.1)}.main-page .config-tab.active{background:#fff;border-color:#42a5f5;color:#1976d2;font-weight:600;transform:translateY(-2px);box-shadow:0 -4px 12px rgba(66,165,245,0.3)}.main-page .config-panel{flex:1;overflow-y:auto;overflow-x:hidden;padding:0}.main-page .el-button--primary{background:linear-gradient(135deg,#667eea 0%,#764ba2 100%);border:none;box-shadow:0 2px 8px rgba(102,126,234,0.3);transition:all 0.3s ease}.main-page .el-button--primary:hover{transform:translateY(-1px);box-shadow:0 4px 12px rgba(102,126,234,0.4)}.main-page .el-input__wrapper{border-radius:8px;transition:all 0.3s ease;padding:6px 12px;box-shadow:inset 0 1px 3px rgba(0,0,0,0.08);border:1.5px solid #dcdfe6;background:linear-gradient(135deg,#fff 0%,#fafafa 100%)}.main-page .el-input__wrapper:hover{border-color:#c0c4cc}.main-page .el-input__wrapper:focus-within{border-color:#667eea;box-shadow:0 0 0 2px rgba(102,126,234,0.15),inset 0 1px 3px rgba(0,0,0,0.08)}.main-page .el-input__inner{font-size:13px;color:#606266}.main-page .el-input-number{position:relative}.main-page .el-input-number .el-input__wrapper{padding-left:8px;padding-right:35px}.main-page .el-input-number__decrease,.main-page .el-input-number__increase{background:linear-gradient(135deg,#f5f7fa 0%,#e8ecf3 100%);border:none;color:#606266;transition:all 0.2s ease;width:28px}.main-page .el-input-number__decrease:hover,.main-page .el-input-number__increase:hover{background:linear-gradient(135deg,#f093fb 0%,#f5576c 100%);color:#fff}.main-page .el-form-item__label{font-size:13px;color:#606266;font-weight:500;padding-right:10px}.main-page .el-checkbox{margin-right:8px;margin-bottom:6px}.main-page .el-checkbox__input{position:absolute;opacity:0}.main-page .el-checkbox__label{padding:10px 16px;background:linear-gradient(135deg,#f5f7fa 0%,#e8ecf3 100%);border:1.5px solid #dcdfe6;border-radius:8px;font-size:13px;font-weight:500;color:#606266;cursor:pointer;transition:all 0.3s ease;display:inline-block;position:relative}.main-page .el-checkbox__input:hover+.el-checkbox__label{border-color:#42a5f5;background:linear-gradient(135deg,#e3f2fd 0%,#bbdefb 100%);transform:translateY(-2px);box-shadow:0 4px 12px rgba(66,165,245,0.2)}.main-page .el-checkbox__input.is-checked+.el-checkbox__label{background:linear-gradient(135deg,#42a5f5 0%,#1976d2 100%);border-color:transparent;color:#fff;box-shadow:0 4px 8px rgba(66,165,245,0.3)}.main-page .el-checkbox__inner{display:none}.main-page .el-divider{margin:12px 0}.main-page .el-text{font-size:12px}.main-page .el-scrollbar__bar{opacity:0.3!important}.main-page .el-scrollbar__thumb{background:rgba(144,147,153,0.3)!important;border-radius:4px!important}.main-page .el-scrollbar__thumb:hover{background:rgba(144,147,153,0.5)!important}.main-page .el-card__body::-webkit-scrollbar{width:4px;height:4px}.main-page .el-card__body::-webkit-scrollbar-track{background:transparent}.main-page .el-card__body::-webkit-scrollbar-thumb{background:rgba(144,147,153,0.3);border-radius:2px}.main-page .el-card__body::-webkit-scrollbar-thumb:hover{background:rgba(144,147,153,0.5)}.main-page .config-panel::-webkit-scrollbar{width:4px;height:4px}.main-page .config-panel::-webkit-scrollbar-track{background:transparent}.main-page .config-panel::-webkit-scrollbar-thumb{background:rgba(144,147,153,0.3);border-radius:2px}.main-page .config-panel::-webkit-scrollbar-thumb:hover{background:rgba(144,147,153,0.5)}.main-page .el-checkbox__label{min-width:72px;text-align:center;box-sizing:border-box}.high-z-index-select{z-index:200000!important} ";
if(typeof GM_addStyle==="function"){GM_addStyle(LAYOUT_CSS);}else{(function(){var s=document.createElement("style");s.textContent=LAYOUT_CSS;document.head.append(s);})();}

(function (vue, pinia, rxjs, md5, ElementPlus) {
  'use strict';
  
  
  if (window.self !== window.top) {
    const currentHref = window.location.href;
    if (currentHref.includes("answerQuestion2")) {
      console.log('[学习通助手] 检测到在随堂练习答题iframe中运行，启用答题逻辑');
    } else {
      console.log('[学习通助手] 检测到在iframe中运行，跳过脚本');
      return;
    }
  }

  
  var _GM_getResourceText = (() => typeof GM_getResourceText != "undefined" ? GM_getResourceText : void 0)();
  var _GM_getValue = (() => typeof GM_getValue != "undefined" ? GM_getValue : void 0)();
  var _GM_info = (() => typeof GM_info != "undefined" ? GM_info : void 0)();
  var _GM_setValue = (() => typeof GM_setValue != "undefined" ? GM_setValue : void 0)();
  var _GM_xmlhttpRequest = (() => typeof GM_xmlhttpRequest != "undefined" ? GM_xmlhttpRequest : void 0)();
  var _unsafeWindow = (() => typeof unsafeWindow != "undefined" ? unsafeWindow : void 0)();

  const REGEX = {
    CLEAN_TITLE: /^【.*?】\s*|\s*（\d+\.\d+分）$/g,
    HTML_TAGS: /<((?!img|sub|sup|br)[^>]+)>/g,
    NBSP: /&nbsp;/g,
    WHITESPACE: /\s+/g,
    BR_TAG: /<br\s*\/?>/g,
    IMG_TAG: /<img.*?src="(.*?)".*?>/g,
    OBJECT_ID: /objectId=([a-f0-9]+)/i,
    JOB_ID: /[?&]jobid=([^&]+)/i,
    HEX_HASH: /([a-f0-9]{24,})/i,
    JUDGE_TRUE: /(^|,)(是|对|正确|确定|√|对的|是的|正确的|true|True|T|yes|1)(,|$)/,
    JUDGE_FALSE: /(^|,)(非|否|错|错误|×|X|错的|不对|不正确的|不正确|不是|不是的|false|False|F|no|0)(,|$)/
  };

  const SELECTORS = {
    CX_VIDEO: 'video',
    CX_AUDIO: 'audio',
    CX_QUESTION_ZJ: '.TiMu',
    CX_QUESTION_ZY_KS: '.questionLi',
    CX_OPTION_ZJ: '[class*="before-after"]',
    CX_OPTION_ZY_KS: '.answerBg',
    ZHS_QUESTION: '.examPaper_subject',
    ZHS_OPTION: '.subject_node .nodeLab'
  };

  
  const SERVER_CONFIGS = [
    { url: "http://43.139.12.117:3000", location: "广州", color: "#09b4ff" },
    { url: "http://152.136.30.238:3000", location: "北京", color: "#21d181" }
  ];

  
  const CURRENT_SERVER_CONFIG = SERVER_CONFIGS[Math.floor(Math.random() * SERVER_CONFIGS.length)];
  const CURRENT_SERVER = CURRENT_SERVER_CONFIG.url;

  
  
  let globalModelConfig = null;
  
  
  const fetchModelConfig = async () => {
    try {
      const response = await new Promise((resolve, reject) => {
        _GM_xmlhttpRequest({
          method: 'GET',
          url: `${CURRENT_SERVER}/ai/models`,
          timeout: 5000,
          onload: (res) => resolve(res),
          onerror: (err) => reject(err),
          ontimeout: () => reject(new Error('timeout'))
        });
      });
      const data = JSON.parse(response.responseText);
      if (data.code === 200 && data.data) {
        globalModelConfig = data.data;
        console.log('[学习通助手] 模型配置已从服务端获取:', globalModelConfig);
        
        if (window._forceUpdateTick) {
          window._forceUpdateTick.value++;
        }
      }
    } catch (e) {
      console.log('[学习通助手] 获取模型配置失败:', e.message);
    }
  };
  
  
  const getModelConfig = () => globalModelConfig;
  
  
  const getModelType = (aiType, aiModel) => {
    if (globalModelConfig && globalModelConfig.modelIdMap && globalModelConfig.modelIdMap[aiType]) {
      return globalModelConfig.modelIdMap[aiType][aiModel] || null;
    }
    return null;
  };

  
  const createAiTypeParam = () => ({
    name: "AI 类型选择",
    get value() { return globalModelConfig?.typeOptions?.[0] || ''; },
    type: "string",
    get options() { return globalModelConfig?.typeOptions || []; }
  });

  const createAiModelParam = () => ({
    name: "AI 模型选择",
    get value() {
      const type = globalModelConfig?.typeOptions?.[0];
      return type ? (globalModelConfig?.defaultModels?.[type] || '') : '';
    },
    type: "string",
    get options() { return globalModelConfig?.allModelOptions || []; }
  });

  
  const handleExclusiveGroup = (param, item, $event) => {
    if (!param.exclusiveGroup) return true;
    const sameGroupParams = item.params.filter(p =>
      p.type === "boolean" &&
      p.exclusiveGroup === param.exclusiveGroup &&
      p.name !== param.name
    );
    if ($event) {
      sameGroupParams.forEach(otherParam => { otherParam.value = false; });
    } else {
      const hasOtherActive = sameGroupParams.some(otherParam => otherParam.value);
      if (!hasOtherActive) return false; 
    }
    return true;
  };
  
  
  fetchModelConfig();
  
  const delay = (second) => new Promise((resolve) => setTimeout(resolve, second * 1e3));

  const randomDelay = (baseSecond, jitter = 1) => {
    const min = Math.max(1, baseSecond - jitter);
    const max = baseSecond + jitter;
    return delay(min + Math.random() * (max - min));
  };

  
  const getCookie = (name) => {
    const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
    return match ? match[2] : '';
  };

  
  let _cachedUid = null;
  const getUid = () => {
    if (_cachedUid) return _cachedUid;
    if (typeof _unsafeWindow !== 'undefined') {
      if (_unsafeWindow.getCookie) _cachedUid = _unsafeWindow.getCookie("UID");
      if (!_cachedUid && _unsafeWindow.uid) _cachedUid = _unsafeWindow.uid;
    }
    if (!_cachedUid) _cachedUid = getCookie('UID');
    if (!_cachedUid) _cachedUid = getCookie('_uid');
    return _cachedUid || '';
  };

  
  const pad = (n) => n < 10 ? "0" + n : n.toString();
  const formatDateTime = (dt) => `${pad(dt.getHours())}:${pad(dt.getMinutes())}:${pad(dt.getSeconds())}`;
  const getDateTime = () => formatDateTime(new Date());
  const formatDuration = (seconds) => `${Math.floor(seconds / 60).toString().padStart(2, '0')}:${Math.floor(seconds % 60).toString().padStart(2, '0')}`;

  
  const getRandomServer = () => CURRENT_SERVER;

  
  const compareVersion = (v1, v2) => {
    const parts1 = v1.split('.').map(Number);
    const parts2 = v2.split('.').map(Number);
    for (let i = 0; i < Math.max(parts1.length, parts2.length); i++) {
      const p1 = parts1[i] || 0;
      const p2 = parts2[i] || 0;
      if (p1 > p2) return 1;
      if (p1 < p2) return -1;
    }
    return 0;
  };

  var __defProp = Object.defineProperty;
  var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __publicField = (obj, key, value) => {
    __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
    return value;
  };
  
  var _sfc_main89 =  vue.defineComponent({
    name: "DocumentRemove",
    __name: "document-remove",
    setup(__props) {
      return (_ctx, _cache) => (vue.openBlock(), vue.createElementBlock("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 1024 1024"
      }, [
        vue.createElementVNode("path", {
          fill: "currentColor",
          d: "M805.504 320 640 154.496V320zM832 384H576V128H192v768h640zM160 64h480l256 256v608a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V96a32 32 0 0 1 32-32m192 512h320v64H352z"
        })
      ]));
    }
  }), document_remove_default = _sfc_main89;
  var _sfc_main118 =  vue.defineComponent({
    name: "FullScreen",
    __name: "full-screen",
    setup(__props) {
      return (_ctx, _cache) => (vue.openBlock(), vue.createElementBlock("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 1024 1024"
      }, [
        vue.createElementVNode("path", {
          fill: "currentColor",
          d: "m160 96.064 192 .192a32 32 0 0 1 0 64l-192-.192V352a32 32 0 0 1-64 0V96h64zm0 831.872V928H96V672a32 32 0 1 1 64 0v191.936l192-.192a32 32 0 1 1 0 64zM864 96.064V96h64v256a32 32 0 1 1-64 0V160.064l-192 .192a32 32 0 1 1 0-64zm0 831.872-192-.192a32 32 0 0 1 0-64l192 .192V672a32 32 0 1 1 64 0v256h-64z"
        })
      ]));
    }
  }), full_screen_default = _sfc_main118;
  var _sfc_main169 =  vue.defineComponent({
    name: "Minus",
    __name: "minus",
    setup(__props) {
      return (_ctx, _cache) => (vue.openBlock(), vue.createElementBlock("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 1024 1024"
      }, [
        vue.createElementVNode("path", {
          fill: "currentColor",
          d: "M128 544h768a32 32 0 1 0 0-64H128a32 32 0 0 0 0 64"
        })
      ]));
    }
  }), minus_default = _sfc_main169;
  var _sfc_main203 =  vue.defineComponent({
    name: "Position",
    __name: "position",
    setup(__props) {
      return (_ctx, _cache) => (vue.openBlock(), vue.createElementBlock("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 1024 1024"
      }, [
        vue.createElementVNode("path", {
          fill: "currentColor",
          d: "m249.6 417.088 319.744 43.072 39.168 310.272L845.12 178.88zm-129.024 47.168a32 32 0 0 1-7.68-61.44l777.792-311.04a32 32 0 0 1 41.6 41.6l-310.336 775.68a32 32 0 0 1-61.44-7.808L512 516.992z"
        })
      ]));
    }
  }), position_default = _sfc_main203;
  var _sfc_main231 =  vue.defineComponent({
    name: "Setting",
    __name: "setting",
    setup(__props) {
      return (_ctx, _cache) => (vue.openBlock(), vue.createElementBlock("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 1024 1024"
      }, [
        vue.createElementVNode("path", {
          fill: "currentColor",
          d: "M600.704 64a32 32 0 0 1 30.464 22.208l35.2 109.376c14.784 7.232 28.928 15.36 42.432 24.512l112.384-24.192a32 32 0 0 1 34.432 15.36L944.32 364.8a32 32 0 0 1-4.032 37.504l-77.12 85.12a357 357 0 0 1 0 49.024l77.12 85.248a32 32 0 0 1 4.032 37.504l-88.704 153.6a32 32 0 0 1-34.432 15.296L708.8 803.904c-13.44 9.088-27.648 17.28-42.368 24.512l-35.264 109.376A32 32 0 0 1 600.704 960H423.296a32 32 0 0 1-30.464-22.208L357.696 828.48a352 352 0 0 1-42.56-24.64l-112.32 24.256a32 32 0 0 1-34.432-15.36L79.68 659.2a32 32 0 0 1 4.032-37.504l77.12-85.248a357 357 0 0 1 0-48.896l-77.12-85.248A32 32 0 0 1 79.68 364.8l88.704-153.6a32 32 0 0 1 34.432-15.296l112.32 24.256c13.568-9.152 27.776-17.408 42.56-24.64l35.2-109.312A32 32 0 0 1 423.232 64H600.64zm-23.424 64H446.72l-36.352 113.088-24.512 11.968a294 294 0 0 0-34.816 20.096l-22.656 15.36-116.224-25.088-65.28 113.152 79.68 88.192-1.92 27.136a293 293 0 0 0 0 40.192l1.92 27.136-79.808 88.192 65.344 113.152 116.224-25.024 22.656 15.296a294 294 0 0 0 34.816 20.096l24.512 11.968L446.72 896h130.688l36.48-113.152 24.448-11.904a288 288 0 0 0 34.752-20.096l22.592-15.296 116.288 25.024 65.28-113.152-79.744-88.192 1.92-27.136a293 293 0 0 0 0-40.256l-1.92-27.136 79.808-88.128-65.344-113.152-116.288 24.96-22.592-15.232a288 288 0 0 0-34.752-20.096l-24.448-11.904L577.344 128zM512 320a192 192 0 1 1 0 384 192 192 0 0 1 0-384m0 64a128 128 0 1 0 0 256 128 128 0 0 0 0-256"
        })
      ]));
    }
  }), setting_default = _sfc_main231;
  var _sfc_main283 =  vue.defineComponent({
    name: "View",
    __name: "view",
    setup(__props) {
      return (_ctx, _cache) => (vue.openBlock(), vue.createElementBlock("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 1024 1024"
      }, [
        vue.createElementVNode("path", {
          fill: "currentColor",
          d: "M512 160c320 0 512 352 512 352S832 864 512 864 0 512 0 512s192-352 512-352m0 64c-225.28 0-384.128 208.064-436.8 288 52.608 79.872 211.456 288 436.8 288 225.28 0 384.128-208.064 436.8-288-52.608-79.872-211.456-288-436.8-288m0 64a224 224 0 1 1 0 448 224 224 0 0 1 0-448m0 64a160.19 160.19 0 0 0-160 160c0 88.192 71.744 160 160 160s160-71.808 160-160-71.744-160-160-160"
        })
      ]));
    }
  }), view_default = _sfc_main283;
  var _sfc_main288 =  vue.defineComponent({
    name: "Warning",
    __name: "warning",
    setup(__props) {
      return (_ctx, _cache) => (vue.openBlock(), vue.createElementBlock("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 1024 1024"
      }, [
        vue.createElementVNode("path", {
          fill: "currentColor",
          d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 832a384 384 0 0 0 0-768 384 384 0 0 0 0 768m48-176a48 48 0 1 1-96 0 48 48 0 0 1 96 0m-48-464a32 32 0 0 1 32 32v288a32 32 0 0 1-64 0V288a32 32 0 0 1 32-32"
        })
      ]));
    }
  }), warning_default = _sfc_main288;
  const getScriptInfo = () => {
    
    const cloudVersion = window.__CLOUD_SCRIPT_VERSION__;
    return {
      name: _GM_info.script.name,
      author: _GM_info.script.author,
      namespace: _GM_info.script.namespace,
      version: cloudVersion || _GM_info.script.version,
      description: _GM_info.script.description
    };
  };

  
  const clearTempCache = () => {
    try {
      
      const keysToKeep = ['config', 'pinia', 'vue-devtools'];
      const allKeys = Object.keys(localStorage);
      allKeys.forEach(key => {
        if (!keysToKeep.some(keepKey => key.includes(keepKey))) {
          localStorage.removeItem(key);
        }
      });

      
      sessionStorage.clear();

      console.log('[学习通助手] 临时缓存已清理，用户配置已保留');
    } catch (e) {
      console.log('[学习通助手] 清理缓存时出错:', e);
    }
  };
  const useConfigStore = pinia.defineStore("configStore", {
    state: () => {
      const scriptInfo = getScriptInfo();
      const defaultConfig = {
        version: scriptInfo.version,
        isMinus: false,
        tokenVerified: false, 
        tokenVerifyError: null, 
        position: {
          x: "800px",
          y: "200px"
        },
        menuIndex: "main-log",
        platformName: "cx",
        platformParams: {
          cx: {
            name: `网课小助手-飘飘友情提供 v${scriptInfo.version}`,
            parts: [
              {
                name: "视频设置",
                params: [
                  {
                    name: "模拟播放",
                    value: false,
                    type: "boolean",
                    exclusiveGroup: "playMode"
                  },
                  {
                    name: "正常播放",
                    value: true,
                    type: "boolean",
                    exclusiveGroup: "playMode"
                  },
                  {
                    name: "规避检测",
                    value: false,
                    type: "boolean",
                    dependsOn: { param: "模拟播放", value: true }
                  },
                  {
                    name: "直接上报",
                    value: false,
                    type: "boolean",
                    dependsOn: { param: "模拟播放", value: true }
                  },
                  {
                    name: "视频答题",
                    value: true,
                    type: "boolean",
                    dependsOn: { param: "正常播放", value: true }
                  },
                  {
                    name: "自动倍速",
                    value: false,
                    type: "boolean"
                  },
                  {
                    name: "播放倍速",
                    value: 1,
                    type: "number",
                    min: 1,
                    max: 3,
                    step: 0.5
                  }
                ]
              },
              {
                name: "答题参数",
                params: [
                  {
                    name: "正常模式",
                    value: true,
                    type: "boolean",
                    exclusiveGroup: "mode"
                  },
                  {
                    name: "答案校验",
                    value: false,
                    type: "boolean",
                    exclusiveGroup: "mode"
                  },
                  {
                    name: "AI模式",
                    value: false,
                    type: "boolean",
                    exclusiveGroup: "mode"
                  },
                  createAiTypeParam(),
                  createAiModelParam(),
                  {
                    name: "跳过已答",
                    value: true,
                    type: "boolean"
                  },
                  {
                    name: "相似匹配",
                    value: true,
                    type: "boolean"
                  },
                  {
                    name: "模拟延迟",
                    value: true,
                    type: "boolean"
                  },
                  {
                    name: "答题间隔",
                    value: 1,
                    type: "number"
                  },
                  {
                    name: "正确阈值",
                    value: 85,
                    type: "number"
                  }
                ]
              },
              {
                name: "章节/作业/测验设置",
                params: [
                  {
                    name: "自动提交",
                    value: false,
                    type: "boolean"
                  },
                  {
                    name: "自动切换",
                    value: true,
                    type: "boolean"
                  },
                  {
                    name: "正常模式",
                    value: true,
                    type: "boolean",
                    exclusiveGroup: "cx_mode"
                  },
                  {
                    name: "仅视频",
                    value: false,
                    type: "boolean",
                    exclusiveGroup: "cx_mode"
                  },
                  {
                    name: "仅答题",
                    value: false,
                    type: "boolean",
                    exclusiveGroup: "cx_mode"
                  }
                ]
              },
              {
                name: "考试设置",
                params: [
                  {
                    name: "自动切换",
                    value: true,
                    type: "boolean"
                  }
                ]
              },
              {
                name: "其他设置",
                params: [
                  {
                    name: "激活挂机",
                    value: false,
                    type: "boolean"
                  }
                ]
              }
            ]
          },
          zhs: {
            name: `网课小助手-飘飘友情提供 v${scriptInfo.version}`,
            parts: [
              {
                name: "答题参数",
                params: [
                  {
                    name: "正常模式",
                    value: true,
                    type: "boolean",
                    exclusiveGroup: "mode"
                  },
                  {
                    name: "答案校验",
                    value: false,
                    type: "boolean",
                    exclusiveGroup: "mode"
                  },
                  {
                    name: "AI模式",
                    value: false,
                    type: "boolean",
                    exclusiveGroup: "mode"
                  },
                  createAiTypeParam(),
                  createAiModelParam(),
                  {
                    name: "跳过已答",
                    value: true,
                    type: "boolean"
                  },
                  {
                    name: "相似匹配",
                    value: true,
                    type: "boolean"
                  },
                  {
                    name: "模拟延迟",
                    value: true,
                    type: "boolean"
                  },
                  {
                    name: "答题间隔",
                    value: 1,
                    type: "number"
                  },
                  {
                    name: "正确阈值",
                    value: 85,
                    type: "number"
                  }
                ]
              },
              {
                name: "答题设置",
                params: [{
                  name: "自动切换",
                  value: true,
                  type: "boolean"
                }]
              }
            ]
          },
          unknown: {
            name: "通用平台",
            parts: [{
              name: "答题设置",
              params: [{
                name: "自动切换",
                value: true,
                type: "boolean"
              }]
            }]
          }
        },
        queryApis: [
          {
            name: "题库",
            token: ""
          }
        ]
      };
      let globalConfig = defaultConfig;
      const storedConfig = _GM_getValue("config");

      
      clearTempCache();

      if (storedConfig) {
        try {
          const parsedStoredConfig = JSON.parse(storedConfig);
          if (scriptInfo.version === parsedStoredConfig.version) {
            globalConfig = parsedStoredConfig;
            
            if (globalConfig.platformParams && globalConfig.platformParams.cx) {
              globalConfig.platformParams.cx.name = `网课小助手-飘飘友情提供 v${scriptInfo.version}`;
            }
            
            
            
            const restoreAiGetters = (platformConfig) => {
              if (!platformConfig || !platformConfig.parts) return;
              const answerParamsPart = platformConfig.parts.find(p => p.name === "答题参数");
              if (!answerParamsPart || !answerParamsPart.params) return;
              
              const aiTypeIdx = answerParamsPart.params.findIndex(p => p.name === "AI 类型选择");
              const aiModelIdx = answerParamsPart.params.findIndex(p => p.name === "AI 模型选择");
              
              if (aiTypeIdx >= 0) {
                const savedTypeVal = answerParamsPart.params[aiTypeIdx].value;
                answerParamsPart.params[aiTypeIdx] = createAiTypeParam();
                if (savedTypeVal && globalModelConfig?.typeOptions?.includes(savedTypeVal)) {
                  let _typeVal = savedTypeVal;
                  Object.defineProperty(answerParamsPart.params[aiTypeIdx], 'value', {
                    get() { return _typeVal; },
                    set(v) { _typeVal = v; },
                    enumerable: true, configurable: true
                  });
                }
              }
              if (aiModelIdx >= 0) {
                const savedModelVal = answerParamsPart.params[aiModelIdx].value;
                answerParamsPart.params[aiModelIdx] = createAiModelParam();
                if (savedModelVal && globalModelConfig?.allModelOptions?.includes(savedModelVal)) {
                  let _modelVal = savedModelVal;
                  Object.defineProperty(answerParamsPart.params[aiModelIdx], 'value', {
                    get() { return _modelVal; },
                    set(v) { _modelVal = v; },
                    enumerable: true, configurable: true
                  });
                }
              }
            };
            
            
            if (globalConfig.platformParams) {
              Object.keys(globalConfig.platformParams).forEach(key => {
                restoreAiGetters(globalConfig.platformParams[key]);
              });
            }
            
            if (!globalConfig.platformParams) {
              globalConfig.platformParams = defaultConfig.platformParams;
            }
            if (!globalConfig.queryApis) {
              globalConfig.queryApis = defaultConfig.queryApis;
            }
          } else {
            globalConfig = defaultConfig;
            globalConfig.version = scriptInfo.version;
            if (parsedStoredConfig.position) {
              globalConfig.position = parsedStoredConfig.position;
            }
            
            if (parsedStoredConfig.queryApis && parsedStoredConfig.queryApis.length > 0) {
              parsedStoredConfig.queryApis.forEach((oldApi, index) => {
                if (globalConfig.queryApis[index] && oldApi.token) {
                  globalConfig.queryApis[index].token = oldApi.token;
                }
              });
            }
            if (parsedStoredConfig.platformParams) {
              Object.keys(parsedStoredConfig.platformParams).forEach((platformKey) => {
                const oldPlatform = parsedStoredConfig.platformParams[platformKey];
                const newPlatform = globalConfig.platformParams[platformKey];
                if (oldPlatform && newPlatform && oldPlatform.parts) {
                  oldPlatform.parts.forEach((oldPart, partIndex) => {
                    if (newPlatform.parts[partIndex] && oldPart.params) {
                      
                      oldPart.params.forEach((oldParam) => {
                        const newParam = newPlatform.parts[partIndex].params.find(
                          p => p.name === oldParam.name
                        );
                        if (newParam) {
                          newParam.value = oldParam.value;
                        }
                      });
                    }
                  });
                }
              });
            }
            if (parsedStoredConfig.otherParams && parsedStoredConfig.otherParams.params) {
              
              const otherParamsPart = globalConfig.platformParams.cx.parts.find(p => p.name === "答题参数");
              if (otherParamsPart && otherParamsPart.params) {
                
                const nameMapping = {
                  "答案校验模式": "答案校验",
                  "跳过已答题": "跳过已答",
                  "相似度答案匹配": "相似匹配",
                  "答题正确率": "正确阈值"
                };
                            
                
                const normalModeParam = otherParamsPart.params.find(p => p.name === "正常模式");
                const aiModeParam = otherParamsPart.params.find(p => p.name === "AI模式");
                const answerVerifyParam = otherParamsPart.params.find(p => p.name === "答案校验");
                            
                if (normalModeParam && aiModeParam && answerVerifyParam) {
                  
                  const oldNormalMode = parsedStoredConfig.otherParams.params.find(p => p.name === "正常模式");
                  const oldAiMode = parsedStoredConfig.otherParams.params.find(p => p.name === "AI模式");
                  const oldAnswerVerify = parsedStoredConfig.otherParams.params.find(p => p.name === "答案校验模式");
                              
                  
                  normalModeParam.value = false;
                  aiModeParam.value = false;
                  answerVerifyParam.value = false;
                              
                  
                  if (oldAnswerVerify && oldAnswerVerify.value) {
                    answerVerifyParam.value = true;
                  } else if (oldAiMode && oldAiMode.value) {
                    aiModeParam.value = true;
                  } else {
                    normalModeParam.value = true; 
                  }
                }
                            
                parsedStoredConfig.otherParams.params.forEach((oldParam) => {
                  
                  const newName = nameMapping[oldParam.name] || oldParam.name;
                  const newParam = otherParamsPart.params.find(p => p.name === newName);
                  if (newParam && !['正常模式', 'AI模式', '答案校验'].includes(newName)) {
                    newParam.value = oldParam.value;
                  }
                });
              }
            }
          }
        } catch (error) {
          console.error(error);
        }
      }
      _GM_setValue("globalConfig", JSON.stringify(globalConfig));
      return globalConfig;
    },
    actions: {}
  });
  const useLogStore = pinia.defineStore("logStore", {
    state: () => ({
      logList: []
    }),
    actions: {
      addLog(message, type) {
        const log = {
          message,
          time: getDateTime(),
          type
        };
        this.logList.push(log);
      }
    }
  });
  const useQuestionStore = pinia.defineStore("questionStore", {
    state: () => ({
      questionList: []
    }),
    actions: {
      addQuestion(question) {
        this.questionList.push(question);
      },
      clearQuestion() {
        this.questionList = [];
      }
    }
  });
  
  const useProgressStore = pinia.defineStore("progressStore", {
    state: () => ({
      taskName: "暂无任务",
      percent: 0,
      currentTime: 0,
      totalTime: 0,
      type: "-",
      detail: "等待任务开始",
      isPlaying: false,
      speedDisabled: false
    }),
    actions: {
      update(progress) {
        this.taskName = progress.taskName || this.taskName;
        this.percent = Math.min(100, Math.max(0, progress.percent || 0));
        this.currentTime = progress.currentTime || this.currentTime;
        this.totalTime = progress.totalTime || this.totalTime;
        this.type = progress.type || this.type;
        this.detail = progress.detail || this.detail;
        this.isPlaying = progress.isPlaying !== void 0 ? progress.isPlaying : this.isPlaying;
        this.speedDisabled = progress.speedDisabled !== void 0 ? progress.speedDisabled : this.speedDisabled;
      },
      reset(message = "等待任务开始") {
        this.taskName = "暂无任务";
        this.percent = 0;
        this.currentTime = 0;
        this.totalTime = 0;
        this.type = "-";
        this.detail = message;
        this.isPlaying = false;
        this.speedDisabled = false;
      }
    }
  });
  const _sfc_main$8 =  vue.defineComponent({
    __name: "index",
    props: {
      logList: {
        type: Array,
        required: true
      },
      serverConfig: {
        type: Object,
        default: () => ({ url: "", location: "未知", color: "#888" })
      },
      progress: {
        type: Object,
        default: () => ({
          taskName: "暂无任务",
          percent: 0,
          currentTime: 0,
          totalTime: 0,
          type: "-",
          detail: "等待任务开始",
          isPlaying: false
        })
      }
    },
    setup(__props) {
      
      const progressStore = useProgressStore();
      const formatTime = (seconds) => {
        const mins = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
      };
      const scrollbarRef = vue.ref(null);
      
      
      vue.watch(() => __props.logList.length, (newLen, oldLen) => {
        if (newLen > oldLen) {
          vue.nextTick(() => {
            if (scrollbarRef.value) {
              scrollbarRef.value.setScrollTop(99999);
            }
          });
        }
      });
      
      
      return (_ctx, _cache) => {
        const _component_el_text = vue.resolveComponent("el-text");
        const _component_el_divider = vue.resolveComponent("el-divider");
        const _component_el_scrollbar = vue.resolveComponent("el-scrollbar");
        
        const forceUpdateKey = 'script-home-' + __props.logList.length;
        return vue.openBlock(), vue.createElementBlock("div", { key: forceUpdateKey }, [
          
          vue.createElementVNode("div", {
            style: {
              "margin-bottom": "15px",
              "padding": "12px 15px",
              "background": "#fff",
              "border-radius": "12px",
              "border": "1px solid #e5e7eb",
              "display": "flex",
              "align-items": "center",
              "gap": "12px",
              "box-shadow": "0 2px 8px rgba(0,0,0,0.05)"
            }
          }, [
            vue.createElementVNode("div", {
              style: {
                "display": "flex",
                "align-items": "center",
                "justify-content": "center",
                "width": "36px",
                "height": "36px",
                "border-radius": "8px",
                "background": __props.serverConfig.color,
                "color": "#fff",
                "font-weight": "600",
                "font-size": "14px",
                "box-shadow": `0 2px 8px ${__props.serverConfig.color}66`
              }
            }, vue.toDisplayString(__props.serverConfig.location.charAt(0)), 1),
            vue.createElementVNode("div", null, [
              vue.createElementVNode("div", {
                style: {
                  "font-size": "13px",
                  "color": "#333",
                  "font-weight": "500"
                }
              }, [
                _cache[0] || (_cache[0] = vue.createTextVNode("当前服务器: ")),
                vue.createElementVNode("span", {
                  style: { "color": __props.serverConfig.color, "font-weight": "600" }
                }, vue.toDisplayString(__props.serverConfig.location), 1)
              ]),
              vue.createElementVNode("div", {
                style: {
                  "font-size": "11px",
                  "color": "#999",
                  "margin-top": "4px"
                }
              }, "节点已连接，可正常使用")
            ])
          ]),
          
          vue.createElementVNode("div", {
            style: {
              "margin-bottom": "15px",
              "padding": "15px",
              "background": "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
              "border-radius": "12px",
              "box-shadow": "0 4px 12px rgba(79,172,254,0.2)",
              "color": "#fff"
            }
          }, [
            vue.createElementVNode("div", {
              style: {
                "display": "flex",
                "align-items": "center",
                "gap": "10px",
                "margin-bottom": "8px"
              }
            }, [
              vue.createElementVNode("span", {
                style: { "font-size": "20px" }
              }, "✨"),
              vue.createElementVNode("span", {
                style: {
                  "font-weight": "600",
                  "font-size": "14px"
                }
              }, "欢迎使用学习助手")
            ]),
            vue.createElementVNode("div", {
              style: {
                "font-size": "12px",
                "opacity": "0.95",
                "line-height": "1.6"
              }
            }, "🎯 支持视频+测试+考试 | ⚡ 可调节倍速 | 🔥 自动答题 | 💪 高题库覆盖率| 🔧右上角支撑窗口最小化")
          ]),
          
          vue.createElementVNode("div", {
            style: {
              "margin-bottom": "15px",
              "padding": "15px",
              "border": "1px solid #e5e7eb",
              "border-radius": "12px",
              "background": "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
              "box-shadow": "0 2px 8px rgba(0,0,0,0.05)"
            }
          }, [
            vue.createElementVNode("div", {
              style: {
                "display": "flex",
                "align-items": "center",
                "gap": "10px",
                "margin-bottom": "10px"
              }
            }, [
              vue.createElementVNode("span", {
                style: { "font-size": "18px" }
              }, "🚀"),
              vue.createElementVNode("span", {
                style: {
                  "font-size": "14px",
                  "font-weight": "600",
                  "color": "#333"
                }
              }, "运行状态")
            ]),
            
            vue.createElementVNode("div", {
              key: 'progress-' + progressStore.currentTime,
              style: {
                "width": "95%",
                "margin": "0 auto 10px",
                "padding": "12px 15px",
                "border-radius": "8px",
                "background": "#f9f9f9",
                "border": "1px solid #e0e0e0",
                "display": progressStore.isPlaying ? "block" : "none"
              }
            }, [
              
              vue.createElementVNode("div", {
                style: {
                  "display": "flex",
                  "justify-content": "space-between",
                  "align-items": "baseline",
                  "margin-bottom": "4px"
                }
              }, [
                vue.createElementVNode("div", {
                  style: { "flex": "1", "min-width": "0" }
                }, [
                  vue.createElementVNode("div", {
                    style: { "font-size": "11px", "color": "#6c757d", "margin-bottom": "2px" }
                  }, "当前任务"),
                  vue.createElementVNode("div", {
                    style: {
                      "font-size": "14px",
                      "font-weight": "600",
                      "color": "#212529",
                      "white-space": "nowrap",
                      "overflow": "hidden",
                      "text-overflow": "ellipsis",
                      "max-width": "250px"
                    }
                  }, vue.toDisplayString(progressStore.taskName), 1)
                ]),
                vue.createElementVNode("div", {
                  style: {
                    "font-size": "20px",
                    "font-weight": "700",
                    "color": "#17a2b8",
                    "white-space": "nowrap"
                  }
                }, vue.toDisplayString(progressStore.percent) + "%", 1)
              ]),
              
              vue.createElementVNode("div", {
                style: {
                  "margin": "4px 0 6px",
                  "font-size": "11px",
                  "color": "#6c757d"
                }
              }, vue.toDisplayString("类型：" + progressStore.type)),
              
              vue.createElementVNode("div", {
                style: {
                  "width": "100%",
                  "height": "14px",
                  "border-radius": "999px",
                  "background": "#e9ecef",
                  "overflow": "hidden",
                  "position": "relative"
                }
              }, [
                vue.createElementVNode("div", {
                  style: {
                    "position": "absolute",
                    "top": "0",
                    "left": "0",
                    "height": "100%",
                    "width": progressStore.percent + "%",
                    "border-radius": "999px",
                    "background": "linear-gradient(90deg, #0dcaf0, #0b7fab)",
                    "transition": "width 0.3s ease"
                  }
                }, null, 8, ["style"])
              ]),
              
              vue.createElementVNode("div", {
                style: {
                  "margin-top": "6px",
                  "font-size": "12px",
                  "color": "#495057",
                  "font-weight": "500",
                  "line-height": "1.4",
                  "white-space": "nowrap"
                }
              }, vue.toDisplayString(formatTime(progressStore.currentTime) + " / " + formatTime(progressStore.totalTime)), 1),
              
              progressStore.speedDisabled ? vue.createElementVNode("div", {
                style: {
                  "margin-top": "8px",
                  "padding": "6px 10px",
                  "background": "#fff3cd",
                  "border": "1px solid #ffc107",
                  "border-radius": "6px",
                  "font-size": "11px",
                  "color": "#856404",
                  "text-align": "center",
                  "line-height": "1.4"
                }
              }, "⚠️ 此视频已被学习通禁用倍速，>1x可能导致学习进度被清空") : vue.createCommentVNode("", true)
            ]),
            vue.createElementVNode("p", {
              style: {
                "font-size": "13px",
                "color": "#555",
                "margin-bottom": "8px",
                "line-height": "1.6"
              }
            }, "脚本正在运行中，请不要多个脚本同时使用 🚫"),
            vue.createElementVNode("div", {
              style: {
                "color": "#888",
                "font-size": "12px",
                "padding": "8px",
                "background": "rgba(255,255,255,0.5)",
                "border-radius": "6px"
              }
            }, "💡 如果脚本出现异常，请使用谷歌、火狐等浏览器 ")
          ]),
          vue.createElementVNode("div", {
            style: {
              "margin-bottom": "15px",
              "border": "1px solid #e1f5fe",
              "border-radius": "12px",
              "box-shadow": "0 2px 12px rgba(0,0,0,0.08)",
              "overflow": "hidden"
            }
          }, [
            vue.createElementVNode("div", {
              style: {
                "background": "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
                "padding": "12px 15px",
                "color": "#fff",
                "display": "flex",
                "align-items": "center",
                "gap": "8px"
              }
            }, [
              vue.createElementVNode("span", {
                style: { "font-size": "16px" }
              }, "📊"),
              vue.createElementVNode("span", {
                style: {
                  "font-weight": "600",
                  "font-size": "14px"
                }
              }, "运行日志")
            ]),
            vue.createElementVNode("div", {
              style: {
                "padding": "15px",
                "background": "#fafcfe"
              }
            }, [
              vue.createVNode(_component_el_scrollbar, {
                ref: scrollbarRef,
                always: "",
                class: "log",
                height: "280px"
              }, {
            default: vue.withCtx(() => [
              (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(__props.logList, (item, index) => {
                return vue.openBlock(), vue.createElementBlock("div", { key: index }, [
                  vue.createVNode(_component_el_text, {
                    size: "small",
                    style: { "font-weight": "normal" },
                    type: "info"
                  }, {
                    default: vue.withCtx(() => [
                      vue.createTextVNode(vue.toDisplayString(item.time), 1)
                    ]),
                    _: 2
                  }, 1024),
                  vue.createVNode(_component_el_text, null, {
                    default: vue.withCtx(() => _cache[1] || (_cache[1] = [
                      vue.createTextVNode(" ")
                    ])),
                    _: 1
                  }),
                  vue.createVNode(_component_el_text, {
                    type: item.type ? item.type : "primary",
                    size: "small",
                    innerHTML: item.message
                  }, null, 8, ["type", "innerHTML"]),
                  vue.createVNode(_component_el_divider, {
                    "border-style": "dashed",
                    style: { "margin": "0" }
                  })
                ]);
              }), 128))
            ]),
            _: 1
          })
            ])
          ])
        ]);
      };
    }
  });
  const _export_sfc = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
      target[key] = val;
    }
    return target;
  };
  const ScriptHome =  _export_sfc(_sfc_main$8, [["__scopeId", "data-v-83e6bb0c"]]);
  const _hoisted_1$4 = { class: "setting" };
  const _hoisted_2$2 = { style: { "font-size": "13px" } };
  const _hoisted_3$1 = { style: { "font-size": "13px" } };
  const _sfc_main$7 =  vue.defineComponent({
    __name: "index",
    props: {
      globalConfig: {
        type: Object,
        required: true
      }
    },
    setup(__props) {
      const configStore = useConfigStore();
      const logStore = useLogStore();
      
      
      const verifyState = vue.ref({
        status: '', 
        message: ''
      });
      
      
      const pingDelay = vue.ref(null);
      
      
      const remainingCount = vue.ref(null);
      
      
      const existingTokens = vue.ref([]);
      
      
      const _forceUpdateTick = vue.ref(0);
      
      const modelCosts = vue.ref({});
      
      const fetchModelCosts = async () => {
        try {
          const response = await new Promise((resolve, reject) => {
            _GM_xmlhttpRequest({
              method: 'GET',
              url: `${CURRENT_SERVER}/model-costs`,
              timeout: 5000,
              onload: (res) => resolve(res),
              onerror: (err) => reject(err),
              ontimeout: () => reject(new Error('timeout'))
            });
          });
          const data = JSON.parse(response.responseText);
          if (data.code === 200 && data.data) {
            modelCosts.value = data.data;
          }
        } catch (e) {
          console.log('[学习通助手] 获取模型消耗失败，使用默认值');
        }
      };
      
      vue.onMounted(() => {
        fetchModelCosts();
      });
      
      const consumptionText = vue.computed(() => {
        void _forceUpdateTick.value;
        const answerParamsPart = __props.globalConfig.platformParams?.[__props.globalConfig.platformName]?.parts?.find(p => p.name === "答题参数");
        if (!answerParamsPart) return "每题消耗: 1 次";
        
        const aiModeParam = answerParamsPart.params.find(p => p.name === "AI模式");
        const normalModeParam = answerParamsPart.params.find(p => p.name === "正常模式");
        const verifyModeParam = answerParamsPart.params.find(p => p.name === "答案校验");
        const aiTypeParam = answerParamsPart.params.find(p => p.name === "AI 类型选择");
        const aiModelParam = answerParamsPart.params.find(p => p.name === "AI 模型选择");
        
        const isAiModeActive = aiModeParam && aiModeParam.value;
        const isNormalModeActive = normalModeParam && normalModeParam.value;
        const isVerifyModeActive = verifyModeParam && verifyModeParam.value;
        
        if (isNormalModeActive || (!isAiModeActive && !isVerifyModeActive)) {
          return "每题消耗: 1 次";
        } else if (isVerifyModeActive) {
          return "每题消耗: 2 次";
        } else if (isAiModeActive && aiTypeParam && aiModelParam) {
          const currentAiType = aiTypeParam.value;
          const currentAiModel = aiModelParam.value;
          
          const modelType = getModelType(currentAiType, currentAiModel);
          
          const cost = modelCosts.value[modelType] || 1;
          return `每题消耗: ${cost} 次`;
        }
        return "每题消耗: 1 次";
      });
      
      
      const remainingCountStyle = vue.computed(() => {
        if (remainingCount.value === null) return {};
        const count = remainingCount.value;
        return {
          "font-size": "12px",
          "color": count > 100 ? "#2e7d32" : count > 20 ? "#f57c00" : "#c62828",
          "font-weight": "600",
          "background": count > 100 ? "rgba(76,175,80,0.2)" : count > 20 ? "rgba(255,152,0,0.2)" : "rgba(198,40,40,0.2)",
          "padding": "4px 10px",
          "border-radius": "12px"
        };
      });
      
      
      const pingDelayStyle = vue.computed(() => {
        if (pingDelay.value === null) return {};
        const delay = pingDelay.value;
        return {
          "font-size": "12px",
          "color": delay === -1 ? "#c62828" : delay < 500 ? "#2e7d32" : delay < 1000 ? "#f57c00" : "#e65100",
          "background": delay === -1 ? "rgba(198,40,40,0.2)" : delay < 500 ? "rgba(76,175,80,0.2)" : delay < 1000 ? "rgba(255,152,0,0.2)" : "rgba(230,81,0,0.2)",
          "padding": "4px 10px",
          "border-radius": "12px",
          "font-weight": "600"
        };
      });
      
      
      let debounceTimer = null;
      const debounce = (fn, delay) => {
        return (...args) => {
          if (debounceTimer) clearTimeout(debounceTimer);
          debounceTimer = setTimeout(() => fn(...args), delay);
        };
      };
      
      
      const autoVerifyToken = debounce(() => {
        
        const currentToken = vue.unref(configStore).queryApis[0].token;
        
        
        if (!currentToken || !/^\d{16}$/.test(currentToken)) {
          
          return;
        }
        
        
        logStore.addLog('💡 检测到有效的Token格式，自动验证中...', 'info');
        verifyToken();
      }, 800); 
      
      
      const selectToken = (token) => {
        if (token) {
          vue.unref(configStore).queryApis[0].token = token;
          existingTokens.value = [];
          logStore.addLog('✅ 已填入Token，正在验证...', 'success');
          
          setTimeout(() => verifyToken(), 100);
        }
      };

      
      let lastVerifyTime = 0;
      
      
      const verifyToken = () => {
        
        const now = Date.now();
        if (now - lastVerifyTime < 1000) {
          return;
        }
        lastVerifyTime = now;
        
        const token = vue.unref(configStore).queryApis[0].token;
        
        
        const getCookie = (name) => document.cookie.match(`[;\\s+]?${name}=([^;]*)`)?.pop() || '';
        const userId = getCookie('_uid') || getCookie('UID') || '';
        
        
        if (!token) {
          
        } else if (!/^\d{16}$/.test(token)) {
          
          logStore.addLog('❌ Token格式错误，必须是16位数字', 'danger');
          verifyState.value = { status: 'error', message: 'Token格式错误，必须是16位数字' };
          configStore.tokenVerified = false;
          configStore.tokenVerifyError = 'format';
          return;
        }
        
        verifyState.value = { status: 'testing', message: '正在验证...' };
        logStore.addLog('⏳ 正在验证Token...', 'primary');
        
        const startTime = Date.now();
        
        
        _GM_xmlhttpRequest({
          method: "GET",
          url: getRandomServer() + "?token=" + encodeURIComponent(token || '') + "&userId=" + encodeURIComponent(userId),
          timeout: 10000,
          onload: (response) => {
            pingDelay.value = Date.now() - startTime;
            try {
              const res = JSON.parse(response.responseText);
              console.log('验证响应:', res);
              if (res.code === 200 && res.data && res.data.valid) {
                remainingCount.value = res.data.num;
                verifyState.value = { status: 'success', message: `验证成功！剩余次数: ${res.data.num}次` };
                configStore.tokenVerified = true;
                configStore.tokenVerifyError = null;
                logStore.addLog(`✅ Token验证成功，剩余次数: ${res.data.num}次`, 'success');
                
                if (res.data.newToken) {
                  vue.unref(configStore).queryApis[0].token = res.data.newToken;
                  logStore.addLog(`🎁 新用户免费Token已注册，可查询40次题目`, 'success');
                }
                
                if (res.data.num <= 0) {
                  logStore.addLog('💎 次数已用完，<a href="https://hsfaka.cn/shop/IU2JDO1E" target="_blank" style="color:#667eea;text-decoration:underline;">点击购买Token</a>', 'warning');
                }
              } else if (res.code === 401) {
                remainingCount.value = 0;
                verifyState.value = { status: 'error', message: 'Token无效' };
                configStore.tokenVerified = false;
                configStore.tokenVerifyError = 'invalid';
                logStore.addLog('❌ Token无效，请检查是否正确', 'danger');
                
                if (res.data?.existingTokens && res.data.existingTokens.length > 0) {
                  existingTokens.value = res.data.existingTokens;
                  logStore.addLog(`💡 检测到您有${res.data.existingTokens.length}个有效Token，请在下方选择使用`, 'warning');
                } else {
                  existingTokens.value = [];
                  logStore.addLog('💎 <a href="https://hsfaka.cn/shop/IU2JDO1E" target="_blank" style="color:#667eea;text-decoration:underline;">点击购买Token</a>', 'warning');
                }
              } else {
                remainingCount.value = 0;
                verifyState.value = { status: 'error', message: res.msg || '验证失败' };
                configStore.tokenVerified = false;
                configStore.tokenVerifyError = 'invalid';
                logStore.addLog('❌ 验证失败: ' + (res.msg || '未知错误'), 'danger');
                logStore.addLog('💎 <a href="https://hsfaka.cn/shop/IU2JDO1E" target="_blank" style="color:#667eea;text-decoration:underline;">点击购买Token</a>', 'warning');
              }
            } catch (e) {
              console.error('解析错误:', e);
              remainingCount.value = 0;
              verifyState.value = { status: 'error', message: '响应解析失败' };
              configStore.tokenVerified = false;
              configStore.tokenVerifyError = 'network';
              logStore.addLog('❌ 服务器响应格式错误', 'danger');
            }
          },
          onerror: () => {
            pingDelay.value = -1;
            verifyState.value = { status: 'error', message: '连接失败' };
            configStore.tokenVerified = false;
            configStore.tokenVerifyError = 'network';
            logStore.addLog('❌ 无法连接服务器，请检查网络', 'danger');
          },
          ontimeout: () => {
            pingDelay.value = -1;
            verifyState.value = { status: 'error', message: '连接超时' };
            configStore.tokenVerified = false;
            configStore.tokenVerifyError = 'network';
            logStore.addLog('❌ 连接超时，请稍后重试', 'danger');
          }
        });
      };
      
      
      const isMajorUpdate = (currentVersion, latestVersion) => {
        const parts1 = currentVersion.split('.').map(Number);
        const parts2 = latestVersion.split('.').map(Number);
        
        return (parts1[0] || 0) < (parts2[0] || 0) || (parts1[1] || 0) < (parts2[1] || 0);
      };

      
      const checkUpdate = () => {
        
        if (window.__CLOUD_SCRIPT_LOADED__) {
          logStore.addLog('✅ 云端脚本已是最新版本', 'success');
          return;
        }
        
        const currentVersion = _GM_info?.script?.version || '1.1.2';
        _GM_xmlhttpRequest({
          method: "GET",
          url: 'https://scriptcat.org/scripts/code/5597/%7C%F0%9F%A5%87%E8%B6%85%E6%98%9F%E5%AD%A6%E4%B9%A0%E9%80%9A%EF%BD%9C%E7%9F%A5%E5%88%B0%E6%99%BA%E6%85%A7%E6%A0%91--%E7%BD%91%E8%AF%BE%E5%B0%8F%E5%8A%A9%E6%89%8B%7CAI%E8%87%AA%E5%8A%A8%E7%AD%94%E9%A2%98%7C%E7%AD%94%E6%A1%88%E6%A0%A1%E9%AA%8C%7C%E9%A3%98%E9%A3%98%7C%E9%A3%98%E9%A3%98%E5%8F%8B%E6%83%85%E6%8F%90%E4%BE%9B%7C%E8%87%AA%E5%8A%A8%E8%B7%B3%E8%BD%AC%E4%BB%BB%E5%8A%A1%E7%82%B9%7C%E8%87%AA%E5%8A%A8%E7%AD%94%E9%A2%98%7C%E8%B6%85%E9%AB%98%E9%A2%98%E5%BA%93%E8%A6%86%E7%9B%96%E7%8E%87%7C%E9%80%90%E6%B8%90%E6%94%AF%E6%8C%81%E6%9B%B4%E5%A4%9A%E5%B9%B3%E5%8F%B0.meta.js',
          timeout: 5000,
          onload: (response) => {
            try {
              
              const versionMatch = response.responseText.match(/\/\/\s*@version\s+(\d+\.\d+\.\d+)/);
              if (versionMatch && versionMatch[1]) {
                const latestVersion = versionMatch[1];
                const updateUrl = 'https://scriptcat.org/zh-CN/script-show-page/5597';
                const updateMessage = '本次更新为重大版本更新，建议更新';
                
                if (compareVersion(currentVersion, latestVersion) < 0) {
                  
                  if (isMajorUpdate(currentVersion, latestVersion)) {
                    showUpdateDialog(latestVersion, updateUrl, updateMessage);
                  } else {
                    logStore.addLog(`ℹ️ 有新版本 v${latestVersion}，非大版本更新`, 'info');
                  }
                } else {
                  logStore.addLog(`✅ 脚本已是最新版本 v${currentVersion}`, 'success');
                }
              }
            } catch (e) {
              console.error('版本检测失败:', e);
            }
          },
          onerror: () => console.error('版本检测请求失败'),
          ontimeout: () => console.error('版本检测超时')
        });
      };

      
      const showUpdateDialog = (latestVersion, updateUrl, updateMessage) => {
        const dialog = document.createElement('div');
        dialog.id = 'update-dialog';
        dialog.innerHTML = `
          <div style="position:fixed;top:0;left:0;right:0;bottom:0;background:rgba(0,0,0,0.5);z-index:999999;display:flex;align-items:center;justify-content:center;">
            <div style="background:#fff;border-radius:12px;padding:24px;max-width:400px;box-shadow:0 8px 32px rgba(0,0,0,0.2);text-align:center;">
              <div style="font-size:48px;margin-bottom:16px;">🎉</div>
              <h3 style="margin:0 0 12px;color:#333;font-size:18px;">学习通小助手发现新版本</h3>
              <p style="margin:0 0 8px;color:#666;font-size:14px;">当前版本: v${latestVersion}</p>
              <p style="margin:0 0 20px;color:#999;font-size:12px;">${updateMessage || '建议更新以获得更好体验'}</p>
              <div style="display:flex;gap:12px;justify-content:center;">
                <button id="update-btn" style="background:linear-gradient(135deg,#667eea,#764ba2);color:#fff;border:none;padding:10px 24px;border-radius:6px;cursor:pointer;font-size:14px;">立即更新</button>
                <button id="later-btn" style="background:#f5f5f5;color:#666;border:none;padding:10px 24px;border-radius:6px;cursor:pointer;font-size:14px;">稍后提醒</button>
              </div>
            </div>
          </div>
        `;
        document.body.appendChild(dialog);
        document.getElementById('update-btn').onclick = () => window.open(updateUrl, '_blank');
        document.getElementById('later-btn').onclick = () => dialog.remove();
      };

      
      vue.onMounted(() => {
        
        checkUpdate();
        
        logStore.addLog('🔄 脚本启动，正在验证Token...', 'primary');
        verifyToken();
      });
      
      return (_ctx, _cache) => {
        const _component_el_checkbox = vue.resolveComponent("el-checkbox");
        const _component_el_input_number = vue.resolveComponent("el-input-number");
        const _component_el_form_item = vue.resolveComponent("el-form-item");
        const _component_el_button = vue.resolveComponent("el-button");
        const _component_el_input = vue.resolveComponent("el-input");
        const _component_el_radio_group = vue.resolveComponent("el-radio-group");
        const _component_el_radio_button = vue.resolveComponent("el-radio-button");
        const _component_el_select = vue.resolveComponent("el-select");
        const _component_el_option = vue.resolveComponent("el-option");
        return vue.openBlock(), vue.createElementBlock("div", _hoisted_1$4, [
          
          vue.createElementVNode("div", {
            style: {
              "margin-bottom": "12px",
              "padding": "12px 15px",
              "background": "linear-gradient(135deg, #e8f5e9 0%, #c8e6c9 100%)",
              "border-radius": "10px",
              "box-shadow": "0 2px 10px rgba(76,175,80,0.12)"
            }
          }, [
            
            vue.createElementVNode("div", {
              style: {
                "display": "flex",
                "align-items": "center",
                "justify-content": "space-between",
                "margin-bottom": "8px"
              }
            }, [
              vue.createElementVNode("div", {
                style: {
                  "display": "flex",
                  "align-items": "center",
                  "gap": "6px"
                }
              }, [
                vue.createElementVNode("span", {
                  style: { "font-size": "16px" }
                }, "🔑"),
                vue.createElementVNode("span", {
                  style: {
                    "font-size": "14px",
                    "font-weight": "600",
                    "color": "#2e7d32"
                  }
                }, "题库Token配置")
              ]),
              
              vue.createElementVNode("div", {
                style: {
                  "display": "flex",
                  "align-items": "center",
                  "gap": "6px"
                }
              }, [
                
                remainingCount.value !== null ? (vue.openBlock(), vue.createElementBlock("span", {
                  key: 0,
                  style: vue.normalizeStyle(remainingCountStyle.value)
                }, "剩余: " + vue.toDisplayString(remainingCount.value) + "次", 5)) : vue.createCommentVNode("", true),
                
                pingDelay.value !== null ? (vue.openBlock(), vue.createElementBlock("span", {
                  key: 1,
                  style: vue.normalizeStyle(pingDelayStyle.value)
                }, vue.toDisplayString(pingDelay.value === -1 ? "连接失败" : pingDelay.value + "ms"), 5)) : vue.createCommentVNode("", true)
              ])
            ]),
            
            vue.createElementVNode("p", {
              style: {
                "margin": "0 0 8px 0",
                "font-size": "12px",
                "color": "#666",
                "background": "rgba(255,255,255,0.5)",
                "padding": "5px 8px",
                "border-radius": "5px"
              }
            }, "💡 输入您的用户Token进行题库验证"),
            
            vue.createElementVNode("div", {
              style: {
                "display": "flex",
                "align-items": "center",
                "gap": "8px",
                "flex-wrap": "wrap"
              }
            }, [
              vue.createElementVNode("span", {
                style: {
                  "font-size": "13px",
                  "color": "#424242",
                  "font-weight": "500"
                }
              }, "用户Token："),
              vue.createVNode(_component_el_input, {
                style: { "flex": "1", "min-width": "180px" },
                modelValue: vue.unref(configStore).queryApis[0].token,
                "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => {
                  const oldValue = vue.unref(configStore).queryApis[0].token;
                  vue.unref(configStore).queryApis[0].token = $event;
                  
                  vue.unref(configStore).tokenVerified = false;
                  vue.unref(configStore).tokenVerifyError = null;
                  
                  
                  if (oldValue !== $event) {
                    autoVerifyToken();
                  }
                }),
                placeholder: "请输入16位数字Token密钥",
                clearable: true,
                size: "small"
              }, null, 8, ["modelValue"]),
              
              vue.createVNode(_component_el_button, {
                type: "success",
                onClick: verifyToken,
                loading: verifyState.value.status === 'testing',
                style: { "border-radius": "6px" }
              }, {
                default: vue.withCtx(() => _cache[1] || (_cache[1] = [
                  vue.createTextVNode("验证")
                ])),
                _: 1
              }, 8, ["onClick", "loading"])
            ]),
            
            (!vue.unref(configStore).queryApis[0].token || verifyState.value.status) ? (vue.openBlock(), vue.createElementBlock("div", {
              key: 0,
              style: {
                "margin-top": "10px",
                "padding": "8px 10px",
                "border-radius": "5px",
                "border": "2px solid",
                "border-color": !vue.unref(configStore).queryApis[0].token ? "#ffc107" :
                                verifyState.value.status === 'success' ? "#4caf50" :
                                verifyState.value.status === 'error' ? "#dc3545" : "#ffc107",
                "background-color": !vue.unref(configStore).queryApis[0].token ? "#fff8e1" :
                                   verifyState.value.status === 'success' ? "#e8f5e9" :
                                   verifyState.value.status === 'error' ? "#f8d7da" : "#fff8e1"
              }
            }, [
              vue.createElementVNode("div", {
                style: {
                  "display": "flex",
                  "flex-direction": "column",
                  "gap": "8px"
                }
              }, [
                
                vue.createElementVNode("div", {
                  style: {
                    "display": "flex",
                    "align-items": "center",
                    "gap": "6px"
                  }
                }, [
                  vue.createElementVNode("span", {
                    style: { "font-size": "14px" }
                  }, vue.toDisplayString(
                    !vue.unref(configStore).queryApis[0].token ? "⚠️" :
                    verifyState.value.status === 'success' ? "✅" :
                    verifyState.value.status === 'error' ? "❌" : "⏳"
                  ), 1),
                  vue.createElementVNode("span", {
                    style: {
                      "font-size": "13px",
                      "color": !vue.unref(configStore).queryApis[0].token ? "#856404" :
                              verifyState.value.status === 'success' ? "#2e7d32" :
                              verifyState.value.status === 'error' ? "#721c24" : "#856404"
                    }
                  }, vue.toDisplayString(
                    !vue.unref(configStore).queryApis[0].token ? "请输入有效的用户Token进行验证" :
                    verifyState.value.message
                  ), 1)
                ]),
                
                (!vue.unref(configStore).queryApis[0].token || verifyState.value.status === 'error' || (verifyState.value.status === 'success' && remainingCount.value <= 0)) ? (vue.openBlock(), vue.createElementBlock("a", {
                  key: 0,
                  href: "https://hsfaka.cn/shop/IU2JDO1E",
                  target: "_blank",
                  style: {
                    "display": "inline-flex",
                    "align-items": "center",
                    "gap": "4px",
                    "font-size": "12px",
                    "color": "#667eea",
                    "text-decoration": "none",
                    "padding": "4px 8px",
                    "background": "rgba(102, 126, 234, 0.1)",
                    "border-radius": "4px",
                    "transition": "all 0.2s"
                  }
                }, [
                  vue.createElementVNode("span", null, "💎"),
                  vue.createElementVNode("span", null, "点击购买Token")
                ])) : vue.createCommentVNode("", true)
              ])
            ], 4)) : vue.createCommentVNode("", true)
          ]),
          
          existingTokens.value.length > 0 ? (vue.openBlock(), vue.createElementBlock("div", {
            key: 0,
            style: {
              "margin-bottom": "12px",
              "padding": "10px 12px",
              "background": "linear-gradient(135deg, #fff3e0 0%, #ffe0b2 100%)",
              "border-radius": "8px",
              "border": "1px solid #ffcc80"
            }
          }, [
            
            vue.createElementVNode("div", {
              style: { "margin-bottom": "8px", "font-size": "13px", "color": "#e65100", "font-weight": "500" }
            }, "💡 检测到您有" + vue.toDisplayString(existingTokens.value.length) + "个有效Token"),
            
            vue.createElementVNode("div", {
              style: { "display": "flex", "flex-direction": "column", "gap": "6px" }
            }, [
              (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(existingTokens.value, (item, index) => {
                return vue.openBlock(), vue.createElementBlock("div", {
                  key: index,
                  style: {
                    "display": "flex",
                    "align-items": "center",
                    "justify-content": "space-between",
                    "padding": "6px 8px",
                    "background": "rgba(255,255,255,0.6)",
                    "border-radius": "4px"
                  }
                }, [
                  vue.createElementVNode("span", {
                    style: { "font-size": "11px", "color": "#333" }
                  }, vue.toDisplayString(item.token)),
                  vue.createElementVNode("span", {
                    style: { "font-size": "11px", "color": item.remainingCount < 50 ? "#e65100" : "#666", "margin": "0 8px" }
                  }, vue.toDisplayString(item.remainingCount) + "次"),
                  vue.createVNode(_component_el_button, {
                    type: "primary",
                    size: "small",
                    onClick: () => selectToken(item.token),
                    style: { "border-radius": "4px", "font-size": "11px", "padding": "4px 8px" }
                  }, {
                    default: vue.withCtx(() => [
                      vue.createTextVNode("使用")
                    ]),
                    _: 2
                  }, 1032, ["onClick"])
                ]);
              }), 128))
            ]),
            
            existingTokens.value.reduce((sum, t) => sum + t.remainingCount, 0) < 50 ? (vue.openBlock(), vue.createElementBlock("div", {
              key: 0,
              style: { "margin-top": "6px", "text-align": "center" }
            }, [
              vue.createElementVNode("span", {
                style: { "color": "#e65100", "font-size": "11px" }
              }, "⚠️ 次数不足 "),
              vue.createElementVNode("a", {
                href: "https://hsfaka.cn/shop/IU2JDO1E",
                target: "_blank",
                style: { "color": "#667eea", "font-size": "12px", "text-decoration": "underline" }
              }, "点击购买")
            ])) : vue.createCommentVNode("", true)
          ])) : vue.createCommentVNode("", true),
          
          vue.createElementVNode("div", {
            style: {
              "border": "1px solid #e1f5fe",
              "border-radius": "12px",
              "box-shadow": "0 2px 12px rgba(0,0,0,0.08)",
              "overflow": "hidden"
            }
          }, [
            
            vue.createElementVNode("div", {
              style: {
                "background": "linear-gradient(135deg, rgb(102, 126, 234) 0%, rgb(118, 75, 162) 100%)",
                "padding": "15px",
                "color": "#fff"
              }
            }, [
              vue.createElementVNode("div", {
                style: {
                  "display": "flex",
                  "align-items": "center",
                  "gap": "10px",
                  "margin-bottom": "8px"
                }
              }, [
                vue.createElementVNode("span", {
                  style: { "font-size": "20px" }
                }, "✨"),
                vue.createElementVNode("span", {
                  style: {
                    "font-weight": "600",
                    "font-size": "14px"
                  }
                }, "答题配置"),
                vue.createElementVNode("span", {
                  style: {
                    "font-size": "15px",
                    "color": "#fff",
                    "margin-left": "12px",
                    "opacity": "0.7"
                  }
                }, "⚡更改设置后需刷新网页激活")
              ]),
              vue.createElementVNode("div", {
                style: {
                  "font-size": "12px",
                  "opacity": "0.95",
                  "line-height": "1.6"
                }
              }, "🎯 章节作业自动提交 | ⚡ 自动切换下一章节 | 🔥 支持考试模式 | 💪 灵活配置答题参数 | 🤖 已对接高质量AI题库")
            ]),
            
            vue.createElementVNode("div", {
              style: {
                "padding": "15px",
                "background": "#fafcfe"
              }
            }, [
              
              (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(__props.globalConfig.platformParams?.[__props.globalConfig.platformName]?.parts || [], (item, index, partsList) => {
                return vue.openBlock(), vue.createElementBlock("div", {
                  key: index,
                  style: {
                    "margin-bottom": "15px",
                    "padding-bottom": "15px",
                    "border-bottom": "1px dashed #e0e0e0"
                  }
                }, [
                  vue.createElementVNode("div", {
                    style: {
                      "display": "flex",
                      "align-items": "center",
                      "justify-content": "space-between",
                      "gap": "6px",
                      "margin-bottom": "12px",
                      "font-weight": "600",
                      "font-size": "13px",
                      "color": "#333"
                    }
                  }, [
                    vue.createElementVNode("div", {
                      style: {
                        "display": "flex",
                        "align-items": "center",
                        "gap": "6px"
                      }
                    }, [
                      vue.createElementVNode("span", {
                        style: { "font-size": "14px" }
                      }, "⚙️"),
                      vue.createElementVNode("span", null, vue.toDisplayString(item.name), 1)
                    ]),
                    item.name === "答题参数" ? vue.createElementVNode("span", { 
                      style: {
                        "margin-left": "auto",
                        "font-size": "12px",
                        "color": "#ff9800",
                        "font-weight": "500"
                      }
                    }, vue.toDisplayString(consumptionText.value), 1) : vue.createCommentVNode("", true)
                  ]),
                  item.name === "答题参数" ? vue.createElementVNode("div", {
                    style: {
                      "display": "block"
                    }
                  }, [
                    
                    vue.createElementVNode("div", {
                      style: {
                        "display": "flex",
                        "flex-wrap": "wrap",
                        "gap": "12px",
                        "align-items": "flex-start",
                        "margin-bottom": "10px"
                      }
                    }, [
                      
                      (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(item.params.filter(p => p.type === "boolean" && p.exclusiveGroup), (param, index2) => {
                        return vue.openBlock(), vue.createBlock(_component_el_checkbox, {
                          style: { "margin": "0" },
                          key: index2,
                          modelValue: param.value,
                          "onUpdate:modelValue": ($event) => {
                            if (!handleExclusiveGroup(param, item, $event)) return;
                            param.value = $event;
                          },
                          label: param.name
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "label"]);
                      }), 128)),
                      
                      item.params.some(p => p.type === "string") ? (() => {
                        const aiModeParam = item.params.find(p => p.name === "AI模式");
                        const isAiModeActive = aiModeParam && aiModeParam.value;
                        const aiTypeParam = item.params.find(p => p.name === "AI 类型选择");
                        const aiModelParam = item.params.find(p => p.name === "AI 模型选择");
                        if (!aiTypeParam || !aiModelParam) return vue.createCommentVNode("", true);
                        const currentAiType = aiTypeParam ? aiTypeParam.value : '\u6df7\u5143';
                        const TYPE_MODEL_MAP = globalModelConfig?.typeModelMap || {};
                        const defaultModels = globalModelConfig?.defaultModels || {};
                        const filteredOptions = TYPE_MODEL_MAP[currentAiType] || aiModelParam.options;
                        const labelStyle = {
                          "font-size": "12px",
                          "color": isAiModeActive ? "#42a5f5" : "#9ca3af",
                          "white-space": "nowrap",
                          "transition": "color 0.3s ease"
                        };
                        const radioStyle = {
                          "--el-fill-color-light": "transparent",
                          "opacity": isAiModeActive ? "1" : "0.4",
                          "transition": "opacity 0.3s ease",
                          "cursor": isAiModeActive ? "pointer" : "not-allowed"
                        };
                        return vue.createElementVNode("div", {
                          style: {
                            "margin-left": "auto",
                            "display": "flex",
                            "flex-direction": "column",
                            "gap": "4px"
                          }
                        }, [
                          
                          vue.createElementVNode("div", {
                            style: { "display": "flex", "align-items": "center", "gap": "12px" }
                          }, [
                            vue.createElementVNode("span", { style: labelStyle }, "AI 类型:"),
                            vue.createVNode(_component_el_select, {
                              modelValue: aiTypeParam.value,
                              "onUpdate:modelValue": ($event) => {
                                if (isAiModeActive) {
                                  aiTypeParam.value = $event;
                                  aiModelParam.value = defaultModels[$event] || 'Standard';
                                }
                              },
                              size: "small",
                              disabled: !isAiModeActive,
                              style: { "width": "90px", "opacity": isAiModeActive ? "1" : "0.4" },
                              placeholder: "请选择",
                              popperClass: "high-z-index-select"
                            }, {
                              default: vue.withCtx(() => [
                                vue.renderList(aiTypeParam.options || [], (option) => vue.createVNode(_component_el_option, {
                                  key: option, value: option, label: option
                                }, null, 8, ["value", "label"]))
                              ])
                            }, 8, ["modelValue", "onUpdate:modelValue", "disabled", "style"]),
                            
                            vue.createElementVNode("span", { style: {...labelStyle, "margin-left": "8px"} }, "AI 模型:"),
                            vue.createVNode(_component_el_select, {
                              modelValue: aiModelParam.value,
                              "onUpdate:modelValue": ($event) => {
                                if (isAiModeActive) aiModelParam.value = $event;
                              },
                              size: "small",
                              disabled: !isAiModeActive,
                              style: { "width": "90px", "opacity": isAiModeActive ? "1" : "0.4" },
                              placeholder: "请选择",
                              popperClass: "high-z-index-select"
                            }, {
                              default: vue.withCtx(() => [
                                vue.renderList(filteredOptions, (option) => vue.createVNode(_component_el_option, {
                                  key: option, value: option, label: option
                                }, null, 8, ["value", "label"]))
                              ])
                            }, 8, ["modelValue", "onUpdate:modelValue", "disabled", "style"])
                          ])
                        ]);
                      })() : vue.createCommentVNode("", true)
                    ]),
                    
                    vue.createElementVNode("div", {
                      style: {
                        "display": "flex",
                        "flex-wrap": "wrap",
                        "gap": "15px",
                        "margin-bottom": "10px"
                      }
                    }, [
                      (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(item.params.filter(p => p.type === "boolean" && !p.exclusiveGroup), (param, index2) => {
                        return vue.openBlock(), vue.createBlock(_component_el_checkbox, {
                          style: { "margin": "0" },
                          key: index2,
                          modelValue: param.value,
                          "onUpdate:modelValue": ($event) => {
                            
                            if (param.dependsOn) {
                              const parentPart = item;
                              const parentParam = parentPart.params.find(p => p.name === param.dependsOn.param);
                              
                              if (parentParam && parentParam.value !== param.dependsOn.value) {
                                if ($event) {
                                  
                                  return;
                                } else {
                                  
                                  param.value = $event;
                                }
                                return;
                              }
                            }
                            param.value = $event;
                            
                            
                            const parentPart = item;
                            const dependentParams = parentPart.params.filter(p => 
                              p.type === "boolean" && 
                              p.dependsOn && 
                              p.dependsOn.param === param.name
                            );
                            
                            if (!$event && dependentParams.length > 0) {
                              dependentParams.forEach(depParam => {
                                depParam.value = false;
                              });
                            }
                            if ($event && dependentParams.length > 0) {
                              dependentParams.forEach(depParam => {
                                if (depParam.dependsOn && depParam.dependsOn.value !== $event) {
                                  depParam.value = false;
                                }
                              });
                            }
                            _forceUpdateTick.value++;
                          },
                          label: param.name,
                          disabled: param.dependsOn ? (() => {
                            void _forceUpdateTick.value;
                            const parentPart = item;
                            const parentParam = parentPart.params.find(p => p.name === param.dependsOn.param);
                            return !parentParam || parentParam.value !== param.dependsOn.value;
                          })() : false
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "label", "disabled"]);
                      }), 128))
                    ]),
                    
                    vue.createElementVNode("div", {
                      style: {
                        "display": "flex",
                        "flex-wrap": "wrap",
                        "gap": "10px"
                      }
                    }, [
                      (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(item.params.filter(p => p.type === "number"), (param, index2) => {
                        return vue.openBlock(), vue.createBlock(_component_el_form_item, {
                          key: index2,
                          label: param.name,
                          required: "",
                          style: { "margin": "0" }
                        }, {
                          default: vue.withCtx(() => [
                            vue.createVNode(_component_el_input_number, {
                              modelValue: param.value,
                              "onUpdate:modelValue": ($event) => param.value = $event,
                              min: param.min != null ? param.min : 1,
                              max: param.max != null ? param.max : 100,
                              step: param.step != null ? param.step : 1,
                              precision: param.step && param.step < 1 ? 1 : 0,
                              "controls-position": "right",
                              style: { "width": "70px", "height": "28px" }
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          _: 2
                        }, 1032, ["label"]);
                      }), 128))
                    ])
                  ]) : vue.createElementVNode("div", {
                    style: {
                      "display": "flex",
                      "flex-wrap": "wrap",
                      "gap": "10px"
                    }
                  }, [
                    (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(item.params, (param, index2) => {
                      return vue.openBlock(), vue.createElementBlock(vue.Fragment, {
                        key: index2
                      }, [
                        (item.name === "视频设置" && (index2 === 2 || index2 === 5)) || (item.name === "章节/作业/测验设置" && index2 === 2) ? (vue.openBlock(), vue.createElementBlock("div", {
                          key: "br-" + index2,
                          style: { "width": "100%", "height": "0" }
                        })) : vue.createCommentVNode("", true),
                        param.type === "boolean" ? (vue.openBlock(), vue.createBlock(_component_el_checkbox, {
                          style: { "margin": "0", "min-width": "4em" },
                          key: index2,
                          modelValue: param.value,
                          "onUpdate:modelValue": ($event) => {
                            
                            if (param.dependsOn) {
                              const parentPart = item;
                              const parentParam = parentPart.params.find(p => p.name === param.dependsOn.param);
                              
                              if (parentParam && parentParam.value !== param.dependsOn.value) {
                                if ($event) {
                                  
                                  return;
                                } else {
                                  
                                  param.value = $event;
                                }
                                return;
                              }
                            }
                            if (param.exclusiveGroup) {
                              const parentPart = item;
                              const sameGroupParams = parentPart.params.filter(p => 
                                p.type === "boolean" && 
                                p.exclusiveGroup === param.exclusiveGroup && 
                                p.name !== param.name
                              );
                              if ($event) {
                                sameGroupParams.forEach(otherParam => {
                                  otherParam.value = false;
                                  const otherDependents = parentPart.params.filter(p =>
                                    p.type === "boolean" && p.dependsOn && p.dependsOn.param === otherParam.name
                                  );
                                  otherDependents.forEach(dp => { dp.value = false; });
                                });
                              } else {
                                const hasOtherActive = sameGroupParams.some(otherParam => otherParam.value);
                                if (!hasOtherActive) {
                                  return;
                                }
                              }
                            }
                            param.value = $event;
                            

                            if (param.name === "模拟播放" || param.name === "正常播放") {
                              const playbackRateParam = item.params.find(p => p.name === "播放倍速");
                              if (playbackRateParam) {
                                if (param.name === "模拟播放" && $event) {
                                  const autoMax = item.params.find(p => p.name === "自动倍速")?.value || false;
                                  if (autoMax) {
                                    let maxRate = window.__maxPlaybackRate;
                                    if (!maxRate) {
                                      try {
                                        const iframes = document.querySelectorAll('iframe');
                                        for (const iframe of iframes) {
                                          try {
                                            if (iframe.contentDocument) {
                                              const menuItems = iframe.contentDocument.querySelectorAll('.vjs-playback-rate .vjs-menu-content .vjs-menu-item');
                                              if (menuItems.length > 0) {
                                                maxRate = 1;
                                                menuItems.forEach(mi => {
                                                  const text = mi.textContent.trim();
                                                  const rate = parseFloat(text.replace('x', ''));
                                                  if (!isNaN(rate) && rate > maxRate) {
                                                    maxRate = rate;
                                                  }
                                                });
                                                window.__maxPlaybackRate = maxRate;
                                                break;
                                              }
                                            }
                                          } catch (e) {
                                            continue;
                                          }
                                        }
                                      } catch (e) {
                                        console.error('[播放倍速] 获取播放器maxRate失败:', e);
                                      }
                                    }
                                    playbackRateParam.max = maxRate || 3;
                                  } else {
                                    playbackRateParam.max = 3;
                                  }
                                  if (playbackRateParam.value > playbackRateParam.max) {
                                    playbackRateParam.value = playbackRateParam.max;
                                  }
                                } else if (param.name === "正常播放" && $event) {
                                  let maxRate = window.__maxPlaybackRate;
                                  if (!maxRate) {
                                    try {
                                      const iframes = document.querySelectorAll('iframe');
                                      for (const iframe of iframes) {
                                        try {
                                          if (iframe.contentDocument) {
                                            const menuItems = iframe.contentDocument.querySelectorAll('.vjs-playback-rate .vjs-menu-content .vjs-menu-item');
                                            if (menuItems.length > 0) {
                                              maxRate = 1;
                                              menuItems.forEach(mi => {
                                                const text = mi.textContent.trim();
                                                const rate = parseFloat(text.replace('x', ''));
                                                if (!isNaN(rate) && rate > maxRate) {
                                                  maxRate = rate;
                                                }
                                              });
                                              window.__maxPlaybackRate = maxRate;
                                              break;
                                            }
                                          }
                                        } catch (e) {
                                          continue;
                                        }
                                      }
                                    } catch (e) {
                                      console.error('[播放倍速] 获取播放器maxRate失败:', e);
                                    }
                                  }
                                  playbackRateParam.max = maxRate || 3;
                                }
                              }
                            }
                            _forceUpdateTick.value++;
                            
                            
                            if (param.name === "自动倍速") {
                              const playbackRateParam = item.params.find(p => p.name === "播放倍速");
                              if (playbackRateParam) {
                                const isSimulate = item.params.find(p => p.name === "模拟播放")?.value || false;
                                if (isSimulate) {
                                  if ($event) {
                                    let maxRate = window.__maxPlaybackRate;
                                    if (!maxRate) { maxRate = 3; }
                                    playbackRateParam.max = maxRate;
                                  } else {
                                    playbackRateParam.max = 3;
                                  }
                                  if (playbackRateParam.value > playbackRateParam.max) {
                                    playbackRateParam.value = playbackRateParam.max;
                                  }
                                }
                              }
                            }
                            
                            const parentPart = item;
                            const dependentParams = parentPart.params.filter(p => 
                              p.type === "boolean" && 
                              p.dependsOn && 
                              p.dependsOn.param === param.name
                            );
                            
                            if (!$event && dependentParams.length > 0) {
                              dependentParams.forEach(depParam => {
                                depParam.value = false;
                              });
                            }
                            if ($event && dependentParams.length > 0) {
                              dependentParams.forEach(depParam => {
                                if (depParam.dependsOn && depParam.dependsOn.value !== $event) {
                                  depParam.value = false;
                                }
                              });
                            }
                          },
                          label: param.name,
                          disabled: param.dependsOn ? (() => {
                            void _forceUpdateTick.value;
                            const parentPart = item;
                            const parentParam = parentPart.params.find(p => p.name === param.dependsOn.param);
                            return !parentParam || parentParam.value !== param.dependsOn.value;
                          })() : false
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "label", "disabled"])) : (vue.openBlock(), vue.createBlock(_component_el_form_item, {
                          key: 1,
                          label: param.name,
                          required: "",
                          style: { "margin": "0" }
                        }, {
                          default: vue.withCtx(() => [
                            vue.createVNode(_component_el_input_number, {
                              modelValue: param.value,
                              "onUpdate:modelValue": ($event) => param.value = $event,
                              min: param.min != null ? param.min : 1,
                              max: param.max != null ? param.max : 100,
                              step: param.step != null ? param.step : 1,
                              precision: param.step && param.step < 1 ? 1 : 0,
                              "controls-position": "right",
                              style: { "width": "70px", "height": "28px" },
                              disabled: item.name === "视频设置" && param.name === "播放倍速" ? (item.params.find(p => p.name === "自动倍速")?.value || false) : false
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled"])
                          ]),
                          _: 2
                        }, 1032, ["label"]))
                      ], 64);
                    }), 128)),
                    
                    item.name === "视频设置" ? (vue.openBlock(), vue.createElementBlock("div", {
                      key: "video-tips",
                      style: {
                        "width": "100%",
                        "margin-top": "12px",
                        "padding-left": "0"
                      }
                    }, [
                      
                      item.params.some(p => p.name === "模拟播放" && p.value) ? (vue.openBlock(), vue.createElementBlock("div", {
                        key: 0,
                        style: {
                          "font-size": "11px",
                          "color": "#ff9800",
                          "margin-bottom": "6px",
                          "padding": "8px",
                          "background": "rgba(255, 152, 0, 0.1)",
                          "border-radius": "6px",
                          "line-height": "1.5"
                        }
                      }, "💡 模拟播放倍速与正常播放一致，使用播放器允许的最大值")) : vue.createCommentVNode("", true),
                      
                      !item.params.some(p => p.name === "模拟播放" && p.value) ? (vue.openBlock(), vue.createElementBlock("div", {
                        key: 1,
                        style: {
                          "font-size": "11px",
                          "color": "#4caf50",
                          "margin-bottom": "6px",
                          "padding": "8px",
                          "background": "rgba(76, 175, 80, 0.1)",
                          "border-radius": "6px",
                          "line-height": "1.5"
                        }
                      }, "ℹ️ 普通播放倍速受播放器限制，使用播放器允许的最大值")) : vue.createCommentVNode("", true),
                      
                      item.params.some(p => p.name === "直接上报" && p.value) ? (vue.openBlock(), vue.createElementBlock("div", {
                        key: 2,
                        style: {
                          "font-size": "11px",
                          "color": "#f44336",
                          "margin-bottom": "6px",
                          "padding": "8px",
                          "background": "rgba(244, 67, 54, 0.1)",
                          "border-radius": "6px",
                          "line-height": "1.5",
                          "font-weight": "600"
                        }
                      }, "⚠️ 此功能可能引发封号，注意风险！")) : vue.createCommentVNode("", true)
                    ])) : vue.createCommentVNode("", true),
                    
                    item.params.some(p => p.name === "答案校验" && p.value) ? (vue.openBlock(), vue.createElementBlock("div", {
                      key: 3,
                      style: {
                        "width": "100%",
                        "font-size": "11px",
                        "color": "#888",
                        "margin-top": "6px",
                        "padding-left": "0",
                        "line-height": "1.4"
                      }
                    }, "💡 同时请求题库与AI模型，确保正确率【此功能会双倍消耗答题次数】【此功能会显著增加答题时长】")) : vue.createCommentVNode("", true)
              ])
            ]);
                    }), 128))
          ])
          ])
        ]);
      };
    }
  });
  const ScriptSetting =  _export_sfc(_sfc_main$7, [["__scopeId", "data-v-9ea68a6a"]]);
  const _hoisted_1$3 = { class: "question_table" };
  const _hoisted_2$1 = ["innerHTML"];
  const _sfc_main$6 =  vue.defineComponent({
    __name: "QuestionTable",
    props: {
      questionList: {
        type: Array,
        required: true
      }
    },
    setup(__props) {
      
      return (_ctx, _cache) => {
        const _component_el_table_column = vue.resolveComponent("el-table-column");
        const _component_el_table = vue.resolveComponent("el-table");
        const _component_el_empty = vue.resolveComponent("el-empty");
        return vue.openBlock(), vue.createElementBlock(vue.Fragment, null, [
          vue.createElementVNode("div", {
            style: {
              "margin-bottom": "15px",
              "padding": "15px",
              "border": "1px solid #e1f5fe",
              "border-radius": "12px",
              "box-shadow": "0 2px 12px rgba(0,0,0,0.08)",
              "overflow": "hidden"
            }
          }, [
            vue.createElementVNode("div", {
              style: {
                "background": "linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)",
                "padding": "12px 15px",
                "color": "#fff",
                "display": "flex",
                "align-items": "center",
                "gap": "8px",
                "margin": "-15px -15px 15px -15px"
              }
            }, [
              vue.createElementVNode("span", {
                style: { "font-size": "16px" }
              }, "📋"),
              vue.createElementVNode("span", {
                style: {
                  "font-weight": "600",
                  "font-size": "14px"
                }
              }, "答题记录列表")
            ]),
            vue.withDirectives(vue.createElementVNode("div", _hoisted_1$3, [
            vue.createVNode(_component_el_table, {
              stripe: "",
              data: __props.questionList,
              height: "380",
              style: { "font-size": "12px" }
            }, {
              default: vue.withCtx(() => [
                vue.createVNode(_component_el_table_column, {
                  type: "index",
                  width: "40"
                }),
                vue.createVNode(_component_el_table_column, {
                  prop: "title",
                  label: "题目",
                  width: "370"
                }),
                vue.createVNode(_component_el_table_column, {
                  style: { "background-color": "red" },
                  prop: "answer",
                  label: "答案",
                  width: "215"
                }, {
                  default: vue.withCtx((scope) => [
                    vue.createElementVNode("div", {
                      innerHTML: scope.row.source === "ai" 
                        ? scope.row.answer.join() + '<span style="color:#ff9800;font-size:11px;margin-left:4px;">[答案由AI提供]</span>'
                        : scope.row.answer.join()
                    }, null, 8, _hoisted_2$1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["data"])
          ], 512), [
            [vue.vShow, __props.questionList.length]
          ]),
          vue.withDirectives(vue.createElementVNode("div", {
            style: {
              "padding": "20px",
              "text-align": "center"
            }
          }, [
            vue.createVNode(_component_el_empty, { description: "该页面无需答题" })
          ], 512), [
            [vue.vShow, !__props.questionList.length]
          ])
          ])
        ], 64);
      };
    }
  });
  const QuestionTable =  _export_sfc(_sfc_main$6, [["__scopeId", "data-v-18523ca7"]]);
  
  const _sfc_main_referral =  vue.defineComponent({
    __name: "ReferralPanel",
    setup(__props) {
      const logStore = useLogStore();
      
      
      const myUserId = vue.ref('');
      const referrerInput = vue.ref('');
      const submitting = vue.ref(false);
      const loading = vue.ref(true);
      
      
      const submitState = vue.ref({
        status: '', 
        message: ''
      });
      
      
      const rewardResult = vue.ref({
        referrerReward: 0,
        refereeReward: 0
      });
      
      
      const referralStatus = vue.ref({
        canRefer: false,
        canReferReason: '',
        isReferred: false,
        referrerId: null,
        myReward: 0,
        totalReferrals: 0,
        totalRewards: 0,
        userType: 1
      });

      
      const initUserId = () => {
        try {
          const uid = getUid();
          myUserId.value = uid || '';
        } catch (e) {
          console.error('[推广奖励] 获取用户ID失败:', e);
        }
      };
      
      
      const fetchReferralStatus = () => {
        const userId = myUserId.value;
        if (!userId) {
          loading.value = false;
          return;
        }
        _GM_xmlhttpRequest({
          method: "GET",
          url: getRandomServer() + "/referral/status?userId=" + encodeURIComponent(userId),
          timeout: 10000,
          onload: (response) => {
            loading.value = false;
            try {
              const res = JSON.parse(response.responseText);
              if (res.code === 200 && res.data) {
                referralStatus.value = res.data;
              }
            } catch (e) {
              console.error('[推广奖励] 获取推广状态失败:', e);
            }
          },
          onerror: () => {
            loading.value = false;
            console.error('[推广奖励] 网络错误');
          }
        });
      };
      
      
      const copyUserId = () => {
        if (myUserId.value) {
          navigator.clipboard.writeText(myUserId.value).then(() => {
            logStore.addLog('✅ 用户ID已复制到剪贴板', 'success');
          }).catch(() => {
            logStore.addLog('❌ 复制失败', 'danger');
          });
        }
      };
      
      
      const submitReferral = () => {
        if (!referrerInput.value.trim()) {
          submitState.value = { status: 'error', message: '请输入推荐人ID' };
          return;
        }
        if (!myUserId.value) {
          submitState.value = { status: 'error', message: '无法获取您的用户ID' };
          return;
        }
        submitting.value = true;
        submitState.value = { status: 'submitting', message: '正在提交...' };
        _GM_xmlhttpRequest({
          method: "POST",
          url: getRandomServer() + "/referral",
          headers: { "Content-Type": "application/json" },
          data: JSON.stringify({
            referrerId: referrerInput.value.trim(),
            refereeId: myUserId.value
          }),
          timeout: 10000,
          onload: (response) => {
            submitting.value = false;
            try {
              const res = JSON.parse(response.responseText);
              if (res.code === 200) {
                submitState.value = { status: 'success', message: res.msg };
                referrerInput.value = '';
                
                if (res.data) {
                  rewardResult.value = {
                    referrerReward: res.data.referrerReward || 0,
                    refereeReward: res.data.refereeReward || 0
                  };
                }
                fetchReferralStatus();
              } else {
                submitState.value = { status: 'error', message: res.msg };
              }
            } catch (e) {
              submitState.value = { status: 'error', message: '提交失败，请稍后重试' };
            }
          },
          onerror: () => {
            submitting.value = false;
            submitState.value = { status: 'error', message: '网络错误，请稍后重试' };
          }
        });
      };
      
      
      vue.onMounted(() => {
        initUserId();
        fetchReferralStatus();
      });
      
      return (_ctx, _cache) => {
        const userId = vue.unref(myUserId);
        const status = vue.unref(referralStatus);
        const isSubmitting = vue.unref(submitting);
        
        return vue.openBlock(), vue.createElementBlock("div", {
          key: 'referral-' + userId + '-' + status.totalReferrals + '-' + status.totalRewards + '-' + status.canRefer + '-' + status.hasReferred
        }, [
          
          vue.createElementVNode("div", {
            style: {
              "margin-bottom": "15px",
              "border": "1px solid #e1f5fe",
              "border-radius": "12px",
              "overflow": "hidden"
            }
          }, [
            vue.createElementVNode("div", {
              style: {
                "background": "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                "padding": "15px",
                "color": "#fff"
              }
            }, [
              vue.createElementVNode("div", {
                style: {
                  "display": "flex",
                  "align-items": "center",
                  "gap": "8px",
                  "margin-bottom": "8px"
                }
              }, [
                vue.createElementVNode("span", { style: { "font-size": "16px" } }, "🎁"),
                vue.createElementVNode("span", { style: { "font-weight": "600", "font-size": "14px" } }, "推广奖励")
              ]),
              vue.createElementVNode("div", { style: { "font-size": "12px", "opacity": "0.95" } }, "邀请好友获得免费查询次数")
            ]),
            vue.createElementVNode("div", {
              style: { "padding": "15px", "background": "#fafcfe" }
            }, [
              
              vue.createElementVNode("div", {
                style: {
                  "padding": "12px",
                  "margin-bottom": "10px",
                  "background": "linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%)",
                  "border-radius": "8px",
                  "border-left": "4px solid #42a5f5"
                }
              }, [
                vue.createElementVNode("p", { style: { "margin": "0 0 8px 0", "font-size": "13px", "color": "#333", "font-weight": "500" } }, "我的用户ID"),
                vue.createElementVNode("div", {
                  style: { "display": "flex", "align-items": "center", "gap": "10px" }
                }, [
                  vue.createElementVNode("span", { 
                    style: { 
                      "font-size": "16px", 
                      "color": userId ? "#1976d2" : "#e65100", 
                      "font-weight": "600",
                      "font-family": "monospace"
                    } 
                  }, vue.toDisplayString(userId || '请先在学习通网站登录')),
                  userId ? (vue.openBlock(), vue.createElementBlock("button", {
                    key: 0,
                    onClick: copyUserId,
                    style: {
                      "padding": "4px 10px",
                      "font-size": "12px",
                      "border": "none",
                      "border-radius": "4px",
                      "background": "#1976d2",
                      "color": "#fff",
                      "cursor": "pointer"
                    }
                  }, "复制")) : vue.createCommentVNode("", true)
                ])
              ]),
              
              vue.createElementVNode("div", {
                style: {
                  "display": "grid",
                  "grid-template-columns": "1fr 1fr",
                  "gap": "10px"
                }
              }, [
                vue.createElementVNode("div", {
                  style: {
                    "padding": "10px",
                    "background": "linear-gradient(135deg, #e8f5e9 0%, #c8e6c9 100%)",
                    "border-radius": "8px",
                    "text-align": "center"
                  }
                }, [
                  vue.createElementVNode("div", { 
                    style: { "font-size": "20px", "font-weight": "600", "color": "#2e7d32" } 
                  }, vue.toDisplayString(status.totalReferrals)),
                  vue.createElementVNode("div", { 
                    style: { "font-size": "11px", "color": "#388e3c" } 
                  }, "已推广人数")
                ]),
                vue.createElementVNode("div", {
                  style: {
                    "padding": "10px",
                    "background": "linear-gradient(135deg, #fff3e0 0%, #ffe0b2 100%)",
                    "border-radius": "8px",
                    "text-align": "center"
                  }
                }, [
                  vue.createElementVNode("div", { 
                    style: { "font-size": "20px", "font-weight": "600", "color": "#e65100" } 
                  }, vue.toDisplayString(status.totalRewards)),
                  vue.createElementVNode("div", { 
                    style: { "font-size": "11px", "color": "#f57c00" } 
                  }, "获得奖励次数")
                ])
              ])
            ])
          ]),
          
          vue.createElementVNode("div", {
            style: {
              "border": "1px solid #e1f5fe",
              "border-radius": "12px",
              "overflow": "hidden"
            }
          }, [
            vue.createElementVNode("div", {
              style: {
                "background": "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
                "padding": "15px",
                "color": "#fff"
              }
            }, [
              vue.createElementVNode("div", {
                style: {
                  "display": "flex",
                  "align-items": "center",
                  "gap": "8px",
                  "margin-bottom": "8px"
                }
              }, [
                vue.createElementVNode("span", { style: { "font-size": "16px" } }, "✨"),
                vue.createElementVNode("span", { style: { "font-weight": "600", "font-size": "14px" } }, "填写推荐人")
              ]),
              vue.createElementVNode("div", { style: { "font-size": "12px", "opacity": "0.95" } }, "新用户福利：填写推荐人，双方均可获得奖励")
            ]),
            vue.createElementVNode("div", {
              style: { "padding": "15px", "background": "#fafcfe" }
            }, [
              status.isReferred ? (vue.openBlock(), vue.createElementBlock("div", {
                key: 0,
                style: {
                  "padding": "12px",
                  "background": "linear-gradient(135deg, #e8f5e9 0%, #c8e6c9 100%)",
                  "border-radius": "8px",
                  "border-left": "4px solid #4caf50"
                }
              }, [
                vue.createElementVNode("p", { 
                  style: { "margin": "0", "font-size": "13px", "color": "#2e7d32" } 
                }, "✅ 您已填写过推荐人：" + vue.toDisplayString(status.referrerId)),
                status.myReward > 0 ? (vue.createElementVNode("p", { 
                  style: { "margin": "8px 0 0 0", "font-size": "13px", "color": "#1976d2", "font-weight": "500" } 
                }, "🎁 您获得了 " + vue.toDisplayString(status.myReward) + " 次查询奖励")) : vue.createCommentVNode("", true)
              ])) : (vue.openBlock(), vue.createElementBlock("div", { key: 1 }, [
                status.canRefer ? (vue.openBlock(), vue.createElementBlock("div", { key: 0 }, [
                  
                  vue.createElementVNode("div", {
                    style: {
                      "padding": "10px",
                      "margin-bottom": "10px",
                      "background": "#fff3e0",
                      "border-radius": "8px",
                      "font-size": "12px",
                      "color": "#e65100"
                    }
                  }, [
                    vue.createElementVNode("p", { style: { "margin": "0" } }, "📌 规则说明："),
                    vue.createElementVNode("p", { style: { "margin": "5px 0 0 0" } }, "• 仅限新用户（注册24小时内）填写"),
                    vue.createElementVNode("p", { style: { "margin": "3px 0 0 0" } }, "• 每人只能填写一次推荐人"),
                    vue.createElementVNode("p", { style: { "margin": "3px 0 0 0", "color": "#f44336" } }, "• 推荐人必须是付费用户（免费Token无法被推荐）"),
                    vue.createElementVNode("p", { style: { "margin": "3px 0 0 0" } }, 
                      rewardResult.value.refereeReward > 0 
                        ? `✅ 推荐人获得${rewardResult.value.referrerReward}次，您获得${rewardResult.value.refereeReward}次`
                        : "• 推荐人获得20-100次（随机），您获得20-50次（随机）"
                    )
                  ]),
                  vue.createElementVNode("div", { style: { "margin-bottom": "10px" } }, [
                    vue.createElementVNode("input", {
                      type: "text",
                      value: vue.unref(referrerInput),
                      onInput: _cache[0] || (_cache[0] = ($event) => referrerInput.value = $event.target.value),
                      placeholder: "请输入推荐人的用户ID",
                      style: {
                        "width": "100%",
                        "padding": "10px 12px",
                        "border": "1px solid #ddd",
                        "border-radius": "8px",
                        "font-size": "14px",
                        "box-sizing": "border-box"
                      }
                    }, null, 40, ["value", "onInput"])
                  ]),
                  vue.createElementVNode("button", {
                    onClick: submitReferral,
                    disabled: isSubmitting,
                    style: {
                      "width": "100%",
                      "padding": "10px",
                      "border": "none",
                      "border-radius": "8px",
                      "background": isSubmitting ? "#ccc" : "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                      "color": "#fff",
                      "font-size": "14px",
                      "font-weight": "500",
                      "cursor": isSubmitting ? "not-allowed" : "pointer"
                    }
                  }, vue.toDisplayString(isSubmitting ? "提交中..." : "提交推荐人"), 9, ["onClick", "disabled"]),
                  
                  submitState.value.status ? (vue.openBlock(), vue.createElementBlock("div", {
                    key: 0,
                    style: {
                      "margin-top": "10px",
                      "padding": "10px 12px",
                      "border-radius": "8px",
                      "border": "2px solid",
                      "border-color": submitState.value.status === 'success' ? "#4caf50" :
                                      submitState.value.status === 'error' ? "#dc3545" : "#ffc107",
                      "background-color": submitState.value.status === 'success' ? "#e8f5e9" :
                                             submitState.value.status === 'error' ? "#f8d7da" : "#fff8e1"
                    }
                  }, [
                    vue.createElementVNode("div", {
                      style: {
                        "display": "flex",
                        "align-items": "center",
                        "gap": "6px"
                      }
                    }, [
                      vue.createElementVNode("span", {
                        style: { "font-size": "14px" }
                      }, vue.toDisplayString(
                        submitState.value.status === 'success' ? "✅" :
                        submitState.value.status === 'error' ? "❌" : "⏳"
                      ), 1),
                      vue.createElementVNode("span", {
                        style: {
                          "font-size": "13px",
                          "color": submitState.value.status === 'success' ? "#2e7d32" :
                                      submitState.value.status === 'error' ? "#721c24" : "#856404"
                        }
                      }, vue.toDisplayString(submitState.value.message), 1)
                    ])
                  ])) : vue.createCommentVNode("v-if", true)
                ])) : (vue.openBlock(), vue.createElementBlock("div", {
                  key: 1,
                  style: {
                    "padding": "12px",
                    "background": "linear-gradient(135deg, #fff3e0 0%, #ffe0b2 100%)",
                    "border-radius": "8px",
                    "border-left": "4px solid #ff9800"
                  }
                }, [
                  vue.createElementVNode("p", { 
                    style: { "margin": "0", "font-size": "13px", "color": "#e65100", "font-weight": "500" } 
                  }, "⚠️ " + vue.toDisplayString(status.canReferReason || '你已不是新用户，无法填写推荐人'))
                ]))
              ]))
            ])
          ])
        ]);
      };
    }
  });
  const ReferralPanel =  _export_sfc(_sfc_main_referral, [["__scopeId", "data-v-referral-panel"]]);
  
  const changelogLoading = vue.ref(true);
  const changelogList = vue.ref([]);
  const changelogRefreshKey = vue.ref(0);
  try {
    _GM_xmlhttpRequest({
      method: "GET",
      url: getRandomServer() + "/changelog",
      timeout: 5000,
      onload: (response) => {
        try {
          const res = JSON.parse(response.responseText);
          if (res.code === 200 && res.data) {
            changelogList.value = res.data;
          }
        } catch (e) {}
        changelogLoading.value = false;
        changelogRefreshKey.value++;
      },
      onerror: () => {},
      ontimeout: () => {}
    });
  } catch (e) {}

  const _sfc_main$4 =  vue.defineComponent({
    __name: "AuthorWords",
    setup() {
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("div", null, [
          
          vue.createElementVNode("div", {
            style: {
              "border": "1px solid #e1f5fe",
              "border-radius": "12px",
              "overflow": "hidden"
            }
          }, [
            vue.createElementVNode("div", {
              style: {
                "background": "linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)",
                "padding": "15px",
                "color": "#fff"
              }
            }, [
              vue.createElementVNode("div", {
                style: {
                  "display": "flex",
                  "align-items": "center",
                  "gap": "8px",
                  "margin-bottom": "8px"
                }
              }, [
                vue.createElementVNode("span", { style: { "font-size": "16px" } }, "💬"),
                vue.createElementVNode("span", { style: { "font-weight": "600", "font-size": "14px" } }, "作者的话")
              ]),
              vue.createElementVNode("div", { style: { "font-size": "12px", "opacity": "0.95" } }, "来自开发者的一些心里话")
            ]),
            vue.createElementVNode("div", {
              style: {
                "padding": "25px",
                "background": "linear-gradient(135deg, #f3e5f5 0%, #e1bee7 100%)",
                "text-align": "center"
              }
            }, [
              vue.createElementVNode("p", {
                style: {
                  "margin": "20px 0",
                  "font-style": "italic",
                  "font-size": "18px",
                  "color": "#1565c0",
                  "font-weight": "500"
                }
              }, [
                vue.createTextVNode("欢迎加入QQ群交流: "),
                vue.createElementVNode("a", {
                  href: "https://qun.qq.com/universal-share/share?ac=1&authKey=aXTc3%2B9CzLY17EtOYLTOLRrsBQ%2FO961BD7jXTm39dq%2BYq3aUqIUXDhiyRFST5Rlj&busi_data=eyJncm91cENvZGUiOiIxNTI4OTg5NTYiLCJ0b2tlbiI6IlFuRDNReWF6S2N6NlR3dkN5OWxYVzU2c3Qwazd5bWFsS3BEZ0Ezb2hvSEVBaVFuUDJGbmgzWGlranloSFRvay8iLCJ1aW4iOiIyNDEzMDc2OTY1In0%3D&data=4HWsNkbY-XgM7w33fUZT7doIplKseoS8daXEIsxdBr8UoWE5nC0dFWEywJ_AZFA0mdf562GNoaKCuz9rTPo9nw&svctype=4&tempid=h5_group_info",
                  target: "_blank",
                  style: { "color": "#1976d2", "text-decoration": "underline" }
                }, "152898956")
              ]),
              vue.createElementVNode("p", {
                style: {
                  "margin": "10px 0",
                  "font-size": "14px",
                  "color": "#ff9800",
                  "font-weight": "500"
                }
              }, "口令: 飘飘"),
              vue.createElementVNode("p", {
                style: {
                  "margin": "20px 0",
                  "font-style": "italic",
                  "font-size": "18px",
                  "color": "#6a1b9a",
                  "font-weight": "500"
                }
              }, '"快点刷学习通，别卷了"'),
              vue.createElementVNode("p", {
                style: {
                  "margin": "15px 0",
                  "font-style": "italic",
                  "font-size": "16px",
                  "color": "#8e24aa"
                }
              }, "别卷了别卷了，真的别卷了"),
              vue.createElementVNode("div", {
                style: {
                  "margin-top": "25px",
                  "padding-top": "20px",
                  "border-top": "2px solid rgba(156,39,176,0.2)"
                }
              }, [
                vue.createElementVNode("p", {
                  style: { "margin": "15px 0", "color": "#424242", "font-size": "14px" }
                }, "不是，你还真看啊，学习通刷完了么你"),
                vue.createElementVNode("p", {
                  style: { "margin": "15px 0", "color": "#424242", "font-size": "14px" }
                }, [
                  vue.createTextVNode("目前开发者还在开发的功能有："),
                  vue.createElementVNode("br"),
                  vue.createTextVNode("• AI模型自助切换（现在是混元和deepseek系统自动选择）"),
                  vue.createElementVNode("br"),
                  vue.createTextVNode("• 刷课免放视频"),
                  vue.createElementVNode("br"),
                  vue.createTextVNode("• 如需更多功能"),
                  vue.createElementVNode("a", {
                    href: "https://scriptcat.org/zh-CN/script-show-page/5597/issue",
                    target: "_blank",
                    style: { "color": "#667eea", "text-decoration": "none" }
                  }, "点击反馈")
                ])
              ])
            ])
          ]),
          
          vue.createElementVNode("div", {
            style: {
              "border": "1px solid #e8f5e9",
              "border-radius": "12px",
              "overflow": "hidden",
              "margin-top": "15px"
            }
          }, [
            vue.createElementVNode("div", {
              style: {
                "background": "linear-gradient(135deg, #43a047 0%, #66bb6a 100%)",
                "padding": "15px",
                "color": "#fff"
              }
            }, [
              vue.createElementVNode("div", {
                style: {
                  "display": "flex",
                  "align-items": "center",
                  "gap": "8px",
                  "margin-bottom": "8px"
                }
              }, [
                vue.createElementVNode("span", { style: { "font-size": "16px" } }, "🚀"),
                vue.createElementVNode("span", { style: { "font-weight": "600", "font-size": "14px" } }, "免更新版本")
              ]),
              vue.createElementVNode("div", { style: { "font-size": "12px", "opacity": "0.95" } }, "轻量级引导脚本，自动获取最新代码")
            ]),
            vue.createElementVNode("div", {
              style: { "padding": "15px", "background": "#fafcfe" }
            }, [
              vue.createElementVNode("div", {
                style: {
                  "padding": "12px",
                  "background": "linear-gradient(135deg, #e8f5e9 0%, #c8e6c9 100%)",
                  "border-radius": "8px",
                  "border-left": "4px solid #43a047"
                }
              }, [
                vue.createElementVNode("p", { style: { "margin": "0 0 8px 0", "color": "#2e7d32", "font-size": "13px" } }, "轻量级引导脚本，自动获取最新的刷课脚本最新代码执行。支持热更新，无需手动更新脚本。"),
                vue.createElementVNode("a", {
                  href: "https://scriptcat.org/zh-CN/script-show-page/5615",
                  target: "_blank",
                  style: { "color": "#1976d2", "font-size": "13px", "text-decoration": "underline" }
                }, "🔗 点击获取免更新版本")
              ])
            ])
          ]),
          
          vue.createElementVNode("div", {
            style: {
              "border": "1px solid #e1f5fe",
              "border-radius": "12px",
              "overflow": "hidden",
              "margin-top": "15px"
            }
          }, [
            vue.createElementVNode("div", {
              style: {
                "background": "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
                "padding": "15px",
                "color": "#fff"
              }
            }, [
              vue.createElementVNode("div", {
                style: {
                  "display": "flex",
                  "align-items": "center",
                  "gap": "8px",
                  "margin-bottom": "8px"
                }
              }, [
                vue.createElementVNode("span", { style: { "font-size": "16px" } }, "📖"),
                vue.createElementVNode("span", { style: { "font-weight": "600", "font-size": "14px" } }, "使用教程")
              ]),
              vue.createElementVNode("div", { style: { "font-size": "12px", "opacity": "0.95" } }, "请仔细阅读以下说明，确保正确使用脚本功能")
            ]),
            vue.createElementVNode("div", {
              style: { "padding": "15px", "background": "#fafcfe" }
            }, [
              vue.createElementVNode("div", {
                style: {
                  "padding": "12px",
                  "margin-bottom": "10px",
                  "background": "linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%)",
                  "border-radius": "8px",
                  "border-left": "4px solid #42a5f5"
                }
              }, [
                vue.createElementVNode("p", { style: { "margin": "0 0 5px 0", "font-weight": "600", "color": "#1976d2" } }, "📌 脚本功能"),
                vue.createElementVNode("p", { style: { "margin": "0", "color": "#333", "font-size": "13px" } }, "【超星学习通「功能基本完成」】【知到智慧树「目前只支持答题」】")
              ]),
              vue.createElementVNode("div", {
                style: {
                  "padding": "12px",
                  "margin-bottom": "10px",
                  "background": "linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%)",
                  "border-radius": "8px",
                  "border-left": "4px solid #42a5f5"
                }
              }, [
                vue.createElementVNode("p", { style: { "margin": "0 0 5px 0", "font-weight": "600", "color": "#1976d2" } }, "🔑 题库配置"),
                vue.createElementVNode("p", { style: { "margin": "0", "color": "#333", "font-size": "13px" } }, '脚本接入了综合题库，如需填写密钥，依次操作：【1】 点击标签页"脚本配置" --> 【2】 在顶部文本框内填写16位数字Token --> 【3】 点击验证')
              ]),
              vue.createElementVNode("div", {
                style: {
                  "padding": "12px",
                  "background": "linear-gradient(135deg, #fff3e0 0%, #ffe0b2 100%)",
                  "border-radius": "8px",
                  "border-left": "4px solid #ff9800"
                }
              }, [
                vue.createElementVNode("p", { style: { "margin": "0 0 5px 0", "font-weight": "600", "color": "#f57c00" } }, "⚠️ 务必注意"),
                vue.createElementVNode("p", { style: { "margin": "0 0 5px 0", "color": "#333", "font-size": "13px" } }, "• 脚本出现相关问题，请在脚本反馈区反馈，或者私信作者修复。"),
                vue.createElementVNode("p", { style: { "margin": "0", "color": "#333", "font-size": "13px" } }, "• 题库密钥请确认能够搜索到题目再获取，题库均为网络收集的第三方题库，出现任何问题与脚本无关。")
              ])
            ])
          ]),
          
          vue.createElementVNode("div", {
            style: {
              "border": "1px solid #e1f5fe",
              "border-radius": "12px",
              "overflow": "hidden",
              "margin-top": "15px"
            }
          }, [
            vue.createElementVNode("div", {
              style: {
                "background": "linear-gradient(135deg, #5ee7df 0%, #b490ca 100%)",
                "padding": "15px",
                "color": "#fff"
              }
            }, [
              vue.createElementVNode("div", {
                style: {
                  "display": "flex",
                  "align-items": "center",
                  "gap": "8px",
                  "margin-bottom": "8px"
                }
              }, [
                vue.createElementVNode("span", { style: { "font-size": "16px" } }, "📜"),
                vue.createElementVNode("span", { style: { "font-weight": "600", "font-size": "14px" } }, "用户协议")
              ]),
              vue.createElementVNode("div", { style: { "font-size": "12px", "opacity": "0.95" } }, "使用本脚本即表示您同意以下条款")
            ]),
            vue.createElementVNode("div", {
              style: { "padding": "15px", "background": "#fafcfe" }
            }, [
              vue.createElementVNode("div", {
                style: {
                  "padding": "12px",
                  "margin-bottom": "10px",
                  "background": "linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%)",
                  "border-radius": "8px",
                  "border-left": "4px solid #42a5f5"
                }
              }, [
                vue.createElementVNode("p", { style: { "margin": "0", "font-size": "13px", "color": "#333", "line-height": "1.6" } }, "📌 本脚本仅供学习和研究目的使用，并应在24小时内删除。脚本的使用不应违反任何法律法规及学术道德标准。")
              ]),
              vue.createElementVNode("div", {
                style: {
                  "padding": "12px",
                  "margin-bottom": "10px",
                  "background": "linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%)",
                  "border-radius": "8px",
                  "border-left": "4px solid #42a5f5"
                }
              }, [
                vue.createElementVNode("p", { style: { "margin": "0", "font-size": "13px", "color": "#333", "line-height": "1.6" } }, "⚖️ 用户在使用脚本时，必须遵守所有适用的法律法规。任何由于使用脚本而引起的违法行为或不当行为，其产生的一切后果由用户自行承担。")
              ]),
              vue.createElementVNode("div", {
                style: {
                  "padding": "12px",
                  "background": "linear-gradient(135deg, #fff3e0 0%, #ffe0b2 100%)",
                  "border-radius": "8px",
                  "border-left": "4px solid #ff9800"
                }
              }, [
                vue.createElementVNode("p", { style: { "margin": "0 0 8px 0", "font-size": "13px", "color": "#333", "line-height": "1.6" } }, "⚠️ 其他重要条款："),
                vue.createElementVNode("p", { style: { "margin": "0 0 5px 0", "font-size": "12px", "color": "#555", "line-height": "1.6" } }, "• 本声明的目的在于提醒用户注意相关法律法规与风险"),
                vue.createElementVNode("p", { style: { "margin": "0 0 5px 0", "font-size": "12px", "color": "#555", "line-height": "1.6" } }, "• 如用户在使用脚本的过程中有任何疑问，建议立即停止使用"),
                vue.createElementVNode("p", { style: { "margin": "0", "font-size": "12px", "color": "#555", "line-height": "1.6" } }, "• 本免责声明的最终解释权归脚本开发者所有")
              ])
            ])
          ])
        ]);
      };
    }
  });
  const AuthorWords = _sfc_main$4;
  function isFunction(value) {
    return typeof value === "function";
  }
  function hasLift(source) {
    return isFunction(source === null || source === void 0 ? void 0 : source.lift);
  }
  function operate(init) {
    return function(source) {
      if (hasLift(source)) {
        return source.lift(function(liftedSource) {
          try {
            return init(liftedSource, this);
          } catch (err) {
            this.error(err);
          }
        });
      }
      throw new TypeError("Unable to lift unknown Observable type");
    };
  }
  var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
      d2.__proto__ = b2;
    } || function(d2, b2) {
      for (var p in b2)
        if (Object.prototype.hasOwnProperty.call(b2, p))
          d2[p] = b2[p];
    };
    return extendStatics(d, b);
  };
  function __extends(d, b) {
    if (typeof b !== "function" && b !== null)
      throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  }
  function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P ? value : new P(function(resolve) {
        resolve(value);
      });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  }
  function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() {
      if (t[0] & 1)
        throw t[1];
      return t[1];
    }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() {
      return this;
    }), g;
    function verb(n) {
      return function(v) {
        return step([n, v]);
      };
    }
    function step(op) {
      if (f)
        throw new TypeError("Generator is already executing.");
      while (g && (g = 0, op[0] && (_ = 0)), _)
        try {
          if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
            return t;
          if (y = 0, t)
            op = [op[0] & 2, t.value];
          switch (op[0]) {
            case 0:
            case 1:
              t = op;
              break;
            case 4:
              _.label++;
              return { value: op[1], done: false };
            case 5:
              _.label++;
              y = op[1];
              op = [0];
              continue;
            case 7:
              op = _.ops.pop();
              _.trys.pop();
              continue;
            default:
              if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                _ = 0;
                continue;
              }
              if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                _.label = op[1];
                break;
              }
              if (op[0] === 6 && _.label < t[1]) {
                _.label = t[1];
                t = op;
                break;
              }
              if (t && _.label < t[2]) {
                _.label = t[2];
                _.ops.push(op);
                break;
              }
              if (t[2])
                _.ops.pop();
              _.trys.pop();
              continue;
          }
          op = body.call(thisArg, _);
        } catch (e) {
          op = [6, e];
          y = 0;
        } finally {
          f = t = 0;
        }
      if (op[0] & 5)
        throw op[1];
      return { value: op[0] ? op[1] : void 0, done: true };
    }
  }
  function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m)
      return m.call(o);
    if (o && typeof o.length === "number")
      return {
        next: function() {
          if (o && i >= o.length)
            o = void 0;
          return { value: o && o[i++], done: !o };
        }
      };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
  }
  function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m)
      return o;
    var i = m.call(o), r, ar = [], e;
    try {
      while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
        ar.push(r.value);
    } catch (error) {
      e = { error };
    } finally {
      try {
        if (r && !r.done && (m = i["return"]))
          m.call(i);
      } finally {
        if (e)
          throw e.error;
      }
    }
    return ar;
  }
  function __spreadArray(to, from2, pack) {
    if (pack || arguments.length === 2)
      for (var i = 0, l = from2.length, ar; i < l; i++) {
        if (ar || !(i in from2)) {
          if (!ar)
            ar = Array.prototype.slice.call(from2, 0, i);
          ar[i] = from2[i];
        }
      }
    return to.concat(ar || Array.prototype.slice.call(from2));
  }
  function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
  }
  function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator)
      throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = Object.create((typeof AsyncIterator === "function" ? AsyncIterator : Object).prototype), verb("next"), verb("throw"), verb("return", awaitReturn), i[Symbol.asyncIterator] = function() {
      return this;
    }, i;
    function awaitReturn(f) {
      return function(v) {
        return Promise.resolve(v).then(f, reject);
      };
    }
    function verb(n, f) {
      if (g[n]) {
        i[n] = function(v) {
          return new Promise(function(a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
        if (f)
          i[n] = f(i[n]);
      }
    }
    function resume(n, v) {
      try {
        step(g[n](v));
      } catch (e) {
        settle(q[0][3], e);
      }
    }
    function step(r) {
      r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
    }
    function fulfill(value) {
      resume("next", value);
    }
    function reject(value) {
      resume("throw", value);
    }
    function settle(f, v) {
      if (f(v), q.shift(), q.length)
        resume(q[0][0], q[0][1]);
    }
  }
  function __asyncValues(o) {
    if (!Symbol.asyncIterator)
      throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
      return this;
    }, i);
    function verb(n) {
      i[n] = o[n] && function(v) {
        return new Promise(function(resolve, reject) {
          v = o[n](v), settle(resolve, reject, v.done, v.value);
        });
      };
    }
    function settle(resolve, reject, d, v) {
      Promise.resolve(v).then(function(v2) {
        resolve({ value: v2, done: d });
      }, reject);
    }
  }
  typeof SuppressedError === "function" ? SuppressedError : function(error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
  };
  var isArrayLike = function(x) {
    return x && typeof x.length === "number" && typeof x !== "function";
  };
  function isPromise(value) {
    return isFunction(value === null || value === void 0 ? void 0 : value.then);
  }
  function createErrorClass(createImpl) {
    var _super = function(instance) {
      Error.call(instance);
      instance.stack = new Error().stack;
    };
    var ctorFunc = createImpl(_super);
    ctorFunc.prototype = Object.create(Error.prototype);
    ctorFunc.prototype.constructor = ctorFunc;
    return ctorFunc;
  }
  var UnsubscriptionError = createErrorClass(function(_super) {
    return function UnsubscriptionErrorImpl(errors) {
      _super(this);
      this.message = errors ? errors.length + " errors occurred during unsubscription:\n" + errors.map(function(err, i) {
        return i + 1 + ") " + err.toString();
      }).join("\n  ") : "";
      this.name = "UnsubscriptionError";
      this.errors = errors;
    };
  });
  function arrRemove(arr, item) {
    if (arr) {
      var index = arr.indexOf(item);
      0 <= index && arr.splice(index, 1);
    }
  }
  var Subscription = function() {
    function Subscription2(initialTeardown) {
      this.initialTeardown = initialTeardown;
      this.closed = false;
      this._parentage = null;
      this._finalizers = null;
    }
    Subscription2.prototype.unsubscribe = function() {
      var e_1, _a, e_2, _b;
      var errors;
      if (!this.closed) {
        this.closed = true;
        var _parentage = this._parentage;
        if (_parentage) {
          this._parentage = null;
          if (Array.isArray(_parentage)) {
            try {
              for (var _parentage_1 = __values(_parentage), _parentage_1_1 = _parentage_1.next(); !_parentage_1_1.done; _parentage_1_1 = _parentage_1.next()) {
                var parent_1 = _parentage_1_1.value;
                parent_1.remove(this);
              }
            } catch (e_1_1) {
              e_1 = { error: e_1_1 };
            } finally {
              try {
                if (_parentage_1_1 && !_parentage_1_1.done && (_a = _parentage_1.return))
                  _a.call(_parentage_1);
              } finally {
                if (e_1)
                  throw e_1.error;
              }
            }
          } else {
            _parentage.remove(this);
          }
        }
        var initialFinalizer = this.initialTeardown;
        if (isFunction(initialFinalizer)) {
          try {
            initialFinalizer();
          } catch (e) {
            errors = e instanceof UnsubscriptionError ? e.errors : [e];
          }
        }
        var _finalizers = this._finalizers;
        if (_finalizers) {
          this._finalizers = null;
          try {
            for (var _finalizers_1 = __values(_finalizers), _finalizers_1_1 = _finalizers_1.next(); !_finalizers_1_1.done; _finalizers_1_1 = _finalizers_1.next()) {
              var finalizer = _finalizers_1_1.value;
              try {
                execFinalizer(finalizer);
              } catch (err) {
                errors = errors !== null && errors !== void 0 ? errors : [];
                if (err instanceof UnsubscriptionError) {
                  errors = __spreadArray(__spreadArray([], __read(errors)), __read(err.errors));
                } else {
                  errors.push(err);
                }
              }
            }
          } catch (e_2_1) {
            e_2 = { error: e_2_1 };
          } finally {
            try {
              if (_finalizers_1_1 && !_finalizers_1_1.done && (_b = _finalizers_1.return))
                _b.call(_finalizers_1);
            } finally {
              if (e_2)
                throw e_2.error;
            }
          }
        }
        if (errors) {
          throw new UnsubscriptionError(errors);
        }
      }
    };
    Subscription2.prototype.add = function(teardown) {
      var _a;
      if (teardown && teardown !== this) {
        if (this.closed) {
          execFinalizer(teardown);
        } else {
          if (teardown instanceof Subscription2) {
            if (teardown.closed || teardown._hasParent(this)) {
              return;
            }
            teardown._addParent(this);
          }
          (this._finalizers = (_a = this._finalizers) !== null && _a !== void 0 ? _a : []).push(teardown);
        }
      }
    };
    Subscription2.prototype._hasParent = function(parent) {
      var _parentage = this._parentage;
      return _parentage === parent || Array.isArray(_parentage) && _parentage.includes(parent);
    };
    Subscription2.prototype._addParent = function(parent) {
      var _parentage = this._parentage;
      this._parentage = Array.isArray(_parentage) ? (_parentage.push(parent), _parentage) : _parentage ? [_parentage, parent] : parent;
    };
    Subscription2.prototype._removeParent = function(parent) {
      var _parentage = this._parentage;
      if (_parentage === parent) {
        this._parentage = null;
      } else if (Array.isArray(_parentage)) {
        arrRemove(_parentage, parent);
      }
    };
    Subscription2.prototype.remove = function(teardown) {
      var _finalizers = this._finalizers;
      _finalizers && arrRemove(_finalizers, teardown);
      if (teardown instanceof Subscription2) {
        teardown._removeParent(this);
      }
    };
    Subscription2.EMPTY = function() {
      var empty = new Subscription2();
      empty.closed = true;
      return empty;
    }();
    return Subscription2;
  }();
  Subscription.EMPTY;
  function isSubscription(value) {
    return value instanceof Subscription || value && "closed" in value && isFunction(value.remove) && isFunction(value.add) && isFunction(value.unsubscribe);
  }
  function execFinalizer(finalizer) {
    if (isFunction(finalizer)) {
      finalizer();
    } else {
      finalizer.unsubscribe();
    }
  }
  var config = {
    onUnhandledError: null,
    onStoppedNotification: null,
    Promise: void 0,
    useDeprecatedSynchronousErrorHandling: false,
    useDeprecatedNextContext: false
  };
  var timeoutProvider = {
    setTimeout: function(handler, timeout) {
      var args = [];
      for (var _i = 2; _i < arguments.length; _i++) {
        args[_i - 2] = arguments[_i];
      }
      return setTimeout.apply(void 0, __spreadArray([handler, timeout], __read(args)));
    },
    clearTimeout: function(handle) {
      return (clearTimeout)(handle);
    },
    delegate: void 0
  };
  function reportUnhandledError(err) {
    timeoutProvider.setTimeout(function() {
      {
        throw err;
      }
    });
  }
  function noop() {
  }
  function errorContext(cb) {
    {
      cb();
    }
  }
  var Subscriber = function(_super) {
    __extends(Subscriber2, _super);
    function Subscriber2(destination) {
      var _this = _super.call(this) || this;
      _this.isStopped = false;
      if (destination) {
        _this.destination = destination;
        if (isSubscription(destination)) {
          destination.add(_this);
        }
      } else {
        _this.destination = EMPTY_OBSERVER;
      }
      return _this;
    }
    Subscriber2.create = function(next, error, complete) {
      return new SafeSubscriber(next, error, complete);
    };
    Subscriber2.prototype.next = function(value) {
      if (this.isStopped)
        ;
      else {
        this._next(value);
      }
    };
    Subscriber2.prototype.error = function(err) {
      if (this.isStopped)
        ;
      else {
        this.isStopped = true;
        this._error(err);
      }
    };
    Subscriber2.prototype.complete = function() {
      if (this.isStopped)
        ;
      else {
        this.isStopped = true;
        this._complete();
      }
    };
    Subscriber2.prototype.unsubscribe = function() {
      if (!this.closed) {
        this.isStopped = true;
        _super.prototype.unsubscribe.call(this);
        this.destination = null;
      }
    };
    Subscriber2.prototype._next = function(value) {
      this.destination.next(value);
    };
    Subscriber2.prototype._error = function(err) {
      try {
        this.destination.error(err);
      } finally {
        this.unsubscribe();
      }
    };
    Subscriber2.prototype._complete = function() {
      try {
        this.destination.complete();
      } finally {
        this.unsubscribe();
      }
    };
    return Subscriber2;
  }(Subscription);
  var _bind = Function.prototype.bind;
  function bind(fn, thisArg) {
    return _bind.call(fn, thisArg);
  }
  var ConsumerObserver = function() {
    function ConsumerObserver2(partialObserver) {
      this.partialObserver = partialObserver;
    }
    ConsumerObserver2.prototype.next = function(value) {
      var partialObserver = this.partialObserver;
      if (partialObserver.next) {
        try {
          partialObserver.next(value);
        } catch (error) {
          handleUnhandledError(error);
        }
      }
    };
    ConsumerObserver2.prototype.error = function(err) {
      var partialObserver = this.partialObserver;
      if (partialObserver.error) {
        try {
          partialObserver.error(err);
        } catch (error) {
          handleUnhandledError(error);
        }
      } else {
        handleUnhandledError(err);
      }
    };
    ConsumerObserver2.prototype.complete = function() {
      var partialObserver = this.partialObserver;
      if (partialObserver.complete) {
        try {
          partialObserver.complete();
        } catch (error) {
          handleUnhandledError(error);
        }
      }
    };
    return ConsumerObserver2;
  }();
  var SafeSubscriber = function(_super) {
    __extends(SafeSubscriber2, _super);
    function SafeSubscriber2(observerOrNext, error, complete) {
      var _this = _super.call(this) || this;
      var partialObserver;
      if (isFunction(observerOrNext) || !observerOrNext) {
        partialObserver = {
          next: observerOrNext !== null && observerOrNext !== void 0 ? observerOrNext : void 0,
          error: error !== null && error !== void 0 ? error : void 0,
          complete: complete !== null && complete !== void 0 ? complete : void 0
        };
      } else {
        var context_1;
        if (_this && config.useDeprecatedNextContext) {
          context_1 = Object.create(observerOrNext);
          context_1.unsubscribe = function() {
            return _this.unsubscribe();
          };
          partialObserver = {
            next: observerOrNext.next && bind(observerOrNext.next, context_1),
            error: observerOrNext.error && bind(observerOrNext.error, context_1),
            complete: observerOrNext.complete && bind(observerOrNext.complete, context_1)
          };
        } else {
          partialObserver = observerOrNext;
        }
      }
      _this.destination = new ConsumerObserver(partialObserver);
      return _this;
    }
    return SafeSubscriber2;
  }(Subscriber);
  function handleUnhandledError(error) {
    {
      reportUnhandledError(error);
    }
  }
  function defaultErrorHandler(err) {
    throw err;
  }
  var EMPTY_OBSERVER = {
    closed: true,
    next: noop,
    error: defaultErrorHandler,
    complete: noop
  };
  var observable = function() {
    return typeof Symbol === "function" && Symbol.observable || "@@observable";
  }();
  function identity(x) {
    return x;
  }
  function pipeFromArray(fns) {
    if (fns.length === 0) {
      return identity;
    }
    if (fns.length === 1) {
      return fns[0];
    }
    return function piped(input) {
      return fns.reduce(function(prev, fn) {
        return fn(prev);
      }, input);
    };
  }
  var Observable = function() {
    function Observable2(subscribe) {
      if (subscribe) {
        this._subscribe = subscribe;
      }
    }
    Observable2.prototype.lift = function(operator) {
      var observable2 = new Observable2();
      observable2.source = this;
      observable2.operator = operator;
      return observable2;
    };
    Observable2.prototype.subscribe = function(observerOrNext, error, complete) {
      var _this = this;
      var subscriber = isSubscriber(observerOrNext) ? observerOrNext : new SafeSubscriber(observerOrNext, error, complete);
      errorContext(function() {
        var _a = _this, operator = _a.operator, source = _a.source;
        subscriber.add(operator ? operator.call(subscriber, source) : source ? _this._subscribe(subscriber) : _this._trySubscribe(subscriber));
      });
      return subscriber;
    };
    Observable2.prototype._trySubscribe = function(sink) {
      try {
        return this._subscribe(sink);
      } catch (err) {
        sink.error(err);
      }
    };
    Observable2.prototype.forEach = function(next, promiseCtor) {
      var _this = this;
      promiseCtor = getPromiseCtor(promiseCtor);
      return new promiseCtor(function(resolve, reject) {
        var subscriber = new SafeSubscriber({
          next: function(value) {
            try {
              next(value);
            } catch (err) {
              reject(err);
              subscriber.unsubscribe();
            }
          },
          error: reject,
          complete: resolve
        });
        _this.subscribe(subscriber);
      });
    };
    Observable2.prototype._subscribe = function(subscriber) {
      var _a;
      return (_a = this.source) === null || _a === void 0 ? void 0 : _a.subscribe(subscriber);
    };
    Observable2.prototype[observable] = function() {
      return this;
    };
    Observable2.prototype.pipe = function() {
      var operations = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        operations[_i] = arguments[_i];
      }
      return pipeFromArray(operations)(this);
    };
    Observable2.prototype.toPromise = function(promiseCtor) {
      var _this = this;
      promiseCtor = getPromiseCtor(promiseCtor);
      return new promiseCtor(function(resolve, reject) {
        var value;
        _this.subscribe(function(x) {
          return value = x;
        }, function(err) {
          return reject(err);
        }, function() {
          return resolve(value);
        });
      });
    };
    Observable2.create = function(subscribe) {
      return new Observable2(subscribe);
    };
    return Observable2;
  }();
  function getPromiseCtor(promiseCtor) {
    var _a;
    return (_a = promiseCtor !== null && promiseCtor !== void 0 ? promiseCtor : config.Promise) !== null && _a !== void 0 ? _a : Promise;
  }
  function isObserver(value) {
    return value && isFunction(value.next) && isFunction(value.error) && isFunction(value.complete);
  }
  function isSubscriber(value) {
    return value && value instanceof Subscriber || isObserver(value) && isSubscription(value);
  }
  function isInteropObservable(input) {
    return isFunction(input[observable]);
  }
  function isAsyncIterable(obj) {
    return Symbol.asyncIterator && isFunction(obj === null || obj === void 0 ? void 0 : obj[Symbol.asyncIterator]);
  }
  function createInvalidObservableTypeError(input) {
    return new TypeError("You provided " + (input !== null && typeof input === "object" ? "an invalid object" : "'" + input + "'") + " where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.");
  }
  function getSymbolIterator() {
    if (typeof Symbol !== "function" || !Symbol.iterator) {
      return "@@iterator";
    }
    return Symbol.iterator;
  }
  var iterator = getSymbolIterator();
  function isIterable(input) {
    return isFunction(input === null || input === void 0 ? void 0 : input[iterator]);
  }
  function readableStreamLikeToAsyncGenerator(readableStream) {
    return __asyncGenerator(this, arguments, function readableStreamLikeToAsyncGenerator_1() {
      var reader, _a, value, done;
      return __generator(this, function(_b) {
        switch (_b.label) {
          case 0:
            reader = readableStream.getReader();
            _b.label = 1;
          case 1:
            _b.trys.push([1, , 9, 10]);
            _b.label = 2;
          case 2:
            return [4, __await(reader.read())];
          case 3:
            _a = _b.sent(), value = _a.value, done = _a.done;
            if (!done)
              return [3, 5];
            return [4, __await(void 0)];
          case 4:
            return [2, _b.sent()];
          case 5:
            return [4, __await(value)];
          case 6:
            return [4, _b.sent()];
          case 7:
            _b.sent();
            return [3, 2];
          case 8:
            return [3, 10];
          case 9:
            reader.releaseLock();
            return [7];
          case 10:
            return [2];
        }
      });
    });
  }
  function isReadableStreamLike(obj) {
    return isFunction(obj === null || obj === void 0 ? void 0 : obj.getReader);
  }
  function innerFrom(input) {
    if (input instanceof Observable) {
      return input;
    }
    if (input != null) {
      if (isInteropObservable(input)) {
        return fromInteropObservable(input);
      }
      if (isArrayLike(input)) {
        return fromArrayLike(input);
      }
      if (isPromise(input)) {
        return fromPromise(input);
      }
      if (isAsyncIterable(input)) {
        return fromAsyncIterable(input);
      }
      if (isIterable(input)) {
        return fromIterable(input);
      }
      if (isReadableStreamLike(input)) {
        return fromReadableStreamLike(input);
      }
    }
    throw createInvalidObservableTypeError(input);
  }
  function fromInteropObservable(obj) {
    return new Observable(function(subscriber) {
      var obs = obj[observable]();
      if (isFunction(obs.subscribe)) {
        return obs.subscribe(subscriber);
      }
      throw new TypeError("Provided object does not correctly implement Symbol.observable");
    });
  }
  function fromArrayLike(array) {
    return new Observable(function(subscriber) {
      for (var i = 0; i < array.length && !subscriber.closed; i++) {
        subscriber.next(array[i]);
      }
      subscriber.complete();
    });
  }
  function fromPromise(promise) {
    return new Observable(function(subscriber) {
      promise.then(function(value) {
        if (!subscriber.closed) {
          subscriber.next(value);
          subscriber.complete();
        }
      }, function(err) {
        return subscriber.error(err);
      }).then(null, reportUnhandledError);
    });
  }
  function fromIterable(iterable) {
    return new Observable(function(subscriber) {
      var e_1, _a;
      try {
        for (var iterable_1 = __values(iterable), iterable_1_1 = iterable_1.next(); !iterable_1_1.done; iterable_1_1 = iterable_1.next()) {
          var value = iterable_1_1.value;
          subscriber.next(value);
          if (subscriber.closed) {
            return;
          }
        }
      } catch (e_1_1) {
        e_1 = { error: e_1_1 };
      } finally {
        try {
          if (iterable_1_1 && !iterable_1_1.done && (_a = iterable_1.return))
            _a.call(iterable_1);
        } finally {
          if (e_1)
            throw e_1.error;
        }
      }
      subscriber.complete();
    });
  }
  function fromAsyncIterable(asyncIterable) {
    return new Observable(function(subscriber) {
      process(asyncIterable, subscriber).catch(function(err) {
        return subscriber.error(err);
      });
    });
  }
  function fromReadableStreamLike(readableStream) {
    return fromAsyncIterable(readableStreamLikeToAsyncGenerator(readableStream));
  }
  function process(asyncIterable, subscriber) {
    var asyncIterable_1, asyncIterable_1_1;
    var e_2, _a;
    return __awaiter(this, void 0, void 0, function() {
      var value, e_2_1;
      return __generator(this, function(_b) {
        switch (_b.label) {
          case 0:
            _b.trys.push([0, 5, 6, 11]);
            asyncIterable_1 = __asyncValues(asyncIterable);
            _b.label = 1;
          case 1:
            return [4, asyncIterable_1.next()];
          case 2:
            if (!(asyncIterable_1_1 = _b.sent(), !asyncIterable_1_1.done))
              return [3, 4];
            value = asyncIterable_1_1.value;
            subscriber.next(value);
            if (subscriber.closed) {
              return [2];
            }
            _b.label = 3;
          case 3:
            return [3, 1];
          case 4:
            return [3, 11];
          case 5:
            e_2_1 = _b.sent();
            e_2 = { error: e_2_1 };
            return [3, 11];
          case 6:
            _b.trys.push([6, , 9, 10]);
            if (!(asyncIterable_1_1 && !asyncIterable_1_1.done && (_a = asyncIterable_1.return)))
              return [3, 8];
            return [4, _a.call(asyncIterable_1)];
          case 7:
            _b.sent();
            _b.label = 8;
          case 8:
            return [3, 10];
          case 9:
            if (e_2)
              throw e_2.error;
            return [7];
          case 10:
            return [7];
          case 11:
            subscriber.complete();
            return [2];
        }
      });
    });
  }
  function createOperatorSubscriber(destination, onNext, onComplete, onError, onFinalize) {
    return new OperatorSubscriber(destination, onNext, onComplete, onError, onFinalize);
  }
  var OperatorSubscriber = function(_super) {
    __extends(OperatorSubscriber2, _super);
    function OperatorSubscriber2(destination, onNext, onComplete, onError, onFinalize, shouldUnsubscribe) {
      var _this = _super.call(this, destination) || this;
      _this.onFinalize = onFinalize;
      _this.shouldUnsubscribe = shouldUnsubscribe;
      _this._next = onNext ? function(value) {
        try {
          onNext(value);
        } catch (err) {
          destination.error(err);
        }
      } : _super.prototype._next;
      _this._error = onError ? function(err) {
        try {
          onError(err);
        } catch (err2) {
          destination.error(err2);
        } finally {
          this.unsubscribe();
        }
      } : _super.prototype._error;
      _this._complete = onComplete ? function() {
        try {
          onComplete();
        } catch (err) {
          destination.error(err);
        } finally {
          this.unsubscribe();
        }
      } : _super.prototype._complete;
      return _this;
    }
    OperatorSubscriber2.prototype.unsubscribe = function() {
      var _a;
      if (!this.shouldUnsubscribe || this.shouldUnsubscribe()) {
        var closed_1 = this.closed;
        _super.prototype.unsubscribe.call(this);
        !closed_1 && ((_a = this.onFinalize) === null || _a === void 0 ? void 0 : _a.call(this));
      }
    };
    return OperatorSubscriber2;
  }(Subscriber);
  function executeSchedule(parentSubscription, scheduler, work, delay, repeat) {
    if (delay === void 0) {
      delay = 0;
    }
    if (repeat === void 0) {
      repeat = false;
    }
    var scheduleSubscription = scheduler.schedule(function() {
      work();
      if (repeat) {
        parentSubscription.add(this.schedule(null, delay));
      } else {
        this.unsubscribe();
      }
    }, delay);
    parentSubscription.add(scheduleSubscription);
    if (!repeat) {
      return scheduleSubscription;
    }
  }
  function map(project, thisArg) {
    return operate(function(source, subscriber) {
      var index = 0;
      source.subscribe(createOperatorSubscriber(subscriber, function(value) {
        subscriber.next(project.call(thisArg, value, index++));
      }));
    });
  }
  function mergeInternals(source, subscriber, project, concurrent, onBeforeNext, expand, innerSubScheduler, additionalFinalizer) {
    var buffer = [];
    var active = 0;
    var index = 0;
    var isComplete = false;
    var checkComplete = function() {
      if (isComplete && !buffer.length && !active) {
        subscriber.complete();
      }
    };
    var outerNext = function(value) {
      return active < concurrent ? doInnerSub(value) : buffer.push(value);
    };
    var doInnerSub = function(value) {
      expand && subscriber.next(value);
      active++;
      var innerComplete = false;
      innerFrom(project(value, index++)).subscribe(createOperatorSubscriber(subscriber, function(innerValue) {
        onBeforeNext === null || onBeforeNext === void 0 ? void 0 : onBeforeNext(innerValue);
        if (expand) {
          outerNext(innerValue);
        } else {
          subscriber.next(innerValue);
        }
      }, function() {
        innerComplete = true;
      }, void 0, function() {
        if (innerComplete) {
          try {
            active--;
            var _loop_1 = function() {
              var bufferedValue = buffer.shift();
              if (innerSubScheduler) {
                executeSchedule(subscriber, innerSubScheduler, function() {
                  return doInnerSub(bufferedValue);
                });
              } else {
                doInnerSub(bufferedValue);
              }
            };
            while (buffer.length && active < concurrent) {
              _loop_1();
            }
            checkComplete();
          } catch (err) {
            subscriber.error(err);
          }
        }
      }));
    };
    source.subscribe(createOperatorSubscriber(subscriber, outerNext, function() {
      isComplete = true;
      checkComplete();
    }));
    return function() {
      additionalFinalizer === null || additionalFinalizer === void 0 ? void 0 : additionalFinalizer();
    };
  }
  function mergeMap(project, resultSelector, concurrent) {
    if (concurrent === void 0) {
      concurrent = Infinity;
    }
    if (isFunction(resultSelector)) {
      return mergeMap(function(a, i) {
        return map(function(b, ii) {
          return resultSelector(a, b, i, ii);
        })(innerFrom(project(a, i)));
      }, concurrent);
    } else if (typeof resultSelector === "number") {
      concurrent = resultSelector;
    }
    return operate(function(source, subscriber) {
      return mergeInternals(source, subscriber, project, concurrent);
    });
  }
  function mergeAll(concurrent) {
    if (concurrent === void 0) {
      concurrent = Infinity;
    }
    return mergeMap(identity, concurrent);
  }
  function concatAll() {
    return mergeAll(1);
  }
  function concatMap(project, resultSelector) {
    return isFunction(resultSelector) ? mergeMap(project, resultSelector, 1) : mergeMap(project, 1);
  }
  const FrameScanner = {
    collectDirect(root) {
      return [...root.querySelectorAll("iframe")];
    },
    collectDeep(root) {
      const result = [];
      const collect = (node) => {
        for (const fr of node.querySelectorAll("iframe")) {
          result.push(fr);
          try {
            if (fr.contentDocument) {
              collect(fr.contentDocument.documentElement);
            }
          } catch (e) {  }
        }
      };
      collect(root);
      return rxjs.of(result);
    },
    collectDeepSync(root) {
      const result = [];
      const collect = (node) => {
        for (const fr of node.querySelectorAll("iframe")) {
          result.push(fr);
          try {
            if (fr.contentDocument) {
              collect(fr.contentDocument.documentElement);
            }
          } catch (e) {  }
        }
      };
      collect(root);
      return result;
    }
  };
  var Typr$1 = {};
  var Typr = {};
  Typr.parse = function(buff) {
    var bin = Typr._bin;
    var data = new Uint8Array(buff);
    var tag = bin.readASCII(data, 0, 4);
    if (tag == "ttcf") {
      var offset = 4;
      bin.readUshort(data, offset);
      offset += 2;
      bin.readUshort(data, offset);
      offset += 2;
      var numF = bin.readUint(data, offset);
      offset += 4;
      var fnts = [];
      for (var i = 0; i < numF; i++) {
        var foff = bin.readUint(data, offset);
        offset += 4;
        fnts.push(Typr._readFont(data, foff));
      }
      return fnts;
    } else
      return [Typr._readFont(data, 0)];
  };
  Typr._readFont = function(data, offset) {
    var bin = Typr._bin;
    var ooff = offset;
    bin.readFixed(data, offset);
    offset += 4;
    var numTables = bin.readUshort(data, offset);
    offset += 2;
    bin.readUshort(data, offset);
    offset += 2;
    bin.readUshort(data, offset);
    offset += 2;
    bin.readUshort(data, offset);
    offset += 2;
    var tags = [
      "cmap",
      "head",
      "hhea",
      "maxp",
      "hmtx",
      "name",
      "OS/2",
      "post",
      
      
      "loca",
      "glyf",
      "kern",
      
      
      "CFF ",
      "GPOS",
      "GSUB",
      "SVG "
      
    ];
    var obj = { _data: data, _offset: ooff };
    var tabs = {};
    for (var i = 0; i < numTables; i++) {
      var tag = bin.readASCII(data, offset, 4);
      offset += 4;
      bin.readUint(data, offset);
      offset += 4;
      var toffset = bin.readUint(data, offset);
      offset += 4;
      var length = bin.readUint(data, offset);
      offset += 4;
      tabs[tag] = { offset: toffset, length };
    }
    for (var i = 0; i < tags.length; i++) {
      var t = tags[i];
      if (tabs[t])
        obj[t.trim()] = Typr[t.trim()].parse(data, tabs[t].offset, tabs[t].length, obj);
    }
    return obj;
  };
  Typr._tabOffset = function(data, tab, foff) {
    var bin = Typr._bin;
    var numTables = bin.readUshort(data, foff + 4);
    var offset = foff + 12;
    for (var i = 0; i < numTables; i++) {
      var tag = bin.readASCII(data, offset, 4);
      offset += 4;
      bin.readUint(data, offset);
      offset += 4;
      var toffset = bin.readUint(data, offset);
      offset += 4;
      bin.readUint(data, offset);
      offset += 4;
      if (tag == tab)
        return toffset;
    }
    return 0;
  };
  Typr._bin = {
    readFixed: function(data, o) {
      return (data[o] << 8 | data[o + 1]) + (data[o + 2] << 8 | data[o + 3]) / (256 * 256 + 4);
    },
    readF2dot14: function(data, o) {
      var num = Typr._bin.readShort(data, o);
      return num / 16384;
    },
    readInt: function(buff, p) {
      return Typr._bin._view(buff).getInt32(p);
    },
    readInt8: function(buff, p) {
      return Typr._bin._view(buff).getInt8(p);
    },
    readShort: function(buff, p) {
      return Typr._bin._view(buff).getInt16(p);
    },
    readUshort: function(buff, p) {
      return Typr._bin._view(buff).getUint16(p);
    },
    readUshorts: function(buff, p, len) {
      var arr = [];
      for (var i = 0; i < len; i++)
        arr.push(Typr._bin.readUshort(buff, p + i * 2));
      return arr;
    },
    readUint: function(buff, p) {
      return Typr._bin._view(buff).getUint32(p);
    },
    readUint64: function(buff, p) {
      return Typr._bin.readUint(buff, p) * (4294967295 + 1) + Typr._bin.readUint(buff, p + 4);
    },
    readASCII: function(buff, p, l) {
      var s = "";
      for (var i = 0; i < l; i++)
        s += String.fromCharCode(buff[p + i]);
      return s;
    },
    readUnicode: function(buff, p, l) {
      var s = "";
      for (var i = 0; i < l; i++) {
        var c = buff[p++] << 8 | buff[p++];
        s += String.fromCharCode(c);
      }
      return s;
    },
    _tdec: typeof window !== "undefined" && window["TextDecoder"] ? new window["TextDecoder"]() : null,
    readUTF8: function(buff, p, l) {
      var tdec = Typr._bin._tdec;
      if (tdec && p == 0 && l == buff.length)
        return tdec["decode"](buff);
      return Typr._bin.readASCII(buff, p, l);
    },
    readBytes: function(buff, p, l) {
      var arr = [];
      for (var i = 0; i < l; i++)
        arr.push(buff[p + i]);
      return arr;
    },
    readASCIIArray: function(buff, p, l) {
      var s = [];
      for (var i = 0; i < l; i++)
        s.push(String.fromCharCode(buff[p + i]));
      return s;
    },
    _view: function(buff) {
      return buff._dataView || (buff._dataView = buff.buffer ? new DataView(buff.buffer, buff.byteOffset, buff.byteLength) : new DataView(new Uint8Array(buff).buffer));
    }
  };
  Typr._lctf = {};
  Typr._lctf.parse = function(data, offset, length, font, subt) {
    var bin = Typr._bin;
    var obj = {};
    var offset0 = offset;
    bin.readFixed(data, offset);
    offset += 4;
    var offScriptList = bin.readUshort(data, offset);
    offset += 2;
    var offFeatureList = bin.readUshort(data, offset);
    offset += 2;
    var offLookupList = bin.readUshort(data, offset);
    offset += 2;
    obj.scriptList = Typr._lctf.readScriptList(data, offset0 + offScriptList);
    obj.featureList = Typr._lctf.readFeatureList(data, offset0 + offFeatureList);
    obj.lookupList = Typr._lctf.readLookupList(data, offset0 + offLookupList, subt);
    return obj;
  };
  Typr._lctf.readLookupList = function(data, offset, subt) {
    var bin = Typr._bin;
    var offset0 = offset;
    var obj = [];
    var count = bin.readUshort(data, offset);
    offset += 2;
    for (var i = 0; i < count; i++) {
      var noff = bin.readUshort(data, offset);
      offset += 2;
      var lut = Typr._lctf.readLookupTable(data, offset0 + noff, subt);
      obj.push(lut);
    }
    return obj;
  };
  Typr._lctf.readLookupTable = function(data, offset, subt) {
    var bin = Typr._bin;
    var offset0 = offset;
    var obj = { tabs: [] };
    obj.ltype = bin.readUshort(data, offset);
    offset += 2;
    obj.flag = bin.readUshort(data, offset);
    offset += 2;
    var cnt = bin.readUshort(data, offset);
    offset += 2;
    var ltype = obj.ltype;
    for (var i = 0; i < cnt; i++) {
      var noff = bin.readUshort(data, offset);
      offset += 2;
      var tab = subt(data, ltype, offset0 + noff, obj);
      obj.tabs.push(tab);
    }
    return obj;
  };
  Typr._lctf.numOfOnes = function(n) {
    var num = 0;
    for (var i = 0; i < 32; i++)
      if ((n >>> i & 1) != 0)
        num++;
    return num;
  };
  Typr._lctf.readClassDef = function(data, offset) {
    var bin = Typr._bin;
    var obj = [];
    var format = bin.readUshort(data, offset);
    offset += 2;
    if (format == 1) {
      var startGlyph = bin.readUshort(data, offset);
      offset += 2;
      var glyphCount = bin.readUshort(data, offset);
      offset += 2;
      for (var i = 0; i < glyphCount; i++) {
        obj.push(startGlyph + i);
        obj.push(startGlyph + i);
        obj.push(bin.readUshort(data, offset));
        offset += 2;
      }
    }
    if (format == 2) {
      var count = bin.readUshort(data, offset);
      offset += 2;
      for (var i = 0; i < count; i++) {
        obj.push(bin.readUshort(data, offset));
        offset += 2;
        obj.push(bin.readUshort(data, offset));
        offset += 2;
        obj.push(bin.readUshort(data, offset));
        offset += 2;
      }
    }
    return obj;
  };
  Typr._lctf.getInterval = function(tab, val) {
    for (var i = 0; i < tab.length; i += 3) {
      var start = tab[i], end = tab[i + 1];
      tab[i + 2];
      if (start <= val && val <= end)
        return i;
    }
    return -1;
  };
  Typr._lctf.readCoverage = function(data, offset) {
    var bin = Typr._bin;
    var cvg = {};
    cvg.fmt = bin.readUshort(data, offset);
    offset += 2;
    var count = bin.readUshort(data, offset);
    offset += 2;
    if (cvg.fmt == 1)
      cvg.tab = bin.readUshorts(data, offset, count);
    if (cvg.fmt == 2)
      cvg.tab = bin.readUshorts(data, offset, count * 3);
    return cvg;
  };
  Typr._lctf.coverageIndex = function(cvg, val) {
    var tab = cvg.tab;
    if (cvg.fmt == 1)
      return tab.indexOf(val);
    if (cvg.fmt == 2) {
      var ind = Typr._lctf.getInterval(tab, val);
      if (ind != -1)
        return tab[ind + 2] + (val - tab[ind]);
    }
    return -1;
  };
  Typr._lctf.readFeatureList = function(data, offset) {
    var bin = Typr._bin;
    var offset0 = offset;
    var obj = [];
    var count = bin.readUshort(data, offset);
    offset += 2;
    for (var i = 0; i < count; i++) {
      var tag = bin.readASCII(data, offset, 4);
      offset += 4;
      var noff = bin.readUshort(data, offset);
      offset += 2;
      var feat = Typr._lctf.readFeatureTable(data, offset0 + noff);
      feat.tag = tag.trim();
      obj.push(feat);
    }
    return obj;
  };
  Typr._lctf.readFeatureTable = function(data, offset) {
    var bin = Typr._bin;
    var offset0 = offset;
    var feat = {};
    var featureParams = bin.readUshort(data, offset);
    offset += 2;
    if (featureParams > 0) {
      feat.featureParams = offset0 + featureParams;
    }
    var lookupCount = bin.readUshort(data, offset);
    offset += 2;
    feat.tab = [];
    for (var i = 0; i < lookupCount; i++)
      feat.tab.push(bin.readUshort(data, offset + 2 * i));
    return feat;
  };
  Typr._lctf.readScriptList = function(data, offset) {
    var bin = Typr._bin;
    var offset0 = offset;
    var obj = {};
    var count = bin.readUshort(data, offset);
    offset += 2;
    for (var i = 0; i < count; i++) {
      var tag = bin.readASCII(data, offset, 4);
      offset += 4;
      var noff = bin.readUshort(data, offset);
      offset += 2;
      obj[tag.trim()] = Typr._lctf.readScriptTable(data, offset0 + noff);
    }
    return obj;
  };
  Typr._lctf.readScriptTable = function(data, offset) {
    var bin = Typr._bin;
    var offset0 = offset;
    var obj = {};
    var defLangSysOff = bin.readUshort(data, offset);
    offset += 2;
    if (defLangSysOff > 0) {
      obj["default"] = Typr._lctf.readLangSysTable(data, offset0 + defLangSysOff);
    }
    var langSysCount = bin.readUshort(data, offset);
    offset += 2;
    for (var i = 0; i < langSysCount; i++) {
      var tag = bin.readASCII(data, offset, 4);
      offset += 4;
      var langSysOff = bin.readUshort(data, offset);
      offset += 2;
      obj[tag.trim()] = Typr._lctf.readLangSysTable(data, offset0 + langSysOff);
    }
    return obj;
  };
  Typr._lctf.readLangSysTable = function(data, offset) {
    var bin = Typr._bin;
    var obj = {};
    bin.readUshort(data, offset);
    offset += 2;
    obj.reqFeature = bin.readUshort(data, offset);
    offset += 2;
    var featureCount = bin.readUshort(data, offset);
    offset += 2;
    obj.features = bin.readUshorts(data, offset, featureCount);
    return obj;
  };
  Typr.CFF = {};
  Typr.CFF.parse = function(data, offset, length) {
    var bin = Typr._bin;
    data = new Uint8Array(data.buffer, offset, length);
    offset = 0;
    data[offset];
    offset++;
    data[offset];
    offset++;
    data[offset];
    offset++;
    data[offset];
    offset++;
    var ninds = [];
    offset = Typr.CFF.readIndex(data, offset, ninds);
    var names = [];
    for (var i = 0; i < ninds.length - 1; i++)
      names.push(bin.readASCII(data, offset + ninds[i], ninds[i + 1] - ninds[i]));
    offset += ninds[ninds.length - 1];
    var tdinds = [];
    offset = Typr.CFF.readIndex(data, offset, tdinds);
    var topDicts = [];
    for (var i = 0; i < tdinds.length - 1; i++)
      topDicts.push(Typr.CFF.readDict(data, offset + tdinds[i], offset + tdinds[i + 1]));
    offset += tdinds[tdinds.length - 1];
    var topdict = topDicts[0];
    var sinds = [];
    offset = Typr.CFF.readIndex(data, offset, sinds);
    var strings = [];
    for (var i = 0; i < sinds.length - 1; i++)
      strings.push(bin.readASCII(data, offset + sinds[i], sinds[i + 1] - sinds[i]));
    offset += sinds[sinds.length - 1];
    Typr.CFF.readSubrs(data, offset, topdict);
    if (topdict.CharStrings) {
      offset = topdict.CharStrings;
      var sinds = [];
      offset = Typr.CFF.readIndex(data, offset, sinds);
      var cstr = [];
      for (var i = 0; i < sinds.length - 1; i++)
        cstr.push(bin.readBytes(data, offset + sinds[i], sinds[i + 1] - sinds[i]));
      topdict.CharStrings = cstr;
    }
    if (topdict.ROS) {
      offset = topdict.FDArray;
      var fdind = [];
      offset = Typr.CFF.readIndex(data, offset, fdind);
      topdict.FDArray = [];
      for (var i = 0; i < fdind.length - 1; i++) {
        var dict = Typr.CFF.readDict(data, offset + fdind[i], offset + fdind[i + 1]);
        Typr.CFF._readFDict(data, dict, strings);
        topdict.FDArray.push(dict);
      }
      offset += fdind[fdind.length - 1];
      offset = topdict.FDSelect;
      topdict.FDSelect = [];
      var fmt = data[offset];
      offset++;
      if (fmt == 3) {
        var rns = bin.readUshort(data, offset);
        offset += 2;
        for (var i = 0; i < rns + 1; i++) {
          topdict.FDSelect.push(bin.readUshort(data, offset), data[offset + 2]);
          offset += 3;
        }
      } else
        throw fmt;
    }
    if (topdict.Encoding)
      topdict.Encoding = Typr.CFF.readEncoding(data, topdict.Encoding, topdict.CharStrings.length);
    if (topdict.charset)
      topdict.charset = Typr.CFF.readCharset(data, topdict.charset, topdict.CharStrings.length);
    Typr.CFF._readFDict(data, topdict, strings);
    return topdict;
  };
  Typr.CFF._readFDict = function(data, dict, ss) {
    var offset;
    if (dict.Private) {
      offset = dict.Private[1];
      dict.Private = Typr.CFF.readDict(data, offset, offset + dict.Private[0]);
      if (dict.Private.Subrs)
        Typr.CFF.readSubrs(data, offset + dict.Private.Subrs, dict.Private);
    }
    for (var p in dict)
      if (["FamilyName", "FontName", "FullName", "Notice", "version", "Copyright"].indexOf(p) != -1)
        dict[p] = ss[dict[p] - 426 + 35];
  };
  Typr.CFF.readSubrs = function(data, offset, obj) {
    var bin = Typr._bin;
    var gsubinds = [];
    offset = Typr.CFF.readIndex(data, offset, gsubinds);
    var bias, nSubrs = gsubinds.length;
    if (nSubrs < 1240)
      bias = 107;
    else if (nSubrs < 33900)
      bias = 1131;
    else
      bias = 32768;
    obj.Bias = bias;
    obj.Subrs = [];
    for (var i = 0; i < gsubinds.length - 1; i++)
      obj.Subrs.push(bin.readBytes(data, offset + gsubinds[i], gsubinds[i + 1] - gsubinds[i]));
  };
  Typr.CFF.tableSE = [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20,
    21,
    22,
    23,
    24,
    25,
    26,
    27,
    28,
    29,
    30,
    31,
    32,
    33,
    34,
    35,
    36,
    37,
    38,
    39,
    40,
    41,
    42,
    43,
    44,
    45,
    46,
    47,
    48,
    49,
    50,
    51,
    52,
    53,
    54,
    55,
    56,
    57,
    58,
    59,
    60,
    61,
    62,
    63,
    64,
    65,
    66,
    67,
    68,
    69,
    70,
    71,
    72,
    73,
    74,
    75,
    76,
    77,
    78,
    79,
    80,
    81,
    82,
    83,
    84,
    85,
    86,
    87,
    88,
    89,
    90,
    91,
    92,
    93,
    94,
    95,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    96,
    97,
    98,
    99,
    100,
    101,
    102,
    103,
    104,
    105,
    106,
    107,
    108,
    109,
    110,
    0,
    111,
    112,
    113,
    114,
    0,
    115,
    116,
    117,
    118,
    119,
    120,
    121,
    122,
    0,
    123,
    0,
    124,
    125,
    126,
    127,
    128,
    129,
    130,
    131,
    0,
    132,
    133,
    0,
    134,
    135,
    136,
    137,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    138,
    0,
    139,
    0,
    0,
    0,
    0,
    140,
    141,
    142,
    143,
    0,
    0,
    0,
    0,
    0,
    144,
    0,
    0,
    0,
    145,
    0,
    0,
    146,
    147,
    148,
    149,
    0,
    0,
    0,
    0
  ];
  Typr.CFF.glyphByUnicode = function(cff, code) {
    for (var i = 0; i < cff.charset.length; i++)
      if (cff.charset[i] == code)
        return i;
    return -1;
  };
  Typr.CFF.glyphBySE = function(cff, charcode) {
    if (charcode < 0 || charcode > 255)
      return -1;
    return Typr.CFF.glyphByUnicode(cff, Typr.CFF.tableSE[charcode]);
  };
  Typr.CFF.readEncoding = function(data, offset, num) {
    Typr._bin;
    var array = [".notdef"];
    var format = data[offset];
    offset++;
    if (format == 0) {
      var nCodes = data[offset];
      offset++;
      for (var i = 0; i < nCodes; i++)
        array.push(data[offset + i]);
    } else
      throw "error: unknown encoding format: " + format;
    return array;
  };
  Typr.CFF.readCharset = function(data, offset, num) {
    var bin = Typr._bin;
    var charset = [".notdef"];
    var format = data[offset];
    offset++;
    if (format == 0) {
      for (var i = 0; i < num; i++) {
        var first = bin.readUshort(data, offset);
        offset += 2;
        charset.push(first);
      }
    } else if (format == 1 || format == 2) {
      while (charset.length < num) {
        var first = bin.readUshort(data, offset);
        offset += 2;
        var nLeft = 0;
        if (format == 1) {
          nLeft = data[offset];
          offset++;
        } else {
          nLeft = bin.readUshort(data, offset);
          offset += 2;
        }
        for (var i = 0; i <= nLeft; i++) {
          charset.push(first);
          first++;
        }
      }
    } else
      throw "error: format: " + format;
    return charset;
  };
  Typr.CFF.readIndex = function(data, offset, inds) {
    var bin = Typr._bin;
    var count = bin.readUshort(data, offset) + 1;
    offset += 2;
    var offsize = data[offset];
    offset++;
    if (offsize == 1)
      for (var i = 0; i < count; i++)
        inds.push(data[offset + i]);
    else if (offsize == 2)
      for (var i = 0; i < count; i++)
        inds.push(bin.readUshort(data, offset + i * 2));
    else if (offsize == 3)
      for (var i = 0; i < count; i++)
        inds.push(bin.readUint(data, offset + i * 3 - 1) & 16777215);
    else if (count != 1)
      throw "unsupported offset size: " + offsize + ", count: " + count;
    offset += count * offsize;
    return offset - 1;
  };
  Typr.CFF.getCharString = function(data, offset, o) {
    var bin = Typr._bin;
    var b0 = data[offset], b1 = data[offset + 1];
    data[offset + 2];
    data[offset + 3];
    data[offset + 4];
    var vs = 1;
    var op = null, val = null;
    if (b0 <= 20) {
      op = b0;
      vs = 1;
    }
    if (b0 == 12) {
      op = b0 * 100 + b1;
      vs = 2;
    }
    if (21 <= b0 && b0 <= 27) {
      op = b0;
      vs = 1;
    }
    if (b0 == 28) {
      val = bin.readShort(data, offset + 1);
      vs = 3;
    }
    if (29 <= b0 && b0 <= 31) {
      op = b0;
      vs = 1;
    }
    if (32 <= b0 && b0 <= 246) {
      val = b0 - 139;
      vs = 1;
    }
    if (247 <= b0 && b0 <= 250) {
      val = (b0 - 247) * 256 + b1 + 108;
      vs = 2;
    }
    if (251 <= b0 && b0 <= 254) {
      val = -(b0 - 251) * 256 - b1 - 108;
      vs = 2;
    }
    if (b0 == 255) {
      val = bin.readInt(data, offset + 1) / 65535;
      vs = 5;
    }
    o.val = val != null ? val : "o" + op;
    o.size = vs;
  };
  Typr.CFF.readCharString = function(data, offset, length) {
    var end = offset + length;
    var bin = Typr._bin;
    var arr = [];
    while (offset < end) {
      var b0 = data[offset], b1 = data[offset + 1];
      data[offset + 2];
      data[offset + 3];
      data[offset + 4];
      var vs = 1;
      var op = null, val = null;
      if (b0 <= 20) {
        op = b0;
        vs = 1;
      }
      if (b0 == 12) {
        op = b0 * 100 + b1;
        vs = 2;
      }
      if (b0 == 19 || b0 == 20) {
        op = b0;
        vs = 2;
      }
      if (21 <= b0 && b0 <= 27) {
        op = b0;
        vs = 1;
      }
      if (b0 == 28) {
        val = bin.readShort(data, offset + 1);
        vs = 3;
      }
      if (29 <= b0 && b0 <= 31) {
        op = b0;
        vs = 1;
      }
      if (32 <= b0 && b0 <= 246) {
        val = b0 - 139;
        vs = 1;
      }
      if (247 <= b0 && b0 <= 250) {
        val = (b0 - 247) * 256 + b1 + 108;
        vs = 2;
      }
      if (251 <= b0 && b0 <= 254) {
        val = -(b0 - 251) * 256 - b1 - 108;
        vs = 2;
      }
      if (b0 == 255) {
        val = bin.readInt(data, offset + 1) / 65535;
        vs = 5;
      }
      arr.push(val != null ? val : "o" + op);
      offset += vs;
    }
    return arr;
  };
  Typr.CFF.readDict = function(data, offset, end) {
    var bin = Typr._bin;
    var dict = {};
    var carr = [];
    while (offset < end) {
      var b0 = data[offset], b1 = data[offset + 1];
      data[offset + 2];
      data[offset + 3];
      data[offset + 4];
      var vs = 1;
      var key = null, val = null;
      if (b0 == 28) {
        val = bin.readShort(data, offset + 1);
        vs = 3;
      }
      if (b0 == 29) {
        val = bin.readInt(data, offset + 1);
        vs = 5;
      }
      if (32 <= b0 && b0 <= 246) {
        val = b0 - 139;
        vs = 1;
      }
      if (247 <= b0 && b0 <= 250) {
        val = (b0 - 247) * 256 + b1 + 108;
        vs = 2;
      }
      if (251 <= b0 && b0 <= 254) {
        val = -(b0 - 251) * 256 - b1 - 108;
        vs = 2;
      }
      if (b0 == 255) {
        val = bin.readInt(data, offset + 1) / 65535;
        vs = 5;
        throw "unknown number";
      }
      if (b0 == 30) {
        var nibs = [];
        vs = 1;
        while (true) {
          var b = data[offset + vs];
          vs++;
          var nib0 = b >> 4, nib1 = b & 15;
          if (nib0 != 15)
            nibs.push(nib0);
          if (nib1 != 15)
            nibs.push(nib1);
          if (nib1 == 15)
            break;
        }
        var s = "";
        var chars = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, ".", "e", "e-", "reserved", "-", "endOfNumber"];
        for (var i = 0; i < nibs.length; i++)
          s += chars[nibs[i]];
        val = parseFloat(s);
      }
      if (b0 <= 21) {
        var keys = [
          "version",
          "Notice",
          "FullName",
          "FamilyName",
          "Weight",
          "FontBBox",
          "BlueValues",
          "OtherBlues",
          "FamilyBlues",
          "FamilyOtherBlues",
          "StdHW",
          "StdVW",
          "escape",
          "UniqueID",
          "XUID",
          "charset",
          "Encoding",
          "CharStrings",
          "Private",
          "Subrs",
          "defaultWidthX",
          "nominalWidthX"
        ];
        key = keys[b0];
        vs = 1;
        if (b0 == 12) {
          var keys = [
            "Copyright",
            "isFixedPitch",
            "ItalicAngle",
            "UnderlinePosition",
            "UnderlineThickness",
            "PaintType",
            "CharstringType",
            "FontMatrix",
            "StrokeWidth",
            "BlueScale",
            "BlueShift",
            "BlueFuzz",
            "StemSnapH",
            "StemSnapV",
            "ForceBold",
            0,
            0,
            "LanguageGroup",
            "ExpansionFactor",
            "initialRandomSeed",
            "SyntheticBase",
            "PostScript",
            "BaseFontName",
            "BaseFontBlend",
            0,
            0,
            0,
            0,
            0,
            0,
            "ROS",
            "CIDFontVersion",
            "CIDFontRevision",
            "CIDFontType",
            "CIDCount",
            "UIDBase",
            "FDArray",
            "FDSelect",
            "FontName"
          ];
          key = keys[b1];
          vs = 2;
        }
      }
      if (key != null) {
        dict[key] = carr.length == 1 ? carr[0] : carr;
        carr = [];
      } else
        carr.push(val);
      offset += vs;
    }
    return dict;
  };
  Typr.cmap = {};
  Typr.cmap.parse = function(data, offset, length) {
    data = new Uint8Array(data.buffer, offset, length);
    offset = 0;
    var bin = Typr._bin;
    var obj = {};
    bin.readUshort(data, offset);
    offset += 2;
    var numTables = bin.readUshort(data, offset);
    offset += 2;
    var offs = [];
    obj.tables = [];
    for (var i = 0; i < numTables; i++) {
      var platformID = bin.readUshort(data, offset);
      offset += 2;
      var encodingID = bin.readUshort(data, offset);
      offset += 2;
      var noffset = bin.readUint(data, offset);
      offset += 4;
      var id = "p" + platformID + "e" + encodingID;
      var tind = offs.indexOf(noffset);
      if (tind == -1) {
        tind = obj.tables.length;
        var subt;
        offs.push(noffset);
        var format = bin.readUshort(data, noffset);
        if (format == 0)
          subt = Typr.cmap.parse0(data, noffset);
        else if (format == 4)
          subt = Typr.cmap.parse4(data, noffset);
        else if (format == 6)
          subt = Typr.cmap.parse6(data, noffset);
        else if (format == 12)
          subt = Typr.cmap.parse12(data, noffset);
        else
          console.warn("unknown format: " + format, platformID, encodingID, noffset);
        obj.tables.push(subt);
      }
      if (obj[id] != null)
        throw "multiple tables for one platform+encoding";
      obj[id] = tind;
    }
    return obj;
  };
  Typr.cmap.parse0 = function(data, offset) {
    var bin = Typr._bin;
    var obj = {};
    obj.format = bin.readUshort(data, offset);
    offset += 2;
    var len = bin.readUshort(data, offset);
    offset += 2;
    bin.readUshort(data, offset);
    offset += 2;
    obj.map = [];
    for (var i = 0; i < len - 6; i++)
      obj.map.push(data[offset + i]);
    return obj;
  };
  Typr.cmap.parse4 = function(data, offset) {
    var bin = Typr._bin;
    var offset0 = offset;
    var obj = {};
    obj.format = bin.readUshort(data, offset);
    offset += 2;
    var length = bin.readUshort(data, offset);
    offset += 2;
    bin.readUshort(data, offset);
    offset += 2;
    var segCountX2 = bin.readUshort(data, offset);
    offset += 2;
    var segCount = segCountX2 / 2;
    obj.searchRange = bin.readUshort(data, offset);
    offset += 2;
    obj.entrySelector = bin.readUshort(data, offset);
    offset += 2;
    obj.rangeShift = bin.readUshort(data, offset);
    offset += 2;
    obj.endCount = bin.readUshorts(data, offset, segCount);
    offset += segCount * 2;
    offset += 2;
    obj.startCount = bin.readUshorts(data, offset, segCount);
    offset += segCount * 2;
    obj.idDelta = [];
    for (var i = 0; i < segCount; i++) {
      obj.idDelta.push(bin.readShort(data, offset));
      offset += 2;
    }
    obj.idRangeOffset = bin.readUshorts(data, offset, segCount);
    offset += segCount * 2;
    obj.glyphIdArray = [];
    while (offset < offset0 + length) {
      obj.glyphIdArray.push(bin.readUshort(data, offset));
      offset += 2;
    }
    return obj;
  };
  Typr.cmap.parse6 = function(data, offset) {
    var bin = Typr._bin;
    var obj = {};
    obj.format = bin.readUshort(data, offset);
    offset += 2;
    bin.readUshort(data, offset);
    offset += 2;
    bin.readUshort(data, offset);
    offset += 2;
    obj.firstCode = bin.readUshort(data, offset);
    offset += 2;
    var entryCount = bin.readUshort(data, offset);
    offset += 2;
    obj.glyphIdArray = [];
    for (var i = 0; i < entryCount; i++) {
      obj.glyphIdArray.push(bin.readUshort(data, offset));
      offset += 2;
    }
    return obj;
  };
  Typr.cmap.parse12 = function(data, offset) {
    var bin = Typr._bin;
    var obj = {};
    obj.format = bin.readUshort(data, offset);
    offset += 2;
    offset += 2;
    bin.readUint(data, offset);
    offset += 4;
    bin.readUint(data, offset);
    offset += 4;
    var nGroups = bin.readUint(data, offset);
    offset += 4;
    obj.groups = [];
    for (var i = 0; i < nGroups; i++) {
      var off = offset + i * 12;
      var startCharCode = bin.readUint(data, off + 0);
      var endCharCode = bin.readUint(data, off + 4);
      var startGlyphID = bin.readUint(data, off + 8);
      obj.groups.push([startCharCode, endCharCode, startGlyphID]);
    }
    return obj;
  };
  Typr.glyf = {};
  Typr.glyf.parse = function(data, offset, length, font) {
    var obj = [];
    for (var g = 0; g < font.maxp.numGlyphs; g++)
      obj.push(null);
    return obj;
  };
  Typr.glyf._parseGlyf = function(font, g) {
    var bin = Typr._bin;
    var data = font._data;
    var offset = Typr._tabOffset(data, "glyf", font._offset) + font.loca[g];
    if (font.loca[g] == font.loca[g + 1])
      return null;
    var gl = {};
    gl.noc = bin.readShort(data, offset);
    offset += 2;
    gl.xMin = bin.readShort(data, offset);
    offset += 2;
    gl.yMin = bin.readShort(data, offset);
    offset += 2;
    gl.xMax = bin.readShort(data, offset);
    offset += 2;
    gl.yMax = bin.readShort(data, offset);
    offset += 2;
    if (gl.xMin >= gl.xMax || gl.yMin >= gl.yMax)
      return null;
    if (gl.noc > 0) {
      gl.endPts = [];
      for (var i = 0; i < gl.noc; i++) {
        gl.endPts.push(bin.readUshort(data, offset));
        offset += 2;
      }
      var instructionLength = bin.readUshort(data, offset);
      offset += 2;
      if (data.length - offset < instructionLength)
        return null;
      gl.instructions = bin.readBytes(data, offset, instructionLength);
      offset += instructionLength;
      var crdnum = gl.endPts[gl.noc - 1] + 1;
      gl.flags = [];
      for (var i = 0; i < crdnum; i++) {
        var flag = data[offset];
        offset++;
        gl.flags.push(flag);
        if ((flag & 8) != 0) {
          var rep = data[offset];
          offset++;
          for (var j = 0; j < rep; j++) {
            gl.flags.push(flag);
            i++;
          }
        }
      }
      gl.xs = [];
      for (var i = 0; i < crdnum; i++) {
        var i8 = (gl.flags[i] & 2) != 0, same = (gl.flags[i] & 16) != 0;
        if (i8) {
          gl.xs.push(same ? data[offset] : -data[offset]);
          offset++;
        } else {
          if (same)
            gl.xs.push(0);
          else {
            gl.xs.push(bin.readShort(data, offset));
            offset += 2;
          }
        }
      }
      gl.ys = [];
      for (var i = 0; i < crdnum; i++) {
        var i8 = (gl.flags[i] & 4) != 0, same = (gl.flags[i] & 32) != 0;
        if (i8) {
          gl.ys.push(same ? data[offset] : -data[offset]);
          offset++;
        } else {
          if (same)
            gl.ys.push(0);
          else {
            gl.ys.push(bin.readShort(data, offset));
            offset += 2;
          }
        }
      }
      var x = 0, y = 0;
      for (var i = 0; i < crdnum; i++) {
        x += gl.xs[i];
        y += gl.ys[i];
        gl.xs[i] = x;
        gl.ys[i] = y;
      }
    } else {
      var ARG_1_AND_2_ARE_WORDS = 1 << 0;
      var ARGS_ARE_XY_VALUES = 1 << 1;
      var WE_HAVE_A_SCALE = 1 << 3;
      var MORE_COMPONENTS = 1 << 5;
      var WE_HAVE_AN_X_AND_Y_SCALE = 1 << 6;
      var WE_HAVE_A_TWO_BY_TWO = 1 << 7;
      var WE_HAVE_INSTRUCTIONS = 1 << 8;
      gl.parts = [];
      var flags;
      do {
        flags = bin.readUshort(data, offset);
        offset += 2;
        var part = { m: { a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0 }, p1: -1, p2: -1 };
        gl.parts.push(part);
        part.glyphIndex = bin.readUshort(data, offset);
        offset += 2;
        if (flags & ARG_1_AND_2_ARE_WORDS) {
          var arg1 = bin.readShort(data, offset);
          offset += 2;
          var arg2 = bin.readShort(data, offset);
          offset += 2;
        } else {
          var arg1 = bin.readInt8(data, offset);
          offset++;
          var arg2 = bin.readInt8(data, offset);
          offset++;
        }
        if (flags & ARGS_ARE_XY_VALUES) {
          part.m.tx = arg1;
          part.m.ty = arg2;
        } else {
          part.p1 = arg1;
          part.p2 = arg2;
        }
        if (flags & WE_HAVE_A_SCALE) {
          part.m.a = part.m.d = bin.readF2dot14(data, offset);
          offset += 2;
        } else if (flags & WE_HAVE_AN_X_AND_Y_SCALE) {
          part.m.a = bin.readF2dot14(data, offset);
          offset += 2;
          part.m.d = bin.readF2dot14(data, offset);
          offset += 2;
        } else if (flags & WE_HAVE_A_TWO_BY_TWO) {
          part.m.a = bin.readF2dot14(data, offset);
          offset += 2;
          part.m.b = bin.readF2dot14(data, offset);
          offset += 2;
          part.m.c = bin.readF2dot14(data, offset);
          offset += 2;
          part.m.d = bin.readF2dot14(data, offset);
          offset += 2;
        }
      } while (flags & MORE_COMPONENTS);
      if (flags & WE_HAVE_INSTRUCTIONS) {
        var numInstr = bin.readUshort(data, offset);
        offset += 2;
        gl.instr = [];
        for (var i = 0; i < numInstr; i++) {
          gl.instr.push(data[offset]);
          offset++;
        }
      }
    }
    return gl;
  };
  Typr.GPOS = {};
  Typr.GPOS.parse = function(data, offset, length, font) {
    return Typr._lctf.parse(data, offset, length, font, Typr.GPOS.subt);
  };
  Typr.GPOS.subt = function(data, ltype, offset, ltable) {
    var bin = Typr._bin, offset0 = offset, tab = {};
    tab.fmt = bin.readUshort(data, offset);
    offset += 2;
    if (ltype == 1 || ltype == 2 || ltype == 3 || ltype == 7 || ltype == 8 && tab.fmt <= 2) {
      var covOff = bin.readUshort(data, offset);
      offset += 2;
      tab.coverage = Typr._lctf.readCoverage(data, covOff + offset0);
    }
    if (ltype == 1 && tab.fmt == 1) {
      var valFmt1 = bin.readUshort(data, offset);
      offset += 2;
      var ones1 = Typr._lctf.numOfOnes(valFmt1);
      if (valFmt1 != 0)
        tab.pos = Typr.GPOS.readValueRecord(data, offset, valFmt1);
    } else if (ltype == 2 && tab.fmt >= 1 && tab.fmt <= 2) {
      var valFmt1 = bin.readUshort(data, offset);
      offset += 2;
      var valFmt2 = bin.readUshort(data, offset);
      offset += 2;
      var ones1 = Typr._lctf.numOfOnes(valFmt1);
      var ones2 = Typr._lctf.numOfOnes(valFmt2);
      if (tab.fmt == 1) {
        tab.pairsets = [];
        var psc = bin.readUshort(data, offset);
        offset += 2;
        for (var i = 0; i < psc; i++) {
          var psoff = offset0 + bin.readUshort(data, offset);
          offset += 2;
          var pvc = bin.readUshort(data, psoff);
          psoff += 2;
          var arr = [];
          for (var j = 0; j < pvc; j++) {
            var gid2 = bin.readUshort(data, psoff);
            psoff += 2;
            var value1, value2;
            if (valFmt1 != 0) {
              value1 = Typr.GPOS.readValueRecord(data, psoff, valFmt1);
              psoff += ones1 * 2;
            }
            if (valFmt2 != 0) {
              value2 = Typr.GPOS.readValueRecord(data, psoff, valFmt2);
              psoff += ones2 * 2;
            }
            arr.push({ gid2, val1: value1, val2: value2 });
          }
          tab.pairsets.push(arr);
        }
      }
      if (tab.fmt == 2) {
        var classDef1 = bin.readUshort(data, offset);
        offset += 2;
        var classDef2 = bin.readUshort(data, offset);
        offset += 2;
        var class1Count = bin.readUshort(data, offset);
        offset += 2;
        var class2Count = bin.readUshort(data, offset);
        offset += 2;
        tab.classDef1 = Typr._lctf.readClassDef(data, offset0 + classDef1);
        tab.classDef2 = Typr._lctf.readClassDef(data, offset0 + classDef2);
        tab.matrix = [];
        for (var i = 0; i < class1Count; i++) {
          var row = [];
          for (var j = 0; j < class2Count; j++) {
            var value1 = null, value2 = null;
            if (valFmt1 != 0) {
              value1 = Typr.GPOS.readValueRecord(data, offset, valFmt1);
              offset += ones1 * 2;
            }
            if (valFmt2 != 0) {
              value2 = Typr.GPOS.readValueRecord(data, offset, valFmt2);
              offset += ones2 * 2;
            }
            row.push({ val1: value1, val2: value2 });
          }
          tab.matrix.push(row);
        }
      }
    } else if (ltype == 9 && tab.fmt == 1) {
      var extType = bin.readUshort(data, offset);
      offset += 2;
      var extOffset = bin.readUint(data, offset);
      offset += 4;
      if (ltable.ltype == 9) {
        ltable.ltype = extType;
      } else if (ltable.ltype != extType) {
        throw "invalid extension substitution";
      }
      return Typr.GPOS.subt(data, ltable.ltype, offset0 + extOffset);
    } else
      console.warn("unsupported GPOS table LookupType", ltype, "format", tab.fmt);
    return tab;
  };
  Typr.GPOS.readValueRecord = function(data, offset, valFmt) {
    var bin = Typr._bin;
    var arr = [];
    arr.push(valFmt & 1 ? bin.readShort(data, offset) : 0);
    offset += valFmt & 1 ? 2 : 0;
    arr.push(valFmt & 2 ? bin.readShort(data, offset) : 0);
    offset += valFmt & 2 ? 2 : 0;
    arr.push(valFmt & 4 ? bin.readShort(data, offset) : 0);
    offset += valFmt & 4 ? 2 : 0;
    arr.push(valFmt & 8 ? bin.readShort(data, offset) : 0);
    offset += valFmt & 8 ? 2 : 0;
    return arr;
  };
  Typr.GSUB = {};
  Typr.GSUB.parse = function(data, offset, length, font) {
    return Typr._lctf.parse(data, offset, length, font, Typr.GSUB.subt);
  };
  Typr.GSUB.subt = function(data, ltype, offset, ltable) {
    var bin = Typr._bin, offset0 = offset, tab = {};
    tab.fmt = bin.readUshort(data, offset);
    offset += 2;
    if (ltype != 1 && ltype != 4 && ltype != 5 && ltype != 6)
      return null;
    if (ltype == 1 || ltype == 4 || ltype == 5 && tab.fmt <= 2 || ltype == 6 && tab.fmt <= 2) {
      var covOff = bin.readUshort(data, offset);
      offset += 2;
      tab.coverage = Typr._lctf.readCoverage(data, offset0 + covOff);
    }
    if (ltype == 1 && tab.fmt >= 1 && tab.fmt <= 2) {
      if (tab.fmt == 1) {
        tab.delta = bin.readShort(data, offset);
        offset += 2;
      } else if (tab.fmt == 2) {
        var cnt = bin.readUshort(data, offset);
        offset += 2;
        tab.newg = bin.readUshorts(data, offset, cnt);
        offset += tab.newg.length * 2;
      }
    } else if (ltype == 4) {
      tab.vals = [];
      var cnt = bin.readUshort(data, offset);
      offset += 2;
      for (var i = 0; i < cnt; i++) {
        var loff = bin.readUshort(data, offset);
        offset += 2;
        tab.vals.push(Typr.GSUB.readLigatureSet(data, offset0 + loff));
      }
    } else if (ltype == 5 && tab.fmt == 2) {
      if (tab.fmt == 2) {
        var cDefOffset = bin.readUshort(data, offset);
        offset += 2;
        tab.cDef = Typr._lctf.readClassDef(data, offset0 + cDefOffset);
        tab.scset = [];
        var subClassSetCount = bin.readUshort(data, offset);
        offset += 2;
        for (var i = 0; i < subClassSetCount; i++) {
          var scsOff = bin.readUshort(data, offset);
          offset += 2;
          tab.scset.push(scsOff == 0 ? null : Typr.GSUB.readSubClassSet(data, offset0 + scsOff));
        }
      }
    } else if (ltype == 6 && tab.fmt == 3) {
      if (tab.fmt == 3) {
        for (var i = 0; i < 3; i++) {
          var cnt = bin.readUshort(data, offset);
          offset += 2;
          var cvgs = [];
          for (var j = 0; j < cnt; j++)
            cvgs.push(Typr._lctf.readCoverage(data, offset0 + bin.readUshort(data, offset + j * 2)));
          offset += cnt * 2;
          if (i == 0)
            tab.backCvg = cvgs;
          if (i == 1)
            tab.inptCvg = cvgs;
          if (i == 2)
            tab.ahedCvg = cvgs;
        }
        var cnt = bin.readUshort(data, offset);
        offset += 2;
        tab.lookupRec = Typr.GSUB.readSubstLookupRecords(data, offset, cnt);
      }
    } else if (ltype == 7 && tab.fmt == 1) {
      var extType = bin.readUshort(data, offset);
      offset += 2;
      var extOffset = bin.readUint(data, offset);
      offset += 4;
      if (ltable.ltype == 9) {
        ltable.ltype = extType;
      } else if (ltable.ltype != extType) {
        throw "invalid extension substitution";
      }
      return Typr.GSUB.subt(data, ltable.ltype, offset0 + extOffset);
    } else
      console.warn("unsupported GSUB table LookupType", ltype, "format", tab.fmt);
    return tab;
  };
  Typr.GSUB.readSubClassSet = function(data, offset) {
    var rUs = Typr._bin.readUshort, offset0 = offset, lset = [];
    var cnt = rUs(data, offset);
    offset += 2;
    for (var i = 0; i < cnt; i++) {
      var loff = rUs(data, offset);
      offset += 2;
      lset.push(Typr.GSUB.readSubClassRule(data, offset0 + loff));
    }
    return lset;
  };
  Typr.GSUB.readSubClassRule = function(data, offset) {
    var rUs = Typr._bin.readUshort, rule = {};
    var gcount = rUs(data, offset);
    offset += 2;
    var scount = rUs(data, offset);
    offset += 2;
    rule.input = [];
    for (var i = 0; i < gcount - 1; i++) {
      rule.input.push(rUs(data, offset));
      offset += 2;
    }
    rule.substLookupRecords = Typr.GSUB.readSubstLookupRecords(data, offset, scount);
    return rule;
  };
  Typr.GSUB.readSubstLookupRecords = function(data, offset, cnt) {
    var rUs = Typr._bin.readUshort;
    var out = [];
    for (var i = 0; i < cnt; i++) {
      out.push(rUs(data, offset), rUs(data, offset + 2));
      offset += 4;
    }
    return out;
  };
  Typr.GSUB.readChainSubClassSet = function(data, offset) {
    var bin = Typr._bin, offset0 = offset, lset = [];
    var cnt = bin.readUshort(data, offset);
    offset += 2;
    for (var i = 0; i < cnt; i++) {
      var loff = bin.readUshort(data, offset);
      offset += 2;
      lset.push(Typr.GSUB.readChainSubClassRule(data, offset0 + loff));
    }
    return lset;
  };
  Typr.GSUB.readChainSubClassRule = function(data, offset) {
    var bin = Typr._bin, rule = {};
    var pps = ["backtrack", "input", "lookahead"];
    for (var pi = 0; pi < pps.length; pi++) {
      var cnt = bin.readUshort(data, offset);
      offset += 2;
      if (pi == 1)
        cnt--;
      rule[pps[pi]] = bin.readUshorts(data, offset, cnt);
      offset += rule[pps[pi]].length * 2;
    }
    var cnt = bin.readUshort(data, offset);
    offset += 2;
    rule.subst = bin.readUshorts(data, offset, cnt * 2);
    offset += rule.subst.length * 2;
    return rule;
  };
  Typr.GSUB.readLigatureSet = function(data, offset) {
    var bin = Typr._bin, offset0 = offset, lset = [];
    var lcnt = bin.readUshort(data, offset);
    offset += 2;
    for (var j = 0; j < lcnt; j++) {
      var loff = bin.readUshort(data, offset);
      offset += 2;
      lset.push(Typr.GSUB.readLigature(data, offset0 + loff));
    }
    return lset;
  };
  Typr.GSUB.readLigature = function(data, offset) {
    var bin = Typr._bin, lig = { chain: [] };
    lig.nglyph = bin.readUshort(data, offset);
    offset += 2;
    var ccnt = bin.readUshort(data, offset);
    offset += 2;
    for (var k = 0; k < ccnt - 1; k++) {
      lig.chain.push(bin.readUshort(data, offset));
      offset += 2;
    }
    return lig;
  };
  Typr.head = {};
  Typr.head.parse = function(data, offset, length) {
    var bin = Typr._bin;
    var obj = {};
    bin.readFixed(data, offset);
    offset += 4;
    obj.fontRevision = bin.readFixed(data, offset);
    offset += 4;
    bin.readUint(data, offset);
    offset += 4;
    bin.readUint(data, offset);
    offset += 4;
    obj.flags = bin.readUshort(data, offset);
    offset += 2;
    obj.unitsPerEm = bin.readUshort(data, offset);
    offset += 2;
    obj.created = bin.readUint64(data, offset);
    offset += 8;
    obj.modified = bin.readUint64(data, offset);
    offset += 8;
    obj.xMin = bin.readShort(data, offset);
    offset += 2;
    obj.yMin = bin.readShort(data, offset);
    offset += 2;
    obj.xMax = bin.readShort(data, offset);
    offset += 2;
    obj.yMax = bin.readShort(data, offset);
    offset += 2;
    obj.macStyle = bin.readUshort(data, offset);
    offset += 2;
    obj.lowestRecPPEM = bin.readUshort(data, offset);
    offset += 2;
    obj.fontDirectionHint = bin.readShort(data, offset);
    offset += 2;
    obj.indexToLocFormat = bin.readShort(data, offset);
    offset += 2;
    obj.glyphDataFormat = bin.readShort(data, offset);
    offset += 2;
    return obj;
  };
  Typr.hhea = {};
  Typr.hhea.parse = function(data, offset, length) {
    var bin = Typr._bin;
    var obj = {};
    bin.readFixed(data, offset);
    offset += 4;
    obj.ascender = bin.readShort(data, offset);
    offset += 2;
    obj.descender = bin.readShort(data, offset);
    offset += 2;
    obj.lineGap = bin.readShort(data, offset);
    offset += 2;
    obj.advanceWidthMax = bin.readUshort(data, offset);
    offset += 2;
    obj.minLeftSideBearing = bin.readShort(data, offset);
    offset += 2;
    obj.minRightSideBearing = bin.readShort(data, offset);
    offset += 2;
    obj.xMaxExtent = bin.readShort(data, offset);
    offset += 2;
    obj.caretSlopeRise = bin.readShort(data, offset);
    offset += 2;
    obj.caretSlopeRun = bin.readShort(data, offset);
    offset += 2;
    obj.caretOffset = bin.readShort(data, offset);
    offset += 2;
    offset += 4 * 2;
    obj.metricDataFormat = bin.readShort(data, offset);
    offset += 2;
    obj.numberOfHMetrics = bin.readUshort(data, offset);
    offset += 2;
    return obj;
  };
  Typr.hmtx = {};
  Typr.hmtx.parse = function(data, offset, length, font) {
    var bin = Typr._bin;
    var obj = {};
    obj.aWidth = [];
    obj.lsBearing = [];
    var aw = 0, lsb = 0;
    for (var i = 0; i < font.maxp.numGlyphs; i++) {
      if (i < font.hhea.numberOfHMetrics) {
        aw = bin.readUshort(data, offset);
        offset += 2;
        lsb = bin.readShort(data, offset);
        offset += 2;
      }
      obj.aWidth.push(aw);
      obj.lsBearing.push(lsb);
    }
    return obj;
  };
  Typr.kern = {};
  Typr.kern.parse = function(data, offset, length, font) {
    var bin = Typr._bin;
    var version = bin.readUshort(data, offset);
    offset += 2;
    if (version == 1)
      return Typr.kern.parseV1(data, offset - 2, length, font);
    var nTables = bin.readUshort(data, offset);
    offset += 2;
    var map2 = { glyph1: [], rval: [] };
    for (var i = 0; i < nTables; i++) {
      offset += 2;
      var length = bin.readUshort(data, offset);
      offset += 2;
      var coverage = bin.readUshort(data, offset);
      offset += 2;
      var format = coverage >>> 8;
      format &= 15;
      if (format == 0)
        offset = Typr.kern.readFormat0(data, offset, map2);
      else
        throw "unknown kern table format: " + format;
    }
    return map2;
  };
  Typr.kern.parseV1 = function(data, offset, length, font) {
    var bin = Typr._bin;
    bin.readFixed(data, offset);
    offset += 4;
    var nTables = bin.readUint(data, offset);
    offset += 4;
    var map2 = { glyph1: [], rval: [] };
    for (var i = 0; i < nTables; i++) {
      bin.readUint(data, offset);
      offset += 4;
      var coverage = bin.readUshort(data, offset);
      offset += 2;
      bin.readUshort(data, offset);
      offset += 2;
      var format = coverage >>> 8;
      format &= 15;
      if (format == 0)
        offset = Typr.kern.readFormat0(data, offset, map2);
      else
        throw "unknown kern table format: " + format;
    }
    return map2;
  };
  Typr.kern.readFormat0 = function(data, offset, map2) {
    var bin = Typr._bin;
    var pleft = -1;
    var nPairs = bin.readUshort(data, offset);
    offset += 2;
    bin.readUshort(data, offset);
    offset += 2;
    bin.readUshort(data, offset);
    offset += 2;
    bin.readUshort(data, offset);
    offset += 2;
    for (var j = 0; j < nPairs; j++) {
      var left = bin.readUshort(data, offset);
      offset += 2;
      var right = bin.readUshort(data, offset);
      offset += 2;
      var value = bin.readShort(data, offset);
      offset += 2;
      if (left != pleft) {
        map2.glyph1.push(left);
        map2.rval.push({ glyph2: [], vals: [] });
      }
      var rval = map2.rval[map2.rval.length - 1];
      rval.glyph2.push(right);
      rval.vals.push(value);
      pleft = left;
    }
    return offset;
  };
  Typr.loca = {};
  Typr.loca.parse = function(data, offset, length, font) {
    var bin = Typr._bin;
    var obj = [];
    var ver = font.head.indexToLocFormat;
    var len = font.maxp.numGlyphs + 1;
    if (ver == 0)
      for (var i = 0; i < len; i++)
        obj.push(bin.readUshort(data, offset + (i << 1)) << 1);
    if (ver == 1)
      for (var i = 0; i < len; i++)
        obj.push(bin.readUint(data, offset + (i << 2)));
    return obj;
  };
  Typr.maxp = {};
  Typr.maxp.parse = function(data, offset, length) {
    var bin = Typr._bin;
    var obj = {};
    var ver = bin.readUint(data, offset);
    offset += 4;
    obj.numGlyphs = bin.readUshort(data, offset);
    offset += 2;
    if (ver == 65536) {
      obj.maxPoints = bin.readUshort(data, offset);
      offset += 2;
      obj.maxContours = bin.readUshort(data, offset);
      offset += 2;
      obj.maxCompositePoints = bin.readUshort(data, offset);
      offset += 2;
      obj.maxCompositeContours = bin.readUshort(data, offset);
      offset += 2;
      obj.maxZones = bin.readUshort(data, offset);
      offset += 2;
      obj.maxTwilightPoints = bin.readUshort(data, offset);
      offset += 2;
      obj.maxStorage = bin.readUshort(data, offset);
      offset += 2;
      obj.maxFunctionDefs = bin.readUshort(data, offset);
      offset += 2;
      obj.maxInstructionDefs = bin.readUshort(data, offset);
      offset += 2;
      obj.maxStackElements = bin.readUshort(data, offset);
      offset += 2;
      obj.maxSizeOfInstructions = bin.readUshort(data, offset);
      offset += 2;
      obj.maxComponentElements = bin.readUshort(data, offset);
      offset += 2;
      obj.maxComponentDepth = bin.readUshort(data, offset);
      offset += 2;
    }
    return obj;
  };
  Typr.name = {};
  Typr.name.parse = function(data, offset, length) {
    var bin = Typr._bin;
    var obj = {};
    bin.readUshort(data, offset);
    offset += 2;
    var count = bin.readUshort(data, offset);
    offset += 2;
    bin.readUshort(data, offset);
    offset += 2;
    var names = [
      "copyright",
      "fontFamily",
      "fontSubfamily",
      "ID",
      "fullName",
      "version",
      "postScriptName",
      "trademark",
      "manufacturer",
      "designer",
      "description",
      "urlVendor",
      "urlDesigner",
      "licence",
      "licenceURL",
      "---",
      "typoFamilyName",
      "typoSubfamilyName",
      "compatibleFull",
      "sampleText",
      "postScriptCID",
      "wwsFamilyName",
      "wwsSubfamilyName",
      "lightPalette",
      "darkPalette"
    ];
    var offset0 = offset;
    for (var i = 0; i < count; i++) {
      var platformID = bin.readUshort(data, offset);
      offset += 2;
      var encodingID = bin.readUshort(data, offset);
      offset += 2;
      var languageID = bin.readUshort(data, offset);
      offset += 2;
      var nameID = bin.readUshort(data, offset);
      offset += 2;
      var slen = bin.readUshort(data, offset);
      offset += 2;
      var noffset = bin.readUshort(data, offset);
      offset += 2;
      var cname = names[nameID];
      var soff = offset0 + count * 12 + noffset;
      var str;
      if (platformID == 0)
        str = bin.readUnicode(data, soff, slen / 2);
      else if (platformID == 3 && encodingID == 0)
        str = bin.readUnicode(data, soff, slen / 2);
      else if (encodingID == 0)
        str = bin.readASCII(data, soff, slen);
      else if (encodingID == 1)
        str = bin.readUnicode(data, soff, slen / 2);
      else if (encodingID == 3)
        str = bin.readUnicode(data, soff, slen / 2);
      else if (platformID == 1) {
        str = bin.readASCII(data, soff, slen);
        console.warn("reading unknown MAC encoding " + encodingID + " as ASCII");
      } else
        throw "unknown encoding " + encodingID + ", platformID: " + platformID;
      var tid = "p" + platformID + "," + languageID.toString(16);
      if (obj[tid] == null)
        obj[tid] = {};
      obj[tid][cname !== void 0 ? cname : nameID] = str;
      obj[tid]._lang = languageID;
    }
    for (var p in obj)
      if (obj[p].postScriptName != null && obj[p]._lang == 1033)
        return obj[p];
    for (var p in obj)
      if (obj[p].postScriptName != null && obj[p]._lang == 0)
        return obj[p];
    for (var p in obj)
      if (obj[p].postScriptName != null && obj[p]._lang == 3084)
        return obj[p];
    for (var p in obj)
      if (obj[p].postScriptName != null)
        return obj[p];
    var tname;
    for (var p in obj) {
      tname = p;
      break;
    }
    console.warn("returning name table with languageID " + obj[tname]._lang);
    return obj[tname];
  };
  Typr["OS/2"] = {};
  Typr["OS/2"].parse = function(data, offset, length) {
    var bin = Typr._bin;
    var ver = bin.readUshort(data, offset);
    offset += 2;
    var obj = {};
    if (ver == 0)
      Typr["OS/2"].version0(data, offset, obj);
    else if (ver == 1)
      Typr["OS/2"].version1(data, offset, obj);
    else if (ver == 2 || ver == 3 || ver == 4)
      Typr["OS/2"].version2(data, offset, obj);
    else if (ver == 5)
      Typr["OS/2"].version5(data, offset, obj);
    else
      throw "unknown OS/2 table version: " + ver;
    return obj;
  };
  Typr["OS/2"].version0 = function(data, offset, obj) {
    var bin = Typr._bin;
    obj.xAvgCharWidth = bin.readShort(data, offset);
    offset += 2;
    obj.usWeightClass = bin.readUshort(data, offset);
    offset += 2;
    obj.usWidthClass = bin.readUshort(data, offset);
    offset += 2;
    obj.fsType = bin.readUshort(data, offset);
    offset += 2;
    obj.ySubscriptXSize = bin.readShort(data, offset);
    offset += 2;
    obj.ySubscriptYSize = bin.readShort(data, offset);
    offset += 2;
    obj.ySubscriptXOffset = bin.readShort(data, offset);
    offset += 2;
    obj.ySubscriptYOffset = bin.readShort(data, offset);
    offset += 2;
    obj.ySuperscriptXSize = bin.readShort(data, offset);
    offset += 2;
    obj.ySuperscriptYSize = bin.readShort(data, offset);
    offset += 2;
    obj.ySuperscriptXOffset = bin.readShort(data, offset);
    offset += 2;
    obj.ySuperscriptYOffset = bin.readShort(data, offset);
    offset += 2;
    obj.yStrikeoutSize = bin.readShort(data, offset);
    offset += 2;
    obj.yStrikeoutPosition = bin.readShort(data, offset);
    offset += 2;
    obj.sFamilyClass = bin.readShort(data, offset);
    offset += 2;
    obj.panose = bin.readBytes(data, offset, 10);
    offset += 10;
    obj.ulUnicodeRange1 = bin.readUint(data, offset);
    offset += 4;
    obj.ulUnicodeRange2 = bin.readUint(data, offset);
    offset += 4;
    obj.ulUnicodeRange3 = bin.readUint(data, offset);
    offset += 4;
    obj.ulUnicodeRange4 = bin.readUint(data, offset);
    offset += 4;
    obj.achVendID = [bin.readInt8(data, offset), bin.readInt8(data, offset + 1), bin.readInt8(data, offset + 2), bin.readInt8(data, offset + 3)];
    offset += 4;
    obj.fsSelection = bin.readUshort(data, offset);
    offset += 2;
    obj.usFirstCharIndex = bin.readUshort(data, offset);
    offset += 2;
    obj.usLastCharIndex = bin.readUshort(data, offset);
    offset += 2;
    obj.sTypoAscender = bin.readShort(data, offset);
    offset += 2;
    obj.sTypoDescender = bin.readShort(data, offset);
    offset += 2;
    obj.sTypoLineGap = bin.readShort(data, offset);
    offset += 2;
    obj.usWinAscent = bin.readUshort(data, offset);
    offset += 2;
    obj.usWinDescent = bin.readUshort(data, offset);
    offset += 2;
    return offset;
  };
  Typr["OS/2"].version1 = function(data, offset, obj) {
    var bin = Typr._bin;
    offset = Typr["OS/2"].version0(data, offset, obj);
    obj.ulCodePageRange1 = bin.readUint(data, offset);
    offset += 4;
    obj.ulCodePageRange2 = bin.readUint(data, offset);
    offset += 4;
    return offset;
  };
  Typr["OS/2"].version2 = function(data, offset, obj) {
    var bin = Typr._bin;
    offset = Typr["OS/2"].version1(data, offset, obj);
    obj.sxHeight = bin.readShort(data, offset);
    offset += 2;
    obj.sCapHeight = bin.readShort(data, offset);
    offset += 2;
    obj.usDefault = bin.readUshort(data, offset);
    offset += 2;
    obj.usBreak = bin.readUshort(data, offset);
    offset += 2;
    obj.usMaxContext = bin.readUshort(data, offset);
    offset += 2;
    return offset;
  };
  Typr["OS/2"].version5 = function(data, offset, obj) {
    var bin = Typr._bin;
    offset = Typr["OS/2"].version2(data, offset, obj);
    obj.usLowerOpticalPointSize = bin.readUshort(data, offset);
    offset += 2;
    obj.usUpperOpticalPointSize = bin.readUshort(data, offset);
    offset += 2;
    return offset;
  };
  Typr.post = {};
  Typr.post.parse = function(data, offset, length) {
    var bin = Typr._bin;
    var obj = {};
    obj.version = bin.readFixed(data, offset);
    offset += 4;
    obj.italicAngle = bin.readFixed(data, offset);
    offset += 4;
    obj.underlinePosition = bin.readShort(data, offset);
    offset += 2;
    obj.underlineThickness = bin.readShort(data, offset);
    offset += 2;
    return obj;
  };
  Typr.SVG = {};
  Typr.SVG.parse = function(data, offset, length) {
    var bin = Typr._bin;
    var obj = { entries: [] };
    var offset0 = offset;
    bin.readUshort(data, offset);
    offset += 2;
    var svgDocIndexOffset = bin.readUint(data, offset);
    offset += 4;
    bin.readUint(data, offset);
    offset += 4;
    offset = svgDocIndexOffset + offset0;
    var numEntries = bin.readUshort(data, offset);
    offset += 2;
    for (var i = 0; i < numEntries; i++) {
      var startGlyphID = bin.readUshort(data, offset);
      offset += 2;
      var endGlyphID = bin.readUshort(data, offset);
      offset += 2;
      var svgDocOffset = bin.readUint(data, offset);
      offset += 4;
      var svgDocLength = bin.readUint(data, offset);
      offset += 4;
      var sbuf = new Uint8Array(data.buffer, offset0 + svgDocOffset + svgDocIndexOffset, svgDocLength);
      var svg = bin.readUTF8(sbuf, 0, sbuf.length);
      for (var f = startGlyphID; f <= endGlyphID; f++) {
        obj.entries[f] = svg;
      }
    }
    return obj;
  };
  Typr.SVG.toPath = function(str) {
    var pth = { cmds: [], crds: [] };
    if (str == null)
      return pth;
    var prsr = new DOMParser();
    var doc = prsr["parseFromString"](str, "image/svg+xml");
    var svg = doc.firstChild;
    while (svg.tagName != "svg")
      svg = svg.nextSibling;
    var vb = svg.getAttribute("viewBox");
    if (vb)
      vb = vb.trim().split(" ").map(parseFloat);
    else
      vb = [0, 0, 1e3, 1e3];
    Typr.SVG._toPath(svg.children, pth);
    for (var i = 0; i < pth.crds.length; i += 2) {
      var x = pth.crds[i], y = pth.crds[i + 1];
      x -= vb[0];
      y -= vb[1];
      y = -y;
      pth.crds[i] = x;
      pth.crds[i + 1] = y;
    }
    return pth;
  };
  Typr.SVG._toPath = function(nds, pth, fill) {
    for (var ni = 0; ni < nds.length; ni++) {
      var nd = nds[ni], tn = nd.tagName;
      var cfl = nd.getAttribute("fill");
      if (cfl == null)
        cfl = fill;
      if (tn == "g")
        Typr.SVG._toPath(nd.children, pth, cfl);
      else if (tn == "path") {
        pth.cmds.push(cfl ? cfl : "#000000");
        var d = nd.getAttribute("d");
        var toks = Typr.SVG._tokens(d);
        Typr.SVG._toksToPath(toks, pth);
        pth.cmds.push("X");
      } else if (tn == "defs")
        ;
      else
        console.warn(tn, nd);
    }
  };
  Typr.SVG._tokens = function(d) {
    var ts = [], off = 0, rn = false, cn = "";
    while (off < d.length) {
      var cc = d.charCodeAt(off), ch = d.charAt(off);
      off++;
      var isNum = 48 <= cc && cc <= 57 || ch == "." || ch == "-";
      if (rn) {
        if (ch == "-") {
          ts.push(parseFloat(cn));
          cn = ch;
        } else if (isNum)
          cn += ch;
        else {
          ts.push(parseFloat(cn));
          if (ch != "," && ch != " ")
            ts.push(ch);
          rn = false;
        }
      } else {
        if (isNum) {
          cn = ch;
          rn = true;
        } else if (ch != "," && ch != " ")
          ts.push(ch);
      }
    }
    if (rn)
      ts.push(parseFloat(cn));
    return ts;
  };
  Typr.SVG._toksToPath = function(ts, pth) {
    var i = 0, x = 0, y = 0, ox = 0, oy = 0;
    var pc = { "M": 2, "L": 2, "H": 1, "V": 1, "S": 4, "C": 6 };
    var cmds = pth.cmds, crds = pth.crds;
    while (i < ts.length) {
      var cmd = ts[i];
      i++;
      if (cmd == "z") {
        cmds.push("Z");
        x = ox;
        y = oy;
      } else {
        var cmu = cmd.toUpperCase();
        var ps = pc[cmu], reps = Typr.SVG._reps(ts, i, ps);
        for (var j = 0; j < reps; j++) {
          var xi = 0, yi = 0;
          if (cmd != cmu) {
            xi = x;
            yi = y;
          }
          if (cmu == "M") {
            x = xi + ts[i++];
            y = yi + ts[i++];
            cmds.push("M");
            crds.push(x, y);
            ox = x;
            oy = y;
          } else if (cmu == "L") {
            x = xi + ts[i++];
            y = yi + ts[i++];
            cmds.push("L");
            crds.push(x, y);
          } else if (cmu == "H") {
            x = xi + ts[i++];
            cmds.push("L");
            crds.push(x, y);
          } else if (cmu == "V") {
            y = yi + ts[i++];
            cmds.push("L");
            crds.push(x, y);
          } else if (cmu == "C") {
            var x1 = xi + ts[i++], y1 = yi + ts[i++], x2 = xi + ts[i++], y2 = yi + ts[i++], x3 = xi + ts[i++], y3 = yi + ts[i++];
            cmds.push("C");
            crds.push(x1, y1, x2, y2, x3, y3);
            x = x3;
            y = y3;
          } else if (cmu == "S") {
            var co = Math.max(crds.length - 4, 0);
            var x1 = x + x - crds[co], y1 = y + y - crds[co + 1];
            var x2 = xi + ts[i++], y2 = yi + ts[i++], x3 = xi + ts[i++], y3 = yi + ts[i++];
            cmds.push("C");
            crds.push(x1, y1, x2, y2, x3, y3);
            x = x3;
            y = y3;
          } else
            console.warn("Unknown SVG command " + cmd);
        }
      }
    }
  };
  Typr.SVG._reps = function(ts, off, ps) {
    var i = off;
    while (i < ts.length) {
      if (typeof ts[i] == "string")
        break;
      i += ps;
    }
    return (i - off) / ps;
  };
  if (Typr == null)
    Typr = {};
  if (Typr.U == null)
    Typr.U = {};
  Typr.U.codeToGlyph = function(font, code) {
    var cmap = font.cmap;
    for (var _i = 0, _a = [cmap.p0e4, cmap.p3e1, cmap.p3e10, cmap.p0e3, cmap.p1e0]; _i < _a.length; _i++) {
      var tind = _a[_i];
      if (tind == null)
        continue;
      var tab = cmap.tables[tind];
      if (tab.format == 0) {
        if (code >= tab.map.length)
          continue;
        return tab.map[code];
      } else if (tab.format == 4) {
        var sind = -1;
        for (var i = 0; i < tab.endCount.length; i++) {
          if (code <= tab.endCount[i]) {
            sind = i;
            break;
          }
        }
        if (sind == -1)
          continue;
        if (tab.startCount[sind] > code)
          continue;
        var gli = 0;
        if (tab.idRangeOffset[sind] != 0) {
          gli = tab.glyphIdArray[code - tab.startCount[sind] + (tab.idRangeOffset[sind] >> 1) - (tab.idRangeOffset.length - sind)];
        } else {
          gli = code + tab.idDelta[sind];
        }
        return gli & 65535;
      } else if (tab.format == 12) {
        if (code > tab.groups[tab.groups.length - 1][1])
          continue;
        for (var i = 0; i < tab.groups.length; i++) {
          var grp = tab.groups[i];
          if (grp[0] <= code && code <= grp[1])
            return grp[2] + (code - grp[0]);
        }
        continue;
      } else {
        throw "unknown cmap table format " + tab.format;
      }
    }
    return 0;
  };
  Typr.U.glyphToPath = function(font, gid) {
    var path = { cmds: [], crds: [] };
    if (font.SVG && font.SVG.entries[gid]) {
      var p = font.SVG.entries[gid];
      if (p == null)
        return path;
      if (typeof p == "string") {
        p = Typr.SVG.toPath(p);
        font.SVG.entries[gid] = p;
      }
      return p;
    } else if (font.CFF) {
      var state = { x: 0, y: 0, stack: [], nStems: 0, haveWidth: false, width: font.CFF.Private ? font.CFF.Private.defaultWidthX : 0, open: false };
      var cff = font.CFF, pdct = font.CFF.Private;
      if (cff.ROS) {
        var gi = 0;
        while (cff.FDSelect[gi + 2] <= gid)
          gi += 2;
        pdct = cff.FDArray[cff.FDSelect[gi + 1]].Private;
      }
      Typr.U._drawCFF(font.CFF.CharStrings[gid], state, cff, pdct, path);
    } else if (font.glyf) {
      Typr.U._drawGlyf(gid, font, path);
    }
    return path;
  };
  Typr.U._drawGlyf = function(gid, font, path) {
    var gl = font.glyf[gid];
    if (gl == null)
      gl = font.glyf[gid] = Typr.glyf._parseGlyf(font, gid);
    if (gl != null) {
      if (gl.noc > -1) {
        Typr.U._simpleGlyph(gl, path);
      } else {
        Typr.U._compoGlyph(gl, font, path);
      }
    }
  };
  Typr.U._simpleGlyph = function(gl, p) {
    for (var c = 0; c < gl.noc; c++) {
      var i0 = c == 0 ? 0 : gl.endPts[c - 1] + 1;
      var il = gl.endPts[c];
      for (var i = i0; i <= il; i++) {
        var pr = i == i0 ? il : i - 1;
        var nx = i == il ? i0 : i + 1;
        var onCurve = gl.flags[i] & 1;
        var prOnCurve = gl.flags[pr] & 1;
        var nxOnCurve = gl.flags[nx] & 1;
        var x = gl.xs[i], y = gl.ys[i];
        if (i == i0) {
          if (onCurve) {
            if (prOnCurve) {
              Typr.U.P.moveTo(p, gl.xs[pr], gl.ys[pr]);
            } else {
              Typr.U.P.moveTo(p, x, y);
              continue;
            }
          } else {
            if (prOnCurve) {
              Typr.U.P.moveTo(p, gl.xs[pr], gl.ys[pr]);
            } else {
              Typr.U.P.moveTo(p, (gl.xs[pr] + x) / 2, (gl.ys[pr] + y) / 2);
            }
          }
        }
        if (onCurve) {
          if (prOnCurve)
            Typr.U.P.lineTo(p, x, y);
        } else {
          if (nxOnCurve) {
            Typr.U.P.qcurveTo(p, x, y, gl.xs[nx], gl.ys[nx]);
          } else {
            Typr.U.P.qcurveTo(p, x, y, (x + gl.xs[nx]) / 2, (y + gl.ys[nx]) / 2);
          }
        }
      }
      Typr.U.P.closePath(p);
    }
  };
  Typr.U._compoGlyph = function(gl, font, p) {
    for (var j = 0; j < gl.parts.length; j++) {
      var path = { cmds: [], crds: [] };
      var prt = gl.parts[j];
      Typr.U._drawGlyf(prt.glyphIndex, font, path);
      var m = prt.m;
      for (var i = 0; i < path.crds.length; i += 2) {
        var x = path.crds[i], y = path.crds[i + 1];
        p.crds.push(x * m.a + y * m.b + m.tx);
        p.crds.push(x * m.c + y * m.d + m.ty);
      }
      for (var i = 0; i < path.cmds.length; i++) {
        p.cmds.push(path.cmds[i]);
      }
    }
  };
  Typr.U._getGlyphClass = function(g, cd) {
    var intr = Typr._lctf.getInterval(cd, g);
    return intr == -1 ? 0 : cd[intr + 2];
  };
  Typr.U.getPairAdjustment = function(font, g1, g2) {
    var hasGPOSkern = false;
    if (font.GPOS) {
      var gpos = font["GPOS"];
      var llist = gpos.lookupList, flist = gpos.featureList;
      var tused = [];
      for (var i = 0; i < flist.length; i++) {
        var fl = flist[i];
        if (fl.tag != "kern")
          continue;
        hasGPOSkern = true;
        for (var ti = 0; ti < fl.tab.length; ti++) {
          if (tused[fl.tab[ti]])
            continue;
          tused[fl.tab[ti]] = true;
          var tab = llist[fl.tab[ti]];
          for (var j = 0; j < tab.tabs.length; j++) {
            if (tab.tabs[j] == null)
              continue;
            var ltab = tab.tabs[j], ind;
            if (ltab.coverage) {
              ind = Typr._lctf.coverageIndex(ltab.coverage, g1);
              if (ind == -1)
                continue;
            }
            if (tab.ltype == 1)
              ;
            else if (tab.ltype == 2) {
              var adj = null;
              if (ltab.fmt == 1) {
                var right = ltab.pairsets[ind];
                for (var i = 0; i < right.length; i++) {
                  if (right[i].gid2 == g2)
                    adj = right[i];
                }
              } else if (ltab.fmt == 2) {
                var c1 = Typr.U._getGlyphClass(g1, ltab.classDef1);
                var c2 = Typr.U._getGlyphClass(g2, ltab.classDef2);
                adj = ltab.matrix[c1][c2];
              }
              if (adj) {
                var offset = 0;
                if (adj.val1 && adj.val1[2])
                  offset += adj.val1[2];
                if (adj.val2 && adj.val2[0])
                  offset += adj.val2[0];
                return offset;
              }
            }
          }
        }
      }
    }
    if (font.kern && !hasGPOSkern) {
      var ind1 = font.kern.glyph1.indexOf(g1);
      if (ind1 != -1) {
        var ind2 = font.kern.rval[ind1].glyph2.indexOf(g2);
        if (ind2 != -1)
          return font.kern.rval[ind1].vals[ind2];
      }
    }
    return 0;
  };
  Typr.U.stringToGlyphs = function(font, str) {
    var gls = [];
    for (var i = 0; i < str.length; i++) {
      var cc = str.codePointAt(i);
      if (cc > 65535)
        i++;
      gls.push(Typr.U.codeToGlyph(font, cc));
    }
    for (var i = 0; i < str.length; i++) {
      var cc = str.codePointAt(i);
      if (cc == 2367) {
        var t = gls[i - 1];
        gls[i - 1] = gls[i];
        gls[i] = t;
      }
      if (cc > 65535)
        i++;
    }
    var gsub = font["GSUB"];
    if (gsub == null)
      return gls;
    var llist = gsub.lookupList, flist = gsub.featureList;
    var cligs = [
      "rlig",
      "liga",
      "mset",
      "isol",
      "init",
      "fina",
      "medi",
      "half",
      "pres",
      "blws"
      
    ];
    var tused = [];
    for (var fi = 0; fi < flist.length; fi++) {
      var fl = flist[fi];
      if (cligs.indexOf(fl.tag) == -1)
        continue;
      for (var ti = 0; ti < fl.tab.length; ti++) {
        if (tused[fl.tab[ti]])
          continue;
        tused[fl.tab[ti]] = true;
        var tab = llist[fl.tab[ti]];
        for (var ci = 0; ci < gls.length; ci++) {
          var feat = Typr.U._getWPfeature(str, ci);
          if ("isol,init,fina,medi".indexOf(fl.tag) != -1 && fl.tag != feat)
            continue;
          Typr.U._applySubs(gls, ci, tab, llist);
        }
      }
    }
    return gls;
  };
  Typr.U._getWPfeature = function(str, ci) {
    var wsep = '\n	" ,.:;!?()  ،';
    var R = "آأؤإاةدذرزوٱٲٳٵٶٷڈډڊڋڌڍڎڏڐڑڒړڔڕږڗژڙۀۃۄۅۆۇۈۉۊۋۍۏےۓەۮۯܐܕܖܗܘܙܞܨܪܬܯݍݙݚݛݫݬݱݳݴݸݹࡀࡆࡇࡉࡔࡧࡩࡪࢪࢫࢬࢮࢱࢲࢹૅેૉ૊૎૏ૐ૑૒૝ૡ૤૯஁ஃ஄அஉ஌எஏ஑னப஫஬";
    var L = "ꡲ્૗";
    var slft = ci == 0 || wsep.indexOf(str[ci - 1]) != -1;
    var srgt = ci == str.length - 1 || wsep.indexOf(str[ci + 1]) != -1;
    if (!slft && R.indexOf(str[ci - 1]) != -1)
      slft = true;
    if (!srgt && R.indexOf(str[ci]) != -1)
      srgt = true;
    if (!srgt && L.indexOf(str[ci + 1]) != -1)
      srgt = true;
    if (!slft && L.indexOf(str[ci]) != -1)
      slft = true;
    var feat = null;
    if (slft) {
      feat = srgt ? "isol" : "init";
    } else {
      feat = srgt ? "fina" : "medi";
    }
    return feat;
  };
  Typr.U._applySubs = function(gls, ci, tab, llist) {
    var rlim = gls.length - ci - 1;
    for (var j = 0; j < tab.tabs.length; j++) {
      if (tab.tabs[j] == null)
        continue;
      var ltab = tab.tabs[j], ind;
      if (ltab.coverage) {
        ind = Typr._lctf.coverageIndex(ltab.coverage, gls[ci]);
        if (ind == -1)
          continue;
      }
      if (tab.ltype == 1) {
        gls[ci];
        if (ltab.fmt == 1)
          gls[ci] = gls[ci] + ltab.delta;
        else
          gls[ci] = ltab.newg[ind];
      } else if (tab.ltype == 4) {
        var vals = ltab.vals[ind];
        for (var k = 0; k < vals.length; k++) {
          var lig = vals[k], rl = lig.chain.length;
          if (rl > rlim)
            continue;
          var good = true, em1 = 0;
          for (var l = 0; l < rl; l++) {
            while (gls[ci + em1 + (1 + l)] == -1)
              em1++;
            if (lig.chain[l] != gls[ci + em1 + (1 + l)])
              good = false;
          }
          if (!good)
            continue;
          gls[ci] = lig.nglyph;
          for (var l = 0; l < rl + em1; l++)
            gls[ci + l + 1] = -1;
          break;
        }
      } else if (tab.ltype == 5 && ltab.fmt == 2) {
        var cind = Typr._lctf.getInterval(ltab.cDef, gls[ci]);
        var cls = ltab.cDef[cind + 2], scs = ltab.scset[cls];
        for (var i = 0; i < scs.length; i++) {
          var sc = scs[i], inp = sc.input;
          if (inp.length > rlim)
            continue;
          var good = true;
          for (var l = 0; l < inp.length; l++) {
            var cind2 = Typr._lctf.getInterval(ltab.cDef, gls[ci + 1 + l]);
            if (cind == -1 && ltab.cDef[cind2 + 2] != inp[l]) {
              good = false;
              break;
            }
          }
          if (!good)
            continue;
          var lrs = sc.substLookupRecords;
          for (var k = 0; k < lrs.length; k += 2) {
            lrs[k];
            lrs[k + 1];
          }
        }
      } else if (tab.ltype == 6 && ltab.fmt == 3) {
        if (!Typr.U._glsCovered(gls, ltab.backCvg, ci - ltab.backCvg.length))
          continue;
        if (!Typr.U._glsCovered(gls, ltab.inptCvg, ci))
          continue;
        if (!Typr.U._glsCovered(gls, ltab.ahedCvg, ci + ltab.inptCvg.length))
          continue;
        var lr = ltab.lookupRec;
        for (var i = 0; i < lr.length; i += 2) {
          var cind = lr[i], tab2 = llist[lr[i + 1]];
          Typr.U._applySubs(gls, ci + cind, tab2, llist);
        }
      }
    }
  };
  Typr.U._glsCovered = function(gls, cvgs, ci) {
    for (var i = 0; i < cvgs.length; i++) {
      var ind = Typr._lctf.coverageIndex(cvgs[i], gls[ci + i]);
      if (ind == -1)
        return false;
    }
    return true;
  };
  Typr.U.glyphsToPath = function(font, gls, clr) {
    var tpath = { cmds: [], crds: [] };
    var x = 0;
    for (var i = 0; i < gls.length; i++) {
      var gid = gls[i];
      if (gid == -1)
        continue;
      var gid2 = i < gls.length - 1 && gls[i + 1] != -1 ? gls[i + 1] : 0;
      var path = Typr.U.glyphToPath(font, gid);
      for (var j = 0; j < path.crds.length; j += 2) {
        tpath.crds.push(path.crds[j] + x);
        tpath.crds.push(path.crds[j + 1]);
      }
      if (clr)
        tpath.cmds.push(clr);
      for (var j = 0; j < path.cmds.length; j++)
        tpath.cmds.push(path.cmds[j]);
      if (clr)
        tpath.cmds.push("X");
      x += font.hmtx.aWidth[gid];
      if (i < gls.length - 1)
        x += Typr.U.getPairAdjustment(font, gid, gid2);
    }
    return tpath;
  };
  Typr.U.pathToSVG = function(path, prec) {
    if (prec == null)
      prec = 5;
    var out = [], co = 0, lmap = { "M": 2, "L": 2, "Q": 4, "C": 6 };
    for (var i = 0; i < path.cmds.length; i++) {
      var cmd = path.cmds[i], cn = co + (lmap[cmd] ? lmap[cmd] : 0);
      out.push(cmd);
      while (co < cn) {
        var c = path.crds[co++];
        out.push(parseFloat(c.toFixed(prec)) + (co == cn ? "" : " "));
      }
    }
    return out.join("");
  };
  Typr.U.pathToContext = function(path, ctx) {
    var c = 0, crds = path.crds;
    for (var j = 0; j < path.cmds.length; j++) {
      var cmd = path.cmds[j];
      if (cmd == "M") {
        ctx.moveTo(crds[c], crds[c + 1]);
        c += 2;
      } else if (cmd == "L") {
        ctx.lineTo(crds[c], crds[c + 1]);
        c += 2;
      } else if (cmd == "C") {
        ctx.bezierCurveTo(crds[c], crds[c + 1], crds[c + 2], crds[c + 3], crds[c + 4], crds[c + 5]);
        c += 6;
      } else if (cmd == "Q") {
        ctx.quadraticCurveTo(crds[c], crds[c + 1], crds[c + 2], crds[c + 3]);
        c += 4;
      } else if (cmd.charAt(0) == "#") {
        ctx.beginPath();
        ctx.fillStyle = cmd;
      } else if (cmd == "Z") {
        ctx.closePath();
      } else if (cmd == "X") {
        ctx.fill();
      }
    }
  };
  Typr.U.P = {};
  Typr.U.P.moveTo = function(p, x, y) {
    p.cmds.push("M");
    p.crds.push(x, y);
  };
  Typr.U.P.lineTo = function(p, x, y) {
    p.cmds.push("L");
    p.crds.push(x, y);
  };
  Typr.U.P.curveTo = function(p, a, b, c, d, e, f) {
    p.cmds.push("C");
    p.crds.push(a, b, c, d, e, f);
  };
  Typr.U.P.qcurveTo = function(p, a, b, c, d) {
    p.cmds.push("Q");
    p.crds.push(a, b, c, d);
  };
  Typr.U.P.closePath = function(p) {
    p.cmds.push("Z");
  };
  Typr.U._drawCFF = function(cmds, state, font, pdct, p) {
    var stack = state.stack;
    var nStems = state.nStems, haveWidth = state.haveWidth, width = state.width, open = state.open;
    var i = 0;
    var x = state.x, y = state.y, c1x = 0, c1y = 0, c2x = 0, c2y = 0, c3x = 0, c3y = 0, c4x = 0, c4y = 0, jpx = 0, jpy = 0;
    var o = { val: 0, size: 0 };
    while (i < cmds.length) {
      Typr.CFF.getCharString(cmds, i, o);
      var v = o.val;
      i += o.size;
      if (v == "o1" || v == "o18") {
        var hasWidthArg;
        hasWidthArg = stack.length % 2 !== 0;
        if (hasWidthArg && !haveWidth) {
          width = stack.shift() + pdct.nominalWidthX;
        }
        nStems += stack.length >> 1;
        stack.length = 0;
        haveWidth = true;
      } else if (v == "o3" || v == "o23") {
        var hasWidthArg;
        hasWidthArg = stack.length % 2 !== 0;
        if (hasWidthArg && !haveWidth) {
          width = stack.shift() + pdct.nominalWidthX;
        }
        nStems += stack.length >> 1;
        stack.length = 0;
        haveWidth = true;
      } else if (v == "o4") {
        if (stack.length > 1 && !haveWidth) {
          width = stack.shift() + pdct.nominalWidthX;
          haveWidth = true;
        }
        if (open)
          Typr.U.P.closePath(p);
        y += stack.pop();
        Typr.U.P.moveTo(p, x, y);
        open = true;
      } else if (v == "o5") {
        while (stack.length > 0) {
          x += stack.shift();
          y += stack.shift();
          Typr.U.P.lineTo(p, x, y);
        }
      } else if (v == "o6" || v == "o7") {
        var count = stack.length;
        var isX = v == "o6";
        for (var j = 0; j < count; j++) {
          var sval = stack.shift();
          if (isX) {
            x += sval;
          } else {
            y += sval;
          }
          isX = !isX;
          Typr.U.P.lineTo(p, x, y);
        }
      } else if (v == "o8" || v == "o24") {
        var count = stack.length;
        var index = 0;
        while (index + 6 <= count) {
          c1x = x + stack.shift();
          c1y = y + stack.shift();
          c2x = c1x + stack.shift();
          c2y = c1y + stack.shift();
          x = c2x + stack.shift();
          y = c2y + stack.shift();
          Typr.U.P.curveTo(p, c1x, c1y, c2x, c2y, x, y);
          index += 6;
        }
        if (v == "o24") {
          x += stack.shift();
          y += stack.shift();
          Typr.U.P.lineTo(p, x, y);
        }
      } else if (v == "o11") {
        break;
      } else if (v == "o1234" || v == "o1235" || v == "o1236" || v == "o1237") {
        if (v == "o1234") {
          c1x = x + stack.shift();
          c1y = y;
          c2x = c1x + stack.shift();
          c2y = c1y + stack.shift();
          jpx = c2x + stack.shift();
          jpy = c2y;
          c3x = jpx + stack.shift();
          c3y = c2y;
          c4x = c3x + stack.shift();
          c4y = y;
          x = c4x + stack.shift();
          Typr.U.P.curveTo(p, c1x, c1y, c2x, c2y, jpx, jpy);
          Typr.U.P.curveTo(p, c3x, c3y, c4x, c4y, x, y);
        }
        if (v == "o1235") {
          c1x = x + stack.shift();
          c1y = y + stack.shift();
          c2x = c1x + stack.shift();
          c2y = c1y + stack.shift();
          jpx = c2x + stack.shift();
          jpy = c2y + stack.shift();
          c3x = jpx + stack.shift();
          c3y = jpy + stack.shift();
          c4x = c3x + stack.shift();
          c4y = c3y + stack.shift();
          x = c4x + stack.shift();
          y = c4y + stack.shift();
          stack.shift();
          Typr.U.P.curveTo(p, c1x, c1y, c2x, c2y, jpx, jpy);
          Typr.U.P.curveTo(p, c3x, c3y, c4x, c4y, x, y);
        }
        if (v == "o1236") {
          c1x = x + stack.shift();
          c1y = y + stack.shift();
          c2x = c1x + stack.shift();
          c2y = c1y + stack.shift();
          jpx = c2x + stack.shift();
          jpy = c2y;
          c3x = jpx + stack.shift();
          c3y = c2y;
          c4x = c3x + stack.shift();
          c4y = c3y + stack.shift();
          x = c4x + stack.shift();
          Typr.U.P.curveTo(p, c1x, c1y, c2x, c2y, jpx, jpy);
          Typr.U.P.curveTo(p, c3x, c3y, c4x, c4y, x, y);
        }
        if (v == "o1237") {
          c1x = x + stack.shift();
          c1y = y + stack.shift();
          c2x = c1x + stack.shift();
          c2y = c1y + stack.shift();
          jpx = c2x + stack.shift();
          jpy = c2y + stack.shift();
          c3x = jpx + stack.shift();
          c3y = jpy + stack.shift();
          c4x = c3x + stack.shift();
          c4y = c3y + stack.shift();
          if (Math.abs(c4x - x) > Math.abs(c4y - y)) {
            x = c4x + stack.shift();
          } else {
            y = c4y + stack.shift();
          }
          Typr.U.P.curveTo(p, c1x, c1y, c2x, c2y, jpx, jpy);
          Typr.U.P.curveTo(p, c3x, c3y, c4x, c4y, x, y);
        }
      } else if (v == "o14") {
        if (stack.length > 0 && !haveWidth) {
          width = stack.shift() + font.nominalWidthX;
          haveWidth = true;
        }
        if (stack.length == 4) {
          var adx = stack.shift();
          var ady = stack.shift();
          var bchar = stack.shift();
          var achar = stack.shift();
          var bind2 = Typr.CFF.glyphBySE(font, bchar);
          var aind = Typr.CFF.glyphBySE(font, achar);
          Typr.U._drawCFF(font.CharStrings[bind2], state, font, pdct, p);
          state.x = adx;
          state.y = ady;
          Typr.U._drawCFF(font.CharStrings[aind], state, font, pdct, p);
        }
        if (open) {
          Typr.U.P.closePath(p);
          open = false;
        }
      } else if (v == "o19" || v == "o20") {
        var hasWidthArg;
        hasWidthArg = stack.length % 2 !== 0;
        if (hasWidthArg && !haveWidth) {
          width = stack.shift() + pdct.nominalWidthX;
        }
        nStems += stack.length >> 1;
        stack.length = 0;
        haveWidth = true;
        i += nStems + 7 >> 3;
      } else if (v == "o21") {
        if (stack.length > 2 && !haveWidth) {
          width = stack.shift() + pdct.nominalWidthX;
          haveWidth = true;
        }
        y += stack.pop();
        x += stack.pop();
        if (open)
          Typr.U.P.closePath(p);
        Typr.U.P.moveTo(p, x, y);
        open = true;
      } else if (v == "o22") {
        if (stack.length > 1 && !haveWidth) {
          width = stack.shift() + pdct.nominalWidthX;
          haveWidth = true;
        }
        x += stack.pop();
        if (open)
          Typr.U.P.closePath(p);
        Typr.U.P.moveTo(p, x, y);
        open = true;
      } else if (v == "o25") {
        while (stack.length > 6) {
          x += stack.shift();
          y += stack.shift();
          Typr.U.P.lineTo(p, x, y);
        }
        c1x = x + stack.shift();
        c1y = y + stack.shift();
        c2x = c1x + stack.shift();
        c2y = c1y + stack.shift();
        x = c2x + stack.shift();
        y = c2y + stack.shift();
        Typr.U.P.curveTo(p, c1x, c1y, c2x, c2y, x, y);
      } else if (v == "o26") {
        if (stack.length % 2) {
          x += stack.shift();
        }
        while (stack.length > 0) {
          c1x = x;
          c1y = y + stack.shift();
          c2x = c1x + stack.shift();
          c2y = c1y + stack.shift();
          x = c2x;
          y = c2y + stack.shift();
          Typr.U.P.curveTo(p, c1x, c1y, c2x, c2y, x, y);
        }
      } else if (v == "o27") {
        if (stack.length % 2) {
          y += stack.shift();
        }
        while (stack.length > 0) {
          c1x = x + stack.shift();
          c1y = y;
          c2x = c1x + stack.shift();
          c2y = c1y + stack.shift();
          x = c2x + stack.shift();
          y = c2y;
          Typr.U.P.curveTo(p, c1x, c1y, c2x, c2y, x, y);
        }
      } else if (v == "o10" || v == "o29") {
        var obj = v == "o10" ? pdct : font;
        if (stack.length == 0) {
          console.warn("error: empty stack");
        } else {
          var ind = stack.pop();
          var subr = obj.Subrs[ind + obj.Bias];
          state.x = x;
          state.y = y;
          state.nStems = nStems;
          state.haveWidth = haveWidth;
          state.width = width;
          state.open = open;
          Typr.U._drawCFF(subr, state, font, pdct, p);
          x = state.x;
          y = state.y;
          nStems = state.nStems;
          haveWidth = state.haveWidth;
          width = state.width;
          open = state.open;
        }
      } else if (v == "o30" || v == "o31") {
        var count, count1 = stack.length;
        var index = 0;
        var alternate = v == "o31";
        count = count1 & ~2;
        index += count1 - count;
        while (index < count) {
          if (alternate) {
            c1x = x + stack.shift();
            c1y = y;
            c2x = c1x + stack.shift();
            c2y = c1y + stack.shift();
            y = c2y + stack.shift();
            if (count - index == 5) {
              x = c2x + stack.shift();
              index++;
            } else {
              x = c2x;
            }
            alternate = false;
          } else {
            c1x = x;
            c1y = y + stack.shift();
            c2x = c1x + stack.shift();
            c2y = c1y + stack.shift();
            x = c2x + stack.shift();
            if (count - index == 5) {
              y = c2y + stack.shift();
              index++;
            } else {
              y = c2y;
            }
            alternate = true;
          }
          Typr.U.P.curveTo(p, c1x, c1y, c2x, c2y, x, y);
          index += 4;
        }
      } else if ((v + "").charAt(0) == "o") {
        console.warn("Unknown operation: " + v, cmds);
        throw v;
      } else
        stack.push(v);
    }
    state.x = x;
    state.y = y;
    state.nStems = nStems;
    state.haveWidth = haveWidth;
    state.width = width;
    state.open = open;
  };
  Typr$1.Typr = Typr;
  var Typr_js_1 = Typr$1;
  var friendlyTags = { "aalt": "Access All Alternates", "abvf": "Above-base Forms", "abvm": "Above - base Mark Positioning", "abvs": "Above - base Substitutions", "afrc": "Alternative Fractions", "akhn": "Akhands", "blwf": "Below - base Forms", "blwm": "Below - base Mark Positioning", "blws": "Below - base Substitutions", "calt": "Contextual Alternates", "case": "Case - Sensitive Forms", "ccmp": "Glyph Composition / Decomposition", "cfar": "Conjunct Form After Ro", "cjct": "Conjunct Forms", "clig": "Contextual Ligatures", "cpct": "Centered CJK Punctuation", "cpsp": "Capital Spacing", "cswh": "Contextual Swash", "curs": "Cursive Positioning", "c2pc": "Petite Capitals From Capitals", "c2sc": "Small Capitals From Capitals", "dist": "Distances", "dlig": "Discretionary Ligatures", "dnom": "Denominators", "dtls": "Dotless Forms", "expt": "Expert Forms", "falt": "Final Glyph on Line Alternates", "fin2": "Terminal Forms #2", "fin3": "Terminal Forms #3", "fina": "Terminal Forms", "flac": "Flattened accent forms", "frac": "Fractions", "fwid": "Full Widths", "half": "Half Forms", "haln": "Halant Forms", "halt": "Alternate Half Widths", "hist": "Historical Forms", "hkna": "Horizontal Kana Alternates", "hlig": "Historical Ligatures", "hngl": "Hangul", "hojo": "Hojo Kanji Forms(JIS X 0212 - 1990 Kanji Forms)", "hwid": "Half Widths", "init": "Initial Forms", "isol": "Isolated Forms", "ital": "Italics", "jalt": "Justification Alternates", "jp78": "JIS78 Forms", "jp83": "JIS83 Forms", "jp90": "JIS90 Forms", "jp04": "JIS2004 Forms", "kern": "Kerning", "lfbd": "Left Bounds", "liga": "Standard Ligatures", "ljmo": "Leading Jamo Forms", "lnum": "Lining Figures", "locl": "Localized Forms", "ltra": "Left - to - right alternates", "ltrm": "Left - to - right mirrored forms", "mark": "Mark Positioning", "med2": "Medial Forms #2", "medi": "Medial Forms", "mgrk": "Mathematical Greek", "mkmk": "Mark to Mark Positioning", "mset": "Mark Positioning via Substitution", "nalt": "Alternate Annotation Forms", "nlck": "NLC Kanji Forms", "nukt": "Nukta Forms", "numr": "Numerators", "onum": "Oldstyle Figures", "opbd": "Optical Bounds", "ordn": "Ordinals", "ornm": "Ornaments", "palt": "Proportional Alternate Widths", "pcap": "Petite Capitals", "pkna": "Proportional Kana", "pnum": "Proportional Figures", "pref": "Pre - Base Forms", "pres": "Pre - base Substitutions", "pstf": "Post - base Forms", "psts": "Post - base Substitutions", "pwid": "Proportional Widths", "qwid": "Quarter Widths", "rand": "Randomize", "rclt": "Required Contextual Alternates", "rkrf": "Rakar Forms", "rlig": "Required Ligatures", "rphf": "Reph Forms", "rtbd": "Right Bounds", "rtla": "Right - to - left alternates", "rtlm": "Right - to - left mirrored forms", "ruby": "Ruby Notation Forms", "rvrn": "Required Variation Alternates", "salt": "Stylistic Alternates", "sinf": "Scientific Inferiors", "size": "Optical size", "smcp": "Small Capitals", "smpl": "Simplified Forms", "ssty": "Math script style alternates", "stch": "Stretching Glyph Decomposition", "subs": "Subscript", "sups": "Superscript", "swsh": "Swash", "titl": "Titling", "tjmo": "Trailing Jamo Forms", "tnam": "Traditional Name Forms", "tnum": "Tabular Figures", "trad": "Traditional Forms", "twid": "Third Widths", "unic": "Unicase", "valt": "Alternate Vertical Metrics", "vatu": "Vattu Variants", "vert": "Vertical Writing", "vhal": "Alternate Vertical Half Metrics", "vjmo": "Vowel Jamo Forms", "vkna": "Vertical Kana Alternates", "vkrn": "Vertical Kerning", "vpal": "Proportional Alternate Vertical Metrics", "vrt2": "Vertical Alternates and Rotation", "vrtr": "Vertical Alternates for Rotation", "zero": "Slashed Zero" };
  var Font = (
    
    function() {
      function Font2(data) {
        var obj = Typr_js_1.Typr.parse(data);
        if (!obj.length || typeof obj[0] !== "object" || typeof obj[0].hasOwnProperty !== "function") {
          throw "unable to parse font";
        }
        for (var n in obj[0]) {
          this[n] = obj[0][n];
        }
        this.enabledGSUB = {};
      }
      Font2.prototype.getFamilyName = function() {
        return this.name && (this.name.typoFamilyName || this.name.fontFamily) || "";
      };
      Font2.prototype.getSubFamilyName = function() {
        return this.name && (this.name.typoSubfamilyName || this.name.fontSubfamily) || "";
      };
      Font2.prototype.glyphToPath = function(gid) {
        return Typr_js_1.Typr.U.glyphToPath(this, gid);
      };
      Font2.prototype.getPairAdjustment = function(gid1, gid2) {
        return Typr_js_1.Typr.U.getPairAdjustment(this, gid1, gid2);
      };
      Font2.prototype.stringToGlyphs = function(str) {
        return Typr_js_1.Typr.U.stringToGlyphs(this, str);
      };
      Font2.prototype.glyphsToPath = function(gls) {
        return Typr_js_1.Typr.U.glyphsToPath(this, gls);
      };
      Font2.prototype.pathToSVG = function(path, prec) {
        return Typr_js_1.Typr.U.pathToSVG(path, prec);
      };
      Font2.prototype.pathToContext = function(path, ctx) {
        return Typr_js_1.Typr.U.pathToContext(path, ctx);
      };
      Font2.prototype.lookupFriendlyName = function(table, feature) {
        if (this[table] !== void 0) {
          var tbl = this[table];
          var feat = tbl.featureList[feature];
          return this.featureFriendlyName(feat);
        }
        return "";
      };
      Font2.prototype.featureFriendlyName = function(feature) {
        if (friendlyTags[feature.tag]) {
          return friendlyTags[feature.tag];
        }
        if (feature.tag.match(/ss[0-2][0-9]/)) {
          var name_1 = "Stylistic Set " + Number(feature.tag.substr(2, 2)).toString();
          if (feature.featureParams) {
            var version = Typr_js_1.Typr._bin.readUshort(this._data, feature.featureParams);
            if (version === 0) {
              var nameID = Typr_js_1.Typr._bin.readUshort(this._data, feature.featureParams + 2);
              if (this.name && this.name[nameID] !== void 0) {
                return name_1 + " - " + this.name[nameID];
              }
            }
          }
          return name_1;
        }
        if (feature.tag.match(/cv[0-9][0-9]/)) {
          return "Character Variant " + Number(feature.tag.substr(2, 2)).toString();
        }
        return "";
      };
      Font2.prototype.enableGSUB = function(featureNumber) {
        if (this.GSUB) {
          var feature = this.GSUB.featureList[featureNumber];
          if (feature) {
            for (var i = 0; i < feature.tab.length; ++i) {
              this.enabledGSUB[feature.tab[i]] = (this.enabledGSUB[feature.tab[i]] || 0) + 1;
            }
          }
        }
      };
      Font2.prototype.disableGSUB = function(featureNumber) {
        if (this.GSUB) {
          var feature = this.GSUB.featureList[featureNumber];
          if (feature) {
            for (var i = 0; i < feature.tab.length; ++i) {
              if (this.enabledGSUB[feature.tab[i]] > 1) {
                --this.enabledGSUB[feature.tab[i]];
              } else {
                delete this.enabledGSUB[feature.tab[i]];
              }
            }
          }
        }
      };
      Font2.prototype.codeToGlyph = function(code) {
        var g = Typr_js_1.Typr.U.codeToGlyph(this, code);
        if (this.GSUB) {
          var gls = [g];
          for (var n in this.enabledGSUB) {
            var l = this.GSUB.lookupList[n];
            Typr_js_1.Typr.U._applySubs(gls, 0, l, this.GSUB.lookupList);
          }
          if (gls.length === 1)
            return gls[0];
        }
        return g;
      };
      return Font2;
    }()
  );
  var Font_1 = Font;
  function decodeCipherFont(doc) {
    const styleNodes = doc.querySelectorAll("style");
    let cipherStyle = null;
    for (let i = 0; i < styleNodes.length; i++) {
      if (styleNodes[i].textContent?.includes("font-cxsecret")) {
        cipherStyle = styleNodes[i];
        break;
      }
    }
    if (!cipherStyle) return;
    const b64Match = cipherStyle.textContent?.match(/base64,([\w\W]+?)'/);
    if (!b64Match) return;
    const raw = window.atob(b64Match[1]);
    const buf = new ArrayBuffer(raw.length);
    const bytes = new Uint8Array(buf);
    for (let i = 0; i < raw.length; i++) bytes[i] = raw.charCodeAt(i);
    const fontObj = new Font_1(buf);
    const ttfTable = JSON.parse(_GM_getResourceText("ttf"));
    const charMap = {};
    for (let codePoint = 19968; codePoint <= 40870; codePoint++) {
      const glyphId = fontObj.codeToGlyph(codePoint);
      if (!glyphId) continue;
      const pathData = fontObj.glyphToPath(glyphId);
      const signature = md5(JSON.stringify(pathData)).slice(24);
      charMap[codePoint] = ttfTable[signature];
    }
    const encryptedEls = doc.querySelectorAll(".font-cxsecret");
    for (let i = 0; i < encryptedEls.length; i++) {
      const el = encryptedEls[i];
      let text = el.innerHTML;
      for (const cp in charMap) {
        const decoded = String.fromCharCode(charMap[cp]);
        const re = new RegExp(String.fromCharCode(+cp), "g");
        text = text.replace(re, decoded);
      }
      el.innerHTML = text;
      el.classList.remove("font-cxsecret");
    }
  }
  class QuestionProcessor {
    constructor() {
      __publicField(this, "_document", document);
      __publicField(this, "_window", _unsafeWindow);
      __publicField(this, "addLog");
      __publicField(this, "addQuestion");
      __publicField(this, "questions", []);
      __publicField(this, "correctNum", 0);
      __publicField(this, "isFilling", false);  
      __publicField(this, "parseHtml", () => {
        throw new Error("Abstract method: parseHtml must be implemented by subclass");
      });
      __publicField(this, "fillQuestion", (question) => {
        throw new Error("Abstract method: fillQuestion must be implemented by subclass");
      });
      
      __publicField(this, "checkIfAnswered", (question) => {
        
        if (question.type === "0" || question.type === "1") {
          for (const key in question.options) {
            const optEl = question.options[key];
            if (optEl.getAttribute("aria-checked") === "true") {
              return true;
            }
          }
          return false;
        }
        
        if (question.type === "2") {
          const taElements = question.element.querySelectorAll("textarea");
          for (const ta of taElements) {
            if (ta.value && ta.value.trim() !== "") {
              return true;
            }
          }
          return false;
        }
        
        if (question.type === "3") {
          for (const key in question.options) {
            if (question.options[key].getAttribute("aria-checked") === "true") {
              return true;
            }
          }
          return false;
        }
        
        if (question.type === "4" || question.type === "5" || question.type === "6" || question.type === "7") {
          const taEl = question.element.querySelector("textarea");
          if (taEl && taEl.value && taEl.value.trim() !== "") {
            return true;
          }
          return false;
        }
        
        return false;
      });
      __publicField(this, "typeMap", new Map([
        ["单选题", "0"], ["A1型题", "0"], ["A1A2型题", "0"],
        ["多选题", "1"], ["X型题", "1"],
        ["填空题", "2"],
        ["判断题", "3"],
        ["简答题", "4"], ["名词解释", "5"],
        ["论述题", "6"], ["计算题", "7"],
        ["排序题", "13"]
      ]));
      __publicField(this, "stripTags", (html) => {
        if (html == null) return "";
        return html.replace(REGEX.HTML_TAGS, "").replace(REGEX.NBSP, " ").replace(REGEX.WHITESPACE, " ").replace(REGEX.BR_TAG, "\n").replace(REGEX.IMG_TAG, '<img src="$1"/>').trim();
      });
      __publicField(this, "trimTitle", (str) => {
        return str.replace(REGEX.CLEAN_TITLE, "");
      });
      const logStore = useLogStore();
      const questionStore = useQuestionStore();
      this.addLog = logStore.addLog;
      this.addQuestion = questionStore.addQuestion;
    }
  }
  const buildErrorResponse = (reason) => ({
    code: 50001,
    data: {
      answer: [],
      num: "",
      usenum: ""
    },
    msg: reason
  });
  
  const clearFillingFlag = (optionElement) => {
    setTimeout(() => optionElement.removeAttribute("data-filling"), 200);
  };
  
  
  const showNoticeDialog = (title, message, noticeType) => {
    const dialog = document.createElement('div');
    dialog.id = 'server-notice-dialog';
    dialog.innerHTML = `
      <div style="position: fixed; top: 0; left: 0; right: 0; bottom: 0; background: rgba(0,0,0,0.5); z-index: 2147483647; display: flex; align-items: center; justify-content: center;">
        <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); border-radius: 16px; padding: 0; max-width: 420px; width: 90%; box-shadow: 0 20px 60px rgba(0,0,0,0.3); overflow: hidden;">
          <div style="padding: 20px 24px 16px; text-align: center;">
            <div style="font-size: 48px; margin-bottom: 12px;">📢</div>
            <div style="color: #fff; font-size: 18px; font-weight: 600; margin-bottom: 12px;">${title}</div>
            <div style="background: rgba(255,255,255,0.15); border-radius: 12px; padding: 16px; color: #fff; font-size: 14px; line-height: 1.8; text-align: left;">
              ${message}
            </div>
            <div style="margin-top: 14px; background: rgba(255,255,255,0.1); border-radius: 10px; padding: 12px; color: #fff; font-size: 13px;">
              <div style="margin-bottom: 6px;">💬 加入QQ群了解更多信息：</div>
              <div style="font-size: 16px; font-weight: 600; color: #ffd700;">152898956</div>
            </div>
          </div>
          <div style="padding: 12px 24px 20px; display: flex; justify-content: center; gap: 12px;">
            <button id="notice-qq-btn" style="background: #fff; color: #764ba2; border: none; padding: 12px 30px; border-radius: 25px; font-size: 14px; font-weight: 600; cursor: pointer; box-shadow: 0 4px 15px rgba(0,0,0,0.2);">
              加入QQ群
            </button>
            <button id="notice-close-btn" style="background: rgba(255,255,255,0.3); color: #fff; border: none; padding: 12px 30px; border-radius: 25px; font-size: 14px; font-weight: 600; cursor: pointer;">
              我知道了
            </button>
          </div>
        </div>
      </div>
    `;
    document.body.appendChild(dialog);
    document.getElementById('notice-qq-btn').onclick = () => {
      window.open('https://qun.qq.com/universal-share/share?ac=1&authKey=aXTc3%2B9CzLY17EtOYLTOLRrsBQ%2FO961BD7jXTm39dq%2BYq3aUqIUXDhiyRFST5Rlj&busi_data=eyJncm91cENvZGUiOiIxNTI4OTg5NTYiLCJ0b2tlbiI6IlFuRDNReWF6S2N6NlR3dkN5OWxYVzU2c3Qwazd5bWFsS3BEZ0Ezb2hvSEVBaVFuUDJGbmgzWGlranloSFRvay8iLCJ1aW4iOiIyNDEzMDc2OTY1In0%3D&data=4HWsNkbY-XgM7w33fUZT7doIplKseoS8daXEIsxdBr8UoWE5nC0dFWEywJ_AZFA0mdf562GNoaKCuz9rTPo9nw&svctype=4&tempid=h5_group_info', '_blank');
    };
    document.getElementById('notice-close-btn').onclick = () => {
      _GM_setValue('closed_notice_type', noticeType);
      dialog.remove();
    };
  };
  
  
  const checkServerNotice = () => {
    _GM_xmlhttpRequest({
      method: "GET",
      url: getRandomServer() + "/notice",
      timeout: 5000,
      onload: (response) => {
        try {
          const result = JSON.parse(response.responseText);
          if (result.code === 200 && result.data && result.data.enabled) {
            const noticeType = result.data.type || 1;
            const noticeMessage = result.data.message || '';
            const noticeTitle = result.data.title || '📢 系统公告';
            const closedNotice = _GM_getValue('closed_notice_type', 0);
            if (closedNotice === noticeType) {
              console.log('用户已关闭此通知，不再显示');
              return;
            }
            showNoticeDialog(noticeTitle, noticeMessage, noticeType);
          }
        } catch (e) {
          console.error('检查通知失败:', e);
        }
      },
      onerror: () => console.log('检查通知失败')
    });
  };
  
  
  const verifyTokenForQuery = (token) => {
    return new Promise((resolve) => {
      const userId = _self.uid || _self.getCookie("UID") || _self.getCookie("_uid") || "";
      _GM_xmlhttpRequest({
        method: "GET",
        url: getRandomServer() + "?token=" + encodeURIComponent(token) + "&userId=" + encodeURIComponent(userId),
        timeout: 10000,
        onload: (response) => {
          try {
            const res = JSON.parse(response.responseText);
            if (res.code === 200 && res.data && res.data.valid) {
              resolve({ success: true, num: res.data.num });
            } else {
              resolve({ success: false, msg: res.msg || "Token无效" });
            }
          } catch (e) {
            resolve({ success: false, msg: "响应解析失败" });
          }
        },
        onerror: () => resolve({ success: false, msg: "连接失败" }),
        ontimeout: () => resolve({ success: false, msg: "连接超时" })
      });
    });
  };
  
  const fetchAnswerData = async (question) => {
    var _a;
    const _self = _unsafeWindow;
    const configStore = useConfigStore();
    const token = configStore.queryApis[0].token;

    window.__answerModeLogged = false;

    
    
    

    
    
    
    let verifyAnswer = false;
    let useAIOnly = false;  
    let aiType = globalModelConfig?.typeOptions?.[0] || '';  
    let aiModel = globalModelConfig?.defaultModels?.[aiType] || '';  
    const answerParamsPart = configStore.platformParams[configStore.platformName]?.parts.find(p => p.name === "答题参数");
    if (answerParamsPart && answerParamsPart.params) {
      const normalModeParam = answerParamsPart.params.find(p => p.name === "正常模式");
      const aiModeParam = answerParamsPart.params.find(p => p.name === "AI模式");
      const answerVerifyParam = answerParamsPart.params.find(p => p.name === "答案校验");
      const aiTypeParam = answerParamsPart.params.find(p => p.name === "AI 类型选择");
      const aiModelParam = answerParamsPart.params.find(p => p.name === "AI 模型选择");
          
      
      if (aiTypeParam && aiTypeParam.value) {
        aiType = aiTypeParam.value;
      }
      if (aiModelParam && aiModelParam.value) {
        aiModel = aiModelParam.value;
      }
          
      
      if (aiModeParam && aiModeParam.value) {
        useAIOnly = true;  
      } else if (answerVerifyParam && answerVerifyParam.value) {
        verifyAnswer = true;  
      }
      
    }
    
    
    const modelType = getModelType(aiType, aiModel);
    
    if ((useAIOnly || verifyAnswer) && !configStore.tokenVerified) {
      return buildErrorResponse("AI模式和校验模式需要输入有效Token");
    }

    const logStore = useLogStore();
    if (!window.__answerModeLogged && useAIOnly) {
      logStore.addLog(`🎯 AI模型: ${aiType} - ${aiModel}`, 'info');
    }

    let userId = '';
    if (_self?.getCookie) {
      userId = _self.getCookie("UID");
    }
    if (!userId) {
      userId = getCookie('UID');
    }
    if (!userId) {
      userId = getCookie('_uid');
    }
    if (!userId && _self?.uid) {
      userId = _self.uid;
    }
    
    
    const questionData = {
      question: question.title,
      options: question.optionsText,
      type: question.type,
      questionData: question.element.outerHTML,
      workType: question.workType,
      id: ((_a = question.refer.match(/courseId=(\d+)/)) == null ? void 0 : _a[1]) || "",
      refer: question.refer,
      u: userId,
      t: Math.floor(( new Date()).getTime() / 1e3).toString()
    };
    
    
    const startTaskId = window.__getAnswerTaskId__ ? window.__getAnswerTaskId__() : 0;
    
    const answerIntervalParam = answerParamsPart?.params.find(p => p.name === "答题间隔");
    const simulateDelay = answerParamsPart?.params.find(p => p.name === "模拟延迟")?.value ?? true;
    await (simulateDelay ? randomDelay(answerIntervalParam?.value || 1, 0.5) : delay(answerIntervalParam?.value || 1));
    
    
    const currentTaskIdAfterSleep = window.__getAnswerTaskId__ ? window.__getAnswerTaskId__() : 0;
    if (currentTaskIdAfterSleep !== startTaskId) {
      return { code: 499, msg: '用户取消', data: null };
    }
    
    
    const sendRequest = (checkOnly = false) => {
      return new Promise((resolve) => {
        
        if (!checkOnly && !window.__answerModeLogged) {
          window.__answerModeLogged = true;
          const logStore = useLogStore();
          if (useAIOnly) {
            logStore.addLog('🤖 AI答题模式中', 'primary');
          } else if (verifyAnswer) {
            logStore.addLog('✅ 答案校验模式中', 'primary');
          } else {
            logStore.addLog('📚 正常模式答题中', 'primary');
          }
        }

        
        const logStore = useLogStore();
        if (useAIOnly && !checkOnly && !window.__inThinkingMode__) {
          logStore.addLog(`⏳ ${aiType} ${aiModel} 正在处理中，请耐心等待...`, 'info');
        }

        
        const timeout = checkOnly ? 60000 : 90000;
        
        _GM_xmlhttpRequest({
          url: getRandomServer(),
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          data: JSON.stringify({
            token: token,
            questionData: questionData,
            verifyAnswer: verifyAnswer,
            aiMode: useAIOnly,  
            model: modelType,  
            checkOnly: checkOnly,  
            userId: questionData.u,
            async: true
          }),
          timeout: timeout,  
          onload: (response) => {
            try {
              const apiResponse = JSON.parse(response.responseText);
              
              if (apiResponse.code === 202 && apiResponse.data && apiResponse.data.taskId) {
                const taskId = apiResponse.data.taskId;
                pollQueryTask(taskId, resolve, calculatePollInterval(checkOnly));
              } else {
                resolve(buildErrorResponse(`意外响应码: ${apiResponse.code}, ${apiResponse.msg || ''}`));
              }
            } catch (e) {
              resolve(buildErrorResponse("解析出错"));
            }
          },
          onerror: () => resolve(buildErrorResponse("请求出错")),
          ontimeout: () => resolve({ code: 404, msg: "请求超时", data: { answer: [] } })
        });
      });
    };
    
    const calculatePollInterval = (checkOnly = false) => {
      if (verifyAnswer) {
        return checkOnly ? 2000 : 5000;
      } else if (useAIOnly) {
        return 2000;
      } else {
        return 1000;
      }
    };

    const pollQueryTask = (taskId, resolve, pollInterval = 3000) => {
      let pollCount = 0;
      const maxPolls = 120;
      
      const poll = () => {
        pollCount++;
        if (pollCount > maxPolls) {
          resolve(buildErrorResponse("查询超时"));
          return;
        }
        
        _GM_xmlhttpRequest({
          url: getRandomServer() + `/query-task/${taskId}`,
          method: "GET",
          timeout: 10000,
          onload: (response) => {
            try {
              const result = JSON.parse(response.responseText);
              if (result.code === 200 && result.data) {
                const { status, result: taskResult } = result.data;
                if (status === 'completed' && taskResult) {
                  resolve(taskResult);
                } else if (status === 'processing' || status === 'pending') {
                  setTimeout(poll, pollInterval);
                } else {
                  resolve(buildErrorResponse("查询异常"));
                }
              } else if (result.code === 404) {
                resolve(buildErrorResponse("任务过期"));
              } else {
                resolve(buildErrorResponse("轮询异常"));
              }
            } catch (e) {
              setTimeout(poll, pollInterval);
            }
          },
          onerror: () => setTimeout(poll, pollInterval),
          ontimeout: () => setTimeout(poll, pollInterval)
        });
      };
      
      setTimeout(poll, pollInterval);
    };

    
    const firstResponse = useAIOnly ? await sendRequest(false) : await sendRequest(true);

    if (firstResponse.code === 202 && firstResponse.status === "thinking") {
      const logStore = useLogStore();
      
      
      const thinkingModelName = firstResponse.data?.thinkingModel || 'AI模型';
      
      const thinkingStartTaskId = window.__getAnswerTaskId__ ? window.__getAnswerTaskId__() : 0;
      logStore.addLog('🤔 答案校验失败，启动深度思考...', 'warning');
      logStore.addLog(`⏳ ${thinkingModelName} 正在深度思考中，请耐心等待...`, 'info');

      
      window.__inThinkingMode__ = true;
      console.log('答案校验失败，题库答案:', firstResponse.data.tikuAnswer);
      console.log('AI答案(非思维):', firstResponse.data.aiAnswer);
      
      
      const currentTaskId = window.__getAnswerTaskId__ ? window.__getAnswerTaskId__() : 0;
      if (currentTaskId !== thinkingStartTaskId) {
        return { code: 499, msg: '用户取消', data: null };
      }
      
      
      await randomDelay(0.1, 0.15);
      
      
      const currentTaskId2 = window.__getAnswerTaskId__ ? window.__getAnswerTaskId__() : 0;
      if (currentTaskId2 !== thinkingStartTaskId) {
        return { code: 499, msg: '用户取消', data: null };
      }
      
      const finalResponse = await sendRequest(false);

      
      window.__inThinkingMode__ = false;

      return finalResponse;
    }

    
    if (firstResponse.code === 403) {
      
      if (useAIOnly || verifyAnswer) {
      return buildErrorResponse("AI模式和校验模式需要输入有效Token");
    }
    
    
    
    }

    return firstResponse;
  };
  const queryAnswer = async (question) => {
    return await fetchAnswerData(question);
  };
  
  
  const detectAndReportResults = async (document, maxWaitTime = 10000) => {
    try {
      const logStore = useLogStore();
      const questionStore = useQuestionStore();
      
      // 等待题目元素加载（最多等待maxWaitTime毫秒）
      let questionElements = [];
      const startTime = Date.now();
      while (Date.now() - startTime < maxWaitTime) {
        questionElements = document.querySelectorAll(SELECTORS.CX_QUESTION_ZJ);
        if (questionElements.length === 0) {
          questionElements = document.querySelectorAll(SELECTORS.CX_QUESTION_ZY_KS);
        }
        if (questionElements.length > 0) break;
        await new Promise(resolve => setTimeout(resolve, 500));
      }
      
      if (questionElements.length === 0) {
        logStore.addLog(`[正确性检测] 等待${maxWaitTime}ms后仍未找到题目元素，跳过上报`, "warning");
        return;
      }
      
      const questionsWithResults = [];
      let correctCount = 0;
      let wrongCount = 0;
      
      questionElements.forEach((qEl, index) => {
        const question = questionStore.questionList?.[index];
        if (!question) return;
        
        
        const markingDui = qEl.querySelector(".marking_dui");
        const markingCuo = qEl.querySelector(".marking_cuo");
        const markingBandui = qEl.querySelector(".marking_bandui");
        
        if (markingDui) {
          question.isCorrect = 1;
          correctCount++;
        } else if (markingCuo || markingBandui) {
          
          question.isCorrect = 0;
          wrongCount++;
        }
        
        questionsWithResults.push(question);
      });
      
      
      if (correctCount > 0 || wrongCount > 0) {
        logStore.addLog(`检测结果: ${correctCount}题正确, ${wrongCount}题错误`, correctCount > wrongCount ? "success" : "warning");
      }
      
      
      if (questionsWithResults.length > 0) {
        await reportAnswerResults(questionsWithResults);
      }
    } catch (e) {
      console.error("detectAndReportResults error:", e);
      try {
        const logStore = useLogStore();
        logStore.addLog(`检测正确性出错: ${e.message}`, "danger");
      } catch (e2) {
        console.error("无法输出日志:", e2);
      }
    }
  };
  
  
  const reportAnswerResults = async (questions) => {
    const configStore = useConfigStore();
    const logStore = useLogStore();
    const token = configStore.queryApis[0].token;
    
    
    const validQuestions = questions.filter(q => (q.type === "0" || q.type === "1" || q.type === "3") && (q.isCorrect === 0 || q.isCorrect === 1));
    
    if (validQuestions.length === 0) {
      logStore.addLog("无选择题/判断题，跳过正确性上报", "info");
      return;
    }
    
    logStore.addLog(`开始上报${validQuestions.length}道题的正确性结果...`, "primary");
    
    
    const reportData = validQuestions.map(q => ({
      question: q.title,
      options: q.optionsText || [],
      type: q.type,
      isCorrect: q.isCorrect 
    }));
    
    
    try {
      _GM_xmlhttpRequest({
        method: "POST",
        url: getRandomServer() + "/report-answer-results",
        headers: {
          "Content-Type": "application/json",
          "Authorization": token ? `Bearer ${token}` : ""
        },
        data: JSON.stringify({
          results: reportData
        }),
        timeout: 10000,
        onload: (response) => {
          try {
            const res = JSON.parse(response.responseText);
            if (res.code === 200) {
              logStore.addLog(`✓ 正确性上报成功: ${res.data.successCount}/${validQuestions.length}`, "success");
            } else {
              logStore.addLog(`⚠ 正确性上报失败: ${res.msg}`, "warning");
            }
          } catch (e) {
            logStore.addLog(`⚠ 正确性上报响应解析失败`, "warning");
          }
        },
        ontimeout: () => {
          logStore.addLog(`⚠ 正确性上报超时(10秒)`, "warning");
        },
        onerror: () => {
          logStore.addLog(`⚠ 正确性上报网络错误`, "warning");
        }
      });
    } catch (e) {
      logStore.addLog(`⚠ 正确性上报异常: ${e.message}`, "warning");
    }
  };
  
  const computeMatch = (str1, str2) => {
    const s1 = str1.trim().toLowerCase();
    const s2 = str2.trim().toLowerCase();
    if (s1 === s2)
      return 100;
    if (s1.length === 0 || s2.length === 0)
      return 0;
    const matrix = [];
    for (let i = 0; i <= s1.length; i++) {
      matrix[i] = [i];
    }
    for (let j = 0; j <= s2.length; j++) {
      matrix[0][j] = j;
    }
    for (let i = 1; i <= s1.length; i++) {
      for (let j = 1; j <= s2.length; j++) {
        if (s1.charAt(i - 1) === s2.charAt(j - 1)) {
          matrix[i][j] = matrix[i - 1][j - 1];
        } else {
          matrix[i][j] = Math.min(
            matrix[i - 1][j - 1] + 1,
            
            matrix[i][j - 1] + 1,
            
            matrix[i - 1][j] + 1
            
          );
        }
      }
    }
    const distance = matrix[s1.length][s2.length];
    const maxLength = Math.max(s1.length, s2.length);
    const similarity = (maxLength - distance) / maxLength * 100;
    return Math.round(similarity);
  };
  const pickBestOption = (answer, options, threshold = 50) => {
    let bestMatch = null;
    for (const key in options) {
      const similarity = computeMatch(answer, key);
      if (similarity === 100) {
        return { key, similarity: 100 };
      }
      if (similarity >= threshold && (!bestMatch || similarity > bestMatch.similarity)) {
        bestMatch = { key, similarity };
      }
    }
    return bestMatch;
  };
  class CxQuestionHandler extends QuestionProcessor {
    constructor(type, iframe) {
      super();
      __publicField(this, "type");
      __publicField(this, "init", async () => {
        this.questions = [];
        this.parseHtml();
        if (this.questions.length) {
          this.addLog(`成功解析到${this.questions.length}个题目`, "primary");
          const configStore = useConfigStore();
          
          const startTaskId = window.__getAnswerTaskId__ ? window.__getAnswerTaskId__() : 0;
          
          const _answerParamsPart1 = configStore.platformParams[configStore.platformName]?.parts.find(p => p.name === "答题参数");
          const skipAnswered = _answerParamsPart1?.params.find(p => p.name === "跳过已答")?.value || false;
          let skippedCount = 0;
          for (const [index, question] of this.questions.entries()) {
            
            const currentTaskId = window.__getAnswerTaskId__ ? window.__getAnswerTaskId__() : 0;
            if (currentTaskId !== startTaskId) {
              break;
            }
            
            if (skipAnswered && this.checkIfAnswered(question, this.type)) {
              this.addLog(`第${index + 1}道题已作答，跳过`, "warning");
              skippedCount += 1;
              this.correctNum += 1; 
              this.addQuestion(question);
              continue;
            }
            this.addLog(`正在查找第${index + 1}道题目答案...`, "primary");
            const answerData = await queryAnswer(question);
            
            
            const currentTaskId2 = window.__getAnswerTaskId__ ? window.__getAnswerTaskId__() : 0;
            if (currentTaskId2 !== startTaskId || answerData.code === 499) {
              break;
            }
            if (answerData.code === 200) {
              question.answer = answerData.data.answer;
              question.source = answerData.data.source;  
              await this.fillQuestion(question);
              const sourceHint = answerData.data.source === "ai" ? "(AI生成)" : "";
              const msgHint = answerData.msg ? ` - ${answerData.msg}` : "";
              this.addLog(`第${index + 1}道题搜索成功${sourceHint}${msgHint}`, "success");
              this.addLog(`剩余次数:${answerData.data.num}`, "primary");
              this.correctNum += 1;
            } else {
              this.addLog(`第${index + 1}道题搜索失败: ${answerData.msg}`, "danger");
              question.answer[0] = answerData.msg;
            }
            this.addQuestion(question);
          }
          if (skippedCount > 0) {
            this.addLog(`共跳过${skippedCount}道已答题目`, "primary");
          }
        } else
          this.addLog("未解析到题目，请进入正确页面", "danger");
        return Promise.resolve(this.correctNum / this.questions.length * 100);
      });
      __publicField(this, "parseHtml", () => {
        if (!this._document)
          return [];
        if (["zj"].includes(this.type)) {
          const questionElements = this._document.querySelectorAll(SELECTORS.CX_QUESTION_ZJ);
          this.addQuestions(questionElements);
        } else if (["zy", "ks"].includes(this.type)) {
          const questionElements = this._document.querySelectorAll(SELECTORS.CX_QUESTION_ZY_KS);
          this.addQuestions(questionElements);
        }
      });
      __publicField(this, "fillQuestion", async (question) => {
        var _a, _b;
        if (!this._window)
          return;
        
        try {
          if (question.type === "0" || question.type === "1") {
            const configStore = useConfigStore();
            const useSimilarity = configStore.platformParams[configStore.platformName]?.parts.find(p => p.name === "答题参数")?.params.find(p => p.name === "相似匹配")?.value || false;
            
            
            const correctKeys = new Set();
            for (const answer of question.answer) {
              const cleanAnswer = this.stripTags(answer);
              let matched = false;
              for (const key in question.options) {
                if (key === cleanAnswer) {
                  correctKeys.add(key);
                  matched = true;
                  break;
                }
              }
              if (!matched && useSimilarity) {
                const bestMatch = pickBestOption(cleanAnswer, question.options);
                if (bestMatch) {
                  correctKeys.add(bestMatch.key);
                }
              }
            }
            
            
            if (question.type === "1") {
              for (const key in question.options) {
                const optionElement = question.options[key];
                let isChecked = false;
                
                if (["zj", "zy"].includes(this.type)) {
                  isChecked = optionElement.getAttribute("aria-checked") === "true";
                } else if (["ks"].includes(this.type)) {
                  isChecked = optionElement.querySelector(".check_answer") || optionElement.querySelector(".check_answer_dx");
                }
                
                
                if (isChecked && !correctKeys.has(key)) {
                  this.addLog(`取消错误选项: ${key}`, "warning");
                  optionElement.setAttribute("data-filling", "true");
                  optionElement.click();
                  await new Promise(resolve => setTimeout(resolve, 200));
                  optionElement.removeAttribute("data-filling");
                }
              }
              
              await new Promise(resolve => setTimeout(resolve, 300));
            }
            
            
            const selectedKeys = new Set();
            for (const answer of question.answer) {
              const cleanAnswer = this.stripTags(answer);
              let matched = false;
              for (const key in question.options) {
                if (key === cleanAnswer && !selectedKeys.has(key)) {
                  matched = true;
                  selectedKeys.add(key);
                  if (["zj", "zy"].includes(this.type)) {
                    const optionElement = question.options[key];
                    if (optionElement.getAttribute("aria-checked") === "true")
                      continue;
                    
                    optionElement.setAttribute("data-filling", "true");
                    optionElement.click();
                    await new Promise(resolve => setTimeout(resolve, 200));
                    optionElement.removeAttribute("data-filling");
                  } else if (["ks"].includes(this.type)) {
                    const optionElement = question.options[key];
                    if (optionElement.querySelector(".check_answer"))
                      continue;
                    if (optionElement.querySelector(".check_answer_dx"))
                      continue;
                    
                    optionElement.setAttribute("data-filling", "true");
                    optionElement.click();
                    await new Promise(resolve => setTimeout(resolve, 200));
                    optionElement.removeAttribute("data-filling");
                  }
                  break;
                }
              }
              if (!matched && useSimilarity) {
                const bestMatch = pickBestOption(cleanAnswer, question.options);
                if (bestMatch && !selectedKeys.has(bestMatch.key)) {
                  selectedKeys.add(bestMatch.key);
                  if (["zj", "zy"].includes(this.type)) {
                    const optionElement = question.options[bestMatch.key];
                    if (optionElement.getAttribute("aria-checked") === "true")
                      continue;
                    
                    optionElement.setAttribute("data-filling", "true");
                    optionElement.click();
                    await new Promise(resolve => setTimeout(resolve, 200));
                    optionElement.removeAttribute("data-filling");
                  } else if (["ks"].includes(this.type)) {
                    const optionElement = question.options[bestMatch.key];
                    if (optionElement.querySelector(".check_answer"))
                      continue;
                    if (optionElement.querySelector(".check_answer_dx"))
                      continue;
                    
                    optionElement.setAttribute("data-filling", "true");
                    optionElement.click();
                    await new Promise(resolve => setTimeout(resolve, 200));
                    optionElement.removeAttribute("data-filling");
                  }
                }
              }
            }
        } else if (question.type === "2") {
          const textareaElements = question.element.querySelectorAll("textarea");
          if (textareaElements.length === 0)
            return;
          textareaElements.forEach((textareaElement, index) => {
            try {
              const ueditor = this._window.UE.getEditor(textareaElement.name);
              ueditor.setContent(question.answer[index]);
            } catch (e) {
              textareaElement.value = "";
            }
          });
        } else if (question.type === "3") {
          let answer = "false";
          if (REGEX.JUDGE_FALSE.test(question.answer[0])) {
            answer = "false";
          } else if (REGEX.JUDGE_TRUE.test(question.answer[0])) {
            answer = "true";
          }
          const trueOrFalse = {
            "true": "对",
            "false": "错"
          };
          for (const key in question.options) {
            if (["zj", "zy"].includes(this.type)) {
              const ariaLabel = question.options[key].getAttribute("aria-label");
              const optionText = key;
              if ((ariaLabel && (ariaLabel.includes("正噩选择") || ariaLabel.includes("对选择"))) && answer === "true") {
                if (question.options[key].getAttribute("aria-checked") === "true")
                  continue;
                
                const optionElement = question.options[key];
                optionElement.setAttribute("data-filling", "true");
                (_b = optionElement.click());
                setTimeout(() => optionElement.removeAttribute("data-filling"), 200);
                break;
              } else if ((ariaLabel && (ariaLabel.includes("错璪选择") || ariaLabel.includes("错选择"))) && answer === "false") {
                if (question.options[key].getAttribute("aria-checked") === "true")
                  continue;
                
                const optionElement = question.options[key];
                optionElement.setAttribute("data-filling", "true");
                (_b = optionElement.click());
                setTimeout(() => optionElement.removeAttribute("data-filling"), 200);
                break;
              }
            } else if (["ks"].includes(this.type)) {
              const optionElement = question.options[key].querySelector(`span[data='${answer}']`);
              if (!optionElement)
                continue;
              if (optionElement.classList.contains("check_answer"))
                continue;
              const parentOption = optionElement.closest(".answerBg");
              if (parentOption == null ? void 0 : parentOption.querySelector(".check_answer"))
                continue;
              
              optionElement.setAttribute("data-filling", "true");
              optionElement.click();
              setTimeout(() => optionElement.removeAttribute("data-filling"), 200);
              break;
            }
          }
        } else if (question.type === "4" || question.type === "5" || question.type === "6" || question.type === "7") {
          
          const textareaElement = question.element.querySelector("textarea");
          if (!textareaElement) return;
          
          
          const answerText = Array.isArray(question.answer) 
            ? question.answer.join("\n") 
            : String(question.answer);
          
          
          const htmlContent = answerText.split("\n")
            .map(line => `<p>${line}</p>`)
            .join("");
          
          try {
            const ueditor = this._window.UE.getEditor(textareaElement.name);
            if (ueditor && typeof ueditor.setContent === "function") {
              ueditor.setContent(htmlContent);
            } else {
              textareaElement.value = answerText;
              textareaElement.dispatchEvent(new Event("input", { bubbles: true }));
            }
          } catch (e) {
            textareaElement.value = answerText;
            textareaElement.dispatchEvent(new Event("input", { bubbles: true }));
          }
        } else if (question.type === "13") {
          
          const sortSelects = question.element.querySelectorAll(".sortQuesSelect .dept_select");
          if (sortSelects.length === 0) return;
          
          
          let answers = question.answer;
          if (typeof question.answer === 'string') {
            if (question.answer.startsWith('[')) {
              try {
                answers = JSON.parse(question.answer);
              } catch (e) {
                answers = question.answer.split(/[,，]/).map(a => a.trim()).filter(a => a);
              }
            } else {
              answers = question.answer.split(/[,，]/).map(a => a.trim()).filter(a => a);
            }
          }
          
          
          sortSelects.forEach((select, index) => {
            if (index >= answers.length) return;
            const answerValue = answers[index].toUpperCase();
            
            
            select.value = answerValue;
            
            
            const chosenContainer = select.nextElementSibling;
            if (chosenContainer && chosenContainer.classList.contains("chosen-container")) {
              const chosenSingle = chosenContainer.querySelector(".chosen-single span");
              if (chosenSingle) {
                chosenSingle.textContent = answerValue;
              }
              
              
              select.dispatchEvent(new Event("change", { bubbles: true }));
              
              
              const chosenResults = chosenContainer.querySelectorAll(".chosen-results li");
              chosenResults.forEach(li => {
                li.classList.remove("result-selected");
                if (li.textContent.trim() === answerValue) {
                  li.classList.add("result-selected");
                }
              });
            }
          });
          
          
          const answerInput = question.element.querySelector('input[name^="answer"]');
          if (answerInput) {
            answerInput.value = answers.join("");
          }
        }
        } catch (error) {
          this.addLog(`答题过程发生错误：${error.message}`, "danger");
        } finally {
          this.isFilling = false;  
        }
      });
      this.type = type;
      if (iframe) {
        this._document = iframe.contentDocument;
        this._window = iframe.contentWindow;
        decodeCipherFont(this._document);
      } else {
        decodeCipherFont(this._document);
      }
    }
    extractOptions(optionElements, optionSelector) {
      const optionsObject = {};
      const optionTexts = [];
      optionElements.forEach((optionElement) => {
        var _a;
        const optionTextContent = this.stripTags(((_a = optionElement.querySelector(optionSelector)) == null ? void 0 : _a.innerHTML) || "");
        optionsObject[optionTextContent] = optionElement;
        optionTexts.push(optionTextContent);
      });
      return [optionsObject, optionTexts];
    }
    addQuestions(questionElements) {
      questionElements.forEach((questionElement) => {
        var _a, _b, _c, _d;
        let questionTitle = "";
        let questionTypeText = "";
        let optionElements;
        let optionsObject = {};
        let optionTexts = [];
        if (["zy", "ks"].includes(this.type)) {
          const h3Element = questionElement.querySelector("h3");
          const colorShallowElement = questionElement.querySelector(".colorShallow");
          
          if (["zy"].includes(this.type)) {
            questionTypeText = (questionElement == null ? void 0 : questionElement.getAttribute("typename")) || "";
          } else if (["ks"].includes(this.type)) {
            questionTypeText = colorShallowElement ? this.stripTags(colorShallowElement.outerHTML).slice(1, 4) : "";
          }
          
          
          const fullText = h3Element ? h3Element.textContent : "";
          const typeText = colorShallowElement ? colorShallowElement.textContent : "";
          questionTitle = fullText.replace(typeText, "").replace(/^\d+\.\s*/, "").replace(/_+/g, "").trim();
          optionElements = questionElement.querySelectorAll(SELECTORS.CX_OPTION_ZY_KS);
          [optionsObject, optionTexts] = this.extractOptions(optionElements, ".answer_p");
        } else if (["zj"].includes(this.type)) {
          questionTitle = this.stripTags(((_c = questionElement.querySelector(".fontLabel")) == null ? void 0 : _c.innerHTML) || "");
          questionTypeText = this.stripTags(((_d = questionElement.querySelector(".newZy_TItle")) == null ? void 0 : _d.innerHTML) || "");
          optionElements = questionElement.querySelectorAll(SELECTORS.CX_OPTION_ZJ);
          [optionsObject, optionTexts] = this.extractOptions(optionElements, ".fl.after");
        }
        this.questions.push({
          element: questionElement,
          type: this.typeMap.get(questionTypeText.replace(/[\[\]【】]/g, "")) ||
               (questionTitle.match(/[\[\【](.+?)[\]\】]/)?.[1] && this.typeMap.get(questionTitle.match(/[\[\【](.+?)[\]\】]/)[1])) ||
               "999",
          title: this.trimTitle(questionTitle),
          optionsText: optionTexts,
          options: optionsObject,
          answer: [],
          workType: this.type,
          refer: this._window.location.href
        });
      });
    }
  }
  const useCxChapterLogic = () => {
    const logStore = useLogStore();
    const progressStore = useProgressStore();
    
    
    const getCookieLocal = (name) => {
      const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
      return match ? match[2] : '';
    };
    let cachedUid = '';
    if (_unsafeWindow?.getCookie) {
      cachedUid = _unsafeWindow.getCookie("UID");
    }
    if (!cachedUid) {
      cachedUid = getCookieLocal('UID');
    }
    if (!cachedUid) {
      cachedUid = getCookieLocal('_uid');
    }
    if (!cachedUid && _unsafeWindow?.uid) {
      cachedUid = _unsafeWindow.uid;
    }
    
    const init = () => {
      const currentUrl = window.location.href;
      if (!currentUrl.includes("&mooc2=1")) {
        window.location.href = currentUrl + "&mooc2=1";
      }
      logStore.addLog(`检测到用户进入到章节学习页面`, "primary");
      logStore.addLog(`正在解析任务点，请稍等5-10秒（如果长时间没有反应，请刷新页面）`, "warning");
    };
    const configStore = useConfigStore();
    let _justClickedNext = false;
    let _currentIframe = null; 
    let _urlBackupTimer = null; 
    
    const monitorIframes = () => {
      
      if (_urlBackupTimer) {
        clearTimeout(_urlBackupTimer);
        _urlBackupTimer = null;
      }
      
      const documentElement = document.documentElement;
      const iframe = documentElement.querySelector("iframe");
      
      if (!iframe) {
        setTimeout(() => monitorIframes(), 2000);
        return;
      }
      
      const currentSrc = iframe.src || '';
      
      
      const srcChanged = currentSrc !== _lastIframeSrc;
      
      
      if (iframe !== _currentIframe) {
        _currentIframe = iframe;
        iframe.addEventListener("load", function onIframeLoad() {
          
          if (_urlBackupTimer) {
            clearTimeout(_urlBackupTimer);
            _urlBackupTimer = null;
          }
          
          monitorIframes();
        });
      }
      
      
      try {
        if (iframe.contentDocument && iframe.contentDocument.readyState === 'complete') {
          if (srcChanged) {
            _lastIframeSrc = currentSrc;
            watchIframe(documentElement);
          }
        }
      } catch (e) {
      }
    };
    const watchUrlChanges = () => {
      let currentUrl = window.location.href;
      const afkEnabled = configStore.platformParams.cx.parts[4]?.params[0]?.value || false;
      
      const checkUrlChange = () => {
        if (currentUrl !== window.location.href) {
          currentUrl = window.location.href;
          _justClickedNext = false;
          
          _globalTaskId++;
          
          if (_urlBackupTimer) {
            clearTimeout(_urlBackupTimer);
          }
          
          _urlBackupTimer = setTimeout(() => {
            _urlBackupTimer = null;
            monitorIframes();
          }, 2000);
        }
      };
      if (afkEnabled) {
        BackgroundWorker.start('url_watcher', checkUrlChange, 2000);
      } else {
        setInterval(checkUrlChange, 2000);
      }
    };
    let _globalTaskId = 0;
    let hasLoggedSkipTip = false;
    let _currentWatchSubscription = null;
    const _processedIframeTasks = new WeakMap(); 
    let _lastIframeSrc = null; 
    
    window.__getAnswerTaskId__ = () => _globalTaskId;
    
    const watchIframe = async (documentElement) => {
      if (_currentWatchSubscription) {
        _currentWatchSubscription.unsubscribe();
        _currentWatchSubscription = null;
      }
      forceStopSimulatePlay();
      const thisTaskId = ++_globalTaskId;
      hasLoggedSkipTip = false;
      
      
      await new Promise(resolve => setTimeout(resolve, 3000));
      
      
      if (thisTaskId !== _globalTaskId) {
        return;
      }
      
      logStore.addLog(`等待页面加载完成，开始扫描任务点`, "info");
      
      FrameScanner.collectDeep(documentElement).subscribe((allIframes) => {
        _currentWatchSubscription = rxjs.from(allIframes).pipe(concatMap((iframe) => handleSingleFrame(iframe))).subscribe({
          complete: async () => {
            if (thisTaskId === _globalTaskId) {
              const autoSwitch = configStore.platformParams.cx.parts[2].params[1].value;
              logStore.addLog(`本页任务点已全部完成，${autoSwitch ? "正前往下一章节" : "自动切换已关闭"}`, "success");
              if (autoSwitch) {
                
                const nextBtn1 = documentElement.querySelector("#prevNextFocusNext");
                const nextBtn2 = document.querySelector(".jb_btn.jb_btn_92.fr.fs14.nextChapter");
                const nextBtn3 = document.querySelector("#nextBtn");
                const nextBtn4 = document.querySelector(".nextChapter");
                
                let targetBtn = null;
                if (nextBtn1 && nextBtn1.style.display !== "none") {
                  targetBtn = nextBtn2 || nextBtn1;
                } else if (nextBtn2 && nextBtn2.style.display !== "none") {
                  targetBtn = nextBtn2;
                } else if (nextBtn3 && nextBtn3.style.display !== "none") {
                  targetBtn = nextBtn3;
                } else if (nextBtn4 && nextBtn4.style.display !== "none") {
                  targetBtn = nextBtn4;
                }
                
                if (!targetBtn) {
                } else {
                  _justClickedNext = true;
                  await delay(3);
                  
                  if (thisTaskId !== _globalTaskId) {
                    return;
                  }
                  targetBtn.click();
                }
              }
            }
          }
        });
      });
    };

    
    
    const calculateEnc = (classId, uid, jobId, objectId, playTime, duration) => {
      const str = `[${classId}][${uid}][${jobId}][${objectId}][${playTime * 1000}][d_yHJ!$pdA~5][${duration * 1000}][0_${duration}]`;
      return md5(str);
    };

    
    const formatDuration = (seconds) => {
      const mins = Math.floor(seconds / 60);
      const secs = Math.floor(seconds % 60);
      return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    };

    
    const hasVideoOrAudio = () => {
      try {
        const allIframes = FrameScanner.collectDeepSync(document.documentElement);
        for (const iframe of allIframes) {
          const src = iframe.src || '';
          if (src.includes('video') || src.includes('audio')) {
            
            const parent = iframe.parentElement;
            const ansJobIcon = parent?.querySelector('.ans-job-icon');
            if (ansJobIcon) {
              return true;
            }
          }
        }
        return false;
      } catch (e) {
        console.log('[检测视频] 检测失败:', e);
        return false;
      }
    };

    
    const completedSimulatedIds = new Set();
    const processingSimulatedId = { current: null };

    window.clearOverlayAndBanner = () => {
      if (window._blockPlayInterval) {
        clearInterval(window._blockPlayInterval);
        window._blockPlayInterval = null;
      }
      if (window._blockOverlay) {
        window._blockOverlay.forEach(o => { try { if (document.contains(o)) o.remove(); } catch(e) {} });
        window._blockOverlay = [];
      }
      const banner = document.getElementById('_simulate_banner_');
      if (banner) banner.remove();
      if (window._blockPlayScroll) {
        window.removeEventListener('scroll', window._blockPlayScroll, true);
        window.removeEventListener('resize', window._blockPlayScroll);
        window._blockPlayScroll = null;
      }
    };

    window.showOverlayAndBanner = () => {
      clearOverlayAndBanner();
      if (!window._blockOverlay) window._blockOverlay = [];
      const getVideoIframes = () => {
        try {
          const allIframes = FrameScanner.collectDeepSync(document.documentElement);
          return allIframes.filter(fr => {
            const src = fr.src || '';
            return src.includes('video') || src.includes('audio');
          });
        } catch (e) { return []; }
      };
      const createOverlay = () => {
        try {
          window._blockOverlay.forEach(o => { try { o.remove(); } catch(e) {} });
          window._blockOverlay = [];
          const videoIframes = getVideoIframes();
          for (const iframe of videoIframes) {
            const rect = iframe.getBoundingClientRect();
            if (rect.width > 50 && rect.height > 50) {
              const overlay = document.createElement('div');
              overlay.className = '_simulate_block_overlay_';
              overlay.style.cssText = `position:fixed;top:${rect.top}px;left:${rect.left}px;width:${rect.width}px;height:${rect.height}px;z-index:2147483647;cursor:not-allowed;background:rgba(0,0,0,0.25);border-radius:8px;`;
              const ownerDoc = iframe.ownerDocument;
              if (ownerDoc && ownerDoc.body && ownerDoc.body !== document.body) {
                ownerDoc.body.appendChild(overlay);
              } else {
                document.body.appendChild(overlay);
              }
              window._blockOverlay.push(overlay);
            }
          }
        } catch (e) {}
      };
      const updateOverlayPositions = () => {};
      createOverlay();
      window._blockPlayScroll = updateOverlayPositions;
      window.addEventListener('scroll', updateOverlayPositions, true);
      window.addEventListener('resize', updateOverlayPositions);
      window._blockPlayInterval = setInterval(createOverlay, 1000);
      if (!document.getElementById('_simulate_banner_')) {
        const banner = document.createElement('div');
        banner.id = '_simulate_banner_';
        banner.style.cssText = 'position:fixed;bottom:20px;left:50%;transform:translateX(-50%);z-index:100002;background:linear-gradient(135deg,#667eea 0%,#764ba2 100%);color:#fff;padding:12px 28px;border-radius:30px;font-size:15px;font-weight:600;text-align:center;box-shadow:0 4px 20px rgba(102,126,234,0.4);cursor:not-allowed;white-space:nowrap;pointer-events:none;';
        banner.innerHTML = '🎬 模拟播放模式下无需播放视频，播放进度可在主页信息查看';
        document.body.appendChild(banner);
      }
    };

    const stopSimulatePlayIfNeeded = () => {
      if (window._simulateActive) {
        const hasMedia = hasVideoOrAudio();
        if (!hasMedia) {
          window._simulateActive = false;
          logStore.addLog('检测到视频/音频已消失，停止模拟播放', 'warning');
          if (window._currentMediaInterval) {
            clearInterval(window._currentMediaInterval);
            window._currentMediaInterval = null;
          }
          if (window._simulateLoopId) {
            BackgroundWorker.stop(window._simulateLoopId);
            window._simulateLoopId = null;
          }
          progressStore.update({
            isPlaying: false
          });
          processingSimulatedId.current = null;
          simulateVideoPlay._currentObjectId = null;
          clearOverlayAndBanner();
        }
      }
    };
    const forceStopSimulatePlay = () => {
      if (window._simulateActive) {
        window._simulateActive = false;
        if (window._currentMediaInterval) {
          clearInterval(window._currentMediaInterval);
          window._currentMediaInterval = null;
        }
        if (window._simulateLoopId) {
          BackgroundWorker.stop(window._simulateLoopId);
          window._simulateLoopId = null;
        }
        progressStore.update({ isPlaying: false });
        processingSimulatedId.current = null;
        simulateVideoPlay._currentObjectId = null;
        clearOverlayAndBanner();
      }
    };

    
    const getVideoInfo = async (objectId) => {
      return new Promise((resolve, reject) => {
        const host = window.location.host;
        const protocol = window.location.protocol;
        const FID = _unsafeWindow.FID || '';
        const statusUrl = `${protocol}//${host}/ananas/status/${objectId}?k=${FID}&flag=normal&_dc=${Date.now()}`;
        
        
        let vrefer = '';
        try {
          const videoIframe = _unsafeWindow.document.querySelector('.ans-attach-online.ans-insertvideo-online');
          if (videoIframe) {
            vrefer = videoIframe.src;
          }
        } catch (e) {}
        if (!vrefer) {
          vrefer = `${protocol}//${host}/ananas/modules/video/index.html?v=2022-1118-1729`;
        }
        
        _GM_xmlhttpRequest({
          method: "get",
          url: statusUrl,
          headers: {
            'Host': host,
            'Referer': vrefer,
            'Sec-Fetch-Site': 'same-origin'
          },
          onload: function(res) {
            try {
              if (res.status === 200) {
                const data = JSON.parse(res.responseText);
                resolve(data);
              } else {
                reject(new Error(`HTTP ${res.status}`));
              }
            } catch (e) {
              reject(e);
            }
          },
          onerror: function(err) {
            reject(err);
          }
        });
      });
    };

    
    const getTaskParams = () => {
      try {
        
        const topWindow = _unsafeWindow.top;
        if (topWindow.margs) {
          return topWindow.margs;
        }
        
        
        const urlParams = new URLSearchParams(window.location.search);
        return {
          clazzId: urlParams.get('clazzId') || urlParams.get('classId'),
          courseId: urlParams.get('courseId'),
          knowledgeid: urlParams.get('knowledgeid') || urlParams.get('chapterId')
        };
      } catch (e) {
        console.error('[模拟播放] 获取任务参数失败:', e);
        return null;
      }
    };

    
    const getEvasionRate = (baseRate) => {
      const evasionRate = baseRate * (0.95 + Math.random() * 0.1);
      return Math.max(0.5, Math.min(baseRate * 1.05, evasionRate));
    };

    let behaviorState = { lastMouseMove: 0 };
    const simulateUserBehavior = () => {
      const now = Date.now();
      if (now - behaviorState.lastMouseMove > 300000 + Math.random() * 300000) {
        const x = Math.random() * window.innerWidth;
        const y = Math.random() * window.innerHeight;
        document.dispatchEvent(new MouseEvent('mousemove', { clientX: x, clientY: y, bubbles: true }));
        behaviorState.lastMouseMove = now;
      }
    };

    const compensateDuration = (playTime, duration, baseRate) => playTime;

    
    const BackgroundWorker = (() => {
      let worker = null;
      const callbacks = new Map();

      const workerCode = `
        self.onmessage = function(e) {
          if (e.data.type === 'start') {
            const id = e.data.id;
            const interval = e.data.interval || 1000;
            let timerId = setInterval(() => {
              self.postMessage({ type: 'tick', id: id });
            }, interval);
            self._timers = self._timers || {};
            self._timers[id] = timerId;
            self.postMessage({ type: 'started', id: id });
          } else if (e.data.type === 'stop') {
            const id = e.data.id;
            if (self._timers && self._timers[id]) {
              clearInterval(self._timers[id]);
              delete self._timers[id];
            }
            self.postMessage({ type: 'stopped', id: id });
          }
        };
      `;

      function ensure() {
        if (worker) return;
        const blob = new Blob([workerCode], { type: 'application/javascript' });
        worker = new Worker(URL.createObjectURL(blob));
        worker.onmessage = (e) => {
          const { type, id } = e.data;
          if (type === 'tick' && callbacks.has(id)) {
            callbacks.get(id)();
          }
        };
        worker.onerror = (e) => {
          console.error('[BackgroundWorker] Error:', e.message);
        };
      }

      return {
        start(id, callback, interval = 1000) {
          ensure();
          callbacks.set(id, callback);
          worker.postMessage({ type: 'start', id, interval });
        },
        stop(id) {
          if (!worker) return;
          callbacks.delete(id);
          worker.postMessage({ type: 'stop', id });
        },
        isActive() {
          return worker !== null;
        },
        destroy() {
          if (worker) {
            worker.terminate();
            worker = null;
            callbacks.clear();
          }
        }
      };
    })();

    const simulateVideoPlay = async (iframe, iframeDocument, mediaType) => {
      return new Promise(async (resolve) => {
        const releaseLock = () => {
          if (processingSimulatedId.current === (simulateVideoPlay._currentObjectId)) {
            processingSimulatedId.current = null;
            simulateVideoPlay._currentObjectId = null;
          }
        };
        const safeResolve = (val) => { releaseLock(); resolve(val); };
        logStore.addLog(`发现一个${mediaType}，当前播放模式: 模拟播放`, "primary");
        
        
        try {
          const mediaElement = iframeDocument?.documentElement?.querySelector(mediaType);
          if (mediaElement) {
            mediaElement.pause();
            mediaElement.muted = true;
            mediaElement.autoplay = false;

          }
        } catch (e) {
          console.log('[模拟播放] 暂停视频失败:', e);
        }
        
        
        
        try {
          
          let objectId = null;
          let jobId = null;
          let otherInfo = '';
          let reportUrl = '';
          let classId = null;
          let uid = null;
          let duration = null;
          let dtoken = null;
          let iframeSrc = iframe.src || '';
          let videoName = mediaType === 'video' ? '视频' : '音频';

          
          try {
            
            let prevTitleElement = null;
            let parent = iframe.parentElement;
            while (parent && !prevTitleElement) {
              prevTitleElement = parent.querySelector('.prev_title');
              parent = parent.parentElement;
              if (parent === document.body || parent === document.documentElement) break;
            }

            
            if (!prevTitleElement) {
              prevTitleElement = document.querySelector('.prev_title');
            }

            if (prevTitleElement) {
              const titleText = prevTitleElement.innerText || prevTitleElement.textContent || '';
              
              videoName = titleText.replace(/【上】|【下】|【上$|【下$/g, '').trim();
              if (videoName && videoName !== (mediaType === 'video' ? '视频' : '音频')) {
                logStore.addLog(`获取到视频名称: ${videoName}`, "primary");
              } else {
                logStore.addLog(`从.prev_title获取到的文本: "${titleText}"`, "warning");
              }
            } else {
              logStore.addLog(`未找到.prev_title元素`, "warning");
            }
          } catch (e) {
            logStore.addLog(`从标题获取失败: ${e.message}`, "danger");
          }
          
          
          const getStr = (str, start, end) => {
            const startIndex = str.indexOf(start);
            if (startIndex === -1) return null;
            const content = str.substring(startIndex + start.length);
            const endIndex = content.indexOf(end);
            if (endIndex === -1) return null;
            return content.substring(0, endIndex);
          };
          
          
          let pageData = null;
          
          
          try {
            if (_unsafeWindow.param) {
              try {
                const parsed = JSON.parse(_unsafeWindow.param);
                if (parsed?.attachments) pageData = parsed;
              } catch (e) {}
            }
            if (!pageData && _unsafeWindow.mArg?.attachments) {
              pageData = _unsafeWindow.mArg;
            }
          } catch (e) {}
          
          
          if (!pageData) {
            try {
              const allIframes = FrameScanner.collectDeepSync(document.documentElement);
              for (const ifr of allIframes) {
                try {
                  if (!ifr.contentWindow) continue;
                  const win = ifr.contentWindow;
                  if (win.param) {
                    try {
                      const parsed = JSON.parse(win.param);
                      if (parsed?.attachments) { pageData = parsed; break; }
                    } catch (e) {}
                  }
                  if (!pageData && win.mArg?.attachments) {
                    pageData = win.mArg;
                    break;
                  }
                } catch (e) {}
              }
            } catch (e) {}
          }
          
          
          const documentsToTry = [];
          
          
          if (iframeDocument) {
            documentsToTry.push({ name: 'iframeDocument', doc: iframeDocument });
          }
          
          
          documentsToTry.push({ name: 'currentWindow', doc: _unsafeWindow.document });
          
          
          try {
            if (_unsafeWindow.top && _unsafeWindow.top.document) {
              documentsToTry.push({ name: 'topWindow', doc: _unsafeWindow.top.document });
            }
          } catch (e) {}
          
          for (const { name, doc } of documentsToTry) {
            if (pageData) break;
            try {
              const scripts = doc.getElementsByTagName('script');
              
              for (let i = 0; i < scripts.length; i++) {
                const scriptContent = scripts[i].innerHTML;
                
                if (scriptContent.indexOf('mArg = "";') !== -1 && scriptContent.indexOf('==UserScript==') === -1) {
                  const param = getStr(scriptContent, 'try{\n    mArg = ', ';\n}catch(e){');
                  if (param) {
                    pageData = JSON.parse(param);
                    break;
                  }
                }
                
                if (!pageData && scriptContent.indexOf('mArg=') !== -1 && scriptContent.indexOf('==UserScript==') === -1) {
                  const match = scriptContent.match(/mArg\s*=\s*(\{[\s\S]*?\});/);
                  if (match) {
                    try {
                      pageData = JSON.parse(match[1]);
                      break;
                    } catch (e) {}
                  }
                }
              }
              
              
              if (!pageData && name === 'topWindow') {
                for (let i = 0; i < scripts.length; i++) {
                  const content = scripts[i].innerHTML;
                  
                  if (content.indexOf('clazzId') !== -1 && content.length > 10000) {
                    
                    const attachmentsMatch = content.match(/["']attachments["']\s*:\s*(\[[\s\S]*?\])/);
                    if (attachmentsMatch) {
                      try {
                        const jsonStr = `{"attachments": ${attachmentsMatch[1]}}`;
                        const parsed = JSON.parse(jsonStr);
                        if (parsed.attachments && parsed.attachments.length > 0) {
                          pageData = { attachments: parsed.attachments };
                          break;
                        }
                      } catch (e) {
                        logStore.addLog(`[${name}] 解析attachments失败: ${e.message}`, "warning");
                      }
                    }
                    
                    
                    const clazzIdMatch = content.match(/stu_clazzId\s*=\s*["'](\d+)["']/);
                    const courseIdMatch = content.match(/stu_CourseId\s*=\s*["'](\d+)["']/);
                    const knowledgeIdMatch = content.match(/stu_knowledgeId\s*=\s*["'](\d+)["']/);
                    
                    if (clazzIdMatch || courseIdMatch) {
                      if (!pageData) pageData = {};
                      pageData.defaults = {
                        clazzId: clazzIdMatch ? clazzIdMatch[1] : null,
                        courseId: courseIdMatch ? courseIdMatch[1] : null,
                        knowledgeId: knowledgeIdMatch ? knowledgeIdMatch[1] : null
                      };
                    }
                  }
                  
                  
                  if (!pageData && content.indexOf('"attachments"') !== -1) {
                    const jsonMatch = content.match(/\{[\s\S]*?"attachments"[\s\S]*?\}/);
                    if (jsonMatch) {
                      try {
                        pageData = JSON.parse(jsonMatch[0]);
                        break;
                      } catch (e) {}
                    }
                  }
                }
              }
            } catch (e) {
              logStore.addLog(`[${name}] 获取失败: ${e.message}`, "warning");
            }
          }
          
          
          if (!pageData || (pageData.defaults && !pageData.defaults.reportUrl)) {
            try {
              const windowsToTry = [_unsafeWindow];
              try { if (_unsafeWindow.top) windowsToTry.push(_unsafeWindow.top); } catch (e) {}
              try { if (_unsafeWindow.parent) windowsToTry.push(_unsafeWindow.parent); } catch (e) {}

              for (const ifr of FrameScanner.collectDeepSync(document.documentElement)) {
                try {
                  if (ifr.contentWindow) windowsToTry.push(ifr.contentWindow);
                } catch (e) {}
              }

              for (const win of windowsToTry) {
                const props = ['margs', 'mArg', 'pageData', 'courseData'];
                for (const prop of props) {
                  try {
                    const val = win[prop];
                    if (val && typeof val === 'object') {
                      
                      if (val.attachments) {
                        pageData = val;
                        logStore.addLog(`从window.${prop}获取完整数据成功(含attachments)`, "success");
                        break;
                      }
                      
                      if (!pageData && val.defaults && val.defaults.reportUrl) {
                        pageData = val;
                        logStore.addLog(`从window.${prop}获取数据成功(含reportUrl)`, "success");
                        break;
                      }
                    }
                  } catch (e) {}
                }
                if (pageData && pageData.defaults && pageData.defaults.reportUrl) break;
              }
            } catch (e) {
              logStore.addLog(`获取window数据失败: ${e.message}`, "warning");
            }
          }
          
          if (!pageData) {
            logStore.addLog(`无法获取mArg数据，回退到普通播放模式`, "warning");
          }
          
          
          if (pageData) {
            
            if (pageData.defaults) {
              classId = pageData.defaults.clazzId;
              uid = pageData.defaults.userid || getUid();
              reportUrl = pageData.defaults.reportUrl || '';

            }
            
            
            if (pageData.attachments && pageData.attachments.length > 0) {
              
              const iframeSrc = iframe.src;
              let srcObjectId = null;
              const srcMatch = iframeSrc.match(REGEX.OBJECT_ID);
              if (srcMatch) {
                srcObjectId = srcMatch[1];
              }
              if (!srcObjectId) {
                srcObjectId = iframe.getAttribute('objectid') || iframe.getAttribute('data-objectid') || null;
              }

              
              for (const attachment of pageData.attachments) {
                
                if (attachment.isPassed === true) continue;
                if (completedSimulatedIds.has(attachment.property?.objectid)) continue;
                

                const moduleType = attachment.property?.module || '';
                const isVideo = moduleType === 'video' || moduleType === 'insertvideo' || attachment.type === 'video';
                const isAudio = moduleType === 'audio' || moduleType === 'insertaudio' || attachment.type === 'audio';

                if ((mediaType === 'video' && isVideo) || (mediaType === 'audio' && isAudio)) {

                  if (srcObjectId && attachment.property?.objectid === srcObjectId) {
                    objectId = attachment.property.objectid;
                    jobId = attachment.jobid;
                    otherInfo = attachment.otherInfo || '';
                    videoName = attachment.property?.name || videoName;
                    break;
                  }

                  if (!objectId && attachment.job === true) {
                    objectId = attachment.property?.objectid;
                    jobId = attachment.jobid;
                    otherInfo = attachment.otherInfo || '';
                    videoName = attachment.property?.name || videoName;
                  }
                }
              }
              
              
              if (!objectId) {
                for (const attachment of pageData.attachments) {

                  if (attachment.isPassed === true) continue;
                  if (completedSimulatedIds.has(attachment.property?.objectid)) continue;

                  const moduleType = attachment.property?.module || '';
                  const isVideo = moduleType === 'video' || moduleType === 'insertvideo' || attachment.type === 'video';
                  const isAudio = moduleType === 'audio' || moduleType === 'insertaudio' || attachment.type === 'audio';

                  if ((mediaType === 'video' && isVideo) || (mediaType === 'audio' && isAudio)) {
                    objectId = attachment.property?.objectid;
                    jobId = attachment.jobid;
                    otherInfo = attachment.otherInfo || '';
                    videoName = attachment.property?.name || videoName;
                    break;
                  }
                }
              }
            }
          }
          
          
          if (!objectId) {
            const iframeSrc = iframe.src || '';
            
            
            const objectIdMatch = iframeSrc.match(REGEX.OBJECT_ID);
            objectId = objectIdMatch ? objectIdMatch[1] : null;
            
            
            if (!objectId) {
              const dataAttrs = ['data-objectid', 'data-object-id', 'objectid'];
              for (const attr of dataAttrs) {
                const val = iframe.getAttribute(attr);
                if (val) {
                  objectId = val;
                  break;
                }
              }
            }
            
            
            if (!objectId) {
              const nameOrId = iframe.name || iframe.id || '';
              const nameMatch = nameOrId.match(/([a-f0-9]{24,})/i);
              if (nameMatch) {
                objectId = nameMatch[1];
              }
            }
          }
          
          if (!objectId) {
            logStore.addLog(`无法获取objectId，回退到普通播放模式`, "danger");
            return safeResolve(await playMediaDirectly(mediaType, iframeDocument));
          }
          
          if (processingSimulatedId.current) {
            logStore.addLog(`该视频正在模拟播放中，跳过重复处理`, "warning");
            return safeResolve();
          }
          processingSimulatedId.current = objectId;
          simulateVideoPlay._currentObjectId = objectId;
          
          
          
          if (!dtoken || !duration) {
            const videoInfo = await getVideoInfo(objectId);
            duration = videoInfo.duration;
            dtoken = videoInfo.dtoken;
          }
          
          if (!duration || !dtoken) {
            logStore.addLog(`获取视频信息失败，回退到普通播放模式`, "danger");
            return safeResolve(await playMediaDirectly(mediaType, iframeDocument));
          }
          
          logStore.addLog(`视频时长: ${formatDuration(duration)}秒`, "primary");
          
          
          if (!uid) {
            uid = cachedUid;
          }
          
          
          if (!classId) {
            const taskParams = getTaskParams();
            classId = taskParams?.clazzId || taskParams?.classId;
          }
          
          
          if (!classId) {
            const pageUrl = window.location.href;
            const classIdMatch = pageUrl.match(/clazzId=(\d+)/) || pageUrl.match(/classId=(\d+)/);
            classId = classIdMatch ? classIdMatch[1] : null;
          }
          
          
          if (!jobId) {
            
            const jobIdAttrs = ['data-jobid', 'data-job-id', 'jobid', 'data-workid'];
            for (const attr of jobIdAttrs) {
              const val = iframe.getAttribute(attr);
              if (val) {
                jobId = val;
                break;
              }
            }
            
            if (!jobId) {
              const urlMatch = window.location.href.match(/[?&]jobid=([^&]+)/i);
              jobId = urlMatch ? urlMatch[1] : null;
            }
            
            if (!jobId && iframe.src) {
              const srcMatch = iframe.src.match(REGEX.JOB_ID);
              jobId = srcMatch ? srcMatch[1] : null;
            }
            
            if (!jobId) {
              jobId = objectId; 
            }
          }
          
          if (!classId || !uid || !jobId) {
            logStore.addLog(`缺少必要参数: classId=${classId}, uid=${uid}, jobId=${jobId}`, "danger");
            logStore.addLog(`回退到普通播放模式`, "warning");
            return safeResolve(await playMediaDirectly(mediaType, iframeDocument));
          }
          
          
          const autoMaxRate = configStore.platformParams.cx.parts[0].params[5].value || false;
          let playbackRate = configStore.platformParams.cx.parts[0].params[6].value || 1;
          const maxRate = getMaxPlaybackRate(iframeDocument, false);
          const speedDisabled = maxRate === 1;
          
          
          window.__maxPlaybackRate = maxRate;
          
          
          const playbackRateParam = configStore.platformParams.cx.parts[0].params[6];
          playbackRateParam.max = autoMaxRate ? maxRate : 3;
          
          if (speedDisabled) {
            logStore.addLog(`⚠️ 此视频已被学习通禁用倍速，使用>1x倍速可能会导致学习进度被清空`, "warning");
          }
          if (autoMaxRate) {
            playbackRate = maxRate;
            logStore.addLog(`自动倍速: ${playbackRate}x`, "success");
          } else {
            const simulateMaxRate = 3;
            if (playbackRate > simulateMaxRate) {
              playbackRate = simulateMaxRate;
              logStore.addLog(`模拟播放倍速已调整为最大值: ${playbackRate}x`, "warning");
            }
          }
          logStore.addLog(`播放倍速: ${playbackRate}x`, "primary");
          
          
          const directComplete = configStore.platformParams.cx.parts[0].params[3].value || false;
          
          const host = window.location.host;
          const protocol = window.location.protocol;

          
          const videojs_id = String(parseInt(Math.random() * 9999999));
          document.cookie = 'videojs_id=' + videojs_id + ';path=/';

          
          const evasionEnabled = configStore.platformParams.cx.parts[0].params[1].value || false;

          const reportProgress = async (currentTime, isComplete) => {
            return new Promise((resolveReport) => {
              const enc = calculateEnc(classId, uid, jobId, objectId, currentTime, duration);

              if (enc.length !== 32) {
                logStore.addLog(`加密字符串计算失败`, "danger");
                return resolveReport(false);
              }

              const currentIsdrag = isComplete ? '4' : (currentTime > 0 ? '0' : '3');
              const baseUrl = reportUrl.startsWith('http') ? reportUrl : `${protocol}//${host}${reportUrl}`;
              const reportsUrl = `${baseUrl}/${dtoken}?clazzId=${classId}&playingTime=${currentTime}&duration=${duration}&clipTime=0_${duration}&objectId=${objectId}&otherInfo=${otherInfo}&jobid=${jobId}&userid=${uid}&isdrag=${currentIsdrag}&view=pc&enc=${enc}&rt=0.9&dtype=${mediaType === 'video' ? 'Video' : 'Audio'}&_t=${Date.now()}`;

              _GM_xmlhttpRequest({
                method: "get",
                url: reportsUrl,
                headers: {
                  'Host': host,
                  'Referer': iframeSrc,
                  'Sec-Fetch-Site': 'same-origin',
                  'Content-Type': 'application/json'
                },
                onload: function(res) {
                  try {
                    const result = JSON.parse(res.responseText);
                    if (result.isPassed) {
                      logStore.addLog(`✅ 视频任务已完成`, "success");
                      resolveReport(true);
                    } else {
                      resolveReport(false);
                    }
                  } catch (e) {
                    logStore.addLog(`上报响应解析失败(status=${res.status}): ${res.responseText.substring(0, 200)}`, "danger");
                    resolveReport(false);
                  }
                },
                onerror: function(err) {
                  logStore.addLog(`上报请求失败`, "danger");
                  resolveReport(false);
                }
              });
            });
          };

          if (!reportUrl) {
            logStore.addLog(`⚠️ reportUrl为空，将使用默认路径/multimedia/v2`, "warning");
            reportUrl = '/multimedia/v2';
          }

          if (directComplete) {
            logStore.addLog(`⚠️ 直接上报中...`, "warning");
            progressStore.update({
              taskName: videoName,
              percent: 100,
              currentTime: duration,
              totalTime: duration,
              type: mediaType === 'video' ? '视频' : '音频',
              detail: '直接上报',
              isPlaying: true,
              speedDisabled: speedDisabled
            });
            
            const isComplete = await reportProgress(duration, true);
            if (isComplete) {
              completedSimulatedIds.add(objectId);
              logStore.addLog(`🎬 ${mediaType}直接上报`, "success");
              progressStore.update({
                percent: 100,
                currentTime: duration,
                detail: '已完成',
                isPlaying: false
              });
              return safeResolve();
            } else {
              logStore.addLog(`直接上报失败，回退到模拟播放`, "danger");
              
            }
          }
          
          
          if (window._currentMediaInterval) {
            clearInterval(window._currentMediaInterval);
            window._currentMediaInterval = null;
          }

          
          progressStore.update({
            taskName: videoName,
            percent: 0,
            currentTime: 0,
            totalTime: duration,
            type: mediaType === 'video' ? '视频' : '音频',
            detail: `${formatDuration(0)}/${formatDuration(duration)}`,
            isPlaying: true,
            speedDisabled: speedDisabled
          });

          
          let playTime = 0;
          let playsTime = 0;
          let isFirst = true;
          let nextReportTime = 0;
          let isdrag = '3';
          let completeRetryCount = 0;
          const maxCompleteRetries = 10;
          const reportInterval = 50;
          let isReporting = false;

          const afkEnabled = configStore.platformParams.cx.parts[4]?.params[0]?.value || false;
          const simulateLoopId = 'simulate_' + Date.now();
          let loopInterval = null;

          const loopCallback = async () => {
            if (isReporting) return;
            
            
            if (!window._simulateActive) {
              logStore.addLog('模拟播放已被停止，结束处理', 'warning');
              if (afkEnabled) { BackgroundWorker.stop(simulateLoopId); } else { clearInterval(loopInterval); }
              window._currentMediaInterval = null;
              progressStore.update({ isPlaying: false });
              releaseLock();
              safeResolve();
              return;
            }

            const hasMedia = hasVideoOrAudio();
            if (!hasMedia) {
              window._simulateActive = false;
              logStore.addLog('检测到视频/音频已消失，停止模拟播放（未完成）', 'warning');
              if (afkEnabled) { BackgroundWorker.stop(simulateLoopId); } else { clearInterval(loopInterval); }
              window._currentMediaInterval = null;
              progressStore.update({
                isPlaying: false
              });
              clearOverlayAndBanner();
              releaseLock();
              safeResolve();
              return;
            }

            const autoMaxRateNow = configStore.platformParams.cx.parts[0].params[5].value || false;
            let playbackRateNow = autoMaxRateNow ? maxRate : Math.min(playbackRateParam.value || playbackRate, 3);
            let effectiveRate = playbackRateNow;

            if (evasionEnabled) {
              effectiveRate = getEvasionRate(effectiveRate);
              simulateUserBehavior();
            }

            playsTime += effectiveRate;
            playTime = Math.ceil(playsTime);

            playTime = compensateDuration(playTime, duration, playbackRateNow);

            if (playTime > duration) {
              playTime = duration;
            }

            const progress = Math.floor((playTime / duration) * 100);

            progressStore.update({
              percent: progress,
              currentTime: playTime,
              totalTime: duration,
              detail: `${formatDuration(playTime)}/${formatDuration(duration)}`,
              isPlaying: true,
              speedDisabled: speedDisabled
            });

            let shouldReport = false;
            if (playTime >= duration) {
              shouldReport = true;
            } else if (isFirst) {
              shouldReport = true;
            } else if (nextReportTime > 0 && playTime >= nextReportTime) {
              shouldReport = true;
            }

            if (shouldReport) {
              isReporting = true;

              if (isFirst) {
                playTime = 0;
                isFirst = false;
              }

              if (playTime >= duration) {
                playTime = duration;
                isdrag = '4';
              } else if (playTime > 0) {
                isdrag = '0';
              }
              nextReportTime = Math.min(playTime + reportInterval, duration);

              const percent = Math.round(playTime / duration * 100);
              if (percent % 25 === 0 || percent === 100) {
                logStore.addLog(`📤 上报进度: ${percent}%（${Math.round(playTime)}/${Math.round(duration)}s）`);
              }
              const isComplete = await reportProgress(playTime, isdrag === '4');
              isReporting = false;

              if (isComplete) {
                if (afkEnabled) { BackgroundWorker.stop(simulateLoopId); } else { clearInterval(loopInterval); }
                window._simulateActive = false;
                completedSimulatedIds.add(objectId);
                logStore.addLog(`🎬 ${mediaType}模拟播放完成`, "success");
                progressStore.update({
                  percent: 100,
                  currentTime: duration,
                  detail: '播放完成',
                  isPlaying: false
                });
                
                
                try {
                  const mediaElement = iframeDocument?.documentElement?.querySelector(mediaType);
                  if (mediaElement) {
                    mediaElement.dispatchEvent(new Event('ended', { bubbles: true }));
                    logStore.addLog(`已触发${mediaType} ended事件，页面UI将自动更新`, "success");
                  }
                } catch (e) {
                  logStore.addLog(`触发ended事件失败: ${e.message}`, "warning");
                }
                
                window._currentMediaInterval = null;
                safeResolve();
              } else if (isdrag === '4') {
                completeRetryCount++;
                if (completeRetryCount >= maxCompleteRetries) {
                  if (afkEnabled) { BackgroundWorker.stop(simulateLoopId); } else { clearInterval(loopInterval); }
                  window._simulateActive = false;
                  logStore.addLog(`完成上报重试${maxCompleteRetries}次仍未通过，请检查视频是否需要其他操作`, "danger");
                  progressStore.update({
                    percent: 100,
                    currentTime: duration,
                    detail: '上报未通过',
                    isPlaying: false
                  });
                  window._currentMediaInterval = null;
                  safeResolve();
                } else {
                  logStore.addLog(`完成上报未通过，重试中(${completeRetryCount}/${maxCompleteRetries})...`, "warning");
                }
              }
            }
          };

          if (afkEnabled) {
            window._simulateLoopId = simulateLoopId;
            window._simulateActive = true;
            showOverlayAndBanner();
            BackgroundWorker.start(simulateLoopId, loopCallback, 1000);
            logStore.addLog(`🖥️ 挂机模式已启用，使用后台Worker计时`, "success");
          } else {
            loopInterval = setInterval(loopCallback, 1000);
            window._currentMediaInterval = loopInterval;
            window._simulateActive = true;
            showOverlayAndBanner();
          }

        } catch (e) {
          window._currentMediaInterval = null;
          window._simulateActive = false;
          logStore.addLog(`模拟播放出错: ${e.message}`, "danger");
          logStore.addLog(`回退到普通播放模式`, "warning");
          safeResolve(await playMediaDirectly(mediaType, iframeDocument));
        }
      });
    };

    
    const playMediaDirectly = async (mediaType, iframeDocument) => {
      return new Promise((resolve) => {
        logStore.addLog(`正在尝试播放${mediaType}，请稍等5s`, "primary");
        
        const autoMaxRate = configStore.platformParams.cx.parts[0].params[5].value || false;
        const playbackRateParam = configStore.platformParams.cx.parts[0].params[6];
        let playbackRate = playbackRateParam.value || 1;
        const maxRate = getMaxPlaybackRate(iframeDocument);
        
        
        const videoQuizEnabled = configStore.platformParams.cx.parts[0].params[4]?.value || false;
        if (videoQuizEnabled) {
          const loop = async () => {
            try {
              const submitBtn = iframeDocument?.querySelector("#videoquiz-submit");
              if (submitBtn) {
                const list = Array.from(iframeDocument.querySelectorAll(".ans-videoquiz-opt label"));
                if (list.length > 0) {
                  const answer = list[Math.floor(Math.random() * list.length)];
                  answer?.click();
                  submitBtn?.click();
                  await delay(3);
                  const container = iframeDocument.querySelector("#video .ans-videoquiz");
                  if (container) {
                    container.remove();
                  }
                  const components = Array.from(iframeDocument.querySelectorAll(".x-component-default"));
                  if (components.length) {
                    for (const com of components) {
                      com.style.display = "none";
                    }
                  }
                  logStore.addLog("已处理视频内题目", "success");
                }
              }
            } catch (e) {
              console.log("处理视频内题目失败:", e);
            }
            await delay(3);
            loop();
          };
          loop();
        }
        
        
        
        const simulatePlayEnabled = configStore.platformParams.cx.parts[0].params[0].value || false;
        if (!simulatePlayEnabled) {
          
          playbackRateParam.max = maxRate;
          
          if (playbackRate > maxRate) {
            playbackRateParam.value = maxRate;
            playbackRate = maxRate;
          }
        }
        
        if (autoMaxRate) {
          
          playbackRate = maxRate;
          logStore.addLog(`自动倍速: ${playbackRate}x`, "success");
        } else {
          
          if (playbackRate > maxRate) {
            playbackRate = maxRate;
            logStore.addLog(`倍速已调整为播放器最大值: ${playbackRate}x`, "warning");
          }
        }
        logStore.addLog(`播放倍速: ${playbackRate}x`, "primary");
        let isExecuted = false;
        logStore.addLog("播放成功", "success");
        const intervalId = setInterval(async () => {
          const mediaElement = iframeDocument.documentElement.querySelector(mediaType);
          if (mediaElement && !isExecuted) {
            await mediaElement.pause();
            mediaElement.muted = true;
            await mediaElement.play();
            
            mediaElement.playbackRate = playbackRate;
            const listener = async () => {
              await delay(3);
              await mediaElement.play();
              
              mediaElement.playbackRate = playbackRate;
            };
            mediaElement.addEventListener("pause", listener);
            mediaElement.addEventListener("ended", () => {
              logStore.addLog(`${mediaType}已播放完成`, "success");
              mediaElement.removeEventListener("pause", listener);
              resolve();
            });
            isExecuted = true;
            clearInterval(intervalId);
          }
        }, 2500);
      });
    };

    
    const getMaxPlaybackRate = (iframeDocument, showLog = true) => {
      try {
        const menuItems = iframeDocument.querySelectorAll('.vjs-playback-rate .vjs-menu-content .vjs-menu-item');
        if (menuItems.length === 0) {
          return 1; 
        }
        let maxRate = 1;
        menuItems.forEach(item => {
          const text = item.textContent.trim();
          const rate = parseFloat(text.replace('x', ''));
          if (!isNaN(rate) && rate > maxRate) {
            maxRate = rate;
          }
        });
        if (showLog) {
          logStore.addLog(`播放器最大倍速: ${maxRate}x`, "info");
        }
        return maxRate;
      } catch (e) {
        logStore.addLog(`获取最大倍速失败，使用默认值1x`, "warning");
        return 1;
      }
    };

    const handleMediaContent = async (mediaType, iframeDocument, iframe) => {
      
      const useSimulatePlay = configStore.platformParams.cx.parts[0]?.params[0]?.value || false;
      
      if (useSimulatePlay) {
        return simulateVideoPlay(iframe, iframeDocument, mediaType);
      } else {
        return playMediaDirectly(mediaType, iframeDocument);
      }
    };
    const handleAssignment = async (iframe, iframeDocument, iframeWindow) => {
      logStore.addLog("发现一个作业，正在解析", "warning");
      const taskId = _globalTaskId;
      return new Promise(async (resolve) => {
        if (!iframeDocument)
          return resolve();

        decodeCipherFont(iframeDocument);
        logStore.addLog(`题目列表获取成功`, "primary");
        const correctRate = await new CxQuestionHandler("zj", iframe).init();
        if (taskId !== _globalTaskId) {
          return resolve();
        }
        iframeWindow.alert = () => {
        };
        if (configStore.platformParams.cx.parts[2].params[0].value) {
          logStore.addLog("自动提交已开启，尝试提交", "primary");
          
          const answerParamsPart = configStore.platformParams.cx.parts.find(p => p.name === "答题参数");
          const correctRateThreshold = answerParamsPart?.params.find(p => p.name === "正确阈值")?.value || 85;
          if (correctRate < Number(correctRateThreshold)) {
            logStore.addLog(`正确率小于${correctRateThreshold}%，暂存`, "danger");
            await iframeWindow.noSubmit();
          } else {
            logStore.addLog(`正确率大于${correctRateThreshold}%，提交`, "success");
            await iframeWindow.btnBlueSubmit();
            await delay(1.5);
            await iframeWindow.submitCheckTimes();
            logStore.addLog("提交成功", "success");
            
            
            await delay(3);
            
            const resultDocument = iframe.contentDocument || iframe.contentWindow.document;
            await detectAndReportResults(resultDocument);
          }
        } else {
          logStore.addLog("未开启自动提交，暂存", "primary");
          await iframeWindow.noSubmit();
        }
        logStore.addLog("作业已完成", "success");
        return resolve();
      });
    };
    
    const handleSlideshow = async (iframeWindow) => {
      logStore.addLog("发现一个PPT，正在解析", "warning");

      
      if (typeof iframeWindow.finishJob === "function") {
        iframeWindow.finishJob();
        await delay(3);
        logStore.addLog("PPT阅读完成", "success");
        return Promise.resolve();
      }

      
      const swiperContainer = iframeWindow.document.querySelector(".swiper-container");
      if (swiperContainer) {
        
        iframeWindow.document.querySelectorAll("audio").forEach((audio) => {
          audio.addEventListener("play", () => { audio.muted = true; });
        });
        const slides = iframeWindow.document.querySelectorAll(".swiper-container .swiper-slide");
        const len = slides.length;
        logStore.addLog(`检测到带音频PPT，共${len}页，正在翻阅`, "primary");
        for (let i = 0; i < len; i++) {
          if (typeof iframeWindow.swiperNext === "function") {
            iframeWindow.swiperNext();
          }
          await delay(0.5);
        }
        await delay(3);
        logStore.addLog("PPT翻阅完成", "success");
        return Promise.resolve();
      }

      
      const pptWindow = iframeWindow.document.querySelector("#panView")?.contentWindow;
      if (pptWindow) {
        await pptWindow.scrollTo({ top: pptWindow.document.body.scrollHeight, behavior: "smooth" });
        await delay(3);
      }

      logStore.addLog("PPT阅读完成", "success");
      return Promise.resolve();
    };
    const handleEbook = async (iframeWindow) => {
      logStore.addLog("发现一个电子书，正在解析", "warning");
      _unsafeWindow.top.onchangepage(iframeWindow.getFrameAttr("end"));
      logStore.addLog("阅读完成", "success");
      return Promise.resolve();
    };
    const awaitFrameReady = async (iframe) => {
      return new Promise((resolve) => {
        const intervalId = setInterval(async () => {
          var _a;
          if (iframe.contentDocument && ((_a = iframe.contentDocument) == null ? void 0 : _a.readyState) == "complete") {
            resolve();
            clearInterval(intervalId);
          }
        }, 500);
      });
    };
    const handleSingleFrame = async (iframe) => {
      var _a, _b;
      
      stopSimulatePlayIfNeeded();
      
      const iframeSrc = iframe.src;
      const iframeDocument = iframe.contentDocument;
      const iframeWindow = iframe.contentWindow;
      
      if (!iframeDocument || !iframeWindow) {
        return Promise.resolve();
      }
      
      if (iframeSrc.includes("javascript:")) {
        return Promise.resolve();
      }
      
      
      const lastTaskId = _processedIframeTasks.get(iframe);
      const currentTaskId = _globalTaskId;
      if (lastTaskId === currentTaskId) {
        
        return Promise.resolve();
      }
      _processedIframeTasks.set(iframe, currentTaskId);
      
      await awaitFrameReady(iframe);
      
      
      
      let element = iframe.parentElement;
      let hasAncestorFinished = false;
      while (element) {
        if (element.classList && element.classList.contains("ans-job-finished")) {
          hasAncestorFinished = true;
          break;
        }
        element = element.parentElement;
      }
      
      if (hasAncestorFinished) {
        logStore.addLog("任务点已完成，跳过", "success");
        return Promise.resolve();
      }
      
      
      const matchSrc = iframeSrc.includes("api/work");
      if (matchSrc) {
        try {
          const pageContent = iframeDocument.documentElement.innerText || "";
          if (pageContent.includes("已完成") || pageContent.includes("待批阅")) {
            return Promise.resolve();
          }
        } catch (e) {
          
        }
      }
      
      
      const checkElement = iframe.closest(".ans-job-icon") || iframe.parentElement?.querySelector(".ans-job-icon");
      if (checkElement) {
        const ariaLabel = checkElement.getAttribute("aria-label") || "";
        if (ariaLabel.includes("已完成")) {
          logStore.addLog("任务点已完成，跳过", "success");
          return Promise.resolve();
        }
      }
      
      
      {
        const _src = iframe.getAttribute('_src') || '';
        const matchSrc = iframeSrc.includes("api/work");
        const matchSrcAttr = _src.includes("api/work");
        
        
        const normalMode = configStore.platformParams.cx.parts[2].params[2].value;  
        const onlyVideo = configStore.platformParams.cx.parts[2].params[3].value;    
        const onlyAnswer = configStore.platformParams.cx.parts[2].params[4].value;   
        
        
        if (matchSrcAttr && !matchSrc) {
          return Promise.resolve();
        }
        
        
        if (matchSrc || matchSrcAttr) {
          if (onlyVideo) {
            
            if (!hasLoggedSkipTip) {
              logStore.addLog("仅视频模式，跳过答题", "primary");
              hasLoggedSkipTip = true;
            }
            return Promise.resolve();
          }
          return handleAssignment(iframe, iframeDocument, iframeWindow);
        }
        
        
        const ansJobIcon = (_b = iframe.parentElement) == null ? void 0 : _b.querySelector(".ans-job-icon");
        
        if (ansJobIcon) {
          if (onlyAnswer) {
            
            if (!hasLoggedSkipTip) {
              logStore.addLog("仅答题模式，跳过视频等其他内容", "primary");
              hasLoggedSkipTip = true;
            }
            return Promise.resolve();
          }
          
          if (iframeSrc.includes("video")) {
            return handleMediaContent("video", iframeDocument, iframe);
          } else if (iframeSrc.includes("audio")) {
            return handleMediaContent("audio", iframeDocument, iframe);
          } else if (iframeDocument.querySelector("#img.imglook") || iframeDocument.querySelector(".swiper-container")) {
            return handleSlideshow(iframeWindow);
          } else if (iframeSrc.includes("modules/innerbook")) {
            return handleEbook(iframeWindow);
          }
        }
      }
      
      return Promise.resolve();
    };
    init();
    monitorIframes();
    watchUrlChanges();
  };
  
  const clickOption = (element) => {
    element.focus();
    element.dispatchEvent(new MouseEvent('mousedown', { bubbles: true, cancelable: true }));
    element.dispatchEvent(new MouseEvent('mouseup', { bubbles: true, cancelable: true }));
    element.dispatchEvent(new MouseEvent('click', { bubbles: true, cancelable: true }));
  };

  
  const useStuActiveLogic = async () => {
    
    try {
      window.parent.postMessage({ source: 'chaoxing-helper-iframe', action: 'closePanel' }, '*');
    } catch (e) {}

    const logStore = useLogStore();
    const questionStore = useQuestionStore();
    const configStore = useConfigStore();
    logStore.addLog(`进入随堂练习答题页面`, "primary");
    logStore.addLog(`等待Vue渲染题目...`, "warning");
    
    
    decodeCipherFont(document);
    
    
    let questionItems = null;
    for (let i = 0; i < 60; i++) {
      await delay(0.5);
      questionItems = document.querySelectorAll(".question-item");
      if (questionItems.length > 0) break;
    }
    
    if (!questionItems || questionItems.length === 0) {
      logStore.addLog("未解析到题目，可能页面尚未加载完成", "danger");
      logStore.addLog("请刷新页面重试", "warning");
      return;
    }
    
    
    const questionTypeMapping = {
      "单选题": "0",
      "多选题": "1",
      "判断题": "3",
      "填空题": "2"
    };
    
    const questions = [];
    questionItems.forEach((questionItem) => {
      const questionNameEl = questionItem.querySelector(".question-name");
      const questionText = questionNameEl ? questionNameEl.innerText.trim() : "";
      
      let questionTypeText = "单选题";
      if (questionItem.classList.contains("multiple-choice")) {
        questionTypeText = "多选题";
      } else if (questionText.includes("判断题")) {
        questionTypeText = "判断题";
      } else if (questionText.includes("填空题")) {
        questionTypeText = "填空题";
      }
      
      const cleanTitle = questionText
        .replace(/^\d+\.\s*/, "")
        .replace(/\[单选题\]|\[多选题\]|\[判断题\]|\[填空题\]/g, "")
        .trim();
      
      const optionLis = questionItem.querySelectorAll(".option-list li");
      const optionsObject = {};
      const optionTexts = [];
      optionLis.forEach((li) => {
        const result = li.querySelector(".option-result")?.innerText?.trim() || "";
        optionsObject[result] = li;
        optionTexts.push(result);
      });
      
      questions.push({
        element: questionItem,
        type: questionTypeMapping[questionTypeText] || "0",
        title: cleanTitle,
        optionsText: optionTexts,
        options: optionsObject,
        answer: [],
        workType: "stuActive",
        refer: window.location.href
      });
    });
    
    logStore.addLog(`成功解析到${questions.length}道题目`, "success");
    
    
    const answerParamsPart = configStore.platformParams.cx?.parts.find(p => p.name === "答题参数");
    const skipAnswered = answerParamsPart?.params.find(p => p.name === "跳过已答")?.value || false;
    const answerInterval = answerParamsPart?.params.find(p => p.name === "答题间隔")?.value || 1;
    const useSimilarity = answerParamsPart?.params.find(p => p.name === "相似匹配")?.value || false;
    const simulateDelay = answerParamsPart?.params.find(p => p.name === "模拟延迟")?.value ?? true;
    
    let skippedCount = 0;
    for (const [index, question] of questions.entries()) {
      
      const isAnswered = Array.from(question.element.querySelectorAll(".option-list li")).some(li => li.classList.contains("active"));
      if (skipAnswered && isAnswered) {
        logStore.addLog(`第${index + 1}题已作答，跳过`, "warning");
        skippedCount += 1;
        questionStore.addQuestion(question);
        continue;
      }
      
      logStore.addLog(`正在查找第${index + 1}道题目答案...`, "primary");
      const answerData = await queryAnswer(question);
      
      if (answerData.code === 499) {
        break;
      }
      if (answerData.code === 200) {
        question.answer = answerData.data.answer;
        question.source = answerData.data.source;
        
        
        if (question.type === "0" || question.type === "1" || question.type === "3") {
          const selectedKeys = new Set();
          for (const answer of question.answer) {
            const cleanAnswer = answer.replace(/<[^>]*>/g, "").trim();
            let matched = false;
            for (const key in question.options) {
              if (key === cleanAnswer && !selectedKeys.has(key)) {
                matched = true;
                selectedKeys.add(key);
                clickOption(question.options[key]);
                await randomDelay(0.1, 0.15);
                break;
              }
            }
            if (!matched && useSimilarity) {
              const bestMatch = pickBestOption(cleanAnswer, question.options);
              if (bestMatch && !selectedKeys.has(bestMatch.key)) {
                selectedKeys.add(bestMatch.key);
                clickOption(question.options[bestMatch.key]);
                await randomDelay(0.1, 0.15);
              }
            }
          }
        }
        
        const sourceHint = answerData.data.source === "ai" ? "(AI生成)" : "";
        const msgHint = answerData.msg ? ` - ${answerData.msg}` : "";
        logStore.addLog(`第${index + 1}道题搜索成功${sourceHint}${msgHint}`, "success");
        logStore.addLog(`剩余次数:${answerData.data.num}`, "primary");
      } else {
        
        if (answerData.code === 403 && answerData.data && answerData.data.limitedMode) {
          logStore.addLog(`第${index + 1}道题搜索失败: 免费题库无答案`, "danger");
          question.answer[0] = answerData.msg;
        } else if (answerData.code === 429 && answerData.data && answerData.data.limitedMode) {
          logStore.addLog(`第${index + 1}道题搜索失败: 今日免费查题已达上限`, "danger");
          logStore.addLog('💎 <a href="https://hsfaka.cn/shop/IU2JDO1E" target="_blank" style="color:#667eea;text-decoration:underline;">点击购买Token</a>，享无限查题', 'warning');
          question.answer[0] = answerData.msg;
        } else {
          logStore.addLog(`第${index + 1}道题搜索失败: ${answerData.msg}`, "danger");
          question.answer[0] = answerData.msg;
        }
      }
      questionStore.addQuestion(question);
      await (simulateDelay ? randomDelay(Number(answerInterval), 0.5) : delay(Number(answerInterval)));
    }
    
    if (skippedCount > 0) {
      logStore.addLog(`共跳过${skippedCount}道已答题目`, "primary");
    }
    logStore.addLog("随堂练习答题完成", "success");
    const autoSubmit = configStore.platformParams.cx.parts[2]?.params.find(p => p.name === "自动提交")?.value;
    if (autoSubmit) {
      logStore.addLog("自动提交已开启，3秒后提交...", "warning");
      await delay(3);
      const submitBtn = document.querySelector(".submit-btn");
      if (submitBtn) {
        clickOption(submitBtn);
        logStore.addLog("已点击提交", "success");
        
        
        await delay(3);
        await detectAndReportResults(document);
      } else {
        logStore.addLog("未找到提交按钮，请手动提交", "danger");
      }
    } else {
      logStore.addLog("未开启自动提交，请手动提交", "info");
    }
  };
  const useCxWorkLogic = async () => {
    const logStore = useLogStore();
    useConfigStore();
    logStore.addLog(`进入新版作业页面，开始准备答题`, "primary");
    logStore.addLog(`正在解析题目, 请等待5s`, "warning");
    await new CxQuestionHandler("zy").init();
  };
  const useCxExamLogic = async () => {
    var _a;
    const logStore = useLogStore();
    const configStore = useConfigStore();
    logStore.addLog(`进入新版考试页面，开始准备答题`, "primary");
    logStore.addLog(`正在解析题目, 请等待5s`, "warning");
    await new CxQuestionHandler("ks").init();
    if (configStore.platformParams.cx.parts[3].params[0].value) {
      const currentQuestionNum = parseInt(((_a = _unsafeWindow.document.querySelector(".topicNumber_list .current")) == null ? void 0 : _a.innerText) || "0");
      const totalQuestions = _unsafeWindow.document.querySelectorAll(".topicNumber_list li").length;
      if (currentQuestionNum >= totalQuestions) {
        logStore.addLog("当前已是最后一题，不再自动切换", "warning");
        logStore.addLog("请手动检查答案后提交试卷", "primary");
      } else {
        logStore.addLog("自动切换已开启，正在前往下一题", "success");
        await delay(3);
        _unsafeWindow.getTheNextQuestion(1);
      }
    } else {
      logStore.addLog("已经关闭自动切换，在设置里可更改", "danger");
    }
  };
  class ZhsQuestionHandler extends QuestionProcessor {
    constructor() {
      super();
      
      __publicField(this, "isZhsQuestionAnswered", (question) => {
        
        
        const reverseTypeMapping = {
          "0": "单选题",
          "1": "多选题",
          "2": "填空题", 
          "3": "判断题",
          "4": "简答题",
          "5": "名词解释",
          "6": "论述题",
          "7": "计算题"
        };
        
        const questionTypeText = reverseTypeMapping[question.type] || question.type;
        
        
        if (questionTypeText === "单选题" || questionTypeText === "多选题") {
          for (const key in question.options) {
            const optionElement = question.options[key];
            
            
            if (optionElement.classList.contains("cur") ||
                optionElement.classList.contains("selected") ||
                optionElement.querySelector(".onChecked") ||
                optionElement.querySelector(".cur") ||
                optionElement.querySelector(".selected")) {
              return true;
            }
          }
          return false;
        }
        
        if (questionTypeText === "判断题") {
          for (const key in question.options) {
            const optionElement = question.options[key];
            
            if (optionElement.classList.contains("cur") ||
                optionElement.classList.contains("selected") ||
                optionElement.querySelector(".onChecked")) {
              return true;
            }
          }
          return false;
        }
        return false;
      });
      __publicField(this, "init", async () => {
        var _a;
        this.questions = [];
        this.parseHtml();
        if (this.questions.length) {
          this.addLog(`成功解析到${this.questions.length}个题目`, "primary");
          const configStore = useConfigStore();
          
          const _answerParamsPart2 = configStore.platformParams[configStore.platformName]?.parts.find(p => p.name === "答题参数");
          const skipAnswered = _answerParamsPart2?.params.find(p => p.name === "跳过已答")?.value || false;
          let skippedCount = 0;
          for (const [index, question] of this.questions.entries()) {
            
            if (skipAnswered && this.isZhsQuestionAnswered(question)) {
              this.addLog(`第${index + 1}道题已作答，跳过`, "warning");
              skippedCount += 1;
              this.addQuestion(question);
              
              await ((_a = this._document) == null ? void 0 : _a.querySelectorAll(".switch-btn-box > button")[1]).click();
              
              await new Promise(r => setTimeout(r, 1500));
              continue;
            }
            this.addLog(`正在查找第${index + 1}道题目答案...`, "primary");
            const answerData = await queryAnswer(question);
            if (answerData.code === 200) {
              question.answer = answerData.data.answer;
              question.source = answerData.data.source;  
              
              
              this.addQuestion(question);
              
              await new Promise(r => setTimeout(r, 100));
              
              
              await this.fillQuestion(question);
              
              const sourceHint = answerData.data.source === "ai" ? "(AI生成)" : "";
              const msgHint = answerData.msg ? ` - ${answerData.msg}` : "";
              this.addLog(`第${index + 1}道题搜索成功${sourceHint}${msgHint}`, "success");
              this.addLog(`剩余次数:${answerData.data.num}`, "primary");
            } else {
              this.addLog(`第${index + 1}道题搜索失败：${answerData.msg}`, "danger");
              question.answer[0] = answerData.msg;
              this.addQuestion(question);
              await new Promise(r => setTimeout(r, 100));
            }
            
            await ((_a = this._document) == null ? void 0 : _a.querySelectorAll(".switch-btn-box > button")[1]).click();
            
            await new Promise(r => setTimeout(r, 1500));
          }
          if (skippedCount > 0) {
            this.addLog(`共跳过${skippedCount}道已答题目`, "primary");
          }
        } else
          this.addLog("未解析到题目，请刷新重试或进入答题页面", "danger");
      });
      __publicField(this, "parseHtml", () => {
        if (!this._document)
          return [];
        const questionElements = this._document.querySelectorAll(SELECTORS.ZHS_QUESTION);
        this.addQuestions(questionElements);
      });
      __publicField(this, "fillQuestion", async (question) => {
        if (!this._window)
          return;
        
        try {
          
          const typeNum = question.type;
          
          if (typeNum === "0" || typeNum === "1") {
            const configStore = useConfigStore();
            const useSimilarity = configStore.platformParams[configStore.platformName]?.parts.find(p => p.name === "答题参数")?.params.find(p => p.name === "相似匹配")?.value || false;
            
            
            let hasDeselected = false;
            for (const key in question.options) {
              const optionElement = question.options[key];
              
              if (optionElement.classList.contains("cur") ||
                  optionElement.classList.contains("selected") ||
                  optionElement.querySelector(".onChecked") ||
                  optionElement.querySelector(".cur") ||
                  optionElement.querySelector(".selected")) {
                hasDeselected = true;
                optionElement.click();
              }
            }
            
            
            if (hasDeselected) {
              await new Promise(r => setTimeout(r, 500));
            }
            
            const selectedKeys =  new Set();
            
            
            console.log("🔍 答案格式:", typeof question.answer, Array.isArray(question.answer), question.answer);
            console.log("🔍 选项keys:", Object.keys(question.options));
            
            
            let answers = question.answer;
            if (typeof question.answer === 'string') {
              
              if (question.answer.startsWith('[')) {
                try {
                  answers = JSON.parse(question.answer);
                } catch (e) {
                  answers = question.answer.split(/[,，]/).map(a => a.trim()).filter(a => a);
                }
              } else {
                answers = question.answer.split(/[,，]/).map(a => a.trim()).filter(a => a);
              }
              console.log("🔍 答案已分割:", answers);
            }
            
            answers.forEach((answer) => {
              const cleanAnswer = this.stripTags(answer).trim();
              let matched = false;
              for (const key in question.options) {
                const cleanKey = key.trim();
                console.log(`🔍 匹配: "${cleanAnswer}" vs "${cleanKey}" = ${cleanKey === cleanAnswer}`);
                if (cleanKey === cleanAnswer && !selectedKeys.has(cleanKey)) {
                  matched = true;
                  selectedKeys.add(key);
                  
                  const optionElement = question.options[key];
                  
                  
                  
                  const isAlreadySelected = optionElement.classList.contains("cur") || 
                                            optionElement.classList.contains("selected") ||
                                            optionElement.querySelector(".onChecked") ||
                                            optionElement.querySelector(".cur") ||
                                            optionElement.querySelector(".selected");
                  
                  if (!isAlreadySelected) {
                    optionElement.setAttribute("data-filling", "true");
                    optionElement.click();
                    setTimeout(() => optionElement.removeAttribute("data-filling"), 200);
                  }
                  break;
                }
              }
              if (!matched && useSimilarity) {
                const bestMatch = pickBestOption(cleanAnswer, question.options);
                if (bestMatch && !selectedKeys.has(bestMatch.key)) {
                  selectedKeys.add(bestMatch.key);
                  
                  const optionElement = question.options[bestMatch.key];
                  
                  
                  
                  const isAlreadySelected = optionElement.classList.contains("cur") || 
                                            optionElement.classList.contains("selected") ||
                                            optionElement.querySelector(".onChecked") ||
                                            optionElement.querySelector(".cur") ||
                                            optionElement.querySelector(".selected");
                  
                  if (!isAlreadySelected) {
                    optionElement.setAttribute("data-filling", "true");
                    optionElement.click();
                    setTimeout(() => optionElement.removeAttribute("data-filling"), 200);
                  }
                }
              }
            });
          } else if (typeNum === "3") {
            
            let answer = "错";
            if (REGEX.JUDGE_FALSE.test(question.answer[0])) {
              answer = "错";
            } else if (REGEX.JUDGE_TRUE.test(question.answer[0])) {
              answer = "对";
            }
            for (const key in question.options) {
              const optionElement = question.options[key];
              
              
              const isTrueOption = REGEX.JUDGE_TRUE.test(key);  
              const isFalseOption = REGEX.JUDGE_FALSE.test(key); 
              
              if ((isTrueOption && answer === "对") || (isFalseOption && answer === "错")) {
                optionElement.setAttribute("data-filling", "true");
                optionElement.click();
                setTimeout(() => optionElement.removeAttribute("data-filling"), 200);
                break;
              }
            }
          } else if (typeNum === "2") {
            
            const textareaElements = question.element.querySelectorAll("textarea");
            if (textareaElements.length > 0 && question.answer && question.answer.length > 0) {
              
              textareaElements.forEach((textarea, index) => {
                if (index < question.answer.length) {
                  const answerText = this.stripTags(question.answer[index] || question.answer[0]);
                  textarea.value = answerText;
                  textarea.dispatchEvent(new Event("input", { bubbles: true }));
                  console.log(`🔍 填空题填入: 第${index + 1}空 = "${answerText}"`);
                }
              });
            }
          } else if (["4", "5", "6", "7"].includes(typeNum)) {
            
            const textareaElement = question.element.querySelector("textarea");
            if (textareaElement && question.answer && question.answer.length > 0) {
              const answerText = question.answer.map(a => this.stripTags(a)).join("\n");
              textareaElement.value = answerText;
              textareaElement.dispatchEvent(new Event("input", { bubbles: true }));
              console.log(`🔍 简答题填入: "${answerText.substring(0, 50)}..."`);
            }
          } else {
            console.log(`⚠️ 未处理的题型: ${typeNum}`);
          }
        } catch (error) {
          this.addLog(`答题过程发生错误：${error.message}`, "danger");
        }
      });
    }
    extractOptions(optionElements, optionSelector) {
      const optionsObject = {};
      const optionTexts = [];
      optionElements.forEach((optionElement) => {
        var _a;
        const optionTextContent = this.stripTags(((_a = optionElement.querySelector(optionSelector)) == null ? void 0 : _a.innerHTML) || "");
        optionsObject[optionTextContent] = optionElement;
        optionTexts.push(optionTextContent);  
      });
      return [optionsObject, optionTexts];
    }
    addQuestions(questionElements) {
      questionElements.forEach((questionElement) => {
        var _a, _b;
        const questionTitle = (questionElement == null ? void 0 : questionElement.querySelector(".subject_describe div,.smallStem_describe p")).__Ivue__._data.shadowDom.textContent;
        const questionTypeText = ((_b = (_a = questionElement == null ? void 0 : questionElement.querySelector(".subject_type span")) == null ? void 0 : _a.textContent) == null ? void 0 : _b.slice(1, 4)) || "";
        
        
        const zhsTypeMapping = {
          "单选": "单选题",
          "多选": "多选题", 
          "填空": "填空题",
          "判断": "判断题",
          "简答": "简答题",
          "名词": "名词解释",
          "论述": "论述题",
          "计算": "计算题"
        };
        
        
        const fullQuestionType = zhsTypeMapping[questionTypeText] || questionTypeText;
        
        
        const numericType = this.typeMap.get(fullQuestionType) || "999";
        
        const [optionsObject, optionTexts] = this.extractOptions(questionElement == null ? void 0 : questionElement.querySelectorAll(SELECTORS.ZHS_OPTION), ".node_detail");
        this.questions.push({
          element: questionElement,
          type: numericType,  
          title: questionTitle,
          optionsText: optionTexts,
          options: optionsObject,
          answer: [],
          workType: "zhs",
          refer: this._window.location.href
        });
      });
    }
  }
  const hookError = () => {
    console.log("hookError");
    const oldset = _unsafeWindow.setInterval;
    const oldout = _unsafeWindow.setTimeout;
    _unsafeWindow.setInterval = function(...args) {
      const err = new Error();
      if (err.stack && err.stack.indexOf("checkoutNotTrustScript") !== -1) {
        return -1;
      }
      return oldset.call(this, ...args);
    };
    _unsafeWindow.setTimeout = function(...args) {
      const err = new Error();
      if (err.stack && err.stack.indexOf("checkoutNotTrustScript") !== -1) {
        return -1;
      }
      return oldout.call(this, ...args);
    };
  };
  class XMLHttpRequestInterceptor {
    constructor(urlList, callback) {
      __publicField(this, "xhr");
      __publicField(this, "originalOpen");
      __publicField(this, "originalSend");
      __publicField(this, "callback");
      this.xhr = new XMLHttpRequest();
      this.originalOpen = this.xhr.open;
      this.originalSend = this.xhr.send;
      this.callback = callback;
      this.intercept(urlList);
    }
    intercept(urlList) {
      const self = this;
      XMLHttpRequest.prototype.open = function(method, url2) {
        self.originalOpen.apply(this, [method, url2]);
        const shouldIntercept = urlList.some((urlItem) => url2.includes(urlItem));
        if (shouldIntercept) {
          self.callback(this.responseText);
        }
      };
    }
  }
  const useZhsAnswerLogic = async () => {
    hookError();
    const logStore = useLogStore();
    useConfigStore();
    logStore.addLog(`进入答题页面，开始准备答题`, "primary");
    logStore.addLog(`正在解析题目, 请等待5s`, "warning");
    new XMLHttpRequestInterceptor(["gateway/t/v1/answer/hasAnswer"], async () => {
      await delay(1);
      _unsafeWindow.document.getSelection = function() {
        return {
          removeAllRanges: function() {
          }
        };
      };
      _unsafeWindow.document.onselectstart = true;
      _unsafeWindow.document.oncontextmenu = true;
      _unsafeWindow.document.oncut = true;
      _unsafeWindow.document.oncopy = true;
      _unsafeWindow.document.onpaste = true;
      await new ZhsQuestionHandler().init();
      return true;
    });
  };

  

  

  const _sfc_main$3 =  vue.defineComponent({
    __name: "Index",
    emits: ["customEvent"],
    setup(__props, { emit: __emit }) {
      var _a;
      const cardWidth = vue.ref("100%");
      const isShow = vue.ref(false);
      (_a = document.querySelector("li>a.experience:not([onclick])")) == null ? void 0 : _a.click();
      const configStore = useConfigStore();
      const logStore = useLogStore();
      const questionStore = useQuestionStore();
      const url2 = window.location.href;
      logStore.addLog("用户悉知：使用脚本即为完全同意用户协议", "success");
      logStore.addLog("脚本加载成功，正在解析网页", "primary");
      logStore.addLog("请不要多个脚本同时使用，会有脚本冲突问题", "warning");
      logStore.addLog("如果脚本出现异常，请用谷歌、火狐等浏览器", "warning");
      const urlLogicPairs = [
        { keyword: "/mycourse/studentstudy", logic: useCxChapterLogic },
        { keyword: "/mooc2/work/dowork", logic: useCxWorkLogic },
        { keyword: "/exam-ans/", logic: useCxExamLogic },  
        { keyword: "/work/index", logic: useCxWorkLogic },  
        { keyword: "/work/doTest", logic: useCxWorkLogic },  
        { keyword: "/work/calcAnswer", logic: useCxWorkLogic },  
        { keyword: "/knowledge/start", logic: useCxChapterLogic },  
        {
          keyword: "mycourse/stu?courseid",
          logic: () => {
            logStore.addLog("该页面无任务，请进入章节或答题页面使用", "danger");
          }
        },
        { keyword: "/stuExamWeb.html", logic: useZhsAnswerLogic },
        { keyword: "answerQuestion2", logic: useStuActiveLogic }
      ];
      const executeLogicByUrl = (url22) => {
        for (const { keyword, logic } of urlLogicPairs) {
          if (url22.includes(keyword)) {
            logic();
            isShow.value = true;
            return;
          }
        }
        isShow.value = false;
      };
      executeLogicByUrl(url2);
      const emit = __emit;
      emit("customEvent", isShow.value);
      const tabs = [
        {
          label: "🏡主页信息",
          id: "main-log",
          component: ScriptHome,
          props: { "log-list": logStore.logList, "server-config": CURRENT_SERVER_CONFIG }
        },
        {
          label: "📝答题记录",
          id: "question-record",
          component: QuestionTable,
          props: { "question-list": questionStore.questionList }
        },
        {
          label: "⚙️脚本配置",
          id: "config-panel",
          component: ScriptSetting,
          props: { "global-config": configStore }
        },
        {
          label: "💬作者的话",
          id: "author-words",
          component: AuthorWords
        },
        {
          label: "🎁推广奖励",
          id: "referral-panel",
          component: ReferralPanel
        }
      ];
      const activeTab = vue.ref("main-log");
      const switchTab = (tabId) => {
        activeTab.value = tabId;
      };
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("div", {
          style: vue.normalizeStyle({ width: cardWidth.value }),
          class: "card_content"
        }, [
          vue.createElementVNode("div", {
            class: "config-tabs-container"
          }, [
            (vue.openBlock(), vue.createElementBlock(vue.Fragment, null, vue.renderList(tabs, (tab) => {
              const isUnverified = tab.id === "config-panel" && !configStore.tokenVerified;
              const isActive = activeTab.value === tab.id;
              return vue.createElementVNode("button", {
                key: tab.id,
                class: vue.normalizeClass(["config-tab", { active: isActive }]),
                style: isUnverified && !isActive ? {
                  "background": "linear-gradient(135deg, #dc3545 0%, #c82333 100%)",
                  "border-color": "#dc3545",
                  "color": "#fff"
                } : {},
                onClick: () => switchTab(tab.id)
              }, vue.toDisplayString(tab.label), 13, ["onClick", "class", "style"]);
            }), 64))
          ]),
          (vue.openBlock(), vue.createElementBlock(vue.Fragment, null, vue.renderList(tabs, (tab) => {
            return vue.withDirectives(vue.createElementVNode("div", {
              key: tab.id,
              class: "config-panel"
            }, [
              tab.component ? (vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent(tab.component), vue.mergeProps({
                key: 0,
                ref_for: true
              }, tab.props), null, 16)) : vue.createCommentVNode("", true)
            ], 512), [
              [vue.vShow, activeTab.value === tab.id]
            ]);
          }), 128))
        ], 4);
      };
    }
  });
  const _sfc_main$2 =  vue.defineComponent({
    __name: "ZoomButtons",
    emits: ["toggleZoom"],
    setup(__props, { emit: __emit }) {
      const emit = __emit;
      const configStore = useConfigStore();
      const toggleZoom = () => {
        const newValue = !configStore.isMinus;
        emit("toggleZoom", newValue);
      };
      return (_ctx, _cache) => {
        const _component_el_icon = vue.resolveComponent("el-icon");
        return vue.openBlock(), vue.createElementBlock("div", {
          onMousedown: _cache[1] || (_cache[1] = vue.withModifiers(() => {
          }, ["stop"]))
        }, [
          vue.createVNode(_component_el_icon, {
            onClick: _cache[0] || (_cache[0] = () => toggleZoom()),
            size: "small",
            style: { "cursor": "pointer" }
          }, {
            default: vue.withCtx(() => [
              vue.createVNode(vue.unref(configStore.isMinus ? full_screen_default : minus_default))
            ]),
            _: 1
          })
        ], 32);
      };
    }
  });
  const _hoisted_1 = { class: "overlay" };
  const _hoisted_2 = { class: "title" };
  const _hoisted_3 = { class: "minus" };
  const _sfc_main$1 =  vue.defineComponent({
    __name: "layout",
    setup(__props) {
      const isShow = vue.ref(false);
      const configStore = useConfigStore();
      vue.watch(configStore, (newVal) => {
        _GM_setValue("config", JSON.stringify(newVal));
      }, { deep: true });
      const isDragging = vue.ref(false);
      const offsetX = vue.ref(0);
      const offsetY = vue.ref(0);
      const moveStyle = vue.computed(() => {
        return {
          left: configStore.position.x,
          top: configStore.position.y,
          height: configStore.isMinus ? "auto" : "560px",
          maxHeight: configStore.isMinus ? "none" : "560px",
          width: configStore.isMinus ? "280px" : "720px",
          maxWidth: configStore.isMinus ? "280px" : "720px"
        };
      });
      const startDrag = (event) => {
        isDragging.value = true;
        offsetX.value = event.clientX - event.target.getBoundingClientRect().left;
        offsetY.value = event.clientY - event.target.getBoundingClientRect().top;
        document.addEventListener("mousemove", drag);
        document.addEventListener("mouseup", endDrag);
      };
      const drag = (event) => {
        if (!isDragging.value)
          return;
        const x = event.clientX - offsetX.value;
        const y = event.clientY - offsetY.value;
        configStore.position.x = `${x - 11}px`;
        configStore.position.y = `${y - 11}px`;
        if (x < 0) {
          configStore.position.x = "0px";
        }
        if (y < 0) {
          configStore.position.y = "0px";
        }
        if (x > window.innerWidth - 720) {
          configStore.position.x = `${window.innerWidth - 720}px`;
        }
        if (y > window.innerHeight - 560) {
          configStore.position.y = `${window.innerHeight - 560}px`;
        }
      };
      const endDrag = () => {
        isDragging.value = false;
        document.removeEventListener("mousemove", drag);
        document.removeEventListener("mouseup", endDrag);
      };
      
      const startDragTouch = (event) => {
        if (event.touches.length === 1) {
          isDragging.value = true;
          const touch = event.touches[0];
          offsetX.value = touch.clientX - event.target.getBoundingClientRect().left;
          offsetY.value = touch.clientY - event.target.getBoundingClientRect().top;
          document.addEventListener("touchmove", dragTouch, { passive: false });
          document.addEventListener("touchend", endDragTouch);
        }
      };
      const dragTouch = (event) => {
        if (!isDragging.value || event.touches.length !== 1)
          return;
        event.preventDefault(); 
        const touch = event.touches[0];
        const x = touch.clientX - offsetX.value;
        const y = touch.clientY - offsetY.value;
        configStore.position.x = `${x - 11}px`;
        configStore.position.y = `${y - 11}px`;
        if (x < 0) {
          configStore.position.x = "0px";
        }
        if (y < 0) {
          configStore.position.y = "0px";
        }
        if (x > window.innerWidth - 720) {
          configStore.position.x = `${window.innerWidth - 720}px`;
        }
        if (y > window.innerHeight - 560) {
          configStore.position.y = `${window.innerHeight - 560}px`;
        }
      };
      const endDragTouch = () => {
        isDragging.value = false;
        document.removeEventListener("touchmove", dragTouch);
        document.removeEventListener("touchend", endDragTouch);
      };
      return (_ctx, _cache) => {
        const _component_el_icon = vue.resolveComponent("el-icon");
        const _component_el_tooltip = vue.resolveComponent("el-tooltip");
        const _component_el_tag = vue.resolveComponent("el-tag");
        const _component_el_text = vue.resolveComponent("el-text");
        const _component_el_divider = vue.resolveComponent("el-divider");
        const _component_el_card = vue.resolveComponent("el-card");
        return vue.withDirectives((vue.openBlock(), vue.createElementBlock("div", {
          style: vue.normalizeStyle(moveStyle.value),
          class: "main-page"
        }, [
          vue.withDirectives(vue.createElementVNode("div", _hoisted_1, null, 512), [
            [vue.vShow, isDragging.value]
          ]),
          vue.createVNode(_component_el_card, {
            style: { "border": "0" },
            "close-on-click-modal": false,
            "lock-scroll": false,
            modal: false,
            "show-close": false,
            "modal-class": "modal"
          }, {
            header: vue.withCtx(() => [
              vue.createElementVNode("div", {
                class: "card-header",
                onMousedown: startDrag,
                onTouchstart: startDragTouch
              }, [
                vue.createElementVNode("div", _hoisted_2, [
                  vue.createElementVNode("span", null, vue.toDisplayString(vue.unref(configStore).isMinus 
                    ? `网课助手 v${vue.unref(configStore).version}` 
                    : vue.unref(configStore).platformParams?.[vue.unref(configStore).platformName]?.name || `网课小助手-飘飘友情提供 v${vue.unref(configStore).version}`), 1),
                  vue.createVNode(_component_el_tooltip, {
                    teleported: "",
                    effect: "dark",
                    placement: "top-start",
                    content: "<span>注意事项：<br/>请尽量使用新版，不要使用旧版。<br/></span>",
                    "raw-content": ""
                  }, {
                    default: vue.withCtx(() => [
                      vue.createVNode(_component_el_icon, {
                        style: { "margin-left": "5px" },
                        size: "small"
                      }, {
                        default: vue.withCtx(() => [
                          vue.createVNode(vue.unref(warning_default))
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  vue.createVNode(_component_el_tag, {
                    size: "small",
                    type: vue.unref(configStore).platformName === "cx" ? "primary" : "success",
                    style: { "margin-left": "10px" }
                  }, {
                    default: vue.withCtx(() => [
                      vue.createTextVNode(vue.toDisplayString(vue.unref(configStore).platformName === "cx" ? "学习通" : vue.unref(configStore).platformName === "zhs" ? "智慧树" : "未知"), 1)
                    ]),
                    _: 1
                  }, 8, ["type"])
                ]),
                vue.createVNode(_sfc_main$2, {
                  onToggleZoom: _cache[0] || (_cache[0] = ($event) => vue.unref(configStore).isMinus = $event)
                })
              ], 32)
            ]),
            default: vue.withCtx(() => [
              vue.withDirectives(vue.createVNode(_sfc_main$3, {
                onCustomEvent: _cache[1] || (_cache[1] = (newValue) => isShow.value = newValue)
              }, null, 512), [
                [vue.vShow, !vue.unref(configStore).isMinus]
              ]),
              vue.withDirectives(vue.createElementVNode("div", _hoisted_3, [
                vue.createVNode(_component_el_text, {
                  type: "info",
                  size: "small"
                }, {
                  default: vue.withCtx(() => _cache[2] || (_cache[2] = [
                    vue.createTextVNode("已最小化，点击上方按钮恢复")
                  ])),
                  _: 1
                }),
                vue.createVNode(_component_el_divider, {
                  "border-style": "dashed",
                  style: { "margin": "0" }
                })
              ], 512), [
                [vue.vShow, vue.unref(configStore).isMinus]
              ])
            ]),
            _: 1
          })
        ], 4)), [
          [vue.vShow, isShow.value]
        ]);
      };
    }
  });
  const _sfc_main =  vue.defineComponent({
    __name: "App",
    setup(__props) {
      const configStore = useConfigStore();
      const url2 = window.location.href;
      if (url2.includes("chaoxing") || url2.includes("xuexitong"))
        configStore.platformName = "cx";  
      else if (url2.includes("zhihuishu"))
        configStore.platformName = "zhs";
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createBlock(_sfc_main$1);
      };
    }
  });
  const cssLoader = (e) => {
    const t = GM_getResourceText(e);
    return GM_addStyle(t), t;
  };
  cssLoader("ElementPlus");
  const layoutCss = LAYOUT_CSS;
  const hookWebpack = () => {
    let originCall = _unsafeWindow.Function.prototype.call;
    _unsafeWindow.Function.prototype.call = function(...args) {
      var _a, _b;
      const result = originCall.apply(this, args);
      if (((_b = (_a = args[0]) == null ? void 0 : _a.a) == null ? void 0 : _b.version) === "2.5.0") {
        const install = args[1].exports.a.install;
        args[1].exports.a.install = function(...installArgs) {
          installArgs[0].mixin({
            mounted: function() {
              this.$el["__Ivue__"] = this;
            }
          });
          return install.apply(this, installArgs);
        };
        return result;
      }
      return result;
    };
  };
  const url = _unsafeWindow.location.href;
  
  if (window.self === window.top) {
    window.addEventListener('message', (event) => {
      if (event.data?.source === 'chaoxing-helper-iframe' && event.data.action === 'closePanel') {
        const root = document.getElementById('chaoxing-helper-root');
        if (root) root.style.display = 'none';
      }
    });
  }
  if (url.includes("zhihuishu.com")) {
    hookWebpack();
    hookError();
  }
  const timer = setInterval(() => {
    if (document.readyState === "complete") {
      clearInterval(timer);
      
      const app = vue.createApp(_sfc_main);
      const pinia$1 = pinia.createPinia();
      app.use(pinia$1);
      app.use(ElementPlus);
      app.mount(
        (() => {
          const shadow_root = document.createElement("div");
          shadow_root.id = "chaoxing-helper-root";
          const app2 = document.createElement("div");
          document.body.append(shadow_root);
          const shadow = shadow_root.attachShadow({ mode: "open" });
          shadow.appendChild(app2);
          
          
          const scriptHandler = _GM_info?.scriptHandler || '';
          const isScriptCat = scriptHandler === 'ScriptCat' || scriptHandler.includes('ScriptCat');
          
          console.log(`[学习通助手] 脚本管理器: ${scriptHandler || '未知'}, 样式模式: ${isScriptCat ? 'adoptedStyleSheets' : 'style标签'}`);
          
          const eleStyle = _GM_getResourceText("ElementPlusStyle") || "";
          
          if (isScriptCat) {
            
            const sheet = new CSSStyleSheet();
            const sheet1 = new CSSStyleSheet();
            sheet.replace(eleStyle);
            sheet1.replace(layoutCss);
            shadow.adoptedStyleSheets = [sheet, sheet1];
          } else {
            
            const styleEl = document.createElement("style");
            styleEl.textContent = eleStyle;
            shadow.appendChild(styleEl);
            const styleEl2 = document.createElement("style");
            styleEl2.textContent = layoutCss;
            shadow.appendChild(styleEl2);
          }
          
          return app2;
        })()
      );
      
      setTimeout(() => {
        checkServerNotice();
      }, 500);
    }
  }, 100);

})(Vue, Pinia, rxjs, md5, ElementPlus);