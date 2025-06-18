(function(){
  let doms = {
    options:document.querySelectorAll(".option"),
    boxs:document.querySelectorAll(".Box"),
  };
  // 记录当前位置
  let curindex = 0;
  doms.boxs[curindex].style.opacity = "1";
  doms.boxs[curindex].style.zIndex = "9999";
  for (const iterator of doms.options) {
    iterator.addEventListener("click",function(){
      curindex = this.getAttribute("data-index");
      // 改变样式
      for (const iterator of doms.options) {
        iterator.classList.remove("active");
      }

      for (const iterator of doms.boxs) {
        iterator.style.opacity = "0";
        iterator.style.zIndex = "0";
      }
      this.classList.add("active");
      doms.boxs[curindex].style.opacity = "1";
      doms.boxs[curindex].style.zIndex = "9999";
    })
  }
})()