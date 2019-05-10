export function GrayLog(endpoint: string): MethodDecorator {
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {

    const originalMethod = descriptor.value;

    descriptor.value = function (...args) {
      console.log(`%c Send some data to gray log: /api/${endpoint}/${args[0].name}`, 'color: green');

      originalMethod.apply(this, args);
    };
  };
}
