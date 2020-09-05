/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateTodo = /* GraphQL */ `
  subscription OnCreateTodo($owner: String!) {
    onCreateTodo(owner: $owner) {
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
export const onUpdateTodo = /* GraphQL */ `
  subscription OnUpdateTodo($owner: String!) {
    onUpdateTodo(owner: $owner) {
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
export const onDeleteTodo = /* GraphQL */ `
  subscription OnDeleteTodo($owner: String!) {
    onDeleteTodo(owner: $owner) {
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
export const onCreateWeighing = /* GraphQL */ `
  subscription OnCreateWeighing($owner: String!) {
    onCreateWeighing(owner: $owner) {
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
export const onUpdateWeighing = /* GraphQL */ `
  subscription OnUpdateWeighing($owner: String!) {
    onUpdateWeighing(owner: $owner) {
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
export const onDeleteWeighing = /* GraphQL */ `
  subscription OnDeleteWeighing($owner: String!) {
    onDeleteWeighing(owner: $owner) {
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
