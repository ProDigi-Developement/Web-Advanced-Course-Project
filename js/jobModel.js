class Company{

    constructor(Company){ // receive an Object with the data
        
        this.id = Company.id;
        this.title = Company.title;
        this.salary = Company.salary
        this.benefits = Company.benefits;
        this.startDate = Company.startDate
        this.postDate = Company.postDate;
        this.description = Company.description;
    }

    get Id (){
        return this.id
    }

    get title() {
        return this.title;
    }

    get salary() {
        return this.salary;
    }
    
    get benefits() {
        return this.benefits;
    }
    
    get startDate() {
        return this.startDate;
    }
    
    get postDate() {
        return this.postDate;
    }
    
    get Description() {
        return this.description;
    }
}