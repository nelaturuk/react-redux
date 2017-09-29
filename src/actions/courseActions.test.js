import expect from 'expect';
import * as types from './actionTypes';
import * as courseActions from './courseActions';

import thunk from 'redux-thunk';
import nock from 'nock';
import configureMockStore from 'redux-mock-store';

describe('Course Actions', () => {
    describe('createCourseSuccess', () => {
        it('should create a CREATE_COURSE_SUCCESS action', () => {
            const course = {id: 'clean-code', title: 'Clean code'};
            const expectAction = {
                type: types.CREATE_COURSE_SUCCESS,
                course: course
            };
            expect(courseActions.createCourseSuccess(course)).toEqual(expectAction);
        });
    });
});

const middleware = [thunk];
const mockStore = configureMockStore(middleware);

describe('Asunc Actions', () => {
    afterEach(() => {
        nock.cleanAll();
    });

    it('should create BEGIN_AJAX_CALL and LOAD_COURSE_SUCCESS when loading courses', (done) => {
        const expectedActions = [
            {type: types.BEGIN_AJAX_CALL},
            {type: types.LOAD_COURSES_SUCCESS, body: {courses: [{id: 'clean-code', title: 'Clean code'}]}}
        ];

        const store = mockStore({courses: []}, expectedActions);
        store.dispatch(courseActions.loadCourses()).then(() => {
            const actions = store.getActions();
            expect(actions[0].type).toEqual(types.BEGIN_AJAX_CALL);
            expect(actions[1].type).toEqual(types.LOAD_COURSES_SUCCESS);
            done();
        });
    });
});