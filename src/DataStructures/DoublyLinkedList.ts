class DNode {
  value: any
  next: DNode
  prev: DNode
  constructor(v?: any) {
    this.value = v ?? undefined
  }
}
export class DoublyLinkedList {
  head: DNode
  tail: DNode
  private _length = 0

  /**
   * * 在末尾插入一个值
   *
   * @param {*} element
   * @memberof DoublyLinkedList
   */
  append(element: any) {
    const node = new DNode()
    node.value = element
    if (this._length === 0) {
      this.head = node
    } else {
      node.prev = this.tail
      this.tail.next = node
    }
    this.tail = node
    this._length += 1
  }

  /**
   * * 在指定位置插入一个节点
   *
   * @param {number} position
   * @param {element} any
   * @memberof DoublyLinkedList
   */
  insert(position: number, element: any) {
    if (position < 0 || position > this._length) return false
    if (this._length === 0) {
      this.append(new DNode(element))
    } else {
      const nodeOld = this.get(position, true)
      const nodeNew = new DNode(element)
      const preNode = nodeOld.prev
      preNode.next = nodeNew
      nodeNew.prev = preNode
      nodeOld.prev = nodeNew
      if (position === 0) {
        this.head = nodeNew
      }
      if (position === this._length - 1) {
        this.tail = nodeNew
      }
    }
    this._length++
  }

  pop() {
    if (this.tail) {
      this.tail = this.tail.prev ?? undefined
    }
  }

  /**
   * * 删除某个值
   *
   * @param {*} element
   * @memberof DoublyLinkedList
   */
  remove(element: any) {
    let current = this.head
    while (current) {
      if (current.value === element) {
        const preNode = current.prev
        const nextNode = current.next
        if (preNode) {
          preNode.next = nextNode
        }
        if (nextNode) {
          nextNode.prev = preNode
        }
        // !释放掉
        //@ts-ignore
        current = null
        break
      } else {
        current = current.next
      }
    }
  }

  removeAt(index) {}

  /**
   * * 获取某一个索引的节点
   *
   * @param {number} index
   * @return {DNode}
   * @memberof DoublyLinkedList
   */
  get(index: number, isDNode = false): any {
    if (index < 0 || index > this._length) {
      throw new Error("index error")
    }
    let tmp_count = 0
    let current = this.head
    while (tmp_count < index) {
      current = current.next
      tmp_count++
    }
    if (isDNode) {
      return current
    }
    return current.value
  }

  /**
   * * 查询当前元素的索引
   *
   * @param {*} element
   * @return {*}  {number}
   * @memberof DoublyLinkedList
   */
  indexOf(element: any): number {
    let tmp_count = 0
    let current = this.head
    while (current.value !== element && tmp_count < this._length) {
      current = current.next
      tmp_count++
    }
    if (tmp_count < this._length) {
      return tmp_count
    } else {
      return -1
    }
  }

  /**
   * * 更新索引位置处的值
   *
   * @param {*} index
   * @param {*} element
   * @memberof DoublyLinkedList
   */
  update(index: number, element: any) {
    this.get(index, true).value = element
  }

  isEmpty(): boolean {
    return this._length === 0
  }

  get length() {
    return this._length
  }

  /**
   * * 遍历节点
   *
   * @memberof DoublyLinkedList
   */
  forEach(func: (element: any) => void) {
    let current = this.head
    while (current) {
      func(current.value)
      current = current.next
    }
  }
}
