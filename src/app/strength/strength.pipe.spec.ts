import { StrengthPipe } from "./strength.pipe"

describe('StrengthPipe', () => {
  it('should disaply weak if strength is less then 5', () => {
    let pipe = new StrengthPipe();
    let pipeOutput = pipe.transform(5);
    expect(pipeOutput).toEqual('5 (weak)')
  });
  
  it('should disaply strong if strength is 10', () => {
    let pipe = new StrengthPipe();
    let pipeOutput = pipe.transform(10);
    expect(pipeOutput).toEqual('10 (strong)')
  });
})