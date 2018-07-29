/**
 * @class StudentController - Controller for students
 */
class StudentController {
    /**
   * @constructor Constructor of StudentController
   */
    constructor() {
        this.fetcher = studentFetcher;
    }

    /**
   * List all students
   * @returns {Array} Student
   */
    async all() {
        const data = await this.fetcher.all();
        const objs = data.map(d => new Student(d));
        return objs;
    }

    // methods come here
}
