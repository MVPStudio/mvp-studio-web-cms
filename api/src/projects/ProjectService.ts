import ProjectDao from './ProjectDao';

export default class ProjectService {
    private dao: ProjectDao;
    constructor(dao = new ProjectDao()) {
        this.dao = dao;
    }
    public async getAllProjects() {
      return this.dao.getAllProjects();
    }
  }
