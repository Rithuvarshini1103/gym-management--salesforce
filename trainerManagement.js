import { LightningElement, track } from 'lwc';

export default class TrainerManagement extends LightningElement {
    @track trainers = [
        { id: 1, name: 'John Doe', specialty: 'Cardio' },
        { id: 2, name: 'Jane Smith', specialty: 'Yoga' },
        { id: 3, name: 'Mike Johnson', specialty: 'Strength Training' }
    ];

    trainerName = '';
    trainerSpecialty = '';

    // Handle input changes for name
    handleNameChange(event) {
        this.trainerName = event.target.value;
    }

    // Handle input changes for specialty
    handleSpecialtyChange(event) {
        this.trainerSpecialty = event.target.value;
    }

    // Add a new trainer to the list
    handleAddTrainer() {
        if (this.trainerName && this.trainerSpecialty) {
            const newTrainer = {
                id: this.trainers.length + 1,
                name: this.trainerName,
                specialty: this.trainerSpecialty
            };
            this.trainers = [...this.trainers, newTrainer]; // Adds the new trainer to the list
            this.trainerName = '';
            this.trainerSpecialty = '';
        }
    }
}
