(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{145:function(e,t,a){"use strict";a.r(t);var n=a(34),r=a.n(n),i=a(7),o=a.n(i),s=a(0),l=a.n(s),c=a(168),m=a.n(c),u=a(154),h=a(4),p=a.n(h),g=a(173),d=a.n(g),f=function(e){function t(){var t;return(t=e.call(this)||this).state={lightboxIsOpen:!1,currentImage:0},t.closeLightbox=t.closeLightbox.bind(r()(t)),t.gotoNext=t.gotoNext.bind(r()(t)),t.gotoPrevious=t.gotoPrevious.bind(r()(t)),t.gotoImage=t.gotoImage.bind(r()(t)),t.handleClickImage=t.handleClickImage.bind(r()(t)),t.openLightbox=t.openLightbox.bind(r()(t)),t}o()(t,e);var a=t.prototype;return a.openLightbox=function(e,t){t.preventDefault(),this.setState({currentImage:e,lightboxIsOpen:!0})},a.closeLightbox=function(){this.setState({currentImage:0,lightboxIsOpen:!1})},a.gotoPrevious=function(){this.setState({currentImage:this.state.currentImage-1})},a.gotoNext=function(){this.setState({currentImage:this.state.currentImage+1})},a.gotoImage=function(e){this.setState({currentImage:e})},a.handleClickImage=function(){this.state.currentImage!==this.props.images.length-1&&this.gotoNext()},a.renderGallery=function(){var e=this.props.images;if(e){var t=e.map(function(e,t){return l.a.createElement("article",{className:"6u 12u$(xsmall) work-item",key:t},l.a.createElement("a",{className:"image fit thumb",href:e.src},l.a.createElement("img",{src:e.thumbnail})),l.a.createElement("h3",null,e.caption),l.a.createElement("p",null,e.description))});return l.a.createElement("div",{className:"row"},t)}},a.render=function(){return l.a.createElement("div",null,this.renderGallery(),l.a.createElement(d.a,{currentImage:this.state.currentImage,images:this.props.images,isOpen:this.state.lightboxIsOpen,onClose:this.closeLightbox}))},t}(s.Component);f.displayName="Gallery",f.propTypes={images:p.a.array};var b=f,E=a(217),I=a.n(E),y=a(218),w=a.n(y),v=a(219),k=a.n(v),x=a(220),A=a.n(x),N=(a(221),a(222),a(223)),S=a.n(N),R=a(224),B=a.n(R),C=a(225),G=a.n(C),L=a(226),P=a.n(L),Q=a(227),j=a.n(Q),M=a(228),Y=a.n(M),J=[{id:"3",src:S.a,thumbnail:I.a,caption:l.a.createElement("a",{href:"https://benhaugen.github.io/pickupfrontend/",target:"_blank"},"PickUp"),description:"Built with React.js, Ruby on Rails and PostgreSQL, PickUp allows users to search their area for a variety of pick-up sports games. Users can also organize their own pick-up games."},{id:"4",src:B.a,thumbnail:w.a,caption:l.a.createElement("a",{href:"https://pro-fitness.herokuapp.com/",target:"_blank"},"Pro Fitness"),description:"Created primarily with Ruby on Rails and Bulma CSS Framework, Pro Fitness allows users to input past workouts, look at their progressions and get inspiration on workouts to do in the future."},{id:"5",src:G.a,thumbnail:k.a,caption:l.a.createElement("a",{href:"https://basketballcards.herokuapp.com/",target:"_blank"},"Basketball Cards"),description:"This React.js application allows users to view current and former NBA players, add them to their roster and see if their team can outscore some of the greatest historical teams in NBA history!"},{id:"6",src:P.a,thumbnail:A.a,caption:l.a.createElement("a",{href:"https://eventmatcher2019.herokuapp.com/",target:"_blank"},"EventMatchr"),description:"Using vanilla JavaScript and TicketMasters API, EventMatchr allows users to look for events in their area, save favorited events and purchase tickets through TicketMaster affiliates."}],z=function(e){function t(){var t;return(t=e.call(this)||this).state={lightboxIsOpen:!1,currentImage:0},t.closeLightbox=t.closeLightbox.bind(r()(t)),t.gotoNext=t.gotoNext.bind(r()(t)),t.gotoPrevious=t.gotoPrevious.bind(r()(t)),t.openLightbox=t.openLightbox.bind(r()(t)),t.handleClickImage=t.handleClickImage.bind(r()(t)),t}o()(t,e);var a=t.prototype;return a.openLightbox=function(e,t){t.preventDefault(),this.setState({currentImage:e,lightboxIsOpen:!0})},a.closeLightbox=function(){this.setState({currentImage:0,lightboxIsOpen:!1})},a.gotoPrevious=function(){this.setState({currentImage:this.state.currentImage-1})},a.gotoNext=function(){this.setState({currentImage:this.state.currentImage+1})},a.handleClickImage=function(){this.state.currentImage!==this.props.images.length-1&&this.gotoNext()},a.render=function(){return l.a.createElement(u.a,null,l.a.createElement(m.a,{title:"Ben Haugen Portfolio",meta:!0,name:"description",content:"Site description",link:[{rel:"icon",type:"image/png",sizes:"32x32",href:""+Y.a}]},l.a.createElement("html",{lang:"en"})),l.a.createElement("div",{id:"main"},l.a.createElement("section",{id:"one"},l.a.createElement("img",{src:j.a,alt:"ben"}),l.a.createElement("header",{className:"major"},l.a.createElement("h2",null,"How I Got Here")),l.a.createElement("p",null,"Before starting my coding career at Flatiron, I worked in a variety of different roles, all around the world. Most recently I have had the pleasure of teaching younger kids. In the United States, I was involved in a few different programs in which I taught children the fundamentals of both golf and tennis. Abroad, specifically Spain and Vietnam, I taught English as a second language to mostly elementary school students. "),l.a.createElement("p",null,"These experiences, especially teaching English, really helped sharpen my mind and allowed me to become an excellent communicator. When people don’t speak the same language as you, having effective communication that goes beyond just words is integral. This particular skill has allowed for a pretty smooth transition into code because I didn’t always speak the coding “language” that my peers or instructors taught, but I was still able to effectively communicate with them and have a good understanding of what was going on. This will be really beneficial as my coding career progresses. My other jobs in sports, sales and customer service have made me a really well rounded person and I know that I can thrive in any work environment I am put in."),l.a.createElement("p",null,"I decided to make a career change and attend Flatiron because I really want to be able to help create the sorts of things that I use every day. Websites and applications are something that I have used not only in my spare time but during all my jobs as well. It would be extremely difficult to teach another language without some of the tools that amazing developers have created. Technology isn’t just the future, it’s the present and I really want to put my brain power to the ultimate test and help create applications that will be used by tens of thousands of people and really help benefit their way of life. Web applications don’t just bring joy to peoples’ lives but they make them easier and much less stressful. I want to be a part of that. ")),l.a.createElement("section",{id:"two"},l.a.createElement("h2",null,"Recent Work"),l.a.createElement(b,{images:J.map(function(e){e.id;return{thumbnail:e.thumbnail,caption:e.caption,description:e.description}})})),l.a.createElement("section",{id:"three"},l.a.createElement("h2",null,"Get In Touch"),l.a.createElement("p",null,"If you think I would be a good fit for your organization or simply want to learn a little more about me, please do not hesitate to reach out."),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"8u 12u$(small)"}),l.a.createElement("div",{className:"4u 12u$(small)"},l.a.createElement("ul",{className:"labeled-icons"},l.a.createElement("li",null,l.a.createElement("h3",{className:"icon fa-mobile"},l.a.createElement("span",{className:"label"},"Phone")),"360-907-2076"),l.a.createElement("li",null,l.a.createElement("h3",{className:"icon fa-envelope-o"},l.a.createElement("span",{className:"label"},"Email")),"benhaugen88@gmail.com"),l.a.createElement("li",null,l.a.createElement("h3",{className:"icon fa-home"},l.a.createElement("span",{className:"label"},"Address")),"4541 W Sheridan St",l.a.createElement("br",null),"Seattle, WA 98199",l.a.createElement("br",null),"United States")))))))},t}(l.a.Component);t.default=z},150:function(e,t,a){e.exports=a.p+"static/benny-b0dec0058ae99559be325276b4e8c970.png"},154:function(e,t,a){"use strict";var n=a(7),r=a.n(n),i=a(0),o=a.n(i),s=(a(155),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){return o.a.createElement("div",{id:"footer"},o.a.createElement("div",{className:"inner"},o.a.createElement("ul",{className:"icons"},o.a.createElement("li",null,o.a.createElement("a",{href:"https://medium.com/@ben1232jazz",target:"_blank",className:"icon fa-medium"},o.a.createElement("span",{className:"label"},"Twitter"))),o.a.createElement("li",null,o.a.createElement("a",{href:"https://github.com/BenHaugen",target:"_blank",className:"icon fa-github"},o.a.createElement("span",{className:"label"},"Github"))),o.a.createElement("li",null,o.a.createElement("a",{href:"https://www.linkedin.com/in/benhaugen88/",target:"_blank",className:"icon fa-linkedin"},o.a.createElement("span",{className:"label"},"Dribbble"))))))},t}(o.a.Component)),l=a(150),c=a.n(l),m=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){return o.a.createElement("header",{id:"header"},o.a.createElement("div",{className:"inner"},o.a.createElement("a",{href:"#",className:"image avatar"},o.a.createElement("img",{src:c.a,alt:""})),o.a.createElement("h1",null,o.a.createElement("strong",null,"Ben Haugen")),"◆ Full-Stack Software Engineer",o.a.createElement("br",null),"◆ Flatiron School Graduate",o.a.createElement("br",null)),o.a.createElement(s,null))},t}(o.a.Component),u=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.children;return o.a.createElement("div",null,o.a.createElement(m,null),e)},t}(o.a.Component);t.a=u},217:function(e,t,a){e.exports=a.p+"static/pickup3-a1e24ee3f17a030b1188466f6073d2d7.png"},218:function(e,t,a){e.exports=a.p+"static/pro-fae3d54478e553e2e00c041273d186df.png"},219:function(e,t,a){e.exports=a.p+"static/cards-63f03be75e84f782b5da4c94f8f143d6.png"},220:function(e,t,a){e.exports=a.p+"static/event-54d00a247cad5232e5fcba01fc666e93.png"},221:function(e,t,a){e.exports=a.p+"static/01-ce87a7b005c8d7be981ccd8137fcba3b.jpg"},222:function(e,t,a){e.exports=a.p+"static/02-6b930b4d9fa8b3049018335dccf73ce1.jpg"},223:function(e,t,a){e.exports=a.p+"static/03-527df6325a53113613522e648f6c2d4c.jpg"},224:function(e,t,a){e.exports=a.p+"static/04-21d06c5d186485c6e486f7745faeb5b9.jpg"},225:function(e,t,a){e.exports=a.p+"static/05-6c7ec15e9ddfe636dbd8a07070266ef5.jpg"},226:function(e,t,a){e.exports=a.p+"static/06-4bc7a84922de28318f2ec45282e1bffe.jpg"},227:function(e,t,a){e.exports=a.p+"static/ben3-71e4d62d6c1a119416285ef9b3384e1a.jpg"},228:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAEbElEQVRYR+1XbUxbVRh+zr23l96WfkGQjTk6XCcgEseCZIMthMRmm2EGItE4lISMRBdnMP5Q48jiok6jMUtQY9z4oc5tuk1EHYNNBujwI9lIhovLPggRtsGUwChtaXv7ccw5t7QSW/2F/cP5dXrPe973eZ/3ed/0EFBK7G13XgHosyBkGQEIFnFRgILS2wD5YLTJto/YD07vJgSvL2LMpK4pRQuxH5waJ4QsTw0AOkHsbdORxaY9WXKsHGRV2zRNRfbzMZcALDGQlAGDBNQ4ZGxYrsNdBgI1DIy5w+i9EUTvWAjJlGuWCTL0BN4gxaRvodX2AhkX/wzh8nQkpvuEACpyJOyvNCLLIHBHgTCFLY2AEG1I9t1Q8XSPF8Gon812HWodMkqzJWQqAre5Oh3Clq/csUDVeTq0VhnReMaD72+GkgPItwn4bKsJX1wNoP26Cnc0kyyFYF+FAQ/ZZX655UcvDl9R0VKmYEexHr4QxU13GA6ryIEeuuzHnp993JbB7q0zY5VFxNZ2F67c+RcG9KIGzh8GXl2vINsoYOdZL//msAj4rs7C98euBfDSuTm0b0vH8WsqTlxXsTZLxLFqMz9vPO1GfzTTB7O17+EIRdGnMwiE45MnqQYKMgScqjGjY1jFCz/M8RurLQJ6ogA+HPLh7Qt+iAQIR0v91kYDHs9PQzBMUXJ4Bt6gFmh3mYKmYj2GZ0JwfhkvC2cn2SR8o0LB9gI93r0wh4HxENZYRZQtk1B3bxqmfBFs+3oWE964yCQCnK+3wJom4JeJIJ445Yml2V1rQn6GhM6RAHb1acnMr4QAmIyYswy9gKYzbrRWpcOg0wQYoRQ7TnvQfysuJCbQxqI0PFeicBsm3NkA5baMnZUmgeti/6APrRf9/w3g/kwR39aYQSlF6REXWHZ5FhEbV0jYtVbhAeq73BiaDKPAJuDIwybY9Jr62RqbDfM21UsEJh2Jgd/Z40H3aLQuUduEDDQUythbbuSOKo/PxhwrEnDpKStEgWDwjyDqTnpgNwnISRewd4MBa2wiJuciKDvqit1pLtHj+XUaM84TLgy74h2QVAOvlSt4slCPn8aDqO+K15JdGIyWxh+iKPxkhjuWBeBSgxWySND9uxrrGnb2XpUR1ffIvAOY/fzsSKgBpmiW5TubjNiSJ//DGZtyDIAkEHjUCIoPaZnelyGgs1ZrTyba94cCMQY6HjHhgSwJE94Iyj+PM5MQgMMqoKvWjAgFz+bkiIrmfi//nW0geLPCgKpcbRCxQfXygKZoZ66EA04T3zf3efDNSLzOPY+asdoq4repEKo7FrZgwhJsypGwZ70BDps2kdiE86gUmQqBEB3FA7dUPHPWG+tzZ64OB5zp3L6hy41z4/EO+XizEZV3yzh/O4jHOheWM6kG2MG6LBGVK3UoyhR5OzIgI64wesaCC2Y5s12RTvBiqYLhmQg++tUP9W86Y8xV58kYdbO7cWAJSxAr3P+4WfpDssRA6h8mqX+apfpxmurn+V8h9/a0x++JCgAAAABJRU5ErkJggg=="}}]);
//# sourceMappingURL=component---src-pages-index-js-4ad379134eb16935c469.js.map