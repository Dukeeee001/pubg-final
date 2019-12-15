document.getElementById('search').onkeyup = function(){
    let searchText = document.getElementById('search').value;
    let elems = document.getElementsByClassName("gun");
    if (searchText != ''){
        for (elem of elems){
            console.log("VAL",elem.classList.value)
            console.log("INCLUD",elem.classList.value.includes(searchText),searchText);
            if (!elem.classList.value.includes(searchText)){
                elem.classList.remove("show");
                elem.classList.add("hide");
            } else {
                elem.classList.remove("hide");
                elem.classList.add("show");
            }
        }
    } else {
        for (elem of elems){
            elem.classList.remove("hide");
            elem.classList.add("show");
        }
    }
}