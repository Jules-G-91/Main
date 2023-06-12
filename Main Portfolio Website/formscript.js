// Getting all the required elements

const form = document.querySelector("form"),
  statusTxt = form.querySelector(".button-area span");

form.onsubmit = (e) => {
  e.preventDefault(); //Prevents form from submitting
  statusTxt.style.color = "var(--green";
  statusTxt.style.display = "block";

  let xhr = new XMLHttpRequest(); //This creates a new XML object
  xhr.open("POST", "message.php", true); //Sends a post request to message.php file
  xhr.onload = () => {
    //Once ajax loaded
    if (xhr.readyState == 4 && xhr.status == 200) {
      //If ajax response status is 200 and ready status is 4 it means there are not any errors..
      let response = xhr.response; //This stores the ajax response in a response variable..

      //If the response is an error like enter a valid email address then we wil change the status colour to "Red" else reset the form
      if (
        response.indexOf("Email and password fields are required!") != -1 ||
        response.indexOf("Enter valid email address!") ||
        response.indexOf("Sorry, failed to send your message!")
      ) {
        statusTxt.style.color = "red";
      } else {
        form.reset();
        setTimeout(() => {
          statusTxt.style.display = "none";
        }, 3000); //This hides the statusTxt after 3 seconds if the message is sent
      }
      statusTxt.innerText = response;
    }
  };
  let formData = new FormData(form); //This creates a new FormData object. This object is used to send form data
  xhr.send(formData); // This sends the form data
};
