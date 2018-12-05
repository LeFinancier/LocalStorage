var nickName = document.getElementById('nickName');
var useNickName = localStorage.getItem('nickName');

window.onload = function () {
  if (localStorage.getItem('nickName') != null) {
    nickName.innerHTML = useNickName;
  }
}
function registrarUsuario() {
  let userName = document.getElementById('userName').value;
  
  if (userName != "") {
    localStorage.setItem('nickName', userName);
    nickName.innerHTML = userName;
  } else {
    alert('Ingresa tu nombre válido');
  }
}

function clearLS() {
  localStorage.clear();
}