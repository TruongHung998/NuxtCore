<template>
  <section id="story" class="story-section">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">Our Love Story</h2>
        <div class="section-subtitle script-font">How it all began</div>
      </div>

      <div class="story-timeline">
        <div class="timeline-item fade-in stagger-1">
          <div class="timeline-content">
            <div class="timeline-date">2018</div>
            <h3>First Meeting</h3>
            <p>
              We met at a coffee shop in downtown, where John accidentally
              spilled coffee on Sarah's book. What started as an embarrassing
              moment turned into our first conversation that lasted for hours.
            </p>
          </div>
          <div class="timeline-image">
            <img src="/assets/hinhcuoi/HUG00052.jpg" alt="First meeting" />
          </div>
        </div>

        <div class="timeline-item reverse fade-in stagger-2">
          <div class="timeline-content">
            <div class="timeline-date">2020</div>
            <h3>Moving In Together</h3>
            <p>
              After two wonderful years of dating, we decided to take the next
              step and move in together. Our little apartment became our
              sanctuary, filled with laughter, love, and countless shared
              memories.
            </p>
          </div>
          <div class="timeline-image">
            <img src="/assets/hinhcuoi/HUG00163.jpg" alt="Moving in together" />
          </div>
        </div>

        <div class="timeline-item fade-in stagger-3">
          <div class="timeline-content">
            <div class="timeline-date">2023</div>
            <h3>The Proposal</h3>
            <p>
              John proposed during our weekend getaway to the mountains. At
              sunset, overlooking the valley where we had our first trip
              together, he got down on one knee. Sarah said yes before he could
              even finish asking!
            </p>
          </div>
          <div class="timeline-image">
            <img src="/assets/hinhcuoi/HUG00192.jpg" alt="The proposal" />
          </div>
        </div>
        <div class="timeline-item reverse fade-in stagger-4">
          <div class="timeline-content">
            <div class="timeline-date">2026</div>
            <h3>Our Wedding Day</h3>
            <p>
              And now, we're ready to say "I do" surrounded by our family and
              friends. We can't wait to celebrate this special moment with all
              the people we love most in this world.
            </p>
          </div>
          <div class="timeline-image">
            <img src="/assets/hinhcuoi/HUG00221.jpg" alt="Wedding day" />
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

  const timelineItems = document.querySelectorAll(".timeline-item");
  timelineItems.forEach((item) => observer.observe(item));
});
</script>

<style scoped>
.story-section {
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

.story-timeline {
  position: relative;
}

.story-timeline::before {
  content: "";
  position: absolute;
  left: 50%;
  top: 0;
  bottom: 0;
  width: 2px;
  background: var(--primary-color);
  transform: translateX(-50%);
}

.timeline-item {
  display: flex;
  margin-bottom: 4rem;
  align-items: center;
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s ease;
}

.timeline-item.animate {
  opacity: 1;
  transform: translateY(0);
}

.timeline-item.reverse {
  flex-direction: row-reverse;
}

.timeline-content {
  flex: 1;
  padding: 2rem;
  background: var(--secondary-color);
  border-radius: 15px;
  margin: 0 2rem;
  position: relative;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
}

.timeline-content::before {
  content: "";
  position: absolute;
  top: 50%;
  width: 20px;
  height: 20px;
  background: var(--primary-color);
  border: 4px solid var(--white);
  border-radius: 50%;
  transform: translateY(-50%);
}

.timeline-item:not(.reverse) .timeline-content::before {
  right: -42px;
}

.timeline-item.reverse .timeline-content::before {
  left: -42px;
}

.timeline-date {
  color: var(--primary-color);
  font-weight: 600;
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
}

.timeline-content h3 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: var(--text-dark);
}

.timeline-content p {
  color: var(--text-light);
  line-height: 1.7;
}

.timeline-image {
  flex: 1;
  margin: 0 2rem;
}

.timeline-image img {
  width: 100%;
  height: 300px;
  object-fit: cover;
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease;
}

.timeline-image img:hover {
  transform: scale(1.05);
}

@media (max-width: 768px) {
  .section-title {
    font-size: 2rem;
  }

  .story-timeline::before {
    left: 2rem;
  }

  .timeline-item,
  .timeline-item.reverse {
    flex-direction: column;
    text-align: center;
  }

  .timeline-content {
    margin: 1rem 0;
    order: 2;
  }

  .timeline-content::before {
    left: -42px !important;
    top: -15px;
  }

  .timeline-image {
    margin: 1rem 0;
    order: 1;
  }

  .timeline-image img {
    height: 250px;
  }
}
</style>
