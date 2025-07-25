<template>
  <section id="countdown" class="countdown-section">
    <div class="container">
      <div class="countdown-content">
        <h2 class="countdown-title">Counting Down to Our Big Day</h2>
        <div class="countdown-timer">
          <div class="time-unit">
            <div class="time-number">{{ timeLeft.days }}</div>
            <div class="time-label">Days</div>
          </div>
          <div class="time-separator">:</div>
          <div class="time-unit">
            <div class="time-number">{{ timeLeft.hours }}</div>
            <div class="time-label">Hours</div>
          </div>
          <div class="time-separator">:</div>
          <div class="time-unit">
            <div class="time-number">{{ timeLeft.minutes }}</div>
            <div class="time-label">Minutes</div>
          </div>
          <div class="time-separator">:</div>
          <div class="time-unit">
            <div class="time-number">{{ timeLeft.seconds }}</div>
            <div class="time-label">Seconds</div>
          </div>
        </div>
        <div class="countdown-message">
          <div class="script-font">Until we say "I Do"</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const timeLeft = ref({
  days: 0,
  hours: 0,
  minutes: 0,
  seconds: 0,
});

let intervalId = null;

// Set wedding date for Lan Huyen & Viet Hung - November 30, 2025 (Vietnam timezone UTC+7)
const weddingDate = new Date("2025-11-30T00:00:00+07:00").getTime();

const updateCountdown = () => {
  // Get current time in Vietnam timezone (UTC+7)
  const now = new Date().getTime();
  const distance = weddingDate - now;

  if (distance > 0) {
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    timeLeft.value = {
      days: days.toString().padStart(2, "0"),
      hours: hours.toString().padStart(2, "0"),
      minutes: minutes.toString().padStart(2, "0"),
      seconds: seconds.toString().padStart(2, "0"),
    };
  } else {
    // Wedding day has arrived - show celebration message
    timeLeft.value = {
      days: "🎉",
      hours: "💒",
      minutes: "❤️",
      seconds: "🎊",
    };
    if (intervalId) {
      clearInterval(intervalId);
    }
  }
};

onMounted(() => {
  updateCountdown();
  intervalId = setInterval(updateCountdown, 1000);

  // Animation on scroll
  const observerOptions = {
    threshold: 0.3,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate");
      }
    });
  }, observerOptions);

  const countdownTimer = document.querySelector(".countdown-timer");
  if (countdownTimer) {
    observer.observe(countdownTimer);
  }
});

onUnmounted(() => {
  if (intervalId) {
    clearInterval(intervalId);
  }
});
</script>

<style scoped>
.countdown-section {
  padding: 5rem 0;
  background: linear-gradient(135deg, var(--primary-color) 0%, #7a8b7a 100%);
  color: white;
  text-align: center;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.countdown-title {
  font-size: 2.5rem;
  margin-bottom: 3rem;
  opacity: 0.95;
}

.countdown-timer {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2rem;
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s ease;
}

.countdown-timer.animate {
  opacity: 1;
  transform: translateY(0);
}

.time-unit {
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  border-radius: 15px;
  padding: 2rem 1.5rem;
  min-width: 120px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.time-unit:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
}

.time-number {
  font-size: 3rem;
  font-weight: 700;
  font-family: "Playfair Display", serif;
  line-height: 1;
  margin-bottom: 0.5rem;
  position: relative;
}

.time-number::after {
  content: "";
  position: absolute;
  bottom: -5px;
  left: 50%;
  transform: translateX(-50%);
  width: 30px;
  height: 2px;
  background: var(--accent-gold);
  border-radius: 2px;
}

.time-label {
  font-size: 1rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  opacity: 0.9;
  font-weight: 500;
}

.time-separator {
  font-size: 2rem;
  font-weight: 300;
  opacity: 0.7;
  animation: blink 2s infinite;
}

.countdown-message {
  font-size: 1.8rem;
  opacity: 0.9;
  margin-top: 2rem;
}

@keyframes blink {
  0%,
  50% {
    opacity: 0.7;
  }
  51%,
  100% {
    opacity: 0.3;
  }
}

/* Number transition animation */
.time-number {
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

@media (max-width: 968px) {
  .countdown-timer {
    gap: 0.5rem;
  }

  .time-unit {
    padding: 1.5rem 1rem;
    min-width: 90px;
  }

  .time-number {
    font-size: 2.5rem;
  }
}

@media (max-width: 768px) {
  .countdown-title {
    font-size: 2rem;
  }

  .countdown-timer {
    flex-direction: column;
    gap: 1rem;
  }

  .time-separator {
    display: none;
  }

  .time-unit {
    width: 100%;
    max-width: 200px;
    padding: 1rem;
  }

  .time-number {
    font-size: 2rem;
  }

  .countdown-message {
    font-size: 1.5rem;
  }
}

@media (max-width: 480px) {
  .countdown-timer {
    grid-template-columns: 1fr 1fr;
    display: grid;
    gap: 1rem;
  }

  .time-unit {
    padding: 1rem 0.5rem;
  }

  .time-number {
    font-size: 1.8rem;
  }

  .time-label {
    font-size: 0.9rem;
  }
}
</style>
