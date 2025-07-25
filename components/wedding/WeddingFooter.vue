<template>
  <footer class="wedding-footer">
    <div class="container">
      <div class="footer-content">
        <div class="footer-main">
          <div class="couple-initials">
            <span class="script-font">L & V</span>
          </div>
          <h3 class="footer-title">Lan Huyen & Viet Hung</h3>
          <p class="wedding-date">November 30th, 2025</p>
          <p class="footer-message">
            Thank you for being part of our love story
          </p>
        </div>

        <div class="footer-links">
          <div class="link-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#hero">Home</a></li>
              <li><a href="#story">Our Story</a></li>
              <li><a href="#gallery">Gallery</a></li>
              <li><a href="#details">Details</a></li>
              <li><a href="#venue">Venue</a></li>
            </ul>
          </div>

          <div class="link-section">
            <h4>Important Info</h4>
            <ul>
              <li><a href="#details">RSVP by November 15th</a></li>
              <li><a href="#details">Dress Code: Formal</a></li>
              <li><a href="#venue">Parking Information</a></li>
              <li><a href="#details">Gift Registry</a></li>
            </ul>
          </div>

          <div class="link-section">
            <h4>Contact Us</h4>
            <ul>
              <li>
                <a href="mailto:sarahandjohn2026@email.com"
                  >sarahandjohn2026@email.com</a
                >
              </li>
              <li><a href="tel:+1234567890">(123) 456-7890</a></li>
            </ul>
            <div class="social-links">
              <a href="#" class="social-link" aria-label="Instagram">
                <svg
                  width="20"
                  height="20"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
                  />
                </svg>
              </a>
              <a href="#" class="social-link" aria-label="Facebook">
                <svg
                  width="20"
                  height="20"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div class="footer-bottom">
        <div class="footer-hearts">
          <span class="heart">♥</span>
          <span class="heart">♥</span>
          <span class="heart">♥</span>
        </div>
        <p class="copyright">
          © 2025 Lan Huyen & Viet Hung's Wedding. Made with love.
        </p>
        <div class="footer-divider"></div>
        <p class="quote script-font">
          "Love is not about how many days, months, or years you have been
          together. Love is about how much you love each other every single
          day."
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { onMounted } from "vue";

onMounted(() => {
  // Intersection Observer for footer animation
  const observerOptions = {
    threshold: 0.2,
    rootMargin: "0px 0px 0px 0px",
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate");
      }
    });
  }, observerOptions);

  const footerElements = document.querySelectorAll(
    ".footer-main, .link-section, .footer-bottom"
  );
  footerElements.forEach((el) => observer.observe(el));
});
</script>

<style scoped>
.wedding-footer {
  background: linear-gradient(135deg, var(--text-dark) 0%, #1a1a1a 100%);
  color: white;
  padding: 4rem 0 2rem;
  position: relative;
  overflow: hidden;
}

.wedding-footer::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(
    90deg,
    transparent,
    var(--primary-color),
    transparent
  );
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.footer-content {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 4rem;
  margin-bottom: 3rem;
}

.footer-main {
  text-align: center;
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s ease;
}

.footer-main.animate {
  opacity: 1;
  transform: translateY(0);
}

.couple-initials {
  font-size: 4rem;
  color: var(--primary-color);
  margin-bottom: 1rem;
  display: block;
}

.footer-title {
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
  color: white;
}

.wedding-date {
  color: var(--primary-color);
  font-size: 1.2rem;
  font-weight: 500;
  margin-bottom: 1.5rem;
  letter-spacing: 1px;
}

.footer-message {
  color: rgba(255, 255, 255, 0.8);
  font-style: italic;
  font-size: 1.1rem;
  line-height: 1.6;
  max-width: 300px;
  margin: 0 auto;
}

.footer-links {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}

.link-section {
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s ease;
}

.link-section.animate {
  opacity: 1;
  transform: translateY(0);
}

.link-section h4 {
  color: var(--primary-color);
  font-size: 1.2rem;
  margin-bottom: 1.5rem;
  font-weight: 600;
}

.link-section ul {
  list-style: none;
  padding: 0;
}

.link-section li {
  margin-bottom: 0.8rem;
}

.link-section a {
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  transition: color 0.3s ease;
  font-size: 0.95rem;
}

.link-section a:hover {
  color: var(--primary-color);
}

.social-links {
  display: flex;
  gap: 1rem;
  margin-top: 1.5rem;
}

.social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  color: rgba(255, 255, 255, 0.8);
  transition: all 0.3s ease;
}

.social-link:hover {
  background: var(--primary-color);
  color: white;
  transform: translateY(-2px);
}

.footer-bottom {
  text-align: center;
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.8s ease;
}

.footer-bottom.animate {
  opacity: 1;
  transform: translateY(0);
}

.footer-hearts {
  margin-bottom: 1rem;
}

.heart {
  color: var(--primary-color);
  font-size: 1.5rem;
  margin: 0 0.5rem;
  animation: heartbeat 2s ease-in-out infinite;
}

.heart:nth-child(2) {
  animation-delay: 0.2s;
}

.heart:nth-child(3) {
  animation-delay: 0.4s;
}

@keyframes heartbeat {
  0%,
  100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
}

.copyright {
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.9rem;
  margin-bottom: 1.5rem;
}

.footer-divider {
  width: 100px;
  height: 1px;
  background: var(--primary-color);
  margin: 1.5rem auto;
}

.quote {
  color: rgba(255, 255, 255, 0.8);
  font-size: 1.1rem;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
  font-style: italic;
}

@media (max-width: 1024px) {
  .footer-content {
    grid-template-columns: 1fr;
    gap: 3rem;
    text-align: center;
  }

  .footer-links {
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
  }
}

@media (max-width: 768px) {
  .wedding-footer {
    padding: 3rem 0 1.5rem;
  }

  .footer-content {
    gap: 2rem;
  }

  .footer-links {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .couple-initials {
    font-size: 3rem;
  }

  .footer-title {
    font-size: 2rem;
  }

  .quote {
    font-size: 1rem;
  }
}

@media (max-width: 480px) {
  .container {
    padding: 0 1rem;
  }

  .couple-initials {
    font-size: 2.5rem;
  }

  .footer-title {
    font-size: 1.8rem;
  }

  .social-links {
    justify-content: center;
  }
}
</style>
