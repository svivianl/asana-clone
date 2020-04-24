import React from "react";
import { useSelector } from "react-redux";
import ProjectTask from "./components/tasks/components/projectTasks/ProjectTask";
import ProjectViewProps from "./ProjectViewProps";
import { projectsSelectors } from "../../../../../../../../../store/projects/store";

const ProjectView = ({ onInputChange }: ProjectViewProps) => {
  const project = {
    id: "582893eb-255a-453c-b11f-aafba9b13bc1",
    name: "commodi deserunt facere",
    tasks: [
      {
        id: "19941aaf-c71e-4f7c-b067-6c6a7903efc6",
        statusId: "5a57bd27-ba3c-4243-b3e9-a345431ee9f5",
        assigneeId: "7e41dcf9-d939-441f-a62b-62f34d97af48",
        dueDate: new Date("2020-11-04T18:42:28.982Z"),
        creationDate: new Date("2020-04-22T01:07:11.845Z"),
        title: "distinctio mollitia qui",
        description:
          "Repellendus repellendus blanditiis id voluptatem aut et. Quia officiis esse modi et. Ut molestiae aut cum.",
        projectId: "582893eb-255a-453c-b11f-aafba9b13bc1",
      },
      {
        id: "aace7dd0-5d86-42a3-bfe8-92ffedfdab82",
        statusId: "a278a41a-45db-444d-ace6-cfb6a7ebf194",
        assigneeId: "310d263a-c54d-4314-ace4-e14cce1087e9",
        dueDate: new Date("2021-01-15T05:16:41.100Z"),
        creationDate: new Date("2020-04-22T09:40:35.490Z"),
        title: "doloremque nisi odio",
        description:
          "Vel molestiae commodi repellendus sunt similique deserunt tempore. Enim enim eaque repellat quo. In velit occaecati reiciendis et deserunt quia. Quia eos rerum eum dignissimos magnam voluptatum vel soluta. Numquam qui dignissimos magnam.",
        projectId: "582893eb-255a-453c-b11f-aafba9b13bc1",
      },
      {
        id: "0ea2782f-f917-4d84-ab5d-731ce7e44896",
        statusId: "5a57bd27-ba3c-4243-b3e9-a345431ee9f5",
        assigneeId: "310d263a-c54d-4314-ace4-e14cce1087e9",
        dueDate: new Date("2020-10-24T12:55:02.332Z"),
        creationDate: new Date("2020-04-21T19:56:42.547Z"),
        title: "saepe nobis iusto",
        description:
          "Enim quisquam eveniet dignissimos similique itaque quibusdam. Sint sit voluptas aut quo. Et labore quis consectetur at.",
        projectId: "582893eb-255a-453c-b11f-aafba9b13bc1",
      },
      {
        id: "1653675a-1427-439c-9297-76de707b83e1",
        statusId: "293f205f-c97a-4b2d-8adc-6d72a05971dd",
        assigneeId: "27046d80-93c7-4851-bdef-512bc49677e1",
        dueDate: new Date("2021-02-24T13:15:41.699Z"),
        creationDate: new Date("2020-04-22T09:08:30.384Z"),
        title: "quos atque delectus",
        description:
          "Repellendus totam nesciunt. Porro sunt velit excepturi ut dolorem harum aut. Facere ut necessitatibus nihil veniam qui rerum. Consequuntur molestias doloribus odio nesciunt mollitia qui neque. Similique quidem deleniti commodi. Id voluptate tenetur aut nulla voluptas.",
        projectId: "582893eb-255a-453c-b11f-aafba9b13bc1",
      },
      {
        id: "a204dc9f-dacc-411d-a2e1-c73c1fb18393",
        statusId: "5a57bd27-ba3c-4243-b3e9-a345431ee9f5",
        assigneeId: "14c9f1f9-49bd-4e49-801e-48c6bb73894c",
        dueDate: new Date("2021-03-02T11:17:21.754Z"),
        creationDate: new Date("2020-04-22T03:28:32.136Z"),
        title: "molestiae eius tenetur",
        description:
          "Rerum ipsa sunt incidunt dolores id. Sequi aut ut quia harum exercitationem. Enim voluptatem et odit. Et adipisci officiis. Necessitatibus aut vero a officia sint error. Perferendis in illum.",
        projectId: "582893eb-255a-453c-b11f-aafba9b13bc1",
      },
      {
        id: "8bc7485c-6cd2-4cdf-9952-3cf0408131a7",
        statusId: "293f205f-c97a-4b2d-8adc-6d72a05971dd",
        assigneeId: "7e41dcf9-d939-441f-a62b-62f34d97af48",
        dueDate: new Date("2020-11-02T15:20:50.606Z"),
        creationDate: new Date("2020-04-21T15:43:26.088Z"),
        title: "rerum voluptatem consectetur",
        description:
          "Suscipit doloremque saepe qui sit esse qui. Ad ipsa aut eum eum. Et sit in eius iusto et numquam voluptatum. Incidunt impedit non nulla eaque qui est. Magnam ab est sit voluptatem illum optio.",
        projectId: "582893eb-255a-453c-b11f-aafba9b13bc1",
      },
      {
        id: "7d448785-c950-4e27-ba2e-52e7b726a137",
        statusId: "293f205f-c97a-4b2d-8adc-6d72a05971dd",
        assigneeId: "310d263a-c54d-4314-ace4-e14cce1087e9",
        dueDate: new Date("2020-06-09T18:27:05.756Z"),
        creationDate: new Date("2020-04-21T21:03:37.962Z"),
        title: "sequi veritatis quasi",
        description:
          "Aut voluptate nihil hic dolorem inventore et. Recusandae omnis repellendus hic minima. Ullam totam voluptatibus aut enim. Excepturi quas sit consequatur explicabo sed.",
        projectId: "582893eb-255a-453c-b11f-aafba9b13bc1",
      },
      {
        id: "3eb2a7db-fae8-4028-b568-2290e624f42c",
        statusId: "a278a41a-45db-444d-ace6-cfb6a7ebf194",
        assigneeId: "4cb2861b-bfcd-44ed-82ba-024cbe3d1f3f",
        dueDate: new Date("2021-04-14T12:22:55.682Z"),
        creationDate: new Date("2020-04-21T17:03:56.097Z"),
        title: "maxime blanditiis et",
        description:
          "Quis odio saepe odit. Modi quae quas tempore qui inventore aut adipisci voluptatum officiis. Doloribus at culpa quo ad quos quisquam est deserunt et. Quis inventore aut. Accusamus facere similique nesciunt amet inventore ipsa id voluptatem. Incidunt sit enim.",
        projectId: "582893eb-255a-453c-b11f-aafba9b13bc1",
      },
      {
        id: "cb5df1ed-590c-4f4c-8d0b-9b1d78dbd210",
        statusId: "4be54012-d08b-48d8-9585-23284f313d12",
        assigneeId: "14c9f1f9-49bd-4e49-801e-48c6bb73894c",
        dueDate: new Date("2020-09-11T17:55:12.827Z"),
        creationDate: new Date("2020-04-21T17:26:32.318Z"),
        title: "ad excepturi possimus",
        description:
          "Ipsum delectus unde et beatae cupiditate. Reiciendis ut odio sunt quia illum est itaque vero esse. Enim doloremque aut iure. Quis deleniti accusantium deserunt dolores molestiae maiores. Nulla ad dicta et libero ipsam facilis modi reprehenderit.",
        projectId: "582893eb-255a-453c-b11f-aafba9b13bc1",
      },
    ],
  };

  const { name, tasks } = project;

  return (
    <form className="form-full-width ml-0 mt-3 mb-3">
      <div className="form-group row">
        <label className="col-sm-2 col-form-label" htmlFor="project-name">
          Name
        </label>
        <div className="col-sm-10">
          <input
            type="text"
            className="form-control"
            id="project-name"
            placeholder="Project's name"
            defaultValue={name}
            onChange={onInputChange}
          />
        </div>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Task name</th>
            <th scope="col">Assignee</th>
            <th scope="col">Due date</th>
          </tr>
        </thead>
        <tbody>
          {tasks &&
            tasks.map((task) => <ProjectTask key={task.id} task={task} />)}
        </tbody>
      </table>
    </form>
  );
};

export default ProjectView;
