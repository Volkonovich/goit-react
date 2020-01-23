(this.webpackJsonpnew=this.webpackJsonpnew||[]).push([[0],{24:function(e,t,a){e.exports=a(77)},37:function(e,t,a){},77:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(19),l=a.n(r),o=a(3),s=a(4),i=a(6),u=a(5),m=a(7),h=a(8),d=function(e){var t=e.contacts,a=void 0===t?[]:t,n=e.deleteContacts;return c.a.createElement(c.a.Fragment,null,a.map((function(e){return c.a.createElement("div",{key:e.id},c.a.createElement("p",null,e.name),c.a.createElement("p",null,e.number),c.a.createElement("button",{type:"button",onClick:function(){return n(e.id)}},"Delete"))})))},p=a(20),g=a.n(p),b=function(e){var t=e.getInputValue,a=e.searchValue;return c.a.createElement(c.a.Fragment,null,c.a.createElement("input",{value:a,className:"SurName",type:"text",onChange:t,placeholder:"filter"}))},f=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(c)))).state={name:"",number:"",contacts:[],filteredContacts:[],searchValue:""},a.handleInputChangeName=function(e){var t=e.target.value;e.target.value.length<0||a.setState({name:t})},a.handleInputChangeNumber=function(e){var t=e.target.value;console.log("event.target.value",e.target.value),a.setState({number:t})},a.onHandleArray=function(e){if(""!==a.state.name&&""!==a.state.number){var t={name:a.state.name,number:a.state.number,id:g.a.generate()};a.setState((function(e){return{contacts:[].concat(Object(h.a)(e.contacts),[t]),name:"",number:""}}))}},a.getInputValue=function(e){var t=e.target.value;a.setState({searchValue:t})},a.getFilteredContacts=function(){return a.state.contacts.filter((function(e){return e.name.toLowerCase().includes(a.state.searchValue.toLowerCase())}))},a.deleteContacts=function(e){console.log("id",e);var t=a.state.contacts.filter((function(t){return t.id!==e}));a.setState({contacts:t})},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.setState((function(e){return{contacts:[].concat(Object(h.a)(e.contacts),Object(h.a)(JSON.parse(localStorage.getItem("contacts"))))}}))}},{key:"componentDidUpdate",value:function(e,t){t.contacts.length!==this.state.contacts.length&&(console.log(t.contacts.length,this.state.contacts.length),localStorage.setItem("contacts",JSON.stringify(this.state.contacts)))}},{key:"render",value:function(){var e=[];return e=""!==this.state.searchValue?this.getFilteredContacts():this.state.contacts,c.a.createElement(c.a.Fragment,null,c.a.createElement("p",null,"Name"),c.a.createElement("input",{value:this.state.name,className:"ForName",type:"text",onChange:this.handleInputChangeName,placeholder:"Name"}),c.a.createElement("p",null,"Number"),c.a.createElement("input",{value:this.state.number,className:"SurName",type:"text",onChange:this.handleInputChangeNumber,placeholder:"Number"}),c.a.createElement("button",{name:"Add contact",type:"button",onClick:this.onHandleArray},"add"),c.a.createElement("br",null),c.a.createElement("h2",null,"Contacts"),c.a.createElement(b,{getInputValue:this.getInputValue,searchValue:this.state.searchValue}),c.a.createElement(d,{contacts:e,deleteContacts:this.deleteContacts}))}}]),t}(n.Component),v=function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("h1",null,"Phonebook"),c.a.createElement(f,null))}}]),t}(n.Component),E=a(23),y=function(e){var t=e.getSearchValue,a=e.search,n=e.handleSubmit;return c.a.createElement("div",null,c.a.createElement("header",{className:"Searchbar"},c.a.createElement("form",{onSubmit:n,className:"SearchForm"},c.a.createElement("button",{type:"submit",className:"SearchForm-button "},c.a.createElement("span",{className:"SearchForm-button-label"},"Search")),c.a.createElement("input",{onChange:t,className:"SearchFormInput",type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",value:a}))))},O=(a(37),function(e){var t=e.src,a=e.id,n=e.openModal;return c.a.createElement("li",{className:"ImageGalleryItem"},c.a.createElement("img",{onClick:n,src:t,id:a,alt:"der",className:"ImageGalleryItemImage"}))}),S=function(e){var t=e.id,a=e.object,n=e.handleKeyPress,r=e.handleBackdropClick;return window.addEventListener("keyup",n),c.a.createElement("div",{className:"Overlay",onClick:r,id:t},c.a.createElement("div",{className:"Modal"},c.a.createElement("img",{src:a.webformatURL,alt:"sfcw"})))},j=function(e){var t=e.images,a=e.openModal,n=e.isModalOpen,r=e.id,l=e.object,o=e.handleKeyPress,s=e.handleBackdropClick;return c.a.createElement(c.a.Fragment,null,n&&c.a.createElement(S,{id:r,object:l,handleKeyPress:o,handleBackdropClick:s}),c.a.createElement("ul",{className:"ImageGallery"},t.map((function(e){return c.a.createElement(O,{key:e.id,src:e.webformatURL,id:e.id,openModal:a})}))))},C=function(e){var t=e.handleLoad;return c.a.createElement("button",{className:"Button",onClick:t},"Load more")},k=a(21),N=a.n(k),I=a(22),w=a.n(I),A="14452774-766286a273532ef73a45b39e7",V=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(c)))).state={dataApi:[],isModalOpen:!1,id:null,object:{},search:"",page:1,isLoading:!1},a.openModal=function(e){console.log("e.target.id",e.target.id);var t=a.state.dataApi.filter((function(t){return t.id==e.target.id})),n=Object(E.a)(t,1)[0];a.setState({isModalOpen:!0,id:e.target.id,object:n})},a.getSearchValue=function(e){a.setState({search:e.target.value})},a.getData=function(){a.setState({isLoading:!0}),w.a.get("https://pixabay.com/api/?q=".concat(a.state.search,"&page=").concat(a.state.page,"&key=").concat(A,"&image_type=photo&orientation=horizontal&per_page=12")).then((function(e){a.setState((function(t){return{page:t.page+1,dataApi:[].concat(Object(h.a)(t.dataApi),Object(h.a)(e.data.hits))}}))})).finally((function(){return a.setState({isLoading:!1})}))},a.handleSubmit=function(e){e.preventDefault(),a.getData()},a.handleLoad=function(e){a.getData()},a.close=function(){a.setState({isModalOpen:!1})},a.handleKeyPress=function(e){"Escape"===e.code&&a.close()},a.handleBackdropClick=function(e){Number(e.target.id)===Number(a.state.object.id)&&a.close()},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidUpdate",value:function(e,t){t.search===this.state.search&&t.page===this.state.page||t.search!==this.state.search&&this.setState({dataApi:[],page:1}),window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})}},{key:"render",value:function(){console.log("this.state.dataApi",this.state.dataApi);var e=this.state.isLoading;return c.a.createElement("div",{className:"App"},c.a.createElement(y,{search:this.state.search,getSearchValue:this.getSearchValue,handleSubmit:this.handleSubmit}),c.a.createElement(j,{handleKeyPress:this.handleKeyPress,handleBackdropClick:this.handleBackdropClick,object:this.state.object,images:this.state.dataApi,openModal:this.openModal,isModalOpen:this.state.isModalOpen,id:this.state.id}),e&&c.a.createElement(N.a,{type:"ThreeDots",color:"#3f51b5",height:100,width:100,timeout:3e3}),c.a.createElement(C,{handleLoad:this.handleLoad}))}}]),t}(n.Component),L=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(c)))).state={},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement(V,null),c.a.createElement(v,null))}}]),t}(n.Component);l.a.render(c.a.createElement(L,null),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.d888bd21.chunk.js.map