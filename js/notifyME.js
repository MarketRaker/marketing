
//Modal Items
const emailModalBackdrop = document.getElementById('email-modal');
const thanksModalBackdrop = document.getElementById('thanks-modal');

const notifyMeBtn = document.querySelector('.notify-me');
const subscribeBtn = document.getElementById('subscribe-btn');

const closeBtn = document.querySelector('.modal-close-btn');
const thanksCloseBtns = document.getElementsByName('thanks-modal-close-btn');

//Click Events
subscribeBtn.addEventListener('click', (e) => {
    e.preventDefault();
    emailModalBackdrop.style.display = 'none'
    thanksModalBackdrop.style.display = 'flex';


    // var formData = new FormData(document.querySelector('form'))
    
    // submitDetails(formData.get('firstname'), formData.get('email'))
});

thanksCloseBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        thanksModalBackdrop.style.display = 'none';
    })
    
});


//Click Events
notifyMeBtn.addEventListener('click', () => {
    emailModalBackdrop.style.display = 'flex';

});

closeBtn.addEventListener('click', () => {
    emailModalBackdrop.style.display = 'none';
})

window.addEventListener('click', (e) => {
    if (e.target === emailModalBackdrop) {
        emailModalBackdrop.style.display = 'none';
    }

    if (e.target === thanksModalBackdrop) {
        thanksModalBackdrop.style.display = 'none';
    }
})


function submitDetails(name = "Test-Jeff", email="example@example.com"){
    // Create the new request 
    var xhr = new XMLHttpRequest();
    var url = 'https://api.hsforms.com/submissions/v3/integration/submit/27224042/0707b889-c307-459f-940e-bad8c1d665a6'
    
    // Example request JSON:
    var data = {
      "fields": [
        {
		  "objectTypeId": "0-1",
          "name": "email",
          "value": email
        },
        {
		  "objectTypeId": "0-1",
          "name": "firstname",
          "value": name
        }
      ],
    //   "context": {
    //     "hutk": ':hutk', // include this parameter and set it to the hubspotutk cookie value to enable cookie tracking on your submission
    //     "pageUri": "www.example.com/page",
    //     "pageName": "Example page"
    //   },
      "legalConsentOptions":{ // Include this object when GDPR options are enabled
        "consent":{
          "consentToProcess":true,
          "text":"I agree to allow Example Company to store and process my personal data.",
          "communications":[
            {
              "value":true,
              "subscriptionTypeId":999,
              "text":"I agree to receive marketing communications from Example Company."
            }
          ]
        }
      }
    }

    var final_data = JSON.stringify(data)

    xhr.open('POST', url);
    // Sets the value of the 'Content-Type' HTTP request headers to 'application/json'
    xhr.setRequestHeader('Content-Type', 'application/json');

    xhr.onreadystatechange = function() {
        if(xhr.readyState == 4 && xhr.status == 200) { 
            console.log(xhr.responseText); // Returns a 200 response if the submission is successful.
        } else if (xhr.readyState == 4 && xhr.status == 400){ 
            console.log(xhr.responseText); // Returns a 400 error the submission is rejected.          
        } else if (xhr.readyState == 4 && xhr.status == 403){ 
            console.log(xhr.responseText); // Returns a 403 error if the portal isn't allowed to post submissions.           
        } else if (xhr.readyState == 4 && xhr.status == 404){ 
            console.log(xhr.responseText); //Returns a 404 error if the formGuid isn't found     
        }
       }


    // Sends the request 
    
    xhr.send(final_data)
 }