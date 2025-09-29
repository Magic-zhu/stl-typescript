/**
 * 根据文件名获取文件后缀
 * @param filename 
 * @returns 
 */
export function getExtension(filename:string):string {
    return filename.match(/\.([^.]+)$/)?.[1] || '';
}