<template>
  <div class="floating-actions">
    <!-- RSVP Button -->
    <button
      class="fab-button rsvp-fab"
      @click="toggleRSVP"
      :class="{ active: showRSVP }"
      title="RSVP"
    >
      <svg
        v-if="!showRSVP"
        width="24"
        height="24"
        fill="white"
        viewBox="0 0 24 24"
      >
        <path
          d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
        />
      </svg>
      <svg v-else width="24" height="24" fill="white" viewBox="0 0 24 24">
        <path
          d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
        />
      </svg>
    </button>

    <!-- Share Button -->
    <button class="fab-button share-fab" @click="shareWedding" title="Share">
      <svg width="20" height="20" fill="white" viewBox="0 0 24 24">
        <path
          d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92-1.31-2.92-2.92-2.92z"
        />
      </svg>
    </button>

    <!-- Scroll to Top -->
    <button
      class="fab-button scroll-top"
      @click="scrollToTop"
      v-show="showScrollTop"
      title="Back to Top"
    >
      <svg width="20" height="20" fill="white" viewBox="0 0 24 24">
        <path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z" />
      </svg>
    </button>

    <!-- Quick RSVP Form -->
    <div v-if="showRSVP" class="rsvp-popup" @click.self="toggleRSVP">
      <div class="rsvp-form">
        <h3>Quick RSVP</h3>
        <form @submit.prevent="submitRSVP">
          <div class="form-group">
            <input
              v-model="rsvpForm.name"
              type="text"
              placeholder="Your Full Name"
              required
            />
          </div>
          <div class="form-group">
            <input
              v-model="rsvpForm.email"
              type="email"
              placeholder="Email Address"
              required
            />
          </div>
          <div class="form-group">
            <select v-model="rsvpForm.attendance" required>
              <option value="">Will you attend?</option>
              <option value="yes">Yes, I'll be there!</option>
              <option value="no">Sorry, can't make it</option>
            </select>
          </div>
          <div v-if="rsvpForm.attendance === 'yes'" class="form-group">
            <input
              v-model="rsvpForm.guests"
              type="number"
              placeholder="Number of guests (including yourself)"
              min="1"
              max="5"
            />
          </div>
          <div class="form-group">
            <textarea
              v-model="rsvpForm.message"
              placeholder="Special message or dietary requirements"
              rows="3"
            ></textarea>
          </div>
          <div class="form-actions">
            <button type="submit" class="submit-btn" :disabled="submitting">
              {{ submitting ? "Sending..." : "Send RSVP" }}
            </button>
            <button type="button" class="cancel-btn" @click="toggleRSVP">
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const showRSVP = ref(false);
const showScrollTop = ref(false);
const submitting = ref(false);

const rsvpForm = ref({
  name: "",
  email: "",
  attendance: "",
  guests: 1,
  message: "",
});

const toggleRSVP = () => {
  showRSVP.value = !showRSVP.value;
  if (showRSVP.value) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "";
  }
};

const shareWedding = async () => {
  const shareData = {
    title: "Lan Huyen & Viet Hung's Wedding",
    text: "Join us as we celebrate our special day on November 30th, 2025 in Ho Chi Minh City, Vietnam!",
    url: window.location.href,
  };

  try {
    if (navigator.share) {
      await navigator.share(shareData);
    } else {
      // Fallback to copying to clipboard
      await navigator.clipboard.writeText(window.location.href);
      alert("Wedding invitation link copied to clipboard!");
    }
  } catch (error) {
    console.error("Error sharing:", error);
    // Fallback to copying to clipboard
    try {
      await navigator.clipboard.writeText(window.location.href);
      alert("Wedding invitation link copied to clipboard!");
    } catch (clipboardError) {
      console.error("Clipboard error:", clipboardError);
    }
  }
};

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

const submitRSVP = async () => {
  submitting.value = true;

  try {
    // Simulate API call - replace with actual backend integration
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // Success message
    alert(`Thank you ${rsvpForm.value.name}! Your RSVP has been received.`);

    // Reset form
    rsvpForm.value = {
      name: "",
      email: "",
      attendance: "",
      guests: 1,
      message: "",
    };

    toggleRSVP();
  } catch (error) {
    console.error("RSVP submission error:", error);
    alert("Sorry, there was an error submitting your RSVP. Please try again.");
  } finally {
    submitting.value = false;
  }
};

const handleScroll = () => {
  showScrollTop.value = window.pageYOffset > 300;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
  document.body.style.overflow = "";
});
</script>

<style scoped>
.floating-actions {
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.fab-button {
  width: 56px;
  height: 56px;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
}

.fab-button::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(
    circle,
    rgba(255, 255, 255, 0.3) 0%,
    transparent 70%
  );
  opacity: 0;
  transition: opacity 0.3s ease;
}

.fab-button:hover::before {
  opacity: 1;
}

.rsvp-fab {
  background: linear-gradient(135deg, var(--primary-color), #7a8b7a);
  transform: scale(1.1);
}

.rsvp-fab.active {
  background: linear-gradient(135deg, #e74c3c, #c0392b);
  transform: rotate(45deg) scale(1.1);
}

.share-fab {
  background: linear-gradient(135deg, var(--accent-gold), #b8941f);
}

.scroll-top {
  background: linear-gradient(135deg, var(--text-dark), #34495e);
}

.fab-button:hover {
  transform: scale(1.15);
  box-shadow: 0 6px 25px rgba(0, 0, 0, 0.4);
}

.rsvp-fab.active:hover {
  transform: rotate(45deg) scale(1.15);
}

/* RSVP Popup */
.rsvp-popup {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  z-index: 2000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  animation: fadeIn 0.3s ease;
}

.rsvp-form {
  background: var(--white);
  border-radius: 20px;
  padding: 2.5rem;
  max-width: 500px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  animation: slideUp 0.3s ease;
}

.rsvp-form h3 {
  color: var(--primary-color);
  font-size: 2rem;
  margin-bottom: 2rem;
  text-align: center;
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-group input,
.form-group select,
.form-group textarea {
  width: 100%;
  padding: 1rem;
  border: 2px solid #e0e0e0;
  border-radius: 10px;
  font-size: 1rem;
  transition: border-color 0.3s ease;
  font-family: inherit;
}

.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
  outline: none;
  border-color: var(--primary-color);
}

.form-group textarea {
  resize: vertical;
  min-height: 80px;
}

.form-actions {
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
}

.submit-btn,
.cancel-btn {
  flex: 1;
  padding: 1rem;
  border: none;
  border-radius: 10px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.submit-btn {
  background: var(--primary-color);
  color: white;
}

.submit-btn:hover:not(:disabled) {
  background: #7a8b7a;
  transform: translateY(-2px);
}

.submit-btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.cancel-btn {
  background: #e0e0e0;
  color: var(--text-dark);
}

.cancel-btn:hover {
  background: #d0d0d0;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 768px) {
  .floating-actions {
    bottom: 1rem;
    right: 1rem;
  }

  .fab-button {
    width: 48px;
    height: 48px;
  }

  .rsvp-popup {
    padding: 1rem;
  }

  .rsvp-form {
    padding: 2rem 1.5rem;
  }

  .form-actions {
    flex-direction: column;
  }
}
</style>
