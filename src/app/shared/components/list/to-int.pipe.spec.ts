import { ToIntPipe } from './to-int.pipe';

describe('ToIntPipe', () => {
  it('create an instance', () => {
    const pipe = new ToIntPipe();
    expect(pipe).toBeTruthy();
  });
});
