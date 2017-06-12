function allowDrop(ev) {
  console.log("allow drop", ev);
    ev.preventDefault();

}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
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

    var img = document.getElementById(data);
    console.log("image data", data, ev.target, "ev:", ev, "img:", img, "from:", ev.dataTransfer.dragStartedFrom);
    if(img != null) ev.target.appendChild(img);

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
 console.log("dragStart", ev, "parent:", ev.target.parentElement);
 ev.dataTransfer["dragStartedFrom"] = ev.target.parentElement;
 //ev.dataTransfer.setData("text", ev.target.id);
}

function dragend(ev) {
 console.log("dragEnd", ev);
 //ev.dataTransfer.setData("text", ev.target.id);
}
