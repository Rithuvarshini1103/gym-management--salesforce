import { LightningElement, track } from 'lwc';


export default class GymManagement extends LightningElement {
    @track showAttendanceComponent = false;
    @track showTrainerComponent = false;
    @track showClassesComponent = false;
    @track showDepartmentComponent = false;
    @track showGymComponent = false;
    @track showMembershipComponent = false;

    showAttendance() {
        this.resetComponents();
        this.showAttendanceComponent = true;
    }

    showTrainer() {
        this.resetComponents();
        this.showTrainerComponent = true;
    }

    showClasses() {
        this.resetComponents();
        this.showClassesComponent = true;
    }

    showDepartment() {
        this.resetComponents();
        this.showDepartmentComponent = true;
    }

    showGym() {
        this.resetComponents();
        this.showGymComponent = true;
    }

    showMembership() {
        this.resetComponents();
        this.showMembershipComponent = true;
    }

    resetComponents() {
        this.showAttendanceComponent = false;
        this.showTrainerComponent = false;
        this.showClassesComponent = false;
        this.showDepartmentComponent = false;
        this.showGymComponent = false;
        this.showMembershipComponent = false;
    }
}
