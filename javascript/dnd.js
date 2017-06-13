var draggingId = "";

function allowDrop(ev) {
  // console.log("allow drop", ev);
    ev.preventDefault();

}

function drop(ev) {
    ev.stopPropagation();
    ev.preventDefault();
    console.log("drop", ev);
    //var data = ev.dataTransfer.getData("text");
    var data = ev.dataTransfer.getData("text");
    while (ev.target.firstChild) {
      ev.target.removeChild(ev.target.firstChild);
    }
    var id = draggingId;
    var img = document.getElementById(id);
    img.id = img.id+ "_2";
    console.log("draggingId", id, "ev.target", ev.target, "ev:", ev, "img:", img);
    ev.target.appendChild(img);

    // if (img == null) {
    //     img.appendChild(img);
    // } else console.log("aaaaa");
    // var list1 = document.getElementById('list');
    // console.log(data, ev.target, "ev:", ev, "img:", img, "from:", ev.dataTransfer.dragStartedFrom);
    // list1.width = 150;
    // list1.height = 100;


    // document.getElementById(data).appendChild(img);
    // ev.target.appendChild(img);
}

function dragstart(ev) {
 draggingId = ev.target.id;
 ev.dataTransfer.setData("text", ev.target.id);
  console.log("dragstart", ev, "id:", draggingId);
}

function dragend(ev) {
 console.log("dragEnd", ev);
 //ev.dataTransfer.setData("text", ev.target.id);
}
