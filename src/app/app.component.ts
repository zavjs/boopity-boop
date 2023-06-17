import { HostListener, Component, Directive, ElementRef, Input, Renderer2  } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'coding-challenge-v2';
  tasks = [
    {
      title: 'task 1',
      completed: false,
    },
    {
      title: 'task 2',
      completed: false,
    },
    {
      title: 'task 3',
      completed: false,
    },
    {
      title: 'task 4',
      completed: false,
    },
  ];

  completedTasks = [
    {
      title: 'task 5',
      completed: false,
    },
    {
      title: 'task 6',
      completed: false,
    },
    {
      title: 'task 7',
      completed: false,
    },
    {
      title: 'task 8',
      completed: false,
    },
  ];

  addTask(description: string) {
    this.tasks.push({
      title: description,
      completed: false,
    });
  }

  deleteTask(task: any) {
    let index = this.tasks.indexOf(task);
    if (index !== -1) {
      this.tasks.splice(index, 1);
    }
  }
  /////
  loop:any[]= [];
  type = 0;
  constructor() {
  }
  @HostListener('click', ['$event.target']) onClick(x:any) {
    console.log('obj', x);
    // if (this.type == 1) { //loop
    x.style = "border: 1px dashed green";
      this.loop.push(x)
      this.processLoop();
    // }
  }
  processLoop() {
    if (this.loop.length == 2) {
      console.log(this.loop);
      let filterName = '';
      let filterClass = '';
      if (this.loop[0].nodeName == this.loop[1].nodeName) {
        if (this.loop[0].className != '' && this.loop[0].className == this.loop[1].className) {
          filterClass = '.'+this.loop[0].className.split(" ").join('.');
        }
        if (this.loop[0].name && this.loop[0].name == this.loop[1].name) {
          filterName = '[name=\''+this.loop[0].name+'\']';
        }
        const elements = document.querySelectorAll(this.loop[0].nodeName+filterClass+filterName)
        elements.forEach((el:any) => {
          el.style = "border: 1px solid red";
        })
      } 
    }
  }
  startClickInput() {

  }
  startInputClick() {

  }
  startLoopClick() {
    console.log('starting loop');
    this.type = 1;

  }
}
