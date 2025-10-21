import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import "./App.css";

// Import images
// Vertical images
import heroImage from "./assets/webassests/vertical/HUG09101.jpg";
import invitationImage from "./assets/webassests/vertical/HUG09122.jpg";
import portraitLeft from "./assets/webassests/vertical/HUG09133.jpg";
import portraitRight from "./assets/webassests/vertical/HUG09183.jpg";

// Horizontal images
import secondImage from "./assets/webassests/horizontal/HUG00052.jpg";
import storyImageTall from "./assets/webassests/vertical/HUG09271.jpg";
import storyImageWide from "./assets/webassests/horizontal/HUG09695.jpg";
import dearestPhoto from "./assets/webassests/vertical/HUG09300.jpg";
import galleryLeft from "./assets/webassests/vertical/HUG09350.jpg";
import galleryRight from "./assets/webassests/vertical/HUG09482.jpg";
import galleryLarge from "./assets/webassests/horizontal/HUG09986.jpg";
import finalCover from "./assets/webassests/vertical/HUG09738.jpg";
import finalPortrait from "./assets/webassests/vertical/HUG09943.jpg";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="loading">
        <div className="loading-spinner"></div>
      </div>
    );
  }

  return (
    <div className="app-container">
      <div className="desktop-view">
        <div className="desktop-content">
          {/* Main Content - Absolute Positioned Layout matching HTML exactly */}
          <main className="wedding-content">
            <div className="page-container">
              {/* SECTION 1: Hero Section - Cover Image (0-849px) */}
              <motion.div
                className="hero-section"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.3, ease: "easeOut" }}
              >
                <img
                  src={heroImage}
                  alt="Wedding Cover"
                  className="cover-image"
                />

                {/* Top Quote - position: top: 9px */}
                <motion.div
                  className="hero-quote-top"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.3, delay: 0, ease: "easeOut" }}
                >
                  I love three things in this world.，Sun, moon and you.&nbsp;
                  <div>Sun for morning moon for night,&nbsp;</div>
                  <div>and you forever.</div>
                </motion.div>

                {/* Title - position: top: 111px (147-36 for adjustment) */}
                <motion.h1
                  className="hero-title"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.3, delay: 0, ease: "easeOut" }}
                >
                  Welcome to our wedding
                </motion.h1>

                {/* Subtitle - position: top: 278px, rotated */}
                <motion.div
                  className="hero-subtitle"
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1.3, delay: 0, ease: "easeOut" }}
                >
                  We got married
                </motion.div>

                {/* Couple Names - position: top: 665px */}
                <motion.div
                  className="couple-names"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.3, delay: 0, ease: "easeOut" }}
                >
                  <span className="groom-name">Quang Hải</span>
                  <span className="bride-name">Ngọc Trâm</span>
                </motion.div>

                {/* Labels GROOM/BRIDE - position: top: 709px */}
                <motion.div
                  className="couple-labels"
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1.3, delay: 0, ease: "easeOut" }}
                >
                  <span className="groom-label">GROOM</span>
                  <span className="bride-label">BRIDE</span>
                </motion.div>

                {/* Wedding Date - position: top: 797px */}
                <motion.div
                  className="wedding-date"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.3, delay: 0, ease: "easeOut" }}
                >
                  14.12.2025
                </motion.div>
              </motion.div>

              {/* SECTION 2: Second Image Section (884-1192px) */}
              <motion.div
                className="second-section"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.3, delay: 0.2, ease: "easeOut" }}
              >
                <img
                  src={secondImage}
                  alt="Wedding Photo"
                  className="section-image"
                />

                <motion.p
                  className="section-title-top"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.3, delay: 0, ease: "easeOut" }}
                >
                  Right love | Right reason | Right for you
                </motion.p>

                <motion.p
                  className="section-quote"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.3, delay: 0, ease: "easeOut" }}
                >
                  To Our Family And Friends, Thank You For Celebrating Our
                  Special Day, Supporting Us And Sharing Our Love.
                </motion.p>
              </motion.div>

              {/* SECTION 3: Invitation Header (1200-1508px) */}
              <motion.div
                className="invitation-header-section"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.3, delay: 0, ease: "easeOut" }}
              >
                <div className="invitation-box">
                  <span className="invitation-leaf left">🌿</span>
                  <div className="invitation-text">
                    <p>WEDDING</p>
                    <p>INVITATION</p>
                  </div>
                  <span className="invitation-leaf right">🌿</span>
                </div>

                <motion.div
                  className="parents-info"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.3, delay: 0, ease: "easeOut" }}
                >
                  <div className="parents-column">
                    <h4>Nhà trai</h4>
                    <p>Ông Nguyễn Văn Khiêm</p>
                    <p>Bà Nguyễn Thị Lương</p>
                  </div>
                  <div className="parents-column">
                    <h4>Nhà gái</h4>
                    <p>Ông Trần Thiện Thảo</p>
                    <p>Bà Hà Thị Cẩm Hà</p>
                  </div>
                </motion.div>

                <motion.p
                  className="invitation-request"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.3, delay: 0, ease: "easeOut" }}
                >
                  Trân Trọng Kính Mời
                </motion.p>

                <img
                  src={invitationImage}
                  alt="Invitation Photo"
                  className="invitation-photo"
                />
              </motion.div>

              {/* SECTION 4: Love Story Section (1508-2800px) */}
              <motion.div
                className="love-story-section"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.3, delay: 0, ease: "easeOut" }}
              >
                <motion.div
                  className="sweet-text"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.3, delay: 0, ease: "easeOut" }}
                >
                  Sweet
                </motion.div>
                <motion.p
                  className="love-story-message"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.3, delay: 0, ease: "easeOut" }}
                >
                  Trước đây cứ nghĩ đám cưới chỉ là một thông báo chính
                  thức,&nbsp;
                  <div>
                    Giờ mới hiểu đó là một dịp hiếm hoi để mọi người tụ
                    họp.&nbsp;
                  </div>
                  <div>Là những chuyến đi xa chỉ để có mặt bên nhau,&nbsp;</div>
                  <div>
                    Là sự ủng hộ vô điều kiện từ những người thương yêu.&nbsp;
                  </div>
                  <div>Cảm ơn gia đình, bạn bè đã luôn đồng hành.&nbsp;</div>
                  <div>Lâu rồi không gặp, thật sự rất nhớ mọi người!</div>
                </motion.p>
                <h3 className="date-display">14.12.2025</h3>
                <p className="date-message">
                  Chúng mình, hẹn gặp nhau trong ngày cưới nhé!
                </p>
                <div className="story-images-grid">
                  <img
                    src={storyImageTall}
                    alt="Love Story"
                    className="story-img-tall"
                  />
                  <img
                    src={storyImageWide}
                    alt="Love Story"
                    className="story-img-wide"
                  />
                </div>{" "}
                <div className="date-stamp">14.12.2025</div>
              </motion.div>

              {/* SECTION 5: OUR LOVE STORY Title (2090-2900px) */}
              <motion.div
                className="our-story-section"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.3, delay: 0, ease: "easeOut" }}
              >
                <h2 className="section-heading">
                  OUR
                  <br />
                  LOVE STORY
                </h2>

                <p className="vertical-quote">
                  Love goes with the wind, but never goes away.
                </p>

                <div className="fall-in-love-box">
                  <span className="decorative-icon">💕</span>
                  <div className="fall-text">
                    <p>FALL IN</p>
                    <p>LOVE</p>
                  </div>
                </div>

                <p className="story-poem">
                  Mong rằng khi ngoảnh lại, ta vẫn có nhau.&nbsp;
                  <div>Cùng nắm tay đi đến bạc đầu...</div>
                </p>
              </motion.div>

              {/* SECTION 6: Large Photo Section (3137-3773px) */}
              <motion.div
                className="large-photo-section"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.3, delay: 0.2, ease: "easeOut" }}
              >
                <div className="dearest-labels">
                  <span>YOU ARE</span>
                  <span>MY DEAREST</span>
                  <span>LOVE</span>
                </div>

                <img
                  src={dearestPhoto}
                  alt="Dearest Love"
                  className="dearest-photo"
                />
              </motion.div>

              {/* SECTION 7: Love and Freedom Section (3634-4000px) */}
              <motion.div
                className="love-freedom-section"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.3, delay: 0, ease: "easeOut" }}
              >
                <h2 className="love-freedom-title">
                  Love and freedom&nbsp;
                  <div>you And gentleness</div>
                </h2>

                <p className="nature-poem">
                  Núi biếc rừng xanh vang vọng tiếng lòng,&nbsp;
                  <div>
                    Giữa thế gian rộng lớn, người chung nhịp vẫn tìm thấy
                    nhau.&nbsp;
                  </div>
                  <div>Tình yêu đến như một lẽ tự nhiên,&nbsp;</div>
                  <div>Và chúng ta nắm tay nhau đi đến trọn đời.</div>
                </p>

                <div className="divider-line"></div>

                <div className="info-labels">
                  <span>LOVE</span>
                  <span>WEDDING</span>
                  <span>INFORMATION</span>
                </div>
              </motion.div>

              {/* SECTION 8: Portrait Photos (4056-4374px) */}
              <motion.div
                className="portrait-section"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.3, delay: 0.2, ease: "easeOut" }}
              >
                <img
                  src={portraitLeft}
                  alt="Portrait 1"
                  className="portrait-left"
                />
                <img
                  src={portraitRight}
                  alt="Portrait 2"
                  className="portrait-right"
                />

                <p className="quote-center">
                  I love three things in this world.，
                  <div>Sun moon and you. Sun for morning moon for night,</div>
                  <div>and you forever.</div>
                </p>

                <div className="perfect-box">
                  <span className="decorative-icon">🌸</span>
                  <div className="perfect-text">
                    <p>YOU</p>
                    <p>ARE PERFECT</p>
                  </div>
                </div>

                <p className="perfect-poem">
                  Thương một người, dành trọn một đời
                </p>
              </motion.div>

              {/* SECTION 9: Calendar & Date Section (4650-5350px) */}
              <motion.div
                className="calendar-section"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.3, delay: 0.3, ease: "easeOut" }}
              >
                <h3 className="calendar-title">Save The Date</h3>

                <div className="calendar-widget">
                  <div className="calendar-header">December 2025</div>

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
                    {/* First week - starts on Monday (Dec 1) */}
                    <div className="calendar-day empty"></div>
                    <div className="calendar-day">1</div>
                    <div className="calendar-day">2</div>
                    <div className="calendar-day">3</div>
                    <div className="calendar-day">4</div>
                    <div className="calendar-day">5</div>
                    <div className="calendar-day">6</div>

                    {/* Week 2 */}
                    <div className="calendar-day">7</div>
                    <div className="calendar-day">8</div>
                    <div className="calendar-day">9</div>
                    <div className="calendar-day">10</div>
                    <div className="calendar-day">11</div>
                    <div className="calendar-day">12</div>
                    <div className="calendar-day">13</div>

                    {/* Week 3 - Wedding Day 14 */}
                    <div className="calendar-day highlighted">14</div>
                    <div className="calendar-day">15</div>
                    <div className="calendar-day">16</div>
                    <div className="calendar-day">17</div>
                    <div className="calendar-day">18</div>
                    <div className="calendar-day">19</div>
                    <div className="calendar-day">20</div>

                    {/* Week 4 */}
                    <div className="calendar-day">21</div>
                    <div className="calendar-day">22</div>
                    <div className="calendar-day">23</div>
                    <div className="calendar-day">24</div>
                    <div className="calendar-day">25</div>
                    <div className="calendar-day">26</div>
                    <div className="calendar-day">27</div>

                    {/* Week 5 */}
                    <div className="calendar-day">28</div>
                    <div className="calendar-day">29</div>
                    <div className="calendar-day">30</div>
                    <div className="calendar-day">31</div>
                  </div>
                </div>

                <p className="calendar-note">
                  Sunday, December 14, 2025 at 12:00
                </p>
              </motion.div>

              {/* SECTION 10: Invitation Details (5350-5900px) */}
              <motion.div
                className="invitation-details-section"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.3, delay: 0, ease: "easeOut" }}
              >
                <h3 className="invited-title">-- You Are Invited--</h3>
                <h4 className="invite-text">Trân Trọng Kính Mời</h4>
                <p className="invite-subtitle">
                  THAM DỰ TIỆC MỪNG LỄ THÀNH HÔN
                </p>
                <p className="invite-time">Vào lúc</p>

                <div className="time-date-display">
                  <span className="time-slot">12:00</span>
                  <div className="date-full">
                    <p>Chủ nhật / Sunday</p>
                    <p className="date-number">14</p>
                    <p>Tháng 12 / December</p>
                  </div>
                  <span className="time-year">2025</span>
                </div>

                <p className="lunar-date">(Âm lịch 24 tháng 10 năm Ất Tỵ)</p>

                <h4 className="location-title">Địa điểm / Address</h4>
                <div className="location-info">
                  <p>Diamond Place</p>
                  <p>15A Hồ Văn Huê, Phường Đức Nhuận, Hồ Chí Minh</p>
                </div>
              </motion.div>

              {/* SECTION 11: Map Section (5864-6139px) */}
              <motion.div
                className="map-section"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.3, delay: 0.3, ease: "easeOut" }}
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.4254827672157!2d106.69639731533369!3d10.777300162076296!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f4b3330bcc9%3A0xd76810a2b9b129e1!2zSOG7kyBDaMOtIE1pbmgsIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1234567890123"
                  width="100%"
                  height="275"
                  style={{ border: 0, borderRadius: "5px" }}
                  allowFullScreen=""
                  loading="lazy"
                  title="Wedding Location"
                ></iframe>
              </motion.div>

              {/* SECTION 12: Gallery Section (6235-6950px) */}
              <motion.div
                className="gallery-section"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.3, delay: 0.2, ease: "easeOut" }}
              >
                <div className="gallery-photos">
                  <img
                    src={galleryLeft}
                    alt="Gallery 1"
                    className="gallery-img-left"
                  />
                  <img
                    src={galleryRight}
                    alt="Gallery 2"
                    className="gallery-img-right"
                  />
                </div>

                <p className="gallery-quote">
                  As the clouds and mist dissipate&nbsp;
                  <div>love you and everyone knows it</div>
                </p>

                <img
                  src={galleryLarge}
                  alt="Gallery Large"
                  className="gallery-large"
                />

                <span className="forever-text">FOREVER</span>
                <span className="and-text">AND</span>
                <span className="ever-text">EVER</span>

                <p className="final-poem">
                  Em tựa núi sông, băng qua rừng biếc,&nbsp;
                  <div>Thoáng hiện như cánh chim, muôn hoa bừng nở.&nbsp;</div>
                  <div>Giữa nhân gian cỏ cây vô tận,&nbsp;</div>
                  <div>Riêng anh chỉ thấy em là ngọn núi xanh dịu dàng.</div>
                </p>

                <div className="decorative-divider"></div>
              </motion.div>

              {/* SECTION 13: Final Photo & Thank You (7088-8178px) */}
              <motion.div
                className="final-section"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.3, delay: 0.2, ease: "easeOut" }}
              >
                <img
                  src={finalCover}
                  alt="Final Cover"
                  className="final-cover"
                />

                <div className="final-labels">
                  <span>LOVE YOU</span>
                  <span>FOREVER</span>
                  <span>AND EVER</span>
                </div>

                <img
                  src={finalPortrait}
                  alt="Final Portrait"
                  className="final-portrait"
                />

                <h2 className="sunshine-title">
                  You are my&nbsp;
                  <div>Sunshine</div>
                </h2>

                <h1 className="thankyou-title">Thankyou</h1>
              </motion.div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;
