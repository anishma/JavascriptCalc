/**
 * Created by anishma on 1/24/2017.
 */
$(document).ready(function () {
    var num,num1,num2,op; var count=0; var newnum; var flag=false;
    $(".num").on('click',function () {
        var e = window.event;
        var btn = e.target || e.srcElement;
       var id=(btn.id);

        if(count>1)
        {
            document.calculator.display.value='';
            num= document.calculator.display.value+=id;
            count=1;
        }
        else
        {
            num= document.calculator.display.value+=id;
        }
    });
    $("#dot").on('click',function () {
        if(flag)
        {
            document.calculator.display.value='0';
        }
        document.calculator.display.value+='.';
        $("#dot").attr('disabled','disabled');
    });
   /* $("#trunc").on('click',function () {
        
    });*/
    $(".op").on('click',function () {
        if(count>0)
        {
            newnum= Number(document.calculator.display.value);
            console.log(newnum);
            if(op=='+')
            {
                num1+=newnum;
            }
            if(op=='-')
            {
                num1-=newnum;
            }
            if(op=='X')
            {
                num1*=newnum;
            }
            if(op=='/')
            {
                num1/=newnum;
            }
            if(op=='mod')
            {
                num1%=newnum;
            }

            console.log(num1);
            document.calculator.display.value=num1;
        }
        else{
            num1= Number(document.calculator.display.value);
            console.log("else part in op"+num1);
            document.calculator.display.value='';
        }

        var e = window.event;
        var btn = e.target || e.srcElement;
        var id=(btn.id);
        op=id;
        console.log(op);

        $("#dot").removeAttr('disabled');
        count++;
    });
    $("#equal").on('click',function () {
        num2= Number(document.calculator.display.value);
        console.log(num2);
        var result;
        if(op=='+')
        {
            result=num1+num2;
        }
        if(op=='-')
        {
            result=num1-num2;
        }
        if(op=='X')
        {
            result=num1*num2;
        }
        if(op=='/')
        {
            result=num1/num2;
        }
        if(op=='mod')
        {
            result=num1%num2;
        }
        count=0;
        num1=0;
        num2=0;
        flag=true;
        document.calculator.display.value=result;
    });
    $("#clear").on('click',function () {
        document.calculator.display.value='';
        count=0;
        $("#dot").removeAttr('disabled');
    });
    $("#neg").on('click',function () {
        num=document.calculator.display.value;
        var sign=Math.sign(num);
        console.log(sign);
        if(sign=='1')
        {
          num=  document.calculator.display.value='-'+num;
        }
        if(sign=='-1')
        {
           num= document.calculator.display.value=Math.abs(num);
        }

    });
});
