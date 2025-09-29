export function stringToBuffer(str:string,cb?:(buffer:ArrayBuffer)=>void){
    return new Promise((resolve,reject)=>{
        const b = new Blob([str])
        const f = new FileReader()
        f.onload = function (e:any) {
          cb && cb(e.target.result)
          resolve(e.target.result)
        }
        f.readAsArrayBuffer(b)
        f.onerror = function (e) {
            reject(e)
        }
    })
}