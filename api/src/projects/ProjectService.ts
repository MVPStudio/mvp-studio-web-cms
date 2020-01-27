import ProjectDao from './ProjectDao';

export default class ProjectService {
    constructor(private dao: ProjectDao) {}
    public async getAllProjects() {
      return this.dao.getAllProjects();
    }
    public async getProject(id: string) {
      let result = {};
      // Check to make sure id is an integer
      let re = /^\d{1,5}$/;
      if (re.test(id)) {
        const data = await this.dao.getProject(id);
        if (data.length !== 0) {
          result = data[0]; // Return a single project
        }
      }
      return result;
    }
  }
