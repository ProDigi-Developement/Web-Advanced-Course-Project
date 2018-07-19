'use strict';

class Company {
    /**
   * @constructor
   * @param {Number} id - Object Id
   * @param {String} name - Company's name
   * @param {String} email - Company's email
   */
    constructor(id, name, email) {
        this.id = id;
        this.name = name;
        this.email = email;
    }

    /**
    * Get Company's Id
    * @return {Number} id
    */
    getId() {
        return this.id;
    }
    
    /**
    * Set Company's Id
    * @param {Number} id
    */
    setId(id) {
        this.id = id;
    }

    /**
    * Get Company's name
    * @return {String} name
    */
    getName() {
        return this.name;
    }
    
    /**
    * Set Company's name
    * @param {String} name
    */
    setName(name) {
        this.name = name;
    }

    /**
    * Get Company's email
    * @return {String} email
    */
    getEmail() {
        return this.email;
    }
    
    /**
    * Set Company's email
    * @param {String} email
    */
    setEmail(email) {
        this.email = email;
    }

    /**
    * Get Company's logo
    * @return {String} logo
    */
    getLogo() {
        return this.logo;
    }
    
    /**
    * Set Company's logo
    * @param {String} logo
    */
    setLogo(logo) {
        this.logo = logo;
    }

    /**
    * Get Company's size
    * @return {Number} size
    */
    getSize() {
        return this.size;
    }
    
    /**
    * Set Company's size
    * @param {Number} size
    */
    setSize(size) {
        this.size = size;
    }

    /**
    * Get Company's photo
    * @return {String} photo
    */
    getPhoto() {
        return this.photo;
    }
    
    /**
    * Set Company's photo
    * @param {String} photo
    */
    setPhoto(photo) {
        this.photo = photo;
    }

    /**
    * Get Company's contact
    * @return {String} contact
    */
    getContact() {
        return this.contact;
    }
    
    /**
    * Set Company's contact
    * @param {String} contact
    */
    setContact(contact) {
        this.contact = contact;
    }

    /**
    * Get Company's website
    * @return {String} webSite
    */
    getWebSite() {
        return this.webSite;
    }
    
    /**
    * Set Company's website
    * @param {String} webSite
    */
    setWebSite(webSite) {
        this.webSite = webSite;
    }

    /**
    * Get Company's techStack
    * @return {String} techStack
    */
    getTechStack() {
        return this.techStack;
    }
    
    /**
    * Set Company's techStack
    * @param {String} techStack
    */
    setTechStack(techStack) {
        this.techStack = techStack;
    }

    /**
    * Get Company's description
    * @return {String} description
    */
    getDescription() {
        return this.description;
    }
    
    /**
    * Set Company's description
    * @param {String} description
    */
    setDescription(description) {
        this.description = description;
    }
 
}

