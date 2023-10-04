function myFunction(){

    var btn = document.getElementById("btn")
    var inp1 = document.getElementById("inp1").value
        var inp2 = document.getElementById("inp2").value
        var full = document.querySelector(".profile")
        var name1 = document.getElementById("name1")
        var con = document.getElementById("conn")
        var full1 = document.querySelector("form")
        var another = document.querySelector(".by")
        btn.addEventListener("click",function(){
            name1.innerHTML="Name: "+inp1;
            con.innerHTML="Gender: "+inp2;
            full.style.display="flex"
            console.log(inp1);
            
            full1.style.display="none"
            btn.innerHTML="click again"
        })
        
    }
    
    myFunction();