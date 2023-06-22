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
  predicted:NodeListOf<any>|null = null;
  type = 0;
  actions = [
    {id: 1, icon: '/assets/click.png', title: 'Click a button', subtitle: 'allowyou to click on a button for ead element'},
    {id: 2, icon: '/assets/input-text.png', title: 'Input text', subtitle: 'allows you to input text for each element'},
    {id: 3, icon: '/assets/box-3.png', title: 'Store data', subtitle: 'Amet minim mollit non deserunt ullamco est sit.', dark: true},
    {id: 4, icon: '/assets/box-4.png', title: 'If condition', subtitle: 'Amet minim mollit non deserunt ullamco est sit.', dark: true},
    {id: 5, icon: '/assets/box-5.png', title: 'For Loop', subtitle: 'Amet minim mollit non deserunt ullamco est sit.', dark: true},
  ]
  constructor() {
  }
  @HostListener('click', ['$event.target']) onClick(x:any) {
    if (this.type == 5) {
      x.style = "border: 1px dashed green";
      if (this.loop.length != 3) {
        this.loop.push(x)
        this.processLoop();
      } else {
        this.clearLoop();
      }
    }
  }

  processLoop() {
    if (this.loop.length == 3) {
      let filterName = '';
      let filterClass = '';
      if (this.loop[1].nodeName == this.loop[2].nodeName) {
        if (this.loop[1].className != '' && this.loop[1].className == this.loop[2].className) {
          filterClass = '.'+this.loop[1].className.split(" ").join('.');
        }
        if (this.loop[1].name && this.loop[1].name == this.loop[2].name) {
          filterName = '[name=\''+this.loop[1].name+'\']';
        }
        this.predicted = document.querySelectorAll(this.loop[1].nodeName+filterClass+filterName)
        this.markPredictedElements()
      } 
    }
  }
  markPredictedElements() {
    this.predicted?.forEach((el:any) => {
      el.style = "border: 1px solid red";
    })
  }
  runBotClick() {
    this.predicted?.forEach(x => {
      x.click();
    })
  }
  runBotWrite() {
    this.predicted?.forEach(x => {
      x.value = 'xxxxx';
    })
  }
  clearLoop() {
    this.predicted?.forEach(x => {
      x.style = '';
    })
    this.loop.forEach(x => {
      x.style = '';
    })
    this.loop = [];
    this.predicted = null;
  }
  startAction(action:any) {
    this.type = action.id
    switch (action.id) {
      case 5:
        this.clearLoop();
        break;
    }
  }
}
