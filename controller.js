window.onload=function(){
    const title=document.querySelector(".title");
    const desc=document.querySelector(".description");
    const addr=document.querySelector(".addr");
    const amethod=document.querySelector(".method");
    const params=document.querySelector(".param-body");
    const result=document.querySelector(".result");
    const url=document.querySelector(".url");
    const umethod=document.querySelector(".umethod");

    title.innerText=content.title
    desc.innerText=content.desc
    addr.innerText=content.addr
    amethod.innerText=content.method
    url.value=content.addr+(content.extern==undefined || content.extern==""?"":"?"+content.extern)
    umethod.value=content.method
    result.innerText=content.return
    const template="<tr><td>$1$</td><td>$2$</td><td>$3$</td><td>$4$</td></tr>"
    let params_html=""
    for(let param of content.params){
        let item=template.slice()
        item=item.replace("$1$",param[0])
        item=item.replace("$2$",param[1])
        item=item.replace("$3$",param[2])
        item=item.replace("$4$",param[3])
        params_html+=item
    }
    params.innerHTML=params_html
}