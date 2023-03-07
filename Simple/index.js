// document.getElementById("home_block").addEventListener("mouseover",() => {
//     console.log("in")
//     document.getElementsByClassName("home_block")[0].classList.add("active_dropdown")
// })

// document.querySelector("[home-block-drop]").addEventListener("mouseout",() => {
//     console.log("out")
//     document.querySelector("[home-block-drop]").classList.remove("active_dropdown")
// })  

document.addEventListener("mouseover", (e) => {
    let currentDropDown;
    if (e.target.matches(".dropdown_block_heading")) {
        let target_element = `${e.target.innerText}_dropdown_menu`
        currentDropDown = document.getElementById(target_element)
        currentDropDown.classList.add("active_dropdown")
        document.querySelectorAll(".dropdown_menu").forEach(item => {
            if (item === currentDropDown) {
                return
            }
            item.classList.remove("active_dropdown")
        })
    }

})
