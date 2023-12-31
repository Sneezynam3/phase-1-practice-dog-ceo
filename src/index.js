console.log('%c HI', 'color: firebrick')

fetch("https://dog.ceo/api/breeds/image/random/4")
  .then(response => response.json())
  .then(data => {
    const dogImageContainer = document.getElementById('dog-image-container');
    data.message.forEach(imageUrl => {
      const imgElement = document.createElement('img');
      imgElement.src = imageUrl;
      dogImageContainer.appendChild(imgElement);
    });
  });

  fetch("https://dog.ceo/api/breeds/list/all")
  .then(response => response.json())
  .then(data => {
    const ulElement = document.getElementById('dog-breeds');
    const dropdownElement = document.getElementById('breed-dropdown');

    Object.keys(data.message).forEach(breed => {
      const liElement = document.createElement('li');
      liElement.textContent = breed;

      liElement.addEventListener('click', function() {
        liElement.style.color = 'red';
      });

      dropdownElement.addEventListener('change', function() {
        const selectedValue = dropdownElement.value;

        if (breed.startsWith(selectedValue)) {
          if (!ulElement.contains(liElement)) {
            ulElement.appendChild(liElement);
          }
        } else {
          if (ulElement.contains(liElement)) {
            ulElement.removeChild(liElement);
          }
        }
      });
    });
  });











        
        // fetch("https://dog.ceo/api/breeds/image/random/4")
        // .then(response => response.json())
        //   .then(data => {
        //     console.log(data); // Check the structure of the response object
        //     // Access the dog image URLs from data.message
        //     const dogImageURLs = data.message;
        //     // Iterate over the dog image URLs and create HTML elements
        //     dogImageURLs.forEach(imageURL => {
        //       const imgElement = document.createElement('img');
        //       imgElement.src = imageURL;
        //       document.body.appendChild(imgElement);
        //     });
        //   })
        //   .catch(error => {
        //       console.log(error);
        //       const errorElement = document.createElement('p');
        //       errorElement.textContent = "Unauthorized Access";
        //       document.body.appendChild(errorElement);
        //     });