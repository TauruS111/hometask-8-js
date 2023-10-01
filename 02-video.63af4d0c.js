!function(){var e=new Player("vimeo-player"),t="videoplayer-current-time",o=localStorage.getItem(t);o&&e.setCurrentTime(o),e.on("timeupdate",throttle((function(e){localStorage.setItem(t,e.seconds)}),1e3));e.on("play",(function(e){}))}();
//# sourceMappingURL=02-video.63af4d0c.js.map
