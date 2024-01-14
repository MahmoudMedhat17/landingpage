const toggleBtn = document.querySelector(".icons");
    const navMob = document.querySelector(".navMob");
    const menuIcon = document.querySelector(".menuIcon");
    const closeIcon = document.querySelector(".closeIcon");
    const toggleFunction = () =>{
        if(navMob.classList.contains("active")){
            navMob.classList.remove("active");
            menuIcon.style.display = "inline";
            closeIcon.style.display = "none";
        }
        else{
            navMob.classList.add("active");
            menuIcon.style.display = "none";
            closeIcon.style.display = "inline";
        }
    }
    toggleBtn.addEventListener("click", toggleFunction);