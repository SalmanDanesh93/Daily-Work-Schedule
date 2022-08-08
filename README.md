# Daily-Work-Schedule
Description:

This site is utilizes HTML, CSS, & JavaScript to create a daily schedule planner.

When the user first loads the site, they are presented with a planner. The current day and time is shown at the top of the daily planner.

When the user scrolls down, they are presented with timeblocks for that day. 

Each timeblock reflects whether the timeblock is in the past, present, or the future.

When the user clicks in the time block, they can enter an event.

When the user wants to save the event, they can click the save button.

When the save button is clicked, the event written is stored in local storage.

When the user refreshes the page after saving, the events persist on the page.

Screenshots:

When the user opens the site, they are presented with the this form. 
![Page intro](https://user-images.githubusercontent.com/107973681/183508189-b63224ca-f83c-41e3-82bb-b2b073e4740c.png)

With the use of HTML, I accessed the jquery Bootstrap & saveBtn styling and icon.
![html header  bootstrap   save button](https://user-images.githubusercontent.com/107973681/183508224-356ae22c-083c-43f5-8317-efaf2b1bb9bb.png)

The image below shows the function built for hourTracker, sets to identify if a timeblock is in the past, present, or future.
![js  Creates loop to track what state the timeBlock is in  sets to class](https://user-images.githubusercontent.com/107973681/183509277-19c2f8ca-8766-4e90-89dd-544726db6e57.png)

The image below shows the initiation of the function in which the saveBtn activates and sets the time, & text to local storage.
![js  creating functionality and variables for saveBtn](https://user-images.githubusercontent.com/107973681/183508492-4aeb4de9-a903-49b0-8db1-887e72c2035c.png)

The HTML below shows the text and column adjustments made to create each timeblock row.
![html body    rows](https://user-images.githubusercontent.com/107973681/183512166-434e8530-6f5f-430c-a9fa-af5a6fa78255.png)

The image below shows the Javascript for accessing the localStorage.
![js  timeBlock Elements](https://user-images.githubusercontent.com/107973681/183511045-0d56fa8f-940b-471b-8a32-fa6e0ea4c68e.png)

The CSS below shows the styling edits to be made depending on which timeslot the time block falls into to.
![CSS timeBlock](https://user-images.githubusercontent.com/107973681/183513131-9a85b3a6-9473-4320-a1d4-94a2a225ab17.png)

The CSS below shows the styling and effect of the saveBtn. 
![CSS saveBtn](https://user-images.githubusercontent.com/107973681/183513116-1389292c-752b-466b-9358-e0840c8e7999.png)

The image below shows the Text added into the events and the .hover effect on the saveBtn as shown in the CSS above.
![Page end w  enlarged save](https://user-images.githubusercontent.com/107973681/183514374-2aa3b60a-9af3-41b1-9c31-e131b0b94a4e.png)


Page: https://salmandanesh93.github.io/Daily-Work-Schedule/

