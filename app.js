function decfun()
{
let val=document.getElementById("value").innerHTML;
if(val<=0)
{
    document.getElementById("value").innerHTML=(parseInt(val)-1);
    document.getElementById("value").style.color="red";
}
else if(val==1)
{
    document.getElementById("value").innerHTML="0";
    document.getElementById("value").style.color="black";
}
else{
    document.getElementById("value").innerHTML=(parseInt(val)-1);
    document.getElementById("value").style.color="green";
}

}

function resfun()
{
    document.getElementById("value").innerHTML="0";
    document.getElementById("value").style.color="black";
}

function incfun()
{
    let val=document.getElementById("value").innerHTML;

    if(val<-1)
    {
        document.getElementById("value").innerHTML=(parseInt(val)+1);
        document.getElementById("value").style.color="red";
    }
    else if(val==-1)
    {
        document.getElementById("value").innerHTML="0";
        document.getElementById("value").style.color="black";
    }
    else{
        document.getElementById("value").innerHTML=(parseInt(val)+1);
        document.getElementById("value").style.color="green";
    }
}