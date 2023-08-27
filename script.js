// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Show project details
function showProjectDetails(projectNumber) {
    const projectDetails = document.getElementById('project-details');
    const projectContent = document.getElementById('project-content');

    if (projectNumber === 1) {
        projectContent.innerHTML = "<h3>Project 1</h3><p>Details of Project 1.</p>";
    } else if (projectNumber === 2) {
        projectContent.innerHTML = "<h3>Project 2</h3><p>Details of Project 2.</p>";
    }

    projectDetails.style.display = 'block';
}
