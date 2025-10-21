# Wedding Sections Components

Thư mục này chứa tất cả các section components của trang wedding invitation.

## 📁 Cấu trúc Components

### 1. **HeroSection.jsx**

- **Mô tả**: Section đầu tiên - Hero cover với ảnh chính
- **Props**: `heroImage` (string - required)
- **Nội dung**: Quote, title, tên cô dâu chú rể, ngày cưới

### 2. **SecondSection.jsx**

- **Mô tả**: Section thứ hai với ảnh phụ và quote
- **Props**: `secondImage` (string - required)
- **Nội dung**: Slogan "Right love | Right reason | Right for you"

### 3. **InvitationHeaderSection.jsx**

- **Mô tả**: Phần thiệp mời chính thức
- **Props**: `invitationImage` (string - required)
- **Nội dung**: Wedding invitation box, thông tin bố mẹ hai bên

### 4. **LoveStorySection.jsx**

- **Mô tả**: Phần câu chuyện tình yêu
- **Props**:
  - `storyImageTall` (string - required)
  - `storyImageWide` (string - required)
- **Nội dung**: Text "Sweet", lời nhắn, ngày cưới, story images

### 5. **OurStorySection.jsx**

- **Mô tả**: Tiêu đề "OUR LOVE STORY"
- **Props**: None
- **Nội dung**: Section heading, quote, "Fall in Love" box

### 6. **LargePhotoSection.jsx**

- **Mô tả**: Section với ảnh lớn "You are my dearest love"
- **Props**: `dearestPhoto` (string - required)
- **Nội dung**: Labels và ảnh dearest

### 7. **LoveFreedomSection.jsx**

- **Mô tả**: Section "Love and freedom"
- **Props**: None
- **Nội dung**: Title, nature poem, info labels

### 8. **PortraitSection.jsx**

- **Mô tả**: Section với 2 ảnh portrait
- **Props**:
  - `portraitLeft` (string - required)
  - `portraitRight` (string - required)
- **Nội dung**: 2 portraits, quotes, "You are perfect" box

### 9. **CalendarSection.jsx**

- **Mô tả**: Calendar widget với ngày cưới
- **Props**: None
- **Nội dung**: "Save The Date", calendar December 2025

### 10. **InvitationDetailsSection.jsx**

- **Mô tả**: Chi tiết lời mời và thông tin sự kiện
- **Props**: None
- **Nội dung**: Thời gian, ngày tháng, địa điểm tổ chức

### 11. **MapSection.jsx**

- **Mô tả**: Google Maps iframe
- **Props**: None
- **Nội dung**: Embedded Google Maps

### 12. **GallerySection.jsx**

- **Mô tả**: Gallery với nhiều ảnh
- **Props**:
  - `galleryLeft` (string - required)
  - `galleryRight` (string - required)
  - `galleryLarge` (string - required)
- **Nội dung**: Gallery photos, quotes, decorative text

### 13. **FinalSection.jsx**

- **Mô tả**: Section kết thúc với thank you
- **Props**:
  - `finalCover` (string - required)
  - `finalPortrait` (string - required)
- **Nội dung**: Final photos, "You are my Sunshine", "Thankyou"

## 🔧 Cách Sử dụng

```jsx
import {
  HeroSection,
  SecondSection,
  // ... other sections
} from "./components/sections";

// Import images
import heroImage from "./assets/webassests/vertical/HUG09101.jpg";

// Use in component
<HeroSection heroImage={heroImage} />;
```

## 🎨 Animation

Tất cả components đều sử dụng **Framer Motion** cho animations:

- `initial`: Trạng thái ban đầu
- `animate`/`whileInView`: Trạng thái khi hiển thị
- `transition`: Thời gian và easing

## 📝 Notes

- Tất cả components đều có PropTypes validation
- Sử dụng `viewport={{ once: true }}` để animation chỉ chạy 1 lần
- Duration animation: 1.3s với easing "easeOut"
- Delay được áp dụng cho các sub-elements

## 🔄 Refactoring Benefits

✅ **Code organization**: Mỗi section là một component riêng biệt  
✅ **Reusability**: Dễ dàng tái sử dụng hoặc thay đổi thứ tự sections  
✅ **Maintainability**: Dễ bảo trì và debug từng section  
✅ **Props validation**: PropTypes đảm bảo data type đúng  
✅ **Clean App.jsx**: File chính giờ rất ngắn gọn và dễ đọc
