package com.example.demo.service;

import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.example.demo.model.Todo;
import com.example.demo.repository.TodoListRepository;

import lombok.NonNull;
import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@Service
@Transactional
public class TodoServiceImp implements TodoService
{
    @NonNull
    private final TodoListRepository todoListRepository;

    /**
     * JSON형태로 return
     *
     * <pre>
     * contents
     *
     * </pre>
     *
     * @param id
     * @return
     */
    @Override
    public Todo getTodo ( Double key )
    {
        return this.todoListRepository.findById ( key ).orElseThrow ( IllegalArgumentException::new );
    }

    /**
     * 검색
     *
     * <pre>
     * contents
     *
     * </pre>
     *
     * @param todo
     * @return
     */
    @Override
    public List<Todo> getTodobyTodo ( String todo )
    {

        final List<Todo> todoItem = this.todoListRepository.findByTodo ( todo );
        return todoItem;
    }

    /**
     * 조회
     *
     * <pre>
     * contents
     *
     * </pre>
     *
     * @return
     */
    @Override
    public List<Todo> findTodo ()
    {
        return this.todoListRepository.findAll ();
    }

    /**
     * 등록
     *
     * <pre>
     * contents
     *
     * </pre>
     *
     * @param todo
     * @return
     */
    @Override
    public Todo saveTodoList ( Todo todo )
    {
        return this.todoListRepository.save ( todo );
    }

    /**
     * 삭제
     *
     * <pre>
     * contents
     *
     * </pre>
     *
     * @param id
     */
    @Override
    public void deleteTodoList ( Double key )
    {
        // this.todoListRepository.deleteById ( id );
        this.todoListRepository.deleteById ( key );
    }

    /**
     * 모두삭제
     *
     * <pre>
     * contents
     *
     * </pre>
     *
     * @param todo
     */
    @Override
    public void deleteAllTodoList ()
    {
        this.todoListRepository.deleteAll ();
    }

    /**
     * 수정 및 갱신
     *
     * <pre>
     * contents
     *
     * </pre>
     *
     * @param id
     * @param todo
     * @return
     */
    @Override
    public Todo updateTodoList ( Double key,
                                 Todo todo )
    {
        return this.todoListRepository.save ( todo );
        /*
         * // finById 에서 Id 는 Primary key 를 의미한다.
         * final Todo todoList = this.todoListRepository.findById ( key ).orElseThrow ( IllegalArgumentException::new );
         * todoList.update ( todo.getTodo (), todo.isDone (), todo.getPlanPick () );
         * return todoList;
         */

        // todoList.setTodo ( todo );

        /*
         * final Todo todoData = this.todoListRepository.findById ( id ).orElseThrow ( IllegalArgumentException::new
         * );
         * todoData.update ( todo.getKey (), todo.getTodo (), todo.isDone (), todo.getPlanPick () );
         * return todoData;
         */

    }

}
