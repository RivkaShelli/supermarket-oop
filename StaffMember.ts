class StaffMember extends IPerson { 
    role: string;
    constructor(role: string, firstName?: string, lastName?: string) {
        super(firstName, lastName);
        this.role = role;

    }
}
