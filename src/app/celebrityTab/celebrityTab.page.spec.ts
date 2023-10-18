import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { CelebrityTabPage } from './celebrityTab.page';

describe('CelebrityTabPage', () => {
  let component: CelebrityTabPage;
  let fixture: ComponentFixture<CelebrityTabPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CelebrityTabPage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule],
    }).compileComponents();

    fixture = TestBed.createComponent(CelebrityTabPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
