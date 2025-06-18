// 获取Cookie中的sessionid
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



// 处理点击链接事件
// document.addEventListener('DOMContentLoaded', function () {
//     document.getElementById('visual').addEventListener('click', function (e) {
//         var sessionId = getSessionId();
//         if (!sessionId) {
//             // 如果没有sessionid，阻止默认行为，弹出提示并重定向到登录页面
//             e.preventDefault();
//             Swal.fire({
//                 title: '请先登录！',
//                 text: '点击确定去登录！',
//                 icon: 'success',
//                 confirmButtonText: '确定'
//             }).then((result) => {
//                 if (result.isConfirmed) {
//                     console.log(ROOTPATH);
//                     window.location.href = ROOTPATH + '/login';
//                     console.log('Session ID:', sessionId);
//                 }
//             });
//         }
//     });
// });

function handleLinkClick(event, redirectTo) {
    var sessionId = getSessionId();
    if (!sessionId) {
        // 阻止默认行为
        event.preventDefault();
        // 弹出提示
        Swal.fire({
            title: '请先登录！',
            text: '点击确定去登录,点击其它地方取消！',
            icon: 'success',
            confirmButtonText: '确定'
        }).then((result) => {
            if (result.isConfirmed) {
                console.log(ROOTPATH);
                // 重定向到登录页面
                window.location.href = ROOTPATH + redirectTo;
                console.log('Session ID:', sessionId);
            }
        });
    }
}
