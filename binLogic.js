/**
 * Core logic for bin collection calculations
 */

/**
 * Calculate the next Tuesday (bin collection day) from a given date
 * @param {Date} today - The current date
 * @returns {Date} The next Tuesday
 */
export function getNextBinDay(today = new Date()) {
    const todayDay = today.getDay();
    let daysUntilTuesday;
    
    if (todayDay === 0) { // Sunday
        daysUntilTuesday = 2;
    } else if (todayDay === 1) { // Monday
        daysUntilTuesday = 1;
    } else if (todayDay === 2) { // Tuesday
        daysUntilTuesday = 7; // Next Tuesday
    } else { // Wednesday (3) through Saturday (6)
        daysUntilTuesday = (2 - todayDay + 7) % 7;
    }
    
    const nextTuesday = new Date(today);
    nextTuesday.setDate(today.getDate() + daysUntilTuesday);
    nextTuesday.setHours(0, 0, 0, 0);
    return nextTuesday;
}

/**
 * Get Monday of the week that contains a given date
 * @param {Date} date - The date to find the Monday for
 * @returns {Date} The Monday of that week
 */
export function getWeekStart(date) {
    const day = date.getDay();
    // If Sunday, go back 6 days; otherwise, go to Monday
    const diff = day === 0 ? -6 : 1 - day;
    const monday = new Date(date);
    monday.setDate(date.getDate() + diff);
    monday.setHours(0, 0, 0, 0);
    return monday;
}

/**
 * Calculate which bins are collected for a given week
 * @param {Date} weekStart - Monday of the week
 * @param {Date} referenceDate - Reference date (Monday Jan 5, 2026 was a RED bin week)
 * @returns {Object} Object with green, red, yellow boolean properties
 */
export function getBinsForWeek(weekStart, referenceDate = new Date(2026, 0, 6)) {
    // Calculate week number difference from reference date
    const msPerWeek = 7 * 24 * 60 * 60 * 1000;
    const weeksDiff = Math.floor((weekStart.getTime() - referenceDate.getTime()) / msPerWeek);
    
    // Red bin on even weeks (0, 2, 4...), Yellow on odd weeks (1, 3, 5...)
    // Since reference week is RED (week 0), even weeks = red, odd = yellow
    const isRedWeek = weeksDiff % 2 === 0;
    
    return {
        green: true, // Always collected
        red: isRedWeek,
        yellow: !isRedWeek
    };
}

/**
 * Format a date for display
 * @param {Date} date - The date to format
 * @returns {string} Formatted date string
 */
export function formatDate(date) {
    const options = { month: 'short', day: 'numeric', year: 'numeric' };
    return date.toLocaleDateString('en-US', options);
}
