/*! Built with http://stenciljs.com */
lazyiframe.loadComponents("hddacy8x",function(e,t,n,i,r){var o=function(){function e(){}return e.prototype.componentDidLoad=function(){var e=this;"IntersectionObserver"in window?(this.io=new IntersectionObserver(function(t){t[0].isIntersecting&&(e.handleIframe(),e.cleanup())}),this.io.observe(this.el.querySelector("iframe"))):this.handleIframe()},e.prototype.componentDidUnload=function(){this.cleanup()},e.prototype.handleIframe=function(){this.realSrc=this.src},e.prototype.cleanup=function(){this.io&&(this.io.disconnect(),this.io=null)},e.prototype.render=function(){return t("div",0,t("iframe",{p:{frameBorder:"0",title:this.title,allowFullScreen:!0,src:this.realSrc}}))},e}();e["LAZY-IFRAME"]=o},["LAZY-IFRAME",[["el",7],["realSrc",5],["src",1],["title",1]],{}]);