import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { By } from '@angular/platform-browser';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
  
  it(`should have a h1 title 'To Do List'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const titleElement = fixture.debugElement.query(By.css('h1'));
    expect(titleElement.nativeElement.textContent).toEqual('To Do List');
  });

  it('should have button for adding new task', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const buttonElement = fixture.debugElement.query(By.css('#add-task'));
    expect(buttonElement.nativeElement.textContent).toEqual('Add New Task');
  });

  it('should have input for new task', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const inputElement = fixture.debugElement.query(By.css('#new-task-name'));
    expect(inputElement.nativeElement.value).toEqual('');
  });

  it('should dispatch addTask action when button is clicked', () => {
    const taskAdded = spyOn(component.store, 'dispatch');
    const fixture = TestBed.createComponent(AppComponent);
    const buttonElement = fixture.debugElement.query(By.css('#add-task'));
    buttonElement.triggerEventHandler('click', null);
    expect(taskAdded).toHaveBeenCalled();
  });

  it('should dispatch addTask action with correct payload', () => {
    const taskAdded = spyOn(component.store.addTask, 'dispatch');
    const fixture = TestBed.createComponent(AppComponent);
    const buttonElement = fixture.debugElement.query(By.css('#add-task'));
    buttonElement.triggerEventHandler('click', null);
    expect(taskAdded).toHaveBeenCalledWith({name: ''});
  });

  it('should have a list of tasks', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const listElement = fixture.debugElement.query(By.css('#tasks-list'));
    expect(listElement.nativeElement.children.length).toEqual(0);
  });

  it('should display tasks in the list', () => {
    component.tasks = [{id: 1, name: 'Task 1'}, {id: 2, name: 'Task 2'}];
    fixture.detectChanges();
    const listElement = fixture.debugElement.query(By.css('#tasks-list'));
    expect(listElement.nativeElement.children.length).toEqual(2);
  });

  it('should checked item in the list on checkbox click', () => {
    const fixture = TestBed.createComponent(AppComponent);
    component.tasks = [{id: 1, name: 'Task 1'}, {id: 2, name: 'Task 2'}];
    fixture.detectChanges();
    const checkboxElement = fixture.debugElement.query(By.css('#task-1'));
    checkboxElement.triggerEventHandler('click', null);
    expect(checkboxElement.nativeElement.checked).toEqual(true);
  });
});
