export default class Tool {
    public id: string;
    public name: string;
    public description: string;
    public enabled: boolean;

    constructor(id: string, name: string, description: string, enabled: boolean = true) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.enabled = enabled;
    }
}
