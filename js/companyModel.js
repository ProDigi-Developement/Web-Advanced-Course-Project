class Company{

    constructor(Company){ // receive an Object with the data
        
        this.id = Company.id;
        this.name = Company.name;
        this.email = Company.email
        this.logo = Company.logo;
        this.size = Company.size
        this.photo = Company.photo;
        this.contact = Company.contact;
        this.website = Company.website;
        this.techStack = Company.techStack;
        this.description = Company.description;
    }

    get Id (){
        return this.id
    }

    get Name() {
        return this.name;
    }

    get Email() {
        return this.email;
    }
    
    get Logo() {
        return this.logo;
    }
    
    get Size() {
        return this.size;
    }
    
    get Photo() {
        return this.photo;
    }
    
    get Contact() {
        return this.contact;
    }
    
    get WebSite() {
        return this.webSite;
    }
    
    get TechStack() {
        return this.techStack;
    }
    
    get Description() {
        return this.description;
    }
}