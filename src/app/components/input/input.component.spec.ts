import { provideZonelessChangeDetection } from '@angular/core';
import { MockBuilder, MockedComponentFixture, MockRender } from 'ng-mocks';
import { InputComponent } from './input.component';

describe('InputComponent', () => {
  beforeEach(() => MockBuilder(InputComponent).provide(provideZonelessChangeDetection()));

  const setupTesting = (): MockedComponentFixture<InputComponent> => MockRender(InputComponent);

  it('should create', () => {
    const fixture = setupTesting();
    expect(fixture.point.componentInstance).toBeTruthy();
  });
});
