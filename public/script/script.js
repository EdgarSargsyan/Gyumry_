

//////////////////
// lang config  //
//////////////////
// {
//     localStorage.setItem('lang', 'en');
//     $('#en').on('click', function(){
//         localStorage.setItem('lang', 'en');
//     })
//     $('#ru').on('click', function(){
//         localStorage.setItem('lang', 'ru');
//     })
//     $('#hy').on('click', function(){
//         localStorage.setItem('lang', 'hy');
//     })
// }


////////////////////
// btn scroll up  //
////////////////////

var btnTop = $(".btnTop");

$(window).on("scroll", function () {
    if ($(window).scrollTop() >= 20) {
        btnTop.fadeIn();
    } else {
        btnTop.fadeOut();
    }
});

$(btnTop).on("click", function () {
    $("html,body").animate({ scrollTop: 0 }, 900);
});

var showMore = $(".showMore");
var showP = $(".showP");

$(showMore[0]).on("click", function () {
    $(showP[0]).slideToggle("slow");

});




////////////////////
//   show forms    //
////////////////////

function showForm(event) {
    $(event.data.arg).fadeIn();
};
function hideForm(event) {
    $(event.data.arg).fadeOut();
};


function ajaxReg(data) {
    var xhr = new XMLHttpRequest();
    xhr.open('POST', '/users/regist', true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify(data));

    xhr.onreadystatechange = function () {
        if (xhr.readyState !== 4) {
            $('#regErr').text('Server error');
        };
        if (xhr.status === 200) {
            if (xhr.response) {
                if (JSON.parse(xhr.response).surname !== undefined) {
                    $('#userName').val('');
                    $('#userSurname').val('');
                    $('#userEmail').val('');
                    $('#userPassword').val('');
                    $('#passConfirm').val('');
                    $('#regErr').text('');
                    $("#regForm").hide('slow');
                    $('#userEmail').css("box-shadow", "none");

                    $('#user_info').text(`Registration Success!. Sign in to your account`);
                    setTimeout(function () {
                        $('#user_info').text('');
                    }, 5000);
                }
                if (JSON.parse(xhr.response).errmsg !== undefined) {
                    $('#userEmail').css("box-shadow", "0px 0px 80px red")
                    $('#regErr').text('Duplicate email error');
                }
            }
        } else {

            console.log(xhr.status + '-' + xhr.statusText);
        }
    }
};

$('#singIn').on('click', { arg: "#loginForm" }, showForm);
$('#singIn').on('click', { arg: "#regForm" }, hideForm);
$('#singUp').on('click', { arg: "#regForm" }, showForm);
$('#singUp').on('click', { arg: "#loginForm" }, hideForm);
$('#addNews').on('click', { arg: "#addForm" }, showForm);

$('#send').on('click', function () {
    event.preventDefault();
    if ($('#userName').val() &&
        $('#userSurname').val() &&
        $('#userEmail').val() &&
        $('input[name="gender"]:checked').val() &&
        $('#userPassword').val() &&
        (/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/).test($('#userEmail').val())
    ) {
        if ($('#userPassword').val() === $('#passConfirm').val()) {
            var regData = {
                name: $('#userName').val(),
                surname: $('#userSurname').val(),
                email: $('#userEmail').val(),
                gender: $('input[name="gender"]:checked').val(),
                password: $('#userPassword').val()
            }
            ajaxReg(regData);


            $('#regErr').text('');
            $('#passConfirm').css("box-shadow", "none");
        } else {
            $('#regErr').text('Password and Confirmation do not match!');
            $('#passConfirm').css("box-shadow", "0px 0px 80px red")
        }
    } else {
        $('#regErr').text('Fill in all the fields and check the password and emaila');
    }
});


// function ajaxLog(data) {
//     var xhr = new XMLHttpRequest();
//     xhr.open('POST', '/users/login', true);
//     xhr.withCredentials = true;
//     xhr.setRequestHeader('Content-Type', 'application/json');
//     xhr.send(JSON.stringify(data));

//     xhr.onreadystatechange = function () {
//         if (xhr.readyState !== 4) return;
//         if (xhr.status === 200) {
//             console.log(xhr.response);
//             if (xhr.response) {
//                 var info = JSON.parse(xhr.response);
//                 if (info.user) {
//                     alert(`Success!
//                             Your name : ${info.user.name} 
//                             Your surname : ${info.user.surname} 
//                             Your gender : ${info.user.gender}
//                             Your email : ${info.user.email} 
//                             Your registration date : ${info.user.cerated}`);
//                     $('#loginEmail').val('');
//                     $('#loginPassword').val('');
//                     $('#loginEmail').css("box-shadow", "none");
//                     $('#loginPassword').css("box-shadow", "none");
//                     $("#loginForm").hide('slow');
//                     $("#singUp").hide('slow');
//                     $("#singIn").hide('slow');
//                     $("#logOut").show('slow');
//                     $("#addNews").show('slow');
//                 } else if (info.emailErr) {
//                     $('#logErr').text(`${info.emailErr}`);
//                     $('#loginEmail').css("box-shadow", "0px 0px 100px red");
//                 } else if (info.passErr) {
//                     $('#logErr').text(`${info.passErr}`);
//                     $('#loginEmail').css("box-shadow", "0px 0px 80px rgb(0, 255, 0)");
//                     $('#loginPassword').css("box-shadow", "0px 0px 80px red");
//                 }
//             }
//         } else {
//             console.log(xhr.status + '-' + xhr.statusText);
//         }
//     }
// }

// $('#login').on('click', function () {
//     event.preventDefault();
//     if ($('#loginEmail').val() &&
//         $('#loginPassword').val()
//     ) {
//         var loginData = {
//             email: $('#loginEmail').val(),
//             password: $('#loginPassword').val()
//         }
//         ajaxLog(loginData);
//         $('#logErr').text('');
//     } else {
//         $('#logErr').text('Email or Password entered incorrectly');
//     }
// });

$('#login').on('click', function () {
    if($(!'#loginEmail').val() ||
            !$('#loginPassword').val()){
                event.preventDefault();
                $('#logErr').text('Email or Password entered incorrectly');
    }
});


function ajaxAdd(data) {
    var xhr = new XMLHttpRequest();
    xhr.open('POST', '/users/addnews', true);
    xhr.withCredentials = true;
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify(data));

    xhr.onreadystatechange = function () {
        if (xhr.readyState !== 4) return;
        if (xhr.status === 200) {
            console.log(xhr.response);
            if (xhr.response) {
                alert('Success!');
                $('#newsTitle').val('');
                $('#newsContent').val('');
                $("#addForm").hide('slow');
            }
        } else {
            console.log(xhr.status + '-' + xhr.statusText);
        }
    }
}

$('#add').on('click', function () {
    event.preventDefault();
    if ($('#newsTitle').val() &&
        $('#newsContent').val()
    ) {
        var addData = {
            Title: $('#newsTitle').val(),
            Content: $('#newsContent').val()
        }
        console.log(addData)
        ajaxAdd(addData);
        $('#addErr').text('');
    } else {
        $('#addErr').text('Fill in all the fields');
    }
});

$('.close>img').on('click', { arg: "#regForm" }, hideForm);
$('.close>img').on('click', { arg: "#loginForm" }, hideForm);
$('.close>img').on('click', { arg: "#addForm" }, hideForm);




////////////////////
//   show lists   //
////////////////////

$("#li1").on('click', function () {
    $('#li1 > ul').toggle('normal');
    if ($("#li1 > i").hasClass("fa-angle-down")) {
        $("#li1 > i").removeClass("fa-angle-down");
        $("#li1 > i").addClass("fa-angle-up");
    } else {
        $("#li1 > i").addClass("fa-angle-down");
        $("#li1 > i").removeClass("fa-angle-up");
    };
})
$("#li2").on('click', function () {
    $('#li2 > ul').toggle('normal');
    if ($("#li2 > i").hasClass("fa-angle-down")) {
        $("#li2 > i").removeClass("fa-angle-down");
        $("#li2 > i").addClass("fa-angle-up");
    } else {
        $("#li2 > i").addClass("fa-angle-down");
        $("#li2 > i").removeClass("fa-angle-up");
    };
})
$("#li3").on('click', function () {
    $('#li3 > ul').toggle('normal');
    if ($("#li3 > i").hasClass("fa-angle-down")) {
        $("#li3 > i").removeClass("fa-angle-down");
        $("#li3 > i").addClass("fa-angle-up");
    } else {
        $("#li3 > i").addClass("fa-angle-down");
        $("#li3 > i").removeClass("fa-angle-up");
    };
})
$("#li4").on('click', function () {
    $('#li4 > ul').toggle('normal');
    if ($("#li4 > i").hasClass("fa-angle-down")) {
        $("#li4 > i").removeClass("fa-angle-down");
        $("#li4 > i").addClass("fa-angle-up");
    } else {
        $("#li4 > i").addClass("fa-angle-down");
        $("#li4 > i").removeClass("fa-angle-up");
    };
})
$("#li5").on('click', function () {
    $('#li5 > ul').toggle('normal');
    if ($("#li5 > i").hasClass("fa-angle-down")) {
        $("#li5 > i").removeClass("fa-angle-down");
        $("#li5 > i").addClass("fa-angle-up");
    } else {
        $("#li5 > i").addClass("fa-angle-down");
        $("#li5 > i").removeClass("fa-angle-up");
    };
})
$("#li6").on('click', function () {
    $('#li6 > ul').toggle('normal');
    if ($("#li6 > i").hasClass("fa-angle-down")) {
        $("#li6 > i").removeClass("fa-angle-down");
        $("#li6 > i").addClass("fa-angle-up");
    } else {
        $("#li6 > i").addClass("fa-angle-down");
        $("#li6 > i").removeClass("fa-angle-up");
    };
})

