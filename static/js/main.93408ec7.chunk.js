(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,a){e.exports=a(24)},17:function(e,t,a){},21:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},22:function(e,t,a){},24:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(3),i=a.n(c),s=(a(15),a(17),a(1)),o=a.n(s),l=a(4),p=a(5),m=a(6),u=a(8),d=a(7),g=a(9),f=(a(21),a(22),function(e){return r.a.createElement("form",{onSubmit:e.getRecipe},r.a.createElement("input",{className:"form__input",type:"text",name:"recipeName"}),r.a.createElement("button",{className:"form__button"},"Search"))}),h=function(e){return r.a.createElement("div",{className:"container"},console.log(e),e.recipes&&r.a.createElement("p",{className:"ingredient_container"},"Showing ",r.a.createElement("span",{className:"recipe_num"},e.recipes.length)," Recipes containing ",r.a.createElement("span",{className:"ingredient","data-ingredient":e.ingredient})),";",e.recipes&&r.a.createElement("div",{className:"row"},e.recipes.map(function(e){return r.a.createElement("div",{className:"col-md-4",key:e.recipe_id},r.a.createElement("div",{className:"recipes__box"},r.a.createElement("img",{className:"recipe__box-img",src:e.image_url,alt:e.title}),r.a.createElement("div",{className:"recipe__text"},r.a.createElement("h5",{className:"recipes__title"},(e.title.length,"".concat(e.title))),r.a.createElement("p",{className:"recipes__subtitle"},"Publisher: ",r.a.createElement("span",null,e.publisher))),r.a.createElement("a",{className:"recipe_buttons",target:"_blank",href:e.source_url},"View Recipe")))})))},v="6877f4b9c87de4c5665431af1d52b9b3",E=function(e){function t(){var e,a;Object(p.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={recipes:[],ingredient:void 0},a.getRecipe=function(){var e=Object(l.a)(o.a.mark(function e(t){var n,r,c;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n=t.target.elements.recipeName.value,e.next=4,fetch("https://www.food2fork.com/api/search?key=".concat(v,"&q=").concat(n));case 4:return r=e.sent,e.next=7,r.json();case 7:c=e.sent,a.setState({recipes:c.recipes,ingredient:n});case 9:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),a.componentDidMount=function(){var e=localStorage.getItem("recipes"),t=localStorage.getItem("ingredient"),n=JSON.parse(e);a.setState({recipes:n,ingredient:t})},a.componentDidUpdate=function(){var e=JSON.stringify(a.state.recipes);localStorage.setItem("recipes",e),localStorage.setItem("ingredient",a.state.ingredient)},a}return Object(g.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("h1",null,"Recipe App")),r.a.createElement(f,{getRecipe:this.getRecipe}),r.a.createElement(h,{recipes:this.state.recipes,ingredient:this.state.ingredient}))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[10,2,1]]]);
//# sourceMappingURL=main.93408ec7.chunk.js.map