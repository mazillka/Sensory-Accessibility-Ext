import "./scss/popup.scss";
import { createElement, storage, constants } from "./helpers";
import { Tool } from "./types";

document.addEventListener("DOMContentLoaded", async () => {
    const toolsDiv = document.querySelector("#tools") as HTMLElement;

    await storage.get(constants.Storage.Tools).then((tools: Tool[]) => {
        tools.filter(tool => tool.enabled)
            .forEach(tool => {
                const attributes = {
                    id: tool.id,
                    onclick: async () => {
                        try {
                            await chrome.tabs.query({ active: true, currentWindow: true }).then(async tabs => {
                                if (tabs.length > 0 && tabs[0].id !== undefined) {
                                    await chrome.tabs.sendMessage(tabs[0].id, { command: tool.id });
                                }
                            });
                        } catch (error) {
                            console.error("Failed to send toggle command:", error);
                        }

                    },
                };

                const span: any = createElement("span", { class: "i18n", "data-msg": tool.id });

                const button: any = createElement("button", attributes, span);

                toolsDiv.appendChild(button);
            });
    });

    document.querySelectorAll('.i18n').forEach(el => {
        if (el) {
            const span = el as HTMLElement;
            const value = span.dataset.msg || "";
            const msg = chrome.i18n.getMessage(value);

            if (msg) {
                el.textContent = msg;
            }
        }
    });
});

if (process.env.NODE_ENV !== "development") {
    document.addEventListener("contextmenu", event => event.preventDefault());
}
