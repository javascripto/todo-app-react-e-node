import axios from 'axios';
import React, { Component } from 'react';

import TodoForm from './todoForm';
import TodoList from './todoList';
import PageHeader from '../template/pageHeader';

const URL = 'http://localhost:3003/api/todos';

export default class Todo extends Component {

  constructor(props) {
    super(props);
    this.state = {
      list: [],
      description: '',
    }

    this.refresh = this.refresh.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
    this.handleClear = this.handleClear.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
    this.handleMarkAsDone = this.handleMarkAsDone.bind(this);
    this.handleMarkAsPending = this.handleMarkAsPending.bind(this);
  }

  componentDidMount() {
    this.refresh();
  }

  handleAdd() {
    const { description } = this.state;
    if (!description) return;
    axios.post(URL, { description }).then(() => this.refresh());
  }

  handleChange({ target: { value: description }}) {
    this.setState({ description });
  }

  handleRemove(todo) {
    axios.delete(`${URL}/${todo._id}`)
      .then(() => this.refresh(this.state.description));
  }

  handleMarkAsDone(todo) {
    axios.put(`${URL}/${todo._id}`, { ...todo, done: true })
      .then(() => this.refresh(this.state.description));
  }

  handleMarkAsPending(todo) {
    axios.put(`${URL}/${todo._id}`, { ...todo, done: false })
      .then(() => this.refresh(this.state.description));
  }

  handleClear() {
    this.refresh();
  }

  refresh(description = '') {
    const search = description ? { description__regex: `/${description}/`} : undefined;

    axios.get(`${URL}`, {
      params: {
        sort: '-createdAt',
        ...search
      }
    })
    .then(({ data: list }) => this.setState({ list, description }))
  }

  handleSearch() {
    this.refresh(this.state.description);
  }

  render() {
    return (
      <div>
        <PageHeader name="Tarefas" small="Cadastro"/>
        <TodoForm
          handleAdd={this.handleAdd}
          handleClear={this.handleClear}
          handleSearch={this.handleSearch}
          handleChange={this.handleChange}
          description={this.state.description}
        />
        <TodoList
          list={this.state.list}
          handleEdit={this.handleEdit}
          handleRemove={this.handleRemove}
          handleMarkAsDone={this.handleMarkAsDone}
          handleMarkAsPending={this.handleMarkAsPending}
        />
      </div>
    );
  }
}
