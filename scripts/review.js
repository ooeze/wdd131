document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const reviewResultsDiv = document.getElementById('review-results');

    const productName = urlParams.get('productName');
    const rating = urlParams.get('rating');
    const installationDate = urlParams.get('installationDate');
    const features = urlParams.getAll('features').join(', ');
    const writtenReview = urlParams.get('writtenReview');
    const userName = urlParams.get('userName') || 'Anonymous';

    reviewResultsDiv.innerHTML = `
        <p><strong>Product Name:</strong> ${productName}</p>
        <p><strong>Overall Rating:</strong> ${rating} stars</p>
        <p><strong>Date of Installation:</strong> ${installationDate}</p>
        <p><strong>Useful Features:</strong> ${features}</p>
        <p><strong>Written Review:</strong> ${writtenReview}</p>
        <p><strong>Reviewer Name:</strong> ${userName}</p>
    `;
    const currentYear = new Date().getFullYear();
    document.getElementById('currentyear').textContent = currentYear;
    
    
    const lastModifiedDate = document.lastModified;
    document.getElementById('lastModified').textContent = `Last Modified: ${lastModifiedDate}`;
    
});
