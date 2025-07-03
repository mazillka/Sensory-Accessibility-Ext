import { toggleGrayscale, toggleDyslexicFont, toggleBionic } from "./content-scripts";

chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
    switch (msg.command) {
        case "grayscale":
            toggleGrayscale();
            break;

        case "dyslexic":
            toggleDyslexicFont();
            break;

        case "bionic":
            toggleBionic();
            break;
    }
});