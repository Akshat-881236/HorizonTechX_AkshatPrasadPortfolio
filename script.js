// Mobile Menu Toggle
        const menuToggle = document.getElementById('menuToggle');
        const navLinks = document.getElementById('navLinks');

        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });

        // Close menu when a link is clicked
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!e.target.closest('.nav-container')) {
                navLinks.classList.remove('active');
            }
        });

        // Load projects from db.json
        async function loadProjects() {
            try {
                const response = await fetch('db.json');
                if (!response.ok) {
                    throw new Error('Failed to load projects');
                }
                const data = await response.json();
                displayProjects(data.projects);
            } catch (error) {
                console.error('Error loading projects:', error);
                document.getElementById('projectsGrid').innerHTML = `
                    <div class="error-message">
                        <i class="bi bi-exclamation-triangle"></i> Failed to load projects. Please check if db.json exists.
                    </div>
                `;
            }
        }

        // Display projects
        function displayProjects(projects) {
            const projectsGrid = document.getElementById('projectsGrid');
            
            if (!projects || projects.length === 0) {
                projectsGrid.innerHTML = '<div class="error-message">No projects found.</div>';
                return;
            }

            const validProjects = projects.filter(project => {
                // Validate required fields
                const hasProjectUrl = project.project_url && project.project_url.trim() !== '';
                const hasGitRepo = project.git_repo_url && project.git_repo_url.trim() !== '';
                
                if (!hasProjectUrl || !hasGitRepo) {
                    console.warn(`Project "${project.project_title}" skipped: Missing required URL fields`);
                    return false;
                }
                return true;
            });

            if (validProjects.length === 0) {
                projectsGrid.innerHTML = '<div class="error-message">No valid projects found. Ensure all projects have project_url and git_repo_url.</div>';
                return;
            }

            projectsGrid.innerHTML = validProjects.map(project => {
                const iconClass = project.project_logo_path || 'bi-code-bracket';
                const startDate = formatDate(project.start_at);
                const endDate = project.end_at ? formatDate(project.end_at) : 'Ongoing';
                const dateRange = `${startDate} - ${endDate}`;

                return `
                    <div class="project-card">
                        <div class="project-icon">
                            <img src="${iconClass}" alt="${escapeHtml(project.project_title)} logo" height="40px">
                        </div>
                        <h3 class="project-title">${escapeHtml(project.project_title)}</h3>
                        <p class="project-date">${dateRange}</p>
                        <p class="project-description">${escapeHtml(project.project_description)}</p>
                        <div class="project-links">
                            <a href="${escapeHtml(project.project_url)}" target="_blank" rel="noopener noreferrer" class="project-link">
                                <i class="bi bi-arrow-up-right"></i> Visit
                            </a>
                            <a href="${escapeHtml(project.git_repo_url)}" target="_blank" rel="noopener noreferrer" class="project-link">
                                <i class="bi bi-github"></i> View Repo
                            </a>
                        </div>
                    </div>
                `;
            }).join('');
        }

        // Format date from MM/DD/YYYY
        function formatDate(dateString) {
            if (!dateString) return '';
            try {
                const [month, day, year] = dateString.split('/');
                const date = new Date(year, month - 1, day);
                return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short' });
            } catch {
                return dateString;
            }
        }

        // Escape HTML to prevent XSS
        function escapeHtml(unsafe) {
            if (!unsafe) return '';
            return unsafe
                .replace(/&/g, "&amp;")
                .replace(/</g, "&lt;")
                .replace(/>/g, "&gt;")
                .replace(/"/g, "&quot;")
                .replace(/'/g, "&#039;");
        }

        // Smooth scroll for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // Load projects on page load
        document.addEventListener('DOMContentLoaded', loadProjects);