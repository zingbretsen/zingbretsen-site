/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createTodo = /* GraphQL */ `
  mutation CreateTodo(
    $input: CreateTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    createTodo(input: $input, condition: $condition) {
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
export const updateTodo = /* GraphQL */ `
  mutation UpdateTodo(
    $input: UpdateTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    updateTodo(input: $input, condition: $condition) {
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
export const deleteTodo = /* GraphQL */ `
  mutation DeleteTodo(
    $input: DeleteTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    deleteTodo(input: $input, condition: $condition) {
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
export const createWeighing = /* GraphQL */ `
  mutation CreateWeighing(
    $input: CreateWeighingInput!
    $condition: ModelWeighingConditionInput
  ) {
    createWeighing(input: $input, condition: $condition) {
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
export const updateWeighing = /* GraphQL */ `
  mutation UpdateWeighing(
    $input: UpdateWeighingInput!
    $condition: ModelWeighingConditionInput
  ) {
    updateWeighing(input: $input, condition: $condition) {
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
export const deleteWeighing = /* GraphQL */ `
  mutation DeleteWeighing(
    $input: DeleteWeighingInput!
    $condition: ModelWeighingConditionInput
  ) {
    deleteWeighing(input: $input, condition: $condition) {
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
