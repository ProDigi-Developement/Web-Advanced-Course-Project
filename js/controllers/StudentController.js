/**
 * @class StudentController - Controller for students
 */
class StudentController {
    /**
   * @constructor Constructor of StudentController
   */
    constructor() {
        this.fetcher = Fetcher;
        this.allStudentEndpoint = 'https://pro-digi-advanced.firebaseio.com/student.json'; 
    }

    /**
   * List all students
   * @returns {Array} Student
   */
    async all() {
        const data = await this.fetcher.fetch(this.allStudentEndpoint);
        const objs = data.map(d => new Student(d));

        return objs;
    }

    /**
   * Filter students by term OR name OR education
   * @param {Object} props - term OR name OR education are optional
   * @returns {Array} Student
   */
    async filterStudents(props) {
        this.props = {
            term: props.term || '',
            name: props.name || '',
            education: props.education || '',
        };

        let filterdStudents = await this.all()
            .filter( student =>  
                ( ( this.props.term==='' || this.props.term === student.term )
               && ( this.props.name==='' || this.props.name === student.name ) 
               && ( this.props.education==='' || this.props.education === student.education ) )
            );
        return filterdStudents;
    }

    /**
   * insert new student
   * @param {Object} student - object Student
   * @returns {Object} Student with NEW id
   */
    async insertStudent(student) {
        student.idStudent = await this.insertStudent(student);
        return student;
        //TODO : check what to do in case of error
    }

// methods come here
}
