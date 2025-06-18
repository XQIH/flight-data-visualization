
// 从 Cookie 中获取 CSRF 令牌的函数
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

function getSessionId() {
    var cookies = document.cookie.split(';');
    console.log(cookies);
    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i].trim();

        // 检查是否以 'sessionid=' 开头
        if (cookie.indexOf('sessionid=') === 0) {
            // 返回等号后面的部分作为 sessionid
            return cookie.substring('sessionid='.length);
        }
    }

    return null;
}


function jump1(event) {
    event.preventDefault();
    var username = document.getElementById("L-user").value;
    var password = document.getElementById("L_pwd").value;

    if (username && password) {
        $.ajax({
            url: ROOTPATH.replace('index', '') + "login", // 修正URL路径 // 替换为实际的登录接口地址
            type: "POST",
            data: {username: username, password: password},
            beforeSend: function (xhr, settings) {
                var csrftoken = getCookie('csrftoken');
                xhr.setRequestHeader("X-CSRFToken", csrftoken);
            },
            success: function (data) {
                if (data === "0") {
                    Swal.fire({
                        title: '用户名或密码错误！',
                        text: '请重新输入！',
                        icon: 'error',
                        confirmButtonText: '确定'
                    })
                    document.getElementById("L-user").value = ""; // 清空用户名输入框
                    document.getElementById("L_pwd").value = ""; // 清空密码输入框
                    return false;
                }
                    Swal.fire({
                        title: '登录成功！',
                        text: '点击确定进入首页！',
                        icon: 'success',
                        confirmButtonText: '确定'
                    }).then((result) => {
                        if (result.isConfirmed) {
                            console.log(ROOTPATH);
                            window.location.href = ROOTPATH +'?username='+encodeURIComponent(username) // 进入首页
                        }
                    });
                }
            ,
                error: function (jqXHR, textStatus, err) {
                    console.error("请求失败！", err);
                }
            ,
                complete: function (jqXHR, textStatus) {
                    console.log("请求完成！", textStatus);
                }
            ,
                statusCode: {
                    '403'
                :

                    function (jqXHR, textStatus, err) {
                        console.error("请求被拒绝！", err);
                    }

                ,
                    '400'
                :

                    function (jqXHR, textStatus, err) {
                        console.error("错误的请求！", err);
                    }
                }
            });

    } else
        if (username == "" || password == "") {
            Swal.fire({
                        title: '用户名或密码不能为空！',
                        text: '',
                        icon: 'error',
                        confirmButtonText: '我知道了！'
                    })
            return false;
        }
    }


