class CashRegister { 
    cashId: number;
    worker: StaffMember;
    products: Product[];
    private static cashIdCounter: number = 1;

    constructor(worker?: StaffMember, products?: Product[], cashId?: number) {
        this.worker = worker;
        this.products = products;
        this.cashId = cashId;
        CashRegister.cashIdCounter++;
    }

    startNewPurchase() {
        if (!this.worker) {
            console.log('ERROR!!! No worker assigned');
        }
        else {
            this.products = [];
        }
    }
    changeWorker(sm: StaffMember) {
        this.worker = sm;
    }
    addProduct(p: Product) {
        this.products.push(p);
    }
    endPurchase(c: Consumer) {
        var sum = 0;
        if (c.isClubMember == true) { }
            this.products.forEach(p => {
                sum += p.price;

            })
        return sum;
    }
}
