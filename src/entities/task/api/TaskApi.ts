import { gql } from "@apollo/client";

import { client } from "app/models/apollo";

import type { ITask } from "../model/types";
import { wait } from "shared/lib";

export class TaskApi {
  static async getTasks(): Promise<ITask[]> {
    const GET_TASKS = gql`
      query me {
        me {
          tasks {
            id
            content
            amount
            passed
            createdAt
            updatedAt
          }
        }
      }
    `;

    const result = await client.query({
      query: GET_TASKS,
      errorPolicy: "all",
    });

    await wait(2000);

    if (result.errors) {
      const errorCode = result.errors[0].extensions.exception.code;
      throw new Error(errorCode);
    }

    return result.data.me.tasks;
  }
  static async addTask(content: string): Promise<ITask> {
    const ADD_TASK = gql`
      mutation newTask($content: String!) {
        newTask(content: $content) {
          id
          content
          amount
          passed
          createdAt
        }
      }
    `;

    const result = await client.mutate({
      mutation: ADD_TASK,
      variables: { content },
      errorPolicy: "all",
    });

    await wait(2000);

    if (result.errors) {
      const errorCode = result.errors[0].extensions.exception.code;
      throw new Error(errorCode);
    }

    if (!result.data) {
      throw new Error("TASK_CREATED_ERROR");
    }
    return result.data.newTask;
  }
  static async editTask(
    id: TaskId,
    content: string,
    amount: number,
    passed?: null
  ): Promise<ITask> {
    const EDIT_TASK = gql`
      mutation updateTask(
        $id: ID!
        $content: String!
        $amount: Int!
        $passed: Int
      ) {
        updateTask(
          id: $id
          content: $content
          amount: $amount
          passed: $passed
        ) {
          id
          content
          amount
          passed
          createdAt
          updatedAt
        }
      }
    `;

    console.log("updated task");

    const result = await client.mutate({
      mutation: EDIT_TASK,
      variables: { id, content, amount, passed },
      errorPolicy: "all",
    });

    await wait(2000);

    if (result.errors) {
      const errorCode = result.errors[0].extensions.exception.code;
      throw new Error(errorCode);
    }

    if (!result.data) {
      throw new Error("TASK_UPDATED_ERROR");
    }

    return result.data.updateTask;
  }
  static async deleteTask(id: TaskId) {
    const DELETE_TASK = gql`
      mutation deleteTask($id: ID!) {
        deleteTask(id: $id)
      }
    `;

    const result = await client.mutate({
      mutation: DELETE_TASK,
      variables: { id },
      errorPolicy: "all",
    });

    await wait(1000);

    if (result.errors) {
      const errorCode = result.errors[0].extensions.exception.code;
      throw new Error(errorCode);
    }

    if (!result.data) {
      throw new Error("DELETED_ERROR");
    }
  }
}
