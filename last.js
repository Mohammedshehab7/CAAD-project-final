function submitPoll() {
    var radios = document.getElementsByName('poll');
    var selectedValue;
    for (var i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            selectedValue = radios[i].value;
            break;
        }
    }
    if(selectedValue) {
        document.getElementById('thankYouMessage').style.display = 'block';
        // Here, you can also send 'selectedValue' to your server for storage or analysis
        console.log("Selected option: " + selectedValue); // Example: logging to the console
    } else {
        alert("Please select an option before voting.");
    }
}
