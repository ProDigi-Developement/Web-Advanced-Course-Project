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