import {ReactNode} from "react";
import {Task} from "../model/use-tasks";

type Props = {
  tasks: Array<Task>
  renderTask: (task: Task) => ReactNode
}

export function TasksList({renderTask, tasks}: Props) {
  return (
    <div>
      {tasks.map(renderTask)}
    </div>
  );
}
