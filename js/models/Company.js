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