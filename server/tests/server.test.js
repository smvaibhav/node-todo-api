// Todo Script by Vaibhav Yadav

const expect = require('expect');
const request = require('supertest');
const {ObjectID} = require('mongodb');

const {app} = require('./../server');
const {Todo} = require('./../models/todo');

const todos = [{
  _id: new ObjectID(),
  mtodo: 'Lunch with Lily',
  tododue: 'Fri, Jan 18',
  todonotes: 'Not any Notes',
  tododone: false
}, {
  _id: new ObjectID(),
  mtodo: 'Visit N. Hirano',
  tododue: 'Sat, Jan 26',
  todonotes: 'Conform the Meeting ahead of time',
  tododone: true
}];

beforeEach((done) => {
  Todo.remove({}).then(() => {
    return Todo.insertMany(todos);
  }).then(() => done());
});

//test for post
describe('POST /todos/insert', () => {
  it('should create a new todo', (done) => {
    var text = 'Test todo text';

    request(app)
      .post('/todos/insert')
      .send({text})
      .expect(200)
      .expect((res) => {
        expect(res.body.text).toBe(text);
      })
      .end((err, res) => {
        if (err) {
          return done(err);
        }

        Todo.find({text}).then((todos) => {
          expect(todos.length).toBe(1);
          expect(todos[0].text).toBe(text);
          done();
        }).catch((e) => done(e));
      });
  });

  it('should not create todo with invalid body data', (done) => {
    request(app)
      .post('/todos/insert')
      .send({})
      .expect(400)
      .end((err, res) => {
        if (err) {
          return done(err);
        }

        Todo.find().then((todos) => {
          expect(todos.length).toBe(2);
          done();
        }).catch((e) => done(e));
      });
  });
});

//test for GET

describe('GET /todos/show', () => {
  it('should get all todos', (done) => {
    request(app)
      .get('/todos/show')
      .expect(200)
      .expect((res) => {
        expect(res.body.todos.length).toBe(2);
      })
      .end(done);
  });
});

// for find by id

describe('GET /todos/:id/show', () => {
  it('should return todo doc', (done) => {
    request(app)
      .get(`/todos/${todos[0]._id.toHexString()}/show`)
      .expect(200)
      .expect((res) => {
        expect(res.body.todo.text).toBe(todos[0].text);
      })
      .end(done);
  });

  it('should return 404 if todo not found', (done) => {
    var hexId = new ObjectID().toHexString();

    request(app)
      .get(`/todos/${hexId}/show`)
      .expect(404)
      .end(done);
  });

  it('should return 404 for non-object ids', (done) => {
    request(app)
      .get('/todos/123abc/show')
      .expect(404)
      .end(done);
  });
});

describe('DELETE /todos/:id/delete', () => {
  it('should remove a todo', (done) => {
    var hexId = todos[1]._id.toHexString();

    request(app)
      .delete(`/todos/${hexId}/delete`)
      .expect(200)
      .expect((res) => {
        expect(res.body.todo._id).toBe(hexId);
      })
      .end((err, res) => {
        if (err) {
          return done(err);
        }

        Todo.findById(hexId).then((todo) => {
          expect(todo).toNotExist();
          done();
        }).catch((e) => done(e));
      });
  });

  it('should return 404 if todo not found', (done) => {
    var hexId = new ObjectID().toHexString();

    request(app)
      .delete(`/todos/${hexId}/delete`)
      .expect(404)
      .end(done);
  });

  it('should return 404 if object id is invalid', (done) => {
    request(app)
      .delete('/todos/123abc/delete')
      .expect(404)
      .end(done);
  });
});

// for Update
describe('PATCH /todos/:id/update', () => {
  it('should update the todo', (done) => {
    var hexId = todos[0]._id.toHexString();
    var text = 'This should be the new text';

    request(app)
      .patch(`/todos/${hexId}/update`)
      .send({
        completed: true,
        text
      })
      .expect(200)
      .expect((res) => {
        expect(res.body.todo.mtodo).toBe(text);
        expect(res.body.todo.tododue).toBe(text);
        expect(res.body.todo.todonotes).toBe(text);
        expect(res.body.todo.tododone).toBeA(true);
      })
      .end(done);
  });


  it('should clear tododone when todo is not completed', (done) => {
    var hexId = todos[1]._id.toHexString();
    var text = 'This should be the new text!!';

    request(app)
      .patch(`/todos/${hexId}/update`)
      .send({
        tododone: false,
        text
      })
      .expect(200)
      .expect((res) => {
        expect(res.body.todo.mtodo).toBe(text);
        expect(res.body.todo.tododue).toBe(text);
        expect(res.body.todo.todonotes).toNotExist();
        expect(res.body.todo.tododone).toBe(text);
      })
      .end(done);
  });
});
