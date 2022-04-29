import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { ProjectManagerPage } from './projectManager.page';

describe('ProjectManagerPage', () => {
  let component: ProjectManagerPage;
  let fixture: ComponentFixture<ProjectManagerPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectManagerPage ],
      imports: [IonicModule.forRoot(), RouterModule.forRoot([])]
    }).compileComponents();

    fixture = TestBed.createComponent(ProjectManagerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
