const e=new Player("vimeo-player"),t=localStorage.getItem("videoplayer-current-time");t&&e.setCurrentTime(t),e.on("timeupdate",throttle((e=>{localStorage.setItem("videoplayer-current-time",e.seconds)}),1e3));e.on("play",(function(e){}));
//# sourceMappingURL=02-video.5cff39fd.js.map
