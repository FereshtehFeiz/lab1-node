//Lab1 - Ex2
//Construction function

const taskList = [
];

let var1 = {id:1, description:"test1", urgent:true,view:true,deadline:'March 9, 2021 4:20 PM'};
let var2 = {id:2, description:"test2", urgent:false,view:true,deadline:'March 10, 2021 4:20 PM'};
let var3 ={id:3, description:"test3", urgent:true,view:false,deadline:'March 11, 2021 4:20 PM'};


class Task {
    constructor(id,description,urgent,view,deadline) {
        this.id = id;
        this.description = description;
        this.urgent = urgent;
        this.view = view;
        this.deadline = deadline;
    }
    

    sortAndPrint() {
        console.log("****** Tasks sorted by deadline (most recent first): ******")

        var sortedJsObjects = taskList.sort(function(a,b){ 
            return Math.abs(new Date(a.deadline) - new Date(b.deadline)) 
        });

        console.log(sortedJsObjects);


      }

      filterAndPrint(){
        console.log("****** Tasks filtered, only (urgent == true): ******")
        const result = taskList.filter(item => item.urgent === true);
        console.log(result);
    }
  }


taskList.push(var1);
taskList.push(var2);
taskList.push(var3);

const myTask = new Task();
myTask.sortAndPrint();
myTask.filterAndPrint();


console.log(taskList);