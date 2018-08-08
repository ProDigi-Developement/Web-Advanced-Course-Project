/**
 * @class StudentController - Controller for students
 */
class StudentController {
    /**
   * @constructor Constructor of StudentController
   */
    constructor() {
        this.fetcher = fetcherObject;
    }

    /**
   * List all students
   * @returns {Array} Student
   */
    async all() {
        const data = await this.fetcher.fetch('students');
        const objs = data.map(studentJSON => new Student(studentJSON));

        return objs;
    }

    async byId(studentId) {
        const data = await this.fetcher.fetch('students/' + studentId);
        const objs = data.map(studentJSON => new Student(studentJSON));

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
}
