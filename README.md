# Project management dashboard

This web application is a Project Management Dashboard designed to track tasks, assignments, status, and deadlines managed by a team of four members. Each team member is responsible for a specific section: John manages Tasks, Elizabeth handles Assignments, Michael tracks Status, and Emily oversees Deadlines. The dashboard allows adding upcoming tasks and displays previously completed tasks in the admin panel. For new members joining the company, there is a separate task assignment page, which can be viewed from the admin panel.


<br><br>

## HOME PAGE

This is the main landing page displayed when entering the site.  
The Recent Activity, Upcoming Deadlines, and Announcements sections showcase the latest updates, providing company-level operational information and examples of entered data.

![First Appearance](screenshots/First-appearance.png)

<br><br>

## HOME PAGE — JavaScript Functionality

When user enter the Task, Assigned To, Status, and Deadline fields in the Task List section the Vanilla JavaScript function running in the background updates the data in the Project Progress and Quick Stats sections. 
This allows the company’s current status to be viewed instantly.

![Task](screenshots/Task.png)

![Assigned To](screenshots/Assigned-To.png)

![Status](screenshots/Status.png)

![Deadline](screenshots/Deadline.png)


<br><br>


## TASKS PAGE

This page displays upcoming tasks assigned to four different team members.  
Through the JavaScript function running in the background, the user first enters the team member's name, followed by the task's date.  
The system then displays the team member's name, the assigned task, and the corresponding start date beneath it.

![John](screenshots/John.png)

![Elizabeth](screenshots/Elizabeth.png)

![Michael](screenshots/Michael.png)

![Emily](screenshots/Emily.png)


<br><br>


## TEAM PAGE

This page displays the information of new team members powered by a JavaScript function running in the background.  
For the four team members, their team number, department, and joining date are shown.  
After clicking the "Add Member" button, the new member's name, role, and email address appear in the left panel.

![Daniel](screenshots/Added-Daniel.png)

![Sophia](screenshots/Added-Sophia.png)

![Liam](screenshots/Added-Liam.png)

![Olivia](screenshots/Added-Olivia.png)


<br><br>



## REPORTS PAGE

This page is designed to display the company's data in percentages.  
By entering any number in the JavaScript section the values and ratios are automatically calculated and updated.  
It shows the variability of the company in the Project Overview and Performance Charts sections.


![Reports-page](screenshots/Reports-page.png)

![Reports-high](screenshots/Reports-high.png)

![2-Reports-high](screenshots/2-Reports-high.png)


<br><br>


## REPORTS PAGE — Activity Log

The Activity Log section reflects the work currently being done by the four team members as well as the tasks they have completed previously.

![Activity-log](screenshots/Activity-log.png)

![Activity-log-past](screenshots/Activity-log-past.png)


<br><br>



## SETTINGS PAGE — Progress Bar Style

In the Progress Bar Style section, the bars linked to the settings page create a visually appealing and sweet animation through the combined work of JavaScript and CSS animations.

![Progress-bar-linear](screenshots/Progress-bar-linear.png)

![Progress-bar-gradient](screenshots/Progress-bar-gradient.png)

![Progress-bar-animated](screenshots/Progress-bar-animated.png)


<br><br>



## SETTINGS PAGE — Notification Preferences

On this page the notification preferences can be selected as desired None, Important Only, or All Notifications.  
This section is powered by JavaScript in the background and is prepared for future backend development.


![Notification-Preferences-None](screenshots/Notification-Preferences-None.png)

![Notification-Preferences-Important-Only](screenshots/Notification-Preferences-Important-Only.png)

![Notification-Preferences-All-Notifications](screenshots/Notification-Preferences-All-Notifications.png)

<br>

This update prepares the branch for a community share PR.
