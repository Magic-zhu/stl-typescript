/**
 * 获取当前帧数
 * @return {Promise} Number
 */
export const getFpsTime = (): Promise<number> => {
  return new Promise((resolve,reject) => {
    if (requestAnimationFrame && performance) {
      let start = 0;
      requestAnimationFrame((timeStamp) => {
        start = timeStamp
        requestAnimationFrame((timeStampEnd)=>{
          resolve(timeStampEnd - start);
        }) 
      });
    }else{
        reject(0);
    }
  });
};
