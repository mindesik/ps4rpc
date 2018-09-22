const electron = require('electron')
const ipc = electron.ipcRenderer

const logoutBtn = document.getElementById('logoutBtn')

logoutBtn.addEventListener('click', function(){
    ipc.send('logout-function')
})

const ckButton = document.getElementById('ckStatus')

ckButton.addEventListener('click', function(){
    if (this.checked){
        ipc.send('switch-status','checked')
    }else{
        ipc.send('switch-status','unchecked')
    }
})

var profilePic = document.getElementById('profile-picture')

ipc.on('profile-picture', function(event, arg){
    console.log(arg)
    profilePic.src = arg
})

var nickname = document.getElementById('nickname')

ipc.on('nickname', function(event, arg){
    console.log(arg)
    nickname.innerHTML = arg
})

document.addEventListener('DOMContentLoaded', function() {
    ipc.send('get-account-data')
}, false);