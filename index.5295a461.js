!function(){function e(e){return e&&e.__esModule?e.default:e}var n={};Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")};var t={};function a(e,n){for(var t=0;t<n.length;t++){var a=n[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,n,t){n&&a(e.prototype,n);t&&a(e,t);return e};var r=function(){"use strict";function a(){e(n)(this,a),this.searchQuery="",this.page=1}return e(t)(a,[{key:"fetchImages",value:function(){var e=this;console.log(this);var n="https://pixabay.com/api/?key=36301622-891f1a79dbe681583e2d486bc&q=".concat(this.searchQuery,"&image_type=photo&per_page=40&page=").concat(this.page);return fetch(n).then((function(e){return e.json()})).then((function(n){return e.page+=1,n.hits}))}},{key:"resetPage",value:function(){this.page=1}},{key:"query",get:function(){return this.searchQuery},set:function(e){this.searchQuery=e}}]),a}();function o(e){return'\n    <div class="photo-card">\n        <a class="photo-card-link" href="'.concat(e.largeImageURL,'">\n            <img src="').concat(e.webformatURL,'" alt="').concat(e.tags,'" loading="lazy" />\n            <div class="info">\n                <p class="info-item">\n                    <b>Likes:</b> ').concat(e.likes,'\n                </p>\n                <p class="info-item">\n                    <b>Views:</b> ').concat(e.views,'\n                </p>\n                <p class="info-item">\n                    <b>Comments:</b> ').concat(e.comments,'\n                </p>\n                <p class="info-item">\n                    <b>Downloads:</b> ').concat(e.downloads,"\n                </p>\n            </div>\n        </a>\n    </div>\n    ")}var c={searchForm:document.querySelector(".search-form"),imageContainer:document.querySelector(".gallery"),loadMoreBtn:document.querySelector(".load-more")},i=new r;function s(e){var n=e.map((function(e){return o(e)})).join("");c.imageContainer.insertAdjacentHTML("beforeend",n)}c.searchForm.addEventListener("submit",(function(e){e.preventDefault(),i.query=e.currentTarget.elements.query.value,i.resetPage(),i.fetchImages().then(s)})),c.loadMoreBtn.addEventListener("click",(function(e){i.fetchImages().then(s)}))}();
//# sourceMappingURL=index.5295a461.js.map
