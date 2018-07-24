/*
	Created by: Bruno Santos
	Date:		2018-July-24
	Description:
		Company Model
		
		id 			Int
		jobs 		Array / List
		name 		String
		email 		String
		logo 		String (link)
		size 		Int
		photo 		String (link)
		contact 	String
		website 	String (link)
		techStack 	String
		description String
*/

class Company {
    constructor ( id, jobs, email, logo, size, photo, contact, website, techStack, description ) {
        this._id 			= id;
        this._jobs 			= jobs;
        this._email 		= email;
        this._logo 			= logo;
        this._size 			= size;
        this._photo 		= photo;
        this._website		= website;
        this._techStack		= techStack;
        this._description	= description;
    }
    set id  		(id)       		{ this._id = id               		}
    get id  		()       		{ return this._id                	}
    set jobs  		(jobs)  		{ this._jobs = jobs               	}
    get jobs  		()       		{ return this._jobs                	}
    set email 		(email) 		{ this._email = email             	}
    get email 		()       		{ return this._email               	}
    set logo 		(logo) 			{ this._logo = logo         		}
    get logo 		()       		{ return this._logo             	}
    set size 		(size) 			{ this._size = size       			}
    get size 		()       		{ return this._size            		}
    set photo 		(photo) 		{ this._photo = photo         		}
    get photo 		()       		{ return this._photo             	}
    set contact		(contact)		{ this._contact = contact			}
    get contact		()       		{ return this._contact 				}
    set website		(website)		{ this._website = website			}
    get website		()       		{ return this._website 				}
    set techStack	(techStack)		{ this._techStack = techStack		}
    get techStack	()       		{ return this._techStack 			}
    set description	(description)	{ this._description = description	}
    get description	()       		{ return this._description 			}
}

let jobs = 
[
	new Job( 1, 'Job Title 1', 1000.00, 'Job benefits 1', '2018-09-01', '2018-07-24', 'Job description 1' ),
	new Job( 2, 'Job Title 2', 2000.00, 'Job benefits 2', '2018-09-02', '2018-07-24', 'Job description 2' )
];
	
// Test constructor
let company1 = new Company( 1, jobs, 'company1@email.ca'
	, 'http://company1.logo.link' , 100, 'http://company1.photo.link'
	, 'Company 1 contact', 'http://company1.website.link'
	, 'Company 1 techStack', 'Company 1 description' );
console.log( company1 );

// Test getter and setter
let company2 = new Company();
company2.id = 2;
company2.jobs = jobs;
company2.email = 'company2@email.ca';
company2.logo = 'http://company2.logo.link';
company2.size = 200;
company2.photo = 'http://company2.photo.link';
company2.contact = 'Company 2 contact';
company2.website = 'http://company2.website.link';
company2.techStack = 'Company 2 techStack';
company2.description = 'Company 2 description';

console.log( company2.id, company2.jobs, company2.email
		, company2.logo, company2.size, company2.photo
		, company2.contact, company2.website
		, company2.techStack, company2.description );