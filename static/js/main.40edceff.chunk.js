(this["webpackJsonpquiz-app"]=this["webpackJsonpquiz-app"]||[]).push([[0],{1:function(e,t,n){e.exports={siteWrapper:"App_siteWrapper__1vc7l",wrapper:"App_wrapper__1BNF1",quiz:"App_quiz__1souW",siteHeader:"App_siteHeader__-WrrU",title:"App_title__2MzaC",answerWrap:"App_answerWrap__BTrAI",quizRound:"App_quizRound__2mgR-",roundNo:"App_roundNo__10uQs",roundOf:"App_roundOf__3_FIa"}},10:function(e,t,n){e.exports={introPageWrap:"IntroPage_introPageWrap__1L_0_",introPageContent:"IntroPage_introPageContent__2XwAi"}},20:function(e,t,n){e.exports={btn:"AnswerButton_btn__1uOnZ"}},25:function(e,t,n){e.exports=n(35)},30:function(e,t,n){},35:function(e,t,n){"use strict";n.r(t);var a=n(0),s=n.n(a),o=n(7),r=n.n(o),i=(n(30),n(13)),u=n(14),c=n(21),l=n(15),h=n(5),m=n(22),p=n(16),f=n(37),w=n(2),d=n(3);function g(){var e=Object(w.a)(["\n  display: inline-block;\n  background: rgba(0,0,0,0.05);\n  font-size: 1.9rem;\n  padding: 5px 10px;\n  margin: 0;\n"]);return g=function(){return e},e}var T=d.a.h2(g());function v(){return s.a.createElement(T,null,"+ - * /")}function x(){var e=Object(w.a)(["\n  background: transparent;\n  border: 0;\n  color: #FFE45A;\n  font-size: 1.25em;\n  margin: 2rem 1rem 0;\n  padding: 1rem 1rem;\n  text-align: center;\n  text-transform: uppercase;\n  position: relative;\n\n  span {\n    font-family: 'Lora', serif;\n    position: relative;\n    z-index: 2;\n  }\n\n  &::after {\n    background: #444;\n    content: \"\";\n    transform: skew(-10deg) rotate(-2deg);\n    transition: transform 0.2s ease-out;\n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    z-index: 1;\n  }\n\n  &:hover,\n  &:focus {\n    \n    cursor: pointer;\n    outline: 0;\n\n    &::after {\n      background: #333;\n      transform: skew(10deg) rotate(2deg);\n    }\n  }\n\n  &:active::after {\n    background: #333;\n  }\n"]);return x=function(){return e},e}var b=d.a.button(x());function y(e){return s.a.createElement(b,{onClick:e.onClick},s.a.createElement("span",null,e.buttonText))}var k=n(10),_=n.n(k);function q(e){return s.a.createElement("section",{className:_.a.introPageWrap,style:{display:e.display?"block":"none"}},s.a.createElement("article",{className:_.a.introPageContent},s.a.createElement(v,null),s.a.createElement("p",null,e.content)),s.a.createElement(y,{buttonText:e.buttonText,onClick:e.onClick}))}function E(){var e=Object(w.a)(["\n  font-size: 1.5rem;\n  font-family: 'Lora', serif;\n  margin: 2rem 1rem 0;\n  text-align: center;\n\n  @media (min-width: 600px) {\n    font-size: 2rem;\n  }\n\n  @media (min-width: 900px) {\n    font-size: 3rem;\n  }\n\n  span {\n  \tbackground: rgba(0,0,0,0.05);\n  \tpadding: 3px 5px;\n  }\n"]);return E=function(){return e},e}var A=d.a.p(E());function N(e){return s.a.createElement(A,null,e.questionText," ",s.a.createElement("span",null,e.valueA," ",e.operator," ",e.valueB),"?")}var P=n(20),C=n.n(P);function S(e){return s.a.createElement("button",{className:C.a.btn,value:e.answer,onClick:e.onClick},e.answer)}function O(){var e=Object(w.a)(["\n  font-size: 1rem;\n  left: 50%;\n  margin: 3rem 0 0;\n  position: absolute;\n  text-align: center;\n  transform: translate(-50%);\n  width: 150px;\n\n  @media (min-width: 600px) {\n    margin: 4rem 0 0;\n  }\n\n  &::before,\n  &::after {\n    background: #333;\n    border-radius: 5px;\n    content: '';\n    height: 5px;\n    left: 50%;\n    opacity: 0;\n    position: absolute;\n    transform: translateX(-50%);\n    transition: opacity 0.3s ease-out, width 0.3s ease-out;\n    width: 120px;\n  }\n\n  &::after {\n    background: rgba(0,0,0,0.075);\n    opacity: 1;\n    width: 120px;\n  }\n\n  &.countdown-started::before {\n    opacity: 1;\n    transition: width 9.95s linear, left 9.95s linear, opacity 0.3s linear;\n    width: 0;\n  }\n"]);return O=function(){return e},e}var z=d.a.section(O());function V(e){return s.a.createElement(z,{className:e.displayProp?"countdown-started":""})}var I=n(6),j=n.n(I);function W(e){return s.a.createElement("section",{className:j.a.resultsPageWrap,style:{display:e.display?"block":"none"}},s.a.createElement("article",{className:j.a.resultsPageContent},s.a.createElement("p",{className:j.a.resultsPageTextSmall},e.content),s.a.createElement("h3",{className:j.a.resultsPageTextLarge},e.score," out of ",e.outOf),s.a.createElement("p",{className:j.a.resultsPageTextSmall},(t=e.score)<=3?"Ouch, try not to beat yourself up too much.":t>=4&&t<=7?"Not too bad, but room for improvement.":t>=8&&t<=9?"Pretty good! But not quite a perfect score.":s.a.createElement(y,{buttonText:"Next Level",onClick:function(){return e.onNextLevel()}}))),s.a.createElement(y,{buttonText:e.buttonText,onClick:function(){return e.onClick()}}));var t}var B=n(1),R=n.n(B),M=function(e){var t=e.children,n=Object(p.a)(e,["children"]);return s.a.createElement(f.a,Object.assign({},n,{timeout:400,classNames:"fade"}),t)},Q=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(c.a)(this,Object(l.a)(t).call(this,e))).state={show:!1,showIntro:!0,showQuiz:!1,showResults:!1,siteTitle:"Math Quiz",pageText:"This site will generate random math questions. It has 3 levels and gives you a limited time to answer them.",pageButtonText:"Start",currentPage:0,questionsTotal:10,questionText:"What is...",questionOperatorArray:["+","-","*","/"],questionValueA:0,questionOperator:"",questionValueB:0,questionValueMin:3,questionValueMax:12,questionTimeOut:1e4,countTransition:!1,timerText:"Time left until next question...",timerCurrent:10,timerRemaining:10,correctAnswer:1,answer1:1,answer2:2,answer3:3,answerScore:0,totalTimeToDeduct:0,questionTimer:0},n.jumpTo=n.jumpTo.bind(Object(h.a)(n)),n.reset=n.reset.bind(Object(h.a)(n)),n.onNextLevel=n.onNextLevel.bind(Object(h.a)(n)),n}return Object(m.a)(t,e),Object(u.a)(t,[{key:"componentWillMount",value:function(){var e=this;this.generateQuestionValues(),setTimeout((function(){e.setState({show:!e.state.show})}),400)}},{key:"componentWillUnmount",value:function(){clearInterval(this.state.questionTimer)}},{key:"shuffleArray",value:function(e){for(var t,n,a=e.length;0!==a;)n=Math.floor(Math.random()*a),t=e[a-=1],e[a]=e[n],e[n]=t;return e}},{key:"checkForDuplicates",value:function(e,t){return e!==t?t:t+1}},{key:"checkForDuplicatesInArray",value:function(e){var t=e[0],n=e[1],a=e[2];n===t&&(e[1]=parseInt(t+1,10)),a!==n&&a!==t||(e[2]=parseInt(n+2,10)),console.log("After checkForDuplicates: ".concat(e," | Type of a: ").concat(typeof e[1]," - Type of b: ").concat(typeof e[2]))}},{key:"generateQuestionValues",value:function(e){var t,n=this,a=this.state.questionValueMin,s=this.state.questionValueMax,o=this.state.questionOperatorArray,r=function(e,t){return Math.floor(Math.random()*(t-e+1))+e},i=r(a,s),u=this.checkForDuplicates(i,r(a,s)),c=(t=o)[Math.floor(Math.random()*t.length)];this.setState({questionValueA:i,questionOperator:c,questionValueB:u},(function(){n.generateAnswerValues(e)}))}},{key:"generateAnswerValues",value:function(e){var t=this,n=function(e,t){return Math.floor(Math.random()*(t-e+1))+e},a=this.state.questionValueA,s=this.state.questionOperator,o=this.state.questionValueB,r=[],i={"+":function(e,t){return e+t},"-":function(e,t){return e-t},"/":function(e,t){return e/t},"*":function(e,t){return e*t}},u=i[s](a,o);u%1!==0&&(u=Number.parseFloat(u).toFixed(1));var c=u,l=i[s](c,n(1,5)),h=i[s](c,n(1,5));r.push(c,l,h),r.forEach((function(e,t){if(e%1!==0){var n=Number.parseFloat(e).toFixed(1);r.splice(t,1,n)}})),this.checkForDuplicatesInArray(r),this.shuffleArray(r),this.setState({correctAnswer:Number(c),answer1:r[0],answer2:r[1],answer3:r[2]},(function(){console.log("Correct: ".concat(t.state.correctAnswer," | AnswerA: ").concat(r[0]," | AnswerB: ").concat(r[1]," | AnswerC: ").concat(r[2]," "))}))}},{key:"startCountdown",value:function(){var e=this;clearInterval(this.state.questionTimer);var t=this.state.timerCurrent,n=setInterval((function(){t-=1,e.setState({timerCurrent:t}),t<=0&&e.jumpTo(null)}),1e3);this.setState({questionTimer:n})}},{key:"handleSelectedValue",value:function(e){var t=e?Number(e.currentTarget.value):null,n=this.state.answerScore;n+=1,t===Number(this.state.correctAnswer)&&(this.setState({answerScore:n,countTransition:!1}),console.log("Correctamundo!"))}},{key:"jumpTo",value:function(e){var t=this,n=this.state.currentPage;1===(n+=1)?setTimeout((function(){t.setState({show:!t.state.show,countTransition:!1}),setTimeout((function(){t.setState({show:!t.state.show,showIntro:!t.state.showIntro,showQuiz:!t.state.showQuiz,currentPage:n,timerCurrent:10},(function(){t.startCountdown(),setTimeout((function(){t.setState({countTransition:!0})}),1)}))}),400)}),400):n>1&&n<this.state.questionsTotal+1?(this.handleSelectedValue(e),setTimeout((function(){t.setState({show:!t.state.show,countTransition:!1}),setTimeout((function(){t.generateQuestionValues(e),t.setState({show:!t.state.show,currentPage:n,countTransition:!0,timerCurrent:10},(function(){t.startCountdown()}))}),400)}),400)):(clearInterval(this.state.questionTimer),this.handleSelectedValue(e),setTimeout((function(){t.setState({show:!t.state.show,timerCurrent:10,questionTimer:0,countTransition:!1}),setTimeout((function(){t.setState({show:!t.state.show,showQuiz:!t.state.showQuiz,showResults:!t.state.showResults,currentPage:n,siteIntro:"Results",pageText:"You scored:",pageButtonText:"Restart"})}),400)}),400))}},{key:"reset",value:function(){var e=this;setTimeout((function(){e.setState({show:!e.state.show}),e.generateQuestionValues(),setTimeout((function(){e.setState({show:!e.state.show,showIntro:!0,showQuiz:!1,showResults:!1,pageButtonText:"Try again",countTransition:!1,currentPage:0,questionText:"What is...",instruction:"Select your answer before the timer runs out",answerScore:0,pageText:"Try again and do your best! ;)",totalTimeToDeduct:0})}),400)}),400)}},{key:"onNextLevel",value:function(){var e=this;setTimeout((function(){e.setState({show:!e.state.show}),e.generateQuestionValues(),setTimeout((function(){e.setState({show:!e.state.show,showIntro:!0,showQuiz:!1,showResults:!1,pageButtonText:"Try again",countTransition:!1,currentPage:0,questionText:"What is...",instruction:"Select your answer before the timer runs out",answerScore:0,pageText:"Are you ready for the second level ? It will be harder than previous ;)",totalTimeToDeduct:0,questionValueMin:10,questionValueMax:30})}),400)}),400)}},{key:"render",value:function(){return s.a.createElement("section",{className:R.a.siteWrapper},s.a.createElement("header",{className:R.a.siteHeader},s.a.createElement("h1",{className:R.a.title},this.state.siteTitle),s.a.createElement("p",{className:R.a.quizRound,style:{display:this.state.showQuiz?"inline-block":"none"}},s.a.createElement("span",{className:R.a.roundNo},this.state.currentPage),s.a.createElement("span",{className:R.a.roundOf},this.state.questionsTotal))),s.a.createElement(q,{display:this.state.showIntro,content:this.state.pageText,buttonText:this.state.pageButtonText,onClick:this.jumpTo}),s.a.createElement(M,{in:this.state.show},s.a.createElement("div",{className:R.a.wrapper},s.a.createElement("section",{className:R.a.quiz,style:{display:this.state.showQuiz?"block":"none"}},s.a.createElement(N,{questionText:this.state.questionText,valueA:this.state.questionValueA,operator:this.state.questionOperator,valueB:this.state.questionValueB}),s.a.createElement("section",{className:R.a.answerWrap},s.a.createElement(S,{answer:this.state.answer1,outcome:this.state.outcome1,onClick:this.jumpTo}),s.a.createElement(S,{answer:this.state.answer2,outcome:this.state.outcome2,onClick:this.jumpTo}),s.a.createElement(S,{answer:this.state.answer3,outcome:this.state.outcome3,onClick:this.jumpTo})),s.a.createElement(V,{displayProp:this.state.countTransition?"countdown-started":""})),s.a.createElement(W,{display:this.state.showResults,content:this.state.pageText,score:this.state.answerScore,outOf:this.state.questionsTotal,buttonText:this.state.pageButtonText,onClick:this.reset,onNextLevel:this.onNextLevel}))))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(s.a.createElement(Q,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},6:function(e,t,n){e.exports={resultsPageWrap:"ResultsPage_resultsPageWrap__k5t3U",resultsPageContent:"ResultsPage_resultsPageContent__3RQcT",resultsPageTextSmall:"ResultsPage_resultsPageTextSmall__qaIyR",resultsPageTextLarge:"ResultsPage_resultsPageTextLarge__2YhZZ"}}},[[25,1,2]]]);
//# sourceMappingURL=main.40edceff.chunk.js.map