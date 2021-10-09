(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{16:function(e,t,n){},18:function(e,t,n){},21:function(e,t,n){},42:function(e,t,n){},43:function(e,t,n){},44:function(e,t,n){},45:function(e,t,n){},46:function(e,t,n){},47:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),c=n(7),r=n.n(c),i=(n(16),n(3)),s=n(4),l=n(6),u=n(5),m=n(8),h=(n(17),n(10)),g=(n(18),n(1)),p=function(e){var t=e.OnBtn;return Object(g.jsx)("button",{type:"button",className:"Button",onClick:t,children:"Load More"})},j=(n(20),n(21),n(11)),d=n.n(j),b=function(){return Object(g.jsx)("div",{className:"loader-container",children:Object(g.jsx)(d.a,{type:"ThreeDots",color:"#3f51b5",height:60,width:60})})},f=(n(42),n(43),function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){var e=this;return Object(g.jsx)(g.Fragment,{children:this.props.images.map((function(t){var n=t.webformatURL,a=t.largeImageURL,o=t.id;return Object(g.jsx)("li",{className:"ImageGalleryItem",onClick:function(){e.props.onModalOpen(),e.props.ongetImg(a)},children:Object(g.jsx)("img",{src:n,alt:"",className:"ImageGalleryItem-image"})},o)}))})}}]),n}(o.a.Component)),O=f,v=(n(44),function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(e=t.call.apply(t,[this].concat(o))).handleKeyDown=function(t){"Escape"===t.code&&e.props.OnModalClose()},e}return Object(s.a)(n,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyDown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyDown)}},{key:"render",value:function(){return Object(g.jsx)("div",{className:"Overlay",onClick:this.props.onClose,children:Object(g.jsx)("div",{className:"Modal",children:Object(g.jsx)("img",{src:this.props.img,alt:""})})})}}]),n}(o.a.Component)),y=v,x=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(e=t.call.apply(t,[this].concat(o))).state={image:null,page:1,modal:!1,largeImg:null,loading:!1,btn:!1},e.onFetch=function(){e.setState({loading:!0,btn:!1}),setTimeout((function(){fetch("https://pixabay.com/api/?q=".concat(e.props.name,"&page=").concat(e.state.page,"&key=").concat("23097756-2661a8d66efd3b5956221c710","&image_type=photo&orientation=horizontal&per_page=12")).then((function(e){return e.json()})).then((function(t){return e.setState((function(e){return{image:[].concat(Object(h.a)(e.image),Object(h.a)(t.hits)),btn:!0}}))})),e.pageIncrement(),e.scrollPage(),e.setState({loading:!1})}),500)},e.modalTogle=function(){e.setState((function(e){return{modal:!e.modal}}))},e.getLargeImg=function(t){e.setState({largeImg:t})},e.ovarlayClose=function(t){t.target===t.currentTarget&&e.modalTogle()},e.scrollPage=function(){setTimeout((function(){window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})}),1e3)},e.pageIncrement=function(){e.setState((function(e){return{page:e.page+1}}))},e}return Object(s.a)(n,[{key:"componentDidUpdate",value:function(e,t){e.name!==this.props.name&&(this.setState({image:[],page:1}),this.onFetch())}},{key:"render",value:function(){return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)("ul",{className:"ImageGallery",children:this.state.image&&Object(g.jsx)(O,{images:this.state.image,onModalOpen:this.modalTogle,ongetImg:this.getLargeImg})}),this.state.btn&&Object(g.jsx)(p,{OnBtn:this.onFetch}),this.state.loading&&Object(g.jsx)(b,{}),this.state.modal&&Object(g.jsx)(y,{onClose:this.ovarlayClose,OnModalClose:this.modalTogle,img:this.state.largeImg})]})}}]),n}(o.a.Component),w=(n(45),function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(e=t.call.apply(t,[this].concat(o))).state={name:""},e.reset=function(){e.setState({name:""})},e.handleNameChange=function(t){e.setState({name:t.target.value})},e.onSubmit=function(t){t.preventDefault(),""!==e.state.name.trim()?(e.reset(),e.props.getName(e.state.name)):m.b.error("Enter the name of the picture")},e}return Object(s.a)(n,[{key:"render",value:function(){return Object(g.jsx)("header",{className:"Searchbar",children:Object(g.jsxs)("form",{className:"SearchForm",onSubmit:this.onSubmit,children:[Object(g.jsx)("button",{type:"submit",className:"SearchForm-button",children:Object(g.jsx)("span",{className:"SearchForm-button-label",children:"Search"})}),Object(g.jsx)("input",{value:this.state.name,onChange:this.handleNameChange,className:"SearchForm-input",type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos"})]})})}}]),n}(o.a.Component)),C=(n(46),function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(e=t.call.apply(t,[this].concat(o))).state={name:""},e.handleNameChange=function(t){e.setState({name:t})},e}return Object(s.a)(n,[{key:"render",value:function(){return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(w,{getName:this.handleNameChange}),Object(g.jsx)(x,{name:this.state.name}),Object(g.jsx)(m.a,{})]})}}]),n}(o.a.Component)),S=C;r.a.render(Object(g.jsx)(S,{}),document.getElementById("root"))}},[[47,1,2]]]);
//# sourceMappingURL=main.e98e5c1b.chunk.js.map