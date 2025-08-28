<script>
  document.getElementById("passwordform").addEventListener("submit", function (e) {
    e.preventDefault()

    const input = document.getElementById("password").value;
    const correctPassword = "beast"; 
    const gifContainer = document.getElementById("gifContainer");

 if (input === correctPassword) {
  document.getElementById("passwordform").style.display = "none";
  gifContainer.classList.remove("hidden");

  setTimeout(() => {
    window.location.href = "welcome.index.html";
  }, 1400);
} else {
  alert("Thou art not worthy.");
}

</script>

// brain no understand. why code no work.  chris confuse.
// living in cave. computer no understand

