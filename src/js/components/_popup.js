document.addEventListener("DOMContentLoaded", function(){
  const popupItemsBtn = document.querySelectorAll('[data-product] .btn');
  const buttonRequest = document.querySelector('.header .request-btn');
  let openPopup = function(el, button) {
    let popupImage = el?.querySelector('[data-image]').getAttribute('src');
    let popupName = el?.querySelector('[data-name]');
    let popupDetails = el?.querySelector('[data-details]');
    let popupDesc = el?.querySelector('[data-desc]');
    let popupDuration = el?.querySelector('[data-duration]');
    let popupPrice = el?.querySelector('[data-price]');

    let triggerRequest = function(parent, button, el) {
      if (button) {
        button.addEventListener('click', function(){
          parent.remove();
          el.click();
        })
      }
    }

    let closePopup = function(el) {
      if (el) {
        el.addEventListener('click', function() {
          if (event.target === this || event.target.classList.contains('product-popup__close')) {
            this.remove();
            document.body.style.overflow = "auto";
          }
        })
      }
    }

    let popupContent = `<div class="product-popup" id="product-popup">
      <div class="product-popup__box">
          <span class="product-popup__close" id="popup-close"></span>

          <div class="product-popup__content">
            <h2 class="product-popup__name">${popupName ? popupName.innerText : ''}</h2>

            <div class="product-popup__extra">
              <span>${popupPrice ? popupPrice.innerText : ''}</span>
              <span>${popupDuration ? popupDuration.innerText : ''}</span>
            </div>

            <div class="product-popup__desc">${popupDesc ? popupDesc.innerHTML : ''}</div>

            <h3>
            Included Amenities and Experiences
            </h3>

            <ul class="product-popup__details">
              ${popupDetails ? popupDetails.innerHTML : ''}
            </ul>

            <div class="product-popup__image">
              <img src="${popupImage}" alt="${popupName ? popupName.innerText : ''}" width="834" height="587" loading="lazy">
            </div>

            <button class="btn btn--bordered" id="popup-button">Book Now</button>
        </div>
      </div>
    </div>`;

    document.body.insertAdjacentHTML('beforeend', popupContent);
    document.body.style.overflow = "hidden";

    triggerRequest(document.querySelector('#product-popup'), document.querySelector('#popup-button'), button);
    closePopup(document.querySelector('#product-popup'));
  }

  for (let btn of popupItemsBtn) {
    btn.addEventListener("click", function(){
      openPopup(btn.closest('[data-product]'), buttonRequest);
    })
  }
});