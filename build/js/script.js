let navAll=document.querySelector(".navigation"),navListCatalog=navAll.querySelector(".navigation__catalog"),navListAdditional=navAll.querySelector(".navigation__additional"),navToggle=navAll.querySelector(".navigation__toggle");navAll.classList.remove("navigation--no-js"),navToggle.onclick=function(){navToggle.classList.toggle("navigation__toggle--is-open"),navListCatalog.classList.toggle("navigation__catalog--visible"),navListAdditional.classList.toggle("navigation__additional--visible")};