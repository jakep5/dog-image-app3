function watchForm() {
    $('form').submit(function(e) {
        e.preventDefault();
        var breed = document.getElementById("breed").value;
        getBreedImage(breed);
    })
}

function getBreedImage(breed) {
    fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
        .then (response => response.json())
        .then (responseJson =>
            displayResults(responseJson))
        .catch(error => alert ('The input breed could not be found.'));
}

function displayResults(responseJson) {
        console.log(responseJson.message);
        if ((responseJson.message).includes('Breed not found')){
            alert ('The input breed could not be found')
        }
        else {
        $(document.getElementById("dogImage")).replaceWith (
            `<img src="${responseJson.message}" class="dogImages" id="dogImage">`

        )
        };
}

$(function() {
    console.log('Form is ready! Waiting for submit');
    watchForm();
});
