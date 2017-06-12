//=========================== Google Firebase Connection ========================
// From: https://console.firebase.google.com/project/usc-slice-hivis/overview?pli=1
// Initialize Firebase
var config = {
  apiKey: "AIzaSyDKlrngkJTxoAAwn5K8GB_UYcY-6Epx2s8",
  authDomain: "ict342-cave-scene.firebaseapp.com",
  databaseURL: "https://ict342-cave-scene.firebaseio.com",
  projectId: "ict342-cave-scene",
  storageBucket: "ict342-cave-scene.appspot.com",
  messagingSenderId: "298384793473"
};
firebase.initializeApp(config);
var email = "leo.shigenaga@gmail.com";
var passwd = "ict342cave";
firebase.auth().signInWithEmailAndPassword(email, passwd).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  console.log("Login error: " + errorMessage);
});

// Get a reference to the storage service, which is used to create references in your storage bucket
var storage = firebase.storage();
// Create a storage reference from our storage service
var storageRef = storage.ref();
// Create a child reference
var imagesRef = storageRef.child('images');

// upload an image to Google Firebase
function upload_image(img_name, img_data) {
  console.log("Uploading", img_name, "data:", img_data);
  var ref = imagesRef.child(img_name);
  ref.put(img_data).then(function(snapshot) {
    console.log('Uploaded ' + img_name + " successfully.");
  });
}

function handleFileSelect(ev) {
  var files = ev.target.files; // FileList object
  var output = document.getElementById("frames");
  var filesCount = [];

  // Loop through the FileList and render image files as thumbnails.
    for (var i = 0, f; f = files[i]; i++) {
      filesCount.push(i);
      let file = files[i];
    // Only process image files.
        if (!f.type.match('image.*')) {
          continue;
        }

    var reader = new FileReader();

    // Closure to capture the file information.
    reader.onload = (function(theFile) {
      return function(e) {
        // Render thumbnail.
        console.log("reader onload", ev);
        var span = document.createElement('span');
        var item = document.createElement('li');
        var palette = document.getElementById('palette');
        item.innerHTML = ['<img class="thumb" src="', e.target.result,
                          '" title="', escape(theFile.name), '"/>'].join('');
        if (palette != null) {
          palette.appendChild(item);
        } else console.log("failed to append");

        current_i = filesCount.shift();
          if(current_i === 0) {
            prev_i = files.length - 1;
          } else {
            prev_i = current_i - 1;
          }
          if(filesCount.length === 0) {
            next_i = 0;
          } else {
            next_i = current_i + 1;
          }


          // output.innerHTML = output.innerHTML + '<li id="slide-' + current_i +
          // '" class="slide">' + "<img src='" + files.result + "'" + "title=''/>"
          // + '<nav>' + '<a class="prev" href="#slide-' + prev_i + '">&larr;</a>'
          // + '<a class="next" href="#slide-' + next_i + '">&rarr;</a>'
          // + '</nav>' + '<li>';





        for ( var i = ev ; i < ev ; i++ ) {
        var img = document.createElement('img');
        if (i < 10) {
          img.setAttribute("src", "0" + i + ".jpg");
        } else {
          img.setAttribute("src", i + ".jpg");
        }
        console.log("img tag", img);
        img.class = "thumb";
        img.src = e.target.result;
        img.title = escape(theFile.name);
        img.draggable = true;
        img.width = '100px';
        img.ondragover = 'allowDrop(event)';
        img.id = escape(theFile.name);
        img.id != 0;
        img.id = "abc";
        item.appendChild(img);
        palette.appendChild(item);
      }
        // document.getElementById('list').insertBefore(span, null);
        document.getElementById('subbtn').onclick = function(){
          upload_image(file.name, file)};
        // upload_image(file.name, file);
      };
    })(f);

    // Read in the image file as a data URL.
    reader.readAsDataURL(f);
      // document.getElementById('subbtn').onclick = upload_image(file.name, file);

      function handleDragOver(evt) {
    evt.stopPropagation();
    evt.preventDefault();
    evt.dataTransfer.dropEffect = 'copy'; // Explicitly show this is a copy.
  }

  }

}

document.getElementById('files').addEventListener('change', handleFileSelect, false);
