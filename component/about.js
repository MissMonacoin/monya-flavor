const coinUtil = require("../js/coinUtil")
module.exports=require("../js/lang.js")({ja:require("./ja/about.html"),en:require("./en/about.html")})({
  data(){
    return {

    }
  },
  store:require("../js/store.js"),
  methods:{
    goToTwitter(id){
      this.openLink("https://twitter.com/"+id)
    },
    openLink(url){
      coinUtil.openUrl(url)
    }
  }
})
