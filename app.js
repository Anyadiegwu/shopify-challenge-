
    function showNot(item){
        const bell = item.parentNode
        const checkPH = bell.querySelector(".pro-sh")
        const checkPro = bell.querySelector(".pro-wr")
        const checkBell = bell.querySelector(".notif")
        const checkBel = bell.querySelector(".notif-sh")
        if(checkBell !== null && checkBel === null && checkPH === null && checkPro === null){
            
            checkBell.classList.remove("notif")
            checkBell.classList.add("notif-sh")
            const proof = document.querySelector(".pro-wr")
            const proofs = document.querySelector(".pro-sh")
            
            if(proofs !== null && proof === null){
                proofs.classList.remove("pro-sh")
                proofs.classList.add("pro-wr")
            }
        }else if(checkPro !== null && checkBel === null && checkPH === null && checkBell === null){
            
            checkPro.classList.remove("pro-wr")
            checkPro.classList.add("pro-sh")
            const prof = document.querySelector(".notif")
            const profs = document.querySelector(".notif-sh")
            
            if(profs !== null && prof === null){
                profs.classList.remove("notif-sh")
                profs.classList.add("notif")
            }
        }else if(checkPH !== null && checkBel === null && checkBell === null && checkPro === null){            
            checkPH.classList.remove("pro-sh")
            checkPH.classList.add("pro-wr")
        }else if(checkBel !== null && checkBell === null && checkPH === null && checkPro === null){
            checkBel.classList.remove("notif-sh")
            checkBel.classList.add("notif")
        }
    }


    function cancel(){
        document.querySelector(".ex-f-main").style.display = "none"
    }

let state = false
    function rollDown(){
        let check = (!state)
        const path =document.querySelector(".svgpath")
        if(check === true){
            state = !state
            document.querySelector(".hidden").style.display = "inline"
            document.querySelector("main").style.paddingBottom = "40px"
           
            path.setAttribute("d","M15.0303 12.2803C14.7374 12.5732 14.2626 12.5732 13.9697 12.2803L10.5 8.81066L7.03033 12.2803C6.73744 12.5732 6.26256 12.5732 5.96967 12.2803C5.67678 11.9874 5.67678 11.5126 5.96967 11.2197L9.96967 7.21967C10.2626 6.92678 10.7374 6.92678 11.0303 7.21967L15.0303 11.2197C15.3232 11.5126 15.3232 11.9874 15.0303 12.2803Z")
        }else if(check === false){
            state = !state
            document.querySelector(".hidden").style.display = "none"
            document.querySelector("main").style.height = "85vh"
            document.querySelector("main").style.paddingBottom = "0px"
            path.setAttribute("d","M6.21967 8.46967C6.51256 8.17678 6.98744 8.17678 7.28033 8.46967L10.75 11.9393L14.2197 8.46967C14.5126 8.17678 14.9874 8.17678 15.2803 8.46967C15.5732 8.76256 15.5732 9.23744 15.2803 9.53033L11.2803 13.5303C10.9874 13.8232 10.5126 13.8232 10.2197 13.5303L6.21967 9.53033C5.92678 9.23744 5.92678 8.76256 6.21967 8.46967Z")
        }
      
    }

    function changeName(item){
        const sect = document.querySelectorAll(".cust")
        sect[0].style.display = "none"
        sect[1].style.display = "none"
        sect[2].style.display = "none"
        sect[3].style.display = "none"
        sect[4].style.display = "none"
  
  
        const relap = item.parentNode
        const rep = item.parentNode.parentNode
        const checkRep = rep.querySelector(".cust")
        const laps = relap.querySelector(".add-f")
        const showLap = relap.querySelector(".cust")
   
        if(laps !== null && showLap !== null){
            const sects = document.querySelectorAll(".add-f")
            sects[0].style.display = "flex"
            sects[1].style.display = "flex"
            sects[2].style.display = "flex"
            sects[3].style.display = "flex"
            sects[4].style.display = "flex"
            showLap.style.display = "flex"
            laps.style.display = "none"
        }else if(checkRep !== null && laps === null){
            const cust = item.parentNode.parentNode

            const checkCust = cust.querySelector(".add-f")
            checkRep.style.display = "none"
            checkCust.style.display = "flex"
        }

        }


    let num = 0
    function calc(){
    if(num === 0){
        document.querySelector(".p-bar").style.width = "0px"
        document.querySelector(".compl-p").innerHTML = "0"
    }else if(num === 1){
        document.querySelector(".p-bar").style.width = "25px"
        document.querySelector(".compl-p").innerHTML = "1"
    }else if(num === 2){
        document.querySelector(".p-bar").style.width = "50px"
        document.querySelector(".compl-p").innerHTML = "2"
    }else if(num === 3){
        document.querySelector(".p-bar").style.width = "75px"
        document.querySelector(".compl-p").innerHTML = "3"
    }else if(num === 4){
        document.querySelector(".p-bar").style.width = "100px"
        document.querySelector(".compl-p").innerHTML = "4"
    }else if(num === 5){
        document.querySelector(".p-bar").style.width = "125px"
        document.querySelector(".compl-p").innerHTML = "5"
    }
}

function checked(item){
    const nested = item.querySelector(".default")
    const changeNest = item.querySelector(".defaultM")
    const showNest = item.querySelector(".loading")
    const showTick = item.querySelector(".unmark")
    const changeTick = item.querySelector(".marked")

    if(showTick !== null){
        nested.classList.remove("default")
        nested.classList.add("defaultM")
        showNest.classList.remove("loading")
        showNest.classList.add("load")

    setTimeout(()=>{
        const unTick = item.querySelector(".load")
        
        unTick.classList.remove("load")
        unTick.classList.add("loading")
        
        showTick.classList.remove("unmark")
        showTick.classList.add("marked")

        const getP = item.parentNode.parentNode;
        const outP = getP.querySelector(".default")
        const tickP = getP.querySelector(".unmark")

        outP.classList.remove("default")
        outP.classList.add("defaultM")

        tickP.classList.remove("unmark")
        tickP.classList.add("marked")
        num++
        calc()
    },500)
    }else if(showTick === null){
        changeTick.classList.remove("marked")
        changeTick.classList.add("unmark")

        showNest.classList.remove("loading")
        showNest.classList.add("load")
        setTimeout(()=>{
            const loadNest = item.querySelector(".load")

            loadNest.classList.remove("load")
            loadNest.classList.add("loading")

            changeNest.classList.remove("defaultM")
            changeNest.classList.add("default")

            const getP = item.parentNode.parentNode;
            const outP = getP.querySelector(".defaultM")
            const tickP = getP.querySelector(".marked")
    
            outP.classList.remove("defaultM")
            outP.classList.add("default")
    
            tickP.classList.remove("marked")
            tickP.classList.add("unmark")
            num--
            calc()
    },500)

    }

}
    function mark(item){
        const calback = item.parentNode.parentNode.querySelector(".i-mark")
        checked(calback)
    }