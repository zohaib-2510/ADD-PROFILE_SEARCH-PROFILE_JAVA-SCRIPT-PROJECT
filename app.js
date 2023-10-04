function myFunction(){

    var btn = document.getElementById("btn")
    var inp1 = document.getElementById("inp1").value;
        var inp2 = document.getElementById("inp2").value;
        var full = document.querySelector(".profile")
        var name1 = document.getElementById("name1")
        var con = document.getElementById("conn")
        var full1 = document.querySelector("form")
        var another = document.querySelector(".by")
        btn.addEventListener("click",function(){
            another.style.display="flex"
            name1.innerHTML=inp1;
            con.innerHTML=inp2;
            full.style.display="flex"
            console.log(inp1);
            
            full1.style.display="none"
            btn.innerHTML="again click"
            full1.style.display="block"
            prof2.style.display="block"
        })
        
    }
    
    myFunction()
    function setFunc(){
        var btn = document.getElementById("btn")
        var inp1 = document.getElementById("inp1").value;
            var inp2 = document.getElementById("inp2").value;
            var full = document.querySelector(".profile")
            var prof2 = document.querySelector(".profile2")
            var name1 = document.getElementById("name1")
            var con = document.getElementById("conn")
            var full1 = document.querySelector("form")
            var another = document.querySelector(".by")
            another.addEventListener("click",function(){
                full.style.display="flex"
                prof2.style.display="flex"
                name1.innerHTML=inp1;
                con.innerHTML=inp2;
                prof2.style.display="flex"
                full1.style.display="flex"
                console.log(inp1);
                
                full1.style.display="none"
                btn.innerHTML="again click"
                full1.style.display="block"
            })
            
}
setFunc()