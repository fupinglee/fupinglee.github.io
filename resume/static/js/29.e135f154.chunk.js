(this["webpackJsonpreact-resume-site"]=this["webpackJsonpreact-resume-site"]||[]).push([[29,122],{697:function(t,e,n){!function(t){"use strict";t.defineMode("yaml",(function(){var t=new RegExp("\\b(("+["true","false","on","off","yes","no"].join(")|(")+"))$","i");return{token:function(e,n){var r=e.peek(),i=n.escaped;if(n.escaped=!1,"#"==r&&(0==e.pos||/\s/.test(e.string.charAt(e.pos-1))))return e.skipToEnd(),"comment";if(e.match(/^('([^']|\\.)*'?|"([^"]|\\.)*"?)/))return"string";if(n.literal&&e.indentation()>n.keyCol)return e.skipToEnd(),"string";if(n.literal&&(n.literal=!1),e.sol()){if(n.keyCol=0,n.pair=!1,n.pairStart=!1,e.match("---"))return"def";if(e.match("..."))return"def";if(e.match(/\s*-\s+/))return"meta"}if(e.match(/^(\{|\}|\[|\])/))return"{"==r?n.inlinePairs++:"}"==r?n.inlinePairs--:"["==r?n.inlineList++:n.inlineList--,"meta";if(n.inlineList>0&&!i&&","==r)return e.next(),"meta";if(n.inlinePairs>0&&!i&&","==r)return n.keyCol=0,n.pair=!1,n.pairStart=!1,e.next(),"meta";if(n.pairStart){if(e.match(/^\s*(\||\>)\s*/))return n.literal=!0,"meta";if(e.match(/^\s*(\&|\*)[a-z0-9\._-]+\b/i))return"variable-2";if(0==n.inlinePairs&&e.match(/^\s*-?[0-9\.\,]+\s?$/))return"number";if(n.inlinePairs>0&&e.match(/^\s*-?[0-9\.\,]+\s?(?=(,|}))/))return"number";if(e.match(t))return"keyword"}return!n.pair&&e.match(/^\s*(?:[,\[\]{}&*!|>'"%@`][^\s'":]|[^,\[\]{}#&*!|>'"%@`])[^#]*?(?=\s*:($|\s))/)?(n.pair=!0,n.keyCol=e.indentation(),"atom"):n.pair&&e.match(/^:\s*/)?(n.pairStart=!0,"meta"):(n.pairStart=!1,n.escaped="\\"==r,e.next(),null)},startState:function(){return{pair:!1,pairStart:!1,keyCol:0,inlinePairs:0,inlineList:0,literal:!1,escaped:!1}},lineComment:"#",fold:"indent"}})),t.defineMIME("text/x-yaml","yaml"),t.defineMIME("text/yaml","yaml")}(n(142))},804:function(t,e,n){!function(t){var e=0,n=1,r=2;t.defineMode("yaml-frontmatter",(function(i,a){var s=t.getMode(i,"yaml"),o=t.getMode(i,a&&a.base||"gfm");function u(t){return t.state==r?o:s}return{startState:function(){return{state:e,inner:t.startState(s)}},copyState:function(e){return{state:e.state,inner:t.copyState(u(e),e.inner)}},token:function(i,a){if(a.state==e)return i.match("---",!1)?(a.state=n,s.token(i,a.inner)):(a.state=r,a.inner=t.startState(o),o.token(i,a.inner));if(a.state==n){var u=i.sol()&&i.match(/(---|\.\.\.)/,!1),f=s.token(i,a.inner);return u&&(a.state=r,a.inner=t.startState(o)),f}return o.token(i,a.inner)},innerMode:function(t){return{mode:u(t),state:t.inner}},blankLine:function(t){var e=u(t);if(e.blankLine)return e.blankLine(t.inner)}}}))}(n(142),n(697))}}]);
//# sourceMappingURL=29.e135f154.chunk.js.map