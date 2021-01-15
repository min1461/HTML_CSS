// <body onload ="kaja();">// 웹페이지가 로딩될때 // 이러면 여기에 html이 들어감
window.onload = function()/* 객체.속성=값-->이벤트=이벤트처리함수 */{// 태그 사용 없이 load
    var kong = document.getElementById('kong');
    if(kong!=null)/* 객체가 만들어졌으면 */{// 평강공주러브라인버튼을 누르면 =>JJIK처리
        if(kong.addEventListener){//{표준형 사용이 가능
            kong.addEventListener('click',Kaja.JJIK,false);//표준형(Event-capture)
        }else{
            kong.attachEvent('onclick',Kaja.JJIK);//IE
            document.form1.onclick=kaja // IE7,8
        }
    }
}

var Kaja={
    JJIK:function(event){
        if(document.getElementById('kaja1')!=null
            && document.getElementById('kaja2')!=null){
            document.getElementById('kaja1').innerHTML="babo"
            document.getElementById('kaja2').innerHTML="ondal"
        }
    }
}