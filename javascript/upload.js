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

  // Loop through the FileList and render image files as thumbnails.
  for (var i = 0, f; f = files[i]; i++) {

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
        var span = document.createElement('span');
        span.innerHTML = ['<img class="thumb" src="', e.target.result,
                          '" title="', escape(theFile.name), '"/>'].join('');
        document.getElementById('list').insertBefore(span, null);
        upload_image(file.name, file);
      };
    })(f);

    // Read in the image file as a data URL.
    reader.readAsDataURL(f);
  }
}

document.getElementById('files').addEventListener('change', handleFileSelect, false);
