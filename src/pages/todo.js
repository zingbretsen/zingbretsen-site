import React, { useState, useEffect, useReducer } from "react";
import { API, graphqlOperation } from "aws-amplify";

import Layout from "../components/layout";
import Todo from "../components/todo";
import SEO from "../components/seo";

import { listTodos } from '../graphql/queries.js';
import { createTodo } from '../graphql/mutations.js';


const TodoPage = () => {
    const [state, changeState] = useState([]);
    const [count, changeCount] = useState(0);
    const [name, changeName] = useState("");
    const [description, changeDescription] = useState("");

    const [reducer_state, dispatch] = useReducer(reducer, {});

    function reducer(state, action) {
        switch (action.type) {
        case 'add':
            console.log('add');
            break;
        default:
            console.log('default');
        }
    }


    function addTodo() {
        changeCount(count + 1);
        dispatch({type: 'add'});
        const todoDetails = {name: name, description: description};
        const newTodo = API.graphql(graphqlOperation(createTodo, {input: todoDetails}))
              .then(d => { console.log(d.data.createTodo); changeState([d.data.createTodo, ...state]);})
              .catch(e => console.log(e));
    }

    useEffect(() => {if (count > 0) document.title = count;});

    useEffect(() => {
        const todos = API.graphql(graphqlOperation(listTodos))
              .then(d => {
                  const t = d.data.listTodos.items;
                  changeState(t);
              })
              .catch(e => console.log(e));
    }, []);
    return (
        <Layout>
          <SEO title="Todos" />
          <button onClick={() => {addTodo();}}>Add Todo</button>
          <button onClick={() => {changeCount(count + 1);}}>Do not click</button>
          <input type="text" onChange={(d) => changeName(d.target.value)} name="name" placeholder="name"/>
          <input type="text" onChange={(d) => changeDescription(d.target.value)} name="description" placeholder="description"/>
          {
              state.map(todo => (
                  <Todo key={todo.id} title={todo.name} description={todo.description}><p>{todo.name}</p></Todo>
              )
                       )}
        </Layout>
    )};

export default TodoPage;
