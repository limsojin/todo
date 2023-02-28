package com.example.demo.model;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class TodoFromRequest
{
    /**
     * Request시에 전달 받은 파라미터를 관리하는 곳
     */
    private Double key;
    private String todo;
    private Boolean done;
    private String planPick;
}
