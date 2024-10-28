
export function calculateReadingTime(text, wordsPerMinute = 200) {
    const words = text.trim().split(/\s+/).length;
    const minutes = words / wordsPerMinute;
    return Math.ceil(minutes);
}
