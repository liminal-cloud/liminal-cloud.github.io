import { initDarkMode } from './js/darkMode.js';
import { initNavigation } from './js/navigation.js';

// Initialize all features
document.addEventListener('DOMContentLoaded', () => {
    initDarkMode();
    initNavigation();
});

// Project Counter

document.addEventListener("DOMContentLoaded", () => {
    const counter = document.getElementById("projects-count");
    let count = 0;
    const target = 3; // Replace with your actual project count

    const updateCounter = () => {
        if(count < target) {
            count++;
            counter.innerText = count;
            requestAnimationFrame(updateCounter);
        }
    };

    updateCounter();
});

// Did you know section
document.addEventListener("DOMContentLoaded", () => {
    const facts = [
        "I once built a guitar amplifier from scratch!",
        "I love automating random processes, even making my coffee machine more efficient.",
        "My dream project is to create an open-source knowledge-sharing platform.",
        "I can make a pretty mean vegan curry.",
        "I started coding because I wanted to modify Minecraft."
    ];

    const factElement = document.getElementById("fun-fact-text");
    let currentIndex = 0;

    setInterval(() => {
        currentIndex = (currentIndex + 1) % facts.length;
        factElement.innerText = facts[currentIndex];
    }, 5000); // Updates every 5 seconds
});
