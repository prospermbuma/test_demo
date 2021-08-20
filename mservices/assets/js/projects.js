/* ==================================================
# Display Projects
===================================================*/

// Get required elements (links (buttons) and rows)
const all = document.querySelector('#all'),
    all_row = document.querySelector('#all-row'),
    commercial = document.querySelector('#commercial'),
    commercial_row = document.querySelector('#commercial-row'),
    residential = document.querySelector('#residential'),
    residential_row = document.querySelector('#residential-row'),
    industrial = document.querySelector('#industrial'),
    industrial_row = document.querySelector('#industrial-row'),
    projects_links = document.querySelector('.projects-links');

// Projects Sticky Links
window.onscroll = () => {
    if (window.pageYOffset > 550) {
        projects_links.classList.add('projects-links-sticky');
    }
    else {
        projects_links.classList.remove('projects-links-sticky');
    }
}

// On clicking "All" button (link)
all.addEventListener('click', () => {
    all_row.style.display = 'block';
    commercial_row.style.display = 'none';
    residential_row.style.display = 'none';
    industrial_row.style.display = 'none';
    all.classList.add('active');
    all_row.classList.add('zoom-in');
    commercial.classList.remove('active');
    residential.classList.remove('active');
    industrial.classList.remove('active');
})

// On clicking "Commercial" button (link)
commercial.addEventListener('click', () => {
    commercial_row.style.display = 'block';
    commercial.classList.add('active');
    commercial_row.classList.add('zoom-in');
    all.classList.remove('active');
    residential.classList.remove('active');
    industrial.classList.remove('active');
    all_row.style.display = 'none';
    residential_row.style.display = 'none';
    industrial_row.style.display = 'none';
})

// On clicking "Residential" button (link)
residential.addEventListener('click', () => {
    residential_row.style.display = 'block';
    residential_row.classList.add('zoom-in');
    all_row.style.display = 'none';
    commercial_row.style.display = 'none';
    industrial_row.style.display = 'none';
    residential.classList.add('active');
    commercial.classList.remove('active');
    all.classList.remove('active');
    industrial.classList.remove('active');
})

// On clicking "Industrial" button (link)
industrial.addEventListener('click', () => {
    industrial_row.style.display = 'block';
    industrial_row.classList.add('zoom-in');
    all_row.style.display = 'none';
    commercial_row.style.display = 'none';
    residential_row.style.display = 'none';
    industrial.classList.add('active');
    residential.classList.remove('active');
    commercial.classList.remove('active');
    all.classList.remove('active');
})
