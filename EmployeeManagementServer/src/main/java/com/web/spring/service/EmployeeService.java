/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.web.spring.service;

import com.web.spring.model.Employee;
import com.web.spring.repository.EmployeeRepository;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author Himanshu
 */
@Service
public class EmployeeService {

    @Autowired
    private EmployeeRepository repository;

    public Employee addEmployee(Employee employee) {
        return repository.save(employee);
    }

    public Employee getEmployee(int id) {
        Optional<Employee> optional = repository.findById(id);
        if (optional.isPresent()) {
            return optional.get();
        }
        return null;
    }

    public List<Employee> getAllEmployees() {
        return repository.findAll();
    }

    public void deleteEmployee(int id) {
        repository.deleteById(id);
    }

    public Employee updateEmployee(Employee employee) {
        Optional<Employee> optional = repository.findById(employee.getId());
        if (optional.isPresent()) {
            Employee updatedEmployee = optional.get();
            updatedEmployee.setFirstName(employee.getFirstName());
            updatedEmployee.setLastName(employee.getLastName());
            updatedEmployee.setEmail(employee.getEmail());
            return repository.save(updatedEmployee);
        }
        return null;
    }

}
