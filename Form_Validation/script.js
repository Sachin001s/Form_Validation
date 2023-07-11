//   <><><>---- JAVASCRIPT ----<><><>  

function sach()
{
        var a=document.getElementById('user').value;
        var b=document.getElementById('em').value;
        var c=document.getElementById('pw').value;
        var d=document.getElementById('cpw').value;
        var e=document.getElementById('con').value;
        var f=document.getElementById('sel').value;

        var t=/^([A-Za-z])+$/;
        var k=/^([A-Za-z0-9])+\@([A-Za-z])+\.([A-Za-z]{2,3})$/;

    // <----------- CONDITIONS --------->

        if(a=="")
        {
        document.getElementById("result").innerHTML="please enter Username !!";
        }
        else if(t.test(a)==false)
        {
        document.getElementById("result").innerHTML="please enter valid Username !!";
        }
        else if(b=="")
        {
        document.getElementById("result").innerHTML="please enter Email ID !!";
        }
        else if(k.test(b)==false)
        {
        document.getElementById("result").innerHTML="please enter valid Email ID !!";
        }
        else if(c=="")
        {
        document.getElementById("result").innerHTML="please enter password !!";
        }
        else if(d=="")
        {
        document.getElementById("result").innerHTML="please confirm your password !!";
        }

        else if(d!=c)
        {
        document.getElementById("result").innerHTML="Password does not match !"
        }

        else if(e=="")
        {
        document.getElementById("result").innerHTML="please enter contact details !!";
        }

        else if(isNaN(e))
        {
        document.getElementById("result").innerHTML="please enter numbers only !!";
        }

        else if(e.length<10)
        {
        document.getElementById("result").innerHTML="Invalid number !!";
        }

        else if(f=="--SELECT--")
        {
        document.getElementById("result").innerHTML="please select your gender !!";
        }
        else
        {
        document.getElementById("result").innerHTML="";
        document.getElementById("result2").innerHTML="Form Submit Successfully ~_~";
        }

}       
    