import { LightningElement, track } from 'lwc';

export default class MembershipManagement extends LightningElement {
    @track memberships = [];
    @track isAdding = false;
    @track newMembership = {
        name: '',
        type: '',
        startDate: ''
    };
    sortedBy = 'name';
    sortedDirection = 'asc';

    columns = [
        { label: 'Name', fieldName: 'name', sortable: true },
        { label: 'Membership Type', fieldName: 'type', sortable: true },
        { label: 'Start Date', fieldName: 'startDate', type: 'date', sortable: true },
    ];

    handleAddMembership() {
        this.isAdding = true;
        this.newMembership = { name: '', type: '', startDate: '' }; // Reset the form
    }

    handleInputChange(event) {
        const field = event.target.dataset.id;
        this.newMembership[field] = event.target.value;
    }

    handleSaveMembership() {
        if (this.newMembership.name && this.newMembership.type && this.newMembership.startDate) {
            const newMembership = { ...this.newMembership, id: this.memberships.length + 1 };
            this.memberships = [...this.memberships, newMembership]; // Add the new membership
            this.isAdding = false; // Hide the form
        } else {
            alert('Please fill in all fields.');
        }
    }

    handleCancel() {
        this.isAdding = false; // Hide the form
    }

    handleSort(event) {
        const { fieldName: sortedBy, sortDirection: sortedDirection } = event.detail;
        this.sortedBy = sortedBy;
        this.sortedDirection = sortedDirection;

        const sortedData = [...this.memberships];
        sortedData.sort((a, b) => {
            const aValue = a[sortedBy] ? a[sortedBy] : '';
            const bValue = b[sortedBy] ? b[sortedBy] : '';

            return sortedDirection === 'asc' 
                ? aValue > bValue 
                    ? 1 
                    : aValue < bValue 
                    ? -1 
                    : 0 
                : bValue > aValue 
                    ? 1 
                    : bValue < aValue 
                    ? -1 
                    : 0;
        });
        
        this.memberships = sortedData;
    }
}
