(this.webpackJsonpnew=this.webpackJsonpnew||[]).push([[0],[,function(e,a,t){e.exports={profile:"Profile_profile__17YRG",description:"Profile_description__br6qt",avatar:"Profile_avatar__2-ZW2",name:"Profile_name__ibQwE",tag:"Profile_tag__101_p",location:"Profile_location__3qXcR",stats:"Profile_stats__olZTX",label:"Profile_label__qeO_-",quantity:"Profile_quantity__10xhY"}},function(e,a,t){e.exports={statistics:"Statistics_statistics__35syV",statlist:"Statistics_statlist__1BcdP",title:"Statistics_title__12heL",label:"Statistics_label__gmvuJ"}},function(e){e.exports=JSON.parse('[{"id":"id-1","label":".docx","percentage":22},{"id":"id-2","label":".pdf","percentage":4},{"id":"id-3","label":".mp3","percentage":17},{"id":"id-4","label":".psd","percentage":47},{"id":"id-5","label":".pdf","percentage":10}]')},,,function(e){e.exports=JSON.parse('{"name":"Jacques Gluke","tag":"jgluke","location":"Ocho Rios, Jamaica","avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/r_oy/128.jpg","stats":{"followers":5603,"views":4827,"likes":1308}}')},function(e,a,t){e.exports=t(13)},,,,,function(e,a,t){},function(e,a,t){"use strict";t.r(a);var l=t(0),s=t.n(l),n=t(5),i=t.n(n),c=t(6),r=t(3),o=(t(12),t(1)),m=t.n(o),p=function(e){var a=e.user,t=a.name,l=a.tag,n=a.avatar,i=a.location,c=a.stats,r=c.followers,o=c.views,p=c.likes;return s.a.createElement("div",{className:m.a.profile},s.a.createElement("div",{className:m.a.description},s.a.createElement("img",{src:n,alt:"user avatar",className:m.a.avatar}),s.a.createElement("p",{className:m.a.name},t),s.a.createElement("p",{className:m.a.tag},"@",l),s.a.createElement("p",{className:m.a.location},i)),s.a.createElement("ul",{className:m.a.stats},s.a.createElement("li",null,s.a.createElement("span",{className:m.a.label},"Followers"),s.a.createElement("span",{className:m.a.quantity},r)),s.a.createElement("li",null,s.a.createElement("span",{className:m.a.label},"Views"),s.a.createElement("span",{className:m.a.quantity},o)),s.a.createElement("li",null,s.a.createElement("span",{className:m.a.label},"Likes"),s.a.createElement("span",{className:m.a.quantity},p))))},_=t(2),u=t.n(_),f=function(e){var a=e.items,t=e.title;return console.log(a),s.a.createElement("section",{className:u.a.statistics},t?s.a.createElement("h2",{className:u.a.title},t):"",s.a.createElement("ul",{className:u.a.statlist},a.map((function(e){return s.a.createElement("li",{className:u.a.item,key:e.id},s.a.createElement("span",{className:u.a.label},e.label),s.a.createElement("span",{className:u.a.percentage},e.percentage,"$"))}))))};var E=function(e){return console.log(e),s.a.createElement("div",null,s.a.createElement(p,{user:e.user}),s.a.createElement(f,{items:e.statistical,title:"File upload"}))};console.log(r),i.a.render(s.a.createElement(E,{user:c,statistical:r}),document.getElementById("root"))}],[[7,1,2]]]);
//# sourceMappingURL=main.7b237814.chunk.js.map