
    var coll = document.getElementsByClassName("collapsible");
    var i;
    
    for (i = 0; i < coll.length; i++) {
      coll[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.maxHeight){
          content.style.maxHeight = null;
        } else {
          content.style.maxHeight = content.scrollHeight + "px";
        }
      });
    }


    const collapseTarget = (evt) => {
        const btn = evt.currentTarget;
        const id = btn.getAttribute("data-collapse");
        const cont = document.querySelector(id);
        btn.classList.toggle("active");
        cont.style.maxHeight = cont.clientHeight ? 0 : cont.scrollHeight + "px";
      }
      
      const collapseBtns = document.querySelectorAll("[data-collapse]");
      [...collapseBtns].forEach( btn => btn.addEventListener("click", collapseTarget ));