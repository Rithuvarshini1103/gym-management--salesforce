import { LightningElement } from 'lwc';

export default class AttendanceManagement extends LightningElement {
    name = '';
    date = '';
    records = [];

    handleNameChange(event) {
        this.name = event.target.value;
    }

    handleDateChange(event) {
        this.date = event.target.value;
    }

    markAttendance() {
        if (this.name && this.date) {
            this.records = [...this.records, { id: this.records.length + 1, name: this.name, date: this.date }];
            this.name = '';
            this.date = '';
        } else {
            alert('Please fill all fields!');
        }
    }
}
