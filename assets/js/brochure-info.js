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

          // Prevent the form from submitting
          e.preventDefault();

          var formData = new FormData(thisForm);

          var data = {};
          formData.forEach(function (value, key) {
               data[key] = value;
          });
          data['timestamp'] = new Date().toLocaleString()

          var database = app_brochure.database();
          const newRef = database.ref('brochure-form-responses').push(data);

          window.location.replace("enroll-now.html");
     }
)