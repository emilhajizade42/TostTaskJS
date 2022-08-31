const textarea = document.querySelector("#message-content");
const duration = document.querySelector("#duration");
const cancelable = document.querySelector("#cancelable");
const success = document.querySelector("#success");
const error = document.querySelector("#error");
const addButton = document.querySelector("#add-button");
const clearButton = document.querySelector("#clear-button");
const toasts = document.querySelector("#toasts");

let SuccesOrError = true
let CancelState = false
let DurationState = 500
addButton.addEventListener("click", function (e) {
    DurationState = duration.value
    toasts.appendChild(Generatestructur(SuccesOrError,CancelState,DurationState));
})


success.addEventListener("click", function (e) {
    SuccesOrError = true
})

error.addEventListener("click", function (e) {
    SuccesOrError = false
})

cancelable.addEventListener("click", function (e) {
    CancelState = !CancelState
})

clearButton.addEventListener("click", function (e) {
    document.querySelectorAll(".toast").forEach(item => item.remove())
})
function Generatestructur
    (msgType, isCancel , duration) {
        meessage = textarea.value
        const div = document.createElement("div");
        div.classList.add("toast")
        msgType ? div.classList.add("success-toast") : div.classList.add("error-toast");
        const p = document.createElement("p");
        p.classList.add("message");
        if (meessage.trim() !="") {
            p.innerHTML=meessage
        }
        else if(msgType){
            p.innerHTML="Succes"
        }
        else{
            p.innerHTML="Error"
        }
        const button = document.createElement("button");
        button.classList.add("cancel-button");
        button.innerHTML="X"
        if (isCancel) {
            button.addEventListener("click",function (e) {
                e.target.parentElement.remove()
            })
        }
        if (duration == "" || duration <= 500) {
            setTimeout(() => {
                div.remove()
            }, 500);
        } else {
            setTimeout(() => {
                div.remove()
            }, duration);
        }
        div.appendChild(p);
        div.appendChild(button); 
        return div
}
console.log(Generatestructur("salam",true));