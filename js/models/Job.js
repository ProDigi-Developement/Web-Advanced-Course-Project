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
            startDate: props.startDate || new Date(),
            postDate: props.postDate || new Date(),
            description: props.description || 'description',
            companyId: props.companyId || -1
        };
    }
}