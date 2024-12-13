
export function calculateReadingTime(text, wordsPerMinute = 200) {
    const words = text.trim().split(/\s+/).length;
    const minutes = words / wordsPerMinute;
    return Math.ceil(minutes);
}

export function formatDate(dateToFormat) {
    let date = new Date(dateToFormat);

    // Format the date as "Nov 9, 2024"
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const formattedDate = `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
    return formattedDate
}


