var t=0;
var tstart=false;
var trec=false;
var interval;

start();

function start(){
    var ti=document.getElementById("start_stop");
    var re=document.getElementById("record");
    ti.addEventListener('click',function(){
        if(tstart==false){
            tstart=true;
            
                
            interval=setInterval(function(){
                t=t+0.01;
                document.getElementById("time").innerHTML=t.toFixed(2);
            },10);
        }
        else{
            tstart=false;
            clearInterval(interval);
        }
    })

    re.addEventListener('click',function(){
        rec();
    })

    var res=document.getElementById("reset");
    res.addEventListener('click',function(){
        location.reload();
    })
    document.addEventListener('keydown', function(event){
        if(event.key.toLowerCase()=="s"){
            ti.click();
        }
        if(event.key.toLowerCase()=="r"){
            res.click();
        }
        if(event.key.toLowerCase()=="t"){
            re.click();
        }
    });
}

function rec(){
    var node=document.createElement("Li");
    var text=document.createTextNode(t.toFixed(2));
    node.appendChild(text);
    document.getElementById("past").appendChild(node);
}