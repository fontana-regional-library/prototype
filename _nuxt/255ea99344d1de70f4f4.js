(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{174:function(t,e,n){"use strict";n.r(e);n(31);var r,s=n(3),u={computed:{eventObject:function(){return this.$store.getters.getEventBySlug(this.$route.params.slug)}},fetch:(r=n.n(s)()(regeneratorRuntime.mark(function t(e){var n;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(0!==(n=e.store).state.authors.length){t.next=4;break}return t.next=4,n.dispatch("getAuthors");case 4:if(0!==n.state.events.length){t.next=7;break}return t.next=7,n.dispatch("getUpcomingEvents");case 7:case"end":return t.stop()}},t,this)})),function(t){return r.apply(this,arguments)})},a=n(13),i=Object(a.a)(u,function(){var t=this.$createElement;return(this._self._c||t)("Event",{attrs:{eventObject:this.eventObject}})},[],!1,null,null,null);i.options.__file="_slug.vue";e.default=i.exports}}]);