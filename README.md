# test-online-Junior-nix-2_2026
Bài test online 
## Author - Nguyễn Xuân Trường
### Requirement
Cách gõ các chữ cái có dấu trong Tiếng Việt bằng các chữ cái latinh của kiểu gõ telex như sau: ă=aw, â=aa, đ=dd, ê=ee, ô=oo, ơ=ow, ư=w

Hãy xây dựng 1 chức năng cho phép đếm số lượng các chữ cái có dấu Tiếng Việt có thể được tạo thành trong 1 chuỗi chữ cái latin nhập vào từ bàn phím. Chuỗi nhập vào không giới hạn số lượng ký tự, không bao gồm các ký tự đặc biệt và khoảng trắng

Ví dụ:
#### Input: hwfdawhwhcoomddfgwdc
#### Output: 6 (w, aw, w, oo, dd, w)

### Issue
- Nếu chỉ tìm và thay thế như replace() hoặc đếm độc lập thì bị đếm sót
- ví dụ: Input aw -> output: 2 (aw, w)
### Idea
- Duyệt một chiều + nhảy linh hoạt ( khi gặp các cụm như aw, aa, dd, ee, oo, ow ghi nhập là +1 sau đó nhảy 2 bước để duyệt tiếp, nếu chỉ có w thì +1 và nhày 1 bước, nếu không có thì nhảy 1 bước đến khi hết)
### Solution
1. Nhận vào chuỗi
2. Kiểm tra rỗng -> loại bỏ khoảng trống 2 đầu(sử dụng trim()) -> kiểm tra hợp lệ (chỉ nhận latinh không phân biệt hoa thường) -> chuyển toàn bộ về viết thường (dùng toLowerCase()) [đặt trong khối try catch để trách crack]
4. dùng vòng lặp while điều kiện dừng là vị trí hiện tại lớn hơn độ dài chuỗi sau loại bỏ khoảng trống, áp dụng idea và in kết quả
### Result
<img width="3406" height="2062" alt="image" src="https://github.com/user-attachments/assets/749d9674-783b-4a25-81c1-2861dd5db0f5" />

