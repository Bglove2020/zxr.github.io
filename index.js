// document.querySelector()	返回文档中匹配指定的CSS选择器的第一元素
// document.querySelectorAll()，返回文档中匹配的CSS选择器的所有元素节点列表
//这段代码完全没用，使用伪类选择器即可，这里为了联系JS。
var aas =document.querySelectorAll(".nav ul li a")
console.log(aas)
for (let i=0;i<aas.length;i++){
    aas[i].addEventListener('mouseover',function () {
        this.style.backgroundColor="black";
        this.style.fontSize="22px";
    })
    aas[i].addEventListener('mouseout',function () {
        this.style.backgroundColor="";
        this.style.fontSize="20px";
    })
}

//为产品介绍添加统一的背景。
var products = document.getElementsByClassName("unit")
console.log(products)
for(let i=0;i<products.length;i++){
    let index=i+1;
    products[i].style.backgroundImage="linear-gradient(rgba(46, 52, 56,0.2), rgba(46, 52, 56, 0.2)), url(\'resource/products_"+index+".png\')"
    products[i].style.backgroundSize="cover"
}

var r_aas=document.querySelectorAll(".right_nav p a")
for (let i=0;i<r_aas.length;i++){
    r_aas[i].onmouseover=function () {
        this.style.fontSize="17px";
    }
    r_aas[i].onmouseout=function (){
        this.style.fontSize="15px";
    }
}
// 重置导航栏的锚点定位，利用a标签中的href属性，这个属性如果作为锚点，则其为选择器的形式，通过$(选择器).offset获得标签对象的高度和左距离，再利用动画使html元素直接下降60px。
$("a").click(function () {
    var xuanzeqi =$(this).attr('href')
    console.log(xuanzeqi)
    if(xuanzeqi !== "#holder"){
        $("html").animate({
            scrollTop:$(xuanzeqi).offset().top-60
        },350)
    }
})