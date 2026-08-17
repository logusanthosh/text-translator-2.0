const inputText = document.getElementById("inputText");
const outputText = document.getElementById("outputText");
const fromLang = document.getElementById("fromLang");
const toLang = document.getElementById("toLang");
const translateBtn = document.getElementById("translateBtn");
const swapBtn = document.getElementById("swapBtn");
const clearBtn = document.getElementById("clearBtn");
const copyBtn = document.getElementById("copyBtn");
const speakBtn = document.getElementById("speakBtn");
const micBtn = document.getElementById("micBtn");
const charCount = document.getElementById("charCount");
const status = document.getElementById("status");
const themeBtn = document.getElementById("themeBtn");
const historyList = document.getElementById("historyList");
const clearHistory = document.getElementById("clearHistory");
const fontStyle = document.getElementById("fontStyle");

const MAX_TRANSLATION_CHARS = 500;

const englishStylePresets = {
    "artistic": ["Arial, sans-serif", "italic", "400", "none"],
    "abstract": ["Georgia, serif", "normal", "500", "none"],
    "decorative": ["Trebuchet MS, sans-serif", "normal", "600", "none"],
    "fancy": ["Times New Roman, serif", "italic", "700", "none"],
    "creative": ["Verdana, sans-serif", "normal", "800", "none"],
    "artistic-brush": ["Courier New, monospace", "italic", "900", "none"],
    "paint-stroke": ["Impact, sans-serif", "normal", "400", "none"],
    "ink-style": ["Comic Sans MS, cursive", "normal", "500", "none"],
    "marker": ["Palatino Linotype, serif", "normal", "600", "none"],
    "chalk": ["Segoe UI, sans-serif", "normal", "700", "none"],
    "pencil": ["Arial, sans-serif", "normal", "800", "none"],
    "crayon": ["Georgia, serif", "normal", "900", "none"],
    "sketch": ["Trebuchet MS, sans-serif", "normal", "400", "none"],
    "watercolor": ["Times New Roman, serif", "normal", "500", "none"],
    "graffiti": ["Verdana, sans-serif", "italic", "600", "none"],
    "spray-paint": ["Courier New, monospace", "normal", "700", "none"],
    "doodle": ["Impact, sans-serif", "normal", "800", "none"],
    "comic": ["Comic Sans MS, cursive", "normal", "900", "none"],
    "cartoon": ["Palatino Linotype, serif", "normal", "400", "none"],
    "sticker": ["Segoe UI, sans-serif", "normal", "500", "none"],
    "luxury": ["Arial, sans-serif", "normal", "600", "none"],
    "royal": ["Georgia, serif", "normal", "700", "none"],
    "elegant": ["Trebuchet MS, sans-serif", "normal", "800", "none"],
    "premium": ["Times New Roman, serif", "normal", "900", "none"],
    "classic": ["Verdana, sans-serif", "normal", "400", "none"],
    "signature": ["Courier New, monospace", "italic", "500", "none"],
    "calligraphy": ["Impact, sans-serif", "italic", "600", "none"],
    "wedding": ["Comic Sans MS, cursive", "italic", "700", "none"],
    "invitation": ["Palatino Linotype, serif", "italic", "800", "none"],
    "vintage": ["Segoe UI, sans-serif", "normal", "900", "none"],
    "antique": ["Arial, sans-serif", "normal", "400", "none"],
    "palace": ["Georgia, serif", "normal", "500", "none"],
    "golden": ["Trebuchet MS, sans-serif", "normal", "600", "none"],
    "diamond": ["Times New Roman, serif", "normal", "700", "none"],
    "pearl": ["Verdana, sans-serif", "normal", "800", "none"],
    "velvet": ["Courier New, monospace", "normal", "900", "none"],
    "magazine": ["Impact, sans-serif", "normal", "400", "none"],
    "fashion": ["Comic Sans MS, cursive", "normal", "500", "none"],
    "glamour": ["Palatino Linotype, serif", "normal", "600", "none"],
    "elite": ["Segoe UI, sans-serif", "normal", "700", "none"],
    "modern": ["Arial, sans-serif", "normal", "800", "none"],
    "minimal": ["Georgia, serif", "normal", "900", "none"],
    "clean": ["Trebuchet MS, sans-serif", "normal", "400", "none"],
    "bold": ["Times New Roman, serif", "normal", "500", "none"],
    "extra-bold": ["Verdana, sans-serif", "normal", "600", "none"],
    "thin": ["Courier New, monospace", "normal", "700", "none"],
    "ultra-thin": ["Impact, sans-serif", "normal", "800", "none"],
    "rounded": ["Comic Sans MS, cursive", "normal", "900", "none"],
    "smooth": ["Palatino Linotype, serif", "normal", "400", "none"],
    "geometric": ["Segoe UI, sans-serif", "normal", "500", "none"],
    "futuristic": ["Arial, sans-serif", "normal", "600", "none"],
    "cyber": ["Georgia, serif", "normal", "700", "0 0 7px rgba(34,211,238,.65)"],
    "digital": ["Trebuchet MS, sans-serif", "normal", "800", "none"],
    "tech": ["Times New Roman, serif", "normal", "900", "none"],
    "matrix": ["Verdana, sans-serif", "normal", "400", "0 0 7px rgba(34,211,238,.65)"],
    "holographic": ["Courier New, monospace", "normal", "500", "0 0 7px rgba(34,211,238,.65)"],
    "sci-fi": ["Impact, sans-serif", "normal", "600", "none"],
    "space": ["Comic Sans MS, cursive", "normal", "700", "none"],
    "cosmic": ["Palatino Linotype, serif", "normal", "800", "none"],
    "quantum": ["Segoe UI, sans-serif", "normal", "900", "0 0 7px rgba(34,211,238,.65)"],
    "neon": ["Arial, sans-serif", "normal", "400", "0 0 7px rgba(34,211,238,.65)"],
    "glow": ["Georgia, serif", "normal", "500", "0 0 7px rgba(34,211,238,.65)"],
    "shadow": ["Trebuchet MS, sans-serif", "normal", "600", "3px 3px 4px rgba(0,0,0,.35)"],
    "long-shadow": ["Times New Roman, serif", "normal", "700", "3px 3px 4px rgba(0,0,0,.35)"],
    "3d": ["Verdana, sans-serif", "normal", "800", "3px 3px 4px rgba(0,0,0,.35)"],
    "extruded-3d": ["Courier New, monospace", "normal", "900", "3px 3px 4px rgba(0,0,0,.35)"],
    "outline": ["Impact, sans-serif", "normal", "400", "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000"],
    "double-outline": ["Comic Sans MS, cursive", "normal", "500", "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000"],
    "emboss": ["Palatino Linotype, serif", "normal", "600", "none"],
    "engraved": ["Segoe UI, sans-serif", "normal", "700", "none"],
    "metallic": ["Arial, sans-serif", "normal", "800", "none"],
    "chrome": ["Georgia, serif", "normal", "900", "none"],
    "glass": ["Trebuchet MS, sans-serif", "normal", "400", "none"],
    "ice": ["Times New Roman, serif", "normal", "500", "none"],
    "fire": ["Verdana, sans-serif", "normal", "600", "0 0 8px rgba(249,115,22,.7)"],
    "lightning": ["Courier New, monospace", "normal", "700", "0 0 8px rgba(249,115,22,.7)"],
    "smoke": ["Impact, sans-serif", "normal", "800", "none"],
    "rainbow": ["Comic Sans MS, cursive", "normal", "900", "0 0 6px rgba(236,72,153,.35)"],
    "gradient": ["Palatino Linotype, serif", "normal", "400", "0 0 6px rgba(236,72,153,.35)"],
    "glitch": ["Segoe UI, sans-serif", "normal", "500", "none"],
    "gothic": ["Arial, sans-serif", "normal", "600", "none"],
    "dark": ["Georgia, serif", "normal", "700", "none"],
    "horror": ["Trebuchet MS, sans-serif", "normal", "800", "none"],
    "mystery": ["Times New Roman, serif", "normal", "900", "none"],
    "blackletter": ["Verdana, sans-serif", "normal", "400", "none"],
    "medieval": ["Courier New, monospace", "normal", "500", "none"],
    "ancient": ["Impact, sans-serif", "normal", "600", "none"],
    "tribal": ["Comic Sans MS, cursive", "normal", "700", "none"],
    "tattoo": ["Palatino Linotype, serif", "normal", "800", "none"],
    "rock": ["Segoe UI, sans-serif", "normal", "900", "none"],
    "metal": ["Arial, sans-serif", "normal", "400", "none"],
    "punk": ["Georgia, serif", "normal", "500", "none"],
    "street": ["Trebuchet MS, sans-serif", "normal", "600", "none"],
    "graffiti": ["Times New Roman, serif", "italic", "700", "none"],
    "cyberpunk": ["Verdana, sans-serif", "normal", "800", "0 0 7px rgba(34,211,238,.65)"],
    "vaporwave": ["Courier New, monospace", "italic", "900", "none"],
    "retro": ["Impact, sans-serif", "normal", "400", "none"],
    "synthwave": ["Comic Sans MS, cursive", "italic", "500", "none"],
    "arcade": ["Palatino Linotype, serif", "normal", "600", "none"],
    "gaming": ["Segoe UI, sans-serif", "normal", "700", "0 0 7px rgba(34,211,238,.65)"],
    "cute": ["Arial, sans-serif", "normal", "800", "none"],
    "baby": ["Georgia, serif", "normal", "900", "none"],
    "bubble": ["Trebuchet MS, sans-serif", "normal", "400", "none"],
    "kawaii": ["Times New Roman, serif", "normal", "500", "none"],
    "love": ["Verdana, sans-serif", "italic", "600", "none"],
    "romantic": ["Courier New, monospace", "italic", "700", "none"],
    "heart": ["Impact, sans-serif", "italic", "800", "none"],
    "flower": ["Comic Sans MS, cursive", "normal", "900", "none"],
    "butterfly": ["Palatino Linotype, serif", "normal", "400", "none"],
    "star": ["Segoe UI, sans-serif", "normal", "500", "none"],
    "cloud": ["Arial, sans-serif", "normal", "600", "none"],
    "dreamy": ["Georgia, serif", "normal", "700", "none"],
    "pastel": ["Trebuchet MS, sans-serif", "normal", "800", "none"],
    "soft": ["Times New Roman, serif", "normal", "900", "none"],
    "emoji": ["Verdana, sans-serif", "normal", "400", "none"],
    "instagram": ["Courier New, monospace", "normal", "500", "none"],
    "whatsapp": ["Impact, sans-serif", "normal", "600", "none"],
    "status": ["Comic Sans MS, cursive", "normal", "700", "none"],
    "bio": ["Palatino Linotype, serif", "normal", "800", "none"],
    "reels": ["Segoe UI, sans-serif", "normal", "900", "none"]
};

function updateCharCount() {
    charCount.textContent = `${inputText.value.length} characters`;
}

function applyEnglishStyle(styleName) {
    const preset = englishStylePresets[styleName] || englishStylePresets["modern"];
    if (!preset) return;

    outputText.style.fontFamily = preset[0];
    outputText.style.fontStyle = preset[1];
    outputText.style.fontWeight = preset[2];
    outputText.style.textShadow = preset[3];

    const visual = styleName === "gradient" || styleName === "rainbow";
    outputText.classList.toggle("gradient-text-style", visual);

    if (fontStyle.value !== styleName) fontStyle.value = styleName;
    localStorage.setItem("translatorEnglishStyle", styleName);
}

function setStatus(message) {
    status.textContent = message;
}

inputText.addEventListener("input", updateCharCount);

fontStyle.addEventListener("change", () => {
    applyEnglishStyle(fontStyle.value);
});

translateBtn.addEventListener("click", async () => {
    const text = inputText.value.trim();

    if (!text) {
        setStatus("Enter text ❗");
        alert("Please enter some text.");
        inputText.focus();
        return;
    }

    if (text.length > MAX_TRANSLATION_CHARS) {
        setStatus("Text too long ❌");
        alert(`Text is too long for the translation API. Please keep it under ${MAX_TRANSLATION_CHARS} characters.`);
        return;
    }

    const source = fromLang.value;
    const target = toLang.value;

    if (source === target) {
        outputText.value = text;
        setStatus("Translated ✅");
        applyEnglishStyle(fontStyle.value);
        saveHistory(text, text, source, target);
        return;
    }

    setStatus("Translating...");
    translateBtn.disabled = true;

    try {
        const url =
            `https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}` +
            `&langpair=${encodeURIComponent(source + "|" + target)}`;

        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`HTTP ${response.status}`);
        }

        const data = await response.json();
        const translated = data?.responseData?.translatedText?.trim();

        if (!translated) {
            throw new Error("No translation returned.");
        }

        outputText.value = translated;
        applyEnglishStyle(fontStyle.value);
        setStatus("Translated ✅");
        saveHistory(text, translated, source, target);
    } catch (error) {
        console.error("Translation error:", error);
        outputText.value = "";
        setStatus("Error ❌");
        alert("Translation failed. Check your internet connection and try again.");
    } finally {
        translateBtn.disabled = false;
    }
});

swapBtn.addEventListener("click", () => {
    const oldFrom = fromLang.value;
    fromLang.value = toLang.value;
    toLang.value = oldFrom;

    const oldText = inputText.value;
    inputText.value = outputText.value;
    outputText.value = oldText;

    updateCharCount();
    applyEnglishStyle(fontStyle.value);
    setStatus("Languages swapped 🔄");
});

clearBtn.addEventListener("click", () => {
    inputText.value = "";
    outputText.value = "";
    updateCharCount();
    setStatus("Ready");
    inputText.focus();
});

async function copyOutput() {
    const text = outputText.value.trim();

    if (!text) {
        alert("There is no translated text to copy.");
        return;
    }

    try {
        if (navigator.clipboard && window.isSecureContext) {
            await navigator.clipboard.writeText(text);
        } else {
            outputText.focus();
            outputText.select();
            document.execCommand("copy");
            window.getSelection()?.removeAllRanges();
        }

        copyBtn.textContent = "Copied ✅";
        setTimeout(() => {
            copyBtn.textContent = "📋 Copy";
        }, 1500);
    } catch (error) {
        console.error("Copy error:", error);
        alert("Copy failed. Please select the text and copy it manually.");
    }
}

copyBtn.addEventListener("click", copyOutput);

speakBtn.addEventListener("click", () => {
    const text = outputText.value.trim();

    if (!text) {
        alert("There is no text to listen to.");
        return;
    }

    if (!("speechSynthesis" in window)) {
        alert("Text-to-speech is not supported in this browser.");
        return;
    }

    const speech = new SpeechSynthesisUtterance(text);
    speech.lang = getSpeechLanguage(toLang.value);
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(speech);
});

micBtn.addEventListener("click", () => {
    const SpeechRecognition =
        window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
        alert("Speech recognition is not supported in this browser. Try Google Chrome.");
        return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = getSpeechLanguage(fromLang.value);
    recognition.interimResults = false;
    recognition.continuous = false;

    micBtn.disabled = true;
    micBtn.textContent = "🎙 Listening...";

    recognition.onresult = (event) => {
        const transcript = event.results?.[0]?.[0]?.transcript || "";
        inputText.value = transcript;
        updateCharCount();
        setStatus("Voice text added ✅");
    };

    recognition.onerror = (event) => {
        console.error("Speech recognition error:", event.error);
        alert(`Speech recognition failed: ${event.error || "unknown error"}`);
    };

    recognition.onend = () => {
        micBtn.disabled = false;
        micBtn.textContent = "🎤 Speak";
    };

    try {
        recognition.start();
    } catch (error) {
        micBtn.disabled = false;
        micBtn.textContent = "🎤 Speak";
        console.error(error);
    }
});

function getSpeechLanguage(lang) {
    const languages = {
        en: "en-US",
        ta: "ta-IN",
        hi: "hi-IN",
        te: "te-IN",
        ml: "ml-IN",
        kn: "kn-IN",
        fr: "fr-FR",
        de: "de-DE",
        es: "es-ES"
    };
    return languages[lang] || "en-US";
}

themeBtn.addEventListener("click", () => {
    const isDark = document.body.classList.toggle("dark");
    themeBtn.textContent = isDark ? "☀️" : "🌙";
    localStorage.setItem("translatorTheme", isDark ? "dark" : "light");
});

function saveHistory(original, translated, source, target) {
    let history = JSON.parse(localStorage.getItem("translatorHistory") || "[]");

    history.unshift({
        original,
        translated,
        source,
        target,
        date: new Date().toLocaleString()
    });

    history = history.slice(0, 10);
    localStorage.setItem("translatorHistory", JSON.stringify(history));
    loadHistory();
}

function loadHistory() {
    const history = JSON.parse(localStorage.getItem("translatorHistory") || "[]");

    if (!history.length) {
        historyList.innerHTML = `<p class="empty">No translation history yet.</p>`;
        return;
    }

    historyList.innerHTML = history.map(item => `
        <div class="history-item">
            <strong>${escapeHTML(item.original)}</strong>
            <p>${escapeHTML(item.translated)}</p>
            <small>${String(item.source).toUpperCase()} → ${String(item.target).toUpperCase()} · ${escapeHTML(item.date)}</small>
        </div>
    `).join("");
}

function escapeHTML(text) {
    const div = document.createElement("div");
    div.textContent = String(text ?? "");
    return div.innerHTML;
}

clearHistory.addEventListener("click", () => {
    const history = localStorage.getItem("translatorHistory");

    if (!history) {
        setStatus("History is already empty");
        return;
    }

    localStorage.removeItem("translatorHistory");
    loadHistory();
    setStatus("History cleared 🗑");
});

// Restore saved settings.
const savedEnglishStyle =
    localStorage.getItem("translatorEnglishStyle") || "modern";
applyEnglishStyle(savedEnglishStyle);

if (localStorage.getItem("translatorTheme") === "dark") {
    document.body.classList.add("dark");
    themeBtn.textContent = "☀️";
}

updateCharCount();
loadHistory();
