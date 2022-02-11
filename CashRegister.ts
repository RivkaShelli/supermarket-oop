class CashRegister { 
    num: number;
    worker: StaffMember;
    products: Product[];

    constructor(num: number, worker?: StaffMember, products?: Product[]) {
        this.num = num;
        this.worker = worker;
        this.products = products;
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
        if (c.finish == true) {
            this.products.forEach(p => {
                sum += p.price;

            })
        }
        return sum;
    }
}
