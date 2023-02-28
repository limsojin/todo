package com.example.demo.todospecification;

import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;

import org.springframework.data.jpa.domain.Specification;

import com.example.demo.model.Todo;

public class TodoSpecification
{
    /**
     * Todo 인스턴스의 key, todo, planPick 필드가
     * 검색 조건으로 입력받은 매개변수 key, todo, planPick와 일치하는가 확인 => 해당하는 Todo 객체를 반환
     *
     * <pre>
     * contents
     *
     * </pre>
     *
     * @param key
     * @return
     */
    public static Specification<Todo> equalTodoKey ( Double key )
    {
        return new Specification<Todo> ()
        {
            @Override
            public Predicate toPredicate ( Root<Todo> root,
                                           CriteriaQuery<?> query,
                                           CriteriaBuilder criteriaBuilder )
            {
                return criteriaBuilder.equal ( root.get ( "key" ), key );
            }
        };
    }

    /**
     * <pre>
     * contents
     *
     * </pre>
     *
     * @param todo
     * @return
     */
    public static Specification<Todo> likeTodos ( String todo )
    {
        return new Specification<Todo> ()
        {
            @Override
            public Predicate toPredicate ( Root<Todo> root,
                                           CriteriaQuery<?> query,
                                           CriteriaBuilder criteriaBuilder )
            {
                return criteriaBuilder.like ( root.get ( "todo" ), "%" + todo + "%" );
            }
        };
    }

    /**
     * <pre>
     * contents
     *
     * </pre>
     *
     * @param planPick
     * @return
     */
    public static Specification<Todo> withPlanPick ( String planPick )
    {
        return ( Specification<Todo> ) ( ( root,
                                           query,
                                           builder ) -> builder.equal ( root.get ( "planPick" ), planPick ) );
    }

}
