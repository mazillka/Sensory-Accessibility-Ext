    let applied = false;

export default function toggleBionic(): boolean {
    if (applied) {
        document.querySelectorAll("span.bionic").forEach((span: any) => {
            span.outerHTML = span.textContent;
        });

        applied = false;
    } else {
        processNode(document.body);
        applied = true;
    }

    return applied;
}

function processNode(node: any) {
    if (node.nodeType === Node.TEXT_NODE) {
        if (node.textContent == null || node.textContent.trim().length === 0) {
            return;
        }

        const parent = node.parentNode as any;

        if (parent.classList && parent.classList.contains("bionic")) {
            return;
        }

        const words = node.textContent.split(/(\s+)/);

        const fragment = document.createDocumentFragment();

        words.forEach((word: any) => {
            if (word.trim().length < 3) {
                fragment.appendChild(document.createTextNode(word));
            } else {
                const half = Math.ceil(word.length / 2);
                const span = document.createElement("span");
                span.className = "bionic";
                span.innerHTML = `<b>${word.slice(0, half)}</b>${word.slice(half)}`;
                fragment.appendChild(span);
            }
        });

        parent.replaceChild(fragment, node);

    } else if (node.nodeType === Node.ELEMENT_NODE && !["SCRIPT", "STYLE", "TEXTAREA", "INPUT", "CODE", "PRE"].includes(node.tagName)) {
        for (let child = node.firstChild; child !== null; child = child.nextSibling) {
            processNode(child);
        }
    }
}