/**
 * @class StudentController - Controller for students
 */
class StudentController {
    /**
   * @constructor Constructor of StudentController
   */
    constructor() {
        this.fetcher = fetcherObject;
        this.studentsEndpoint = 'students';
    }

    setToken(token) {
        this.token = token;
    }

    /**
   * List all students
   * @returns {Array} Student
   */
    async all(filter = '') {
        try {
            const data = await this.fetcher.fetch(
                `students?access_token=${this.token}${
                    filter ? `&filter=${JSON.stringify(filter)}` : ''
                }`
            );
            const objs = data.map(studentJSON => new Student(studentJSON));
            return objs;
        } catch (error) {
            throw new Error(error);
        }
    }

    async byId(studentId) {
        const data = await this.fetcher.fetch(
            this.studentsEndpoint + '/' + studentId
        );
        const objs = data.map(studentJSON => new Student(studentJSON));

        return objs;
    }

    async create(student) {
        delete student.props.id; // Just to be safe

        const data = student.props;
        const returnStudent = await this.fetcher.post(this.studentsEndpoint, data);

        return returnStudent;
    }

    /**
   * Filter students by term OR name
   * @param {Object} props - term OR name are optional (Name can be partial)
   * @returns {Array} Student
   */
    filterStudents(props) {
        props.term = +(props.term ? props.term.trim() : 0); 
        props.name = (props.name ? props.name.trim().toUpperCase() : ''); 

        let filterdStudents = this.all()
            .then( data => { 
                return data.filter( student => {
                    return (
                        (props.term == 0 || student.props.term == props.term) &&
                        (props.name == '' || student.props.name.toUpperCase().startsWith(props.name))
                    );
                });
            });

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
