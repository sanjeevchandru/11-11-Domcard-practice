var arr=[{image:"images/team-1.jpg",name:"Walter White",position:"Chief Executive Officer",para:"Magni qui quod omnis unde et eos fuga et exercitationem. Odio veritatis perspiciatis quaerat qui aut aut aut"},{image:"images/team-2.jpg",name:"Sarah Jhinson",position:"Product Manager",para:"Repellat fugiat adipisci nemo illum nesciunt voluptas repellendus. In architecto rerum rerum temporibus"},{image:"images/team-3.jpg",name:"William Anderson",position:"CTO",para:"Voluptas necessitatibus occaecati quia. Earum totam consequuntur qui porro et laborum toro des clara"}];

var titleRow=document.createElement("div");
titleRow.classList.add("title-row");


var titlehead=document.createElement("p");
titlehead.innerHTML="Our Team";
titlehead.classList.add("title-head");

var titlepara=document.createElement("p");
titlepara.innerHTML="Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.";
titlepara.classList.add("title-para");
titleRow.appendChild(titlehead);
titleRow.appendChild(titlepara);

var row=document.createElement("div");
row.classList.add("row");

var con=document.getElementById("card-con");
con.appendChild(titleRow);
con.appendChild(row);
arr.forEach(function(e){

    var col=document.createElement("div");
    col.classList.add("col");

    var card=document.createElement("div");
    card.classList.add("card");

    var cardimage=document.createElement("div");
    cardimage.classList.add("card-image");

    var image=document.createElement("img");
    image.setAttribute("src",e.image);
    cardimage.appendChild(image);

    var cardhead=document.createElement("h3");
    cardhead.classList.add("card-name");
    cardhead.innerHTML=e.name;

    var position=document.createElement("span");
    position.classList.add("position");
    position.innerHTML=e.position;

    var para=document.createElement("p");
    para.classList.add("para");
    para.innerHTML=e.para;

    row.appendChild(col);
    col.appendChild(card);
    card.appendChild(cardimage);
    card.appendChild(cardhead);
    card.appendChild(position);
    card.appendChild(para);

})