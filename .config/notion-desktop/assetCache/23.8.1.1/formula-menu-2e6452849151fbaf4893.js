(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{jAkY:function(e,t,n){"use strict";n.r(t);var o=n("pVnL"),r=n.n(o),i=n("gcR/"),s=n.n(i),a=n("lSNA"),l=n.n(a),d=(n("3bBZ"),n("q1tI")),p=n.n(d),c=n("VOS9"),u=n("LEzx");class m extends u.a{getInitialState(){return{value:"",html:"",query:""}}}var h=m,y=n("wldR"),g=(n("SYor"),n("LvDl")),f=n.n(g),v=n("LeVO"),b=n("rlmE"),S=n("pxbK"),x=n("9OwC"),M=n("Sb6f"),C=n("nFzZ"),T=n("PQqx"),k=n("VyA+"),w=n("zmp8"),I=n("Ng05"),N=(n("UxlC"),n("yZWr"));function F(e,t){if(!e)return"";const n=function e(t,n){if(!t)return;if("conditional"===t.type)return new L.expression.node.ConditionalNode(e(t.condition,n),e(t.true,n),e(t.false,n));if("constant"===t.type)return new L.expression.node.ConstantNode(t.value,t.value_type);if("function"===t.type)return new L.expression.node.FunctionNode(new L.expression.node.SymbolNode(t.name),(t.args||[]).map(t=>e(t,n)));if("operator"===t.type)return new L.expression.node.OperatorNode(t.operator,t.name,(t.args||[]).map(t=>e(t,n)));if("property"===t.type){const e=n[t.id],o=e?e.name:t.name;return new L.expression.node.FunctionNode("prop",[new L.expression.node.ConstantNode(o,"string")])}if("symbol"===t.type)return new L.expression.node.SymbolNode(t.name)}(e,t);if(!n)return"";const o=n.toString({parenthesis:"auto",handler:(e,t)=>{if(e.isOperatorNode&&"not"===e.fn)return"not ".concat(e.args[0].toString(t))}});return o.replace(/\n/g,"\\n").replace(/\t/g,"\\t")}const L=n.n(N).a.create();L.import(n("LPs6")),L.import(n("78Py")),L.import(n("9TFD")),L.import(n("Poiv"));const z=Object(C.k)(x.c,e=>e.value),E=Object(C.k)(x.h,e=>e.apply),O=Object(C.k)(x.e,e=>e.apply);L.import(z,{override:!0}),L.import(E,{override:!0}),L.import(O,{override:!0}),L.config({predictable:!0});n("E9XD");var R=n("qr6c"),D=n.n(R),P=n("qzno");function A(e,t,n){const o=e.replace(/\\n/g,"\n").replace(/\\t/g,"\t");if(""===o.trim())return;let r;try{r=D.a.parse(o)}catch({message:i}){return{type:"error",message:i,size:1}}return function e(t,n,o){if(!t)return;if(t.isAccessorNode||t.isArrayNode||t.isAssignmentNode||t.isBlockNode||t.isFunctionAssignmentNode||t.isIndexNode||t.isObjectNode||t.isRangeNode)return{type:"error",size:1,message:"Invalid syntax: ".concat(t.toString().nodeString)};if(t.isConditionalNode){const r=e(t.condition,n,o),i=e(t.trueExpr,n,o),s=e(t.falseExpr,n,o);if(!r)return;if("error"===r.type)return r;if(i&&"error"===i.type)return i;if(s&&"error"===s.type)return s;if(i&&s)return i.result_type!==s.result_type?{type:"error",size:1,message:"Each branch of a condition must be of the same type: ".concat(t.toString().nodeString)}:{type:"conditional",result_type:i.result_type,condition:r,true:i,false:s}}else{if(t.isConstantNode){const{value:e,valueType:n}=t,o={string:"text",number:"number",boolean:"checkbox"};return n in o?{type:"constant",result_type:o[n],value:e.toString(),value_type:n}:{type:"error",size:1,message:"Illegal constant: ".concat(e,".")}}if(t.isFunctionNode){const{fn:r,args:i}=t;if("prop"===r.name){if(1!==i.length)return{type:"error",size:1,message:"Too many arguments passed to prop()."};const e=i[0];if(!e.isConstantNode||"string"!==e.valueType)return{type:"error",size:1,message:"Invalid property reference: ".concat(e.toString().nodeString)};const t=e.value,r=Object.keys(o).find(e=>{const n=o[e];return Boolean(n&&n.name===t)}),s=r&&o[r];if(!r||!s)return{type:"error",size:1,message:"Property not found: prop('".concat(t,"')")};if("formula"===s.type){const{formula:e}=s;if(!e||!e.result_type)return;return Object(S.a)(e).includes(n)?{type:"error",size:1,message:"Property ".concat(s.name," creates a circular dependency.")}:{type:"property",result_type:Object(S.b)(s),name:t,id:r}}return{type:"property",result_type:Object(S.b)(s),name:t,id:r}}const s=x.f(r.name)||x.g(r.name);if(!s)return{type:"error",size:1,message:"Undefined function: ".concat(r.name)};const a=f.a.compact((i||[]).map(t=>e(t,n,o))),l=W({functionName:r.name,functionArgs:a,signatures:s.signatures,schema:o});return l.error?l.error:{type:"function",result_type:l.value.resultType,name:r.name,args:a}}if(t.isOperatorNode){const{op:r,fn:i,args:s}=t,a=x.g(i);if(!a)return{type:"error",size:1,message:"Undefined operator: ".concat(r)};const l=f.a.compact((s||[]).map(t=>e(t,n,o))),d=W({functionName:i,functionArgs:l,signatures:a.signatures,schema:o});return d.error?d.error:{type:"operator",result_type:d.value.resultType,operator:r,name:i,args:l}}if(t.isParenthesisNode)return e(t.content,n,o);if(t.isSymbolNode){const{name:e}=t;return e in x.c?{type:"symbol",result_type:x.c[e].resultType,name:e}:{type:"error",size:1,message:"Undefined constant: ".concat(e)}}}}(r,t,n)}function W(e){const{functionName:t,functionArgs:n,signatures:o,schema:r}=e;return o.reduce((e,o)=>{if(!e.error)return e;const i=function(e){const{functionName:t,functionArgs:n,signature:o,schema:r}=e,{arity:i,variadic:s}=o;if(s){if(!(n.length>0))return{type:"error",size:1,message:"Too few arguments in function ".concat(t,".")};{const e=f.a.compact(n.map(e=>B({resultType:s,functionArg:e,schema:r})));if(e.length>0)return{...e[0],size:e.length}}}if(i){if(n.length<i.length)return{type:"error",size:1,message:"Too few arguments in function ".concat(t,".")};if(n.length>i.length)return{type:"error",size:1,message:"Too many arguments in function ".concat(t,".")};const e=f.a.compact(n.map((e,t)=>B({resultType:i[t],functionArg:e,schema:r})));if(e.length>0)return{...e[0],size:e.length}}}({functionName:t,functionArgs:n,signature:o,schema:r});return i?e.error.size<i.size?e:{error:i}:{value:o}},{error:{type:"error",size:99,message:"No signatures found for function: ".concat(t)}})}function B(e){const{resultType:t,functionArg:n,schema:o}=e;if("error"===n.type)return n;if(t!==n.result_type){const e=F(n,o);return{type:"error",size:1,message:"Type mismatch: ".concat(e," is not a ").concat(t?P.n[t]:"undefined",".")}}}var _=n("J9+s"),j=n("vl8/");const U=Object(_.defineMessages)({placeholder:{id:"database.formula.placeholder",defaultMessage:"Type a formula"}});class q extends y.a{constructor(...e){super(...e),l()(this,"updateTimer",void 0),l()(this,"storeTypes",{store:h}),l()(this,"handleInputMount",e=>this.input=e),l()(this,"handleInput",e=>{const{target:{textContent:t}}=e;this.updateValue(t),C.h(this.updateTimer)&&(this.updateTimer=window.setTimeout(()=>this.executeUpdate(),q.delay))}),l()(this,"handlePaste",e=>{e.preventDefault();const t=e.clipboardData.getData("text/plain");document.execCommand("insertText",!1,t)}),l()(this,"handleKeyUp",e=>{this.updateSelection()}),l()(this,"handleClick",e=>{this.updateSelection()}),l()(this,"handleKeyDown",e=>{Object(b.a)(this.environment,e,"command+enter")&&(this.handleAccept(),e.stopPropagation())})}insertEntry(e){const{value:t}=this.stores.store.state,{name:n}=e,o=q.getCompletion(e),r=document.getSelection(),i=r.anchorOffset;let s=i,a=r.focusOffset;const l=S.e(t,i);if(l){const[e,r]=l,i=t.slice(e,r).toLowerCase();i!==o.toLowerCase().slice(0,r-e)&&i!==n.toLowerCase().slice(0,r-e)||(s=e,a=r)}if(this.input.focus(),s<a){const e=this.input.firstChild||this.input,t=document.createRange();t.setStart(e,s),t.setEnd(e,a),r.removeAllRanges(),r.addRange(t),document.execCommand("delete",!1)}document.execCommand("insertText",!1,o);const d=(a+o.length)/(this.input&&this.input.textContent&&this.input.textContent.length||0)*this.container.scrollWidth;d>this.container.scrollLeft+this.container.offsetWidth&&(this.container.scrollLeft=d-this.container.offsetWidth)}handleAccept(){this.updateTimer&&(window.clearTimeout(this.updateTimer),this.updateTimer=void 0);const{value:e}=this.stores.store.state;if(""===e.trim())this.props.onSubmit();else{const{formula:t,error:n}=this.updateFormula(e);n||this.props.onSubmit(t)}}willMount(e){super.willMount(e);const{formula:t,schema:n}=e,o=F(t,n);this.updateValue(o)}didMount(){const{device:e}=this.environment,{value:t}=this.stores.store.state;if(this.input&&(this.input.textContent=t,e.isMobile||this.input.focus(),t)){const e=document.getSelection();this.input.firstChild&&e.collapse(this.input.firstChild,t.length),this.container.scrollLeft=this.container.scrollWidth-this.container.offsetWidth}}renderComponent(){const{device:e}=this.environment,{disabled:t}=this.props,{command:n}=T.a(this.environment),{html:o}=this.stores.store.state;return s()("div",{style:this.getWrapStyle()},void 0,p.a.createElement("div",{ref:e=>{e&&(this.container=e)},style:q.style},s()(k.a,{capture:!t,onLeft:f.a.identity,onRight:f.a.identity,onSelectAll:f.a.identity,onRedo:f.a.identity,onUndo:f.a.identity,onToggleBold:f.a.identity,onToggleItalics:f.a.identity,onToggleCode:f.a.identity,onCut:f.a.identity,onCopy:f.a.identity,onPaste:f.a.identity,onKeypress:f.a.identity,onDelete:f.a.identity,onBackspace:f.a.identity},void 0,p.a.createElement("div",{ref:this.handleInputMount,contentEditable:!t,spellCheck:!1,autoCorrect:"off",autoCapitalize:"off",onClick:this.handleClick,onKeyUp:this.handleKeyUp,onKeyDown:this.handleKeyDown,onInput:this.handleInput,onPaste:this.handlePaste,style:this.getInputStyle()})),s()("div",{style:this.getOverlayStyle(),dangerouslySetInnerHTML:{__html:o}})),!e.isMobile&&!t&&s()(v.a,{renderTooltip:()=>s()("div",{},void 0,s()("span",{},void 0,s()(_.FormattedMessage,{defaultMessage:"Accept",id:"database.formula.acceptFormulaInput.tooltip"}))," ",s()("span",{style:{color:this.theme.mediumInvertedTextColor}},void 0,n,"+Enter")),render:t=>p.a.createElement(I.a,r()({disabled:Boolean(this.stores.store.state.error),onClick:()=>this.handleAccept(),style:{height:24,padding:"0 8px",alignSelf:"flex-end",marginRight:6,marginBottom:4,...e.isMobile&&{marginRight:12}}},t),s()(_.FormattedMessage,{id:"database.formula.doneButton.label",defaultMessage:"Done",description:"Label for button that confirms changes to a formula."}))}))}updateValue(e){const t=""===e.trim()?this.props.disabled?"":j.default.formatMessage(U.placeholder):S.c(this.props.Prism,e);this.stores.store.setState({...this.stores.store.state,html:t,value:e})}updateSelection(){const e=document.getSelection().anchorOffset,{value:t}=this.stores.store.state,n=S.e(t,e),o=n?t.slice(n[0],n[1]):"";o!==this.stores.store.state.query&&this.stores.store.setState({...this.stores.store.state,query:o})}updateFormula(e){const{schema:t,property:n}=this.props;if(""===e.trim())return{error:void 0,formula:void 0,type:void 0};{const o=A(e,n,t);if(o&&"error"===o.type){const{message:e}=o;return{formula:void 0,error:e,type:void 0}}return{formula:o,error:void 0,type:void 0}}}executeUpdate(){const{value:e}=this.stores.store.state,{error:t,formula:n}=this.updateFormula(e);!t&&n&&this.props.onChange(n),this.updateTimer=void 0,this.stores.store.setState({...this.stores.store.state,error:t})}static getCompletion(e){const{category:t,name:n}=e;return t===x.a.property?"prop(".concat(JSON.stringify(n),")"):t===x.a.constant?n:"".concat(n,"(")}getWrapStyle(){const{device:e,WindowSizeStore:t}=this.environment;return{display:"flex",flex:"none",background:this.theme.inputBackground,minHeight:33,borderTopLeftRadius:3,borderTopRightRadius:3,...this.props.disabled&&{background:this.theme.contentBackground,borderRadius:3},...e.isMobile&&{borderBottom:"1px solid ".concat(this.theme.regularDividerColor),background:this.theme.popoverBackground,minHeight:44,paddingLeft:t.state.paddingLeftCSS,paddingRight:t.state.paddingRightCSS}}}getOverlayStyle(){const{device:e}=this.environment,{value:t}=this.stores.store.state;return{...e.isMobile?q.mobileInputStyle:q.desktopInputStyle,zIndex:0,...""===t.trim()&&{color:this.theme.mediumTextColor},position:void 0}}getInputStyle(){const{device:e}=this.environment,t=e.isSafari||e.isChrome?"WebkitTextFillColor":"color";return{...e.isMobile?q.mobileInputStyle:q.desktopInputStyle,border:"none",background:"none",[t]:""===this.stores.store.state.value?this.theme.regularTextColor:w.h.transparent,caretColor:this.theme.regularTextColor,zIndex:1,width:"100%"}}}l()(q,"delay",0),l()(q,"style",{flexGrow:1,position:"relative",minWidth:0}),l()(q,"desktopInputStyle",{alignItems:"center",position:"absolute",minWidth:"100%",minHeight:32,margin:0,padding:0,paddingLeft:10,paddingRight:8,paddingTop:8,fontSize:13,fontFamily:M.a.fontFamily.mono,wordWrap:"break-word"}),l()(q,"mobileInputStyle",{alignItems:"center",position:"absolute",minWidth:"100%",minHeight:44,margin:0,paddingLeft:16,paddingRight:0,paddingTop:12,paddingBottom:12,fontSize:14,fontFamily:M.a.fontFamily.githubMono});var H=q,K=n("zEGb"),V=n("SR/M"),J=n("i3uR"),G=n("RgmA"),Y=n("gHFd");class Q extends y.a{renderDescription(){const{entry:e}=this.props;if(e){const{descriptionMessage:t,fallbackDescription:n}=e;if(t)return p.a.createElement(_.FormattedMessage,t);if(n)return n}return null}renderComponent(){const{entry:e}=this.props;if(e){const{name:t,examples:n}=e,o=Object(S.c)(this.props.Prism,(n||[]).join("\n")),r=this.renderSyntax();return s()("div",{},void 0,s()("h1",{style:Q.headerStyle},void 0,t),s()("p",{style:Q.textStyle},void 0,this.renderDescription()),s()("p",{style:Q.textStyle},void 0,s()("b",{},void 0,s()(_.FormattedMessage,{id:"database.formula.syntaxSection.title",defaultMessage:"Syntax",description:"Title of the section describing the syntax of a formula component. For example, for sqrt this title appears above 'sqrt(number)', and appears alongside the Examples section."}))),s()("pre",{style:this.getCodeStyle()},void 0,Object(G.a)(r,e=>s()("br",{},"sep:".concat(e)))),s()("p",{style:Q.textStyle},void 0,s()("b",{},void 0,s()(_.FormattedMessage,{id:"database.formula.examplesSection.title",defaultMessage:"Examples",description:"Title of the section listing examples ofthe syntax of a formula component. For example, for sqrt this title appears above 'sqrt(144) == 12', and appears alongside the Syntax section."}))),s()("pre",{style:this.getCodeStyle(),dangerouslySetInnerHTML:{__html:o}}))}return s()("div",{})}renderSyntax(){const{entry:e}=this.props;if(!e)return[];const{name:t,category:n}=e;return n===x.a.property?[s()("span",{},0,"prop(",JSON.stringify(t),")")]:n===x.a.constant?[s()("span",{},0,t)]:n===x.a.function?this.getFunctionSyntax(e):n===x.a.operator?this.getOperatorSyntax(e):[]}getFunctionSyntax(e){const{name:t}=e;return Q.getSignatureNames(e).map(({variadic:e,arity:n},o)=>e?s()("span",{},o,t,"(",s()("i",{},void 0,e),"...)"):s()("span",{},o,t,"(",Object(G.a)(n.map((e,t)=>s()("i",{},t,e)),e=>s()("span",{},"sep:".concat(e),","," ")),")"))}getOperatorSyntax(e){const{operator:t}=e;return f.a.compact(Q.getSignatureNames(e).map(({arity:e},n)=>{if(1===e.length){const[o]=e;return s()("span",{},-n-1,t," ",s()("i",{},void 0,o))}if(2===e.length){const[o,r]=e;return s()("span",{},-n-1,s()("i",{},void 0,o)," ",t," ",s()("i",{},void 0,r))}if(3===e.length){const[t,o,r]=e;return s()("span",{},-n-1,s()("i",{},void 0,t)," ","? ",s()("i",{},void 0,o)," ",": ",s()("i",{},void 0,r))}}).concat(this.getFunctionSyntax(e)))}static getSignatureNames(e){const{name:t,signatures:n}=e;return"if"===t?[{arity:["boolean","value","value"]}]:"format"===t||"unaryPlus"===t?[{arity:["value"]}]:"equal"===t||"unequal"===t?[{arity:["value","value"]}]:n.map(({arity:e,variadic:t})=>({variadic:t?Q.typeNameMap[t]:void 0,arity:e?f.a.compact(e.map(e=>Q.typeNameMap[e])):[]}))}getCodeStyle(){return{paddingTop:6,paddingBottom:8,paddingLeft:10,paddingRight:10,overflowX:"scroll",background:this.theme.sidebarBackground,borderRadius:3,fontSize:13,margin:0,fontFamily:M.a.fontFamily.mono,lineHeight:1.4}}}l()(Q,"typeNameMap",{checkbox:"boolean",number:"number",text:"text",date:"date"}),l()(Q,"headerStyle",{fontSize:20,margin:0,lineHeight:1,marginTop:4,marginBottom:12}),l()(Q,"textStyle",{marginTop:8,marginBottom:8,fontSize:13,lineHeight:1.4});var Z=Object(Y.withDependency)(Y.deps.prismjs,(e,t)=>p.a.createElement(Q,r()({},t,{Prism:e}))),X=n("2Y+N"),$=n("ZQ9l"),ee=n("mF3+"),te=n("gbGO"),ne=n("MeYt"),oe=n("nPEg");class re extends y.a{renderComponent(){const{entry:{name:e}}=this.props;return s()(V.a,{focused:this.props.focused,onClick:this.props.onClick,onMouseEnter:this.props.onMouseEnter,icon:s()("div",{style:{...K.a.defaultWrapStyle,...this.environment.device.isMobile&&{marginLeft:14}}},void 0,this.renderPropertyIcon()),title:e,right:this.renderDocumentationButtonPopup(),style:{...!this.environment.device.isMobile&&{paddingLeft:8,paddingRight:8}},desktopIconStyle:{marginLeft:0}})}renderDocumentationButtonPopup(){const{device:e}=this.environment;if(this.environment.device.isMobile)return s()(J.a,{popupType:e.isMobile?J.a.PopupType.SlideUp:J.a.PopupType.Popup,renderOrigin:e=>p.a.createElement(ne.a,r()({mobileFeedback:!0,style:{width:16,height:16}},e),ee.a.typesUnknownType({fill:this.theme.mediumIconColor})),render:t=>{let n;return n=e.isMobile?{menuType:te.b.MenuType.Modal,title:s()(_.FormattedMessage,{defaultMessage:"Documentation",id:"database.formulaPropertyEntryMenuItem.title",description:"In this context, documentation refers to the documentation popup for formulas property values in databases."}),right:s()(oe.DoneMenuText,{}),onClickRight:t.close}:{menuType:te.b.MenuType.Popup},p.a.createElement(te.b,n,s()(X.a,{},void 0,s()($.a,{title:s()(Z,{entry:this.props.entry}),style:{paddingTop:10,paddingBottom:16}})))}})}renderPropertyIcon(){const{entry:e}=this.props;if(e.category===x.a.property||e.category===x.a.constant){const{resultType:t}=e;return s()(K.a,{type:t,size:14,theme:this.theme})}if(e.category===x.a.function||e.category===x.a.operator){const{signatures:[{resultType:t}]}=e;return s()(K.a,{type:t,size:14,theme:this.theme})}}}l()(re,"contextTypes",{...te.c});var ie=re,se=n("vshI"),ae=n("y6Dp"),le=n("RQ1t"),de=n("8fuX"),pe=n("D2XV"),ce=n("QcDD"),ue=n("sSHh"),me=n("0CAA");class he extends y.a{constructor(...e){super(...e),l()(this,"storeTypes",{formulaInputStore:h,menuListStore:le.a})}renderComponent(){const{device:e}=this.environment,{schema:t,property:n,disabled:o}=this.props,{error:r}=this.stores.formulaInputStore.state,{formula:i}=t[n],a=s()(d.Fragment,{},void 0,s()(Y.DependencyConsumer,{dependency:Y.deps.prismjs},void 0,e=>p.a.createElement(H,{ref:e=>{e&&(this.formulaInput=e)},Prism:e,store:this.stores.formulaInputStore,formula:i,schema:t,property:n,disabled:o,onChange:e=>this.handleInputChange(e),onSubmit:e=>this.handleInputSubmit(e)})),e.isMobile&&this.renderStatus());let l;return l=e.isMobile?{menuType:te.b.MenuType.Modal,title:s()(_.FormattedMessage,{id:"database.mobileFormulaModal.title",defaultMessage:"Formula"}),left:s()(oe.CancelMenuText,{}),right:r?void 0:s()(_.FormattedMessage,{id:"database.mobileFormulaModal.saveButton.label",defaultMessage:"Save"}),onClickLeft:this.props.onClickCancel,onClickRight:()=>this.formulaInput.handleAccept(),header:a}:{menuType:te.b.MenuType.Popup,width:580,height:o?"none":void 0,disableScroller:!0,header:a,footer:this.renderStatus()},p.a.createElement(te.b,l,!o&&this.renderContent())}renderContent(){const{device:e}=this.environment,t=this.getLibrary(),n=this.getFocusedEntry(t);return e.isMobile?s()(c.a,{initialFocus:0,context:{blocks:[],environment:this.environment},filter:this.stores.formulaInputStore.state.query,sections:this.renderSections(t),menuListStore:this.stores.menuListStore}):s()("div",{style:{display:"flex",flexGrow:1,overflow:"hidden",boxShadow:"\n\t\t\t\t\t\t\tinset 0 1px 0 ".concat(this.theme.regularDividerColor,",\n\t\t\t\t\t\t\tinset 0 -1px 0 ").concat(this.theme.regularDividerColor,"\n\t\t\t\t\t\t"),height:295}},void 0,s()(de.b,{type:de.a.Y,style:{width:180,flexGrow:0,flexShrink:0}},void 0,s()(c.a,{initialFocus:0,context:{blocks:[],environment:this.environment},filter:this.stores.formulaInputStore.state.query,sections:this.renderSections(t),menuListStore:this.stores.menuListStore,disableMouseLeaveBlur:!0})),s()(de.b,{type:de.a.Y,style:{padding:12,boxShadow:"inset 1px 0 0 ".concat(this.theme.regularDividerColor),flexGrow:1}},void 0,s()(Z,{entry:n})))}renderStatus(){const{device:e}=this.environment,{disabled:t}=this.props,{command:n}=T.a(this.environment),{error:o}=this.stores.formulaInputStore.state;return o?s()("div",{style:e.isMobile?this.getMobileStatusWrapStyle():this.getDesktopStatusWrapStyle()},void 0,s()("span",{style:{...e.isMobile&&he.mobileStatusStyle,...he.errorStatusStyle}},void 0,o),!e.isMobile&&this.renderLearnMoreLink()):e.isMobile?s()("div",{style:this.getMobileStatusWrapStyle()},void 0,s()("span",{style:he.mobileStatusStyle},void 0,s()(_.FormattedMessage,{defaultMessage:"No errors.",id:"database.formula.mobileNoErrors.message"}))):t?void 0:s()("div",{style:this.getDesktopStatusWrapStyle()},void 0,s()("span",{},void 0,s()(_.FormattedMessage,{id:"database.formula.keyboardShortcutHint",defaultMessage:"{commandEnter} to accept.",description:'Caption that describes keyboard shortcut to confirm changes to a formula and close the formula editor. Appears as "⌘+Enter to accept." on Mac, Ctrl+Enter on Windows.',values:{commandEnter:s()("span",{style:{fontWeight:M.a.fontWeight.medium}},void 0,n,"+Enter")}})),this.renderLearnMoreLink())}renderLearnMoreLink(){return s()("div",{style:{marginLeft:"auto"}},void 0,s()(ue.a,{title:s()("span",{style:{fontSize:M.a.fontSize.UISmall.desktop}},void 0,s()(_.FormattedMessage,{defaultMessage:"Learn more about formulas",id:"formulaPropertyMenu.learnMore.button.label"})),href:Object(me.a)("guides.formulas"),analyticsFrom:"formula_property_menu"}))}renderSections(e){return e.map(e=>({key:e.key,title:this.props.intl.formatMessage(e.titleMessage),render:e=>p.a.createElement(X.a,r()({},e,{desktopTitleStyle:{paddingLeft:8,paddingRight:8}})),actions:e.entries.map((e,t)=>({key:this.getEntryKey(e,t),displayName:e.name,analyticsName:e.name,searchName:e.name,render:t=>p.a.createElement(ie,r()({},t,{entry:e})),action:()=>{this.formulaInput.insertEntry(e)},closeParentMenu:!1}))}))}handleUpdate(e,t){const{onChange:n,schema:o,property:r,analyticsFrom:i}=this.props;if(e&&"error"===e.type);else{const{type:s,name:a,number_format:l}=o[r];n({schema:{...o,[r]:{type:s,name:a,formula:e,number_format:l}},close:t});const d=o[r];d&&ae.Q(this.environment,{property_type:d.type,action:"formula_edit",from:i})}}getLibrary(){const{schema:e,property:t,block:n,intl:o}=this.props,r={},i=Object.keys(e).filter(e=>e!==t).map(t=>{const i=e[t];if(!i)throw new Error("Property not found.");const{name:s}=i,a=se.b({property:t,schema:e,block:n,getRecordValue:this.getRecordValue,userTimeZone:pe.m,intl:o,depth:0,resultCache:{},normalizedSchemaCache:r});return{name:s,category:x.a.property,fallbackDescription:o.formatMessage({id:"database.formula.property.description",defaultMessage:"Returns the {propertyName} property for each entry."},{propertyName:s}),resultType:S.b(i),examples:["prop(".concat(JSON.stringify(s),") == ").concat(JSON.stringify(a))]}});return[x.d(x.a.property,i),...x.b]}getFocusedEntry(e){const t=this.stores.menuListStore.state.focus.focusedKey;if(void 0!==t)for(const n of e)for(const[e,o]of n.entries.entries())if(this.getEntryKey(o,e)===t)return o}getEntryKey(e,t){return"".concat(e.name," ").concat(t)}getDesktopStatusWrapStyle(){return{display:"flex",flex:"none",alignItems:"center",fontSize:12,paddingLeft:8,paddingRight:8,height:30,color:this.theme.mediumTextColor}}getMobileStatusWrapStyle(){const{WindowSizeStore:e}=this.environment;return{display:"flex",flex:"none",alignItems:"center",fontSize:14,height:28,color:this.theme.mediumTextColor,background:this.theme.popoverBackground,boxShadow:"0 1px 0 ".concat(this.theme.regularDividerColor),paddingLeft:e.state.paddingLeftCSS,paddingRight:e.state.paddingRightCSS}}get getRecordValue(){return ce.default.getCurrentBlockValueFn()}handleInputChange(e){this.handleUpdate(e,!1)}handleInputSubmit(e){this.handleUpdate(e,!0)}}l()(he,"mobileStatusStyle",{paddingLeft:16,paddingRight:16}),l()(he,"errorStatusStyle",{color:w.h.redWithAlpha(.8),...M.a.textOverflowStyle});t.default=Object(_.injectIntl)(he)}}]);