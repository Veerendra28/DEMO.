searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
  searchForm.classList.toggle('active');
}

let loginForm = document.querySelector('.login-form-container');

document.querySelector('#login-btn').onclick = () =>{
  loginForm.classList.toggle('active');
}

document.querySelector('#close-login-btn').onclick = () =>{
  loginForm.classList.remove('active');
}

window.onscroll = () =>{

  searchForm.classList.remove('active');

  if(window.scrollY > 80){
    document.querySelector('.header .header-2').classList.add('active');
  }else{
    document.querySelector('.header .header-2').classList.remove('active');
  }

}

window.onload = () =>{

  if(window.scrollY > 80){
    document.querySelector('.header .header-2').classList.add('active');
  }else{
    document.querySelector('.header .header-2').classList.remove('active');
  }

  fadeOut();

}

function loader(){
  document.querySelector('.loader-container').classList.add('active');
}

function fadeOut(){
  setTimeout(loader, 4000);
}

var swiper = new Swiper(".books-slider", {
  loop:true,
  centeredSlides: true,
  autoplay: {
    delay: 9500,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

var swiper = new Swiper(".featured-slider", {
  spaceBetween: 10,
  loop:true,
  centeredSlides: true,
  autoplay: {
    delay: 9500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    450: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 4,
    },
  },
});

var swiper = new Swiper(".arrivals-slider", {
  spaceBetween: 10,
  loop:true,
  centeredSlides: true,
  autoplay: {
    delay: 9500,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

var swiper = new Swiper(".reviews-slider", {
  spaceBetween: 10,
  grabCursor:true,
  loop:true,
  centeredSlides: true,
  autoplay: {
    delay: 9500,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

var swiper = new Swiper(".blogs-slider", {
  spaceBetween: 10,
  grabCursor:true,
  loop:true,
  centeredSlides: true,
  autoplay: {
    delay: 9500,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});


document.addEventListener('DOMContentLoaded', () => {
    const cartCount = document.querySelector('.fa-shopping-cart');
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    function updateCartCount() {
        if (cartCount) {
            cartCount.setAttribute('data-count', cart.length);
        }
    }

    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const item = {
                title: button.getAttribute('data-title'),
                price: button.getAttribute('data-price'),
                image: button.getAttribute('data-image')
            };
            cart.push(item);
            localStorage.setItem('cart', JSON.stringify(cart));
            updateCartCount();

            // Scroll to the top of the website
            window.scrollTo({
                top: 0,
                behavior: 'smooth' // Ensures smooth scrolling
            });
        });
    });

    updateCartCount();
});



localStorage.setItem('cartTotal', total.toFixed(2));

document.getElementById('totalAmount').innerText = localStorage.getItem('cartTotal') || '0.00';

function placeOrder() {
  alert('Payment successful! Your order has been placed.');
  localStorage.removeItem('cart');
  localStorage.removeItem('cartTotal');
  window.location.href = 'index.html';
}


// Update UPI QR and link with actual price
if (totalPrice) {
  const upiID = 'yourupi@bank';
  const amount = parseFloat(totalPrice).toFixed(2);
  const upiURL = `upi://pay?pa=${upiID}&pn=Hacking+Books&am=${amount}&cu=INR`;

  // Update QR code image
  const qrImg = document.querySelector('.qr-code img');
  qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(upiURL)}`;

  // Update link
  document.getElementById('scanNow').href = upiURL;
}



document.addEventListener('DOMContentLoaded', () => {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  const cartIcon = document.getElementById('cart-icon');
  if (cartIcon) {
    cartIcon.setAttribute('data-count', cart.length);
  }
});


document.addEventListener('DOMContentLoaded', () => {
    const loginFormContainer = document.querySelector('.login-form-container');
    const loginButton = document.querySelector('#login-btn');
    const closeLoginButton = document.querySelector('#close-login-btn');
    const loginForm = loginFormContainer.querySelector('form');

    // Show login form
    loginButton.addEventListener('click', () => {
        loginFormContainer.classList.add('active');
    });

    // Hide login form
    closeLoginButton.addEventListener('click', () => {
        loginFormContainer.classList.remove('active');
    });

    // Handle form submission
    loginForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const email = loginForm.querySelector('input[type="email"]').value.trim();
        const password = loginForm.querySelector('input[type="password"]').value.trim();

        if (validateEmail(email) && validatePassword(password)) {
            alert('Login successful!');
            loginFormContainer.classList.remove('active');
        } else {
            alert('Invalid credentials. Please try again.');
        }
    });

    // Email validation
    function validateEmail(email) {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    }

    // Password validation (minimum 6 characters)
    function validatePassword(password) {
        return password.length >= 6;
    }
});

