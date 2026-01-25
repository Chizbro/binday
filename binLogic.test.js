import { describe, it, expect } from 'vitest';
import { getNextBinDay, getWeekStart, getBinsForWeek, formatDate } from './binLogic.js';

describe('Bin Collection Logic', () => {
    describe('getNextBinDay', () => {
        it('should return next Tuesday when today is Sunday', () => {
            const sunday = new Date(2026, 0, 4); // Sunday, Jan 4, 2026
            const nextTuesday = getNextBinDay(sunday);
            expect(nextTuesday.getDay()).toBe(2); // Tuesday
            expect(nextTuesday.getDate()).toBe(6); // Jan 6, 2026
        });

        it('should return next Tuesday when today is Monday', () => {
            const monday = new Date(2026, 0, 5); // Monday, Jan 5, 2026
            const nextTuesday = getNextBinDay(monday);
            expect(nextTuesday.getDay()).toBe(2); // Tuesday
            expect(nextTuesday.getDate()).toBe(6); // Jan 6, 2026
        });

        it('should return next Tuesday when today is Tuesday', () => {
            const tuesday = new Date(2026, 0, 6); // Tuesday, Jan 6, 2026
            const nextTuesday = getNextBinDay(tuesday);
            expect(nextTuesday.getDay()).toBe(2); // Tuesday
            expect(nextTuesday.getDate()).toBe(13); // Jan 13, 2026 (next week)
        });

        it('should return next Tuesday when today is Wednesday', () => {
            const wednesday = new Date(2026, 0, 7); // Wednesday, Jan 7, 2026
            const nextTuesday = getNextBinDay(wednesday);
            expect(nextTuesday.getDay()).toBe(2); // Tuesday
            expect(nextTuesday.getDate()).toBe(13); // Jan 13, 2026
        });

        it('should return next Tuesday when today is Saturday', () => {
            const saturday = new Date(2026, 0, 10); // Saturday, Jan 10, 2026
            const nextTuesday = getNextBinDay(saturday);
            expect(nextTuesday.getDay()).toBe(2); // Tuesday
            expect(nextTuesday.getDate()).toBe(13); // Jan 13, 2026
        });
    });

    describe('getWeekStart', () => {
        it('should return Monday when given a Tuesday', () => {
            const tuesday = new Date(2026, 0, 6); // Tuesday, Jan 6, 2026
            const monday = getWeekStart(tuesday);
            expect(monday.getDay()).toBe(1); // Monday
            expect(monday.getDate()).toBe(5); // Jan 5, 2026
        });

        it('should return Monday when given a Sunday', () => {
            const sunday = new Date(2026, 0, 4); // Sunday, Jan 4, 2026
            const monday = getWeekStart(sunday);
            expect(monday.getDay()).toBe(1); // Monday
            expect(monday.getDate()).toBe(29); // Dec 29, 2025 (previous week)
        });

        it('should return the same day when given a Monday', () => {
            const monday = new Date(2026, 0, 5); // Monday, Jan 5, 2026
            const weekStart = getWeekStart(monday);
            expect(weekStart.getDay()).toBe(1); // Monday
            expect(weekStart.getTime()).toBe(monday.getTime());
        });
    });

    describe('getBinsForWeek', () => {
        const referenceDate = new Date(2026, 0, 6); // Monday, Jan 5, 2026 (month is 0-indexed)

        it('should return red bin for reference week (week 0)', () => {
            const weekStart = new Date(2026, 0, 6); // Monday, Jan 5, 2026
            const bins = getBinsForWeek(weekStart, referenceDate);
            expect(bins.green).toBe(true);
            expect(bins.red).toBe(true);
            expect(bins.yellow).toBe(false);
        });

        it('should return yellow bin for week after reference (week 1)', () => {
            const weekStart = new Date(2026, 0, 13); // Monday, Jan 12, 2026
            const bins = getBinsForWeek(weekStart, referenceDate);
            expect(bins.green).toBe(true);
            expect(bins.red).toBe(false);
            expect(bins.yellow).toBe(true);
        });

        it('should return red bin for two weeks after reference (week 2)', () => {
            const weekStart = new Date(2026, 0, 20); // Monday, Jan 19, 2026
            const bins = getBinsForWeek(weekStart, referenceDate);
            expect(bins.green).toBe(true);
            expect(bins.red).toBe(true);
            expect(bins.yellow).toBe(false);
        });

        it('should always return green bin', () => {
            const weekStart = new Date(2026, 0, 6);
            const bins = getBinsForWeek(weekStart, referenceDate);
            expect(bins.green).toBe(true);
        });

        it('should alternate correctly for multiple weeks', () => {
            const reference = new Date(2026, 0, 6);
            const weeks = [
                new Date(2026, 0, 6),   // Week 0 - Red
                new Date(2026, 0, 13),  // Week 1 - Yellow
                new Date(2026, 0, 20),  // Week 2 - Red
                new Date(2026, 0, 27),  // Week 3 - Yellow
            ];

            weeks.forEach((weekStart, index) => {
                const bins = getBinsForWeek(weekStart, reference);
                const expectedRed = index % 2 === 0;
                expect(bins.red).toBe(expectedRed);
                expect(bins.yellow).toBe(!expectedRed);
            });
        });
    });

    describe('formatDate', () => {
        it('should format date correctly', () => {
            const date = new Date(2026, 0, 6); // Jan 6, 2026
            const formatted = formatDate(date);
            expect(formatted).toMatch(/Jan/);
            expect(formatted).toMatch(/6/);
            expect(formatted).toMatch(/2026/);
        });
    });
});
