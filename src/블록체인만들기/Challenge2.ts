// Challenge goals:
// classes 그리고 interfaces 를 활용하여, 아래 API를 위한 '미니' 버전을 구현하세요.

// LocalStorage API
// Geolocation API
// LocalStorage API:
// Use abstract classes and generics.
// 추상화 클래스와 제네릭을 사용하세요.

interface SStorage<T>{
    [key:string]: T
}

abstract class LocalStorage<T> {
    constructor(
        private storage : SStorage<T> = {}
        ){}
    setItem(key:string, value:T){
        this.storage[key] = value;
    }
    getItem(key:string):T{
        return this.storage[key]
    }
    clear(){
        this.storage = {}
    }
    clearItem(key:string){
        delete this.storage[key]
    }
}

localStorage.setItem(<key>, <value>)
localStorage.getItem(<key>)
localStorage.clearItem(<key>)
localStorage.clear()

// Documentation: https://developer.mozilla.org/en-US/docs/Web/API/Storage

geolocation.getCurrentPosition(successFn);
geolocation.getCurrentPosition(successFn, errorFn);
geolocation.getCurrentPosition(successFn, errorFn, optionsObj);
geolocation.watchPosition(success);
geolocation.watchPosition(success, error);
geolocation.watchPosition(success, error, options);
geolocation.clearWatch(id);

// Documentation: https://developer.mozilla.org/en-US/docs/Web/API/Geolocation

interface IGeolocation {
    clearWatch(watchId: number): void;
    getCurrentPosition(
      successCallback: IPositionCallback,
      errorCallback?: IPositionErrorCallback | null,
      options?: IGeolocationOptions
    ): void;
    watchPosition(
      successCallback: PositionCallback,
      errorCallback?: IPositionErrorCallback | null,
      options?: IGeolocationOptions
    ): number;
  }
  
  // successCallback interface
  interface IPositionCallback {
    (position: IGeolocationPosition): void;
  }
  interface IGeolocationPosition {
    readonly coords: IGeolocationCoordinates;
    readonly timestamp: IEpochTimeStamp;
  }
  interface IGeolocationCoordinates {
    readonly accuracy: number;
    readonly altitude: number | null;
    readonly altitudeAccuracy: number | null;
    readonly heading: number | null;
    readonly latitude: number;
    readonly longitude: number;
    readonly speed: number | null;
  }
  type IEpochTimeStamp = number;
  
  // errorCallback interface
  interface IPositionErrorCallback {
    (positionError: IGeolocationPositionError): void;
  }
  interface IGeolocationPositionError {
    readonly code: number;
    readonly message: string;
    readonly PERMISSION_DENIED: number;
    readonly POSITION_UNAVAILABLE: number;
    readonly TIMEOUT: number;
  }
  
  // option interface
  interface IGeolocationOptions {
    enableHighAccuracy: boolean;
    timeout: number;
    maximumAge: number;
  }
  
  // Geolocation class
  class GGeolocation implements IGeolocation {
    clearWatch(watchId: number) {
      console.log(watchId);
    }
    getCurrentPosition(
      successCallback: IPositionCallback,
      errorCallback?: PositionErrorCallback | null,
      options?: PositionOptions
    ) {
      if (successCallback) console.log(successCallback);
      if (errorCallback) console.log(errorCallback);
      if (options) console.log(options);
    }
    watchPosition(
      successCallback: PositionCallback,
      errorCallback?: PositionErrorCallback | null,
      options?: PositionOptions
    ) {
      if (successCallback) console.log(successCallback);
      if (errorCallback) console.log(errorCallback);
      if (options) console.log(options);
      return 0;
    }
  }
  
  const geolocation = new GGeolocation();
  geolocation.getCurrentPosition(test);
  geolocation.getCurrentPosition(test, test);
  geolocation.getCurrentPosition(test, test, {});
  
  function test() {}