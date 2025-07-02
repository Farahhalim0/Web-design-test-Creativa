var items = document.querySelectorAll("#myList .list-group-item");

    for (var i = 0; i < items.length; i++) {
      items[i].addEventListener("click", function () {
         
        for (var j = 0; j < items.length; j++) {
          items[j].classList.remove(  "text-primary");
        }

     
        this.classList.add(  "text-primary");
      });
    } 