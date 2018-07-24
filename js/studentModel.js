class Company{

    constructor(Company){ // receive an Object with the data
        
        this.id = Company.id;
        this.name = Company.name;
        this.email = Company.email
        this.goal = Company.goal;
        this.term = Company.term
        this.photo = Company.photo;
        this.resume = Company.resume;
        this.githubLink = Company.githubLink;
        this.linkedInLink = Company.linkedInLink;
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
    
    get goal() {
        return this.goal;
    }
    
    get term() {
        return this.term;
    }
    
    get Photo() {
        return this.photo;
    }
    
    get resume() {
        return this.resume;
    }
    
    get githubLink() {
        return this.githubLink;
    }
    
    get linkedInLink() {
        return this.linkedInLink;
    }
}