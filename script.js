const rooms = document.querySelectorAll(".room");

rooms.forEach(room => {
  room.addEventListener("click", () => {
    alert("You entered " + room.innerText);
  });
});