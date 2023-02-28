package com.example.demo.todocontroller;

import java.util.List;

import javax.validation.Valid;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Todo;
import com.example.demo.resultvm.EnumResultCode2;
import com.example.demo.resultvm.ResultMsg;
import com.example.demo.service.TodoService;

import lombok.NonNull;
import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
@RequestMapping ( "/todo" )
public class TodoController2
{
    @NonNull
    private final TodoService todoService;
    private final Logger logger = LoggerFactory.getLogger ( TodoController2.class );

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
    @GetMapping
    public List<Todo> findTodos ()
    {
        this.logger.info ( " ::GET Todo:: " );
        return this.todoService.findTodo ();
    }

    /**
     * 리턴
     *
     * <pre>
     * contents
     *
     * </pre>
     *
     * @param id
     * @return
     */
    /*
     * @GetMapping ( "/{key}" )
     * public Todo getTodo ( @PathVariable Double key )
     * {
     * return this.todoService.getTodo ( key );
     * }
     */

    /**
     * todo를 찾아 리턴
     *
     * <pre>
     * contents
     *
     * </pre>
     *
     * @param todo
     * @return
     */
    @GetMapping ( "/{todo}" )
    public List<Todo> getTodobyTodo ( @PathVariable String todo )
    {
        this.logger.info ( " ::Todo SEARCH:: " );
        return this.todoService.getTodobyTodo ( todo );
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
    @PostMapping ( "/save" )
    public Object saveTodo ( @RequestBody @Valid Todo todo,
                             BindingResult bindingResult )
    {
        this.logger.info ( " ::Todo Save:: " );
        return this.validation ( todo, bindingResult );
        // return this.todoService.saveTodoList ( todo );
    }

    /**
     * 등록 시, 데이터 검증
     *
     * <pre>
     * contents
     *
     * </pre>
     *
     * @param todo
     * @param bindingResult
     * @return
     */
    private Object validation ( @Valid Todo todo,
                                BindingResult bindingResult )
    {
        if ( bindingResult.hasErrors () )
        {
            return new ResultMsg ( EnumResultCode2.TODO_ERROR );
        } else
        {
            this.todoService.saveTodoList ( todo );
            return new ResultMsg ( EnumResultCode2.TODO_SUCCESS );
        }

    }

    /**
     * 수정
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
    @PutMapping ( "/{key}" )
    public Object updateTodo ( @PathVariable Double key,
                               @RequestBody Todo todo )
    {

        if ( !key.equals ( todo.getKey () ) )
        {
            return new ResultMsg ( EnumResultCode2.UPDATE_ERROR );
        } else
        {
            this.todoService.updateTodoList ( key, todo );
            return new ResultMsg ( EnumResultCode2.UPDATE_SUCCESS );
        }

        // return this.todoService.updateTodoList ( key, todo );

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
    @DeleteMapping ( "/{key}" )
    public Object deleteTodo ( @PathVariable Double key )
    {
        if ( !key.equals ( key ) )
        {
            return new ResultMsg ( EnumResultCode2.DELETE_ERROR );
        } else
        {
            this.todoService.deleteTodoList ( key );
            return new ResultMsg ( EnumResultCode2.DELETE_SUCCESS );

        }
    }

    /**
     * 모두 삭제
     *
     * <pre>
     * contents
     *
     * </pre>
     *
     * @param id
     */
    @DeleteMapping ( "/clear" )
    public void deleteAllTodo ()
    {
        this.logger.info ( " ::DELETE Todo:: " );
        this.todoService.deleteAllTodoList ();
    }
}
