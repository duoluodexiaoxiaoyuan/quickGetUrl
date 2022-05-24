setTimeout(()=>{
  let url = window.location.href;
  console.log(url)
  // 掘金的url
  // 不等于-1的时候才表示没有
  if(url.indexOf("link.juejin.cn") != -1){
    console.log(url)
    // 拿到目标地址
    let targetUrl = document.getElementsByClassName('link-content')[0].innerText;
    window.location.replace(targetUrl);
  } else if (url.indexOf("jianshu.com") != -1){
      // 简书的url
      let targetUrl = document.getElementsByClassName("_2VEbEOHfDtVWiQAJxSIrVi_0")[0].innerText;
      window.location.replace(targetUrl);
  }
},2000)