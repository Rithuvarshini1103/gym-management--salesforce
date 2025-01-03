import { LightningElement, track } from 'lwc';

export default class ClassManagement extends LightningElement {
    @track classes = [
        { id: 1, name: 'Yoga', instructor: 'Jane Smith', schedule: 'Mon-Wed-Fri, 7:00 AM' },
        { id: 2, name: 'Cardio', instructor: 'John Doe', schedule: 'Tue-Thu-Sat, 6:00 PM' },
        { id: 3, name: 'Pilates', instructor: 'Emily Davis', schedule: 'Mon-Fri, 9:00 AM' }
    ];

    className = '';
    classInstructor = '';
    classSchedule = '';

    // Handle class name change
    handleClassNameChange(event) {
        this.className = event.target.value;
    }

    // Handle instructor name change
    handleInstructorChange(event) {
        this.classInstructor = event.target.value;
    }

    // Handle schedule change
    handleScheduleChange(event) {
        this.classSchedule = event.target.value;
    }

    // Add a new class to the list
    handleAddClass() {
        if (this.className && this.classInstructor && this.classSchedule) {
            const newClass = {
                id: this.classes.length + 1,
                name: this.className,
                instructor: this.classInstructor,
                schedule: this.classSchedule
            };
            this.classes = [...this.classes, newClass]; // Add the new class to the list
            this.className = '';
            this.classInstructor = '';
            this.classSchedule = '';
        }
    }
}
