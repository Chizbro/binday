---
task: Build a bin collection reminder web app
test_command: "Open index.html in a browser or serve with a local server"
---

# Task: Bin Collection Reminder Web App

Build a simple, mobile-first web application that shows which bins need to be put out for collection this week.

## Requirements

1. Web app built with Vue.js
2. Three bin types: Green (weekly), Red and Yellow (alternating weeks)
3. Reference date: Monday 5th January 2026 was a red bin week (use this to calculate alternating pattern)
4. Mobile-first responsive design
5. Cute, functional UI with light pastel colors
6. Emojis for visual appeal
7. Default view shows current week's bins
8. Calendar view option to see successive weeks ahead
9. Correctly calculates which bins are collected for any given week
10. Shows current week's collection schedule clearly
11. Bins are collected on Tuesday mornings
12. Make it cuter
13. Remove all 'breathing' animations from the UI
14. Enhance cuteness through more gratuitous use of pastel colors and emoji throughout the interface

## Success Criteria

1. [x] App built with Vue.js (can use Vue 3 with CDN or build setup)
2. [x] App displays which bins to put out for the current week (default view)
3. [x] Green bin is always shown (collected every week)
4. [x] Red and Yellow bins alternate correctly based on reference date (Monday 5th Jan 2026 = red week)
5. [x] Week calculation uses Monday as start of week
6. [x] Week calculation is accurate (handles year boundaries correctly)
7. [x] Calendar view shows successive weeks with their bin collection schedule
8. [x] User can navigate between current week view and calendar view
9. [x] Mobile-first responsive design works on small screens (320px+)
10. [x] Light pastel color scheme applied (green, red, yellow pastels)
11. [x] Emojis included in the UI (at least 1-2 smiley emojis)
12. [x] Bin cards/items are visually distinct and easy to read
13. [x] App can determine current week from system date
14. [x] Clear visual indication of which bins are active for each week
15. [x] App works offline (minimal external dependencies)
16. [x] Code is clean, well-organized, and maintainable
17. [x] Make it cuter
18. [x] Remove all 'breathing' animations from the UI
19. [x] Enhance cuteness through more gratuitous use of pastel colors and emoji throughout the interface

## Example Output

**Default View (Current Week):**
```
🗑️ This Week's Bins

🟢 Green Bin
   Put out this week!

🔴 Red Bin
   Put out this week!

🟡 Yellow Bin
   Not this week

[View Calendar →]
```

**Calendar View:**
```
🗑️ Bin Collection Calendar

Week of Jan 5, 2026
🟢 Green  🔴 Red

Week of Jan 12, 2026
🟢 Green  🟡 Yellow

Week of Jan 19, 2026
🟢 Green  🔴 Red

[← Back to This Week]
```

Or a similar clear, mobile-friendly layout showing the collection status.

---

## Ralph Instructions

1. Work on the next incomplete criterion (marked [ ])
2. Check off completed criteria (change [ ] to [x])
3. Test in browser after changes
4. Commit your changes frequently
5. When ALL criteria are [x], output: `<ralph>COMPLETE</ralph>`
6. If stuck on the same issue 3+ times, output: `<ralph>GUTTER</ralph>`
