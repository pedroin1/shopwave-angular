import { provideZonelessChangeDetection } from '@angular/core';
import { MockBuilder, MockedComponentFixture, MockRender } from 'ng-mocks';
import { MainLayoutComponent } from './main-layout.component';

describe('MainLayoutComponent', () => {
  beforeEach(() => MockBuilder(MainLayoutComponent).provide(provideZonelessChangeDetection()));

  const setupTesting = (): MockedComponentFixture<MainLayoutComponent> =>
    MockRender(MainLayoutComponent);

  it('should create', () => {
    const fixture = setupTesting();
    expect(fixture.point.componentInstance).toBeTruthy();
  });
});
