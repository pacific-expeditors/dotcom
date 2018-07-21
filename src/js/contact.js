const handleContactFormSubmission = () => {
    if (document.querySelector('#form')) {
      document.querySelector('#form').addEventListener('submit', (e) => {
        e.preventDefault();
        const selectors = {
          name: 'input[name="name"]',
          email: 'input[name="email"]',
          phoneNumber: 'input[name="phoneNumber"]',
          company: 'input[name="company"]',
          location: 'input[name="location"]',
          msg: 'textarea[name="msg"]'
        };
  
        const checkboxes = {
          segments: 'input[name^="segments"]:checked'
        };
  
        let request = {};
        Object.keys(selectors).forEach((key) => {
          request[key] = document.querySelector(selectors[key]).value;
        });
  
        Object.keys(checkboxes).forEach((key) => {
          request[key] = [];
  
          document.querySelectorAll(checkboxes[key]).forEach((checkbox) => {
            if (checkbox && checkbox.value) {
              request[key].push(checkbox.value);
            }
          });
  
          request[key] = request[key].join(', ');
        });
  
        fetch('/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(request)
        })
        .then((res) => res.json())
        .then((res) => {
          document.querySelector('#msg').classList.remove('error');
          document.querySelector('#msg').classList.add('success');
          document.querySelector('#msg').innerHTML = 'Thank you for contacting us. We will get back to you shortly.';
        })
        .catch((err) => {
          document.querySelector('#msg').classList.remove('success');
          document.querySelector('#msg').classList.add('error');
          document.querySelector('#msg').innerHTML = 'Something went wrong. Please try again.';
        });
      });
    }
  }

  export default handleContactFormSubmission;