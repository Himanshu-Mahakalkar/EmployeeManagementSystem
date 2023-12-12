var app = angular.module('employeeApp', []);
app.controller('employeeController', function ($scope, $http) {
    $scope.employees = [];
    $scope.selectedEmployee = {};
    $scope.employeeupdateContainerVisible = false;
    $scope.addEmployeeContainerVisible = false;
    $scope.employeeListContainerVisible = true;

    $scope.loadEmployee = function (id) {
        var url = `http://localhost:8030/employee/get?id=${id}`;
        $http.get(url).then(function (response) {
            if (response.data) {
                $scope.selectedEmployee = response.data;
            }
        });
    };
    $scope.loadAllEmployees = function () {
        var url = `http://localhost:8030/employee/getAll`;
        $scope.employees = [];
        $http.get(url).then(function (response) {
            if (response.data.length !== 0) {
                $scope.employees = response.data;
            }else {
                alert("Add Employee");
            }

        });
    };
    $scope.deleteEmployee = function (id) {
        var url = `http://localhost:8030/employee/delete?id=${id}`;
        $http.get(url).then(function (response) {
                $scope.loadAllEmployees();
                $scope.setEmployeeListView();
                alert("Employee Deleted");
        });
    };
    $scope.updateEmployee = function (firstName, lastName, email) {
        var url = `http://localhost:8030/employee/update?id=${$scope.selectedEmployee.id}&firstName=${$scope.selectedEmployee.firstName}&lastName=${$scope.selectedEmployee.lastName}&email=${$scope.selectedEmployee.email}`;
        $http.get(url).then(function (response) {
            if (response.data) {
                $scope.loadAllEmployees();
                $scope.setEmployeeListView();
                alert("Employee Updated");
            } else {
                alert("Failed");
            }
        });
    };
    $scope.addEmployee = function () {
        var url = `http://localhost:8030/employee/add?firstName=${$scope.selectedEmployee.firstName}&lastName=${$scope.selectedEmployee.lastName}&email=${$scope.selectedEmployee.email}`;
        $http.get(url).then(function (response) {
            if (response) {
                $scope.loadAllEmployees();
                $scope.selectedEmployee = {};
                alert("Employee Added Successfully");
            }
        });
    };
    $scope.setAddEmployeeView = function () {
        $scope.updateEmployeeContainerVisible = false;
        $scope.addEmployeeContainerVisible = true;
        $scope.employeeListContainerVisible = false;
        $scope.selectedEmployee = {};
    };
    $scope.setupdateEmployeeView = function () {
        $scope.updateEmployeeContainerVisible = true;
        $scope.addEmployeeContainerVisible = false;
        $scope.employeeListContainerVisible = false;
    };
    $scope.setEmployeeListView = function () {
        $scope.updateEmployeeContainerVisible = false;
        $scope.addEmployeeContainerVisible = false;
        $scope.employeeListContainerVisible = true;
    };
    $scope.onUpdateClick = function (id) {
        $scope.setupdateEmployeeView();
        $scope.loadEmployee(id);
    };
    $scope.loadAllEmployees();
});