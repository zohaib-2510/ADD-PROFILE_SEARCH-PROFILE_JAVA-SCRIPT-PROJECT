function myFunction(){

    var btn = document.getElementById("btn")
    var inp1 = document.getElementById("inp1").value;
        var inp2 = document.getElementById("inp2").value;
        var full = document.querySelector(".profile")
        var name1 = document.getElementById("name1")
        var con = document.getElementById("conn")
        var full1 = document.querySelector("form")
        btn.addEventListener("click",function(){
            name1.innerHTML=inp1;
            con.innerHTML=inp2;
            full.style.display="flex"
            console.log(inp1);
            
            full1.style.display="none"
            btn.innerHTML="again click"
            full1.style.display="block"
        })
        
    }

    myFunction()
