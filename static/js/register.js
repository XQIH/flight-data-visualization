function checkpassword() {
    var password = document.getElementById("R_pwd").value;
    var repassword = document.getElementById("R_repwd").value;
    if (password != "" && repassword != "") {
        if (password != repassword) {
            document.getElementById("tishi").innerHTML = "<font color='red'>两次输入密码不一致!</font>";
        }
    } else {
        document.getElementById("tishi").innerHTML = "<font color='red'></font>";
    }
}

function getCookie(name) {
    var cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        var cookies = document.cookie.split(';');
        for (var i = 0; i < cookies.length; i++) {
            var cookie = cookies[i].trim();
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}

function jump() {
    // 获取表单数据
    var Email = document.getElementById("R_email").value;
    var reg = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;
    var User = document.getElementById("R_user").value;
    var Password = document.getElementById("R_pwd").value;
    var Repassword = document.getElementById("R_repwd").value;
    var selectedSex = document.querySelector('input[name="gender"]:checked').value;

    console.log(selectedSex);
    // 基础验证
    if (Email == "" || User == "" || Password == "") {
        Swal.fire({
            title: '邮箱、用户名、头像或密码不能为空！！',
            text: '请重新输入！',
            icon: 'error',
            confirmButtonText: '确定'
        })
        return false;
    } else if (!reg.test(Email)) {
        Swal.fire({
            title: '邮箱格式不正确！',
            text: '请重新输入！',
            icon: 'error',
            confirmButtonText: '确定'
        })
        return false;
    } else if (Password === Repassword) {
        //发送请求
        $.ajax({
            type: "POST",
            url: ROOTPATH+"register",  // 确保路径正确
            data: {
                "email": Email,
                "username": User,  // 字段名与后端一致
                "password": Password,
                "gender": selectedSex
            },
            beforeSend: function (xhr, settings) {
                var csrftoken = getCookie('csrftoken');
                xhr.setRequestHeader("X-CSRFToken", csrftoken);
            },
            success: function (data) {
                if (data == "0") {
                    Swal.fire({
                        title: '注册成功！',
                        text: '点击确定去登录！',
                        icon: 'success',
                        confirmButtonText: '确定'
                    }).then((result) => {
                        if (result.isConfirmed) {
                            console.log(ROOTPATH);
                            window.location.href = ROOTPATH+'login'; // 进入首页
                        }
                    });
                } else if (data == "1") {
                    Swal.fire({
                        title: '注册信息有误！',
                        text: '用户已存在！',
                        icon: 'error',
                        confirmButtonText: '确定'
                    })
                } else if (data == "2") {
                    Swal.fire({
                        title: '注册信息有误！',
                        text: '邮箱已存在！',
                        icon: 'error',
                        confirmButtonText: '确定'
                    })
                }
            }
        });
    } else {
        Swal.fire({
                        title: '错误！',
                        text: '注册信息有误！',
                        icon: 'error',
                        confirmButtonText: '确定'
                    })
    }
}

function jump3() {
    window.location.href = "login";
}

