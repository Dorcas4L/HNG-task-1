document.addEventListener("DOMContentLoaded", function () {
    // Slack Name
    const slackNameElement = document.querySelector('[data-testid="slackUserName"]');
    slackNameElement.textContent = "Dorcas Seshie";

    // Current Day of the Week
    const currentDayElement = document.querySelector('[data-testid="currentDayOfTheWeek"]');
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const currentDate = new Date();
    currentDayElement.textContent = daysOfWeek[currentDate.getUTCDay()];

    // Current UTC Time
    const currentUTCTimeElement = document.querySelector('[data-testid="currentUTCTime"]');
    const currentUTCTime = currentDate.toUTCString();
    currentUTCTimeElement.textContent = currentUTCTime;

    // Track
    const trackElement = document.querySelector('[data-testid="myTrack"]');
    trackElement.textContent = "Frontend"; // Replace with your actual track

    // GitHub URL
    const githubURLElement = document.querySelector('[data-testid="githubURL"]');
    githubURLElement.querySelector("a").href = "https://github.com/yourusername/your-repo"; // Replace with your GitHub repository URL
});