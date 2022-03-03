//액션 타입 선언
const ADD_TODO = 'todos/ADD_TODO' as const;
const TOGGLE_TODO = 'todos/TOGGLE_todo' as const;
const REMOVE_TODO = 'todos/REMOVE_TODO' as const;
let nextId=1;
//액션 생성 함수
export const addTodo = (text:string)=>({
    type:ADD_TODO,
    payload:{
        id:nextId++,
        text
    }
});

export const toggleTodo = (id:number)=>({
    type:TOGGLE_TODO,
    payload:id
});

export const removeTodo = (id:number)=>({
    type:REMOVE_TODO,
    payload:id
});

//모든 액션 객체들에 대한 타입 준비
type TodosAction = |ReturnType<typeof addTodo> |ReturnType<typeof toggleTodo> |ReturnType<typeof removeTodo>;

export type Todo = {
    id:number;
    text: string;
    done:boolean;
}
//이 모듈에서 관리할 상태는 Todo객체로 이루어진 배열
export type TodoState = Todo[];

//초기 상태 선언
const initialState : TodoState = [];

//리듀서 작성
function todos(state:TodoState = initialState, action:TodosAction){
    switch(action.type){
        case ADD_TODO: return state.concat({
            id:action.payload.id,
            text:action.payload.text,
            done:false
        });

        case TOGGLE_TODO: return state.map(todo=> todo.id===action.payload?{...todo, done:!todo.done} : todo)
        case REMOVE_TODO: return state.filter(todo=>todo.id!==action.payload);
        default:return state;
    }

}

export default todos;