"use strict";

(function(){
  angular.module('toDoApp', []).controller('list_controller', ListController);
  function ListController(){
    var vm = this;
    vm.tasks = tasks;
    vm.taskAdder = function(){
      var taskBox = document.getElementById('task-field').value;
      if(taskBox !== '') {
        vm.tasks.push({
          name: taskBox,
          // done: false,
          note: ''
        });
      }
      document.getElementById('task-field').value = '';
    };
    vm.deleteTask = function(task){
      console.log('hey');
      var index = vm.tasks.indexOf(task);
      vm.tasks.splice(index, 1);
    };
    vm.editTask = function(){
      console.log('editing goin on')
    }
  }

})();
