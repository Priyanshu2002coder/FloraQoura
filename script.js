  // JavaScript for handling star rating
  function handleStarRating(rating) {
    document.getElementById('rating-display').innerHTML = rating + ' stars';
  }

  // JavaScript for handling form submission
  function submitReview() {
    const name = document.getElementById('name').value;
    const rating = document.querySelector('.star-rating input:checked').value;
    const comment = document.getElementById('comment').value;

    // Display the new review in the reviews list
    const reviewsList = document.getElementById('reviews-list');
    const newReviewItem = document.createElement('li');
    newReviewItem.classList.add('review-item');
    newReviewItem.innerHTML = `<p><strong>${name}</strong> - ${rating} stars</p><p>${comment}</p>`;
    reviewsList.appendChild(newReviewItem);

    // Reset the form
    document.getElementById('review-form').reset();
  }