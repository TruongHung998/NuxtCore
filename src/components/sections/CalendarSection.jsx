import { motion } from "framer-motion";

const CalendarSection = () => {
  return (
    <motion.div
      className="calendar-section"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1.3, delay: 0.3, ease: "easeOut" }}
    >
      <h3 className="calendar-title">Save The Date</h3>

      <div className="calendar-widget">
        <div className="calendar-header">November 2025</div>

        <div className="calendar-weekdays">
          <div className="calendar-weekday">Sun</div>
          <div className="calendar-weekday">Mon</div>
          <div className="calendar-weekday">Tue</div>
          <div className="calendar-weekday">Wed</div>
          <div className="calendar-weekday">Thu</div>
          <div className="calendar-weekday">Fri</div>
          <div className="calendar-weekday">Sat</div>
        </div>

        <div className="calendar-days">
          {/* First week - starts on Saturday (Nov 1) */}
          <div className="calendar-day empty"></div>
          <div className="calendar-day empty"></div>
          <div className="calendar-day empty"></div>
          <div className="calendar-day empty"></div>
          <div className="calendar-day empty"></div>
          <div className="calendar-day empty"></div>
          <div className="calendar-day">1</div>

          {/* Week 2 */}
          <div className="calendar-day">2</div>
          <div className="calendar-day">3</div>
          <div className="calendar-day">4</div>
          <div className="calendar-day">5</div>
          <div className="calendar-day">6</div>
          <div className="calendar-day">7</div>
          <div className="calendar-day">8</div>

          {/* Week 3 */}
          <div className="calendar-day">9</div>
          <div className="calendar-day">10</div>
          <div className="calendar-day">11</div>
          <div className="calendar-day">12</div>
          <div className="calendar-day">13</div>
          <div className="calendar-day">14</div>
          <div className="calendar-day">15</div>

          {/* Week 4 */}
          <div className="calendar-day">16</div>
          <div className="calendar-day">17</div>
          <div className="calendar-day">18</div>
          <div className="calendar-day">19</div>
          <div className="calendar-day">20</div>
          <div className="calendar-day">21</div>
          <div className="calendar-day">22</div>

          {/* Week 5 - Wedding Day 29 */}
          <div className="calendar-day">23</div>
          <div className="calendar-day">24</div>
          <div className="calendar-day">25</div>
          <div className="calendar-day">26</div>
          <div className="calendar-day">27</div>
          <div className="calendar-day">28</div>
          <div className="calendar-day highlighted">29</div>

          {/* Week 6 */}
          <div className="calendar-day">30</div>
        </div>
      </div>

      <p className="calendar-note">Saturday, November 29, 2025 at 12:00</p>
    </motion.div>
  );
};

export default CalendarSection;
