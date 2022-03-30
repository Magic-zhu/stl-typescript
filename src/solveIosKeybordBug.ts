/**
 * @description <span style='color:red'>解决ios keyboard 导致页面不弹起问题</span>
 */
export const solveIosKeybordBug = function(){
    setTimeout(() => {
        let height = document.documentElement.scrollTop || document.body.scrollTop
        window.scrollTo(0, height + 1)
        window.scrollTo(0, height - 1)
      }, 17)
}