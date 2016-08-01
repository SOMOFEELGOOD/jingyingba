var click = document.getElementById("click");
    var confirm = document.getElementById("confirm");
    var shut = document.querySelector(".tip a");
    var cancle = document.getElementById("cancle");
    var box = document.getElementById("box")
    click.onclick = function(){
        document.getElementById("mask").style.display = "block";
        document.getElementById("box").style.display = "block";
        box.style.top = (document.documentElement.clientHeight - box.clientHeight)/2 + "px";
        box.style.left = (document.documentElement.clientWidth - box.clientWidth)/2 + "px";
        }
    function close(){
        document.getElementById("mask").style.display = "none";
        document.getElementById("box").style.display = "none";
    }
    confirm.onclick = function(){
        
    }
    cancle.onclick = function(){
        close();
    }
    shut.onclick = function(){
        close();
    }
    window.onresize = function(){
        box.style.top = (document.documentElement.clientHeight - box.clientHeight)/2 + "px";
        box.style.left = (document.documentElement.clientWidth - box.clientWidth)/2 + "px";
    }