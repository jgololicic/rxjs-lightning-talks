export function GrayLog(): MethodDecorator {
  return function(target: Function, key: string, descriptor: any) {

    const originalMethod = descriptor.value;

    descriptor.value =  function (...args: any[]) {
      console.log(`%c Some data sent to GrayLog ${args[0].name} with rate ${args[0].rate}`, 'color: purple; ');
      return originalMethod.apply(this, args);
    };

    return descriptor;
  };
}
