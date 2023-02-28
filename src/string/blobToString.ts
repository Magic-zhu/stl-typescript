
  /**
   * @description blob对象转成string
   * @export
   * @param {Blob} blob
   * @return {Promise<string>}
   * @version 1.0.0
   */
  export function blobToString(blob: Blob): Promise<string> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsText(blob, "utf-8");
      reader.onload = () => {
        resolve(reader.result.toString());
      };
      reader.onerror = (err) => {
        reject(err);
      }
    });
  }

