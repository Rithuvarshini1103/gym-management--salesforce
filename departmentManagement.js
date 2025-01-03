import { LightningElement, track } from 'lwc';

export default class ProjectManagement extends LightningElement {
    @track projects = [
        { id: 1, name: 'Project Alpha', manager: 'Alice Johnson', deadline: '2025-02-01' },
        { id: 2, name: 'Project Beta', manager: 'Bob Smith', deadline: '2025-05-15' },
        { id: 3, name: 'Project Gamma', manager: 'Charlie Brown', deadline: '2025-08-30' }
    ];

    projectName = '';
    projectManager = '';
    projectDeadline = '';

    // Handle project name change
    handleProjectNameChange(event) {
        this.projectName = event.target.value;
    }

    // Handle project manager change
    handleProjectManagerChange(event) {
        this.projectManager = event.target.value;
    }

    // Handle project deadline change
    handleProjectDeadlineChange(event) {
        this.projectDeadline = event.target.value;
    }

    // Add a new project to the list
    handleAddProject() {
        if (this.projectName && this.projectManager && this.projectDeadline) {
            const newProject = {
                id: this.projects.length + 1,
                name: this.projectName,
                manager: this.projectManager,
                deadline: this.projectDeadline
            };
            this.projects = [...this.projects, newProject]; // Add the new project to the list
            this.projectName = '';
            this.projectManager = '';
            this.projectDeadline = '';
        }
    }
}
