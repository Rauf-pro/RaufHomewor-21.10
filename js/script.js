// Task-1 Calculating Life Statics

let date = new Date();
// console.log(date);



// let dateInput = document.getElementById("datePicker");

// let age_Year = document.getElementById("ageYear");
// let age_Month = document.getElementById("ageMonth");
// let age_Days = document.getElementById("ageDays");
// let age_Hours = document.getElementById("ageHours");
// let age_Minutes = document.getElementById("ageMinutes");
// let age_Seconds = document.getElementById("ageSeconds");

// dateInput.addEventListener("change", function () {

//     let options = { year: "numeric", month: "numeric", day: "numeric", hour: "numeric", minute: "numeric" };
//     let selectedDate = new Date(this.value);

//     let dateofbirth = selectedDate.toLocaleDateString("en-US", options);

//     let millisecondsDateofbirth = Date.parse(dateofbirth);
//     let millisecondsNow = Date.now();
     
//     let age_Milliseconds = millisecondsNow - millisecondsDateofbirth;



//     let milliseconds = age_Milliseconds;
//     let second = 1000;
//     let minute = second * 60;
//     let hour = minute * 60;
//     let day = hour * 24;
//     let month = day * 30;
//     let year = month * 12;

//     let years = Math.round(milliseconds / year);
//     let months = years * 12;
//     let days = years * 365;
//     let hours = Math.round(milliseconds / hour);
//     let minutes = Math.round(milliseconds / minute);
//     let seconds = Math.round(milliseconds / second);

//     //print value
//     age_Year.innerHTML = years
//     age_Month.innerHTML = months
//     age_Days.innerHTML = days
//     age_Hours.innerHTML = hours
//     age_Minutes.innerHTML = minutes
//     age_Seconds.innerHTML = seconds



//Task-2 Changing elements drag-drop 

let draggables = document.querySelectorAll(".draggable");
let box = document.querySelectorAll(".drag_drop");

draggables.forEach(draggable => {
    draggable.addEventListener("dragstart", () => {
        // console.log("drag start")
        draggable.classList.add("dragging");
    })
    draggable.addEventListener("dragend", () => {
        draggable.classList.remove("dragging");
    })
})
box.forEach(drag_drop => {
    drag_drop.addEventListener("dragover", e => {
        e.preventDefault();
        // console.log("drag over")
        let draggable = document.querySelector(".dragging");
        drag_drop.append(draggable);
    });
});



//Task-3 elements from desktop to Web

let inApp = () => {
    let drop_Field = document.querySelector(".dropField");

    let prevents = (e) => e.preventDefault();

    ["dragenter", "dargover", "dragleave", "drop"].forEach(evName =>{
        drop_Field.addEventListener(evName, prevents);
    });
    
    
    drop_Field.addEventListener("drop", handleDrop);
    
}

document.addEventListener("DOMContenLoaded", inApp);

let handleDrop = (e) => {
    let data_Transfer = e.dataTransfer;
    let files = data_Transfer.files;
    let filearr = [...files];
    console.log(files);
    console.log(filearr);
}

































