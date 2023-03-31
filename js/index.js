/*
  This is your site JavaScript code - you can add interactivity!
*/

// Print a message in the browser's dev tools console each time the page loads
// Use your menus or right-click / control-click and choose "Inspect" > "Console"
console.log("Hello 🌎");
//import axios from 'axios';

/* 
Make the "Click me!" button move when the visitor clicks it:
- First add the button to the page by following the steps in the TODO 🚧
*/

function getJpegBytes(canvas) {
  //var jpgImg = canvas.toDataURL("image/png");
  var jpgImg =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAAAAACo4kLRAAAAAmJLR0QA/4ePzL8AAAAUSURBVBiVY/zPgAmYsIiNCg6YIADD4AEn/VU6wgAAAABJRU5ErkJggg==";
  jpgImg = jpgImg.replace("data:image/png;base64,", "");

  return _base64ToArrayBuffer(jpgImg);
}

function _base64ToArrayBuffer(base64) {
  var binary_string = Buffer.from(base64, "base64").toString();
  var len = binary_string.length;
  var bytes = new Uint8Array(len);
  for (var i = 0; i < len; i++) {
    bytes[i] = binary_string.charCodeAt(i);
  }
  return bytes;
}

function _base64ToArrayBuffer2(base64) {
  var binary_string = Buffer.from(base64, "base64").toString();
  var len = binary_string.length;
  var bytes = new Uint8Array(len);
  for (var i = 0; i < len; i++) {
    bytes[i] = binary_string.charCodeAt(i);
  }
  return bytes.buffer;
}

function dataURItoBlob(dataURI) {
  // convert base64 to raw binary data held in a string
  // doesn't handle URLEncoded DataURIs - see SO answer #6850276 for code that does this
  var byteString = atob(dataURI.split(',')[1]);

  // separate out the mime component
  var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0]

  // write the bytes of the string to an ArrayBuffer
  var ab = new ArrayBuffer(byteString.length);

  // create a view into the buffer
  var ia = new Uint8Array(ab);

  // set the bytes of the buffer to the correct values
  for (var i = 0; i < byteString.length; i++) {
      ia[i] = byteString.charCodeAt(i);
  }

  // write the ArrayBuffer to a blob, and you're done
  var blob = new Blob([ab], {type: mimeString});
  return blob;

}

const btn = document.querySelector("button"); // Get the button from the page
if (btn) {
  // Detect clicks on the button
  btn.onclick = function () {
    console.log("hi");
    // The 'dipped' class in style.css changes the appearance on click
    btn.classList.toggle("dipped");
    //var byteArray = getJpegBytes();
   // console.log(byteArray);
    var blob = dataURItoBlob("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAAAAACo4kLRAAAAAmJLR0QA/4ePzL8AAAAUSURBVBiVY/zPgAmYsIiNCg6YIADD4AEn/VU6wgAAAABJRU5ErkJggg==");
console.log(blob);
    const form = new FormData();
    form.append(
      "request",
      JSON.stringify({
        assetType: "Decal",
        displayName: "Name",
        description: "test",
        creationContext: {
          creator: {
            userId: 1655569,
          },
        },
      })
    );
    //form.append("fileContent", new Blob(byteArray, { type: "image/png" }));
    form.append("fileContent", blob);

    fetch("https://apis.roblox.com/assets/v1/assets", {
      method: "POST",
      body: form,
      headers: {
        "Content-Type": "multipart/form-data",
        "x-api-key": "J5FTajNT50W0u4lNbYRP5CGlQeBqenSPy8FosDA9yw8U7nKg", 
      }
    })
      .then((response) => response.json())
      .then((result) => {
        console.log("Success:", result);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
}

// ----- GLITCH STARTER PROJECT HELPER CODE -----

// Open file when the link in the preview is clicked
let goto = (file, line) => {
  window.parent.postMessage(
    { type: "glitch/go-to-line", payload: { filePath: file, line: line } },
    "*"
  );
};
// Get the file opening button from its class name
const filer = document.querySelectorAll(".fileopener");
filer.forEach((f) => {
  f.onclick = () => {
    goto(f.dataset.file, f.dataset.line);
  };
});
