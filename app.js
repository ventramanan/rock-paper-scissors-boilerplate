    var rockk="./assets/rock-hand.png"
    var scis="./assets/scissors-hand.png"
    var paper="./assets/paper-hand.png"


    var rock=document.getElementById("rock")
    var sc=document.getElementById("scis")
    var pa=document.getElementById("paper")

    var playerscore = document.getElementById("playerscore")
    var computerscore = document.getElementById("compsocre")
    
    var div = document.getElementById("gamearea")
    var player=" "
    var computerr=" "
    var points=0
    var pointss=0
    

    var score=document.getElementById("score")
    var result=document.querySelector(".button")
    console.log(result)
    var play =document.getElementById("p")
    var images=document.getElementsByClassName("image")
    console.log(images)
    var bu=document.getElementById("bt")
    
    

    rock.addEventListener("click",() =>{
        div.innerHTML=`<img src="${rockk}" height="200px">`
        player="r"
        computer()
    })
    
    sc.addEventListener("click",() =>{
        div.innerHTML=`<img src="${scis}" height="200px">`
        player="s"
        computer()
    })
    pa.addEventListener("click",() =>{
        div.innerHTML=`<img src="${paper}" height="200px">`
        player="p"
        computer()
    }
    )
    var divv=document.getElementById("computer")
    function computer(){
        let random=Math.ceil((Math.random()*3))
        if(random==1){    
            divv.innerHTML=`<img src="${rockk}" height="200px">`
            computerr="r"

        }else if(random==2){
            divv.innerHTML=`<img src="${scis}" height="200px">`
            computerr="s"
        }else{
            divv.innerHTML=`<img src="${paper}" height="200px">`
            computerr="p"
        }
        score_player()
        count()
    }
    function score_player(){
        if(player === computerr){
            computerr==computerr
        }
        else if(player == "p" && computerr== "r"){
            points += 1
        }
        else if(player == "r" && computerr == "s"){
            points += 1
        }
        else if(player == "s" && computerr == "p"){
            points += 1
        }
        else{
            pointss += 1
        }
        playerscore.textContent = points
        computerscore.textContent = pointss
    }
    function count(){
        if(points>=5 || pointss>=5){
            result.style.visibility="visible"
        }
        console.log("pp", pointss)
        if(pointss>=5){
            
            rock.style.visibility="hidden"
            pa.style.visibility="hidden"
            sc.style.visibility="hidden"


            play.textContent="computer won the game"
        }else if(points>=5){
               
            rock.style.visibility="hidden"
            pa.style.visibility="hidden"
            sc.style.visibility="hidden"

            play.textContent="You won the game"

        }
    }
    bu.addEventListener("click",() =>{
        location.reload()
    })
    
