function convertDate(time) {
     //time should be server timestamp seconds only
     let dateInMillis = time * 1000
     let date = new Date(dateInMillis)
     let myDate = date.toLocaleDateString()
     let myTime = date.toLocaleTimeString()
     myDate = myDate.replaceAll('/', '-')
     return myDate + " " + myTime
     }

const firebaseConfig = {
     apiKey: "AIzaSyDGlCv2Uk94GxuL6NR5jHzIl1pNQWik-WM",

     authDomain: "ks-web-37145.firebaseapp.com",

     databaseURL: "https://ks-web-37145-default-rtdb.asia-southeast1.firebasedatabase.app",

     projectId: "ks-web-37145",

     storageBucket: "ks-web-37145.appspot.com",

     messagingSenderId: "1012658372246",

     appId: "1:1012658372246:web:e73fff6bc42b28b4f88cb7"
};

const app_contact = firebase.initializeApp(firebaseConfig);

// Get the form element
var thisForm = document.querySelector('#contact-us-form');

// Add a submit event listener
thisForm.addEventListener('submit', function (e) {
     // Prevent the form from submitting
     e.preventDefault();

     thisForm.querySelector('.loading').classList.add('d-block');
     thisForm.querySelector('.error-message').classList.remove('d-block');
     thisForm.querySelector('.sent-message').classList.remove('d-block');

     // Create a new FormData object
     var formData = new FormData(thisForm);

     // Convert the form data to a JSON object
     var data = {};
     formData.forEach(function (value, key) {
          data[key] = value;
     });
     data['timestamp'] = new Date().toLocaleString()

     // Send the data to Firebase
     var database = app_contact.database();
     const newRef = database.ref('form-responses').push(data);

     newRef.then(function () {
          thisForm.querySelector('.loading').classList.remove('d-block');
          thisForm.querySelector('.error-message').classList.remove('d-block');
          thisForm.querySelector('.sent-message').classList.add('d-block');
     }).catch(function (error) {
          thisForm.querySelector('.loading').classList.remove('d-block');
          thisForm.querySelector('.error-message').innerHTML = "Failed to send a message. Please try later or send an email at info@knowledge.tech";
          thisForm.querySelector('.error-message').classList.add('d-block');
     });
});
