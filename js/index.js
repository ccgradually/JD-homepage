/**
 * Created by vsus-pc on 2017/6/21.
 */
window.onload=function(){
    var ali=document.getElementsByClassName('btn');

    var menu=document.getElementsByClassName('top_menu');
    for(var i=0;i<ali.length;i++){
        ali[i].index=i;
        ali[i].onmouseover=function(){
            this.style.background='#fff';
            menu[this.index].style.display='block';
        };
        ali[i].onmouseout=function(){
            this.style.background='#E3E4E5';
            menu[this.index].style.display='none';
        }
    }
};

//��ҳ��λ����
$(document).ready(function () {
    $(window).scroll(function () {

        var items = $("#main").find(".item");
        var menu1 = $("#menu");
        var top = $(document).scrollTop();
        var currentId = ""; //��������������λ�õ�item id
        if(top>=600) {
            menu1.css("display","block");
            items.each(function () {
                var m = $(this);
                //ע�⣺m.offset().top����ÿһ��item�Ķ���λ��

                console.log(m.offset().top);
                if (top > m.offset().top - 300) {
                    currentId = "#" + m.attr("id");
                } else {
                    return false;
                }
            });

            var currentLink = menu1.find(".current");
            if (currentId && currentLink.attr("href") != currentId) {
                currentLink.removeClass("current");
                menu1.find("[href=" + currentId + "]").addClass("current");
            }
        }
        else{
            menu1.css("display","none");
        }
    });
});