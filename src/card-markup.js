function createImageCardMarkup(hit) {
  return `
    <div class="photo-card">
        <a class="photo-card-link" href="${hit.largeImageURL}">
            <img src="${hit.webformatURL}" alt="${hit.tags}" loading="lazy" />
            <div class="info">
                <p class="info-item">
                    <b>Likes:</b> ${hit.likes}
                </p>
                <p class="info-item">
                    <b>Views:</b> ${hit.views}
                </p>
                <p class="info-item">
                    <b>Comments:</b> ${hit.comments}
                </p>
                <p class="info-item">
                    <b>Downloads:</b> ${hit.downloads}
                </p>
            </div>
        </a>
    </div>
    `;
}
export { createImageCardMarkup };
