/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.web.spring.controller;

import com.web.spring.model.Employee;
import com.web.spring.service.EmployeeService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author Himanshu
 */
@CrossOrigin(origins = {"*"})

@RequestMapping("employee")
@RestController
public class EmployeeController {

    @Autowired
    private EmployeeService service;

    @RequestMapping("add")
    public Employee addEmployee(@ModelAttribute Employee employee) {
        return service.addEmployee(employee);
    }

    @RequestMapping("get")
    public Employee getEmployee(@RequestParam int id) {
        return service.getEmployee(id);
    }

    @RequestMapping("getAll")
    public List<Employee> getAllEmployees() {
        return service.getAllEmployees();
    }

    @RequestMapping("delete")
    public void deleteEmployee(@RequestParam int id) {
        service.deleteEmployee(id);
    }

    @RequestMapping("update")
    public Employee updateEmployee(@ModelAttribute Employee employee) {
        return service.updateEmployee(employee);
    }

}
