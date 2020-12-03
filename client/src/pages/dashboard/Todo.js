import React, { useState } from 'react';
import { Form, Col, Row, Card } from 'react-bootstrap';
import { useTodo } from './../../redux/hooks';

import Input from './../../atoms/Input';
import Button from './../../atoms/Button';

const Todo = ({ description, setModal }) => {
  const { addTodo, todo, loading, updateTodo } = useTodo();
  const [formData, setFormData] = useState({
   name: !loading && description === 'Update' ? todo.name : '',
    email: !loading && description === 'Update' ? todo.email : '',
    phoneNumber: !loading && description === 'Update' ? todo.phoneNumber : '',
    password: !loading && description === 'Update' ? todo.password : ''
  });

 
  const { name,email,phoneNumber,password } = formData;

  const onChange = (e) => {
    return setFormData(
      e.target.name === 'tag'
        ? {
            ...formData,
            tagId: e.target.options[e.target.options.selectedIndex].getAttribute(
              'option-id'
            ),
            tag: e.target.value
          }
        : { ...formData, [e.target.name]: e.target.value }
    );
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    description === 'Add' && addTodo({ name,email,phoneNumber,password });
    description === 'Update' && updateTodo({ name,email,phoneNumber,password }, todo._id);
    setModal({ isOpen: false });
  };
  return loading ? (
    <h2>Loading</h2>
  ) : (
    <Card className="todo-form p-4">
      <Card.Body>
        <Row className="d-flex justify-content-between align-items-center mb-5">
          <Card.Title>{description} Todo</Card.Title>

          <Row className="d-flex justify-content-between flex-nowrap"></Row>
        </Row>
        <Form>
          <Form.Row>
            <Col xs={12} sm={12} md={8}>
              <Input
                label="Name"
                id="todo-name"
                type="text"
                value={name}
                name="name"
                onChange={(e) => onChange(e)}
                autoComplete="off"
              />
            </Col>
            <Col xs={12} sm={12} md={8}>
              <Input
                label="Email"
                id="todo-email"
                type="email"
                value={email}
                name="email"
                onChange={(e) => onChange(e)}
                autoComplete="off"
              />
            </Col>
            <Col xs={12} sm={12} md={8}>
              <Input
                label="Phone Number"
                id="todo-phoneNumber"
                type="text"
                value={phoneNumber}
                name="phoneNumber"
                onChange={(e) => onChange(e)}
                autoComplete="off"
              />
            </Col>
            <Col xs={12} sm={12} md={8}>
              <Input
                label="Password"
                id="todo-password"
                type="password"
                value={password}
                name="password"
                onChange={(e) => onChange(e)}
                autoComplete="off"
              />
            </Col>
          </Form.Row>

          <Button
            variant="secondary"
            text={description === 'Update' ? 'Update Todo' : 'Add Todo'}
            onClick={(e) => onSubmit(e)}
            color="white"
            type="submit"
            className="float-right"
            id={`todo-update-add-button-${description}`}
          />
        </Form>
      </Card.Body>
    </Card>
  );
};

export default Todo;
