export interface EventTarget {
    handler: Function
    once: boolean
  }
  
  export interface Options {
    once?: boolean
    only?: boolean
  }
  class IO {
    // _proto_ no need
    static _events: any = Object.create(null)
    static MAX_LISTENERS: number = 30
  
    constructor() {}
  
    static on(eventName: string, listener: Function, options: Options = {}) {
      if (eventName === undefined || listener === undefined) {
        console.error('event or listener is required!')
        return
      }
  
      if (!(eventName in this._events)) {
        this._events[eventName] = []
      }
  
      if (this._events[eventName].length >= this.MAX_LISTENERS) {
        console.error(`${eventName}'s number of listeners has reached the limit`)
        return
      }
  
      if (options.only) {
        if (this._events[eventName].length !== 0) {
          return
        }
      }
  
      this._events[eventName].push({
        handler: listener,
        once: options.once != undefined ? options.once : false,
      })
    }
  
    static emit(eventName: string, ...args: any) {
      if (!(eventName in this._events)) {
        return false
      }
  
      const listeners = this._events[eventName]
      try {
        listeners.forEach((eventTarget: EventTarget) => {
          eventTarget.handler(...args)
          if (eventTarget.once) {
            this.removeListener(eventName, eventTarget.handler)
          }
        })
      } catch (error) {
        console.error(error)
      }
    }
  
    static once(eventName: string, listener: Function) {
      this.on(eventName, listener, {once: true})
    }
  
    static off(eventName: string, listener: Function) {
      this.removeListener(eventName, listener)
    }
  
    static removeListener(eventName: string, listener: Function) {
      if (!(eventName in this._events)) {
        console.warn(`there is no event named ${eventName}`)
        return false
      }
  
      let listenerIndex:number|null = null
  
      for (let i = 0, l = this._events[eventName].length; i < l; i++) {
        if (this._events[eventName][i].handler === listener) {
          listenerIndex = i
          break
        }
      }
  
      if (listenerIndex !== null) {
        this._events[eventName].splice(listenerIndex, 1)
      }
    }
  
    static removeAllListener(eventName: string) {
      if (this._events[eventName] === undefined) {
        console.warn(`there is no event named ${eventName}`)
        return false
      }
  
      this._events[eventName] = []
    }
  
    static setMaxListeners(num: number) {
      this.MAX_LISTENERS = num
    }
  
    static clear() {
      this._events = Object.create(null)
    }
  }
  export default IO
  