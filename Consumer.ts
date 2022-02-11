class Consumer extends IPerson { 
    isClubMember: boolean;
    constructor(isClubMember: boolean, firstName?: string, lastName?: string) {
        super(firstName, lastName);
        this.isClubMember = isClubMember;
    }
}
