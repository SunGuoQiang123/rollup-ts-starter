import Tracker from '../src/index';

const tracker = new Tracker('sgq', {})

it('should work', () => {
  expect(tracker.name).toBe('sgq');
});
