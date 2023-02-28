package com.example.demo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.model.Todo;

public interface TodoListRepository extends JpaRepository<Todo, Double>
{
    List<Todo> findByTodo ( String todo );
}
