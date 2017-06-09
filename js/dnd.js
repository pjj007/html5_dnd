function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    // var span = ev.dataTransfer.getData("text");
    while (ev.target.firstChild) {
    ev.target.removeChild(ev.target.firstChild);
    }
    var img = document.getElementById(data);
    // var list1 = document.getElementById('list');
    console.log("ev:", ev, "img:", img, "from:", ev.dataTransfer.dragStartedFrom);
    img.width = 250;
    img.height = 50;
    ev.target.appendChild(img);
    // ev.target.appendChild(list1);
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
