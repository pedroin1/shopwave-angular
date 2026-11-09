import { provideZonelessChangeDetection } from '@angular/core';
import { MockBuilder, MockedComponentFixture, MockRender } from 'ng-mocks';
import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  beforeEach(() => MockBuilder(LoginComponent).provide(provideZonelessChangeDetection()));

  const setupTesting = (): MockedComponentFixture<LoginComponent> => MockRender(LoginComponent);

  it('should create', () => {
    const fixture = setupTesting();
    expect(fixture.point.componentInstance).toBeTruthy();
  });
});
