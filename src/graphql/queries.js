/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getTodo = /* GraphQL */ `
  query GetTodo($id: ID!) {
    getTodo(id: $id) {
      id
      name
      description
      done
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listTodos = /* GraphQL */ `
  query ListTodos(
    $filter: ModelTodoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTodos(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        done
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getWeighing = /* GraphQL */ `
  query GetWeighing($id: ID!) {
    getWeighing(id: $id) {
      id
      weight
      bmi
      fat
      muscle
      rm
      bodyage
      visceralfat
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listWeighings = /* GraphQL */ `
  query ListWeighings(
    $filter: ModelWeighingFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listWeighings(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        weight
        bmi
        fat
        muscle
        rm
        bodyage
        visceralfat
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
