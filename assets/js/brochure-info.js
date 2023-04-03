const firebaseConfig2 = {
     apiKey: "AIzaSyBzsNcUNJbF-F2-pcvbveu176Lt54Vlj58",
     authDomain: "ks-web-brochure.firebaseapp.com",
     databaseURL: "https://ks-web-brochure-default-rtdb.asia-southeast1.firebasedatabase.app",
     projectId: "ks-web-brochure",
     storageBucket: "ks-web-brochure.appspot.com",
     messagingSenderId: "947151666437",
     appId: "1:947151666437:web:01912bb405a8d262bbcb6c"
};


// Initialize Firebase

const app_brochure = firebase.initializeApp(firebaseConfig2, 'second');

var thisForm = document.querySelector('#brochure-form');

thisForm.addEventListener('submit', function (e){

         document.getElementById('downloadLink').click()

         thisForm.querySelector('.loading').classList.add('d-block');
         thisForm.querySelector('.error-message').classList.remove('d-block');
         thisForm.querySelector('.sent-message').classList.remove('d-block');

          // Prevent the form from submitting
          e.preventDefault();

          var formData = new FormData(thisForm);

          const courseDropdownValue = document.querySelector('#course-dropdown').value;

          var data = {};
          formData.forEach(function (value, key) {
               data[key] = value;
          });
          data['courses'] = courseDropdownValue
          data['timestamp'] = new Date().toLocaleString()

          var database = app_brochure.database();
          const newRef = database.ref('brochure-form-responses').push(data);


         
          newRef.then(function () {
               thisForm.querySelector('.loading').classList.remove('d-block');
               thisForm.querySelector('.error-message').classList.remove('d-block');
               thisForm.querySelector('.sent-message').classList.add('d-block');
               window.location.replace("index.html");
          }).catch(function (error) {
               thisForm.querySelector('.loading').classList.remove('d-block');
               thisForm.querySelector('.error-message').innerHTML = "Failed to send a message. Please try later or send an email at info@knowledge.tech";
               thisForm.querySelector('.error-message').classList.add('d-block');
          });
          
     }
)