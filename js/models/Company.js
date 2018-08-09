/**
 * @class Company - Model for Companies
 */
class Company extends Model {
    /**
   * @constructor
   * @param {Object} props - id, name and email are required
   */
    constructor(props) {
        super(props.name);

        this.props = {
            id: props.id || null,
            name: props.name,
            email: props.email || 'email',
            size: props.size || 0,
            logo: props.logo || 'logo',
            photo: props.photo || 'photo',
            contact: props.contact || 'contact',
            webSite: props.webSite || 'webSite',
            techStack: props.techStack || 'techStack',
            description: props.description || 'description'
        };
    }
}
