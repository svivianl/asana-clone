export interface CreateTask {
  assignee: string;
  title: string;
  description: string;
  status: string;
  dueDate: Date;
  creationDate: Date;
  project: string;
}

export interface Task extends CreateTask {
  id: string;
}
