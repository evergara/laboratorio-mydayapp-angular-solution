import { Todo } from "@feature/todo/domain/model/todo.model";
import { v4 as uuidv4 } from 'uuid';

export class TodoMapper {
  mapFrom(param: string): Todo {
    return {
        id: uuidv4(),
        title: param,
        isCompleted: false,
        isEditing: false,
    };
}

}
