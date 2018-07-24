/*
	Created by: Bruno Santos
	Date:		2018-July-24
	Description:
		Job Model
		
		id 			Int
		title 		String
		salary 		Numeric / Double (please, not float)
		benefits 	String
		startDate 	Date
		postDate 	Date
		description String
*/

class Job {
    constructor (id, title, salary, benefits, startDate, postDate, description) {
        this._id 			= id;
        this._title 		= title;
        this._salary 		= salary;
        this._benefits 		= benefits;
        this._startDate 	= startDate;
        this._postDate 		= postDate;
        this._description	= description;
    }
    get id  		()       		{ return this._id                	}
    set title  		(title)  		{ this._title = title               }
    get title  		()       		{ return this._title                }
    set salary 		(salary) 		{ this._salary = salary             }
    get salary 		()       		{ return this._salary               }
    set benefits 	(benefits) 		{ this._benefits = benefits         }
    get benefits 	()       		{ return this._benefits             }
    set startDate 	(startDate) 	{ this._startDate = startDate       }
    get startDate 	()       		{ return this._startDate            }
    set postDate 	(postDate) 		{ this._postDate = postDate         }
    get postDate 	()       		{ return this._postDate             }
    set description	(description)	{ this._description = description	}
    get description	()       		{ return this._description 			}
}


let job1 = new Job( 1, 'Job Title 1', 1000.00, 'Job benefits 1', '2018-09-01', '2018-07-24', 'Job description 1' );
let job2 = new Job( 2, 'Job Title 1', 2000.00, 'Job benefits 2', '2018-09-02', '2018-07-24', 'Job description 2' );

console.log( job1 );
console.log( job2 );