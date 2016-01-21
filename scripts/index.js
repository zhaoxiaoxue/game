window.onload=function(){
    var sence=document.getElementById('sence');
    var letters,index;

    for(var i=0;i<54;i++){
        letters=document.createElement('div');
        letters.setAttribute('class','letter');
        letters.style.background='rgb('+Math.floor(Math.random()*255)+','+
            Math.floor(Math.random()*255)+','+Math.floor(Math.random()*255)+')';

        if(Math.random()*1>0.5){
            index=Math.floor(Math.random()*26+65);  
        }else{
            index=Math.floor(Math.random()*26+97);
        }   
       
        letters.innerHTML=String.fromCharCode(index);
        sence.appendChild(letters);       
    }

    var j=0,m=0,n,index1;
    var letters=document.getElementsByClassName('letter');
    var timet=document.getElementById('timet');
    var kaiguan=false,kaiguan1=true,kaiguan2=true; 

    start.onclick=function(){
        if(kaiguan1){
            start.innerHTML='重新开始';
            end.style.display='block';
            sence1.style.display='none';
            kaiguan1=false; 
            kaiguan=true;
        }else{
            location.reload();
        }
                
    }
    end.onclick=function(){
        if(kaiguan2){
            sence1.style.display='block';
            zi.innerHTML='暂停';
            end.innerHTML='开始';
            kaiguan2=false;
            kaiguan=false;
        }else{
            sence1.style.display='none';
            end.innerHTML='暂停';
            kaiguan2=true;
            kaiguan=true;
        }
        
    }
    document.onkeydown=function(e){
        if(kaiguan1){return;}        
        index1=letters[j].innerHTML;
        if(String.fromCharCode(e.keyCode+32)==index1&&e.shiftKey==false||
            String.fromCharCode(e.keyCode)==index1&&e.shiftKey==true){
            letters[j].style.background='white';
            letters[j].style.color='black';
            letters[j].style.webkitTransform='scale(0.7)';
            document.onkeyup=function(){
                letters[j-1].style.webkitTransform='scale(1)';
            };
            kaiguan=true;           
            j++;
        }
        if(sence.lastElementChild.style.background=='white'){
            clearInterval(timeId);
            sence1.style.display='block';
            zi.innerHTML='终于完了';           
        }                        
    };
    
    var timeId=setInterval(function(){
        if(kaiguan){
            m++;
            timet.innerHTML=m;
        }
    },1000); 
    document.onmousedown=function(e){
        e.preventDefault();
    }
    
     

    

    
    


};