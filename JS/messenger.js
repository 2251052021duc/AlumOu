
const happyIcon = document.querySelector('.chat_input ion-icon[name="happy-outline"]');
happyIcon.addEventListener('click', () => {
    console.log('Happy icon clicked');
});

const microphoneIcon = document.querySelector('.chat_input .fa-microphone');
microphoneIcon.addEventListener('click', () => {
    console.log('Microphone icon clicked');
});

//true : của tôi    false:cua bạn
const chatData = [
    {
      imgSrc: '../img/profile-21.jpg',
      name: 'Hồng Đức',
      onl:"online-indicator",
      status: 'online',
      messages: [
        { text: 'aloo fenn <br> mai fen có đi học không', time: '17:00', isMyMessage: true },
        { text: '6h30 đi ha', time: '17:05', isMyMessage: true },
        { text: 'okeee mai qua chở tui nha', time: '17:06', isMyMessage: false },
        { text: 'okeeee fen', time: '17:15', isMyMessage: true },
        { text: 'ủa mà ông làm bt lớn thầy thành chưa', time: '17:20', isMyMessage: false },
        { text: 'tui mới làm được trang giới thiệu ò', time: '17:21', isMyMessage: false },
        { text: 'tui còn chưa làm gì hết luôn gần nộp rùi', time: '17:25', isMyMessage: true },
        { text: 'thế thôi tui học bài đã nha mai tui đón', time: '17:26', isMyMessage: true },
        { text: 'alo ông qua chưa', time: '6:43', isMyMessage: false },
        { text: 'đang đến', time: '6:45', isMyMessage: true },
      ]
    },
    {
      imgSrc: '../img/profile-10.jpg',
      name: 'Mai Ngọc',
      onl:"off",
      status: 'offline 5 phút trước',    
      messages: [
        { text: 'aloo fenn <br> mai fen có đi học không', time: '18:00', isMyMessage: true },
        { text: '6h30 đi ha', time: '18:05', isMyMessage: true },
        { text: 'Nhớ đến sớm nha', time: '19:06', isMyMessage: false },
       
      ]
    },{
        imgSrc: '../img/profile-14.jpg',
        name: 'Hữu Thành',
        onl:"online-indicator",
        status: 'online',    
        messages: [
          { text: 'aloo thầy ơi', time: '18:01', isMyMessage: true },
          { text: 'cho em hỏi này chút với ạ', time: '18:05', isMyMessage: true },
          { text: 'em đợi thầy xí nha', time: '19:06', isMyMessage: false },
          { text: 'dạ', time: '19:09', isMyMessage: true },
          { text: 'Mai lên lớp thầy sẽ trả lời cho nhé', time: '19:15', isMyMessage: false },
          { text: 'Thầy đang bận họp', time: '19:16', isMyMessage: false },
           
        ]
      },{
        imgSrc: '../img/profile-17.jpg',
        name: 'Ngọc Mai',
        onl:"off",
        status: 'offline 10 giờ trước',    
        messages: [
    { text: 'hello bà nha <br> bà học thiết kế web thầy thành à', time: '9:00', isMyMessage: true },
    { text: 'bà làm bài tập lớn đến đâu rồi', time: '17:05', isMyMessage: true },
    { text: 'tôi mới làm được 2 trang thôi bà ơi <br> tui lo qué', time: '9:10', isMyMessage: false },
    { text: 'Đâu cho tui xem với', time: '10:15', isMyMessage: true },
    { text: 'Dự án của bạn thế nào rồi!', time: '11:15', isMyMessage: true }
  ],
      },{
        imgSrc: '../img/profile-18.jpg',
        name: 'Kiên Võ',
        onl:"off",
        status: 'offline 1 phút trước',    
        messages: [
          { text: 'hello ông nha <br> bà học thiết kế web thầy thành à', time: '9:00', isMyMessage: true },
          { text: 'ông làm bài tập lớn đến đâu rồi', time: '9:05', isMyMessage: true },
          { text: 'Cho tui xem bt lớn ông đc khumm', time: '9:06', isMyMessage: true },
          { text: 'tui cũng chưa làm hết nơi <br> để tối tôi gửi cho nha', time: '9:10', isMyMessage: false },
          { text: 'hihi', time: '10:15', isMyMessage: true },
          { text: 'Cảm ơn!', time: '11:15', isMyMessage: true }
        ]
      },{
        imgSrc: '../img/profile-16.jpg',
        name: 'Thư Nhã',
        onl:"online-indicator",
        status: 'online',    
        messages: [
          { text: 'Tui thấy bà được giải nghiên cứu khoa học', time: '9:00', isMyMessage: true },
          { text: 'Ghê qué zọ', time: '9:05', isMyMessage: true },
          { text: 'xin víaa hehee', time: '9:06', isMyMessage: true },
          { text: 'haha cũng một phần may mắn mà', time: '9:10', isMyMessage: false },
          { text: 'Chúc mừng bà nha', time: '10:15', isMyMessage: true },

        ]
      },{
        imgSrc: '../img/profile-22.jpg',
        name: 'Giang Châu',
        onl:"online-indicator",
        status: 'online',    
        messages: [
          { text: 'Cô có gửi điểm trên lớp rồi nha', time: '9:00', isMyMessage: false },
          { text: 'dạ ', time: '9:05', isMyMessage: true },
          { text: 'không biết bài kiểm tra con có tốt không ạ', time: '9:06', isMyMessage: true },
          { text: 'Bài này khá tốt..', time: '9:10', isMyMessage: false },
       
        ]
      },{
        imgSrc: '../img/profile-24.jpg',
        name: 'Ngọc Lan',
        onl:"off",
        status: 'offline 5 giờ trước',    
        messages: [
          { text: 'Có điểm trên lớp rồi kìa', time: '9:00', isMyMessage: false },
          { text: 'bà được cao không', time: '9:05', isMyMessage: true },
          { text: 'tui cũng ổn á', time: '9:06', isMyMessage: true },
          { text: 'okee vậy là tốt rồi', time: '9:10', isMyMessage: false },
          { text: 'okee', time: '9:06', isMyMessage: true },
        ]
      },{
        imgSrc: '../img/profile-15.jpg',
        name: 'Minh Toại',
        onl:"online-indicator",
        status: 'online',    
        messages: [
          { text: 'alo mai a đi đà lạt', time: '9:00', isMyMessage: false },
          { text: 'anh đi nhớ mua quà cho em nha', time: '9:05', isMyMessage: true },
          { text: 'chắc chắn r hahaaa', time: '9:06', isMyMessage: true },
          { text: 'anh chuẩn bị đồ đi nha', time: '9:10', isMyMessage: false },       
          { text: 'Tạm biệt', time: '9:06', isMyMessage: true },
        ]
      },{
        imgSrc: '../img/profile-27.jpg',
        name: 'Thanh Quỳnh',
        onl:"off",
        status: 'offline 3 phút trước',    
        messages: [
          { text: 'mai qua chị chơi không', time: '9:00', isMyMessage: false },
          { text: 'tầm chiều chiều r em qua hi', time: '9:05', isMyMessage: true },
          { text: 'mà chiều nhỏ làm về mấy giờ', time: '9:06', isMyMessage: true },
          { text: 'Tầm 4h á', time: '9:10', isMyMessage: false },       
          { text: 'vậy tầm 4h kém e qua', time: '9:06', isMyMessage: true },
        ]
      },{
        imgSrc: '../img/profile-23.jpg',
        name: 'Ninh Trần',
        onl:"off",
        status: 'offline 28 phút trước',    
        messages: [
          { text: 'Sáng mai qua anh chơi không ', time: '9:00', isMyMessage: false },    
          { text: 'có nhật linh nè', time: '9:00', isMyMessage: false },
          { text: 'em chuẩn bị có bài thi triết nên cũng không bt nx', time: '9:05', isMyMessage: true },
          { text: 'kệ có sao đâu', time: '9:10', isMyMessage: false },       
          { text: 'qua anh chơi nè', time: '9:06', isMyMessage: false },
        ]
      },{
        imgSrc: '../img/profile-26.jpg',
        name: 'Hoàng Yến',
        onl:"off",
        status: 'offline 30 phút trước',    
        messages: [
        
          { text: 'em có gửi bài web cho chị r á', time: '9:05', isMyMessage: true },
          { text: 'qua zalo á chị', time: '9:10', isMyMessage: true },       
          { text: 'Web này hay lắm', time: '9:06', isMyMessage: false },
        ]
      }
    // Thêm thông tin cho các thẻ chat khác
  ];

  function loadPost(postId) {
    const postContainer = document.getElementById("postContainer");
    const chat = chatData[postId];
    // Xóa lớp "custom-bg" khỏi khối đã chọn trước đó
    const previousSelectedBlock = document.querySelector(".block.custom-bg");
    if (previousSelectedBlock) {
      previousSelectedBlock.classList.remove("custom-bg");
    }
  
    
    const messagesHtml = chat.messages
      .map(
        (message) => 
          `<div class="message ${message.isMyMessage ? 'my_msg' : 'friend_msg'}">
              <p>${message.text}<br><span>${message.time}</span></p>
            </div>`
      )
      .join('');
  
    
    const postContent = 
    `<div class="header">
            <div class="imgText">
                <div class="userimg">
                    <img src="${chat.imgSrc}" alt="" class="cover">
                </div>
                <div>
                    <h4>${chat.name}</h4>
                    <div class="${chat.onl}"></div>
                    <p>${chat.status}</p>
                </div>
            </div>
            <ul class="nav_icons">
                <li><ion-icon name="search-outline"></ion-icon></li>
                <li>
                    <span id="action_menu_btn"><i class="fa-solid fa-xmark"></i></span>
                    <div class="action_menu">
                        <ul>
                        </ul>
                    </div>
                </li>
            </ul>
      </div>
      <!-- CHAT-BOX -->
      <div class="chatbox" id="message">
        ${messagesHtml}
      </div>
      <!-- CHAT INPUT -->
      <div class="chat_input">
        <ion-icon name="happy-outline"></ion-icon>
        <input type="text" placeholder="Viết tin nhắn...">
        <i class="fa-solid fa-microphone"></i>
      </div>`;
  
    
    postContainer.innerHTML = postContent;
  
    
    let selectedBlock = document.getElementById(`postbg-${postId}`);
    if (selectedBlock) {
      selectedBlock.classList.add("custom-bg");
      const notificationBadge = selectedBlock.querySelector(".notification-badge");
      if (notificationBadge) {
        notificationBadge.remove();
      }
    }
  
    const chatList = document.querySelector('.chatlist');
    chatList.addEventListener('click', (event) => {
       // Tìm khối (block) mà bạn nhấp vào hoặc khối cha của nó
      const clickedBlock = event.target.closest('.block');
      if (!clickedBlock) return;
    
       // Đặt màu sắc của tất cả các văn bản thời gian về màu xám nhạt (#aaa)
      const allTimeTexts = chatList.querySelectorAll('.time');
      allTimeTexts.forEach((timeText) => {
        timeText.style.color = '#aaa';
      });
    
     // Đặt màu sắc thành black khi click vào ô đó
      const allTextContents = chatList.querySelectorAll('.text > p');
      allTextContents.forEach((text) => {
        text.style.color = '#black';
      });
    
      // Thay đổi màu sắc của văn bản thời gian và nội dung trong khối bạn nhấp vào
      const clickedTime = clickedBlock.querySelector('.time');
      const clickedText = clickedBlock.querySelector('.text > p');
      if (clickedTime) {
        clickedTime.style.color = 'red';
      }
      if (clickedText) {
        clickedText.style.color = '#aaa'; // Change this to any desired color
      }
    });
  
  }
  $(document).ready(function(){
	$('#action_menu_btn').click(function(){
		$('.action_menu').toggle();
	});
});
