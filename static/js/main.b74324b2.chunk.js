(this["webpackJsonpgoit-react-hw-04-hooks-feedback"]=this["webpackJsonpgoit-react-hw-04-hooks-feedback"]||[]).push([[0],[,,function(e,t,n){e.exports={item:"Statistics_item__16e3I"}},,,function(e,t,n){e.exports={button:"FeedbackOptions_button__30RIG"}},function(e,t,n){e.exports={title:"Section_title__urJ4K",sectionWrapper:"Section_sectionWrapper__9u2AC"}},,,function(e,t,n){e.exports={App:"App_App__2u8Fd"}},function(e,t,n){},,,,,function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),s=n(7),i=n.n(s),r=(n(15),n(8)),o=n(3),l=n(9),u=n.n(l),b=n(5),j=n.n(b),d=n(0),p=function(e){var t=e.options,n=e.onLeaveFeedback;return Object(d.jsx)("div",{className:j.a.Wrapper,children:t.map((function(e){return Object(d.jsx)("button",{className:j.a.button,type:"button",onClick:n,value:e,children:e},e)}))})},h=n(6),O=n.n(h),f=function(e){var t=e.title,n=e.children;return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("h2",{className:O.a.title,children:t}),Object(d.jsx)("div",{className:O.a.sectionWrapper,children:n})]})},m=n(2),x=n.n(m),v=n(10),k=n.n(v),g=function(e){var t=e.message;return Object(d.jsx)("p",{className:k.a.notification,children:t})},_=function(e){var t=e.good,n=e.neutral,a=e.bad,c=e.total,s=e.positivePercentage;return Object(d.jsx)(d.Fragment,{children:c?Object(d.jsxs)("ul",{className:x.a.list,children:[Object(d.jsxs)("li",{className:x.a.item,children:["Good: ",t]}),Object(d.jsxs)("li",{className:x.a.item,children:["Neutral: ",n]}),Object(d.jsxs)("li",{className:x.a.item,children:["Bad: ",a]}),Object(d.jsxs)("li",{className:x.a.item,children:["Total: ",c]}),Object(d.jsxs)("li",{className:x.a.item,children:["Positive feedback: ",s,"%"]})]}):Object(d.jsx)(g,{message:"No feedback given"})})};var N=function(){var e=Object(a.useState)(0),t=Object(o.a)(e,2),n=t[0],c=t[1],s=Object(a.useState)(0),i=Object(o.a)(s,2),l=i[0],b=i[1],j=Object(a.useState)(0),h=Object(o.a)(j,2),O=h[0],m=h[1],x=function(){return n+l+O};return Object(d.jsxs)("div",{className:u.a.App,children:[Object(d.jsx)(f,Object(r.a)({title:"Please leave a feedback",children:a.Children},"children",Object(d.jsx)(p,{options:["good","neutral","bad"],onLeaveFeedback:function(e){switch(e.target.value){case"good":c((function(e){return e+1}));break;case"neutral":b((function(e){return e+1}));break;case"bad":m((function(e){return e+1}));break;default:return}}}))),Object(d.jsx)(f,{title:"Statistics",children:Object(d.jsx)(_,{good:n,neutral:l,bad:O,total:x(),positivePercentage:function(){var e=x();return Math.round(n/e*100)}()})})]})};i.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(N,{})}),document.getElementById("root"))}],[[17,1,2]]]);
//# sourceMappingURL=main.b74324b2.chunk.js.map