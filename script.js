function calculateFriendship() {
    var yourName = document.getElementById("yourName").value.trim();
    var friendName = document.getElementById("friendName").value.trim();

    if (yourName === "" || friendName === "") {
        alert("Please enter both your name and your friend's name.");
        return;
    }

    var friendshipPercentage = Math.floor(Math.random() * 101); // Generate a random friendship percentage (0 to 100)

    var result = "";

    if (friendshipPercentage >= 80) {
        result = "Congratulations! You and " + friendName + " are best friends forever! 🎉";
    } else if (friendshipPercentage >= 60) {
        result = "You and " + friendName + " have a strong friendship bond. Keep nurturing your friendship! 💪";
    } else if (friendshipPercentage >= 40) {
        result = "Your friendship with " + friendName + " is growing. Spend more time together to strengthen your bond. 🙂";
    } else {
        result = "It seems like you and " + friendName + " are still getting to know each other. Keep building your friendship! 👫";
    }

    document.getElementById("result").innerText = "Friendship Percentage: " + friendshipPercentage + "%\n" + result;
}
