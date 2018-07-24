class Model {
    constructor(...required) {
        if (required.includes(undefined)) throw new Error('Invalid data');
    }

    // Any logic goes here
}

/**
 * @class Company - Model for Companies
 */
class Company extends Model {
    /**
   * @constructor
   * @param {Object} props - id, name and email are required
   */
    constructor(props) {
        super(props.id, props.name, props.email);

        this.props = {
            id: props.id,
            name: props.name,
            email: props.email,
            size: props.size || 0,
            logo: props.logo || 'logo',
            photo: props.photo || 'photo',
            contact: props.contact || 'contact',
            webSite: props.webSite || 'webSite',
            techStack: props.techStack || 'techStack',
            description: props.description || 'description'
        };
    }

    // Any logic goes here
}

/**
 * @class Student - Model for Students
 */
class Student extends Model {
    /**
   * @constructor
   * @param {Object} props - id, name and email are required
   */
    constructor(props) {
        super(props.id, props.name, props.email);

        this.props = {
            id: props.id,
            name: props.name,
            email: props.email,
            photo: props.photo || 'photo',
            goal: props.goal || 'goal',
            term: props.term || 1,
            resume: props.resume || 'resume',
            githubLink: props.githubLink || 'githubLink',
            linkedInLink: props.linkedInLink || 'linkedInLink',

            // Holds data related to jobs wich a student is applied for
            jobs: {}
        };
    }
}

/**
 * @class Job - Model for Jobs
 */
class Job extends Model {
    /**
   * @constructor
   * @param {Object} props - id, title are required
   */
    constructor(props) {
        super(props.id, props.title);

        this.props = {
            id: props.id,
            title: props.title,
            salary: props.salary || 0.0,
            benefits: props.benefits || 'benefits',
            startDate: props.startDate || new Date(),
            postDate: props.postDate || new Date(),
            description: props.description || 'description',

            // Total number of students applied
            totalStudents: props.totalStudents || 0
        };
    }
}
