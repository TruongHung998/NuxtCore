<template>
  <section id="venue" class="venue-section">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">Venue & Location</h2>
        <div class="section-subtitle script-font">Where our story begins</div>
      </div>

      <div class="venue-content">
        <div class="venue-info">
          <div class="venue-card ceremony">
            <h3>Ceremony</h3>
            <div class="venue-details">
              <h4>Wedding Ceremony Venue</h4>
              <p class="address">
                455 Nguyen Van Tao Street<br />Nha Be District, Ho Chi Minh
                City, Vietnam
              </p>
              <p class="description">
                A beautiful venue in Ho Chi Minh City where Lan Huyen and Viet
                Hung will exchange vows, surrounded by family and friends in a
                traditional Vietnamese wedding celebration.
              </p>
              <div class="venue-actions">
                <a
                  href="https://maps.google.com/?q=455+Nguyen+Van+Tao+Street+Nha+Be+District+Ho+Chi+Minh+City+Vietnam"
                  target="_blank"
                  class="venue-button"
                >
                  <svg
                    width="20"
                    height="20"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"
                    />
                  </svg>
                  Get Directions
                </a>
                <button
                  class="venue-button secondary"
                  @click="openModal('ceremony')"
                >
                  View Details
                </button>
              </div>
            </div>
          </div>

          <div class="venue-card reception">
            <h3>Reception</h3>
            <div class="venue-details">
              <h4>Wedding Reception Hall</h4>
              <p class="address">
                455 Nguyen Van Tao Street<br />Nha Be District, Ho Chi Minh
                City, Vietnam
              </p>
              <p class="description">
                The same beautiful venue will host our reception celebration,
                featuring traditional Vietnamese cuisine and festivities to
                honor our union.
              </p>
              <div class="venue-actions">
                <a
                  href="https://maps.google.com/?q=455+Nguyen+Van+Tao+Street+Nha+Be+District+Ho+Chi+Minh+City+Vietnam"
                  target="_blank"
                  class="venue-button"
                >
                  <svg
                    width="20"
                    height="20"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"
                    />
                  </svg>
                  Get Directions
                </a>
                <button
                  class="venue-button secondary"
                  @click="openModal('reception')"
                >
                  View Details
                </button>
              </div>
            </div>
          </div>
        </div>

        <div class="map-container">
          <div class="map-wrapper">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387190.2799160891!2d-74.25987368715491!3d40.697670063757695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY!5e0!3m2!1sen!2sus!4v1623456789012!5m2!1sen!2sus"
              width="100%"
              height="400"
              style="border: 0"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              class="venue-map"
            >
            </iframe>
            <div class="map-overlay">
              <div class="map-info">
                <h4>Wedding Locations</h4>
                <p>
                  Both venues are located in the heart of the city, just 5
                  minutes apart.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Transportation & Parking Info -->
      <div class="additional-info">
        <div class="info-grid">
          <div class="info-card">
            <div class="info-icon">
              <svg
                width="30"
                height="30"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.22.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z"
                />
              </svg>
            </div>
            <h4>Parking</h4>
            <p>
              Free parking available at both venues. Valet service provided at
              the reception.
            </p>
          </div>

          <div class="info-card">
            <div class="info-icon">
              <svg
                width="30"
                height="30"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M4 16c0 .88.39 1.67 1 2.22V20c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h8v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1.78c.61-.55 1-1.34 1-2.22V6c0-3.5-3.58-4-8-4s-8 .5-8 4v10zm3.5 1c-.83 0-1.5-.67-1.5-1.5S6.67 14 7.5 14s1.5.67 1.5 1.5S8.33 17 7.5 17zm9 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm1.5-6H6V6.85c.52-.4 2.05-.85 6-.85s5.48.45 6 .85V11z"
                />
              </svg>
            </div>
            <h4>Transportation</h4>
            <p>
              Complimentary shuttle service between venues. Uber/Lyft readily
              available.
            </p>
          </div>

          <div class="info-card">
            <div class="info-icon">
              <svg
                width="30"
                height="30"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
                />
              </svg>
            </div>
            <h4>Accessibility</h4>
            <p>
              Both venues are wheelchair accessible with accessible restroom
              facilities.
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal for venue details -->
    <div v-if="modalOpen" class="modal-overlay" @click="closeModal">
      <div class="modal-content" @click.stop>
        <button class="modal-close" @click="closeModal">
          <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
            <path
              d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
            />
          </svg>
        </button>
        <div v-if="modalType === 'ceremony'" class="modal-body">
          <h3>St. Mary's Church</h3>
          <img
            src="/assets/hinhcuoi/HUG00246.jpg"
            alt="St. Mary's Church"
            class="modal-image"
          />
          <div class="modal-details">
            <p><strong>Address:</strong> 123 Main Street, City, State 12345</p>
            <p><strong>Phone:</strong> (123) 456-7890</p>
            <p><strong>Parking:</strong> Free parking lot behind the church</p>
            <p><strong>Capacity:</strong> 200 guests</p>
            <p>
              <strong>Special Notes:</strong> Please arrive 15 minutes early.
              Photography is permitted during the ceremony.
            </p>
          </div>
        </div>
        <div v-if="modalType === 'reception'" class="modal-body">
          <h3>Grand Ballroom</h3>
          <img
            src="/assets/hinhcuoi/HUG00263.jpg"
            alt="Grand Ballroom"
            class="modal-image"
          />
          <div class="modal-details">
            <p>
              <strong>Address:</strong> 456 Celebration Ave, City, State 12345
            </p>
            <p><strong>Phone:</strong> (123) 456-7891</p>
            <p><strong>Parking:</strong> Valet parking included</p>
            <p><strong>Capacity:</strong> 150 guests</p>
            <p>
              <strong>Special Notes:</strong> Bar opens at 5:00 PM. Dance floor
              available all evening.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const modalOpen = ref(false);
const modalType = ref("");

const openModal = (type) => {
  modalType.value = type;
  modalOpen.value = true;
  document.body.style.overflow = "hidden";
};

const closeModal = () => {
  modalOpen.value = false;
  document.body.style.overflow = "";
};

const handleEscapeKey = (e) => {
  if (e.key === "Escape" && modalOpen.value) {
    closeModal();
  }
};

onMounted(() => {
  window.addEventListener("keydown", handleEscapeKey);

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

  const elements = document.querySelectorAll(
    ".venue-card, .info-card, .map-wrapper"
  );
  elements.forEach((el) => observer.observe(el));
});

onUnmounted(() => {
  window.removeEventListener("keydown", handleEscapeKey);
  document.body.style.overflow = "";
});
</script>

<style scoped>
.venue-section {
  padding: 5rem 0;
  background: var(--secondary-color);
}

.container {
  max-width: 1400px;
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

.venue-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  margin-bottom: 4rem;
}

.venue-info {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.venue-card {
  background: var(--white);
  padding: 2.5rem;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  opacity: 0;
  transform: translateX(-30px);
}

.venue-card.animate {
  opacity: 1;
  transform: translateX(0);
}

.venue-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
}

.venue-card h3 {
  color: var(--primary-color);
  font-size: 1.3rem;
  margin-bottom: 1.5rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: 600;
}

.venue-card h4 {
  font-size: 1.8rem;
  color: var(--text-dark);
  margin-bottom: 1rem;
}

.address {
  color: var(--text-light);
  margin-bottom: 1.5rem;
  font-size: 1.1rem;
  line-height: 1.6;
}

.description {
  color: var(--text-light);
  line-height: 1.7;
  margin-bottom: 2rem;
}

.venue-actions {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.venue-button {
  padding: 0.8rem 1.5rem;
  border: none;
  border-radius: 25px;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  font-size: 0.9rem;
}

.venue-button:not(.secondary) {
  background: var(--primary-color);
  color: white;
}

.venue-button:not(.secondary):hover {
  background: var(--text-dark);
  transform: translateY(-2px);
}

.venue-button.secondary {
  background: transparent;
  color: var(--primary-color);
  border: 2px solid var(--primary-color);
}

.venue-button.secondary:hover {
  background: var(--primary-color);
  color: white;
}

.map-container {
  display: flex;
  align-items: center;
}

.map-wrapper {
  position: relative;
  width: 100%;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  opacity: 0;
  transform: translateX(30px);
  transition: all 0.8s ease;
}

.map-wrapper.animate {
  opacity: 1;
  transform: translateX(0);
}

.venue-map {
  filter: grayscale(20%);
  transition: filter 0.3s ease;
}

.map-wrapper:hover .venue-map {
  filter: grayscale(0%);
}

.map-overlay {
  position: absolute;
  top: 20px;
  left: 20px;
  background: rgba(255, 255, 255, 0.95);
  padding: 1.5rem;
  border-radius: 15px;
  backdrop-filter: blur(10px);
  max-width: 200px;
}

.map-info h4 {
  color: var(--primary-color);
  margin-bottom: 0.5rem;
  font-size: 1.1rem;
}

.map-info p {
  color: var(--text-light);
  font-size: 0.9rem;
  line-height: 1.5;
}

/* Additional Info */
.additional-info {
  background: var(--white);
  padding: 3rem;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

.info-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.info-card {
  text-align: center;
  padding: 2rem;
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.6s ease;
}

.info-card.animate {
  opacity: 1;
  transform: translateY(0);
}

.info-icon {
  color: var(--primary-color);
  margin-bottom: 1rem;
  display: flex;
  justify-content: center;
}

.info-card h4 {
  color: var(--text-dark);
  margin-bottom: 1rem;
  font-size: 1.3rem;
}

.info-card p {
  color: var(--text-light);
  line-height: 1.6;
}

/* Modal */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  z-index: 2000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
}

.modal-content {
  background: var(--white);
  border-radius: 20px;
  max-width: 600px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
}

.modal-close {
  position: absolute;
  top: 20px;
  right: 20px;
  background: var(--primary-color);
  color: white;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.3s ease;
}

.modal-close:hover {
  background: var(--text-dark);
}

.modal-body {
  padding: 2rem;
}

.modal-body h3 {
  font-size: 2rem;
  color: var(--primary-color);
  margin-bottom: 1.5rem;
}

.modal-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 10px;
  margin-bottom: 1.5rem;
}

.modal-details p {
  margin-bottom: 1rem;
  color: var(--text-light);
  line-height: 1.6;
}

.modal-details strong {
  color: var(--text-dark);
}

@media (max-width: 1024px) {
  .venue-content {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .map-wrapper {
    transform: translateY(30px);
  }

  .map-wrapper.animate {
    transform: translateY(0);
  }
}

@media (max-width: 768px) {
  .section-title {
    font-size: 2rem;
  }

  .venue-card {
    padding: 2rem 1.5rem;
  }

  .venue-actions {
    flex-direction: column;
  }

  .venue-button {
    justify-content: center;
  }

  .info-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .additional-info {
    padding: 2rem 1.5rem;
  }

  .modal-content {
    margin: 1rem;
  }

  .modal-body {
    padding: 1.5rem;
  }
}
</style>
