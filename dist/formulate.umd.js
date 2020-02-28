!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports,require("is-url"),require("nanoid/non-secure"),require("is-plain-object")):"function"==typeof define&&define.amd?define(["exports","is-url","nanoid/non-secure","is-plain-object"],e):e((t=t||self).Formulate={},t.isUrl,t.nanoid,t.isPlainObject)}(this,(function(t,e,n,r){"use strict";e=e&&e.hasOwnProperty("default")?e.default:e,n=n&&n.hasOwnProperty("default")?n.default:n,r=r&&r.hasOwnProperty("default")?r.default:r;var o={text:{classification:"text",component:"FormulateInputText"},email:{classification:"text",component:"FormulateInputText"},number:{classification:"text",component:"FormulateInputText"},color:{classification:"text",component:"FormulateInputText"},date:{classification:"text",component:"FormulateInputText"},hidden:{classification:"text",component:"FormulateInputText"},month:{classification:"text",component:"FormulateInputText"},password:{classification:"text",component:"FormulateInputText"},search:{classification:"text",component:"FormulateInputText"},tel:{classification:"text",component:"FormulateInputText"},time:{classification:"text",component:"FormulateInputText"},url:{classification:"text",component:"FormulateInputText"},week:{classification:"text",component:"FormulateInputText"},"datetime-local":{classification:"text",component:"FormulateInputText"},range:{classification:"slider",component:"FormulateInputSlider"},textarea:{classification:"textarea",component:"FormulateInputTextArea"},checkbox:{classification:"box",component:"FormulateInputBox"},radio:{classification:"box",component:"FormulateInputBox"},submit:{classification:"button",component:"FormulateInputButton"},button:{classification:"button",component:"FormulateInputButton"},select:{classification:"select",component:"FormulateInputSelect"},file:{classification:"file",component:"FormulateInputFile"},image:{classification:"file",component:"FormulateInputFile"}},i=function(t,e,n){this.input=t,this.fileList=t.files,this.files=[],this.options=n,this.addFileList(this.fileList),this.context=e};function a(t,e){var n={};for(var r in t)n[r]=e(r,t[r]);return n}function s(t,e){if(t===e)return!0;if(!t||!e)return!1;var n=Object.keys(t),r=Object.keys(e),o=n.length;if(r.length!==o)return!1;for(var i=0;i<o;i++){var a=n[i];if(t[a]!==e[a])return!1}return!0}function l(t){return t?"string"==typeof t?[t]:Array.isArray(t)?t:"object"==typeof t?Object.values(t):[]:[]}function u(t){return"string"==typeof t?t[0].toUpperCase()+t.substr(1):t}function c(t,e){return"string"==typeof t?c(t.split("|"),e):Array.isArray(t)?t.map((function(t){return function(t,e){if("function"==typeof t)return[t,[]];if(Array.isArray(t)&&t.length){if("string"==typeof(t=t.map((function(t){return t})))[0]&&e.hasOwnProperty(t[0]))return[e[t.shift()],t];if("function"==typeof t[0])return[t.shift(),t]}if("string"==typeof t){var n=t.split(":"),r=n.shift();if(e.hasOwnProperty(r))return[e[r],n.length?n.join(":").split(","):[]];throw new Error("Unknown validation rule "+t)}return!1}(t,e)})).filter((function(t){return!!t})):[]}function d(t){switch(typeof t){case"symbol":case"number":case"string":case"boolean":case"undefined":return!0;default:return null===t}}i.prototype.addFileList=function(t){for(var e=this,r=function(r){var o=t[r],i=n();e.files.push({progress:!1,error:!1,complete:!1,justFinished:!1,name:o.name||"file-upload",file:o,uuid:i,path:!1,removeFile:function(){this.removeFile(i)}.bind(e),previewData:!1})},o=0;o<t.length;o++)r(o)},i.prototype.hasUploader=function(){return!!this.context.uploader},i.prototype.uploaderIsAxios=function(){return!(!this.hasUploader||"function"!=typeof this.hasUploader.request||"function"!=typeof this.hasUploader.get||"function"!=typeof this.hasUploader.delete||"function"!=typeof this.hasUploader.post)},i.prototype.getUploader=function(){for(var t,e=[],n=arguments.length;n--;)e[n]=arguments[n];if(this.uploaderIsAxios()){var r=new FormData;return r.append(this.context.name||"file",e[0]),this.uploader.post(this.context.uploadUrl,r,{headers:{"Content-Type":"multipart/form-data"},onUploadProgress:function(t){e[1](Math.round(100*t.loaded/t.total))}}).catch((function(t){return e[2](t)}))}return(t=this.context).uploader.apply(t,e)},i.prototype.upload=function(){var t=this;return new Promise((function(e,n){if(!t.hasUploader)return n(new Error("No uploader has been defined"));Promise.all(t.files.map((function(e){return e.path?Promise.resolve(e.path):t.getUploader(e.file,(function(n){e.progress=n,n>=100&&(e.complete||(e.justFinished=!0,setTimeout((function(){e.justFinished=!1}),t.options.uploadJustCompleteDuration)),e.complete=!0)}),(function(t){e.progress=0,e.error=t,e.complete=!0}),t.options)}))).then((function(t){return e(t)})).catch((function(t){throw new Error(t)}))}))},i.prototype.removeFile=function(t){if(this.files=this.files.filter((function(e){return e.uuid!==t})),window){var e=new DataTransfer;this.files.map((function(t){return e.items.add(t.file)})),this.fileList=e.files,this.input.files=this.fileList}},i.prototype.loadPreviews=function(){this.files.map((function(t){if(!t.previewData&&window&&window.FileReader&&/^image\//.test(t.file.type)){var e=new FileReader;e.onload=function(e){return Object.assign(t,{previewData:e.target.result})},e.readAsDataURL(t.file)}}))},i.prototype.getFileList=function(){return this.fileList},i.prototype.getFiles=function(){return this.files},i.prototype.toString=function(){return"FileUpload("+(this.files.length?this.files.length+" files":"empty")+")"};var p={accepted:function(t){var e=t.value;return Promise.resolve(["yes","on","1",1,!0,"true"].includes(e))},after:function(t,e){var n=t.value;void 0===e&&(e=!1);var r=Date.parse(e||new Date),o=Date.parse(n);return Promise.resolve(!isNaN(o)&&o>r)},alpha:function(t,e){var n=t.value;void 0===e&&(e="default");var r={default:/^[a-zA-ZÀ-ÖØ-öø-ÿ]+$/,latin:/^[a-zA-Z]+$/},o=r.hasOwnProperty(e)?e:"default";return Promise.resolve(r[o].test(n))},alphanumeric:function(t,e){var n=t.value;void 0===e&&(e="default");var r={default:/^[a-zA-Z0-9À-ÖØ-öø-ÿ]+$/,latin:/^[a-zA-Z0-9]+$/},o=r.hasOwnProperty(e)?e:"default";return Promise.resolve(r[o].test(n))},before:function(t,e){var n=t.value;void 0===e&&(e=!1);var r=Date.parse(e||new Date),o=Date.parse(n);return Promise.resolve(!isNaN(o)&&o<r)},between:function(t,e,n){var r=t.value;return void 0===e&&(e=0),void 0===n&&(n=10),Promise.resolve(null!==e&&null!==n&&!isNaN(e)&&!isNaN(n)&&(e=Number(e),n=Number(n),isNaN(r)?"string"==typeof r&&r.length>e&&r.length<n:(r=Number(r))>e&&r<n))},confirm:function(t,e){var n,r,o=t.value,i=t.getFormValues,a=t.name;return Promise.resolve((n=i(),(r=e)||(r=/_confirm$/.test(a)?a.substr(0,a.length-8):a+"_confirm"),n[r]===o))},date:function(t,e){var n=t.value;return void 0===e&&(e=!1),Promise.resolve(e&&"string"==typeof e?function(t){var e="^"+t.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")+"$",n={MM:"(0[1-9]|1[012])",M:"([1-9]|1[012])",DD:"([012][1-9]|3[01])",D:"([012]?[1-9]|3[01])",YYYY:"\\d{4}",YY:"\\d{2}"};return new RegExp(Object.keys(n).reduce((function(t,e){return t.replace(e,n[e])}),e))}(e).test(n):!isNaN(Date.parse(n)))},email:function(t){var e=t.value;return Promise.resolve(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(e))},in:function(t){for(var e=t.value,n=[],r=arguments.length-1;r-- >0;)n[r]=arguments[r+1];return Promise.resolve(void 0!==n.find((function(t){return"object"==typeof t?s(t,e):t===e})))},matches:function(t){for(var e=t.value,n=[],r=arguments.length-1;r-- >0;)n[r]=arguments[r+1];return Promise.resolve(!!n.find((function(t){return t instanceof RegExp?t.test(e):t===e})))},max:function(t,e,n){var r=t.value;return void 0===e&&(e=10),Promise.resolve(Array.isArray(r)?(e=isNaN(e)?e:Number(e),r.length<=e):!isNaN(r)&&"length"!==n||"value"===n?(r=isNaN(r)?r:Number(r))<=e:("string"==typeof r||"length"===n)&&(r=isNaN(r)?r:r.toString()).length<=e)},mime:function(t){for(var e=t.value,n=[],r=arguments.length-1;r-- >0;)n[r]=arguments[r+1];return Promise.resolve(function(){if(e instanceof i)for(var t=e.getFileList(),r=0;r<t.length;r++){var o=t[r];if(!n.includes(o.type))return!1}return!0}())},min:function(t,e,n){var r=t.value;return void 0===e&&(e=1),Promise.resolve(Array.isArray(r)?(e=isNaN(e)?e:Number(e),r.length>=e):!isNaN(r)&&"length"!==n||"value"===n?(r=isNaN(r)?r:Number(r))>=e:("string"==typeof r||"length"===n)&&(r=isNaN(r)?r:r.toString()).length>=e)},not:function(t){for(var e=t.value,n=[],r=arguments.length-1;r-- >0;)n[r]=arguments[r+1];return Promise.resolve(void 0===n.find((function(t){return"object"==typeof t?s(t,e):t===e})))},number:function(t){var e=t.value;return Promise.resolve(!isNaN(e))},required:function(t,e){var n=t.value;return void 0===e&&(e=!0),Promise.resolve(!(e&&!["no","false"].includes(e)&&(Array.isArray(n)?!n.length:"string"==typeof n?!n:!("object"!=typeof n||n&&Object.keys(n).length))))},url:function(t){var n=t.value;return Promise.resolve(e(n))}},f={accepted:function(t){return"Please accept the "+t.name+"."},after:function(t){var e=t.name,n=t.args;return Array.isArray(n)&&n.length?u(e)+" must be after "+n[0]+".":u(e)+" must be a later date."},alpha:function(t){return u(t.name)+" can only contain alphabetical characters."},alphanumeric:function(t){return u(t.name)+" can only contain letters and numbers."},before:function(t){var e=t.name,n=t.args;return Array.isArray(n)&&n.length?u(e)+" must be before "+n[0]+".":u(e)+" must be an earlier date."},between:function(t){var e=t.name,n=t.value,r=t.args;return isNaN(n)?u(e)+" must be between "+r[0]+" and "+r[1]+" characters long.":u(e)+" must be between "+r[0]+" and "+r[1]+"."},confirm:function(t){var e=t.name;t.args;return u(e)+" does not match."},date:function(t){var e=t.name,n=t.args;return Array.isArray(n)&&n.length?u(e)+" is not a valid, please use the format "+n[0]:u(e)+" is not a valid date."},default:function(t){t.name;return"This field isn’t valid."},email:function(t){t.name;var e=t.value;return e?"“"+e+"” is not a valid email address.":"Please enter a valid email address."},in:function(t){var e=t.name,n=t.value;return"string"==typeof n&&n?"“"+u(n)+"” is not an allowed "+e+".":"This is not an allowed "+e+"."},matches:function(t){return u(t.name)+" is not an allowed value."},max:function(t){var e=t.name,n=t.value,r=t.args;if(Array.isArray(n))return"You may only select "+r[0]+" "+e+".";var o=!(!Array.isArray(r)||!r[1])&&r[1];return!isNaN(n)&&"length"!==o||"value"===o?u(e)+" must be less than "+r[0]+".":u(e)+" must be less than "+r[0]+" characters long."},mime:function(t){var e=t.name,n=t.args;return u(e)+" must be of the the type: "+(n[0]||"No file formats allowed.")},min:function(t){var e=t.name,n=t.value,r=t.args;if(Array.isArray(n))return"You must select at least "+r[0]+" "+e+".";var o=!(!Array.isArray(r)||!r[1])&&r[1];return!isNaN(n)&&"length"!==o||"value"===o?u(e)+" must be more than "+r[0]+".":u(e)+" must be more than "+r[0]+" characters long."},not:function(t){var e=t.name;return"“"+t.value+"” is not an allowed "+e+"."},number:function(t){return u(t.name)+" must be a number."},required:function(t){return u(t.name)+" is required."},url:function(t){t.name;return"Please include a valid url."}};function m(t,e,n,r){return new Promise((function(n,o){var i=(r.fauxUploaderDuration||2e3)*(.5+Math.random()),a=performance.now(),s=function(){return setTimeout((function(){var r=performance.now()-a,o=Math.min(100,Math.round(r/i*100));if(e(o),o>=100)return n({url:"http://via.placeholder.com/350x150.png",name:t.name});s()}),20)};s()}))}var h={context:function(){return x.call(this,Object.assign({},{type:this.type,value:this.value,name:this.nameOrFallback,classification:this.classification,component:this.component,id:this.id||this.defaultId,hasLabel:this.label&&"button"!==this.classification,label:this.label,labelPosition:this.logicalLabelPosition,attributes:this.elementAttributes,blurHandler:y.bind(this),imageBehavior:this.imageBehavior,uploadUrl:this.uploadUrl,uploader:this.uploader||this.$formulate.getUploader(),uploadBehavior:this.uploadBehavior,preventWindowDrops:this.preventWindowDrops,hasValidationErrors:this.hasValidationErrors},this.typeContext))},nameOrFallback:function(){if(!0===this.name&&"button"!==this.classification)return this.type+"_"+this.elementAttributes.id;if(!1===this.name||"button"===this.classification&&!0===this.name)return!1;return this.name},typeContext:function(){var t=this;switch(this.classification){case"select":return{options:v.call(this,this.options),optionGroups:!!this.optionGroups&&a(this.optionGroups,(function(e,n){return v.call(t,n)})),placeholder:this.$attrs.placeholder||!1};case"slider":return{showValue:!!this.showValue};default:return this.options?{options:v.call(this,this.options)}:{}}},elementAttributes:function(){var t=Object.assign({},this.localAttributes);this.id?t.id=this.id:t.id=this.defaultId;return t},logicalLabelPosition:function(){if(this.labelPosition)return this.labelPosition;switch(this.classification){case"box":return"after";default:return"before"}},isVmodeled:function(){return!!(this.$options.propsData.hasOwnProperty("formulateValue")&&this._events&&Array.isArray(this._events.input)&&this._events.input.length)},mergedErrors:function(){return l(this.errors).concat(l(this.error)).concat(l(this.validationErrors)).reduce((function(t,e){return t.includes(e)?t:t.concat(e)}),[])},hasErrors:function(){return!!this.mergedErrors.length},showFieldErrors:function(){if(this.showErrors||this.formShouldShowErrors)return!0;return this.behavioralErrorVisibility},mergedValidationName:function(){if(this.validationName)return this.validationName;if("string"==typeof this.name)return this.name;if(this.label)return this.label;return this.type}};function v(t){if(!Array.isArray(t)&&t&&"object"==typeof t){var e=[];for(var r in t)e.push({value:r,label:t[r],id:this.elementAttributes.id+"_"+r});return e}return Array.isArray(t)&&!t.length?[{value:this.value,label:this.label||this.name,id:this.context.id||n(9)}]:t}function y(){"blur"===this.errorBehavior&&(this.behavioralErrorVisibility=!0)}function x(t){return Object.defineProperty(t,"model",{get:b.bind(this),set:g.bind(this)})}function b(){var t=this.isVmodeled?"formulateValue":"internalModelProxy";return"checkbox"===this.type&&!Array.isArray(this[t])&&this.options?[]:this[t]?this[t]:""}function g(t){this.internalModelProxy=t,this.$emit("input",t),this.context.name&&"function"==typeof this.formulateFormSetter&&this.formulateFormSetter(this.context.name,t)}function w(t,e,n,r,o,i,a,s,l,u){"boolean"!=typeof a&&(l=s,s=a,a=!1);var c,d="function"==typeof n?n.options:n;if(t&&t.render&&(d.render=t.render,d.staticRenderFns=t.staticRenderFns,d._compiled=!0,o&&(d.functional=!0)),r&&(d._scopeId=r),i?(c=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),e&&e.call(this,l(t)),t&&t._registeredComponents&&t._registeredComponents.add(i)},d._ssrRegister=c):e&&(c=a?function(t){e.call(this,u(t,this.$root.$options.shadowRoot))}:function(t){e.call(this,s(t))}),c)if(d.functional){var p=d.render;d.render=function(t,e){return c.call(e),p(t,e)}}else{var f=d.beforeCreate;d.beforeCreate=f?[].concat(f,c):[c]}return n}var F={name:"FormulateInput",inheritAttrs:!1,inject:{formulateFormSetter:{default:void 0},formulateFormRegister:{default:void 0},getFormValues:{default:function(){return function(){return{}}}}},model:{prop:"formulateValue",event:"input"},props:{type:{type:String,default:"text"},name:{type:[String,Boolean],default:!0},formulateValue:{default:""},value:{default:!1},options:{type:[Object,Array,Boolean],default:!1},optionGroups:{type:[Object,Boolean],default:!1},id:{type:[String,Boolean,Number],default:!1},label:{type:[String,Boolean],default:!1},labelPosition:{type:[String,Boolean],default:!1},help:{type:[String,Boolean],default:!1},debug:{type:Boolean,default:!1},errors:{type:[String,Array,Boolean],default:!1},validation:{type:[String,Boolean,Array],default:!1},validationName:{type:[String,Boolean],default:!1},error:{type:[String,Boolean],default:!1},errorBehavior:{type:String,default:"blur",validator:function(t){return["blur","live"].includes(t)}},showErrors:{type:Boolean,default:!1},imageBehavior:{type:String,default:"preview"},uploadUrl:{type:[String,Boolean],default:!1},uploader:{type:[Function,Object,Boolean],default:!1},uploadBehavior:{type:String,default:"live"},preventWindowDrops:{type:Boolean,default:!0},showValue:{type:[String,Boolean],default:!1},validationMessages:{type:Object,default:function(){return{}}},validationRules:{type:Object,default:function(){return{}}}},data:function(){return{defaultId:n(9),localAttributes:{},internalModelProxy:this.formulateValue||this.value,behavioralErrorVisibility:"live"===this.errorBehavior,formShouldShowErrors:!1,validationErrors:[],pendingValidation:Promise.resolve()}},computed:Object.assign({},h,{classification:function(){var t=this.$formulate.classify(this.type);return"box"===t&&this.options?"group":t},component:function(){return"group"===this.classification?"FormulateInputGroup":this.$formulate.component(this.type)}}),watch:{$attrs:{handler:function(t){this.updateLocalAttributes(t)},deep:!0},internalModelProxy:function(t,e){this.performValidation(),this.isVmodeled||s(t,e)||(this.context.model=t)},formulateValue:function(t,e){this.isVmodeled&&!s(t,e)&&(this.context.model=t)}},created:function(){this.formulateFormRegister&&"function"==typeof this.formulateFormRegister&&this.formulateFormRegister(this.nameOrFallback,this),this.updateLocalAttributes(this.$attrs),this.performValidation()},methods:{updateLocalAttributes:function(t){s(t,this.localAttributes)||(this.localAttributes=t)},performValidation:function(){var t=this,e=c(this.validation,this.$formulate.rules(this.validationRules));return this.pendingValidation=Promise.all(e.map((function(e){var n=e[0],r=e[1],o=n.apply(void 0,[{value:t.context.model,getFormValues:t.getFormValues.bind(t),name:t.context.name}].concat(r));return(o=o instanceof Promise?o:Promise.resolve(o)).then((function(e){return!e&&t.getValidationMessage(n,r)}))}))).then((function(t){return t.filter((function(t){return t}))})).then((function(e){t.validationErrors=e})),this.pendingValidation},getValidationMessage:function(t,e){return this.getValidationFunction(t)({args:e,name:this.mergedValidationName,value:this.context.model,vm:this,formValues:this.getFormValues()})},getValidationFunction:function(t){var e=this,n="_"===t.name.substr(0,1)?t.name.substr(1):t.name;if(this.validationMessages&&"object"==typeof this.validationMessages&&void 0!==this.validationMessages[n])switch(typeof this.validationMessages[n]){case"function":return this.validationMessages[n];case"string":return function(){return e.validationMessages[n]}}return function(n){return e.$formulate.validationMessage(t.name,n)}},hasValidationErrors:function(){var t=this;return new Promise((function(e){t.$nextTick((function(){t.pendingValidation.then((function(){return e(!!t.validationErrors.length)}))}))}))}}},_=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"formulate-input",attrs:{"data-classification":t.classification,"data-has-errors":t.hasErrors,"data-is-showing-errors":t.hasErrors&&t.showFieldErrors,"data-type":t.type}},[n("div",{staticClass:"formulate-input-wrapper"},[t.context.hasLabel&&"before"===t.context.labelPosition?t._t("label",[n("label",{staticClass:"formulate-input-label formulate-input-label--before",attrs:{for:t.context.attributes.id},domProps:{textContent:t._s(t.context.label)}})],null,t.context):t._e(),t._v(" "),t._t("element",[n(t.context.component,{tag:"component",attrs:{context:t.context}},[t._t("default",null,null,t.context)],2)],null,t.context),t._v(" "),t.context.hasLabel&&"after"===t.context.labelPosition?t._t("label",[n("label",{staticClass:"formulate-input-label formulate-input-label--after",attrs:{for:t.context.attributes.id},domProps:{textContent:t._s(t.context.label)}})],null,t.context.label):t._e()],2),t._v(" "),t.help?n("div",{staticClass:"formulate-input-help",domProps:{textContent:t._s(t.help)}}):t._e(),t._v(" "),t.showFieldErrors?n("FormulateInputErrors",{attrs:{errors:t.mergedErrors}}):t._e()],1)};_._withStripped=!0;var P=w({render:_,staticRenderFns:[]},void 0,F,void 0,!1,void 0,!1,void 0,void 0,void 0),A=function(t){this.form=t};A.prototype.hasValidationErrors=function(){return this.form.hasValidationErrors()},A.prototype.values=function(){var t=this;return new Promise((function(e,n){var r=[],o=function t(e){var n={};for(var r in e)e[r]instanceof i||d(e[r])?n[r]=e[r]:n[r]=t(e[r]);return n}(t.form.internalFormModelProxy);for(var a in o)"object"==typeof t.form.internalFormModelProxy[a]&&t.form.internalFormModelProxy[a]instanceof i&&r.push(t.form.internalFormModelProxy[a].upload());Promise.all(r).then((function(){return e(o)})).catch((function(t){return n(t)}))}))};var V={provide:function(){return{formulateFormSetter:this.setFieldValue,formulateFormRegister:this.register,getFormValues:this.getFormValues}},name:"FormulateForm",model:{prop:"formulateValue",event:"input"},props:{name:{type:[String,Boolean],default:!1},formulateValue:{type:Object,default:function(){return{}}}},data:function(){return{registry:{},internalFormModelProxy:{},formShouldShowErrors:!1}},computed:{hasFormulateValue:function(){return this.formulateValue&&"object"==typeof this.formulateValue},isVmodeled:function(){return!!(this.$options.propsData.hasOwnProperty("formulateValue")&&this._events&&Array.isArray(this._events.input)&&this._events.input.length)}},watch:{formulateValue:{handler:function(t,e){if(this.isVmodeled&&t&&"object"==typeof t)for(var n in t)!this.registry.hasOwnProperty(n)||s(t[n],this.internalFormModelProxy[n])||s(t[n],this.registry[n].internalModelProxy[n])||(this.setFieldValue(n,t[n]),this.registry[n].context.model=t[n])},deep:!0,immediate:!1}},created:function(){this.$options.propsData.hasOwnProperty("formulateValue")&&(this.internalFormModelProxy=Object.assign({},this.formulateValue))},methods:{setFieldValue:function(t,e){var n;Object.assign(this.internalFormModelProxy,((n={})[t]=e,n)),this.$emit("input",Object.assign({},this.internalFormModelProxy))},register:function(t,e){this.registry[t]=e;var n=Object.prototype.hasOwnProperty.call(e.$options.propsData,"formulateValue"),r=Object.prototype.hasOwnProperty.call(e.$options.propsData,"value");!n&&this.hasFormulateValue&&this.formulateValue[t]?e.context.model=this.formulateValue[t]:!n&&!r||s(e.internalModelProxy,this.formulateValue[t])||this.setFieldValue(t,e.internalModelProxy)},formSubmitted:function(){var t=this;this.showErrors();var e=new A(this);return this.$emit("submit-raw",e),e.hasValidationErrors().then((function(t){return t?void 0:e.values()})).then((function(e){if(void 0!==e)return t.$emit("submit",e),e}))},showErrors:function(){for(var t in this.registry)this.registry[t].formShouldShowErrors=!0},getFormValues:function(){return this.internalFormModelProxy},hasValidationErrors:function(){var t=[];for(var e in this.registry)"function"==typeof this.registry[e].hasValidationErrors&&t.push(this.registry[e].hasValidationErrors());return Promise.all(t).then((function(t){return!!t.find((function(t){return t}))}))}}},N=function(){var t=this,e=t.$createElement;return(t._self._c||e)("form",{on:{submit:function(e){return e.preventDefault(),t.formSubmitted(e)}}},[t._t("default")],2)};N._withStripped=!0;var $=w({render:N,staticRenderFns:[]},void 0,V,void 0,!1,void 0,!1,void 0,void 0,void 0),E={props:{errors:{type:[Boolean,Array],required:!0}}},O=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.errors.length?n("ul",{staticClass:"formulate-input-errors"},t._l(t.errors,(function(e){return n("li",{key:e,staticClass:"formulate-input-error",domProps:{innerHTML:t._s(e)}})})),0):t._e()};O._withStripped=!0;var S=w({render:O,staticRenderFns:[]},void 0,E,void 0,!1,void 0,!1,void 0,void 0,void 0);var I={name:"FormulateInputGroup",props:{context:{type:Object,required:!0}},computed:{options:function(){return this.context.options||[]},optionsWithContext:function(){var t=this,e=this.context,n=(e.options,e.labelPosition,e.attributes,e.classification,function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&-1===e.indexOf(r)&&(n[r]=t[r]);return n}(e,["options","labelPosition","attributes","classification"]));return this.options.map((function(e){return t.groupItemContext(n,e)}))}},methods:{groupItemContext:function(){for(var t=[],e=arguments.length;e--;)t[e]=arguments[e];return Object.assign.apply(Object,[{}].concat(t,[{component:"FormulateInput"}]))}}},j=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"formulate-input-group"},t._l(t.optionsWithContext,(function(e){return n(e.component,t._b({key:e.id,tag:"component",staticClass:"formulate-input-group-item",model:{value:t.context.model,callback:function(e){t.$set(t.context,"model",e)},expression:"context.model"}},"component",e,!1))})),1)};j._withStripped=!0;var C=w({render:j,staticRenderFns:[]},void 0,I,void 0,!1,void 0,!1,void 0,void 0,void 0),D={props:{context:{type:Object,required:!0}},computed:{type:function(){return this.context.type},id:function(){return this.context.id},attributes:function(){return this.context.attributes||{}},hasValue:function(){return!!this.context.model}}},k={name:"FormulateInputBox",mixins:[D]},B=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:"formulate-input-element formulate-input-element--"+t.context.type,attrs:{"data-type":t.context.type}},["checkbox"===t.type?n("input",t._b({directives:[{name:"model",rawName:"v-model",value:t.context.model,expression:"context.model"}],attrs:{type:"checkbox"},domProps:{value:t.context.value,checked:Array.isArray(t.context.model)?t._i(t.context.model,t.context.value)>-1:t.context.model},on:{blur:t.context.blurHandler,change:function(e){var n=t.context.model,r=e.target,o=!!r.checked;if(Array.isArray(n)){var i=t.context.value,a=t._i(n,i);r.checked?a<0&&t.$set(t.context,"model",n.concat([i])):a>-1&&t.$set(t.context,"model",n.slice(0,a).concat(n.slice(a+1)))}else t.$set(t.context,"model",o)}}},"input",t.attributes,!1)):"radio"===t.type?n("input",t._b({directives:[{name:"model",rawName:"v-model",value:t.context.model,expression:"context.model"}],attrs:{type:"radio"},domProps:{value:t.context.value,checked:t._q(t.context.model,t.context.value)},on:{blur:t.context.blurHandler,change:function(e){return t.$set(t.context,"model",t.context.value)}}},"input",t.attributes,!1)):n("input",t._b({directives:[{name:"model",rawName:"v-model",value:t.context.model,expression:"context.model"}],attrs:{type:t.type},domProps:{value:t.context.value,value:t.context.model},on:{blur:t.context.blurHandler,input:function(e){e.target.composing||t.$set(t.context,"model",e.target.value)}}},"input",t.attributes,!1)),t._v(" "),n("label",{staticClass:"formulate-input-element-decorator",attrs:{for:t.id}})])};B._withStripped=!0;var M=w({render:B,staticRenderFns:[]},void 0,k,void 0,!1,void 0,!1,void 0,void 0,void 0),T={name:"FormulateInputText",mixins:[D]},U=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:"formulate-input-element formulate-input-element--"+t.context.type,attrs:{"data-type":t.context.type}},["checkbox"===t.type?n("input",t._b({directives:[{name:"model",rawName:"v-model",value:t.context.model,expression:"context.model"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.context.model)?t._i(t.context.model,null)>-1:t.context.model},on:{blur:t.context.blurHandler,change:function(e){var n=t.context.model,r=e.target,o=!!r.checked;if(Array.isArray(n)){var i=t._i(n,null);r.checked?i<0&&t.$set(t.context,"model",n.concat([null])):i>-1&&t.$set(t.context,"model",n.slice(0,i).concat(n.slice(i+1)))}else t.$set(t.context,"model",o)}}},"input",t.attributes,!1)):"radio"===t.type?n("input",t._b({directives:[{name:"model",rawName:"v-model",value:t.context.model,expression:"context.model"}],attrs:{type:"radio"},domProps:{checked:t._q(t.context.model,null)},on:{blur:t.context.blurHandler,change:function(e){return t.$set(t.context,"model",null)}}},"input",t.attributes,!1)):n("input",t._b({directives:[{name:"model",rawName:"v-model",value:t.context.model,expression:"context.model"}],attrs:{type:t.type},domProps:{value:t.context.model},on:{blur:t.context.blurHandler,input:function(e){e.target.composing||t.$set(t.context,"model",e.target.value)}}},"input",t.attributes,!1))])};U._withStripped=!0;var R=w({render:U,staticRenderFns:[]},void 0,T,void 0,!1,void 0,!1,void 0,void 0,void 0),L={name:"FormulateFiles",props:{files:{type:i,required:!0},imagePreview:{type:Boolean,default:!1}},computed:{fileUploads:function(){return this.files.files||[]}},watch:{files:function(){this.imagePreview&&this.files.loadPreviews()}},mounted:function(){this.imagePreview&&this.files.loadPreviews()}},q=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.fileUploads.length?n("ul",{staticClass:"formulate-files"},t._l(t.fileUploads,(function(e){return n("li",{key:e.uuid,attrs:{"data-has-error":!!e.error,"data-has-preview":t.imagePreview&&e.previewData}},[n("div",{staticClass:"formulate-file"},[t.imagePreview&&e.previewData?n("div",{staticClass:"formulate-file-image-preview"},[n("img",{attrs:{src:e.previewData}})]):t._e(),t._v(" "),n("div",{staticClass:"formualte-file-name",domProps:{textContent:t._s(e.name)}}),t._v(" "),!1!==e.progress?n("div",{staticClass:"formulate-file-progress",attrs:{"data-just-finished":e.justFinished,"data-is-finished":!e.justFinished&&e.complete}},[n("div",{staticClass:"formulate-file-progress-inner",style:{width:e.progress+"%"}})]):t._e(),t._v(" "),e.complete&&!e.justFinished||!1===e.progress?n("div",{staticClass:"formulate-file-remove",on:{click:e.removeFile}}):t._e()]),t._v(" "),e.error?n("div",{staticClass:"formulate-file-upload-error",domProps:{textContent:t._s(e.error)}}):t._e()])})),0):t._e()};q._withStripped=!0;var H={name:"FormulateInputFile",components:{FormulateFiles:w({render:q,staticRenderFns:[]},void 0,L,void 0,!1,void 0,!1,void 0,void 0,void 0)},mixins:[D],data:function(){return{isOver:!1}},computed:{hasFiles:function(){return!!(this.context.model instanceof i&&this.context.model.files.length)}},mounted:function(){window&&this.context.preventWindowDrops&&(window.addEventListener("dragover",this.preventDefault),window.addEventListener("drop",this.preventDefault))},destroyed:function(){window&&this.context.preventWindowDrops&&(window.removeEventListener("dragover",this.preventDefault),window.removeEventListener("drop",this.preventDefault))},methods:{preventDefault:function(t){"INPUT"!==t.target.tagName&&"file"!==t.target.getAttribute("type")&&(t=t||event).preventDefault()},handleFile:function(){this.isOver=!1;var t=this.$refs.file;t.files.length&&(this.context.model=this.$formulate.createUpload(t,this.context)),this.attemptImmediateUpload()},attemptImmediateUpload:function(){var t=this;"live"===this.context.uploadBehavior&&this.context.model instanceof i&&this.context.hasValidationErrors().then((function(e){e||t.context.model.upload()}))},handleDragOver:function(t){t.preventDefault(),this.isOver=!0},handleDragLeave:function(t){t.preventDefault(),this.isOver=!1}}},G=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:"formulate-input-element formulate-input-element--"+t.context.type,attrs:{"data-type":t.context.type,"data-has-files":t.hasFiles}},[n("div",{staticClass:"formulate-input-upload-area",attrs:{"data-has-files":t.hasFiles}},[n("input",t._b({ref:"file",attrs:{"data-is-drag-hover":t.isOver,type:"file"},on:{blur:t.context.blurHandler,change:t.handleFile,dragover:t.handleDragOver,dragleave:t.handleDragLeave}},"input",t.attributes,!1)),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:!t.hasFiles,expression:"!hasFiles"}],staticClass:"formulate-input-upload-area-mask"}),t._v(" "),t.hasFiles?n("FormulateFiles",{attrs:{files:t.context.model,"image-preview":"image"===t.context.type&&"preview"===t.context.imageBehavior}}):t._e()],1)])};G._withStripped=!0;var Y=w({render:G,staticRenderFns:[]},void 0,H,void 0,!1,void 0,!1,void 0,void 0,void 0),W={name:"FormulateInputButton",mixins:[D]},z=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:"formulate-input-element formulate-input-element--"+t.context.type,attrs:{"data-type":t.context.type}},[n("button",t._b({attrs:{type:t.type}},"button",t.attributes,!1),[t._t("default",[n("span",{class:"formulate-input-element--"+t.context.type+"--label",domProps:{textContent:t._s(t.context.value||t.context.label||t.context.name||"Submit")}})])],2)])};z._withStripped=!0;var Z=w({render:z,staticRenderFns:[]},void 0,W,void 0,!1,void 0,!1,void 0,void 0,void 0),J={name:"FormulateInputSelect",mixins:[D],computed:{options:function(){return this.context.options||{}},optionGroups:function(){return this.context.optionGroups||!1},placeholderSelected:function(){return!(this.hasValue||!this.context.attributes||!this.context.attributes.placeholder)}}},X=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:"formulate-input-element formulate-input-element--"+t.context.type,attrs:{"data-type":t.context.type}},[n("select",t._b({directives:[{name:"model",rawName:"v-model",value:t.context.model,expression:"context.model"}],attrs:{"data-placeholder-selected":t.placeholderSelected},on:{blur:t.context.blurHandler,change:function(e){var n=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.context,"model",e.target.multiple?n:n[0])}}},"select",t.attributes,!1),[t.context.placeholder?n("option",{attrs:{value:"",disabled:""},domProps:{selected:!t.hasValue}},[t._v("\n      "+t._s(t.context.placeholder)+"\n    ")]):t._e(),t._v(" "),t.optionGroups?t._l(t.optionGroups,(function(e,r){return n("optgroup",{key:r,attrs:{label:r}},t._l(e,(function(e){return n("option",t._b({key:e.id,domProps:{value:e.value,textContent:t._s(e.label)}},"option",e.attributes||{},!1))})),0)})):t._l(t.options,(function(e){return n("option",t._b({key:e.id,domProps:{value:e.value,textContent:t._s(e.label)}},"option",e.attributes||{},!1))}))],2)])};X._withStripped=!0;var K=w({render:X,staticRenderFns:[]},void 0,J,void 0,!1,void 0,!1,void 0,void 0,void 0),Q={name:"FormulateInputSlider",mixins:[D]},tt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:"formulate-input-element formulate-input-element--"+t.context.type,attrs:{"data-type":t.context.type}},["checkbox"===t.type?n("input",t._b({directives:[{name:"model",rawName:"v-model",value:t.context.model,expression:"context.model"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.context.model)?t._i(t.context.model,null)>-1:t.context.model},on:{blur:t.context.blurHandler,change:function(e){var n=t.context.model,r=e.target,o=!!r.checked;if(Array.isArray(n)){var i=t._i(n,null);r.checked?i<0&&t.$set(t.context,"model",n.concat([null])):i>-1&&t.$set(t.context,"model",n.slice(0,i).concat(n.slice(i+1)))}else t.$set(t.context,"model",o)}}},"input",t.attributes,!1)):"radio"===t.type?n("input",t._b({directives:[{name:"model",rawName:"v-model",value:t.context.model,expression:"context.model"}],attrs:{type:"radio"},domProps:{checked:t._q(t.context.model,null)},on:{blur:t.context.blurHandler,change:function(e){return t.$set(t.context,"model",null)}}},"input",t.attributes,!1)):n("input",t._b({directives:[{name:"model",rawName:"v-model",value:t.context.model,expression:"context.model"}],attrs:{type:t.type},domProps:{value:t.context.model},on:{blur:t.context.blurHandler,input:function(e){e.target.composing||t.$set(t.context,"model",e.target.value)}}},"input",t.attributes,!1)),t._v(" "),t.context.showValue?n("div",{staticClass:"formulate-input-element-range-value",domProps:{textContent:t._s(t.context.model)}}):t._e()])};tt._withStripped=!0;var et=w({render:tt,staticRenderFns:[]},void 0,Q,void 0,!1,void 0,!1,void 0,void 0,void 0),nt={name:"FormulateInputTextArea",mixins:[D]},rt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"formulate-input-element formulate-input-element--textarea",attrs:{"data-type":"textarea"}},[n("textarea",t._b({directives:[{name:"model",rawName:"v-model",value:t.context.model,expression:"context.model"}],domProps:{value:t.context.model},on:{blur:t.context.blurHandler,input:function(e){e.target.composing||t.$set(t.context,"model",e.target.value)}}},"textarea",t.attributes,!1))])};rt._withStripped=!0;var ot=w({render:rt,staticRenderFns:[]},void 0,nt,void 0,!1,void 0,!1,void 0,void 0,void 0),it=function(){this.options={},this.defaults={components:{FormulateForm:$,FormulateInput:P,FormulateInputErrors:S,FormulateInputBox:M,FormulateInputText:R,FormulateInputFile:Y,FormulateInputGroup:C,FormulateInputButton:Z,FormulateInputSelect:K,FormulateInputSlider:et,FormulateInputTextArea:ot},library:o,rules:p,locale:"en",uploader:m,uploadJustCompleteDuration:1e3,plugins:[],locales:{en:f}}};it.prototype.install=function(t,e){var n=this;for(var r in t.prototype.$formulate=this,this.options=this.merge(this.defaults,e||{}),Array.isArray(this.options.plugins)&&this.options.plugins.length&&this.options.plugins.forEach((function(t){return"function"==typeof t?t(n):null})),this.options.components)t.component(r,this.options.components[r])},it.prototype.extend=function(t){if("object"==typeof t)return this.options=this.merge(this.options,t),this;throw new Error("VueFormulate extend() should be passed an object (was "+typeof t+")")},it.prototype.merge=function(t,e,n){void 0===n&&(n=!0);var o={};for(var i in t)e.hasOwnProperty(i)?r(e[i])&&r(t[i])?o[i]=this.merge(t[i],e[i],n):n&&Array.isArray(t[i])&&Array.isArray(e[i])?o[i]=t[i].concat(e[i]):o[i]=e[i]:o[i]=t[i];for(var a in e)o.hasOwnProperty(a)||(o[a]=e[a]);return o},it.prototype.classify=function(t){return this.options.library.hasOwnProperty(t)?this.options.library[t].classification:"unknown"},it.prototype.component=function(t){return!!this.options.library.hasOwnProperty(t)&&this.options.library[t].component},it.prototype.rules=function(t){return void 0===t&&(t={}),Object.assign({},this.options.rules,t)},it.prototype.validationMessage=function(t,e){var n=this.options.locales[this.options.locale];return n.hasOwnProperty(t)?n[t](e):"_"===t[0]&&n.hasOwnProperty(t.substr(1))?n[t.substr(1)](e):n.hasOwnProperty("default")?n.default(e):"This field does not have a valid value"},it.prototype.getUploader=function(){return this.options.uploader||!1},it.prototype.createUpload=function(t,e){return new i(t,e,this.options)};var at=new it;t.FileUpload=i,t.default=at,Object.defineProperty(t,"__esModule",{value:!0})}));
