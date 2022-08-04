(function (){
    "use strict";
        const detailsForm = document.getElementById("destination_details_form");
        detailsForm.addEventListener("submit",  handleFormSubmit);
            
        function handleFormSubmit (evt){
            evt.preventDefault();
            // 1. extract the values from each form field
            // 2. clear out the form fields
            // 3. run a function that creates a new card 
            // 4. if needed, change the header at the top of the destination list
            // 5. add the card
       
        // 1
        const destName = evt.target.elements["name"].value;
        const destLocation= evt.target.elements["location"].value;
        const destPhoto = evt.target.elements["photo"].value;
        const destDescription = evt.target.elements["description"].value;

        //2
        for (let i= 0; i< detailsForm.length; i++) {
            detailsForm.elements[i].value = "";
        }

        //Burada neden evt.target değil de detailsForm.elements kullandık?

        //3
        const destCard = createDestinationCard (destName, destLocation, destPhoto, destDescription);

        //4
        const wishListContainer = document.getElementById("destination_container");
        if (wishListContainer.children.length === 0) {
            document.getElementById("title").innerHTML = "My Wishlist";
        }

        document.querySelector("#destination_container").appendChild(destCard);
        };

      function createDestinationCard (name, location, photoUrl, description) {
        const card = document.createElement("div");
        card.className = "card";
        
        const image = document.createElement("img");
        image.setAttribute("alt", name);

        const constantPhotoUrl = "images/signpost.jpg";
        if (photoUrl.length === 0) { 
            // image.src = constantPhotoUrl bu da işe yarar muhtemelen. Hoca böyle dedi. Denemek lazım :D 
            image.setAttribute("src", constantPhotoUrl);
            }
            else {image.setAttribute("src", photoUrl)};

            card.appendChild(image);

            const cardBody = document.createElement("div");
            cardBody.className = "card-body";

            const cardTitle = document.createElement("h3");
            cardTitle.innerHTML = name;
            cardBody.appendChild(cardTitle);

            const cardSubtitle = document.createElement("h4");
            cardSubtitle.innerHTML = location;
            cardBody.appendChild(cardSubtitle);

            if (description !== 0) {
                const cardText = document.createElement("p");
                cardText.innerHTML = description;
                cardText.className = "card-text";
                cardBody.appendChild(cardText);
            }

            const deleteBtn = document.createElement("button");
            deleteBtn.innerHTML = "Remove";
            cardBody.appendChild(deleteBtn);
            deleteBtn.addEventListener("click", removeDestination);
            
            card.appendChild(cardBody);
            return card;
        }

     function removeDestination(event){ 
        const card = event.target.parentElement.parentElement;
        card.remove();
        
        };
            
        })();