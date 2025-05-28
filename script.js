document.addEventListener("DOMContentLoaded", function () {
document.getElementById('button').addEventListener('click',function(){
    var name = document.getElementById('name').value.trim();
    var pass = document.getElementById('tele').value.trim();
    var txt = document.getElementById('text').value.trim();
    const data = {name:"George",
                  phone:7659918108,
                  text:"nothing"}
    data.name = name;
    data.phone= pass;
    data.text = txt;
    if(name!=='' && pass!=='')
    {
        alert('submitted!');
    }

});
});

function light()
{
    document.getElementById('body').style.backgroundColor='navy';
    document.getElementById('nav').style.backgroundColor='blue';
    document.getElementById('nav').style.color='white';
    document.getElementById('nav').style.boxShadow='0px 0px 5px black';
    
}

function dark()
{
    document.getElementById('body').style.backgroundColor='black';
    document.getElementById('nav').style.backgroundColor='black';
    document.getElementById('nav').style.color='white';
    document.getElementById('nav').style.boxShadow='0px 0px 5px white';

}

function menubarfun()
{
    let val = document.getElementById('nav').style;
    if(val.display==='none')
    {
        document.getElementById('nav').style.display='flex';
    }
    else
    {
        document.getElementById('nav').style.display='none';
    }
}