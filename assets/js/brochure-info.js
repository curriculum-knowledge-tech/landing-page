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

          console.log("DATA: ", data)

        
     }
)