import { LightningElement } from 'lwc';

export default class GymInfo extends LightningElement {
    gymName = 'Fitness Center';
    gymLocation = '123 Gym Street, City, Country';
    gymContact = '+123456789';

    // Handle gym name change
    handleGymNameChange(event) {
        this.gymName = event.target.value;
    }

    // Handle gym location change
    handleGymLocationChange(event) {
        this.gymLocation = event.target.value;
    }

    // Handle gym contact change
    handleGymContactChange(event) {
        this.gymContact = event.target.value;
    }

    // Save changes (for demo purposes, this just logs the data)
    handleSaveChanges() {
        console.log('Gym Info Saved!');
        console.log('Gym Name:', this.gymName);
        console.log('Gym Location:', this.gymLocation);
        console.log('Gym Contact:', this.gymContact);
    }
}
