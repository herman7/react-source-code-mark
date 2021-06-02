import React from 'react'

function ChildrenDemo(props) {
  console.log(props.children) // 一个数组
  console.log(React.Children.map(props.children, c => [c, [c, c]])) // 当函数参数2返回的是数组，map会自动展开数组的各个元素变为一维数组
  return props.children
}

export default () => (
  <ChildrenDemo>
    <span>1</span>
    <span>2</span>
  </ChildrenDemo>
)
