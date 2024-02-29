function registro() {
    let btEnterKey = document.getElementById("entrar")
    localStorage.setItem("Key-accets", 536157714)
    
    window.location.href="/src/views/register.html" 
}
function app_Enter_Register(){
    const nme = document.getElementById("register-Name").value;
    const lastName = document.getElementById("register-Lastname").value;
    const password = document.getElementById("register-Password").value;
    const password_confirm = document.getElementById("register-Password-C").value;
    const grade = document.getElementById("register-Grade").value;
    const section = document.getElementById("register-Section").value;
    localStorage.setItem("name", nme)
    localStorage.setItem("lastName", lastName)
    localStorage.setItem("password", password)
    localStorage.setItem("password_C", password_confirm) 
    localStorage.setItem("grade", grade)
    localStorage.setItem("section", section)
    window.location.href="/src/views/apk.html" 
}