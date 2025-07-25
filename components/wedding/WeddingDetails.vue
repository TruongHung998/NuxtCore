<template>
  <section id="details" class="details-section">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">Wedding Details</h2>
        <div class="section-subtitle script-font">
          Everything you need to know
        </div>
      </div>

      <div class="details-grid">
        <!-- Ceremony Details -->
        <div class="detail-card fade-in stagger-1">
          <div class="card-icon">
            <svg width="40" height="40" fill="currentColor" viewBox="0 0 24 24">
              <path
                d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
              />
            </svg>
          </div>
          <h3>Ceremony</h3>
          <div class="detail-info">
            <p><strong>Date:</strong> Saturday, November 30, 2025</p>
            <p>
              <strong>Vietnamese:</strong> Thứ Bảy, ngày 30 tháng 11 năm 2025
            </p>
            <p><strong>Time:</strong> 10:00 AM (Vietnam Time)</p>
            <p><strong>Location:</strong> Wedding Venue</p>
            <p>
              <strong>Address:</strong> 455 Nguyen Van Tao Street, Nha Be
              District, Ho Chi Minh City, Vietnam
            </p>
          </div>
          <div class="dress-code">
            <strong>Dress Code:</strong> Formal Attire
          </div>
        </div>

        <!-- Reception Details -->
        <div class="detail-card fade-in stagger-2">
          <div class="card-icon">
            <svg width="40" height="40" fill="currentColor" viewBox="0 0 24 24">
              <path
                d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2v-1H6v1zM16 2H8C6.9 2 6 2.9 6 4v10h12V4c0-1.1-.9-2-2-2zm-1 9H9V8h6v3zm0-5H9V4h6v2z"
              />
            </svg>
          </div>
          <h3>Reception</h3>
          <div class="detail-info">
            <p><strong>Time:</strong> 12:00 PM - 6:00 PM</p>
            <p><strong>Location:</strong> Wedding Reception Hall</p>
            <p>
              <strong>Address:</strong> 455 Nguyen Van Tao Street, Nha Be
              District, Ho Chi Minh City, Vietnam
            </p>
            <p><strong>Lunch:</strong> 1:00 PM</p>
            <p><strong>Celebration:</strong> All afternoon</p>
          </div>
        </div>

        <!-- Accommodation -->
        <div class="detail-card fade-in stagger-3">
          <div class="card-icon">
            <svg width="40" height="40" fill="currentColor" viewBox="0 0 24 24">
              <path
                d="M7 13c1.66 0 3-1.34 3-3S8.66 7 7 7s-3 1.34-3 3 1.34 3 3 3zm12-6h-8v7H3V6H1v15h2v-3h18v3h2v-9c0-2.21-1.79-4-4-4z"
              />
            </svg>
          </div>
          <h3>Accommodation</h3>
          <div class="detail-info">
            <p><strong>Recommended Hotels in Ho Chi Minh City:</strong></p>
            <p><strong>Hotel:</strong> Nearby Hotels Available</p>
            <p><strong>Area:</strong> District 7 & Nha Be District</p>
            <p><strong>Contact:</strong> For hotel recommendations</p>
            <p><strong>Booking:</strong> Please book in advance</p>
            <p><strong>Wedding:</strong> November 30, 2025</p>
          </div>
          <a href="tel:+84123456789" class="hotel-contact"
            >Call: +84 123 456 789</a
          >
        </div>

        <!-- Registry -->
        <div class="detail-card fade-in stagger-4">
          <div class="card-icon">
            <svg width="40" height="40" fill="currentColor" viewBox="0 0 24 24">
              <path
                d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
              />
            </svg>
          </div>
          <h3>Gift Registry</h3>
          <div class="detail-info">
            <p>
              Your presence at our wedding is the greatest gift of all! If you
              wish to give a gift, we've created registries at:
            </p>
          </div>
          <div class="registry-links">
            <a href="#" class="registry-link">Target</a>
            <a href="#" class="registry-link">Amazon</a>
            <a href="#" class="registry-link">Williams Sonoma</a>
          </div>
        </div>
      </div>

      <!-- RSVP Section -->
      <div class="rsvp-section">
        <div class="rsvp-card">
          <h3>Please RSVP by November 15, 2025</h3>
          <p>
            Lan Huyen & Viet Hung can't wait to celebrate with you! Please let
            us know if you'll be joining us on our special day.
          </p>
          <div class="rsvp-actions">
            <button class="rsvp-button accept">I'll be there!</button>
            <button class="rsvp-button decline">Can't make it</button>
          </div>
          <div class="contact-info">
            <p>Questions? Contact us at:</p>
            <p>
              <a href="mailto:lanhuyenvietung2025@email.com"
                >lanhuyenvietung2025@email.com</a
              >
            </p>
            <p><a href="tel:+84123456789">+84 123 456 789</a></p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from "vue";

onMounted(() => {
  // Intersection Observer for scroll animations
  const observerOptions = {
    threshold: 0.2,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate");
      }
    });
  }, observerOptions);

  const cards = document.querySelectorAll(".detail-card, .rsvp-card");
  cards.forEach((card) => observer.observe(card));
});

const handleRSVP = (response) => {
  // Handle RSVP logic here
  console.log("RSVP Response:", response);
  // You can integrate with a backend service or email service
  alert(`Thank you for your RSVP! Response: ${response}`);
};
</script>

<style scoped>
.details-section {
  padding: 5rem 0;
  background: var(--white);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.section-header {
  text-align: center;
  margin-bottom: 4rem;
}

.section-title {
  font-size: 3rem;
  color: var(--primary-color);
  margin-bottom: 1rem;
}

.section-subtitle {
  font-size: 1.5rem;
  color: var(--text-light);
}

.details-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
}

.detail-card {
  background: var(--secondary-color);
  padding: 2.5rem 2rem;
  border-radius: 20px;
  text-align: center;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  opacity: 0;
  transform: translateY(30px);
}

.detail-card.animate {
  opacity: 1;
  transform: translateY(0);
}

.detail-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
}

.card-icon {
  color: var(--primary-color);
  margin-bottom: 1.5rem;
  display: flex;
  justify-content: center;
}

.detail-card h3 {
  font-size: 1.8rem;
  color: var(--text-dark);
  margin-bottom: 1.5rem;
}

.detail-info {
  text-align: left;
  margin-bottom: 1.5rem;
}

.detail-info p {
  margin-bottom: 0.8rem;
  color: var(--text-light);
  line-height: 1.6;
}

.detail-info strong {
  color: var(--text-dark);
}

.dress-code {
  background: var(--primary-color);
  color: white;
  padding: 0.8rem 1.5rem;
  border-radius: 25px;
  font-size: 0.9rem;
  display: inline-block;
}

.hotel-contact {
  color: var(--primary-color);
  text-decoration: none;
  font-weight: 600;
  font-size: 1.1rem;
  transition: color 0.3s ease;
}

.hotel-contact:hover {
  color: var(--text-dark);
}

.registry-links {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

.registry-link {
  padding: 0.8rem 1.5rem;
  background: var(--primary-color);
  color: white;
  text-decoration: none;
  border-radius: 25px;
  transition: all 0.3s ease;
  font-weight: 500;
}

.registry-link:hover {
  background: var(--text-dark);
  transform: translateY(-2px);
}

/* RSVP Section */
.rsvp-section {
  margin-top: 3rem;
}

.rsvp-card {
  background: linear-gradient(135deg, var(--primary-color) 0%, #7a8b7a 100%);
  color: white;
  padding: 3rem 2rem;
  border-radius: 20px;
  text-align: center;
  box-shadow: 0 15px 40px rgba(148, 160, 148, 0.3);
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s ease;
}

.rsvp-card.animate {
  opacity: 1;
  transform: translateY(0);
}

.rsvp-card h3 {
  font-size: 2rem;
  margin-bottom: 1rem;
}

.rsvp-card p {
  font-size: 1.1rem;
  margin-bottom: 2rem;
  opacity: 0.95;
}

.rsvp-actions {
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-bottom: 2rem;
  flex-wrap: wrap;
}

.rsvp-button {
  padding: 1rem 2rem;
  border: none;
  border-radius: 50px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  min-width: 150px;
}

.rsvp-button.accept {
  background: var(--accent-gold);
  color: var(--text-dark);
}

.rsvp-button.accept:hover {
  background: #c19d2a;
  transform: translateY(-2px);
}

.rsvp-button.decline {
  background: rgba(255, 255, 255, 0.2);
  color: white;
  border: 2px solid rgba(255, 255, 255, 0.3);
}

.rsvp-button.decline:hover {
  background: rgba(255, 255, 255, 0.3);
  transform: translateY(-2px);
}

.contact-info {
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  padding-top: 1.5rem;
  margin-top: 2rem;
}

.contact-info p {
  margin-bottom: 0.5rem;
  font-size: 1rem;
}

.contact-info a {
  color: var(--accent-gold);
  text-decoration: none;
  font-weight: 500;
}

.contact-info a:hover {
  text-decoration: underline;
}

@media (max-width: 768px) {
  .section-title {
    font-size: 2rem;
  }

  .details-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .detail-card {
    padding: 2rem 1.5rem;
  }

  .rsvp-card {
    padding: 2rem 1.5rem;
  }

  .rsvp-card h3 {
    font-size: 1.5rem;
  }

  .rsvp-actions {
    flex-direction: column;
    align-items: center;
  }

  .rsvp-button {
    width: 200px;
  }
}
</style>
