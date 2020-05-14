import { Task } from "./Task";
export interface Project {
  id: string;
  name: string;
  tasks?: Task[];
}

export interface Projects {
  [id: string]: Project;
}
