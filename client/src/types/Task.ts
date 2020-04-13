export interface CreateTask {
  assigneeId: string;
  title: string;
  description: string;
  statusId: string;
  dueDate: Date;
  creationDate: Date;
  projectId: string;
}

export interface Task extends CreateTask {
  id: string;
}
