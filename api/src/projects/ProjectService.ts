import ProjectDao from './ProjectDao';

export default class ProjectService {
    constructor(private dao: ProjectDao) {}
    public async getAllProjects() {
      return this.dao.getAllProjects();
    }
    public async getProject(id: string) {
      return this.dao.getProject(id);
    }
  }
