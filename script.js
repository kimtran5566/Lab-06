document.addEventListener('DOMContentLoaded', function () {
    var categories = document.querySelectorAll('nav li a');

    categories.forEach(function (category) {
        category.addEventListener('mouseover', function () {
            this.style.backgroundColor = '#f2f2f2'; // Màu nền khi rê chuột qua
            this.style.color = '#000000'; // Màu chữ khi rê chuột qua
        });

        category.addEventListener('mouseout', function () {
            this.style.backgroundColor = ''; // Xóa màu nền khi chuột rời khỏi
            this.style.color = ''; // Xóa màu chữ khi chuột rời khỏi
        });
    });
});

document.addEventListener('DOMContentLoaded', function () {
    var loginButton = document.getElementById('loginButton');
    var loginModal = document.getElementById('loginModal');
    var closeButton = document.getElementById('closeButton');
    var submitBtn = document.getElementById('submitBtn');
    var loginResult = document.getElementById('loginResult');
    var usernameInput = document.getElementById('username');
    var passwordInput = document.getElementById('password');

    // Mở modal khi nhấn nút Đăng nhập
    loginButton.addEventListener('click', function () {
        loginModal.style.display = 'block';
        rememberMeCheckbox.checked = localStorage.getItem('rememberMe') === 'true';
    });

    // Đóng modal khi nhấn nút đóng (×)
    closeButton.addEventListener('click', function () {
        loginModal.style.display = 'none';
    });

    // Đóng modal khi nhấn ra ngoài modal
    window.addEventListener('click', function (event) {
        if (event.target == loginModal) {
            loginModal.style.display = 'none';
        }
    });

    // Xử lý đăng nhập khi nhấn nút Đăng nhập trong modal
    submitBtn.addEventListener('click', function () {
        var enteredUsername = usernameInput.value;
        var enteredPassword = passwordInput.value;

        // Kiểm tra thông tin đăng nhập
        if (enteredUsername === 'admin' && enteredPassword === '123456') {
            alert('Đăng nhập thành công!');
        } else {
            alert('Đăng nhập thất bại. Vui lòng kiểm tra tên đăng nhập và mật khẩu.');
        }
    });
});


