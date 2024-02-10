document.addEventListener("DOMContentLoaded", function() {
    var chatBox = document.getElementById("chat-box");
    var userInput = document.getElementById("user-input");

    function addBotMessage(message) {
        var messageElement = document.createElement("div");
        messageElement.classList.add("chat-message", "bot-message");
        messageElement.innerText = message;
        chatBox.appendChild(messageElement);
        chatBox.scrollTop = chatBox.scrollHeight;
    }

    function addUserMessage(message) {
        var messageElement = document.createElement("div");
        messageElement.classList.add("chat-message", "user-message");
        messageElement.innerText = message;
        chatBox.appendChild(messageElement);
        chatBox.scrollTop = chatBox.scrollHeight;
    }

    function handleUserInput() {
        var message = userInput.value.trim();
        if (message !== "") {
            addUserMessage(message);
            userInput.value = "";

            // Process user input and generate bot response
            var botResponse = generateBotResponse(message);
            addBotMessage(botResponse);
        }
    }

    function generateBotResponse(userInput) {
        // Define patterns and corresponding responses
        var patterns = [
            { pattern: "hi|hello|hey", response: "Hello, how can I assist you today?" },
            { pattern: "help", response: "Sure, I can help. What do you need assistance with?" },
            { pattern: "shopping", response: "Great! What kind of products are you looking for? We have electronics, clothing, shoes, accessories, and more." },
            { pattern: "fashion", response: "Fantastic! Would you like to browse through our latest fashion collection? We have hoodies, formal shirts, jeans, and more." },
            { pattern: "electronics", response: "Sure! We have a wide range of electronics including smartphones, laptops, cameras, and smart home devices." },
            { pattern: "clothing", response: "We offer a variety of clothing options including shirts, pants, dresses, and outerwear. What specific type of clothing are you interested in?" },
            { pattern: "shoes", response: "Explore our collection of shoes ranging from sneakers to boots, for both men and women." },
            { pattern: "accessories", response: "Accessorize your outfit with our selection of jewelry, bags, hats, belts, and more." },
            { pattern: "home goods", response: "Enhance your living space with our home goods selection including furniture, decor, kitchenware, and more." },
            { pattern: "buy", response: "Certainly! Let me assist you with finding the perfect item." },
            { pattern: "try", response: "Unfortunately, I can't offer physical try-ons, but I can provide detailed information and recommendations." },
            { pattern: "thanks|thank you", response: "You're welcome!" },
            // Add more patterns and responses as needed
            { pattern: ".*", response: "I'm sorry, I didn't quite understand. Can you please rephrase or provide more details?" }
        ];

        // Iterate through patterns to find a match
        for (var i = 0; i < patterns.length; i++) {
            var pattern = new RegExp(patterns[i].pattern, "i");
            if (pattern.test(userInput)) {
                return patterns[i].response;
            }
        }

        return "I'm sorry, I didn't quite understand. Can you please rephrase or provide more details?";
    }

    userInput.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            handleUserInput();
        }
    });
});