import React, { useEffect, useState } from 'react';

interface Task{
    id: string;
    assignee: string;
    title: string;
    description: string;
    status: string;
    dueDate: Date;
    creationDate: Date;
    project: string;
}

interface TaskProps{
    task: Task;
}

const Task = ({ task }: TaskProps) => {
    // const [assignee, setAssignee] = useState({})
    const { 
        // id,
        assignee = "Juninhos",
        title = "Does this work?",
        description = "Most awesome project ever built",
        // status,
        dueDate = Date.now(),
        // creationDate,
        project = "Asana Clone"
    } = task;

    // useEffect(() => {

    // }, [])

    return(
        <div className='jumbotron'>
            {/* TODO: status bar */}
            <div className='container'>
              <h4>{title}</h4>
              <div>
                <h5>Assignee</h5>
                <span>
                  <img />
                  <h5>{assignee}</h5>
                </span>
              </div>
              <div>
                  <h5>Due date</h5>
                  <span>{dueDate}</span>
              </div>
              <div>
                  <h5>Projects</h5>
                  <span>{project}</span>
              </div>
              <div>
                  <h5>Description</h5>
                  <textarea>{description}</textarea>
              </div>
            </div>
            
            {/* TODO: comments bar */}
        </div>
    )
};

export default Task;