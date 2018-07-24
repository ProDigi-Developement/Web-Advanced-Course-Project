/*
	Created by: Bruno Santos
	Date:		2018-July-24
	Description:
		Student Model
		
		id 				Int
		name 			String
		email 			String
		goal 			String
		term 			Int
		photo 			String (link)
		resume 			String (link)
		githubLink 		String (link)
		linkedInLink 	String (link)
*/

class Student {
    constructor ( id, name, email, goal, term, photo, resume, githubLink, linkedInLink ) {
        this._id 			= id;
        this._name 			= name;
        this._email 		= email;
        this._goal 			= goal;
        this._term 			= term;
        this._photo 		= photo;
        this._resume		= resume;
        this._githubLink	= githubLink;
        this._linkedInLink	= linkedInLink;
    }
    set id  			(id)       		{ this._id = id               		}
    get id  			()       		{ return this._id                	}
    set name  			(name)  		{ this._name = name               	}
    get name  			()       		{ return this._name                	}
    set email 			(email) 		{ this._email = email             	}
    get email 			()       		{ return this._email               	}
    set goal 			(goal) 			{ this._goal = goal         		}
    get goal 			()       		{ return this._goal             	}
    set term 			(term) 			{ this._term = term       			}
    get term 			()       		{ return this._term            		}
    set photo 			(photo) 		{ this._photo = photo         		}
    get photo 			()       		{ return this._photo             	}
    set resume			(resume)		{ this._resume = resume				}
    get resume			()       		{ return this._resume 				}
    set githubLink		(githubLink)	{ this._githubLink = githubLink		}
    get githubLink		()       		{ return this._githubLink 			}
    set linkedInLink	(linkedInLink)	{ this._linkedInLink = linkedInLink	}
    get linkedInLink	()       		{ return this._linkedInLink 		}
}

// Test constructor
let student1 = new Student( 1, 'Student 1 name', 'student1@email.ca'
	, 'Student 1 goal', 1, 'http://student1.photo.link'
	, 'http://student1.resume.link', 'http://student1.github.link', 'http://student1.linkedin.link' );
console.log( student1 );

// Test getter and setter
let student2 = new Student();
student2.id = 2;
student2.name = 'Student 2 name';
student2.email = 'student2@email.ca';
student2.goal = 'Student 2 goal';
student2.term = 2;
student2.photo = 'http://student2.photo.link';
student2.resume = 'http://student2.resume.link';
student2.githubLink = 'http://student2.github.link';
student2.linkedInLink = 'http://student2.linkedin.link';

console.log( student2.id, student2.name, student2.email
		, student2.goal, student2.term, student2.photo
		, student2.resume, student2.githubLink, student2.linkedInLink );