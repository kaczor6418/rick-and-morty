(function(e){function t(t){for(var a,i,l=t[0],o=t[1],s=t[2],d=0,p=[];d<l.length;d++)i=l[d],Object.prototype.hasOwnProperty.call(c,i)&&c[i]&&p.push(c[i][0]),c[i]=0;for(a in o)Object.prototype.hasOwnProperty.call(o,a)&&(e[a]=o[a]);u&&u(t);while(p.length)p.shift()();return r.push.apply(r,s||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],a=!0,l=1;l<n.length;l++){var o=n[l];0!==c[o]&&(a=!1)}a&&(r.splice(t--,1),e=i(i.s=n[0]))}return e}var a={},c={app:0},r=[];function i(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=a,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)i.d(n,a,function(t){return e[t]}.bind(null,a));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],o=l.push.bind(l);l.push=t,l=l.slice();for(var s=0;s<l.length;s++)t(l[s]);var u=o;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"0312":function(e,t,n){},"197c":function(e,t,n){"use strict";n("5547")},"26f1":function(e,t,n){"use strict";n("362a")},"278f":function(e,t,n){"use strict";n("bacf")},"362a":function(e,t,n){},5547:function(e,t,n){},5714:function(e,t,n){},"6ba8":function(e,t,n){"use strict";n("c294")},"723c":function(e,t,n){"use strict";n("f2ed")},"83b0":function(e,t){e.exports='<svg style="text-align: center; vertical-align: middle" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.5 9.5C17.5 6.46 15.04 4 12 4C8.96 4 6.5 6.46 6.5 9.5C6.5 12.2 8.44 14.43 11 14.9V17H9V19H11V21H13V19H15V17H13V14.9C15.56 14.43 17.5 12.2 17.5 9.5ZM8.5 9.5C8.5 7.57 10.07 6 12 6C13.93 6 15.5 7.57 15.5 9.5C15.5 11.43 13.93 13 12 13C10.07 13 8.5 11.43 8.5 9.5Z" fill="#A9B1BD"></path></svg>'},"8c6b":function(e,t){e.exports='<svg style="text-align: center; vertical-align: middle" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.5 11C11.43 11 13 12.57 13 14.5C13 16.43 11.43 18 9.5 18C7.57 18 6 16.43 6 14.5C6 12.57 7.57 11 9.5 11ZM9.5 9C6.46 9 4 11.46 4 14.5C4 17.54 6.46 20 9.5 20C12.54 20 15 17.54 15 14.5C15 13.34 14.64 12.27 14.03 11.38L18 7.42V10H20V4H14V6H16.58L12.61 9.97C11.73 9.36 10.66 9 9.5 9Z" fill="#A9B1BD"></path></svg>'},b788:function(e,t){var n={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",variableDefinitions:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"characters"},arguments:[{kind:"Argument",name:{kind:"Name",value:"filter"},value:{kind:"ObjectValue",fields:[{kind:"ObjectField",name:{kind:"Name",value:"name"},value:{kind:"StringValue",value:"",block:!1}}]}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"info"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"count"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"results"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"image"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"name"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"gender"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"species"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"episode"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"episode"},arguments:[],directives:[]}]}}]}}]}}]}}],loc:{start:0,end:280}};n.loc.source={body:'query {\n    characters(filter: { name: "" }) {\n        info {\n            count\n        }\n        results {\n            id,\n            image,\n            name,\n            gender,\n            species,\n            episode {\n                episode\n            }\n        }\n    }\n}\n',name:"GraphQL request",locationOffset:{line:1,column:1}};function a(e,t){if("FragmentSpread"===e.kind)t.add(e.name.value);else if("VariableDefinition"===e.kind){var n=e.type;"NamedType"===n.kind&&t.add(n.name.value)}e.selectionSet&&e.selectionSet.selections.forEach((function(e){a(e,t)})),e.variableDefinitions&&e.variableDefinitions.forEach((function(e){a(e,t)})),e.definitions&&e.definitions.forEach((function(e){a(e,t)}))}var c={};(function(){n.definitions.forEach((function(e){if(e.name){var t=new Set;a(e,t),c[e.name.value]=t}}))})(),e.exports=n},ba87:function(e,t){e.exports='<svg style="text-align: center; vertical-align: middle" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19 13H5V11H19V13Z" fill="#A9B1BD"></path></svg>'},bacf:function(e,t,n){},c174:function(e,t,n){"use strict";n("d43f")},c294:function(e,t,n){},c704:function(e,t){e.exports='<svg style="text-align: center; vertical-align: middle" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z" fill="#A9B1BD"></path></svg>'},cc90:function(e,t){e.exports='<svg style="text-align: center; vertical-align: middle" viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 18.4847L19.416 23L17.448 14.49L24 8.76421L15.372 8.02579L12 0L8.628 8.02579L0 8.76421L6.552 14.49L4.584 23L12 18.4847Z" fill="#A9B1BD"></path></svg>'},cd49:function(e,t,n){"use strict";n.r(t),n.d(t,"defaultApolloClient",(function(){return Me}));n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("00b9"),c=n("7a23"),r=Object(c["f"])("hr",null,null,-1);function i(e,t,n,a,i,l){var o=Object(c["w"])("search"),s=Object(c["w"])("table-view");return Object(c["p"])(),Object(c["d"])(c["a"],null,[Object(c["f"])(o,{options:a.selectOptions,onSearchTypeChanged:a.updateQueryType,onSearchResult:a.updateCharactersToDisplay},null,8,["options","onSearchTypeChanged","onSearchResult"]),r,Object(c["f"])(s,{"header-titles":a.headings,characters:a.allCharacters},null,8,["header-titles","characters"])],64)}var l=Object(c["z"])("data-v-c37d90a6");Object(c["s"])("data-v-c37d90a6");var o={class:"search"};Object(c["q"])();var s=l((function(e,t,n,a,r,i){var l=Object(c["w"])("v-label"),s=Object(c["w"])("v-select"),u=Object(c["w"])("v-input");return Object(c["p"])(),Object(c["d"])("div",o,[Object(c["f"])(l,{class:"search__label",value:"Search by"}),Object(c["f"])(s,{class:"search__select",options:e.options,name:"rick-and-morty-filters",placeholder:"Choose filter",onSelectValueChanged:e.changeQueryType},null,8,["options","onSelectValueChanged"]),Object(c["f"])(u,{class:"search__input",modelValue:e.filterValue,"onUpdate:modelValue":t[1]||(t[1]=function(t){return e.filterValue=t}),"icon-id":e.searchIcon,onClick:e.searchCharacters},null,8,["modelValue","icon-id","onClick"])])})),u=n("8785"),d=Object(c["z"])("data-v-543abcd4"),p=d((function(e,t,n,a,r,i){return Object(c["p"])(),Object(c["d"])("label",null,Object(c["x"])(e.value),1)})),f=Object(c["g"])({name:"VLabel",props:{value:{type:String,required:!0}}});n("278f");f.render=p,f.__scopeId="data-v-543abcd4";var b=f,v=(n("b0c0"),Object(c["z"])("data-v-ca7f39ce")),O=v((function(e,t,n,a,r,i){return Object(c["p"])(),Object(c["d"])("div",null,[Object(c["f"])("input",{list:e.name,value:e.selectValue,placeholder:e.placeholder,onInput:t[1]||(t[1]=function(){return e.updateValue&&e.updateValue.apply(e,arguments)})},null,40,["list","value","placeholder"]),Object(c["f"])("datalist",{id:e.name},[(Object(c["p"])(!0),Object(c["d"])(c["a"],null,Object(c["v"])(e.options,(function(e){return Object(c["p"])(),Object(c["d"])("option",{value:e,key:e},null,8,["value"])})),128))],8,["id"])])})),j=(n("caad"),n("2532"),Object(c["g"])({name:"VSelect",props:{name:{type:String,required:!0},options:{type:Array,required:!0},initialValue:{type:String},placeholder:{type:String}},emits:["select-value-changed"],setup:function(e,t){var n,a=null!==(n=e.initialValue)&&void 0!==n?n:e.options[0],c=function(n){a=n.target.value,e.options.includes(a)&&t.emit("select-value-changed",a)};return{updateValue:c,selectValue:a}}}));n("6ba8");j.render=O,j.__scopeId="data-v-ca7f39ce";var m=j,h=Object(c["z"])("data-v-cf561d64");Object(c["s"])("data-v-cf561d64");var g={class:"wrapper"};Object(c["q"])();var w,y,S=h((function(e,t,n,a,r,i){var l=Object(c["w"])("icon");return Object(c["p"])(),Object(c["d"])("div",g,[Object(c["f"])("input",{class:"input",value:e.modelValue,onInput:t[1]||(t[1]=function(t){return e.$emit("update:modelValue",t.target.value)})},null,40,["value"]),e.hasIcon()?(Object(c["p"])(),Object(c["d"])(l,Object(c["l"])({key:0,class:"search-icon","icon-id":e.iconId},e.$attrs),null,16,["icon-id"])):Object(c["e"])("",!0)])})),L=Object(c["z"])("data-v-2d275f9f"),E=L((function(e,t,n,a,r,i){return Object(c["p"])(),Object(c["d"])("div",{class:"wrapper",style:{width:e.size}},[Object(c["f"])("div",{class:"icon",innerHTML:e.icon},null,8,["innerHTML"])],4)}));n("4ec9"),n("d3b7"),n("3ca3"),n("ddb0");(function(e){e["MALE"]="MALE",e["FEMALE"]="FEMALE",e["GENDERLESS"]="GENDERLESS",e["UNKNOWN"]="UNKNOWN",e["STAR"]="STAR",e["SEARCH"]="SEARCH"})(w||(w={})),function(e){function t(e){return null!=e}function n(e){return null==e}e.isDefined=t,e.isNullOrUndefined=n}(y||(y={}));var k,C,_=n("d4ec"),N=n("bee2"),I=n("262e"),V=n("2caf"),x=n("9072"),A=function(e){Object(I["a"])(n,e);var t=Object(V["a"])(n);function n(e){var a;return Object(_["a"])(this,n),a=t.call(this,e),a.name=n.name,a}return n}(Object(x["a"])(Error)),M=function(){function e(){Object(_["a"])(this,e)}return Object(N["a"])(e,null,[{key:"toElement",value:function(e){var t=document.createElement("div");t.innerHTML=e;var n=t.firstElementChild;if(y.isNullOrUndefined(n))throw new A("This xml string ".concat(e," is not parsable to Element"));return n}}]),e}(),D=function(e){Object(I["a"])(n,e);var t=Object(V["a"])(n);function n(e){var a;return Object(_["a"])(this,n),a=t.call(this,e),a.name=n.name,a}return n}(Object(x["a"])(Error)),R=n("83b0"),T=n.n(R),F=n("8c6b"),q=n.n(F),H=n("d103"),B=n.n(H),P=n("c704"),G=n.n(P),z=n("cc90"),U=n.n(z),K=n("ba87"),Z=n.n(K);(function(e){var t=new Map;function n(e){var n=t.get(e);if(y.isDefined(n))return M.toElement(n);throw new D("Icon: ".concat(e," doesn't exist in icon definitions"))}function a(e){var n=t.get(e);if(y.isDefined(n))return n;throw new D("Icon: ".concat(e," doesn't exist in icon definitions"))}t.set(w.FEMALE,T.a),t.set(w.MALE,q.a),t.set(w.GENDERLESS,G.a),t.set(w.STAR,U.a),t.set(w.UNKNOWN,Z.a),t.set(w.SEARCH,B.a),e.getSVGIcon=n,e.getPlainIcon=a})(k||(k={})),function(e){e["M"]="24px"}(C||(C={}));var W=Object(c["g"])({name:"Icon",props:{iconId:{type:String,required:!0},size:{type:String,default:C.M}},setup:function(e){var t=k.getPlainIcon(e.iconId);return{icon:t}}});n("723c");W.render=E,W.__scopeId="data-v-2d275f9f";var Q=W,J=Object(c["g"])({name:"VInput",components:{Icon:Q},props:{modelValue:{type:String},iconId:{type:String}},inheritAttrs:!1,setup:function(e){var t=function(){return y.isDefined(e.iconId)};return{hasIcon:t}}});n("26f1");J.render=S,J.__scopeId="data-v-cf561d64";var Y,$=J,X=n("9530"),ee=n.n(X),te=n("1840"),ne=Object(c["g"])({name:"Search",components:{VInput:$,VSelect:m,VLabel:b},props:{options:{type:Array,required:!0}},emits:["search-result"],setup:function(e,t){var n=w.SEARCH,a="Name",r=function(e){return a=e},i=Object(c["u"])(""),l=function(){Object(te["b"])(Me);var e=Object(te["c"])(ee()(Y||(Y=Object(u["a"])(["\n        query {\n          characters(filter: { ",': "','" }) {\n            info {\n                count\n            }\n            results {\n                id,\n                image,\n                name,\n                gender,\n                species,\n                episode {\n                    episode\n                }\n            }\n          }\n        }'])),a.toLowerCase(),i.value)),n=e.result,c=Object(te["d"])(n,"Couldn't fetch data about all characters",(function(e){return e.characters})).value.results;t.emit("search-result",c)};return{filterValue:i,searchIcon:n,changeQueryType:r,searchCharacters:l}}});n("e6bb");ne.render=s,ne.__scopeId="data-v-c37d90a6";var ae=ne,ce=n("b788"),re=n.n(ce),ie=Object(c["z"])("data-v-c26fc1c2");Object(c["s"])("data-v-c26fc1c2");var le={class:"header"},oe={class:"header__row"},se={class:"body"},ue={class:"row__image"},de={class:"row__id"},pe={class:"row__name"},fe={class:"row__gender"},be={class:"row__species"},ve={class:"row__last-episode"};Object(c["q"])();var Oe=ie((function(e,t,n,a,r,i){var l=Object(c["w"])("v-image"),o=Object(c["w"])("icon-label");return Object(c["p"])(),Object(c["d"])("table",null,[Object(c["f"])("thead",le,[Object(c["f"])("tr",oe,[(Object(c["p"])(!0),Object(c["d"])(c["a"],null,Object(c["v"])(e.headerTitles,(function(e){return Object(c["p"])(),Object(c["d"])("th",{class:"row__title",key:e},Object(c["x"])(e),1)})),128))])]),Object(c["f"])("tbody",se,[(Object(c["p"])(!0),Object(c["d"])(c["a"],null,Object(c["v"])(e.characters,(function(t){var n;return Object(c["p"])(),Object(c["d"])("tr",{class:"body_row",key:null!==(n=t.id)&&void 0!==n?n:Date.now()},[Object(c["f"])("td",ue,[Object(c["f"])(l,{url:t.image,description:t.name},null,8,["url","description"])]),Object(c["f"])("td",de,Object(c["x"])(t.id),1),Object(c["f"])("td",pe,Object(c["x"])(t.name),1),Object(c["f"])("td",fe,[Object(c["f"])(o,{"icon-props":e.getIconFromGender(t.gender),"label-props":{value:t.gender}},null,8,["icon-props","label-props"])]),Object(c["f"])("td",be,Object(c["x"])(t.species),1),Object(c["f"])("td",ve,Object(c["x"])(e.getLastEpisode(t.episode).episode),1)])})),128))])])}));n("a4d3"),n("e01a");function je(e,t,n,a,r,i){return Object(c["p"])(),Object(c["d"])("img",{style:{maxWidth:e.width},src:e.url,alt:e.description},null,12,["src","alt"])}var me=Object(c["g"])({name:"VImage",props:{url:{type:String,required:!0},description:{type:String,required:!0},width:{type:String,default:"43px"}}});me.render=je;var he=me,ge=Object(c["z"])("data-v-24967ee3"),we=ge((function(e,t,n,a,r,i){var l=Object(c["w"])("icon"),o=Object(c["w"])("v-label");return Object(c["p"])(),Object(c["d"])("div",null,[Object(c["f"])(l,{class:"icon","icon-id":e.iconProps.iconId,size:e.size},null,8,["icon-id","size"]),Object(c["f"])(o,{class:"label",value:e.labelProps.value},null,8,["value"])])})),ye=Object(c["g"])({name:"IconLabel",components:{VLabel:b,Icon:Q},props:{iconProps:{type:Object,required:!0},labelProps:{type:Object,required:!0}},setup:function(e){var t,n=null!==(t=e.iconProps.size)&&void 0!==t?t:C.M;return{size:n}}});n("d0d5");ye.render=we,ye.__scopeId="data-v-24967ee3";var Se,Le,Ee=ye;(function(e){e["MALE"]="MALE",e["FEMALE"]="FEMALE",e["UNKNOWN"]="UNKNOWN",e["GENDERLESS"]="GENDERLESS"})(Se||(Se={})),function(e){function t(e){return e[e.length-1]}e.getLastElementReference=t}(Le||(Le={}));var ke=function(e){Object(I["a"])(n,e);var t=Object(V["a"])(n);function n(e){var a;return Object(_["a"])(this,n),a=t.call(this,e),a.name=n.name,a}return n}(Object(x["a"])(Error)),Ce=Object(c["g"])({name:"TableView",components:{IconLabel:Ee,VImage:he},props:{headerTitles:{type:Array,required:!0},characters:{type:Array,required:!0}},setup:function(){var e=function(e){var t={iconId:w.GENDERLESS};switch(e.toUpperCase()){case Se.GENDERLESS:t.iconId=w.GENDERLESS;break;case Se.FEMALE:t.iconId=w.FEMALE;break;case Se.MALE:t.iconId=w.MALE;break;case Se.UNKNOWN:t.iconId=w.UNKNOWN;break;default:throw new ke("Gender ".concat(e," doesn't exists"))}return t},t=function(e){return Le.getLastElementReference(e)};return{getIconFromGender:e,getLastEpisode:t}}});n("c174");Ce.render=Oe,Ce.__scopeId="data-v-c26fc1c2";var _e=Ce,Ne={components:{TableView:_e,Search:ae},setup:function(){var e=Object(te["c"])(re.a),t=e.result,n=e.onResult,a=Object(c["u"])(Object(te["d"])(t,"Couldn't fetch data about all characters",(function(e){return e.characters})).value.results);n((function(e){var t=e.data;a.value=t.characters.results}));var r=["Photo","Character ID","Name","Gender","Species","Last Episode"],i=["Name","Species","Gender"],l=function(e){return console.log(e)},o=function(e){return a.value=e};return{allCharacters:a,headings:r,selectOptions:i,updateQueryType:l,updateCharactersToDisplay:o}}};n("197c");Ne.render=i;var Ie,Ve=Ne;(function(e){e.RICK_AND_MORTY_API_URI="https://rickandmortyapi.com/graphql"})(Ie||(Ie={}));var xe=Object(a["createHttpLink"])({uri:Ie.RICK_AND_MORTY_API_URI}),Ae=new a["InMemoryCache"],Me=new a["ApolloClient"]({link:xe,cache:Ae});Object(c["c"])({setup:function(){Object(c["r"])(te["a"],Me)},render:function(){return Object(c["i"])(Ve)}}).mount("#app")},d0d5:function(e,t,n){"use strict";n("0312")},d103:function(e,t){e.exports='<svg style="text-align: center; vertical-align: middle" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.5 14H14.71L14.43 13.73C15.41 12.59 16 11.11 16 9.5C16 5.91 13.09 3 9.5 3C5.91 3 3 5.91 3 9.5C3 13.09 5.91 16 9.5 16C11.11 16 12.59 15.41 13.73 14.43L14 14.71V15.5L19 20.49L20.49 19L15.5 14ZM9.5 14C7.01 14 5 11.99 5 9.5C5 7.01 7.01 5 9.5 5C11.99 5 14 7.01 14 9.5C14 11.99 11.99 14 9.5 14Z" fill="#A9B1BD"></path></svg>'},d43f:function(e,t,n){},e6bb:function(e,t,n){"use strict";n("5714")},f2ed:function(e,t,n){}});
//# sourceMappingURL=app.cf612943.js.map