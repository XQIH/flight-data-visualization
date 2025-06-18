import {getCookie} from './login.js';

function updateUserInfo() {
    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    $.ajax({
        url: url,  // 更新为你实际的 URL
        type: 'POST',
        data: {
            username: username,
            email: email,
            password: password
        },// 添加 CSRF 标记
        beforeSend: function (xhr, settings) {
            var csrftoken = getCookie('csrftoken');
            xhr.setRequestHeader("X-CSRFToken", csrftoken);
        },
        success: function (data) {
            console.log(1);
            // 在这里处理从后端返回的数据
        }
    });

    // 其他逻辑
}

// 获取指定名称的 cookie 的值
