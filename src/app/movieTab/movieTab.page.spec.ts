import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { MovieTabPage } from './movieTab.page';

describe('MovieTabPage', () => {
  let component: MovieTabPage;
  let fixture: ComponentFixture<MovieTabPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MovieTabPage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule],
    }).compileComponents();

    fixture = TestBed.createComponent(MovieTabPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
