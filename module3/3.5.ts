{
    //access modifier
    class BankAccount {
        public readonly id: number;
        public name: string;
        private _balance: number;

        constructor(id: number, name: string, _balance: number) {
            this.id = id;
            this.name = name;
            this._balance = _balance;
        }

        public addDeposit(amount: number) {
            this._balance = this._balance + amount;
        }

        public get_balance() {
            return this._balance;
        }
    }

    class StudentAccount extends BankAccount {
        test() {
            
        }
    }

    const goribManusherAccount = new BankAccount(111, "Mr. gorib", 20);
    goribManusherAccount.addDeposit(300)

    const my_balance = goribManusherAccount.get_balance();
    console.log(my_balance);

}