import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import Button from './button'

// 配合addDecorator方法，可改变组件样式(也可以全局配置decorator)
// const styles: React.CSSProperties = {
//   textAlign: 'center'
// }
// const centerDecorator = (fn: any) => <div style={styles}>{fn()}</div>

const defaultButton = () => (
  <Button onClick={action('clicked')}> default button </Button>
)

const buttonWithSize = () => (
  <>
    <Button size="lg"> large button </Button>
    <Button size="sm"> small button </Button>
  </>
)

const buttonWithType = () => (
  <>
    <Button btnType="primary"> primary button </Button>
    <Button btnType="danger"> danger button </Button>
    <Button btnType="link" href="https://google.com"> link button </Button>
  </>
)
storiesOf('Button Component', module)
  .addParameters({
    info: {
      text: '提示信息~',
      inline: true
    }
  })
  // .addDecorator(centerDecorator)
  .add('Button', defaultButton)
  .add('不同尺寸的 Button', buttonWithSize)
  .add('不同类型的 Button', buttonWithType)