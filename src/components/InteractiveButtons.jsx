import { useState } from "react";
import { FaHeart, FaGift } from "react-icons/fa";
import "./InteractiveButtons.css";

const InteractiveButtons = () => {
  const [likeCount, setLikeCount] = useState(0);
  const [showMessage, setShowMessage] = useState(false);
  const [showGiftOptions, setShowGiftOptions] = useState(false);

  const handleLike = () => {
    setLikeCount((prev) => prev + 1);
    // Add animation effect
    const button = document.querySelector(".like-button");
    button?.classList.add("shake");
    setTimeout(() => button?.classList.remove("shake"), 500);
  };

  const handleMessage = () => {
    setShowMessage(!showMessage);
  };

  const handleGift = () => {
    setShowGiftOptions(!showGiftOptions);
  };

  return (
    <>
      <div className="interactive-toolbar">
        <div className="toolbar-left">
          <button className="message-button" onClick={handleMessage}>
            💌 Gửi lời chúc
          </button>
        </div>

        <div className="toolbar-right">
          <button className="like-button" onClick={handleLike}>
            <FaHeart className="like-icon" />
            {likeCount > 0 && <span className="like-count">{likeCount}</span>}
          </button>

          <button className="gift-button" onClick={handleGift}>
            <FaGift className="gift-icon" />
          </button>
        </div>
      </div>

      {/* Message Modal */}
      {showMessage && (
        <div className="modal-backdrop" onClick={handleMessage}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={handleMessage}>
              ×
            </button>
            <h3>Gửi lời chúc đến cô dâu & chú rể</h3>
            <textarea
              placeholder="Nhập lời chúc của bạn..."
              rows="5"
              className="message-input"
            />
            <button className="submit-button">Gửi lời chúc</button>
          </div>
        </div>
      )}

      {/* Gift Options Modal */}
      {showGiftOptions && (
        <div className="modal-backdrop" onClick={handleGift}>
          <div
            className="modal-content gift-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <button className="modal-close" onClick={handleGift}>
              ×
            </button>
            <h3>Gửi quà mừng cưới</h3>
            <div className="gift-options">
              <div className="gift-option">
                <h4>🌟 Momo</h4>
                <p>Số điện thoại: 0123456789</p>
                <button className="copy-button">Copy</button>
              </div>
              <div className="gift-option">
                <h4>🏦 Ngân hàng</h4>
                <p>STK: 1234567890</p>
                <p>Ngân hàng: Vietcombank</p>
                <button className="copy-button">Copy STK</button>
              </div>
              <div className="gift-option">
                <h4>💝 Quà tặng trực tiếp</h4>
                <p>
                  Gửi quà tại địa chỉ:
                  <br />
                  123 Đường ABC, Quận XYZ, TP.HCM
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default InteractiveButtons;
