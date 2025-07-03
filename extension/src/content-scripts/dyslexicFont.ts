export default function toggleDyslexicFont(): boolean {
    let applied = false;

    const styleId = "dyslexic-font-style";
    const isExist = document.getElementById(styleId);
    if (isExist) {
        isExist.remove();
    } else {
        const style = document.createElement("style");

        style.id = styleId;
        style.textContent = `
            @font-face {
                font-family: 'OpenDyslexic';
                src: url('fonts/OpenDyslexic-Regular.otf') format('opentype');
            }
            * { 
                font-family: 'OpenDyslexic', sans-serif !important; 
            }
        `;

        document.head.appendChild(style);

        applied = true;
    }

    return applied;
}
