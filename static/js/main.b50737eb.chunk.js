(this["webpackJsonpreact-03-image-finder"]=this["webpackJsonpreact-03-image-finder"]||[]).push([[0],{21:function(e,t,a){e.exports=a(66)},22:function(e,t,a){},66:function(e,t,a){"use strict";a.r(t);a(22);var r=a(3),n=a(4),c=a(5),u=a(6),s=a(7),i=a(0),o=a.n(i),l=(a(24),a(17)),p=a.n(l),m=a(18),h=a.n(m),d=function(e,t){return h.a.get("https://pixabay.com/api/?image_type=photo&orientation=horizontal&per_page=12&key=".concat("15321800-0af55316b9677918b25647eb1","&q=").concat(e,"&page=").concat(t)).then((function(e){return e.data.hits}))},f=a(19),g={searchQuery:""},y=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(n.a)(this,a);for(var c=arguments.length,u=new Array(c),s=0;s<c;s++)u[s]=arguments[s];return(e=t.call.apply(t,[this].concat(u))).state=Object(f.a)({},g),e.handleChange=function(t){t.preventDefault(),e.setState(Object(r.a)({},t.target.name,t.target.value))},e.handleSubmit=function(t){t.preventDefault(),e.props.updateQuery(e.state.searchQuery)},e}return Object(c.a)(a,[{key:"render",value:function(){return o.a.createElement("form",{className:"search-form",onSubmit:this.handleSubmit},o.a.createElement("button",{type:"submit",className:"search-form__button"},o.a.createElement("span",{className:"search-form__button-label"},"Search")),o.a.createElement("input",{onChange:this.handleChange,name:"searchQuery",className:"search-form__input",type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos"}))}}]),a}(i.Component),b=function(e){var t=e.updateQuery;return o.a.createElement("header",{className:"search-bar"},o.a.createElement(y,{updateQuery:t}))},v=function(e){var t=e.picture;return o.a.createElement(o.a.Fragment,null,o.a.createElement("img",{"data-src":t.largeImageURL,src:t.webformatURL,alt:t.id,className:"image-gallery__img"}))},E=function(e){var t=e.pictures;return o.a.createElement("ul",{className:"image-gallery"},t.map((function(e){return o.a.createElement("li",{className:"image-gallery__item",key:e.id},o.a.createElement(v,{picture:e}))})))},S=function(e){var t=e.page,a=e.loadMorePictures;return o.a.createElement("div",{className:"load-more"},o.a.createElement("button",{className:"load-more__btn",onClick:function(){return a(t)}},"load"))},N=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(n.a)(this,a);for(var c=arguments.length,u=new Array(c),s=0;s<c;s++)u[s]=arguments[s];return(e=t.call.apply(t,[this].concat(u))).state={pictures:[],query:"",page:1,isLoading:!1,error:null},e.updateState=function(t,a){e.setState(Object(r.a)({},t,a))},e.updateQuery=function(t){t!==e.state.query&&e.resetBeforeNewQuery(),e.updateState("query",t)},e.loadMorePictures=function(t){t++,e.updateState("page",t)},e.resetBeforeNewQuery=function(){e.updateState("page",1),e.updateState("pictures",[])},e}return Object(c.a)(a,[{key:"componentDidUpdate",value:function(e,t,a){var r=this;t.pictures!==this.state.pictures&&this.state.pictures.length>12&&window.scrollTo({top:document.body.scrollHeight,behavior:"smooth"}),t.query===this.state.query&&t.page===this.state.page||(this.setState({isLoading:!0}),d(this.state.query,this.state.page).then((function(e){return r.setState((function(t){return{pictures:t.pictures.concat(e)}}))})).catch((function(e){return r.setState({error:e})})).finally((function(){return r.setState({isLoading:!1})})))}},{key:"render",value:function(){return o.a.createElement("div",{className:"page-container"},o.a.createElement(b,{updateQuery:this.updateQuery}),this.state.pictures.length>0&&o.a.createElement(E,{pictures:this.state.pictures}),this.state.isLoading&&o.a.createElement(p.a,{className:"loader",type:"ThreeDots",color:"#e4e4e4",height:80,width:80}),this.state.pictures.length>=12&&o.a.createElement(S,{page:this.state.page,loadMorePictures:this.loadMorePictures}))}}]),a}(i.Component),_=a(20);a.n(_).a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(N,null)),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.b50737eb.chunk.js.map